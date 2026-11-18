// Canonical Exercise Registry & Answer Evaluation Engine
// Curiosity English Academy - Architecture & Hardening Layer

import { Exercise, ExerciseOption } from '../types';
import { validateAnswer, calculateSpeechMatch, normalizeText, expandContractions } from '../utils/answerValidation';

export type CanonicalExerciseType =
  | 'recognition'
  | 'multiple_choice'
  | 'fill_blank'
  | 'word_ordering'
  | 'sentence_construction'
  | 'translation'
  | 'listening'
  | 'listen_and_type'
  | 'error_correction'
  | 'dialogue_completion'
  | 'speaking'
  | 'personal_production'
  | 'match_pairs';

export interface ExerciseUserResponse {
  selectedOptionId?: string | null;
  typedAnswer?: string;
  constructedWords?: string[];
  spokenText?: string;
  matchedPairs?: { leftId: string; rightId: string }[] | string[];
  personalProduction?: {
    name?: string;
    country?: string;
    city?: string;
    [key: string]: any;
  };
}

export interface ExerciseEvaluationResult {
  isCorrect: boolean;
  scoreXp: number;
  matchedAnswer: string;
  correctAnswerDisplay: string;
  explanation: string;
  feedbackMessage?: string;
}

export type ExerciseEvaluator = (
  exercise: Exercise,
  response: ExerciseUserResponse
) => ExerciseEvaluationResult;

/**
 * Maps any legacy or alias exercise type to its canonical type string.
 */
export function normalizeExerciseType(type: string): CanonicalExerciseType {
  if (!type) return 'multiple_choice';

  const clean = type.trim().toLowerCase();
  switch (clean) {
    case 'sentence_ordering':
    case 'question_formation':
    case 'reorder':
    case 'word_order':
      return 'word_ordering';
    case 'fill_in_blank':
    case 'fill_in_the_blank':
      return 'fill_blank';
    case 'listen_type':
    case 'listening_type':
    case 'dictation':
      return 'listen_and_type';
    case 'speak_sentence':
    case 'pronunciation':
    case 'speech':
      return 'speaking';
    case 'translate_tiles':
    case 'translate_type':
      return 'translation';
    case 'picture_choice':
    case 'vocab_recognition':
      return 'recognition';
    case 'grammar_spotter':
    case 'grammar_error':
      return 'error_correction';
    case 'dialogue_story':
    case 'dialogue_practice':
      return 'dialogue_completion';
    case 'matching':
    case 'match_pairs':
    case 'pair_matching':
      return 'match_pairs';
    case 'reading':
    case 'reading_comprehension':
      return 'multiple_choice';
    case 'mediation':
      return 'multiple_choice';
    case 'writing':
    case 'short_writing':
      return 'translation';
    default:
      return clean as CanonicalExerciseType;
  }
}

/**
 * Helper to derive target sentence from words & correctOrder arrays
 */
function deriveSentenceFromWordsAndOrder(exercise: any): string {
  if (Array.isArray(exercise.correctOrder) && exercise.correctOrder.length > 0) {
    if (typeof exercise.correctOrder[0] === 'number' && Array.isArray(exercise.words)) {
      return exercise.correctOrder.map((idx: number) => exercise.words[idx]).filter(Boolean).join(' ');
    }
    if (typeof exercise.correctOrder[0] === 'string') {
      return exercise.correctOrder.join(' ');
    }
  }
  if (Array.isArray(exercise.words) && exercise.words.length > 0 && !exercise.targetSentence) {
    return exercise.words.join(' ');
  }
  return '';
}

/**
 * Normalizes an Exercise object, ensuring its type is canonical
 * and guaranteeing consistent defaults.
 */
export function normalizeExercise(exercise: Exercise): Exercise {
  const canonicalType = normalizeExerciseType(exercise.type);
  const anyEx = exercise as any;

  // Derive target sentence from targetText, textToSpeak, words & correctOrder if missing
  let derivedTargetSentence = exercise.targetSentence || anyEx.targetText || anyEx.textToSpeak;
  if (!derivedTargetSentence || derivedTargetSentence.trim() === '') {
    const derived = deriveSentenceFromWordsAndOrder(anyEx);
    if (derived) {
      derivedTargetSentence = derived;
    }
  }

  // Derive wordBank from words array if missing
  let derivedWordBank = exercise.wordBank;
  if ((!derivedWordBank || derivedWordBank.length === 0) && Array.isArray(anyEx.words)) {
    derivedWordBank = [...anyEx.words];
  }

  return {
    ...exercise,
    rawType: exercise.rawType || exercise.type,
    type: canonicalType,
    targetSentence: derivedTargetSentence,
    wordBank: derivedWordBank,
  };
}

