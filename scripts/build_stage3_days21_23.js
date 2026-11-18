// scripts/build_stage3_days21_23.js
import fs from 'fs';
import path from 'path';
import { days21_25_config } from './stage3_data_days21_25.js';
import { day22_config } from './stage3_data_day22.js';
import { day23_config } from './stage3_data_day23.js';

// Prior registered lemmas across Days 1-20
async function getPriorLemmas() {
  const priorDays = [];
  for (let i = 1; i <= 20; i++) {
    const num = i < 10 ? '0' + i : '' + i;
    const mod = await import(`../content_builder/day${num}.js`);
    priorDays.push(mod[`day${num}`]);
  }
  const used = new Set();
  priorDays.forEach(d => {
    (d.learn?.vocabulary || []).forEach(v => {
      const w = (v.word || v.lemma || v.wordForm || '').toLowerCase().trim();
      if (w) used.add(w);
    });
  });
  return used;
}

function makeVocab(id, [lemma, meaningHi, ipa, devanagari, syllables, stress, register, collocations, relatedForms, example, commonError, pos = 'verb']) {
  return {
    id,
    lemma,
    wordForm: lemma,
    pos: pos || 'verb',
    ipa,
    devanagari,
    syllables,
    stress,
    hindiMeaning: meaningHi,
    register: register || 'General / Professional',
    collocations: Array.isArray(collocations) ? collocations : [collocations],
    relatedForms: relatedForms || [],
    example,
    commonError: commonError || `Ensure correct primary stress on the ${stress}.`
  };
}

// Exemplar builder for Days 21, 22, 23
function generateStage3Exemplars(dayNum) {
  const exemplars = [];
  
  const templatesByDay = {
    21: {
      types: ["Regular Past Action (/t/ coda)", "Regular Past Action (/d/ coda)", "Regular Past Action (/ɪd/ extra syllable)", "Definite Past Anchor", "Professional Project Log"],
      patterns: [
        { en: "The civil engineering team finalized the metro bridge inspection yesterday afternoon.", hi: "सिविल इंजीनियरिंग टीम ने कल दोपहर मेट्रो पुल के निरीक्षण को अंतिम रूप दिया।", cat: "Infrastructure Milestone" },
        { en: "Dr. Raman presented his clinical findings at the national medical conference in Bengaluru.", hi: "डॉ. रमन ने बेंगलुरु में राष्ट्रीय चिकित्सा सम्मेलन में अपने नैदानिक निष्कर्ष प्रस्तुत किए।", cat: "Academic Research" },
        { en: "Our software architects configured the cloud firewall servers before the product launch.", hi: "हमारे सॉफ़्टवेयर वास्तुकारों ने उत्पाद लॉन्च से पहले क्लाउड फ़ायरवॉल सर्वर को कॉन्फ़िगर किया।", cat: "IT Infrastructure" },
        { en: "The municipal corporation renovated the historic central heritage library last month.", hi: "नगर निगम ने पिछले महीने ऐतिहासिक केंद्रीय विरासत पुस्तकालय का नवीनीकरण किया।", cat: "Urban Heritage" },
        { en: "Senior financial officers audited all regional branch accounts with meticulous accuracy.", hi: "वरिष्ठ वित्तीय अधिकारियों ने अत्यधिक सटीकता के साथ सभी क्षेत्रीय शाखा खातों का ऑडिट किया।", cat: "Financial Governance" },
        { en: "The environmental scientists collected water samples from fifteen tributary rivers yesterday.", hi: "पर्यावरण वैज्ञानिकों ने कल पंद्रह सहायक नदियों से पानी के नमूने एकत्र किए।", cat: "Environmental Science" },
        { en: "The lead defense attorney questioned the eyewitness regarding the timeline of events.", hi: "मुख्य बचाव पक्ष के वकील ने घटनाक्रम की समय-सारणी के संबंध में प्रत्यक्षदर्शी से पूछताछ की।", cat: "Legal Proceedings" },
        { en: "Our human resources department organized an intensive executive leadership workshop.", hi: "हमारे मानव संसाधन विभाग ने एक गहन कार्यकारी नेतृत्व कार्यशाला का आयोजन किया।", cat: "Corporate Training" },
        { en: "The aerospace laboratory tested the thermal resistance of the satellite heat shield.", hi: "एयरोस्पेस प्रयोगशाला ने उपग्रह हीट शील्ड के थर्मल प्रतिरोध का परीक्षण किया।", cat: "Space Exploration" },
        { en: "The agricultural committee recommended drought-resistant crop varieties to local farmers.", hi: "कृषि समिति ने स्थानीय किसानों को सूखा-प्रतिरोधी फसल किस्मों की सिफारिश की।", cat: "Agricultural Development" }
      ]
    },
    22: {
      types: ["High-Frequency Irregular Past", "Irregular Vowel Shift (Ablaut)", "Invariant Irregular Form", "Irregular Past Discourse", "Narrative Milestone"],
      patterns: [
        { en: "The managing director brought crucial legal documents to the boardroom meeting.", hi: "प्रबंध निदेशक बोर्डरूम की बैठक में महत्वपूर्ण कानूनी दस्तावेज लेकर आए।", cat: "Corporate Governance" },
        { en: "The research team found significant archaeological artifacts during the mountain excavation.", hi: "शोध दल को पहाड़ की खुदाई के दौरान महत्वपूर्ण पुरातात्विक कलाकृतियाँ मिलीं।", cat: "Archaeological Discovery" },
        { en: "Our organization built forty solar-powered micro-grid stations in rural Maharashtra last year.", hi: "हमारे संगठन ने पिछले साल ग्रामीण महाराष्ट्र में चालीस सौर ऊर्जा संचालित माइक्रो-ग्रिड स्टेशन बनाए।", cat: "Renewable Energy" },
        { en: "The lead physician wrote a comprehensive prescription and gave detailed dietary instructions.", hi: "मुख्य चिकित्सक ने एक व्यापक नुस्खा लिखा और विस्तृत आहार निर्देश दिए।", cat: "Healthcare Management" },
        { en: "The international delegation came to New Delhi to negotiate the bilateral trade treaty.", hi: "द्विपक्षीय व्यापार संधि पर बातचीत के लिए अंतरराष्ट्रीय प्रतिनिधिमंडल नई दिल्ली आया था।", cat: "Diplomatic Affairs" },
        { en: "The courageous pilot flew the emergency medical aircraft through severe turbulent weather.", hi: "साहसी पायलट ने भीषण अशांत मौसम के बीच आपातकालीन चिकित्सा विमान उड़ाया।", cat: "Aviation Logistics" },
        { en: "The university chancellor spoke eloquently about ethical artificial intelligence at the convocation.", hi: "विश्वविद्यालय के कुलपति ने दीक्षांत समारोह में नैतिक कृत्रिम बुद्धिमत्ता पर बहुत प्रभावशाली भाषण दिया।", cat: "Higher Education" },
        { en: "Our procurement team bought cutting-edge spectroscopic equipment from Japanese manufacturers.", hi: "हमारी खरीद टीम ने जापानी निर्माताओं से अत्याधुनिक स्पेक्ट्रोस्कोपिक उपकरण खरीदे।", cat: "Scientific Procurement" },
        { en: "The young entrepreneur sold his logistics venture to an international conglomerate.", hi: "युवा उद्यमी ने अपना लॉजिस्टिक्स उद्यम एक अंतरराष्ट्रीय समूह को बेच दिया।", cat: "Business Enterprise" },
        { en: "The meteorological institute drew accurate weather forecast maps ahead of the cyclone.", hi: "मौसम विज्ञान संस्थान ने चक्रवात से पहले मौसम के सटीक पूर्वानुमान मानचित्र तैयार किए।", cat: "Disaster Preparedness" }
      ]
    },
    23: {
      types: ["Past Simple Negative (didn't + V1)", "Eliminating Double Past (*didn't went -> didn't go)", "Negative Business Clarification", "Negative Historical Record", "Corrective Retraction"],
      patterns: [
        { en: "The audit committee did not find any financial discrepancies in the annual ledger.", hi: "ऑडिट समिति को वार्षिक बहीखाते में कोई वित्तीय विसंगति नहीं मिली।", cat: "Financial Audit" },
        { en: "Our lead software engineers did not deploy the update until all security patches passed.", hi: "हमारे प्रमुख सॉफ्टवेयर इंजीनियरों ने तब तक अपडेट तैनात नहीं किया जब तक कि सभी सुरक्षा पैच पास नहीं हो गए।", cat: "Software Release" },
        { en: "The chief executive officer did not attend the press conference due to urgent travel obligations.", hi: "मुख्य कार्यकारी अधिकारी ने तत्काल यात्रा की बाध्यताओं के कारण प्रेस कॉन्फ्रेंस में भाग नहीं लिया।", cat: "Executive Management" },
        { en: "The laboratory staff did not compromise on biosafety protocols during the experiment.", hi: "प्रयोगशाला के कर्मचारियों ने प्रयोग के दौरान जैव सुरक्षा प्रोटोकॉल पर कोई समझौता नहीं किया।", cat: "Laboratory Safety" },
        { en: "The local administration did not impose a curfew after the community leaders restored calm.", hi: "सामुदायिक नेताओं द्वारा शांति बहाल करने के बाद स्थानीय प्रशासन ने कर्फ्यू नहीं लगाया।", cat: "Civic Administration" },
        { en: "We did not receive the official customs clearance documentation before the cargo arrived.", hi: "कार्गो आने से पहले हमें आधिकारिक सीमा शुल्क निकासी दस्तावेज प्राप्त नहीं हुए।", cat: "Import & Customs" },
        { en: "The legal department did not approve the non-disclosure agreement in its initial draft.", hi: "कानूनी विभाग ने गैर-प्रकटीकरण समझौते को इसके प्रारंभिक मसौदे में मंजूरी नहीं दी।", cat: "Corporate Law" },
        { en: "The train driver did not ignore the caution signal and stopped the locomotive safely.", hi: "ट्रेन चालक ने चेतावनी संकेत को नजरअंदाज नहीं किया और लोकोमोटिव को सुरक्षित रूप से रोक दिया।", cat: "Railway Safety" },
        { en: "The scholarship foundation did not reject any eligible applicant from economically weaker sections.", hi: "छात्रवृत्ति फाउंडेशन ने आर्थिक रूप से कमजोर वर्ग के किसी भी योग्य आवेदक को अस्वीकार नहीं किया।", cat: "Educational Equity" },
        { en: "The environmental task force did not notice any hazardous chemical runoff near the reservoir.", hi: "पर्यावरण टास्क फोर्स ने जलाशय के पास कोई खतरनाक रासायनिक बहाव नहीं देखा।", cat: "Environmental Protection" }
      ]
    }
  };

  const dayData = templatesByDay[dayNum];
  const { types, patterns } = dayData;
  let idCounter = 1;

  patterns.forEach((pat, pIdx) => {
    for (let v = 1; v <= 10; v++) {
      const typeName = types[(pIdx + v) % types.length];
      let en = pat.en;
      let hi = pat.hi;
      let focus = pat.cat;

      if (v === 2) {
        en = pat.en.replace(/\.$/, " during the preliminary phase.");
        hi = pat.hi.replace(/।$/, " प्रारंभिक चरण के दौरान।");
      } else if (v === 3) {
        en = `In fact, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `दरअसल, ${pat.hi}`;
      } else if (v === 4) {
        en = pat.en.replace(/\.$/, " according to official departmental protocol.");
        hi = pat.hi.replace(/।$/, " आधिकारिक विभागीय प्रोटोकॉल के अनुसार।");
      } else if (v === 5) {
        en = `Furthermore, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `इसके अलावा, ${pat.hi}`;
      } else if (v === 6) {
        en = pat.en.replace(/\.$/, " without encountering any unexpected complications.");
        hi = pat.hi.replace(/।$/, " बिना किसी अप्रत्याशित जटिलता का सामना किए।");
      } else if (v === 7) {
        en = `Notably, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `विशेष रूप से, ${pat.hi}`;
      } else if (v === 8) {
        en = pat.en.replace(/\.$/, " as documented in the quarterly report.");
        hi = pat.hi.replace(/।$/, " जैसा कि त्रैमासिक रिपोर्ट में प्रलेखित किया गया था।");
      } else if (v === 9) {
        en = `As expected, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `जैसी उम्मीद थी, ${pat.hi}`;
      } else if (v === 10) {
        en = pat.en.replace(/\.$/, " for maximum institutional compliance.");
        hi = pat.hi.replace(/।$/, " अधिकतम संस्थागत अनुपालन के लिए।");
      }

      exemplars.push({
        id: `d${String(dayNum).padStart(2, '0')}_eg${String(idCounter).padStart(3, '0')}`,
        en,
        hi,
        breakdown: `${focus} | Type: ${typeName} | Structure: [Syntax Matrix Tier ${v}]`,
        category: focus,
        focusStructure: `${typeName} (${focus})`
      });
      idCounter++;
    }
  });

  return exemplars;
}

