import type { NativeLanguageCode } from '../types';

export type ConversationState =
  | 'CATALOG'
  | 'INTRO'
  | 'TEACH'
  | 'EXAMPLES'
  | 'CONTROLLED_PRACTICE'
  | 'SENTENCE_CONSTRUCTION'
  | 'CONVERSATION_RUNNER'
  | 'FEEDBACK'
  | 'RETRY_PRACTICE'
  | 'RETRY_SPEAKING'
  | 'MASTERED'
  | 'SUMMARY';

export interface ConversationVocabularyItem {
  word: string;
  ipa: string;
  partOfSpeech: string;
  meaning: string;
  exampleSentence: string;
  audioKey?: string;
  translations?: Record<string, string>;
}

export interface ConversationChunkItem {
  phrase: string;
  functionCategory: string;
  exampleSentence: string;
  audioKey?: string;
  translations?: Record<string, string>;
}

export interface GrammarContrastExample {
  incorrect: string;
  correct: string;
  explanation: string;
}

export interface ConversationGrammarBreakdown {
  title: string;
  conceptExplanation: string;
  patternFormula: string;
  contrastExamples: GrammarContrastExample[];
}

export interface DialogueExampleTurn {
  speaker: string;
  text: string;
  audioKey?: string;
  translation: string;
}

export interface ControlledPracticeTask {
  id: string;
  type: 'fill_blank' | 'multiple_choice' | 'chunk_order';
  prompt: string;
  options?: { id: string; text: string; isCorrect: boolean }[];
  correctAnswer: string;
  explanation: string;
}

export interface SentenceConstructionTask {
  id: string;
  prompt: string;
  scenarioContext: string;
  targetStructure: string;
  wordBank: string[];
  acceptableSolutions: string[];
  explanation: string;
}

export interface SuggestedResponsePattern {
  label: string;
  text: string;
  scaffoldingLevel: 'high' | 'medium' | 'low';
}

export interface ConceptGroup {
  name: string;
  patterns: string[];
  required: boolean;
}

export interface CommonErrorRule {
  id: string;
  pattern: RegExp | string;
  errorType: 'grammar' | 'vocabulary' | 'structure' | 'interaction';
  message: string;
  correctionPattern: string;
}

export interface ConversationTurn {
  id: string;
  turnIndex: number;
  partnerPrompt: string;
  partnerAudioText?: string;
  partnerAudioKey?: string;
  partnerQuestionHindi?: string;
  expectedFunction: string;
  contextGoal: string;
  targetVocabulary: string[];
  suggestedResponses: SuggestedResponsePattern[];
  acceptableConceptGroups: ConceptGroup[];
  commonMistakeRules: CommonErrorRule[];
  remediationPractice: ControlledPracticeTask;
}

export interface ConversationCharacter {
  id: string;
  name: string;
  role: string;
  avatar: string;
  voiceGender: 'male' | 'female';
}

export interface ConversationMasteryCriteria {
  minOverallScore: number;
  minTurnsPassed: number;
  maxGrammarErrorsAllowed: number;
  targetVocabularyCoveragePct: number;
}

export interface ConversationDefinition {
  id: string;
  title: string;
  cefr: 'A1' | 'A2';
  unitId?: string;
  lessonLinks: string[];
  estimatedMinutes: number;
  scenario: string;
  communicativeGoals: string[];
  canDoStatements: string[];
  characters: ConversationCharacter[];
  teach: {
    keyVocabulary: ConversationVocabularyItem[];
    usefulChunks: ConversationChunkItem[];
    grammar: ConversationGrammarBreakdown;
    dialogueExamples: DialogueExampleTurn[];
  };
  controlledPractice: ControlledPracticeTask[];
  sentenceConstruction: SentenceConstructionTask[];
  turns: ConversationTurn[];
  masteryCriteria: ConversationMasteryCriteria;
}

export interface EvaluationCategoryFeedback {
  category: 'communication' | 'grammar' | 'vocabulary' | 'interaction';
  status: 'pass' | 'partial' | 'warn' | 'fail';
  message: string;
  details?: string;
}

export interface TurnEvaluationResult {
  turnId: string;
  rawTranscript: string;
  normalizedTranscript: string;
  overallSuccess: boolean;
  communicationScore: number;
  grammarScore: number;
  vocabularyScore: number;
  interactionScore: number;
  matchedVocab: string[];
  matchedConcepts: string[];
  missingConcepts: string[];
  detectedErrors: {
    ruleId: string;
    message: string;
    correction: string;
  }[];
  feedback: {
    communication: EvaluationCategoryFeedback;
    grammar: EvaluationCategoryFeedback;
    vocabulary: EvaluationCategoryFeedback;
    interaction: EvaluationCategoryFeedback;
  };
  requiresRetry: boolean;
  remediationTask?: ControlledPracticeTask;
}

export interface ConversationAttemptSummary {
  attemptId: string;
  conversationId: string;
  timestamp: number;
  cefr: 'A1' | 'A2';
  durationSeconds: number;
  turnsCompleted: number;
  totalTurns: number;
  communicationScore: number;
  grammarScore: number;
  vocabularyScore: number;
  overallScore: number;
  totalWordsProduced: number;
  targetVocabularyCount: number;
  isMastered: boolean;
  turnResults: TurnEvaluationResult[];
}

export interface ConversationProgressRecord {
  conversationId: string;
  attemptsCount: number;
  bestScore: number;
  isMastered: boolean;
  firstCompletedAt?: number;
  lastCompletedAt?: number;
  latestAttempt?: ConversationAttemptSummary;
  firstAttempt?: ConversationAttemptSummary;
}

export interface SpeechRecognitionResult {
  transcript: string;
  confidence: number;
  isFinal: boolean;
}

export interface SpeechError {
  code: 'no_speech' | 'permission_denied' | 'network' | 'not_supported' | 'device_offline';
  message: string;
}

export interface ISpeechRecognitionProvider {
  isAvailable(): Promise<boolean>;
  start(config?: { language?: string; interimResults?: boolean }): Promise<void>;
  stop(): Promise<void>;
  onResult(callback: (result: SpeechRecognitionResult) => void): void;
  onError(callback: (error: SpeechError) => void): void;
  onEnd(callback: () => void): void;
}