/**
 * Normalizes an array of Exercise objects.
 */
export function normalizeExercises(exercises: Exercise[]): Exercise[] {
  return exercises.map(normalizeExercise);
}

/**
 * Gets a clean display string of the correct answer for any exercise (Always English).
 */
export function getCorrectAnswerDisplay(exercise: Exercise): string {
  let ans = '';

  if (exercise.options && exercise.options.length > 0) {
    const correctOpt = exercise.options.find((o) => o.isCorrect);
    if (correctOpt) ans = correctOpt.text;
  }
  if (!ans && Array.isArray(exercise.correctAnswer) && exercise.correctAnswer.length > 0) {
    ans = exercise.correctAnswer[0];
  }
  if (!ans && typeof exercise.correctAnswer === 'string' && exercise.correctAnswer.trim()) {
    ans = exercise.correctAnswer.trim();
  }
  if (!ans && exercise.targetSentence && exercise.targetSentence.trim()) {
    ans = exercise.targetSentence.trim();
  }
  if (!ans) {
    ans = deriveSentenceFromWordsAndOrder(exercise as any);
  }

  // FIX 4: If ans contains Hindi script, convert to English target sentence
  if (/[\u0900-\u097F]/.test(ans)) {
    if (exercise.targetSentence && !/[\u0900-\u097F]/.test(exercise.targetSentence)) {
      return exercise.targetSentence.trim();
    }
    if (exercise.sourceSentence && !/[\u0900-\u097F]/.test(exercise.sourceSentence)) {
      return exercise.sourceSentence.trim();
    }
  }

  return ans;
}

/**
 * Evaluates multiple choice / recognition / dialogue completion / error correction exercises.
 */
export const evaluateOptionBasedExercise: ExerciseEvaluator = (exercise, response) => {
  const correctOpt = exercise.options?.find((o) => o.isCorrect);
  const selectedOpt = exercise.options?.find((o) => o.id === response.selectedOptionId);
  
  let isCorrect = false;
  let matchedAnswer = '';

  if (selectedOpt) {
    if (selectedOpt.isCorrect) {
      isCorrect = true;
      matchedAnswer = selectedOpt.text;
    } else if (exercise.correctAnswer) {
      // Fallback: Check if selected option text matches acceptable correctAnswer
      const val = validateAnswer(selectedOpt.text, exercise.correctAnswer);
      if (val.isCorrect) {
        isCorrect = true;
        matchedAnswer = val.matchedAnswer;
      }
    }
  } else if (response.typedAnswer) {
    const target = exercise.targetSentence || exercise.correctAnswer || correctOpt?.text;
    if (target) {
      const val = validateAnswer(response.typedAnswer, target);
      if (val.isCorrect) {
        isCorrect = true;
        matchedAnswer = val.matchedAnswer;
      }
    }
  }

  const correctAnswerDisplay = correctOpt?.text || getCorrectAnswerDisplay(exercise);

  return {
    isCorrect,
    scoreXp: isCorrect ? 10 : 0,
    matchedAnswer: matchedAnswer || selectedOpt?.text || '',
    correctAnswerDisplay,
    explanation: exercise.explanation || (isCorrect ? 'Correct selection!' : `The correct option is "${correctAnswerDisplay}".`),
  };
};

/**
 * Evaluates fill in the blank exercises (supports option select, typed text, or word tiles).
 */
