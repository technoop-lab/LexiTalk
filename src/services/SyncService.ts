import { UserAcademyProfile } from '../types';

export interface SyncStatus {
  lastSyncedAt: string | null;
  isSyncing: boolean;
  hasOfflineChanges: boolean;
}

class SyncServiceManager {
  private status: SyncStatus = {
    lastSyncedAt: new Date().toISOString(),
    isSyncing: false,
    hasOfflineChanges: false,
  };

  public getStatus(): SyncStatus {
    return this.status;
  }

  public async syncUserData(user: UserAcademyProfile): Promise<boolean> {
    this.status.isSyncing = true;
    try {
      // Simulate network sync latency
      await new Promise((resolve) => setTimeout(resolve, 600));
      this.status.lastSyncedAt = new Date().toISOString();
      this.status.hasOfflineChanges = false;
      return true;
    } catch (e) {
      console.error('Sync failed:', e);
      this.status.hasOfflineChanges = true;
      return false;
    } finally {
      this.status.isSyncing = false;
    }
  }
}

export const SyncService = new SyncServiceManager();
