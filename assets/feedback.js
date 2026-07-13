import { initPage } from "./site.js";

initPage("feedback.html");

const DESTINATION_EMAIL = "lmcgaffie@angelo.edu";
const FORM_VERSION = "ram-ready-digital-literacy-pilot-v1";

const RATINGS = [
  ["organizationSupport", "The course was organized clearly and made it easy to know what to do next."],
  ["challengePacing", "The pacing and level of challenge felt appropriate for the portion I tested."],
  ["assessmentAlignment", "The choices and knowledge checks matched what the lesson was trying to teach."],
  ["usefulnessTransfer", "I can see how the skills from this course could transfer to college, work, or daily life."],
  ["interestFit", "The examples and scenarios felt relevant enough to keep my attention."],
  ["participationExperience", "The interactive choices made me think rather than just read."],
  ["visualUsefulness", "The charts, figures, or visual explanations helped me understand the lesson."],
  ["sourceTrust", "The source links and verification notes increased my trust in the material."],
  ["accessibility", "The page was readable and usable on my device and with the way I access websites."],
  ["technicalReliability", "Menus, buttons, quizzes, progress, and page navigation worked reliably."],
  ["overallUsefulness", "Overall, this course would be useful for first-year students."],
  ["recommendation", "I would recommend that another student test or use this course."]
];

const ratingFields = document.getElementById("rating-fields");
ratingFields.innerHTML = RATINGS.map(([name, label]) => `
  <fieldset class="rating-row">
    <legend>${escapeHtml(label)}</legend>
    <div class="rating-options" role="radiogroup" aria-label="${escapeHtml(label)}">
      ${[1, 2, 3, 4, 5].map((value) => `
        <label><input type="radio" name="${escapeHtml(name)}" value="${value}"> ${value}</label>
      `).join("")}
      <label><input type="radio" name="${escapeHtml(name)}" value="Not rated"> Not rated</label>
    </div>
  </fieldset>
`).join("");

const form = document.getElementById("pilot-feedback-form");
const resultSection = document.getElementById("feedback-result");
const summaryEl = document.getElementById("feedback-summary");
const emailLink = document.getElementById("feedback-email-link");
const statusEl = document.getElementById("feedback-status");
const errorEl = document.getElementById("feedback-error");
let latestPayload = null;
let latestSummary = "";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorEl.hidden = true;

  const data = new FormData(form);
  const reviewerRole = clean(data.get("reviewerRole"));
  const coursePath = clean(data.get("coursePath"));

  if (!reviewerRole || !coursePath) {
    errorEl.textContent = "Choose a reviewer role and course path before preparing the feedback email.";
    errorEl.hidden = false;
    errorEl.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  latestPayload = buildPayload(data);
  latestSummary = buildSummary(latestPayload);
  const subject = `Ram Ready Digital Literacy pilot feedback — ${coursePath}`;
  const mailto = `mailto:${DESTINATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(latestSummary)}`;

  emailLink.href = mailto;
  summaryEl.textContent = latestSummary;
  resultSection.hidden = false;
  statusEl.textContent = "Feedback prepared. Your device will try to open its email app.";
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });

  window.setTimeout(() => {
    window.location.href = mailto;
  }, 250);
});

form.addEventListener("reset", () => {
  window.setTimeout(() => {
    resultSection.hidden = true;
    summaryEl.textContent = "";
    statusEl.textContent = "";
    errorEl.hidden = true;
    latestPayload = null;
    latestSummary = "";
  }, 0);
});

document.getElementById("copy-feedback").addEventListener("click", async () => {
  if (!latestSummary) return;
  try {
    await navigator.clipboard.writeText(latestSummary);
    statusEl.textContent = "Feedback copied. Paste it into an email to lmcgaffie@angelo.edu.";
  } catch {
    statusEl.textContent = "Copy was blocked by the browser. Select and copy the summary manually.";
  }
});

