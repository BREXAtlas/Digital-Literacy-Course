#!/usr/bin/env node
// Ram Ready Digital Literacy — Static Site Validator
// Run with: node scripts/validate-site.mjs

import { readFile, access, readdir } from "node:fs/promises";
import { constants as FS } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
let failures = 0;
let warnings = 0;

function fail(message) {
  console.error(`✗ ${message}`);
  failures += 1;
}
function warn(message) {
  console.warn(`! ${message}`);
  warnings += 1;
}
function pass(message) {
  console.log(`✓ ${message}`);
}

async function exists(relativePath) {
  try {
    await access(path.join(ROOT, relativePath), FS.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function read(relativePath) {
  return readFile(path.join(ROOT, relativePath), "utf8");
}

const REQUIRED_FILES = [
  "index.html", "foundations.html", "ai-quest.html", "journey.html", "achievements.html",
  "profile.html", "sources.html", "instructor-guide.html", "privacy.html", "disclaimer.html",
  "auth-callback.html", "onboarding.html", "feedback.html",
  "assets/styles.css", "assets/print.css", "assets/site.js", "assets/profile-engine.js",
  "assets/personalization-engine.js", "assets/story-engine.js", "assets/quest-engine.js",
  "assets/game-engine.js", "assets/calculator-engine.js", "assets/source-renderer.js",
  "assets/accessibility.js", "assets/certificate.js", "assets/auth-sync.js",
  "assets/course-cloud-bridge.js", "assets/supabase-config.example.js",
  "assets/visualization-engine.js", "assets/feedback.js",
  "data/onboarding-options.js", "data/source-registry.js", "data/foundations-story.js",
  "data/ai-quests.js", "data/story-fragments.js", "data/achievements.js",
  "data/calculator-assumptions.js", "data/glossary.js",
  "llm/llm-provider.js", "llm/template-provider.js", "llm/webllm-provider.js",
  "llm/ollama-provider.js", "llm/output-validator.js",
  "supabase/migrations/create_digital_literacy_profiles_and_progress.sql",
  "docs/CURRICULUM_MAP.md", "docs/STORY_ARCHITECTURE.md", "docs/PERSONALIZATION_MODEL.md",
  "docs/OPEN_SOURCE_AI.md", "docs/SOURCE_POLICY.md", "docs/SOURCE_REVIEW_CHECKLIST.md",
  "docs/INSTRUCTOR_PILOT_GUIDE.md", "docs/ACCESSIBILITY.md", "docs/PRIVACY_MODEL.md",
  "docs/FINANCIAL_COURSE_HANDOFF.md", "docs/FINANCIAL_SHELL_PARITY.md",
  "docs/PILOT_FEEDBACK_PROTOCOL.md", "TESTING-CHECKLIST.md",
  "scripts/validate-site.mjs", ".github/workflows/pages.yml",
  "README.md", "QUICKSTART.md", "CONTRIBUTING.md", "CODE_OF_CONDUCT.md", "ROADMAP.md",
  "SUPABASE-SETUP.md", "DEPLOYMENT.md", "BRANDING-NOTICE.md", "LICENSE.md"
];

const HTML_FILES = [
  "index.html", "foundations.html", "ai-quest.html", "journey.html", "achievements.html",
  "profile.html", "sources.html", "instructor-guide.html", "privacy.html", "disclaimer.html",
  "auth-callback.html", "onboarding.html", "feedback.html"
];

const REQUIRED_NAV_ORDER = [
  "index.html", "foundations.html", "ai-quest.html", "journey.html", "achievements.html",
  "sources.html", "instructor-guide.html", "feedback.html"
];

async function checkRequiredFiles() {
  for (const file of REQUIRED_FILES) {
    if (await exists(file)) pass(`Required file exists: ${file}`);
    else fail(`Missing required file: ${file}`);
  }
}

async function checkNavAndMenu() {
  const site = await read("assets/site.js");
  const hrefs = [...site.matchAll(/href:\s*"([^"]+)"/g)].map((match) => match[1]);
  const relevant = hrefs.filter((href) => REQUIRED_NAV_ORDER.includes(href));
  if (JSON.stringify(relevant) === JSON.stringify(REQUIRED_NAV_ORDER)) {
    pass("Navigation order includes Pilot Feedback and matches the required shell");
  } else {
    fail(`Navigation order mismatch. Expected ${JSON.stringify(REQUIRED_NAV_ORDER)}, found ${JSON.stringify(relevant)}`);
  }

  const requiredMenuTokens = [
    "site-nav--open", "aria-expanded", "Close", "Escape", "setMenuState"
  ];
  for (const token of requiredMenuTokens) {
    if (!site.includes(token)) fail(`Mobile menu implementation is missing ${token}`);
  }

  const styles = await read("assets/styles.css");
  if (!/\.site-header__bar\s*\{[\s\S]*?position:\s*relative/.test(styles)) {
    fail("Header bar must be position: relative so the mobile menu opens below it");
  }
  if (!/\.site-nav--open\s*\{\s*display:\s*flex/.test(styles)) {
    fail("Mobile menu open state is missing from CSS");
  }
  pass("Mobile menu structure and positioning checked");
}

async function checkOnboardingFinalStep() {
  const onboarding = await read("onboarding.html");
  const required = [
    "nextBtn.disabled = isLast",
    'nextBtn.setAttribute("aria-disabled", String(isLast))',
    "nextBtn.tabIndex = isLast ? -1 : 0",
    "Second-person guest story (you / your)"
  ];
  for (const token of required) {
    if (!onboarding.includes(token)) fail(`Onboarding final-step behavior is missing: ${token}`);
  }
  if (/nextBtn\.hidden\s*=\s*isLast/.test(onboarding)) {
    fail("Next must remain visible and disabled on Step 8, not hidden");
  }
  pass("Onboarding Step 8 disabled-button behavior checked");
}

async function checkInternalLinksAndExternalRel() {
  for (const file of HTML_FILES) {
    if (!(await exists(file))) continue;
    const fullHtml = await read(file);
    const htmlWithoutScripts = fullHtml.replace(/<script[\s\S]*?<\/script>/gi, "");

    for (const match of htmlWithoutScripts.matchAll(/href="([^"]+)"/g)) {
      const href = match[1];
      if (/^(https?:|mailto:|tel:|#)/i.test(href)) continue;
      const targetPath = href.split("#")[0].split("?")[0];
      if (!targetPath) continue;
      if (!(await exists(targetPath))) fail(`${file}: internal link target does not resolve: ${href}`);
    }

    for (const match of htmlWithoutScripts.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)) {
      const tag = match[0];
      if (!/rel="[^"]*noopener/.test(tag)) {
        fail(`${file}: target="_blank" link missing rel="noopener": ${tag.slice(0, 100)}`);
      }
    }
    pass(`Checked links in ${file}`);
  }
}

async function checkFeedbackForm() {
  const html = await read("feedback.html");
  const js = await read("assets/feedback.js");
  const combined = `${html}\n${js}`;

  const required = [
    "lmcgaffie@angelo.edu", "organizationSupport", "challengePacing",
    "assessmentAlignment", "usefulnessTransfer", "interestFit",
    "participationExperience", "visualUsefulness", "accessibility",
    "technicalReliability", "featureSuggestion", "technicalIssue",
    "Download feedback JSON", "Copy feedback"
  ];
  for (const token of required) {
    if (!combined.includes(token)) fail(`Pilot feedback system missing: ${token}`);
  }

  const forbiddenStorage = /localStorage\.(?:setItem|removeItem)|sessionStorage\.(?:setItem|removeItem)/;
  if (forbiddenStorage.test(js)) fail("Feedback responses must not be stored in browser storage");
  pass("Structured pilot feedback form and email destination checked");
}

async function checkNoUnsafeInputFields() {
  for (const file of HTML_FILES) {
    const content = await read(file);
    if (/type="password"/i.test(content)) {
      fail(`${file}: contains a password input field`);
    }
    for (const match of content.matchAll(/<input[^>]*type="file"[^>]*>/gi)) {
      if (!/accept="application\/json"/i.test(match[0])) {
        fail(`${file}: unrestricted file input is not allowed: ${match[0]}`);
      }
    }
  }
  pass("No password or private-document upload fields found");
}

async function checkNoSecretsOrForbiddenProjects() {
  const forbiddenProjectRefs = ["rceqidouaazdlimtivfq", "didwxihufueqbpfnfdmm"];
  const scanFiles = [
    "assets/supabase-config.example.js", "assets/auth-sync.js", "assets/course-cloud-bridge.js",
    "supabase/migrations/create_digital_literacy_profiles_and_progress.sql",
    "SUPABASE-SETUP.md", "README.md"
  ];

  for (const file of scanFiles) {
    const content = await read(file);
    for (const ref of forbiddenProjectRefs) {
      if (content.includes(ref)) fail(`${file}: contains forbidden Supabase project reference ${ref}`);
    }
    if (/service_role/i.test(content) && file.includes("config")) {
      fail(`${file}: possible service-role key or configuration reference`);
    }
  }
  pass("No forbidden Supabase project references or browser service-role configuration found");
}

function collectStrings(value, prefix = "root", results = []) {
  if (typeof value === "string") {
    results.push([prefix, value]);
  } else if (Array.isArray(value)) {
    value.forEach((item, index) => collectStrings(item, `${prefix}[${index}]`, results));
  } else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      collectStrings(item, `${prefix}.${key}`, results);
    }
  }
  return results;
}

async function checkCurriculumAndGuestRendering() {
  const { FOUNDATIONS_EPISODES } = await import(pathToFileURL(path.join(ROOT, "data/foundations-story.js")));
  const { AI_QUESTS } = await import(pathToFileURL(path.join(ROOT, "data/ai-quests.js")));
  const { SOURCE_REGISTRY } = await import(pathToFileURL(path.join(ROOT, "data/source-registry.js")));
  const { ACHIEVEMENTS } = await import(pathToFileURL(path.join(ROOT, "data/achievements.js")));
  const { resolveLearnerText } = await import(pathToFileURL(path.join(ROOT, "assets/personalization-engine.js")));
  const { LEARNING_VISUAL_IDS } = await import(pathToFileURL(path.join(ROOT, "assets/visualization-engine.js")));

  if (FOUNDATIONS_EPISODES.length !== 20) fail(`Expected 20 foundation episodes, found ${FOUNDATIONS_EPISODES.length}`);
  else pass("All 20 foundation episodes exist");

  if (AI_QUESTS.length !== 20) fail(`Expected 20 AI quests, found ${AI_QUESTS.length}`);
  else pass("All 20 AI quests exist");

  const sourceIds = new Set(SOURCE_REGISTRY.map((source) => source.id));
  const achievementIds = new Set(ACHIEVEMENTS.map((achievement) => achievement.id));
  const visualIds = new Set(LEARNING_VISUAL_IDS);

  if (visualIds.size < 40) fail(`Expected at least 40 lesson visuals, found ${visualIds.size}`);
  else pass(`${visualIds.size} lesson and quest visuals are registered`);

  const allItems = [
    ...FOUNDATIONS_EPISODES.map((item) => ({ ...item, kind: "episode" })),
    ...AI_QUESTS.map((item) => ({ ...item, kind: "quest" }))
  ];
  const seen = new Set();
  const guestProfile = { displayName: "", pronouns: { subject: "they", object: "them", possessive: "their" } };

  for (const item of allItems) {
    if (seen.has(item.id)) fail(`Duplicate curriculum ID: ${item.id}`);
    seen.add(item.id);

    if (!visualIds.has(item.id)) fail(`${item.id}: missing lesson visualization`);
    if (!item.learningObjectives?.length) fail(`${item.id}: missing learning objectives`);
    if (!item.openingNarrative) fail(`${item.id}: missing opening narrative`);
    if (!item.scenario?.prompt) fail(`${item.id}: missing scenario prompt`);
    if (!item.choices?.length) fail(`${item.id}: missing choices`);
    if (!item.knowledgeChecks?.length) fail(`${item.id}: missing knowledge checks`);
    if (!item.sourceIds?.length) fail(`${item.id}: missing source IDs`);
    if (!item.recoveryPath) fail(`${item.id}: missing recovery path`);

    for (const sourceId of item.sourceIds || []) {
      if (!sourceIds.has(sourceId)) fail(`${item.id}: unknown source ID ${sourceId}`);
    }
    if (item.achievementId && !achievementIds.has(item.achievementId)) {
      fail(`${item.id}: unknown achievement ID ${item.achievementId}`);
    }

    for (const choice of item.choices || []) {
      for (const key of ["whyChosen", "possibleBenefit", "possibleCost", "possibleRisk", "whatCouldChangeThisOutcome"]) {
        if (!choice[key]) fail(`${item.id} choice ${choice.id}: missing ${key}`);
      }
      for (const [label, collection] of [
        ["immediate", item.immediateConsequences],
        ["one-year", item.oneYearConsequences],
        ["long-term", item.longTermConsequences]
      ]) {
        if (!collection?.[choice.id]) fail(`${item.id} choice ${choice.id}: missing ${label} consequence`);
      }
    }

    for (const check of item.knowledgeChecks || []) {
      if (!check.id || !check.options?.length || !check.correctAnswer || !check.explanation) {
        fail(`${item.id}: incomplete knowledge check ${check.id || "unknown"}`);
      }
      if (!check.options.includes(check.correctAnswer)) {
        fail(`${item.id}: correct answer does not exactly match an option for ${check.id}`);
      }
    }

    for (const [fieldPath, sourceText] of collectStrings(item, item.id)) {
      const rendered = resolveLearnerText(sourceText, guestProfile, true);
      if (/\{\{[^}]+\}\}|\}\}/.test(rendered)) {
        fail(`${fieldPath}: unresolved guest placeholder after rendering`);
      }
      if (/\byou\s+(?:is|was|has|does)\b|\byou's\b/i.test(rendered)) {
        fail(`${fieldPath}: incorrect second-person grammar after rendering: ${rendered.slice(0, 120)}`);
      }
    }
  }

  pass("Curriculum structure, consequences, knowledge checks, sources, achievements, visuals, and guest rendering checked");
}

