// Ram Ready Digital Literacy — AI Digital Literacy Quest, Quests 1-10
// Tier I (q01-q05): Understand the System. Tier II (q06-q10): Learn and Create
// Responsibly. Content is prewritten and reviewed. Personalization only
// assembles approved fragments (data/story-fragments.js) at the listed slot
// ids — it never invents facts, capabilities, or consequences. See
// docs/PERSONALIZATION_MODEL.md.

export const QUESTS_PART1 = [
  {
    id: "q01",
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
      "{{name}} opens a chatbot for the first time this semester expecting something like a search engine. What {{subject}} finds instead is a system that writes fluent, confident paragraphs — some accurate, some not — with no visible difference between the two.",
    personalizationSlots: ["q01.context"],
    approvedStoryFragments: ["q01.context"],
    scenario: {
      prompt:
        "A generative AI tool explains a historical event in a polished, confident paragraph. The tone sounds certain, but one date in the explanation is wrong. What is the safest mental model for treating this kind of output?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Treat it as a useful generated draft that still needs evaluation",
        whyChosen: "Recognizes that usefulness and truth are separate questions.",
        possibleBenefit: "Keeps the learner in the habit of verifying before relying on AI output.",
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
      a: "{{name}} notes the questionable date and looks it up before using it.",
      b: "{{name}} repeats the wrong date in a class discussion before anyone catches it.",
      c: "{{name}} copies the paragraph into notes without flagging the date to check later."
    },
    oneYearConsequences: {
      a: "{{name}} has a reliable habit of verifying AI output before using it in coursework.",
      b: "{{name}} has been corrected publicly at least once for repeating an AI-generated error.",
      c: "{{name}} occasionally submits work containing unverified AI errors."
    },
    longTermConsequences: {
      a: "Treating AI output as a draft that needs review is a durable habit that transfers to any future job involving AI tools.",
      b: "Repeated reliance on fluent tone as proof of truth can damage academic and professional credibility over time.",
      c: "Skipping verification as a habit increases long-term risk of academic integrity issues and factual errors."
    },
    recoveryPath:
      "Any AI-generated claim can be checked after the fact — {{name}} can always go back, find the original source, and correct the record before it causes real harm.",
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
      "A composite first-year student asked a chatbot to summarize a reading and received a confident, well-organized summary that misstated the author's main argument. The student caught the error only because they reread the original text before citing the summary.",
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
    tier: 1,
    title: "Generative AI Is Not the Same as Search",
    subtitle: "Know when you need real sources instead of a synthesized response",
    estimatedMinutes: 12,
    learningObjectives: [
      "Distinguish search tools that point to real sources from generative AI that synthesizes a new response",
      "Identify appropriate uses for AI (brainstorming terms, practicing explanations) versus research uses that require real sources",
      "Explain why an unsupported AI claim is not a citation",
      "Practice tracing a claim back to real evidence"
    ],
    openingNarrative:
      "For a research assignment, {{name}} asks a chatbot for three statistics on a topic. The answer arrives instantly and sounds authoritative — but none of the numbers are linked to a real report.",
    personalizationSlots: ["q02.context"],
    approvedStoryFragments: ["q02.context"],
    scenario: {
      prompt:
        "A research assignment requires evidence from real sources. Which task belongs primarily to a research database or source search rather than a generative AI chatbot?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Finding the actual peer-reviewed article that supports a claim",
        whyChosen: "Evidence for an academic claim should connect to a real, checkable source.",
        possibleBenefit: "Produces citable, verifiable evidence that satisfies the assignment's source requirement.",
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
      a: "{{name}} locates the real article and can cite it with confidence.",
      b: "{{name}} gets useful search terms but still needs to verify them in a database.",
      c: "{{name}} understands the concept better but has no new evidence for the paper."
    },
    oneYearConsequences: {
      a: "{{name}} builds a research habit that consistently produces citable, defensible evidence.",
      b: "{{name}} develops efficient search skills without confusing brainstorming for evidence.",
      c: "{{name}} may need to build additional research habits before the next major assignment."
    },
    longTermConsequences: {
      a: "This distinction between synthesis and search protects against a common form of accidental academic integrity violation.",
      b: "Combining AI brainstorming with real database searching becomes an efficient long-term research workflow.",
      c: "Practicing explanations alone does not build the research skills needed for source-based assignments."
    },
    recoveryPath:
      "If {{name}} already used unsupported AI claims in a draft, the fix is straightforward: replace each claim with a real, located source before submitting — professors generally welcome this correction if caught early.",
    conceptExplanation: {
      what: "Search tools point to real webpages, articles, and documents; generative AI often combines patterns into a new synthesized response without showing the original evidence.",
      why: "These are different technologies solving different problems — search indexes existing content, while generative AI produces new content from learned patterns.",
      how: "AI can help explain vocabulary or generate search terms; databases and library tools are still required to locate the actual evidence.",
      cost: "Using both tools together takes more time than relying on one alone.",
      risks: "Treating a generated summary as equivalent to a citation risks presenting fabricated or unsupported claims as fact.",
      whoMayBenefit: "Any researcher who uses AI for the brainstorming stage while reserving evidence-finding for real sources.",
      whoMayNotBenefit: "A student who skips the source-finding step entirely loses the evidentiary basis their argument needs.",
      misunderstandingRisk: "Assuming a generated answer already constitutes a source or citation.",
      verifyNote: "Always locate the real source and verify it directly — an AI-provided 'citation' is not verified until you find it yourself."
    },
    realWorldExample:
      "A composite student asked a chatbot for statistics on local food insecurity and copied them directly into a paper. None of the numbers were linked to a real report, and the professor flagged the unsupported claims during grading.",
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
    tier: 1,
    title: "Why AI Hallucinates",
    subtitle: "Recognize fabricated facts, quotations, links, and citations",
    estimatedMinutes: 13,
    learningObjectives: [
      "Define hallucination as plausible-sounding but unsupported or fabricated AI output",
      "Recognize that fabricated citations can include realistic-looking titles, journals, and DOIs",
      "Practice verifying a citation by locating the real source",
      "Explain why asking the same model 'are you sure?' is not verification"
    ],
    openingNarrative:
      "{{name}} asks an AI tool for a supporting citation and receives a journal title, volume number, and DOI that all look completely legitimate. The DOI leads nowhere, and the article does not exist in any database {{name}} checks.",
    personalizationSlots: ["q03.context"],
    approvedStoryFragments: ["q03.context"],
    scenario: {
      prompt: "What should {{name}} do with an AI-generated citation before using it in an assignment?",
      type: "identify_missing_information"
    },
    choices: [
      { id: "a", text: "Locate the real source and verify every detail independently",
        whyChosen: "A citation is not trustworthy until the source itself has been found and checked.",
        possibleBenefit: "Guarantees the citation is real before it appears in submitted work.",
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
      a: "{{name}} discovers the citation is fabricated and finds a real source instead.",
      b: "{{name}} submits a paper with a citation that cannot be verified by the professor either.",
      c: "{{name}} gets a false reassurance and still submits an unverifiable citation."
    },
    oneYearConsequences: {
      a: "{{name}} has a reliable citation-verification habit that protects academic integrity.",
      b: "{{name}} risks an academic integrity review if the fabricated citation is discovered.",
      c: "{{name}} continues to trust unverified AI citations in future assignments."
    },
    longTermConsequences: {
      a: "Independent verification of every AI-suggested citation becomes second nature and protects {{name}}'s academic record.",
      b: "A pattern of unverified fabricated citations can escalate from a warning to a serious academic integrity consequence.",
      c: "Continued reliance on self-verification from the same tool leaves {{name}} exposed to repeated hallucinated citations."
    },
    recoveryPath:
      "If a fabricated citation has already been submitted, the honest and effective fix is to notify the instructor promptly, correct the citation with a verified source, and explain the verification step that was missed — most instructors respond far better to early correction than to silence.",
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
      "A composite student's AI-generated citation included a journal title, volume, and DOI that all appeared legitimate, but the DOI led nowhere and the article did not exist in any searchable database — the fabrication was only caught because the student checked before submitting.",
    knowledgeChecks: [
      { id: "kc1", question: "What should you do with an AI-generated citation before using it?",
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
      "{{name}} reads about an AI screening tool that labels a scholarship application 'weak' with no human reviewing the explanation or checking whether the criteria were applied fairly.",
    personalizationSlots: ["q04.context"],
    approvedStoryFragments: ["q04.context"],
    scenario: {
      prompt: "Which of the following decisions most clearly requires meaningful human review before being finalized?",
      type: "sort_safe_unsafe"
    },
    choices: [
      { id: "a", text: "Rejecting a scholarship applicant based solely on an automated score",
        whyChosen: "This decision has a high, life-affecting consequence for the applicant.",
        possibleBenefit: "Requiring human review catches unfair or mistaken automated judgments.",
        possibleCost: "Human review takes more staff time than fully automated decisions.",
        possibleRisk: "Skipping human review risks an unfair, unexplained, unappealable outcome for a real person.",
        immediateEffect: { aiLiteracy: 5, integrity: 3 },
        futureEffect: "Recognizing high-impact decisions consistently protects both {{name}} and others from unreviewed AI harm.",
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
      a: "{{name}} flags this as a case needing mandatory human review before any decision is finalized.",
      b: "{{name}} recognizes this as safe to accept with light review.",
      c: "{{name}} recognizes this as needing no special review process."
    },
    oneYearConsequences: {
      a: "{{name}} has a reliable framework for sorting AI-assisted decisions by real-world impact.",
      b: "{{name}} continues to use AI efficiently for low-stakes brainstorming.",
      c: "{{name}} continues to make cosmetic choices efficiently without overthinking them."
    },
    longTermConsequences: {
      a: "Matching oversight to impact is a skill valuable in any future job involving AI-assisted decisions about people.",
      b: "Comfort with appropriate low-stakes AI use supports efficient everyday work.",
      c: "Recognizing genuinely low-stakes decisions prevents wasted review effort on things that don't need it."
    },
    recoveryPath:
      "If {{name}} discovers an unreviewed high-impact AI decision already happened — to themselves or someone else — the recovery step is to request a human review or explanation through the appropriate office; most institutions have an appeal or review process for exactly this situation.",
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
      "A composite university pilot found that an automated scholarship-screening tool had systematically down-scored a category of applicants due to a data pattern nobody had reviewed — the issue was only caught because a staff member insisted on spot-checking rejected applications by hand.",
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
      "{{name}} types \"help me with biology\" into a chatbot and gets a generic wall of text that doesn't match the actual assignment at all.",
    personalizationSlots: ["q05.context"],
    approvedStoryFragments: ["q05.context"],
    scenario: {
      prompt: "Which prompt gives the clearest learning direction for a study session on cell respiration?",
      type: "improve_a_prompt"
    },
    choices: [
      { id: "a", text: "\"Using only the notes below, quiz me with five questions on cell respiration and explain any missed answers.\"",
        whyChosen: "Includes source limits, a clear task, and a defined output format.",
        possibleBenefit: "Produces a focused, checkable study session grounded in the learner's actual material.",
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
      a: "{{name}} gets a focused, source-limited quiz that matches the actual class notes.",
      b: "{{name}} gets a generic response that doesn't match the assignment.",
      c: "{{name}} gets an overwhelming amount of unfocused information."
    },
    oneYearConsequences: {
      a: "{{name}} has a reusable prompting pattern for future study sessions and assignments.",
      b: "{{name}} continues to get inconsistent results from vague prompts.",
      c: "{{name}} spends extra time filtering irrelevant AI output."
    },
    longTermConsequences: {
      a: "A reliable prompting pattern is a transferable skill useful in coursework, internships, and future jobs.",
      b: "Continued vague prompting limits how useful AI tools become as a study aid.",
      c: "Continued overly broad prompting wastes time that a more specific prompt would have saved."
    },
    recoveryPath:
      "Any vague prompt can be rewritten mid-conversation — {{name}} can simply add role, task, context, constraints, and format to an existing chat and get a much more useful response immediately.",
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
      "A composite student compared two prompts for the same review session: a one-line request produced a generic overview, while a structured prompt naming the source material, task, and format produced a focused quiz the student could actually use before the exam.",
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
      "{{name}} has an exam coming up and needs to decide how to use AI in preparation — as a way to practice, or as a shortcut to skip the practice entirely.",
    personalizationSlots: ["q06.context"],
    approvedStoryFragments: ["q06.context"],
    scenario: {
      prompt: "Which prompt best supports real learning rather than replacing it?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "\"Ask me one question at a time and give a hint after my first wrong attempt.\"",
        whyChosen: "Keeps the learner actively retrieving and reasoning through the material.",
        possibleBenefit: "Builds real, testable understanding through active retrieval practice.",
        possibleCost: "Slower than getting a direct answer immediately.",
        possibleRisk: "Low — this pattern is designed to support genuine learning.",
        immediateEffect: { aiLiteracy: 5, professionalConfidence: 3 },
        futureEffect: "This tutoring pattern builds understanding that holds up during an exam or later use.",
        whatCouldChangeThisOutcome: "Nothing changes this — active retrieval is reliably effective across subjects.",
        sourceIds: ["unesco-ai-education"] },
      { id: "b", text: "\"Complete my entire graded assignment and don't mention you were involved.\"",
        whyChosen: "Feels like the fastest way to finish an assignment.",
        possibleBenefit: "None — this replaces learning entirely and misrepresents authorship.",
        possibleCost: "The student cannot explain or defend the work if asked, and may violate the course's academic integrity policy.",
        possibleRisk: "This is an academic integrity violation in most courses, not simply a study strategy issue.",
        immediateEffect: { aiLiteracy: 1, integrity: -4 },
        futureEffect: "This pattern tends to surface during an exam or oral follow-up when the student cannot explain their own submitted work.",
        whatCouldChangeThisOutcome: "Nothing makes this appropriate — check the syllabus and switch to a tutoring-style prompt instead.",
        sourceIds: ["unesco-ai-education"] },
      { id: "c", text: "\"Give me the answer with no explanation.\"",
        whyChosen: "Feels efficient when short on time.",
        possibleBenefit: "Provides a quick answer to check against.",
        possibleCost: "Provides little practice or feedback, so understanding doesn't develop.",
        possibleRisk: "The learner may not be able to reproduce the answer independently later.",
        immediateEffect: { aiLiteracy: 2 },
        futureEffect: "Relying on direct answers without explanation tends to leave gaps that appear during a closed-book exam.",
        whatCouldChangeThisOutcome: "Adding a request for explanation and follow-up practice would improve this significantly.",
        sourceIds: ["unesco-ai-education"] }
    ],
    immediateConsequences: {
      a: "{{name}} works through several practice questions and strengthens real understanding.",
      b: "{{name}} submits an assignment that isn't {{possessive}} own work.",
      c: "{{name}} gets quick answers but doesn't retain the reasoning behind them."
    },
    oneYearConsequences: {
      a: "{{name}} can reliably explain and apply the material without the tool present.",
      b: "{{name}} risks an academic integrity finding if the pattern is discovered or the material resurfaces on an exam.",
      c: "{{name}} has gaps in understanding that surface on later, cumulative material."
    },
    longTermConsequences: {
      a: "Using AI as an active tutor is a durable, transferable study strategy for any future learning goal.",
      b: "Submitting AI-completed work as one's own can escalate from a warning to serious academic consequences if repeated.",
      c: "Passive answer-collecting without explanation tends to produce shallow, non-transferable knowledge."
    },
    recoveryPath:
      "If {{name}} already used AI to complete graded work, the recovery path is disclosure to the instructor before the issue is discovered independently, followed by redoing the work using a tutoring-style approach — most academic integrity policies treat honest disclosure far more favorably than concealment.",
    conceptExplanation: {
      what: "AI can support learning by asking questions, giving hints, explaining mistakes, and adjusting difficulty — or it can replace learning by simply producing the finished product.",
      why: "A tutoring prompt keeps the learner active in the process; a substitution prompt asks the tool to do the thinking while the learner only submits the result.",
      how: "It may help by using hint-based, one-question-at-a-time prompting that mirrors how a human tutor would work.",
      cost: "Tutoring-style prompting takes longer than getting a direct, complete answer.",
      risks: "Substitution use can constitute academic misconduct and leaves the learner unable to perform independently.",
      whoMayBenefit: "Any learner who wants durable understanding rather than a one-time completed assignment.",
      whoMayNotBenefit: "A learner using AI purely to finish work faster gains speed but loses the underlying skill.",
      misunderstandingRisk: "Believing that completing an assignment (with AI doing the work) is the same as learning the material.",
      verifyNote: "The learning test is simple: can you explain or perform the skill without the tool afterward?"
    },
    realWorldExample:
      "A composite student who used AI to complete graded homework could not explain the method during the exam — the assignment was finished, but the learning never happened, and it showed at the worst possible time.",
    knowledgeChecks: [
      { id: "kc1", question: "Which prompt best supports learning?",
        type: "multiple_choice",
        options: ["\"Ask me one question at a time and give a hint after my first wrong attempt\"", "\"Complete my entire graded assignment and hide your involvement\"", "\"Give me the answer with no explanation\"", "\"Write my essay in my writing style\""],
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
      "{{name}} has a draft due and is deciding exactly where AI's role should stop and {{possessive}} own writing should take over.",
    personalizationSlots: ["q07.context"],
    approvedStoryFragments: ["q07.context"],
    scenario: {
      prompt: "Which use of AI most clearly preserves {{name}}'s authorship of a written assignment?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Ask AI for feedback on an outline {{name}} created, then make {{possessive}} own revisions",
        whyChosen: "Keeps {{name}} as the author and final decision-maker on every sentence.",
        possibleBenefit: "Produces feedback that strengthens the paper while the reasoning and wording stay {{possessive}} own.",
        possibleCost: "Takes more effort than letting the tool write the paper directly.",
        possibleRisk: "Low — this is a well-supported, defensible use of AI feedback.",
        immediateEffect: { aiLiteracy: 5, integrity: 4 },
        futureEffect: "{{name}} can defend and explain every part of the resulting paper.",
        whatCouldChangeThisOutcome: "Nothing changes this — outline feedback with personal revision is broadly appropriate.",
        sourceIds: ["unesco-ai-education"] },
      { id: "b", text: "Ask AI to write the final paper and submit it as unaided original work",
        whyChosen: "Saves significant time compared to writing the paper personally.",
        possibleBenefit: "None — this misrepresents authorship and can violate academic integrity policy.",
        possibleCost: "The student cannot explain or defend the argument if questioned.",
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
      a: "{{name}} produces a stronger paper that {{subject}} fully understands and can defend.",
      b: "{{name}} submits work {{subject}} cannot explain if questioned.",
      c: "{{name}} risks including fabricated evidence in the paper."
    },
    oneYearConsequences: {
      a: "{{name}} builds a writing process that consistently produces defensible, original work.",
      b: "{{name}} risks an academic integrity case if the pattern is discovered.",
      c: "{{name}} risks an academic integrity case if fabricated quotations are traced."
    },
    longTermConsequences: {
      a: "A writing process centered on outline feedback and personal revision is a durable, transferable skill for any future writing task.",
      b: "Repeated ghostwriting use can escalate consequences from a warning to suspension in many institutions' policies.",
      c: "Fabricated evidence, if discovered later — even in a past assignment — can affect academic standing significantly."
    },
    recoveryPath:
      "If AI-generated text or fabricated quotations already made it into a draft, the fix is to remove them before submission, replace any quotations with real, verified sources, and rewrite the affected sections in {{possessive}} own words — catching this before submission avoids the issue entirely.",
    conceptExplanation: {
      what: "AI can help brainstorm topics, organize an outline, identify unclear sentences, and generate revision questions.",
      why: "These uses support the writing process without replacing the student's own reasoning, evidence, and wording.",
      how: "It may help by giving structured, specific feedback on a draft the student already wrote.",
      cost: "Supportive use takes more personal effort than having the tool produce the final product.",
      risks: "The risk begins when the tool produces work presented as personal authorship without permission or disclosure.",
      whoMayBenefit: "Any writer who uses AI feedback to sharpen their own already-drafted ideas.",
      whoMayNotBenefit: "A student who lets AI produce the final argument and wording loses both the learning and the legitimate authorship claim.",
      misunderstandingRisk: "Believing that light editing of AI-generated text counts as personal authorship.",
      verifyNote: "Keep drafts and prompts, follow the assignment's specific rule, and make sure the final reasoning and wording reflect personal understanding."
    },
    realWorldExample:
      "A composite student pasted an AI-generated essay into a submission and changed a few words. When asked to explain the central argument in office hours, the student could not defend it — the tool had created the reasoning, not the student.",
    knowledgeChecks: [
      { id: "kc1", question: "Which use most clearly preserves student authorship?",
        type: "multiple_choice",
        options: ["Ask for feedback on an outline you created, then make your own revisions", "Ask AI to write the final paper and claim it was unaided", "Generate fake quotations to strengthen the paper", "Ask AI to write in your personal voice"],
        correctAnswer: "Ask for feedback on an outline you created, then make your own revisions",
        explanation: "The student remains the author and final decision-maker over every part of the work." }
    ],
    sourceIds: ["unesco-ai-education"],
    achievementId: "authorship-keeper",
    unlocks: "q08",
    accessibilitySummary: "Text-based comparison scenario with explicit risk and consequence language for each option.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q08",
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
      "{{name}} has a broad topic in mind for a research paper but needs to narrow it into something specific enough to actually research.",
    personalizationSlots: ["q08.context"],
    approvedStoryFragments: ["q08.context"],
    scenario: {
      prompt: "What is a responsible AI role in the early stage of a research project?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Suggest related search terms that {{name}} then tests in real library databases",
        whyChosen: "Uses AI for discovery while keeping evidence-gathering grounded in real sources.",
        possibleBenefit: "Speeds up the process of finding useful search vocabulary without skipping real research.",
        possibleCost: "Still requires the actual database search and reading step afterward.",
        possibleRisk: "Low, as long as the suggested terms are tested rather than treated as findings themselves.",
        immediateEffect: { aiLiteracy: 5, sourceJudgment: 4 },
        futureEffect: "This split between AI brainstorming and real evidence-gathering becomes a durable research workflow.",
        whatCouldChangeThisOutcome: "Nothing changes this — it's a sound pattern across most research tasks.",
        sourceIds: ["unesco-ai-education", "acrl-info-literacy"] },
      { id: "b", text: "Ask AI to invent supporting studies that fit {{possessive}} opinion",
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
        possibleBenefit: "None — a summary the student never verifies is not evidence.",
        possibleCost: "The student cannot verify the summary's accuracy or defend specific claims from it.",
        possibleRisk: "Risks presenting inaccurate or fabricated claims as if they were verified findings.",
        immediateEffect: { aiLiteracy: 1, sourceJudgment: -2 },
        futureEffect: "This pattern tends to produce papers with claims the student cannot support if questioned.",
        whatCouldChangeThisOutcome: "Reading the actual sources, even briefly, would close this gap." }
    ],
    immediateConsequences: {
      a: "{{name}} narrows the topic efficiently and finds real, citable sources.",
      b: "{{name}} risks including fabricated studies in the paper.",
      c: "{{name}} risks including inaccurate claims {{subject}} cannot personally verify."
    },
    oneYearConsequences: {
      a: "{{name}} has an efficient, defensible research workflow for future assignments.",
      b: "{{name}} risks an academic integrity case if fabricated sources are traced.",
      c: "{{name}} risks being unable to defend specific claims during discussion or grading follow-up."
    },
    longTermConsequences: {
      a: "Using AI for term generation while grounding evidence in real sources is a durable, scalable research skill.",
      b: "Fabricated evidence, even from an early draft, can resurface as a serious integrity issue later.",
      c: "Building research habits around unverified summaries limits the depth and reliability of future academic work."
    },
    recoveryPath:
      "If unverified or fabricated claims already made it into a draft, {{name}} can replace them before submission by reading and citing the actual sources — catching this before a professor does preserves both the grade and academic standing.",
    conceptExplanation: {
      what: "AI can help turn a broad interest into narrower research questions and suggest synonyms for database searching.",
      why: "Databases respond to specific keywords, and brainstorming alternative terms increases the chance of finding relevant sources.",
      how: "It may help by generating a starting list of terms and angles that {{name}} then tests against real, available evidence.",
      cost: "Still requires the time to actually search databases and read sources — AI brainstorming doesn't skip this step.",
      risks: "Letting a chatbot's summary replace reading actual sources risks unverified or fabricated claims entering the paper.",
      whoMayBenefit: "Any researcher looking for a faster way to generate initial search vocabulary and angles.",
      whoMayNotBenefit: "A researcher who treats AI brainstorming as a finished literature review skips the verification research requires.",
      misunderstandingRisk: "Treating a chatbot's confident summary of 'the research' as equivalent to actually reading the studies.",
      verifyNote: "Base every claim on sources you have personally read and can explain — not an unsourced AI summary."
    },
    realWorldExample:
      "A composite student asked AI for alternative terms related to first-generation college persistence, tested those terms in the library database, and then read and evaluated the real articles that came back — producing a stronger, fully defensible paper.",
    knowledgeChecks: [
      { id: "kc1", question: "What is a responsible AI role in early research?",
        type: "multiple_choice",
        options: ["Suggest related search terms that you then test in library databases", "Invent studies that support your opinion", "Replace reading with an unsourced summary", "Write the final citations directly"],
        correctAnswer: "Suggest related search terms that you then test in library databases",
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
      "{{name}} is enrolled in two courses this term with completely different AI-use rules, and has to keep track of which rule applies to which assignment.",
    personalizationSlots: ["q09.context"],
    approvedStoryFragments: ["q09.context"],
    scenario: {
      prompt: "What actually controls AI use on a particular assignment?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "The current syllabus, assignment directions, and instructor guidance",
        whyChosen: "These are the actual governing rules for the specific course and assignment.",
        possibleBenefit: "Following the correct rule avoids academic integrity issues entirely.",
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
        futureEffect: "This pattern leaves the student exposed to violating rules the tool has no way of knowing.",
        whatCouldChangeThisOutcome: "Reading the actual assignment directions would prevent this." }
    ],
    immediateConsequences: {
      a: "{{name}} follows the correct rule for this specific assignment.",
      b: "{{name}} risks applying the wrong course's rule to this assignment.",
      c: "{{name}} risks following guidance that has no actual authority over the assignment."
    },
    oneYearConsequences: {
      a: "{{name}} has a reliable habit of checking the specific rule before using AI on any assignment.",
      b: "{{name}} risks an integrity case from applying a rule that doesn't actually govern the assignment.",
      c: "{{name}} risks the same, based on following the tool's own unverified claims."
    },
    longTermConsequences: {
      a: "Checking the actual governing policy before acting is a transferable professional skill, useful well beyond AI use.",
      b: "A pattern of assuming rules transfer across contexts can create repeated integrity risk through college and into a career.",
      c: "Trusting a tool's self-description over an actual authority's written policy is a pattern worth breaking early."
    },
    recoveryPath:
      "If {{name}} already used AI under the wrong assumption about the rule, the best next step is to ask the instructor directly, disclose what was done, and follow their guidance for how to proceed — most instructors respond constructively to a student who asks rather than hides.",
    conceptExplanation: {
      what: "AI-use rules can differ by professor, course, and assignment — a tool allowed for brainstorming in one class may be prohibited in another.",
      why: "Instructors design assignments to test specific skills, and AI use can undermine or support that goal very differently depending on the task.",
      how: "It may help to read the syllabus, assignment directions, and announcements, and ask directly when the rule is unclear.",
      cost: "Checking the specific rule for every assignment takes more effort than assuming one blanket rule.",
      risks: "Assuming a campus-wide conversation or another course's policy creates one universal permission can lead directly to a violation.",
      whoMayBenefit: "Any student juggling multiple courses with different AI-use expectations.",
      whoMayNotBenefit: "N/A — checking the specific rule protects every student regardless of how they plan to use AI.",
      misunderstandingRisk: "Believing one professor's or one campus conversation's guidance applies universally to every class.",
      verifyNote: "When the rule is unclear, ask the instructor directly before using the tool on that assignment."
    },
    realWorldExample:
      "A composite writing professor allowed AI feedback with disclosure, while a composite statistics professor in the same term prohibited generative AI entirely on a take-home exam — the same student had to track and follow both rules correctly.",
    knowledgeChecks: [
      { id: "kc1", question: "What controls AI use on a particular assignment?",
        type: "multiple_choice",
        options: ["The current syllabus, assignment directions, and instructor guidance", "What a friend's professor allows", "Whatever the AI tool suggests", "The most permissive rule the student has heard about"],
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
      "An assignment says \"independent work\" but doesn't mention AI directly. {{name}} has to decide which zone this situation actually falls into.",
    personalizationSlots: ["q10.context"],
    approvedStoryFragments: ["q10.context"],
    scenario: {
      prompt: "Where does \"use AI to write a prohibited take-home exam response\" belong in the green/yellow/red zone model?",
      type: "sort_safe_unsafe"
    },
    choices: [
      { id: "a", text: "Red zone",
        whyChosen: "The use directly violates a stated assignment rule.",
        possibleBenefit: "Correctly identifying this protects {{name}} from an academic integrity violation.",
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
      a: "{{name}} correctly avoids using AI on the prohibited exam.",
      b: "{{name}} risks using AI on an exam that explicitly prohibits it.",
      c: "{{name}} risks treating a clear prohibition as merely uncertain."
    },
    oneYearConsequences: {
      a: "{{name}} has a reliable framework for sorting AI uses correctly across courses.",
      b: "{{name}} risks an academic integrity case from misclassifying a clear rule.",
      c: "{{name}} risks the same, from underestimating how clear the original rule was."
    },
    longTermConsequences: {
      a: "The green/yellow/red framework becomes a fast, reliable habit for navigating any new course's AI policy.",
      b: "Misclassifying red-zone uses as acceptable risks escalating academic consequences if repeated.",
      c: "Treating clear rules as ambiguous can lead to the same violations as ignoring them outright."
    },
    recoveryPath:
      "If {{name}} is ever unsure which zone a use falls into, asking the instructor directly before proceeding always resolves the ambiguity — and if a mistake already happened, prompt disclosure is the strongest recovery step available.",
    conceptExplanation: {
      what: "Green-zone uses are clearly allowed (like practice questions or grammar feedback when permitted). Yellow-zone uses are unclear or substantial enough to ask first. Red-zone uses violate stated rules or misrepresent authorship.",
      why: "This model gives students a fast way to sort a specific AI use without needing to re-read the entire syllabus every time.",
      how: "It may help by anchoring the classification in the actual assignment rule rather than how convenient or common the use feels.",
      cost: "Requires actually knowing the assignment's specific rule to classify correctly.",
      risks: "Misclassifying a red-zone use as green or yellow can lead directly to an academic integrity violation.",
      whoMayBenefit: "Any student navigating multiple courses with different AI-use expectations.",
      whoMayNotBenefit: "N/A — the framework helps regardless of how a student plans to use AI.",
      misunderstandingRisk: "Assuming the zone is determined by how easy the tool makes the task, rather than by the actual rule.",
      verifyNote: "When in doubt between yellow and red, ask the instructor directly before proceeding."
    },
    realWorldExample:
      "A composite student template categorized 'brainstorming with disclosure' as green, 'drafting a full outline without asking' as yellow, and 'generating a prohibited exam answer' as red — using the actual assignment rule, not convenience, to decide each category.",
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
