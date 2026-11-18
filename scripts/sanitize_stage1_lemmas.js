import fs from 'fs';
import path from 'path';

// Replacement word banks for any duplicates found
const replacements = {
  // Day 02 replacements for words already in Day 01
  "courtesy": ["urbanity", "सभ्यता / शिष्टता", "/ɜːˈbæn.ə.ti/", "अर-बैन-इ-टी", "ur · ban · i · ty (4)", "2nd Syllable", "Formal / Elevated", ["show urbanity", "cultured urbanity"], [], "His refined speech and urbanity impressed all international delegates.", "Stress 2nd syllable (ur-BAN-i-ty).", "noun"],
  "gratitude": ["indebtedness", "कृतज्ञता / आभार", "/ɪnˈdet.ɪd.nəs/", "इन-डेट-इड-नस", "in · debt · ed · ness (4)", "2nd Syllable", "Formal / Legal", ["sense of indebtedness", "deep indebtedness"], [], "We acknowledge our sincere indebtedness to the university library staff.", "Silent 'b'; stress 2nd syllable (in-DEBT-ed-ness).", "noun"],
  "reverence": ["veneration", "आदर / पूज्यभाव", "/ˌven.ərˈeɪ.ʃən/", "वेन-अर-ए-शन", "ven · er · a · tion (4)", "3rd Syllable", "Religious / Ethical", ["hold in veneration", "deep veneration"], [], "The ancient sages were regarded with deep veneration across the land.", "Stress 3rd syllable (ven-er-A-tion).", "noun"],
  "acknowledge": ["concur", "सहमति प्रकट करना", "/kənˈkɜːr/", "कन-कर", "con · cur (2)", "2nd Syllable", "Formal / Legal", ["concur with a view", "fully concur"], [], "We fully concur with your insightful observations regarding the schedule.", "Stress 2nd syllable (con-CUR).", "verb"],
  "cordiality": ["affability", "मिलनसारिता / सौम्यता", "/ˌæf.əˈbɪl.ə.ti/", "ऐफ़-अ-बिल-इ-टी", "af · fa · bil · i · ty (5)", "3rd Syllable", "Social / Character", ["natural affability", "renowned affability"], [], "His warm smile and natural affability made every newcomer feel at ease.", "Stress 3rd syllable (af-fa-BIL-i-ty).", "noun"],
  "civility": ["comity", "सौहार्द / पारस्परिक शिष्टता", "/ˈkɒm.ɪ.ti/", "कॉम-इ-टी", "com · i · ty (3)", "1st Syllable", "Diplomacy / Legal", ["comity of nations", "interstate comity"], [], "Mutual respect and diplomatic comity prevailed throughout the summit.", "Stress 1st syllable (COM-i-ty).", "noun"],
  "hospitality": ["bounty", "उदारता / प्रचुर दान", "/ˈbaʊn.ti/", "बाउन-टी", "boun · ty (2)", "1st Syllable", "Universal / Nature", ["generous bounty", "nature's bounty"], [], "The royal hosts shared the bounty of the harvest with all traveling guests.", "Stress 1st syllable (BOUN-ty).", "noun"],
  "cordial": ["amiable", "स्नेही / मिलनसार", "/ˈeɪ.mi.ə.bəl/", "ए-मि-अ-बल", "a · mi · a · ble (4)", "1st Syllable", "Social / Character", ["amiable host", "amiable personality"], [], "She is an amiable colleague who always greets everyone with enthusiasm.", "Stress 1st syllable (A-mi-a-ble).", "adjective"],
  "welcome": ["salutation", "अभिवादन / नमस्कार", "/ˌsæl.jəˈteɪ.ʃən/", "सैल-यु-ते-शन", "sal · u · ta · tion (4)", "3rd Syllable", "Formal / Letter", ["formal salutation", "warm salutation"], [], "Open your business letter with an appropriate and courteous salutation.", "Stress 3rd syllable (sal-u-TA-tion).", "noun"],
  "esteem": ["admiration", "प्रशंसा / सराहना", "/ˌæd.mɪˈreɪ.ʃən/", "ऐड-मि-रे-शन", "ad · mi · ra · tion (4)", "3rd Syllable", "Universal / Emotion", ["great admiration", "express admiration"], [], "I have the greatest admiration for his tireless dedication to social service.", "Stress 3rd syllable (ad-mi-RA-tion).", "noun"],

  // Day 03 duplicate fix
  "appalling": ["disastrous", "विनाशकारी / अत्यंत दुखद", "/dɪˈzɑː.strəs/", "दि-ज़ास-ट्रस", "di · sas · trous (3)", "2nd Syllable", "News / Universal", ["disastrous outcome", "disastrous news"], [], "The sudden monsoon floods caused a disastrous disruption in transport.", "Stress 2nd syllable (di-SAS-trous).", "adjective"],

  // Day 04 duplicate fixes
  "delegate": ["entrust", "सौंपना / विश्वास करके देना", "/ɪnˈtrʌst/", "इन-ट्रस्ट", "en · trust (2)", "2nd Syllable", "Management / Legal", ["entrust a task", "entrust responsibility"], [], "The director decided to entrust the aerospace audit to senior consultants.", "Stress 2nd syllable (en-TRUST).", "verb"],
  "solicit": ["implore", "प्रार्थना करना / अनुनय-विनय करना", "/ɪmˈplɔːr/", "इम-प्लोर", "im · plore (2)", "2nd Syllable", "Formal / Literature", ["implore assistance", "implore cooperation"], [], "We implore all citizens to conserve drinking water during summer months.", "Stress 2nd syllable (im-PLORE).", "verb"],

  // Day 05 duplicate fixes
  "punctual": ["diligent", "परिश्रमी / कर्मठ", "/ˈdɪl.ɪ.dʒənt/", "डिल-इ-जन्ट", "dil · i · gent (3)", "1st Syllable", "HR / Education", ["diligent student", "diligent researcher"], [], "The young intern is remarkably diligent and committed to precision.", "Stress 1st syllable (DIL-i-gent).", "adjective"],
  "competent": ["proficient", "दक्ष / कुशल", "/prəˈfɪʃ.ənt/", "प्र-फ़िश-अन्ट", "pro · fi · cient (3)", "2nd Syllable", "Workplace / Skills", ["proficient programmer", "highly proficient"], [], "Our entire technical team is highly proficient in database security.", "Stress 2nd syllable (pro-FI-cient).", "adjective"],
  "astute": ["shrewd", "चतुर / सूक्ष्मदर्शी", "/ʃruːd/", "श्रूड", "shrewd (1)", "1st Syllable", "Business / Politics", ["shrewd investor", "shrewd observation"], [], "She is a shrewd negotiator who secures favorable terms for her company.", "One syllable; long vowel /uː/.", "adjective"],
  "formidable": ["imposing", "भव्य / प्रभावशाली", "/ɪmˈpəʊ.zɪŋ/", "इम-पो-ज़िंग", "im · pos · ing (3)", "2nd Syllable", "Architecture / Demeanor", ["imposing building", "imposing presence"], [], "The new university library is an imposing structure on the hill.", "Stress 2nd syllable (im-POS-ing).", "adjective"],

  // Day 07 duplicate fix
  "presence": ["attendance", "उपस्थिति / हाजिरी", "/əˈten.dəns/", "अ-टेन-डन्स", "at · tend · ance (3)", "2nd Syllable", "Institutions / Events", ["record attendance", "regular attendance", "mandatory attendance"], [], "Your regular attendance at these morning workshops is highly valued.", "Stress 2nd syllable (at-TEN-dance).", "noun"],

  // Day 09 duplicate fix
  "attribute": ["disposition", "मनोवृत्ति / स्वभाव", "/ˌdɪs.pəˈzɪʃ.ən/", "डिस-प-ज़िश-अन", "dis · po · si · tion (4)", "3rd Syllable", "Psychology / Character", ["calm disposition", "friendly disposition"], [], "She has a serene and calm disposition even during challenging emergencies.", "Stress 3rd syllable (dis-po-SI-tion).", "noun"]
};

