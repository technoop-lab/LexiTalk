import { UserAcademyProfile, CEFRLevel } from '../types';
import { EntitlementService } from './EntitlementService';

class SubscriptionServiceManager {
  public isLessonUnlocked(user: UserAcademyProfile, cefr: CEFRLevel): boolean {
    const res = EntitlementService.canAccessLesson(user, { id: 'dummy', cefr });
    return res.allowed;
  }

  public canAccessStory(user: UserAcademyProfile, storyId: string): boolean {
    return EntitlementService.canAccessStory(user, storyId);
  }

  public hasUnlimitedHearts(user: UserAcademyProfile): boolean {
    return EntitlementService.hasUnlimitedHearts(user);
  }
}

export const SubscriptionService = new SubscriptionServiceManager();
