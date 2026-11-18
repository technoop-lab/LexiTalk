import {
  UserAcademyProfile,
  TestScenarioPreset,
  TargetLanguageCode,
  NativeLanguageCode,
  CEFRLevel,
  A1MasteryRecord,
  A1AssessmentAttempt,
  Exercise,
} from '../types';
import { AuthService } from './AuthService';
import { ALL_A1_LESSON_IDS } from './ProgressService';
import { CURIOSITY_UNITS } from '../data/curiosityCurriculum';
import { evaluateExercise, normalizeExercise, ExerciseUserResponse, ExerciseEvaluationResult } from './ExerciseRegistry';
import { A1_EXIT_ASSESSMENT_CONFIG } from '../data/a1ExitAssessmentData';

const DEV_STORAGE_KEY = 'curiosity_dev_tester_profile_v1';

export const ALL_CURRICULUM_LESSON_IDS: string[] = CURIOSITY_UNITS.flatMap((u) => u.lessons.map((l) => l.id));

export const ALL_A2_LESSON_IDS: string[] = CURIOSITY_UNITS
  .filter((u) => u.cefr === 'A2')
  .flatMap((u) => u.lessons.map((l) => l.id));

export interface DiagnosticEvaluationReport {
  exerciseId: string;
  rawType: string;
  canonicalType: string;
  isCorrect: boolean;
  scoreXp: number;
  expectedAnswer: string;
  submittedAnswer: string;
  explanation: string;
  feedbackMessage?: string;
  diagnostics: {
    normalizationApplied: boolean;
    wordBankPresent: boolean;
    speechTargetPresent: boolean;
    potentialFalseNegative: boolean;
    potentialFalsePositive: boolean;
    details: string[];
  };
}

class DeveloperTestServiceManager {
  private defaultDevProfile: UserAcademyProfile = {
    id: 'usr_dev_tester',
    email: 'dev.tester@curiosityacademy.internal',
    name: 'Developer / QA Tester',
    avatar: '🛠️',
    role: 'DEVELOPER_TESTER',
    entitlement: 'DEVELOPER_TEST',
    isDeveloperTestMode: true,
    learnerPreviewActive: false,
    activeTestScenario: 'A1_IN_PROGRESS',
    nativeLanguage: 'hi',
    learningLanguage: 'en',
    learningMode: 'english_only',
    secondaryLanguage: null,
    currentCEFR: 'A1',
    targetCEFRLevel: 'C1',
    learningGoal: 'fluency',
    streakDays: 42,
    lastActiveDate: new Date().toISOString().split('T')[0],
    totalXp: 4850,
    gems: 9999,
    hearts: 9999,
    maxHearts: 9999,
    streakFreezeCount: 10,
    subscriptionTier: 'pro_annual',
    isPro: true,
    isGuest: false,
    hasCompletedOnboarding: true,
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
    completedLessonIds: ALL_A1_LESSON_IDS.slice(0, 30),
    lessonStars: ALL_A1_LESSON_IDS.slice(0, 30).reduce((acc, id) => ({ ...acc, [id]: 3 }), {}),
    wordsMasteredCount: 450,
    unlockedStoryIds: ['story_1', 'story_2', 'story_3', 'story_4'],
    leagueName: 'Diamond',
    leagueRank: 1,
    certificatesEarned: [],
    preferences: {
      dailyGoalMinutes: 30,
      autoPlayAudio: true,
      audioSpeed: 1.0,
      notificationsEnabled: true,
    },
  };

