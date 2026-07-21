# Personalization Model

## Bounded personalization

The full curriculum is prewritten and reviewed — nothing is generated from scratch. Personalization works by
selecting an **approved story fragment** for a given narrative slot based on the learner's profile tags. See
`data/story-fragments.js` for the full fragment list and `assets/personalization-engine.js` for selection logic.

Selection order: the engine checks the learner's profile tags (values, interests, academic direction, digital
priorities, digital goal — in that priority order) against fragments registered for the slot, and falls back
to the `generic` fragment when no tag matches or the learner chose the fully generic story.

## What lesson personalization can change

- Which prewritten narrative detail/analogy appears at specific "personalization slots"

Each lesson's primary student name and verified Angelo State major are fixed in reviewed curriculum copy. Story
fragments name that same assigned student directly, contain no learner-name or pronoun placeholders, and are not
sent through optional local-model smoothing. The mapping is documented in `data/lesson-characters.js` and
`docs/LESSON_CHARACTER_MAP.md`.

Profile presentation, display name, pronouns, and avatar styling remain available for profile and account UI
(see `data/onboarding-options.js`), but they do not replace the primary student in lesson narratives.

## What personalization can never change

- Academic policy, university rules, cybersecurity facts, or citations
- AI capabilities or claims
- Quiz questions or correct answers
- Simulated consequences or source IDs
- Learning objectives
- Inferred disability, income, race, religion, sexual orientation, or academic standing

## Presentation parity

The same curriculum data objects are used regardless of profile presentation. Presentation choices never alter
lesson facts, primary students, difficulty, consequences, quiz answers, or achievement eligibility.

## Personalization node map

Foundation slots: episodes 1–20 each carry a slot (see `docs/CURRICULUM_MAP.md`), following the node map in
the original project brief section 20.
AI Quest slots: quests 1–11 and 13–20 carry a slot; quest 12 renders the standard narrative for every learner.
All other episodes/quests render the standard, non-personalized narrative for every learner.
