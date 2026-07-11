# Contributing

Thanks for your interest in Ram Ready Digital Literacy. This is an open-source educational pilot — curriculum
accuracy, neutrality, and accessibility matter as much as code quality.

## Before contributing curriculum content

Read `docs/SOURCE_POLICY.md` and `docs/PERSONALIZATION_MODEL.md`. All curriculum content must:

- Trace every fact to a source in `data/source-registry.js`
- Present tradeoffs, defer to the current syllabus/instructor rule where relevant, and never claim a single
  universal answer for course-specific AI-use questions
- Include a `recoveryPath` for every choice-driven scenario — no irreversible dead ends
- Never teach evasion of AI-use rules, hiding AI involvement, bypassing plagiarism detection, credential theft,
  phishing creation, or unauthorized access
- Never introduce affiliate links, product placement, or sponsored content

## Development setup

No build step or package manager required.

```bash
git clone https://github.com/BREXAtlas/Digital-Literacy-Course.git
cd Digital-Literacy-Course
python3 -m http.server 8080
node scripts/validate-site.mjs
```

## Pull requests

1. Run `node scripts/validate-site.mjs` and fix any reported issues.
2. Manually test the pages you touched (see the manual-testing checklist in `docs/ACCESSIBILITY.md`).
3. Keep curriculum data (`data/*.js`) separate from rendering logic (`assets/*.js`, `*.html`).
4. Describe what changed and why in the PR description.

## Reporting issues

Use the issue templates in `.github/ISSUE_TEMPLATE/`: bug report, curriculum review, source correction, or
accessibility review.

## Licensing your contribution

By contributing, you agree your code contributions are licensed under MIT (`LICENSE.md`) and your curriculum
text contributions are licensed under CC BY 4.0.
