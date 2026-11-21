import React, { useState, useEffect, useRef } from 'react';
import {
  ConversationTurn,
  ConversationCharacter,
  TurnEvaluationResult,
  SpeechError,
} from '../../types/conversation';
import { SpeechService } from '../../services/speech/SpeechService';
import { ConversationEvaluationService } from '../../services/conversation/ConversationEvaluationService';
import {
  Mic,
  MicOff,
  Volume2,
  ChevronDown,
  ChevronUp,
  Send,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { expandTitlesForSpeech, getActiveEnglishAccent, playSoundEffectEffect } from '../../utils/audioUtils';
import { askGeminiJson, isAiConfigured } from '../../services/GeminiClient';

interface ConversationTurnRunnerProps {
  turn: ConversationTurn;
  character: ConversationCharacter;
  cefr: 'A1' | 'A2';
  onTurnComplete: (result: TurnEvaluationResult) => void;
}

export const ConversationTurnRunner: React.FC<ConversationTurnRunnerProps> = ({
  turn,
  character,
  cefr,
  onTurnComplete,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState('');
  const [manualTranscript, setManualTranscript] = useState('');
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [scaffoldingLevel, setScaffoldingLevel] = useState<'high' | 'medium' | 'low'>(
    cefr === 'A1' ? 'high' : 'medium'
  );
  const [showHindiTranslation, setShowHindiTranslation] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [startTimeMs, setStartTimeMs] = useState<number>(Date.now());

  // GEM-1 Smart Hint Pills — appear after 4s of silence
  const [showHints, setShowHints] = useState(false);
  const [hintTexts, setHintTexts] = useState<string[]>([]);
  const [hintsFromAi, setHintsFromAi] = useState(false);
  const interactedRef = useRef(false);

  const provider = SpeechService.getProvider();

  // Play partner audio on turn load
  useEffect(() => {
    setLiveTranscript('');
    setManualTranscript('');
    setSpeechError(null);
    setStartTimeMs(Date.now());
    interactedRef.current = false;
    setShowHints(false);
    setHintsFromAi(false);
    setHintTexts([]);
    playPartnerAudio();
  }, [turn.id]);

  // Silence detector: no typing / mic / submit for 4s → reveal hint pills.
  useEffect(() => {
    const timer = setTimeout(() => {
      if (interactedRef.current) return;

      const localHints = turn.suggestedResponses
        .map((s) => s.text)
        .filter(Boolean)
        .slice(0, 3);
      setHintTexts(localHints);
      setShowHints(localHints.length > 0);

      // Enrich with AI hints when a key/proxy is available (non-blocking).
      if (isAiConfigured()) {
        void askGeminiJson<{ hints?: string[] }>(
          `A CEFR-${cefr} English learner is stuck on a speaking task.\n` +
            `They were asked: "${turn.partnerPrompt}"\n` +
            `Communicative goal: ${turn.contextGoal}\n` +
            `Target vocabulary: ${turn.targetVocabulary.join(', ')}\n` +
            `Give exactly 3 DIFFERENT short starter sentences (5-9 words) they can say out loud to begin their answer. Natural, simple, level-appropriate.\n` +
            `Return JSON only as {"hints":["...","...","..."]}`,
        ).then((data) => {
          const aiHints = (data?.hints || []).map((h) => String(h || '').trim()).filter(Boolean).slice(0, 3);
          if (aiHints.length >= 2 && !interactedRef.current) {
            setHintTexts(aiHints);
            setHintsFromAi(true);
          }
        });
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [turn.id]);

  const playPartnerAudio = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    try {
      window.speechSynthesis.cancel();
      const textToSpeak = turn.partnerAudioText || turn.partnerPrompt;
      const utterance = new SpeechSynthesisUtterance(expandTitlesForSpeech(textToSpeak));
      utterance.lang = getActiveEnglishAccent();
      utterance.rate = cefr === 'A1' ? 0.85 : 0.95;

      utterance.onstart = () => setIsAudioPlaying(true);
      utterance.onend = () => setIsAudioPlaying(false);
      utterance.onerror = () => setIsAudioPlaying(false);

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('SpeechSynthesis error', e);
      setIsAudioPlaying(false);
    }
  };

  const handleStartListening = async () => {
    playSoundEffectEffect('tap');
    interactedRef.current = true;
    setShowHints(false);
    setSpeechError(null);

    const isAvail = await provider.isAvailable();
    if (!isAvail) {
      setSpeechError('Offline speech recognition is not available on this device.');
      return;
    }

    provider.onResult((res) => {
      setLiveTranscript(res.transcript);
      setManualTranscript(res.transcript);
    });

    provider.onError((err: SpeechError) => {
      setIsListening(false);
      setSpeechError(err.message);
    });

    provider.onEnd(() => {
      setIsListening(false);
    });

    try {
      await provider.start({ language: getActiveEnglishAccent(), interimResults: true });
      setIsListening(true);
    } catch (e: any) {
      setIsListening(false);
      setSpeechError(e?.message || 'Unable to start microphone.');
    }
  };

  const handleStopListening = async () => {
    playSoundEffectEffect('tap');
    setIsListening(false);
    await provider.stop();
  };

  const handleSubmitResponse = (submittedText?: string) => {
    interactedRef.current = true;
    setShowHints(false);
    const text = (submittedText || manualTranscript || liveTranscript).trim();
    if (!text) {
      setSpeechError('Please speak or enter your response before submitting.');
      return;
    }

    const durationMs = Date.now() - startTimeMs;
    const evalResult = ConversationEvaluationService.evaluateTurn(turn, text, {
      responseTimeMs: durationMs,
      cefr,
    });

    if (evalResult.overallSuccess) {
      playSoundEffectEffect('correct');
    } else {
      playSoundEffectEffect('wrong');
    }

    onTurnComplete(evalResult);
  };

  const handleSelectSuggested = (text: string) => {
    setManualTranscript(text);
    setLiveTranscript(text);
  };

  const handleUseHint = (text: string) => {
    playSoundEffectEffect('tap');
    interactedRef.current = true;
    setShowHints(false);
    setManualTranscript(text);
    setLiveTranscript(text);
    // Read the starter aloud so the learner can repeat it
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(expandTitlesForSpeech(text));
      utterance.lang = getActiveEnglishAccent();
      utterance.rate = cefr === 'A1' ? 0.85 : 0.95;
      window.speechSynthesis.speak(utterance);
    } catch {
      /* speech synthesis unavailable */
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 space-y-6 shadow-xl">
      {/* 1. Partner Dialogue Box */}
      <div className="flex items-start space-x-4 bg-slate-850/90 p-4 sm:p-5 rounded-2xl border border-slate-750">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-2xl flex-shrink-0">
          {character.avatar}
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-black text-white">{character.name}</span>
              <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md font-bold">
                {character.role}
              </span>
            </div>

            <button
              onClick={playPartnerAudio}
              className={`p-2 rounded-xl border transition ${
                isAudioPlaying
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 animate-pulse'
                  : 'bg-slate-800 text-emerald-400 border-slate-700 hover:bg-slate-750'
              }`}
              title="Replay Partner Voice"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <p className="text-base sm:text-lg font-bold text-slate-100 leading-relaxed">
            "{turn.partnerPrompt}"
          </p>

          {/* Hindi / Native Translation Accordion */}
          {turn.partnerQuestionHindi && (
            <div>
              <button
                onClick={() => setShowHindiTranslation(!showHindiTranslation)}
                className="text-[11px] font-bold text-emerald-400/90 hover:text-emerald-300 flex items-center space-x-1 transition"
              >
                <span>{showHindiTranslation ? 'Hide Translation' : 'Show Hindi Translation (अनुवाद)'}</span>
                {showHindiTranslation ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
              {showHindiTranslation && (
                <p className="text-xs text-slate-400 mt-1 pl-2 border-l-2 border-emerald-500/40">
                  {turn.partnerQuestionHindi}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 2. Communicative Context & Scaffolding Controls */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Your Communicative Goal:</span>
          </span>

          <div className="flex items-center space-x-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
            {(['high', 'medium', 'low'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setScaffoldingLevel(lvl)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase transition ${
                  scaffoldingLevel === lvl
                    ? 'bg-emerald-500 text-slate-950'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {lvl} Help
              </button>
            ))}
          </div>
        </div>

        <div className="bg-slate-850 p-3 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-1.5">
          <p className="font-semibold text-emerald-300">🎯 {turn.contextGoal}</p>
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[10px] font-bold text-slate-400">Target Vocabulary:</span>
            {turn.targetVocabulary.map((tv) => (
              <span
                key={tv}
                className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md font-mono border border-slate-700"
              >
                {tv}
              </span>
            ))}
          </div>
        </div>

        {/* Scaffolding Suggestions */}
        {scaffoldingLevel !== 'low' && (
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400">Suggested Sentence Patterns:</span>
            <div className="grid grid-cols-1 gap-2">
              {turn.suggestedResponses
                .filter((s) => scaffoldingLevel === 'high' || s.scaffoldingLevel !== 'high')
                .map((sugg, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSuggested(sugg.text)}
                    className="p-3 bg-slate-800/80 hover:bg-slate-750 text-left rounded-2xl border border-slate-700/80 transition flex items-center justify-between group"
                  >
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">
                        {sugg.label}
                      </span>
                      <p className="text-xs font-medium text-slate-200 group-hover:text-white">"{sugg.text}"</p>
                    </div>
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-1 rounded-lg">Use</span>
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. Live Speech Recording & Transcript Box */}
      <div className="space-y-3">
        <div className="relative">
          <textarea
            value={manualTranscript}
            onChange={(e) => {
              interactedRef.current = true;
              setShowHints(false);
              setManualTranscript(e.target.value);
            }}
            placeholder={
              isListening
                ? 'Listening... Speak clearly into your microphone...'
                : 'Tap the microphone to speak your response, or type here...'
            }
            rows={3}
            className="w-full bg-slate-950 border border-slate-750 rounded-2xl p-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none transition"
          />

          {isListening && (
            <div className="absolute top-3 right-3 flex items-center space-x-2 bg-rose-500/20 text-rose-400 px-2.5 py-1 rounded-xl border border-rose-500/30 animate-pulse text-[11px] font-black">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>RECORDING</span>
            </div>
          )}
        </div>

        {speechError && (
          <div className="bg-amber-950/40 border border-amber-500/40 rounded-2xl p-3 flex items-start space-x-2.5 text-xs text-amber-300">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold">{speechError}</p>
              <p className="text-[11px] text-amber-400/80 mt-0.5">
                You can still type or edit your response above and submit for complete local evaluation.
              </p>
            </div>
          </div>
        )}

        {/* GEM-1: Smart Hint Pills — appear after 4s of silence, hide on any interaction */}
        {showHints && !manualTranscript && !isListening && hintTexts.length > 0 && (
          <div className="space-y-1.5 animate-fade-in">
            <div className="flex items-center space-x-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                💡 Stuck? Tap a starter
              </span>
              {hintsFromAi && (
                <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  ✨ AI
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {hintTexts.map((hint, idx) => (
                <button
                  key={idx}
                  onClick={() => handleUseHint(hint)}
                  className="px-3 py-2 rounded-2xl text-xs font-bold text-left bg-amber-500/10 hover:bg-amber-500/20 text-amber-200 border border-amber-500/30 transition cursor-pointer btn-press"
                >
                  “{hint}”
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={isListening ? handleStopListening : handleStartListening}
            className={`flex-1 py-3.5 rounded-2xl font-black text-sm transition shadow-lg flex items-center justify-center space-x-2 ${
              isListening
                ? 'bg-rose-500 hover:bg-rose-400 text-white animate-pulse'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
            }`}
          >
            {isListening ? (
              <>
                <MicOff className="w-5 h-5" />
                <span>Stop Recording</span>
              </>
            ) : (
              <>
                <Mic className="w-5 h-5" />
                <span>Tap to Speak</span>
              </>
            )}
          </button>

          <button
            onClick={() => handleSubmitResponse()}
            disabled={!manualTranscript.trim()}
            className={`px-6 py-3.5 rounded-2xl font-black text-sm transition shadow-lg flex items-center space-x-2 ${
              manualTranscript.trim()
                ? 'bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-750'
                : 'bg-slate-850 text-slate-600 border border-slate-800 cursor-not-allowed'
            }`}
          >
            <span>Submit</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
