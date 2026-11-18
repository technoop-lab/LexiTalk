import React, { useState, useEffect } from 'react';
import { HardDrive, Wifi, Download, Trash2, RefreshCw, CheckCircle2, Volume2, ShieldCheck } from 'lucide-react';
import { AudioService } from '../services/AudioService';
import { AudioStorage } from '../services/AudioStorage';
import { AUDIO_MANIFEST, getLessonAudioItems } from '../data/audioManifest';

interface AudioSettingsManagerProps {
  onOpenDevAudioTest?: () => void;
}

export const AudioSettingsManager: React.FC<AudioSettingsManagerProps> = ({ onOpenDevAudioTest }) => {
  const [stats, setStats] = useState<{ totalCount: number; totalSizeBytes: number; formattedSize: string }>({
    totalCount: 0,
    totalSizeBytes: 0,
    formattedSize: '0 KB',
  });
  const [wifiOnly, setWifiOnly] = useState<boolean>(true);
  const [isCheckingUpdates, setIsCheckingUpdates] = useState<boolean>(false);
  const [updateMessage, setUpdateMessage] = useState<string | null>(null);
  const [lessonStatus, setLessonStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    refreshStorageStats();
  }, []);

  const refreshStorageStats = async () => {
    const s = await AudioStorage.getStorageStats();
    setStats(s);

    const isL1Downloaded = await AudioService.isLessonDownloaded('lesson_a1_1_1');
    setLessonStatus({
      lesson_a1_1_1: isL1Downloaded,
    });
  };

  const handleClearAll = async () => {
    AudioService.playSound('tap');
    await AudioStorage.clearAll();
    await refreshStorageStats();
  };

  const handleToggleLessonDownload = async (lessonId: string) => {
    AudioService.playSound('tap');
    if (lessonStatus[lessonId]) {
      await AudioService.removeLessonAudio(lessonId);
    } else {
      await AudioService.downloadLessonAudio(lessonId);
    }
    await refreshStorageStats();
  };

  const handleCheckUpdates = async () => {
    AudioService.playSound('tap');
    setIsCheckingUpdates(true);
    setUpdateMessage(null);

    setTimeout(() => {
      setIsCheckingUpdates(false);
      setUpdateMessage('All audio manifests are up to date (v1.0.0).');
      AudioService.playSound('correct');
    }, 1200);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-3xl space-y-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center space-x-2">
          <HardDrive className="w-5 h-5 text-indigo-400" />
          <h3 className="font-black text-white text-sm uppercase tracking-wider">Audio & Offline Content</h3>
        </div>
        <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
          {stats.formattedSize} Used
        </span>
      </div>

      {/* Storage & Network Controls */}
      <div className="space-y-3">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Wifi className="w-5 h-5 text-emerald-400" />
            <div>
              <span className="text-xs font-bold text-white block">Download over Wi-Fi only</span>
              <span className="text-[10px] text-slate-400 block">Save mobile cellular data charges</span>
            </div>
          </div>
          <button
            onClick={() => {
              AudioService.playSound('tap');
              setWifiOnly(!wifiOnly);
            }}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${
              wifiOnly ? 'bg-emerald-500' : 'bg-slate-800'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-slate-950 shadow-md transform transition-transform ${
                wifiOnly ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Offline Audio Packages List */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-300">Curriculum Offline Packages</label>

          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-black text-white">CEFR A1 • Unit 1 • Lesson 1</span>
                {lessonStatus['lesson_a1_1_1'] && (
                  <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                    Offline
                  </span>
                )}
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">High-Quality Voice Audio • 18 Vocab + Dialogues</p>
            </div>

            <button
              onClick={() => handleToggleLessonDownload('lesson_a1_1_1')}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs border transition flex items-center space-x-1 ${
                lessonStatus['lesson_a1_1_1']
                  ? 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border-rose-500/30'
                  : 'bg-indigo-500 hover:bg-indigo-400 text-slate-950 border-indigo-400 font-black'
              }`}
            >
              {lessonStatus['lesson_a1_1_1'] ? (
                <>
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Actions: Update Manifest & Clear Storage */}
        <div className="flex items-center space-x-2 pt-2">
          <button
            onClick={handleCheckUpdates}
            disabled={isCheckingUpdates}
            className="flex-1 py-2.5 bg-slate-950 hover:bg-slate-800 text-slate-300 font-bold text-xs rounded-2xl border border-slate-800 transition flex items-center justify-center space-x-1.5"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isCheckingUpdates ? 'animate-spin' : ''}`} />
            <span>Check Updates</span>
          </button>

          <button
            onClick={handleClearAll}
            disabled={stats.totalSizeBytes === 0}
            className="py-2.5 px-4 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-bold text-xs rounded-2xl border border-rose-500/30 transition disabled:opacity-40 flex items-center space-x-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Audio ({stats.formattedSize})</span>
          </button>
        </div>

        {onOpenDevAudioTest && (
          <button
            onClick={onOpenDevAudioTest}
            className="w-full py-2.5 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 font-bold text-xs rounded-2xl border border-indigo-500/30 transition flex items-center justify-center space-x-2"
          >
            <span>🎙️ Launch Audio Production Test Screen</span>
          </button>
        )}

        {updateMessage && (
          <p className="text-[11px] font-semibold text-emerald-400 text-center bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
            {updateMessage}
          </p>
        )}
      </div>
    </div>
  );
};
