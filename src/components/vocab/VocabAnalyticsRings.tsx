import React from 'react';
import { Award } from 'lucide-react';

interface VocabAnalyticsRingsProps {
  totalLearned: number;
  reviewDue: number;
  favoritesCount: number;
  sessionTarget: number;
}

export const VocabAnalyticsRings: React.FC<VocabAnalyticsRingsProps> = ({
  totalLearned,
  reviewDue,
  favoritesCount,
  sessionTarget
}) => {
  // 3 Concentric Rings Math (Apple Fitness Architecture)
  const ring1Radius = 60; // Outer Ring: Words Learned (Indigo / Cyan)
  const ring2Radius = 45; // Middle Ring: Review Queue (Amber / Orange)
  const ring3Radius = 30; // Inner Ring: Mastered (Emerald / Teal)

  const ring1Circumference = 2 * Math.PI * ring1Radius;
  const ring2Circumference = 2 * Math.PI * ring2Radius;
  const ring3Circumference = 2 * Math.PI * ring3Radius;

  const ring1Percent = Math.min(100, Math.round((totalLearned / Math.max(1, sessionTarget)) * 100));
  const ring2Percent = Math.min(100, Math.round((reviewDue / Math.max(1, sessionTarget)) * 100));
  const ring3Percent = Math.min(100, Math.round((favoritesCount / Math.max(1, sessionTarget)) * 100));

  const ring1Offset = ring1Circumference - (ring1Percent / 100) * ring1Circumference;
  const ring2Offset = ring2Circumference - (ring2Percent / 100) * ring2Circumference;
  const ring3Offset = ring3Circumference - (ring3Percent / 100) * ring3Circumference;

  return (
    <div
      id="vocab-analytics-rings-card"
      className="bg-white dark:bg-[#0B1225] border-2 border-indigo-100 dark:border-white/10 rounded-[32px] p-6 shadow-xl space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
              Session Activity
            </span>
            <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">
              Vocabulary Analytics
            </h3>
          </div>
        </div>

        <span className="text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30">
          Session-only data
        </span>
      </div>

      {/* Concentric Rings Visualizer */}
      <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-2">
        {/* SVG 3-Ring Visual */}
        <div className="relative w-44 h-44 shrink-0 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 150 150">
            {/* Ring 1: Background & Foreground (Royal Indigo / Cyan) */}
            <circle
              cx="75"
              cy="75"
              r={ring1Radius}
              className="stroke-indigo-100 dark:stroke-indigo-950/80"
              strokeWidth="9"
              fill="transparent"
            />
            <circle
              cx="75"
              cy="75"
              r={ring1Radius}
              stroke="url(#indigoCyanGrad)"
              strokeWidth="9"
              strokeDasharray={ring1Circumference}
              strokeDashoffset={ring1Offset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-1000 ease-out"
            />

            {/* Ring 2: Background & Foreground (Amber / Orange) */}
            <circle
              cx="75"
              cy="75"
              r={ring2Radius}
              className="stroke-amber-100 dark:stroke-amber-950/80"
              strokeWidth="9"
              fill="transparent"
            />
            <circle
              cx="75"
              cy="75"
              r={ring2Radius}
              stroke="url(#amberOrangeGrad)"
              strokeWidth="9"
              strokeDasharray={ring2Circumference}
              strokeDashoffset={ring2Offset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-1000 ease-out"
            />

            {/* Ring 3: Background & Foreground (Emerald / Teal) */}
            <circle
              cx="75"
              cy="75"
              r={ring3Radius}
              className="stroke-emerald-100 dark:stroke-emerald-950/80"
              strokeWidth="9"
              fill="transparent"
            />
            <circle
              cx="75"
              cy="75"
              r={ring3Radius}
              stroke="url(#emeraldTealGrad)"
              strokeWidth="9"
              strokeDasharray={ring3Circumference}
              strokeDashoffset={ring3Offset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-1000 ease-out"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="indigoCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#335CFF" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="amberOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#FB923C" />
              </linearGradient>
              <linearGradient id="emeraldTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#14B8A6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Trophy Icon */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-2xl">🔥</span>
            <span className="text-[10px] font-black text-slate-800 dark:text-white font-mono mt-0.5">
              {totalLearned}
            </span>
          </div>
        </div>

        {/* Ring Legends */}
        <div className="space-y-2.5 w-full sm:w-auto">
          {/* Ring 1 Legend */}
          <div className="flex items-center justify-between sm:justify-start space-x-3 p-2.5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20">
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#335CFF] to-cyan-400 shrink-0" />
            <div className="min-w-0">
              <span className="text-xs font-black text-slate-900 dark:text-white block">
                Marked known in this session
              </span>
              <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-bold">
                {totalLearned} of {sessionTarget} ({ring1Percent}%)
              </span>
            </div>
          </div>

          {/* Ring 2 Legend */}
          <div className="flex items-center justify-between sm:justify-start space-x-3 p-2.5 rounded-2xl bg-amber-50/60 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20">
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 shrink-0" />
            <div className="min-w-0">
              <span className="text-xs font-black text-slate-900 dark:text-white block">
                Added to the session review list
              </span>
              <span className="text-[11px] text-amber-700 dark:text-amber-400 font-bold">
                {reviewDue} marked for review ({ring2Percent}%)
              </span>
            </div>
          </div>

          {/* Ring 3 Legend */}
          <div className="flex items-center justify-between sm:justify-start space-x-3 p-2.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shrink-0" />
            <div className="min-w-0">
              <span className="text-xs font-black text-slate-900 dark:text-white block">
                Starred in this session
              </span>
              <span className="text-[11px] text-emerald-800 dark:text-emerald-300 font-bold">
                {favoritesCount} starred ({ring3Percent}%)
              </span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