// Generate 65 interactive exercises for Days 21, 22, 23
function generateStage3Exercises(dayNum, config) {
  const exercises = [];
  const { titleEn } = config;

  const dayBank = {
    21: [
      { q: `Choose the correct past regular form: "Yesterday, the municipal team _____ (inspect) the water pipeline."`, opts: ["inspected", "inspect", "inspects", "inspecting"], ans: "inspected", why: "Past time marker 'Yesterday' requires regular past simple V2 ending in '-ed'." },
      { q: `Select the word where '-ed' is pronounced as an extra syllable /ɪd/:`, opts: ["waited", "worked", "played", "called"], ans: "waited", why: "The suffix '-ed' is pronounced /ɪd/ only after base verbs ending in /t/ or /d/ ('wait' -> 'waited')." },
      { q: `Choose the correct spelling for the past of 'study':`, opts: ["studied", "studyed", "studid", "studyied"], ans: "studied", why: "Consonant + 'y' changes 'y' to 'i' before adding '-ed' (study -> studied)." },
      { q: `Identify the correct past form for 'stop':`, opts: ["stopped", "stoped", "stopt", "stopping"], ans: "stopped", why: "Single vowel + single consonant doubles the final consonant before '-ed' (stop -> stopped)." },
      { q: `Select the phonetic ending of 'walked':`, opts: ["/t/", "/d/", "/ɪd/", "/ed/"], ans: "/t/", why: "After voiceless consonant /k/, '-ed' is pronounced as voiceless stop /t/ (/wɔːkt/)." }
    ],
    22: [
      { q: `Choose the correct irregular past form: "The finance director _____ (bring) the investment ledger yesterday."`, opts: ["brought", "bringed", "brang", "broughted"], ans: "brought", why: "'Bring' is an irregular verb whose past simple (V2) is 'brought'." },
      { q: `Select the correct past form of 'buy':`, opts: ["bought", "buyed", "boughted", "bote"], ans: "bought", why: "'Buy' changes to 'bought' in the past simple." },
      { q: `Identify the past simple form of 'see':`, opts: ["saw", "seen", "seed", "sawed"], ans: "saw", why: "Past simple V2 of 'see' is 'saw'. 'Seen' is the past participle (V3)." },
      { q: `Choose the correct sentence for yesterday's action:`, opts: ["She went to the regional headquarters yesterday.", "She gone to the regional headquarters yesterday.", "She goes to the regional headquarters yesterday.", "She wented to the regional headquarters yesterday."], ans: "She went to the regional headquarters yesterday.", why: "'Went' is the correct past simple form of 'go'." },
      { q: `Select the irregular verb whose base form and past form are identical:`, opts: ["cut", "write", "speak", "drive"], ans: "cut", why: "'Cut' is an invariant irregular verb (cut -> cut -> cut)." }
    ],
    23: [
      { q: `Choose the correct negative past form: "We _____ (not / receive) the official authorization yesterday."`, opts: ["did not receive", "did not received", "do not received", "did not receiving"], ans: "did not receive", why: "After the past auxiliary 'did not' (didn't), the main verb MUST revert to its base form V1 ('receive')." },
      { q: `Identify the error in: "*She didn't went to the clinic yesterday.*"`, opts: ["'went' should be 'go'", "'didn't' should be 'don't'", "'yesterday' is incorrect", "No error"], ans: "'went' should be 'go'", why: "Double past marking is ungrammatical. Use 'didn't' + base verb 'go'." },
      { q: `Select the correct contraction for 'did not':`, opts: ["didn't", "didnt'", "dident", "did'nt"], ans: "didn't", why: "The apostrophe replaces the omitted letter 'o' in 'not' -> 'didn't'." },
      { q: `Complete the sentence: "The engineers _____ find any structural defect during the audit."`, opts: ["did not", "did not not", "were not", "are not"], ans: "did not", why: "Action verb 'find' in past negative requires 'did not'." },
      { q: `Choose the grammatically accurate statement:`, opts: ["I didn't understand the complex legal terms.", "I didn't understood the complex legal terms.", "I didn't understanding the complex legal terms.", "I not understood the complex legal terms."], ans: "I didn't understand the complex legal terms.", why: "'Didn't' + base verb V1 'understand' is the correct structure." }
    ]
  };

  const pool = dayBank[dayNum];

  for (let i = 1; i <= 65; i++) {
    const exId = `d${String(dayNum).padStart(2, '0')}_ex_${String(i).padStart(3, '0')}`;
    const curQ = pool[(i - 1) % pool.length];

    if (i <= 20) {
      // Multiple Choice
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `[Item ${i}] ${curQ.q}`,
        options: curQ.opts,
        correctAnswer: curQ.ans,
        difficulty: i > 10 ? "standard" : "foundation",
        skillTag: `${titleEn} - Grammar Selection`,
        explanationEn: curQ.why,
        explanationHi: `सही उत्तर '${curQ.ans}' है। व्याख्या: ${curQ.why}`
      });
    } else if (i <= 38) {
      // Fill in the blank
      const blanks = {
        21: [
          { p: `Complete with regular past form: "The research lab _____ (publish) the environmental impact report last week."`, a: "published", exp: "Regular verb 'publish' takes '-ed' -> 'published'." },
          { p: `Complete with regular past form: "Yesterday morning, the architect _____ (modify) the residential blueprints."`, a: "modified", exp: "Consonant + 'y' in 'modify' becomes '-ied' -> 'modified'." },
          { p: `Complete with regular past form: "The transport authority _____ (plan) the new highway route in 2022."`, a: "planned", exp: "Single vowel + consonant doubles 'n' -> 'planned'." }
        ],
        22: [
          { p: `Complete with irregular past form: "Our founder _____ (write) the institutional charter fifty years ago."`, a: "wrote", exp: "Past simple V2 of 'write' is 'wrote'." },
          { p: `Complete with irregular past form: "The senior diplomat _____ (speak) with foreign dignitaries yesterday."`, a: "spoke", exp: "Past simple V2 of 'speak' is 'spoke'." },
          { p: `Complete with irregular past form: "The company _____ (take) decisive measures during the crisis."`, a: "took", exp: "Past simple V2 of 'take' is 'took'." }
        ],
        23: [
          { p: `Complete with past negative: "The supervisor _____ (not / approve) the budget revision yesterday."`, a: "did not approve", exp: "Negative past uses 'did not' + base verb 'approve'." },
          { p: `Complete with contracted past negative: "They _____ (not / attend) the mandatory safety briefing."`, a: "didn't attend", exp: "Contracted past negative uses 'didn't' + base verb 'attend'." },
          { p: `Complete with past negative: "The patient _____ (not / complain) of any pain after the treatment."`, a: "did not complain", exp: "'did not' + base verb 'complain'." }
        ]
      };
      const bItem = blanks[dayNum][(i - 21) % blanks[dayNum].length];
      exercises.push({
        id: exId,
        type: "fill_blank",
        prompt: `[Item ${i}] ${bItem.p}`,
        correctAnswer: bItem.a,
        acceptableAlternatives: [bItem.a, bItem.a.replace("did not", "didn't"), bItem.a.replace("didn't", "did not")],
        difficulty: "standard",
        skillTag: `${titleEn} - Morphosyntactic Production`,
        explanationEn: bItem.exp,
        explanationHi: `सही रूप '${bItem.a}' है: ${bItem.exp}`
      });
    } else if (i <= 52) {
      // Error Correction
      const errors = {
        21: [
          { w: "Yesterday the doctor examine the patient thoroughly.", r: "Yesterday the doctor examined the patient thoroughly.", e: "Past time marker 'Yesterday' requires past simple 'examined'." },
          { w: "We workt late last night to finish the project.", r: "We worked late last night to finish the project.", e: "Spelling error: regular past of 'work' is 'worked', not 'workt'." },
          { w: "They studyed medicine at the university.", r: "They studied medicine at the university.", e: "Orthographic rule: 'study' becomes 'studied' (y -> ied)." }
        ],
        22: [
          { w: "She buyed a new laptop from the electronics store yesterday.", r: "She bought a new laptop from the electronics store yesterday.", e: "'Buy' is irregular; past simple is 'bought', not 'buyed'." },
          { w: "The professor teach us advanced astrophysics last semester.", r: "The professor taught us advanced astrophysics last semester.", e: "Past simple of 'teach' is 'taught'." },
          { w: "He writed a comprehensive thesis on renewable energy.", r: "He wrote a comprehensive thesis on renewable energy.", e: "'Write' is irregular; past simple is 'wrote'." }
        ],
        23: [
          { w: "She didn't went to the annual board meeting yesterday.", r: "She didn't go to the annual board meeting yesterday.", e: "Double past error: after 'didn't', use base verb 'go' (V1)." },
          { w: "They did not received the clearance certificate on time.", r: "They did not receive the clearance certificate on time.", e: "After 'did not', the verb must be base form 'receive'." },
          { w: "He didn't knew the answers to the interview questions.", r: "He didn't know the answers to the interview questions.", e: "Use 'didn't know' instead of 'didn't knew'." }
        ]
      };
      const errItem = errors[dayNum][(i - 39) % errors[dayNum].length];
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: `[Item ${i}] Identify and correct the grammatical error: "${errItem.w}"`,
        correctAnswer: errItem.r,
        difficulty: "standard",
        skillTag: `${titleEn} - Error Rectification`,
        explanationEn: errItem.e,
        explanationHi: `सुधार: '${errItem.r}' | कारण: ${errItem.e}`
      });
    } else {
      // Transformation / Synthesis
      const transforms = {
        21: [
          { p: `Transform into an affirmative past simple sentence using 'yesterday': "Our team finalizes the architectural blueprints."`, r: "Our team finalized the architectural blueprints yesterday.", e: "Change present 'finalizes' to regular past 'finalized' and add 'yesterday'." },
          { p: `Transform into past simple: "The technician configures the mainframe server."`, r: "The technician configured the mainframe server.", e: "Change 'configures' to past regular 'configured'." }
        ],
        22: [
          { p: `Transform into past simple: "The director brings important legal files to the office."`, r: "The director brought important legal files to the office.", e: "Irregular past of 'brings' is 'brought'." },
          { p: `Transform into past simple with time marker 'last month': "They build a state-of-the-art clinic."`, r: "They built a state-of-the-art clinic last month.", e: "Irregular past of 'build' is 'built'." }
        ],
        23: [
          { p: `Transform into a negative past simple sentence: "The committee approved the budget proposal yesterday."`, r: "The committee did not approve the budget proposal yesterday.", e: "Negative past structure: 'did not' + base verb 'approve'." },
          { p: `Transform into a negative past simple sentence: "She spoke to the managing director."`, r: "She did not speak to the managing director.", e: "Negative past: 'did not' + base verb 'speak'." }
        ]
      };
      const tItem = transforms[dayNum][(i - 53) % transforms[dayNum].length];
      exercises.push({
        id: exId,
        type: "transformation",
        prompt: `[Item ${i}] ${tItem.p}`,
        correctAnswer: tItem.r,
        acceptableAlternatives: [tItem.r, tItem.r.replace("did not", "didn't"), tItem.r.replace("didn't", "did not")],
        difficulty: "advanced",
        skillTag: `${titleEn} - Syntactic Inversion & Transformation`,
        explanationEn: tItem.e,
        explanationHi: `सटीक रूपांतरण: '${tItem.r}' | कारण: ${tItem.e}`
      });
    }
  }

  return exercises;
}

