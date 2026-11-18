import {
  UserAcademyProfile,
  LessonProgressRecord,
  ExtendedExerciseType,
  MasteryState,
  UnitMasteryRecord,
  UnitMasteryStatus,
  UnitAssessmentAttempt,
  SkillTag,
  Exercise,
  A1MasteryRecord,
  A1MasteryState,
  A1AssessmentAttempt,
  A1RemediationQueueItem,
} from '../types';
import { AuthService } from './AuthService';
import { CurriculumService } from './CurriculumService';
import { UNIT_1_KNOWLEDGE_GRAPH } from '../data/unit1KnowledgeGraph';
import { UNIT_1_REVIEW_EXERCISES } from '../data/unit1ReviewData';
import { UNIT_1_ASSESSMENT_BLUEPRINT } from '../data/unit1MasteryAssessmentData';
import { A1_MASTER_KNOWLEDGE_GRAPH } from '../data/a1MasterKnowledgeGraph';
import {
  A1_EXIT_ASSESSMENT_BLUEPRINT,
  A1_EXIT_ASSESSMENT_CONFIG,
  A1_EXIT_EXERCISES_FORM_A,
  A1_EXIT_EXERCISES_FORM_B_RETEST,
  getA1ExitExerciseWeight,
} from '../data/a1ExitAssessmentData';
import {
  A2_EXIT_ASSESSMENT_BLUEPRINT,
  A2_EXIT_ASSESSMENT_CONFIG,
  A2_EXIT_EXERCISES_FORM_A,
  A2_EXIT_EXERCISES_FORM_B_RETEST,
  getA2ExitExerciseWeight,
} from '../data/a2ExitAssessmentData';
import {
  A2MasteryRecord,
  A2MasteryState,
  A2AssessmentAttempt,
  A2RemediationQueueItem,
} from '../types';

const UNIT_1_LESSON_IDS = Array.from({ length: 15 }, (_, i) => `lesson_a1_1_${i + 1}`);

// All 90 production lessons across Units 1–6 (CEFR A1)
export const ALL_A1_LESSON_IDS: string[] = [
  ...Array.from({ length: 15 }, (_, i) => `lesson_a1_1_${i + 1}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a1_2_${i + 16}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a1_3_${i + 31}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a1_4_${i + 46}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a1_5_${i + 61}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a1_6_${i + 76}`),
];

// All 180 production lessons across Units 7–18 (CEFR A2)
export const ALL_A2_LESSON_IDS: string[] = [
  ...Array.from({ length: 15 }, (_, i) => `lesson_a2_7_${i + 91}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a2_8_${i + 106}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a2_9_${i + 121}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a2_10_${i + 136}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a2_11_${i + 151}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a2_12_${i + 166}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a2_13_${i + 181}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a2_14_${i + 196}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a2_15_${i + 211}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a2_16_${i + 226}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a2_17_${i + 241}`),
  ...Array.from({ length: 15 }, (_, i) => `lesson_a2_18_${i + 256}`),
];

// Total 270 Production Lessons across A1 & A2 (Units 1–18)
export const ALL_CURRICULUM_LESSON_IDS: string[] = [
  ...ALL_A1_LESSON_IDS,
  ...ALL_A2_LESSON_IDS,
];

/**
 * CANONICAL A2 UNLOCK GATE
 * Single authoritative contract for unlocking CEFR A2.
 * Requires:
 * 1. All 90 A1 lessons completed
 * 2. Current valid A1 Exit Assessment passed (score >= 80%)
 * 3. All critical skill minimum thresholds satisfied (no failed critical skills)
 */
export function canUnlockA2(userProfile?: UserAcademyProfile): boolean {
  const user = userProfile || AuthService.getCurrentUser();
  const completedSet = new Set(user.completedLessonIds || []);
  const all90Complete = ALL_A1_LESSON_IDS.every((id) => completedSet.has(id));
  if (!all90Complete) return false;

  const assessmentAttempts = user.a1AssessmentHistory || [];
  const validPassingAttempt = assessmentAttempts.find(
    (att) =>
      att.passed === true &&
      att.scorePercent >= A1_EXIT_ASSESSMENT_CONFIG.overallPassScorePercent &&
      (!att.failedCriticalSkills || att.failedCriticalSkills.length === 0) &&
      (!att.unmetThresholds || att.unmetThresholds.length === 0)
  );

  return Boolean(validPassingAttempt);
}

/**
 * CANONICAL B1 UNLOCK GATE
 * Single authoritative contract for unlocking CEFR B1.
 * Requires:
 * 1. All 180 A2 lessons completed (Lessons 91–270)
 * 2. Current valid A2 Exit Assessment passed (score >= 80%)
 * 3. All critical skill minimum thresholds satisfied
 */
export function canUnlockB1(userProfile?: UserAcademyProfile): boolean {
  const user = userProfile || AuthService.getCurrentUser();
  const completedSet = new Set(user.completedLessonIds || []);
  const allA2Complete = ALL_A2_LESSON_IDS.every((id) => completedSet.has(id));
  if (!allA2Complete) return false;

  const assessmentAttempts = user.a2AssessmentHistory || [];
  const validPassingAttempt = assessmentAttempts.find(
    (att) =>
      att.passed === true &&
      att.scorePercent >= A2_EXIT_ASSESSMENT_CONFIG.overallPassScorePercent &&
      (!att.failedCriticalSkills || att.failedCriticalSkills.length === 0) &&
      (!att.unmetThresholds || att.unmetThresholds.length === 0)
  );

  return Boolean(validPassingAttempt);
}

class ProgressServiceManager {
  public calculateMasteryState(accuracyPercent: number): { state: MasteryState; stars: number } {
    if (accuracyPercent >= 90) return { state: 'mastered', stars: 3 };
    if (accuracyPercent >= 80) return { state: 'completed', stars: 3 };
    if (accuracyPercent >= 60) return { state: 'practicing', stars: 2 };
    return { state: 'learning', stars: 1 };
  }

