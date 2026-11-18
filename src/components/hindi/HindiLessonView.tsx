import React, { useState, useMemo, useEffect } from 'react';
import {
  ArrowLeft,
  Volume2,
  BookOpen,
  Sparkles,
  Zap,
  MessageSquare,
  CheckCircle2,
  Clock,
  RotateCcw,
  AlertTriangle,
  ChevronRight,
  Play,
  Award,
  Layers,
  HelpCircle,
  Flame,
  Mic,
  Star
} from 'lucide-react';
import { UserAcademyProfile } from '../../types';
import { HindiDayLesson } from '../../types/hindiCourse';
import { HindiPracticeRunner } from './HindiPracticeRunner';
import { HindiSpokenLabModal } from './HindiSpokenLabModal';
import { DialoguePlayerView } from '../learner/DialoguePlayerView';
import { AssessmentView } from '../lesson/AssessmentView';
import { getActiveEnglishAccent, speakTextOffline, speakCleanAudio, speakMinimalPair, playSoundEffectEffect } from '../../utils/audioUtils';
import { HindiCourseProgressService } from '../../services/HindiCourseProgressService';
import { HindiCourseService, HINDI_DAY_XP_REWARD, HINDI_RELEASED_DAYS } from '../../services/HindiCourseService';
import { XpCelebrationModal } from '../celebrations/XpCelebrationModal';
import { StageCompletionModal } from '../celebrations/StageCompletionModal';
import { StreakCelebrationModal } from '../celebrations/StreakCelebrationModal';
import { GraduationCertificateModal } from '../celebrations/GraduationCertificateModal';
import { GrammarExperienceModal } from '../learner/GrammarExperienceModal';

interface HindiLessonViewProps {
  day: HindiDayLesson;
  user?: UserAcademyProfile;
  userId?: string;
  onBackToCourseHome: () => void;
  onDayCompleted: (dayNum: number, score: number) => void;
}

type LessonSectionTab =
  | 'overview'
  | 'teach'
  | 'learn'
  | 'examples'
  | 'pronunciation'
  | 'practice'
  | 'use'
  | 'assess'
  | 'review';

const SECTIONS_CONFIG: { id: LessonSectionTab; titleEn: string; titleHi: string; icon: React.ComponentType<any> }[] = [
  { id: 'overview', titleEn: '1. Overview', titleHi: 'सिंहावलोकन', icon: Clock },
  { id: 'teach', titleEn: '2. Teach', titleHi: 'सिद्धांत', icon: BookOpen },
  { id: 'learn', titleEn: '3. Learn', titleHi: 'शब्दावली', icon: Sparkles },
  { id: 'examples', titleEn: '4. Examples', titleHi: 'मॉडल वाक्य', icon: Layers },
  { id: 'pronunciation', titleEn: '5. Sounds', titleHi: 'उच्चारण', icon: Mic },
  { id: 'practice', titleEn: '6. Practice', titleHi: 'अभ्यास', icon: Zap },
  { id: 'use', titleEn: '7. Dialogue', titleHi: 'संवाद', icon: MessageSquare },
  { id: 'assess', titleEn: '8. Assess', titleHi: 'मूल्यांकन', icon: HelpCircle },
  { id: 'review', titleEn: '9. Review', titleHi: 'दोहराव', icon: Award },
];

