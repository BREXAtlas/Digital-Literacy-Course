# Curriculum Map

All 20 Foundations episodes and all 20 AI quests are available from their maps without prerequisite
completion. The order below remains the recommended narrative sequence, not an access restriction.

Every episode and quest links its topic to its primary sources. IDs match `data/foundations-story.js` and
`data/ai-quests.js`. See `data/source-registry.js` for full source details.

> **Status note:** this table is generated from the authoritative curriculum data files. The
> `sourceIds` column below reflects the acts/tiers and titles required by the project brief; the
> per-episode/per-quest `sourceIds` arrays in the data files themselves (written by the curriculum-content
> pass) are the source of truth if this table and the data files ever disagree — run
> `node scripts/validate-site.mjs` to confirm every `sourceIds` reference resolves.

## University Digital Literacy Foundations

| ID | Act | Title |
|----|-----|-------|
| ep01 | I — Start College Digitally Ready | Build Your College File System |
| ep02 | I — Start College Digitally Ready | Name Files Like a College Student |
| ep03 | I — Start College Digitally Ready | Control Drafts, Feedback, and Final Versions |
| ep04 | I — Start College Digitally Ready | Submit, Preview, and Save Proof |
| ep05 | I — Start College Digitally Ready | Write a Professor-Ready Email |
| ep06 | II — Communicate and Find Information | Ask for Help Without Hiding Your Effort |
| ep07 | II — Communicate and Find Information | Turn the Syllabus Into a Working Calendar |
| ep08 | II — Communicate and Find Information | Build a Professional Digital Identity |
| ep09 | II — Communicate and Find Information | Choose the Right Search Tool |
| ep10 | II — Communicate and Find Information | Evaluate Authority, Evidence, and Relevance |
| ep11 | III — Read, Cite, and Protect | Read Academic Sources Without Drowning |
| ep12 | III — Read, Cite, and Protect | Separate Quotes, Paraphrases, and Your Ideas |
| ep13 | III — Read, Cite, and Protect | Protect Student Accounts |
| ep14 | III — Read, Cite, and Protect | Recognize Phishing and Urgency Tricks |
| ep15 | III — Read, Cite, and Protect | Handle Official Documents Carefully |
| ep16 | IV — Share, Recover, and Succeed | Control Sharing Permissions and Digital Footprints |
| ep17 | IV — Share, Recover, and Succeed | Run a Weekly Digital Reset |
| ep18 | IV — Share, Recover, and Succeed | Use the Final Submission Check |
| ep19 | IV — Share, Recover, and Succeed | Recover Professionally When Technology Fails |
| ep20 | IV — Share, Recover, and Succeed | Freshman Digital Readiness Simulation |

## AI Digital Literacy Quest

| ID | Tier | Title |
|----|------|-------|
| q01 | I — Understand the System | AI Is a Pattern System, Not a Person |
| q02 | I — Understand the System | Generative AI Is Not the Same as Search |
| q03 | I — Understand the System | Why AI Hallucinates |
| q04 | I — Understand the System | Keep Human Judgment in the Loop |
| q05 | I — Understand the System | Build a Strong Prompt |
| q06 | II — Learn and Create Responsibly | Use AI as a Tutor, Not a Substitute |
| q07 | II — Learn and Create Responsibly | Use AI for Writing Support Without Losing Authorship |
| q08 | II — Learn and Create Responsibly | Use AI to Strengthen Research Questions |
| q09 | II — Learn and Create Responsibly | The Syllabus Is the Rulebook |
| q10 | II — Learn and Create Responsibly | Use the Green, Yellow, and Red Zone Model |
| q11 | III — Integrity, Media, and Tool Judgment | Disclose or Cite AI Use When Required |
| q12 | III — Integrity, Media, and Tool Judgment | Protect Original Work and Authorship |
| q13 | III — Integrity, Media, and Tool Judgment | Understand Chatbots and Writing Assistants |
| q14 | III — Integrity, Media, and Tool Judgment | Recognize Image, Audio, and Video AI Risks |
| q15 | III — Integrity, Media, and Tool Judgment | Use Coding and Data Assistants Responsibly |
| q16 | IV — Code, Automate, and Build Responsibly | Understand AI Agents and Automation |
| q17 | IV — Code, Automate, and Build Responsibly | Turn One Prompt Into a Repeatable Workflow |
| q18 | IV — Code, Automate, and Build Responsibly | Vibe Code Without Flying Blind |
| q19 | IV — Code, Automate, and Build Responsibly | Design an Agent With Boundaries |
| q20 | IV — Code, Automate, and Build Responsibly | Final Quest — Use AI Without Losing Your Judgment |

Full source-per-episode mapping is available programmatically via each episode/quest object's `sourceIds` field.