  public recordLessonAttempt(
    lessonId: string,
    totalCorrect: number,
    totalQuestions: number,
    weakTypes: ExtendedExerciseType[]
  ): UserAcademyProfile {
    const user = AuthService.getCurrentUser();
    const accuracyPercent = Math.round((totalCorrect / Math.max(totalQuestions, 1)) * 100);
    const { state, stars } = this.calculateMasteryState(accuracyPercent);

    const isNewCompletion = !user.completedLessonIds.includes(lessonId);
    const xpEarned = isNewCompletion ? 150 + stars * 20 : 0;
    const gemsEarned = isNewCompletion ? stars * 10 : 0;

    const existingRecord = user.detailedLessonProgress?.[lessonId];

    const record: LessonProgressRecord = {
      userId: user.id,
      lessonId,
      status: state,
      score: totalCorrect * 10,
      accuracyPercent,
      attemptsCount: (existingRecord?.attemptsCount || 0) + 1,
      timeSpentSeconds: existingRecord?.timeSpentSeconds || 0,
      lastAttemptDate: new Date().toISOString(),
      bestScore: Math.max(existingRecord?.bestScore || 0, totalCorrect * 10),
      weakExerciseTypes: weakTypes,
      vocabularyMasteredIds: [],
      grammarPatternsMastered: [],
    };

    const newCompletedLessonIds = Array.from(new Set([...user.completedLessonIds, lessonId]));
    const newStars = Math.max(user.lessonStars[lessonId] || 0, stars);
    const newXp = user.totalXp + xpEarned;
    const newGems = user.gems + gemsEarned;
    const newWords = user.wordsMasteredCount;

    const updatedJourneys = (user.learningJourneys || []).map((j) => {
      if (j.journeyId === user.activeJourneyId || j.config.targetLanguage === user.learningLanguage) {
        return {
          ...j,
          completedLessonIds: Array.from(new Set([...j.completedLessonIds, lessonId])),
          lessonStars: {
            ...j.lessonStars,
            [lessonId]: Math.max(j.lessonStars[lessonId] || 0, stars),
          },
          totalXp: j.totalXp + xpEarned,
          wordsMasteredCount: j.wordsMasteredCount,
          lastActiveAt: new Date().toISOString(),
        };
      }
      return j;
    });

    // Update base user
    const updated = AuthService.updateUserProfile({
      totalXp: newXp,
      gems: newGems,
      wordsMasteredCount: newWords,
      completedLessonIds: newCompletedLessonIds,
      lessonStars: {
        ...user.lessonStars,
        [lessonId]: newStars,
      },
      detailedLessonProgress: {
        ...user.detailedLessonProgress,
        [lessonId]: record,
      },
      learningJourneys: updatedJourneys,
    });

    // Re-evaluate Unit 1 and A1 Masteries automatically
    this.refreshUnit1Mastery(updated);
    this.refreshA1Mastery(updated);

    return AuthService.getCurrentUser();
  }

  // ============================================================================
  // A1 COMPREHENSIVE CONSOLIDATION & A1 EXIT MASTERY ENGINE (LESSONS 1–90)
  // ============================================================================

