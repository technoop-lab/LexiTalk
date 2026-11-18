import { CurriculumService } from '../src/services/CurriculumService';

console.log("Checking Unit 2 (Lessons 16-30)...");
for (let num = 16; num <= 30; num++) {
  const id = `lesson_a1_2_${num}`;
  const lesson = CurriculumService.getDetailedLesson(id);
  const p = lesson?.practiceExercises?.length || 0;
  const r = lesson?.reviewExercises?.length || 0;
  const a = lesson?.assessmentExercises?.length || 0;
  const total = p + r + a;
  console.log(`${id}: title: "${lesson?.title}", total: ${total} (p:${p}, r:${r}, a:${a})`);
}
