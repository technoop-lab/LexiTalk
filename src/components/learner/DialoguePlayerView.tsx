import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Volume2,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Mic,
  MessageSquare,
  Clock,
  Gauge,
  Headphones,
  CheckCircle2,
  ChevronRight,
  Sparkle,
  Award,
  Zap,
  Flame,
  Layers,
  Share2,
  CheckCheck,
  Radio,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { MiniDialogue, DialogueLine, UserAcademyProfile } from '../../types';
import { HindiDayLesson, HindiDialogueScenario, HindiDialogueTurn } from '../../types/hindiCourse';
import { LESSON_A1_1_1_DATA } from '../../data/lessons/lesson_a1_1_1';
import { HindiCourseService } from '../../services/HindiCourseService';
import { AudioService } from '../../services/AudioService';
import { getActiveEnglishAccent, playSoundEffectEffect, speakCleanAudio } from '../../utils/audioUtils';

// Browser speech recognition (built in; no paid service). Null where the browser or app lacks it.
const getSpeechRecognitionCtor = (): any => {
  if (typeof window === 'undefined') return null;
  const w = window as any;
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
};

const normaliseWords = (text: string): string[] =>
  text
    .toLowerCase()
    .replace(/[\u2018\u2019']/g, '')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

// Counts target words that appear in the spoken text, in the same order (longest common subsequence).
const scoreWordsInOrder = (target: string, said: string): { matched: number; total: number } => {
  const t = normaliseWords(target);
  const sp = normaliseWords(said);
  const dp: number[][] = Array.from({ length: t.length + 1 }, () => new Array(sp.length + 1).fill(0));
  for (let i = 1; i <= t.length; i++) {
    for (let j = 1; j <= sp.length; j++) {
      dp[i][j] = t[i - 1] === sp[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return { matched: dp[t.length][sp.length], total: t.length };
};

interface DialoguePlayerViewProps {
  user: UserAcademyProfile;
  dayLesson?: HindiDayLesson | null;
  dayNumber?: number;
}

// Normalized dialogue structure to support both Lesson formats seamlessly
interface NormalizedTurn {
  id: string;
  speaker: string;
  avatar?: string;
  textEn: string;
  textHi: string;
  focus?: string;
  audioId?: string;
}

interface NormalizedScenario {
  id: string;
  title: string;
  titleHi?: string;
  context?: string;
  situation?: string;
  location?: string;
  grammarFocus?: string;
  turns: NormalizedTurn[];
}

export const DialoguePlayerView: React.FC<DialoguePlayerViewProps> = ({
  user,
  dayLesson,
  dayNumber = 1,
}) => {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(dayLesson?.dayNumber || dayNumber);
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [activeLineIndex, setActiveLineIndex] = useState<number | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<0.75 | 0.92 | 1.0 | 1.25>(0.92);
  const [roleplaySpeaker, setRoleplaySpeaker] = useState<string | null>(null);
  const [shadowingMode, setShadowingMode] = useState(false);
  const [shadowingTarget, setShadowingTarget] = useState<'A' | 'B' | 'ALL'>('ALL');
  const [recordedTurnIndex, setRecordedTurnIndex] = useState<number | null>(null);
  const [isRecordingGlobal, setIsRecordingGlobal] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [recordingDone, setRecordingDone] = useState(false);
  const [globalTranscript, setGlobalTranscript] = useState('');
  const [speechNote, setSpeechNote] = useState<string | null>(null);
  const [turnResult, setTurnResult] = useState<Record<number, { matched: number; total: number; said: string }>>({});
  const recognitionRef = useRef<any>(null);
  const sessionRef = useRef(0);
  const [finishedTurnIndices, setFinishedTurnIndices] = useState<Set<number>>(new Set());
  const [showCelebration, setShowCelebration] = useState(false);

  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const recordingTimerRef = useRef<any>(null);

  // Load scenarios for current day
  const currentDayData: HindiDayLesson | null = useMemo(() => {
    if (dayLesson && dayLesson.dayNumber === selectedDayNumber) {
      return dayLesson;
    }
    return HindiCourseService.getDayByNumber(selectedDayNumber);
  }, [dayLesson, selectedDayNumber]);

  // Normalize all available scenarios (guaranteeing 10 scenarios with 20-25 turns)
  const scenarios: NormalizedScenario[] = useMemo(() => {
    if (currentDayData?.use?.dialogues && currentDayData.use.dialogues.length > 0) {
      return currentDayData.use.dialogues.map((sc, idx) => ({
        id: sc.id || `sc_${idx}`,
        title: sc.title || `Scenario ${idx + 1}`,
        titleHi: sc.titleHi,
        context: sc.context || sc.situation || `Real-world dialogue scenario ${idx + 1}`,
        situation: sc.situation || 'Conversational interaction',
        location: sc.location || 'Everyday Social Setting',
        grammarFocus: sc.grammarFocus || currentDayData.teach?.grammarRules?.[0]?.title || 'CEFR Spoken Fluency',
        turns: (sc.turns || []).map((t, tIdx) => ({
          id: t.id || `turn_${idx}_${tIdx}`,
          speaker: t.speaker || (tIdx % 2 === 0 ? 'Speaker A' : 'Speaker B'),
          avatar: t.avatar,
          textEn: t.textEn || (t as any).text || '',
          textHi: t.textHi || (t as any).translationsByLang?.hi || '',
          focus: t.focus,
          audioId: (t as any).audioId,
        })),
      }));
    }

    if (currentDayData?.use?.dialogue) {
      const sc = currentDayData.use.dialogue;
      return [
        {
          id: sc.id || 'sc_main',
          title: sc.title || 'Core Real-World Dialogue',
          titleHi: sc.titleHi,
          context: sc.context || sc.situation || 'Conversational Dialogue Practice',
          situation: sc.situation,
          location: 'Social Context',
          grammarFocus: 'Spoken English Communication',
          turns: (sc.turns || []).map((t, tIdx) => ({
            id: t.id || `turn_0_${tIdx}`,
            speaker: t.speaker || (tIdx % 2 === 0 ? 'Speaker A' : 'Speaker B'),
            avatar: t.avatar,
            textEn: t.textEn || (t as any).text || '',
            textHi: t.textHi || (t as any).translationsByLang?.hi || '',
            focus: t.focus,
            audioId: (t as any).audioId,
          })),
        },
      ];
    }

    // Fallback to LESSON_A1_1_1_DATA dialogues
    const fallbackDialogues = LESSON_A1_1_1_DATA.dialogues || [];
    return fallbackDialogues.map((d, idx) => ({
      id: d.id || `dlg_${idx}`,
      title: d.title || `Scenario ${idx + 1}`,
      titleHi: (d as any).titleHi,
      context: d.context || 'Practical English dialogue session',
      situation: 'Everyday Conversation',
      location: 'Social Setting',
      grammarFocus: 'Present BE & Identity',
      turns: (d.lines || []).map((l, lIdx) => ({
        id: l.id || `line_${idx}_${lIdx}`,
        speaker: l.speaker || (lIdx % 2 === 0 ? 'Speaker A' : 'Speaker B'),
        avatar: l.avatar,
        textEn: l.text || '',
        textHi: l.translationsByLang?.[user.nativeLanguage || 'hi'] || l.translationsByLang?.hi || '',
        focus: (l as any).focus,
        audioId: l.audioId,
      })),
    }));
  }, [currentDayData, user.nativeLanguage]);

  const activeScenario = scenarios[selectedScenarioIndex] || scenarios[0];
  const totalTurns = activeScenario?.turns?.length || 0;
  const turnsCount = totalTurns;
  const estimatedMinutes = Math.max(2, Math.round(turnsCount * 0.25));

  // Reset states on scenario or day switch
  useEffect(() => {
    setIsPlayingAll(false);
    setActiveLineIndex(null);
    setRecordedTurnIndex(null);
    setFinishedTurnIndices(new Set());
    setShowCelebration(false);
    setRecordingDone(false);
    setGlobalTranscript('');
    setSpeechNote(null);
    setTurnResult({});
  }, [selectedScenarioIndex, selectedDayNumber]);

  // Stop the recording timer if the learner leaves this screen mid-recording.
  useEffect(() => {
    return () => {
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
      try {
        recognitionRef.current?.abort();
      } catch {
        // Already stopped.
      }
      recognitionRef.current = null;
    };
  }, []);

  // Smooth auto-scroll following playback
  useEffect(() => {
    if (activeLineIndex !== null && bubbleRefs.current[activeLineIndex]) {
      bubbleRefs.current[activeLineIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeLineIndex]);

  // Individual Turn Audio Player
  const handlePlayTurn = async (turn: NormalizedTurn, index: number) => {
    playSoundEffectEffect('tap');
    setActiveLineIndex(index);

    if (turn.audioId) {
      await AudioService.playDialogue(turn.textEn, {
        audioId: turn.audioId,
        lessonId: `day_${selectedDayNumber}`,
        sectionId: 'dialogues',
        dialogueId: activeScenario.id,
      });
    } else {
      await speakCleanAudio(turn.textEn, getActiveEnglishAccent(), playbackSpeed);
    }

    setFinishedTurnIndices((prev) => new Set([...prev, index]));
    setActiveLineIndex(null);
  };

  // Continuous Full Dialogue Player
  const handlePlayAllTurns = async () => {
    if (isPlayingAll) {
      setIsPlayingAll(false);
      setActiveLineIndex(null);
      return;
    }

    playSoundEffectEffect('tap');
    setIsPlayingAll(true);
    setShowCelebration(false);

    for (let i = 0; i < activeScenario.turns.length; i++) {
      const turn = activeScenario.turns[i];

      // Roleplay mode pause for user response
      if (roleplaySpeaker && turn.speaker === roleplaySpeaker) {
        setActiveLineIndex(i);
        await new Promise((res) => setTimeout(res, 2400));
        setFinishedTurnIndices((prev) => new Set([...prev, i]));
        continue;
      }

      // Shadowing mode filtering if specific speaker selected
      if (shadowingMode) {
        const isSpeakerA = i % 2 === 0;
        if (shadowingTarget === 'A' && !isSpeakerA) {
          continue;
        }
        if (shadowingTarget === 'B' && isSpeakerA) {
          continue;
        }
      }

      setActiveLineIndex(i);

      if (turn.audioId) {
        await AudioService.playDialogue(turn.textEn, {
          audioId: turn.audioId,
          lessonId: `day_${selectedDayNumber}`,
          sectionId: 'dialogues',
          dialogueId: activeScenario.id,
        });
      } else {
        await speakCleanAudio(turn.textEn, getActiveEnglishAccent(), playbackSpeed);
      }

      setFinishedTurnIndices((prev) => new Set([...prev, i]));

      // Natural pause between speaker turns
      await new Promise((res) => setTimeout(res, shadowingMode ? 900 : 500));
    }

    setIsPlayingAll(false);
    setActiveLineIndex(null);
    setShowCelebration(true);
    playSoundEffectEffect('victory');
  };

  const stopRecognition = () => {
    try {
      recognitionRef.current?.stop();
    } catch {
      // Already stopped.
    }
  };

  // Starts one browser speech-recognition session. Returns false if it could not start.
  const startListening = (
    continuous: boolean,
    onResult: (transcript: string) => void,
    onEnd: () => void
  ): boolean => {
    const SR = getSpeechRecognitionCtor();
    if (!SR) {
      setSpeechNote('Speech recognition is not available in this browser or app. Try Chrome on a computer or an Android phone.');
      return false;
    }
    const rec = new SR();
    rec.lang = getActiveEnglishAccent();
    rec.continuous = continuous;
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = (event: any) => {
      const transcript = Array.from(event.results as ArrayLike<any>)
        .map((r: any) => r?.[0]?.transcript ?? '')
        .join(' ')
        .trim();
      onResult(transcript);
    };
    rec.onerror = (event: any) => {
      const code = event?.error;
      if (code === 'not-allowed' || code === 'service-not-allowed') {
        setSpeechNote('Microphone permission is blocked. Allow the microphone in your browser or phone settings, then try again.');
      } else if (code === 'no-speech') {
        setSpeechNote('No speech was heard. Try again and speak clearly.');
      } else if (code !== 'aborted') {
        setSpeechNote('Speech could not be captured. Please try again.');
      }
    };
    rec.onend = () => {
      if (recognitionRef.current === rec) recognitionRef.current = null;
      onEnd();
    };
    recognitionRef.current = rec;
    try {
      setSpeechNote(null);
      rec.start();
      return true;
    } catch {
      recognitionRef.current = null;
      setSpeechNote('Speech could not start. Please try again.');
      return false;
    }
  };

  // Per-line practice: listens once and compares the words with this line.
  const handleRecordTurn = (idx: number) => {
    playSoundEffectEffect('tap');
    if (recordedTurnIndex === idx) {
      stopRecognition();
      return;
    }
    stopRecognition();
    const target = activeScenario?.turns[idx]?.textEn ?? '';
    const session = ++sessionRef.current;
    setRecordedTurnIndex(idx);
    const started = startListening(
      false,
      (said) => {
        if (!said || session !== sessionRef.current) return;
        const { matched, total } = scoreWordsInOrder(target, said);
        setTurnResult((prev) => ({ ...prev, [idx]: { matched, total, said } }));
        setFinishedTurnIndices((prev) => new Set([...prev, idx]));
        playSoundEffectEffect('correct');
      },
      () => {
        if (session === sessionRef.current) setRecordedTurnIndex(null);
      }
    );
    if (!started) setRecordedTurnIndex(null);
  };

  // Whole-dialogue practice: shows what was heard. No score is given.
  const handleToggleGlobalRecording = () => {
    playSoundEffectEffect('tap');
    if (isRecordingGlobal) {
      stopRecognition();
      return;
    }
    stopRecognition();
    const session = ++sessionRef.current;
    setRecordingDone(false);
    setGlobalTranscript('');
    setRecordingSeconds(0);
    setIsRecordingGlobal(true);
    recordingTimerRef.current = setInterval(() => {
      setRecordingSeconds((prev) => prev + 1);
    }, 1000);
    const stopTimer = () => {
      clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    };
    const started = startListening(
      true,
      (said) => {
        if (session !== sessionRef.current) return;
        setGlobalTranscript(said);
        setRecordingDone(!!said);
      },
      () => {
        if (session !== sessionRef.current) return;
        stopTimer();
        setIsRecordingGlobal(false);
        playSoundEffectEffect('correct');
      }
    );
    if (!started) {
      stopTimer();
      setIsRecordingGlobal(false);
    }
  };

  // Helper to generate dynamic, consistent avatar style by speaker name/initial
  const getSpeakerAvatarStyle = (speaker: string, isFirst: boolean) => {
    const s = speaker.toLowerCase().trim();
    if (s.startsWith('n') || s.includes('neha') || s.includes('nina')) {
      return {
        gradient: 'from-purple-500 to-pink-500',
        textColor: 'text-purple-700 dark:text-purple-300',
        borderColor: 'border-purple-300 dark:border-purple-500/40',
        bgLight: 'bg-purple-50',
        bgDark: 'dark:bg-purple-950/40',
        initial: speaker.charAt(0).toUpperCase() || 'N',
      };
    }
    if (s.startsWith('t') || s.includes('tanvi') || s.includes('teacher')) {
      return {
        gradient: 'from-emerald-500 to-teal-500',
        textColor: 'text-emerald-700 dark:text-emerald-300',
        borderColor: 'border-emerald-300 dark:border-emerald-500/40',
        bgLight: 'bg-emerald-50',
        bgDark: 'dark:bg-emerald-950/40',
        initial: speaker.charAt(0).toUpperCase() || 'T',
      };
    }
    if (s.startsWith('r') || s.includes('rahul') || s.includes('rohan')) {
      return {
        gradient: 'from-amber-500 to-orange-500',
        textColor: 'text-amber-700 dark:text-amber-300',
        borderColor: 'border-amber-300 dark:border-amber-500/40',
        bgLight: 'bg-amber-50',
        bgDark: 'dark:bg-amber-950/40',
        initial: speaker.charAt(0).toUpperCase() || 'R',
      };
    }
    if (s.includes('doctor') || s.startsWith('d') || s.includes('dr')) {
      return {
        gradient: 'from-rose-500 to-red-600',
        textColor: 'text-rose-700 dark:text-rose-300',
        borderColor: 'border-rose-300 dark:border-rose-500/40',
        bgLight: 'bg-rose-50',
        bgDark: 'dark:bg-rose-950/40',
        initial: 'Dr',
      };
    }
    if (s.includes('librarian') || s.includes('shop') || s.startsWith('c') || s.includes('carlos')) {
      return {
        gradient: 'from-cyan-500 to-sky-600',
        textColor: 'text-cyan-700 dark:text-cyan-300',
        borderColor: 'border-cyan-300 dark:border-cyan-500/40',
        bgLight: 'bg-cyan-50',
        bgDark: 'dark:bg-cyan-950/40',
        initial: speaker.charAt(0).toUpperCase() || 'C',
      };
    }
    if (isFirst) {
      return {
        gradient: 'from-[#335CFF] to-[#6D5DF6]',
        textColor: 'text-indigo-700 dark:text-indigo-300',
        borderColor: 'border-indigo-300 dark:border-indigo-500/40',
        bgLight: 'bg-indigo-50',
        bgDark: 'dark:bg-indigo-950/40',
        initial: speaker.charAt(0).toUpperCase() || 'A',
      };
    }
    return {
      gradient: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      borderColor: 'border-emerald-300 dark:border-emerald-500/40',
      bgLight: 'bg-emerald-50',
      bgDark: 'dark:bg-emerald-950/40',
      initial: speaker.charAt(0).toUpperCase() || 'B',
    };
  };

  // Helper for dynamic scenario icons
  const getScenarioIcon = (title?: string, index = 0) => {
    const t = (title || '').toLowerCase();
    if (t.includes('market') || t.includes('shop') || t.includes('store') || t.includes('grocer')) return '🛒';
    if (t.includes('cafe') || t.includes('coffee') || t.includes('restaurant') || t.includes('dinner') || t.includes('food')) return '☕';
    if (t.includes('office') || t.includes('work') || t.includes('colleague') || t.includes('meeting')) return '💼';
    if (t.includes('airport') || t.includes('travel') || t.includes('flight') || t.includes('hotel') || t.includes('train')) return '🛫';
    if (t.includes('doctor') || t.includes('hospital') || t.includes('clinic') || t.includes('health')) return '🏥';
    if (t.includes('school') || t.includes('university') || t.includes('class') || t.includes('teacher') || t.includes('study')) return '🎓';
    if (t.includes('park') || t.includes('neighborhood') || t.includes('friend') || t.includes('weekend')) return '🌳';
    if (t.includes('online') || t.includes('video') || t.includes('call') || t.includes('phone') || t.includes('tech')) return '💻';
    if (t.includes('home') || t.includes('family') || t.includes('room')) return '🏡';
    const defaultIcons = ['💬', '🎯', '✨', '🗣️', '🌟', '💡', '🔥', '📚', '🤝', '🌈'];
    return defaultIcons[index % defaultIcons.length];
  };

  const progressPercent = totalTurns > 0 ? Math.min(100, Math.round(((activeLineIndex !== null ? activeLineIndex + 1 : finishedTurnIndices.size) / totalTurns) * 100)) : 0;
  const currentTurnDisplay = activeLineIndex !== null ? activeLineIndex + 1 : Math.min(finishedTurnIndices.size, totalTurns);
  const remainingTurns = Math.max(0, totalTurns - currentTurnDisplay);
  const estimatedRemainingMin = (remainingTurns * 0.25).toFixed(1);

  return (
    <div className="flex flex-col space-y-4 p-3 sm:p-5 pb-36 text-slate-900 dark:text-slate-100 max-w-lg mx-auto min-w-0 animate-fade-in font-sans">
      
      {/* PART 2: DUOLINGO-STYLE SCENARIO SELECTOR (Horizontal Snap Scroll) */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between px-1 text-xs font-bold text-slate-500 dark:text-slate-400">
          <span className="flex items-center space-x-1.5 uppercase tracking-wider text-[11px] font-black text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Select Scenario ({scenarios.length} Scenarios Available)</span>
          </span>
          <span className="font-mono text-[11px]">
            {selectedScenarioIndex + 1} / {scenarios.length}
          </span>
        </div>

        <div className="flex items-center space-x-2.5 overflow-x-auto snap-x snap-mandatory scrollbar-none py-1.5 px-0.5">
          {scenarios.map((sc, scIdx) => {
            const isSelected = selectedScenarioIndex === scIdx;
            const icon = getScenarioIcon(sc.title, scIdx);

            return (
              <button
                key={sc.id || `sc_${scIdx}`}
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setSelectedScenarioIndex(scIdx);
                }}
                className={`snap-center px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer border shrink-0 flex items-center space-x-2 btn-press card-lift ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white border-indigo-400/40 shadow-lg shadow-indigo-500/25 scale-[1.03] ring-2 ring-indigo-400/30'
                    : 'bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border-[#D9E4FF] dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/90 shadow-xs'
                }`}
              >
                <span className="text-base">{icon}</span>
                <div className="text-left">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-black">Scenario {scIdx + 1}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {sc.turns.length} Turns
                    </span>
                  </div>
                  {sc.title && (
                    <span
                      className={`text-[10px] block truncate max-w-[130px] sm:max-w-[160px] font-normal ${
                        isSelected ? 'text-white/90' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {sc.title}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN DIALOGUE SURFACE CARD */}
      <div className="bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-sm dark:shadow-2xl space-y-4 relative">
        
        {/* PART 1: PREMIUM STICKY CONVERSATION HEADER */}
        <div className="sticky top-2 z-20 bg-white/95 dark:bg-[#0B1225]/95 backdrop-blur-xl p-4 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 shadow-xl space-y-3.5">
          
          {/* Top Row: Badges & Play CTA */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              <span className="text-[10px] font-black uppercase text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/20 px-2.5 py-1 rounded-xl border border-indigo-200 dark:border-indigo-500/30 flex items-center space-x-1">
                <span>📘</span>
                <span>Scenario {selectedScenarioIndex + 1} of {scenarios.length}</span>
              </span>
              <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 font-mono">
                {turnsCount} Turns
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>~{estimatedMinutes} min</span>
              </span>
            </div>

            {/* Play Conversation CTA */}
            <button
              onClick={handlePlayAllTurns}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition-all duration-200 flex items-center space-x-2 cursor-pointer shrink-0 shadow-md btn-press ${
                isPlayingAll
                  ? 'bg-amber-500 text-slate-950 shadow-amber-500/30 animate-pulse ring-2 ring-amber-400'
                  : 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] hover:brightness-110 text-white shadow-indigo-500/25 border border-indigo-400/30 animate-soft-pulse'
              }`}
              title="Play continuous spoken conversation"
              aria-label="Play Conversation"
            >
              {isPlayingAll ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Playing...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play Conversation</span>
                </>
              )}
            </button>
          </div>

          {/* Second Row: Scenario Title & Subtitle */}
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-display leading-snug">
              {activeScenario.title}
            </h2>
            {activeScenario.titleHi && (
              <p className="text-xs text-amber-700 dark:text-amber-300 font-hindi font-medium">
                {activeScenario.titleHi}
              </p>
            )}
            {activeScenario.context && (
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed pt-0.5">
                {activeScenario.context}
              </p>
            )}
          </div>

          {/* Third Row: Playback Speed Chips (0.75x, 1x, 1.25x) */}
          <div className="flex items-center justify-between pt-2 border-t border-[#E3EDFF] dark:border-slate-800/80 text-xs">
            <div className="flex items-center space-x-1.5">
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 flex items-center space-x-1 mr-1">
                <Gauge className="w-3 h-3" />
                <span>Speed:</span>
              </span>
              {([0.75, 0.92, 1.0, 1.25] as const).map((spd) => {
                const isCurrent = playbackSpeed === spd;
                return (
                  <button
                    key={spd}
                    onClick={() => {
                      playSoundEffectEffect('tap');
                      setPlaybackSpeed(spd);
                    }}
                    className={`px-2.5 py-1 rounded-xl text-[10px] font-bold font-mono transition-all duration-150 cursor-pointer ${
                      isCurrent
                        ? 'bg-indigo-600 text-white font-black shadow-sm shadow-indigo-500/30 ring-1 ring-indigo-400/40 scale-105'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {spd === 0.92 ? '1.0x (Normal)' : `${spd}x`}
                  </button>
                );
              })}
            </div>

            {/* Quick Replay Button */}
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                handlePlayAllTurns();
              }}
              className="p-1.5 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300 rounded-lg transition cursor-pointer"
              title="Restart from beginning"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* PART 12: LUXURY CONTEXT CALLOUT CARD */}
        <div className="bg-gradient-to-br from-indigo-50/80 via-white to-slate-50 dark:from-indigo-950/30 dark:via-slate-900 dark:to-slate-900 border border-indigo-200/80 dark:border-indigo-500/30 rounded-2xl p-3.5 sm:p-4 space-y-2.5 shadow-xs">
          <div className="flex items-start space-x-2.5">
            <span className="text-2xl shrink-0 mt-0.5">
              {getScenarioIcon(activeScenario.title, selectedScenarioIndex)}
            </span>
            <div className="space-y-1 min-w-0 flex-1">
              <span className="text-[10px] uppercase font-black tracking-wider text-indigo-700 dark:text-indigo-300 block">
                Situational Context & Setting
              </span>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                {activeScenario.situation || activeScenario.context || 'Practical English Conversation'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1 border-t border-indigo-100 dark:border-indigo-950/60 text-[10px]">
            <span className="bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 px-2.5 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-500/20 font-bold">
              📍 {activeScenario.location || 'Social Setting'}
            </span>
            <span className="bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded-lg border border-emerald-200 dark:border-emerald-500/20 font-bold">
              👥 2-Speaker Dialogue
            </span>
            {activeScenario.grammarFocus && (
              <span className="bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-300 px-2.5 py-0.5 rounded-lg border border-amber-200 dark:border-amber-500/20 font-bold">
                💡 Focus: {activeScenario.grammarFocus}
              </span>
            )}
          </div>
        </div>

        {/* PART 7: DIALOGUE PROGRESS TRACKER */}
        <div className="bg-slate-50 dark:bg-slate-950/80 border border-[#D9E4FF] dark:border-slate-800/80 rounded-2xl p-3 sm:p-3.5 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-black text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
              <Sparkle className="w-3.5 h-3.5 text-indigo-500" />
              <span>Conversation Progress</span>
            </span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400 font-black">
              Turn {currentTurnDisplay} / {totalTurns} ({progressPercent}%)
            </span>
          </div>

          <div className="w-full bg-slate-200/80 dark:bg-slate-800/90 rounded-full h-2 overflow-hidden p-0.5">
            <div
              className="bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] h-full rounded-full transition-all duration-300 shadow-sm"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-medium">
            <span>{remainingTurns > 0 ? `${remainingTurns} turns remaining` : 'All turns completed!'}</span>
            <span>~{estimatedRemainingMin} min left</span>
          </div>
        </div>

        {/* PART 3, 4, 8, 9, 10, 11: PREMIUM MESSAGE BUBBLE STREAM (iMessage Style) */}
        <div className="space-y-4 pt-1 w-full">
          {activeScenario.turns.map((turn, idx) => {
            const isFirstSpeaker = idx % 2 === 0;
            const isPlaying = activeLineIndex === idx;
            const isFinished = finishedTurnIndices.has(idx);
            const isDimmed = isPlayingAll && activeLineIndex !== null && activeLineIndex < idx;
            const isMutedForRoleplay = roleplaySpeaker !== null && turn.speaker === roleplaySpeaker;
            const isRecorded = recordedTurnIndex === idx;
            const avatarStyle = getSpeakerAvatarStyle(turn.speaker, isFirstSpeaker);

            return (
              <div
                key={turn.id || `turn_${selectedScenarioIndex}_${idx}`}
                ref={(el) => { bubbleRefs.current[idx] = el; }}
                style={{ animationDelay: `${Math.min(idx * 40, 400)}ms` }}
                className={`flex items-start gap-2.5 w-full animate-bubble-enter transition-all duration-200 ${
                  isFirstSpeaker ? 'justify-start' : 'justify-end'
                } ${isDimmed ? 'opacity-70' : 'opacity-100'}`}
              >
                {/* Speaker Avatar Circle (Part 8) */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-xs shrink-0 shadow-sm border transition-all ${
                    avatarStyle.borderColor
                  } ${
                    isFirstSpeaker ? 'order-1' : 'order-2'
                  } ${
                    isPlaying ? 'scale-110 ring-2 ring-indigo-400 animate-soft-pulse' : ''
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${isFirstSpeaker ? '#335CFF, #6D5DF6' : '#10B981, #059669'})`,
                    color: '#FFFFFF',
                  }}
                >
                  {turn.avatar || avatarStyle.initial}
                </div>

                {/* iMessage Rounded Message Bubble */}
                <div
                  className={`p-4 sm:p-4.5 rounded-3xl transition-all shadow-sm space-y-2 border max-w-[88%] sm:max-w-[82%] relative card-lift ${
                    isPlaying
                      ? 'ring-2 ring-indigo-500/80 shadow-indigo-500/25 shadow-lg scale-[1.015] border-indigo-400'
                      : ''
                  } ${
                    isFirstSpeaker
                      ? 'bg-[#EEF2FF] dark:bg-gradient-to-br dark:from-indigo-950/70 dark:via-slate-900 dark:to-slate-900 border-[#D9E4FF] dark:border-indigo-500/30 text-slate-900 dark:text-[#F8FAFC] rounded-tl-sm order-2'
                      : 'bg-[#ECFDF5] dark:bg-gradient-to-br dark:from-emerald-950/60 dark:via-slate-900 dark:to-slate-900 border-[#A7F3D0] dark:border-emerald-500/30 text-slate-900 dark:text-[#F8FAFC] rounded-tr-sm order-1 text-left'
                  }`}
                >
                  {/* Bubble Header: Speaker Name, Turn Badge & Quick Play */}
                  <div className="flex items-center justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-1.5">
                    <div className="flex items-center space-x-2 min-w-0">
                      <span
                        className={`text-xs font-black uppercase tracking-wider truncate ${
                          isFirstSpeaker ? 'text-indigo-700 dark:text-indigo-300' : 'text-emerald-700 dark:text-emerald-300'
                        }`}
                      >
                        {turn.speaker}
                      </span>
                      {turn.focus && (
                        <span className="text-[9px] font-mono bg-white/80 dark:bg-slate-950/90 text-slate-600 dark:text-slate-300 px-1.5 py-0.2 rounded border border-black/5 dark:border-white/10 truncate hidden sm:inline-block">
                          {turn.focus}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-1.5 shrink-0">
                      {isMutedForRoleplay && (
                        <span className="text-[9px] font-bold uppercase bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400 px-2 py-0.5 rounded border border-amber-300 dark:border-amber-500/30">
                          Your Turn
                        </span>
                      )}

                      {isFinished && !isPlaying && (
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center" title="Heard">
                          <CheckCheck className="w-3.5 h-3.5" />
                        </span>
                      )}

                      {/* Turn Speech Record Button */}
                      <button
                        onClick={() => handleRecordTurn(idx)}
                        className={`p-1.5 rounded-xl border transition cursor-pointer ${
                          isRecorded
                            ? 'bg-emerald-500 text-white border-emerald-400 animate-pulse'
                            : 'bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white border-[#D9E4FF] dark:border-slate-700 shadow-xs'
                        }`}
                        title="Record your voice for this line"
                      >
                        <Mic className="w-3.5 h-3.5" />
                      </button>

                      {/* Turn Audio Listen Button */}
                      <button
                        onClick={() => handlePlayTurn(turn, idx)}
                        className={`p-1.5 rounded-xl border transition cursor-pointer flex items-center justify-center ${
                          isPlaying
                            ? 'bg-indigo-600 text-white border-indigo-500 shadow-md animate-pulse'
                            : isFirstSpeaker
                            ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30 hover:bg-indigo-200'
                            : 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30 hover:bg-emerald-200'
                        }`}
                        title={`Listen to ${turn.speaker}`}
                        aria-label={`Listen to ${turn.speaker}`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Main Spoken English Text */}
                  <p
                    className={`text-sm sm:text-base font-bold leading-relaxed break-words ${
                      isPlaying ? 'text-indigo-900 dark:text-white font-extrabold' : 'text-slate-900 dark:text-[#F8FAFC]'
                    }`}
                  >
                    "{turn.textEn}"
                  </p>

                  {/* Hindi Translation Subtitle */}
                  {turn.textHi && (
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-[#CBD5E1] font-hindi leading-relaxed pt-1.5 border-t border-black/5 dark:border-white/10">
                      {turn.textHi}
                    </p>
                  )}

                  {turnResult[idx] && turnResult[idx].total > 0 && (
                    <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 pt-1">
                      {turnResult[idx].matched} of {turnResult[idx].total} words in order. You said: "{turnResult[idx].said}"
                    </div>
                  )}

                  {/* Tiny Bottom Metadata Row */}
                  <div className="flex items-center justify-between text-[9px] text-slate-400 dark:text-slate-500 pt-0.5">
                    <span>Turn {idx + 1} of {turnsCount}</span>
                    <button
                      onClick={() => handlePlayTurn(turn, idx)}
                      className="hover:underline text-indigo-600 dark:text-indigo-400 font-bold"
                    >
                      Tap to replay
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PART 13: CELEBRATION CONVERSATION COMPLETE CARD */}
        {showCelebration && (
          <div className="bg-gradient-to-br from-indigo-950/90 via-slate-900 to-emerald-950/80 border-2 border-indigo-500/50 rounded-3xl p-5 sm:p-6 text-center space-y-4 shadow-2xl animate-fade-in text-white">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#335CFF] to-[#10B981] text-white flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/30 animate-soft-pulse">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                🎉 Conversation Complete! (संवाद सम्पन्न)
              </h3>
              <p className="text-xs sm:text-sm text-indigo-200">
                You completed all {turnsCount} dialogue turns for {activeScenario.title}.
              </p>
            </div>

            {/* Achievement Badges */}
            <div className="grid grid-cols-3 gap-2 py-1">
              <div className="bg-white/10 rounded-2xl p-2.5 border border-white/15">
                <span className="text-[10px] text-slate-300 uppercase block font-bold">XP Earned</span>
                <span className="text-base font-black text-amber-300 font-mono">+50 XP</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-2.5 border border-white/15">
                <span className="text-[10px] text-slate-300 uppercase block font-bold">Turns Finished</span>
                <span className="text-base font-black text-emerald-300 font-mono">{turnsCount}/{turnsCount}</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-2.5 border border-white/15">
                <span className="text-[10px] text-slate-300 uppercase block font-bold">Mastery</span>
                <span className="text-base font-black text-indigo-300 font-mono">100%</span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  handlePlayAllTurns();
                }}
                className="py-3 px-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-2xl transition cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Conversation</span>
              </button>

              {selectedScenarioIndex + 1 < scenarios.length ? (
                <button
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    setSelectedScenarioIndex((prev) => prev + 1);
                  }}
                  className="py-3 px-3 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] hover:brightness-110 text-white text-xs font-black rounded-2xl transition shadow-md shadow-indigo-500/25 border border-indigo-400/30 cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <span>Next Scenario</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    setSelectedScenarioIndex(0);
                  }}
                  className="py-3 px-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-white text-xs font-black rounded-2xl transition shadow-md shadow-emerald-500/25 border border-emerald-400/30 cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <span>Repeat Scenario 1</span>
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* PART 5: SHADOWING PRACTICE CARD */}
        <div className="bg-gradient-to-br from-indigo-50/90 via-slate-50 to-purple-50/50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-purple-950/30 border border-indigo-200 dark:border-indigo-500/30 rounded-3xl p-4 sm:p-5 space-y-3.5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white font-display">
                  Shadowing Practice (छायांकन अभ्यास)
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Listen and repeat in real-time with native cadence and rhythm.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setShadowingMode(!shadowingMode);
              }}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition border cursor-pointer ${
                shadowingMode
                  ? 'bg-purple-600 text-white border-purple-500 shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-[#D9E4FF] dark:border-slate-700'
              }`}
            >
              {shadowingMode ? 'ON' : 'OFF'}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setShadowingMode(true);
                setShadowingTarget('A');
                setRoleplaySpeaker(roleplaySpeaker === 'Speaker A' ? null : 'Speaker A');
              }}
              className={`p-2.5 rounded-2xl text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer border btn-press ${
                shadowingTarget === 'A' && shadowingMode
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                  : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border-[#D9E4FF] dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Repeat Speaker A</span>
            </button>

            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setShadowingMode(true);
                setShadowingTarget('B');
                setRoleplaySpeaker(roleplaySpeaker === 'Speaker B' ? null : 'Speaker B');
              }}
              className={`p-2.5 rounded-2xl text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer border btn-press ${
                shadowingTarget === 'B' && shadowingMode
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                  : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border-[#D9E4FF] dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Repeat Speaker B</span>
            </button>

            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setShadowingMode(true);
                setShadowingTarget('ALL');
                setRoleplaySpeaker(null);
                handlePlayAllTurns();
              }}
              className={`p-2.5 rounded-2xl text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer border btn-press ${
                shadowingTarget === 'ALL' && shadowingMode
                  ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white border-indigo-400 shadow-sm'
                  : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 border-[#D9E4FF] dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Repeat Both</span>
            </button>
          </div>
        </div>

        {/* PART 6: RECORD YOUR VERSION CARD */}
        <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 rounded-3xl p-4 sm:p-5 space-y-4 shadow-xl text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                <Mic className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white font-display">
                  Record Your Spoken Version
                </h4>
                <p className="text-[11px] text-indigo-200 font-hindi">
                  सम्पूर्ण संवाद को खुद बोलकर रिकॉर्ड करें और उच्चारण जांचें
                </p>
              </div>
            </div>

            {isRecordingGlobal && (
              <span className="text-[10px] font-bold font-mono text-rose-400 bg-rose-500/20 px-2.5 py-1 rounded-xl border border-rose-500/30 flex items-center space-x-1.5 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>00:{recordingSeconds.toString().padStart(2, '0')}</span>
              </span>
            )}
          </div>

          {/* Large Recording CTA & Waveform */}
          <div className="flex flex-col items-center justify-center py-3 space-y-3">
            <button
              onClick={handleToggleGlobalRecording}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-200 cursor-pointer shadow-xl ${
                isRecordingGlobal
                  ? 'bg-rose-500 shadow-rose-500/40 ring-4 ring-rose-400/40 animate-pulse'
                  : 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] shadow-indigo-500/30 hover:scale-105 active:scale-95 animate-soft-pulse'
              }`}
              title={isRecordingGlobal ? 'Stop Recording' : 'Start Recording'}
            >
              <Mic className="w-7 h-7" />
            </button>

            <span className="text-xs font-black text-slate-200">
              {isRecordingGlobal
                ? 'Recording in progress... (Tap to finish)'
                : 'Ready to Practice • Tap Microphone to Record'}
            </span>

            {/* Live Waveform Indicator Placeholder */}
            {isRecordingGlobal && (
              <div className="flex items-center space-x-1 h-6 pt-1">
                <div className="w-1 bg-indigo-400 rounded-full animate-waveform-1" />
                <div className="w-1 bg-indigo-400 rounded-full animate-waveform-2" />
                <div className="w-1 bg-indigo-400 rounded-full animate-waveform-3" />
                <div className="w-1 bg-indigo-400 rounded-full animate-waveform-4" />
                <div className="w-1 bg-indigo-400 rounded-full animate-waveform-5" />
                <div className="w-1 bg-indigo-400 rounded-full animate-waveform-2" />
                <div className="w-1 bg-indigo-400 rounded-full animate-waveform-4" />
              </div>
            )}
          </div>

          {/* Pronunciation Evaluation Scores */}
          {speechNote && (
            <p className="text-xs text-amber-300 font-semibold pt-2 border-t border-slate-800">{speechNote}</p>
          )}
          {recordingDone && !isRecordingGlobal && globalTranscript && (
            <div className="space-y-1 pt-2 border-t border-slate-800 animate-fade-in">
              <span className="text-[10px] text-slate-400 font-semibold block">What we heard</span>
              <p className="text-xs text-slate-200">{globalTranscript}</p>
              <p className="text-[10px] text-slate-400">Pronunciation is not scored in this version. Compare with the model audio.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
