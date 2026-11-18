export interface TTSGeneratorConfig {
  geminiApiKey: string;
  model: string;
  concurrency: number;
  outputBaseDir: string;
  dryRun: boolean;
  testMode: boolean;
  testLimit: number;
  force?: boolean;
  priorityFilter?: 'P0' | 'P1' | 'P2' | 'P3' | string;
  voiceFilter?: 'EN_TEACHER_F_01' | 'EN_TEACHER_M_01' | string;
  lessonFilter?: string;
  retryAttempts: number;
}

export interface AudioGenerationTarget {
  audioId: string;
  lessonId: string;
  unitId: string;
  language: string;
  cefr: string; // 'a1'
  voiceId: string;
  geminiVoiceName: string;
  text: string;
  isSlowVersion: boolean;
  masterWavPath: string;
  optimizedMp3Path: string;
  relativePathMp3: string;
}

export interface GenerationResult {
  audioId: string;
  voiceId: string;
  geminiVoiceName: string;
  text: string;
  masterWavPath: string;
  optimizedMp3Path: string;
  relativePathMp3: string;
  status: 'generated' | 'skipped' | 'failed' | 'dry_run';
  durationSeconds?: number;
  sizeBytesMp3?: number;
  error?: string;
  attemptCount: number;
}

export interface GenerationReport {
  timestamp: string;
  model: string;
  dryRun: boolean;
  testMode: boolean;
  testLimit: number;
  selectedVoice?: string;
  outputDirectory: string;
  totalRequested: number;
  generatedCount: number;
  skippedCount: number;
  failedCount: number;
  totalDurationSeconds: number;
  results: GenerationResult[];
}
