import React, { useState } from 'react';
import {
  Volume2,
  Check,
  RotateCcw,
  Sparkles,
  BookOpen,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Lightbulb,
  Layers,
  Zap,
  Flame,
  Star,
  Mic,
  Network,
  Award,
  Gamepad2
} from 'lucide-react';
import { VocabItem, UserAcademyProfile } from '../../types';
import { VOCAB_BANK_A1 } from '../../data/vocabBank';
import { VocabHeroStudioCard } from '../vocab/VocabHeroStudioCard';
import { VocabSwipeDeck } from '../vocab/VocabSwipeDeck';
import { PronunciationSpotlightCard } from '../vocab/PronunciationSpotlightCard';
import { WordFamilyExplorer } from '../vocab/WordFamilyExplorer';
import { MemoryBoostCard } from '../vocab/MemoryBoostCard';
import { VocabCollectionsGrid } from '../vocab/VocabCollectionsGrid';
import { VocabAnalyticsRings } from '../vocab/VocabAnalyticsRings';
import { VocabMiniQuizModal } from '../vocab/VocabMiniQuizModal';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface VocabExperienceModalProps {
  user: UserAcademyProfile;
  onClose: () => void;
}

export type VocabStudioViewTab =
  | 'swipe_deck'
  | 'pronunciation'
  | 'memory_traps'
  | 'word_family'
  | 'collections'
  | 'analytics';

