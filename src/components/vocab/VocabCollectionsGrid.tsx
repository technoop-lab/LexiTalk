import React from 'react';
import { Sparkles, ArrowRight, CheckCircle, BookOpen, Layers } from 'lucide-react';
import { VOCAB_COLLECTIONS, VocabCollectionCategory } from '../../data/vocabEnrichmentData';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface VocabCollectionsGridProps {
  selectedCollectionId?: string;
  onSelectCollection: (collectionId: string) => void;
  learnedCountsByCollection?: Record<string, number>;
}

export const VocabCollectionsGrid: React.FC<VocabCollectionsGridProps> = ({
  selectedCollectionId,
  onSelectCollection,
  learnedCountsByCollection = {}
}) => {
  return (
    <div id="vocab-collections-grid" className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
            Domain Mastery
          </span>
          <h3 className="text-xl font-black text-slate-900 dark:text-white font-display">
            10 Curated Vocabulary Collections
          </h3>
        </div>

        {selectedCollectionId && (
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onSelectCollection('');
            }}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
          >
            Show All Words
          </button>
        )}
      </div>

      {/* Grid of 10 Collections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {VOCAB_COLLECTIONS.map((col) => {
          const isSelected = selectedCollectionId === col.id;
          const learned = learnedCountsByCollection[col.id] || Math.floor(col.wordsCount * 0.35);
          const percent = Math.min(100, Math.round((learned / col.wordsCount) * 100));

          return (
            <div
              key={col.id}
              onClick={() => {
                playSoundEffectEffect('tap');
                onSelectCollection(isSelected ? '' : col.id);
              }}
              className={`p-4 rounded-[28px] border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer active:scale-95 group ${
                isSelected
                  ? 'bg-gradient-to-br from-indigo-50 via-white to-indigo-100/60 dark:from-[#111A30] dark:via-[#16213D] dark:to-indigo-950/70 border-[#335CFF] shadow-lg shadow-indigo-500/15'
                  : 'bg-white dark:bg-[#0B1225] border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:-translate-y-0.5 shadow-md'
              }`}
            >
              <div className="space-y-2.5">
                {/* Top Icon & Word Count */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${col.colorGradient} flex items-center justify-center text-2xl shadow-md text-white`}>
                    {col.icon}
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-[11px] font-black font-mono text-indigo-600 dark:text-cyan-300 bg-indigo-50 dark:bg-indigo-500/20 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-500/30">
                      {col.wordsCount} Words
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold mt-0.5">
                      {percent}% Mastered
                    </span>
                  </div>
                </div>

                {/* Title & Hindi Title */}
                <div>
                  <h4 className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#335CFF] dark:group-hover:text-cyan-300 transition-colors font-display">
                    {col.title}
                  </h4>
                  <p className="text-xs text-indigo-800 dark:text-indigo-300 font-hindi font-semibold">
                    {col.hindiTitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {col.description}
                </p>

                {/* Sample Word Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {col.sampleWords.slice(0, 4).map((sw, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="pt-4 space-y-1">
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${col.colorGradient} rounded-full transition-all duration-700`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
