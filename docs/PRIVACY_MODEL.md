# Privacy Model (Technical Detail)

See `privacy.html` for the learner-facing summary. This document is the technical companion for contributors.

## Storage

- Guest state: single `localStorage` key `ramReadyDigitalLiteracy.v1` (see `assets/profile-engine.js`).
- Optional account state: Supabase tables under Row Level Security, scoped to `auth.uid() = user_id` on every
  policy (see `supabase/migrations/create_digital_literacy_profiles_and_progress.sql`).

## Data minimization

Only bounded profile tags (values/interests/academic direction/digital priorities/digital goal — all enum-like
strings from `data/onboarding-options.js`) and simulation progress (episode/quest IDs, stars, achievement IDs)
are ever persisted. No real files, passwords, student IDs, transcripts, or private documents are collected at
any layer.

## Sanitization

`updateProfile()` in `assets/profile-engine.js` strips angle brackets and truncates the display name before
storage; rendering code uses `textContent` or an explicit `escapeHtml()` helper rather than raw
`innerHTML` interpolation of user-supplied text.

## No third-party trackers

No analytics, ad, or tracking script is loaded anywhere in this repository.
