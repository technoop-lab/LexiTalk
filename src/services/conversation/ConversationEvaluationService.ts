import {
  ConversationTurn,
  TurnEvaluationResult,
  EvaluationCategoryFeedback,
} from '../../types/conversation';

export class ConversationEvaluationService {
  public static normalizeTranscript(raw: string): string {
    if (!raw) return '';
    return raw
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  public static evaluateTurn(
    turn: ConversationTurn,
    rawTranscript: string,
    options?: {
      responseTimeMs?: number;
      cefr?: 'A1' | 'A2';
    }
  ): TurnEvaluationResult {
    const normalized = this.normalizeTranscript(rawTranscript);

    if (!normalized) {
      return {
        turnId: turn.id,
        rawTranscript: '',
        normalizedTranscript: '',
        overallSuccess: false,
        communicationScore: 0,
        grammarScore: 0,
        vocabularyScore: 0,
        interactionScore: 0,
        matchedVocab: [],
        matchedConcepts: [],
        missingConcepts: turn.acceptableConceptGroups.filter((g) => g.required).map((g) => g.name),
        detectedErrors: [],
        feedback: {
          communication: {
            category: 'communication',
            status: 'fail',
            message: 'No response was captured. Please speak or type your response clearly.',
          },
          grammar: {
            category: 'grammar',
            status: 'warn',
            message: 'A complete sentence is required for grammar evaluation.',
          },
          vocabulary: {
            category: 'vocabulary',
            status: 'warn',
            message: 'Try using key target vocabulary.',
          },
          interaction: {
            category: 'interaction',
            status: 'fail',
            message: 'Please answer the speaker to continue the dialogue.',
          },
        },
        requiresRetry: true,
        remediationTask: turn.remediationPractice,
      };
    }

    // 1. Concept Matching
    const matchedConcepts: string[] = [];
    const missingConcepts: string[] = [];

    for (const group of turn.acceptableConceptGroups) {
      let groupMatched = false;
      for (const pattern of group.patterns) {
        const normPattern = this.normalizeTranscript(pattern);
        if (normalized.includes(normPattern)) {
          groupMatched = true;
          break;
        }
        // Also check word boundary regex
        try {
          const regex = new RegExp(`\\b${normPattern}\\b`, 'i');
          if (regex.test(normalized)) {
            groupMatched = true;
            break;
          }
        } catch {
          // ignore invalid regex patterns
        }
      }

      if (groupMatched) {
        matchedConcepts.push(group.name);
      } else if (group.required) {
        missingConcepts.push(group.name);
      }
    }

    // 2. Target Vocabulary Matching
    const matchedVocab: string[] = [];
    for (const vocab of turn.targetVocabulary) {
      const normVocab = this.normalizeTranscript(vocab);
      if (normalized.includes(normVocab)) {
        matchedVocab.push(vocab);
      }
    }

    // 3. Error Detection (Grammar / Structure / L1 transfer)
    const detectedErrors: { ruleId: string; message: string; correction: string }[] = [];

    for (const rule of turn.commonMistakeRules) {
      let ruleTriggered = false;
      if (rule.pattern instanceof RegExp) {
        if (rule.pattern.test(rawTranscript) || rule.pattern.test(normalized)) {
          ruleTriggered = true;
        }
      } else {
        const normErrPattern = this.normalizeTranscript(rule.pattern);
        if (normalized.includes(normErrPattern)) {
          ruleTriggered = true;
        }
      }

      if (ruleTriggered) {
        detectedErrors.push({
          ruleId: rule.id,
          message: rule.message,
          correction: rule.correctionPattern,
        });
      }
    }

    // Heuristic L1 transfer check (e.g. "I am agree", "I am live in...")
    if (/\bi\s+am\s+(agree|live|work|like|want)\b/i.test(normalized)) {
      if (!detectedErrors.some((e) => e.ruleId.includes('be_verb_error'))) {
        detectedErrors.push({
          ruleId: 'generic_be_verb_error',
          message: 'Do not use "am" directly before base verbs like "agree", "live", or "work".',
          correction: 'Use "I agree", "I live", or "I work".',
        });
      }
    }

    // 4. Calculate Scores
    const requiredConceptsTotal = turn.acceptableConceptGroups.filter((g) => g.required).length;
    const requiredConceptsMatched = turn.acceptableConceptGroups.filter(
      (g) => g.required && matchedConcepts.includes(g.name)
    ).length;

    let communicationScore = 100;
    if (requiredConceptsTotal > 0) {
      communicationScore = Math.round((requiredConceptsMatched / requiredConceptsTotal) * 100);
    } else {
      communicationScore = matchedConcepts.length > 0 ? 100 : 70;
    }

    let grammarScore = 100;
    if (detectedErrors.length > 0) {
      grammarScore = Math.max(40, 100 - detectedErrors.length * 30);
    }

    const vocabScore =
      turn.targetVocabulary.length > 0
        ? Math.min(100, Math.round((matchedVocab.length / Math.max(1, turn.targetVocabulary.length)) * 100) + 40)
        : 100;

    let interactionScore = 90;
    if (communicationScore >= 70) interactionScore = 100;
    else if (communicationScore < 50) interactionScore = 50;

    // Determine Overall Success
    const overallSuccess = communicationScore >= 70 && grammarScore >= 60;
    const requiresRetry = !overallSuccess;

    // 5. Generate Feedback per Domain
    const commFeedback: EvaluationCategoryFeedback = {
      category: 'communication',
      status: communicationScore >= 80 ? 'pass' : communicationScore >= 50 ? 'partial' : 'fail',
      message:
        communicationScore >= 80
          ? 'Meaning clearly understood! Your response achieved the communicative goal.'
          : communicationScore >= 50
          ? `Partially understood. Try to clearly include: ${missingConcepts.join(', ') || 'more details'}.`
          : `Meaning unclear. Your response missed key information: ${missingConcepts.join(', ')}.`,
    };

    const gramFeedback: EvaluationCategoryFeedback = {
      category: 'grammar',
      status: detectedErrors.length === 0 ? 'pass' : 'warn',
      message:
        detectedErrors.length === 0
          ? 'Grammar structure looks natural and accurate!'
          : detectedErrors[0].message,
      details: detectedErrors.length > 0 ? `Correction: ${detectedErrors[0].correction}` : undefined,
    };

    const vocabFeedback: EvaluationCategoryFeedback = {
      category: 'vocabulary',
      status: matchedVocab.length > 0 ? 'pass' : 'warn',
      message:
        matchedVocab.length > 0
          ? `Great usage of target expressions: "${matchedVocab.join(', ')}".`
          : `Tip: Try including target vocabulary such as "${turn.targetVocabulary.slice(0, 2).join('", "')}".`,
    };

    const interFeedback: EvaluationCategoryFeedback = {
      category: 'interaction',
      status: interactionScore >= 80 ? 'pass' : 'warn',
      message:
        interactionScore >= 80
          ? 'Smooth conversational turn taking.'
          : 'Keep your response connected to what your conversation partner just asked.',
    };

    return {
      turnId: turn.id,
      rawTranscript,
      normalizedTranscript: normalized,
      overallSuccess,
      communicationScore,
      grammarScore,
      vocabularyScore: Math.min(100, vocabScore),
      interactionScore,
      matchedVocab,
      matchedConcepts,
      missingConcepts,
      detectedErrors,
      feedback: {
        communication: commFeedback,
        grammar: gramFeedback,
        vocabulary: vocabFeedback,
        interaction: interFeedback,
      },
      requiresRetry,
      remediationTask: requiresRetry ? turn.remediationPractice : undefined,
    };
  }
}
