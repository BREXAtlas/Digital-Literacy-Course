# Ram Ready Digital Literacy

**Build the file, communication, research, privacy, security, and AI habits college and work
expect—then continue into Ram Ready Financial Futures.**

Public site: **https://brexatlas.github.io/Digital-Literacy-Course/**

Ram Ready Digital Literacy is an **independent, open-source educational pilot** built for review and possible
future coordination with Angelo State University. It is not an official Angelo State University course,
policy, credential, website, or official AI-use policy, and is not connected to Angelo State single sign-on.
See `BRANDING-NOTICE.md`.

## Project lineage

- **[Financial-Literacy-Course](https://github.com/BREXAtlas/Financial-Literacy-Course)** is the interface,
  UI, function, language, and flow model this repository was built from — same CSS system, page architecture,
  button terminology, onboarding flow, game mechanics, and optional-account pattern. See
  `docs/FINANCIAL_SHELL_PARITY.md`.
- **[Digital-Literacy-Course-](https://github.com/BREXAtlas/Digital-Literacy-Course-)** (trailing hyphen) was
  the curriculum-content source. Its subject matter, lesson titles, narratives, scenarios, and sources were
  migrated into this repository's richer episode/quest data model — but not its UI, course engine, or
  Supabase configuration.
- **This repository** (`BREXAtlas/Digital-Literacy-Course`, no trailing hyphen) is the maintained project going
  forward. Neither reference repository is modified by this project.

## Two learning paths, one shell

1. **University Digital Literacy Foundations** — a continuous, personalized 20-episode storyline across four
   acts: from a first-semester file system through submissions, professional communication, calendars,
   research, source evaluation, privacy, cybersecurity, official documents, collaboration, and reliable
   recovery when technology fails.
2. **AI Digital Literacy Quest** — 20 advanced, optional quests examining how generative AI works, prompting,
   verification, academic integrity, AI citation and disclosure, synthetic media, coding assistants, vibe
   coding, workflows, automation, and responsible agent building. These tiers describe **increasing system
   capability and risk**, not intelligence or a ranking of learners.

## Who it's for

Built with first-year Angelo State University students in mind, while remaining openly accessible to the
public. See `docs/INSTRUCTOR_PILOT_GUIDE.md`.

## Bounded personalization

The full curriculum is prewritten, sourced, and reviewed — nothing is generated from scratch. Personalization
works by selecting **approved story fragments** at specific narrative slots based on a learner's onboarding
selections (values, interests, academic direction, digital priorities, digital goal). Lesson facts, quiz
answers, and consequences are identical for every learner. See `docs/PERSONALIZATION_MODEL.md`.

## Why core lessons are deterministic

The deterministic template engine (`llm/template-provider.js`) can render the complete course with no AI model
at all. This is the only mode the public site uses unless a learner explicitly opts in to local personalization.

## Optional open-source local AI personalization

No proprietary LLM API (OpenAI, Anthropic, Gemini, etc.) is used anywhere in this product. An optional,
consent-gated [WebLLM](https://github.com/mlc-ai/web-llm) provider can lightly smooth transitions between
prewritten fragments entirely inside the learner's browser; an [Ollama](https://github.com/ollama/ollama)
provider supports local/institutional developer setups. Both are validated against a strict output filter and
fall back to the deterministic template on any failure. See `docs/OPEN_SOURCE_AI.md`.

## Source and neutrality policy

Every episode and quest cites source IDs from a centralized registry (`data/source-registry.js`, browsable at
`sources.html`). Comparisons always present tradeoffs, never a single correct universal answer, and course
content is explicit that instructor and platform-specific rules always control. See `docs/SOURCE_POLICY.md`.

## Privacy model

No real passwords, files, student IDs, transcripts, grades, or private documents are ever requested. Guest
data lives only in local storage. See `privacy.html` and `docs/PRIVACY_MODEL.md`.

## Guest mode

Fully functional without any account or network call — profile, progress, choices, stars, achievements, and
streak all persist locally, with export/import and full reset. See `assets/profile-engine.js`.

## Optional Supabase mode

A separate, dedicated Supabase project (never the Financial-Literacy-Course or trailing-hyphen
Digital-Literacy-Course- project) can enable passwordless email sign-in and cross-device sync, with Row Level
Security scoping every row to its owner. See `SUPABASE-SETUP.md`.

## Local run instructions

See `QUICKSTART.md`. Short version: `python3 -m http.server 8080`, no build step required.

## GitHub Pages deployment

`.github/workflows/pages.yml` deploys on every push to `main` using the official GitHub Pages actions — no
build framework required. See `DEPLOYMENT.md`.

## Repository structure

```
index.html, foundations.html, ai-quest.html, journey.html, achievements.html,
profile.html, sources.html, instructor-guide.html, privacy.html, disclaimer.html,
auth-callback.html, onboarding.html
assets/      — styles, print styles, and all rendering/engine JS (incl. calculator-engine.js digital tools)
data/        — curriculum, source registry, onboarding options, fragments, achievements
llm/         — open-source LLM provider abstraction + output validator
supabase/    — optional migration
docs/        — curriculum map, architecture, personalization, AI, sources, accessibility, instructor guide
scripts/     — scripts/validate-site.mjs
.github/     — Pages workflow + issue templates
```

## Accessibility

Skip links, full keyboard navigation, visible focus states, screen-reader labels, reduced-motion support,
no-color-alone signaling, mobile-first responsive layout, plain-language explanations, and print-friendly
lesson summaries. See `docs/ACCESSIBILITY.md`.

## Financial course handoff

After completing both paths, learners see a learner-controlled "Continue to Ram Ready Financial Futures" button
on `index.html` and `journey.html` (https://brexatlas.github.io/Financial-Literacy-Course/). No profile,
account, or progress data is transferred between the two courses. See `docs/FINANCIAL_COURSE_HANDOFF.md`.

## Contributing

See `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`.

## Licensing

MIT for original code, CC BY 4.0 for original curriculum text. See `LICENSE.md`.
