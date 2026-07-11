// Ram Ready Digital Literacy — LLM Output Validator
//
// Any text a local model produces must pass this validator before it is
// shown to a learner. If validation fails for any reason, callers must fall
// back to the deterministic template output. See docs/OPEN_SOURCE_AI.md.
//
// The validator enforces boundaries from the spec: a model may only resolve
// names/pronouns and lightly smooth transitions between approved fragments.
// It may never introduce facts, new citations, security claims, or
// sensitive-trait inferences that were not already present in the
// deterministic source text.

const CITATION_LIKE = /(https?:\/\/|\[[0-9]+\]|\bsource\s*:\s*)/i;
const ADVICE_LANGUAGE = /(you should submit|guaranteed safe|will pass|best tool|always secure|never gets flagged)/i;
const SENSITIVE_INFERENCE = /(you (are|must be) (gay|straight|religious|christian|muslim|jewish|disabled|pregnant))/i;

export function validateGeneratedText(generatedText, sourceFragmentsText) {
  if (typeof generatedText !== "string" || generatedText.trim().length === 0) {
    return { valid: false, reason: "empty_output" };
  }
  if (generatedText.length > sourceFragmentsText.length * 2 + 200) {
    return { valid: false, reason: "output_too_long_relative_to_source" };
  }
  if (ADVICE_LANGUAGE.test(generatedText)) {
    return { valid: false, reason: "advice_or_guarantee_language" };
  }
  if (SENSITIVE_INFERENCE.test(generatedText)) {
    return { valid: false, reason: "sensitive_trait_inference" };
  }
  if (CITATION_LIKE.test(generatedText)) {
    return { valid: false, reason: "introduced_citation_or_link" };
  }
  return { valid: true };
}
