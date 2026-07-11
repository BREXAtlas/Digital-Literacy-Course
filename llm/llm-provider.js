// Ram Ready Digital Literacy — LLM Provider Abstraction
//
// No proprietary LLM API (OpenAI, Anthropic, Gemini, or similar) is used
// anywhere in this product. This module selects among three open providers
// and always validates output before use, falling back to the deterministic
// template on any failure. See docs/OPEN_SOURCE_AI.md.

import * as templateProvider from "./template-provider.js";
import { validateGeneratedText } from "./output-validator.js";

const PROHIBITED_NAME_PATTERN = /(openai|anthropic|claude|gemini|gpt-|chatgpt)/i;

export const PROVIDERS = {
  template: templateProvider
};

export async function personalize({ baseText, fragmentText, profile, providerId = "template", providerConfig = {} }) {
  if (PROHIBITED_NAME_PATTERN.test(providerId)) {
    throw new Error("Prohibited proprietary provider name.");
  }

  const sourceText = [baseText, fragmentText].filter(Boolean).join(" ");

  if (providerId === "template") {
    return templateProvider.personalizeNarrative({ baseText, fragmentText, profile });
  }

  try {
    let generated;
    if (providerId === "webllm") {
      const webllm = await import("./webllm-provider.js");
      generated = await webllm.personalizeNarrative({ baseText, fragmentText, profile, previouslyConsented: providerConfig.consented });
    } else if (providerId === "ollama") {
      const ollama = await import("./ollama-provider.js");
      generated = await ollama.personalizeNarrative({ baseText, fragmentText, profile, config: providerConfig });
    } else {
      throw new Error(`Unknown provider: ${providerId}`);
    }

    const result = validateGeneratedText(generated, sourceText);
    if (!result.valid) {
      console.warn(`LLM output failed validation (${result.reason}); falling back to template.`);
      return templateProvider.personalizeNarrative({ baseText, fragmentText, profile });
    }
    return generated;
  } catch (err) {
    console.warn("LLM provider unavailable, falling back to template:", err.message);
    return templateProvider.personalizeNarrative({ baseText, fragmentText, profile });
  }
}