  public calculateA1Mastery(userProfile?: UserAcademyProfile): A1MasteryRecord {
    const user = userProfile || AuthService.getCurrentUser();
    const completedSet = new Set(user.completedLessonIds || []);
    const completedCount = ALL_A1_LESSON_IDS.filter((id) => completedSet.has(id)).length;
    const progressMap = user.detailedLessonProgress || {};

    // Collect accuracy across all completed A1 lessons
    const completedRecords = ALL_A1_LESSON_IDS.map((id) => progressMap[id]).filter(Boolean);
    const avgLessonAccuracy = completedRecords.length > 0
      ? completedRecords.reduce((acc, r) => acc + (r.accuracyPercent || 0), 0) / completedRecords.length
      : 0;

    // A1 Assessment history
    const assessmentAttempts = user.a1AssessmentHistory || [];
    const bestAssessmentAttempt = assessmentAttempts.length > 0
      ? [...assessmentAttempts].sort((a, b) => b.scorePercent - a.scorePercent)[0]
      : undefined;

    const latestAttempt = assessmentAttempts.length > 0
      ? assessmentAttempts[assessmentAttempts.length - 1]
      : undefined;

    const hasPassedAssessment = bestAssessmentAttempt ? bestAssessmentAttempt.passed : false;
    const bestExitScorePercent = bestAssessmentAttempt?.scorePercent;

    // Detect weak concepts & weak grammar across all 90 lessons
    const weakConcepts: string[] = [];
    const weakGrammarCategories: string[] = [];
    const weakExerciseTypeSet = new Set<string>();

    ALL_A1_LESSON_IDS.forEach((lessonId) => {
      const rec = progressMap[lessonId];
      if (rec) {
        if (rec.accuracyPercent < 75) {
          const matchingKg = A1_MASTER_KNOWLEDGE_GRAPH.filter((kg) =>
            kg.introducedInLesson === lessonId || (kg.practicedInLessons && kg.practicedInLessons.includes(lessonId))
          );
          matchingKg.forEach((kg) => {
            if (!weakConcepts.includes(kg.title)) weakConcepts.push(kg.title);
            if (kg.category === 'grammar' && !weakGrammarCategories.includes(kg.title)) {
              weakGrammarCategories.push(kg.title);
            }
          });
        }
        if (Array.isArray(rec.weakExerciseTypes)) {
          rec.weakExerciseTypes.forEach((wt) => weakExerciseTypeSet.add(wt));
        }
      }
    });

    // Include weaknesses from latest assessment attempt
    if (latestAttempt && latestAttempt.identifiedWeaknesses) {
      latestAttempt.identifiedWeaknesses.forEach((w) => {
        if (!weakConcepts.includes(w)) weakConcepts.push(w);
      });
    }

    // Calculate baseline across 9 skills
    const baseProgressRatio = completedCount / 90;
    const baseDomainBaseline = Math.min(100, Math.round(baseProgressRatio * 85));

    const skillScores: Record<SkillTag, number> = {
      vocabulary: Math.min(100, Math.round(baseDomainBaseline * 0.96 + (avgLessonAccuracy > 80 ? 4 : 0))),
      grammar: Math.min(100, Math.round(baseDomainBaseline * 0.94 + (avgLessonAccuracy > 80 ? 6 : 0))),
      listening: Math.min(100, Math.round(baseDomainBaseline * 0.92)),
      reading: Math.min(100, Math.round(baseDomainBaseline * 0.97)),
      speaking: Math.min(100, Math.round(baseDomainBaseline * 0.89)),
      writing: Math.min(100, Math.round(baseDomainBaseline * 0.90)),
      mediation: Math.min(100, Math.round(baseDomainBaseline * 0.88)),
      interaction: Math.min(100, Math.round(baseDomainBaseline * 0.91)),
      pronunciation: Math.min(100, Math.round(baseDomainBaseline * 0.89)),
    };

    // Blend with best assessment attempt if taken
    if (bestAssessmentAttempt && bestAssessmentAttempt.skillBreakdown) {
      Object.entries(bestAssessmentAttempt.skillBreakdown).forEach(([skill, breakdown]) => {
        if (skill in skillScores) {
          skillScores[skill as SkillTag] = Math.round(
            skillScores[skill as SkillTag] * 0.3 + breakdown.percent * 0.7
          );
        }
      });
    }

    const existingMasteryRecord = user.a1Mastery;
    const existingQueue = existingMasteryRecord?.remediationQueue || [];
    const remediationCompletedCount = existingQueue.filter((q) => q.completed).length;

    // Canonical A2 Unlock evaluation
    const a2Unlocked = canUnlockA2(user);

    // Determine A1 Mastery State strictly
    let status: A1MasteryState = 'A1_NOT_STARTED';

    if (a2Unlocked) {
      status = 'A1_MASTERED';
    } else if (completedCount === 0) {
      status = 'A1_NOT_STARTED';
    } else if (completedCount < 90) {
      status = 'A1_IN_PROGRESS';
    } else if (latestAttempt && !latestAttempt.passed) {
      // Check if remediation is active or completed
      if (existingQueue.length > 0 && existingQueue.every((q) => q.completed)) {
        status = 'A1_RETEST_READY';
      } else {
        status = 'A1_REMEDIATION_REQUIRED';
      }
    } else if (avgLessonAccuracy < 75) {
      status = 'A1_REVIEW_RECOMMENDED';
    } else {
      status = 'A1_READY_FOR_EXIT_TEST';
    }

    // Overall mastery score percentage calculation (Evidence-based)
    let overallMasteryPercent = 0;
    if (a2Unlocked && bestExitScorePercent) {
      overallMasteryPercent = Math.min(100, Math.round(bestExitScorePercent * 0.75 + avgLessonAccuracy * 0.25));
    } else if (completedCount === 90) {
      overallMasteryPercent = Math.min(75, Math.round(avgLessonAccuracy * 0.75));
    } else {
      overallMasteryPercent = Math.round((completedCount / 90) * 60);
    }

    const isA2UnlockedState = a2Unlocked;
    const masteryBadgeEarned = a2Unlocked;

    // Build remediation queue if in remediation and empty
    let remediationQueue = existingQueue;
    if (status === 'A1_REMEDIATION_REQUIRED' && remediationQueue.length === 0) {
      remediationQueue = this.generateA1RemediationQueue(user, weakConcepts);
    }

    return {
      status,
      overallMasteryPercent,
      lessonsCompletedCount: completedCount,
      reviewSessionsCompleted: existingMasteryRecord?.reviewSessionsCompleted || 0,
      bestExitScorePercent,
      assessmentPassed: a2Unlocked,
      isA2Unlocked: isA2UnlockedState,
      skillScores,
      weakConcepts: Array.from(new Set(weakConcepts)),
      weakGrammarCategories: Array.from(new Set(weakGrammarCategories)),
      weakExerciseTypes: Array.from(weakExerciseTypeSet),
      remediationQueue,
      remediationCompletedCount,
      masteryBadgeEarned,
      masteredAt: isA2UnlockedState ? (existingMasteryRecord?.masteredAt || new Date().toISOString()) : undefined,
      lastEvaluatedAt: new Date().toISOString(),
    };
  }

  public refreshA1Mastery(userProfile?: UserAcademyProfile): UserAcademyProfile {
    const user = userProfile || AuthService.getCurrentUser();
    const masteryRecord = this.calculateA1Mastery(user);

    return AuthService.updateUserProfile({
      a1Mastery: masteryRecord,
    });
  }

  public isA1ExitAssessmentUnlocked(userProfile?: UserAcademyProfile): boolean {
    const user = userProfile || AuthService.getCurrentUser();
    const completedSet = new Set(user.completedLessonIds || []);
    // All 90 lessons must be completed to unlock A1 exit assessment
    return ALL_A1_LESSON_IDS.every((id) => completedSet.has(id));
  }

  public isA2Unlocked(userProfile?: UserAcademyProfile): boolean {
    // Canonical Single Gate
    return canUnlockA2(userProfile);
  }

  public getA1ExitAssessmentExercises(formType: 'FORM_A' | 'FORM_B_RETEST' = 'FORM_A'): Exercise[] {
    if (formType === 'FORM_B_RETEST') {
      return [...A1_EXIT_EXERCISES_FORM_B_RETEST];
    }
    return [...A1_EXIT_EXERCISES_FORM_A];
  }

  public completeRemediationConcept(conceptId: string): UserAcademyProfile {
    const user = AuthService.getCurrentUser();
    const existingMastery = user.a1Mastery || this.calculateA1Mastery(user);
    const updatedQueue = (existingMastery.remediationQueue || []).map((q) => {
      if (q.conceptId === conceptId) {
        return { ...q, completed: true, score: 100 };
      }
      return q;
    });

    const updatedUser = AuthService.updateUserProfile({
      a1Mastery: {
        ...existingMastery,
        remediationQueue: updatedQueue,
        remediationCompletedCount: updatedQueue.filter((q) => q.completed).length,
      },
    });

    return this.refreshA1Mastery(updatedUser);
  }

