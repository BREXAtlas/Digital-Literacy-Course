import { LESSON_CHARACTERS } from "./lesson-characters.js";

// Ram Ready Digital Literacy — AI Digital Literacy Quest, Quests 11-20
// Tier III (q11-q15): Integrity, Media, and Tool Judgment. Tier IV
// (q16-q20): Code, Automate, and Build Responsibly. Content is prewritten
// and reviewed; personalization only assembles approved fragments.

export const QUESTS_PART2 = [
  {
    id: "q11",
    primaryStudent: LESSON_CHARACTERS.q11,
    tier: 3,
    title: "Disclose or Cite AI Use When Required",
    subtitle: "Describe what tool was used and what it contributed",
    estimatedMinutes: 13,
    learningObjectives: [
      "Distinguish citation of AI output as a source from disclosure of AI's role in the process",
      "Follow required citation styles (APA, MLA) and instructor directions for AI use",
      "Write a specific, honest disclosure statement rather than a vague one",
      "Explain why disclosure does not excuse unverified or fabricated content"
    ],
    openingNarrative:
      "Lucia Ramirez, a Nursing major at Angelo State, is in a course that requires disclosure whenever AI supports an assignment and must write a useful, honest statement.",
    personalizationSlots: ["q11.context"],
    approvedStoryFragments: ["q11.context"],
    scenario: {
      prompt: "Which disclosure statement would be most informative and honest for Lucia Ramirez?",
      type: "review_an_ai_disclosure"
    },
    choices: [
      { id: "a", text: "\"I used ChatGPT to brainstorm search terms and create a study quiz; I located and verified all sources independently.\"",
        whyChosen: "The statement is specific about the tool, purpose, and Lucia Ramirez's verification work.",
        possibleBenefit: "Lucia Ramirez gives the instructor a clear, honest picture of exactly how AI contributed.",
        possibleCost: "Takes a little more effort to write than a vague sentence.",
        possibleRisk: "None — this is a strong, specific disclosure.",
        immediateEffect: { aiLiteracy: 5, integrity: 4 },
        futureEffect: "Specific disclosures build trust with instructors over the course of a semester.",
        whatCouldChangeThisOutcome: "Nothing changes this — specificity is what makes a disclosure useful.",
        sourceIds: ["apa-cite-ai", "mla-cite-ai"] },
      { id: "b", text: "\"AI helped.\"",
        whyChosen: "It technically satisfies a disclosure requirement with minimal effort.",
        possibleBenefit: "None — too vague to explain the actual contribution.",
        possibleCost: "Leaves the instructor unable to evaluate what role AI actually played.",
        possibleRisk: "A vague disclosure may not satisfy the actual requirement and can appear evasive.",
        immediateEffect: { aiLiteracy: 1, integrity: -1 },
        futureEffect: "Vague disclosures tend to invite follow-up questions or skepticism from instructors.",
        whatCouldChangeThisOutcome: "Adding the tool name, purpose, and verification steps would fix this." },
      { id: "c", text: "Skip the disclosure even though the professor requires one",
        whyChosen: "It might feel unnecessary if the AI use seemed minor.",
        possibleBenefit: "None — this violates a stated requirement.",
        possibleCost: "Directly violates the course's stated policy.",
        possibleRisk: "This is an academic integrity violation, regardless of how minor the AI use felt.",
        immediateEffect: { aiLiteracy: 1, integrity: -4 },
        futureEffect: "Skipping required disclosure, even once, creates real risk if the AI use is later discovered.",
        whatCouldChangeThisOutcome: "Following the assignment's explicit disclosure requirement would prevent this." }
    ],
    immediateConsequences: {
      a: "Lucia Ramirez submits a clear, specific, policy-compliant disclosure.",
      b: "Lucia Ramirez's vague disclosure may not satisfy the actual requirement.",
      c: "Lucia Ramirez risks a policy violation by omitting a required disclosure."
    },
    oneYearConsequences: {
      a: "Lucia Ramirez has a reliable habit of writing specific, honest disclosures across courses.",
      b: "Lucia Ramirez risks instructor follow-up questions about vague disclosures.",
      c: "Lucia Ramirez risks an integrity case if omitted disclosures are discovered."
    },
    longTermConsequences: {
      a: "Lucia Ramirez carries specific, honest disclosure forward as a professional skill for future AI-assisted work in any field.",
      b: "Chronically vague disclosures can erode instructor trust over a semester.",
      c: "A pattern of skipped disclosures increases cumulative academic integrity risk."
    },
    recoveryPath:
      "If Lucia Ramirez already submitted work without a required disclosure, providing it late with an honest explanation is far better than remaining silent; correcting the omission proactively is the strongest next step.",
    conceptExplanation: {
      what: "Citation and disclosure are not always the same. A citation may document a generated output as a source, while a disclosure explains how AI supported the work.",
      why: "Instructors and institutions need transparency about how a submitted work was produced, both for fairness and for accurate evaluation.",
      how: "It may help to follow the required style and instructor directions, naming the tool, purpose, and verification process specifically.",
      cost: "Writing a specific disclosure takes more thought and time than a vague one-line mention.",
      risks: "A vague disclosure may not satisfy an instructor's actual requirement and can look evasive even when unintentional.",
      whoMayBenefit: "Any student in a course requiring AI disclosure or citation.",
      whoMayNotBenefit: "N/A — disclosure requirements apply based on the course policy, not personal preference.",
      misunderstandingRisk: "Believing that a vague mention of AI use satisfies a specific disclosure requirement, or that disclosure alone excuses unverified content.",
      verifyNote: "Follow the required citation style (APA or MLA both publish current AI-citation guidance) and the instructor's specific directions."
    },
    realWorldExample:
      "Lucia Ramirez's methods note stated exactly which AI tool generated practice questions, while clarifying that all sources and final writing were completed and independently verified by Lucia — a model of a specific, defensible disclosure.",
    knowledgeChecks: [
      { id: "kc1", question: "Which disclosure is most informative?",
        type: "multiple_choice",
        options: ["\"I used ChatGPT to brainstorm search terms and create a study quiz; I located and verified all sources independently.\"", "\"AI helped.\"", "No disclosure even though the professor requires one", "\"I did not use any AI\" when AI was actually used"],
        correctAnswer: "\"I used ChatGPT to brainstorm search terms and create a study quiz; I located and verified all sources independently.\"",
        explanation: "The statement names the tool, its specific role, and Lucia Ramirez's verification work." }
    ],
    sourceIds: ["apa-cite-ai", "mla-cite-ai"],
    achievementId: "ai-disclosure-writer",
    unlocks: "q12",
    accessibilitySummary: "Text-based comparison of disclosure statements; no reliance on formatting to convey meaning.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q12",
    primaryStudent: LESSON_CHARACTERS.q12,
    tier: 3,
    title: "Protect Original Work and Authorship",
    subtitle: "Understand the line between assistance and misrepresentation",
    estimatedMinutes: 12,
    learningObjectives: [
      "Define authorship as responsibility for the ideas, evidence, wording, and final choices in submitted work",
      "Explain why the ability to explain submitted work is a test of authorship",
      "Recognize hidden AI use and disguised prohibited output as integrity violations",
      "Practice preserving drafts and prompt history as an authorship record"
    ],
    openingNarrative:
      "Ben Walker, an English major at Angelo State, is asked by a professor to explain a submitted argument in office hours, a routine check that reveals how the work was produced.",
    personalizationSlots: [],
    approvedStoryFragments: [],
    scenario: {
      prompt: "What best demonstrates Ben Walker's responsible authorship when a professor follows up on submitted work?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Ben Walker can explain the reasoning, verify the evidence, and describe how tools supported the process",
        whyChosen: "This reflects genuine understanding and appropriate, disclosed tool use.",
        possibleBenefit: "Ben Walker demonstrates real ownership of the submitted work under direct questioning.",
        possibleCost: "Requires actually understanding the material well enough to explain it.",
        possibleRisk: "Low — this is the goal state for any submission.",
        immediateEffect: { aiLiteracy: 5, integrity: 4 },
        futureEffect: "This ability to explain submitted work protects Ben Walker in any future integrity review.",
        whatCouldChangeThisOutcome: "Nothing changes this; Ben Walker is always in the safest position when Ben can explain the submitted work.",
        sourceIds: ["unesco-ai-education"] },
      { id: "b", text: "Ben Walker cannot explain any part of the submitted work",
        whyChosen: "This can happen when AI produced most of the reasoning without genuine review.",
        possibleBenefit: "None — this signals the work doesn't represent real understanding.",
        possibleCost: "Suggests the submitted work does not reflect Ben Walker's own thinking.",
        possibleRisk: "This is a strong signal of an authorship or integrity problem to the instructor.",
        immediateEffect: { aiLiteracy: 1, integrity: -4 },
        futureEffect: "This pattern tends to surface again on future oral or exam follow-ups.",
        whatCouldChangeThisOutcome: "Reviewing and personally understanding the work before submission would prevent this." },
      { id: "c", text: "Ben Walker intentionally hides prohibited AI use when asked directly",
        whyChosen: "It can feel safer in the moment to avoid admitting a rule violation.",
        possibleBenefit: "None — deception compounds the original integrity issue.",
        possibleCost: "Turns a possible policy violation into active deception, which is treated more seriously.",
        possibleRisk: "This significantly increases the severity of any resulting academic consequence.",
        immediateEffect: { aiLiteracy: 1, integrity: -5 },
        futureEffect: "Deception discovered later is treated more harshly than an honest disclosure would have been.",
        whatCouldChangeThisOutcome: "Honest disclosure, even after the fact, is always a better path than concealment." }
    ],
    immediateConsequences: {
      a: "Ben Walker demonstrates real ownership and passes the follow-up conversation confidently.",
      b: "Ben Walker's inability to explain the work raises a legitimate integrity concern.",
      c: "Ben Walker's deception, if uncovered, becomes a more serious issue than the original use."
    },
    oneYearConsequences: {
      a: "Ben Walker builds a track record of defensible, explainable work across courses.",
      b: "Ben Walker risks continued integrity concerns if the pattern repeats.",
      c: "Ben Walker risks escalated consequences from a pattern of concealment."
    },
    longTermConsequences: {
      a: "Ben Walker's ability to explain and defend the work is a durable asset in any academic or professional review.",
      b: "A pattern of non-defensible submissions can affect academic standing over time.",
      c: "Concealment discovered even once can seriously damage academic and professional trust."
    },
    recoveryPath:
      "If Ben Walker realizes that previously submitted work cannot be defended, proactively disclosing the problem to the instructor and offering to redo or explain the work honestly is stronger than waiting to be caught.",
    conceptExplanation: {
      what: "Authorship means Ben Walker takes responsibility for the ideas, evidence, wording, and final choices represented as Ben's work.",
      why: "Academic and professional systems rely on the assumption that submitted work reflects the submitter's actual understanding and effort.",
      how: "It may help to preserve drafts and decision trails so authorship can be demonstrated if questioned.",
      cost: "Genuinely understanding and being able to defend submitted work takes more effort than submitting unreviewed output.",
      risks: "Copying generated text, hiding tool use, or submitting work Ben Walker cannot explain may become academic misconduct when it violates course rules.",
      whoMayBenefit: "Any student who wants their academic record to reflect real, defensible work.",
      whoMayNotBenefit: "Authorship expectations apply regardless of Ben Walker's intended level of AI use.",
      misunderstandingRisk: "Believing that submitting a polished final product is the same as demonstrating authorship of it.",
      verifyNote: "Ben Walker should preserve drafts and prompt history when appropriate so Ben can show how the thinking developed."
    },
    realWorldExample:
      "Ben Walker's professor asked Ben to explain a submitted argument in office hours. Ben could not explain the terms used in the paper because the AI tool had created the reasoning, and the gap became obvious immediately.",
    knowledgeChecks: [
      { id: "kc1", question: "What best demonstrates responsible authorship?",
        type: "multiple_choice",
        options: ["Ben Walker can explain the reasoning, verify the evidence, and describe how tools supported the process", "Ben Walker cannot explain any part of the submitted work", "Ben Walker intentionally hides prohibited AI use", "Ben Walker submits the same essay to two different classes"],
        correctAnswer: "Ben Walker can explain the reasoning, verify the evidence, and describe how tools supported the process",
        explanation: "Responsibility for submitted work remains with Ben Walker, and being able to explain it demonstrates that responsibility." }
    ],
    sourceIds: ["unesco-ai-education"],
    achievementId: "original-work-defender",
    unlocks: "q13",
    accessibilitySummary: "Text-based scenario with explicit consequence text for each option; no reliance on tone alone.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q13",
    primaryStudent: LESSON_CHARACTERS.q13,
    tier: 3,
    title: "Understand Chatbots and Writing Assistants",
    subtitle: "Match the tool to the task and risk",
    estimatedMinutes: 12,
    learningObjectives: [
      "Distinguish general chatbots from focused writing assistants",
      "Recognize that tools differ in data retention, file access, and access to current information",
      "Check privacy and course rules before uploading content to any AI tool",
      "Identify when uploading someone else's work without permission is a privacy problem"
    ],
    openingNarrative:
      "Zuri King, a Marketing major at Angelo State, receives a confidential group-project draft from a classmate and must decide whether pasting it into a public AI tool is appropriate.",
    personalizationSlots: ["q13.context"],
    approvedStoryFragments: ["q13.context"],
    scenario: {
      prompt: "What should Zuri King do before uploading a document to a chatbot for feedback?",
      type: "identify_missing_information"
    },
    choices: [
      { id: "a", text: "Check permission, privacy level, and course rules before uploading anything",
        whyChosen: "Confirms the upload is both permitted and appropriately private.",
        possibleBenefit: "Zuri King protects classmates' privacy while following course policy.",
        possibleCost: "Takes a moment to check before proceeding.",
        possibleRisk: "Low — this is the responsible default.",
        immediateEffect: { aiLiteracy: 5, privacyAwareness: 4 },
        futureEffect: "Checking permission and privacy before any upload becomes a reliable habit.",
        whatCouldChangeThisOutcome: "Nothing changes this — it's the right step regardless of the tool.",
        sourceIds: ["nist-genai-profile"] },
      { id: "b", text: "Assume every document is safe to upload since the task is just feedback",
        whyChosen: "It can feel like a low-stakes, harmless use.",
        possibleBenefit: "None — some documents contain private or protected information regardless of the task's stakes.",
        possibleCost: "Risks exposing a classmate's private work without their consent.",
        possibleRisk: "This can be a real privacy violation, independent of how the AI tool itself is used.",
        immediateEffect: { aiLiteracy: 1, privacyAwareness: -3 },
        futureEffect: "This assumption tends to repeat until a clear privacy problem forces reconsideration.",
        whatCouldChangeThisOutcome: "Asking permission first would resolve this." },
      { id: "c", text: "Remove the author's name but ignore all other private details",
        whyChosen: "It might feel like a reasonable partial privacy step.",
        possibleBenefit: "Removes one identifying detail.",
        possibleCost: "Leaves other private or identifying details still exposed.",
        possibleRisk: "Partial anonymization can give a false sense of privacy protection.",
        immediateEffect: { aiLiteracy: 2, privacyAwareness: -1 },
        futureEffect: "Incomplete privacy review tends to miss details that matter just as much as a name.",
        whatCouldChangeThisOutcome: "A full review of the document's private content, not just the name, would fix this." }
    ],
    immediateConsequences: {
      a: "Zuri King confirms the upload is appropriate before sharing anything.",
      b: "Zuri King risks exposing a classmate's private work without consent.",
      c: "Zuri King partially protects privacy but leaves other details exposed."
    },
    oneYearConsequences: {
      a: "Zuri King has a reliable privacy-check habit before using any AI tool with others' work.",
      b: "Zuri King risks damaging trust with classmates if a privacy issue surfaces.",
      c: "Zuri King risks similar issues from incomplete privacy checks in the future."
    },
    longTermConsequences: {
      a: "Zuri King carries the habit of checking privacy and permission before any upload into future jobs involving AI tools.",
      b: "A pattern of uploading others' work without permission can damage collaborative trust over time.",
      c: "Partial privacy habits can create a false sense of security that eventually causes a real exposure."
    },
    recoveryPath:
      "If Zuri King already uploaded someone else's work without asking, the recovery step is to tell them directly, explain what tool was used and what data retention applies, and ask how they'd like to proceed — transparency repairs trust faster than silence.",
    conceptExplanation: {
      what: "General chatbots can explain, summarize, brainstorm, and transform text. Writing assistants may focus specifically on grammar, tone, or revision.",
      why: "Different tools store data differently and may have different access to current information, files, or the web.",
      how: "It may help to check the assignment rule, privacy level, and appropriateness of the tool before pasting any content in.",
      cost: "Checking privacy and permission adds a small step before using a convenient tool.",
      risks: "Uploading someone else's work without permission is a privacy problem independent of how well the AI performs.",
      whoMayBenefit: "Anyone collaborating on shared documents who wants to use AI tools responsibly.",
      whoMayNotBenefit: "N/A — this check protects everyone involved regardless of the specific tool.",
      misunderstandingRisk: "Assuming tool convenience or task simplicity overrides the need to check privacy and permission.",
      verifyNote: "Review each tool's stated data retention and privacy practices, which can change over time."
    },
    realWorldExample:
      "Zuri King pasted a classmate's confidential draft into a public AI tool without permission for what seemed like simple feedback — the task itself was low-risk, but the data-handling choice was not.",
    knowledgeChecks: [
      { id: "kc1", question: "What should happen before uploading a document to a chatbot?",
        type: "multiple_choice",
        options: ["Check permission, privacy, and course rules", "Assume every document is safe to upload", "Remove the author's name but ignore all other private details", "Upload it and delete it later if there's a problem"],
        correctAnswer: "Check permission, privacy, and course rules",
        explanation: "Tool convenience does not override the need to check permission and privacy first." }
    ],
    sourceIds: ["nist-genai-profile"],
    achievementId: "ai-tool-matchmaker",
    unlocks: "q14",
    accessibilitySummary: "Text-based privacy-decision scenario; no reliance on interface screenshots.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q14",
    primaryStudent: LESSON_CHARACTERS.q14,
    tier: 3,
    title: "Recognize Image, Audio, and Video AI Risks",
    subtitle: "Use creative tools without confusing synthetic media for evidence",
    estimatedMinutes: 13,
    learningObjectives: [
      "Recognize the creative and deceptive uses of AI-generated images, audio, and video",
      "Explain why realistic synthetic media is not proof of authenticity",
      "Practice verifying an alarming media claim through official channels",
      "Identify impersonation and consent issues in synthetic media use"
    ],
    openingNarrative:
      "Daniel Cho, a Social Work major at Angelo State, receives a realistic AI-cloned voice message announcing an urgent campus closure and sees the recording spread before anyone verifies it.",
    personalizationSlots: ["q14.context"],
    approvedStoryFragments: ["q14.context"],
    scenario: {
      prompt: "How should Daniel Cho verify an alarming AI-like campus announcement before acting on it?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Check official university communication channels directly",
        whyChosen: "Verifies the claim through a source with actual authority over the announcement.",
        possibleBenefit: "Daniel Cho confirms or debunks the claim quickly and reliably.",
        possibleCost: "Takes a few minutes compared to immediately sharing the message.",
        possibleRisk: "Low — this is the responsible verification step.",
        immediateEffect: { aiLiteracy: 5, sourceJudgment: 4 },
        futureEffect: "Verifying through official channels becomes a reliable habit for any alarming claim.",
        whatCouldChangeThisOutcome: "Nothing changes this — official-channel verification is always the safe first step.",
        sourceIds: ["nist-genai-profile", "cisa-phishing"] },
      { id: "b", text: "Share it immediately because the voice sounds completely real",
        whyChosen: "Realistic sound quality can feel like proof by itself.",
        possibleBenefit: "None — realistic sound is not evidence of authenticity.",
        possibleCost: "Risks spreading misinformation quickly across campus.",
        possibleRisk: "Contributes to panic or confusion if the message is fabricated.",
        immediateEffect: { aiLiteracy: 1, sourceJudgment: -3 },
        futureEffect: "Sharing before verifying tends to amplify the harm of future synthetic media hoaxes too.",
        whatCouldChangeThisOutcome: "Checking an official channel before sharing would prevent this." },
      { id: "c", text: "Assume every video or audio message is authentic unless proven otherwise",
        whyChosen: "It can feel easier to default to trust.",
        possibleBenefit: "None — synthetic media can be highly convincing and should not get automatic trust.",
        possibleCost: "Leaves Daniel Cho vulnerable to any convincing fabrication.",
        possibleRisk: "This default makes deception significantly easier to succeed.",
        immediateEffect: { aiLiteracy: 1, sourceJudgment: -2 },
        futureEffect: "This default tends to make each future synthetic-media hoax more effective, not less.",
        whatCouldChangeThisOutcome: "Defaulting to verification, not trust, for alarming or unusual claims would correct this." }
    ],
    immediateConsequences: {
      a: "Daniel Cho confirms the claim's status before reacting or sharing.",
      b: "Daniel Cho may contribute to spreading a fabricated or misleading claim.",
      c: "Daniel Cho remains vulnerable to convincing fabrications by default."
    },
    oneYearConsequences: {
      a: "Daniel Cho has a reliable verification habit for alarming digital claims.",
      b: "Daniel Cho risks having contributed to real confusion or harm from unverified sharing.",
      c: "Daniel Cho risks continued vulnerability to synthetic media deception."
    },
    longTermConsequences: {
      a: "Daniel Cho uses official-channel verification as a durable defense against increasingly realistic synthetic media.",
      b: "A pattern of sharing before verifying can damage credibility and contribute to real-world harm.",
      c: "Default trust in unverified media becomes riskier as synthetic media technology improves."
    },
    recoveryPath:
      "If Daniel Cho already shared something before verifying, the fix is straightforward: check the official source, and if the claim was false, share a correction just as visibly as the original message — most of the harm from misinformation comes from it going uncorrected.",
    conceptExplanation: {
      what: "AI can create realistic images, cloned voices, and edited video. These tools support real creativity but also make deception easier.",
      why: "As synthetic media becomes more realistic, the gap between 'looks real' and 'is real' becomes more dangerous to rely on.",
      how: "It may help to label synthetic media when context requires it, respect rights and consent, and verify anything used as evidence.",
      cost: "Verification takes time that sharing immediately does not.",
      risks: "Realistic AI-generated audio or video can be used to impersonate real people or fabricate events convincingly.",
      whoMayBenefit: "Anyone consuming or sharing digital media benefits from a verification-first habit.",
      whoMayNotBenefit: "N/A — verification protects everyone regardless of how media is typically consumed.",
      misunderstandingRisk: "Treating realistic sound or image quality as proof of authenticity.",
      verifyNote: "When media is used as evidence, verify its origin, context, and whether it has been manipulated through an independent, official source."
    },
    realWorldExample:
      "Daniel Cho encounters a realistic cloned voice announcing a campus closure. Daniel sees classmates share it before checking the official university communication channel, contributing to confusion that takes hours to correct.",
    knowledgeChecks: [
      { id: "kc1", question: "How should Daniel Cho verify an alarming AI-like campus announcement?",
        type: "multiple_choice",
        options: ["Check official university communication channels", "Share it first because the voice sounds real", "Assume every video is authentic", "Wait for someone else to check"],
        correctAnswer: "Check official university communication channels",
        explanation: "Verification through a source with actual authority is the reliable check, not the media's realism." }
    ],
    sourceIds: ["nist-genai-profile", "cisa-phishing"],
    achievementId: "synthetic-media-verifier",
    unlocks: "q15",
    accessibilitySummary: "Text-based verification scenario; no reliance on actual audio or video playback.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q15",
    primaryStudent: LESSON_CHARACTERS.q15,
    tier: 3,
    title: "Use Coding and Data Assistants Responsibly",
    subtitle: "Review, test, and understand generated code or analysis",
    estimatedMinutes: 14,
    learningObjectives: [
      "Recognize that generated code may be insecure, incorrect, inefficient, or based on mismatched assumptions",
      "Practice reviewing and testing AI-generated code before use",
      "Identify credential and private-data exposure risks in coding assistant use",
      "Explain why passing one test does not prove code is safe or correct"
    ],
    openingNarrative:
      "Keira Shah, a Civil Engineering major at Angelo State, asks a coding assistant to generate a login form for a class project; one successful demo does not reveal every security or logic problem.",
    personalizationSlots: ["q15.context"],
    approvedStoryFragments: ["q15.context"],
    scenario: {
      prompt: "What is Keira Shah's responsible next step after a coding assistant generates a new feature?",
      type: "review_code"
    },
    choices: [
      { id: "a", text: "Review the code, test it against expected and unexpected cases, and understand it before use",
        whyChosen: "Confirms the code is both correct and secure before it goes into a real project.",
        possibleBenefit: "Keira Shah catches insecure patterns, like storing passwords in plain text, before they cause harm.",
        possibleCost: "Takes real time and some coding knowledge to review properly.",
        possibleRisk: "Low — this is the responsible standard practice.",
        immediateEffect: { aiLiteracy: 5, codeReviewReadiness: 5 },
        futureEffect: "This review habit prevents security and reliability problems throughout a coding career.",
        whatCouldChangeThisOutcome: "Nothing changes this — review and testing are always necessary regardless of how confident the tool sounds.",
        sourceIds: ["github-copilot-responsible-use", "owasp-llm-top10"] },
      { id: "b", text: "Deploy the code immediately because it compiled and ran once",
        whyChosen: "It can feel like a successful run is proof the code works.",
        possibleBenefit: "None — passing one test does not prove security or general correctness.",
        possibleCost: "Risks deploying insecure or broken code without knowing it.",
        possibleRisk: "A working demo can still contain serious security flaws, like plain-text password storage.",
        immediateEffect: { aiLiteracy: 1, codeReviewReadiness: -2 },
        futureEffect: "This pattern tends to produce serious problems once real users or real data are involved.",
        whatCouldChangeThisOutcome: "Adding a proper review and test pass would catch issues before deployment." },
      { id: "c", text: "Paste a private API key into the prompt to help the assistant test the feature",
        whyChosen: "It might feel like the fastest way to get realistic testing results.",
        possibleBenefit: "None — this exposes a credential that should remain private.",
        possibleCost: "The key may be logged, stored, or exposed by the tool or platform.",
        possibleRisk: "A leaked API key can allow unauthorized access to real systems or accounts.",
        immediateEffect: { aiLiteracy: 1, codeReviewReadiness: -3 },
        futureEffect: "Exposed credentials can cause real security incidents well after the original prompt.",
        whatCouldChangeThisOutcome: "Using a placeholder or test credential instead of a real one would prevent this." }
    ],
    immediateConsequences: {
      a: "Keira Shah catches a security or logic problem before it becomes a real issue.",
      b: "Keira Shah risks deploying code with an undiscovered security flaw.",
      c: "Keira Shah risks having exposed a real credential unnecessarily."
    },
    oneYearConsequences: {
      a: "Keira Shah builds a reliable code-review habit that improves as skills grow.",
      b: "Keira Shah risks a security incident if the flaw is later discovered or exploited.",
      c: "Keira Shah risks unauthorized use of the exposed credential."
    },
    longTermConsequences: {
      a: "Keira Shah carries careful review and testing of generated code into any future coding role.",
      b: "Deploying unreviewed generated code repeatedly increases the odds of a serious security incident.",
      c: "A pattern of exposing credentials in prompts creates cumulative security risk across projects."
    },
    recoveryPath:
      "If Keira Shah already deployed unreviewed code or exposed a credential, the fix is immediate: rotate any exposed credentials right away, then review and test the code properly before it's used with any real data.",
    conceptExplanation: {
      what: "Coding assistants can suggest functions, explain errors, and generate examples. Data tools can classify, summarize, and visualize information.",
      why: "These tools speed up development, but generated code may be insecure, incorrect, inefficient, or based on assumptions that don't match the actual project.",
      how: "It may help to review, test, and understand generated code before relying on it, just as with any other code source.",
      cost: "Proper review and testing takes real time, especially for a beginner still learning to read code critically.",
      risks: "Generated code that runs successfully once has not been proven safe, secure, or correct for all cases.",
      whoMayBenefit: "Any student or developer using AI to speed up coding tasks, as long as review remains part of the process.",
      whoMayNotBenefit: "Someone who deploys generated code without review loses the safety net that makes the speed worthwhile.",
      misunderstandingRisk: "Believing that a successful demo run is equivalent to a full security and correctness review.",
      verifyNote: "Test against both expected and unexpected inputs, and never place real credentials directly into a prompt."
    },
    realWorldExample:
      "Keira Shah reviews an AI-generated login form that runs successfully in a class demo but stores passwords in plain text, a serious security flaw that one passing demo cannot reveal or make safe.",
    knowledgeChecks: [
      { id: "kc1", question: "What is the responsible next step after AI generates code?",
        type: "multiple_choice",
        options: ["Review, test, and understand it before use", "Deploy immediately because it compiled once", "Paste private API keys into the prompt", "Trust it because the AI explained it clearly"],
        correctAnswer: "Review, test, and understand it before use",
        explanation: "Generated code is a draft, not automatic approval — the developer remains responsible for verifying it." }
    ],
    sourceIds: ["github-copilot-responsible-use", "owasp-llm-top10"],
    achievementId: "code-review-builder",
    unlocks: "q16",
    accessibilitySummary: "Text-based code-review scenario; code concepts described in plain language, not screenshots.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q16",
    primaryStudent: LESSON_CHARACTERS.q16,
    tier: 4,
    title: "Understand AI Agents and Automation",
    subtitle: "See how goals, tools, memory, and permissions change risk",
    estimatedMinutes: 14,
    learningObjectives: [
      "Define an AI agent as a system that plans steps and uses tools to pursue a goal",
      "Explain why tool access increases both capability and risk",
      "Identify why agents need narrow permissions, logs, limits, and human approval",
      "Practice designing a minimal, safe permission set for a new agent"
    ],
    openingNarrative:
      "Xavier Green, a Psychology major at Angelo State, reads about an email-sorting agent that can permanently delete messages, turning one classification mistake into possible irreversible loss.",
    personalizationSlots: ["q16.context"],
    approvedStoryFragments: ["q16.context"],
    scenario: {
      prompt: "Which permission design is safest for Xavier Green's new, unproven email-sorting agent?",
      type: "limit_agent_permissions"
    },
    choices: [
      { id: "a", text: "Read and label test messages only, with human approval required before any deletion",
        whyChosen: "Matches permissions and approval requirements to the agent's unproven, experimental stage.",
        possibleBenefit: "Xavier Green limits the damage any single mistake can cause while the agent is still being evaluated.",
        possibleCost: "Slower than giving the agent full autonomy from the start.",
        possibleRisk: "Low — this is the responsible default for a new agent.",
        immediateEffect: { aiLiteracy: 5, agentSafety: 5 },
        futureEffect: "Starting narrow and expanding permissions only after proven reliability is a durable safety practice.",
        whatCouldChangeThisOutcome: "Nothing changes this — narrow permissions are always the safe starting point for new automation.",
        sourceIds: ["nist-ai-rmf", "owasp-llm-top10"] },
      { id: "b", text: "Grant permanent deletion rights to the entire inbox by default",
        whyChosen: "It can feel efficient to give the agent full autonomy immediately.",
        possibleBenefit: "None — the permission is far broader than the task needs.",
        possibleCost: "A single classification mistake could cause irreversible data loss.",
        possibleRisk: "This is a severe, avoidable risk for an unproven, experimental system.",
        immediateEffect: { aiLiteracy: 1, agentSafety: -4 },
        futureEffect: "Overpermissioned agents tend to cause the exact irreversible mistakes this design invites.",
        whatCouldChangeThisOutcome: "Scoping permissions to the minimum needed for the task would prevent this." },
      { id: "c", text: "Grant access to every personal account so the agent can 'see everything' and work more broadly",
        whyChosen: "It might seem like broader access would make the agent more useful.",
        possibleBenefit: "None — broad access unrelated to the specific task adds risk without adding value.",
        possibleCost: "Massively increases the damage potential of any single error or misuse.",
        possibleRisk: "This violates the basic principle of limiting tools and data to the specific task.",
        immediateEffect: { aiLiteracy: 1, agentSafety: -5 },
        futureEffect: "Unscoped access tends to turn small mistakes into large-scale incidents.",
        whatCouldChangeThisOutcome: "Limiting access to only what the specific task requires would prevent this." }
    ],
    immediateConsequences: {
      a: "Xavier Green's agent operates safely within a limited, reversible scope.",
      b: "Xavier Green's agent could cause irreversible data loss from a single mistake.",
      c: "Xavier Green's agent has far more access than the task requires, multiplying potential damage."
    },
    oneYearConsequences: {
      a: "Xavier Green has a reliable framework for scoping any new automation project safely.",
      b: "Xavier Green risks having experienced a costly, irreversible agent mistake.",
      c: "Xavier Green risks a larger-scale incident from unnecessarily broad access."
    },
    longTermConsequences: {
      a: "Xavier Green carries the practice of starting narrow and expanding only with proven reliability into future automation work.",
      b: "Overpermissioned automation is a recurring cause of real-world data loss and security incidents.",
      c: "Unscoped access is one of the most common and preventable causes of automation-related harm."
    },
    recoveryPath:
      "If an agent already has excessive permissions, Xavier Green can revoke and rescope them immediately — reducing an agent's access after the fact is always possible and is a normal part of responsible agent design, not a failure.",
    conceptExplanation: {
      what: "An AI agent can plan steps and use tools such as search, email, files, code, or calendars to pursue a goal, rather than just producing a single text response.",
      why: "Tool access makes an agent more capable, but mistakes can now change real systems instead of only producing text a human reviews before acting.",
      how: "It may help to grant narrow permissions, keep logs, set limits, and require human approval before high-impact actions.",
      cost: "Narrow permissions and approval steps slow the agent down compared to full autonomy.",
      risks: "An agent with broad, unreviewed permissions can cause large-scale, sometimes irreversible harm from a single mistake.",
      whoMayBenefit: "Anyone building or using an agent-based automation tool for a real task.",
      whoMayNotBenefit: "N/A — permission scoping protects any user of agent-based tools regardless of the specific task.",
      misunderstandingRisk: "Assuming that giving an agent more access automatically makes it more useful, without weighing the added risk.",
      verifyNote: "Agent permission and safety practices are an active area of research; review current guidance (like NIST's AI Risk Management Framework) periodically."
    },
    realWorldExample:
      "Xavier Green studies an email-sorting agent that received full deletion rights across an inbox; one testing misclassification permanently deleted a folder of coursework-related emails that could not be recovered.",
    knowledgeChecks: [
      { id: "kc1", question: "Which permission design is safest for a new email-sorting agent?",
        type: "multiple_choice",
        options: ["Read and label test messages, with human approval before deletion", "Permanent deletion of the entire inbox", "Access to every personal account", "Full autonomy with no logging"],
        correctAnswer: "Read and label test messages, with human approval before deletion",
        explanation: "Permissions and approval requirements should match the agent's unproven, experimental stage." }
    ],
    sourceIds: ["nist-ai-rmf", "owasp-llm-top10"],
    achievementId: "agent-systems-decoder",
    unlocks: "q17",
    accessibilitySummary: "Text-based permission-design scenario; no reliance on diagrams to convey agent architecture.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q17",
    primaryStudent: LESSON_CHARACTERS.q17,
    tier: 4,
    title: "Turn One Prompt Into a Repeatable Workflow",
    subtitle: "Break a task into stages with checks",
    estimatedMinutes: 13,
    learningObjectives: [
      "Break a complex task into staged steps with defined inputs and outputs",
      "Explain why one giant prompt hides errors and reduces control",
      "Add a verification checkpoint at each workflow stage",
      "Practice designing a workflow for a real academic or creative task"
    ],
    openingNarrative:
      "Amara Lewis, a Computer Science major at Angelo State, asks AI to research, cite, write, and format an entire paper in one prompt, making errors nearly impossible to trace.",
    personalizationSlots: ["q17.context"],
    approvedStoryFragments: ["q17.context"],
    scenario: {
      prompt: "Which workflow design is strongest for Amara Lewis's research-based writing assignment?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Read instructions → find real sources → outline → draft → verify → disclose use",
        whyChosen: "Each stage has a clear purpose and a checkpoint to catch errors before moving forward.",
        possibleBenefit: "Amara Lewis catches errors at the stage where they occur instead of finding them buried in a finished product.",
        possibleCost: "Takes longer than a single prompt that claims to do everything at once.",
        possibleRisk: "Low — this staged approach is the safer, more controllable design.",
        immediateEffect: { aiLiteracy: 5, professionalConfidence: 3 },
        futureEffect: "A staged workflow habit transfers to any complex task, academic or professional.",
        whatCouldChangeThisOutcome: "Nothing changes this — staged workflows consistently outperform single giant prompts for complex tasks.",
        sourceIds: ["nist-ai-rmf", "unesco-ai-education"] },
      { id: "b", text: "One prompt: \"do everything perfectly\"",
        whyChosen: "It feels like the fastest possible approach.",
        possibleBenefit: "None — a single output hides errors and weakens control over the process.",
        possibleCost: "Makes it very difficult to trace where a specific error came from.",
        possibleRisk: "Fabricated sources, weak arguments, or formatting errors can all hide inside one unreviewed block of output.",
        immediateEffect: { aiLiteracy: 1 },
        futureEffect: "This pattern tends to produce work with untraceable errors that surface at grading time.",
        whatCouldChangeThisOutcome: "Breaking the task into stages with checkpoints would fix this." },
      { id: "c", text: "Submit the first response without any review",
        whyChosen: "It can feel efficient to trust the first output.",
        possibleBenefit: "None — human review is essential at any stage of AI-assisted work.",
        possibleCost: "Any errors, fabrications, or misalignment with instructions go uncaught.",
        possibleRisk: "This significantly increases the risk of submitting flawed or non-compliant work.",
        immediateEffect: { aiLiteracy: 1 },
        futureEffect: "Skipping review at any stage tends to produce recurring, avoidable mistakes.",
        whatCouldChangeThisOutcome: "Adding a review checkpoint, even a brief one, would catch most of these issues." }
    ],
    immediateConsequences: {
      a: "Amara Lewis catches issues at each stage before they compound into a bigger problem.",
      b: "Amara Lewis gets a finished-looking product with untraceable errors buried inside.",
      c: "Amara Lewis risks submitting work with uncaught errors or instruction mismatches."
    },
    oneYearConsequences: {
      a: "Amara Lewis has a reusable workflow template for any complex, multi-step assignment.",
      b: "Amara Lewis risks repeated grading surprises from untraceable errors.",
      c: "Amara Lewis risks a pattern of avoidable mistakes from skipped review."
    },
    longTermConsequences: {
      a: "Amara Lewis carries staged, checkpointed workflows into future complex academic and professional projects.",
      b: "Reliance on single giant prompts tends to produce increasingly unreliable results as task complexity grows.",
      c: "A habit of skipping review compounds risk across every future AI-assisted task."
    },
    recoveryPath:
      "If Amara Lewis already used a single giant prompt and submitted the result, the recovery step is to go back and verify each part — sources, argument, formatting — individually, treating the already-generated text as a first draft rather than a final product.",
    conceptExplanation: {
      what: "A workflow connects several steps: understand the assignment, gather sources, create an outline, draft, verify, and review.",
      why: "AI can support selected stages, but each stage having a purpose, input rule, and quality check catches errors early and keeps the process controllable.",
      how: "It may help to define what AI may do at each specific stage, rather than delegating the entire task to one prompt.",
      cost: "A staged workflow takes more time and more individual prompts than a single request.",
      risks: "Repeatable workflows are stronger than hoping one giant prompt produces a finished, correct answer on the first try.",
      whoMayBenefit: "Anyone tackling a complex, multi-step task where errors are costly if they go unnoticed.",
      whoMayNotBenefit: "For a very simple, low-stakes task, a full staged workflow may be more process than the task warrants.",
      misunderstandingRisk: "Believing that a single, well-written prompt can safely replace an entire multi-step process.",
      verifyNote: "Add a verification checkpoint before moving from one stage to the next, not just at the very end."
    },
    realWorldExample:
      "Amara Lewis asked AI to research, cite, write, and format an entire paper in one prompt. Errors were nearly impossible to trace because there were no checkpoints between the stages — a fabricated source and a formatting mismatch were both buried in the final output.",
    knowledgeChecks: [
      { id: "kc1", question: "Which workflow is strongest?",
        type: "multiple_choice",
        options: ["Read instructions → find real sources → outline → draft → verify → disclose use", "One prompt: do everything perfectly", "Submit the first response without review", "Ask AI to check its own final output for errors"],
        correctAnswer: "Read instructions → find real sources → outline → draft → verify → disclose use",
        explanation: "Each stage has a clear purpose and a check, which catches errors before they compound." }
    ],
    sourceIds: ["nist-ai-rmf", "unesco-ai-education"],
    achievementId: "workflow-architect",
    unlocks: "q18",
    accessibilitySummary: "Text-based workflow comparison; staged steps presented as a numbered list, not a visual diagram.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q18",
    primaryStudent: LESSON_CHARACTERS.q18,
    tier: 4,
    title: "Vibe Code Without Flying Blind",
    subtitle: "Use natural-language coding while keeping testing and ownership",
    estimatedMinutes: 13,
    learningObjectives: [
      "Define vibe coding as describing a feature in natural language and letting AI generate or modify code quickly",
      "Explain how speed can hide security problems and broken assumptions",
      "Practice using version control, small changes, and testing discipline",
      "Recognize the value of asking the model to explain what changed"
    ],
    openingNarrative:
      "Lucas Evans, a Biology major at Angelo State, finds that a prototype broke after an AI-generated batch of files replaced working code, leaving no clear record of which change caused the failure.",
    personalizationSlots: ["q18.context"],
    approvedStoryFragments: ["q18.context"],
    scenario: {
      prompt: "What makes Lucas Evans's vibe-coding process safer when using AI to generate or modify code quickly?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Make small changes, use version control, and require testing and code review",
        whyChosen: "Keeps fast generation paired with the engineering discipline that catches problems early.",
        possibleBenefit: "Lucas Evans can trace exactly which change caused a new bug.",
        possibleCost: "Slower than replacing large portions of code at once.",
        possibleRisk: "Low — this is the responsible standard for AI-assisted coding.",
        immediateEffect: { aiLiteracy: 5, codeReviewReadiness: 5 },
        futureEffect: "Small, tested, version-controlled changes remain a foundational habit through any future coding project.",
        whatCouldChangeThisOutcome: "Nothing changes this — the discipline scales well as projects grow more complex.",
        sourceIds: ["github-copilot-responsible-use"] },
      { id: "b", text: "Replace the whole project after every prompt to keep things simple",
        whyChosen: "It might feel simpler to just regenerate everything each time.",
        possibleBenefit: "None — large, uncontrolled changes are extremely hard to debug.",
        possibleCost: "Makes it nearly impossible to identify which change broke a working feature.",
        possibleRisk: "A single AI-introduced bug can now be hidden anywhere across the entire replaced codebase.",
        immediateEffect: { aiLiteracy: 1, codeReviewReadiness: -3 },
        futureEffect: "This pattern tends to make debugging progressively harder as the project grows.",
        whatCouldChangeThisOutcome: "Switching to small, incremental changes would make future debugging possible." },
      { id: "c", text: "Publish secrets like API keys directly in the code to save setup time",
        whyChosen: "It might seem like a quick way to get a prototype running.",
        possibleBenefit: "None — this exposes credentials that should remain private.",
        possibleCost: "Published secrets can be discovered and misused by anyone with access to the code.",
        possibleRisk: "This is a real security exposure, especially if the code is ever shared or made public.",
        immediateEffect: { aiLiteracy: 1, codeReviewReadiness: -4 },
        futureEffect: "Exposed credentials in code history can remain a risk even after being 'removed' later.",
        whatCouldChangeThisOutcome: "Using environment variables or a secrets manager instead would prevent this." }
    ],
    immediateConsequences: {
      a: "Lucas Evans can trace and fix issues quickly because changes are small and tracked.",
      b: "Lucas Evans struggles to identify which change broke a working feature.",
      c: "Lucas Evans risks having exposed credentials directly in the codebase."
    },
    oneYearConsequences: {
      a: "Lucas Evans has a scalable, disciplined approach to fast AI-assisted coding.",
      b: "Lucas Evans risks growing technical debt from untraceable, unreviewed changes.",
      c: "Lucas Evans risks a credential-related security incident."
    },
    longTermConsequences: {
      a: "Lucas Evans carries version control, small changes, and testing discipline forward as professional coding skills that scale with project complexity.",
      b: "Large uncontrolled changes tend to make projects progressively harder to maintain and debug.",
      c: "A pattern of exposing secrets in code creates cumulative security risk across every project it touches."
    },
    recoveryPath:
      "If Lucas Evans's prototype broke from an untracked, large AI-generated change, version control history (if it exists) can help isolate the change; if it doesn't exist yet, the recovery step is to start using it immediately going forward, along with rotating any credentials that may have been exposed.",
    conceptExplanation: {
      what: "Vibe coding means describing a feature in natural language and letting AI generate or modify code quickly, often without deeply reviewing each change.",
      why: "This can help beginners prototype quickly, but the same speed can hide security problems, broken assumptions, and code nobody fully understands.",
      how: "It may help to use version control, test small changes individually, protect secrets, and ask the model to explain what changed.",
      cost: "Disciplined, incremental development is slower than large, unreviewed batch changes.",
      risks: "Fast, uncontrolled generation can introduce security flaws and untraceable bugs into a project.",
      whoMayBenefit: "Beginner and experienced coders alike who want to prototype quickly without losing control of their codebase.",
      whoMayNotBenefit: "Someone who skips version control and testing entirely loses the ability to debug problems as they arise.",
      misunderstandingRisk: "Believing that a working demo proves the entire generated codebase is safe and correct.",
      verifyNote: "Ask the AI tool to explain exactly what changed with each modification, and verify that explanation against the actual code."
    },
    realWorldExample:
      "Lucas Evans's prototype worked fine until a new feature was added. Nobody could identify which AI-generated change broke authentication, because the AI had replaced every file in the project at once with no version control checkpoints in between.",
    knowledgeChecks: [
      { id: "kc1", question: "What makes vibe coding safer?",
        type: "multiple_choice",
        options: ["Small changes, version control, testing and code review", "Replacing the whole project after every prompt", "Publishing secrets in the code", "Skipping tests to move faster"],
        correctAnswer: "Small changes, version control, testing and code review",
        explanation: "Fast generation still needs engineering discipline to remain safe and debuggable." }
    ],
    sourceIds: ["github-copilot-responsible-use"],
    achievementId: "vibe-coding-tester",
    unlocks: "q19",
    accessibilitySummary: "Text-based coding-workflow scenario; no reliance on a live code editor or screenshots.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q19",
    primaryStudent: LESSON_CHARACTERS.q19,
    tier: 4,
    title: "Design an Agent With Boundaries",
    subtitle: "Define goal, tools, memory, permissions, and approval",
    estimatedMinutes: 14,
    learningObjectives: [
      "Write a narrow, specific goal for an AI agent",
      "Limit an agent's tools, memory, and permissions to only what the goal requires",
      "Identify actions that should require human approval before execution",
      "Include evaluation for normal tasks, edge cases, and recovery from failure"
    ],
    openingNarrative:
      "Layla Cooper, a Criminal Justice major at Angelo State, is designing a scholarship-search agent and must decide exactly what it should and should not do independently.",
    personalizationSlots: ["q19.context"],
    approvedStoryFragments: ["q19.context"],
    scenario: {
      prompt: "Which action should require Layla Cooper's approval in a scholarship-search agent design?",
      type: "choose_human_approval_point"
    },
    choices: [
      { id: "a", text: "Submitting an application with Layla Cooper's personal information",
        whyChosen: "This action is external, consequential, and involves private data being sent to a third party.",
        possibleBenefit: "Layla Cooper prevents an agent mistake from causing an incorrect or unwanted submission using real personal data.",
        possibleCost: "Adds a manual approval step that slows down the process slightly.",
        possibleRisk: "Low — requiring approval here is the responsible design choice.",
        immediateEffect: { aiLiteracy: 5, agentSafety: 5 },
        futureEffect: "Requiring approval for external, consequential, privacy-sensitive actions is a durable agent-design principle.",
        whatCouldChangeThisOutcome: "Nothing changes this — external submissions with personal data always warrant human approval.",
        sourceIds: ["nist-ai-rmf", "owasp-llm-top10"] },
      { id: "b", text: "Drafting a private checklist of scholarship deadlines for Layla Cooper to review",
        whyChosen: "This is a low-impact, internal, easily reversible action.",
        possibleBenefit: "Efficient automation of a low-risk organizational task.",
        possibleCost: "Minimal; Layla Cooper still reviews the checklist before acting.",
        possibleRisk: "Very low, since nothing external happens without further review.",
        immediateEffect: { aiLiteracy: 3, agentSafety: 2 },
        futureEffect: "Correctly identifying low-impact automation helps the agent design stay efficient where it's safe to do so.",
        whatCouldChangeThisOutcome: "This stays low-risk as long as the checklist remains internal and reviewed." },
      { id: "c", text: "Sorting publicly available scholarship deadlines into a shared calendar",
        whyChosen: "This is a low-impact, reversible, non-private task.",
        possibleBenefit: "Efficient automation with minimal risk.",
        possibleCost: "Minimal.",
        possibleRisk: "Very low, since the data is public and the action is easily reversible.",
        immediateEffect: { aiLiteracy: 2, agentSafety: 1 },
        futureEffect: "Correctly sorting truly low-risk tasks helps focus approval requirements where they matter most.",
        whatCouldChangeThisOutcome: "This remains low-risk as long as the data stays public and the action stays reversible." }
    ],
    immediateConsequences: {
      a: "Layla Cooper's agent design requires human sign-off before any real submission happens.",
      b: "Layla Cooper's agent drafts helpful internal material without requiring heavy oversight.",
      c: "Layla Cooper's agent handles a low-risk organizational task efficiently."
    },
    oneYearConsequences: {
      a: "Layla Cooper has a reliable framework for placing approval points at the right stage of any agent design.",
      b: "Layla Cooper continues to use low-risk automation efficiently.",
      c: "Layla Cooper continues to use low-risk automation efficiently."
    },
    longTermConsequences: {
      a: "Layla Cooper carries the skill of matching approval requirements to real-world consequence into future agent-design work.",
      b: "Comfort with appropriately scoped, low-risk automation supports efficient everyday use of agent tools.",
      c: "Recognizing genuinely low-risk tasks prevents wasted approval overhead on things that don't need it."
    },
    recoveryPath:
      "If an agent design already lacks an approval point for an external, consequential action, Layla Cooper can add it at any stage of development — a missing approval gate is a design fix, not a project failure, and is far easier to add before deployment than after an incident.",
    conceptExplanation: {
      what: "Designing an agent with boundaries means starting with one narrow goal, then listing the exact tools and data needed to achieve it.",
      why: "Memory should store only what is necessary, permissions should be limited, and high-impact actions should pause for approval, because tool access turns mistakes into real-world consequences.",
      how: "It may help to include evaluation for normal tasks, edge cases, malicious instructions, and recovery from failure before deployment.",
      cost: "Narrow scoping and approval gates take more design time than an unrestricted agent.",
      risks: "An agent without approval gates on consequential actions can take real, sometimes irreversible actions from a single error.",
      whoMayBenefit: "Anyone designing or deploying an agent-based tool for a real task.",
      whoMayNotBenefit: "N/A — boundary design protects the agent's users and any third parties it interacts with.",
      misunderstandingRisk: "Assuming an agent that works correctly in testing will behave safely with real, unreviewed permissions in production.",
      verifyNote: "Agent-safety practices are an evolving field; review current frameworks like NIST's AI RMF and OWASP's LLM guidance periodically."
    },
    realWorldExample:
      "Layla Cooper's student-designed scholarship agent searches approved sites and drafts a checklist but requires Layla's manual approval before submitting an application or sharing private records.",
    knowledgeChecks: [
      { id: "kc1", question: "Which action should require human approval in a scholarship agent?",
        type: "multiple_choice",
        options: ["Submitting an application with personal information", "Drafting a private checklist", "Sorting public deadlines", "Suggesting scholarship search terms"],
        correctAnswer: "Submitting an application with personal information",
        explanation: "The action is external, consequential, and privacy-sensitive, which requires human approval." }
    ],
    sourceIds: ["nist-ai-rmf", "owasp-llm-top10"],
    achievementId: "permission-guardian",
    unlocks: "q20",
    accessibilitySummary: "Text-based agent-design scenario; approval requirements presented as explicit text, not diagrams.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "q20",
    primaryStudent: LESSON_CHARACTERS.q20,
    tier: 4,
    title: "Final Quest — Use AI Without Losing Judgment",
    subtitle: "Apply the full AI literacy workflow to a real academic and workplace simulation",
    estimatedMinutes: 22,
    learningObjectives: [
      "Apply verification, privacy, authorship, disclosure, and human-judgment principles together in one scenario",
      "Practice recognizing a fabricated citation, an excessive agent-permission request, and a synthetic-media authenticity question in sequence",
      "Balance evidence use, security, and transparency across a multi-part decision",
      "Reflect on how AI use supported, rather than replaced, personal judgment"
    ],
    openingNarrative:
      "Henry Young, a Communication major at Angelo State, faces a connected week involving permitted AI support, required disclosure, five real academic sources, original analysis, privacy, code, media, and agent decisions.",
    personalizationSlots: ["q20.context"],
    approvedStoryFragments: ["q20.context"],
    scenario: {
      prompt:
        "In the same week, Henry Young must: narrow a research question with AI's help, verify a citation the AI generated (which turns out to be fabricated), decide whether to upload a private classmate document to a public chatbot, review AI-generated code containing a plain-text password field, judge whether a dramatic campus video clip is authentic, write a required AI-use disclosure, and evaluate a proposed automation agent that requests permission to submit official forms without human approval. Which overall approach handles this week most responsibly?",
      type: "multiple_choice"
    },
    choices: [
      { id: "a", text: "Use allowed AI support to narrow the question, verify every citation independently, decline to upload the private document, fix the code's security issue before use, verify the video through an official channel, write a specific disclosure, and require human approval before the agent submits anything",
        whyChosen: "Applies verification, privacy, security, and human-judgment principles consistently across every part of the week.",
        possibleBenefit: "Henry Young produces defensible academic work, protects a classmate's privacy, avoids a security flaw, avoids spreading unverified media, and keeps a human in control of a consequential agent action.",
        possibleCost: "Takes more time and effort than accepting each AI output at face value.",
        possibleRisk: "Low — this is the responsible, integrated approach the entire quest path has been building toward.",
        immediateEffect: { aiLiteracy: 6, integrity: 5, privacyAwareness: 4, codeReviewReadiness: 4, agentSafety: 4 },
        futureEffect: "This integrated judgment — verification, privacy, security, and human approval together — is the core transferable skill of the entire AI Quest path.",
        whatCouldChangeThisOutcome: "Nothing changes this — consistently applying these principles together is the goal, regardless of how much time pressure exists.",
        sourceIds: ["nist-ai-rmf", "nist-genai-profile", "unesco-ai-education", "apa-cite-ai", "owasp-llm-top10"] },
      { id: "b", text: "Use AI to invent supporting sources, upload the private document for convenience, deploy the code as-is, share the dramatic video immediately, and skip the disclosure",
        whyChosen: "Feels like the fastest way to get through a demanding week.",
        possibleBenefit: "None — this path violates evidence, privacy, security, and integrity requirements simultaneously.",
        possibleCost: "Risks academic integrity violations, a privacy breach, a security incident, and spreading misinformation all at once.",
        possibleRisk: "This combination represents nearly every risk this quest path has covered, compounded in a single week.",
        immediateEffect: { aiLiteracy: 1, integrity: -6, privacyAwareness: -4, codeReviewReadiness: -3 },
        futureEffect: "A pattern like this tends to surface multiple serious consequences at once rather than one at a time.",
        whatCouldChangeThisOutcome: "Applying each individual lesson from this quest path, one decision at a time, would prevent every part of this outcome." },
      { id: "c", text: "Grant the automation agent permission to submit official forms without human approval, to save time this week",
        whyChosen: "It might feel efficient under a heavy workload.",
        possibleBenefit: "None — this removes the human approval point for a consequential, external, official action.",
        possibleCost: "An agent error could submit incorrect or unwanted official information without anyone catching it first.",
        possibleRisk: "This directly reverses the human-approval principle this quest path has emphasized throughout Tier IV.",
        immediateEffect: { aiLiteracy: 2, agentSafety: -5 },
        futureEffect: "Removing approval gates under time pressure tends to be exactly when an agent mistake causes real harm.",
        whatCouldChangeThisOutcome: "Keeping the human approval requirement, even under time pressure, would prevent this." }
    ],
    immediateConsequences: {
      a: "Henry Young completes the week with verified evidence, protected privacy, secure code, and a human-approved agent action.",
      b: "Henry Young risks multiple compounding academic, privacy, and security problems in the same week.",
      c: "Henry Young risks an agent submitting official information without any human check."
    },
    oneYearConsequences: {
      a: "Henry Young carries an integrated, reliable approach to AI-assisted work into every future course and job.",
      b: "Henry Young risks facing multiple serious consequences that could have each been avoided individually.",
      c: "Henry Young risks having experienced at least one uncaught agent error with real consequences."
    },
    longTermConsequences: {
      a: "Henry Young carries integrated judgment — evidence, privacy, security, and human approval together — into any future career.",
      b: "A pattern of skipping every safeguard at once tends to produce the most severe possible combination of consequences.",
      c: "Removing human approval from consequential automation is one of the most preventable causes of serious real-world agent-related harm."
    },
    recoveryPath:
      "Henry Young can recover from every mistake in this simulation: replace a fabricated citation, disclose and address a document exposure, fix insecure code before deployment, or revoke an overpermissioned agent's access. Verification before acting is still cheaper than recovery afterward.",
    conceptExplanation: {
      what: "This final quest combines verification, privacy, authorship, disclosure, security, and human-judgment principles into one connected, realistic week.",
      why: "Real AI-assisted work rarely tests one skill at a time — a single week can raise citation, privacy, security, media-authenticity, and permission questions all at once.",
      how: "It may help to apply each individual principle from this quest path — verify, protect privacy, review code, confirm authenticity, disclose honestly, require approval — as a consistent habit rather than a one-time lesson.",
      cost: "Applying every safeguard consistently takes real time and effort, especially under deadline pressure.",
      risks: "Skipping any single safeguard under time pressure is exactly when the underlying risk it protects against tends to materialize.",
      whoMayBenefit: "Anyone using AI across academic or professional work, where several types of AI-related decisions can arrive in the same short period.",
      whoMayNotBenefit: "N/A — these integrated habits protect against risk regardless of how AI is being used.",
      misunderstandingRisk: "Believing that mastering one AI-literacy skill (like prompting) is sufficient without the others (like verification, privacy, and security).",
      verifyNote: "This is a synthesis exercise; the specific facts, tools, and platforms referenced are illustrative and will change over time — the underlying judgment principles are what transfer."
    },
    realWorldExample:
      "Henry Young's final capstone week combined a real syllabus AI policy, a real citation-verification requirement, a real group-project privacy question, and a real automation proposal — demonstrating that responsible AI use is less about any single rule and more about consistently applying judgment across many small decisions.",
    appliedVignettes: [
      "Henry Young verifies a realistic-looking AI citation and discovers that it does not exist in any database.",
      "Henry Young declines to upload a classmate's confidential group-project draft to a public chatbot.",
      "Henry Young finds that an AI-generated login feature stores passwords in plain text.",
      "Henry Young pauses before sharing a dramatic campus video and looks for official confirmation.",
      "Henry Young requires human approval before a scholarship-automation agent can submit official forms."
    ],
    scoringDimensions: [
      "Evidence use", "Verification", "Privacy", "Authorship", "Transparency",
      "Security", "Human judgment", "Permission control", "Adaptability"
    ],
    closingReflection:
      "This quest is not scored by how fast Henry Young moved or by how much AI Henry used — it is scored by whether evidence was verified, privacy was protected, authorship stayed honest, security was checked, and a human stayed in control of consequential decisions. Those habits, not any single tool, are what AI literacy actually means.",
    nextCourseHandoff: {
      label: "Continue to Ram Ready Financial Futures",
      url: "https://brexatlas.github.io/Financial-Literacy-Course/"
    },
    knowledgeChecks: [
      { id: "kc1", question: "How is this final quest scored?",
        type: "multiple_choice",
        options: ["By evidence use, verification, privacy, authorship, transparency, security, human judgment, permission control, and adaptability", "By how quickly Henry Young finishes", "By how much AI Henry Young used", "By whether Henry Young avoided AI entirely"],
        correctAnswer: "By evidence use, verification, privacy, authorship, transparency, security, human judgment, permission control, and adaptability",
        explanation: "Responsible AI use is measured by judgment across multiple dimensions, not by speed or AI usage volume." },
      { id: "kc2", question: "What should happen with the AI-generated citation that cannot be found in any database?",
        type: "multiple_choice",
        options: ["It should not be used until a real, verified source is located", "It should be used since it looks realistic", "It should be cited as 'personal communication with AI'", "It should be paraphrased to avoid detection"],
        correctAnswer: "It should not be used until a real, verified source is located",
        explanation: "An unverifiable citation is treated as unusable until independently confirmed, consistent with the verification principle from earlier in this path." }
    ],
    sourceIds: ["nist-ai-rmf", "nist-genai-profile", "unesco-ai-education", "apa-cite-ai", "owasp-llm-top10"],
    achievementId: "responsible-ai-navigator",
    unlocks: null,
    accessibilitySummary: "Multi-part text-based capstone scenario; all vignettes and scoring dimensions presented as plain lists.",
    reviewedDate: "2026-07-11"
  }
];
