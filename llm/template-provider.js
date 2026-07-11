// Ram Ready Digital Literacy — Template Provider (default, deterministic)
//
// This provider requires no model download and works on every supported
// device. It is the only provider the public site uses unless a learner
// explicitly opts into WebLLM. It joins prewritten, approved story
// fragments with simple token substitution — no generation happens here.

export const PROVIDER_ID = "template";

export function isAvailable() {
  return true;
}

export function resolveTokens(text, profile) {
  const pronouns = profile?.pronouns || { subject: "they", object: "them", possessive: "their" };
  const name = profile?.displayName || "you";
  return text
    .replaceAll("{{name}}", name)
    .replaceAll("{{subject}}", pronouns.subject)
    .replaceAll("{{object}}", pronouns.object)
    .replaceAll("{{possessive}}", pronouns.possessive);
}

export async function personalizeNarrative({ baseText, fragmentText, profile }) {
  const parts = [baseText, fragmentText].filter(Boolean);
  const joined = parts.join(" ");
  return resolveTokens(joined, profile);
}
