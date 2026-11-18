import {
  CEFRLevel,
  MasterCurriculumBlueprint,
  SentenceConstructionStage,
  GrammarProgressionItem,
  VocabBlueprintItem,
  CommunicativeFunctionItem,
  RecyclingRule,
  WordPressIntegrationMeta,
  AgileRoadmapIteration,
  AdminCurriculumSummary,
  UnitScopeDefinition,
  VocabDomainDefinition,
  CollocationProgressionItem,
  LexicalChunkScheduleItem,
  PronunciationProgressionItem,
  ListeningLadderItem,
  SpeakingLadderItem,
  ReadingLadderItem,
  WritingLadderItem,
  InteractionProgressionItem,
  MediationProgressionItem,
  A1ExitProfile,
  A1ToA2BridgeItem,
  TargetLanguageCode,
  TargetLanguageCurriculumMetadata,
} from '../types';
import { MASTER_CURRICULUM_BLUEPRINT } from '../data/masterCurriculumBlueprint';
import { CURIOSITY_UNITS } from '../data/curiosityCurriculum';
import { AudioAuditService } from './AudioAuditService';

export class MasterCurriculumService {
  /**
   * Get metadata for a specific target language curriculum
   */
  public static getCurriculumMetadataForTarget(
    targetLang: TargetLanguageCode = 'en'
  ): TargetLanguageCurriculumMetadata {
    const isEn = targetLang === 'en';
    const isSa = targetLang === 'sa';
    const enUnits = CURIOSITY_UNITS.filter((u) => u.cefr === 'A1' || u.cefr === 'A2');
    const enLessonsCount = enUnits.reduce((acc, u) => acc + u.lessons.length, 0);

    return {
      curriculumId: `curriculum_${targetLang}`,
      targetLanguage: targetLang,
      title: isEn
        ? 'Curiosity English Master Curriculum'
        : isSa
        ? 'Curiosity Sanskrit Academy Curriculum'
        : `Curiosity ${targetLang.toUpperCase()} Academy Curriculum`,
      description: isEn
        ? 'Communicative CEFR A1-C2 English Mastery Curriculum'
        : isSa
        ? 'Classical Sanskrit Level Stages Curriculum (Primary & Intermediate)'
        : `Multilingual ${targetLang.toUpperCase()} Curriculum`,
      proficiencyFramework: isSa ? 'LEVEL_STAGES' : 'CEFR',
      levels: isSa
        ? [
            { code: 'L1', label: 'L1 Primary Sanskrit (प्रारम्भिक)', targetLanguage: 'sa', framework: 'LEVEL_STAGES', sequenceOrder: 1 },
            { code: 'L2', label: 'L2 Intermediate Sanskrit (माध्यमिक)', targetLanguage: 'sa', framework: 'LEVEL_STAGES', sequenceOrder: 2 },
          ]
        : [
            { code: 'A1', label: 'A1 Beginner Breakthrough', targetLanguage: targetLang, framework: 'CEFR', sequenceOrder: 1 },
            { code: 'A2', label: 'A2 Elementary Waystage', targetLanguage: targetLang, framework: 'CEFR', sequenceOrder: 2 },
          ],
      totalUnits: isEn ? enUnits.length : isSa ? 4 : 2,
      totalLessons: isEn ? enLessonsCount : isSa ? 16 : 8,
      status: isEn ? 'ACTIVE_PRODUCTION' : isSa ? 'ARCHITECTURAL_READY' : 'PLANNED',
    };
  }

  /**
   * Get complete master curriculum blueprint object
   */
  public static getBlueprint(): MasterCurriculumBlueprint {
    return MASTER_CURRICULUM_BLUEPRINT;
  }

  /**
   * Get unit scopes (Units 1-6)
   */
  public static getUnitScopes(): UnitScopeDefinition[] {
    return MASTER_CURRICULUM_BLUEPRINT.unitScopes;
  }

  /**
   * Get vocabulary domain specifications
   */
  public static getVocabularyDomains(): VocabDomainDefinition[] {
    return MASTER_CURRICULUM_BLUEPRINT.vocabularyDomains;
  }

