#!/usr/bin/env node
// Ram Ready Digital Literacy — Static Site Validator
// Run with: node scripts/validate-site.mjs

import { readFile, access } from "node:fs/promises";
import { constants as FS } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
let failures = 0;
let warnings = 0;

function fail(msg) {
  console.error(`✗ ${msg}`);
  failures += 1;
}
function warn(msg) {
  console.warn(`! ${msg}`);
  warnings += 1;
}
function pass(msg) {
  console.log(`✓ ${msg}`);
}

async function exists(relPath) {
  try {
    await access(path.join(ROOT, relPath), FS.F_OK);
    return true;
  } catch {
    return false;
  }
}

const REQUIRED_FILES = [
  "index.html", "foundations.html", "ai-quest.html", "journey.html", "achievements.html",
  "profile.html", "sources.html", "instructor-guide.html", "privacy.html", "disclaimer.html",
  "auth-callback.html", "onboarding.html",
  "assets/styles.css", "assets/print.css", "assets/site.js", "assets/profile-engine.js",
  "assets/personalization-engine.js", "assets/story-engine.js", "assets/quest-engine.js",
  "assets/game-engine.js", "assets/calculator-engine.js", "assets/source-renderer.js",
  "assets/accessibility.js", "assets/certificate.js", "assets/auth-sync.js",
  "assets/course-cloud-bridge.js", "assets/supabase-config.example.js",
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
  "scripts/validate-site.mjs", ".github/workflows/pages.yml",
  "README.md", "QUICKSTART.md", "CONTRIBUTING.md", "CODE_OF_CONDUCT.md", "ROADMAP.md",
  "SUPABASE-SETUP.md", "DEPLOYMENT.md", "BRANDING-NOTICE.md", "LICENSE.md"
];

async function checkRequiredFiles() {
  for (const f of REQUIRED_FILES) {
    if (await exists(f)) pass(`Required file exists: ${f}`);
    else fail(`Missing required file: ${f}`);
  }
}

const HTML_FILES = [
  "index.html", "foundations.html", "ai-quest.html", "journey.html", "achievements.html",
  "profile.html", "sources.html", "instructor-guide.html", "privacy.html", "disclaimer.html",
  "auth-callback.html", "onboarding.html"
];

const REQUIRED_NAV_ORDER = ["index.html", "foundations.html", "ai-quest.html", "journey.html", "achievements.html", "sources.html", "instructor-guide.html"];

async function checkNavOrder() {
  if (!(await exists("assets/site.js"))) return;
  const content = await readFile(path.join(ROOT, "assets/site.js"), "utf8");
  const hrefs = [...content.matchAll(/href:\s*"([^"]+)"/g)].map((m) => m[1]);
  const relevant = hrefs.filter((h) => REQUIRED_NAV_ORDER.includes(h));
  const expected = REQUIRED_NAV_ORDER;
  if (JSON.stringify(relevant) === JSON.stringify(expected)) {
    pass("Nav order matches required shell order");
  } else {
    fail(`Nav order mismatch. Expected ${JSON.stringify(expected)}, found ${JSON.stringify(relevant)}`);
  }
}

async function checkButtonTerms() {
  const requiredTerms = [
    "Continue your story", "Create your story", "Explore the generic version", "Continue or begin",
    "Resume", "View map", "Edit vision", "Export progress (JSON)", "Import progress", "Reset simulation",
    "Continue to Ram Ready Financial Futures"
  ];
  const indexHtml = (await exists("index.html")) ? await readFile(path.join(ROOT, "index.html"), "utf8") : "";
  const journeyHtml = (await exists("journey.html")) ? await readFile(path.join(ROOT, "journey.html"), "utf8") : "";
  const combined = indexHtml + journeyHtml;
  for (const term of requiredTerms) {
    if (combined.includes(term)) pass(`Button term present: "${term}"`);
    else fail(`Missing required button term: "${term}"`);
  }
}

async function checkFinancialFuturesHandoff() {
  const files = ["index.html", "journey.html"];
  for (const f of files) {
    if (!(await exists(f))) continue;
    const content = await readFile(path.join(ROOT, f), "utf8");
    if (content.includes("https://brexatlas.github.io/Financial-Literacy-Course/")) {
      pass(`${f}: Financial Futures handoff link present`);
    } else {
      fail(`${f}: missing Financial Futures handoff link`);
    }
  }
}

async function checkInternalLinksAndExternalRel() {
  for (const file of HTML_FILES) {
    if (!(await exists(file))) continue;
    const fullHtml = await readFile(path.join(ROOT, file), "utf8");
    const html = fullHtml.replace(/<script[\s\S]*?<\/script>/g, "");

    const hrefRegex = /href="([^"]+)"/g;
    let match;
    while ((match = hrefRegex.exec(html))) {
      const href = match[1];
      if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
        if (href.startsWith("http://")) warn(`${file}: non-HTTPS external link ${href}`);
        continue;
      }
      if (href.startsWith("#")) continue;
      const targetPath = href.split("#")[0].split("?")[0];
      if (!targetPath) continue;
      if (!(await exists(targetPath))) {
        fail(`${file}: internal link target does not resolve: ${href}`);
      }
    }

    const targetBlankRegex = /<a\b[^>]*target="_blank"[^>]*>/g;
    let blankMatch;
    while ((blankMatch = targetBlankRegex.exec(html))) {
      const tag = blankMatch[0];
      if (!/rel="[^"]*noopener/.test(tag)) {
        fail(`${file}: target="_blank" link missing rel="noopener": ${tag.slice(0, 80)}`);
      }
    }
    pass(`Checked internal links and external-link rel attributes in ${file}`);
  }
}

