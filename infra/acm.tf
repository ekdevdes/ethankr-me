resource "aws_acm_certificate" "site_ssl_cert" {
  domain_name               = "ethankr.me"
  subject_alternative_names = ["*.ethankr.me"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "site_cert_validation" {
  certificate_arn         = aws_acm_certificate.site_ssl_cert.arn
  validation_record_fqdns = ["ethankr.me", "*.ethankr.me"]
}
