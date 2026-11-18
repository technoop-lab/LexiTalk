import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  X,
  Mic,
  Volume2,
  ChevronRight,
  Search,
  Sparkles,
  Layers,
  RotateCcw,
  Gauge,
  Flame,
  Award,
  Clock,
  Activity,
  CheckCircle2,
  Zap,
  Target,
  Play,
  Pause,
  Square,
  Globe,
  Headphones,
  TrendingUp,
  Sliders,
  Check,
  ArrowRight,
  RefreshCw,
  Sparkle,
  Radio,
  BarChart3,
  Calendar
} from 'lucide-react';
import { HindiCourseService } from '../../services/HindiCourseService';
import { speakCleanAudio, speakMinimalPair, playSoundEffectEffect } from '../../utils/audioUtils';

interface HindiSpokenLabModalProps {
  onClose: () => void;
  onSelectDayLesson?: (dayNum: number) => void;
  initialDayNumber?: number;
}

type SpokenLabTab = 'drills' | 'recording' | 'stress' | 'shadowing' | 'accent' | 'analytics';

interface WordStressItem {
  id: string;
  word: string;
  ipa: string;
  meaningHi: string;
  syllables: { text: string; isStressed: boolean; isSecondary?: boolean }[];
  example: string;
  exampleHi: string;
}

const WORD_STRESS_DATABASE: WordStressItem[] = [
  {
    id: 'ws_1',
    word: 'comfortable',
    ipa: '/ˈkʌm.fər.tə.bəl/',
    meaningHi: 'आरामदायक',
    syllables: [
      { text: 'COM', isStressed: true },
      { text: 'for', isStressed: false },
      { text: 'ta', isStressed: false },
      { text: 'ble', isStressed: false },
    ],
    example: 'This ergonomic chair is very comfortable.',
    exampleHi: 'यह एर्गोनोमिक कुर्सी बहुत आरामदायक है।',
  },
  {
    id: 'ws_2',
    word: 'beautiful',
    ipa: '/ˈbjuː.tɪ.fəl/',
    meaningHi: 'सुंदर / मनमोहक',
    syllables: [
      { text: 'BEAU', isStressed: true },
      { text: 'ti', isStressed: false },
      { text: 'ful', isStressed: false },
    ],
    example: 'It is a beautiful morning in Mumbai.',
    exampleHi: 'मुंबई में यह एक बहुत सुंदर सुबह है।',
  },
  {
    id: 'ws_3',
    word: 'tomorrow',
    ipa: '/təˈmɔːr.oʊ/',
    meaningHi: 'कल (आने वाला)',
    syllables: [
      { text: 'to', isStressed: false },
      { text: 'MOR', isStressed: true },
      { text: 'row', isStressed: false },
    ],
    example: 'I will meet you at the office tomorrow.',
    exampleHi: 'मैं कल कार्यालय में आपसे मिलूँगा।',
  },
  {
    id: 'ws_4',
    word: 'photographer',
    ipa: '/fəˈtɑː.ɡrə.fɚ/',
    meaningHi: 'फोटोग्राफर',
    syllables: [
      { text: 'pho', isStressed: false },
      { text: 'TO', isStressed: true },
      { text: 'gra', isStressed: false },
      { text: 'pher', isStressed: false },
    ],
    example: 'The professional photographer took stunning shots.',
    exampleHi: 'पेशेवर फोटोग्राफर ने शानदार तस्वीरें लीं।',
  },
  {
    id: 'ws_5',
    word: 'important',
    ipa: '/ɪmˈpɔːr.tənt/',
    meaningHi: 'महत्वपूर्ण',
    syllables: [
      { text: 'im', isStressed: false },
      { text: 'POR', isStressed: true },
      { text: 'tant', isStressed: false },
    ],
    example: 'Clear communication is important in teamwork.',
    exampleHi: 'टीम वर्क में स्पष्ट संवाद महत्वपूर्ण है।',
  },
  {
    id: 'ws_6',
    word: 'conversation',
    ipa: '/ˌkɑːn.vɚˈseɪ.ʃən/',
    meaningHi: 'बातचीत / वार्तालाप',
    syllables: [
      { text: 'con', isStressed: false, isSecondary: true },
      { text: 'ver', isStressed: false },
      { text: 'SA', isStressed: true },
      { text: 'tion', isStressed: false },
    ],
    example: 'We had an engaging conversation about literature.',
    exampleHi: 'हमारी साहित्य पर एक आकर्षक बातचीत हुई।',
  },
  {
    id: 'ws_7',
    word: 'development',
    ipa: '/dɪˈvel.əp.mənt/',
    meaningHi: 'विकास / प्रगति',
    syllables: [
      { text: 'de', isStressed: false },
      { text: 'VEL', isStressed: true },
      { text: 'op', isStressed: false },
      { text: 'ment', isStressed: false },
    ],
    example: 'Personal development requires continuous practice.',
    exampleHi: 'व्यक्तिगत विकास के लिए निरंतर अभ्यास की आवश्यकता होती है।',
  },
  {
    id: 'ws_8',
    word: 'presentation',
    ipa: '/ˌprez.ənˈteɪ.ʃən/',
    meaningHi: 'प्रस्तुति',
    syllables: [
      { text: 'pre', isStressed: false, isSecondary: true },
      { text: 'zen', isStressed: false },
      { text: 'TAY', isStressed: true },
      { text: 'shun', isStressed: false },
    ],
    example: 'She delivered an inspiring presentation.',
    exampleHi: 'उन्होंने एक प्रेरणादायक प्रस्तुति दी।',
  },
];