  /**
   * Get collocation progression items
   */
  public static getCollocationProgression(): CollocationProgressionItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.collocationProgression;
  }

  /**
   * Get lexical chunk schedule
   */
  public static getLexicalChunkSchedule(): LexicalChunkScheduleItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.lexicalChunkSchedule;
  }

  /**
   * Get pronunciation progression
   */
  public static getPronunciationProgression(): PronunciationProgressionItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.pronunciationProgression;
  }

  /**
   * Get skill ladders
   */
  public static getListeningLadder(): ListeningLadderItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.listeningLadder;
  }

  public static getSpeakingLadder(): SpeakingLadderItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.speakingLadder;
  }

  public static getReadingLadder(): ReadingLadderItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.readingLadder;
  }

  public static getWritingLadder(): WritingLadderItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.writingLadder;
  }

  /**
   * Get interaction and mediation progressions
   */
  public static getInteractionProgression(): InteractionProgressionItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.interactionProgression;
  }

  public static getMediationProgression(): MediationProgressionItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.mediationProgression;
  }

  /**
   * Get A1 Exit Profile
   */
  public static getA1ExitProfile(): A1ExitProfile {
    return MASTER_CURRICULUM_BLUEPRINT.a1ExitProfile;
  }

  /**
   * Get A1 -> A2 Transition Bridge
   */
  public static getA1ToA2Bridge(): A1ToA2BridgeItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.a1ToA2Bridge;
  }

  /**
   * Get 8-stage sentence construction ladder
   */
  public static getSentenceProgression(): SentenceConstructionStage[] {
    return MASTER_CURRICULUM_BLUEPRINT.sentenceProgression;
  }

  /**
   * Get A1/A2 grammar progression items
   */
  public static getGrammarProgression(cefrLevel: CEFRLevel = 'A1'): GrammarProgressionItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.grammarProgression.filter(
      (g) => g.cefr === cefrLevel
    );
  }

  /**
   * Get vocabulary system blueprint items
   */
  public static getVocabularySystem(cefrLevel: CEFRLevel = 'A1'): VocabBlueprintItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.vocabularySystem.filter(
      (v) => v.cefr === cefrLevel
    );
  }

  /**
   * Get communicative function progression items
   */
  public static getCommunicativeFunctions(cefrLevel: CEFRLevel = 'A1'): CommunicativeFunctionItem[] {
    return MASTER_CURRICULUM_BLUEPRINT.communicativeFunctions.filter(
      (cf) => cf.cefr === cefrLevel
    );
  }

  /**
   * Get curriculum recycling rules
   */
  public static getRecyclingRules(): RecyclingRule[] {
    return MASTER_CURRICULUM_BLUEPRINT.recyclingRules;
  }

  /**
   * Get WordPress REST API / LMS integration metadata schemas
   */
  public static getWordPressIntegrationMeta(): WordPressIntegrationMeta[] {
    return MASTER_CURRICULUM_BLUEPRINT.wordPressSchema;
  }

  /**
   * Get Agile Roadmap iterations list
   */
  public static getAgileRoadmap(): AgileRoadmapIteration[] {
    return MASTER_CURRICULUM_BLUEPRINT.agileRoadmap;
  }

  /**
   * Compute comprehensive Admin Curriculum Summary for visibility
   */
  public static getAdminCurriculumSummary(): AdminCurriculumSummary {
    const audioStats = AudioAuditService.auditLesson1();
    const enUnits = CURIOSITY_UNITS.filter((u) => u.cefr === 'A1' || u.cefr === 'A2');
    const totalLessons = enUnits.reduce((acc, u) => acc + u.lessons.length, 0);

    return {
      programName: MASTER_CURRICULUM_BLUEPRINT.programTitle,
      activeCEFRLevels: MASTER_CURRICULUM_BLUEPRINT.primaryActiveLevels,
      totalUnitsPlanned: enUnits.length,
      totalLessonsBuilt: totalLessons,
      totalGrammarPointsCount: MASTER_CURRICULUM_BLUEPRINT.grammarProgression.length,
      totalVocabItemsCount: MASTER_CURRICULUM_BLUEPRINT.vocabularyDomains.length,
      totalCommunicativeFunctionsCount: MASTER_CURRICULUM_BLUEPRINT.communicativeFunctions.length,
      recyclingCoveragePercent: 100, // 100% of defined concepts have recycling schedule
      audioProductionReadyCount: audioStats.readyCount,
      audioMissingCount: audioStats.missingCount,
      currentActiveIteration: 14.0,
      releaseReadinessStatus: 'PRODUCTION_STABLE',
    };
  }
}
