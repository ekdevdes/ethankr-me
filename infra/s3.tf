resource "aws_s3_bucket" "site_bucket" {
  bucket = "ethankr.me"

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_s3_bucket" "tf_state_bucket" {
  bucket = "tf-state-ethankr.me"
     
  lifecycle {
    prevent_destroy = true
  }
}