// Ram Ready Digital Literacy — Centralized Source Registry
// Every episode and quest references sources by id. See docs/SOURCE_POLICY.md
// and docs/SOURCE_REVIEW_CHECKLIST.md for how this list is maintained.
//
// classification: "primary" (government/regulatory/original) or
//                 "secondary" (explainer, educational summary)

export const SOURCE_REGISTRY = [
  {
    id: "asu-core-values",
    title: "Angelo State University Core Values",
    org: "Angelo State University",
    url: "https://www.angelo.edu/about-asu/core-values/",
    topic: "Institutional identity",
    concepts: ["belonging", "community", "integrity"],
    classification: "primary",
    reviewed: "2026-07-10",
    notes: "Used only for identity/branding context, not a claim of official university policy."
  },
  {
    id: "asu-blue-gold",
    title: "Blue and Gold — Angelo State Traditions",
    org: "Angelo State University",
    url: "https://www.angelo.edu/about-asu/traditions/blue-and-gold.php",
    topic: "Institutional identity",
    concepts: ["ram fam", "school color heritage"],
    classification: "primary",
    reviewed: "2026-07-10",
    notes: "Design-direction reference only."
  },
  {
    id: "asu-roscoe-bella",
    title: "Roscoe and Bella — Angelo State Traditions",
    org: "Angelo State University",
    url: "https://www.angelo.edu/about-asu/traditions/roscoe-and-bella.php",
    topic: "Institutional identity",
    concepts: ["mascot tradition", "guide characters"],
    classification: "primary",
    reviewed: "2026-07-10",
    notes: "Guide characters here are original text-based interface treatments, not official university speech."
  },
  {
    id: "acrl-info-literacy",
    title: "Framework for Information Literacy for Higher Education",
    org: "Association of College and Research Libraries (ALA)",
    url: "https://www.ala.org/acrl/standards/ilframework",
    topic: "Research and source literacy",
    concepts: ["authority", "evidence", "search strategy", "scholarly communication"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "cisa-strong-passwords",
    title: "Use Strong Passwords",
    org: "Cybersecurity and Infrastructure Security Agency (CISA)",
    url: "https://www.cisa.gov/secure-our-world/use-strong-passwords",
    topic: "Account security",
    concepts: ["passwords", "passphrases", "password managers"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "cisa-mfa",
    title: "Turn On Multi-Factor Authentication",
    org: "Cybersecurity and Infrastructure Security Agency (CISA)",
    url: "https://www.cisa.gov/secure-our-world/turn-mfa",
    topic: "Account security",
    concepts: ["MFA", "two-factor authentication", "unexpected login prompts"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "cisa-phishing",
    title: "Recognize and Report Phishing",
    org: "Cybersecurity and Infrastructure Security Agency (CISA)",
    url: "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing",
    topic: "Phishing and scams",
    concepts: ["phishing", "urgency tactics", "reporting"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "ftc-phishing",
    title: "How to Recognize and Avoid Phishing Scams",
    org: "Federal Trade Commission",
    url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams",
    topic: "Phishing and scams",
    concepts: ["phishing", "impersonation scams", "reporting fraud"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "ferpa-overview",
    title: "FERPA (Family Educational Rights and Privacy Act)",
    org: "U.S. Department of Education",
    url: "https://studentprivacy.ed.gov/ferpa",
    topic: "Student records privacy",
    concepts: ["education records", "official documents", "student privacy rights"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "studentaid-gov",
    title: "Federal Student Aid",
    org: "U.S. Department of Education",
    url: "https://studentaid.gov/",
    topic: "Financial aid and official documents",
    concepts: ["scholarship and aid documents", "official portals"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "w3-accessibility-intro",
    title: "Accessibility Fundamentals",
    org: "W3C Web Accessibility Initiative (WAI)",
    url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
    topic: "Accessibility",
    concepts: ["digital accessibility", "inclusive design"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "purdue-owl-email",
    title: "Email Etiquette",
    org: "Purdue Online Writing Lab (OWL)",
    url: "https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/email_etiquette.html",
    topic: "Professional communication",
    concepts: ["professional email", "tone", "subject lines"],
    classification: "secondary",
    reviewed: "2026-07-10"
  },
  {
    id: "nist-ai-rmf",
    title: "AI Risk Management Framework",
    org: "National Institute of Standards and Technology (NIST)",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    topic: "AI risk and governance",
    concepts: ["AI risk management", "human oversight", "trustworthy AI"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "nist-genai-profile",
    title: "Generative AI Profile (NIST AI 600-1)",
    org: "National Institute of Standards and Technology (NIST)",
    url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
    topic: "Generative AI risk",
    concepts: ["hallucination", "generative AI risks", "verification"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "unesco-ai-education",
    title: "Guidance for Generative AI in Education and Research",
    org: "UNESCO",
    url: "https://unesdoc.unesco.org/ark:/48223/pf0000386693",
    topic: "AI in education",
    concepts: ["academic integrity", "AI literacy", "responsible use in learning"],
    classification: "primary",
    reviewed: "2026-07-10"
  },
  {
    id: "apa-cite-ai",
    title: "How to Cite ChatGPT",
    org: "APA Style (American Psychological Association)",
    url: "https://apastyle.apa.org/blog/how-to-cite-chatgpt",
    topic: "AI citation",
    concepts: ["APA citation", "generative AI citation"],
    classification: "secondary",
    reviewed: "2026-07-10"
  },
  {
    id: "mla-cite-ai",
    title: "Citing Generative AI",
    org: "MLA Style Center (Modern Language Association)",
    url: "https://style.mla.org/citing-generative-ai/",
    topic: "AI citation",
    concepts: ["MLA citation", "generative AI citation"],
    classification: "secondary",
    reviewed: "2026-07-10"
  },
  {
    id: "github-copilot-responsible-use",
    title: "Responsible Use of GitHub Copilot Code Completion",
    org: "GitHub",
    url: "https://docs.github.com/en/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-code-completion",
    topic: "Coding assistants",
    concepts: ["code review", "AI-assisted coding", "security of generated code"],
    classification: "secondary",
    reviewed: "2026-07-10"
  },
  {
    id: "owasp-llm-top10",
    title: "OWASP Top 10 for Large Language Model Applications",
    org: "OWASP Foundation",
    url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    topic: "AI application security",
    concepts: ["prompt injection", "agent permissions", "LLM application risk"],
    classification: "primary",
    reviewed: "2026-07-10"
  }
];

export function getSourceById(id) {
  return SOURCE_REGISTRY.find((s) => s.id === id) || null;
}

export function getSourcesByIds(ids = []) {
  return ids.map(getSourceById).filter(Boolean);
}