export const VocabExperienceModal: React.FC<VocabExperienceModalProps> = ({
  user,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<VocabStudioViewTab>('swipe_deck');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [knownWordIds, setKnownWordIds] = useState<string[]>([]);
  const [reviewWordIds, setReviewWordIds] = useState<string[]>([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [showMiniQuiz, setShowMiniQuiz] = useState(false);

  const nativeLang = user.nativeLanguage || 'hi';
  // All A1 words from the content bank (each word once). Previously this was lesson 1.1 only.
  const rawList: VocabItem[] = (VOCAB_BANK_A1 as unknown as VocabItem[]) || [];

  // Filter list by search, favorites, and collection
  const filteredVocab = rawList.filter((item) => {
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !term ||
      item.word.toLowerCase().includes(term) ||
      item.meaning.toLowerCase().includes(term) ||
      (item.translationsByLang?.hi && item.translationsByLang.hi.includes(term));

    const matchesFavorites = !onlyFavorites || favorites.includes(item.id || item.word);

    return matchesSearch && matchesFavorites;
  });

  const currentSelectedWord = filteredVocab[0] || rawList[0];

  const handleToggleFavorite = (wordId: string) => {
    setFavorites((prev) =>
      prev.includes(wordId) ? prev.filter((id) => id !== wordId) : [...prev, wordId]
    );
  };

  const handleMasterWord = (word: VocabItem) => {
    const id = word.id || word.word;
    if (!knownWordIds.includes(id)) {
      setKnownWordIds((prev) => [...prev, id]);
    }
  };

  const handleReviewWord = (word: VocabItem) => {
    const id = word.id || word.word;
    if (!reviewWordIds.includes(id)) {
      setReviewWordIds((prev) => [...prev, id]);
    }
  };

  return (
    <div
      id="vocab-experience-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fade-in"
    >
      <div
        id="vocab-experience-modal-container"
        className="bg-[#F6F8FC] dark:bg-[#050816] border border-indigo-200 dark:border-white/10 rounded-[36px] w-full max-w-xl overflow-hidden shadow-2xl flex flex-col max-h-[94vh] my-auto transition-colors"
      >
        {/* Modal Top Header Bar */}
        <div className="px-5 py-4 border-b border-indigo-100 dark:border-white/10 flex items-center justify-between bg-white/90 dark:bg-[#0B1225]/90 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#335CFF] to-[#6D5DF6] flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/25">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-display">
                Curiosity Vocabulary Studio
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Duolingo Max × Apple Cards Interactive Engine
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Quick Launch Mini Quiz */}
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setShowMiniQuiz(true);
              }}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 font-black text-xs shadow-xs flex items-center space-x-1.5 hover:brightness-105 active:scale-95 cursor-pointer"
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mini Quiz</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition cursor-pointer"
              aria-label="Close Vocabulary Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature Sub-Navigation Tabs */}
        <div className="px-4 py-2 bg-white dark:bg-[#0B1225] border-b border-indigo-100 dark:border-white/5 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
          <div className="flex items-center space-x-1.5">
            {[
              { id: 'swipe_deck', label: '🗂️ 3D Swipe', icon: Layers },
              { id: 'pronunciation', label: '🎙️ Pronunciation', icon: Mic },
              { id: 'memory_traps', label: '💡 Traps & Tips', icon: Lightbulb },
              { id: 'word_family', label: '🌳 Word Family', icon: Network },
              { id: 'collections', label: '📚 10 Collections', icon: BookOpen },
              { id: 'analytics', label: '📊 Apple Rings', icon: Award }
            ].map((tab) => {
              const isCurrent = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    setActiveTab(tab.id as VocabStudioViewTab);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center space-x-1.5 ${
                    isCurrent
                      ? 'bg-[#335CFF] text-white font-black shadow-md shadow-indigo-500/25'
                      : 'bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Favorites Filter Toggle */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setOnlyFavorites(!onlyFavorites);
            }}
            className={`p-2 rounded-xl border text-xs font-bold transition flex items-center space-x-1 shrink-0 cursor-pointer ${
              onlyFavorites
                ? 'bg-amber-50 dark:bg-amber-500/20 border-amber-300 text-amber-600'
                : 'bg-slate-100 dark:bg-slate-850 border-slate-200 dark:border-slate-800 text-slate-500'
            }`}
            title="Show only starred favorite words"
          >
            <Star className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">{favorites.length}</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-5 flex-1 scrollbar-none">
          {/* 1. Hero Card at Top */}
          <VocabHeroStudioCard
            wordsLearnedCount={knownWordIds.length}
            totalWordsCount={rawList.length}
            wordsDueForReview={reviewWordIds.length}
            activeCollectionTitle={selectedCollectionId ? selectedCollectionId.toUpperCase() : undefined}
          />

          {/* Search & Filter Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search words by English, Hindi meaning, or IPA..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#0B1225] rounded-2xl border border-indigo-100 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400 transition"
            />
          </div>

          {/* TAB 1: 3D SWIPE LEARNING DECK */}
          {activeTab === 'swipe_deck' && (
            <div className="space-y-3">
              <p className="rounded-xl bg-indigo-50 p-3 text-xs text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-200">Counts in this studio are local to the open session. Self-ratings are not saved as verified mastery and no XP is credited.</p>
              <VocabSwipeDeck
                cards={filteredVocab}
                nativeLang={nativeLang}
                onMasterWord={handleMasterWord}
                onReviewWord={handleReviewWord}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            </div>
          )}

          {/* TAB 2: PRONUNCIATION & MOUTH POSITION LAB */}
          {activeTab === 'pronunciation' && (
            <PronunciationSpotlightCard vocab={currentSelectedWord} />
          )}

          {/* TAB 3: MEMORY BOOST & HINDI TRAPS */}
          {activeTab === 'memory_traps' && (
            <MemoryBoostCard vocab={currentSelectedWord} />
          )}

          {/* TAB 4: WORD FAMILY EXPLORER */}
          {activeTab === 'word_family' && (
            <WordFamilyExplorer vocab={currentSelectedWord} />
          )}

          {/* TAB 5: 10 CURATED COLLECTIONS */}
          {activeTab === 'collections' && (
            <VocabCollectionsGrid
              selectedCollectionId={selectedCollectionId}
              onSelectCollection={(colId) => {
                setSelectedCollectionId(colId);
                setActiveTab('swipe_deck');
              }}
            />
          )}

          {/* TAB 6: PROGRESS & APPLE RINGS ANALYTICS */}
          {activeTab === 'analytics' && (
            <>
              <p className="rounded-xl bg-indigo-50 p-3 text-xs text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-200">These counts describe this open session only. They are not saved as verified mastery and award no XP.</p>
              <VocabAnalyticsRings
                totalLearned={knownWordIds.length}
                reviewDue={reviewWordIds.length}
                favoritesCount={favorites.length}
                sessionTarget={rawList.length}
              />
            </>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-3.5 bg-white/90 dark:bg-[#0B1225]/90 border-t border-indigo-100 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold">{filteredVocab.length} Words Available</span>
          </div>

          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setShowMiniQuiz(true);
            }}
            className="px-4 py-2 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/25 flex items-center space-x-1.5 active:scale-95 cursor-pointer"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Launch Quiz Arena</span>
          </button>
        </div>
      </div>

      {/* Mini Quiz Modal Overlay */}
      {showMiniQuiz && (
        <VocabMiniQuizModal
          words={rawList}
          nativeLang={nativeLang}
          onClose={() => setShowMiniQuiz(false)}
        />
      )}
    </div>
  );
};
