import React, { useState, useEffect } from 'react';
import { Download, CheckCircle2, Trash2, RefreshCw, HardDrive, Wifi } from 'lucide-react';
import { AudioService } from '../../services/AudioService';
import { getLessonAudioItems } from '../../data/audioManifest';

interface LessonAudioDownloaderProps {
  lessonId: string;
  lessonTitle?: string;
}

export const LessonAudioDownloader: React.FC<LessonAudioDownloaderProps> = ({ lessonId, lessonTitle }) => {
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [totalSizeFormatted, setTotalSizeFormatted] = useState<string>('0 KB');

  useEffect(() => {
    checkStatus();
  }, [lessonId]);

  const checkStatus = async () => {
    const downloaded = await AudioService.isLessonDownloaded(lessonId);
    setIsDownloaded(downloaded);

    const items = getLessonAudioItems(lessonId);
    const totalBytes = items.reduce((acc, item) => acc + (item.sizeBytes || 0), 0);
    if (totalBytes > 1024 * 1024) {
      setTotalSizeFormatted(`${(totalBytes / (1024 * 1024)).toFixed(1)} MB`);
    } else {
      setTotalSizeFormatted(`${Math.round(totalBytes / 1024)} KB`);
    }
  };

  const handleDownload = async () => {
    AudioService.playSound('tap');
    setIsDownloading(true);
    setProgressPercent(5);

    await AudioService.downloadLessonAudio(lessonId, (prog) => {
      setProgressPercent(prog.percent);
    });

    setIsDownloading(false);
    setIsDownloaded(true);
    AudioService.playSound('victory');
  };

  const handleRemove = async () => {
    AudioService.playSound('tap');
    await AudioService.removeLessonAudio(lessonId);
    setIsDownloaded(false);
    setProgressPercent(0);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 shadow-xl backdrop-blur-sm space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${
            isDownloaded
              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
              : 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
          }`}>
            {isDownloaded ? <CheckCircle2 className="w-5 h-5" /> : <HardDrive className="w-5 h-5" />}
          </div>
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              {lessonTitle || 'Lesson Audio'}
            </h4>
            <div className="flex items-center space-x-2 mt-0.5">
              <span className="text-[11px] font-bold text-slate-400">
                {isDownloaded ? 'Available Offline' : `Audio Package • ${totalSizeFormatted}`}
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-mono">
                Hosted Quality
              </span>
            </div>
          </div>
        </div>

        <div>
          {isDownloaded ? (
            <div className="flex items-center space-x-2">
              <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-2xl flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Offline Ready</span>
              </span>
              <button
                onClick={handleRemove}
                className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-2xl border border-rose-500/30 transition active:scale-95"
                title="Remove Downloaded Audio"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ) : isDownloading ? (
            <div className="text-right">
              <span className="text-xs font-black text-indigo-300 flex items-center space-x-1">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Downloading... {progressPercent}%</span>
              </span>
            </div>
          ) : (
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-black text-xs rounded-2xl shadow-lg transition active:scale-95 flex items-center space-x-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Audio ({totalSizeFormatted})</span>
            </button>
          )}
        </div>
      </div>

      {isDownloading && (
        <div className="space-y-1">
          <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-300 rounded-full"
              style={{ width: `${Math.max(5, progressPercent)}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-500 text-right">Saving high-quality neural voice audio locally...</p>
        </div>
      )}
    </div>
  );
};
