const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const androidAssetsPublicDir = path.join(projectRoot, 'android', 'app', 'src', 'main', 'assets', 'public');

console.log('============================================================');
console.log('STEP 1: IDENTIFY RUNTIME BUNDLE BEFORE REBUILD');
console.log('============================================================');
console.log(`Web Assets Folder: ${androidAssetsPublicDir}`);
console.log(`Index.html Path: ${path.join(androidAssetsPublicDir, 'index.html')}`);

console.log('\n============================================================');
console.log('STEP 4: FORCE WEB ASSET REBUILD & SYNC TO CAPACITOR ANDROID');
console.log('============================================================');

try {
  console.log('Running "npx vite build"...');
  execSync('npx vite build', { cwd: projectRoot, stdio: 'inherit' });
  console.log('✅ Vite build completed successfully!');

  // Clean stale assets in android/app/src/main/assets/public
  if (fs.existsSync(androidAssetsPublicDir)) {
    fs.rmSync(androidAssetsPublicDir, { recursive: true, force: true });
  }

  // Copy dist to android/app/src/main/assets/public
  console.log(`Copying dist/ to ${androidAssetsPublicDir}...`);
  fs.cpSync(distDir, androidAssetsPublicDir, { recursive: true });
  console.log('✅ Fresh web assets copied to Android APK assets folder!');
} catch (err) {
  console.error('❌ Error during web asset rebuild:', err.message);
  process.exit(1);
}

console.log('\n============================================================');
console.log('STEP 2, 3 & 5: RUNTIME PROOF & BUNDLE VERIFICATION');
console.log('============================================================');

const publicAssetsDir = path.join(androidAssetsPublicDir, 'assets');
const updatedAssets = fs.readdirSync(publicAssetsDir);
const jsBundleName = updatedAssets.find((f) => f.endsWith('.js'));
console.log(`Fresh Packaged JS Bundle Filename: ${jsBundleName}`);

if (!jsBundleName) {
  console.error('❌ FAILURE: No JS bundle file found in assets!');
  process.exit(1);
}

const jsBundlePath = path.join(publicAssetsDir, jsBundleName);
const jsContent = fs.readFileSync(jsBundlePath, 'utf8');

// STEP 2 Check
const hasAssessmentView =
  jsContent.includes('CEFR EXIT MASTERY ASSESSMENT') ||
  jsContent.includes('CEFR MASTERY EXIT ASSESSMENT') ||
  jsContent.includes('CEFR Mastery Exit Assessment') ||
  jsContent.includes('Exit Assessment');

console.log(`1. New AssessmentView exists in bundle? ${hasAssessmentView ? 'YES' : 'NO'}`);

// STEP 3 Check
const legacyStrings = [
  "Assessment Item",
  "MODEL RESPONSE",
  "Reveal Evaluation Model",
  "Written Checklist",
];

const foundLegacy = [];
legacyStrings.forEach((s) => {
  if (jsContent.includes(s)) {
    foundLegacy.push(s);
  }
});

console.log(`2. Legacy UI strings found in bundle? ${foundLegacy.length > 0 ? 'YES (' + foundLegacy.join(', ') + ')' : 'NO (0 Found)'}`);

if (hasAssessmentView && foundLegacy.length === 0) {
  console.log('\n🎉 ALL RUNTIME BUNDLE CHECKS PASSED 100%!');
} else {
  console.error('\n❌ FAILURE: Runtime bundle checks failed!');
  process.exit(1);
}