async function sanitizeAllDays() {
  console.log("[SANITIZER] Scanning and cleaning all 10 Stage 1 days...");

  for (let d = 1; d <= 10; d++) {
    const num = String(d).padStart(2, '0');
    const filePath = path.join(process.cwd(), 'content_builder', `day${num}.js`);
    const mod = await import(`../content_builder/day${num}.js`);
    const dayObj = mod[`day${num}`];

    let modified = false;
    const seenInThisDay = new Set();

    dayObj.learn.vocabulary.forEach((vocabItem, vIdx) => {
      const curLemma = (vocabItem.lemma || vocabItem.wordForm || "").toLowerCase().trim();
      
      // Check if duplicate within same day or in replacements table
      if (seenInThisDay.has(curLemma) || (replacements[curLemma] && (d === 2 || d === 3 || d === 4 || d === 5 || d === 7 || d === 9))) {
        const rep = replacements[curLemma];
        if (rep) {
          const [lemma, meaningHi, ipa, devanagari, syllables, stress, register, collocations, relatedForms, example, commonError, pos] = rep;
          dayObj.learn.vocabulary[vIdx] = {
            id: vocabItem.id,
            lemma,
            wordForm: lemma,
            pos: pos || vocabItem.pos || "noun",
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
          seenInThisDay.add(lemma.toLowerCase().trim());
          modified = true;
          console.log(`[DAY ${num}] Replaced duplicate '${curLemma}' -> '${lemma}'`);
        }
      } else {
        seenInThisDay.add(curLemma);
      }
    });

    if (modified) {
      const fileContent = `// Auto-generated Master Enriched Lesson for Day ${num}\nexport const day${num} = ${JSON.stringify(dayObj, null, 2)};\n`;
      fs.writeFileSync(filePath, fileContent, 'utf-8');
      console.log(`[DAY ${num}] Successfully updated and saved to disk.`);
    }
  }

  console.log("[SANITIZER] Sanitization complete.");
}

sanitizeAllDays();
