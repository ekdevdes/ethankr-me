resource "aws_cloudfront_distribution" "site_s3_cf_distro" {
  enabled = true
  aliases = ["www.ethankr.me"]
  default_root_object = "index.html"

  origin {
    origin_id                = "${aws_s3_bucket.site_bucket.id}-origin"
    domain_name              = aws_s3_bucket.site_bucket.bucket_regional_domain_name

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1"]
    }
  }

  default_cache_behavior {
    target_origin_id = "${aws_s3_bucket.site_bucket.id}-origin"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]

    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 604800 # one week
    default_ttl            = 1209600 # two weeks
    max_ttl                = 2592000 # one month
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