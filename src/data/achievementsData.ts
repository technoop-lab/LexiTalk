import { UserAcademyProfile } from '../types';

export type AchievementCategory =
  | 'progress'
  | 'streak'
  | 'speaking'
  | 'vocabulary'
  | 'grammar'
  | 'assessments'
  | 'special';

export type BadgeTier = 'gold' | 'silver' | 'emerald' | 'royal_indigo' | 'ruby';

export interface AchievementBadge {
  id: string;
  category: AchievementCategory;
  title: string;
  hindiTitle: string;
  desc: string;
  tier: BadgeTier;
  icon: string;
  badgeSymbol: string;
  max: number;
  xpReward: number;
  earnedDatePlaceholder?: string;
  calculateProgress: (user: UserAcademyProfile, daysCompleted?: number) => {
    current: number;
    unlocked: boolean;
    earnedDate?: string;
    trackingAvailable?: boolean;
  };
}

export interface AchievementCategoryConfig {
  id: AchievementCategory;
  name: string;
  hindiName: string;
  iconName: string;
  colorClass: string;
  gradientBg: string;
}

export const ACHIEVEMENT_CATEGORIES: AchievementCategoryConfig[] = [
  {
    id: 'progress',
    name: 'Course Progress',
    hindiName: 'पाठ्यक्रम प्रगति',
    iconName: 'Trophy',
    colorClass: 'text-amber-600 dark:text-amber-400',
    gradientBg: 'from-amber-500/10 to-yellow-500/10 dark:from-amber-500/20 dark:to-yellow-500/20',
  },
  {
    id: 'streak',
    name: 'Streak & Habits',
    hindiName: 'निरंतर अभ्यास',
    iconName: 'Flame',
    colorClass: 'text-orange-600 dark:text-orange-400',
    gradientBg: 'from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20',
  },
  {
    id: 'speaking',
    name: 'Speaking Activity',
    hindiName: 'मौखिक अभ्यास',
    iconName: 'Mic',
    colorClass: 'text-rose-600 dark:text-rose-400',
    gradientBg: 'from-rose-500/10 to-pink-500/10 dark:from-rose-500/20 dark:to-pink-500/20',
  },
  {
    id: 'vocabulary',
    name: 'Vocabulary Progress',
    hindiName: 'शब्दावली प्रगति',
    iconName: 'BookOpen',
    colorClass: 'text-emerald-600 dark:text-emerald-400',
    gradientBg: 'from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20',
  },
  {
    id: 'grammar',
    name: 'Grammar Progress',
    hindiName: 'व्याकरण प्रगति',
    iconName: 'ShieldCheck',
    colorClass: 'text-indigo-600 dark:text-indigo-400',
    gradientBg: 'from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/20 dark:to-blue-500/20',
  },
  {
    id: 'assessments',
    name: 'Course Assessments',
    hindiName: 'पाठ्यक्रम मूल्यांकन',
    iconName: 'Target',
    colorClass: 'text-purple-600 dark:text-purple-400',
    gradientBg: 'from-purple-500/10 to-fuchsia-500/10 dark:from-purple-500/20 dark:to-fuchsia-500/20',
  },
  {
    id: 'special',
    name: 'Special Milestones',
    hindiName: 'विशेष उपलब्धियां',
    iconName: 'Sparkles',
    colorClass: 'text-cyan-600 dark:text-cyan-400',
    gradientBg: 'from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20',
  },
];

export const TIER_CONFIG: Record<
  BadgeTier,
  {
    name: string;
    border: string;
    bgGradient: string;
    shadowGlow: string;
    badgeRing: string;
    badgeText: string;
    ribbonColor: string;
  }
