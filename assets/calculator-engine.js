// Ram Ready Digital Literacy — Transparent Digital-Literacy Tools
//
// Deterministic educational tools (file naming, source evaluation, phishing
// detection, prompt building, agent permissions, etc). No live data is
// fetched, nothing is uploaded, and no real files, passwords, student IDs,
// or private documents are ever accepted as input. See
// data/calculator-assumptions.js.

import { ILLUSTRATIVE_NOTE, TOOL_META, AI_USE_ZONES } from "../data/calculator-assumptions.js";

function wrap(id, inputs, result, limitations) {
  return {
    ...TOOL_META[id],
    inputs,
    result,
    limitations,
    illustrativeNote: ILLUSTRATIVE_NOTE,
    reviewedDate: TOOL_META[id].reviewedDate || "2026-07-10"
  };
}

export function fileNameBuilder({ course = "", assignment = "", lastName = "", date = "", version = "" }) {
  const parts = [course, assignment, lastName, date, version].filter(Boolean);
  const fileName = parts.join("_") || "unnamed-file";
  const warnings = [];
  if (!course) warnings.push("Missing course code — a reader can't tell which class this belongs to.");
  if (!assignment) warnings.push("Missing assignment name.");
  if (!version) warnings.push("Missing version label (e.g. Draft1, Revised, Final).");
  if (/final-final|copy \(\d+\)|new one|untitled/i.test(fileName)) warnings.push("Avoid vague labels like 'final-final' or 'untitled'.");
  return wrap("fileNameBuilder", { course, assignment, lastName, date, version }, { fileName, warnings },
    "A naming pattern, not a guarantee a specific portal or instructor will accept the file.");
}

export function folderStructureBuilder({ semester = "", course = "", assignment = "", stage = "Final" }) {
  const path = [semester, course, assignment, stage].filter(Boolean).join(" / ") || "Semester / Course / Assignment / Stage";
  return wrap("folderStructureBuilder", { semester, course, assignment, stage }, { path },
    "A general pattern — some course portals or employers may specify their own required folder structure.");
}

export function submissionReadinessChecklist(items = []) {
  const total = items.length || 1;
  const confirmed = items.filter((i) => i.checked).length;
  const scorePct = Math.round((confirmed / total) * 100);
  return wrap("submissionChecklist", { items }, { confirmed, total, scorePct },
    "Confirms the learner reviewed each step — it cannot verify the actual portal accepted the file.");
}

export function emailReadinessScore({ subject = "", greeting = "", courseSection = "", specificQuestion = "", alreadyTried = "", closing = "" }) {
  const fields = { subject, greeting, courseSection, specificQuestion, alreadyTried, closing };
  const present = Object.values(fields).filter((v) => v && v.trim().length > 0).length;
  const scorePct = Math.round((present / Object.keys(fields).length) * 100);
  const missing = Object.entries(fields).filter(([, v]) => !v || !v.trim()).map(([k]) => k);
  return wrap("emailBuilder", fields, { scorePct, missing },
    "Checks structural completeness only — tone and clarity still require the learner's own judgment.");
}

export function syllabusToCalendar(entries = []) {
  const sorted = [...entries].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  const withReminders = sorted.map((e) => ({
    ...e,
    workBackReminder: e.dueDate ? new Date(new Date(e.dueDate).getTime() - 2 * 86400000).toISOString().slice(0, 10) : null
  }));
  return wrap("syllabusToCalendar", { entries }, { schedule: withReminders },
    "Suggests a two-day work-back reminder as a starting point — adjust based on the actual size of each task.");
}

export function sourceCredibilityScore({ authority = 0, evidence = 0, currency = 0, relevance = 0 }) {
  const total = [authority, evidence, currency, relevance].reduce((s, n) => s + Math.min(2, Math.max(0, n)), 0);
  const verdict = total >= 6 ? "Strong fit for this question" : total >= 3 ? "Usable with caution — verify further" : "Likely a poor fit for this question";
  return wrap("sourceCredibilityMatrix", { authority, evidence, currency, relevance }, { total, maxScore: 8, verdict },
    "A structured self-check, not an automatic pass/fail — a low-scoring source may still be useful context, and a high score doesn't guarantee relevance to a specific assignment.");
}

export function phishingRiskScore(signals = {}) {
  const weights = { createsUrgency: 2, unexpectedSender: 2, shortenedOrMismatchedLink: 3, requestsCredentials: 3, unusualRequest: 1 };
  let score = 0;
  const present = [];
  for (const [key, weight] of Object.entries(weights)) {
    if (signals[key]) { score += weight; present.push(key); }
  }
  const verdict = score >= 5 ? "High risk — do not click; verify via an official channel" : score >= 2 ? "Some risk signals — verify before acting" : "Low signal count — still verify anything unexpected";
  return wrap("phishingDetector", { signals }, { score, present, verdict },
    "A teaching heuristic based on common phishing signals — real messages should always be verified through an official channel, not scored alone.");
}

