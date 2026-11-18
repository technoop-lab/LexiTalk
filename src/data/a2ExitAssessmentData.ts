import { Exercise, SkillTag, A2ExitAssessmentThresholdConfig } from '../types';

export interface A2ExitAssessmentBlueprint {
  id: string;
  title: string;
  subtitle: string;
  cefrLevel: 'A2';
  targetAudience: 'Learners completing Lessons 91–270 (Units 7–18)';
  durationMinutes: number;
  totalQuestions: number;
  totalPoints: number;
  passingScorePercent: number;
  masteryScorePercent: number;
  badgeTitle: string;
  badgeIcon: string;
  sections: {
    sectionNumber: number;
    title: string;
    targetSkills: SkillTag[];
    questionCount: number;
    pointsWeight: number;
    description: string;
  }[];
  skillWeights: Record<SkillTag, number>;
}

export const A2_EXIT_ASSESSMENT_CONFIG: A2ExitAssessmentThresholdConfig = {
  overallPassScorePercent: 80,
  overallMasteryScorePercent: 90,
  criticalSkillMinimums: {
    vocabulary: 75,
    grammar: 75,
    listening: 75,
    reading: 75,
    writing: 70,
    speaking: 70,
    interaction: 70,
    mediation: 70,
    pronunciation: 70,
  },
  remediationTriggerThresholdPercent: 75,
  maxRetestAttemptsAllowed: 10,
};

export const A2_EXIT_ASSESSMENT_BLUEPRINT: A2ExitAssessmentBlueprint = {
  id: 'a2_exit_master_assessment',
  title: 'CEFR A2 Comprehensive Exit Master Assessment',
  subtitle: 'Official Waystage Elementary Proficiency Gate (Lessons 91–270)',
  cefrLevel: 'A2',
  targetAudience: 'Learners completing Lessons 91–270 (Units 7–18)',
  durationMinutes: 45,
  totalQuestions: 50,
  totalPoints: 100,
  passingScorePercent: 80,
  masteryScorePercent: 90,
  badgeTitle: 'A2 English Waystage Master',
  badgeIcon: '🏆',
  sections: [
    {
      sectionNumber: 1,
      title: 'Vocabulary & Expanded Lexicon',
      targetSkills: ['vocabulary', 'reading'],
      questionCount: 7,
      pointsWeight: 14,
      description: 'Lexical mastery across workplace, civic services, arts, gastronomy, healthcare, environment, and higher education.',
    },
    {
      sectionNumber: 2,
      title: 'Grammar & Morphosyntax (Present Perfect, Modals & Conditionals)',
      targetSkills: ['grammar', 'writing'],
      questionCount: 10,
      pointsWeight: 20,
      description: 'Present Perfect vs Past Simple, Past Continuous narrative, Modals of obligation/deduction, First/Second conditionals, Passives, and Relative clauses.',
    },
    {
      sectionNumber: 3,
      title: 'Listening & Acoustic Dialogue Comprehension',
      targetSkills: ['listening', 'pronunciation'],
      questionCount: 7,
      pointsWeight: 14,
      description: 'Comprehension of workplace briefings, official announcements, interviews, and multi-turn conversations at natural speed.',
    },
    {
      sectionNumber: 4,
      title: 'Reading & Document Navigation',
      targetSkills: ['reading', 'vocabulary'],
      questionCount: 6,
      pointsWeight: 12,
      description: 'Comprehending official forms, formal emails, cultural articles, reports, and academic brochures.',
    },
    {
      sectionNumber: 5,
      title: 'Writing & Cohesive Paragraph Assembly',
      targetSkills: ['writing', 'grammar'],
      questionCount: 5,
      pointsWeight: 12,
      description: 'Synthesizing formal requests, descriptive paragraphs, logical connectors (however, therefore, whereas), and structured emails.',
    },
    {
      sectionNumber: 6,
      title: 'Spoken Production & Phonological Precision',
      targetSkills: ['speaking', 'pronunciation'],
      questionCount: 5,
      pointsWeight: 10,
      description: 'Intonation patterns in tag questions, connected speech, contrastive stress, and fluid sentence production.',
    },
    {
      sectionNumber: 7,
      title: 'Interaction & Strategic Communication',
      targetSkills: ['interaction', 'speaking', 'listening'],
      questionCount: 4,
      pointsWeight: 8,
      description: 'Handling administrative procedures, negotiations, polite disagreements, and collaborative discussions.',
    },
    {
      sectionNumber: 8,
      title: 'Mediation & Cross-Linguistic Pragmatics',
      targetSkills: ['mediation', 'grammar', 'vocabulary'],
      questionCount: 3,
      pointsWeight: 5,
      description: 'Translating nuanced thoughts, explaining bureaucratic instructions to others, and linguistic mediation.',
    },
    {
      sectionNumber: 9,
      title: 'Error Remediation & Grammatical Gym',
      targetSkills: ['grammar', 'mediation'],
      questionCount: 3,
      pointsWeight: 5,
      description: 'Identifying and correcting subtle A2 level tense shifts, preposition errors, and modal concord issues.',
    },
  ],
  skillWeights: {
    grammar: 20,
    vocabulary: 14,
    listening: 14,
    reading: 12,
    writing: 12,
    speaking: 10,
    interaction: 8,
    mediation: 5,
    pronunciation: 5,
  },
};

