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
  "auth-callback.html", "onboarding.html", "feedback.html", "testing-checklist.html",
  "presentation.html", "assets/presentation.css", "assets/presentation.js",
  "assets/presentation-charts.js", "data/presentation-data.js", "data/presentation-sources.js",
  "assets/styles.css", "assets/print.css", "assets/site.js", "assets/profile-engine.js",
  "assets/personalization-engine.js", "assets/story-engine.js", "assets/quest-engine.js",
  "assets/game-engine.js", "assets/calculator-engine.js", "assets/source-renderer.js",
  "assets/accessibility.js", "assets/certificate.js", "assets/auth-sync.js",
  "assets/course-cloud-bridge.js", "assets/supabase-config.example.js",
  "assets/visualization-engine.js", "assets/lesson-rating.js", "assets/feedback.js",
  "data/onboarding-options.js", "data/source-registry.js", "data/foundations-story.js",
  "data/ai-quests.js", "data/story-fragments.js", "data/lesson-characters.js", "data/achievements.js",
  "data/calculator-assumptions.js", "data/glossary.js",
  "llm/llm-provider.js", "llm/template-provider.js", "llm/webllm-provider.js",
  "llm/ollama-provider.js", "llm/output-validator.js",
  "supabase/migrations/create_digital_literacy_profiles_and_progress.sql",
  "docs/CURRICULUM_MAP.md", "docs/STORY_ARCHITECTURE.md", "docs/PERSONALIZATION_MODEL.md",
  "docs/OPEN_SOURCE_AI.md", "docs/SOURCE_POLICY.md", "docs/SOURCE_REVIEW_CHECKLIST.md",
  "docs/INSTRUCTOR_PILOT_GUIDE.md", "docs/ACCESSIBILITY.md", "docs/PRIVACY_MODEL.md",
  "docs/LESSON_CHARACTER_MAP.md",
  "docs/FINANCIAL_COURSE_HANDOFF.md", "docs/FINANCIAL_SHELL_PARITY.md",
  "docs/PILOT_FEEDBACK_PROTOCOL.md", "docs/PRESENTATION_GUIDE.md", "TESTING-CHECKLIST.md",
  "scripts/validate-site.mjs", ".github/workflows/pages.yml",
  "README.md", "QUICKSTART.md", "CONTRIBUTING.md", "CODE_OF_CONDUCT.md", "ROADMAP.md",
  "SUPABASE-SETUP.md", "DEPLOYMENT.md", "BRANDING-NOTICE.md", "LICENSE.md"
];

const HTML_FILES = [
  "index.html", "foundations.html", "ai-quest.html", "journey.html", "achievements.html",
  "profile.html", "sources.html", "instructor-guide.html", "privacy.html", "disclaimer.html",
  "auth-callback.html", "onboarding.html", "feedback.html", "testing-checklist.html", "presentation.html"
];

