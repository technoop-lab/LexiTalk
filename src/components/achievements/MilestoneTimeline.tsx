import React, { useState } from 'react';
import {
  CheckCircle2,
  Lock,
  Sparkles,
  Award,
  ChevronRight,
  Zap,
  Star,
  Mic,
  BookOpen,
  Trophy,
  Filter,
  Check
} from 'lucide-react';
import { UserAcademyProfile } from '../../types';
import { HindiCourseService } from '../../services/HindiCourseService';
import { playSoundEffectEffect } from '../../utils/audioUtils';

interface MilestoneTimelineProps {
  user: UserAcademyProfile;
  daysCompleted?: number;
  onSelectMilestone?: (dayNum: number) => void;
}

export interface MilestoneNode {
  day: number;
  stageNum: number;
  titleEn: string;
  titleHi: string;
  releaseLabel: string;
  rewardXp: number;
  badgeSymbol: string;
  vocabTarget: number;
  dialogueCount: number;
  speakingMinutesTarget: number;
  desc: string;
  focusArea: string;
  hindiFocus: string;
}

export const MILESTONES_DATA: MilestoneNode[] = [
  {
    day: 1,
    stageNum: 1,
    titleEn: 'Day 1: Orientation & Foundations',
    titleHi: 'दिन 1: परिचय व बुनियादी उच्चारण',
    releaseLabel: 'Course plan',
    rewardXp: 50,
    badgeSymbol: '🌱',
    vocabTarget: 8,
    dialogueCount: 1,
    speakingMinutesTarget: 5,
    desc: 'Bilingual bridge setup, sound foundations, and daily routine phrases.',
    focusArea: 'Pronunciation Basics & Greetings',
    hindiFocus: 'ध्वनि ज्ञान एवं अभिवादन',
  },
  {
    day: 10,
    stageNum: 1,
    titleEn: 'Day 10: First Course Checkpoint',
    titleHi: 'दिन 10: पहला पाठ्यक्रम पड़ाव',
    releaseLabel: 'Course plan',
    rewardXp: 150,
    badgeSymbol: '🎖️',
    vocabTarget: 80,
    dialogueCount: 10,
    speakingMinutesTarget: 60,
    desc: 'A course checkpoint for introductions and routine-language practice; not a separately scored exam.',
    focusArea: 'Present Simple & Daily Habits',
    hindiFocus: 'वर्तमान काल एवं दिनचर्या',
  },
  {
    day: 20,
    stageNum: 2,
    titleEn: 'Day 20: Stage 2 Practical English',
    titleHi: 'दिन 20: स्टेज 2 व्यावहारिक संवाद',
    releaseLabel: 'Course plan',
    rewardXp: 200,
    badgeSymbol: '⚡',
    vocabTarget: 160,
    dialogueCount: 20,
    speakingMinutesTarget: 120,
    desc: 'Shopping, directions, restaurant ordering, and functional questions.',
    focusArea: 'Practical Questions & Food/Places',
    hindiFocus: 'दुकान, रास्ते व खान-पान संवाद',
  },
  {
    day: 30,
    stageNum: 3,
    titleEn: 'Day 30: Course Progress Checkpoint',
    titleHi: 'दिन 30: पाठ्यक्रम प्रगति पड़ाव',
    releaseLabel: 'Course plan',
    rewardXp: 300,
    badgeSymbol: '🌟',
    vocabTarget: 240,
    dialogueCount: 30,
    speakingMinutesTarget: 180,
    desc: 'A course checkpoint for past-tense and personal-story practice; it is not proof of CEFR completion.',
    focusArea: 'Past Simple & Personal Stories',
    hindiFocus: 'भूतकाल व व्यक्तिगत अनुभव',
  },
  {
    day: 40,
    stageNum: 4,
    titleEn: 'Day 40: Released Course Path Milestone',
    titleHi: 'दिन 40: उपलब्ध पाठ्यक्रम का पड़ाव',
    releaseLabel: 'Course plan',
    rewardXp: 350,
    badgeSymbol: '🚀',
    vocabTarget: 320,
    dialogueCount: 40,
    speakingMinutesTarget: 240,
    desc: 'End of the currently released Day 1–40 path; this milestone is not a CEFR certificate.',
    focusArea: 'Future Intentions & Workplace Communication',
    hindiFocus: 'भविष्य योजनाएं एवं कार्यस्थल वार्ता',
  },
  {
    day: 50,
    stageNum: 5,
    titleEn: 'Day 50: Intermediate Course Milestone',
    titleHi: 'दिन 50: मध्यवर्ती पाठ्यक्रम पड़ाव',
    releaseLabel: 'Released',
    rewardXp: 450,
    badgeSymbol: '💎',
    vocabTarget: 400,
    dialogueCount: 50,
    speakingMinutesTarget: 300,
    desc: 'Days 41–60 (B1 content) are released in this version; this milestone records course progress, not an official CEFR exam result.',
    focusArea: 'Formal Registers & Nuanced Dialogues',
    hindiFocus: 'साक्षात्कार एवं औपचारिक वार्तालाप',
  },
  {
    day: 60,
    stageNum: 6,
    titleEn: 'Day 60: Course Completion Milestone',
    titleHi: 'दिन 60: पाठ्यक्रम समाप्ति पड़ाव',
    releaseLabel: 'Released',
    rewardXp: 1000,
    badgeSymbol: '👑',
    vocabTarget: 500,
    dialogueCount: 60,
    speakingMinutesTarget: 360,
    desc: 'Capstone of the full 60-day course; this milestone records course completion and is not an official CEFR certificate.',
    focusArea: 'Spontaneous English Fluency & Capstone Exam',
    hindiFocus: 'धाराप्रवाह अंग्रेजी एवं अंतिम दीक्षांत प्रमाण पत्र',
  },
];

