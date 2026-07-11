// Ram Ready Digital Literacy — Approved Story Fragments: AI Digital Literacy Quest
// Bounded personalization: every fragment below is prewritten and reviewed.
// See data/story-fragments.js (merge point) and docs/PERSONALIZATION_MODEL.md.
// Fragment shape: { slot, matchTags: [tag,...], text }
// text may use tokens: {{name}}, {{subject}}, {{object}}, {{possessive}}

export const STORY_FRAGMENTS_QUESTS = [
  // ---- Quest 1: interests and current AI experience ----
  { slot: "q01.context", matchTags: ["generic"],
    text: "{{name}} has used a chatbot a few times but has never really stopped to ask what it's actually doing under the hood." },
  { slot: "q01.context", matchTags: ["no_experience"],
    text: "{{name}} has barely touched a generative AI tool before, which makes this a genuinely first look at how the technology works." },
  { slot: "q01.context", matchTags: ["gaming_technology", "coding_technology"],
    text: "{{name}}'s interest in technology means {{subject}} has already heard plenty of AI hype — this quest is about separating that hype from how the systems actually work." },
  { slot: "q01.context", matchTags: ["agent_automation_experience", "coding_data_assistant_experience"],
    text: "{{name}} has already experimented with AI tools for coding or data work, which makes the pattern-versus-person distinction especially relevant." },

  // ---- Quest 2: research direction ----
  { slot: "q02.context", matchTags: ["generic"],
    text: "{{name}} has a research assignment coming up and wants to use AI without cutting corners on real evidence." },
  { slot: "q02.context", matchTags: ["research_science"],
    text: "{{name}}'s pull toward research and science makes the search-versus-synthesis distinction especially useful going forward." },
  { slot: "q02.context", matchTags: ["find_reliable_sources", "research_credible_sources"],
    text: "Finding reliable sources is already one of {{name}}'s stated priorities, which makes this quest directly relevant." },

  // ---- Quest 3: source-verification context ----
  { slot: "q03.context", matchTags: ["generic"],
    text: "{{name}} has started to notice that AI answers can sound confident even when something feels slightly off." },
  { slot: "q03.context", matchTags: ["cite_correctly", "understand_ai_citation_disclosure"],
    text: "Since citing correctly is already a priority for {{name}}, catching a fabricated AI citation before it reaches a paper matters even more." },

  // ---- Quest 4: values and high-impact decisions ----
  { slot: "q04.context", matchTags: ["generic"],
    text: "{{name}} hasn't thought much yet about which AI-assisted decisions deserve more scrutiny than others." },
  { slot: "q04.context", matchTags: ["service", "community_impact"],
    text: "{{name}}'s pull toward service and community impact makes this quest's focus on high-impact decisions about people especially relevant." },
  { slot: "q04.context", matchTags: ["stability"],
    text: "{{name}}'s value of stability connects naturally to wanting AI-assisted decisions handled carefully and predictably." },

  // ---- Quest 5: learning goal ----
  { slot: "q05.context", matchTags: ["generic"],
    text: "{{name}} tends to type quick, vague requests into AI tools and often gets back something that doesn't quite fit." },
  { slot: "q05.context", matchTags: ["understand_basics"],
    text: "Since {{name}}'s goal is understanding the basics, mastering a simple, repeatable prompting pattern is a natural place to start." },

  // ---- Quest 6: preferred learning approach ----
  { slot: "q06.context", matchTags: ["generic"],
    text: "{{name}} has an exam coming up and has to decide how to actually use AI while studying for it." },
  { slot: "q06.context", matchTags: ["use_ai_as_tutor"],
    text: "Using AI as a learning tool is already one of {{name}}'s stated goals, which makes this quest a direct match." },
  { slot: "q06.context", matchTags: ["education"],
    text: "{{name}}'s interest in education makes the line between real tutoring and simple substitution especially worth understanding." },

  // ---- Quest 7: writing context ----
  { slot: "q07.context", matchTags: ["generic"],
    text: "{{name}} has a draft due and needs to decide exactly where AI's role should end and {{possessive}} own writing should take over." },
  { slot: "q07.context", matchTags: ["creative_media", "film_photography_visual_arts", "music"],
    text: "{{name}}'s creative interests make protecting personal voice and authorship in AI-assisted writing especially important." },

  // ---- Quest 8: research interest ----
  { slot: "q08.context", matchTags: ["generic"],
    text: "{{name}} has a broad topic in mind but needs help narrowing it into something researchable." },
  { slot: "q08.context", matchTags: ["research_science", "healthcare"],
    text: "{{name}}'s draw toward research-heavy fields makes narrowing a broad interest into a real, testable question a skill worth building early." },

  // ---- Quest 9: course context ----
  { slot: "q09.context", matchTags: ["generic"],
    text: "{{name}} is juggling more than one course this term, each with a different take on AI use." },
  { slot: "q09.context", matchTags: ["mixed_undecided", "general_university_study"],
    text: "With {{possessive}} academic direction still taking shape, {{name}} is especially likely to encounter a wide range of AI-use rules across different departments." },

  // ---- Quest 10: academic-integrity decision ----
  { slot: "q10.context", matchTags: ["generic"],
    text: "{{name}} runs into an assignment where the AI-use rule isn't stated in so many words." },
  { slot: "q10.context", matchTags: ["still_figuring_it_out"],
    text: "{{name}} is still figuring out {{possessive}} own approach to AI use, which makes a clear sorting framework especially useful right now." },

  // ---- Quest 11: citation style context ----
  { slot: "q11.context", matchTags: ["generic"],
    text: "{{name}}'s course requires a specific kind of AI disclosure, and {{subject}} wants to get it right." },
  { slot: "q11.context", matchTags: ["understand_ai_citation_disclosure", "cite_correctly"],
    text: "Understanding AI citation and disclosure is already one of {{name}}'s stated priorities, which makes this quest a direct match." },

  // ---- Quest 13: tool-use context ----
  { slot: "q13.context", matchTags: ["generic"],
    text: "{{name}} has more than one AI tool available and has to think about which one actually fits a given task." },
  { slot: "q13.context", matchTags: ["privacy", "handle_private_documents"],
    text: "{{name}}'s attention to privacy makes checking permission and data handling before any upload especially natural." },

  // ---- Quest 14: creative-media interest ----
  { slot: "q14.context", matchTags: ["generic"],
    text: "{{name}} sees a dramatic, realistic-looking clip circulating online and has to decide how to react to it." },
  { slot: "q14.context", matchTags: ["film_photography_visual_arts", "music"],
    text: "{{name}}'s interest in visual and audio media makes the line between creative synthetic media and deceptive synthetic media especially relevant." },

  // ---- Quest 15: coding/data interest ----
  { slot: "q15.context", matchTags: ["generic"],
    text: "{{name}} asks a coding assistant for help with a class project and has to decide what to do with what it produces." },
  { slot: "q15.context", matchTags: ["gaming_technology", "coding_technology", "learn_coding_assistants"],
    text: "{{name}}'s interest in coding makes reviewing and testing AI-generated code a skill worth building early and well." },

  // ---- Quest 16: coding/automation interest ----
  { slot: "q16.context", matchTags: ["generic"],
    text: "{{name}} reads about an AI agent that can take real actions, not just answer questions, and starts thinking about what that changes." },
  { slot: "q16.context", matchTags: ["understand_agents_automation", "understand_ai_agents"],
    text: "Understanding AI agents is already one of {{name}}'s stated goals, which makes this quest especially relevant." },

  // ---- Quest 17: business/workflow interest ----
  { slot: "q17.context", matchTags: ["generic"],
    text: "{{name}} notices how easy it is to ask AI to 'just do the whole thing' — and how much that can hide." },
  { slot: "q17.context", matchTags: ["business_entrepreneurship"],
    text: "{{name}}'s interest in business and entrepreneurship makes staged, checkpointed workflows a directly useful skill for future projects." },

  // ---- Quest 18: coding interest continuation ----
  { slot: "q18.context", matchTags: ["generic"],
    text: "{{name}} has been experimenting with letting AI generate entire features at once, and it's starting to get harder to track what changed." },
  { slot: "q18.context", matchTags: ["coding_technology", "gaming_technology"],
    text: "{{name}}'s coding interest makes version control and incremental testing a skill worth locking in early." },

  // ---- Quest 19: research/automation interest ----
  { slot: "q19.context", matchTags: ["generic"],
    text: "{{name}} is asked to design an agent for a class project and has to decide exactly what it should be allowed to do on its own." },
  { slot: "q19.context", matchTags: ["research_science", "business_entrepreneurship", "understand_agents_automation"],
    text: "{{name}}'s interest in research or building things makes designing an agent with real boundaries a directly transferable skill." },

  // ---- Quest 20: all relevant values, goals, and prior choices ----
  { slot: "q20.context", matchTags: ["generic"],
    text: "{{name}} steps into the final quest carrying everything learned across this entire AI literacy path." },
  { slot: "q20.context", matchTags: ["building_something_lasting"],
    text: "{{name}}'s drive to build something lasting is tested directly by this final, multi-part simulation." },
  { slot: "q20.context", matchTags: ["integrity", "still_figuring_it_out"],
    text: "Whatever {{name}}'s starting point was with AI, this final quest is where every individual lesson comes together at once." }
];
