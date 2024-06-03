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

## Installing Terraform
This repo uses Terraform to manage AWS infrastructure as code. Before making any changes to the `.tf` files in the `infra` directory you'll need to install the `terraform` cli. To do that first you'll have to tap the homebrew repo with:

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