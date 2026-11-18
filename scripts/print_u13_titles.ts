import { CurriculumService } from '../src/services/CurriculumService';

for (let num = 181; num <= 195; num++) {
  const id = `lesson_a2_13_${num}`;
  const lesson = CurriculumService.getDetailedLesson(id);
  const p = lesson?.practiceExercises?.length || 0;
  const r = lesson?.reviewExercises?.length || 0;
  const a = lesson?.assessmentExercises?.length || 0;
  const total = p + r + a;
  console.log(`${id}: title: "${lesson?.title}", total: ${total} (p:${p}, r:${r}, a:${a})`);
}
