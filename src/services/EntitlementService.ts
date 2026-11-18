import { UserAcademyProfile, LessonNode, CourseUnit, CEFRLevel, AccessEntitlement, UserRole } from '../types';
import { ProgressService } from './ProgressService';

export interface AccessCheckResult {
  allowed: boolean;
  reason?: 'PREREQUISITE_LOCKED' | 'A2_GATE_LOCKED' | 'PREMIUM_LOCKED' | 'CONTENT_NOT_RELEASED' | 'ALLOWED';
  message?: string;
  isBypassedByDeveloper?: boolean;
}

class EntitlementServiceManager {
  /**
   * Checks if user has authorized administrator privileges.
   */
  public isAdmin(user?: UserAcademyProfile | null): boolean {
    if (!user) return false;
    return user.role === 'ADMIN' || user.email?.toLowerCase() === 'admin@curiosityacademy.com';
  }

  /**
   * Resolves the primary access entitlement for the user.
   */
  public getEntitlement(user: UserAcademyProfile): AccessEntitlement {
    if (this.isDeveloper(user)) {
      return 'DEVELOPER_TEST';
    }
    if (user.isPro || user.subscriptionTier === 'pro_monthly' || user.subscriptionTier === 'pro_annual') {
      return 'PREMIUM';
    }
    return 'FREE';
  }

  /**
   * Checks if user has internal developer/tester capabilities.
   * Learners never receive developer privileges.
   */
  public isDeveloper(user?: UserAcademyProfile | null): boolean {
    if (!user) return false;
    return user.role === 'ADMIN' || user.role === 'DEVELOPER_TESTER';
  }

  /**
   * Checks if developer has activated the "View As Learner" preview mode.
   * When true, standard prerequisite checks and locks are strictly enforced to test learner UX.
   */
  public isLearnerPreview(user: UserAcademyProfile): boolean {
    return this.isDeveloper(user) && !!user.learnerPreviewActive;
  }

  /**
   * Checks if the user can bypass prerequisite and gate locks.
   */
  public canBypassPrerequisites(user: UserAcademyProfile): boolean {
    return this.isDeveloper(user) && !user.learnerPreviewActive;
  }

  /**
   * Evaluates if a lesson can be accessed by the given user.
   */
  public canAccessLesson(
    user: UserAcademyProfile,
    lesson: LessonNode | { id: string; cefr?: CEFRLevel | string; unitId?: string },
    unitLessons?: LessonNode[]
  ): AccessCheckResult {
    const cefr = (lesson as any).cefr || 'A1';

    // Only authored learner-facing English levels are released.
    if (cefr !== 'A1' && cefr !== 'A2') {
      return {
        allowed: false,
        reason: 'CONTENT_NOT_RELEASED',
        message: 'Only authored A1 and A2 lessons are currently available.',
      };
    }

    // 1. Developer bypass mode (when not in learner preview)
    if (this.canBypassPrerequisites(user)) {
      return { allowed: true, reason: 'ALLOWED', isBypassedByDeveloper: true };
    }

    // 2. A2 Gate Check: If lesson is A2 (or higher), learner must have unlocked A2 via A1 mastery
    if (cefr === 'A2') {
      const a2Unlocked = ProgressService.isA2Unlocked(user);
      if (!a2Unlocked) {
        return {
          allowed: false,
          reason: 'A2_GATE_LOCKED',
          message: 'Complete A1 curriculum and pass the A1 Exit Assessment to unlock A2 level.',
        };
      }

      // v1 is a free app with no purchase flow, so every authored A2 lesson is open.
    }

    // 4. Higher levels: no authored curriculum yet, so nothing to sell or gate.

    // 5. Prerequisite Progression Check: Must have completed the previous lesson in sequence
    if (unitLessons && unitLessons.length > 0) {
      const idx = unitLessons.findIndex((l) => l.id === lesson.id);
      if (idx > 0) {
        const prevLesson = unitLessons[idx - 1];
        const isPrevCompleted = user.completedLessonIds?.includes(prevLesson.id);
        if (!isPrevCompleted) {
          return {
            allowed: false,
            reason: 'PREREQUISITE_LOCKED',
            message: `Complete the previous lesson "${prevLesson.title}" to unlock this step.`,
          };
        }
      }
    }

    return { allowed: true, reason: 'ALLOWED' };
  }

  /**
   * Evaluates if a unit can be accessed.
   */
  public canAccessUnit(
    user: UserAcademyProfile,
    unit: CourseUnit | { id: string; cefr: CEFRLevel | string }
  ): AccessCheckResult {
    if (unit.cefr !== 'A1' && unit.cefr !== 'A2') {
      return {
        allowed: false,
        reason: 'CONTENT_NOT_RELEASED',
        message: 'Only authored A1 and A2 units are currently available.',
      };
    }

    if (this.canBypassPrerequisites(user)) {
      return { allowed: true, reason: 'ALLOWED', isBypassedByDeveloper: true };
    }

    if (unit.cefr === 'A2') {
      const a2Unlocked = ProgressService.isA2Unlocked(user);
      if (!a2Unlocked) {
        return {
          allowed: false,
          reason: 'A2_GATE_LOCKED',
          message: 'Complete A1 and pass A1 Exit Assessment to unlock A2 units.',
        };
      }

      // Every authored A2 unit is open in v1 (free app, no purchase flow).
    }

    return { allowed: true, reason: 'ALLOWED' };
  }

  /**
   * Checks if user has unlimited hearts.
   */
  public hasUnlimitedHearts(user: UserAcademyProfile): boolean {
    if (this.isDeveloper(user) && !user.learnerPreviewActive) return true;
    return user.isPro || user.subscriptionTier !== 'free';
  }

  /**
   * Checks if user can access interactive audio story.
   */
  public canAccessStory(user: UserAcademyProfile, storyId: string): boolean {
    if (this.canBypassPrerequisites(user)) return true;
    if (user.isPro) return true;
    return user.unlockedStoryIds?.includes(storyId) || storyId === 'story_1' || storyId === 'story_2';
  }

  /**
   * Checks if assessment can be taken.
   */
  public canAccessAssessment(
    user: UserAcademyProfile,
    scope: 'unit' | 'a1_exit' | 'a2_exit' | 'a2_milestone' | 'cefr_final'
  ): AccessCheckResult {
    if (this.canBypassPrerequisites(user)) {
      return { allowed: true, reason: 'ALLOWED', isBypassedByDeveloper: true };
    }

    if (scope === 'a1_exit') {
      const ready = ProgressService.isA1ExitAssessmentUnlocked(user);
      if (!ready) {
        return {
          allowed: false,
          reason: 'PREREQUISITE_LOCKED',
          message: 'Complete all 6 A1 Units (90 lessons) to unlock the A1 Exit Assessment.',
        };
      }
    }

    if (scope === 'a2_exit') {
      const ready = ProgressService.isA2ExitAssessmentUnlocked(user);
      if (!ready) {
        return {
          allowed: false,
          reason: 'PREREQUISITE_LOCKED',
          message: 'Complete all 12 A2 Units (Lessons 91–270) to unlock the A2 Exit Assessment.',
        };
      }
    }

    return { allowed: true, reason: 'ALLOWED' };
  }
}

export const EntitlementService = new EntitlementServiceManager();
export const AccessService = EntitlementService;
