// Ram Ready Digital Literacy — Profile & Local Persistence Engine
//
// Guest mode is fully functional without any network call. All state is
// namespaced under a single localStorage key so it never collides with
// other sites or the Financial-Literacy-Course / Digital-Literacy-Course-
// projects.

const STORAGE_KEY = "ramReadyDigitalLiteracy.v1";

const DEFAULT_STATE = {
  profile: {
    displayName: "",
    presentationId: null, // "man" | "woman"
    pronouns: { subject: "they", object: "them", possessive: "their" },
    avatarStyle: null,
    valuesTags: [],
    interestTags: [],
    academicDirection: null,
    digitalPriorityTags: [],
    digitalGoal: null,
    fileOrganization: null,
    researchConfidence: null,
    aiExperience: null,
    genericStory: false,
    onboardingComplete: false,
    aiPersonalizationEnabled: false,
    aiProvider: "template"
  },
  progress: {
    foundations: { currentNodeId: "ep01", completedNodeIds: [], stars: {}, choices: {} },
    aiQuest: { currentNodeId: "q01", completedNodeIds: [], stars: {}, choices: {} }
  },
  lessonRatings: {},
  achievements: [],
  toolAssumptions: {},
  streak: { lastActiveDate: null, currentStreak: 0 },
  account: { linked: false, email: null }
};

const PRONOUNS_BY_PRESENTATION = {
  man: { subject: "he", object: "him", possessive: "his" },
  woman: { subject: "she", object: "her", possessive: "her" }
};

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function sanitizeText(input) {
  if (typeof input !== "string") return "";
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .slice(0, 60);
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return deepClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    return { ...deepClone(DEFAULT_STATE), ...parsed };
  } catch {
    return deepClone(DEFAULT_STATE);
  }
}

export function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  return state;
}

export function updateProfile(patch) {
  const state = loadState();
  if (typeof patch.displayName === "string") {
    patch.displayName = sanitizeText(patch.displayName);
  }
  if (patch.presentationId && PRONOUNS_BY_PRESENTATION[patch.presentationId]) {
    patch.pronouns = PRONOUNS_BY_PRESENTATION[patch.presentationId];
  }
  state.profile = { ...state.profile, ...patch };
  return saveState(state);
}

export function getProfileTags(profile = loadState().profile) {
  return [
    ...(profile.valuesTags || []),
    ...(profile.interestTags || []),
    profile.academicDirection,
    ...(profile.digitalPriorityTags || []),
    profile.digitalGoal
  ].filter(Boolean);
}

export function recordChoice(path, nodeId, choiceId) {
  const state = loadState();
  const key = path === "foundations" ? "foundations" : "aiQuest";
  state.progress[key].choices[nodeId] = choiceId;
  if (!state.progress[key].completedNodeIds.includes(nodeId)) {
    state.progress[key].completedNodeIds.push(nodeId);
  }
  touchStreak(state);
  return saveState(state);
}

export function setStars(path, nodeId, starCount) {
  const state = loadState();
  const key = path === "foundations" ? "foundations" : "aiQuest";
  state.progress[key].stars[nodeId] = Math.max(state.progress[key].stars[nodeId] || 0, starCount);
  return saveState(state);
}

function isValidLessonId(lessonId) {
  return /^(?:ep|q)(?:0[1-9]|1\d|20)$/.test(String(lessonId || ""));
}

function isValidLessonRating(rating) {
  return Number.isInteger(rating) && rating >= 1 && rating <= 5;
}

export function getLessonRating(lessonId) {
  if (!isValidLessonId(lessonId)) return null;
  const rating = loadState().lessonRatings?.[lessonId];
  return isValidLessonRating(rating) ? rating : null;
}

export function getLessonRatings() {
  const ratings = loadState().lessonRatings;
  if (!ratings || typeof ratings !== "object" || Array.isArray(ratings)) return {};
  return Object.fromEntries(
    Object.entries(ratings).filter(([lessonId, rating]) =>
      isValidLessonId(lessonId) && isValidLessonRating(rating)
    )
  );
}

export function setLessonRating(lessonId, rating) {
  if (!isValidLessonId(lessonId)) throw new TypeError("Unknown lesson rating target.");
  if (!isValidLessonRating(rating)) throw new RangeError("Lesson ratings must be whole numbers from 1 through 5.");
  const state = loadState();
  const currentRatings = state.lessonRatings && typeof state.lessonRatings === "object" && !Array.isArray(state.lessonRatings)
    ? state.lessonRatings
    : {};
  state.lessonRatings = { ...currentRatings, [lessonId]: rating };
  return saveState(state);
}

export function getLessonRatingSummary() {
  const ratings = getLessonRatings();
  const foundations = Object.entries(ratings).filter(([lessonId]) => lessonId.startsWith("ep"));
  const aiQuest = Object.entries(ratings).filter(([lessonId]) => lessonId.startsWith("q"));
  const values = [...foundations, ...aiQuest].map(([, rating]) => rating);
  return {
    foundationsRated: foundations.length,
    aiQuestRated: aiQuest.length,
    average: values.length ? values.reduce((sum, rating) => sum + rating, 0) / values.length : null
  };
}

export function unlockAchievement(achievementId) {
  const state = loadState();
  if (!state.achievements.includes(achievementId)) {
    state.achievements.push(achievementId);
    saveState(state);
    return true;
  }
  return false;
}

function touchStreak(state) {
  const today = new Date().toISOString().slice(0, 10);
  if (state.streak.lastActiveDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak.currentStreak = state.streak.lastActiveDate === yesterday ? state.streak.currentStreak + 1 : 1;
  state.streak.lastActiveDate = today;
}

export function resetAll() {
  localStorage.removeItem(STORAGE_KEY);
  return deepClone(DEFAULT_STATE);
}

export function exportProgress() {
  return JSON.stringify(loadState(), null, 2);
}

export function importProgress(jsonString) {
  const parsed = JSON.parse(jsonString);
  return saveState({ ...deepClone(DEFAULT_STATE), ...parsed });
}
