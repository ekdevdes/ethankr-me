### Seting up the ethankr.me domain
# Setting up the top-level domain with a fully-qualified domain name
resource "aws_route53_zone" "site_dns_zone" {
  name = "ethankr.me."
}

# Setting *.ethankr.me to point to the cloudfront distro serving our compiled react app from an s3 bucket
resource "aws_route53_record" "site_www_sub_domain" {
  zone_id = aws_route53_zone.site_dns_zone.zone_id
  name    = "*"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site_s3_cf_distro.domain_name
    zone_id                = aws_cloudfront_distribution.site_s3_cf_distro.hosted_zone_id
    evaluate_target_health = false
  }
}

# Also set ethankr.me (no subdomain) to serve from the same cloudfront distro
resource "aws_route53_record" "site_tld" {
  zone_id = aws_route53_zone.site_dns_zone.zone_id
  name    = ""
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site_s3_cf_distro.domain_name
    zone_id                = aws_cloudfront_distribution.site_s3_cf_distro.hosted_zone_id
    evaluate_target_health = false
  }
}

# Output the name servers for the route53 domain name in case we need to use them to update DNS registrars
output "route53_name_servers" {
  value = aws_route53_zone.site_dns_zone.name_servers
}
