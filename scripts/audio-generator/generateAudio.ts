import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { AUDIO_MANIFEST, getAudioManifestItem } from '../../src/data/audioManifest';
import { AudioAuditService } from '../../src/services/AudioAuditService';
import { updateAudioManifestFile } from './manifestUpdater';
import { TTSGeneratorConfig, AudioGenerationTarget, GenerationResult, GenerationReport } from './types';
import { GEMINI_TTS_MODEL, VOICE_MAP, getGeminiVoiceName } from './voiceDirector';
import { validateAudioFile } from './validator';
import { processAudioOutput } from './converter';
import { GeminiTTSClient } from './ttsClient';
import { GenerationReporter } from './reporter';
import { renderDashboard } from './cliUI';

// Load environment variables from .env if present
dotenv.config();

function parseArgs(): TTSGeneratorConfig {
  const args = process.argv.slice(2);

  let dryRun = false;
  let testMode = false;
  let force = false;
  let testLimit = 5;
  let priorityFilter: string | undefined = 'P0';
  let voiceFilter: string | undefined = undefined;
  let lessonFilter = 'a1_u01_l01';
  let concurrency = parseInt(process.env.TTS_CONCURRENCY || '2', 10);

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--dry-run') {
      dryRun = true;
    } else if (arg === '--test' || arg === '--test-mode') {
      testMode = true;
    } else if (arg === '--force') {
      force = true;
    } else if (arg === '--p0') {
      priorityFilter = 'P0';
    } else if (arg === '--limit' && args[i + 1]) {
      testLimit = parseInt(args[++i], 10);
    } else if (arg === '--voice' && args[i + 1]) {
      voiceFilter = args[++i];
    } else if (arg === '--lesson' && args[i + 1]) {
      lessonFilter = args[++i];
    } else if (arg === '--concurrency' && args[i + 1]) {
      concurrency = parseInt(args[++i], 10);
    }
  }

  const geminiApiKey = process.env.GEMINI_API_KEY || '';
  const rawModel = process.env.GEMINI_TTS_MODEL;
  const model = (rawModel && rawModel.startsWith('gemini-')) ? rawModel : GEMINI_TTS_MODEL;
  const outputBaseDir = path.join(process.cwd(), 'audio-output');

  return {
    geminiApiKey,
    model,
    concurrency,
    outputBaseDir,
    dryRun,
    testMode,
    force,
    priorityFilter,
    testLimit,
    voiceFilter,
    lessonFilter,
    retryAttempts: 6,
  };
}

