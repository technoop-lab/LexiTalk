export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type TargetLanguageCode =
  | 'en'
  | 'sa'
  | 'es'
  | 'fr'
  | 'de'
  | 'hi'
  | 'zh'
  | 'ja'
  | 'ar'
  | 'ru'
  | 'pt'
  | string;

export type NativeLanguageCode =
  | 'hi'
  | 'bn'
  | 'ta'
  | 'te'
  | 'mr'
  | 'gu'
  | 'pa'
  | 'es'
  | 'fr'
  | 'de'
  | 'pt'
  | 'zh'
  | 'ar'
  | 'ja'
  | 'ru';

export type InstructionLanguageCode = NativeLanguageCode | 'en' | string;

export type ProficiencyFramework = 'CEFR' | 'LEVEL_STAGES' | 'CUSTOM';

export type LanguageCapabilityStatus =
  | 'PRODUCTION_READY'
  | 'CONTENT_READY'
  | 'CONTENT_PARTIAL'
  | 'ARCHITECTURE_READY'
  | 'ACTIVE_PRODUCTION'
  | 'PLANNED';

export interface LanguageRegistryEntry {
  code: string;
  name: string;
  nativeName: string;
  script: string;
  direction: 'ltr' | 'rtl';
  flag: string;
  isTargetLanguageSupported: boolean;
  isInstructionLanguageSupported: boolean;
  status: LanguageCapabilityStatus;
  defaultProficiencyFramework: ProficiencyFramework;
  greeting?: string;
  description?: string;
  coverageNotes?: string;
}

export interface LearningLanguageConfig {
  configId: string;
  learnerId: string;
  targetLanguage: TargetLanguageCode;
  instructionLanguage: InstructionLanguageCode;
  interfaceLanguage: NativeLanguageCode | string;
  proficiencyLevel: string;
  proficiencyFramework: ProficiencyFramework;
  curriculumId: string;
  learningGoal: LearningGoal;
}

export interface LearningJourney {
  journeyId: string;
  config: LearningLanguageConfig;
  createdAt: string;
  lastActiveAt: string;
  completedLessonIds: string[];
  lessonStars: Record<string, number>;
  totalXp: number;
  currentLevel: string;
  detailedLessonProgress?: Record<string, LessonProgressRecord>;
  wordsMasteredCount: number;
}

export interface ProficiencyLevelDefinition {
  code: string;
  label: string;
  targetLanguage: TargetLanguageCode;
  framework: ProficiencyFramework;
  sequenceOrder: number;
}

export interface TargetLanguageCurriculumMetadata {
  curriculumId: string;
  targetLanguage: TargetLanguageCode;
  title: string;
  description: string;
  proficiencyFramework: ProficiencyFramework;
  levels: ProficiencyLevelDefinition[];
  totalUnits: number;
  totalLessons: number;
  status: 'ACTIVE_PRODUCTION' | 'ARCHITECTURAL_READY' | 'PLANNED';
}

export type LearningMode = 'english_only' | 'english_plus_secondary';

export type SecondaryLanguageCode = 'es' | 'fr' | 'de' | 'ja' | 'pt';

export interface SecondaryLanguageInfo {
  code: SecondaryLanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  description: string;
}

export interface NativeLanguageInfo {
  code: NativeLanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  greeting: string;
  status?: LanguageCapabilityStatus;
  coverageNotes?: string;
}

export type UserRole = 'LEARNER' | 'ADMIN' | 'DEVELOPER_TESTER';

export type AccessEntitlement = 'FREE' | 'PREMIUM' | 'DEVELOPER_TEST';

export type TestScenarioPreset =
  | 'NEW_USER'
  | 'A1_IN_PROGRESS'
  | 'A1_COMPLETE'
  | 'A1_EXIT_READY'
  | 'A1_EXIT_FAILED'
  | 'A1_REMEDIATION'
  | 'A1_RETEST_READY'
  | 'A1_MASTERED'
  | 'A2_UNLOCKED'
  | 'A2_PARTIAL_ACCESS'
  | 'A2_COMPLETE'
  | 'A2_EXIT_READY'
  | 'A2_EXIT_FAILED'
  | 'A2_MASTERED'
  | 'A2_MASTERED_B1_READY'
  | 'PREMIUM_USER'
  | 'PREMIUM_LOCKED';

export type SubscriptionTier = 'free' | 'pro_monthly' | 'pro_annual';

// Compact / Extended Exercise Types
export type ExerciseType =
  | 'translate_tiles'      // Assemble word bubbles to translate a sentence
  | 'translate_type'       // Type the translation
  | 'listen_type'          // Listen to native speech dictation and type/arrange words
  | 'fill_blank'           // Fill in missing word in a sentence from options
  | 'fill_in_blank'        // Alias for fill_blank
  | 'picture_choice'       // Select the correct image/card for a word
  | 'match_pairs'          // Match word pairs
  | 'speak_sentence'       // Speak out loud into mic (offline Web Speech)
  | 'grammar_spotter'      // Identify the correct grammatical rule or error
  | 'dialogue_story';      // Interactive story chat with comprehension questions

// The 12 Standardized Exercise Types for Curiosity Lesson Engine
export type ExtendedExerciseType =
  | 'recognition'            // Type 1: Choose correct meaning
  | 'multiple_choice'        // Type 2: Choose word/phrase with explanation
  | 'fill_blank'             // Type 3: Fill missing word from choices
  | 'fill_in_blank'          // Alias for fill_blank
  | 'word_ordering'          // Type 4: Tap word tiles to construct sentence
  | 'reorder'                // Alias for word_ordering
  | 'sentence_ordering'      // Alias for word_ordering / sequence ordering
  | 'match_pairs'            // Pair matching
  | 'sentence_construction'  // Type 5: Guided construction from information prompts
  | 'question_formation'     // Type 5b: Guided question assembly with word tiles
  | 'translation'            // Type 6: Translate native sentence to English
  | 'listening'              // Type 7: Listen to audio & choose what was heard
  | 'listen_and_type'        // Type 8: Listen to audio & type text with normalization
  | 'error_correction'       // Type 9: Identify error in incorrect sentence
  | 'dialogue_completion'    // Type 10: Select missing dialogue line
  | 'speaking'               // Type 11: Speak target sentence with voice matching feedback
  | 'personal_production'   // Type 12: Interactive production with custom name/country/city inputs
  | 'reading'                // Reading comprehension passage with question
  | 'mediation'              // Mediation and communication bridging exercise
  | 'writing';               // Writing / construction task

