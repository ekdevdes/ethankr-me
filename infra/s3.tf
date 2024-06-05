# primary site bucket
resource "aws_s3_bucket" "site_bucket" {
  bucket = "ethankr.me"
}

# bucket for the access logs for the primary site bucket
resource "aws_s3_bucket" "site_logs_bucket" {
  bucket = "logs-ethankr.me"
}

output "s3_website_url" {
  value = aws_s3_bucket.site_bucket.bucket_regional_domain_name
}