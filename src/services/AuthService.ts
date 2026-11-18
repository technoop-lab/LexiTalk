import {
  UserAcademyProfile,
  UserRole,
  NativeLanguageCode,
  LearningGoal,
  CEFRLevel,
  LearningJourney,
  LearningLanguageConfig,
  TargetLanguageCode,
  InstructionLanguageCode,
} from '../types';

export interface AuthSession {
  user: UserAcademyProfile;
  token?: string;
  isGuest: boolean;
}

export interface AuthStateChangeCallback {
  (session: AuthSession | null): void;
}

class DevAuthService {
  private storageKey = 'curiosity_academy_users_v1';
  private activeIdKey = 'curiosity_active_user_id';
  private listeners: AuthStateChangeCallback[] = [];

  private ensureJourneyStructure(user: UserAcademyProfile): UserAcademyProfile {
    let journeys = user.learningJourneys || [];
    let activeJourneyId = user.activeJourneyId;

    if (journeys.length === 0) {
      const config: LearningLanguageConfig = {
        configId: `cfg_${user.learningLanguage || 'en'}`,
        learnerId: user.id,
        targetLanguage: (user.learningLanguage as TargetLanguageCode) || 'en',
        instructionLanguage: (user.nativeLanguage as InstructionLanguageCode) || 'hi',
        interfaceLanguage: user.nativeLanguage || 'hi',
        proficiencyLevel: user.currentCEFR || 'A1',
        proficiencyFramework: 'CEFR',
        curriculumId: 'curiosity_master_a1',
        learningGoal: user.learningGoal || 'fluency',
      };

      const defaultJourney: LearningJourney = {
        journeyId: `journey_${user.learningLanguage || 'en'}_default`,
        config,
        createdAt: user.createdAt || new Date().toISOString(),
        lastActiveAt: new Date().toISOString(),
        completedLessonIds: user.completedLessonIds || [],
        lessonStars: user.lessonStars || {},
        totalXp: user.totalXp || 0,
        currentLevel: user.currentCEFR || 'A1',
        wordsMasteredCount: user.wordsMasteredCount || 0,
        detailedLessonProgress: user.detailedLessonProgress || {},
      };
      journeys = [defaultJourney];
      activeJourneyId = defaultJourney.journeyId;
    }

    if (!activeJourneyId && journeys.length > 0) {
      activeJourneyId = journeys[0].journeyId;
    }

    return {
      ...user,
      activeJourneyId,
      learningJourneys: journeys,
    };
  }

  private defaultUser: UserAcademyProfile = {
    id: 'usr_default_1',
    email: '',
    name: 'Learner',
    avatar: '🦉',
    role: 'LEARNER',
    entitlement: 'FREE',
    isDeveloperTestMode: false,
    nativeLanguage: 'hi',
    learningLanguage: 'en',
    learningMode: 'english_only',
    secondaryLanguage: null,
    currentCEFR: 'A1',
    targetCEFRLevel: 'B2',
    learningGoal: 'fluency',
    streakDays: 0,
    lastActiveDate: new Date().toISOString().split('T')[0],
    totalXp: 0,
    gems: 0,
    hearts: 5,
    maxHearts: 5,
    streakFreezeCount: 0,
    subscriptionTier: 'free',
    isPro: false,
    isGuest: false,
    hasCompletedOnboarding: false,
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
    completedLessonIds: [],
    lessonStars: {},
    wordsMasteredCount: 0,
    unlockedStoryIds: [],
    leagueName: 'Bronze',
    leagueRank: 0,
    certificatesEarned: [],
    preferences: {
      dailyGoalMinutes: 15,
      autoPlayAudio: true,
      audioSpeed: 1.0,
      notificationsEnabled: true,
    },
  };

