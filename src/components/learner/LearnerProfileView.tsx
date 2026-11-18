import React, { useState } from 'react';
import {
  User,
  Globe,
  Settings,
  Flame,
  Zap,
  Award,
  ShieldCheck,
  BookOpen,
  ChevronRight,
  MessageSquare,
  Headphones,
  Target,
  CheckCircle2,
  Trophy,
  Palette,
  Moon,
  Sun,
  Lock,
  Sparkles,
  Volume2,
  Mic,
  Activity,
  GraduationCap,
  TrendingUp,
  BarChart3,
  Layers,
  Calendar,
  Clock
} from 'lucide-react';
import { UserAcademyProfile } from '../../types';
import { getLanguageRegistryEntry, getLanguageInfo } from '../../data/languages';
import { playSoundEffectEffect, setActiveEnglishAccent } from '../../utils/audioUtils';
import { AuthService } from '../../services/AuthService';
import { EntitlementService } from '../../services/EntitlementService';
import { AppearanceThemeSelector } from '../ui/AppearanceThemeSelector';
import {
  AchievementBadge,
  AchievementCategory,
  ACHIEVEMENT_CATEGORIES,
  MASTER_ACHIEVEMENTS
} from '../../data/achievementsData';
import { AchievementBadgeCard } from '../achievements/AchievementBadgeCard';
import { BadgeDetailModal } from '../achievements/BadgeDetailModal';
import { MilestoneTimeline } from '../achievements/MilestoneTimeline';
import { GraduationCertificateModal } from '../celebrations/GraduationCertificateModal';
import { HindiCourseProgressService } from '../../services/HindiCourseProgressService';
import { HindiCourseService } from '../../services/HindiCourseService';

interface LearnerProfileViewProps {
  user: UserAcademyProfile;
  onOpenJourneySelector: () => void;
  onOpenLanguageSetup: () => void;
  onAdminClick?: () => void;
  onReplayOnboarding?: () => void;
}