  public evaluateA1ExitAssessmentAttempt(
    totalCorrect: number,
    totalQuestions: number,
    durationSeconds: number,
    skillBreakdown: Record<SkillTag, { correct: number; total: number; percent: number }>,
    identifiedWeaknesses: string[],
    answersLog: { exerciseId: string; isCorrect: boolean; userResponse?: any }[],
    formType: 'FORM_A' | 'FORM_B_RETEST' = 'FORM_A'
  ): { user: UserAcademyProfile; attempt: A1AssessmentAttempt } {
    const user = AuthService.getCurrentUser();

    // Authoritative 100-Point Weighted Scoring Model
    let weightedPointsEarned = 0;
    const scoredExerciseIds = new Set<string>();

    answersLog.forEach((ans) => {
      if (!scoredExerciseIds.has(ans.exerciseId)) {
        scoredExerciseIds.add(ans.exerciseId);
        const weight = getA1ExitExerciseWeight(ans.exerciseId);
        if (ans.isCorrect) {
          weightedPointsEarned += weight;
        }
      }
    });

    // Score percent strictly based on official 100-point blueprint denominator (never inflated on partial/incomplete exams)
    const officialTotalPoints = A1_EXIT_ASSESSMENT_BLUEPRINT.totalPoints || 100;
    const scorePercent = Math.max(0, Math.min(100, Math.round((weightedPointsEarned / officialTotalPoints) * 100)));

    // Check critical skill minimum thresholds
    const failedCriticalSkills: SkillTag[] = [];
    const unmetThresholds: string[] = [];

    if (scorePercent < A1_EXIT_ASSESSMENT_CONFIG.overallPassScorePercent) {
      unmetThresholds.push(
        `Overall Score ${scorePercent}% is below the required ${A1_EXIT_ASSESSMENT_CONFIG.overallPassScorePercent}% pass threshold`
      );
    }

    Object.entries(skillBreakdown).forEach(([skillKey, data]) => {
      const skill = skillKey as SkillTag;
      const minRequired = A1_EXIT_ASSESSMENT_CONFIG.criticalSkillMinimums[skill] || 70;
      if (data.percent < minRequired) {
        failedCriticalSkills.push(skill);
        unmetThresholds.push(
          `${skill.toUpperCase()} accuracy of ${data.percent}% is below the minimum ${minRequired}% threshold`
        );
      }
    });

    const passed = unmetThresholds.length === 0 && scorePercent >= A1_EXIT_ASSESSMENT_CONFIG.overallPassScorePercent;
    const isMastered = passed && scorePercent >= A1_EXIT_ASSESSMENT_CONFIG.overallMasteryScorePercent;

    // Identify recommended review lessons based on weak question tags and weaknesses
    const recommendedLessonsSet = new Set<string>();
    answersLog.filter((a) => !a.isCorrect).forEach((ans) => {
      const matchingKg = A1_MASTER_KNOWLEDGE_GRAPH.find((kg) =>
        ans.exerciseId.includes(kg.id) || (kg.skillDomains && kg.skillDomains.some((sd) => ans.exerciseId.includes(sd)))
      );
      if (matchingKg) {
        if (matchingKg.introducedInLesson) recommendedLessonsSet.add(matchingKg.introducedInLesson);
        if (matchingKg.practicedInLessons) matchingKg.practicedInLessons.slice(0, 2).forEach((l) => recommendedLessonsSet.add(l));
      }
    });

    const existingAttempts = user.a1AssessmentHistory || [];
    const attemptNumber = existingAttempts.length + 1;

    const attempt: A1AssessmentAttempt = {
      id: `attempt_a1_exit_${Date.now()}`,
      formType,
      attemptNumber,
      cefrLevel: 'A1',
      totalScore: Math.round(weightedPointsEarned),
      maxScore: officialTotalPoints,
      scorePercent,
      passed,
      isMastered,
      failedCriticalSkills,
      unmetThresholds,
      attemptedAt: new Date().toISOString(),
      durationSeconds,
      skillBreakdown,
      weakQuestionIds: answersLog.filter((a) => !a.isCorrect).map((a) => a.exerciseId),
      identifiedWeaknesses,
      recommendedReviewLessonIds: Array.from(recommendedLessonsSet),
      answersLog,
    };

    const updatedHistory = [...existingAttempts, attempt];
    const xpEarned = passed ? (isMastered ? 600 : 500) : 150;
    const gemsEarned = passed ? 100 : 25;

    // Award official A1 certificate if passed
    const existingCertificates = user.certificatesEarned || [];
    const hasA1Cert = existingCertificates.some((c) => c.certificateId === 'cert_a1_mastery_breakthrough');
    const updatedCertificates = (passed && !hasA1Cert)
      ? [
          ...existingCertificates,
          {
            cefr: 'A1',
            date: new Date().toISOString(),
            certificateId: 'cert_a1_mastery_breakthrough',
          },
        ]
      : existingCertificates;

    const updatedUser = AuthService.updateUserProfile({
      totalXp: user.totalXp + xpEarned,
      gems: user.gems + gemsEarned,
      certificatesEarned: updatedCertificates,
      a1AssessmentHistory: updatedHistory,
    });

    // Refresh A1 Mastery state & generate remediation queue if failed
    const finalUser = this.refreshA1Mastery(updatedUser);

    return { user: finalUser, attempt };
  }

  public generateA1RemediationQueue(user: UserAcademyProfile, weakConceptTitles: string[]): A1RemediationQueueItem[] {
    const queue: A1RemediationQueueItem[] = [];

    weakConceptTitles.slice(0, 5).forEach((title) => {
      const kg = A1_MASTER_KNOWLEDGE_GRAPH.find((k) => k.title.toLowerCase() === title.toLowerCase()) ||
        A1_MASTER_KNOWLEDGE_GRAPH.find((k) => title.toLowerCase().includes(k.title.toLowerCase()));

      if (kg) {
        // Collect relevant exercises from Form B or review pools
        const relevantExercises = A1_EXIT_EXERCISES_FORM_B_RETEST.filter((ex) =>
          ex.grammarTarget?.toLowerCase().includes(kg.title.toLowerCase()) ||
          ex.skillTags.some((st) => kg.skillDomains.includes(st))
        ).slice(0, 3);

        queue.push({
          conceptId: kg.id,
          conceptTitle: kg.title,
          skill: kg.skillDomains[0] || 'grammar',
          sourceLessonIds: [kg.introducedInLesson, ...(kg.practicedInLessons || [])].filter(Boolean),
          exercises: relevantExercises.length > 0 ? relevantExercises : A1_EXIT_EXERCISES_FORM_B_RETEST.slice(0, 2),
          completed: false,
        });
      }
    });

    // Fallback if no matching concepts
    if (queue.length === 0) {
      const defaultKgs = A1_MASTER_KNOWLEDGE_GRAPH.slice(0, 3);
      defaultKgs.forEach((kg) => {
        queue.push({
          conceptId: kg.id,
          conceptTitle: kg.title,
          skill: kg.skillDomains[0] || 'grammar',
          sourceLessonIds: [kg.introducedInLesson],
          exercises: A1_EXIT_EXERCISES_FORM_B_RETEST.slice(0, 2),
          completed: false,
        });
      });
    }

    return queue;
  }

