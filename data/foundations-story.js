// Ram Ready Digital Literacy — University Digital Literacy Foundations (combined)
// Combines episodes 1-10 and 11-20 into a single 20-episode continuous storyline.
// Curriculum content lives in foundations-episodes-part1.js and part2.js;
// this file is the single import point used by the story engine.

import { EPISODES_PART1 } from "./foundations-episodes-part1.js";
import { EPISODES_PART2 } from "./foundations-episodes-part2.js";

export const FOUNDATIONS_EPISODES = [...EPISODES_PART1, ...EPISODES_PART2];

export const FOUNDATIONS_ACTS = [
  { number: 1, title: "Start College Digitally Ready", episodeIds: ["ep01", "ep02", "ep03", "ep04", "ep05"] },
  { number: 2, title: "Communicate and Find Information", episodeIds: ["ep06", "ep07", "ep08", "ep09", "ep10"] },
  { number: 3, title: "Read, Cite, and Protect", episodeIds: ["ep11", "ep12", "ep13", "ep14", "ep15"] },
  { number: 4, title: "Share, Recover, and Succeed", episodeIds: ["ep16", "ep17", "ep18", "ep19", "ep20"] }
];

export const SIMULATION_DISCLAIMER =
  "The variables tracked in this story (like fileOrganization, accountSecurity, or resilience) are simplified educational simulation scores. They are not a formal evaluation of intelligence, employability, morality, cybersecurity status, or academic standing.";

export function getEpisodeById(id) {
  return FOUNDATIONS_EPISODES.find((e) => e.id === id) || null;
}

export function getNextEpisodeId(id) {
  const ep = getEpisodeById(id);
  return ep ? ep.unlocks : null;
}

export function getActForEpisode(id) {
  return FOUNDATIONS_ACTS.find((a) => a.episodeIds.includes(id)) || null;
}
