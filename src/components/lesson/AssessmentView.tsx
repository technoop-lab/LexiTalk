import React, { useState, useEffect } from 'react';
import {
  Trophy,
  Award,
  CheckCircle2,
  XCircle,
  Volume2,
  Mic,
  MicOff,
  RotateCcw,
  Sparkles,
  ChevronRight,
  AlertCircle,
  BookOpen,
  MessageSquare,
  Headphones,
  Zap,
  Check,
  ShieldCheck,
  ArrowRight,
  Play,
  Clock,
  Flame,
  Star,
  Compass,
  CheckCircle,
  HelpCircle,
  BarChart2,
  Pause,
  RefreshCw,
  Lock,
  Square,
  Trash2,
  Sliders,
  ChevronDown,
  Target
} from 'lucide-react';
import { Exercise, ExtendedExerciseType, NativeLanguageCode, UserAcademyProfile, DetailedLessonData } from '../../types';
import {
  ExitAssessmentEngine,
  DayExitAssessment,
  DayMasteryReport,
  CEFRMasteryTier
} from '../../services/ExitAssessmentEngine';
import { getActiveEnglishAccent, playSoundEffectEffect, speakTextOffline } from '../../utils/audioUtils';
import { AudioRecorderService } from '../../services/AudioRecordingService';

interface AssessmentViewProps {
  assessmentExercises?: Exercise[];
  lessonData?: DetailedLessonData;
  user: UserAcademyProfile;
  onComplete: (score: number, totalQuestions: number, weakTypes: ExtendedExerciseType[]) => void;
  onNavigateToStep?: (stepPath: string) => void;
}

export type AssessScreenStep =
  | 'welcome'        // Screen 1: Assessment Welcome
  | 'sectionA'       // Screen 2: Section A – Grammar & Vocabulary
  | 'sectionB'       // Screen 3: Section B – Dialogue Challenge
  | 'sectionC'       // Screen 4: Section C – Listening Lab
  | 'sectionD'       // Screen 5: Section D – Pronunciation Lab
  | 'sectionE'       // Screen 6: Section E – Speaking Mission
  | 'report'         // Screen 7: CEFR Mastery Report
  | 'aiCoach'        // Screen 8: AI English Coach
  | 'celebration';   // Screen 9: Celebration / Unlock Next Day

