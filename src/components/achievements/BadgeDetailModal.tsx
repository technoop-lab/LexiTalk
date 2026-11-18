import React from 'react';
import { X, Sparkles, Award, Share2, CheckCircle2, Lock, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { AchievementBadge, TIER_CONFIG } from '../../data/achievementsData';
import { UserAcademyProfile } from '../../types';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface BadgeDetailModalProps {
  badge: AchievementBadge | null;
  user: UserAcademyProfile;
  daysCompleted?: number;
  onClose: () => void;
}

export const BadgeDetailModal: React.FC<BadgeDetailModalProps> = ({
  badge,
  user,
  daysCompleted = 0,
  onClose,
}) => {
  if (!badge) return null;

  const { current, unlocked, earnedDate, trackingAvailable } = badge.calculateProgress(user, daysCompleted);
  const isTracked = trackingAvailable !== false;
  const tierStyle = TIER_CONFIG[badge.tier];
  const progressPercent = isTracked ? Math.min(100, Math.round((current / badge.max) * 100)) : 0;

  const handleShare = async () => {
    playSoundEffectEffect('tap');
    const shareText = `I unlocked the "${badge.title}" badge on Curiosity English Academy. Badge XP crediting is not verified.`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Curiosity English Academy Achievement',
          text: shareText,
          url: window.location.href,
        });
      } catch {
        // Ignored fallback
      }
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Achievement details copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-6 max-w-sm w-full shadow-2xl relative space-y-5 text-center overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-full cursor-pointer z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Ambient Halo */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full blur-3xl pointer-events-none" />

        {/* 3D Spinning Medal Badge */}
        <div className="pt-4 flex flex-col items-center justify-center relative z-10">
          <div
            className={`w-28 h-28 rounded-3xl flex items-center justify-center text-5xl shadow-2xl relative animate-medal-spin ${
              unlocked
                ? `${tierStyle.badgeRing} ${tierStyle.shadowGlow}`
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-300 dark:border-slate-700 grayscale'
            }`}
          >
            {unlocked ? badge.badgeSymbol : <Lock className="w-10 h-10" />}

            {/* Micro Badge Ribbon */}
            <div
              className={`absolute -bottom-3 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md ${tierStyle.ribbonColor}`}
            >
              {!isTracked ? 'NOT TRACKED' : tierStyle.name}
            </div>
          </div>
        </div>

        {/* Badge Metadata */}
        <div className="space-y-1.5 pt-2 relative z-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-[10px] font-black uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>{unlocked ? 'Milestone Achieved' : isTracked ? 'Locked Badge' : 'Tracking unavailable'}</span>
          </div>

          <h3 className="text-xl font-black text-slate-900 dark:text-white font-display">
            {badge.title}
          </h3>

          <p className="text-xs text-amber-700 dark:text-amber-300 font-hindi font-bold">
            {badge.hindiTitle}
          </p>

          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xs mx-auto leading-relaxed pt-1">
            {badge.desc}
          </p>
        </div>

        {/* Stats & Progress Box */}
        <div className="bg-slate-50 dark:bg-slate-950/80 rounded-2xl p-4 border border-[#D9E4FF] dark:border-slate-800/80 text-left space-y-2 relative z-10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-bold">Reward</span>
            <span className="font-black text-indigo-600 dark:text-indigo-400 flex items-center space-x-1">
              <Zap className="w-3.5 h-3.5 fill-indigo-600 dark:fill-indigo-400" />
              <span>XP crediting not verified</span>
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-bold">Status</span>
            <span
              className={`font-black ${
                unlocked ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {unlocked ? `Unlocked (${earnedDate || 'Earned'})` : isTracked ? `${current} / ${badge.max}` : 'Tracking unavailable'}
            </span>
          </div>

          {!unlocked && isTracked && (
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex space-x-2.5 pt-1 relative z-10">
          {unlocked && (
            <button
              onClick={handleShare}
              className="py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-black text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center space-x-1.5 cursor-pointer btn-press"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          )}

          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              onClose();
            }}
            className="flex-1 py-3.5 bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] hover:brightness-105 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl transition cursor-pointer btn-press flex items-center justify-center space-x-2"
          >
            <span>{unlocked ? 'Awesome!' : isTracked ? 'Keep Learning' : 'Got it'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
