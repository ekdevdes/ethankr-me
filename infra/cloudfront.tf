resource "aws_cloudfront_origin_access_identity" "site_origin_access_identity" {
  comment = "ethankr.me Origin Access Identity"
}

resource "aws_cloudfront_distribution" "site_s3_cf_distro" {
  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = "${aws_s3_bucket.site_bucket.bucket}-origin"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    min_ttl                = 604800 # one week
    default_ttl            = 1209600 # two weeks
    max_ttl                = 2592000 # one month

    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }
  }

  origin {
    domain_name = aws_s3_bucket.site_bucket.bucket_regional_domain_name
    origin_id   = "${aws_s3_bucket.site_bucket.bucket}-origin"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.site_origin_access_identity.cloudfront_access_identity_path
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  price_class = "PriceClass_100"
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.site_s3_cf_distro
}