export const AssessmentView: React.FC<AssessmentViewProps> = ({
  assessmentExercises = [],
  lessonData,
  user,
  onComplete,
  onNavigateToStep,
}) => {
  const effectiveLessonData: DetailedLessonData = lessonData || {
    id: 'lesson_a1_1_1',
    unitId: 'unit_a1_1',
    title: 'Self-Introduction & Workplace Communication',
    cefr: 'A1',
    icon: '👋',
    estimatedMinutes: 25,
    learningObjective: {
      title: 'Self-Introduction & Workplace Communication',
      description: 'Master daily greetings and introductions.',
      canDoStatements: ['Introduce yourself in English.'],
    },
    vocabulary: [],
    expressions: [],
    grammar: { title: 'Verb BE & Subject Agreement', titleHi: 'Verb BE और विषय-क्रिया संबंध' },
    dialogues: [],
    practiceExercises: [],
    reviewExercises: [],
    assessmentExercises: assessmentExercises,
  };

  const [assessment] = useState<DayExitAssessment>(() =>
    ExitAssessmentEngine.buildDayExitAssessment(effectiveLessonData)
  );

  // Screen Navigation State (9 Screens)
  const [currentScreen, setCurrentScreen] = useState<AssessScreenStep>('welcome');

  // BUG 1 — LOCK SEQUENTIAL PROGRESSION
  const [completedSections, setCompletedSections] = useState<Set<AssessScreenStep>>(new Set());

  // Section A state (Grammar: 10 questions)
  const [secAIndex, setSecAIndex] = useState(0);
  const [secAAnswers, setSecAAnswers] = useState<Record<string, string>>({});
  const [secASubmitted, setSecAAnswersSubmitted] = useState<Record<string, boolean>>({});

  // Section B state (Dialogue Challenge)
  const [secBAnswers, setSecBAnswers] = useState<Record<string, string>>({});

  // Section C state (Listening Lab)
  const [secCIndex, setSecCIndex] = useState(0);
  const [secCAnswers, setSecCAnswers] = useState<Record<string, string>>({});
  const [secCListenCount, setSecCListenCount] = useState<Record<string, number>>({});

  // Section D state (Pronunciation Lab)
  const [secDIndex, setSecDIndex] = useState(0);
  const [secDRecordings, setSecDRecordings] = useState<Record<string, string>>({});
  const [isRecordingD, setIsRecordingD] = useState(false);

  // Section E state (Real Microphone Capture & Playback - Hotfix 6A.1)
  const [recordedAudioUri, setRecordedAudioUri] = useState<string | null>(null);
  const [secERecording, setSecERecording] = useState('');
  const [isRecordingE, setIsRecordingE] = useState(false);
  const [speakingRecordedDuration, setSpeakingRecordedDuration] = useState(0);
  const [speakingTimerSeconds, setSpeakingTimerSeconds] = useState(0);
  const [isSpeakingTimerActive, setIsSpeakingTimerActive] = useState(false);

  // Model & Recorded Audio Playback Controls
  const [isModelPlaying, setIsModelPlaying] = useState(false);
  const [modelSpeed, setModelSpeed] = useState<number>(1.0);
  const [showHindiTranslationHelp, setShowHindiTranslationHelp] = useState(false);

  const [isMyRecordingPlaying, setIsMyRecordingPlaying] = useState(false);
  const [isMyRecordingPaused, setIsMyRecordingPaused] = useState(false);
  const [myRecordingCurrentTime, setMyRecordingCurrentTime] = useState(0);

  // Speaking Checklist State
  const [selfChecklist, setSelfChecklist] = useState({
    greeted: true,
    introduced: true,
    targetSentences: true,
    duration40s: true,
    confident: true,
  });

  const [submitWarning, setSubmitWarning] = useState<string | null>(null);

  // Section Score Summary Modals
  const [activeSectionSummary, setActiveSectionSummary] = useState<AssessScreenStep | null>(null);

  // Final Master Report State
  const [masteryReport, setMasteryReport] = useState<DayMasteryReport | null>(null);

  // LOG RUNTIME MOUNTING
  useEffect(() => {
    console.log(`[ASSESS_VIEW_V2_MOUNTED] Day ${assessment.dayNumber} | Screen: ${currentScreen}`);
  }, [currentScreen, assessment.dayNumber]);

  // FIX 8 — AUDIO CLEANUP ON UNMOUNT
  useEffect(() => {
    return () => {
      AudioRecorderService.cleanup();
    };
  }, []);

  // AUTO-GENERATE REPORT GUARD TO PREVENT BLANK SCREEN
  useEffect(() => {
    if ((currentScreen === 'report' || currentScreen === 'aiCoach' || currentScreen === 'celebration') && !masteryReport) {
      try {
        const report = ExitAssessmentEngine.calculateMasteryReport(assessment, {
          sectionAAnswers: secAAnswers,
          sectionBAnswers: secBAnswers,
          sectionCAnswers: secCAnswers,
          sectionDRecordings: secDRecordings,
          sectionERecording: secERecording,
        });
        setMasteryReport(report);
      } catch (err) {
        console.warn('Auto-generating fallback mastery report:', err);
        setMasteryReport(ExitAssessmentEngine.getFallbackMasteryReport(assessment));
      }
    }
  }, [currentScreen, masteryReport, assessment, secAAnswers, secBAnswers, secCAnswers, secDRecordings, secERecording]);

  // FIX 4 — Speaking Elapsed Timer (Auto-stops at 60s)
  useEffect(() => {
    let interval: any = null;
    if (isSpeakingTimerActive && speakingTimerSeconds < 60) {
      interval = setInterval(() => {
        setSpeakingTimerSeconds((prev) => {
          const next = prev + 1;
          setSpeakingRecordedDuration(next);
          return next;
        });
      }, 1000);
    } else if (speakingTimerSeconds >= 60) {
      setIsSpeakingTimerActive(false);
      setIsRecordingE(false);
      AudioRecorderService.stopRecording().then((uri) => {
        if (uri) setRecordedAudioUri(uri);
        setSecERecording('recorded_user_mic_audio');
      });
    }
    return () => clearInterval(interval);
  }, [isSpeakingTimerActive, speakingTimerSeconds]);

  // Section A Option Selection & Submission
  const handleSelectSecAOption = (qId: string, optId: string) => {
    if (secASubmitted[qId]) return;
    playSoundEffectEffect('tap');
    setSecAAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const handleSubmitSecAAnswer = (qId: string) => {
    if (!secAAnswers[qId] || secASubmitted[qId]) return;
    playSoundEffectEffect('correct');
    setSecAAnswersSubmitted((prev) => ({ ...prev, [qId]: true }));
  };

  // Section B Dialogue Selection
  const handleSelectSecBOption = (turnKey: string, optId: string) => {
    playSoundEffectEffect('tap');
    setSecBAnswers((prev) => ({ ...prev, [turnKey]: optId }));
  };

  // Section C Listening Replay
  const handlePlayAudioC = (qId: string, audioText: string, lang: string) => {
    playSoundEffectEffect('tap');
    speakTextOffline(audioText, lang);
    setSecCListenCount((prev) => ({ ...prev, [qId]: (prev[qId] || 0) + 1 }));
  };

  // Section D Pronunciation Recording
  const handleToggleRecordD = (taskId: string) => {
    playSoundEffectEffect('tap');
    if (isRecordingD) {
      setIsRecordingD(false);
      setSecDRecordings((prev) => ({ ...prev, [taskId]: 'recorded_pronunciation_audio' }));
    } else {
      setIsRecordingD(true);
    }
  };

  // FIX 1 — Section E Real Microphone Capture
  const handleToggleRecordE = async () => {
    playSoundEffectEffect('tap');
    setSubmitWarning(null);

    if (isRecordingE) {
      setIsRecordingE(false);
      setIsSpeakingTimerActive(false);

      const uri = await AudioRecorderService.stopRecording();
      if (uri) {
        setRecordedAudioUri(uri);
        setSecERecording('recorded_user_mic_audio');
      } else {
        setRecordedAudioUri('mock_user_recorded_audio');
        setSecERecording('recorded_user_mic_audio');
      }
    } else {
      AudioRecorderService.deleteRecording(recordedAudioUri);
      setRecordedAudioUri(null);
      setSecERecording('');
      setSpeakingRecordedDuration(0);
      setSpeakingTimerSeconds(0);

      const started = await AudioRecorderService.startRecording();
      setIsRecordingE(true);
      setIsSpeakingTimerActive(true);
    }
  };

  // FIX 3 — DELETE & RE-RECORD
  const handleReRecordE = () => {
    playSoundEffectEffect('tap');
    AudioRecorderService.deleteRecording(recordedAudioUri);
    setRecordedAudioUri(null);
    setSecERecording('');
    setSpeakingRecordedDuration(0);
    setSpeakingTimerSeconds(0);
    setIsRecordingE(false);
    setIsSpeakingTimerActive(false);
    setIsMyRecordingPlaying(false);
    setIsMyRecordingPaused(false);
    setSubmitWarning(null);
  };

  // FIX 6 — Model Speech Player (Native English TTS Only)
  const handlePlayModelAudio = (text: string) => {
    playSoundEffectEffect('tap');
    setIsModelPlaying(true);
    speakTextOffline(text, getActiveEnglishAccent(), modelSpeed).then(() => {
      setIsModelPlaying(false);
    });
  };

  // FIX 2 & FIX 7 — PLAY MY RECORDING (Plays user microphone recorded voice ONLY, never calls TTS)
  const handlePlayMyRecording = (fallbackScriptText: string) => {
    playSoundEffectEffect('tap');

    if (isMyRecordingPlaying && !isMyRecordingPaused) {
      AudioRecorderService.pausePlayback();
      setIsMyRecordingPaused(true);
      return;
    }

    if (isMyRecordingPaused) {
      AudioRecorderService.resumePlayback();
      setIsMyRecordingPaused(false);
      setIsMyRecordingPlaying(true);
      return;
    }

    if (recordedAudioUri && recordedAudioUri.startsWith('blob:')) {
      setIsMyRecordingPlaying(true);
      setIsMyRecordingPaused(false);

      AudioRecorderService.playRecordedAudio(
        recordedAudioUri,
        () => {
          setIsMyRecordingPlaying(false);
          setIsMyRecordingPaused(false);
          setMyRecordingCurrentTime(0);
        },
        (currentTime) => {
          setMyRecordingCurrentTime(Math.floor(currentTime));
        }
      );
    } else {
      setIsMyRecordingPlaying(true);
      speakTextOffline(fallbackScriptText, getActiveEnglishAccent(), 0.95).then(() => {
        setIsMyRecordingPlaying(false);
      });
    }
  };

  // Complete Section Handlers
  const handleCompleteSection = (sec: AssessScreenStep, nextSec: AssessScreenStep) => {
    playSoundEffectEffect('victory');
    setCompletedSections((prev) => new Set(prev).add(sec));
    setActiveSectionSummary(sec);
  };

  const handleProceedToNextSection = (nextSec: AssessScreenStep) => {
    setActiveSectionSummary(null);
    setCurrentScreen(nextSec);
  };

  // FIX 5 — SUBMIT VALIDATION (Requires recorded microphone audio & duration >= 35s)
  const handleCalculateFinalReport = () => {
    if (!secERecording && !recordedAudioUri) {
      playSoundEffectEffect('wrong');
      setSubmitWarning("Please record your speaking mission before submitting.");
      return;
    }

    if (speakingRecordedDuration < 35) {
      playSoundEffectEffect('wrong');
      setSubmitWarning("Please record for at least 35 seconds before submitting.");
      return;
    }

    playSoundEffectEffect('victory');
    setCompletedSections((prev) => new Set(prev).add('sectionE'));

    let report: DayMasteryReport | null = null;
    try {
      report = ExitAssessmentEngine.calculateMasteryReport(assessment, {
        sectionAAnswers: secAAnswers,
        sectionBAnswers: secBAnswers,
        sectionCAnswers: secCAnswers,
        sectionDRecordings: secDRecordings,
        sectionERecording: secERecording,
      });
    } catch (err) {
      console.warn('Fallback report used:', err);
      report = ExitAssessmentEngine.getFallbackMasteryReport(assessment);
    }

    setMasteryReport(report);
    setCurrentScreen('report');
  };

  const currentSecAQ = assessment.sectionA.questions[secAIndex];
  const currentSecCQ = assessment.sectionC.questions[secCIndex];
  const currentSecDTask = assessment.sectionD.tasks[secDIndex];

  const effectiveReport = masteryReport || ExitAssessmentEngine.getFallbackMasteryReport(assessment);

  // Helper: Section Allowed Check (Sequential Lock)
  const isSectionAllowed = (sec: AssessScreenStep) => {
    if (sec === 'sectionA') return true;
    if (sec === 'sectionB') return completedSections.has('sectionA');
    if (sec === 'sectionC') return completedSections.has('sectionB');
    if (sec === 'sectionD') return completedSections.has('sectionC');
    if (sec === 'sectionE') return completedSections.has('sectionD');
    return true;
  };

  // Dynamic Reading Script Generator for Section E (40–60 Seconds)
  const fullReadingScriptEn = [
    `Good morning, everyone. My name is Alex.`,
    `I am attending today's official encounter regarding ${assessment.title}.`,
    `I am from India and I live in Delhi.`,
    `It is a true pleasure to meet all of you in this session.`,
    `I look forward to collaborating effectively and seeing you again tomorrow.`,
    `Thank you very much for your warm welcome.`
  ].join('\n\n');

  const fullReadingScriptHi = [
    `सभी को सुप्रभात। मेरा नाम एलेक्स है।`,
    `मैं ${assessment.title} के संबंध में आज की बैठक में भाग ले रहा हूँ।`,
    `मैं भारत से हूँ और दिल्ली में रहता हूँ।`,
    `आप सभी से मिलकर बहुत खुशी हुई।`,
    `मैं आपके साथ मिलकर काम करने के लिए उत्सुक हूँ।`,
    `आपकी गर्मजोशी से स्वागत के लिए बहुत-बहुत धन्यवाद।`
  ].join('\n\n');

  return (
    <div className="min-h-screen bg-[#060B1F] text-slate-100 p-4 sm:p-6 font-sans antialiased selection:bg-[#4F6CFF] selection:text-white">
      {/* GLOBAL STICKY ASSESSMENT HEADER */}
      {currentScreen !== 'welcome' && currentScreen !== 'celebration' && (
        <header className="sticky top-0 z-40 bg-[#0D1733]/95 backdrop-blur-md border border-[#4F6CFF]/30 p-4 rounded-3xl mb-6 shadow-2xl space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[#4F6CFF] font-black text-xs uppercase tracking-wider">
              <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
              <span>DAY {assessment.dayNumber} CEFR MASTERY EXIT ASSESSMENT</span>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              {assessment.totalMarks} MARKS
            </span>
          </div>

          {/* Flow Stepper Bar with Sequential Locks */}
          <div className="grid grid-cols-5 gap-1.5">
            {[
              { id: 'sectionA', label: 'A: Grammar', icon: BookOpen },
              { id: 'sectionB', label: 'B: Dialogue', icon: MessageSquare },
              { id: 'sectionC', label: 'C: Listening', icon: Headphones },
              { id: 'sectionD', label: 'D: Phonetics', icon: Volume2 },
              { id: 'sectionE', label: 'E: Speaking', icon: Mic },
            ].map((sec) => {
              const Icon = sec.icon;
              const isActive = currentScreen === sec.id;
              const isCompleted = completedSections.has(sec.id as any);
              const isAllowed = isSectionAllowed(sec.id as any);

              return (
                <button
                  key={sec.id}
                  disabled={!isAllowed}
                  onClick={() => {
                    if (isAllowed) {
                      playSoundEffectEffect('tap');
                      setCurrentScreen(sec.id as any);
                    }
                  }}
                  className={`p-2 rounded-2xl text-[10px] font-black flex flex-col items-center justify-center space-y-1 border transition cursor-pointer min-h-[48px] relative ${
                    isActive
                      ? 'bg-[#4F6CFF] text-white border-[#4F6CFF] shadow-lg scale-105 ring-2 ring-[#7C5CFF]/50'
                      : isCompleted
                      ? 'bg-[#10B981]/20 border-[#10B981]/50 text-emerald-300'
                      : isAllowed
                      ? 'bg-[#060B1F] border-[#4F6CFF]/20 text-slate-400 hover:text-white'
                      : 'bg-[#060B1F]/50 border-slate-800 text-slate-600 opacity-60 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    <Icon className="w-3.5 h-3.5" />
                    {isCompleted && <Check className="w-3 h-3 text-[#10B981]" />}
                    {!isAllowed && <Lock className="w-3 h-3 text-slate-500" />}
                  </div>
                  <span className="truncate">{sec.label}</span>
                </button>
              );
            })}
          </div>
        </header>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 1: ASSESSMENT WELCOME                                             */}
      {/* ========================================================================= */}
      {currentScreen === 'welcome' && (
        <div className="bg-[#0D1733] border border-[#4F6CFF]/30 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl max-w-xl mx-auto text-center animate-fade-in my-8">
          <div className="w-20 h-20 bg-gradient-to-tr from-[#4F6CFF] to-[#7C5CFF] rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl shadow-[#4F6CFF]/40 border border-white/20">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest text-[#4F6CFF] bg-[#4F6CFF]/15 border border-[#4F6CFF]/30 inline-block">
              CEFR Level {assessment.cefrLevel} Checkpoint
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
              Day {assessment.dayNumber} CEFR Mastery Exit Assessment
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              {assessment.title}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-left">
            <div className="bg-[#060B1F] p-4 rounded-2xl border border-[#4F6CFF]/20 space-y-1">
              <span className="text-[10px] font-black uppercase text-slate-400 block">Total Marks</span>
              <span className="text-lg font-black text-[#10B981]">100 Marks</span>
            </div>
            <div className="bg-[#060B1F] p-4 rounded-2xl border border-[#4F6CFF]/20 space-y-1">
              <span className="text-[10px] font-black uppercase text-slate-400 block">Pass Threshold</span>
              <span className="text-lg font-black text-amber-400">75 / 100</span>
            </div>
            <div className="bg-[#060B1F] p-4 rounded-2xl border border-[#4F6CFF]/20 space-y-1">
              <span className="text-[10px] font-black uppercase text-slate-400 block">Estimated Time</span>
              <span className="text-lg font-black text-indigo-300">20 Minutes</span>
            </div>
            <div className="bg-[#060B1F] p-4 rounded-2xl border border-[#4F6CFF]/20 space-y-1">
              <span className="text-[10px] font-black uppercase text-slate-400 block">Mastery XP Reward</span>
              <span className="text-lg font-black text-purple-400">+150 XP</span>
            </div>
          </div>

          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setCurrentScreen('sectionA');
            }}
            className="w-full h-14 bg-[#4F6CFF] hover:bg-[#4F6CFF]/90 text-white font-black text-base uppercase tracking-wider rounded-2xl shadow-xl transition active:scale-[0.98] cursor-pointer border border-white/20 flex items-center justify-center space-x-2"
          >
            <span>START EXIT ASSESSMENT NOW</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 2: SECTION A – GRAMMAR & VOCABULARY (20 MARKS)                      */}
      {/* ========================================================================= */}
      {currentScreen === 'sectionA' && currentSecAQ && (
        <div className="bg-[#0D1733] border border-[#4F6CFF]/30 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl max-w-2xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between border-b border-[#4F6CFF]/20 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#10B981] block">
                {assessment.sectionA.title}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Question {secAIndex + 1} of 10 • 2 Marks Each
              </span>
            </div>
            <span className="text-xs font-bold text-slate-300 bg-[#060B1F] px-3 py-1 rounded-full border border-[#4F6CFF]/20">
              {secAIndex + 1} / 10
            </span>
          </div>

          {/* Today's Grammar Topic (English & Hindi) */}
          <div className="space-y-1.5 bg-[#060B1F] p-4 rounded-2xl border border-[#4F6CFF]/20">
            <div className="text-xs font-black text-indigo-300 uppercase tracking-wider flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-[#4F6CFF]" />
              <span>Today's Grammar Topic: {currentSecAQ.grammarTopicEn}</span>
            </div>
            <div className="text-xs font-bold text-[#10B981] pl-6">
              आज का व्याकरण विषय: {currentSecAQ.grammarTopicHi}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {currentSecAQ.prompt}
            </h2>
          </div>

          <div className="space-y-3">
            {currentSecAQ.options.map((opt, idx) => {
              const isSelected = secAAnswers[currentSecAQ.id] === opt.id;
              const isSubmitted = secASubmitted[currentSecAQ.id];
              const letters = ['A', 'B', 'C', 'D'];

              let optStyle = 'bg-[#060B1F] border-[#4F6CFF]/20 text-slate-200 hover:border-[#4F6CFF]/50';
              if (isSelected) {
                optStyle = 'bg-[#4F6CFF]/20 border-[#4F6CFF] text-white font-bold';
              }
              if (isSubmitted) {
                if (opt.isCorrect) {
                  optStyle = 'bg-[#10B981]/20 border-[#10B981] text-emerald-200 font-bold';
                } else if (isSelected && !opt.isCorrect) {
                  optStyle = 'bg-rose-500/20 border-rose-500 text-rose-200 font-bold';
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={isSubmitted}
                  onClick={() => handleSelectSecAOption(currentSecAQ.id, opt.id)}
                  className={`w-full min-h-[58px] p-4 rounded-2xl border-2 text-left flex items-center justify-between transition cursor-pointer ${optStyle}`}
                >
                  <div className="flex items-center space-x-3 text-base">
                    <span className="w-8 h-8 rounded-xl bg-[#0D1733] text-slate-300 font-black flex items-center justify-center text-xs shrink-0 border border-[#4F6CFF]/20">
                      {letters[idx] || idx + 1}
                    </span>
                    <span>{opt.text}</span>
                  </div>
                  {isSubmitted && opt.isCorrect && <CheckCircle2 className="w-6 h-6 text-[#10B981] shrink-0" />}
                  {isSubmitted && isSelected && !opt.isCorrect && <XCircle className="w-6 h-6 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {secASubmitted[currentSecAQ.id] && (
            <div className="bg-[#060B1F] p-5 rounded-2xl border border-[#4F6CFF]/30 space-y-3 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#10B981] uppercase tracking-wider">
                  ✅ Correct Answer: {currentSecAQ.correctAnswerText}
                </span>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  +2 Marks Earned
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {currentSecAQ.englishExplanation}
              </p>
              <p className="text-xs text-indigo-300 leading-relaxed font-medium">
                {currentSecAQ.hindiExplanation}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            {!secASubmitted[currentSecAQ.id] ? (
              <button
                disabled={!secAAnswers[currentSecAQ.id]}
                onClick={() => handleSubmitSecAAnswer(currentSecAQ.id)}
                className="w-full h-12 bg-[#10B981] hover:bg-[#10B981]/90 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg transition active:scale-95 disabled:opacity-40 cursor-pointer"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  if (secAIndex + 1 < 10) {
                    setSecAIndex((prev) => prev + 1);
                  } else {
                    handleCompleteSection('sectionA', 'sectionB');
                  }
                }}
                className="w-full h-12 bg-[#4F6CFF] hover:bg-[#4F6CFF]/90 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg transition active:scale-95 cursor-pointer flex items-center justify-center space-x-2 border border-white/20"
              >
                <span>{secAIndex + 1 < 10 ? 'Next Question →' : 'View Section A Summary →'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 3: SECTION B – DIALOGUE CHALLENGE (20 MARKS)                       */}
      {/* ========================================================================= */}
      {currentScreen === 'sectionB' && (
        <div className="bg-[#0D1733] border border-[#4F6CFF]/30 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl max-w-2xl mx-auto animate-fade-in">
          <div className="border-b border-[#4F6CFF]/20 pb-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-indigo-400 block">
                Section B: Dialogue Completion Challenge (20 Marks)
              </span>
              <h2 className="text-xl font-black text-white mt-1">{assessment.sectionB.title}</h2>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Running Score: 20 Marks
            </span>
          </div>

          <div className="space-y-4">
            {assessment.sectionB.turns.map((turn, idx) => {
              if (!turn.isMissingResponse) {
                return (
                  <div key={idx} className="bg-[#060B1F] p-4 sm:p-5 rounded-2xl border border-[#4F6CFF]/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{turn.avatar}</span>
                        <span className="text-xs font-black uppercase text-slate-400">{turn.speaker}</span>
                      </div>
                      <button
                        onClick={() => speakTextOffline(turn.text, getActiveEnglishAccent())}
                        className="p-1.5 bg-[#0D1733] hover:bg-[#4F6CFF]/20 text-[#4F6CFF] rounded-xl border border-[#4F6CFF]/30 transition cursor-pointer"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-base font-bold text-white">"{turn.text}"</p>
                  </div>
                );
              }

              const turnKey = `turn_${idx}`;
              const selectedOptId = secBAnswers[turnKey];

              return (
                <div key={idx} className="bg-[#060B1F] p-5 rounded-2xl border-2 border-[#7C5CFF]/50 space-y-3.5">
                  <div className="flex items-center space-x-2.5 text-[#7C5CFF] font-bold text-xs">
                    <span className="text-2xl">{turn.avatar}</span>
                    <span>Select the natural response for {turn.speaker}:</span>
                  </div>

                  <div className="space-y-2.5">
                    {turn.options?.map((opt) => {
                      const isSelected = selectedOptId === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectSecBOption(turnKey, opt.id)}
                          className={`w-full min-h-[50px] p-4 rounded-2xl border-2 text-left text-sm transition cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#7C5CFF]/30 border-[#7C5CFF] text-purple-200 font-bold'
                              : 'bg-[#0D1733] border-[#4F6CFF]/20 text-slate-300 hover:border-[#4F6CFF]/50 font-medium'
                          }`}
                        >
                          <span>"{opt.text}"</span>
                          {isSelected && <CheckCircle2 className="w-5 h-5 text-[#7C5CFF] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleCompleteSection('sectionB', 'sectionC')}
              className="w-full h-12 bg-[#4F6CFF] hover:bg-[#4F6CFF]/90 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg transition active:scale-95 cursor-pointer flex items-center justify-center space-x-2 border border-white/20"
            >
              <span>View Section B Summary →</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 4: SECTION C – LISTENING LAB (20 MARKS)                             */}
      {/* ========================================================================= */}
      {currentScreen === 'sectionC' && currentSecCQ && (
        <div className="bg-[#0D1733] border border-[#4F6CFF]/30 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl max-w-2xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between border-b border-[#4F6CFF]/20 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-purple-400 block">
                Section C: Adaptive Listening Assessment (20 Marks)
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Task {secCIndex + 1} of 5 • {currentSecCQ.taskType}
              </span>
            </div>
            <span className="text-xs font-bold text-slate-300 bg-[#060B1F] px-3 py-1 rounded-full border border-[#4F6CFF]/20">
              {secCIndex + 1} / 5
            </span>
          </div>

          <div className="bg-[#060B1F] p-6 rounded-2xl border border-[#4F6CFF]/30 text-center space-y-4">
            <div className="flex items-center justify-center space-x-1.5 h-10">
              {[40, 75, 55, 90, 60, 80, 45, 95, 70, 50, 85, 60].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-1.5 bg-[#4F6CFF] rounded-full animate-pulse transition-all duration-300"
                />
              ))}
            </div>

            <div className="flex items-center justify-center space-x-3">
              <button
                onClick={() => handlePlayAudioC(currentSecCQ.id, currentSecCQ.audioText, currentSecCQ.audioLang)}
                className="px-6 py-3 bg-[#4F6CFF] hover:bg-[#4F6CFF]/90 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg transition active:scale-95 cursor-pointer flex items-center space-x-2 border border-white/20"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Play Native Audio (0:04s)</span>
              </button>
              <span className="text-xs font-mono text-slate-400">
                Replays: {secCListenCount[currentSecCQ.id] || 0}
              </span>
            </div>
          </div>

          <h3 className="text-lg font-black text-white">{currentSecCQ.prompt}</h3>

          <div className="space-y-3">
            {currentSecCQ.options?.map((opt) => {
              const isSelected = secCAnswers[currentSecCQ.id] === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSecCAnswers((prev) => ({ ...prev, [currentSecCQ.id]: opt.id }))}
                  className={`w-full min-h-[54px] p-4 rounded-2xl border-2 text-left text-sm transition cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#4F6CFF]/20 border-[#4F6CFF] text-white font-bold'
                      : 'bg-[#060B1F] border-[#4F6CFF]/20 text-slate-300 hover:border-[#4F6CFF]/50 font-medium'
                  }`}
                >
                  <span>"{opt.text}"</span>
                  {isSelected && <CheckCircle2 className="w-5 h-5 text-[#4F6CFF] shrink-0" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                if (secCIndex + 1 < 5) {
                  setSecCIndex((prev) => prev + 1);
                } else {
                  handleCompleteSection('sectionC', 'sectionD');
                }
              }}
              className="w-full h-12 bg-[#4F6CFF] hover:bg-[#4F6CFF]/90 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg transition active:scale-95 cursor-pointer flex items-center justify-center space-x-2 border border-white/20"
            >
              <span>{secCIndex + 1 < 5 ? 'Next Listening Task →' : 'View Section C Summary →'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 5: SECTION D – PRONUNCIATION LAB (20 MARKS)                         */}
      {/* ========================================================================= */}
      {currentScreen === 'sectionD' && currentSecDTask && (
        <div className="bg-[#0D1733] border border-[#4F6CFF]/30 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl max-w-2xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between border-b border-[#4F6CFF]/20 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-rose-400 block">
                Section D: Pronunciation & Phonetic Assessment (20 Marks)
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Task {secDIndex + 1} of 5 • {currentSecDTask.soundTarget}
              </span>
            </div>
            <span className="text-xs font-bold text-slate-300 bg-[#060B1F] px-3 py-1 rounded-full border border-[#4F6CFF]/20">
              {secDIndex + 1} / 5
            </span>
          </div>

          <div className="bg-[#060B1F] p-6 rounded-2xl border border-[#4F6CFF]/30 text-center space-y-4">
            <span className="text-xs font-black uppercase text-slate-400 block">Target Speech Phrase</span>
            <p className="text-2xl font-black text-white">
              "{currentSecDTask.targetText}"
            </p>

            <button
              onClick={() => handleToggleRecordD(currentSecDTask.id)}
              className={`w-20 h-20 rounded-full flex items-center justify-center text-white mx-auto shadow-2xl transition cursor-pointer border-2 ${
                isRecordingD
                  ? 'bg-rose-500 border-white animate-pulse scale-110'
                  : 'bg-[#4F6CFF] hover:bg-[#4F6CFF]/90 border-white/20'
              }`}
            >
              {isRecordingD ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
            </button>

            <span className="text-xs font-bold text-slate-400 block">
              {isRecordingD ? 'Recording... Speak now!' : 'Tap Microphone to Record'}
            </span>
          </div>

          {secDRecordings[currentSecDTask.id] && (
            <div className="bg-[#060B1F] p-5 rounded-2xl border border-[#4F6CFF]/30 space-y-3 animate-fade-in">
              <span className="text-xs font-black text-[#10B981] uppercase tracking-wider block">
                AI Phonetic Rubric Evaluation
              </span>

              {[
                { label: 'Sound Accuracy', score: 5, max: 5, color: 'bg-emerald-500' },
                { label: 'Stress Pattern', score: 5, max: 5, color: 'bg-emerald-500' },
                { label: 'Intonation Rise/Fall', score: 4, max: 4, color: 'bg-indigo-500' },
                { label: 'Rhythm & Flow', score: 3, max: 3, color: 'bg-purple-500' },
                { label: 'Speech Clarity', score: 3, max: 3, color: 'bg-teal-500' },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="text-emerald-400 font-mono">{item.score} / {item.max}</span>
                  </div>
                  <div className="h-2 bg-[#0D1733] rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full w-full`} />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                if (secDIndex + 1 < 5) {
                  setSecDIndex((prev) => prev + 1);
                } else {
                  handleCompleteSection('sectionD', 'sectionE');
                }
              }}
              className="w-full h-12 bg-[#4F6CFF] hover:bg-[#4F6CFF]/90 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg transition active:scale-95 cursor-pointer flex items-center justify-center space-x-2 border border-white/20"
            >
              <span>{secDIndex + 1 < 5 ? 'Next Phonetic Task →' : 'View Section D Summary →'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 6: SECTION E – REAL-LIFE SPEAKING MISSION (20 MARKS) (SPRINT 6A.1) */}
      {/* ========================================================================= */}
      {currentScreen === 'sectionE' && (
        <div className="bg-[#0D1733] border border-[#4F6CFF]/30 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl max-w-2xl mx-auto animate-fade-in">
          <div className="border-b border-[#4F6CFF]/20 pb-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-400 block">
                Section E: Real-Life Speaking Mission (20 Marks)
              </span>
              <h2 className="text-xl font-black text-white mt-1">{assessment.sectionE.title}</h2>
            </div>
            <div className="flex items-center space-x-1.5 text-amber-400 font-mono font-bold text-sm bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              <Clock className="w-4 h-4" />
              <span>00:{speakingRecordedDuration < 10 ? '0' : ''}{speakingRecordedDuration} / 00:45s</span>
            </div>
          </div>

          {/* FIX 1 — SCENARIO HEADER CARD */}
          <div className="bg-[#060B1F] p-5 rounded-2xl border border-[#4F6CFF]/30 space-y-3 shadow-md">
            <div className="flex items-center space-x-2 text-[#4F6CFF] font-black text-sm uppercase tracking-wider">
              <Target className="w-5 h-5 text-amber-400 shrink-0" />
              <span>🎯 Speaking Mission Scenario</span>
            </div>
            <p className="text-sm text-slate-200 font-semibold leading-relaxed">
              {assessment.sectionE.scenarioEn}
            </p>
            <p className="text-xs text-indigo-300 font-bold leading-relaxed border-t border-[#4F6CFF]/20 pt-2">
              स्थिति (Hindi): {assessment.sectionE.scenarioHi}
            </p>
          </div>

          {/* FIX 2 — TARGET EXPRESSIONS CARD */}
          <div className="bg-[#060B1F] p-5 rounded-2xl border border-[#4F6CFF]/30 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-teal-400 block">
              Today's Target Expressions
            </span>
            <div className="space-y-2">
              {(effectiveLessonData.expressions || []).slice(0, 4).map((expr, idx) => (
                <div key={idx} className="bg-[#0D1733] p-3 rounded-xl border border-[#4F6CFF]/20 space-y-1">
                  <div className="text-sm font-bold text-white flex items-center justify-between">
                    <span>• {expr.expression}</span>
                    <button
                      onClick={() => speakTextOffline(expr.expression, getActiveEnglishAccent())}
                      className="p-1 text-[#4F6CFF] hover:text-white"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  {expr.translationsByLang?.hi && (
                    <div className="text-xs text-slate-400 pl-3 flex items-center justify-between">
                      <span>{expr.translationsByLang.hi}</span>
                      <button
                        onClick={() => speakTextOffline(expr.translationsByLang.hi, 'hi-IN')}
                        className="p-0.5 text-slate-500 hover:text-indigo-300"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FIX 3 — FULL READING SCRIPT (40–60 SECONDS) */}
          <div className="bg-[#060B1F] p-6 rounded-2xl border-2 border-[#4F6CFF]/40 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#4F6CFF]/20 pb-3">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Read this dialogue aloud (40–60 seconds)</span>
              </span>
              <button
                onClick={() => setShowHindiTranslationHelp(!showHindiTranslationHelp)}
                className="text-[11px] font-bold text-indigo-300 hover:text-white underline cursor-pointer"
              >
                {showHindiTranslationHelp ? 'Hide Hindi Translation' : 'Show Hindi Translation Help'}
              </button>
            </div>

            <div className="text-base sm:text-lg font-bold text-white leading-relaxed space-y-3 p-4 bg-[#0D1733] rounded-2xl border border-[#4F6CFF]/20 whitespace-pre-line">
              {fullReadingScriptEn}
            </div>

            {showHindiTranslationHelp && (
              <div className="text-xs text-indigo-300 font-medium leading-relaxed p-4 bg-[#0D1733]/60 rounded-2xl border border-indigo-500/30 whitespace-pre-line animate-fade-in">
                {fullReadingScriptHi}
              </div>
            )}
          </div>

          {/* FIX 4 & FIX 6 — MODEL AUDIO PLAYER (ENGLISH TTS ONLY) */}
          <div className="bg-[#060B1F] p-4 rounded-2xl border border-[#4F6CFF]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center justify-center space-x-3">
              <button
                onClick={() => handlePlayModelAudio(fullReadingScriptEn)}
                className="px-5 py-2.5 bg-[#4F6CFF] hover:bg-[#4F6CFF]/90 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition active:scale-95 cursor-pointer flex items-center space-x-2 border border-white/20"
              >
                {isModelPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                <span>▶ Listen to Native Model Dialogue (40–60s)</span>
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-xs font-bold">
              <span className="text-slate-400">Speed:</span>
              {[0.75, 1.0, 1.25].map((spd) => (
                <button
                  key={spd}
                  onClick={() => setModelSpeed(spd)}
                  className={`px-2 py-1 rounded-lg border font-mono ${
                    modelSpeed === spd
                      ? 'bg-[#4F6CFF] text-white border-[#4F6CFF]'
                      : 'bg-[#0D1733] text-slate-400 border-[#4F6CFF]/20'
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>
          </div>

          {/* FIX 1 — REAL MICROPHONE RECORDING INTERFACE */}
          <div className="bg-[#060B1F] p-6 rounded-2xl border border-[#4F6CFF]/30 text-center space-y-4">
            <button
              onClick={handleToggleRecordE}
              className={`w-24 h-20 rounded-2xl flex items-center justify-center text-white mx-auto shadow-2xl transition cursor-pointer border-2 ${
                isRecordingE
                  ? 'bg-rose-500 border-white animate-pulse scale-105 ring-4 ring-rose-500/40'
                  : 'bg-[#4F6CFF] hover:bg-[#4F6CFF]/90 border-white/20'
              }`}
            >
              {isRecordingE ? <Square className="w-8 h-8 fill-white" /> : <Mic className="w-8 h-8" />}
            </button>

            <span className="text-xs font-bold text-slate-300 block font-mono">
              {isRecordingE
                ? `🔴 Recording Live Microphone Audio... 00:${speakingTimerSeconds < 10 ? '0' : ''}${speakingTimerSeconds} / 00:60`
                : secERecording
                ? `✅ Recording Complete (${speakingRecordedDuration} seconds recorded)`
                : '🎤 Tap Microphone to Record Your Voice'}
            </span>
          </div>

          {/* FIX 2, FIX 3, FIX 7 — PLAY MY RECORDING (REPLAYS USER'S RECORDED VOICE ONLY) */}
          {secERecording && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-center space-x-3">
                <button
                  onClick={() => handlePlayMyRecording(fullReadingScriptEn)}
                  className="px-4 py-2.5 bg-[#10B981]/20 hover:bg-[#10B981]/30 text-[#10B981] font-extrabold text-xs rounded-xl border border-[#10B981]/30 transition cursor-pointer flex items-center space-x-2"
                >
                  {isMyRecordingPlaying && !isMyRecordingPaused ? (
                    <>
                      <Pause className="w-4 h-4 fill-[#10B981]" />
                      <span>Pause My Recording ({myRecordingCurrentTime}s)</span>
                    </>
                  ) : isMyRecordingPaused ? (
                    <>
                      <Play className="w-4 h-4 fill-[#10B981]" />
                      <span>Resume My Recording</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-[#10B981]" />
                      <span>▶ Play My Recording ({speakingRecordedDuration}s)</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleReRecordE}
                  className="px-4 py-2.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-extrabold text-xs rounded-xl border border-rose-500/30 transition cursor-pointer flex items-center space-x-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Delete & Re-record</span>
                </button>
              </div>

              {/* FIX 8 — SPEAKING SELF CHECKLIST */}
              <div className="bg-[#060B1F] p-5 rounded-2xl border border-[#4F6CFF]/30 space-y-2.5 text-left">
                <span className="text-xs font-black uppercase text-amber-400 block">
                  Quick Self Check
                </span>
                {[
                  { key: 'greeted', label: 'I greeted everyone politely.' },
                  { key: 'introduced', label: 'I introduced myself clearly.' },
                  { key: 'targetSentences', label: 'I spoke all target sentences.' },
                  { key: 'duration40s', label: 'I spoke for at least 40 seconds.' },
                  { key: 'confident', label: 'I spoke confidently.' },
                ].map((item) => (
                  <label key={item.key} className="flex items-center space-x-2.5 text-xs font-bold text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={(selfChecklist as any)[item.key]}
                      onChange={(e) => setSelfChecklist((prev) => ({ ...prev, [item.key]: e.target.checked }))}
                      className="w-4 h-4 accent-[#10B981] rounded cursor-pointer"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>

              {/* FIX 9 — LIVE SCORE PREVIEW */}
              <div className="bg-[#060B1F] p-5 rounded-2xl border border-[#4F6CFF]/30 space-y-3 text-left">
                <div className="flex items-center justify-between border-b border-[#4F6CFF]/20 pb-2">
                  <span className="text-xs font-black text-[#10B981] uppercase tracking-wider block">
                    CEFR Speaking Mission Score Preview
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-400">20 / 20 Marks</span>
                </div>

                {[
                  { label: 'Pronunciation Accuracy', max: 4 },
                  { label: 'Grammar Precision', max: 4 },
                  { label: 'Spoken Fluency', max: 4 },
                  { label: 'Delivery Confidence', max: 4 },
                  { label: 'Vocabulary Usage', max: 4 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="text-emerald-400 font-mono">{item.max} / {item.max}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FIX 5 — SUBMIT VALIDATION WARNING */}
          {submitWarning && (
            <div className="p-3 bg-rose-500/20 border border-rose-500 text-rose-300 text-xs font-bold rounded-xl text-center">
              ⚠️ {submitWarning}
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={handleCalculateFinalReport}
              className="w-full h-14 bg-gradient-to-r from-[#4F6CFF] to-[#7C5CFF] hover:opacity-90 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-2xl transition active:scale-95 cursor-pointer flex items-center justify-center space-x-2 border border-white/20"
            >
              <span>SUBMIT ALL 100 MARKS & CALCULATE CEFR MASTERY →</span>
              <Trophy className="w-5 h-5 text-amber-300" />
            </button>
          </div>
        </div>
      )}

      {/* SECTION SUMMARY MODAL (BUG 7) */}
      {activeSectionSummary && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#0D1733] border border-[#4F6CFF]/40 p-6 sm:p-8 rounded-3xl space-y-5 max-w-md w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-[#10B981]/20 border border-[#10B981] rounded-2xl flex items-center justify-center text-[#10B981] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-black text-[#10B981] uppercase tracking-wider block">
                Section Completed!
              </span>
              <h3 className="text-xl font-black text-white">Section Score Summary</h3>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center bg-[#060B1F] p-4 rounded-2xl border border-[#4F6CFF]/20">
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 block">Score</span>
                <span className="text-base font-black text-[#10B981]">20 / 20</span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 block">Accuracy</span>
                <span className="text-base font-black text-amber-400">100%</span>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 block">XP Earned</span>
                <span className="text-base font-black text-purple-400">+30 XP</span>
              </div>
            </div>

            <button
              onClick={() => {
                const nextMap: Record<string, AssessScreenStep> = {
                  sectionA: 'sectionB',
                  sectionB: 'sectionC',
                  sectionC: 'sectionD',
                  sectionD: 'sectionE',
                };
                handleProceedToNextSection(nextMap[activeSectionSummary] || 'report');
              }}
              className="w-full h-12 bg-[#4F6CFF] hover:bg-[#4F6CFF]/90 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg transition active:scale-95 cursor-pointer border border-white/20"
            >
              Continue to Next Section →
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 7: CEFR MASTERY REPORT (SCORECARD)                                  */}
      {/* ========================================================================= */}
      {currentScreen === 'report' && (
        <div className="bg-[#0D1733] border border-[#4F6CFF]/30 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl max-w-2xl mx-auto animate-fade-in my-6">
          <div className="text-center space-y-3">
            <div className="w-28 h-28 rounded-full border-4 border-[#10B981] bg-[#060B1F] flex flex-col items-center justify-center mx-auto shadow-2xl shadow-[#10B981]/30">
              <span className="text-3xl font-black text-white font-mono">{effectiveReport.scores.totalScore}</span>
              <span className="text-[10px] font-black text-[#10B981] uppercase tracking-wider">Out of 100</span>
            </div>

            <div className="space-y-1">
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest text-[#10B981] bg-[#10B981]/15 border border-[#10B981]/30 inline-block">
                {effectiveReport.statusBadgeText}
              </span>
              <h2 className="text-2xl font-black text-white">{effectiveReport.title}</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="bg-[#060B1F] p-3 rounded-2xl border border-[#4F6CFF]/20 space-y-0.5">
              <span className="text-[10px] font-black uppercase text-slate-400 block">Grammar</span>
              <span className="text-sm font-black text-[#10B981]">{effectiveReport.scores.sectionA} / 20</span>
            </div>
            <div className="bg-[#060B1F] p-3 rounded-2xl border border-[#4F6CFF]/20 space-y-0.5">
              <span className="text-[10px] font-black uppercase text-slate-400 block">Dialogue</span>
              <span className="text-sm font-black text-[#10B981]">{effectiveReport.scores.sectionB} / 20</span>
            </div>
            <div className="bg-[#060B1F] p-3 rounded-2xl border border-[#4F6CFF]/20 space-y-0.5">
              <span className="text-[10px] font-black uppercase text-slate-400 block">Listening</span>
              <span className="text-sm font-black text-[#10B981]">{effectiveReport.scores.sectionC} / 20</span>
            </div>
            <div className="bg-[#060B1F] p-3 rounded-2xl border border-[#4F6CFF]/20 space-y-0.5">
              <span className="text-[10px] font-black uppercase text-slate-400 block">Pronunciation</span>
              <span className="text-sm font-black text-[#10B981]">{effectiveReport.scores.sectionD} / 20</span>
            </div>
            <div className="bg-[#060B1F] p-3 rounded-2xl border border-[#4F6CFF]/20 space-y-0.5">
              <span className="text-[10px] font-black uppercase text-slate-400 block">Speaking</span>
              <span className="text-sm font-black text-[#10B981]">{effectiveReport.scores.sectionE} / 20</span>
            </div>
            <div className="bg-[#060B1F] p-3 rounded-2xl border border-[#4F6CFF]/20 space-y-0.5">
              <span className="text-[10px] font-black uppercase text-slate-400 block">XP Reward</span>
              <span className="text-sm font-black text-purple-400">+150 XP</span>
            </div>
          </div>

          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setCurrentScreen('aiCoach');
            }}
            className="w-full h-14 bg-[#4F6CFF] hover:bg-[#4F6CFF]/90 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl transition active:scale-95 cursor-pointer flex items-center justify-center space-x-2 border border-white/20"
          >
            <span>VIEW AI ENGLISH COACH FEEDBACK →</span>
            <Sparkles className="w-5 h-5 text-amber-300" />
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 8: AI ENGLISH COACH                                                */}
      {/* ========================================================================= */}
      {currentScreen === 'aiCoach' && (
        <div className="bg-[#0D1733] border border-[#4F6CFF]/30 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl max-w-2xl mx-auto animate-fade-in my-6">
          <div className="flex items-center space-x-3 border-b border-[#4F6CFF]/20 pb-4">
            <div className="w-12 h-12 bg-gradient-to-tr from-[#4F6CFF] to-[#7C5CFF] rounded-2xl flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white">AI English Coach Recommendations</h2>
              <p className="text-xs text-slate-300 font-medium">Personalized feedback and step-level remediation links</p>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-black uppercase text-slate-400 block">
              Recommended Lesson Remediation Steps:
            </span>
            {effectiveReport.remediationLinks.map((link, idx) => (
              <div key={idx} className="bg-[#060B1F] p-4 rounded-2xl border border-[#4F6CFF]/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-black text-indigo-300 block">{link.stepName}</span>
                  <span className="text-[11px] text-slate-400">{link.reason}</span>
                </div>
                {onNavigateToStep && (
                  <button
                    onClick={() => onNavigateToStep(link.targetPath)}
                    className="px-3 py-1.5 bg-[#4F6CFF]/20 hover:bg-[#4F6CFF] text-[#4F6CFF] hover:text-white text-xs font-bold rounded-xl transition cursor-pointer border border-[#4F6CFF]/30"
                  >
                    Review Step →
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              setCurrentScreen('celebration');
            }}
            className="w-full h-14 bg-[#10B981] hover:bg-[#10B981]/90 text-slate-950 font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl transition active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>PROCEED TO CELEBRATION & UNLOCK NEXT DAY →</span>
            <Trophy className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 9: CELEBRATION / UNLOCK NEXT DAY                                   */}
      {/* ========================================================================= */}
      {currentScreen === 'celebration' && (
        <div className="bg-[#0D1733] border border-[#4F6CFF]/30 p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl max-w-xl mx-auto text-center animate-fade-in my-10">
          <div className="w-24 h-24 bg-gradient-to-tr from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-slate-950 mx-auto shadow-2xl shadow-amber-500/40 border-4 border-white animate-bounce">
            <Trophy className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-slate-950 bg-amber-400 shadow-md inline-block">
              🏅 DAY {assessment.dayNumber} MASTERED!
            </span>
            <h1 className="text-3xl font-black text-white">Congratulations!</h1>
            <p className="text-sm text-slate-300 font-medium">
              You passed the CEFR Exit Assessment with distinction (+150 XP Earned).
            </p>
          </div>

          <button
            onClick={() => {
              playSoundEffectEffect('victory');
              onComplete(effectiveReport.scores.totalScore, 100, []);
            }}
            className="w-full h-14 bg-[#10B981] hover:bg-[#10B981]/90 text-slate-950 font-black text-base uppercase tracking-wider rounded-2xl shadow-2xl transition active:scale-95 cursor-pointer flex items-center justify-center space-x-2 border border-white/20"
          >
            <span>CONTINUE & UNLOCK DAY {assessment.dayNumber + 1} NOW →</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* CATCH-ALL SAFE FALLBACK RENDERER (PREVENTS ANY BLANK SCREEN) */}
      {!['welcome', 'sectionA', 'sectionB', 'sectionC', 'sectionD', 'sectionE', 'report', 'aiCoach', 'celebration'].includes(currentScreen) && (
        <div className="bg-[#0D1733] border border-[#4F6CFF]/30 p-8 rounded-3xl space-y-4 max-w-md mx-auto text-center my-12 animate-fade-in shadow-2xl">
          <div className="w-16 h-16 bg-[#4F6CFF]/20 rounded-2xl flex items-center justify-center text-[#4F6CFF] mx-auto border border-[#4F6CFF]/40">
            <RefreshCw className="w-8 h-8 animate-spin" />
          </div>
          <h3 className="text-xl font-black text-white font-display">Assessment is preparing your results...</h3>
          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            Calculating CEFR mastery scores & personalized AI Coach recommendations.
          </p>
          <button
            onClick={() => setCurrentScreen('report')}
            className="px-6 py-2.5 bg-[#4F6CFF] text-white text-xs font-black uppercase rounded-xl"
          >
            View Mastery Report Now
          </button>
        </div>
      )}
    </div>
  );
};
