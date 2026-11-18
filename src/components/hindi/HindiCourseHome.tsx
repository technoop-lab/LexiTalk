import React, { useState, useEffect } from 'react';
import {
  Flame,
  Zap,
  Award,
  Lock,
  CheckCircle2,
  Play,
  RotateCcw,
  Sparkles,
  BookOpen,
  ChevronRight,
  Star,
  Layers,
  Clock,
  Compass,
  Mic,
  Search,
  Check,
  CheckCheck,
  ArrowRight,
  TrendingUp,
  HelpCircle,
  FileText
} from 'lucide-react';
import { UserAcademyProfile } from '../../types';
import { HindiDayLesson, HindiCourseProgress, HindiCourseStageMeta } from '../../types/hindiCourse';
import { HindiCourseService, HINDI_DAY_XP_REWARD } from '../../services/HindiCourseService';
import { HindiCourseProgressService } from '../../services/HindiCourseProgressService';
import { HindiSpokenLabModal } from './HindiSpokenLabModal';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface HindiCourseHomeProps {
  user: UserAcademyProfile;
  onLaunchDayLesson: (dayLesson: HindiDayLesson) => void;
  onSwitchTab?: (tab: string) => void;
}

export const HindiCourseHome: React.FC<HindiCourseHomeProps> = ({
  user,
  onLaunchDayLesson,
}) => {
  const [progress, setProgress] = useState<HindiCourseProgress>(() =>
    HindiCourseProgressService.getProgress(user?.id)
  );
  const [selectedStageFilter, setSelectedStageFilter] = useState<number | 'all'>('all');
  const [showSpokenLab, setShowSpokenLab] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const stages = HindiCourseService.getStages();
  const totalPlannedDays = HindiCourseService.getTotalPlannedDays(); // planned course length (60)
  const availableDays = HindiCourseService.getAvailableDaysCount();

  // Subscribe to progress updates
  useEffect(() => {
    const activeUserId = user?.id;
    setProgress(HindiCourseProgressService.getProgress(activeUserId));

    const unsubscribe = HindiCourseProgressService.subscribe((updatedProg) => {
      setProgress(updatedProg);
    });

    return () => {
      unsubscribe();
    };
  }, [user?.id]);

  // Find next active day to continue
  const nextIncompleteDayNum =
    Array.from({ length: availableDays }, (_, i) => i + 1).find(
      (dayNum) =>
        progress.unlockedDays.includes(dayNum) && !progress.completedDays.includes(dayNum)
    ) || (progress.completedDays.length >= availableDays ? availableDays + 1 : progress.currentDayNumber || 1);

  const continueDayLesson = HindiCourseService.getDayByNumber(nextIncompleteDayNum);
  const currentStage = HindiCourseService.getStageForDay(nextIncompleteDayNum) || stages[0];

  const completedCount = progress.completedDays.length;
  const overallProgressPercent = availableDays > 0 ? Math.min(100, Math.round((completedCount / availableDays) * 100)) : 0;

  const dueReviews = HindiCourseProgressService.getDueReviews(user?.id);

  const handleLaunchDay = (dayNum: number) => {
    playSoundEffectEffect('tap');
    const dayLesson = HindiCourseService.getDayByNumber(dayNum);
    if (dayLesson) {
      onLaunchDayLesson(dayLesson);
    }
  };

  return (
    <div className="flex flex-col space-y-6 p-4 sm:p-5 pb-28 text-slate-900 dark:text-slate-100 w-full max-w-lg mx-auto animate-fade-in">
      
      {/* ========================================================================= */}
      {/* 1. JOURNEY BANNER (Stage Banner with Gradient, CEFR & Progress Gauge)     */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#335CFF] via-[#4760FF] to-[#10B981] p-6 sm:p-7 text-white shadow-2xl shadow-indigo-500/20 border border-indigo-300/30 space-y-5">
        {/* Ambient background glow */}
        <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/20 rounded-full blur-3xl pointer-events-none animate-blob-drift" />
        <div className="absolute -bottom-16 -left-12 w-60 h-60 bg-emerald-900/40 rounded-full blur-3xl pointer-events-none animate-blob-drift" />

        {/* Header Badges: Active Stage & Live Stats */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🇮🇳</span>
            <span className="text-xs font-black uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
              Stage {currentStage.stageNumber} • {currentStage.cefrSpan}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-black">
            <div className="flex items-center space-x-1 text-amber-300 bg-black/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
              <Flame className="w-3.5 h-3.5 fill-current animate-flame" />
              <span>{progress.streakDays || 0}d Streak</span>
            </div>
            <div className="flex items-center space-x-1 text-emerald-300 bg-black/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>{progress.totalXpEarned || 0} XP</span>
            </div>
          </div>
        </div>

        {/* Title and Hindi description */}
        <div className="space-y-1 relative z-10">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            60-Day English Course Path
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 font-hindi font-medium">
            {nextIncompleteDayNum > availableDays ? 'Days 41–60 are planned and not yet released' : `${currentStage.stageTitleHi} • Days ${currentStage.startDay}–${currentStage.endDay}`}
          </p>
        </div>

        {/* Circular / Segmented Progress Summary Bar */}
        <div className="space-y-2 pt-2 relative z-10">
          <div className="flex justify-between text-xs font-bold text-indigo-100">
            <span>
              Released content: <strong className="text-white">{completedCount} / {availableDays} days complete</strong>
            </span>
            <span className="font-mono text-emerald-200 font-black">
              {overallProgressPercent}% of released days
            </span>
          </div>
          <div className="w-full bg-black/25 rounded-full h-3 p-0.5 border border-white/20">
            <div
              className="bg-gradient-to-r from-emerald-400 via-teal-300 to-white h-full rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${overallProgressPercent}%` }}
            />
          </div>
        </div>

        {/* XP Reward Chip */}
        <div className="flex items-center justify-between text-[11px] font-bold text-indigo-100 pt-1 border-t border-white/15 relative z-10">
          <span className="flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Lesson reward: <strong>+{HINDI_DAY_XP_REWARD} XP once per new day</strong></span>
          </span>
          <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-white font-extrabold">
            Days 41–60 are planned and not yet released
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. PRIMARY TODAY'S GOAL CTA                                               */}
      {/* ========================================================================= */}
      {continueDayLesson && (
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-600 dark:to-teal-600 rounded-[28px] p-5 sm:p-6 shadow-xl text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 card-lift border border-emerald-400/30">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-wider bg-black/20 px-2.5 py-0.5 rounded-full inline-block">
                TODAY'S TARGET • DAY {continueDayLesson.dayNumber}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white font-display">
              {continueDayLesson.titleEn}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-emerald-100 font-hindi">
              {continueDayLesson.titleHi}
            </p>
          </div>

          <button
            onClick={() => handleLaunchDay(continueDayLesson.dayNumber)}
            className="w-full sm:w-auto py-3.5 px-6 bg-white hover:bg-emerald-50 text-emerald-900 font-black rounded-2xl text-sm sm:text-base transition shadow-lg flex items-center justify-center space-x-2 shrink-0 cursor-pointer active:scale-95 btn-press"
          >
            <span>Start Day {continueDayLesson.dayNumber}</span>
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </button>
        </div>
      )}

      {/* Voice & Accent Lab Banner & Due Spaced Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Spoken Lab button */}
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            setShowSpokenLab(true);
          }}
          className="p-4 bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 hover:border-emerald-500/40 rounded-3xl flex items-center justify-between transition shadow-sm dark:shadow-md group cursor-pointer card-lift btn-press"
        >
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition shrink-0">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white font-display">
                Voice & Accent Lab
              </h4>
              <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-hindi">
                उच्चारण व मिनिमल पेयर्स
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition shrink-0" />
        </button>

        {/* Reviews or Progress Capsule */}
        {dueReviews && dueReviews.length > 0 ? (
          <button
            onClick={() => handleLaunchDay((dueReviews[0] as any).dayNumber || dueReviews[0])}
            className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/40 rounded-3xl flex items-center justify-between shadow-sm dark:shadow-md card-lift cursor-pointer"
          >
            <div className="flex items-center space-x-3 text-left">
              <div className="w-10 h-10 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 shrink-0">
                <RotateCcw className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                  {dueReviews.length} Review{dueReviews.length > 1 ? 's' : ''} Due
                </h4>
                <p className="text-[11px] text-amber-800 dark:text-amber-300 font-hindi">
                  Day {dueReviews.map((r: any) => r.dayNumber || r).join(', ')} दोहराएं
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-sm">
              Review
            </span>
          </button>
        ) : (
          <div className="p-4 bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl flex items-center justify-between shadow-sm dark:shadow-md card-lift">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] rounded-2xl flex items-center justify-center text-white shadow-md shadow-indigo-500/20 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white font-display">
                  60-day course plan
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  Days 1–40 released; Days 41–60 are planned, not released
                </p>
              </div>
            </div>
            <span className="text-xs font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-xl border border-emerald-200 dark:border-emerald-500/20 font-mono">
              {completedCount} / {availableDays} released
            </span>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 3. SEARCH & STAGE FILTER PILLS                                           */}
      {/* ========================================================================= */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 font-display">
            Curriculum Stages (पाठ्यक्रम चरण)
          </h3>
          <span className="text-xs text-emerald-700 dark:text-emerald-400 font-mono font-bold">
            {availableDays} of {totalPlannedDays} days released
          </span>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={`Search released days (1–${availableDays}); later days are planned`}
            aria-label="Search released Hindi course days"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900/90 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition shadow-sm"
          />
        </div>

        {/* Horizontal Stage Pills */}
        <div className="flex space-x-2 overflow-x-auto scrollbar-none py-1">
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setSelectedStageFilter('all');
            }}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition border cursor-pointer ${
              selectedStageFilter === 'all'
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 border-emerald-500 dark:border-emerald-400 font-black shadow-md'
                : 'bg-white dark:bg-slate-900 border-[#D9E4FF] dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850'
            }`}
          >
            All Stages (60-day plan)
          </button>

          {stages.map((stage) => {
            const isSelected = selectedStageFilter === stage.stageNumber;
            return (
              <button
                key={`stage_pill_${stage.stageNumber}`}
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setSelectedStageFilter(stage.stageNumber);
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition border flex items-center space-x-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 border-emerald-500 dark:border-emerald-400 font-black shadow-md'
                    : 'bg-white dark:bg-slate-900 border-[#D9E4FF] dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850'
                }`}
              >
                <span>Stage {stage.stageNumber}</span>
                <span className="text-[10px] opacity-75 font-mono">({stage.startDay}–{stage.endDay})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. DUOLINGO-STYLE LEARNING PATH & RICH DAY LESSON CARDS                   */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        {stages
          .filter((stage) => selectedStageFilter === 'all' || selectedStageFilter === stage.stageNumber)
          .map((stage) => {
            const releasedStageDays = Array.from(
              { length: stage.endDay - stage.startDay + 1 },
              (_, i) => stage.startDay + i
            ).filter((dayNum) => dayNum <= availableDays);
            const stageDays = releasedStageDays.filter((dayNum) => {
              if (!searchQuery) return true;
              const d = HindiCourseService.getDayByNumber(dayNum);
              if (!d) return false;
              const q = searchQuery.toLowerCase();
              return (
                d.titleEn.toLowerCase().includes(q) ||
                d.titleHi.includes(q) ||
                d.cefr.toLowerCase().includes(q) ||
                (d.objectivesEn && d.objectivesEn.some((o: string) => o.toLowerCase().includes(q)))
              );
            });

            if (searchQuery && stageDays.length === 0) {
              return null;
            }

            const stageCompletedDaysCount = releasedStageDays.filter((d) => progress.completedDays.includes(d)).length;
            const isStageFullyCompleted = releasedStageDays.length > 0 && stageCompletedDaysCount === releasedStageDays.length;
            const isStageLocked = releasedStageDays.length === 0 || releasedStageDays.every((d) => !progress.unlockedDays.includes(d));

            return (
              <div
                key={`stage_section_${stage.stageNumber}`}
                className="bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-[32px] p-5 sm:p-6 space-y-4 shadow-md dark:shadow-xl relative overflow-hidden"
              >
                {/* Stage Header Banner */}
                <div className="flex items-start justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-3.5">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        {stage.stageTitleEn}
                      </span>
                      <span className="text-[10px] bg-[#EEF3FF] dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-extrabold px-2 py-0.5 rounded-full border border-indigo-100 dark:border-slate-700">
                        {stage.cefrSpan}
                      </span>
                    </div>
                    <p className="text-xs text-amber-700 dark:text-amber-300 font-hindi font-medium">
                      {stage.stageTitleHi}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-black text-slate-700 dark:text-slate-300 font-mono block">
                      Days {stage.startDay}–{stage.endDay}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      {stage.startDay > availableDays ? 'Planned; not released' : `${stageCompletedDaysCount}/${releasedStageDays.length} days complete`}
                    </span>
                  </div>
                </div>

                {/* Completed Stage Celebration Stamp */}
                {isStageFullyCompleted && (
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-300 dark:border-emerald-500/40 rounded-2xl p-3 flex items-center justify-between text-emerald-900 dark:text-emerald-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black">
                        ✓
                      </div>
                      <span className="text-xs font-black">
                        Stage {stage.stageNumber}: all {releasedStageDays.length} released course days completed
                      </span>
                    </div>
                    <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                      Course progress complete
                    </span>
                  </div>
                )}

                {/* Empty State / Locked Stage Illustration */}
                {isStageLocked && (
                  <div className="bg-slate-50 dark:bg-slate-950/60 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center space-y-2">
                    <div className="w-10 h-10 mx-auto rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                      <Lock className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      {stage.startDay > availableDays
                        ? `Days ${stage.startDay}–${stage.endDay} are planned and not yet released`
                        : `Complete Stage ${stage.stageNumber - 1} to unlock this module`}
                    </p>
                  </div>
                )}

                {/* Day Cards Path in this Stage */}
                <div className="space-y-3 pt-1">
                  {stageDays.map((dayNum, dayIndex) => {
                    const dayLesson = HindiCourseService.getDayByNumber(dayNum);
                    const isUnlocked = progress.unlockedDays.includes(dayNum);
                    const isCompleted = progress.completedDays.includes(dayNum);
                    const isTodayGoal = dayNum === nextIncompleteDayNum;
                    const stars = progress.dayStars[dayNum] || (isCompleted ? 3 : 0);
                    const score = progress.dayScores[dayNum];

                    if (!dayLesson) return null;

                    const vocabCount = dayLesson.learn?.vocabulary?.length || 8;
                    const dialogueTurnsCount = dayLesson.use?.dialogue?.turns?.length || 4;
                    const practiceCount = dayLesson.practice?.length || 6;
                    const estMinutes = dayLesson.estMinutes || 8;

                    return (
                      <div
                        key={`day_card_${dayNum}`}
                        onClick={() => {
                          if (isUnlocked) {
                            handleLaunchDay(dayNum);
                          }
                        }}
                        className={`rounded-3xl p-4 sm:p-5 border transition-all duration-200 shadow-sm relative overflow-hidden ${
                          isUnlocked
                            ? isTodayGoal
                              ? 'bg-gradient-to-r from-emerald-50/90 to-teal-50/90 dark:from-emerald-950/40 dark:to-teal-950/40 border-2 border-emerald-500 dark:border-emerald-400 shadow-lg cursor-pointer card-lift animate-node-emerald-glow'
                              : isCompleted
                              ? 'bg-white dark:bg-slate-900/90 border-emerald-200 dark:border-emerald-900/40 hover:border-emerald-400 cursor-pointer card-lift'
                              : 'bg-white dark:bg-slate-900/90 border-[#D9E4FF] dark:border-slate-800 hover:border-indigo-400 cursor-pointer card-lift'
                            : 'bg-slate-50/80 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800/60 text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-75'
                        }`}
                      >
                        {/* Current Goal Animated Accent Tag */}
                        {isTodayGoal && (
                          <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-bl-2xl shadow-sm flex items-center space-x-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                            <span>Current Goal</span>
                          </div>
                        )}

                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start space-x-3.5 min-w-0">
                            {/* Day Number Node Circle with Duolingo-style iconography */}
                            <div
                              className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-black text-base shrink-0 shadow-md ${
                                isCompleted
                                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white'
                                  : isTodayGoal
                                  ? 'bg-emerald-600 text-white shadow-emerald-500/30'
                                  : isUnlocked
                                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700'
                                  : 'bg-slate-200 dark:bg-slate-900 text-slate-400 dark:text-slate-600'
                              }`}
                            >
                              {isCompleted ? (
                                <CheckCircle2 className="w-6 h-6" />
                              ) : isUnlocked ? (
                                <span>{dayNum}</span>
                              ) : (
                                <Lock className="w-5 h-5 text-slate-400 dark:text-slate-600" />
                              )}
                            </div>

                            {/* Day Metadata & Title */}
                            <div className="space-y-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-black uppercase text-emerald-700 dark:text-emerald-400 font-display">
                                  Day {dayNum}
                                </span>
                                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.2 rounded-full font-bold">
                                  {dayLesson.cefr}
                                </span>
                                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-black flex items-center space-x-0.5">
                                  <Sparkles className="w-3 h-3" />
                                  <span>{isCompleted ? 'XP awarded once' : `+${HINDI_DAY_XP_REWARD} XP once`}</span>
                                </span>
                              </div>

                              <h4
                                className={`text-sm sm:text-base font-black truncate font-display ${
                                  isUnlocked ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500'
                                }`}
                              >
                                {dayLesson.titleEn}
                              </h4>

                              <p className="text-xs text-slate-500 dark:text-slate-400 font-hindi line-clamp-1">
                                {dayLesson.titleHi}
                              </p>

                              {/* Lesson Content Chips: Vocab, Dialogue, Drills, Speaking */}
                              <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
                                <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-lg flex items-center space-x-1">
                                  <BookOpen className="w-3 h-3 text-cyan-500" />
                                  <span>{vocabCount} Words</span>
                                </span>

                                <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-lg flex items-center space-x-1">
                                  <Clock className="w-3 h-3 text-emerald-500" />
                                  <span>{estMinutes}m</span>
                                </span>

                                <span className="text-[10px] font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 px-2 py-0.5 rounded-lg flex items-center space-x-1">
                                  <Mic className="w-3 h-3" />
                                  <span>Speaking Lab</span>
                                </span>

                                {isCompleted && (
                                  <div className="flex items-center space-x-1 pl-1">
                                    <div className="flex text-amber-400">
                                      {Array.from({ length: 3 }).map((_, sIdx) => (
                                        <Star
                                          key={`star_badge_${dayNum}_${sIdx}`}
                                          className={`w-3.5 h-3.5 ${
                                            sIdx < stars ? 'fill-amber-400' : 'text-slate-300 dark:text-slate-700'
                                          }`}
                                        />
                                      ))}
                                    </div>
                                    {score !== undefined && (
                                      <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 font-mono">
                                        {score}%
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Right Action CTA Button */}
                          <div className="shrink-0 self-center">
                            {isCompleted ? (
                              <button className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-emerald-700 dark:text-emerald-400 rounded-2xl text-xs font-black transition flex items-center space-x-1">
                                <span>Review</span>
                                <RotateCcw className="w-3.5 h-3.5" />
                              </button>
                            ) : isTodayGoal ? (
                              <button className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-black transition flex items-center space-x-1.5 shadow-lg active:scale-95 btn-press">
                                <span>START</span>
                                <Play className="w-3.5 h-3.5 fill-current" />
                              </button>
                            ) : isUnlocked ? (
                              <button className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl text-xs font-bold transition flex items-center space-x-1">
                                <span>Open</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            ) : (
                              <div className="p-2 text-slate-400 dark:text-slate-600">
                                <Lock className="w-4 h-4" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>

      {/* Voice & Accent Lab Modal */}
      {showSpokenLab && (
        <HindiSpokenLabModal
          onClose={() => setShowSpokenLab(false)}
          onSelectDayLesson={(dayNum) => handleLaunchDay(dayNum)}
        />
      )}
    </div>
  );
};
