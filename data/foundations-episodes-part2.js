import { LESSON_CHARACTERS } from "./lesson-characters.js";

// Ram Ready Digital Literacy — University Digital Literacy Foundations
// Episodes 11-20 (Act III: Read, Cite, and Protect / Act IV: Share, Recover, and Succeed)
// See docs/STORY_ARCHITECTURE.md and docs/CURRICULUM_MAP.md.

export const EPISODES_PART2 = [
  {
    id: "ep11",
    primaryStudent: LESSON_CHARACTERS.ep11,
    act: 3,
    title: "Read Academic Sources Without Drowning",
    subtitle: "A strategic first pass before reading every line",
    estimatedMinutes: 11,
    learningObjectives: [
      "Use title, abstract, headings, and figures for a strategic first pass",
      "Identify a study's population, method, main finding, and limitations",
      "Take notes connected to a specific research purpose",
      "Avoid treating every section of an article as equally important on a first read"
    ],
    personalizationSlots: ["ep11.context"],
    approvedStoryFragments: ["ep11.context"],
    openingNarrative:
      "Tiana Robinson, a Computer Science major at Angelo State, opens a forty-page academic article, reads the first paragraph three times, and starts to wonder whether academic research is simply impossible.",
    scenario: {
      prompt:
        "Tiana Robinson has a research question and a long article. How should Tiana approach reading it under a real time limit?",
      type: "identify_missing_information"
    },
    choices: [
      {
        id: "a",
        text: "Preview the title, abstract, headings, figures, and limitations before deep reading",
        whyChosen: "A structured first pass builds a map of the article before committing to a full read.",
        possibleBenefit: "Tiana Robinson quickly sees whether the article is relevant and where the key findings appear.",
        possibleCost: "Requires resisting the urge to read start to finish immediately.",
        possibleRisk: "None significant.",
        immediateEffect: { researchConfidence: 4, sourceJudgment: 2 },
        futureEffect: "This strategic reading habit makes every future academic article faster to process.",
        whatCouldChangeThisOutcome: "Taking notes during the first pass to guide the deeper read that follows.",
        sourceIds: ["acrl-info-literacy"]
      },
      {
        id: "b",
        text: "Try to read every word from the first paragraph onward",
        whyChosen: "It feels like the 'proper' way to read an academic source.",
        possibleBenefit: "No sections are skipped.",
        possibleCost: "Can take far longer, and it's easy to lose track of the overall argument in dense early sections.",
        possibleRisk: "May run out of time before reaching the most relevant findings.",
        immediateEffect: { researchConfidence: -2 },
        futureEffect: "Long academic readings continue to feel overwhelming without a structured approach.",
        whatCouldChangeThisOutcome: "Switching to a preview-first strategy even partway through a reading session.",
        sourceIds: ["acrl-info-literacy"]
      },
      {
        id: "c",
        text: "Skip the limitations section entirely to save time",
        whyChosen: "It feels like a less important part of the article.",
        possibleBenefit: "Saves a small amount of reading time.",
        possibleCost: "Limitations often explain what the study cannot actually prove.",
        possibleRisk: "Overclaiming a study's findings in an assignment by missing its stated boundaries.",
        immediateEffect: { researchConfidence: 1, sourceJudgment: -2 },
        futureEffect: "Overclaiming findings can recur in future assignments that rely on academic sources.",
        whatCouldChangeThisOutcome: "Reading limitations as part of the same first pass as the abstract and findings.",
        sourceIds: ["acrl-info-literacy"]
      }
    ],
    immediateConsequences: {
      a: "Tiana Robinson builds a clear map of the article before investing time in a full read.",
      b: "Tiana Robinson spends much more time and may lose the thread of the argument.",
      c: "Tiana Robinson finishes reading faster but risks overstating what the study actually found."
    },
    oneYearConsequences: {
      a: "Tiana Robinson has made academic reading a manageable, repeatable process instead of a source of dread.",
      b: "Long readings continue to feel like a major time burden every semester.",
      c: "Occasional overclaiming in papers draws professor feedback about unsupported conclusions."
    },
    longTermConsequences: {
      a: "Tiana Robinson's strategic reading skills support efficient research throughout a full degree and any evidence-based career.",
      b: "Inefficient reading habits can limit how much material can realistically be covered under real deadlines.",
      c: "A pattern of missing limitations sections can undermine academic credibility over time."
    },
    recoveryPath:
      "Tiana Robinson can adjust the reading approach mid-assignment; switching to a first-pass strategy after struggling with a full linear read still saves meaningful time.",
    conceptExplanation: {
      what: "A strategic first pass means previewing an article's title, abstract, headings, figures, and limitations before reading it in full.",
      why: "Academic articles are structured to support this kind of preview — the abstract and headings exist specifically to orient a reader quickly.",
      how: "It may help by revealing an article's relevance and key findings before committing significant time to a full read.",
      cost: "It requires a shift away from the instinct to read strictly start to finish.",
      risks: "Skipping a limitations section entirely, rather than including it in the first pass, risks overclaiming what a study actually shows.",
      whoMayBenefit: "Any student reading academic articles under real time constraints — which is most students, most semesters.",
      whoMayNotBenefit: "A very short, simple source may not need this structured approach, but the habit doesn't hurt to apply broadly.",
      misunderstandingRisk: "Believing that skimming means skipping quality — a good first pass is thorough about the right sections, not careless about all of them.",
      verifyNote: "Article structure conventions can vary somewhat by discipline — check field-specific guidance for unusual formats."
    },
    realWorldExample:
      "Tiana Robinson froze after repeatedly rereading the first paragraph of a dense article. Using a structured first pass — abstract, headings, findings, limitations — turned the same article into a manageable twenty-minute task with a clear takeaway.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What is a useful first pass through a long research article?",
        type: "multiple_choice",
        options: [
          "Title, abstract, headings, findings, and limitations",
          "Memorize every reference before reading the abstract",
          "Skip the limitations section",
          "Read only the introduction"
        ],
        correctAnswer: "Title, abstract, headings, findings, and limitations",
        explanation: "This first pass builds a map of the article's purpose and findings before a deeper read."
      },
      {
        id: "kc2",
        question: "Why is the limitations section important to include in a first pass?",
        type: "multiple_choice",
        options: [
          "It's the shortest section, so it saves time",
          "It explains what the study cannot actually prove",
          "It's not actually useful",
          "It's required by law to be read first"
        ],
        correctAnswer: "It explains what the study cannot actually prove",
        explanation: "Limitations help prevent overclaiming a study's findings in later academic work."
      }
    ],
    sourceIds: ["acrl-info-literacy"],
    achievementId: "academic-reading-navigator",
    unlocks: "ep12",
    accessibilitySummary: "The reading strategy is presented as a plain, ordered text checklist compatible with screen readers.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep12",
    primaryStudent: LESSON_CHARACTERS.ep12,
    act: 3,
    title: "Separate Quotes, Paraphrases, and Original Ideas",
    subtitle: "Keep Owen Park's citation trail clear during research",
    estimatedMinutes: 10,
    learningObjectives: [
      "Label direct quotations immediately during note-taking",
      "Record page numbers and source information with every note",
      "Keep paraphrases and personal analysis visibly separate from source language",
      "Explain how accidental plagiarism often begins in messy notes"
    ],
    personalizationSlots: ["ep12.context"],
    approvedStoryFragments: ["ep12.context"],
    openingNarrative:
      "Owen Park, a Biology major at Angelo State, copies a striking sentence into a notes document while researching and plans to cite it later, but that plan slips away.",
    scenario: {
      prompt:
        "Weeks later, Owen Park finds that sentence again in the notes, no longer marked as a quotation, and isn't sure anymore whether it was copied or paraphrased.",
      type: "identify_quotation_vs_paraphrase"
    },
    choices: [
      {
        id: "a",
        text: "Track down the original source and either quote it properly or paraphrase and cite it correctly",
        whyChosen: "Fixing the ambiguity now protects academic integrity later.",
        possibleBenefit: "Owen Park removes the risk of accidental plagiarism from that note.",
        possibleCost: "Takes time to relocate the original source.",
        possibleRisk: "None significant.",
        immediateEffect: { citationIntegrity: 4, integrity: 2 },
        futureEffect: "This habit of verifying uncertain notes prevents integrity issues before submission.",
        whatCouldChangeThisOutcome: "Adopting a note-taking system with separate labels for quotes, paraphrases, and analysis going forward.",
        sourceIds: ["acrl-info-literacy"]
      },
      {
        id: "b",
        text: "Assume it must be a paraphrase and use it as-is",
        whyChosen: "It feels faster than tracking down the original source again.",
        possibleBenefit: "Saves time in the moment.",
        possibleCost: "If it was actually a direct quote, this becomes unattributed use of someone else's exact wording.",
        possibleRisk: "Accidental plagiarism, which can have serious academic integrity consequences even when unintentional.",
        immediateEffect: { citationIntegrity: -3, integrity: -1 },
        futureEffect: "The underlying messy note-taking habit continues to create risk on every future assignment.",
        whatCouldChangeThisOutcome: "Building the habit of labeling quotes and paraphrases the moment they're written down.",
        sourceIds: ["acrl-info-literacy"]
      },
      {
        id: "c",
        text: "Remove the sentence entirely rather than risk using it incorrectly",
        whyChosen: "It feels like the safest choice when the origin is unclear.",
        possibleBenefit: "Avoids any citation risk from this specific sentence.",
        possibleCost: "Loses a potentially strong piece of evidence for the assignment.",
        possibleRisk: "Minimal, though the underlying note-taking habit that caused the problem remains unaddressed.",
        immediateEffect: { citationIntegrity: 1, researchConfidence: -1 },
        futureEffect: "The same ambiguous-note problem is likely to happen again on the next research project.",
        whatCouldChangeThisOutcome: "Fixing the note-taking process itself, not just this one sentence.",
        sourceIds: ["acrl-info-literacy"]
      }
    ],
    immediateConsequences: {
      a: "Owen Park's notes and paper are fully protected from this specific integrity risk.",
      b: "Owen Park may unknowingly submit unattributed source language.",
      c: "Owen Park's paper is safe, but loses a potentially useful piece of evidence."
    },
    oneYearConsequences: {
      a: "Owen Park's citation practices are consistently reliable across every research assignment.",
      b: "An accidental plagiarism issue could surface in a future course, with real academic consequences.",
      c: "Research quality is slightly limited by cautious over-removal of unclear notes."
    },
    longTermConsequences: {
      a: "Owen Park's reliable citation habits protect academic integrity throughout a full degree and any research-based career.",
      b: "Repeated citation-trail gaps significantly raise the risk of an eventual integrity violation, even without intent to deceive.",
      c: "Removing uncertain material is safer than misusing it, but doesn't build the deeper skill needed to avoid the problem long-term."
    },
    recoveryPath:
      "Owen Park can resolve an ambiguous note by returning to the original source; this is a normal part of careful research, not a sign of failure.",
    conceptExplanation: {
      what: "Keeping a citation trail means labeling direct quotations, paraphrases, and personal analysis clearly and separately at the moment notes are taken.",
      why: "It exists because accidental plagiarism often begins in messy notes, not intentional deception — a copied sentence can lose its quotation marks long before a paper is written.",
      how: "It may help by making the source of every idea in a paper traceable and verifiable, protecting both accuracy and integrity.",
      cost: "It takes a small amount of extra discipline during note-taking, when the temptation is to move quickly.",
      risks: "Treating an unclear note as safe to use without verification risks unattributed use of someone else's exact wording.",
      whoMayBenefit: "Any student doing research that involves reading and taking notes from multiple sources.",
      whoMayNotBenefit: "There's no real case where citation-trail discipline is a disadvantage — it costs a small amount of time regardless of topic or field.",
      misunderstandingRisk: "Believing that plagiarism only happens through intentional copying — much of it begins with disorganized notes and good intentions.",
      verifyNote: "Citation-trail practices apply across citation styles — check the specific formatting rules required by the assignment separately."
    },
    realWorldExample:
      "Owen Park copied a sentence into research notes without quotation marks, forgot it had been copied, and later submitted it as original wording — the integrity issue began weeks earlier, during a rushed note-taking session, not at the moment of writing.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Which note-taking habit best reduces accidental plagiarism?",
        type: "multiple_choice",
        options: [
          "Label quotes, paraphrases, and personal analysis while taking notes",
          "Plan to remember the difference later",
          "Remove all source links from notes",
          "Only take notes on the easiest sources"
        ],
        correctAnswer: "Label quotes, paraphrases, and personal analysis while taking notes",
        explanation: "The distinction should be created at the moment of capture, not reconstructed from memory later."
      },
      {
        id: "kc2",
        question: "Where does accidental plagiarism most often begin?",
        type: "multiple_choice",
        options: [
          "Always in the final draft, written intentionally",
          "Often in messy notes taken earlier in the research process",
          "It never actually happens accidentally",
          "Only when using AI tools"
        ],
        correctAnswer: "Often in messy notes taken earlier in the research process",
        explanation: "A copied sentence can lose its quotation marks or source link long before the final paper is written."
      }
    ],
    sourceIds: ["acrl-info-literacy"],
    achievementId: "citation-trail-keeper",
    unlocks: "ep13",
    accessibilitySummary: "Quote/paraphrase labeling is presented as a plain-text sorting task, not a color-coded-only interface.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep13",
    primaryStudent: LESSON_CHARACTERS.ep13,
    act: 3,
    title: "Protect Student Accounts",
    subtitle: "Strong authentication as the foundation of digital safety",
    estimatedMinutes: 10,
    learningObjectives: [
      "Explain the value of unique passwords or passphrases",
      "Describe multi-factor authentication at a general level",
      "Identify why an unexpected MFA prompt is a warning sign",
      "Explain basic device and recovery-method security"
    ],
    personalizationSlots: ["ep13.context"],
    approvedStoryFragments: ["ep13.context"],
    openingNarrative:
      "Isabel Flores, a Marketing major at Angelo State, receives a multi-factor authentication approval request for the university account without trying to log in anywhere.",
    scenario: {
      prompt:
        "Isabel Flores did not initiate this login attempt. The prompt is right there, one tap away from approval.",
      type: "sort_safe_unsafe"
    },
    choices: [
      {
        id: "a",
        text: "Deny the request and review account security immediately",
        whyChosen: "An MFA prompt that wasn't self-initiated is a clear warning sign, not a neutral event.",
        possibleBenefit: "Isabel Flores blocks a potential unauthorized login and begins a useful security review.",
        possibleCost: "A few minutes spent checking account activity and possibly changing the password.",
        possibleRisk: "None — this is the safe response.",
        immediateEffect: { accountSecurity: 4, resilience: 1 },
        futureEffect: "This response pattern protects the account from a real compromise attempt.",
        whatCouldChangeThisOutcome: "Nothing changes this outcome — denying an unexpected MFA request is the correct response in every case.",
        sourceIds: ["cisa-mfa", "cisa-strong-passwords"]
      },
      {
        id: "b",
        text: "Approve it to make the notification stop",
        whyChosen: "The buzzing notification is annoying and approving feels like the fastest way to silence it.",
        possibleBenefit: "None — approving an unrequested login attempt has no legitimate benefit.",
        possibleCost: "May grant account access to someone who already has the password.",
        possibleRisk: "High — this can hand over full account access to an attacker in the exact moment they need it.",
        immediateEffect: { accountSecurity: -4 },
        futureEffect: "If this was a real attack, the account may now be compromised, exposing email, coursework, and connected systems.",
        whatCouldChangeThisOutcome: "Nothing makes approving an unrequested prompt a safe choice — it should always be denied.",
        sourceIds: ["cisa-mfa"]
      },
      {
        id: "c",
        text: "Ignore the prompt completely and do nothing further",
        whyChosen: "It feels easier to just not engage with it at all.",
        possibleBenefit: "Doesn't approve the malicious request.",
        possibleCost: "Misses the opportunity to investigate whether the password itself has already been compromised.",
        possibleRisk: "The attacker may try again, or may have other access already, since the underlying password exposure isn't addressed.",
        immediateEffect: { accountSecurity: 1, resilience: -1 },
        futureEffect: "The root cause of the unexpected prompt remains unresolved.",
        whatCouldChangeThisOutcome: "Following up by deliberately denying the request and changing the password, rather than simply ignoring it.",
        sourceIds: ["cisa-mfa"]
      }
    ],
    immediateConsequences: {
      a: "Isabel Flores blocks the attempt and starts checking for any other suspicious activity.",
      b: "Isabel Flores may have just handed account access to an attacker.",
      c: "Isabel Flores avoided the immediate risk but left the underlying exposure unaddressed."
    },
    oneYearConsequences: {
      a: "Isabel Flores's account security habits consistently protect email, coursework, and connected campus systems.",
      b: "If this was a real attack, Isabel Flores may now be dealing with a compromised account, changed passwords, and lost access.",
      c: "The password that triggered the original prompt may still be exposed and vulnerable to another attempt."
    },
    longTermConsequences: {
      a: "Isabel Flores's consistent account-security habits protect against a wide range of future attacks with minimal ongoing effort.",
      b: "A single approved malicious prompt can cascade into email compromise, financial-aid fraud, or identity theft.",
      c: "Partial responses to security warnings leave real risk unaddressed even when the immediate danger is avoided."
    },
    recoveryPath:
      "If Isabel Flores accidentally approves a prompt, changing the password immediately, reviewing recent account activity, and contacting the university's IT help desk can limit the damage. Quick action significantly reduces the impact of a mistake.",
    conceptExplanation: {
      what: "Multi-factor authentication (MFA) adds a second verification step beyond a password; a strong, unique password or passphrase is the first layer of account protection.",
      why: "These exist because passwords alone are frequently exposed through breaches on other websites, and a second factor blocks most unauthorized access attempts even when a password is compromised.",
      how: "It may help by preventing account takeover even if a password becomes known to someone else.",
      cost: "It requires occasionally completing an extra verification step when logging in from a new device.",
      risks: "Approving an MFA request that wasn't self-initiated defeats its entire purpose and can hand over account access directly.",
      whoMayBenefit: "Every student with a university account, email, or any account tied to identity, coursework, or financial aid.",
      whoMayNotBenefit: "There is no legitimate case where skipping MFA or approving an unrequested prompt is the safer choice.",
      misunderstandingRisk: "Believing that a real-looking, official-seeming prompt must be legitimate — attackers deliberately design prompts to look exactly like real ones.",
      verifyNote: "This course never asks for an actual password or MFA code; Isabel Flores practices the decision with illustrative details only."
    },
    realWorldExample:
      "Isabel Flores reused one password across an entertainment site and Isabel's university email. When the entertainment site was breached, an attacker tried the same password on the university account and triggered an MFA prompt. Isabel denied it and changed the password immediately, preventing a compromise.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What should Isabel Flores do with an unexpected MFA approval request that Isabel did not initiate?",
        type: "multiple_choice",
        options: [
          "Deny it and review account security",
          "Approve it to make the notification stop",
          "Share the code with whoever is asking",
          "Ignore it and take no further action"
        ],
        correctAnswer: "Deny it and review account security",
        explanation: "An MFA request that wasn't self-initiated is a warning sign of a possible unauthorized login attempt."
      },
      {
        id: "kc2",
        question: "Why does reusing one password across multiple sites increase risk?",
        type: "multiple_choice",
        options: [
          "It doesn't increase risk at all",
          "A breach on one site can expose a password that also unlocks other accounts",
          "It only affects the site where the breach happened",
          "Reused passwords are always stronger"
        ],
        correctAnswer: "A breach on one site can expose a password that also unlocks other accounts",
        explanation: "Password reuse means a single breach elsewhere can create risk for otherwise unrelated accounts."
      }
    ],
    sourceIds: ["cisa-strong-passwords", "cisa-mfa"],
    achievementId: "account-security-builder",
    unlocks: "ep14",
    accessibilitySummary: "This episode does not request any real credentials and presents the MFA scenario as plain descriptive text.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep14",
    primaryStudent: LESSON_CHARACTERS.ep14,
    act: 3,
    title: "Recognize Phishing and Urgency Tricks",
    subtitle: "Pause before clicking a message that creates pressure",
    estimatedMinutes: 10,
    learningObjectives: [
      "Identify urgency and fear tactics used in phishing messages",
      "Practice checking senders and inspecting links before clicking",
      "Use official websites directly instead of links in suspicious messages",
      "Report suspicious messages through approved channels"
    ],
    personalizationSlots: ["ep14.context"],
    approvedStoryFragments: ["ep14.context"],
    openingNarrative:
      "Marcus Reed, a Nursing major at Angelo State, gets an email claiming financial aid will be canceled in ten minutes unless Marcus logs in immediately through a shortened link.",
    scenario: {
      prompt:
        "The message is designed to create panic and rush a decision before Marcus Reed has time to think it through.",
      type: "inspect_phishing_message"
    },
    choices: [
      {
        id: "a",
        text: "Go to the official university website directly and check financial aid status there",
        whyChosen: "Verifying through a known, trusted channel avoids relying on a potentially malicious link entirely.",
        possibleBenefit: "Marcus Reed confirms the real status without taking any risk from the suspicious link.",
        possibleCost: "Takes a few extra minutes compared to clicking the link in the message.",
        possibleRisk: "None — this is the safe response.",
        immediateEffect: { accountSecurity: 4, resilience: 2 },
        futureEffect: "This verification habit protects against future phishing attempts using the same pressure tactics.",
        whatCouldChangeThisOutcome: "Nothing changes this outcome — going directly to a known official site is the correct response in every case like this.",
        sourceIds: ["cisa-phishing", "ftc-phishing"]
      },
      {
        id: "b",
        text: "Click the link and log in immediately to avoid losing financial aid",
        whyChosen: "The message creates real fear about losing aid, which makes clicking feel urgent.",
        possibleBenefit: "None — this is exactly the response the message is designed to trigger.",
        possibleCost: "May submit real login credentials directly to an attacker.",
        possibleRisk: "High — this can lead to account compromise, identity theft, or fraudulent use of financial aid information.",
        immediateEffect: { accountSecurity: -4, wellbeing: -1 },
        futureEffect: "A compromised account can affect email, coursework access, and financial-aid records simultaneously.",
        whatCouldChangeThisOutcome: "Nothing makes clicking an unverified urgent link the safer choice — official offices don't operate this way.",
        sourceIds: ["cisa-phishing"]
      },
      {
        id: "c",
        text: "Forward the message to every classmate immediately as a warning, without reporting it officially",
        whyChosen: "It feels helpful to warn others quickly.",
        possibleBenefit: "Raises some awareness among peers.",
        possibleCost: "Doesn't get the message into the hands of the people who can actually block or investigate it.",
        possibleRisk: "The phishing campaign continues reaching other targets since it wasn't reported through proper channels.",
        immediateEffect: { accountSecurity: 1, communicationClarity: 1 },
        futureEffect: "Without an official report, the same phishing campaign is likely to keep targeting the campus community.",
        whatCouldChangeThisOutcome: "Reporting the message through the university's approved phishing-report channel in addition to warning peers.",
        sourceIds: ["cisa-phishing"]
      }
    ],
    immediateConsequences: {
      a: "Marcus Reed confirms the real financial aid status is unaffected and the message was fake.",
      b: "Marcus Reed may have handed login credentials directly to an attacker.",
      c: "Marcus Reed's classmates are warned, but the campus IT office never learns about the attack."
    },
    oneYearConsequences: {
      a: "Marcus Reed continues to recognize and safely dismiss urgency-based phishing attempts.",
      b: "If this was a real attack, Marcus Reed may be dealing with a compromised account and identity-theft risk.",
      c: "The same phishing campaign may resurface, since it was never formally reported."
    },
    longTermConsequences: {
      a: "Marcus Reed's reliable phishing recognition protects against financial-aid, scholarship, and account-impersonation scams throughout college.",
      b: "A single successful phishing attempt can have consequences well beyond one account, including financial and identity harm.",
      c: "Informal warnings help individuals but don't address the broader campus-wide threat the way an official report can."
    },
    recoveryPath:
      "If Marcus Reed accidentally enters credentials on a phishing site, changing the password immediately, enabling or reviewing MFA, and contacting university IT right away can significantly limit the damage.",
    conceptExplanation: {
      what: "Phishing messages imitate trusted organizations and use urgency — 'verify now,' 'account closing,' 'scholarship expiring' — to short-circuit careful thinking.",
      why: "Urgency and fear are used deliberately because they make people less likely to pause and verify before acting.",
      how: "It may help to check the sender, inspect links without clicking, and use a known official website directly instead of a link in the message.",
      cost: "Verification takes a few extra minutes compared to clicking immediately.",
      risks: "Falling for a phishing message can expose login credentials, financial-aid information, and connected accounts.",
      whoMayBenefit: "Every student, since phishing attacks commonly target financial aid, scholarships, and campus account credentials.",
      whoMayNotBenefit: "There's no legitimate reason to skip verification — the cost is a few minutes, and the protection is significant.",
      misunderstandingRisk: "Assuming a message must be real because it looks official — phishing messages are specifically designed to imitate legitimate communication.",
      verifyNote: "Reporting channels and official verification steps vary by institution — check current campus IT guidance for how to report phishing."
    },
    realWorldExample:
      "Marcus Reed received a message claiming financial aid would be canceled in ten minutes unless Marcus logged in through a shortened link. Recognizing the urgency tactic, Marcus went directly to the official financial aid portal, where the unchanged aid status confirmed the message was fake.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What is the safest response to an urgent, suspicious account email?",
        type: "multiple_choice",
        options: [
          "Open the official website directly and verify there",
          "Reply with Marcus Reed's password",
          "Forward it to every classmate without reporting it",
          "Click the link immediately to avoid losing access"
        ],
        correctAnswer: "Open the official website directly and verify there",
        explanation: "Verifying through a known, trusted channel avoids relying on a potentially malicious link."
      },
      {
        id: "kc2",
        question: "Why do phishing messages often create urgency or fear?",
        type: "multiple_choice",
        options: [
          "It's a legal requirement for official messages",
          "It reduces the chance the reader will pause to verify before acting",
          "It makes the message load faster",
          "It has no real purpose"
        ],
        correctAnswer: "It reduces the chance the reader will pause to verify before acting",
        explanation: "Urgency is a deliberate manipulation tactic designed to bypass careful, verified decision-making."
      }
    ],
    sourceIds: ["cisa-phishing", "ftc-phishing"],
    achievementId: "phishing-pattern-spotter",
    unlocks: "ep15",
    accessibilitySummary: "The suspicious message is presented as plain text with red-flag phrases identified in words, not solely through color coding.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep15",
    primaryStudent: LESSON_CHARACTERS.ep15,
    act: 3,
    title: "Handle Official Documents Carefully",
    subtitle: "IDs, transcripts, and signed forms are not ordinary homework",
    estimatedMinutes: 11,
    learningObjectives: [
      "Identify categories of official documents that require extra care",
      "Use approved portals instead of public links or random tools",
      "Confirm sharing destinations before sending sensitive documents",
      "Recognize why financial, tax, aid, and employment records deserve this same careful handling"
    ],
    personalizationSlots: ["ep15.context"],
    approvedStoryFragments: ["ep15.context"],
    openingNarrative:
      "Nia Thompson, a Civil Engineering major at Angelo State, needs to send a transcript to a scholarship office and considers placing it in a public cloud folder because the link is easy to share.",
    scenario: {
      prompt:
        "Nia Thompson has to decide how to send an official transcript containing a birth date, student ID number, and academic record.",
      type: "sort_safe_unsafe"
    },
    choices: [
      {
        id: "a",
        text: "Use the approved scholarship portal or the official recipient's verified, private channel",
        whyChosen: "Official records need controlled handling, not convenience-first sharing.",
        possibleBenefit: "Nia Thompson keeps sensitive information limited to the intended, verified recipient.",
        possibleCost: "May take a few extra minutes to locate the correct approved process.",
        possibleRisk: "None significant.",
        immediateEffect: { privacyAwareness: 4, integrity: 1 },
        futureEffect: "This habit protects every future official document Nia Thompson needs to send.",
        whatCouldChangeThisOutcome: "Nothing changes this outcome — using the approved, private channel is the correct choice for any official record.",
        sourceIds: ["ferpa-overview", "studentaid-gov"]
      },
      {
        id: "b",
        text: "Place the transcript in a public cloud folder because the link is easy to share",
        whyChosen: "It feels like the fastest way to share the file right now.",
        possibleBenefit: "None significant — convenience is the only upside, and it comes at a real privacy cost.",
        possibleCost: "Anyone with the link — not just the intended recipient — can view sensitive personal information.",
        possibleRisk: "Exposure of a birth date, student ID, and academic record to anyone who finds or is forwarded the link.",
        immediateEffect: { privacyAwareness: -4 },
        futureEffect: "Once a public link is shared, it's difficult to know who has accessed it or whether it's been forwarded further.",
        whatCouldChangeThisOutcome: "Nothing makes a public link a safe choice for an official record like this — the sharing method itself is the problem.",
        sourceIds: ["ferpa-overview"]
      },
      {
        id: "c",
        text: "Upload the transcript to an unfamiliar free file-conversion website to resize it first",
        whyChosen: "The file needs to be a smaller size and this seemed like a quick fix.",
        possibleBenefit: "May successfully resize the file.",
        possibleCost: "An unfamiliar, unapproved third-party tool now has a copy of a sensitive official document.",
        possibleRisk: "Unknown data handling practices at an unvetted site could expose the document further.",
        immediateEffect: { privacyAwareness: -2 },
        futureEffect: "The document's data handling is now outside Nia Thompson's control, with no way to verify what happens to it.",
        whatCouldChangeThisOutcome: "Asking the receiving office directly about accepted formats and file-size limits before using any third-party tool.",
        sourceIds: ["ferpa-overview"]
      }
    ],
    immediateConsequences: {
      a: "Nia Thompson's transcript reaches only the intended, verified recipient.",
      b: "The transcript's sensitive information is now exposed to anyone with the link.",
      c: "A copy of the sensitive document now exists on an unverified third-party site."
    },
    oneYearConsequences: {
      a: "Nia Thompson has a reliable, trusted process for handling every official document that comes up.",
      b: "If the link was found or forwarded, Nia Thompson may face identity-theft or privacy-related consequences.",
      c: "Nia Thompson has no way to confirm whether the uploaded copy was deleted or retained by the third-party site."
    },
    longTermConsequences: {
      a: "Nia Thompson turns careful handling of official records — including future financial, tax, aid, and employment documents — into a durable, protective habit.",
      b: "A pattern of using convenient-but-insecure sharing methods for sensitive documents creates repeated exposure risk.",
      c: "Relying on unvetted third-party tools for sensitive documents is a recurring, avoidable privacy risk."
    },
    recoveryPath:
      "If Nia Thompson shares a sensitive document insecurely, contacting the issuing office immediately, removing public access to the link if possible, and monitoring for identity-theft warning signs can limit the impact. Most situations are recoverable with prompt action.",
    conceptExplanation: {
      what: "Official documents — IDs, transcripts, financial-aid forms, health forms, signed forms, and employment records — often contain birth dates, addresses, and identifiers that require more careful handling than ordinary coursework.",
      why: "These documents exist as verified records of identity and status, which makes them valuable targets for identity theft and fraud if mishandled.",
      how: "It may help to use approved portals, confirm the destination, and check sharing permissions before sending any official document.",
      cost: "It takes a bit more time and care than the fastest, most convenient sharing option.",
      risks: "A public or unverified sharing method can expose sensitive personal information to unintended recipients.",
      whoMayBenefit: "Every student who submits transcripts, aid forms, health records, or signed official documents.",
      whoMayNotBenefit: "There's no legitimate case where convenience should outweigh the privacy of an official document.",
      misunderstandingRisk: "Assuming a document is 'just paperwork' rather than recognizing it as sensitive personal information.",
      verifyNote: "The same careful-handling principle extends to financial, tax, banking, and employment documents, a skill Nia Thompson is preparing to carry forward."
    },
    realWorldExample:
      "Nia Thompson placed a transcript in a public cloud folder because the link was easy to share with a scholarship committee. The link was later found in a search engine's index, exposing Nia's birth date and academic record to anyone who came across it.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Where should an official transcript normally be sent?",
        type: "multiple_choice",
        options: [
          "Through the approved recipient or official portal",
          "A public social-media post",
          "Any random file-conversion website",
          "Whichever method is fastest, regardless of privacy"
        ],
        correctAnswer: "Through the approved recipient or official portal",
        explanation: "Official records require controlled handling through verified, approved channels."
      },
      {
        id: "kc2",
        question: "Why does careful handling of official documents matter for future financial or tax records too?",
        type: "multiple_choice",
        options: [
          "It doesn't — financial documents are handled completely differently",
          "The same privacy and verification principles apply to financial, tax, aid, and employment documents",
          "Only academic records ever need to be protected",
          "Financial documents are never sensitive"
        ],
        correctAnswer: "The same privacy and verification principles apply to financial, tax, aid, and employment documents",
        explanation: "The habit of using approved, verified channels for sensitive records carries forward directly into financial and employment contexts."
      }
    ],
    sourceIds: ["ferpa-overview", "studentaid-gov"],
    achievementId: "private-document-protector",
    unlocks: "ep16",
    accessibilitySummary: "Document-handling options are presented as a plain-text sorting task without relying on icon meaning alone.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep16",
    primaryStudent: LESSON_CHARACTERS.ep16,
    act: 4,
    title: "Control Sharing Permissions and Digital Footprints",
    subtitle: "Know who can see, edit, and reshare Gabriel Torres's work",
    estimatedMinutes: 10,
    learningObjectives: [
      "Distinguish view, comment, and edit permissions",
      "Compare organization-only, anyone-with-link, and public sharing levels",
      "Test a shared link as the receiver before submitting it",
      "Recognize how public posts shape a broader digital footprint"
    ],
    personalizationSlots: ["ep16.context"],
    approvedStoryFragments: ["ep16.context"],
    openingNarrative:
      "Gabriel Torres, a Communication major at Angelo State, watches a professor hit an access-denied screen after Gabriel's group submits a shared presentation link.",
    scenario: {
      prompt:
        "Gabriel Torres's group needs to share a document with the professor. What sharing setting actually guarantees the professor can open it?",
      type: "choose_sharing_permission"
    },
    choices: [
      {
        id: "a",
        text: "Set the link to allow viewing by anyone with the link, and test it in a private browser window first",
        whyChosen: "Testing from outside the group's signed-in view confirms it will actually work for the professor.",
        possibleBenefit: "Removes the guesswork — Gabriel Torres sees exactly what the professor will experience.",
        possibleCost: "Takes an extra minute to test before sending.",
        possibleRisk: "None significant if only the minimum necessary access level is granted.",
        immediateEffect: { sharingControl: 4, professionalConfidence: 1 },
        futureEffect: "This becomes a reliable pre-submission check for every future shared document.",
        whatCouldChangeThisOutcome: "Using the most restrictive setting that still allows the intended recipient access.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "b",
        text: "Leave the default organization-only sharing setting without checking",
        whyChosen: "It feels like it should work without needing to check.",
        possibleBenefit: "No extra testing time spent.",
        possibleCost: "If the professor's account isn't part of the same organization scope, they hit an access-denied screen.",
        possibleRisk: "A group presentation appears incomplete or unsubmitted due to an access error, not missing work.",
        immediateEffect: { sharingControl: -2 },
        futureEffect: "The same access problem is likely to recur on future shared assignments.",
        whatCouldChangeThisOutcome: "Testing the actual link from outside the group's own accounts before submission.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "c",
        text: "Make the document fully public with edit access for anyone",
        whyChosen: "It feels like the simplest way to guarantee nobody has trouble opening it.",
        possibleBenefit: "Almost certainly avoids an access-denied error.",
        possibleCost: "Grants far more access than necessary — anyone online could find and edit the document.",
        possibleRisk: "Uninvited changes, deletions, or exposure of group members' work to unintended viewers.",
        immediateEffect: { sharingControl: -3, privacyAwareness: -1 },
        futureEffect: "Using maximum-permission sharing as a default habit creates recurring, unnecessary exposure.",
        whatCouldChangeThisOutcome: "Using the minimum permission level that still reliably reaches the intended recipient.",
        sourceIds: ["asu-core-values"]
      }
    ],
    immediateConsequences: {
      a: "The professor opens Gabriel Torres's presentation without any issue.",
      b: "The professor hits an access-denied screen and the group scrambles to fix it live.",
      c: "The professor can open it, but so can anyone else who finds the link, with full edit access."
    },
    oneYearConsequences: {
      a: "Gabriel Torres's group work consistently reaches its intended audience without access problems.",
      b: "Access errors continue to create stressful, avoidable moments during group presentations.",
      c: "Overly public sharing settings create ongoing, low-level exposure risk across multiple projects."
    },
    longTermConsequences: {
      a: "Gabriel Torres's habit of testing and matching permission to purpose supports reliable collaboration throughout college and future work.",
      b: "Repeated access failures can affect group grades and professional credibility.",
      c: "A pattern of over-permissioned sharing can expose increasingly sensitive group and personal work over time."
    },
    recoveryPath:
      "Gabriel Torres can fix a sharing permission the moment an access problem is noticed; updating the setting live, even during a presentation, is a normal and fully recoverable fix.",
    conceptExplanation: {
      what: "Sharing permissions define who can view, comment, or edit a document, and at what scope — private, organization-only, anyone-with-link, or fully public.",
      why: "These settings exist to match access to actual need, protecting both privacy and the integrity of shared work.",
      how: "It may help to test a link as the receiver would see it, and to choose the most restrictive setting that still works for the intended audience.",
      cost: "Testing and adjusting permissions takes a small amount of extra time before submission.",
      risks: "Overly broad permissions can expose sensitive group work to unintended viewers or allow uninvited edits.",
      whoMayBenefit: "Any student sharing documents, presentations, or files with a professor, group, or the public.",
      whoMayNotBenefit: "There's no real downside to testing permissions — it costs a small amount of time regardless of the audience size.",
      misunderstandingRisk: "Assuming that because a link 'works' for the person who created it, it will automatically work the same way for everyone else.",
      verifyNote: "Sharing permissions vary by platform, so Gabriel Torres should check the specific tool used for group work."
    },
    realWorldExample:
      "Gabriel Torres's group submitted a shared presentation link with organization-only access; the professor's account wasn't recognized in that scope, resulting in an access-denied screen during the actual presentation — a thirty-second test from an outside browser would have caught it in advance.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "How can a group verify that a professor will actually be able to open a shared link?",
        type: "multiple_choice",
        options: [
          "Open it in a private browser window or use the platform's sharing checker",
          "Assume it works because the group members can open it",
          "Make every file public forever, just in case",
          "Send the link without checking anything"
        ],
        correctAnswer: "Open it in a private browser window or use the platform's sharing checker",
        explanation: "Testing from outside the group's own signed-in accounts verifies what an outside viewer will actually experience."
      },
      {
        id: "kc2",
        question: "What is a risk of setting a shared document to fully public with edit access?",
        type: "multiple_choice",
        options: [
          "There is no risk — it's the safest option",
          "Anyone online could find and potentially edit the document without permission",
          "It automatically improves the document's formatting",
          "It's required for every group project"
        ],
        correctAnswer: "Anyone online could find and potentially edit the document without permission",
        explanation: "Public edit access grants far more permission than most group assignments actually require."
      }
    ],
    sourceIds: ["asu-core-values"],
    achievementId: "permission-controller",
    unlocks: "ep17",
    accessibilitySummary: "Sharing-permission levels are described in plain text with explicit access scope, not conveyed through icons alone.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep17",
    primaryStudent: LESSON_CHARACTERS.ep17,
    act: 4,
    title: "Run a Weekly Digital Reset",
    subtitle: "One short routine that prevents small problems from piling up",
    estimatedMinutes: 9,
    learningObjectives: [
      "Identify what to check during a weekly digital reset",
      "Move files into proper course folders as part of a routine",
      "Catch changed deadlines and missing work early",
      "Explain why a repeatable routine matters more than a perfect one"
    ],
    personalizationSlots: ["ep17.context"],
    approvedStoryFragments: ["ep17.context"],
    openingNarrative:
      "Hannah Kim, a Psychology major at Angelo State, has been meaning to establish a weekly digital check-in but keeps postponing it for whatever feels most urgent that day.",
    scenario: {
      prompt:
        "Hannah Kim sets aside fifteen minutes on a Sunday to check email, LMS announcements, calendar, deadlines, grades, and the Downloads folder.",
      type: "multiple_choice"
    },
    choices: [
      {
        id: "a",
        text: "Build a consistent weekly time slot for the full reset routine",
        whyChosen: "A repeatable time slot is more likely to actually happen every week.",
        possibleBenefit: "Hannah Kim catches changed deadlines, missing work, and file clutter before they become emergencies.",
        possibleCost: "Requires committing fifteen minutes every week, even during busy stretches.",
        possibleRisk: "None significant.",
        immediateEffect: { calendarReadiness: 3, resilience: 2, professionalConfidence: 1 },
        futureEffect: "This routine consistently catches small problems while they're still easy to fix.",
        whatCouldChangeThisOutcome: "Pairing the reset with an existing weekly habit, like a Sunday routine, to make it easier to remember.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "b",
        text: "Do a full check only during finals week",
        whyChosen: "It feels like the moment it matters most.",
        possibleBenefit: "Some review still happens before the highest-stakes period.",
        possibleCost: "Weeks of small changes and missed items accumulate before ever being caught.",
        possibleRisk: "A changed exam date or missing assignment might not surface until it's too late to fix.",
        immediateEffect: { calendarReadiness: -2 },
        futureEffect: "Small problems accumulate silently for most of the semester.",
        whatCouldChangeThisOutcome: "Moving even a shortened version of the check to a weekly cadence instead of once a semester.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "c",
        text: "Delete every unread email each week without reviewing it",
        whyChosen: "It feels like a fast way to keep the inbox under control.",
        possibleBenefit: "A cleaner-looking inbox.",
        possibleCost: "Important changes — deadline shifts, group invitations, official notices — can be lost without ever being seen.",
        possibleRisk: "Missing a genuinely important message because it was deleted unread.",
        immediateEffect: { calendarReadiness: -3, communicationClarity: -1 },
        futureEffect: "Important updates continue to be missed as a direct result of this habit.",
        whatCouldChangeThisOutcome: "Scanning subject lines before deleting, rather than deleting in bulk without any review.",
        sourceIds: ["asu-core-values"]
      }
    ],
    immediateConsequences: {
      a: "Hannah Kim catches a changed exam date during the very first reset, well before it would have been a surprise.",
      b: "Several weeks pass with no visibility into changes or missing work.",
      c: "An important group-project message is deleted before Hannah Kim ever sees it."
    },
    oneYearConsequences: {
      a: "Hannah Kim has made the weekly reset an automatic habit that consistently prevents last-minute surprises.",
      b: "Occasional last-minute discoveries continue to create avoidable stress.",
      c: "Missed important messages continue to cause friction with group members and professors."
    },
    longTermConsequences: {
      a: "Hannah Kim carries a reliable weekly maintenance habit into future jobs and personal systems.",
      b: "Infrequent check-ins tend to let small problems grow into larger, harder-to-fix ones.",
      c: "Bulk-deleting communication without review is a recurring, avoidable source of missed information."
    },
    recoveryPath:
      "Hannah Kim can resume a missed weekly reset the next week; there is no penalty for an inconsistent start, and even an occasional reset is better than none at all.",
    conceptExplanation: {
      what: "A weekly digital reset is a short, repeatable routine that reviews email, LMS announcements, calendar, deadlines, grades, missing work, and the Downloads folder.",
      why: "It exists to catch small changes and problems early, before they compound into missed deadlines or lost work.",
      how: "It may help by turning maintenance into a predictable, low-effort habit rather than a reactive scramble.",
      cost: "It requires committing a consistent block of time — typically ten to twenty minutes — every week.",
      risks: "A reset that's skipped for too many weeks in a row loses much of its preventive value.",
      whoMayBenefit: "Every student managing multiple courses, deadlines, and communication channels.",
      whoMayNotBenefit: "There's little downside to this habit — it costs a small, predictable amount of time each week.",
      misunderstandingRisk: "Treating the weekly reset as extra schoolwork rather than maintenance that protects work already completed.",
      verifyNote: "This is a general workflow practice rather than a platform-specific rule; Hannah Kim can adapt the checklist to the tools used in Hannah's courses."
    },
    realWorldExample:
      "Hannah Kim spent fifteen minutes every Sunday checking the learning management system, calendar, and files. A changed exam date was caught during one of these routine resets, days before it would otherwise have been a surprise.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Which task belongs in a weekly digital reset?",
        type: "multiple_choice",
        options: [
          "Review announcements, deadlines, and missing submissions",
          "Delete every email without reading it",
          "Wait until finals week to check anything",
          "Ignore the Downloads folder entirely"
        ],
        correctAnswer: "Review announcements, deadlines, and missing submissions",
        explanation: "The reset reconnects all course systems on a predictable, repeatable schedule."
      },
      {
        id: "kc2",
        question: "Why is a repeatable weekly routine more valuable than an occasional deep check?",
        type: "multiple_choice",
        options: [
          "It isn't — occasional checks are just as effective",
          "It catches small changes and problems while they're still easy to fix",
          "It takes more time overall",
          "It only matters during finals week"
        ],
        correctAnswer: "It catches small changes and problems while they're still easy to fix",
        explanation: "A consistent cadence prevents small issues from accumulating into larger, harder-to-fix problems."
      }
    ],
    sourceIds: ["asu-core-values"],
    achievementId: "weekly-digital-reset-builder",
    unlocks: "ep18",
    accessibilitySummary: "The weekly reset checklist is presented as a plain, ordered text list suitable for screen readers.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep18",
    primaryStudent: LESSON_CHARACTERS.ep18,
    act: 4,
    title: "Use the Final Submission Check",
    subtitle: "Sixty seconds before sending important work",
    estimatedMinutes: 9,
    learningObjectives: [
      "Verify instructions, format, and completeness before submitting",
      "Confirm file name, size, and readability",
      "Check destination, permissions, and privacy before sending",
      "Explain why this pause matters most for high-stakes documents"
    ],
    personalizationSlots: ["ep18.context"],
    approvedStoryFragments: ["ep18.context"],
    openingNarrative:
      "Amir Davis, an English major at Angelo State, has just finished a strong final paper and is eager to upload it without a second look.",
    scenario: {
      prompt:
        "The assignment instructions specifically required a PDF, but Amir Davis's file is still saved in its original editing format.",
      type: "multiple_choice"
    },
    choices: [
      {
        id: "a",
        text: "Run the final check: instructions, format, file name, and destination, before uploading",
        whyChosen: "A sixty-second pause catches format and version problems before they become submission failures.",
        possibleBenefit: "Amir Davis catches the wrong file format before the professor ever sees it.",
        possibleCost: "A short pause before what already felt like a finished task.",
        possibleRisk: "None significant.",
        immediateEffect: { submissionReliability: 4, accessibilityAwareness: 1, professionalConfidence: 2 },
        futureEffect: "This check becomes an automatic final step before every future submission.",
        whatCouldChangeThisOutcome: "Building a personal checklist to make the final check consistent every time.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "b",
        text: "Upload the file exactly as it is, in the original editing format",
        whyChosen: "The writing itself is finished, so uploading feels like the natural next step.",
        possibleBenefit: "Saves a minute of extra checking.",
        possibleCost: "The professor may not be able to open a file in the wrong format.",
        possibleRisk: "A completed, high-quality paper receives no credit simply because it couldn't be opened.",
        immediateEffect: { submissionReliability: -3 },
        futureEffect: "Format mismatches can recur on every assignment with a specific required file type.",
        whatCouldChangeThisOutcome: "Rereading the assignment instructions specifically for format requirements before uploading.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "c",
        text: "Skip the instructions since the writing itself feels complete",
        whyChosen: "The hardest part — the actual writing — already feels done.",
        possibleBenefit: "Feels like the assignment is finished sooner.",
        possibleCost: "Submission requirements are part of the actual task, not a separate afterthought.",
        possibleRisk: "Missing a format, naming, or destination requirement that affects whether the work counts as submitted at all.",
        immediateEffect: { submissionReliability: -2, accessibilityAwareness: -1 },
        futureEffect: "Instruction-related submission errors are likely to recur without a consistent final check.",
        whatCouldChangeThisOutcome: "Treating the instructions as part of the assignment itself, checked right up until the moment of submission.",
        sourceIds: ["asu-core-values"]
      }
    ],
    immediateConsequences: {
      a: "Amir Davis catches the format mismatch and fixes it before submitting.",
      b: "The professor may be unable to open the file at all.",
      c: "Amir Davis risks a requirement being missed despite strong actual writing."
    },
    oneYearConsequences: {
      a: "Amir Davis's submissions are consistently complete, correctly formatted, and reach the right destination.",
      b: "Format-related submission problems continue to create avoidable friction with professors.",
      c: "Instruction-related points continue to be lost on otherwise strong work."
    },
    longTermConsequences: {
      a: "Amir Davis's reliable final-check habit protects the quality of completed work across college and future jobs.",
      b: "Repeated technical submission failures can undermine an otherwise strong academic record.",
      c: "Treating instructions as optional once writing is 'done' is a durable and preventable source of lost credit."
    },
    recoveryPath:
      "If Amir Davis catches a format or destination mistake after submission but before the deadline, a quick resubmission with the correct file usually resolves it cleanly. This is a normal, low-stakes fix.",
    conceptExplanation: {
      what: "The final submission check confirms instructions were followed, the file is the correct version and format, and the destination and permissions are correct — all in about sixty seconds before sending.",
      why: "It exists because strong work can still fail to count if it's in the wrong format, sent to the wrong place, or missing a required element.",
      how: "It may help by catching small, easily fixed problems before they become real submission failures.",
      cost: "It takes about a minute of deliberate review right before what already feels like a finished task.",
      risks: "Skipping this check treats submission requirements as separate from the 'real' work, when they're actually part of it.",
      whoMayBenefit: "Every student submitting any assignment, application, or official document.",
      whoMayNotBenefit: "There's no real downside to this habit — it costs about a minute regardless of the assignment.",
      misunderstandingRisk: "Believing that finishing the writing or project itself is the same as finishing the assignment as specified.",
      verifyNote: "Specific format and submission requirements vary by course and assignment — always check the actual instructions rather than assuming a default."
    },
    realWorldExample:
      "Amir Davis submitted a fully complete essay in the wrong file format because the instructions required a PDF specifically; the professor couldn't open the file, and the otherwise strong work initially registered as a missing submission until it was corrected.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Which question belongs in the final submission check?",
        type: "multiple_choice",
        options: [
          "Am I sending the correct final version, in the correct format, to the correct place?",
          "Can I skip the instructions because I finished writing?",
          "Should I delete the file before upload?",
          "Is the file the exact one I first started writing?"
        ],
        correctAnswer: "Am I sending the correct final version, in the correct format, to the correct place?",
        explanation: "Version, format, and destination are all central parts of a complete submission, not separate afterthoughts."
      },
      {
        id: "kc2",
        question: "Why might a fully written, high-quality paper still receive no credit?",
        type: "multiple_choice",
        options: [
          "High-quality writing always guarantees credit regardless of format",
          "It could be submitted in the wrong format or sent to the wrong destination",
          "Professors never check file formats",
          "This situation cannot actually happen"
        ],
        correctAnswer: "It could be submitted in the wrong format or sent to the wrong destination",
        explanation: "Submission requirements are part of the assignment — strong content doesn't override a technical submission failure."
      }
    ],
    sourceIds: ["asu-core-values"],
    achievementId: "submission-quality-checker",
    unlocks: "ep19",
    accessibilitySummary: "The final-check checklist is presented as plain, ordered text compatible with screen readers.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep19",
    primaryStudent: LESSON_CHARACTERS.ep19,
    act: 4,
    title: "Recover Professionally When Technology Fails",
    subtitle: "Document the problem and communicate quickly",
    estimatedMinutes: 10,
    learningObjectives: [
      "Capture useful evidence when a technical failure occurs",
      "Preserve the final file while attempting a reasonable alternative",
      "Contact the correct person promptly with specific details",
      "Communicate calmly and professionally under time pressure"
    ],
    personalizationSlots: ["ep19.context"],
    approvedStoryFragments: ["ep19.context"],
    openingNarrative:
      "Elena Morales, a Social Work major at Angelo State, encounters an unfamiliar upload-portal error at 8:40 p.m., twenty minutes before a paper is due.",
    scenario: {
      prompt:
        "Elena Morales has the finished paper ready but the portal will not accept the upload. The deadline is approaching fast.",
      type: "identify_missing_information"
    },
    choices: [
      {
        id: "a",
        text: "Screenshot the error, keep the final file safe, and email the professor with specific details before the deadline",
        whyChosen: "Documenting the problem and communicating promptly gives the professor everything needed to respond fairly.",
        possibleBenefit: "Elena Morales provides clear evidence of a good-faith effort made before the deadline passed.",
        possibleCost: "A few minutes spent capturing evidence instead of only retrying the upload.",
        possibleRisk: "None significant.",
        immediateEffect: { resilience: 4, communicationClarity: 3, professionalConfidence: 1 },
        futureEffect: "This response pattern consistently produces fair outcomes when technology fails.",
        whatCouldChangeThisOutcome: "Trying one reasonable alternative (a different browser or device) before escalating, if time allows.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "b",
        text: "Keep retrying the same upload repeatedly without documenting anything",
        whyChosen: "It feels like the fastest path to actually finishing the submission.",
        possibleBenefit: "Might work if the issue was temporary.",
        possibleCost: "If the deadline passes with no evidence of the attempt, there's nothing to show what happened.",
        possibleRisk: "A late submission with no documentation is harder to resolve fairly.",
        immediateEffect: { resilience: -2, communicationClarity: -1 },
        futureEffect: "Without evidence, Elena Morales has a weaker position when requesting any accommodation.",
        whatCouldChangeThisOutcome: "Pausing to capture a screenshot even while continuing to retry the upload.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "c",
        text: "Wait until the next morning to send a vague message about the problem",
        whyChosen: "It feels easier to deal with it after some rest.",
        possibleBenefit: "None — delaying communication when evidence and an alternative were available at the time doesn't help the situation.",
        possibleCost: "A vague, delayed message with no evidence is much harder to resolve favorably.",
        possibleRisk: "The professor has no way to verify what actually happened or when.",
        immediateEffect: { resilience: -3, communicationClarity: -2 },
        futureEffect: "A pattern of delayed, vague technology-failure messages can affect how professors respond to future issues.",
        whatCouldChangeThisOutcome: "Sending even a brief, specific message the same night, with follow-up details the next morning if needed.",
        sourceIds: ["asu-core-values"]
      }
    ],
    immediateConsequences: {
      a: "The professor receives a clear, well-documented explanation before the deadline passes.",
      b: "Elena Morales may run out the clock with no record of the actual problem.",
      c: "The professor receives a vague message with no evidence, hours after the fact."
    },
    oneYearConsequences: {
      a: "Elena Morales has a reliable, professional pattern for handling technology failures fairly.",
      b: "Undocumented late submissions continue to be harder to resolve in Elena Morales's favor.",
      c: "Vague, delayed communication continues to create friction and slower resolutions."
    },
    longTermConsequences: {
      a: "Elena Morales carries this calm, evidence-based recovery pattern beyond college as a durable professional skill.",
      b: "A pattern of undocumented technical failures can erode trust with instructors over time.",
      c: "Delayed, vague communication habits can affect professional relationships and outcomes throughout a career."
    },
    recoveryPath:
      "Even if Elena Morales handles a technology failure poorly at first, sending a late but honest, specific explanation with any available evidence is better than sending nothing at all.",
    conceptExplanation: {
      what: "Professional technology-failure recovery means capturing evidence (like a screenshot), preserving the final file, trying one reasonable alternative, and contacting the right person promptly with specific details.",
      why: "It exists because technology can fail even with good preparation, and a documented, prompt response supports a fair resolution.",
      how: "It may help by giving the professor or office clear evidence of a good-faith effort made on time.",
      cost: "It takes a few minutes of documentation during an already stressful moment.",
      risks: "A vague, delayed, or undocumented report is much harder to resolve fairly, even when the original problem was not Elena Morales's fault.",
      whoMayBenefit: "Every student, since technology failures happen unpredictably regardless of preparation.",
      whoMayNotBenefit: "There's no real downside to this habit — documentation costs a few minutes and only helps the outcome.",
      misunderstandingRisk: "Assuming a professor will simply know what happened without a specific, timely explanation.",
      verifyNote: "Specific late-work and technical-difficulty policies vary by course — check the syllabus for what's expected in this situation."
    },
    realWorldExample:
      "Elena Morales, at 8:40 p.m. with a portal error twenty minutes before a deadline, took a screenshot, kept the final file untouched, and emailed the professor with the course, assignment, exact error, and time — receiving a same-night reply extending the deadline slightly to resolve the technical issue.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What should a useful technology-problem message include?",
        type: "multiple_choice",
        options: [
          "Course or office, task, time, error, and steps already tried",
          "Just the word 'it broke'",
          "Only a complaint, with no file or evidence",
          "Nothing — wait for the professor to ask"
        ],
        correctAnswer: "Course or office, task, time, error, and steps already tried",
        explanation: "Specific details support a fair, timely response from the professor or office."
      },
      {
        id: "kc2",
        question: "Why is documenting a technology failure with a screenshot useful?",
        type: "multiple_choice",
        options: [
          "It's not useful — professors never ask for evidence",
          "It provides evidence of a good-faith effort made before the deadline",
          "It automatically extends every deadline",
          "It replaces the need to contact anyone"
        ],
        correctAnswer: "It provides evidence of a good-faith effort made before the deadline",
        explanation: "Evidence supports a fair resolution and shows the problem was real and timely."
      }
    ],
    sourceIds: ["asu-core-values"],
    achievementId: "digital-recovery-planner",
    unlocks: "ep20",
    accessibilitySummary: "The error-recovery scenario is presented as plain text describing the error, not relying on a simulated screenshot image alone.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep20",
    primaryStudent: LESSON_CHARACTERS.ep20,
    act: 4,
    title: "Freshman Digital Readiness Simulation",
    subtitle: "One realistic week, every skill combined",
    estimatedMinutes: 16,
    learningObjectives: [
      "Combine file organization, communication, research, privacy, and recovery skills in one scenario",
      "Prioritize competing demands under real time pressure",
      "Apply the correct sequence of actions across a realistic week",
      "Reflect on readiness to carry these habits into future coursework and beyond"
    ],
    personalizationSlots: ["ep20.context"],
    approvedStoryFragments: ["ep20.context"],
    openingNarrative:
      "Logan Carter, a Criminal Justice major at Angelo State, faces the busiest week of the semester: a syllabus change, a group document invitation, a research deadline, and a suspicious financial-aid message.",
    scenario: {
      prompt:
        "In the same week, Logan Carter faces: a syllabus update changing a deadline, a group-document invitation needing the right sharing permissions, a research assignment requiring credible sources, a decision about how much AI help is actually allowed, a suspicious account email, an official scholarship document to send, a file to submit correctly, a portal error, a professor email to write, and a source to verify before citing it. What order of action best protects both urgent security risks and academic responsibilities?",
      type: "rank_tradeoffs"
    },
    choices: [
      {
        id: "a",
        text: "Verify the suspicious email first, then update the calendar, set correct sharing, use the approved document portal for the scholarship form, verify the source, and confirm the final submission",
        whyChosen: "This sequence addresses the most time-sensitive security risk first, then works through academic responsibilities in a logical order.",
        possibleBenefit: "Logan Carter handles every part of the week deliberately, addressing security before it can compound into a bigger problem.",
        possibleCost: "Requires organizing a genuinely busy week rather than reacting to whichever task feels loudest.",
        possibleRisk: "None significant — this sequence reflects the full set of habits built across the course.",
        immediateEffect: { fileOrganization: 2, accountSecurity: 3, sourceJudgment: 2, submissionReliability: 3, integrity: 2 },
        futureEffect: "Logan Carter enters the next semester with a proven, repeatable system for handling a genuinely demanding week.",
        whatCouldChangeThisOutcome: "Nothing changes this outcome — this sequence reflects the safest, most complete response to every element of the week.",
        sourceIds: ["asu-core-values", "cisa-phishing", "acrl-info-literacy", "ferpa-overview"]
      },
      {
        id: "b",
        text: "Click through every message quickly to clear the inbox, planning to sort out the details later",
        whyChosen: "Speed feels like the only way to keep up with a genuinely overwhelming week.",
        possibleBenefit: "The inbox looks emptier in the short term.",
        possibleCost: "Speed without verification increases the risk of missing the syllabus change, mishandling the scholarship document, or worse, engaging with the suspicious email.",
        possibleRisk: "High — clicking a phishing link or missing a hidden deadline are both realistic outcomes of this approach.",
        immediateEffect: { accountSecurity: -3, calendarReadiness: -2, resilience: -1 },
        futureEffect: "Unresolved risks from this week are likely to surface later as bigger problems.",
        whatCouldChangeThisOutcome: "Slowing down enough to triage the security risk and the real deadlines before processing everything else.",
        sourceIds: ["cisa-phishing"]
      },
      {
        id: "c",
        text: "Ignore every message until the research assignment is finished",
        whyChosen: "Focusing on one task at a time feels manageable.",
        possibleBenefit: "The research assignment gets full, undivided attention.",
        possibleCost: "The suspicious email, the syllabus change, and the scholarship deadline all go unaddressed in the meantime.",
        possibleRisk: "Some messages contain real, time-sensitive responsibilities that don't wait for a convenient moment.",
        immediateEffect: { accountSecurity: -2, calendarReadiness: -2 },
        futureEffect: "Ignoring time-sensitive messages tends to convert manageable problems into urgent ones.",
        whatCouldChangeThisOutcome: "Triaging urgent security and deadline items first, then protecting focused time for the research work.",
        sourceIds: ["cisa-phishing", "asu-core-values"]
      }
    ],
    immediateConsequences: {
      a: "Logan Carter closes out the week with every responsibility handled and no security exposure.",
      b: "Logan Carter may have engaged with a phishing attempt or missed a real deadline in the rush to clear the inbox.",
      c: "Logan Carter finishes the research assignment but discovers unresolved, time-sensitive problems afterward."
    },
    oneYearConsequences: {
      a: "Logan Carter has a genuinely proven system for handling high-pressure weeks across every area of digital life.",
      b: "A rushed, unverified approach to a demanding week creates real risk of recurring security or academic problems.",
      c: "Single-tasking through demanding weeks without triage continues to let urgent items slip through."
    },
    longTermConsequences: {
      a: "Logan Carter carries this combined skill set — organization, communication, research, privacy, security, and recovery — into a reliable professional digital workflow after college.",
      b: "Speed-over-verification habits, if they continue, create meaningful cumulative risk across a full degree.",
      c: "Without a triage system, demanding weeks will continue to feel overwhelming rather than manageable."
    },
    recoveryPath:
      "Even when Logan Carter's week goes sideways, reviewing the syllabus and calendar, verifying account security, and reaching out honestly about any late or mishandled item remain available paths forward.",
    conceptExplanation: {
      what: "Digital readiness is the ability to calmly and repeatably combine file organization, communication, research, privacy, security, and recovery skills under real, competing time pressure.",
      why: "A single skill practiced in isolation is useful, but real weeks require prioritizing and sequencing several skills at once.",
      how: "It may help to triage genuinely urgent security risks first, then work through academic responsibilities using the habits built across this course.",
      cost: "It requires deliberate prioritization rather than reacting to whichever task feels loudest in the moment.",
      risks: "Treating every message with the same urgency — or the same disregard — can mean missing the one that actually matters most.",
      whoMayBenefit: "Every student who will face a genuinely demanding week — which is, realistically, every student at some point.",
      whoMayNotBenefit: "There's no real case where this combined skill set isn't useful — the value scales with how demanding the week actually is.",
      misunderstandingRisk: "Believing that digital literacy is a collection of separate, unrelated tricks rather than one integrated way of approaching a busy week.",
      verifyNote: "This illustrative scenario combines the course's skills. Real weeks will vary, but the sequence of triage and verification applies broadly."
    },
    realWorldExample:
      "Logan Carter faced a changed exam date, a group-document invitation, a scholarship form, and a suspicious login email in the same week. By verifying the security risk first, then working through the calendar, sharing settings, and submission in sequence, the entire week was resolved without a single missed deadline or security incident.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Which sequence shows the strongest overall digital workflow for a demanding week?",
        type: "multiple_choice",
        options: [
          "Verify the security alert, update the calendar, set correct sharing, use the approved document portal, and confirm the final submission",
          "Click every link quickly and sort it out later",
          "Ignore every message until one single task is finished",
          "Wait until the end of the week to look at anything"
        ],
        correctAnswer: "Verify the security alert, update the calendar, set correct sharing, use the approved document portal, and confirm the final submission",
        explanation: "This sequence protects against the most time-sensitive security risk first, then addresses academic responsibilities in a logical order."
      },
      {
        id: "kc2",
        question: "What is the central lesson of this capstone simulation?",
        type: "multiple_choice",
        options: [
          "Digital literacy is one trick that solves every problem",
          "Digital literacy is the ability to combine several skills calmly and repeatably under real pressure",
          "Only security matters; academic tasks can wait indefinitely",
          "Speed always matters more than verification"
        ],
        correctAnswer: "Digital literacy is the ability to combine several skills calmly and repeatably under real pressure",
        explanation: "The capstone deliberately combines every skill from the course into one realistic, demanding week."
      }
    ],
    sourceIds: ["asu-core-values", "cisa-phishing", "acrl-info-literacy", "ferpa-overview"],
    achievementId: "ram-ready-digital-citizen",
    unlocks: null,
    nextCourseHandoff: {
      label: "Continue to Ram Ready Financial Futures",
      url: "https://brexatlas.github.io/Financial-Literacy-Course/"
    },
    closingNarrative:
      "Logan Carter is ready to carry these habits into the next Ram Ready course.",
    accessibilitySummary: "The capstone is presented as a plain-text ranked scenario with every element described in words, not relying on a visual timeline alone.",
    reviewedDate: "2026-07-11"
  }
];