export interface ExerciseOption {
  id: string;
  text: string;
  imageEmoji?: string;
  isCorrect?: boolean;
}

export interface Exercise {
  id: string;
  lessonId?: string;
  stage?: number | string;
  type: ExerciseType | ExtendedExerciseType;
  rawType?: string;                 // Original non-canonical type before normalization (e.g. 'question_formation')
  targetLanguage?: TargetLanguageCode;
  instructionLanguage?: InstructionLanguageCode;
  prompt: string;                   // Question / Instruction in English or source lang
  targetSentence?: string;          // Target English sentence
  sourceSentence?: string;          // Prompt sentence in native language or context
  sourceTranslations?: Partial<Record<NativeLanguageCode, string>>; // Native translations per lang
  audioText?: string;               // Text to be spoken out loud via TTS
  wordBank?: string[];              // Scrambled word tiles for assembly
  words?: string[];                 // Word list for reordering
  correctOrder?: string[];          // Correct ordering sequence
  options?: ExerciseOption[];       // Multiple choice options
  pairs?: { id?: string; left: string; right: string }[]; // Word pair matching
  correctAnswer?: string | string[];// Expected answer(s)
  blankIndex?: number;              // Index where blank sits
  sentenceTemplate?: string;        // Template or frame for sentence construction
  explanation?: string;             // Grammar tip or vocabulary note
  explanationsByLang?: Partial<Record<InstructionLanguageCode, string>>;
  tokens?: string[];                 // Optional tokenized items for sentence assembly / ordering
  acceptableAnswers?: string[];     // Alternative acceptable text inputs
  targetText?: string;              // Target text alias
  text?: string;                    // Template / blank text
  correctSentence?: string;         // Target correct sentence for error correction
  guidelines?: string;              // Guidance or rubrics for open/personal production tasks
  // Additional metadata for advanced exercise types
  infoPrompts?: { label: string; value: string }[]; // For sentence_construction & personal_production
  errorSentence?: string;                            // For error_correction
  dialogueContext?: { speakerA: string; lineA: string; speakerB: string }; // For dialogue_completion
  // Taxonomy & Curriculum Metadata (Iteration 2 Foundations)
  skillTags?: SkillTag[];
  grammarTarget?: string;
  vocabularyTarget?: string;
  difficultyTag?: string;
  audioId?: string;
}

// Skill Taxonomy Foundation
export type SkillTag =
  | 'listening'
  | 'speaking'
  | 'reading'
  | 'writing'
  | 'interaction'
  | 'mediation'
  | 'pronunciation'
  | 'grammar'
  | 'vocabulary';

// Grammar Taxonomy Foundation
export type GrammarCategoryTag =
  | 'verbs'
  | 'verb_be'
  | 'verb_have'
  | 'verb_do'
  | 'modal_verbs'
  | 'modals'
  | 'tenses'
  | 'aspect'
  | 'questions'
  | 'negatives'
  | 'articles'
  | 'determiners'
  | 'pronouns'
  | 'nouns'
  | 'adjectives'
  | 'adverbs'
  | 'prepositions'
  | 'conjunctions'
  | 'sentence_structure'
  | 'word_order'
  | 'clauses';

// Lexical Taxonomy Foundation
export type LexicalCategoryTag =
  | 'vocabulary'
  | 'word_families'
  | 'collocations'
  | 'lexical_chunks'
  | 'fixed_expressions'
  | 'phrasal_verbs'
  | 'synonyms'
  | 'antonyms'
  | 'register'
  | 'common_learner_errors';

// Assessment Hierarchy Scope Distinction
export type AssessmentScope = 
  | 'lesson'          // Assesses current lesson learning objectives
  | 'unit_review'     // Assesses current unit accumulated skills
  | 'a1_progress'     // Mid-level CEFR progress check
  | 'cefr_final';     // Comprehensive end-of-level CEFR final exam

export interface CEFRAssessmentDefinition {
  id: string;
  cefrLevel: CEFRLevel;
  scope: AssessmentScope;
  title: string;
  description: string;
  unitId?: string;
  lessonId?: string;
  estimatedMinutes: number;
  totalItems: number;
  unlockedAtPercent?: number;
}

// Standard Curriculum Metadata Schema (for A1 - C2 Scalable Framework)
export interface CEFRCurriculumMetadata {
  cefrLevel: CEFRLevel;
  unitId: string;
  sectionId: string;
  lessonId: string;
  canDoObjectives: string[];
  grammarTargets: GrammarCategoryTag[];
  vocabularyTargets: string[];
  collocations?: string[];
  pronunciationTargets?: string[];
  functions?: string[];
  skillDistribution: Record<SkillTag, number>;
}

export interface LessonNode {
  id: string;
  unitId: string;
  title: string;
  description: string;
  icon: string;                     // Emoji or icon name
  cefr: CEFRLevel;
  totalSteps: number;
  xpReward: number;
  exercises: Exercise[];
  isCheckpoint?: boolean;
}

export interface CourseUnit {
  id: string;
  unitNumber: number;
  title: string;
  description: string;
  cefr: CEFRLevel;
  colorTheme: string;               // Tailwind color name
  guidebook: {
    title: string;
    keyGrammarRule: string;
    rulesByLang?: Partial<Record<NativeLanguageCode, string>>;
    examples: {
      english: string;
      translation: string;
      translationsByLang?: Partial<Record<NativeLanguageCode, string>>;
      explanation: string;
    }[];
  };
  lessons: LessonNode[];
}

export interface InteractiveStory {
  id: string;
  title: string;
  cefr: CEFRLevel;
  icon: string;
  description: string;
  characters: { name: string; avatar: string; role: string }[];
  steps: {
    id: string;
    speaker: string;
    text: string;
    translation?: string;
    translationsByLang?: Partial<Record<NativeLanguageCode, string>>;
    question?: {
      prompt: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    };
  }[];
}

// Detailed Lesson Schema for Full Pedagogy Engine
export interface VoiceProfile {
  voiceId: string;
  language: string;
  role: 'teacher' | 'dialogue' | 'secondary_teacher' | 'male_dialogue' | 'female_dialogue';
  name: string;
  description: string;
  provider: string;
  providerVoiceId: string;
  geminiVoiceName?: string;
  version: number;
  status: 'approved' | 'candidate' | 'deprecated';
  gender?: 'female' | 'male' | 'neutral';
  accent?: string;
  region?: string;
  speechStyle?: string;
}

