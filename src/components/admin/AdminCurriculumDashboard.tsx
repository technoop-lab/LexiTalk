import React, { useState } from 'react';
import {
  CEFRLevel,
  CourseUnit,
  LessonNode,
  TargetLanguageCode,
} from '../../types';
import { ALL_CEFR_LEVELS, CurriculumService } from '../../services/CurriculumService';
import { CENTRAL_LANGUAGE_REGISTRY } from '../../data/languages';
import { MasterCurriculumService } from '../../services/MasterCurriculumService';
import { AdminLessonInspector } from './AdminLessonInspector';
import {
  BookOpen,
  ChevronRight,
  Shield,
  Award,
  Layers,
  Sparkles,
  ArrowLeft,
  Search,
  Sliders,
  CheckCircle2,
  FolderTree,
  FileText,
  Activity,
  Globe
} from 'lucide-react';

interface AdminCurriculumDashboardProps {
  onBackToLearnerPath: () => void;
}

export const AdminCurriculumDashboard: React.FC<AdminCurriculumDashboardProps> = ({
  onBackToLearnerPath,
}) => {
  const [selectedTargetLang, setSelectedTargetLang] = useState<TargetLanguageCode>('en');
  const [selectedCEFR, setSelectedCEFR] = useState<CEFRLevel>('A1');
  const [selectedUnitId, setSelectedUnitId] = useState<string>('unit_a1_1');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('lesson_a1_1_1');

  // Curriculum metadata for chosen target language
  const targetMeta = MasterCurriculumService.getCurriculumMetadataForTarget(selectedTargetLang);
  const targetRegistryEntry = CENTRAL_LANGUAGE_REGISTRY.find((l) => l.code === selectedTargetLang);

  // Units for selected CEFR and Target Language
  const units = CurriculumService.getUnitsForCEFR(selectedCEFR, selectedTargetLang);
  const activeUnit = units.find((u) => u.id === selectedUnitId) || units[0] || null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 space-y-6 max-w-6xl mx-auto">
      {/* Top Admin Bar Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xl">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBackToLearnerPath}
            className="p-2.5 bg-slate-800 hover:bg-slate-750 text-slate-200 rounded-xl transition border border-slate-700 flex items-center space-x-1 text-xs font-bold"
            title="Return to Learner Experience"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400" />
            <span>Learner Path</span>
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-mono font-bold rounded uppercase">
                ADMINISTRATION MODE
              </span>
              <span className="text-xs text-slate-400 font-mono">Curiosity Curriculum Engine v2.0</span>
            </div>
            <h1 className="text-xl font-black text-white tracking-tight flex items-center space-x-2">
              <span>🏛️</span>
              <span>Academy Curriculum Management</span>
            </h1>
          </div>
        </div>

        {/* Target Language Selector + Level Switcher Quick Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Target Language Selector Dropdown */}
          <div className="flex items-center space-x-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Target:</span>
            <select
              value={selectedTargetLang}
              onChange={(e) => setSelectedTargetLang(e.target.value as TargetLanguageCode)}
              className="bg-transparent text-xs font-bold text-slate-100 focus:outline-none cursor-pointer"
            >
              {CENTRAL_LANGUAGE_REGISTRY.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-slate-900 text-slate-100">
                  {lang.flag} {lang.name} ({lang.code.toUpperCase()}) - {lang.status}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            {ALL_CEFR_LEVELS.map((lvl) => {
              const isActive = selectedCEFR === lvl.level;
              return (
                <button
                  key={lvl.level}
                  onClick={() => {
                    setSelectedCEFR(lvl.level);
                    const newUnits = CurriculumService.getUnitsForCEFR(lvl.level, selectedTargetLang);
                    if (newUnits.length > 0) {
                      setSelectedUnitId(newUnits[0].id);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {lvl.level}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Target Language Curriculum Status Banner */}
      <div className="bg-slate-900/80 border border-indigo-500/30 rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{targetRegistryEntry?.flag || '🌐'}</span>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-100">{targetMeta.title}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                targetMeta.status === 'ACTIVE_PRODUCTION'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {targetMeta.status}
              </span>
            </div>
            <p className="text-slate-400 text-[11px] mt-0.5">{targetMeta.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 font-mono text-[11px] shrink-0 text-slate-400">
          <span>Framework: <strong className="text-indigo-300">{targetMeta.proficiencyFramework}</strong></span>
          <span>Units: <strong className="text-slate-200">{targetMeta.totalUnits}</strong></span>
          <span>Lessons: <strong className="text-slate-200">{targetMeta.totalLessons}</strong></span>
        </div>
      </div>

      {/* Hierarchy Path Breadcrumb Visualizer */}
      <div className="bg-slate-900/60 border border-slate-800 px-4 py-2.5 rounded-xl flex items-center space-x-2 text-xs font-mono overflow-x-auto no-scrollbar text-slate-300">
        <span className="text-slate-500 font-bold">ACADEMY PROGRAM</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
        <span className="text-emerald-400 font-bold">CEFR {selectedCEFR}</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
        <span className="text-teal-300 font-bold truncate max-w-[200px]">
          {activeUnit ? activeUnit.title : 'Unit'}
        </span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
        <span className="text-amber-300 font-bold">
          {activeUnit?.lessons.find(l => l.id === selectedLessonId)?.title || 'Lesson Inspector'}
        </span>
      </div>

      {/* Main Admin Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Units & Actual Available Lessons List */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <h2 className="text-sm font-bold text-white flex items-center space-x-2">
                <FolderTree className="w-4 h-4 text-emerald-400" />
                <span>CEFR {selectedCEFR} Units & Lessons</span>
              </h2>
              <span className="text-[11px] text-slate-400 font-mono font-bold">
                {units.length} Units
              </span>
            </div>

            {units.length === 0 ? (
              <div className="p-6 text-center space-y-2 bg-slate-950 rounded-xl border border-slate-800/80">
                <p className="text-amber-400 font-bold text-xs">
                  Curriculum NOT AUTHORED for {targetRegistryEntry?.name || selectedTargetLang} ({selectedTargetLang.toUpperCase()})
                </p>
                <p className="text-slate-400 text-[11px]">
                  Target language status: <strong className="text-indigo-300">{targetMeta.status}</strong>. Published Units: 0, Published Lessons: 0. Architecture is ready for future content generation.
                </p>
              </div>
            ) : (
              units.map((unit) => {
                const isUnitSelected = activeUnit?.id === unit.id;
                return (
                  <div
                    key={unit.id}
                    className={`rounded-xl border transition p-3 space-y-3 ${
                      isUnitSelected
                        ? 'bg-slate-950 border-emerald-500/50 shadow-lg'
                        : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/60'
                    }`}
                  >
                    {/* Unit Header */}
                    <button
                      onClick={() => setSelectedUnitId(unit.id)}
                      className="w-full text-left flex items-start justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                          Unit {unit.unitNumber}
                        </span>
                        <h3 className="font-bold text-slate-100 text-xs sm:text-sm">
                          {unit.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                          {unit.description}
                        </p>
                      </div>
                      <span className="px-2 py-0.5 bg-slate-800 text-emerald-400 font-mono text-[10px] font-bold rounded-md">
                        {unit.lessons.length} Lessons
                      </span>
                    </button>

                    {/* Available Lessons inside Unit */}
                    {isUnitSelected && (
                      <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                          Actual Available Lessons
                        </span>
                        {unit.lessons.map((lsn) => {
                          const isLessonSelected = selectedLessonId === lsn.id;
                          return (
                            <button
                              key={lsn.id}
                              onClick={() => setSelectedLessonId(lsn.id)}
                              className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition ${
                                isLessonSelected
                                  ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm'
                                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                <span>{lsn.icon || '📖'}</span>
                                <span className="truncate max-w-[180px]">{lsn.title}</span>
                              </div>
                              <span className="text-[10px] font-mono text-slate-400">
                                {CurriculumService.getDetailedLesson(lsn.id, selectedTargetLang) ? '18-Stage Engine' : 'Overview'}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Detailed Lesson Inspector */}
        <div className="lg:col-span-8">
          <AdminLessonInspector lessonId={selectedLessonId} targetLanguage={selectedTargetLang} />
        </div>
      </div>
    </div>
  );
};
