// Ram Ready Digital Literacy — structured presentation and chart data.
// Quantitative values live here so the visible SVGs, direct labels, tables,
// source drawers, and automated validation all use one reviewed data source.

export const PRESENTATION_SLIDES = [
  { id: "slide-01", title: "From Access to Applied Literacy", sourceIds: [] },
  { id: "slide-02", title: "Today’s Working Session", sourceIds: [] },
  { id: "slide-03", title: "The Business Task", sourceIds: [] },
  { id: "slide-04", title: "Literacy Extends Beyond Reading", sourceIds: ["sohail-file-handling-2026"] },
  { id: "slide-05", title: "Applied Problem Solving Is Not Automatic", sourceIds: ["nces-piaac-2023"] },
  { id: "slide-06", title: "College Research Changes the Environment", sourceIds: ["head-learning-ropes-2013"] },
  { id: "slide-07", title: "AI Is Already Part of Academic Life", sourceIds: ["d2l-tyton-2026", "marchese-marchese-2026"] },
  { id: "slide-08", title: "Digital Systems Shape Other Literacies", sourceIds: ["finra-nfcs-2025", "finra-knowledge-2025", "cee-survey-states-2026"] },
  { id: "slide-09", title: "One Entry Point Will Not Fit Every Learner", sourceIds: ["lemire-xu-hahn-2025", "gao-kohnen-2026"] },
  { id: "slide-10", title: "The Library Can Convene Without Owning Everything", sourceIds: ["acrl-framework-2016", "acrl-standards-2026", "acrl-contributions-2016"] },
  { id: "slide-11", title: "A Working Open-Source Prototype Already Exists", sourceIds: [] },
  { id: "slide-12", title: "One Complete Learning Cycle", sourceIds: [] },
  { id: "slide-13", title: "The Pilot Is a Question, Not a Conclusion", sourceIds: [] },
  { id: "slide-14", title: "Start Small Enough to Learn", sourceIds: [] },
  { id: "slide-15", title: "A Six-Week Formative Pilot", sourceIds: [] },
  { id: "slide-16", title: "What Would Count as Useful Evidence?", sourceIds: [] },
  { id: "slide-17", title: "This Is Both Technical and Adaptive Work", sourceIds: ["randall-coakley-2007", "uhl-bien-arena-2018"] },
  { id: "slide-18", title: "The Pilot Can Become a Real Organizational Case Study", sourceIds: ["angelo-edea-assignment-2026"] },
  { id: "slide-19", title: "What Do You See From the Library’s Perspective?", sourceIds: [] },
  { id: "slide-20", title: "What Is the Smallest Responsible Test?", sourceIds: [] },
  { id: "slide-21", title: "References", sourceIds: [] }
];

