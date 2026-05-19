# AI Assistant Instructions

This repository uses AI-assisted development. Before modifying files, read the relevant project documentation.

## Required context files

Before making changes, inspect:

- `README.md`
- `docs/WOOBY_CONTEXT.md`
- `docs/BRAND_GUIDELINES.md`
- `docs/WEBSITE_UPDATE_WORKFLOW.md`
- `package.json`
- `svelte.config.js`
- `vite.config.js`
- `src/app.css`

## General working rules

- Do not modify production deployment configuration without explaining the impact.
- Do not introduce unnecessary dependencies.
- Preserve the existing project structure unless there is a clear reason to change it.
- Prefer small, reviewable changes.
- Before replacing large sections of the website, identify what existing behavior, links, metadata, forms, scripts, or assets must be preserved.
- Keep the site lightweight, accessible, responsive, and easy to maintain.
- Use semantic HTML and accessible component structure.
- Ensure headings, alt text, buttons, links, and navigation are clear.
- Do not remove existing content unless explicitly instructed.
- When changing copy, follow the tone and brand principles in `docs/BRAND_GUIDELINES.md`.
- When changing project positioning, follow `docs/WOOBY_CONTEXT.md`.
- When making technical or impact claims, check whether the claim is supported by project documentation.

## Design tokens

Before changing colors, fonts, spacing, or visual identity, inspect the project's design-token source of truth.

For this project, the current source of truth is documented in:

`docs/BRAND_GUIDELINES.md`

Do not introduce hardcoded colors or fonts unless there is a clear reason.

## Assets

Before adding or changing images, SVGs, logos, icons, patterns, or documents, follow the asset organization guidance in:

`docs/WEBSITE_UPDATE_WORKFLOW.md`

## Workflow expectations

When proposing or applying changes, summarize:

1. Files changed
2. Why they changed
3. How to test locally
4. Any deployment risk
5. Any manual check required before merging

## Branch workflow

- `main` is production.
- Work should normally happen in feature branches.
- Pull requests should target `main`.
- The site should be tested locally before opening or merging a pull request.
- The pull request build check must pass before merging.

## Deployment expectations

This project is deployed with GitHub Pages.

- The production website is deployed from `main`.
- Do not add preview deployments, secondary branches, custom deployment paths, or new deployment environments unless explicitly requested.
