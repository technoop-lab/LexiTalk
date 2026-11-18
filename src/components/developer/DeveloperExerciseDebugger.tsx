import React, { useState } from 'react';
import {
  UserAcademyProfile,
  Exercise,
  ExerciseOption,
} from '../../types';
import { CURIOSITY_UNITS } from '../../data/curiosityCurriculum';
import { CurriculumService } from '../../services/CurriculumService';
import {
  DeveloperTestService,
  DiagnosticEvaluationReport,
} from '../../services/DeveloperTestService';
import {
  normalizeExercise,
  getCorrectAnswerDisplay,
  ExerciseUserResponse,
} from '../../services/ExerciseRegistry';
import {
  Zap,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Search,
  Filter,
  Code,
  Sparkles,
  Volume2,
  Layers,
  Check,
  X,
  Play,
  ArrowLeft,
  Sliders,
  HelpCircle
} from 'lucide-react';

interface DeveloperExerciseDebuggerProps {
  user: UserAcademyProfile;
  initialLessonId?: string;
  onBack: () => void;
}

export const DeveloperExerciseDebugger: React.FC<DeveloperExerciseDebuggerProps> = ({
  user,
  initialLessonId = 'lesson_a1_1_1',
  onBack,
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>('unit_a1_1');
  const [selectedLessonId, setSelectedLessonId] = useState<string>(initialLessonId);
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('ALL');
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>('');
  
  // Interactive test response state
  const [typedInput, setTypedInput] = useState<string>('');
  const [selectedOptId, setSelectedOptId] = useState<string | null>(null);
  const [constructedWords, setConstructedWords] = useState<string[]>([]);
  const [spokenInput, setSpokenInput] = useState<string>('');

  const [evaluationReport, setEvaluationReport] = useState<DiagnosticEvaluationReport | null>(null);
  const [showRawJson, setShowRawJson] = useState<boolean>(false);

  // Load exercises for current selected lesson
  const detailed = CurriculumService.getDetailedLesson(selectedLessonId, user.learningLanguage || 'en');
  const lessonExercises: Exercise[] = detailed
    ? [
        ...(detailed.practiceExercises || []),
        ...(detailed.reviewExercises || []),
        ...(detailed.assessmentExercises || []),
      ]
    : [];

  const filteredExercises = lessonExercises.filter((ex) => {
    if (selectedTypeFilter !== 'ALL') {
      const norm = normalizeExercise(ex);
      if (norm.type !== selectedTypeFilter && ex.type !== selectedTypeFilter) return false;
    }
    return true;
  });

  const activeExercise: Exercise | null =
    filteredExercises.find((e) => e.id === selectedExerciseId) ||
    filteredExercises[0] ||
    lessonExercises[0] ||
    null;

  const currentUnit = CURIOSITY_UNITS.find((u) => u.id === selectedUnitId) || CURIOSITY_UNITS[0];

  const handleRunEvaluation = () => {
    if (!activeExercise) return;

    const response: ExerciseUserResponse = {
      typedAnswer: typedInput,
      selectedOptionId: selectedOptId,
      constructedWords: constructedWords.length > 0 ? constructedWords : undefined,
      spokenText: spokenInput,
    };

    const report = DeveloperTestService.testExerciseAnswer(activeExercise, response);
    setEvaluationReport(report);
  };

  const handleFillCorrectAnswer = () => {
    if (!activeExercise) return;
    const norm = normalizeExercise(activeExercise);

    if (norm.options && norm.options.length > 0) {
      const correct = norm.options.find((o) => o.isCorrect);
      if (correct) {
        setSelectedOptId(correct.id);
        setTypedInput(correct.text);
      }
    } else if (norm.targetSentence) {
      setTypedInput(norm.targetSentence);
      setConstructedWords(norm.targetSentence.split(' '));
      setSpokenInput(norm.targetSentence);
    } else if (norm.correctAnswer) {
      const ans = Array.isArray(norm.correctAnswer) ? norm.correctAnswer[0] : String(norm.correctAnswer);
      setTypedInput(ans);
      setConstructedWords(ans.split(' '));
      setSpokenInput(ans);
    }
  };

  const handleFillIncorrectAnswer = () => {
    if (!activeExercise) return;
    const norm = normalizeExercise(activeExercise);

    if (norm.options && norm.options.length > 0) {
      const incorrect = norm.options.find((o) => !o.isCorrect);
      if (incorrect) {
        setSelectedOptId(incorrect.id);
        setTypedInput(incorrect.text);
      }
    } else {
      setTypedInput('incorrect random text');
      setConstructedWords(['incorrect', 'words']);
      setSpokenInput('incorrect pronunciation');
    }
  };

  const handleClearAnswer = () => {
    setTypedInput('');
    setSelectedOptId(null);
    setConstructedWords([]);
    setSpokenInput('');
    setEvaluationReport(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 space-y-5 max-w-7xl mx-auto font-sans">
      {/* Header Bar */}
      <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="p-2.5 bg-slate-800 hover:bg-slate-750 text-slate-200 rounded-xl transition border border-slate-700 flex items-center space-x-1.5 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Back</span>
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold rounded uppercase">
                EXERCISE DEBUGGER & EVALUATION LAB
              </span>
              <span className="text-xs text-slate-400 font-mono">Answer Registry & Diagnostics</span>
            </div>
            <h1 className="text-xl font-black text-white tracking-tight flex items-center space-x-2">
              <span>⚡</span>
              <span>Exercise Diagnostic Suite</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono">
          <button
            onClick={() => setShowRawJson(!showRawJson)}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition flex items-center space-x-1.5"
          >
            <Code className="w-3.5 h-3.5 text-indigo-400" />
            <span>{showRawJson ? 'Hide Raw JSON' : 'Inspect JSON'}</span>
          </button>
        </div>
      </div>

      {/* Selectors Bar */}
      <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs shadow-lg">
        {/* Unit Selector */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono uppercase text-slate-400 font-bold">1. Unit:</label>
          <select
            value={selectedUnitId}
            onChange={(e) => {
              setSelectedUnitId(e.target.value);
              const u = CURIOSITY_UNITS.find((unit) => unit.id === e.target.value);
              if (u && u.lessons.length > 0) {
                setSelectedLessonId(u.lessons[0].id);
                handleClearAnswer();
              }
            }}
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 px-3 py-1.5 rounded-xl font-medium focus:outline-none focus:border-amber-500"
          >
            {CURIOSITY_UNITS.map((u) => (
              <option key={u.id} value={u.id}>
                {u.cefr} • Unit {u.unitNumber}: {u.title}
              </option>
            ))}
          </select>
        </div>

        {/* Lesson Selector */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono uppercase text-slate-400 font-bold">2. Lesson:</label>
          <select
            value={selectedLessonId}
            onChange={(e) => {
              setSelectedLessonId(e.target.value);
              handleClearAnswer();
            }}
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 px-3 py-1.5 rounded-xl font-medium focus:outline-none focus:border-amber-500"
          >
            {currentUnit?.lessons.map((l) => (
              <option key={l.id} value={l.id}>
                {l.icon} {l.id} — {l.title}
              </option>
            ))}
          </select>
        </div>

        {/* Exercise Type Filter */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono uppercase text-slate-400 font-bold">3. Type Filter:</label>
          <select
            value={selectedTypeFilter}
            onChange={(e) => setSelectedTypeFilter(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 px-3 py-1.5 rounded-xl font-medium focus:outline-none focus:border-amber-500"
          >
            <option value="ALL">All Types ({lessonExercises.length} items)</option>
            <option value="multiple_choice">Multiple Choice</option>
            <option value="fill_blank">Fill in Blank</option>
            <option value="word_ordering">Word Ordering</option>
            <option value="translation">Translation</option>
            <option value="listening">Listening</option>
            <option value="speaking">Speaking</option>
            <option value="error_correction">Error Correction</option>
            <option value="dialogue_completion">Dialogue Completion</option>
          </select>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Exercise Items List */}
        <div className="lg:col-span-4 space-y-2 max-h-[640px] overflow-y-auto pr-1 no-scrollbar">
          {filteredExercises.length === 0 ? (
            <div className="p-8 text-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-400 text-xs">
              No exercises match filter.
            </div>
          ) : (
            filteredExercises.map((ex, idx) => {
              const isSelected = activeExercise?.id === ex.id;
              const norm = normalizeExercise(ex);

              return (
                <div
                  key={ex.id || idx}
                  onClick={() => {
                    setSelectedExerciseId(ex.id);
                    handleClearAnswer();
                  }}
                  className={`p-3 rounded-2xl border transition cursor-pointer space-y-1.5 ${
                    isSelected
                      ? 'bg-amber-950/40 border-amber-500/70 ring-2 ring-amber-500/20 shadow-lg'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 bg-slate-800 text-amber-300 rounded">
                      {norm.type}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{ex.id}</span>
                  </div>
                  <p className="text-xs font-bold text-white line-clamp-2">
                    {ex.prompt || ex.targetSentence || 'Exercise'}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Exercise Testing & Evaluation Panel */}
        <div className="lg:col-span-8 space-y-4">
          {activeExercise && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-5 shadow-2xl">
              {/* Exercise Meta Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold rounded uppercase">
                      TYPE: {normalizeExercise(activeExercise).type}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{activeExercise.id}</span>
                  </div>
                  <h2 className="text-base font-bold text-white mt-1">
                    {activeExercise.prompt || 'Translate / Complete the target item'}
                  </h2>
                </div>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={handleFillCorrectAnswer}
                    className="px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[11px] font-bold rounded-lg border border-emerald-500/30 transition"
                  >
                    Auto-Fill Correct
                  </button>
                  <button
                    onClick={handleFillIncorrectAnswer}
                    className="px-2.5 py-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-[11px] font-bold rounded-lg border border-rose-500/30 transition"
                  >
                    Auto-Fill Wrong
                  </button>
                  <button
                    onClick={handleClearAnswer}
                    className="p-1 text-slate-400 hover:text-white transition"
                    title="Clear response"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Interactive Workspace depending on exercise type */}
              <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-3 text-xs">
                <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                  Simulate Learner Response:
                </label>

                {/* If Multiple Choice Options */}
                {activeExercise.options && activeExercise.options.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeExercise.options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedOptId(opt.id)}
                        className={`p-3 rounded-xl border text-left flex items-center justify-between transition ${
                          selectedOptId === opt.id
                            ? 'bg-amber-500/20 border-amber-500 text-amber-200 font-bold'
                            : 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-850'
                        }`}
                      >
                        <span>{opt.text}</span>
                        {opt.isCorrect && (
                          <span className="text-[9px] font-mono px-1 bg-emerald-500/20 text-emerald-300 rounded">
                            (Key)
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {/* Text / Typed Input */}
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono">Typed or Spoken Response Text:</span>
                  <input
                    type="text"
                    placeholder="Enter or test typed response..."
                    value={typedInput}
                    onChange={(e) => setTypedInput(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 font-mono text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Ground Truth Display */}
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Ground Truth Expected:</span>
                  <strong className="text-emerald-400">
                    {getCorrectAnswerDisplay(activeExercise)}
                  </strong>
                </div>

                <button
                  onClick={handleRunEvaluation}
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-lg transition active:scale-98"
                >
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>Run Diagnostic Evaluation</span>
                </button>
              </div>

              {/* Diagnostic Evaluation Result Output */}
              {evaluationReport && (
                <div
                  className={`p-4 rounded-2xl border space-y-3 ${
                    evaluationReport.isCorrect
                      ? 'bg-emerald-950/30 border-emerald-500/40'
                      : 'bg-rose-950/30 border-rose-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {evaluationReport.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-rose-400" />
                      )}
                      <span className="font-black text-sm text-white">
                        {evaluationReport.isCorrect ? 'EVALUATION PASSED (CORRECT)' : 'EVALUATION FAILED (INCORRECT)'}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-bold px-2 py-0.5 bg-slate-900 text-slate-300 rounded-md border border-slate-700">
                      XP: +{evaluationReport.scoreXp}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">SUBMITTED VALUE:</span>
                      <span className="text-slate-100 font-bold">{evaluationReport.submittedAnswer}</span>
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">EXPECTED VALUE:</span>
                      <span className="text-emerald-300 font-bold">{evaluationReport.expectedAnswer}</span>
                    </div>
                  </div>

                  {evaluationReport.explanation && (
                    <div className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                      <strong className="text-indigo-300">Explanation:</strong> {evaluationReport.explanation}
                    </div>
                  )}

                  {/* Diagnostic Checks Flags */}
                  <div className="space-y-1 text-xs">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                      Diagnostic Checks:
                    </span>
                    {evaluationReport.diagnostics.potentialFalseNegative && (
                      <div className="p-2 bg-rose-500/20 text-rose-300 rounded-lg text-[11px] font-bold">
                        ⚠️ False Negative Warning: User string matches stripped text.
                      </div>
                    )}
                    {evaluationReport.diagnostics.potentialFalsePositive && (
                      <div className="p-2 bg-rose-500/20 text-rose-300 rounded-lg text-[11px] font-bold">
                        ⚠️ False Positive Warning: Empty answer marked correct.
                      </div>
                    )}
                    {evaluationReport.diagnostics.details.map((d, i) => (
                      <div key={i} className="text-[11px] text-slate-400 font-mono">
                        • {d}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Raw JSON Inspector */}
              {showRawJson && (
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto max-h-60">
                  <pre>{JSON.stringify(activeExercise, null, 2)}</pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
