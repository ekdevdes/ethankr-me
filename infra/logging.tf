resource "aws_s3_bucket_logging" "site_logs_bucket_logging" {
  bucket = aws_s3_bucket.site_logs_bucket.id
  target_bucket = aws_s3_bucket.site_bucket.id
  target_prefix = "logs/"
}