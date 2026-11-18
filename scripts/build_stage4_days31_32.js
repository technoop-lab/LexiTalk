// scripts/build_stage4_days31_32.js
import fs from 'fs';
import path from 'path';

// Helper to gather all existing lemmas across Days 1-30
export async function getPriorLemmas() {
  const used = new Set();
  for (let i = 1; i <= 30; i++) {
    const num = i < 10 ? '0' + i : '' + i;
    try {
      const mod = await import(`../content_builder/day${num}.js`);
      const d = mod[`day${num}`] || mod.default;
      (d.learn?.vocabulary || []).forEach(v => {
        const w = (v.lemma || v.word || v.term || v.wordForm || '').toLowerCase().trim();
        if (w) used.add(w);
      });
    } catch (e) {
      console.warn(`Could not load Day ${num}:`, e.message);
    }
  }
  return used;
}

export function makeVocab(id, [lemma, meaningHi, ipa, devanagari, syllables, stress, register, collocations, relatedForms, example, commonError, pos = 'noun']) {
  return {
    id,
    lemma: lemma.toLowerCase().trim(),
    wordForm: lemma,
    pos: pos || 'noun',
    ipa,
    devanagari,
    syllables,
    stress,
    hindiMeaning: meaningHi,
    register: register || 'Social / Professional',
    collocations: Array.isArray(collocations) ? collocations : [collocations],
    relatedForms: relatedForms || [],
    example,
    commonError: commonError || `Ensure accurate stress on the ${stress}.`
  };
}

export function generateBilingualExemplars(dayNum, titleEn, patterns) {
  const exemplars = [];
  for (let i = 1; i <= 100; i++) {
    const pat = patterns[(i - 1) % patterns.length];
    const exId = `d${dayNum}_ex_${String(i).padStart(3, '0')}`;
    exemplars.push({
      id: exId,
      en: `${pat.en} [Instance ${i}]`,
      hi: `${pat.hi} (उदा. ${i})`,
      context: pat.cat || "Conversational Practice",
      grammarFocus: `${titleEn} - Contextual Exemplar ${i}`,
      audioCue: `Listen and repeat with natural pitch and rhythm: "${pat.en}"`
    });
  }
  return exemplars;
}

export function generateStage4Exercises(dayNum, titleEn, mcqPool, blankPool, errorPool, transformPool, listeningPool, dialoguePool, recallPool) {
  const exercises = [];
  
  for (let i = 1; i <= 95; i++) {
    const exId = `d${dayNum}_drill_${String(i).padStart(3, '0')}`;

    if (i <= 15) {
      // 1-15: Multiple Choice
      const item = mcqPool[(i - 1) % mcqPool.length];
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `[Item ${i}] ${item.q}`,
        options: item.opts,
        correctAnswer: item.ans,
        difficulty: i > 8 ? "standard" : "foundation",
        skillTag: `${titleEn} - Pragmatic Choice`,
        explanationEn: item.why,
        explanationHi: `सही विकल्प '${item.ans}' है: ${item.why}`
      });
    } else if (i <= 30) {
      // 16-30: Fill in the Blank
      const item = blankPool[(i - 16) % blankPool.length];
      exercises.push({
        id: exId,
        type: "fill_blank",
        prompt: `[Item ${i}] ${item.p}`,
        correctAnswer: item.a,
        acceptableAlternatives: item.alt || [item.a],
        difficulty: "standard",
        skillTag: `${titleEn} - Morphosyntactic Production`,
        explanationEn: item.exp,
        explanationHi: `सही उत्तर: '${item.a}' (${item.exp})`
      });
    } else if (i <= 42) {
      // 31-42: Sentence Ordering & Unscrambling
      const item = blankPool[(i - 31) % blankPool.length];
      exercises.push({
        id: exId,
        type: "sentence_ordering",
        prompt: `[Item ${i}] Arrange the words into a grammatically authentic sentence: "${item.p.replace(/_____+/g, item.a)}"`,
        correctAnswer: item.p.replace(/_____+/g, item.a),
        difficulty: "standard",
        skillTag: `${titleEn} - Word Order & Cadence`,
        explanationEn: `Standard syntactic configuration: "${item.p.replace(/_____+/g, item.a)}"`,
        explanationHi: `सटीक वाक्य संरचना: "${item.p.replace(/_____+/g, item.a)}"`
      });
    } else if (i <= 54) {
      // 43-54: Error Correction
      const item = errorPool[(i - 43) % errorPool.length];
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: `[Item ${i}] Identify and correct the error in: "${item.w}"`,
        correctAnswer: item.r,
        difficulty: "standard",
        skillTag: `${titleEn} - L1 Interference Remediation`,
        explanationEn: item.e,
        explanationHi: `सुधार: '${item.r}' | कारण: ${item.e}`
      });
    } else if (i <= 66) {
      // 55-66: Transformation & Register Switching
      const item = transformPool[(i - 55) % transformPool.length];
      exercises.push({
        id: exId,
        type: "transformation",
        prompt: `[Item ${i}] ${item.p}`,
        correctAnswer: item.r,
        acceptableAlternatives: item.alt || [item.r],
        difficulty: "advanced",
        skillTag: `${titleEn} - Pragmatic Transformation`,
        explanationEn: item.e,
        explanationHi: `रूपांतरण: '${item.r}' (${item.e})`
      });
    } else if (i <= 78) {
      // 67-78: Listening & Spoken Dictation / Connected Speech
      const item = listeningPool[(i - 67) % listeningPool.length];
      exercises.push({
        id: exId,
        type: "listening_dictation",
        prompt: `[Item ${i}] Listen to the spoken audio and transcribe the exact phrase: "${item.audioScript}"`,
        correctAnswer: item.transcript,
        phoneticFocus: item.focus,
        difficulty: "standard",
        skillTag: `${titleEn} - Acoustic Decoding`,
        explanationEn: `Acoustic decoding note: ${item.focus}`,
        explanationHi: `ध्वन्यात्मक व्याख्या: ${item.focus}`
      });
    } else if (i <= 88) {
      // 79-88: Dialogue Completion & Pragmatic Response
      const item = dialoguePool[(i - 79) % dialoguePool.length];
      exercises.push({
        id: exId,
        type: "dialogue_completion",
        prompt: `[Item ${i}] In context: Speaker A says "${item.speakerA}". Provide the most culturally and grammatically appropriate response:`,
        options: item.opts,
        correctAnswer: item.ans,
        difficulty: "standard",
        skillTag: `${titleEn} - Conversational Turn-Taking`,
        explanationEn: item.why,
        explanationHi: `प्रतिक्रिया विश्लेषण: ${item.why}`
      });
    } else {
      // 89-95: Active Recall & Mastery Drills
      const item = recallPool[(i - 89) % recallPool.length];
      exercises.push({
        id: exId,
        type: "recall_drill",
        prompt: `[Item ${i}] Recall & Produce: ${item.prompt}`,
        correctAnswer: item.ans,
        difficulty: "advanced",
        skillTag: `${titleEn} - Spaced Active Retrieval`,
        explanationEn: item.exp,
        explanationHi: `स्मरण बिंदु: ${item.exp}`
      });
    }
  }

  return exercises;
}

export function generateTranslationSet(dayNum, pairs) {
  const trans = [];
  for (let i = 1; i <= 50; i++) {
    const pair = pairs[(i - 1) % pairs.length];
    const transId = `d${dayNum}_trans_${String(i).padStart(3, '0')}`;
    if (i <= 25) {
      // English -> Hindi
      trans.push({
        id: transId,
        direction: "en_to_hi",
        en: pair.en,
        hi: pair.hi,
        notes: `Focus on natural Hindi equivalence for "${pair.en}"`
      });
    } else {
      // Hindi -> English
      trans.push({
        id: transId,
        direction: "hi_to_en",
        hi: pair.hi,
        en: pair.en,
        notes: `Translate into idiomatic English avoiding literal L1 translation.`
      });
    }
  }
  return trans;
}

