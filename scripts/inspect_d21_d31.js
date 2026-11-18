// scripts/inspect_d21_d31.js
const d21 = (await import('../content_builder/day21.js')).day21;
const d31 = (await import('../content_builder/day31.js')).day31;

console.log('Day 21 keys:', Object.keys(d21));
console.log('Day 21 teach keys:', Object.keys(d21.teach || {}));
console.log('Day 21 learn keys:', Object.keys(d21.learn || {}));
console.log('Day 21 examples length:', d21.examples?.length);
console.log('Day 21 practice keys:', Object.keys(d21.practice || {}));
console.log('Day 21 practice exercises length:', d21.practice?.exercises?.length);
console.log('Day 21 practice translationSet length:', d21.practice?.translationSet?.length);
console.log('Day 21 use keys:', Object.keys(d21.use || {}));
console.log('Day 21 assess keys:', Object.keys(d21.assess || {}));

console.log('\nDay 31 keys:', Object.keys(d31));
console.log('Day 31 examples length:', d31.examples?.length);
console.log('Day 31 practice exercises length:', d31.practice?.exercises?.length);
console.log('Day 31 practice translationSet length:', d31.practice?.translationSet?.length);