  /**
   * Retrieves current developer profile from isolated storage.
   */
  public getDeveloperProfile(): UserAcademyProfile {
    try {
      const raw = localStorage.getItem(DEV_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          ...this.defaultDevProfile,
          ...parsed,
          role: 'DEVELOPER_TESTER',
          entitlement: 'DEVELOPER_TEST',
          isDeveloperTestMode: true,
        };
      }
    } catch (e) {
      console.error('Failed to parse dev tester profile:', e);
    }
    return { ...this.defaultDevProfile };
  }

  /**
   * Saves updated developer profile to storage and notifies auth subscribers if active.
   */
  public saveDeveloperProfile(profile: UserAcademyProfile): UserAcademyProfile {
    const clean: UserAcademyProfile = {
      ...profile,
      role: 'DEVELOPER_TESTER',
      entitlement: 'DEVELOPER_TEST',
      isDeveloperTestMode: true,
    };
    try {
      localStorage.setItem(DEV_STORAGE_KEY, JSON.stringify(clean));
      const currentUser = AuthService.getCurrentUser();
      if (currentUser.id === clean.id) {
        AuthService.updateUserProfile(clean);
      }
    } catch (e) {
      console.error('Failed to save dev tester profile:', e);
    }
    return clean;
  }

  /**
   * Resets developer test profile to default clean state.
   */
  public resetDeveloperProfile(): UserAcademyProfile {
    const clean = { ...this.defaultDevProfile };
    this.saveDeveloperProfile(clean);
    return clean;
  }

  /**
   * Toggles "View As Learner" preview mode.
   * When active, prerequisite and paywall locks are strictly enforced so the dev can test the exact learner UI.
   */
  public toggleLearnerPreviewMode(active?: boolean): UserAcademyProfile {
    const profile = this.getDeveloperProfile();
    const nextState = active !== undefined ? active : !profile.learnerPreviewActive;
    profile.learnerPreviewActive = nextState;
    return this.saveDeveloperProfile(profile);
  }

  /**
   * Applies a preset testing scenario.
   */
  public applyScenario(
    preset: TestScenarioPreset,
    options?: { targetLang?: TargetLanguageCode; instructionLang?: NativeLanguageCode }
  ): UserAcademyProfile {
    const base = this.getDeveloperProfile();
    const updated: UserAcademyProfile = {
      ...base,
      activeTestScenario: preset,
      learningLanguage: options?.targetLang || base.learningLanguage || 'en',
      nativeLanguage: options?.instructionLang || base.nativeLanguage || 'hi',
    };

    switch (preset) {
      case 'NEW_USER':
        updated.completedLessonIds = [];
        updated.lessonStars = {};
        updated.totalXp = 0;
        updated.gems = 100;
        updated.hearts = 5;
        updated.maxHearts = 5;
        updated.streakDays = 1;
        updated.isPro = false;
        updated.subscriptionTier = 'free';
        updated.wordsMasteredCount = 0;
        updated.currentCEFR = 'A1';
        updated.a1Mastery = {
          status: 'A1_NOT_STARTED',
          overallMasteryPercent: 0,
          lessonsCompletedCount: 0,
          reviewSessionsCompleted: 0,
          assessmentPassed: false,
          isA2Unlocked: false,
          skillScores: {
            listening: 0,
            speaking: 0,
            reading: 0,
            writing: 0,
            interaction: 0,
            mediation: 0,
            pronunciation: 0,
            grammar: 0,
            vocabulary: 0,
          },
          weakConcepts: [],
          weakGrammarCategories: [],
          weakExerciseTypes: [],
          remediationQueue: [],
          remediationCompletedCount: 0,
          masteryBadgeEarned: false,
          lastEvaluatedAt: new Date().toISOString(),
        };
        updated.a1AssessmentHistory = [];
        break;

      case 'A1_IN_PROGRESS':
        updated.completedLessonIds = ALL_A1_LESSON_IDS.slice(0, 35);
        updated.lessonStars = ALL_A1_LESSON_IDS.slice(0, 35).reduce((acc, id) => ({ ...acc, [id]: 3 }), {});
        updated.totalXp = 1450;
        updated.gems = 620;
        updated.hearts = 5;
        updated.maxHearts = 5;
        updated.streakDays = 7;
        updated.isPro = false;
        updated.subscriptionTier = 'free';
        updated.wordsMasteredCount = 280;
        updated.currentCEFR = 'A1';
        updated.a1Mastery = {
          status: 'A1_IN_PROGRESS',
          overallMasteryPercent: 39,
          lessonsCompletedCount: 35,
          reviewSessionsCompleted: 4,
          assessmentPassed: false,
          isA2Unlocked: false,
          skillScores: {
            listening: 65,
            speaking: 60,
            reading: 70,
            writing: 65,
            interaction: 60,
            mediation: 55,
            pronunciation: 68,
            grammar: 62,
            vocabulary: 72,
          },
          weakConcepts: ['subject_pronouns_plural', 'question_formation_be'],
          weakGrammarCategories: ['verb_be', 'questions'],
          weakExerciseTypes: ['word_ordering', 'error_correction'],
          remediationQueue: [],
          remediationCompletedCount: 0,
          masteryBadgeEarned: false,
          lastEvaluatedAt: new Date().toISOString(),
        };
        break;

      case 'A1_COMPLETE':
      case 'A1_EXIT_READY':
        updated.completedLessonIds = [...ALL_A1_LESSON_IDS];
        updated.lessonStars = ALL_A1_LESSON_IDS.reduce((acc, id) => ({ ...acc, [id]: 3 }), {});
        updated.totalXp = 4500;
        updated.gems = 1200;
        updated.hearts = 5;
        updated.maxHearts = 5;
        updated.streakDays = 21;
        updated.isPro = false;
        updated.subscriptionTier = 'free';
        updated.wordsMasteredCount = 850;
        updated.currentCEFR = 'A1';
        updated.a1Mastery = {
          status: 'A1_READY_FOR_EXIT_TEST',
          overallMasteryPercent: 82,
          lessonsCompletedCount: 90,
          reviewSessionsCompleted: 12,
          assessmentPassed: false,
          isA2Unlocked: false,
          skillScores: {
            listening: 80,
            speaking: 78,
            reading: 85,
            writing: 82,
            interaction: 80,
            mediation: 75,
            pronunciation: 82,
            grammar: 84,
            vocabulary: 88,
          },
          weakConcepts: [],
          weakGrammarCategories: [],
          weakExerciseTypes: [],
          remediationQueue: [],
          remediationCompletedCount: 0,
          masteryBadgeEarned: false,
          lastEvaluatedAt: new Date().toISOString(),
        };
        break;

      case 'A1_EXIT_FAILED':
      case 'A1_REMEDIATION': {
        updated.completedLessonIds = [...ALL_A1_LESSON_IDS];
        updated.lessonStars = ALL_A1_LESSON_IDS.reduce((acc, id) => ({ ...acc, [id]: 3 }), {});
        updated.totalXp = 4600;
        updated.gems = 1250;
        updated.streakDays = 22;
        updated.currentCEFR = 'A1';

        const failedAttempt: A1AssessmentAttempt = {
          id: `att_fail_${Date.now()}`,
          formType: 'FORM_A',
          attemptNumber: 1,
          cefrLevel: 'A1',
          totalScore: 13,
          maxScore: 20,
          scorePercent: 65,
          passed: false,
          isMastered: false,
          failedCriticalSkills: ['listening'],
          unmetThresholds: ['Overall score 65% is below 80% pass threshold', 'Listening skill score 60% is below 70% threshold'],
          attemptedAt: new Date().toISOString(),
          durationSeconds: 980,
          skillBreakdown: {
            listening: { correct: 3, total: 5, percent: 60 },
            speaking: { correct: 2, total: 3, percent: 66 },
            reading: { correct: 4, total: 5, percent: 80 },
            writing: { correct: 2, total: 3, percent: 66 },
            grammar: { correct: 3, total: 4, percent: 75 },
            vocabulary: { correct: 4, total: 5, percent: 80 },
            interaction: { correct: 2, total: 3, percent: 66 },
            mediation: { correct: 1, total: 2, percent: 50 },
            pronunciation: { correct: 3, total: 4, percent: 75 },
          },
          weakQuestionIds: ['q_listen_02', 'q_listen_04', 'q_writing_01'],
          identifiedWeaknesses: ['Auditory question comprehension', 'Present tense third-person singular concord'],
          recommendedReviewLessonIds: ['lesson_a1_1_4', 'lesson_a1_2_18', 'lesson_a1_4_52'],
          answersLog: [],
        };

        updated.a1AssessmentHistory = [failedAttempt];
        updated.a1Mastery = {
          status: 'A1_REMEDIATION_REQUIRED',
          overallMasteryPercent: 65,
          lessonsCompletedCount: 90,
          reviewSessionsCompleted: 12,
          assessmentPassed: false,
          isA2Unlocked: false,
          skillScores: {
            listening: 60,
            speaking: 66,
            reading: 80,
            writing: 66,
            interaction: 66,
            mediation: 50,
            pronunciation: 75,
            grammar: 75,
            vocabulary: 80,
          },
          weakConcepts: ['subject_verb_agreement', 'listening_speed'],
          weakGrammarCategories: ['verbs', 'questions'],
          weakExerciseTypes: ['listening', 'listen_and_type'],
          remediationQueue: [
            {
              conceptId: 'c_listening_comp',
              conceptTitle: 'Auditory Dialogue Comprehension',
              skill: 'listening',
              sourceLessonIds: ['lesson_a1_1_4', 'lesson_a1_2_18'],
              exercises: [],
              completed: false,
            },
            {
              conceptId: 'c_grammar_concord',
              conceptTitle: 'Subject-Verb Concord & Negatives',
              skill: 'grammar',
              sourceLessonIds: ['lesson_a1_4_52'],
              exercises: [],
              completed: false,
            },
          ],
          remediationCompletedCount: 0,
          masteryBadgeEarned: false,
          lastEvaluatedAt: new Date().toISOString(),
        };
        break;
      }

      case 'A1_RETEST_READY': {
        const passedQueue = this.applyScenario('A1_REMEDIATION', options);
        updated.completedLessonIds = passedQueue.completedLessonIds;
        updated.a1AssessmentHistory = passedQueue.a1AssessmentHistory;
        if (updated.a1Mastery) {
          updated.a1Mastery.status = 'A1_RETEST_READY';
          updated.a1Mastery.remediationCompletedCount = 2;
          updated.a1Mastery.remediationQueue = updated.a1Mastery.remediationQueue.map((q) => ({ ...q, completed: true }));
        }
        break;
      }

      case 'A1_MASTERED':
      case 'A2_UNLOCKED': {
        updated.completedLessonIds = [...ALL_A1_LESSON_IDS];
        updated.lessonStars = ALL_A1_LESSON_IDS.reduce((acc, id) => ({ ...acc, [id]: 3 }), {});
        updated.totalXp = 6800;
        updated.gems = 1800;
        updated.streakDays = 30;
        updated.wordsMasteredCount = 980;
        updated.currentCEFR = 'A2';
        updated.certificatesEarned = [
          { cefr: 'A1', date: new Date().toISOString().split('T')[0], certificateId: `CERT_A1_${Date.now()}` },
        ];

        const passingAttempt: A1AssessmentAttempt = {
          id: `att_pass_${Date.now()}`,
          formType: 'FORM_A',
          attemptNumber: 1,
          cefrLevel: 'A1',
          totalScore: 18,
          maxScore: 20,
          scorePercent: 90,
          passed: true,
          isMastered: true,
          failedCriticalSkills: [],
          unmetThresholds: [],
          attemptedAt: new Date().toISOString(),
          durationSeconds: 840,
          skillBreakdown: {
            listening: { correct: 5, total: 5, percent: 100 },
            speaking: { correct: 3, total: 3, percent: 100 },
            reading: { correct: 5, total: 5, percent: 100 },
            writing: { correct: 3, total: 3, percent: 100 },
            grammar: { correct: 4, total: 4, percent: 100 },
            vocabulary: { correct: 5, total: 5, percent: 100 },
            interaction: { correct: 3, total: 3, percent: 100 },
            mediation: { correct: 2, total: 2, percent: 100 },
            pronunciation: { correct: 4, total: 4, percent: 100 },
          },
          weakQuestionIds: [],
          identifiedWeaknesses: [],
          recommendedReviewLessonIds: [],
          answersLog: [],
        };

        updated.a1AssessmentHistory = [passingAttempt];
        updated.a1Mastery = {
          status: 'A2_UNLOCKED',
          overallMasteryPercent: 95,
          lessonsCompletedCount: 90,
          reviewSessionsCompleted: 15,
          bestExitScorePercent: 90,
          assessmentPassed: true,
          isA2Unlocked: true,
          skillScores: {
            listening: 95,
            speaking: 90,
            reading: 98,
            writing: 92,
            interaction: 92,
            mediation: 88,
            pronunciation: 94,
            grammar: 96,
            vocabulary: 98,
          },
          weakConcepts: [],
          weakGrammarCategories: [],
          weakExerciseTypes: [],
          remediationQueue: [],
          remediationCompletedCount: 0,
          masteryBadgeEarned: true,
          masteredAt: new Date().toISOString(),
          lastEvaluatedAt: new Date().toISOString(),
        };
        break;
      }

      case 'A2_PARTIAL_ACCESS': {
        const mastered = this.applyScenario('A2_UNLOCKED', options);
        const a2Unit7LessonIds = ALL_A2_LESSON_IDS.slice(0, 15);
        updated.completedLessonIds = [...mastered.completedLessonIds, ...a2Unit7LessonIds];
        updated.lessonStars = {
          ...mastered.lessonStars,
          ...a2Unit7LessonIds.reduce((acc, id) => ({ ...acc, [id]: 3 }), {}),
        };
        updated.totalXp = 8500;
        updated.currentCEFR = 'A2';
        updated.a1Mastery = mastered.a1Mastery;
        updated.a1AssessmentHistory = mastered.a1AssessmentHistory;
        break;
      }

      case 'A2_COMPLETE':
      case 'A2_EXIT_READY': {
        const mastered = this.applyScenario('A2_UNLOCKED', options);
        updated.completedLessonIds = [...ALL_CURRICULUM_LESSON_IDS];
        updated.lessonStars = ALL_CURRICULUM_LESSON_IDS.reduce((acc, id) => ({ ...acc, [id]: 3 }), {});
        updated.totalXp = 19500;
        updated.gems = 3500;
        updated.streakDays = 60;
        updated.wordsMasteredCount = 2100;
        updated.currentCEFR = 'A2';
        updated.a1Mastery = mastered.a1Mastery;
        updated.a1AssessmentHistory = mastered.a1AssessmentHistory;
        updated.a2Mastery = {
          status: 'A2_READY_FOR_EXIT_TEST',
          overallMasteryPercent: 88,
          lessonsCompletedCount: 180,
          reviewSessionsCompleted: 20,
          assessmentPassed: false,
          isB1Unlocked: false,
          skillScores: {
            listening: 85,
            speaking: 82,
            reading: 88,
            writing: 84,
            interaction: 80,
            mediation: 78,
            pronunciation: 85,
            grammar: 86,
            vocabulary: 88,
          },
          weakConcepts: [],
          weakGrammarCategories: [],
          weakExerciseTypes: [],
          remediationQueue: [],
          remediationCompletedCount: 0,
          masteryBadgeEarned: false,
          lastEvaluatedAt: new Date().toISOString(),
        };
        break;
      }

      case 'A2_EXIT_FAILED': {
        const ready = this.applyScenario('A2_EXIT_READY', options);
        updated.completedLessonIds = ready.completedLessonIds;
        updated.lessonStars = ready.lessonStars;
        updated.currentCEFR = 'A2';
        updated.a1Mastery = ready.a1Mastery;
        updated.a1AssessmentHistory = ready.a1AssessmentHistory;

        const failedA2Attempt: any = {
          id: `att_a2_fail_${Date.now()}`,
          formType: 'FORM_A',
          attemptNumber: 1,
          cefrLevel: 'A2',
          totalScore: 32,
          maxScore: 50,
          scorePercent: 64,
          passed: false,
          isMastered: false,
          failedCriticalSkills: ['grammar', 'mediation'],
          unmetThresholds: ['Overall score 64% is below 80% pass threshold', 'Grammar skill score 65% is below 75% threshold'],
          attemptedAt: new Date().toISOString(),
          durationSeconds: 1240,
          skillBreakdown: {
            listening: { correct: 6, total: 7, percent: 85 },
            speaking: { correct: 4, total: 5, percent: 80 },
            reading: { correct: 5, total: 6, percent: 83 },
            writing: { correct: 4, total: 5, percent: 80 },
            grammar: { correct: 6, total: 10, percent: 60 },
            vocabulary: { correct: 6, total: 7, percent: 85 },
            interaction: { correct: 3, total: 4, percent: 75 },
            mediation: { correct: 1, total: 3, percent: 33 },
            pronunciation: { correct: 4, total: 5, percent: 80 },
          },
          weakQuestionIds: ['a2_exit_a_grammar_01', 'a2_exit_a_trans_01'],
          identifiedWeaknesses: ['Past Continuous vs Past Simple Interruption', 'Second Conditional translation'],
          recommendedReviewLessonIds: ['lesson_a2_8_110', 'lesson_a2_11_162'],
          answersLog: [],
        };

        updated.a2AssessmentHistory = [failedA2Attempt];
        updated.a2Mastery = {
          status: 'A2_REMEDIATION_REQUIRED',
          overallMasteryPercent: 64,
          lessonsCompletedCount: 180,
          reviewSessionsCompleted: 22,
          assessmentPassed: false,
          isB1Unlocked: false,
          skillScores: {
            listening: 85,
            speaking: 80,
            reading: 83,
            writing: 80,
            interaction: 75,
            mediation: 33,
            pronunciation: 80,
            grammar: 60,
            vocabulary: 85,
          },
          weakConcepts: ['Past Continuous Interruption', 'Second Conditional Nuance'],
          weakGrammarCategories: ['past_tenses', 'conditionals'],
          weakExerciseTypes: ['multiple_choice', 'translation'],
          remediationQueue: [
            {
              conceptId: 'c_a2_past_cont',
              conceptTitle: 'Past Continuous vs Past Simple',
              skill: 'grammar',
              sourceLessonIds: ['lesson_a2_8_110'],
              exercises: [],
              completed: false,
            },
          ],
          remediationCompletedCount: 0,
          masteryBadgeEarned: false,
          lastEvaluatedAt: new Date().toISOString(),
        };
        break;
      }

      case 'A2_MASTERED':
      case 'A2_MASTERED_B1_READY': {
        const ready = this.applyScenario('A2_EXIT_READY', options);
        updated.completedLessonIds = ready.completedLessonIds;
        updated.lessonStars = ready.lessonStars;
        updated.totalXp = 24000;
        updated.gems = 4500;
        updated.streakDays = 75;
        updated.wordsMasteredCount = 2300;
        updated.currentCEFR = 'B1';
        updated.certificatesEarned = [
          ...(ready.certificatesEarned || []),
          { cefr: 'A2', date: new Date().toISOString().split('T')[0], certificateId: `CERT_A2_${Date.now()}` },
        ];

        const passingA2Attempt: any = {
          id: `att_a2_pass_${Date.now()}`,
          formType: 'FORM_A',
          attemptNumber: 1,
          cefrLevel: 'A2',
          totalScore: 46,
          maxScore: 50,
          scorePercent: 92,
          passed: true,
          isMastered: true,
          failedCriticalSkills: [],
          unmetThresholds: [],
          attemptedAt: new Date().toISOString(),
          durationSeconds: 1100,
          skillBreakdown: {
            listening: { correct: 7, total: 7, percent: 100 },
            speaking: { correct: 5, total: 5, percent: 100 },
            reading: { correct: 6, total: 6, percent: 100 },
            writing: { correct: 5, total: 5, percent: 100 },
            grammar: { correct: 9, total: 10, percent: 90 },
            vocabulary: { correct: 7, total: 7, percent: 100 },
            interaction: { correct: 4, total: 4, percent: 100 },
            mediation: { correct: 3, total: 3, percent: 100 },
            pronunciation: { correct: 5, total: 5, percent: 100 },
          },
          weakQuestionIds: [],
          identifiedWeaknesses: [],
          recommendedReviewLessonIds: [],
          answersLog: [],
        };

        updated.a2AssessmentHistory = [passingA2Attempt];
        updated.a2Mastery = {
          status: 'A2_MASTERED',
          overallMasteryPercent: 96,
          lessonsCompletedCount: 180,
          reviewSessionsCompleted: 25,
          bestExitScorePercent: 92,
          assessmentPassed: true,
          isB1Unlocked: true,
          skillScores: {
            listening: 96,
            speaking: 94,
            reading: 98,
            writing: 94,
            interaction: 95,
            mediation: 92,
            pronunciation: 96,
            grammar: 95,
            vocabulary: 98,
          },
          weakConcepts: [],
          weakGrammarCategories: [],
          weakExerciseTypes: [],
          remediationQueue: [],
          remediationCompletedCount: 0,
          masteryBadgeEarned: true,
          masteredAt: new Date().toISOString(),
          lastEvaluatedAt: new Date().toISOString(),
        };
        break;
      }

      case 'PREMIUM_USER':
        updated.isPro = true;
        updated.subscriptionTier = 'pro_annual';
        updated.hearts = 9999;
        updated.maxHearts = 9999;
        break;

      case 'PREMIUM_LOCKED':
        updated.isPro = false;
        updated.subscriptionTier = 'free';
        updated.hearts = 5;
        updated.maxHearts = 5;
        break;
    }

    return this.saveDeveloperProfile(updated);
  }

  /**
   * Toggles completion for any specific lesson across all 270 lessons.
   */
  public toggleLessonCompletion(lessonId: string, forceStatus?: boolean): UserAcademyProfile {
    const profile = this.getDeveloperProfile();
    const currentList = new Set(profile.completedLessonIds || []);
    const shouldBeComplete = forceStatus !== undefined ? forceStatus : !currentList.has(lessonId);

    if (shouldBeComplete) {
      currentList.add(lessonId);
      profile.lessonStars = { ...profile.lessonStars, [lessonId]: profile.lessonStars[lessonId] || 3 };
      profile.totalXp = (profile.totalXp || 0) + 50;
    } else {
      currentList.delete(lessonId);
      const newStars = { ...profile.lessonStars };
      delete newStars[lessonId];
      profile.lessonStars = newStars;
    }

    profile.completedLessonIds = Array.from(currentList);
    return this.saveDeveloperProfile(profile);
  }

  /**
   * Batch sets progress.
   */
  public batchSetLessonCompletion(lessonIds: string[], complete: boolean): UserAcademyProfile {
    const profile = this.getDeveloperProfile();
    const set = new Set(profile.completedLessonIds || []);
    const stars = { ...profile.lessonStars };

    lessonIds.forEach((id) => {
      if (complete) {
        set.add(id);
        stars[id] = 3;
      } else {
        set.delete(id);
        delete stars[id];
      }
    });

    profile.completedLessonIds = Array.from(set);
    profile.lessonStars = stars;
    return this.saveDeveloperProfile(profile);
  }

  /**
   * Sets exact XP value.
   */
  public setXp(amount: number): UserAcademyProfile {
    const profile = this.getDeveloperProfile();
    profile.totalXp = Math.max(0, amount);
    return this.saveDeveloperProfile(profile);
  }

  /**
   * Sets exact gems.
   */
  public setGems(amount: number): UserAcademyProfile {
    const profile = this.getDeveloperProfile();
    profile.gems = Math.max(0, amount);
    return this.saveDeveloperProfile(profile);
  }

  /**
   * Sets streak days.
   */
  public setStreak(days: number): UserAcademyProfile {
    const profile = this.getDeveloperProfile();
    profile.streakDays = Math.max(0, days);
    return this.saveDeveloperProfile(profile);
  }

  /**
   * Sets hearts.
   */
  public setHearts(hearts: number): UserAcademyProfile {
    const profile = this.getDeveloperProfile();
    profile.hearts = Math.max(0, hearts);
    return this.saveDeveloperProfile(profile);
  }

  /**
   * Runs diagnostic answer evaluation on an exercise.
   * Checks for potential evaluation defects such as false positives/negatives.
   */
  public testExerciseAnswer(
    exercise: Exercise,
    response: ExerciseUserResponse
  ): DiagnosticEvaluationReport {
    const normalized = normalizeExercise(exercise);
    const result: ExerciseEvaluationResult = evaluateExercise(normalized, response);

    const diagnosticsDetails: string[] = [];
    let potentialFalseNegative = false;
    let potentialFalsePositive = false;

    // Check normalization differences
    const wasNormalized = normalized.type !== exercise.type || normalized.targetSentence !== exercise.targetSentence;
    if (wasNormalized) {
      diagnosticsDetails.push(`Exercise normalized: Type mapped from "${exercise.type}" to "${normalized.type}".`);
    }

    // Check word bank presence
    const wordBankPresent = Array.isArray(normalized.wordBank) && normalized.wordBank.length > 0;
    if (normalized.type === 'word_ordering' && !wordBankPresent) {
      diagnosticsDetails.push('Warning: Exercise type is word_ordering but no wordBank tokens found.');
    }

    // Check speech targets
    const speechTargetPresent = Boolean(normalized.targetSentence || normalized.audioText);
    if (normalized.type === 'speaking' && !speechTargetPresent) {
      diagnosticsDetails.push('Warning: Speaking exercise lacks both targetSentence and audioText.');
    }

    // False negative check (User provided right sentence with different casing/punctuation)
    if (!result.isCorrect && response.typedAnswer && normalized.correctAnswer) {
      const userClean = response.typedAnswer.trim().toLowerCase().replace(/[.,!?'"]/g, '');
      const expectedClean = String(normalized.correctAnswer).trim().toLowerCase().replace(/[.,!?'"]/g, '');
      if (userClean === expectedClean) {
        potentialFalseNegative = true;
        diagnosticsDetails.push('Potential False Negative: Typed answer matches expected text when stripped of punctuation/casing.');
      }
    }

    // False positive check (User provided empty answer yet marked correct)
    if (result.isCorrect && !response.typedAnswer && !response.selectedOptionId && (!response.constructedWords || response.constructedWords.length === 0) && !response.spokenText) {
      potentialFalsePositive = true;
      diagnosticsDetails.push('Potential False Positive: Empty response was evaluated as correct.');
    }

    return {
      exerciseId: normalized.id,
      rawType: exercise.type,
      canonicalType: normalized.type,
      isCorrect: result.isCorrect,
      scoreXp: result.scoreXp,
      expectedAnswer: result.correctAnswerDisplay,
      submittedAnswer: result.matchedAnswer || '(empty)',
      explanation: result.explanation,
      feedbackMessage: result.feedbackMessage,
      diagnostics: {
        normalizationApplied: wasNormalized,
        wordBankPresent,
        speechTargetPresent,
        potentialFalseNegative,
        potentialFalsePositive,
        details: diagnosticsDetails,
      },
    };
  }
}

export const DeveloperTestService = new DeveloperTestServiceManager();