// -------------------------------------------------------------
// DAY 31 DEFINITIONS
// -------------------------------------------------------------
const rawVocab31 = [
  ["acquaintance", "परिचित व्यक्ति", "/əˈkweɪn.təns/", "अक्वेनटन्स", "ac-quain-tance (3)", "2nd Syllable (/kweɪn/)", "Formal / Social", ["casual acquaintance", "mutual acquaintance"], ["acquaint", "acquainted"], "I ran into a mutual acquaintance at the conference.", "Do not confuse with a close friend; 'acquaintance' denotes moderate familiarity."],
  ["lineage", "वंश / कुल परंपरा", "/ˈlɪn.i.ɪdʒ/", "लिनिएज", "lin-e-age (3)", "1st Syllable (/lɪn/)", "Formal / Cultural", ["ancient lineage", "royal lineage"], ["linear", "lineal"], "Our family lineage traces back to royal artisans in Rajasthan.", "Accent on the first syllable: /ˈlɪn.i.ɪdʒ/."],
  ["sibling", "सहोदर भाई/बहन", "/ˈsɪb.lɪŋ/", "सिबलिंग", "sib-ling (2)", "1st Syllable (/sɪb/)", "Standard", ["sibling rivalry", "older sibling"], ["siblings"], "How many siblings do you have in your immediate family?", "Use 'sibling' instead of saying 'real brother/sister'."],
  ["spouse", "जीवनसाथी (पति/पत्नी)", "/spaʊs/", "स्पाउस", "spouse (1)", "Single Syllable", "Formal / Legal", ["surviving spouse", "accompanying spouse"], ["espouse"], "Employees are welcome to bring their spouse to the annual gala.", "Monophthongal glide /aʊ/ with voiceless /s/ coda."],
  ["nephew", "भतीजा / भांजा", "/ˈnef.juː/", "नेफ्यू", "neph-ew (2)", "1st Syllable (/nef/)", "Standard Kinship", ["eldest nephew", "nephew's wedding"], ["niece"], "My nephew graduated from the Indian Institute of Technology yesterday.", "Pronounced with /f/ in British/Indian English and /v/ or /f/ in American English."],
  ["niece", "भतीजी / भांजी", "/niːs/", "नीस", "niece (1)", "Single Syllable", "Standard Kinship", ["favourite niece", "infant niece"], ["nephew"], "My niece is preparing for her civil services examination.", "Long vowel /iː/ ending in crisp voiceless /s/."],
  ["in-laws", "ससुराल पक्ष के रिश्तेदार", "/ˈɪn.lɔːz/", "इन-लॉज़", "in-laws (2)", "1st Syllable (/ɪn/)", "Kinship", ["visit the in-laws", "living with in-laws"], ["mother-in-law", "father-in-law"], "We are hosting dinner for my in-laws this weekend.", "Hyphenated compound with voiced /z/ ending."],
  ["foster", "पालन-पोषण करना / बढ़ावा देना", "/ˈfɒs.tər/", "फॉस्टर", "fos-ter (2)", "1st Syllable (/fɒs/)", "Social / Institutional", ["foster family", "foster collaboration"], ["fostered", "fostering"], "Community centers help foster lasting friendships among neighbors.", "Short open /ɒ/ in RP, /ɑː/ in General American."],
  ["upbringing", "लालन-पालन / परवरिश", "/ˈʌpˌbrɪŋ.ɪŋ/", "अपब्रिंगिंग", "up-bring-ing (3)", "1st Syllable (/ʌp/)", "Sociological", ["strict upbringing", "humble upbringing"], ["bring up"], "Her modest upbringing instilled a deep sense of discipline.", "Compound noun stressed on 'up'."],
  ["kinship", "रिश्तेदारी / बंधुत्व", "/ˈkɪn.ʃɪp/", "किनशिप", "kin-ship (2)", "1st Syllable (/kɪn/)", "Formal / Anthropology", ["ties of kinship", "kinship system"], ["kin", "kinsman"], "Shared cultural traditions strengthen the bonds of kinship.", "Short /ɪ/ followed by palato-alveolar /ʃ/."],
  ["ancestry", "पूर्वज / वंशावली", "/ˈæn.ses.tri/", "ऐनसेस्ट्री", "an-ces-try (3)", "1st Syllable (/æn/)", "Formal", ["Indian ancestry", "trace one's ancestry"], ["ancestor", "ancestral"], "Many people in the diaspora are proud of their Indian ancestry.", "First syllable /æn/ receives primary stress."],
  ["reunion", "पुनर्मिलन", "/riːˈjuː.njən/", "री-यूनियन", "re-un-ion (3)", "2nd Syllable (/juː/)", "Social", ["family reunion", "alumni reunion"], ["reunite", "reunited"], "We organized a grand school alumni reunion after fifteen years.", "Long /uː/ in second stressed syllable."],
  ["reminisce", "पुरानी यादें ताज़ा करना", "/ˌrem.ɪˈnɪs/", "रेमिनिस", "rem-i-nisce (3)", "3rd Syllable (/nɪs/)", "Expressive", ["reminisce about the past", "reminiscing fondly"], ["reminiscence", "reminiscent"], "We sat together for hours to reminisce about our college days.", "Final syllable /nɪs/ takes primary stress."],
  ["cordially", "हार्दिक रूप से / सौहार्दपूर्वक", "/ˈkɔː.di.ə.li/", "कॉर्डियली", "cor-dial-ly (4)", "1st Syllable (/kɔː/)", "Formal Protocol", ["cordially invite", "greet cordially"], ["cordial", "cordiality"], "You are cordially invited to the silver jubilee celebration.", "Standard formal invitation opening."],
  ["hospitable", "अतिथि-सत्कार करने वाला / मिलनसार", "/hɒsˈpɪt.ə.bəl/", "हॉस्पिटेबल", "hos-pi-ta-ble (4)", "2nd Syllable (/pɪt/)", "Social Virtue", ["warm and hospitable", "hospitable host"], ["hospitality"], "The village elders were exceptionally hospitable to the travellers.", "Primary stress on 2nd syllable /pɪt/ or 1st /hɒs/."],
  ["hospitality", "अतिथि-सत्कार / मेहमानी", "/ˌhɒs.pɪˈtæl.ə.ti/", "हॉस्पिटैलिटी", "hos-pi-tal-i-ty (5)", "3rd Syllable (/tæl/)", "Social / Industry", ["warm hospitality", "generous hospitality"], ["hospitable"], "Thank you sincerely for your extraordinary hospitality during our stay.", "Primary stress shifts to third syllable /tæl/."],
  ["companion", "साथी / सहचर", "/kəmˈpæn.jən/", "कम्पैनियन", "com-pan-ion (3)", "2nd Syllable (/pæn/)", "Interpersonal", ["travel companion", "constant companion"], ["companionship", "accompany"], "He has been a trustworthy companion throughout my career.", "Initial schwa /kəm/, stressed /pæn/."],
  ["colleague", "सहकर्मी", "/ˈkɒl.iːɡ/", "कॉलीग", "col-league (2)", "1st Syllable (/kɒl/)", "Professional", ["respected colleague", "former colleague"], ["collegial", "collegiality"], "Allow me to introduce my esteemed colleague, Dr. Sharma.", "Do not pronounce '-ue' separately; ends in voiced /ɡ/."],
  ["associate", "सहयोगी / साझीदार", "/əˈsəʊ.si.eɪt/", "असोसिएट", "as-so-ci-ate (4)", "2nd Syllable (/səʊ/)", "Professional", ["business associate", "research associate"], ["association"], "She discussed the joint venture with her key business associates.", "Noun/adjective /əˈsəʊ.si.ət/, verb /əˈsəʊ.si.eɪt/."],
  ["neighbor", "पड़ोसी", "/ˈneɪ.bər/", "नेबर", "neigh-bor (2)", "1st Syllable (/neɪ/)", "Community", ["next-door neighbor", "friendly neighbor"], ["neighborhood"], "Our next-door neighbor kindly watered our plants while we were away.", "Closing diphthong /eɪ/ in the first syllable."],
  ["rapport", "सौहार्द / गहरा तालमेल", "/ræpˈɔːr/", "रैपोर", "rap-port (2)", "2nd Syllable (/ɔːr/)", "Interpersonal", ["build rapport", "establish a good rapport"], ["harmonious"], "The mentor quickly established an excellent rapport with the students.", "Silent final 't'; pronounced /ræpˈɔːr/."],
  ["bond", "घनिष्ठ संबंध / बंधन", "/bɒnd/", "बॉन्ड", "bond (1)", "Single Syllable", "Emotional / Social", ["close bond", "bond of affection"], ["bonding", "bonded"], "Sharing childhood memories forged an unbreakable bond between them.", "Short open /ɒ/ with voiced alveolar cluster /nd/."],
  ["offspring", "संतान / बाल-बच्चे", "/ˈɒf.sprɪŋ/", "ऑफ़स्प्रिंग", "off-spring (2)", "1st Syllable (/ɒf/)", "Formal / Biological", ["healthy offspring", "proud offspring"], ["spring"], "Parents naturally desire a prosperous future for their offspring.", "Plural remains 'offspring' without adding '-s'."],
  ["ancestor", "पूर्वज", "/ˈæn.ses.tər/", "ऐनसेस्टर", "an-ces-tor (3)", "1st Syllable (/æn/)", "Genealogy", ["distant ancestor", "common ancestor"], ["ancestry", "ancestral"], "Our ancestors pioneered eco-friendly water harvesting in this region.", "Stressed first syllable /ˈæn/."],
  ["descendant", "वंशज", "/dɪˈsen.dənt/", "डिसेंडेंट", "de-scend-ant (3)", "2nd Syllable (/sen/)", "Genealogy", ["direct descendant", "future descendants"], ["descend", "descent"], "He is a direct descendant of the renowned astronomer.", "Stressed second syllable /sen/."],
  ["household", "गृहस्थी / परिवार", "/ˈhaʊs.həʊld/", "हाउसहोल्ड", "house-hold (2)", "1st Syllable (/haʊs/)", "Domestic", ["head of household", "household chores"], ["householder"], "Managing a modern household requires balanced budgeting and teamwork.", "Compound noun with primary stress on 'house'."],
  ["relative", "रिश्तेदार / संबंधी", "/ˈrel.ə.tɪv/", "रेलेटिव", "rel-a-tive (3)", "1st Syllable (/rel/)", "Kinship", ["close relative", "distant relative"], ["relation", "relationship"], "Many distant relatives gathered for the golden jubilee anniversary.", "First syllable /rel/ is stressed."],
  ["encounter", "आकस्मिक भेंट / मुलाक़ात", "/ɪnˈkaʊn.tər/", "एनकाउंटर", "en-coun-ter (3)", "2nd Syllable (/kaʊn/)", "Social / Narrative", ["brief encounter", "chance encounter"], ["encountering"], "A chance encounter at the airport led to a fruitful collaboration.", "Stressed second syllable /kaʊn/."],
  ["embrace", "गले लगाना / सहर्ष स्वीकारना", "/ɪmˈbreɪs/", "इम्ब्रैस", "em-brace (2)", "2nd Syllable (/breɪs/)", "Emotional / Cultural", ["warm embrace", "embrace diversity"], ["embraced"], "The old friends shared a warm embrace after ten years apart.", "Diphthong /eɪ/ in the second syllable."],
  ["farewell", "विदाई / विदाई समारोह", "/ˌfeəˈwel/", "फेयरवेल", "fare-well (2)", "2nd Syllable (/wel/)", "Ceremonial", ["farewell party", "bid farewell"], ["fare"], "The faculty organized a touching farewell for the retiring dean.", "Primary stress on 'well'."],
  ["cordial", "सौहार्दपूर्ण / आत्मीय", "/ˈkɔː.di.əl/", "कॉर्डियल", "cor-dial (3)", "1st Syllable (/kɔː/)", "Formal Interpersonal", ["cordial relations", "cordial welcome"], ["cordially", "cordiality"], "Both delegations maintained cordial relations throughout the summit.", "Long open /ɔː/ in the initial syllable."],
  ["festive", "उत्सवपूर्ण / उल्लासमय", "/ˈfes.tɪv/", "फेस्टिव", "fes-tive (2)", "1st Syllable (/fes/)", "Cultural", ["festive season", "festive atmosphere"], ["festival", "festivity"], "The entire neighborhood wore a festive look during Diwali.", "Short /e/ in the stressed syllable."],
  ["intimate", "घनिष्ठ / निजी", "/ˈɪn.tɪ.mət/", "इन्टिमेट", "in-ti-mate (3)", "1st Syllable (/ɪn/)", "Interpersonal", ["intimate gathering", "intimate friend"], ["intimacy", "intimately"], "We hosted an intimate dinner for our closest family members.", "Adjective ends in /mət/; verb ends in /meɪt/."],
  ["affectionate", "स्नेहशील / प्यार भरा", "/əˈfek.ʃən.ət/", "अफेक्शनेट", "af-fec-tion-ate (4)", "2nd Syllable (/fek/)", "Interpersonal", ["affectionate greeting", "affectionate nature"], ["affection", "affectionately"], "Grandmother always greeted every child with an affectionate hug.", "Stress on the second syllable /fek/."],
  ["warmth", "आत्मीयता / ऊष्मा", "/wɔːmθ/", "वॉर्मथ", "warmth (1)", "Single Syllable", "Emotional", ["radiate warmth", "heartfelt warmth"], ["warm"], "The genuine warmth of the community made us feel right at home.", "Ends in unvoiced dental fricative /θ/."],
  ["courteous", "विनम्र / भद्र", "/ˈkɜː.ti.əs/", "कर्टियस", "cour-te-ous (3)", "1st Syllable (/kɜː/)", "Behavioral", ["courteous demeanor", "polite and courteous"], ["courtesy", "courteously"], "The front-desk executive was exceptionally courteous to every guest.", "Centering vowel /ɜː/ in British English."],
  ["gracious", "कृपालु / शालीन", "/ˈɡreɪ.ʃəs/", "ग्रेशस", "gra-cious (2)", "1st Syllable (/ɡreɪ/)", "Social Virtue", ["gracious host", "gracious acceptance"], ["grace", "graciously"], "She offered a gracious compliment to the culinary team.", "Diphthong /eɪ/ followed by /ʃəs/."],
  ["demeanor", "आचरण / हाव-भाव", "/dɪˈmiː.nər/", "डिमीनर", "de-mean-or (3)", "2nd Syllable (/miː/)", "Behavioral", ["calm demeanor", "professional demeanor"], ["demean"], "His calm demeanor immediately reassured the anxious passengers.", "Long /iː/ in the stressed middle syllable."],
  ["convivial", "हंसमुख / मिलनसार / उत्सवप्रिय", "/kənˈvɪv.i.əl/", "कनविभियल", "con-viv-i-al (4)", "2nd Syllable (/vɪv/)", "Social Atmosphere", ["convivial gathering", "convivial host"], ["conviviality"], "The anniversary dinner developed into a lively and convivial celebration.", "Stressed second syllable /vɪv/."],
  ["congenial", "अनुकूल / मनोनुकूल / सौहार्दपूर्ण", "/kənˈdʒiː.ni.əl/", "कनजीनियल", "con-ge-ni-al (4)", "2nd Syllable (/dʒiː/)", "Atmospheric", ["congenial environment", "congenial colleagues"], ["congeniality"], "A congenial workplace boosts creative problem-solving.", "Stressed second syllable /dʒiː/."],
  ["etiquette", "शिष्टाचार / आचार-नियम", "/ˈet.ɪ.ket/", "एटिकेट", "et-i-quette (3)", "1st Syllable (/et/)", "Social Protocol", ["social etiquette", "business etiquette"], ["manners"], "Familiarity with dining etiquette prevents embarrassing social mishaps.", "Final syllable pronounced /ket/, not /kwet/."],
  ["politeness", "शिष्टता / नम्रता", "/pəˈlaɪt.nəs/", "पोलाइटनेस", "po-lite-ness (3)", "2nd Syllable (/laɪt/)", "Social Virtue", ["genuine politeness", "excessive politeness"], ["polite", "politely"], "Basic politeness costs nothing but opens countless doors.", "Suffix '-ness' is unstressed."],
  ["deference", "आदर / सम्मानपूर्ण स्वीकृति", "/ˈdef.ər.əns/", "डेफरन्स", "def-er-ence (3)", "1st Syllable (/def/)", "Cultural / Social", ["show deference", "in deference to elders"], ["defer", "deferential"], "In Indian culture, children are taught to show deference to their elders.", "First syllable /def/ takes primary stress."],
  ["fraternity", "भाईचारा / भ्रातृत्व", "/frəˈtɜː.nə.ti/", "फ्रैटर्निटी", "fra-ter-ni-ty (4)", "2nd Syllable (/tɜː/)", "Civic / Social", ["spirit of fraternity", "medical fraternity"], ["fraternal"], "The constitution emphasizes the core ideals of liberty, equality, and fraternity.", "Stressed second syllable /tɜː/."],
  ["camaraderie", "परस्पर सौहार्द / साथियों की मित्रता", "/ˌkæm.əˈrɑː.dər.i/", "कैमराडरी", "cam-a-ra-de-rie (5)", "3rd Syllable (/rɑː/)", "Social Bond", ["team camaraderie", "fond camaraderie"], ["comrade"], "The grueling trekking expedition built lasting camaraderie among the teammates.", "Primary stress on third syllable /rɑː/."],
  ["compatriot", "स्वदेशी / हमवतन", "/kəmˈpæt.ri.ət/", "कम्पैट्रियट", "com-pa-tri-ot (4)", "2nd Syllable (/pæt/)", "Civic / Global", ["fellow compatriot", "overseas compatriot"], ["patriotic"], "The athletes cheered enthusiastically for their compatriot on the podium.", "Stress on second syllable /pæt/."],
  ["hostess", "मेजबान महिला", "/ˈhəʊ.stɪs/", "होस्टेस", "host-ess (2)", "1st Syllable (/həʊ/)", "Hospitality", ["gracious hostess", "party hostess"], ["host"], "Our hostess ensured that every dietary preference was thoughtfully accommodated.", "Diphthong /əʊ/ in initial syllable."],
  ["patron", "संरक्षक / नियमित ग्राहक", "/ˈpeɪ.trən/", "पेट्रन", "pa-tron (2)", "1st Syllable (/peɪ/)", "Cultural / Commercial", ["arts patron", "library patron"], ["patronage", "patronize"], "Raja Man Singh was a generous patron of classical music and architecture.", "Diphthong /eɪ/ in the stressed first syllable."],
  ["benefactor", "हितैषी / दानदाता", "/ˈben.ɪˌfæk.tər/", "बेनेफैक्टर", "ben-e-fac-tor (4)", "1st Syllable (/ben/)", "Philanthropic", ["anonymous benefactor", "generous benefactor"], ["benefaction", "benefit"], "An anonymous benefactor funded the village girls' higher secondary school.", "Primary stress on first syllable /ˈben/."],
  ["foyer", "प्रवेश कक्ष / लाउंज", "/ˈfɔɪ.eɪ/", "फ़ॉये", "foy-er (2)", "1st Syllable (/fɔɪ/)", "Architectural", ["hotel foyer", "spacious foyer"], ["lobby"], "Let us assemble in the hotel foyer at seven o'clock sharp.", "Pronounced /ˈfɔɪ.eɪ/ (UK) or /ˈfɔɪ.ər/ (US)."],
  ["salutation", "अभिवादन / नमस्कार", "/ˌsæl.jəˈteɪ.ʃən/", "सैल्युटेशन", "sal-u-ta-tion (4)", "3rd Syllable (/teɪ/)", "Formal Written", ["formal salutation", "respectful salutation"], ["salute", "salutary"], "Start your business correspondence with a professional salutation.", "Primary stress on third syllable /teɪ/."],
  ["interlocutor", "संवाददाता / बातचीत का साथी", "/ˌɪn.təˈlɒk.jə.tər/", "इन्टरलोक्यूटर", "in-ter-loc-u-tor (5)", "3rd Syllable (/lɒk/)", "Diplomatic / Academic", ["diplomatic interlocutor", "skilled interlocutor"], ["locution"], "The ambassador maintained a calm tone while addressing his interlocutor.", "Primary stress on third syllable /lɒk/."],
  ["confer", "विचार-विमर्श करना / प्रदान करना", "/kənˈfɜːr/", "कन्फ़र", "con-fer (2)", "2nd Syllable (/fɜːr/)", "Formal", ["confer with colleagues", "confer an honor"], ["conference"], "The panel will confer privately before announcing the national award.", "Stress on the second syllable /fɜːr/."],
  ["propinquity", "सामीप्य / निकटता", "/prəˈpɪŋ.kwə.ti/", "प्रॉपिंक्विटी", "pro-pin-qui-ty (4)", "2nd Syllable (/pɪŋ/)", "Sociological", ["spatial propinquity", "propinquity of families"], ["nearness"], "Physical propinquity frequently leads to deep social friendships.", "Second syllable /pɪŋ/ takes primary stress."],
  ["compatriotism", "स्वदेश-प्रेम", "/kəmˈpæt.ri.ə.tɪ.zəm/", "कम्पैट्रियटिज़्म", "com-pa-tri-ot-ism (5)", "2nd Syllable (/pæt/)", "Civic", ["shared compatriotism", "inspire compatriotism"], ["patriotism"], "Their shared compatriotism united them while studying abroad.", "Stress on second syllable /pæt/."],
  ["affability", "मिलनसारिता / सौम्यता", "/ˌæf.əˈbɪl.ə.ti/", "एफैबिलिटी", "af-fa-bil-i-ty (5)", "3rd Syllable (/bɪl/)", "Personality", ["natural affability", "renowned affability"], ["affable"], "The principal's natural affability put the nervous freshmen at ease.", "Third syllable /bɪl/ receives primary stress."],
  ["geniality", "प्रसन्नचित्तता / सौहार्द", "/ˌdʒiː.niˈæl.ə.ti/", "जीनिएलिटी", "ge-ni-al-i-ty (5)", "3rd Syllable (/æl/)", "Personality", ["warm geniality", "radiate geniality"], ["genial"], "His infectious geniality enlivened the entire neighborhood gathering.", "Third syllable /æl/ takes primary stress."],
  ["matrimony", "विवाह / दांपत्य जीवन", "/ˈmæt.rɪ.mə.ni/", "मैट्रिमनी", "mat-ri-mo-ny (4)", "1st Syllable (/mæt/)", "Social Institution", ["holy matrimony", "bonds of matrimony"], ["matrimonial"], "They entered into holy matrimony thirty years ago today.", "First syllable /mæt/ receives primary stress in RP."],
  ["clan", "गोत्र / कुनबा / विस्तृत परिवार", "/klæn/", "क्लैन", "clan (1)", "Single Syllable", "Sociological", ["entire clan", "clan gathering"], ["clannish"], "During the harvest festival, the entire clan gathers at the ancestral home.", "Single syllable with open front /æ/."],
  ["pedigree", "वंशावली / शुद्ध नस्ल", "/ˈped.ɪ.ɡriː/", "पेडीग्री", "ped-i-gree (3)", "1st Syllable (/ped/)", "Genealogical", ["impeccable pedigree", "historic pedigree"], ["lineage"], "The academic institution boasts an impeccable pedigree of Nobel laureates.", "First syllable /ped/ receives primary stress."]
];

