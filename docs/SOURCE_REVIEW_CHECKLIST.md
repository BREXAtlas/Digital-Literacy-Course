# Source Review Checklist

Run through this list at least once per academic term, or whenever a "Source Correction" issue is filed.

1. Open every URL in `data/source-registry.js`. Confirm it resolves (no 404s, no redirects to unrelated pages).
2. For any source describing fast-changing AI tool behavior or platform features, confirm the illustrative
   language referenced anywhere in the curriculum still makes sense — update the `reviewed` date once
   confirmed.
3. If a URL is broken, replace it with the current official equivalent for the same agency/organization/topic
   — never link to a non-authoritative mirror.
4. Confirm no source has been quoted at length — summaries only.
5. Confirm every episode/quest `sourceIds` array still resolves to entries in the registry (the validator
   script checks this automatically — run `node scripts/validate-site.mjs`).
6. Update this file's own last-reviewed note below.

**Last full review:** 2026-07-10
