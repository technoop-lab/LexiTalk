// scripts/generate_stage2_master.js
import fs from 'fs';
import path from 'path';

// Helper function to build a vocabulary object
function makeVocab(id, [lemma, meaningHi, ipa, devanagari, syllables, stress, register, collocations, relatedForms, example, commonError, pos = 'noun']) {
  return {
    id,
    lemma,
    wordForm: lemma,
    pos,
    ipa,
    devanagari,
    syllables,
    stress,
    hindiMeaning: meaningHi,
    register,
    collocations: Array.isArray(collocations) ? collocations : [collocations],
    relatedForms: relatedForms || [],
    example,
    commonError: commonError || `Ensure correct primary stress on the ${stress}.`
  };
}

export { makeVocab };
