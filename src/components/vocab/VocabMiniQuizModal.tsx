import React, { useState, useEffect } from 'react';
import {
  Volume2,
  CheckCircle2,
  XCircle,
  Sparkles,
  Zap,
  RotateCcw,
  Trophy,
  Award,
  ChevronRight,
  Flame
} from 'lucide-react';
import { VocabItem } from '../../types';
import { getActiveEnglishAccent, playSoundEffectEffect, speakCleanAudio } from '../../utils/audioUtils';

export type MiniQuizType = 'quick_match' | 'meaning_match' | 'audio_match' | 'missing_letter' | 'arrange_letters';

interface VocabMiniQuizModalProps {
  words: VocabItem[];
  nativeLang?: string;
  onClose: () => void;
  onCompleteQuiz?: (score: number, xpEarned: number) => void;
}

export const VocabMiniQuizModal: React.FC<VocabMiniQuizModalProps> = ({
  words,
  nativeLang = 'hi',
  onClose,
  onCompleteQuiz
}) => {
  const [selectedQuizType, setSelectedQuizType] = useState<MiniQuizType>('quick_match');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Quick match state
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [selectedEngWord, setSelectedEngWord] = useState<string | null>(null);
  const [selectedHindiWord, setSelectedHindiWord] = useState<string | null>(null);

  // Multiple Choice / Audio Match state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOptionCorrect, setIsOptionCorrect] = useState<boolean | null>(null);

  // Missing Letter state
  const [missingLetterInput, setMissingLetterInput] = useState<string>('');

  // Arrange Letters state
  const [scrambledLetters, setScrambledLetters] = useState<{ id: number; char: string }[]>([]);
  const [arrangedLetters, setArrangedLetters] = useState<{ id: number; char: string }[]>([]);

  const pool = words.length >= 4 ? words : [
    ...words,
    { id: 'sample1', word: 'Journey', phonetic: '/ˈdʒɜːrni/', meaning: 'An act of travelling', translationsByLang: { hi: 'यात्रा' }, exampleSentence: 'Have a safe journey.', exampleTranslationByLang: { hi: 'आपकी यात्रा सुखद हो।' }, audioText: 'journey', icon: '✈️', difficulty: 'A1' },
    { id: 'sample2', word: 'Meeting', phonetic: '/ˈmiːtɪŋ/', meaning: 'An assembly of people', translationsByLang: { hi: 'बैठक / सभा' }, exampleSentence: 'We have a meeting at 10 AM.', exampleTranslationByLang: { hi: 'सुबह 10 बजे हमारी मीटिंग है।' }, audioText: 'meeting', icon: '💼', difficulty: 'A1' }
  ];

  const currentWord = pool[currentIndex % pool.length];

  // Set up scramble state when entering arrange_letters
  useEffect(() => {
    if (selectedQuizType === 'arrange_letters' && currentWord) {
      const clean = currentWord.word.toUpperCase().replace(/[^A-Z]/g, '');
      const chars = clean.split('').map((char, id) => ({ id, char }));
      // shuffle
      setScrambledLetters([...chars].sort(() => Math.random() - 0.5));
      setArrangedLetters([]);
    }
  }, [selectedQuizType, currentIndex, currentWord]);

  // Handle Answer Selection in Multiple Choice / Audio Match
  const handleSelectOption = (optionWord: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionWord);

    const isCorrect = optionWord.toLowerCase() === currentWord.word.toLowerCase();
    setIsOptionCorrect(isCorrect);

    if (isCorrect) {
      playSoundEffectEffect('correct');
      setScore((s) => s + 10);
      setStreak((st) => st + 1);
    } else {
      playSoundEffectEffect('wrong');
      setStreak(0);
    }

    setTimeout(() => {
      setSelectedOption(null);
      setIsOptionCorrect(null);
      if (currentIndex + 1 < Math.min(6, pool.length)) {
        setCurrentIndex((i) => i + 1);
      } else {
        finishQuiz();
      }
    }, 1200);
  };

  // Quick Match Logic
  const handleEngTileClick = (word: string) => {
    playSoundEffectEffect('tap');
    setSelectedEngWord(word);
    if (selectedHindiWord) {
      checkMatch(word, selectedHindiWord);
    }
  };

  const handleHindiTileClick = (wordId: string) => {
    playSoundEffectEffect('tap');
    setSelectedHindiWord(wordId);
    if (selectedEngWord) {
      checkMatch(selectedEngWord, wordId);
    }
  };

  const checkMatch = (eng: string, hindiId: string) => {
    const item = pool.find((w) => w.word === eng);
    if (item && (item.id === hindiId || item.word === hindiId)) {
      playSoundEffectEffect('correct');
      setMatchedPairs((prev) => [...prev, eng]);
      setScore((s) => s + 15);
      setStreak((st) => st + 1);
      setSelectedEngWord(null);
      setSelectedHindiWord(null);

      if (matchedPairs.length + 1 >= Math.min(4, pool.length)) {
        setTimeout(finishQuiz, 800);
      }
    } else {
      playSoundEffectEffect('wrong');
      setStreak(0);
      setTimeout(() => {
        setSelectedEngWord(null);
        setSelectedHindiWord(null);
      }, 500);
    }
  };

  // Letter Arrange Logic
  const handleSelectScrambleLetter = (item: { id: number; char: string }) => {
    playSoundEffectEffect('tap');
    setScrambledLetters((prev) => prev.filter((l) => l.id !== item.id));
    const nextArranged = [...arrangedLetters, item];
    setArrangedLetters(nextArranged);

    const target = currentWord.word.toUpperCase().replace(/[^A-Z]/g, '');
    const currentStr = nextArranged.map((l) => l.char).join('');

    if (currentStr.length === target.length) {
      if (currentStr === target) {
        playSoundEffectEffect('correct');
        setScore((s) => s + 20);
        setStreak((st) => st + 1);
        setTimeout(() => {
          if (currentIndex + 1 < Math.min(5, pool.length)) {
            setCurrentIndex((i) => i + 1);
          } else {
            finishQuiz();
          }
        }, 1000);
      } else {
        playSoundEffectEffect('wrong');
        setStreak(0);
        setTimeout(() => {
          // Reset current arrange
          const clean = currentWord.word.toUpperCase().replace(/[^A-Z]/g, '');
          setScrambledLetters(clean.split('').map((char, id) => ({ id, char })).sort(() => Math.random() - 0.5));
          setArrangedLetters([]);
        }, 800);
      }
    }
  };

  const finishQuiz = () => {
    playSoundEffectEffect('victory');
    setIsCompleted(true);
    if (onCompleteQuiz) {
      onCompleteQuiz(score, Math.round(score * 1.5));
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div
        id="vocab-mini-quiz-modal"
        className="w-full max-w-lg bg-white dark:bg-[#0B1225] border-2 border-indigo-200 dark:border-white/10 rounded-[32px] p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto scrollbar-none flex flex-col justify-between"
      >
        {/* Header with Mode Selector */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-2xl bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white font-display">
                  Vocabulary Mini-Quiz Arena
                </h3>
                <span className="text-[10px] font-bold text-slate-400">
                  5 Micro-Challenge Modes
                </span>
              </div>
            </div>

            {/* Score & Streak */}
            <div className="flex items-center space-x-2">
              <span className="flex items-center space-x-1 text-xs font-black text-amber-600 bg-amber-50 dark:bg-amber-500/15 px-2.5 py-1 rounded-xl border border-amber-200 dark:border-amber-500/30">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>{streak}x</span>
              </span>
              <span className="text-xs font-black text-indigo-600 bg-indigo-50 dark:bg-indigo-500/15 px-2.5 py-1 rounded-xl border border-indigo-200 dark:border-indigo-500/30">
                {score} XP
              </span>
            </div>
          </div>

          {/* 5 Mode Chips */}
          <div className="flex space-x-1.5 overflow-x-auto scrollbar-none py-1">
            {[
              { id: 'quick_match', label: '1. Quick Match 🔗' },
              { id: 'meaning_match', label: '2. Meaning Quiz ❓' },
              { id: 'audio_match', label: '3. Audio Match 🎧' },
              { id: 'arrange_letters', label: '4. Word Scramble 🔤' }
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setSelectedQuizType(m.id as any);
                  setCurrentIndex(0);
                  setScore(0);
                  setStreak(0);
                  setIsCompleted(false);
                  setMatchedPairs([]);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border cursor-pointer ${
                  selectedQuizType === m.id
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-300'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quiz Body */}
        {isCompleted ? (
          /* Completion State */
          <div className="text-center py-8 space-y-4">
            <div className="text-6xl animate-bounce">🏆</div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display">
              Quiz Arena Victory!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Outstanding work! You scored <strong>{score} Points</strong> and earned{' '}
              <strong className="text-amber-500">+{Math.round(score * 1.5)} XP</strong>.
            </p>
            <div className="flex items-center justify-center space-x-3 pt-2">
              <button
                onClick={() => {
                  setIsCompleted(false);
                  setCurrentIndex(0);
                  setScore(0);
                  setStreak(0);
                  setMatchedPairs([]);
                }}
                className="px-5 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 font-bold text-xs active:scale-95 cursor-pointer"
              >
                Play Again
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white font-bold text-xs shadow-lg shadow-indigo-500/25 active:scale-95 cursor-pointer"
              >
                Return to Studio
              </button>
            </div>
          </div>
        ) : (
          /* Active Gameplay Modes */
          <div className="space-y-4 py-2">
            {/* 1. QUICK MATCH (Connect English to Hindi) */}
            {selectedQuizType === 'quick_match' && (
              <div className="space-y-3">
                <span className="text-xs text-slate-500 font-bold block text-center">
                  Tap an English word, then tap its corresponding Hindi translation:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {/* English Column */}
                  <div className="space-y-2">
                    {pool.slice(0, 4).map((item, idx) => {
                      const isMatched = matchedPairs.includes(item.word);
                      const isSelected = selectedEngWord === item.word;
                      return (
                        <button
                          key={idx}
                          disabled={isMatched}
                          onClick={() => handleEngTileClick(item.word)}
                          className={`w-full p-3 rounded-2xl border-2 font-bold text-sm transition text-left cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-700 opacity-60'
                              : isSelected
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-300'
                          }`}
                        >
                          {item.word}
                        </button>
                      );
                    })}
                  </div>

                  {/* Hindi Column */}
                  <div className="space-y-2">
                    {pool.slice(0, 4).map((item, idx) => {
                      const isMatched = matchedPairs.includes(item.word);
                      const isSelected = selectedHindiWord === (item.id || item.word);
                      return (
                        <button
                          key={idx}
                          disabled={isMatched}
                          onClick={() => handleHindiTileClick(item.id || item.word)}
                          className={`w-full p-3 rounded-2xl border-2 font-bold text-sm font-hindi transition text-left cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-700 opacity-60'
                              : isSelected
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-300'
                          }`}
                        >
                          {item.translationsByLang?.hi || item.meaning}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* 2. MEANING MATCH (Multiple Choice 4 Options) */}
            {selectedQuizType === 'meaning_match' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-500/30 text-center space-y-1">
                  <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400">
                    Target Word:
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display">
                    {currentWord.word}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">{currentWord.phonetic}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pool.slice(0, 4).map((item, idx) => {
                    const isPicked = selectedOption === item.word;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(item.word)}
                        className={`p-3.5 rounded-2xl border-2 font-bold text-xs sm:text-sm font-hindi transition text-left cursor-pointer ${
                          isPicked
                            ? isOptionCorrect
                              ? 'bg-emerald-500 text-white border-emerald-400 shadow-md'
                              : 'bg-rose-500 text-white border-rose-400 shadow-md'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-300'
                        }`}
                      >
                        {item.translationsByLang?.hi || item.meaning}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. AUDIO MATCH (Listen & Pick) */}
            {selectedQuizType === 'audio_match' && (
              <div className="space-y-4 text-center">
                <div className="p-6 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-500/30 space-y-3">
                  <button
                    onClick={() => {
                      playSoundEffectEffect('tap');
                      speakCleanAudio(currentWord.audioText || currentWord.word, getActiveEnglishAccent(), 1.0);
                    }}
                    className="p-4 rounded-full bg-gradient-to-tr from-[#335CFF] to-[#6D5DF6] text-white shadow-lg shadow-indigo-500/30 active:scale-95 cursor-pointer animate-soft-pulse mx-auto"
                  >
                    <Volume2 className="w-7 h-7 fill-current" />
                  </button>
                  <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 block">
                    Tap to hear the audio prompt
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {pool.slice(0, 4).map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(item.word)}
                      className="p-3.5 rounded-2xl border-2 font-bold text-sm bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-300 cursor-pointer"
                    >
                      {item.word}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 4. WORD SCRAMBLE / ARRANGE LETTERS */}
            {selectedQuizType === 'arrange_letters' && (
              <div className="space-y-4 text-center">
                <div className="space-y-1">
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold block">
                    Meaning: {currentWord.translationsByLang?.hi || currentWord.meaning}
                  </span>
                  <p className="text-xs text-slate-400">"{currentWord.exampleSentence}"</p>
                </div>

                {/* Arranged Slots */}
                <div className="flex items-center justify-center space-x-1.5 min-h-[48px] bg-slate-50 dark:bg-slate-900 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800">
                  {arrangedLetters.length === 0 ? (
                    <span className="text-xs text-slate-400 italic">Tap letter tiles below to spell</span>
                  ) : (
                    arrangedLetters.map((l) => (
                      <span
                        key={l.id}
                        className="w-9 h-10 rounded-xl bg-indigo-600 text-white font-mono font-black text-lg flex items-center justify-center shadow-md shadow-indigo-500/20"
                      >
                        {l.char}
                      </span>
                    ))
                  )}
                </div>

                {/* Scrambled Tile Choices */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  {scrambledLetters.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectScrambleLetter(item)}
                      className="w-11 h-12 rounded-2xl bg-white dark:bg-slate-800 border-2 border-indigo-200 dark:border-indigo-500/40 text-slate-900 dark:text-white font-mono font-black text-lg shadow-sm hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
                    >
                      {item.char}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
          <button
            onClick={onClose}
            className="text-xs font-bold text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
          >
            Close
          </button>
          <span className="text-xs text-slate-400 font-mono">
            Round {currentIndex + 1} of {Math.min(6, pool.length)}
          </span>
        </div>
      </div>
    </div>
  );
};
