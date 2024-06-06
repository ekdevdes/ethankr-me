### Create S3 buckets for compiled react app and the server logs
# Compiled React app bucket
resource "aws_s3_bucket" "site_bucket" {
  # Bucket is named the same thing as the domain
  bucket = var.domain_name
}

# Server logs bucket
resource "aws_s3_bucket" "site_logs_bucket" {
  bucket = "logs-${var.domain_name}"
}

### Setup Access Controls for compiled react app bucket
resource "aws_s3_bucket_public_access_block" "site_bucket_public_access_block" {
  bucket = aws_s3_bucket.site_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "site_bucket_acl" {
  depends_on = [
    aws_s3_bucket_public_access_block.site_bucket_public_access_block
  ]

  bucket = aws_s3_bucket.site_bucket.id
  acl    = "public-read"
}

data "aws_iam_policy_document" "site_bucket_iam_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.site_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.site_origin_access_identity.iam_arn]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.site_bucket.arn]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.site_origin_access_identity.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "site_bucket_policy" {
  bucket = aws_s3_bucket.site_bucket.id
  policy = data.aws_iam_policy_document.site_bucket_iam_policy.json
}

### Setup versioning for the compile react app bucket
resource "aws_s3_bucket_versioning" "bucket_versioning" {
  bucket = aws_s3_bucket.site_bucket.id

  versioning_configuration {
    status = "Enabled"
  }
}

### Setup Server Logging for the compiled react app bucket
resource "aws_s3_bucket_logging" "site_logs_bucket_logging" {
  bucket        = aws_s3_bucket.site_logs_bucket.id
  target_bucket = aws_s3_bucket.site_bucket.id
  target_prefix = "logs/"
}
