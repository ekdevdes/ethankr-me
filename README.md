# ethankr.me
Repo for my personal website written with React.js 18 + TypeScript. Hosted on AWS S3 with Route53 and CloudFront for the SSL and CDN. Setup with Terraform.

# Tech Stack
- React 18
- TypeScript
- Vite
- Bun _(See https://bun.sh/ for more details, but can be _much_ faster than npm)_
- Tailwind CSS
- ESLint + Prettier for auto-formatting/linting

Hosted with:
- AWS S3 as the server
- AWS Route 53 as for the DNS propogation
- AWS CloudFront for the CDN and HTTPS

All of the above AWS services are setup with _Terraform_


# Setup Instructions

## Installing Bun
This project uses bun _(as mentioned above)_ for the speed improvements over npm, so first we'll have to tap its homebrew repo before we can install it:

```zsh
brew tap oven-sh/bun
```

Then install bun from the homebrew repo:

```zsh
brew install bun
```

## Installing the AWS CLI

To run the `terraform` commands for any infrastructure changes you'll first have to install the AWS CLI. To do that, run the following command to install it with homebrew:

```zsh
brew install awscli
```

That should take a minutes, don't worry, that's normal.

After it installs you can verify that it installed correctly by running:

```zsh
aws --version
```

If you get something like the below as the output then you know it installed correctly:

```zsh
aws-cli/2.16.0 Python/3.11.9 Darwin/23.5.0 source/x86_64
```

Next, we'll have to connect it to the AWS account used to manage the infrastructure. To do that run:

```zsh
aws configure
```

It'll ask you for the AWS Access Key, Secret Access Key, Default region and default output format. I put my default region as `us-east-1` and my default output format as `json`.

## Installing Terraform
Once the AWS CLI is installed then we can install the `terraform` CLI, used to manage the infrastructure as code. To do that first you'll have to tap the homebrew repo with the following command first:

```zsh
brew tap hashicorp/tap
```

Then install it from the homebrew repo:

```zsh
brew install hashicorp/tap/terraform
```

## Installing Dependencies

Now that Bun is installed you'll have to install the dependencies with:

```zsh
bun i
```

## Running the Dev Server

Once you've installed Bun and the dependences from `package.json` then you can run the following command to start the dev server:

```
bun run dev
```

## Terraform Commands

```zsh
terraform init
```
If this is your first time working with terraform, run `cd infra` and then this command to pull down on all the necessary module/provider data

```zsh
terraform plan
```
Run this after making any changes to get a preview of the infrastructure changes that will take place. Read this plan output _carefully_.

```zsh
terraform apply
```
_After_ you've finished verifying that all infrastructure changes are planning _as expected_, then run this command. 

> [!CAUTION]
> After this command has been run, the _only thing_ that can _undo it_ is another PR, `terraform plan` and `terraform apply`. **Please keep this in mind if reverting the change is critical as it would likely take 20-30 minutes to do so.**

## Docs Links

- **Tailwind CSS**: https://tailwindcss.com/docs/installation
- **Terraform**: https://registry.terraform.io/providers/hashicorp/aws/latest/docs