async function checkProhibitedProviderNames() {
  const filesToScan = ["llm/llm-provider.js", "llm/webllm-provider.js", "llm/ollama-provider.js", "assets/supabase-config.example.js"];
  const prohibitedUsage = /(api\.openai\.com|api\.anthropic\.com|generativelanguage\.googleapis\.com|@anthropic-ai\/sdk|["']openai["']\s*:|from\s+["']openai["'])/i;
  for (const f of filesToScan) {
    if (!(await exists(f))) continue;
    const content = await readFile(path.join(ROOT, f), "utf8");
    if (prohibitedUsage.test(content)) {
      fail(`${f}: appears to call a prohibited proprietary LLM provider`);
    }
  }
  pass("No prohibited proprietary LLM provider usage found in application configuration");
}

async function checkNoServiceRoleKey() {
  const configExample = await exists("assets/supabase-config.js");
  if (configExample) {
    const content = await readFile(path.join(ROOT, "assets/supabase-config.js"), "utf8");
    if (/service_role/i.test(content) || /eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.*service/i.test(content)) {
      fail("assets/supabase-config.js appears to contain a service-role key");
    } else {
      pass("assets/supabase-config.js does not appear to contain a service-role key");
    }
  } else {
    pass("No assets/supabase-config.js committed (guest-mode-only deployment, or key added locally by operator)");
  }
}

async function checkNoForbiddenSupabaseRefs() {
  const forbidden = ["rceqidouaazdlimtivfq", "didwxihufueqbpfnfdmm", "service_role"];
  const filesToScan = [
    "assets/supabase-config.example.js", "assets/auth-sync.js", "assets/course-cloud-bridge.js",
    "supabase/migrations/create_digital_literacy_profiles_and_progress.sql",
    "SUPABASE-SETUP.md", "README.md"
  ];
  for (const f of filesToScan) {
    if (!(await exists(f))) continue;
    const content = await readFile(path.join(ROOT, f), "utf8");
    for (const term of forbidden) {
      if (term !== "service_role" && content.includes(term)) {
        fail(`${f}: contains forbidden reference to a reference-repository Supabase project ref (${term})`);
      }
    }
  }
  pass("No forbidden reference-repository Supabase project refs found");
}

async function checkNoAsuLogoAssets() {
  const suspiciousNames = ["asu-logo", "asu-seal", "mascot", "ram-mascot"];
  try {
    const { readdir } = await import("node:fs/promises");
    const assetFiles = await readdir(path.join(ROOT, "assets"));
    const found = assetFiles.filter((f) => suspiciousNames.some((s) => f.toLowerCase().includes(s)));
    if (found.length) fail(`Found possible official-logo asset files: ${found.join(", ")}`);
    else pass("No official Angelo State logo/seal/mascot asset files found");
  } catch {
    pass("assets directory scan skipped (not found)");
  }
}

async function checkNoUnsafeInputFields() {
  for (const file of HTML_FILES) {
    if (!(await exists(file))) continue;
    const content = await readFile(path.join(ROOT, file), "utf8");
    if (/type="password"/.test(content)) {
      fail(`${file}: contains a password input field, which this course must never collect`);
    }
    if (/type="file"[^>]*(?!accept="application\/json")/.test(content) && /accept="application\/json"/.test(content) === false && /type="file"/.test(content)) {
      // only the JSON progress-import file input is allowed; flag anything else accepting arbitrary files
      const fileInputs = [...content.matchAll(/<input[^>]*type="file"[^>]*>/g)].map((m) => m[0]);
      for (const tag of fileInputs) {
        if (!tag.includes('accept="application/json"')) {
          fail(`${file}: file input does not restrict to application/json (no real document uploads allowed): ${tag}`);
        }
      }
    }
  }
  pass("No password fields or unrestricted file-upload fields found");
}

async function checkCurriculum() {
  const { FOUNDATIONS_EPISODES } = await import(path.join(ROOT, "data/foundations-story.js"));
  const { AI_QUESTS } = await import(path.join(ROOT, "data/ai-quests.js"));
  const { SOURCE_REGISTRY } = await import(path.join(ROOT, "data/source-registry.js"));
  const { ACHIEVEMENTS } = await import(path.join(ROOT, "data/achievements.js"));

  const validSourceIds = new Set(SOURCE_REGISTRY.map((s) => s.id));
  const validAchievementIds = new Set(ACHIEVEMENTS.map((a) => a.id));

  if (FOUNDATIONS_EPISODES.length === 20) pass("All 20 foundation episodes exist");
  else fail(`Expected 20 foundation episodes, found ${FOUNDATIONS_EPISODES.length}`);

  if (AI_QUESTS.length === 20) pass("All 20 AI quests exist");
  else fail(`Expected 20 AI quests, found ${AI_QUESTS.length}`);

  const epIds = new Set();
  for (const ep of FOUNDATIONS_EPISODES) {
    if (epIds.has(ep.id)) fail(`Duplicate episode id: ${ep.id}`);
    epIds.add(ep.id);

    if (!ep.learningObjectives || ep.learningObjectives.length === 0) {
      fail(`${ep.id}: missing learning objectives`);
    }
    if (!ep.openingNarrative || !ep.title || !ep.subtitle) {
      fail(`${ep.id}: empty placeholder content detected (missing title/subtitle/narrative)`);
    }
    if (!ep.scenario || !ep.scenario.prompt) {
      fail(`${ep.id}: missing real scenario`);
    }
    for (const choice of ep.choices || []) {
      const hasConsequence =
        ep.immediateConsequences?.[choice.id] || ep.oneYearConsequences?.[choice.id] || ep.longTermConsequences?.[choice.id];
      if (!hasConsequence) fail(`${ep.id}: choice "${choice.id}" has no consequence text`);
      if (!choice.possibleBenefit || !choice.possibleCost || !choice.possibleRisk) {
        fail(`${ep.id}: choice "${choice.id}" missing benefit/cost/risk language`);
      }
    }
    if (!ep.recoveryPath) fail(`${ep.id}: missing recoveryPath`);
    for (const kc of ep.knowledgeChecks || []) {
      if (!kc.correctAnswer || !kc.explanation) {
        fail(`${ep.id}: knowledge check "${kc.id}" missing answer or explanation`);
      }
    }
    if (!ep.sourceIds || ep.sourceIds.length === 0) fail(`${ep.id}: missing source IDs`);
    for (const sid of ep.sourceIds || []) {
      if (!validSourceIds.has(sid)) fail(`${ep.id}: references unknown source id "${sid}"`);
    }
    if (ep.achievementId && !validAchievementIds.has(ep.achievementId)) {
      fail(`${ep.id}: references unknown achievement id "${ep.achievementId}"`);
    }
  }
  pass(`Checked ${epIds.size} unique foundation episode IDs`);

  const qIds = new Set();
  for (const q of AI_QUESTS) {
    if (qIds.has(q.id)) fail(`Duplicate quest id: ${q.id}`);
    qIds.add(q.id);

    if (!q.learningObjectives || q.learningObjectives.length === 0) {
      fail(`${q.id}: missing learning objectives`);
    }
    if (!q.openingNarrative || !q.title || !q.subtitle) {
      fail(`${q.id}: empty placeholder content detected (missing title/subtitle/narrative)`);
    }
    if (!q.scenario || !q.scenario.prompt) {
      fail(`${q.id}: missing real scenario`);
    }
    for (const choice of q.choices || []) {
      const hasConsequence =
        q.immediateConsequences?.[choice.id] || q.oneYearConsequences?.[choice.id] || q.longTermConsequences?.[choice.id];
      if (!hasConsequence) fail(`${q.id}: choice "${choice.id}" has no consequence text`);
    }
    if (!q.recoveryPath) fail(`${q.id}: missing recoveryPath`);
    for (const kc of q.knowledgeChecks || []) {
      if (!kc.correctAnswer || !kc.explanation) {
        fail(`${q.id}: knowledge check "${kc.id}" missing answer or explanation`);
      }
    }
    if (!q.sourceIds || q.sourceIds.length === 0) fail(`${q.id}: missing source IDs`);
    for (const sid of q.sourceIds || []) {
      if (!validSourceIds.has(sid)) fail(`${q.id}: references unknown source id "${sid}"`);
    }
    if (q.achievementId && !validAchievementIds.has(q.achievementId)) {
      fail(`${q.id}: references unknown achievement id "${q.achievementId}"`);
    }
  }
  pass(`Checked ${qIds.size} unique AI quest IDs`);

  const placeholderPattern = /(coming soon|todo|lorem ipsum|placeholder text|tbd)/i;
  for (const node of [...FOUNDATIONS_EPISODES, ...AI_QUESTS]) {
    const blob = JSON.stringify(node);
    if (placeholderPattern.test(blob)) {
      fail(`${node.id}: appears to contain placeholder content`);
    }
  }
  pass("No placeholder lesson content detected");
}

async function main() {
  console.log("Running Ram Ready Digital Literacy site validation...\n");
  await checkRequiredFiles();
  await checkNavOrder();
  await checkButtonTerms();
  await checkFinancialFuturesHandoff();
  await checkInternalLinksAndExternalRel();
  await checkProhibitedProviderNames();
  await checkNoServiceRoleKey();
  await checkNoForbiddenSupabaseRefs();
  await checkNoAsuLogoAssets();
  await checkNoUnsafeInputFields();
  await checkCurriculum();

  console.log(`\n${failures === 0 ? "PASS" : "FAIL"}: ${failures} failure(s), ${warnings} warning(s).`);
  if (failures > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