export const PRESENTATION_CHARTS = [
  {
    id: "nces-aps-age",
    slideId: "slide-05",
    title: "U.S. Adults at Level 1 or Below in Adaptive Problem Solving, 2023",
    type: "vertical-bar",
    labels: ["16–24", "25–34", "35–44", "45–54", "55–65"],
    values: [28, 26, 31, 35, 40],
    units: "Percent",
    sourceIds: ["nces-piaac-2023"],
    sourceNote: "U.S. Department of Education, National Center for Education Statistics, PIAAC 2023 U.S. National Results.",
    takeaway: "Lower-level adaptive problem-solving results appear across every adult age group shown.",
    limitation: "Adaptive problem solving was introduced in the 2023 cycle. These national age-group percentages do not establish a local Angelo State problem; NCES also advises caution because of potential nonresponse bias.",
    accessibleSummary: "Vertical bar chart. The percentage at Level 1 or below is 28 for ages 16 to 24, 26 for 25 to 34, 31 for 35 to 44, 35 for 45 to 54, and 40 for 55 to 65.",
    tableHeaders: ["Age group", "Level 1 or below"],
    tableRows: [["16–24", "28%"], ["25–34", "26%"], ["35–44", "31%"], ["45–54", "35%"], ["55–65", "40%"]]
  },
  {
    id: "d2l-weekly-ai",
    slideId: "slide-07",
    title: "U.S. Higher-Education Respondents Using AI at Least Weekly, 2026",
    type: "horizontal-bar",
    labels: ["Administrators", "Students", "Instructors"],
    values: [71, 61, 52],
    units: "Percent",
    sourceIds: ["d2l-tyton-2026"],
    sourceNote: "D2L and Tyton Partners, Time for Class 2026 press release and survey methodology.",
    takeaway: "Weekly AI use was reported by a majority of each surveyed higher-education role.",
    limitation: "These national survey findings do not establish local usage rates at Angelo State; role samples and self-reported behavior should be interpreted in the context of the published methodology.",
    accessibleSummary: "Horizontal bar chart. Weekly AI use is 71 percent among administrators, 61 percent among students, and 52 percent among instructors.",
    tableHeaders: ["Role", "Uses AI at least weekly"],
    tableRows: [["Administrators", "71%"], ["Students", "61%"], ["Instructors", "52%"]]
  },
  {
    id: "finra-emergency-savings",
    slideId: "slide-08",
    title: "Adults With Three Months of Emergency Savings",
    type: "comparison-bar",
    labels: ["2021", "2024"],
    values: [53, 46],
    units: "Percent",
    sourceIds: ["finra-nfcs-2025"],
    sourceNote: "FINRA Investor Education Foundation, 2024 National Financial Capability Study findings.",
    takeaway: "The reported share fell seven percentage points from 2021 to 2024.",
    limitation: "This is a national adult survey indicator, not a measure of Angelo State students or of digital literacy effectiveness.",
    accessibleSummary: "Comparison chart. Fifty-three percent reported three months of emergency savings in 2021 and 46 percent in 2024.",
    tableHeaders: ["Survey year", "Three months of emergency savings"],
    tableRows: [["2021", "53%"], ["2024", "46%"]]
  },
  {
    id: "finra-mobile-banking",
    slideId: "slide-08",
    title: "Banked Adults Accessing Checking or Savings by Mobile Device, 2024",
    type: "percentage-callout",
    labels: ["Mobile access"],
    values: [81],
    units: "Percent",
    sourceIds: ["finra-nfcs-2025"],
    sourceNote: "FINRA Investor Education Foundation, 2024 National Financial Capability Study findings.",
    takeaway: "Mobile devices are a primary gateway to everyday financial systems for many adults.",
    limitation: "The statistic applies to surveyed adults who have checking or savings accounts; it does not describe every adult or a local student population.",
    accessibleSummary: "Percentage callout showing that 81 percent of adults with bank accounts use mobile devices to access checking or savings accounts.",
    tableHeaders: ["Population and behavior", "Percent"],
    tableRows: [["Adults with bank accounts using mobile devices to access checking or savings", "81%"]]
  },
  {
    id: "finra-inflation-knowledge",
    slideId: "slide-08",
    title: "Adults Ages 18–34 Answering an Inflation Question Correctly",
    type: "comparison-bar",
    labels: ["2021", "2024"],
    values: [34, 44],
    units: "Percent",
    sourceIds: ["finra-knowledge-2025"],
    sourceNote: "FINRA Investor Education Foundation, preliminary 2024 National Financial Capability Study knowledge findings.",
    takeaway: "Correct responses increased ten percentage points among adults ages 18–34.",
    limitation: "A single quiz item does not represent overall financial capability, and the result is not specific to college students or Angelo State.",
    accessibleSummary: "Comparison chart. Thirty-four percent of adults ages 18 to 34 answered the inflation question correctly in 2021 and 44 percent did so in 2024.",
    tableHeaders: ["Survey year", "Correct inflation response, ages 18–34"],
    tableRows: [["2021", "34%"], ["2024", "44%"]]
  },
  {
    id: "pilot-composition",
    slideId: "slide-14",
    title: "Proposed Pilot Participant Composition",
    type: "range-cards",
    labels: ["Minimum students", "Minimum professional reviewers", "Recommended students", "Recommended professional reviewers"],
    values: [[10, 12], [3, 4], [12, 18], [4, 6]],
    units: "People",
    sourceIds: [],
    sourceNote: "Working proposal prepared for the July 21, 2026 discussion.",
    takeaway: "A small mixed participant group can surface usability and fit questions before any larger decision.",
    limitation: "Proposed for discussion—not an effectiveness sample.",
    accessibleSummary: "Range cards. The minimum proposal is 10 to 12 students and 3 to 4 professional reviewers; the recommended proposal is 12 to 18 students and 4 to 6 professional reviewers.",
    tableHeaders: ["Pilot group", "Proposed range"],
    tableRows: [["Minimum students", "10–12"], ["Minimum professional reviewers", "3–4"], ["Recommended students", "12–18"], ["Recommended professional reviewers", "4–6"]]
  },
  {
    id: "pilot-timeline",
    slideId: "slide-15",
    title: "Proposed Six-Week Formative Pilot Timeline",
    type: "timeline",
    labels: ["July 21", "July 22–August 7", "August 10–21", "August 24–September 11", "September 14–18", "Week of September 21"],
    values: ["Co-design meeting", "Internal review", "Soft test: 6–8 volunteers", "Student pilot: 12–18 students", "Analyze and revise", "Continue, revise, pause, or stop"],
    units: "Proposed dates",
    sourceIds: [],
    sourceNote: "Working proposal prepared for stakeholder review on July 21, 2026.",
    takeaway: "The sequence protects time for internal review, a soft test, a student pilot, analysis, and an explicit decision.",
    limitation: "Dates are proposed and should be adjusted around library review, recruitment, faculty availability, accessibility review, and any required university approvals. The pilot is not approved.",
    accessibleSummary: "Six-stage timeline beginning with a July 21 co-design meeting and ending with a decision meeting during the week of September 21.",
    tableHeaders: ["Proposed date", "Activity"],
    tableRows: [["July 21", "Co-design meeting"], ["July 22–August 7", "Internal library, faculty, accessibility, mobile, and source review"], ["August 10–21", "Pre-semester soft test with 6–8 volunteers"], ["August 24–September 11", "First-year and new-student pilot with 12–18 students"], ["September 14–18", "Feedback analysis, issue prioritization, and revisions"], ["Week of September 21", "Review meeting and continue/revise/pause/stop decision"]]
  },
  {
    id: "evaluation-dashboard",
    slideId: "slide-16",
    title: "Proposed Formative Evaluation Dashboard",
    type: "dashboard",
    labels: ["Student experience", "Learning indication", "Professional review", "Proposed decision criteria"],
    values: [
      ["Module completion", "Navigation success", "Technical reliability", "Accessibility", "Usefulness", "Visual usefulness", "Source trust", "Recommendation rating"],
      ["Knowledge-check responses", "Before-and-after confidence", "One transferable behavior", "Open explanation of what changed"],
      ["Source accuracy", "Curricular fit", "Duplication", "Faculty integration potential", "Privacy and accessibility", "Maintenance burden"],
      ["No unresolved critical privacy or accessibility issue", "No blocking menu, quiz, progress, or navigation error", "At least 80% assigned-module completion", "Median usefulness at least 4 of 5", "A majority identifies one intended behavior change", "At least one realistic library or faculty integration route"]
    ],
    units: "Measures and draft thresholds",
    sourceIds: [],
    sourceNote: "Draft evaluation framework prepared for stakeholder discussion.",
    takeaway: "Useful evidence combines student experience, learning indications, professional review, and explicit decision criteria.",
    limitation: "Draft thresholds for stakeholder discussion—not validated institutional benchmarks.",
    accessibleSummary: "Four-part dashboard listing student-experience measures, learning indications, professional-review criteria, and six draft decision thresholds.",
    tableHeaders: ["Dashboard section", "Measures or criteria"],
    tableRows: [
      ["Student experience", "Module completion; navigation success; technical reliability; accessibility; usefulness; visual usefulness; source trust; recommendation rating"],
      ["Learning indication", "Knowledge-check responses; before-and-after confidence; one transferable behavior; open explanation of what changed"],
      ["Professional review", "Source accuracy; curricular fit; duplication; faculty integration potential; privacy and accessibility; maintenance burden"],
      ["Proposed decision criteria", "No unresolved critical privacy/accessibility issue; no blocking menu/quiz/progress/navigation error; ≥80% completion; median usefulness ≥4/5; majority identifies one behavior change; at least one realistic integration route"]
    ]
  }
];

export function getPresentationSlide(id) {
  return PRESENTATION_SLIDES.find((slide) => slide.id === id) || null;
}

export function getPresentationChart(id) {
  return PRESENTATION_CHARTS.find((chart) => chart.id === id) || null;
}
