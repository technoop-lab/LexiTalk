import React, { useState } from 'react';
import {
  Award,
  Flame,
  Zap,
  BookOpen,
  Target,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  TrendingUp,
  Sparkles,
  RefreshCw,
  Clock,
  Lock,
  Unlock,
  Check,
  Filter,
  Search,
  Mic,
  MessageSquare,
  BarChart3,
  Calendar,
  Layers,
  Star,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  HelpCircle
} from 'lucide-react';
import { UserAcademyProfile, SkillTag, A1MasteryState } from '../../types';
import { ProgressService } from '../../services/ProgressService';
import { HindiCourseProgressService } from '../../services/HindiCourseProgressService';
import { HindiCourseService } from '../../services/HindiCourseService';
import { UNIT_1_KNOWLEDGE_GRAPH } from '../../data/unit1KnowledgeGraph';
import { A1_MASTER_KNOWLEDGE_GRAPH } from '../../data/a1MasterKnowledgeGraph';
import { A1_EXIT_ASSESSMENT_CONFIG } from '../../data/a1ExitAssessmentData';
import { playSoundEffectEffect } from '../../utils/audioUtils';
import { MilestoneTimeline } from '../achievements/MilestoneTimeline';

interface ProgressDetailViewProps {
  user: UserAcademyProfile;
  onLaunchReviewDomain?: (domainId: string) => void;
  onLaunchAssessment?: () => void;
  onSelectDayLesson?: (dayNum: number) => void;
}

interface RadarSkill {
  id: string;
  name: string;
  nameHi: string;
  score?: number;
  color: string;
  badge: string;
  strength: string;
  focus: string;
}

