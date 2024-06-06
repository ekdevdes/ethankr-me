### Setup the CloudFront distro serving the compile react app
# Setup the origin access policy for the cloudfront distro
resource "aws_cloudfront_origin_access_identity" "site_origin_access_identity" {
  comment = "ethankr.me Origin Access Identity"
}

resource "aws_cloudfront_distribution" "site_s3_cf_distro" {
  enabled             = true
  default_root_object = "index.html"
  aliases             = ["ethankr.me", "*.ethankr.me"] # This works because of the SSL cert we have from ACM listed below

  # For now we'll only allow GET, HEAD and OPTIONS requests, we can combe back and modify this later if we want to allow more
  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = "${aws_s3_bucket.site_bucket.bucket}-origin"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    min_ttl     = 604800  # one week
    default_ttl = 1209600 # two weeks
    max_ttl     = 2592000 # one month

    # All cookies and query strings from the original request will be cached by forwarded to the s3 bucket for the react app
    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }
  }

  # Setting up our compiled react app s3 bucket as the source or origin of the cloudfront distro
  origin {
    domain_name = aws_s3_bucket.site_bucket.bucket_regional_domain_name
    origin_id   = "${aws_s3_bucket.site_bucket.bucket}-origin"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.site_origin_access_identity.cloudfront_access_identity_path
    }
  }

  # Allow everyone to access the site (no location restrictions)
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # Our SSL cert for our ethankr.me and *.ethankr.me domains listed in the `aliases` section above
  viewer_certificate {
    acm_certificate_arn            = aws_acm_certificate.site_ssl_cert.arn
    cloudfront_default_certificate = false
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }

  # Only use CDN servers in North America and Europe since our site won't be highly accessed from other locations
  price_class = "PriceClass_100"
}

# Output the final cloudfront url for informative purposes
output "cloudfront_distro_id" {
  value = aws_cloudfront_distribution.site_s3_cf_distro.id
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.site_s3_cf_distro.domain_name
}
