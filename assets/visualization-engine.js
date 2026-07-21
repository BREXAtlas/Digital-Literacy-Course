// Ram Ready Digital Literacy — Accessible Visualization Engine
// Original project figures built with semantic HTML/CSS. Every figure includes
// a readable text alternative and requires no external chart library.

import { getLessonCharacter } from "../data/lesson-characters.js";

const VISUALS = {
  ep01: { title: "A folder system that scales", type: "flow", items: ["Fall 2026", "Course", "Assignment", "Drafts / Feedback / Final"], summary: "A predictable path moves from semester to course to assignment and then separates drafts, feedback, and final files." },
  ep02: { title: "Anatomy of a useful file name", type: "segments", items: ["Course", "Assignment", "Last name", "Date", "Version"], summary: "A useful file name identifies the course, assignment, owner, date, and version before the file is opened." },
  ep03: { title: "Version control timeline", type: "flow", items: ["Draft 1", "Peer review", "Revised draft", "Final checked copy"], summary: "A version timeline keeps the original draft, feedback, revision, and checked final copy distinct." },
  ep04: { title: "Submission verification loop", type: "flow", items: ["Upload", "Wait for completion", "Preview exact file", "Save receipt or screenshot"], summary: "A submission is not finished until the upload completes, the exact file is previewed, and proof is saved." },
  ep05: { title: "Professor-ready email anatomy", type: "grid", items: ["Specific subject", "Greeting", "Course and section", "Brief context", "Focused question", "Respectful closing"], summary: "A useful academic email contains a specific subject, greeting, course context, focused question, and respectful closing." },
  ep06: { title: "Ethan Nguyen's focused help request", type: "flow", items: ["Explain Ethan's context", "Show what Ethan checked", "Name Ethan's exact problem", "Ask one specific question"], summary: "Ethan's focused request makes the situation, prior effort, exact obstacle, and needed help clear." },
  ep07: { title: "Work backward from the deadline", type: "flow", items: ["Official due date", "Personal submit date", "Revision date", "Research and draft dates"], summary: "Working backward turns one deadline into earlier research, drafting, revision, and personal submission dates." },
  ep08: { title: "Digital identity layers", type: "layers", items: ["Academic accounts", "Professional presence", "Personal spaces", "Public footprint"], summary: "Academic, professional, personal, and public digital identities overlap but should be managed intentionally." },
  ep09: { title: "Choose the search tool by task", type: "compare", items: ["Web search — orientation", "Scholar search — research discovery", "Library database — filtered scholarly sources", "Course readings — assigned evidence"], summary: "Different search tools serve different purposes; the task determines which tool is most useful." },
  ep10: { title: "Source evaluation matrix", type: "grid", items: ["Authority", "Evidence", "Purpose", "Date", "Relevance", "Assignment fit"], summary: "Credibility depends on authority, evidence, purpose, date, relevance, and fit with the assignment." },
  ep11: { title: "First-pass academic reading map", type: "flow", items: ["Title and abstract", "Headings and figures", "Methods and findings", "Limitations and references"], summary: "A strategic first pass moves from the overview to evidence, methods, findings, limitations, and references." },
  ep12: { title: "Keep Owen Park's three kinds of writing separate", type: "compare", items: ["Direct quote — exact words and quotation marks", "Paraphrase — Owen's wording with citation", "Owen's analysis — Owen's reasoning connected to evidence"], summary: "Owen keeps quotations, paraphrases, and original analysis visibly separated in notes and drafts." },
  ep13: { title: "Isabel Flores's account security layers", type: "layers", items: ["Unique passphrase", "Password manager", "Multi-factor authentication", "Recovery and login alerts"], summary: "Isabel protects the account with unique credentials, secure storage, MFA, and monitored recovery methods." },
  ep14: { title: "Phishing warning pattern", type: "grid", items: ["Urgency or fear", "Unexpected sender", "Suspicious link", "Request for credentials", "Unusual attachment", "Pressure to bypass normal channels"], summary: "Phishing often combines urgency, unexpected senders, suspicious links, credential requests, attachments, and pressure." },
  ep15: { title: "Document privacy levels", type: "layers", items: ["Public course material", "Restricted class work", "Private official records", "Highly sensitive identity or financial records"], summary: "Documents need different handling depending on whether they are public, restricted, private, or highly sensitive." },
  ep16: { title: "Sharing-permission ladder", type: "flow", items: ["Only me", "Named viewers", "Named editors", "Organization link", "Anyone with link", "Public"], summary: "Each step up the permission ladder increases access and the chance of unintended sharing." },
  ep17: { title: "Weekly digital reset", type: "grid", items: ["Email", "LMS announcements", "Calendar", "Downloads", "Upcoming deadlines", "Backups"], summary: "A weekly reset checks messages, announcements, dates, files, deadlines, and backups before small problems grow." },
  ep18: { title: "Final submission dashboard", type: "grid", items: ["Correct instructions", "Final version", "Clear name", "Readable format", "Correct destination", "Proof saved"], summary: "A final submission check confirms instructions, version, name, readability, destination, and proof." },
  ep19: { title: "Technology-failure recovery flow", type: "flow", items: ["Capture the error", "Preserve the final file", "Try one reasonable alternative", "Contact the right person promptly", "Keep the response"], summary: "Professional recovery preserves evidence and the final file, tries a reasonable alternative, and communicates quickly." },
  ep20: { title: "Freshman digital-readiness dashboard", type: "meter", items: ["Files", "Communication", "Calendar", "Research", "Privacy", "AI judgment", "Submission", "Recovery"], summary: "Digital readiness combines organization, communication, planning, research, privacy, AI judgment, submission reliability, and recovery." },

  q01: { title: "How generative AI produces output", type: "flow", items: ["Input prompt", "Pattern prediction", "Generated sequence", "Human review"], summary: "Generative AI predicts a sequence from learned patterns; a human still reviews the generated result." },
  q02: { title: "Search and generation are different", type: "compare", items: ["Search — locates indexed sources", "Generation — produces a new response", "Verification — checks claims against evidence"], summary: "Search locates sources, generation produces text, and verification checks the output against evidence." },
  q03: { title: "Hallucination verification path", type: "flow", items: ["Plausible claim", "Locate the cited source", "Open and inspect it", "Confirm quotation and context", "Use or reject the claim"], summary: "A plausible claim becomes usable only after the source, quotation, and context are independently confirmed." },
  q04: { title: "Human oversight by impact", type: "layers", items: ["Low impact — brainstorming", "Moderate impact — graded work", "High impact — health, money, safety, access"], summary: "The higher the potential impact, the stronger the need for qualified human review and approval." },
  q05: { title: "Strong prompt structure", type: "segments", items: ["Role", "Task", "Context", "Constraints", "Source limits", "Output format"], summary: "A strong prompt makes the role, task, context, constraints, source limits, and output format explicit." },
  q06: { title: "Tutor loop versus answer shortcut", type: "compare", items: ["Tutor loop — hint, attempt, feedback, retry, explain", "Shortcut — request answer, copy, submit, cannot explain"], summary: "A tutor loop builds independent ability; an answer shortcut can hide whether learning occurred." },
  q07: { title: "AI-supported writing with Camila Ortiz's authorship", type: "flow", items: ["Brainstorm", "Camila's outline", "Camila's draft", "AI feedback", "Camila's revision and verification"], summary: "Camila's authorship remains central because Camila drafts, revises, and verifies while AI supports brainstorming or feedback." },
  q08: { title: "From topic to verified research", type: "flow", items: ["Broad topic", "Search terms", "Database search", "Read actual sources", "Refine the question"], summary: "AI can help generate search terms, but the research process still depends on databases and actual sources." },
  q09: { title: "Course-specific AI permission map", type: "flow", items: ["Read syllabus", "Read assignment", "Check announcements", "Ask instructor when unclear", "Document permitted use"], summary: "AI permission is determined by the current syllabus, assignment, announcements, and instructor clarification." },
  q10: { title: "Green, yellow, and red use zones", type: "compare", items: ["Green — clearly allowed support", "Yellow — ask before using", "Red — prohibited or deceptive use"], summary: "The zone model separates clearly permitted support, uncertain uses requiring permission, and prohibited or deceptive uses." },
  q11: { title: "Citation and disclosure serve different jobs", type: "compare", items: ["Citation — identifies a source", "Disclosure — explains how a tool contributed", "Verification note — states what was checked"], summary: "Citation identifies a source, disclosure explains the tool's role, and verification describes the review performed." },
  q12: { title: "Ben Walker's authorship evidence trail", type: "flow", items: ["Ben's question", "Ben's notes and sources", "Ben's draft history", "Documented AI support", "Ben's final explanation"], summary: "Ben's authorship trail connects the question, notes, drafts, disclosed support, and ability to explain the final work." },
  q13: { title: "Match the AI tool to the task", type: "grid", items: ["Chat and explanation", "Writing feedback", "Search and retrieval", "Images and audio", "Coding and data", "Automation and agents"], summary: "AI tools differ in purpose, access, privacy, and reliability; the task should guide tool selection." },
  q14: { title: "Synthetic-media verification", type: "flow", items: ["Pause before sharing", "Find the original source", "Check official channels", "Inspect context and edits", "Report impersonation"], summary: "Synthetic media should be checked against the original source, official channels, context, and evidence of editing." },
  q15: { title: "Responsible code-assistant loop", type: "flow", items: ["Generate a small change", "Read the code", "Test behavior", "Check security and data", "Document and commit"], summary: "Generated code should be small enough to review, then tested, checked for security, documented, and versioned." },
  q16: { title: "An AI agent is a connected system", type: "layers", items: ["Goal and plan", "Tools and data", "Memory", "Permissions", "Logs", "Human approval"], summary: "An agent combines goals, planning, tools, memory, permissions, logs, and human approval." },
  q17: { title: "Repeatable workflow with review gates", type: "flow", items: ["Define input", "Collect evidence", "Draft", "Verify", "Human review", "Release or submit"], summary: "A repeatable workflow divides work into stages and places verification and human review before release." },
  q18: { title: "Safe vibe-coding loop", type: "flow", items: ["Describe one change", "Review the diff", "Run tests", "Commit working state", "Repeat"], summary: "Small requested changes, reviewed diffs, tests, and frequent working commits reduce the risk of losing control." },
  q19: { title: "Agent permission matrix", type: "layers", items: ["Read-only access", "Draft actions", "External actions with approval", "Never grant unnecessary secrets or broad control"], summary: "Agent permissions should start narrow and require explicit approval before consequential external actions." },
  q20: { title: "Responsible AI judgment dashboard", type: "meter", items: ["Evidence", "Verification", "Privacy", "Authorship", "Transparency", "Security", "Human approval", "Permission control"], summary: "Responsible AI use balances evidence, verification, privacy, authorship, transparency, security, human approval, and permissions." }
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderItems(visual) {
  const items = visual.items.map((item, index) => {
    const safe = escapeHtml(item);
    if (visual.type === "flow") {
      return `<li class="visual-step"><span class="visual-step__number">${index + 1}</span><span>${safe}</span></li>`;
    }
    if (visual.type === "meter") {
      const width = 52 + ((index * 7) % 42);
      return `<li class="visual-meter"><span>${safe}</span><span class="visual-meter__track" aria-hidden="true"><span style="width:${width}%"></span></span></li>`;
    }
    return `<li>${safe}</li>`;
  }).join("");

  return `<ol class="lesson-visual__items lesson-visual__items--${escapeHtml(visual.type)}">${items}</ol>`;
}

export function renderLearningVisual(container, lessonId) {
  if (!container) return;
  const visual = VISUALS[lessonId];
  if (!visual) {
    container.innerHTML = "";
    container.hidden = true;
    return;
  }

  const student = getLessonCharacter(lessonId);
  container.hidden = false;
  container.innerHTML = `
    <figure class="lesson-visual" aria-labelledby="visual-title-${escapeHtml(lessonId)}">
      <div class="lesson-visual__header">
        <span class="lesson-visual__icon" aria-hidden="true">◆</span>
        <div>
          <p class="badge">${escapeHtml(student ? `${student.name}'s lesson figure` : "Lesson figure")}</p>
          <h2 id="visual-title-${escapeHtml(lessonId)}">${escapeHtml(visual.title)}</h2>
        </div>
      </div>
      ${renderItems(visual)}
      <figcaption>
        <strong>Text alternative:</strong> ${escapeHtml(visual.summary)}
        <span class="lesson-visual__credit">Original Ram Ready Digital Literacy figure.</span>
      </figcaption>
    </figure>`;
}

export function hasLearningVisual(lessonId) {
  return Boolean(VISUALS[lessonId]);
}

export const LEARNING_VISUAL_IDS = Object.freeze(Object.keys(VISUALS));
export const LEARNING_VISUALS = Object.freeze(VISUALS);
