// Ram Ready Digital Literacy — University Digital Literacy Foundations Story Engine
//
// Renders the 20-episode continuous storyline from structured data
// (data/foundations-story.js) and tracks simplified educational simulation
// variables. These variables are a teaching simplification, not a formal
// evaluation of a person's intelligence, employability, or academic
// standing, and no setback is ever an irreversible dead end.

import { FOUNDATIONS_EPISODES, FOUNDATIONS_ACTS } from "../data/foundations-story.js";
import { getSourcesByIds } from "../data/source-registry.js";
import { personalizeSlot } from "./personalization-engine.js";
import { recordChoice, setStars, unlockAchievement, loadState } from "./profile-engine.js";

export const INITIAL_SIM_STATE = {
  fileOrganization: 30,
  submissionReliability: 40,
  communicationClarity: 40,
  calendarReadiness: 30,
  researchConfidence: 30,
  sourceJudgment: 30,
  citationIntegrity: 40,
  privacyAwareness: 40,
  accountSecurity: 40,
  sharingControl: 30,
  accessibilityAwareness: 30,
  professionalConfidence: 40,
  resilience: 50,
  integrity: 60,
  wellbeing: 60
};

export function getEpisode(id) {
  return FOUNDATIONS_EPISODES.find((e) => e.id === id) || null;
}

export function getEpisodesForAct(act) {
  return FOUNDATIONS_EPISODES.filter((e) => e.act === act);
}

export function getActs() {
  return FOUNDATIONS_ACTS;
}

export function getNextEpisodeId(id) {
  const ep = getEpisode(id);
  return ep ? ep.unlocks : null;
}

export function isEpisodeUnlocked(id, _completedNodeIds = []) {
  // Every real episode is intentionally open for review, testing, and assignment.
  // Completion remains tracked, but it never gates access to another episode.
  return Boolean(getEpisode(id));
}

export function applyChoiceEffect(simState, effect = {}) {
  const next = { ...simState };
  for (const [key, delta] of Object.entries(effect)) {
    if (typeof next[key] === "number") {
      next[key] = Math.min(100, Math.max(0, next[key] + delta));
    }
  }
  return next;
}

export async function renderEpisodeNarrative(episode, profile, useGenericStory) {
  const opening = await personalizeSlot({
    slot: episode.personalizationSlots?.[0] || null,
    baseText: episode.openingNarrative,
    profile,
    useGenericStory
  });
  return opening;
}

export function getSourcesForEpisode(episode) {
  return getSourcesByIds(episode.sourceIds || []);
}

export function submitChoice(episodeId, choiceId) {
  return recordChoice("foundations", episodeId, choiceId);
}

export function computeStars(episode, { scenarioComplete, knowledgeCheckPassed }) {
  let stars = 0;
  if (scenarioComplete) stars += 1; // Discover
  if (scenarioComplete) stars += 1; // Decide
  if (knowledgeCheckPassed) stars += 1; // Explain
  return stars;
}

export function completeEpisode(episode, { stars }) {
  setStars("foundations", episode.id, stars);
  if (stars >= 3 && episode.achievementId) {
    unlockAchievement(episode.achievementId);
  }
  return loadState();
}

export function isActComplete(act, completedNodeIds) {
  return getEpisodesForAct(act).every((e) => completedNodeIds.includes(e.id));
}
