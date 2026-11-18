import * as fs from 'fs';
import * as path from 'path';

import { day31Dialogues } from './day31';
import { day32Dialogues } from './day32';
import { day33Dialogues } from './day33';
import { day34Dialogues } from './day34';
import { day35Dialogues } from './day35';
import { day36Dialogues } from './day36';
import { day37Dialogues } from './day37';
import { day38Dialogues } from './day38';
import { day39Dialogues } from './day39';
import { day40Dialogues } from './day40';

const targetJsonPath = path.resolve(process.cwd(), 'DAYS_31_40_CONTENT.json');

const dayDialoguesMap: Record<number, any[]> = {
  31: day31Dialogues,
  32: day32Dialogues,
  33: day33Dialogues,
  34: day34Dialogues,
  35: day35Dialogues,
  36: day36Dialogues,
  37: day37Dialogues,
  38: day38Dialogues,
  39: day39Dialogues,
  40: day40Dialogues
};

function integrate() {
  console.log('Reading DAYS_31_40_CONTENT.json from:', targetJsonPath);
  const rawData = fs.readFileSync(targetJsonPath, 'utf8');
  const rootData = JSON.parse(rawData);

  const daysData = Array.isArray(rootData) ? rootData : (rootData.days || []);

  if (!Array.isArray(daysData) || daysData.length === 0) {
    throw new Error('Expected daysData to be an array of Day objects');
  }

  let totalDialoguesIntegrated = 0;
  let totalTurnsIntegrated = 0;

  for (const day of daysData) {
    const dayNum = day.dayNumber || day.day;
    if (dayDialoguesMap[dayNum]) {
      const dialogues = dayDialoguesMap[dayNum];
      if (!day.use) {
        day.use = {};
      }
      day.use.dialogues = dialogues;
      day.use.dialogue = dialogues[0];

      // Clean up any legacy root properties
      if (day.dialogues) {
        delete day.dialogues;
      }
      if (day.dialogue) {
        delete day.dialogue;
      }
      totalDialoguesIntegrated += dialogues.length;

      for (const d of dialogues) {
        totalTurnsIntegrated += (d.turns || []).length;
      }
      console.log(`Day ${dayNum}: Integrated ${dialogues.length} dialogues (${dialogues.reduce((acc, cur) => acc + (cur.turns || []).length, 0)} turns).`);
    } else {
      console.warn(`No dialogues found for Day ${dayNum}`);
    }
  }

  fs.writeFileSync(targetJsonPath, JSON.stringify(rootData, null, 2), 'utf8');
  console.log('Successfully wrote DAYS_31_40_CONTENT.json.');
  console.log(`Total Dialogues Integrated: ${totalDialoguesIntegrated}`);
  console.log(`Total Turns Integrated: ${totalTurnsIntegrated}`);
}

integrate();