export const LearnerProfileView: React.FC<LearnerProfileViewProps> = ({
  user,
  onOpenJourneySelector,
  onOpenLanguageSetup,
  onAdminClick,
  onReplayOnboarding,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'skills' | 'achievements' | 'journey' | 'statistics' | 'settings'>('overview');
  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory | 'ALL'>('ALL');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'UNLOCKED' | 'LOCKED'>('ALL');
  const [inspectedBadge, setInspectedBadge] = useState<AchievementBadge | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);

  const targetReg = getLanguageRegistryEntry(user.learningLanguage || 'en');
  const instructionInfo = getLanguageInfo(user.nativeLanguage || 'hi');
  const isAdmin = EntitlementService.isAdmin(user);
  // The flag and the label follow the teaching accent, not the target language.
  const activeAccent = user.preferences?.accentPreference;
  const accentName = activeAccent === 'en-US' ? 'American' : activeAccent === 'en-GB' ? 'British' : 'Indian';
  const accentFlag = activeAccent === 'en-US' ? '🇺🇸' : activeAccent === 'en-GB' ? '🇬🇧' : '🇮🇳';
  const [accentChoice, setAccentChoice] = useState<string>(activeAccent || 'en-IN');

  // Switching accent takes effect in the same breath: the teaching voice changes now,
  // and the choice is saved so every later lesson uses it too.
  const handleAccentSelect = (code: string) => {
    setAccentChoice(code);
    setActiveEnglishAccent(code);
    AuthService.updateUserProfile({
      preferences: { ...(user.preferences as any), accentPreference: code as any },
    });
  };

  const hindiProg = HindiCourseProgressService.getProgress(user?.id);
  const completedDayNumbers = hindiProg.completedDays || [];
  const daysCompleted = completedDayNumbers.length;
  const totalBadges = MASTER_ACHIEVEMENTS.length;
  const unlockedBadges = MASTER_ACHIEVEMENTS.filter((b) => b.calculateProgress(user, daysCompleted).unlocked);
  const unlockedCount = unlockedBadges.length;
  const dialogueTurns = HindiCourseService.countTurnsInDays(completedDayNumbers);
  const wordsLearned = HindiCourseService.countWordsInDays(completedDayNumbers);
  const totalXp = user.totalXp || 0;

  const scoresList = Object.values(hindiProg.dayScores || {});
  const avgScore = scoresList.length > 0 ? Math.round(scoresList.reduce((a, b) => a + b, 0) / scoresList.length) : 0;

  const filteredBadges = MASTER_ACHIEVEMENTS.filter((badge) => {
    const isCategoryMatch = selectedCategory === 'ALL' || badge.category === selectedCategory;
    const { unlocked } = badge.calculateProgress(user, daysCompleted);
    const isStatusMatch =
      filterStatus === 'ALL' ||
      (filterStatus === 'UNLOCKED' && unlocked) ||
      (filterStatus === 'LOCKED' && !unlocked);
    return isCategoryMatch && isStatusMatch;
  });

  // Skills start at zero and fill in only from work actually completed.
  const skillDomains = [{
    name: 'Average recorded lesson score',
    nameHi: 'औसत दर्ज पाठ स्कोर',
    score: scoresList.length > 0 ? avgScore : null,
    color: 'bg-indigo-500',
    text: 'text-indigo-600 dark:text-indigo-400',
  }];

  return (
    <div className="flex flex-col space-y-5 p-3.5 sm:p-5 pb-32 text-slate-900 dark:text-slate-100 w-full max-w-xl mx-auto animate-fade-in min-w-0">
      {/* Premium Profile Hero Card with Royal Indigo Gradient */}
      <div className="bg-gradient-to-br from-[#335CFF] via-[#4F6BFF] to-[#6D5DF6] rounded-3xl p-5 sm:p-6 shadow-xl shadow-indigo-500/20 border border-indigo-400/30 text-white relative overflow-hidden space-y-4">
        {/* Ambient Glow Blob */}
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/15 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center space-x-3.5 sm:space-x-4 relative z-10">
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-3xl sm:text-4xl shadow-inner shrink-0">
            {user.avatar || '🦉'}
          </div>

          <div className="space-y-1 flex-1 min-w-0">
            <div className="flex items-center space-x-2 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-black text-white truncate font-display">
                {user.name || 'Learner'}
              </h2>
              <span
                className={`px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-full border shadow-xs ${
                  isAdmin
                    ? 'bg-purple-500/30 text-white border-purple-300'
                    : 'bg-white/20 text-white border-white/30'
                }`}
              >
                {user.role || (isAdmin ? 'ADMIN' : 'LEARNER')}
              </span>
            </div>

            <p className="text-xs text-indigo-100 truncate font-medium">
              {user.email || 'No email added'}
            </p>

            <div className="flex items-center space-x-2 pt-1 flex-wrap gap-y-1">
              <span className="text-[10px] sm:text-[11px] bg-black/20 px-2.5 py-0.5 rounded-xl text-white font-bold border border-white/10">
                Plan: <strong className="text-amber-300 uppercase font-black">{user.entitlement || 'FREE'}</strong>
              </span>
              <span className="text-[10px] sm:text-[11px] bg-black/20 px-2.5 py-0.5 rounded-xl text-white font-bold border border-white/10">
                Selected level: <strong className="text-emerald-300 font-black">{user.currentCEFR || 'A1'}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Tab Segmented Sub-Navigation */}
      <div className="grid grid-cols-5 gap-1 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 shadow-xs text-xs">
        {[
          { id: 'overview', label: 'Overview', icon: User },
          { id: 'skills', label: 'Skills', icon: Target },
          { id: 'achievements', label: `Badges`, icon: Trophy },
          { id: 'journey', label: 'Journey', icon: Award },
          { id: 'statistics', label: 'Stats', icon: BarChart3 },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveSubTab(tab.id as any);
              }}
              className={`py-2 px-1 rounded-xl font-bold transition flex items-center justify-center space-x-1 cursor-pointer btn-press truncate ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Quick Settings Icon Button Row */}
      <div className="flex justify-end items-center">
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            setActiveSubTab('settings');
          }}
          className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
            activeSubTab === 'settings'
              ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-300'
              : 'bg-white dark:bg-slate-900 text-slate-500 border-[#D9E4FF] dark:border-slate-800'
          }`}
        >
          <Settings className="w-3.5 h-3.5" />
          <span>Appearance & Settings</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: OVERVIEW & STATS                                                   */}
      {/* ========================================================================= */}
      {activeSubTab === 'overview' && (
        <div className="space-y-4">
          {/* 4 Floating Statistics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-3.5 text-center shadow-sm space-y-1">
              <div className="w-8 h-8 mx-auto rounded-xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Flame className="w-4 h-4 fill-amber-500 dark:fill-amber-400 animate-pulse" />
              </div>
              <span className="text-xl font-black text-slate-900 dark:text-white font-display block">
                {user.streakDays || 0}d
              </span>
              <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider block">
                Day Streak
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-3.5 text-center shadow-sm space-y-1">
              <div className="w-8 h-8 mx-auto rounded-xl bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                <Zap className="w-4 h-4 fill-indigo-600 dark:fill-indigo-300" />
              </div>
              <span className="text-xl font-black text-slate-900 dark:text-white font-display block">
                {totalXp}
              </span>
              <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider block">
                Total XP
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-3.5 text-center shadow-sm space-y-1">
              <div className="w-8 h-8 mx-auto rounded-xl bg-teal-50 dark:bg-teal-500/15 border border-teal-200 dark:border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-300">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-xl font-black text-slate-900 dark:text-white font-display block">
                {wordsLearned}
              </span>
              <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider block">
                Words
              </span>
            </div>

            <div className="bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-3.5 text-center shadow-sm space-y-1">
              <div className="w-8 h-8 mx-auto rounded-xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Target className="w-4 h-4" />
              </div>
              <span className="text-xl font-black text-emerald-600 dark:text-emerald-400 font-display block">
                {user.currentCEFR || 'A1'}
              </span>
              <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider block">
                Selected level
              </span>
            </div>
          </div>

          {/* Quick Certificate View Banner */}
          <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/5 dark:from-amber-950/30 dark:via-yellow-950/20 dark:to-slate-900 border border-amber-300 dark:border-amber-500/30 rounded-3xl p-4 sm:p-5 flex items-center justify-between shadow-xs">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center text-xl shrink-0 shadow-md">
                🎓
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white font-display">
                  Learning Progress Summary
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  In-app activity snapshot; not an official CEFR credential
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setShowCertificate(true);
              }}
              className="py-2.5 px-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition cursor-pointer btn-press shrink-0"
            >
              View
            </button>
          </div>

          {/* Quick Language Setup Row */}
          <div className="bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-4 sm:p-5 space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-2.5">
              <span className="text-xs font-black uppercase text-indigo-700 dark:text-indigo-300 tracking-wider font-display">
                Teaching Voice
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">
                Applies immediately
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              {([
                { code: 'en-IN', label: 'Indian', flag: '🇮🇳' },
                { code: 'en-US', label: 'American', flag: '🇺🇸' },
                { code: 'en-GB', label: 'British', flag: '🇬🇧' },
              ] as const).map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    handleAccentSelect(opt.code);
                  }}
                  className={`p-2.5 rounded-2xl border text-center transition btn-press ${
                    accentChoice === opt.code
                      ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-500 ring-2 ring-indigo-500/20'
                      : 'bg-slate-50 dark:bg-slate-950/70 border-[#D9E4FF] dark:border-slate-800'
                  }`}
                >
                  <span className="text-lg block leading-none">{opt.flag}</span>
                  <span className="text-[11px] font-black text-slate-900 dark:text-white block mt-1">{opt.label}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">You are learning</span>
                <span className="text-sm font-black text-slate-900 dark:text-white block mt-0.5">English {accentFlag}</span>
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">Selected level: {user.currentCEFR || 'A1'}</span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">Instruction Medium</span>
                <span className="text-sm font-black text-slate-900 dark:text-white block mt-0.5">
                  {instructionInfo?.name || 'Hindi'} 🇮🇳
                </span>
                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-hindi font-bold">हिंदी माध्यम</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: SKILLS & CEFR BREAKDOWN                                            */}
      {/* ========================================================================= */}
      {activeSubTab === 'skills' && (
        <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase text-indigo-700 dark:text-indigo-300 tracking-wider font-display">
                  Recorded Lesson Score
                </h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Average of saved Hindi lesson scores; not a skill-specific or CEFR assessment.
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
              Selected level: {user.currentCEFR || 'A1'}
            </span>
          </div>

          <div className="space-y-3">
            {skillDomains.map((skill) => (
              <div key={skill.name} className="p-3 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-hindi font-bold ml-1.5">
                      {skill.nameHi}
                    </span>
                  </div>
                    <strong className={`font-mono ${skill.text}`}>{skill.score === null ? 'Not recorded' : `${skill.score}%`}</strong>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-500`}
                    style={{ width: `${skill.score ?? 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: ACHIEVEMENTS & BADGES                                              */}
      {/* ========================================================================= */}
      {activeSubTab === 'achievements' && (
        <div className="space-y-4">
          {/* Category Filter Chips */}
          <div className="bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-4 space-y-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase text-indigo-700 dark:text-indigo-300 tracking-wider font-display">
                  Achievement Categories
                </span>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  {unlockedCount} of {totalBadges} Badges Collected
                </p>
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-[#D9E4FF] dark:border-slate-700">
                {(['ALL', 'UNLOCKED', 'LOCKED'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => {
                      playSoundEffectEffect('tap');
                      setFilterStatus(st);
                    }}
                    className={`px-2 py-0.5 rounded-md font-black text-[9px] uppercase transition ${
                      filterStatus === st
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Horizontal Scroll of Categories */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setSelectedCategory('ALL');
                }}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition cursor-pointer btn-press ${
                  selectedCategory === 'ALL'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                All Badges ({totalBadges})
              </button>

              {ACHIEVEMENT_CATEGORIES.map((cat) => {
                const catBadges = MASTER_ACHIEVEMENTS.filter((b) => b.category === cat.id);
                const catUnlocked = catBadges.filter((b) => b.calculateProgress(user, daysCompleted).unlocked).length;
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      playSoundEffectEffect('tap');
                      setSelectedCategory(cat.id);
                    }}
                    className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition flex items-center space-x-1.5 cursor-pointer btn-press ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {catUnlocked}/{catBadges.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Badges Grid */}
          <div className="space-y-3">
            {filteredBadges.map((badge) => (
              <AchievementBadgeCard
                key={badge.id}
                badge={badge}
                user={user}
                daysCompleted={daysCompleted}
                onClick={() => setInspectedBadge(badge)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: MILESTONE JOURNEY TIMELINE 2.0                                     */}
      {/* ========================================================================= */}
      {activeSubTab === 'journey' && (
        <div className="space-y-4">
          <MilestoneTimeline
            user={user}
            daysCompleted={daysCompleted}
          />
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: LIFETIME STATISTICS & GROWTH                                       */}
      {/* ========================================================================= */}
      {activeSubTab === 'statistics' && (
        <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase text-amber-700 dark:text-amber-300 tracking-wider font-display">
                  Comprehensive Analytics
                </h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Saved course activity and curriculum counts; spoken practice time is not tracked.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="p-3.5 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center space-y-0.5">
              <span className="text-xl">📚</span>
              <span className="text-lg font-black text-slate-900 dark:text-white font-mono block">
                {daysCompleted}
              </span>
              <span className="text-[9px] font-bold text-slate-500 uppercase">Lessons Completed</span>
            </div>

            {/* A completed day is not counted as a mastered dialogue. */}

            <div className="p-3.5 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center space-y-0.5">
              <span className="text-xl">🎙️</span>
              <span className="text-lg font-black text-slate-900 dark:text-white font-mono block">
                {HindiCourseService.countTurnsInDays(completedDayNumbers)}
              </span>
              <span className="text-[9px] font-bold text-slate-500 uppercase">Dialogue turns in lessons</span>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center space-y-0.5">
              <span className="text-xl">📘</span>
              <span className="text-lg font-black text-cyan-600 dark:text-cyan-400 font-mono block">
                {wordsLearned}
              </span>
              <span className="text-[9px] font-bold text-slate-500 uppercase">Vocabulary items in lessons</span>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center space-y-0.5">
              <span className="text-xl">📐</span>
              <span className="text-lg font-black text-purple-600 dark:text-purple-400 font-mono block">
                {HindiCourseService.countGrammarRulesInDays(completedDayNumbers)}
              </span>
              <span className="text-[9px] font-bold text-slate-500 uppercase">Grammar rules in lessons</span>
            </div>

            {/* Dialogue turns are already counted in the curriculum-content card. */}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SETTINGS SUB-VIEW                                                         */}
      {/* ========================================================================= */}
      {activeSubTab === 'settings' && (
        <div className="space-y-4">
          {/* Appearance Section */}
          <div className="bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <Palette className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs font-black uppercase text-indigo-700 dark:text-indigo-300 tracking-wider font-display">
                  Theme & Appearance
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                Curiosity OS
              </span>
            </div>

            <AppearanceThemeSelector />
          </div>

          {/* Replay Onboarding Tour */}
          {onReplayOnboarding && (
            <div className="bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white font-display">
                    Onboarding Experience
                  </span>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30">
                  Interactive Tour
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Replay the brand identity splash screen, 5 interactive feature slides, daily commitment setup, and voice profile selection.
              </p>
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  onReplayOnboarding();
                }}
                className="w-full py-3 bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md transition cursor-pointer btn-press hover:brightness-105"
              >
                Replay Onboarding & Welcome Tour
              </button>
            </div>
          )}

          {/* Admin Tools (if admin) */}
          {isAdmin && onAdminClick && (
            <div className="bg-white dark:bg-slate-900/90 border border-purple-200 dark:border-purple-500/30 rounded-3xl p-5 space-y-3 shadow-sm">
              <div className="flex items-center space-x-2 text-purple-700 dark:text-purple-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-wider font-display">Academy Administration</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Access authoring tools, curriculum registry diagnostics, and user tier configurations.
              </p>
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  onAdminClick();
                }}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md transition cursor-pointer"
              >
                Open Admin Dashboard
              </button>
            </div>
          )}
        </div>
      )}

      {/* Badge Inspection & 3D Spin Modal */}
      {inspectedBadge && (
        <BadgeDetailModal
          badge={inspectedBadge}
          user={user}
          daysCompleted={daysCompleted}
          onClose={() => setInspectedBadge(null)}
        />
      )}

      {/* Graduation & CEFR Certificate Modal */}
      {showCertificate && (
        <GraduationCertificateModal
          user={user}
          cefr={user.currentCEFR || 'A1'}
          daysCompleted={daysCompleted}
          vocabLearned={wordsLearned}
          dialoguesCompleted={dialogueTurns}
          totalXp={totalXp}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
};
