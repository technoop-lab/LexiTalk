import React, { useState } from 'react';
import { BookOpen, X, Volume2, Lightbulb, ChevronDown, Layers } from 'lucide-react';
import { CourseUnit, NativeLanguageCode } from '../types';
import { AudioService } from '../services/AudioService';
import { playSoundEffectEffect } from '../utils/audioUtils';
import {
  getGrammarTopicsForUnit,
  getGrammarSourceLabel,
  GrammarTopic,
} from '../services/GrammarLibraryService';

interface GrammarHandbookProps {
  unit: CourseUnit;
  userNativeLang?: NativeLanguageCode;
  onClose: () => void;
}

export const GrammarHandbook: React.FC<GrammarHandbookProps> = ({
  unit,
  userNativeLang = 'hi',
  onClose,
}) => {
  const [openTopicId, setOpenTopicId] = useState<string | null>(null);

  const ruleText =
    unit.guidebook.rulesByLang?.[userNativeLang] || unit.guidebook.keyGrammarRule;

  // Full unit grammar syllabus from the aggregated library
  // (every lesson's grammar block + curriculum blueprint points for this unit).
  const unitTopics: GrammarTopic[] = getGrammarTopicsForUnit(unit.id).filter(
    (t) => t.source !== 'guidebook',
  );

  const lessonSeq = (topic: GrammarTopic): number | null =>
    topic.lessonId ? unit.lessons.findIndex((l) => l.id === topic.lessonId) + 1 : null;

  const handlePlayAudio = (audioId?: string, text?: string) => {
    playSoundEffectEffect('tap');
    if (audioId) {
      AudioService.play(audioId, text);
    } else if (text) {
      AudioService.speak(text);
    }
  };

  return (
    <div
      id="grammar-handbook-modal"
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 select-none animate-fade-in"
    >
      <div className="bg-white dark:bg-[#0A1226] border border-[#D9E4FF] dark:border-slate-800 rounded-[28px] sm:rounded-3xl p-5 sm:p-6 max-w-md w-full shadow-2xl relative space-y-4 max-h-[88vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition cursor-pointer"
          aria-label="Close Handbook"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-xl bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-200 dark:border-indigo-500/30">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
            {unit.cefr} Guidebook • Unit {unit.unitNumber}
          </span>
        </div>

        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-display">
          {unit.guidebook.title}
        </h2>

        {/* Key Grammar Rule Card */}
        <div className="bg-gradient-to-br from-indigo-50 via-slate-50 to-emerald-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-emerald-950/30 border border-indigo-200 dark:border-indigo-500/30 p-4 rounded-2xl space-y-1.5 shadow-xs">
          <div className="flex items-center space-x-1.5 text-indigo-700 dark:text-indigo-300">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-wider block">
              Key Grammar Rule (मुख्य व्याकरण नियम)
            </span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
            {ruleText}
          </p>
        </div>

        {/* ===================== IN-DEPTH UNIT GRAMMAR SYLLABUS ===================== */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Complete Unit Grammar (इकाई का पूरा व्याकरण)
            </h3>
            <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
              {unitTopics.length} topics
            </span>
          </div>

          {unitTopics.length === 0 && (
            <p className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-3.5">
              No structured grammar topics indexed for this unit yet — the key rule and examples
              above still cover the essentials.
            </p>
          )}

          {unitTopics.map((topic) => {
            const isOpen = openTopicId === topic.id;
            const seq = lessonSeq(topic);

            return (
              <div
                key={topic.id}
                className="bg-slate-50 dark:bg-slate-950/80 border border-[#D9E4FF] dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-xs hover:border-indigo-300 transition"
              >
                <button
                  onClick={() => {
                    playSoundEffectEffect('tap');
                    setOpenTopicId(isOpen ? null : topic.id);
                  }}
                  className="w-full flex items-center justify-between gap-2.5 p-3.5 text-left cursor-pointer"
                >
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <span className="shrink-0 px-2 py-0.5 rounded-lg bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 text-[10px] font-black border border-indigo-200 dark:border-indigo-500/30 font-mono">
                      {seq !== null ? `L${seq}` : 'BP'}
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                      {topic.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 space-y-3 border-t border-[#D9E4FF] dark:border-slate-800 pt-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                        {getGrammarSourceLabel(topic.source)}
                      </span>
                      {topic.lessonTitle && (
                        <span className="text-[9px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 truncate">
                          · {topic.lessonTitle}
                        </span>
                      )}
                    </div>

                    {topic.concept && (
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {topic.concept}
                      </p>
                    )}
                    {topic.conceptHi && (
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed font-hindi">
                        {topic.conceptHi}
                      </p>
                    )}

                    {topic.structure && (
                      <div className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 font-mono text-[11px] text-emerald-400 font-bold">
                        {topic.structure}
                      </div>
                    )}

                    {topic.patterns && topic.patterns.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {topic.patterns.map((pat, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-[10px] font-bold border border-[#D9E4FF] dark:border-slate-800"
                          >
                            {pat}
                          </span>
                        ))}
                      </div>
                    )}

                    {topic.contractions && topic.contractions.length > 0 && (
                      <div className="space-y-1.5">
                        <p className="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Contractions (संक्षिप्त रूप)
                        </p>
                        {topic.contractions.slice(0, 4).map((row, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between gap-2 bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-xl px-3 py-2"
                          >
                            <div className="min-w-0">
                              <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 line-through">
                                {row.full}
                              </p>
                              <p className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                                {row.contracted}
                              </p>
                              {row.meaningHi && (
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-hindi">
                                  {row.meaningHi}
                                </p>
                              )}
                            </div>
                            <button
                              onClick={() => handlePlayAudio(undefined, row.contracted)}
                              className="p-2 bg-indigo-100 dark:bg-indigo-500/20 hover:bg-indigo-200 dark:hover:bg-indigo-500/30 text-indigo-600 dark:text-indigo-300 rounded-xl transition cursor-pointer shrink-0"
                              title="Listen to contraction"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {topic.commonErrors && topic.commonErrors.length > 0 && (
                      <div className="space-y-1">
                        <p className="text-[9px] font-black uppercase tracking-wider text-rose-500">
                          Common Errors (आम ग़लतियाँ)
                        </p>
                        <ul className="space-y-1">
                          {topic.commonErrors.map((err, idx) => (
                            <li
                              key={idx}
                              className="text-[11px] text-rose-600 dark:text-rose-400 font-medium flex items-start space-x-1.5"
                            >
                              <span className="font-black">✗</span>
                              <span>{err}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Real-World Examples */}
        <div className="space-y-2.5 pt-1">
          <h3 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Example Sentences & Usage (उदाहरणात्मक वाक्य)
          </h3>

          {unit.guidebook.examples.map((ex, idx) => {
            const translation = ex.translationsByLang?.[userNativeLang] || ex.translation;

            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-950/80 border border-[#D9E4FF] dark:border-slate-800/80 p-3.5 rounded-2xl space-y-1.5 text-xs shadow-xs hover:border-indigo-300 transition"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm">
                    "{ex.english}"
                  </span>
                  <button
                    onClick={() => handlePlayAudio((ex as any).audioId, ex.english)}
                    className="p-1.5 bg-indigo-100 dark:bg-indigo-500/20 hover:bg-indigo-200 dark:hover:bg-indigo-500/30 text-indigo-600 dark:text-indigo-300 rounded-lg transition cursor-pointer shrink-0"
                    title="Listen to model audio"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-hindi italic text-xs">
                  "{translation}"
                </p>
                <p className="text-emerald-700 dark:text-emerald-400 text-[10px] font-medium pt-1 border-t border-[#D9E4FF] dark:border-slate-800/80">
                  💡 {ex.explanation}
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-indigo-500/25 transition cursor-pointer active:scale-95 mt-2"
        >
          Got It, Let's Practice! (समझ गया)
        </button>
      </div>
    </div>
  );
};
