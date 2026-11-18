import React from 'react';
import {
  Gem,
  Heart,
  Flame,
  Zap,
  Shield,
  Trophy,
  Award,
  ArrowLeft,
  Check,
  ShoppingBag,
  Crown
} from 'lucide-react';
import { UserAcademyProfile } from '../types';
import { getLanguageInfo } from '../data/languages';
import { playSoundEffectEffect } from '../utils/audioUtils';
import { AudioSettingsManager } from './AudioSettingsManager';
import { EntitlementService } from '../services/EntitlementService';

interface ShopAndProfileProps {
  user: UserAcademyProfile;
  onUpdateUser: (updated: Partial<UserAcademyProfile>) => void;
  onBack: () => void;
  onOpenDevAudioTest?: () => void;
}

export const ShopAndProfile: React.FC<ShopAndProfileProps> = ({
  user,
  onUpdateUser,
  onBack,
  onOpenDevAudioTest,
}) => {
  const nativeInfo = getLanguageInfo(user.nativeLanguage);

  const handleBuyHearts = () => {
    if (user.gems < 50) {
      playSoundEffectEffect('wrong');
      return;
    }
    playSoundEffectEffect('gem');
    onUpdateUser({
      gems: user.gems - 50,
      hearts: 5,
    });
  };

  const handleBuyStreakFreeze = () => {
    if (user.gems < 100) {
      playSoundEffectEffect('wrong');
      return;
    }
    playSoundEffectEffect('gem');
    onUpdateUser({
      gems: user.gems - 100,
      streakFreezeCount: user.streakFreezeCount + 1,
    });
  };

  return (
    <div className="p-4 sm:p-5 w-full max-w-lg mx-auto space-y-6 select-none pb-28">
      <div className="flex items-center justify-between bg-slate-900 p-3 rounded-2xl border border-slate-800">
        <button onClick={onBack} className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-black text-cyan-400 uppercase tracking-widest flex items-center space-x-1">
          <ShoppingBag className="w-4 h-4" />
          <span>Curiosity Academy Shop</span>
        </span>
        <span className="text-xs font-black text-cyan-300 flex items-center space-x-1">
          <Gem className="w-4 h-4 fill-cyan-400" />
          <span>{user.gems}</span>
        </span>
      </div>

      {/* Profile Overview Card */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 p-5 rounded-3xl space-y-3 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-3xl shadow-lg">
            {user.avatar || '🦉'}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-black text-white">{user.name}</h2>
              {user.isPro && (
                <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[9px] font-black rounded uppercase">
                  PRO
                </span>
              )}
            </div>
            <span className="text-[11px] font-bold text-slate-300 flex items-center space-x-1">
              <span>{nativeInfo.flag} Learning from {nativeInfo.name}</span>
              <span>•</span>
              <span>{user.leagueName} League</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
          <div className="bg-slate-950 p-2.5 rounded-2xl border border-slate-800">
            <span className="text-amber-400 font-black block">{user.streakDays} Days</span>
            <span className="text-[10px] text-slate-400">Streak</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-2xl border border-slate-800">
            <span className="text-emerald-400 font-black block">{user.totalXp} XP</span>
            <span className="text-[10px] text-slate-400">Total XP</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-2xl border border-slate-800">
            <span className="text-cyan-400 font-black block">{user.completedLessonIds.length}</span>
            <span className="text-[10px] text-slate-400">Lessons</span>
          </div>
        </div>
      </div>

      {/* Shop Items Section */}
      <div className="space-y-3">
        <h3 className="font-black text-white text-sm uppercase tracking-wider">Power-ups & Items</h3>

        {/* Heart Refill */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl flex items-center justify-between space-x-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-500 flex items-center justify-center text-2xl">
              ❤️
            </div>
            <div>
              <h4 className="font-black text-xs text-white">Refill Hearts</h4>
              <p className="text-[11px] text-slate-400">Get back up to 5 full hearts</p>
            </div>
          </div>

          <button
            onClick={handleBuyHearts}
            disabled={user.hearts >= 5 || user.gems < 50}
            className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 text-white font-black text-xs rounded-xl shadow transition disabled:opacity-40 flex items-center space-x-1 shrink-0"
          >
            <span>50</span>
            <Gem className="w-3.5 h-3.5 fill-cyan-400" />
          </button>
        </div>

        {/* Streak Freeze */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl flex items-center justify-between space-x-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl">
              🧊
            </div>
            <div>
              <h4 className="font-black text-xs text-white">Streak Freeze ({user.streakFreezeCount})</h4>
              <p className="text-[11px] text-slate-400">Protect your streak if you miss a day</p>
            </div>
          </div>

          <button
            onClick={handleBuyStreakFreeze}
            disabled={user.gems < 100}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 text-white font-black text-xs rounded-xl shadow transition disabled:opacity-40 flex items-center space-x-1 shrink-0"
          >
            <span>100</span>
            <Gem className="w-3.5 h-3.5 fill-cyan-400" />
          </button>
        </div>
      </div>

      {/* Audio & Offline Storage Section */}
      <AudioSettingsManager onOpenDevAudioTest={EntitlementService.isAdmin(user) ? onOpenDevAudioTest : undefined} />

      {/* Learning Settings & Preferences Section */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-3xl space-y-4 shadow-xl">
        <h3 className="font-black text-white text-sm uppercase tracking-wider flex items-center justify-between">
          <span>Learning Preferences</span>
          <span className="text-[10px] text-emerald-400 font-mono font-normal">Progress preserved</span>
        </h3>

        {/* Support Language Preference */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-300">Support / Regional Language</label>
          <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl">{nativeInfo.flag}</span>
              <span className="text-xs font-bold text-white">{nativeInfo.name}</span>
            </div>
            <span className="text-[10px] text-slate-500 italic">Select via top bar or onboarding</span>
          </div>
        </div>

        {/* Mode Preference */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-300">How You Want To Learn English</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onUpdateUser({ learningMode: 'english_only' })}
              className={`p-3 rounded-2xl border text-left space-y-1 transition ${
                user.learningMode === 'english_only'
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <span className="text-xs font-black block">🇬🇧 English Only</span>
              <span className="text-[10px] block opacity-80">Full English immersion</span>
            </button>

            <button
              onClick={() => onUpdateUser({ learningMode: 'english_plus_secondary', secondaryLanguage: user.secondaryLanguage || 'es' })}
              className={`p-3 rounded-2xl border text-left space-y-1 transition ${
                user.learningMode === 'english_plus_secondary'
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <span className="text-xs font-black block">🇬🇧 + 🇪🇸 Secondary Layer</span>
              <span className="text-[10px] block opacity-80">English + Spanish layer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
