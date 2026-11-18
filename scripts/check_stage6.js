// scripts/check_stage6.js
import fs from 'fs';
import path from 'path';

async function main() {
  for (let d = 51; d <= 60; d++) {
    const mod = await import(`../content_builder/day${d}.js`);
    const data = mod[`day${d}`];
    const vocab = data.learn?.vocabulary?.length || 0;
    const examples = data.examples?.length || 0;
    const exercises = data.practice?.exercises?.length || 0;
    const trans = data.practice?.translationSet?.length || 0;
    const phrases = data.learn?.spokenPhrases?.length || 0;
    console.log(`Day ${d}: Vocab=${vocab}, Phrases=${phrases}, Examples=${examples}, Exercises=${exercises}, Translations=${trans}`);
  }
}

main().catch(err => console.error(err));
