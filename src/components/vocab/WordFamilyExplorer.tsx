import React, { useState } from 'react';
import { Network, Volume2, Sparkles, ChevronRight, Layers, ArrowDown } from 'lucide-react';
import { VocabItem } from '../../types';
import { getEnrichedVocabData, WordFamilyNode } from '../../data/vocabEnrichmentData';
import { getActiveEnglishAccent, playSoundEffectEffect, speakCleanAudio } from '../../utils/audioUtils';

interface WordFamilyExplorerProps {
  vocab: VocabItem;
}

export const WordFamilyExplorer: React.FC<WordFamilyExplorerProps> = ({ vocab }) => {
  const enriched = getEnrichedVocabData(vocab);
  const [selectedMember, setSelectedMember] = useState<WordFamilyNode | null>(
    enriched.wordFamily.members[0] || null
  );

  const handlePlayMember = (member: WordFamilyNode) => {
    playSoundEffectEffect('tap');
    setSelectedMember(member);
    speakCleanAudio(member.word, getActiveEnglishAccent(), 1.0);
  };

  const getPosBadgeColor = (pos: string) => {
    switch (pos) {
      case 'noun':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border-blue-200 dark:border-blue-500/30';
      case 'verb':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30';
      case 'adjective':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 border-purple-200 dark:border-purple-500/30';
      case 'adverb':
        return 'bg-amber-50 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 border-amber-200 dark:border-amber-500/30';
      default:
        return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30';
    }
  };

  return (
    <div
      id={`word-family-explorer-${vocab.word}`}
      className="bg-white dark:bg-[#0B1225] border-2 border-indigo-100 dark:border-white/10 rounded-[32px] p-6 shadow-xl space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
              Morphology & Word Formation
            </span>
            <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">
              Word Family Tree
            </h3>
          </div>
        </div>

        <span className="text-xs bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-bold px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/30">
          Root: {enriched.wordFamily.root}
        </span>
      </div>

      {/* Tree Visualization */}
      <div className="flex flex-col items-center space-y-3 py-2">
        {/* Root Node */}
        <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white font-black text-lg shadow-lg shadow-indigo-500/30 border border-white/30 flex items-center space-x-2">
          <span>🌳</span>
          <span className="tracking-wide">{enriched.wordFamily.root}</span>
        </div>

        {/* Connector Line */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-indigo-300 dark:to-indigo-700" />

        {/* Derived Form Nodes Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {enriched.wordFamily.members.map((member, idx) => {
            const isSelected = selectedMember?.word === member.word;
            return (
              <button
                key={idx}
                onClick={() => handlePlayMember(member)}
                className={`p-3.5 rounded-2xl border-2 transition text-left active:scale-95 cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-400 dark:border-indigo-500 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md border ${getPosBadgeColor(member.partOfSpeech)}`}>
                      {member.partOfSpeech}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{member.phonetic}</span>
                  </div>
                  <h4 className="text-base font-black text-slate-900 dark:text-white font-display">
                    {member.word}
                  </h4>
                  <span className="text-xs text-slate-600 dark:text-slate-400 block font-hindi">
                    {member.hindiMeaning}
                  </span>
                </div>

                <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs">
                  <Volume2 className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Member Detail Box */}
      {selectedMember && (
        <div className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-[#111A30] dark:to-indigo-950/40 p-4 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
              Selected Word Detail:
            </span>
            <span className="text-xs font-bold text-slate-500 font-mono">
              {selectedMember.phonetic}
            </span>
          </div>

          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
            {selectedMember.meaning}
          </p>

          <div className="p-2.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
            <strong className="text-indigo-600 dark:text-indigo-400 block text-[10px] uppercase font-bold">
              Example Context:
            </strong>
            <p className="italic mt-0.5">"{selectedMember.example}"</p>
          </div>
        </div>
      )}
    </div>
  );
};
