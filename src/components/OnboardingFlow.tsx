import React, { useState } from 'react';
import {
  Globe,
  Sparkles,
  ArrowRight,
  User,
  KeyRound,
  Compass,
  Award,
  CheckCircle2,
  BookOpen,
  Briefcase,
  Plane,
  GraduationCap,
  MessageCircle,
  HelpCircle,
  ShieldCheck,
  UserCheck,
  ChevronLeft,
  Zap,
  Flame,
  Volume2
} from 'lucide-react';
import {
  NativeLanguageCode,
  LearningGoal,
  CEFRLevel,
  UserAcademyProfile
} from '../types';
import { SUPPORTED_NATIVE_LANGUAGES, getLanguageInfo } from '../data/languages';
import { AuthService } from '../services/AuthService';
import { playSoundEffectEffect, setActiveEnglishAccent } from '../utils/audioUtils';
import { PlacementAssessmentModal } from './PlacementAssessmentModal';

// Sub-components for Phase 6A-1 Onboarding
import { SplashScreen } from './onboarding/SplashScreen';
import { OnboardingCarousel } from './onboarding/OnboardingCarousel';
import { LearningGoalStep } from './onboarding/LearningGoalStep';
import { DailyGoalStep } from './onboarding/DailyGoalStep';
import { VoiceAccentStep, AccentCode } from './onboarding/VoiceAccentStep';
import { AppearanceStep } from './onboarding/AppearanceStep';
import { JourneySummaryStep } from './onboarding/JourneySummaryStep';

export type OnboardingStep =
  | 'splash'
  | 'carousel'
  | 'language'
  | 'goal'
  | 'daily_goal'
  | 'voice_accent'
  | 'appearance'
  | 'level'
  | 'auth'
  | 'mode'
  | 'summary';