> = {
  gold: {
    name: 'Gold Tier',
    border: 'border-amber-400/70 dark:border-amber-400/60',
    bgGradient: 'bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-amber-600/5 dark:from-amber-500/25 dark:via-yellow-500/15 dark:to-slate-900',
    shadowGlow: 'shadow-[0_0_25px_-5px_rgba(245,158,11,0.35)]',
    badgeRing: 'ring-2 ring-amber-400/50 bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950',
    badgeText: 'text-amber-700 dark:text-amber-300',
    ribbonColor: 'bg-amber-500 text-slate-950',
  },
  silver: {
    name: 'Silver Tier',
    border: 'border-slate-300 dark:border-slate-500/60',
    bgGradient: 'bg-gradient-to-br from-slate-200/50 via-slate-100/30 to-slate-300/20 dark:from-slate-700/30 dark:via-slate-800/40 dark:to-slate-900',
    shadowGlow: 'shadow-[0_0_20px_-5px_rgba(148,163,184,0.3)]',
    badgeRing: 'ring-2 ring-slate-300 dark:ring-slate-500 bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900',
    badgeText: 'text-slate-700 dark:text-slate-200',
    ribbonColor: 'bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-100',
  },
  emerald: {
    name: 'Emerald Tier',
    border: 'border-emerald-400/70 dark:border-emerald-400/60',
    bgGradient: 'bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-emerald-600/5 dark:from-emerald-500/25 dark:via-teal-500/15 dark:to-slate-900',
    shadowGlow: 'shadow-[0_0_25px_-5px_rgba(16,185,129,0.35)]',
    badgeRing: 'ring-2 ring-emerald-400/50 bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    ribbonColor: 'bg-emerald-500 text-slate-950',
  },
  royal_indigo: {
    name: 'Royal Indigo Tier',
    border: 'border-indigo-400/70 dark:border-indigo-400/60',
    bgGradient: 'bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-indigo-600/5 dark:from-indigo-500/25 dark:via-blue-500/15 dark:to-slate-900',
    shadowGlow: 'shadow-[0_0_25px_-5px_rgba(99,102,241,0.35)]',
    badgeRing: 'ring-2 ring-indigo-400/50 bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] text-white',
    badgeText: 'text-indigo-700 dark:text-indigo-300',
    ribbonColor: 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white',
  },
  ruby: {
    name: 'Ruby Tier',
    border: 'border-rose-400/70 dark:border-rose-400/60',
    bgGradient: 'bg-gradient-to-br from-rose-500/15 via-pink-500/10 to-rose-600/5 dark:from-rose-500/25 dark:via-pink-500/15 dark:to-slate-900',
    shadowGlow: 'shadow-[0_0_25px_-5px_rgba(244,63,94,0.35)]',
    badgeRing: 'ring-2 ring-rose-400/50 bg-gradient-to-br from-rose-500 to-pink-600 text-white',
    badgeText: 'text-rose-700 dark:text-rose-300',
    ribbonColor: 'bg-rose-500 text-white',
  },
};