export interface AudioManifestItem {
  audioId: string;
  lessonId: string;
  unitId: string;
  targetLanguage?: TargetLanguageCode;
  instructionLanguage?: InstructionLanguageCode;
  language: 'en' | 'es' | string;
  voiceId: string;
  characterId?: string;
  speakerRole?: 'teacher' | 'dialogue' | 'secondary_teacher';
  version: number;
  format: 'mp3' | 'wav' | 'aac';
  durationSeconds: number;
  sizeBytes: number;
  remotePath: string;
  status: 'published' | 'draft';
  slowAudioId?: string;
  text?: string;
}

export interface DownloadedAudioMeta {
  audioId: string;
  lessonId: string;
  unitId: string;
  version: number;
  sizeBytes: number;
  downloadedAt: number;
}

export interface AudioStorageStats {
  totalBytes: number;
  count: number;
  downloadedLessons: string[];
}

export interface VocabItem {
  id: string;
  targetLanguage?: TargetLanguageCode;
  word: string;                      // Word/phrase in target language
  script?: string;                   // Script e.g. Devanagari, Latin
  lemma?: string;                    // Lemma root
  phonetic: string;                  // Pronunciation guide e.g. /həˈloʊ/
  meaning: string;                   // Simple meaning in instruction language
  translationsByLang: Partial<Record<NativeLanguageCode, string>>; // Native translations (e.g. hi: 'नमस्ते')
  secondaryTranslations?: Partial<Record<SecondaryLanguageCode, string>>; // Secondary language translations (e.g. es: 'Hola')
  exampleSentence: string;           // Target language example sentence
  exampleTranslationByLang: Partial<Record<NativeLanguageCode, string>>;
  secondaryExampleTranslations?: Partial<Record<SecondaryLanguageCode, string>>;
  audioText: string;                 // Text for TTS
  audioId?: string;                  // Pre-generated hosted audio ID
  slowAudioId?: string;              // Slow pronunciation audio ID
  voiceId?: string;                  // Voice profile ID
  icon: string;                      // Context emoji or icon
  difficulty: 'A1 Beginner' | 'Elementary' | string;
}

export interface ExpressionItem {
  id: string;
  targetLanguage?: TargetLanguageCode;
  expression?: string;               // Target chunk e.g. "My name is ___."
  phrase?: string;                   // Alias for expression
  text?: string;
  meaning?: string;
  context?: string;
  difficulty?: string;
  translationsByLang: Partial<Record<NativeLanguageCode, string>>;
  secondaryTranslations?: Partial<Record<SecondaryLanguageCode, string>>;
  usageNote?: string;                // Context tip
  audioText?: string;
  audioId?: string;
  slowAudioId?: string;
  voiceId?: string;
  icon?: string;
}

export interface GrammarPattern {
  id?: string;
  title?: string;
  rule?: string;
  formula?: string;
  structure?: string;                 // e.g. "I + am + [information]"
  explanation?: string;
  explanationByLang?: Partial<Record<NativeLanguageCode, string>>;
  explanationsByLang?: Partial<Record<NativeLanguageCode, string>>;
  rulesByLang?: Partial<Record<NativeLanguageCode, string>>;
  examples: {
    english?: string;
    sentence?: string;
    translation?: string;
    translationByLang?: Partial<Record<NativeLanguageCode, string>>;
    secondaryTranslation?: Partial<Record<SecondaryLanguageCode, string>>;
    audioText?: string;
    audioId?: string;
    slowAudioId?: string;
  }[];
}

export interface CommonMistake {
  id: string;
  incorrect: string;
  correct: string;
  whyExplanation?: string;
  explanation?: string;              // Alias for whyExplanation
  explanationsByLang?: Partial<Record<NativeLanguageCode, string>>;
  explanationByLang?: Partial<Record<NativeLanguageCode, string>>; // Alias
  secondaryTranslation?: Partial<Record<SecondaryLanguageCode, string>>;
  audioId?: string;
}

export interface DialogueLine {
  id?: string;
  speaker?: string;
  speakerId?: string;
  speakerName?: string;
  characterId?: string;
  speakerVoiceId?: string;
  voiceId?: string;
  avatar?: string;
  text: string;
  isMissingResponse?: boolean;
  translation?: string;
  translationsByLang?: Partial<Record<NativeLanguageCode, string>>;
  translationByLang?: Partial<Record<NativeLanguageCode, string>>;
  secondaryTranslations?: Partial<Record<SecondaryLanguageCode, string>>;
  audioText?: string;
  audioId?: string;
  slowAudioId?: string;
}

export interface MiniDialogue {
  id: string;
  targetLanguage?: TargetLanguageCode;
  instructionLanguage?: InstructionLanguageCode;
  title: string;
  context: string;                   // Context e.g. "Two colleagues meeting at work"
  characters?: { id?: string; name: string; avatar?: string; role?: string }[] | string[];
  lines?: DialogueLine[];
  turns?: DialogueLine[];
}

export interface DetailedLessonData {
  id: string;
  unitId: string;
  targetLanguage?: TargetLanguageCode;
  instructionLanguage?: InstructionLanguageCode;
  title: string;
  cefr: CEFRLevel | string;
  icon: string;
  estimatedMinutes: number;
  learningObjective: {
    title: string;
    description: string;
    descriptionsByLang?: Partial<Record<NativeLanguageCode, string>>;
    canDoStatements: string[];
    canDoByLang?: Partial<Record<NativeLanguageCode, string[]>>;
  };
  vocabulary: VocabItem[];
  expressions: ExpressionItem[];
  grammar: {
    title?: string;
    concept?: string;
    conceptsByLang?: Partial<Record<NativeLanguageCode, string>>;
    verbBeExplanation?: {
      title: string;
      content: string;
      contractionsTable: { full: string; contracted: string; meaningByLang: Partial<Record<NativeLanguageCode, string>> }[];
    };
    patterns?: GrammarPattern[];
    [key: string]: any;
  };
  commonMistakes?: CommonMistake[];
  dialogues: MiniDialogue[];
  practiceExercises: Exercise[];     // Target 40-60 exercises covering all 12 types
  reviewExercises: Exercise[];       // Review exercises
  assessmentExercises: Exercise[];   // Final test exercises (10-15 items)
}

export type MasteryState = 'not_started' | 'learning' | 'practicing' | 'completed' | 'mastered';

