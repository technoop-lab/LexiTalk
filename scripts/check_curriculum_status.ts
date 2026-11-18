import { CurriculumUpgradeManifestService, CURRICULUM_UPGRADE_MANIFEST } from '../src/data/curriculumUpgradeManifest';
import { CurriculumService } from '../src/services/CurriculumService';

console.log("Checking Curriculum Upgrade Manifest and Curriculum status...");

const records = Object.values(CURRICULUM_UPGRADE_MANIFEST);
console.log(`Total lesson records in manifest: ${records.length}`);

const unitMap = new Map<string, typeof records>();
for (const r of records) {
  if (!unitMap.has(r.unitId)) {
    unitMap.set(r.unitId, []);
  }
  unitMap.get(r.unitId)!.push(r);
}

for (const [unitId, unitRecords] of unitMap.entries()) {
  const upgraded = unitRecords.filter(r => r.upgradeStatus === 'QA_PASSED' || r.upgradeStatus === 'UPGRADED').length;
  const notStarted = unitRecords.filter(r => r.upgradeStatus === 'NOT_STARTED').length;
  const inProgress = unitRecords.filter(r => r.upgradeStatus === 'IN_PROGRESS').length;
  const totalEx = unitRecords.reduce((sum, r) => sum + r.newExerciseCount, 0);
  console.log(`Unit ${unitId} (${unitRecords[0].cefr}): ${unitRecords.length} lessons | Upgraded: ${upgraded} | InProgress: ${inProgress} | NotStarted: ${notStarted} | Total Ex: ${totalEx}`);
}