export const evaluateFillBlankExercise: ExerciseEvaluator = (exercise, response) => {
  const correctOpt = exercise.options?.find((o) => o.isCorrect);
  const acceptableList: string[] = [];

  if (exercise.correctAnswer) {
    if (Array.isArray(exercise.correctAnswer)) {
      acceptableList.push(...exercise.correctAnswer);
    } else if (typeof exercise.correctAnswer === 'string') {
      acceptableList.push(exercise.correctAnswer);
    }
  }

  if (correctOpt) {
    acceptableList.push(correctOpt.text);
  }

  if (acceptableList.length === 0 && exercise.targetSentence) {
    acceptableList.push(exercise.targetSentence);
  }
  
  let isCorrect = false;
  let userText = '';

  // 1. If user selected an option
  if (response.selectedOptionId && exercise.options) {
    const selectedOpt = exercise.options.find((o) => o.id === response.selectedOptionId);
    if (selectedOpt) {
      userText = selectedOpt.text;
      if (selectedOpt.isCorrect) {
        isCorrect = true;
      } else {
        const val = validateAnswer(selectedOpt.text, acceptableList);
        isCorrect = val.isCorrect;
      }
    }
  }
  // 2. If user constructed words
  else if (response.constructedWords && response.constructedWords.length > 0) {
    userText = response.constructedWords.join(' ');
    const val = validateAnswer(userText, acceptableList);
    isCorrect = val.isCorrect;
  }
  // 3. If user typed answer
  else if (response.typedAnswer !== undefined) {
    userText = response.typedAnswer;
    const val = validateAnswer(userText, acceptableList);
    isCorrect = val.isCorrect;
  }

  const correctAnswerDisplay = correctOpt?.text || getCorrectAnswerDisplay(exercise);

  return {
    isCorrect,
    scoreXp: isCorrect ? 10 : 0,
    matchedAnswer: userText,
    correctAnswerDisplay,
    explanation: exercise.explanation || (isCorrect ? 'Well done!' : `Expected: "${correctAnswerDisplay}"`),
  };
};

/**
 * Evaluates word ordering & sentence construction exercises.
 */
export const evaluateWordOrderingExercise: ExerciseEvaluator = (exercise, response) => {
  const normalized = normalizeExercise(exercise);
  const acceptable = normalized.correctAnswer || normalized.targetSentence || deriveSentenceFromWordsAndOrder(normalized as any) || '';
  const userText = (response.constructedWords || []).join(' ').trim();
  const val = validateAnswer(userText, acceptable);

  const correctAnswerDisplay = getCorrectAnswerDisplay(normalized);

  return {
    isCorrect: val.isCorrect,
    scoreXp: val.isCorrect ? 10 : 0,
    matchedAnswer: userText,
    correctAnswerDisplay,
    explanation: normalized.explanation || (val.isCorrect ? 'Accurate word order!' : `Expected sentence: "${correctAnswerDisplay}"`),
  };
};

export type TranslationDirection = 'HI_TO_EN';

export function getTranslationDirection(exercise: Exercise): TranslationDirection {
  return 'HI_TO_EN';
}

export interface TranslationDetails {
  direction: TranslationDirection;
  questionText: string;
  questionAudioText: string;
  questionAudioLang: 'hi-IN' | 'en-US';
  expectedAnswerLang: 'en-US';
  correctEnglish: string;
  correctHindi: string;
  englishExplanation: string;
  hindiExplanation: string;
}

export function getTranslationDetails(exercise: Exercise): TranslationDetails {
  const direction: TranslationDirection = 'HI_TO_EN';
  const anyEx = exercise as any;

  const sourceSentence = (exercise.sourceSentence || anyEx.sourceText || '').trim();
  const targetSentence = (exercise.targetSentence || (Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer[0] : exercise.correctAnswer) || '').trim();
  const promptText = (exercise.prompt || '').trim();

  let correctEnglish = '';
  let correctHindi = '';

  const sourceHasHindi = /[\u0900-\u097F]/.test(sourceSentence) || /[\u0900-\u097F]/.test(promptText);

  if (sourceHasHindi) {
    correctHindi = sourceSentence || (exercise.sourceTranslations?.hi) || promptText;
    correctEnglish = targetSentence || getCorrectAnswerDisplay(exercise);
  } else {
    correctEnglish = sourceSentence || promptText || targetSentence;
    correctHindi = exercise.sourceTranslations?.hi || targetSentence || 'हिंदी अनुवाद';

    if (/[a-zA-Z]/.test(correctHindi) && !/[a-zA-Z]/.test(correctEnglish)) {
      const temp = correctEnglish;
      correctEnglish = correctHindi;
      correctHindi = temp;
    }
  }

  // Clean prompt string if prompt contains "Translate accurately:" or "Translate into Hindi:"
  correctHindi = correctHindi.replace(/^Translate accurately:\s*/i, '').replace(/^Translate into Hindi:\s*/i, '').replace(/^Translate:\s*/i, '');

  let englishExplanation = exercise.explanationsByLang?.en || '';
  let hindiExplanation = exercise.explanationsByLang?.hi || '';

  const rawExp = (exercise.explanation || '').trim();

  if (!englishExplanation && !hindiExplanation) {
    if (rawExp) {
      englishExplanation = rawExp;
      hindiExplanation = `अभिवादन और वाक्य संरचना के लिए अंग्रेजी में "${correctEnglish}" का प्रयोग किया जाता है।`;
    } else {
      englishExplanation = `In English, "${correctHindi}" is correctly expressed as "${correctEnglish}".`;
      hindiExplanation = `अंग्रेजी में "${correctHindi}" के स्थान पर "${correctEnglish}" कहा जाता है।`;
    }
  } else if (!englishExplanation) {
    englishExplanation = `In English, "${correctHindi}" translates to "${correctEnglish}".`;
  } else if (!hindiExplanation) {
    hindiExplanation = `अभिवादन और वाक्य संरचना के लिए अंग्रेजी में "${correctEnglish}" का प्रयोग किया जाता है।`;
  }

  const questionText = correctHindi;
  const questionAudioText = correctHindi;
  const questionAudioLang: 'hi-IN' = 'hi-IN';
  const expectedAnswerLang: 'en-US' = 'en-US';

  return {
    direction,
    questionText,
    questionAudioText,
    questionAudioLang,
    expectedAnswerLang,
    correctEnglish,
    correctHindi,
    englishExplanation,
    hindiExplanation,
  };
}

