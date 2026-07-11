# Financial Shell Parity

This document records how Ram Ready Digital Literacy's interface was built from the Financial-Literacy-Course
repository (the interface/UI/flow source of truth) and adapted from the trailing-hyphen
Digital-Literacy-Course- repository (the curriculum-content-only source).

## Files used as the shell model

Every root HTML page, every file under `assets/`, `llm/`, `supabase/migrations/`, `docs/`, `scripts/`,
`.github/`, and every top-level Markdown doc was built by reading the equivalent file in
`Financial-Literacy-Course` and adapting it — never by copying the trailing-hyphen repository's UI, JS engine,
points bar, login strip, or Supabase configuration.

## What remains identical (structure/behavior)

- CSS custom properties, radius system, max-width, font stack, dark-mode media query, focus ring, mobile/
  desktop nav breakpoints, reduced-motion rules, and print stylesheet (`assets/styles.css`, `assets/print.css`)
- All structural CSS classes: `hero`, `badge`, `btn-row`, `disclaimer-banner`, `card-grid`, `path-card`,
  `path-card--quest`, `section`, `dashboard-grid`, `stat-tile`, `story-map`, `story-node`, `choice-list`,
  `choice-card`, `consequence-panel`, `source-list`, `source-chip`, `source-chip-inline`, `knowledge-check`,
  `celebration`, `onboarding-screen`, `option-grid`, `guide-character`
- Button classes (`btn`, `btn-primary`, `btn-secondary`, `btn-outline`, `btn-danger`) and button terminology
  ("Continue your story," "Create your story," "Explore the generic version," "Continue or begin," "Resume,"
  "View map," "Edit vision," "Export progress (JSON)," "Import progress," "Reset simulation," "Send magic
  link," "Sync now," "Log out," etc.)
- The eight-screen onboarding flow, its button labels, and its state-management pattern
- The story-map / quest-map interaction pattern (visual map + accessible list view + episode/quest player +
  source drawer + knowledge check + stars/celebration)
- My Journey dashboard layout, achievements/certificates system, guest persistence architecture, optional
  Supabase account pattern (magic link, RLS, manual sync), and the open-source-only LLM provider architecture

## Route change

`Financial-Literacy-Course/wealth-quest.html` → `ai-quest.html`. All navigation and internal links were updated
accordingly. `wealth-quest.html` exists only as a tiny redirect stub to `ai-quest.html` with no financial
curriculum, kept for link-compatibility with anyone who copied the Financial shell's route names.

## What is intentionally different (content-specific)

- Product name, subtitle, hero copy, path-card copy, nav label "AI Quest" instead of "Wealth Quest,"
  "Digital Foundations" instead of "Financial Foundations"
- All curriculum data (`data/foundations-*.js`, `data/ai-quests-*.js`, `data/story-fragments.js`,
  `data/achievements.js`, `data/source-registry.js`, `data/glossary.js`)
- The digital-literacy interactive tools in `assets/calculator-engine.js` (file-name builder, phishing
  detector, AI-use zone sorter, agent permission matrix, etc.) replace the financial calculators
  (compound growth, debt payoff, etc.)
- localStorage namespace `ramReadyDigitalLiteracy.v1` (distinct from Financial's `ramReadyFinancialFutures.v1`)
- Supabase table/migration file name and columns (`create_digital_literacy_profiles_and_progress.sql`)
- The "Continue to Ram Ready Financial Futures" handoff (new — not present in the Financial shell, since
  Financial Futures is the terminal course in this two-course sequence)

## Confirmation

No unintentional Financial-Literacy-Course instructional content (paycheck, credit, investing, business-entity,
insurance, or wealth-tier curriculum) remains in this repository. The only intentional references to
Financial-Literacy-Course are: this document's design-attribution notes, the "Continue to Ram Ready Financial
Futures" course-handoff button/link, and the public Financial Futures URL
(https://brexatlas.github.io/Financial-Literacy-Course/).
