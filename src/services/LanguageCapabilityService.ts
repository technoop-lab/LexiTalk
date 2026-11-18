import {
  TargetLanguageCode,
  InstructionLanguageCode,
  LanguageCapabilityStatus
} from '../types';
import { CENTRAL_LANGUAGE_REGISTRY, getLanguageRegistryEntry } from '../data/languages';

export interface LanguagePairCapability {
  targetLanguage: TargetLanguageCode;
  instructionLanguage: InstructionLanguageCode;
  status: LanguageCapabilityStatus;
  isCurriculumAvailable: boolean;
  publishedUnitsCount: number;
  publishedLessonsCount: number;
  areTranslationsComplete: boolean;
  areGrammarNotesLocalized: boolean;
  canStartFullCourse: boolean;
  statusLabel: string;
  badgeColor: string;
  description: string;
  detailedNotes: string;
}

export class LanguageCapabilityService {
  /**
   * Authoritative Language-Pair Capability Resolver.
   * Resolves capabilities strictly on the 2D matrix of (targetLanguage, instructionLanguage).
   */
  public static getPairCapability(
    targetLanguage: TargetLanguageCode = 'en',
    instructionLanguage: InstructionLanguageCode = 'hi'
  ): LanguagePairCapability {
    // English Target Trajectories
    if (targetLanguage === 'en') {
      if (instructionLanguage === 'hi') {
        return {
          targetLanguage: 'en',
          instructionLanguage: 'hi',
          status: 'PRODUCTION_READY',
          isCurriculumAvailable: true,
          publishedUnitsCount: 18,
          publishedLessonsCount: 270,
          areTranslationsComplete: true,
          areGrammarNotesLocalized: true,
          canStartFullCourse: true,
          statusLabel: 'Production Ready (100%)',
          badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
          description: 'Full 270-lesson communicative CEFR A1 & A2 curriculum with Hindi explanations, dialogue audio, vocabulary stages, and mastery assessments.',
          detailedNotes: '100% Production Ready: All 18 units (Lessons 1–270: A1 Lessons 1–90 + A2 Lessons 91–270), comprehensive reviews, and authoritative A1 & A2 Exit Assessments available with complete Hindi translations.',
        };
      }

      // Other instruction languages for English target
      const targetEntry = getLanguageRegistryEntry(instructionLanguage);
      return {
        targetLanguage: 'en',
        instructionLanguage,
        status: 'ARCHITECTURE_READY',
        isCurriculumAvailable: false,
        publishedUnitsCount: 0,
        publishedLessonsCount: 0,
        areTranslationsComplete: false,
        areGrammarNotesLocalized: false,
        canStartFullCourse: false,
        statusLabel: 'Architecture Ready (Authoring in Progress)',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
        description: `English instruction through ${targetEntry.name} is in development. Core schema and linguistic mappings are initialized.`,
        detailedNotes: `Architecture Ready: Core linguistic schema ready. Localized lesson authoring in progress. Use English + Hindi for complete production curriculum.`,
      };
    }

    // Sanskrit Target Trajectory
    if (targetLanguage === 'sa') {
      return {
        targetLanguage: 'sa',
        instructionLanguage,
        status: 'ARCHITECTURE_READY',
        isCurriculumAvailable: false,
        publishedUnitsCount: 0,
        publishedLessonsCount: 0,
        areTranslationsComplete: false,
        areGrammarNotesLocalized: false,
        canStartFullCourse: false,
        statusLabel: 'Architecture Ready',
        badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
        description: 'Sanskrit Academy foundation initialized. Morphosyntax and dhatu curriculum in active authoring.',
        detailedNotes: 'Architecture Ready: Schema and curriculum scaffolding in place. Lesson authoring in progress.',
      };
    }

    // Other Planned Target Languages
    const entry = getLanguageRegistryEntry(targetLanguage);
    return {
      targetLanguage,
      instructionLanguage,
      status: 'ARCHITECTURE_READY',
      isCurriculumAvailable: false,
      publishedUnitsCount: 0,
      publishedLessonsCount: 0,
      areTranslationsComplete: false,
      areGrammarNotesLocalized: false,
      canStartFullCourse: false,
      statusLabel: 'Planned Architecture',
      badgeColor: 'bg-slate-700 text-slate-300 border-slate-600',
      description: `${entry.name} curriculum planned. No units authored yet.`,
      detailedNotes: 'Curriculum scaffolding initialized.',
    };
  }

  /**
   * Check if a pair is 100% production ready for active learner onboarding.
   */
  public static isProductionReady(
    targetLanguage: TargetLanguageCode = 'en',
    instructionLanguage: InstructionLanguageCode = 'hi'
  ): boolean {
    return targetLanguage === 'en' && instructionLanguage === 'hi';
  }

  /**
   * Check if full course enrollment should be allowed
   */
  public static canEnrollFullCourse(
    targetLanguage: TargetLanguageCode = 'en',
    instructionLanguage: InstructionLanguageCode = 'hi'
  ): boolean {
    return this.getPairCapability(targetLanguage, instructionLanguage).canStartFullCourse;
  }
}
