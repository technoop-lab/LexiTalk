import { TargetLanguageCode } from '../types';

export interface DirectTTSUsageItem {
  id: string;
  componentPath: string;
  componentName: string;
  triggerEvent: string;
  contentType: 'Grammar Examples' | 'Error Remedies' | 'Prompt & Options' | 'Story Text' | 'Legacy Exercise' | 'Grammar Handbook' | 'Audio Service Fallback';
  currentMethod: string;
  sampleTextOrSource: string;
  targetAudioServiceReplacement: string;
  status: 'DIRECT_BROWSER_TTS' | 'AUDIO_SERVICE_MIGRATED' | 'DEVELOPMENT_FALLBACK' | 'PLANNED_PRODUCTION_AUDIO';
  notes: string;
}

export interface TTSInventorySummary {
  totalDirectTTSCalls: number;
  migratedToAudioServiceCount: number;
  remainingDirectTTSCalls: number;
  componentsAffectedCount: number;
  items: DirectTTSUsageItem[];
  replacementStrategyNote: string;
}

export class TTSInventoryService {
  public static getInventory(): TTSInventorySummary {
    const items: DirectTTSUsageItem[] = [
      {
        id: 'tts_01_grammar_view',
        componentPath: 'src/components/lesson/GrammarView.tsx',
        componentName: 'GrammarView',
        triggerEvent: 'User clicks on contraction table row or rule item',
        contentType: 'Grammar Examples',
        currentMethod: 'AudioService.play(row.audioId, row.contracted)',
        sampleTextOrSource: 'I am -> I\'m, You are -> You\'re',
        targetAudioServiceReplacement: 'AudioService.play(audioId)',
        status: 'AUDIO_SERVICE_MIGRATED',
        notes: 'Migrated to AudioService gateway. Suppresses browser TTS in learner mode.'
      },
      {
        id: 'tts_02_common_mistakes',
        componentPath: 'src/components/lesson/CommonMistakesView.tsx',
        componentName: 'CommonMistakesView',
        triggerEvent: 'User clicks play button next to correct remedy sentence',
        contentType: 'Error Remedies',
        currentMethod: 'AudioService.play(m.audioId, m.correct)',
        sampleTextOrSource: 'I am a doctor. (Correcting: I doctor)',
        targetAudioServiceReplacement: 'AudioService.play(audioId)',
        status: 'AUDIO_SERVICE_MIGRATED',
        notes: 'Migrated to AudioService gateway in Common Learner Errors stage.'
      },
      {
        id: 'tts_03_exercise_renderer_audio',
        componentPath: 'src/components/lesson/ExerciseRenderer.tsx',
        componentName: 'ExerciseRenderer',
        triggerEvent: 'Audio button clicked on listening or dictation exercises',
        contentType: 'Prompt & Options',
        currentMethod: 'AudioService.play(exercise.audioId, exercise.audioText)',
        sampleTextOrSource: 'Good morning, how are you?',
        targetAudioServiceReplacement: 'AudioService.play(audioId)',
        status: 'AUDIO_SERVICE_MIGRATED',
        notes: 'Migrated to AudioService gateway for listening exercises.'
      },
      {
        id: 'tts_04_exercise_renderer_sentence',
        componentPath: 'src/components/lesson/ExerciseRenderer.tsx',
        componentName: 'ExerciseRenderer',
        triggerEvent: 'Target sentence audio button clicked',
        contentType: 'Prompt & Options',
        currentMethod: 'AudioService.play(exercise.audioId, exercise.targetSentence)',
        sampleTextOrSource: 'Thank you very much, goodbye!',
        targetAudioServiceReplacement: 'AudioService.play(audioId)',
        status: 'AUDIO_SERVICE_MIGRATED',
        notes: 'Migrated to AudioService gateway for translation and word-tile drills.'
      },
      {
        id: 'tts_05_grammar_handbook',
        componentPath: 'src/components/GrammarHandbook.tsx',
        componentName: 'GrammarHandbook',
        triggerEvent: 'Example sentence audio icon clicked',
        contentType: 'Grammar Handbook',
        currentMethod: 'AudioService.play(ex.audioId, ex.english)',
        sampleTextOrSource: 'She is a software engineer.',
        targetAudioServiceReplacement: 'AudioService.play(audioId)',
        status: 'AUDIO_SERVICE_MIGRATED',
        notes: 'Migrated to AudioService gateway for handbook reference sentences.'
      },
      {
        id: 'tts_06_story_mode',
        componentPath: 'src/components/StoryModeView.tsx',
        componentName: 'StoryModeView',
        triggerEvent: 'Story step narration or speaker click',
        contentType: 'Story Text',
        currentMethod: 'AudioService.play(step.audioId, step.text)',
        sampleTextOrSource: 'Welcome to Curiosity Cafe!',
        targetAudioServiceReplacement: 'AudioService.play(audioId)',
        status: 'AUDIO_SERVICE_MIGRATED',
        notes: 'Migrated to AudioService gateway for interactive story steps.'
      },
      {
        id: 'tts_07_legacy_lesson_runner',
        componentPath: 'src/components/LessonRunner.tsx',
        componentName: 'LessonRunner',
        triggerEvent: 'Legacy exercise audio button clicked',
        contentType: 'Legacy Exercise',
        currentMethod: 'AudioService.play(currentEx.audioId, currentEx.audioText)',
        sampleTextOrSource: 'Good morning how are you',
        targetAudioServiceReplacement: 'AudioService.play(audioId)',
        status: 'AUDIO_SERVICE_MIGRATED',
        notes: 'Migrated to AudioService gateway for legacy runner audio.'
      },
      {
        id: 'tts_08_audio_service_fallback',
        componentPath: 'src/services/AudioService.ts',
        componentName: 'AudioService',
        triggerEvent: 'Pre-recorded MP3 asset missing from manifest',
        contentType: 'Audio Service Fallback',
        currentMethod: 'speakTextOffline(textToSpeak, targetLang, rate)',
        sampleTextOrSource: 'Fallback string execution',
        targetAudioServiceReplacement: 'Pre-recorded Sulafat MP3 audio asset generation',
        status: 'DEVELOPMENT_FALLBACK',
        notes: 'Secondary browser speech synthesis fallback retained ONLY for Dev/Admin mode when explicitly enabled; suppressed in Learner Mode.'
      }
    ];

    const migrated = items.filter((i) => i.status === 'AUDIO_SERVICE_MIGRATED').length;
    const remaining = items.filter((i) => i.status === 'DIRECT_BROWSER_TTS').length;

    return {
      totalDirectTTSCalls: items.length,
      migratedToAudioServiceCount: migrated,
      remainingDirectTTSCalls: remaining,
      componentsAffectedCount: 7,
      items,
      replacementStrategyNote: 'All learner-facing direct browser TTS invocations have been routed through the central AudioService gateway. Unauthored audio is safely suppressed in Production Learner Mode.'
    };
  }
}
