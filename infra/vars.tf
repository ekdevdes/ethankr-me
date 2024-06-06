variable "domain_name" {
  type    = string
  default = "ethankr.me"
}

variable "allowed_methods_cloudfront" {
  type    = list(string)
  default = ["GET", "HEAD", "OPTIONS"]
}