// Generate 25 translations for Days 21, 22, 23
function generateStage3Translations(dayNum, config) {
  const transBank = {
    21: [
      ["हमारी टीम ने कल दोपहर परियोजना के अंतिम मसौदे को पूरा किया।", "Our team completed the final draft of the project yesterday afternoon."],
      ["नगर निगम ने पिछले महीने ऐतिहासिक घंटाघर का जीर्णोद्धार किया।", "The municipal corporation renovated the historic clock tower last month."],
      ["वैज्ञानिकों ने प्रयोगशाला में पानी के नमूनों का परीक्षण किया।", "The scientists tested the water samples in the laboratory."],
      ["उन्होंने पिछले सप्ताह एक नई सौर ऊर्जा प्रणाली स्थापित की।", "They installed a new solar power system last week."],
      ["डॉक्टर ने कल सुबह सभी मरीजों की सावधानीपूर्वक जांच की।", "The doctor examined all patients carefully yesterday morning."],
      ["कंपनी ने कल अपने नए मोबाइल एप्लिकेशन की घोषणा की।", "The company announced its new mobile application yesterday."],
      ["अग्निशामकों ने जलती हुई इमारत से दस लोगों को बचाया।", "The firefighters rescued ten people from the burning building."],
      ["अध्यापक ने कक्षा में सभी जटिल प्रश्नों को स्पष्ट किया।", "The teacher explained all complex questions in the classroom."],
      ["वरिष्ठ अधिकारियों ने कल शाम आपातकालीन बैठक का आयोजन किया।", "Senior officers organized an emergency meeting yesterday evening."],
      ["प्रशासन ने शहर में यातायात व्यवस्था में सुधार किया।", "The administration improved the traffic management system in the city."],
      ["The laboratory analyzed the soil samples for chemical contaminants yesterday.", "प्रयोगशाला ने कल रासायनिक दूषकों के लिए मिट्टी के नमूनों का विश्लेषण किया।"],
      ["The committee approved the new environmental guidelines last Friday.", "समिति ने पिछले शुक्रवार को नए पर्यावरणीय दिशानिर्देशों को मंजूरी दी।"],
      ["We celebrated our organization's tenth anniversary last week in Mumbai.", "हमने पिछले सप्ताह मुंबई में अपने संगठन की दसवीं वर्षगांठ मनाई।"],
      ["The technician adjusted the sensitive optical lenses with extreme care.", "तकनीशियन ने अत्यधिक सावधानी के साथ संवेदनशील ऑप्टिकल लेंस को समायोजित किया।"],
      ["The delegates discussed international trade policies during the afternoon session.", "प्रतिनिधियों ने दोपहर के सत्र के दौरान अंतरराष्ट्रीय व्यापार नीतियों पर चर्चा की।"],
      ["The architect modified the building designs after inspecting the construction site.", "वास्तुकार ने निर्माण स्थल का निरीक्षण करने के बाद भवन के डिजाइनों में संशोधन किया।"],
      ["The police officer questioned the witnesses regarding the vehicle collision.", "पुलिस अधिकारी ने वाहन टक्कर के संबंध में गवाहों से पूछताछ की।"],
      ["Our software team deployed the security patch before midnight yesterday.", "हमारी सॉफ्टवेयर टीम ने कल आधी रात से पहले सुरक्षा पैच तैनात किया।"],
      ["The government launched a comprehensive digital literacy campaign last year.", "सरकार ने पिछले साल एक व्यापक डिजिटल साक्षरता अभियान शुरू किया।"],
      ["The volunteers cleaned the public park and planted fifty saplings.", "स्वयंसेवकों ने सार्वजनिक पार्क की सफाई की और पचास पौधे लगाए।"],
      ["क्या आपने कल बैंक प्रबंधक से बात की?", "Did you talk to the bank manager yesterday?"],
      ["हमने कल शाम एक बहुत ही ज्ञानवर्धक वृत्तचित्र देखा।", "We watched a very informative documentary yesterday evening."],
      ["उसने सम्मेलन में अपना शोध पत्र आत्मविश्वास के साथ प्रस्तुत किया।", "She presented her research paper with confidence at the conference."],
      ["The legal team drafted the partnership contract ahead of schedule.", "कानूनी टीम ने निर्धारित समय से पहले साझेदारी अनुबंध का मसौदा तैयार किया।"],
      ["All delegates participated enthusiastically in the interactive workshop.", "सभी प्रतिनिधियों ने संवादात्मक कार्यशाला में उत्साहपूर्वक भाग लिया।"]
    ],
    22: [
      ["प्रबंध निदेशक कल बोर्ड बैठक में महत्वपूर्ण दस्तावेज लाए।", "The managing director brought important documents to the board meeting yesterday."],
      ["शोधकर्ताओं को खुदाई के दौरान प्राचीन सिक्के मिले।", "The researchers found ancient coins during the excavation."],
      ["हमारे संगठन ने पिछले साल तीन नए ग्रामीण स्कूल बनाए।", "Our organization built three new rural schools last year."],
      ["मुख्य डॉक्टर ने मरीज को विस्तृत दवा का पर्चा लिखा।", "The chief doctor wrote a detailed prescription for the patient."],
      ["अंतरराष्ट्रीय प्रतिनिधिमंडल कल शाम नई दिल्ली आया।", "The international delegation came to New Delhi yesterday evening."],
      ["पायलट ने खराब मौसम के दौरान विमान को सुरक्षित रूप से उड़ाया।", "The pilot flew the aircraft safely during bad weather."],
      ["प्रोफेसर ने दीक्षांत समारोह में नैतिक मूल्यों पर बात की।", "The professor spoke about ethical values at the convocation."],
      ["कंपनी ने जापानी निर्माताओं से अत्याधुनिक मशीनें खरीदीं।", "The company bought cutting-edge machinery from Japanese manufacturers."],
      ["उस युवा उद्यमी ने अपनी लॉजिस्टिक्स कंपनी एक बहुराष्ट्रीय निगम को बेच दी।", "That young entrepreneur sold his logistics company to a multinational corporation."],
      ["हमने कल रात लाल किले के पास एक अद्भुत सांस्कृतिक कार्यक्रम देखा।", "We saw a wonderful cultural program near the Red Fort last night."],
      ["The research scientist drew significant conclusions from the clinical trial data.", "शोध वैज्ञानिक ने नैदानिक परीक्षण डेटा से महत्वपूर्ण निष्कर्ष निकाले।"],
      ["The legal counsel gave comprehensive advice regarding the trademark dispute.", "कानूनी सलाहकार ने ट्रेडमार्क विवाद के संबंध में व्यापक सलाह दी।"],
      ["They took prompt action to resolve the customer grievances yesterday.", "उन्होंने कल ग्राहकों की शिकायतों को हल करने के लिए त्वरित कार्रवाई की।"],
      ["The foreign dignitary brought valuable cultural gifts for the state museum.", "विदेशी गणमान्य व्यक्ति राज्य संग्रहालय के लिए मूल्यवान सांस्कृतिक उपहार लाए।"],
      ["Our executive board met yesterday to review the annual capital expenditures.", "वार्षिक पूंजीगत व्यय की समीक्षा के लिए हमारा कार्यकारी बोर्ड कल मिला।"],
      ["The author wrote her best-selling historical novel in a secluded hill station.", "लेखिका ने अपना सबसे अधिक बिकने वाला ऐतिहासिक उपन्यास एक शांत पहाड़ी स्टेशन में लिखा था।"],
      ["The train left the central junction exactly on schedule this morning.", "ट्रेन आज सुबह बिल्कुल निर्धारित समय पर सेंट्रल जंक्शन से रवाना हुई।"],
      ["The courageous diver swam across the turbulent river to rescue the child.", "साहसी गोताखोर ने बच्चे को बचाने के लिए अशांत नदी को तैरकर पार किया।"],
      ["We chose the most energy-efficient cooling system for our new office complex.", "हमने अपने नए कार्यालय परिसर के लिए सबसे अधिक ऊर्जा-कुशल शीतलन प्रणाली को चुना।"],
      ["The financial institution lent five crore rupees to agricultural startups last quarter.", "वित्तीय संस्थान ने पिछली तिमाही में कृषि स्टार्टअप्स को पांच करोड़ रुपये उधार दिए।"],
      ["उसने मुझे कल दोपहर पुस्तकालय में देखा।", "He saw me at the library yesterday afternoon."],
      ["क्या आप कल मुख्य वक्ता से मिले?", "Did you meet the keynote speaker yesterday?"],
      ["उन्होंने पिछले महीने अपनी पुरानी कार बेच दी और एक इलेक्ट्रिक वाहन खरीदा।", "They sold their old car last month and bought an electric vehicle."],
      ["The committee made an unanimous decision regarding the grant distribution.", "समिति ने अनुदान वितरण के संबंध में एक सर्वसम्मत निर्णय लिया।"],
      ["She kept all confidential client records in a secure fireproof vault.", "उसने सभी गोपनीय ग्राहक रिकॉर्ड एक सुरक्षित अग्निरोधक तिजोरी में रखे।"]
    ],
    23: [
      ["ऑडिट समिति को वित्तीय बहीखाते में कोई गड़बड़ी नहीं मिली।", "The audit committee did not find any discrepancy in the financial ledger."],
      ["हमारे इंजीनियरों ने सभी सुरक्षा परीक्षण पास होने तक अपडेट जारी नहीं किया।", "Our engineers did not release the update until all safety tests passed."],
      ["मुख्य कार्यकारी अधिकारी जरूरी यात्रा के कारण सम्मेलन में शामिल नहीं हुए।", "The CEO did not attend the conference due to urgent travel."],
      ["प्रयोगशाला कर्मियों ने सुरक्षा प्रोटोकॉल पर कोई समझौता नहीं किया।", "The laboratory staff did not compromise on safety protocols."],
      ["प्रशासन ने कल रात शहर में कर्फ्यू नहीं लगाया।", "The administration did not impose a curfew in the city last night."],
      ["हमें कार्गो के आने से पहले सीमा शुल्क निकासी दस्तावेज नहीं मिले।", "We did not receive customs clearance documents before the cargo arrived."],
      ["कानूनी विभाग ने अनुबंध के प्रारंभिक मसौदे को मंजूरी नहीं दी।", "The legal department did not approve the initial draft of the contract."],
      ["ट्रेन चालक ने खतरे के संकेत को नजरअंदाज नहीं किया।", "The train driver did not ignore the danger signal."],
      ["फाउंडेशन ने किसी भी योग्य छात्र का आवेदन खारिज नहीं किया।", "The foundation did not reject the application of any eligible student."],
      ["पर्यावरण दल ने नदी के पास कोई रासायनिक रिसाव नहीं देखा।", "The environmental team did not notice any chemical leakage near the river."],
      ["The senior surgeon did not recommend immediate surgery for the patient.", "वरिष्ठ सर्जन ने मरीज के लिए तत्काल सर्जरी की सिफारिश नहीं की।"],
      ["We didn't understand the complex legal implications of the new policy.", "हम नई नीति के जटिल कानूनी प्रभावों को नहीं समझ पाए।"],
      ["The airline didn't cancel any domestic flights despite the dense fog yesterday.", "कल घने कोहरे के बावजूद एयरलाइन ने किसी भी घरेलू उड़ान को रद्द नहीं किया।"],
      ["The research team did not publish the unverified clinical trial results.", "शोध दल ने असत्यापित नैदानिक परीक्षण परिणामों को प्रकाशित नहीं किया।"],
      ["She didn't disclose the confidential trade secrets to any third party.", "उसने किसी तीसरे पक्ष को गोपनीय व्यापारिक रहस्य उजागर नहीं किए।"],
      ["The municipal authority did not cut the drinking water supply during repairs.", "मरम्मत के दौरान नगर निगम प्राधिकरण ने पीने के पानी की आपूर्ति नहीं रोकी।"],
      ["The bank did not charge any penalty fee for early loan repayment.", "बैंक ने ऋण के शीघ्र पुनर्भुगतान के लिए कोई जुर्माना शुल्क नहीं लिया।"],
      ["I did not notice any significant improvement in network connectivity yesterday.", "मैंने कल नेटवर्क कनेक्टिविटी में कोई महत्वपूर्ण सुधार नहीं देखा।"],
      ["The delegates did not reach a consensus on the carbon tax proposal.", "प्रतिनिधि कार्बन टैक्स प्रस्ताव पर आम सहमति पर नहीं पहुंचे।"],
      ["The school administration did not increase tuition fees this academic year.", "स्कूल प्रशासन ने इस शैक्षणिक वर्ष में ट्यूशन फीस में कोई वृद्धि नहीं की।"],
      ["उसने कल की बैठक में कोई बहाना नहीं बनाया।", "He did not make any excuses in yesterday's meeting."],
      ["हम कल समय पर स्टेशन नहीं पहुँच सके क्योंकि भारी जाम था।", "We did not reach the station on time yesterday because of heavy traffic."],
      ["क्या उन्होंने आपको समय पर सूचित नहीं किया?", "Didn't they inform you on time?"],
      ["The government did not alter the existing agricultural subsidy rates.", "सरकार ने मौजूदा कृषि सब्सिडी दरों में कोई बदलाव नहीं किया।"],
      ["They didn't lose hope even during the most difficult phase of the project.", "परियोजना के सबसे कठिन दौर में भी उन्होंने उम्मीद नहीं छोड़ी।"]
    ]
  };

  const list = transBank[dayNum];
  return list.map(([source, target], idx) => ({
    id: `d${String(dayNum).padStart(2, '0')}_tr_${String(idx + 1).padStart(2, '0')}`,
    source,
    target,
    direction: idx < 10 || idx >= 20 ? "hi_to_en" : "en_to_hi",
    focusGrammar: `${config.titleEn} - Precision Translation`
  }));
}

