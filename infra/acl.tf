resource "aws_s3_bucket_ownership_controls" "site_bucket_ownership_controls" {
  bucket = aws_s3_bucket.site_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred" # objects uploaded to th bucket change ownership to the bucket owner
  }
}

resource "aws_s3_bucket_public_access_block" "site_bucket_public_access_block" {
  bucket = aws_s3_bucket.site_bucket.id

  block_public_acls = false
  block_public_policy = false
  ignore_public_acls = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "site_bucket_acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.site_bucket_ownership_controls, 
    aws_s3_bucket_public_access_block.site_bucket_public_access_block
  ]

  bucket = aws_s3_bucket.site_bucket.id
  acl = "public-read"
}

resource "aws_s3_bucket_acl" "site_logs_bucket_acl" {
  bucket = aws_s3_bucket.site_logs_bucket.id
  acl = "log-delivery-write" # only allow access to write logs
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