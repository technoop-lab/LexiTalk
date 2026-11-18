import React, { useState } from 'react';
import {
  ConversationDefinition,
  ConversationTurn,
  TurnEvaluationResult,
} from '../../types/conversation';
import { ConversationRegistryService } from '../../data/conversations';
import { SpeechService } from '../../services/speech/SpeechService';
import { ConversationProgressService } from '../../services/conversation/ConversationProgressService';
import {
  Bug,
  Zap,
  Radio,
  Trash2,
} from 'lucide-react';

interface ConversationDebuggerProps {
  conversation: ConversationDefinition;
  currentTurn?: ConversationTurn;
  activeState: string;
  lastEvaluation?: TurnEvaluationResult | null;
  onJumpState: (state: any) => void;
  onJumpTurn: (turnIndex: number) => void;
  onForceSubmit: (transcript: string) => void;
  onSelectConversation: (convId: string) => void;
}

export const ConversationDebugger: React.FC<ConversationDebuggerProps> = ({
  conversation,
  currentTurn,
  activeState,
  lastEvaluation,
  onJumpState,
  onJumpTurn,
  onForceSubmit,
  onSelectConversation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [simulatedOffline, setSimulatedOffline] = useState(false);
  const [useMock, setUseMock] = useState(SpeechService.isUsingMock());

  const mockProvider = SpeechService.getMockDevProvider();

  const handleToggleMock = (enabled: boolean) => {
    setUseMock(enabled);
    SpeechService.setUseMockProvider(enabled);
  };

  const handleToggleOfflineSim = (offline: boolean) => {
    setSimulatedOffline(offline);
    mockProvider.setSimulateUnavailable(offline);
  };

  const handleClearProgress = () => {
    ConversationProgressService.resetProgress(conversation.id);
    alert(`Reset progress for ${conversation.id}`);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-amber-500 hover:bg-amber-400 text-slate-950 px-3.5 py-2 rounded-2xl font-black text-xs shadow-2xl flex items-center space-x-2 border-2 border-amber-300 transition"
      >
        <Bug className="w-4 h-4" />
        <span>Dev Conversation Debugger</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-900 border-2 border-amber-500/70 rounded-3xl p-5 w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl space-y-4 text-slate-200 text-xs">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center space-x-2 text-amber-400 font-black">
          <Bug className="w-4 h-4" />
          <span>Conversation Lab Inspector</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-slate-400 hover:text-white font-black text-xs px-2 py-1 bg-slate-800 rounded-lg"
        >
          Close
        </button>
      </div>

      {/* Conversation Switcher */}
      <div className="space-y-1.5">
        <span className="font-black text-slate-400 uppercase tracking-wider text-[10px]">Active Conversation:</span>
        <div className="flex space-x-2">
          {ConversationRegistryService.getAllConversations().map((c) => (
            <button
              key={c.id}
              onClick={() => onSelectConversation(c.id)}
              className={`px-3 py-1.5 rounded-xl font-black text-xs transition border ${
                conversation.id === c.id
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
              }`}
            >
              [{c.cefr}] {c.title.split(' ')[0]}...
            </button>
          ))}
        </div>
      </div>

      {/* State & Phase Jumper */}
      <div className="space-y-1.5">
        <span className="font-black text-slate-400 uppercase tracking-wider text-[10px]">
          Jump Phase (Current: {activeState}):
        </span>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { id: 'INTRO', label: '1. Intro' },
            { id: 'TEACH', label: '2. Teach' },
            { id: 'EXAMPLES', label: '3. Examples' },
            { id: 'CONTROLLED_PRACTICE', label: '4. Practice' },
            { id: 'SENTENCE_CONSTRUCTION', label: '5. Construct' },
            { id: 'CONVERSATION_RUNNER', label: '6. Spoken Turns' },
            { id: 'SUMMARY', label: '7. Summary' },
          ].map((st) => (
            <button
              key={st.id}
              onClick={() => onJumpState(st.id)}
              className={`p-1.5 rounded-lg text-[10px] font-bold border transition ${
                activeState === st.id
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>

      {/* Turn Jumper */}
      {conversation.turns && (
        <div className="space-y-1.5">
          <span className="font-black text-slate-400 uppercase tracking-wider text-[10px]">
            Jump Turn (Current: {currentTurn?.turnIndex || 1} of {conversation.turns.length}):
          </span>
          <div className="flex space-x-1.5">
            {conversation.turns.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => onJumpTurn(idx)}
                className={`flex-1 py-1 rounded-lg text-[11px] font-black border transition ${
                  currentTurn?.id === t.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                }`}
              >
                Turn {idx + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick Force Response Simulations */}
      {currentTurn && (
        <div className="space-y-1.5 bg-slate-850 p-3 rounded-2xl border border-slate-800">
          <span className="font-black text-amber-400 uppercase tracking-wider text-[10px] flex items-center space-x-1">
            <Zap className="w-3 h-3" />
            <span>Force Response Simulation:</span>
          </span>

          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => onForceSubmit(currentTurn.suggestedResponses[0]?.text || 'Yes, I agree.')}
              className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 rounded-xl font-bold text-left"
            >
              ✅ Force Correct (High)
            </button>

            <button
              onClick={() =>
                onForceSubmit(
                  currentTurn.suggestedResponses[1]?.text ||
                    'My name is Rahul and I come from India. Nice to meet you.'
                )
              }
              className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 rounded-xl font-bold text-left"
            >
              ✨ Force Alternative
            </button>

            <button
              onClick={() => onForceSubmit('I am agree with that and I am live in Chicago.')}
              className="p-2 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 rounded-xl font-bold text-left"
            >
              ⚠️ Force Grammar Error
            </button>

            <button
              onClick={() => onForceSubmit('')}
              className="p-2 bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700 rounded-xl font-bold text-left"
            >
              ⭕ Force Empty Response
            </button>
          </div>
        </div>
      )}

      {/* Speech Provider & Offline Simulation Controls */}
      <div className="space-y-2 bg-slate-850 p-3 rounded-2xl border border-slate-800">
        <span className="font-black text-slate-400 uppercase tracking-wider text-[10px] flex items-center space-x-1">
          <Radio className="w-3 h-3 text-sky-400" />
          <span>Speech Recognition Simulation:</span>
        </span>

        <div className="flex items-center justify-between text-slate-300 text-[11px]">
          <span>Use Mock Test Provider:</span>
          <button
            onClick={() => handleToggleMock(!useMock)}
            className={`px-2.5 py-1 rounded-lg font-bold transition ${
              useMock ? 'bg-sky-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
            }`}
          >
            {useMock ? 'ENABLED' : 'DISABLED'}
          </button>
        </div>

        <div className="flex items-center justify-between text-slate-300 text-[11px]">
          <span>Simulate Offline Speech Unavailable:</span>
          <button
            onClick={() => handleToggleOfflineSim(!simulatedOffline)}
            className={`px-2.5 py-1 rounded-lg font-bold transition ${
              simulatedOffline ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
            }`}
          >
            {simulatedOffline ? 'OFFLINE' : 'ONLINE'}
          </button>
        </div>
      </div>

      {/* Live NLP Evaluation Inspector */}
      {lastEvaluation && (
        <div className="space-y-1.5 bg-slate-950 p-3 rounded-2xl border border-slate-800 font-mono text-[11px]">
          <div className="flex items-center justify-between text-amber-400 font-black">
            <span>Last Evaluation Result:</span>
            <span>{lastEvaluation.overallSuccess ? 'PASS ✅' : 'FAIL ❌'}</span>
          </div>

          <div className="space-y-1 text-slate-300">
            <p>
              <span className="text-slate-500">Raw:</span> "{lastEvaluation.rawTranscript}"
            </p>
            <p>
              <span className="text-slate-500">Norm:</span> "{lastEvaluation.normalizedTranscript}"
            </p>
            <p>
              <span className="text-slate-500">Scores:</span> Comm:{lastEvaluation.communicationScore} | Gram:
              {lastEvaluation.grammarScore} | Vocab:{lastEvaluation.vocabularyScore} | Inter:
              {lastEvaluation.interactionScore}
            </p>
            <p>
              <span className="text-slate-500">Errors Detected:</span> {lastEvaluation.detectedErrors.length}
            </p>
            <p>
              <span className="text-slate-500">Requires Retry:</span> {lastEvaluation.requiresRetry ? 'YES' : 'NO'}
            </p>
          </div>
        </div>
      )}

      {/* Progress Actions */}
      <div className="flex justify-between items-center pt-1 border-t border-slate-800">
        <button
          onClick={handleClearProgress}
          className="flex items-center space-x-1 text-rose-400 hover:text-rose-300 font-bold text-[11px]"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Reset Progress Store</span>
        </button>
      </div>
    </div>
  );
};
