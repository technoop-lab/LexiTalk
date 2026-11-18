const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');
const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.ts'));

files.forEach((fileName) => {
  const filePath = path.join(dataDir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');

  let modified = content;

  modified = modified.replace(/Assessment Item/g, 'Assessment Task');
  modified = modified.replace(/MODEL RESPONSE/g, 'NATIVE SPEECH SUMMARY');
  modified = modified.replace(/Reveal Evaluation Model/g, 'View Model Answer');
  modified = modified.replace(/Written Checklist/g, 'Written Competency');
  modified = modified.replace(/Benchmark/g, 'Exit Standard');

  if (modified !== content) {
    fs.writeFileSync(filePath, modified, 'utf8');
    console.log(`Replaced data legacy strings in: ${fileName}`);
  }
});
