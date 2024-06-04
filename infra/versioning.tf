resource "aws_s3_bucket_versioning" "bucket_versioning" {
  bucket = aws_s3_bucket.site_bucket.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_versioning" "terraform_state" {
    bucket = aws_s3_bucket.tf_state_bucket.id

    versioning_configuration {
      status = "Enabled"
    }
}