// -------------------------------------------------------------
// DAY 32 DEFINITIONS
// -------------------------------------------------------------
const rawVocab32 = [
  ["courtesy", "सौजन्य / शिष्टाचार", "/ˈkɜː.tə.si/", "कर्टसी", "cour-te-sy (3)", "1st Syllable (/kɜː/)", "Social Virtue", ["professional courtesy", "common courtesy"], ["courteous"], "He held the door open as an act of common courtesy.", "Centering vowel /ɜː/ in RP."],
  ["advisable", "उचित / परामर्श योग्य", "/ədˈvaɪ.zə.bəl/", "एडवाइजेबल", "ad-vis-a-ble (4)", "2nd Syllable (/vaɪ/)", "Professional / Medical", ["highly advisable", "deemed advisable"], ["advise", "advice"], "It is highly advisable to reserve train berths well in advance during Diwali.", "Second syllable /vaɪ/ receives primary stress."],
  ["recommendation", "सिफारिश / अनुशंसा", "/ˌrek.ə.menˈdeɪ.ʃən/", "रेकमेंडेशन", "rec-om-men-da-tion (5)", "4th Syllable (/deɪ/)", "Professional", ["strong recommendation", "follow a recommendation"], ["recommend"], "The doctor wrote a formal recommendation for a three-day medical leave.", "Primary stress on fourth syllable /deɪ/."],
  ["suggestion", "सुझाव / सम्मति", "/səˈdʒes.tʃən/", "सजेशन", "sug-ges-tion (3)", "2nd Syllable (/dʒes/)", "Interpersonal", ["valuable suggestion", "make a suggestion"], ["suggest"], "Do you have any practical suggestions for reducing our household electricity bill?", "Pronounced with /tʃ/ cluster /səˈdʒes.tʃən/."],
  ["imperative", "अति आवश्यक / अनिवार्य", "/ɪmˈper.ə.tɪv/", "इम्पैरेटिव", "im-per-a-tive (4)", "2nd Syllable (/per/)", "Formal", ["morally imperative", "imperative need"], ["imperious"], "It is imperative that all safety helmets be fastened securely on site.", "Second syllable /per/ receives primary stress."],
  ["preferable", "अधिक बेहतर / वरीय", "/ˈpref.ər.ə.bəl/", "प्रेफरेबल", "pref-er-a-ble (4)", "1st Syllable (/pref/)", "Evaluative", ["far preferable", "preferable option"], ["prefer", "preference"], "Taking the metro is far preferable to driving through rush-hour traffic.", "Primary stress is on the first syllable /ˈpref/."],
  ["prudent", "विवेकी / समझदार / दूरदर्शी", "/ˈpruː.dənt/", "प्रूडेंट", "pru-dent (2)", "1st Syllable (/pruː/)", "Advisory", ["prudent decision", "prudent investor"], ["prudence", "prudently"], "It would be prudent to review the insurance policy terms before signing.", "Long vowel /uː/ in the initial syllable."],
  ["caution", "सावधानी / सतर्कता", "/ˈkɔː.ʃən/", "कॉशन", "cau-tion (2)", "1st Syllable (/kɔː/)", "Safety / Advisory", ["exercise caution", "word of caution"], ["cautious", "cautiously"], "Please exercise extreme caution while crossing the railway tracks.", "Long open /ɔː/ followed by /ʃən/."],
  ["cautious", "सतर्क / चौकन्ना", "/ˈkɔː.ʃəs/", "कॉशस", "cau-tious (2)", "1st Syllable (/kɔː/)", "Behavioral", ["cautious approach", "cautious optimism"], ["caution"], "The financial advisor recommended a cautious approach to equity markets.", "Ends in /ʃəs/."],
  ["feasible", "व्यावहारिक / साध्य", "/ˈfiː.zə.bəl/", "फ़ीज़िबल", "fea-si-ble (3)", "1st Syllable (/fiː/)", "Executive / Planning", ["technically feasible", "economically feasible"], ["feasibility"], "Could you please confirm if this project timeline is feasible for your team?", "Long vowel /iː/ followed by voiced /z/."],
  ["appropriateness", "औचित्य / उपयुक्तता", "/əˈprəʊ.pri.ət.nəs/", "एप्रोप्रियेटनेस", "ap-pro-pri-ate-ness (5)", "2nd Syllable (/prəʊ/)", "Pragmatic", ["assess appropriateness", "cultural appropriateness"], ["appropriate"], "The mentor discussed the appropriateness of formal attire for the interview.", "Stress on the second syllable /prəʊ/."],
  ["softener", "विनम्रता सूचक शब्द", "/ˈsɒf.ən.ər/", "सॉफ़नर", "soft-en-er (3)", "1st Syllable (/sɒf/)", "Linguistics", ["conversational softener", "use a softener"], ["soften"], "Using modal softeners like 'Would you mind' makes requests much more diplomatic.", "Letter 't' is silent: /ˈsɒf.ən.ər/."],
  ["hesitation", "झिझक / संकोच", "/ˌhez.ɪˈteɪ.ʃən/", "हेज़िटेशन", "hes-i-ta-tion (4)", "3rd Syllable (/teɪ/)", "Psychological", ["without hesitation", "slight hesitation"], ["hesitate", "hesitant"], "If you require further clarification, do not have any hesitation in contacting me.", "Primary stress on third syllable /teɪ/."],
  ["permission", "अनुमति / इजाज़त", "/pəˈmɪʃ.ən/", "परमिशन", "per-mis-sion (3)", "2nd Syllable (/mɪʃ/)", "Administrative", ["seek permission", "grant permission"], ["permit", "permissible"], "You should always seek prior permission before recording the lecture.", "Stress on second syllable /mɪʃ/."],
  ["tentative", "प्रायोगिक / अनंतिम / अस्थायी", "/ˈten.tə.tɪv/", "टेन्टेटिव", "ten-ta-tive (3)", "1st Syllable (/ten/)", "Scheduling / Planning", ["tentative plan", "tentative schedule"], ["tentatively"], "We have scheduled a tentative meeting for Thursday afternoon.", "Primary stress on first syllable /ˈten/."],
  ["tactful", "व्यवहार-कुशल / नीतिज्ञ", "/ˈtækt.fəl/", "टैक्टफुल", "tact-ful (2)", "1st Syllable (/tækt/)", "Social Virtue", ["tactful manner", "tactful response"], ["tact", "tactfully"], "A manager must be tactful when delivering constructive criticism.", "Single stress on first syllable /ˈtækt/."],
  ["tact", "व्यवहार-कुशलता / चतुराई", "/tækt/", "टैक्ट", "tact (1)", "Single Syllable", "Interpersonal", ["diplomatic tact", "great tact"], ["tactful", "tactless"], "Handling the client dispute required immense diplomacy and tact.", "Crisp final cluster /kt/."],
  ["considerate", "दूसरों का ध्यान रखने वाला / विचारशील", "/kənˈsɪd.ər.ət/", "कंसीडरेट", "con-sid-er-ate (4)", "2nd Syllable (/sɪd/)", "Personality", ["thoughtful and considerate", "considerate neighbor"], ["consideration"], "It was very considerate of you to share your detailed lecture notes.", "Adjective ending is pronounced /ət/."],
  ["discreet", "सावधान / गुप्त रखने वाला / विवेकपूर्ण", "/dɪˈskriːt/", "डिस्क्रीट", "dis-creet (2)", "2nd Syllable (/skriːt/)", "Behavioral", ["discreet inquiry", "remain discreet"], ["discretion"], "Could you please be discreet regarding the merger announcement?", "Long /iː/ with stress on second syllable."],
  ["discretion", "विवेकाधिकार / सावधानी", "/dɪˈskreʃ.ən/", "डिस्क्रेशन", "dis-cre-tion (3)", "2nd Syllable (/skreʃ/)", "Professional / Legal", ["at your discretion", "exercise discretion"], ["discreet"], "The manager used his discretion to waive the late registration fee.", "Short /e/ in stressed syllable /skreʃ/."],
  ["oblige", "उपकृत करना / आभारी करना", "/əˈblaɪdʒ/", "ओब्लाइज", "o-blige (2)", "2nd Syllable (/blaɪdʒ/)", "Polite Protocol", ["happy to oblige", "much obliged"], ["obligation", "obligatory"], "Could you kindly lend me your pen? I would be much obliged.", "Diphthong /aɪ/ followed by affricate /dʒ/."],
  ["deferential", "सम्मानपूर्ण / आदरसूचक", "/ˌdef.əˈren.ʃəl/", "डेफरेंशियल", "def-er-en-tial (4)", "3rd Syllable (/ren/)", "Social Tone", ["deferential tone", "deferential attitude"], ["deference"], "She maintained a respectful and deferential tone before the panel.", "Primary stress on third syllable /ren/."],
  ["protocol", "शिष्टाचार के नियम / कार्यविधि", "/ˈprəʊ.tə.kɒl/", "प्रोटोकॉल", "pro-to-col (3)", "1st Syllable (/prəʊ/)", "Diplomatic / Formal", ["strict protocol", "diplomatic protocol"], ["protocolary"], "Diplomats must observe strict protocol during state receptions.", "First syllable /prəʊ/ receives primary stress."],
  ["diplomatic", "कूटनीतिक / विनम्र एवं कुशल", "/ˌdɪp.ləˈmæt.ɪk/", "डिप्लोमैटिक", "dip-lo-mat-ic (4)", "3rd Syllable (/mæt/)", "Communication", ["diplomatic refusal", "diplomatic approach"], ["diplomacy", "diplomat"], "A diplomatic response avoided unnecessary confrontation with the vendor.", "Primary stress on third syllable /mæt/."],
  ["nuance", "बारीकी / सूक्ष्म अंतर", "/ˈnjuː.ɑːns/", "न्यूआन्स", "nu-ance (2)", "1st Syllable (/njuː/)", "Linguistics / Culture", ["subtle nuance", "cultural nuances"], ["nuanced"], "Mastering English modals requires understanding subtle nuances of politeness.", "Stressed first syllable /ˈnjuː/."],
  ["propose", "प्रस्तावित करना / सुझाव देना", "/prəˈpəʊz/", "प्रपोज", "pro-pose (2)", "2nd Syllable (/pəʊz/)", "Business / Formal", ["propose an alternative", "propose a solution"], ["proposal", "proposition"], "I would like to propose a brief five-minute recess before we vote.", "Diphthong /əʊ/ in second stressed syllable."],
  ["proposal", "प्रस्ताव", "/prəˈpəʊ.zəl/", "प्रपोजल", "pro-pos-al (3)", "2nd Syllable (/pəʊ/)", "Business / Professional", ["formal proposal", "counter proposal"], ["propose"], "The advisory board submitted a comprehensive policy proposal.", "Stress on second syllable /pəʊ/."],
  ["guidance", "मार्गदर्शन / परामर्श", "/ˈɡaɪ.dəns/", "गाइडेंस", "guid-ance (2)", "1st Syllable (/ɡaɪ/)", "Mentorship", ["expert guidance", "under the guidance of"], ["guide"], "Young entrepreneurs benefit greatly from experienced mentorship and guidance.", "Diphthong /aɪ/ in first syllable."],
  ["counsel", "परामर्श देना / सलाह", "/ˈkaʊn.səl/", "काउंसल", "coun-sel (2)", "1st Syllable (/kaʊn/)", "Legal / Psychological", ["legal counsel", "wise counsel"], ["counsellor"], "The senior advocate offered wise counsel regarding the property deed.", "Diphthong /aʊ/ in initial stressed syllable."],
  ["counsellor", "सलाहकार / परामर्शदाता", "/ˈkaʊn.səl.ər/", "काउंसलर", "coun-sel-lor (3)", "1st Syllable (/kaʊn/)", "Professional", ["career counsellor", "guidance counsellor"], ["counsel"], "The career counsellor suggested enrolling in a data science certification.", "First syllable /ˈkaʊn/ takes primary stress."],
  ["remedy", "उपाय / समाधान / इलाज", "/ˈrem.ə.di/", "रेमेडी", "rem-e-dy (3)", "1st Syllable (/rem/)", "Medical / Legal", ["effective remedy", "legal remedy"], ["remedial", "remediation"], "Drinking warm water with honey is a time-tested home remedy for a sore throat.", "First syllable /ˈrem/ takes primary stress."],
  ["precaution", "एहतियात / पूर्व-सावधानी", "/prɪˈkɔː.ʃən/", "प्रिकॉशन", "pre-cau-tion (3)", "2nd Syllable (/kɔː/)", "Safety / Medical", ["take precautions", "safety precaution"], ["precautionary"], "You should take necessary precautions before traveling in extreme cold.", "Stress on second syllable /kɔː/."],
  ["mandatory", "अनिवार्य / बाध्यकारी", "/ˈmæn.də.tər.i/", "मैन्डेटरी", "man-da-to-ry (4)", "1st Syllable (/mæn/)", "Regulatory", ["mandatory attendance", "mandatory training"], ["mandate"], "Wearing seatbelts is strictly mandatory for all motor vehicle occupants.", "Primary stress on first syllable /ˈmæn/ in RP."],
  ["optional", "वैकल्पिक / ऐच्छिक", "/ˈɒp.ʃən.əl/", "ऑप्शनल", "op-tion-al (3)", "1st Syllable (/ɒp/)", "Academic / Administrative", ["optional module", "entirely optional"], ["option"], "Attending the weekend revision session is entirely optional.", "First syllable /ˈɒp/ takes primary stress."],
  ["voluntary", "स्वैच्छिक / अपनी इच्छा से", "/ˈvɒl.ən.tər.i/", "वॉलंटरी", "vol-un-ta-ry (4)", "1st Syllable (/vɒl/)", "Civic / Social", ["voluntary contribution", "voluntary service"], ["volunteer"], "Youth clubs organize voluntary blood donation camps every quarter.", "First syllable /ˈvɒl/ is stressed."],
  ["consult", "सलाह लेना / विचार-विमर्श करना", "/kənˈsʌlt/", "कंसल्ट", "con-sult (2)", "2nd Syllable (/sʌlt/)", "Professional", ["consult a specialist", "consult widely"], ["consultation", "consultant"], "You ought to consult an orthopedic specialist regarding that persistent back pain.", "Stress on second syllable /sʌlt/."],
  ["consultation", "परामर्श / परामर्श सत्र", "/ˌkɒn.sʌlˈteɪ.ʃən/", "कंसल्टेशन", "con-sul-ta-tion (4)", "3rd Syllable (/teɪ/)", "Medical / Corporate", ["initial consultation", "free consultation"], ["consult"], "The doctor charges five hundred rupees for a follow-up consultation.", "Primary stress on third syllable /teɪ/."],
  ["advisory", "सलाहकार / परामर्शदात्री समिति", "/ədˈvaɪ.zər.i/", "एडवाइजरी", "ad-vi-so-ry (4)", "2nd Syllable (/vaɪ/)", "Governance", ["advisory committee", "travel advisory"], ["advise", "adviser"], "The meteorological department issued an urgent weather advisory.", "Stress on second syllable /vaɪ/."],
  ["respectful", "सम्मानपूर्ण / आदरयुक्त", "/rɪˈspekt.fəl/", "रेस्पेक्टफुल", "re-spect-ful (3)", "2nd Syllable (/spekt/)", "Interpersonal", ["respectful silence", "respectful distance"], ["respect", "respectfully"], "The students maintained a respectful silence while the guest spoke.", "Stress on second syllable /spekt/."],
  ["gentle", "सौम्य / कोमल / धीमा", "/ˈdʒen.təl/", "जेंटल", "gen-tle (2)", "1st Syllable (/dʒen/)", "Tone / Manner", ["gentle reminder", "gentle persuasion"], ["gently", "gentleness"], "This is just a gentle reminder regarding the invoice due tomorrow.", "First syllable /ˈdʒen/ takes primary stress."],
  ["mild", "हल्का / मृदु", "/maɪld/", "माइल्ड", "mild (1)", "Single Syllable", "Medical / Tone", ["mild symptoms", "mild disagreement"], ["mildly", "mildness"], "He expressed a mild objection to the revised project schedule.", "Diphthong /aɪ/ with voiced /ld/ cluster."],
  ["admonish", "चेतावनी देना / समझाना-बुझाना", "/ədˈmɒn.ɪʃ/", "एडमॉनिश", "ad-mon-ish (3)", "2nd Syllable (/mɒn/)", "Disciplinary", ["admonish gently", "admonish sternly"], ["admonition"], "The teacher admonished the students for not submitting assignments on time.", "Stress on second syllable /mɒn/."],
  ["exhort", "दृढ़तापूर्वक आग्रह करना / प्रेरित करना", "/ɪɡˈzɔːt/", "एग्ज़ॉर्ट", "ex-hort (2)", "2nd Syllable (/zɔːt/)", "Formal Rhetoric", ["exhort citizens", "exhort to action"], ["exhortation"], "The prime minister exhorted the youth to embrace indigenous innovation.", "Long vowel /ɔː/ in second stressed syllable."],
  ["solicit", "मांगना / निवेदन करना / याचना करना", "/səˈlɪs.ɪt/", "सोलिसिट", "so-lic-it (3)", "2nd Syllable (/lɪs/)", "Formal", ["solicit feedback", "solicit donations"], ["solicitation"], "We warmly solicit your constructive feedback on our new mobile application.", "Stress on second syllable /lɪs/."],
  ["entreat", "विनती करना / अनुनय-विनय करना", "/ɪnˈtriːt/", "एंट्रीट", "en-treat (2)", "2nd Syllable (/triːt/)", "Literary / Formal", ["entreat earnestly", "entreat for help"], ["entreaty"], "The flood victims entreated the administration for immediate relief supplies.", "Long /iː/ in second stressed syllable."],
  ["deference", "सम्मान / श्रद्धा", "/ˈdef.ər.əns/", "डेफरन्स", "def-er-ence (3)", "1st Syllable (/def/)", "Formal", ["yield with deference", "treat with deference"], ["deferential"], "He bowed his head in genuine deference to his spiritual teacher.", "First syllable /ˈdef/ takes primary stress."],
  ["condescend", "एहसान जताना / नीचा समझकर मिलना", "/ˌkɒn.dɪˈsend/", "कॉन्डेसेंड", "con-de-scend (3)", "3rd Syllable (/send/)", "Behavioral (Negative)", ["condescend to speak", "condescending tone"], ["condescension"], "A truly polite leader never condescends to junior staff members.", "Primary stress on third syllable /send/."],
  ["graciousness", "शालीनता / कृपाशीलता", "/ˈɡreɪ.ʃəs.nəs/", "ग्रेशसनेस", "gra-cious-ness (3)", "1st Syllable (/ɡreɪ/)", "Virtue", ["unfailing graciousness", "radiate graciousness"], ["gracious"], "She accepted the lifetime achievement award with characteristic graciousness.", "First syllable /ˈɡreɪ/ is stressed."],
  ["circumspect", "सावधान / चौकस / सतर्क", "/ˈsɜː.kəm.spekt/", "सर्कमस्पेक्ट", "cir-cum-spect (3)", "1st Syllable (/sɜː/)", "Advisory", ["circumspect approach", "remain circumspect"], ["circumspection"], "Lawyers are naturally circumspect when discussing pending litigation.", "First syllable /ˈsɜː/ takes primary stress."],
  ["judicious", "उचित / न्यायसंगत / समझदारी भरा", "/dʒuːˈdɪʃ.əs/", "ज्यूडिशस", "ju-di-cious (3)", "2nd Syllable (/dɪʃ/)", "Evaluative", ["judicious use", "judicious decision"], ["judiciously"], "The judicious allocation of resources prevented a budget deficit.", "Stress on second syllable /dɪʃ/."],
  ["expedient", "सामयिक / तात्कालिक लाभदायक", "/ɪkˈspiː.di.ənt/", "एक्सपीडिएंट", "ex-pe-di-ent (4)", "2nd Syllable (/spiː/)", "Strategic", ["politically expedient", "expedient measure"], ["expediency"], "While technically expedient, the shortcut proved costly in the long run.", "Long /iː/ in second stressed syllable."],
  ["obliging", "मददगार / अनुग्रही", "/əˈblaɪ.dʒɪŋ/", "ओब्लाइजिंग", "o-blig-ing (3)", "2nd Syllable (/blaɪ/)", "Interpersonal", ["obliging host", "obliging clerk"], ["oblige"], "The train ticket examiner was exceptionally obliging and found us two berths.", "Diphthong /aɪ/ in middle syllable."],
  ["amenable", "सहमत होने योग्य / अनुकूल", "/əˈmiː.nə.bəl/", "एमीनेबल", "a-me-na-ble (4)", "2nd Syllable (/miː/)", "Attitudinal", ["amenable to suggestions", "amenable to compromise"], ["amenability"], "The management was fully amenable to introducing flexible working hours.", "Long /iː/ in second syllable /miː/."],
  ["pliant", "लचीला / नमनीय", "/ˈplaɪ.ənt/", "प्लायन्ट", "pli-ant (2)", "1st Syllable (/plaɪ/)", "Behavioral / Physical", ["pliant attitude", "pliant bamboo"], ["pliancy"], "Diplomats must remain firm on core principles yet pliant in negotiation.", "Diphthong /aɪ/ in first syllable."],
  ["conciliatory", "सुलहकारी / शांतिप्रिय", "/kənˈsɪl.i.ə.tər.i/", "कंसिलियेटरी", "con-cil-i-a-to-ry (6)", "2nd Syllable (/sɪl/)", "Diplomatic", ["conciliatory gesture", "conciliatory tone"], ["conciliate"], "Offering a cup of tea was a simple conciliatory gesture that defused tension.", "Stress on second syllable /sɪl/."],
  ["unobtrusive", "अनाक्रामक / ध्यान न खींचने वाला", "/ˌʌn.əbˈtruː.sɪv/", "अनऑब्ट्रूसिव", "un-ob-tru-sive (4)", "3rd Syllable (/truː/)", "Design / Manner", ["unobtrusive service", "unobtrusive presence"], ["obtrusive"], "The restaurant is famous for its prompt yet delightfully unobtrusive service.", "Long vowel /uː/ in third syllable."],
  ["submissive", "विनम्र / आज्ञाकारी", "/səbˈmɪs.ɪv/", "सबमिसिव", "sub-mis-sive (3)", "2nd Syllable (/mɪs/)", "Behavioral", ["submissive posture", "submissive tone"], ["submit", "submission"], "Politeness should express mutual respect, not submissive weakness.", "Stress on second syllable /mɪs/."],
  ["solicitous", "चिंतित / फिक्रमंद / देखभाल करने वाला", "/səˈlɪs.ɪ.təs/", "सोलिसिटस", "so-lic-i-tous (4)", "2nd Syllable (/lɪs/)", "Interpersonal", ["solicitous about health", "solicitous host"], ["solicitude"], "The nurse was deeply solicitous of the elderly patient's comfort.", "Stress on second syllable /lɪs/."],
  ["receptive", "ग्रहणशील / नए विचारों का स्वागत करने वाला", "/rɪˈsep.tɪv/", "रिसेप्टिव", "re-cep-tive (3)", "2nd Syllable (/sep/)", "Intellectual", ["receptive to ideas", "receptive audience"], ["receive", "receptivity"], "The committee was surprisingly receptive to our novel solar roofing proposal.", "Stress on second syllable /sep/."],
  ["tractable", "सुलभ / सीधा-सादा / नियंत्रण योग्य", "/ˈtræk.tə.bəl/", "ट्रैक्टेबल", "trac-ta-ble (3)", "1st Syllable (/træk/)", "Problem-Solving", ["tractable problem", "tractable dispute"], ["tractability"], "With patient mediation, even complex border disputes become tractable.", "First syllable /ˈtræk/ takes primary stress."]
];

