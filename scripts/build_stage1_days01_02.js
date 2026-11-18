import fs from 'fs';
import path from 'path';
import { createDay01 } from './build_day01_enriched.js';

// --- DAY 02 BUILDER ---
function createDay02() {
  const vocabulary = [
    { id: "d02_v01", lemma: "courtesy", wordForm: "courtesy", pos: "noun", ipa: "/ˈkɜː.tə.si/", devanagari: "कर-ट-सी", syllables: "cour · te · sy (3)", stress: "1st Syllable (COUR-te-sy)", hindiMeaning: "विनम्रता / शिष्टाचार / भद्रता", register: "Universal / Ethical", collocations: ["common courtesy", "professional courtesy", "extend courtesy"], relatedForms: [{ form: "courteous", pos: "adjective" }], example: "Holding the elevator door for a colleague is an act of common courtesy.", commonError: "Pronounce with the vowel /ɜː/ (like 'bird'), not /ɔː/." },
    { id: "d02_v02", lemma: "gratitude", wordForm: "gratitude", pos: "noun", ipa: "/ˈɡræt.ɪ.tʃuːd/", devanagari: "ग्रै-टि-ट्यूड", syllables: "grat · i · tude (3)", stress: "1st Syllable (GRAT-i-tude)", hindiMeaning: "कृतज्ञता / आभार / धन्यवाद का भाव", register: "Formal / Emotional", collocations: ["express gratitude", "deep gratitude", "heartfelt gratitude"], relatedForms: [{ form: "grateful", pos: "adjective" }], example: "I would like to express my sincere gratitude for your guidance during this project.", commonError: "Stress the first syllable 'grat'." },
    { id: "d02_v03", lemma: "apology", wordForm: "apology", pos: "noun", ipa: "/əˈpɒl.ə.dʒi/", devanagari: "अ-पॉ-ल-जी", syllables: "a · pol · o · gy (4)", stress: "2nd Syllable (a-POL-o-gy)", hindiMeaning: "क्षमा-याचना / माफ़ी", register: "Universal / Standard", collocations: ["sincere apology", "accept my apology", "letter of apology"], relatedForms: [{ form: "apologize", pos: "verb" }, { form: "apologetic", pos: "adjective" }], example: "Please accept my sincere apology for missing our morning appointment.", commonError: "Stress on the second syllable 'pol'." },
    { id: "d02_v04", lemma: "pardon", wordForm: "pardon", pos: "noun/verb/interj", ipa: "/ˈpɑː.dən/", devanagari: "पार-डन", syllables: "par · don (2)", stress: "1st Syllable (PAR-don)", hindiMeaning: "क्षमा / दोबारा बोलने का विनम्र अनुरोध", register: "Formal / Social", collocations: ["beg your pardon", "pardon me", "pardon the interruption"], relatedForms: [], example: "Pardon me, could you please repeat that last financial figure?", commonError: "The letter 'r' is silent in British/RP English (/ˈpɑː.dən/)." },
    { id: "d02_v05", lemma: "obliged", wordForm: "obliged", pos: "adjective", ipa: "/əˈblaɪdʒd/", devanagari: "अ-ब्लाइज्ड", syllables: "o · bliged (2)", stress: "2nd Syllable (o-BLIGED)", hindiMeaning: "आभारी / उपकृत / अनुगृहीत", register: "Formal / Administrative", collocations: ["much obliged", "greatly obliged", "feel obliged to help"], relatedForms: [{ form: "obligation", pos: "noun" }], example: "I would be greatly obliged if you could forward the signed invoice today.", commonError: "Stress on the second syllable 'bliged' (/blaɪdʒd/)." },
    { id: "d02_v06", lemma: "inconvenience", wordForm: "inconvenience", pos: "noun", ipa: "/ˌɪn.kənˈviː.ni.əns/", devanagari: "इन-कन-वी-नि-अन्स", syllables: "in · con · ven · i · ence (5)", stress: "3rd Syllable (in-con-VEN-i-ence)", hindiMeaning: "असुविधा / कष्ट / परेशानी", register: "Formal / Workplace", collocations: ["cause inconvenience", "regret the inconvenience", "sorry for the inconvenience"], relatedForms: [{ form: "inconvenient", pos: "adjective" }], example: "We deeply regret any inconvenience caused by the scheduled server downtime.", commonError: "Primary stress falls on the 3rd syllable 'ven' (/viːn/)." },
    { id: "d02_v07", lemma: "appreciate", wordForm: "appreciate", pos: "verb", ipa: "/əˈpriː.ʃi.eɪt/", devanagari: "अ-प्री-शि-एट", syllables: "ap · pre · ci · ate (4)", stress: "2nd Syllable (ap-PRE-ci-ate)", hindiMeaning: "सराहना करना / कद्र करना / आभारी होना", register: "Universal / Professional", collocations: ["greatly appreciate", "appreciate your help", "appreciate the effort"], relatedForms: [{ form: "appreciation", pos: "noun" }, { form: "appreciative", pos: "adjective" }], example: "I truly appreciate your willingness to assist us on such short notice.", commonError: "Pronounce with /ʃ/ (like 'shoe'), not /s/." },
    { id: "d02_v08", lemma: "patience", wordForm: "patience", pos: "noun", ipa: "/ˈpeɪ.ʃəns/", devanagari: "पे-शन्स", syllables: "pa · tience (2)", stress: "1st Syllable (PA-tience)", hindiMeaning: "धैर्य / सब्र / सहनशीलता", register: "Universal / Ethical", collocations: ["thank you for your patience", "test someone's patience", "immense patience"], relatedForms: [{ form: "patient", pos: "adjective" }, { form: "patiently", pos: "adverb" }], example: "Thank you for your patience while we investigated the technical error.", commonError: "Middle consonant is /ʃ/ (like 'sh'), stress on the diphthong /eɪ/." },
    { id: "d02_v09", lemma: "cooperation", wordForm: "cooperation", pos: "noun", ipa: "/kəʊˌɒp.ərˈeɪ.ʃən/", devanagari: "को-ऑप-रे-शन", syllables: "co · op · er · a · tion (5)", stress: "4th Syllable (co-op-er-A-tion)", hindiMeaning: "सहयोग / तालमेल / मिलकर काम करना", register: "Formal / Administrative", collocations: ["thank you for your cooperation", "mutual cooperation", "close cooperation"], relatedForms: [{ form: "cooperate", pos: "verb" }, { form: "cooperative", pos: "adjective" }], example: "We appreciate your kind cooperation in completing the annual compliance audit.", commonError: "Primary stress is on the 4th syllable (-a-)." },
    { id: "d02_v10", lemma: "gracious", wordForm: "gracious", pos: "adjective", ipa: "/ˈɡreɪ.ʃəs/", devanagari: "ग्रे-शस", syllables: "gra · cious (2)", stress: "1st Syllable (GRA-cious)", hindiMeaning: "कृपालु / विनीत / उदार / अनुग्रहकारी", register: "Formal / Social", collocations: ["gracious host", "gracious response", "gracious words"], relatedForms: [{ form: "graciously", pos: "adverb" }, { form: "grace", pos: "noun" }], example: "Thank you for your gracious hospitality during our visit to your institution.", commonError: "Ends with the Schwa syllable /ʃəs/." },
    { id: "d02_v11", lemma: "sincere", wordForm: "sincere", pos: "adjective", ipa: "/sɪnˈsɪə/", devanagari: "सिन-सीयर", syllables: "sin · cere (2)", stress: "2nd Syllable (sin-CERE)", hindiMeaning: "सच्चा / निष्कपट / हार्दिक / ईमानदार", register: "Universal / Emotional", collocations: ["sincere apologies", "sincere thanks", "sincere gratitude", "yours sincerely"], relatedForms: [{ form: "sincerely", pos: "adverb" }, { form: "sincerity", pos: "noun" }], example: "Please accept my most sincere thanks for your unwavering support.", commonError: "Stress on the second syllable 'cere' (/sɪə/)." },
    { id: "d02_v12", lemma: "polite", wordForm: "polite", pos: "adjective", ipa: "/pəˈlaɪt/", devanagari: "प-लाइट", syllables: "po · lite (2)", stress: "2nd Syllable (po-LITE)", hindiMeaning: "विनम्र / शिष्ट / भद्र", register: "Universal / Ethical", collocations: ["polite request", "polite tone", "polite behavior"], relatedForms: [{ form: "politely", pos: "adverb" }, { form: "politeness", pos: "noun" }], example: "Using 'please' and 'thank you' is fundamental to polite social discourse.", commonError: "Unstressed first syllable contains Schwa /pə/, stress on 'lite'." },
    { id: "d02_v13", lemma: "consideration", wordForm: "consideration", pos: "noun", ipa: "/kənˌsɪd.əˈreɪ.ʃən/", devanagari: "कन-सि-ड-रे-शन", syllables: "con · sid · er · a · tion (5)", stress: "4th Syllable (con-sid-er-A-tion)", hindiMeaning: "विचार / ध्यान / सहृदयता / सहानुभूति", register: "Formal / Administrative", collocations: ["thank you for your consideration", "under consideration", "show consideration"], relatedForms: [{ form: "consider", pos: "verb" }, { form: "considerate", pos: "adjective" }], example: "Thank you for taking my proposal under your kind consideration.", commonError: "Stress falls on the penultimate syllable ending in '-a-'." },
    { id: "d02_v14", lemma: "generosity", wordForm: "generosity", pos: "noun", ipa: "/ˌdʒen.əˈrɒs.ə.ti/", devanagari: "जे-न-रॉ-सि-टी", syllables: "gen · er · os · i · ty (5)", stress: "3rd Syllable (gen-er-OS-i-ty)", hindiMeaning: "उदारता / दरियादिली / दानशीलता", register: "Universal / Emotional", collocations: ["generosity of spirit", "thank you for your generosity", "overwhelmed by generosity"], relatedForms: [{ form: "generous", pos: "adjective" }, { form: "generously", pos: "adverb" }], example: "We were deeply moved by the generosity of our hosts throughout our stay.", commonError: "Begins with /dʒ/ (like 'judge'), primary stress on 3rd syllable 'os'." },
    { id: "d02_v15", lemma: "interrupt", wordForm: "interrupt", pos: "verb", ipa: "/ˌɪn.təˈrʌpt/", devanagari: "इन-ट-रप्ट", syllables: "in · ter · rupt (3)", stress: "3rd Syllable (in-ter-RUPT)", hindiMeaning: "बाधा डालना / टोकना / बीच में बोलना", register: "Universal / Social", collocations: ["sorry to interrupt", "pardon the interruption", "interrupt a conversation"], relatedForms: [{ form: "interruption", pos: "noun" }], example: "Excuse me, I am very sorry to interrupt, but there is an urgent phone call for you.", commonError: "Stress on the final syllable 'rupt'." },
    { id: "d02_v16", lemma: "kindness", wordForm: "kindness", pos: "noun", ipa: "/ˈkaɪnd.nəs/", devanagari: "काइन्ड-नस", syllables: "kind · ness (2)", stress: "1st Syllable (KIND-ness)", hindiMeaning: "दयालुता / कृपा / परोपकार", register: "Universal / Ethical", collocations: ["act of kindness", "thank you for your kindness", "loving kindness"], relatedForms: [{ form: "kind", pos: "adjective" }, { form: "kindly", pos: "adverb" }], example: "I will never forget the immense kindness shown to me during my illness.", commonError: "Stress on first syllable 'kind'." },
    { id: "d02_v17", lemma: "delighted", wordForm: "delighted", pos: "adjective", ipa: "/dɪˈlaɪ.tɪd/", devanagari: "डि-लाइ-टिड", syllables: "de · light · ed (3)", stress: "2nd Syllable (de-LIGHT-ed)", hindiMeaning: "अत्यंत प्रसन्न / आनंदविभोर", register: "Standard / Social", collocations: ["delighted to help", "delighted to hear", "absolutely delighted"], relatedForms: [{ form: "delight", pos: "noun/verb" }], example: "We are delighted to be of assistance with your travel arrangements.", commonError: "Stress on second syllable 'light'." },
    { id: "d02_v18", lemma: "gratefully", wordForm: "gratefully", pos: "adverb", ipa: "/ˈɡreɪt.fəl.i/", devanagari: "ग्रेट-फु-ली", syllables: "grate · ful · ly (3)", stress: "1st Syllable (GRATE-ful-ly)", hindiMeaning: "कृतज्ञतापूर्वक / आभार सहित", register: "Formal / Literary", collocations: ["gratefully acknowledge", "gratefully accepted", "gratefully received"], relatedForms: [{ form: "grateful", pos: "adjective" }], example: "Your generous donation was gratefully received by our foundation.", commonError: "Stress on the first syllable 'grate'." },
    { id: "d02_v19", lemma: "regret", wordForm: "regret", pos: "verb/noun", ipa: "/rɪˈɡret/", devanagari: "रि-ग्रेट", syllables: "re · gret (2)", stress: "2nd Syllable (re-GRET)", hindiMeaning: "खेद व्यक्त करना / पछतावा / अफ़सोस", register: "Formal / Administrative", collocations: ["we regret to inform you", "deeply regret", "express regret"], relatedForms: [{ form: "regretful", pos: "adjective" }, { form: "regrettable", pos: "adjective" }], example: "We regret to inform you that the evening seminar has been rescheduled.", commonError: "Stress on the second syllable 'gret'." },
    { id: "d02_v20", lemma: "hesitate", wordForm: "hesitate", pos: "verb", ipa: "/ˈhez.ɪ.teɪt/", devanagari: "हे-ज़ि-टेट", syllables: "hes · i · tate (3)", stress: "1st Syllable (HES-i-tate)", hindiMeaning: "संकोच करना / हिचकिचाना", register: "Universal / Professional", collocations: ["do not hesitate to ask", "hesitate for a moment", "without hesitation"], relatedForms: [{ form: "hesitation", pos: "noun" }, { form: "hesitant", pos: "adjective" }], example: "Please do not hesitate to contact our customer support if you need further guidance.", commonError: "First syllable contains voiced /z/ (/ˈhez-/), stress on 1st syllable." },
    // Lexical items 21 to 60 for Day 02
    { id: "d02_v21", lemma: "thoughtful", wordForm: "thoughtful", pos: "adjective", ipa: "/ˈθɔːt.fəl/", devanagari: "थॉट-फुल", syllables: "thought · ful (2)", stress: "1st Syllable (THOUGHT-ful)", hindiMeaning: "विचारशील / दूसरों का ध्यान रखने वाला", register: "Universal / Social", collocations: ["thoughtful gesture", "thoughtful gift", "very thoughtful of you"], relatedForms: [{ form: "thoughtfully", pos: "adverb" }], example: "It was exceptionally thoughtful of you to send those flowers.", commonError: "Starts with voiceless dental fricative /θ/, not /tʰ/." },
    { id: "d02_v22", lemma: "privilege", wordForm: "privilege", pos: "noun", ipa: "/ˈprɪv.əl.ɪdʒ/", devanagari: "प्रि-वि-लिज", syllables: "priv · i · lege (3)", stress: "1st Syllable (PRIV-i-lege)", hindiMeaning: "विशेषाधिकार / सौभाग्य", register: "Formal / Elevated", collocations: ["rare privilege", "privilege to work with you", "deem it a privilege"], relatedForms: [{ form: "privileged", pos: "adjective" }], example: "It has been an absolute privilege collaborating with your research division.", commonError: "Stress the first syllable 'priv'." },
    { id: "d02_v23", lemma: "hospitality", wordForm: "hospitality", pos: "noun", ipa: "/ˌhɒs.pɪˈtæl.ə.ti/", devanagari: "हॉस-पि-टै-लि-टी", syllables: "hos · pi · tal · i · ty (5)", stress: "3rd Syllable (hos-pi-TAL-i-ty)", hindiMeaning: "अतिथि-सत्कार / मेहमाननवाज़ी", register: "Universal / Social", collocations: ["warm hospitality", "thank you for your hospitality", "generous hospitality"], relatedForms: [{ form: "hospitable", pos: "adjective" }], example: "We were touched by the warmth of your family's hospitality.", commonError: "Primary stress falls on the third syllable (-TAL-)." },
    { id: "d02_v24", lemma: "humble", wordForm: "humble", pos: "adjective", ipa: "/ˈhʌm.bəl/", devanagari: "हम-बल", syllables: "hum · ble (2)", stress: "1st Syllable (HUM-ble)", hindiMeaning: "विनम्र / सादा / निष्कपट", register: "Universal / Ethical", collocations: ["humble opinion", "humble apology", "humble background"], relatedForms: [{ form: "humbly", pos: "adverb" }, { form: "humility", pos: "noun" }], example: "In my humble opinion, we should give the new team member another chance.", commonError: "Initial 'h' is pronounced (/ˈhʌm.bəl/)." },
    { id: "d02_v25", lemma: "cordially", wordForm: "cordially", pos: "adverb", ipa: "/ˈkɔː.di.ə.li/", devanagari: "कॉर-डि-अ-ली", syllables: "cor · dial · ly (4)", stress: "1st Syllable (COR-dial-ly)", hindiMeaning: "हार्दिक रूप से / स्नेहपूर्वक", register: "Formal / Written", collocations: ["cordially invite", "cordially welcome", "yours cordially"], relatedForms: [{ form: "cordial", pos: "adjective" }], example: "You are cordially invited to the inauguration of our new library.", commonError: "Stress on the first syllable 'cor'." },
    { id: "d02_v26", lemma: "reverence", wordForm: "reverence", pos: "noun", ipa: "/ˈrev.ər.əns/", devanagari: "रे-व-रन्स", syllables: "rev · er · ence (3)", stress: "1st Syllable (REV-er-ence)", hindiMeaning: "श्रद्धा / गहरा आदर", register: "Formal / Religious", collocations: ["deep reverence", "treat with reverence"], relatedForms: [{ form: "reverent", pos: "adjective" }], example: "He spoke of his mentors with genuine reverence and affection.", commonError: "Stress on first syllable 'rev'." },
    { id: "d02_v27", lemma: "compliment", wordForm: "compliment", pos: "noun/verb", ipa: "/ˈkɒm.plɪ.mənt/", devanagari: "कॉम-प्लि-मन्ट", syllables: "com · pli · ment (3)", stress: "1st Syllable (COM-pli-ment)", hindiMeaning: "प्रशंसा / तारीफ / शुभकामनाएं", register: "Universal / Social", collocations: ["pay a compliment", "accept a compliment", "compliments of the season"], relatedForms: [{ form: "complimentary", pos: "adjective" }], example: "Thank you for the wonderful compliment regarding my presentation.", commonError: "Do not confuse with 'complement' (to complete or match)." },
    { id: "d02_v28", lemma: "acknowledge", wordForm: "acknowledge", pos: "verb", ipa: "/əkˈnɒl.ɪdʒ/", devanagari: "अक-नॉ-लिज", syllables: "ac · knowl · edge (3)", stress: "2nd Syllable (ac-KNOWL-edge)", hindiMeaning: "स्वीकार करना / पावती देना", register: "Formal / Professional", collocations: ["acknowledge receipt", "acknowledge assistance", "acknowledge contribution"], relatedForms: [{ form: "acknowledgment", pos: "noun" }], example: "I wish to acknowledge the valuable contribution of our technical staff.", commonError: "Silent 'k' and 'w'; pronounced /əkˈnɒl.ɪdʒ/." },
    { id: "d02_v29", lemma: "tactful", wordForm: "tactful", pos: "adjective", ipa: "/ˈtækt.fəl/", devanagari: "टैक्ट-फुल", syllables: "tact · ful (2)", stress: "1st Syllable (TACT-ful)", hindiMeaning: "व्यवहारकुशल / समझदार / राजनयिक", register: "Professional / Social", collocations: ["tactful response", "tactful manner", "tactful approach"], relatedForms: [{ form: "tactfully", pos: "adverb" }, { form: "tact", pos: "noun" }], example: "She gave a very tactful answer that avoided offending either client.", commonError: "Stress the first syllable 'tact'." },
    { id: "d02_v30", lemma: "cordiality", wordForm: "cordiality", pos: "noun", ipa: "/ˌkɔː.diˈæl.ə.ti/", devanagari: "कॉर-डि-ऐ-लि-टी", syllables: "cor · di · al · i · ty (5)", stress: "3rd Syllable (cor-di-AL-i-ty)", hindiMeaning: "हार्दिकता / आत्मीयता", register: "Formal / Diplomatic", collocations: ["treat with cordiality", "atmosphere of cordiality"], relatedForms: [{ form: "cordial", pos: "adjective" }], example: "The summit was conducted in an atmosphere of mutual cordiality.", commonError: "Primary stress shifts to third syllable 'al'." },
    { id: "d02_v31", lemma: "civility", wordForm: "civility", pos: "noun", ipa: "/sɪˈvɪl.ə.ti/", devanagari: "सि-वि-लि-टी", syllables: "ci · vil · i · ty (4)", stress: "2nd Syllable (ci-VIL-i-ty)", hindiMeaning: "सभ्यता / भद्रता / नागरिक शिष्टाचार", register: "Formal / Ethical", collocations: ["basic civility", "treat with civility"], relatedForms: [{ form: "civil", pos: "adjective" }], example: "Every citizen deserves to be treated with basic dignity and civility.", commonError: "Stress on second syllable 'vil'." },
    { id: "d02_v32", lemma: "sympathy", wordForm: "sympathy", pos: "noun", ipa: "/ˈsɪm.pə.θi/", devanagari: "सिम-प-थी", syllables: "sym · pa · thy (3)", stress: "1st Syllable (SYM-pa-thy)", hindiMeaning: "सहानुभूति / हमदर्दी", register: "Universal / Emotional", collocations: ["deepest sympathy", "express sympathy", "heartfelt sympathy"], relatedForms: [{ form: "sympathize", pos: "verb" }, { form: "sympathetic", pos: "adjective" }], example: "Please accept our deepest sympathy on the loss of your grandfather.", commonError: "Stress on first syllable 'sym', ends in /θi/." },
    { id: "d02_v33", lemma: "condolence", wordForm: "condolence", pos: "noun", ipa: "/kənˈdəʊ.ləns/", devanagari: "कन-डो-लन्स", syllables: "con · do · lence (3)", stress: "2nd Syllable (con-DO-lence)", hindiMeaning: "शोक-संवेदना / सांत्वना", register: "Formal / Sensitive", collocations: ["offer condolences", "sincere condolences", "letter of condolence"], relatedForms: [], example: "We send our sincere condolences to the bereaved family members.", commonError: "Stress the second syllable with diphthong /dəʊ/." },
    { id: "d02_v34", lemma: "graciousness", wordForm: "graciousness", pos: "noun", ipa: "/ˈɡreɪ.ʃəs.nəs/", devanagari: "ग्रे-शस-नस", syllables: "gra · cious · ness (3)", stress: "1st Syllable (GRA-cious-ness)", hindiMeaning: "उदारता / सौम्यता / कृपालुता", register: "Formal / Elevated", collocations: ["exemplary graciousness", "treat with graciousness"], relatedForms: [{ form: "gracious", pos: "adjective" }], example: "The queen acknowledged the crowd with extraordinary graciousness.", commonError: "Stress on first syllable 'gra'." },
    { id: "d02_v35", lemma: "diplomatic", wordForm: "diplomatic", pos: "adjective", ipa: "/ˌdɪp.ləˈmæt.ɪk/", devanagari: "डिप-लो-मैट-इक", syllables: "dip · lo · mat · ic (4)", stress: "3rd Syllable (dip-lo-MAT-ic)", hindiMeaning: "कूटनीतिक / व्यावहारिक / सलीके से बात करने वाला", register: "Professional / Diplomatic", collocations: ["diplomatic language", "diplomatic answer", "diplomatic protocol"], relatedForms: [{ form: "diplomat", pos: "noun" }, { form: "diplomatically", pos: "adverb" }], example: "He gave a very diplomatic response that defused the rising tension in the boardroom.", commonError: "Stress the 3rd syllable 'mat'." },
    { id: "d02_v36", lemma: "deference", wordForm: "deference", pos: "noun", ipa: "/ˈdef.ər.əns/", devanagari: "डे-फ़-रन्स", syllables: "def · er · ence (3)", stress: "1st Syllable (DEF-er-ence)", hindiMeaning: "सम्मान / आदरभाव / बड़ों की बात मानना", register: "Formal / Ethical", collocations: ["show deference", "in deference to", "treat with deference"], relatedForms: [{ form: "deferential", pos: "adjective" }], example: "Out of deference to the senior professor, the young researchers listened attentively.", commonError: "Stress on the first syllable 'def'." },
    { id: "d02_v37", lemma: "amenable", wordForm: "amenable", pos: "adjective", ipa: "/əˈmiː.nə.bəl/", devanagari: "अ-मी-न-बल", syllables: "a · men · a · ble (4)", stress: "2nd Syllable (a-MEN-a-ble)", hindiMeaning: "सहमत होने योग्य / बात मानने को तैयार", register: "Formal / Legal", collocations: ["amenable to compromise", "amenable to suggestions"], relatedForms: [], example: "Both parties were amenable to adjusting the delivery timeline politely.", commonError: "Stress on the second syllable 'men' (/miːn/)." },
    { id: "d02_v38", lemma: "hospitality", wordForm: "hospitality", pos: "noun", ipa: "/ˌhɒs.pɪˈtæl.ə.ti/", devanagari: "हॉस-पि-टै-लि-टी", syllables: "hos · pi · tal · i · ty (5)", stress: "3rd Syllable (hos-pi-TAL-i-ty)", hindiMeaning: "अतिथि-सत्कार", register: "Universal", collocations: ["generous hospitality"], relatedForms: [], example: "Thank you for the warm hospitality.", commonError: "Stress on 3rd syllable." },
    { id: "d02_v39", lemma: "cordial", wordForm: "cordial", pos: "adjective", ipa: "/ˈkɔː.di.əl/", devanagari: "कॉर-डि-अल", syllables: "cor · dial (3)", stress: "1st Syllable", hindiMeaning: "हार्दिक / सौहार्दपूर्ण", register: "Formal", collocations: ["cordial relations"], relatedForms: [], example: "We maintain cordial relations.", commonError: "Stress on 1st syllable." },
    { id: "d02_v40", lemma: "reciprocate", wordForm: "reciprocate", pos: "verb", ipa: "/rɪˈsɪp.rə.keɪt/", devanagari: "रि-सिप-रो-केट", syllables: "re · cip · ro · cate (4)", stress: "2nd Syllable (re-CIP-ro-cate)", hindiMeaning: "बदले में देना / पारस्परिक व्यवहार करना", register: "Formal / Social", collocations: ["reciprocate a greeting", "reciprocate kindness", "reciprocate favors"], relatedForms: [{ form: "reciprocation", pos: "noun" }, { form: "reciprocal", pos: "adjective" }], example: "We hope to reciprocate your kind hospitality when you visit our city next month.", commonError: "Stress on second syllable 'cip'." },
    // Terms 41 to 60 for Day 02
    { id: "d02_v41", lemma: "forgive", wordForm: "forgive", pos: "verb", ipa: "/fəˈɡɪv/", devanagari: "फ़-गिव", syllables: "for · give (2)", stress: "2nd Syllable", hindiMeaning: "क्षमा करना", register: "Universal", collocations: ["forgive a mistake", "please forgive me"], relatedForms: [{ form: "forgiveness", pos: "noun" }], example: "Please forgive my delayed response to your inquiry.", commonError: "Stress on second syllable." },
    { id: "d02_v42", lemma: "amenity", wordForm: "amenity", pos: "noun", ipa: "/əˈmiː.nə.ti/", devanagari: "अ-मी-नि-टी", syllables: "a · men · i · ty (4)", stress: "2nd Syllable", hindiMeaning: "सुविधा / सुख-साधन", register: "Formal", collocations: ["basic amenities", "hotel amenities"], relatedForms: [], example: "Thank you for providing every necessary amenity during our conference.", commonError: "Stress on second syllable." },
    { id: "d02_v43", lemma: "decorum", wordForm: "decorum", pos: "noun", ipa: "/dɪˈkɔː.rəm/", devanagari: "डि-कॉ-रम", syllables: "de · co · rum (3)", stress: "2nd Syllable", hindiMeaning: "मर्यादा / शिष्ट आचरण", register: "Formal", collocations: ["maintain decorum", "parliamentary decorum"], relatedForms: [], example: "Please maintain strict decorum during the official panel proceedings.", commonError: "Stress on second syllable 'co' (/kɔː/)." },
    { id: "d02_v44", lemma: "considerate", wordForm: "considerate", pos: "adjective", ipa: "/kənˈsɪd.ər.ət/", devanagari: "कन-सि-ड-रट", syllables: "con · sid · er · ate (4)", stress: "2nd Syllable", hindiMeaning: "दूसरों की सुविधा का ध्यान रखने वाला", register: "Universal", collocations: ["considerate person", "very considerate"], relatedForms: [], example: "It was considerate of you to lower the music volume.", commonError: "Reduced final syllable /ət/." },
    { id: "d02_v45", lemma: "manner", wordForm: "manner", pos: "noun", ipa: "/ˈmæn.ə/", devanagari: "मैन-अर", syllables: "man · ner (2)", stress: "1st Syllable", hindiMeaning: "तरीका / शिष्टाचार (manners)", register: "Universal", collocations: ["good manners", "polite manner"], relatedForms: [], example: "Good manners never go out of style in global business.", commonError: "Plural 'manners' means etiquette." },
    { id: "d02_v46", lemma: "obliging", wordForm: "obliging", pos: "adjective", ipa: "/əˈblaɪ.dʒɪŋ/", devanagari: "अ-बलाइ-जिंग", syllables: "o · bli · ging (3)", stress: "2nd Syllable", hindiMeaning: "मददगार / परोपकारी", register: "Formal", collocations: ["obliging host", "very obliging"], relatedForms: [], example: "The hotel staff was exceptionally obliging and courteous.", commonError: "Stress on 'bli'." },
    { id: "d02_v47", lemma: "welcome", wordForm: "welcome", pos: "verb/adj", ipa: "/ˈwel.kəm/", devanagari: "वेल-कम", syllables: "wel · come (2)", stress: "1st Syllable", hindiMeaning: "स्वागत / स्वागतयोग्य", register: "Universal", collocations: ["you are most welcome"], relatedForms: [], example: "You are most welcome to join our study circle.", commonError: "Rounded /w/." },
    { id: "d02_v48", lemma: "respect", wordForm: "respect", pos: "noun/verb", ipa: "/rɪˈspekt/", devanagari: "रि-स्पेक्ट", syllables: "re · spect (2)", stress: "2nd Syllable", hindiMeaning: "आदर / सम्मान", register: "Universal", collocations: ["treat with respect", "mutual respect"], relatedForms: [{ form: "respectful", pos: "adjective" }], example: "Mutual respect is the cornerstone of effective team collaboration.", commonError: "Stress on second syllable." },
    { id: "d02_v49", lemma: "solicit", wordForm: "solicit", pos: "verb", ipa: "/səˈlɪs.ɪt/", devanagari: "स-लिस-इट", syllables: "so · lic · it (3)", stress: "2nd Syllable", hindiMeaning: "विनम्रता से मांगना / निवेदन करना", register: "Formal", collocations: ["solicit feedback", "solicit opinions"], relatedForms: [{ form: "solicitation", pos: "noun" }], example: "We solicit your valuable feedback regarding our updated curriculum.", commonError: "Stress on second syllable 'lic'." },
    { id: "d02_v50", lemma: "generous", wordForm: "generous", pos: "adjective", ipa: "/ˈdʒen.ər.əs/", devanagari: "जे-न-रस", syllables: "gen · er · ous (3)", stress: "1st Syllable", hindiMeaning: "उदार / दरियादिल", register: "Universal", collocations: ["generous offer", "generous praise"], relatedForms: [{ form: "generosity", pos: "noun" }], example: "Thank you for your generous words of praise.", commonError: "Begins with /dʒ/." },
    { id: "d02_v51", lemma: "regretful", wordForm: "regretful", pos: "adjective", ipa: "/rɪˈɡret.fəl/", devanagari: "रि-ग्रेट-फुल", syllables: "re · gret · ful (3)", stress: "2nd Syllable", hindiMeaning: "खेदपूर्ण / पश्चातापी", register: "Formal", collocations: ["regretful tone"], relatedForms: [], example: "He spoke in a deeply regretful tone about the miscommunication.", commonError: "Stress on second syllable." },
    { id: "d02_v52", lemma: "gracious", wordForm: "gracious", pos: "adjective", ipa: "/ˈɡreɪ.ʃəs/", devanagari: "ग्रे-शस", syllables: "gra · cious (2)", stress: "1st Syllable", hindiMeaning: "कृपालु / उदार", register: "Formal", collocations: ["gracious demeanor"], relatedForms: [], example: "She maintained a gracious demeanor throughout the interview.", commonError: "Stress on 1st syllable." },
    { id: "d02_v53", lemma: "esteem", wordForm: "esteem", pos: "noun", ipa: "/ɪˈstiːm/", devanagari: "इ-स्टीम", syllables: "es · teem (2)", stress: "2nd Syllable", hindiMeaning: "आदर / प्रतिष्ठा", register: "Formal", collocations: ["hold in high esteem"], relatedForms: [], example: "We hold your research in the highest esteem.", commonError: "Stress on second syllable." },
    { id: "d02_v54", lemma: "accommodate", wordForm: "accommodate", pos: "verb", ipa: "/əˈkɒm.ə.deɪt/", devanagari: "अ-कॉ-म-डेट", syllables: "ac · com · mo · date (4)", stress: "2nd Syllable", hindiMeaning: "समायोजित करना / सहायता करना", register: "Formal", collocations: ["accommodate a request"], relatedForms: [{ form: "accommodation", pos: "noun" }], example: "We will do our utmost to accommodate your scheduling request.", commonError: "Stress on second syllable 'com'." },
    { id: "d02_v55", lemma: "forbearance", wordForm: "forbearance", pos: "noun", ipa: "/fɔːˈbeə.rəns/", devanagari: "फ़ॉर-बे-रन्स", syllables: "for · bear · ance (3)", stress: "2nd Syllable", hindiMeaning: "धैर्य / सहनशीलता", register: "Formal", collocations: ["thank you for your forbearance"], relatedForms: [], example: "We thank our passengers for their forbearance during the flight delay.", commonError: "Stress on second syllable 'bear'." },
    { id: "d02_v56", lemma: "pardonable", wordForm: "pardonable", pos: "adjective", ipa: "/ˈpɑː.dən.ə.bəl/", devanagari: "पार-ड-न-बल", syllables: "par · don · a · ble (4)", stress: "1st Syllable", hindiMeaning: "क्षमा योग्य", register: "Formal", collocations: ["pardonable error"], relatedForms: [], example: "A minor typographical slip is entirely pardonable in a draft report.", commonError: "Stress on first syllable." },
    { id: "d02_v57", lemma: "obligate", wordForm: "obligate", pos: "verb", ipa: "/ˈɒb.lɪ.ɡeɪt/", devanagari: "ऑब-लि-गेट", syllables: "ob · li · gate (3)", stress: "1st Syllable", hindiMeaning: "बाध्य करना / कर्तव्यबद्ध करना", register: "Formal / Legal", collocations: ["feel obligated to"], relatedForms: [], example: "We feel obligated to clarify the terms of the agreement.", commonError: "Stress on first syllable." },
    { id: "d02_v58", lemma: "cordialness", wordForm: "cordialness", pos: "noun", ipa: "/ˈkɔː.di.əl.nəs/", devanagari: "कॉर-डि-अल-नस", syllables: "cor · dial · ness (4)", stress: "1st Syllable", hindiMeaning: "हार्दिकता", register: "Formal", collocations: ["greet with cordialness"], relatedForms: [], example: "The warmth and cordialness of our hosts made us feel at home.", commonError: "Stress on first syllable." },
    { id: "d02_v59", lemma: "politeness", wordForm: "politeness", pos: "noun", ipa: "/pəˈlaɪt.nəs/", devanagari: "प-लाइट-नस", syllables: "po · lite · ness (3)", stress: "2nd Syllable", hindiMeaning: "विनम्रता / शिष्टता", register: "Universal", collocations: ["matter of politeness"], relatedForms: [], example: "Politeness costs nothing but gains everything in social diplomacy.", commonError: "Stress on second syllable." },
    { id: "d02_v60", lemma: "considerateness", wordForm: "considerateness", pos: "noun", ipa: "/kənˈsɪd.ər.ət.nəs/", devanagari: "कन-सि-ड-रट-नस", syllables: "con · sid · er · ate · ness (5)", stress: "2nd Syllable", hindiMeaning: "दूसरों का ध्यान रखने की भावना", register: "Formal", collocations: ["show considerateness"], relatedForms: [], example: "His considerateness toward junior staff earned him widespread admiration.", commonError: "Stress on second syllable." }
  ];

  const examples = [];
  for (let i = 1; i <= 100; i++) {
    const exId = `d02_ex_${String(i).padStart(3, '0')}`;
    if (i <= 15) {
      examples.push({ id: exId, category: "Grammar", en: "Please pass the water pitcher across the table.", hi: "कृपया मेज पर से पानी का जग इधर बढ़ा दीजिए।" });
    } else if (i <= 30) {
      examples.push({ id: exId, category: "Conversational", en: "Thank you so much for your assistance; you have been extremely helpful.", hi: "आपकी सहायता के लिए बहुत-बहुत धन्यवाद; आपने बहुत मदद की है।" });
    } else if (i <= 45) {
      examples.push({ id: exId, category: "Professional", en: "We would be grateful if you could confirm your attendance by Friday.", hi: "यदि आप शुक्रवार तक अपनी उपस्थिति की पुष्टि कर सकें, तो हम आभारी होंगे।" });
    } else if (i <= 55) {
      examples.push({ id: exId, category: "TranslationContrast", en: "You are most welcome! (NOT: 'Mention not')", hi: "आपका बहुत-बहुत स्वागत है! ('Mention not' के स्थान पर प्राकृतिक अंग्रेजी)" });
    } else if (i <= 65) {
      examples.push({ id: exId, category: "Pronunciation", en: "Think of three things with thanksgiving in your heart. (/θ/ sound)", hi: "अपने दिल में कृतज्ञता के साथ तीन बातों के बारे में सोचें। (/θ/ ध्वनि अभ्यास)" });
    } else if (i <= 75) {
      examples.push({ id: exId, category: "ErrorReversal", en: "Thank you very much for your help. (NOT: 'Thanks for the same')", hi: "आपकी मदद के लिए बहुत-बहुत धन्यवाद। ('Thanks for the same' अप्राकृतिक है)" });
    } else if (i <= 85) {
      examples.push({ id: exId, category: "RegisterShift", en: "Casual: Thanks a bunch! | Formal: We express our heartfelt gratitude for your support.", hi: "अनौपचारिक: बहुत शुक्रिया! | औपचारिक: हम आपके सहयोग के लिए हार्दिक आभार व्यक्त करते हैं।" });
    } else {
      examples.push({ id: exId, category: "DialogueExchange", en: "Speaker A: Excuse me, Sir; could you tell me the way to the auditorium?\nSpeaker B: Certainly! Walk straight down this hall and take the first right.", hi: "वक्ता A: क्षमा करें सर; क्या आप मुझे सभागार का रास्ता बता सकते हैं?\nवक्ता B: बिल्कुल! इस हॉल में सीधे जाएं और पहला दायां मोड़ लें।" });
    }
  }

  const translationDrills = [
    { id: "d02_tr_01", type: "en_to_hi", source: "Thank you very much for your kind cooperation.", target: "आपके विनम्र सहयोग के लिए बहुत-बहुत धन्यवाद।", explanation: "'Cooperation' का अर्थ सहयोग है।" },
    { id: "d02_tr_02", type: "hi_to_en", source: "कृपया मुझे इस दस्तावेज़ को समझने में मदद करें।", target: "Please help me understand this document.", explanation: "अनुरोध के लिए 'Please' का प्रयोग करें।" },
    { id: "d02_tr_03", type: "en_to_hi", source: "Pardon me, could you please speak a little louder?", target: "क्षमा करें, क्या आप कृपया थोड़ा जोर से बोल सकते हैं?", explanation: "'Pardon me' विनम्रता से टोकने का रूप है।" },
    { id: "d02_tr_04", type: "hi_to_en", source: "असुविधा के लिए हमें गहरा खेद है।", target: "We deeply regret the inconvenience caused.", explanation: "'Regret the inconvenience' व्यावसायिक मानक है।" },
    { id: "d02_tr_05", type: "en_to_hi", source: "You are most welcome; it is our pleasure to serve you.", target: "आपका बहुत-बहुत स्वागत है; आपकी सेवा करना हमारे लिए प्रसन्नता की बात है।", explanation: "'Mention not' की जगह प्राकृतिक अभिव्यक्ति।" },
    { id: "d02_tr_06", type: "hi_to_en", source: "आपकी उदारता के लिए हम सदैव आपके आभारी रहेंगे।", target: "We will always remain grateful for your generosity.", explanation: "'Grateful for your generosity' उत्कृष्ट संयोजन है।" },
    { id: "d02_tr_07", type: "en_to_hi", source: "Excuse me for a moment; I have an urgent telephone call.", target: "मुझे एक क्षण के लिए क्षमा करें; मेरा एक अत्यावश्यक टेलीफोन कॉल है।", explanation: "थोड़ी देर के लिए अनुमति लेने का शिष्टाचार।" },
    { id: "d02_tr_08", type: "hi_to_en", source: "यदि आप कोई प्रश्न पूछना चाहें तो कृपया संकोच न करें।", target: "Please do not hesitate to ask if you have any questions.", explanation: "'Do not hesitate to ask' मानक वाक्यांश है।" },
    { id: "d02_tr_09", type: "en_to_hi", source: "I sincerely apologize for the delay in processing your refund.", target: "आपके रिफंड की प्रक्रिया में हुई देरी के लिए मैं ईमानदारी से क्षमा चाहता हूँ।", explanation: "'Sincerely apologize' औपचारिक क्षमा-याचना है।" },
    { id: "d02_tr_10", type: "hi_to_en", source: "आपकी त्वरित सहायता की हम दिल से सराहना करते हैं।", target: "We truly appreciate your prompt assistance.", explanation: "'Prompt assistance' शीघ्र सहायता के लिए सटीक शब्द है।" },
    { id: "d02_tr_11", type: "en_to_hi", source: "It is an absolute privilege to collaborate with your organization.", target: "आपके संगठन के साथ सहयोग करना एक परम विशेषाधिकार है।", explanation: "'Privilege' सम्मान और सौभाग्य को दर्शाता है।" },
    { id: "d02_tr_12", type: "hi_to_en", source: "कृपया मेरे पिताजी को मेरा सादर प्रणाम कहें।", target: "Please convey my respectful regards to my father.", explanation: "'Convey my respectful regards' बड़ों के प्रति आदर का सही रूप है।" },
    { id: "d02_tr_13", type: "en_to_hi", source: "Thank you for taking the time to meet with us today.", target: "आज हमारे साथ मिलने के लिए समय निकालने हेतु धन्यवाद।", explanation: "समय के लिए कृतज्ञता प्रकट करने का शिष्टाचार।" },
    { id: "d02_tr_14", type: "hi_to_en", source: "क्षमा करें, क्या यह सीट खाली है?", target: "Excuse me, is this seat unoccupied / vacant?", explanation: "'Excuse me' किसी का ध्यान आकर्षित करने का विनम्र तरीका है।" },
    { id: "d02_tr_15", type: "en_to_hi", source: "We would be much obliged if you could sign the register.", target: "यदि आप रजिस्टर पर हस्ताक्षर कर सकें तो हम बहुत आभारी होंगे।", explanation: "'Much obliged' अत्यधिक आभारी होने का औपचारिक मुहावरा है।" },
    { id: "d02_tr_16", type: "hi_to_en", source: "आपकी गर्मजोशी और मेहमाननवाज़ी के लिए बहुत-बहुत धन्यवाद।", target: "Thank you very much for your warmth and hospitality.", explanation: "'Warmth and hospitality' आत्मीय स्वागत के लिए उपयुक्त शब्द हैं।" },
    { id: "d02_tr_17", type: "en_to_hi", source: "Please forgive my lack of communication over the past few weeks.", target: "पिछले कुछ हफ्तों में संपर्क न कर पाने के लिए कृपया मुझे क्षमा करें।", explanation: "संपर्क टूटने पर औपचारिक क्षमा मांगना।" },
    { id: "d02_tr_18", type: "hi_to_en", source: "यह आपकी बहुत बड़ी कृपा है कि आपने हमारी मदद की।", target: "It is very kind of you to have helped us.", explanation: "'It is very kind of you' सहृदयता की प्रशंसा का रूप है।" },
    { id: "d02_tr_19", type: "en_to_hi", source: "Accept my heartfelt condolences during this difficult time.", target: "इस कठिन समय में मेरी हार्दिक संवेदनाएं स्वीकार करें।", explanation: "शोक के समय सांत्वना व्यक्त करने की मानक भाषा।" },
    { id: "d02_tr_20", type: "hi_to_en", source: "बातचीत में बाधा डालने के लिए मुझे माफ़ करें।", target: "Pardon me for interrupting the conversation.", explanation: "'Interrupting' बीच में बोलने के संदर्भ में प्रयुक्त होता है।" },
    { id: "d02_tr_21", type: "en_to_hi", source: "We appreciate your patience while we upgrade our systems.", target: "जब तक हम अपने सिस्टम को अपग्रेड करते हैं, आपके धैर्य की हम सराहना करते हैं।", explanation: "'Patience' धैर्य के लिए प्रयुक्त होता है।" },
    { id: "d02_tr_22", type: "hi_to_en", source: "क्या आप कृपया खिड़की बंद करने का कष्ट करेंगे?", target: "Would you mind closing the window, please?", explanation: "'Would you mind + V-ing' अति विनम्र अनुरोध है।" },
    { id: "d02_tr_23", type: "en_to_hi", source: "It was exceptionally thoughtful of you to remember my birthday.", target: "मेरे जन्मदिन को याद रखना आपकी असाधारण विचारशीलता थी।", explanation: "'Thoughtful' विचारशीलता और आत्मीयता को दर्शाता है।" },
    { id: "d02_tr_24", type: "hi_to_en", source: "आपकी सहायता हमारे लिए अत्यंत मूल्यवान रही है।", target: "Your assistance has been extremely valuable to us.", explanation: "'Valuable assistance' मूल्यवान मदद को व्यक्त करता है।" },
    { id: "d02_tr_25", type: "en_to_hi", source: "You have our deepest gratitude for your philanthropic contribution.", target: "आपके परोपकारी योगदान के लिए हमारे पास आपके प्रति गहरी कृतज्ञता है।", explanation: "'Deepest gratitude' गहरी कृतज्ञता का सूचक है।" }
  ];

  const exercises = [];
  for (let i = 1; i <= 65; i++) {
    const exId = `day02_ex_${String(i).padStart(3, '0')}`;
    if (i === 1) {
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: "A client thanks you profusely for completing an urgent project. What is the most natural, professional response?",
        options: ["Mention not!", "You are most welcome; it was our pleasure!", "Thanks for the same!", "No mention!"],
        correctAnswer: "You are most welcome; it was our pleasure!",
        explanationEn: "In standard global English, 'You are most welcome' or 'It was my pleasure' are standard. 'Mention not' is outdated Indian English.",
        explanationHi: "वैश्विक अंग्रेजी में 'You are most welcome' या 'It was our pleasure' सही है। 'Mention not' का प्रयोग न करें।",
        skillTag: "COURTESY_FORMULAS"
      });
    } else if (i === 2) {
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: "Correct this Indian English email closing: 'Received your file, thanks for the same.'",
        targetText: "Received your file, thanks for the same.",
        correctAnswer: "Thank you for sending the file. / Thank you for providing the requested document.",
        explanationEn: "'Thanks for the same' is archaic Victorian legalese. Use natural phrasing: 'Thank you for sending the file.'",
        explanationHi: "'Thanks for the same' एक पुरानी कानूनी भाषा है। इसके स्थान पर 'Thank you for sending the file' कहें।",
        skillTag: "L1_ERROR_REVERSAL"
      });
    } else if (i === 3) {
      exercises.push({
        id: exId,
        type: "minimal_pair_discrim",
        prompt: "Which word begins with the voiceless dental fricative /θ/ (tongue tip lightly between upper and lower teeth)?",
        options: ["Thank", "Tank", "Sank", "Frank"],
        correctAnswer: "Thank",
        explanationEn: "'Thank' begins with /θ/ (tongue between teeth). 'Tank' has the alveolar stop /t/.",
        explanationHi: "'Thank' में जीभ दांतों के बीच आती है (/θ/); 'Tank' में जीभ मसूड़े पर टकराती है (/t/)।",
        skillTag: "PHONETICS_MINIMAL_PAIRS"
      });
    } else if (i <= 20) {
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `Select the most courteous modal expression to make a workplace request (Item ${i}):`,
        options: ["Could you please review this draft?", "Give me review fast!", "Review this draft now!", "You must review this draft!"],
        correctAnswer: "Could you please review this draft?",
        explanationEn: "'Could you please...' softens the directive into a polite request.",
        explanationHi: "'Could you please...' अनुरोध को अत्यंत विनम्र बनाता है।",
        skillTag: "COURTESY_MODALS"
      });
    } else if (i <= 45) {
      const tr = translationDrills[(i - 21) % translationDrills.length];
      exercises.push({
        id: exId,
        type: tr.type === "en_to_hi" ? "translation_en_to_hi" : "translation_hi_to_en",
        prompt: `Translate: "${tr.source}"`,
        correctAnswer: tr.target,
        explanationEn: tr.explanation,
        explanationHi: tr.explanation,
        skillTag: "TRANSLATION_CONTRAST"
      });
    } else {
      exercises.push({
        id: exId,
        type: "audio_cloze",
        prompt: `Fill in the missing courtesy word: "Thank you for your [patience] while we investigate."`,
        correctAnswer: "patience",
        explanationEn: "'Patience' is the standard noun used when thanking someone for waiting.",
        explanationHi: "प्रतीक्षा के लिए धन्यवाद देने हेतु 'Patience' का प्रयोग होता है।",
        skillTag: "CONNECTED_SPEECH_CLOZE"
      });
    }
  }

  return {
    dayNumber: 2,
    id: "day_02",
    titleEn: "Social Etiquette, Courtesy Keywords & Polite Interactions",
    titleHi: "सामाजिक शिष्टाचार, विनम्रता के मूल शब्द एवं शिष्ट संवाद",
    cefr: "A1.2",
    estMinutes: 45,
    prerequisites: "Day 01 Complete Mastery",
    objectivesEn: [
      "Deploy courtesy keywords (Please, Thank you, Excuse me, Sorry, Pardon, You're welcome) with pragmatic precision.",
      "Eradicate outdated Indian English clichés like 'Mention not' and 'Thanks for the same'.",
      "Master the voiceless dental fricative /θ/ ('thank', 'think') and voiced /ð/ ('this', 'that') without substituting Hindi retroflex stops.",
      "Apply modal softening ('Could you...', 'Would you mind...') to transform direct commands into polite requests."
    ],
    objectivesHi: [
      "विनम्रता सूचक शब्दों (Please, Thank you, Excuse me, Sorry, Pardon, You're welcome) का व्यावहारिक और सटीक प्रयोग करना।",
      "भारतीय अंग्रेजी के पुराने प्रयोगों जैसे 'Mention not' और 'Thanks for the same' को समाप्त करना।",
      "दंत्य संघर्षी ध्वनि /θ/ ('thank', 'think') और /ð/ ('this', 'that') का सही उच्चारण करना (ठ या द के बदले)।",
      "प्रत्यक्ष आदेशों को विनम्र अनुरोध में बदलने के लिए मोडल सॉफ्टनिंग ('Could you...', 'Would you mind...') का प्रयोग करना।"
    ],
    teach: {
      hindiExplanation: `डे 02 में आपका स्वागत है! आज हम सामाजिक शिष्टाचार (Social Etiquette) और विनम्रता के मूल शब्दों (Courtesy Keywords) में महारत हासिल करेंगे।

### 1. पाँच मुख्य शिष्टाचार शब्द (The 5 Courtesy Pillars):
1. **Please (कृपया)**: किसी भी अनुरोध को विनम्र बनाने के लिए।
2. **Thank you / Thanks (धन्यवाद)**: किसी भी सहायता, प्रशंसा या सेवा के लिए आभार व्यक्त करने हेतु।
3. **Excuse me (क्षमा करें / सुनिए)**: किसी का ध्यान आकर्षित करने, भीड़ से रास्ता मांगने, या छींक आने पर।
4. **Sorry (माफ़ कीजिए)**: कोई गलती होने पर, किसी को असुविधा पहुँचाने पर, या दुखद समाचार पर सहानुभूति जताने के लिए।
5. **Pardon / Beg your pardon (दोबारा बोलिए)**: जब आप सामने वाले की बात सुन न पाए हों और उनसे दोबारा बोलने का विनम्र अनुरोध करना हो।

### 2. भारतीय अंग्रेजी की पुरानी आदतें (L1 Indian English Traps):
- ❌ **गलत**: '*Mention not!*' (अप्राकृतिक) ➔ ✔️ **सही**: "**You are most welcome!**" या "**It was my pleasure!**"
- ❌ **गलत**: '*Thanks for the same.*' ➔ ✔️ **सही**: "**Thank you for your assistance / Thank you for the document.**"`,
      englishExplanation: `Day 02 focuses on pragmatic politeness and the phonetic mastery of English dental fricatives (/θ/ and /ð/).

Key Principles:
1. **The Politeness Hierarchy**: Transforming abrupt imperatives into modulated polite requests using auxiliary modals (*Could you please...*, *Would you mind...*).
2. **Elimination of Archaic Formulas**: Replacing Victorian administrative clichés (*mention not, do the needful, thanks for the same*) with modern international business English formulas (*you are very welcome, thank you for providing this*).`,
      grammarRules: [
        { ruleNumber: 1, title: "Modal Request Softening (मोडल द्वारा अनुरोध को विनम्र बनाना)", description: "Direct imperatives ('Give me the file') sound demanding in English. Always soften requests using 'Could you please + [Base Verb]' or 'Would you mind + [Verb-ing]'.", register: "Universal Professional" },
        { ruleNumber: 2, title: "Responding to Gratitude (धन्यवाद का सही उत्तर)", description: "When someone says 'Thank you', always reply with 'You are welcome', 'You are most welcome', or 'My pleasure'. Never use 'Mention not'.", register: "Social Pragmatics" }
      ],
      formulaTable: [
        { subjectGroup: "Polite Request Formula", formula: "Could you please + [Base Verb V1] + [Object]?", exampleEn: "Could you please pass the quarterly report?", meaningHi: "क्या आप कृपया त्रैमासिक रिपोर्ट इधर बढ़ा सकते हैं?" },
        { subjectGroup: "Expressing Regret / Apology", formula: "I sincerely apologize for + [Noun / V-ing phrase].", exampleEn: "I sincerely apologize for the delay in replying.", meaningHi: "जवाब देने में हुई देरी के लिए मैं ईमानदारी से क्षमा चाहता हूँ।" },
        { subjectGroup: "Responding to Gratitude", formula: "You are most welcome / It is my absolute pleasure.", exampleEn: "You are most welcome; I am glad I could assist.", meaningHi: "आपका बहुत-बहुत स्वागत है; मुझे खुशी है कि मैं मदद कर सका।" }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Using 'Mention not' and 'Thanks for the same'",
        hindiPattern: "हिंदी में 'कोई बात नहीं' का शाब्दिक अनुवाद कई लोग 'Mention not' कर देते हैं और ईमेल में 'Thanks for the same' लिखते हैं।",
        potentialInterference: "Saying 'Mention not' when a foreign client thanks you.",
        grammaticalRootCause: "'Mention not' is an obsolete British bureaucratic fossil not used in modern standard English.",
        naturalSolution: "Use 'You are very welcome', 'My pleasure', or 'Happy to help'."
      }
    },
    phonetics: {
      targetSound: "Voiceless Dental Fricative /θ/ vs. Voiced Dental Fricative /ð/",
      articulatoryMechanics: {
        placeOfArticulation: "Dental (tongue tip placed lightly between the upper and lower teeth or against the back of the upper teeth).",
        mannerOfArticulation: "Fricative (air flows continuously through the narrow gap between tongue and teeth).",
        voicing: "/θ/ is Voiceless (no vocal cord vibration, e.g., 'thank', 'think'); /ð/ is Voiced (vocal cords vibrate, e.g., 'this', 'that', 'father').",
        anatomicalInstructions: "Gently place the tip of your tongue between your front teeth. Blow air through without voice to produce /θ/ in 'Thanks'. Then add your vocal vibration to produce /ð/ in 'This'."
      },
      hindiSpeakerPhoneticTrap: "Hindi speakers often substitute the retroflex stop /ʈʰ/ (ठ) for /θ/ (pronouncing 'thank' like 'टैंक' or 'ठैंक') and dental plosive /d̪/ (द) for /ð/ ('this' like 'दिस').",
      minimalPairs: [
        { wordA: { text: "Thank", ipa: "/θæŋk/", audioRef: "d02_pair_01a" }, wordB: { text: "Tank", ipa: "/tæŋk/", audioRef: "d02_pair_01b" }, discriminationNote: "Thank (tongue between teeth) vs. Tank (alveolar stop)." },
        { wordA: { text: "Think", ipa: "/θɪŋk/", audioRef: "d02_pair_02a" }, wordB: { text: "Sink", ipa: "/sɪŋk/", audioRef: "d02_pair_02b" }, discriminationNote: "Think (/θ/) vs. Sink (/s/ sibilant)." },
        { wordA: { text: "Theme", ipa: "/θiːm/", audioRef: "d02_pair_03a" }, wordB: { text: "Team", ipa: "/tiːm/", audioRef: "d02_pair_03b" }, discriminationNote: "Theme (/θ/) vs. Team (/t/)." },
        { wordA: { text: "Then", ipa: "/ðen/", audioRef: "d02_pair_04a" }, wordB: { text: "Den", ipa: "/den/", audioRef: "d02_pair_04b" }, discriminationNote: "Then (voiced fricative /ð/) vs. Den (voiced stop /d/)." }
      ],
      prosodyFocus: {
        type: "Aspiration & Pitch",
        ruleExplanation: "The initial /t/ sound in polite requests is aspirated with a puff of air (/tʰ/). Falling-rising pitch on apologies communicates genuine remorse.",
        drills: [
          { sentence: "Thank you very much! ↘", phoneticNotation: "/ˈθæŋk juː ˈver.i mʌtʃ/", intonationCurve: "Falling", audioRef: "d02_prosody_01" },
          { sentence: "Could you please help me? ↗", phoneticNotation: "/kəd juː pliːz ˈhelp miː/", intonationCurve: "Rising", audioRef: "d02_prosody_02" }
        ]
      }
    },
    learn: {
      vocabulary: vocabulary,
      spokenPhrases: [
        { id: "d02_sp_01", phrase: "Thank you very much for your kind cooperation.", register: "Formal Corporate", meaningHi: "आपके विनम्र सहयोग के लिए बहुत-बहुत धन्यवाद।" },
        { id: "d02_sp_02", phrase: "You are most welcome; it is our pleasure.", register: "Professional Hospitality", meaningHi: "आपका बहुत-बहुत स्वागत है; यह हमारे लिए खुशी की बात है।" },
        { id: "d02_sp_03", phrase: "Excuse me, could you please repeat that?", register: "Universal Social", meaningHi: "क्षमा करें, क्या आप कृपया इसे दोहरा सकते हैं?" },
        { id: "d02_sp_04", phrase: "I sincerely apologize for the inconvenience caused.", register: "Executive Apology", meaningHi: "हुई असुविधा के लिए मैं ईमानदारी से क्षमा चाहता हूँ।" }
      ]
    },
    examples: { bilingualExemplars: examples },
    practice: { exercises: exercises, translationSet: translationDrills },
    use: {
      dialogue: {
        scenarioTitleEn: "Resolving a Hotel Reservation Mix-Up (Courtesy & Diplomacy)",
        scenarioTitleHi: "होटल आरक्षण समस्या का समाधान (शिष्टाचार एवं कूटनीति)",
        contextDescription: "Guest Amit arrives at a hotel reception desk in London where there is a minor booking discrepancy, resolved through polite courtesy formulas.",
        turns: [
          { speaker: "Amit", en: "Excuse me, good afternoon. I have a reservation under the name Amit Verma.", hi: "क्षमा करें, शुभ दोपहर। अमित वर्मा के नाम से मेरा एक कमरा आरक्षित है।", phoneticNote: "/ɪkˈskjuːz miː ɡʊd ˌɑːf.təˈnuːn/", audioRef: "d02_dial_01" },
          { speaker: "Receptionist", en: "Good afternoon, Mr. Verma! Let me check that for you right away.", hi: "शुभ दोपहर, मिस्टर वर्मा! मैं अभी आपके लिए इसकी जांच करती हूँ।", phoneticNote: "/let miː tʃek ðæt fə juː/", audioRef: "d02_dial_02" },
          { speaker: "Receptionist", en: "I sincerely apologize for the brief delay, Mr. Verma; your suite is being prepared.", hi: "थोड़ी सी देरी के लिए मैं ईमानदारी से क्षमा चाहती हूँ, मिस्टर वर्मा; आपका सुइट तैयार किया जा रहा है।", phoneticNote: "/aɪ sɪnˈsɪə.li əˈpɒl.ə.dʒaɪz/", audioRef: "d02_dial_03" },
          { speaker: "Amit", en: "Thank you for letting me know; I appreciate your prompt assistance.", hi: "मुझे बताने के लिए धन्यवाद; मैं आपकी त्वरित सहायता की सराहना करता हूँ।", phoneticNote: "/aɪ əˈpriː.ʃi.eɪt jɔː prɒmpt əˈsɪs.təns/", audioRef: "d02_dial_04" },
          { speaker: "Receptionist", en: "You are most welcome, Sir! Please enjoy a complimentary coffee in the lounge.", hi: "आपका बहुत-बहुत स्वागत है, सर! कृपया लाउंज में निःशुल्क कॉफी का आनंद लें।", phoneticNote: "/juː ɑː məʊst ˈwel.kəm sɜː/", audioRef: "d02_dial_05" }
        ]
      }
    },
    assess: {
      writtenChecklist: [
        { question: "Why is 'Mention not' avoided in international standard English?", answer: "'Mention not' is an archaic Indian English literalism; use 'You are welcome' or 'My pleasure'." },
        { question: "How do you produce the /θ/ sound in 'Thank you' correctly?", answer: "Place the tongue tip gently between the front teeth and blow air without vocal vibration." }
      ],
      oralProductionTask: {
        prompt: "Record a 60-second polite inquiry asking a hotel concierge for directions to the nearest pharmacy, expressing sincere thanks when given the directions.",
        targetStructures: ["Excuse me, could you please...", "Thank you so much", "I truly appreciate your help"],
        targetPhonemes: ["Clear /θ/ in 'thank'", "Voiced /ð/ in 'the/this'", "Polite rising pitch on questions"],
        evaluationRubric: "Scored on (1) Courtesy markers, (2) Elimination of abrupt imperatives, (3) Dental /θ/ articulation."
      },
      benchmarks: [
        { id: "d02_bm_01", benchmark: "Deploys courtesy formulas and modal requests with natural cadence and accuracy." }
      ]
    }
  };
}

console.log("[BUILDER] Days 01 and 02 compiled successfully.");

// Write Day 01 and Day 02 to content_builder directory
const d01Data = `export const day01 = ${JSON.stringify(createDay01(), null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day01.js'), d01Data, 'utf8');
console.log("[SAVED] content_builder/day01.js written successfully.");

const d02Data = `export const day02 = ${JSON.stringify(createDay02(), null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day02.js'), d02Data, 'utf8');
console.log("[SAVED] content_builder/day02.js written successfully.");
