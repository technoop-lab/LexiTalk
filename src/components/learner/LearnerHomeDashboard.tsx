import React, { useState } from 'react';
import {
  Flame,
  Zap,
  BookOpen,
  Play,
  RotateCcw,
  Target,
  Sparkles,
  ChevronRight,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Clock,
  Award,
  Mic,
  FileText,
  TrendingUp,
  Quote,
  Lightbulb,
  Trophy,
  ShieldCheck,
  Headphones,
  RefreshCw,
  Sparkle
} from 'lucide-react';
import { UserAcademyProfile } from '../../types';
import { HindiCourseProgress } from '../../types/hindiCourse';
import { CurriculumService } from '../../services/CurriculumService';
import { HindiCourseProgressService } from '../../services/HindiCourseProgressService';
import { HindiCourseService, HINDI_DAY_XP_REWARD } from '../../services/HindiCourseService';
import { getLanguageRegistryEntry, getLanguageInfo } from '../../data/languages';
import { playSoundEffectEffect } from '../../utils/audioUtils';
import { DailyVocabChallengeWidget } from '../vocab/DailyVocabChallengeWidget';
import { LESSON_A1_1_1_DATA } from '../../data/lessons/lesson_a1_1_1';

interface LearnerHomeDashboardProps {
  user: UserAcademyProfile;
  onContinueLesson: (lessonId: string) => void;
  onNavigate: (view: string) => void;
  onOpenJourneySelector: () => void;
  onOpenLanguageSetup: () => void;
  onOpenVocabStudio?: () => void;
  onOpenSpokenLab?: () => void;
}

const MOTIVATIONAL_TIPS = [
  {
    category: 'CEFR Fluency Strategy',
    icon: Lightbulb,
    tip: 'Think directly in short English phrase chunks rather than translating word-by-word from Hindi.',
    hindi: 'हिंदी से शब्द-दर-शब्द अनुवाद करने के बजाय सीधे छोटे अंग्रेजी वाक्यों में सोचें।',
  },
  {
    category: 'Pronunciation Mastery',
    icon: Mic,
    tip: 'For the "th" sound (think, thank), gently place the tip of your tongue between your upper and lower teeth.',
    hindi: '"th" ध्वनि के लिए जीभ की नोक को दांतों के बीच धीरे से रखें।',
  },
  {
    category: 'Spaced Repetition Goal',
    icon: Target,
    tip: 'Reviewing yesterday’s vocabulary for just 3 minutes doubles your long-term memory retention.',
    hindi: 'कल के शब्दों को केवल 3 मिनट दोहराने से याददाश्त दोगुनी मजबूत होती है।',
  },
  {
    category: 'Active Listening Habit',
    icon: Headphones,
    tip: 'Shadowing dialogue turns: Repeat right after the native speaker with the exact same rhythm and intonation.',
    hindi: 'संवाद को सुनते ही वक्ता की लय और उच्चारण के साथ दोहराएं।',
  },
];

