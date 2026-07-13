// Ram Ready Digital Literacy — Personalization Engine
//
// Bounded personalization only: selects an approved, prewritten fragment for
// a narrative slot based on profile tags, then (optionally, with consent)
// asks an open-source local model to smooth the join. The deterministic
// template path always works with no model at all. See
// docs/PERSONALIZATION_MODEL.md.

import { selectFragment } from "../data/story-fragments.js";
import { personalize } from "../llm/llm-provider.js";
import { getProfileTags } from "./profile-engine.js";

const THIRD_PERSON_TO_SECOND = new Map(Object.entries({
  is: "are", was: "were", has: "have", does: "do",
  spends: "spend", submits: "submit", creates: "create", moves: "move",
  opens: "open", compares: "compare", chooses: "choose", uses: "use",
  asks: "ask", notices: "notice", writes: "write", sends: "send",
  builds: "build", organizes: "organize", sees: "see", gets: "get",
  turns: "turn", checks: "check", finds: "find", keeps: "keep",
  receives: "receive", decides: "decide", learns: "learn", starts: "start",
  shares: "share", uploads: "upload", verifies: "verify", saves: "save",
  reviews: "review", reads: "read", selects: "select", clicks: "click",
  follows: "follow", leaves: "leave", needs: "need", wants: "want",
  feels: "feel", knows: "know", remembers: "remember", worries: "worry",
  tries: "try", plans: "plan", sets: "set", adds: "add", changes: "change",
  completes: "complete", studies: "study", carries: "carry", applies: "apply",
  identifies: "identify", relies: "rely", protects: "protect", recognizes: "recognize",
  reports: "report", confirms: "confirm", tests: "test", explains: "explain",
  works: "work", loses: "lose", gains: "gain", faces: "face", fixes: "fix",
  returns: "return", continues: "continue", maintains: "maintain", develops: "develop",
  becomes: "become", discovers: "discover", understands: "understand", evaluates: "evaluate",
  contacts: "contact", responds: "respond", documents: "document", records: "record",
  searches: "search", cites: "cite", paraphrases: "paraphrase", drafts: "draft",
  revises: "revise", accepts: "accept", rejects: "reject", approves: "approve",
  downloads: "download", stores: "store", names: "name", renames: "rename"
}));

function cleanDisplayName(value) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 40);
}

function correctSecondPersonGrammar(text) {
  let output = text;

  output = output
    .replace(/\byou's\b/gi, "your")
    .replace(/\byour is\b/gi, "you are")
    .replace(/\byour are\b/gi, "you are")
    .replace(/\byou is\b/gi, "you are")
    .replace(/\byou was\b/gi, "you were")
    .replace(/\byou has\b/gi, "you have")
    .replace(/\byou does\b/gi, "you do");

  output = output.replace(/\byou\s+([A-Za-z]+)\b/g, (full, word) => {
    const replacement = THIRD_PERSON_TO_SECOND.get(word.toLowerCase());
    if (!replacement) return full;
    const adjusted = /^[A-Z]/.test(word)
      ? replacement.charAt(0).toUpperCase() + replacement.slice(1)
      : replacement;
    return `you ${adjusted}`;
  });

  return output;
}

/**
 * Resolve every learner-facing token. A saved display name uses third-person
 * narration with the selected pronouns. Guest and generic stories use natural
 * second person and never expose template syntax or a fake placeholder name.
 */
export function resolveLearnerText(text, profile = {}, useGenericStory = false) {
  if (text === null || text === undefined) return "";

  const source = String(text);
  const name = cleanDisplayName(profile?.displayName);
  const useSecondPerson = useGenericStory || !name;

  if (useSecondPerson) {
    let output = source
      .replaceAll("{{name}}'s", "your")
      .replaceAll("{{name}}’s", "your")
      .replaceAll("{{possessive}}", "your")
      .replaceAll("{{subject}}", "you")
      .replaceAll("{{object}}", "you")
      .replaceAll("{{reflexive}}", "yourself")
      .replaceAll("{{name}}", "you");

    output = correctSecondPersonGrammar(output);
    output = output.replace(/\{\{[^}]+\}\}/g, "");
    return output.replace(/\s{2,}/g, " ").replace(/\s+([,.;!?])/g, "$1").trim();
  }

  const pronouns = profile?.pronouns || {
    subject: "they",
    object: "them",
    possessive: "their",
    reflexive: "themself"
  };

  return source
    .replaceAll("{{name}}", name)
    .replaceAll("{{subject}}", pronouns.subject || "they")
    .replaceAll("{{object}}", pronouns.object || "them")
    .replaceAll("{{possessive}}", pronouns.possessive || "their")
    .replaceAll("{{reflexive}}", pronouns.reflexive || "themself")
    .replace(/\{\{[^}]+\}\}/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;!?])/g, "$1")
    .trim();
}

export async function personalizeSlot({ slot, baseText, profile, useGenericStory }) {
  if (!slot || useGenericStory) {
    return resolveLearnerText(baseText, profile, useGenericStory);
  }

  const tags = getProfileTags(profile);
  const fragment = selectFragment(slot, tags);
  const fragmentText = fragment ? fragment.text : "";

  if (profile.aiPersonalizationEnabled && profile.aiProvider !== "template") {
    try {
      const personalized = await personalize({
        baseText,
        fragmentText,
        profile,
        providerId: profile.aiProvider,
        providerConfig: profile.aiProviderConfig || {}
      });
      return resolveLearnerText(personalized, profile, useGenericStory);
    } catch {
      // Fall through to deterministic path.
    }
  }

  const joined = [baseText, fragmentText].filter(Boolean).join(" ");
  return resolveLearnerText(joined, profile, useGenericStory);
}

export function describePersonalizationForPreview(profile) {
  const tags = getProfileTags(profile);
  return {
    willAdapt: tags.length > 0
      ? `Story details will reflect: ${tags.join(", ")}.`
      : "No preferences selected — the standard second-person story will be used.",
    staysStandard: "All lesson facts, numbers, quiz answers, and consequences are identical for every learner regardless of selections."
  };
}
