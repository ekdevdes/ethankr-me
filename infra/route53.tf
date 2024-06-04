resource "aws_route53_zone" "site_dns_zone" {
  name = "ethankr.me."
}

resource "aws_route53_record" "site_www_sub_domain" {
  zone_id = aws_route53_zone.site_dns_zone.zone_id
  name = "www"
  type = "A"

  alias {
    name = aws_cloudfront_distribution.site_s3_cf_distro.domain_name
    zone_id = aws_cloudfront_distribution.site_s3_cf_distro.hosted_zone_id
    evaluate_target_health = false
  }
}