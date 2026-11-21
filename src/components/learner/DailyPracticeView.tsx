import React, { useState, useEffect } from 'react';
import {
  Flame,
  Check,
  RotateCcw,
  Volume2,
  Sparkles,
  Trophy,
  Shuffle,
  Zap,
  Target,
  Award,
  Layers,
  CheckCircle2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { UserAcademyProfile, Exercise } from '../../types';
import { ExerciseRenderer } from '../lesson/ExerciseRenderer';
import { AuthService } from '../../services/AuthService';
import { ProgressService } from '../../services/ProgressService';
import { playSoundEffectEffect } from '../../utils/audioUtils';
import { normalizeExercise } from '../../utils/exerciseUtils';

// Practice XP and streak are awarded once per calendar day on this device.
const PRACTICE_LOG_KEY = 'curiosity_daily_practice_v1';

const dateKey = (d: Date): string =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const readLastPracticeDate = (): string | null => {
  try {
    const raw = localStorage.getItem(PRACTICE_LOG_KEY);
    return raw ? (JSON.parse(raw).lastDate as string) ?? null : null;
  } catch {
    return null;
  }
};

const writeLastPracticeDate = (day: string): void => {
  try {
    localStorage.setItem(PRACTICE_LOG_KEY, JSON.stringify({ lastDate: day }));
  } catch {
    // Storage unavailable (private mode): the reward still applies for this session.
  }
};

const shuffleList = <T,>(items: T[]): T[] => {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

interface DailyPracticeViewProps {
  user: UserAcademyProfile;
  onUpdateUser: (updated: UserAcademyProfile) => void;
}

export const DailyPracticeView: React.FC<DailyPracticeViewProps> = ({ user, onUpdateUser }) => {
  const [practiceMode, setPracticeMode] = useState<'interleaved' | 'speed_recall' | 'listening'>('interleaved');
  const [practiceExercises, setPracticeExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnsweredCurrent, setHasAnsweredCurrent] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [earnedXp, setEarnedXp] = useState(0);

  useEffect(() => {
    // Generate 5 dynamic adaptive exercises from Unit 1 pool
    const pool = ProgressService.getAdaptiveReviewExercises(user, 5);
    setPracticeExercises(pool.map(normalizeExercise));
    setCurrentIndex(0);
    setHasAnsweredCurrent(false);
    setScore(0);
    setIsCompleted(false);
  }, [user.completedLessonIds.length, practiceMode]);

  const handleStartNewSession = () => {
    playSoundEffectEffect('tap');
    const pool = ProgressService.getAdaptiveReviewExercises(user, 5);
    setPracticeExercises(shuffleList(pool).map(normalizeExercise));
    setCurrentIndex(0);
    setHasAnsweredCurrent(false);
    setScore(0);
    setIsCompleted(false);
    setEarnedXp(0);
  };

  const currentExercise = practiceExercises[currentIndex];

  const handleAnswerSubmit = (isCorrect: boolean) => {
    setHasAnsweredCurrent(true);
    if (isCorrect) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    playSoundEffectEffect('tap');
    setHasAnsweredCurrent(false);

    if (currentIndex < practiceExercises.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      // Practice session completed. XP and streak count once per calendar day.
      setIsCompleted(true);
      playSoundEffectEffect('victory');

      const today = dateKey(new Date());
      const yesterday = dateKey(new Date(Date.now() - 24 * 60 * 60 * 1000));
      const last = readLastPracticeDate();

      if (last === today) {
        setEarnedXp(0);
        return;
      }

      const nextStreak = last === yesterday && user.streakDays > 0 ? user.streakDays + 1 : 1;
      writeLastPracticeDate(today);
      setEarnedXp(50);

      const updated = AuthService.updateUserProfile({
        totalXp: user.totalXp + 50,
        streakDays: nextStreak,
      });
      onUpdateUser(updated);
    }
  };

  if (isCompleted) {
    const accuracy = Math.round((score / Math.max(1, practiceExercises.length)) * 100);

    return (
      <div className="p-6 max-w-md mx-auto text-center space-y-5 bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl shadow-xl my-6 animate-fade-in">
        <div className="relative w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-emerald-500/30">
          <Trophy className="w-10 h-10" />
          <span className="absolute -bottom-2 -right-2 bg-amber-400 text-slate-950 text-xs font-black px-2 py-0.5 rounded-full border-2 border-white shadow-xs">
            {earnedXp > 0 ? '+50 XP' : 'Done today'}
          </span>
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white font-display">
            Daily Retrieval Completed!
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Unit 1 Adaptive Retrieval Session Finished
          </p>
        </div>

        {/* 3 Grouped Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center">
            <span className="text-lg font-black text-emerald-600 dark:text-emerald-400 block font-display">
              {score}/{practiceExercises.length}
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Score</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center">
            <span className="text-lg font-black text-indigo-600 dark:text-indigo-400 block font-display">
              {accuracy}%
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Accuracy</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center">
            <span className="text-lg font-black text-amber-500 block font-display">
              {user.streakDays || 0}
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Streak</span>
          </div>
        </div>

        <button
          onClick={handleStartNewSession}
          className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-105 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-500/20 transition active:scale-95 cursor-pointer btn-press"
        >
          Practice Again (New Adaptive Questions)
        </button>
      </div>
    );
  }

  if (!currentExercise) {
    if (practiceExercises.length === 0) {
      return (
        <div className="p-10 text-center text-xs text-slate-500 dark:text-slate-400">
          No practice questions are ready yet. Complete a lesson to unlock daily practice.
        </div>
      );
    }
    return (
      <div className="p-10 text-center text-xs text-slate-500 dark:text-slate-400">
        Loading daily practice exercises...
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4 p-3.5 sm:p-5 pb-28 text-slate-900 dark:text-slate-100 max-w-xl mx-auto min-w-0 animate-fade-in">
      {/* Top Banner & Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center space-x-2.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
            <Flame className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900 dark:text-white font-display">
              Daily Practice Arena
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Question {currentIndex + 1} of {practiceExercises.length} • Adaptive Retrieval
            </p>
          </div>
        </div>

        <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-black rounded-xl border border-emerald-300 dark:border-emerald-500/30 flex items-center space-x-1">
          <Zap className="w-3.5 h-3.5 fill-current text-amber-500" />
          <span>{readLastPracticeDate() === dateKey(new Date()) ? 'XP earned today' : '+50 XP'}</span>
        </span>
      </div>

      {/* Progress Track */}
      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / practiceExercises.length) * 100}%` }}
        />
      </div>

      {/* Exercise Card using standardized ExerciseRenderer */}
      <div className="bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-sm dark:shadow-2xl space-y-4">
        <ExerciseRenderer
          key={currentExercise.id}
          exercise={currentExercise}
          user={user}
          onAnswerSubmit={handleAnswerSubmit}
        />

        {hasAnsweredCurrent && (
          <button
            onClick={handleNext}
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-105 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-500/20 transition active:scale-95 mt-2 cursor-pointer btn-press"
          >
            {currentIndex < practiceExercises.length - 1 ? 'Next Question →' : 'Complete Daily Session'}
          </button>
        )}
      </div>
    </div>
  );
};
