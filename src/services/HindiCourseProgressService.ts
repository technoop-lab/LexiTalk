import { HindiCourseProgress } from '../types/hindiCourse';
import { AuthService } from './AuthService';
import { HINDI_DAY_XP_REWARD, HINDI_RELEASED_DAYS } from './HindiCourseService';

const STORAGE_KEY_PREFIX = 'curiosity_hindi_course_progress_';

const DEFAULT_REVIEW_INTERVALS = [1, 3, 7, 14, 30];

export class HindiCourseProgressManager {
  private listeners: ((progress: HindiCourseProgress) => void)[] = [];

  /**
   * Helper to resolve active user ID consistently across all callers
   */
  private resolveUserId(userId?: string): string {
    if (userId && userId.trim() && userId !== 'default_user') {
      return userId.trim();
    }
    try {
      const currentUser = AuthService.getCurrentUser();
      if (currentUser?.id) {
        return currentUser.id;
      }
    } catch {
      // ignore
    }
    return userId || 'usr_default_1';
  }

  private getStorageKey(userId?: string): string {
    const resolvedId = this.resolveUserId(userId);
    return `${STORAGE_KEY_PREFIX}${resolvedId}`;
  }

  /**
   * Subscribe to progress updates across components
   */
  public subscribe(listener: (progress: HindiCourseProgress) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners(progress: HindiCourseProgress): void {
    this.listeners.forEach((listener) => {
      try {
        listener(progress);
      } catch (err) {
        console.warn('[HindiCourseProgressService] Listener error:', err);
      }
    });
  }

  /**
   * Load user progress from localStorage or initialize with default Day 1 unlocked
   */
  public getProgress(userId?: string): HindiCourseProgress {
    const effectiveUserId = this.resolveUserId(userId);

    if (typeof window === 'undefined') {
      return this.createInitialProgress(effectiveUserId);
    }

    try {
      const raw = localStorage.getItem(this.getStorageKey(effectiveUserId));
      if (raw) {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed.unlockedDays)) {
          parsed.unlockedDays = [1];
        }
        if (!Array.isArray(parsed.completedDays)) {
          parsed.completedDays = [];
        }
        const isReleasedDay = (value: unknown) =>
          Number.isInteger(value) && Number(value) >= 1 && Number(value) <= HINDI_RELEASED_DAYS;
        parsed.completedDays = Array.from(new Set(parsed.completedDays.filter(isReleasedDay)));
        parsed.unlockedDays = Array.from(new Set(parsed.unlockedDays.filter(isReleasedDay)));
        parsed.dayScores = Object.fromEntries(Object.entries(parsed.dayScores || {}).filter(([day]) => isReleasedDay(Number(day))));
        parsed.dayStars = Object.fromEntries(Object.entries(parsed.dayStars || {}).filter(([day]) => isReleasedDay(Number(day))));
        parsed.dayCompletedAt = Object.fromEntries(Object.entries(parsed.dayCompletedAt || {}).filter(([day]) => isReleasedDay(Number(day))));
        parsed.dueReviews = Array.isArray(parsed.dueReviews)
          ? parsed.dueReviews.filter((review: any) => isReleasedDay(review?.dayNumber))
          : [];
        parsed.currentDayNumber = Math.min(
          HINDI_RELEASED_DAYS + 1,
          Math.max(1, Math.floor(Number(parsed.currentDayNumber) || 1))
        );
        if (parsed.completedDays.length === 0) {
          parsed.streakDays = 0;
          parsed.lastActiveDate = '';
        } else {
          parsed.streakDays = Math.max(0, Math.floor(Number(parsed.streakDays) || 0));
          if (typeof parsed.lastActiveDate !== 'string') parsed.lastActiveDate = '';
        }
        // Ensure Day 1 is always in unlockedDays
        if (!parsed.unlockedDays.includes(1)) {
          parsed.unlockedDays.push(1);
        }
        // A completed released day may unlock only the next released day.
        for (const completedDay of parsed.completedDays) {
          const nextDay = completedDay + 1;
          if (nextDay <= HINDI_RELEASED_DAYS && !parsed.unlockedDays.includes(nextDay)) {
            parsed.unlockedDays.push(nextDay);
          }
        }
        parsed.unlockedDays.sort((a: number, b: number) => a - b);
        parsed.completedDays.sort((a: number, b: number) => a - b);
        parsed.userId = effectiveUserId;
        return parsed;
      }
    } catch (e) {
      console.warn('[HindiCourseProgressService] Failed to parse progress from storage:', e);
    }