const ACCENT_OPTIONS = [
  {
    id: 'en-US',
    name: 'American English',
    flag: '🇺🇸',
    region: 'United States & Canada',
    badge: 'Standard Global',
    description: 'Rhotic pronunciation with prominent flap /t/ (as in "water"), clear retroflex /r/, and relaxed vowel quality.',
    sample: 'Water flows smoothly across the winter valley.',
    sampleHi: 'पानी सर्दियों की घाटी में आसानी से बहता है।',
  },
  {
    id: 'en-IN',
    name: 'Indian English',
    flag: '🇮🇳',
    region: 'India & South Asia',
    badge: 'Regional Standard',
    description: 'Crisp articulation, syllable-timed cadence, distinct retroflex consonants (/ʈ/, /ɖ/), and clear dental plosives.',
    sample: 'Thank you very much for scheduling our project discussion.',
    sampleHi: 'हमारी परियोजना चर्चा निर्धारित करने के लिए बहुत-बहुत धन्यवाद।',
  },
  {
    id: 'en-GB',
    name: 'British English (RP)',
    flag: '🇬🇧',
    region: 'United Kingdom & Commonwealth',
    badge: 'Classical Standard',
    description: 'Non-rhotic rhythm (silent post-vocalic /r/), distinct trap-bath vowel split, and sharp alveolar /t/ release.',
    sample: 'I would rather have a hot cup of tea in the afternoon.',
    sampleHi: 'मैं दोपहर में गर्म चाय पीना अधिक पसंद करूँगा।',
  },
];

const SPEAKING_BADGES = [
  { id: 'sb_1', title: 'Pronunciation practice', desc: 'Pronunciation score tracking is not available.', icon: Target, unlocked: false, xp: 'Not tracked' },
  { id: 'sb_2', title: 'Shadowing practice', desc: 'Completed shadowing rounds are not saved in this release.', icon: Headphones, unlocked: false, xp: 'Not tracked' },
  { id: 'sb_3', title: 'Speaking streak', desc: 'Consecutive spoken practice days are not tracked in this release.', icon: Flame, unlocked: false, xp: 'Not tracked' },
  { id: 'sb_4', title: 'Speaking milestone', desc: 'Speaking-session progress is not tracked in this release.', icon: Zap, unlocked: false, xp: 'Not tracked' },
  { id: 'sb_5', title: 'Conversation practice', desc: 'Dialogue-turn mastery is not tracked in this release.', icon: Award, unlocked: false, xp: 'Not tracked' },
];

