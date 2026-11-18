import { AudioManifestItem, DownloadedAudioMeta, AudioStorageStats } from '../types';

const DB_NAME = 'curiosity_audio_db';
const DB_VERSION = 1;
const STORE_NAME = 'audio_files';

export interface StoredAudioRecord {
  audioId: string;
  blob: Blob;
  lessonId: string;
  unitId: string;
  version: number;
  sizeBytes: number;
  downloadedAt: number;
}

class AudioStorageManager {
  private dbPromise: Promise<IDBDatabase> | null = null;

  private getDB(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      if (typeof window === 'undefined' || !('indexedDB' in window)) {
        reject(new Error('IndexedDB is not supported in this environment'));
        return;
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'audioId' });
          store.createIndex('lessonId', 'lessonId', { unique: false });
          store.createIndex('unitId', 'unitId', { unique: false });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    return this.dbPromise;
  }

  public async saveAudioBlob(audioId: string, blob: Blob, meta: AudioManifestItem): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);

      const record: StoredAudioRecord = {
        audioId,
        blob,
        lessonId: meta.lessonId,
        unitId: meta.unitId,
        version: meta.version,
        sizeBytes: blob.size || meta.sizeBytes,
        downloadedAt: Date.now(),
      };

      const request = store.put(record);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  public async getAudioBlob(audioId: string): Promise<Blob | null> {
    try {
      const db = await this.getDB();
      return new Promise((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const request = store.get(audioId);

        request.onsuccess = () => {
          const res = request.result as StoredAudioRecord | undefined;
          if (res && res.blob) {
            resolve(res.blob);
          } else {
            resolve(null);
          }
        };
        request.onerror = () => resolve(null);
      });
    } catch {
      return null;
    }
  }

  public async hasAudio(audioId: string): Promise<boolean> {
    const blob = await this.getAudioBlob(audioId);
    return blob !== null;
  }

  public async removeAudio(audioId: string): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.delete(audioId);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  public async removeLessonAudio(lessonId: string): Promise<number> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const index = store.index('lessonId');
      const request = index.openCursor(IDBKeyRange.only(lessonId));

      let count = 0;
      request.onsuccess = (e: any) => {
        const cursor = e.target.result;
        if (cursor) {
          cursor.delete();
          count++;
          cursor.continue();
        } else {
          resolve(count);
        }
      };
      request.onerror = () => reject(request.error);
    });
  }

  public async removeUnitAudio(unitId: string): Promise<number> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const index = store.index('unitId');
      const request = index.openCursor(IDBKeyRange.only(unitId));

      let count = 0;
      request.onsuccess = (e: any) => {
        const cursor = e.target.result;
        if (cursor) {
          cursor.delete();
          count++;
          cursor.continue();
        } else {
          resolve(count);
        }
      };
      request.onerror = () => reject(request.error);
    });
  }

  public async getDownloadedAudioList(): Promise<DownloadedAudioMeta[]> {
    try {
      const db = await this.getDB();
      return new Promise((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const request = store.getAll();

        request.onsuccess = () => {
          const records = (request.result || []) as StoredAudioRecord[];
          const list: DownloadedAudioMeta[] = records.map((r) => ({
            audioId: r.audioId,
            lessonId: r.lessonId,
            unitId: r.unitId,
            version: r.version,
            sizeBytes: r.sizeBytes,
            downloadedAt: r.downloadedAt,
          }));
          resolve(list);
        };
        request.onerror = () => resolve([]);
      });
    } catch {
      return [];
    }
  }

  public async getStorageUsage(): Promise<AudioStorageStats> {
    const list = await this.getDownloadedAudioList();
    let totalBytes = 0;
    const lessonSet = new Set<string>();

    for (const item of list) {
      totalBytes += item.sizeBytes || 0;
      if (item.lessonId) lessonSet.add(item.lessonId);
    }

    return {
      totalBytes,
      count: list.length,
      downloadedLessons: Array.from(lessonSet),
    };
  }

  public async getStorageStats(): Promise<{ totalCount: number; totalSizeBytes: number; formattedSize: string }> {
    const usage = await this.getStorageUsage();
    const mb = (usage.totalBytes / (1024 * 1024)).toFixed(1);
    return {
      totalCount: usage.count,
      totalSizeBytes: usage.totalBytes,
      formattedSize: usage.totalBytes < 1024 * 1024 ? `${Math.round(usage.totalBytes / 1024)} KB` : `${mb} MB`,
    };
  }

  public async clearAll(): Promise<void> {
    try {
      const db = await this.getDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const request = store.clear();
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    } catch {
      // Ignore clear errors if DB unreachable
    }
  }
}

export const AudioStorage = new AudioStorageManager();
