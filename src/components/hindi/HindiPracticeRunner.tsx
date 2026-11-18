import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  Volume2,
  ArrowRight,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Award,
  BookOpen
} from 'lucide-react';
import { HindiPracticeExercise } from '../../types/hindiCourse';
import { getActiveEnglishAccent, speakTextOffline, playSoundEffectEffect } from '../../utils/audioUtils';

interface HindiPracticeRunnerProps {
  exercises: HindiPracticeExercise[];
  dayNumber: number;
  onFinishPractice: (scorePercent: number, totalCorrect: number) => void;
  onRecordExerciseAnswer?: (exerciseId: string, isCorrect: boolean, skillTag: string, answer: string) => void;
}

export const HindiPracticeRunner: React.FC<HindiPracticeRunnerProps> = ({
  exercises,
  dayNumber,
  onFinishPractice,
  onRecordExerciseAnswer,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [scrambledWords, setScrambledWords] = useState<string[]>([]);
  const [constructedWords, setConstructedWords] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [totalCorrectCount, setTotalCorrectCount] = useState(0);
  const [userAnswersHistory, setUserAnswersHistory] = useState<
    { exercise: HindiPracticeExercise; isCorrect: boolean; userAnswer: string }[]
  >([]);

  const currentExercise = exercises[currentIndex];
  const totalExercises = exercises.length;

  // Initialize or reset input states when current exercise changes
  useEffect(() => {
    setIsSubmitted(false);
    setIsCorrect(null);
    setSelectedOption(null);
    setTypedAnswer('');
    setConstructedWords([]);

    if (currentExercise) {
      // If it's a reorder exercise or contains scrambled words, prepare tiles
      const isReorder =
        currentExercise.type.includes('reorder') ||
        currentExercise.type.includes('word_ordering') ||
        currentExercise.type.includes('builder');

      if (isReorder && currentExercise.options && currentExercise.options.length > 0) {
        // Shuffle options or words
        const words = currentExercise.options.flatMap((opt) => opt.split(' ')).filter(Boolean);
        setScrambledWords([...words].sort(() => 0.5 - Math.random()));
      } else if (isReorder) {
        const words = currentExercise.correctAnswer.split(' ').filter(Boolean);
        setScrambledWords([...words].sort(() => 0.5 - Math.random()));
      } else {
        setScrambledWords([]);
      }
    }
  }, [currentIndex, currentExercise]);

  if (!currentExercise) {
    return (
      <div className="p-8 text-center text-slate-400">
        <p>No practice items available for this day.</p>
      </div>
    );
  }

  const handlePlayAudio = (text: string, rate = 0.9) => {
    playSoundEffectEffect('tap');
    speakTextOffline(text, getActiveEnglishAccent(), rate);
  };

  const handleSelectOption = (opt: string) => {
    if (isSubmitted) return;
    playSoundEffectEffect('tap');
    setSelectedOption(opt);
  };

  const handleTileClick = (word: string, index: number) => {
    if (isSubmitted) return;
    playSoundEffectEffect('tap');
    setConstructedWords((prev) => [...prev, word]);
    setScrambledWords((prev) => prev.filter((_, i) => i !== index));
  };

  const handleReturnTile = (word: string, index: number) => {
    if (isSubmitted) return;
    playSoundEffectEffect('tap');
    setConstructedWords((prev) => prev.filter((_, i) => i !== index));
    setScrambledWords((prev) => [...prev, word]);
  };

  const cleanString = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[.,?!'"]/g, '')
      .replace(/\s+/g, ' ');

  const handleSubmitAnswer = () => {
    if (isSubmitted) return;

    let finalUserAnswer = '';

    if (scrambledWords.length > 0 || constructedWords.length > 0) {
      finalUserAnswer = constructedWords.join(' ').trim();
    } else if (selectedOption !== null) {
      finalUserAnswer = selectedOption.trim();
    } else if (typedAnswer.trim()) {
      finalUserAnswer = typedAnswer.trim();
    }

    if (!finalUserAnswer) return;

    const cleanedUser = cleanString(finalUserAnswer);
    const cleanedCorrect = cleanString(currentExercise.correctAnswer);

    let match = cleanedUser === cleanedCorrect;

    // Check acceptable alternatives if any
    if (!match && currentExercise.acceptableAlternatives) {
      match = currentExercise.acceptableAlternatives.some(
        (alt) => cleanString(alt) === cleanedUser
      );
    }

    setIsCorrect(match);
    setIsSubmitted(true);

    if (match) {
      playSoundEffectEffect('correct');
      setTotalCorrectCount((prev) => prev + 1);
    } else {
      playSoundEffectEffect('wrong');
    }

    // Auto-pronounce target sentence on submit
    setTimeout(() => {
      speakTextOffline(currentExercise.correctAnswer, getActiveEnglishAccent(), 0.9);
    }, 400);

    if (onRecordExerciseAnswer) {
      onRecordExerciseAnswer(
        currentExercise.id,
        match,
        currentExercise.skillTag,
        finalUserAnswer
      );
    }

    setUserAnswersHistory((prev) => [
      ...prev,
      { exercise: currentExercise, isCorrect: match, userAnswer: finalUserAnswer },
    ]);
  };

  const handleNext = () => {
    playSoundEffectEffect('tap');
    if (currentIndex + 1 < totalExercises) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Completed all exercises for this day!
      const finalScorePercent = Math.round(
        ((totalCorrectCount + (isCorrect ? 1 : 0)) / totalExercises) * 100
      );
      onFinishPractice(finalScorePercent, totalCorrectCount + (isCorrect ? 1 : 0));
    }
  };

  const isLastQuestion = currentIndex + 1 === totalExercises;
  const progressPercent = Math.round(((currentIndex + 1) / totalExercises) * 100);

  const hasUserInput =
    selectedOption !== null ||
    typedAnswer.trim().length > 0 ||
    constructedWords.length > 0;

  return (
    <div className="flex flex-col space-y-5 bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-md dark:shadow-2xl text-slate-900 dark:text-slate-100">
      {/* Top Header & Progress Bar */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="bg-indigo-50 dark:bg-gradient-to-r dark:from-[#335CFF]/20 dark:to-[#6D5DF6]/20 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-xl border border-indigo-200 dark:border-indigo-500/30 font-black">
              Day {dayNumber} Practice
            </span>
            <span className="capitalize text-slate-700 dark:text-slate-300 font-semibold">
              {currentExercise.type.replace(/_/g, ' ')}
            </span>
          </div>
          <span className="font-mono text-indigo-600 dark:text-indigo-400 font-black">
            {currentIndex + 1} / {totalExercises}
          </span>
        </div>

        {/* Progress Line */}
        <div className="w-full bg-slate-100 dark:bg-slate-800/80 rounded-full h-2.5 overflow-hidden p-0.5 border border-[#D9E4FF] dark:border-slate-700/50">
          <div
            className="bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] h-full rounded-full transition-all duration-300 shadow-sm"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-slate-50 dark:bg-slate-950/80 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs dark:shadow-inner">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug font-display">
            {currentExercise.prompt}
          </h3>
          <button
            onClick={() => handlePlayAudio(currentExercise.prompt)}
            className="p-2.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-500/15 dark:hover:bg-indigo-500/25 text-indigo-700 dark:text-indigo-300 rounded-xl border border-indigo-200 dark:border-indigo-500/30 transition shrink-0 active:scale-95 cursor-pointer"
            title="Listen to question"
            aria-label="Listen to question prompt"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {currentExercise.skillTag && (
          <span className="inline-block text-[10px] uppercase font-black tracking-wider bg-white dark:bg-slate-800/90 text-indigo-700 dark:text-indigo-300 border border-[#D9E4FF] dark:border-slate-700/80 px-2.5 py-0.5 rounded-lg shadow-xs">
            {currentExercise.skillTag}
          </span>
        )}
      </div>

      {/* Input Interaction Area */}
      <div className="space-y-3 min-h-[140px]">
        {/* Case 1: Word Scramble / Tile Arrangement */}
        {(scrambledWords.length > 0 || constructedWords.length > 0) && (
          <div className="space-y-3">
            {/* Tile Construction Drop Zone */}
            <div className="min-h-[60px] p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border-2 border-dashed border-indigo-300 dark:border-indigo-500/30 flex flex-wrap gap-2 items-center">
              {constructedWords.length === 0 ? (
                <span className="text-xs text-slate-400 dark:text-slate-500 italic">
                  नीचे दिए गए शब्दों को सही क्रम में टैप करें (Tap words in order)
                </span>
              ) : (
                constructedWords.map((word, idx) => (
                  <button
                    key={`constructed_${idx}`}
                    onClick={() => handleReturnTile(word, idx)}
                    disabled={isSubmitted}
                    className="px-3.5 py-2 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white font-bold rounded-xl text-sm shadow-md shadow-indigo-500/20 hover:brightness-110 active:scale-95 transition cursor-pointer border border-indigo-400/30"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>

            {/* Scrambled Available Word Bank */}
            <div className="flex flex-wrap gap-2 pt-1">
              {scrambledWords.map((word, idx) => (
                <button
                  key={`scrambled_${idx}`}
                  onClick={() => handleTileClick(word, idx)}
                  disabled={isSubmitted}
                  className="px-3.5 py-2 bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 font-semibold rounded-xl text-sm border border-[#D9E4FF] dark:border-slate-700 hover:border-indigo-500/40 shadow-xs dark:shadow-sm active:scale-95 transition cursor-pointer"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Case 2: Multiple Choice Options */}
        {currentExercise.options &&
          currentExercise.options.length > 0 &&
          scrambledWords.length === 0 &&
          constructedWords.length === 0 && (
            <div className="grid grid-cols-1 gap-2.5">
              {currentExercise.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const isThisCorrect = isSubmitted && cleanString(opt) === cleanString(currentExercise.correctAnswer);
                const isThisWrong = isSubmitted && isSelected && !isCorrect;

                let btnStyles = 'bg-slate-50 dark:bg-slate-950/80 border-[#D9E4FF] dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:border-indigo-300 dark:hover:border-slate-700';
                if (isSelected && !isSubmitted) {
                  btnStyles = 'bg-indigo-50 dark:bg-gradient-to-r dark:from-[#335CFF]/20 dark:to-[#6D5DF6]/20 border-indigo-500 dark:border-indigo-400 text-indigo-900 dark:text-indigo-200 font-bold shadow-sm dark:shadow-md ring-1 ring-indigo-400/40';
                } else if (isThisCorrect) {
                  btnStyles = 'bg-emerald-50 dark:bg-emerald-500/20 border-emerald-400 text-emerald-800 dark:text-emerald-300 font-black shadow-sm dark:shadow-md';
                } else if (isThisWrong) {
                  btnStyles = 'bg-rose-50 dark:bg-rose-500/20 border-rose-400 dark:border-rose-500 text-rose-800 dark:text-rose-300 font-semibold shadow-sm dark:shadow-md';
                }

                return (
                  <button
                    key={`opt_${idx}`}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition flex items-center justify-between text-sm sm:text-base cursor-pointer ${btnStyles}`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-7 h-7 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-[#D9E4FF] dark:border-slate-700 flex items-center justify-center text-xs font-mono font-bold shrink-0 shadow-xs">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="font-medium">{opt}</span>
                    </div>

                    {isSubmitted && isThisCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
                    )}
                    {isSubmitted && isThisWrong && (
                      <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

        {/* Case 3: Free Text Input (if no options provided) */}
        {(!currentExercise.options || currentExercise.options.length === 0) &&
          scrambledWords.length === 0 &&
          constructedWords.length === 0 && (
            <div className="space-y-2">
              <input
                type="text"
                value={typedAnswer}
                onChange={(e) => setTypedAnswer(e.target.value)}
                disabled={isSubmitted}
                placeholder="Type your answer in English..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && hasUserInput && !isSubmitted) {
                    handleSubmitAnswer();
                  }
                }}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl px-4 py-3.5 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-sm sm:text-base shadow-inner"
              />
            </div>
          )}
      </div>

      {/* Submitted Feedback Box */}
      {isSubmitted && (
        <div
          className={`p-4 sm:p-5 rounded-2xl border transition-all space-y-3 ${
            isCorrect
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-200 animate-correct'
              : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-500/40 text-rose-900 dark:text-rose-200 animate-shake'
          }`}
        >
          <div className="flex items-center space-x-2">
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
            )}
            <span className="font-black text-sm sm:text-base">
              {isCorrect ? 'Correct! (बहुत बढ़िया!)' : 'Incorrect (ध्यान दें)'}
            </span>
          </div>

          {/* Target Correct Answer */}
          <div className="text-xs sm:text-sm bg-white dark:bg-slate-950/80 p-3.5 rounded-xl border border-[#D9E4FF] dark:border-slate-800 flex items-center justify-between shadow-xs">
            <div>
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-semibold">Correct English:</span>
              <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{currentExercise.correctAnswer}</span>
            </div>
            <button
              onClick={() => handlePlayAudio(currentExercise.correctAnswer)}
              className="p-2 bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-500/25 border border-indigo-200 dark:border-indigo-500/30 rounded-xl transition btn-press cursor-pointer shrink-0"
              title="Listen to correct answer"
              aria-label="Listen to correct answer"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Bilingual Explanations */}
          <div className="text-xs sm:text-sm space-y-2 pt-1">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className="text-indigo-600 dark:text-indigo-400">EN:</strong> {currentExercise.explanationEn}
            </p>
            <p className="text-amber-800 dark:text-amber-300/90 leading-relaxed font-medium font-hindi">
              <strong className="text-amber-700 dark:text-amber-400">HI:</strong> {currentExercise.explanationHi}
            </p>
          </div>
        </div>
      )}

      {/* Action Footer: Submit or Next Question */}
      <div className="pt-2">
        {!isSubmitted ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={!hasUserInput}
            className={`w-full py-4 px-4 rounded-2xl font-black text-sm sm:text-base transition flex items-center justify-center space-x-2 shadow-lg cursor-pointer btn-press ${
              hasUserInput
                ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white hover:brightness-105 active:scale-[0.97] shadow-indigo-500/25 border border-indigo-400/25'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-[#D9E4FF] dark:border-slate-700/50'
            }`}
          >
            <span>Check Answer / उत्तर जांचें</span>
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-4 px-4 rounded-2xl font-black text-sm sm:text-base bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:brightness-105 transition flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 border border-emerald-400/25 active:scale-[0.97] cursor-pointer btn-press"
          >
            <span>{isLastQuestion ? 'Complete Practice / अभ्यास पूरा करें' : 'Next Question / अगला प्रश्न'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
