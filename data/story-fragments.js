// Ram Ready Digital Literacy — Approved Story Fragments (combined)
//
// Bounded personalization: every fragment below is prewritten and reviewed.
// The personalization engine (assets/personalization-engine.js) selects a
// fragment for a given narrative "slot" based on the learner's profile tags.
// Named lesson narratives keep their reviewed joins and assigned student;
// optional local-model smoothing is not used for this curriculum copy. See
// docs/PERSONALIZATION_MODEL.md.
//
// Fragment shape:
//   { slot, matchTags: [tag,...], text }
// `text` names the assigned lesson student directly and contains no learner
// placeholder tokens.
// A slot should have a "generic" fragment as the no-preference fallback.
// Selection order: first tag match in profile order, else "generic".
//
// Curriculum content lives in story-fragments-foundations.js (Foundations
// path) and story-fragments-quests.js (AI Quest path); this file is the
// single combined import point used by the personalization engine.

import { STORY_FRAGMENTS_FOUNDATIONS } from "./story-fragments-foundations.js";
import { STORY_FRAGMENTS_QUESTS } from "./story-fragments-quests.js";

export const STORY_FRAGMENTS = [...STORY_FRAGMENTS_FOUNDATIONS, ...STORY_FRAGMENTS_QUESTS];

export function selectFragment(slot, profileTags = []) {
  const candidates = STORY_FRAGMENTS.filter((f) => f.slot === slot);
  for (const tag of profileTags) {
    const match = candidates.find((f) => f.matchTags.includes(tag));
    if (match) return match;
  }
  return candidates.find((f) => f.matchTags.includes("generic")) || null;
}
