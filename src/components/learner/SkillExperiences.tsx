import React, { useEffect, useRef, useState } from 'react';
import { Headphones, Mic, BookOpen, PenTool, Volume2, Check, RotateCcw, Sparkles, ChevronRight, ArrowLeft } from 'lucide-react';
import { UserAcademyProfile } from '../../types';
import { AudioService } from '../../services/AudioService';
import { SpeechService } from '../../services/speech/SpeechService';
import { getActiveEnglishAccent, playSoundEffectEffect, speakTextOffline } from '../../utils/audioUtils';
import { WRITING_TASKS, SpeakingKind, ListeningSet, ReadingQuestion } from '../../data/skills/skillContent';
import { getSpeakingPrompts, getListeningSets, getReadingPassages } from '../../data/skills/skillSources';

interface SkillExperiencesProps {
  user: UserAcademyProfile;
}

type SkillTab = 'listening' | 'speaking' | 'reading' | 'writing';

const SPEAKING_LABEL: Record<SpeakingKind, string> = {
  read_aloud: 'Read aloud',
  answer: 'Answer the question',
  describe: 'Describe (about 1 minute)',
};

const SPEAKING_PROMPTS = getSpeakingPrompts();
const LISTENING_SETS = getListeningSets();
const READING_PASSAGES = getReadingPassages();

