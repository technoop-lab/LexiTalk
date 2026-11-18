import React, { useState } from 'react';
import {
  UserAcademyProfile,
  TestScenarioPreset,
  TargetLanguageCode,
  NativeLanguageCode,
  CEFRLevel,
} from '../../types';
import { DeveloperTestService, ALL_CURRICULUM_LESSON_IDS } from '../../services/DeveloperTestService';
import { ALL_A1_LESSON_IDS } from '../../services/ProgressService';
import { CENTRAL_LANGUAGE_REGISTRY, SUPPORTED_NATIVE_LANGUAGES } from '../../data/languages';
import { CURIOSITY_UNITS } from '../../data/curiosityCurriculum';
import {
  X,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Zap,
  Globe,
  Flame,
  Heart,
  Crown,
  BookOpen,
  Award,
  Play,
  Layers,
  ArrowRight,
  MessageSquare,
  Radio,
  Trash2
} from 'lucide-react';
import { ConversationRegistryService } from '../../data/conversations';
import { ConversationProgressService } from '../../services/conversation/ConversationProgressService';
import { SpeechService } from '../../services/speech/SpeechService';

interface DeveloperTestControlModalProps {
  user: UserAcademyProfile;
  onUpdateUser: (updated: UserAcademyProfile) => void;
  onClose: () => void;
  onLaunchLesson?: (lessonId: string) => void;
}