export const MASTER_ACHIEVEMENTS: AchievementBadge[] = [
  // 1. COURSE PROGRESS (🏆)
  {
    id: 'first_lesson',
    category: 'progress',
    title: 'First Step to Fluency',
    hindiTitle: 'अंग्रेजी यात्रा का पहला कदम',
    desc: 'Complete an interactive lesson to record your first learning milestone.',
    tier: 'silver',
    icon: 'Flag',
    badgeSymbol: '🌱',
    max: 1,
    xpReward: 50,
    calculateProgress: (user) => {
      const current = (user.completedLessonIds?.length || 0) > 0 ? 1 : 0;
      return {
        current,
        unlocked: current >= 1,
        earnedDate: current >= 1 ? 'First completed lesson' : undefined,
      };
    },
  },
  {
    id: 'stage_1_complete',
    category: 'progress',
    title: 'Stage 1 Pioneer (Day 10)',
    hindiTitle: 'स्टेज 1 पाठ्यक्रम उपलब्धि',
    desc: 'Complete the Day 1–10 course checkpoint; this records course progress only.',
    tier: 'gold',
    icon: 'Award',
    badgeSymbol: '🎖️',
    max: 10,
    xpReward: 150,
    calculateProgress: (_, daysCompleted = 0) => {
      const current = Math.min(10, daysCompleted);
      return {
        current,
        unlocked: current >= 10,
        earnedDate: current >= 10 ? 'Day 10 course milestone reached' : undefined,
      };
    },
  },
  {
    id: 'stage_3_complete',
    category: 'progress',
    title: 'Halfway Hero (Day 30)',
    hindiTitle: 'अर्ध-यात्रा विजय (30 दिन)',
    desc: 'Complete the 30-day course milestone. This is not a proficiency assessment.',
    tier: 'royal_indigo',
    icon: 'Compass',
    badgeSymbol: '⚡',
    max: 30,
    xpReward: 300,
    calculateProgress: (_, daysCompleted = 0) => {
      const current = Math.min(30, daysCompleted);
      return {
        current,
        unlocked: current >= 30,
        earnedDate: current >= 30 ? 'Day 30 Completion' : undefined,
      };
    },
  },
  {
    id: 'day_60_graduate',
    category: 'progress',
    title: '40-Day Released Path Milestone',
    hindiTitle: '40 दिवसीय पाठ्यक्रम उपलब्धि',
    desc: 'Complete the currently released Day 1–40 course path. This milestone is not a CEFR certificate.',
    tier: 'ruby',
    icon: 'GraduationCap',
    badgeSymbol: '👑',
    max: 40,
    xpReward: 0,
    calculateProgress: (_, daysCompleted = 0) => {
      const current = Math.min(40, Math.max(0, Number(daysCompleted) || 0));
      return {
        current,
        unlocked: current >= 40,
        earnedDate: current >= 40 ? 'Day 40 course completion' : undefined,
      };
    },
  },

  // 2. STREAK & HABITS (🔥)
  {
    id: 'streak_3',
    category: 'streak',
    title: 'Spark of Consistency',
    hindiTitle: '3 दिनों की निरंतरता',
    desc: 'Maintain a 3-day active learning habit without skipping a day.',
    tier: 'silver',
    icon: 'Flame',
    badgeSymbol: '🔥',
    max: 3,
    xpReward: 50,
    calculateProgress: (user) => {
      const current = Math.min(3, user.streakDays || 0);
      return {
        current,
        unlocked: current >= 3,
        earnedDate: current >= 3 ? 'Active Streak' : undefined,
      };
    },
  },
  {
    id: 'streak_7',
    category: 'streak',
    title: '7-Day Learning Streak',
    hindiTitle: '7 दिनों की निरंतर अभ्यास श्रृंखला',
    desc: 'Record seven consecutive active-learning days in the app.',
    tier: 'gold',
    icon: 'Flame',
    badgeSymbol: '🌟',
    max: 7,
    xpReward: 150,
    calculateProgress: (user) => {
      const current = Math.min(7, user.streakDays || 0);
      return {
        current,
        unlocked: current >= 7,
        earnedDate: current >= 7 ? 'Perfect Week' : undefined,
      };
    },
  },
  {
    id: 'streak_30',
    category: 'streak',
    title: '30-Day Learning Streak',
    hindiTitle: '30 दिनों की निरंतर अभ्यास श्रृंखला',
    desc: 'Record a 30-day active-learning streak in the app.',
    tier: 'ruby',
    icon: 'Flame',
    badgeSymbol: '💎',
    max: 30,
    xpReward: 500,
    calculateProgress: (user) => {
      const current = Math.min(30, user.streakDays || 0);
      return {
        current,
        unlocked: current >= 30,
        earnedDate: current >= 30 ? '30-Day Milestone' : undefined,
      };
    },
  },

  // 3. SPEAKING & ACCENT (🗣)
  {
    id: 'spoken_first',
    category: 'speaking',
    title: 'Voice Activated',
    hindiTitle: 'पहला उच्चारण अभ्यास',
    desc: 'Speech-recognition badge tracking is not available in this release; no turn is assumed.',
    tier: 'silver',
    icon: 'Mic',
    badgeSymbol: '🎙️',
    max: 1,
    xpReward: 50,
    calculateProgress: () => ({
      current: 0,
      unlocked: false,
      trackingAvailable: false,
    }),
  },
  {
    id: 'speaking_champion',
    category: 'speaking',
    title: 'Dialogue Practice (50 Turns)',
    hindiTitle: 'संवाद अभ्यास (50 मोड़)',
    desc: 'Dialogue-turn badge tracking is not available in this release; no turns are inferred from streaks.',
    tier: 'emerald',
    icon: 'MessageSquare',
    badgeSymbol: '💬',
    max: 50,
    xpReward: 200,
    calculateProgress: () => ({ current: 0, unlocked: false, trackingAvailable: false }),
  },
  {
    id: 'accent_ace',
    category: 'speaking',
    title: 'Speaking Score (Tracking Unavailable)',
    hindiTitle: 'मौखिक स्कोर (ट्रैकिंग उपलब्ध नहीं)',
    desc: 'This release does not record acoustic pronunciation scores; no score or badge progress is inferred.',
    tier: 'gold',
    icon: 'Volume2',
    badgeSymbol: '🎯',
    max: 100,
    xpReward: 250,
    calculateProgress: () => ({
      current: 0,
      unlocked: false,
      trackingAvailable: false,
    }),
  },

  // 4. VOCABULARY (📚)
  {
    id: 'vocab_explorer',
    category: 'vocabulary',
    title: 'Vocabulary Recall (25 Items)',
    hindiTitle: 'शब्दावली स्मरण (25 शब्द)',
    desc: 'Vocabulary recall is not recorded in this release; no progress is inferred from course completion.',
    tier: 'silver',
    icon: 'BookOpen',
    badgeSymbol: '📖',
    max: 25,
    xpReward: 75,
    calculateProgress: () => ({ current: 0, unlocked: false, trackingAvailable: false }),
  },
  {
    id: 'vocab_100',
    category: 'vocabulary',
    title: 'Vocabulary Recall (100 Items)',
    hindiTitle: 'शब्दावली स्मरण (100 शब्द)',
    desc: 'Vocabulary recall is not recorded in this release; no progress is inferred from course completion.',
    tier: 'gold',
    icon: 'BookOpen',
    badgeSymbol: '📚',
    max: 100,
    xpReward: 250,
    calculateProgress: () => ({ current: 0, unlocked: false, trackingAvailable: false }),
  },
  {
    id: 'vocab_500',
    category: 'vocabulary',
    title: 'Vocabulary Recall (500 Items)',
    hindiTitle: 'शब्दावली स्मरण (500 शब्द)',
    desc: 'Vocabulary recall is not recorded in this release; no progress is inferred from course completion.',
    tier: 'royal_indigo',
    icon: 'BookOpen',
    badgeSymbol: '🏛️',
    max: 500,
    xpReward: 600,
    calculateProgress: () => ({ current: 0, unlocked: false, trackingAvailable: false }),
  },

  // 5. GRAMMAR (✍)
  {
    id: 'grammar_shield',
    category: 'grammar',
    title: 'Grammar Syntax Shield',
    hindiTitle: 'व्याकरण सुरक्षा कवच',
    desc: 'Error-correction challenge history is not currently recorded; no progress is inferred.',
    tier: 'emerald',
    icon: 'ShieldCheck',
    badgeSymbol: '🛡️',
    max: 10,
    xpReward: 150,
    calculateProgress: () => ({
      current: 0,
      unlocked: false,
      trackingAvailable: false,
    }),
  },
  {
    id: 'tense_virtuoso',
    category: 'grammar',
    title: 'Tense Virtuoso (12 Tenses)',
    hindiTitle: 'काल ज्ञान निपुण (12 काल संरचनाएं)',
    desc: 'Tense-specific mastery is not currently measured; no progress is inferred.',
    tier: 'royal_indigo',
    icon: 'Clock',
    badgeSymbol: '⏳',
    max: 12,
    xpReward: 300,
    calculateProgress: () => ({
      current: 0,
      unlocked: false,
      trackingAvailable: false,
    }),
  },

  // 6. ASSESSMENTS (🎯)
  {
    id: 'perfect_assessment',
    category: 'assessments',
    title: 'Perfect Assessment (100%)',
    hindiTitle: 'शत-प्रतिशत मूल्यांकन (100%)',
    desc: 'A 100% result may be recorded for an in-app A1 course assessment; it is not a proficiency result.',
    tier: 'gold',
    icon: 'Target',
    badgeSymbol: '🎯',
    max: 100,
    xpReward: 200,
    calculateProgress: (user) => {
      const current = Math.max(0, ...(user.a1AssessmentHistory || []).map((attempt) => Math.min(100, Math.max(0, Number(attempt.scorePercent) || 0))));
      return { current, unlocked: current >= 100, earnedDate: current >= 100 ? 'Recorded assessment history' : undefined };
    },
  },
  {
    id: 'a1_graduate',
    category: 'assessments',
    title: 'A1 Course Assessment Passed',
    hindiTitle: 'ए1 पाठ्यक्रम मूल्यांकन उत्तीर्ण',
    desc: 'Pass the in-app A1 exit assessment. This badge is not an official CEFR credential.',
    tier: 'emerald',
    icon: 'Award',
    badgeSymbol: '📜',
    max: 1,
    xpReward: 400,
    calculateProgress: (user) => {
      const isA1Passed = (user.a1AssessmentHistory || []).some((attempt) => Boolean(attempt.passed));
      return {
        current: isA1Passed ? 1 : 0,
        unlocked: isA1Passed,
        earnedDate: isA1Passed ? 'Recorded A1 course assessment' : undefined,
      };
    },
  },
  {
    id: 'b1_graduate',
    category: 'assessments',
    title: 'B1 course content planned',
    hindiTitle: 'बी1 पाठ्यक्रम सामग्री प्रस्तावित',
    desc: 'B1 content is not released in this version; no B1 credential is issued.',
    tier: 'royal_indigo',
    icon: 'Award',
    badgeSymbol: '🎓',
    max: 1,
    xpReward: 750,
    calculateProgress: () => ({ current: 0, unlocked: false, trackingAvailable: false }),
  },

  // 7. SPECIAL MILESTONES (🌟)
  {
    id: 'xp_1000_club',
    category: 'special',
    title: '1,000 XP Club',
    hindiTitle: '1,000 XP विशिष्ट क्लब',
    desc: 'Reach 1,000 total XP recorded on your Academy profile.',
    tier: 'gold',
    icon: 'Zap',
    badgeSymbol: '⚡',
    max: 1000,
    xpReward: 200,
    calculateProgress: (user) => {
      const current = Math.min(1000, user.totalXp || 0);
      return {
        current,
        unlocked: current >= 1000,
        earnedDate: current >= 1000 ? 'XP Milestone' : undefined,
      };
    },
  },
  {
    id: 'early_bird',
    category: 'special',
    title: 'Morning Momentum Scholar',
    hindiTitle: 'प्रातःकालीन अभ्यास निष्ठा',
    desc: 'Time-of-day lesson history is not recorded, so this badge cannot yet be verified.',
    tier: 'silver',
    icon: 'Sun',
    badgeSymbol: '🌅',
    max: 5,
    xpReward: 100,
    calculateProgress: () => ({
      current: 0,
      unlocked: false,
      trackingAvailable: false,
    }),
  },
  {
    id: 'polyglot_pioneer',
    category: 'special',
    title: 'Bilingual Bridge Pioneer',
    hindiTitle: 'द्विभाषी सेतु प्रवीण',
    desc: 'Use of bilingual explanations is not tracked; this badge cannot verify fluency.',
    tier: 'emerald',
    icon: 'Globe',
    badgeSymbol: '🌐',
    max: 1,
    xpReward: 150,
    calculateProgress: () => ({
      current: 0,
      unlocked: false,
      trackingAvailable: false,
    }),
  },
];
