import React from 'react';
import { BookOpen, Sparkles, Flame, Clock, Award, CheckCircle2, RotateCcw } from 'lucide-react';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface VocabHeroStudioCardProps {
  wordsLearnedCount: number;
  totalWordsCount: number;
  wordsDueForReview: number;
  activeCollectionTitle?: string;
  onStartStudy?: () => void;
}

export const VocabHeroStudioCard: React.FC<VocabHeroStudioCardProps> = ({
  wordsLearnedCount,
  totalWordsCount,
  wordsDueForReview,
  activeCollectionTitle,
  onStartStudy
}) => {
  const percentLearned = Math.min(100, Math.round((wordsLearnedCount / Math.max(1, totalWordsCount)) * 100));
  const wordsRemaining = Math.max(0, totalWordsCount - wordsLearnedCount);

  // Apple Fitness Ring SVG parameters
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (percentLearned / 100) * circumference;

  return (
    <div
      id="vocab-studio-hero"
      className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2E54FF] via-[#4361EE] to-[#6E44FF] p-6 text-white shadow-2xl shadow-indigo-500/25 border border-white/20 space-y-5"
    >
      {/* Ambient glass glows */}
      <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/20 rounded-full blur-3xl pointer-events-none animate-blob-drift" />
      <div className="absolute -bottom-20 -left-12 w-60 h-60 bg-indigo-950/50 rounded-full blur-3xl pointer-events-none animate-blob-drift" />
      <div className="absolute top-1/3 left-1/2 w-28 h-28 bg-cyan-400/25 rounded-full blur-2xl pointer-events-none" />

      {/* Header Row */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-2xl shadow-inner shrink-0">
            📚
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100 bg-white/15 px-2.5 py-0.5 rounded-full border border-white/25">
                Duolingo Max × Apple Cards
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-display mt-0.5">
              Vocabulary Studio
            </h2>
          </div>
        </div>

        <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-[10px] font-bold text-indigo-100">
          No XP is awarded from this session
        </div>
      </div>

      {/* Hero Body: Concentric Progress Ring & Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center relative z-10 pt-1">
        {/* Ring Section */}
        <div className="flex items-center space-x-3.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:col-span-1">
          <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 90 90">
              <circle
                cx="45"
                cy="45"
                r={radius}
                className="stroke-white/20"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="45"
                cy="45"
                r={radius}
                className="stroke-emerald-300 transition-all duration-1000 ease-out"
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-sm font-black text-white font-mono leading-none">
                {percentLearned}%
              </span>
              <span className="text-[9px] font-bold text-emerald-200 mt-0.5">This session</span>
            </div>
          </div>

          <div className="min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-100 block opacity-90">
              Session progress
            </span>
            <h4 className="text-sm font-black text-white truncate">
              {wordsLearnedCount} of {totalWordsCount} Words
            </h4>
            <span className="text-[11px] text-emerald-200 font-semibold block">
              {percentLearned >= 100 ? 'All marked known' : `${wordsRemaining} remaining`}
            </span>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2 sm:col-span-2">
          {/* Words Learned */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 text-center">
            <div className="text-lg font-black text-white font-display">
              {wordsLearnedCount}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-100 block opacity-85">
              Marked known
            </span>
          </div>

          {/* Remaining */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 text-center">
            <div className="text-lg font-black text-cyan-200 font-display">
              {wordsRemaining}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-100 block opacity-85">
              Remaining
            </span>
          </div>

          {/* Review Due */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 text-center">
            <div className="text-lg font-black text-amber-300 font-display">
              {wordsDueForReview}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-100 block opacity-85">
              Session review list
            </span>
          </div>
        </div>
      </div>

      {activeCollectionTitle && (
        <div className="relative z-10 flex items-center justify-between text-xs bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
          <span className="text-indigo-100 font-medium">
            Active Collection: <strong className="text-white font-bold">{activeCollectionTitle}</strong>
          </span>
          <span className="text-[10px] font-black uppercase text-cyan-200">Filtered</span>
        </div>
      )}
    </div>
  );
};
