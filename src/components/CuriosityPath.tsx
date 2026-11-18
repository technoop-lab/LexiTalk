import React, { useState } from 'react';
import {
  Trophy,
  Flame,
  Heart,
  Gem,
  BookOpen,
  Lock,
  CheckCircle2,
  Sparkles,
  Award,
  Globe,
  User,
  ShoppingBag
} from 'lucide-react';
import { CourseUnit, LessonNode, CEFRLevel, UserAcademyProfile, NativeLanguageCode } from '../types';
import { CurriculumService } from '../services/CurriculumService';
import { SUPPORTED_NATIVE_LANGUAGES, getLanguageInfo } from '../data/languages';
import { playSoundEffectEffect } from '../utils/audioUtils';
import { LearnerLessonStageMap } from './lesson/LearnerLessonStageMap';
import { ProgressService, ALL_A1_LESSON_IDS } from '../services/ProgressService';
import { EntitlementService } from '../services/EntitlementService';

interface CuriosityPathProps {
  user: UserAcademyProfile;
  onSelectLesson: (lesson: LessonNode) => void;
  onOpenGuidebook: (unit: CourseUnit) => void;
  onOpenStoryMode: () => void;
  onOpenShop: () => void;
  onOpenAccountModal: () => void;
  onOpenCertificate: (cefr: CEFRLevel) => void;
  onChangeNativeLanguage: (lang: NativeLanguageCode) => void;
  onOpenDevAudioTest?: () => void;
  onOpenAdminDashboard?: () => void;
  onOpenAssessment?: () => void;
}

