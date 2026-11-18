// Normalized Answer Validation & Linguistic Comparison Engine
// Curiosity English Academy - Assessment Hardening Engine

/**
 * Standardize contraction mappings for bidirectional matching.
 * e.g., "I'm" <-> "I am", "don't" <-> "do not", etc.
 */
const CONTRACTION_MAP: Record<string, string> = {
  "i'm": "i am",
  "you're": "you are",
  "we're": "we are",
  "they're": "they are",
  "he's": "he is",
  "she's": "she is",
  "it's": "it is",
  "there's": "there is",
  "that's": "that is",
  "what's": "what is",
  "where's": "where is",
  "who's": "who is",
  "how's": "how is",
  "don't": "do not",
  "doesn't": "does not",
  "didn't": "did not",
  "can't": "cannot",
  "won't": "will not",
  "isn't": "is not",
  "aren't": "are not",
  "wasn't": "was not",
  "weren't": "were not",
  "haven't": "have not",
  "hasn't": "has not",
  "hadn't": "had not",
  "let's": "let us",
  "i've": "i have",
  "you've": "you have",
  "we've": "we have",
  "they've": "they have",
  "i'll": "i will",
  "you'll": "you will",
  "he'll": "he will",
  "she'll": "she will",
  "we'll": "we will",
  "they'll": "they will",
  "i'd": "i would",
  "you'd": "you would",
  "he'd": "he would",
  "she'd": "she would",
  "we'd": "we would",
  "they'd": "they would",
};

/**
 * Standardize Unicode quotes and apostrophes to standard ASCII single quote.
 */
export function standardizeApostrophes(text: string): string {
  if (!text) return '';
  return text
    .replace(/[\u2018\u2019\u201A\u201B\u0060\u00B4]/g, "'")
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"');
}

/**
 * Clean and normalize a string for answer comparisons:
 * - Lowercase
 * - Standardize quotes
 * - Remove non-alphanumeric punctuation (keeping spaces)
 * - Collapse multiple spaces into one
 * - Trim
 */
export function normalizeText(text: string): string {
  if (!text) return '';
  const standardQuotes = standardizeApostrophes(text);
  return standardQuotes
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_~()?'"“”—–…!¡?¿]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Expands all known English contractions in a text.
 */
export function expandContractions(text: string): string {
  if (!text) return '';
  let result = standardizeApostrophes(text).toLowerCase();
  
  for (const [contraction, expansion] of Object.entries(CONTRACTION_MAP)) {
    // Word boundary or start/end regex for accurate replacement
    const regex = new RegExp(`\\b${contraction.replace("'", "\\'")}\\b`, 'gi');
    result = result.replace(regex, expansion);
  }
  return normalizeText(result);
}

/**
 * Contract known English phrase patterns where possible.
 */
export function contractPhrases(text: string): string {
  if (!text) return '';
  let result = standardizeApostrophes(text).toLowerCase();

  for (const [contraction, expansion] of Object.entries(CONTRACTION_MAP)) {
    const regex = new RegExp(`\\b${expansion}\\b`, 'gi');
    result = result.replace(regex, contraction.replace("'", ''));
  }
  return normalizeText(result);
}

/**
 * Comprehensive comparison between user text and expected target(s).
 * Handles:
 * 1. Direct normalized equality
 * 2. Expanded contractions equality (e.g. "I'm from India" vs "I am from India")
 * 3. Array of acceptable alternate answers
 */
export function validateAnswer(
  userAnswer: string,
  acceptableAnswers: string | string[]
): { isCorrect: boolean; matchedAnswer: string } {
  if (!userAnswer && userAnswer !== '') {
    return { isCorrect: false, matchedAnswer: '' };
  }

  const cleanUser = normalizeText(userAnswer);
  const expandedUser = expandContractions(userAnswer);
  
  const targetList = Array.isArray(acceptableAnswers)
    ? acceptableAnswers
    : [acceptableAnswers];

  for (const target of targetList) {
    if (!target) continue;
    const cleanTarget = normalizeText(target);
    const expandedTarget = expandContractions(target);

    // 1. Direct match after punctuation & space normalization
    if (cleanUser === cleanTarget) {
      return { isCorrect: true, matchedAnswer: target };
    }

    // 2. Contraction-expanded match
    if (expandedUser && expandedTarget && expandedUser === expandedTarget) {
      return { isCorrect: true, matchedAnswer: target };
    }
  }

  return { isCorrect: false, matchedAnswer: targetList[0] || '' };
}

/**
 * Speech recognition similarity score (0.0 to 1.0)
 * Uses word token overlap to determine if spoken text is sufficiently close to target.
 */
export function calculateSpeechMatch(
  spokenText: string,
  targetText: string
): { isMatch: boolean; score: number } {
  const cleanSpoken = normalizeText(spokenText);
  const cleanTarget = normalizeText(targetText);

  if (!cleanSpoken || !cleanTarget) return { isMatch: false, score: 0 };

  if (cleanSpoken === cleanTarget) return { isMatch: true, score: 1.0 };

  const spokenWords = cleanSpoken.split(' ').filter(Boolean);
  const targetWords = cleanTarget.split(' ').filter(Boolean);

  if (targetWords.length === 0) return { isMatch: false, score: 0 };

  let matchCount = 0;
  targetWords.forEach((word) => {
    if (spokenWords.includes(word)) {
      matchCount++;
    }
  });

  const score = matchCount / targetWords.length;
  // Threshold of 60% match is considered acceptable for beginner A1 learners
  return { isMatch: score >= 0.6, score };
}
