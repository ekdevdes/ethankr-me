# ethankr.me
Repo for my personal website written with React.js 18 + TypeScript. Hosted on AWS S3 with Route53 and CloudFront for the SSL and CDN. Setup with Terraform.

# Tech Stack
- React 18
- TypeScript
- Vite
- Bun _(See https://bun.sh/ for more details, but can be _much_ faster than npm)_
- Tailwind CSS
  - Docs: https://tailwindcss.com/docs/installation
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

Then install bun from the homebrew reppo:

```zsh
brew install bun
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