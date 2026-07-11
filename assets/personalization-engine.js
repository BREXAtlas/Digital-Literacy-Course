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

export async function personalizeSlot({ slot, baseText, profile, useGenericStory }) {
  if (!slot || useGenericStory) {
    return resolveTokensOnly(baseText, profile);
  }
  const tags = getProfileTags(profile);
  const fragment = selectFragment(slot, tags);
  const fragmentText = fragment ? fragment.text : "";

  if (profile.aiPersonalizationEnabled && profile.aiProvider !== "template") {
    try {
      return await personalize({
        baseText,
        fragmentText,
        profile,
        providerId: profile.aiProvider,
        providerConfig: profile.aiProviderConfig || {}
      });
    } catch {
      // fall through to deterministic path
    }
  }

  const joined = [baseText, fragmentText].filter(Boolean).join(" ");
  return resolveTokensOnly(joined, profile);
}

function resolveTokensOnly(text, profile) {
  const pronouns = profile?.pronouns || { subject: "they", object: "them", possessive: "their" };
  const name = profile?.displayName || "you";
  return (text || "")
    .replaceAll("{{name}}", name)
    .replaceAll("{{subject}}", pronouns.subject)
    .replaceAll("{{object}}", pronouns.object)
    .replaceAll("{{possessive}}", pronouns.possessive);
}

export function describePersonalizationForPreview(profile) {
  const tags = getProfileTags(profile);
  return {
    willAdapt: tags.length > 0
      ? `Story details will reflect: ${tags.join(", ")}.`
      : "No preferences selected — the standard story will be used.",
    staysStandard: "All lesson facts, numbers, quiz answers, and consequences are identical for every learner regardless of selections."
  };
}