async function checkPerCardResultsAndConcepts() {
  for (const file of ["foundations.html", "ai-quest.html"]) {
    const content = await read(file);
    for (const token of ["data-choice-result", "choice-card--selected", "concept-groups", "renderConceptGroups", "resolveLearnerText", "renderLearningVisual"]) {
      if (!content.includes(token)) fail(`${file}: missing ${token}`);
    }
    if (/id="(?:quest-)?consequence-panel"/.test(content)) {
      fail(`${file}: still includes a global bottom consequence panel`);
    }
  }
  pass("Per-card choice results, grouped concepts, learner text resolution, and visuals checked");
}

async function checkFinancialHandoffAndButtonTerms() {
  const index = await read("index.html");
  const journey = await read("journey.html");
  const combined = `${index}\n${journey}`;
  const terms = [
    "Continue your story", "Create your story", "Explore the generic version", "Continue or begin",
    "Resume", "View map", "Edit vision", "Export progress (JSON)", "Import progress",
    "Reset simulation", "Continue to Ram Ready Financial Futures"
  ];
  for (const term of terms) {
    if (!combined.includes(term)) fail(`Missing required button or interface term: ${term}`);
  }
  for (const file of ["index.html", "journey.html"]) {
    const content = await read(file);
    if (!content.includes("https://brexatlas.github.io/Financial-Literacy-Course/")) {
      fail(`${file}: missing Financial Futures handoff`);
    }
  }
  pass("Shell terminology and Financial Futures handoff checked");
}

