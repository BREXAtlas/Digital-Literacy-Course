# Financial Futures Handoff

## What this is

Ram Ready Digital Literacy is the first course in the Ram Ready sequence. After completing it, learners are
shown a clear, **learner-controlled** path to the next course:

**Ram Ready Financial Futures** — https://brexatlas.github.io/Financial-Literacy-Course/

## Where the handoff appears

1. `index.html` — a "Next in the Ram Ready sequence" section beneath the two path cards.
2. `journey.html` — a "Next course unlocked" section, shown once both the foundations path (20/20 episodes)
   and the AI quest path (20/20 quests) are complete.
3. The foundations capstone (`ep20`) and AI Quest capstone (`q20`) both close with a reference to continuing
   into Financial Futures.
4. The full-completion certificate (`assets/certificate.js`, `pathId: "full"`) recommends Financial Futures as
   the next course.

## What does NOT happen

- No automatic redirect. The learner always clicks an explicit "Continue to Ram Ready Financial Futures"
  button.
- No profile, account, progress, or personal data is transferred between the two courses. They use separate
  localStorage namespaces (`ramReadyDigitalLiteracy.v1` vs. `ramReadyFinancialFutures.v1`) and, if configured,
  separate Supabase projects.

## Why

Digital readiness (file handling, source evaluation, privacy, security, AI literacy) directly supports safer
handling of financial, tax, aid, and banking documents — a theme foreshadowed in Foundations Episode 15
("Handle Official Documents Carefully"), without teaching financial advice itself.
