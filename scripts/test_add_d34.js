// scripts/test_add_d34.js
import { getPriorLemmas } from './stage4_lexicon_helper.js';

const d31 = (await import('../content_builder/day31.js')).day31;
const d32 = (await import('../content_builder/day32.js')).day32;
const prior = await getPriorLemmas();
d31.learn.vocabulary.forEach(v => prior.add(v.lemma));
d32.learn.vocabulary.forEach(v => prior.add(v.lemma));

const cand34 = [
  "cuisine", "culinary", "appetizer", "delicacy", "savoury", "lactose", "gluten",
  "allergic", "intolerance", "platter", "portion", "cutlery", "banquet", "gourmet",
  "garnish", "seasoning", "simmer", "saute", "marinate", "palate", "buffet",
  "gratuity", "waitress", "takeaway", "leftover", "pungent", "appetizing",
  "condiment", "delectable", "scrumptious", "epicure", "epicurean", "palatable",
  "unpalatable", "gastronomy", "gastronomic", "sommelier", "confectionery",
  "confection", "decaffeinated", "vegetarianism", "veganism", "lacto-vegetarian",
  "succulent", "succulence", "piquant", "piquancy", "gastronome", "morsel",
  "sumptuous", "restaurateur", "degustation", "aperitif", "digestif", "flambé",
  "braise", "poach", "julienne", "confit", "vinaigrette", "crockery", "decanter", "carafe",
  // additional
  "marination", "tablecloth", "goblet", "chalice", "barista", "charcuterie",
  "entree", "bisque", "chowder", "broth", "infusion", "decoction", "caramelize"
];

const unique = [];
const dupes = [];
for (const w of cand34) {
  if (prior.has(w.toLowerCase())) {
    dupes.push(w);
  } else {
    unique.push(w);
  }
}
console.log(`Day 34 candidate test: Unique = ${unique.length}, Dupes = ${dupes.length}`);
