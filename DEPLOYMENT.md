# Deployment

## GitHub Pages (primary deployment)

This repository deploys via `.github/workflows/pages.yml` using the official `actions/configure-pages`,
`actions/upload-pages-artifact`, and `actions/deploy-pages` actions — no build framework is required since
this is a static HTML/CSS/JS site.

The workflow triggers on every push to `main` and supports manual `workflow_dispatch`. It runs
`node scripts/validate-site.mjs` first and only deploys after validation passes.

### One-time repository setup (owner action required)

1. In the repository **Settings → Pages**, set **Source** to "GitHub Actions."
2. Confirm the workflow has `pages: write` and `id-token: write` permissions (already declared in
   `pages.yml`).
3. After the first successful run, the site is published at:
   `https://brexatlas.github.io/Digital-Literacy-Course/`

The library working-session presentation is a static route in the same deployment:
`https://brexatlas.github.io/Digital-Literacy-Course/presentation.html`. It requires no separate build or
deployment step.

### Base path

All internal links are relative (e.g. `foundations.html`, `assets/styles.css`), so the site works correctly
whether hosted at a domain root or under the `/Digital-Literacy-Course/` subpath GitHub Pages uses by default
for a project site.

## Local development

No build step or package manager is required.

```bash
python3 -m http.server 8080
# or: npx serve .
```

Then open `http://localhost:8080/`. The presentation is available locally at
`http://localhost:8080/presentation.html`.

## Validation before deploying

```bash
node scripts/validate-site.mjs
```
