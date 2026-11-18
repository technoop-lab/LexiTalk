export interface DashboardStats {
  lessonTitle: string;
  voiceName: string;
  total: number;
  generated: number;
  skipped: number;
  failed: number;
  remaining: number;
  currentAudioId?: string;
}

export function renderDashboard(stats: DashboardStats, isDryRun = false) {
  const completed = stats.generated + stats.skipped + stats.failed;
  const percent = stats.total > 0 ? Math.round((completed / stats.total) * 100) : 0;
  
  const barLength = 20;
  const filledLength = Math.round((barLength * percent) / 100);
  const progressBar = '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength);

  console.clear();
  console.log(`==========================================================`);
  console.log(` CURIOSITY AUDIO PRODUCTION ENGINE ${isDryRun ? '[DRY RUN MODE]' : ''}`);
  console.log(`==========================================================`);
  console.log(`Lesson    : ${stats.lessonTitle}`);
  console.log(`Voice     : ${stats.voiceName}`);
  console.log(`Progress  : [${progressBar}] ${percent}% (${completed}/${stats.total})`);
  console.log(`----------------------------------------------------------`);
  console.log(`Generated : ${stats.generated}`);
  console.log(`Skipped   : ${stats.skipped} (Already exists)`);
  console.log(`Failed    : ${stats.failed}`);
  console.log(`Remaining : ${stats.remaining}`);
  if (stats.currentAudioId) {
    console.log(`Processing: ${stats.currentAudioId}`);
  }
  console.log(`==========================================================\n`);
}
