terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "tf-state-ethankr.me"
    key = "terraform.tfstate"
    region = "us-east-1"

    dynamodb_table = "tf-state-lock-ethankr.me"
  }
}

provider "aws" {
  region = "us-east-1"
}