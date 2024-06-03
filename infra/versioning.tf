resource "aws_s3_bucket_versioning" "bucket_versioning" {
  bucket = aws_s3_bucket.primary_site_bucket

  versioning_configuration {
    status = "Enabled"
  }
}