document.getElementById("download-feedback").addEventListener("click", () => {
  if (!latestPayload) return;
  const blob = new Blob([JSON.stringify(latestPayload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `ram-ready-digital-literacy-feedback-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  statusEl.textContent = "Feedback JSON downloaded.";
});

function buildPayload(data) {
  const ratings = Object.fromEntries(RATINGS.map(([name, label]) => [name, {
    label,
    value: clean(data.get(name)) || "Not rated"
  }]));

  return {
    schema: FORM_VERSION,
    submittedAt: new Date().toISOString(),
    destination: DESTINATION_EMAIL,
    testingContext: {
      reviewerRole: clean(data.get("reviewerRole")),
      coursePath: clean(data.get("coursePath")),
      pageTested: clean(data.get("pageTested")),
      completionLevel: clean(data.get("completionLevel")),
      device: clean(data.get("device")),
      browser: clean(data.get("browser"))
    },
    ratings,
    perceivedLearningChange: {
      fileOrganization: {
        before: clean(data.get("beforeFileConfidence")),
        after: clean(data.get("afterFileConfidence"))
      },
      sourceEvaluation: {
        before: clean(data.get("beforeSourceConfidence")),
        after: clean(data.get("afterSourceConfidence"))
      },
      securityAndPhishing: {
        before: clean(data.get("beforeSecurityConfidence")),
        after: clean(data.get("afterSecurityConfidence"))
      },
      responsibleAIUse: {
        before: clean(data.get("beforeAIConfidence")),
        after: clean(data.get("afterAIConfidence"))
      }
    },
    openFeedback: {
      mostUseful: clean(data.get("mostUseful")),
      confusing: clean(data.get("confusing")),
      missing: clean(data.get("missing")),
      featureSuggestion: clean(data.get("featureSuggestion")),
      technicalIssue: clean(data.get("technicalIssue")),
      otherComments: clean(data.get("otherComments"))
    },
    optionalFollowup: {
      reviewerName: clean(data.get("reviewerName")),
      reviewerEmail: clean(data.get("reviewerEmail")),
      permission: clean(data.get("followupPermission")) === "Yes"
    },
    privacyNotice: "No response is stored by the static course site. The learner chooses whether to email or download the summary."
  };
}

function buildSummary(payload) {
  const lines = [
    "RAM READY DIGITAL LITERACY — PILOT FEEDBACK",
    `Form version: ${payload.schema}`,
    `Prepared: ${payload.submittedAt}`,
    "",
    "TESTING CONTEXT",
    `Reviewer role: ${valueOrDash(payload.testingContext.reviewerRole)}`,
    `Course path: ${valueOrDash(payload.testingContext.coursePath)}`,
    `Page tested: ${valueOrDash(payload.testingContext.pageTested)}`,
    `Completion level: ${valueOrDash(payload.testingContext.completionLevel)}`,
    `Device: ${valueOrDash(payload.testingContext.device)}`,
    `Browser: ${valueOrDash(payload.testingContext.browser)}`,
    "",
    "COURSE-REVIEW RATINGS (1 strongly disagree — 5 strongly agree)"
  ];

  for (const rating of Object.values(payload.ratings)) {
    lines.push(`${rating.label}: ${rating.value}`);
  }

  lines.push(
    "",
    "PERCEIVED LEARNING CHANGE",
    `File organization — before: ${valueOrDash(payload.perceivedLearningChange.fileOrganization.before)} | after: ${valueOrDash(payload.perceivedLearningChange.fileOrganization.after)}`,
    `Source evaluation — before: ${valueOrDash(payload.perceivedLearningChange.sourceEvaluation.before)} | after: ${valueOrDash(payload.perceivedLearningChange.sourceEvaluation.after)}`,
    `Security/phishing — before: ${valueOrDash(payload.perceivedLearningChange.securityAndPhishing.before)} | after: ${valueOrDash(payload.perceivedLearningChange.securityAndPhishing.after)}`,
    `Responsible AI use — before: ${valueOrDash(payload.perceivedLearningChange.responsibleAIUse.before)} | after: ${valueOrDash(payload.perceivedLearningChange.responsibleAIUse.after)}`,
    "",
    "OPEN FEEDBACK",
    `Most useful:\n${valueOrDash(payload.openFeedback.mostUseful)}`,
    "",
    `Confusing or frustrating:\n${valueOrDash(payload.openFeedback.confusing)}`,
    "",
    `Missing content or support:\n${valueOrDash(payload.openFeedback.missing)}`,
    "",
    `Feature suggestion:\n${valueOrDash(payload.openFeedback.featureSuggestion)}`,
    "",
    `Technical issue and steps:\n${valueOrDash(payload.openFeedback.technicalIssue)}`,
    "",
    `Other comments:\n${valueOrDash(payload.openFeedback.otherComments)}`,
    "",
    "OPTIONAL FOLLOW-UP",
    `Name or testing nickname: ${valueOrDash(payload.optionalFollowup.reviewerName)}`,
    `Email: ${valueOrDash(payload.optionalFollowup.reviewerEmail)}`,
    `Permission to contact: ${payload.optionalFollowup.permission ? "Yes" : "No"}`
  );

  return lines.join("\n");
}

function clean(value) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .replace(/\r/g, "")
    .trim()
    .slice(0, 2000);
}

function valueOrDash(value) {
  return value || "—";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
