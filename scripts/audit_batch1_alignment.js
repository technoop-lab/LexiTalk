import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentPath = path.resolve(__dirname, '../DAYS_01_10_CONTENT.json');
const data = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));

const originalDayObjectives = [
  {
    day: 1,
    title: 'Daily Greetings, Time-Bound Salutations & Basic Parting',
    grammarTarget: "Greetings formulas ('Good morning/afternoon/evening'), Parting formulas ('Goodbye', 'Have a nice day', 'See you later'), Formal vs Informal salutations, Titles (Mr./Ms./Dr.)",
    vocabTarget: 'Morning, Afternoon, Evening, Night, Hello, Hi, Goodbye, Farewell, See you soon, Take care, Pleasure, Honor, Welcome',
  },
  {
    day: 2,
    title: 'Social Etiquette, Courtesy & Polite Interaction',
    grammarTarget: "Polite modal requests ('Could you please...', 'Would you mind...', 'May I...'), Courtesy phrases ('Thank you', 'Please', 'Excuse me', 'Pardon me', 'You are welcome', 'My pleasure', 'I apologize')",
    vocabTarget: 'Please, Thank you, Grateful, Appreciate, Excuse me, Pardon, Apologies, Forgive, May I, Welcome, Delight, Assistance',
  },
  {
    day: 3,
    title: 'Expressive Reactions, Emotional Exclamations & Interjections',
    grammarTarget: "Exclamatory syntax ('What a...', 'How...'), Interjections ('Wow', 'Oh dear', 'Bravo', 'Alas', 'Thank goodness', 'Incredible', 'What a surprise'), Emotional reaction tags",
    vocabTarget: 'Wow, Amazing, Incredible, Fantastic, Wonderful, Oh dear, Alas, Bravo, Unbelievable, Splendid, Breathtaking, Marvelous, Shocking',
  },
  {
    day: 4,
    title: 'Conversational Phrases & Daily Action Imperatives',
    grammarTarget: "Direct, polite, and negative imperatives ('Take a seat', 'Please check', 'Do not touch', 'Follow me', 'Let us go', 'Turn left', 'Listen carefully'), Action directives",
    vocabTarget: 'Come, Go, Take, Bring, Check, Follow, Listen, Remember, Wait, Start, Stop, Turn, Proceed, Sign, Verify, Submit',
  },
  {
    day: 5,
    title: 'Present State of Being: is / am / are',
    grammarTarget: "Copular verb 'to be' (is, am, are) in affirmative, negative, and interrogative sentences; Subject-verb concord; Predicate nouns/adjectives for identity, role, nationality, condition",
    vocabTarget: 'Am, Is, Are, Architect, Doctor, Engineer, Student, Ready, Busy, Happy, Diligent, Delighted, Present, Absent, Tired, Energetic',
  },
  {
    day: 6,
    title: 'Past State of Being: was / were',
    grammarTarget: "Past copular verb 'to be' (was, were) across singular and plural subjects; Past time markers (yesterday, last night, earlier, last week, ago, in the past); Stative past conditions",
    vocabTarget: 'Was, Were, Was not, Were not, Yesterday, Last night, Previous, Earlier, Former, Absent, Present, Sick, Exhausted, Thrilled',
  },
  {
    day: 7,
    title: "Future State of Being: will be / won't be",
    grammarTarget: "Future copula 'will be' / 'won't be' (will not be); Future temporal adverbs (tomorrow, next week, soon, shortly, upcoming); Future states, presence, readiness, conditions",
    vocabTarget: "Will be, Won't be, Tomorrow, Upcoming, Next week, Soon, Shortly, Available, Occupied, Punctual, Prepared, Present, Ready",
  },
  {
    day: 8,
    title: 'Demonstratives: this / that / these / those and there is / there are',
    grammarTarget: "Spatial demonstratives (this, that, these, those) + Existential clauses ('There is', 'There are', 'There was', 'There were', 'There will be')",
    vocabTarget: 'This, That, These, Those, There is, There are, There was, There were, Nearby, Distant, Available, Existing, Display, Item',
  },
  {
    day: 9,
    title: 'Possession / Relationships / has / have / had',
    grammarTarget: "Stative possession, relationships, kinship, health, and attributes using 'has', 'have', 'had', 'will have'; auxiliary do/does/did questions ('Do you have...?')",
    vocabTarget: 'Has, Have, Had, Will have, Own, Possess, Brother, Sister, Family, Car, Laptop, Headache, Appointment, Experience, Qualification',
  },
  {
    day: 10,
    title: 'Cumulative Stage-1 synthesis',
    grammarTarget: "Comprehensive synthesis of Days 1-9: Greetings, Polite Courtesy, Exclamations, Imperatives, Be-verbs (Present: is/am/are, Past: was/were, Future: will be), Demonstratives & Existentials (there is/are), Possession (has/have/had)",
    vocabTarget: 'Cumulative Stage-1 vocabulary synthesis across social, professional, medical, domestic, and travel registers',
  }
];

