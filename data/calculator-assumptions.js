// Ram Ready Digital Literacy — Central Tool Metadata
//
// These are transparent, deterministic educational tools, not a compliance
// guarantee or a formal evaluation of a person's digital skill. Every tool
// result names its purpose, inputs, limitations, and a review date. See
// docs/SOURCE_POLICY.md.

export const TOOLS_REVIEWED_DATE = "2026-07-10";

export const ILLUSTRATIVE_NOTE =
  "Educational tool output only — not a guarantee of a safe submission, a secure account, or compliance with any specific instructor, employer, or platform rule. Always follow current course or workplace instructions.";

export const AI_USE_ZONES = {
  green: {
    id: "green",
    label: "Green zone — clearly permitted support",
    description: "Uses an instructor has clearly allowed, such as practice questions or grammar feedback, with no disclosure ambiguity."
  },
  yellow: {
    id: "yellow",
    label: "Yellow zone — ask first",
    description: "Uses that are unclear or substantial enough that a learner should confirm with the instructor or supervisor before proceeding."
  },
  red: {
    id: "red",
    label: "Red zone — prohibited or deceptive",
    description: "Uses that violate a stated rule or misrepresent authorship, such as submitting AI-written work as fully independent."
  }
};

export const TOOL_META = {
  fileNameBuilder: {
    id: "file-name-builder",
    label: "File-Name Builder",
    formula: "Course_Assignment_LastName_Date_Version",
    sourceIds: []
  },
  folderStructureBuilder: {
    id: "folder-structure-builder",
    label: "Folder-Structure Builder",
    formula: "Semester / Course / Assignment / (Drafts | Feedback | Final)",
    sourceIds: []
  },
  submissionChecklist: {
    id: "submission-readiness-checklist",
    label: "Submission-Readiness Checklist",
    formula: "Score = items confirmed ÷ total items",
    sourceIds: []
  },
  emailBuilder: {
    id: "professional-email-builder",
    label: "Professional-Email Builder",
    formula: "Subject + greeting + course/section + context + specific question + what was already tried + closing",
    sourceIds: ["purdue-owl-email"]
  },
  syllabusToCalendar: {
    id: "syllabus-to-calendar",
    label: "Syllabus-to-Calendar Exercise",
    formula: "Each requirement becomes a due-date entry plus an earlier personal work-back reminder.",
    sourceIds: []
  },
  sourceCredibilityMatrix: {
    id: "source-credibility-matrix",
    label: "Source-Credibility Matrix",
    formula: "Score = authority + evidence + currency + relevance (each 0-2, max 8)",
    sourceIds: ["acrl-info-literacy"]
  },
  phishingDetector: {
    id: "phishing-message-detector",
    label: "Phishing-Message Detector",
    formula: "Risk score rises with each urgency, impersonation, shortened-link, or unexpected-request signal present.",
    sourceIds: ["cisa-phishing", "ftc-phishing"]
  },
  sharingPermissionSimulator: {
    id: "sharing-permission-simulator",
    label: "Sharing-Permission Simulator",
    formula: "Compares requested access (view/comment/edit) against audience (owner-only/organization/anyone-with-link/public).",
    sourceIds: ["ferpa-overview"]
  },
  weeklyReset: {
    id: "weekly-digital-reset-builder",
    label: "Weekly Digital Reset Builder",
    formula: "Score = routine items confirmed ÷ total routine items",
    sourceIds: []
  },
  techFailureResponse: {
    id: "technology-failure-response-builder",
    label: "Technology-Failure Response Builder",
    formula: "Completeness = evidence + timestamp + correct contact + prior attempt, all present",
    sourceIds: []
  },
  promptFormulaBuilder: {
    id: "prompt-formula-builder",
    label: "Prompt-Formula Builder",
    formula: "Role + task + context + constraints + output format",
    sourceIds: ["nist-genai-profile"]
  },
  aiUseZoneSorter: {
    id: "ai-use-zone-sorter",
    label: "AI-Use Zone Sorter",
    formula: "Classifies a described use into green / yellow / red based on stated instructor permission and authorship impact.",
    sourceIds: ["unesco-ai-education"]
  },
  aiDisclosureBuilder: {
    id: "ai-disclosure-builder",
    label: "AI-Disclosure Builder",
    formula: "Tool name + purpose + what it contributed + how it was verified",
    sourceIds: ["apa-cite-ai", "mla-cite-ai"]
  },
  syntheticMediaChecklist: {
    id: "synthetic-media-verification-checklist",
    label: "Synthetic-Media Verification Checklist",
    formula: "Score = verification steps confirmed ÷ total steps",
    sourceIds: ["nist-genai-profile"]
  },
  codeReviewChecklist: {
    id: "code-review-checklist",
    label: "Code-Review Checklist",
    formula: "Score = review steps confirmed ÷ total steps",
    sourceIds: ["github-copilot-responsible-use", "owasp-llm-top10"]
  },
  workflowBuilder: {
    id: "workflow-builder",
    label: "Workflow Builder",
    formula: "Orders stages (plan → gather → draft → verify → disclose) and flags missing checkpoints.",
    sourceIds: ["nist-ai-rmf"]
  },
  agentPermissionMatrix: {
    id: "agent-permission-matrix",
    label: "Agent Permission Matrix",
    formula: "Flags any tool/permission broader than the stated narrow goal requires.",
    sourceIds: ["owasp-llm-top10", "nist-ai-rmf"]
  }
};
