import { LESSON_CHARACTERS } from "./lesson-characters.js";

// Ram Ready Digital Literacy — AI Digital Literacy Quest, Quests 1-10
// Tier I (q01-q05): Understand the System. Tier II (q06-q10): Learn and Create
// Responsibly. Content is prewritten and reviewed. Personalization only
// assembles approved fragments (data/story-fragments.js) at the listed slot
// ids — it never invents facts, capabilities, or consequences. See
// docs/PERSONALIZATION_MODEL.md.

export const QUESTS_PART1 = [
  {
    id: "q01",
    primaryStudent: LESSON_CHARACTERS.q01,
    tier: 1,
    title: "AI Is a Pattern System, Not a Person",
    subtitle: "Understand what generative AI is actually doing",
    estimatedMinutes: 12,
    learningObjectives: [
      "Explain that generative AI predicts patterns learned from training data rather than 'thinking' like a person",
      "Recognize that fluent, confident-sounding output is not proof of accuracy",
      "Identify text, image, audio, and code as forms of generated output",
      "Explain why responsibility for a decision remains with the human user"
    ],
    openingNarrative:
      "Chloe Adams, a Nursing major at Angelo State, opens a chatbot expecting something like a search engine and instead finds fluent, confident paragraphs whose accurate and inaccurate claims look alike.",
    personalizationSlots: ["q01.context"],
    approvedStoryFragments: ["q01.context"],
    scenario: {
      prompt:
        "Chloe Adams receives a polished, confident AI explanation of a historical event, but one date is wrong. What is the safest mental model for treating this kind of output?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Treat it as a useful generated draft that still needs evaluation",
        whyChosen: "Recognizes that usefulness and truth are separate questions.",
        possibleBenefit: "Keeps Chloe Adams in the habit of verifying before relying on AI output.",
        possibleCost: "Takes extra time compared to accepting the answer immediately.",
        possibleRisk: "None — this is the accurate framing.",
        immediateEffect: { aiLiteracy: 5, integrity: 2 },
        futureEffect: "This habit of treating AI output as a draft carries through every remaining quest.",
        whatCouldChangeThisOutcome: "Nothing changes this — it is the accurate framing regardless of how confident the output sounds.",
        sourceIds: ["nist-genai-profile"] },
      { id: "b", text: "Treat it as a person who always knows the answer",
        whyChosen: "Fluent, confident-sounding writing can feel like it comes from genuine understanding.",
        possibleBenefit: "None — this framing leads directly to unverified errors.",
        possibleCost: "Increases the odds of repeating a fabricated or wrong fact.",
        possibleRisk: "Confident wrong answers are especially easy to miss when treated as authoritative.",
        immediateEffect: { aiLiteracy: 1 },
        futureEffect: "This misunderstanding tends to cause repeated verification failures later in this path.",
        whatCouldChangeThisOutcome: "Learning that AI predicts patterns rather than 'knowing' facts corrects this.",
        sourceIds: ["nist-genai-profile"] },
      { id: "c", text: "Treat it as a source that never needs checking because it sounds professional",
        whyChosen: "Polished formatting and tone can be mistaken for a signal of accuracy.",
        possibleBenefit: "None — professional tone is not evidence of correctness.",
        possibleCost: "Skips the verification step that catches fabricated details.",
        possibleRisk: "Errors can be copied directly into academic or professional work.",
        immediateEffect: { aiLiteracy: 1 },
        futureEffect: "Unverified reliance on tone as a trust signal tends to repeat across other tools too.",
        whatCouldChangeThisOutcome: "Separating 'sounds professional' from 'is accurate' corrects this.",
        sourceIds: ["nist-genai-profile"] }
    ],
    immediateConsequences: {
      a: "Chloe Adams notes the questionable date and looks it up before using it.",
      b: "Chloe Adams repeats the wrong date in a class discussion before anyone catches it.",
      c: "Chloe Adams copies the paragraph into notes without flagging the date to check later."
    },
    oneYearConsequences: {
      a: "Chloe Adams has a reliable habit of verifying AI output before using it in coursework.",
      b: "Chloe Adams has been corrected publicly at least once for repeating an AI-generated error.",
      c: "Chloe Adams occasionally submits work containing unverified AI errors."
    },
    longTermConsequences: {
      a: "Chloe Adams carries the durable habit of treating AI output as a draft that needs review into any future job involving AI tools.",
      b: "Repeated reliance on fluent tone as proof of truth can damage academic and professional credibility over time.",
      c: "Skipping verification as a habit increases long-term risk of academic integrity issues and factual errors."
    },
    recoveryPath:
      "Any AI-generated claim can be checked after the fact — Chloe Adams can always go back, find the original source, and correct the record before it causes real harm.",
    conceptExplanation: {
      what: "Generative AI produces new text, images, audio, or code by predicting likely patterns learned from large amounts of training data.",
      why: "These systems exist to assist with drafting, summarizing, explaining, and generating content quickly across many tasks.",
      how: "It may help by producing a fast first draft, explanation, or brainstorm that a person then reviews and verifies.",
      cost: "Verification takes time and effort that can feel like it defeats the purpose of using a fast tool.",
      risks: "Fluent, confident output is not proof of accuracy — the system can generate plausible-sounding but false information.",
      whoMayBenefit: "Anyone using AI as a drafting or brainstorming aid alongside their own verification process.",
      whoMayNotBenefit: "Someone who treats AI output as automatically correct without any review loses the accuracy check that makes the tool safe to use.",
      misunderstandingRisk: "Assuming fluency, confidence, or professional tone are evidence of truth.",
      verifyNote: "This is a general AI-literacy concept, not a claim about any single tool's current accuracy, which changes over time."
    },
    realWorldExample:
      "Chloe Adams asked a chatbot to summarize a reading and received a confident, well-organized summary that misstated the author's main argument. Chloe caught the error only by rereading the original text before citing the summary.",
    knowledgeChecks: [
      { id: "kc1", question: "What is the safest mental model for generative AI output?",
        type: "multiple_choice",
        options: ["A useful generated draft that still needs evaluation", "A person who always knows the answer", "A source that never needs checking", "A system that only ever produces true statements"],
        correctAnswer: "A useful generated draft that still needs evaluation",
        explanation: "Usefulness and truth are separate questions — AI output is a starting point, not a final authority." }
    ],
    sourceIds: ["nist-genai-profile"],
    achievementId: "pattern-system-decoder",
    unlocks: "q02",
    accessibilitySummary: "Text-based scenario with a single multiple-choice decision; no timed elements or color-only cues.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q02",
    primaryStudent: LESSON_CHARACTERS.q02,
    tier: 1,
    title: "Generative AI Is Not the Same as Search",
    subtitle: "Know when Diego Hernandez needs real sources instead of a synthesized response",
    estimatedMinutes: 12,
    learningObjectives: [
      "Distinguish search tools that point to real sources from generative AI that synthesizes a new response",
      "Identify appropriate uses for AI (brainstorming terms, practicing explanations) versus research uses that require real sources",
      "Explain why an unsupported AI claim is not a citation",
      "Practice tracing a claim back to real evidence"
    ],
    openingNarrative:
      "Diego Hernandez, an English major at Angelo State, asks a chatbot for three research statistics and receives an authoritative-sounding answer with no links to real reports.",
    personalizationSlots: ["q02.context"],
    approvedStoryFragments: ["q02.context"],
    scenario: {
      prompt:
        "Diego Hernandez has a research assignment that requires evidence from real sources. Which task belongs primarily to a research database or source search rather than a generative AI chatbot?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Finding the actual peer-reviewed article that supports a claim",
        whyChosen: "Evidence for an academic claim should connect to a real, checkable source.",
        possibleBenefit: "Diego Hernandez finds citable, verifiable evidence that satisfies the assignment's source requirement.",
        possibleCost: "Takes longer than accepting a generated answer.",
        possibleRisk: "None — this is the correct research step.",
        immediateEffect: { aiLiteracy: 5, sourceJudgment: 4 },
        futureEffect: "Separating brainstorming from evidence-finding becomes a reliable research habit.",
        whatCouldChangeThisOutcome: "Nothing changes this — real evidence always requires a real source.",
        sourceIds: ["acrl-info-literacy", "nist-genai-profile"] },
      { id: "b", text: "Brainstorming alternative keywords to try in a database",
        whyChosen: "AI can help expand vocabulary and generate search term ideas.",
        possibleBenefit: "Speeds up the discovery phase of research.",
        possibleCost: "Still requires testing the terms in a real database afterward.",
        possibleRisk: "Low, as long as the terms are tested against real sources rather than treated as evidence themselves.",
        immediateEffect: { aiLiteracy: 3, sourceJudgment: 2 },
        futureEffect: "Using AI for brainstorming while reserving evidence-finding for real databases is a sustainable split.",
        whatCouldChangeThisOutcome: "This becomes a problem only if the generated terms are mistaken for the research itself.",
        sourceIds: ["acrl-info-literacy"] },
      { id: "c", text: "Practicing a simpler explanation of a concept already covered in class",
        whyChosen: "AI can be useful for practicing explanations in different words.",
        possibleBenefit: "Can support review and comprehension.",
        possibleCost: "Does not produce any new evidence for a research assignment.",
        possibleRisk: "Low, since this use does not require sourced evidence.",
        immediateEffect: { aiLiteracy: 2 },
        futureEffect: "Using AI for practice and explanation, separate from evidence-gathering, is a low-risk application.",
        whatCouldChangeThisOutcome: "This remains appropriate as long as it isn't substituted for actually locating sources.",
        sourceIds: ["unesco-ai-education"] }
    ],
    immediateConsequences: {
      a: "Diego Hernandez locates the real article and can cite it with confidence.",
      b: "Diego Hernandez gets useful search terms but still needs to verify them in a database.",
      c: "Diego Hernandez understands the concept better but has no new evidence for the paper."
    },
    oneYearConsequences: {
      a: "Diego Hernandez builds a research habit that consistently produces citable, defensible evidence.",
      b: "Diego Hernandez develops efficient search skills without confusing brainstorming for evidence.",
      c: "Diego Hernandez may need to build additional research habits before the next major assignment."
    },
    longTermConsequences: {
      a: "Diego Hernandez uses the distinction between synthesis and search to avoid a common form of accidental academic integrity violation.",
      b: "Combining AI brainstorming with real database searching becomes an efficient long-term research workflow.",
      c: "Practicing explanations alone does not build the research skills needed for source-based assignments."
    },
    recoveryPath:
      "If Diego Hernandez already used unsupported AI claims in a draft, the fix is straightforward: replace each claim with a real, located source before submitting — professors generally welcome this correction if caught early.",
    conceptExplanation: {
      what: "Search tools point to real webpages, articles, and documents; generative AI often combines patterns into a new synthesized response without showing the original evidence.",
      why: "These are different technologies solving different problems — search indexes existing content, while generative AI produces new content from learned patterns.",
      how: "AI can help explain vocabulary or generate search terms; databases and library tools are still required to locate the actual evidence.",
      cost: "Using both tools together takes more time than relying on one alone.",
      risks: "Treating a generated summary as equivalent to a citation risks presenting fabricated or unsupported claims as fact.",
      whoMayBenefit: "Any researcher who uses AI for the brainstorming stage while reserving evidence-finding for real sources.",
      whoMayNotBenefit: "Diego Hernandez loses the evidentiary basis for the argument by skipping the source-finding step.",
      misunderstandingRisk: "Assuming a generated answer already constitutes a source or citation.",
      verifyNote: "Diego Hernandez must locate and independently verify the real source before treating an AI-provided citation as usable evidence."
    },
    realWorldExample:
      "Diego Hernandez asked a chatbot for statistics on local food insecurity and copied the numbers directly into a paper. None were linked to a real report, and the professor flagged the unsupported claims during grading.",
    knowledgeChecks: [
      { id: "kc1", question: "Which task belongs primarily to a research database or source search?",
        type: "multiple_choice",
        options: ["Finding the actual peer-reviewed article that supports a claim", "Brainstorming alternative keywords", "Practicing an explanation in simpler language", "Asking a chatbot to summarize a topic"],
        correctAnswer: "Finding the actual peer-reviewed article that supports a claim",
        explanation: "Evidence for a claim should connect to a real, checkable source located through a database or search tool." }
    ],
    sourceIds: ["acrl-info-literacy", "nist-genai-profile"],
    achievementId: "search-vs-generation-analyst",
    unlocks: "q03",
    accessibilitySummary: "Text-based scenario comparing three tasks; all information available without relying on icons alone.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q03",
    primaryStudent: LESSON_CHARACTERS.q03,
    tier: 1,
    title: "Why AI Hallucinates",
    subtitle: "Recognize fabricated facts, quotations, links, and citations",
    estimatedMinutes: 13,
    learningObjectives: [
      "Define hallucination as plausible-sounding but unsupported or fabricated AI output",
      "Recognize that fabricated citations can include realistic-looking titles, journals, and DOIs",
      "Practice verifying a citation by locating the real source",
      "Explain why asking the same model whether it is sure does not count as verification"
    ],
    openingNarrative:
      "Naomi Williams, a Marketing major at Angelo State, receives an AI-generated journal citation with a convincing title, volume, and DOI, but the DOI and article do not exist in any database Naomi checks.",
    personalizationSlots: ["q03.context"],
    approvedStoryFragments: ["q03.context"],
    scenario: {
      prompt: "What should Naomi Williams do with an AI-generated citation before using it in an assignment?",
      type: "identify_missing_information"
    },
    choices: [
      { id: "a", text: "Locate the real source and verify every detail independently",
        whyChosen: "A citation is not trustworthy until the source itself has been found and checked.",
        possibleBenefit: "Naomi Williams confirms that the citation is real before it appears in submitted work.",
        possibleCost: "Takes extra time compared to using the citation immediately.",
        possibleRisk: "None — this is the correct verification step.",
        immediateEffect: { aiLiteracy: 5, citationIntegrity: 5 },
        futureEffect: "This verification habit prevents a serious academic integrity risk throughout college.",
        whatCouldChangeThisOutcome: "Nothing changes this — independent verification is always the safe step.",
        sourceIds: ["nist-genai-profile", "unesco-ai-education"] },
      { id: "b", text: "Assume it is real because it looks academic and well-formatted",
        whyChosen: "Realistic formatting can create a false sense of confidence.",
        possibleBenefit: "None — plausible formatting is not proof the source exists.",
        possibleCost: "Risks submitting a fabricated citation as if it were real.",
        possibleRisk: "This can be treated as fabricated evidence, a serious academic integrity issue even if unintentional.",
        immediateEffect: { aiLiteracy: 1, citationIntegrity: -2 },
        futureEffect: "Repeating this pattern increases the risk of an academic integrity case over time.",
        whatCouldChangeThisOutcome: "Actually opening the DOI or searching the title in a database would reveal the fabrication.",
        sourceIds: ["nist-genai-profile"] },
      { id: "c", text: "Ask the same chatbot again whether the citation is correct",
        whyChosen: "It can feel like a reasonable double-check.",
        possibleBenefit: "None — the same system that generated the error is not an independent check on it.",
        possibleCost: "Wastes time without producing real verification.",
        possibleRisk: "The model may confidently reaffirm the fabricated citation.",
        immediateEffect: { aiLiteracy: 2, citationIntegrity: -1 },
        futureEffect: "Relying on self-verification from the same tool tends to repeat the original error.",
        whatCouldChangeThisOutcome: "Using an independent database or search tool instead would catch the fabrication.",
        sourceIds: ["nist-genai-profile"] }
    ],
    immediateConsequences: {
      a: "Naomi Williams discovers the citation is fabricated and finds a real source instead.",
      b: "Naomi Williams submits a paper with a citation that cannot be verified by the professor either.",
      c: "Naomi Williams gets a false reassurance and still submits an unverifiable citation."
    },
    oneYearConsequences: {
      a: "Naomi Williams has a reliable citation-verification habit that protects academic integrity.",
      b: "Naomi Williams risks an academic integrity review if the fabricated citation is discovered.",
      c: "Naomi Williams continues to trust unverified AI citations in future assignments."
    },
    longTermConsequences: {
      a: "Independent verification of every AI-suggested citation becomes second nature and protects Naomi Williams's academic record.",
      b: "A pattern of unverified fabricated citations can escalate from a warning to a serious academic integrity consequence.",
      c: "Continued reliance on self-verification from the same tool leaves Naomi Williams exposed to repeated hallucinated citations."
    },
    recoveryPath:
      "If Naomi Williams has already submitted a fabricated citation, the honest and effective fix is to notify the instructor promptly, replace it with a verified source, and explain the verification step that was missed. Most instructors respond far better to early correction than to silence.",
    conceptExplanation: {
      what: "A hallucination is AI output that sounds plausible but is unsupported, inaccurate, or entirely invented — including fake citations, quotations, and URLs.",
      why: "Because the system is optimized to continue realistic-looking patterns, it can generate a convincing citation format without any real source behind it.",
      how: "Verification means opening the actual source and checking the author, title, date, and claim directly — not asking the same model to confirm itself.",
      cost: "Verification takes real time, especially for sources that turn out not to exist.",
      risks: "Using a fabricated citation, even unintentionally, can be treated as an academic integrity violation.",
      whoMayBenefit: "Anyone who builds the habit of independently verifying every AI-suggested source before using it.",
      whoMayNotBenefit: "Someone who skips verification because a citation 'looks real' remains exposed to hallucinated sources.",
      misunderstandingRisk: "Believing that professional formatting (journal name, volume, DOI) is itself evidence of a real source.",
      verifyNote: "Always locate a cited source directly in a database or publisher site — never rely on a chatbot's self-confirmation."
    },
    realWorldExample:
      "Naomi Williams's AI-generated citation included a journal title, volume, and DOI that all appeared legitimate, but the DOI led nowhere and the article did not exist in any searchable database. Naomi caught the fabrication by checking before submitting.",
    knowledgeChecks: [
      { id: "kc1", question: "What should Naomi Williams do with an AI-generated citation before using it?",
        type: "multiple_choice",
        options: ["Locate the real source and verify every detail", "Assume it is real because it looks academic", "Ask the same chatbot to promise it is correct", "Use it only if it has a DOI"],
        correctAnswer: "Locate the real source and verify every detail",
        explanation: "A citation is not trustworthy until the source itself has been found and checked independently." }
    ],
    sourceIds: ["nist-genai-profile", "unesco-ai-education"],
    achievementId: "hallucination-verifier",
    unlocks: "q04",
    accessibilitySummary: "Text-based verification scenario; no reliance on visual citation formatting cues.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q04",
    primaryStudent: LESSON_CHARACTERS.q04,
    tier: 1,
    title: "Keep Human Judgment in the Loop",
    subtitle: "Decide what AI may suggest and what a person must approve",
    estimatedMinutes: 12,
    learningObjectives: [
      "Distinguish low-impact from high-impact decisions",
      "Explain why grades, hiring, health, finances, safety, and opportunity require stronger human review",
      "Identify transparency and approval points appropriate to a decision's impact",
      "Recognize automatic, unreviewed AI decisions as a risk in high-impact settings"
    ],
    openingNarrative:
      "Samuel Lee, a Social Work major at Angelo State, reads about an AI screening tool that labels a scholarship application 'weak' without human review of the explanation or criteria.",
    personalizationSlots: ["q04.context"],
    approvedStoryFragments: ["q04.context"],
    scenario: {
      prompt: "Samuel Lee is comparing three AI-assisted decisions. Which one most clearly requires meaningful human review before being finalized?",
      type: "sort_safe_unsafe"
    },
    choices: [
      { id: "a", text: "Rejecting a scholarship applicant based solely on an automated score",
        whyChosen: "This decision has a high, life-affecting consequence for the applicant.",
        possibleBenefit: "Samuel Lee uses human review to catch unfair or mistaken automated judgments.",
        possibleCost: "Human review takes more staff time than fully automated decisions.",
        possibleRisk: "Skipping human review risks an unfair, unexplained, unappealable outcome for a real person.",
        immediateEffect: { aiLiteracy: 5, integrity: 3 },
        futureEffect: "Recognizing high-impact decisions consistently protects both Samuel Lee and others from unreviewed AI harm.",
        whatCouldChangeThisOutcome: "Nothing reduces the need for human review here — the stakes are too high to automate fully.",
        sourceIds: ["nist-ai-rmf", "unesco-ai-education"] },
      { id: "b", text: "Suggesting three study-topic ideas for a low-stakes assignment",
        whyChosen: "This is a low-impact, easily reviewed and reversible suggestion.",
        possibleBenefit: "Low-risk brainstorming that the learner can freely evaluate.",
        possibleCost: "Minimal — the learner reviews and chooses regardless.",
        possibleRisk: "Very low, since nothing is finalized without the learner's own choice.",
        immediateEffect: { aiLiteracy: 2 },
        futureEffect: "Correctly identifying low-impact uses helps calibrate when heavier oversight isn't needed.",
        whatCouldChangeThisOutcome: "This stays low-risk as long as the learner still makes the final choice.",
        sourceIds: ["nist-ai-rmf"] },
      { id: "c", text: "Changing the color scheme of a class presentation slide",
        whyChosen: "A purely cosmetic and reversible choice.",
        possibleBenefit: "No real risk either way.",
        possibleCost: "None meaningful.",
        possibleRisk: "None.",
        immediateEffect: { aiLiteracy: 1 },
        futureEffect: "Correctly sorting truly low-impact choices helps focus review effort where it matters.",
        whatCouldChangeThisOutcome: "This remains low-impact regardless of context.",
        sourceIds: ["nist-ai-rmf"] }
    ],
    immediateConsequences: {
      a: "Samuel Lee flags this as a case needing mandatory human review before any decision is finalized.",
      b: "Samuel Lee recognizes this as safe to accept with light review.",
      c: "Samuel Lee recognizes this as needing no special review process."
    },
    oneYearConsequences: {
      a: "Samuel Lee has a reliable framework for sorting AI-assisted decisions by real-world impact.",
      b: "Samuel Lee continues to use AI efficiently for low-stakes brainstorming.",
      c: "Samuel Lee continues to make cosmetic choices efficiently without overthinking them."
    },
    longTermConsequences: {
      a: "Samuel Lee carries the skill of matching oversight to impact into any future job involving AI-assisted decisions about people.",
      b: "Comfort with appropriate low-stakes AI use supports efficient everyday work.",
      c: "Recognizing genuinely low-stakes decisions prevents wasted review effort on things that don't need it."
    },
    recoveryPath:
      "If Samuel Lee discovers an unreviewed high-impact AI decision already happened — to themselves or someone else — the recovery step is to request a human review or explanation through the appropriate office; most institutions have an appeal or review process for exactly this situation.",
    conceptExplanation: {
      what: "Human-in-the-loop design means AI can draft, sort, explain, and recommend, but a person reviews and approves decisions with real consequences.",
      why: "AI systems can be biased, mistaken, or applied unfairly, and the stronger the consequence, the more that error matters.",
      how: "It may help by adding a required review or approval step for any decision affecting grades, hiring, health, finances, safety, or opportunity.",
      cost: "Human review adds time and staffing cost compared to fully automated decisions.",
      risks: "Skipping review for high-impact decisions can produce unfair, biased, or unexplainable outcomes for real people.",
      whoMayBenefit: "Anyone affected by an automated decision benefits from having a human review point available.",
      whoMayNotBenefit: "Low-stakes, easily reversible tasks don't need the same level of oversight, and adding it there wastes effort.",
      misunderstandingRisk: "Assuming all AI-assisted decisions need the same level of scrutiny, when in fact oversight should scale with impact.",
      verifyNote: "This is a general risk-management principle; specific review requirements vary by institution and are documented in local policy."
    },
    realWorldExample:
      "Samuel Lee reviews a university pilot in which an automated scholarship-screening tool systematically down-scored a category of applicants because of a data pattern nobody had reviewed; a staff member's manual spot-check of rejected applications exposed the issue.",
    knowledgeChecks: [
      { id: "kc1", question: "Which decision most clearly requires meaningful human review?",
        type: "multiple_choice",
        options: ["Rejecting a scholarship applicant", "Suggesting three study-topic ideas", "Changing the color of a slide", "Generating a practice quiz"],
        correctAnswer: "Rejecting a scholarship applicant",
        explanation: "The consequence is high and directly affects a real person's opportunity, so it requires human review." }
    ],
    sourceIds: ["nist-ai-rmf", "unesco-ai-education"],
    achievementId: "human-judgment-keeper",
    unlocks: "q05",
    accessibilitySummary: "Three decisions sorted by impact level, presented as plain text with explicit risk labels rather than color alone.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q05",
    primaryStudent: LESSON_CHARACTERS.q05,
    tier: 1,
    title: "Build a Strong Prompt",
    subtitle: "Use role, task, context, constraints, and output format",
    estimatedMinutes: 13,
    learningObjectives: [
      "Apply a role-task-context-constraints-format prompting pattern",
      "Explain why a detailed prompt improves direction but does not guarantee a correct answer",
      "Practice rewriting a vague prompt into a specific one",
      "Recognize source limits as a prompting constraint that supports verification"
    ],
    openingNarrative:
      "Fatima Khan, a Civil Engineering major at Angelo State, types 'help me with engineering' into a chatbot and gets a generic wall of text that does not match the assignment.",
    personalizationSlots: ["q05.context"],
    approvedStoryFragments: ["q05.context"],
    scenario: {
      prompt: "Fatima Khan is preparing a study session on cell respiration. Which prompt gives the clearest learning direction?",
      type: "improve_a_prompt"
    },
    choices: [
      { id: "a", text: "\"Using only the notes below, quiz me with five questions on cell respiration and explain any missed answers.\"",
        whyChosen: "Includes source limits, a clear task, and a defined output format.",
        possibleBenefit: "Fatima Khan gets a focused, checkable study session grounded in the actual class material.",
        possibleCost: "Takes a little longer to write than a one-line prompt.",
        possibleRisk: "Low — even a strong prompt still requires the learner to verify the quiz content.",
        immediateEffect: { aiLiteracy: 5, professionalConfidence: 2 },
        futureEffect: "This prompting pattern transfers directly to other study and work tasks.",
        whatCouldChangeThisOutcome: "Nothing reduces the value of this pattern — it works across most tasks.",
        sourceIds: ["unesco-ai-education"] },
      { id: "b", text: "\"Do biology.\"",
        whyChosen: "It's fast to type when in a hurry.",
        possibleBenefit: "None — the goal and boundaries are undefined.",
        possibleCost: "Produces unfocused output that likely doesn't match the actual assignment.",
        possibleRisk: "Wastes study time on the wrong material.",
        immediateEffect: { aiLiteracy: 1 },
        futureEffect: "Vague prompting habits tend to produce inconsistent, low-value AI output across many tasks.",
        whatCouldChangeThisOutcome: "Adding role, task, context, and format would fix this immediately.",
        sourceIds: ["unesco-ai-education"] },
      { id: "c", text: "\"Tell me everything about biology.\"",
        whyChosen: "Feels thorough, since it asks for a lot of information.",
        possibleBenefit: "None — breadth without focus doesn't match a specific study need.",
        possibleCost: "Produces overwhelming, unfocused output that's hard to use for a specific exam.",
        possibleRisk: "Wastes time sorting through irrelevant material.",
        immediateEffect: { aiLiteracy: 1 },
        futureEffect: "Overly broad prompting tends to produce output that requires as much filtering as writing from scratch.",
        whatCouldChangeThisOutcome: "Narrowing to a specific topic and format would fix this.",
        sourceIds: ["unesco-ai-education"] }
    ],
    immediateConsequences: {
      a: "Fatima Khan gets a focused, source-limited quiz that matches the actual class notes.",
      b: "Fatima Khan gets a generic response that doesn't match the assignment.",
      c: "Fatima Khan gets an overwhelming amount of unfocused information."
    },
    oneYearConsequences: {
      a: "Fatima Khan has a reusable prompting pattern for future study sessions and assignments.",
      b: "Fatima Khan continues to get inconsistent results from vague prompts.",
      c: "Fatima Khan spends extra time filtering irrelevant AI output."
    },
    longTermConsequences: {
      a: "Fatima Khan carries a reliable prompting pattern into coursework, internships, and future jobs.",
      b: "Continued vague prompting limits how useful AI tools become as a study aid.",
      c: "Continued overly broad prompting wastes time that a more specific prompt would have saved."
    },
    recoveryPath:
      "Any vague prompt can be rewritten mid-conversation — Fatima Khan can simply add role, task, context, constraints, and format to an existing chat and get a much more useful response immediately.",
    conceptExplanation: {
      what: "A prompt is the instruction given to an AI system. A strong prompt states the role, task, context, constraints, and desired output format.",
      why: "Better prompts reduce guessing by giving the system a clear goal, relevant background, source limits, and a target format.",
      how: "It may help by producing more focused, usable output on the first try instead of several rounds of vague back-and-forth.",
      cost: "Writing a detailed prompt takes more time upfront than typing a one-line request.",
      risks: "A detailed prompt improves direction but does not guarantee a correct answer — verification is still required.",
      whoMayBenefit: "Anyone using AI for studying, drafting, or research benefits from a clearer, more specific prompt.",
      whoMayNotBenefit: "For extremely simple, low-stakes requests, a detailed prompt may be more effort than the task warrants.",
      misunderstandingRisk: "Confusing a well-structured prompt with a guaranteed correct answer.",
      verifyNote: "Even a strong prompt requires the learner to verify important facts, citations, and calculations in the output."
    },
    realWorldExample:
      "Fatima Khan compared two prompts for the same review session: a one-line request produced a generic overview, while a structured prompt naming the source material, task, and format produced a focused quiz Fatima could actually use before the exam.",
    knowledgeChecks: [
      { id: "kc1", question: "Which prompt gives the clearest learning direction?",
        type: "multiple_choice",
        options: ["\"Using only the notes below, quiz me with five questions on cell respiration and explain missed answers\"", "\"Do biology\"", "\"Tell me everything\"", "\"Make this easier\""],
        correctAnswer: "\"Using only the notes below, quiz me with five questions on cell respiration and explain missed answers\"",
        explanation: "It includes source limits, a clear task, and a defined output format." }
    ],
    sourceIds: ["unesco-ai-education"],
    achievementId: "prompt-architect",
    unlocks: "q06",
    accessibilitySummary: "Prompt-comparison scenario presented as plain text; no reliance on formatting alone to distinguish options.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q06",
    primaryStudent: LESSON_CHARACTERS.q06,
    tier: 2,
    title: "Use AI as a Tutor, Not a Substitute",
    subtitle: "Prompt for practice, explanation, and feedback",
    estimatedMinutes: 13,
    learningObjectives: [
      "Distinguish tutoring prompts that keep the learner active from substitution prompts that replace learning",
      "Apply retrieval practice and hint-based prompting strategies",
      "Use the independent-explanation test to check real understanding",
      "Recognize when AI use has crossed from support into substitution"
    ],
    openingNarrative:
      "Julian Moore, a Psychology major at Angelo State, has an exam coming up and must decide whether AI will support practice or become a shortcut around it.",
    personalizationSlots: ["q06.context"],
    approvedStoryFragments: ["q06.context"],
    scenario: {
      prompt: "Which prompt best supports Julian Moore's real learning rather than replacing it?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "\"Ask me one question at a time and give a hint after my first wrong attempt.\"",
        whyChosen: "Keeps Julian Moore actively retrieving and reasoning through the material.",
        possibleBenefit: "Julian Moore builds real, testable understanding through active retrieval practice.",
        possibleCost: "Slower than getting a direct answer immediately.",
        possibleRisk: "Low — this pattern is designed to support genuine learning.",
        immediateEffect: { aiLiteracy: 5, professionalConfidence: 3 },
        futureEffect: "This tutoring pattern builds understanding that holds up during an exam or later use.",
        whatCouldChangeThisOutcome: "Nothing changes this — active retrieval is reliably effective across subjects.",
        sourceIds: ["unesco-ai-education"] },
      { id: "b", text: "Complete Julian Moore's entire graded assignment and conceal AI involvement.",
        whyChosen: "Feels like the fastest way to finish an assignment.",
        possibleBenefit: "None — this replaces learning entirely and misrepresents authorship.",
        possibleCost: "Julian Moore cannot explain or defend the work if asked and may violate the course's academic integrity policy.",
        possibleRisk: "This is an academic integrity violation in most courses, not simply a study strategy issue.",
        immediateEffect: { aiLiteracy: 1, integrity: -4 },
        futureEffect: "This pattern tends to surface during an exam or oral follow-up when Julian Moore cannot explain the submitted work.",
        whatCouldChangeThisOutcome: "Nothing makes this appropriate — check the syllabus and switch to a tutoring-style prompt instead.",
        sourceIds: ["unesco-ai-education"] },
      { id: "c", text: "\"Give me the answer with no explanation.\"",
        whyChosen: "Feels efficient when short on time.",
        possibleBenefit: "Provides a quick answer to check against.",
        possibleCost: "Provides little practice or feedback, so understanding doesn't develop.",
        possibleRisk: "Julian Moore may not be able to reproduce the answer independently later.",
        immediateEffect: { aiLiteracy: 2 },
        futureEffect: "Relying on direct answers without explanation tends to leave gaps that appear during a closed-book exam.",
        whatCouldChangeThisOutcome: "Adding a request for explanation and follow-up practice would improve this significantly.",
        sourceIds: ["unesco-ai-education"] }
    ],
    immediateConsequences: {
      a: "Julian Moore works through several practice questions and strengthens real understanding.",
      b: "Julian Moore submits an assignment that isn't Julian's own work.",
      c: "Julian Moore gets quick answers but doesn't retain the reasoning behind them."
    },
    oneYearConsequences: {
      a: "Julian Moore can reliably explain and apply the material without the tool present.",
      b: "Julian Moore risks an academic integrity finding if the pattern is discovered or the material resurfaces on an exam.",
      c: "Julian Moore has gaps in understanding that surface on later, cumulative material."
    },
    longTermConsequences: {
      a: "Julian Moore carries active, tutoring-style AI use forward as a durable study strategy for future learning goals.",
      b: "Submitting AI-completed work as one's own can escalate from a warning to serious academic consequences if repeated.",
      c: "Passive answer-collecting without explanation tends to produce shallow, non-transferable knowledge."
    },
    recoveryPath:
      "If Julian Moore already used AI to complete graded work, the recovery path is disclosure to the instructor before the issue is discovered independently, followed by redoing the work using a tutoring-style approach — most academic integrity policies treat honest disclosure far more favorably than concealment.",
    conceptExplanation: {
      what: "AI can support learning by asking questions, giving hints, explaining mistakes, and adjusting difficulty — or it can replace learning by simply producing the finished product.",
      why: "A tutoring prompt keeps the learner active in the process; a substitution prompt asks the tool to do the thinking while the learner only submits the result.",
      how: "It may help by using hint-based, one-question-at-a-time prompting that mirrors how a human tutor would work.",
      cost: "Tutoring-style prompting takes longer than getting a direct, complete answer.",
      risks: "Substitution use can constitute academic misconduct and leaves the learner unable to perform independently.",
      whoMayBenefit: "Any learner who wants durable understanding rather than a one-time completed assignment.",
      whoMayNotBenefit: "A learner using AI purely to finish work faster gains speed but loses the underlying skill.",
      misunderstandingRisk: "Believing that completing an assignment (with AI doing the work) is the same as learning the material.",
      verifyNote: "The learning test is whether Julian Moore can explain or perform the skill without the tool afterward."
    },
    realWorldExample:
      "Julian Moore used AI to complete graded homework but could not explain the method during the exam. The assignment was finished, but the learning never happened, and the gap showed at the worst possible time.",
    knowledgeChecks: [
      { id: "kc1", question: "Which prompt best supports learning?",
        type: "multiple_choice",
        options: ["\"Ask me one question at a time and give a hint after my first wrong attempt\"", "Complete Julian Moore's entire graded assignment and hide AI involvement", "\"Give me the answer with no explanation\"", "\"Write my essay in my writing style\""],
        correctAnswer: "\"Ask me one question at a time and give a hint after my first wrong attempt\"",
        explanation: "This keeps the learner active in the process, which is what builds real, testable understanding." }
    ],
    sourceIds: ["unesco-ai-education"],
    achievementId: "ai-tutor-strategist",
    unlocks: "q07",
    accessibilitySummary: "Text-based comparison of three prompting styles with explicit consequence text for each.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q07",
    primaryStudent: LESSON_CHARACTERS.q07,
    tier: 2,
    title: "Use AI for Writing Support Without Losing Authorship",
    subtitle: "Separate brainstorming and feedback from ghostwriting",
    estimatedMinutes: 13,
    learningObjectives: [
      "Identify appropriate AI writing support: brainstorming, outlining, and revision feedback",
      "Distinguish supportive AI use from AI-generated ghostwriting presented as original work",
      "Practice keeping drafts and prompts as a record of the writing process",
      "Explain why the ability to defend an argument is a test of real authorship"
    ],
    openingNarrative:
      "Camila Ortiz, a Computer Science major at Angelo State, has a draft due and must decide where AI support should stop and Camila's own writing should take over.",
    personalizationSlots: ["q07.context"],
    approvedStoryFragments: ["q07.context"],
    scenario: {
      prompt: "Which use of AI most clearly preserves Camila Ortiz's authorship of a written assignment?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Ask AI for feedback on Camila Ortiz's outline, then let Camila make the revisions",
        whyChosen: "Keeps Camila Ortiz as the author and final decision-maker on every sentence.",
        possibleBenefit: "Produces feedback that strengthens the paper while the reasoning and wording stay Camila Ortiz's own.",
        possibleCost: "Takes more effort than letting the tool write the paper directly.",
        possibleRisk: "Low — this is a well-supported, defensible use of AI feedback.",
        immediateEffect: { aiLiteracy: 5, integrity: 4 },
        futureEffect: "Camila Ortiz can defend and explain every part of the resulting paper.",
        whatCouldChangeThisOutcome: "Nothing changes this — outline feedback with personal revision is broadly appropriate.",
        sourceIds: ["unesco-ai-education"] },
      { id: "b", text: "Ask AI to write the final paper and submit it as unaided original work",
        whyChosen: "Saves significant time compared to writing the paper personally.",
        possibleBenefit: "None — this misrepresents authorship and can violate academic integrity policy.",
        possibleCost: "Camila Ortiz cannot explain or defend the argument if questioned.",
        possibleRisk: "This is a serious academic integrity violation in most courses.",
        immediateEffect: { aiLiteracy: 1, integrity: -5 },
        futureEffect: "This pattern tends to surface during an oral follow-up or a later assignment requiring the same skill.",
        whatCouldChangeThisOutcome: "Nothing makes this appropriate — switch to outline feedback and personal revision instead.",
        sourceIds: ["unesco-ai-education"] },
      { id: "c", text: "Ask AI to generate supporting quotations that sound authoritative",
        whyChosen: "Feels like a shortcut to stronger-sounding evidence.",
        possibleBenefit: "None — fabricated evidence is never acceptable.",
        possibleCost: "Risks presenting invented quotations as real, which is a serious integrity violation.",
        possibleRisk: "This can be treated the same as fabricating data or forging a source.",
        immediateEffect: { aiLiteracy: 1, integrity: -5 },
        futureEffect: "Fabricated evidence discovered later can affect academic standing significantly.",
        whatCouldChangeThisOutcome: "Nothing makes this appropriate — real evidence must come from real, located sources.",
        sourceIds: ["unesco-ai-education"] }
    ],
    immediateConsequences: {
      a: "Camila Ortiz produces a stronger paper that Camila fully understands and can defend.",
      b: "Camila Ortiz submits work Camila cannot explain if questioned.",
      c: "Camila Ortiz risks including fabricated evidence in the paper."
    },
    oneYearConsequences: {
      a: "Camila Ortiz builds a writing process that consistently produces defensible, original work.",
      b: "Camila Ortiz risks an academic integrity case if the pattern is discovered.",
      c: "Camila Ortiz risks an academic integrity case if fabricated quotations are traced."
    },
    longTermConsequences: {
      a: "Camila Ortiz carries a writing process centered on outline feedback and personal revision into future writing tasks.",
      b: "Repeated ghostwriting use can escalate consequences from a warning to suspension in many institutions' policies.",
      c: "Fabricated evidence, if discovered later — even in a past assignment — can affect academic standing significantly."
    },
    recoveryPath:
      "If AI-generated text or fabricated quotations already made it into a draft, the fix is to remove them before submission, replace any quotations with real, verified sources, and rewrite the affected sections in Camila Ortiz's own words — catching this before submission avoids the issue entirely.",
    conceptExplanation: {
      what: "AI can help brainstorm topics, organize an outline, identify unclear sentences, and generate revision questions.",
      why: "These uses support Camila Ortiz's writing process without replacing Camila's reasoning, evidence, or wording.",
      how: "AI feedback may help by commenting on a draft Camila Ortiz already wrote.",
      cost: "Supportive use takes more personal effort than having the tool produce the final product.",
      risks: "The risk begins when the tool produces work presented as personal authorship without permission or disclosure.",
      whoMayBenefit: "Any writer who uses AI feedback to sharpen their own already-drafted ideas.",
      whoMayNotBenefit: "Camila Ortiz loses both learning and a legitimate authorship claim by letting AI produce the final argument and wording.",
      misunderstandingRisk: "Believing that light editing of AI-generated text counts as personal authorship.",
      verifyNote: "Keep drafts and prompts, follow the assignment's specific rule, and make sure the final reasoning and wording reflect personal understanding."
    },
    realWorldExample:
      "Camila Ortiz pasted an AI-generated essay into a submission and changed a few words. When asked to explain the central argument in office hours, Camila could not defend it because the tool, not Camila, had created the reasoning.",
    knowledgeChecks: [
      { id: "kc1", question: "Which use most clearly preserves Camila Ortiz's authorship?",
        type: "multiple_choice",
        options: ["Ask for feedback on Camila Ortiz's outline, then let Camila make the revisions", "Ask AI to write the final paper and claim it was unaided", "Generate fake quotations to strengthen the paper", "Ask AI to write in Camila Ortiz's personal voice"],
        correctAnswer: "Ask for feedback on Camila Ortiz's outline, then let Camila make the revisions",
        explanation: "Camila Ortiz remains the author and final decision-maker over every part of the work." }
    ],
    sourceIds: ["unesco-ai-education"],
    achievementId: "authorship-keeper",
    unlocks: "q08",
    accessibilitySummary: "Text-based comparison scenario with explicit risk and consequence language for each option.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q08",
    primaryStudent: LESSON_CHARACTERS.q08,
    tier: 2,
    title: "Use AI to Strengthen Research Questions",
    subtitle: "Generate terms and questions without replacing source work",
    estimatedMinutes: 12,
    learningObjectives: [
      "Use AI to narrow a broad interest into a researchable question",
      "Generate alternative search terms and synonyms for database searching",
      "Explain why AI-generated summaries cannot replace reading the actual sources",
      "Practice testing AI-suggested questions against real evidence availability"
    ],
    openingNarrative:
      "Isaiah Brown, a Biology major at Angelo State, has a broad research topic and needs to narrow it into a question specific enough to investigate.",
    personalizationSlots: ["q08.context"],
    approvedStoryFragments: ["q08.context"],
    scenario: {
      prompt: "What is a responsible AI role in the early stage of Isaiah Brown's research project?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Suggest related search terms that Isaiah Brown then tests in real library databases",
        whyChosen: "Uses AI for discovery while keeping evidence-gathering grounded in real sources.",
        possibleBenefit: "Speeds up the process of finding useful search vocabulary without skipping real research.",
        possibleCost: "Still requires the actual database search and reading step afterward.",
        possibleRisk: "Low, as long as the suggested terms are tested rather than treated as findings themselves.",
        immediateEffect: { aiLiteracy: 5, sourceJudgment: 4 },
        futureEffect: "This split between AI brainstorming and real evidence-gathering becomes a durable research workflow.",
        whatCouldChangeThisOutcome: "Nothing changes this — it's a sound pattern across most research tasks.",
        sourceIds: ["unesco-ai-education", "acrl-info-literacy"] },
      { id: "b", text: "Ask AI to invent supporting studies that fit Isaiah Brown's opinion",
        whyChosen: "Feels like a shortcut to a stronger-sounding argument.",
        possibleBenefit: "None — invented studies are fabricated evidence.",
        possibleCost: "Presents false research as real, a serious academic integrity issue.",
        possibleRisk: "This can be treated as fabrication of evidence if discovered.",
        immediateEffect: { aiLiteracy: 1, integrity: -5 },
        futureEffect: "Fabricated sources, once submitted, remain a risk even if not caught immediately.",
        whatCouldChangeThisOutcome: "Nothing makes this appropriate — real research requires real evidence.",
        sourceIds: ["unesco-ai-education"] },
      { id: "c", text: "Replace reading the actual sources with an AI-generated unsourced summary",
        whyChosen: "Feels faster than reading full articles.",
        possibleBenefit: "None; an AI summary Isaiah Brown never verifies is not evidence.",
        possibleCost: "Isaiah Brown cannot verify the summary's accuracy or defend specific claims from it.",
        possibleRisk: "Risks presenting inaccurate or fabricated claims as if they were verified findings.",
        immediateEffect: { aiLiteracy: 1, sourceJudgment: -2 },
        futureEffect: "This pattern tends to produce papers with claims Isaiah Brown cannot support if questioned.",
        whatCouldChangeThisOutcome: "Reading the actual sources, even briefly, would close this gap." }
    ],
    immediateConsequences: {
      a: "Isaiah Brown narrows the topic efficiently and finds real, citable sources.",
      b: "Isaiah Brown risks including fabricated studies in the paper.",
      c: "Isaiah Brown risks including inaccurate claims Isaiah cannot personally verify."
    },
    oneYearConsequences: {
      a: "Isaiah Brown has an efficient, defensible research workflow for future assignments.",
      b: "Isaiah Brown risks an academic integrity case if fabricated sources are traced.",
      c: "Isaiah Brown risks being unable to defend specific claims during discussion or grading follow-up."
    },
    longTermConsequences: {
      a: "Isaiah Brown uses AI for term generation while grounding evidence in real sources, a durable and scalable research skill.",
      b: "Fabricated evidence, even from an early draft, can resurface as a serious integrity issue later.",
      c: "Building research habits around unverified summaries limits the depth and reliability of future academic work."
    },
    recoveryPath:
      "If unverified or fabricated claims already made it into a draft, Isaiah Brown can replace them before submission by reading and citing the actual sources — catching this before a professor does preserves both the grade and academic standing.",
    conceptExplanation: {
      what: "AI can help turn a broad interest into narrower research questions and suggest synonyms for database searching.",
      why: "Databases respond to specific keywords, and brainstorming alternative terms increases the chance of finding relevant sources.",
      how: "It may help by generating a starting list of terms and angles that Isaiah Brown then tests against real, available evidence.",
      cost: "Still requires the time to actually search databases and read sources — AI brainstorming doesn't skip this step.",
      risks: "Letting a chatbot's summary replace reading actual sources risks unverified or fabricated claims entering the paper.",
      whoMayBenefit: "Any researcher looking for a faster way to generate initial search vocabulary and angles.",
      whoMayNotBenefit: "A researcher who treats AI brainstorming as a finished literature review skips the verification research requires.",
      misunderstandingRisk: "Treating a chatbot's confident summary of 'the research' as equivalent to actually reading the studies.",
      verifyNote: "Isaiah Brown must base every claim on sources Isaiah personally read and can explain, not an unsourced AI summary."
    },
    realWorldExample:
      "Isaiah Brown asked AI for alternative terms related to first-generation college persistence, tested those terms in the library database, and then read and evaluated the real articles that came back — producing a stronger, fully defensible paper.",
    knowledgeChecks: [
      { id: "kc1", question: "What is a responsible AI role in early research?",
        type: "multiple_choice",
        options: ["Suggest related search terms that Isaiah Brown then tests in library databases", "Invent studies that support Isaiah Brown's opinion", "Replace reading with an unsourced summary", "Write the final citations directly"],
        correctAnswer: "Suggest related search terms that Isaiah Brown then tests in library databases",
        explanation: "AI supports discovery while evidence still comes from real, read sources." }
    ],
    sourceIds: ["unesco-ai-education", "acrl-info-literacy"],
    achievementId: "research-prompt-builder",
    unlocks: "q09",
    accessibilitySummary: "Text-based scenario about research workflow; no reliance on visual database screenshots.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q09",
    primaryStudent: LESSON_CHARACTERS.q09,
    tier: 2,
    title: "The Syllabus Is the Rulebook",
    subtitle: "Follow the current instructor and assignment rules",
    estimatedMinutes: 11,
    learningObjectives: [
      "Recognize that AI-use rules differ by professor, course, and assignment",
      "Practice locating AI-use guidance in a syllabus or assignment sheet",
      "Explain why one course's rule does not transfer to another course",
      "Identify when to ask an instructor for clarification before using AI"
    ],
    openingNarrative:
      "Grace Nguyen, a Criminal Justice major at Angelo State, is enrolled in two courses with different AI-use rules and must track which rule applies to each assignment.",
    personalizationSlots: ["q09.context"],
    approvedStoryFragments: ["q09.context"],
    scenario: {
      prompt: "What actually controls Grace Nguyen's AI use on a particular assignment?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "The current syllabus, assignment directions, and instructor guidance",
        whyChosen: "These are the actual governing rules for the specific course and assignment.",
        possibleBenefit: "Grace Nguyen avoids academic integrity issues by following the correct rule.",
        possibleCost: "Requires checking each course's specific policy rather than assuming one rule fits all.",
        possibleRisk: "Low — this is the correct approach.",
        immediateEffect: { aiLiteracy: 5, integrity: 3 },
        futureEffect: "Checking the specific rule for each assignment becomes second nature.",
        whatCouldChangeThisOutcome: "Nothing changes this — the syllabus and instructor guidance always control.",
        sourceIds: ["unesco-ai-education"] },
      { id: "b", text: "What a friend's professor allows in a different class",
        whyChosen: "It can feel like a reasonable shortcut to assume similar rules apply everywhere.",
        possibleBenefit: "None — another course's rules do not apply here.",
        possibleCost: "Risks violating the actual rule for this specific assignment.",
        possibleRisk: "This can lead directly to an academic integrity violation based on a false assumption.",
        immediateEffect: { aiLiteracy: 1, integrity: -3 },
        futureEffect: "This assumption tends to cause repeated rule violations across different courses.",
        whatCouldChangeThisOutcome: "Checking this course's actual syllabus would prevent this." },
      { id: "c", text: "Whatever the AI tool itself suggests is acceptable",
        whyChosen: "It can seem convenient to trust the tool's own guidance.",
        possibleBenefit: "None — the tool has no authority to grant academic permission.",
        possibleCost: "The tool cannot know or enforce a specific course's policy.",
        possibleRisk: "Following tool-provided guidance instead of the syllabus risks a policy violation.",
        immediateEffect: { aiLiteracy: 1, integrity: -2 },
        futureEffect: "This pattern leaves Grace Nguyen exposed to violating rules the tool cannot know.",
        whatCouldChangeThisOutcome: "Reading the actual assignment directions would prevent this." }
    ],
    immediateConsequences: {
      a: "Grace Nguyen follows the correct rule for this specific assignment.",
      b: "Grace Nguyen risks applying the wrong course's rule to this assignment.",
      c: "Grace Nguyen risks following guidance that has no actual authority over the assignment."
    },
    oneYearConsequences: {
      a: "Grace Nguyen has a reliable habit of checking the specific rule before using AI on any assignment.",
      b: "Grace Nguyen risks an integrity case from applying a rule that doesn't actually govern the assignment.",
      c: "Grace Nguyen risks the same, based on following the tool's own unverified claims."
    },
    longTermConsequences: {
      a: "Grace Nguyen carries the habit of checking the governing policy before acting into professional settings well beyond AI use.",
      b: "A pattern of assuming rules transfer across contexts can create repeated integrity risk through college and into a career.",
      c: "Trusting a tool's self-description over an actual authority's written policy is a pattern worth breaking early."
    },
    recoveryPath:
      "If Grace Nguyen already used AI under the wrong assumption about the rule, the best next step is to ask the instructor directly, disclose what Grace did, and follow the instructor's guidance; asking is stronger than hiding the mistake.",
    conceptExplanation: {
      what: "AI-use rules can differ by professor, course, and assignment — a tool allowed for brainstorming in one class may be prohibited in another.",
      why: "Instructors design assignments to test specific skills, and AI use can undermine or support that goal very differently depending on the task.",
      how: "It may help to read the syllabus, assignment directions, and announcements, and ask directly when the rule is unclear.",
      cost: "Checking the specific rule for every assignment takes more effort than assuming one blanket rule.",
      risks: "Assuming a campus-wide conversation or another course's policy creates one universal permission can lead directly to a violation.",
      whoMayBenefit: "Any student juggling multiple courses with different AI-use expectations.",
      whoMayNotBenefit: "Checking the specific rule protects Grace Nguyen regardless of how Grace plans to use AI.",
      misunderstandingRisk: "Believing one professor's or one campus conversation's guidance applies universally to every class.",
      verifyNote: "When the rule is unclear, ask the instructor directly before using the tool on that assignment."
    },
    realWorldExample:
      "Grace Nguyen's writing professor allows AI feedback with disclosure, while Grace's statistics professor prohibits generative AI on a take-home exam; Grace must track and follow both rules correctly.",
    knowledgeChecks: [
      { id: "kc1", question: "What controls AI use on a particular assignment?",
        type: "multiple_choice",
        options: ["The current syllabus, assignment directions, and instructor guidance", "What a friend's professor allows", "Whatever the AI tool suggests", "The most permissive rule Grace Nguyen has heard about"],
        correctAnswer: "The current syllabus, assignment directions, and instructor guidance",
        explanation: "Rules are contextual to the specific course and assignment, not transferable from elsewhere." }
    ],
    sourceIds: ["unesco-ai-education"],
    achievementId: "syllabus-rule-reader",
    unlocks: "q10",
    accessibilitySummary: "Text-based scenario comparing rule sources; no reliance on visual formatting.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q10",
    primaryStudent: LESSON_CHARACTERS.q10,
    tier: 2,
    title: "Use the Green, Yellow, and Red Zone Model",
    subtitle: "Sort uses into allowed, ask-first, and prohibited categories",
    estimatedMinutes: 12,
    learningObjectives: [
      "Apply the green, yellow, and red zone model to sort AI uses",
      "Explain that the zone comes from the assignment rule, not from convenience",
      "Practice identifying when a use is unclear enough to require asking first",
      "Recognize clearly prohibited or deceptive uses"
    ],
    openingNarrative:
      "Andre Jackson, a Communication major at Angelo State, reads an assignment requiring 'independent work' without mentioning AI and must decide which permission zone applies.",
    personalizationSlots: ["q10.context"],
    approvedStoryFragments: ["q10.context"],
    scenario: {
      prompt: "Where should Andre Jackson place \"use AI to write a prohibited take-home exam response\" in the green/yellow/red zone model?",
      type: "sort_safe_unsafe"
    },
    choices: [
      { id: "a", text: "Red zone",
        whyChosen: "The use directly violates a stated assignment rule.",
        possibleBenefit: "Correctly identifying this protects Andre Jackson from an academic integrity violation.",
        possibleCost: "None — this is the correct classification.",
        possibleRisk: "None when correctly avoided.",
        immediateEffect: { aiLiteracy: 5, integrity: 3 },
        futureEffect: "Accurately sorting red-zone uses prevents integrity violations across every future course.",
        whatCouldChangeThisOutcome: "Nothing changes this — a clearly prohibited use stays in the red zone regardless of convenience.",
        sourceIds: ["unesco-ai-education"] },
      { id: "b", text: "Green zone",
        whyChosen: "It might feel tempting to assume any AI use is fine if it's not explicitly banned everywhere.",
        possibleBenefit: "None — this misclassifies a clearly prohibited use.",
        possibleCost: "Using AI here directly violates the exam's stated rule.",
        possibleRisk: "This is a serious academic integrity violation, not a green-zone judgment call.",
        immediateEffect: { aiLiteracy: 1, integrity: -5 },
        futureEffect: "Misclassifying prohibited uses as permitted tends to repeat until corrected.",
        whatCouldChangeThisOutcome: "Rereading the exam's explicit prohibition would correct this." },
      { id: "c", text: "Yellow zone",
        whyChosen: "It might seem like a gray area worth asking about.",
        possibleBenefit: "None in this case — the rule is already explicit, so there's nothing ambiguous to ask about.",
        possibleCost: "Treating an explicitly prohibited use as merely 'unclear' risks using it anyway.",
        possibleRisk: "Delaying the correct 'red zone' classification increases the chance of an accidental violation.",
        immediateEffect: { aiLiteracy: 2, integrity: -1 },
        futureEffect: "Misclassifying clearly prohibited uses as merely ambiguous can lead to violations later.",
        whatCouldChangeThisOutcome: "Recognizing an explicit prohibition as red, not yellow, would correct this." }
    ],
    immediateConsequences: {
      a: "Andre Jackson correctly avoids using AI on the prohibited exam.",
      b: "Andre Jackson risks using AI on an exam that explicitly prohibits it.",
      c: "Andre Jackson risks treating a clear prohibition as merely uncertain."
    },
    oneYearConsequences: {
      a: "Andre Jackson has a reliable framework for sorting AI uses correctly across courses.",
      b: "Andre Jackson risks an academic integrity case from misclassifying a clear rule.",
      c: "Andre Jackson risks the same, from underestimating how clear the original rule was."
    },
    longTermConsequences: {
      a: "Andre Jackson turns the green/yellow/red framework into a fast, reliable habit for navigating any new course's AI policy.",
      b: "Misclassifying red-zone uses as acceptable risks escalating academic consequences if repeated.",
      c: "Treating clear rules as ambiguous can lead to the same violations as ignoring them outright."
    },
    recoveryPath:
      "If Andre Jackson is ever unsure which zone a use falls into, asking the instructor directly before proceeding always resolves the ambiguity — and if a mistake already happened, prompt disclosure is the strongest recovery step available.",
    conceptExplanation: {
      what: "Green-zone uses are clearly allowed (like practice questions or grammar feedback when permitted). Yellow-zone uses are unclear or substantial enough to ask first. Red-zone uses violate stated rules or misrepresent authorship.",
      why: "This model gives Andre Jackson a fast way to sort a specific AI use without rereading the entire syllabus every time.",
      how: "It may help by anchoring the classification in the actual assignment rule rather than how convenient or common the use feels.",
      cost: "Requires actually knowing the assignment's specific rule to classify correctly.",
      risks: "Misclassifying a red-zone use as green or yellow can lead directly to an academic integrity violation.",
      whoMayBenefit: "Any student navigating multiple courses with different AI-use expectations.",
      whoMayNotBenefit: "The framework helps Andre Jackson regardless of how Andre plans to use AI.",
      misunderstandingRisk: "Assuming the zone is determined by how easy the tool makes the task, rather than by the actual rule.",
      verifyNote: "When in doubt between yellow and red, ask the instructor directly before proceeding."
    },
    realWorldExample:
      "Andre Jackson's template categorized 'brainstorming with disclosure' as green, 'drafting a full outline without asking' as yellow, and 'generating a prohibited exam answer' as red — using the actual assignment rule, not convenience, to decide each category.",
    knowledgeChecks: [
      { id: "kc1", question: "Where does 'use AI to write a prohibited exam response' belong?",
        type: "multiple_choice",
        options: ["Red zone", "Green zone", "Yellow zone", "It depends on how well the AI response is written"],
        correctAnswer: "Red zone",
        explanation: "It violates the assignment rule directly, which places it in the prohibited category regardless of quality." }
    ],
    sourceIds: ["unesco-ai-education"],
    achievementId: "ai-use-zone-navigator",
    unlocks: "q11",
    accessibilitySummary: "Zone classification presented as explicit text labels, not color-only indicators.",
    reviewedDate: "2026-07-11"
  }
];