  public recordA1RemediationCompletion(
    conceptId: string,
    totalCorrect: number,
    totalQuestions: number
  ): UserAcademyProfile {
    const user = AuthService.getCurrentUser();
    const currentMastery = this.calculateA1Mastery(user);
    const existingQueue = currentMastery.remediationQueue || [];

    const accuracyPercent = Math.round((totalCorrect / Math.max(totalQuestions, 1)) * 100);

    const updatedQueue = existingQueue.map((item) => {
      if (item.conceptId === conceptId) {
        return {
          ...item,
          completed: true,
          accuracyPercent,
        };
      }
      return item;
    });

    const allCompleted = updatedQueue.every((q) => q.completed);
    const newStatus: A1MasteryState = allCompleted ? 'A1_RETEST_READY' : 'A1_REMEDIATION_REQUIRED';

    const xpEarned = 50 + totalCorrect * 10;
    const gemsEarned = 10;

    const updated = AuthService.updateUserProfile({
      totalXp: user.totalXp + xpEarned,
      gems: user.gems + gemsEarned,
      a1Mastery: {
        ...currentMastery,
        status: newStatus,
        remediationQueue: updatedQueue,
        remediationCompletedCount: updatedQueue.filter((q) => q.completed).length,
        lastEvaluatedAt: new Date().toISOString(),
      },
    });

    return updated;
  }

  public getA1AdaptiveReviewExercises(userProfile?: UserAcademyProfile, maxCount: number = 10): Exercise[] {
    const user = userProfile || AuthService.getCurrentUser();
    const mastery = this.calculateA1Mastery(user);
    const weakConceptsLower = (mastery.weakConcepts || []).map((w) => w.toLowerCase());
    const weakTypes = new Set(mastery.weakExerciseTypes || []);

    const allCandidateExercises = [...A1_EXIT_EXERCISES_FORM_A, ...A1_EXIT_EXERCISES_FORM_B_RETEST, ...UNIT_1_REVIEW_EXERCISES];

    // Score items by relevance to identified weaknesses
    const scored = allCandidateExercises.map((ex) => {
      let weight = 1;
      const targetText = `${ex.grammarTarget || ''} ${ex.vocabularyTarget || ''} ${ex.explanation || ''}`.toLowerCase();

      if (weakConceptsLower.some((wc) => targetText.includes(wc) || wc.includes(targetText))) {
        weight += 5;
      }
      if (weakTypes.has(ex.type)) {
        weight += 3;
      }

      return { ex, weight };
    });

    scored.sort((a, b) => b.weight - a.weight);
    return scored.slice(0, maxCount).map((s) => s.ex);
  }

  // ============================================================================
  // CEFR A2 COMPREHENSIVE CONSOLIDATION & A2 EXIT MASTERY ENGINE (PHASE 8)
  // ============================================================================

  public isB1Unlocked(userProfile?: UserAcademyProfile): boolean {
    return canUnlockB1(userProfile);
  }

  public isA2ExitAssessmentUnlocked(userProfile?: UserAcademyProfile): boolean {
    const user = userProfile || AuthService.getCurrentUser();
    const completedSet = new Set(user.completedLessonIds || []);
    return ALL_A2_LESSON_IDS.every((id) => completedSet.has(id));
  }