export async function runAudioGenerator(configOverride?: Partial<TTSGeneratorConfig>): Promise<GenerationReport> {
  const config: TTSGeneratorConfig = {
    ...parseArgs(),
    ...configOverride,
  };

  if (!config.model || !config.model.startsWith('gemini-')) {
    config.model = GEMINI_TTS_MODEL;
  }

  const startTime = Date.now();
  console.log(`[Audio Generator] Initializing for Lesson: ${config.lessonFilter}...`);

  // 1. Gather audio items from AudioAuditService if targeting P0 or Lesson 1
  let targets: AudioGenerationTarget[] = [];

  if (config.priorityFilter === 'P0' || config.lessonFilter === 'a1_u01_l01') {
    const audit = AudioAuditService.auditLesson1();
    const p0Items = audit.queue.filter((item) => item.priority === 'P0');

    for (const item of p0Items) {
      const assignedVoice = config.voiceFilter || item.voiceId || 'EN_TEACHER_F_01';
      const geminiVoice = getGeminiVoiceName(assignedVoice);
      const relativePathMp3 = item.remotePath || `en/a1/u01/l01/${item.audioId}.mp3`;
      const masterWavPath = path.join(config.outputBaseDir, 'masters', relativePathMp3.replace(/\.mp3$/, '.wav'));
      const optimizedMp3Path = path.join(config.outputBaseDir, 'optimized', relativePathMp3);

      targets.push({
        audioId: item.audioId,
        lessonId: 'a1_u01_l01',
        unitId: 'a1_u01',
        language: 'en',
        cefr: 'a1',
        voiceId: assignedVoice,
        geminiVoiceName: geminiVoice,
        text: item.text,
        isSlowVersion: item.audioId.endsWith('_slow'),
        masterWavPath,
        optimizedMp3Path,
        relativePathMp3,
      });
    }
  } else {
    // Fallback: Gather audio manifest items for target lesson
    let lessonManifestItems = AUDIO_MANIFEST.filter(
      (item) => item.lessonId === config.lessonFilter || item.audioId.includes(config.lessonFilter)
    );

    if (lessonManifestItems.length === 0) {
      lessonManifestItems = AUDIO_MANIFEST.filter((item) => item.audioId.startsWith('en_a1_u01_l01'));
    }

    for (const item of lessonManifestItems) {
      const assignedVoice = config.voiceFilter || item.voiceId || 'EN_TEACHER_F_01';
      const geminiVoice = getGeminiVoiceName(assignedVoice);

      const voiceSubdir = config.voiceFilter ? config.voiceFilter.toLowerCase() : '';
      const relativePathMp3 = item.remotePath || (voiceSubdir
        ? `en/a1/u01/l01/${voiceSubdir}/${item.audioId}.mp3`
        : `en/a1/u01/l01/${item.audioId}.mp3`);

      const masterWavPath = path.join(config.outputBaseDir, 'masters', relativePathMp3.replace(/\.mp3$/, '.wav'));
      const optimizedMp3Path = path.join(config.outputBaseDir, 'optimized', relativePathMp3);

      targets.push({
        audioId: item.audioId,
        lessonId: item.lessonId || 'a1_u01_l01',
        unitId: item.unitId || 'a1_u01',
        language: item.language || 'en',
        cefr: 'a1',
        voiceId: assignedVoice,
        geminiVoiceName: geminiVoice,
        text: item.text || item.audioId,
        isSlowVersion: item.audioId.endsWith('_slow'),
        masterWavPath,
        optimizedMp3Path,
        relativePathMp3,
      });
    }
  }

  // 3. Filter by voice if specified
  if (config.voiceFilter) {
    targets = targets.filter(
      (t) =>
        t.voiceId.toUpperCase() === config.voiceFilter?.toUpperCase() ||
        t.geminiVoiceName.toLowerCase() === config.voiceFilter?.toLowerCase()
    );
  }

  // 4. Apply Test Limit if in Test Mode
  if (config.testMode && config.testLimit > 0) {
    targets = targets.slice(0, config.testLimit);
  }

  // 5. Initialize TTS client if not dry run
  let ttsClient: GeminiTTSClient | undefined;
  if (!config.dryRun) {
    if (!config.geminiApiKey) {
      console.warn(
        `\n⚠️ WARNING: GEMINI_API_KEY environment variable is missing!` +
        `\nFor actual generation, please set GEMINI_API_KEY in your environment or .env file.` +
        `\nRunning DRY RUN mode instead...\n`
      );
      config.dryRun = true;
    } else {
      ttsClient = new GeminiTTSClient({
        apiKey: config.geminiApiKey,
        model: config.model,
        maxRetries: config.retryAttempts,
      });
    }
  }

  // 6. Track results and statistics
  const results: GenerationResult[] = [];
  let generatedCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  const activeVoiceName = config.voiceFilter
    ? `${config.voiceFilter} (${getGeminiVoiceName(config.voiceFilter)})`
    : 'Sulafat (Female) / Charon (Male)';

  renderDashboard(
    {
      lessonTitle: 'A1 Unit 1 Lesson 1 (Greeting & Introductions)',
      voiceName: activeVoiceName,
      total: targets.length,
      generated: 0,
      skipped: 0,
      failed: 0,
      remaining: targets.length,
    },
    config.dryRun
  );

  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];

    // Update UI status
    renderDashboard(
      {
        lessonTitle: 'A1 Unit 1 Lesson 1 (Greeting & Introductions)',
        voiceName: `${target.voiceId} (${target.geminiVoiceName})`,
        total: targets.length,
        generated: generatedCount,
        skipped: skippedCount,
        failed: failedCount,
        remaining: targets.length - (generatedCount + skippedCount + failedCount),
        currentAudioId: target.audioId,
      },
      config.dryRun
    );

    // Step A0: Check candidate status policy (Requirement 17 & 18)
    const voiceProfile = VOICE_MAP[target.voiceId];
    if (voiceProfile?.status === 'candidate' && !config.voiceFilter && !config.testMode) {
      skippedCount++;
      results.push({
        audioId: target.audioId,
        voiceId: target.voiceId,
        geminiVoiceName: target.geminiVoiceName,
        text: target.text,
        masterWavPath: target.masterWavPath,
        optimizedMp3Path: target.optimizedMp3Path,
        relativePathMp3: target.relativePathMp3,
        status: 'skipped',
        error: 'Candidate voice status. Full production generation skipped (requires audition/test mode).',
        attemptCount: 0,
      });
      continue;
    }

    // Step A: Check if existing valid file exists in public/audio or audio-output AND published in manifest
    const publicMp3Path = path.join(process.cwd(), 'public', 'audio', target.relativePathMp3);
    const existingCheckOutput = await validateAudioFile(target.optimizedMp3Path);
    const existingCheckPublic = await validateAudioFile(publicMp3Path);
    const existingCheck = existingCheckPublic.isValid ? existingCheckPublic : existingCheckOutput;
    const manifestItem = getAudioManifestItem(target.audioId);

    if (!config.force && existingCheck.isValid && manifestItem?.status === 'published') {
      skippedCount++;
      results.push({
        audioId: target.audioId,
        voiceId: target.voiceId,
        geminiVoiceName: target.geminiVoiceName,
        text: target.text,
        masterWavPath: target.masterWavPath,
        optimizedMp3Path: target.optimizedMp3Path,
        relativePathMp3: target.relativePathMp3,
        status: 'skipped',
        durationSeconds: existingCheck.durationSeconds,
        sizeBytesMp3: existingCheck.sizeBytes,
        attemptCount: 0,
      });
      continue;
    }

    // Step B: Dry Run
    if (config.dryRun) {
      results.push({
        audioId: target.audioId,
        voiceId: target.voiceId,
        geminiVoiceName: target.geminiVoiceName,
        text: target.text,
        masterWavPath: target.masterWavPath,
        optimizedMp3Path: target.optimizedMp3Path,
        relativePathMp3: target.relativePathMp3,
        status: 'dry_run',
        attemptCount: 0,
      });
      generatedCount++;
      continue;
    }

    // Step C: Actual Gemini TTS Generation
    let isQuotaError = false;
    try {
      const { audioBuffer, attemptCount } = await ttsClient!.generateAudioBuffer(
        target.text,
        target.voiceId,
        target.isSlowVersion
      );

      await processAudioOutput(audioBuffer, target.masterWavPath, target.optimizedMp3Path);
      const postCheck = await validateAudioFile(target.optimizedMp3Path);

      if (postCheck.isValid) {
        // Copy to public/audio directory for live serving
        fs.mkdirSync(path.dirname(publicMp3Path), { recursive: true });
        fs.copyFileSync(target.optimizedMp3Path, publicMp3Path);

        // Auto-update src/data/audioManifest.ts to mark as published
        updateAudioManifestFile([{
          audioId: target.audioId,
          lessonId: target.lessonId,
          unitId: target.unitId,
          language: target.language,
          voiceId: target.voiceId,
          durationSeconds: postCheck.durationSeconds || 1.0,
          sizeBytes: postCheck.sizeBytes || 0,
          remotePath: target.relativePathMp3,
          text: target.text,
        }]);

        generatedCount++;
        results.push({
          audioId: target.audioId,
          voiceId: target.voiceId,
          geminiVoiceName: target.geminiVoiceName,
          text: target.text,
          masterWavPath: target.masterWavPath,
          optimizedMp3Path: target.optimizedMp3Path,
          relativePathMp3: target.relativePathMp3,
          status: 'generated',
          durationSeconds: postCheck.durationSeconds,
          sizeBytesMp3: postCheck.sizeBytes,
          attemptCount,
        });
      } else {
        throw new Error(postCheck.reason || 'Post-generation validation failed');
      }
    } catch (err: any) {
      failedCount++;
      const errMsg = (err?.message || String(err)).replace(
        /AIza[0-9A-Za-z-_]{35}/g,
        'AIza***[REDACTED]***'
      );

      if (errMsg.includes('429') || errMsg.includes('RESOURCE_EXHAUSTED') || errMsg.includes('Quota exceeded')) {
        isQuotaError = true;
      }

      results.push({
        audioId: target.audioId,
        voiceId: target.voiceId,
        geminiVoiceName: target.geminiVoiceName,
        text: target.text,
        masterWavPath: target.masterWavPath,
        optimizedMp3Path: target.optimizedMp3Path,
        relativePathMp3: target.relativePathMp3,
        status: 'failed',
        error: errMsg,
        attemptCount: config.retryAttempts,
      });

      if (isQuotaError) {
        console.warn(`\n⚠️ Quota limit reached on Gemini TTS API (${errMsg}). Stopping batch cleanly. All successfully generated assets are saved and published.\n`);
        break;
      }
    }

    // Throttling delay to respect 3 RPM rate limit on Gemini Free Tier (21 seconds pacing)
    if (i < targets.length - 1 && !config.dryRun) {
      console.log(`[Audio Generator] Waiting 21s pacing delay to maintain rate limit quota...`);
      await new Promise((res) => setTimeout(res, 21000));
    }
  }

  // 7. Final Dashboard Render
  const totalDurationSeconds = (Date.now() - startTime) / 1000;
  renderDashboard(
    {
      lessonTitle: 'A1 Unit 1 Lesson 1 (Greeting & Introductions)',
      voiceName: activeVoiceName,
      total: targets.length,
      generated: generatedCount,
      skipped: skippedCount,
      failed: failedCount,
      remaining: 0,
    },
    config.dryRun
  );

  // 8. Generate Reports & Manifests
  const report: GenerationReport = {
    timestamp: new Date().toISOString(),
    model: config.model,
    dryRun: config.dryRun,
    testMode: config.testMode,
    testLimit: config.testLimit,
    selectedVoice: config.voiceFilter,
    outputDirectory: config.outputBaseDir,
    totalRequested: targets.length,
    generatedCount,
    skippedCount,
    failedCount,
    totalDurationSeconds,
    results,
  };

  const reporter = new GenerationReporter(process.cwd());
  const reportPaths = reporter.saveReports(report);

  console.log(`\n==========================================================`);
  console.log(` GENERATION FINISHED & REPORTS SAVED`);
  console.log(`==========================================================`);
  console.log(`Report JSON : ${reportPaths.jsonReportPath}`);
  console.log(`Report Text : ${reportPaths.textReportPath}`);
  console.log(`Manifest    : ${reportPaths.manifestPath}`);
  console.log(`==========================================================\n`);

  return report;
}

// Execute directly if called from CLI
if (process.argv[1] && process.argv[1].endsWith('generateAudio.ts')) {
  runAudioGenerator().catch((err) => {
    console.error('[Audio Generator Fatal Error]:', err);
    process.exit(1);
  });
}