export const HindiLessonView: React.FC<HindiLessonViewProps> = ({
  day,
  user,
  userId,
  onBackToCourseHome,
  onDayCompleted,
}) => {
  const activeUserId = userId || user?.id;
  const [activeSection, setActiveSection] = useState<LessonSectionTab>('overview');
  const [learnSubTab, setLearnSubTab] = useState<'vocab' | 'phrases'>('vocab');
  const [isSlowSpeech, setIsSlowSpeech] = useState(false);
  const [practiceCompleted, setPracticeCompleted] = useState(false);
  const [practiceScore, setPracticeScore] = useState<number | null>(null);
  const [revealedAssessAnswers, setRevealedAssessAnswers] = useState<Record<string, boolean>>({});
  const [revealedSpeakingResponse, setRevealedSpeakingResponse] = useState(false);
  const [isPlayingFullDialogue, setIsPlayingFullDialogue] = useState(false);
  const [showSpokenLabModal, setShowSpokenLabModal] = useState(false);
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [flippedVocabIds, setFlippedVocabIds] = useState<Record<string, boolean>>({});

  // Celebration state
  const [showXpCelebration, setShowXpCelebration] = useState(false);
  const [showStageCelebration, setShowStageCelebration] = useState(false);
  const [showStreakCelebration, setShowStreakCelebration] = useState(false);
  const [showGraduationCert, setShowGraduationCert] = useState(false);
  const [showGrammarStudioModal, setShowGrammarStudioModal] = useState(false);
  const [completedFinalScore, setCompletedFinalScore] = useState<number>(0);
  const [xpAwarded, setXpAwarded] = useState<number>(0);
  const dayAlreadyCompleted = HindiCourseProgressService.isDayCompleted(day.dayNumber, activeUserId);

  const toggleVocabFlip = (id: string) => {
    playSoundEffectEffect('tap');
    setFlippedVocabIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Available dialogue scenarios
  const availableScenarios = useMemo(() => {
    if (Array.isArray(day.use?.dialogues) && day.use.dialogues.length > 0) {
      return day.use.dialogues;
    }
    if (day.use?.dialogue) {
      return [day.use.dialogue];
    }
    return [];
  }, [day.use]);

  const currentScenario = availableScenarios[activeScenarioIndex] || availableScenarios[0] || day.use?.dialogue;

  // Reset scenario tab state on day change
  useEffect(() => {
    setActiveScenarioIndex(0);
    setRevealedSpeakingResponse(false);
    setIsPlayingFullDialogue(false);
  }, [day.dayNumber]);

  const handlePlayAudio = (text?: string | null, rateMultiplier = 1.0) => {
    if (!text || !text.trim()) return;
    playSoundEffectEffect('tap');
    const speechRate = (isSlowSpeech ? 0.75 : 0.9) * rateMultiplier;
    speakCleanAudio(text.trim(), getActiveEnglishAccent(), speechRate);
  };

  const handlePlayMinimalPair = (wordA: string, wordB: string) => {
    if (!wordA && !wordB) return;
    playSoundEffectEffect('tap');
    const speechRate = isSlowSpeech ? 0.75 : 0.88;
    speakMinimalPair(wordA, wordB, getActiveEnglishAccent(), speechRate);
  };

  const handlePlayFullDialogue = async () => {
    const turnsToPlay = currentScenario?.turns || day.use?.dialogue?.turns || [];
    if (!turnsToPlay || turnsToPlay.length === 0) return;
    setIsPlayingFullDialogue(true);
    playSoundEffectEffect('tap');

    for (const turn of turnsToPlay) {
      if (turn.textEn) {
        await speakCleanAudio(turn.textEn, getActiveEnglishAccent(), isSlowSpeech ? 0.8 : 0.92);
        // Brief natural pause between speaker turns
        await new Promise((res) => setTimeout(res, 500));
      }
    }
    setIsPlayingFullDialogue(false);
  };

  const handleFinishPractice = (scorePercent: number) => {
    setPracticeScore(scorePercent);
    setPracticeCompleted(true);
    playSoundEffectEffect('victory');
  };

  const handleRecordAnswer = (exId: string, isCorrect: boolean, skillTag: string, answer: string) => {
    HindiCourseProgressService.recordExerciseAnswer(exId, isCorrect, skillTag, answer, activeUserId);
  };

  const handleCompleteFullDay = () => {
    if (!practiceCompleted || practiceScore === null) return;
    if (day.dayNumber > HINDI_RELEASED_DAYS || !HindiCourseProgressService.isDayUnlocked(day.dayNumber, activeUserId)) return;

    const finalScore = Math.max(0, Math.min(100, Math.round(practiceScore)));
    const wasAlreadyCompleted = HindiCourseProgressService.isDayCompleted(day.dayNumber, activeUserId);
    const updatedProgress = HindiCourseProgressService.completeDay(day.dayNumber, finalScore, HINDI_DAY_XP_REWARD, activeUserId);
    if (!updatedProgress.completedDays.includes(day.dayNumber)) return;

    setCompletedFinalScore(finalScore);
    setXpAwarded(wasAlreadyCompleted ? 0 : HINDI_DAY_XP_REWARD);
    playSoundEffectEffect('victory');

    // Trigger celebration engine
    if (day.dayNumber % 10 === 0) {
      setShowStageCelebration(true);
    } else {
      setShowXpCelebration(true);
    }
  };

  const handleFinishCelebrations = () => {
    setShowXpCelebration(false);
    setShowStageCelebration(false);
    setShowStreakCelebration(false);
    onDayCompleted(day.dayNumber, completedFinalScore);
  };

  const currentIndex = SECTIONS_CONFIG.findIndex((s) => s.id === activeSection);
  const nextSection = currentIndex < SECTIONS_CONFIG.length - 1 ? SECTIONS_CONFIG[currentIndex + 1].id : null;
  const prevSection = currentIndex > 0 ? SECTIONS_CONFIG[currentIndex - 1].id : null;

  const toggleRevealAssess = (id: string) => {
    playSoundEffectEffect('tap');
    setRevealedAssessAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans pb-28 animate-fade-in w-full max-w-lg mx-auto">
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/90 backdrop-blur-xl border-b border-[#D9E4FF] dark:border-slate-850 px-4 py-3 flex items-center justify-between shadow-xs dark:shadow-xl">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onBackToCourseHome();
            }}
            className="p-2.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-2xl border border-[#D9E4FF] dark:border-slate-800 transition active:scale-95 cursor-pointer shadow-xs"
            title="Back to Course Roadmap"
            aria-label="Back to Course Roadmap"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-black uppercase tracking-wider bg-indigo-50 dark:bg-gradient-to-r dark:from-[#335CFF]/20 dark:to-[#6D5DF6]/20 text-indigo-700 dark:text-indigo-300 px-2.5 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-500/30">
                Day {day.dayNumber} of 60
              </span>
              <span className="text-[10px] bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 font-bold px-2 py-0.5 rounded-md border border-[#D9E4FF] dark:border-slate-700/60">
                {day.cefr}
              </span>
            </div>
            <h1 className="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate max-w-[220px] sm:max-w-md mt-0.5 font-display">
              {day.titleEn}
            </h1>
          </div>
        </div>

        {/* Audio Rate Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setIsSlowSpeech(!isSlowSpeech);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition border cursor-pointer ${
              isSlowSpeech
                ? 'bg-amber-50 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-500/40 shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-[#D9E4FF] dark:border-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
            title="Toggle Slow Speech Speed (0.75x)"
          >
            {isSlowSpeech ? '🐢 0.75x' : '⚡ 1.0x'}
          </button>
        </div>
      </header>

      {/* 9-Section Horizontal Pill Navigation */}
      <div className="px-4 py-2.5 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border-b border-[#D9E4FF] dark:border-slate-800/80 overflow-x-auto scrollbar-none flex space-x-2">
        {SECTIONS_CONFIG.map((sec) => {
          const Icon = sec.icon;
          const isCurrent = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveSection(sec.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap flex items-center space-x-1.5 transition border min-h-[40px] cursor-pointer ${
                isCurrent
                  ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white border-indigo-400/30 font-black shadow-lg shadow-indigo-500/25 scale-[1.02]'
                  : 'bg-white dark:bg-slate-900/80 border-[#D9E4FF] dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sec.titleEn}</span>
            </button>
          );
        })}
      </div>

      {/* Main Section Content Area */}
      <main className="p-4 sm:p-6 space-y-6 flex-1">
        {/* SECTION 1: OVERVIEW */}
        {activeSection === 'overview' && (
          <div className="space-y-6 animate-fade-in">
            {/* Title Banner - Hero Card */}
            <div className="bg-gradient-to-br from-[#335CFF] via-[#4D52EE] to-[#6D5DF6] rounded-[28px] p-6 sm:p-7 space-y-4 shadow-2xl shadow-indigo-500/20 text-white relative overflow-hidden border border-indigo-300/20">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-xl border border-white/30 text-white shadow-sm">
                  Curiosity 60-Day English • Day {day.dayNumber}
                </span>
                <span className="text-xs font-bold bg-black/20 backdrop-blur-md px-2.5 py-1 rounded-xl text-indigo-100 flex items-center space-x-1 border border-white/10">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{day.estMinutes} mins</span>
                </span>
              </div>

              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                  {day.titleEn}
                </h2>
                <p className="text-base sm:text-lg text-indigo-100 font-semibold font-hindi leading-relaxed">
                  {day.titleHi}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 text-indigo-100 font-medium">
                  <strong>CEFR:</strong> {day.cefr}
                </span>
                <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 text-indigo-100 font-medium">
                  <strong>Prerequisites:</strong> {day.prerequisites}
                </span>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-black text-white font-display">
                  Learning Objectives (सीखने के लक्ष्य)
                </h3>
              </div>

              <div className="space-y-3">
                {day.objectivesEn.map((objEn, i) => (
                  <div
                    key={`obj_${i}`}
                    className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1.5 shadow-sm"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-slate-100 leading-snug">{objEn}</p>
                        <p className="text-xs text-amber-300/90 font-medium font-hindi">
                          {day.objectivesHi[i]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action to Start Lesson */}
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveSection('teach');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-4 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] hover:brightness-110 text-white font-black rounded-2xl text-base transition shadow-xl shadow-indigo-500/25 border border-indigo-400/30 flex items-center justify-center space-x-2 cursor-pointer active:scale-[0.98]"
            >
              <span>Start Learning Theory (सिद्धांत सीखें)</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* SECTION 2: TEACH */}
        {activeSection === 'teach' && (
          <div className="space-y-6 animate-fade-in">
            {/* Hindi & English Conceptual Explanations */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl relative overflow-hidden">
              <div className="flex items-center space-x-2.5 border-b border-slate-800 pb-3">
                <div className="p-2 rounded-xl bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-white font-display">
                  Linguistic Concept & Theory (सिद्धांत और अवधारणा)
                </h3>
              </div>

              {/* Hindi Explanation (Large, High-Contrast Typography) */}
              <div className="bg-slate-950/90 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-2 border-l-4 border-l-indigo-500 shadow-sm">
                <span className="text-xs font-black uppercase tracking-wider text-indigo-400 block">
                  हिन्दी व्याख्या (Hindi Concept Explanation):
                </span>
                <p className="text-base sm:text-lg text-slate-100 font-hindi leading-relaxed">
                  {day.teach.hindiExplanation}
                </p>
              </div>

              {/* English Explanation */}
              <div className="bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-slate-800/80 space-y-2 border-l-4 border-l-slate-700">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                  English Explanation:
                </span>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {day.teach.englishExplanation}
                </p>
              </div>
            </div>

            {/* Core Grammar Rules */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center space-x-2.5 font-display">
                <div className="p-1.5 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  <Zap className="w-4 h-4" />
                </div>
                <span>Core Grammar Rules (मुख्य व्याकरण नियम)</span>
              </h3>

              <div className="space-y-3">
                {day.teach.grammarRules.map((rule) => (
                  <div
                    key={`rule_${rule.ruleNumber}`}
                    className="bg-slate-950/80 p-4 sm:p-4.5 rounded-2xl border border-slate-800 space-y-2 hover:border-slate-700 transition"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-black text-indigo-300 font-display">
                        Rule {rule.ruleNumber}: {rule.title}
                      </span>
                      {rule.register && (
                        <span className="text-[10px] uppercase font-bold bg-slate-800 text-slate-300 px-2 py-0.5 rounded-lg border border-slate-700 font-mono">
                          {rule.register}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Master Formula Table if present */}
            {day.teach.formulaTable && day.teach.formulaTable.length > 0 && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
                <h3 className="text-base sm:text-lg font-black text-white flex items-center space-x-2.5 font-display">
                  <div className="p-1.5 rounded-xl bg-teal-500/15 text-teal-300 border border-teal-500/30">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span>Master Formula & Structure Table (सूत्र तालिका)</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {day.teach.formulaTable.map((row, idx) => (
                    <div
                      key={`formula_${idx}`}
                      className="bg-slate-950/90 p-4 rounded-2xl border border-slate-800 space-y-2.5 flex flex-col justify-between hover:border-slate-700 transition shadow-sm"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-2">
                          {row.context && (
                            <span className="text-[10px] uppercase font-black text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 px-2.5 py-0.5 rounded-lg">
                              {row.context}
                            </span>
                          )}
                          {row.timeWindow && (
                            <span className="text-[10px] text-slate-400 font-mono">
                              ⏰ {row.timeWindow}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-bold text-white font-mono mt-1 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800/80">
                          {row.formula}
                        </p>
                      </div>

                      {row.meaningHi && (
                        <p className="text-xs text-amber-300 font-hindi border-t border-slate-800/80 pt-2 font-medium">
                          {row.meaningHi}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ⚠️ Hindi Speaker Trap & Contrastive Solution */}
            {day.teach.hindiSpeakerTrap && (
              <div className="bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-900 border border-amber-500/40 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex items-center space-x-2.5 text-amber-400">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider block">
                      ⚠️ Hindi Speaker Trap (हिन्दी भाषियों की सामान्य ग़लती)
                    </span>
                    <h4 className="text-base font-black text-white font-display">
                      {day.teach.hindiSpeakerTrap.trapTitle}
                    </h4>
                  </div>
                </div>

                <div className="bg-slate-950/90 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3.5 shadow-inner">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/30 space-y-1">
                      <span className="text-[11px] font-black text-rose-400 uppercase tracking-wider block">
                        ❌ L1 Hindi Interference:
                      </span>
                      <p className="text-xs sm:text-sm text-rose-200 font-mono font-semibold">
                        "{day.teach.hindiSpeakerTrap.potentialInterference}"
                      </p>
                      <p className="text-[11px] text-slate-400 pt-1 border-t border-rose-500/20 font-hindi">
                        हिन्दी सोच: {day.teach.hindiSpeakerTrap.hindiPattern}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1">
                      <span className="text-[11px] font-black text-emerald-400 uppercase tracking-wider block">
                        ✅ Natural English Solution:
                      </span>
                      <p className="text-xs sm:text-sm text-emerald-200 font-mono font-black">
                        "{day.teach.hindiSpeakerTrap.naturalSolution}"
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1 font-medium">
                    {day.teach.hindiSpeakerTrap.explanation}
                  </p>
                </div>
              </div>
            )}

            {/* Launch Flagship Interactive Grammar Studio */}
            <div className="bg-gradient-to-br from-[#2E54FF] via-[#335CFF] to-[#6D5DF6] p-5 rounded-3xl text-white space-y-3 shadow-xl shadow-indigo-500/20 border border-indigo-400/30 relative overflow-hidden">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-2xl bg-white/20 backdrop-blur-md text-amber-300">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100 block">
                    Flagship Studio Mode
                  </span>
                  <h4 className="text-base font-black text-white font-display">
                    Interactive Grammar Studio (व्याकरण स्टूडियो)
                  </h4>
                </div>
              </div>
              <p className="text-xs text-indigo-100/90 leading-relaxed">
                Explore dynamic formula cards, tense timelines, Hindi speaker traps, sentence playground, and quick practice quizzes.
              </p>
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setShowGrammarStudioModal(true);
                }}
                className="w-full py-3.5 bg-white text-indigo-900 hover:bg-indigo-50 font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg transition cursor-pointer active:scale-95 flex items-center justify-center space-x-2"
              >
                <span>Open Full Grammar Studio</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* SECTION 3: LEARN (Vocabulary & Phrases) */}
        {activeSection === 'learn' && (
          <div className="space-y-5 animate-fade-in">
            {/* Learn Sub-Tabs */}
            <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 shadow-sm">
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setLearnSubTab('vocab');
                }}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
                  learnSubTab === 'vocab'
                    ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white shadow-md shadow-indigo-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Vocabulary ({day.learn.vocabulary.length} Words)
              </button>
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setLearnSubTab('phrases');
                }}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
                  learnSubTab === 'phrases'
                    ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white shadow-md shadow-indigo-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Pragmatic Phrases ({day.learn.phrases.length})
              </button>
            </div>

            {/* Sub-Tab 1: Vocabulary */}
            {learnSubTab === 'vocab' && (
              <div className="grid grid-cols-1 gap-4">
                {day.learn.vocabulary.map((vocab, vIdx) => {
                  const vocabKey = vocab.id || `vocab_${vIdx}`;
                  const isFlipped = !!flippedVocabIds[vocabKey];
                  const displayWord = vocab.word || '';
                  const displayMeaningHi = vocab.hindiMeaning || vocab.meaningHi || '';
                  const displayPos = vocab.partOfSpeech || vocab.pos || '';
                  const displayIpa = vocab.ipa || '';
                  const displayHiPron = vocab.hindiPronunciation || vocab.devanagari || '';
                  const displayExampleEn = vocab.example || vocab.exampleEn || '';
                  const displayExampleHi = vocab.hindiExample || vocab.exampleHi || '';
                  const displayError = vocab.commonError || vocab.commonMistake || '';

                  return (
                    <div
                      key={vocabKey}
                      className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-3xl p-5 transition-all shadow-xl space-y-4 card-lift"
                    >
                      {!isFlipped ? (
                        /* FLASHCARD FRONT */
                        <div className="space-y-4 animate-fade-in">
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[10px] font-bold uppercase bg-indigo-500/15 text-indigo-300 px-2.5 py-0.5 rounded-lg border border-indigo-500/30 font-mono">
                                  {displayPos || 'Vocabulary'}
                                </span>
                                {displayHiPron && (
                                  <span className="text-xs text-amber-300/90 font-hindi font-semibold bg-amber-500/10 px-2.5 py-0.5 rounded-lg border border-amber-500/20">
                                    {displayHiPron}
                                  </span>
                                )}
                              </div>

                              <h4 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
                                {displayWord}
                              </h4>

                              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                                {displayIpa && (
                                  <span className="font-mono bg-slate-950 px-2.5 py-0.5 rounded-md border border-slate-800 text-slate-300">
                                    {displayIpa}
                                  </span>
                                )}
                                {vocab.syllables && (
                                  <span className="text-[11px] text-slate-400">
                                    Syllables: <strong className="text-slate-300 font-mono">{vocab.syllables}</strong>
                                  </span>
                                )}
                                {vocab.stress && (
                                  <span className="text-[11px] text-slate-400">
                                    Stress: <strong className="text-slate-300 font-mono">{vocab.stress}</strong>
                                  </span>
                                )}
                              </div>
                            </div>

                            <button
                              onClick={() => handlePlayAudio(displayWord)}
                              className="p-3 bg-gradient-to-br from-[#335CFF]/15 to-[#6D5DF6]/15 hover:from-[#335CFF]/25 hover:to-[#6D5DF6]/25 text-indigo-300 rounded-2xl border border-indigo-500/30 transition btn-press cursor-pointer shrink-0 shadow-sm"
                              title={`Pronounce "${displayWord}"`}
                              aria-label={`Listen to ${displayWord}`}
                            >
                              <Volume2 className="w-5 h-5" />
                            </button>
                          </div>

                          {/* Interactive Flashcard Flip Button */}
                          <button
                            onClick={() => toggleVocabFlip(vocabKey)}
                            className="w-full py-3 px-4 bg-slate-950 hover:bg-slate-850 text-indigo-300 hover:text-indigo-200 border border-slate-800 hover:border-indigo-500/40 rounded-2xl text-xs font-bold transition flex items-center justify-center space-x-2 btn-press cursor-pointer shadow-sm"
                          >
                            <Sparkles className="w-4 h-4 text-indigo-400" />
                            <span>Tap to Flip Flashcard (हिन्दी अर्थ व उदाहरण देखें) 🔄</span>
                          </button>
                        </div>
                      ) : (
                        /* FLASHCARD BACK */
                        <div className="space-y-4 animate-fade-in">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide">
                              Flashcard Back: {displayWord}
                            </span>
                            <button
                              onClick={() => toggleVocabFlip(vocabKey)}
                              className="text-xs text-slate-400 hover:text-white px-2.5 py-1 bg-slate-800 rounded-xl transition btn-press cursor-pointer flex items-center space-x-1"
                            >
                              <span>Flip Front 🔄</span>
                            </button>
                          </div>

                          {/* Meaning in Hindi */}
                          <div className="bg-slate-950/90 p-4 rounded-2xl border border-slate-800/90 space-y-1 border-l-4 border-l-amber-500">
                            <span className="text-[11px] text-slate-400 block font-semibold uppercase tracking-wide">
                              हिन्दी अर्थ (Hindi Meaning):
                            </span>
                            <p className="text-lg sm:text-xl font-bold text-amber-300 font-hindi leading-snug">
                              {displayMeaningHi}
                            </p>
                          </div>

                          {/* Collocations if present */}
                          {Array.isArray(vocab.collocations) && vocab.collocations.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              <span className="text-[11px] font-semibold text-slate-400">Collocations:</span>
                              {vocab.collocations.map((col, cIdx) => (
                                <span
                                  key={`col_${cIdx}`}
                                  className="text-xs bg-slate-950 text-teal-300 px-2.5 py-0.5 rounded-lg font-medium border border-teal-500/20"
                                >
                                  {col}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Example Sentence */}
                          {displayExampleEn && (
                            <div className="text-xs sm:text-sm space-y-2 pt-2 border-t border-slate-800/80">
                              <div className="flex items-center justify-between gap-2">
                                <p className="font-semibold text-slate-100 leading-snug">
                                  "{displayExampleEn}"
                                </p>
                                <button
                                  onClick={() => handlePlayAudio(displayExampleEn)}
                                  className="p-1.5 text-slate-400 hover:text-indigo-300 cursor-pointer shrink-0 rounded-lg hover:bg-slate-800 transition"
                                  title="Listen to example"
                                  aria-label={`Listen to example: ${displayExampleEn}`}
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              {displayExampleHi && (
                                <p className="text-slate-400 font-hindi text-xs sm:text-sm">
                                  {displayExampleHi}
                                </p>
                              )}
                            </div>
                          )}

                          {/* Common Error if present */}
                          {displayError && (
                            <div className="text-xs bg-amber-950/20 border border-amber-500/30 p-3.5 rounded-2xl text-amber-300/90 font-hindi space-y-0.5">
                              <span className="font-bold text-[11px] block uppercase text-amber-400">
                                ⚠️ सामान्य त्रुटि (Common Mistake to Avoid):
                              </span>
                              <p>{displayError}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Sub-Tab 2: Phrases */}
            {learnSubTab === 'phrases' && (
              <div className="grid grid-cols-1 gap-3">
                {day.learn.phrases.map((phrase) => (
                  <div
                    key={phrase.id}
                    className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 transition shadow-lg space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] uppercase font-black bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded-lg inline-block mb-1.5 font-mono">
                          {phrase.register}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                          "{phrase.phrase}"
                        </h4>
                      </div>

                      <button
                        onClick={() => handlePlayAudio(phrase.phrase)}
                        className="p-3 bg-gradient-to-br from-[#335CFF]/15 to-[#6D5DF6]/15 hover:from-[#335CFF]/25 hover:to-[#6D5DF6]/25 text-indigo-300 rounded-2xl border border-indigo-500/30 transition active:scale-95 cursor-pointer shrink-0 shadow-sm"
                        title="Listen to phrase"
                        aria-label={`Listen to ${phrase.phrase}`}
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="bg-slate-950/90 p-3.5 rounded-2xl border border-slate-800 border-l-4 border-l-amber-500">
                      <p className="text-xs sm:text-sm font-semibold text-amber-300 font-hindi">
                        {phrase.meaningHi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SECTION 4: EXAMPLES */}
        {activeSection === 'examples' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center space-x-2.5 pb-2">
              <div className="p-1.5 rounded-xl bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-white font-display">
                Contextual Model Sentences (मॉडल वाक्य)
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {day.examples.map((eg, idx) => (
                <div
                  key={eg.id || `eg_${idx}`}
                  className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-lg space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                        Sentence {idx + 1}
                      </span>
                      <p className="text-base sm:text-lg font-bold text-white leading-snug pt-1">
                        {eg.en}
                      </p>
                    </div>

                    <button
                      onClick={() => handlePlayAudio(eg.en)}
                      className="p-2.5 bg-gradient-to-br from-[#335CFF]/15 to-[#6D5DF6]/15 hover:from-[#335CFF]/25 hover:to-[#6D5DF6]/25 text-indigo-300 rounded-xl border border-indigo-500/30 transition active:scale-95 cursor-pointer shrink-0"
                      title="Pronounce sentence"
                      aria-label={`Listen to sentence ${idx + 1}`}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-amber-300/95 font-hindi font-medium bg-slate-950/90 p-3.5 rounded-2xl border border-slate-800/80 border-l-4 border-l-amber-500">
                    {eg.hi}
                  </p>

                  {eg.notes && (
                    <p className="text-xs text-slate-400 italic font-medium">
                      💡 <strong>Note:</strong> {eg.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 5: PRONUNCIATION */}
        {activeSection === 'pronunciation' && (
          <div className="space-y-6 animate-fade-in">
            {/* Quick Action to open Spoken Lab */}
            <div className="bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 bg-indigo-500/20 text-indigo-300 rounded-2xl border border-indigo-500/30 shrink-0 shadow-sm">
                  <Mic className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white font-display">
                    Voice & Accent / Spoken English Lab
                  </h3>
                  <p className="text-xs text-indigo-200 font-hindi mt-0.5">
                    Day {day.dayNumber} के विशेष ध्वनियां, मिनिमल पेयर्स और सम्पूर्ण 60 दिनों का उच्चारण लैब
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setShowSpokenLabModal(true);
                }}
                className="px-5 py-2.5 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] hover:brightness-110 text-white text-xs sm:text-sm font-black rounded-xl transition flex items-center space-x-2 shadow-md shadow-indigo-500/25 border border-indigo-400/30 cursor-pointer shrink-0 active:scale-95"
              >
                <span>Launch Spoken Lab</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Target Sounds & Traps */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 rounded-xl bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  <Mic className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-white font-display">
                  Phonetics & Target Sounds (उच्चारण और ध्वनि)
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {day.pronunciation.targetSounds.map((snd, idx) => (
                  <span
                    key={`snd_${idx}`}
                    className="bg-indigo-500/15 text-indigo-300 font-mono font-bold text-sm px-3.5 py-1.5 rounded-xl border border-indigo-500/30 shadow-sm"
                  >
                    {snd}
                  </span>
                ))}
              </div>

              {day.pronunciation.traps && (
                <div className="bg-slate-950/90 p-4 rounded-2xl border border-slate-800 space-y-1.5 border-l-4 border-l-amber-500">
                  <span className="text-xs font-black uppercase text-amber-400 block tracking-wider">
                    ⚠️ L1 Pronunciation Trap (उच्चारण की सावधानी):
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-hindi">
                    {day.pronunciation.traps}
                  </p>
                </div>
              )}
            </div>

            {/* Minimal Pair Contrasts (If Available) */}
            {day.pronunciation.minimalPairs && day.pronunciation.minimalPairs.length > 0 && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-black text-white flex items-center space-x-2.5 font-display">
                    <div className="p-1.5 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span>Minimal Pair Contrasts (समान ध्वनियों का भेद)</span>
                  </h3>
                  <span className="text-xs text-slate-400 font-bold bg-slate-800 px-2 py-0.5 rounded-md font-mono">
                    {day.pronunciation.minimalPairs.length} Pairs
                  </span>
                </div>

                <div className="space-y-3">
                  {day.pronunciation.minimalPairs.map((mp: any, idx: number) => {
                    const wordA = typeof mp === 'string' ? mp.split(/\s+(?:vs\.?|versus)\s+/i)[0] : (mp.wordA || mp.left || '');
                    const wordB = typeof mp === 'string' ? mp.split(/\s+(?:vs\.?|versus)\s+/i)[1] : (mp.wordB || mp.right || '');
                    const ipaA = typeof mp === 'object' ? mp.ipaA : '';
                    const ipaB = typeof mp === 'object' ? mp.ipaB : '';
                    const meaningA = typeof mp === 'object' ? mp.meaningA : '';
                    const meaningB = typeof mp === 'object' ? mp.meaningB : '';
                    const distinction = typeof mp === 'object' ? (mp.distinctionNote || mp.discriminationNote || mp.note) : '';

                    return (
                      <div
                        key={mp.id || `mp_${idx}`}
                        className="bg-slate-950/90 p-4 sm:p-4.5 rounded-2xl border border-slate-800 space-y-3 shadow-sm"
                      >
                        <div className="grid grid-cols-2 gap-3 items-center">
                          {/* Word A */}
                          <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 text-center space-y-1">
                            <p className="text-base font-bold text-white tracking-wide">{wordA}</p>
                            {ipaA && <span className="text-xs font-mono text-indigo-300 block">{ipaA}</span>}
                            {meaningA && <span className="text-xs text-slate-400 block font-hindi">{meaningA}</span>}
                            <button
                              onClick={() => handlePlayAudio(wordA)}
                              className="mt-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-750 text-indigo-300 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1 w-full cursor-pointer"
                            >
                              <Volume2 className="w-3 h-3" />
                              <span>Listen</span>
                            </button>
                          </div>

                          {/* Word B */}
                          <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 text-center space-y-1">
                            <p className="text-base font-bold text-white tracking-wide">{wordB}</p>
                            {ipaB && <span className="text-xs font-mono text-teal-300 block">{ipaB}</span>}
                            {meaningB && <span className="text-xs text-slate-400 block font-hindi">{meaningB}</span>}
                            <button
                              onClick={() => handlePlayAudio(wordB)}
                              className="mt-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-750 text-teal-300 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1 w-full cursor-pointer"
                            >
                              <Volume2 className="w-3 h-3" />
                              <span>Listen</span>
                            </button>
                          </div>
                        </div>

                        {/* Combined Pair Button */}
                        <div className="flex items-center justify-between pt-1 border-t border-slate-850">
                          {distinction ? (
                            <p className="text-[11px] text-slate-400 font-hindi flex-1 pr-2">
                              💡 {distinction}
                            </p>
                          ) : <div />}
                          <button
                            onClick={() => handlePlayMinimalPair(wordA, wordB)}
                            className="px-3.5 py-1.5 bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/30 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shrink-0 cursor-pointer"
                          >
                            <Play className="w-3 h-3" />
                            <span>Contrast Pair</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Audio Drills */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center space-x-2.5 font-display">
                <div className="p-1.5 rounded-xl bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  <Volume2 className="w-4 h-4" />
                </div>
                <span>Interactive Audio Drills (सुनें और दोहराएं)</span>
              </h3>

              <div className="space-y-3">
                {day.pronunciation.drills.map((drill, idx) => (
                  <div
                    key={drill.id || `drill_${idx}`}
                    className="bg-slate-950/90 p-4 rounded-2xl border border-slate-800 space-y-3 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {drill.voiceRole && (
                          <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded inline-block mb-1">
                            {drill.voiceRole}
                          </span>
                        )}
                        <p className="text-base font-bold text-white">"{drill.text}"</p>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        <button
                          onClick={() => handlePlayAudio(drill.text, 0.8)}
                          className="px-3.5 py-2 bg-gradient-to-br from-[#335CFF]/15 to-[#6D5DF6]/15 hover:from-[#335CFF]/25 hover:to-[#6D5DF6]/25 text-indigo-300 border border-indigo-500/30 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 active:scale-95 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Listen</span>
                        </button>
                      </div>
                    </div>

                    {drill.tip && (
                      <p className="text-xs text-amber-300 font-hindi border-t border-slate-800 pt-2 font-medium">
                        💡 {drill.tip}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECTION 6: PRACTICE */}
        {activeSection === 'practice' && (
          <div className="space-y-5 animate-fade-in">
            {practiceCompleted && practiceScore !== null ? (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 text-center space-y-4 shadow-xl animate-scale-in">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#335CFF]/20 to-[#6D5DF6]/20 text-indigo-300 flex items-center justify-center mx-auto border border-indigo-500/30 shadow-lg">
                  <Award className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white font-display">
                    Practice Completed! (अभ्यास सम्पन्न)
                  </h3>
                  <p className="text-sm text-slate-400">
                    You answered all {day.practice.length} interactive exercises for Day {day.dayNumber}.
                  </p>
                </div>

                <div className="py-3 px-6 bg-slate-950/90 rounded-2xl border border-slate-800 inline-block shadow-inner">
                  <span className="text-xs text-slate-400 block font-semibold">Your Accuracy</span>
                  <span className="text-3xl font-black text-indigo-300 font-mono">
                    {practiceScore}%
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => {
                      playSoundEffectEffect('tap');
                      setPracticeCompleted(false);
                    }}
                    className="flex-1 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-2xl transition cursor-pointer"
                  >
                    Retry Practice (पुनः अभ्यास करें)
                  </button>
                  <button
                    onClick={() => {
                      playSoundEffectEffect('tap');
                      setActiveSection('use');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 py-3.5 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] hover:brightness-110 text-white font-black rounded-2xl transition shadow-lg shadow-indigo-500/25 border border-indigo-400/30 cursor-pointer"
                  >
                    Continue to Dialogue (संवाद पर जाएं)
                  </button>
                </div>
              </div>
            ) : (
              <HindiPracticeRunner
                exercises={day.practice}
                dayNumber={day.dayNumber}
                onFinishPractice={handleFinishPractice}
                onRecordExerciseAnswer={handleRecordAnswer}
              />
            )}
          </div>
        )}

        {/* SECTION 7: USE (Flagship Luxury Dialogue Player & Spoken Task) */}
        {activeSection === 'use' && (
          <div className="space-y-6 animate-fade-in w-full max-w-full min-w-0">
            {/* Integrated Luxury Dialogue Player with all Scenarios */}
            <DialoguePlayerView
              user={user || ({ id: activeUserId || 'u1', nativeLanguage: 'hi' } as any)}
              dayLesson={day}
              dayNumber={day.dayNumber}
            />

            {/* Spoken Production Challenge */}
            {day.use?.speakingTask && (
              <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-3xl p-4 sm:p-6 space-y-4 shadow-xl w-full max-w-full min-w-0">
                <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <div className="p-1.5 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30 shrink-0">
                      <Mic className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-black text-white font-display truncate">
                        Spoken Production Challenge
                      </h4>
                      <span className="text-[11px] text-amber-300/90 font-hindi font-medium block">
                        बोलने का अभ्यास (Your Turn to Speak)
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-black tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full shrink-0">
                    Speaking Task
                  </span>
                </div>

                {/* Roleplay Context if present */}
                {day.use.speakingTask.roleplay?.scenario && (
                  <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Roleplay Scenario:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 break-words leading-relaxed">
                      {day.use.speakingTask.roleplay.scenario}
                    </p>
                  </div>
                )}

                {/* Prompt Card */}
                <div className="bg-slate-950/90 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-indigo-300 block">
                    Task Instructions (निर्देश):
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-100 break-words leading-relaxed">
                    {day.use.speakingTask.promptEn}
                  </p>
                  {day.use.speakingTask.promptHi && (
                    <p className="text-xs sm:text-sm text-amber-300 font-hindi break-words leading-relaxed pt-1.5 border-t border-slate-800/80">
                      {day.use.speakingTask.promptHi}
                    </p>
                  )}
                </div>

                {/* Target Expressions */}
                {day.use.speakingTask.targetExpressions && day.use.speakingTask.targetExpressions.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-400 block">Target Key Expressions:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {day.use.speakingTask.targetExpressions.map((expr: string, i: number) => (
                        <span
                          key={`expr_${i}`}
                          className="text-xs bg-slate-950 border border-indigo-500/30 text-indigo-300 px-3 py-1 rounded-xl font-medium shadow-sm"
                        >
                          {expr}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Model Response Toggle */}
                {day.use.speakingTask.sampleResponseEn && (
                  <div className="space-y-2.5 pt-1">
                    <button
                      onClick={() => {
                        playSoundEffectEffect('tap');
                        setRevealedSpeakingResponse(!revealedSpeakingResponse);
                      }}
                      className="w-full py-3 px-4 bg-slate-950 hover:bg-slate-850 border border-slate-800 text-indigo-300 font-bold rounded-2xl transition flex items-center justify-between text-xs sm:text-sm cursor-pointer active:scale-[0.99]"
                    >
                      <span className="flex items-center space-x-2">
                        <span>💡</span>
                        <span>
                          {revealedSpeakingResponse
                            ? 'Hide Sample Model Response'
                            : 'View Sample Model Response (आदर्श उत्तर)'}
                        </span>
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          revealedSpeakingResponse ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    {revealedSpeakingResponse && (
                      <div className="bg-slate-950/95 p-4 sm:p-5 rounded-2xl border border-indigo-500/40 space-y-2.5 animate-fade-in shadow-lg">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1 min-w-0">
                            <span className="text-[10px] font-black uppercase tracking-wider text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 inline-block">
                              Native Model Response
                            </span>
                            <p className="text-sm sm:text-base font-bold text-indigo-200 break-words leading-relaxed">
                              "{day.use.speakingTask.sampleResponseEn}"
                            </p>
                          </div>

                          <button
                            onClick={() => handlePlayAudio(day.use.speakingTask.sampleResponseEn!)}
                            className="shrink-0 p-2.5 bg-gradient-to-br from-[#335CFF]/15 to-[#6D5DF6]/15 hover:from-[#335CFF]/25 hover:to-[#6D5DF6]/25 text-indigo-300 border border-indigo-500/30 rounded-xl transition active:scale-95 cursor-pointer touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center"
                            title="Listen to Model Response"
                            aria-label="Listen to Model Response"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        {day.use.speakingTask.sampleResponseHi && (
                          <p className="text-xs sm:text-sm text-slate-400 font-hindi break-words leading-relaxed border-t border-slate-800/80 pt-2">
                            {day.use.speakingTask.sampleResponseHi}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* SECTION 8: ASSESS */}
        {activeSection === 'assess' && (
          <AssessmentView
            user={user || ({ id: 'default_user', name: 'Learner', nativeLanguage: 'hi' } as any)}
            lessonData={{
              id: `lesson_a1_1_${day.dayNumber}`,
              unitId: `unit_a1_${Math.ceil(day.dayNumber / 15)}`,
              title: day.titleEn,
              cefr: day.cefr || 'A1',
              icon: '👋',
              estimatedMinutes: 25,
              learningObjective: {
                title: day.titleEn,
                description: day.titleHi || day.titleEn,
                canDoStatements: [day.titleEn],
              },
              vocabulary: (day.learn?.vocabulary || []).map((v, i) => ({
                id: `v_${day.dayNumber}_${i}`,
                word: v.word,
                phonetic: v.phonetic || '',
                meaning: v.meaningHi || v.meaningEn || '',
                translationsByLang: { hi: v.meaningHi || v.meaningEn || '' },
                exampleSentence: v.exampleEn || '',
                exampleTranslationByLang: { hi: v.exampleHi || '' },
                audioText: v.word,
                icon: '📖',
                difficulty: 'A1 Beginner',
              })),
              expressions: (day.learn?.expressions || []).map((e, i) => ({
                id: `e_${day.dayNumber}_${i}`,
                expression: e.phrase || e.text || e.expression || '',
                translationsByLang: { hi: e.meaningHi || '' },
                audioText: e.phrase || e.text || e.expression || '',
                icon: '💬',
              })),
              grammar: { title: day.learn?.grammarRules?.[0]?.title || 'Grammar Rules' },
              dialogues: (day.practice?.dialogues || []).map((d, i) => ({
                id: `d_${day.dayNumber}_${i}`,
                title: d.title || `Scenario ${i + 1}`,
                context: d.context || '',
                lines: (d.turns || d.lines || []).map((t: any) => ({
                  speaker: t.speaker || 'Speaker',
                  avatar: t.avatar || '🗣️',
                  text: t.text || t.line || '',
                  translationsByLang: { hi: t.translationHi || t.translation || '' },
                  audioText: t.text || t.line || '',
                })),
              })),
              practiceExercises: [],
              reviewExercises: [],
              assessmentExercises: [],
            }}
            onComplete={(score, total, weak) => {
              setActiveSection('review');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* SECTION 9: REVIEW & COMPLETION */}
        {activeSection === 'review' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl text-center">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] text-white flex items-center justify-center mx-auto shadow-xl shadow-indigo-500/30 border border-indigo-400/30">
                <Award className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-indigo-400 font-mono">
                  Curiosity English Academy
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  Day {day.dayNumber} Complete!
                </h3>
                <p className="text-base text-indigo-200 font-semibold font-hindi">
                  बधाई! आपने आज का पाठ सफलतापूर्वक पूरा कर लिया है।
                </p>
              </div>

              {/* Spaced Repetition Schedule Info */}
              <div className="bg-slate-950/90 p-4 sm:p-5 rounded-2xl border border-slate-800 text-left space-y-3 shadow-inner">
                <div className="flex items-center space-x-2">
                  <RotateCcw className="w-4 h-4 text-indigo-400" />
                  <h4 className="text-xs font-black uppercase tracking-wider text-white">
                    Automated Spaced Review Schedule
                  </h4>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  This lesson's core concepts ({day.review.spacedRepetitionTag}) will be automatically surfaced for review on intervals:
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {day.review.recommendedIntervalDays.map((interval) => (
                    <span
                      key={`int_${interval}`}
                      className="px-3 py-1 bg-slate-900 text-indigo-300 font-mono text-xs font-bold rounded-lg border border-indigo-500/20 shadow-sm"
                    >
                      +{interval} Days
                    </span>
                  ))}
                </div>
              </div>

              {/* Rewards Box */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-950/90 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 font-bold block">XP Gained</span>
                  <span className="text-sm font-black text-indigo-300 font-display">{dayAlreadyCompleted ? 'No extra XP on review' : `+${HINDI_DAY_XP_REWARD} XP once`}</span>
                </div>
                <div className="bg-slate-950/90 p-3.5 rounded-2xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 font-bold block">Next Day</span>
                  <span className="text-sm font-black text-amber-400 font-display">{day.dayNumber >= HINDI_RELEASED_DAYS && day.dayNumber < HindiCourseService.getTotalPlannedDays() ? 'Days 41–60 are planned and not yet released' : day.dayNumber >= HindiCourseService.getTotalPlannedDays() ? '60-day plan complete' : `Day ${day.dayNumber + 1} becomes available after saving`}</span>
                </div>
              </div>

              {/* Complete & Return Button */}
              <button
                onClick={handleCompleteFullDay}
                disabled={!practiceCompleted || practiceScore === null}
                className={`w-full py-4 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] hover:brightness-110 text-white font-black rounded-2xl text-base sm:text-lg transition shadow-xl shadow-indigo-500/30 border border-indigo-400/30 active:scale-[0.98] flex items-center justify-center space-x-2 ${!practiceCompleted || practiceScore === null ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <span>{practiceScore === null ? 'Complete practice to save progress' : 'Save Progress & Continue (प्रगति सहेजें)'}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Bottom Sequential Navigator */}
        <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-800/80">
          {prevSection ? (
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveSection(prevSection);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer"
            >
              <span>← Previous Section</span>
            </button>
          ) : (
            <div />
          )}

          {nextSection && (
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveSection(nextSection);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-3 px-5 rounded-xl bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] hover:brightness-110 text-white text-xs font-black transition flex items-center space-x-1.5 shadow-md shadow-indigo-500/25 border border-indigo-400/30 cursor-pointer active:scale-95"
            >
              <span>Next Section →</span>
            </button>
          )}
        </div>
      </main>

      {/* Voice & Accent Spoken English Lab Modal */}
      {showSpokenLabModal && (
        <HindiSpokenLabModal
          initialDayNumber={day.dayNumber}
          onClose={() => setShowSpokenLabModal(false)}
        />
      )}

      {/* Celebration Engine: XP Burst Card */}
      {showXpCelebration && (
        <XpCelebrationModal
          xpAmount={xpAwarded}
          dayNumber={day.dayNumber}
          lessonTitle={day.titleEn}
          wordsLearned={day.learn?.vocabulary?.length || 0}
          speakingScore={completedFinalScore}
          onContinue={handleFinishCelebrations}
          onReviewVocabulary={() => {
            setShowXpCelebration(false);
            setActiveSection('learn');
          }}
          onReplaySpeaking={() => {
            setShowXpCelebration(false);
            setShowSpokenLabModal(true);
          }}
        />
      )}

      {/* Celebration Engine: Stage Milestone Card */}
      {showStageCelebration && (
        <StageCompletionModal
          stageNumber={Math.ceil(day.dayNumber / 10)}
          dayNumber={day.dayNumber}
          onClose={handleFinishCelebrations}
          onViewCertificate={() => {
            setShowStageCelebration(false);
            setShowGraduationCert(true);
          }}
        />
      )}

      {/* Celebration Engine: Streak Card */}
      {showStreakCelebration && (
        <StreakCelebrationModal
          streakDays={user?.streakDays || 1}
          onClose={handleFinishCelebrations}
        />
      )}

      {/* Celebration Engine: Graduation Certificate */}
      {showGraduationCert && user && (
        <GraduationCertificateModal
          user={user}
          cefr={day.cefr || 'A1'}
          daysCompleted={HindiCourseProgressService.getProgress(user?.id).completedDays.length}
          vocabLearned={HindiCourseService.countWordsInDays(
            HindiCourseProgressService.getProgress(user?.id)?.completedDays || []
          )}
          dialoguesCompleted={HindiCourseService.countTurnsInDays(
            HindiCourseProgressService.getProgress(user?.id).completedDays
          )}
          totalXp={user.totalXp || 0}
          onClose={handleFinishCelebrations}
        />
      )}

      {/* Flagship Grammar Studio Modal */}
      {showGrammarStudioModal && user && (
        <GrammarExperienceModal
          user={user}
          onClose={() => setShowGrammarStudioModal(false)}
        />
      )}
    </div>
  );
};
