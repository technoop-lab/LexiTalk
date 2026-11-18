import { AudioManifestItem } from '../types';
import { AUDIO_MANIFEST, VOICE_PROFILES, getAudioManifestItem } from '../data/audioManifest';
import { LESSON_A1_1_1_DATA } from '../data/lessons/lesson_a1_1_1';

export type AudioAssetStatus = 'READY' | 'MISSING' | 'FALLBACK' | 'NOT_REQUIRED';
export type AudioPriority = 'P0' | 'P1' | 'P2' | 'P3';

export interface AudioAuditItem {
  audioId: string;
  text: string;
  lessonId: string;
  stage: string;
  contentType: 'vocabulary' | 'vocabulary_slow' | 'expression' | 'grammar' | 'common_mistake' | 'dialogue' | 'exercise_listening' | 'exercise_speaking';
  speakerRole: 'teacher' | 'dialogue' | 'secondary_teacher';
  characterId?: string;
  voiceId: string;
  requiredVoiceName: string;
  status: AudioAssetStatus;
  priority: AudioPriority;
  remotePath?: string;
  notes?: string;
}

export interface AudioAuditSummary {
  lessonId: string;
  totalRequired: number;
  readyCount: number;
  missingCount: number;
  fallbackCount: number;
  p0MissingCount: number;
  p1MissingCount: number;
  p2MissingCount: number;
  p3MissingCount: number;
  teacherMissingCount: number;
  dialogueMissingCount: number;
  queue: AudioAuditItem[];
}