export interface LessonProgressRecord {
  userId: string;
  lessonId: string;
  status: MasteryState;
  score: number;
  accuracyPercent: number;
  attemptsCount: number;
  timeSpentSeconds: number;
  lastAttemptDate: string;
  bestScore: number;
  weakExerciseTypes: ExtendedExerciseType[];
  vocabularyMasteredIds: string[];
  grammarPatternsMastered: string[];
}

export type LearningGoal =
  | 'everyday'
  | 'speaking'
  | 'work'
  | 'business'
  | 'travel'
  | 'interviews'
  | 'exams'
  | 'academic'
  | 'fluency';

export interface UserPreferences {
  dailyGoalMinutes: number;
  autoPlayAudio: boolean;
  audioSpeed: number; // 0.8 to 1.0
  notificationsEnabled: boolean;
  teacherVoicePreference?: 'female' | 'male'; // 'female' (EN_TEACHER_F_01) | 'male' (EN_TEACHER_M_01)
  accentPreference?: 'en-IN' | 'en-US' | 'en-GB';
}

// ============================================================================
// A1 COMPREHENSIVE CONSOLIDATION & A1 EXIT MASTERY TYPES (ITERATION 13.5)
// ============================================================================

export type A1MasteryState =
  | 'A1_NOT_STARTED'
  | 'A1_IN_PROGRESS'
  | 'A1_REVIEW_RECOMMENDED'
  | 'A1_READY_FOR_EXIT_TEST'
  | 'A1_ASSESSMENT_IN_PROGRESS'
  | 'A1_NOT_YET_MASTERED'
  | 'A1_REMEDIATION_REQUIRED'
  | 'A1_RETEST_READY'
  | 'A1_MASTERED'
  | 'A2_UNLOCKED';

export interface A1ExitAssessmentThresholdConfig {
  overallPassScorePercent: number;
  overallMasteryScorePercent: number;
  criticalSkillMinimums: Record<SkillTag, number>;
  remediationTriggerThresholdPercent: number;
  maxRetestAttemptsAllowed: number;
}

export interface A1AssessmentAttempt {
  id: string;
  formType: 'FORM_A' | 'FORM_B_RETEST';
  attemptNumber: number;
  cefrLevel: 'A1';
  totalScore: number;
  maxScore: number;
  scorePercent: number;
  passed: boolean;
  isMastered: boolean;
  failedCriticalSkills: SkillTag[];
  unmetThresholds: string[];
  attemptedAt: string;
  durationSeconds: number;
  skillBreakdown: Record<SkillTag, { correct: number; total: number; percent: number }>;
  weakQuestionIds: string[];
  identifiedWeaknesses: string[];
  recommendedReviewLessonIds: string[];
  answersLog: { exerciseId: string; isCorrect: boolean; userResponse?: any }[];
}

export interface A1RemediationQueueItem {
  conceptId: string;
  conceptTitle: string;
  skill: SkillTag;
  sourceLessonIds: string[];
  exercises: Exercise[];
  completed: boolean;
  accuracyPercent?: number;
}

export interface A1MasteryRecord {
  status: A1MasteryState;
  overallMasteryPercent: number;
  lessonsCompletedCount: number; // 0 to 90
  reviewSessionsCompleted: number;
  bestExitScorePercent?: number;
  assessmentPassed: boolean;
  isA2Unlocked: boolean;
  skillScores: Record<SkillTag, number>;
  weakConcepts: string[];
  weakGrammarCategories: string[];
  weakExerciseTypes: string[];
  remediationQueue: A1RemediationQueueItem[];
  remediationCompletedCount: number;
  masteryBadgeEarned: boolean;
  masteredAt?: string;
  lastEvaluatedAt: string;
}

// ============================================================================
// A2 COMPREHENSIVE CONSOLIDATION & A2 EXIT MASTERY TYPES (PHASE 8)
// ============================================================================

export type A2MasteryState =
  | 'A2_NOT_STARTED'
  | 'A2_IN_PROGRESS'
  | 'A2_REVIEW_RECOMMENDED'
  | 'A2_READY_FOR_EXIT_TEST'
  | 'A2_ASSESSMENT_IN_PROGRESS'
  | 'A2_NOT_YET_MASTERED'
  | 'A2_REMEDIATION_REQUIRED'
  | 'A2_RETEST_READY'
  | 'A2_MASTERED'
  | 'B1_UNLOCKED';

export interface A2ExitAssessmentThresholdConfig {
  overallPassScorePercent: number;
  overallMasteryScorePercent: number;
  criticalSkillMinimums: Record<SkillTag, number>;
  remediationTriggerThresholdPercent: number;
  maxRetestAttemptsAllowed: number;
}

export interface A2AssessmentAttempt {
  id: string;
  formType: 'FORM_A' | 'FORM_B_RETEST';
  attemptNumber: number;
  cefrLevel: 'A2';
  totalScore: number;
  maxScore: number;
  scorePercent: number;
  passed: boolean;
  isMastered: boolean;
  failedCriticalSkills: SkillTag[];
  unmetThresholds: string[];
  attemptedAt: string;
  durationSeconds: number;
  skillBreakdown: Record<SkillTag, { correct: number; total: number; percent: number }>;
  weakQuestionIds: string[];
  identifiedWeaknesses: string[];
  recommendedReviewLessonIds: string[];
  answersLog: { exerciseId: string; isCorrect: boolean; userResponse?: any }[];
}

export interface A2RemediationQueueItem {
  conceptId: string;
  conceptTitle: string;
  skill: SkillTag;
  sourceLessonIds: string[];
  exercises: Exercise[];
  completed: boolean;
  accuracyPercent?: number;
}

export interface A2MasteryRecord {
  status: A2MasteryState;
  overallMasteryPercent: number;
  lessonsCompletedCount: number; // 0 to 180 (Lessons 91 to 270)
  reviewSessionsCompleted: number;
  bestExitScorePercent?: number;
  assessmentPassed: boolean;
  isB1Unlocked: boolean;
  skillScores: Record<SkillTag, number>;
  weakConcepts: string[];
  weakGrammarCategories: string[];
  weakExerciseTypes: string[];
  remediationQueue: A2RemediationQueueItem[];
  remediationCompletedCount: number;
  masteryBadgeEarned: boolean;
  masteredAt?: string;
  lastEvaluatedAt: string;
}

