import React, { useState } from 'react';
import { Flame, CheckCircle2, ArrowRight, BookOpen, Volume2 } from 'lucide-react';
import { VocabItem } from '../../types';
import { getActiveEnglishAccent, playSoundEffectEffect, speakCleanAudio } from '../../utils/audioUtils';

interface DailyVocabChallengeWidgetProps {
  dailyWords: VocabItem[];
  nativeLang?: string;
  onOpenVocabStudio: () => void;
}

export const DailyVocabChallengeWidget: React.FC<DailyVocabChallengeWidgetProps> = ({
  dailyWords,
  nativeLang = 'hi',
  onOpenVocabStudio
}) => {
  const [completedWordIds, setCompletedWordIds] = useState<string[]>([]);
  // Local checkmarks are a temporary study aid; no XP or mastery is persisted.

  const words = dailyWords.slice(0, 5);
  const total = Math.max(5, words.length);
  const completedCount = completedWordIds.length;
  const isAllCompleted = completedCount >= words.length && words.length > 0;

  const handleToggleComplete = (w: VocabItem, e: React.MouseEvent) => {
    e.stopPropagation();
    playSoundEffectEffect('correct');
    const wid = w.id || w.word;
    if (!completedWordIds.includes(wid)) {
      setCompletedWordIds((prev) => [...prev, wid]);
    }
  };

  const handlePlayWord = (w: VocabItem, e: React.MouseEvent) => {
    e.stopPropagation();
    playSoundEffectEffect('tap');
    speakCleanAudio(w.audioText || w.word, getActiveEnglishAccent(), 1.0);
  };

  // No reward-claim action: checkmarks only describe this visit.

  return (
    <div
      id="daily-vocab-challenge-widget"
      className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50/40 to-slate-50 dark:from-[#0B1225] dark:via-[#10182E] dark:to-[#16213D] border-2 border-indigo-200/80 dark:border-white/10 rounded-[32px] p-5 sm:p-6 shadow-xl space-y-4 transition-all"
    >
      {/* Ambient background accent */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#335CFF]/15 dark:bg-[#335CFF]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Header Row */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#335CFF] to-[#6D5DF6] text-white flex items-center justify-center text-xl shadow-md shadow-indigo-500/25 shrink-0">
            ⚡
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-cyan-400 bg-indigo-50 dark:bg-indigo-500/20 px-2 py-0.5 rounded-full">
                Study Session
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {completedCount}/{words.length} Studied
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-display">
              Vocabulary Practice Set
            </h3>
          </div>
        </div>

        {/* Studio Button */}
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            onOpenVocabStudio();
          }}
          className="px-3.5 py-2 rounded-2xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-500/15 dark:hover:bg-indigo-500/25 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 text-xs font-bold transition flex items-center space-x-1.5 active:scale-95 cursor-pointer shadow-xs"
        >
          <span>Studio</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1 relative z-10">
        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${(completedCount / Math.max(1, words.length)) * 100}%` }}
          />
        </div>
      </div>

      {/* 5 Daily Word Mini Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative z-10 pt-1">
        {words.map((w, idx) => {
          const isDone = completedWordIds.includes(w.id || w.word);
          return (
            <div
              key={idx}
              onClick={(e) => handlePlayWord(w, e)}
              className={`p-3 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer active:scale-95 ${
                isDone
                  ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-500/40'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/40 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">{w.icon || '📖'}</span>
                <button
                  onClick={(e) => handleToggleComplete(w, e)}
                  className={`p-1 rounded-full transition ${
                    isDone
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-300 hover:text-emerald-500 dark:text-slate-600'
                  }`}
                  title={isDone ? 'Marked studied' : 'Mark studied this session'}
                >
                  <CheckCircle2 className={`w-4 h-4 ${isDone ? 'fill-emerald-500 text-white' : ''}`} />
                </button>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate">
                  {w.word}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate font-hindi">
                  {w.translationsByLang?.[nativeLang as any] || w.translationsByLang?.hi || w.meaning}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {isAllCompleted && (
        <p role="status" className="relative z-10 rounded-2xl border border-emerald-300 bg-emerald-50 p-3 text-center text-xs font-bold text-emerald-800 dark:border-emerald-500/40 dark:bg-emerald-950/40 dark:text-emerald-300">
          All words are marked studied for this visit. This session does not save mastery or award XP.
        </p>
      )}
    </div>
  );
};
