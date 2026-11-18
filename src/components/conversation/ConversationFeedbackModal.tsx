import React, { useState } from 'react';
import {
  TurnEvaluationResult,
  ControlledPracticeTask,
  ConversationTurn,
} from '../../types/conversation';
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  RotateCcw,
  ArrowRight,
  Sparkles,
  Volume2,
  HelpCircle,
  Award,
  BookOpen,
} from 'lucide-react';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface ConversationFeedbackModalProps {
  turn: ConversationTurn;
  evaluation: TurnEvaluationResult;
  onContinue: () => void;
  onRetry: () => void;
}

export const ConversationFeedbackModal: React.FC<ConversationFeedbackModalProps> = ({
  turn,
  evaluation,
  onContinue,
  onRetry,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [remediationSolved, setRemediationSolved] = useState(false);

  const { feedback, overallSuccess, requiresRetry, detectedErrors, remediationTask } = evaluation;

  const handleOptionSelect = (optionId: string, isCorrect: boolean) => {
    setSelectedOption(optionId);
    if (isCorrect) {
      playSoundEffectEffect('correct');
      setRemediationSolved(true);
    } else {
      playSoundEffectEffect('wrong');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-750 w-full max-w-xl rounded-3xl p-5 sm:p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        {/* Header Status */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                overallSuccess
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              }`}
            >
              {overallSuccess ? <CheckCircle2 className="w-6 h-6" /> : <AlertTriangle className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="text-base font-black text-white">
                {overallSuccess ? 'Turn Completed Successfully!' : 'Needs Practice & Retry'}
              </h3>
              <p className="text-xs text-slate-400">
                Turn {turn.turnIndex} Evaluation • Function: {turn.expectedFunction}
              </p>
            </div>
          </div>

          <div className="text-right">
            <span
              className={`text-xs font-black px-2.5 py-1 rounded-xl ${
                overallSuccess
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}
            >
              Score: {evaluation.communicationScore}%
            </span>
          </div>
        </div>

        {/* Transcript Recap */}
        <div className="bg-slate-850 p-3.5 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Spoken Answer:</span>
          <p className="text-sm font-medium text-slate-200 italic">"{evaluation.rawTranscript}"</p>
        </div>

        {/* 6-Domain Structured Feedback Grid */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Multi-Dimensional Language Feedback</span>
          </h4>

          {/* 1. Communication */}
          <div className="bg-slate-850/70 p-3 rounded-2xl border border-slate-800 flex items-start space-x-3">
            <div className="mt-0.5">
              {feedback.communication.status === 'pass' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : feedback.communication.status === 'partial' ? (
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              ) : (
                <XCircle className="w-4 h-4 text-rose-400" />
              )}
            </div>
            <div className="flex-1 text-xs">
              <span className="font-bold text-slate-200">1. Communication Meaning: </span>
              <span className="text-slate-300">{feedback.communication.message}</span>
            </div>
          </div>

          {/* 2. Grammar */}
          <div className="bg-slate-850/70 p-3 rounded-2xl border border-slate-800 flex items-start space-x-3">
            <div className="mt-0.5">
              {feedback.grammar.status === 'pass' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              )}
            </div>
            <div className="flex-1 text-xs">
              <span className="font-bold text-slate-200">2. Grammar Accuracy: </span>
              <span className="text-slate-300">{feedback.grammar.message}</span>
            </div>
          </div>

          {/* 3. Vocabulary */}
          <div className="bg-slate-850/70 p-3 rounded-2xl border border-slate-800 flex items-start space-x-3">
            <div className="mt-0.5">
              {feedback.vocabulary.status === 'pass' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <HelpCircle className="w-4 h-4 text-slate-400" />
              )}
            </div>
            <div className="flex-1 text-xs">
              <span className="font-bold text-slate-200">3. Target Vocabulary: </span>
              <span className="text-slate-300">{feedback.vocabulary.message}</span>
            </div>
          </div>

          {/* 4. Interaction */}
          <div className="bg-slate-850/70 p-3 rounded-2xl border border-slate-800 flex items-start space-x-3">
            <div className="mt-0.5">
              {feedback.interaction.status === 'pass' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              )}
            </div>
            <div className="flex-1 text-xs">
              <span className="font-bold text-slate-200">4. Conversational Interaction: </span>
              <span className="text-slate-300">{feedback.interaction.message}</span>
            </div>
          </div>

          {/* 5. Pronunciation / Acoustic Analysis Note */}
          <div className="bg-slate-850/50 p-2.5 rounded-2xl border border-slate-800/80 flex items-start space-x-3 text-slate-400 text-xs">
            <div className="mt-0.5">
              <Volume2 className="w-4 h-4 text-slate-500" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-slate-400">5. Pronunciation Acoustics: </span>
              <span className="text-slate-400 font-mono text-[11px]">NOT YET ANALYZED</span>
              <p className="text-[10px] text-slate-400 mt-0.5">
                (Transcript evaluated locally. On-device acoustic pitch/rhythm engine will analyze live audio.)
              </p>
            </div>
          </div>
        </div>

        {/* TEACH -> FEEDBACK -> RETRY REMEDIATION TASK */}
        {requiresRetry && remediationTask && (
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-2xl p-4 space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-black uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Micro-Practice Before Retry</span>
            </div>
            <p className="text-sm font-semibold text-slate-200">{remediationTask.prompt}</p>

            {remediationTask.options && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {remediationTask.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionSelect(opt.id, opt.isCorrect)}
                    className={`p-2.5 rounded-xl text-xs font-bold transition border text-left ${
                      selectedOption === opt.id
                        ? opt.isCorrect
                          ? 'bg-emerald-600 text-white border-emerald-400'
                          : 'bg-rose-600 text-white border-rose-400'
                        : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            )}

            {remediationSolved && (
              <p className="text-xs text-emerald-400 font-medium">
                ✅ Correct! {remediationTask.explanation} Now try speaking your response again.
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-3 pt-2">
          {requiresRetry ? (
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                onRetry();
              }}
              className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm rounded-2xl transition shadow-lg flex items-center justify-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Speaking Turn</span>
            </button>
          ) : (
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                onContinue();
              }}
              className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-2xl transition shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Continue Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