export const LearnerHomeDashboard: React.FC<LearnerHomeDashboardProps> = ({
  user,
  onContinueLesson,
  onNavigate,
  onOpenJourneySelector,
  onOpenVocabStudio,
  onOpenSpokenLab,
}) => {
  const targetLang = user.learningLanguage || 'en';
  const targetReg = getLanguageRegistryEntry(targetLang);
  // The flag reflects the accent being taught, not the target language.
  const activeAccent = user.preferences?.accentPreference;
  const accentFlag = activeAccent === 'en-US' ? '\u{1F1FA}\u{1F1F8}' : activeAccent === 'en-GB' ? '\u{1F1EC}\u{1F1E7}' : '\u{1F1EE}\u{1F1F3}';


  const [hindiProgress, setHindiProgress] = useState<HindiCourseProgress>(() =>
    HindiCourseProgressService.getProgress(user?.id)
  );

  const [tipIndex, setTipIndex] = useState(0);

  React.useEffect(() => {
    const activeUserId = user?.id;
    setHindiProgress(HindiCourseProgressService.getProgress(activeUserId));

    const unsubscribe = HindiCourseProgressService.subscribe((updatedProg) => {
      setHindiProgress(updatedProg);
    });

    return () => {
      unsubscribe();
    };
  }, [user?.id]);

  const availableHindiDays = HindiCourseService.getAvailableDaysCount();
  const nextHindiDayNum =
    Array.from({ length: availableHindiDays }, (_, i) => i + 1).find(
      (dayNum) =>
        hindiProgress.unlockedDays.includes(dayNum) && !hindiProgress.completedDays.includes(dayNum)
    ) || (hindiProgress.completedDays.length >= availableHindiDays ? availableHindiDays + 1 : hindiProgress.currentDayNumber || 1);
  const nextHindiDayLesson = HindiCourseService.getDayByNumber(nextHindiDayNum);

  const units = CurriculumService.getUnitsForCEFR((user.currentCEFR as any) || 'A1', targetLang);
  const currentUnit = units[0];
  const currentLesson = currentUnit?.lessons[0];

  const isDayLessonCompleted = hindiProgress.completedDays.includes(nextHindiDayNum);
  const wordsLearnedCount = HindiCourseService.countWordsInDays(hindiProgress.completedDays);
  const completedLessonsCount = hindiProgress.completedDays.length;
  const completionPercentage = availableHindiDays > 0 ? Math.min(100, Math.round((completedLessonsCount / availableHindiDays) * 100)) : 0;
  const dialogueTurns = HindiCourseService.countTurnsInDays(hindiProgress.completedDays);

  // Determine current stage metadata based on next day
  const currentStageNum = Math.min(4, Math.max(1, Math.ceil(nextHindiDayNum / 10)));
  const stageTitles: Record<number, { en: string; hi: string }> = {
    1: { en: 'Absolute Foundations & Daily Routine', hi: 'बुनियादी अंग्रेजी एवं दैनिक दिनचर्या' },
    2: { en: 'Functional Interactions & Tense Practice', hi: 'व्यावहारिक संवाद व काल अभ्यास' },
    3: { en: 'Conversational Narratives & Past Actions', hi: 'भूतकाल की कहानियां व धाराप्रवाह संवाद' },
    4: { en: 'Nuanced Discourse & Everyday Expressions', hi: 'उन्नत शिष्टाचार व मुहावरेदार अभिव्यक्ति' },
    5: { en: 'Days 41–50: Planned Content', hi: 'दिन 41–50: प्रस्तावित पाठ्यक्रम सामग्री' },
    6: { en: 'Days 51–60: Planned Content', hi: 'दिन 51–60: प्रस्तावित पाठ्यक्रम सामग्री' },
  };
  const currentStage = stageTitles[currentStageNum] || stageTitles[1];
  const stageStartDay = (currentStageNum - 1) * 10 + 1;
  const stageCompletedDays = hindiProgress.completedDays.filter(
    (dayNum: number) => dayNum >= stageStartDay && dayNum < stageStartDay + 10
  ).length;
  const stageCompletionPercent = Math.round((stageCompletedDays / 10) * 100);

  // Dynamic time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  // 7-day capsule streak metadata
  const daysOfWeek = [
    { label: 'M', name: 'Mon' },
    { label: 'T', name: 'Tue' },
    { label: 'W', name: 'Wed' },
    { label: 'T', name: 'Thu' },
    { label: 'F', name: 'Fri' },
    { label: 'S', name: 'Sat' },
    { label: 'S', name: 'Sun' },
  ];
  const currentDayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  const handleLaunchContinue = () => {
    playSoundEffectEffect('tap');
    if (nextHindiDayLesson || nextHindiDayNum > availableHindiDays) {
      onNavigate('HINDI_COURSE');
    } else if (currentLesson) {
      onContinueLesson(currentLesson.id);
    }
  };

  const handleNextTip = () => {
    playSoundEffectEffect('tap');
    setTipIndex((prev) => (prev + 1) % MOTIVATIONAL_TIPS.length);
  };

  // Apple Fitness Ring calculation
  const ringRadius = 34;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringStrokeOffset = ringCircumference - (completionPercentage / 100) * ringCircumference;

  return (
    <div className="flex flex-col space-y-6 p-4 sm:p-5 pb-32 text-slate-900 dark:text-slate-100 w-full max-w-lg mx-auto animate-fade-in">
      
      {/* ========================================================================= */}
      {/* SECTION 1 — FLAGSHIP HERO CARD (Apple Fitness + Duolingo Max Aesthetics)  */}
      {/* ========================================================================= */}
      <section
        id="home-hero-card"
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2E54FF] via-[#4361EE] to-[#6E44FF] p-6 sm:p-7 text-white shadow-2xl shadow-indigo-500/25 border border-white/20 space-y-5"
      >
        {/* Floating Glowing Animated Blobs */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/20 rounded-full blur-3xl pointer-events-none animate-blob-drift" />
        <div className="absolute -bottom-20 -left-12 w-64 h-64 bg-indigo-950/50 rounded-full blur-3xl pointer-events-none animate-blob-drift" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header: Avatar, Greeting, Name & Journey Selector */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-3.5">
            {/* 3D Glowing Learner Avatar */}
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-2xl shadow-inner shrink-0">
                {user.avatar || '🦉'}
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-[#2E54FF] rounded-full shadow-sm ring-2 ring-emerald-400/40" />
            </div>

            <div>
              <span className="text-xs font-bold text-indigo-100 tracking-wider uppercase opacity-90 block font-mono">
                {getGreeting()}
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight font-display">
                Welcome, {user.name?.split(' ')[0] || 'Explorer'}
              </h1>
            </div>
          </div>

          {/* Journey Switcher Pill */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onOpenJourneySelector();
            }}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-xs font-bold transition shadow-sm active:scale-95 cursor-pointer text-white"
            title="Switch Language Journey"
            aria-label="Switch Language Journey"
          >
            <span className="text-base">{accentFlag}</span>
            <span className="font-extrabold">{targetReg.name}</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>

        {/* Middle Stats & Apple Fitness Progress Ring */}
        <div className="flex items-center justify-between gap-3 pt-1 relative z-10">
          {/* Fitness Rings & Overall Progress */}
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex-1 min-w-0">
            <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                <circle
                  cx="40"
                  cy="40"
                  r={ringRadius}
                  className="stroke-white/20"
                  strokeWidth="7"
                  fill="transparent"
                />
                <circle
                  cx="40"
                  cy="40"
                  r={ringRadius}
                  className="stroke-emerald-300 transition-all duration-1000 ease-out"
                  strokeWidth="7"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={ringStrokeOffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-black text-white font-mono leading-none">
                  {completionPercentage}%
                </span>
                <span className="text-[9px] font-bold text-emerald-200 mt-0.5">{availableHindiDays} days released</span>
              </div>
            </div>

            <div className="min-w-0">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-100 block">
                Course Progress
              </span>
              <h3 className="text-sm font-black text-white truncate">
                {nextHindiDayLesson ? `Day ${nextHindiDayNum} of ${HindiCourseService.getTotalPlannedDays()}` : `${availableHindiDays} released days complete`}
              </h3>
              <p className="text-[11px] text-indigo-100/80 truncate">
                {nextHindiDayLesson ? `Stage ${currentStageNum}: ${currentStage.en}` : 'Days 41–60 are planned and not yet released'}
              </p>
            </div>
          </div>

          {/* CEFR & Streak Compact Badges */}
          <div className="flex flex-col space-y-2 shrink-0">
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-3 py-1.5 flex items-center space-x-2">
              <Target className="w-3.5 h-3.5 text-cyan-300" />
              <div>
                <span className="text-[9px] font-bold uppercase text-indigo-100 block leading-none">Selected level</span>
                <span className="text-xs font-black text-white">{user.currentCEFR || 'A1'}</span>
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-3 py-1.5 flex items-center space-x-2">
              <Flame className="w-3.5 h-3.5 text-amber-300 animate-flame" />
              <div>
                <span className="text-[9px] font-bold uppercase text-indigo-100 block leading-none">Streak</span>
                <span className="text-xs font-black text-amber-300">{user.streakDays || 0} Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary and Secondary Action Buttons */}
        <div className="space-y-2 pt-1 relative z-10">
          {/* Primary CTA */}
          <button
            id="hero-primary-cta"
            onClick={handleLaunchContinue}
            className="w-full py-3.5 px-4 bg-white hover:bg-indigo-50 text-indigo-950 font-black text-sm sm:text-base tracking-wide rounded-2xl shadow-xl shadow-indigo-950/20 transition active:scale-[0.98] flex items-center justify-between cursor-pointer btn-press border border-white/80 group"
          >
            <div className="flex items-center space-x-3 text-left min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E54FF] to-[#6E44FF] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
              <div className="truncate">
                <span className="text-[10px] font-extrabold uppercase text-indigo-600 block tracking-wider leading-none mb-0.5">
                  {nextHindiDayLesson ? (isDayLessonCompleted ? 'Review completed day' : "▶ Continue Today's Lesson") : 'View course update status'}
                </span>
                <span className="text-sm font-black text-slate-900 truncate block">
                  {nextHindiDayLesson ? `Day ${nextHindiDayNum}: ${nextHindiDayLesson.titleEn}` : nextHindiDayNum > availableHindiDays ? 'Days 41–60 are planned and not yet released' : 'Start Everyday English'}
                </span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center text-indigo-700 shrink-0 ml-2 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          {/* Secondary CTA: Review Mistakes */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onNavigate('REVIEW');
            }}
            className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-wide rounded-xl border border-white/20 transition active:scale-[0.98] flex items-center justify-center space-x-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-300" />
            <span>Review Mistakes & Spaced Repetition</span>
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 — TODAY'S MISSION CARD                                          */}
      {/* ========================================================================= */}
      <section
        id="today-mission-card"
        className="bg-white dark:bg-[#0B1225] border border-[#D9E4FF] dark:border-white/10 rounded-[28px] p-5 sm:p-6 shadow-md dark:shadow-2xl relative overflow-hidden space-y-4"
      >
        {/* Mission Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30">
              {nextHindiDayLesson ? "Today's Mission (आज का लक्ष्य)" : 'Course update'}
            </span>
          </div>

          <div className="flex items-center space-x-1.5 bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/30 font-mono text-xs font-black">
            <Zap className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>{nextHindiDayLesson ? `+${HINDI_DAY_XP_REWARD} XP once` : 'No new lesson reward available'}</span>
          </div>
        </div>

        {/* Lesson Title & Hindi Subtitle */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400 font-mono">
              {nextHindiDayLesson ? `DAY ${nextHindiDayNum} OF ${availableHindiDays}` : `${availableHindiDays} released days complete`}
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-snug">
            {nextHindiDayLesson ? nextHindiDayLesson.titleEn : 'Days 41–60 are planned and not yet released'}
          </h2>
          <p className="text-xs sm:text-sm text-indigo-700 dark:text-indigo-300 font-hindi font-semibold">
            {nextHindiDayLesson ? nextHindiDayLesson.titleHi : ''}
          </p>
        </div>

        {/* Mission Metrics: Vocab, Dialogue, Practice, Time */}
        <div className="grid grid-cols-4 gap-2 pt-1">
          <div className="bg-slate-50 dark:bg-white/5 p-2.5 rounded-2xl border border-[#D9E4FF] dark:border-white/5 text-center">
            <span className="text-xs font-black text-slate-900 dark:text-white font-display block">
              {nextHindiDayLesson ? nextHindiDayLesson.learn?.vocabulary?.length ?? 0 : '—'}
            </span>
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block mt-0.5">Vocab</span>
          </div>

          <div className="bg-slate-50 dark:bg-white/5 p-2.5 rounded-2xl border border-[#D9E4FF] dark:border-white/5 text-center">
            <span className="text-xs font-black text-slate-900 dark:text-white font-display block">
              {nextHindiDayLesson ? nextHindiDayLesson.use?.dialogue?.turns?.length ?? 0 : '—'}
            </span>
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block mt-0.5">Turns</span>
          </div>

          <div className="bg-slate-50 dark:bg-white/5 p-2.5 rounded-2xl border border-[#D9E4FF] dark:border-white/5 text-center">
            <span className="text-xs font-black text-slate-900 dark:text-white font-display block">
              {nextHindiDayLesson ? nextHindiDayLesson.practice?.length ?? 0 : '—'}
            </span>
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block mt-0.5">Drills</span>
          </div>

          <div className="bg-slate-50 dark:bg-white/5 p-2.5 rounded-2xl border border-[#D9E4FF] dark:border-white/5 text-center">
            <span className="text-xs font-black text-slate-900 dark:text-white font-display block">
              {nextHindiDayLesson ? `${nextHindiDayLesson.estMinutes ?? '—'}m` : '—'}
            </span>
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block mt-0.5">Time</span>
          </div>
        </div>

        {/* Progress Bar with Gradient */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
            <span>Stage {currentStageNum} course progress</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-mono font-black">
              {stageCompletionPercent}%
            </span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-950 rounded-full h-2.5 p-0.5 border border-slate-200 dark:border-slate-800">
            <div
              className="bg-gradient-to-r from-[#335CFF] via-[#6E44FF] to-emerald-400 h-full rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${stageCompletionPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2.5 — DAILY VOCABULARY CHALLENGE WIDGET                           */}
      {/* ========================================================================= */}
      <section id="daily-vocab-challenge-section">
        <DailyVocabChallengeWidget
          dailyWords={nextHindiDayLesson?.learn?.vocabulary || LESSON_A1_1_1_DATA.vocabulary || []}
          nativeLang={user.nativeLanguage || 'hi'}
          onOpenVocabStudio={() => {
            if (onOpenVocabStudio) {
              onOpenVocabStudio();
            } else {
              onNavigate('PRACTICE');
            }
          }}
        />
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — PREMIUM STATS GRID (XP, Words, Lessons, Speaking Minutes)    */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3" id="stats-grid">
        {/* Stat 1: Total XP */}
        <div className="bg-white dark:bg-[#0B1225] border border-[#D9E4FF] dark:border-white/10 rounded-3xl p-4 shadow-sm dark:shadow-md card-lift flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#335CFF] to-[#6E44FF] flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Zap className="w-5 h-5 fill-current text-amber-300" />
            </div>
            <span className="text-[10px] font-black uppercase text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-500/20">
              Total XP
            </span>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
              {user.totalXp || 0}
            </div>
            <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">
              Rank: {(user.totalXp || 0) >= 2000
                ? 'Master'
                : (user.totalXp || 0) >= 1000
                ? 'Achiever'
                : (user.totalXp || 0) >= 300
                ? 'Scholar'
                : 'Beginner'}
            </div>
          </div>
        </div>

        {/* Stat 2: Words Mastered */}
        <div className="bg-white dark:bg-[#0B1225] border border-[#D9E4FF] dark:border-white/10 rounded-3xl p-4 shadow-sm dark:shadow-md card-lift flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-200 dark:border-cyan-500/20">
              Vocabulary items
            </span>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
              {wordsLearnedCount}
            </div>
            <div className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 mt-0.5">
              from completed lessons
            </div>
          </div>
        </div>

        {/* Stat 3: Lessons Completed */}
        <div className="bg-white dark:bg-[#0B1225] border border-[#D9E4FF] dark:border-white/10 rounded-3xl p-4 shadow-sm dark:shadow-md card-lift flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/20">
              Released days
            </span>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
              {completedLessonsCount} <span className="text-xs font-bold text-slate-500">/ {availableHindiDays}</span>
            </div>
            <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
              {completionPercentage}% complete
            </div>
          </div>
        </div>

        {/* Stat 4: Speaking Minutes */}
        <div className="bg-white dark:bg-[#0B1225] border border-[#D9E4FF] dark:border-white/10 rounded-3xl p-4 shadow-sm dark:shadow-md card-lift flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
              <Mic className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-500/20">
              Dialogue content
            </span>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
              {dialogueTurns} <span className="text-xs font-bold text-slate-500">turns</span>
            </div>
            <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400 mt-0.5">
              Dialogue turns listed in completed lessons
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — WEEKLY STREAK CAPSULES                                        */}
      {/* ========================================================================= */}
      <section
        id="weekly-streak-card"
        className="bg-white dark:bg-[#0B1225] border border-[#D9E4FF] dark:border-white/10 rounded-[28px] p-5 sm:p-6 shadow-sm dark:shadow-md space-y-4 card-lift"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center text-amber-500 dark:text-amber-400 shrink-0">
              <Flame className="w-5 h-5 fill-current animate-flame" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-black text-slate-900 dark:text-white font-display">
                  {user.streakDays || 0} Day Active Streak
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-black uppercase bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 rounded-full">
                  🔥 On Fire
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Practice daily to maintain your momentum
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-1 text-xs font-extrabold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>Perfect Week</span>
          </div>
        </div>

        {/* 7 Floating Capsules */}
        <div className="grid grid-cols-7 gap-2 pt-1">
          {daysOfWeek.map((day, idx) => {
            const isPast = idx < currentDayIndex;
            const isToday = idx === currentDayIndex;
            // A day only shows a tick if the learner really practised it.
            const streakLen = user.streakDays || 0;
            const isDone = isToday ? streakLen > 0 : isPast && (currentDayIndex - idx) <= streakLen - 1;

            return (
              <div
                key={`streak_day_${idx}`}
                className="flex flex-col items-center space-y-1.5"
              >
                <div
                  className={`w-full py-3 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 border ${
                    isToday
                      ? 'bg-gradient-to-b from-amber-400 to-orange-500 text-slate-950 border-amber-300 shadow-md shadow-amber-500/30 scale-105 animate-soft-pulse font-black'
                      : isDone
                      ? 'bg-amber-50 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-500/30 font-extrabold'
                      : 'bg-slate-50 dark:bg-slate-950/60 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 font-bold'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold opacity-80">
                    {day.label}
                  </span>
                  <span className="text-xs mt-0.5">
                    {isDone ? '✓' : '•'}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">
                  {day.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — QUICK ACTIONS (6 Premium Square Cards)                        */}
      {/* ========================================================================= */}
      <section className="space-y-3" id="quick-actions-section">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-black text-slate-900 dark:text-white tracking-tight font-display">
            Quick Practice Labs
          </h3>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">All Modules</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {/* Action 1: Speaking Lab */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              if (onOpenSpokenLab) {
                onOpenSpokenLab();
              } else {
                onNavigate('HINDI_COURSE');
              }
            }}
            className="bg-white dark:bg-[#0B1225] hover:bg-slate-50 dark:hover:bg-white/5 border border-[#D9E4FF] dark:border-white/10 hover:border-emerald-400 rounded-3xl p-4 text-left transition shadow-sm dark:shadow-md card-lift group cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors font-display">
                Speaking Lab
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 line-clamp-1">
                Accent & pronunciation
              </p>
            </div>
          </button>

          {/* Action 2: Vocabulary */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              if (onOpenVocabStudio) {
                onOpenVocabStudio();
              } else {
                onNavigate('PRACTICE');
              }
            }}
            className="bg-white dark:bg-[#0B1225] hover:bg-slate-50 dark:hover:bg-white/5 border border-[#D9E4FF] dark:border-white/10 hover:border-cyan-400 rounded-3xl p-4 text-left transition shadow-sm dark:shadow-md card-lift group cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors font-display">
                Vocabulary
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 line-clamp-1">
                Flashcards & audio words
              </p>
            </div>
          </button>

          {/* Action 3: Dialogues */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onNavigate('CONVERSATION');
            }}
            className="bg-white dark:bg-[#0B1225] hover:bg-slate-50 dark:hover:bg-white/5 border border-[#D9E4FF] dark:border-white/10 hover:border-indigo-400 rounded-3xl p-4 text-left transition shadow-sm dark:shadow-md card-lift group cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#335CFF] to-[#6E44FF] flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-display">
                Dialogues
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 line-clamp-1">
                Real roleplay scenarios
              </p>
            </div>
          </button>

          {/* Action 4: Grammar Rules */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onNavigate('PRACTICE');
            }}
            className="bg-white dark:bg-[#0B1225] hover:bg-slate-50 dark:hover:bg-white/5 border border-[#D9E4FF] dark:border-white/10 hover:border-purple-400 rounded-3xl p-4 text-left transition shadow-sm dark:shadow-md card-lift group cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors font-display">
                Grammar Rules
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 line-clamp-1">
                Formulas & Hindi traps
              </p>
            </div>
          </button>

          {/* Action 5: Review Mistakes */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onNavigate('REVIEW');
            }}
            className="bg-white dark:bg-[#0B1225] hover:bg-slate-50 dark:hover:bg-white/5 border border-[#D9E4FF] dark:border-white/10 hover:border-rose-400 rounded-3xl p-4 text-left transition shadow-sm dark:shadow-md card-lift group cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors font-display">
                Review
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 line-clamp-1">
                Spaced retention drills
              </p>
            </div>
          </button>

          {/* Action 6: Assessments */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onNavigate('PROGRESS');
            }}
            className="bg-white dark:bg-[#0B1225] hover:bg-slate-50 dark:hover:bg-white/5 border border-[#D9E4FF] dark:border-white/10 hover:border-amber-400 rounded-3xl p-4 text-left transition shadow-sm dark:shadow-md card-lift group cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors font-display">
                Assessment
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 line-clamp-1">
                In-app course checks & progress
              </p>
            </div>
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6 — DAILY MOTIVATION & CEFR TIP CARD                              */}
      {/* ========================================================================= */}
      <section
        id="daily-motivation-card"
        className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-[28px] p-5 sm:p-6 shadow-xl border border-indigo-500/30 relative overflow-hidden space-y-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-indigo-300">
            {React.createElement(MOTIVATIONAL_TIPS[tipIndex].icon, { className: 'w-4 h-4 text-amber-400' })}
            <span className="text-xs font-black uppercase tracking-wider font-mono text-indigo-200">
              {MOTIVATIONAL_TIPS[tipIndex].category}
            </span>
          </div>

          <button
            onClick={handleNextTip}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 transition active:scale-95 cursor-pointer"
            title="Next Strategy"
            aria-label="Next Strategy"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-1.5 pt-1">
          <p className="text-sm font-bold text-white leading-relaxed">
            "{MOTIVATIONAL_TIPS[tipIndex].tip}"
          </p>
          <p className="text-xs text-indigo-300 font-hindi font-medium">
            {MOTIVATIONAL_TIPS[tipIndex].hindi}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7 — COURSE SNAPSHOT & CAPSTONE REWARD BANNER                      */}
      {/* ========================================================================= */}
      <section
        id="course-snapshot-banner"
        onClick={() => {
          playSoundEffectEffect('tap');
          onNavigate('HINDI_COURSE');
        }}
        className="bg-gradient-to-r from-emerald-600 via-teal-600 to-[#335CFF] rounded-[28px] p-5 text-white shadow-xl flex items-center justify-between transition group active:scale-[0.99] cursor-pointer border border-white/20"
      >
        <div className="flex items-center space-x-3.5 min-w-0">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-2xl shrink-0 shadow-inner">
            🇮🇳
          </div>
          <div className="text-left min-w-0">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-black uppercase tracking-wider bg-black/25 px-2.5 py-0.5 rounded-full inline-block">
                Stage {currentStageNum} of {Math.ceil(availableHindiDays / 10)} released stages
              </span>
              <span className="text-[10px] font-bold text-emerald-200">
                {completionPercentage}% Complete
              </span>
            </div>
            <h4 className="text-base font-black text-white font-display truncate mt-0.5">
              Stage {currentStageNum}: {currentStage.en}
            </h4>
            <p className="text-xs text-emerald-100 font-hindi truncate">
              Days 41–60 are planned and not yet released
            </p>
          </div>
        </div>

        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 ml-2 group-hover:translate-x-1 transition-transform">
          <ChevronRight className="w-5 h-5" />
        </div>
      </section>

    </div>
  );
};