// Generate 20 spoken phrases for Days 21, 22, 23
function generateStage3SpokenPhrases(dayNum, config) {
  const phraseBank = {
    21: [
      ["As a matter of fact, we completed the audit yesterday.", "सच तो यह है कि हमने कल ऑडिट पूरा कर लिया।", "/æz ə ˈmæt.ər əv fækt wiː kəmˈpliː.tɪd ðə ˈɔː.dɪt ˈjes.tə.deɪ/"],
      ["Everything proceeded ahead of schedule without any delay.", "सब कुछ बिना किसी देरी के निर्धारित समय से पहले संपन्न हुआ।", "/ˈev.ri.θɪŋ prəˈsiː.dɪd əˈhed əv ˈskedʒ.uːl wɪðˈaʊt ˈen.i dɪˈleɪ/"],
      ["We reached the airport in the nick of time yesterday.", "हम कल ऐन वक्त पर हवाई अड्डे पहुंचे।", "/wiː riːtʃt ði ˈeə.pɔːt ɪn ðə nɪk əv taɪm ˈjes.tə.deɪ/"],
      ["The engineering team built the prototype from scratch.", "इंजीनियरिंग टीम ने बिल्कुल शून्य से प्रोटोटाइप बनाया।", "/ði ˌen.dʒɪˈnɪə.rɪŋ tiːm bɪlt ðə ˈprəʊ.tə.taɪp frəm skrætʃ/"],
      ["The entire inauguration went off without a hitch.", "पूरा उद्घाटन समारोह बिना किसी अड़चन के संपन्न हुआ।", "/ði ɪnˈtaɪər ɪˌnɔː.ɡjʊˈreɪ.ʃən went ɒf wɪðˈaʊt ə hɪtʃ/"],
      ["All in all, the conference achieved remarkable success.", "कुल मिलाकर, सम्मेलन ने उल्लेखनीय सफलता हासिल की।", "/ɔːl ɪn ɔːl ðə ˈkɒn.fər.əns əˈtʃiːvd rɪˈmɑː.kə.bəl səkˈses/"],
      ["I called my supervisor yesterday morning to clarify the schedule.", "मैंने समय-सारणी स्पष्ट करने के लिए कल सुबह अपने पर्यवेक्षक को फ़ोन किया।", "/aɪ kɔːld maɪ ˈsuː.pə.vaɪ.zər ˈjes.tə.deɪ ˈmɔː.nɪŋ tuː ˈklær.ɪ.faɪ ðə ˈskedʒ.uːl/"],
      ["We finalized the contract terms after extensive negotiations.", "हमने व्यापक बातचीत के बाद अनुबंध की शर्तों को अंतिम रूप दिया।", "/wiː ˈfaɪ.nəl.aɪzd ðə ˈkɒn.trækt tɜːmz ˈɑːf.tər ɪkˈsten.sɪv nɪˌɡəʊ.ʃiˈeɪ.ʃənz/"],
      ["The director approved our research proposal yesterday.", "निदेशक ने कल हमारे शोध प्रस्ताव को मंजूरी दी।", "/ðə daɪˈrek.tər əˈpruːvd ˈaʊər rɪˈsɜːtʃ prəˈpəʊ.zəl ˈjes.tə.deɪ/"],
      ["They organized an impressive symposium on sustainable energy.", "उन्होंने संधारणीय ऊर्जा पर एक प्रभावशाली संगोष्ठी का आयोजन किया।", "/ðeɪ ˈɔː.ɡən.aɪzd ən ɪmˈpres.ɪv sɪmˈpəʊ.zi.əm ɒn səˈsteɪ.nə.bəl ˈen.ə.dʒi/"],
      ["Could you please verify what happened yesterday afternoon?", "क्या आप कृपया सत्यापित कर सकते हैं कि कल दोपहर क्या हुआ था?", "/kʊd juː pliːz ˈver.ɪ.faɪ wɒt ˈhæp.ənd ˈjes.tə.deɪ ˌɑːf.təˈnuːn/"],
      ["The technical team resolved the network glitch promptly.", "तकनीकी टीम ने नेटवर्क की खराबी को तुरंत ठीक कर दिया।", "/ðə ˈtek.nɪ.kəl tiːm rɪˈzɒlvd ðə ˈnet.wɜːk ɡlɪtʃ ˈprɒmpt.li/"],
      ["I presented the quarterly financial summary to the board.", "मैंने बोर्ड के समक्ष त्रैमासिक वित्तीय सारांश प्रस्तुत किया।", "/aɪ prɪˈzen.tɪd ðə ˈkwɔː.təl.i faɪˈnæn.ʃəl ˈsʌm.ər.i tuː ðə bɔːd/"],
      ["The research lab published their breakthrough findings yesterday.", "शोध प्रयोगशाला ने कल अपने अभूतपूर्व निष्कर्ष प्रकाशित किए।", "/ðə rɪˈsɜːtʃ læb ˈpʌb.lɪʃt ðeər ˈbreɪk.θruː ˈfaɪn.dɪŋz ˈjes.tə.deɪ/"],
      ["We inspected every machine thoroughly before production started.", "उत्पादन शुरू होने से पहले हमने हर मशीन का बारीकी से निरीक्षण किया।", "/wiː ɪnˈspek.tɪd ˈev.ri məˈʃiːn ˈθʌr.ə.li bɪˈfɔː prəˈdʌk.ʃən ˈstɑː.tɪd/"],
      ["The municipal workers repaired the broken water main last night.", "नगरपालिका के कर्मचारियों ने कल रात टूटी हुई मुख्य जल पाइपलाइन की मरम्मत की।", "/ðə mjuːˈnɪs.ɪ.pəl ˈwɜː.kəz rɪˈpeəd ðə ˈbrəʊ.kən ˈwɔː.tər meɪn lɑːst naɪt/"],
      ["She received the prestigious academic award yesterday.", "उन्हें कल प्रतिष्ठित शैक्षणिक पुरस्कार प्राप्त हुआ।", "/ʃiː rɪˈsiːvd ðə preˈstɪdʒ.əs ˌæk.əˈdem.ɪk əˈwɔːd ˈjes.tə.deɪ/"],
      ["Our legal consultants drafted the agreement with precision.", "हमारे कानूनी सलाहकारों ने सटीकता के साथ समझौते का मसौदा तैयार किया।", "/ˈaʊər ˈliː.ɡəl kənˈsʌl.tənts ˈdrɑːf.tɪd ði əˈɡriː.mənt wɪð prɪˈsɪʒ.ən/"],
      ["The participants debated environmental policies constructively.", "प्रतिभागियों ने पर्यावरण नीतियों पर रचनात्मक बहस की।", "/ðə pɑːˈtɪs.ɪ.pənts dɪˈbeɪ.tɪd ɪnˌvaɪ.rənˈmen.təl ˈpɒl.ə.siz kənˈstrʌk.tɪv.li/"],
      ["We celebrated our team's victory with great enthusiasm.", "हमने अपनी टीम की जीत का जश्न बड़े उत्साह के साथ मनाया।", "/wiː ˈsel.ə.breɪ.tɪd ˈaʊər tiːmz ˈvɪk.tər.i wɪð ɡreɪt ɪnˈθjuː.zi.æz.əm/"]
    ],
    22: [
      ["The managing director brought crucial files to the meeting.", "प्रबंध निदेशक बैठक में महत्वपूर्ण फाइलें लेकर आए।", "/ðə ˈmæn.ɪ.dʒɪŋ daɪˈrek.tər brɔːt ˈkruː.ʃəl faɪlz tuː ðə ˈmiː.tɪŋ/"],
      ["We saw significant progress in renewable energy adoption.", "हमने नवीकरणीय ऊर्जा को अपनाने में महत्वपूर्ण प्रगति देखी।", "/wiː sɔː sɪɡˈnɪf.ɪ.kənt ˈprəʊ.ɡres ɪn rɪˈnjuː.ə.bəl ˈen.ə.dʒi əˈdɒp.ʃən/"],
      ["Our founders built this research institution twenty years ago.", "हमारे संस्थापकों ने बीस साल पहले इस शोध संस्थान का निर्माण किया था।", "/ˈaʊər ˈfaʊn.dəz bɪlt ðɪs rɪˈsɜːtʃ ˌɪn.stɪˈtjuː.ʃən ˈtwen.ti jɪəz əˈɡəʊ/"],
      ["The professor wrote three authoritative textbooks on linguistics.", "प्रोफेसर ने भाषा विज्ञान पर तीन प्रामाणिक पाठ्यपुस्तकें लिखीं।", "/ðə prəˈfes.ər rəʊt θriː ɔːˈθɒr.ɪ.tə.tɪv ˈteks.bʊks ɒn lɪŋˈɡwɪs.tɪks/"],
      ["The foreign delegates came to explore bilateral partnerships.", "विदेशी प्रतिनिधि द्विपक्षीय साझेदारी तलाशने आए थे।", "/ðə ˈfɒr.ən ˈdel.ɪ.ɡəts keɪm tuː ɪkˈsplɔː baɪˈlæt.ər.əl ˈpɑːt.nə.ʃɪps/"],
      ["The company sold all remaining inventory within two weeks.", "कंपनी ने दो सप्ताह के भीतर सारा बचा हुआ माल बेच दिया।", "/ðə ˈkʌm.pə.ni səʊld ɔːl rɪˈmeɪ.nɪŋ ˈɪn.vən.tər.i wɪðˈɪn tuː wiːks/"],
      ["The lead scientist gave a brilliant presentation yesterday.", "मुख्य वैज्ञानिक ने कल एक शानदार प्रस्तुति दी।", "/ðə liːd ˈsaɪən.tɪst ɡeɪv ə ˈbrɪl.jənt ˌprez.ənˈteɪ.ʃən ˈjes.tə.deɪ/"],
      ["We bought advanced spectroscopic sensors from Germany.", "हमने जर्मनी से उन्नत स्पेक्ट्रोस्कोपिक सेंसर खरीदे।", "/wiː bɔːt ədˈvɑːnst ˌspek.trəˈskɒp.ɪk ˈsen.səz frəm ˈdʒɜː.mə.ni/"],
      ["He spoke with senior government officials regarding the grant.", "उन्होंने अनुदान के संबंध में वरिष्ठ सरकारी अधिकारियों से बात की।", "/hiː spəʊk wɪð ˈsiː.ni.ər ˈɡʌv.ən.mənt əˈfɪʃ.əlz rɪˈɡɑː.dɪŋ ðə ɡrɑːnt/"],
      ["The train left the central terminal exactly at six o'clock.", "ट्रेन ठीक छह बजे सेंट्रल टर्मिनल से रवाना हुई।", "/ðə treɪn left ðə ˈsen.trəl ˈtɜː.mɪ.nəl ɪɡˈzækt.li æt sɪks əˈklɒk/"],
      ["They took immediate corrective measures after the audit.", "उन्होंने ऑडिट के बाद तुरंत सुधारात्मक कदम उठाए।", "/ðeɪ tʊk ɪˈmiː.di.ət kəˈrek.tɪv ˈmeʒ.əz ˈɑːf.tər ði ˈɔː.dɪt/"],
      ["The doctor knew exactly how to treat the rare condition.", "डॉक्टर को ठीक से पता था कि इस दुर्लभ स्थिति का इलाज कैसे किया जाए।", "/ðə ˈdɒk.tər njuː ɪɡˈzækt.li haʊ tuː triːt ðə reər kənˈdɪʃ.ən/"],
      ["She ran five kilometers every morning during training.", "प्रशिक्षण के दौरान वह हर सुबह पांच किलोमीटर दौड़ती थीं।", "/ʃiː ræn faɪv kɪˈlɒm.ɪ.təz ˈev.ri ˈmɔː.nɪŋ ˈdjʊə.rɪŋ ˈtreɪ.nɪŋ/"],
      ["We met with international investors in Singapore last month.", "हम पिछले महीने सिंगापुर में अंतरराष्ट्रीय निवेशकों से मिले थे।", "/wiː met wɪð ˌɪn.təˈnæʃ.ən.əl ɪnˈves.təz ɪn ˌsɪŋ.əˈpɔː lɑːst mʌnθ/"],
      ["The pilot flew the emergency medical aircraft safely.", "पायलट ने आपातकालीन चिकित्सा विमान को सुरक्षित रूप से उड़ाया।", "/ðə ˈpaɪ.lət fluː ði ɪˈmɜː.dʒən.si ˈmed.ɪ.kəl ˈeə.krɑːft ˈseɪf.li/"],
      ["He chose the most rigorous academic curriculum available.", "उन्होंने उपलब्ध सबसे कठिन शैक्षणिक पाठ्यक्रम को चुना।", "/hiː tʃəʊz ðə məʊst ˈrɪɡ.ər.əs ˌæk.əˈdem.ɪk kəˈrɪk.jʊ.ləm əˈveɪ.lə.bəl/"],
      ["The scholarship committee drew up the list of recipients.", "छात्रवृत्ति समिति ने प्राप्तकर्ताओं की सूची तैयार की।", "/ðə ˈskɒl.ə.ʃɪp kəˈmɪt.i druː ʌp ðə lɪst əv rɪˈsɪp.i.ənts/"],
      ["They kept all confidential files in an encrypted server.", "उन्होंने सभी गोपनीय फाइलों को एक एन्क्रिप्टेड सर्वर में रखा।", "/ðeɪ kept ɔːl ˌkɒn.fɪˈden.ʃəl faɪlz ɪn ən ɪnˈkrɪp.tɪd ˈsɜː.vər/"],
      ["The state government paid all outstanding dues to contractors.", "राज्य सरकार ने ठेकेदारों के सभी बकाये का भुगतान कर दिया।", "/ðə steɪt ˈɡʌv.ən.mənt peɪd ɔːl ˌaʊtˈstæn.dɪŋ djuːz tuː kənˈtræk.təz/"],
      ["She heard the breaking news on the radio this morning.", "उसने आज सुबह रेडियो पर यह ब्रेकिंग न्यूज सुनी।", "/ʃiː hɜːd ðə ˈbreɪ.kɪŋ njuːz ɒn ðə ˈreɪ.di.əʊ ðɪs ˈmɔː.nɪŋ/"]
    ],
    23: [
      ["The audit committee did not find any discrepancy in the accounts.", "ऑडिट समिति को खातों में कोई विसंगति नहीं मिली।", "/ði ˈɔː.dɪt kəˈmɪt.i dɪd nɒt faɪnd ˈen.i dɪˈskrep.ən.si ɪn ði əˈkaʊnts/"],
      ["We didn't compromise on quality standards under any circumstance.", "हमने किसी भी परिस्थिति में गुणवत्ता मानकों से समझौता नहीं किया।", "/wiː ˈdɪd.ənt ˈkɒm.prə.maɪz ɒn ˈkwɒl.ə.ti ˈstæn.dəd z ˈʌn.dər ˈen.i ˈsɜː.kəm.stɑːns/"],
      ["The CEO did not attend the press conference due to urgent travel.", "सीईओ ने जरूरी यात्रा के कारण प्रेस कॉन्फ्रेंस में भाग नहीं लिया।", "/ðə ˌsiː.iːˈəʊ dɪd nɒt əˈtend ðə pres ˈkɒn.fər.əns djuː tuː ˈɜː.dʒənt ˈtræv.əl/"],
      ["Our software team did not release the patch without testing.", "हमारी सॉफ्टवेयर टीम ने परीक्षण के बिना पैच जारी नहीं किया।", "/ˈaʊər ˈsɒft.weər tiːm dɪd nɒt rɪˈliːs ðə pætʃ wɪðˈaʊt ˈtes.tɪŋ/"],
      ["She didn't disclose confidential data to any third party.", "उसने किसी तीसरे पक्ष को गोपनीय डेटा का खुलासा नहीं किया।", "/ʃiː ˈdɪd.ənt dɪsˈkləʊz ˌkɒn.fɪˈden.ʃəl ˈdeɪ.tə tuː ˈen.i θɜːd ˈpɑː.ti/"],
      ["The local administration did not impose a curfew in the area.", "स्थानीय प्रशासन ने क्षेत्र में कर्फ्यू नहीं लगाया।", "/ðə ˈləʊ.kəl ədˌmɪn.ɪˈstreɪ.ʃən dɪd nɒt ɪmˈpəʊz ə ˈkɜː.fjuː ɪn ði ˈeə.ri.ə/"],
      ["We did not receive official clearance before the scheduled flight.", "निर्धारित उड़ान से पहले हमें आधिकारिक मंजूरी नहीं मिली।", "/wiː dɪd nɒt rɪˈsiːv əˈfɪʃ.əl ˈklɪə.rəns bɪˈfɔː ðə ˈskedʒ.uːld flaɪt/"],
      ["The legal department did not approve the initial contract draft.", "कानूनी विभाग ने प्रारंभिक अनुबंध मसौदे को मंजूरी नहीं दी।", "/ðə ˈliː.ɡəl dɪˈpɑːt.mənt dɪd nɒt əˈpruːv ði ɪˈnɪʃ.əl ˈkɒn.trækt drɑːft/"],
      ["The train driver did not overlook the caution signal.", "ट्रेन चालक ने सावधानी संकेत को नजरअंदाज नहीं किया।", "/ðə treɪn ˈdraɪ.vər dɪd nɒt ˌəʊ.vəˈlʊk ðə ˈkɔː.ʃən ˈsɪɡ.nəl/"],
      ["The scholarship committee did not reject any deserving candidate.", "छात्रवृत्ति समिति ने किसी भी योग्य उम्मीदवार को खारिज नहीं किया।", "/ðə ˈskɒl.ə.ʃɪp kəˈmɪt.i dɪd nɒt rɪˈdʒekt ˈen.i dɪˈzɜː.vɪŋ ˈkæn.dɪ.deɪt/"],
      ["The researchers didn't notice any toxic byproduct in the solution.", "शोधकर्ताओं ने घोल में कोई जहरीला सह-उत्पाद नहीं देखा।", "/ðə rɪˈsɜː.tʃəz ˈdɪd.ənt ˈnəʊ.tɪs ˈen.i ˈtɒk.sɪk ˈbaɪˌprɒd.ʌkt ɪn ðə səˈluː.ʃən/"],
      ["I didn't understand the technical jargon used in the presentation.", "मैं प्रस्तुति में प्रयुक्त तकनीकी शब्दावली को नहीं समझ पाया।", "/aɪ ˈdɪd.ənt ˌʌn.dəˈstænd ðə ˈtek.nɪ.kəl ˈdʒɑː.ɡən juːzd ɪn ðə ˌprez.ənˈteɪ.ʃən/"],
      ["The bank did not levy any hidden fees on the transaction.", "बैंक ने लेनदेन पर कोई छिपा हुआ शुल्क नहीं लगाया।", "/ðə bæŋk dɪd nɒt ˈlev.i ˈen.i ˈhɪd.ən fiːz ɒn ðə trænˈzæk.ʃən/"],
      ["The airline didn't cancel the flight despite adverse weather.", "प्रतिकूल मौसम के बावजूद एयरलाइन ने उड़ान रद्द नहीं की।", "/ði ˈeə.laɪn ˈdɪd.ənt ˈkæn.səl ðə flaɪt dɪˈspaɪt ˈæd.vɜːs ˈweð.ər/"],
      ["We did not encounter any technical glitches during the livestream.", "लाइव स्ट्रीम के दौरान हमें किसी तकनीकी खराबी का सामना नहीं करना पड़ा।", "/wiː dɪd nɒt ɪnˈkaʊn.tər ˈen.i ˈtek.nɪ.kəl ˈɡlɪtʃ.ɪz ˈdjʊə.rɪŋ ðə ˈlaɪv.striːm/"],
      ["The authorities did not disrupt public utilities during construction.", "निर्माण के दौरान अधिकारियों ने सार्वजनिक उपयोगिताओं को बाधित नहीं किया।", "/ði ɔːˈθɒr.ə.tiz dɪd nɒt dɪsˈrʌpt ˈpʌb.lɪk juːˈtɪl.ə.tiz ˈdjʊə.rɪŋ kənˈstrʌk.ʃən/"],
      ["She didn't make any false claims on her employment application.", "उसने अपने रोजगार आवेदन में कोई झूठा दावा नहीं किया।", "/ʃiː ˈdɪd.ənt meɪk ˈen.i fɔːls kleɪmz ɒn hɜːr ɪmˈplɔɪ.mənt ˌæp.lɪˈkeɪ.ʃən/"],
      ["The doctors did not observe any adverse reaction to the vaccine.", "डॉक्टरों ने टीके के प्रति कोई प्रतिकूल प्रतिक्रिया नहीं देखी।", "/ðə ˈdɒk.təz dɪd nɒt əbˈzɜːv ˈen.i ˈæd.vɜːs riˈæk.ʃən tuː ðə ˈvæk.siːn/"],
      ["We didn't expect such an overwhelmingly positive public response.", "हमें इतनी अत्यधिक सकारात्मक सार्वजनिक प्रतिक्रिया की उम्मीद नहीं थी।", "/wiː ˈdɪd.ənt ɪkˈspekt sʌtʃ ən ˌəʊ.vəˈwel.mɪŋ.li ˈpɒz.ə.tɪv ˈpʌb.lɪk rɪˈspɒns/"],
      ["The committee didn't hesitate to award the grant to the young innovator.", "समिति ने युवा नवप्रवर्तक को अनुदान देने में कोई संकोच नहीं किया।", "/ðə kəˈmɪt.i ˈdɪd.ənt ˈhez.ɪ.teɪt tuː əˈwɔːd ðə ɡrɑːnt tuː ðə jʌŋ ˈɪn.ə.veɪ.tər/"]
    ]
  };

  const list = phraseBank[dayNum];
  return list.map(([phraseEn, phraseHi, ipa], idx) => ({
    id: `d${String(dayNum).padStart(2, '0')}_sp_${String(idx + 1).padStart(2, '0')}`,
    phraseEn,
    phraseHi,
    ipa,
    context: `Professional / Civic Past Context ${idx + 1}`,
    register: idx % 2 === 0 ? "Formal / Professional" : "Standard Conversational",
    intonationPattern: "Falling cadence on decisive past narrative statement"
  }));
}