  public calculateA2Mastery(userProfile?: UserAcademyProfile): A2MasteryRecord {
    const user = userProfile || AuthService.getCurrentUser();
    const completedSet = new Set(user.completedLessonIds || []);
    const completedCount = ALL_A2_LESSON_IDS.filter((id) => completedSet.has(id)).length;
    const progressMap = user.detailedLessonProgress || {};

    let totalAccuracySum = 0;
    let accuracyCount = 0;
    const weakExerciseTypeSet = new Set<ExtendedExerciseType>();
    const weakConcepts: string[] = [];
    const weakGrammarCategories: string[] = [];

    const skillScores: Record<SkillTag, number> = {
      vocabulary: 0,
      grammar: 0,
      listening: 0,
      reading: 0,
      writing: 0,
      speaking: 0,
      interaction: 0,
      mediation: 0,
      pronunciation: 0,
    };
    const skillCounts: Record<SkillTag, number> = {
      vocabulary: 0,
      grammar: 0,
      listening: 0,
      reading: 0,
      writing: 0,
      speaking: 0,
      interaction: 0,
      mediation: 0,
      pronunciation: 0,
    };

    ALL_A2_LESSON_IDS.forEach((id) => {
      const rec = progressMap[id];
      if (rec) {
        totalAccuracySum += rec.accuracyPercent;
        accuracyCount++;

        if (rec.weakExerciseTypes && rec.weakExerciseTypes.length > 0) {
          rec.weakExerciseTypes.forEach((t) => weakExerciseTypeSet.add(t));
        }

        const lesson = CurriculumService.getDetailedLesson(id, user.learningLanguage || 'en');
        if (lesson) {
          if (rec.accuracyPercent < 75) {
            if (lesson.grammar?.category) weakGrammarCategories.push(lesson.grammar.category);
            if (lesson.title) weakConcepts.push(lesson.title);
          }

          const tags: SkillTag[] = ['grammar', 'vocabulary', 'reading', 'listening', 'speaking', 'writing'];
          tags.forEach((st) => {
            skillScores[st] += rec.accuracyPercent;
            skillCounts[st]++;
          });
        }
      }
    });

    Object.keys(skillScores).forEach((k) => {
      const key = k as SkillTag;
      skillScores[key] = skillCounts[key] > 0 ? Math.round(skillScores[key] / skillCounts[key]) : 0;
    });

    const avgLessonAccuracy = accuracyCount > 0 ? Math.round(totalAccuracySum / accuracyCount) : 0;
    const assessmentAttempts = user.a2AssessmentHistory || [];
    const passingAttempt = assessmentAttempts.find(
      (att) =>
        att.passed === true &&
        att.scorePercent >= A2_EXIT_ASSESSMENT_CONFIG.overallPassScorePercent &&
        (!att.failedCriticalSkills || att.failedCriticalSkills.length === 0)
    );
    const hasPassedAssessment = Boolean(passingAttempt);
    const bestAssessmentAttempt = assessmentAttempts.length > 0
      ? [...assessmentAttempts].sort((a, b) => b.scorePercent - a.scorePercent)[0]
      : null;
    const bestExitScorePercent = bestAssessmentAttempt ? bestAssessmentAttempt.scorePercent : undefined;

    let status: A2MasteryState = 'A2_NOT_STARTED';
    if (completedCount === 0) {
      status = 'A2_NOT_STARTED';
    } else if (completedCount < ALL_A2_LESSON_IDS.length) {
      status = 'A2_IN_PROGRESS';
    } else if (hasPassedAssessment) {
      status = 'A2_MASTERED';
    } else if (assessmentAttempts.length > 0) {
      status = 'A2_REMEDIATION_REQUIRED';
    } else if (avgLessonAccuracy < 75) {
      status = 'A2_REVIEW_RECOMMENDED';
    } else {
      status = 'A2_READY_FOR_EXIT_TEST';
    }

    let overallMasteryPercent = 0;
    if (completedCount === ALL_A2_LESSON_IDS.length) {
      if (hasPassedAssessment && bestExitScorePercent) {
        overallMasteryPercent = Math.min(100, Math.round(bestExitScorePercent * 0.6 + avgLessonAccuracy * 0.4));
      } else {
        overallMasteryPercent = Math.min(85, Math.round(avgLessonAccuracy * 0.85));
      }
    } else {
      overallMasteryPercent = Math.round((completedCount / ALL_A2_LESSON_IDS.length) * 60);
    }

    const existingMasteryRecord = user.a2Mastery;
    const reviewSessionsCompleted = existingMasteryRecord?.reviewSessionsCompleted || 0;
    const masteryBadgeEarned = status === 'A2_MASTERED' || (existingMasteryRecord?.masteryBadgeEarned ?? false);
    const isB1Unlocked = status === 'A2_MASTERED' || (existingMasteryRecord?.isB1Unlocked ?? false);

    return {
      status,
      overallMasteryPercent,
      lessonsCompletedCount: completedCount,
      reviewSessionsCompleted,
      bestExitScorePercent,
      assessmentPassed: hasPassedAssessment,
      isB1Unlocked,
      skillScores,
      weakConcepts: Array.from(new Set(weakConcepts)),
      weakGrammarCategories: Array.from(new Set(weakGrammarCategories)),
      weakExerciseTypes: Array.from(weakExerciseTypeSet),
      remediationQueue: existingMasteryRecord?.remediationQueue || [],
      remediationCompletedCount: existingMasteryRecord?.remediationCompletedCount || 0,
      masteryBadgeEarned,
      masteredAt: masteryBadgeEarned ? (existingMasteryRecord?.masteredAt || new Date().toISOString()) : undefined,
      lastEvaluatedAt: new Date().toISOString(),
    };
  }

  public refreshA2Mastery(userProfile?: UserAcademyProfile): UserAcademyProfile {
    const user = userProfile || AuthService.getCurrentUser();
    const masteryRecord = this.calculateA2Mastery(user);
    return AuthService.updateUserProfile({ a2Mastery: masteryRecord });
  }

  public recordA2AssessmentAttempt(
    formType: 'FORM_A' | 'FORM_B_RETEST',
    totalScore: number,
    maxScore: number,
    durationSeconds: number,
    skillBreakdown: Record<SkillTag, { correct: number; total: number; percent: number }>,
    identifiedWeaknesses: string[],
    answersLog: { exerciseId: string; isCorrect: boolean; userResponse?: any }[]
  ): { user: UserAcademyProfile; attempt: A2AssessmentAttempt } {
    const user = AuthService.getCurrentUser();
    const scorePercent = Math.round((totalScore / Math.max(maxScore, 1)) * 100);
    const existingAttempts = user.a2AssessmentHistory || [];
    const attemptNumber = existingAttempts.length + 1;

    const failedCriticalSkills: SkillTag[] = [];
    const unmetThresholds: string[] = [];

    if (scorePercent < A2_EXIT_ASSESSMENT_CONFIG.overallPassScorePercent) {
      unmetThresholds.push(
        `Overall score ${scorePercent}% is below passing threshold (${A2_EXIT_ASSESSMENT_CONFIG.overallPassScorePercent}%)`
      );
    }

    Object.entries(skillBreakdown).forEach(([sk, data]) => {
      const minRequired = A2_EXIT_ASSESSMENT_CONFIG.criticalSkillMinimums[sk as SkillTag];
      if (minRequired && data.percent < minRequired) {
        failedCriticalSkills.push(sk as SkillTag);
        unmetThresholds.push(
          `${sk.toUpperCase()} skill score (${data.percent}%) is below minimum standard (${minRequired}%)`
        );
      }
    });

    const passed = scorePercent >= A2_EXIT_ASSESSMENT_CONFIG.overallPassScorePercent && failedCriticalSkills.length === 0;
    const isMastered = scorePercent >= A2_EXIT_ASSESSMENT_CONFIG.overallMasteryScorePercent && failedCriticalSkills.length === 0;

    const attempt: A2AssessmentAttempt = {
      id: `attempt_a2_exit_${Date.now()}`,
      formType,
      attemptNumber,
      cefrLevel: 'A2',
      totalScore,
      maxScore,
      scorePercent,
      passed,
      isMastered,
      failedCriticalSkills,
      unmetThresholds,
      attemptedAt: new Date().toISOString(),
      durationSeconds,
      skillBreakdown,
      weakQuestionIds: answersLog.filter((a) => !a.isCorrect).map((a) => a.exerciseId),
      identifiedWeaknesses,
      recommendedReviewLessonIds: ALL_A2_LESSON_IDS.slice(0, 3),
      answersLog,
    };

    const updatedHistory = [...existingAttempts, attempt];
    const xpEarned = passed ? (isMastered ? 750 : 600) : 200;
    const gemsEarned = passed ? 150 : 35;

    // Award official A2 certificate if passed
    const existingCertificates = user.certificatesEarned || [];
    const hasA2Cert = existingCertificates.some((c) => c.certificateId === 'cert_a2_mastery_waystage');
    const updatedCertificates = (passed && !hasA2Cert)
      ? [
          ...existingCertificates,
          {
            cefr: 'A2',
            date: new Date().toISOString(),
            certificateId: 'cert_a2_mastery_waystage',
          },
        ]
      : existingCertificates;

    const updatedUser = AuthService.updateUserProfile({
      totalXp: user.totalXp + xpEarned,
      gems: user.gems + gemsEarned,
      certificatesEarned: updatedCertificates,
      a2AssessmentHistory: updatedHistory,
    });

    const finalUser = this.refreshA2Mastery(updatedUser);
    return { user: finalUser, attempt };
  }

