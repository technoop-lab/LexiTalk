import React, { useState } from 'react';
import {
  Globe,
  Plus,
  Check,
  ShieldCheck,
  ArrowRight,
  X,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { UserAcademyProfile, LearningJourney, TargetLanguageCode, LearningLanguageConfig } from '../../types';
import { CENTRAL_LANGUAGE_REGISTRY, getLanguageRegistryEntry, getLanguageInfo } from '../../data/languages';
import { AuthService } from '../../services/AuthService';
import { CurriculumService } from '../../services/CurriculumService';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface LearningJourneySelectorProps {
  user: UserAcademyProfile;
  onUpdateUser: (updated: Partial<UserAcademyProfile>) => void;
  onClose: () => void;
}

export const LearningJourneySelector: React.FC<LearningJourneySelectorProps> = ({
  user,
  onUpdateUser,
  onClose,
}) => {
  const [showAddJourney, setShowAddJourney] = useState(false);
  const [selectedNewLang, setSelectedNewLang] = useState<TargetLanguageCode>('en');

  const activeJourneys: LearningJourney[] = user.learningJourneys || [];

  // Handler: Switch active journey
  const handleSelectJourney = (journey: LearningJourney) => {
    playSoundEffectEffect('tap');
    const updatedUser = AuthService.switchActiveJourney(journey.journeyId);
    onUpdateUser(updatedUser);
    onClose();
  };

  // Handler: Add a new journey from CENTRAL_LANGUAGE_REGISTRY
  const handleCreateJourney = () => {
    playSoundEffectEffect('victory');

    const config: LearningLanguageConfig = {
      configId: `cfg_${selectedNewLang}_${Date.now()}`,
      learnerId: user.id,
      targetLanguage: selectedNewLang,
      instructionLanguage: user.nativeLanguage || 'hi',
      interfaceLanguage: user.nativeLanguage || 'hi',
      proficiencyLevel: 'A1',
      proficiencyFramework: selectedNewLang === 'sa' ? 'LEVEL_STAGES' : 'CEFR',
      curriculumId: `curriculum_${selectedNewLang}`,
      learningGoal: user.learningGoal || 'fluency',
    };

    const newJourney: LearningJourney = {
      journeyId: `journey_${selectedNewLang}_${Date.now()}`,
      config,
      createdAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
      completedLessonIds: [],
      lessonStars: {},
      totalXp: 0,
      currentLevel: selectedNewLang === 'sa' ? 'L1' : 'A1',
      wordsMasteredCount: 0,
      detailedLessonProgress: {},
    };

    const updatedJourneys = [...activeJourneys, newJourney];

    const updatedUser = AuthService.updateUserProfile({
      learningJourneys: updatedJourneys,
      activeJourneyId: newJourney.journeyId,
      learningLanguage: selectedNewLang,
      currentCEFR: (selectedNewLang === 'sa' ? 'L1' : 'A1') as any,
    });

    onUpdateUser(updatedUser);
    setShowAddJourney(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#D9E4FF] dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">Learning Journeys</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Manage target language journeys without losing progress</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition cursor-pointer btn-press"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {!showAddJourney ? (
            <>
              {/* Active Journeys List */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Active Learner Journeys ({activeJourneys.length})
                </span>

                {activeJourneys.map((j) => {
                  const isActive = j.journeyId === user.activeJourneyId || j.config.targetLanguage === user.learningLanguage;
                  const langEntry = getLanguageRegistryEntry(j.config.targetLanguage);
                  const statusInfo = CurriculumService.getCurriculumStatus(j.config.targetLanguage);
                  const isAuthored = statusInfo.curriculumState === 'AUTHORED_PRODUCTION';

                  return (
                    <div
                      key={j.journeyId}
                      onClick={() => handleSelectJourney(j)}
                      className={`p-4 rounded-2xl border transition cursor-pointer relative overflow-hidden flex items-center justify-between btn-press ${
                        isActive
                          ? 'bg-emerald-50 dark:bg-gradient-to-r dark:from-emerald-950/80 dark:to-slate-900 border-emerald-400 dark:border-emerald-500/50 shadow-sm dark:shadow-lg'
                          : 'bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 border-[#D9E4FF] dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-2xl shadow-inner">
                          {langEntry.flag}
                        </div>

                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-sm font-black text-slate-900 dark:text-white">{langEntry.name}</h4>
                            <span className={`px-2 py-0.5 text-[9px] font-black rounded uppercase ${
                              isAuthored ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400' : 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400'
                            }`}>
                              {isAuthored ? 'Production' : 'Architecture Ready'}
                            </span>
                          </div>

                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                            Level: <span className="font-bold text-slate-800 dark:text-slate-200">{j.currentLevel}</span> • {j.completedLessonIds.length} Lessons • {j.totalXp} XP
                          </p>

                          {!isAuthored && (
                            <p className="text-[10px] text-amber-600 dark:text-amber-400/90 font-medium mt-1">
                              ⚠️ Curriculum content not yet authored.
                            </p>
                          )}
                        </div>
                      </div>

                      {isActive && (
                        <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </>
          ) : (
            /* Add Journey Selection Screen */
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#D9E4FF] dark:border-slate-800 pb-3">
                <span className="text-xs font-black uppercase text-slate-800 dark:text-slate-300">
                  Select Target Language
                </span>
                <button
                  onClick={() => setShowAddJourney(false)}
                  className="text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-1">
                {CENTRAL_LANGUAGE_REGISTRY.map((lang) => {
                  const statusInfo = CurriculumService.getCurriculumStatus(lang.code);
                  const isAuthored = statusInfo.curriculumState === 'AUTHORED_PRODUCTION';
                  const isSelected = selectedNewLang === lang.code;

                  return (
                    <div
                      key={lang.code}
                      onClick={() => setSelectedNewLang(lang.code as TargetLanguageCode)}
                      className={`p-3 rounded-2xl border transition cursor-pointer flex items-center justify-between btn-press ${
                        isSelected
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-500 text-slate-900 dark:text-white shadow-xs'
                          : 'bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 border-[#D9E4FF] dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{lang.flag}</span>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-bold text-slate-900 dark:text-white">{lang.name} ({lang.nativeName})</span>
                            <span className={`px-1.5 py-0.5 text-[8px] font-black rounded uppercase ${
                              isAuthored ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400' : 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400'
                            }`}>
                              {isAuthored ? 'Authored' : 'Architectural'}
                            </span>
                          </div>
                          {!isAuthored && (
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">
                              Platform ready • Content authoring pending
                            </span>
                          )}
                        </div>
                      </div>

                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-emerald-500 bg-emerald-500' : 'border-slate-400 dark:border-slate-600'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 text-white font-bold" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status Warning for Non-Authored Language */}
              {selectedNewLang !== 'en' && (
                <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-500/30 rounded-2xl p-3 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                  <div className="flex items-center space-x-1.5 font-bold">
                    <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Honest Curriculum Policy</span>
                  </div>
                  <p className="text-[11px] text-amber-800/80 dark:text-amber-200/80 leading-relaxed">
                    The target language environment for {getLanguageRegistryEntry(selectedNewLang).name} is architecturally ready.
                    No fake or placeholder lessons will be displayed.
                  </p>
                </div>
              )}

              {/* Confirm Add Button */}
              <button
                onClick={handleCreateJourney}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-xs rounded-2xl shadow-lg hover:brightness-110 transition cursor-pointer btn-press"
              >
                Confirm & Start {getLanguageRegistryEntry(selectedNewLang).name} Journey
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