export interface UserAcademyProfile {
  id: string;
  email: string;
  name: string;
  avatar: string;
  nativeLanguage: NativeLanguageCode;
  learningLanguage: TargetLanguageCode;
  instructionLanguage?: InstructionLanguageCode;
  learningMode?: LearningMode; // 'english_only' | 'english_plus_secondary'
  secondaryLanguage?: SecondaryLanguageCode | null; // e.g. 'es'
  currentCEFR: CEFRLevel | string;
  targetCEFRLevel?: CEFRLevel | string;
  learningGoal?: LearningGoal;
  streakDays: number;
  lastActiveDate: string;
  totalXp: number;
  gems: number;
  hearts: number;                   // Max 5 hearts (or unlimited if Pro)
  maxHearts: number;
  streakFreezeCount: number;
  subscriptionTier: SubscriptionTier;
  isPro: boolean;
  isGuest?: boolean;
  hasCompletedOnboarding?: boolean;
  createdAt?: string;
  lastLogin?: string;
  completedLessonIds: string[];
  lessonStars: Record<string, number>; // lessonId -> stars 1-3
  wordsMasteredCount: number;
  unlockedStoryIds: string[];
  leagueName: 'Bronze' | 'Silver' | 'Gold' | 'Sapphire' | 'Ruby' | 'Diamond';
  leagueRank: number;
  certificatesEarned: { cefr: CEFRLevel | string; date: string; certificateId: string }[];
  detailedLessonProgress?: Record<string, LessonProgressRecord>; // lessonId -> record
  preferences?: UserPreferences;
  // Role & Entitlement Architecture
  role?: UserRole;
  entitlement?: AccessEntitlement;
  isDeveloperTestMode?: boolean;
  learnerPreviewActive?: boolean;
  activeTestScenario?: TestScenarioPreset;
  // Multilingual Journeys Extension
  activeJourneyId?: string;
  learningJourneys?: LearningJourney[];
  // Unit Mastery & Consolidation Extension (Iteration 5G)
  unitMastery?: Record<string, UnitMasteryRecord>;
  unitAssessmentHistory?: Record<string, UnitAssessmentAttempt[]>;
  // A1 Comprehensive Exit Mastery Extension (Iteration 13.5)
  a1Mastery?: A1MasteryRecord;
  a1AssessmentHistory?: A1AssessmentAttempt[];
  // A2 Comprehensive Exit Mastery Extension (Phase 8)
  a2Mastery?: A2MasteryRecord;
  a2AssessmentHistory?: A2AssessmentAttempt[];
}

// ============================================================================
// UNIT CONSOLIDATION & MASTERY TYPES (ITERATION 5G)
// ============================================================================

export type UnitMasteryStatus =
  | 'not_started'
  | 'in_progress'
  | 'review_recommended'
  | 'ready_for_assessment'
  | 'assessment_attempted'
  | 'mastered';

export interface UnitMasteryRecord {
  unitId: string;
  status: UnitMasteryStatus;
  overallMasteryPercent: number;
  lessonsCompletedCount: number; // 0 to 15
  reviewSessionsCompleted: number;
  bestAssessmentScore?: number;
  assessmentPassed: boolean;
  skillScores: Record<SkillTag, number>; // 0 - 100 per skill domain
  weakConcepts: string[];
  weakGrammarCategories: string[];
  weakExerciseTypes: string[];
  masteryBadgeEarned: boolean;
  masteredAt?: string;
  lastEvaluatedAt: string;
}

export interface UnitAssessmentAttempt {
  id: string;
  unitId: string;
  cefrLevel: CEFRLevel;
  totalScore: number;
  maxScore: number;
  scorePercent: number;
  passed: boolean;
  attemptedAt: string;
  durationSeconds: number;
  skillBreakdown: Record<SkillTag, { correct: number; total: number; percent: number }>;
  weakQuestionIds: string[];
  identifiedWeaknesses: string[];
  answersLog: { exerciseId: string; isCorrect: boolean; userResponse?: any }[];
}

export interface UnitKnowledgeGraphConcept {
  id: string;
  unitId: string;
  title: string;
  category: 'grammar' | 'vocabulary' | 'chunk' | 'communicative_function';
  cefr: CEFRLevel;
  introducedInLesson: string;
  practicedInLessons: string[];
  retrievedInLessons: string[];
  recycledInLessons: string[];
  assessedInLessons: string[];
  keyFormula?: string;
  coreRuleSummary: string;
  exampleSentences: string[];
  commonMistakes: string[];
  skillDomains: SkillTag[];
}

export type UnitReviewDomainId =
  | 'vocab_retrieval'
  | 'grammar_retrieval'
  | 'sentence_construction'
  | 'listening_retrieval'
  | 'speaking_retrieval'
  | 'reading_retrieval'
  | 'writing_retrieval'
  | 'communicative_functions'
  | 'error_correction'
  | 'mixed_interleaving';

export interface UnitReviewDomainDefinition {
  id: UnitReviewDomainId;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  targetSkills: SkillTag[];
  difficultyProgression: ('recognition' | 'recall' | 'constrained_production' | 'guided_production' | 'independent_production')[];
  exerciseCount: number;
}


// ============================================================================
// MASTER CURRICULUM BLUEPRINT & AGILE ROADMAP TYPES (ITERATION 4 FOUNDATION)
// ============================================================================

export type VocabularyStage =
  | 'exposure'
  | 'meaning'
  | 'pronunciation'
  | 'recognition'
  | 'recall'
  | 'spelling'
  | 'contextual_use'
  | 'sentence_construction'
  | 'retrieval'
  | 'spaced_review'
  | 'productive_use';

export interface VocabBlueprintItem {
  id: string;
  targetLanguage?: TargetLanguageCode;
  word: string;
  script?: string;
  lemma?: string;
  cefr: CEFRLevel | string;
  unitId: string;
  introductionLessonId: string;
  category: LexicalCategoryTag;
  phonetic: string;
  meaning: string;
  wordFamily?: string[];
  collocations?: string[];
  lexicalChunks?: string[];
  commonErrors?: string[];
  recyclingSchedule: {
    reviewLessonIds: string[];
    reviewUnitIds: string[];
    assessmentIds: string[];
  };
  stagesSupported: VocabularyStage[];
}

export interface GrammarProgressionItem {
  id: string;
  targetLanguage?: TargetLanguageCode;
  topic: string;
  cefr: CEFRLevel | string;
  unitId: string;
  introductionLessonId: string;
  category: GrammarCategoryTag | string;
  structure: string;
  explanation: string;
  sentencePatterns?: string[];
  controlledPracticeRequirement?: string;
  guidedProductionRequirement?: string;
  independentProductionRequirement?: string;
  commonErrors: string[];
  prerequisites: string[];
  recyclingSchedule: {
    reviewLessonIds: string[];
    unitReviewId: string[];
    progressCheckId: string;
  };
}