  // ============================================================================
  // UNIT 1 CONSOLIDATION & MASTERY ENGINE (LEGACY & BACKWARD COMPATIBILITY)
  // ============================================================================

  public calculateUnit1Mastery(userProfile?: UserAcademyProfile): UnitMasteryRecord {
    const user = userProfile || AuthService.getCurrentUser();
    const completedSet = new Set(user.completedLessonIds || []);
    const completedCount = UNIT_1_LESSON_IDS.filter((id) => completedSet.has(id)).length;
    const progressMap = user.detailedLessonProgress || {};

    const completedRecords = UNIT_1_LESSON_IDS.map((id) => progressMap[id]).filter(Boolean);
    const avgLessonAccuracy = completedRecords.length > 0
      ? completedRecords.reduce((acc, r) => acc + (r.accuracyPercent || 0), 0) / completedRecords.length
      : 0;

    const assessmentAttempts = user.unitAssessmentHistory?.['unit_a1_1'] || [];
    const bestAssessmentAttempt = assessmentAttempts.length > 0
      ? [...assessmentAttempts].sort((a, b) => b.scorePercent - a.scorePercent)[0]
      : undefined;

    const hasPassedAssessment = bestAssessmentAttempt ? bestAssessmentAttempt.passed : false;
    const bestAssessmentScore = bestAssessmentAttempt?.scorePercent;

    const weakConcepts: string[] = [];
    const weakGrammarCategories: string[] = [];
    const weakExerciseTypeSet = new Set<string>();

    UNIT_1_LESSON_IDS.forEach((lessonId) => {
      const rec = progressMap[lessonId];
      if (rec) {
        if (rec.accuracyPercent < 75) {
          const matchingKg = UNIT_1_KNOWLEDGE_GRAPH.filter((kg) => kg.introducedInLesson === lessonId);
          matchingKg.forEach((kg) => {
            weakConcepts.push(kg.title);
            if (kg.category === 'grammar') weakGrammarCategories.push(kg.title);
          });
        }
        if (Array.isArray(rec.weakExerciseTypes)) {
          rec.weakExerciseTypes.forEach((wt) => weakExerciseTypeSet.add(wt));
        }
      }
    });

    if (bestAssessmentAttempt && bestAssessmentAttempt.identifiedWeaknesses) {
      bestAssessmentAttempt.identifiedWeaknesses.forEach((w) => {
        if (!weakConcepts.includes(w)) weakConcepts.push(w);
      });
    }

    const baseDomainBaseline = Math.min(100, Math.round((completedCount / 15) * 85));
    const skillScores: Record<SkillTag, number> = {
      vocabulary: Math.min(100, Math.round(baseDomainBaseline * 0.95 + (avgLessonAccuracy > 80 ? 5 : 0))),
      grammar: Math.min(100, Math.round(baseDomainBaseline * 0.92 + (avgLessonAccuracy > 80 ? 8 : 0))),
      listening: Math.min(100, Math.round(baseDomainBaseline * 0.94)),
      reading: Math.min(100, Math.round(baseDomainBaseline * 0.96)),
      speaking: Math.min(100, Math.round(baseDomainBaseline * 0.90)),
      writing: Math.min(100, Math.round(baseDomainBaseline * 0.91)),
      mediation: Math.min(100, Math.round(baseDomainBaseline * 0.88)),
      interaction: Math.min(100, Math.round(baseDomainBaseline * 0.93)),
      pronunciation: Math.min(100, Math.round(baseDomainBaseline * 0.90)),
    };

    if (bestAssessmentAttempt && bestAssessmentAttempt.skillBreakdown) {
      Object.entries(bestAssessmentAttempt.skillBreakdown).forEach(([skill, breakdown]) => {
        if (skill in skillScores) {
          skillScores[skill as SkillTag] = Math.round((skillScores[skill as SkillTag] + breakdown.percent) / 2);
        }
      });
    }

    let status: UnitMasteryStatus = 'not_started';
    if (completedCount === 0) {
      status = 'not_started';
    } else if (completedCount < 15) {
      status = 'in_progress';
    } else if (hasPassedAssessment) {
      status = 'mastered';
    } else if (assessmentAttempts.length > 0) {
      status = 'assessment_attempted';
    } else if (avgLessonAccuracy < 75) {
      status = 'review_recommended';
    } else {
      status = 'ready_for_assessment';
    }

    let overallMasteryPercent = 0;
    if (completedCount === 15) {
      if (hasPassedAssessment && bestAssessmentScore) {
        overallMasteryPercent = Math.min(100, Math.round(bestAssessmentScore * 0.7 + avgLessonAccuracy * 0.3));
      } else {
        overallMasteryPercent = Math.min(85, Math.round(avgLessonAccuracy * 0.85));
      }
    } else {
      overallMasteryPercent = Math.round((completedCount / 15) * 60);
    }

    const existingMasteryRecord = user.unitMastery?.['unit_a1_1'];
    const reviewSessionsCompleted = existingMasteryRecord?.reviewSessionsCompleted || 0;
    const masteryBadgeEarned = status === 'mastered' || (existingMasteryRecord?.masteryBadgeEarned ?? false);

    return {
      unitId: 'unit_a1_1',
      status,
      overallMasteryPercent,
      lessonsCompletedCount: completedCount,
      reviewSessionsCompleted,
      bestAssessmentScore,
      assessmentPassed: hasPassedAssessment,
      skillScores,
      weakConcepts: Array.from(new Set(weakConcepts)),
      weakGrammarCategories: Array.from(new Set(weakGrammarCategories)),
      weakExerciseTypes: Array.from(weakExerciseTypeSet),
      masteryBadgeEarned,
      masteredAt: masteryBadgeEarned ? (existingMasteryRecord?.masteredAt || new Date().toISOString()) : undefined,
      lastEvaluatedAt: new Date().toISOString(),
    };
  }