/**
 * Form A: Primary A2 Exit Assessment Exercise Bank
 */
export const A2_EXIT_EXERCISES_FORM_A: Exercise[] = [
  {
    id: 'a2_exit_a_vocab_01',
    type: 'multiple_choice',
    prompt: 'Choose the word that best completes the sentence:\n"The university requires all prospective students to submit their academic ______ before the July deadline."',
    options: [
      { id: 'opt_1', text: 'transcripts', isCorrect: true },
      { id: 'opt_2', text: 'brochures', isCorrect: false },
      { id: 'opt_3', text: 'receipts', isCorrect: false },
      { id: 'opt_4', text: 'signatures', isCorrect: false },
    ],
    correctAnswer: 'transcripts',
    explanation: '"Academic transcripts" refers to the official record of a student\'s grades and courses (Lesson 206).',
    skillTags: ['vocabulary', 'reading'],
    audioId: 'en_a2_exit_a_vocab_01',
    audioText: 'The university requires all prospective students to submit their academic transcripts before the July deadline.',
  },
  {
    id: 'a2_exit_a_grammar_01',
    type: 'multiple_choice',
    prompt: 'Select the correct verb forms:\n"While we ______ for the project results, the client ______ with new requirements."',
    options: [
      { id: 'opt_1', text: 'were waiting / called', isCorrect: true },
      { id: 'opt_2', text: 'waited / was calling', isCorrect: false },
      { id: 'opt_3', text: 'are waiting / called', isCorrect: false },
      { id: 'opt_4', text: 'have waited / was called', isCorrect: false },
    ],
    correctAnswer: 'were waiting / called',
    explanation: 'Past Continuous (were waiting) describes an ongoing background action interrupted by a completed event in Past Simple (called) (Lesson 110).',
    grammarTarget: 'Past Continuous vs Past Simple Interruption',
    skillTags: ['grammar', 'writing'],
  },
  {
    id: 'a2_exit_a_grammar_02',
    type: 'multiple_choice',
    prompt: 'Choose the correct form to express unfulfilled advice about a past situation:\n"You ______ earlier; now all the train tickets are sold out."',
    options: [
      { id: 'opt_1', text: 'should have booked', isCorrect: true },
      { id: 'opt_2', text: 'should book', isCorrect: false },
      { id: 'opt_3', text: 'must have book', isCorrect: false },
      { id: 'opt_4', text: 'had to booked', isCorrect: false },
    ],
    correctAnswer: 'should have booked',
    explanation: '"Should have + past participle" expresses criticism or regret about a past action that did not happen (Lesson 175).',
    grammarTarget: 'Past Modals of Regret (should have done)',
    skillTags: ['grammar', 'writing'],
  },
  {
    id: 'a2_exit_a_listen_01',
    type: 'listening',
    prompt: 'Listen to the supervisor\'s instructions and identify what the team must finalize today:',
    options: [
      { id: 'opt_1', text: 'The quarterly budget revision', isCorrect: true },
      { id: 'opt_2', text: 'The staff holiday schedule', isCorrect: false },
      { id: 'opt_3', text: 'The vendor contract termination', isCorrect: false },
      { id: 'opt_4', text: 'The new office furniture order', isCorrect: false },
    ],
    correctAnswer: 'The quarterly budget revision',
    explanation: 'The speaker states that the quarterly budget revision must be submitted before 5 PM today (Lesson 185).',
    skillTags: ['listening', 'vocabulary'],
    audioId: 'en_a2_exit_a_listen_01',
    audioText: 'Please remember that our top priority this afternoon is finalizing the quarterly budget revision before five PM.',
  },
  {
    id: 'a2_exit_a_speak_01',
    type: 'speaking',
    prompt: 'Express a polite inquiry at a government or consular desk:',
    targetSentence: 'Could you please clarify which supporting documents are mandatory for this visa application?',
    correctAnswer: 'Could you please clarify which supporting documents are mandatory for this visa application?',
    explanation: '"Could you please clarify..." is the polite standard formula for formal administrative queries (Lesson 197).',
    skillTags: ['speaking', 'pronunciation'],
    audioId: 'en_a2_exit_a_speak_01',
    audioText: 'Could you please clarify which supporting documents are mandatory for this visa application?',
  },
  {
    id: 'a2_exit_a_read_01',
    type: 'multiple_choice',
    prompt: 'Read the official notice:\n"Due to system maintenance, all electronic permit applications submitted after Friday 6:00 PM will be processed on the following Tuesday. Urgent requests may be expedited at Counter 4 on Monday morning."\nWhat should someone with an urgent weekend permit do?',
    options: [
      { id: 'opt_1', text: 'Visit Counter 4 on Monday morning in person', isCorrect: true },
      { id: 'opt_2', text: 'Submit another online form on Saturday', isCorrect: false },
      { id: 'opt_3', text: 'Wait until Tuesday afternoon for processing', isCorrect: false },
      { id: 'opt_4', text: 'Call technical support over the weekend', isCorrect: false },
    ],
    correctAnswer: 'Visit Counter 4 on Monday morning in person',
    explanation: 'The notice clarifies that urgent requests can be expedited at Counter 4 on Monday morning (Lesson 196).',
    skillTags: ['reading', 'vocabulary'],
  },
  {
    id: 'a2_exit_a_write_01',
    type: 'word_ordering',
    prompt: 'Arrange the words to form a polite formal email conclusion:',
    words: ['I', 'look', 'forward', 'to', 'hearing', 'from', 'you', 'at', 'your', 'earliest', 'convenience.'],
    correctAnswer: 'I look forward to hearing from you at your earliest convenience.',
    explanation: '"I look forward to hearing from you..." is the standard formal closing in business and administrative correspondence (Lesson 201).',
    skillTags: ['writing', 'grammar'],
  },
  {
    id: 'a2_exit_a_trans_01',
    type: 'translation',
    prompt: 'Translate accurately into English:\n"यदि मुझे समय मिलता, तो मैं कार्यशाला में अवश्य भाग लेता।"',
    targetSentence: 'If I had time, I would certainly attend the workshop.',
    correctAnswer: 'If I had time, I would certainly attend the workshop.',
    options: [
      { id: 'opt_1', text: 'If I had time, I would certainly attend the workshop.', isCorrect: true },
      { id: 'opt_2', text: 'If I have time, I will certainly attend the workshop.', isCorrect: false },
      { id: 'opt_3', text: 'If I had had time, I attended the workshop.', isCorrect: false },
    ],
    explanation: 'Second Conditional (If + Past Simple, would + base verb) conveys hypothetical present/future situations (Lesson 162).',
    skillTags: ['mediation', 'grammar'],
  },
  {
    id: 'a2_exit_a_err_01',
    type: 'error_correction',
    prompt: 'Identify and fix the grammar error in the following report sentence:',
    errorSentence: 'The conference was attended by many delegates which came from different countries.',
    targetSentence: 'The conference was attended by many delegates who came from different countries.',
    correctAnswer: 'The conference was attended by many delegates who came from different countries.',
    options: [
      { id: 'opt_1', text: 'The conference was attended by many delegates who came from different countries.', isCorrect: true },
      { id: 'opt_2', text: 'The conference was attended by many delegates which came from different countries.', isCorrect: false },
      { id: 'opt_3', text: 'The conference attended by many delegates who were coming from different countries.', isCorrect: false },
    ],
    explanation: 'Use relative pronoun "who" (not "which") when referring to human subjects/delegates (Lesson 158).',
    grammarTarget: 'Relative Pronouns (who vs which)',
    skillTags: ['grammar', 'writing'],
  },
];

