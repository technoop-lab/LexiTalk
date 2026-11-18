import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, ArrowRight, RotateCcw, Volume2, BookOpen, CheckCircle2, Award, Star } from 'lucide-react';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface XpCelebrationModalProps {
  xpAmount?: number;
  dayNumber?: number;
  lessonTitle?: string;
  wordsLearned?: number;
  speakingScore?: number;
  onContinue: () => void;
  onReviewVocabulary?: () => void;
  onReplaySpeaking?: () => void;
}

export const XpCelebrationModal: React.FC<XpCelebrationModalProps> = ({
  xpAmount = 0,
  dayNumber = 1,
  lessonTitle = 'Daily English Lesson',
  wordsLearned = 0,
  speakingScore = 0,
  onContinue,
  onReviewVocabulary,
  onReplaySpeaking,
}) => {
  const [animatedXp, setAnimatedXp] = useState(0);

  useEffect(() => {
    playSoundEffectEffect('victory');

    // Count-up animation from 0 to xpAmount
    const duration = 900;
    const steps = 25;
    const increment = xpAmount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= xpAmount) {
        setAnimatedXp(xpAmount);
        clearInterval(timer);
      } else {
        setAnimatedXp(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [xpAmount]);

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fade-in">
      <div className="bg-gradient-to-b from-white via-indigo-50/40 to-white dark:from-slate-900 dark:via-indigo-950/40 dark:to-slate-900 border-2 border-indigo-400/50 dark:border-indigo-500/50 rounded-3xl p-6 max-w-sm w-full shadow-2xl relative space-y-5 text-center overflow-hidden text-slate-900 dark:text-white">
        {/* Ambient Royal Indigo Glowing Halo */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-[#335CFF]/30 to-[#6D5DF6]/30 dark:from-[#335CFF]/40 dark:to-[#6D5DF6]/40 rounded-full blur-3xl pointer-events-none animate-glow-halo" />

        {/* Floating Upward Coins / Gems */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <span className="absolute left-[15%] bottom-10 text-2xl animate-float-coin-1">⚡</span>
          <span className="absolute left-[35%] bottom-16 text-xl animate-float-coin-2">💎</span>
          <span className="absolute right-[20%] bottom-8 text-2xl animate-float-coin-3">🪙</span>
          <span className="absolute right-[35%] bottom-20 text-lg animate-float-coin-4">✨</span>
          <span className="absolute left-[50%] bottom-12 text-xl animate-float-coin-5">🌟</span>
        </div>

        {/* Big XP Burst Card */}
        <div className="pt-3 relative z-10 flex flex-col items-center space-y-3">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#335CFF] via-[#6D5DF6] to-[#10B981] text-white flex items-center justify-center shadow-xl shadow-indigo-500/40 border border-indigo-300/40 animate-xp-burst">
            <Zap className="w-10 h-10 fill-amber-300 text-amber-300 drop-shadow-md" />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/30 inline-block font-mono">
              {xpAmount > 0 ? 'Lesson Complete' : 'Review complete'} • Day {dayNumber}
            </span>

            <h2 className="text-4xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981]">
              {xpAmount > 0 ? `+${animatedXp} XP` : 'No extra XP'}
            </h2>

            <p className="text-xs text-amber-700 dark:text-amber-300 font-hindi font-bold">
              शानदार प्रगति! आज का सत्र सफलतापूर्वक पूरा हुआ।
            </p>
          </div>
        </div>

        {/* Progress & Milestone Highlights */}
        <div className="grid grid-cols-2 gap-2.5 relative z-10 text-left text-xs font-mono">
          <div className="p-3 bg-white/90 dark:bg-slate-950/80 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 shadow-2xs">
            <div className="flex items-center space-x-1.5 text-emerald-600 dark:text-emerald-400 font-bold mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Lesson vocabulary</span>
            </div>
            <span className="text-sm font-black text-slate-900 dark:text-white font-display">
              {wordsLearned} items
            </span>
          </div>

          <div className="p-3 bg-white/90 dark:bg-slate-950/80 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 shadow-2xs">
            <div className="flex items-center space-x-1.5 text-rose-600 dark:text-rose-400 font-bold mb-1">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Practice score</span>
            </div>
            <span className="text-sm font-black text-slate-900 dark:text-white font-display">
              {speakingScore}% for this lesson
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1 relative z-10">
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onContinue();
            }}
            className="w-full py-4 bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] hover:brightness-105 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl transition cursor-pointer btn-press flex items-center justify-center space-x-2"
          >
            <span>Continue Journey (आगे बढ़ें)</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-2 gap-2">
            {onReviewVocabulary && (
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  onReviewVocabulary();
                }}
                className="py-3 px-2 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-200 border border-[#D9E4FF] dark:border-slate-700 font-bold text-[11px] rounded-xl transition flex items-center justify-center space-x-1 cursor-pointer btn-press"
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                <span>Review Vocab</span>
              </button>
            )}

            {onReplaySpeaking && (
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  onReplaySpeaking();
                }}
                className="py-3 px-2 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-200 border border-[#D9E4FF] dark:border-slate-700 font-bold text-[11px] rounded-xl transition flex items-center justify-center space-x-1 cursor-pointer btn-press"
              >
                <RotateCcw className="w-3.5 h-3.5 text-emerald-500" />
                <span>Replay Speaking</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
