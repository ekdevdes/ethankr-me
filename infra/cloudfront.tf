### Setup the CloudFront distro serving the compile react app
# Setup the origin access policy for the cloudfront distro
resource "aws_cloudfront_origin_access_identity" "site_origin_access_identity" {
  comment = "${var.domain_name} Origin Access Identity"
}

resource "aws_cloudfront_distribution" "site_s3_cf_distro" {
  enabled             = true
  default_root_object = "index.html"
  aliases             = [var.domain_name, "*.${var.domain_name}"] # This works because of the SSL cert we have from ACM listed below

  # For now we'll only allow GET, HEAD and OPTIONS requests, we can combe back and modify this later if we want to allow more
  default_cache_behavior {
    allowed_methods        = var.allowed_methods_cloudfront
    cached_methods         = var.allowed_methods_cloudfront
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

  # Swallow 403 and 404 errors and mask them with a 200 and serve our compiled react app
  # In a production app we'd also have configs for 5xx and other 4xx codes here likely using a Lambda@Edge to pass the status code to the react app for pretty error pages
  custom_error_response {
    error_code            = "403"
    error_caching_min_ttl = 86400 # one day
    response_code         = "200"
    response_page_path    = "/index.html"
  }

  custom_error_response {
    error_code            = "404"
    error_caching_min_ttl = 86400 # one day
    response_code         = "200"
    response_page_path    = "/index.html"
  }

  # Only use CDN servers in North America and Europe since our site won't be highly accessed from other locations
  price_class = "PriceClass_100"
}