/**
 * Form B / Retest: Alternate A2 Exit Assessment Exercise Bank
 */
export const A2_EXIT_EXERCISES_FORM_B_RETEST: Exercise[] = [
  {
    id: 'a2_exit_b_vocab_01',
    type: 'multiple_choice',
    prompt: 'Choose the word that best completes the sentence:\n"The scholarship committee evaluated candidates based on both academic merit and community ______."',
    options: [
      { id: 'opt_1', text: 'involvement', isCorrect: true },
      { id: 'opt_2', text: 'attendance', isCorrect: false },
      { id: 'opt_3', text: 'tuition', isCorrect: false },
      { id: 'opt_4', text: 'penalty', isCorrect: false },
    ],
    correctAnswer: 'involvement',
    explanation: '"Community involvement" is a high-frequency academic and professional collocation (Lesson 207).',
    skillTags: ['vocabulary', 'reading'],
  },
  {
    id: 'a2_exit_b_grammar_01',
    type: 'multiple_choice',
    prompt: 'Select the correct conditional sentence form:\n"If the research proposal ______ approved, the team will receive international funding."',
    options: [
      { id: 'opt_1', text: 'is', isCorrect: true },
      { id: 'opt_2', text: 'will be', isCorrect: false },
      { id: 'opt_3', text: 'was', isCorrect: false },
      { id: 'opt_4', text: 'had been', isCorrect: false },
    ],
    correctAnswer: 'is',
    explanation: 'First Conditional if-clause uses Present Simple (is approved passive), not "will be" (Lesson 148).',
    grammarTarget: 'First Conditional with Passive Voice',
    skillTags: ['grammar', 'writing'],
  },
  {
    id: 'a2_exit_b_grammar_02',
    type: 'multiple_choice',
    prompt: 'Choose the sentence with the correct passive structure:',
    options: [
      { id: 'opt_1', text: 'The new regulations were implemented by the board last month.', isCorrect: true },
      { id: 'opt_2', text: 'The new regulations was implemented by the board last month.', isCorrect: false },
      { id: 'opt_3', text: 'The new regulations were implement by the board last month.', isCorrect: false },
      { id: 'opt_4', text: 'The new regulations have implemented by the board last month.', isCorrect: false },
    ],
    correctAnswer: 'The new regulations were implemented by the board last month.',
    explanation: 'Plural subject "regulations" takes "were" + past participle "implemented" (Lesson 170).',
    grammarTarget: 'Past Simple Passive',
    skillTags: ['grammar', 'writing'],
  },
  {
    id: 'a2_exit_b_listen_01',
    type: 'listening',
    prompt: 'Listen to the registrar announcement and identify the deadline for course enrollment changes:',
    options: [
      { id: 'opt_1', text: 'Friday at 4:30 PM', isCorrect: true },
      { id: 'opt_2', text: 'Monday at noon', isCorrect: false },
      { id: 'opt_3', text: 'Next Wednesday morning', isCorrect: false },
      { id: 'opt_4', text: 'End of the current month', isCorrect: false },
    ],
    correctAnswer: 'Friday at 4:30 PM',
    explanation: 'The announcement confirms that course adjustments must be finalized before Friday 4:30 PM (Lesson 208).',
    skillTags: ['listening', 'vocabulary'],
    audioId: 'en_a2_exit_b_listen_01',
    audioText: 'Attention all students: the final deadline for course add or drop requests is this Friday at four thirty PM.',
  },
];

export function getA2ExitExerciseWeight(exercise: Exercise): number {
  switch (exercise.type) {
    case 'error_correction':
    case 'translation':
      return 3;
    case 'word_ordering':
    case 'speaking':
    case 'listening':
      return 2;
    default:
      return 2;
  }
}