const REQUIRED_NAV_ORDER = [
  "index.html", "foundations.html", "ai-quest.html", "journey.html", "achievements.html",
  "sources.html", "instructor-guide.html", "presentation.html", "feedback.html"
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

async function checkPresentation() {
  const html = await read("presentation.html");
  const css = await read("assets/presentation.css");
  const js = await read("assets/presentation.js");
  const chartsJs = await read("assets/presentation-charts.js");
  const { PRESENTATION_SLIDES, PRESENTATION_CHARTS } = await import(
    pathToFileURL(path.join(ROOT, "data/presentation-data.js"))
  );
  const { PRESENTATION_SOURCES } = await import(
    pathToFileURL(path.join(ROOT, "data/presentation-sources.js"))
  );

  const slideTags = [...html.matchAll(/<section\b[^>]*class="[^"]*\bp-slide\b[^"]*"[^>]*data-slide\b[^>]*>/g)].map((match) => match[0]);
  const slideIds = slideTags.map((tag) => tag.match(/\bid="([^"]+)"/)?.[1]).filter(Boolean);
  if (slideTags.length !== 21) fail(`Presentation must contain exactly 21 slides; found ${slideTags.length}`);
  if (new Set(slideIds).size !== 21) fail("Presentation slide IDs must be unique");
  const expectedSlideIds = Array.from({ length: 21 }, (_, index) => `slide-${String(index + 1).padStart(2, "0")}`);
  if (JSON.stringify(slideIds) !== JSON.stringify(expectedSlideIds)) {
    fail(`Presentation slide IDs or order are incorrect: ${JSON.stringify(slideIds)}`);
  }
  if (!/id="slide-21"[^>]*data-reference-slide/.test(html)) fail("Slide 21 must be the APA references slide");
  if ((html.match(/class="presenter-notes"/g) || []).length !== 21) fail("Every presentation slide must have presenter notes");
  if ((html.match(/data-open-sources/g) || []).length < 8) fail("Evidence slides must provide source-drawer buttons");

  if (PRESENTATION_SLIDES.length !== 21) fail(`Presentation data must list 21 slides; found ${PRESENTATION_SLIDES.length}`);
  if (new Set(PRESENTATION_SLIDES.map((slide) => slide.id)).size !== 21) fail("Presentation data contains duplicate slide IDs");
  if (PRESENTATION_SLIDES.at(-1)?.id !== "slide-21" || PRESENTATION_SLIDES.at(-1)?.title !== "References") {
    fail("Presentation data must identify Slide 21 as References");
  }

  const sourceIds = new Set(PRESENTATION_SOURCES.map((source) => source.id));
  if (sourceIds.size !== PRESENTATION_SOURCES.length) fail("Presentation source registry contains duplicate IDs");
  const citedSourceIds = new Set();
  for (const slide of PRESENTATION_SLIDES) {
    if (!slideIds.includes(slide.id)) fail(`Presentation data references a missing slide: ${slide.id}`);
    for (const sourceId of slide.sourceIds || []) {
      citedSourceIds.add(sourceId);
      if (!sourceIds.has(sourceId)) fail(`${slide.id}: unknown presentation source ID ${sourceId}`);
    }
    const tag = slideTags.find((candidate) => candidate.includes(`id="${slide.id}"`));
    const htmlSourceIds = (tag?.match(/data-source-ids="([^"]*)"/)?.[1] || "").split(/\s+/).filter(Boolean);
    if (JSON.stringify(htmlSourceIds) !== JSON.stringify(slide.sourceIds || [])) {
      fail(`${slide.id}: HTML source IDs do not match structured presentation data`);
    }
  }

  for (const source of PRESENTATION_SOURCES) {
    if (!source.id || !source.shortCitation || !source.apa || !source.apaHtml || !source.title || !source.authorOrOrganization || !source.year) {
      fail(`Presentation source ${source.id || "unknown"} has incomplete metadata or APA text`);
    }
    if (source.verifiedDate !== "2026-07-16") fail(`${source.id}: unexpected source verification date ${source.verifiedDate}`);
    if (source.url && !source.url.startsWith("https://")) fail(`${source.id}: external source URL must use HTTPS`);
    if (source.doi && !source.doi.startsWith("https://doi.org/")) fail(`${source.id}: DOI must be an HTTPS DOI URL`);
    if (!citedSourceIds.has(source.id)) fail(`Unused presentation source registry entry: ${source.id}`);
    if (!source.slideIds?.length || source.slideIds.some((id) => !slideIds.includes(id))) {
      fail(`${source.id}: missing or invalid slideIds metadata`);
    }
  }

  const chartIds = new Set();
  for (const chart of PRESENTATION_CHARTS) {
    if (chartIds.has(chart.id)) fail(`Duplicate presentation chart ID: ${chart.id}`);
    chartIds.add(chart.id);
    if (!slideIds.includes(chart.slideId)) fail(`${chart.id}: chart uses an unknown slide ID ${chart.slideId}`);
    if (!html.includes(`data-chart-id="${chart.id}"`)) fail(`${chart.id}: presentation page has no chart container`);
    if (!chart.title || !chart.takeaway || !chart.sourceNote) fail(`${chart.id}: missing visible chart title, takeaway, or source note`);
    if (!chart.limitation) fail(`${chart.id}: missing limitation/context note`);
    if (!chart.accessibleSummary) fail(`${chart.id}: missing text alternative`);
    if (!chart.tableHeaders?.length || !chart.tableRows?.length) fail(`${chart.id}: missing accessible data table`);
    for (const sourceId of chart.sourceIds || []) {
      citedSourceIds.add(sourceId);
      if (!sourceIds.has(sourceId)) fail(`${chart.id}: unknown chart source ID ${sourceId}`);
    }
  }
  if (PRESENTATION_CHARTS.length !== 8) fail(`Expected 8 structured presentation charts, found ${PRESENTATION_CHARTS.length}`);
  for (const token of ["data-chart-table", "data-chart-limitation", "data-chart-text-alternative", "data-chart-source"]) {
    if (!chartsJs.includes(token)) fail(`Chart renderer is missing ${token}`);
  }

  const requiredChartValues = new Map([
    ["nces-aps-age", [28, 26, 31, 35, 40]],
    ["d2l-weekly-ai", [71, 61, 52]],
    ["finra-emergency-savings", [53, 46]],
    ["finra-mobile-banking", [81]],
    ["finra-inflation-knowledge", [34, 44]],
    ["pilot-composition", [[10, 12], [3, 4], [12, 18], [4, 6]]]
  ]);
  for (const [id, expected] of requiredChartValues) {
    const chart = PRESENTATION_CHARTS.find((candidate) => candidate.id === id);
    if (!chart || JSON.stringify(chart.values) !== JSON.stringify(expected)) {
      fail(`${id}: structured values do not match the presentation specification`);
    }
  }

  const requiredInteractionTokens = [
    "data-start-presentation", "data-previous-slide", "data-next-slide", "data-toggle-fullscreen",
    "data-toggle-notes", "data-open-overview", "data-print-presentation", "data-exit-presentation",
    "ArrowRight", "ArrowLeft", "PageDown", "PageUp", "Home", "End", "fullscreenchange",
    "aria-current", "aria-live", "history.replaceState"
  ];
  const interactionSurface = `${html}\n${js}`;
  for (const token of requiredInteractionTokens) {
    if (!interactionSurface.includes(token)) fail(`Presentation interaction is missing ${token}`);
  }

  const requiredDiagramTokens = [
    "p-ecosystem", "p-bridge", "p-hub", "p-process", "p-chart__timeline", "p-chart__dashboard",
    "p-compare", "p-cycle", "p-stage-grid"
  ];
  for (const token of requiredDiagramTokens) {
    if (!interactionSurface.includes(token) && !css.includes(token)) fail(`Presentation is missing required diagram component ${token}`);
  }

  for (const match of html.matchAll(/href="(http:[^"]+)"/g)) fail(`Presentation external link should use HTTPS: ${match[1]}`);
  if (!js.includes('target="_blank" rel="noopener noreferrer"')) fail("Generated source links must use secure new-tab rel attributes");
  if (!html.includes("data-reference-list") || !js.includes("PRESENTATION_SOURCES") || !js.includes("p-reference")) {
    fail("Slide 21 must render every presentation source as an APA reference");
  }

  const relevantText = `${html}\n${css}\n${js}\n${chartsJs}\n${await read("data/presentation-data.js")}\n${await read("data/presentation-sources.js")}\n${await read("docs/PRESENTATION_GUIDE.md")}`;
  if (/\[citation needed\]|lorem ipsum|TEMPLATE_PLACEHOLDER|\{\{[^}]+\}\}/i.test(relevantText)) {
    fail("Presentation contains an unresolved citation or template placeholder");
  }
  if (/organizational case[ -]study|EDEA 6302|angelo-edea-assignment|\bconven(?:e|es|ed|ing)\b/i.test(relevantText)) {
    fail("Presentation retains removed case-study alignment or unexplained convene terminology");
  }
  if (!/@media\s+print/.test(css)) fail("Presentation print styling is missing");
  if (!/prefers-reduced-motion/.test(css)) fail("Presentation reduced-motion handling is missing");
  if (!/prefers-color-scheme:\s*dark/.test(css)) fail("Presentation dark-mode styling is missing");
  if (!css.includes("aspect-ratio: 16 / 9")) fail("Desktop presentation mode must use a 16:9 frame");
  if (!css.includes("aspect-ratio: auto")) fail("Mobile presentation mode must switch to vertical reading order");

  const financialLinks = html.match(/https:\/\/brexatlas\.github\.io\/Financial-Literacy-Course\//g) || [];
  if (financialLinks.length !== 2) fail(`Financial Futures should appear on Slides 8 and 11 only; found ${financialLinks.length} presentation links`);
  if (/>\s*(?:Demonstrate|Open)\s+Financial|<iframe/i.test(html)) {
    fail("Financial Futures must not appear as a live demonstration or iframe");
  }
  if (!html.includes("https://brexatlas.github.io/Digital-Literacy-Course/")) fail("Presentation is missing the main Digital Literacy live link");
  const requiredPublicPresentationLinks = [
    "https://brexatlas.github.io/Digital-Literacy-Course/foundations.html",
    "https://brexatlas.github.io/Digital-Literacy-Course/ai-quest.html",
    "https://brexatlas.github.io/Digital-Literacy-Course/feedback.html",
    "https://brexatlas.github.io/Digital-Literacy-Course/foundations.html?ep=ep09&amp;generic=1",
    "https://brexatlas.github.io/Digital-Literacy-Course/ai-quest.html?q=q11&amp;generic=1",
    "https://brexatlas.github.io/Digital-Literacy-Course/testing-checklist.html"
  ];
  for (const destination of requiredPublicPresentationLinks) {
    if (!html.includes(`href="${destination}"`)) fail(`Presentation is missing a working public destination: ${destination}`);
  }
  for (const match of html.matchAll(/<a\b[^>]*href="https:\/\/brexatlas\.github\.io\/Digital-Literacy-Course\/[^"]*"[^>]*>/g)) {
    if (/target="_blank"/i.test(match[0])) fail(`Digital Literacy presentation link must not force a popup: ${match[0]}`);
  }
  for (const route of ["foundations.html", "ai-quest.html", "feedback.html", "testing-checklist.html"]) {
    if (!html.includes(route)) fail(`Presentation is missing required local route ${route}`);
  }
  if (/\b(?:reveal\.js|react|next\.js|vite)\b|<canvas/i.test(`${html}\n${js}`)) {
    fail("Presentation must not add a proprietary slide framework, app framework, or Canvas chart dependency");
  }

  pass(`Presentation structure, ${PRESENTATION_CHARTS.length} charts, ${PRESENTATION_SOURCES.length} sources, controls, accessibility, and print rules checked`);
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
  const { LESSON_CHARACTERS } = await import(pathToFileURL(path.join(ROOT, "data/lesson-characters.js")));
  const { STORY_FRAGMENTS } = await import(pathToFileURL(path.join(ROOT, "data/story-fragments.js")));
  const { resolveLearnerText } = await import(pathToFileURL(path.join(ROOT, "assets/personalization-engine.js")));
  const { LEARNING_VISUAL_IDS, LEARNING_VISUALS } = await import(pathToFileURL(path.join(ROOT, "assets/visualization-engine.js")));
  const { isEpisodeUnlocked } = await import(pathToFileURL(path.join(ROOT, "assets/story-engine.js")));
  const { isQuestUnlocked } = await import(pathToFileURL(path.join(ROOT, "assets/quest-engine.js")));

  if (FOUNDATIONS_EPISODES.length !== 20) fail(`Expected 20 foundation episodes, found ${FOUNDATIONS_EPISODES.length}`);
  else pass("All 20 foundation episodes exist");

  if (AI_QUESTS.length !== 20) fail(`Expected 20 AI quests, found ${AI_QUESTS.length}`);
  else pass("All 20 AI quests exist");

  const expectedLessonIds = [
    ...Array.from({ length: 20 }, (_, index) => `ep${String(index + 1).padStart(2, "0")}`),
    ...Array.from({ length: 20 }, (_, index) => `q${String(index + 1).padStart(2, "0")}`)
  ];
  const characterEntries = Object.entries(LESSON_CHARACTERS);
  const characterIds = characterEntries.map(([lessonId]) => lessonId);
  if (JSON.stringify(characterIds) !== JSON.stringify(expectedLessonIds)) {
    fail("Lesson character map must contain exactly EP01–EP20 and Q01–Q20 in order");
  }
  const names = characterEntries.map(([, character]) => character.name);
  if (new Set(names).size !== 40) fail("All 40 lesson character names must be distinct");
  const majorCounts = new Map();
  for (const [lessonId, character] of characterEntries) {
    if (!character.name || !character.major) fail(`${lessonId}: incomplete character name or major`);
    if (character.verifiedDate !== "2026-07-21") fail(`${lessonId}: major verification date must be 2026-07-21`);
    if (!/^https:\/\/www\.angelo\.edu\/academics\/programs\//.test(character.programUrl || "")) {
      fail(`${lessonId}: major must link to an official Angelo State program page`);
    }
    majorCounts.set(character.major, (majorCounts.get(character.major) || 0) + 1);
  }
  if (majorCounts.size !== 10 || [...majorCounts.values()].some((count) => count !== 4)) {
    fail("The character map must use 10 verified majors with four lesson assignments each");
  }
  const characterDoc = await read("docs/LESSON_CHARACTER_MAP.md");
  for (const [lessonId, character] of characterEntries) {
    if (!characterDoc.includes(lessonId.toUpperCase()) || !characterDoc.includes(character.name) || !characterDoc.includes(character.programUrl)) {
      fail(`${lessonId}: character or verified program is not documented`);
    }
  }
  pass("Forty distinct lesson characters and ten current Angelo State undergraduate majors are mapped and documented");

  const closedEpisodes = FOUNDATIONS_EPISODES.filter((episode) => !isEpisodeUnlocked(episode.id, [])).map((episode) => episode.id);
  const closedQuests = AI_QUESTS.filter((quest) => !isQuestUnlocked(quest.id, [])).map((quest) => quest.id);
  if (closedEpisodes.length) fail(`Foundation episodes still gated without progress: ${closedEpisodes.join(", ")}`);
  if (closedQuests.length) fail(`AI quests still gated without progress: ${closedQuests.join(", ")}`);
  if (!closedEpisodes.length && !closedQuests.length) pass("All 20 episodes and all 20 quests are open without prerequisite progress");
  if (isEpisodeUnlocked("ep99", []) || isQuestUnlocked("q99", [])) fail("Unknown curriculum IDs must not be treated as available");

  const foundationsPage = await read("foundations.html");
  const aiQuestPage = await read("ai-quest.html");
  const illustrativeNotice = "Student names and scenarios are illustrative. Majors are current Angelo State academic programs used to provide relevant context.";
  for (const [file, content, routeToken] of [
    ["foundations.html", foundationsPage, "foundations.html?ep=${ep.id}"],
    ["ai-quest.html", aiQuestPage, "ai-quest.html?q=${quest.id}"]
  ]) {
    if (!content.includes('document.createElement("a")')) fail(`${file}: map nodes must always render as links`);
    if (!content.includes('"available"')) fail(`${file}: map nodes must expose an available state`);
    if (!content.includes("getHref:")) fail(`${file}: accessible list must link to every curriculum item`);
    if (!content.includes(routeToken)) fail(`${file}: missing stable lesson route pattern`);
    if (!content.includes(illustrativeNotice)) fail(`${file}: missing illustrative student and verified-major notice`);
    if (!content.includes('"Who May Benefit"')) fail(`${file}: standard Who May Benefit concept label changed or missing`);
    for (const token of [
      "primaryStudent.name}'s scenario", "Possible benefit for ${escapeHtml(",
      "Possible risk for ${escapeHtml(", "Knowledge check for ${", "recovery option for ${escapeHtml("
    ]) {
      if (!content.toLowerCase().includes(token.toLowerCase())) fail(`${file}: named lesson context is missing ${token}`);
    }
    if (/\?\s*"active"\s*:\s*"locked"|document\.createElement\(unlocked\s*\?/.test(content)) {
      fail(`${file}: retains progress-gated map rendering`);
    }
  }

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
  const allCharacterNames = Object.values(LESSON_CHARACTERS).map((character) => character.name);

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

    const character = LESSON_CHARACTERS[item.id];
    if (!character) {
      fail(`${item.id}: missing primary student mapping`);
    } else {
      if (item.primaryStudent?.name !== character.name || item.primaryStudent?.major !== character.major || item.primaryStudent?.programUrl !== character.programUrl) {
        fail(`${item.id}: curriculum primaryStudent does not match the internal character map`);
      }
      const expectedIntroduction = `${character.major} major at Angelo State`;
      if (!item.openingNarrative.startsWith(`${character.name}, `) || !item.openingNarrative.includes(expectedIntroduction)) {
        fail(`${item.id}: opening must introduce ${character.name} as a ${character.major} major at Angelo State`);
      }
      if (item.conceptExplanation?.whoMayBenefit?.includes(character.name)) {
        fail(`${item.id}: Who May Benefit must remain general audience guidance, not character-specific copy`);
      }
      const consequences = [
        ...Object.values(item.immediateConsequences || {}),
        ...Object.values(item.oneYearConsequences || {}),
        ...Object.values(item.longTermConsequences || {})
      ];
      if (!consequences.some((value) => String(value).includes(character.name))) {
        fail(`${item.id}: consequence copy never identifies the assigned student`);
      }
      if (!item.realWorldExample?.includes(character.name)) {
        fail(`${item.id}: real-world example must use the assigned student`);
      }
      const namedSections = [
        ["scenario", item.scenario?.prompt],
        ["choice benefit or risk", (item.choices || []).flatMap((choice) => [choice.possibleBenefit, choice.possibleRisk]).join(" ")],
        ["immediate consequences", Object.values(item.immediateConsequences || {}).join(" ")],
        ["one-year consequences", Object.values(item.oneYearConsequences || {}).join(" ")],
        ["long-term consequences", Object.values(item.longTermConsequences || {}).join(" ")],
        ["recovery path", item.recoveryPath]
      ];
      for (const [section, sectionText] of namedSections) {
        if (!String(sectionText || "").includes(character.name)) {
          fail(`${item.id}: ${section} does not identify assigned student ${character.name}`);
        }
      }
    }

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
      if (/\{\{(?:name|subject|object|possessive|reflexive)\}\}/i.test(sourceText)) {
        fail(`${fieldPath}: learner placeholder remains in curriculum copy`);
      }
      if (/\bcomposite\b|\bfictional\s+(?:student|learner|scenario)\b/i.test(sourceText)) {
        fail(`${fieldPath}: composite or fictional learner label remains in curriculum copy`);
      }
      if (/\b(?:Taylor|Morgan|Alex|Jordan Ramirez)\b/.test(sourceText)) {
        fail(`${fieldPath}: legacy example name remains in assigned-student curriculum copy`);
      }
      if (!fieldPath.endsWith("conceptExplanation.whoMayBenefit") && /\byou(?:r|rs|rself)?\b/i.test(sourceText)) {
        fail(`${fieldPath}: second-person learner reference remains in the named lesson copy`);
      }
      if (character) {
        for (const otherName of allCharacterNames) {
          if (otherName !== character.name && sourceText.includes(otherName)) {
            fail(`${fieldPath}: uses ${otherName} instead of assigned student ${character.name}`);
          }
        }
        const characterReferences = [character.name, character.name.split(/\s+/)[0]];
        for (const reference of characterReferences) {
          const escapedName = reference.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          if (new RegExp(`\\b${escapedName}\\s+(?:are|were|have)\\b`, "i").test(sourceText)) {
            fail(`${fieldPath}: singular-name grammar error: ${sourceText.slice(0, 120)}`);
          }
          if (new RegExp(`\\b${escapedName}'s\\s+(?:is|are|were|have)\\b`, "i").test(sourceText)) {
            fail(`${fieldPath}: possessive grammar error: ${sourceText.slice(0, 120)}`);
          }
        }
      }
      const rendered = resolveLearnerText(sourceText, guestProfile, true);
      if (/\{\{[^}]+\}\}|\}\}/.test(rendered)) {
        fail(`${fieldPath}: unresolved guest placeholder after rendering`);
      }
      if (/\byou\s+(?:is|was|has|does)\b|\byou's\b/i.test(rendered)) {
        fail(`${fieldPath}: incorrect second-person grammar after rendering: ${rendered.slice(0, 120)}`);
      }
    }

    const fragments = STORY_FRAGMENTS.filter((fragment) => fragment.slot.startsWith(`${item.id}.`));
    if (!fragments.length) fail(`${item.id}: missing assigned-student personalization fragment`);
    for (const fragment of fragments) {
      if (!fragment.text.includes(character.name)) fail(`${fragment.slot}: fragment does not use assigned student ${character.name}`);
      if (/\{\{|\bcomposite\b|\bfictional\s+(?:student|learner)\b|\byou(?:r|rs|rself)?\b/i.test(fragment.text)) {
        fail(`${fragment.slot}: fragment contains a placeholder or generic learner label`);
      }
      for (const otherName of allCharacterNames) {
        if (otherName !== character.name && fragment.text.includes(otherName)) {
          fail(`${fragment.slot}: fragment uses ${otherName} instead of ${character.name}`);
        }
      }
    }
  }

  const visualizationEngine = await read("assets/visualization-engine.js");
  if (!visualizationEngine.includes("getLessonCharacter") || !visualizationEngine.includes("student.name}'s lesson figure")) {
    fail("Lesson visuals must identify the assigned student through the verified character map");
  }

  pass("Curriculum structure, assigned students, verified majors, fragments, consequences, knowledge checks, visuals, and guest rendering checked");
}