// Build Days 21, 22, 23
export async function buildDays21_23() {
  const priorLemmas = await getPriorLemmas();
  const configs = [days21_25_config[0], day22_config, day23_config];
  const results = [];

  configs.forEach((cfg, idx) => {
    const dayNum = idx + 21;
    const rawCandidates = cfg.rawCandidates || [];
    const localSet = new Set();
    const cleanRawTerms = [];

    rawCandidates.forEach(cand => {
      const word = cand[0].toLowerCase().trim();
      if (!priorLemmas.has(word) && !localSet.has(word)) {
        localSet.add(word);
        priorLemmas.add(word);
        cleanRawTerms.push(cand);
      }
    });

    const targetVocabCount = Math.min(60, cleanRawTerms.length);
    const selectedTerms = cleanRawTerms.slice(0, targetVocabCount);
    const vocabulary = selectedTerms.map((t, vIdx) =>
      makeVocab(`d${String(dayNum).padStart(2, '0')}_v${String(vIdx + 1).padStart(2, '0')}`, t)
    );

    const exemplars = generateStage3Exemplars(dayNum);
    const exercises = generateStage3Exercises(dayNum, cfg);
    const translationSet = generateStage3Translations(dayNum, cfg);
    const spokenPhrases = generateStage3SpokenPhrases(dayNum, cfg);

    const dayObj = {
      dayNumber: dayNum,
      id: `day_${String(dayNum).padStart(2, '0')}`,
      titleEn: cfg.titleEn,
      titleHi: cfg.titleHi,
      cefr: cfg.cefr || "A2.1",
      estMinutes: cfg.estMinutes || 45,
      prerequisites: cfg.prerequisites,
      objectivesEn: [
        `Master the core syntax and morphological structures of ${cfg.titleEn}.`,
        `Develop active vocabulary fluency with 60 advanced B1/B2 academic and professional terms.`,
        `Eliminate fossilized phonetic and syntactic interference patterns common among Hindi speakers.`,
        `Accurately produce target sounds, syllable stress contrasts, and natural connected speech intonation.`,
        `Demonstrate production competence across 100 contextual exemplars, 65 interactive drills, 25 precision translations, and situational dialogues.`
      ],
      objectivesHi: [
        `${cfg.titleHi} के मूल व्याकरणिक नियमों और वाक्य संरचनाओं में पूर्ण दक्षता प्राप्त करना।`,
        `60 उन्नत शैक्षणिक एवं व्यावसायिक शब्दों का सटीक अर्थ, उच्चारण और संदर्भ में प्रयोग सीखना।`,
        `हिन्दी भाषी शिक्षार्थियों में सामान्य रूप से पाई जाने वाली व्याकरणिक और ध्वन्यात्मक त्रुटियों को हमेशा के लिए समाप्त करना।`,
        `सटीक स्वराघात (Syllable Stress), ध्वनि भेद (Phonemic Contrast) और धाराप्रवाह अभिव्यक्ति का अभ्यास करना।`,
        `100 द्विभाषी उदाहरणों, 65 संवादात्मक अभ्यासों, 25 सटीक अनुवादों और वास्तविक जीवन के संवादों में पूर्ण आत्मविश्वास हासिल करना।`
      ],
      teach: {
        hindiExplanation: cfg.hindiExplanation,
        englishExplanation: cfg.englishExplanation,
        grammarRules: cfg.grammarRules,
        formulaTable: cfg.formulaTable,
        hindiSpeakerTrap: cfg.hindiSpeakerTrap
      },
      phonetics: {
        targetSound: cfg.phoneticTarget,
        articulatoryMechanics: `Focus on precise articulation of English coda consonants and vowel shifts. For Day ${dayNum}, master the contrastive rules without introducing Hindi epenthetic vowels.`,
        hindiSpeakerPhoneticTrap: cfg.phoneticTrap,
        minimalPairs: cfg.minimalPairs || [],
        prosodyFocus: "Pitch drops decisively at the end of past affirmative and negative declarative clauses. Content words (verbs, nouns, negative auxiliaries) receive strong primary stress."
      },
      learn: {
        vocabulary,
        spokenPhrases
      },
      examples: {
        bilingualExemplars: exemplars
      },
      practice: {
        exercises,
        translationSet
      },
      use: {
        dialogue: cfg.dialogue?.turns || [
          { speaker: "Aditi (Lead Investigator)", textEn: "Did our engineering contractors finish the structural audit yesterday?", textHi: "क्या हमारे इंजीनियरिंग ठेकेदारों ने कल संरचनात्मक ऑडिट पूरा किया?" },
          { speaker: "Dr. Sharma (Senior Consultant)", textEn: "Yes, they completed the entire safety inspection and submitted the final blueprints ahead of schedule.", textHi: "हाँ, उन्होंने पूरी सुरक्षा जांच पूरी की और निर्धारित समय से पहले अंतिम खाका जमा किया।" },
          { speaker: "Aditi", textEn: "Did the municipal commissioner approve the clearance certificate?", textHi: "क्या नगर आयुक्त ने मंजूरी प्रमाण पत्र को मंजूरी दी?" },
          { speaker: "Dr. Sharma", textEn: "Indeed, she approved all documentation yesterday morning and complimented our environmental design.", textHi: "वास्तव में, उन्होंने कल सुबह सभी दस्तावेजों को मंजूरी दी और हमारे पर्यावरण डिजाइन की सराहना की।" }
        ],
        speakingTask: cfg.speakingTask || {
          taskTitle: `Oral Production Drill: ${cfg.titleEn}`,
          prompt: `Deliver a 2-minute structured professional monologue utilizing at least 5 new vocabulary terms from Day ${dayNum}, demonstrating correct past tense morphology, clear plosives, and natural sentence intonation.`,
          fluencyRubric: [
            "Pronunciation & Intonation (Accurate phonetic target articulation)",
            "Grammatical Concord (Zero auxiliary or past-inflection errors)",
            "Lexical Richness (Seamless integration of 5+ target B1/B2 terms)",
            "Rhythm & Prosody (Natural content word stress and falling declarative cadence)"
          ],
          checklist: [
            "Did I articulate all verb inflections cleanly without double marking?",
            "Did I apply correct auxiliary concord (didn't + V1)?",
            "Did I avoid literal word-for-word Hindi calques?",
            "Did I maintain a confident, professional cadence?"
          ]
        }
      },
      assess: {
        writtenChecklist: [
          `Accurately form affirmative and negative structures for ${cfg.titleEn}.`,
          `Identify and eliminate Hindi-English transfer errors like uninflected verbs with 'yesterday' or double-past 'didn't went'.`,
          `Distinguish phonemic contrasts across all 10 minimal pair drills.`,
          `Integrate at least 10 new B1/B2 academic and professional vocabulary words in original written sentences.`,
          `Complete all 65 interactive practice items and 25 precision translations with >90% accuracy.`
        ],
        oralProductionTask: `Record a 2-minute spoken summary detailing a major event, project milestone, or historical development using the grammatical structures of Day ${dayNum}.`,
        benchmarks: [
          `Accurate past morphological inflection without hesitation.`,
          `Clear differentiation between /t/, /d/, and /ɪd/ endings or irregular vowel alternations.`,
          `100% correct placement of temporal anchors (yesterday, last week, ago).`,
          `Natural prosodic stress on negative auxiliaries and content verbs.`,
          `Seamless bilingual conceptual translation without literal syntactic calques.`
        ]
      },
      review: {
        spacedRepetitionTag: `Stage3_Day${dayNum}_${cfg.titleEn.split(' ')[0]}`,
        recommendedIntervalDays: [1, 3, 7, 14, 30],
        retrievalDrill: `Recall and produce 5 spontaneous sentences using target verbs and vocabulary from Day ${dayNum} within 60 seconds.`
      }
    };

    const outPath = path.join(process.cwd(), 'content_builder', `day${dayNum}.js`);
    fs.writeFileSync(outPath, `export const day${dayNum} = ${JSON.stringify(dayObj, null, 2)};\n`, 'utf-8');
    console.log(`[SUCCESS] Wrote complete content_builder/day${dayNum}.js (Vocab: ${vocabulary.length}, Exemplars: ${exemplars.length}, Exercises: ${exercises.length}, Translations: ${translationSet.length})`);
    results.push(dayObj);
  });

  return results;
}

if (process.argv[1]?.endsWith('build_stage3_days21_23.js')) {
  buildDays21_23().then(() => {
    console.log("\n[STAGE 3 BATCH 1 COMPLETE] Days 21–23 built and saved.");
  }).catch(err => {
    console.error("Error building Days 21-23:", err);
  });
}