export const DeveloperTestControlModal: React.FC<DeveloperTestControlModalProps> = ({
  user,
  onUpdateUser,
  onClose,
  onLaunchLesson,
}) => {
  const [activeTab, setActiveTab] = useState<'presets' | 'progress' | 'language' | 'jumper' | 'conversation'>('presets');
  const [customXp, setCustomXp] = useState<number>(user.totalXp);
  const [customStreak, setCustomStreak] = useState<number>(user.streakDays);
  const [selectedJumpLessonId, setSelectedJumpLessonId] = useState<string>('lesson_a1_1_1');
  const [selectedJumpUnitId, setSelectedJumpUnitId] = useState<string>('unit_a1_1');
  const [useMockSpeech, setUseMockSpeech] = useState(SpeechService.isUsingMock());

  const SCENARIOS: { id: TestScenarioPreset; title: string; desc: string; icon: string; category: string }[] = [
    {
      id: 'NEW_USER',
      title: 'New Learner (0 Progress)',
      desc: '0 completed lessons, 0 XP, default hearts, A1 not started.',
      icon: '🌱',
      category: 'Foundations',
    },
    {
      id: 'A1_IN_PROGRESS',
      title: 'A1 Mid-Way (35 Lessons)',
      desc: '35 A1 lessons completed across Units 1–3, 1,450 XP, active streak.',
      icon: '🏃',
      category: 'Foundations',
    },
    {
      id: 'A1_COMPLETE',
      title: 'A1 Complete (All 90 Lessons)',
      desc: 'All 90 A1 lessons completed, ready for Exit Exam.',
      icon: '📚',
      category: 'A1 Exit & Gates',
    },
    {
      id: 'A1_EXIT_READY',
      title: 'A1 Exit Assessment Ready',
      desc: 'Eligible for comprehensive A1 Exit Form A evaluation.',
      icon: '🎯',
      category: 'A1 Exit & Gates',
    },
    {
      id: 'A1_EXIT_FAILED',
      title: 'A1 Exit Failed (Score / Skill Deficit)',
      desc: '65% score with Listening deficit. Triggers targeted remediation.',
      icon: '⚠️',
      category: 'A1 Exit & Gates',
    },
    {
      id: 'A1_REMEDIATION',
      title: 'A1 Remediation Active',
      desc: 'Targeted remediation queue loaded with practice exercises.',
      icon: '🩺',
      category: 'A1 Exit & Gates',
    },
    {
      id: 'A1_RETEST_READY',
      title: 'A1 Retest Ready (Form B)',
      desc: 'Remediation completed; Retest Form B assessment unlocked.',
      icon: '🔄',
      category: 'A1 Exit & Gates',
    },
    {
      id: 'A1_MASTERED',
      title: 'A1 Mastered & A2 Unlocked',
      desc: 'Passed Exit Exam (90%), A1 diploma earned, A2 level fully unlocked.',
      icon: '🏆',
      category: 'A2 Mastery & Unlock',
    },
    {
      id: 'A2_UNLOCKED',
      title: 'A2 Stage 1 (Unit 7 Ready)',
      desc: 'A2 unlocked; Lesson 91 (Daily Life & Routines) ready to start.',
      icon: '🔓',
      category: 'A2 Mastery & Unlock',
    },
    {
      id: 'A2_PARTIAL_ACCESS',
      title: 'A2 In Progress (Unit 7 Complete)',
      desc: 'Lessons 91–105 completed; Unit 8 (Work & Jobs) in progress.',
      icon: '💼',
      category: 'A2 Mastery & Unlock',
    },
    {
      id: 'A2_COMPLETE',
      title: 'A2 Complete (All 180 Lessons)',
      desc: 'All 180 A2 lessons completed (Lessons 91–270), ready for A2 Exit Exam.',
      icon: '🎓',
      category: 'A2 Mastery & Unlock',
    },
    {
      id: 'A2_EXIT_READY',
      title: 'A2 Exit Assessment Ready',
      desc: 'Eligible for comprehensive A2 Waystage Exit evaluation.',
      icon: '🎯',
      category: 'A2 Mastery & Unlock',
    },
    {
      id: 'A2_EXIT_FAILED',
      title: 'A2 Exit Failed (Needs Remediation)',
      desc: '64% score on A2 exit exam; remediation queue initialized.',
      icon: '⚠️',
      category: 'A2 Mastery & Unlock',
    },
    {
      id: 'A2_MASTERED_B1_READY',
      title: 'A2 Mastered & B1 Unlocked',
      desc: 'Passed A2 Exit (92%), A2 diploma awarded, B1 gateway unlocked.',
      icon: '🏅',
      category: 'A2 Mastery & Unlock',
    },
    {
      id: 'PREMIUM_USER',
      title: 'Pro Member (Unlimited Hearts)',
      desc: 'Pro subscription active, unlimited hearts, all levels available.',
      icon: '👑',
      category: 'Entitlements',
    },
    {
      id: 'PREMIUM_LOCKED',
      title: 'Free Member (Standard Limits)',
      desc: 'Standard 5 hearts limit, free core A1/A2 access.',
      icon: '🔒',
      category: 'Entitlements',
    },
  ];

  const handleApplyPreset = (preset: TestScenarioPreset) => {
    const updated = DeveloperTestService.applyScenario(preset);
    onUpdateUser(updated);
  };

  const handleUpdateXp = (amount: number) => {
    const updated = DeveloperTestService.setXp(amount);
    onUpdateUser(updated);
    setCustomXp(amount);
  };

  const handleUpdateStreak = (days: number) => {
    const updated = DeveloperTestService.setStreak(days);
    onUpdateUser(updated);
    setCustomStreak(days);
  };

  const handleCompleteAllA1 = () => {
    const updated = DeveloperTestService.batchSetLessonCompletion(ALL_A1_LESSON_IDS, true);
    onUpdateUser(updated);
  };

  const handleResetAllProgress = () => {
    const updated = DeveloperTestService.applyScenario('NEW_USER');
    onUpdateUser(updated);
  };

  const handleTargetLangChange = (targetLang: TargetLanguageCode) => {
    const current = DeveloperTestService.getDeveloperProfile();
    const updated = DeveloperTestService.saveDeveloperProfile({
      ...current,
      learningLanguage: targetLang,
    });
    onUpdateUser(updated);
  };

  const handleInstructionLangChange = (instructionLang: NativeLanguageCode) => {
    const current = DeveloperTestService.getDeveloperProfile();
    const updated = DeveloperTestService.saveDeveloperProfile({
      ...current,
      nativeLanguage: instructionLang,
    });
    onUpdateUser(updated);
  };

  const currentUnit = CURIOSITY_UNITS.find((u) => u.id === selectedJumpUnitId) || CURIOSITY_UNITS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-indigo-500/40 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 bg-indigo-500/20 text-indigo-300 rounded font-bold">
                  TEST CONTROL LAB
                </span>
                <span className="text-xs text-slate-400 font-mono">Curiosity v2.0</span>
              </div>
              <h2 className="text-base font-black text-white">Developer Testing & State Simulation</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-Nav Tabs */}
        <div className="flex border-b border-slate-800 px-4 bg-slate-950/30 overflow-x-auto no-scrollbar">
          {[
            { id: 'presets', label: '⚡ Test Scenarios', count: SCENARIOS.length },
            { id: 'progress', label: '📊 Progress Simulator' },
            { id: 'language', label: '🌐 Language Matrix' },
            { id: 'jumper', label: '🚀 195 Lessons Jumper' },
            { id: 'conversation', label: '🗣 Conversation Lab' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3 text-xs font-bold transition border-b-2 whitespace-nowrap flex items-center space-x-1.5 ${
                activeTab === tab.id
                  ? 'border-indigo-400 text-indigo-300 bg-indigo-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{tab.label}</span>
              {tab.count && (
                <span className="px-1.5 py-0.2 bg-slate-800 text-slate-400 text-[10px] rounded-full font-mono">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {/* TAB 1: PRESET SCENARIOS */}
          {activeTab === 'presets' && (
            <div className="space-y-4">
              <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400">Current Active Preset:</span>
                  <span className="ml-2 font-mono font-bold text-indigo-300">
                    {user.activeTestScenario || 'CUSTOM_STATE'}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">
                  Completed: {user.completedLessonIds?.length || 0} / 195 Lessons
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SCENARIOS.map((sc) => {
                  const isActive = user.activeTestScenario === sc.id;
                  return (
                    <div
                      key={sc.id}
                      className={`p-3.5 rounded-2xl border transition flex flex-col justify-between space-y-2 ${
                        isActive
                          ? 'bg-indigo-950/40 border-indigo-500/60 ring-2 ring-indigo-500/20'
                          : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start space-x-2.5">
                        <span className="text-2xl">{sc.icon}</span>
                        <div>
                          <div className="flex items-center space-x-1.5">
                            <span className="text-xs font-bold text-white">{sc.title}</span>
                            {isActive && (
                              <span className="px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-bold rounded">
                                ACTIVE
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                            {sc.desc}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleApplyPreset(sc.id)}
                        className={`w-full py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1 ${
                          isActive
                            ? 'bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 cursor-default'
                            : 'bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-700'
                        }`}
                      >
                        <span>{isActive ? 'Scenario Loaded' : 'Apply Scenario'}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: PROGRESS SIMULATOR */}
          {activeTab === 'progress' && (
            <div className="space-y-4 text-xs">
              {/* Stat Controls */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* XP Controller */}
                <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                    <Zap className="w-4 h-4" />
                    <span>XP Points</span>
                  </div>
                  <div className="text-lg font-black text-white">{user.totalXp}</div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleUpdateXp(user.totalXp + 100)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-[10px] font-bold text-slate-300"
                    >
                      +100
                    </button>
                    <button
                      onClick={() => handleUpdateXp(user.totalXp + 500)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-[10px] font-bold text-slate-300"
                    >
                      +500
                    </button>
                    <button
                      onClick={() => handleUpdateXp(0)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-[10px] font-bold text-rose-300"
                    >
                      0
                    </button>
                  </div>
                </div>

                {/* Gems Controller */}
                <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center space-x-1.5 text-cyan-400 font-bold">
                    <Sparkles className="w-4 h-4" />
                    <span>Gems</span>
                  </div>
                  <div className="text-lg font-black text-white">{user.gems}</div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => {
                        const updated = DeveloperTestService.setGems(user.gems + 200);
                        onUpdateUser(updated);
                      }}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-[10px] font-bold text-slate-300"
                    >
                      +200
                    </button>
                    <button
                      onClick={() => {
                        const updated = DeveloperTestService.setGems(9999);
                        onUpdateUser(updated);
                      }}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-[10px] font-bold text-slate-300"
                    >
                      MAX
                    </button>
                  </div>
                </div>

                {/* Hearts Controller */}
                <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center space-x-1.5 text-rose-400 font-bold">
                    <Heart className="w-4 h-4" />
                    <span>Hearts</span>
                  </div>
                  <div className="text-lg font-black text-white">
                    {user.isPro ? '∞ (Pro)' : `${user.hearts}/5`}
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => {
                        const updated = DeveloperTestService.setHearts(1);
                        onUpdateUser(updated);
                      }}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-[10px] font-bold text-slate-300"
                    >
                      1
                    </button>
                    <button
                      onClick={() => {
                        const updated = DeveloperTestService.setHearts(5);
                        onUpdateUser(updated);
                      }}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-[10px] font-bold text-slate-300"
                    >
                      5
                    </button>
                    <button
                      onClick={() => {
                        const updated = DeveloperTestService.setHearts(9999);
                        onUpdateUser(updated);
                      }}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-[10px] font-bold text-slate-300"
                    >
                      ∞
                    </button>
                  </div>
                </div>

                {/* Streak Controller */}
                <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center space-x-1.5 text-amber-400 font-bold">
                    <Flame className="w-4 h-4" />
                    <span>Streak</span>
                  </div>
                  <div className="text-lg font-black text-white">{user.streakDays} Days</div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleUpdateStreak(user.streakDays + 1)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-[10px] font-bold text-slate-300"
                    >
                      +1
                    </button>
                    <button
                      onClick={() => handleUpdateStreak(14)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-[10px] font-bold text-slate-300"
                    >
                      14d
                    </button>
                    <button
                      onClick={() => handleUpdateStreak(30)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-[10px] font-bold text-slate-300"
                    >
                      30d
                    </button>
                  </div>
                </div>
              </div>

              {/* Batch Actions */}
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-3">
                <h3 className="text-xs font-black text-slate-200 uppercase tracking-wider">
                  Batch Curriculum Operations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    onClick={handleCompleteAllA1}
                    className="p-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl font-bold flex items-center justify-center space-x-1.5 transition"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Complete All A1 (90 Lessons)</span>
                  </button>

                  <button
                    onClick={() => {
                      const updated = DeveloperTestService.applyScenario('A2_UNLOCKED');
                      onUpdateUser(updated);
                    }}
                    className="p-2.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-xl font-bold flex items-center justify-center space-x-1.5 transition"
                  >
                    <Award className="w-4 h-4" />
                    <span>Unlock A2 Gate & Pass Exit</span>
                  </button>

                  <button
                    onClick={handleResetAllProgress}
                    className="p-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-xl font-bold flex items-center justify-center space-x-1.5 transition"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset All Test Progress</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LANGUAGE MATRIX */}
          {activeTab === 'language' && (
            <div className="space-y-4 text-xs">
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2 text-indigo-400 font-bold">
                  <Globe className="w-4 h-4" />
                  <span>Target Learning Language</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Switch the active target language trajectory to inspect curriculum allocations and architectural readiness.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                  {CENTRAL_LANGUAGE_REGISTRY.map((lang) => {
                    const isTarget = user.learningLanguage === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => handleTargetLangChange(lang.code)}
                        className={`p-2.5 rounded-xl border text-left flex items-center space-x-2 transition ${
                          isTarget
                            ? 'bg-indigo-600/30 border-indigo-500 text-white font-bold'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <div>
                          <div className="text-xs">{lang.name}</div>
                          <span className={`text-[9px] font-mono px-1 rounded ${
                            lang.status === 'ACTIVE_PRODUCTION'
                              ? 'text-emerald-400 bg-emerald-500/10'
                              : 'text-amber-400 bg-amber-500/10'
                          }`}>
                            {lang.status}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                  <Globe className="w-4 h-4" />
                  <span>Instruction / Native Language</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SUPPORTED_NATIVE_LANGUAGES.map((lang) => {
                    const isInstruction = user.nativeLanguage === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => handleInstructionLangChange(lang.code)}
                        className={`p-2.5 rounded-xl border text-left flex items-center space-x-2 transition ${
                          isInstruction
                            ? 'bg-emerald-600/30 border-emerald-500 text-white font-bold'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <div>
                          <div className="text-xs">{lang.name}</div>
                          <div className="text-[10px] text-slate-400">{lang.nativeName}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: QUICK 195 LESSON JUMPER */}
          {activeTab === 'jumper' && (
            <div className="space-y-4 text-xs">
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-3">
                <h3 className="font-bold text-white flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span>Jump Directly to Any of 195 Lessons</span>
                </h3>
                <p className="text-[11px] text-slate-400">
                  Instantly bypass prerequisites and test any lesson in the active Lesson Engine.
                </p>

                {/* Unit Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                    1. Select Unit (Units 1–13):
                  </label>
                  <select
                    value={selectedJumpUnitId}
                    onChange={(e) => {
                      setSelectedJumpUnitId(e.target.value);
                      const unit = CURIOSITY_UNITS.find((u) => u.id === e.target.value);
                      if (unit && unit.lessons.length > 0) {
                        setSelectedJumpLessonId(unit.lessons[0].id);
                      }
                    }}
                    className="w-full bg-slate-900 border border-slate-700 text-slate-100 text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-indigo-500 cursor-pointer"
                  >
                    {CURIOSITY_UNITS.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.cefr} Level • Unit {u.unitNumber}: {u.title} ({u.lessons.length} lessons)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Lesson Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                    2. Select Lesson:
                  </label>
                  <select
                    value={selectedJumpLessonId}
                    onChange={(e) => setSelectedJumpLessonId(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 text-slate-100 text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-indigo-500 cursor-pointer"
                  >
                    {currentUnit?.lessons.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.icon} {l.id} — {l.title}
                      </option>
                    ))}
                  </select>
                </div>

                {onLaunchLesson && (
                  <button
                    onClick={() => {
                      onLaunchLesson(selectedJumpLessonId);
                      onClose();
                    }}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg transition active:scale-98"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Launch Selected Lesson ({selectedJumpLessonId})</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: CONVERSATION LAB TESTING */}
          {activeTab === 'conversation' && (
            <div className="space-y-4">
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs">
                    <MessageSquare className="w-4 h-4" />
                    <span>Conversation Lab Test & Speech Harness</span>
                  </div>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md font-mono">
                    2 Vertical Slice Scenarios
                  </span>
                </div>

                <p className="text-xs text-slate-300">
                  Inspect conversation progress records, toggle on-device speech vs mock streaming providers, and reset conversational mastery.
                </p>
              </div>

              {/* Speech Provider Control */}
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Radio className="w-4 h-4 text-sky-400" />
                  <span>Speech Provider Settings & Android QA Harness</span>
                </span>

                <div className="flex items-center justify-between text-xs text-slate-200 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div>
                    <span className="font-bold">Mock Audio Streaming Provider:</span>
                    <p className="text-[11px] text-slate-400">
                      Simulates streaming word-by-word transcription without requiring microphone hardware.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const next = !useMockSpeech;
                      setUseMockSpeech(next);
                      SpeechService.setUseMockProvider(next);
                    }}
                    className={`px-3 py-1.5 rounded-xl font-black text-xs transition ${
                      useMockSpeech
                        ? 'bg-sky-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {useMockSpeech ? 'MOCK ACTIVE' : 'SYSTEM NATIVE'}
                  </button>
                </div>

                {/* Android Bridge Test Trigger Buttons */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-bold text-slate-400">Simulate Android Native Speech Bridge Events:</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).onAndroidSpeechResult) {
                          (window as any).onAndroidSpeechResult('Hello, my name is David. Nice to meet you.', true);
                        }
                      }}
                      className="px-2.5 py-1.5 bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-700/50 text-emerald-300 text-[11px] font-bold rounded-lg transition"
                    >
                      🎤 Final Transcript
                    </button>
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).onAndroidSpeechResult) {
                          (window as any).onAndroidSpeechResult('Hello, my name is...', false);
                        }
                      }}
                      className="px-2.5 py-1.5 bg-sky-950/50 hover:bg-sky-900/60 border border-sky-700/50 text-sky-300 text-[11px] font-bold rounded-lg transition"
                    >
                      🎙️ Partial Transcript
                    </button>
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).onAndroidSpeechError) {
                          (window as any).onAndroidSpeechError('permission_denied', 'Microphone permission denied.');
                        }
                      }}
                      className="px-2.5 py-1.5 bg-amber-950/50 hover:bg-amber-900/60 border border-amber-700/50 text-amber-300 text-[11px] font-bold rounded-lg transition"
                    >
                      ⚠️ Denied Perm
                    </button>
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).onAndroidSpeechError) {
                          (window as any).onAndroidSpeechError('device_offline', 'Offline speech recognition unavailable on device.');
                        }
                      }}
                      className="px-2.5 py-1.5 bg-rose-950/50 hover:bg-rose-900/60 border border-rose-700/50 text-rose-300 text-[11px] font-bold rounded-lg transition"
                    >
                      📵 Speech Unavailable
                    </button>
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).onAndroidSpeechError) {
                          (window as any).onAndroidSpeechError('no_speech', 'No speech detected before timeout.');
                        }
                      }}
                      className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-[11px] font-bold rounded-lg transition"
                    >
                      ⏱️ Speech Timeout
                    </button>
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).onAndroidSpeechEnd) {
                          (window as any).onAndroidSpeechEnd();
                        }
                      }}
                      className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-[11px] font-bold rounded-lg transition"
                    >
                      🛑 Session End
                    </button>
                  </div>
                </div>
              </div>

              {/* Conversation Scenarios List */}
              <div className="space-y-2">
                <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                  Registered Conversations:
                </span>
                <div className="space-y-2">
                  {ConversationRegistryService.getAllConversations().map((c) => {
                    const prog = ConversationProgressService.getProgress(c.id);
                    return (
                      <div
                        key={c.id}
                        className="bg-slate-950/40 border border-slate-800 rounded-2xl p-3.5 flex items-center justify-between text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-white">[{c.cefr}] {c.title}</span>
                            {prog?.isMastered && (
                              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.2 rounded-full font-bold">
                                MASTERED
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400">
                            Attempts: {prog?.attemptsCount || 0} • Best Score: {prog?.bestScore || 0}% • Turns: {c.turns.length}
                          </p>
                        </div>

                        <button
                          onClick={() => {
                            ConversationProgressService.resetProgress(c.id);
                            alert(`Reset progress for ${c.id}`);
                          }}
                          className="p-2 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition"
                          title="Reset progress"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs">
          <span className="text-[11px] text-slate-400 font-mono">
            Mode: <strong className="text-emerald-400">DEVELOPER_TESTER</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl transition"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
};