let summary = {
  aligned: 0,
  partiallyAligned: 0,
  misaligned: 0,
  byDay: {}
};

data.days.forEach(day => {
  const dayNum = day.dayNumber;
  const target = originalDayObjectives[dayNum - 1];
  const dlgs = day.use?.dialogues || [];

  summary.byDay[dayNum] = {
    dayNumber: dayNum,
    title: target.title,
    dialogues: []
  };

  dlgs.forEach((dlg, idx) => {
    const allEn = dlg.turns.map(t => t.textEn).join(" ");
    
    let status = "MISALIGNED";
    let explanation = "";
    let observedTopic = dlg.title;
    let observedGrammar = "";
    let observedVocab = "";

    if (dayNum === 1) {
      // Day 1: Daily Greetings, Time-Bound Salutations & Basic Parting
      // Dialogues are Introductions, greetings, verb to be
      const greetingCount = (allEn.match(/\b(good morning|good afternoon|good evening|hello|hi|welcome|goodbye|bye|farewell|see you|take care|pleasure to meet you|nice to meet you)\b/gi) || []).length;
      if (greetingCount >= 4) {
        status = "PARTIALLY ALIGNED";
        explanation = "Dialogue includes time-bound greetings and partings, but heavily focuses on extended professional/personal introductions and copular verb to-be structures.";
      } else {
        status = "MISALIGNED";
        explanation = "Lacks focus on time-bound salutations and basic parting formulas.";
      }
      observedGrammar = "Greetings & Introductions with Copular Verb 'To Be' (am/is/are)";
      observedVocab = "Greetings, introductions, job roles, backgrounds";
    } else if (dayNum === 2) {
      // Day 2: Social Etiquette, Courtesy & Polite Interaction
      // Dialogues are Daily Routines & Present Simple
      status = "MISALIGNED";
      observedGrammar = "Present Simple habitual actions (wakes up, begins, reviews, exercises, eats)";
      observedVocab = "Routines, schedule, morning, daily habits, shifts, training";
      explanation = "Generated against 'Daily Routines & Present Simple' instead of the original Day 02 objective 'Social Etiquette, Courtesy Keywords & Polite Interaction (Please, Thank you, Excuse me, May I, Could you please)'.";
    } else if (dayNum === 3) {
      // Day 3: Expressive Reactions, Emotional Exclamations & Interjections
      // Dialogues are Spatial Prepositions & Neighborhood Navigation
      status = "MISALIGNED";
      observedGrammar = "Spatial prepositions (next to, opposite, on the left, behind, above, between)";
      observedVocab = "Tower, aisle, floor, corridor, shelves, pantry, terminal, station";
      explanation = "Generated against 'Spatial Prepositions & Navigation' instead of the original Day 03 objective 'Expressive Reactions, Emotional Exclamations & Interjections (What a..., How..., Wow, Oh dear, Bravo, Alas)'.";
    } else if (dayNum === 4) {
      // Day 4: Conversational Phrases & Daily Action Imperatives
      // Dialogues are Modal Verb 'Can' (Abilities, Skills, Requests)
      const imperativeCount = (allEn.match(/\b(please |let us |take a |check |listen |remember |follow |look at |turn |open |bring )\b/gi) || []).length;
      const canCount = (allEn.match(/\b(can|cannot|can't|able to)\b/gi) || []).length;
      if (canCount > imperativeCount * 2) {
        status = "MISALIGNED";
        explanation = "Generated against 'Modal Verb Can (Abilities & Skills)' instead of the original Day 04 objective 'Conversational Phrases & Daily Action Imperatives (Commands, directions, instructions, imperative verb forms)'.";
      } else {
        status = "PARTIALLY ALIGNED";
        explanation = "Contains some imperative instructions alongside modal can requests.";
      }
      observedGrammar = "Modal verb 'can/cannot' for ability and requests";
      observedVocab = "Skills, abilities, languages, certifications, requests";
    } else if (dayNum === 5) {
      // Day 5: Present State of Being: is / am / are
      // Dialogues are Frequency Adverbs (Always, Usually, Often, Sometimes, Never)
      status = "MISALIGNED";
      observedGrammar = "Frequency adverbs (always, usually, often, rarely, seldom, never) with habitual verbs";
      observedVocab = "Habits, lifestyle, workouts, diet, meditation, finances, cadence";
      explanation = "Generated against 'Frequency Adverbs' instead of the original Day 05 objective 'Present State of Being: Copular Be (is / am / are) & Subject Concord'.";
    } else if (dayNum === 6) {
      // Day 6: Past State of Being: was / were
      // Dialogues are Telling Time, Daily Schedules & Clock Expressions
      status = "MISALIGNED";
      observedGrammar = "Time-telling syntax, clock expressions (o'clock, quarter past, half past, sharp) and schedules";
      observedVocab = "Time, schedule, roster, flight, screening, train, timetable";
      explanation = "Generated against 'Telling Time & Schedules' instead of the original Day 06 objective 'Past State of Being: Was / Were & Time Markers (yesterday, last night, past states)'.";
    } else if (dayNum === 7) {
      // Day 7: Future State of Being: will be / won't be
      // Dialogues are Possessive Pronouns & Ownership (my/mine, your/yours, his/hers, whose)
      status = "MISALIGNED";
      observedGrammar = "Possessive pronouns (mine, yours, his, hers, ours, theirs) and possessive determiners/questions (whose)";
      observedVocab = "Luggage, locker, equipment, tools, books, parking, belongings, ownership";
      explanation = "Generated against 'Possessive Pronouns & Ownership' instead of the original Day 07 objective 'Future State of Being & Presence: Will Be / Won't Be & Time Adverbs'.";
    } else if (dayNum === 8) {
      // Day 8: Demonstratives: this / that / these / those and there is / there are
      // Dialogues are Present Continuous (am/is/are + -ing actions happening now)
      status = "MISALIGNED";
      observedGrammar = "Present Continuous tense (am/is/are + -ing) for live, ongoing actions";
      observedVocab = "Commentary, rehearsal, live broadcast, coding, testing, observing, painting";
      explanation = "Generated against 'Present Continuous (Actions Happening Now)' instead of the original Day 08 objective 'Spatial Demonstratives (this/that/these/those) & Existential There is / There are'.";
    } else if (dayNum === 9) {
      // Day 9: Possession / Relationships / has / have / had
      // Dialogues are Present Simple vs. Continuous (Routine vs. Now)
      status = "MISALIGNED";
      observedGrammar = "Contrast between Present Simple (usually/always) and Present Continuous (currently/today/right now)";
      observedVocab = "Homestay vs office, cycling vs metro, reading vs scrolling, cooking vs takeout";
      explanation = "Generated against 'Present Simple vs. Present Continuous' instead of the original Day 09 objective 'Possession, Relationships & Attributes: Has / Have / Had'.";
    } else if (dayNum === 10) {
      // Day 10: Cumulative Stage-1 synthesis
      // Dialogues are Comprehensive Review & Synthesis
      status = "PARTIALLY ALIGNED";
      observedGrammar = "Mixed synthesis of conversational structures (greetings, present simple/continuous, polite requests, past/future elements)";
      observedVocab = "Job interview, exchange student, podcast, walking tour, medical consult, tenant onboarding, travel planning";
      explanation = "Functionally serves as a rich cumulative synthesis dialogue set across diverse domains, but synthesizes the substituted topic stream rather than the pure original grammar chain (e.g. was/were, will be, there is/are, has/have/had).";
    }

    if (status === "ALIGNED") summary.aligned++;
    else if (status === "PARTIALLY ALIGNED") summary.partiallyAligned++;
    else if (status === "MISALIGNED") summary.misaligned++;

    summary.byDay[dayNum].dialogues.push({
      id: dlg.id,
      title: dlg.title,
      turns: dlg.turns.length,
      status,
      observedTopic,
      observedGrammar,
      observedVocab,
      explanation
    });
  });
});

console.log("ALIGNMENT AUDIT SUMMARY:");
console.log(`Fully Aligned: ${summary.aligned}`);
console.log(`Partially Aligned: ${summary.partiallyAligned}`);
console.log(`Misaligned: ${summary.misaligned}`);

Object.keys(summary.byDay).forEach(d => {
  const dayData = summary.byDay[d];
  const statuses = dayData.dialogues.map(x => x.status);
  const aligned = statuses.filter(s => s === "ALIGNED").length;
  const part = statuses.filter(s => s === "PARTIALLY ALIGNED").length;
  const mis = statuses.filter(s => s === "MISALIGNED").length;
  console.log(`Day ${d}: ${dayData.title} -> Aligned: ${aligned}, Partially Aligned: ${part}, Misaligned: ${mis}`);
});