const toWords = (s: string): string[] =>
  s.toLowerCase().replace(/[^a-z' ]/g, ' ').split(/\s+/).filter(Boolean);

const cardClass =
  'bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm dark:shadow-xl';
const labelClass = 'text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider';
const countClass = 'text-[10px] font-bold text-slate-500 dark:text-slate-400';
const primaryBtn =
  'w-full py-3.5 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md cursor-pointer btn-press active:scale-[0.98] disabled:opacity-50';
const softBtn =
  'px-3 py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-500/20 dark:hover:bg-indigo-500/30 text-indigo-700 dark:text-indigo-200 rounded-xl text-xs font-bold cursor-pointer btn-press inline-flex items-center gap-1.5 disabled:opacity-50';
const amberBox =
  'p-3 rounded-2xl border bg-amber-50 border-amber-300 text-amber-800 dark:bg-amber-950/60 dark:border-amber-500/40 dark:text-amber-300 text-xs font-bold';
const emeraldBox =
  'p-3 rounded-2xl border bg-emerald-50 border-emerald-300 text-emerald-800 dark:bg-emerald-950/60 dark:border-emerald-500/40 dark:text-emerald-300 text-xs font-bold';

type OptionState = 'idle' | 'picked' | 'right' | 'wrong';
const optionClass = (state: OptionState) =>
  `w-full text-left p-3 rounded-2xl border text-xs font-bold transition cursor-pointer btn-press disabled:cursor-default ${
    state === 'right'
      ? 'bg-emerald-50 border-emerald-400 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
      : state === 'wrong'
      ? 'bg-rose-50 border-rose-400 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
      : state === 'picked'
      ? 'bg-indigo-50 border-indigo-400 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-200'
      : 'bg-white border-[#D9E4FF] text-slate-800 hover:bg-slate-50 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-200'
  }`;

const isRightReading = (q: ReadingQuestion, a: number | string | undefined): boolean =>
  a !== undefined && a === q.answer;

export const SkillExperiences: React.FC<SkillExperiencesProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<SkillTab>('listening');
  const speechProvider = SpeechService.getProvider();

  // Speaking
  const [spIndex, setSpIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [spChecked, setSpChecked] = useState(false);

  // Listening
  const [liSet, setLiSet] = useState<number | null>(null);
  const [liAnswers, setLiAnswers] = useState<(number | null)[]>([]);
  const [liSubmitted, setLiSubmitted] = useState(false);
  const [liPlaying, setLiPlaying] = useState(false);
  const listenStopRef = useRef(false);

  // Reading
  const [rdPassage, setRdPassage] = useState<number | null>(null);
  const [rdSection, setRdSection] = useState(0);
  const [rdAnswers, setRdAnswers] = useState<Record<string, number | string>>({});
  const [rdSubmitted, setRdSubmitted] = useState(false);

  // Writing
  const [wrIndex, setWrIndex] = useState(0);
  const [wrText, setWrText] = useState('');
  const [wrChecked, setWrChecked] = useState(false);
  const [wrShowModel, setWrShowModel] = useState(false);

  useEffect(() => {
    return () => {
      speechProvider.stop().catch(() => undefined);
      listenStopRef.current = true;
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // ---------- Speaking ----------
  const sp = SPEAKING_PROMPTS[spIndex];
  const spWords = toWords(spokenText);
  const targetWords = toWords(sp.prompt);
  const uniqueTarget = Array.from(new Set(targetWords));
  const missingWords = uniqueTarget.filter((w) => !spWords.includes(w));
  const accuracy = uniqueTarget.length
    ? Math.round(((uniqueTarget.length - missingWords.length) / uniqueTarget.length) * 100)
    : 0;
  const spPassed = sp.kind === 'read_aloud' ? accuracy >= 80 : spWords.length >= sp.minWords;

  const resetSpeaking = () => {
    if (isRecording) speechProvider.stop().catch(() => undefined);
    setIsRecording(false);
    setSpokenText('');
    setSpChecked(false);
    setSpeechError(null);
  };

  const startRecording = async () => {
    playSoundEffectEffect('tap');
    setSpeechError(null);
    setSpChecked(false);
    const available = await speechProvider.isAvailable();
    if (!available) {
      setSpeechError('Speech recognition is not available on this device. You can still practise the Listening, Reading and Writing tabs.');
      return;
    }
    speechProvider.onResult((res) => setSpokenText(res.transcript));
    speechProvider.onError((err) => {
      setIsRecording(false);
      setSpeechError(err.message);
    });
    speechProvider.onEnd(() => setIsRecording(false));
    try {
      setSpokenText('');
      await speechProvider.start({ language: getActiveEnglishAccent(), interimResults: true });
      setIsRecording(true);
    } catch (e: any) {
      setIsRecording(false);
      setSpeechError(e?.message || 'Unable to start the microphone.');
    }
  };

  const stopRecording = async () => {
    playSoundEffectEffect('tap');
    setIsRecording(false);
    await speechProvider.stop();
  };

  const renderSpeaking = () => (
    <div className={cardClass}>
      <div className="flex items-center justify-between">
        <span className={labelClass}>{SPEAKING_LABEL[sp.kind]}</span>
        <span className={countClass}>
          {spIndex + 1} of {SPEAKING_PROMPTS.length}
        </span>
      </div>
      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display leading-snug">
        {sp.prompt}
      </h3>

      {sp.kind === 'read_aloud' && (
        <button
          onClick={() => {
            playSoundEffectEffect('tap');
            AudioService.speakText(sp.prompt);
          }}
          className={softBtn}
        >
          <Volume2 className="w-3.5 h-3.5" /> Hear the model
        </button>
      )}

      <div className="text-center py-3">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="w-16 h-16 rounded-full flex items-center justify-center transition shadow-lg mx-auto cursor-pointer btn-press bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] text-white shadow-indigo-500/30 hover:scale-105"
          >
            <Mic className="w-7 h-7" />
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="w-16 h-16 rounded-full flex items-center justify-center transition shadow-lg mx-auto cursor-pointer btn-press bg-rose-500 animate-pulse text-white shadow-rose-500/40 ring-4 ring-rose-500/20"
          >
            <Mic className="w-7 h-7" />
          </button>
        )}
        <span className="block text-xs text-slate-500 dark:text-slate-400 font-bold mt-2.5">
          {isRecording ? 'Listening... tap the red button to stop' : 'Tap the microphone and speak'}
        </span>
      </div>

      {speechError && <div className={amberBox}>{speechError}</div>}

      {spokenText && (
        <div className={emeraldBox}>
          Heard: "{spokenText}"
        </div>
      )}

      {!isRecording && spokenText.trim() && !spChecked && (
        <button onClick={() => setSpChecked(true)} className={primaryBtn}>
          Check my answer
        </button>
      )}

      {spChecked && (
        <div className={spPassed ? emeraldBox : amberBox}>
          {sp.kind === 'read_aloud' ? (
            <>
              <p>Accuracy: {accuracy}%. {spPassed ? 'Well done.' : 'Practise again.'}</p>
              {missingWords.length > 0 && <p>Missing or unclear: {missingWords.join(', ')}</p>}
            </>
          ) : (
            <>
              <p>
                You spoke {spWords.length} words (aim for at least {sp.minWords}).{' '}
                {spPassed ? 'Good length.' : 'Speak a little longer next time.'}
              </p>
              <p className="font-medium mt-1">
                {sp.kind === 'answer'
                  ? 'Tip: answer the question directly, then give one reason or example.'
                  : 'Tip: cover who, what, where and why. Use past tenses for past events.'}
              </p>
            </>
          )}
        </div>
      )}

      <div className="flex gap-2">
        <button onClick={resetSpeaking} className={softBtn}>
          <RotateCcw className="w-3.5 h-3.5" /> Try again
        </button>
        <button
          onClick={() => {
            resetSpeaking();
            setSpIndex((i) => (i + 1) % SPEAKING_PROMPTS.length);
          }}
          className={softBtn}
        >
          Next prompt <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );

  // ---------- Listening ----------
  const playConversation = async (set: ListeningSet) => {
    if (liPlaying) return;
    playSoundEffectEffect('tap');
    listenStopRef.current = false;
    setLiPlaying(true);
    for (const line of set.lines) {
      if (listenStopRef.current) break;
      await speakTextOffline(line.text, getActiveEnglishAccent(), 0.9);
    }
    setLiPlaying(false);
  };

  const openListeningSet = (index: number) => {
    setLiSet(index);
    setLiAnswers(LISTENING_SETS[index].questions.map(() => null));
    setLiSubmitted(false);
  };

  const closeListeningSet = () => {
    listenStopRef.current = true;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    setLiPlaying(false);
    setLiSet(null);
  };

  const renderListening = () => {
    if (liSet === null) {
      return (
        <div className="space-y-3">
          <p className="text-xs text-slate-600 dark:text-slate-400 font-bold">
            Listen to each conversation, then answer the questions. The transcript appears after you submit.
          </p>
          {LISTENING_SETS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => openListeningSet(i)}
              className={`${cardClass} w-full text-left flex items-center justify-between cursor-pointer btn-press`}
            >
              <div className="space-y-1">
                <p className="text-sm font-black text-slate-900 dark:text-white font-display">{s.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold">
                  {s.setting} · {s.questions.length} questions
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
            </button>
          ))}
        </div>
      );
    }

    const set = LISTENING_SETS[liSet];
    const score = liAnswers.filter((a, i) => a !== null && a === set.questions[i].answer).length;
    const allAnswered = liAnswers.every((a) => a !== null);

    return (
      <div className={cardClass}>
        <div className="flex items-center justify-between">
          <button onClick={closeListeningSet} className={softBtn}>
            <ArrowLeft className="w-3.5 h-3.5" /> All conversations
          </button>
          <span className={countClass}>Score {liSubmitted ? `${score} / ${set.questions.length}` : '-'}</span>
        </div>
        <span className={labelClass}>Listening: {set.setting}</span>
        <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">{set.title}</h3>

        <button onClick={() => playConversation(set)} disabled={liPlaying} className={primaryBtn}>
          <Volume2 className="w-4 h-4 inline mr-1.5" />
          {liPlaying ? 'Playing...' : 'Play conversation'}
        </button>

        <div className="space-y-4">
          {set.questions.map((q, qi) => (
            <div key={qi} className="space-y-2">
              <p className="text-xs font-black text-slate-900 dark:text-white">
                {qi + 1}. {q.question}
              </p>
              {q.options.map((opt, oi) => {
                const picked = liAnswers[qi] === oi;
                const correct = oi === q.answer;
                let state: OptionState = picked ? 'picked' : 'idle';
                if (liSubmitted && correct) state = 'right';
                else if (liSubmitted && picked) state = 'wrong';
                return (
                  <button
                    key={opt}
                    disabled={liSubmitted}
                    onClick={() =>
                      setLiAnswers((prev) => prev.map((a, i) => (i === qi ? oi : a)))
                    }
                    className={optionClass(state)}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {!liSubmitted ? (
          <button onClick={() => setLiSubmitted(true)} disabled={!allAnswered} className={primaryBtn}>
            Submit answers
          </button>
        ) : (
          <>
            <div className={score === set.questions.length ? emeraldBox : amberBox}>
              You got {score} out of {set.questions.length} right.
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 space-y-2">
              <span className={labelClass}>Transcript</span>
              {set.lines.map((line, i) => (
                <p key={i} className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                  <span className="font-black">{line.speaker}:</span> {line.text}
                </p>
              ))}
            </div>
            <button
              onClick={() => openListeningSet(liSet)}
              className={softBtn}
            >
              <RotateCcw className="w-3.5 h-3.5" /> Try this conversation again
            </button>
          </>
        )}
      </div>
    );
  };

  // ---------- Reading ----------
  const rdAllQuestions =
    rdPassage === null
      ? []
      : READING_PASSAGES[rdPassage].sections.flatMap((s, si) =>
          s.questions.map((q, qi) => ({ key: `${si}-${qi}`, q }))
        );
  const rdAllAnswered = rdAllQuestions.every(({ key }) => rdAnswers[key] !== undefined);
  const rdScore = rdAllQuestions.filter(({ key, q }) => isRightReading(q, rdAnswers[key])).length;

  const closeReadingPassage = () => {
    setRdPassage(null);
    setRdAnswers({});
    setRdSubmitted(false);
    setRdSection(0);
  };

  const renderReadingQuestion = (q: ReadingQuestion, key: string) => {
    const options: string[] = q.kind === 'mcq' ? q.options : ['True', 'False', 'Not Given'];
    const chosen = rdAnswers[key];
    return (
      <div key={key} className="space-y-2">
        <p className="text-xs font-black text-slate-900 dark:text-white">{q.prompt}</p>
        {options.map((opt, oi) => {
          const value: number | string = q.kind === 'mcq' ? oi : opt;
          const picked = chosen === value;
          const correct = q.kind === 'mcq' ? oi === q.answer : opt === q.answer;
          let state: OptionState = picked ? 'picked' : 'idle';
          if (rdSubmitted && correct) state = 'right';
          else if (rdSubmitted && picked) state = 'wrong';
          return (
            <button
              key={opt}
              disabled={rdSubmitted}
              onClick={() => setRdAnswers((a) => ({ ...a, [key]: value }))}
              className={optionClass(state)}
            >
              {opt}
            </button>
          );
        })}
      </div>
    );
  };

  const renderReading = () => {
    if (rdPassage === null) {
      return (
        <div className="space-y-3">
          <p className="text-xs text-slate-600 dark:text-slate-400 font-bold">
            Read each passage. Each one has two sections and four questions.
          </p>
          {READING_PASSAGES.map((p, i) => (
            <button
              key={p.id}
              onClick={() => {
                setRdPassage(i);
                setRdSection(0);
                setRdAnswers({});
                setRdSubmitted(false);
              }}
              className={`${cardClass} w-full text-left flex items-center justify-between cursor-pointer btn-press`}
            >
              <div className="space-y-1">
                <p className="text-sm font-black text-slate-900 dark:text-white font-display">{p.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold">
                  {p.sections.length} sections · {p.sections.reduce((n, s) => n + s.questions.length, 0)} questions
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
            </button>
          ))}
        </div>
      );
    }

    const passage = READING_PASSAGES[rdPassage];
    const section = passage.sections[rdSection];

    return (
      <div className={cardClass}>
        <div className="flex items-center justify-between">
          <button onClick={closeReadingPassage} className={softBtn}>
            <ArrowLeft className="w-3.5 h-3.5" /> All passages
          </button>
          <span className={countClass}>
            Score {rdSubmitted ? `${rdScore} / ${rdAllQuestions.length}` : '-'}
          </span>
        </div>
        <span className={labelClass}>Reading</span>
        <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">{passage.title}</h3>

        <div className="grid grid-cols-2 gap-2">
          {passage.sections.map((s, si) => (
            <button
              key={s.label}
              onClick={() => setRdSection(si)}
              className={`py-2 rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer btn-press ${
                rdSection === si
                  ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-[#D9E4FF] dark:border-slate-800">
          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            {section.text}
          </p>
          <button
            onClick={() => {
              playSoundEffectEffect('tap');
              AudioService.speakText(section.text);
            }}
            className={`${softBtn} mt-3`}
          >
            <Volume2 className="w-3.5 h-3.5" /> Read aloud
          </button>
        </div>

        <div className="space-y-5">
          {section.questions.map((q, qi) => renderReadingQuestion(q, `${rdSection}-${qi}`))}
        </div>

        {!rdSubmitted ? (
          <button onClick={() => setRdSubmitted(true)} disabled={!rdAllAnswered} className={primaryBtn}>
            Submit all answers
          </button>
        ) : (
          <>
            <div className={rdScore === rdAllQuestions.length ? emeraldBox : amberBox}>
              You got {rdScore} out of {rdAllQuestions.length} right. Green is correct; red is your wrong answer.
            </div>
            <button
              onClick={() => {
                setRdAnswers({});
                setRdSubmitted(false);
              }}
              className={softBtn}
            >
              <RotateCcw className="w-3.5 h-3.5" /> Try this passage again
            </button>
          </>
        )}
      </div>
    );
  };

  // ---------- Writing ----------
  const wr = WRITING_TASKS[wrIndex];
  const wrWordCount = wrText.trim() ? wrText.trim().split(/\s+/).length : 0;
  const wrNormalized = toWords(wrText).join(' ');
  const wrMissing = wr.keywords.filter((k) => !wrNormalized.includes(k));
  const wrPassed = wrWordCount >= wr.minWords && wrMissing.length === 0;

  const renderWriting = () => (
    <div className={cardClass}>
      <div className="flex items-center justify-between">
        <span className={labelClass}>Guided Writing & Production</span>
        <span className={countClass}>
          Prompt {wrIndex + 1} of {WRITING_TASKS.length}
        </span>
      </div>
      <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display leading-snug">{wr.prompt}</h3>

      <textarea
        value={wrText}
        onChange={(e) => {
          setWrText(e.target.value);
          setWrChecked(false);
        }}
        placeholder="Type your answer here..."
        rows={4}
        className="w-full bg-slate-50 dark:bg-slate-950 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400"
      />
      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">
        Words: {wrWordCount} (at least {wr.minWords})
      </p>

      <button onClick={() => wrText.trim() && setWrChecked(true)} disabled={!wrText.trim()} className={primaryBtn}>
        Check my writing (जांचें)
      </button>

      {wrChecked && (
        <div className={wrPassed ? emeraldBox : amberBox}>
          {wrPassed ? (
            <p>
              <Check className="inline w-4 h-4" /> Good work. You used all the target phrases.
            </p>
          ) : (
            <>
              {wrWordCount < wr.minWords && <p>Write at least {wr.minWords} words. You have {wrWordCount}.</p>}
              {wrMissing.length > 0 && <p>Use these phrases: {wrMissing.map((k) => `"${k}"`).join(', ')}</p>}
            </>
          )}
        </div>
      )}

      <div className="flex gap-2">
        <button onClick={() => setWrShowModel((v) => !v)} className={`${softBtn} flex-1 justify-center`}>
          <Sparkles className="w-3.5 h-3.5" /> {wrShowModel ? 'Hide model answer' : 'Show model answer'}
        </button>
        <button
          onClick={() => {
            setWrIndex((i) => (i + 1) % WRITING_TASKS.length);
            setWrText('');
            setWrChecked(false);
            setWrShowModel(false);
          }}
          className={`${softBtn} flex-1 justify-center`}
        >
          <RotateCcw className="w-3.5 h-3.5" /> Next prompt
        </button>
      </div>
      {wrShowModel && (
        <p className="text-xs text-slate-700 dark:text-slate-300 italic bg-slate-50 dark:bg-slate-950 p-3 rounded-2xl border border-[#D9E4FF] dark:border-slate-800">
          {wr.model}
        </p>
      )}
    </div>
  );

  // ---------- Layout ----------
  return (
    <div className="flex flex-col space-y-5 p-3 sm:p-5 pb-24 text-slate-900 dark:text-slate-100 max-w-xl mx-auto animate-fade-in">
      <div className="grid grid-cols-4 gap-1.5 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 shadow-sm dark:shadow-md">
        {[
          { id: 'listening', label: 'Listening', icon: Headphones },
          { id: 'speaking', label: 'Speaking', icon: Mic },
          { id: 'reading', label: 'Reading', icon: BookOpen },
          { id: 'writing', label: 'Writing', icon: PenTool },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playSoundEffectEffect('tap');
                if (isRecording) speechProvider.stop().catch(() => undefined);
                setIsRecording(false);
                setActiveTab(tab.id as SkillTab);
              }}
              className={`py-2 px-1 rounded-xl text-xs font-bold transition flex flex-col items-center space-y-1 cursor-pointer btn-press ${
                isActive
                  ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white shadow-md shadow-indigo-500/25 font-black'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {activeTab === 'listening' && renderListening()}
      {activeTab === 'speaking' && renderSpeaking()}
      {activeTab === 'reading' && renderReading()}
      {activeTab === 'writing' && renderWriting()}
    </div>
  );
};
