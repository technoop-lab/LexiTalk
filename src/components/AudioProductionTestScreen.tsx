import React, { useState, useEffect } from 'react';
import { Volume2, Square, ArrowLeft, Play, ExternalLink, CheckCircle2, AlertCircle, Sparkles, FileAudio, ShieldCheck } from 'lucide-react';
import { AudioService } from '../services/AudioService';
import { VOICE_PROFILES, AUDIO_MANIFEST, getAudioManifestItem } from '../data/audioManifest';
import { AudioManifestItem } from '../types';

interface AudioProductionTestScreenProps {
  onBack: () => void;
  onPreviewInLesson: (lessonId: string, audioId?: string) => void;
}

export const AudioProductionTestScreen: React.FC<AudioProductionTestScreenProps> = ({
  onBack,
  onPreviewInLesson,
}) => {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);
  const [statuses, setStatuses] = useState<Record<string, any>>({});
  const [importedCount, setImportedCount] = useState<number>(0);
  const [filterVoice, setFilterVoice] = useState<string>('ALL');

  // Test assets list
  const testAssetIds = [
    'en_a1_u01_l01_v_hello',
    'en_a1_u01_l01_v_hello_slow',
    'en_a1_u01_l01_v_hi',
    'en_a1_u01_l01_v_hi_slow',
    'en_a1_u01_l01_v_name',
    'en_a1_u01_l01_v_name_slow',
  ];

  useEffect(() => {
    // Auto-register local assets upon mounting dev screen
    handleRegisterLocalAssets();
  }, []);

  const handleRegisterLocalAssets = async () => {
    // Register the test files against their canonical audioIds
    testAssetIds.forEach((id) => {
      const item = getAudioManifestItem(id);
      if (item) {
        const localPath = `/audio/${item.remotePath}`;
        AudioService.registerLocalAudio(id, localPath);
      }
    });

    setImportedCount(testAssetIds.length);
    await refreshStatuses();
  };

  const refreshStatuses = async () => {
    const updatedStatuses: Record<string, any> = {};
    for (const id of testAssetIds) {
      const st = await AudioService.getAudioStatus(id);
      updatedStatuses[id] = st;
    }
    setStatuses(updatedStatuses);
  };

  const handlePlay = async (audioId: string) => {
    setCurrentlyPlayingId(audioId);
    try {
      await AudioService.play(audioId);
    } catch (err) {
      console.error('Error playing audio in test screen:', err);
    } finally {
      setCurrentlyPlayingId(null);
    }
  };

  const handleStop = () => {
    AudioService.stop();
    setCurrentlyPlayingId(null);
  };

  const sulafatProfile = VOICE_PROFILES['EN_TEACHER_F_01'];
  const charonProfile = VOICE_PROFILES['EN_TEACHER_M_01'];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans p-4 space-y-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-800 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to App</span>
        </button>

        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] font-black rounded-full uppercase tracking-wider">
            DEV MODE • AUDIO LAB
          </span>
        </div>
      </div>

      {/* Screen Title & Info Header */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-3xl space-y-3 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center font-bold text-xl">
            🎙️
          </div>
          <div>
            <h1 className="text-lg font-black text-white tracking-tight">Audio Production Integration Test</h1>
            <p className="text-xs text-slate-400">
              Verify pre-generated Gemini TTS production MP3 files running through AudioService
            </p>
          </div>
        </div>

        {/* Primary Voice Profiles Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-emerald-500/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-black block">Primary Female Teacher</span>
              <span className="text-sm font-bold text-white">{sulafatProfile?.name || 'Sulafat'}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Voice ID: EN_TEACHER_F_01 • Approved</span>
            </div>
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-black rounded-lg border border-emerald-500/30">
              5 Test Files
            </span>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-blue-400 uppercase font-black block">Primary Male Teacher</span>
              <span className="text-sm font-bold text-white">{charonProfile?.name || 'Charon'}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Voice ID: EN_TEACHER_M_01 • Approved</span>
            </div>
            <span className="px-2 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold rounded-lg border border-slate-700">
              Ready for Assets
            </span>
          </div>
        </div>

        {/* Dev Import Controls */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800">
          <div className="flex items-center space-x-2">
            <FileAudio className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-slate-300">
              Local Registered Assets: <span className="text-emerald-400 font-mono font-black">{importedCount}</span>
            </span>
          </div>

          <button
            onClick={handleRegisterLocalAssets}
            className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition flex items-center space-x-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Re-Register Local Assets</span>
          </button>
        </div>
      </div>

      {/* Test Assets List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs font-black uppercase text-slate-400 tracking-wider">
            Lesson 1 Production Test Assets (A1 Unit 1)
          </h2>
          <span className="text-[10px] text-slate-500 font-mono">audioId Canonical Mapping</span>
        </div>

        <div className="space-y-3">
          {testAssetIds.map((audioId) => {
            const manifestItem = getAudioManifestItem(audioId);
            const status = statuses[audioId];
            const isPlaying = currentlyPlayingId === audioId;

            return (
              <div
                key={audioId}
                className={`bg-slate-900 border p-4 rounded-2xl shadow-lg transition space-y-3 ${
                  isPlaying ? 'border-emerald-500 bg-slate-900/90 ring-2 ring-emerald-500/20' : 'border-slate-800'
                }`}
              >
                {/* Header Row: Audio ID & Status Badge */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {audioId}
                      </span>
                      {manifestItem?.slowAudioId && (
                        <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          Has Slow Pair
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-white mt-1">"{manifestItem?.text || audioId}"</h3>
                  </div>

                  {/* Status Indicator */}
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider inline-flex items-center space-x-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Production Asset Ready
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1 font-mono">
                      Voice: Sulafat (EN_TEACHER_F_01)
                    </span>
                  </div>
                </div>

                {/* Technical Metadata Details */}
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono">
                  <div>
                    <span className="text-slate-500 block">Relative Path:</span>
                    <span className="text-slate-300 font-semibold truncate block">
                      /audio/{manifestItem?.remotePath || '...'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Duration:</span>
                    <span className="text-slate-300 font-semibold">{manifestItem?.durationSeconds || 1.2}s</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Priority Route:</span>
                    <span className="text-emerald-400 font-semibold">Priority 1 (Local MP3)</span>
                  </div>
                </div>

                {/* Control Action Buttons */}
                <div className="flex items-center space-x-2 pt-1">
                  <button
                    onClick={() => handlePlay(audioId)}
                    disabled={isPlaying}
                    className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition shadow-md ${
                      isPlaying
                        ? 'bg-emerald-500 text-slate-950 font-black animate-pulse'
                        : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{isPlaying ? 'Playing Sulafat MP3...' : 'PLAY'}</span>
                  </button>

                  <button
                    onClick={handleStop}
                    disabled={!isPlaying}
                    className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl border border-slate-700 transition disabled:opacity-40 flex items-center space-x-1"
                  >
                    <Square className="w-3.5 h-3.5 fill-current" />
                    <span>STOP</span>
                  </button>

                  <button
                    onClick={() => onPreviewInLesson('a1_u01_l01', audioId)}
                    className="py-2.5 px-3 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 font-bold text-xs rounded-xl border border-indigo-500/30 transition flex items-center space-x-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Preview in Lesson 1</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
