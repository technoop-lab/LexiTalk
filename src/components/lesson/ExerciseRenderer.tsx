import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2,
  CheckCircle2,
  XCircle,
  Mic,
  MicOff,
  Sparkles,
  Send,
  RotateCcw,
  Layers,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { Exercise, UserAcademyProfile } from '../../types';
import {
  evaluateExercise,
  getCorrectAnswerDisplay,
  getTranslationDetails,
  getTranslationDirection,
  normalizeExercise,
  normalizeExerciseType,
  CanonicalExerciseType,
} from '../../services/ExerciseRegistry';
import { getActiveEnglishAccent, playSoundEffectEffect, speakTextOffline } from '../../utils/audioUtils';
import { AudioService } from '../../services/AudioService';

interface ExerciseRendererProps {
  exercise: Exercise;
  user: UserAcademyProfile;
  onAnswerSubmit: (isCorrect: boolean, scoreXp: number, explanation?: string) => void;
}

const EXERCISE_TYPE_LABELS: Record<string, string> = {
  multiple_choice: 'Multiple Choice',
  fill_blank: 'Fill in the Blank',
  word_ordering: 'Sentence Builder',
  sentence_construction: 'Sentence Construction',
  translation: 'Translation Practice',
  listening: 'Listening Comprehension',
  listen_and_type: 'Listen & Type',
  speaking: 'Speaking Practice',
  match_pairs: 'Matching Pairs',
  error_correction: 'Error Correction',
  dialogue_completion: 'Dialogue Completion',
  recognition: 'Target Recognition',
  personal_production: 'Personal Introduction',
};