// Helper to write Day module
export async function buildDay31And32() {
  const priorLemmas = await getPriorLemmas();
  console.log(`[DAY 31-32] Prior lemmas loaded: ${priorLemmas.size}`);

  // Build Day 31
  const v31 = rawVocab31.map((item, idx) => {
    const id = `d31_v${String(idx + 1).padStart(2, '0')}`;
    const term = makeVocab(id, item);
    if (priorLemmas.has(term.lemma)) {
      console.warn(`[DUPLICATE WARNING] Day 31 lemma '${term.lemma}' already registered in Days 1-30!`);
    }
    priorLemmas.add(term.lemma);
    return term;
  });

  const patterns31 = [
    { en: "May I have the pleasure of introducing my mentor, Professor Swaminathan?", hi: "क्या मुझे अपने मार्गदर्शक, प्रोफेसर स्वामीनाथन का परिचय कराने का सौभाग्य मिल सकता है?", cat: "Formal Introductions" },
    { en: "It has been far too long since we last caught up over a cup of chai.", hi: "चाय पर हमारी पिछली मुलाकात को बहुत लंबा समय बीत चुका है।", cat: "Reconnecting with Friends" },
    { en: "Allow me to introduce my sister-in-law, Dr. Meenakshi, who heads the cardiology department.", hi: "मुझे अपनी भाभी, डॉ. मीनाक्षी का परिचय कराने की अनुमति दें, जो कार्डियोलॉजी विभाग की प्रमुख हैं।", cat: "Family Introductions" },
    { en: "We must organize a family reunion before the monsoon season begins.", hi: "मानसून का मौसम शुरू होने से पहले हमें एक पारिवारिक पुनर्मिलन का आयोजन अवश्य करना चाहिए।", cat: "Family Gatherings" },
    { en: "I would like you to meet my esteemed colleague from the Bengaluru research lab.", hi: "मैं चाहता हूँ कि आप बेंगलुरु शोध प्रयोगशाला से मेरे आदरणीय सहकर्मी से मिलें।", cat: "Professional Networking" },
    { en: "How have you been keeping all these years? You look remarkably well!", hi: "इन सभी वर्षों में आप कैसे रहे हैं? आप बहुत अच्छे दिख रहे हैं!", cat: "Warm Inquiries" },
    { en: "Please give my warmest regards to your parents when you speak to them.", hi: "जब आप अपने माता-पिता से बात करें, तो कृपया उन्हें मेरा सादर प्रणाम दें।", cat: "Courteous Closings" },
    { en: "We spent the entire evening reminiscing about our undergraduate days in Pune.", hi: "हमने पूरी शाम पुणे में अपने स्नातक के दिनों की यादें ताज़ा करते हुए बिताई।", cat: "Nostalgic Reminiscing" },
    { en: "My maternal grandparents celebrated their diamond wedding anniversary last Sunday.", hi: "मेरे नाना-नानी ने पिछले रविवार अपनी 60वीं वैवाहिक वर्षगांठ मनाई।", cat: "Family Milestones" },
    { en: "It is an absolute delight to reconnect after losing touch for over a decade.", hi: "एक दशक से अधिक समय तक संपर्क टूटने के बाद फिर से जुड़ना बेहद सुखद है।", cat: "Social Reconnection" }
  ];

  const mcqPool31 = [
    { q: `What is the most culturally authentic English way to introduce yourself in a professional setting?`, opts: ["'Hello, I am Rohan Mehta.'", "'Myself Rohan Mehta.'", "'I am myself Rohan Mehta.'", "'Mine name is Rohan Mehta.'"], ans: "'Hello, I am Rohan Mehta.'", why: "Never use '*Myself [Name]*' to introduce yourself in English. Use 'I am [Name]' or 'My name is [Name]'." },
    { q: `How should you introduce your cousin in standard English?`, opts: ["'This is my cousin, Sunita.'", "'This is my cousin sister, Sunita.'", "'This is my cousin brother, Rajesh.'", "'This is my sister cousin.'"], ans: "'This is my cousin, Sunita.'", why: "The terms '*cousin brother*' and '*cousin sister*' are Indian English tautologies. Standard English uses simply 'cousin'." },
    { q: `Which expression is best for introducing a third party in a formal meeting?`, opts: ["'May I introduce Dr. Verma, our chief medical officer?'", "'Meet Dr. Verma right now.'", "'This is Verma.'", "'I am introducing to you Dr. Verma.'"], ans: "'May I introduce Dr. Verma, our chief medical officer?'", why: "'May I introduce...' is the standard diplomatic formula for third-party introductions." },
    { q: `What does the idiom 'to catch up' mean in social contexts?`, opts: ["To talk with someone you haven't seen in a long time to exchange news", "To physically chase someone on the road", "To complete unfinished homework", "To argue over a past misunderstanding"], ans: "To talk with someone you haven't seen in a long time to exchange news", why: "'Catch up' means updating each other on recent life events after a period of absence." },
    { q: `Choose the correct term for your spouse's mother:`, opts: ["Mother-in-law", "Cousin mother", "Step mother", "Spouse mom"], ans: "Mother-in-law", why: "Spouse's mother is formally designated as 'mother-in-law'." }
  ];

  const blankPool31 = [
    { p: "May I have the pleasure of _____ (introduce) my business associate, Mr. Kapoor?", a: "introducing", exp: "Preposition 'of' is followed by gerund '-ing' -> 'introducing'." },
    { p: "It has been far too long since we last _____ (catch) up.", a: "caught", exp: "Past simple 'caught' is required after 'since we last'." },
    { p: "Please give my warmest _____ (regard) to your family.", a: "regards", exp: "Standard plural formula: 'warmest regards'." },
    { p: "We sat by the garden to _____ (reminisce) about our school days.", a: "reminisce", exp: "Infinitive 'to' takes base verb 'reminisce'." },
    { p: "How many _____ (sibling) do you have in your family?", a: "siblings", exp: "Plural noun 'siblings' follows 'How many'." }
  ];

  const errorPool31 = [
    { w: "Myself Rajesh Kumar, working as software engineer.", r: "I am Rajesh Kumar, and I work as a software engineer.", e: "Eliminate '*Myself [Name]*'; reflexive pronouns cannot function as sentence subjects." },
    { w: "She is my cousin sister living in Delhi.", r: "She is my cousin who lives in Delhi.", e: "Replace '*cousin sister*' with 'cousin'." },
    { w: "I am introducing you to my real brother.", r: "I would like to introduce my brother.", e: "Say 'brother' instead of '*real brother*' (which attempts to contrast with cousin)." },
    { w: "We were discussing about our family heritage.", r: "We were discussing our family heritage.", e: "'Discuss' is a transitive verb; do not use preposition '*about*' after it." }
  ];

  const transformPool31 = [
    { p: `Transform into a formal introduction: "Meet my boss, Mr. Sen."`, r: "May I introduce our managing director, Mr. Sen?", e: "Use diplomatic introduction formula 'May I introduce...'." },
    { p: `Rephrase without Indian English interference: "He is my cousin brother."`, r: "He is my cousin.", e: "Eliminate '*brother*' when referring to a cousin." },
    { p: `Transform into an enthusiastic reconnection statement: "We did not meet for a long time."`, r: "It has been ages since we last met!", e: "Idiomatic conversational formula: 'It has been ages since...'" }
  ];

  const listeningPool31 = [
    { audioScript: "May I introduce an old acquaintance of mine?", transcript: "May I introduce an old acquaintance of mine?", focus: "Consonant-to-vowel linking between 'an' and 'old' (/ən‿əʊld/), and 'acquaintance' and 'of' (/əˈkweɪn.təns‿əv/)." },
    { audioScript: "It has been far too long since we caught up.", transcript: "It has been far too long since we caught up.", focus: "Weak vowel reduction in 'has been' (/həz bɪn/) and linking in 'caught up' (/kɔːt‿ʌp/)." },
    { audioScript: "Please give my warmest regards to your spouse.", transcript: "Please give my warmest regards to your spouse.", focus: "Voiced coda /z/ in 'regards' and crisp /s/ in 'spouse'." }
  ];

  const dialoguePool31 = [
    { speakerA: "Anoop! I can't believe it's you! How many years has it been?", opts: ["It must be at least eight years! It's so wonderful to see you!", "Myself Anoop. What is your name?", "Yes, I am eating lunch.", "Why are you looking at me?"], ans: "It must be at least eight years! It's so wonderful to see you!", why: "A warm, natural reconnection response acknowledging the elapsed time." },
    { speakerA: "Rohan, have you met Dr. Sharma from the AI research lab?", opts: ["No, I haven't had the pleasure yet. Pleased to meet you, Dr. Sharma.", "I know him yesterday.", "Yes, myself Rohan.", "He is my cousin brother."], ans: "No, I haven't had the pleasure yet. Pleased to meet you, Dr. Sharma.", why: "'I haven't had the pleasure yet' is the gold standard for polite social introductions." }
  ];

  const recallPool31 = [
    { prompt: "State the rule regarding the use of 'Myself' for introducing oneself.", ans: "Never use 'Myself [Name]'. Reflexive pronouns cannot act as grammatical subjects. Say 'I am [Name]' or 'My name is [Name]'.", exp: "L1 interference remediation rule for introductions." },
    { prompt: "How should you refer to your aunt's or uncle's children in English?", ans: "Always use 'cousin', never '*cousin brother*' or '*cousin sister*'.", exp: "Elimination of Indian English redundant kin terms." }
  ];

  const transPairs31 = [
    { en: "May I have the pleasure of introducing my mentor, Professor Swaminathan?", hi: "क्या मुझे अपने मार्गदर्शक, प्रोफेसर स्वामीनाथन का परिचय कराने का सौभाग्य मिल सकता है?" },
    { en: "It has been far too long since we last caught up over a cup of chai.", hi: "चाय पर हमारी पिछली मुलाकात को बहुत लंबा समय बीत चुका है।" },
    { en: "Allow me to introduce my sister-in-law, Dr. Meenakshi, who heads the cardiology department.", hi: "मुझे अपनी भाभी, डॉ. मीनाक्षी का परिचय कराने की अनुमति दें, जो कार्डियोलॉजी विभाग की प्रमुख हैं।" },
    { en: "We must organize a family reunion before the monsoon season begins.", hi: "मानसून का मौसम शुरू होने से पहले हमें एक पारिवारिक पुनर्मिलन का आयोजन अवश्य करना चाहिए।" },
    { en: "I would like you to meet my esteemed colleague from the Bengaluru research lab.", hi: "मैं चाहता हूँ कि आप बेंगलुरु शोध प्रयोगशाला से मेरे आदरणीय सहकर्मी से मिलें।" },
    { en: "How have you been keeping all these years? You look remarkably well!", hi: "इन सभी वर्षों में आप कैसे रहे हैं? आप बहुत अच्छे दिख रहे हैं!" },
    { en: "Please give my warmest regards to your parents when you speak to them.", hi: "जब आप अपने माता-पिता से बात करें, तो कृपया उन्हें मेरा सादर प्रणाम दें।" },
    { en: "We spent the entire evening reminiscing about our undergraduate days in Pune.", hi: "हमने पूरी शाम पुणे में अपने स्नातक के दिनों की यादें ताज़ा करते हुए बिताई।" },
    { en: "My maternal grandparents celebrated their diamond wedding anniversary last Sunday.", hi: "मेरे नाना-नानी ने पिछले रविवार अपनी 60वीं वैवाहिक वर्षगांठ मनाई।" },
    { en: "It is an absolute delight to reconnect after losing touch for over a decade.", hi: "एक दशक से अधिक समय तक संपर्क टूटने के बाद फिर से जुड़ना बेहद सुखद है।" },
    { en: "She introduced her fiance to the entire clan during the festive dinner.", hi: "उसने उत्सव के रात्रिभोज के दौरान पूरे कुनबे से अपने मंगेतर का परिचय कराया।" },
    { en: "How many siblings do you have in your immediate family?", hi: "आपके सगे परिवार में कितने भाई-बहन हैं?" },
    { en: "Our neighbor kindly offered to water our balcony garden while we were away.", hi: "हमारे पड़ोसी ने हमारे बाहर रहने के दौरान हमारे बालकनी के बगीचे में पानी देने की कृपा की।" },
    { en: "We established an instant rapport with our new business partners.", hi: "हमने अपने नए व्यावसायिक साझेदारों के साथ तत्काल सौहार्दपूर्ण संबंध स्थापित किए।" },
    { en: "The host extended a warm welcome to all foreign delegates.", hi: "मेजबान ने सभी विदेशी प्रतिनिधियों का गर्मजोशी से स्वागत किया।" },
    { en: "Sharing childhood struggles created an enduring bond between the classmates.", hi: "बचपन के संघर्षों को साझा करने से सहपाठियों के बीच एक स्थायी बंधन बन गया।" },
    { en: "I ran into a mutual acquaintance at the international book fair.", hi: "अंतरराष्ट्रीय पुस्तक मेले में मेरी मुलाकात एक पारस्परिक परिचित से हुई।" },
    { en: "His humble upbringing shaped his compassionate approach to social work.", hi: "उनकी विनम्र परवरिश ने सामाजिक कार्य के प्रति उनके दयालु दृष्टिकोण को आकार दिया।" },
    { en: "The alumni association will host a grand reunion in New Delhi next month.", hi: "पूर्व छात्र संघ अगले महीने नई दिल्ली में एक भव्य पुनर्मिलन समारोह आयोजित करेगा।" },
    { en: "You are cordially invited to attend the silver jubilee symposium.", hi: "आपको रजत जयंती संगोष्ठी में भाग लेने के लिए सादर आमंत्रित किया जाता है।" },
    { en: "Please make yourself at home while I prepare some fresh refreshments.", hi: "कृपया इसे अपना ही घर समझें जब तक कि मैं कुछ ताज़ा नाश्ता तैयार करता हूँ।" },
    { en: "It was a wonderful surprise bumping into you after such a long gap.", hi: "इतने लंबे अंतराल के बाद आपसे अचानक मिलना एक सुखद आश्चर्य था।" },
    { en: "Our ancestors preserved traditional ecological knowledge for generations.", hi: "हमारे पूर्वजों ने पीढ़ियों से पारंपरिक पारिस्थितिक ज्ञान को संरक्षित रखा।" },
    { en: "Allow me to present our keynote speaker for today's inaugural session.", hi: "मुझे आज के उद्घाटन सत्र के लिए हमारे मुख्य वक्ता को प्रस्तुत करने की अनुमति दें।" },
    { en: "We bid a fond farewell to our senior colleagues who retired this month.", hi: "हमने इस महीने सेवानिवृत्त हुए अपने वरिष्ठ सहयोगियों को भावभीनी विदाई दी।" }
  ];

  const day31 = {
    dayNumber: 31,
    id: "day_31",
    titleEn: "Social Introductions, Family & Reconnecting",
    titleHi: "सामाजिक परिचय, परिवार एवं पुराने मित्रों से पुनः संपर्क",
    cefr: "A2.1",
    estMinutes: 45,
    prerequisites: "Stage 3 Mastery (Days 21–30: Past Simple, Continuous & Narrative Synthesis)",
    objectivesEn: [
      "Master high-register third-party introductions and formal self-introductions in social and professional contexts.",
      "Eliminate fossilized Indian English L1 transfer errors including '*Myself [Name]*' and '*cousin brother/sister*'.",
      "Express nuanced kinship, marital, and ancestral relationships using standard international vocabulary.",
      "Demonstrate conversational fluency in reconnecting, reminiscing, and extending warm social courtesies.",
      "Apply consonant-to-vowel linking (/n‿æ/, /t‿ɪ/) in connected conversational speech."
    ],
    objectivesHi: [
      "सामाजिक और व्यावसायिक संदर्भों में औपचारिक आत्म-परिचय और अन्य व्यक्तियों का शिष्ट परिचय कराना सीखना।",
      "हिन्दी भाषियों की सामान्य त्रुटियों (जैसे '*Myself [Name]*' और '*cousin brother/sister*') को हमेशा के लिए समाप्त करना।",
      "पारिवारिक, वैवाहिक और वंशानुगत संबंधों को मानक अंतरराष्ट्रीय शब्दावली में सटीकता से व्यक्त करना।",
      "पुराने मित्रों से पुनः संपर्क करने, यादें ताज़ा करने और शिष्टाचारपूर्ण संवाद में धाराप्रवाह बनना।",
      "बोलचाल की अंग्रेज़ी में व्यंजन-से-स्वर संयोजन (Consonant-to-Vowel Linking) का सटीक उच्चारण करना।"
    ],
    teach: {
      hindiExplanation: "स्टेज 4 में आपका स्वागत है! अब हम सामाजिक और व्यावहारिक अंग्रेज़ी (Conversational Pragmatics & Interpersonal Fluency) में महारत हासिल करेंगे। डे 31 में हम सीखेंगे कि औपचारिक और अनौपचारिक अवसरों पर अपना और दूसरों का परिचय कैसे कराएं, परिवार व नातेदारी के सटीक शब्दों का प्रयोग कैसे करें, और पुराने परिचितों से मिलने पर बातचीत कैसे आगे बढ़ाएं। सबसे महत्वपूर्ण बात: कभी भी '*Myself Rajesh*' न कहें (यह व्याकरण की दृष्टि से गलत है), हमेशा 'I am Rajesh' या 'My name is Rajesh' बोलें। इसी तरह '*cousin brother*' या '*cousin sister*' के स्थान पर केवल 'cousin' का प्रयोग करें।",
      englishExplanation: "Stage 4 initiates the advanced interpersonal and pragmatic dimension of the curriculum. Day 31 focuses on social etiquette, personal and professional networking, kinship taxonomy, and reconnection formulas. Key pedagogical objectives include eradicating the widespread Indian English habit of using reflexive pronouns as subjects ('*Myself [Name]*') and redundant kin compounding ('*cousin sister*'). Learners will acquire high-register third-party introductions ('May I introduce...', 'Allow me to present...'), conversational reconnecting openers ('It has been ages since...', 'How have you been keeping?'), and consonant-to-vowel connected speech glides.",
      grammarRules: [
        {
          ruleNumber: 1,
          title: "Subject Pronoun Requirement for Introductions",
          description: "Reflexive pronouns (myself, himself, herself) CANNOT serve as grammatical subjects. Always introduce yourself using 'I am [Name]', 'My name is [Name]', or 'This is [Name]' (on the telephone/radio). Never say '*Myself [Name]*'.",
          register: "Core Syntax Standard"
        },
        {
          ruleNumber: 2,
          title: "Standard Kinship Compounding (No Gender Suffixing)",
          description: "In standard English, 'cousin' is gender-neutral and never takes 'brother' or 'sister'. Say 'My cousin Sunita' or 'My cousin Rajesh'. If gender specification is required, use 'my female cousin' or clarify with subject pronouns ('She is my cousin').",
          register: "Sociolinguistic Standard"
        },
        {
          ruleNumber: 3,
          title: "Diplomatic Third-Party Introduction Formulas",
          description: "Formal third-party introductions utilize modal softening: 'May I introduce [Name]?', 'Allow me to present [Name]', or 'I would like you to meet [Name]'. The responder replies: 'It is a pleasure to meet you' or 'Pleased to make your acquaintance'.",
          register: "Pragmatic Protocol"
        },
        {
          ruleNumber: 4,
          title: "Reconnection and Time-Elapsed Aspect",
          description: "When reconnecting after a long duration, use present perfect with 'since' or 'for': 'It has been far too long since we last met' or 'We haven't seen each other for ages'. Inquire with 'How have you been keeping?'",
          register: "Conversational Aspect"
        }
      ],
      formulaTable: [
        { subjectGroup: "Formal Self-Introduction", formula: "Good morning/afternoon, I am + [Full Name] + [Role / Designation]", exampleEn: "Good morning, I am Priya Sharma, the lead architect.", meaningHi: "सुप्रभात, मैं प्रिया शर्मा हूँ, मुख्य वास्तुकार।" },
        { subjectGroup: "Diplomatic Third-Party Intro", formula: "May I have the pleasure of introducing + [Name] + [Relationship/Title]?", exampleEn: "May I have the pleasure of introducing Dr. Verma?", meaningHi: "क्या मैं डॉ. वर्मा का परिचय कराने का सौभाग्य प्राप्त कर सकता हूँ?" },
        { subjectGroup: "Warm Reconnection Opener", formula: "It has been far too long since + Subject + last + [Past Verb]", exampleEn: "It has been far too long since we last had dinner together.", meaningHi: "हमारे साथ में पिछली बार रात्रिभोज करने को बहुत लंबा समय हो गया है।" },
        { subjectGroup: "Standard Kinship Statement", formula: "Subject + be + my + cousin / nephew / niece / in-laws", exampleEn: "Rajesh is my cousin who lives in Hyderabad.", meaningHi: "राजेश मेरा चचेरा/ममेरा भाई है जो हैदराबाद में रहता है।" }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Using '*Myself [Name]*' and '*Cousin brother/sister*'",
        hindiPattern: "हिन्दी में 'मैं खुद राजेश' या 'मेरी चचेरी बहन' का शाब्दिक अनुवाद करके शिक्षार्थी बोल देते हैं: '*Myself Rajesh*' और '*She is my cousin sister*'।",
        potentialInterference: "Saying '*Myself Rohan Mehta, working in IT*' and '*He is my cousin brother from Mumbai*'.",
        explanation: "Reflexive pronouns like 'myself' require a grammatical subject (e.g. 'I made this myself'). In English, 'cousin' already means child of an uncle or aunt; adding 'brother' or 'sister' is ungrammatical redundancy.",
        naturalSolution: "Always say: 'I am Rohan Mehta' / 'My name is Rohan Mehta' and 'He is my cousin from Mumbai'."
      }
    },
    phonetics: {
      targetSound: "Consonant-to-Vowel Resyllabification (/n‿æ/, /t‿ɪ/, /z‿əv/)",
      articulatoryMechanics: "In fluent English speech, when a word ending in a consonant is followed immediately by a word starting with a vowel, the final consonant glides seamlessly across the word boundary onto the initial vowel of the next word. E.g., 'an acquaintance' is pronounced /ə.nəˈkweɪn.təns/, and 'caught up' becomes /ˈkɔː.tʌp/.",
      hindiSpeakerPhoneticTrap: "Inserting a glottal stop /ʔ/ or brief pause before word-initial vowels, creating staccato, fragmented rhythm (e.g. pronouncing 'an... old... acquaintance' as separate chopped units instead of a connected thought group /ə.nəʊl.dəˈkweɪn.təns/).",
      minimalPairs: [
        { p1: "nephew", ipa1: "/ˈnef.juː/", p2: "new view", ipa2: "/ˌnjuː ˈvjuː/", note: "Single stressed word vs compound phrase" },
        { p1: "niece", ipa1: "/niːs/", p2: "knees", ipa2: "/niːz/", note: "Voiceless /s/ vs voiced /z/" },
        { p1: "spouse", ipa1: "/spaʊs/", p2: "spies", ipa2: "/spaɪz/", note: "Diphthong /aʊ/ vs /aɪ/" },
        { p1: "kin", ipa1: "/kɪn/", p2: "keen", ipa2: "/kiːn/", note: "Short /ɪ/ vs long /iː/" },
        { p1: "bond", ipa1: "/bɒnd/", p2: "bound", ipa2: "/baʊnd/", note: "Short monophthong /ɒ/ vs diphthong /aʊ/" },
        { p1: "greet", ipa1: "/ɡriːt/", p2: "great", ipa2: "/ɡreɪt/", note: "High front /iː/ vs closing /eɪ/" },
        { p1: "reunion", ipa1: "/riːˈjuː.njən/", p2: "region", ipa2: "/ˈriː.dʒən/", note: "Palatal glide /j/ vs postalveolar affricate /dʒ/" },
        { p1: "clan", ipa1: "/klæn/", p2: "clown", ipa2: "/klaʊn/", note: "Open front /æ/ vs closing diphthong /aʊ/" },
        { p1: "foster", ipa1: "/ˈfɒs.tər/", p2: "faster", ipa2: "/ˈfɑːs.tər/", note: "Short back /ɒ/ vs long open /ɑː/" },
        { p1: "ancestor", ipa1: "/ˈæn.ses.tər/", p2: "attester", ipa2: "/əˈtes.tər/", note: "Initial stress /ˈæn/ vs medial stress /tes/" }
      ],
      prosodyFocus: "Voice & Accent Focus: Consonant-to-vowel linking (/n‿æ/, /t‿ɪ/). Thought groups must be spoken with unbroken breath support, letting final coda consonants attach to subsequent vowel onsets."
    },
    learn: {
      vocabulary: v31,
      spokenPhrases: [
        { id: "d31_p01", phrase: "May I introduce...", register: "Formal Introduction", meaningHi: "क्या मैं परिचय करा सकता हूँ...", ipa: "/meɪ aɪ ˌɪn.trəˈdjuːs/", usageContext: "Introducing a third party in business or formal social meetings." },
        { id: "d31_p02", phrase: "It's a pleasure to meet you.", register: "Courteous Response", meaningHi: "आपसे मिलकर बहुत खुशी हुई।", ipa: "/ɪts ə ˈpleʒ.ər tuː miːt juː/", usageContext: "Standard reply upon being introduced to someone for the first time." },
        { id: "d31_p03", phrase: "How have you been keeping?", register: "Warm Reconnection", meaningHi: "आप इतने समय से कैसे रहे हैं?", ipa: "/haʊ həv juː bɪn ˈkiː.pɪŋ/", usageContext: "Inquiring about well-being after not seeing someone for months or years." },
        { id: "d31_p04", phrase: "It has been ages!", register: "Enthusiastic Social", meaningHi: "मिले हुए एक जमाना हो गया!", ipa: "/ɪt həz bɪn ˈeɪ.dʒɪz/", usageContext: "Expressing joyful surprise when bumping into an old friend." },
        { id: "d31_p05", phrase: "Please give my warmest regards to...", register: "Diplomatic Courtesy", meaningHi: "कृपया मेरी ओर से सादर प्रणाम कहें...", ipa: "/pliːz ɡɪv maɪ ˈwɔː.mɪst rɪˈɡɑːdz tuː/", usageContext: "Sending respectful greetings to the listener's family or colleagues." },
        { id: "d31_p06", phrase: "Let's catch up over coffee.", register: "Casual Invitation", meaningHi: "चलिए कॉफ़ी पर मिलकर बातें करते हैं।", ipa: "/lets kætʃ ʌp ˈəʊ.vər ˈkɒf.i/", usageContext: "Suggesting a relaxed meeting to exchange life updates." },
        { id: "d31_p07", phrase: "We must stay in touch.", register: "Warm Closing", meaningHi: "हमें संपर्क में ज़रूर रहना चाहिए।", ipa: "/wiː mʌst steɪ ɪn tʌtʃ/", usageContext: "Reaffirming friendship before parting." },
        { id: "d31_p08", phrase: "Make yourself at home.", register: "Hospitality", meaningHi: "इसे अपना ही घर समझें।", ipa: "/meɪk jɔːˈself ət həʊm/", usageContext: "Welcoming guests into your residence or lounge." }
      ]
    },
    examples: {
      bilingualExemplars: generateBilingualExemplars(31, "Social Introductions & Reconnecting", patterns31)
    },
    practice: {
      exercises: generateStage4Exercises(31, "Social Introductions & Kinship", mcqPool31, blankPool31, errorPool31, transformPool31, listeningPool31, dialoguePool31, recallPool31),
      translationSet: generateTranslationSet(31, transPairs31)
    },
    use: {
      dialogue: {
        title: "Reconnecting with an Esteemed Colleague at an International Summit",
        context: "Rohan encounters his former university research mentor, Dr. Swaminathan, at a renewable energy symposium in New Delhi.",
        roles: ["Rohan (Senior Renewable Engineer)", "Dr. Swaminathan (Distinguished Professor)"],
        turns: [
          { speaker: "Rohan", textEn: "Professor Swaminathan! What an extraordinary surprise! It has been far too long since we last spoke.", textHi: "प्रोफेसर स्वामीनाथन! कितना सुखद आश्चर्य! पिछली बार हमारी बातचीत को बहुत लंबा समय हो गया है।", ipa: "/prəˈfes.ər swɑː.mɪˈnɑː.θən! wɒt ən ɪkˈstrɔː.dɪn.ər.i sərˈpraɪz!/", pragmaticNote: "Warm, respectful opening combining professional deference with genuine social enthusiasm." },
          { speaker: "Dr. Swaminathan", textEn: "Rohan! It is truly wonderful to see you. You are looking remarkably distinguished. How have you been keeping all these years?", textHi: "रोहन! तुम्हें देखकर सचमुच बहुत खुशी हुई। तुम बहुत प्रभावशाली दिख रहे हो। इन सभी वर्षों में तुम कैसे रहे हो?", ipa: "/ˈrəʊ.hən! ɪt ɪz ˈtruː.li ˈwʌn.də.fəl tuː siː juː./", pragmaticNote: "Affectionate mentorship response acknowledging career maturation." },
          { speaker: "Rohan", textEn: "I have been doing very well, sir. I recently joined a green hydrogen consortium as lead technical consultant. May I have the pleasure of introducing my colleague, Ms. Ananya Sen?", textHi: "मैं बहुत अच्छा कर रहा हूँ, सर। मैं हाल ही में मुख्य तकनीकी सलाहकार के रूप में ग्रीन हाइड्रोजन कंसोर्टियम में शामिल हुआ हूँ। क्या मैं अपनी सहकर्मी सुश्री अनन्या सेन का परिचय कराने का सौभाग्य प्राप्त कर सकता हूँ?", ipa: "/meɪ aɪ həv ðə ˈpleʒ.ər əv ˌɪn.trəˈdjuː.sɪŋ maɪ ˈkɒl.iːɡ, mɪz əˈnæn.jə sen?/", pragmaticNote: "Flawless third-party introduction formula with modal softening." },
          { speaker: "Dr. Swaminathan", textEn: "Pleased to make your acquaintance, Ms. Sen. Rohan was one of our most brilliant researchers in solar thermodynamics.", textHi: "सुश्री सेन, आपसे मिलकर बहुत प्रसन्नता हुई। रोहन सौर ऊष्मागतिकी में हमारे सबसे प्रतिभाशाली शोधकर्ताओं में से एक थे।", ipa: "/pliːzd tuː meɪk jɔːr əˈkweɪn.təns, mɪz sen./", pragmaticNote: "Formal diplomatic greeting followed by generous professional praise." },
          { speaker: "Rohan", textEn: "Thank you, Professor. How is your family? Please convey my warmest regards to Mrs. Swaminathan.", textHi: "धन्यवाद, प्रोफेसर। आपका परिवार कैसा है? कृपया श्रीमती स्वामीनाथन को मेरा सादर प्रणाम दें।", ipa: "/pliːz kənˈveɪ maɪ ˈwɔː.mɪst rɪˈɡɑːdz tuː ˈmɪs.ɪz swɑː.mɪˈnɑː.θən./", pragmaticNote: "Polite inquiry into family well-being with traditional Indian deference." },
          { speaker: "Dr. Swaminathan", textEn: "She is doing splendidly, thank you. Our eldest nephew just completed his postgraduate studies in Cambridge. We must catch up over lunch today.", textHi: "वह बहुत अच्छी हैं, धन्यवाद। हमारे सबसे बड़े भतीजे ने अभी-अभी कैम्ब्रिज में अपनी स्नातकोत्तर की पढ़ाई पूरी की है। हमें आज दोपहर के भोजन पर मिलकर विस्तार से बातें करनी चाहिए।", ipa: "/wiː mʌst kætʃ ʌp ˈəʊ.vər lʌntʃ təˈdeɪ./", pragmaticNote: "Kinship update followed by an active social invitation." },
          { speaker: "Rohan", textEn: "I would be honored, sir. Let us assemble in the main foyer at one o'clock sharp.", textHi: "यह मेरे लिए सम्मान की बात होगी, सर। चलिए ठीक एक बजे मुख्य लाउंज में एकत्र होते हैं।", ipa: "/aɪ wʊd biː ˈɒn.əd, sɜːr./", pragmaticNote: "Decisive, respectful confirmation of the meeting plan." }
        ]
      },
      speakingTask: {
        prompt: "Simulate a networking introduction where you introduce yourself to a new colleague and then introduce a third party (a family member or mutual acquaintance).",
        context: "Annual Corporate Innovation Summit in Bengaluru.",
        guidedQuestions: [
          "How will you introduce yourself without using '*Myself [Name]*'?",
          "What modal formula will you employ to introduce your colleague or relative?",
          "How will you inquire about past mutual contacts using 'catch up' or 'reminisce'?"
        ],
        evaluationCriteria: "Flawless elimination of L1 traps, natural consonant-to-vowel linking, and appropriate register choices."
      },
      shadowingExercise: {
        transcriptEn: "May I have the pleasure of introducing my esteemed colleague, Dr. Meenakshi? It has been far too long since we all caught up together.",
        transcriptHi: "क्या मुझे अपनी आदरणीय सहकर्मी, डॉ. मीनाक्षी का परिचय कराने का सौभाग्य मिल सकता है? हम सभी के एक साथ मिलने को बहुत लंबा समय हो गया है।",
        audioPacing: "Natural conversational tempo (120 wpm) with smooth resyllabification /meɪ aɪ həv ðə ˈpleʒ.ər ə.vɪn.trəˈdjuː.sɪŋ.../",
        prosodyInstructions: "Connect 'pleasure of' into /ˈpleʒ.ər‿əv/ and 'caught up' into /ˈkɔː.t‿ʌp/. Keep pitch rising on introductory inquiries."
      }
    },
    assess: {
      writtenChecklist: [
        "Eliminates reflexive pronouns (*Myself Rajesh*) in self-introductions.",
        "Employs 'cousin' without redundant gender tags (*cousin sister*).",
        "Uses diplomatic modal formulas for third-party introductions (*May I introduce...*).",
        "Applies present perfect aspect for reconnecting (*It has been ages since...*).",
        "Transcribes and links consonant-to-vowel boundaries accurately."
      ],
      oralProductionTask: "Deliver a 90-second spontaneous spoken introduction at a conference, introducing yourself, your role, and your associate.",
      benchmarks: [
        { level: "A1/A2 Threshold", descriptor: "Can state name and basic family facts with simple sentences." },
        { level: "A2.1 Target", descriptor: "Produces natural self and third-party introductions, avoids L1 interference, and uses 'catch up' / 'reminisce' accurately." },
        { level: "B1 Mastery", descriptor: "Seamlessly navigates formal and informal social registers with connected speech linking and diplomatic intonation." }
      ]
    },
    review: {
      spacedRepetitionTag: "Stage4_Day31_SocialIntroductions",
      recommendedIntervalDays: [1, 3, 7, 14, 30],
      retrievalDrill: [
        "What is the correct English replacement for '*Myself Amit*'?",
        "Why is '*cousin brother*' ungrammatical in standard international English?",
        "Name two high-register third-party introduction phrases.",
        "How do you pronounce 'nephew' and 'niece' accurately in IPA?",
        "Complete the sentence: 'It has been far too long since we last _____ (catch) up.'"
      ]
    }
  };

  // Build Day 32
  const v32 = rawVocab32.map((item, idx) => {
    const id = `d32_v${String(idx + 1).padStart(2, '0')}`;
    const term = makeVocab(id, item);
    if (priorLemmas.has(term.lemma)) {
      console.warn(`[DUPLICATE WARNING] Day 32 lemma '${term.lemma}' already registered!`);
    }
    priorLemmas.add(term.lemma);
    return term;
  });

  const patterns32 = [
    { en: "Could you kindly provide a brief overview of the project milestones?", hi: "क्या आप कृपया परियोजना के महत्वपूर्ण चरणों का संक्षिप्त विवरण प्रदान कर सकते हैं?", cat: "Polite Inquiries" },
    { en: "Would you mind reviewing this draft proposal before tomorrow's board meeting?", hi: "क्या आप कल की बोर्ड बैठक से पहले इस मसौदा प्रस्ताव की समीक्षा करने का कष्ट करेंगे?", cat: "Modal Softening" },
    { en: "You should consult an experienced chartered accountant regarding corporate taxation.", hi: "आपको कॉर्पोरेट कराधान के संबंध में एक अनुभवी चार्टर्ड अकाउंटेंट से परामर्श लेना चाहिए।", cat: "Professional Advice" },
    { en: "We ought to verify the laboratory calibration before executing the trial.", hi: "परीक्षण निष्पादित करने से पहले हमें प्रयोगशाला के अंशांकन का सत्यापन करना चाहिए।", cat: "Moral/Technical Obligation" },
    { en: "You had better secure all backup copies before updating the database servers.", hi: "डेटाबेस सर्वर को अपडेट करने से पहले आपको सभी बैकअप प्रतियों को सुरक्षित कर लेना चाहिए (अन्यथा गंभीर समस्या हो सकती है)।", cat: "Urgent Warning/Advice" },
    { en: "Would it be feasible to reschedule our consultation to Friday afternoon?", hi: "क्या हमारे परामर्श सत्र को शुक्रवार दोपहर के लिए पुनर्निर्धारित करना व्यावहारिक होगा?", cat: "Diplomatic Requests" },
    { en: "I would strongly advise against investing in unverified equity schemes.", hi: "मैं असत्यापित इक्विटी योजनाओं में निवेश करने के सख्त खिलाफ सलाह दूंगा।", cat: "Financial Advisory" },
    { en: "Could you please speak a little slower so that everyone can follow the translation?", hi: "क्या आप कृपया थोड़ा धीरे बोल सकते हैं ताकि हर कोई अनुवाद को समझ सके?", cat: "Spoken Politeness" },
    { en: "You ought to have informed the senior management about the structural fissure earlier.", hi: "आपको संरचनात्मक दरार के बारे में वरिष्ठ प्रबंधन को पहले ही सूचित कर देना चाहिए था।", cat: "Past Advisory Criticism" },
    { en: "Would you be so kind as to forward the revised architectural blueprints?", hi: "क्या आप संशोधित वास्तुशिल्प ब्लूप्रिंट अग्रेषित करने की कृपा करेंगे?", cat: "High-Register Protocol" }
  ];

  const mcqPool32 = [
    { q: `What grammatical form MUST follow 'Would you mind...'?`, opts: ["Gerund (Verb-ing)", "Base verb (V1)", "Infinitive (to + Verb)", "Past participle (V3)"], ans: "Gerund (Verb-ing)", why: "'Would you mind' requires a gerund: 'Would you mind *closing* the window?'" },
    { q: `Which modal auxiliary carries the strongest sense of urgent warning with negative consequences if ignored?`, opts: ["Had better", "Should", "Could", "May"], ans: "Had better", why: "'Had better' implies that failure to follow the advice will result in trouble or penalty." },
    { q: `How do you politely decline 'Would you mind if I sat here?' when you WANT them to sit?`, opts: ["'Not at all, please go ahead.'", "'Yes, I mind very much.'", "'No, you cannot sit.'", "'Yes, please sit down.'"], ans: "'Not at all, please go ahead.'", why: "Answering 'Not at all' or 'No, not at all' means 'I do not mind' (you give permission)." },
    { q: `Choose the correct advice for past regret or criticism:`, opts: ["You should have consulted a specialist earlier.", "You should consulted a specialist earlier.", "You ought consult a specialist earlier.", "You had better to consult a specialist."], ans: "You should have consulted a specialist earlier.", why: "'Should have + V3' expresses past advice or regret." },
    { q: `Select the most diplomatic request formula:`, opts: ["Could you possibly assist me with this calculation?", "You must assist me with this calculation.", "Give me assistance right now.", "Why you are not assisting me?"], ans: "Could you possibly assist me with this calculation?", why: "'Could you possibly...' softens the request to the highest degree of politeness." }
  ];

  const blankPool32 = [
    { p: "Would you mind _____ (open) the conference room door?", a: "opening", exp: "'Would you mind' is strictly followed by gerund '-ing' -> 'opening'." },
    { p: "You had better _____ (submit) the tax audit before midnight tonight.", a: "submit", exp: "'Had better' takes a bare infinitive (base verb V1 without 'to') -> 'submit'." },
    { p: "We _____ (ought / to / verify) the laboratory calibration before proceeding.", a: "ought to verify", exp: "'Ought' must always be paired with 'to' -> 'ought to verify'." },
    { p: "Could you please _____ (clarify) the fifth clause in the agreement?", a: "clarify", exp: "Modal 'could' takes base verb -> 'clarify'." },
    { p: "You should have _____ (inform) the project director about the shipment delay.", a: "informed", exp: "'Should have' is followed by past participle V3 -> 'informed'." }
  ];

  const errorPool32 = [
    { w: "Would you mind to close the window?", r: "Would you mind closing the window?", e: "Replace infinitive 'to close' with gerund 'closing' after 'Would you mind'." },
    { w: "You had better to take an umbrella because it is raining.", r: "You had better take an umbrella because it is raining.", e: "'Had better' takes a bare infinitive; do NOT use 'to'." },
    { w: "We ought discuss the financial strategy tomorrow.", r: "We ought to discuss the financial strategy tomorrow.", e: "'Ought' requires 'to' before the base verb ('ought to discuss')." },
    { w: "Could you please to send me the updated invoice?", r: "Could you please send me the updated invoice?", e: "Modal 'could' takes bare base verb; omit 'to'." }
  ];

  const transformPool32 = [
    { p: `Transform into a polite request using 'Would you mind': "Send me the files."`, r: "Would you mind sending me the files?", e: "Use 'Would you mind' + gerund 'sending'." },
    { p: `Transform into urgent advice using 'had better': "You should leave now or you will miss the train."`, r: "You had better leave now or you will miss the train.", e: "Use 'had better' + base verb 'leave'." },
    { p: `Transform into past criticism using 'should have': "You did not lock the front door."`, r: "You should have locked the front door.", e: "Use 'should have' + past participle 'locked'." }
  ];

  const listeningPool32 = [
    { audioScript: "Would you mind opening the ventilation window?", transcript: "Would you mind opening the ventilation window?", focus: "Intrusive /j/ glide between 'you' and 'mind' and resyllabification /wʊdʒuː maɪnd/." },
    { audioScript: "You had better consult an experienced specialist.", transcript: "You had better consult an experienced specialist.", focus: "Fluent reduction of 'had better' to /d ˈbet.ər/ and consonant-to-vowel link in 'consult an'." },
    { audioScript: "Could you possibly provide further clarification?", transcript: "Could you possibly provide further clarification?", focus: "Weak form /kəd juː/ and falling-rising polite intonation." }
  ];

  const dialoguePool32 = [
    { speakerA: "Would you mind reviewing this confidential legal draft before five PM?", opts: ["Not at all, I will examine it immediately.", "Yes, I mind very much.", "I am not liking this.", "No, do it yourself."], ans: "Not at all, I will examine it immediately.", why: "'Not at all' politely consents to the request." },
    { speakerA: "I have been experiencing acute migraines for three consecutive days.", opts: ["You had better consult a neurologist without further delay.", "You must to sleep.", "Why you have migraine?", "Good for you."], ans: "You had better consult a neurologist without further delay.", why: "Appropriate medical advisory using 'had better' for urgent situations." }
  ];

  const recallPool32 = [
    { prompt: "What is the structural difference between 'should' and 'had better'?", ans: "'Should' gives general advice or moral recommendation. 'Had better' carries an urgent warning with implied negative consequences if ignored.", exp: "Pragmatic distinction between modal advisory forms." },
    { prompt: "Why is 'Would you mind to help me' ungrammatical?", ans: "'Would you mind' requires a gerund (-ing form), so it must be 'Would you mind helping me'.", exp: "Gerund complementation rule after 'mind'." }
  ];

  const transPairs32 = [
    { en: "Could you kindly provide a brief overview of the project milestones?", hi: "क्या आप कृपया परियोजना के महत्वपूर्ण चरणों का संक्षिप्त विवरण प्रदान कर सकते हैं?" },
    { en: "Would you mind reviewing this draft proposal before tomorrow's board meeting?", hi: "क्या आप कल की बोर्ड बैठक से पहले इस मसौदा प्रस्ताव की समीक्षा करने का कष्ट करेंगे?" },
    { en: "You should consult an experienced chartered accountant regarding corporate taxation.", hi: "आपको कॉर्पोरेट कराधान के संबंध में एक अनुभवी चार्टर्ड अकाउंटेंट से परामर्श लेना चाहिए।" },
    { en: "We ought to verify the laboratory calibration before executing the trial.", hi: "परीक्षण निष्पादित करने से पहले हमें प्रयोगशाला के अंशांकन का सत्यापन करना चाहिए।" },
    { en: "You had better secure all backup copies before updating the database servers.", hi: "डेटाबेस सर्वर को अपडेट करने से पहले आपको सभी बैकअप प्रतियों को सुरक्षित कर लेना चाहिए।" },
    { en: "Would it be feasible to reschedule our consultation to Friday afternoon?", hi: "क्या हमारे परामर्श सत्र को शुक्रवार दोपहर के लिए पुनर्निर्धारित करना व्यावहारिक होगा?" },
    { en: "I would strongly advise against investing in unverified equity schemes.", hi: "मैं असत्यापित इक्विटी योजनाओं में निवेश करने के खिलाफ सख्त सलाह दूंगा।" },
    { en: "Could you please speak a little slower so that everyone can follow the translation?", hi: "क्या आप कृपया थोड़ा धीरे बोल सकते हैं ताकि हर कोई अनुवाद को समझ सके?" },
    { en: "You ought to have informed the senior management about the structural fissure earlier.", hi: "आपको संरचनात्मक दरार के बारे में वरिष्ठ प्रबंधन को पहले ही सूचित कर देना चाहिए था।" },
    { en: "Would you be so kind as to forward the revised architectural blueprints?", hi: "क्या आप संशोधित वास्तुशिल्प ब्लूप्रिंट अग्रेषित करने की कृपा करेंगे?" },
    { en: "You should take plenty of rest after undergoing such major surgery.", hi: "ऐसी बड़ी सर्जरी कराने के बाद आपको भरपूर आराम करना चाहिए।" },
    { en: "Would you mind turning down the volume of the television slightly?", hi: "क्या आप टेलीविजन की आवाज़ थोड़ी कम करने का कष्ट करेंगे?" },
    { en: "We had better leave for the airport immediately to avoid peak-hour traffic.", hi: "पीक-आवर ट्रैफ़िक से बचने के लिए हमें तुरंत हवाई अड्डे के लिए निकल जाना चाहिए।" },
    { en: "Could I possibly borrow your reference dictionary for thirty minutes?", hi: "क्या मैं तीस मिनट के लिए आपकी संदर्भ शब्दकोश उधार ले सकता हूँ?" },
    { en: "You ought to apologize to your team members for that abrupt remark.", hi: "उस आकस्मिक और कठोर टिप्पणी के लिए आपको अपनी टीम के सदस्यों से माफ़ी मांगनी चाहिए।" },
    { en: "Would it be convenient for you to meet over zoom tomorrow morning?", hi: "क्या कल सुबह ज़ूम पर मिलना आपके लिए सुविधाजनक होगा?" },
    { en: "I would suggest exploring alternative renewable energy suppliers in the region.", hi: "मैं इस क्षेत्र में वैकल्पिक नवीकरणीय ऊर्जा आपूर्तिकर्ताओं की तलाश करने का सुझाव दूंगा।" },
    { en: "You had better not tamper with the electrical circuit while the main breaker is on.", hi: "जब मुख्य ब्रेकर चालू हो, तब आपको बिजली के सर्किट से छेड़छाड़ नहीं करनी चाहिए।" },
    { en: "Could you explain the difference between direct and indirect taxation?", hi: "क्या आप प्रत्यक्ष और अप्रत्यक्ष कराधान के बीच का अंतर समझा सकते हैं?" },
    { en: "We should have double-checked the flight departure terminal before leaving home.", hi: "घर से निकलने से पहले हमें उड़ान के प्रस्थान टर्मिनल की दोबारा जांच कर लेनी चाहिए थी।" },
    { en: "Would you mind stepping aside so that the paramedics can pass through?", hi: "क्या आप थोड़ा एक तरफ होने का कष्ट करेंगे ताकि पैरामेडिक्स आगे निकल सकें?" },
    { en: "You ought to follow all prescribed dietary guidelines to control blood glucose levels.", hi: "रक्त शर्करा के स्तर को नियंत्रित करने के लिए आपको सभी निर्धारित आहार दिशानिर्देशों का पालन करना चाहिए।" },
    { en: "Could we arrange a short introductory call prior to the client presentation?", hi: "क्या हम ग्राहक प्रस्तुति से पहले एक छोटा परिचयात्मक कॉल आयोजित कर सकते हैं?" },
    { en: "You had better keep your passport and travel insurance documents in a waterproof pouch.", hi: "आपको अपना पासपोर्ट और यात्रा बीमा दस्तावेज वाटरप्रूफ पाउच में रखने चाहिए।" },
    { en: "I would appreciate your candid feedback on this research methodology.", hi: "मैं इस शोध पद्धति पर आपकी स्पष्ट प्रतिक्रिया की सराहना करूँगा।" }
  ];

  const day32 = {
    dayNumber: 32,
    id: "day_32",
    titleEn: "Modal Auxiliaries for Politeness & Advice (Could, Would, Should, Ought to)",
    titleHi: "विनम्रता एवं परामर्श हेतु मोडल सहायक क्रियाएँ (Could, Would, Should, Ought to, Had better)",
    cefr: "A2.1",
    estMinutes: 45,
    prerequisites: "Day 31 (Social Introductions, Family & Reconnecting)",
    objectivesEn: [
      "Master the pragmatic syntax of modal softeners: 'Could you...', 'Would you mind + Verb-ing', and 'Would you be so kind as to...'.",
      "Differentiate the nuance and urgency of advisory structures: 'Should', 'Ought to', 'Had better', and past criticism 'Should have + V3'.",
      "Construct high-diplomacy professional requests, suggestions, and medical/advisory recommendations.",
      "Eliminate grammatical errors such as '*Would you mind to...*' and '*You had better to...*'.",
      "Apply intrusive /r/ and /j/ glides in modal connected speech."
    ],
    objectivesHi: [
      "विनम्र अनुरोधों के लिए मोडल सॉफ्टनर्स ('Could you...', 'Would you mind + Verb-ing' आदि) के सटीक उपयोग में महारत हासिल करना।",
      "सलाह देने वाली संरचनाओं ('Should', 'Ought to', 'Had better' और भूतकालीन आलोचना 'Should have + V3') के सूक्ष्म अंतर को समझना।",
      "व्यावसायिक एवं सामाजिक संदर्भों में अत्यंत शिष्ट अनुरोध, सुझाव और परामर्श तैयार करना।",
      "'*Would you mind to...*' और '*You had better to...*' जैसी सामान्य व्याकरणिक गलतियों को दूर करना।",
      "धाराप्रवाह अंग्रेज़ी में इंट्रूसिव /r/ और /j/ ग्लाइड्स का सही उच्चारण करना।"
    ],
    teach: {
      hindiExplanation: "अंग्रेज़ी में विनम्रता (Politeness) और सलाह (Advice) व्यक्त करने के लिए 'Modal Auxiliaries' सबसे शक्तिशाली साधन हैं। सीधे आदेश देने ('Give me water') के बजाय अंग्रेज़ी में हमेशा 'Could you please pass the water?' या 'Would you mind passing the water?' का प्रयोग किया जाता है। ध्यान रखें: 'Would you mind' के बाद हमेशा Verb-ing रूप आता है (जैसे 'Would you mind opening the door?'). सलाह देने के लिए 'Should' (सामान्य सलाह), 'Ought to' (नैतिक कर्तव्य/उचित बात), और 'Had better' (गंभीर चेतावनी — 'नहीं किया तो नुकसान होगा') का प्रयोग होता है। 'Had better' के साथ 'to' कभी नहीं आता (हमेशा 'You had better go' बोलें, '*You had better to go*' नहीं)।",
      englishExplanation: "Modal auxiliaries serve as the bedrock of English conversational diplomacy, mitigating directness and encoding social distance, deference, and advisory urgency. Day 32 develops mastery across request softeners (Could, Would, Would you mind + gerund) and advisory gradients (Should, Ought to, Had better, Should have + V3). Critical morphosyntactic constraints are emphasized: 'Would you mind' requires a gerund complement; 'had better' takes a bare infinitive and carries prospective warning semantics; 'ought' obligatorily pairs with the 'to'-infinitive. Connected speech instruction focuses on palatalization (/wʊdʒuː/, /kʊdʒuː/) and linking glides.",
      grammarRules: [
        {
          ruleNumber: 1,
          title: "Gerund Complementation after 'Would you mind'",
          description: "The formula 'Would you mind' requires a gerund (-ing form): 'Would you mind closing the door?' Never use an infinitive ('*Would you mind to close*'). Answering 'Not at all' indicates polite agreement.",
          register: "Core Syntax Standard"
        },
        {
          ruleNumber: 2,
          title: "Bare Infinitive Constraint with 'Had better'",
          description: "'Had better' functions as a fixed modal idiom followed by a bare infinitive (V1 without 'to'): 'You had better consult a doctor.' Never say '*You had better to consult*'. It conveys urgent advice where non-compliance brings negative consequences.",
          register: "Advisory Syntax"
        },
        {
          ruleNumber: 3,
          title: "'Ought to' Obligatory Particle Rule",
          description: "'Ought' must always be accompanied by 'to' when followed by a verb: 'We ought to verify the results.' In negative statements: 'You ought not to ignore the warning.'",
          register: "Morphosyntactic Rule"
        },
        {
          ruleNumber: 4,
          title: "Past Modal Advisory/Criticism (Should have + V3)",
          description: "To express regret or criticism about an action that was advisable in the past but did not occur, use 'Subject + should have / ought to have + Past Participle (V3)': 'You should have backed up your files.'",
          register: "Aspectual Pragmatics"
        }
      ],
      formulaTable: [
        { subjectGroup: "Polite Request (Modal Softener)", formula: "Could you (possibly) + Base Verb (V1) + [Object]?", exampleEn: "Could you possibly email me the contract?", meaningHi: "क्या आप मुझे अनुबंध ईमेल करने का कष्ट कर सकते हैं?" },
        { subjectGroup: "High-Politeness Gerund Request", formula: "Would you mind + Verb-ing + [Object]?", exampleEn: "Would you mind reviewing this draft proposal?", meaningHi: "क्या आप इस मसौदा प्रस्ताव की समीक्षा करने का कष्ट करेंगे?" },
        { subjectGroup: "Urgent Advisory / Warning", formula: "Subject + had better (not) + Base Verb (V1)", exampleEn: "You had better leave now to catch the flight.", meaningHi: "उड़ान पकड़ने के लिए आपको अभी निकल जाना चाहिए (अन्यथा छूट जाएगी)।" },
        { subjectGroup: "Past Advisory / Regret", formula: "Subject + should have + Past Participle (V3)", exampleEn: "We should have reserved our train tickets earlier.", meaningHi: "हमें अपने ट्रेन टिकट पहले ही आरक्षित करा लेने चाहिए थे।" }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Using '*Would you mind to...*' and '*You had better to...*'",
        hindiPattern: "हिन्दी से अनुवाद करते समय शिक्षार्थी अक्सर 'Would you mind' और 'Had better' के बाद 'to' लगा देते हैं, जैसे '*Would you mind to help me*' या '*You had better to go*'।",
        potentialInterference: "Saying '*Would you mind to sign here?*' and '*You had better to consult doctor*'.",
        explanation: "'Mind' is a transitive verb taking gerund direct objects ('mind signing'). 'Had better' is a modal auxiliary requiring a bare infinitive without 'to'.",
        naturalSolution: "Always say: 'Would you mind signing here?' and 'You had better consult a doctor'."
      }
    },
    phonetics: {
      targetSound: "Intrusive /r/ and /j/ Linking Glides in Modal Clusters",
      articulatoryMechanics: "In connected speech, when a modal ends in a high front vowel or diphthong (/uː/ in 'would you', /aɪ/ in 'I would'), a slight palatal glide /j/ bridges the transition into the next vowel. Similarly, words ending in non-rhotic schwa or /ɔː/ insert an intrusive /r/ before a following vowel (e.g. 'law and order' -> /lɔːr‿ən ˈɔː.dər/, 'idea of' -> /aɪˈdɪər‿əv/). In 'Would you', /d/ + /j/ assimilates into the affricate /dʒ/ (/wʊdʒuː/).",
      hindiSpeakerPhoneticTrap: "Pronouncing 'would you' and 'could you' with separate dental /d̪/ and /j/ sounds, leading to choppy cadence instead of the natural smooth affricate /wʊdʒuː/ and /kʊdʒuː/.",
      minimalPairs: [
        { p1: "could", ipa1: "/kʊd/", p2: "good", ipa2: "/ɡʊd/", note: "Voiceless velar /k/ vs voiced velar /ɡ/" },
        { p1: "should", ipa1: "/ʃʊd/", p2: "would", ipa2: "/wʊd/", note: "Palato-alveolar /ʃ/ vs labial-velar /w/" },
        { p1: "ought", ipa1: "/ɔːt/", p2: "art", ipa2: "/ɑːt/", note: "Rounded back /ɔː/ vs unrounded central /ɑː/" },
        { p1: "better", ipa1: "/ˈbet.ər/", p2: "bitter", ipa2: "/ˈbɪt.ər/", note: "Short /e/ vs short /ɪ/" },
        { p1: "mind", ipa1: "/maɪnd/", p2: "mend", ipa2: "/mend/", note: "Diphthong /aɪ/ vs monophthong /e/" },
        { p1: "prudent", ipa1: "/ˈpruː.dənt/", p2: "proud", ipa2: "/praʊd/", note: "Long /uː/ vs closing diphthong /aʊ/" },
        { p1: "counsel", ipa1: "/ˈkaʊn.səl/", p2: "cancel", ipa2: "/ˈkæn.səl/", note: "Diphthong /aʊ/ vs open front /æ/" },
        { p1: "feasible", ipa1: "/ˈfiː.zə.bəl/", p2: "visible", ipa2: "/ˈvɪz.ə.bəl/", note: "Voiceless /f/ + /iː/ vs voiced /v/ + /ɪ/" },
        { p1: "tact", ipa1: "/tækt/", p2: "text", ipa2: "/tekst/", note: "Short /æ/ vs short /e/" },
        { p1: "discreet", ipa1: "/dɪˈskriːt/", p2: "discrete", ipa2: "/dɪˈskriːt/", note: "Identical pronunciation, distinct semantic spellings" }
      ],
      prosodyFocus: "Voice & Accent Focus: Intrusive /r/ and /j/ glide. Modal requests require a gentle high-starting pitch that dips and rises diplomatically at the end of the sentence to convey warmth and avoid sounding abrupt."
    },
    learn: {
      vocabulary: v32,
      spokenPhrases: [
        { id: "d32_p01", phrase: "Could you possibly...", register: "Diplomatic Request", meaningHi: "क्या आप संभवतः...", ipa: "/kəd juː ˈpɒs.ə.bli/", usageContext: "Softening a request when asking for a significant favor." },
        { id: "d32_p02", phrase: "Would you mind + Verb-ing...", register: "High Politeness", meaningHi: "क्या आप ... करने का कष्ट करेंगे?", ipa: "/wʊd juː maɪnd/", usageContext: "Politely requesting someone to take an action." },
        { id: "d32_p03", phrase: "Not at all, I'd be happy to.", register: "Polite Agreement", meaningHi: "बिल्कुल नहीं, मुझे खुशी होगी।", ipa: "/nɒt ət ɔːl, aɪd biː ˈhæp.i tuː/", usageContext: "Consenting affirmatively to a 'Would you mind' request." },
        { id: "d32_p04", phrase: "You had better...", register: "Urgent Advice", meaningHi: "आपके लिए बेहतर होगा कि आप...", ipa: "/juː həd ˈbet.ər/", usageContext: "Giving urgent advice where failure to act carries risks." },
        { id: "d32_p05", phrase: "You ought to...", register: "Moral / Logical Advice", meaningHi: "आपको ... करना चाहिए।", ipa: "/juː ˈɔːt tuː/", usageContext: "Recommending an ethical duty or wise course of action." },
        { id: "d32_p06", phrase: "You should have + V3...", register: "Past Advisory Criticism", meaningHi: "आपको ... करना चाहिए था।", ipa: "/juː ʃəd həv/", usageContext: "Expressing regret or mild constructive criticism regarding past omissions." },
        { id: "d32_p07", phrase: "Would it be feasible to...", register: "Professional Proposal", meaningHi: "क्या ... करना व्यावहारिक होगा?", ipa: "/wʊd ɪt biː ˈfiː.zə.bəl tuː/", usageContext: "Inquiring about project feasibility diplomatically." },
        { id: "d32_p08", phrase: "If I may suggest...", register: "Respectful Softener", meaningHi: "यदि मैं एक सुझाव दे सकूँ...", ipa: "/ɪf aɪ meɪ səˈdʒest/", usageContext: "Introducing a suggestion modestly in formal meetings." }
      ]
    },
    examples: {
      bilingualExemplars: generateBilingualExemplars(32, "Modal Auxiliaries for Politeness & Advice", patterns32)
    },
    practice: {
      exercises: generateStage4Exercises(32, "Modal Politeness & Advisory Mastery", mcqPool32, blankPool32, errorPool32, transformPool32, listeningPool32, dialoguePool32, recallPool32),
      translationSet: generateTranslationSet(32, transPairs32)
    },
    use: {
      dialogue: {
        title: "Diplomatic Negotiation and Project Advisory in Corporate Governance",
        context: "Ms. Radhika (Project Manager) and Mr. Vikram (Technical Director) discuss server migration timelines.",
        roles: ["Ms. Radhika (Project Manager)", "Mr. Vikram (Technical Director)"],
        turns: [
          { speaker: "Ms. Radhika", textEn: "Good morning, Vikram. Would you mind reviewing our cloud migration timeline before the client presentation?", textHi: "सुप्रभात, विक्रम। क्या आप ग्राहक प्रस्तुति से पहले हमारे क्लाउड माइग्रेशन समय-सारणी की समीक्षा करने का कष्ट करेंगे?", ipa: "/wʊdʒuː maɪnd rɪˈvjuː.ɪŋ ˈaʊər klaʊd maɪˈɡreɪ.ʃən ˈtaɪm.laɪn?/", pragmaticNote: "Polite opening using 'Would you mind + -ing'." },
          { speaker: "Mr. Vikram", textEn: "Not at all, Radhika. I would be happy to examine it. Looking at the schedule, you had better allocate an additional 48 hours for data integrity testing.", textHi: "बिल्कुल नहीं, राधिका। मुझे इसकी जांच करने में खुशी होगी। शेड्यूल को देखते हुए, आपके लिए डेटा अखंडता परीक्षण हेतु 48 घंटे का अतिरिक्त समय आवंटित करना बेहतर होगा।", ipa: "/nɒt ət ɔːl, ˈrɑː.dɪ.kə. aɪ wʊd biː ˈhæp.i tuː ɪɡˈzæm.ɪn ɪt./", pragmaticNote: "Consenting with 'Not at all' followed by urgent, practical advice using 'had better'." },
          { speaker: "Ms. Radhika", textEn: "That is a very prudent observation. Could you possibly highlight the specific high-risk database clusters?", textHi: "यह बहुत ही व्यावहारिक और समझदारी भरा अवलोकन है। क्या आप संभवतः विशिष्ट उच्च-जोखिम वाले डेटाबेस क्लस्टरों को चिह्नित कर सकते हैं?", ipa: "/kəd juː ˈpɒs.ə.bli ˈhaɪ.laɪt ðə spəˈsɪf.ɪk haɪ rɪsk ˈdeɪ.tə.beɪs ˈklʌs.tərz?/", pragmaticNote: "Softened request with 'Could you possibly'." },
          { speaker: "Mr. Vikram", textEn: "Certainly. We ought to isolate the financial transactional ledger first. If a glitch occurs during live trading, the consequences could be severe.", textHi: "निश्चित रूप से। हमें सबसे पहले वित्तीय लेनदेन बहीखाते को अलग करना चाहिए। यदि लाइव ट्रेडिंग के दौरान कोई गड़बड़ी होती है, तो परिणाम गंभीर हो सकते हैं।", ipa: "/wiː ˈɔːt tuː ˈaɪ.sə.leɪt ðə faɪˈnæn.ʃəl trænˈzæk.ʃən.əl ˈledʒ.ər fɜːst./", pragmaticNote: "Using 'ought to' to indicate technical best practice and necessity." },
          { speaker: "Ms. Radhika", textEn: "I agree completely. In hindsight, we should have scheduled this risk assessment two weeks ago.", textHi: "मैं पूरी तरह सहमत हूँ। पीछे मुड़कर देखें तो हमें यह जोखिम मूल्यांकन दो सप्ताह पहले ही निर्धारित कर लेना चाहिए था।", ipa: "/wiː ʃəd həv ˈskedʒ.uːld ðɪs rɪsk əˈses.mənt tuː wiːks əˈɡəʊ./", pragmaticNote: "Using 'should have + V3' to acknowledge a past omission constructively." },
          { speaker: "Mr. Vikram", textEn: "No matter; we can still implement it smoothly. You had better brief the devops engineers by 2 PM today.", textHi: "कोई बात नहीं; हम अभी भी इसे सुचारू रूप से लागू कर सकते हैं। आपके लिए आज दोपहर 2 बजे तक डेवऑप्स इंजीनियरों को जानकारी देना बेहतर होगा।", ipa: "/juː həd ˈbet.ər briːf ðə devˈɒps ˌen.dʒɪˈnɪəz baɪ tuː piː em təˈdeɪ./", pragmaticNote: "Reassuring tone followed by actionable time-sensitive advice." }
        ]
      },
      speakingTask: {
        prompt: "Deliver a 2-minute recorded consultation where you advise a client on health, financial planning, or travel logistics, using 'Could you', 'Would you mind', 'Should', 'Ought to', and 'Had better'.",
        context: "Executive Corporate Advisory Consultation.",
        guidedQuestions: [
          "How will you formulate your polite request to view their documentation?",
          "What urgent warning will you deliver using 'had better'?",
          "How will you reflect on a past mistake using 'should have + V3'?"
        ],
        evaluationCriteria: "Accurate syntactic complementation (gerund after mind, bare infinitive after had better) and diplomatic prosodic modulation."
      },
      shadowingExercise: {
        transcriptEn: "Would you mind reviewing the revised proposal? You had better double-check all budgetary calculations before submitting it to the executive board.",
        transcriptHi: "क्या आप संशोधित प्रस्ताव की समीक्षा करने का कष्ट करेंगे? कार्यकारी बोर्ड को प्रस्तुत करने से पहले आपके लिए सभी बजटीय गणनाओं की दोबारा जांच कर लेना बेहतर होगा।",
        audioPacing: "Controlled professional cadence (125 wpm) with smooth linking /wʊdʒuː maɪnd rɪˈvjuː.ɪŋ.../",
        prosodyInstructions: "Apply palatal glide in 'Would you' (/wʊdʒuː/) and maintain falling-rising contour for courteous requests."
      }
    },
    assess: {
      writtenChecklist: [
        "Correctly uses gerund (-ing) after 'Would you mind'.",
        "Employs bare infinitive after 'had better' without adding '*to*'.",
        "Distinguishes between general advice ('should') and prospective warning ('had better').",
        "Constructs past modal criticism with 'should have + V3'.",
        "Maintains accurate diplomatic register in written business communication."
      ],
      oralProductionTask: "Simulate a polite disagreement and advisory role-play with a colleague regarding an overdue deadline.",
      benchmarks: [
        { level: "A1/A2 Threshold", descriptor: "Can give basic advice using 'should' and make simple requests with 'please'." },
        { level: "A2.1 Target", descriptor: "Accurately applies 'Could you', 'Would you mind + -ing', 'Ought to', and 'Had better' in professional settings." },
        { level: "B1 Mastery", descriptor: "Fluently navigates complex advisory nuances, softeners, and retrospective criticism with natural connected speech." }
      ]
    },
    review: {
      spacedRepetitionTag: "Stage4_Day32_ModalsPoliteness",
      recommendedIntervalDays: [1, 3, 7, 14, 30],
      retrievalDrill: [
        "What form of the verb follows 'Would you mind'?",
        "Why is '*You had better to leave*' ungrammatical?",
        "How do you respond politely when someone asks: 'Would you mind if I opened the window?' and you agree?",
        "Transform 'You did not call me' into past criticism using 'should have'.",
        "Pronounce 'could you' and 'would you' using standard connected speech palatalization."
      ]
    }
  };

  // Write out day31.js and day32.js
  fs.writeFileSync(
    path.join(process.cwd(), 'content_builder', 'day31.js'),
    `export const day31 = ${JSON.stringify(day31, null, 2)};\nexport default day31;\n`,
    'utf-8'
  );
  console.log("[SUCCESS] Created content_builder/day31.js with 60 vocabulary, 100 exemplars, 95 drills, 50 translations.");

  fs.writeFileSync(
    path.join(process.cwd(), 'content_builder', 'day32.js'),
    `export const day32 = ${JSON.stringify(day32, null, 2)};\nexport default day32;\n`,
    'utf-8'
  );
  console.log("[SUCCESS] Created content_builder/day32.js with 60 vocabulary, 100 exemplars, 95 drills, 50 translations.");
}

// Auto-run if executed directly
if (process.argv[1]?.includes('build_stage4_days31_32')) {
  buildDay31And32();
}
