import React, { lazy, Suspense, useState } from 'react';
import {
  Home,
  Compass,
  Zap,
  User,
  Settings,
  Flame,
  ShieldCheck,
  Globe,
  Sparkles,
  ChevronRight,
  BookOpen,
  RotateCcw,
  BarChart3,
  MessageSquare,
  Sun,
  Moon,
  LayoutGrid,
  Layers,
  SpellCheck
} from 'lucide-react';
import { UserAcademyProfile, CourseUnit, LessonNode } from '../../types';

// Split the larger practice areas into feature chunks. Users download a section
// when they first open it rather than blocking the initial home screen.
function lazyNamed<P extends object>(
  importer: () => Promise<{ default: React.ComponentType<P> }>,
): React.FC<P> {
  const Component = lazy(importer);
  const LazyFeature: React.FC<P> = (props) => (
    <Suspense fallback={<div className="p-6 text-center text-sm text-slate-500">Loading…</div>}>
      <Component {...props} />
    </Suspense>
  );
  return LazyFeature;
}

const LearnerHomeDashboard = lazyNamed(() => import('./LearnerHomeDashboard').then(m => ({ default: m.LearnerHomeDashboard })));
const LearningJourneySelector = lazyNamed(() => import('./LearningJourneySelector').then(m => ({ default: m.LearningJourneySelector })));
const LanguageSetupModal = lazyNamed(() => import('./LanguageSetupModal').then(m => ({ default: m.LanguageSetupModal })));
const UnitDetailView = lazyNamed(() => import('./UnitDetailView').then(m => ({ default: m.UnitDetailView })));
const LessonOverviewModal = lazyNamed(() => import('./LessonOverviewModal').then(m => ({ default: m.LessonOverviewModal })));
const VocabExperienceModal = lazyNamed(() => import('./VocabExperienceModal').then(m => ({ default: m.VocabExperienceModal })));
const GrammarExperienceModal = lazyNamed(() => import('./GrammarExperienceModal').then(m => ({ default: m.GrammarExperienceModal })));
const SentenceBuilderView = lazyNamed(() => import('./SentenceBuilderView').then(m => ({ default: m.SentenceBuilderView })));
const DialoguePlayerView = lazyNamed(() => import('./DialoguePlayerView').then(m => ({ default: m.DialoguePlayerView })));
const SkillExperiences = lazyNamed(() => import('./SkillExperiences').then(m => ({ default: m.SkillExperiences })));
const ReviewCenterView = lazyNamed(() => import('./ReviewCenterView').then(m => ({ default: m.ReviewCenterView })));
const DailyPracticeView = lazyNamed(() => import('./DailyPracticeView').then(m => ({ default: m.DailyPracticeView })));
const ProgressDetailView = lazyNamed(() => import('./ProgressDetailView').then(m => ({ default: m.ProgressDetailView })));
const AssessmentCenterView = lazyNamed(() => import('./AssessmentCenterView').then(m => ({ default: m.AssessmentCenterView })));
const LearnerProfileView = lazyNamed(() => import('./LearnerProfileView').then(m => ({ default: m.LearnerProfileView })));
const ConversationLabView = lazyNamed(() => import('../conversation/ConversationLabView').then(m => ({ default: m.ConversationLabView })));
const CuriosityPath = lazyNamed(() => import('../CuriosityPath').then(m => ({ default: m.CuriosityPath })));
const HindiCourseHome = lazyNamed(() => import('../hindi/HindiCourseHome').then(m => ({ default: m.HindiCourseHome })));
const HindiLessonView = lazyNamed(() => import('../hindi/HindiLessonView').then(m => ({ default: m.HindiLessonView })));
const HindiSpokenLabModal = lazyNamed(() => import('../hindi/HindiSpokenLabModal').then(m => ({ default: m.HindiSpokenLabModal })));





















import { HindiDayLesson } from '../../types/hindiCourse';
import { HindiCourseService } from '../../services/HindiCourseService';
import { EntitlementService } from '../../services/EntitlementService';
import { getLanguageRegistryEntry } from '../../data/languages';
import { playSoundEffectEffect } from '../../utils/audioUtils';
import { useTheme } from '../../theme/ThemeContext';

