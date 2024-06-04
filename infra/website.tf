resource "aws_s3_bucket_website_configuration" "bucket_website" {
  bucket = aws_s3_bucket.site_bucket.id

  index_document {
    suffix = "index.html"
  }

  # Since the app is a react app both states will be handled by the same document
  error_document {
    key = "index.html"
  }
}