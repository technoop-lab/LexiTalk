import React from 'react';
import { Flame, Sparkles, CheckCircle2, ShieldCheck, Share2, ArrowRight, X, Award, Star } from 'lucide-react';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface StreakCelebrationModalProps {
  streakDays: number;
  onClose: () => void;
}

export const StreakCelebrationModal: React.FC<StreakCelebrationModalProps> = ({
  streakDays,
  onClose,
}) => {
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const todayDayIndex = (new Date().getDay() + 6) % 7; // Monday = 0

  const handleShare = async () => {
    playSoundEffectEffect('tap');
    const text = `I'm on a 🔥 ${streakDays}-Day Learning Streak on Curiosity English Academy! 🚀`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Curiosity English Academy Streak',
          text,
          url: window.location.href,
        });
      } catch {
        // Fallback
      }
    } else {
      navigator.clipboard.writeText(text);
      alert('Streak message copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fade-in">
      <div className="bg-gradient-to-b from-white via-orange-50/40 to-white dark:from-slate-900 dark:via-orange-950/30 dark:to-slate-900 border-2 border-orange-400/50 dark:border-orange-500/50 rounded-3xl p-6 max-w-sm w-full shadow-2xl relative space-y-5 text-center overflow-hidden text-slate-900 dark:text-white">
        {/* Close Button */}
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-full cursor-pointer z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Pulsing Concentric Fire Rings Background */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-48 h-48 pointer-events-none flex items-center justify-center">
          <div className="absolute w-44 h-44 rounded-full border-2 border-orange-500/30 dark:border-orange-400/40 animate-fire-ring-1" />
          <div className="absolute w-36 h-36 rounded-full border-2 border-amber-500/40 dark:border-amber-400/50 animate-fire-ring-2" />
          <div className="absolute w-28 h-28 rounded-full border-2 border-red-500/50 dark:border-red-400/60 animate-fire-ring-3" />
        </div>

        {/* Big Pulsing Flame */}
        <div className="pt-4 flex flex-col items-center justify-center relative z-10">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center shadow-2xl shadow-orange-500/50 border border-amber-300/50 animate-flame-flicker">
            <Flame className="w-14 h-14 text-white fill-amber-200 drop-shadow-lg" />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-1 relative z-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/20 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-500/30 inline-block font-mono">
            Habit Master Activated
          </span>

          <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white">
            🔥 {streakDays}-Day Streak!
          </h2>

          <p className="text-xs text-amber-700 dark:text-amber-300 font-hindi font-bold">
            आपकी निरंतरता अद्भुत है! अभ्यास की अग्नि जलती रहे।
          </p>
        </div>

        {/* Weekly Streak Ribbon (7-Day Checkmarks) */}
        <div className="bg-slate-50 dark:bg-slate-950/80 rounded-2xl p-4 border border-[#D9E4FF] dark:border-slate-800 space-y-2 relative z-10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-bold">Weekly Ribbon</span>
            <span className="font-bold text-orange-600 dark:text-orange-400 flex items-center space-x-1 text-[11px]">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Perfect Cadence</span>
            </span>
          </div>

          <div className="grid grid-cols-7 gap-1.5 pt-1">
            {daysOfWeek.map((dayLabel, idx) => {
              const isPastOrToday = idx <= todayDayIndex;
              const isToday = idx === todayDayIndex;

              return (
                <div
                  key={`day_${idx}`}
                  className={`p-2 rounded-xl text-center flex flex-col items-center space-y-1 transition ${
                    isToday
                      ? 'bg-gradient-to-b from-orange-500 to-amber-500 text-white shadow-md ring-2 ring-orange-400/50 font-black'
                      : isPastOrToday
                      ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 font-bold'
                      : 'bg-slate-100 dark:bg-slate-800/60 text-slate-400 font-normal'
                  }`}
                >
                  <span className="text-[10px] font-mono">{dayLabel}</span>
                  {isPastOrToday ? (
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Perfect Week Medal / Freeze Shield */}
        <div className="flex items-center space-x-2.5 p-3 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-500/30 text-left text-xs relative z-10">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-lg shrink-0">
            🛡️
          </div>
          <div className="min-w-0 flex-1">
            <span className="font-bold text-slate-900 dark:text-white block text-xs">
              Streak Freeze Shield Protected
            </span>
            <span className="text-[10px] text-amber-700 dark:text-amber-300">
              1 free safety freeze available for unexpected busy days.
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2.5 pt-1 relative z-10">
          <button
            onClick={handleShare}
            className="py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-black text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center space-x-1.5 cursor-pointer btn-press"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>

          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onClose();
            }}
            className="flex-1 py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 hover:brightness-105 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl transition cursor-pointer btn-press flex items-center justify-center space-x-2"
          >
            <span>Keep the Fire Burning 🔥</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
