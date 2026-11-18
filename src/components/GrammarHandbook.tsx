import React from 'react';
import { BookOpen, X, Sparkles, Check, ArrowRight, Volume2, Lightbulb } from 'lucide-react';
import { CourseUnit, NativeLanguageCode } from '../types';
import { AudioService } from '../services/AudioService';
import { playSoundEffectEffect } from '../utils/audioUtils';

interface GrammarHandbookProps {
  unit: CourseUnit;
  userNativeLang?: NativeLanguageCode;
  onClose: () => void;
}

export const GrammarHandbook: React.FC<GrammarHandbookProps> = ({
  unit,
  userNativeLang = 'hi',
  onClose,
}) => {
  const ruleText =
    unit.guidebook.rulesByLang?.[userNativeLang] || unit.guidebook.keyGrammarRule;

  const handlePlayAudio = (audioId?: string, text?: string) => {
    playSoundEffectEffect('tap');
    if (audioId) {
      AudioService.play(audioId, text);
    } else if (text) {
      AudioService.speak(text);
    }
  };

  return (
    <div
      id="grammar-handbook-modal"
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 select-none animate-fade-in"
    >
      <div className="bg-white dark:bg-[#0A1226] border border-[#D9E4FF] dark:border-slate-800 rounded-[28px] sm:rounded-3xl p-5 sm:p-6 max-w-md w-full shadow-2xl relative space-y-4 max-h-[88vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition cursor-pointer"
          aria-label="Close Handbook"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-xl bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-200 dark:border-indigo-500/30">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
            {unit.cefr} Guidebook • Unit {unit.unitNumber}
          </span>
        </div>

        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-display">
          {unit.guidebook.title}
        </h2>

        {/* Key Grammar Rule Card */}
        <div className="bg-gradient-to-br from-indigo-50 via-slate-50 to-emerald-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-emerald-950/30 border border-indigo-200 dark:border-indigo-500/30 p-4 rounded-2xl space-y-1.5 shadow-xs">
          <div className="flex items-center space-x-1.5 text-indigo-700 dark:text-indigo-300">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-wider block">
              Key Grammar Rule (मुख्य व्याकरण नियम)
            </span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
            {ruleText}
          </p>
        </div>

        {/* Real-World Examples */}
        <div className="space-y-2.5 pt-1">
          <h3 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Example Sentences & Usage (उदाहरणात्मक वाक्य)
          </h3>

          {unit.guidebook.examples.map((ex, idx) => {
            const translation = ex.translationsByLang?.[userNativeLang] || ex.translation;

            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-950/80 border border-[#D9E4FF] dark:border-slate-800/80 p-3.5 rounded-2xl space-y-1.5 text-xs shadow-xs hover:border-indigo-300 transition"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm">
                    "{ex.english}"
                  </span>
                  <button
                    onClick={() => handlePlayAudio((ex as any).audioId, ex.english)}
                    className="p-1.5 bg-indigo-100 dark:bg-indigo-500/20 hover:bg-indigo-200 dark:hover:bg-indigo-500/30 text-indigo-600 dark:text-indigo-300 rounded-lg transition cursor-pointer shrink-0"
                    title="Listen to model audio"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-hindi italic text-xs">
                  "{translation}"
                </p>
                <p className="text-emerald-700 dark:text-emerald-400 text-[10px] font-medium pt-1 border-t border-[#D9E4FF] dark:border-slate-800/80">
                  💡 {ex.explanation}
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-indigo-500/25 transition cursor-pointer active:scale-95 mt-2"
        >
          Got It, Let's Practice! (समझ गया)
        </button>
      </div>
    </div>
  );
};
