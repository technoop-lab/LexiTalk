import React, { useState, useMemo, useEffect } from 'react';
import { AudioAuditService, AudioAuditItem, AudioAuditSummary, AudioAssetStatus, AudioPriority } from '../../services/AudioAuditService';
import { AudioService, AudioQALogEvent } from '../../services/AudioService';
import {
  Volume2,
  CheckCircle2,
  AlertTriangle,
  Radio,
  Search,
  Filter,
  Mic,
  User,
  ShieldAlert,
  Layers,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Info,
  Bug,
  Trash2
} from 'lucide-react';

export const AudioAuditInspector: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'audit' | 'qa_logs'>('audit');
  const [qaLogs, setQaLogs] = useState<AudioQALogEvent[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [priorityFilter, setPriorityFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const refreshLogs = () => {
    setQaLogs(AudioService.getQALogs());
  };

  useEffect(() => {
    refreshLogs();
    const interval = setInterval(refreshLogs, 1500);
    return () => clearInterval(interval);
  }, []);

  const summary: AudioAuditSummary = useMemo(() => {
    return AudioAuditService.auditLesson1();
  }, []);

  // Compute Voice Breakdown dynamically
  const voiceBreakdown = useMemo(() => {
    const map: Record<string, { voiceId: string; voiceName: string; total: number; ready: number; missing: number; role: string }> = {};

    summary.queue.forEach((item) => {
      if (!map[item.voiceId]) {
        map[item.voiceId] = {
          voiceId: item.voiceId,
          voiceName: item.requiredVoiceName,
          total: 0,
          ready: 0,
          missing: 0,
          role: item.speakerRole
        };
      }
      map[item.voiceId].total += 1;
      if (item.status === 'READY') {
        map[item.voiceId].ready += 1;
      } else {
        map[item.voiceId].missing += 1;
      }
    });

    return Object.values(map);
  }, [summary]);

  // Compute Priority counts dynamically
  const priorityCounts = useMemo(() => {
    const p0 = summary.queue.filter((i) => i.priority === 'P0');
    const p1 = summary.queue.filter((i) => i.priority === 'P1');
    const p2 = summary.queue.filter((i) => i.priority === 'P2');
    const p3 = summary.queue.filter((i) => i.priority === 'P3');

    return {
      p0: { total: p0.length, missing: p0.filter((i) => i.status === 'MISSING').length, ready: p0.filter((i) => i.status === 'READY').length },
      p1: { total: p1.length, missing: p1.filter((i) => i.status === 'MISSING').length, ready: p1.filter((i) => i.status === 'READY').length },
      p2: { total: p2.length, missing: p2.filter((i) => i.status === 'MISSING').length, ready: p2.filter((i) => i.status === 'READY').length },
      p3: { total: p3.length, missing: p3.filter((i) => i.status === 'MISSING').length, ready: p3.filter((i) => i.status === 'READY').length },
    };
  }, [summary]);

  // Filtered Queue
  const filteredQueue = useMemo(() => {
    return summary.queue.filter((item) => {
      // Status filter
      if (statusFilter !== 'ALL') {
        if (statusFilter === 'FALLBACK') {
          if (item.status !== 'MISSING') return false; // MISSING items trigger Fallback TTS
        } else if (item.status !== statusFilter) {
          return false;
        }
      }

      // Priority filter
      if (priorityFilter !== 'ALL' && item.priority !== priorityFilter) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchId = item.audioId.toLowerCase().includes(q);
        const matchText = item.text.toLowerCase().includes(q);
        const matchStage = item.stage.toLowerCase().includes(q);
        const matchVoice = item.voiceId.toLowerCase().includes(q) || item.requiredVoiceName.toLowerCase().includes(q);
        const matchChar = item.characterId ? item.characterId.toLowerCase().includes(q) : false;
        return matchId || matchText || matchStage || matchVoice || matchChar;
      }

      return true;
    });
  }, [summary, statusFilter, priorityFilter, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Navigation Header Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('audit')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
            activeTab === 'audit'
              ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Volume2 className="w-4 h-4" />
          <span>Asset Inventory Audit</span>
        </button>

        <button
          onClick={() => setActiveTab('qa_logs')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
            activeTab === 'qa_logs'
              ? 'bg-amber-500 text-slate-950 shadow-md font-black'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Bug className="w-4 h-4" />
          <span>Live QA Audio Failure Logs ({qaLogs.length})</span>
        </button>
      </div>

      {activeTab === 'qa_logs' ? (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <Bug className="w-4 h-4 text-amber-400" />
                <span>Physical QA & Developer Audio Logs</span>
              </h3>
              <p className="text-xs text-slate-400">
                Live capture of all audio play requests, URL resolutions, and fallbacks during device testing.
              </p>
            </div>
            <button
              onClick={() => {
                AudioService.clearQALogs();
                setQaLogs([]);
              }}
              className="px-3 py-1.5 bg-slate-800 hover:bg-rose-950 hover:text-rose-300 text-slate-400 rounded-xl text-xs font-bold flex items-center space-x-1.5 border border-slate-700 transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Logs</span>
            </button>
          </div>

          {qaLogs.length === 0 ? (
            <div className="p-8 text-center bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <p className="text-sm font-bold text-slate-200">No Audio Playback Failures Recorded</p>
              <p className="text-xs text-slate-500">
                Trigger audio in dialogues, exercises, or vocabulary to monitor events in real-time.
              </p>
            </div>
          ) : (
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {qaLogs.map((log, index) => (
                <div
                  key={index}
                  className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-1.5 hover:border-slate-700"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded font-bold">
                        {log.sectionId}
                      </span>
                      <span className="text-teal-400 font-bold">{log.audioId}</span>
                      {log.dialogueId && <span className="text-slate-400">({log.dialogueId})</span>}
                      {log.exerciseId && <span className="text-slate-400">({log.exerciseId})</span>}
                    </div>
                    <span className="text-[10px] text-slate-500">
                      {new Date(log.timestamp).toLocaleTimeString()}
                    </span>
                  </div>

                  <p className="text-rose-300 text-[11px]">Reason: {log.failureReason}</p>

                  {log.resolvedUrl && (
                    <p className="text-slate-400 text-[10px] truncate">
                      Resolved Path: <span className="text-slate-300">{log.resolvedUrl}</span>
                    </p>
                  )}

                  <div className="flex items-center space-x-2 text-[10px]">
                    <span className="text-slate-500">Lesson: {log.lessonId}</span>
                    <span className="text-slate-500">•</span>
                    <span className={log.fallbackTriggered ? 'text-emerald-400 font-bold' : 'text-rose-400'}>
                      Fallback: {log.fallbackTriggered ? (log.fallbackEngine === 'native_android_tts' ? 'Android Native TTS' : 'Web Speech API') : 'None'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Dynamic Summary Cards */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Volume2 className="w-4 h-4 text-emerald-400" />
              <span>Lesson 1 Audio Asset Audit (A1 Unit 1 Lesson 1)</span>
            </h3>
            <p className="text-xs text-slate-400">
              Live dynamic verification against <code className="text-emerald-400">AUDIO_MANIFEST</code> and lesson content.
            </p>
          </div>
          <span className="px-3 py-1 bg-slate-800 text-teal-300 font-mono text-[11px] font-bold rounded-xl border border-slate-700/80 w-fit">
            Audio Audit Active
          </span>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
              Total Audio Required
            </span>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-black font-mono text-white">
                {summary.totalRequired}
              </span>
              <span className="text-[10px] text-slate-500 font-mono">Items</span>
            </div>
          </div>

          <div className="p-3.5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 flex flex-col justify-between">
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block flex items-center justify-between">
              <span>Production Audio Ready</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </span>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-black font-mono text-emerald-400">
                {summary.readyCount}
              </span>
              <span className="text-[10px] text-emerald-500 font-mono">
                ({Math.round((summary.readyCount / (summary.totalRequired || 1)) * 100)}%)
              </span>
            </div>
          </div>

          <div className="p-3.5 bg-rose-950/20 rounded-xl border border-rose-500/30 flex flex-col justify-between">
            <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider block flex items-center justify-between">
              <span>Missing Prod Audio</span>
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            </span>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-black font-mono text-rose-400">
                {summary.missingCount}
              </span>
              <span className="text-[10px] text-rose-500 font-mono">Pending TTS Queue</span>
            </div>
          </div>

          <div className="p-3.5 bg-amber-950/20 rounded-xl border border-amber-500/30 flex flex-col justify-between">
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block flex items-center justify-between">
              <span>Fallback TTS Items</span>
              <Radio className="w-3.5 h-3.5 text-amber-400" />
            </span>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-black font-mono text-amber-400">
                {summary.fallbackCount}
              </span>
              <span className="text-[10px] text-amber-500 font-mono">Web Speech API</span>
            </div>
          </div>
        </div>

        {/* Priority Breakdown Cards */}
        <div className="space-y-2 pt-1">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
            Priority Tier Breakdown (Production Queue Tiers)
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="px-1.5 py-0.5 bg-rose-500/20 text-rose-300 font-mono font-bold text-[10px] rounded border border-rose-500/30">
                  P0 Core
                </span>
                <span className="text-[10px] font-mono text-slate-400">{priorityCounts.p0.total} Total</span>
              </div>
              <p className="text-[11px] text-slate-300 font-bold">Vocab & Core Phrases</p>
              <div className="text-[10px] font-mono text-slate-400 flex justify-between pt-1">
                <span className="text-emerald-400">✓ {priorityCounts.p0.ready} Ready</span>
                <span className="text-rose-400">⚠️ {priorityCounts.p0.missing} Missing</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-300 font-mono font-bold text-[10px] rounded border border-amber-500/30">
                  P1 Dialogue/Listening
                </span>
                <span className="text-[10px] font-mono text-slate-400">{priorityCounts.p1.total} Total</span>
              </div>
              <p className="text-[11px] text-slate-300 font-bold">Multi-voice & Audios</p>
              <div className="text-[10px] font-mono text-slate-400 flex justify-between pt-1">
                <span className="text-emerald-400">✓ {priorityCounts.p1.ready} Ready</span>
                <span className="text-amber-400">⚠️ {priorityCounts.p1.missing} Missing</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 font-mono font-bold text-[10px] rounded border border-blue-500/30">
                  P2 Grammar/Practice
                </span>
                <span className="text-[10px] font-mono text-slate-400">{priorityCounts.p2.total} Total</span>
              </div>
              <p className="text-[11px] text-slate-300 font-bold">Examples & Remedies</p>
              <div className="text-[10px] font-mono text-slate-400 flex justify-between pt-1">
                <span className="text-emerald-400">✓ {priorityCounts.p2.ready} Ready</span>
                <span className="text-blue-400">⚠️ {priorityCounts.p2.missing} Missing</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="px-1.5 py-0.5 bg-slate-800 text-slate-300 font-mono font-bold text-[10px] rounded border border-slate-700">
                  P3 Slow/Enrichment
                </span>
                <span className="text-[10px] font-mono text-slate-400">{priorityCounts.p3.total} Total</span>
              </div>
              <p className="text-[11px] text-slate-300 font-bold">Slow Speed Variants</p>
              <div className="text-[10px] font-mono text-slate-400 flex justify-between pt-1">
                <span className="text-emerald-400">✓ {priorityCounts.p3.ready} Ready</span>
                <span className="text-slate-400">⚠️ {priorityCounts.p3.missing} Missing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Architecture Assignment Breakdown */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center space-x-2">
          <Mic className="w-4 h-4 text-emerald-400" />
          <span>Voice Architecture & Profile Assignments ({voiceBreakdown.length} Voice Profiles)</span>
        </h3>
        <p className="text-xs text-slate-400">
          Detected voice assignments mapped across teacher narratives and multi-character adult dialogues:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          {voiceBreakdown.map((vb) => (
            <div
              key={vb.voiceId}
              className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start justify-between gap-2"
            >
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-bold text-emerald-300 block">
                  {vb.voiceId}
                </span>
                <p className="font-semibold text-slate-200 text-xs">{vb.voiceName}</p>
                <span className="inline-block px-2 py-0.5 bg-slate-900 text-slate-400 font-mono text-[10px] rounded border border-slate-800 uppercase">
                  Role: {vb.role}
                </span>
              </div>

              <div className="text-right font-mono shrink-0">
                <span className="text-xs font-bold text-white block">{vb.total} Items</span>
                <span className="text-[10px] text-emerald-400 block">✓ {vb.ready} Ready</span>
                <span className="text-[10px] text-rose-400 block">⚠️ {vb.missing} Missing</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audio Production Queue & Inspector */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Audio Production Queue ({filteredQueue.length} / {summary.totalRequired})</span>
            </h3>
            <p className="text-xs text-slate-400">
              Deterministic itemized queue for approved TTS generation steps.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search audioId, text, voice..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl pl-8 pr-3 py-1.5 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Status Filter */}
          <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar py-1">
            <span className="text-[11px] font-mono text-slate-400 font-bold mr-1">Status:</span>
            {['ALL', 'READY', 'MISSING', 'FALLBACK'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition font-mono ${
                  statusFilter === st
                    ? 'bg-emerald-500 text-slate-950 font-black'
                    : 'bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Priority Filter */}
          <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar py-1">
            <span className="text-[11px] font-mono text-slate-400 font-bold mr-1">Priority:</span>
            {['ALL', 'P0', 'P1', 'P2', 'P3'].map((pr) => (
              <button
                key={pr}
                onClick={() => setPriorityFilter(pr)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition font-mono ${
                  priorityFilter === pr
                    ? 'bg-teal-500 text-slate-950 font-black'
                    : 'bg-slate-950 hover:bg-slate-800 text-slate-400 border border-slate-800'
                }`}
              >
                {pr}
              </button>
            ))}
          </div>
        </div>

        {/* Item List */}
        <div className="space-y-2">
          {filteredQueue.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs font-mono bg-slate-950 rounded-xl border border-slate-800">
              No audio items match the current filter criteria.
            </div>
          ) : (
            filteredQueue.map((item) => {
              const isExpanded = expandedItemId === item.audioId;
              const isReady = item.status === 'READY';

              return (
                <div
                  key={item.audioId}
                  className={`bg-slate-950 rounded-xl border transition ${
                    isReady
                      ? 'border-slate-800 hover:border-emerald-500/40'
                      : 'border-slate-800/80 hover:border-rose-500/40'
                  }`}
                >
                  <div
                    onClick={() => setExpandedItemId(isExpanded ? null : item.audioId)}
                    className="p-3 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex items-start sm:items-center space-x-3">
                      {/* Priority Tag */}
                      <span
                        className={`px-2 py-0.5 font-mono text-[10px] font-extrabold rounded border shrink-0 ${
                          item.priority === 'P0'
                            ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                            : item.priority === 'P1'
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            : item.priority === 'P2'
                            ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                      >
                        {item.priority}
                      </span>

                      {/* Content */}
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-emerald-400 font-bold text-xs">
                            {item.audioId}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">
                            • Stage: {item.stage}
                          </span>
                        </div>
                        <p className="text-slate-200 font-medium text-xs mt-0.5 line-clamp-1">
                          "{item.text}"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0">
                      {/* Status Badge */}
                      {isReady ? (
                        <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold rounded-lg border border-emerald-500/30 flex items-center space-x-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>READY</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 bg-rose-500/20 text-rose-300 font-mono text-[10px] font-bold rounded-lg border border-rose-500/30 flex items-center space-x-1">
                          <AlertTriangle className="w-3 h-3 text-rose-400" />
                          <span>MISSING (TTS FALLBACK)</span>
                        </span>
                      )}

                      <span className="text-slate-500">
                        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Detail Panel */}
                  {isExpanded && (
                    <div className="px-3 pb-3 pt-1 border-t border-slate-800/80 bg-slate-900/40 rounded-b-xl space-y-2 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
                          <span className="text-slate-500 block">Target Voice Profile:</span>
                          <span className="text-teal-300 font-bold">{item.voiceId}</span> ({item.requiredVoiceName})
                        </div>

                        <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
                          <span className="text-slate-500 block">Speaker Role / Character:</span>
                          <span className="text-slate-200 font-bold">{item.speakerRole}</span>
                          {item.characterId && <span className="text-amber-400"> [{item.characterId}]</span>}
                        </div>
                      </div>

                      {item.remotePath && (
                        <div className="p-2 bg-emerald-950/20 rounded-lg border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                          <span className="text-slate-400">Remote Hosted File: </span>
                          <span>{item.remotePath}</span>
                        </div>
                      )}

                      {item.notes && (
                        <p className="text-slate-400 text-[11px] italic">
                          Notes: {item.notes}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  )}
</div>
);
};