export const CuriosityPath: React.FC<CuriosityPathProps> = ({
  user,
  onSelectLesson,
  onOpenGuidebook,
  onOpenStoryMode,
  onOpenShop,
  onOpenAccountModal,
  onOpenCertificate,
  onChangeNativeLanguage,
  onOpenDevAudioTest,
  onOpenAdminDashboard,
  onOpenAssessment,
}) => {
  const [selectedCEFR, setSelectedCEFR] = useState<CEFRLevel>(
    user.currentCEFR === 'A2' && ProgressService.isA2Unlocked(user) ? 'A2' : 'A1'
  );
  const [selectedUnitId, setSelectedUnitId] = useState<string>('unit_a1_1');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showA2LockModal, setShowA2LockModal] = useState(false);

  const nativeInfo = getLanguageInfo(user.nativeLanguage || 'hi');
  const isAdmin = EntitlementService.isAdmin(user);
  const isA2Unlocked = ProgressService.isA2Unlocked(user);
  const a1Mastery = ProgressService.calculateA1Mastery(user);
  const isA1ExitUnlocked = ProgressService.isA1ExitAssessmentUnlocked(user);

  // Filter units for selected CEFR stage
  const currentUnits = CurriculumService.getUnitsForCEFR(selectedCEFR, user.learningLanguage || 'en');
  const activeUnit = currentUnits.find((u) => u.id === selectedUnitId) || currentUnits[0];

  const handleCEFRSelect = (lvl: CEFRLevel) => {
    const access = EntitlementService.canAccessUnit(user, { id: 'dummy', cefr: lvl });
    if (!access.allowed) {
      playSoundEffectEffect('wrong');
      setShowA2LockModal(true);
      return;
    }
    playSoundEffectEffect('tap');
    setSelectedCEFR(lvl);
    const matching = CurriculumService.getUnitsForCEFR(lvl, user.learningLanguage || 'en');
    if (matching.length > 0) {
      setSelectedUnitId(matching[0].id);
    }
  };

  const handleNodeClick = (lesson: LessonNode, isLocked: boolean) => {
    if (isLocked) {
      playSoundEffectEffect('wrong');
      return;
    }
    playSoundEffectEffect('tap');
    onSelectLesson(lesson);
  };

  return (
    <div className="flex flex-col min-h-full pb-28 bg-[#F6F8FC] dark:bg-[#050816] text-slate-900 dark:text-slate-100 select-none w-full max-w-lg mx-auto transition-colors duration-200">
      {/* Brand Header & User Account Bar */}
      <div className="bg-white dark:bg-slate-900 border-b border-[#D8E3FF] dark:border-slate-800 px-4 py-3 flex items-center justify-between shadow-sm">
        {/* Brand Name */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center font-black text-lg shadow-md">
            🎓
          </div>
          <div>
            <h1 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">Curiosity English Academy</h1>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider block -mt-0.5">
              English Course Path
            </span>
          </div>
        </div>

        {/* Account */}
        <div className="flex items-center space-x-2">
          {isAdmin && onOpenAdminDashboard && (
            <button
              onClick={onOpenAdminDashboard}
              className="px-2.5 py-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-700 dark:text-rose-300 font-mono text-[10px] font-bold rounded-xl border border-rose-500/30 flex items-center space-x-1 transition shadow-sm"
              title="Open Admin Curriculum Dashboard"
            >
              <span>📊 Admin</span>
            </button>
          )}

          {isAdmin && onOpenDevAudioTest && (
            <button
              onClick={onOpenDevAudioTest}
              className="px-2 py-1 bg-indigo-50 dark:bg-indigo-500/20 hover:bg-indigo-100 dark:hover:bg-indigo-500/30 text-indigo-700 dark:text-indigo-300 font-mono text-[10px] font-bold rounded-xl border border-indigo-200 dark:border-indigo-500/30 flex items-center space-x-1 transition"
              title="Open Audio Production Test Lab"
            >
              <span>🎙️ Audio</span>
            </button>
          )}

          <button
            onClick={onOpenAccountModal}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center border border-[#D8E3FF] dark:border-slate-700 text-sm cursor-pointer btn-press"
            title="Switch User Profile"
          >
            {user.avatar || '🦉'}
          </button>
        </div>
      </div>

      {/* CEFR Stage & Language Native Selector Bar */}
      <div className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-[#D8E3FF] dark:border-slate-800 px-4 py-2.5 space-y-2 shadow-sm">
        <div className="flex items-center justify-between">
          {/* CEFR Level Pills */}
          <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar py-0.5">
            {(['A1', 'A2'] as CEFRLevel[]).map((lvl) => {
              const isActive = selectedCEFR === lvl;
              const isLocked = lvl === 'A2' && !isA2Unlocked;
              return (
                <button
                  key={lvl}
                  onClick={() => handleCEFRSelect(lvl)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-black transition-all flex items-center space-x-1 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md scale-105'
                      : isLocked
                      ? 'bg-slate-100 dark:bg-slate-850/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 dark:text-slate-500 border border-[#D8E3FF] dark:border-slate-800'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <span>{lvl}</span>
                  {isLocked && <Lock className="w-2.5 h-2.5 text-slate-400 dark:text-slate-500" />}
                </button>
              );
            })}
          </div>

          {/* Native Source Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center space-x-1 text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 px-2.5 py-1 rounded-xl border border-[#D8E3FF] dark:border-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              <span>{nativeInfo.flag}</span>
              <span className="hidden sm:inline text-[11px]">{nativeInfo.name}</span>
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 top-8 bg-white dark:bg-slate-900 border border-[#D8E3FF] dark:border-slate-800 rounded-2xl shadow-2xl p-2 w-48 space-y-1 z-50">
                <span className="text-[9px] font-bold uppercase text-slate-500 dark:text-slate-400 px-2 block">
                  Learn English From:
                </span>
                {SUPPORTED_NATIVE_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      playSoundEffectEffect('tap');
                      onChangeNativeLanguage(lang.code);
                      setShowLangDropdown(false);
                    }}
                    className={`w-full p-2 rounded-xl text-xs text-left font-bold flex items-center space-x-2 transition cursor-pointer ${
                      user.nativeLanguage === lang.code
                        ? 'bg-emerald-600 text-white'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Gamified Currency & Hearts Bar */}
        <div className="flex items-center justify-between text-xs font-black pt-1 border-t border-[#D8E3FF] dark:border-slate-800/80">
          <div className="flex items-center space-x-2">
            {/* Streak */}
            <div className="flex items-center space-x-1 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-0.5 rounded-xl border border-amber-200 dark:border-amber-500/20">
              <Flame className="w-3.5 h-3.5 fill-amber-500 dark:fill-amber-400 animate-bounce-slow" />
              <span>{user.streakDays}d Streak</span>
            </div>

            {/* Total XP */}
            <span className="text-indigo-600 dark:text-emerald-400 font-bold text-[11px] bg-indigo-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-xl border border-indigo-200 dark:border-emerald-500/20">
              {user.totalXp} XP
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Gems */}
            <button
              onClick={onOpenShop}
              className="flex items-center space-x-1 text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded-xl border border-cyan-200 dark:border-cyan-500/20 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition cursor-pointer"
            >
              <Gem className="w-3.5 h-3.5 fill-cyan-500 dark:fill-cyan-400" />
              <span>{user.gems}</span>
            </button>

            {/* Hearts */}
            <button
              onClick={onOpenShop}
              className="flex items-center space-x-1 text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 px-2 py-0.5 rounded-xl border border-rose-200 dark:border-rose-500/20 hover:bg-rose-100 dark:hover:bg-rose-500/20 transition cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-rose-500" />
              <span>{user.isPro ? '∞' : `${user.hearts}/5`}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Path Container */}
      {currentUnits.length === 0 ? (
        <div className="max-w-md mx-auto w-full px-4 pt-8">
          <div role="status" className="rounded-3xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-950 dark:border-amber-500/30 dark:bg-amber-950/30 dark:text-amber-100">
            <h2 className="font-black">No released course units for this selection</h2>
            <p className="mt-2 text-xs leading-relaxed">This path currently exposes authored English A1 and A2 units only. No lesson path or proficiency summary is available for the selected target language and level.</p>
          </div>
        </div>
      ) : (
      <div className="max-w-md mx-auto w-full px-4 pt-4 space-y-6">
        {/* Unit Header Card */}
        {activeUnit && (
          <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border-2 border-emerald-500/40 p-5 rounded-3xl shadow-xl space-y-3 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-black tracking-widest text-emerald-400 uppercase bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  {activeUnit.cefr} Stage • Unit {activeUnit.unitNumber}
                </span>
                <h2 className="text-lg font-black text-white mt-1.5">{activeUnit.title}</h2>
                <p className="text-xs text-slate-300 mt-1">{activeUnit.description}</p>
              </div>

              {/* Guidebook Button */}
              <button
                onClick={() => onOpenGuidebook(activeUnit)}
                className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl shadow-lg transition active:scale-95 flex flex-col items-center shrink-0 border border-emerald-400/50"
                title="Open Unit Grammar Guidebook"
              >
                <BookOpen className="w-5 h-5" />
                <span className="text-[9px] font-bold mt-0.5">Grammar</span>
              </button>
            </div>
          </div>
        )}

        {/* Audio Stories Banner */}
        <div
          onClick={onOpenStoryMode}
          className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/30 p-4 rounded-3xl cursor-pointer hover:border-purple-400/60 transition shadow-lg flex items-center justify-between group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🎧
            </div>
            <div>
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">
                Audio Story Practice
              </span>
              <h3 className="text-xs font-bold text-white">Interactive Voice Dialogues</h3>
              <p className="text-[11px] text-slate-400">Listen to conversations & answer quizzes</p>
            </div>
          </div>
          <span className="text-xs font-black text-purple-300 bg-purple-500/20 px-3 py-1.5 rounded-xl border border-purple-500/30">
            Listen →
          </span>
        </div>

        {/* Vertical Lesson Path Nodes */}
        <div className="py-4 space-y-8 relative">
          <div className="absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-3 bg-slate-800/80 rounded-full -z-0" />

          {activeUnit?.lessons.map((lesson, idx) => {
            const isCompleted = user.completedLessonIds.includes(lesson.id);
            const accessCheck = EntitlementService.canAccessLesson(user, lesson, activeUnit?.lessons || []);
            const isUnlocked = accessCheck.allowed;

            const offsets = ['translate-x-0', '-translate-x-10', 'translate-x-0', 'translate-x-10', 'translate-x-0'];
            const offsetClass = offsets[idx % offsets.length];

            return (
              <div key={lesson.id} className="relative z-10 space-y-4">
                <div className="flex flex-col items-center">
                  <div className={`transition-all duration-300 ${offsetClass}`}>
                    <button
                      onClick={() => handleNodeClick(lesson, !isUnlocked)}
                      className={`relative w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-300 active:scale-90 ${
                        isCompleted
                          ? 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 border-4 border-amber-300 ring-4 ring-amber-500/30'
                          : isUnlocked
                          ? 'bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 border-4 border-emerald-300 ring-8 ring-emerald-500/20 animate-bounce-slow'
                          : 'bg-slate-800 text-slate-500 border-4 border-slate-700 opacity-80 cursor-not-allowed'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-8 h-8 text-slate-950 stroke-[3]" />
                      ) : isUnlocked ? (
                        <span className="text-3xl">{lesson.icon}</span>
                      ) : (
                        <Lock className="w-7 h-7 text-slate-500" />
                      )}

                      {isUnlocked && !isCompleted && (
                        <span className="absolute -top-7 px-3 py-0.5 bg-emerald-500 text-slate-950 font-black text-[10px] rounded-full uppercase tracking-wider shadow-md animate-pulse">
                          START
                        </span>
                      )}
                    </button>

                    <div className="text-center mt-2 space-y-0.5">
                      <span className="block text-xs font-black text-slate-200">{lesson.title}</span>
                      <span className="block text-[10px] text-slate-400 font-bold">
                        {(lesson.id === 'lesson_a1_1_1' || lesson.id === 'lesson_a1_1_2') ? '18 Stages Inside' : 'Interactive Stage'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded Learner Lesson Stage Map for 18-stage canonical lessons */}
                {(lesson.id === 'lesson_a1_1_1' || lesson.id === 'lesson_a1_1_2') && isUnlocked && (
                  <LearnerLessonStageMap
                    lesson={lesson}
                    user={user}
                    onSelectStage={(stageId) => {
                      try {
                        localStorage.setItem(
                          `curiosity_lesson_state_${lesson.id}`,
                          JSON.stringify({ activeStep: stageId, savedAt: Date.now() })
                        );
                      } catch {
                        // ignore
                      }
                      onSelectLesson(lesson);
                    }}
                    onStartFullLesson={() => onSelectLesson(lesson)}
                  />
                )}
              </div>
            );
          })}

          {/* Unit 1 Consolidation & Assessment Milestone Node */}
          {activeUnit?.id === 'unit_a1_1' && (
            <div className="relative z-10 space-y-4 pt-4">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/40 rounded-3xl p-5 shadow-2xl text-center space-y-3 max-w-xs w-full">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-3xl">
                    🏆
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">
                      Unit 1 Milestone
                    </span>
                    <h3 className="text-sm font-black text-white mt-1">Consolidation & Assessment Layer</h3>
                    <p className="text-[11px] text-slate-300">
                      10 Spaced Retrieval Domains & 32-Item Communicative Exam across Lessons 1–15.
                    </p>
                  </div>

                  <div className="pt-1">
                    <button
                      onClick={() => onOpenGuidebook(activeUnit)}
                      className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs rounded-xl shadow transition"
                    >
                      Open Unit 1 Guidebook & Review →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* A1 Course Exit Assessment Milestone Node */}
          {selectedCEFR === 'A1' && (
            <div className="relative z-10 space-y-4 pt-4">
              <div className="flex flex-col items-center">
                <div className={`border-2 rounded-3xl p-5 shadow-2xl text-center space-y-3 max-w-xs w-full transition ${
                  isA2Unlocked
                    ? 'bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-emerald-500/50 shadow-emerald-950/40'
                    : isA1ExitUnlocked
                    ? 'bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 border-indigo-500/50 shadow-indigo-950/40'
                    : 'bg-slate-900 border-slate-800'
                }`}>
                  <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-3xl border ${
                    isA2Unlocked
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                      : isA1ExitUnlocked
                      ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-400 animate-pulse'
                      : 'bg-slate-800 border-slate-700 text-slate-500'
                  }`}>
                    {isA2Unlocked ? '🎓' : isA1ExitUnlocked ? '🚀' : '🔒'}
                  </div>

                  <div>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
                      isA2Unlocked
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : isA1ExitUnlocked
                        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      A1 Course Progress Gate
                    </span>
                    <h3 className="text-sm font-black text-white mt-1">
                      A1 Course Exit Assessment
                    </h3>
                    <p className="text-[11px] text-slate-300">
                      {isA2Unlocked
                        ? 'A1 course exit requirements are met. A2 course content is unlocked.'
                        : isA1ExitUnlocked
                        ? 'All 90 A1 course lessons are complete. Pass an in-app exit assessment (≥80% overall and meet the configured critical-skill minimums) to unlock A2 course content.'
                        : `Complete all 90 A1 lessons (${a1Mastery.lessonsCompletedCount}/90 completed) to unlock the Exit Exam.`}
                    </p>
                  </div>

                  <div className="pt-1">
                    {isA1ExitUnlocked ? (
                      <button
                        onClick={() => {
                          playSoundEffectEffect('tap');
                          if (onOpenAssessment) onOpenAssessment();
                          else onOpenAccountModal();
                        }}
                        className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition active:scale-95"
                      >
                        {isA2Unlocked ? 'Review Exit Assessment' : 'Take A1 Exit Assessment →'}
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          playSoundEffectEffect('wrong');
                          setShowA2LockModal(true);
                        }}
                        className="w-full py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-400 font-bold text-xs rounded-xl border border-slate-700 transition"
                      >
                        Progression Requirements ({a1Mastery.lessonsCompletedCount}/90)
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Level Diploma / Certificate Milestone Node */}
          <div className="relative z-10 flex flex-col items-center pt-2">
            <button
              onClick={() => onOpenCertificate(selectedCEFR)}
              className="p-4 bg-gradient-to-tr from-amber-400 via-yellow-400 to-amber-500 text-slate-950 rounded-3xl border-4 border-yellow-200 shadow-2xl flex flex-col items-center space-y-1 hover:scale-105 transition"
            >
              <Award className="w-8 h-8 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider">
                {selectedCEFR} Learning Progress Summary
              </span>
              <span className="text-[10px] font-bold text-amber-950">In-app summary only; not an official CEFR credential</span>
            </button>
          </div>
        </div>
      </div>
      )}

      {/* A2 Progression Gatekeeper Modal */}
      {showA2LockModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl text-amber-400 shadow-inner">
              🔒
            </div>

            <div>
              <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                A2 Course Content Locked
              </span>
              <h3 className="text-lg font-black text-white mt-2">
                A1 Course Progress Requirements
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                A2 course content unlocks after all 90 A1 lessons are complete and an in-app exit assessment passes (at least 80% overall plus the configured critical-skill minimums). This course gate is not an official CEFR proficiency result.
              </p>
            </div>

            {/* Checklist */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-left space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">1. Complete All 90 A1 Lessons:</span>
                <span className={`font-black ${isA1ExitUnlocked ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {a1Mastery.lessonsCompletedCount} / 90
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">2. Exit Assessment Score:</span>
                <span className={`font-black ${a1Mastery.assessmentPassed ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {a1Mastery.bestExitScorePercent !== undefined ? `${a1Mastery.bestExitScorePercent}% overall; skill minimums also apply` : 'No saved attempt'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">3. Critical Skill Minimums:</span>
                <span className={`font-black ${a1Mastery.assessmentPassed ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {a1Mastery.assessmentPassed ? 'All Met ✓' : 'Not all course gate requirements met'}
                </span>
              </div>
            </div>

            <div className="pt-2 flex space-x-2">
              <button
                onClick={() => setShowA2LockModal(false)}
                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs rounded-xl transition"
              >
                Close
              </button>
              {isA1ExitUnlocked && onOpenAssessment && (
                <button
                  onClick={() => {
                    setShowA2LockModal(false);
                    onOpenAssessment();
                  }}
                  className="flex-1 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs rounded-xl shadow transition"
                >
                  Go to Exit Exam →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
