// Ram Ready Digital Literacy — Approved Story Fragments (Foundations path)
//
// Bounded personalization: every fragment below is prewritten and reviewed.
// The personalization engine (assets/personalization-engine.js) selects a
// fragment for a given narrative "slot" based on the learner's profile tags.
// An optional local LLM (llm/webllm-provider.js) may smooth the joins between
// fragments and resolve names/pronouns, but it may never write new fragments,
// facts, numbers, or consequences. See docs/PERSONALIZATION_MODEL.md.
//
// Fragment shape: { slot, matchTags: [tag,...], text }
// `text` may use tokens: {{name}}, {{subject}}, {{object}}, {{possessive}}
// Tag vocabulary comes from data/onboarding-options.js.

export const STORY_FRAGMENTS_FOUNDATIONS = [
  // ---- Episode 1: name, values, academic direction ----
  { slot: "ep01.opening_detail", matchTags: ["generic"],
    text: "{{name}} settles into a dorm room with a laptop, a half-unpacked duffel bag, and a class schedule that still feels unreal." },
  { slot: "ep01.opening_detail", matchTags: ["building_something_lasting"],
    text: "{{name}} keeps thinking past this semester, toward the kind of reliable systems {{subject}} wants to still be using years from now." },
  { slot: "ep01.opening_detail", matchTags: ["community_impact", "service"],
    text: "{{name}} already knows {{subject}} wants {{possessive}} work to be trustworthy and easy for others to rely on, even before the first deadline hits." },
  { slot: "ep01.opening_detail", matchTags: ["still_figuring_it_out"],
    text: "{{name}} hasn't figured out a system yet, and that's fine — the first weeks of college are exactly the place to start building one." },
  { slot: "ep01.opening_detail", matchTags: ["research_science", "general_university_study"],
    text: "{{name}} already suspects a research-heavy course load is going to generate a lot of files, fast." },

  // ---- Episode 2: course load and interests ----
  { slot: "ep02.context", matchTags: ["generic"],
    text: "Between a full course load and everything else, {{name}} needs file names {{subject}} can actually trust at a glance." },
  { slot: "ep02.context", matchTags: ["gaming_technology", "coding_technology"],
    text: "{{name}} is used to naming project files carefully for personal coding projects — the same instinct applies here, just for coursework." },
  { slot: "ep02.context", matchTags: ["business_entrepreneurship"],
    text: "{{name}} is already thinking about how a side project someday will need the same kind of clear file naming." },

  // ---- Episode 3: organization style ----
  { slot: "ep03.context", matchTags: ["generic"],
    text: "Taylor's folder system is still new, so Taylor has not yet developed the habit of checking file versions before submitting." },
  { slot: "ep03.context", matchTags: ["everything_in_downloads"],
    text: "Taylor is still getting used to having a folder system after years of keeping everything in Downloads." },
  { slot: "ep03.context", matchTags: ["already_organized"],
    text: "Taylor is generally organized, but version mix-ups can still disrupt even a careful system." },

  // ---- Episode 4: deadline and submission context ----
  { slot: "ep04.context", matchTags: ["generic"],
    text: "{{name}} has a real deadline coming up and wants to know the submission actually went through." },
  { slot: "ep04.context", matchTags: ["stop_losing_files", "improve_submissions"],
    text: "Submission reliability is exactly the kind of thing {{name}} came into this course hoping to fix." },

  // ---- Episode 5: career or academic context ----
  { slot: "ep05.context", matchTags: ["generic"],
    text: "{{name}} wants to build a habit of professional communication early, before it matters even more in an internship or job." },
  { slot: "ep05.context", matchTags: ["research_science"],
    text: "{{name}} is already picturing the research-heavy emails {{subject}} will need to send to faculty later in a science-focused path." },
  { slot: "ep05.context", matchTags: ["business_entrepreneurship"],
    text: "{{name}} knows professional email habits now will carry directly into future client and business communication." },
  { slot: "ep05.context", matchTags: ["healthcare", "public_service"],
    text: "{{name}} is aiming for a field where clear, respectful professional communication is part of the actual job." },

  // ---- Episode 6: help-seeking preference ----
  { slot: "ep06.context", matchTags: ["generic"],
    text: "{{name}} doesn't love asking for help, but knows a focused question beats staying stuck." },
  { slot: "ep06.context", matchTags: ["still_figuring_it_out"],
    text: "{{name}} is still figuring out how campus support resources even work, which makes this skill especially useful right now." },

  // ---- Episode 7: schedule and responsibilities ----
  { slot: "ep07.context", matchTags: ["generic"],
    text: "{{name}}'s schedule is packed enough that a missed hidden deadline would be easy to imagine." },
  { slot: "ep07.context", matchTags: ["manage_deadlines"],
    text: "Staying on top of deadlines is one of the exact priorities {{name}} chose coming into this course." },
  { slot: "ep07.context", matchTags: ["basketball", "other_sports", "fitness_martial_arts"],
    text: "Between practice schedules and coursework, {{name}} needs a calendar system that actually holds up under a packed week." },

  // ---- Episode 8: creative, professional, or public identity ----
  { slot: "ep08.context", matchTags: ["generic"],
    text: "{{name}} hasn't thought much about how {{possessive}} usernames and display names look to a professor or teammate." },
  { slot: "ep08.context", matchTags: ["music", "film_photography_visual_arts"],
    text: "{{name}} already has a public creative handle — figuring out where that fits alongside a professional academic identity matters here." },
  { slot: "ep08.context", matchTags: ["gaming_technology"],
    text: "{{name}}'s gaming handle is great for gaming — but it's not the name a professor needs to see on a shared document." },

  // ---- Episode 9: research topic based on interests ----
  { slot: "ep09.context", matchTags: ["generic"],
    text: "{{name}} has a research topic in mind and isn't sure yet which search tool actually fits the assignment's requirements." },
  { slot: "ep09.context", matchTags: ["healthcare"],
    text: "{{name}}'s interest in healthcare means the difference between a general search and a peer-reviewed database really matters." },
  { slot: "ep09.context", matchTags: ["business_entrepreneurship"],
    text: "{{name}}'s business-focused research question needs real data, not just whatever a general search turns up first." },
  { slot: "ep09.context", matchTags: ["research_science"],
    text: "{{name}}'s science coursework has already made database fluency feel like a core skill, not an optional one." },

  // ---- Episode 10: source-evaluation context ----
  { slot: "ep10.context", matchTags: ["generic"],
    text: "{{name}} has found a credible-looking source and has to decide whether it actually answers the assigned question." },
  { slot: "ep10.context", matchTags: ["find_reliable_sources"],
    text: "Judging source credibility carefully is exactly the priority {{name}} flagged coming into this course." },

  // ---- Episode 11: academic-reading context ----
  { slot: "ep11.context", matchTags: ["generic"],
    text: "{{name}} has a long academic article to get through and limited time before it's due to be discussed in class." },
  { slot: "ep11.context", matchTags: ["read_academic_sources"],
    text: "Reading dense academic sources without getting overwhelmed is a skill {{name}} specifically wanted to build." },

  // ---- Episode 12: writing or research project ----
  { slot: "ep12.context", matchTags: ["generic"],
    text: "{{name}} is deep into a research project's note-taking phase, juggling more sources than {{subject}} expected." },
  { slot: "ep12.context", matchTags: ["cite_correctly"],
    text: "Getting citation and note-taking right, not just eventually fixed, is exactly what {{name}} hoped to improve." },

  // ---- Episode 13: device and account context ----
  { slot: "ep13.context", matchTags: ["generic"],
    text: "{{name}}'s university account touches email, coursework, and financial-aid systems all at once." },
  { slot: "ep13.context", matchTags: ["protect_accounts"],
    text: "Account security was one of the exact priorities {{name}} selected before starting this course." },

  // ---- Episode 14: campus or work phishing scenario ----
  { slot: "ep14.context", matchTags: ["generic"],
    text: "{{name}} gets a message that looks official, timed right around when financial aid decisions are expected." },
  { slot: "ep14.context", matchTags: ["recognize_scams"],
    text: "Recognizing exactly this kind of scam pattern is one of the skills {{name}} came into this course wanting to build." },

  // ---- Episode 15: scholarship, aid, employment, or university document ----
  { slot: "ep15.context", matchTags: ["generic"],
    text: "{{name}} needs to send an official transcript to a scholarship committee under a tight deadline." },
  { slot: "ep15.context", matchTags: ["handle_private_documents", "handle_official_documents"],
    text: "Handling exactly this kind of official document safely is one of {{name}}'s stated priorities for this course." },

  // ---- Episode 16: group-project context ----
  { slot: "ep16.context", matchTags: ["generic"],
    text: "{{name}}'s group project needs to reach the professor without any access problems on presentation day." },
  { slot: "ep16.context", matchTags: ["business_entrepreneurship"],
    text: "{{name}} already senses that sharing-permission habits here will matter just as much in a future business setting." },

  // ---- Episode 17: weekly routine ----
  { slot: "ep17.context", matchTags: ["generic"],
    text: "{{name}} keeps meaning to build some kind of weekly check-in habit but hasn't made it stick yet." },
  { slot: "ep17.context", matchTags: ["build_weekly_workflow"],
    text: "Building a reliable weekly workflow is the exact goal {{name}} set before starting this course." },

  // ---- Episode 18: submission context ----
  { slot: "ep18.context", matchTags: ["generic"],
    text: "{{name}} just finished a paper {{subject}} is proud of and is eager to submit it without a second look." },
  { slot: "ep18.context", matchTags: ["improve_submissions"],
    text: "Making submissions more reliable is exactly the goal {{name}} named at the start of this course." },

  // ---- Episode 19: technology-failure context ----
  { slot: "ep19.context", matchTags: ["generic"],
    text: "{{name}}'s upload portal throws an unfamiliar error with the deadline only minutes away." },
  { slot: "ep19.context", matchTags: ["coding_technology", "gaming_technology"],
    text: "{{name}}'s comfort with troubleshooting technology helps here, but the real skill is what happens next: documenting and communicating." },

  // ---- Episode 20: all appropriate prior selections ----
  { slot: "ep20.context", matchTags: ["generic"],
    text: "{{name}} looks back at everything {{subject}}'s built this semester, one habit at a time, as the busiest week yet arrives." },
  { slot: "ep20.context", matchTags: ["understand_ai_agents", "use_ai_responsibly"],
    text: "{{name}}'s interest in using AI responsibly gets a real test this week, alongside everything else on {{possessive}} plate." },
  { slot: "ep20.context", matchTags: ["still_figuring_it_out"],
    text: "{{name}} started the semester still figuring things out — this week is proof of exactly how far {{subject}}'s come." }
];
