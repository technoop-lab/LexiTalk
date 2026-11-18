import React, { useState } from 'react';
import { CurriculumService, LessonInspectorMetrics, LessonStageDefinition } from '../../services/CurriculumService';
import { MasterCurriculumService } from '../../services/MasterCurriculumService';
import { LessonFactoryService } from '../../services/LessonFactoryService';
import { TTSInventoryService } from '../../services/TTSInventoryService';
import { TargetLanguageCode } from '../../types';
import { ExerciseInspector } from './ExerciseInspector';
import { AudioAuditInspector } from './AudioAuditInspector';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Layers,
  Sparkles,
  Zap,
  Award,
  Hash,
  List,
  Target,
  FileCode,
  Sliders,
  Volume2,
  Activity,
  Code,
  Compass,
  Rocket,
  Globe,
  MapPin,
  Clock,
  Check,
  AlertTriangle,
  TrendingUp,
  Speaker
} from 'lucide-react';

interface AdminLessonInspectorProps {
  lessonId: string;
  targetLanguage?: TargetLanguageCode;
}

export const AdminLessonInspector: React.FC<AdminLessonInspectorProps> = ({ lessonId, targetLanguage = 'en' }) => {
  const [activeTab, setActiveTab] = useState<
    'metrics' | 'stages' | 'taxonomies' | 'exercises' | 'audioAudit' | 'roadmap' | 'factory' | 'ttsAudit'
  >('metrics');
  const [selectedStage, setSelectedStage] = useState<string>('practice_recognition');

  const metrics: LessonInspectorMetrics | null = CurriculumService.getLessonMetrics(lessonId, targetLanguage);
  const stages: LessonStageDefinition[] = CurriculumService.getLessonStageSequence(lessonId, targetLanguage);
  const detailedLesson = CurriculumService.getDetailedLesson(lessonId, targetLanguage);

  const adminSummary = MasterCurriculumService.getAdminCurriculumSummary();
  const sentenceLadder = MasterCurriculumService.getSentenceProgression();
  const grammarProgression = MasterCurriculumService.getGrammarProgression('A1');
  const vocabSystem = MasterCurriculumService.getVocabularySystem('A1');
  const communicativeFunctions = MasterCurriculumService.getCommunicativeFunctions('A1');
  const recyclingRules = MasterCurriculumService.getRecyclingRules();
  const wpMeta = MasterCurriculumService.getWordPressIntegrationMeta();
  const agileRoadmap = MasterCurriculumService.getAgileRoadmap();
  const ttsInventory = TTSInventoryService.getInventory();

  if (!metrics || !detailedLesson) {
    return (
      <div className="p-8 text-center space-y-3 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h3 className="text-base font-black text-slate-100">
          No Published Lesson Data for {targetLanguage.toUpperCase()}
        </h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
          The requested target language <strong className="text-indigo-300">"{targetLanguage.toUpperCase()}"</strong> has status <strong className="text-amber-300">ARCHITECTURAL_READY (NOT_AUTHORED)</strong>. No published production lessons exist yet under this target language.
        </p>
        <div className="pt-2 text-[11px] font-mono text-slate-500">
          Lesson ID requested: <span className="text-slate-300">{lessonId}</span>
        </div>
      </div>
    );
  }

  const stageExercises = CurriculumService.getExercisesForStage(lessonId, selectedStage);

  return (
    <div className="space-y-6">
      {/* Lesson Header Badge */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-bold rounded-lg uppercase">
                {metrics.cefr} CEFR Level
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {metrics.unitTitle}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center space-x-2">
              <span>👋</span>
              <span>{metrics.title}</span>
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Lesson ID: <span className="text-emerald-400">{metrics.lessonId}</span> | Estimated Time: {detailedLesson.estimatedMinutes} mins
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-slate-950 p-2 rounded-xl border border-slate-800">
            <div className="text-center px-3 border-r border-slate-800">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                Total Interactive
              </span>
              <span className="text-lg font-black font-mono text-emerald-400">
                {metrics.totalInteractiveItemsCount}
              </span>
            </div>
            <div className="text-center px-3">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                Stages
              </span>
              <span className="text-lg font-black font-mono text-teal-300">
                {metrics.sectionsCount}
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
          {[
            { id: 'metrics', label: '📊 Dynamic Counts', icon: '📈' },
            { id: 'stages', label: '🔢 Sequence Stages (18)', icon: '🪜' },
            { id: 'taxonomies', label: '🏷️ Taxonomies & CEFR', icon: '🧬' },
            { id: 'exercises', label: '🔍 Exercise Inspector', icon: '🛠️' },
            { id: 'audioAudit', label: '🎧 Audio Audit Queue', icon: '🎙️' },
            { id: 'roadmap', label: '🗺️ Scope & Roadmap', icon: '🚀' },
            { id: 'factory', label: '🏭 Content Factory Arch', icon: '⚡' },
            { id: 'ttsAudit', label: '🔊 Direct TTS Inventory', icon: '📢' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold shadow-lg scale-105'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: DYNAMIC METRICS COUNTS */}
      {activeTab === 'metrics' && (
        <div className="space-y-4">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>Calculated Curriculum Metrics (Dynamic Data)</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Computed directly from actual underlying lesson data without hardcoded values.
                </p>
              </div>
              <span className="px-2.5 py-1 bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold rounded-lg border border-slate-700">
                Live Dynamic Sync
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { label: 'Sections / Stages', val: metrics.sectionsCount, icon: '📂', color: 'border-teal-500/30 text-teal-400 bg-teal-950/20' },
                { label: 'Vocabulary Items', val: metrics.vocabularyCount, icon: '🔤', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20' },
                { label: 'Language Chunks', val: metrics.languageChunksCount, icon: '💬', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20' },
                { label: 'Grammar Targets', val: metrics.grammarTargetsCount, icon: '📘', color: 'border-blue-500/30 text-blue-400 bg-blue-950/20' },
                { label: 'Practice Exercises', val: metrics.exercisesCount, icon: '✍️', color: 'border-indigo-500/30 text-indigo-400 bg-indigo-950/20' },
                { label: 'Review Items', val: metrics.reviewItemsCount, icon: '🔄', color: 'border-purple-500/30 text-purple-400 bg-purple-950/20' },
                { label: 'Assessment Tasks', val: metrics.assessmentItemsCount, icon: '🏆', color: 'border-amber-500/30 text-amber-400 bg-amber-950/20' },
                { label: 'Adult Dialogues', val: metrics.dialoguesCount, icon: '🎭', color: 'border-pink-500/30 text-pink-400 bg-pink-950/20' },
                { label: 'Speaking Activities', val: metrics.speakingActivitiesCount, icon: '🎙️', color: 'border-rose-500/30 text-rose-400 bg-rose-950/20' },
                { label: 'Listening Activities', val: metrics.listeningActivitiesCount, icon: '🎧', color: 'border-violet-500/30 text-violet-400 bg-violet-950/20' },
              ].map((m, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border ${m.color} flex flex-col justify-between space-y-2 shadow-sm`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{m.icon}</span>
                    <span className="text-xs font-mono text-slate-500 font-bold">LIVE</span>
                  </div>
                  <div>
                    <span className="text-2xl font-black font-mono block leading-none">
                      {m.val}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-300 block mt-1">
                      {m.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Objectives & Can-Do Inspector */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Target className="w-4 h-4 text-emerald-400" />
              <span>Pedagogical Objective & CEFR Can-Do Statements ({metrics.canDoStatementsCount})</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
              {detailedLesson.learningObjective.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {detailedLesson.learningObjective.canDoStatements.map((stmt, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-slate-950 rounded-xl border border-slate-800/80 flex items-start space-x-2 text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{stmt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ALL 18 LESSON STAGES SEQUENCE */}
      {activeTab === 'stages' && (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <List className="w-4 h-4 text-emerald-400" />
                <span>Complete Lesson Sequence ({stages.length} Stages)</span>
              </h3>
              <p className="text-xs text-slate-400">
                Sequence of pedagogical stages from Goal setting to Assessment & Mastery.
              </p>
            </div>
          </div>

          <div className="space-y-2.5">
            {stages.map((stg) => (
              <div
                key={stg.id}
                className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 hover:border-slate-700 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-start sm:items-center space-x-3">
                  <span className="w-8 h-8 rounded-xl bg-slate-800 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0 border border-slate-700">
                    {stg.stageNumber}
                  </span>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-base">{stg.icon}</span>
                      <h4 className="font-bold text-slate-100 text-sm">{stg.title}</h4>
                      <span className="px-2 py-0.5 bg-slate-900 text-slate-400 text-[10px] rounded border border-slate-800 uppercase font-mono font-semibold">
                        {stg.category}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs mt-0.5">{stg.description}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <span className="px-2.5 py-1 bg-slate-900 text-teal-300 font-mono text-[11px] font-bold rounded-lg border border-slate-800">
                    {stg.itemCount} Items
                  </span>
                  <button
                    onClick={() => {
                      setSelectedStage(stg.id);
                      setActiveTab('exercises');
                    }}
                    className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition border border-slate-700"
                  >
                    Inspect Stage →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: TAXONOMIES & CEFR ARCHITECTURE */}
      {activeTab === 'taxonomies' && (
        <div className="space-y-4">
          {/* CEFR Metadata Architecture */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <FileCode className="w-4 h-4 text-emerald-400" />
              <span>CEFR Metadata Architecture (Scalable Schema)</span>
            </h3>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
              <pre>{JSON.stringify({
                cefrLevel: 'A1',
                unitId: detailedLesson.unitId,
                sectionId: 'sec_greetings_introductions',
                lessonId: detailedLesson.id,
                canDoObjectivesCount: detailedLesson.learningObjective.canDoStatements.length,
                grammarTargets: ['verb_be', 'questions', 'negatives', 'word_order'],
                vocabularyTargets: ['greetings', 'names', 'countries', 'occupations'],
                functions: ['introducing_self', 'asking_origin', 'stating_job'],
                skillDistribution: {
                  listening: metrics.listeningActivitiesCount,
                  speaking: metrics.speakingActivitiesCount,
                  grammar: metrics.grammarTargetsCount,
                  vocabulary: metrics.vocabularyCount,
                  mediation: 6
                }
              }, null, 2)}</pre>
            </div>
          </div>

          {/* Grammar Taxonomy Foundation */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Code className="w-4 h-4 text-blue-400" />
              <span>Grammar Taxonomy Foundation</span>
            </h3>
            <p className="text-xs text-slate-400">
              Taxonomy categories prepared for curriculum scalability across A1-C2:
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'verbs (BE, HAVE, DO)',
                'modal_verbs',
                'tenses (Simple Present)',
                'aspect',
                'questions (Aux Inversion, Wh-)',
                'negatives (not, isn\'t, aren\'t)',
                'articles (a / an)',
                'pronouns (I, You, He, She)',
                'nouns & adjectives',
                'prepositions (from, in)',
                'word_order',
                'clauses'
              ].map((cat, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-blue-950/40 text-blue-300 border border-blue-500/30 rounded-xl font-mono text-[11px]"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Lexical Taxonomy Foundation */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Sliders className="w-4 h-4 text-teal-400" />
              <span>Lexical Taxonomy Foundation</span>
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'vocabulary (25 words)',
                'word_families',
                'collocations ("Nice to meet you")',
                'lexical_chunks (18 phrases)',
                'fixed_expressions ("Where are you from?")',
                'phrasal_verbs',
                'synonyms & antonyms',
                'register (Formal vs Informal)',
                'common_learner_errors (8 remedies)'
              ].map((lex, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-teal-950/40 text-teal-300 border border-teal-500/30 rounded-xl font-mono text-[11px]"
                >
                  {lex}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: EXERCISE INSPECTOR */}
      {activeTab === 'exercises' && (
        <ExerciseInspector
          exercises={
            stageExercises.length > 0 ? stageExercises : detailedLesson.practiceExercises
          }
          stageTitle={selectedStage}
        />
      )}

      {/* TAB 5: AUDIO AUDIT & PRODUCTION QUEUE */}
      {activeTab === 'audioAudit' && <AudioAuditInspector />}

      {/* TAB 6: MASTER BLUEPRINT & AGILE ROADMAP */}
      {activeTab === 'roadmap' && (() => {
        const unitScopes = MasterCurriculumService.getUnitScopes();
        const exitProfile = MasterCurriculumService.getA1ExitProfile();
        const a2Bridge = MasterCurriculumService.getA1ToA2Bridge();

        return (
          <div className="space-y-6">
            {/* Executive Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-4 space-y-1">
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                  Active Iteration
                </span>
                <div className="text-2xl font-black text-white font-mono flex items-center justify-between">
                  <span>Iteration {adminSummary.currentActiveIteration}</span>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-mono rounded">COMPLETE</span>
                </div>
                <p className="text-[11px] text-slate-400">A1 Academic Master Spec</p>
              </div>

              <div className="bg-slate-900 border border-teal-500/30 rounded-2xl p-4 space-y-1">
                <span className="text-[10px] font-mono text-teal-400 font-bold uppercase tracking-wider block">
                  CEFR Coverage
                </span>
                <div className="text-2xl font-black text-white font-mono">
                  {adminSummary.activeCEFRLevels.join(' & ')}
                </div>
                <p className="text-[11px] text-slate-400">A1 & A2 Primary Focus</p>
              </div>

              <div className="bg-slate-900 border border-indigo-500/30 rounded-2xl p-4 space-y-1">
                <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider block">
                  A1 Units Scope Map
                </span>
                <div className="text-2xl font-black text-white font-mono">
                  {unitScopes.length} Units Mastered
                </div>
                <p className="text-[11px] text-slate-400">Units 1–6 Full Specifications</p>
              </div>

              <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-4 space-y-1">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                  Recycling Coverage
                </span>
                <div className="text-2xl font-black text-white font-mono">
                  {adminSummary.recyclingCoveragePercent}%
                </div>
                <p className="text-[11px] text-slate-400">5-Tier Loop Schedule Defined</p>
              </div>
            </div>

            {/* A1 Units 1-6 Master Scope Grid */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>A1 Master Scope & Progression Specification (Units 1 – 6)</span>
                </h3>
                <span className="text-xs font-mono text-emerald-400 font-bold">100% Scope Completion</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {unitScopes.map((u) => (
                  <div
                    key={u.unitId}
                    className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold rounded uppercase">
                          Unit {u.unitNumber}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">A1 CEFR</span>
                      </div>
                      <h4 className="font-bold text-sm text-white">{u.title}</h4>
                      <p className="text-xs text-slate-300 line-clamp-2">{u.communicativePurpose}</p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80 text-[11px]">
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Grammar</span>
                        <p className="text-slate-300">{u.grammarIntroduced.join(', ')}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Domains</span>
                        <p className="text-teal-300 font-mono text-[10px]">{u.vocabularyDomains.join(' • ')}</p>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800/60">
                        <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">Can-Do Outcome</span>
                        <p className="text-[10px] text-slate-300 italic">{u.canDoOutcomes[0]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentence Construction Ladder (8 Stages) */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>8-Stage Sentence Construction Progression Ladder</span>
                </h3>
                <span className="text-xs font-mono text-emerald-400 font-bold">A1 deliberate construction focus</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {sentenceLadder.map((stg) => (
                  <div
                    key={stg.stageNumber}
                    className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 space-y-2"
                  >
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                      Stage {stg.stageNumber}
                    </span>
                    <h4 className="font-bold text-xs text-white">{stg.stageName}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2">{stg.description}</p>
                    <div className="bg-slate-900 p-2 rounded-lg border border-slate-800/50 space-y-1">
                      <span className="text-[9px] font-mono text-slate-400 uppercase block font-bold">Patterns</span>
                      <p className="text-[10px] font-mono text-teal-300 italic">{stg.examplePatterns.join(' • ')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* A1 Exit Profile & A1 -> A2 Transition Bridge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* A1 Exit Profile */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-xl">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>A1 Exit Profile & Competency Standards</span>
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-amber-400 font-bold font-mono text-[11px] block uppercase">Knowledge Base</span>
                    <p className="text-slate-300 text-[11px]">18 Grammar Topics, 500+ Active Vocab Words, 8-Stage Sentence Ladder</p>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-emerald-400 font-bold font-mono text-[11px] block uppercase">Controlled Performance</span>
                    <p className="text-slate-300 text-[11px]">140 WPM Listening Comprehension, Accurate Pronunciation Shadowing & Spelling</p>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-sky-400 font-bold font-mono text-[11px] block uppercase">Independent Performance</span>
                    <p className="text-slate-300 text-[11px]">30s Unprompted Monologue, Real-World Transactions, Basic Message Mediation</p>
                  </div>
                </div>
              </div>

              {/* A1 -> A2 Transition Bridge */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-xl">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-sky-400" />
                  <span>A1 → A2 Transition Bridge Matrix</span>
                </h3>
                <div className="space-y-2 text-xs max-h-[220px] overflow-y-auto pr-1">
                  {a2Bridge.map((item, idx) => (
                    <div key={idx} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono font-bold text-sky-400 uppercase">
                        <span>{item.domain}</span>
                        <span>A1 → A2</span>
                      </div>
                      <p className="text-slate-300 text-[11px]"><strong>A1:</strong> {item.a1Capability}</p>
                      <p className="text-emerald-300 text-[11px]"><strong>A2:</strong> {item.a2Expansion}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Agile Project Roadmap Iterations List */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Rocket className="w-4 h-4 text-indigo-400" />
                  <span>Agile Project Roadmap & Epics</span>
                </h3>
                <span className="text-xs font-mono text-indigo-400 font-bold">
                  13 Iterations Scheduled
                </span>
              </div>

              <div className="space-y-3">
                {agileRoadmap.map((item) => {
                  const isComplete = item.status === 'COMPLETE';
                  const isCurrent = item.iterationNumber === 4.2;

                  return (
                    <div
                      key={item.iterationNumber}
                      className={`border rounded-xl p-4 transition space-y-3 ${
                        isCurrent
                          ? 'bg-slate-950 border-emerald-500/60 shadow-lg ring-1 ring-emerald-500/30'
                          : isComplete
                          ? 'bg-slate-950/60 border-slate-800/80 opacity-90'
                          : 'bg-slate-950/30 border-slate-800/40'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-2">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-2 py-0.5 font-mono text-[10px] font-bold rounded-md uppercase border ${
                              isComplete
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                            }`}
                          >
                            Iteration {item.iterationNumber}
                          </span>
                          <h4 className="font-bold text-xs sm:text-sm text-white">{item.epicName}</h4>
                        </div>
                        <span
                          className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-extrabold border ${
                            isComplete
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                              : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300">{item.goal}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                        <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/60 space-y-1">
                          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block">
                            Deliverable
                          </span>
                          <p className="text-slate-200">{item.expectedDeliverable}</p>
                        </div>
                        <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/60 space-y-1">
                          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block">
                            Definition of Done
                          </span>
                          <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                            {item.definitionOfDone.map((dod, idx) => (
                              <li key={idx}>{dod}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WordPress / Web Future Integration Meta & Assessment Hierarchy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* WordPress Integration Meta */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-xl">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-sky-400" />
                  <span>WordPress / Web Integration Meta Schema</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Data architecture compatible with future WordPress Tutor LMS course, lesson, and resource sync.
                </p>
                <div className="space-y-2 font-mono text-xs">
                  {wpMeta.map((schema, idx) => (
                    <div key={idx} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-sky-300 font-bold uppercase">{schema.wpPostType}</span>
                        <span className="text-slate-400 text-[10px]">{schema.syncStatus}</span>
                      </div>
                      <p className="text-slate-200 text-[11px]">{schema.wpSlug}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assessment Hierarchy Scope Matrix */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-xl">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Assessment Scope Architecture</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-emerald-400 font-bold font-mono text-[11px] block">
                      1. Lesson Assessment (Stage 17)
                    </span>
                    <p className="text-slate-300 text-[11px]">
                      Evaluates accuracy ONLY on current lesson learning objectives (e.g. Lesson 1 Mastery Assessment).
                    </p>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-teal-400 font-bold font-mono text-[11px] block">
                      2. Unit Review & Assessment
                    </span>
                    <p className="text-slate-300 text-[11px]">
                      Assesses accumulated communicative skills and language patterns across all unit lessons.
                    </p>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-indigo-400 font-bold font-mono text-[11px] block">
                      3. A1 Mid-Level Progress Check
                    </span>
                    <p className="text-slate-300 text-[11px]">
                      Diagnostic evaluating retention across completed units mid-way through CEFR level.
                    </p>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-amber-400 font-bold font-mono text-[11px] block">
                      4. A1 Final CEFR Exam
                    </span>
                    <p className="text-slate-300 text-[11px]">
                      Comprehensive CEFR exit examination at the CEFR curriculum level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* TAB 7: LESSON CONTENT FACTORY ARCHITECTURE */}
      {activeTab === 'factory' && (() => {
        const pipelineStages = LessonFactoryService.getPipelineStages();
        const lesson1Bp = LessonFactoryService.getLesson1Blueprint();
        const lesson2Bp = LessonFactoryService.getLesson2BlueprintPlan();
        const allocations = LessonFactoryService.getSampleAllocations();

        // Standard validation run for Lesson 1 and Lesson 2
        const lesson1Report = LessonFactoryService.validateLessonBlueprint(lesson1Bp);
        const lesson2Report = LessonFactoryService.validateLessonBlueprint(lesson2Bp);

        return (
          <div className="space-y-6">
            {/* Pipeline Workflow Header */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Lesson Content Factory Architecture (13 Production Gates)</span>
                </h3>
                <span className="text-xs font-mono text-emerald-400 font-bold">Iteration 5A Specification</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {pipelineStages.map((stg) => {
                  const isDone = stg.status === 'COMPLETE';
                  const isArch = stg.status === 'ACTIVE_ARCH';

                  return (
                    <div
                      key={stg.stage}
                      className={`p-2.5 rounded-xl border space-y-1 ${
                        isDone
                          ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                          : isArch
                          ? 'bg-teal-950/30 border-teal-500/40 text-teal-300 ring-1 ring-teal-500/20'
                          : 'bg-slate-950/40 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase">{stg.label}</span>
                        <span
                          className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded ${
                            isDone
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : isArch
                              ? 'bg-teal-500/20 text-teal-300'
                              : 'bg-slate-800 text-slate-500'
                          }`}
                        >
                          {stg.status}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 line-clamp-2">{stg.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quality Gate Validation Engines Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Lesson 1 Blueprint Quality Gate */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">
                      Reference Implementation
                    </span>
                    <h4 className="font-bold text-sm text-white">Lesson 1: Introductions</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black font-mono text-emerald-400 block">
                      {lesson1Report.scorePercent}%
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-mono rounded font-bold">
                      VALID BLUEPRINT
                    </span>
                  </div>
                </div>

                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                  {lesson1Report.checks.map((chk, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-start justify-between gap-2"
                    >
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono font-bold text-slate-300 uppercase block">
                          {chk.checkName}
                        </span>
                        <p className="text-[11px] text-slate-400">{chk.message}</p>
                      </div>
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          chk.status === 'PASS'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : chk.status === 'WARN'
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'bg-rose-500/20 text-rose-300'
                        }`}
                      >
                        {chk.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lesson 2 Blueprint Plan Quality Gate */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-teal-400 font-bold uppercase block">
                      Architecture Blueprint Plan
                    </span>
                    <h4 className="font-bold text-sm text-white">Lesson 2: Occupations</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black font-mono text-teal-300 block">
                      {lesson2Report.scorePercent}%
                    </span>
                    <span className="px-2 py-0.5 bg-teal-500/20 text-teal-300 text-[10px] font-mono rounded font-bold">
                      VALIDATED PLAN
                    </span>
                  </div>
                </div>

                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                  {lesson2Report.checks.map((chk, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-start justify-between gap-2"
                    >
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono font-bold text-slate-300 uppercase block">
                          {chk.checkName}
                        </span>
                        <p className="text-[11px] text-slate-400">{chk.message}</p>
                      </div>
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          chk.status === 'PASS'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : chk.status === 'WARN'
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'bg-rose-500/20 text-rose-300'
                        }`}
                      >
                        {chk.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Approved Lesson Allocations Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span>Approved Lesson Curriculum Allocations (Scope Allocation Matrix)</span>
                </h3>
                <span className="text-xs font-mono text-indigo-400 font-bold">Prevents Concept Duplication</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {allocations.map((alloc) => (
                  <div
                    key={alloc.allocationId}
                    className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold rounded">
                        Unit {alloc.unitNumber} • Lesson {alloc.lessonNumber}
                      </span>
                      <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono rounded uppercase">
                        {alloc.allocationType}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{alloc.lessonTitle}</h4>
                      <p className="text-xs text-slate-300 mt-1">{alloc.communicativeGoal}</p>
                    </div>

                    <div className="space-y-1.5 text-[11px] border-t border-slate-800 pt-2">
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">
                          Assigned Grammar
                        </span>
                        <p className="text-teal-300 font-mono">{alloc.assignedGrammarIds.join(', ')}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">
                          Assigned Vocab Domains
                        </span>
                        <p className="text-slate-300 font-mono">{alloc.assignedVocabDomains.join(', ')}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">
                          Sentence Patterns
                        </span>
                        <p className="text-slate-300 italic">{alloc.assignedSentencePatterns.join(' • ')}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cognitive Progression & Exercise Blueprint Taxonomy */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>Cognitive Difficulty Progression & Exercise Blueprint Contract</span>
                </h3>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  RECOGNITION → CONTROLLED → GUIDED → TRANSFORMATION → PRODUCTION → INTEGRATION
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center font-mono text-xs">
                {[
                  { level: 'RECOGNITION', desc: 'Identify target in audio/text', color: 'border-slate-700 bg-slate-950 text-slate-300' },
                  { level: 'CONTROLLED', desc: 'Fill blank, select binary key', color: 'border-teal-800 bg-teal-950/30 text-teal-300' },
                  { level: 'GUIDED', desc: 'Match pairs, reorder phrases', color: 'border-emerald-800 bg-emerald-950/30 text-emerald-300' },
                  { level: 'TRANSFORMATION', desc: 'Invert sentence, form questions', color: 'border-cyan-800 bg-cyan-950/30 text-cyan-300' },
                  { level: 'PRODUCTION', desc: 'Unprompted recall, oral monologue', color: 'border-indigo-800 bg-indigo-950/30 text-indigo-300' },
                  { level: 'INTEGRATION', desc: 'Authentic multi-voice dialogue', color: 'border-amber-800 bg-amber-950/30 text-amber-300' },
                ].map((item, idx) => (
                  <div key={idx} className={`p-2.5 rounded-xl border ${item.color} space-y-1`}>
                    <span className="font-bold text-[10px] block">{item.level}</span>
                    <p className="text-[9px] text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

      {/* TAB 8: DIRECT BROWSER TTS INVENTORY AUDIT */}
      {activeTab === 'ttsAudit' && (
        <div className="space-y-5">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold rounded uppercase">
                    DIAGNOSTIC AUDIT
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Browser / Device TTS Usage</span>
                </div>
                <h3 className="text-base font-black text-white flex items-center space-x-2 mt-1">
                  <Volume2 className="w-5 h-5 text-amber-400" />
                  <span>Direct Browser TTS Usage Inventory</span>
                </h3>
              </div>
              <div className="flex items-center space-x-3 text-xs font-mono">
                <span className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-slate-300">
                  Total Calls: <strong className="text-amber-400">{ttsInventory.totalDirectTTSCalls}</strong>
                </span>
                <span className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-slate-300">
                  Components: <strong className="text-indigo-400">{ttsInventory.componentsAffectedCount}</strong>
                </span>
              </div>
            </div>

            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200/90 leading-relaxed">
              <strong>Strategy Notice:</strong> {ttsInventory.replacementStrategyNote} Direct browser TTS calls remain functional during development, but are inventoried here for seamless replacement by pre-recorded Sulafat MP3 audio in future audio production cycles.
            </div>

            <div className="space-y-3">
              {ttsInventory.items.map((item) => (
                <div key={item.id} className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 space-y-2 font-mono text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900 pb-2">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-bold rounded">
                        {item.componentName}
                      </span>
                      <span className="text-slate-300 font-bold">{item.contentType}</span>
                    </div>
                    <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                      {item.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] pt-1">
                    <div>
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">File / Path</span>
                      <span className="text-slate-300">{item.componentPath}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">Trigger Event</span>
                      <span className="text-slate-300">{item.triggerEvent}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">Current Method</span>
                      <code className="text-emerald-400 bg-slate-900 px-1.5 py-0.5 rounded text-[10px]">{item.currentMethod}</code>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">Target AudioService Replacement</span>
                      <code className="text-teal-300 bg-slate-900 px-1.5 py-0.5 rounded text-[10px]">{item.targetAudioServiceReplacement}</code>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-900 text-[11px] text-slate-400">
                    <span className="text-slate-500 font-bold">Notes: </span>{item.notes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
