# Accessibility

Ram Ready Digital Literacy targets WCAG-oriented practices throughout. See `assets/accessibility.js` for
shared helpers and `assets/styles.css` for focus/contrast rules.

## Implemented practices

- Semantic headings on every page (`h1` per page, nested `h2`/`h3`)
- Skip link to main content (`.skip-link`, `initSkipLink()`)
- Full keyboard navigation; no functionality is mouse-only
- Visible focus states via `:focus-visible` (3px outline, never suppressed)
- Screen-reader labels on all interactive controls (`<label>` elements, `aria-live` regions for celebrations
  and status messages)
- Accessible form errors (`.field-error`, associated via visible text, not color alone)
- No required audio; celebrations are visual/text and respect `prefers-reduced-motion`
- Sufficient color contrast against both light and dark surfaces (see CSS custom properties)
- No information communicated by color alone — story/quest map nodes use both a left-border color **and** a
  text label ("completed"/"active"/"locked")
- Responsive, mobile-first layout with large (44px minimum) touch targets
- Plain-language explanations throughout lesson content
- `renderAccessibleListAlternative()` provides a non-visual list alternative to the story/quest map
- Print-friendly lesson summaries (`assets/print.css`)
- No timed quizzes anywhere in the course
- No inaccessible drag-only interactions; every tool uses standard form controls

## Manual testing checklist

- [ ] Full keyboard-only pass through onboarding, an episode, and a quest
- [ ] Screen reader pass (VoiceOver/NVDA) on the story map and episode player
- [ ] `prefers-reduced-motion: reduce` verified to disable celebration animation
- [ ] Mobile viewport (360px) and desktop viewport layouts
- [ ] Color-contrast spot check on both light and dark system themes
