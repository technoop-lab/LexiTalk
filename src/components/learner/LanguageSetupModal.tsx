import React, { useState } from 'react';
import { Settings, Globe, ShieldCheck, Check, X, Sparkles, Palette, Moon, Sun, Smartphone } from 'lucide-react';
import {
  UserAcademyProfile,
  TargetLanguageCode,
  InstructionLanguageCode,
  LearningGoal,
} from '../../types';
import {
  CENTRAL_LANGUAGE_REGISTRY,
  SUPPORTED_NATIVE_LANGUAGES,
  getLanguageRegistryEntry
} from '../../data/languages';
import { CurriculumService } from '../../services/CurriculumService';
import { AuthService } from '../../services/AuthService';
import { playSoundEffectEffect } from '../../utils/audioUtils';
import { AppearanceThemeSelector } from '../ui/AppearanceThemeSelector';

interface LanguageSetupModalProps {
  user: UserAcademyProfile;
  onUpdateUser: (updated: Partial<UserAcademyProfile>) => void;
  onClose: () => void;
}

export const LanguageSetupModal: React.FC<LanguageSetupModalProps> = ({
  user,
  onUpdateUser,
  onClose,
}) => {
  const [targetLang, setTargetLang] = useState<TargetLanguageCode>(user.learningLanguage || 'en');
  const [instructionLang, setInstructionLang] = useState<InstructionLanguageCode>(user.nativeLanguage || 'hi');
  const [level, setLevel] = useState<string>(
    user.currentCEFR === 'A2' ? 'A2' : ['L1', 'L2'].includes(String(user.currentCEFR)) ? String(user.currentCEFR) : 'A1'
  );
  const [goal, setGoal] = useState<LearningGoal>(user.learningGoal || 'fluency');
  const [activeTab, setActiveTab] = useState<'appearance' | 'language'>('appearance');

  const currStatus = CurriculumService.getCurriculumStatus(targetLang);
  const isAuthored = currStatus.curriculumState === 'AUTHORED_PRODUCTION';

  const handleSave = () => {
    playSoundEffectEffect('correct');

    const updated = AuthService.updateUserProfile({
      learningLanguage: targetLang,
      nativeLanguage: instructionLang as any,
      currentCEFR: (targetLang === 'sa' ? (level === 'L2' ? 'L2' : 'L1') : level === 'A2' ? 'A2' : 'A1') as any,
      learningGoal: goal,
    });

    onUpdateUser(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-[#D8E3FF] dark:border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#D8E3FF] dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white font-display">Settings & Appearance</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Appearance theme, target languages & learning goals</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer btn-press"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="p-3 border-b border-[#D8E3FF] dark:border-slate-800 bg-[#F8FAFF] dark:bg-slate-950/60 flex space-x-2">
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setActiveTab('appearance');
            }}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2 cursor-pointer btn-press ${
              activeTab === 'appearance'
                ? 'bg-white dark:bg-slate-850 text-indigo-600 dark:text-indigo-300 shadow-md border border-indigo-200 dark:border-indigo-500/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>🎨 Appearance & Theme</span>
          </button>
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setActiveTab('language');
            }}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2 cursor-pointer btn-press ${
              activeTab === 'language'
                ? 'bg-white dark:bg-slate-850 text-indigo-600 dark:text-indigo-300 shadow-md border border-indigo-200 dark:border-indigo-500/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Language & Goals</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-5 flex-1">
          {/* TAB 1: APPEARANCE CARD */}
          {activeTab === 'appearance' && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                  <Palette className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Choose Theme Appearance</span>
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Switch instantly between Light, Dark, or automatic System preferences across the entire academy.
                </p>
              </div>

              {/* Theme Selector Component */}
              <AppearanceThemeSelector />

              {/* Live Preview Card */}
              <div className="p-4 rounded-2xl bg-[#F6F8FC] dark:bg-slate-950/80 border border-[#D8E3FF] dark:border-slate-800 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Live Theme Preview
                </span>
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-[#D8E3FF] dark:border-slate-800 flex items-center justify-between shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] flex items-center justify-center text-white font-bold text-sm shadow-md">
                      Aa
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">Curiosity English</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block">High Contrast Typography</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
                    Active
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LANGUAGE & GOALS */}
          {activeTab === 'language' && (
            <div className="space-y-5">
              {/* 1. Target Language */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  1. Target Language to Learn
                </label>

                <div className="grid grid-cols-2 gap-2">
                  {CENTRAL_LANGUAGE_REGISTRY.map((lang) => {
                    const isSelected = targetLang === lang.code;
                    const status = CurriculumService.getCurriculumStatus(lang.code);
                    const isProd = status.curriculumState === 'AUTHORED_PRODUCTION';

                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          playSoundEffectEffect('tap');
                          setTargetLang(lang.code as TargetLanguageCode);
                        }}
                        className={`p-3 rounded-2xl border text-left transition flex items-center justify-between cursor-pointer btn-press ${
                          isSelected
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-slate-900 dark:text-white ring-1 ring-emerald-500/30'
                            : 'bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 border-[#D8E3FF] dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="text-xl">{lang.flag}</span>
                          <div>
                            <span className="text-xs font-bold block leading-tight">{lang.name}</span>
                            <span className={`text-[8px] font-bold uppercase ${
                              isProd ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'
                            }`}>
                              {isProd ? 'Production' : 'Architecture Ready'}
                            </span>
                          </div>
                        </div>

                        {isSelected && <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Unauthored Language Banner */}
              {!isAuthored && (
                <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-500/30 rounded-2xl p-3.5 space-y-1.5 text-amber-900 dark:text-amber-200">
                  <div className="flex items-center space-x-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                    <ShieldCheck className="w-4 h-4" />
                    <span>ARCHITECTURE READY • CURRICULUM NOT YET AVAILABLE</span>
                  </div>
                  <p className="text-[11px] text-amber-800/80 dark:text-amber-200/80 leading-relaxed">
                    The target language environment for {getLanguageRegistryEntry(targetLang).name} is architecturally ready.
                    No fabricated or fake lessons will be displayed.
                  </p>
                </div>
              )}

              {/* 2. Instruction Language */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                    2. Instruction Language (Learn From)
                  </label>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Hindi: Full Course • Others: Architecture Ready</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {SUPPORTED_NATIVE_LANGUAGES.map((lang) => {
                    const isSelected = instructionLang === lang.code;
                    const isFull = lang.status === 'PRODUCTION_READY';

                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          playSoundEffectEffect('tap');
                          setInstructionLang(lang.code as InstructionLanguageCode);
                        }}
                        className={`p-2.5 rounded-2xl border text-left transition flex items-center justify-between cursor-pointer btn-press ${
                          isSelected
                            ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-slate-900 dark:text-white ring-1 ring-indigo-500/30'
                            : 'bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 border-[#D8E3FF] dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{lang.flag}</span>
                          <div>
                            <span className="text-xs font-bold block leading-tight">{lang.name}</span>
                            <span className={`text-[8px] font-bold uppercase ${
                              isFull ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'
                            }`}>
                              {isFull ? 'Full Content' : 'Architecture'}
                            </span>
                          </div>
                        </div>

                        {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>

                {instructionLang !== 'hi' && (
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/50">
                    💡 <span className="font-bold text-slate-800 dark:text-slate-300">Curriculum Note:</span> English curriculum is fully active. Core vocabulary mappings and schema are enabled for {SUPPORTED_NATIVE_LANGUAGES.find(l => l.code === instructionLang)?.name || instructionLang}.
                  </p>
                )}
              </div>

              {/* 3. Proficiency Level */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  3. Starting Proficiency Level
                </label>

                <div className="flex space-x-2 overflow-x-auto no-scrollbar py-1">
                  {(targetLang === 'sa' ? ['L1', 'L2'] : ['A1', 'A2']).map((lvl) => {
                    const isSelected = level === lvl;
                    return (
                      <button
                        key={lvl}
                        onClick={() => {
                          playSoundEffectEffect('tap');
                          setLevel(lvl);
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer btn-press ${
                          isSelected
                            ? 'bg-emerald-500 text-white shadow-md scale-105'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        {lvl}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Learning Goal */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  4. Primary Learning Goal
                </label>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'everyday', label: 'Everyday Conversation' },
                    { id: 'speaking', label: 'Spoken Fluency' },
                    { id: 'work', label: 'Career & Workplace' },
                    { id: 'travel', label: 'Travel & Exploration' },
                    { id: 'exams', label: 'Academic & Exams' },
                    { id: 'fluency', label: 'Complete Mastery' },
                  ].map((g) => {
                    const isSelected = goal === g.id;
                    return (
                      <button
                        key={g.id}
                        onClick={() => {
                          playSoundEffectEffect('tap');
                          setGoal(g.id as LearningGoal);
                        }}
                        className={`p-2.5 rounded-2xl border text-left text-xs font-bold transition flex items-center justify-between cursor-pointer btn-press ${
                          isSelected
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-slate-900 dark:text-white'
                            : 'bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 border-[#D8E3FF] dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span>{g.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-xs rounded-2xl shadow-lg hover:brightness-110 transition cursor-pointer btn-press"
          >
            Save & Apply Configuration
          </button>
        </div>
      </div>
    </div>
  );
};