export const MilestoneTimeline: React.FC<MilestoneTimelineProps> = ({
  user,
  daysCompleted = 0,
  onSelectMilestone,
}) => {
  const [selectedNode, setSelectedNode] = useState<MilestoneNode | null>(null);
  const [filterMode, setFilterMode] = useState<'ALL' | 'REACHED' | 'UPCOMING'>('ALL');

  const releasedDays = HindiCourseService.getAvailableDaysCount();
  const completedCount = Math.min(releasedDays, Math.max(0, Math.floor(Number(daysCompleted) || 0)));
  const releasedMilestones = MILESTONES_DATA.filter((m) => m.day <= releasedDays);
  const reachedCount = releasedMilestones.filter((m) => completedCount >= m.day).length;

  const filteredMilestones = MILESTONES_DATA.filter((node) => {
    const isReleased = node.day <= releasedDays;
    const isCompleted = isReleased && completedCount >= node.day;
    if (filterMode === 'REACHED') return isCompleted;
    if (filterMode === 'UPCOMING') return !isCompleted;
    return true;
  });

  return (
    <div className="bg-white dark:bg-slate-900/90 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E3EDFF] dark:border-slate-800 pb-3 flex-wrap gap-2">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
            <Trophy className="w-4.5 h-4.5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-xs font-black uppercase text-indigo-700 dark:text-indigo-300 tracking-wider font-display">
                Milestone Journey Timeline 2.0
              </h3>
              <span className="px-2 py-0.2 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[9px] font-black rounded-full">
                Reached {reachedCount}/{releasedMilestones.length} released checkpoints
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">
              Course-day checkpoints; not CEFR exams or verified XP awards.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-[#D9E4FF] dark:border-slate-700 text-[10px] font-bold">
          {(['ALL', 'REACHED', 'UPCOMING'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => {
                playSoundEffectEffect('tap');
                setFilterMode(mode);
              }}
              className={`px-2 py-0.5 rounded-lg transition uppercase ${
                filterMode === mode
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs font-black'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar Header */}
      <div className="p-3 bg-gradient-to-r from-indigo-50/60 via-purple-50/40 to-emerald-50/60 dark:from-indigo-950/40 dark:via-slate-900 dark:to-emerald-950/40 rounded-2xl border border-indigo-200/60 dark:border-indigo-500/20 space-y-1.5">
        <div className="flex justify-between items-center text-xs font-bold">
          <span className="text-indigo-900 dark:text-indigo-200 flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Released Course Path Progress</span>
          </span>
          <span className="font-mono text-indigo-600 dark:text-indigo-400">
            Day {completedCount} / {releasedDays} released ({releasedDays > 0 ? Math.min(100, Math.round((completedCount / releasedDays) * 100)) : 0}%)
          </span>
        </div>
        <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#335CFF] via-[#6D5DF6] to-[#10B981] rounded-full transition-all duration-700"
            style={{ width: `${releasedDays > 0 ? Math.min(100, Math.round((completedCount / releasedDays) * 100)) : 0}%` }}
          />
        </div>
      </div>

      {/* Interactive Timeline Stream */}
      <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#335CFF] before:via-[#6D5DF6] before:to-emerald-500">
        {filteredMilestones.map((node) => {
          const isReleased = node.day <= releasedDays;
          const isCompleted = isReleased && completedCount >= node.day;
          const isCurrent =
            isReleased &&
            !isCompleted &&
            (node.day === 1 || completedCount >= node.day - 10);

          return (
            <div
              key={node.day}
              onClick={() => {
                if (!isReleased) return;
                playSoundEffectEffect('tap');
                setSelectedNode(node);
                if (onSelectMilestone) onSelectMilestone(node.day);
              }}
              aria-disabled={!isReleased}
              className={`relative cursor-pointer transition p-3.5 rounded-2xl border btn-press ${
                isCompleted
                  ? 'bg-gradient-to-r from-emerald-50/60 via-teal-50/30 to-white dark:from-emerald-950/40 dark:via-slate-900 dark:to-slate-900 border-emerald-300 dark:border-emerald-500/40 shadow-xs'
                  : isCurrent
                  ? 'bg-gradient-to-r from-indigo-50/80 via-purple-50/40 to-white dark:from-indigo-950/60 dark:via-slate-900 dark:to-slate-900 border-indigo-400 dark:border-indigo-500/50 ring-2 ring-indigo-500/30 shadow-md animate-timeline-glow'
                  : 'bg-slate-50/50 dark:bg-slate-950/40 border-[#E3EDFF] dark:border-slate-800/80 opacity-75'
              }`}
            >
              {/* Timeline Connector Dot */}
              <div
                className={`absolute -left-6 top-4 w-5 h-5 rounded-full flex items-center justify-center -translate-x-1/2 transition shadow-md ${
                  isCompleted
                    ? 'bg-emerald-500 text-slate-950 ring-4 ring-emerald-100 dark:ring-emerald-950'
                    : isCurrent
                    ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-950 animate-pulse'
                    : 'bg-slate-300 dark:bg-slate-700 text-slate-500'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                ) : isCurrent ? (
                  <Sparkles className="w-3 h-3 text-amber-300" />
                ) : (
                  <Lock className="w-2.5 h-2.5" />
                )}
              </div>

              {/* Node Content */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center space-x-3 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center text-2xl shadow-xs shrink-0 ${
                      isCompleted
                        ? 'bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40'
                        : isCurrent
                        ? 'bg-indigo-100 dark:bg-indigo-500/20 border border-indigo-300 dark:border-indigo-500/40 ring-2 ring-indigo-400/30'
                        : 'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 grayscale'
                    }`}
                  >
                    {node.badgeSymbol}
                  </div>

                  <div className="min-w-0 space-y-0.5">
                    <div className="flex items-center space-x-1.5 flex-wrap">
                      <h4 className="text-xs font-black text-slate-900 dark:text-white font-display">
                        {node.titleEn}
                      </h4>
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 font-mono">
                        {node.releaseLabel}
                      </span>
                    </div>

                    <p className="text-[10px] text-amber-700 dark:text-amber-300 font-hindi font-bold">
                      {node.titleHi}
                    </p>

                    <div className="flex items-center space-x-2 pt-0.5 text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center space-x-1">
                        <BookOpen className="w-3 h-3 text-cyan-500" />
                        <span>{node.vocabTarget}w</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Mic className="w-3 h-3 text-emerald-500" />
                        <span>{node.speakingMinutesTarget}m speak</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 text-right space-y-1">
                  <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/15 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-500/30 inline-block font-mono">
                    +{node.rewardXp} XP configured
                  </span>
                  {!isReleased && (
                    <span className="text-[8px] font-black text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-full block text-center border border-slate-300 dark:border-slate-700">
                      PLANNED
                    </span>
                  )}
                  {isCompleted && (
                    <span className="text-[8px] font-black text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/20 px-1.5 py-0.5 rounded-full block text-center border border-emerald-300 dark:border-emerald-500/30">
                      REACHED ✓
                    </span>
                  )}
                  {isCurrent && (
                    <span className="text-[8px] font-black text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/20 px-1.5 py-0.5 rounded-full block text-center border border-amber-300 dark:border-amber-500/30 animate-pulse">
                      ACTIVE ⚡
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Milestone Detail Inspector Box (if tapped) */}
      {selectedNode && (
        <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 space-y-3 animate-fade-in shadow-md">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <div className="flex items-center space-x-2">
              <span className="text-xl">{selectedNode.badgeSymbol}</span>
              <div>
                <span className="text-xs font-black text-slate-900 dark:text-white block font-display">
                  {selectedNode.titleEn}
                </span>
                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-hindi font-bold">
                  {selectedNode.titleHi}
                </span>
              </div>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-[11px] font-bold text-slate-400 hover:text-slate-700 dark:hover:text-white px-2 py-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer"
            >
              ✕ Close
            </button>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {selectedNode.desc}
          </p>

          <div className="p-2.5 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-xl border border-indigo-200/50 dark:border-indigo-500/20 text-xs">
            <span className="text-[9px] font-black uppercase text-indigo-700 dark:text-indigo-300 block">
              Core Competency & Hindi Bridge Focus:
            </span>
            <p className="text-slate-800 dark:text-slate-200 font-bold mt-0.5">
              {selectedNode.focusArea}
            </p>
            <p className="text-amber-700 dark:text-amber-300 text-[11px] font-hindi font-bold">
              {selectedNode.hindiFocus}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
            <div className="p-2 bg-white dark:bg-slate-900 rounded-xl border border-[#D9E4FF] dark:border-slate-800">
              <span className="text-slate-400 block text-[9px]">Vocab Goal</span>
              <strong className="text-slate-900 dark:text-white">{selectedNode.vocabTarget}+ Words</strong>
            </div>
            <div className="p-2 bg-white dark:bg-slate-900 rounded-xl border border-[#D9E4FF] dark:border-slate-800">
              <span className="text-slate-400 block text-[9px]">Speaking Min</span>
              <strong className="text-emerald-600 dark:text-emerald-400">{selectedNode.speakingMinutesTarget} Minutes</strong>
            </div>
            <div className="p-2 bg-white dark:bg-slate-900 rounded-xl border border-[#D9E4FF] dark:border-slate-800">
              <span className="text-slate-400 block text-[9px]">Configured XP</span>
              <strong className="text-amber-500">+{selectedNode.rewardXp} XP; crediting not verified</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