interface OnboardingFlowProps {
  onCompleteOnboarding: (user: UserAcademyProfile) => void;
  initialStep?: OnboardingStep;
  onExploreCourseOverview?: () => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({
  onCompleteOnboarding,
  initialStep = 'splash',
  onExploreCourseOverview,
}) => {
  const [step, setStep] = useState<OnboardingStep>(initialStep);

  // Account creation state
  const [authMode, setAuthMode] = useState<'create' | 'login' | 'guest'>('create');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  // Learner Preferences
  const [selectedNativeLang, setSelectedNativeLang] = useState<NativeLanguageCode>('hi');
  const [selectedGoal, setSelectedGoal] = useState<LearningGoal>('speaking');
  const [dailyMinutes, setDailyMinutes] = useState<number>(20);
  const [selectedAccent, setSelectedAccent] = useState<AccentCode>('en-IN');
  const [selectedCEFR, setSelectedCEFR] = useState<CEFRLevel>('A1');
  const [selectedLearningMode, setSelectedLearningMode] = useState<'english_only' | 'english_plus_secondary'>('english_only');
  const [selectedSecondaryLang, setSelectedSecondaryLang] = useState<'es' | 'fr' | 'de' | 'ja' | 'pt'>('es');
  const [showPlacementModal, setShowPlacementModal] = useState(false);

  const langInfo = getLanguageInfo(selectedNativeLang);

  // Step Transitions
  const handleSplashFinish = () => {
    setStep('carousel');
  };

  const handleCarouselComplete = () => {
    playSoundEffectEffect('tap');
    setStep('language');
  };

  const handleSelectLanguage = (code: NativeLanguageCode) => {
    playSoundEffectEffect('tap');
    setSelectedNativeLang(code);
    setStep('goal');
  };

  const handleGoalContinue = () => {
    playSoundEffectEffect('tap');
    setStep('daily_goal');
  };

  const handleDailyGoalContinue = () => {
    playSoundEffectEffect('tap');
    setStep('voice_accent');
  };

  const handleVoiceAccentContinue = () => {
    playSoundEffectEffect('tap');
    setStep('appearance');
  };

  const handleAppearanceContinue = () => {
    playSoundEffectEffect('tap');
    setStep('level');
  };

  const handleLevelSelected = (lvl: CEFRLevel) => {
    playSoundEffectEffect('tap');
    setSelectedCEFR(lvl);
    setStep('auth');
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    playSoundEffectEffect('tap');
    setStep('summary');
  };

  const handleStartAuthMode = (mode: 'create' | 'login' | 'guest') => {
    playSoundEffectEffect('tap');
    setAuthMode(mode);
    if (mode === 'guest') {
      setNameInput('Guest Learner');
      setEmailInput('guest@curiosityacademy.com');
      setStep('summary');
    }
  };

  // Final Action: Complete Onboarding & Save Profile
  const handleFinalLaunch = () => {
    playSoundEffectEffect('victory');

    let user: UserAcademyProfile;

    if (authMode === 'guest') {
      user = AuthService.loginAsGuest(selectedNativeLang);
    } else {
      user = AuthService.register(
        nameInput || 'Learner',
        (emailInput || '').trim(),
        selectedNativeLang,
        selectedGoal,
        selectedCEFR
      );
    }

    // Persist all user preferences
    const updated = AuthService.updateUserProfile({
      name: nameInput || user.name || 'Learner',
      nativeLanguage: selectedNativeLang,
      currentCEFR: selectedCEFR,
      learningGoal: selectedGoal,
      learningMode: selectedLearningMode,
      secondaryLanguage: selectedLearningMode === 'english_plus_secondary' ? selectedSecondaryLang : null,
      hasCompletedOnboarding: true,
      preferences: {
        dailyGoalMinutes: dailyMinutes,
        autoPlayAudio: true,
        audioSpeed: 1.0,
        notificationsEnabled: true,
        accentPreference: selectedAccent,
      },
    });

    setActiveEnglishAccent(selectedAccent);
    onCompleteOnboarding(updated);
  };

  // Render Splash Screen directly when in splash step
  if (step === 'splash') {
    return <SplashScreen onFinish={handleSplashFinish} durationMs={1900} />;
  }

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#050816] text-slate-900 dark:text-slate-100 flex flex-col justify-between select-none font-sans transition-colors duration-300">
      {/* Background Soft Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#335CFF]/10 dark:bg-[#335CFF]/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#10B981]/10 dark:bg-[#10B981]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-md w-full mx-auto flex-1 flex flex-col justify-between my-auto py-2">
        {/* STEP 1: CAROUSEL SLIDES */}
        {step === 'carousel' && (
          <OnboardingCarousel
            onComplete={handleCarouselComplete}
            onSkip={() => {
              playSoundEffectEffect('tap');
              setStep('language');
            }}
          />
        )}

        {/* STEP 2: NATIVE INSTRUCTION LANGUAGE SELECTION */}
        {step === 'language' && (
          <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
            {/* Header */}
            <div className="text-center space-y-2 pt-2">
              <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 px-3 py-1 rounded-full inline-block">
                Bilingual Instruction Bridge
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
                What language do you speak?
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Grammar explanations, vocabulary translations, and pronunciations are adapted into your native language.
              </p>
            </div>

            {/* Language Grid */}
            <div className="grid grid-cols-2 gap-2.5 my-4 max-h-[52vh] overflow-y-auto pr-1">
              {SUPPORTED_NATIVE_LANGUAGES.map((lang) => {
                const isSelected = selectedNativeLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`p-3.5 rounded-2xl border text-left cursor-pointer transition flex items-center space-x-3 btn-press ${
                      isSelected
                        ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-500 text-slate-900 dark:text-white ring-2 ring-indigo-500/20 shadow-lg'
                        : 'bg-white dark:bg-slate-900 border-[#D8E3FF] dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <div className="min-w-0">
                      <h4 className="font-black text-xs text-slate-900 dark:text-white truncate">
                        {lang.name}
                      </h4>
                      <p className="text-[10px] text-amber-600 dark:text-amber-300 font-hindi truncate">
                        {lang.nativeName}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setStep('goal');
                }}
                className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 btn-press bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] text-white hover:brightness-105 active:scale-98"
              >
                <span>Continue with {langInfo.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: LEARNING GOAL SELECTION */}
        {step === 'goal' && (
          <LearningGoalStep
            selectedGoal={selectedGoal}
            onSelectGoal={(g) => setSelectedGoal(g)}
            onContinue={handleGoalContinue}
          />
        )}

        {/* STEP 4: DAILY COMMITMENT (APPLE FITNESS STYLE) */}
        {step === 'daily_goal' && (
          <DailyGoalStep
            selectedMinutes={dailyMinutes}
            onSelectMinutes={(m) => setDailyMinutes(m)}
            onContinue={handleDailyGoalContinue}
          />
        )}

        {/* STEP 5: VOICE & ACCENT SELECTION */}
        {step === 'voice_accent' && (
          <VoiceAccentStep
            selectedAccent={selectedAccent}
            onSelectAccent={(acc) => setSelectedAccent(acc)}
            onContinue={handleVoiceAccentContinue}
          />
        )}

        {/* STEP 6: APPEARANCE & THEME PREVIEW */}
        {step === 'appearance' && (
          <AppearanceStep onContinue={handleAppearanceContinue} />
        )}

        {/* STEP 7: STARTING LEVEL / PLACEMENT TEST */}
        {step === 'level' && (
          <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
            {/* Header */}
            <div className="text-center space-y-2 pt-2">
              <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 px-3 py-1 rounded-full inline-block">
                CEFR Placement & Starting Point
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
                What is your English level?
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Start from a beginner baseline or take a short diagnostic for an A1/A2 starting-level recommendation.
              </p>
            </div>

            <div className="space-y-3.5 my-3 max-h-[52vh] overflow-y-auto pr-1">
              {/* Option 1: Diagnostic Test Recommended */}
              <div
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setShowPlacementModal(true);
                }}
                className="p-4 bg-gradient-to-br from-indigo-50/95 via-purple-50/50 to-emerald-50/40 dark:from-indigo-950/70 dark:via-slate-900 dark:to-slate-900 border-2 border-indigo-500/60 rounded-3xl cursor-pointer hover:border-indigo-400 transition shadow-xl space-y-2 btn-press"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>FIND MY LEVEL (DIAGNOSTIC TEST)</span>
                  </span>
                  <span className="text-[9px] bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Take the short interactive diagnostic for a suggested starting level. You can change your choice later.
                </p>
              </div>

              <div className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-wider py-1">
                — OR SELECT MANUALLY —
              </div>

              {/* Option 2: Manual Level Cards */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { cefr: 'A1' as CEFRLevel, title: 'A1 • Beginner', desc: 'Starting from scratch' },
                  { cefr: 'A2' as CEFRLevel, title: 'A2 • Elementary', desc: 'Basic everyday phrases' },
                ].map((lvl) => {
                  const isSelected = selectedCEFR === lvl.cefr;
                  return (
                    <button
                      key={lvl.cefr}
                      onClick={() => {
                        playSoundEffectEffect('tap');
                        setSelectedCEFR(lvl.cefr);
                      }}
                      className={`p-3 rounded-2xl border text-left transition btn-press ${
                        isSelected
                          ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-500 text-slate-900 dark:text-white ring-2 ring-indigo-500/20 shadow-md'
                          : 'bg-white dark:bg-slate-900 border-[#D8E3FF] dark:border-slate-800 hover:border-indigo-300 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <h4 className="font-black text-xs text-slate-900 dark:text-white">{lvl.title}</h4>
                      <p className="text-[10px] opacity-75">{lvl.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Continue Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setStep('auth');
                }}
                className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 btn-press bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] text-white hover:brightness-105 active:scale-98"
              >
                <span>Continue with {selectedCEFR} Level</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 8: ACCOUNT PROFILE CREATION / GUEST */}
        {step === 'auth' && (
          <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
            {/* Header */}
            <div className="text-center space-y-2 pt-2">
              <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 px-3 py-1 rounded-full inline-block">
                Local Progress Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
                Create Your Profile
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Your profile and progress are stored in this browser and are not cloud-synced. Clearing site data may remove them.
              </p>
            </div>

            {/* Form */}
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-[#D8E3FF] dark:border-slate-800 shadow-xl my-3">
              <form onSubmit={handleAuthSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full bg-[#F8FAFF] dark:bg-slate-950 border border-[#D8E3FF] dark:border-slate-800 focus:border-indigo-500 rounded-2xl p-3.5 text-xs text-slate-900 dark:text-white pl-10 outline-none transition"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="your.name@example.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full bg-[#F8FAFF] dark:bg-slate-950 border border-[#D8E3FF] dark:border-slate-800 focus:border-indigo-500 rounded-2xl p-3.5 text-xs text-slate-900 dark:text-white pl-10 outline-none transition"
                    />
                    <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl transition active:scale-95 flex items-center justify-center space-x-2 cursor-pointer btn-press"
                >
                  <span>Review Journey Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="pt-4 text-center">
                <button
                  type="button"
                  onClick={() => handleStartAuthMode('guest')}
                  className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition cursor-pointer"
                >
                  Continue as Guest (Instant 1-Tap Access)
                </button>
              </div>
            </div>

            <div className="text-center text-[11px] text-slate-400">
              By proceeding, your progress is saved on this device.
            </div>
          </div>
        )}

        {/* STEP 9: JOURNEY SUMMARY & CELEBRATION */}
        {step === 'summary' && (
          <JourneySummaryStep
            userName={nameInput || 'Learner'}
            nativeLang={selectedNativeLang}
            goal={selectedGoal}
            dailyMinutes={dailyMinutes}
            accent={selectedAccent}
            onBeginDay1={handleFinalLaunch}
            onExploreCourse={onExploreCourseOverview ? () => {
              handleFinalLaunch();
              onExploreCourseOverview();
            } : undefined}
          />
        )}
      </div>

      {/* Placement Assessment Modal */}
      {showPlacementModal && (
        <PlacementAssessmentModal
          onComplete={(recommendedLevel) => {
            setShowPlacementModal(false);
            setSelectedCEFR(recommendedLevel);
            setStep('auth');
          }}
          onCancel={() => setShowPlacementModal(false)}
        />
      )}
    </div>
  );
};