/**
 * Evaluates translation exercises (supports tiles and direct typing).
 */
export const evaluateTranslationExercise: ExerciseEvaluator = (exercise, response) => {
  const details = getTranslationDetails(exercise);
  const acceptableTarget = details.direction === 'HI_TO_EN' ? details.correctEnglish : details.correctHindi;
  const acceptable = exercise.correctAnswer || exercise.targetSentence || acceptableTarget;

  const userText = response.constructedWords && response.constructedWords.length > 0
    ? response.constructedWords.join(' ').trim()
    : (response.typedAnswer || '').trim();

  const val = validateAnswer(userText, acceptable);

  return {
    isCorrect: val.isCorrect,
    scoreXp: val.isCorrect ? 10 : 0,
    matchedAnswer: userText,
    correctAnswerDisplay: acceptableTarget,
    explanation: details.englishExplanation,
  };
};

/**
 * Evaluates listening / listen and type exercises.
 */
export const evaluateListeningExercise: ExerciseEvaluator = (exercise, response) => {
  // If multiple choice listening options
  if (exercise.options && exercise.options.length > 0 && response.selectedOptionId) {
    return evaluateOptionBasedExercise(exercise, response);
  }

  const acceptable = exercise.correctAnswer || exercise.targetSentence || exercise.audioText || '';
  const userText = response.constructedWords && response.constructedWords.length > 0
    ? response.constructedWords.join(' ').trim()
    : (response.typedAnswer || '').trim();

  const val = validateAnswer(userText, acceptable);
  const correctAnswerDisplay = getCorrectAnswerDisplay(exercise);

  return {
    isCorrect: val.isCorrect,
    scoreXp: val.isCorrect ? 10 : 0,
    matchedAnswer: userText,
    correctAnswerDisplay,
    explanation: exercise.explanation || (val.isCorrect ? 'Clear auditory comprehension!' : `Target speech: "${correctAnswerDisplay}"`),
  };
};

/**
 * Evaluates captured speech-recognition transcript text against the target; it does not analyze audio acoustics.
 */
export const evaluateSpeakingExercise: ExerciseEvaluator = (exercise, response) => {
  const target = exercise.targetSentence || exercise.audioText || (Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer[0] : exercise.correctAnswer) || '';
  const spoken = response.spokenText || '';
  const match = calculateSpeechMatch(spoken, target);

  return {
    isCorrect: match.isMatch,
    scoreXp: match.isMatch ? 15 : 0,
    matchedAnswer: spoken,
    correctAnswerDisplay: target,
    explanation: exercise.explanation || (match.isMatch ? 'The recognized transcript matches the target text.' : `The recognized transcript did not match closely enough. Target: "${target}"`),
    feedbackMessage: match.isMatch ? `Transcript text match: ${Math.round(match.score * 100)}%.` : 'Keep practicing; the recognized transcript did not match the target closely enough.',
  };
};