export function sharingPermissionCheck({ requestedAccess = "view", audience = "owner-only", containsPrivateInfo = false }) {
  const riskyCombos = ["public", "anyone-with-link"];
  let risk = "low";
  if (containsPrivateInfo && riskyCombos.includes(audience)) risk = "high";
  else if (riskyCombos.includes(audience) && requestedAccess === "edit") risk = "medium";
  return wrap("sharingPermissionSimulator", { requestedAccess, audience, containsPrivateInfo }, { risk },
    "A general risk heuristic — always test a shared link as the actual receiver before submitting it.");
}

export function weeklyResetScore(items = []) {
  const total = items.length || 1;
  const confirmed = items.filter((i) => i.checked).length;
  return wrap("weeklyReset", { items }, { confirmed, total, scorePct: Math.round((confirmed / total) * 100) },
    "A repeatable personal routine — the ideal checklist items vary by course load and program.");
}

export function techFailureResponseScore({ hasEvidence = false, hasTimestamp = false, hasCorrectContact = false, describedPriorAttempt = false }) {
  const fields = { hasEvidence, hasTimestamp, hasCorrectContact, describedPriorAttempt };
  const confirmed = Object.values(fields).filter(Boolean).length;
  return wrap("techFailureResponse", fields, { confirmed, total: 4, complete: confirmed === 4 },
    "Checks message completeness — it cannot guarantee any individual instructor's response time or policy.");
}

export function promptFormulaBuilder({ role = "", task = "", context = "", constraints = "", format = "" }) {
  const prompt = [role && `Role: ${role}`, task && `Task: ${task}`, context && `Context: ${context}`, constraints && `Constraints: ${constraints}`, format && `Output format: ${format}`]
    .filter(Boolean).join("\n");
  const fields = { role, task, context, constraints, format };
  const completeness = Math.round((Object.values(fields).filter((v) => v && v.trim()).length / 5) * 100);
  return wrap("promptFormulaBuilder", fields, { prompt, completeness },
    "A stronger prompt improves direction, but never guarantees a correct or unbiased answer — verification is still required.");
}

export function classifyAiUseZone({ instructorExplicitlyAllows, unclearOrAskedNotAnswered, violatesStatedRule, misrepresentsAuthorship }) {
  let zoneId = "yellow";
  if (violatesStatedRule || misrepresentsAuthorship) zoneId = "red";
  else if (instructorExplicitlyAllows && !unclearOrAskedNotAnswered) zoneId = "green";
  return wrap("aiUseZoneSorter", { instructorExplicitlyAllows, unclearOrAskedNotAnswered, violatesStatedRule, misrepresentsAuthorship }, { zone: AI_USE_ZONES[zoneId] },
    "The zone always comes from the actual assignment rule, not from how convenient the tool makes the task.");
}

export function buildAiDisclosure({ toolName = "", purpose = "", contribution = "", verification = "" }) {
  const disclosure = `I used ${toolName || "[tool]"} to ${purpose || "[purpose]"}. It contributed: ${contribution || "[specific contribution]"}. I verified this by: ${verification || "[verification step]"}.`;
  const specific = Boolean(toolName && purpose && contribution && verification);
  return wrap("aiDisclosureBuilder", { toolName, purpose, contribution, verification }, { disclosure, specific },
    "Follow the exact citation style and instructor requirement for your assignment — this builder produces a specific starting draft, not a required format.");
}

export function syntheticMediaChecklistScore(items = []) {
  const total = items.length || 1;
  const confirmed = items.filter((i) => i.checked).length;
  return wrap("syntheticMediaChecklist", { items }, { confirmed, total, scorePct: Math.round((confirmed / total) * 100) },
    "Verification steps reduce risk but cannot guarantee detection of increasingly realistic synthetic media.");
}

export function codeReviewChecklistScore(items = []) {
  const total = items.length || 1;
  const confirmed = items.filter((i) => i.checked).length;
  return wrap("codeReviewChecklist", { items }, { confirmed, total, scorePct: Math.round((confirmed / total) * 100) },
    "A review habit, not a security audit — sensitive or production code may need additional professional review.");
}

export function workflowBuilder(stages = []) {
  const requiredStages = ["plan", "gather", "draft", "verify", "disclose"];
  const present = stages.map((s) => s.key);
  const missing = requiredStages.filter((r) => !present.includes(r));
  return wrap("workflowBuilder", { stages }, { orderedStages: stages, missing },
    "A general workflow shape — some assignments or projects may not need every stage.");
}

export function agentPermissionCheck({ statedGoal = "", requestedTools = [], requestedPermissions = [], hasApprovalPointForExternalActions = false }) {
  const highRiskPermissions = ["delete", "send", "submit", "purchase", "share_externally"];
  const flaggedPermissions = requestedPermissions.filter((p) => highRiskPermissions.includes(p));
  const needsApproval = flaggedPermissions.length > 0 && !hasApprovalPointForExternalActions;
  return wrap("agentPermissionMatrix", { statedGoal, requestedTools, requestedPermissions, hasApprovalPointForExternalActions }, { flaggedPermissions, needsApproval },
    "Flags common high-impact permission patterns — always evaluate a real agent's specific tool access individually.");
}
