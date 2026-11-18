import fs from 'fs';
import path from 'path';
import { GenerationReport, GenerationResult } from './types';

export class GenerationReporter {
  private reportDir: string;

  constructor(reportDir: string = process.cwd()) {
    this.reportDir = reportDir;
  }

  public saveReports(report: GenerationReport): {
    jsonReportPath: string;
    textReportPath: string;
    manifestPath: string;
  } {
    const jsonReportPath = path.join(this.reportDir, 'generation-report.json');
    const textReportPath = path.join(this.reportDir, 'generation-report.txt');
    const manifestPath = path.join(this.reportDir, 'generated-audio-manifest.json');

    // 1. Write generation-report.json
    fs.writeFileSync(jsonReportPath, JSON.stringify(report, null, 2), 'utf8');

    // 2. Build human readable generation-report.txt
    const txtLines: string[] = [
      '==========================================================',
      ' CURIOSITY ENGLISH ACADEMY - AUDIO GENERATION REPORT',
      '==========================================================',
      `Timestamp        : ${report.timestamp}`,
      `TTS Model        : ${report.model}`,
      `Dry Run Mode     : ${report.dryRun ? 'YES' : 'NO'}`,
      `Test Mode        : ${report.testMode ? `YES (Limit: ${report.testLimit})` : 'NO'}`,
      `Selected Voice   : ${report.selectedVoice || 'ALL'}`,
      `Output Directory : ${report.outputDirectory}`,
      '----------------------------------------------------------',
      `Total Requested  : ${report.totalRequested}`,
      `Generated        : ${report.generatedCount}`,
      `Skipped (Exists) : ${report.skippedCount}`,
      `Failed           : ${report.failedCount}`,
      `Total Duration   : ${report.totalDurationSeconds.toFixed(2)} seconds`,
      '==========================================================',
      'DETAILED ITEM SUMMARY:',
      '----------------------------------------------------------',
    ];

    for (const res of report.results) {
      const statusTag = res.status.toUpperCase().padEnd(9);
      txtLines.push(
        `[${statusTag}] AudioID: ${res.audioId} | Voice: ${res.geminiVoiceName} (${res.voiceId})`
      );
      txtLines.push(`            Text   : "${res.text}"`);
      txtLines.push(`            File   : ${res.relativePathMp3}`);
      if (res.error) {
        txtLines.push(`            Error  : ${res.error}`);
      }
      txtLines.push('');
    }

    txtLines.push('==========================================================');
    fs.writeFileSync(textReportPath, txtLines.join('\n'), 'utf8');

    // 3. Build updated production audio manifest JSON
    const manifestItems = report.results.map((res) => ({
      audioId: res.audioId,
      voiceId: res.voiceId,
      geminiVoiceName: res.geminiVoiceName,
      language: 'en',
      version: 1,
      filename: path.basename(res.optimizedMp3Path),
      relativePath: res.relativePathMp3,
      format: 'mp3',
      durationSeconds: res.durationSeconds || 1.0,
      sizeBytesMp3: res.sizeBytesMp3 || 0,
      status: res.status === 'generated' || res.status === 'skipped' ? 'ready' : 'failed',
    }));

    fs.writeFileSync(manifestPath, JSON.stringify(manifestItems, null, 2), 'utf8');

    return { jsonReportPath, textReportPath, manifestPath };
  }
}
