resource "aws_dynamodb_table" "tf_state_lock_db" {
  name           = "tf-state-lock-ethankr.me"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}