### Generating SSL certs to verify ownership and security of the ethankr.me domain
# Generating the cert for ethankr.me and *.ethankr.me
resource "aws_acm_certificate" "site_ssl_cert" {
  domain_name               = "ethankr.me"
  subject_alternative_names = ["*.ethankr.me"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "site_domain_validations" {
  for_each = {
    for dvo in aws_acm_certificate.site_ssl_cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      record = dvo.resource_record_value
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.site_dns_zone.zone_id
}