export interface SentenceConstructionStage {
  stageNumber: number;
  stageName: string; // e.g., '1. Single Words', '2. Phrases', '3. Fixed Chunks', '4. Simple SVO', '5. Questions', '6. Negatives', '7. Coordinated Sentences', '8. Short Connected Speech'
  description: string;
  targetCefr: CEFRLevel;
  examplePatterns: string[];
  grammaticalFocus: string[];
}

export interface CommunicativeFunctionItem {
  id: string;
  functionName: string;
  cefr: CEFRLevel;
  unitId: string;
  targetSituations: string[];
  keyPhrases: string[];
  grammarRequired: string[];
  vocabularyRequired: string[];
}

export interface RecyclingRule {
  ruleId: string;
  stage: 'lesson_review' | 'unit_review' | 'cefr_progress' | 'cefr_final';
  triggerInterval: string;
  description: string;
  targetRetentionPercent: number;
}

export interface WordPressIntegrationMeta {
  wpPostType: 'course' | 'lesson' | 'resource' | 'quiz' | 'tutor_profile';
  wpSlug: string;
  wpTaxonomies: {
    cefrLevel: string;
    topicCategory: string;
    skillDomain: string;
  };
  accessLevel: 'free' | 'pro_monthly' | 'pro_annual' | 'tutoring_addon';
  downloadableAssetTypes: ('pdf_summary' | 'audio_pack' | 'worksheet' | 'vocabulary_flashcards')[];
  syncStatus: 'draft_schema' | 'synced' | 'pending_wp_push';
}

export interface AgileRoadmapIteration {
  iterationNumber: number;
  epicName: string;
  goal: string;
  dependencies: string[];
  affectedFiles: string[];
  expectedDeliverable: string;
  qaRequirements: string[];
  definitionOfDone: string[];
  status: 'COMPLETE' | 'IN_PROGRESS' | 'PLANNED' | 'BLOCKED';
}

export interface UnitScopeDefinition {
  unitId: string;
  targetLanguage?: TargetLanguageCode;
  unitNumber: number;
  title: string;
  communicativePurpose: string;
  realWorldSituations: string[];
  prerequisiteKnowledge: string[];
  grammarIntroduced: string[];
  grammarRecycled: string[];
  vocabularyDomains: string[];
  lexicalChunks: string[];
  collocations: string[];
  sentencePatterns: string[];
  pronunciationTargets: string[];
  listeningTargets: string[];
  speakingTargets: string[];
  readingTargets: string[];
  writingTargets: string[];
  interactionTargets: string[];
  mediationTargets: string[];
  commonLearnerErrors: string[];
  canDoOutcomes: string[];
  unitAssessmentFocus: string;
  conceptsRecycledFromPrevious: string[];
  conceptsPreparingForNext: string[];
}

export interface VocabDomainDefinition {
  domainId: string;
  domainName: string;
  purpose: string;
  approximateRange: string;
  priority: 'P0' | 'P1' | 'P2';
  prerequisiteDomains: string[];
  collocationOpportunities: string[];
  lexicalChunkOpportunities: string[];
  wordFamilyOpportunities: string[];
  communicativeFunctions: string[];
  firstIntroductionUnit: string;
  recyclingUnits: string[];
  assessmentPoints: string[];
}

export interface CollocationProgressionItem {
  id: string;
  type: 'verb_noun' | 'verb_prep' | 'adj_noun' | 'adj_prep' | 'adv_adj' | 'functional_chunk';
  combination: string;
  examples: string[];
  introductionUnit: string;
  practiceStage: string;
  recyclingUnits: string[];
  productiveUse: string;
  assessmentPoint: string;
}

export interface LexicalChunkScheduleItem {
  id: string;
  category:
    | 'greetings'
    | 'introductions'
    | 'personal_info'
    | 'questions'
    | 'asking_repetition'
    | 'checking_understanding'
    | 'polite_requests'
    | 'shopping'
    | 'food'
    | 'directions'
    | 'time'
    | 'social_interaction'
    | 'work_study'
    | 'arrangements'
    | 'closing';
  chunk: string;
  meaningFunction: string;
  introductionUnit: string;
  practice: string;
  recyclingUnits: string[];
  assessment: string;
}

export interface PronunciationProgressionItem {
  id: string;
  focusArea:
    | 'sound_awareness'
    | 'difficult_sounds'
    | 'word_stress'
    | 'sentence_stress'
    | 'contractions'
    | 'plural_endings'
    | 'third_person_endings'
    | 'connected_speech'
    | 'intonation';
  description: string;
  phoneticTarget: string;
  introductionUnit: string;
  recycledInUnits: string[];
  targetOutput: string;
}

export interface ListeningLadderItem {
  stepNumber: number;
  level: 'words' | 'phrases' | 'sentences' | 'short_exchanges' | 'short_dialogues' | 'short_connected_speech';
  unitMapping: string;
  speedWPM: number;
  speakerVariation: string;
  contextAndReducedForms: string;
  distractorsAndComplexity: string;
  taskType: string;
}

export interface SpeakingLadderItem {
  stepNumber: number;
  level:
    | 'repeat'
    | 'substitution'
    | 'controlled_response'
    | 'guided_sentence'
    | 'personal_answer'
    | 'short_exchange'
    | 'role_play'
    | 'short_independent_speech';
  unitMapping: string;
  independenceDegree: string;
  promptStyle: string;
  targetOutputLength: string;
}

export interface ReadingLadderItem {
  stepNumber: number;
  level:
    | 'words'
    | 'labels'
    | 'sentences'
    | 'short_messages'
    | 'forms'
    | 'notices'
    | 'simple_everyday_texts'
    | 'short_connected_passages';
  unitMapping: string;
  textComplexity: string;
  vocabLoad: string;
  targetTask: string;
}

export interface WritingLadderItem {
  stepNumber: number;
  level:
    | 'spelling'
    | 'forms'
    | 'words_phrases'
    | 'simple_sentences'
    | 'short_messages'
    | 'short_descriptions'
    | 'short_connected_text';
  unitMapping: string;
  accuracyExpectation: string;
  independenceExpectation: string;
  taskExample: string;
}

export interface InteractionProgressionItem {
  id: string;
  situation: string;
  unitMapping: string;
  initiatingLanguage: string;
  respondingLanguage: string;
  clarificationStrategy: string;
  closingLanguage: string;
}

