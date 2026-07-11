# Source Policy

## Principles

- Prefer authoritative, primary sources (government agencies, standards bodies, official style guides) over
  secondary explainers.
- Never copy large copyrighted passages — summarize and link.
- Every episode and quest references source IDs from `data/source-registry.js`; nothing is asserted as fact
  without a traceable source.
- Facts that change frequently (AI tool capabilities, platform features, citation-style guidance) are always
  labeled "illustrative," dated, and linked to the current official source — never hard-coded as a timeless
  fact.
- All external links open in a new tab with `rel="noopener noreferrer"` and use HTTPS.

## Registry structure

Each source has: `id`, `title`, `org`, `url`, `topic`, `concepts`, `classification` (`primary`/`secondary`),
`reviewed` (date), and optional `notes` about volatility. See `data/source-registry.js`.

## Neutrality

No source or fact may be framed to favor a specific technology platform, AI vendor, or product. Comparisons
(search vs. generative AI, disclosure vs. citation, various file-organization systems, etc.) always present
tradeoffs, never a universal winner. No tool is presented as universally safe, current, unbiased, or
appropriate for every learner's device, bandwidth, or budget.