/**
 * Evaluates personal production exercises (e.g. self introductions).
 */
export const evaluatePersonalProductionExercise: ExerciseEvaluator = (exercise, response) => {
  const p = response.personalProduction || {};
  const name = (p.name || '').trim();
  const country = (p.country || '').trim();
  const city = (p.city || '').trim();

  const isComplete = name.length > 0 && country.length > 0 && city.length > 0;

  return {
    isCorrect: isComplete,
    scoreXp: isComplete ? 20 : 0,
    matchedAnswer: `My name is ${name || '[Name]'}. I'm from ${country || '[Country]'}. I live in ${city || '[City]'}.`,
    correctAnswerDisplay: exercise.targetSentence || `My name is ${name}. I'm from ${country}. I live in ${city}.`,
    explanation: exercise.explanation || 'Excellent personalized communication!',
  };
};

/**
 * Evaluates pair matching exercises.
 */
export const evaluateMatchPairsExercise: ExerciseEvaluator = (exercise, response) => {
  let matchedCount = 0;
  if (Array.isArray(response.matchedPairs)) {
    matchedCount = response.matchedPairs.length;
  } else if (response.matchedPairs && typeof response.matchedPairs === 'object') {
    matchedCount = Object.keys(response.matchedPairs).length;
  }
  const expectedCount = exercise.options?.length || (exercise.pairs ? exercise.pairs.length : 4);
  const isCorrect = matchedCount >= expectedCount && expectedCount > 0;

  return {
    isCorrect,
    scoreXp: isCorrect ? 15 : 0,
    matchedAnswer: `${matchedCount} pairs matched`,
    correctAnswerDisplay: 'All matching word pairs connected',
    explanation: exercise.explanation || (isCorrect ? 'All pairs matched accurately!' : 'Connect all corresponding terms.'),
  };
};

/**
 * Central registry mapping each canonical exercise type to its dedicated evaluator.
 */
export const EXERCISE_EVALUATOR_REGISTRY: Record<CanonicalExerciseType, ExerciseEvaluator> = {
  recognition: evaluateOptionBasedExercise,
  multiple_choice: evaluateOptionBasedExercise,
  fill_blank: evaluateFillBlankExercise,
  word_ordering: evaluateWordOrderingExercise,
  sentence_construction: evaluateWordOrderingExercise,
  translation: evaluateTranslationExercise,
  listening: evaluateListeningExercise,
  listen_and_type: evaluateListeningExercise,
  error_correction: evaluateOptionBasedExercise,
  dialogue_completion: evaluateOptionBasedExercise,
  speaking: evaluateSpeakingExercise,
  personal_production: evaluatePersonalProductionExercise,
  match_pairs: evaluateMatchPairsExercise,
};

/**
 * Master evaluation dispatch function.
 * Evaluates any exercise with full normalization, type-safety, and fallback resilience.
 */
export function evaluateExercise(
  exercise: Exercise,
  response: ExerciseUserResponse
): ExerciseEvaluationResult {
  const normalizedEx = normalizeExercise(exercise);
  const evaluator = EXERCISE_EVALUATOR_REGISTRY[normalizedEx.type as CanonicalExerciseType] || evaluateOptionBasedExercise;
  return evaluator(normalizedEx, response);
}

/**
 * Master Practice Content Refactoring Engine (Sprint 6A.1 - Prompt 7A)
 * Generates 7 distinct, non-repetitive practice exercises for any CEFR lesson (Days 1–60).
 * Enforces English-only typing, context-first vocabulary, varied listening, and guided speaking.
 */
