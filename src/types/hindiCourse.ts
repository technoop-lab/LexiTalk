export interface HindiGrammarRule {
  ruleNumber: number;
  title: string;
  description: string;
  register?: string;
  [key: string]: any;
}

export interface HindiFormulaTableRow {
  timeWindow?: string;
  context?: string;
  formula: string;
  meaningHi?: string;
  exampleEn?: string;
  exampleHi?: string;
  [key: string]: any;
}

export interface HindiSpeakerTrap {
  trapTitle: string;
  hindiPattern: string;
  potentialInterference: string;
  explanation: string;
  naturalSolution: string;
  [key: string]: any;
}

export interface HindiTeachSection {
  hindiExplanation: string;
  englishExplanation: string;
  grammarRules: HindiGrammarRule[];
  formulaTable?: HindiFormulaTableRow[];
  hindiSpeakerTrap: HindiSpeakerTrap;
  [key: string]: any;
}

export interface HindiVocabItem {
  id: string;
  word: string;
  lemma: string;
  partOfSpeech: string;
  pos: string;
  ipa: string;
  hindiMeaning: string;
  meaningHi: string;
  hindiPronunciation?: string;
  devanagari?: string;
  hindiIpa?: string;
  syllables?: string;
  stress?: string;
  collocations?: string[];
  example?: string;
  exampleEn?: string;
  hindiExample?: string;
  exampleHi?: string;
  register?: string;
  commonError?: string;
  commonMistake?: string;
  commonLearnerError?: string;
  relatedForms?: any[];
  [key: string]: any;
}

export interface HindiPhraseItem {
  id: string;
  phrase: string;
  register: string;
  meaningHi: string;
  exampleEn?: string;
  exampleHi?: string;
  contextualUsage?: string;
  [key: string]: any;
}

export interface HindiLearnSection {
  vocabulary: HindiVocabItem[];
  phrases: HindiPhraseItem[];
  spokenPhrases?: HindiPhraseItem[];
  [key: string]: any;
}

export interface HindiExampleItem {
  id: string;
  en: string;
  hi: string;
  notes?: string;
  register?: string;
  grammaticalFocus?: string;
  [key: string]: any;
}

export interface HindiPronunciationDrill {
  id: string;
  text: string;
  voiceRole?: string;
  tip?: string;
  [key: string]: any;
}

export interface HindiMinimalPair {
  id?: string;
  wordA: string;
  wordB: string;
  ipaA?: string;
  ipaB?: string;
  meaningA?: string;
  meaningB?: string;
  distinctionNote?: string;
  contrast?: string;
  [key: string]: any;
}

export interface HindiPronunciationSection {
  targetSounds: string[];
  traps: string;
  drills: HindiPronunciationDrill[];
  focusSound?: string;
  phoneticNotes?: string;
  minimalPairs?: (HindiMinimalPair | string)[];
  sentenceStress?: any[];
  connectedSpeech?: any[];
  [key: string]: any;
}

export interface HindiPracticeExercise {
  id: string;
  type: string;
  prompt: string;
  options?: string[];
  correctAnswer: string;
  acceptableAlternatives?: string[];
  targetText?: string;
  pairs?: { left: string; right: string }[];
  expectedAnswer?: string;
  explanationEn: string;
  explanationHi: string;
  difficulty: 'easy' | 'medium' | 'hard' | string;
  skillTag: string;
  [key: string]: any;
}

export interface HindiDialogueTurn {
  id?: string;
  speaker: string;
  avatar?: string;
  textEn: string;
  textHi: string;
  audioCue?: string;
  focus?: string;
  isContinuation?: boolean;
  [key: string]: any;
}

export interface HindiDialogueScenario {
  id: string;
  title: string;
  titleHi?: string;
  context?: string;
  situation?: string;
  characters?: string[];
  turns: HindiDialogueTurn[];
  [key: string]: any;
}

export type HindiDialogue = HindiDialogueScenario;

export interface HindiSpeakingTask {
  promptEn: string;
  promptHi: string;
  sampleResponseEn?: string;
  sampleResponseHi?: string;
  targetExpressions?: string[];
  roleplay?: {
    scenario?: string;
    roleA?: string;
    roleB?: string;
    sampleDialogue?: string;
  };
  [key: string]: any;
}

export interface HindiUseSection {
  situation: string;
  dialogue: HindiDialogueScenario;
  dialogues: HindiDialogueScenario[];
  speakingTask: HindiSpeakingTask;
  speakingPrompt?: any;
  roleplay?: any;
  [key: string]: any;
}

export interface HindiAssessItem {
  id: string;
  question: string;
  answer: string;
  skill: string;
  benchmark?: string;
  taskPrompt?: string;
  expectedAnswer?: string;
  criteria?: string;
  cefrDescriptor?: string;
  [key: string]: any;
}

export interface HindiReviewSection {
  spacedRepetitionTag: string;
  recommendedIntervalDays: number[];
  quickRecall?: any[];
  spacedTips?: any[];
  [key: string]: any;
}

export interface HindiDayLesson {
  dayNumber: number;
  id: string;
  titleEn: string;
  titleHi: string;
  cefr: string;
  estMinutes: number;
  prerequisites: string;
  objectivesEn: string[];
  objectivesHi: string[];
  teach: HindiTeachSection;
  learn: HindiLearnSection;
  examples: HindiExampleItem[];
  pronunciation: HindiPronunciationSection;
  practice: HindiPracticeExercise[];
  use: HindiUseSection;
  assess: HindiAssessItem[];
  review: HindiReviewSection;
  [key: string]: any;
}

export interface HindiCourseStageMeta {
  stageNumber: number;
  stageTitleEn: string;
  stageTitleHi: string;
  startDay: number;
  endDay: number;
  cefrSpan: string;
  descriptionEn: string;
  descriptionHi: string;
}

export interface HindiCourseProgress {
  userId: string;
  completedDays: number[];
  unlockedDays: number[];
  currentDayNumber: number;
  dayScores: Record<number, number>; // dayNum -> percentage (0-100)
  dayStars: Record<number, number>; // dayNum -> stars (1-3)
  dayCompletedAt: Record<number, string>; // dayNum -> ISO string
  exerciseAttempts: Record<string, { correct: boolean; attempts: number; lastAnswer: string }>;
  dueReviews: { dayNumber: number; scheduledForDate: string; intervalIndex: number }[];
  streakDays: number;
  lastActiveDate: string;
  totalXpEarned: number;
  weakSkillTags: string[];
}
