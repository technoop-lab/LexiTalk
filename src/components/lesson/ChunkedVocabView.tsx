import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronRight, RefreshCw, Layers } from 'lucide-react';
import { VocabItem, NativeLanguageCode, LearningMode, SecondaryLanguageCode } from '../../types';
import { VocabCard } from './VocabCard';
import { AudioService } from '../../services/AudioService';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface ChunkedVocabViewProps {
  vocabulary: VocabItem[];
  nativeLang: NativeLanguageCode;
  learningMode?: LearningMode;
  secondaryLang?: SecondaryLanguageCode | null;
  onCompleteVocab: () => void;
}

export const ChunkedVocabView: React.FC<ChunkedVocabViewProps> = ({
  vocabulary,
  nativeLang,
  learningMode,
  secondaryLang,
  onCompleteVocab,
}) => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  // Group quick check states
  const [selectedQuickChoice, setSelectedQuickChoice] = useState<string | null>(null);
  const [isQuickCheckAnswered, setIsQuickCheckAnswered] = useState(false);
  const [isQuickCheckCorrect, setIsQuickCheckCorrect] = useState<boolean | null>(null);

  // Chunking vocabulary into 4 pedagogical groups
  const groups = [
    {
      id: 'group_1',
      title: 'Group 1 of 4: Everyday Greetings',
      description: 'Essential words to greet people at any time of day.',
      items: vocabulary.filter((v) => ['v_hello', 'v_hi', 'v_morning', 'v_afternoon', 'v_evening'].includes(v.id)),
      quickCheck: {
        question: 'Quick Check: Complete the morning greeting: "Good ___, everyone!"',
        options: [
          { text: 'morning', isCorrect: true },
          { text: 'country', isCorrect: false },
          { text: 'city', isCorrect: false },
        ],
        explanation: '"Good morning" is the standard greeting used from dawn until noon.',
      },
    },
    {
      id: 'group_2',
      title: 'Group 2 of 4: Personal Identity & Origin',
      description: 'Core words for sharing your name and country.',
      items: vocabulary.filter((v) => ['v_name', 'v_my', 'v_your', 'v_from'].includes(v.id)),
      quickCheck: {
        question: 'Quick Check: State where you originate: "I am ___ India."',
        options: [
          { text: 'from', isCorrect: true },
          { text: 'name', isCorrect: false },
          { text: 'live', isCorrect: false },
        ],
        explanation: '"from" connects your identity to your country of origin.',
      },
      retrievalCheck: {
        question: '🔄 Spaced Retrieval (From Group 1): What is the casual friendly greeting?',
        options: [
          { text: 'Hi', isCorrect: true },
          { text: 'Country', isCorrect: false },
          { text: 'Teacher', isCorrect: false },
        ],
        explanation: 'Retrieval practice! "Hi" is the casual greeting learned in Group 1.',
      },
    },
    {
      id: 'group_3',
      title: 'Group 3 of 4: Places & Occupations',
      description: 'Words for cities, countries, students, and teachers.',
      items: vocabulary.filter((v) => ['v_live', 'v_city', 'v_country', 'v_student', 'v_teacher', 'v_work'].includes(v.id)),
      quickCheck: {
        question: 'Quick Check: Complete the city residence sentence: "I ___ in Delhi."',
        options: [
          { text: 'live', isCorrect: true },
          { text: 'teacher', isCorrect: false },
          { text: 'country', isCorrect: false },
        ],
        explanation: 'Use verb "live" with "in [City]".',
      },
      retrievalCheck: {
        question: '🔄 Spaced Retrieval (From Group 2): Which word means "belonging to me"?',
        options: [
          { text: 'my', isCorrect: true },
          { text: 'your', isCorrect: false },
          { text: 'from', isCorrect: false },
        ],
        explanation: '"my" is the possessive pronoun for self.',
      },
    },
    {
      id: 'group_4',
      title: 'Group 4 of 4: Polite Connections',
      description: 'Words for pleasant introductions and meeting people.',
      items: vocabulary.filter((v) => ['v_meet', 'v_nice', 'v_too'].includes(v.id)),
      quickCheck: {
        question: 'Quick Check: Respond politely: "Nice to meet you ___."',
        options: [
          { text: 'too', isCorrect: true },
          { text: 'live', isCorrect: false },
          { text: 'work', isCorrect: false },
        ],
        explanation: '"too" means "also" or "as well" in polite responses.',
      },
    },
  ];

  const currentGroup = groups[currentGroupIndex];

  const handleSelectQuickCheck = (optionText: string, isCorrect: boolean) => {
    playSoundEffectEffect('tap');
    setSelectedQuickChoice(optionText);
    setIsQuickCheckAnswered(true);
    setIsQuickCheckCorrect(isCorrect);
    if (isCorrect) {
      playSoundEffectEffect('correct');
    } else {
      playSoundEffectEffect('wrong');
    }
  };

  const handleNextGroup = () => {
    playSoundEffectEffect('tap');
    setIsQuickCheckAnswered(false);
    setSelectedQuickChoice(null);
    setIsQuickCheckCorrect(null);

    if (currentGroupIndex + 1 < groups.length) {
      setCurrentGroupIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onCompleteVocab();
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header & Chunk Indicator */}
      <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-3xl space-y-3 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center space-x-1.5">
            <Layers className="w-4 h-4" />
            <span>Chunked Vocabulary Engine</span>
          </span>
          <span className="text-xs font-mono font-bold text-slate-400">
            Group {currentGroupIndex + 1} of {groups.length}
          </span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white">{currentGroup.title}</h2>
          <p className="text-sm text-slate-300 mt-1 font-medium">{currentGroup.description}</p>
        </div>

        {/* Group Progress Dots */}
        <div className="flex items-center space-x-2 pt-2">
          {groups.map((_, idx) => (
            <div
              key={idx}
              className={`h-2.5 flex-1 rounded-full transition-all duration-300 ${
                idx === currentGroupIndex
                  ? 'bg-emerald-500 shadow-md scale-105'
                  : idx < currentGroupIndex
                  ? 'bg-emerald-500/40'
                  : 'bg-slate-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Vocabulary Cards for current chunk */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {currentGroup.items.map((item) => (
          <VocabCard
            key={item.id}
            item={item}
            nativeLang={nativeLang}
            learningMode={learningMode}
            secondaryLang={secondaryLang}
          />
        ))}
      </div>

      {/* Spaced Retrieval Card if applicable */}
      {currentGroup.retrievalCheck && (
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border border-amber-500/30 p-5 rounded-3xl space-y-3.5 shadow-lg">
          <div className="flex items-center space-x-2 text-amber-400 font-black text-xs uppercase tracking-wider">
            <RefreshCw className="w-4 h-4 text-amber-400" />
            <span>Spaced Retrieval Check</span>
          </div>
          <p className="text-base font-bold text-white leading-snug">{currentGroup.retrievalCheck.question}</p>

          <div className="grid grid-cols-3 gap-2.5">
            {currentGroup.retrievalCheck.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  playSoundEffectEffect('tap');
                  if (opt.isCorrect) playSoundEffectEffect('correct');
                  else playSoundEffectEffect('wrong');
                }}
                className="min-h-[48px] py-3 px-3 bg-slate-950/90 hover:bg-slate-850 text-slate-200 border border-slate-800 rounded-2xl font-bold text-sm transition"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Immediate Quick Interaction Check for this chunk */}
      <div className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-3xl space-y-3.5 shadow-lg">
        <div className="flex items-center space-x-2 text-indigo-400 font-black text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Immediate Chunk Check</span>
        </div>

        <h3 className="text-base font-bold text-white leading-snug">{currentGroup.quickCheck.question}</h3>

        <div className="grid grid-cols-3 gap-2.5">
          {currentGroup.quickCheck.options.map((opt, idx) => {
            const isSelected = selectedQuickChoice === opt.text;
            let btnStyle = 'bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700';
            if (isQuickCheckAnswered && isSelected) {
              btnStyle = opt.isCorrect
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-black'
                : 'bg-rose-500/20 border-rose-400 text-rose-300 font-black';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectQuickCheck(opt.text, opt.isCorrect)}
                className={`min-h-[50px] py-3 px-3 rounded-2xl border text-sm font-bold transition flex items-center justify-center space-x-1.5 ${btnStyle}`}
              >
                <span>{opt.text}</span>
                {isQuickCheckAnswered && isSelected && opt.isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                )}
              </button>
            );
          })}
        </div>

        {isQuickCheckAnswered && (
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-sm text-slate-300 leading-relaxed font-medium">
            <strong className="text-emerald-400 font-black">Explanation: </strong>
            {currentGroup.quickCheck.explanation}
          </div>
        )}
      </div>

      {/* 56px Next Group / Proceed CTA Button */}
      <button
        disabled={!isQuickCheckAnswered}
        onClick={handleNextGroup}
        className={`w-full h-14 font-black text-base uppercase tracking-wider rounded-2xl shadow-xl transition flex items-center justify-center space-x-2 ${
          isQuickCheckAnswered
            ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 cursor-pointer active:scale-[0.98]'
            : 'bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed'
        }`}
      >
        <span>
          {currentGroupIndex + 1 < groups.length
            ? `Continue to Group ${currentGroupIndex + 2}`
            : 'Continue to Step 4: Core Expressions'}
        </span>
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
