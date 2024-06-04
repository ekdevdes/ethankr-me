# primary site bucket
resource "aws_s3_bucket" "site_bucket" {
  bucket = "ethankr.me"

  lifecycle {
    prevent_destroy = true
  }
}

# bucket for the access logs for the primary site bucket
resource "aws_s3_bucket" "site_logs_bucket" {
  bucket = "logs-ethankr.me"
  force_destroy = true # delete all items in bucket when destroying bucket
}

output "s3_website_url" {
  value = aws_s3_bucket.site_bucket.bucket_regional_domain_name
}