export const HindiSpokenLabModal: React.FC<HindiSpokenLabModalProps> = ({
  onClose,
  onSelectDayLesson,
  initialDayNumber
}) => {
  const availableDays = HindiCourseService.getAvailableDaysCount();
  const allDrillDays = HindiCourseService.getAllVoiceAndAccentDrills();
  const stages = HindiCourseService.getStages().filter((stage) => stage.startDay <= availableDays);

  const initialStage = Number.isInteger(initialDayNumber) && initialDayNumber !== undefined && initialDayNumber >= 1 && initialDayNumber <= availableDays
    ? Math.ceil(initialDayNumber / 10)
    : 'all';

  const [activeTab, setActiveTab] = useState<SpokenLabTab>('drills');
  const [selectedStage, setSelectedStage] = useState<number | 'all'>(initialStage);
  const [selectedDayNumber, setSelectedDayNumber] = useState<number | 'all'>(
    Number.isInteger(initialDayNumber) && initialDayNumber !== undefined && initialDayNumber >= 1 && initialDayNumber <= availableDays ? initialDayNumber : 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [isSlowAudio, setIsSlowAudio] = useState(false);

  // Live Recording Studio State
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [activeSpeechTestResult, setActiveSpeechTestResult] = useState<{ recognizedText: string } | null>(null);
  const [speechTestNotice, setSpeechTestNotice] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  const timerIntervalRef = useRef<any>(null);

  // Accent Studio State
  const [selectedAccent, setSelectedAccent] = useState<string>('en-US');

  // Shadowing Mode State
  const [shadowingIndex, setShadowingIndex] = useState(0);
  const [shadowingStep, setShadowingStep] = useState<'listen' | 'record' | 'review'>('listen');
  const [shadowingUserSpoken, setShadowingUserSpoken] = useState<string | null>(null);

  // Daily Speaking Missions
  // Mission progress and rewards are not persisted in this release.

  // Safe handler to close modal and play tap
  const handleSafeClose = useCallback(() => {
    playSoundEffectEffect('tap');
    onClose();
  }, [onClose]);

  // Handle Android back button & Escape key
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.history.pushState({ modal: 'spokenLab' }, '');

    const handlePopState = () => {
      onClose();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSafeClose();
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [handleSafeClose, onClose]);

  // Recording Timer effect
  useEffect(() => {
    if (isRecording && !isPaused) {
      timerIntervalRef.current = setInterval(() => {
        setRecordingSeconds((sec) => sec + 1);
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isRecording, isPaused]);

  const handlePlayAudio = (text: string | undefined | null, rateMultiplier = 1.0, langOverride?: string) => {
    if (!text || !text.trim()) return;
    playSoundEffectEffect('tap');
    const rate = (isSlowAudio ? 0.75 : 0.92) * rateMultiplier;
    const lang = langOverride || selectedAccent;
    speakCleanAudio(text.trim(), lang, rate);
  };

  const handlePlayMinimalPair = (wordA: string, wordB: string) => {
    if (!wordA && !wordB) return;
    playSoundEffectEffect('tap');
    const rate = isSlowAudio ? 0.75 : 0.88;
    speakMinimalPair(wordA, wordB, selectedAccent, rate);
  };

  const handleStartVoiceTest = () => {
    playSoundEffectEffect('tap');
    setIsRecording(true);
    setIsPaused(false);
    setRecordingSeconds(0);
    setActiveSpeechTestResult(null);

    setSpeechTestNotice(null);
    // Browser speech recognition supplies a transcript only; it does not score pronunciation.
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      recognition.lang = selectedAccent;
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setIsRecording(false);
        setIsPaused(false);
        setActiveSpeechTestResult({ recognizedText: transcript });
        setSpeechTestNotice('Transcript received. Pronunciation quality, accent match, fluency, and XP are not scored or saved.');
      };

      recognition.onerror = () => {
        setIsRecording(false);
        setIsPaused(false);
        setSpeechTestNotice('Speech recognition failed or microphone access was denied. No score or XP was generated.');
      };
      recognition.onend = () => setIsRecording(false);

      try {
        recognition.start();
      } catch {
        setIsRecording(false);
        setSpeechTestNotice('Speech recognition could not start. No score or XP was generated.');
      }
    } else {
      setIsRecording(false);
      setSpeechTestNotice('Speech recognition is not supported in this browser. No transcript, score, or XP is available.');
    }
  };

  const handleStopRecording = () => {
    playSoundEffectEffect('tap');
    setIsRecording(false);
    setIsPaused(false);
    recognitionRef.current?.stop?.();
    if (!activeSpeechTestResult) {
      setSpeechTestNotice('Recording stopped before a transcript was received. No score or XP was generated.');
    }
  };

  const handleTogglePause = () => {
    playSoundEffectEffect('tap');
    setIsPaused(!isPaused);
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Shadowing sentence sample from current drills
  const currentShadowingItems = [
    { text: "Thank you for the warm welcome.", hi: "गर्मजोशी से स्वागत के लिए धन्यवाद।", focus: "th voiceless stop" },
    { text: "We will definitely visit the national museum tomorrow.", hi: "हम कल निश्चित रूप से राष्ट्रीय संग्रहालय का दौरा करेंगे।", focus: "v vs w clarity" },
    { text: "Clear pronunciation builds instant professional confidence.", hi: "स्पष्ट उच्चारण तत्काल पेशेवर आत्मविश्वास का निर्माण करता है।", focus: "word stress rhythm" },
    { text: "I thoroughly enjoyed our productive discussion today.", hi: "मुझे आज हमारी सार्थक चर्चा में बहुत आनंद आया।", focus: "th and diphthong" },
    { text: "Could you please clarify this specific requirement?", hi: "क्या आप कृपया इस विशिष्ट आवश्यकता को स्पष्ट कर सकते हैं?", focus: "polite question intonation" },
  ];

  const currentShadowingItem = currentShadowingItems[shadowingIndex % currentShadowingItems.length];

  const handleNextShadowing = () => {
    playSoundEffectEffect('correct');
    setShadowingIndex((idx) => (idx + 1) % currentShadowingItems.length);
    setShadowingStep('listen');
    setShadowingUserSpoken(null);
  };

  const filteredDays = allDrillDays.filter((d) => {
    const stageNum = Math.ceil(d.dayNumber / 10);
    const matchesStage = selectedStage === 'all' || selectedStage === stageNum;
    const matchesDay = selectedDayNumber === 'all' || selectedDayNumber === d.dayNumber;

    if (!matchesStage || !matchesDay) return false;

    if (!searchQuery || !searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase().trim();
    const titleMatch = (d.dayTitle || '').toLowerCase().includes(q);
    const soundsMatch = Array.isArray(d.focusSounds) && d.focusSounds.some((s) => String(s).toLowerCase().includes(q));
    const trapsMatch = (d.traps || '').toLowerCase().includes(q);
    const drillsMatch = Array.isArray(d.drills) && d.drills.some((drill: any) => {
      const text = typeof drill === 'string' ? drill : (drill.text || drill.tip || '');
      return String(text).toLowerCase().includes(q);
    });

    return titleMatch || soundsMatch || trapsMatch || drillsMatch;
  });

  return (
    <div
      id="spoken-lab-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleSafeClose();
        }
      }}
    >
      <div
        id="spoken-lab-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Voice & Accent Spoken English Lab 2.0"
        className="bg-[#F6F8FC] dark:bg-[#050816] border border-[#D9E4FF] dark:border-slate-800 rounded-3xl w-full max-w-4xl h-[95vh] max-h-[940px] flex flex-col shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 relative"
      >
        {/* Modal Header */}
        <div className="p-3.5 sm:p-4 border-b border-[#D9E4FF] dark:border-slate-800 flex items-center justify-between bg-white dark:bg-[#0B1225] shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#335CFF] to-[#6D5DF6] flex items-center justify-center text-white shadow-md shadow-indigo-500/25">
              <Mic className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-display">
                  Spoken English Lab 2.0
                </h3>
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 px-2 py-0.5 rounded-full">
                  Flagship Voice Studio
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-hindi">
                उच्चारण, वाक् प्रवाह, बलाघात (Stress) एवं L1 सुधार प्रयोगशाला
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setIsSlowAudio(!isSlowAudio);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer border shrink-0 ${
                isSlowAudio
                  ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-500/40 font-black'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-[#D9E4FF] dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Toggle slow pace audio"
            >
              <span>🐢 Slow:</span>
              <span className="font-mono">{isSlowAudio ? '0.75x' : '0.92x'}</span>
            </button>

            <button
              id="close-spoken-lab-button"
              onClick={handleSafeClose}
              className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              aria-label="Close Spoken English Lab"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Part 1: Flagship Hero Studio & Apple Fitness Mastery Metrics */}
        <div className="p-4 sm:p-5 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/70 dark:from-[#0B1225] dark:via-[#0F172A] dark:to-[#111A30] border-b border-[#D9E4FF] dark:border-slate-800 shrink-0 space-y-3.5 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Left Hero Brief */}
            <div className="space-y-1.5 max-w-md">
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Browser Speech Recognition Practice</span>
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300">
                  Practice tools; session history is not saved
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-display leading-tight">
                Practice English Speech Rhythm & Word Stress
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-hindi leading-relaxed">
                न्यूनतम युग्म और शब्द-तनाव का अभ्यास करें। ब्राउज़र समर्थन होने पर प्रतिलेख मिलेगा; उच्चारण का स्कोर नहीं दिया जाता।
              </p>
            </div>

            {/* Right: 5 Modular Apple Fitness Concentric Gauges */}
            <div className="grid grid-cols-5 gap-2 w-full lg:w-auto">
              {[
                { label: 'Accuracy', score: null, stroke: '#335CFF', color: 'text-indigo-600 dark:text-indigo-400' },
                { label: 'Fluency', score: null, stroke: '#6D5DF6', color: 'text-purple-600 dark:text-purple-400' },
                { label: 'Stress', score: null, stroke: '#06B6D4', color: 'text-cyan-600 dark:text-cyan-400' },
                { label: 'Confidence', score: null, stroke: '#10B981', color: 'text-emerald-600 dark:text-emerald-400' },
                { label: 'Completion', score: null, stroke: '#F59E0B', color: 'text-amber-600 dark:text-amber-400' },
              ].map((gauge, gIdx) => {
                const radius = 17;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference;

                return (
                  <div
                    key={`gauge_${gIdx}`}
                    className="flex flex-col items-center p-2 rounded-2xl bg-white dark:bg-[#111A30] border border-[#D9E4FF] dark:border-slate-800 shadow-xs hover:border-indigo-300 transition"
                  >
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <svg className="w-10 h-10 -rotate-90">
                        <circle
                          cx="20"
                          cy="20"
                          r={radius}
                          stroke="currentColor"
                          strokeWidth="3.2"
                          fill="transparent"
                          className="text-slate-200 dark:text-slate-800"
                        />
                        <circle
                          cx="20"
                          cy="20"
                          r={radius}
                          stroke={gauge.stroke}
                          strokeWidth="3.2"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          strokeLinecap="round"
                          fill="transparent"
                          className="gauge-ring-circle"
                        />
                      </svg>
                      <span className={`absolute text-[10px] font-black font-mono ${gauge.color}`}>
                        —
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 tracking-tight mt-1 text-center truncate max-w-[52px]">
                      {gauge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="px-3 sm:px-5 py-2.5 border-b border-[#D9E4FF] dark:border-slate-800 bg-white dark:bg-[#0B1225] flex items-center space-x-1.5 overflow-x-auto no-scrollbar shrink-0">
          {[
            { id: 'drills', label: 'Released Voice Drills', icon: Sparkles, hi: 'ध्वनि अभ्यास' },
            { id: 'recording', label: 'Live Recording Studio', icon: Mic, hi: 'लाइव रिकॉर्डिंग' },
            { id: 'stress', label: 'Word Stress Guide', icon: Target, hi: 'बलाघात मार्गदर्शिका' },
            { id: 'shadowing', label: 'Shadowing Mode 2.0', icon: Headphones, hi: 'शैडोइंग' },
            { id: 'accent', label: 'Accent Studio', icon: Globe, hi: 'लहजा चयन' },
            { id: 'analytics', label: 'Tracking Status', icon: BarChart3, hi: 'ट्रैकिंग स्थिति' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setActiveTab(tab.id as SpokenLabTab);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white border-transparent shadow-md shadow-indigo-500/20 font-black'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-[#D9E4FF] dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content Area based on Active Tab */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-4">
          {/* TAB 1: 60-DAY VOICE & ACCENT DRILLS */}
          {activeTab === 'drills' && (
            <div className="space-y-4 animate-fade-in">
              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row gap-2 bg-white dark:bg-[#0B1225] p-3 rounded-2xl border border-[#D9E4FF] dark:border-slate-800">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search sounds, minimal pairs, traps (e.g. /v/ vs /w/, /θ/)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-950 rounded-xl border border-[#D9E4FF] dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Stage Filter Buttons */}
                <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-0.5">
                  <button
                    onClick={() => {
                      playSoundEffectEffect('tap');
                      setSelectedStage('all');
                      setSelectedDayNumber('all');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border cursor-pointer ${
                      selectedStage === 'all' && selectedDayNumber === 'all'
                        ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white border-transparent font-black shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-[#D9E4FF] dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Released days (1–{availableDays})
                  </button>
                  {stages.map((st) => (
                    <button
                      key={`st_${st.stageNumber}`}
                      onClick={() => {
                        playSoundEffectEffect('tap');
                        setSelectedStage(st.stageNumber);
                        setSelectedDayNumber('all');
                      }}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border cursor-pointer ${
                        selectedStage === st.stageNumber
                          ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white border-transparent font-black shadow-xs'
                          : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-[#D9E4FF] dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      Stage {st.stageNumber}
                    </button>
                  ))}
                </div>
              </div>

              {/* Drill Cards */}
              {filteredDays.length === 0 ? (
                <div className="p-10 text-center text-slate-400 space-y-4 max-w-md mx-auto bg-white dark:bg-[#0B1225] rounded-3xl border border-[#D9E4FF] dark:border-slate-800">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                    <Mic className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">No pronunciation drills found</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Try adjusting your search or reset filters to view released days. Days 41–60 are planned and not released.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedStage('all');
                      setSelectedDayNumber('all');
                    }}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-300 rounded-xl text-xs font-bold transition inline-flex items-center space-x-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Filters</span>
                  </button>
                </div>
              ) : (
                filteredDays.map((item) => (
                  <div
                    key={`drill_day_${item.dayNumber}`}
                    className="bg-white dark:bg-[#0B1225] p-4 sm:p-5 rounded-3xl border border-[#D9E4FF] dark:border-slate-800 space-y-3.5 shadow-sm dark:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/40 transition"
                  >
                    {/* Day Header */}
                    <div className="flex items-center justify-between gap-2 border-b border-[#E3EDFF] dark:border-slate-800 pb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-black uppercase text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-1 rounded-lg border border-indigo-200 dark:border-indigo-500/20 font-mono">
                          Day {item.dayNumber}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight font-display">
                          {item.dayTitle}
                        </h4>
                      </div>

                      {onSelectDayLesson && (
                        <button
                          onClick={() => {
                            onClose();
                            onSelectDayLesson(item.dayNumber);
                          }}
                          className="text-xs text-indigo-700 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-200 font-bold flex items-center space-x-0.5 cursor-pointer shrink-0 bg-indigo-50 dark:bg-indigo-500/15 px-2.5 py-1 rounded-lg border border-indigo-200 dark:border-indigo-500/30"
                        >
                          <span>Open Full Lesson</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Target Focus Sounds */}
                    {Array.isArray(item.focusSounds) && item.focusSounds.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Target Sounds:</span>
                        {item.focusSounds.map((snd, sIdx) => (
                          <button
                            key={`fs_${sIdx}`}
                            onClick={() => handlePlayAudio(String(snd))}
                            className="bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-mono text-xs px-2.5 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-500/25 font-bold shadow-xs hover:scale-105 transition cursor-pointer flex items-center space-x-1"
                          >
                            <span>{String(snd)}</span>
                            <Volume2 className="w-3 h-3 text-indigo-500" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* L1 Trap */}
                    {item.traps && (
                      <div className="p-3 bg-amber-50/90 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/30 border-l-4 border-l-amber-500 rounded-2xl space-y-1">
                        <span className="text-[10px] font-black uppercase text-amber-800 dark:text-amber-400 block tracking-wide">
                          ⚠️ L1 Interference Trap (हिन्दी भाषियों की सामान्य त्रुटि):
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 font-hindi leading-relaxed">
                          {item.traps}
                        </p>
                      </div>
                    )}

                    {/* Minimal Pairs */}
                    {Array.isArray(item.minimalPairs) && item.minimalPairs.length > 0 && (
                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 block uppercase tracking-wide">
                          Minimal Pair Contrasts (ध्वनि विभेद):
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.minimalPairs.map((mp: any, mpIdx: number) => {
                            const wordA = typeof mp.wordA === 'object' ? (mp.wordA?.text || mp.wordA?.word) : mp.wordA;
                            const wordB = typeof mp.wordB === 'object' ? (mp.wordB?.text || mp.wordB?.word) : mp.wordB;
                            const ipaA = typeof mp.wordA === 'object' ? mp.wordA?.ipa : (mp.ipaA || mp.ipa1 || '');
                            const ipaB = typeof mp.wordB === 'object' ? mp.wordB?.ipa : (mp.ipaB || mp.ipa2 || '');

                            return (
                              <div
                                key={`mp_${mpIdx}`}
                                className="bg-slate-50 dark:bg-slate-900/90 p-3 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 space-y-2 flex items-center justify-between"
                              >
                                <div className="flex items-center space-x-2">
                                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                                    <span className="text-indigo-600 dark:text-indigo-300">{wordA}</span>
                                    {ipaA && <span className="text-[10px] text-slate-500 font-mono ml-1">{ipaA}</span>}
                                  </div>
                                  <span className="text-slate-400 text-xs font-bold">vs</span>
                                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                                    <span className="text-teal-600 dark:text-teal-300">{wordB}</span>
                                    {ipaB && <span className="text-[10px] text-slate-500 font-mono ml-1">{ipaB}</span>}
                                  </div>
                                </div>

                                <button
                                  onClick={() => handlePlayMinimalPair(wordA, wordB)}
                                  className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 hover:bg-indigo-200 transition cursor-pointer"
                                  title="Play Pair Contrast"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 2: LIVE RECORDING STUDIO */}
          {activeTab === 'recording' && (
            <div className="space-y-5 animate-fade-in max-w-2xl mx-auto">
              <div className="bg-white dark:bg-[#0B1225] border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-xl relative overflow-hidden">
                <div className="space-y-1">
                  <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
                    Studio Live Mic Mode
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
                    Speak & View Transcript
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-hindi">
                    नीचे दिए गए बटन पर टैप करें और स्पष्ट आवाज में अंग्रेजी बोलें।
                  </p>
                </div>

                {/* Target Practice Sentence Prompt */}
                <div className="bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-500/30 p-4 rounded-2xl space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-700 dark:text-indigo-300">
                      Target Speaking Prompt:
                    </span>
                    <button
                      onClick={() => handlePlayAudio("I think thank you very much for this wonderful opportunity.")}
                      className="p-1.5 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 transition cursor-pointer flex items-center space-x-1 text-xs font-bold"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Model Audio</span>
                    </button>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display">
                    "I think thank you very much for this wonderful opportunity."
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-hindi italic">
                    "मुझे लगता है कि इस शानदार अवसर के लिए आपका बहुत-बहुत धन्यवाद।"
                  </p>
                </div>

                {/* Large Floating Microphone with Breathing Glow & Ripple */}
                <div className="py-4 relative flex flex-col items-center justify-center">
                  <button
                    onClick={isRecording ? handleStopRecording : handleStartVoiceTest}
                    className={`relative w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-all cursor-pointer btn-press ${
                      isRecording
                        ? 'bg-rose-500 text-white animate-recording-ripple ring-8 ring-rose-500/30'
                        : 'bg-gradient-to-tr from-[#335CFF] to-[#6D5DF6] text-white animate-mic-glow hover:scale-105 active:scale-95'
                    }`}
                  >
                    <Mic className={`w-10 h-10 ${isRecording ? 'animate-bounce' : ''}`} />
                  </button>

                  {/* Timer & Status */}
                  <div className="mt-4 space-y-1">
                    <div className="flex items-center justify-center space-x-2">
                      <span className={`inline-block w-2.5 h-2.5 rounded-full ${isRecording ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'}`} />
                      <span className="text-sm font-black font-mono text-slate-900 dark:text-white">
                        {isRecording ? formatTimer(recordingSeconds) : 'Ready to record'}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                      {isRecording ? 'Listening for a transcript...' : 'Tap to start recording'}
                    </span>
                  </div>

                  {/* Decorative recording indicator; not an audio waveform. */}
                  {isRecording && (
                    <div className="flex items-center justify-center space-x-1.5 h-10 mt-3" aria-hidden="true">
                      <div className="w-1.5 bg-indigo-500 rounded-full animate-waveform-live-1" />
                      <div className="w-1.5 bg-indigo-500 rounded-full animate-waveform-live-2" />
                      <div className="w-1.5 bg-purple-500 rounded-full animate-waveform-live-3" />
                      <div className="w-1.5 bg-purple-500 rounded-full animate-waveform-live-4" />
                      <div className="w-1.5 bg-emerald-500 rounded-full animate-waveform-live-5" />
                      <div className="w-1.5 bg-emerald-500 rounded-full animate-waveform-live-6" />
                      <div className="w-1.5 bg-indigo-500 rounded-full animate-waveform-live-2" />
                      <div className="w-1.5 bg-purple-500 rounded-full animate-waveform-live-1" />
                    </div>
                  )}
                  {isRecording && <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center">Recording indicator only; no audio waveform is analyzed.</p>}

                  {/* Pause / Resume / Stop Controls */}
                  {isRecording && (
                    <div className="flex items-center space-x-3 mt-4">
                      {/* Speech recognition cannot be paused reliably in this browser. */}
                      <button
                        onClick={handleStopRecording}
                        className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow-md"
                      >
                        <Square className="w-3.5 h-3.5 fill-white" />
                        <span>Stop</span>
                      </button>
                    </div>
                  )}
                </div>

                {speechTestNotice && <p role="status" className="text-xs text-slate-500 dark:text-slate-400">{speechTestNotice}</p>}
                {/* Transcript only; no acoustic quality score is produced. */}
                {activeSpeechTestResult && (
                  <div className="bg-slate-50 dark:bg-[#050816] border border-[#D9E4FF] dark:border-slate-800 p-4 rounded-2xl space-y-3 text-left animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Browser speech-recognition transcript
                      </span>
                      <span className="px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-black rounded-lg">
                        No XP awarded
                      </span>
                    </div>

                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      "{activeSpeechTestResult.recognizedText}"
                    </p>

                    <div className="pt-2 border-t border-[#D9E4FF] dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                      <span>Pronunciation and accent scores are not available from this transcript.</span>
                      <button
                        onClick={() => handlePlayAudio(activeSpeechTestResult.recognizedText)}
                        className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex items-center space-x-1"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Replay Audio</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: WORD STRESS HEATMAP */}
          {activeTab === 'stress' && (
            <div className="space-y-4 animate-fade-in max-w-3xl mx-auto">
              <div className="bg-white dark:bg-[#0B1225] border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E3EDFF] dark:border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-display">
                      Word Stress Guide (शब्द बलाघात)
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-hindi">
                      अंग्रेजी में मुख्य शब्दांश (Primary Stressed Syllable) पर अधिक जोर और लम्बा स्वर दिया जाता है।
                    </p>
                  </div>

                  {/* Heatmap Legend */}
                  <div className="flex items-center space-x-2 text-[10px] font-bold">
                    <span className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded bg-indigo-600 dark:bg-indigo-400 inline-block" />
                      <span className="text-indigo-600 dark:text-indigo-400">Primary Stress</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded bg-cyan-500 inline-block" />
                      <span className="text-cyan-600 dark:text-cyan-400">Secondary</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-700 inline-block" />
                      <span className="text-slate-500">Unstressed</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WORD_STRESS_DATABASE.map((item) => (
                    <div
                      key={item.id}
                      className="bg-slate-50 dark:bg-[#050816] p-4 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 space-y-2.5 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-base font-black text-slate-900 dark:text-white font-display">
                            {item.word}
                          </span>
                          <span className="text-xs text-slate-500 font-mono ml-2">
                            {item.ipa}
                          </span>
                        </div>
                        <button
                          onClick={() => handlePlayAudio(item.word)}
                          className="p-1.5 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 transition cursor-pointer"
                          title="Play this example pronunciation"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Interactive Syllable Blocks */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {item.syllables.map((syl, sIdx) => (
                          <button
                            key={`syl_${sIdx}`}
                            onClick={() => handlePlayAudio(syl.text)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-black transition cursor-pointer active:scale-95 ${
                              syl.isStressed
                                ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white shadow-md shadow-indigo-500/30 scale-105'
                                : syl.isSecondary
                                ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30'
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-[#D9E4FF] dark:border-slate-700'
                            }`}
                            title={syl.isStressed ? 'Primary Stressed Syllable' : 'Unstressed'}
                          >
                            {syl.text}
                          </button>
                        ))}
                      </div>

                      <div className="text-xs space-y-0.5 pt-1 border-t border-[#E3EDFF] dark:border-slate-800">
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          "{item.example}"
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 font-hindi text-[11px]">
                          "{item.exampleHi}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SHADOWING MODE 2.0 */}
          {activeTab === 'shadowing' && (
            <div className="space-y-4 animate-fade-in max-w-2xl mx-auto">
              <div className="bg-white dark:bg-[#0B1225] border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-6 space-y-5 shadow-lg">
                <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-mono">
                      Round {shadowingIndex + 1} of {currentShadowingItems.length}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      Shadowing 2.0
                    </span>
                  </div>

                  <span className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-50 dark:bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-500/20">
                    Focus: {currentShadowingItem.focus}
                  </span>
                </div>

                {/* Model Speaker Sentence */}
                <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-[#050816] dark:to-[#0A1226] border border-[#D9E4FF] dark:border-slate-800 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
                      Example audio (browser speech):
                    </span>
                    <button
                      onClick={() => handlePlayAudio(currentShadowingItem.text)}
                      className="p-2 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white rounded-xl shadow-md hover:scale-105 transition cursor-pointer flex items-center space-x-1.5 text-xs font-bold"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Play Example</span>
                    </button>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display leading-relaxed">
                    "{currentShadowingItem.text}"
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-hindi italic">
                    "{currentShadowingItem.hi}"
                  </p>
                </div>

                {/* Step Actions */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        handleStartVoiceTest();
                        setShadowingStep('record');
                      }}
                      disabled={isRecording}
                      className="flex-1 py-3.5 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-indigo-500/25 transition cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <Mic className="w-4 h-4" />
                      <span>{isRecording ? 'Recording...' : 'Repeat Sentence (दोहराएं)'}</span>
                    </button>

                    <button
                      onClick={handleNextShadowing}
                      className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md transition cursor-pointer flex items-center space-x-1.5"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: ACCENT STUDIO */}
          {activeTab === 'accent' && (
            <div className="space-y-4 animate-fade-in max-w-3xl mx-auto">
              <div className="bg-white dark:bg-[#0B1225] border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4">
                <div className="border-b border-[#E3EDFF] dark:border-slate-800 pb-3">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-display">
                    Global English Accent Studio (लहजा व उच्चारण शैली)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-hindi">
                    विभिन्न अंग्रेजी उच्चारण शैलियों का तुलनात्मक अध्ययन करें एवं अपना पसंदीदा उच्चारण चुनें।
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {ACCENT_OPTIONS.map((acc) => {
                    const isSelected = selectedAccent === acc.id;
                    return (
                      <div
                        key={acc.id}
                        onClick={() => {
                          playSoundEffectEffect('tap');
                          setSelectedAccent(acc.id);
                        }}
                        className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between space-y-3 ${
                          isSelected
                            ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-400 dark:border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                            : 'bg-slate-50 dark:bg-[#050816] border-[#D9E4FF] dark:border-slate-800 hover:border-indigo-300'
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl">{acc.flag}</span>
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-[#D9E4FF] dark:border-slate-700">
                              {acc.badge}
                            </span>
                          </div>

                          <div>
                            <h4 className="text-sm font-black text-slate-900 dark:text-white font-display">
                              {acc.name}
                            </h4>
                            <span className="text-[10px] text-slate-500 block">
                              {acc.region}
                            </span>
                          </div>

                          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                            {acc.description}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-[#E3EDFF] dark:border-slate-800/80">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlayAudio(acc.sample, 1.0, acc.id);
                            }}
                            className="w-full py-2 bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 rounded-xl text-xs font-bold hover:bg-indigo-50 transition cursor-pointer flex items-center justify-center space-x-1.5"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>Play Sample Audio</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: SPEAKING ANALYTICS & BADGES */}
          {activeTab === 'analytics' && (
            <div className="space-y-4 animate-fade-in max-w-3xl mx-auto">
              {/* Daily Speaking Missions */}
              <div className="bg-white dark:bg-[#0B1225] border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-2.5">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-display">
                      Speaking practice ideas (not tracked)
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Tracking unavailable
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'm_1', text: "Say today's focus vocabulary", xp: 'Not tracked', done: false },
                    { id: 'm_2', text: "Repeat today's key target sentence", xp: 'Not tracked', done: false },
                    { id: 'm_3', text: "Shadow 5 conversational dialogue lines", xp: 'Not tracked', done: false },
                    { id: 'm_4', text: "Complete 1 minimal pair audio drill", xp: 'Not tracked', done: false },
                  ].map((mission) => (
                    <div
                      key={mission.id}
                      className={`p-3 rounded-2xl border flex items-center justify-between text-xs ${
                        mission.done
                          ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-500/30 text-emerald-900 dark:text-emerald-200'
                          : 'bg-slate-50 dark:bg-[#050816] border-[#D9E4FF] dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        {mission.done ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-slate-400 shrink-0" />
                        )}
                        <span className="font-semibold">{mission.text}</span>
                      </div>
                      <span className="font-mono font-black text-[10px] text-indigo-600 dark:text-indigo-400 shrink-0">
                        {mission.xp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Master Speaking Badges */}
              <div className="bg-white dark:bg-[#0B1225] border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-3">
                <div className="flex items-center space-x-2 border-b border-[#E3EDFF] dark:border-slate-800 pb-2.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-display">
                    Speaking milestones (not tracked)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {SPEAKING_BADGES.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <div
                        key={badge.id}
                        className={`p-3.5 rounded-2xl border space-y-2 ${
                          badge.unlocked
                            ? 'bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-200 dark:border-indigo-500/30 shadow-xs'
                            : 'bg-slate-50 dark:bg-[#050816] border-[#D9E4FF] dark:border-slate-800 opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className={`p-2 rounded-xl ${badge.unlocked ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 font-mono">
                            {badge.xp}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                            {badge.title}
                          </h4>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                            {badge.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
