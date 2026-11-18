import React from 'react';
import { Lock, Sparkles, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { AchievementBadge, TIER_CONFIG } from '../../data/achievementsData';
import { UserAcademyProfile } from '../../types';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface AchievementBadgeCardProps {
  badge: AchievementBadge;
  user: UserAcademyProfile;
  daysCompleted?: number;
  onClick?: () => void;
  compact?: boolean;
}

export const AchievementBadgeCard: React.FC<AchievementBadgeCardProps> = ({
  badge,
  user,
  daysCompleted = 0,
  onClick,
  compact = false,
}) => {
  const { current, unlocked, earnedDate, trackingAvailable } = badge.calculateProgress(user, daysCompleted);
  const isTracked = trackingAvailable !== false;
  const tierStyle = TIER_CONFIG[badge.tier];
  const progressPercent = isTracked ? Math.min(100, Math.round((current / badge.max) * 100)) : 0;

  const handleClick = () => {
    playSoundEffectEffect('tap');
    if (onClick) onClick();
  };

  if (compact) {
    return (
      <button
        onClick={handleClick}
        className={`p-3 rounded-2xl border text-left transition relative overflow-hidden flex items-center space-x-3 cursor-pointer btn-press ${
          unlocked
            ? `${tierStyle.border} ${tierStyle.bgGradient} ${tierStyle.shadowGlow}`
            : 'bg-white/70 dark:bg-slate-900/60 border-[#D9E4FF] dark:border-slate-800 opacity-75'
        }`}
      >
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 ${
            unlocked
              ? `${tierStyle.badgeRing} shadow-md`
              : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700 grayscale'
          }`}
        >
          {unlocked ? badge.badgeSymbol : <Lock className="w-4 h-4" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-black text-slate-900 dark:text-white truncate">
              {badge.title}
            </h4>
            {unlocked ? (
              <span className="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                EARNED
              </span>
            ) : !isTracked ? (
              <span className="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                NOT TRACKED
              </span>
            ) : null}
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
            {badge.desc}
          </p>
        </div>
      </button>
    );
  }

  return (
    <div
      onClick={handleClick}
      className={`p-4 rounded-3xl border transition-all duration-300 relative overflow-hidden space-y-3 cursor-pointer select-none btn-press ${
        unlocked
          ? `${tierStyle.border} ${tierStyle.bgGradient} ${tierStyle.shadowGlow} ring-1 ring-white/10`
          : 'bg-white/80 dark:bg-slate-900/60 border-[#D9E4FF] dark:border-slate-800/80 hover:border-indigo-300 dark:hover:border-slate-700'
      }`}
    >
      {/* Ambient Shimmer Effect on Unlocked */}
      {unlocked && (
        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent pointer-events-none animate-badge-shimmer" />
      )}

      <div className="flex items-start justify-between gap-3 relative z-10">
        <div className="flex items-center space-x-3.5 min-w-0 flex-1">
          {/* Badge Icon Crest */}
          <div
            className={`w-13 h-13 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 shadow-md relative ${
              unlocked
                ? `${tierStyle.badgeRing}`
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700 grayscale'
            }`}
          >
            {unlocked ? (
              <span className="transform hover:scale-110 transition-transform">{badge.badgeSymbol}</span>
            ) : (
              <Lock className="w-5 h-5 text-slate-400 dark:text-slate-500" />
            )}

            {unlocked && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-3 h-3 stroke-[3]" />
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1 space-y-0.5">
            <div className="flex items-center space-x-2 flex-wrap">
              <h4 className="text-sm font-black text-slate-900 dark:text-white truncate">
                {badge.title}
              </h4>
              <span
                className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border shadow-2xs ${
                  unlocked
                    ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                }`}
              >
                {unlocked ? 'EARNED' : !isTracked ? 'NOT TRACKED' : `${tierStyle.name}`}
              </span>
            </div>

            <p className="text-[11px] text-amber-700 dark:text-amber-300 font-hindi font-bold truncate">
              {badge.hindiTitle}
            </p>

            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
              {badge.desc}
            </p>
          </div>
        </div>

        <div className="shrink-0 text-right space-y-1">
          <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/15 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-500/30 inline-block font-mono">
            XP crediting not verified
          </span>
          <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
        </div>
      </div>

      {/* Progress Track or Unlocked Earned Date Banner */}
      <div className="pt-1 relative z-10">
        {unlocked ? (
          <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 pt-1 border-t border-black/5 dark:border-white/5">
            <span className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 font-bold">
              <Sparkles className="w-3 h-3" />
              <span>Milestone Achieved</span>
            </span>
            <span className="font-mono text-slate-400">
              {earnedDate || badge.earnedDatePlaceholder || 'Active Learner'}
            </span>
          </div>
        ) : !isTracked ? (
          <div className="pt-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">Tracking unavailable in this release</div>
        ) : (
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
              <span>Goal Progress</span>
              <span className="font-mono">
                {current} / {badge.max} ({progressPercent}%)
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  progressPercent > 0
                    ? 'bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981]'
                    : 'bg-slate-300 dark:bg-slate-700'
                }`}
                style={{ width: `${Math.max(4, progressPercent)}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
