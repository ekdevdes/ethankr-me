resource "aws_acm_certificate" "site_cert" {
  domain_name       = "ethankr.me"
  validation_method = "DNS"
  subject_alternative_names = ["www.ethankr.me", "ethankr.me"]

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "site_cert_validation" {
  certificate_arn         = aws_acm_certificate.site_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.site_cert_validation_record : record.fqdn]
}


resource "aws_route53_record" "site_cert_validation_record" {
  for_each = {
    for validation_option in aws_acm_certificate.site_cert.domain_validation_options : validation_option.domain_name => {
      name   = validation_option.resource_record_name
      record = validation_option.resource_record_value
      type   = validation_option.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.site_dns_zone.zone_id
}