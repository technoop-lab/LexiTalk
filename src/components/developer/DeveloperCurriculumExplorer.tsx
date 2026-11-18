import React, { useState } from 'react';
import {
  UserAcademyProfile,
  CEFRLevel,
  CourseUnit,
  LessonNode,
  DetailedLessonData,
} from '../../types';
import { CURIOSITY_UNITS } from '../../data/curiosityCurriculum';
import { CurriculumService } from '../../services/CurriculumService';
import { DeveloperTestService } from '../../services/DeveloperTestService';
import {
  Search,
  Layers,
  Filter,
  CheckCircle2,
  Lock,
  Play,
  Zap,
  BookOpen,
  Volume2,
  Sparkles,
  ChevronRight,
  Sliders,
  Check,
  Award,
  Compass,
  FileCode,
  Globe,
  ArrowLeft
} from 'lucide-react';

interface DeveloperCurriculumExplorerProps {
  user: UserAcademyProfile;
  onUpdateUser: (updated: UserAcademyProfile) => void;
  onLaunchLesson: (lessonId: string) => void;
  onOpenDebuggerWithLesson?: (lessonId: string) => void;
  onBack: () => void;
}

export const DeveloperCurriculumExplorer: React.FC<DeveloperCurriculumExplorerProps> = ({
  user,
  onUpdateUser,
  onLaunchLesson,
  onOpenDebuggerWithLesson,
  onBack,
}) => {
  const [selectedCEFR, setSelectedCEFR] = useState<'ALL' | 'A1' | 'A2'>('ALL');
  const [selectedUnitId, setSelectedUnitId] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'COMPLETED' | 'INCOMPLETE'>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('lesson_a1_1_1');

  // Filter units
  const filteredUnits = CURIOSITY_UNITS.filter((u) => {
    if (selectedCEFR !== 'ALL' && u.cefr !== selectedCEFR) return false;
    if (selectedUnitId !== 'ALL' && u.id !== selectedUnitId) return false;
    return true;
  });

  // Extract all matching lessons
  const allLessons: (LessonNode & { unit: CourseUnit })[] = CURIOSITY_UNITS.flatMap((u) =>
    u.lessons.map((l) => ({ ...l, unit: u }))
  ).filter((l) => {
    if (selectedCEFR !== 'ALL' && l.cefr !== selectedCEFR) return false;
    if (selectedUnitId !== 'ALL' && l.unitId !== selectedUnitId) return false;
    const isComp = user.completedLessonIds?.includes(l.id);
    if (statusFilter === 'COMPLETED' && !isComp) return false;
    if (statusFilter === 'INCOMPLETE' && isComp) return false;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        l.id.toLowerCase().includes(term) ||
        l.title.toLowerCase().includes(term) ||
        l.description.toLowerCase().includes(term) ||
        l.unit.title.toLowerCase().includes(term)
      );
    }
    return true;
  });

  const activeLesson = allLessons.find((l) => l.id === selectedLessonId) || allLessons[0] || null;
  const detailedLesson: DetailedLessonData | null = activeLesson
    ? CurriculumService.getDetailedLesson(activeLesson.id, user.learningLanguage || 'en')
    : null;
  const stages = activeLesson
    ? CurriculumService.getLessonStageSequence(activeLesson.id, user.learningLanguage || 'en')
    : [];

  const isCompleted = activeLesson ? user.completedLessonIds?.includes(activeLesson.id) : false;

  const handleToggleCompletion = (lessonId: string) => {
    const updated = DeveloperTestService.toggleLessonCompletion(lessonId);
    onUpdateUser(updated);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 space-y-5 max-w-7xl mx-auto font-sans">
      {/* Header Bar */}
      <div className="bg-slate-900 border border-indigo-500/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="p-2.5 bg-slate-800 hover:bg-slate-750 text-slate-200 rounded-xl transition border border-slate-700 flex items-center space-x-1.5 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-400" />
            <span>Back</span>
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-[10px] font-mono font-bold rounded uppercase">
                195-LESSON CURRICULUM EXPLORER
              </span>
              <span className="text-xs text-slate-400 font-mono">Units 1–13 Matrix</span>
            </div>
            <h1 className="text-xl font-black text-white tracking-tight flex items-center space-x-2">
              <span>🏛️</span>
              <span>Academy Curriculum Deep Inspector</span>
            </h1>
          </div>
        </div>

        {/* Global Summary Stats */}
        <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
          <span>Total: <strong className="text-white">195 Lessons</strong></span>
          <span>•</span>
          <span>A1: <strong className="text-emerald-400">90</strong></span>
          <span>•</span>
          <span>A2: <strong className="text-indigo-400">105</strong></span>
          <span>•</span>
          <span>Matches: <strong className="text-amber-400">{allLessons.length}</strong></span>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl flex flex-wrap items-center gap-3 text-xs shadow-lg">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search lesson ID (e.g. lesson_a1_1_1), title, or concept..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 pl-8 pr-3 py-1.5 rounded-xl text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* CEFR Level Filter */}
        <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
          {(['ALL', 'A1', 'A2'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                setSelectedCEFR(lvl);
                setSelectedUnitId('ALL');
              }}
              className={`px-3 py-1 rounded-lg font-bold text-xs transition ${
                selectedCEFR === lvl
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Unit Dropdown Filter */}
        <div className="flex items-center space-x-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
          <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">Unit:</span>
          <select
            value={selectedUnitId}
            onChange={(e) => setSelectedUnitId(e.target.value)}
            className="bg-transparent text-xs font-bold text-slate-100 focus:outline-none cursor-pointer"
          >
            <option value="ALL" className="bg-slate-900 text-slate-100">All Units (1–13)</option>
            {CURIOSITY_UNITS.map((u) => (
              <option key={u.id} value={u.id} className="bg-slate-900 text-slate-100">
                Unit {u.unitNumber} ({u.cefr}) - {u.title}
              </option>
            ))}
          </select>
        </div>

        {/* Completion Status Filter */}
        <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
          {(['ALL', 'COMPLETED', 'INCOMPLETE'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition ${
                statusFilter === st
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Lesson Directory List */}
        <div className="lg:col-span-5 space-y-2 max-h-[720px] overflow-y-auto pr-1.5 no-scrollbar">
          {allLessons.length === 0 ? (
            <div className="p-8 text-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-400 text-xs">
              No lessons found matching filters.
            </div>
          ) : (
            allLessons.map((l) => {
              const isSelected = activeLesson?.id === l.id;
              const isComp = user.completedLessonIds?.includes(l.id);

              return (
                <div
                  key={l.id}
                  onClick={() => setSelectedLessonId(l.id)}
                  className={`p-3.5 rounded-2xl border transition cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-indigo-950/40 border-indigo-500/70 ring-2 ring-indigo-500/20 shadow-lg'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <span className="text-2xl shrink-0">{l.icon}</span>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 bg-slate-800 text-slate-300 rounded">
                          {l.cefr} U{l.unit.unitNumber}
                        </span>
                        <span className="text-xs font-bold text-white truncate">{l.title}</span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 truncate mt-0.5">
                        {l.id}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    {isComp ? (
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold rounded-md flex items-center space-x-1">
                        <Check className="w-3 h-3" />
                        <span>Done</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[10px] font-mono rounded">
                        Pending
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Deep Lesson Inspector */}
        <div className="lg:col-span-7 space-y-4">
          {activeLesson && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-5 shadow-2xl">
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono text-xs font-bold rounded uppercase">
                      {activeLesson.cefr} Level • Unit {activeLesson.unit.unitNumber}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{activeLesson.id}</span>
                  </div>
                  <h2 className="text-lg font-black text-white flex items-center space-x-2">
                    <span>{activeLesson.icon}</span>
                    <span>{activeLesson.title}</span>
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeLesson.description}
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleToggleCompletion(activeLesson.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition flex items-center space-x-1.5 ${
                      isCompleted
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isCompleted ? 'Completed (Toggle)' : 'Mark Complete'}</span>
                  </button>

                  {onOpenDebuggerWithLesson && (
                    <button
                      onClick={() => onOpenDebuggerWithLesson(activeLesson.id)}
                      className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>Debug Exercises</span>
                    </button>
                  )}

                  <button
                    onClick={() => onLaunchLesson(activeLesson.id)}
                    className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow transition active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Launch in Engine</span>
                  </button>
                </div>
              </div>

              {/* 18 Stages Blueprint Breakdown */}
              <div className="space-y-2">
                <h3 className="text-xs font-black text-slate-200 uppercase tracking-wider flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  <span>18 Pedagogical Stages Architecture</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {stages.map((st) => (
                    <div
                      key={st.id}
                      className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-slate-200 text-[11px]">{st.title}</div>
                        <span className="text-[9px] text-slate-400 font-mono uppercase">{st.category}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-slate-800 text-indigo-300 px-1.5 py-0.5 rounded">
                        {st.itemCount} Items
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lesson Objectives & Can-Do Outcomes */}
              {detailedLesson && (
                <div className="space-y-2 text-xs">
                  <h3 className="font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>CEFR Can-Do Outcomes & Objectives</span>
                  </h3>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1.5">
                    <p className="text-slate-300 font-medium">
                      {detailedLesson.learningObjective?.description}
                    </p>
                    <ul className="space-y-1 pt-1">
                      {detailedLesson.learningObjective?.canDoStatements?.map((stmt, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-slate-400 text-[11px]">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <span>{stmt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Vocabulary & Expressions Sample */}
              {detailedLesson && detailedLesson.vocabulary?.length > 0 && (
                <div className="space-y-2 text-xs">
                  <h3 className="font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>Target Lexicon ({detailedLesson.vocabulary.length} Items)</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {detailedLesson.vocabulary.slice(0, 6).map((v) => (
                      <div
                        key={v.id}
                        className="p-2 bg-slate-950/60 rounded-xl border border-slate-800 space-y-0.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white">{v.word}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{v.phonetic}</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 truncate">
                          {v.translationsByLang?.[user.nativeLanguage || 'hi'] || v.meaning}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
