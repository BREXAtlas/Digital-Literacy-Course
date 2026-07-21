# Story Architecture

## Two paths, one shell

University Digital Literacy Foundations (20 episodes, 4 acts) and AI Digital Literacy Quest (20 quests, 4
tiers) share the same technical shell: `assets/story-engine.js` / `assets/quest-engine.js`, the same
choice/consequence/knowledge-check interaction pattern, and the same game mechanics (`assets/game-engine.js`).

## Data separation

Curriculum content lives entirely in `data/foundations-story.js` and `data/ai-quests.js` (each assembled from
two part files) as plain structured objects — never hard-coded into HTML. Rendering logic (`foundations.html`,
`ai-quest.html`) is generic and would work unchanged if the curriculum data were replaced.

## Episode/quest object shape

See the top-of-file comments in `data/foundations-episodes-part1.js` and `data/ai-quests-part1.js` for the full
schema. Key fields: `openingNarrative`, `personalizationSlots`, `scenario`, `choices` (each with
`whyChosen`/`possibleBenefit`/`possibleCost`/`possibleRisk`/`immediateEffect`/`futureEffect`/
`whatCouldChangeThisOutcome`/`sourceIds`), `immediateConsequences` / `oneYearConsequences` /
`longTermConsequences` (narrative text keyed by choice id), `recoveryPath`, `conceptExplanation` (the
what/why/how/cost/risk/who-benefits framework), `knowledgeChecks`, `sourceIds`, `achievementId`, `unlocks`.

The `unlocks` field identifies the recommended next item for the Continue action. It does not gate map access:
all 20 episodes and all 20 quests remain directly available for review, testing, and assignment.

## Simulation variables

A simplified educational simulation state (`INITIAL_SIM_STATE` in `story-engine.js`) tracks variables like
`fileOrganization`, `accountSecurity`, `citationIntegrity`, and `aiLiteracy`-adjacent measures. These are a
teaching simplification, not a formal evaluation of a person's intelligence, employability, cybersecurity
status, or academic standing.

## No irreversible dead ends

Every episode and quest includes a `recoveryPath` describing how a learner recovers from a setback choice.
Nothing in the simulation can "game over."

## Consistent lesson narratives

Each episode and quest uses one illustrative primary student throughout that item's narrative. Names and current
Angelo State undergraduate majors vary across the 40 items, while every scenario, consequence, recovery path,
example, knowledge check, visual, and completion message remains consistent inside its item. The standard
**Who May Benefit** concept field stays general audience guidance. See `docs/LESSON_CHARACTER_MAP.md`.

## Financial Futures handoff

Episode 20 and Quest 20 both close by pointing the learner to Ram Ready Financial Futures. The handoff is
learner-controlled (a button, never an automatic redirect) and appears on `index.html`, `journey.html`
(when both paths are complete), and both capstone nodes.
