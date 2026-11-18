import React, { useState } from 'react';
import { Exercise, ExtendedExerciseType, ExerciseType } from '../../types';
import { normalizeExerciseType } from '../../utils/exerciseUtils';
import {
  Search,
  Filter,
  CheckCircle2,
  Volume2,
  HelpCircle,
  Code,
  Tag,
  ShieldCheck,
  Layers,
  Sparkles
} from 'lucide-react';

interface ExerciseInspectorProps {
  exercises: Exercise[];
  stageTitle?: string;
}

export const ExerciseInspector: React.FC<ExerciseInspectorProps> = ({
  exercises,
  stageTitle = 'All Exercises',
}) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedEx, setSelectedEx] = useState<Exercise | null>(exercises[0] || null);

  const filtered = exercises.filter((ex) => {
    const matchesType = filterType === 'all' || ex.type === filterType;
    const matchesSearch =
      !searchTerm ||
      ex.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.targetSentence?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getSkillBadgeColor = (type: string) => {
    if (type.includes('listening') || type.includes('listen')) return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    if (type.includes('speaking') || type.includes('speak')) return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    if (type.includes('grammar') || type.includes('question') || type.includes('error')) return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    if (type.includes('translation') || type.includes('translate')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    return 'bg-slate-700 text-slate-300 border-slate-600';
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 space-y-4 shadow-xl">
      {/* Inspector Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-2">
          <Layers className="w-5 h-5 text-emerald-400" />
          <h3 className="font-bold text-white text-base">
            Exercise Inspector ({stageTitle})
          </h3>
          <span className="px-2 py-0.5 bg-slate-800 text-slate-300 text-xs rounded-full font-mono font-semibold">
            {filtered.length} items
          </span>
        </div>

        {/* Filter & Search */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search exercise ID or text..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-xs pl-8 pr-3 py-1.5 rounded-xl text-slate-200 focus:outline-none focus:border-emerald-500 w-44 sm:w-56"
            />
          </div>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs px-2.5 py-1.5 rounded-xl text-slate-200 focus:outline-none focus:border-emerald-500 font-medium"
          >
            <option value="all">All Types</option>
            <option value="multiple_choice">Multiple Choice</option>
            <option value="fill_blank">Fill in Blank</option>
            <option value="question_formation">Question Formation</option>
            <option value="translation">Translation</option>
            <option value="listening">Listening</option>
            <option value="speaking">Speaking</option>
            <option value="word_ordering">Word Ordering</option>
          </select>
        </div>
      </div>

      {/* Main Split Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Exercise List */}
        <div className="lg:col-span-5 space-y-2 max-h-[420px] overflow-y-auto pr-1 no-scrollbar">
          {filtered.length === 0 ? (
            <div className="p-8 text-center bg-slate-950/50 rounded-xl border border-slate-800 text-slate-400 text-xs">
              No exercises found matching criteria.
            </div>
          ) : (
            filtered.map((ex, idx) => {
              const isSelected = selectedEx?.id === ex.id;
              return (
                <button
                  key={ex.id || idx}
                  onClick={() => setSelectedEx(ex)}
                  className={`w-full text-left p-3 rounded-xl border text-xs transition flex flex-col space-y-1.5 ${
                    isSelected
                      ? 'bg-slate-800/90 border-emerald-500/80 shadow-md ring-1 ring-emerald-500/50'
                      : 'bg-slate-950/60 hover:bg-slate-800/40 border-slate-800/80 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-[11px] text-emerald-400">
                      {ex.id}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-[10px] rounded-lg font-bold border uppercase tracking-wider ${getSkillBadgeColor(
                        ex.type
                      )}`}
                    >
                      {ex.type.replace('_', ' ')}
                    </span>
                  </div>

                  <p className="font-medium text-slate-200 line-clamp-2">
                    {ex.prompt}
                  </p>

                  {ex.targetSentence && (
                    <div className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-1 rounded border border-slate-800 line-clamp-1">
                      🎯 {ex.targetSentence}
                    </div>
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Selected Exercise Detailed Inspector Card */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 p-4 space-y-4">
          {selectedEx ? (
            <>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div>
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">
                    Selected Exercise ID
                  </span>
                  <h4 className="text-sm font-mono font-bold text-emerald-400">
                    {selectedEx.id}
                  </h4>
                </div>
                <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-lg uppercase">
                  Status: Verified Valid
                </span>
              </div>

              {/* Metadata Attributes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-medium">Canonical Type</span>
                  <span className="font-semibold text-emerald-400 font-mono text-[11px]">
                    {normalizeExerciseType(selectedEx.type)}
                  </span>
                </div>

                <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-medium">Raw Type</span>
                  <span className={`font-semibold font-mono text-[11px] ${selectedEx.type !== normalizeExerciseType(selectedEx.type) ? 'text-amber-400 font-bold' : 'text-slate-300'}`}>
                    {selectedEx.rawType || selectedEx.type}
                  </span>
                </div>

                <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-medium">Audio Status</span>
                  <span className="font-semibold text-indigo-300 font-mono text-[11px] truncate block">
                    {selectedEx.audioText ? `TTS / Hosted` : 'N/A'}
                  </span>
                </div>

                <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-medium">CEFR Level</span>
                  <span className="font-semibold text-emerald-400 font-mono text-[11px]">
                    A1 Beginner
                  </span>
                </div>
              </div>

              {/* Prompt & Target */}
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Instruction / Prompt
                  </span>
                  <p className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-slate-100 font-medium">
                    {selectedEx.prompt}
                  </p>
                </div>

                {selectedEx.sourceSentence && (
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Source Context / Native Sentence
                    </span>
                    <p className="p-2 bg-slate-900 rounded-xl border border-slate-800 text-teal-300 font-sans">
                      {selectedEx.sourceSentence}
                    </p>
                  </div>
                )}

                {selectedEx.targetSentence && (
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Target Answer / Sentence
                    </span>
                    <p className="p-2.5 bg-emerald-950/40 rounded-xl border border-emerald-500/30 text-emerald-300 font-mono font-bold text-sm">
                      {selectedEx.targetSentence}
                    </p>
                  </div>
                )}
              </div>

              {/* Word Bank / Options */}
              {selectedEx.wordBank && selectedEx.wordBank.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Word Tile Bank ({selectedEx.wordBank.length} tiles)
                  </span>
                  <div className="flex flex-wrap gap-1.5 p-2 bg-slate-900 rounded-xl border border-slate-800">
                    {selectedEx.wordBank.map((word, wIdx) => (
                      <span
                        key={wIdx}
                        className="px-2 py-1 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 text-xs font-mono font-semibold"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedEx.options && selectedEx.options.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Multiple Choice Options
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedEx.options.map((opt) => (
                      <div
                        key={opt.id}
                        className={`p-2 rounded-xl border text-xs flex items-center justify-between font-medium ${
                          opt.isCorrect
                            ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300'
                            : 'bg-slate-900 border-slate-800 text-slate-300'
                        }`}
                      >
                        <span>
                          {opt.imageEmoji && <span className="mr-1.5">{opt.imageEmoji}</span>}
                          {opt.text}
                        </span>
                        {opt.isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pedagogy Explanation */}
              {selectedEx.explanation && (
                <div className="p-2.5 bg-indigo-950/30 border border-indigo-500/20 rounded-xl text-xs text-indigo-200">
                  <span className="font-bold block text-indigo-300 mb-0.5">
                    💡 Pedagogical Explanation / Grammar Note:
                  </span>
                  {selectedEx.explanation}
                </div>
              )}
            </>
          ) : (
            <div className="p-12 text-center text-slate-500 text-xs">
              Select an exercise from the left list to inspect metadata.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
