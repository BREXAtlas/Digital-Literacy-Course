# Personalization Model

## Bounded personalization

The full curriculum is prewritten and reviewed — nothing is generated from scratch. Personalization works by
selecting an **approved story fragment** for a given narrative slot based on the learner's profile tags. See
`data/story-fragments.js` for the full fragment list and `assets/personalization-engine.js` for selection logic.

Selection order: the engine checks the learner's profile tags (values, interests, academic direction, digital
priorities, digital goal — in that priority order) against fragments registered for the slot, and falls back
to the `generic` fragment when no tag matches or the learner chose the fully generic story.

## What personalization can change

- Character presentation, name, pronouns, avatar styling (see `data/onboarding-options.js`)
- Which prewritten narrative detail/analogy appears at specific "personalization slots"
- Light transition phrasing (optional, local-model only — see `docs/OPEN_SOURCE_AI.md`)

## What personalization can never change

- Academic policy, university rules, cybersecurity facts, or citations
- AI capabilities or claims
- Quiz questions or correct answers
- Simulated consequences or source IDs
- Learning objectives
- Inferred disability, income, race, religion, sexual orientation, or academic standing

## Gender parity

The same underlying storyline and data objects are used regardless of the "man" or "woman" presentation choice.
Presentation only maps to pronouns and avatar styling via `PRONOUNS_BY_PRESENTATION` in
`assets/profile-engine.js` — intelligence, technical ability, course difficulty, consequences, and achievement
eligibility never vary by presentation. The presentation list is intentionally extensible (see
`CHARACTER_PRESENTATIONS` in `data/onboarding-options.js`) so another option could be added without rewriting
any curriculum data.

## Personalization node map

Foundation slots: episodes 1–20 each carry a slot (see `docs/CURRICULUM_MAP.md`), following the node map in
the original project brief section 20.
AI Quest slots: quests 1–11 and 13–20 carry a slot; quest 12 renders the standard narrative for every learner.
All other episodes/quests render the standard, non-personalized narrative for every learner.
