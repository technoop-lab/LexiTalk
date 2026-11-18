import React, { useState, useEffect } from 'react';
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
  Languages,
  Loader2,
} from 'lucide-react';
import { playSoundEffectEffect } from '../../utils/audioUtils';
import { getActiveEnglishAccent } from '../../utils/audioUtils';
import { AudioService } from '../../services/AudioService';
import { askGeminiJson, isAiConfigured } from '../../services/GeminiClient';
import { AskGeminiButton } from '../ui/AskGeminiButton';

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

  // GEM-2 Tone Switcher + GEM-3 Explain-in-Hindi
  const [toneTab, setToneTab] = useState<'casual' | 'polite' | 'professional'>('casual');
  const [toneVariants, setToneVariants] = useState<Record<string, string> | null>(null);
  const [toneLoading, setToneLoading] = useState(false);
  const [explain, setExplain] = useState<{
    loading: boolean;
    explanationHi?: string;
    examples?: string[];
    local?: boolean;
  } | null>(null);

  const { feedback, overallSuccess, requiresRetry, detectedErrors, remediationTask } = evaluation;

  const speak = (text: string) => {
    playSoundEffectEffect('tap');
    AudioService.speak(text, getActiveEnglishAccent());
  };

  const correctionSummary = detectedErrors.length
    ? detectedErrors.map((e) => `${e.message} → ${e.correction}`).join('; ')
    : '';

  const buildTonePrompt = () =>
    `A Hindi-speaking learner said this English sentence: "${evaluation.rawTranscript}"\n` +
    (correctionSummary ? `Corrections needed: ${correctionSummary}\n` : 'Their grammar is already correct.\n') +
    `Create THREE one-sentence versions with the SAME meaning and correct grammar:\n` +
    `- casual: friendly, talking with friends\n` +
    `- polite: soft and respectful\n` +
    `- professional: suitable for office / work\n` +
    `Return JSON only: {"casual":"...","polite":"...","professional":"..."}`;

  const buildExplainPrompt = () =>
    `A Hindi-speaking English learner needs to understand their speaking feedback.\n` +
    `They said: "${evaluation.rawTranscript}"\n` +
    (correctionSummary ? `Feedback: ${correctionSummary}\n` : `Feedback: ${feedback.grammar.message}\n`) +
    `Explain IN SIMPLE HINDI (Devanagari) why, in max 4 short sentences a 15-year-old understands. ` +
    `Then give 2 example sentences showing the rule, each as "English sentence — Hindi translation".\n` +
    `Return JSON only: {"explanationHi":"...","examples":["...","..."]}`;

  // Fetch tone variants once when the modal opens (only when AI is reachable).
  useEffect(() => {
    if (!isAiConfigured()) return;
    let cancelled = false;
    setToneLoading(true);
    void askGeminiJson<{ casual?: string; polite?: string; professional?: string }>(buildTonePrompt()).then(
      (data) => {
        if (cancelled) return;
        if (data && (data.casual || data.polite || data.professional)) {
          setToneVariants({
            casual: data.casual || evaluation.rawTranscript,
            polite: data.polite || evaluation.rawTranscript,
            professional: data.professional || evaluation.rawTranscript,
          });
        }
        setToneLoading(false);
      },
    );
    return () => {
      cancelled = true;
    };
  }, []);

  const handleExplainToggle = async () => {
    playSoundEffectEffect('tap');
    if (explain) {
      setExplain(null);
      return;
    }
    const localText =
      correctionSummary ||
      feedback.grammar.message ||
      'No major grammar issues detected in this response.';
    if (!isAiConfigured()) {
      setExplain({ loading: false, explanationHi: localText, examples: [], local: true });
      return;
    }
    setExplain({ loading: true });
    const data = await askGeminiJson<{ explanationHi?: string; examples?: string[] }>(buildExplainPrompt());
    if (data?.explanationHi) {
      setExplain({
        loading: false,
        explanationHi: data.explanationHi,
        examples: (Array.isArray(data.examples) ? data.examples : []).slice(0, 2),
        local: false,
      });
    } else {
      setExplain({ loading: false, explanationHi: localText, examples: [], local: true });
    }
  };

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
        <div className="bg-slate-850 p-3.5 rounded-2xl border border-slate-800 space-y-2.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Spoken Answer:</span>
          <p className="text-sm font-medium text-slate-200 italic">"{evaluation.rawTranscript}"</p>
          <div className="flex justify-end">
            <AskGeminiButton
              prompt={
                `I said in English: "${evaluation.rawTranscript}"\n` +
                (correctionSummary ? `Corrections: ${correctionSummary}\n` : 'My grammar was correct.\n') +
                `Explain in simple Hindi why, with 2 example sentences.`
              }
              label="Ask Gemini"
            />
          </div>
        </div>

        {/* GEM-2: Say It Better — in-app tabs when AI key set, else keyless Gemini hand-off */}
        {isAiConfigured() ? (
          <div className="bg-slate-850 p-3.5 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-300">
                🗣️ Say It Better (बोलने का तरीका)
              </span>
              <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                ✨ AI
              </span>
            </div>

            <div className="flex space-x-1.5">
              {([
                ['casual', 'Casual 🧑‍🎤'],
                ['polite', 'Polite 🙏'],
                ['professional', 'Office 💼'],
              ] as const).map(([id, labelText]) => (
                <button
                  key={id}
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    setToneTab(id);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-black transition cursor-pointer border ${
                    toneTab === id
                      ? 'bg-indigo-500 text-white border-indigo-400'
                      : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {labelText}
                </button>
              ))}
            </div>

            {toneLoading ? (
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                <span>Preparing3 versions…</span>
              </div>
            ) : toneVariants ? (
              <div className="flex items-start justify-between gap-2 bg-slate-900 border border-slate-800 rounded-xl p-3">
                <p className="text-sm font-medium text-slate-100 leading-relaxed">
                  {toneVariants[toneTab]}
                </p>
                <button
                  onClick={() => speak(toneVariants[toneTab])}
                  className="p-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-xl transition cursor-pointer shrink-0"
                  title="Listen"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <p className="text-[11px] text-slate-500">
                Could not reach the AI coach right now — check your connection or API key.
              </p>
            )}
          </div>
        ) : (
          <div className="bg-slate-850 p-3.5 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-300">
                🗣️ Say It Better (बोलने का तरीका)
              </span>
              <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                🔑-free · your Gemini app
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Get Casual / Polite / Office versions of your sentence straight from the Gemini app
              already installed on your phone — free, no API key needed.
            </p>
            <AskGeminiButton
              prompt={
                `Correct and rewrite this English sentence in 3 ways with the SAME meaning:\n` +
                `1. Casual (friends)\n2. Polite (respectful)\n3. Professional (office)\n` +
                `Sentence: "${evaluation.rawTranscript}"\n` +
                (correctionSummary ? `Fix the grammar first. Corrections: ${correctionSummary}\n` : '') +
                `One sentence per version, numbered.`
              }
              label="Gemini से 3 तरीकें सीखें"
            />
          </div>
        )}

        {/* Corrections detected for this turn (GEM-3 support) */}
        {detectedErrors.length > 0 && (
          <div className="bg-rose-950/30 border border-rose-500/30 rounded-2xl p-3.5 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 flex items-center space-x-1.5">
              <XCircle className="w-3.5 h-3.5" />
              <span>Corrections ({detectedErrors.length})</span>
            </span>
            {detectedErrors.map((err, idx) => (
              <div key={idx} className="text-xs space-y-0.5">
                <p className="text-rose-300">✗ {err.message}</p>
                <p className="text-emerald-400 font-bold">✓ {err.correction}</p>
              </div>
            ))}
          </div>
        )}

        {/* GEM-3: Explain-in-Hindi deep dive */}
        <div className="space-y-2">
          <button
            onClick={handleExplainToggle}
            className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-[11px] font-black transition border cursor-pointer btn-press bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30 hover:bg-emerald-100 dark:hover:bg-emerald-500/25"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{explain ? 'बंद करें (Close)' : '✨ ज़्यादा बताओ · Explain in Hindi'}</span>
          </button>

          {explain && (
            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-3.5 space-y-2.5 animate-fade-in">
              {explain.loading ? (
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                  <span>समझा रहा है…</span>
                </div>
              ) : (
                <>
                  <p className="text-xs text-slate-200 leading-relaxed font-hindi">
                    {explain.explanationHi}
                  </p>
                  {(explain.examples || []).map((ex, idx) => (
                    <div
                      key={idx}
                      className="flex items-start justify-between gap-2 bg-slate-900 border border-slate-800 rounded-xl p-2.5"
                    >
                      <p className="text-[11px] text-slate-300 font-medium">{ex}</p>
                      <button
                        onClick={() => speak(ex.split('—')[0].trim())}
                        className="p-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg transition cursor-pointer shrink-0"
                        title="Listen"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                  {explain.local && (
                    <p className="text-[10px] text-slate-500 italic">
                      Local explanation — add a Gemini API key for a detailed AI breakdown.
                    </p>
                  )}
                </>
              )}
            </div>
          )}
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
