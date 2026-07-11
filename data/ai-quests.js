// Ram Ready Digital Literacy — AI Digital Literacy Quest (combined)
// Combines quests 1-10 and 11-20 into the full 20-quest advanced path.
// Curriculum content lives in ai-quests-part1.js and part2.js; this file is
// the single import point used by the quest engine.

import { QUESTS_PART1 } from "./ai-quests-part1.js";
import { QUESTS_PART2 } from "./ai-quests-part2.js";

export const AI_QUESTS = [...QUESTS_PART1, ...QUESTS_PART2];

export const AI_QUEST_TIERS = [
  { number: 1, title: "Understand the System", questIds: ["q01", "q02", "q03", "q04", "q05"] },
  { number: 2, title: "Learn and Create Responsibly", questIds: ["q06", "q07", "q08", "q09", "q10"] },
  { number: 3, title: "Integrity, Media, and Tool Judgment", questIds: ["q11", "q12", "q13", "q14", "q15"] },
  { number: 4, title: "Code, Automate, and Build Responsibly", questIds: ["q16", "q17", "q18", "q19", "q20"] }
];

// Alias used by assets/quest-engine.js
export const AI_TIERS = AI_QUEST_TIERS;

export const TIER_DISCLAIMER =
  "These tiers describe increasing system capability and risk — not intelligence, human value, or a ranking of learners.";

export function getQuestById(id) {
  return AI_QUESTS.find((q) => q.id === id) || null;
}

export function getNextQuestId(id) {
  const q = getQuestById(id);
  return q ? q.unlocks : null;
}

export function getTierForQuest(id) {
  return AI_QUEST_TIERS.find((t) => t.questIds.includes(id)) || null;
}
