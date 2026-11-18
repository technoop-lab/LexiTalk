import { HindiDayLesson, HindiCourseStageMeta } from '../types/hindiCourse';
import {
  STAGES_METADATA,
  getAllRegistryDays,
  getRegistryDayByNumber,
  initializeCurriculumRegistry
} from '../data/curriculumRegistry';

/**
 * Get currently released lessons (Days 1-60 — full course, A1 → B1).
 */
export const HINDI_RELEASED_DAYS = 60;
export const HINDI_DAY_XP_REWARD = 75;

export const HINDI_COURSE_STAGES: HindiCourseStageMeta[] = STAGES_METADATA;

class HindiCourseManager {
  private totalCourseDays = 60;

  constructor() {
    initializeCurriculumRegistry();
  }

  /**
   * Get currently released lessons (Days 1-60). The full course is released.
   */
  public getAllAvailableDays(): HindiDayLesson[] {
    return getAllRegistryDays().filter((day) => day.dayNumber <= HINDI_RELEASED_DAYS);
  }

  /**
   * Get total curriculum planned length (60 days)
   */
  public getTotalPlannedDays(): number {
    return this.totalCourseDays;
  }

  /**
   * Get the number of currently released lessons.
   */
  public getAvailableDaysCount(): number {
    return this.getAllAvailableDays().length;
  }

  /**
   * Get currently released lesson day by number (1..60).
   */
  public getDayByNumber(dayNum: number): HindiDayLesson | null {
    if (!Number.isInteger(dayNum) || dayNum < 1 || dayNum > HINDI_RELEASED_DAYS) return null;
    return getRegistryDayByNumber(dayNum);
  }

  /**
   * Real totals, read from the curriculum itself.
   * These exist so that no screen has to invent a per-day multiplier.
   */
  public countWordsInDays(dayNumbers: number[]): number {
    return (dayNumbers || []).reduce((total: number, dayNum: number) => {
      const day = this.getDayByNumber(dayNum);
      return total + (day?.learn?.vocabulary?.length || 0);
    }, 0);
  }

  public countTurnsInDays(dayNumbers: number[]): number {
    return (dayNumbers || []).reduce((total: number, dayNum: number) => {
      const day = this.getDayByNumber(dayNum);
      const scenarios = day?.use?.dialogues || [];
      const list = Array.isArray(scenarios) ? scenarios : [scenarios];
      return total + list.reduce((sum: number, s: any) => sum + ((s?.turns?.length) || 0), 0);
    }, 0);
  }

  public countGrammarRulesInDays(dayNumbers: number[]): number {
    return (dayNumbers || []).reduce((total: number, dayNum: number) => {
      const day = this.getDayByNumber(dayNum);
      const rules = day?.teach?.grammarRules || [];
      return total + (Array.isArray(rules) ? rules.length : 0);
    }, 0);
  }

  /**
   * Get curriculum stages metadata
   */
  public getStages(): HindiCourseStageMeta[] {
    return STAGES_METADATA;
  }

  /**
   * Find the stage metadata corresponding to a day number
   */
  public getStageForDay(dayNum: number): HindiCourseStageMeta {
    const found = STAGES_METADATA.find(
      (s) => dayNum >= s.startDay && dayNum <= s.endDay
    );
    return found || STAGES_METADATA[0];
  }

  /**
   * Check if a day has loaded production content
   */
  public isDayContentAvailable(dayNum: number): boolean {
    return this.getDayByNumber(dayNum) !== null;
  }

  /**
   * Get all Voice & Accent / Spoken English drills consolidated from all 60 days
   */
  public getAllVoiceAndAccentDrills() {
    const allDays = this.getAllAvailableDays();
    const soundDirectory: {
      dayNumber: number;
      dayTitle: string;
      focusSounds: string[];
      traps: string;
      drills: any[];
      minimalPairs: any[];
      sentenceStress: any[];
      connectedSpeech: any[];
    }[] = [];

    allDays.forEach((d) => {
      soundDirectory.push({
        dayNumber: d.dayNumber,
        dayTitle: d.titleEn,
        focusSounds: d.pronunciation.targetSounds || [],
        traps: d.pronunciation.traps || '',
        drills: d.pronunciation.drills || [],
        minimalPairs: (d.pronunciation as any).minimalPairs || [],
        sentenceStress: (d.pronunciation as any).sentenceStress || [],
        connectedSpeech: (d.pronunciation as any).connectedSpeech || []
      });
    });

    return soundDirectory;
  }

  /**
   * Search vocabulary across all 60 days
   */
  public searchVocabulary(query: string) {
    if (!query || !query.trim()) return [];
    const q = query.toLowerCase().trim();
    const results: { dayNumber: number; dayTitle: string; vocab: any }[] = [];

    this.getAllAvailableDays().forEach((d) => {
      d.learn.vocabulary.forEach((v) => {
        if (
          v.word.toLowerCase().includes(q) ||
          v.meaningHi.includes(q) ||
          v.exampleEn.toLowerCase().includes(q)
        ) {
          results.push({
            dayNumber: d.dayNumber,
            dayTitle: d.titleEn,
            vocab: v
          });
        }
      });
    });

    return results;
  }

  /**
   * Get summary statistics across all 60 days
   */
  public getContentStats() {
    const allDays = this.getAllAvailableDays();
    let totalExercises = 0;
    let totalVocab = 0;
    let totalPhrases = 0;
    let totalDrills = 0;
    let totalExamples = 0;
    let totalStandards = 0;

    allDays.forEach((d) => {
      totalExercises += d.practice ? d.practice.length : 0;
      totalVocab += d.learn?.vocabulary ? d.learn.vocabulary.length : 0;
      totalPhrases += d.learn?.phrases ? d.learn.phrases.length : 0;
      totalDrills += d.pronunciation?.drills ? d.pronunciation.drills.length : 0;
      totalExamples += d.examples ? d.examples.length : 0;
      totalStandards += d.assess ? d.assess.length : 0;
    });

    return {
      loadedDays: allDays.length,
      totalPlannedDays: this.totalCourseDays,
      totalExercises,
      totalVocab,
      totalPhrases,
      totalDrills,
      totalExamples,
      totalStandards
    };
  }
}

export const HindiCourseService = new HindiCourseManager();
