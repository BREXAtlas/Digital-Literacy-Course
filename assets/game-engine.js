// Ram Ready Digital Literacy — Game Mechanics Engine
//
// Rewards learning, recovery, verification, privacy, evidence use, clear
// communication, accessibility, and integrity — never speed or "most AI
// used." No loot boxes, wagering, or randomized rewards. Celebrations
// respect the learner's reduced-motion preference.

import { ACHIEVEMENTS, ACT_CELEBRATIONS, TIER_CELEBRATIONS, getAchievementById } from "../data/achievements.js";
import { loadState } from "./profile-engine.js";

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function celebrate(container, { title, detail }) {
  if (!container) return;
  const el = document.createElement("div");
  el.className = "celebration" + (prefersReducedMotion() ? " celebration--reduced" : "");
  el.setAttribute("role", "status");
  el.setAttribute("aria-live", "polite");
  el.innerHTML = `<strong>${escapeHtml(title)}</strong><p>${escapeHtml(detail || "")}</p>`;
  container.appendChild(el);
  window.setTimeout(() => el.remove(), 6000);
}

export function getEarnedAchievements() {
  const state = loadState();
  return state.achievements.map(getAchievementById).filter(Boolean);
}

export function getAllAchievements() {
  return ACHIEVEMENTS;
}

export function getActCelebrations() {
  return ACT_CELEBRATIONS;
}

export function getTierCelebrations() {
  return TIER_CELEBRATIONS;
}

export function getStreak() {
  return loadState().streak;
}

export function getStarSummary(path) {
  const state = loadState();
  const key = path === "foundations" ? "foundations" : "aiQuest";
  const stars = state.progress[key].stars;
  return Object.values(stars).reduce((sum, n) => sum + n, 0);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
