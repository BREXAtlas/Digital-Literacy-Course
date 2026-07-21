import { LESSON_CHARACTERS } from "./lesson-characters.js";

// Ram Ready Digital Literacy — University Digital Literacy Foundations
// Episodes 1-10 (Act I: Start College Digitally Ready / Act II: Communicate and Find Information)
// All content is prewritten and reviewed, migrated from the original
// Digital-Literacy-Course- curriculum into the Ram Ready episode schema.
// Personalization only assembles approved fragments (data/story-fragments.js)
// at the listed slot ids — it never invents facts, rules, or consequences.
// See docs/PERSONALIZATION_MODEL.md and docs/STORY_ARCHITECTURE.md.

export const EPISODES_PART1 = [
  {
    id: "ep01",
    primaryStudent: LESSON_CHARACTERS.ep01,
    act: 1,
    title: "Build a College File System",
    subtitle: "A folder structure that survives a busy semester",
    estimatedMinutes: 11,
    learningObjectives: [
      "Explain why Downloads should not become the only storage system",
      "Build semester, course, assignment, draft, feedback, and final folders",
      "Describe how a file structure reduces memory load during a busy week",
      "Separate official records from ordinary coursework",
      "Recover a file system that is already disorganized"
    ],
    openingNarrative:
      "Maya Chen, a Biology major at Angelo State, has just moved into a dorm, and a laptop full of syllabi, forms, and half-started assignments is already piling up faster than Maya expected.",
    personalizationSlots: ["ep01.opening_detail"],
    approvedStoryFragments: ["ep01.opening_detail"],
    scenario: {
      prompt:
        "Three files called Essay1, two syllabus PDFs, and a scholarship form are all sitting loose in Downloads. A deadline is twenty minutes away, and Maya Chen can't remember which Essay1 is the current draft.",
      type: "build_folder_path"
    },
    choices: [
      {
        id: "a",
        text: "Build a Semester → Course → Assignment folder structure right now",
        whyChosen: "Some learners want to fix the root problem before the next deadline arrives.",
        possibleBenefit: "Maya Chen gives every future file an obvious home, which saves search time all semester.",
        possibleCost: "Takes twenty to thirty minutes now, during an already busy week.",
        possibleRisk: "None significant — moving files carefully doesn't destroy them.",
        immediateEffect: { fileOrganization: 4, professionalConfidence: 2 },
        futureEffect: "Future assignments are easy to locate because the structure already exists.",
        whatCouldChangeThisOutcome: "Adding Drafts, Feedback, and Final subfolders inside each assignment folder for extra clarity.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "b",
        text: "Keep working in Downloads for now and organize later",
        whyChosen: "Some learners want to finish the urgent deadline before doing anything else.",
        possibleBenefit: "No time lost today on folder setup.",
        possibleCost: "The mess keeps growing, and 'later' often doesn't arrive until a crisis forces it.",
        possibleRisk: "Submitting the wrong file version becomes more likely as Downloads fills up.",
        immediateEffect: { fileOrganization: -2, wellbeing: -1 },
        futureEffect: "The same twenty-minute search problem repeats for every future deadline.",
        whatCouldChangeThisOutcome: "Setting a recurring weekly reminder to build the structure before it's needed again.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "c",
        text: "Create one folder per course, but skip Draft/Feedback/Final subfolders",
        whyChosen: "A partial system that's faster to set up than a fully detailed one.",
        possibleBenefit: "Files are grouped by course, which is a real improvement over Downloads.",
        possibleCost: "Version confusion inside a course folder can still happen without draft/final labels.",
        possibleRisk: "Low, but a rushed submission could still grab the wrong draft.",
        immediateEffect: { fileOrganization: 2, professionalConfidence: 1 },
        futureEffect: "Course-level organization helps immediately; version mix-ups can still occur within a course folder.",
        whatCouldChangeThisOutcome: "Adding version subfolders once the course folder habit feels automatic.",
        sourceIds: ["asu-core-values"]
      }
    ],
    immediateConsequences: {
      a: "Maya Chen spends the deadline crunch a little differently, but finishes with a folder for every current course.",
      b: "Maya Chen submits the essay on time, but Downloads is now even more crowded.",
      c: "Maya Chen has course folders in place, though everything inside each one is still loose."
    },
    oneYearConsequences: {
      a: "A year in, Maya Chen can find any assignment in seconds and rarely worries about version mix-ups.",
      b: "A year in, Maya Chen has hundreds of loosely named files and a recurring sense of dread before deadlines.",
      c: "A year in, Maya Chen finds courses quickly but still occasionally grabs an outdated draft."
    },
    longTermConsequences: {
      a: "Maya Chen carries a reliable file structure forward as a transferable workplace habit, not just a college one.",
      b: "Chronic disorganization tends to compound as file volume grows across semesters.",
      c: "A partial system is better than none, and can be upgraded at any point without starting over."
    },
    recoveryPath:
      "Maya Chen can sort even a fully disorganized Downloads folder in a single focused hour: sort by date, create the semester/course structure, and move files in batches. No file is unsalvageable just because it's misplaced.",
    conceptExplanation: {
      what: "A file system is a deliberate folder structure — typically Semester → Course → Assignment, with Draft, Feedback, and Final subfolders — instead of one flat pile of files.",
      why: "It exists to reduce the mental effort of remembering where every file lives, replacing memory with a predictable structure.",
      how: "It may help by making files fast to find, reducing the chance of submitting the wrong version, and separating official records from routine coursework.",
      cost: "Setting it up takes time upfront, and it requires a few extra clicks each time a file is saved.",
      risks: "A structure that's too complicated to maintain gets abandoned; an official document buried in a generic folder can be hard to find when it matters most.",
      whoMayBenefit: "Any student juggling multiple courses, group projects, and deadlines — which is nearly everyone in a first semester.",
      whoMayNotBenefit: "Maya Chen may need only a light structure for a small workload, but the core habit scales as Maya's workload grows.",
      misunderstandingRisk: "Believing organization has to be elaborate to be useful — a simple, consistent structure beats a perfect one that's never maintained.",
      verifyNote: "This is general study-skills guidance, not a university IT policy; Maya Chen should check device and campus storage guidance for backup and quota details."
    },
    realWorldExample:
      "Maya Chen kept everything in Downloads until a scholarship deadline required the 'right' transcript request form among fourteen similarly named PDFs. Building a simple folder system that same week turned a recurring twenty-minute search into a five-second one for the rest of the year.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Which structure makes a final essay easiest to locate later?",
        type: "multiple_choice",
        options: [
          "Fall 2026 / ENGL 1301 / Essay 1 / Final",
          "Downloads / New folder / Stuff",
          "Pictures / Screenshots",
          "Desktop (no folders)"
        ],
        correctAnswer: "Fall 2026 / ENGL 1301 / Essay 1 / Final",
        explanation: "The path identifies the semester, course, assignment, and version — everything needed to locate it with confidence."
      },
      {
        id: "kc2",
        question: "What is the main benefit of separating Draft, Feedback, and Final subfolders?",
        type: "multiple_choice",
        options: [
          "It makes the folder look more impressive",
          "It reduces the chance of submitting the wrong version",
          "It is required by every university",
          "It automatically backs up files"
        ],
        correctAnswer: "It reduces the chance of submitting the wrong version",
        explanation: "Clear version separation is the main practical benefit — it prevents the most common submission mistake."
      }
    ],
    sourceIds: ["asu-core-values"],
    achievementId: "college-file-system-builder",
    unlocks: "ep02",
    accessibilitySummary:
      "This episode uses a text-based folder-path builder with no drag-and-drop requirement, so it works fully with keyboard and screen-reader navigation.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep02",
    primaryStudent: LESSON_CHARACTERS.ep02,
    act: 1,
    title: "Name Files Like a College Student",
    subtitle: "A file name is part of professional communication",
    estimatedMinutes: 9,
    learningObjectives: [
      "Explain why clear file naming is a form of professional communication",
      "Apply a course, assignment, name, date, and version naming pattern",
      "Identify why names like final-final and document.pdf cause problems",
      "Describe accessibility and search benefits of clear naming",
      "Apply naming conventions to group projects and official forms"
    ],
    personalizationSlots: ["ep02.context"],
    approvedStoryFragments: ["ep02.context"],
    openingNarrative:
      "Jordan Brooks, a Marketing major at Angelo State, has new course folders ready, but the files going into them still have names like IMG_5581.jpg and finalfinal2.pdf.",
    scenario: {
      prompt:
        "A professor receives Jordan Brooks's attachment among three files all named document.pdf. One belongs to a different class entirely.",
      type: "build_file_name"
    },
    choices: [
      {
        id: "a",
        text: "Rename files using Course_Assignment_LastName_Date_Version",
        whyChosen: "Some learners want a name that tells the truth before the file is even opened.",
        possibleBenefit: "Any reader — professor, teammate, or Jordan Brooks months later — can identify the file instantly.",
        possibleCost: "Takes a few extra seconds per file compared to accepting the default name.",
        possibleRisk: "None significant.",
        immediateEffect: { fileOrganization: 3, communicationClarity: 3, professionalConfidence: 2 },
        futureEffect: "Every future submission is easy for a reader to identify without opening it.",
        whatCouldChangeThisOutcome: "Agreeing on the same naming pattern with group-project teammates so everyone's files match.",
        sourceIds: ["purdue-owl-email"]
      },
      {
        id: "b",
        text: "Keep the camera- or app-generated file name as is",
        whyChosen: "Renaming feels like an unnecessary extra step.",
        possibleBenefit: "Saves a few seconds per file.",
        possibleCost: "A reader has no way to identify the file's contents without opening it.",
        possibleRisk: "A professor receiving many identically named files may open, grade, or file the wrong one.",
        immediateEffect: { fileOrganization: -1, communicationClarity: -2 },
        futureEffect: "Confusion compounds as more generically named files accumulate across courses.",
        whatCouldChangeThisOutcome: "Renaming files at the moment they're saved, before the habit of skipping it sets in.",
        sourceIds: ["purdue-owl-email"]
      },
      {
        id: "c",
        text: "Label the file 'FINAL-FINAL-REAL-v2'",
        whyChosen: "It feels like it clearly marks the file as done.",
        possibleBenefit: "Slightly more identifiable than a totally generic name.",
        possibleCost: "Doesn't include the course, assignment, or date — a reader still can't identify it at a glance.",
        possibleRisk: "Repeating 'final' across multiple versions makes it unclear which one is truly final.",
        immediateEffect: { fileOrganization: 0, communicationClarity: -1 },
        futureEffect: "The naming habit still leaves real ambiguity the next time multiple 'final' versions exist.",
        whatCouldChangeThisOutcome: "Replacing repeated 'final' labels with an actual date or version number.",
        sourceIds: ["purdue-owl-email"]
      }
    ],
    immediateConsequences: {
      a: "The professor and Jordan Brooks's teammates can identify every file without asking.",
      b: "The professor has to open three identically named files to figure out which is which.",
      c: "The file is somewhat identifiable, but multiple 'final' versions could still be confused."
    },
    oneYearConsequences: {
      a: "Jordan Brooks's files are consistently easy to find and identify across every course.",
      b: "Mix-ups and re-submission requests happen periodically because readers can't tell files apart.",
      c: "Occasional version confusion still happens, though less often than with fully generic names."
    },
    longTermConsequences: {
      a: "Jordan Brooks carries clear naming into internships and jobs as a professional habit for working with shared files.",
      b: "Poor naming habits can create real friction in group work and job settings where dozens of people share files.",
      c: "A partial naming habit is an improvement, but doesn't fully solve the identification problem it's meant to solve."
    },
    recoveryPath:
      "Jordan Brooks can rename any file after the fact; there is no penalty for fixing a bad file name once the pattern is understood, even mid-semester.",
    conceptExplanation: {
      what: "Clear file naming means using a consistent, descriptive pattern — such as Course_Assignment_LastName_Date_Version — instead of a generic or camera-generated name.",
      why: "A file name is often the first (and sometimes only) piece of information a reader has before opening a document, so it functions as a form of communication.",
      how: "It may help readers instantly identify a file's course, purpose, and version, and it makes searching for old files far faster.",
      cost: "It takes a small amount of extra time and requires a bit of upfront agreement, especially in group work.",
      risks: "An inconsistent naming pattern across a group project can be just as confusing as no pattern at all.",
      whoMayBenefit: "Any student submitting files to professors, collaborating on shared documents, or searching their own files months later.",
      whoMayNotBenefit: "There isn't really a case where clear naming hurts — but it matters most as file volume and collaboration increase.",
      misunderstandingRisk: "Assuming a name that looks 'finished' (like FINAL-FINAL) is the same as a name that's actually clear and identifiable.",
      verifyNote: "Naming conventions can vary by course or workplace — check whether an instructor or employer specifies a required format."
    },
    realWorldExample:
      "Jordan Brooks named three different campaign drafts 'campaign.docx' across a semester and, while studying for finals, spent nearly an hour reopening files just to figure out which was which — time a thirty-second renaming habit would have saved entirely.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Which file name is most useful to a professor receiving many submissions?",
        type: "multiple_choice",
        options: [
          "MKTG3301_MarketAnalysis_Brooks_Sept14_Final.pdf",
          "finalfinal2.pdf",
          "IMG_5581.jpg",
          "document.pdf"
        ],
        correctAnswer: "MKTG3301_MarketAnalysis_Brooks_Sept14_Final.pdf",
        explanation: "This name makes the course, assignment, student, date, and version all visible without opening the file."
      },
      {
        id: "kc2",
        question: "What is the main problem with repeating the word 'final' across several file versions?",
        type: "multiple_choice",
        options: [
          "It makes the file too large",
          "It becomes unclear which version is actually the true final one",
          "It is against most university policies",
          "It slows down file uploads"
        ],
        correctAnswer: "It becomes unclear which version is actually the true final one",
        explanation: "When every version claims to be 'final,' the label stops carrying any real information."
      }
    ],
    sourceIds: ["purdue-owl-email"],
    achievementId: "clear-file-name-navigator",
    unlocks: "ep03",
    accessibilitySummary:
      "The file-name builder is a text-entry interaction with live plain-text feedback, fully usable with a screen reader.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep03",
    primaryStudent: LESSON_CHARACTERS.ep03,
    act: 1,
    title: "Control Drafts, Feedback, and Final Versions",
    subtitle: "Preventing version confusion before it becomes a submission mistake",
    estimatedMinutes: 10,
    learningObjectives: [
      "Explain version control as it applies to coursework",
      "Distinguish draft, peer-review, revised, feedback, and final states",
      "Describe why keeping an original protects against accidental overwrites",
      "Practice opening the exact final file before submission",
      "Recover after submitting an older draft by mistake"
    ],
    personalizationSlots: ["ep03.context"],
    approvedStoryFragments: ["ep03.context"],
    openingNarrative:
      "Priya Patel, a Computer Science major at Angelo State, revised a paper's conclusion last night, but this morning Priya is not sure which file contains the updated version.",
    scenario: {
      prompt:
        "Priya Patel revised the conclusion, but the first item in Recent Files is an older draft that a study partner reopened. The upload is due in ten minutes.",
      type: "identify_missing_information"
    },
    choices: [
      {
        id: "a",
        text: "Open the file directly from the Final folder and check the first and last page",
        whyChosen: "This confirms the exact file that will actually be submitted, not just a guess based on recency.",
        possibleBenefit: "Removes the guesswork entirely — Priya Patel sees exactly what the professor will see.",
        possibleCost: "Takes an extra thirty seconds before uploading.",
        possibleRisk: "None significant.",
        immediateEffect: { fileOrganization: 3, submissionReliability: 4, resilience: 1 },
        futureEffect: "This becomes a repeatable final check before every submission.",
        whatCouldChangeThisOutcome: "Labeling the truly final file with a clear version tag as soon as it's finished.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "b",
        text: "Grab whatever appears first in Recent Files",
        whyChosen: "It feels fast and Recent Files usually shows the newest file.",
        possibleBenefit: "Very quick if Recent Files happens to be accurate.",
        possibleCost: "Recent Files can be misleading if another file was simply opened, not edited.",
        possibleRisk: "Submitting an outdated draft instead of the revised version.",
        immediateEffect: { fileOrganization: -1, submissionReliability: -3 },
        futureEffect: "The same mistake can recur any time a file is opened without being edited.",
        whatCouldChangeThisOutcome: "Always confirming a file's actual content, not just its position in a recent list.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "c",
        text: "Rename every draft 'Final' to be safe",
        whyChosen: "It feels like labeling everything 'Final' removes the risk of picking the wrong one.",
        possibleBenefit: "None — this actually increases confusion rather than reducing it.",
        possibleCost: "Destroys the meaning of the 'Final' label entirely.",
        possibleRisk: "Makes it even harder to identify the true final version later.",
        immediateEffect: { fileOrganization: -2, submissionReliability: -2 },
        futureEffect: "Future version confusion becomes more likely, not less.",
        whatCouldChangeThisOutcome: "Using an honest, distinct label — Draft1, PeerReview, Revised, Final — for each real stage.",
        sourceIds: ["asu-core-values"]
      }
    ],
    immediateConsequences: {
      a: "Priya Patel submits the assignment with full confidence that the correct file was uploaded.",
      b: "Priya Patel may submit the wrong file without realizing the mistake until the professor's feedback arrives.",
      c: "Priya Patel's folder now contains several files that all claim to be 'Final.'"
    },
    oneYearConsequences: {
      a: "A year later, Priya Patel automatically opens and checks the exact file before every submission.",
      b: "A year later, recurring version mix-ups have led Priya Patel to send several emails requesting permission to resubmit assignments.",
      c: "A year later, Priya Patel's habit of labeling multiple drafts 'Final' continues to create confusion."
    },
    longTermConsequences: {
      a: "Priya Patel's reliable version-checking habit protects grades and reduces stress before deadlines.",
      b: "Priya Patel's recurring version confusion can affect grades and professional credibility in group and workplace settings.",
      c: "Priya Patel eventually has to rebuild the naming system because the labels no longer distinguish one version from another."
    },
    recoveryPath:
      "If Priya Patel submits an old draft by mistake, emailing the professor immediately — before the deadline if possible, or right after with an honest explanation — and attaching the correct file usually resolves it. Most instructors respond well to a quick, honest correction.",
    conceptExplanation: {
      what: "Version control means deliberately tracking which file is the draft, which has feedback, and which is the true final version.",
      why: "It exists because revisions naturally create multiple similar-looking files, and only one of them should ever be submitted.",
      how: "It may help by removing the guesswork at the exact moment it matters most — right before an upload.",
      cost: "It requires a habit of labeling files honestly and double-checking before submission.",
      risks: "Relying on 'Recent Files' instead of an actual labeled version is a common and preventable mistake.",
      whoMayBenefit: "Any student who revises work — which is nearly every student, on nearly every assignment.",
      whoMayNotBenefit: "A one-draft assignment has less version risk, but the checking habit still costs nothing to apply.",
      misunderstandingRisk: "Assuming the most recently opened file is the most recently edited file — those are not the same thing.",
      verifyNote: "This is a general workflow practice, not a specific platform feature — behavior of 'Recent Files' can vary by device and app."
    },
    realWorldExample:
      "Priya Patel revised an essay's conclusion but uploaded an older file that a study partner had reopened. Because Recent Files displayed that document first, Priya did not notice the mistake, and the professor received a paper without the final argument.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What is the safest final step before uploading an assignment?",
        type: "multiple_choice",
        options: [
          "Open the file from the Final folder and inspect it directly",
          "Choose the first file in Recent Files",
          "Rename every draft 'Final'",
          "Assume the newest-looking file is correct"
        ],
        correctAnswer: "Open the file from the Final folder and inspect it directly",
        explanation: "Direct inspection confirms the exact content being submitted, rather than relying on assumptions."
      },
      {
        id: "kc2",
        question: "Why can 'Recent Files' be misleading when choosing which version to submit?",
        type: "multiple_choice",
        options: [
          "It only shows files from today",
          "A file can appear there just from being opened, not edited",
          "It only works with the Final folder",
          "It always shows files in alphabetical order"
        ],
        correctAnswer: "A file can appear there just from being opened, not edited",
        explanation: "Simply viewing a file can move it to the top of a recent list, even without any changes being made."
      }
    ],
    sourceIds: ["asu-core-values"],
    achievementId: "version-control-keeper",
    unlocks: "ep04",
    accessibilitySummary:
      "The scenario is presented as a plain-text decision with no timed element, so learners can review at their own pace.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep04",
    primaryStudent: LESSON_CHARACTERS.ep04,
    act: 1,
    title: "Submit, Preview, and Save Proof",
    subtitle: "Clicking Submit is not the end of the workflow",
    estimatedMinutes: 10,
    learningObjectives: [
      "Explain why upload completion should be verified, not assumed",
      "Identify submission receipts, timestamps, and file previews",
      "Check portal status after submitting an assignment",
      "Save proof of submission when a system provides it",
      "Respond appropriately when a submission system fails mid-upload"
    ],
    personalizationSlots: ["ep04.context"],
    approvedStoryFragments: ["ep04.context"],
    openingNarrative:
      "Mateo Ruiz, a Nursing major at Angelo State, taps Submit on an assignment portal with two minutes to spare and closes the laptop, relieved the work is finally done.",
    scenario: {
      prompt:
        "The upload progress wheel is still spinning when Mateo Ruiz closes the browser tab. There's no confirmation email, no visible receipt, and no way to tell whether the portal actually finished processing the file.",
      type: "identify_missing_information"
    },
    choices: [
      {
        id: "a",
        text: "Reopen the portal, confirm the file preview, and screenshot any confirmation shown",
        whyChosen: "Verifying submission is worth the extra minute of certainty.",
        possibleBenefit: "Mateo Ruiz knows for certain whether the assignment was actually received.",
        possibleCost: "A couple of extra minutes spent right after finishing the assignment.",
        possibleRisk: "None significant.",
        immediateEffect: { submissionReliability: 4, resilience: 2 },
        futureEffect: "If something did go wrong, Mateo Ruiz has time to fix it and evidence to show what happened.",
        whatCouldChangeThisOutcome: "Portals that show a clear timestamped receipt make this step faster every time.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "b",
        text: "Assume it went through because the deadline hadn't passed yet",
        whyChosen: "Closing the laptop and moving on feels like the assignment is finished.",
        possibleBenefit: "Saves a couple of minutes right now.",
        possibleCost: "No way to know whether the file actually uploaded completely.",
        possibleRisk: "A failed upload could go unnoticed until a grade shows a missing submission.",
        immediateEffect: { submissionReliability: -3, wellbeing: -1 },
        futureEffect: "If the upload failed, there is no proof and no early warning to fix it before the deadline passes.",
        whatCouldChangeThisOutcome: "Checking the portal status even just once, right after any submission.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "c",
        text: "Delete the final file right after uploading to save space",
        whyChosen: "The assignment feels complete, so the file seems unnecessary.",
        possibleBenefit: "Frees up a small amount of storage.",
        possibleCost: "No local backup exists if the portal needs the file resent.",
        possibleRisk: "If a grading or technical dispute arises, there's no original to reference.",
        immediateEffect: { submissionReliability: -2, resilience: -1 },
        futureEffect: "A portal error or grading question later has no local file to fall back on.",
        whatCouldChangeThisOutcome: "Keeping the final file until the grade or decision is fully settled.",
        sourceIds: ["asu-core-values"]
      }
    ],
    immediateConsequences: {
      a: "Mateo Ruiz either confirms the submission succeeded, or catches a failed upload with time to fix it.",
      b: "Mateo Ruiz has no idea whether the professor actually received the assignment.",
      c: "Mateo Ruiz's local copy is gone, whether or not the portal upload actually worked."
    },
    oneYearConsequences: {
      a: "Verifying submissions has become an automatic habit that prevents missed-assignment surprises.",
      b: "At least one assignment was likely missed or delayed without Mateo Ruiz ever knowing why.",
      c: "A grading dispute, when it eventually happens, has no local file as backup."
    },
    longTermConsequences: {
      a: "Mateo Ruiz carries this verification habit through college and future jobs, protecting grades and reducing submission disputes.",
      b: "Unverified submissions create recurring, avoidable risk to grades.",
      c: "Deleting files immediately after use removes a safety net that costs nothing to keep."
    },
    recoveryPath:
      "If Mateo Ruiz discovers that an upload failed, most professors respond well to a prompt, honest message with a screenshot of the error and the correct file attached — ideally sent before the deadline passes.",
    conceptExplanation: {
      what: "Verifying a submission means confirming the exact file was received — through a preview, confirmation message, timestamp, or portal status — rather than assuming a click was enough.",
      why: "Portals can fail silently: accept the wrong file, show a blank preview, or lose connection mid-upload without a clear error.",
      how: "It may help by catching problems while there's still time to fix them, instead of discovering a missing grade weeks later.",
      cost: "It takes an extra minute or two right after what already feels like a completed task.",
      risks: "Assuming success without checking can turn a completed assignment into a missing one.",
      whoMayBenefit: "Every student submitting through any online portal, especially near a deadline.",
      whoMayNotBenefit: "There's little downside to this habit — it costs a small amount of time regardless of course load or major.",
      misunderstandingRisk: "Believing that clicking Submit and closing the tab is functionally the same as confirming the assignment was received.",
      verifyNote: "Portal behavior varies by learning management system, so Mateo Ruiz should check the course portal for the confirmation it provides."
    },
    realWorldExample:
      "Mateo Ruiz closed a browser while an upload's progress wheel was still spinning. The portal never finished recording the assignment, and Mateo discovered the missing submission only when checking grades two weeks later. By then, the late window had passed.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What should happen immediately after an online submission?",
        type: "multiple_choice",
        options: [
          "Confirm the status and preview the submitted file",
          "Close the browser as soon as Upload is tapped",
          "Delete the final file",
          "Wait a week before checking anything"
        ],
        correctAnswer: "Confirm the status and preview the submitted file",
        explanation: "Verification is part of submission — it confirms the file was actually received correctly."
      },
      {
        id: "kc2",
        question: "Why is it useful to keep the final submitted file even after uploading it?",
        type: "multiple_choice",
        options: [
          "It's required by law",
          "It provides a backup if the portal has an error or a grading dispute arises",
          "It makes the file upload faster",
          "It is not useful to keep it"
        ],
        correctAnswer: "It provides a backup if the portal has an error or a grading dispute arises",
        explanation: "Keeping the final file until the grade is settled provides a safety net at essentially no cost."
      }
    ],
    sourceIds: ["asu-core-values"],
    achievementId: "submission-verifier",
    unlocks: "ep05",
    accessibilitySummary:
      "Submission status is described in plain text alongside any visual progress indicator, so screen-reader users receive equivalent information.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep05",
    primaryStudent: LESSON_CHARACTERS.ep05,
    act: 1,
    title: "Write a Professor-Ready Email",
    subtitle: "Make every message easy for the reader to understand and answer",
    estimatedMinutes: 10,
    learningObjectives: [
      "Write a specific, useful subject line",
      "Include course, section, and concise context in an email",
      "Ask one clear, specific question",
      "State what was already tried before asking for help",
      "Close an email in a professional but natural tone"
    ],
    personalizationSlots: ["ep05.context"],
    approvedStoryFragments: ["ep05.context"],
    openingNarrative:
      "Aaliyah Johnson, a Communication major at Angelo State, has a question about an assignment and opens a blank email to a professor Aaliyah has met only twice.",
    scenario: {
      prompt:
        "Aaliyah Johnson is stuck on a primary-source analysis due Friday and needs to email Dr. Lee, who teaches three sections of the same course.",
      type: "review_email"
    },
    choices: [
      {
        id: "a",
        text: "Write a subject line and opening that name the course, section, and specific question",
        whyChosen: "A specific email respects the reader's time and gets a faster, more useful answer.",
        possibleBenefit: "Dr. Lee can identify Aaliyah Johnson's class and question immediately, without a follow-up email.",
        possibleCost: "Takes a couple of extra minutes to write clearly.",
        possibleRisk: "None significant.",
        immediateEffect: { communicationClarity: 4, professionalConfidence: 2 },
        futureEffect: "Professors tend to respond faster and more helpfully to clear, specific emails over time.",
        whatCouldChangeThisOutcome: "Saving this email as a template pattern for future course communication.",
        sourceIds: ["purdue-owl-email"]
      },
      {
        id: "b",
        text: "Send a short, vague message: 'Hey, I don't get it.'",
        whyChosen: "It feels faster to just send something and get the conversation started.",
        possibleBenefit: "Takes almost no time to write.",
        possibleCost: "The professor can't identify the course, assignment, or actual question.",
        possibleRisk: "A slower or less useful response, since the professor must first investigate who's asking and about what.",
        immediateEffect: { communicationClarity: -3, professionalConfidence: -1 },
        futureEffect: "Repeated vague messages can shape how quickly and thoroughly a professor responds to future emails.",
        whatCouldChangeThisOutcome: "Adding just the course, section, and specific question to the same message.",
        sourceIds: ["purdue-owl-email"]
      },
      {
        id: "c",
        text: "Mark the subject line 'URGENT!!!' with no other context",
        whyChosen: "It feels like urgency will get a faster response.",
        possibleBenefit: "May get noticed quickly in an inbox.",
        possibleCost: "Urgency without context still doesn't tell the professor what's actually needed.",
        possibleRisk: "Can come across as demanding rather than respectful, especially without real time pressure to justify it.",
        immediateEffect: { communicationClarity: -1, professionalConfidence: -1 },
        futureEffect: "Overusing urgency markers can reduce their effectiveness and affect how messages are perceived.",
        whatCouldChangeThisOutcome: "Reserving urgency language for genuinely time-sensitive situations, paired with real context.",
        sourceIds: ["purdue-owl-email"]
      }
    ],
    immediateConsequences: {
      a: "Dr. Lee gives Aaliyah Johnson a clear, useful answer the same day.",
      b: "Dr. Lee has to reply asking which course and assignment this is about before actually helping.",
      c: "Dr. Lee opens the email expecting an emergency and finds an ordinary question instead."
    },
    oneYearConsequences: {
      a: "Aaliyah Johnson has built a reputation as someone who communicates clearly and respectfully with faculty.",
      b: "Slower, less complete responses become a pattern across the semester.",
      c: "Faculty may start reading Aaliyah Johnson's 'urgent' messages with less urgency over time."
    },
    longTermConsequences: {
      a: "Aaliyah Johnson carries clear professional email habits into internships and communication with advisors and future employers.",
      b: "Vague communication habits can create friction in academic and professional relationships alike.",
      c: "Overused urgency can erode trust, making genuinely urgent messages less effective when they matter most."
    },
    recoveryPath:
      "Aaliyah Johnson can always follow a vague or unclear email with a clearer one; most professors appreciate a quick, specific clarification more than a perfect first attempt.",
    conceptExplanation: {
      what: "A professor-ready email identifies the course and section, gives brief context, states what was already tried, and asks one specific question.",
      why: "It exists because Aaliyah Johnson's professor manages many messages and cannot infer course context from a vague email.",
      how: "It may help by getting a faster, more useful reply and building a professional impression over time.",
      cost: "It takes a few extra minutes of thought compared to a quick, vague message.",
      risks: "An email that's too long or unfocused can bury the actual question just as effectively as one that's too short.",
      whoMayBenefit: "Any student emailing a professor, advisor, or future employer — this is a durable professional skill.",
      whoMayNotBenefit: "There's no real downside to clarity — it costs a small amount of extra time regardless of the situation.",
      misunderstandingRisk: "Believing professional tone means sounding stiff or robotic — clarity and warmth can coexist.",
      verifyNote: "Expectations for tone and formality can vary by professor and department — when unsure, err toward clear and respectful."
    },
    realWorldExample:
      "Aaliyah Johnson sent 'Hey, what do I do?' to a professor teaching three sections of the same course; the professor had to reply asking for the course and assignment before any real help could begin, adding a full day to the exchange.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Which opening gives a professor enough context to help quickly?",
        type: "multiple_choice",
        options: [
          "Hello Dr. Lee, I am in HIST 1301-020 and have a question about the primary-source analysis due Friday.",
          "Hey, what do I do?",
          "URGENT!!!",
          "Quick question"
        ],
        correctAnswer: "Hello Dr. Lee, I am in HIST 1301-020 and have a question about the primary-source analysis due Friday.",
        explanation: "This opening identifies the course, section, and assignment, giving the professor everything needed to help immediately."
      },
      {
        id: "kc2",
        question: "Why should Aaliyah Johnson's email mention what Aaliyah already tried?",
        type: "multiple_choice",
        options: [
          "It's a formal requirement for all emails",
          "It shows effort and helps the professor answer the actual point of confusion",
          "It makes the email longer, which looks more thorough",
          "It is not useful information"
        ],
        correctAnswer: "It shows effort and helps the professor answer the actual point of confusion",
        explanation: "Showing what was already attempted narrows the question to the real sticking point, saving time for both parties."
      }
    ],
    sourceIds: ["purdue-owl-email"],
    achievementId: "professor-email-builder",
    unlocks: "ep06",
    accessibilitySummary:
      "The email-review interaction is presented as plain, structured text fields rather than a simulated inbox graphic.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep06",
    primaryStudent: LESSON_CHARACTERS.ep06,
    act: 2,
    title: "Ask for Help While Showing Prior Effort",
    subtitle: "Turn confusion into a focused, answerable request",
    estimatedMinutes: 9,
    learningObjectives: [
      "State what was already reviewed before asking for help",
      "Identify the exact point of confusion in a task",
      "Ask for clarification rather than demanding an answer",
      "Use tutoring, advising, library, and campus support resources appropriately"
    ],
    personalizationSlots: ["ep06.context"],
    approvedStoryFragments: ["ep06.context"],
    openingNarrative:
      "Ethan Nguyen, a Civil Engineering major at Angelo State, is stuck on a citation format and wants to ask for help while making Ethan's prior effort clear.",
    scenario: {
      prompt:
        "The article Ethan Nguyen needs to cite has no listed author. Ethan isn't sure how to start the reference entry and wants to ask a tutor or the professor for help.",
      type: "multiple_choice"
    },
    choices: [
      {
        id: "a",
        text: "Explain the specific problem: the article has no listed author, and ask how to begin the entry",
        whyChosen: "A focused question gives the helper exactly what they need to respond usefully.",
        possibleBenefit: "Ethan Nguyen gets a fast, specific, useful answer.",
        possibleCost: "Requires briefly explaining the situation instead of just asking generally.",
        possibleRisk: "None significant.",
        immediateEffect: { communicationClarity: 3, resilience: 2, wellbeing: 1 },
        futureEffect: "Tutors and professors tend to give more useful help when the request is specific.",
        whatCouldChangeThisOutcome: "Bringing the actual source or assignment sheet to the help session for reference.",
        sourceIds: ["acrl-info-literacy"]
      },
      {
        id: "b",
        text: "Say 'I cannot do citations' with no other detail",
        whyChosen: "It feels easier than explaining the specific problem.",
        possibleBenefit: "Requires little upfront effort to send.",
        possibleCost: "The helper has no way to know what part is actually confusing.",
        possibleRisk: "The response may not address the real issue, wasting both people's time.",
        immediateEffect: { communicationClarity: -2, resilience: -1 },
        futureEffect: "Vague requests tend to produce vague, less useful help over time.",
        whatCouldChangeThisOutcome: "Narrowing the request to the one specific step that's unclear.",
        sourceIds: ["acrl-info-literacy"]
      },
      {
        id: "c",
        text: "Ask a classmate to just send the finished citation",
        whyChosen: "It solves the immediate problem the fastest.",
        possibleBenefit: "The citation gets finished quickly.",
        possibleCost: "Ethan Nguyen doesn't actually learn the citation pattern for next time.",
        possibleRisk: "Copying a citation without understanding it risks getting the format wrong for a different source type later.",
        immediateEffect: { communicationClarity: 0, resilience: -1 },
        futureEffect: "The same confusion is likely to resurface on the next assignment with a different source type.",
        whatCouldChangeThisOutcome: "Asking the classmate to explain the pattern, not just provide the finished answer.",
        sourceIds: ["acrl-info-literacy"]
      }
    ],
    immediateConsequences: {
      a: "Ethan Nguyen gets a clear answer that also explains the reasoning, so it'll transfer to future sources.",
      b: "The helper has to ask several follow-up questions before understanding the real problem.",
      c: "Ethan Nguyen's immediate assignment is finished, but the underlying skill gap remains."
    },
    oneYearConsequences: {
      a: "Ethan Nguyen has built real, transferable citation skills and a habit of asking focused questions.",
      b: "Vague help requests continue to slow down Ethan Nguyen's access to useful support.",
      c: "Ethan Nguyen still struggles with unusual source types that come up in later courses."
    },
    longTermConsequences: {
      a: "Ethan Nguyen carries effective help-seeking into every future course, job, and collaborative setting.",
      b: "Persistent vague requests can strain relationships with tutors, advisors, and professors over time.",
      c: "Relying on others to just provide answers limits independent skill-building over a full degree."
    },
    recoveryPath:
      "Ethan Nguyen can always follow a vague help request with a more specific one; most tutors, advisors, and professors are glad to help once they understand exactly what's needed.",
    conceptExplanation: {
      what: "Focused help-seeking means showing what was already reviewed, naming the exact point of confusion, and asking for clarification rather than a finished answer.",
      why: "It exists because helpers — tutors, professors, advisors — can respond far more effectively with a specific starting point.",
      how: "It may help by getting faster, more useful answers and by building real understanding instead of just finishing a task.",
      cost: "It takes a little more effort upfront to identify and explain the specific confusion.",
      risks: "Over-relying on others for finished answers, rather than explanations, can leave real skill gaps.",
      whoMayBenefit: "Any student using tutoring, office hours, advising, or library help — this is nearly every student, in every course.",
      whoMayNotBenefit: "There's no real downside to specific help-seeking, though it takes a bit more reflection than a vague request.",
      misunderstandingRisk: "Believing that a focused question proves Ethan Nguyen did not try; in reality, the question demonstrates Ethan's prior effort.",
      verifyNote: "Campus support resources like tutoring centers, writing centers, and advising vary by institution — check current offerings and hours."
    },
    realWorldExample:
      "Ethan Nguyen initially said 'I cannot do citations' to a writing-center tutor, who had to ask several questions before finding the real issue: an article with no named author. Once Ethan learned to name that specific problem upfront, future help sessions took a fraction of the time.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Which request is most likely to get a fast, useful response?",
        type: "multiple_choice",
        options: [
          "Ethan Nguyen reviewed the example but is unsure how to cite a web article with no named author and asks for clarification about the first element.",
          "Send me the answer",
          "I am confused about everything",
          "Can someone just do this for me?"
        ],
        correctAnswer: "Ethan Nguyen reviewed the example but is unsure how to cite a web article with no named author and asks for clarification about the first element.",
        explanation: "Ethan Nguyen's request is specific and shows effort, giving the helper enough context to respond usefully."
      },
      {
        id: "kc2",
        question: "What is a risk of asking a classmate to simply provide a finished citation rather than explain it?",
        type: "multiple_choice",
        options: [
          "It's always against the rules",
          "The underlying skill gap remains and may resurface with a different source type",
          "It takes longer than asking a tutor",
          "There is no risk at all"
        ],
        correctAnswer: "The underlying skill gap remains and may resurface with a different source type",
        explanation: "Getting a finished answer without understanding the reasoning behind it doesn't build a transferable skill."
      }
    ],
    sourceIds: ["acrl-info-literacy"],
    achievementId: "help-seeking-strategist",
    unlocks: "ep07",
    accessibilitySummary: "This episode uses a plain-text multiple-choice interaction with no time limit.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep07",
    primaryStudent: LESSON_CHARACTERS.ep07,
    act: 2,
    title: "Turn the Syllabus Into a Working Calendar",
    subtitle: "A map helps only when Sofia Martinez uses it",
    estimatedMinutes: 11,
    learningObjectives: [
      "Extract deadlines, recurring work, and exam windows from a syllabus",
      "Identify multi-part deadlines hidden in syllabus language",
      "Build personal work-back deadlines ahead of official due dates",
      "Set calendar reminders and update them when announcements change"
    ],
    personalizationSlots: ["ep07.context"],
    approvedStoryFragments: ["ep07.context"],
    openingNarrative:
      "Sofia Martinez, a Psychology major at Angelo State, notices that a syllabus lists weekly discussion posts as closing Sunday at 11:59 p.m., while replies to classmates are actually due Friday.",
    scenario: {
      prompt:
        "Sofia Martinez is building a calendar from the syllabus and has to decide how much detail to record for a multi-part weekly discussion requirement.",
      type: "read_syllabus_excerpt"
    },
    choices: [
      {
        id: "a",
        text: "Record both the Friday reply deadline and the Sunday closing deadline, with an earlier personal reminder",
        whyChosen: "Multi-part requirements need every part captured, not just the final closing date.",
        possibleBenefit: "Sofia Martinez captures every part of the assignment and builds buffer time before each real deadline.",
        possibleCost: "Takes a little longer to build the calendar entry initially.",
        possibleRisk: "None significant.",
        immediateEffect: { calendarReadiness: 4, resilience: 1 },
        futureEffect: "This habit catches hidden multi-part deadlines throughout the semester.",
        whatCouldChangeThisOutcome: "Rechecking the calendar against the syllabus after any professor announcement.",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "b",
        text: "Record only the Sunday closing deadline",
        whyChosen: "It's the date that appears most prominently in the syllabus.",
        possibleBenefit: "Faster to set up.",
        possibleCost: "Misses the earlier Friday reply requirement embedded in the same policy.",
        possibleRisk: "Losing half credit on a multi-part discussion assignment without realizing why.",
        immediateEffect: { calendarReadiness: -2 },
        futureEffect: "Other hidden multi-part deadlines are likely to be missed the same way.",
        whatCouldChangeThisOutcome: "Rereading syllabus language carefully for phrases like 'before class' or 'within 48 hours.'",
        sourceIds: ["asu-core-values"]
      },
      {
        id: "c",
        text: "Skip the calendar entry since the date is already in the syllabus PDF",
        whyChosen: "The syllabus itself technically has the information.",
        possibleBenefit: "No setup time spent.",
        possibleCost: "A syllabus that's easy to forget when it isn't part of a weekly routine.",
        possibleRisk: "Missing the deadline entirely by not checking the syllabus that week.",
        immediateEffect: { calendarReadiness: -3, resilience: -1 },
        futureEffect: "Deadlines across multiple courses become harder to track without a single combined view.",
        whatCouldChangeThisOutcome: "Moving even just the recurring pattern into a weekly calendar reminder.",
        sourceIds: ["asu-core-values"]
      }
    ],
    immediateConsequences: {
      a: "Sofia Martinez's calendar accurately reflects both parts of the requirement, with buffer time built in.",
      b: "Sofia Martinez's calendar looks complete but is missing a real requirement.",
      c: "Sofia Martinez has no calendar entry at all for this recurring assignment."
    },
    oneYearConsequences: {
      a: "Sofia Martinez rarely misses a deadline because the calendar habit catches hidden requirements automatically.",
      b: "Sofia Martinez loses credit periodically on multi-part assignments without understanding the pattern.",
      c: "Sofia Martinez regularly discovers deadlines only when reading the syllabus again under time pressure."
    },
    longTermConsequences: {
      a: "Sofia Martinez carries a reliable calendar habit beyond college as a durable time-management skill.",
      b: "Repeated partial-credit losses on hidden deadlines can add up significantly across a degree.",
      c: "Relying on memory instead of a system creates chronic, avoidable stress around deadlines."
    },
    recoveryPath:
      "Sofia Martinez can add a missed calendar entry at any time; reviewing a syllabus again mid-semester to rebuild a complete calendar is worthwhile even after one missed requirement.",
    conceptExplanation: {
      what: "Turning a syllabus into a working calendar means extracting every deadline — including hidden multi-part ones — into a personal calendar with early reminders.",
      why: "A syllabus is a reference document, not an active reminder system; it only helps if its contents are moved into a tool that's actually checked regularly.",
      how: "It may help by surfacing deadlines with enough lead time to actually plan for them, not just react to them.",
      cost: "Building and maintaining the calendar takes ongoing time, especially when instructors post schedule changes.",
      risks: "A calendar built once and never updated can become just as unreliable as no calendar at all.",
      whoMayBenefit: "Every student managing multiple courses with different deadline structures.",
      whoMayNotBenefit: "There's little downside to this habit — it costs setup and maintenance time regardless of course load.",
      misunderstandingRisk: "Assuming a single closing date captures a full assignment's requirements, when multi-part deadlines are common in discussion-based courses.",
      verifyNote: "Syllabus language and policies can change through instructor announcements — recheck the calendar against updates, not just the original PDF."
    },
    realWorldExample:
      "Sofia Martinez recorded only the Sunday 11:59 p.m. closing time for a weekly discussion, missing the embedded Friday reply requirement — losing participation credit for several weeks before noticing the pattern in the syllabus language.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "What is the best calendar entry for a multi-part weekly discussion assignment?",
        type: "multiple_choice",
        options: [
          "Draft the reply Friday, post the discussion Sunday, with reminders for both",
          "One reminder at 11:58 p.m. Friday only",
          "No calendar entry, since the date is in the syllabus",
          "A single vague reminder that says 'discussion due sometime'"
        ],
        correctAnswer: "Draft the reply Friday, post the discussion Sunday, with reminders for both",
        explanation: "Capturing every real deadline — not just the final closing date — supports the actual assignment requirements."
      },
      {
        id: "kc2",
        question: "Why should a syllabus be rechecked after a professor announcement?",
        type: "multiple_choice",
        options: [
          "Announcements never affect deadlines",
          "Dates and requirements can change after the original syllabus was posted",
          "It's only necessary once a semester",
          "Calendars update automatically from announcements"
        ],
        correctAnswer: "Dates and requirements can change after the original syllabus was posted",
        explanation: "A calendar is only as accurate as its most recent update — announcements can change the original plan."
      }
    ],
    sourceIds: ["asu-core-values"],
    achievementId: "syllabus-scheduler",
    unlocks: "ep08",
    accessibilitySummary: "The syllabus excerpt is presented as plain text with the hidden deadline clearly identifiable without relying on formatting alone.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep08",
    primaryStudent: LESSON_CHARACTERS.ep08,
    act: 2,
    title: "Build a Professional Digital Identity",
    subtitle: "What Caleb Wilson's account names and shared spaces communicate",
    estimatedMinutes: 9,
    learningObjectives: [
      "Identify what display names, photos, and usernames communicate",
      "Distinguish public and private accounts in academic contexts",
      "Choose identifiable names for group collaboration spaces",
      "Balance professional identity with personal expression"
    ],
    personalizationSlots: ["ep08.context"],
    approvedStoryFragments: ["ep08.context"],
    openingNarrative:
      "Caleb Wilson, a Criminal Justice major at Angelo State, opens a group project document showing a contributor called 'DragonKing998,' and nobody in the group can identify that person.",
    scenario: {
      prompt:
        "Caleb Wilson is setting up display names for a shared academic document, a professional email signature, and a portfolio-style public profile — each with a different audience.",
      type: "sort_safe_unsafe"
    },
    choices: [
      {
        id: "a",
        text: "Use an identifiable real name in academic and professional spaces, keep separate casual accounts private",
        whyChosen: "This keeps professional accountability clear without erasing personal expression elsewhere.",
        possibleBenefit: "Professors, teammates, and reviewers can always identify Caleb Wilson's contributions.",
        possibleCost: "Requires occasionally switching between professional and personal accounts.",
        possibleRisk: "None significant.",
        immediateEffect: { professionalConfidence: 3, communicationClarity: 2, privacyAwareness: 2 },
        futureEffect: "A consistent, identifiable professional presence builds trust with faculty and future employers.",
        whatCouldChangeThisOutcome: "Reviewing privacy settings on personal accounts to control who sees casual content.",
        sourceIds: ["purdue-owl-email"]
      },
      {
        id: "b",
        text: "Use the same anonymous gaming handle everywhere, including group academic documents",
        whyChosen: "It feels simpler to use one consistent username everywhere.",
        possibleBenefit: "No need to manage multiple identities.",
        possibleCost: "Teammates and professors can't connect contributions to Caleb Wilson.",
        possibleRisk: "Accountability problems in group work, and a less professional impression on official documents.",
        immediateEffect: { professionalConfidence: -2, communicationClarity: -2 },
        futureEffect: "This can create friction in every future group project and professional interaction.",
        whatCouldChangeThisOutcome: "Creating a separate, identifiable name specifically for academic and professional spaces.",
        sourceIds: ["purdue-owl-email"]
      },
      {
        id: "c",
        text: "Remove all identifying information from every account, including academic ones",
        whyChosen: "It feels like the safest option for privacy.",
        possibleBenefit: "Maximum anonymity everywhere.",
        possibleCost: "Makes accountability and collaboration significantly harder in required academic settings.",
        possibleRisk: "Professors and teammates may be unable to verify contributions or provide feedback effectively.",
        immediateEffect: { professionalConfidence: -1, privacyAwareness: 1 },
        futureEffect: "Group and academic collaboration becomes consistently more difficult.",
        whatCouldChangeThisOutcome: "Applying full anonymity only to genuinely personal, non-academic spaces instead of every account.",
        sourceIds: ["purdue-owl-email"]
      }
    ],
    immediateConsequences: {
      a: "Group members and professors can always identify Caleb Wilson's work.",
      b: "The group has to ask around to figure out who 'DragonKing998' actually is.",
      c: "Professors and teammates struggle to connect any contribution back to Caleb Wilson."
    },
    oneYearConsequences: {
      a: "Caleb Wilson has built a consistent, trustworthy professional presence across courses and group work.",
      b: "Repeated identification confusion creates friction in group projects and official communication.",
      c: "Collaboration difficulties persist across every group-based course."
    },
    longTermConsequences: {
      a: "Caleb Wilson's clear professional identity, paired with appropriately private personal spaces, supports both privacy and credibility long-term.",
      b: "An unclear digital identity can create real friction with future employers and references.",
      c: "Overcorrecting toward full anonymity in required academic settings creates ongoing practical problems without meaningfully improving privacy."
    },
    recoveryPath:
      "Caleb Wilson can change a display name or username at any time; there is no penalty for updating an old anonymous handle once the issue is noticed.",
    conceptExplanation: {
      what: "A professional digital identity is the combination of display names, photos, and usernames used in academic and professional contexts.",
      why: "It exists because professors, employers, and teammates need to be able to identify who they're working with, while personal spaces can remain more private.",
      how: "It may help by keeping accountability clear in required academic settings, while still allowing full personal expression in separate personal spaces.",
      cost: "Managing separate professional and personal presences takes a small amount of ongoing effort.",
      risks: "Blending casual and professional identity in official spaces can create confusion or an unprofessional impression.",
      whoMayBenefit: "Any student participating in group work, professional correspondence, or a public portfolio.",
      whoMayNotBenefit: "Fully private, non-academic personal accounts don't need this same identifiability — the key is matching the identity to the setting.",
      misunderstandingRisk: "Believing that professional identity requires erasing personality — the two can coexist by using the right identity in the right setting.",
      verifyNote: "Specific platform display-name and privacy settings change over time — check current settings on any tool being used for group work."
    },
    realWorldExample:
      "Caleb Wilson's group project showed edits from 'DragonKing998' with no other identifying information; the professor couldn't verify who completed which portion of the work, complicating individual grading for the entire group.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Which display name works best in a required course document?",
        type: "multiple_choice",
        options: ["Caleb Wilson", "DragonKing998", "Anonymous Panda", "No name at all"],
        correctAnswer: "Caleb Wilson",
        explanation: "An identifiable name lets group members and the professor connect contributions to the correct student."
      },
      {
        id: "kc2",
        question: "Does building a professional digital identity mean giving up personal expression entirely?",
        type: "multiple_choice",
        options: [
          "Yes, all accounts must always be identical",
          "No — separate personal accounts can remain private and casual",
          "Only professors are allowed to have personal accounts",
          "Personal accounts should be deleted"
        ],
        correctAnswer: "No — separate personal accounts can remain private and casual",
        explanation: "Professional identity applies to Caleb Wilson's academic and professional spaces, not every account Caleb owns."
      }
    ],
    sourceIds: ["purdue-owl-email"],
    achievementId: "professional-digital-identity-builder",
    unlocks: "ep09",
    accessibilitySummary: "Identity examples are described in plain text without relying on profile-photo imagery to convey meaning.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep09",
    primaryStudent: LESSON_CHARACTERS.ep09,
    act: 2,
    title: "Choose the Right Search Tool",
    subtitle: "Match the search location to the information need",
    estimatedMinutes: 10,
    learningObjectives: [
      "Distinguish general web search, Google Scholar, and library databases",
      "Identify when course readings define expected sources",
      "Use AI tools to brainstorm search terms without treating output as evidence",
      "Move between multiple search tools instead of relying on one"
    ],
    personalizationSlots: ["ep09.context"],
    approvedStoryFragments: ["ep09.context"],
    openingNarrative:
      "Leila Hassan, an English major at Angelo State, needs peer-reviewed sources for an assignment, but a general web search is the first tool that comes to mind.",
    scenario: {
      prompt:
        "Leila Hassan needs sources for a paper that specifically requires peer-reviewed, scholarly evidence. Where should the search actually begin?",
      type: "match_term_to_meaning"
    },
    choices: [
      {
        id: "a",
        text: "Start with the university library databases or a scholarly search tool",
        whyChosen: "These tools are built specifically to surface peer-reviewed academic literature.",
        possibleBenefit: "Leila Hassan is far more likely to find sources that meet the assignment's actual requirement.",
        possibleCost: "Can take slightly longer to learn than a general search box.",
        possibleRisk: "None significant.",
        immediateEffect: { researchConfidence: 3, sourceJudgment: 3 },
        futureEffect: "Comfort with library databases makes every future research assignment faster and more reliable.",
        whatCouldChangeThisOutcome: "Asking a librarian for help narrowing search terms within the database.",
        sourceIds: ["acrl-info-literacy"]
      },
      {
        id: "b",
        text: "Use the first general web search result",
        whyChosen: "It's the fastest, most familiar search habit.",
        possibleBenefit: "Very quick to find something.",
        possibleCost: "General search results often don't meet a peer-reviewed source requirement.",
        possibleRisk: "Submitting sources that don't satisfy the assignment, risking lost credit.",
        immediateEffect: { researchConfidence: -1, sourceJudgment: -2 },
        futureEffect: "The habit of defaulting to general search can repeat across every research-based assignment.",
        whatCouldChangeThisOutcome: "Using general search only for background context, then moving to a scholarly tool for actual evidence.",
        sourceIds: ["acrl-info-literacy"]
      },
      {
        id: "c",
        text: "Ask an AI chatbot to generate the final list of sources to cite",
        whyChosen: "It feels like the fastest way to get a finished source list.",
        possibleBenefit: "Can help brainstorm vocabulary or possible search terms.",
        possibleCost: "A generated source list is not the same as verified, real evidence.",
        possibleRisk: "AI tools can invent plausible-sounding but nonexistent sources — using them uncritically risks citing fabricated evidence.",
        immediateEffect: { researchConfidence: 0, sourceJudgment: -3 },
        futureEffect: "Relying on unverified AI output for sources creates real academic integrity risk down the line.",
        whatCouldChangeThisOutcome: "Using AI only to generate search terms, then verifying every source directly in a real database.",
        sourceIds: ["acrl-info-literacy", "nist-genai-profile"]
      }
    ],
    immediateConsequences: {
      a: "Leila Hassan finds sources that actually satisfy the peer-reviewed requirement.",
      b: "Leila Hassan's sources likely don't meet the assignment's actual standard.",
      c: "Leila Hassan risks citing a source that may not actually exist."
    },
    oneYearConsequences: {
      a: "Leila Hassan has become comfortable and efficient using scholarly research tools.",
      b: "Research assignments continue to require last-minute scrambling to find qualifying sources.",
      c: "A pattern of using unverified AI-suggested sources could eventually trigger an academic integrity concern."
    },
    longTermConsequences: {
      a: "Leila Hassan carries strong research-tool fluency into every future academic and professional research task.",
      b: "Continued reliance on general search for academic work limits research quality over a full degree.",
      c: "Unverified source use is a serious, avoidable risk to academic standing if it continues unchecked."
    },
    recoveryPath:
      "Leila Hassan can correct a research strategy at any point in an assignment; switching from general search or unverified AI output to library databases mid-project is a reasonable, recoverable step.",
    conceptExplanation: {
      what: "Different search tools serve different purposes: general web search for background, Google Scholar and library databases for scholarly literature, and course readings for instructor-assigned expectations.",
      why: "These tools exist because different information needs — casual background versus peer-reviewed evidence — require different search strategies.",
      how: "It may help to start with the assignment's actual requirement, then choose the matching tool rather than defaulting to habit.",
      cost: "Learning to use library databases well takes a bit more time upfront than a familiar search engine.",
      risks: "Treating a generated AI response as a citation-ready source, rather than a starting point for further verification, risks using fabricated or non-existent evidence.",
      whoMayBenefit: "Any student with an assignment that specifies scholarly or peer-reviewed sources.",
      whoMayNotBenefit: "A very informal assignment might reasonably rely on general search for context — matching the tool to the actual requirement is the key skill.",
      misunderstandingRisk: "Assuming any professional-looking or AI-generated result is automatically credible or citable without verification.",
      verifyNote: "Available databases and search tools vary by institution — check current library resources for what's accessible."
    },
    realWorldExample:
      "Leila Hassan used the first general-web result for a research paper that explicitly required peer-reviewed sources, only discovering the mismatch after losing significant credit — a library database search would have surfaced qualifying sources in the same amount of time.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Where should Leila Hassan begin when the assignment requires peer-reviewed studies?",
        type: "multiple_choice",
        options: [
          "The university library databases or a scholarly search tool",
          "A random social-media post",
          "The first advertisement in a web search",
          "Whatever an AI chatbot generates as a source list"
        ],
        correctAnswer: "The university library databases or a scholarly search tool",
        explanation: "Those tools are specifically designed to surface peer-reviewed academic literature."
      },
      {
        id: "kc2",
        question: "What is the safest way to use an AI chatbot during the research process?",
        type: "multiple_choice",
        options: [
          "Ask it to generate the final citation list",
          "Use it to brainstorm search terms, then verify real sources in a database",
          "Trust any source it names without checking",
          "Avoid databases entirely if AI can summarize the topic"
        ],
        correctAnswer: "Use it to brainstorm search terms, then verify real sources in a database",
        explanation: "AI tools can support early brainstorming, but real evidence still needs to come from verified sources."
      }
    ],
    sourceIds: ["acrl-info-literacy", "nist-genai-profile"],
    achievementId: "search-tool-navigator",
    unlocks: "ep10",
    accessibilitySummary: "Search-tool comparisons are presented as a plain-text matching list rather than relying on visual icons alone.",
    reviewedDate: "2026-07-11"
  },

  {
    id: "ep10",
    primaryStudent: LESSON_CHARACTERS.ep10,
    act: 2,
    title: "Evaluate Authority, Evidence, and Relevance",
    subtitle: "Judge a source by the question, not only by its appearance",
    estimatedMinutes: 11,
    learningObjectives: [
      "Explain authority as contextual rather than absolute",
      "Evaluate a source's evidence, purpose, and publication date",
      "Distinguish a credible source from a relevant one",
      "Recognize that polished design is not proof of quality"
    ],
    personalizationSlots: ["ep10.context"],
    approvedStoryFragments: ["ep10.context"],
    openingNarrative:
      "Noah Garcia, a Social Work major at Angelo State, finds a well-written article by a respected economist about national employment trends, but the assignment is about local student food insecurity.",
    scenario: {
      prompt:
        "Noah Garcia has to decide whether this credible but broad source actually answers the specific research question at hand.",
      type: "evaluate_source"
    },
    choices: [
      {
        id: "a",
        text: "Ask how directly this source helps answer the specific research question",
        whyChosen: "Relevance is a relationship between the source and the actual task, not just a measure of general credibility.",
        possibleBenefit: "Leads Noah Garcia to keep searching for a source that's both credible and directly relevant.",
        possibleCost: "Requires more search time than settling for the first credible-looking source.",
        possibleRisk: "None significant.",
        immediateEffect: { sourceJudgment: 4, researchConfidence: 2 },
        futureEffect: "This relevance-first habit improves source selection in every future assignment.",
        whatCouldChangeThisOutcome: "Rereading the assignment prompt before evaluating any source.",
        sourceIds: ["acrl-info-literacy"]
      },
      {
        id: "b",
        text: "Use the source anyway because the author is well-respected",
        whyChosen: "Author credibility feels like it should be enough to justify using a source.",
        possibleBenefit: "The source is genuinely credible in its own right.",
        possibleCost: "It doesn't actually answer the specific local, student-focused question being asked.",
        possibleRisk: "The paper's argument may not logically connect to its evidence, weakening the overall assignment.",
        immediateEffect: { sourceJudgment: -2 },
        futureEffect: "Prioritizing general credibility over specific relevance can weaken arguments across future assignments.",
        whatCouldChangeThisOutcome: "Pairing this broad source with a second, more directly relevant one.",
        sourceIds: ["acrl-info-literacy"]
      },
      {
        id: "c",
        text: "Choose a different, less polished source purely because it looks more visually professional",
        whyChosen: "Design quality feels like a quick proxy for credibility.",
        possibleBenefit: "None — visual polish doesn't reliably indicate evidence quality or relevance.",
        possibleCost: "May overlook a genuinely stronger, if plainer-looking, source.",
        possibleRisk: "Design-based judgment can lead to selecting weaker sources overall.",
        immediateEffect: { sourceJudgment: -3 },
        futureEffect: "This evaluation habit tends to produce lower-quality source lists across future work.",
        whatCouldChangeThisOutcome: "Evaluating evidence and relevance directly, independent of visual design.",
        sourceIds: ["acrl-info-literacy"]
      }
    ],
    immediateConsequences: {
      a: "Noah Garcia continues searching and eventually finds a source that fits both criteria.",
      b: "Noah Garcia's paper includes a credible but only loosely connected source.",
      c: "Noah Garcia may pass over a stronger source simply because of its appearance."
    },
    oneYearConsequences: {
      a: "Noah Garcia's source evaluation skills are consistently strong across every research-based course.",
      b: "Professors periodically note that sources don't fully support the argument being made.",
      c: "Source quality remains inconsistent, tied more to appearance than actual evidence."
    },
    longTermConsequences: {
      a: "Noah Garcia's strong source-evaluation skills support research quality throughout a degree and into any evidence-based career field.",
      b: "A pattern of credible-but-irrelevant sourcing can weaken academic arguments over time.",
      c: "Judging sources by appearance is an unreliable habit that doesn't improve with more practice unless corrected."
    },
    recoveryPath:
      "Noah Garcia can revise a source list before submission; swapping a credible-but-irrelevant source for a more directly relevant one is a normal part of the research process.",
    conceptExplanation: {
      what: "Evaluating authority, evidence, and relevance means asking who created a source, what evidence supports it, when it was published, why it exists, and whether it actually answers the specific question at hand.",
      why: "It exists because credibility and relevance are separate questions — a source can be highly credible in general and still be the wrong fit for a specific task.",
      how: "It may help by strengthening the actual connection between evidence and argument in academic work.",
      cost: "Careful evaluation takes more time than accepting the first credible-seeming source.",
      risks: "Treating authority as absolute, rather than contextual, can lead to overlooking whether a source really fits the question.",
      whoMayBenefit: "Any student writing an argument or analysis that depends on well-matched evidence.",
      whoMayNotBenefit: "There's no case where skipping relevance evaluation actually helps — it costs time but improves outcomes across the board.",
      misunderstandingRisk: "Assuming a well-designed page or a well-known author's name is, by itself, proof that a source fits the current research question.",
      verifyNote: "Source evaluation frameworks like the ACRL Framework for Information Literacy provide a general, discipline-spanning approach — specific fields may have additional norms."
    },
    realWorldExample:
      "Noah Garcia cited a well-respected economist's article on national employment trends for a paper specifically about local student food insecurity; a reviewer noted the disconnect, and a more targeted, campus-focused source would have better supported the actual argument.",
    knowledgeChecks: [
      {
        id: "kc1",
        question: "Which question best tests a source's relevance to an assignment?",
        type: "multiple_choice",
        options: [
          "How does this source help answer my specific research question?",
          "Does the page use attractive colors?",
          "Is the article long?",
          "Is the author famous?"
        ],
        correctAnswer: "How does this source help answer my specific research question?",
        explanation: "Relevance is a relationship between the source and the specific task — not a stand-alone property of the source itself."
      },
      {
        id: "kc2",
        question: "Can a highly credible source still be the wrong choice for an assignment?",
        type: "multiple_choice",
        options: [
          "No, credible sources are always usable",
          "Yes, if it doesn't actually answer the specific research question",
          "Only if it's outdated",
          "Only if it has no author"
        ],
        correctAnswer: "Yes, if it doesn't actually answer the specific research question",
        explanation: "Credibility and relevance are separate qualities — a source needs both to be a strong fit for a specific assignment."
      }
    ],
    sourceIds: ["acrl-info-literacy"],
    achievementId: "source-credibility-analyst",
    unlocks: "ep11",
    accessibilitySummary: "Source-evaluation criteria are listed as plain text checkpoints rather than relying on a visual rating graphic.",
    reviewedDate: "2026-07-11"
  }
];