class AudioAuditServiceManager {
  /**
   * Run dynamic audio audit for Lesson 1 (a1_u01_l01)
   */
  public auditLesson1(): AudioAuditSummary {
    const data = LESSON_A1_1_1_DATA;
    const queue: AudioAuditItem[] = [];

    // Helper to check manifest status
    const checkStatus = (audioId: string): { status: AudioAssetStatus; remotePath?: string } => {
      const manifestItem = getAudioManifestItem(audioId);
      if (manifestItem && manifestItem.status === 'published') {
        return { status: 'READY', remotePath: manifestItem.remotePath };
      }
      return { status: 'MISSING' };
    };

    // 1. Vocabulary Audio (Normal Speed)
    if (data.vocabulary) {
      data.vocabulary.forEach((v) => {
        const audioId = v.audioId || `en_a1_u01_l01_v_${v.id.replace('v_', '')}`;
        const { status, remotePath } = checkStatus(audioId);
        queue.push({
          audioId,
          text: v.word,
          lessonId: 'a1_u01_l01',
          stage: '03 Core Vocabulary',
          contentType: 'vocabulary',
          speakerRole: 'teacher',
          voiceId: 'EN_TEACHER_F_01',
          requiredVoiceName: 'Sulafat (Female Primary Teacher)',
          status,
          priority: 'P0',
          remotePath,
          notes: `Core vocab word: "${v.word}"`
        });

        // Slow Audio for Vocab
        if (v.slowAudioId || audioId) {
          const slowId = v.slowAudioId || `${audioId}_slow`;
          const slowCheck = checkStatus(slowId);
          queue.push({
            audioId: slowId,
            text: v.word,
            lessonId: 'a1_u01_l01',
            stage: '03 Core Vocabulary',
            contentType: 'vocabulary_slow',
            speakerRole: 'teacher',
            voiceId: 'EN_TEACHER_F_01',
            requiredVoiceName: 'Sulafat (Female Primary Teacher)',
            status: slowCheck.status,
            priority: 'P3',
            remotePath: slowCheck.remotePath,
            notes: `Slow audio pronunciation for: "${v.word}"`
          });
        }
      });
    }

    // 2. Language Chunks / Expressions
    if (data.expressions) {
      data.expressions.forEach((e) => {
        const audioId = e.audioId || `en_a1_u01_l01_e_${e.id.replace('e_', '')}`;
        const { status, remotePath } = checkStatus(audioId);
        queue.push({
          audioId,
          text: e.audioText || e.expression,
          lessonId: 'a1_u01_l01',
          stage: '04 Language Chunks',
          contentType: 'expression',
          speakerRole: 'teacher',
          voiceId: 'EN_TEACHER_F_01',
          requiredVoiceName: 'Sulafat (Female Primary Teacher)',
          status,
          priority: 'P0',
          remotePath,
          notes: `Core phrase: "${e.expression}"`
        });
      });
    }

    // 3. Grammar Patterns
    if (data.grammar?.patterns) {
      data.grammar.patterns.forEach((pat, pIdx) => {
        pat.examples.forEach((ex, eIdx) => {
          const audioId = `en_a1_u01_l01_g_p${pIdx + 1}_ex${eIdx + 1}`;
          const { status, remotePath } = checkStatus(audioId);
          queue.push({
            audioId,
            text: ex.english,
            lessonId: 'a1_u01_l01',
            stage: '06 Grammar Rules',
            contentType: 'grammar',
            speakerRole: 'teacher',
            voiceId: 'EN_TEACHER_M_01',
            requiredVoiceName: 'Charon (Male Primary Teacher)',
            status,
            priority: 'P2',
            remotePath,
            notes: `Grammar example: "${ex.english}"`
          });
        });
      });
    }

    // 4. Common Mistakes (Correct sentences)
    if (data.commonMistakes) {
      data.commonMistakes.forEach((cm, idx) => {
        const audioId = `en_a1_u01_l01_cm_${cm.id.replace('cm_', '')}`;
        const { status, remotePath } = checkStatus(audioId);
        queue.push({
          audioId,
          text: cm.correct,
          lessonId: 'a1_u01_l01',
          stage: '07 Common Mistakes',
          contentType: 'common_mistake',
          speakerRole: 'teacher',
          voiceId: 'EN_TEACHER_F_01',
          requiredVoiceName: 'Sulafat (Female Primary Teacher)',
          status,
          priority: 'P2',
          remotePath,
          notes: `Correct error remedy: "${cm.correct}"`
        });
      });
    }

    // 5. Mini Dialogues (6 Adult Contexts)
    if (data.dialogues) {
      data.dialogues.forEach((dlg, dIdx) => {
        dlg.lines.forEach((line, lIdx) => {
          const audioId = line.audioId || `en_a1_u01_l01_d${dIdx + 1}_l${lIdx + 1}`;
          const { status, remotePath } = checkStatus(audioId);

          const voiceId = line.speakerVoiceId || 'EN_DIALOGUE_F_01';
          const voiceProf = VOICE_PROFILES[voiceId];

          queue.push({
            audioId,
            text: line.audioText || line.text,
            lessonId: 'a1_u01_l01',
            stage: `11 Adult Dialogue (${dlg.title})`,
            contentType: 'dialogue',
            speakerRole: 'dialogue',
            characterId: line.characterId || line.speaker.toLowerCase(),
            voiceId,
            requiredVoiceName: voiceProf ? `${voiceProf.name} [${line.speaker}]` : line.speaker,
            status,
            priority: 'P1',
            remotePath,
            notes: `Dialogue line by ${line.speaker}: "${line.text}"`
          });
        });
      });
    }

    // 6. Listening & Speaking Practice Exercises
    const allEx = [
      ...(data.practiceExercises || []),
      ...(data.reviewExercises || []),
      ...(data.assessmentExercises || [])
    ];

    allEx.forEach((ex) => {
      if ((ex.type === 'listening' || ex.type === 'listen_and_type') && ex.audioText) {
        const audioId = ex.audioId || `en_a1_u01_l01_ex_l_${ex.id}`;
        const { status, remotePath } = checkStatus(audioId);
        queue.push({
          audioId,
          text: ex.audioText,
          lessonId: 'a1_u01_l01',
          stage: '09 Listening Practice',
          contentType: 'exercise_listening',
          speakerRole: 'teacher',
          voiceId: 'EN_TEACHER_F_01',
          requiredVoiceName: 'Sulafat (Female Primary Teacher)',
          status,
          priority: 'P1',
          remotePath,
          notes: `Listening exercise prompt: "${ex.audioText}"`
        });
      }

      if ((ex.type === 'speaking' || ex.type === 'personal_production') && ex.audioText) {
        const audioId = ex.audioId || `en_a1_u01_l01_ex_s_${ex.id}`;
        const { status, remotePath } = checkStatus(audioId);
        queue.push({
          audioId,
          text: ex.audioText,
          lessonId: 'a1_u01_l01',
          stage: '12 Speaking Practice',
          contentType: 'exercise_speaking',
          speakerRole: 'teacher',
          voiceId: 'EN_TEACHER_M_01',
          requiredVoiceName: 'Charon (Male Primary Teacher)',
          status,
          priority: 'P1',
          remotePath,
          notes: `Speaking reference prompt: "${ex.audioText}"`
        });
      }
    });

    // Compute Summary Metrics
    const totalRequired = queue.length;
    const readyCount = queue.filter((i) => i.status === 'READY').length;
    const missingCount = queue.filter((i) => i.status === 'MISSING').length;
    const fallbackCount = missingCount; // Missing production items fall back to Web Speech TTS

    const p0MissingCount = queue.filter((i) => i.priority === 'P0' && i.status === 'MISSING').length;
    const p1MissingCount = queue.filter((i) => i.priority === 'P1' && i.status === 'MISSING').length;
    const p2MissingCount = queue.filter((i) => i.priority === 'P2' && i.status === 'MISSING').length;
    const p3MissingCount = queue.filter((i) => i.priority === 'P3' && i.status === 'MISSING').length;

    const teacherMissingCount = queue.filter((i) => i.speakerRole === 'teacher' && i.status === 'MISSING').length;
    const dialogueMissingCount = queue.filter((i) => i.speakerRole === 'dialogue' && i.status === 'MISSING').length;

    return {
      lessonId: 'a1_u01_l01',
      totalRequired,
      readyCount,
      missingCount,
      fallbackCount,
      p0MissingCount,
      p1MissingCount,
      p2MissingCount,
      p3MissingCount,
      teacherMissingCount,
      dialogueMissingCount,
      queue,
    };
  }
}

export const AudioAuditService = new AudioAuditServiceManager();
