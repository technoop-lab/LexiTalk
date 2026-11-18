import fs from 'fs';
import path from 'path';

// Helper to write content builder day files
function writeDayFile(dayNum, dayData) {
  const filePath = path.join(process.cwd(), 'content_builder', `day${dayNum}.js`);
  const content = `export const day${dayNum} = ${JSON.stringify(dayData, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`[SUCCESS] Wrote day${dayNum}.js`);
}

export { writeDayFile };
