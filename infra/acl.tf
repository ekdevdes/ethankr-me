# objects uploaded to th bucket change ownership to the bucket owner
resource "aws_s3_bucket_ownership_controls" "bucket_ownership_controls" {
  bucket = aws_s3_bucket.primary_site_bucket

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "bucket_public_access_block" {
  bucket = aws_s3_bucket.primary_site_bucket

  block_public_acls = false
  block_public_policy = false
  ignore_public_acls = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "bucket_acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.bucket_ownership_controls, 
    aws_s3_bucket_public_access_block.bucket_public_access_block
  ]

  bucket = aws_s3_bucket.primary_site_bucket
  acl = "public-read"
}

data "aws_iam_policy_document" "bucket_iam_policy" {
  statement {
    sid = "AllowPublicRead"
    effect = "Allow"
    resources = [
      "arn:aws:s3:::ethankr.me",
      "arn:aws:s3:::ethankr.me/*"
    ]
    actions = ["S3:GetObject"]
    principals {
      type = "*"
      identifiers = ["*"]
    }
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.primary_site_bucket
  policy = aws_iam_policy_document.bucket_iam_policy.json
}