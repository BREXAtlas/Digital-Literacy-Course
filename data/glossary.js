// Ram Ready Digital Literacy — Glossary
// Plain-language definitions used by lesson pages. Not exhaustive — expanded
// over time; see docs/SOURCE_REVIEW_CHECKLIST.md.

export const GLOSSARY = [
  { term: "Metadata", definition: "Information about a file — such as its author, creation date, or file type — that isn't part of the visible content." },
  { term: "Version control", definition: "Keeping track of different drafts of a file over time so you always know which one is current." },
  { term: "Phishing", definition: "A message designed to trick someone into revealing credentials, clicking a malicious link, or taking an urgent unsafe action." },
  { term: "Multi-factor authentication (MFA)", definition: "A login step that requires a second proof of identity beyond a password, such as a code or approval prompt." },
  { term: "FERPA", definition: "A U.S. federal law that protects the privacy of student education records." },
  { term: "Primary source", definition: "An original document, dataset, or firsthand account, as opposed to a summary or analysis of it." },
  { term: "Peer-reviewed", definition: "Research that has been evaluated by other experts in the field before publication." },
  { term: "Citation trail", definition: "A record connecting a quote, paraphrase, or claim back to its original source, including page or location." },
  { term: "Hallucination (AI)", definition: "A fluent but fabricated or unsupported AI-generated claim, citation, or fact." },
  { term: "Prompt", definition: "The instruction given to an AI system describing the task, context, and desired output." },
  { term: "Disclosure (AI use)", definition: "A statement explaining which AI tool was used, for what purpose, and how the output was verified." },
  { term: "Synthetic media", definition: "AI-generated or AI-altered images, audio, or video, including deepfakes and cloned voices." },
  { term: "Agent (AI)", definition: "An AI system that can plan steps and use tools — such as search, files, or code — to pursue a goal, not just answer a single question." },
  { term: "Prompt injection", definition: "An attack that hides instructions inside content an AI system processes, attempting to override its intended behavior." },
  { term: "Sharing permission", definition: "The level of access (view, comment, or edit) granted to a specific person, group, or anyone with a link." }
];

export function findGlossaryTerm(term) {
  return GLOSSARY.find((g) => g.term.toLowerCase() === term.toLowerCase()) || null;
}
