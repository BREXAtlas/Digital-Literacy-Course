// Ram Ready Digital Literacy — Vision-Casting Onboarding Options
// Every question includes a "skip" value. No real files, passwords, account
// details, grades, student IDs, transcripts, or private documents are ever
// requested. Selections only unlock prewritten, approved story fragments —
// see data/story-fragments.js and docs/PERSONALIZATION_MODEL.md.

export const CHARACTER_PRESENTATIONS = [
  { id: "man", label: "Play as a man", pronouns: { subject: "he", object: "him", possessive: "his" } },
  { id: "woman", label: "Play as a woman", pronouns: { subject: "she", object: "her", possessive: "her" } }
  // Additional presentations can be added here without rewriting curriculum —
  // every story fragment keys off pronoun tokens, not a hardcoded gender.
];

export const AVATAR_STYLES = [
  { id: "avatar-1", label: "Sunrise", description: "Warm gold and blue geometric illustration" },
  { id: "avatar-2", label: "Skyline", description: "Cool blue cityscape-inspired illustration" },
  { id: "avatar-3", label: "Trailblazer", description: "Bold gold trail-and-star illustration" },
  { id: "avatar-4", label: "Fieldnote", description: "Soft green and blue notebook-style illustration" }
];

export const VALUES_OPTIONS = [
  "stability", "flexibility", "family", "creativity", "ownership", "service",
  "travel", "privacy", "community_impact", "generosity", "comfortable_lifestyle",
  "building_something_lasting", "still_figuring_it_out"
].map((id) => ({ id, label: labelize(id) }));

export const INTEREST_OPTIONS = [
  "basketball", "football", "other_sports", "fitness_martial_arts",
  "gaming_technology", "research_science", "business_entrepreneurship",
  "music", "film_photography_visual_arts", "cooking_hospitality",
  "education", "healthcare", "public_service", "skilled_trades",
  "nature_travel", "community_service", "undecided"
].map((id) => ({ id, label: labelize(id) }));

export const ACADEMIC_DIRECTION_OPTIONS = [
  "general_university_study", "research_science", "coding_technology",
  "business_entrepreneurship", "creative_media", "education", "healthcare",
  "public_service", "skilled_trades", "mixed_undecided"
].map((id) => ({ id, label: labelize(id) }));

export const DIGITAL_PRIORITY_OPTIONS = [
  "organize_files", "submit_right_work", "communicate_professionally",
  "manage_deadlines", "find_reliable_sources", "read_academic_sources",
  "cite_correctly", "protect_accounts", "recognize_scams",
  "handle_private_documents", "improve_accessibility", "use_ai_responsibly",
  "learn_coding_assistants", "understand_agents_automation", "still_figuring_it_out"
].map((id) => ({ id, label: labelize(id) }));

export const DIGITAL_GOAL_OPTIONS = [
  "understand_basics", "stop_losing_files", "improve_submissions",
  "write_better_email", "build_weekly_workflow", "research_credible_sources",
  "protect_accounts", "handle_official_documents", "use_ai_as_tutor",
  "understand_ai_citation_disclosure", "learn_code_assistant_basics",
  "understand_ai_agents", "generic_goal"
].map((id) => ({ id, label: labelize(id) }));

export const FILE_ORGANIZATION_OPTIONS = [
  "everything_in_downloads", "few_folders", "basic_course_system",
  "already_organized", "generic_example"
].map((id) => ({ id, label: labelize(id) }));

export const RESEARCH_CONFIDENCE_OPTIONS = [
  "new_to_research", "some_experience", "comfortable_with_sources",
  "very_confident", "generic_example"
].map((id) => ({ id, label: labelize(id) }));

export const AI_EXPERIENCE_OPTIONS = [
  "no_experience", "basic_chatbot_use", "some_prompting_experience",
  "coding_data_assistant_experience", "agent_automation_experience", "generic_example"
].map((id) => ({ id, label: labelize(id) }));

function labelize(id) {
  const overrides = {
    community_impact: "Community impact",
    comfortable_lifestyle: "Comfortable lifestyle",
    building_something_lasting: "Building something that lasts",
    still_figuring_it_out: "Still figuring it out",
    other_sports: "Other sports",
    fitness_martial_arts: "Fitness or martial arts",
    gaming_technology: "Gaming and technology",
    research_science: "Research and science",
    business_entrepreneurship: "Business and entrepreneurship",
    film_photography_visual_arts: "Film, photography, or visual arts",
    cooking_hospitality: "Cooking and hospitality",
    public_service: "Public service",
    skilled_trades: "Skilled trades",
    nature_travel: "Nature and travel",
    community_service: "Community service",
    undecided: "Undecided",
    general_university_study: "General university study",
    coding_technology: "Coding and technology",
    creative_media: "Creative media",
    mixed_undecided: "Mixed or undecided",
    organize_files: "Organize my files",
    submit_right_work: "Submit the right work",
    communicate_professionally: "Communicate professionally",
    manage_deadlines: "Manage deadlines",
    find_reliable_sources: "Find reliable sources",
    read_academic_sources: "Read academic sources",
    cite_correctly: "Cite correctly",
    protect_accounts: "Protect my accounts",
    recognize_scams: "Recognize scams",
    handle_private_documents: "Handle private documents safely",
    improve_accessibility: "Improve accessibility",
    use_ai_responsibly: "Use AI responsibly",
    learn_coding_assistants: "Learn coding assistants",
    understand_agents_automation: "Understand agents and automation",
    understand_basics: "Understand the basics",
    stop_losing_files: "Stop losing files",
    improve_submissions: "Improve assignment submissions",
    write_better_email: "Write better academic email",
    build_weekly_workflow: "Build a reliable weekly workflow",
    research_credible_sources: "Research credible sources",
    handle_official_documents: "Handle official documents safely",
    use_ai_as_tutor: "Use AI as a learning tool",
    understand_ai_citation_disclosure: "Understand AI citation and disclosure",
    learn_code_assistant_basics: "Learn code-assistant basics",
    understand_ai_agents: "Understand AI agents",
    generic_goal: "Use a generic goal",
    everything_in_downloads: "Everything is usually in Downloads",
    few_folders: "I use a few folders",
    basic_course_system: "I have a basic course system",
    already_organized: "I am organized already",
    generic_example: "Use a generic example",
    new_to_research: "New to academic research",
    some_experience: "Some experience",
    comfortable_with_sources: "Comfortable with sources",
    very_confident: "Very confident",
    no_experience: "No experience",
    basic_chatbot_use: "Basic chatbot use",
    some_prompting_experience: "Some prompting experience",
    coding_data_assistant_experience: "Coding or data assistant experience",
    agent_automation_experience: "Agent or automation experience"
  };
  if (overrides[id]) return overrides[id];
  return id
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export const SKIP_VALUE = "skip";

export const ONBOARDING_SCREENS = [
  "character", "values", "interests", "academic_direction",
  "digital_priorities", "digital_goal", "starting_ranges", "preview"
];