    const initial = this.createInitialProgress(effectiveUserId);
    this.saveProgress(initial);
    return initial;
  }

  private createInitialProgress(userId: string): HindiCourseProgress {
    return {
      userId,
      completedDays: [],
      unlockedDays: [1],
      currentDayNumber: 1,
      dayScores: {},
      dayStars: {},
      dayCompletedAt: {},
      exerciseAttempts: {},
      dueReviews: [],
      streakDays: 0,
      lastActiveDate: '',
      totalXpEarned: 0,
      weakSkillTags: [],
    };
  }

  /**
   * Save progress to localStorage and notify all subscribers
   */
  public saveProgress(progress: HindiCourseProgress): void {
    if (typeof window === 'undefined') return;
    try {
      const effectiveUserId = this.resolveUserId(progress.userId);
      progress.userId = effectiveUserId;
      localStorage.setItem(this.getStorageKey(effectiveUserId), JSON.stringify(progress));
      this.notifyListeners(progress);
    } catch (e) {
      console.warn('[HindiCourseProgressService] Failed to save progress:', e);
    }
  }

  /**
   * Check if a specific day is unlocked
   */
  public isDayUnlocked(dayNum: number, userId?: string): boolean {
    if (!Number.isInteger(dayNum) || dayNum < 1 || dayNum > HINDI_RELEASED_DAYS) return false;
    if (dayNum === 1) return true;
    const prog = this.getProgress(userId);
    return prog.unlockedDays.includes(dayNum);
  }

  /**
   * Check if a specific day is completed
   */
  public isDayCompleted(dayNum: number, userId?: string): boolean {
    const prog = this.getProgress(userId);
    return prog.completedDays.includes(dayNum);
  }

  /**
   * Complete a lesson day, calculate stars, unlock next day, update streak and review queue
   */
  public completeDay(
    dayNum: number,
    scorePercentage: number,
    xpReward = HINDI_DAY_XP_REWARD,
    userId?: string
  ): HindiCourseProgress {
    const effectiveUserId = this.resolveUserId(userId);
    if (!Number.isInteger(dayNum) || dayNum < 1 || dayNum > HINDI_RELEASED_DAYS) {
      console.warn('[HindiCourseProgressService] Refusing to complete an unreleased/invalid day:', dayNum);
      return this.getProgress(effectiveUserId);
    }
    const prog = this.getProgress(effectiveUserId);
    if (!prog.unlockedDays.includes(dayNum)) {
      console.warn('[HindiCourseProgressService] Refusing to complete a locked day:', dayNum);
      return prog;
    }
    const wasAlreadyCompleted = prog.completedDays.includes(dayNum);
    const safeXpReward = Number.isFinite(xpReward) ? Math.max(0, Math.round(xpReward)) : 0;
    const today = new Date().toISOString().split('T')[0];

    // Calculate stars (3 stars: >= 90%, 2 stars: >= 75%, 1 star: < 75%)
    const stars = scorePercentage >= 90 ? 3 : scorePercentage >= 75 ? 2 : 1;

    // Update completedDays
    if (!prog.completedDays.includes(dayNum)) {
      prog.completedDays.push(dayNum);
      prog.completedDays.sort((a, b) => a - b);
    }

    // Unlock only the next released day. Day 41 remains locked until an update.
    const nextDay = dayNum + 1;
    if (nextDay <= HINDI_RELEASED_DAYS && !prog.unlockedDays.includes(nextDay)) {
      prog.unlockedDays.push(nextDay);
      prog.unlockedDays.sort((a, b) => a - b);
    }

    // Update current active day to next unlocked day
    prog.currentDayNumber = Math.min(HINDI_RELEASED_DAYS + 1, Math.max(prog.currentDayNumber, nextDay));

    // Save scores and stars (preserve highest score)
    const prevScore = prog.dayScores[dayNum] || 0;
    prog.dayScores[dayNum] = Math.max(prevScore, Math.round(scorePercentage));
    prog.dayStars[dayNum] = Math.max(prog.dayStars[dayNum] || 0, stars);
    prog.dayCompletedAt[dayNum] = new Date().toISOString();

    // Count a streak only for the first recorded activity or consecutive dates.
    if (prog.lastActiveDate !== today) {
      if (!prog.lastActiveDate) {
        prog.streakDays = 1;
      } else {
        const previous = new Date(`${prog.lastActiveDate}T00:00:00Z`).getTime();
        const current = new Date(`${today}T00:00:00Z`).getTime();
        const daysElapsed = Math.round((current - previous) / 86400000);
        prog.streakDays = daysElapsed === 1 ? (prog.streakDays || 0) + 1 : 1;
      }
      prog.lastActiveDate = today;
    }

    // Lesson XP and gems are awarded once for the first completion only.
    if (!wasAlreadyCompleted) {
      prog.totalXpEarned = (prog.totalXpEarned || 0) + safeXpReward;
      // Schedule spaced reviews (+1, +3, +7, +14, +30 days) once per completion.
      this.scheduleSpacedReviews(prog, dayNum);
    }

    this.saveProgress(prog);

    // Also award XP and gems to main academy user profile safely
    try {
      const currentUser = AuthService.getCurrentUser();
      if (currentUser && !wasAlreadyCompleted) {
        AuthService.updateUserProfile({
          totalXp: (currentUser.totalXp || 0) + safeXpReward,
          gems: (currentUser.gems || 0) + 20,
        });
      }
    } catch (err) {
      console.warn('[HindiCourseProgressService] Could not update AuthService user profile:', err);
    }

    return prog;
  }

  /**
   * Schedule Spaced Repetition reviews
   */
  private scheduleSpacedReviews(prog: HindiCourseProgress, dayNum: number): void {
    const today = new Date();
    // Schedule the first review (+1 day)
    const nextReviewDate = new Date(today);
    nextReviewDate.setDate(today.getDate() + DEFAULT_REVIEW_INTERVALS[0]);
    const scheduledDateStr = nextReviewDate.toISOString().split('T')[0];

    // Remove any existing pending review for this day
    prog.dueReviews = prog.dueReviews.filter((r) => r.dayNumber !== dayNum);

    prog.dueReviews.push({
      dayNumber: dayNum,
      scheduledForDate: scheduledDateStr,
      intervalIndex: 0,
    });
  }

  /**
   * Record individual practice exercise result
   */
  public recordExerciseAnswer(
    exerciseId: string,
    isCorrect: boolean,
    skillTag: string,
    userAnswer: string,
    userId?: string
  ): void {
    const effectiveUserId = this.resolveUserId(userId);
    const prog = this.getProgress(effectiveUserId);

    const prev = prog.exerciseAttempts[exerciseId] || { correct: false, attempts: 0, lastAnswer: '' };
    prog.exerciseAttempts[exerciseId] = {
      correct: isCorrect,
      attempts: prev.attempts + 1,
      lastAnswer: userAnswer,
    };

    if (!isCorrect && skillTag) {
      if (!prog.weakSkillTags.includes(skillTag)) {
        prog.weakSkillTags.push(skillTag);
      }
    } else if (isCorrect && skillTag) {
      // If answered correctly, remove from weak skills if present
      prog.weakSkillTags = prog.weakSkillTags.filter((s) => s !== skillTag);
    }

    this.saveProgress(prog);
  }

  /**
   * Get all due reviews as of today
   */
  public getDueReviews(userId?: string): number[] {
    const effectiveUserId = this.resolveUserId(userId);
    const prog = this.getProgress(effectiveUserId);
    const todayStr = new Date().toISOString().split('T')[0];

    return prog.dueReviews
      .filter((r) => r.scheduledForDate <= todayStr)
      .map((r) => r.dayNumber);
  }

  /**
   * Mark a spaced review completed and advance interval
   */
  public markReviewCompleted(dayNum: number, userId?: string): void {
    const effectiveUserId = this.resolveUserId(userId);
    const prog = this.getProgress(effectiveUserId);
    const existing = prog.dueReviews.find((r) => r.dayNumber === dayNum);

    if (existing) {
      const nextIndex = existing.intervalIndex + 1;
      if (nextIndex < DEFAULT_REVIEW_INTERVALS.length) {
        const nextDays = DEFAULT_REVIEW_INTERVALS[nextIndex];
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + nextDays);
        existing.intervalIndex = nextIndex;
        existing.scheduledForDate = nextDate.toISOString().split('T')[0];
      } else {
        // All spaced intervals completed
        prog.dueReviews = prog.dueReviews.filter((r) => r.dayNumber !== dayNum);
      }
      this.saveProgress(prog);
    }
  }
}

export const HindiCourseProgressService = new HindiCourseProgressManager();

