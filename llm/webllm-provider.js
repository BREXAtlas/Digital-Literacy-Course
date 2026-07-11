// Ram Ready Digital Literacy — WebLLM Provider (optional, local, in-browser)
//
// Uses https://github.com/mlc-ai/web-llm to run a small open-weight model
// entirely inside the learner's browser. No profile data or lesson content
// is ever sent to a remote server. Requires explicit learner consent before
// any model file is downloaded. See docs/OPEN_SOURCE_AI.md for the model
// name, license, approximate size, and review date.

export const PROVIDER_ID = "webllm";

export const MODEL_INFO = {
  name: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
  license: "Apache-2.0",
  source: "https://github.com/mlc-ai/web-llm",
  approxDownloadSizeMB: 400,
  reviewedDate: "2026-07-10",
  deviceNote: "Recommended on a laptop or desktop with a modern browser (WebGPU support) and at least 4 GB of free memory. Not recommended on low-memory mobile devices."
};

let enginePromise = null;

export function isAvailable() {
  return typeof window !== "undefined" && "gpu" in navigator;
}

export async function requestConsentAndLoad({ onProgress } = {}) {
  if (!isAvailable()) {
    throw new Error("WebLLM is not available in this browser (WebGPU required).");
  }
  if (!enginePromise) {
    enginePromise = import(
      /* webpackIgnore: true */ "https://esm.run/@mlc-ai/web-llm"
    ).then(async (webllm) => {
      const engine = new webllm.MLCEngine();
      if (onProgress) engine.setInitProgressCallback(onProgress);
      await engine.reload(MODEL_INFO.name);
      return engine;
    });
  }
  return enginePromise;
}

export async function personalizeNarrative({ baseText, fragmentText, profile, previouslyConsented }) {
  if (!previouslyConsented) {
    throw new Error("WebLLM personalization requires explicit learner consent first.");
  }
  const engine = await enginePromise;
  if (!engine) {
    throw new Error("WebLLM engine is not loaded.");
  }
  const name = profile?.displayName || "you";
  const pronouns = profile?.pronouns || { subject: "they", object: "them", possessive: "their" };
  const system =
    "You smooth the transition between two short prewritten sentences about a fictional digital-literacy " +
    "story character. You may only resolve the character's name and pronouns and adjust joining words. " +
    "Do not add facts, numbers, citations, or new sentences. Do not invent anything not already present.";
  const user = `Name: ${name}\nPronouns: ${pronouns.subject}/${pronouns.object}/${pronouns.possessive}\nSentence 1: ${baseText}\nSentence 2: ${fragmentText || ""}`;
  const response = await engine.chat.completions.create({
    messages: [
      { role: "system", content: system },
      { role: "user", content: user }
    ],
    temperature: 0.2,
    max_tokens: 120
  });
  return response.choices?.[0]?.message?.content?.trim() || `${baseText} ${fragmentText || ""}`.trim();
}
