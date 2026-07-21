// Ram Ready Digital Literacy — illustrative lesson characters
//
// Each lesson uses one named primary student and one current Angelo State
// undergraduate major. Program links were verified against official Angelo
// State program pages on 2026-07-21. Names and scenarios are illustrative.

const PROGRAMS = Object.freeze({
  biology: Object.freeze({
    major: "Biology",
    programUrl: "https://www.angelo.edu/academics/programs/biology/"
  }),
  marketing: Object.freeze({
    major: "Marketing",
    programUrl: "https://www.angelo.edu/academics/programs/marketing/"
  }),
  computerScience: Object.freeze({
    major: "Computer Science",
    programUrl: "https://www.angelo.edu/academics/programs/computer-science/"
  }),
  nursing: Object.freeze({
    major: "Nursing",
    programUrl: "https://www.angelo.edu/academics/programs/nursing/"
  }),
  communication: Object.freeze({
    major: "Communication",
    programUrl: "https://www.angelo.edu/academics/programs/communication/"
  }),
  civilEngineering: Object.freeze({
    major: "Civil Engineering",
    programUrl: "https://www.angelo.edu/academics/programs/engineering-civil/"
  }),
  psychology: Object.freeze({
    major: "Psychology",
    programUrl: "https://www.angelo.edu/academics/programs/psychology/"
  }),
  criminalJustice: Object.freeze({
    major: "Criminal Justice",
    programUrl: "https://www.angelo.edu/academics/programs/criminal-justice/"
  }),
  english: Object.freeze({
    major: "English",
    programUrl: "https://www.angelo.edu/academics/programs/english/"
  }),
  socialWork: Object.freeze({
    major: "Social Work",
    programUrl: "https://www.angelo.edu/academics/programs/social-work/"
  })
});

function character(name, program) {
  return Object.freeze({ name, ...PROGRAMS[program], verifiedDate: "2026-07-21" });
}

export const LESSON_CHARACTERS = Object.freeze({
  ep01: character("Maya Chen", "biology"),
  ep02: character("Jordan Brooks", "marketing"),
  ep03: character("Priya Patel", "computerScience"),
  ep04: character("Mateo Ruiz", "nursing"),
  ep05: character("Aaliyah Johnson", "communication"),
  ep06: character("Ethan Nguyen", "civilEngineering"),
  ep07: character("Sofia Martinez", "psychology"),
  ep08: character("Caleb Wilson", "criminalJustice"),
  ep09: character("Leila Hassan", "english"),
  ep10: character("Noah Garcia", "socialWork"),
  ep11: character("Tiana Robinson", "computerScience"),
  ep12: character("Owen Park", "biology"),
  ep13: character("Isabel Flores", "marketing"),
  ep14: character("Marcus Reed", "nursing"),
  ep15: character("Nia Thompson", "civilEngineering"),
  ep16: character("Gabriel Torres", "communication"),
  ep17: character("Hannah Kim", "psychology"),
  ep18: character("Amir Davis", "english"),
  ep19: character("Elena Morales", "socialWork"),
  ep20: character("Logan Carter", "criminalJustice"),
  q01: character("Chloe Adams", "nursing"),
  q02: character("Diego Hernandez", "english"),
  q03: character("Naomi Williams", "marketing"),
  q04: character("Samuel Lee", "socialWork"),
  q05: character("Fatima Khan", "civilEngineering"),
  q06: character("Julian Moore", "psychology"),
  q07: character("Camila Ortiz", "computerScience"),
  q08: character("Isaiah Brown", "biology"),
  q09: character("Grace Nguyen", "criminalJustice"),
  q10: character("Andre Jackson", "communication"),
  q11: character("Lucia Ramirez", "nursing"),
  q12: character("Ben Walker", "english"),
  q13: character("Zuri King", "marketing"),
  q14: character("Daniel Cho", "socialWork"),
  q15: character("Keira Shah", "civilEngineering"),
  q16: character("Xavier Green", "psychology"),
  q17: character("Amara Lewis", "computerScience"),
  q18: character("Lucas Evans", "biology"),
  q19: character("Layla Cooper", "criminalJustice"),
  q20: character("Henry Young", "communication")
});

export const ILLUSTRATIVE_STUDENT_NOTICE =
  "Student names and scenarios are illustrative. Majors are current Angelo State academic programs used to provide relevant context.";

export function getLessonCharacter(lessonId) {
  return LESSON_CHARACTERS[lessonId] || null;
}

export const VERIFIED_UNDERGRADUATE_PROGRAMS = PROGRAMS;
