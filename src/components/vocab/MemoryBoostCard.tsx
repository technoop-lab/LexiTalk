import React from 'react';
import { Lightbulb, AlertTriangle, CheckCircle2, XCircle, Sparkles, BookOpen } from 'lucide-react';
import { VocabItem } from '../../types';
import { getEnrichedVocabData } from '../../data/vocabEnrichmentData';
import { playSoundEffectEffect, speakCleanAudio } from '../../utils/audioUtils';

interface MemoryBoostCardProps {
  vocab: VocabItem;
}

export const MemoryBoostCard: React.FC<MemoryBoostCardProps> = ({ vocab }) => {
  const enriched = getEnrichedVocabData(vocab);
  const { memoryBoost } = enriched;

  return (
    <div
      id={`memory-boost-${vocab.word}`}
      className="bg-white dark:bg-[#0B1225] border-2 border-indigo-100 dark:border-white/10 rounded-[32px] p-6 shadow-xl space-y-5"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-500/20 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-300">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
              Cognitive Retention & Native Fluency
            </span>
            <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">
              Memory Boost & Hindi Traps
            </h3>
          </div>
        </div>

        <span className="text-xs bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30">
          Smart Anchor
        </span>
      </div>

      {/* 1. Mnemonic Tip Card */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 to-amber-100/30 dark:from-amber-950/40 dark:to-amber-900/20 border-2 border-amber-200 dark:border-amber-500/30 space-y-1.5">
        <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-300 font-black text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>💡 Memory Trick (याद रखने का आसान तरीका):</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 font-medium leading-relaxed">
          {memoryBoost.mnemonic}
        </p>
      </div>

      {/* 2. Hindi Speaker Common Trap & Confusion Fix */}
      {memoryBoost.hindiSpeakerTrap && (
        <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50/80 to-rose-100/30 dark:from-rose-950/40 dark:to-rose-900/20 border-2 border-rose-200 dark:border-rose-500/30 space-y-1.5">
          <div className="flex items-center space-x-2 text-rose-800 dark:text-rose-300 font-black text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>🇮🇳 Hindi Speaker Common Mistake (सावधान रहें):</span>
          </div>
          <p className="text-xs sm:text-sm text-rose-950 dark:text-rose-100 font-medium leading-relaxed">
            {memoryBoost.hindiSpeakerTrap}
          </p>
        </div>
      )}

      {/* 3. Don't Say vs Say Instead Comparative Callout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {/* Don't Say */}
        <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-500/20 space-y-1">
          <div className="flex items-center space-x-1.5 text-rose-700 dark:text-rose-400 font-black text-[11px] uppercase">
            <XCircle className="w-4 h-4 shrink-0" />
            <span>❌ Don't Say This</span>
          </div>
          <p className="text-xs font-semibold text-rose-900 dark:text-rose-200 line-through opacity-80">
            "{memoryBoost.dontSay}"
          </p>
        </div>

        {/* Say Instead */}
        <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/20 space-y-1">
          <div className="flex items-center space-x-1.5 text-emerald-700 dark:text-emerald-400 font-black text-[11px] uppercase">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>✅ Say This Instead</span>
          </div>
          <p className="text-xs font-black text-emerald-900 dark:text-emerald-200">
            "{memoryBoost.sayInstead}"
          </p>
        </div>
      </div>

      {/* 4. Natural Conversational Sentence */}
      <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/30 space-y-1">
        <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300 block">
          🎯 Natural Conversational Flow:
        </span>
        <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
          "{memoryBoost.naturalUsage}"
        </p>
      </div>
    </div>
  );
};
