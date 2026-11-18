import React, { useState } from 'react';
import {
  Volume2,
  Volume1,
  RotateCcw,
  Star,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  Layers,
  CheckCircle2,
  Flame,
  Bookmark
} from 'lucide-react';
import { VocabItem } from '../../types';
import { getEnrichedVocabData } from '../../data/vocabEnrichmentData';
import { getActiveEnglishAccent, playSoundEffectEffect, speakCleanAudio } from '../../utils/audioUtils';
import { AudioService } from '../../services/AudioService';

interface Vocab3DCardProps {
  vocab: VocabItem;
  nativeLang?: string;
  isFlipped: boolean;
  onToggleFlip: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: (wordId: string) => void;
  currentIndex: number;
  totalCards: number;
}

export const Vocab3DCard: React.FC<Vocab3DCardProps> = ({
  vocab,
  nativeLang = 'hi',
  isFlipped,
  onToggleFlip,
  isFavorite = false,
  onToggleFavorite,
  currentIndex,
  totalCards
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);

  const enriched = getEnrichedVocabData(vocab);
  const hindiTranslation = vocab.translationsByLang?.[nativeLang as any] || vocab.translationsByLang?.hi || 'अर्थ';
  const exampleTranslation = vocab.exampleTranslationByLang?.[nativeLang as any] || vocab.exampleTranslationByLang?.hi || '';

  const handlePlayAudio = (rate: number = 1.0, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    playSoundEffectEffect('tap');
    setIsPlayingAudio(true);
    setTimeout(() => setIsPlayingAudio(false), 1200);

    if (rate === 1.0 && vocab.audioId) {
      AudioService.play(vocab.audioId);
    } else {
      speakCleanAudio(vocab.audioText || vocab.word, getActiveEnglishAccent(), rate);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSoundEffectEffect('tap');
    setShowSparkle(true);
    setTimeout(() => setShowSparkle(false), 800);
    if (onToggleFavorite) {
      onToggleFavorite(vocab.id || vocab.word);
    }
  };

  return (
    <div
      onClick={onToggleFlip}
      className="perspective-1000 w-full min-h-[380px] sm:min-h-[400px] cursor-pointer select-none group"
      id={`vocab-3d-card-${vocab.id || vocab.word}`}
    >
      <div
        className={`w-full h-full min-h-[380px] sm:min-h-[400px] rounded-[32px] transition-transform duration-500 transform-style-3d relative ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* ========================================================================= */}
        {/* FRONT SIDE OF CARD                                                        */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-white via-slate-50 to-[#F0F4FF] dark:from-[#0B1225] dark:via-[#111A30] dark:to-[#16213D] border-2 border-[#D9E4FF] dark:border-white/10 group-hover:border-indigo-400 dark:group-hover:border-indigo-500/50 rounded-[32px] p-5 sm:p-6 shadow-xl dark:shadow-2xl flex flex-col justify-between transition-colors">
          {/* Top Tags & Action Pill */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-black uppercase text-[#2E54FF] dark:text-cyan-400 bg-indigo-50 dark:bg-indigo-500/15 px-2.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/30">
                {enriched.partOfSpeech}
              </span>
              <span className="text-[10px] font-extrabold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30 font-mono">
                {enriched.cefrLevel}
              </span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full">
                {enriched.collectionIcon} {enriched.collection}
              </span>
            </div>

            {/* Favorite & Audio buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleFavoriteClick}
                className={`relative p-2.5 rounded-2xl border transition active:scale-90 cursor-pointer ${
                  isFavorite
                    ? 'bg-amber-50 dark:bg-amber-500/20 border-amber-300 text-amber-500'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500'
                }`}
                title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                aria-label="Toggle Favorite"
              >
                <Star className={`w-4 h-4 ${isFavorite ? 'fill-amber-400 text-amber-500' : ''}`} />
                {showSparkle && (
                  <span className="absolute -top-1 -right-1 text-xs animate-sparkle-pop">
                    ✨
                  </span>
                )}
              </button>

              {/* Slow Audio */}
              <button
                onClick={(e) => handlePlayAudio(0.75, e)}
                className="p-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 font-bold rounded-2xl transition active:scale-95 cursor-pointer"
                title="Slow Audio (0.75x)"
                aria-label="Play Slow Pronunciation"
              >
                <Volume1 className="w-4 h-4" />
              </button>

              {/* Normal Audio Button */}
              <button
                onClick={(e) => handlePlayAudio(1.0, e)}
                className={`p-3 bg-gradient-to-tr from-[#335CFF] to-[#6D5DF6] text-white font-bold rounded-2xl shadow-md shadow-indigo-500/25 transition active:scale-95 cursor-pointer ${
                  isPlayingAudio ? 'animate-soft-pulse scale-105' : 'hover:scale-105'
                }`}
                title="Listen to native pronunciation"
                aria-label="Play Normal Pronunciation"
              >
                <Volume2 className="w-5 h-5 fill-current" />
              </button>
            </div>
          </div>

          {/* Central Hero Word & IPA Display */}
          <div className="text-center py-6 sm:py-8 space-y-2">
            <div className="text-5xl mb-2 filter drop-shadow-sm">
              {vocab.icon || enriched.collectionIcon || '📖'}
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-display">
              {vocab.word}
            </h1>

            {/* Syllables & Stress Markers */}
            <div className="flex items-center justify-center space-x-1.5 pt-1">
              <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-500/30 rounded-xl text-sm font-mono font-bold text-indigo-700 dark:text-indigo-300">
                {vocab.phonetic || enriched.stressPattern}
              </span>
            </div>

            {/* Simulated Live Sound Waveform */}
            <div className="flex items-center justify-center space-x-1 pt-2 h-5">
              {[4, 8, 14, 10, 6, 12, 16, 8, 4].map((h, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlayingAudio
                      ? 'bg-indigo-500 animate-pulse'
                      : 'bg-slate-200 dark:bg-slate-700'
                  }`}
                  style={{ height: isPlayingAudio ? `${Math.max(6, (h * 1.5)) % 18}px` : `${h}px` }}
                />
              ))}
            </div>
          </div>

          {/* Bottom Prompt Footer */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
            <span className="flex items-center space-x-1.5 text-indigo-600 dark:text-indigo-400 font-bold">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Tap card to reveal Hindi meaning & usage</span>
            </span>
            <span className="font-mono font-bold text-slate-400 dark:text-slate-500">
              {currentIndex + 1} / {totalCards}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BACK SIDE OF CARD                                                         */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#F8FAFF] via-white to-indigo-50/70 dark:from-[#0B1225] dark:via-[#111A30] dark:to-[#16213D] border-2 border-indigo-300 dark:border-indigo-500/40 rounded-[32px] p-5 sm:p-6 shadow-xl dark:shadow-2xl flex flex-col justify-between overflow-y-auto scrollbar-none">
          <div className="space-y-3.5">
            {/* Top Back Header: Meaning & Hindi Pronunciation */}
            <div className="flex items-center justify-between border-b border-indigo-100 dark:border-slate-800 pb-2.5">
              <div>
                <span className="text-[10px] font-black uppercase text-indigo-700 dark:text-indigo-400 tracking-wider block">
                  Hindi Meaning (हिन्दी अर्थ)
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-hindi">
                  {hindiTranslation}
                </h3>
              </div>

              <button
                onClick={(e) => handlePlayAudio(1.0, e)}
                className="p-2.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 rounded-xl transition cursor-pointer"
                title="Hear Audio"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* English Definition */}
            <div className="space-y-0.5">
              <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">
                English Definition:
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                {vocab.meaning}
              </p>
            </div>

            {/* Example Sentence in Action */}
            <div className="bg-white dark:bg-slate-950/80 p-3.5 rounded-2xl border border-indigo-100 dark:border-slate-800 space-y-1 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase font-black text-[#2E54FF] dark:text-cyan-400 tracking-wider">
                  Example in Action:
                </span>
                <span className="text-[10px] text-slate-400">Context</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-900 dark:text-slate-100 font-semibold leading-relaxed">
                "{vocab.exampleSentence}"
              </p>
              {exampleTranslation && (
                <p className="text-xs text-amber-800 dark:text-amber-300/90 font-hindi pt-0.5">
                  "{exampleTranslation}"
                </p>
              )}
            </div>

            {/* Collocations & Synonyms */}
            {enriched.memoryBoost.collocations.length > 0 && (
              <div className="space-y-1">
                <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">
                  Collocations (साथ प्रयोग होने वाले शब्द):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {enriched.memoryBoost.collocations.slice(0, 3).map((col, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold px-2.5 py-0.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20"
                    >
                      {col}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Memory Tip & Hindi Trap */}
            <div className="grid grid-cols-1 gap-2 pt-0.5">
              <div className="flex items-start space-x-2 text-xs bg-amber-50 dark:bg-amber-950/30 p-2.5 rounded-2xl border border-amber-200 dark:border-amber-500/30">
                <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-900 dark:text-amber-200 leading-snug">
                  <strong>Memory Tip:</strong> {enriched.memoryBoost.mnemonic}
                </p>
              </div>

              {enriched.memoryBoost.hindiSpeakerTrap && (
                <div className="flex items-start space-x-2 text-xs bg-rose-50 dark:bg-rose-950/30 p-2.5 rounded-2xl border border-rose-200 dark:border-rose-500/30">
                  <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-rose-900 dark:text-rose-200 leading-snug">
                    <strong>Hindi Speaker Trap:</strong> {enriched.memoryBoost.hindiSpeakerTrap}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Flip Back Footer */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-indigo-100 dark:border-slate-800 pt-2.5 mt-2">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center space-x-1">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Tap to flip front</span>
            </span>
            <span className="font-mono font-bold text-slate-400 dark:text-slate-500">
              {currentIndex + 1} / {totalCards}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
