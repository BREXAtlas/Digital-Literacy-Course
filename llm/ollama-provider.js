// Ram Ready Digital Literacy — Ollama Provider (developer / local-institution mode)
//
// Talks only to a learner- or institution-controlled local Ollama endpoint
// (see https://github.com/ollama/ollama). Disabled by default and never
// reachable from the public GitHub Pages deployment unless an operator
// deliberately configures a local endpoint URL. Never sends data to any
// third-party or proprietary API.

export const PROVIDER_ID = "ollama";

export const MODEL_INFO = {
  name: "qwen2.5:0.5b",
  license: "Apache-2.0",
  source: "https://ollama.com/library/qwen2.5",
  approxDownloadSizeMB: 400,
  reviewedDate: "2026-07-10"
};

export function isAvailable(config) {
  return Boolean(config?.endpointUrl);
}

export async function personalizeNarrative({ baseText, fragmentText, profile, config }) {
  if (!isAvailable(config)) {
    throw new Error("Ollama endpoint is not configured. This mode is for local/institutional development only.");
  }
  const name = profile?.displayName || "you";
  const pronouns = profile?.pronouns || { subject: "they", object: "them", possessive: "their" };
  const system =
    "You smooth the transition between two short prewritten sentences about a fictional digital-literacy " +
    "story character. You may only resolve the character's name and pronouns and adjust joining words. " +
    "Do not add facts, numbers, citations, or new sentences. Do not invent anything not already present.";
  const user = `Name: ${name}\nPronouns: ${pronouns.subject}/${pronouns.object}/${pronouns.possessive}\nSentence 1: ${baseText}\nSentence 2: ${fragmentText || ""}`;

  const res = await fetch(`${config.endpointUrl.replace(/\/$/, "")}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: config.model || MODEL_INFO.name,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      stream: false
    })
  });
  if (!res.ok) throw new Error(`Ollama endpoint returned ${res.status}`);
  const data = await res.json();
  return data?.message?.content?.trim() || `${baseText} ${fragmentText || ""}`.trim();
}
