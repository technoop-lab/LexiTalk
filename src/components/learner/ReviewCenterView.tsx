import React, { useState } from 'react';
import {
  RotateCcw,
  Check,
  Sparkles,
  AlertCircle,
  BookOpen,
  Volume2,
  ShieldCheck,
  Flame,
  Zap,
  Play,
  ArrowRight,
  Trophy,
  Filter
} from 'lucide-react';
import { UserAcademyProfile, Exercise, UnitReviewDomainId } from '../../types';
import { UNIT_1_REVIEW_DOMAINS } from '../../data/unit1KnowledgeGraph';
import { UNIT_1_REVIEW_EXERCISES } from '../../data/unit1ReviewData';
import { ExerciseRenderer } from '../lesson/ExerciseRenderer';
import { ProgressService } from '../../services/ProgressService';
import { AudioService } from '../../services/AudioService';
import { playSoundEffectEffect } from '../../utils/audioUtils';
import { normalizeExercise } from '../../utils/exerciseUtils';
import { getDialogueScripts } from '../../data/skills/skillSources';

interface ReviewCenterViewProps {
  user: UserAcademyProfile;
  onStartLessonReview: () => void;
  onUpdateUser?: (updated: UserAcademyProfile) => void;
}

export const ReviewCenterView: React.FC<ReviewCenterViewProps> = ({
  user,
  onStartLessonReview,
  onUpdateUser,
}) => {
  const [activeTab, setActiveTab] = useState<'domains' | 'adaptive' | 'spaced_vocab' | 'mistakes' | 'dialogues'>('domains');
  const [openDialogueId, setOpenDialogueId] = useState<string | null>(null);
  const dialogueScripts = React.useMemo(() => getDialogueScripts(), []);
  const [activeSession, setActiveSession] = useState<{
    domainId: string;
    domainTitle: string;
    exercises: Exercise[];
    currentIndex: number;
    score: number;
    hasAnswered: boolean;
    isFinished: boolean;
  } | null>(null);

  const masteryRecord = ProgressService.calculateUnit1Mastery(user);

  // Helper to start a review domain session
  const startDomainSession = (domainId: UnitReviewDomainId, domainTitle: string) => {
    playSoundEffectEffect('tap');
    let exercises: Exercise[] = [];

    if (domainId === 'vocab_retrieval') {
      exercises = UNIT_1_REVIEW_EXERCISES.filter((e) => e.id.startsWith('u1_rev_voc_'));
    } else if (domainId === 'grammar_retrieval') {
      exercises = UNIT_1_REVIEW_EXERCISES.filter((e) => e.id.startsWith('u1_rev_grm_'));
    } else if (domainId === 'sentence_construction') {
      exercises = UNIT_1_REVIEW_EXERCISES.filter((e) => e.id.startsWith('u1_rev_sc_'));
    } else if (domainId === 'listening_retrieval') {
      exercises = UNIT_1_REVIEW_EXERCISES.filter((e) => e.id.startsWith('u1_rev_lis_'));
    } else if (domainId === 'speaking_retrieval') {
      exercises = UNIT_1_REVIEW_EXERCISES.filter((e) => e.id.startsWith('u1_rev_spk_'));
    } else if (domainId === 'reading_retrieval') {
      exercises = UNIT_1_REVIEW_EXERCISES.filter((e) => e.id.startsWith('u1_rev_rd_'));
    } else if (domainId === 'writing_retrieval') {
      exercises = UNIT_1_REVIEW_EXERCISES.filter((e) => e.id.startsWith('u1_rev_wri_'));
    } else if (domainId === 'communicative_functions') {
      exercises = UNIT_1_REVIEW_EXERCISES.filter((e) => e.id.startsWith('u1_rev_com_'));
    } else if (domainId === 'error_correction') {
      exercises = UNIT_1_REVIEW_EXERCISES.filter((e) => e.id.startsWith('u1_rev_err_'));
    } else {
      exercises = UNIT_1_REVIEW_EXERCISES.filter((e) => e.id.startsWith('u1_rev_mix_'));
    }

    // No fallback to another domain's items: that would show the wrong content under this title.

    setActiveSession({
      domainId,
      domainTitle,
      exercises: exercises.map(normalizeExercise),
      currentIndex: 0,
      score: 0,
      hasAnswered: false,
      isFinished: false,
    });
  };

  // Helper to start an adaptive weakness drill
  const startAdaptiveSession = () => {
    playSoundEffectEffect('tap');
    const adaptiveExercises = ProgressService.getAdaptiveReviewExercises(user, 6);
    setActiveSession({
      domainId: 'adaptive_weakness',
      domainTitle: 'Targeted Weakness Reinforcement',
      exercises: adaptiveExercises.map(normalizeExercise),
      currentIndex: 0,
      score: 0,
      hasAnswered: false,
      isFinished: false,
    });
  };

  const handleAnswerSubmit = (isCorrect: boolean) => {
    if (!activeSession) return;
    setActiveSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        hasAnswered: true,
        score: isCorrect ? prev.score + 1 : prev.score,
      };
    });
  };

  const handleNextQuestion = () => {
    if (!activeSession) return;
    playSoundEffectEffect('tap');

    if (activeSession.currentIndex < activeSession.exercises.length - 1) {
      setActiveSession((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          currentIndex: prev.currentIndex + 1,
          hasAnswered: false,
        };
      });
    } else {
      // Finished session
      playSoundEffectEffect('victory');
      setActiveSession((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          isFinished: true,
        };
      });

      const updatedUser = ProgressService.recordUnit1ReviewCompletion(
        activeSession.domainId,
        activeSession.score,
        activeSession.exercises.length
      );
      if (onUpdateUser) onUpdateUser(updatedUser);
    }
  };

  // If inside an active review drill session
  if (activeSession) {
    if (activeSession.isFinished) {
      return (
        <div className="p-6 max-w-md mx-auto text-center space-y-4 bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl shadow-sm dark:shadow-2xl my-8 text-slate-900 dark:text-slate-100">
          <div className="w-16 h-16 mx-auto rounded-full bg-purple-50 dark:bg-purple-500/20 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-3xl">
            🎉
          </div>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">Review Drill Completed!</h2>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            You scored <span className="font-bold text-purple-600 dark:text-purple-400">{activeSession.score} / {activeSession.exercises.length}</span> in{' '}
            <span className="font-bold text-slate-900 dark:text-white">{activeSession.domainTitle}</span>.
          </p>
          <div className="p-3 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 rounded-2xl text-xs font-bold text-purple-800 dark:text-purple-300">
            +{60 + activeSession.score * 5} XP Earned • Spaced Retrieval Reinforced
          </div>

          <div className="flex space-x-2 pt-2">
            <button
              onClick={() => setActiveSession(null)}
              className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-2xl transition border border-[#D9E4FF] dark:border-transparent cursor-pointer"
            >
              Back to Review Hub
            </button>
            <button
              onClick={() => activeSession.domainId === 'adaptive_weakness' ? startAdaptiveSession() : startDomainSession(activeSession.domainId as any, activeSession.domainTitle)}
              className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black text-xs rounded-2xl shadow hover:brightness-110 transition cursor-pointer"
            >
              Drill Again
            </button>
          </div>
        </div>
      );
    }

    const currentEx = activeSession.exercises[activeSession.currentIndex];

    if (!currentEx) {
      return (
        <div className="p-6 max-w-md mx-auto text-center space-y-4 bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl shadow-sm my-8 text-slate-900 dark:text-slate-100">
          <p className="text-sm">No questions are ready for this drill yet.</p>
          <button
            onClick={() => setActiveSession(null)}
            className="w-full py-3 bg-slate-100 dark:bg-slate-800 rounded-2xl font-bold text-xs cursor-pointer"
          >
            Back to Review Hub
          </button>
        </div>
      );
    }

    return (
      <div className="flex flex-col space-y-5 p-4 sm:p-6 pb-24 text-slate-900 dark:text-slate-100 max-w-xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400 block">
              {activeSession.domainTitle}
            </span>
            <h3 className="text-sm font-black text-slate-900 dark:text-white">
              Item {activeSession.currentIndex + 1} of {activeSession.exercises.length}
            </h3>
          </div>

          <button
            onClick={() => setActiveSession(null)}
            className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-2.5 py-1 bg-white dark:bg-slate-800 border border-[#D9E4FF] dark:border-transparent rounded-xl cursor-pointer"
          >
            Exit Drill
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 shadow-sm dark:shadow-2xl space-y-4">
          <ExerciseRenderer
            key={currentEx.id}
            exercise={currentEx}
            user={user}
            onAnswerSubmit={handleAnswerSubmit}
          />

          {activeSession.hasAnswered && (
            <button
              onClick={handleNextQuestion}
              className="w-full py-3.5 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-black text-xs uppercase rounded-2xl shadow-lg transition active:scale-95 mt-2 cursor-pointer"
            >
              {activeSession.currentIndex < activeSession.exercises.length - 1 ? 'Next Question →' : 'Complete Drill'}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-5 p-4 sm:p-6 pb-24 text-slate-900 dark:text-slate-100 max-w-xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-100 via-indigo-50 to-blue-50 dark:from-purple-950/80 dark:via-slate-900 dark:to-indigo-950/80 border border-[#D9E4FF] dark:border-purple-500/30 rounded-3xl p-5 shadow-sm dark:shadow-xl space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase text-purple-700 dark:text-purple-400 bg-purple-200/60 dark:bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-300 dark:border-purple-500/20">
            Unit 1 Spaced Retrieval Hub
          </span>
          <span className="text-xs font-black text-purple-700 dark:text-purple-300">
            {masteryRecord.reviewSessionsCompleted} Drills Completed
          </span>
        </div>

        <h2 className="text-xl font-black text-slate-900 dark:text-white">Unit 1 Consolidation & Review</h2>
        <p className="text-xs text-slate-600 dark:text-slate-300">
          Reinforce vocabulary, morphosyntax, listening, and communicative skills across Lessons 1–15.
        </p>

        {/* Quick Launch Adaptive Drill */}
        <div className="pt-2">
          <button
            onClick={startAdaptiveSession}
            className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs rounded-2xl shadow-lg flex items-center justify-center space-x-2 transition cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>Launch Targeted Adaptive Weakness Drill</span>
          </button>
        </div>
      </div>

      {/* Review Type Tabs */}
      <div className="grid grid-cols-5 gap-1.5 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-xs font-bold shadow-xs">
        {[
          { id: 'domains', label: '10 Domains' },
          { id: 'adaptive', label: 'Weaknesses' },
          { id: 'spaced_vocab', label: 'Vocab' },
          { id: 'mistakes', label: 'Pitfalls' },
          { id: 'dialogues', label: 'Dialogues' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              playSoundEffectEffect('tap');
              setActiveTab(tab.id as any);
            }}
            className={`py-2 rounded-xl transition cursor-pointer ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: 10 Structured Review Domains */}
      {activeTab === 'domains' && (
        <div className="space-y-3">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            10-Domain Cross-Lesson Review Modules
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {UNIT_1_REVIEW_DOMAINS.map((dom) => (
              <div
                key={dom.id}
                onClick={() => startDomainSession(dom.id, dom.title)}
                className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 hover:border-purple-500/50 p-4 rounded-3xl cursor-pointer transition shadow-xs dark:shadow-md flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{dom.icon}</span>
                    <span className="text-[10px] font-black text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 px-2 py-0.5 rounded-lg border border-purple-200 dark:border-transparent">
                      {dom.exerciseCount} Items
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition">
                    {dom.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {dom.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-[#E3EDFF] dark:border-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                  <span className="text-purple-600 dark:text-purple-400">CEFR A1</span>
                  <span className="text-purple-600 dark:text-purple-300 group-hover:translate-x-1 transition-transform">
                    Start Drill →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Adaptive Weaknesses */}
      {activeTab === 'adaptive' && (
        <div className="space-y-3">
          <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm dark:shadow-xl">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <h3 className="text-sm font-black text-slate-900 dark:text-white">Targeted Remediation Engine</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                The engine automatically detects challenging patterns from your exercise history and serves custom drill items.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              {masteryRecord.weakConcepts.length > 0 ? (
                masteryRecord.weakConcepts.map((w, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-950/90 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl flex items-center justify-between text-xs shadow-inner">
                    <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                      <AlertCircle className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{w}</span>
                    </span>
                    <span className="text-[10px] text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-500/10 px-2.5 py-0.5 rounded-lg font-bold border border-orange-200 dark:border-orange-500/20">
                      Identified Focus
                    </span>
                  </div>
                ))
              ) : (
                /* Premium Empty State */
                <div className="p-6 text-center text-xs space-y-2 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 rounded-3xl">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-300 dark:border-emerald-500/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300">No Major Weak Areas Detected</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px] max-w-xs mx-auto">
                    You have maintained strong accuracy across all fundamental Unit 1 skills and vocabulary!
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={startAdaptiveSession}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs rounded-2xl shadow-lg hover:brightness-110 transition btn-press cursor-pointer mt-2"
            >
              Start Weakness Practice Session (6 Items)
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Spaced Vocab */}
      {activeTab === 'spaced_vocab' && (
        <div className="space-y-2.5">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            High-Yield Unit 1 Lexicon (Lessons 1–15)
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { word: 'software engineer', meaning: 'Computer programmer', icon: '💻' },
              { word: 'architect', meaning: 'Building designer', icon: '📐' },
              { word: 'aunt / uncle', meaning: 'Family relations', icon: '👥' },
              { word: 'pharmacy', meaning: 'Medicine shop', icon: '💊' },
              { word: 'have breakfast', meaning: 'Morning meal routine', icon: '🍳' },
              { word: 'wake up early', meaning: 'Stop sleeping early', icon: '⏰' },
              { word: 'a cup of coffee', meaning: 'Beverage order', icon: '☕' },
              { word: 'speak fluently', meaning: 'High spoken ability', icon: '🗣️' },
            ].map((v, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 p-3 rounded-2xl flex items-center justify-between shadow-xs">
                <div className="flex items-center space-x-2.5">
                  <span className="text-xl">{v.icon}</span>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">{v.word}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{v.meaning}</span>
                  </div>
                </div>
                <button
                  onClick={() => AudioService.speakText(v.word)}
                  className="p-2 bg-purple-50 dark:bg-slate-800 hover:bg-purple-100 dark:hover:bg-slate-700 text-purple-700 dark:text-purple-300 rounded-xl transition cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Dialogues from the lessons (same scripts the lessons teach) */}
      {activeTab === 'dialogues' && (
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Lesson Dialogues ({dialogueScripts.length})
          </span>

          {dialogueScripts.map((d) => {
            const open = openDialogueId === d.id;
            return (
              <div key={d.id} className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
                <button
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    setOpenDialogueId(open ? null : d.id);
                  }}
                  className="w-full text-left p-3.5 flex items-center justify-between gap-2 cursor-pointer"
                >
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{d.title}</span>
                  <span className="text-[10px] font-black text-purple-600 dark:text-purple-400 shrink-0">{open ? 'Hide' : 'Open'}</span>
                </button>

                {open && (
                  <div className="px-3.5 pb-3.5 space-y-2 border-t border-[#D9E4FF] dark:border-slate-800 pt-3">
                    {d.lines.map((line, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <p className="flex-1 text-xs text-slate-700 dark:text-slate-300">
                          <span className="font-black text-purple-700 dark:text-purple-300">{line.speaker}: </span>
                          {line.text}
                        </p>
                        <button
                          onClick={() => AudioService.speakText(line.text)}
                          className="shrink-0 p-1 text-slate-500 hover:text-purple-600 cursor-pointer"
                          aria-label="Listen"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 4: Common Pitfalls */}
      {activeTab === 'mistakes' && (
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            A1 Grammar Error Remediation Gym
          </span>

          {[
            { inc: 'He teach English.', cor: 'He teaches English.', exp: 'Add -es to verbs ending in -ch for 3rd person.' },
            { inc: "He doesn't works on Sunday.", cor: "He doesn't work on Sunday.", exp: "Main verb stays in base form after doesn't." },
            { inc: 'I bought a car red.', cor: 'I bought a red car.', exp: 'Adjectives precede nouns in English.' },
            { inc: 'He cans speak four languages.', cor: 'He can speak four languages.', exp: 'Modal "can" never takes -s or "to".' },
            { inc: 'I have twenty-five years.', cor: 'I am twenty-five years old.', exp: 'Use verb TO BE (not have) for age.' },
          ].map((m, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 p-3.5 rounded-2xl space-y-1 shadow-xs">
              <p className="text-xs text-rose-600 dark:text-rose-400 font-mono line-through">❌ "{m.inc}"</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold font-mono">✅ "{m.cor}"</p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">{m.exp}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
