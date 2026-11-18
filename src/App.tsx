import { useState, useEffect } from 'react';
import { UserAcademyProfile, LessonNode, CourseUnit, CEFRLevel, NativeLanguageCode } from './types';
import { AuthService } from './services/AuthService';
import { setActiveEnglishAccent } from './utils/audioUtils';
import { ProgressService } from './services/ProgressService';
import { CurriculumService } from './services/CurriculumService';
import { LessonService } from './services/LessonService';
import { EntitlementService } from './services/EntitlementService';
import { DeveloperTestService } from './services/DeveloperTestService';
import { OnboardingFlow } from './components/OnboardingFlow';
import { CuriosityPath } from './components/CuriosityPath';
import { LessonRunner } from './components/LessonRunner';
import { LessonEngine } from './components/lesson/LessonEngine';
import { StoryModeView } from './components/StoryModeView';
import { GrammarHandbook } from './components/GrammarHandbook';
import { ShopAndProfile } from './components/ShopAndProfile';
import { AccountAuthModal } from './components/AccountAuthModal';
import { CertificateModal } from './components/CertificateModal';
import { AudioProductionTestScreen } from './components/AudioProductionTestScreen';
import { AdminCurriculumDashboard } from './components/admin/AdminCurriculumDashboard';
import { LearnerAppShell } from './components/learner/LearnerAppShell';
import { DeveloperModeBanner } from './components/developer/DeveloperModeBanner';
import { LearnerPreviewBar } from './components/developer/LearnerPreviewBar';
import { DeveloperTestControlModal } from './components/developer/DeveloperTestControlModal';
import { DeveloperCurriculumExplorer } from './components/developer/DeveloperCurriculumExplorer';
import { DeveloperExerciseDebugger } from './components/developer/DeveloperExerciseDebugger';
import { AudioService } from './services/AudioService';

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserAcademyProfile>(() => AuthService.getCurrentUser());

  // Teaching voice always matches the accent the learner picked.
  useEffect(() => {
    setActiveEnglishAccent(currentUser?.preferences?.accentPreference);
  }, [currentUser?.preferences?.accentPreference]);
  const [allUsers, setAllUsers] = useState<UserAcademyProfile[]>(() => AuthService.getUsers());

  const [currentScreen, setCurrentScreen] = useState<
    'path' | 'lesson' | 'story' | 'shop' | 'devAudioTest' | 'admin' | 'devCurriculum' | 'devDebugger'
  >('path');
  const [activeLesson, setActiveLesson] = useState<LessonNode | null>(null);
  const [activeLessonData, setActiveLessonData] = useState<any>(null);
  const [guidebookUnit, setGuidebookUnit] = useState<CourseUnit | null>(null);

  // Modals state
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showTestControlsModal, setShowTestControlsModal] = useState(false);
  const [debugInitialLessonId, setDebugInitialLessonId] = useState<string>('lesson_a1_1_1');
  const [certificateCEFR, setCertificateCEFR] = useState<CEFRLevel | null>(null);
  const [showOnboardingTour, setShowOnboardingTour] = useState(false);

  const isDev = EntitlementService.isDeveloper(currentUser);
  const isAdmin = EntitlementService.isAdmin(currentUser);
  const isPreview = EntitlementService.isLearnerPreview(currentUser);

  // Route Authorization Guard:
  // If currentScreen is privileged (admin, devCurriculum, devDebugger, devAudioTest)
  // and user is neither an authorized admin nor internal developer, redirect to 'path'.
  useEffect(() => {
    const privilegedScreens = ['admin', 'devCurriculum', 'devDebugger', 'devAudioTest'];
    if (privilegedScreens.includes(currentScreen)) {
      const hasAccess = EntitlementService.isAdmin(currentUser) || EntitlementService.isDeveloper(currentUser);
      if (!hasAccess) {
        console.warn(`[Security] Unauthorized access attempt to "${currentScreen}" by user ${currentUser.id} (role: ${currentUser.role || 'LEARNER'}). Redirecting to path.`);
        setCurrentScreen('path');
      }
    }
  }, [currentScreen, currentUser]);

  // Subscribe to auth state updates
  useEffect(() => {
    const unsubscribe = AuthService.subscribe((session) => {
      if (session?.user) {
        setCurrentUser(session.user);
        setAllUsers(AuthService.getUsers());
      }
    });
    return unsubscribe;
  }, []);

  // Helper to update current active user
  const updateCurrentUser = (fields: Partial<UserAcademyProfile>) => {
    const updated = AuthService.updateUserProfile(fields);
    setCurrentUser(updated);
    setAllUsers(AuthService.getUsers());
  };

  // Handler: Select and launch a lesson
  const handleSelectLesson = async (lesson: LessonNode) => {
    setActiveLesson(lesson);
    const data = await LessonService.getLessonById(lesson.id);
    setActiveLessonData(data);
    setCurrentScreen('lesson');
  };

  // Handler: Finish a lesson (from standard runner)
  const handleFinishLesson = (scoreXp: number, starsEarned: number) => {
    if (!activeLesson) return;

    const isNew = !currentUser.completedLessonIds.includes(activeLesson.id);
    updateCurrentUser({
      totalXp: currentUser.totalXp + (isNew ? scoreXp : 0),
      gems: currentUser.gems + (isNew ? 25 : 0),
      completedLessonIds: isNew ? [...currentUser.completedLessonIds, activeLesson.id] : currentUser.completedLessonIds,
      lessonStars: {
        ...currentUser.lessonStars,
        [activeLesson.id]: Math.max(currentUser.lessonStars[activeLesson.id] || 0, starsEarned),
      },
    });

    setActiveLesson(null);
    setActiveLessonData(null);
    setCurrentScreen('path');
  };

  // Handler: Finish lesson from LessonEngine
  const handleEngineFinish = (updatedUser: UserAcademyProfile) => {
    updateCurrentUser(updatedUser);
    setActiveLesson(null);
    setActiveLessonData(null);
    setCurrentScreen('path');
  };

  // Handler: Finish an interactive audio story
  const handleFinishStory = (xpGained: number) => {
    updateCurrentUser({
      totalXp: currentUser.totalXp + xpGained,
      gems: currentUser.gems + 20,
    });
  };

  // Handler: Change Native Language (Source Language)
  const handleChangeNativeLanguage = (lang: NativeLanguageCode) => {
    updateCurrentUser({ nativeLanguage: lang });
  };

  // Handler: Switch user account
  const handleSelectUserAccount = (selected: UserAcademyProfile) => {
    AuthService.switchUser(selected.id);
    setShowAccountModal(false);
  };

  // Handler: Create new user account profile
  const handleCreateNewAccount = (name: string, email: string, nativeLang: NativeLanguageCode) => {
    const newAccount = AuthService.register(name, email, nativeLang);
    setCurrentUser(newAccount);
    setShowAccountModal(false);
  };

  // Handler: Preview audio in Lesson 1
  const handlePreviewInLesson = async (lessonId: string, audioId?: string) => {
    const targetNode: LessonNode = {
      id: 'lesson_a1_1_1',
      unitId: 'a1_u01',
      title: 'Greetings & Introductions',
      description: 'Learn to say Hello, Hi, and introduce yourself',
      icon: '👋',
      cefr: 'A1',
      totalSteps: 11,
      xpReward: 50,
      exercises: [],
    };
    setActiveLesson(targetNode);
    const data = await LessonService.getLessonById('lesson_a1_1_1');
    setActiveLessonData(data);
    setCurrentScreen('lesson');

    if (audioId) {
      setTimeout(() => {
        AudioService.play(audioId);
      }, 600);
    }
  };

  // If user has not completed onboarding (or explicitly requested tour), render onboarding journey
  if (!currentUser.hasCompletedOnboarding || showOnboardingTour) {
    return (
      <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#050816] text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-[#335CFF] selection:text-white transition-colors duration-300">
        <div className="w-full flex-1 max-w-lg mx-auto my-0 sm:my-3 sm:rounded-[36px] sm:border-4 border-[#D9E4FF] dark:border-slate-800/80 shadow-2xl overflow-hidden bg-[#F6F8FC] dark:bg-[#050816] flex flex-col justify-between relative">
          <OnboardingFlow
            onCompleteOnboarding={(completedUser) => {
              setCurrentUser(completedUser);
              setAllUsers(AuthService.getUsers());
              setShowOnboardingTour(false);
            }}
          />
        </div>
      </div>
    );
  }

  if (currentScreen === 'admin') {
    if (!isAdmin && !isDev) return null;
    return (
      <AdminCurriculumDashboard
        onBackToLearnerPath={() => setCurrentScreen('path')}
      />
    );
  }

  if (currentScreen === 'devCurriculum') {
    if (!isAdmin && !isDev) return null;
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        {isDev && (
          <DeveloperModeBanner
            user={currentUser}
            onOpenTestControls={() => setShowTestControlsModal(true)}
            onOpenCurriculumExplorer={() => setCurrentScreen('devCurriculum')}
            onOpenExerciseDebugger={() => setCurrentScreen('devDebugger')}
            onSwitchToLearnerAccount={() => setShowAccountModal(true)}
            onUpdateUser={updateCurrentUser}
          />
        )}
        <DeveloperCurriculumExplorer
          user={currentUser}
          onUpdateUser={updateCurrentUser}
          onLaunchLesson={async (lessonId) => {
            const detailedData = await LessonService.getLessonById(lessonId);
            const targetNode: LessonNode = {
              id: lessonId,
              unitId: detailedData?.unitId || 'unit_a1_1',
              title: detailedData?.title || 'Lesson',
              description: detailedData?.learningObjective?.description || 'CEFR A1 Interactive Lesson',
              icon: detailedData?.icon || '📚',
              cefr: (detailedData?.cefr as CEFRLevel) || 'A1',
              totalSteps: 18,
              xpReward: 50,
              exercises: [],
            };
            handleSelectLesson(targetNode);
          }}
          onOpenDebuggerWithLesson={(lessonId) => {
            setDebugInitialLessonId(lessonId);
            setCurrentScreen('devDebugger');
          }}
          onBack={() => setCurrentScreen('path')}
        />
        {isDev && showTestControlsModal && (
          <DeveloperTestControlModal
            user={currentUser}
            onUpdateUser={updateCurrentUser}
            onClose={() => setShowTestControlsModal(false)}
            onLaunchLesson={async (lessonId) => {
              const detailedData = await LessonService.getLessonById(lessonId);
              const targetNode: LessonNode = {
                id: lessonId,
                unitId: detailedData?.unitId || 'unit_a1_1',
                title: detailedData?.title || 'Lesson',
                description: detailedData?.learningObjective?.description || 'CEFR A1 Interactive Lesson',
                icon: detailedData?.icon || '📚',
                cefr: (detailedData?.cefr as CEFRLevel) || 'A1',
                totalSteps: 18,
                xpReward: 50,
                exercises: [],
              };
              handleSelectLesson(targetNode);
            }}
          />
        )}
      </div>
    );
  }

  if (currentScreen === 'devDebugger') {
    if (!isAdmin && !isDev) return null;
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        {isDev && (
          <DeveloperModeBanner
            user={currentUser}
            onOpenTestControls={() => setShowTestControlsModal(true)}
            onOpenCurriculumExplorer={() => setCurrentScreen('devCurriculum')}
            onOpenExerciseDebugger={() => setCurrentScreen('devDebugger')}
            onSwitchToLearnerAccount={() => setShowAccountModal(true)}
            onUpdateUser={updateCurrentUser}
          />
        )}
        <DeveloperExerciseDebugger
          user={currentUser}
          initialLessonId={debugInitialLessonId}
          onBack={() => setCurrentScreen('path')}
        />
        {isDev && showTestControlsModal && (
          <DeveloperTestControlModal
            user={currentUser}
            onUpdateUser={updateCurrentUser}
            onClose={() => setShowTestControlsModal(false)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#050816] text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-[#335CFF] selection:text-white transition-colors duration-200">
      {/* Developer Tester Top Banner */}
      {isDev && (
        <DeveloperModeBanner
          user={currentUser}
          onOpenTestControls={() => setShowTestControlsModal(true)}
          onOpenCurriculumExplorer={() => setCurrentScreen('devCurriculum')}
          onOpenExerciseDebugger={() => setCurrentScreen('devDebugger')}
          onSwitchToLearnerAccount={() => setShowAccountModal(true)}
          onUpdateUser={updateCurrentUser}
        />
      )}

      {/* Container Frame */}
      <div className="w-full flex-1 max-w-lg mx-auto my-0 sm:my-3 sm:rounded-[36px] sm:border-4 border-[#D9E4FF] dark:border-slate-800/80 shadow-2xl overflow-hidden bg-[#F6F8FC] dark:bg-[#050816] flex flex-col justify-between relative transition-colors duration-200">
        
        {/* Main Application Router */}
        <main className="flex-1 overflow-y-auto">
          {currentScreen === 'path' && (
            <LearnerAppShell
              user={currentUser}
              onUpdateUser={updateCurrentUser}
              onLaunchLesson={async (lessonId) => {
                const detailedData = await LessonService.getLessonById(lessonId);
                const targetNode: LessonNode = {
                  id: lessonId,
                  unitId: detailedData?.unitId || 'unit_a1_1',
                  title: detailedData?.title || 'Lesson',
                  description: detailedData?.learningObjective?.description || 'CEFR A1 Interactive Lesson',
                  icon: detailedData?.icon || '📚',
                  cefr: (detailedData?.cefr as CEFRLevel) || 'A1',
                  totalSteps: 18,
                  xpReward: 50,
                  exercises: [],
                };
                handleSelectLesson(targetNode);
              }}
              onAdminClick={isAdmin ? () => setCurrentScreen('admin') : undefined}
              onOpenStory={() => setCurrentScreen('story')}
              onOpenShop={() => setCurrentScreen('shop')}
              onReplayOnboarding={() => setShowOnboardingTour(true)}
            />
          )}

          {currentScreen === 'lesson' && activeLesson && (
            activeLessonData ? (
              <LessonEngine
                lessonData={activeLessonData}
                user={currentUser}
                onExit={() => {
                  setActiveLesson(null);
                  setActiveLessonData(null);
                  setCurrentScreen('path');
                }}
                onLessonFinished={handleEngineFinish}
              />
            ) : (
              <LessonRunner
                lesson={activeLesson}
                user={currentUser}
                onFinishLesson={handleFinishLesson}
                onExit={() => {
                  setActiveLesson(null);
                  setActiveLessonData(null);
                  setCurrentScreen('path');
                }}
              />
            )
          )}

          {currentScreen === 'story' && (
            <StoryModeView
              user={currentUser}
              onFinishStory={handleFinishStory}
              onBack={() => setCurrentScreen('path')}
            />
          )}

          {currentScreen === 'shop' && (
            <ShopAndProfile
              user={currentUser}
              onUpdateUser={updateCurrentUser}
              onBack={() => setCurrentScreen('path')}
              onOpenDevAudioTest={isAdmin ? () => setCurrentScreen('devAudioTest') : undefined}
            />
          )}

          {currentScreen === 'devAudioTest' && (isAdmin || isDev) && (
            <AudioProductionTestScreen
              onBack={() => setCurrentScreen('path')}
              onPreviewInLesson={handlePreviewInLesson}
            />
          )}
        </main>

        {/* Modal 1: Unit Grammar Guidebook */}
        {guidebookUnit && (
          <GrammarHandbook
            unit={guidebookUnit}
            userNativeLang={currentUser.nativeLanguage}
            onClose={() => setGuidebookUnit(null)}
          />
        )}

        {/* Modal 2: User Account Management & Login */}
        {showAccountModal && (
          <AccountAuthModal
            currentUser={currentUser}
            allUsers={allUsers}
            onSelectUserAccount={handleSelectUserAccount}
            onCreateNewAccount={handleCreateNewAccount}
            onClose={() => setShowAccountModal(false)}
          />
        )}

        {/* Modal 4: CEFR Official Diploma Certificate */}
        {certificateCEFR && (
          <CertificateModal
            user={currentUser}
            cefr={certificateCEFR}
            onClose={() => setCertificateCEFR(null)}
          />
        )}

        {/* Modal 5: Developer Test Controls Modal (Internal Developer Only) */}
        {isDev && showTestControlsModal && (
          <DeveloperTestControlModal
            user={currentUser}
            onUpdateUser={updateCurrentUser}
            onClose={() => setShowTestControlsModal(false)}
            onLaunchLesson={async (lessonId) => {
              const detailedData = await LessonService.getLessonById(lessonId);
              const targetNode: LessonNode = {
                id: lessonId,
                unitId: detailedData?.unitId || 'unit_a1_1',
                title: detailedData?.title || 'Lesson',
                description: detailedData?.learningObjective?.description || 'CEFR A1 Interactive Lesson',
                icon: detailedData?.icon || '📚',
                cefr: (detailedData?.cefr as CEFRLevel) || 'A1',
                totalSteps: 18,
                xpReward: 50,
                exercises: [],
              };
              handleSelectLesson(targetNode);
            }}
          />
        )}

        {/* Floating Learner Preview Active Bar */}
        {isPreview && currentScreen === 'path' && (
          <LearnerPreviewBar
            onExitPreview={() => {
              const updated = DeveloperTestService.toggleLearnerPreviewMode(false);
              updateCurrentUser(updated);
            }}
            onOpenControls={() => setShowTestControlsModal(true)}
          />
        )}
      </div>
    </div>
  );
}