async function checkNoOfficialAsuAssets() {
  const entries = await readdir(path.join(ROOT, "assets"), { recursive: true });
  const suspicious = entries.filter((entry) => /asu[-_ ]?(?:logo|seal)|official[-_ ]?mascot|roscoe[-_ ]?photo|bella[-_ ]?photo/i.test(String(entry)));
  if (suspicious.length) fail(`Possible official Angelo State asset found: ${suspicious.join(", ")}`);
  else pass("No apparent official Angelo State logo, seal, or mascot photograph found");
}

async function checkJavaScriptSyntax() {
  const directories = ["assets", "data", "llm", "scripts"];
  const files = [];

  async function walk(directory) {
    const absolute = path.join(ROOT, directory);
    for (const entry of await readdir(absolute, { withFileTypes: true })) {
      const relative = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(relative);
      else if (/\.(?:js|mjs)$/.test(entry.name)) files.push(relative);
    }
  }

  for (const directory of directories) await walk(directory);
  for (const file of files) {
    const result = spawnSync(process.execPath, ["--check", path.join(ROOT, file)], { encoding: "utf8" });
    if (result.status !== 0) fail(`${file}: JavaScript syntax error\n${result.stderr}`);
  }
  pass(`JavaScript syntax checked in ${files.length} files`);
}

await checkRequiredFiles();
await checkNavAndMenu();
await checkOnboardingFinalStep();
await checkInternalLinksAndExternalRel();
await checkFeedbackForm();
await checkNoUnsafeInputFields();
await checkNoSecretsOrForbiddenProjects();
await checkCurriculumAndGuestRendering();
await checkPerCardResultsAndConcepts();
await checkFinancialHandoffAndButtonTerms();
await checkNoOfficialAsuAssets();
await checkJavaScriptSyntax();

console.log(`\nValidation complete: ${failures} failure(s), ${warnings} warning(s).`);
if (failures > 0) process.exit(1);
