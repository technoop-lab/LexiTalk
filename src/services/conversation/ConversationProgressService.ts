import {
  ConversationProgressRecord,
  ConversationAttemptSummary,
  TurnEvaluationResult,
} from '../../types/conversation';

const STORAGE_KEY = 'curiosity_conversation_progress_v1';

export class ConversationProgressService {
  private static loadAll(): Record<string, ConversationProgressRecord> {
    if (typeof window === 'undefined') return {};
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      return JSON.parse(raw);
    } catch (e) {
      console.warn('Failed to load conversation progress', e);
      return {};
    }
  }

  private static saveAll(data: Record<string, ConversationProgressRecord>) {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save conversation progress', e);
    }
  }

  public static getProgress(conversationId: string): ConversationProgressRecord | null {
    const all = this.loadAll();
    return all[conversationId] || null;
  }

  public static getAllProgress(): Record<string, ConversationProgressRecord> {
    return this.loadAll();
  }

  public static recordAttempt(
    conversationId: string,
    cefr: 'A1' | 'A2',
    turnResults: TurnEvaluationResult[],
    durationSeconds: number,
    isMastered: boolean
  ): { record: ConversationProgressRecord; attempt: ConversationAttemptSummary } {
    const all = this.loadAll();
    const existing = all[conversationId] || {
      conversationId,
      attemptsCount: 0,
      bestScore: 0,
      isMastered: false,
    };

    const avgComm =
      turnResults.length > 0
        ? Math.round(
            turnResults.reduce((acc, r) => acc + r.communicationScore, 0) / turnResults.length
          )
        : 0;

    const avgGram =
      turnResults.length > 0
        ? Math.round(
            turnResults.reduce((acc, r) => acc + r.grammarScore, 0) / turnResults.length
          )
        : 0;

    const avgVocab =
      turnResults.length > 0
        ? Math.round(
            turnResults.reduce((acc, r) => acc + r.vocabularyScore, 0) / turnResults.length
          )
        : 0;

    const overall = Math.round((avgComm + avgGram + avgVocab) / 3);

    const totalWords = turnResults.reduce(
      (acc, r) => acc + r.normalizedTranscript.split(' ').filter(Boolean).length,
      0
    );

    const uniqueVocab = Array.from(new Set(turnResults.flatMap((r) => r.matchedVocab)));

    const now = Date.now();
    const attempt: ConversationAttemptSummary = {
      attemptId: `att_${now}_${Math.random().toString(36).substring(2, 7)}`,
      conversationId,
      timestamp: now,
      cefr,
      durationSeconds,
      turnsCompleted: turnResults.length,
      totalTurns: turnResults.length,
      communicationScore: avgComm,
      grammarScore: avgGram,
      vocabularyScore: avgVocab,
      overallScore: overall,
      totalWordsProduced: totalWords,
      targetVocabularyCount: uniqueVocab.length,
      isMastered,
      turnResults,
    };

    const updatedRecord: ConversationProgressRecord = {
      ...existing,
      attemptsCount: existing.attemptsCount + 1,
      bestScore: Math.max(existing.bestScore, overall),
      isMastered: existing.isMastered || isMastered,
      firstCompletedAt: existing.firstCompletedAt || now,
      lastCompletedAt: now,
      latestAttempt: attempt,
      firstAttempt: existing.firstAttempt || attempt,
    };

    all[conversationId] = updatedRecord;
    this.saveAll(all);

    return { record: updatedRecord, attempt };
  }

  public static getReplayComparison(conversationId: string): {
    firstAttempt?: ConversationAttemptSummary;
    latestAttempt?: ConversationAttemptSummary;
    scoreDiff: number;
    wordGrowth: number;
  } | null {
    const record = this.getProgress(conversationId);
    if (!record || !record.latestAttempt || !record.firstAttempt) return null;

    return {
      firstAttempt: record.firstAttempt,
      latestAttempt: record.latestAttempt,
      scoreDiff: record.latestAttempt.overallScore - record.firstAttempt.overallScore,
      wordGrowth:
        record.latestAttempt.totalWordsProduced - record.firstAttempt.totalWordsProduced,
    };
  }

  public static resetProgress(conversationId?: string) {
    if (!conversationId) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
      }
      return;
    }
    const all = this.loadAll();
    delete all[conversationId];
    this.saveAll(all);
  }
}
