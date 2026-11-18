// scripts/build_stage3_days27_30.js
import fs from 'fs';
import path from 'path';
import { day27_config } from './stage3_data_day27.js';
import { day28_config } from './stage3_data_day28.js';
import { day29_config } from './stage3_data_day29.js';
import { day30_config } from './stage3_data_day30.js';

// Prior registered lemmas across Days 1-26
async function getPriorLemmas() {
  const priorDays = [];
  for (let i = 1; i <= 26; i++) {
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

// Exemplar builder for Days 27, 28, 29, 30
function generateStage3Exemplars(dayNum) {
  const exemplars = [];
  
  const templatesByDay = {
    27: {
      types: ["Definite Past Time Anchor (yesterday, last year, in 2018)", "Relative Past Offset ('ago' calculus)", "Sequential Discourse Marker (first, then, subsequently)", "Complex Temporal Clause (before / after + noun/clause)", "Institutional Project Milestone"],
      patterns: [
        { en: "In 2018, the national space agency successfully launched thirty-one satellites into polar orbit.", hi: "2018 में, राष्ट्रीय अंतरिक्ष एजेंसी ने इकतीस उपग्रहों को ध्रुवीय कक्षा में सफलतापूर्वक प्रक्षेपित किया।", cat: "Space Exploration" },
        { en: "Three years ago, our university established an advanced artificial intelligence research center.", hi: "तीन साल पहले, हमारे विश्वविद्यालय ने एक उन्नत कृत्रिम बुद्धिमत्ता अनुसंधान केंद्र की स्थापना की थी।", cat: "Academic Expansion" },
        { en: "First, the engineering team calibrated the optical sensors; subsequently, they executed the live test.", hi: "पहले, इंजीनियरिंग टीम ने ऑप्टिकल सेंसर को कैलिब्रेट किया; बाद में, उन्होंने लाइव परीक्षण निष्पादित किया।", cat: "Engineering Workflow" },
        { en: "The municipal corporation renovated the central railway terminus two decades ago.", hi: "नगर निगम ने दो दशक पहले सेंट्रल रेलवे टर्मिनस का नवीनीकरण किया था।", cat: "Urban Infrastructure" },
        { en: "Last quarter, the finance ministry announced comprehensive fiscal reforms for agricultural exporters.", hi: "पिछली तिमाही में, वित्त मंत्रालय ने कृषि निर्यातकों के लिए व्यापक वित्तीय सुधारों की घोषणा की।", cat: "Economic Policy" },
        { en: "After the technical committee reviewed the safety logs, the factory resumed operations immediately.", hi: "तकनीकी समिति द्वारा सुरक्षा लॉग की समीक्षा करने के बाद, कारखाने ने तुरंत संचालन फिर से शुरू किया।", cat: "Industrial Safety" },
        { en: "Yesterday afternoon, the archaeological survey team discovered ancient stone inscriptions near the fort.", hi: "कल दोपहर, पुरातत्व सर्वेक्षण दल ने किले के पास प्राचीन पत्थर के शिलालेखों की खोज की।", cat: "Archaeology" },
        { en: "Ten months ago, the international pharmaceutical consortium initiated phase-three clinical trials.", hi: "दस महीने पहले, अंतरराष्ट्रीय फार्मास्युटिकल कंसोर्टियम ने तीसरे चरण के नैदानिक परीक्षण शुरू किए थे।", cat: "Medical Research" },
        { en: "Before the annual general meeting concluded, the board ratified the overseas investment charter.", hi: "वार्षिक आम बैठक समाप्त होने से पहले, बोर्ड ने विदेशी निवेश चार्टर की पुष्टि की।", cat: "Corporate Governance" },
        { en: "In late 2021, the state government commissioned forty solar micro-grids across rural districts.", hi: "2021 के अंत में, राज्य सरकार ने ग्रामीण जिलों में चालीस सौर माइक्रो-ग्रिड चालू किए।", cat: "Renewable Energy" }
      ]
    },
    28: {
      types: ["Narrative Framing & Scene Setting", "Interrupted Action Sequence (Continuous + Simple Past)", "Climactic Moment & Resolution", "Reflective Evaluation", "Personal Experience & Travel Memoir"],
      patterns: [
        { en: "While we were trekking through the dense Himalayan valleys, an unexpected blizzard erupted without warning.", hi: "जब हम घनी हिमालयी घाटियों से होकर ट्रेकिंग कर रहे थे, तब बिना किसी चेतावनी के एक अप्रत्याशित बर्फीला तूफान शुरू हो गया।", cat: "Mountain Expedition" },
        { en: "The research vessel was navigating through Arctic waters when marine biologists spotted an endangered blue whale.", hi: "शोध जहाज आर्कटिक के पानी में आगे बढ़ रहा था जब समुद्री जीवविज्ञानियों ने एक लुप्तप्राय नीली व्हेल को देखा।", cat: "Marine Exploration" },
        { en: "As the sun was setting over the ancient ruins, the tour guide shared forgotten legends of the medieval empire.", hi: "जैसे ही प्राचीन खंडहरों पर सूरज ढल रहा था, टूर गाइड ने मध्ययुगीन साम्राज्य की भूली-बिसरी किंवदंतियों को साझा किया।", cat: "Cultural Tourism" },
        { en: "While the software developers were debugging the live payment gateway, a sudden security alert flashed on the console.", hi: "जब सॉफ्टवेयर डेवलपर्स लाइव पेमेंट गेटवे को डीबग कर रहे थे, तब कंसोल पर एक अचानक सुरक्षा अलर्ट चमका।", cat: "Tech Incident" },
        { en: "I was examining old family photographs in the attic when I discovered a handwritten letter from 1942.", hi: "मैं अटारी में पुरानी पारिवारिक तस्वीरों की जांच कर रहा था जब मुझे 1942 का एक हस्तलिखित पत्र मिला।", cat: "Personal History" },
        { en: "The surgical team was performing a delicate reconstructive operation when the hospital backup generator engaged.", hi: "सर्जिकल टीम एक नाजुक पुनर्निर्माण ऑपरेशन कर रही थी जब अस्पताल का बैकअप जनरेटर शुरू हुआ।", cat: "Hospital Emergency" },
        { en: "While the international delegates were debating carbon reduction quotas, a consensus emerged on renewable financing.", hi: "जब अंतरराष्ट्रीय प्रतिनिधि कार्बन कटौती कोटे पर बहस कर रहे थे, तब नवीकरणीय वित्तपोषण पर एक आम सहमति बनी।", cat: "Climate Summit" },
        { en: "The wildlife conservationists were setting up camera traps in the reserve when a tiger cub approached the clearing.", hi: "वन्यजीव संरक्षणवादी रिजर्व में कैमरा ट्रैप लगा रहे थे जब एक बाघ का बच्चा खुले मैदान के पास आया।", cat: "Wildlife Encounter" },
        { en: "While we were waiting at the crowded railway platform, the station master announced a special express train.", hi: "जब हम भीड़भाड़ वाले रेलवे प्लेटफॉर्म पर इंतजार कर रहे थे, तब स्टेशन मास्टर ने एक विशेष एक्सप्रेस ट्रेन की घोषणा की।", cat: "Travel Experience" },
        { en: "The astronomers were calibrating the high-altitude radio telescope when they detected an unusual pulsed signal.", hi: "खगोलशास्त्री उच्च ऊंचाई वाले रेडियो टेलीस्कोप को कैलिब्रेट कर रहे थे जब उन्होंने एक असामान्य स्पंदित संकेत का पता लगाया।", cat: "Astrophysics" }
      ]
    },
    29: {
      types: ["Early Life & Formative Milestones", "Academic & Career Breakthroughs", "Historical / Institutional Impact", "Legacy & Enduring Contribution", "Chronological Narrative Matrix"],
      patterns: [
        { en: "Born in a humble village, Dr. Kalam worked tirelessly to pioneer India's space and missile defense programs.", hi: "एक साधारण गाँव में जन्मे, डॉ. कलाम ने भारत के अंतरिक्ष और मिसाइल रक्षा कार्यक्रमों का नेतृत्व करने के लिए अथक परिश्रम किया।", cat: "Scientific Pioneer" },
        { en: "In 1913, Rabindranath Tagore became the first non-European laureate to win the Nobel Prize in Literature.", hi: "1913 में, रवींद्रनाथ टैगोर साहित्य में नोबेल पुरस्कार जीतने वाले पहले गैर-यूरोपीय पुरस्कार विजेता बने।", cat: "Literary Heritage" },
        { en: "She completed her postgraduate studies at Cambridge University before establishing an oncology institute in India.", hi: "भारत में एक ऑन्कोलॉजी संस्थान स्थापित करने से पहले उन्होंने कैम्ब्रिज विश्वविद्यालय में अपनी स्नातकोत्तर की पढ़ाई पूरी की।", cat: "Medical Pioneer" },
        { en: "The pioneering architect designed iconic modernist buildings that redefined urban skylines across South Asia.", hi: "अग्रणी वास्तुकार ने प्रतिष्ठित आधुनिक इमारतों को डिजाइन किया जिन्होंने पूरे दक्षिण एशिया में शहरी क्षितिज को फिर से परिभाषित किया।", cat: "Architectural Legacy" },
        { en: "During his tenure as chief justice, he authored landmark judgments safeguarding fundamental democratic rights.", hi: "मुख्य न्यायाधीश के रूप में अपने कार्यकाल के दौरान, उन्होंने मौलिक लोकतांत्रिक अधिकारों की रक्षा करने वाले ऐतिहासिक निर्णय लिखे।", cat: "Constitutional Law" },
        { en: "In the late nineteenth century, social reformers established revolutionary educational academies for women.", hi: "उन्नीसवीं सदी के अंत में, समाज सुधारकों ने महिलाओं के लिए क्रांतिकारी शैक्षणिक अकादमियों की स्थापना की।", cat: "Social Reform" },
        { en: "He served in the merchant navy for fifteen years before transitioning into maritime international law.", hi: "अंतरराष्ट्रीय समुद्री कानून में आने से पहले उन्होंने पंद्रह साल तक मर्चेंट नेवी में सेवा की।", cat: "Career Trajectory" },
        { en: "The legendary mathematician published eighty groundbreaking theorems that transformed analytic number theory.", hi: "महान गणितज्ञ ने अस्सी अभूतपूर्व प्रमेय प्रकाशित किए जिन्होंने विश्लेषणात्मक संख्या सिद्धांत को बदल दिया।", cat: "Mathematical History" },
        { en: "She dedicated four decades to documenting endangered tribal dialects across the northeastern Himalayan foothills.", hi: "उन्होंने पूर्वोत्तर हिमालयी तलहटी में लुप्तप्राय जनजातीय बोलियों के दस्तावेजीकरण के लिए चार दशक समर्पित किए।", cat: "Linguistic Anthropology" },
        { en: "Under his dynamic leadership, the enterprise expanded into forty international markets within two decades.", hi: "उनके गतिशील नेतृत्व में, उद्यम ने दो दशकों के भीतर चालीस अंतरराष्ट्रीय बाजारों में विस्तार किया।", cat: "Entrepreneurial Journey" }
      ]
    },
    30: {
      types: ["Mastery Synthesis: Regular vs. Irregular Contrast", "Mastery Synthesis: Past Continuous Interruption", "Mastery Synthesis: Past Inquiry & Inversion", "Mastery Synthesis: Discontinued Habit & State", "Mastery Synthesis: Complex Narrative Discourse"],
      patterns: [
        { en: "Although the team faced immense technical hurdles, they developed a viable carbon capture prototype last year.", hi: "यद्यपि टीम को अत्यधिक तकनीकी बाधाओं का सामना करना पड़ा, उन्होंने पिछले साल एक व्यावहारिक कार्बन कैप्चर प्रोटोटाइप विकसित किया।", cat: "Technology Innovation" },
        { en: "While the financial auditors were reviewing the offshore ledgers, they discovered significant fiscal irregularities.", hi: "जब वित्तीय लेखा परीक्षक ऑफशोर बहीखातों की समीक्षा कर रहे थे, तब उन्हें महत्वपूर्ण वित्तीय अनियमितताओं का पता चला।", cat: "Corporate Governance" },
        { en: "Did the parliamentary commission investigate why the infrastructure budget exceeded the initial projection?", hi: "क्या संसदीय आयोग ने जांच की कि बुनियादी ढांचा बजट प्रारंभिक अनुमान से अधिक क्यों हो गया?", cat: "Public Governance" },
        { en: "The ancient trading harbor used to be the primary gateway for maritime spice commerce across the Indian Ocean.", hi: "प्राचीन व्यापारिक बंदरगाह हिंद महासागर में समुद्री मसाला व्यापार का प्राथमिक प्रवेश द्वार हुआ करता था।", cat: "Maritime Heritage" },
        { en: "After the lead surgeon sanitized the instruments, the multidisciplinary team executed the complex transplant.", hi: "मुख्य सर्जन द्वारा उपकरणों को कीटाणुरहित करने के बाद, बहुविषयक टीम ने जटिल प्रत्यारोपण निष्पादित किया।", cat: "Surgical Mastery" },
        { en: "Why did the defense ministry recommend procuring indigenous surveillance drones three years ago?", hi: "रक्षा मंत्रालय ने तीन साल पहले स्वदेशी निगरानी ड्रोन खरीदने की सिफारिश क्यों की थी?", cat: "Defense Strategy" },
        { en: "While the meteorologists were analyzing atmospheric pressure anomalies, a category-four cyclone developed rapidly.", hi: "जब मौसम विज्ञानी वायुमंडलीय दबाव की विसंगतियों का विश्लेषण कर रहे थे, तब श्रेणी-चार का चक्रवात तेजी से विकसित हुआ।", cat: "Disaster Preparedness" },
        { en: "Traditional communities would store surplus grain in underground granaries to mitigate seasonal droughts.", hi: "पारंपरिक समुदाय मौसमी सूखे के प्रभाव को कम करने के लिए भूमिगत अन्न भंडारों में अतिरिक्त अनाज का भंडारण करते थे।", cat: "Agricultural Wisdom" },
        { en: "The international consortium did not finalize the multilateral treaty until all border disputes were resolved.", hi: "अंतरराष्ट्रीय कंसोर्टियम ने तब तक बहुपक्षीय संधि को अंतिम रूप नहीं दिया जब तक कि सभी सीमा विवाद हल नहीं हो गए।", cat: "Diplomatic Relations" },
        { en: "First, our engineers conducted stress simulations; subsequently, they manufactured the titanium turbine blades.", hi: "पहले, हमारे इंजीनियरों ने तनाव सिमुलेशन किया; बाद में, उन्होंने टाइटेनियम टरबाइन ब्लेड का निर्माण किया।", cat: "Advanced Manufacturing" }
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
        en = pat.en.replace(/\.$/, " during that pivotal phase.");
        hi = pat.hi.replace(/।$/, " उस महत्वपूर्ण चरण के दौरान।");
      } else if (v === 3) {
        en = `In retrospect, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `बीते समय को देखते हुए, ${pat.hi}`;
      } else if (v === 4) {
        en = pat.en.replace(/\.$/, " according to official departmental archives.");
        hi = pat.hi.replace(/।$/, " आधिकारिक विभागीय अभिलेखागार के अनुसार।");
      } else if (v === 5) {
        en = `Furthermore, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `इसके अतिरिक्त, ${pat.hi}`;
      } else if (v === 6) {
        en = pat.en.replace(/\.$/, " without encountering major systemic obstacles.");
        hi = pat.hi.replace(/।$/, " बिना किसी बड़ी प्रणालीगत बाधा का सामना किए।");
      } else if (v === 7) {
        en = `Historically, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `ऐतिहासिक रूप से, ${pat.hi}`;
      } else if (v === 8) {
        en = pat.en.replace(/\.$/, " as documented in contemporary records.");
        hi = pat.hi.replace(/।$/, " जैसा कि समकालीन अभिलेखों में प्रलेखित है।");
      } else if (v === 9) {
        en = `Undoubtedly, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `निस्संदेह, ${pat.hi}`;
      } else if (v === 10) {
        en = pat.en.replace(/\.$/, " for long-term strategic clarity.");
        hi = pat.hi.replace(/।$/, " दीर्घकालिक रणनीतिक स्पष्टता के लिए।");
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

// Generate 65 interactive exercises for Days 27, 28, 29, 30
function generateStage3Exercises(dayNum, config) {
  const exercises = [];
  const { titleEn } = config;

  const dayBank = {
    27: [
      { q: `Choose the correct past time expression: "The university opened a new campus _____."`, opts: ["three years ago", "before three years", "since three years", "from three years"], ans: "three years ago", why: "'Number + time unit + ago' is the correct past offset in English. Never say '*before three years*'." },
      { q: `Select the correct sequence marker: "_____, we conducted the survey; then, we analyzed the findings."`, opts: ["First", "At first", "Firstly", "In first"], ans: "First", why: "'First' introduces the opening step in a chronological sequence of actions." },
      { q: `Choose the correct preposition: "Dr. Raman published his groundbreaking research _____ 1928."`, opts: ["in", "on", "at", "during to"], ans: "in", why: "Use preposition 'in' with calendar years (in 1928, in 2020)." },
      { q: `Identify the correct temporal connector: "We completed the project _____ the deadline expired."`, opts: ["before", "ago", "prior", "previous"], ans: "before", why: "'Before' connects two sequential clauses (before + subject + verb)." },
      { q: `Identify the error in: "*I met him before two days.*"`, opts: ["'before two days' should be 'two days ago'", "'met' should be 'meet'", "'him' should be 'he'", "No error"], ans: "'before two days' should be 'two days ago'", why: "In English, a specific past time distance from now is expressed with 'ago' ('two days ago')." }
    ],
    28: [
      { q: `Choose the correct narrative combination: "While the doctor _____ (examine) the patient, the heart monitor _____ (beep)."`, opts: ["was examining / beeped", "examined / was beeping", "was examining / was beeping", "examined / beeped"], ans: "was examining / beeped", why: "The ongoing background action takes past continuous ('was examining'), and the single interrupting event takes past simple ('beeped')." },
      { q: `Select the correct sentence setting the scene in a story:`, opts: ["Dark rain clouds were gathering as we entered the valley.", "Dark rain clouds gathered while we were entering the valley.", "Dark rain clouds were gathered when we entered the valley.", "Dark rain clouds gather as we entered the valley."], ans: "Dark rain clouds were gathering as we entered the valley.", why: "Past continuous ('were gathering') sets atmospheric background context." },
      { q: `Identify the correct narrative sequence:`, opts: ["First he opened the vault, then he inspected the documents.", "First he was opening the vault, then he was inspecting the documents.", "First he opened the vault, then he is inspecting the documents.", "He opened the vault while then he inspected the documents."], ans: "First he opened the vault, then he inspected the documents.", why: "Sequential completed events in a narrative use simple past with sequence adverbs ('first', 'then')." },
      { q: `Select the appropriate response for an unexpected plot turn:`, opts: ["Suddenly, a loud thunderclap shook the cabin.", "Suddenly, a loud thunderclap was shaking the cabin continually.", "Sudden, a loud thunderclap shook the cabin.", "Suddenly, a loud thunderclap has shaken the cabin."], ans: "Suddenly, a loud thunderclap shook the cabin.", why: "Abrupt, instantaneous narrative events use adverb 'Suddenly' + past simple V2 ('shook')." },
      { q: `Identify the stative verb that cannot take '-ing' in a story:`, opts: ["realize", "walk", "shout", "drive"], ans: "realize", why: "Cognitive stative verb 'realize' is used in past simple ('I realized'), not past continuous." }
    ],
    29: [
      { q: `Choose the correct biographical verb form: "Rabindranath Tagore _____ (win) the Nobel Prize in 1913."`, opts: ["won", "winned", "has won", "had win"], ans: "won", why: "Definite historical milestone with year 'in 1913' requires past simple V2 'won'." },
      { q: `Select the correct preposition for a historical century: "Social reforms began _____ the late nineteenth century."`, opts: ["in", "on", "at", "during to"], ans: "in", why: "Centuries take preposition 'in' ('in the nineteenth century')." },
      { q: `Choose the correct expression for early life: "He was born and _____ in a small coastal village."`, opts: ["raised", "rose", "risen", "grown"], ans: "raised", why: "'Born and raised' (or 'brought up') is the standard biographical collocation." },
      { q: `Identify the correct career milestone sentence:`, opts: ["She served as the university vice-chancellor for a decade.", "She was serving as the university vice-chancellor since a decade.", "She has served as the university vice-chancellor before ten years.", "She served like university vice-chancellor in a decade."], ans: "She served as the university vice-chancellor for a decade.", why: "'Served as [title] for [duration]' accurately expresses a completed career tenure in the past." },
      { q: `Select the correct form: "The company _____ (expand) into forty international markets during his leadership."`, opts: ["expanded", "was expanded", "has expanded", "expanding"], ans: "expanded", why: "Active past historical development takes past simple 'expanded'." }
    ],
    30: [
      { q: `Choose the correct comprehensive past structure: "Although the storm _____ (rage), the rescue team _____ (reach) the island."`, opts: ["was raging / reached", "raged / was reaching", "was raged / reached", "is raging / reached"], ans: "was raging / reached", why: "Background environmental condition ('was raging') + completed decisive achievement ('reached')." },
      { q: `Identify the grammatically flawless sentence:`, opts: ["Why did they postpone the symposium two days ago?", "Why did they postponed the symposium before two days?", "Why they postponed the symposium two days ago?", "Why did they postpone the symposium since two days?"], ans: "Why did they postpone the symposium two days ago?", why: "Correct Wh- auxiliary inversion 'Why did they postpone' + correct past offset 'two days ago'." },
      { q: `Select the correct negative past form: "The audit committee _____ (not / find) any discrepancy."`, opts: ["did not find", "did not found", "didn't found", "do not found"], ans: "did not find", why: "'Did not' (didn't) + base verb V1 'find'." },
      { q: `Choose the correct contrast between past state and present reality:`, opts: ["This facility used to be a textile factory, but now it is a technology hub.", "This facility would be a textile factory, but now it is a technology hub.", "This facility used to being a textile factory, but now it is a technology hub.", "This facility was used to be a textile factory, but now it is a technology hub."], ans: "This facility used to be a textile factory, but now it is a technology hub.", why: "'Used to be' expresses discontinued past state; 'would' cannot be used with stative 'be'." },
      { q: `Identify the past simple form of 'bring':`, opts: ["brought", "bringed", "brang", "broughted"], ans: "brought", why: "'Bring' -> 'brought' (irregular past simple)." }
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
        27: [
          { p: `Complete with 'ago': "The institute was founded forty years _____."`, a: "ago", exp: "Use 'ago' after a time duration for a point in the past." },
          { p: `Complete with sequence adverb: "_____, we gathered the data; then, we published the report."`, a: "First", exp: "'First' begins the sequence." },
          { p: `Complete with correct preposition: "The treaty was signed _____ August 1947."`, a: "in", exp: "Preposition 'in' with month/year." }
        ],
        28: [
          { p: `Complete with past continuous: "The wildlife photographers _____ (track) the snow leopard when the snowstorm began."`, a: "were tracking", exp: "Plural subject takes 'were tracking'." },
          { p: `Complete with interrupted past: "While she was speaking, the microphone _____ (disconnect)."`, a: "disconnected", exp: "Interrupting past simple event: 'disconnected'." },
          { p: `Complete with narrative past: "Suddenly, the lights _____ (flicker) and went out."`, a: "flickered", exp: "Abrupt narrative action: 'flickered'." }
        ],
        29: [
          { p: `Complete with biographical past: "Dr. Raman _____ (receive) the Nobel Prize in Physics in 1930."`, a: "received", exp: "Past simple V2: 'received'." },
          { p: `Complete with career milestone: "She _____ (author) four authoritative volumes on ancient history."`, a: "authored", exp: "Past simple V2: 'authored'." },
          { p: `Complete with life history: "He _____ (graduate) from presidency college with highest honors."`, a: "graduated", exp: "Past simple V2: 'graduated'." }
        ],
        30: [
          { p: `Complete with past negative: "The director _____ (not / approve) the budget revision yesterday."`, a: "did not approve", exp: "Past negative 'did not approve'." },
          { p: `Form past question: "_____ (you / see) the solar eclipse last month?"`, a: "Did you see", exp: "Past inversion 'Did you see'." },
          { p: `Complete with discontinued state: "This avenue _____ (be) a quiet dirt road thirty years ago."`, a: "used to be", exp: "Discontinued state 'used to be'." }
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
        27: [
          { w: "The company opened its European branch before five years.", r: "The company opened its European branch five years ago.", e: "Replace 'before five years' with 'five years ago'." },
          { w: "At first, we inspected the engine, then we started it.", r: "First, we inspected the engine, then we started it.", e: "In a chronological sequence of actions, use 'First', not 'At first' (which means initially but changed later)." },
          { w: "They signed the agreement on 2019.", r: "They signed the agreement in 2019.", e: "Use preposition 'in' with calendar years ('in 2019')." }
        ],
        28: [
          { w: "While the scientists analyzed the samples, a contamination occurred.", r: "While the scientists were analyzing the samples, a contamination occurred.", e: "Continuous ongoing background action with 'while' takes 'were analyzing'." },
          { w: "I was knowing the answer when the judge asked the question.", r: "I knew the answer when the judge asked the question.", e: "Stative verb 'know' cannot be used in continuous form; use 'knew'." },
          { w: "Suddenly, the fire alarm was sounding loudly.", r: "Suddenly, the fire alarm sounded loudly.", e: "Instantaneous, abrupt event in a story takes simple past 'sounded'." }
        ],
        29: [
          { w: "He has graduated from Oxford University in 1985.", r: "He graduated from Oxford University in 1985.", e: "Definite past year 'in 1985' requires past simple 'graduated', not present perfect." },
          { w: "She was born on a small village in Kerala.", r: "She was born in a small village in Kerala.", e: "Use preposition 'in' with villages, towns, and cities." },
          { w: "During thirty years, he led the research laboratory.", r: "For thirty years, he led the research laboratory.", e: "Use 'for' to indicate a total duration of time." }
        ],
        30: [
          { w: "Why did you didn't attend the safety briefing yesterday?", r: "Why didn't you attend the safety briefing yesterday?", e: "Negative Wh- question: 'Why didn't you attend...'." },
          { w: "She didn't went to the clinic yesterday afternoon.", r: "She didn't go to the clinic yesterday afternoon.", e: "Double past error: after 'didn't', use base verb 'go'." },
          { w: "This library would be a royal courthouse in the 19th century.", r: "This library used to be a royal courthouse in the 19th century.", e: "Stative verb 'be' requires 'used to', not 'would'." }
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
      // Transformation
      const transforms = {
        27: [
          { p: `Rephrase using 'ago': "It is now 2024. The policy was established in 2019."`, r: "The policy was established five years ago.", e: "Calculate past interval: 2024 - 2019 = 5 years ago." },
          { p: `Combine using 'after': "The committee reviewed the budget. The director signed the contract."`, r: "After the committee reviewed the budget, the director signed the contract.", e: "Connect sequential actions with 'after'." }
        ],
        28: [
          { p: `Combine into an interrupted narrative sentence: "The astronomers calibrated the telescope. A meteor flashed across the sky."`, r: "The astronomers were calibrating the telescope when a meteor flashed across the sky.", e: "Ongoing action 'were calibrating' + interrupting simple past 'flashed'." },
          { p: `Combine using 'while': "Dr. Roy examined the patient. Dr. Sen reviewed the radiology scans."`, r: "While Dr. Roy was examining the patient, Dr. Sen was reviewing the radiology scans.", e: "Two simultaneous continuous actions." }
        ],
        29: [
          { p: `Combine into a concise biographical statement: "Dr. Kalam was born in Rameswaram. He pioneered India's space program."`, r: "Born in Rameswaram, Dr. Kalam pioneered India's space program.", e: "Participle clause for elegant biographical synthesis." },
          { p: `Transform into past simple career statement: "She has been the managing director for ten years (she retired in 2020)."`, r: "She served as the managing director for ten years.", e: "Completed past tenure takes simple past 'served'." }
        ],
        30: [
          { p: `Transform into a past simple question: "The board approved the expansion proposal yesterday."`, r: "Did the board approve the expansion proposal yesterday?", e: "Invert with 'Did' + Subject + base verb 'approve'." },
          { p: `Transform into a negative past simple sentence: "The engineers found a hairline fracture in the pipeline."`, r: "The engineers did not find a hairline fracture in the pipeline.", e: "Negative past: 'did not' + base verb 'find'." }
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

// Generate 25 translations for Days 27, 28, 29, 30
function generateStage3Translations(dayNum, config) {
  const transBank = {
    27: [
      ["तीन साल पहले हमारे संस्थान ने एक नया अनुसंधान केंद्र स्थापित किया।", "Three years ago, our institution established a new research center."],
      ["पहले हमने डेटा एकत्र किया, फिर हमने रिपोर्ट प्रकाशित की।", "First we collected the data, then we published the report."],
      ["नगर निगम ने दो दशक पहले सेंट्रल टर्मिनस का नवीनीकरण किया था।", "The municipal corporation renovated the central terminus two decades ago."],
      ["2018 में अंतरिक्ष एजेंसी ने इकतीस उपग्रहों को सफलतापूर्वक प्रक्षेपित किया।", "In 2018, the space agency successfully launched thirty-one satellites."],
      ["सुरक्षा लॉग की समीक्षा करने के बाद कारखाने ने तुरंत काम फिर से शुरू किया।", "After reviewing the safety logs, the factory resumed work immediately."],
      ["दस महीने पहले हमने नैदानिक परीक्षणों का तीसरा चरण शुरू किया था।", "Ten months ago, we initiated the third phase of clinical trials."],
      ["कल दोपहर पुरातत्व दल ने किले के पास प्राचीन शिलालेख खोजे।", "Yesterday afternoon, the archaeological team discovered ancient inscriptions near the fort."],
      ["वार्षिक बैठक समाप्त होने से पहले बोर्ड ने बजट की पुष्टि की।", "Before the annual meeting concluded, the board ratified the budget."],
      ["पिछली तिमाही में वित्त मंत्रालय ने व्यापक सुधारों की घोषणा की।", "Last quarter, the finance ministry announced comprehensive reforms."],
      ["2021 के अंत में राज्य सरकार ने चालीस सौर ग्रिड चालू किए।", "In late 2021, the state government commissioned forty solar grids."],
      ["The geological survey mapped the mineral deposits five years ago.", "भूवैज्ञानिक सर्वेक्षण ने पांच साल पहले खनिज भंडार का मानचित्रण किया था।"],
      ["First, the engineers isolated the damaged circuit; subsequently, they replaced it.", "पहले, इंजीनियरों ने क्षतिग्रस्त सर्किट को अलग किया; बाद में, उन्होंने इसे बदल दिया।"],
      ["We received the environmental clearance certificate two weeks ago.", "हमें दो सप्ताह पहले पर्यावरण मंजूरी प्रमाण पत्र प्राप्त हुआ था।"],
      ["Before the symposium commenced, the delegates received the conference itinerary.", "संगोष्ठी शुरू होने से पहले, प्रतिनिधियों को सम्मेलन का यात्रा कार्यक्रम प्राप्त हुआ।"],
      ["In October 2020, the healthcare foundation inaugurated a pediatric clinic.", "अक्टूबर 2020 में, स्वास्थ्य सेवा फाउंडेशन ने बाल चिकित्सा क्लिनिक का उद्घाटन किया।"],
      ["The transport authority completed the highway expansion project six months ago.", "परिवहन प्राधिकरण ने छह महीने पहले राजमार्ग विस्तार परियोजना पूरी की।"],
      ["After the storm subsided, rescue teams inspected the affected coastal villages.", "तूफान थमने के बाद, बचाव दलों ने प्रभावित तटीय गांवों का निरीक्षण किया।"],
      ["The university established the department of biotechnology three decades ago.", "विश्वविद्यालय ने तीन दशक पहले जैव प्रौद्योगिकी विभाग की स्थापना की थी।"],
      ["Did you submit the tax return before the deadline expired yesterday?", "क्या आपने कल समय सीमा समाप्त होने से पहले टैक्स रिटर्न दाखिल किया था?"],
      ["The literary society was founded in 1952 by eminent scholars.", "साहित्यिक समाज की स्थापना 1952 में प्रख्यात विद्वानों द्वारा की गई थी।"],
      ["हमने कल शाम तक सभी जरूरी औपचारिकताएं पूरी कर ली थीं।", "We completed all necessary formalities by yesterday evening."],
      ["चार दिन पहले उन्होंने एक नई सौर ऊर्जा नीति की घोषणा की।", "Four days ago, they announced a new solar energy policy."],
      ["क्या आपने पिछले महीने आयोजित कार्यशाला में भाग लिया था?", "Did you attend the workshop organized last month?"],
      ["The telecommunications company laid fiber optic cables across the valley in 2016.", "दूरसंचार कंपनी ने 2016 में पूरी घाटी में फाइबर ऑप्टिक केबल बिछाई थी।"],
      ["Initially they hesitated, but subsequently they approved the entire proposal.", "शुरू में वे हिचकिचाए, लेकिन बाद में उन्होंने पूरे प्रस्ताव को मंजूरी दे दी।"]
    ],
    28: [
      ["जब हम घाटी में ट्रेकिंग कर रहे थे तब अचानक बर्फीला तूफान शुरू हो गया।", "While we were trekking in the valley, an unexpected blizzard erupted suddenly."],
      ["जब शोध जहाज आर्कटिक में आगे बढ़ रहा था तब उन्होंने एक नीली व्हेल देखी।", "While the research vessel was navigating in the Arctic, they spotted a blue whale."],
      ["जब सूरज ढल रहा था तब गाइड ने मध्ययुगीन किंवदंतियां सुनाईं।", "As the sun was setting, the guide shared medieval legends."],
      ["जब डेवलपर्स भुगतान गेटवे को डीबग कर रहे थे तब सुरक्षा चेतावनी चमकी।", "While the developers were debugging the payment gateway, a security alert flashed."],
      ["मैं पुरानी तस्वीरें देख रहा था जब मुझे 1942 का एक हस्तलिखित पत्र मिला।", "I was looking at old photographs when I discovered a handwritten letter from 1942."],
      ["जब सर्जन ऑपरेशन कर रहे थे तब अस्पताल का बैकअप जनरेटर शुरू हुआ।", "While the surgeons were operating, the hospital backup generator started."],
      ["जब प्रतिनिधि बहस कर रहे थे तब नवीकरणीय वित्तपोषण पर आम सहमति बनी।", "While the delegates were debating, a consensus emerged on renewable financing."],
      ["जब वे कैमरा ट्रैप लगा रहे थे तब एक बाघ का बच्चा मैदान के पास आया।", "While they were setting up camera traps, a tiger cub approached the clearing."],
      ["जब हम प्लेटफॉर्म पर इंतजार कर रहे थे तब स्टेशन मास्टर ने विशेष ट्रेन की घोषणा की।", "While we were waiting on the platform, the station master announced a special train."],
      ["खगोलशास्त्री टेलीस्कोप को कैलिब्रेट कर रहे थे जब उन्होंने एक असामान्य संकेत पाया।", "The astronomers were calibrating the telescope when they detected an unusual signal."],
      ["The wildlife biologists were recording bird calls when a leopard appeared.", "वन्यजीव जीवविज्ञानी पक्षियों की आवाज़ रिकॉर्ड कर रहे थे जब एक तेंदुआ दिखाई दिया।"],
      ["While we were driving through the mountain pass, dense fog enveloped the road.", "जब हम पहाड़ी दर्रे से गाड़ी चला रहे थे, तब घने कोहरे ने सड़क को ढक लिया।"],
      ["The firefighters were evacuating the upper floors when the stairwell collapsed.", "दमकलकर्मी ऊपरी मंजिलों को खाली करा रहे थे जब सीढ़ियाँ ढह गईं।"],
      ["As the keynote speaker was concluding the lecture, the audience erupted in applause.", "जैसे ही मुख्य वक्ता व्याख्यान समाप्त कर रहे थे, दर्शकों ने तालियों की गड़गड़ाहट शुरू कर दी।"],
      ["The naval officers were inspecting the hull when they noticed a minor fissure.", "नौसेना के अधिकारी पतवार का निरीक्षण कर रहे थे जब उन्होंने एक छोटी दरार देखी।"],
      ["While the children were playing by the lakeside, they discovered a fossilized shell.", "जब बच्चे झील के किनारे खेल रहे थे, तब उन्हें एक जीवाश्मित खोल मिला।"],
      ["The meteorologists were tracking the tropical storm when the radar feed froze.", "मौसम विज्ञानी उष्णकटिबंधीय तूफान पर नजर रख रहे थे जब रडार फीड बंद हो गई।"],
      ["I was writing my doctoral dissertation when the earthquake shook the library.", "मैं अपना डॉक्टरेट शोध प्रबंध लिख रहा था जब भूकंप ने पुस्तकालय को हिला दिया।"],
      ["While the artisans were carving the marble pillar, a VIP delegation arrived.", "जब कारीगर संगमरमर के खंभे पर नक्काशी कर रहे थे, तब एक वीआईपी प्रतिनिधिमंडल पहुंचा।"],
      ["The train was moving at full speed when the emergency brake engaged automatically.", "ट्रेन पूरी गति से चल रही थी जब आपातकालीन ब्रेक अपने आप लग गया।"],
      ["जब मैं खाना बना रहा था तब अचानक डोरबेल बजी।", "While I was cooking dinner, the doorbell suddenly rang."],
      ["जब छात्र परीक्षा लिख रहे थे तब बिजली चली गई।", "The electricity went out while the students were writing the examination."],
      ["क्या आप गाड़ी चला रहे थे जब वह तेज आंधी आई?", "Were you driving when that severe storm hit?"],
      ["While the technicians were testing the turbine, an unusual vibration occurred.", "जब तकनीशियन टरबाइन का परीक्षण कर रहे थे, तब एक असामान्य कंपन हुआ।"],
      ["The mountaineers were resting at the base camp when an avalanche roared in the distance.", "पर्वतारोही बेस कैंप में आराम कर रहे थे जब दूर एक हिमस्खलन की गड़गड़ाहट हुई।"]
    ],
    29: [
      ["एक साधारण गाँव में जन्मे डॉ. कलाम ने भारत के अंतरिक्ष कार्यक्रम का नेतृत्व किया।", "Born in a humble village, Dr. Kalam pioneered India's space program."],
      ["1913 में रवींद्रनाथ टैगोर साहित्य में नोबेल पुरस्कार जीतने वाले पहले गैर-यूरोपीय बने।", "In 1913, Rabindranath Tagore became the first non-European to win the Nobel Prize in Literature."],
      ["उन्होंने भारत में कैंसर संस्थान स्थापित करने से पहले विदेश में पढ़ाई पूरी की।", "She completed her studies abroad before establishing a cancer institute in India."],
      ["उस प्रसिद्ध वास्तुकार ने कई प्रतिष्ठित इमारतों को डिजाइन किया।", "That renowned architect designed several iconic buildings."],
      ["मुख्य न्यायाधीश के रूप में उन्होंने मौलिक अधिकारों की रक्षा करने वाले ऐतिहासिक निर्णय लिखे।", "As chief justice, he authored landmark judgments safeguarding fundamental rights."],
      ["उन्नीसवीं सदी में समाज सुधारकों ने महिलाओं के लिए कई स्कूल खोले।", "In the nineteenth century, social reformers opened several schools for women."],
      ["उन्होंने अंतरराष्ट्रीय कानून में आने से पहले पंद्रह साल नौसेना में सेवा की।", "He served in the navy for fifteen years before entering international law."],
      ["महान गणितज्ञ ने अस्सी अभूतपूर्व प्रमेय प्रकाशित किए।", "The great mathematician published eighty groundbreaking theorems."],
      ["उन्होंने लुप्तप्राय बोलियों के दस्तावेजीकरण के लिए चार दशक समर्पित किए।", "She dedicated four decades to documenting endangered dialects."],
      ["उनके नेतृत्व में कंपनी ने दो दशकों में चालीस देशों में विस्तार किया।", "Under his leadership, the company expanded into forty countries in two decades."],
      ["Dr. C.V. Raman discovered the Raman Effect in Kolkata in February 1928.", "डॉ. सी.वी. रमन ने फरवरी 1928 में कोलकाता में रमन प्रभाव की खोज की थी।"],
      ["She overcame immense economic adversity to become a pioneering neurosurgeon.", "वह एक अग्रणी न्यूरोसर्जन बनने के लिए अत्यधिक आर्थिक प्रतिकूलताओं से उबरीं।"],
      ["During his distinguished diplomatic career, he negotiated crucial peace treaties.", "अपने विशिष्ट राजनयिक करियर के दौरान, उन्होंने महत्वपूर्ण शांति संधियों पर बातचीत की।"],
      ["The visionary industrialist established India's first modern steel manufacturing plant.", "दूरदर्शी उद्योगपति ने भारत का पहला आधुनिक इस्पात निर्माण संयंत्र स्थापित किया।"],
      ["He graduated with first-class honors from the prestigious government engineering college.", "उन्होंने प्रतिष्ठित सरकारी इंजीनियरिंग कॉलेज से प्रथम श्रेणी सम्मान के साथ स्नातक किया।"],
      ["She authored six influential monographs on Himalayan glacial ecology.", "उन्होंने हिमालयी हिमनद पारिस्थितिकी पर छह प्रभावशाली मोनोग्राफ लिखे।"],
      ["The veteran freedom fighter spent eight years in colonial prisons.", "अनुभवी स्वतंत्रता सेनानी ने औपनिवेशिक जेलों में आठ साल बिताए।"],
      ["Under her visionary stewardship, the university rose to international prominence.", "उनके दूरदर्शी प्रबंधन के तहत, विश्वविद्यालय अंतरराष्ट्रीय स्तर पर प्रमुखता से उभरा।"],
      ["He retired from public service after thirty-five years of unblemished integrity.", "वह पैंतीस साल की निष्कलंक सत्यनिष्ठा के बाद सार्वजनिक सेवा से सेवानिवृत्त हुए।"],
      ["The legendary vocalist trained under master classical exponents from an early age.", "महान गायक ने कम उम्र से ही उस्ताद शास्त्रीय प्रतिपादकों के तहत प्रशिक्षण लिया।"],
      ["उन्होंने अपना पूरा जीवन आदिवासी शिक्षा के उत्थान के लिए समर्पित कर दिया।", "He dedicated his entire life to the upliftment of tribal education."],
      ["1950 में उन्होंने एक स्वतंत्र शोध पत्रिका की स्थापना की।", "In 1950, they established an independent research journal."],
      ["क्या उन्होंने इस प्रतिष्ठित संस्थान का नेतृत्व किया था?", "Did she lead this prestigious institution?"],
      ["The pioneering botanist classified over five hundred rare tropical plant species.", "अग्रणी वनस्पतिशास्त्री ने पांच सौ से अधिक दुर्लभ उष्णकटिबंधीय पौधों की प्रजातियों को वर्गीकृत किया।"],
      ["Throughout his life, he championed sustainable rural self-reliance.", "जीवन भर उन्होंने संधारणीय ग्रामीण आत्मनिर्भरता का समर्थन किया।"]
    ],
    30: [
      ["यद्यपि टीम को चुनौतियों का सामना करना पड़ा, उन्होंने एक सफल प्रोटोटाइप विकसित किया।", "Although the team faced challenges, they developed a successful prototype."],
      ["जब लेखा परीक्षक फाइलों की समीक्षा कर रहे थे तब उन्हें वित्तीय अनियमितताएं मिलीं।", "While the auditors were reviewing the files, they found financial irregularities."],
      ["क्या संसदीय आयोग ने जांच की कि बजट अधिक क्यों हो गया?", "Did the parliamentary commission investigate why the budget exceeded?"],
      ["यह प्राचीन बंदरगाह मसाला व्यापार का प्राथमिक केंद्र हुआ करता था।", "This ancient harbor used to be the primary hub for the spice trade."],
      ["सर्जन द्वारा उपकरणों को कीटाणुरहित करने के बाद टीम ने प्रत्यारोपण पूरा किया।", "After the surgeon sanitized the instruments, the team completed the transplant."],
      ["रक्षा मंत्रालय ने तीन साल पहले स्वदेशी ड्रोन खरीदने की सिफारिश क्यों की थी?", "Why did the defense ministry recommend procuring indigenous drones three years ago?"],
      ["जब मौसम विज्ञानी दबाव का विश्लेषण कर रहे थे तब एक शक्तिशाली चक्रवात बना।", "While meteorologists were analyzing pressure, a powerful cyclone formed."],
      ["पारंपरिक समुदाय सूखे से बचने के लिए भूमिगत अन्न भंडारों में अनाज रखते थे।", "Traditional communities would store grain in underground granaries to survive droughts."],
      ["कंसोर्टियम ने तब तक संधि को अंतिम रूप नहीं दिया जब तक सीमा विवाद हल नहीं हुए।", "The consortium did not finalize the treaty until border disputes were resolved."],
      ["पहले इंजीनियरों ने सिमुलेशन किया, बाद में उन्होंने टरबाइन का निर्माण किया।", "First engineers conducted simulations, subsequently they manufactured the turbine."],
      ["The aerospace scientists finalized the satellite trajectory yesterday morning.", "एयरोस्पेस वैज्ञानिकों ने कल सुबह उपग्रह प्रक्षेपवक्र को अंतिम रूप दिया।"],
      ["Why did the municipal authority delay the water filtration upgrade project?", "नगर निगम प्राधिकरण ने जल निस्पंदन उन्नयन परियोजना में देरी क्यों की?"],
      ["While the students were attending the guest lecture, the campus fire alarm sounded.", "जब छात्र अतिथि व्याख्यान में भाग ले रहे थे, तब परिसर का फायर अलार्म बज उठा।"],
      ["Our ancestors used to harvest rainwater in stone stepwells across Rajasthan.", "हमारे पूर्वज राजस्थान में पत्थर की बावड़ियों में वर्षा जल का संचयन करते थे।"],
      ["The cybersecurity team didn't detect any data breach during the audit.", "साइबर सुरक्षा टीम को ऑडिट के दौरान किसी डेटा उल्लंघन का पता नहीं चला।"],
      ["In 1969, ISRO was formed to spearhead India's space research initiatives.", "1969 में, भारत की अंतरिक्ष अनुसंधान पहलों का नेतृत्व करने के लिए इसरो का गठन किया गया था।"],
      ["Did you consult the senior legal counsel before signing the joint venture contract?", "क्या आपने संयुक्त उद्यम अनुबंध पर हस्ताक्षर करने से पहले वरिष्ठ कानूनी सलाहकार से परामर्श किया था?"],
      ["The botanists were exploring the dense canopy when they discovered a new orchid species.", "वनस्पतिशास्त्री घने वितान की खोज कर रहे थे जब उन्होंने आर्किड की एक नई प्रजाति की खोज की।"],
      ["He used to commute by tram when he lived in Kolkata in the 1980s.", "1980 के दशक में जब वह कोलकाता में रहते थे, तब वह ट्राम से यात्रा करते थे।"],
      ["The state administration did not impose any additional commercial taxes this year.", "राज्य प्रशासन ने इस वर्ष कोई अतिरिक्त वाणिज्यिक कर नहीं लगाया।"],
      ["क्या आपने कल की अंतरराष्ट्रीय संगोष्ठी में भाग लिया था?", "Did you participate in yesterday's international symposium?"],
      ["जब हम प्रयोगशाला में थे तब बिजली का अचानक झटका लगा।", "A sudden power surge occurred while we were in the laboratory."],
      ["वे पहले इस पुराने बंगले में रहा करते थे, लेकिन अब वे विदेश में रहते हैं।", "They used to live in this old bungalow, but now they live abroad."],
      ["The research foundation published twelve peer-reviewed studies last academic year.", "रिसर्च फाउंडेशन ने पिछले शैक्षणिक वर्ष में बारह सहकर्मी-समीक्षित अध्ययन प्रकाशित किए।"],
      ["First, the technicians isolated the gas leak; then, they replaced the primary gasket.", "पहले, तकनीशियनों ने गैस रिसाव को अलग किया; फिर, उन्होंने प्राथमिक गैसकेट को बदल दिया।"]
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

// Generate 20 spoken phrases for Days 27, 28, 29, 30
function generateStage3SpokenPhrases(dayNum, config) {
  const phraseBank = {
    27: [
      ["Our company established this research division five years ago.", "हमारी कंपनी ने पांच साल पहले इस अनुसंधान प्रभाग की स्थापना की थी।", "/ˈaʊər ˈkʌm.pə.ni ɪˈstæb.lɪʃt ðɪs rɪˈsɜːtʃ dɪˈvɪʒ.ən faɪv jɪəz əˈɡəʊ/"],
      ["First, we examined the survey data; then, we drafted the policy.", "पहले हमने सर्वेक्षण डेटा की जांच की; फिर हमने नीति का मसौदा तैयार किया।", "/fɜːst wiː ɪɡˈzæm.ɪnd ðə ˈsɜː.veɪ ˈdeɪ.tə ðen wiː ˈdrɑːf.tɪd ðə ˈpɒl.ə.si/"],
      ["The space agency launched the satellite in late 2018.", "अंतरिक्ष एजेंसी ने 2018 के अंत में उपग्रह लॉन्च किया।", "/ðə speɪs ˈeɪ.dʒən.si lɔːntʃt ðə ˈsæt.əl.aɪt ɪn leɪt ˈtwen.ti ˈeɪˈtiːn/"],
      ["The factory resumed normal operations after the safety audit.", "सुरक्षा ऑडिट के बाद कारखाने ने सामान्य संचालन फिर से शुरू किया।", "/ðə ˈfæk.tər.i rɪˈzjuːmd ˈnɔː.məl ˌɒp.ərˈeɪ.ʃənz ˈɑːf.tər ðə ˈseɪf.ti ˈɔː.dɪt/"],
      ["We received the official clearance certificate two weeks ago.", "हमें दो सप्ताह पहले आधिकारिक मंजूरी प्रमाण पत्र प्राप्त हुआ था।", "/wiː rɪˈsiːvd ði əˈfɪʃ.əl ˈklɪə.rəns səˈtɪf.ɪ.kət tuː wiːks əˈɡəʊ/"],
      ["Before the meeting concluded, the board approved the budget.", "बैठक समाप्त होने से पहले बोर्ड ने बजट को मंजूरी दी।", "/bɪˈfɔː ðə ˈmiː.tɪŋ kənˈkluː.dɪd ðə bɔːd əˈpruːvd ðə ˈbʌdʒ.ɪt/"],
      ["Last quarter, the finance ministry announced major tax relief.", "पिछली तिमाही में वित्त मंत्रालय ने बड़ी कर राहत की घोषणा की।", "/lɑːst ˈkwɔː.tər ðə faɪˈnæn.ʃəl ˈmɪn.ɪ.stri əˈnaʊnst ˈmeɪ.dʒər tæks rɪˈliːf/"],
      ["The archaeological team discovered ancient ruins three months ago.", "पुरातत्व दल ने तीन महीने पहले प्राचीन खंडहरों की खोज की थी।", "/ði ˌɑː.ki.əˈlɒdʒ.ɪ.kəl tiːm dɪˈskʌv.əd ˈeɪn.ʃənt ˈruː.ɪnz θriː mʌnθs əˈɡəʊ/"],
      ["First, we isolated the faulty valve; subsequently, we replaced it.", "पहले हमने खराब वाल्व को अलग किया; बाद में हमने इसे बदल दिया।", "/fɜːst wiː ˈaɪ.sə.leɪ.tɪd ðə ˈfɒl.ti vælv ˈsʌb.sɪ.kwənt.li wiː rɪˈpleɪst ɪt/"],
      ["The university founded this library over six decades ago.", "विश्वविद्यालय ने छह दशक पहले इस पुस्तकालय की स्थापना की थी।", "/ðə ˌjuː.nɪˈvɜː.sə.ti ˈfaʊn.dɪd ðɪs ˈlaɪ.brər.i ˈəʊ.vər sɪks ˈdek.eɪdz əˈɡəʊ/"],
      ["Did you submit the research paper before yesterday's deadline?", "क्या आपने कल की समय सीमा से पहले शोध पत्र जमा किया था?", "/dɪd juː səbˈmɪt ðə rɪˈsɜːtʃ ˈpeɪ.pər bɪˈfɔː ˈjes.tə.deɪz ˈded.laɪn/"],
      ["The municipal corporation renovated the central avenue last year.", "नगर निगम ने पिछले साल सेंट्रल एवेन्यू का नवीनीकरण किया।", "/ðə mjuːˈnɪs.ɪ.pəl ˌkɔː.pərˈeɪ.ʃən ˈren.ə.veɪ.tɪd ðə ˈsen.trəl ˈæv.ə.njuː lɑːst jɪər/"],
      ["We initiated clinical trials ten months ago in Bengaluru.", "हमने दस महीने पहले बेंगलुरु में नैदानिक परीक्षण शुरू किए थे।", "/wiː ɪˈnɪʃ.i.eɪ.tɪd ˈklɪn.ɪ.kəl ˈtraɪ.əlz ten mʌnθs əˈɡəʊ ɪn ˌbeŋ.ɡəˈlʊə.ruː/"],
      ["After reviewing the contractual terms, both parties signed.", "संविदात्मक शर्तों की समीक्षा के बाद, दोनों पक्षों ने हस्ताक्षर किए।", "/ˈɑːf.tər rɪˈvjuː.ɪŋ ðə kənˈtræk.tʃu.əl tɜːmz bəʊθ ˈpɑː.tiz saɪnd/"],
      ["The medical foundation inaugurated the new pediatric ward in 2021.", "मेडिकल फाउंडेशन ने 2021 में नए बाल चिकित्सा वार्ड का उद्घाटन किया।", "/ðə ˈmed.ɪ.kəl faʊnˈdeɪ.ʃən ɪˈnɔː.ɡjʊ.reɪ.tɪd ðə njuː ˌpiː.diˈæt.rɪk wɔːd ɪn ˈtwen.ti ˈtwen.ti wʌn/"],
      ["Did you notice the sudden drop in temperature last night?", "क्या आपने कल रात तापमान में अचानक गिरावट देखी?", "/dɪd juː ˈnəʊ.tɪs ðə ˈsʌd.ən drɒp ɪn ˈtem.prə.tʃər lɑːst naɪt/"],
      ["Initially we were skeptical, but subsequently we agreed.", "शुरू में हमें संदेह था, लेकिन बाद में हम सहमत हो गए।", "/ɪˈnɪʃ.əl.i wiː wɜːr ˈskep.tɪ.kəl bʌt ˈsʌb.sɪ.kwənt.li wiː əˈɡriːd/"],
      ["The telecom consortium laid submarine cables four years ago.", "टेलीकॉम कंसोर्टियम ने चार साल पहले पनडुब्बी केबल बिछाई थी।", "/ðə ˈtel.ɪ.kɒm kənˈsɔː.ti.əm leɪd ˈsʌb.mə.riːn ˈkeɪ.bəlz fɔːr jɪəz əˈɡəʊ/"],
      ["He completed his postgraduate residency in early 2019.", "उन्होंने 2019 की शुरुआत में अपनी स्नातकोत्तर रेजीडेंसी पूरी की।", "/hiː kəmˈpliː.tɪd hɪz ˌpəʊstˈɡrædʒ.u.ət ˈrez.ɪ.dən.si ɪn ˈɜː.li ˈtwen.ti ˈnaɪnˈtiːn/"],
      ["The government commissioned thirty solar parks three years ago.", "सरकार ने तीन साल पहले तीस सौर पार्क चालू किए थे।", "/ðə ˈɡʌv.ən.mənt kəˈmɪʃ.ənd ˈθɜː.ti ˈsəʊ.lər pɑːks θriː jɪəz əˈɡəʊ/"]
    ],
    28: [
      ["While we were trekking in the hills, a sudden storm hit.", "जब हम पहाड़ियों में ट्रेकिंग कर रहे थे, तब एक अचानक तूफान आया।", "/waɪl wiː wɜːr ˈtrek.ɪŋ ɪn ðə hɪlz ə ˈsʌd.ən stɔːm hɪt/"],
      ["The marine biologists spotted a blue whale during the expedition.", "समुद्री जीवविज्ञानियों ने अभियान के दौरान एक नीली व्हेल देखी।", "/ðə məˈriːn baɪˈɒl.ə.dʒɪsts ˈspɒt.ɪd ə bluː weɪl ˈdjʊə.rɪŋ ði ˌek.spəˈdɪʃ.ən/"],
      ["As the sun was setting, the guide narrated historical tales.", "जैसे ही सूरज ढल रहा था, गाइड ने ऐतिहासिक कहानियां सुनाईं।", "/æz ðə sʌn wəz ˈset.ɪŋ ðə ɡaɪd nəˈreɪ.tɪd hɪˈstɒr.ɪ.kəl teɪlz/"],
      ["While developers were debugging the code, an alert popped up.", "जब डेवलपर्स कोड को डीबग कर रहे थे, तब एक अलर्ट पॉप अप हुआ।", "/waɪl dɪˈvel.ə.pəz wɜːr ˌdiːˈbʌɡ.ɪŋ ðə kəʊd ən əˈlɜːt pɒpt ʌp/"],
      ["I was browsing old archives when I found a rare letter.", "मैं पुराने अभिलेखागार देख रहा था जब मुझे एक दुर्लभ पत्र मिला।", "/aɪ wəz ˈbraʊ.zɪŋ əʊld ˈɑː.kaɪvz wen aɪ faʊnd ə reər ˈlet.ər/"],
      ["The surgeons were operating when the backup power engaged.", "सर्जन ऑपरेशन कर रहे थे जब बैकअप पावर शुरू हुई।", "/ðə ˈsɜː.dʒənz wɜːr ˈɒp.ər.eɪ.tɪŋ wen ðə ˈbæk.ʌp ˈpaʊ.ər ɪnˈɡeɪdʒd/"],
      ["While delegates were debating, a breakthrough was achieved.", "जब प्रतिनिधि बहस कर रहे थे, तब एक बड़ी सफलता हासिल हुई।", "/waɪl ˈdel.ɪ.ɡəts wɜːr dɪˈbeɪ.tɪŋ ə ˈbreɪk.θruː wəz əˈtʃiːvd/"],
      ["The wildlife team was setting camera traps when a tiger appeared.", "वन्यजीव टीम कैमरा ट्रैप लगा रही थी जब एक बाघ दिखाई दिया।", "/ðə ˈwaɪld.laɪf tiːm wəz ˈset.ɪŋ ˈkæm.rə træps wen ə ˈtaɪ.ɡər əˈpɪəd/"],
      ["While waiting at the platform, we heard the announcement.", "प्लेटफॉर्म पर इंतजार करते हुए हमने घोषणा सुनी।", "/waɪl ˈweɪ.tɪŋ æt ðə ˈplæt.fɔːm wiː hɜːd ði əˈnaʊns.mənt/"],
      ["The astronomers were calibrating lenses when the signal arrived.", "खगोलशास्त्री लेंस को कैलिब्रेट कर रहे थे जब संकेत आया।", "/ði əˈstrɒn.ə.məz wɜːr ˈkæl.ɪ.breɪ.tɪŋ ˈlen.zɪz wen ðə ˈsɪɡ.nəl əˈraɪvd/"],
      ["The firefighters were rescuing residents when the roof caved in.", "दमकलकर्मी निवासियों को बचा रहे थे जब छत ढह गई।", "/ðə ˈfaɪəˌfaɪ.təz wɜːr ˈres.kjuː.ɪŋ ˈrez.ɪ.dənts wen ðə ruːf keɪvd ɪn/"],
      ["While we were driving through fog, the headlights flickered.", "जब हम कोहरे में गाड़ी चला रहे थे, तब हेडलाइट्स टिमटिमाईं।", "/waɪl wiː wɜːr ˈdraɪ.vɪŋ θruː fɒɡ ðə ˈhed.laɪts ˈflɪk.əd/"],
      ["The crowd was cheering enthusiastically as the players entered.", "जैसे ही खिलाड़ी दाखिल हुए, भीड़ उत्साह से जयकार कर रही थी।", "/ðə kraʊd wəz ˈtʃɪə.rɪŋ ɪnˌθjuː.ziˈæs.tɪ.kəl.i æz ðə ˈpleɪ.əz ˈen.təd/"],
      ["While the artists were painting the mural, a VIP arrived.", "जब कलाकार भित्तिचित्र बना रहे थे, तब एक वीआईपी पहुंचे।", "/waɪl ði ˈɑː.tɪsts wɜːr ˈpeɪn.tɪŋ ðə ˈmjʊə.rəl ə ˌviː.aɪˈpiː əˈraɪvd/"],
      ["The train was moving at full speed when brakes slammed on.", "ट्रेन पूरी गति से चल रही थी जब अचानक ब्रेक लग गए।", "/ðə treɪn wəz ˈmuː.vɪŋ æt fʊl spiːd wen breɪks slæmd ɒn/"],
      ["I was writing my thesis when the earthquake tremor hit.", "मैं अपनी थीसिस लिख रहा था जब भूकंप का झटका लगा।", "/aɪ wəz ˈraɪ.tɪŋ maɪ ˈθiː.sɪs wen ði ˈɜːθ.kweɪk ˈtrem.ər hɪt/"],
      ["The meteorologists were tracking the cyclone when radar cut out.", "मौसम विज्ञानी चक्रवात पर नजर रख रहे थे जब रडार कट गया।", "/ðə ˌmiː.ti.əˈrɒl.ə.dʒɪsts wɜːr ˈtræk.ɪŋ ðə ˈsaɪ.kləʊn wen ˈreɪ.dɑː kʌt aʊt/"],
      ["While we were exploring the cave, we found ancient carvings.", "जब हम गुफा की खोज कर रहे थे, तब हमें प्राचीन नक्काशी मिली।", "/waɪl wiː wɜːr ɪkˈsplɔː.rɪŋ ðə keɪv wiː faʊnd ˈeɪn.ʃənt ˈkɑː.vɪŋz/"],
      ["The pilot was maneuvering through storm clouds when calm returned.", "पायलट तूफानी बादलों के बीच पैंतरेबाज़ी कर रहा था जब शांति लौटी।", "/ðə ˈpaɪ.lət wəz məˈnuː.və.rɪŋ θruː stɔːm klaʊdz wen kɑːm rɪˈtɜːnd/"],
      ["As the music was swelling, the curtain dropped gracefully.", "जैसे ही संगीत तेज हुआ, पर्दा शालीनता से गिर गया।", "/æz ðə ˈmjuː.zɪk wəz ˈswel.ɪŋ ðə ˈkɜː.tən drɒpt ˈɡreɪs.fəl.i/"]
    ],
    29: [
      ["Dr. Kalam pioneered India's space and defense programs.", "डॉ. कलाम ने भारत के अंतरिक्ष और रक्षा कार्यक्रमों का नेतृत्व किया।", "/ˈdɒk.tər kəˈlɑːm ˌpaɪəˈnɪəd ˈɪn.di.əz speɪs ænd dɪˈfens ˈprəʊ.ɡræmz/"],
      ["Tagore won the Nobel Prize in Literature in 1913.", "टैगोर ने 1913 में साहित्य में नोबेल पुरस्कार जीता।", "/tæˈɡɔːr wʌn ðə nəʊˈbel praɪz ɪn ˈlɪt.rə.tʃər ɪn ˈnaɪnˈtiːn ˈθɜːˈtiːn/"],
      ["She studied in Cambridge before establishing the hospital.", "उन्होंने अस्पताल की स्थापना से पहले कैम्ब्रिज में अध्ययन किया।", "/ʃiː ˈstʌd.id ɪn ˈkeɪm.brɪdʒ bɪˈfɔːr ɪˈstæb.lɪʃ.ɪŋ ðə ˈhɒs.pɪ.təl/"],
      ["The architect designed iconic modernist landmarks across Asia.", "वास्तुकार ने पूरे एशिया में प्रतिष्ठित आधुनिक स्थलों को डिजाइन किया।", "/ði ˈɑː.kɪ.tekt dɪˈzaɪnd aɪˈkɒn.ɪk ˈmɒd.ən.ɪst ˈlænd.mɑːks əˈkrɒs ˈeɪ.ʒə/"],
      ["He authored landmark constitutional rulings as Chief Justice.", "उन्होंने मुख्य न्यायाधीश के रूप में ऐतिहासिक संवैधानिक निर्णय लिखे।", "/hiː ˈɔː.θəd ˈlænd.mɑːk ˌkɒn.stɪˈtjuː.ʃən.əl ˈruː.lɪŋz æz tʃiːf ˈdʒʌs.tɪs/"],
      ["Social reformers founded pioneering colleges for girls in the 1800s.", "समाज सुधारकों ने 1800 के दशक में लड़कियों के लिए अग्रणी कॉलेज स्थापित किए।", "/ˈsəʊ.ʃəl rɪˈfɔː.məz ˈfaʊn.dɪd ˌpaɪəˈnɪə.rɪŋ ˈkɒl.ɪ.dʒɪz fɔː ɡɜːlz ɪn ði ˈeɪˈtiːn ˈhʌn.drədz/"],
      ["He served fifteen years in the merchant navy before law school.", "लॉ स्कूल से पहले उन्होंने मर्चेंट नेवी में पंद्रह साल सेवा की।", "/hiː sɜːvd ˌfɪfˈtiːn jɪəz ɪn ðə ˈmɜː.tʃənt ˈneɪ.vi bɪˈfɔː lɔː skuːl/"],
      ["The mathematician published eighty groundbreaking theorems.", "गणितज्ञ ने अस्सी अभूतपूर्व प्रमेय प्रकाशित किए।", "/ðə ˌmæθ.əm.əˈtɪʃ.ən ˈpʌb.lɪʃt ˈeɪ.ti ˈbreɪk.θruː ˈθɪə.rəmz/"],
      ["She dedicated four decades to tribal linguistic research.", "उन्होंने जनजातीय भाषाई अनुसंधान के लिए चार दशक समर्पित किए।", "/ʃiː ˈded.ɪ.keɪ.tɪd fɔː ˈdek.eɪdz tuː ˈtraɪ.bəl lɪŋˈɡwɪs.tɪk rɪˈsɜːtʃ/"],
      ["The company expanded into forty global markets in twenty years.", "कंपनी ने बीस वर्षों में चालीस वैश्विक बाजारों में विस्तार किया।", "/ðə ˈkʌm.pə.ni ɪkˈspæn.dɪd ˈɪn.tuː ˈfɔː.ti ˈɡləʊ.bəl ˈmɑː.kɪts ɪn ˈtwen.ti jɪəz/"],
      ["Dr. Raman discovered the Raman Effect in Kolkata in 1928.", "डॉ. रमन ने 1928 में कोलकाता में रमन प्रभाव की खोज की थी।", "/ˈdɒk.tər ˈrɑː.mən dɪˈskʌv.əd ðə ˈrɑː.mən ɪˈfekt ɪn kɒlˈkɑː.tə ɪn ˈnaɪnˈtiːn ˈtwen.ti eɪt/"],
      ["She overcame immense hardships to become a renowned surgeon.", "वह एक प्रसिद्ध सर्जन बनने के लिए भारी कठिनाइयों से उबरीं।", "/ʃiː ˌəʊ.vəˈkeɪm ɪˈmens ˈhɑːd.ʃɪps tuː bɪˈkʌm ə rɪˈnaʊnd ˈsɜː.dʒən/"],
      ["He negotiated historic peace accords during his diplomatic tenure.", "उन्होंने अपने राजनयिक कार्यकाल के दौरान ऐतिहासिक शांति समझौतों पर बातचीत की।", "/hiː nɪˈɡəʊ.ʃi.eɪ.tɪd hɪˈstɒr.ɪk piːs əˈkɔːdz ˈdjʊə.rɪŋ hɪz ˌdɪp.ləˈmæt.ɪk ˈten.jər/"],
      ["The industrialist built India's first integrated steel plant.", "उद्योगपति ने भारत का पहला एकीकृत इस्पात संयंत्र बनाया।", "/ði ɪnˈdʌs.tri.ə.lɪst bɪlt ˈɪn.di.əz fɜːst ˈɪn.tɪ.ɡreɪ.tɪd stiːl plɑːnt/"],
      ["He graduated with highest distinction from Presidency College.", "उन्होंने प्रेसीडेंसी कॉलेज से सर्वोच्च विशिष्टता के साथ स्नातक किया।", "/hiː ˈɡrædʒ.u.eɪ.tɪd wɪð ˈhaɪ.ɪst dɪˈstɪŋk.ʃən frəm ˈprez.ɪ.dən.si ˈkɒl.ɪdʒ/"],
      ["She authored six influential monographs on mountain ecology.", "उन्होंने पर्वतीय पारिस्थितिकी पर छह प्रभावशाली मोनोग्राफ लिखे।", "/ʃiː ˈɔː.θəd sɪks ˌɪn.fluˈen.ʃəl ˈmɒn.ə.ɡrɑːfs ɒn ˈmaʊn.tɪn iˈkɒl.ə.dʒi/"],
      ["The freedom fighter endured eight years in colonial prisons.", "स्वतंत्रता सेनानी ने औपनिवेशिक जेलों में आठ साल झेले।", "/ðə ˈfriː.dəm ˈfaɪ.tər ɪnˈdjʊəd eɪt jɪəz ɪn kəˈləʊ.ni.əl ˈprɪz.ənz/"],
      ["Under her leadership, the institution gained global renown.", "उनके नेतृत्व में संस्थान ने वैश्विक ख्याति प्राप्त की।", "/ˈʌn.dər hɜː ˈliː.də.ʃɪp ði ˌɪn.stɪˈtjuː.ʃən ɡeɪnd ˈɡləʊ.bəl rɪˈnaʊn/"],
      ["He retired after thirty-five years of dedicated civil service.", "वह पैंतीस साल की समर्पित नागरिक सेवा के बाद सेवानिवृत्त हुए।", "/hiː rɪˈtaɪəd ˈɑːf.tər ˈθɜː.ti faɪv jɪəz əv ˈded.ɪ.keɪ.tɪd ˈsɪv.əl ˈsɜː.vɪs/"],
      ["The vocalist trained under renowned classical maestros in Gwalior.", "गायक ने ग्वालियर में प्रसिद्ध शास्त्रीय उस्तादों के तहत प्रशिक्षण लिया।", "/ðə ˈvəʊ.kəl.ɪst treɪnd ˈʌn.dər rɪˈnaʊnd ˈklæs.ɪ.kəl ˈmaɪ.strəʊz ɪn ˈɡwɑː.li.ɔː/"]
    ],
    30: [
      ["Although we faced obstacles, we finished the project last year.", "यद्यपि हमें बाधाओं का सामना करना पड़ा, हमने पिछले साल परियोजना पूरी की।", "/ɔːlˈðəʊ wiː feɪst ˈɒb.stə.kəlz wiː ˈfɪn.ɪʃt ðə ˈprɒdʒ.ekt lɑːst jɪər/"],
      ["While auditors reviewed accounts, they uncovered discrepancies.", "जब लेखा परीक्षकों ने खातों की समीक्षा की, तब उन्हें विसंगतियां मिलीं।", "/waɪl ˈɔː.dɪ.təz rɪˈvjuːd əˈkaʊnts ðeɪ ʌnˈkʌv.əd dɪˈskrep.ən.siz/"],
      ["Did the parliamentary committee investigate the budget surge?", "क्या संसदीय समिति ने बजट वृद्धि की जांच की?", "/dɪd ðə ˌpɑː.lɪˈmen.tər.i kəˈmɪt.i ɪnˈves.tɪ.ɡeɪt ðə ˈbʌdʒ.ɪt sɜːdʒ/"],
      ["This ancient harbor used to be the spice trade epicenter.", "यह प्राचीन बंदरगाह मसाला व्यापार का केंद्र हुआ करता था।", "/ðɪs ˈeɪn.ʃənt ˈhɑː.bər juːst tuː biː ðə spaɪs treɪd ˈep.ɪ.sen.tər/"],
      ["After doctors sanitized instruments, the surgery began.", "डॉक्टरों द्वारा उपकरणों को साफ करने के बाद सर्जरी शुरू हुई।", "/ˈɑːf.tər ˈdɒk.təz ˈsæn.ɪ.taɪzd ˈɪn.strə.mənts ðə ˈsɜː.dʒər.i bɪˈɡæn/"],
      ["Why did the defense ministry procure surveillance drones?", "रक्षा मंत्रालय ने निगरानी ड्रोन क्यों खरीदे?", "/waɪ dɪd ðə dɪˈfens ˈmɪn.ɪ.stri prəˈkjʊə səˈveɪ.ləns drəʊnz/"],
      ["While analyzing pressure anomalies, a cyclone formed rapidly.", "दबाव की विसंगतियों का विश्लेषण करते हुए तेजी से चक्रवात बना।", "/waɪl ˈæn.əl.aɪ.zɪŋ ˈpreʃ.ər əˈnɒm.ə.liz ə ˈsaɪ.kləʊn fɔːmd ˈræp.ɪd.li/"],
      ["Ancient farmers would store surplus grain in underground vaults.", "प्राचीन किसान अतिरिक्त अनाज को भूमिगत तिजोरियों में रखते थे।", "/ˈeɪn.ʃənt ˈfɑː.məz wʊd stɔːr ˈsɜː.pləs ɡreɪn ɪn ˌʌn.dəˈɡraʊnd vɔːlts/"],
      ["The consortium didn't sign the treaty until disputes ended.", "विवाद समाप्त होने तक कंसोर्टियम ने संधि पर हस्ताक्षर नहीं किए।", "/ðə kənˈsɔː.ti.əm ˈdɪd.ənt saɪn ðə ˈtriː.ti ənˈtɪl dɪˈspjuːts ˈen.dɪd/"],
      ["First, we tested the engine; subsequently, we launched production.", "पहले हमने इंजन का परीक्षण किया; बाद में हमने उत्पादन शुरू किया।", "/fɜːst wiː ˈtes.tɪd ði ˈen.dʒɪn ˈsʌb.sɪ.kwənt.li wiː lɔːntʃt prəˈdʌk.ʃən/"],
      ["The aerospace engineers confirmed the flight path yesterday.", "एयरोस्पेस इंजीनियरों ने कल उड़ान पथ की पुष्टि की।", "/ði ˈeə.rəʊ.speɪs ˌen.dʒɪˈnɪəz kənˈfɜːmd ðə flaɪt pɑːθ ˈjes.tə.deɪ/"],
      ["Why did the transport department postpone the subway expansion?", "परिवहन विभाग ने सबवे विस्तार को क्यों स्थगित किया?", "/waɪ dɪd ðə ˈtræn.spɔːt dɪˈpɑːt.mənt pəʊstˈpəʊn ðə ˈsʌb.weɪ ɪkˈspæn.ʃən/"],
      ["While attendees listened to the lecture, the alarm sounded.", "जब उपस्थित लोग व्याख्यान सुन रहे थे, तब अलार्म बज उठा।", "/waɪl əˌtenˈdiːz ˈlɪs.ənd tuː ðə ˈlek.tʃər ði əˈlɑːm ˈsaʊn.dɪd/"],
      ["We used to store water in large terracotta stepwells.", "हम पानी को बड़ी टेराकोटा बावड़ियों में संग्रहित करते थे।", "/wiː juːst tuː stɔːr ˈwɔː.tər ɪn lɑːdʒ ˌter.əˈkɒt.ə ˈstepˌwelz/"],
      ["The security audit did not reveal any unauthorized access.", "सुरक्षा ऑडिट में किसी अनधिकृत पहुंच का खुलासा नहीं हुआ।", "/ðə sɪˈkjʊə.rɪ.ti ˈɔː.dɪt dɪd nɒt rɪˈviːl ˈen.i ʌnˈɔː.θər.aɪzd ˈæk.ses/"],
      ["In 1969, India established its national space agency.", "1969 में, भारत ने अपनी राष्ट्रीय अंतरिक्ष एजेंसी की स्थापना की।", "/ɪn ˈnaɪnˈtiːn ˈsɪks.ti naɪn ˈɪn.di.ə ɪˈstæb.lɪʃt ɪts ˈnæʃ.ən.əl speɪs ˈeɪ.dʒən.si/"],
      ["Did you consult the senior architect before redesigning?", "क्या आपने फिर से डिजाइन करने से पहले वरिष्ठ वास्तुकार से परामर्श किया?", "/dɪd juː kənˈsʌlt ðə ˈsiː.ni.ər ˈɑː.kɪ.tekt bɪˈfɔː ˌriː.dɪˈzaɪ.nɪŋ/"],
      ["Botanists were surveying the canopy when they spotted the orchid.", "वनस्पतिशास्त्री वितान का सर्वेक्षण कर रहे थे जब उन्होंने आर्किड देखा।", "/ˈbɒt.ən.ɪsts wɜːr səˈveɪ.ɪŋ ðə ˈkæn.ə.pi wen ðeɪ ˈspɒt.ɪd ði ˈɔː.kɪd/"],
      ["He used to commute by electric tram throughout the 1980s.", "वह 1980 के दशक में इलेक्ट्रिक ट्राम से यात्रा करते थे।", "/hiː juːst tuː kəˈmjuːt baɪ ɪˈlek.trɪk træm θruːˈaʊt ðə ˈnaɪnˈtiːn ˈeɪ.tiz/"],
      ["The administration didn't levy any additional municipal tariffs.", "प्रशासन ने कोई अतिरिक्त नगरपालिका शुल्क नहीं लगाया।", "/ði ədˌmɪn.ɪˈstreɪ.ʃən ˈdɪd.ənt ˈlev.i ˈen.i əˈdɪʃ.ən.əl mjuːˈnɪs.ɪ.pəl ˈtær.ɪfs/"]
    ]
  };

  const list = phraseBank[dayNum];
  return list.map(([phraseEn, phraseHi, ipa], idx) => ({
    id: `d${String(dayNum).padStart(2, '0')}_sp_${String(idx + 1).padStart(2, '0')}`,
    phraseEn,
    phraseHi,
    ipa,
    context: `Mastery / Narrative Sequencing Context ${idx + 1}`,
    register: idx % 2 === 0 ? "Formal / Academic" : "Polite Standard",
    intonationPattern: "Decisive falling terminal cadence on narrative declarations"
  }));
}

// Build Days 27, 28, 29, 30
export async function buildDays27_30() {
  const priorLemmas = await getPriorLemmas();
  const configs = [day27_config, day28_config, day29_config, day30_config];
  const results = [];

  configs.forEach((cfg, idx) => {
    const dayNum = idx + 27;
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
        articulatoryMechanics: `Focus on clean prosodic rhythm and precise vowel timing. For Day ${dayNum}, articulate the phonetic target without Hindi retroflex or epenthetic vowel substitution.`,
        hindiSpeakerPhoneticTrap: cfg.phoneticTrap,
        minimalPairs: cfg.minimalPairs || [],
        prosodyFocus: "Rhythmic sentence stress on temporal markers and discourse connectives; falling terminal cadence on narrative declarations."
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
          { speaker: "Dr. Raman (Director)", textEn: "When did our research division publish the renewable energy report?", textHi: "हमारे अनुसंधान प्रभाग ने नवीकरणीय ऊर्जा रिपोर्ट कब प्रकाशित की?" },
          { speaker: "Aditi (Lead Investigator)", textEn: "We published the initial findings two weeks ago, and subsequently presented the econometric model at the international summit.", textHi: "हमने दो सप्ताह पहले प्रारंभिक निष्कर्ष प्रकाशित किए, और बाद में अंतरराष्ट्रीय शिखर सम्मेलन में अर्थमितीय मॉडल प्रस्तुत किया।" },
          { speaker: "Dr. Raman", textEn: "Did the delegates express any reservations during the presentation?", textHi: "क्या प्रस्तुति के दौरान प्रतिनिधियों ने कोई आपत्ति व्यक्त की?" },
          { speaker: "Aditi", textEn: "While some delegates were questioning the initial capital requirements, our team demonstrated long-term economic viability.", textHi: "जब कुछ प्रतिनिधि प्रारंभिक पूंजी आवश्यकताओं पर सवाल उठा रहे थे, तब हमारी टीम ने दीर्घकालिक आर्थिक व्यवहार्यता का प्रदर्शन किया।" }
        ],
        speakingTask: cfg.speakingTask || {
          taskTitle: `Oral Production Drill: ${cfg.titleEn}`,
          prompt: `Deliver a 2-minute structured professional monologue utilizing at least 5 new vocabulary terms from Day ${dayNum}, demonstrating correct temporal sequencing, narrative framing, and natural sentence intonation.`,
          fluencyRubric: [
            "Pronunciation & Intonation (Accurate phonetic target articulation)",
            "Grammatical Concord (Zero temporal or auxiliary errors)",
            "Lexical Richness (Seamless integration of 5+ target B1/B2 terms)",
            "Rhythm & Prosody (Natural content word stress and sequential cadence)"
          ],
          checklist: [
            "Did I use 'ago' correctly without '*before* X years' calques?",
            "Did I accurately sequence events with first, then, subsequently, after that?",
            "Did I avoid literal word-for-word Hindi calques?",
            "Did I maintain a confident, professional cadence?"
          ]
        }
      },
      assess: {
        writtenChecklist: [
          `Accurately apply temporal markers and narrative sequencing for ${cfg.titleEn}.`,
          `Identify and eliminate Hindi-English transfer errors like '*before two days*' or '*I was knowing*'.`,
          `Distinguish phonemic contrasts across all 10 minimal pair drills.`,
          `Integrate at least 10 new B1/B2 academic and professional vocabulary words in original written sentences.`,
          `Complete all 65 interactive practice items and 25 precision translations with >90% accuracy.`
        ],
        oralProductionTask: `Record a 2-minute spoken narrative, biographical profile, or project debriefing using the grammatical structures of Day ${dayNum}.`,
        benchmarks: [
          `Accurate past chronological sequencing without hesitation.`,
          `Seamless integration of 'ago', 'in [year]', and discourse markers.`,
          `100% correct past continuous background framing with past simple foreground actions.`,
          `Natural prosodic stress on discourse connectives and key milestones.`,
          `Seamless bilingual conceptual translation without literal syntactic calques.`
        ]
      },
      review: {
        spacedRepetitionTag: `Stage3_Day${dayNum}_${cfg.titleEn.split(' ')[0]}`,
        recommendedIntervalDays: [1, 3, 7, 14, 30],
        retrievalDrill: `Recall and produce 5 spontaneous sentences using target discourse markers and vocabulary from Day ${dayNum} within 60 seconds.`
      }
    };

    const outPath = path.join(process.cwd(), 'content_builder', `day${dayNum}.js`);
    fs.writeFileSync(outPath, `export const day${dayNum} = ${JSON.stringify(dayObj, null, 2)};\n`, 'utf-8');
    console.log(`[SUCCESS] Wrote complete content_builder/day${dayNum}.js (Vocab: ${vocabulary.length}, Exemplars: ${exemplars.length}, Exercises: ${exercises.length}, Translations: ${translationSet.length})`);
    results.push(dayObj);
  });

  return results;
}

if (process.argv[1]?.endsWith('build_stage3_days27_30.js')) {
  buildDays27_30().then(() => {
    console.log("\n[STAGE 3 BATCH 3 COMPLETE] Days 27–30 built and saved.");
  }).catch(err => {
    console.error("Error building Days 27-30:", err);
  });
}