  public refreshUnit1Mastery(userProfile?: UserAcademyProfile): UserAcademyProfile {
    const user = userProfile || AuthService.getCurrentUser();
    const masteryRecord = this.calculateUnit1Mastery(user);

    return AuthService.updateUserProfile({
      unitMastery: {
        ...user.unitMastery,
        ['unit_a1_1']: masteryRecord,
      },
    });
  }

  public recordUnit1ReviewCompletion(domainId: string, totalCorrect: number, totalQuestions: number): UserAcademyProfile {
    const user = AuthService.getCurrentUser();
    const existingMastery = this.calculateUnit1Mastery(user);
    const xpBonus = 60 + totalCorrect * 5;
    const gemsBonus = totalCorrect >= Math.round(totalQuestions * 0.8) ? 10 : 5;

    const updated = AuthService.updateUserProfile({
      totalXp: user.totalXp + xpBonus,
      gems: user.gems + gemsBonus,
      unitMastery: {
        ...user.unitMastery,
        ['unit_a1_1']: {
          ...existingMastery,
          reviewSessionsCompleted: (existingMastery.reviewSessionsCompleted || 0) + 1,
          lastEvaluatedAt: new Date().toISOString(),
        },
      },
    });

    return updated;
  }

  public recordUnit1AssessmentAttempt(
    totalCorrect: number,
    totalQuestions: number,
    durationSeconds: number,
    skillBreakdown: Record<SkillTag, { correct: number; total: number; percent: number }>,
    identifiedWeaknesses: string[],
    answersLog: { exerciseId: string; isCorrect: boolean; userResponse?: any }[]
  ): { user: UserAcademyProfile; attempt: UnitAssessmentAttempt } {
    const user = AuthService.getCurrentUser();
    const scorePercent = Math.round((totalCorrect / Math.max(totalQuestions, 1)) * 100);
    const passed = scorePercent >= UNIT_1_ASSESSMENT_BLUEPRINT.passingScorePercent;

    const attempt: UnitAssessmentAttempt = {
      id: `attempt_u1_${Date.now()}`,
      unitId: 'unit_a1_1',
      cefrLevel: 'A1',
      totalScore: totalCorrect,
      maxScore: totalQuestions,
      scorePercent,
      passed,
      attemptedAt: new Date().toISOString(),
      durationSeconds,
      skillBreakdown,
      weakQuestionIds: answersLog.filter((a) => !a.isCorrect).map((a) => a.exerciseId),
      identifiedWeaknesses,
      answersLog,
    };

    const existingAttempts = user.unitAssessmentHistory?.['unit_a1_1'] || [];
    const updatedHistory = [...existingAttempts, attempt];

    const xpEarned = passed ? 350 : 100;
    const gemsEarned = passed ? 50 : 15;

    const existingCertificates = user.certificatesEarned || [];
    const hasUnit1Cert = existingCertificates.some((c) => c.certificateId === 'cert_a1_unit1_breakthrough');
    const updatedCertificates = (passed && !hasUnit1Cert)
      ? [
          ...existingCertificates,
          {
            cefr: 'A1',
            date: new Date().toISOString(),
            certificateId: 'cert_a1_unit1_breakthrough',
          },
        ]
      : existingCertificates;

    const updatedUser = AuthService.updateUserProfile({
      totalXp: user.totalXp + xpEarned,
      gems: user.gems + gemsEarned,
      certificatesEarned: updatedCertificates,
      unitAssessmentHistory: {
        ...user.unitAssessmentHistory,
        ['unit_a1_1']: updatedHistory,
      },
    });

    const finalUser = this.refreshUnit1Mastery(updatedUser);
    return { user: finalUser, attempt };
  }

  public isUnit1AssessmentUnlocked(userProfile?: UserAcademyProfile): boolean {
    const user = userProfile || AuthService.getCurrentUser();
    const completedSet = new Set(user.completedLessonIds || []);
    return UNIT_1_LESSON_IDS.every((id) => completedSet.has(id));
  }

  public getAdaptiveReviewExercises(userProfile?: UserAcademyProfile, maxCount: number = 10): Exercise[] {
    const user = userProfile || AuthService.getCurrentUser();
    const mastery = this.calculateUnit1Mastery(user);
    const weakConceptsLower = (mastery.weakConcepts || []).map((w) => w.toLowerCase());
    const weakTypes = new Set(mastery.weakExerciseTypes || []);

    const allReviewItems = [...UNIT_1_REVIEW_EXERCISES];

    const scored = allReviewItems.map((ex) => {
      let weight = 1;
      const targetText = `${ex.grammarTarget || ''} ${ex.vocabularyTarget || ''} ${ex.explanation || ''}`.toLowerCase();

      if (weakConceptsLower.some((wc) => targetText.includes(wc) || wc.includes(targetText))) {
        weight += 5;
      }
      if (weakTypes.has(ex.type)) {
        weight += 3;
      }

      return { ex, weight };
    });

    scored.sort((a, b) => b.weight - a.weight);
    return scored.slice(0, maxCount).map((s) => s.ex);
  }
}

export const ProgressService = new ProgressServiceManager();