async function checkLessonRatings() {
  const profileEngine = await read("assets/profile-engine.js");
  const ratingModule = await read("assets/lesson-rating.js");
  const styles = await read("assets/styles.css");
  const foundations = await read("foundations.html");
  const aiQuest = await read("ai-quest.html");
  const journey = await read("journey.html");
  const cloudBridge = await read("assets/course-cloud-bridge.js");
  const migration = await read("supabase/migrations/create_digital_literacy_profiles_and_progress.sql");
  const testingPage = await read("testing-checklist.html");

  for (const token of [
    "lessonRatings: {}", "getLessonRating", "getLessonRatings", "setLessonRating",
    "getLessonRatingSummary", "isValidLessonId", "isValidLessonRating"
  ]) {
    if (!profileEngine.includes(token)) fail(`Profile state is missing usefulness-rating support: ${token}`);
  }
  if ((profileEngine.match(/const STORAGE_KEY\s*=/g) || []).length !== 1) {
    fail("Usefulness ratings must use the existing single namespaced course storage key");
  }

  const ratingImports = [...ratingModule.matchAll(/from\s+"([^"]+)"/g)].map((match) => match[1]);
  if (JSON.stringify(ratingImports.sort()) !== JSON.stringify(["./accessibility.js", "./profile-engine.js"])) {
    fail(`Usefulness rating control has unexpected dependencies: ${ratingImports.join(", ")}`);
  }
  if (/localStorage|sessionStorage|fetch\s*\(|sendBeacon|mailto:|XMLHttpRequest/i.test(ratingModule)) {
    fail("Usefulness rating control must not create separate storage, analytics, email, or network behavior");
  }
  for (const token of [
    "Rate usefulness", 'role="radiogroup"', 'role", "radio"', "aria-checked", "aria-disabled",
    "Rate this lesson ${rating} out of 5", "Complete this lesson before rating it.",
    "No usefulness rating yet.", "Your rating:",
    "ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End",
    "for (let rating = 1; rating <= 5; rating += 1)", "is-filled", "is-selected"
  ]) {
    if (!ratingModule.includes(token)) fail(`Usefulness rating control is missing ${token}`);
  }

  for (const [file, page, pathKey] of [
    ["foundations.html", foundations, "progress.foundations.completedNodeIds"],
    ["ai-quest.html", aiQuest, "progress.aiQuest.completedNodeIds"]
  ]) {
    const mounts = (page.match(/mountLessonRating\s*\(/g) || []).length;
    if (mounts < 3) fail(`${file}: usefulness ratings must appear in the visual map, accessible list, and lesson toolbar`);
    for (const token of [pathKey, "completed.includes(", "setCompleted(true)"]) {
      if (!page.includes(token)) fail(`${file}: usefulness rating completion gate is missing ${token}`);
    }
  }

  for (const token of [
    ".story-node-row", "grid-template-columns: minmax(0, 1fr) auto", ".accessible-map-list__item",
    ".lesson-rating", ".brain-rating-button", "min-width: 44px", "min-height: 44px",
    ".brain-rating-button.is-filled", ".brain-rating-button.is-selected", ".brain-rating-button:disabled",
    "prefers-color-scheme: dark", "max-width: 720px"
  ]) {
    if (!styles.includes(token)) fail(`Usefulness rating layout or accessible state is missing ${token}`);
  }

  for (const token of [
    "Usefulness ratings", "Foundations rated", "AI Quests rated", "Average usefulness",
    "getLessonRatingSummary", 'ratingSummary.average.toFixed(1)',
    "They are not analytics and are not emailed or reported."
  ]) {
    if (!journey.includes(token)) fail(`My Journey usefulness summary is missing ${token}`);
  }

  if (/lesson_?ratings?|lessonRatings/i.test(`${cloudBridge}\n${migration}`)) {
    fail("Usefulness ratings added a custom cloud schema or sync path instead of remaining in the existing local state model");
  }

  if (!/\.testing-checklist label\s*\{[\s\S]*?display:\s*block/.test(styles)
      || !/\.testing-checklist input\[type="checkbox"\]\s*\{[\s\S]*?position:\s*absolute/.test(styles)) {
    fail("Testing checklist text must flow as one block beside an independently positioned checkbox");
  }
  for (const obsolete of ["natural “you” and “your” language", "The fictional example"] ) {
    if (testingPage.includes(obsolete)) fail(`Testing checklist retains obsolete curriculum wording: ${obsolete}`);
  }
  for (const token of ["assigned illustrative student", "Rate usefulness", "rating brains have 44-pixel targets"]) {
    if (!testingPage.includes(token)) fail(`Testing checklist is missing named-student or usefulness-rating coverage: ${token}`);
  }

  const previousLocalStorage = globalThis.localStorage;
  const storage = new Map();
  globalThis.localStorage = {
    getItem: (key) => storage.has(key) ? storage.get(key) : null,
    setItem: (key, value) => storage.set(key, String(value)),
    removeItem: (key) => storage.delete(key)
  };
  try {
    const {
      loadState, saveState, getLessonRating, getLessonRatings,
      setLessonRating, getLessonRatingSummary
    } = await import(pathToFileURL(path.join(ROOT, "assets/profile-engine.js")));
    const seeded = loadState();
    seeded.profile.displayName = "Rating isolation test";
    seeded.progress.foundations.completedNodeIds = ["ep01"];
    seeded.progress.foundations.stars = { ep01: 3 };
    seeded.progress.aiQuest.completedNodeIds = ["q20"];
    seeded.progress.aiQuest.stars = { q20: 2 };
    seeded.achievements = ["first-steps"];
    saveState(seeded);

    const before = loadState();
    setLessonRating("ep01", 1);
    setLessonRating("q20", 5);
    setLessonRating("ep01", 5);
    const after = loadState();
    if (getLessonRating("ep01") !== 5 || getLessonRating("q20") !== 5) {
      fail("Usefulness ratings do not persist or cannot be changed later");
    }
    if (JSON.stringify(getLessonRatings()) !== JSON.stringify({ ep01: 5, q20: 5 })) {
      fail("Usefulness rating state contains unexpected values");
    }
    const summary = getLessonRatingSummary();
    if (summary.foundationsRated !== 1 || summary.aiQuestRated !== 1 || summary.average !== 5) {
      fail(`Usefulness summary is incorrect: ${JSON.stringify(summary)}`);
    }
    for (const [lessonId, rating] of [["ep00", 3], ["ep01", 0], ["q20", 6], ["q01", 2.5]]) {
      let rejected = false;
      try { setLessonRating(lessonId, rating); } catch { rejected = true; }
      if (!rejected) fail(`Invalid usefulness rating was accepted: ${lessonId}=${rating}`);
    }
    for (const key of ["profile", "progress", "achievements", "toolAssumptions", "streak", "account"]) {
      if (JSON.stringify(after[key]) !== JSON.stringify(before[key])) {
        fail(`Setting a usefulness rating changed unrelated course state: ${key}`);
      }
    }
    if (storage.size !== 1) fail(`Usefulness rating runtime created ${storage.size} storage keys instead of one`);
  } finally {
    if (previousLocalStorage === undefined) delete globalThis.localStorage;
    else globalThis.localStorage = previousLocalStorage;
  }

  pass("Five-brain usefulness ratings, completion gating, persistence, state isolation, Journey summary, accessibility, and checklist layout checked");
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
await checkPresentation();
await checkOnboardingFinalStep();
await checkInternalLinksAndExternalRel();
await checkFeedbackForm();
await checkNoUnsafeInputFields();
await checkNoSecretsOrForbiddenProjects();
await checkCurriculumAndGuestRendering();
await checkLessonRatings();
await checkPerCardResultsAndConcepts();
await checkFinancialHandoffAndButtonTerms();
await checkNoOfficialAsuAssets();
await checkJavaScriptSyntax();

console.log(`\nValidation complete: ${failures} failure(s), ${warnings} warning(s).`);
if (failures > 0) process.exit(1);
