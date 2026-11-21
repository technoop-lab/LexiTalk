import React, { useState, useEffect } from 'react';
import { Sparkles, Check, RotateCcw, Volume2, HelpCircle, Layers, ArrowRight } from 'lucide-react';
import { Exercise, UserAcademyProfile, DetailedLessonData } from '../../types';
import { LessonService } from '../../services/LessonService';
import { AudioService } from '../../services/AudioService';
import { playSoundEffectEffect } from '../../utils/audioUtils';
import {
  normalizeExercise,
  normalizeExerciseType,
  evaluateExercise,
  getCorrectAnswerDisplay,
} from '../../services/ExerciseRegistry';

interface SentenceBuilderViewProps {
  user: UserAcademyProfile;
  onBack?: () => void;
}


// Fisher-Yates shuffle that avoids returning the original order when it can.
const shuffleWords = (words: string[]): string[] => {
  const original = words.join('\u0001');
  let result = [...words];
  for (let attempt = 0; attempt < 5; attempt++) {
    result = [...words];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    if (result.join('\u0001') !== original) break;
  }
  return result;
};

export const SentenceBuilderView: React.FC<SentenceBuilderViewProps> = ({
  user,
  onBack,
}) => {
  const [selectedLessonId, setSelectedLessonId] = useState<string>('lesson_a1_1_1');
  const [lessonData, setLessonData] = useState<DetailedLessonData | null>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTiles, setSelectedTiles] = useState<string[]>([]);
  const [availableTiles, setAvailableTiles] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Load lesson data whenever selectedLessonId changes
  useEffect(() => {
    let isMounted = true;
    LessonService.getLessonById(selectedLessonId).then((data) => {
      if (!isMounted || !data) return;
      setLessonData(data);

      const allEx = [
        ...(data.practiceExercises || []),
        ...(data.reviewExercises || []),
        ...(data.assessmentExercises || []),
      ].map(normalizeExercise);

      const builderEx = allEx.filter((e) => {
        const canonical = normalizeExerciseType(e.type);
        return (
          canonical === 'word_ordering' ||
          canonical === 'sentence_construction' ||
          (canonical === 'translation' && (e.wordBank || e.targetSentence))
        );
      });

      setExercises(builderEx.length > 0 ? builderEx : allEx.slice(0, 5));
      setCurrentIndex(0);
    });

    return () => {
      isMounted = false;
    };
  }, [selectedLessonId]);

  const currentExercise = exercises[currentIndex];

  useEffect(() => {
    if (currentExercise) {
      setSelectedTiles([]);
      setIsChecked(false);
      setIsCorrect(false);

      if (currentExercise.wordBank && currentExercise.wordBank.length > 0) {
        setAvailableTiles(shuffleWords([...currentExercise.wordBank]));
      } else if (currentExercise.targetSentence) {
        const words = currentExercise.targetSentence.replace(/[.,?!]/g, '').split(' ').filter(Boolean);
        setAvailableTiles(shuffleWords(words));
      } else {
        setAvailableTiles([]);
      }
    }
  }, [currentIndex, currentExercise?.id]);

  const handleTileClick = (word: string, index: number) => {
    if (isChecked) return;
    playSoundEffectEffect('tap');
    setSelectedTiles([...selectedTiles, word]);
    const remaining = [...availableTiles];
    remaining.splice(index, 1);
    setAvailableTiles(remaining);
  };

  const handleRemoveSelectedTile = (word: string, index: number) => {
    if (isChecked) return;
    playSoundEffectEffect('tap');
    const updated = [...selectedTiles];
    updated.splice(index, 1);
    setSelectedTiles(updated);
    setAvailableTiles([...availableTiles, word]);
  };

  const handleCheckAnswer = () => {
    if (!currentExercise || isChecked) return;

    const evaluation = evaluateExercise(currentExercise, {
      constructedWords: selectedTiles,
    });

    const correct = evaluation.isCorrect;
    setIsCorrect(correct);
    setIsChecked(true);

    if (correct) {
      playSoundEffectEffect('correct');
      if (currentExercise.audioId) {
        AudioService.play(currentExercise.audioId);
      } else if (currentExercise.targetSentence) {
        AudioService.speakText(currentExercise.targetSentence);
      }
    } else {
      playSoundEffectEffect('wrong');
    }
  };

  const handleNext = () => {
    playSoundEffectEffect('tap');
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="flex flex-col space-y-5 p-4 sm:p-6 pb-24 text-slate-900 dark:text-slate-100 max-w-xl mx-auto">
      {/* Header & Lesson Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 p-4 rounded-3xl shadow-sm dark:shadow-xl">
        <div>
          <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider block">
            Sentence Builder Gym
          </span>
          <h2 className="text-base font-black text-slate-900 dark:text-white">
            {lessonData?.title || 'Morphosyntax Practice'}
          </h2>
        </div>

        <select
          value={selectedLessonId}
          onChange={(e) => setSelectedLessonId(e.target.value)}
          className="bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 text-xs px-3 py-2 rounded-2xl text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500 font-bold"
        >
          {Array.from({ length: 30 }, (_, i) => {
            const lessonNum = i + 1;
            const id = lessonNum <= 15 ? `lesson_a1_1_${lessonNum}` : `lesson_a1_2_${lessonNum}`;
            const unit = lessonNum <= 15 ? 1 : 2;
            return (
              <option key={id} value={id}>
                Unit {unit} • Lesson {lessonNum}
              </option>
            );
          })}
        </select>
      </div>

      {/* Exercise Card */}
      {!currentExercise ? (
        <div className="p-8 text-center bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl text-slate-500 dark:text-slate-400 text-xs shadow-sm dark:shadow-md">
          Loading lesson sentence builder exercises...
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 shadow-sm dark:shadow-2xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-500/20">
              Exercise {currentIndex + 1} of {exercises.length}
            </span>

            {currentExercise.grammarTarget && (
              <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700">
                🎯 {currentExercise.grammarTarget}
              </span>
            )}
          </div>

          {/* Prompt */}
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 block">Prompt / Context</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">{currentExercise.prompt}</h3>
            {currentExercise.sourceSentence && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">"{currentExercise.sourceSentence}"</p>
            )}
          </div>

          {/* Selected Tiles Construction Zone */}
          <div className="min-h-16 bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-3 flex flex-wrap gap-2 items-center">
            {selectedTiles.length === 0 ? (
              <span className="text-xs text-slate-400 dark:text-slate-500 italic">Tap word tiles below to construct sentence...</span>
            ) : (
              selectedTiles.map((word, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRemoveSelectedTile(word, idx)}
                  disabled={isChecked}
                  className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs rounded-xl shadow-md animate-popIn cursor-pointer btn-press"
                >
                  {word}
                </button>
              ))
            )}
          </div>

          {/* Available Tiles Bank */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800 justify-center">
            {availableTiles.map((word, idx) => (
              <button
                key={idx}
                onClick={() => handleTileClick(word, idx)}
                disabled={isChecked}
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100 font-bold text-xs rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs transition active:scale-95 cursor-pointer btn-press"
              >
                {word}
              </button>
            ))}
          </div>

          {/* Feedback Section */}
          {isChecked && (
            <div
              className={`p-4 rounded-2xl border ${
                isCorrect
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-500/50 text-emerald-900 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-500/50 text-rose-900 dark:text-rose-200'
              }`}
            >
              <div className="flex items-center space-x-2 font-bold text-xs mb-1">
                {isCorrect ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <RotateCcw className="w-4 h-4 text-rose-600 dark:text-rose-400" />}
                <span>{isCorrect ? 'Correct Sentence Structure!' : 'Not Quite Right'}</span>
              </div>

              {!isCorrect && (
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Target sentence: <span className="font-bold text-slate-900 dark:text-white">"{getCorrectAnswerDisplay(currentExercise)}"</span>
                </p>
              )}

              {currentExercise.explanation && (
                <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 italic">
                  💡 {currentExercise.explanation}
                </p>
              )}
            </div>
          )}

          {/* Action Button */}
          {!isChecked ? (
            <button
              onClick={handleCheckAnswer}
              disabled={selectedTiles.length === 0}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 disabled:opacity-50 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-md transition cursor-pointer btn-press"
            >
              Check Sentence Construction
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-xs transition border border-[#D9E4FF] dark:border-transparent cursor-pointer btn-press"
            >
              Next Sentence Exercise →
            </button>
          )}
        </div>
      )}
    </div>
  );
};
