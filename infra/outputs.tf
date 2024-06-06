### Various bits of helpful info about our infrastructure so you don't have to go hunting for it in AWS
output "cloudfront_distro_id" {
  value = aws_cloudfront_distribution.site_s3_cf_distro.id
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.site_s3_cf_distro.domain_name
}

# The name servers associated with our domain
output "route53_name_servers" {
  value = aws_route53_zone.site_dns_zone.name_servers
}
