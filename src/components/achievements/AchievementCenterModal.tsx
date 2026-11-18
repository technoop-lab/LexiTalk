import React, { useState } from 'react';
import {
  Trophy,
  Flame,
  Mic,
  BookOpen,
  ShieldCheck,
  Target,
  Sparkles,
  X,
  Zap,
  Award,
  Filter,
  CheckCircle2,
  Lock,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import {
  AchievementBadge,
  AchievementCategory,
  ACHIEVEMENT_CATEGORIES,
  MASTER_ACHIEVEMENTS,
  TIER_CONFIG
} from '../../data/achievementsData';
import { UserAcademyProfile } from '../../types';
import { AchievementBadgeCard } from './AchievementBadgeCard';
import { BadgeDetailModal } from './BadgeDetailModal';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface AchievementCenterModalProps {
  user: UserAcademyProfile;
  daysCompleted?: number;
  onClose: () => void;
}

export const AchievementCenterModal: React.FC<AchievementCenterModalProps> = ({
  user,
  daysCompleted = 0,
  onClose,
}) => {
  const [activeCategory, setActiveCategory] = useState<AchievementCategory | 'ALL'>('ALL');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'UNLOCKED' | 'AVAILABLE' | 'NOT_TRACKED'>('ALL');
  const [inspectedBadge, setInspectedBadge] = useState<AchievementBadge | null>(null);

  // Compute overall stats
  const totalBadges = MASTER_ACHIEVEMENTS.length;
  const trackedBadges = MASTER_ACHIEVEMENTS.filter((b) => b.calculateProgress(user, daysCompleted).trackingAvailable !== false);
  const trackedBadgeCount = trackedBadges.length;
  const unlockedCount = trackedBadges.filter((b) => b.calculateProgress(user, daysCompleted).unlocked).length;
  const badgeXpPayout = 'Not verified as credited';
  const badgeTrackingStatus = trackedBadgeCount === totalBadges ? 'Complete' : 'Partial';

  // Filtered badges
  const filteredBadges = MASTER_ACHIEVEMENTS.filter((badge) => {
    const isCategoryMatch = activeCategory === 'ALL' || badge.category === activeCategory;
    const { unlocked, trackingAvailable } = badge.calculateProgress(user, daysCompleted);
    const isTracked = trackingAvailable !== false;
    const isStatusMatch =
      filterStatus === 'ALL' ||
      (filterStatus === 'UNLOCKED' && unlocked && isTracked) ||
      (filterStatus === 'AVAILABLE' && !unlocked && isTracked) ||
      (filterStatus === 'NOT_TRACKED' && !isTracked);
    return isCategoryMatch && isStatusMatch;
  });

  const getCategoryIcon = (catId: AchievementCategory) => {
    switch (catId) {
      case 'progress':
        return Trophy;
      case 'streak':
        return Flame;
      case 'speaking':
        return Mic;
      case 'vocabulary':
        return BookOpen;
      case 'grammar':
        return ShieldCheck;
      case 'assessments':
        return Target;
      case 'special':
        return Sparkles;
      default:
        return Award;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 select-none animate-fade-in">
      <div className="bg-[#F6F8FC] dark:bg-[#050816] border border-[#D9E4FF] dark:border-slate-800 rounded-3xl max-w-lg w-full shadow-2xl relative flex flex-col max-h-[92vh] overflow-hidden text-slate-900 dark:text-slate-100">
        {/* Header Banner with Royal Indigo Gradient */}
        <div className="bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] p-5 text-white relative shrink-0">
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onClose();
            }}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition cursor-pointer"
            aria-label="Close Achievement Center"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-2xl shadow-inner">
              🏆
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100 font-mono">
                Curiosity English Academy
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-display text-white">
                Achievement Center
              </h2>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 pt-4">
            <div className="bg-black/20 backdrop-blur-xs rounded-2xl p-2.5 text-center border border-white/10">
              <span className="text-[10px] uppercase font-bold text-indigo-100 block">Tracked badges earned</span>
              <span className="text-base sm:text-lg font-black text-white font-display">
                {unlockedCount} / {trackedBadgeCount}
              </span>
            </div>

            <div className="bg-black/20 backdrop-blur-xs rounded-2xl p-2.5 text-center border border-white/10">
              <span className="text-[10px] uppercase font-bold text-indigo-100 block">Badge XP credit status</span>
              <span className="text-base sm:text-lg font-black text-amber-300 font-display">
                {badgeXpPayout}
              </span>
            </div>

            <div className="bg-black/20 backdrop-blur-xs rounded-2xl p-2.5 text-center border border-white/10">
              <span className="text-[10px] uppercase font-bold text-indigo-100 block">Badge tracking</span>
              <span className="text-base sm:text-lg font-black text-emerald-300 font-display">
                {badgeTrackingStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Chips Bar */}
        <div className="p-3 bg-white dark:bg-slate-900 border-b border-[#D9E4FF] dark:border-slate-800 shrink-0 space-y-2">
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setActiveCategory('ALL');
              }}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition cursor-pointer btn-press ${
                activeCategory === 'ALL'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              All badges ({totalBadges} configured)
            </button>

            {ACHIEVEMENT_CATEGORIES.map((cat) => {
              const Icon = getCategoryIcon(cat.id);
              const catBadges = MASTER_ACHIEVEMENTS.filter((b) => b.category === cat.id);
              const catProgress = catBadges.map((b) => b.calculateProgress(user, daysCompleted));
              const trackedCategoryProgress = catProgress.filter((progress) => progress.trackingAvailable !== false);
              const catUnlocked = trackedCategoryProgress.filter((progress) => progress.unlocked).length;
              const categoryCountLabel = trackedCategoryProgress.length > 0 ? `${catUnlocked}/${trackedCategoryProgress.length}` : 'N/A';
              const isSelected = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    setActiveCategory(cat.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition flex items-center space-x-1.5 cursor-pointer btn-press ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {categoryCountLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Filters distinguish earned, available, and untracked badges. */}
          <div className="flex items-center justify-between text-[11px] pt-0.5">
            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">
              Showing {filteredBadges.length} Badges
            </span>

            <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-[#D9E4FF] dark:border-slate-700">
              {(['ALL', 'UNLOCKED', 'AVAILABLE', 'NOT_TRACKED'] as const).map((st) => (
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
                  {st === 'ALL' ? 'All' : st === 'UNLOCKED' ? 'Earned' : st === 'AVAILABLE' ? 'Available' : 'Not tracked'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Badges List Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredBadges.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <Sparkles className="w-8 h-8 text-slate-400 mx-auto" />
              <h4 className="font-black text-sm text-slate-700 dark:text-slate-300">
                No badges found for this filter
              </h4>
              <p className="text-xs text-slate-500">
                Change category or status filters to view other configured badges.
              </p>
            </div>
          ) : (
            filteredBadges.map((badge) => (
              <AchievementBadgeCard
                key={badge.id}
                badge={badge}
                user={user}
                daysCompleted={daysCompleted}
                onClick={() => setInspectedBadge(badge)}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-[#D9E4FF] dark:border-slate-800 text-center shrink-0">
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            {trackedBadgeCount} of {totalBadges} configured badges currently track progress. Other entries are marked NOT TRACKED because vocabulary recall, speaking/dialogue activity, grammar challenges, time-of-day, bilingual use, or B1 activity is unavailable.
          </p>
        </div>
      </div>

      {/* Badge Inspection & 3D Spin Modal */}
      {inspectedBadge && (
        <BadgeDetailModal
          badge={inspectedBadge}
          user={user}
          daysCompleted={daysCompleted}
          onClose={() => setInspectedBadge(null)}
        />
      )}
    </div>
  );
};