  public getUsers(): UserAcademyProfile[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) {
        const parsed: UserAcademyProfile[] = JSON.parse(raw);
        return parsed.map((u) => {
          // Normalize role: Only explicit ADMIN or internal DEVELOPER_TESTER retained; all others become LEARNER
          const normalizedRole: UserRole =
            u.role === 'ADMIN' || u.email === 'admin@curiosityacademy.com'
              ? 'ADMIN'
              : u.role === 'DEVELOPER_TESTER'
              ? 'DEVELOPER_TESTER'
              : 'LEARNER';
          return this.ensureJourneyStructure({
            ...u,
            role: normalizedRole,
            isDeveloperTestMode: normalizedRole === 'DEVELOPER_TESTER' ? u.isDeveloperTestMode : false,
          });
        });
      }
    } catch (e) {
      console.error('AuthService getUsers error:', e);
    }
    return [this.ensureJourneyStructure(this.defaultUser)];
  }

  public saveUsers(users: UserAcademyProfile[]): void {
    try {
      const normalized = users.map((u) => this.ensureJourneyStructure(u));
      localStorage.setItem(this.storageKey, JSON.stringify(normalized));
      this.notify();
    } catch (e) {
      console.error('AuthService saveUsers error:', e);
    }
  }

  public getCurrentUser(): UserAcademyProfile {
    const users = this.getUsers();
    let activeId = localStorage.getItem(this.activeIdKey);
    if (!activeId) {
      activeId = users[0]?.id || this.defaultUser.id;
      localStorage.setItem(this.activeIdKey, activeId);
    }
    const found = users.find((u) => u.id === activeId) || users[0] || this.defaultUser;
    return this.ensureJourneyStructure(found);
  }

  public register(
    name: string,
    email: string,
    nativeLang: NativeLanguageCode,
    goal: LearningGoal = 'everyday',
    cefr: CEFRLevel = 'A1'
  ): UserAcademyProfile {
    const isAuthorizedAdmin = email.toLowerCase() === 'admin@curiosityacademy.com' || email.toLowerCase().startsWith('admin@');
    const newUser: UserAcademyProfile = {
      ...this.defaultUser,
      id: `usr_${Date.now()}`,
      name,
      email,
      role: isAuthorizedAdmin ? 'ADMIN' : 'LEARNER',
      entitlement: isAuthorizedAdmin ? 'DEVELOPER_TEST' : 'FREE',
      isDeveloperTestMode: false,
      nativeLanguage: nativeLang,
      learningGoal: goal,
      currentCEFR: cefr,
      avatar: ['🦉', '🦊', '🦁', '🐻', '🐼', '🐯'][Math.floor(Math.random() * 6)],
      streakDays: 0,
      totalXp: 0,
      gems: 0,
      completedLessonIds: [],
      isGuest: false,
      hasCompletedOnboarding: true,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };

    const users = this.getUsers();
    users.push(newUser);
    this.saveUsers(users);
    localStorage.setItem(this.activeIdKey, newUser.id);
    this.notify();
    return newUser;
  }

  public loginAsGuest(nativeLang: NativeLanguageCode = 'hi'): UserAcademyProfile {
    const guestUser: UserAcademyProfile = {
      ...this.defaultUser,
      id: `usr_guest_${Date.now()}`,
      name: 'Guest Learner',
      email: 'guest@curiosityacademy.com',
      role: 'LEARNER',
      entitlement: 'FREE',
      isDeveloperTestMode: false,
      nativeLanguage: nativeLang,
      isGuest: true,
      hasCompletedOnboarding: true,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };

    const users = this.getUsers();
    users.push(guestUser);
    this.saveUsers(users);
    localStorage.setItem(this.activeIdKey, guestUser.id);
    this.notify();
    return guestUser;
  }

  public switchUser(userId: string): UserAcademyProfile | null {
    const users = this.getUsers();
    const found = users.find((u) => u.id === userId);
    if (found) {
      localStorage.setItem(this.activeIdKey, found.id);
      this.notify();
      return found;
    }
    return null;
  }

  public switchActiveJourney(journeyId: string): UserAcademyProfile {
    const user = this.getCurrentUser();
    const journeys = user.learningJourneys || [];
    
    // Save current active progress to active journey
    const currentActiveJourneyId = user.activeJourneyId;
    const updatedJourneys = journeys.map((j) => {
      if (j.journeyId === currentActiveJourneyId) {
        return {
          ...j,
          completedLessonIds: user.completedLessonIds || [],
          lessonStars: user.lessonStars || {},
          totalXp: user.totalXp || 0,
          wordsMasteredCount: user.wordsMasteredCount || 0,
          detailedLessonProgress: user.detailedLessonProgress || {},
          lastActiveAt: new Date().toISOString(),
        };
      }
      return j;
    });

    const targetJourney = updatedJourneys.find((j) => j.journeyId === journeyId);
    if (!targetJourney) {
      return user;
    }

    // Activate new journey and restore isolated progress
    const updatedUser: UserAcademyProfile = {
      ...user,
      activeJourneyId: targetJourney.journeyId,
      learningJourneys: updatedJourneys,
      learningLanguage: targetJourney.config.targetLanguage,
      nativeLanguage: targetJourney.config.instructionLanguage as any,
      currentCEFR: targetJourney.currentLevel as any,
      completedLessonIds: targetJourney.completedLessonIds || [],
      lessonStars: targetJourney.lessonStars || {},
      totalXp: targetJourney.totalXp || 0,
      wordsMasteredCount: targetJourney.wordsMasteredCount || 0,
      detailedLessonProgress: targetJourney.detailedLessonProgress || {},
    };

    return this.updateUserProfile(updatedUser);
  }

  public updateUserProfile(updatedFields: Partial<UserAcademyProfile>): UserAcademyProfile {
    const users = this.getUsers();
    const current = this.getCurrentUser();
    const updated = { ...current, ...updatedFields };

    const newUsers = users.map((u) => (u.id === current.id ? updated : u));
    this.saveUsers(newUsers);
    return updated;
  }

  public subscribe(cb: AuthStateChangeCallback): () => void {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb);
    };
  }

  private notify() {
    const user = this.getCurrentUser();
    const session: AuthSession = { user, isGuest: !!user.isGuest };
    this.listeners.forEach((cb) => cb(session));
  }
}

export const AuthService = new DevAuthService();
