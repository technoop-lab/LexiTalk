import { useState } from 'react';
import { Award, CheckCircle2, Volume2, ArrowRight, ShieldAlert, Sparkles, X } from 'lucide-react';
import { CEFRLevel } from '../types';
import { AudioService } from '../services/AudioService';

interface PlacementAssessmentModalProps {
  onComplete: (recommendedLevel: CEFRLevel) => void;
  onCancel: () => void;
}

interface Question {
  id: number;
  type: 'grammar' | 'vocab' | 'listening' | 'translation';
  question: string;
  audioText?: string;
  options: string[];
  correctIndex: number;
  levelIfCorrect: CEFRLevel;
}

const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'grammar',
    question: 'Complete the sentence: "Hello! My name ___ Anil."',
    options: ['is', 'are', 'am', 'be'],
    correctIndex: 0,
    levelIfCorrect: 'A1',
  },
  {
    id: 2,
    type: 'vocab',
    question: 'Which word means "where you live or were born"?',
    options: ['Country', 'Evening', 'Morning', 'Student'],
    correctIndex: 0,
    levelIfCorrect: 'A1',
  },
  {
    id: 3,
    type: 'listening',
    question: 'Listen carefully: What is the speaker saying?',
    audioText: "Nice to meet you too.",
    options: ['Nice to meet you too.', 'Where are you from?', 'My name is Maria.', 'I am a teacher.'],
    correctIndex: 0,
    levelIfCorrect: 'A2',
  },
  {
    id: 4,
    type: 'grammar',
    question: 'Choose the correct sentence:',
    options: [
      'I have been studying English for two years.',
      'I am study English since two years.',
      'I study English for two years ago.',
      'I was studied English for two years.',
    ],
    correctIndex: 0,
    levelIfCorrect: 'B1',
  },
  {
    id: 5,
    type: 'translation',
    question: 'Choose the best translation for: "She would have joined us if she had finished work earlier."',
    options: [
      'वह हमारे साथ शामिल हो जाती यदि उसने काम जल्दी समाप्त कर लिया होता।',
      'वह हमारे साथ आई जब काम खत्म हुआ।',
      'वह काम पर जल्दी गई इसलिए वह हमारे साथ थी।',
      'यदि वह काम करेगी तो हमारे साथ आएगी।',
    ],
    correctIndex: 0,
    levelIfCorrect: 'B2',
  },
];

export const PlacementAssessmentModal = ({
  onComplete,
  onCancel,
}: PlacementAssessmentModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = ASSESSMENT_QUESTIONS[currentIndex];

  const handleSelectOption = (idx: number) => {
    AudioService.playSound('tap');
    setSelectedOption(idx);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    let newScore = score;
    if (selectedOption === currentQ.correctIndex) {
      newScore += 1;
      setScore(newScore);
    }

    setSelectedOption(null);

    if (currentIndex + 1 < ASSESSMENT_QUESTIONS.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
      AudioService.playSound('victory');
    }
  };

  const getRecommendedLevel = (): CEFRLevel => {
    // Only A1 and A2 have authored lessons, so the test never places
    // anyone above the highest level that actually has content.
    if (score <= 2) return 'A1';
    return 'A2';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full shadow-2xl relative space-y-5">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {!isFinished ? (
          <>
            {/* Header */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
                <span>CURIOSITY PLACEMENT ASSESSMENT</span>
                <span>
                  Question {currentIndex + 1} of {ASSESSMENT_QUESTIONS.length}
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / ASSESSMENT_QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">
                {currentQ.type.toUpperCase()} TEST
              </span>

              <h3 className="text-base font-black text-white">{currentQ.question}</h3>

              {currentQ.audioText && (
                <button
                  onClick={() => AudioService.play((currentQ as any).audioId, currentQ.audioText!)}
                  className="p-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-sky-400 rounded-xl font-bold text-xs flex items-center space-x-2 transition"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Play Listening Audio</span>
                </button>
              )}

              {/* Options */}
              <div className="space-y-2 pt-1">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs font-bold transition flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Question */}
            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`w-full py-3.5 font-black text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center space-x-2 ${
                selectedOption !== null
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-lg'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>{currentIndex + 1 === ASSESSMENT_QUESTIONS.length ? 'COMPLETE TEST' : 'NEXT QUESTION'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </>
        ) : (
          /* Results View */
          <div className="text-center space-y-5 py-2">
            <div className="w-20 h-20 bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 rounded-full flex items-center justify-center text-3xl mx-auto shadow-2xl ring-8 ring-emerald-500/20">
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-emerald-400 tracking-widest">
                ASSESSMENT COMPLETE
              </span>
              <h2 className="text-2xl font-black text-white">Recommended Level: {getRecommendedLevel()}</h2>
              <p className="text-xs text-slate-400">
                You answered {score} of {ASSESSMENT_QUESTIONS.length} diagnostic questions correctly.
              </p>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800 rounded-2xl text-[11px] text-slate-400 flex items-center space-x-2 text-left">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Curiosity Assessment recommendation. This is an adaptive diagnostic, not an official CEFR examination.
              </span>
            </div>

            <button
              onClick={() => onComplete(getRecommendedLevel())}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl transition active:scale-95 flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>START LEARNING AT {getRecommendedLevel()} LEVEL</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
