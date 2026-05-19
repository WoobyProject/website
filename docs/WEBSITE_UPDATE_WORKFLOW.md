# Wooby Website Update Workflow

This website is built with Svelte and deployed with GitHub Pages.

## Current deployment strategy

The production website is deployed from the `main` branch using the existing GitHub Actions workflow:

`.github/workflows/deploy.yml`

There is no separate public dev deployment for now.

Preview and validation happen through:

1. local development preview
2. local production build preview
3. pull request review
4. pull request build check

## Branch workflow

Use this flow:

```txt
feature branch -> local preview -> pull request into main -> build check -> merge -> deploy
```

## 1. Start from the latest main

```bash
git checkout main
git pull origin main
```

## 2. Create a feature branch

```bash
git checkout -b update-website-v2
```

Use descriptive branch names, for example:

```bash
git checkout -b update-homepage
git checkout -b add-brand-guidelines
git checkout -b improve-mobile-layout
```

## 3. Install dependencies

```bash
npm install
```

If the project uses a lockfile and this is a CI-like install, use:

```bash
npm ci
```

## 4. Run local development preview

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```txt
http://localhost:5173
```

Use this for fast iteration.

## 5. Test production build locally

Before opening or merging a pull request, run:

```bash
npm run build
```

Then, if available:

```bash
npm run preview
```

Open the preview URL shown in the terminal, usually:

```txt
http://localhost:4173
```

This is closer to what GitHub Pages will publish.

## 6. Before replacing large parts of the website

Before migrating a new HTML version or replacing major sections, inspect:

- current Svelte structure
- existing components
- current routes
- static assets
- metadata
- links
- forms
- analytics
- existing SEO tags
- accessibility behavior
- deployment assumptions
- brand tokens in `src/app.css`

Do not blindly paste a full HTML file into the app.

Instead, migrate it into the existing Svelte structure.

## 7. Asset organization

Public website assets should live in:

```txt
static/
```

Recommended structure:

```txt
static/
├── brand/
│   ├── logos/
│   ├── icons/
│   ├── characters/
│   ├── patterns/
│   └── social-preview/
├── images/
│   ├── hero/
│   ├── impact/
│   ├── projects/
│   ├── partners/
│   └── team/
└── documents/
```

Component-specific imported assets may live in:

```txt
src/lib/assets/
```

Use `static/` when the asset should be served directly by URL.

Use `src/lib/assets/` when the asset is imported directly by a Svelte component.

## 8. Brand tokens

The technical source of truth for colors and fonts is:

```txt
src/app.css
```

The brand tokens are defined inside the `@theme` block.

Before changing colors or fonts, check:

```txt
docs/BRAND_GUIDELINES.md
```

Do not create a second competing source of truth for colors unless the project intentionally migrates to a new token architecture.

## 9. Content and claim review

Before publishing new website copy, check:

```txt
docs/WOOBY_CONTEXT.md
docs/BRAND_GUIDELINES.md
```

Be especially careful with claims about:

- medical certification
- clinical validation
- diagnosis
- impact at scale
- open-source availability
- completed software features
- real-time transmission
- pilot results

If a claim is uncertain, use cautious language.

Examples:

```txt
Under development
Field-tested prototype
Designed to support
Aims to
Preparing to publish
Piloted in
```

Avoid:

```txt
Clinically certified
Guaranteed to prevent malnutrition
Fully validated
Deployed globally
Proven to eradicate malnutrition
```

## 10. Commit changes

```bash
git status
git add .
git commit -m "Update Wooby website"
```

Use clear commit messages, for example:

```bash
git commit -m "Add Wooby brand context docs"
git commit -m "Update homepage hero section"
git commit -m "Improve mobile layout"
```

## 11. Push the branch

```bash
git push origin update-website-v2
```

## 12. Open a pull request

Open a pull request into:

```txt
main
```

The pull request should trigger:

```txt
Check build
```

The PR should not be merged until the build check passes.

## 13. Review before merging

Before merging, review:

- desktop layout
- mobile layout
- images
- navigation
- buttons
- links
- forms
- page title
- metadata
- accessibility basics
- loading behavior
- build status
- consistency with the Wooby brand tone
- consistency with current project maturity

## 14. Merge and deploy

Once the PR is merged into `main`, the existing GitHub Pages deployment workflow should publish the website.

## 15. Rollback

If something breaks after deployment, revert the merge commit or restore the previous working commit.

Example:

```bash
git checkout main
git pull origin main
git revert <commit-sha>
git push origin main
```