export const ProgressDetailView: React.FC<ProgressDetailViewProps> = ({
  user,
  onLaunchReviewDomain,
  onLaunchAssessment,
  onSelectDayLesson,
}) => {
  const [mainTab, setMainTab] = useState<'INTELLIGENCE' | 'KNOWLEDGE_GRAPH' | 'UNIT_1'>('INTELLIGENCE');
  const [selectedKgConcept, setSelectedKgConcept] = useState<string | null>(null);
  const [kgUnitFilter, setKgUnitFilter] = useState<string>('ALL');
  const [kgSearch, setKgSearch] = useState<string>('');
  const [selectedRadarSkill, setSelectedRadarSkill] = useState<RadarSkill | null>(null);
  const [selectedHeatmapDay, setSelectedHeatmapDay] = useState<number | null>(null);

  const a1Mastery = ProgressService.calculateA1Mastery(user);
  const unit1Mastery = ProgressService.calculateUnit1Mastery(user);
  const isA1ExitUnlocked = ProgressService.isA1ExitAssessmentUnlocked(user);
  const isA2Unlocked = ProgressService.isA2Unlocked(user);

  const hindiProg = HindiCourseProgressService.getProgress(user?.id);
  const totalDays = HindiCourseService.getAvailableDaysCount();
  const finishedDayNumbers = Array.from(new Set((hindiProg.completedDays || []).filter((dayNum) => Number.isInteger(dayNum) && dayNum >= 1 && dayNum <= totalDays)));
  const completedDaysCount = finishedDayNumbers.length;
  const overallPercentage = totalDays > 0 ? Math.min(100, Math.round((completedDaysCount / totalDays) * 100)) : 0;
  // Real totals from the days actually finished. No floors, no estimates.
  const dialogueTurns = HindiCourseService.countTurnsInDays(finishedDayNumbers);
  const grammarRules = HindiCourseService.countGrammarRulesInDays(finishedDayNumbers);
  const attemptList = Object.values(hindiProg.exerciseAttempts || {}) as any[];
  const attemptCorrect = attemptList.filter((a) => a && a.correct).length;
  const accuracyPct = attemptList.length > 0 ? Math.round((attemptCorrect / attemptList.length) * 100) : 0;
  const xpEarned = hindiProg.totalXpEarned || 0;
  const pctOf = (value: number, total: number) => (total > 0 ? Math.min(100, Math.round((value / total) * 100)) : 0);
  const wordsLearned = HindiCourseService.countWordsInDays(finishedDayNumbers);
  const releasedDayNumbers = Array.from({ length: totalDays }, (_, i) => i + 1);
  const totalReleasedWords = HindiCourseService.countWordsInDays(releasedDayNumbers);
  const totalReleasedDialogueTurns = HindiCourseService.countTurnsInDays(releasedDayNumbers);
  const totalReleasedGrammarRules = HindiCourseService.countGrammarRulesInDays(releasedDayNumbers);
  const totalXp = user.totalXp || 0;
  const currentDayNum = releasedDayNumbers.find((dayNum) => !finishedDayNumbers.includes(dayNum)) || totalDays + 1;

  const latestSkillAssessment = (user.a1AssessmentHistory || [])
    .filter((attempt) => Boolean(attempt.skillBreakdown && Object.keys(attempt.skillBreakdown).length > 0))
    .sort((a, b) => new Date(b.attemptedAt).getTime() - new Date(a.attemptedAt).getTime())[0];
  // Only explicit, scored items from the latest saved A1 assessment appear here.
  const getAssessmentSkillScore = (skill: SkillTag): number | undefined => {
    const result = latestSkillAssessment?.skillBreakdown?.[skill];
    if (!result || result.total <= 0 || !Number.isFinite(result.percent)) return undefined;
    return Math.max(0, Math.min(100, result.percent));
  };
  const skillScoresMap: Partial<Record<SkillTag, number>> = {
    vocabulary: getAssessmentSkillScore('vocabulary'),
    grammar: getAssessmentSkillScore('grammar'),
    speaking: getAssessmentSkillScore('speaking'),
    listening: getAssessmentSkillScore('listening'),
    reading: getAssessmentSkillScore('reading'),
    writing: getAssessmentSkillScore('writing'),
  };

  const radarSkills: RadarSkill[] = [
    {
      id: 'vocabulary',
      name: 'Vocabulary',
      nameHi: 'शब्दावली भंडार',
      score: skillScoresMap.vocabulary,
      color: '#06B6D4',
      badge: '📘 Words',
      strength: skillScoresMap.vocabulary !== undefined ? 'Latest saved in-app assessment result.' : 'No vocabulary-specific assessment result is recorded yet.',
      focus: 'Practice multi-word chunks and idiomatic verb collocations.',
    },
    {
      id: 'grammar',
      name: 'Grammar',
      nameHi: 'व्याकरण नियम',
      score: skillScoresMap.grammar,
      color: '#8B5CF6',
      badge: '📐 Rules',
      strength: skillScoresMap.grammar !== undefined ? 'Latest saved in-app assessment result.' : 'No grammar-specific assessment result is recorded yet.',
      focus: 'Pay attention to Hindi-to-English word order differences (SOV vs SVO).',
    },
    {
      id: 'speaking',
      name: 'Speaking',
      nameHi: 'मौखिक उच्चारण व प्रवाह',
      score: skillScoresMap.speaking,
      color: '#10B981',
      badge: '🎙️ Voice',
      strength: skillScoresMap.speaking !== undefined ? 'Latest saved in-app assessment result.' : 'No speaking-specific assessment result is recorded yet.',
      focus: 'Work on native intonation rise/fall in question forms.',
    },
    {
      id: 'listening',
      name: 'Listening',
      nameHi: 'श्रवण समझ',
      score: skillScoresMap.listening,
      color: '#F59E0B',
      badge: '🎧 Audio',
      strength: skillScoresMap.listening !== undefined ? 'Latest saved in-app assessment result.' : 'No listening-specific assessment result is recorded yet.',
      focus: 'Practice hearing fast contractions (gonna, wanna, didn’t).',
    },
    {
      id: 'reading',
      name: 'Reading',
      nameHi: 'पठन दक्षता',
      score: skillScoresMap.reading,
      color: '#335CFF',
      badge: '📖 Reading',
      strength: skillScoresMap.reading !== undefined ? 'Latest saved in-app assessment result.' : 'No reading-specific assessment result is recorded yet.',
      focus: 'Read longer contextual workplace scenarios without pause.',
    },
    {
      id: 'writing',
      name: 'Writing',
      nameHi: 'लेखन व वाक्य संरचना',
      score: skillScoresMap.writing,
      color: '#EC4899',
      badge: '✍️ Syntax',
      strength: skillScoresMap.writing !== undefined ? 'Latest saved in-app assessment result.' : 'No writing-specific assessment result is recorded yet.',
      focus: 'Drill third-person singular (-s/-es) consistency in written answers.',
    },
  ];

  // Radar Polygon Points Calculation
  const radarRadius = 88;
  const radarCenter = 120;
  const polygonPoints = radarSkills
    .map((skill, index) => {
      const angle = (Math.PI / 3) * index - Math.PI / 2;
      const normalizedScore = skill.score !== undefined ? Math.max(0, Math.min(100, skill.score)) / 100 : 0;
      const r = radarRadius * normalizedScore;
      const x = radarCenter + r * Math.cos(angle);
      const y = radarCenter + r * Math.sin(angle);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  // 6 Stage Mastery Data
  const stagesData = [
    {
      num: 1,
      titleEn: 'Absolute Foundations & Daily Routine',
      titleHi: 'स्टेज 1: बुनियादी अंग्रेजी एवं दिनचर्या',
      daysSpan: 'Days 1–10',
      startDay: 1,
      endDay: 10,
    },
    {
      num: 2,
      titleEn: 'Functional Interactions & Tense Practice',
      titleHi: 'स्टेज 2: व्यावहारिक संवाद व काल ज्ञान',
      daysSpan: 'Days 11–20',
      startDay: 11,
      endDay: 20,
    },
    {
      num: 3,
      titleEn: 'Conversational Narratives & Past Actions',
      titleHi: 'स्टेज 3: भूतकाल की कहानियां व संवाद',
      daysSpan: 'Days 21–30',
      startDay: 21,
      endDay: 30,
    },
    {
      num: 4,
      titleEn: 'Future Plans & Social Expressions',
      titleHi: 'स्टेज 4: उन्नत शिष्टाचार व अभिव्यक्ति',
      daysSpan: 'Days 31–40',
      startDay: 31,
      endDay: 40,
    },
    {
      num: 5,
      titleEn: 'Days 41–50: Planned Content',
      titleHi: 'स्टेज 5: कार्यक्षेत्र, यात्रा व वार्ता',
      daysSpan: 'Days 41–50',
      startDay: 41,
      endDay: 50,
    },
    {
      num: 6,
      titleEn: 'Days 51–60: Planned Content',
      titleHi: 'स्टेज 6: अंतिम दक्षता व स्वतंत्र संवाद',
      daysSpan: 'Days 51–60',
      startDay: 51,
      endDay: 60,
    },
  ];

  // Calculate Stage Completion
  const getStageStats = (stage: (typeof stagesData)[0]) => {
    let completedInStage = 0;
    for (let d = stage.startDay; d <= stage.endDay; d++) {
      if (hindiProg.completedDays.includes(d)) {
        completedInStage++;
      }
    }
    const percent = Math.round((completedInStage / 10) * 100);
    const isReleased = stage.startDay <= totalDays;
    const isUnlocked = isReleased && (completedDaysCount >= stage.startDay - 1 || stage.startDay === 1);
    const isCompleted = isReleased && stage.endDay <= totalDays && completedInStage === 10;
    const releasedEndDay = Math.min(stage.endDay, totalDays);
    const stageDays = Array.from({ length: Math.max(0, releasedEndDay - stage.startDay + 1) }, (_, index) => stage.startDay + index);
    const curriculumVocabItems = HindiCourseService.countWordsInDays(stageDays);
    const curriculumDialogueTurns = HindiCourseService.countTurnsInDays(stageDays);
    const curriculumGrammarRules = HindiCourseService.countGrammarRulesInDays(stageDays);
    return { completedInStage, percent, isUnlocked, isCompleted, isReleased, curriculumVocabItems, curriculumDialogueTurns, curriculumGrammarRules };
  };

  // Apple Fitness Ring calculation
  const ringRadius = 46;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringStrokeOffset = ringCircumference - (overallPercentage / 100) * ringCircumference;

  // Filter A1 knowledge graph
  const filteredA1Kg = A1_MASTER_KNOWLEDGE_GRAPH.filter((kg) => {
    const matchesSearch =
      kg.title.toLowerCase().includes(kgSearch.toLowerCase()) ||
      kg.coreRuleSummary.toLowerCase().includes(kgSearch.toLowerCase()) ||
      (kg.keyFormula && kg.keyFormula.toLowerCase().includes(kgSearch.toLowerCase()));

    if (!matchesSearch) return false;
    if (kgUnitFilter === 'ALL') return true;
    return kg.unitId === kgUnitFilter;
  });

  return (
    <div className="flex flex-col space-y-5 p-3 sm:p-5 pb-32 text-slate-900 dark:text-slate-100 max-w-xl mx-auto min-w-0">
      
      {/* Top Segmented Navigation Tabs */}
      <div className="flex bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 p-1.5 rounded-2xl shadow-xs text-xs">
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            setMainTab('INTELLIGENCE');
          }}
          className={`flex-1 py-2 px-2 font-black rounded-xl transition cursor-pointer btn-press flex items-center justify-center space-x-1.5 ${
            mainTab === 'INTELLIGENCE'
              ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Progress Intelligence</span>
        </button>

        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            setMainTab('KNOWLEDGE_GRAPH');
          }}
          className={`flex-1 py-2 px-2 font-black rounded-xl transition cursor-pointer btn-press flex items-center justify-center space-x-1.5 ${
            mainTab === 'KNOWLEDGE_GRAPH'
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>A1 Course Matrix</span>
        </button>
      </div>

      {mainTab === 'INTELLIGENCE' ? (
        <>
          {/* ========================================================================= */}
          {/* PART 1 — ENGLISH PROGRESS HERO                                            */}
          {/* ========================================================================= */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2E54FF] via-[#4361EE] to-[#6E44FF] p-5 sm:p-6 text-white shadow-xl shadow-indigo-500/25 border border-white/20 space-y-4">
            {/* Ambient Background Glows */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-8 w-56 h-56 bg-indigo-950/60 rounded-full blur-3xl pointer-events-none" />

            {/* Header Title */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-2">
                <span className="text-xl">📊</span>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-white font-display">
                    English Progress Intelligence
                  </h2>
                  <p className="text-[11px] text-indigo-100 font-medium">
                    Released course progress and saved activity
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-mono">
                Released course path: {user.currentCEFR === 'A2' && isA2Unlocked ? 'A2' : 'A1'}
              </span>
            </div>

            {/* Apple Fitness Large Ring & Core Numbers */}
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 relative z-10">
              <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 110 110">
                  <circle
                    cx="55"
                    cy="55"
                    r={ringRadius}
                    className="stroke-white/20"
                    strokeWidth="9"
                    fill="transparent"
                  />
                  <circle
                    cx="55"
                    cy="55"
                    r={ringRadius}
                    className="stroke-emerald-300 transition-all duration-1000 ease-out"
                    strokeWidth="9"
                    strokeDasharray={ringCircumference}
                    strokeDashoffset={ringStrokeOffset}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-xl font-black text-white font-display leading-none">
                    {overallPercentage}%
                  </span>
                  <span className="text-[9px] uppercase font-black text-emerald-300 tracking-wider mt-0.5">
                    Released path completion
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-indigo-100 font-bold">Curriculum Day:</span>
                  <strong className="text-white font-mono text-sm">{currentDayNum <= totalDays ? `Day ${currentDayNum} of ${totalDays} released` : `All ${totalDays} released days complete`}</strong>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-indigo-100 font-bold">Total XP:</span>
                  <strong className="text-amber-300 font-mono text-sm">{totalXp} XP</strong>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-indigo-100 font-bold">Vocabulary items in completed days:</span>
                  <strong className="text-cyan-300 font-mono text-sm">{wordsLearned} items</strong>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-indigo-100 font-bold">Lesson dialogue turns:</span>
                  <strong className="text-emerald-300 font-mono text-sm">{dialogueTurns} Turns</strong>
                </div>
              </div>
            </div>

            {/* Micro 4-Stat Pills */}
            <div className="grid grid-cols-4 gap-2 pt-1 relative z-10 text-center text-xs">
              <div className="p-2 rounded-xl bg-black/20 border border-white/10">
                <span className="text-[9px] text-indigo-200 block uppercase font-bold">Streak</span>
                <strong className="text-amber-300 font-mono text-sm">{hindiProg.streakDays || 0}d 🔥</strong>
              </div>
              <div className="p-2 rounded-xl bg-black/20 border border-white/10">
                <span className="text-[9px] text-indigo-200 block uppercase font-bold">Completed</span>
                <strong className="text-emerald-300 font-mono text-sm">{completedDaysCount}/{totalDays}</strong>
              </div>
              <div className="p-2 rounded-xl bg-black/20 border border-white/10">
                <span className="text-[9px] text-indigo-200 block uppercase font-bold">Speaking</span>
                <strong className="text-cyan-300 font-mono text-sm">{skillScoresMap.speaking !== undefined ? `${skillScoresMap.speaking}%` : 'Not assessed'}</strong>
              </div>
              <div className="p-2 rounded-xl bg-black/20 border border-white/10">
                <span className="text-[9px] text-indigo-200 block uppercase font-bold">Stage</span>
                <strong className="text-purple-200 font-mono text-sm">
                  {currentDayNum <= totalDays ? `S${Math.min(4, Math.max(1, Math.ceil(currentDayNum / 10)))}` : 'Plan complete'}
                </strong>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PART 2 — SAVED A1 ASSESSMENT ITEM SCORES                                  */}
          {/* ========================================================================= */}
          <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase text-indigo-700 dark:text-indigo-300 tracking-wider font-display">
                    A1 Assessment Item Scores
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Percentages reflect correct items tagged to each area; speaking-tag items use transcript text matching, not acoustic pronunciation scoring or CEFR certification.
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg">
                Tap a skill for details
              </span>
            </div>

            {/* Radar Visualizer */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-2">
              <div className="relative w-60 h-60 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 240 240">
                  {/* Concentric Hexagons */}
                  {[0.25, 0.5, 0.75, 1].map((scale, i) => {
                    const r = radarRadius * scale;
                    const hexPoints = Array.from({ length: 6 }, (_, idx) => {
                      const angle = (Math.PI / 3) * idx - Math.PI / 2;
                      const x = radarCenter + r * Math.cos(angle);
                      const y = radarCenter + r * Math.sin(angle);
                      return `${x.toFixed(1)},${y.toFixed(1)}`;
                    }).join(' ');

                    return (
                      <polygon
                        key={i}
                        points={hexPoints}
                        fill="transparent"
                        stroke="currentColor"
                        className="text-slate-200 dark:text-slate-800"
                        strokeWidth="1"
                        strokeDasharray={scale < 1 ? '2 2' : 'none'}
                      />
                    );
                  })}

                  {/* Radial Axis Lines */}
                  {Array.from({ length: 6 }, (_, idx) => {
                    const angle = (Math.PI / 3) * idx - Math.PI / 2;
                    const x = radarCenter + radarRadius * Math.cos(angle);
                    const y = radarCenter + radarRadius * Math.sin(angle);
                    return (
                      <line
                        key={idx}
                        x1={radarCenter}
                        y1={radarCenter}
                        x2={x}
                        y2={y}
                        stroke="currentColor"
                        className="text-slate-200 dark:text-slate-800"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Do not plot missing domains as zero scores. */}
                  {radarSkills.every((skill) => skill.score !== undefined) && (
                    <polygon
                      points={polygonPoints}
                      className="fill-indigo-500/25 stroke-indigo-500 dark:stroke-indigo-400 animate-radar-pulse"
                      strokeWidth="2.5"
                    />
                  )}

                  {/* Points on radar */}
                  {radarSkills.map((skill, index) => {
                    if (skill.score === undefined) return null;
                    const angle = (Math.PI / 3) * index - Math.PI / 2;
                    const normalizedScore = skill.score !== undefined ? Math.max(0, Math.min(100, skill.score)) / 100 : 0;
                    const r = radarRadius * normalizedScore;
                    const x = radarCenter + r * Math.cos(angle);
                    const y = radarCenter + r * Math.sin(angle);

                    return (
                      <circle
                        key={skill.id}
                        cx={x}
                        cy={y}
                        r="4.5"
                        fill={skill.color}
                        className="stroke-white dark:stroke-slate-900 cursor-pointer hover:scale-125 transition-transform"
                        strokeWidth="2"
                        onClick={() => {
                          playSoundEffectEffect('tap');
                          setSelectedRadarSkill(skill);
                        }}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Skill Domain Chips Grid */}
              <div className="grid grid-cols-2 gap-2 flex-1 w-full text-xs">
                {radarSkills.map((skill) => {
                  const isSelected = selectedRadarSkill?.id === skill.id;
                  return (
                    <button
                      key={skill.id}
                      onClick={() => {
                        playSoundEffectEffect('tap');
                        setSelectedRadarSkill(isSelected ? null : skill);
                      }}
                      className={`p-2.5 rounded-2xl border text-left transition cursor-pointer btn-press ${
                        isSelected
                          ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-400 dark:border-indigo-500/50 shadow-xs'
                          : 'bg-slate-50 dark:bg-slate-950/60 border-[#D9E4FF] dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 dark:text-white text-[11px]">
                          {skill.name}
                        </span>
                        <strong className="font-mono text-indigo-600 dark:text-indigo-400">
                          {skill.score !== undefined ? `${skill.score}%` : 'Not assessed'}
                        </strong>
                      </div>
                      <span className="text-[10px] text-amber-700 dark:text-amber-300 font-hindi block mt-0.5">
                        {skill.nameHi}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Radar Skill Insight Flyout */}
            {selectedRadarSkill && (
              <div className="p-3.5 bg-gradient-to-r from-indigo-50/70 via-purple-50/40 to-slate-50 dark:from-indigo-950/50 dark:via-purple-950/30 dark:to-slate-950 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 space-y-2 animate-fade-in text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-black text-slate-900 dark:text-white">
                      {selectedRadarSkill.name} {selectedRadarSkill.score !== undefined ? `assessment score ${selectedRadarSkill.score}%` : 'not assessed'}
                    </span>
                    <span className="text-[10px] font-hindi text-amber-600 dark:text-amber-400 font-bold">
                      {selectedRadarSkill.nameHi}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedRadarSkill(null)}
                    className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-[11px] font-bold"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-1 text-[11px]">
                  <p className="text-emerald-700 dark:text-emerald-300">
                    <strong>Assessment evidence:</strong> {selectedRadarSkill.strength}
                  </p>
                  <p className="text-indigo-700 dark:text-indigo-300">
                    <strong>Optional practice idea:</strong> {selectedRadarSkill.focus}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* PART 3 — WEEKLY GROWTH DASHBOARD                                          */}
          {/* ========================================================================= */}
          <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase text-emerald-700 dark:text-emerald-300 tracking-wider font-display">
                    Recorded Course Activity Totals
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Totals derived from saved course activity; no weekly comparison is stored.
                  </p>
                </div>
              </div>

              <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 flex items-center space-x-1 font-mono">
                <ArrowUpRight className="w-3 h-3" />
                <span>Cumulative records</span>
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {/* Card 1: Weekly XP */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-[#D9E4FF] dark:border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">
                  Hindi Course XP Earned (Total)
                </span>
                <span className="text-lg font-black text-slate-900 dark:text-white font-mono block">
                  {xpEarned} XP
                </span>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${pctOf(completedDaysCount, totalDays)}%` }} />
                </div>
                <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold block">
                  {completedDaysCount > 0 ? `Across ${completedDaysCount} completed days` : 'No XP earned yet'}
                </span>
              </div>

              {/* Card 2: Words Mastered */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-[#D9E4FF] dark:border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">
                  Vocabulary in completed days
                </span>
                <span className="text-lg font-black text-cyan-600 dark:text-cyan-400 font-mono block">
                  {wordsLearned} words
                </span>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${pctOf(wordsLearned, totalReleasedWords)}%` }} />
                </div>
                <span className="text-[9px] text-cyan-600 dark:text-cyan-400 font-bold block">
                  of {totalReleasedWords} authored words in released days
                </span>
              </div>

              {/* Card 3: Speaking Minutes */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-[#D9E4FF] dark:border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">
                  Dialogue Turns
                </span>
                <span className="text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono block">
                  {dialogueTurns}
                </span>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${pctOf(dialogueTurns, totalReleasedDialogueTurns)}%` }} />
                </div>
                <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold block">
                  {dialogueTurns > 0 ? 'From completed lessons' : 'No dialogue turns in completed lessons yet'}
                </span>
              </div>

              {/* Card 4: Rules Mastered */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-[#D9E4FF] dark:border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">
                  Grammar Rules
                </span>
                <span className="text-lg font-black text-purple-600 dark:text-purple-400 font-mono block">
                  {grammarRules} Rules
                </span>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${pctOf(grammarRules, totalReleasedGrammarRules)}%` }} />
                </div>
                <span className="text-[9px] text-purple-600 dark:text-purple-400 font-bold block">
                  {grammarRules > 0 ? 'From completed lessons' : 'No rules in completed lessons yet'}
                </span>
              </div>

              {/* Card 5: Dialogues */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-[#D9E4FF] dark:border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">
                  Released course days completed
                </span>
                <span className="text-lg font-black text-indigo-600 dark:text-indigo-400 font-mono block">
                  {completedDaysCount} days
                </span>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${pctOf(completedDaysCount, totalDays)}%` }} />
                </div>
                <span className="text-[9px] text-indigo-600 dark:text-indigo-400 font-bold block">
                  {completedDaysCount > 0 ? 'Days completed' : 'Nothing yet'}
                </span>
              </div>

              {/* Card 6: Review Accuracy */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-[#D9E4FF] dark:border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">
                  Latest saved answer rate
                </span>
                <span className="text-lg font-black text-amber-600 dark:text-amber-400 font-mono block">
                  {attemptList.length > 0 ? `${accuracyPct}%` : 'Not measured'}
                </span>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${accuracyPct}%` }} />
                </div>
                <span className="text-[9px] text-amber-600 dark:text-amber-400 font-bold block">
                  {attemptList.length > 0 ? `${attemptCorrect}/${attemptList.length} latest saved exercise responses correct` : 'No exercise responses recorded yet'}
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PART 4 — LEARNING HEATMAP (GitHub-style 60-Day Grid)                      */}
          {/* ========================================================================= */}
          <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-3 flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase text-indigo-700 dark:text-indigo-300 tracking-wider font-display">
                    Released Course Progress Map
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Completed days and saved scores across the full 60-day path.
                  </p>
                </div>
              </div>

              {/* Heatmap Legend */}
              <div className="flex items-center space-x-1.5 text-[9px] text-slate-500 dark:text-slate-400 font-bold">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-xs bg-slate-200 dark:bg-slate-800" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-300 dark:bg-emerald-800" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500" />
                <span className="w-2.5 h-2.5 rounded-xs bg-amber-400" />
                <span>Active</span>
              </div>
            </div>

            {/* 60-Day Grid: 6 rows of 10 days */}
            <div className="space-y-2">
              {Array.from({ length: 6 }, (_, stageIdx) => {
                const stageNum = stageIdx + 1;
                return (
                  <div key={stageNum} className="space-y-1">
                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 dark:text-slate-400 px-1">
                      <span>Stage {stageNum}</span>
                      <span>Days {(stageIdx * 10) + 1}–{(stageIdx + 1) * 10}</span>
                    </div>

                    <div className="grid grid-cols-10 gap-1.5">
                      {Array.from({ length: 10 }, (_, dayOffset) => {
                        const dayNum = stageIdx * 10 + dayOffset + 1;
                        const isCompleted = hindiProg.completedDays.includes(dayNum);
                        const isCurrent = dayNum === currentDayNum && dayNum <= HindiCourseService.getAvailableDaysCount();
                        const score = hindiProg.dayScores[dayNum];

                        let bgClass = 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-transparent';
                        if (isCompleted && score !== undefined) {
                          if (score >= 90) {
                            bgClass = 'bg-emerald-500 text-slate-950 font-black border-emerald-400 shadow-xs';
                          } else {
                            bgClass = 'bg-emerald-400/80 dark:bg-emerald-600 text-white font-bold border-emerald-500';
                          }
                        } else if (isCompleted) {
                          bgClass = 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
                        } else if (isCurrent) {
                          bgClass = 'bg-amber-400 dark:bg-amber-500 text-slate-950 font-black border-amber-300 ring-2 ring-amber-400/40 animate-heatmap-glow';
                        }

                        return (
                          <button
                            key={dayNum}
                            disabled={dayNum > totalDays}
                            onClick={() => {
                              if (dayNum > totalDays) return;
                              playSoundEffectEffect('tap');
                              setSelectedHeatmapDay(selectedHeatmapDay === dayNum ? null : dayNum);
                            }}
                            className={`h-8 rounded-lg border text-[10px] transition flex items-center justify-center btn-press ${dayNum > totalDays ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${bgClass}`}
                            title={dayNum <= totalDays ? `Day ${dayNum}` : `Day ${dayNum} (locked)`}
                          >
                            {dayNum}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Day Heatmap Inspector Card */}
            {selectedHeatmapDay && (
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 space-y-2.5 animate-fade-in shadow-sm text-xs">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">
                      D{selectedHeatmapDay}
                    </span>
                    <h4 className="font-black text-slate-900 dark:text-white">
                      Day {selectedHeatmapDay} Practice Record
                    </h4>
                  </div>
                  <button
                    onClick={() => setSelectedHeatmapDay(null)}
                    className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-[11px] font-bold"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                  <div className="p-2 bg-white dark:bg-slate-900 rounded-xl border border-[#D9E4FF] dark:border-slate-800">
                    <span className="text-slate-400 block text-[9px]">Status</span>
                    <strong className={hindiProg.completedDays.includes(selectedHeatmapDay) ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500'}>
                      {hindiProg.completedDays.includes(selectedHeatmapDay) ? 'Completed ✓' : selectedHeatmapDay === currentDayNum ? 'In Progress ⚡' : 'Upcoming'}
                    </strong>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded-xl border border-[#D9E4FF] dark:border-slate-800">
                    <span className="text-slate-400 block text-[9px]">Score</span>
                    <strong className="text-indigo-600 dark:text-indigo-400">
                      {hindiProg.dayScores[selectedHeatmapDay] !== undefined ? `${hindiProg.dayScores[selectedHeatmapDay]}%` : 'Not recorded'}
                    </strong>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-900 rounded-xl border border-[#D9E4FF] dark:border-slate-800">
                    <span className="text-slate-400 block text-[9px]">Stage</span>
                    <strong className="text-amber-500">
                      Stage {Math.min(6, Math.max(1, Math.ceil(selectedHeatmapDay / 10)))}
                    </strong>
                  </div>
                </div>

                {onSelectDayLesson && (
                  <button
                    onClick={() => {
                      playSoundEffectEffect('tap');
                      onSelectDayLesson(selectedHeatmapDay);
                    }}
                    className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition cursor-pointer btn-press"
                  >
                    Open Day {selectedHeatmapDay} Studio →
                  </button>
                )}
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* PART 5 — STRENGTHS & WEAKNESSES INTELLIGENCE                             */}
          {/* ========================================================================= */}
          <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase text-purple-700 dark:text-purple-300 tracking-wider font-display">
                    Strengths & Targeted Coaching
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Skill-specific feedback appears only when assessment results are recorded.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Top Strengths */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-500/30 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-300">
                  <CheckCircle2 className="w-4 h-4" />
                  <h4 className="font-black uppercase tracking-wider text-[11px]">Assessment status</h4>
                </div>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11px]">
                  <li className="flex items-start space-x-1.5">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Present Simple:</strong> No Present Simple assessment result is recorded.</span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Audio Shadowing:</strong> No audio-shadowing assessment result is recorded.</span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <span className="text-emerald-500">✓</span>
                    <span><strong>Vocabulary Recall:</strong> No spaced-repetition accuracy result is recorded.</span>
                  </li>
                </ul>
              </div>

              {/* Needs Improvement */}
              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/25 border border-amber-200 dark:border-amber-500/30 space-y-2">
                <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-300">
                  <AlertTriangle className="w-4 h-4" />
                  <h4 className="font-black uppercase tracking-wider text-[11px]">Optional practice ideas</h4>
                </div>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11px]">
                  <li className="flex items-start space-x-1.5">
                    <span className="text-amber-500">⚠️</span>
                    <span><strong>Word Order Traps:</strong> Consider comparing Hindi and English word order.</span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <span className="text-amber-500">⚠️</span>
                    <span><strong>Question Inversion:</strong> Review auxiliary placement in questions when useful.</span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <span className="text-amber-500">⚠️</span>
                    <span><strong>Connected Speech:</strong> Try repeating short phrases with connected speech.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Drill Action Button */}
            {onLaunchReviewDomain && (
              <button
                onClick={() => {
                  playSoundEffectEffect('tap');
                  onLaunchReviewDomain('adaptive_grammar');
                }}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md transition cursor-pointer btn-press"
              >
                Launch Targeted Coaching Drills →
              </button>
            )}
          </div>

          {/* ========================================================================= */}
          {/* PART 7 — WEEKLY ENGLISH REPORT                                            */}
          {/* ========================================================================= */}
          <div className="bg-gradient-to-br from-indigo-50/90 via-purple-50/50 to-white dark:from-slate-900 dark:via-indigo-950/40 dark:to-slate-900 border border-indigo-200 dark:border-indigo-500/30 rounded-3xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-indigo-200/60 dark:border-indigo-500/30 pb-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📋</span>
                <div>
                  <h3 className="text-xs font-black uppercase text-indigo-700 dark:text-indigo-300 tracking-wider font-display">
                    Weekly Learning Summary
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Week-over-week skill results are not available.
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded-md font-mono">
                Comparison unavailable
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-white dark:bg-slate-950/80 rounded-2xl border border-indigo-100 dark:border-slate-800 space-y-1">
                <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400 block">
                  Weekly assessment comparison
                </span>
                <p className="text-slate-700 dark:text-slate-200 font-medium">
                  No week-over-week speaking-speed or pronunciation comparison is recorded.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-3 bg-white dark:bg-slate-950/80 rounded-xl border border-indigo-100 dark:border-slate-800">
                  <span className="text-[9px] text-slate-400 uppercase block font-bold">Weekly skill result</span>
                  <strong className="text-emerald-600 dark:text-emerald-400 block mt-0.5">
                    No weekly assessment result is recorded.
                  </strong>
                </div>
                <div className="p-3 bg-white dark:bg-slate-950/80 rounded-xl border border-indigo-100 dark:border-slate-800">
                  <span className="text-[9px] text-slate-400 uppercase block font-bold">Weekly skill result</span>
                  <strong className="text-amber-600 dark:text-amber-400 block mt-0.5">
                    No weekly assessment result is recorded.
                  </strong>
                </div>
              </div>

              <div className="p-3 bg-amber-50/60 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-500/30 flex items-center space-x-3">
                <span className="text-2xl">💡</span>
                <p className="text-[11px] text-amber-900 dark:text-amber-200 font-hindi font-medium">
                  <strong>कोचिंग टिप:</strong> जब भी नया वाक्य सीखें, उसे 3 बार तेज आवाज में बोलकर अभ्यास करें। इससे जबान पर अंग्रेजी का प्रवाह स्वाभाविक बनता है।
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PART 10 — COURSE STAGE PROGRESS                                         */}
          {/* ========================================================================= */}
          <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 dark:bg-cyan-500/15 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase text-cyan-700 dark:text-cyan-300 tracking-wider font-display">
                    60-Day Course Plan
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Comprehensive stage milestone progression
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400">
                {totalDays} days released • later days planned
              </span>
            </div>

            <div className="space-y-3">
              {stagesData.map((stage) => {
                const stats = getStageStats(stage);

                return (
                  <div
                    key={stage.num}
                    className={`p-4 rounded-2xl border transition ${
                      stats.isCompleted
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-500/30'
                        : stats.isUnlocked
                        ? 'bg-slate-50 dark:bg-slate-950/70 border-indigo-200 dark:border-indigo-500/30'
                        : 'bg-slate-50/40 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800/60 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black ${
                            stats.isCompleted
                              ? 'bg-emerald-500 text-slate-950'
                              : stats.isUnlocked
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                          }`}
                        >
                          {stats.isCompleted ? '✓' : stage.num}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-xs font-black text-slate-900 dark:text-white font-display">
                              Stage {stage.num}: {stage.titleEn}
                            </h4>
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 font-mono">
                              {stage.daysSpan}
                            </span>
                          </div>
                          <p className="text-[10px] text-amber-700 dark:text-amber-300 font-hindi font-bold">
                            {stage.titleHi}
                          </p>
                        </div>
                      </div>

                      <div className="text-right font-mono">
                        <span className="text-xs font-black text-slate-900 dark:text-white block">
                          {stats.isReleased ? `${stats.percent}%` : 'Planned'}
                        </span>
                        <span className="text-[9px] text-slate-500">
                          {stats.isReleased ? `${stats.completedInStage}/10 Days` : 'Stage locked'}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 space-y-1">
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            stats.isCompleted ? 'bg-emerald-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                          }`}
                          style={{ width: `${stats.percent}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[9px] text-slate-400 pt-0.5">
                        {stats.isReleased ? (
                          <>
                            <span>{stats.curriculumVocabItems} vocabulary items in course lessons</span>
                            <span>{stats.curriculumDialogueTurns} dialogue turns in course lessons</span>
                            <span>{stats.curriculumGrammarRules} grammar rules in course lessons</span>
                          </>
                        ) : (
                          <span>Complete the previous stage to unlock this stage</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PART 8 — LIFETIME STATISTICS                                              */}
          {/* ========================================================================= */}
          <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase text-amber-700 dark:text-amber-300 tracking-wider font-display">
                    Lifetime Academy Statistics
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Totals calculated from saved course activity
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center space-y-0.5">
                <span className="text-base">📚</span>
                <span className="text-lg font-black text-slate-900 dark:text-white font-mono block">
                  {completedDaysCount}
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase">Lessons Completed</span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center space-y-0.5">
                <span className="text-base">💬</span>
                <span className="text-lg font-black text-slate-900 dark:text-white font-mono block">
                  {completedDaysCount}
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase">Days with completed lessons</span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center space-y-0.5">
                <span className="text-base">🎙️</span>
                <span className="text-lg font-black text-slate-900 dark:text-white font-mono block">
                  {dialogueTurns}
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase">Dialogue Turns</span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center space-y-0.5">
                <span className="text-base">📘</span>
                <span className="text-lg font-black text-cyan-600 dark:text-cyan-400 font-mono block">
                  {wordsLearned}
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase">Vocabulary Words</span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center space-y-0.5">
                <span className="text-base">📐</span>
                <span className="text-lg font-black text-purple-600 dark:text-purple-400 font-mono block">
                  {grammarRules}
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase">Grammar Formulas</span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 text-center space-y-0.5">
                <span className="text-base">⏳</span>
                <span className="text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono block">
                  {completedDaysCount}
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase">Days Completed</span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PART 6 — MILESTONE JOURNEY TIMELINE 2.0                                  */}
          {/* ========================================================================= */}
          <MilestoneTimeline
            user={user}
            daysCompleted={completedDaysCount}
            onSelectMilestone={(dayNum) => {
              if (onSelectDayLesson) onSelectDayLesson(dayNum);
            }}
          />
        </>
      ) : (
        /* ========================================================================= */
        /* KNOWLEDGE GRAPH & A1 COURSE PROGRESS MATRIX                                */
        /* ========================================================================= */
        <>
          {/* A1 Knowledge Graph Header */}
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 dark:from-emerald-950 dark:via-slate-900 dark:to-teal-950 border border-emerald-200 dark:border-emerald-500/30 rounded-3xl p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-200/60 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/20">
                A1 Course Progress Matrix
              </span>
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                {isA2Unlocked ? 'A1 course gate passed' : `A1 course progress: ${a1Mastery.lessonsCompletedCount}/90 lessons`}
              </span>
            </div>

            <h2 className="text-xl font-black text-slate-900 dark:text-white">A1 Course Exit & Progression</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Tracks completion across 6 units and 90 A1 course lessons. A2 course content unlocks after all 90 are complete and an in-app exit assessment passes (≥80% overall plus the configured critical-skill minimums). This is not an official CEFR proficiency result.
            </p>
          </div>

          {/* Saved A1 Exit Assessment Skill Results */}
          <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#D9E4FF] dark:border-slate-800 pb-2">
              <h3 className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 tracking-wider">
                Recorded A1 Exit Assessment Item Results
              </h3>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">{latestSkillAssessment ? 'Latest saved attempt' : 'No saved attempt'}</span>
            </div>

            <p className="text-[10px] text-slate-500 dark:text-slate-400">Percentages show correct items tagged to each area. Speaking-tag items use transcript text matching, not acoustic pronunciation scoring; these in-app results do not certify CEFR proficiency.</p>

            <div className="space-y-2.5">
              {latestSkillAssessment && Object.values(latestSkillAssessment.skillBreakdown).some((result: { total: number; percent: number }) => result.total > 0 && Number.isFinite(result.percent)) ? (
                (Object.entries(latestSkillAssessment.skillBreakdown) as [SkillTag, { correct: number; total: number; percent: number }][])
                  .filter(([, result]) => result.total > 0 && Number.isFinite(result.percent))
                  .map(([skillKey, result]) => {
                    const score = Math.max(0, Math.min(100, result.percent));
                const minThreshold = A1_EXIT_ASSESSMENT_CONFIG.criticalSkillMinimums[skillKey as SkillTag] || 70;
                const meetsMin = score >= minThreshold;

                return (
                  <div key={skillKey} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="capitalize text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                        <span>{skillKey}</span>
                        <span className="text-[10px] text-slate-500 font-normal">
                          (min {minThreshold}%)
                        </span>
                      </span>
                      <span className="text-indigo-600 dark:text-indigo-400 flex items-center space-x-1 font-mono">
                        <span>{score}%</span>
                        {meetsMin ? (
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400">✓</span>
                        ) : (
                          <span className="text-[10px] text-rose-600 dark:text-rose-400">⚠️</span>
                        )}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#335CFF] to-[#10B981] rounded-full transition-all duration-500"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                );
              })) : (
                <p className="text-xs text-slate-500 dark:text-slate-400">No scored skill results are available from an in-app A1 exit assessment yet.</p>
              )}
            </div>
          </div>

          {/* A1 Course Knowledge Graph Explorer */}
          <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#D9E4FF] dark:border-slate-800 pb-2">
              <div>
                <h3 className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 tracking-wider">
                  A1 Course Knowledge Graph ({A1_MASTER_KNOWLEDGE_GRAPH.length} Concepts)
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Curriculum standard mapping across Units 1–6</p>
              </div>
            </div>

            {/* Filter controls */}
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search grammar, rules, formulas..."
                  value={kgSearch}
                  onChange={(e) => setKgSearch(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <select
                value={kgUnitFilter}
                onChange={(e) => setKgUnitFilter(e.target.value)}
                className="bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 rounded-xl px-2 py-1.5 text-xs text-slate-700 dark:text-slate-300 focus:outline-none focus:border-indigo-500"
              >
                <option value="ALL">All Units</option>
                <option value="unit_a1_1">Unit 1</option>
                <option value="unit_a1_2">Unit 2</option>
                <option value="unit_a1_3">Unit 3</option>
                <option value="unit_a1_4">Unit 4</option>
                <option value="unit_a1_5">Unit 5</option>
                <option value="unit_a1_6">Unit 6</option>
              </select>
            </div>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {filteredA1Kg.map((kg) => {
                const isSelected = selectedKgConcept === kg.id;
                return (
                  <div
                    key={kg.id}
                    onClick={() => {
                      playSoundEffectEffect('tap');
                      setSelectedKgConcept(isSelected ? null : kg.id);
                    }}
                    className={`p-3 rounded-2xl border transition cursor-pointer ${
                      isSelected ? 'bg-slate-100 dark:bg-slate-800/90 border-indigo-400 dark:border-indigo-500/50 shadow-xs' : 'bg-slate-50 dark:bg-slate-950 border-[#D9E4FF] dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-850'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white">{kg.title}</h4>
                          <span className="px-1.5 py-0.2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[9px] rounded font-mono uppercase">
                            {kg.unitId.replace('unit_a1_', 'U')}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400">{kg.keyFormula || kg.category}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isSelected ? 'rotate-90 text-indigo-500 dark:text-indigo-400' : ''}`} />
                    </div>

                    {isSelected && (
                      <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-700/60 space-y-2 text-xs">
                        <p className="text-slate-600 dark:text-slate-300 text-[11px]">{kg.coreRuleSummary}</p>
                        <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 p-2 rounded-xl text-[11px] space-y-1">
                          <span className="text-[9px] font-black uppercase text-slate-500 dark:text-slate-400 block">Exemplars:</span>
                          {kg.exampleSentences.map((s, i) => (
                            <p key={i} className="text-indigo-600 dark:text-indigo-300 font-mono">"{s}"</p>
                          ))}
                        </div>
                        {kg.commonMistakes.length > 0 && (
                          <div className="text-[10px] text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 p-2 rounded-xl border border-rose-200 dark:border-rose-500/20">
                            <span className="font-bold block">⚠️ Contrastive Caveat:</span>
                            {kg.commonMistakes.map((m, i) => (
                              <p key={i}>• {m}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
