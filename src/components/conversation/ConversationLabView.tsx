import React, { useState, useEffect } from 'react';
import {
  ConversationDefinition,
  ConversationState,
  TurnEvaluationResult,
  ConversationProgressRecord,
  UserAcademyProfile,
} from '../../types';
import { ConversationRegistryService } from '../../data/conversations';
import { ConversationTurnRunner } from './ConversationTurnRunner';
import { ConversationFeedbackModal } from './ConversationFeedbackModal';
import { ConversationDebugger } from './ConversationDebugger';
import { ConversationProgressService } from '../../services/conversation/ConversationProgressService';
import { ConversationEvaluationService } from '../../services/conversation/ConversationEvaluationService';
import { EntitlementService } from '../../services/EntitlementService';
import {
  MessageSquare,
  Sparkles,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  Volume2,
  Award,
  Clock,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { playSoundEffectEffect } from '../../utils/audioUtils';
import { AudioService } from '../../services/AudioService';

interface ConversationLabViewProps {
  user: UserAcademyProfile;
  onUpdateUser?: (updated: UserAcademyProfile) => void;
  onBackToApp?: () => void;
  initialConversationId?: string;
}

export const ConversationLabView: React.FC<ConversationLabViewProps> = ({
  user,
  onUpdateUser,
  onBackToApp,
  initialConversationId,
}) => {
  const [selectedConversation, setSelectedConversation] = useState<ConversationDefinition | null>(
    () => (initialConversationId ? ConversationRegistryService.getConversationById(initialConversationId) : null)
  );

  const [activeState, setActiveState] = useState<ConversationState>(
    selectedConversation ? 'INTRO' : 'CATALOG'
  );

  const [currentTurnIndex, setCurrentTurnIndex] = useState(0);
  const [turnResults, setTurnResults] = useState<TurnEvaluationResult[]>([]);
  const [activeEvaluation, setActiveEvaluation] = useState<TurnEvaluationResult | null>(null);
  const [isEvaluatingFeedback, setIsEvaluatingFeedback] = useState(false);

  // Controlled practice & sentence construction state
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, string>>({});
  const [constructionAnswers, setConstructionAnswers] = useState<Record<string, string[]>>({});
  const [constructionTyped, setConstructionTyped] = useState<Record<string, string>>({});

  // Session start time for analytics
  const [sessionStartTime, setSessionStartTime] = useState<number>(Date.now());
  const [progressStore, setProgressStore] = useState<Record<string, ConversationProgressRecord>>(() =>
    ConversationProgressService.getAllProgress()
  );

  const isDev = EntitlementService.isDeveloper(user);

  useEffect(() => {
    setProgressStore(ConversationProgressService.getAllProgress());
  }, [activeState]);

  const handleSelectConversation = (conv: ConversationDefinition) => {
    playSoundEffectEffect('tap');
    setSelectedConversation(conv);
    setActiveState('INTRO');
    setCurrentTurnIndex(0);
    setTurnResults([]);
    setActiveEvaluation(null);
    setSessionStartTime(Date.now());
  };

  const handleStartTurn = () => {
    playSoundEffectEffect('tap');
    setActiveState('CONVERSATION_RUNNER');
  };

  const handleTurnComplete = (result: TurnEvaluationResult) => {
    setActiveEvaluation(result);
    setIsEvaluatingFeedback(true);
  };

  const handleContinueAfterFeedback = () => {
    if (!selectedConversation || !activeEvaluation) return;

    const updatedResults = [...turnResults, activeEvaluation];
    setTurnResults(updatedResults);
    setIsEvaluatingFeedback(false);
    setActiveEvaluation(null);

    const nextIndex = currentTurnIndex + 1;
    if (nextIndex < selectedConversation.turns.length) {
      setCurrentTurnIndex(nextIndex);
    } else {
      // Completed all turns!
      const durationSec = Math.max(1, Math.round((Date.now() - sessionStartTime) / 1000));
      const passedCount = updatedResults.filter((r) => r.overallSuccess).length;
      const isMastered =
        passedCount >= selectedConversation.masteryCriteria.minTurnsPassed &&
        updatedResults.reduce((acc, r) => acc + r.communicationScore, 0) / updatedResults.length >=
          selectedConversation.masteryCriteria.minOverallScore;

      ConversationProgressService.recordAttempt(
        selectedConversation.id,
        selectedConversation.cefr,
        updatedResults,
        durationSec,
        isMastered
      );

      playSoundEffectEffect(isMastered ? 'victory' : 'correct');
      setActiveState('SUMMARY');

      if (onUpdateUser) {
        onUpdateUser({
          ...user,
          totalXp: user.totalXp + (isMastered ? 60 : 35),
          gems: user.gems + 15,
        });
      }
    }
  };

  const handleRetryTurn = () => {
    setIsEvaluatingFeedback(false);
    setActiveEvaluation(null);
  };

  const handleReplay = () => {
    playSoundEffectEffect('tap');
    setCurrentTurnIndex(0);
    setTurnResults([]);
    setActiveEvaluation(null);
    setSessionStartTime(Date.now());
    setActiveState('CONVERSATION_RUNNER');
  };

  const currentTurn = selectedConversation?.turns[currentTurnIndex];
  const activeProgress = selectedConversation ? progressStore[selectedConversation.id] : null;
  const replayComparison = selectedConversation
    ? ConversationProgressService.getReplayComparison(selectedConversation.id)
    : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 flex flex-col font-sans max-w-4xl w-full mx-auto space-y-6">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-3">
          {activeState !== 'CATALOG' ? (
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveState('CATALOG');
              }}
              className="flex items-center space-x-1.5 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Conversations</span>
            </button>
          ) : onBackToApp ? (
            <button
              onClick={onBackToApp}
              className="flex items-center space-x-1.5 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Academy</span>
            </button>
          ) : null}

          <div>
            <h1 className="text-lg sm:text-xl font-black text-white flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Conversation Lab</span>
            </h1>
            <p className="text-xs text-slate-400">
              Interactive Spoken Communication with Offline Evaluation & Feedback
            </p>
          </div>
        </div>

        {selectedConversation && activeState !== 'CATALOG' && (
          <div className="flex items-center space-x-2">
            <span className="text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-xl">
              CEFR {selectedConversation.cefr}
            </span>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 1. CATALOG VIEW */}
      {/* ========================================================================= */}
      {activeState === 'CATALOG' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-855 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-3 shadow-xl">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Spoken Interaction Training</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Communicative English Conversations
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Practice natural, open spoken communication with real-time feedback. Learn target
              vocabulary, study grammar patterns, build sentences, and speak into your microphone with
              multi-dimensional language evaluation.
            </p>
          </div>

          {/* Conversations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ConversationRegistryService.getAllConversations().map((conv) => {
              const prog = progressStore[conv.id];
              return (
                <div
                  key={conv.id}
                  onClick={() => handleSelectConversation(conv)}
                  className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-5 space-y-4 cursor-pointer transition shadow-lg group hover:shadow-emerald-500/5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black bg-slate-800 text-emerald-400 border border-slate-700 px-2.5 py-1 rounded-xl">
                        {conv.cefr} Level
                      </span>
                      <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-bold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>~{conv.estimatedMinutes} mins</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-black text-white group-hover:text-emerald-300 transition">
                        {conv.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {conv.scenario}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-slate-400 pt-1">
                      <span className="text-base">{conv.characters[0]?.avatar}</span>
                      <span className="font-bold text-slate-300">{conv.characters[0]?.name}</span>
                      <span>•</span>
                      <span>{conv.turns.length} conversational turns</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between">
                    <div>
                      {prog?.isMastered ? (
                        <span className="text-[11px] font-black text-emerald-400 flex items-center space-x-1 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                          <Award className="w-3.5 h-3.5" />
                          <span>Mastered ({prog.bestScore}%)</span>
                        </span>
                      ) : prog?.attemptsCount ? (
                        <span className="text-[11px] font-bold text-amber-400">
                          Attempted ({prog.attemptsCount}x) • Best: {prog.bestScore}%
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-slate-500">Not yet started</span>
                      )}
                    </div>

                    <button className="flex items-center space-x-1 text-xs font-black text-emerald-400 group-hover:translate-x-1 transition">
                      <span>Start</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. INTRO VIEW */}
      {/* ========================================================================= */}
      {activeState === 'INTRO' && selectedConversation && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 space-y-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">
              Step 1 • Scenario & Communicative Goals
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">{selectedConversation.title}</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-850 p-4 rounded-2xl border border-slate-800">
              {selectedConversation.scenario}
            </p>
          </div>

          {/* Communicative Goals Checklist */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider">
              What you will practice:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedConversation.communicativeGoals.map((goal, idx) => (
                <div
                  key={idx}
                  className="bg-slate-850/80 p-3 rounded-2xl border border-slate-800 flex items-start space-x-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-200">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partner & Structure Details */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-850 p-4 rounded-2xl border border-slate-800 text-xs">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{selectedConversation.characters[0]?.avatar}</span>
              <div>
                <p className="font-bold text-white">{selectedConversation.characters[0]?.name}</p>
                <p className="text-[11px] text-slate-400">{selectedConversation.characters[0]?.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-slate-300 font-medium text-[11px]">
              <span>⏱ ~{selectedConversation.estimatedMinutes} Minutes</span>
              <span>🗣 {selectedConversation.turns.length} Spoken Turns</span>
              <span>🎯 Mastery: {selectedConversation.masteryCriteria.minOverallScore}%</span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setActiveState('TEACH');
            }}
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-2xl transition shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Learn Language Toolkit (Step 2)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. TEACH VIEW */}
      {/* ========================================================================= */}
      {activeState === 'TEACH' && selectedConversation && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 space-y-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">
              Step 2 • Language Toolkit & Grammar Breakdown
            </span>
            <h2 className="text-xl font-black text-white">Target Vocabulary & Useful Expressions</h2>
          </div>

          {/* Key Vocabulary Cards */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider">
              Key Target Vocabulary:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedConversation.teach.keyVocabulary.map((v, idx) => (
                <div
                  key={idx}
                  className="bg-slate-850 p-3.5 rounded-2xl border border-slate-800 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-black text-emerald-300">{v.word}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{v.ipa}</span>
                    </div>
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md font-bold">
                      {v.partOfSpeech}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{v.meaning}</p>
                  <p className="text-[11px] text-slate-400 italic">"{v.exampleSentence}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Useful Chunks */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider">
              Useful Conversational Chunks:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedConversation.teach.usefulChunks.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-slate-850 p-3.5 rounded-2xl border border-slate-800 space-y-1"
                >
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    {c.functionCategory}
                  </span>
                  <p className="text-xs font-black text-white">"{c.phrase}"</p>
                  <p className="text-[11px] text-slate-400">Example: {c.exampleSentence}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Grammar Breakdown & Contrast Box */}
          <div className="bg-slate-850 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-black uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>{selectedConversation.teach.grammar.title}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedConversation.teach.grammar.conceptExplanation}
            </p>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-750 font-mono text-xs text-emerald-300">
              Formula: {selectedConversation.teach.grammar.patternFormula}
            </div>

            {/* Contrast Examples */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold text-slate-400">Common Mistake Prevention:</span>
              {selectedConversation.teach.grammar.contrastExamples.map((ex, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 p-3 rounded-xl border border-slate-750 text-xs space-y-1"
                >
                  <div className="flex items-center space-x-2 text-rose-400">
                    <span>❌</span>
                    <span className="line-through">{ex.incorrect}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                    <span>✅</span>
                    <span>{ex.correct}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{ex.explanation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex space-x-3">
            <button
              onClick={() => setActiveState('INTRO')}
              className="py-3 px-5 bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs rounded-2xl transition"
            >
              Back
            </button>
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveState('EXAMPLES');
              }}
              className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-2xl transition shadow-lg flex items-center justify-center space-x-2"
            >
              <span>See Real Examples (Step 3)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. EXAMPLES VIEW */}
      {/* ========================================================================= */}
      {activeState === 'EXAMPLES' && selectedConversation && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 space-y-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">
              Step 3 • Real Dialogue Model
            </span>
            <h2 className="text-xl font-black text-white">How Native Speakers Communicate</h2>
            <p className="text-xs text-slate-300">
              Listen to realistic model turns to internalize natural tone, cadence, and structure.
            </p>
          </div>

          <div className="space-y-3">
            {selectedConversation.teach.dialogueExamples.map((ex, idx) => (
              <div
                key={idx}
                className="bg-slate-850 p-4 rounded-2xl border border-slate-800 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-400">{ex.speaker}</span>
                  <button
                    onClick={() => {
                      AudioService.playDialogue(ex.text, {
                        lessonId: selectedConversation.id,
                        dialogueId: `example_${idx}`,
                      });
                    }}
                    className="p-1.5 bg-slate-800 text-emerald-400 rounded-lg hover:bg-slate-750 transition active:scale-95"
                    title="Play Audio"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-sm font-semibold text-slate-100">"{ex.text}"</p>
                <p className="text-xs text-slate-400 italic">{ex.translation}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => setActiveState('TEACH')}
              className="py-3 px-5 bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs rounded-2xl transition"
            >
              Back
            </button>
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveState('CONTROLLED_PRACTICE');
              }}
              className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-2xl transition shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Mini Practice (Step 4)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. CONTROLLED PRACTICE VIEW */}
      {/* ========================================================================= */}
      {activeState === 'CONTROLLED_PRACTICE' && selectedConversation && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 space-y-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">
              Step 4 • Controlled Mini Practice
            </span>
            <h2 className="text-xl font-black text-white">Check Your Understanding</h2>
            <p className="text-xs text-slate-300">
              Reinforce the key structures before open spoken conversation.
            </p>
          </div>

          <div className="space-y-4">
            {selectedConversation.controlledPractice.map((task, idx) => {
              const selected = practiceAnswers[task.id];
              return (
                <div
                  key={task.id}
                  className="bg-slate-850 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3"
                >
                  <span className="text-[10px] font-black text-slate-400 uppercase">
                    Practice Task {idx + 1}
                  </span>
                  <p className="text-sm font-bold text-slate-100">{task.prompt}</p>

                  {task.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {task.options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setPracticeAnswers({ ...practiceAnswers, [task.id]: opt.text });
                            playSoundEffectEffect(opt.isCorrect ? 'correct' : 'wrong');
                          }}
                          className={`p-3 rounded-xl text-xs font-bold transition border text-left ${
                            selected === opt.text
                              ? opt.isCorrect
                                ? 'bg-emerald-600 text-white border-emerald-400'
                                : 'bg-rose-600 text-white border-rose-400'
                              : 'bg-slate-900 border-slate-750 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>
                  )}

                  {selected && (
                    <p className="text-xs text-slate-400 pt-1">
                      💡 <span className="font-semibold text-slate-300">Rule:</span> {task.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => setActiveState('EXAMPLES')}
              className="py-3 px-5 bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs rounded-2xl transition"
            >
              Back
            </button>
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveState('SENTENCE_CONSTRUCTION');
              }}
              className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-2xl transition shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Sentence Construction (Step 5)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. SENTENCE CONSTRUCTION VIEW */}
      {/* ========================================================================= */}
      {activeState === 'SENTENCE_CONSTRUCTION' && selectedConversation && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 space-y-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">
              Step 5 • Sentence Construction
            </span>
            <h2 className="text-xl font-black text-white">Construct Your Own Sentences</h2>
            <p className="text-xs text-slate-300">
              Build sentences from scratch to prepare for fluent conversational speaking.
            </p>
          </div>

          <div className="space-y-4">
            {selectedConversation.sentenceConstruction.map((sc, idx) => {
              const currentTokens = constructionAnswers[sc.id] || [];

              const handleAddWord = (word: string) => {
                playSoundEffectEffect('tap');
                const updated = [...currentTokens, word];
                setConstructionAnswers({ ...constructionAnswers, [sc.id]: updated });
                setConstructionTyped({ ...constructionTyped, [sc.id]: updated.join(' ') });
              };

              const handleRemoveWord = (index: number) => {
                playSoundEffectEffect('tap');
                const updated = currentTokens.filter((_, i) => i !== index);
                setConstructionAnswers({ ...constructionAnswers, [sc.id]: updated });
                setConstructionTyped({ ...constructionTyped, [sc.id]: updated.join(' ') });
              };

              return (
                <div
                  key={sc.id}
                  className="bg-slate-850 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3"
                >
                  <span className="text-[10px] font-black text-slate-400 uppercase">
                    Construction Task {idx + 1}
                  </span>
                  <p className="text-xs font-bold text-slate-300">{sc.scenarioContext}</p>
                  <p className="text-sm font-black text-white">{sc.prompt}</p>

                  {/* Assembled Sentence Display */}
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-750 min-h-[50px] flex flex-wrap items-center gap-1.5">
                    {currentTokens.length === 0 ? (
                      <span className="text-xs text-slate-500 italic">
                        Tap words below to assemble your sentence...
                      </span>
                    ) : (
                      currentTokens.map((token, tIdx) => (
                        <button
                          key={tIdx}
                          onClick={() => handleRemoveWord(tIdx)}
                          className="px-2.5 py-1 bg-emerald-500 text-slate-950 font-bold text-xs rounded-lg hover:bg-rose-500 hover:text-white transition"
                          title="Tap to remove"
                        >
                          {token}
                        </button>
                      ))
                    )}
                  </div>

                  {/* Word Bank */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Word Bank:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {sc.wordBank.map((word, wIdx) => (
                        <button
                          key={wIdx}
                          onClick={() => handleAddWord(word)}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium transition"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => setActiveState('CONTROLLED_PRACTICE')}
              className="py-3 px-5 bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs rounded-2xl transition"
            >
              Back
            </button>
            <button
              onClick={handleStartTurn}
              className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-2xl transition shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Start Spoken Conversation (Step 6)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. CONVERSATION RUNNER (Spoken Turns & Mic) */}
      {/* ========================================================================= */}
      {activeState === 'CONVERSATION_RUNNER' && selectedConversation && currentTurn && (
        <div className="space-y-4">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-800">
            <span>
              Turn {currentTurnIndex + 1} of {selectedConversation.turns.length}
            </span>
            <div className="flex space-x-1">
              {selectedConversation.turns.map((t, idx) => (
                <div
                  key={t.id}
                  className={`w-5 h-2 rounded-full transition ${
                    idx < currentTurnIndex
                      ? 'bg-emerald-500'
                      : idx === currentTurnIndex
                      ? 'bg-amber-400 animate-pulse'
                      : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>
            <span>Function: {currentTurn.expectedFunction}</span>
          </div>

          {/* Active Turn Runner */}
          <ConversationTurnRunner
            turn={currentTurn}
            character={selectedConversation.characters[0]}
            cefr={selectedConversation.cefr}
            onTurnComplete={handleTurnComplete}
          />

          {/* Feedback Modal */}
          {isEvaluatingFeedback && activeEvaluation && (
            <ConversationFeedbackModal
              turn={currentTurn}
              evaluation={activeEvaluation}
              onContinue={handleContinueAfterFeedback}
              onRetry={handleRetryTurn}
            />
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. SUMMARY / MASTERY VIEW */}
      {/* ========================================================================= */}
      {activeState === 'SUMMARY' && selectedConversation && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 space-y-6 shadow-xl text-center">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-3xl flex items-center justify-center mx-auto text-3xl shadow-lg">
            🏆
          </div>

          <div className="space-y-2">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">
              Conversation Session Complete!
            </span>
            <h2 className="text-2xl font-black text-white">{selectedConversation.title}</h2>
            <p className="text-xs text-slate-400">
              You completed all {selectedConversation.turns.length} communicative turns.
            </p>
          </div>

          {/* Score & Mastery Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="bg-slate-850 p-4 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Comm. Score</span>
              <p className="text-xl font-black text-emerald-400">
                {turnResults.length > 0
                  ? Math.round(
                      turnResults.reduce((acc, r) => acc + r.communicationScore, 0) / turnResults.length
                    )
                  : 100}
                %
              </p>
            </div>

            <div className="bg-slate-850 p-4 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Words Spoken</span>
              <p className="text-xl font-black text-white">
                {turnResults.reduce(
                  (acc, r) => acc + r.normalizedTranscript.split(' ').filter(Boolean).length,
                  0
                )}
              </p>
            </div>

            <div className="bg-slate-850 p-4 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Target Vocab</span>
              <p className="text-xl font-black text-amber-400">
                {Array.from(new Set(turnResults.flatMap((r) => r.matchedVocab))).length}
              </p>
            </div>

            <div className="bg-slate-850 p-4 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Mastery</span>
              <p className="text-xl font-black text-emerald-400">
                {activeProgress?.isMastered ? 'PASSED ✅' : 'ACTIVE 🎯'}
              </p>
            </div>
          </div>

          {/* Replay Improvement Comparison (if multiple attempts) */}
          {replayComparison?.latestAttempt && replayComparison.firstAttempt && (
            <div className="bg-slate-850 p-4 sm:p-5 rounded-2xl border border-slate-800 text-left space-y-3">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-black uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Replay Comparison & Fluency Growth</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-750">
                  <span className="text-slate-400 font-bold">First Attempt:</span>
                  <p className="text-sm font-black text-slate-200 mt-0.5">
                    Score: {replayComparison.firstAttempt.communicationScore}% ({replayComparison.firstAttempt.totalWordsProduced} words)
                  </p>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-750">
                  <span className="text-slate-400 font-bold">Latest Attempt:</span>
                  <p className="text-sm font-black text-emerald-400 mt-0.5">
                    Score: {replayComparison.latestAttempt.communicationScore}% ({replayComparison.latestAttempt.totalWordsProduced} words)
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-2">
            <button
              onClick={handleReplay}
              className="flex-1 py-3.5 bg-slate-800 hover:bg-slate-750 text-slate-200 font-black text-xs sm:text-sm rounded-2xl transition border border-slate-700 flex items-center justify-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again (Replay)</span>
            </button>

            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveState('CATALOG');
              }}
              className="flex-1 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm rounded-2xl transition shadow-lg flex items-center justify-center space-x-2"
            >
              <span>More Conversations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DEVELOPER / TESTER DEBUGGER PANEL */}
      {/* ========================================================================= */}
      {isDev && selectedConversation && (
        <ConversationDebugger
          conversation={selectedConversation}
          currentTurn={currentTurn}
          activeState={activeState}
          lastEvaluation={activeEvaluation}
          onJumpState={(state) => setActiveState(state)}
          onJumpTurn={(turnIdx) => {
            setCurrentTurnIndex(turnIdx);
            setActiveState('CONVERSATION_RUNNER');
          }}
          onForceSubmit={(transcript) => {
            if (currentTurn) {
              setActiveState('CONVERSATION_RUNNER');
              const evalRes = ConversationEvaluationService.evaluateTurn(currentTurn, transcript, {
                cefr: selectedConversation.cefr,
              });
              handleTurnComplete(evalRes);
            }
          }}
          onSelectConversation={(convId) => {
            const conv = ConversationRegistryService.getConversationById(convId);
            if (conv) handleSelectConversation(conv);
          }}
        />
      )}
    </div>
  );
};