export function buildRefactoredPracticeSuite(lessonData: any): Exercise[] {
  if (!lessonData) return [];

  const vocab = lessonData.vocabulary || [];
  const exprs = lessonData.expressions || [];
  const grammarObj = lessonData.grammar || {};

  const dayNum = parseInt((lessonData.id || '1').replace(/[^0-9]/g, ''), 10) || 1;

  const effectiveVocab = vocab.length > 0 ? vocab : [
    { word: 'hello', meaning: 'Standard greeting', translationsByLang: { hi: 'नमस्ते' }, exampleSentence: 'Hello, nice to meet you.' },
    { word: 'name', meaning: 'Personal identity label', translationsByLang: { hi: 'नाम' }, exampleSentence: 'My name is Alex.' },
    { word: 'live', meaning: 'Reside in a city', translationsByLang: { hi: 'रहना' }, exampleSentence: 'I live in Delhi.' },
    { word: 'student', meaning: 'Person who learns', translationsByLang: { hi: 'छात्र' }, exampleSentence: 'I am a student.' },
  ];

  const effectiveExprs = exprs.length > 0 ? exprs : [
    { expression: 'Nice to meet you.', translationsByLang: { hi: 'आपसे मिलकर अच्छा लगा।' }, usageNote: 'Polite salutation' },
    { expression: "What's your name?", translationsByLang: { hi: 'आपका नाम क्या है?' }, usageNote: 'Asking identity' },
    { expression: 'Where do you live?', translationsByLang: { hi: 'आप कहाँ रहते हैं?' }, usageNote: 'Asking location' },
  ];

  const v0 = effectiveVocab[0];
  const v1 = effectiveVocab[1 % effectiveVocab.length];
  const v2 = effectiveVocab[2 % effectiveVocab.length];
  const v3 = effectiveVocab[3 % effectiveVocab.length];

  const e0 = effectiveExprs[0];
  const e1 = effectiveExprs[1 % effectiveExprs.length];

  // 1. Vocabulary Recognition (Context-First)
  const ex1: Exercise = {
    id: `pr_v1_day_${dayNum}`,
    type: 'recognition',
    prompt: `Select the sentence that uses "${v0.word}" in correct context:`,
    targetSentence: v0.exampleSentence || `This is my ${v0.word}.`,
    options: [
      { id: 'opt_v1_1', text: v0.exampleSentence || `I use ${v0.word} every day.`, isCorrect: true },
      { id: 'opt_v1_2', text: `She is ${v1.word} at school.`, isCorrect: false },
      { id: 'opt_v1_3', text: `We are ${v2.word} in India.`, isCorrect: false },
      { id: 'opt_v1_4', text: `They have ${v3.word} today.`, isCorrect: false },
    ].sort(() => 0.5 - Math.random()),
    explanation: `"${v0.word}" means "${v0.meaning}". Example: "${v0.exampleSentence || v0.word}".`,
    explanationsByLang: {
      en: `"${v0.word}" means "${v0.meaning}". Example: "${v0.exampleSentence || v0.word}".`,
      hi: `"${v0.word}" का अर्थ "${v0.translationsByLang?.hi || v0.meaning}" है।`,
    },
  };

  // 2. Grammar Challenge
  const ex2: Exercise = {
    id: `pr_g2_day_${dayNum}`,
    type: 'multiple_choice',
    prompt: `Choose the grammatically correct sentence for "${grammarObj.title || 'today’s lesson'}":`,
    targetSentence: v1.exampleSentence || 'She is a software engineer.',
    options: [
      { id: 'opt_g2_1', text: v1.exampleSentence || 'She is a software engineer.', isCorrect: true },
      { id: 'opt_g2_2', text: `She are a ${v1.word} engineer.`, isCorrect: false },
      { id: 'opt_g2_3', text: `Her is a ${v1.word} engineer.`, isCorrect: false },
      { id: 'opt_g2_4', text: `She am a ${v1.word} engineer.`, isCorrect: false },
    ].sort(() => 0.5 - Math.random()),
    explanation: `In today's lesson, subject pronouns must agree with the verb form.`,
    explanationsByLang: {
      en: `In today's lesson, subject pronouns must agree with the verb form.`,
      hi: `आज के पाठ में विषय सर्वनाम को सही क्रिया रूप से जोड़ना आवश्यक है।`,
    },
  };

  // 3. Contextual Fill in the Blank
  const ex3: Exercise = {
    id: `pr_fb3_day_${dayNum}`,
    type: 'fill_blank',
    prompt: `Complete the sentence: "${v2.exampleSentence?.replace(v2.word, '_____') || 'I _____ in Delhi.'}"`,
    targetSentence: v2.exampleSentence || 'I live in Delhi.',
    correctAnswer: v2.word,
    options: [
      { id: 'opt_fb3_1', text: v2.word, isCorrect: true },
      { id: 'opt_fb3_2', text: v0.word, isCorrect: false },
      { id: 'opt_fb3_3', text: v1.word, isCorrect: false },
      { id: 'opt_fb3_4', text: v3.word, isCorrect: false },
    ].sort(() => 0.5 - Math.random()),
    explanation: `The blank requires the verb "${v2.word}".`,
    explanationsByLang: {
      en: `The blank requires the verb "${v2.word}".`,
      hi: `खाली स्थान में सही शब्द "${v2.word}" आएगा।`,
    },
  };

  // 4. Translation (Hindi -> English: English Input Only!)
  const hiText = e0.translationsByLang?.hi || 'आपसे मिलकर अच्छा लगा।';
  const enText = e0.expression || 'Nice to meet you.';
  const ex4: Exercise = {
    id: `pr_tr4_day_${dayNum}`,
    type: 'translation',
    prompt: `Translate into English: "${hiText}"`,
    sourceSentence: hiText,
    targetSentence: enText,
    correctAnswer: enText,
    options: [
      { id: 'opt_tr4_1', text: enText, isCorrect: true },
      { id: 'opt_tr4_2', text: e1.expression || 'Where do you live?', isCorrect: false },
      { id: 'opt_tr4_3', text: 'My name is Sarah.', isCorrect: false },
      { id: 'opt_tr4_4', text: 'I am from India.', isCorrect: false },
    ].sort(() => 0.5 - Math.random()),
    explanation: `"${hiText}" translates directly to "${enText}".`,
    explanationsByLang: {
      en: `"${hiText}" translates directly to "${enText}".`,
      hi: `"${hiText}" का सही अंग्रेजी अनुवाद "${enText}" है।`,
    },
  };

  // 5. Listening Practice (Listen & Choose)
  const listenPhrase = e1.expression || v3.exampleSentence || 'Where do you live?';
  const ex5: Exercise = {
    id: `pr_ls5_day_${dayNum}`,
    type: 'listening',
    prompt: 'Listen to native audio and select the spoken phrase:',
    audioText: listenPhrase,
    audioId: `aud_pr_ls5_${dayNum}`,
    correctAnswer: listenPhrase,
    options: [
      { id: 'opt_ls5_1', text: listenPhrase, isCorrect: true },
      { id: 'opt_ls5_2', text: e0.expression || 'Nice to meet you.', isCorrect: false },
      { id: 'opt_ls5_3', text: v0.exampleSentence || 'Hello, nice to meet you.', isCorrect: false },
      { id: 'opt_ls5_4', text: v1.exampleSentence || 'My name is Alex.', isCorrect: false },
    ].sort(() => 0.5 - Math.random()),
    explanation: `The native audio spoken phrase is "${listenPhrase}".`,
    explanationsByLang: {
      en: `The native audio spoken phrase is "${listenPhrase}".`,
      hi: `नेटिव ऑडियो में "${listenPhrase}" बोला गया है।`,
    },
  };

  // 6. Sentence Builder (Word Ordering)
  const targetBuildSent = v3.exampleSentence || 'I am a student in Delhi.';
  const buildWords = targetBuildSent.replace(/[.,?!]/g, '').split(' ');
  const ex6: Exercise = {
    id: `pr_sb6_day_${dayNum}`,
    type: 'word_ordering',
    prompt: 'Arrange the word tiles to build the correct English sentence:',
    targetSentence: targetBuildSent,
    correctAnswer: targetBuildSent,
    wordBank: [...buildWords].sort(() => 0.5 - Math.random()),
    explanation: `Correct word order: "${targetBuildSent}".`,
    explanationsByLang: {
      en: `Correct word order: "${targetBuildSent}".`,
      hi: `सही वाक्य संरचना: "${targetBuildSent}"।`,
    },
  };

  // 7. Guided Speaking Repetition
  const speakTarget = e0.expression || 'Nice to meet you today.';
  const ex7: Exercise = {
    id: `pr_sp7_day_${dayNum}`,
    type: 'speaking',
    prompt: `Listen to native audio, then repeat the English phrase out loud:`,
    targetSentence: speakTarget,
    audioText: speakTarget,
    correctAnswer: speakTarget,
    explanation: `Focus on clear pronunciation and natural stress on "${speakTarget}".`,
    explanationsByLang: {
      en: `Focus on clear pronunciation and natural stress on "${speakTarget}".`,
      hi: `"${speakTarget}" पर स्पष्ट उच्चारण और प्राकृतिक लय का अभ्यास करें।`,
    },
  };

  return [ex1, ex2, ex3, ex4, ex5, ex6, ex7];
}
