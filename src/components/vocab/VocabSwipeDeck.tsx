import React, { useState } from 'react';
import {
  Check,
  RotateCcw,
  Star,
  Volume2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronUp,
  Zap,
  ChevronDown,
  Layers
} from 'lucide-react';
import { VocabItem } from '../../types';
import { Vocab3DCard } from './Vocab3DCard';
import { getActiveEnglishAccent, playSoundEffectEffect, speakCleanAudio } from '../../utils/audioUtils';

interface VocabSwipeDeckProps {
  cards: VocabItem[];
  nativeLang?: string;
  onMasterWord: (word: VocabItem) => void;
  onReviewWord: (word: VocabItem) => void;
  favorites: string[];
  onToggleFavorite: (wordId: string) => void;
}

export const VocabSwipeDeck: React.FC<VocabSwipeDeckProps> = ({
  cards,
  nativeLang = 'hi',
  onMasterWord,
  onReviewWord,
  favorites,
  onToggleFavorite
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [swipeAnimation, setSwipeAnimation] = useState<'right' | 'left' | 'up' | null>(null);
  const [sessionToast, setSessionToast] = useState<string | null>(null);

  const currentWord = cards[currentIndex];

  const triggerSessionToast = (text: string) => {
    setSessionToast(text);
    setTimeout(() => setSessionToast(null), 1200);
  };

  const handleNextMastered = () => {
    if (!currentWord) return;
    playSoundEffectEffect('correct');
    setSwipeAnimation('right');
    triggerSessionToast('Marked as known for this session.');

    setTimeout(() => {
      onMasterWord(currentWord);
      setIsFlipped(false);
      setSwipeAnimation(null);
      setCurrentIndex((prev) => (prev + 1 < cards.length ? prev + 1 : 0));
    }, 280);
  };

  const handleNeedsReview = () => {
    if (!currentWord) return;
    playSoundEffectEffect('tap');
    setSwipeAnimation('left');
    triggerSessionToast('Added to this session’s review list.');

    setTimeout(() => {
      onReviewWord(currentWord);
      setIsFlipped(false);
      setSwipeAnimation(null);
      setCurrentIndex((prev) => (prev + 1 < cards.length ? prev + 1 : 0));
    }, 280);
  };

  const handleFavorite = () => {
    if (!currentWord) return;
    playSoundEffectEffect('tap');
    setSwipeAnimation('up');
    triggerSessionToast(favorites.includes(currentWord.id || currentWord.word) ? 'Removed from favorites.' : 'Added to favorites.');
    onToggleFavorite(currentWord.id || currentWord.word);

    setTimeout(() => {
      setSwipeAnimation(null);
    }, 300);
  };

  const handleHearAudio = () => {
    if (!currentWord) return;
    playSoundEffectEffect('tap');
    speakCleanAudio(currentWord.audioText || currentWord.word, getActiveEnglishAccent(), 1.0);
  };

  if (!currentWord || cards.length === 0) {
    return (
      <div className="bg-white dark:bg-[#0B1225] p-8 rounded-[32px] border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-lg">
        <div className="text-5xl">🎉</div>
        <h3 className="text-xl font-black text-slate-900 dark:text-white font-display">
          All Cards Completed!
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
          You've reviewed all vocabulary cards in this deck. Reset or select another collection to continue.
        </p>
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            setCurrentIndex(0);
          }}
          className="px-6 py-3 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 active:scale-95 cursor-pointer"
        >
          Study Again
        </button>
      </div>
    );
  }

  const nextCard1 = cards[(currentIndex + 1) % cards.length];
  const nextCard2 = cards[(currentIndex + 2) % cards.length];

  return (
    <div className="relative w-full flex flex-col items-center space-y-5">
      {/* Local study feedback only; no XP is credited from this deck. */}
      {sessionToast && (
        <div role="status" className="absolute -top-3 z-30 flex items-center space-x-1.5 px-4 py-2 bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-100 font-bold text-xs rounded-full shadow-lg border border-indigo-300 dark:border-indigo-700 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>{sessionToast}</span>
        </div>
      )}

      {/* Layered Card Deck Stack */}
      <div className="relative w-full max-w-md min-h-[380px] sm:min-h-[400px]">
        {/* Deep Stack Card 2 (3rd layer) */}
        {cards.length > 2 && (
          <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-white/5 rounded-[32px] transform scale-[0.88] translate-y-6 opacity-40 shadow-sm pointer-events-none transition-all duration-300" />
        )}

        {/* Medium Stack Card 1 (2nd layer) */}
        {cards.length > 1 && (
          <div className="absolute inset-0 bg-white/85 dark:bg-slate-850 border border-slate-200/80 dark:border-white/10 rounded-[32px] transform scale-[0.94] translate-y-3 opacity-70 shadow-md pointer-events-none transition-all duration-300">
            <div className="p-6 text-center opacity-30">
              <span className="text-2xl font-bold">{nextCard1.word}</span>
            </div>
          </div>
        )}

        {/* Active Front Card */}
        <div
          className={`relative z-10 transition-all duration-300 ease-out ${
            swipeAnimation === 'right'
              ? 'translate-x-48 rotate-12 opacity-0'
              : swipeAnimation === 'left'
              ? '-translate-x-48 -rotate-12 opacity-0'
              : swipeAnimation === 'up'
              ? '-translate-y-24 scale-105 opacity-80'
              : 'translate-x-0 rotate-0 opacity-100'
          }`}
        >
          <Vocab3DCard
            vocab={currentWord}
            nativeLang={nativeLang}
            isFlipped={isFlipped}
            onToggleFlip={() => {
              playSoundEffectEffect('tap');
              setIsFlipped(!isFlipped);
            }}
            isFavorite={favorites.includes(currentWord.id || currentWord.word)}
            onToggleFavorite={onToggleFavorite}
            currentIndex={currentIndex}
            totalCards={cards.length}
          />
        </div>
      </div>

      {/* Interactive Swipe Controls Bar (Duolingo / Tinder Style) */}
      <div className="w-full max-w-md grid grid-cols-4 gap-2.5 pt-1">
        {/* Left: Review Again */}
        <button
          onClick={handleNeedsReview}
          className="flex flex-col items-center justify-center p-3 rounded-2xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-500/10 dark:hover:bg-amber-500/20 border-2 border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 font-bold transition active:scale-95 cursor-pointer shadow-sm group"
          title="Mark for review (Swipe Left)"
        >
          <RotateCcw className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
          <span className="text-[10px] font-black uppercase mt-1">Review</span>
        </button>

        {/* Star / Favorite */}
        <button
          onClick={handleFavorite}
          className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition active:scale-95 cursor-pointer shadow-sm ${
            favorites.includes(currentWord.id || currentWord.word)
              ? 'bg-purple-50 dark:bg-purple-500/20 border-purple-300 text-purple-600 dark:text-purple-300'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 hover:text-purple-600'
          }`}
          title="Toggle Star Favorite (Swipe Up)"
        >
          <Star className={`w-5 h-5 ${favorites.includes(currentWord.id || currentWord.word) ? 'fill-purple-500' : ''}`} />
          <span className="text-[10px] font-black uppercase mt-1">Star</span>
        </button>

        {/* Hear Audio */}
        <button
          onClick={handleHearAudio}
          className="flex flex-col items-center justify-center p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 border-2 border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 font-bold transition active:scale-95 cursor-pointer shadow-sm"
          title="Hear Pronunciation (Swipe Down)"
        >
          <Volume2 className="w-5 h-5" />
          <span className="text-[10px] font-black uppercase mt-1">Listen</span>
        </button>

        {/* Right: Mastered / Know This */}
        <button
          onClick={handleNextMastered}
          className="flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-500/15 dark:hover:bg-emerald-500/25 border-2 border-emerald-300 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-bold transition active:scale-95 cursor-pointer shadow-sm group"
          title="I Know This (Swipe Right)"
        >
          <Check className="w-5 h-5 group-hover:scale-125 transition-transform" />
          <span className="text-[10px] font-black uppercase mt-1">Know this</span>
        </button>
      </div>

      {/* Subtle Gesture Guidance Pills */}
      <div className="flex items-center justify-center space-x-3 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
        <span className="flex items-center space-x-1">
          <ArrowLeft className="w-3 h-3 text-amber-500" />
          <span>Review</span>
        </span>
        <span>•</span>
        <span className="flex items-center space-x-1">
          <ChevronUp className="w-3 h-3 text-purple-500" />
          <span>Star</span>
        </span>
        <span>•</span>
        <span className="flex items-center space-x-1">
          <ArrowRight className="w-3 h-3 text-emerald-500" />
          <span>Master</span>
        </span>
      </div>
    </div>
  );
};
