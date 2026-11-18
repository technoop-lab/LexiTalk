import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  Heart,
  Volume2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Mic,
  MicOff,
  Sparkles,
  Trophy,
  RefreshCw,
  RotateCcw
} from 'lucide-react';
import { LessonNode, Exercise, UserAcademyProfile, NativeLanguageCode } from '../types';
import { getExpandedLessonExercises } from '../data/curiosityCurriculum';
import { getLanguageInfo } from '../data/languages';
import { getActiveEnglishAccent, playSoundEffectEffect } from '../utils/audioUtils';
import { AudioService } from '../services/AudioService';
import { normalizeExercise, normalizeExerciseType, evaluateExercise, getCorrectAnswerDisplay } from '../utils/exerciseUtils';

interface LessonRunnerProps {
  lesson: LessonNode;
  user: UserAcademyProfile;
  onFinishLesson: (scoreXp: number, starsEarned: number) => void;
  onExit: () => void;
}

export const LessonRunner: React.FC<LessonRunnerProps> = ({
  lesson,
  user,
  onFinishLesson,
  onExit,
}) => {
  const exercises = getExpandedLessonExercises(lesson);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hearts, setHearts] = useState(user.hearts > 0 ? user.hearts : 5);
  const [scoreXp, setScoreXp] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [constructedWords, setConstructedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [matchedPairIds, setMatchedPairIds] = useState<string[]>([]);
  const [selectedPairId, setSelectedPairId] = useState<string | null>(null);

  // Speech Recognition state
  const [isRecording, setIsRecording] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const recognitionRef = useRef<any>(null);

  // Answer validation drawer state
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isLessonComplete, setIsLessonComplete] = useState(false);

  const rawEx = exercises[currentIndex];
  const currentEx: Exercise = rawEx ? normalizeExercise(rawEx) : exercises[0];
  const canonicalType = currentEx ? normalizeExerciseType(currentEx.type) : 'multiple_choice';

  // Initialize word tiles for tile exercises
  useEffect(() => {
    if (!currentEx) return;

    if (canonicalType === 'translation' || canonicalType === 'listen_and_type' || canonicalType === 'word_ordering') {
      const bank = currentEx.wordBank || currentEx.targetSentence?.split(' ') || [];
      setAvailableWords([...bank].sort(() => 0.5 - Math.random()));
      setConstructedWords([]);
    }

    // Auto speak audio for dictation exercises
    if ((canonicalType === 'listen_and_type' || canonicalType === 'listening') && currentEx.audioText) {
      AudioService.play(currentEx.audioId, currentEx.audioText);
    }
  }, [currentIndex, currentEx, canonicalType]);

  // Speech recognition setup
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = true;
      rec.lang = getActiveEnglishAccent();

      rec.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((r: any) => r[0].transcript)
          .join('');
        setSpokenText(transcript);
      };

      rec.onend = () => setIsRecording(false);
      recognitionRef.current = rec;
    }
  }, []);

  const handlePickWord = (word: string, index: number) => {
    playSoundEffectEffect('tap');
    const newAvail = [...availableWords];
    newAvail.splice(index, 1);
    setAvailableWords(newAvail);
    setConstructedWords((prev) => [...prev, word]);
  };

  const handleRemoveWord = (word: string, index: number) => {
    playSoundEffectEffect('tap');
    const newConst = [...constructedWords];
    newConst.splice(index, 1);
    setConstructedWords(newConst);
    setAvailableWords((prev) => [...prev, word]);
  };

  const handleCheckAnswer = () => {
    if (isAnswerChecked) return;

    const evaluation = evaluateExercise(currentEx, {
      selectedOptionId,
      constructedWords,
      spokenText,
      matchedPairs: matchedPairIds,
    });

    const correct = evaluation.isCorrect;
    setIsAnswerChecked(true);
    setIsCorrect(correct);

    if (correct) {
      playSoundEffectEffect('correct');
      setScoreXp((prev) => prev + (evaluation.scoreXp || 10));
      setCorrectAnswersCount((prev) => prev + 1);
      confetti({ particleCount: 30, spread: 40 });
    } else {
      playSoundEffectEffect('wrong');
      playSoundEffectEffect('heart_loss');
      setHearts((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNextExercise = () => {
    setIsAnswerChecked(false);
    setIsCorrect(null);
    setSelectedOptionId(null);
    setConstructedWords([]);
    setSpokenText('');

    if (currentIndex + 1 >= exercises.length) {
      setIsLessonComplete(true);
      playSoundEffectEffect('victory');
      confetti({ particleCount: 100, spread: 70 });
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const toggleMic = () => {
    if (!recognitionRef.current) return;
    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      playSoundEffectEffect('tap');
      setSpokenText('');
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  // Completion Screen
  if (isLessonComplete) {
    const accuracy = Math.round((correctAnswersCount / exercises.length) * 100);
    const stars = accuracy >= 80 ? 3 : accuracy >= 50 ? 2 : 1;
    const isNewCompletion = !user.completedLessonIds.includes(lesson.id);
    const xpReward = isNewCompletion ? scoreXp + 15 : 0;
    const gemReward = isNewCompletion ? 25 : 0;

    return (
      <div className="min-h-full bg-slate-950 text-slate-100 flex flex-col justify-between p-6 max-w-md mx-auto animate-fade-in select-none">
        <div className="my-auto text-center space-y-6">
          <div className="w-24 h-24 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto shadow-2xl ring-8 ring-amber-500/20">
            <Trophy className="w-12 h-12 text-slate-950" />
          </div>

          <div>
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest block">Lesson Completed!</span>
            <h2 className="text-3xl font-black text-white mt-1">{lesson.title}</h2>
            <p className="text-xs text-slate-400 mt-1">Awesome job! You are building native English fluency.</p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">XP on first completion</span>
              <span className="text-xl font-black text-amber-400">+{xpReward}</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Accuracy</span>
              <span className="text-xl font-black text-emerald-400">{accuracy}%</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Gems on first completion</span>
              <span className="text-xl font-black text-cyan-400">+{gemReward} 💎</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => onFinishLesson(xpReward, stars)}
          className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 text-white font-black rounded-2xl shadow-xl text-sm uppercase tracking-wider transition active:scale-95"
        >
          CONTINUE TO PATH
        </button>
      </div>
    );
  }

  // Calculate top progress percentage
  const progressPercent = Math.round(((currentIndex) / exercises.length) * 100);

  return (
    <div className="min-h-full bg-slate-950 text-slate-100 flex flex-col justify-between p-4 sm:p-5 w-full max-w-lg mx-auto select-none relative">
      {/* Top Header Bar */}
      <div className="flex items-center space-x-3 py-2">
        <button
          onClick={onExit}
          className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Green Animated Progress Bar */}
        <div className="flex-1 bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Lives Counter */}
        <div className="flex items-center space-x-1 text-rose-500 font-black text-xs bg-rose-500/10 px-2.5 py-1 rounded-xl border border-rose-500/20">
          <Heart className="w-4 h-4 fill-rose-500" />
          <span>{hearts}</span>
        </div>
      </div>

      {/* Main Exercise Area */}
      <div className="my-auto py-4 space-y-5">
        {/* Prompt Header */}
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            {currentEx?.type.replace('_', ' ').toUpperCase()}
          </span>
          <h2 className="text-xl font-black text-white">{currentEx?.prompt}</h2>
          {currentEx?.sourceTranslations?.[user.nativeLanguage] ? (
            <p className="text-sm font-semibold text-indigo-300 italic">
              "{currentEx.sourceTranslations[user.nativeLanguage]}"
            </p>
          ) : currentEx?.sourceSentence ? (
            <p className="text-sm font-semibold text-indigo-300 italic">"{currentEx.sourceSentence}"</p>
          ) : null}
        </div>

        {/* Audio Player for Listen Exercises */}
        {currentEx?.audioText && (
          <button
            onClick={() => AudioService.play(currentEx.audioId, currentEx.audioText!)}
            className="w-full py-3 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 rounded-2xl text-indigo-300 font-bold text-xs flex items-center justify-center space-x-2 transition"
          >
            <Volume2 className="w-5 h-5 text-indigo-400" />
            <span>Tap to Listen Native Audio</span>
          </button>
        )}

        {/* EXERCISE TYPE 1: Picture Choice */}
        {currentEx?.type === 'picture_choice' && (
          <div className="grid grid-cols-2 gap-3">
            {currentEx.options?.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    setSelectedOptionId(opt.id);
                  }}
                  className={`p-4 rounded-3xl border-2 flex flex-col items-center space-y-2 transition-all ${
                    isSelected
                      ? 'bg-emerald-500/20 border-emerald-400 scale-105 shadow-xl ring-2 ring-emerald-400/40'
                      : 'bg-slate-900 border-slate-800 hover:bg-slate-850 text-slate-200'
                  }`}
                >
                  <span className="text-4xl">{opt.imageEmoji}</span>
                  <span className="text-xs font-black">{opt.text}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* EXERCISE TYPE 2: Fill in the Blank */}
        {currentEx?.type === 'fill_blank' && (
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center">
              <p className="text-base font-bold text-slate-100">{currentEx.sourceSentence}</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {currentEx.options?.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      playSoundEffectEffect('tap');
                      setSelectedOptionId(opt.id);
                    }}
                    className={`p-3.5 rounded-2xl border font-bold text-xs transition ${
                      isSelected
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850'
                    }`}
                  >
                    {opt.text}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* EXERCISE TYPE 3: Word Tile Translation & Dictation */}
        {(currentEx?.type === 'translate_tiles' || currentEx?.type === 'listen_type') && (
          <div className="space-y-4">
            {/* Answer Assembly Box */}
            <div className="min-h-[100px] bg-slate-900 border-2 border-dashed border-slate-800 rounded-3xl p-3 flex flex-wrap gap-2 items-center">
              {constructedWords.length === 0 && (
                <span className="text-xs text-slate-500 italic mx-auto">Tap words below to build sentence...</span>
              )}
              {constructedWords.map((w, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRemoveWord(w, idx)}
                  className="px-3.5 py-2 bg-emerald-600 text-slate-950 font-black text-xs rounded-xl shadow transition active:scale-95"
                >
                  {w}
                </button>
              ))}
            </div>

            {/* Scrambled Word Bank */}
            <div className="flex flex-wrap gap-2 pt-2 justify-center">
              {availableWords.map((w, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePickWord(w, idx)}
                  className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 shadow-sm transition active:scale-95"
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* EXERCISE TYPE 4: Speech Recognition */}
        {currentEx?.type === 'speak_sentence' && (
          <div className="text-center space-y-4 py-2">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
              <p className="text-base font-black text-white">"{currentEx.targetSentence}"</p>
            </div>

            <button
              onClick={toggleMic}
              className={`w-20 h-20 rounded-full flex items-center justify-center transition-all mx-auto shadow-2xl ${
                isRecording
                  ? 'bg-rose-500 text-white animate-pulse scale-110 shadow-rose-500/40'
                  : 'bg-gradient-to-tr from-emerald-500 to-teal-600 text-slate-950 hover:scale-105 shadow-emerald-500/30'
              }`}
            >
              {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
            </button>

            <span className="text-xs text-slate-400 block font-medium">
              {isRecording ? 'Listening... Speak out loud now!' : 'Tap mic and read the sentence out loud'}
            </span>

            {spokenText && (
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200">
                "{spokenText}"
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Check / Feedback Drawer */}
      <div className="pt-2">
        {!isAnswerChecked ? (
          <button
            onClick={handleCheckAnswer}
            disabled={
              (currentEx?.type === 'picture_choice' || currentEx?.type === 'fill_blank') && !selectedOptionId
            }
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 text-white font-black rounded-2xl shadow-xl text-sm uppercase tracking-wider transition active:scale-95 disabled:opacity-40"
          >
            CHECK ANSWER
          </button>
        ) : (
          <div
            className={`p-5 rounded-3xl space-y-3 shadow-2xl border-2 ${
              isCorrect
                ? 'bg-emerald-950/90 border-emerald-500/60 text-emerald-100'
                : 'bg-rose-950/90 border-rose-500/60 text-rose-100'
            }`}
          >
            <div className="flex items-center space-x-2">
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
              )}
              <h3 className="font-black text-base">{isCorrect ? 'Excellent!' : 'Correct Answer:'}</h3>
            </div>

            {!isCorrect && (
              <p className="text-xs font-mono bg-slate-900/60 p-2.5 rounded-xl border border-rose-500/30 font-bold text-rose-200">
                "{getCorrectAnswerDisplay(currentEx)}"
              </p>
            )}

            {currentEx?.explanation && (
              <p className="text-xs leading-relaxed opacity-90">{currentEx.explanation}</p>
            )}

            <button
              onClick={handleNextExercise}
              className={`w-full py-3.5 font-black text-xs rounded-2xl uppercase tracking-wider transition active:scale-95 shadow-lg ${
                isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'
              }`}
            >
              CONTINUE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