export interface MediationProgressionItem {
  id: string;
  mediationType:
    | 'passing_info'
    | 'understanding_instructions'
    | 'conveying_personal_info'
    | 'explaining_basic_words'
    | 'helping_understand_simple_messages';
  unitMapping: string;
  taskDescription: string;
  supportMechanism: string;
}

export interface A1ExitProfile {
  knowledge: {
    grammar: string[];
    vocabulary: string[];
    sentenceStructures: string[];
  };
  controlledPerformance: {
    listening: string[];
    speaking: string[];
    reading: string[];
    writing: string[];
  };
  independentPerformance: {
    interaction: string[];
    mediation: string[];
    functionalCommunication: string[];
  };
}

export interface A1ToA2BridgeItem {
  domain:
    | 'grammar'
    | 'vocabulary'
    | 'sentence_complexity'
    | 'collocations'
    | 'listening'
    | 'speaking'
    | 'reading'
    | 'writing'
    | 'interaction'
    | 'mediation'
    | 'pronunciation';
  a1Capability: string;
  a2Expansion: string;
  bridgeStrategy: string;
}

export interface MasterCurriculumBlueprint {
  version: string;
  programTitle: string;
  levelsSupported: CEFRLevel[];
  primaryActiveLevels: CEFRLevel[];
  unitScopes: UnitScopeDefinition[];
  sentenceProgression: SentenceConstructionStage[];
  grammarProgression: GrammarProgressionItem[];
  vocabularySystem: VocabBlueprintItem[];
  vocabularyDomains: VocabDomainDefinition[];
  collocationProgression: CollocationProgressionItem[];
  lexicalChunkSchedule: LexicalChunkScheduleItem[];
  pronunciationProgression: PronunciationProgressionItem[];
  listeningLadder: ListeningLadderItem[];
  speakingLadder: SpeakingLadderItem[];
  readingLadder: ReadingLadderItem[];
  writingLadder: WritingLadderItem[];
  interactionProgression: InteractionProgressionItem[];
  mediationProgression: MediationProgressionItem[];
  a1ExitProfile: A1ExitProfile;
  a1ToA2Bridge: A1ToA2BridgeItem[];
  communicativeFunctions: CommunicativeFunctionItem[];
  recyclingRules: RecyclingRule[];
  wordPressSchema: WordPressIntegrationMeta[];
  agileRoadmap: AgileRoadmapIteration[];
}

export interface AdminCurriculumSummary {
  programName: string;
  activeCEFRLevels: CEFRLevel[];
  totalUnitsPlanned: number;
  totalLessonsBuilt: number;
  totalGrammarPointsCount: number;
  totalVocabItemsCount: number;
  totalCommunicativeFunctionsCount: number;
  recyclingCoveragePercent: number;
  audioProductionReadyCount: number;
  audioMissingCount: number;
  currentActiveIteration: number;
  releaseReadinessStatus: 'STAGING_ALPHA' | 'BETA_READY' | 'PRODUCTION_STABLE';
}

// ============================================================================
// ITERATION 5A: LESSON CONTENT FACTORY ARCHITECTURE MODELS & CONTRACTS
// ============================================================================

export type AllocationType =
  | 'INTRODUCTION'
  | 'RECYCLING'
  | 'INTEGRATION'
  | 'ASSESSMENT'
  | 'EXPANSION'
  | 'CONSOLIDATION';

export type CognitiveDifficultyLevel =
  | 'RECOGNITION'
  | 'CONTROLLED'
  | 'GUIDED'
  | 'TRANSFORMATION'
  | 'PRODUCTION'
  | 'INTEGRATION';

export type StandardStageType =
  | 'GOALS'
  | 'WARM_UP'
  | 'VOCABULARY'
  | 'LEXICAL_CHUNKS'
  | 'GRAMMAR_DISCOVERY'
  | 'GRAMMAR_EXPLANATION'
  | 'COMMON_ERRORS'
  | 'CONTROLLED_PRACTICE'
  | 'LISTENING'
  | 'QUESTION_FORMATION'
  | 'DIALOGUE'
  | 'SPEAKING'
  | 'MEDIATION'
  | 'INTERLEAVED_PRACTICE'
  | 'RETRIEVAL'
  | 'REVIEW'
  | 'LESSON_ASSESSMENT'
  | 'MASTERY_REWARD';

export interface VocabularyLearningContract {
  wordId: string;
  word: string;
  phasesRequired: Array<
    | 'exposure'
    | 'meaning'
    | 'pronunciation'
    | 'recognition'
    | 'recall'
    | 'spelling'
    | 'contextual_use'
    | 'sentence_construction'
    | 'retrieval'
    | 'spaced_review'
    | 'productive_use'
  >;
  isRecycled: boolean;
}

export interface GrammarTeachingContract {
  grammarId: string;
  topic: string;
  knowledgeVsUseBalance: {
    knowledgeWeightPercent: number; // e.g. 30% theory
    useWeightPercent: number; // e.g. 70% practice
  };
  phasesRequired: Array<
    | 'discovery'
    | 'explanation'
    | 'pattern_recognition'
    | 'controlled_practice'
    | 'guided_production'
    | 'independent_production'
    | 'error_correction'
    | 'recycling'
    | 'assessment'
  >;
  isRecycled: boolean;
}

export interface SkillTargetMap {
  listening: string[];
  speaking: string[];
  reading: string[];
  writing: string[];
  interaction: string[];
  mediation: string[];
  pronunciation: string[];
  grammar: string[];
  vocabulary: string[];
}

export interface LessonAudioRequirementContract {
  audioId: string;
  targetLanguage?: TargetLanguageCode;
  instructionLanguage?: InstructionLanguageCode;
  text: string;
  speakerRole: 'narrator' | 'tutor' | 'character_a' | 'character_b' | 'system';
  characterId?: string;
  speakerVoiceId?: string;
  priority: 'P0_CRITICAL' | 'P1_HIGH' | 'P2_ENHANCEMENT';
  status: 'MISSING' | 'GENERATED' | 'HUMAN_VERIFIED' | 'STAGING';
  slowVersionRequired: boolean;
  sourceStage: StandardStageType;
}

export interface LessonAssessmentScopeContract {
  assessmentLevel: 'LESSON' | 'UNIT_REVIEW' | 'A1_PROGRESS' | 'A1_FINAL';
  masteryObjectives: string[];
  minimumPassScorePercent: number;
  questionCount: number;
  remedialTriggerThresholdPercent: number;
}

