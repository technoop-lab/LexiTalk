import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowLeft, Volume2, Sparkles, CheckCircle2, Trophy } from 'lucide-react';
import { InteractiveStory, UserAcademyProfile } from '../types';
import { CURIOSITY_STORIES } from '../data/curiosityCurriculum';
import { playSoundEffectEffect } from '../utils/audioUtils';
import { AudioService } from '../services/AudioService';

interface StoryModeViewProps {
  user: UserAcademyProfile;
  onFinishStory: (xpGained: number) => void;
  onBack: () => void;
}

export const StoryModeView: React.FC<StoryModeViewProps> = ({
  user,
  onFinishStory,
  onBack,
}) => {
  const [selectedStory, setSelectedStory] = useState<InteractiveStory | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [isStoryFinished, setIsStoryFinished] = useState(false);

  const handleStartStory = (story: InteractiveStory) => {
    playSoundEffectEffect('tap');
    setSelectedStory(story);
    setStepIndex(0);
    setIsStoryFinished(false);
    // Auto speak first line
    if (story.steps[0]) {
      AudioService.play((story.steps[0] as any).audioId, story.steps[0].text);
    }
  };

  const handleNextStep = () => {
    if (!selectedStory) return;

    if (stepIndex + 1 >= selectedStory.steps.length) {
      setIsStoryFinished(true);
      playSoundEffectEffect('victory');
      confetti({ particleCount: 80, spread: 60 });
    } else {
      const nextIdx = stepIndex + 1;
      setStepIndex(nextIdx);
      setIsQuestionAnswered(false);
      setSelectedAnswer(null);
      // Auto speak next line
      AudioService.play((selectedStory.steps[nextIdx] as any).audioId, selectedStory.steps[nextIdx].text);
    }
  };

  const handleSelectQuestionOption = (idx: number, correctIdx: number) => {
    setSelectedAnswer(idx);
    setIsQuestionAnswered(true);
    if (idx === correctIdx) {
      playSoundEffectEffect('correct');
      confetti({ particleCount: 30, spread: 40 });
    } else {
      playSoundEffectEffect('wrong');
    }
  };

  if (isStoryFinished && selectedStory) {
    return (
      <div className="p-6 max-w-md mx-auto text-center space-y-6 my-auto select-none">
        <div className="w-20 h-20 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center mx-auto text-4xl shadow-xl">
          📖
        </div>

        <div>
          <span className="text-xs font-black text-purple-400 uppercase tracking-widest block">Story Complete!</span>
          <h2 className="text-2xl font-black text-white mt-1">{selectedStory.title}</h2>
          <p className="text-xs text-slate-400 mt-1">Great listening comprehension practice!</p>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-around text-xs">
          <div>
            <span className="text-slate-400 block font-bold">XP Earned</span>
            <span className="text-lg font-black text-amber-400">+25 XP</span>
          </div>
          <div>
            <span className="text-slate-400 block font-bold">Gems</span>
            <span className="text-lg font-black text-cyan-400">+15 💎</span>
          </div>
        </div>

        <button
          onClick={() => {
            onFinishStory(25);
            setSelectedStory(null);
          }}
          className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl"
        >
          CLAIM REWARDS & RETURN
        </button>
      </div>
    );
  }

  // Active Story Player View
  if (selectedStory) {
    const currentStep = selectedStory.steps[stepIndex];

    return (
      <div className="p-4 sm:p-5 w-full max-w-lg mx-auto space-y-4 select-none min-h-full flex flex-col justify-between pb-28">
        <div className="flex items-center justify-between bg-slate-900 p-3 rounded-2xl border border-slate-800">
          <button onClick={() => setSelectedStory(null)} className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-black text-purple-300">{selectedStory.title}</span>
          <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full">
            {stepIndex + 1} / {selectedStory.steps.length}
          </span>
        </div>

        {/* Chat / Story Bubble */}
        <div className="space-y-4 my-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-black text-sm text-indigo-300">{currentStep.speaker}</span>
              <button
                onClick={() => AudioService.play((currentStep as any).audioId, currentStep.text)}
                className="p-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 rounded-xl"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <p className="text-base font-bold text-slate-100 leading-relaxed">"{currentStep.text}"</p>
            {currentStep.translationsByLang?.[user.nativeLanguage] ? (
              <p className="text-xs text-slate-400 italic">"{currentStep.translationsByLang[user.nativeLanguage]}"</p>
            ) : currentStep.translation ? (
              <p className="text-xs text-slate-400 italic">"{currentStep.translation}"</p>
            ) : null}
          </div>

          {/* Comprehension Question Checkpoint if present */}
          {currentStep.question && (
            <div className="bg-purple-950/60 border border-purple-500/40 p-4 rounded-3xl space-y-3">
              <span className="text-[10px] font-bold uppercase text-purple-300 tracking-wider block">
                Comprehension Question
              </span>
              <h4 className="font-bold text-xs text-white">{currentStep.question.prompt}</h4>

              <div className="space-y-2">
                {currentStep.question.options.map((opt, i) => {
                  const isSelected = selectedAnswer === i;
                  const isCorrect = i === currentStep.question!.correctIndex;

                  let btnStyle = 'bg-slate-900 border-slate-800 text-slate-200';
                  if (isQuestionAnswered) {
                    if (isCorrect) btnStyle = 'bg-emerald-600 text-white border-emerald-400 font-bold';
                    else if (isSelected) btnStyle = 'bg-rose-600 text-white border-rose-400';
                  }

                  return (
                    <button
                      key={i}
                      disabled={isQuestionAnswered}
                      onClick={() => handleSelectQuestionOption(i, currentStep.question!.correctIndex)}
                      className={`w-full p-3 rounded-2xl border text-left text-xs transition ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={handleNextStep}
          disabled={!!currentStep.question && !isQuestionAnswered}
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl transition active:scale-95 disabled:opacity-40"
        >
          NEXT →
        </button>
      </div>
    );
  }

  // Story Selection Screen
  return (
    <div className="p-4 sm:p-5 w-full max-w-lg mx-auto space-y-4 select-none pb-28">
      <div className="flex items-center justify-between bg-slate-900 p-3 rounded-2xl border border-slate-800">
        <button onClick={onBack} className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-black text-purple-400 uppercase tracking-widest">Interactive Stories Vault</span>
      </div>

      <div className="space-y-3">
        {CURIOSITY_STORIES.map((story) => (
          <div
            key={story.id}
            onClick={() => handleStartStory(story)}
            className="bg-slate-900 border border-slate-800 hover:border-purple-500/50 p-4 rounded-3xl cursor-pointer transition shadow-xl space-y-2 group"
          >
            <div className="flex items-start justify-between">
              <span className="text-3xl group-hover:scale-110 transition-transform">{story.icon}</span>
              <span className="text-[10px] font-black px-2.5 py-0.5 bg-purple-500/20 text-purple-300 rounded-full">
                CEFR {story.cefr}
              </span>
            </div>

            <div>
              <h3 className="font-black text-white text-base group-hover:text-purple-300 transition">{story.title}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{story.description}</p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-purple-400">
              <span>Read Story</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