interface LearnerAppShellProps {
  user: UserAcademyProfile;
  onUpdateUser: (updated: UserAcademyProfile) => void;
  onLaunchLesson: (lessonId: string) => void;
  onAdminClick: () => void;
  onOpenStory?: (storyId: string) => void;
  onOpenShop?: () => void;
  onReplayOnboarding?: () => void;
}

export type LearnerNavTab = 'HOME' | 'PATH' | 'HINDI_COURSE' | 'PRACTICE' | 'PROFILE';

export const LearnerAppShell: React.FC<LearnerAppShellProps> = ({
  user,
  onUpdateUser,
  onLaunchLesson,
  onAdminClick,
  onOpenStory,
  onOpenShop,
  onReplayOnboarding,
}) => {
  const [activeTab, setActiveTab] = useState<LearnerNavTab>('HOME');
  const [activeHindiDay, setActiveHindiDay] = useState<HindiDayLesson | null>(null);
  const [practiceSubTab, setPracticeSubTab] = useState<
    'hub' | 'daily' | 'conversation' | 'sentence' | 'dialogue' | 'skills' | 'review' | 'progress' | 'vocab' | 'grammar'
  >('hub');

  // Theme context
  const { toggleTheme, isDark } = useTheme();

  // Modal States
  const [showJourneySelector, setShowJourneySelector] = useState(false);
  const [showLanguageSetup, setShowLanguageSetup] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<CourseUnit | null>(null);
  const [selectedOverviewLesson, setSelectedOverviewLesson] = useState<LessonNode | null>(null);
  const [showVocabModal, setShowVocabModal] = useState(false);
  const [showGrammarModal, setShowGrammarModal] = useState(false);
  const [showSpokenLabModal, setShowSpokenLabModal] = useState(false);

  const targetReg = getLanguageRegistryEntry(user.learningLanguage || 'en');
  // The flag reflects the accent being taught, not the target language.
  const activeAccent = user.preferences?.accentPreference;
  const accentFlag = activeAccent === 'en-US' ? '\u{1F1FA}\u{1F1F8}' : activeAccent === 'en-GB' ? '\u{1F1EC}\u{1F1E7}' : '\u{1F1EE}\u{1F1F3}';
  const isAdmin = EntitlementService.isAdmin(user);

  const handleTabChange = (tab: LearnerNavTab) => {
    playSoundEffectEffect('tap');
    setActiveHindiDay(null);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateFromHome = (view: string) => {
    playSoundEffectEffect('tap');
    setActiveHindiDay(null);
    if (view === 'HOME') {
      setActiveTab('HOME');
    } else if (view === 'PATH' || view === 'LEARN') {
      setActiveTab('PATH');
    } else if (view === 'HINDI_COURSE' || view === 'HINDI') {
      setActiveTab('HINDI_COURSE');
    } else if (view === 'PRACTICE') {
      setActiveTab('PRACTICE');
      setPracticeSubTab('hub');
    } else if (view === 'CONVERSATION') {
      setActiveTab('PRACTICE');
      setPracticeSubTab('conversation');
    } else if (view === 'REVIEW') {
      setActiveTab('PRACTICE');
      setPracticeSubTab('review');
    } else if (view === 'PROGRESS') {
      setActiveTab('PRACTICE');
      setPracticeSubTab('progress');
    } else if (view === 'PROFILE') {
      setActiveTab('PROFILE');
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#050816] text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-[#335CFF] selection:text-white transition-colors duration-250">
      {/* Top Header Shell */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-[#0B1225]/90 backdrop-blur-xl border-b border-[#D8E3FF] dark:border-white/10 px-4 py-3 flex items-center justify-between shadow-sm">
        {/* Left: Brand & Active Journey Flag */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setShowJourneySelector(true);
            }}
            className="flex items-center space-x-2 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 px-3 py-1.5 rounded-2xl border border-[#D8E3FF] dark:border-slate-800 transition shadow-sm active:scale-95 cursor-pointer btn-press"
            aria-label="Switch Learning Journey"
          >
            <span className="text-xl">{accentFlag}</span>
            <span className="text-sm font-black text-slate-900 dark:text-white font-display">{targetReg.name}</span>
            <span className="text-[10px] bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300 font-black px-2 py-0.5 rounded-lg border border-emerald-200 dark:border-emerald-500/30">
              {user.currentCEFR || 'A1'}
            </span>
          </button>
        </div>

        {/* Right Stats & Nav Controls */}
        <div className="flex items-center space-x-2">
          <div
            className="flex items-center space-x-1.5 text-amber-600 dark:text-amber-400 font-black text-xs bg-amber-50 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-500/20 shadow-sm"
            title={`${user.streakDays} Day Learning Streak`}
          >
            <Flame className="w-4 h-4 fill-amber-500 dark:fill-amber-400 animate-flame" />
            <span className="font-display">{user.streakDays}d</span>
          </div>

          <div
            className="flex items-center space-x-1.5 text-indigo-600 dark:text-indigo-400 font-black text-xs bg-indigo-50 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-500/20 shadow-sm"
            title={`${user.totalXp} Total XP Earned`}
          >
            <Zap className="w-4 h-4 fill-indigo-600 dark:fill-indigo-400" />
            <span className="font-display">{user.totalXp} XP</span>
          </div>

          {/* Quick Theme Toggle Button */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              toggleTheme();
            }}
            className="p-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-xl border border-[#D8E3FF] dark:border-slate-800 transition min-w-[40px] min-h-[40px] flex items-center justify-center active:scale-95 cursor-pointer btn-press"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Settings & Language Setup */}
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setShowLanguageSetup(true);
            }}
            className="p-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-xl border border-[#D8E3FF] dark:border-slate-800 transition min-w-[40px] min-h-[40px] flex items-center justify-center active:scale-95 cursor-pointer btn-press"
            title="Language & Theme Settings"
            aria-label="Configure Language Setup"
          >
            <Settings className="w-4 h-4" />
          </button>

          {isAdmin && onAdminClick && (
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                onAdminClick();
              }}
              className="px-3 py-1.5 bg-purple-50 hover:bg-purple-100 dark:bg-purple-500/10 dark:hover:bg-purple-500/20 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/30 text-xs font-black rounded-xl transition flex items-center space-x-1 active:scale-95 cursor-pointer btn-press"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>
          )}
        </div>
      </header>

      {/* Main View Container */}
      <main className="flex-1 w-full max-w-lg mx-auto pb-28">
        {/* ACTIVE HINDI DAY LESSON EXPERIENCE */}
        {activeHindiDay ? (
          <HindiLessonView
            day={activeHindiDay}
            user={user}
            userId={user.id}
            onBackToCourseHome={() => {
              setActiveHindiDay(null);
              setActiveTab('HINDI_COURSE');
            }}
            onDayCompleted={(dayNum, score) => {
              setActiveHindiDay(null);
              setActiveTab('HINDI_COURSE');
            }}
          />
        ) : (
          <>
            {/* TAB 1: HOME */}
            {activeTab === 'HOME' && (
              <LearnerHomeDashboard
                user={user}
                onContinueLesson={(lessonId) => onLaunchLesson(lessonId)}
                onNavigate={handleNavigateFromHome}
                onOpenJourneySelector={() => setShowJourneySelector(true)}
                onOpenLanguageSetup={() => setShowLanguageSetup(true)}
                onOpenVocabStudio={() => setShowVocabModal(true)}
                onOpenSpokenLab={() => setShowSpokenLabModal(true)}
              />
            )}

            {/* TAB 2: PATH (Curiosity Path & Guided Learning) */}
            {activeTab === 'PATH' && (
              selectedUnit ? (
                <UnitDetailView
                  unit={selectedUnit}
                  user={user}
                  onSelectLesson={(lesson) => setSelectedOverviewLesson(lesson)}
                  onOpenGuidebook={() => setShowGrammarModal(true)}
                  onBack={() => setSelectedUnit(null)}
                />
              ) : (
                <CuriosityPath
                  user={user}
                  onSelectLesson={(lesson) => setSelectedOverviewLesson(lesson)}
                  onOpenGuidebook={(unit) => {
                    setSelectedUnit(unit);
                    setShowGrammarModal(true);
                  }}
                  onOpenStoryMode={onOpenStory ? () => onOpenStory('story_1') : () => {}}
                  onOpenShop={onOpenShop || (() => {})}
                  onOpenAccountModal={() => setShowJourneySelector(true)}
                  onOpenCertificate={() => {
                    setActiveTab('PRACTICE');
                    setPracticeSubTab('progress');
                  }}
                  onChangeNativeLanguage={(lang) => onUpdateUser({ ...user, nativeLanguage: lang })}
                  onOpenAssessment={() => {
                    setActiveTab('PRACTICE');
                    setPracticeSubTab('progress');
                  }}
                />
              )
            )}

            {/* TAB 3: HINDI-SPEAKER COURSE (60-Day Hindi Course) */}
            {activeTab === 'HINDI_COURSE' && (
              <HindiCourseHome
                user={user}
                onLaunchDayLesson={(dayLesson) => {
                  setActiveHindiDay(dayLesson);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSwitchTab={(t) => handleTabChange(t as LearnerNavTab)}
              />
            )}

            {/* TAB 4: PRACTICE (Hub menu → focused tool, with quick switcher inside) */}
            {activeTab === 'PRACTICE' && (
              <div className="flex flex-col space-y-4 p-4 sm:p-5 w-full max-w-lg mx-auto">
                {/* PRACTICE HUB — main menu shown when no tool is open */}
                {practiceSubTab === 'hub' && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="flex items-center justify-between px-1">
                      <div>
                        <h2 className="text-xl font-black text-slate-900 dark:text-white font-display tracking-tight">
                          Practice Hub
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          Pick a tool — अभ्यास के लिए एक टूल चुनें
                        </p>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 px-2.5 py-1 rounded-full">
                        9 Tools
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'daily', label: 'Daily Practice', hi: 'रोज़ाना अभ्यास', icon: Zap, from: 'from-[#335CFF]', to: 'to-[#6D5DF6]', action: () => setPracticeSubTab('daily') },
                        { id: 'conversation', label: 'Conversation Lab', hi: 'बातचीत लैब', icon: MessageSquare, from: 'from-rose-500', to: 'to-orange-500', action: () => setPracticeSubTab('conversation') },
                        { id: 'sentence', label: 'Sentence Builder', hi: 'वाक्य निर्माण', icon: BookOpen, from: 'from-emerald-500', to: 'to-teal-500', action: () => setPracticeSubTab('sentence') },
                        { id: 'dialogue', label: 'Spoken Dialogue', hi: 'बोलचाल संवाद', icon: Sparkles, from: 'from-amber-500', to: 'to-orange-500', action: () => setPracticeSubTab('dialogue') },
                        { id: 'skills', label: 'Skill Modules', hi: 'कौशल मॉड्यूल', icon: Compass, from: 'from-sky-500', to: 'to-indigo-500', action: () => setPracticeSubTab('skills') },
                        { id: 'review', label: 'Spaced Review', hi: 'दोहराव समीक्षा', icon: RotateCcw, from: 'from-violet-500', to: 'to-purple-500', action: () => setPracticeSubTab('review') },
                        { id: 'progress', label: 'Progress & Tests', hi: 'प्रगति व परीक्षा', icon: BarChart3, from: 'from-teal-600', to: 'to-emerald-500', action: () => setPracticeSubTab('progress') },
                        { id: 'vocab', label: 'Vocabulary Studio', hi: 'शब्दकोश स्टूडियो', icon: Layers, from: 'from-fuchsia-500', to: 'to-pink-500', action: () => setShowVocabModal(true) },
                        { id: 'grammar', label: 'Grammar Handbook', hi: 'व्याकरण पुस्तिका', icon: SpellCheck, from: 'from-indigo-600', to: 'to-blue-500', action: () => setShowGrammarModal(true) },
                      ].map((tile) => {
                        const Icon = tile.icon;
                        return (
                          <button
                            key={tile.id}
                            onClick={() => {
                              playSoundEffectEffect('tap');
                              tile.action();
                            }}
                            className="group bg-white dark:bg-slate-900 border border-[#D8E3FF] dark:border-slate-800 rounded-3xl p-4 text-left space-y-2 hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all active:scale-[0.97] cursor-pointer btn-press min-h-[124px] flex flex-col"
                          >
                            <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${tile.from} ${tile.to} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="text-[13px] font-black text-slate-900 dark:text-white leading-tight">{tile.label}</div>
                              <div className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold font-hindi leading-tight">{tile.hi}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* INSIDE A TOOL — compact switcher with quick way back to the hub */}
                {practiceSubTab !== 'hub' && (
                  <div className="flex space-x-2 overflow-x-auto scrollbar-none py-1">
                    <button
                      onClick={() => {
                        playSoundEffectEffect('tap');
                        setPracticeSubTab('hub');
                      }}
                      className="px-3.5 py-2.5 rounded-2xl text-xs font-black transition whitespace-nowrap flex items-center space-x-1.5 border min-h-[44px] cursor-pointer btn-press bg-white dark:bg-slate-900 border-[#D8E3FF] dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850"
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                      <span>All tools</span>
                    </button>
                    {[
                      { id: 'daily', label: 'Daily Practice', icon: Zap },
                      { id: 'conversation', label: '🗣 Conversation Lab', icon: MessageSquare },
                      { id: 'sentence', label: 'Sentence Builder', icon: BookOpen },
                      { id: 'dialogue', label: 'Spoken Dialogue', icon: Sparkles },
                      { id: 'skills', label: 'Skill Modules', icon: Compass },
                      { id: 'review', label: 'Spaced Review', icon: RotateCcw },
                      { id: 'progress', label: 'Progress & Tests', icon: BarChart3 },
                    ].map((sub) => {
                      const isCurrent = practiceSubTab === sub.id;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => {
                            playSoundEffectEffect('tap');
                            setPracticeSubTab(sub.id as any);
                          }}
                          className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap flex items-center space-x-1.5 border min-h-[44px] cursor-pointer btn-press ${
                            isCurrent
                              ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white border-indigo-400/40 font-black shadow-md'
                              : 'bg-white dark:bg-slate-900 border-[#D8E3FF] dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          <span>{sub.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {practiceSubTab === 'daily' && (
                  <DailyPracticeView user={user} onUpdateUser={onUpdateUser} />
                )}
                {practiceSubTab === 'conversation' && (
                  <ConversationLabView user={user} onUpdateUser={onUpdateUser} />
                )}
                {practiceSubTab === 'sentence' && (
                  <SentenceBuilderView user={user} />
                )}
                {practiceSubTab === 'dialogue' && (
                  <DialoguePlayerView user={user} />
                )}
                {practiceSubTab === 'skills' && (
                  <SkillExperiences user={user} />
                )}
                {practiceSubTab === 'review' && (
                  <ReviewCenterView
                    user={user}
                    onStartLessonReview={() => onLaunchLesson('lesson_a1_1_1')}
                    onUpdateUser={onUpdateUser}
                  />
                )}
                {practiceSubTab === 'progress' && (
                  <div className="space-y-6">
                    <ProgressDetailView
                      user={user}
                      onLaunchReviewDomain={() => setPracticeSubTab('review')}
                      onLaunchAssessment={() => onLaunchLesson('lesson_a1_1_1')}
                    />
                    <AssessmentCenterView
                      user={user}
                      onStartAssessment={() => onLaunchLesson('lesson_a1_1_1')}
                      onUpdateUser={onUpdateUser}
                    />
                  </div>
                )}
              </div>
            )}

            {/* TAB 5: PROFILE */}
            {activeTab === 'PROFILE' && (
              <LearnerProfileView
                user={user}
                onOpenJourneySelector={() => setShowJourneySelector(true)}
                onOpenLanguageSetup={() => setShowLanguageSetup(true)}
                onAdminClick={isAdmin ? onAdminClick : undefined}
                onReplayOnboarding={onReplayOnboarding}
              />
            )}
          </>
        )}
      </main>

      {/* Viewport-Level Floating Glass Bottom Navigation Dock (Hidden inside active lesson) */}
      {!activeHindiDay && (
        <nav
          id="learner-bottom-nav"
          aria-label="Main Navigation"
          className="fixed left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.25rem)] max-w-lg pointer-events-none flex justify-center pb-[env(safe-area-inset-bottom,0px)]"
          style={{
            bottom: 'max(0.75rem, env(safe-area-inset-bottom, 0.75rem))',
            width: 'min(calc(100vw - 1.25rem), 32rem)',
          }}
        >
          <div className="w-full bg-white/90 dark:bg-[#0B1225]/90 backdrop-blur-2xl border border-[#D8E3FF]/90 dark:border-white/10 rounded-[28px] shadow-2xl shadow-indigo-950/15 dark:shadow-black/60 p-2 grid grid-cols-5 gap-1.5 pointer-events-auto transition-all duration-300">
            {[
              { id: 'HOME', label: 'Home', icon: Home },
              { id: 'PATH', label: 'Path', icon: Compass },
              { id: 'HINDI_COURSE', label: 'Course', icon: BookOpen },
              { id: 'PRACTICE', label: 'Practice', icon: Zap },
              { id: 'PROFILE', label: 'Profile', icon: User },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id.toLowerCase()}`}
                  onClick={() => handleTabChange(tab.id as LearnerNavTab)}
                  className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-[20px] transition-all duration-200 min-h-[52px] cursor-pointer btn-press ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] font-black shadow-lg shadow-indigo-500/30 scale-[1.03]'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5 active:scale-95'
                  }`}
                  aria-label={tab.label}
                >
                  {isActive && (
                    <span className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                  )}
                  <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110' : 'opacity-80'}`} />
                  <span className={`text-[10px] sm:text-[11px] tracking-tight mt-0.5 whitespace-nowrap leading-none ${isActive ? 'font-black text-white' : 'font-semibold text-slate-500 dark:text-slate-400'}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {/* Modals */}
      {showJourneySelector && (
        <LearningJourneySelector
          user={user}
          onUpdateUser={(updated) => onUpdateUser({ ...user, ...updated })}
          onClose={() => setShowJourneySelector(false)}
        />
      )}

      {showLanguageSetup && (
        <LanguageSetupModal
          user={user}
          onUpdateUser={(updated) => onUpdateUser({ ...user, ...updated })}
          onClose={() => setShowLanguageSetup(false)}
        />
      )}

      {selectedOverviewLesson && (
        <LessonOverviewModal
          lesson={selectedOverviewLesson}
          user={user}
          onLaunchLesson={(lesson) => {
            setSelectedOverviewLesson(null);
            onLaunchLesson(lesson.id);
          }}
          onClose={() => setSelectedOverviewLesson(null)}
        />
      )}

      {showVocabModal && (
        <VocabExperienceModal user={user} onClose={() => setShowVocabModal(false)} />
      )}

      {showGrammarModal && (
        <GrammarExperienceModal user={user} onClose={() => setShowGrammarModal(false)} />
      )}

      {showSpokenLabModal && (
        <HindiSpokenLabModal
          onClose={() => setShowSpokenLabModal(false)}
          onSelectDayLesson={(dayNum) => {
            setShowSpokenLabModal(false);
            const dayLesson = HindiCourseService.getDayByNumber(dayNum);
            if (dayLesson) {
              setActiveHindiDay(dayLesson);
            }
          }}
        />
      )}
    </div>
  );
};