export const ExerciseRenderer: React.FC<ExerciseRendererProps> = ({
  exercise,
  user,
  onAnswerSubmit,
}) => {
  const currentEx = normalizeExercise(exercise);
  const canonicalType = normalizeExerciseType(currentEx.type);

  // User input states
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [constructedWords, setConstructedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);

  // Speech Recognition state
  const [isRecording, setIsRecording] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [speechError, setSpeechError] = useState('');
  const [speechInputAvailable, setSpeechInputAvailable] = useState(false);
  const recognitionRef = useRef<any>(null);

  // Personal Production state
  const [prodName, setProdName] = useState(user.name || 'Alex');
  const [prodCountry, setProdCountry] = useState('India');
  const [prodCity, setProdCity] = useState('Mumbai');

  // Match Pairs state
  const [leftSelectedId, setLeftSelectedId] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<{ leftId: string; rightId: string }[]>([]);

  // Submission & Feedback state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctAnswerDisplay, setCorrectAnswerDisplay] = useState<string>('');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  // Reset state when exercise changes
  useEffect(() => {
    setIsSubmitted(false);
    setIsCorrect(null);
    setSelectedOptionId(null);
    setTypedAnswer('');
    setConstructedWords([]);
    setSpokenText('');
    setSpeechError('');
    setLeftSelectedId(null);
    setMatchedPairs([]);
    setFeedbackMessage('');
    setCorrectAnswerDisplay('');

    // Setup scrambled word bank for tile-based exercises
    if (currentEx.wordBank && currentEx.wordBank.length > 0) {
      setAvailableWords([...currentEx.wordBank].sort(() => 0.5 - Math.random()));
    } else if (
      (canonicalType === 'word_ordering' ||
        canonicalType === 'sentence_construction' ||
        canonicalType === 'translation' ||
        canonicalType === 'listen_and_type') &&
      currentEx.targetSentence
    ) {
      const splitWords = currentEx.targetSentence.replace(/[.,?!]/g, '').split(' ').filter(Boolean);
      setAvailableWords([...splitWords].sort(() => 0.5 - Math.random()));
    } else {
      setAvailableWords([]);
    }

    // Auto play audio for dictation / listening exercises
    if ((canonicalType === 'listening' || canonicalType === 'listen_and_type') && currentEx.audioText) {
      AudioService.play(currentEx.audioId, currentEx.audioText, {
        lessonId: 'a1_u01_l01',
        sectionId: 'practice',
        exerciseId: currentEx.id,
      });
    }
  }, [currentEx.id, canonicalType]);

  // Setup supported speech input; captured transcripts are used for text matching only.
  useEffect(() => {
    const speechBridge = (window as any).AndroidSpeechBridge;
    if (speechBridge && typeof speechBridge.startListening === 'function') {
      setSpeechInputAvailable(true);
      return;
    }

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
        setSpeechError('');
      };

      rec.onerror = (event: any) => {
        setIsRecording(false);
        setSpeechError(
          event?.error === 'not-allowed' || event?.error === 'service-not-allowed'
            ? 'Microphone permission was denied. Enable speech input to answer this item.'
            : 'Speech recognition could not capture a transcript. Please try again.'
        );
      };
      rec.onend = () => setIsRecording(false);
      recognitionRef.current = rec;
      setSpeechInputAvailable(true);
    } else {
      setSpeechInputAvailable(false);
    }
  }, []);

  // Tile Pick / Remove handlers
  const handlePickWord = (word: string, index: number) => {
    if (isSubmitted) return;
    playSoundEffectEffect('tap');
    const newAvail = [...availableWords];
    newAvail.splice(index, 1);
    setAvailableWords(newAvail);
    setConstructedWords((prev) => [...prev, word]);
  };

  const handleRemoveWord = (word: string, index: number) => {
    if (isSubmitted) return;
    playSoundEffectEffect('tap');
    const newConst = [...constructedWords];
    newConst.splice(index, 1);
    setConstructedWords(newConst);
    setAvailableWords((prev) => [...prev, word]);
  };

  const translationDetails = canonicalType === 'translation' ? getTranslationDetails(currentEx) : null;

  // Toggle Speech Mic with Language Locale Routing
  const toggleMic = () => {
    const targetRecognizerLang = translationDetails?.expectedAnswerLang || getActiveEnglishAccent();

    if (typeof window !== 'undefined' && (window as any).AndroidSpeechBridge && typeof (window as any).AndroidSpeechBridge.startListening === 'function') {
      if (isRecording) {
        (window as any).AndroidSpeechBridge.stopListening();
        setIsRecording(false);
      } else {
        playSoundEffectEffect('tap');
        setSpokenText('');
        setSpeechError('');
        (window as any).onAndroidSpeechResult = (transcript: string) => {
          setSpokenText(transcript);
          setSpeechError('');
        };
        (window as any).onAndroidSpeechEnd = () => setIsRecording(false);
        (window as any).AndroidSpeechBridge.startListening(targetRecognizerLang);
        setIsRecording(true);
      }
      return;
    }

    if (!recognitionRef.current) {
      setSpeechError('Speech recognition is unavailable in this browser or app. This item cannot be scored without an actual speech transcript.');
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      playSoundEffectEffect('tap');
      setSpokenText('');
      setSpeechError('');
      recognitionRef.current.lang = targetRecognizerLang;
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch {
        setIsRecording(false);
      }
    }
  };

  // Pair Matching handler
  const handlePairClick = (side: 'left' | 'right', id: string) => {
    if (isSubmitted) return;
    playSoundEffectEffect('tap');

    if (side === 'left') {
      setLeftSelectedId(id);
    } else if (side === 'right' && leftSelectedId) {
      // Create pair
      const newPair = { leftId: leftSelectedId, rightId: id };
      setMatchedPairs((prev) => [...prev.filter((p) => p.leftId !== leftSelectedId && p.rightId !== id), newPair]);
      setLeftSelectedId(null);
    }
  };

  // Main Answer Validation
  const handleCheckAnswer = () => {
    if (isSubmitted) return;

    const evaluation = evaluateExercise(currentEx, {
      selectedOptionId,
      typedAnswer,
      constructedWords,
      spokenText,
      matchedPairs,
      personalProduction: {
        name: prodName,
        country: prodCountry,
        city: prodCity,
      },
    });

    setIsSubmitted(true);
    setIsCorrect(evaluation.isCorrect);
    setFeedbackMessage(evaluation.explanation || '');
    setCorrectAnswerDisplay(evaluation.correctAnswerDisplay || getCorrectAnswerDisplay(currentEx));

    if (evaluation.isCorrect) {
      playSoundEffectEffect('correct');
    } else {
      playSoundEffectEffect('wrong');
    }

    onAnswerSubmit(evaluation.isCorrect, evaluation.scoreXp, evaluation.explanation);
  };

  const localizedPrompt = currentEx.sourceTranslations?.[user.nativeLanguage] || currentEx.sourceSentence || '';

  const shouldShowTargetSentenceBox =
    (canonicalType === 'fill_blank' || canonicalType === 'multiple_choice' || canonicalType === 'recognition') &&
    currentEx.targetSentence &&
    currentEx.targetSentence.trim() !== currentEx.prompt.trim() &&
    currentEx.targetSentence.trim() !== localizedPrompt.trim();

  const isCheckDisabled = () => {
    if (isSubmitted) return true;
    if (
      canonicalType === 'recognition' ||
      canonicalType === 'multiple_choice' ||
      canonicalType === 'error_correction' ||
      canonicalType === 'dialogue_completion'
    ) {
      return !selectedOptionId;
    }
    if (canonicalType === 'fill_blank') {
      return !selectedOptionId && !typedAnswer.trim() && constructedWords.length === 0;
    }
    if (canonicalType === 'word_ordering' || canonicalType === 'sentence_construction') {
      return constructedWords.length === 0;
    }
    if (canonicalType === 'translation' || canonicalType === 'listen_and_type') {
      return constructedWords.length === 0 && !typedAnswer.trim();
    }
    if (canonicalType === 'match_pairs') {
      return matchedPairs.length === 0;
    }
    if (canonicalType === 'speaking') return !spokenText.trim();
    return false;
  };

  const friendlyTypeLabel = EXERCISE_TYPE_LABELS[canonicalType] || 'Interactive Exercise';

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Exercise Prompt Header */}
      <div className="space-y-2.5">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            {friendlyTypeLabel}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-white leading-snug font-display">
          {currentEx.prompt}
        </h2>

        {/* Localized Prompt / Source Translation */}
        {localizedPrompt && (
          <div className="p-4 bg-indigo-950/40 border border-indigo-500/30 rounded-2xl space-y-1">
            <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
              Meaning / Context
            </span>
            <p className="text-base font-semibold text-indigo-100 italic">
              "{localizedPrompt}"
            </p>
          </div>
        )}

        {/* Target Sentence Context Box */}
        {shouldShowTargetSentenceBox && (
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-1">
            <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider block">
              Sentence Structure
            </span>
            <p className="text-lg font-bold text-white tracking-wide font-sans">
              {currentEx.targetSentence}
            </p>
          </div>
        )}
      </div>

      {/* Hero Audio Button for Listening Exercises */}
      {(canonicalType === 'listening' || canonicalType === 'listen_and_type') && currentEx.audioText && (
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            AudioService.play(currentEx.audioId, currentEx.audioText!, {
              lessonId: 'a1_u01_l01',
              sectionId: 'practice',
              exerciseId: currentEx.id,
            });
          }}
          className="w-full h-14 bg-indigo-600/20 hover:bg-indigo-600/30 border-2 border-indigo-500/40 rounded-2xl text-indigo-200 font-black text-sm flex items-center justify-center space-x-2.5 transition active:scale-[0.98] shadow-lg cursor-pointer"
        >
          <Volume2 className="w-6 h-6 text-indigo-400" />
          <span>Tap to Listen to Native Audio</span>
        </button>
      )}

      {/* --- OPTION-BASED EXERCISES --- */}
      {(canonicalType === 'recognition' ||
        canonicalType === 'multiple_choice' ||
        (canonicalType === 'fill_blank' && currentEx.options && currentEx.options.length > 0) ||
        (canonicalType === 'listening' && currentEx.options && currentEx.options.length > 0) ||
        canonicalType === 'error_correction' ||
        canonicalType === 'dialogue_completion') && (
        <div className="space-y-3">
          {currentEx.errorSentence && (
            <div className="bg-rose-950/40 border border-rose-500/30 p-4 rounded-2xl text-center">
              <span className="text-xs uppercase font-bold text-rose-400 block">Identify the Error</span>
              <p className="text-lg font-black text-rose-200 line-through mt-0.5 font-display">"{currentEx.errorSentence}"</p>
            </div>
          )}

          {currentEx.dialogueContext && (
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-2.5">
              <div className="text-sm">
                <span className="font-bold text-slate-400">{currentEx.dialogueContext.speakerA}: </span>
                <span className="text-white font-bold">"{currentEx.dialogueContext.lineA}"</span>
              </div>
              <div className="text-sm">
                <span className="font-bold text-slate-400">{currentEx.dialogueContext.speakerB}: </span>
                <span className="text-emerald-400 font-bold underline">___________?</span>
              </div>
            </div>
          )}

          <div className="space-y-2.5">
            {currentEx.options?.map((opt, idx) => {
              const isSelected = selectedOptionId === opt.id;
              const optionLetters = ['A', 'B', 'C', 'D'];
              return (
                <button
                  key={opt.id}
                  disabled={isSubmitted}
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    setSelectedOptionId(opt.id);
                  }}
                  className={`w-full min-h-[58px] p-4 rounded-2xl border-2 text-left flex items-center justify-between transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 scale-[1.01] shadow-lg font-bold ring-2 ring-emerald-500/30'
                      : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-900 font-medium active:scale-[0.99]'
                  }`}
                >
                  <div className="flex items-center space-x-3.5 text-base">
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 border ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}>
                      {optionLetters[idx] || (idx + 1)}
                    </span>
                    {opt.imageEmoji && <span className="text-2xl">{opt.imageEmoji}</span>}
                    <span className="leading-snug">{opt.text}</span>
                  </div>
                  {isSelected && <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* --- WORD ORDERING & SENTENCE BUILDER --- */}
      {(canonicalType === 'word_ordering' || canonicalType === 'sentence_construction') && (
        <div className="space-y-4">
          {currentEx.infoPrompts && (
            <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl flex flex-wrap gap-2 justify-center">
              {currentEx.infoPrompts.map((ip, i) => (
                <div key={i} className="bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400">{ip.label}: </span>
                  <span className="font-bold text-amber-400 font-display">{ip.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Constructed Words Drop Zone */}
          <div className="min-h-[110px] bg-slate-950 border-2 border-dashed border-slate-800 rounded-3xl p-4 flex flex-wrap gap-2.5 items-center">
            {constructedWords.length === 0 && (
              <span className="text-sm text-slate-500 italic mx-auto font-medium">
                Tap the word tiles below to build the sentence...
              </span>
            )}
            {constructedWords.map((w, idx) => (
              <button
                key={idx}
                disabled={isSubmitted}
                onClick={() => handleRemoveWord(w, idx)}
                className="h-12 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base rounded-2xl shadow transition active:scale-95 cursor-pointer btn-tactile-primary"
              >
                {w}
              </button>
            ))}
          </div>

          {/* Available Word Bank Tiles */}
          <div className="flex flex-wrap gap-2.5 pt-1 justify-center">
            {availableWords.map((w, idx) => (
              <button
                key={idx}
                disabled={isSubmitted}
                onClick={() => handlePickWord(w, idx)}
                className="h-12 px-4 py-2 bg-slate-900 hover:bg-slate-850 text-slate-100 font-bold text-base rounded-2xl border-2 border-slate-750 shadow-sm transition active:scale-95 cursor-pointer btn-tactile-secondary"
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* --- TRANSLATION, LISTEN AND TYPE, & FILL BLANK --- */}
      {((canonicalType === 'translation' || canonicalType === 'listen_and_type') ||
        (canonicalType === 'fill_blank' && (!currentEx.options || currentEx.options.length === 0)) ||
        (canonicalType === 'listening' && (!currentEx.options || currentEx.options.length === 0))) && (
        <div className="space-y-4">
          {availableWords.length > 0 ? (
            <div className="space-y-3.5">
              <div className="min-h-[100px] bg-slate-950 border-2 border-dashed border-slate-800 rounded-3xl p-4 flex flex-wrap gap-2.5 items-center">
                {constructedWords.length === 0 && (
                  <span className="text-sm text-slate-500 italic mx-auto font-medium">
                    Tap word tiles below to construct the answer...
                  </span>
                )}
                {constructedWords.map((w, idx) => (
                  <button
                    key={idx}
                    disabled={isSubmitted}
                    onClick={() => handleRemoveWord(w, idx)}
                    className="h-12 px-4 py-2 bg-emerald-500 text-slate-950 font-black text-base rounded-2xl shadow transition active:scale-95"
                  >
                    {w}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2.5 justify-center">
                {availableWords.map((w, idx) => (
                  <button
                    key={idx}
                    disabled={isSubmitted}
                    onClick={() => handlePickWord(w, idx)}
                    className="h-12 px-4 py-2 bg-slate-900 hover:bg-slate-850 text-slate-100 font-bold text-base rounded-2xl border-2 border-slate-750 shadow-sm transition active:scale-95"
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <input
              type="text"
              disabled={isSubmitted}
              value={typedAnswer}
              onChange={(e) => setTypedAnswer(e.target.value)}
              placeholder="Type your answer in English..."
              className="w-full h-14 p-4 bg-slate-950 border-2 border-slate-800 rounded-2xl text-white font-bold text-base focus:outline-none focus:border-emerald-500"
            />
          )}
        </div>
      )}

      {/* --- MATCH PAIRS --- */}
      {canonicalType === 'match_pairs' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Left column / English Terms */}
            <div className="space-y-2">
              <span className="text-xs font-black uppercase text-slate-400 block text-center">English Terms</span>
              {(currentEx.pairs || currentEx.options || []).map((item: any, idx: number) => {
                const id = item.id || `left_${idx}`;
                const text = item.left || item.text || item;
                const isPaired = matchedPairs.some((p) => p.leftId === id);
                const isSelected = leftSelectedId === id;

                return (
                  <button
                    key={id}
                    disabled={isSubmitted || isPaired}
                    onClick={() => handlePairClick('left', id)}
                    className={`w-full min-h-[50px] p-3.5 rounded-2xl border-2 text-sm font-bold text-left transition ${
                      isPaired
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 opacity-60'
                        : isSelected
                        ? 'bg-purple-600 text-white border-purple-400 shadow-md scale-[1.02]'
                        : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {text}
                  </button>
                );
              })}
            </div>

            {/* Right column / Meanings */}
            <div className="space-y-2">
              <span className="text-xs font-black uppercase text-slate-400 block text-center">Meanings</span>
              {(currentEx.pairs || currentEx.options || []).map((item: any, idx: number) => {
                const id = item.id || `right_${idx}`;
                const text = item.right || item.translation || item.text;
                const isPaired = matchedPairs.some((p) => p.rightId === id);

                return (
                  <button
                    key={id}
                    disabled={isSubmitted || isPaired}
                    onClick={() => handlePairClick('right', id)}
                    className={`w-full min-h-[50px] p-3.5 rounded-2xl border-2 text-sm font-bold text-left transition ${
                      isPaired
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 opacity-60'
                        : 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {text}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* --- SPEAKING & PRONUNCIATION --- */}
      {canonicalType === 'speaking' && (
        <div className="text-center space-y-5 py-2">
          <div className="p-5 bg-slate-950 border border-slate-800 rounded-3xl flex items-center justify-between">
            <p className="text-lg font-black text-white">"{currentEx.targetSentence || currentEx.audioText}"</p>
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                AudioService.play(currentEx.audioId, currentEx.targetSentence || currentEx.audioText!, {
                  lessonId: 'a1_u01_l01',
                  sectionId: 'practice',
                  exerciseId: currentEx.id,
                });
              }}
              className="p-3 bg-indigo-500/20 text-indigo-300 rounded-2xl border border-indigo-500/30 hover:bg-indigo-500/30 transition min-w-[48px] min-h-[48px] flex items-center justify-center shrink-0"
              aria-label="Hear pronunciation"
            >
              <Volume2 className="w-6 h-6" />
            </button>
          </div>

          <button
            disabled={isSubmitted}
            onClick={toggleMic}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all mx-auto shadow-2xl ${
              isRecording
                ? 'bg-rose-500 text-white animate-pulse scale-110 shadow-rose-500/40'
                : 'bg-gradient-to-tr from-emerald-500 to-teal-500 text-slate-950 hover:scale-105 shadow-emerald-500/30 active:scale-95'
            }`}
            aria-label={isRecording ? 'Stop Recording' : 'Start Speaking'}
          >
            {isRecording ? <MicOff className="w-9 h-9" /> : <Mic className="w-9 h-9" />}
          </button>

          <span className="text-sm text-slate-300 block font-medium">
            {isRecording ? 'Listening... Speak out loud now!' : 'Tap the microphone and speak out loud'}
          </span>

          {!speechInputAvailable && (
            <p role="status" className="text-xs text-amber-300">
              Speech recognition is unavailable here. This speaking item cannot be scored without an actual speech transcript.
            </p>
          )}
          {speechError && (
            <p role="alert" className="text-xs text-rose-300">{speechError}</p>
          )}

          {spokenText && (
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-sm font-semibold text-emerald-300">
              Recognized Speech: "{spokenText}"
            </div>
          )}
        </div>
      )}

      {/* --- PERSONAL PRODUCTION --- */}
      {canonicalType === 'personal_production' && (
        <div className="space-y-4">
          <div className="bg-slate-950 border border-slate-800 p-5 rounded-3xl space-y-3.5">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase">Your Name</label>
              <input
                type="text"
                value={prodName}
                onChange={(e) => setProdName(e.target.value)}
                className="w-full h-12 p-3 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold text-white mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase">Your Country</label>
              <input
                type="text"
                value={prodCountry}
                onChange={(e) => setProdCountry(e.target.value)}
                className="w-full h-12 p-3 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold text-white mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase">Your Current City</label>
              <input
                type="text"
                value={prodCity}
                onChange={(e) => setProdCity(e.target.value)}
                className="w-full h-12 p-3 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold text-white mt-1"
              />
            </div>
          </div>

          <div className="bg-emerald-950/40 border border-emerald-500/40 p-5 rounded-3xl space-y-3 text-center">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400 block">
              Your Personalized Introduction
            </span>
            <p className="text-base font-black text-white">
              "My name is {prodName}. I'm from {prodCountry}. I live in {prodCity}."
            </p>
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                AudioService.play(undefined, `My name is ${prodName}. I'm from ${prodCountry}. I live in ${prodCity}.`);
              }}
              className="px-4 py-2.5 bg-emerald-500 text-slate-950 font-black text-xs rounded-2xl inline-flex items-center space-x-2 shadow"
            >
              <Volume2 className="w-4 h-4" />
              <span>Hear Personal Speech</span>
            </button>
          </div>
        </div>
      )}

      {/* SUBMIT BUTTON & STRUCTURED FEEDBACK DRAWER */}
      <div className="pt-2">
        {!isSubmitted ? (
          <button
            onClick={handleCheckAnswer}
            disabled={isCheckDisabled()}
            className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-base uppercase tracking-wider transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer btn-tactile-primary font-display"
          >
            CHECK ANSWER
          </button>
        ) : (
          <div
            className={`p-5 rounded-3xl space-y-4 shadow-2xl border-2 animate-fade-in ${
              isCorrect
                ? 'bg-emerald-950/90 border-emerald-500/70 text-emerald-100'
                : 'bg-rose-950/90 border-rose-500/70 text-rose-100'
            }`}
          >
            <div className="flex items-center space-x-2.5">
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
              )}
              <h3 className="font-black text-base">
                {isCorrect ? 'Great job! +15 XP' : 'Let’s review this target:'}
              </h3>
            </div>

            {/* Standardized Translation Feedback Card */}
            {canonicalType === 'translation' && translationDetails ? (
              <div className="bg-slate-950/95 p-4 sm:p-5 rounded-2xl border border-indigo-500/30 space-y-3.5 text-slate-100">
                {/* Correct English */}
                <div className="bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-500/30 space-y-1">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    ✅ Correct English
                  </span>
                  <p className="text-base font-black text-white font-mono leading-snug">
                    "{translationDetails.correctEnglish}"
                  </p>
                </div>

                {/* Correct Hindi */}
                <div className="bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/30 space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    🇮🇳 Correct Hindi
                  </span>
                  <p className="text-base font-bold text-amber-100 font-hindi leading-snug">
                    "{translationDetails.correctHindi}"
                  </p>
                </div>

                {/* English Explanation */}
                {translationDetails.englishExplanation && (
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
                      English Explanation
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {translationDetails.englishExplanation}
                    </p>
                  </div>
                )}

                {/* Hindi Explanation */}
                {translationDetails.hindiExplanation && (
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                      Hindi Explanation (स्पष्टीकरण)
                    </span>
                    <p className="text-xs sm:text-sm text-amber-100 leading-relaxed font-hindi font-medium">
                      {translationDetails.hindiExplanation}
                    </p>
                  </div>
                )}

                {/* Replay Question Audio Button */}
                <button
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    speakTextOffline(
                      translationDetails.questionAudioText,
                      translationDetails.questionAudioLang
                    );
                  }}
                  className="w-full py-2.5 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 rounded-xl text-indigo-300 text-xs font-bold flex items-center justify-center space-x-2 transition cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Replay Question Audio ({translationDetails.questionAudioLang === 'hi-IN' ? 'Hindi' : 'English'})</span>
                </button>
              </div>
            ) : (
              <>
                {!isCorrect && correctAnswerDisplay && (
                  <div className="bg-slate-950/90 p-3.5 rounded-2xl border border-rose-500/30 text-rose-200">
                    <span className="text-xs font-bold text-slate-400 block uppercase">Correct Target</span>
                    <p className="text-base font-black font-mono mt-0.5">"{correctAnswerDisplay}"</p>
                  </div>
                )}

                {feedbackMessage && (
                  <p className="text-sm leading-relaxed opacity-95 font-medium">{feedbackMessage}</p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
