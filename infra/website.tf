resource "aws_s3_bucket_website_configuration" "bucket_website" {
  bucket = aws_s3_bucket.primary_site_bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}