import React, { useState } from 'react';
import { User, KeyRound, Globe, Sparkles, Check, X, LogIn, UserPlus, ShieldCheck } from 'lucide-react';
import { NativeLanguageCode, UserAcademyProfile } from '../types';
import { SUPPORTED_NATIVE_LANGUAGES, getLanguageInfo } from '../data/languages';
import { playSoundEffectEffect } from '../utils/audioUtils';
import { DeveloperTestService } from '../services/DeveloperTestService';
import { EntitlementService } from '../services/EntitlementService';

interface AccountAuthModalProps {
  currentUser: UserAcademyProfile;
  allUsers: UserAcademyProfile[];
  onSelectUserAccount: (user: UserAcademyProfile) => void;
  onCreateNewAccount: (name: string, email: string, nativeLang: NativeLanguageCode) => void;
  onClose: () => void;
}

export const AccountAuthModal: React.FC<AccountAuthModalProps> = ({
  currentUser,
  allUsers,
  onSelectUserAccount,
  onCreateNewAccount,
  onClose,
}) => {
  const [tab, setTab] = useState<'switch' | 'create'>('switch');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [selectedLang, setSelectedLang] = useState<NativeLanguageCode>(currentUser.nativeLanguage || 'hi');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !emailInput.trim()) return;

    playSoundEffectEffect('victory');
    onCreateNewAccount(nameInput.trim(), emailInput.trim(), selectedLang);
    setNameInput('');
    setEmailInput('');
  };

  const handleSelectDevProfile = () => {
    playSoundEffectEffect('tap');
    const devProfile = DeveloperTestService.getDeveloperProfile();
    onSelectUserAccount(devProfile);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-6 max-w-md w-full shadow-2xl relative space-y-5 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-full cursor-pointer btn-press"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1">
          <div className="w-12 h-12 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-2xl flex items-center justify-center text-2xl mx-auto shadow-md">
            🎓
          </div>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">Curiosity Academy Accounts</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Manage user profiles and local progress</p>
        </div>

        {/* Developer / Tester Profile Quick Button (Authorized Admins Only) */}
        {EntitlementService.isAdmin(currentUser) && (
          <div className="p-3 bg-indigo-50 dark:bg-gradient-to-r dark:from-indigo-950/60 dark:to-purple-950/60 border border-indigo-200 dark:border-indigo-500/40 rounded-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <span className="text-2xl">🛠️</span>
              <div>
                <div className="text-xs font-black text-indigo-700 dark:text-indigo-300">Developer / QA Tester</div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Unlock test scenarios & exercise diagnostic suite</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSelectDevProfile}
              className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer btn-press"
            >
              Switch to Dev
            </button>
          </div>
        )}

        {/* Tab Switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-xs font-black">
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setTab('switch');
            }}
            className={`flex-1 py-2.5 rounded-xl transition flex items-center justify-center space-x-1.5 cursor-pointer btn-press ${
              tab === 'switch' ? 'bg-white dark:bg-emerald-600 text-emerald-700 dark:text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>Switch Profile ({allUsers.length})</span>
          </button>
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setTab('create');
            }}
            className={`flex-1 py-2.5 rounded-xl transition flex items-center justify-center space-x-1.5 cursor-pointer btn-press ${
              tab === 'create' ? 'bg-white dark:bg-emerald-600 text-emerald-700 dark:text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>Create New Profile</span>
          </button>
        </div>

        {/* TAB 1: Switch Profile */}
        {tab === 'switch' && (
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Active Profiles on Device:
            </span>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {allUsers.map((u) => {
                const isActive = u.id === currentUser.id;
                const langInfo = getLanguageInfo(u.nativeLanguage);

                return (
                  <div
                    key={u.id}
                    onClick={() => {
                      playSoundEffectEffect('tap');
                      onSelectUserAccount(u);
                    }}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-center justify-between btn-press ${
                      isActive
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-500/80 text-slate-900 dark:text-white shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-950 border-[#D9E4FF] dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xl shadow-xs">
                        {u.avatar || '🦉'}
                      </div>
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <h4 className="font-black text-sm text-slate-900 dark:text-white">{u.name}</h4>
                          {u.isPro && (
                            <span className="text-[9px] font-black bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-400 border border-amber-300 dark:border-amber-500/30 px-1.5 rounded">
                              PRO
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                          <span>{langInfo.flag} {langInfo.name}</span>
                          <span>•</span>
                          <span>{u.totalXp} XP</span>
                          <span>•</span>
                          <span>{u.currentCEFR}</span>
                        </p>
                      </div>
                    </div>

                    {isActive ? (
                      <span className="px-2.5 py-1 bg-emerald-500 text-white text-[10px] font-black rounded-lg uppercase">
                        Active
                      </span>
                    ) : (
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">Select →</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: Create New Profile */}
        {tab === 'create' && (
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Full Name / Student Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Anoop Sharma"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 focus:border-emerald-500 rounded-xl p-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 pl-9 outline-none transition"
                />
                <User className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-3.5" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Email Address (For Sync)</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="student@curiosityacademy.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 focus:border-emerald-500 rounded-xl p-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 pl-9 outline-none transition"
                />
                <KeyRound className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-3.5" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Select Native Language (Source Language)</label>
              <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto p-1 bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl">
                {SUPPORTED_NATIVE_LANGUAGES.map((lang) => {
                  const isSelected = selectedLang === lang.code;
                  return (
                    <button
                      type="button"
                      key={lang.code}
                      onClick={() => {
                        playSoundEffectEffect('tap');
                        setSelectedLang(lang.code);
                      }}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition cursor-pointer btn-press ${
                        isSelected
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span className="truncate">{lang.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md transition active:scale-95 cursor-pointer btn-press"
            >
              CREATE & START LEARNING
            </button>
          </form>
        )}

        {/* Local storage status */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl text-[11px] text-slate-500 dark:text-slate-400 flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>All progress is saved on this device.</span>
        </div>
      </div>
    </div>
  );
};