export interface LessonRecyclingContract {
  introducedConcepts: string[];
  recycledConcepts: string[];
  integratedConcepts: string[];
  assessedConcepts: string[];
  linkedPreviousLessonIds: string[];
  linkedPreviousUnitIds: string[];
}

export interface PedagogicalBalanceMeta {
  newVsRecycledRatio: {
    newVocabularyCount: number;
    recycledVocabularyCount: number;
    newGrammarCount: number;
    recycledGrammarCount: number;
    newSentencePatternCount: number;
    recycledSentencePatternCount: number;
    newCommunicativeFunctionCount: number;
    recycledCommunicativeFunctionCount: number;
  };
  cognitiveProgressionSpan: CognitiveDifficultyLevel[];
  estimatedCompletionTimeMinutes: number;
}

export interface LessonAllocation {
  allocationId: string;
  unitId: string;
  targetLanguage?: TargetLanguageCode;
  instructionLanguage?: InstructionLanguageCode;
  unitNumber: number;
  lessonNumber: number;
  cefrLevel: CEFRLevel | string;
  lessonTitle: string;
  communicativeGoal: string;
  allocationType: AllocationType;
  assignedGrammarIds: string[];
  assignedVocabDomains: string[];
  assignedSentencePatterns: string[];
  assignedLexicalChunks: string[];
  assignedCollocations: string[];
  assignedPronunciationTargets: string[];
  prerequisiteConcepts: string[];
  recyclingRequirements: string[];
}

export interface StageBlueprintTemplate {
  stageNumber: number;
  stageType: StandardStageType;
  stageTitle: string;
  pedagogicalObjective: string;
  estimatedTimeMinutes: number;
  requiredSkills: Array<'listening' | 'speaking' | 'reading' | 'writing' | 'interaction' | 'mediation'>;
  expectedExerciseCount: number;
}

export interface ExerciseBlueprint {
  exerciseBlueprintId: string;
  lessonId: string;
  targetLanguage?: TargetLanguageCode;
  instructionLanguage?: InstructionLanguageCode;
  stageNumber: number;
  stageType: StandardStageType;
  learningObjective: string;
  skill: 'listening' | 'speaking' | 'reading' | 'writing' | 'interaction' | 'mediation' | 'grammar' | 'vocabulary';
  grammarTarget?: string;
  vocabularyTarget?: string;
  difficulty: CognitiveDifficultyLevel;
  exerciseType: ExerciseType | ExtendedExerciseType;
  isRecycled: boolean;
  answerKeySpec: string;
  explanationRequirement: string;
  audioRequirement?: LessonAudioRequirementContract;
  assessmentRelevance: boolean;
}

export interface LessonBlueprint {
  blueprintId: string;
  lessonId: string;
  unitId: string;
  targetLanguage?: TargetLanguageCode;
  instructionLanguage?: InstructionLanguageCode;
  unitNumber: number;
  lessonNumber: number;
  cefrLevel: CEFRLevel | string;
  lessonTitle: string;
  lessonPurpose: string;
  prerequisiteConcepts: string[];
  newGrammar: string[];
  recycledGrammar: string[];
  newVocabularyDomains: string[];
  recycledVocabulary: string[];
  lexicalChunks: string[];
  collocations: string[];
  sentencePatterns: string[];
  communicativeFunctions: string[];
  pronunciationTargets: string[];
  skillTargets: SkillTargetMap;
  commonLearnerErrors: string[];
  canDoOutcomes: string[];
  pedagogicalBalance: PedagogicalBalanceMeta;
  vocabularyContracts: VocabularyLearningContract[];
  grammarContracts: GrammarTeachingContract[];
  stageTemplates: StageBlueprintTemplate[];
  exerciseBlueprints: ExerciseBlueprint[];
  assessmentScope: LessonAssessmentScopeContract;
  audioRequirements: LessonAudioRequirementContract[];
  recyclingRequirements: LessonRecyclingContract;
  wordpressSlug: string;
}

export interface ContentGenerationContract {
  contractId: string;
  targetLanguage?: TargetLanguageCode;
  instructionLanguage?: InstructionLanguageCode;
  approvedLessonBlueprint: LessonBlueprint;
  unitScope: UnitScopeDefinition;
  learnerCEFRLevel: CEFRLevel | string;
  prerequisiteConcepts: string[];
  newConcepts: string[];
  recycledConcepts: string[];
  vocabularyAllocation: string[];
  grammarAllocation: string[];
  skillTargets: SkillTargetMap;
  communicativeFunctions: string[];
  assessmentRequirements: LessonAssessmentScopeContract;
  audioRequirements: LessonAudioRequirementContract[];
  status: 'VALID' | 'MISSING_CURRICULUM_ALLOCATION';
  missingAllocations: string[];
}

export type QualityGateCheckStatus = 'PASS' | 'WARN' | 'FAIL' | 'MISSING_ALLOCATION';

export interface QualityGateResultItem {
  checkName:
    | 'CURRICULUM_ALIGNMENT'
    | 'PREREQUISITES'
    | 'NEW_RECYCLED_BALANCE'
    | 'GRAMMAR_ALLOCATION'
    | 'VOCABULARY_ALLOCATION'
    | 'SKILL_COVERAGE'
    | 'SENTENCE_CONSTRUCTION'
    | 'COMMUNICATIVE_PURPOSE'
    | 'ASSESSMENT_ALIGNMENT'
    | 'AUDIO_REQUIREMENTS'
    | 'RECYCLING_REQUIREMENTS';
  status: QualityGateCheckStatus;
  message: string;
  details?: string[];
}

export interface LessonValidationReport {
  lessonId: string;
  isValid: boolean;
  scorePercent: number;
  checks: QualityGateResultItem[];
  missingAllocations: string[];
  validatedAt: string;
}

export type ContentFactoryPipelineStage =
  | 'MASTER_CURRICULUM'
  | 'UNIT_SCOPE'
  | 'LESSON_ALLOCATION'
  | 'LESSON_BLUEPRINT'
  | 'BLUEPRINT_VALIDATION'
  | 'CONTENT_GENERATION'
  | 'EXERCISE_GENERATION'
  | 'AUDIO_INVENTORY'
  | 'CONTENT_QA'
  | 'AUDIO_QA'
  | 'BUILD'
  | 'LIVE_LESSON_TEST'
  | 'APPROVED_LESSON';

export interface PipelineStageInfo {
  stage: ContentFactoryPipelineStage;
  label: string;
  description: string;
  status: 'COMPLETE' | 'ACTIVE_ARCH' | 'PLANNED';
}

export * from './types/conversation';


