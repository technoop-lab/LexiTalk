import fs from 'fs';
import path from 'path';
import { getDay06Data } from './stage1_day06_data.js';
import { getDay07Data } from './stage1_day07_data.js';
import { getDay08Data } from './stage1_day08_data.js';
import { getDay09Data } from './stage1_day09_data.js';
import { getDay10Data } from './stage1_day10_data.js';

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

// ----------------------------------------------------------------------
// DAY 06 GENERATOR
// ----------------------------------------------------------------------
function buildDay06() {
  const { rawTerms } = getDay06Data();
  const vocabulary = rawTerms.map((term, i) => makeVocab(`d06_v${String(i + 1).padStart(2, '0')}`, term));

  const subjects = [
    ["I", "was", "मैं था/थी", "was not"],
    ["You", "were", "आप थे/तुम थे", "were not"],
    ["He", "was", "वह (पुरुष) था", "was not"],
    ["She", "was", "वह (स्त्री) थी", "was not"],
    ["It", "was", "यह था/थी", "was not"],
    ["We", "were", "हम थे", "were not"],
    ["They", "were", "वे थे", "were not"],
    ["Dr. Sharma", "was", "डॉ. शर्मा थे", "was not"],
    ["The engineers", "were", "इंजीनियर थे", "were not"],
    ["The meeting", "was", "बैठक थी", "was not"]
  ];

  const predicates = [
    ["at the headquarters yesterday morning", "कल सुबह मुख्यालय में", "Location"],
    ["busy with the annual budget audit", "वार्षिक बजट ऑडिट में व्यस्त", "Condition"],
    ["delighted with the project outcome", "प्रोजेक्ट के परिणाम से प्रसन्न", "Emotion"],
    ["present at the inauguration ceremony", "उद्घाटन समारोह में उपस्थित", "Presence"],
    ["absent from the department briefing", "विभाग की ब्रीफिंग से अनुपस्थित", "Absence"],
    ["responsible for the safety inspection", "सुरक्षा निरीक्षण के लिए ज़िम्मेदार", "Duty"],
    ["a senior consultant at the university", "विश्वविद्यालय में वरिष्ठ सलाहकार", "Profession"],
    ["very tired after the long journey", "लंबी यात्रा के बाद बहुत थका हुआ", "Physical State"],
    ["ready with the final compliance dossier", "अंतिम अनुपालन दस्तावेज़ के साथ तैयार", "Readiness"],
    ["in Bangalore for the technology conference", "प्रौद्योगिकी सम्मेलन के लिए बैंगलोर में", "Travel"]
  ];

  const bilingualExemplars = [];
  let idx = 1;
  subjects.forEach(([subj, verb, subjHi, negVerb]) => {
    predicates.forEach(([pred, predHi, cat]) => {
      const isNegative = idx % 3 === 0;
      const isQuestion = idx % 5 === 0;
      let en = `${subj} ${verb} ${pred}.`;
      let hi = `${subjHi} ${predHi}।`;
      let focus = "Past Affirmative State (was/were)";
      if (isNegative) {
        en = `${subj} ${negVerb} ${pred}.`;
        hi = `${subjHi} ${predHi} नहीं ${verb === 'was' ? 'था/थी' : 'थे'}।`;
        focus = "Past Negative State (was/were not)";
      } else if (isQuestion) {
        en = `${verb.charAt(0).toUpperCase() + verb.slice(1)} ${subj.toLowerCase()} ${pred}?`;
        hi = `क्या ${subjHi} ${predHi} ${verb === 'was' ? 'था/थी' : 'थे'}?`;
        focus = "Past Inversion Question (Was/Were + Subj?)";
      }

      bilingualExemplars.push({
        id: `d06_eg${String(idx).padStart(3, '0')}`,
        en,
        hi,
        breakdown: `${subj} [Subject] + ${isNegative ? negVerb : verb} [Past Copula] + ${pred} [Complement]`,
        category: cat,
        focusStructure: focus
      });
      idx++;
    });
  });

  const exercises = [];
  for (let i = 1; i <= 65; i++) {
    const exId = `d06_ex_${String(i).padStart(3, '0')}`;
    if (i <= 20) {
      const isSing = i % 2 !== 0;
      const subj = isSing ? (i % 4 === 1 ? "The director" : "She") : (i % 4 === 0 ? "The officers" : "We");
      const correct = isSing ? "was" : "were";
      const wrong = isSing ? "were" : "was";
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `Select the correct past form: "${subj} _____ present at the auditorium yesterday."`,
        options: [correct, wrong, "is", "are"],
        correctAnswer: correct,
        difficulty: "standard",
        skillTag: "Past Copula Agreement",
        explanationEn: `Singular subjects take 'was'; plural and second-person subjects take 'were'.`,
        explanationHi: `एकवचन कर्ता के साथ 'was' और बहुवचन कर्ता के साथ 'were' का प्रयोग होता है।`
      });
    } else if (i <= 40) {
      const isNeg = i % 2 === 0;
      const subj = i % 3 === 0 ? "They" : (i % 3 === 1 ? "I" : "The scientist");
      const correct = subj === "They" ? (isNeg ? "were not" : "were") : (isNeg ? "was not" : "was");
      exercises.push({
        id: exId,
        type: "fill_blank",
        prompt: `Fill in the blank: "${subj} _____ (${isNeg ? 'negative' : 'affirmative'} past state) in Mumbai last week."`,
        correctAnswer: correct,
        acceptableAlternatives: [correct, correct.replace(" not", "n't")],
        difficulty: "standard",
        skillTag: "Past Form Construction",
        explanationEn: `'${subj}' in the past takes '${correct}'.`,
        explanationHi: `भूतकाल में '${subj}' के साथ सही रूप '${correct}' आता है।`
      });
    } else if (i <= 55) {
      const wrong = i % 2 === 0 ? "He were absent yesterday." : "They was very happy with the results.";
      const right = i % 2 === 0 ? "He was absent yesterday." : "They were very happy with the results.";
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: `Correct the grammatical error: "${wrong}"`,
        correctAnswer: right,
        difficulty: "standard",
        skillTag: "Agreement Repair",
        explanationEn: `Singular takes 'was', plural takes 'were'.`,
        explanationHi: `एकवचन में 'was', बहुवचन में 'were' आता है।`
      });
    } else {
      exercises.push({
        id: exId,
        type: "transformation",
        prompt: `Transform into an interrogative question: "She was in Delhi last week."`,
        correctAnswer: "Was she in Delhi last week?",
        acceptableAlternatives: ["Was she in Delhi last week?"],
        difficulty: "standard",
        skillTag: "Inversion Question Formulation",
        explanationEn: `Invert subject and verb: "Was she in Delhi last week?"`,
        explanationHi: `प्रश्न बनाने के लिए 'Was' को कर्ता से पहले लाएं: "Was she in Delhi last week?"`
      });
    }
  }

  const translationSet = [
    ["कल रात मौसम बहुत सुहावना था।", "The weather was very pleasant last night."],
    ["क्या आप पिछले सोमवार को दफ़्तर में थे?", "Were you in the office last Monday?"],
    ["वे उस समय बहुत व्यस्त नहीं थे।", "They were not very busy at that time."],
    ["वह अपने समय का एक महान वैज्ञानिक था।", "He was a great scientist of his era."],
    ["हम सभी परिणाम से पूरी तरह संतुष्ट थे।", "We were all completely satisfied with the result."],
    ["क्या डॉ. शर्मा उस सम्मेलन में मुख्य वक्ता थे?", "Was Dr. Sharma the keynote speaker at that conference?"],
    ["पिछली तिमाही में हमारी टीम बहुत सफल रही थी।", "Our team was very successful in the last quarter."],
    ["वह इमारत प्राचीन काल में एक भव्य महल थी।", "That building was a grand palace in antiquity."],
    ["मेरे पूर्वज इस क्षेत्र में बहुत सम्मानित थे।", "My ancestors were highly respected in this region."],
    ["क्या आप कल दोपहर बैठक में उपस्थित थे?", "Were you present at the meeting yesterday afternoon?"],
    ["The previous manager was extremely methodical.", "पिछले प्रबंधक अत्यंत व्यवस्थित और नियमनिष्ठ थे।"],
    ["We were not aware of the change in schedule.", "हम समय-सारणी में हुए बदलाव से अवगत नहीं थे।"],
    ["Was the report ready before the deadline?", "क्या समय-सीमा समाप्त होने से पहले रिपोर्ट तैयार थी?"],
    ["The ancient ruins were protected by the heritage trust.", "प्राचीन खंडहर हेरिटेज ट्रस्ट द्वारा संरक्षित थे।"],
    ["She was the youngest researcher in the department.", "वह विभाग में सबसे युवा शोधकर्ता थी।"],
    ["They were once competitors, but now they are partners.", "वे कभी प्रतिस्पर्धी थे, लेकिन अब वे साझेदार हैं।"],
    ["It was a memorable milestone in our institutional history.", "यह हमारे संस्थान के इतिहास में एक यादगार मील का पत्थर था।"],
    ["Were the documents secure in the regional vault?", "क्या दस्तावेज़ क्षेत्रीय तिजोरी में सुरक्षित थे?"],
    ["He was not available for comment earlier today.", "वह आज कुछ समय पूर्व टिप्पणी के लिए उपलब्ध नहीं थे।"],
    ["The atmosphere in the auditorium was electric.", "सभागार का वातावरण अत्यंत उत्साहवर्धक और ऊर्जावान था।"],
    ["उस समय परिस्थिति हमारे नियंत्रण में नहीं थी।", "The situation was not under our control at that time."],
    ["क्या वे कल शाम आपके साथ थे?", "Were they with you yesterday evening?"],
    ["यह निर्णय हमारे भविष्य के लिए अत्यंत महत्वपूर्ण था।", "This decision was crucial for our future."],
    ["The preliminary audit findings were very encouraging.", "प्रारंभिक ऑडिट के निष्कर्ष बहुत उत्साहजनक थे।"],
    ["He was once the chief architect of this national monument.", "वह कभी इस राष्ट्रीय स्मारक के मुख्य वास्तुकार थे।"]
  ].map(([source, target], idx) => ({
    id: `d06_tr_${String(idx + 1).padStart(2, '0')}`,
    source,
    target,
    direction: idx < 10 || idx >= 20 ? "hi_to_en" : "en_to_hi",
    focusGrammar: "Past State Copula (Was / Were) & Temporal Precision"
  }));

  return {
    dayNumber: 6,
    id: "day_06",
    titleEn: "Past State of Being: Was / Were & Time Markers",
    titleHi: "भूतकाल की अवस्था और स्थिति: Was / Were तथा समय सूचक शब्द",
    cefr: "A1.1",
    estMinutes: 45,
    prerequisites: "Mastery of Present Be-Verbs (Is / Am / Are) from Days 1–5",
    objectivesEn: [
      "Master the distinction and grammatical agreement between singular past copula 'was' and plural/second-person copula 'were'.",
      "Form affirmative, negative, and interrogative sentences describing past states, professions, emotions, and locations without using action verbs.",
      "Accurately utilize past time adverbs (yesterday, last night, earlier today, ago, in the past).",
      "Master the phonetics of past regular suffix '-ed' (/t/, /d/, /ɪd/) and the aspiration of initial voiceless plosives /p, t, k/ [pʰ, tʰ, kʰ].",
      "Eliminate fossilized Indian English errors such as 'I was go there' or 'yesterday night'."
    ],
    objectivesHi: [
      "एकवचन भूतकालिक संयोजक क्रिया 'was' और बहुवचन/मध्यम पुरुष 'were' के बीच व्याकरणिक नियमों में निपुण होना।",
      "बिना किसी मुख्य क्रिया (Non-Action) के भूतकाल की स्थिति, पद, भावना, और स्थान का सकारात्मक, नकारात्मक और प्रश्नवाचक वर्णन करना।",
      "भूतकाल के समय सूचक शब्दों (yesterday, last night, earlier, ago) का सटीक और स्वाभाविक प्रयोग करना।",
      "अंग्रेजी में '-ed' प्रत्यय के तीन अलग-अलग उच्चारणों (/t/, /d/, /ɪd/) और स्पर्श व्यंजनों /p, t, k/ में वायु के झोंके (Aspiration) का अभ्यास करना।",
      "भारतीय अंग्रेजी की पुरानी गलतियों (जैसे 'yesterday night' या 'I was go') को हमेशा के लिए समाप्त करना।"
    ],
    teach: {
      hindiExplanation: `डे 06 में आपका स्वागत है! अब हम वर्तमान (is/am/are) से आगे बढ़कर **भूतकाल की अवस्था और स्थिति (Past State of Being)** को समझेंगे।

### 1. मूल व्याकरणिक संरचना (Core Syntax):
हिंदी में हम 'था', 'थी', 'थे', 'थीं' का प्रयोग करते हैं जो लिंग (Gender) और वचन (Number) पर निर्भर करते हैं। 
परन्तु **अंग्रेजी में क्रिया का लिंग से कोई संबंध नहीं होता!** अंग्रेजी में केवल **वचन (Number)** और **पुरुष (Person)** देखा जाता है:
- **WAS** का प्रयोग: **I, He, She, It, This, That** तथा सभी **एकवचन संज्ञाओं (Singular Nouns)** के साथ।
- **WERE** का प्रयोग: **You, We, They, These, Those** तथा सभी **बहुवचन संज्ञाओं (Plural Nouns)** के साथ।

### 2. तीन प्रमुख वाक्य प्रकार (Sentence Matrix):
1. **सकारात्मक (Affirmative)**: 
   - *I was in Delhi yesterday.* (मैं कल दिल्ली में था।)
   - *They were very happy.* (वे बहुत खुश थे।)
2. **नकारात्मक (Negative)**: 
   - *He was not (wasn't) at home.* (वह घर पर नहीं था।)
   - *We were not (weren't) ready.* (हम तैयार नहीं थे।)
3. **प्रश्नवाचक (Interrogative)**: 
   - *Were you in the office?* (क्या आप दफ़्तर में थे?)
   - *Where was Dr. Sharma?* (डॉ. शर्मा कहाँ थे?)

### 3. समय सूचक शब्द (Time Adverbs):
- ✔️ **Last night** (कल रात) — ❌ *Yesterday night* कभी न कहें!
- ✔️ **Yesterday morning / afternoon / evening** (कल सुबह / दोपहर / शाम)
- ✔️ **Two days ago** (दो दिन पहले)
- ✔️ **Earlier today** (आज कुछ समय पहले)`,
      englishExplanation: `Welcome to Day 06! This lesson marks the transition into past-tense state attribution, focusing on the past copula *was* and *were*.

Key Linguistic Concepts:
1. **Person-Number Agreement**: Unlike Hindi, English verbs do not inflect for grammatical gender. The distribution depends strictly on grammatical person and grammatical number:
   - 1st Person Singular (*I*) & 3rd Person Singular (*He, She, It, Singular Nouns*) ➔ **WAS**
   - 2nd Person (*You*) & All Plurals (*We, They, Plural Nouns*) ➔ **WERE**
2. **Non-Action Stative Frame**: The copula connects the subject directly to a predicate noun (*She was a doctor*), predicate adjective (*They were excited*), or prepositional phrase of location (*I was at the library*).
3. **Temporal Adverbial Collocations**: Standard English pairs specific past pre-determiners (*last night, last week, last year*) rather than literal calques (*yesterday night*).`,
      grammarRules: [
        {
          ruleNumber: 1,
          title: "Copula Agreement Rule (was vs were)",
          description: "'Was' is exclusively used with I, he, she, it, and singular nouns. 'Were' is used with you (singular & plural), we, they, and plural nouns.",
          register: "Universal Standard"
        },
        {
          ruleNumber: 2,
          title: "Negative Contraction Dynamics (wasn't / weren't)",
          description: "In spoken and neutral written English, 'was not' contracts to 'wasn't' (/ˈwɒz.ənt/) and 'were not' contracts to 'weren't' (/wɜːnt/). Avoid uncontracted forms in rapid casual dialogue.",
          register: "Spoken & Neutral English"
        },
        {
          ruleNumber: 3,
          title: "Subject-Verb Inversion in Questions",
          description: "To form questions, invert the copula before the subject: 'Was [Subject]...?' or 'Were [Subject]...?'. Wh-words precede the inverted copula: 'Where were you?'.",
          register: "Universal Standard"
        }
      ],
      formulaTable: [
        { structure: "Affirmative State", formula: "Subject + was/were + [Noun / Adjective / Location]", example: "Dr. Sen was the chief surgeon in 2018." },
        { structure: "Negative State", formula: "Subject + was not / were not + Complement", example: "The documents were not available in the regional office." },
        { structure: "Yes/No Question", formula: "Was/Were + Subject + Complement?", example: "Were you present during the morning safety briefing?" },
        { structure: "Wh- Information Question", formula: "Wh-Word + was/were + Subject + Complement?", example: "Where were they during the project launch?" }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Using 'yesterday night' instead of 'last night' & mixing 'was' with base action verbs",
        hindiPattern: "हिन्दी में 'कल रात' का शाब्दिक अनुवाद कई शिक्षार्थी 'yesterday night' कर देते हैं। साथ ही, कुछ शिक्षार्थी 'I was go' या 'He was came' बोल देते हैं।",
        potentialInterference: "Saying 'I was go to market yesterday night.'",
        explanation: "In English, 'last night' is the fixed idiomatic phrase. Furthermore, 'was/were' in stative sentences must never be followed by a bare base verb.",
        naturalSolution: "Say: 'I went to the market last night.' (Action) or 'I was at the market last night.' (State)."
      }
    },
    phonetics: {
      targetSound: "Morphophonemic Pronunciation of Past Regular '-ed' (/t/, /d/, /ɪd/) & Voiceless Plosive Aspiration /p, t, k/",
      articulatoryMechanics: {
        place: "Bilabial /p/, Alveolar /t/, Velar /k/ with Stressed Onset Aspiration [pʰ, tʰ, kʰ]",
        manner: "Plosive (Stop) with release burst of air; Dental alveolar tap avoidance",
        voicing: "Voiceless stops followed by puff of air before vowels",
        stepByStep: [
          "Place your hand 2 inches in front of your mouth.",
          "Say 'paper', 'time', 'key' with an audible puff of air hitting your palm.",
          "For past '-ed': after voiceless sounds pronounce /t/ (walked -> /wɔːkt/), after voiced sounds pronounce /d/ (played -> /pleɪd/), after /t/ or /d/ pronounce /ɪd/ (wanted -> /ˈwɒn.tɪd/)."
        ]
      },
      hindiSpeakerPhoneticTrap: "Indian speakers often pronounce English /t/ as an unaspirated retroflex /ʈ/ (ट) and pronounce all '-ed' endings as a separate full syllable '-ed' (e.g. pronouncing 'walked' as 'walk-ed').",
      minimalPairs: [
        { word1: "pin", word2: "bin", ipa1: "/pʰɪn/", ipa2: "/bɪn/", meaningHi1: "पिन (वायु के झोंके के साथ)", meaningHi2: "डिब्बा" },
        { word1: "time", word2: "dime", ipa1: "/tʰaɪm/", ipa2: "/daɪm/", meaningHi1: "समय (दंतमूल पर हवा के साथ)", meaningHi2: "सिक्का" },
        { word1: "coat", word2: "goat", ipa1: "/kʰəʊt/", ipa2: "/ɡəʊt/", meaningHi1: "कोट (तालू पर विस्फोट)", meaningHi2: "बकरी" }
      ],
      prosodyFocus: "Falling intonation contour on past declarative statements: 'She was at the OF-fice yesterday. ↘'"
    },
    learn: {
      vocabulary,
      spokenPhrases: [
        { id: "d06_p01", phrase: "Where were you yesterday?", ipa: "/weər wɜː juː ˈjes.tə.deɪ/", hindiMeaning: "कल आप कहाँ थे?", register: "Neutral / Inquisitive", context: "Asking about someone's whereabouts in the past." },
        { id: "d06_p02", phrase: "I was caught up with an urgent matter.", ipa: "/aɪ wɒz kɔːt ʌp wɪð ən ˈɜː.dʒənt ˈmæt.ər/", hindiMeaning: "मैं एक ज़रूरी काम में फंसा हुआ था।", register: "Professional / Polite", context: "Polite explanation for absence." },
        { id: "d06_p03", phrase: "It was a pleasure working with you.", ipa: "/ɪt wɒz ə ˈpleʒ.ər ˈwɜː.kɪŋ wɪð juː/", hindiMeaning: "आपके साथ काम करके बहुत खुशी हुई।", register: "Formal / Professional", context: "Parting or concluding a past collaborative engagement." },
        { id: "d06_p04", phrase: "Those were the golden days of our college.", ipa: "/ðəʊz wɜː ðə ˈɡəʊl.dən deɪz ɒv ˈaʊər ˈkɒl.ɪdʒ/", hindiMeaning: "वे हमारे कॉलेज के सुनहरे दिन थे।", register: "Social / Nostalgic", context: "Expressing nostalgic memory of past times." }
      ]
    },
    examples: {
      bilingualExemplars
    },
    practice: {
      exercises,
      translationSet
    },
    use: {
      dialogue: {
        situation: "Two senior colleagues meet on Tuesday morning to discuss yesterday's missing quarterly presentation file.",
        turns: [
          { speaker: "Vikram", textEn: "Good morning, Priya. Were you in the regional office yesterday afternoon?", textHi: "शुभ प्रभात, प्रिया। क्या आप कल दोपहर क्षेत्रीय कार्यालय में थीं?" },
          { speaker: "Priya", textEn: "Good morning, Vikram. No, I was not in the office. I was at the client site in Gurgaon until 5 PM.", textHi: "शुभ प्रभात, विक्रम। नहीं, मैं कार्यालय में नहीं थी। मैं शाम 5 बजे तक गुड़गांव में क्लाइंट साइट पर थी।" },
          { speaker: "Vikram", textEn: "I see. Was the client happy with the preliminary software demonstration?", textHi: "अच्छा। क्या क्लाइंट प्रारंभिक सॉफ्टवेयर प्रदर्शन से प्रसन्न थे?" },
          { speaker: "Priya", textEn: "Yes, they were extremely impressed! The leadership team was very cooperative.", textHi: "हाँ, वे बहुत प्रभावित थे! नेतृत्व दल बहुत सहयोगी था।" },
          { speaker: "Vikram", textEn: "That is wonderful news. The project director was also asking about the final report earlier today.", textHi: "यह बहुत अच्छी खबर है। प्रोजेक्ट डायरेक्टर भी आज सुबह अंतिम रिपोर्ट के बारे में पूछ रहे थे।" },
          { speaker: "Priya", textEn: "The report was finalized last night. It is ready for dispatch now.", textHi: "रिपोर्ट कल रात पूरी हो गई थी। वह अब भेजने के लिए तैयार है।" }
        ],
        culturalNotes: "In professional environments, giving a brief, clear factual reason for your past location builds trust and credibility."
      },
      speakingTask: {
        promptEn: "Describe where you were yesterday at three different times (morning, afternoon, night) and what your state was (busy, relaxed, traveling, with family).",
        promptHi: "कल के तीन अलग-अलग समयों (सुबह, दोपहर, रात) पर आप कहाँ थे और आपकी स्थिति क्या थी (व्यस्त, आराम में, यात्रा में, परिवार के साथ), इसका 1 मिनट में अंग्रेजी में वर्णन करें।",
        modelResponse: "Yesterday morning, I was at my office desk preparing the weekly financial report. By the afternoon, I was in a strategic planning meeting with our regional directors. Finally, last night, I was at home with my family, completely relaxed after a productive day."
      }
    },
    assess: {
      writtenChecklist: [
        "Can distinguish and accurately choose between 'was' and 'were' with 100% accuracy.",
        "Can convert affirmative past statements into negative and question forms.",
        "Can use correct time adverbs ('last night', 'two days ago', 'earlier today')."
      ],
      oralProductionTask: "Speak 5 sentences describing a memorable historical visit or past workplace achievement using 'was' and 'were'.",
      benchmarks: {
        accuracyThreshold: "90%",
        reviewIntervals: [1, 3, 7, 14]
      }
    },
    review: {
      spacedRepetitionTag: "A1_STAGE1_DAY06_PAST_COPULA",
      recommendedIntervalDays: [1, 3, 7, 14]
    }
  };
}

// ----------------------------------------------------------------------
// DAY 07 GENERATOR
// ----------------------------------------------------------------------
function buildDay07() {
  const { rawTerms } = getDay07Data();
  const vocabulary = rawTerms.map((term, i) => makeVocab(`d07_v${String(i + 1).padStart(2, '0')}`, term));

  const subjects = [
    ["I", "will be", "मैं होऊँगा/होऊँगी", "will not be (won't be)"],
    ["You", "will be", "आप होंगे/तुम होगे", "will not be (won't be)"],
    ["He", "will be", "वह (पुरुष) होगा", "will not be (won't be)"],
    ["She", "will be", "वह (स्त्री) होगी", "will not be (won't be)"],
    ["It", "will be", "यह होगा/होगी", "will not be (won't be)"],
    ["We", "will be", "हम होंगे", "will not be (won't be)"],
    ["They", "will be", "वे होंगे", "will not be (won't be)"],
    ["Dr. Roy", "will be", "डॉ. रॉय होंगे", "will not be (won't be)"],
    ["The delegates", "will be", "प्रतिनिधि होंगे", "will not be (won't be)"],
    ["The outcome", "will be", "परिणाम होगा", "will not be (won't be)"]
  ];

  const predicates = [
    ["in Bangalore tomorrow morning for the tech summit", "कल सुबह टेक समिट के लिए बैंगलोर में", "Location + Time"],
    ["ready with the final product blueprint by Friday", "शुक्रवार तक अंतिम उत्पाद ब्लूप्रिंट के साथ तैयार", "Readiness"],
    ["delighted with the quarterly performance bonus", "त्रैमासिक प्रदर्शन बोनस से प्रसन्न", "Emotion"],
    ["present at the international conference hall", "अंतर्राष्ट्रीय सम्मेलन कक्ष में उपस्थित", "Presence"],
    ["available for client consultations next Monday", "अगले सोमवार को क्लाइंट परामर्श के लिए उपलब्ध", "Availability"],
    ["responsible for the aerospace safety protocol", "एयरोस्पेस सुरक्षा प्रोटोकॉल के लिए ज़िम्मेदार", "Duty"],
    ["a visionary mentor for our junior innovators", "हमारे कनिष्ठ नवप्रवर्तकों के लिए एक दूरदर्शी मार्गदर्शक", "Role"],
    ["extremely successful in the upcoming fiscal quarter", "आगामी वित्तीय तिमाही में अत्यधिक सफल", "Projection"],
    ["on a very tight schedule next Wednesday", "अगले बुधवार को बहुत व्यस्त कार्यक्रम में", "Schedule"],
    ["in the vanguard of clean renewable energy", "स्वच्छ नवीकरणीय ऊर्जा की अग्रिम पंक्ति में", "Strategic Position"]
  ];

  const bilingualExemplars = [];
  let idx = 1;
  subjects.forEach(([subj, verb, subjHi, negVerb]) => {
    predicates.forEach(([pred, predHi, cat]) => {
      const isNegative = idx % 3 === 0;
      const isQuestion = idx % 5 === 0;
      let en = `${subj} ${verb} ${pred}.`;
      let hi = `${subjHi} ${predHi}।`;
      let focus = "Future Affirmative State (will be)";
      if (isNegative) {
        en = `${subj} ${negVerb} ${pred}.`;
        hi = `${subjHi} ${predHi} नहीं ${verb.includes('मैं') ? 'होऊँगा/होऊँगी' : 'होंगे/होगा'}।`;
        focus = "Future Negative State (will not be / won't be)";
      } else if (isQuestion) {
        en = `Will ${subj.toLowerCase()} be ${pred}?`;
        hi = `क्या ${subjHi} ${predHi} ${verb.includes('मैं') ? 'होऊँगा' : 'होंगे'}?`;
        focus = "Future Interrogative Inversion (Will + Subj + be...?)";
      }

      bilingualExemplars.push({
        id: `d07_eg${String(idx).padStart(3, '0')}`,
        en,
        hi,
        breakdown: `${subj} [Subject] + ${isNegative ? 'will not be' : 'will be'} [Future Copula] + ${pred} [Complement]`,
        category: cat,
        focusStructure: focus
      });
      idx++;
    });
  });

  const exercises = [];
  for (let i = 1; i <= 65; i++) {
    const exId = `d07_ex_${String(i).padStart(3, '0')}`;
    if (i <= 20) {
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `Select the correct future copula: "Tomorrow morning, the entire team _____ at the auditorium."`,
        options: ["will be", "will", "is being", "are be"],
        correctAnswer: "will be",
        difficulty: "standard",
        skillTag: "Future State Copula",
        explanationEn: `Future states require 'will be' + predicate complement.`,
        explanationHi: `भविष्य की अवस्था व्यक्त करने के लिए 'will be' का प्रयोग होता है।`
      });
    } else if (i <= 40) {
      const isNeg = i % 2 === 0;
      const correct = isNeg ? "will not be" : "will be";
      exercises.push({
        id: exId,
        type: "fill_blank",
        prompt: `Fill in the blank: "She _____ (${isNeg ? 'negative' : 'affirmative'} future state) available for meetings tomorrow."`,
        correctAnswer: correct,
        acceptableAlternatives: [correct, correct.replace(" not be", "n't be")],
        difficulty: "standard",
        skillTag: "Future Form Construction",
        explanationEn: `Future state ${isNeg ? 'negative' : 'affirmative'} is '${correct}'.`,
        explanationHi: `भविष्य की स्थिति में सही रूप '${correct}' आता है।`
      });
    } else if (i <= 55) {
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: `Correct the grammatical error: "Tomorrow I am being at Delhi."`,
        correctAnswer: "Tomorrow I will be in Delhi.",
        acceptableAlternatives: ["Tomorrow I will be in Delhi.", "I will be in Delhi tomorrow."],
        difficulty: "standard",
        skillTag: "Future State Accuracy",
        explanationEn: `Use 'will be in Delhi' for a future state, not 'am being at'.`,
        explanationHi: `भविष्य की स्थिति के लिए 'will be in Delhi' का प्रयोग करें।`
      });
    } else {
      exercises.push({
        id: exId,
        type: "transformation",
        prompt: `Transform into a future question: "They will be in Mumbai next week."`,
        correctAnswer: "Will they be in Mumbai next week?",
        acceptableAlternatives: ["Will they be in Mumbai next week?"],
        difficulty: "standard",
        skillTag: "Future Inversion Question Formulation",
        explanationEn: `Invert modal 'will' with subject: "Will they be in Mumbai next week?"`,
        explanationHi: `प्रश्न बनाने के लिए 'Will' को आगे लाएं: "Will they be in Mumbai next week?"`
      });
    }
  }

  const translationSet = [
    ["कल दोपहर हम सब सभागार में उपस्थित होंगे।", "We will all be present in the auditorium tomorrow afternoon."],
    ["क्या आप अगले सोमवार को बैठक के लिए उपलब्ध होंगे?", "Will you be available for the meeting next Monday?"],
    ["वह आगामी सम्मेलन में मुख्य वक्ता होंगे।", "He will be the keynote speaker at the upcoming conference."],
    ["हमारा नया उत्पाद अगले महीने लॉन्च के लिए तैयार होगा।", "Our new product will be ready for launch next month."],
    ["मौसम पूर्वानुमान के अनुसार कल भारी बारिश होगी।", "According to the weather forecast, there will be heavy rain tomorrow."],
    ["क्या यह निर्णय हमारे संस्थान के भविष्य के लिए लाभकारी होगा?", "Will this decision be beneficial for the future of our institution?"],
    ["वे इस वर्ष के अंत तक अपने नए कार्यालय में होंगे।", "They will be in their new office by the end of this year."],
    ["डॉ. वर्मा कल सुबह परामर्श के लिए उपलब्ध नहीं होंगे।", "Dr. Verma will not be available for consultation tomorrow morning."],
    ["यह नवाचार हमारे उद्योग के लिए एक ऐतिहासिक मील का पत्थर होगा।", "This innovation will be a historic milestone for our industry."],
    ["क्या आप कल शाम छह बजे घर पर होंगे?", "Will you be at home at six o'clock tomorrow evening?"],
    ["The upcoming summit will be crucial for bilateral trade.", "आगामी शिखर सम्मेलन द्विपक्षीय व्यापार के लिए अत्यंत महत्वपूर्ण होगा।"],
    ["We will not be responsible for any personal luggage.", "हम किसी भी व्यक्तिगत सामान के लिए ज़िम्मेदार नहीं होंगे।"],
    ["Will the financial projection be ready by Friday afternoon?", "क्या शुक्रवार दोपहर तक वित्तीय अनुमान तैयार हो जाएगा?"],
    ["She will be a great asset to your research team.", "वह आपकी शोध टीम के लिए एक बहुत मूल्यवान संपत्ति होंगी।"],
    ["Our team will be in constant readiness for any emergency.", "हमारी टीम किसी भी आपात स्थिति के लिए निरंतर तत्परता में रहेगी।"],
    ["The library will be closed for renovation next Sunday.", "पुस्तकालय अगले रविवार को नवीनीकरण के लिए बंद रहेगा।"],
    ["It will be an honor to welcome you to our university.", "हमारे विश्वविद्यालय में आपका स्वागत करना हमारे लिए सम्मान की बात होगी।"],
    ["Will the senior officers be present during the audit?", "क्या ऑडिट के दौरान वरिष्ठ अधिकारी उपस्थित रहेंगे?"],
    ["The economic outlook will be very positive next year.", "अगले वर्ष आर्थिक परिदृश्य बहुत सकारात्मक रहेगा।"],
    ["They will not be in Delhi during the national holidays.", "वे राष्ट्रीय छुट्टियों के दौरान दिल्ली में नहीं होंगे।"],
    ["भविष्य में स्वच्छ ऊर्जा ही हमारा मुख्य सहारा होगी।", "Clean energy will be our primary support in the future."],
    ["क्या आप अगले सत्र में इस समिति के अध्यक्ष होंगे?", "Will you be the chairperson of this committee in the next session?"],
    ["यह ऐतिहासिक फैसला सदियों तक याद रखा जाएगा।", "This historic verdict will be remembered for centuries."],
    ["Our new regional headquarters will be in Hyderabad.", "हमारा नया क्षेत्रीय मुख्यालय हैदराबाद में होगा।"],
    ["She will be fully prepared for the civil services examination.", "वह सिविल सेवा परीक्षा के लिए पूरी तरह से तैयार होंगी।"]
  ].map(([source, target], idx) => ({
    id: `d07_tr_${String(idx + 1).padStart(2, '0')}`,
    source,
    target,
    direction: idx < 10 || idx >= 20 ? "hi_to_en" : "en_to_hi",
    focusGrammar: "Future State Copula (Will Be & Won't Be) & Prospective Adverbs"
  }));

  return {
    dayNumber: 7,
    id: "day_07",
    titleEn: "Future State of Being & Presence: Will Be & Time Adverbs",
    titleHi: "भविष्य की अवस्था और उपस्थिति: Will Be तथा समय सूचक शब्द",
    cefr: "A1.1",
    estMinutes: 45,
    prerequisites: "Mastery of Past Copula (Was / Were) from Day 6",
    objectivesEn: [
      "Master the invariant future copula 'will be' across all subjects (I, you, he, she, it, we, they).",
      "Construct affirmative, negative (will not be / won't be), and interrogative sentences expressing future states, presence, readiness, and conditions.",
      "Accurately apply future temporal adverbs (tomorrow, upcoming, forthcoming, eventual, next week, soon).",
      "Master the pronunciation of the Velar Nasal /ŋ/ (singing, bringing, forthcoming) avoiding hard /g/ intrusive plosive [ŋɡ].",
      "Dismantle common Indian English errors like 'Tomorrow I am in Delhi' or 'Tomorrow I will be go'."
    ],
    objectivesHi: [
      "सभी कर्ताओं (I, you, he, she, it, we, they) के साथ भविष्यकालिक संयोजक क्रिया 'will be' के एकसमान नियम को समझना।",
      "भविष्य की अवस्था, उपस्थिति, तत्परता और स्थिति के सकारात्मक, नकारात्मक (won't be) और प्रश्नवाचक वाक्य बनाना।",
      "भविष्य सूचक शब्दों (tomorrow, upcoming, forthcoming, next week, soon) का सटीक प्रयोग करना।",
      "कंठ्य अनुनासिक ध्वनि Velar Nasal /ŋ/ (जैसे singing, upcoming) के शुद्ध उच्चारण में निपुण होना।",
      "भारतीय अंग्रेजी की सामान्य गलतियों (जैसे 'Tomorrow I am at Delhi' या 'will be go') को ठीक करना।"
    ],
    teach: {
      hindiExplanation: `डे 07 में आपका स्वागत है! आज हम सीखेंगे कि **भविष्य की अवस्था, उपस्थिति और स्थिति (Future State of Being)** को अंग्रेजी में कैसे व्यक्त किया जाता है।

### 1. जादुई सरलता (Linguistic Simplicity):
अंग्रेजी में भविष्य की अवस्था व्यक्त करना सबसे आसान है क्योंकि यहाँ **'Will Be'** सभी कर्ताओं के साथ एक जैसा रहता है:
- **I will be** (मैं होऊँगा / उपस्थित रहूँगा)
- **You will be** (आप होंगे)
- **He / She / It will be** (वह / यह होगा)
- **We / They will be** (हम / वे होंगे)

### 2. तीन प्रमुख वाक्य संरचनाएं (Sentence Formulas):
1. **सकारात्मक (Affirmative)**: 
   - *I will be in Bangalore tomorrow.* (मैं कल बैंगलोर में होऊँगा।)
   - *She will be very happy.* (वह बहुत खुश होगी।)
2. **नकारात्मक (Negative)**: 
   - *He will not be (won't be) at home.* (वह घर पर नहीं होगा।)
   - *We won't be late.* (हमें देर नहीं होगी।)
3. **प्रश्नवाचक (Interrogative)**: 
   - *Will you be available tomorrow?* (क्या आप कल उपलब्ध होंगे?)
   - *Where will they be next week?* (वे अगले सप्ताह कहाँ होंगे?)`,
      englishExplanation: `Welcome to Day 07! This lesson establishes future stative attribution using the modal copula *will be*.

Key Linguistic Principles:
1. **Universal Invariance**: Unlike present and past copulas, *will be* does not inflect for person or number (*I will be, they will be*).
2. **Stative vs Dynamic Future**: *Will be* + Predicate Complement denotes a state (*She will be ready*), whereas *will be* + Verb-ing denotes progressive action (*She will be sleeping*). Today's focus is on stative presence and conditions.
3. **Contraction Dynamics**: *Will not be* contracts to *won't be* (/woʊnt biː/) in natural spoken discourse.`,
      grammarRules: [
        {
          ruleNumber: 1,
          title: "Universal Future Invariance",
          description: "'Will be' is used identically for all grammatical persons (1st, 2nd, 3rd) and numbers (singular & plural).",
          register: "Universal Standard"
        },
        {
          ruleNumber: 2,
          title: "Spoken Contraction 'Won't Be'",
          description: "In natural spoken English, 'will not be' contracts to 'won't be' (/woʊnt biː/). The diphthong is /oʊ/ (as in 'boat'), not /ɒ/ (as in 'want').",
          register: "Spoken English"
        },
        {
          ruleNumber: 3,
          title: "Question Formation via Modal Inversion",
          description: "Invert modal 'will' before the subject while keeping 'be' in the predicate: 'Will [Subject] be [Complement]?' (e.g. 'Will you be ready?').",
          register: "Universal Standard"
        }
      ],
      formulaTable: [
        { structure: "Affirmative Future State", formula: "Subject + will be + [Noun / Adjective / Location]", example: "Dr. Roy will be the chief guest tomorrow." },
        { structure: "Negative Future State", formula: "Subject + will not be (won't be) + Complement", example: "They won't be available during the morning session." },
        { structure: "Yes/No Future Question", formula: "Will + Subject + be + Complement?", example: "Will you be present at the upcoming conference?" },
        { structure: "Wh- Future Question", formula: "Wh-Word + will + Subject + be + Complement?", example: "Where will the new headquarters be located?" }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Using Present Tense for Distant Future States ('Tomorrow I am in Delhi')",
        hindiPattern: "हिंदी में हम अक्सर बोलते हैं: 'कल मैं दफ्तर में हूँ।' इसे अंग्रेजी में सीधे 'Tomorrow I am in office' अनुवाद करना गलत है।",
        potentialInterference: "Saying 'Tomorrow I am in Delhi' or 'Tomorrow I am being busy.'",
        explanation: "Stative presence in the future requires modal 'will be'. 'Am being' expresses temporary behavior, not scheduled location.",
        naturalSolution: "Say: 'Tomorrow I will be in Delhi.' or 'I will be busy tomorrow.'"
      }
    },
    phonetics: {
      targetSound: "The Velar Nasal /ŋ/ in '-ing' endings and future participles (singing, upcoming, forthcoming)",
      articulatoryMechanics: {
        place: "Velar (Back of tongue pressed against the soft palate / velum)",
        manner: "Nasal (Oral passage completely blocked; sound resonates entirely through the nasal cavity)",
        voicing: "Voiced nasal consonant without any hard plosive release [ɡ]",
        stepByStep: [
          "Raise the back of your tongue to touch the roof of your mouth at the soft palate (as if getting ready to say 'k' or 'g').",
          "Let your vocal cords vibrate, releasing sound solely through your nose.",
          "Do NOT let the tongue drop with a sudden explosive release (avoid saying /ŋɡ/ with a hard 'g').",
          "Practice: 'sing', 'bring', 'upcoming', 'forthcoming'."
        ]
      },
      hindiSpeakerPhoneticTrap: "Indian speakers frequently substitute alveolar /n/ (saying 'comin' instead of 'coming') or add a hard audible /ɡ/ stop (saying 'sing-guh' /sɪŋɡ/).",
      minimalPairs: [
        { word1: "sin", word2: "sing", ipa1: "/sɪn/", ipa2: "/sɪŋ/", meaningHi1: "पाप (दंतमूल /n/)", meaningHi2: "गाना (कंठ्य /ŋ/)" },
        { word1: "thin", word2: "thing", ipa1: "/θɪn/", ipa2: "/θɪŋ/", meaningHi1: "पतला", meaningHi2: "वस्तु" },
        { word1: "ran", word2: "rang", ipa1: "/ræn/", ipa2: "/ræŋ/", meaningHi1: "दौड़ा", meaningHi2: "घंटी बजी" }
      ],
      prosodyFocus: "Rising intonation on Yes/No future questions: 'Will you be at the CON-ference tomorrow? ↗'"
    },
    learn: {
      vocabulary,
      spokenPhrases: [
        { id: "d07_p01", phrase: "Will you be available tomorrow morning?", ipa: "/wɪl juː biː əˈveɪ.lə.bəl təˈmɒr.əʊ ˈmɔː.nɪŋ/", hindiMeaning: "क्या आप कल सुबह उपलब्ध होंगे?", register: "Professional / Polite", context: "Scheduling meetings or appointments." },
        { id: "d07_p02", phrase: "I will be delighted to attend.", ipa: "/aɪ wɪl biː dɪˈlaɪ.tɪd tuː əˈtend/", hindiMeaning: "मुझे शामिल होने में बहुत खुशी होगी।", register: "Formal / Gracious", context: "Accepting an invitation or event attendance." },
        { id: "d07_p03", phrase: "Everything will be under control.", ipa: "/ˈev.ri.θɪŋ wɪl biː ˈʌn.dər kənˈtrəʊl/", hindiMeaning: "सब कुछ नियंत्रण में रहेगा।", register: "Reassurance / Professional", context: "Comforting a colleague about upcoming operations." },
        { id: "d07_p04", phrase: "That will be a great milestone for us.", ipa: "/ðæt wɪl biː ə ɡreɪt ˈmaɪl.stəʊn fɔːr ʌs/", hindiMeaning: "यह हमारे लिए एक बड़ा मील का पत्थर होगा।", register: "Visionary / Encouraging", context: "Celebrating an upcoming achievement." }
      ]
    },
    examples: {
      bilingualExemplars
    },
    practice: {
      exercises,
      translationSet
    },
    use: {
      dialogue: {
        situation: "A project lead and an aerospace engineer discuss their readiness for tomorrow's upcoming satellite component testing.",
        turns: [
          { speaker: "Aditi", textEn: "Good afternoon, Rahul. Will the cryogenic test chamber be ready by 9 AM tomorrow?", textHi: "शुभ दोपहर, राहुल। क्या क्रायोजेनिक टेस्ट चैंबर कल सुबह 9 बजे तक तैयार रहेगा?" },
          { speaker: "Rahul", textEn: "Good afternoon, Aditi. Yes, all systems will be fully operational by 8:30 AM.", textHi: "शुभ दोपहर, अदिति। हाँ, सुबह 8:30 बजे तक सभी प्रणालियाँ पूरी तरह से चालू रहेंगी।" },
          { speaker: "Aditi", textEn: "Wonderful. Will the senior safety inspector be present during the trial?", textHi: "बहुत अच्छा। क्या परीक्षण के दौरान वरिष्ठ सुरक्षा निरीक्षक उपस्थित रहेंगे?" },
          { speaker: "Rahul", textEn: "Yes, Dr. Kulkarni will be in the observation gallery throughout the testing.", textHi: "हाँ, डॉ. कुलकर्णी परीक्षण के दौरान पूरे समय निरीक्षण दीर्घा में रहेंगे।" },
          { speaker: "Aditi", textEn: "That is reassuring. The client delegates will also be watching via live video link.", textHi: "यह आश्वस्त करने वाला है। क्लाइंट प्रतिनिधि भी लाइव वीडियो लिंक के माध्यम से देख रहे होंगे।" },
          { speaker: "Rahul", textEn: "Excellent. It will be a historic day for our aerospace division.", textHi: "शानदार। यह हमारे एयरोस्पेस विभाग के लिए एक ऐतिहासिक दिन होगा।" }
        ],
        culturalNotes: "When communicating schedules to clients, stating specific future readiness times (e.g. 'by 8:30 AM') conveys high professionalism."
      },
      speakingTask: {
        promptEn: "Speak for 1 minute outlining where you will be tomorrow at different times and what your future professional goals will be next year.",
        promptHi: "कल आप अलग-अलग समय पर कहाँ होंगे और अगले वर्ष आपके पेशेवर लक्ष्य क्या होंगे, इसका 1 मिनट में अंग्रेजी में वर्णन करें।",
        modelResponse: "Tomorrow morning, I will be at my desk planning the quarterly deliverables. In the afternoon, I will be in a strategy meeting with our overseas partners. Looking ahead to next year, leadership and data architecture will be my primary career aspirations."
      }
    },
    assess: {
      writtenChecklist: [
        "Can form affirmative future sentences using 'will be' across all subjects with 100% accuracy.",
        "Can form negative sentences with 'won't be' without confusing with 'want'.",
        "Can invert 'will' to form natural interrogative questions."
      ],
      oralProductionTask: "Speak 5 sentences predicting your future achievements and upcoming scheduled events using 'will be'.",
      benchmarks: {
        accuracyThreshold: "90%",
        reviewIntervals: [1, 3, 7, 14]
      }
    },
    review: {
      spacedRepetitionTag: "A1_STAGE1_DAY07_FUTURE_COPULA",
      recommendedIntervalDays: [1, 3, 7, 14]
    }
  };
}

// ----------------------------------------------------------------------
// DAY 08 GENERATOR
// ----------------------------------------------------------------------
function buildDay08() {
  const { rawTerms } = getDay08Data();
  const vocabulary = rawTerms.map((term, i) => makeVocab(`d08_v${String(i + 1).padStart(2, '0')}`, term));

  const existentialFrames = [
    ["There is", "एक ... है", "singular_present"],
    ["There are", "कई / अनेक ... हैं", "plural_present"],
    ["There was", "एक ... था/थी", "singular_past"],
    ["There were", "कई ... थे", "plural_past"],
    ["There will be", "एक / कई ... होंगे", "future"]
  ];

  const locations = [
    ["a state-of-the-art laboratory on the fourth floor", "चौथी मंजिल पर एक अत्याधुनिक प्रयोगशाला", "Facility"],
    ["several spacious conference halls in this complex", "इस परिसर में कई विशाल सम्मेलन कक्ष", "Venue"],
    ["an emergency clinic in the immediate vicinity", "आस-पास के क्षेत्र में एक आपातकालीन क्लिनिक", "Vicinity"],
    ["many historic monuments across this ancient city", "इस प्राचीन शहर में कई ऐतिहासिक स्मारक", "Monuments"],
    ["a peaceful botanical courtyard behind the library", "पुस्तकालय के पीछे एक शांत वनस्पति प्रांगण", "Courtyard"],
    ["twenty electric charging stations at the depot", "डिपो पर बीस इलेक्ट्रिक चार्जिंग स्टेशन", "Infrastructure"],
    ["a breathtaking mountain view from the rooftop", "छत से एक लुभावना पर्वतीय दृश्य", "Scenery"],
    ["strict security regulations across the premises", "परिसर में सख्त सुरक्षा नियम", "Premises"],
    ["a bustling organic market along the avenue", "मुख्य मार्ग पर एक हलचल भरा जैविक बाजार", "Market"],
    ["no motorized vehicles permitted in the precinct", "परिसर में किसी भी मोटर वाहन की अनुमति नहीं", "Precinct"]
  ];

  const bilingualExemplars = [];
  let idx = 1;
  existentialFrames.forEach(([frame, frameHi, tenseType]) => {
    locations.forEach(([loc, locHi, cat]) => {
      const isNegative = idx % 3 === 0;
      const isQuestion = idx % 5 === 0;
      let en = `${frame} ${loc}.`;
      let hi = `${locHi} ${frameHi}।`;
      let focus = `Existential Affirmative (${frame})`;

      if (isNegative) {
        if (frame === "There is") { en = `There is not ${loc}.`; hi = `${locHi} नहीं है।`; }
        else if (frame === "There are") { en = `There are not ${loc}.`; hi = `${locHi} नहीं हैं।`; }
        else if (frame === "There was") { en = `There was not ${loc}.`; hi = `${locHi} नहीं था/थी।`; }
        else if (frame === "There were") { en = `There were not ${loc}.`; hi = `${locHi} नहीं थे।`; }
        else if (frame === "There will be") { en = `There will not be ${loc}.`; hi = `${locHi} नहीं होंगे।`; }
        focus = `Existential Negative (${frame} not)`;
      } else if (isQuestion) {
        if (frame === "There is") { en = `Is there ${loc}?`; hi = `क्या ${locHi} है?`; }
        else if (frame === "There are") { en = `Are there ${loc}?`; hi = `क्या ${locHi} हैं?`; }
        else if (frame === "There was") { en = `Was there ${loc}?`; hi = `क्या ${locHi} था/थी?`; }
        else if (frame === "There were") { en = `Were there ${loc}?`; hi = `क्या ${locHi} थे?`; }
        else if (frame === "There will be") { en = `Will there be ${loc}?`; hi = `क्या ${locHi} होगा?`; }
        focus = `Existential Interrogative Inversion`;
      }

      bilingualExemplars.push({
        id: `d08_eg${String(idx).padStart(3, '0')}`,
        en,
        hi,
        breakdown: `${frame} [Dummy Subject + Copula] + ${loc} [Noun Phrase Complement]`,
        category: cat,
        focusStructure: focus
      });
      idx++;
    });
  });

  // Duplicate with demonstratives this/that/these/those to reach exactly 100 model sentences
  const demonstratives = [
    ["This building", "is", "यह इमारत ... है"],
    ["That venue", "is", "वह आयोजन स्थल ... है"],
    ["These offices", "are", "ये दफ़्तर ... हैं"],
    ["Those corridors", "are", "वे गलियारे ... हैं"],
    ["This facility", "was", "यह सुविधा ... थी"]
  ];
  demonstratives.forEach(([dem, verb, demHi]) => {
    locations.slice(0, 10).forEach(([loc, locHi, cat]) => {
      bilingualExemplars.push({
        id: `d08_eg${String(idx).padStart(3, '0')}`,
        en: `${dem} ${verb} ${loc.replace(/^a |^an |^several |^twenty |^many |^no /, '')}.`,
        hi: `${demHi} ${locHi}।`,
        breakdown: `${dem} [Demonstrative Subject] + ${verb} [Copula] + Complement`,
        category: cat,
        focusStructure: "Spatial Demonstrative Statement"
      });
      idx++;
    });
  });

  const exercises = [];
  for (let i = 1; i <= 65; i++) {
    const exId = `d08_ex_${String(i).padStart(3, '0')}`;
    if (i <= 20) {
      const isPlural = i % 2 === 0;
      const correct = isPlural ? "There are" : "There is";
      const wrong = isPlural ? "There is" : "There are";
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `Select the correct existential construction: "_____ ${isPlural ? 'five meeting rooms' : 'a main reception desk'} in this building."`,
        options: [correct, wrong, "It is", "They are"],
        correctAnswer: correct,
        difficulty: "standard",
        skillTag: "Existential Agreement",
        explanationEn: `Singular noun phrases take 'There is'; plural noun phrases take 'There are'.`,
        explanationHi: `एकवचन संज्ञा के साथ 'There is' और बहुवचन के साथ 'There are' आता है।`
      });
    } else if (i <= 40) {
      exercises.push({
        id: exId,
        type: "fill_blank",
        prompt: `Fill in the blank: "_____ (singular existential past) a famous library here in 1950."`,
        correctAnswer: "There was",
        acceptableAlternatives: ["There was"],
        difficulty: "standard",
        skillTag: "Past Existential Construction",
        explanationEn: `Past singular existential construction is 'There was'.`,
        explanationHi: `भूतकाल में एकवचन अस्तित्व सूचक के लिए 'There was' आता है।`
      });
    } else if (i <= 55) {
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: `Correct the grammatical error: "In my city there is many parks."`,
        correctAnswer: "There are many parks in my city.",
        acceptableAlternatives: ["There are many parks in my city.", "In my city there are many parks."],
        difficulty: "standard",
        skillTag: "Plural Existential Agreement",
        explanationEn: `'Parks' is plural, requiring 'There are'.`,
        explanationHi: `'Parks' बहुवचन है, अतः 'There are' सही है।`
      });
    } else {
      exercises.push({
        id: exId,
        type: "transformation",
        prompt: `Form an existential question: "There is a doctor in the building."`,
        correctAnswer: "Is there a doctor in the building?",
        acceptableAlternatives: ["Is there a doctor in the building?"],
        difficulty: "standard",
        skillTag: "Existential Question Inversion",
        explanationEn: `Invert 'is' and 'there': "Is there a doctor in the building?"`,
        explanationHi: `'Is' और 'there' को उलटें: "Is there a doctor in the building?"`
      });
    }
  }

  const translationSet = [
    ["इस इमारत की चौथी मंजिल पर एक आधुनिक पुस्तकालय है।", "There is a modern library on the fourth floor of this building."],
    ["क्या इस परिसर में कोई एटीएम सुविधा है?", "Is there an ATM facility on these premises?"],
    ["सभागार के अंदर पाँच सौ से अधिक लोग उपस्थित थे।", "There were over five hundred people present inside the auditorium."],
    ["कल रात इस क्षेत्र में भारी बिजली कटौती हुई थी।", "There was a major power outage in this area last night."],
    ["क्या अगले महीने नए नियमों में कोई बदलाव होगा?", "Will there be any changes in the new regulations next month?"],
    ["इस शहर के आस-पास कई दर्शनीय और रमणीक स्थल हैं।", "There are many picturesque sightseeing spots in the vicinity of this city."],
    ["कार्यालय के ठीक सामने एक सुंदर हरा-भरा बगीचा है।", "There is a beautiful green garden right in front of the office."],
    ["क्या कल दोपहर सम्मेलन में कोई मुख्य अतिथि होंगे?", "Will there be a chief guest at the conference tomorrow afternoon?"],
    ["उस समय इस दुर्गम पहाड़ी इलाके में कोई सड़क नहीं थी।", "There was no road in this rugged mountainous terrain at that time."],
    ["हमारे पड़ोस में सभी आवश्यक बुनियादी सुविधाएं उपलब्ध हैं।", "There are all essential infrastructure amenities available in our neighborhood."],
    ["There is no smoke without fire.", "बिना आग के धुआं नहीं होता।"],
    ["Were there any questions after the scientific presentation?", "क्या वैज्ञानिक प्रस्तुति के बाद कोई प्रश्न थे?"],
    ["There will be a grand cultural festival next Saturday.", "अगले शनिवार को एक भव्य सांस्कृतिक उत्सव होगा।"],
    ["There are several international banks located along this boulevard.", "इस मुख्य मार्ग पर कई अंतर्राष्ट्रीय बैंक स्थित हैं।"],
    ["Is there sufficient parking space available at the venue?", "क्या आयोजन स्थल पर पर्याप्त पार्किंग स्थान उपलब्ध है?"],
    ["There was immense joy among the students after the results.", "परिणामों के बाद विद्यार्थियों में अपार उत्साह और आनंद था।"],
    ["There were strict security checkpoints at every entrance.", "प्रत्येक प्रवेश द्वार पर कड़े सुरक्षा जांच बिंदु थे।"],
    ["There is a historic stone citadel atop the rocky hill.", "चट्टानी पहाड़ी की चोटी पर एक ऐतिहासिक पत्थर का किला है।"],
    ["Will there be translation facilities for overseas delegates?", "क्या विदेशी प्रतिनिधियों के लिए अनुवाद की सुविधा होगी?"],
    ["There are no hidden charges in our contract.", "हमारे अनुबंध में कोई छिपा हुआ शुल्क नहीं है।"],
    ["इस नए प्रोजेक्ट में सीखने के असीमित अवसर हैं।", "There are limitless learning opportunities in this new project."],
    ["क्या इस क्षेत्र में कोई अच्छा अस्पताल उपलब्ध है?", "Is there a good hospital available in this region?"],
    ["पुराने समय में यहाँ एक बहुत बड़ा व्यापारिक केंद्र था।", "In ancient times, there was a massive commercial hub here."],
    ["There is immense potential in rural solar energy.", "ग्रामीण सौर ऊर्जा में अपार संभावनाएं हैं।"],
    ["There will be a comprehensive review of all policies tomorrow.", "कल सभी नीतियों की व्यापक समीक्षा होगी।"]
  ].map(([source, target], idx) => ({
    id: `d08_tr_${String(idx + 1).padStart(2, '0')}`,
    source,
    target,
    direction: idx < 10 || idx >= 20 ? "hi_to_en" : "en_to_hi",
    focusGrammar: "Existential Clauses (There is/are/was/were/will be) & Spatial Precision"
  }));

  return {
    dayNumber: 8,
    id: "day_08",
    titleEn: "Spatial Demonstratives & Existential 'There is / There are'",
    titleHi: "संकेतवाचक शब्द और अस्तित्व सूचक वाक्य (There is / There are / There was / There were)",
    cefr: "A1.1",
    estMinutes: 45,
    prerequisites: "Mastery of Past and Future Copulas (Days 6 & 7)",
    objectivesEn: [
      "Master the syntactic 'dummy subject' construction 'There is' (singular) and 'There are' (plural).",
      "Extend existential clauses into past ('There was/were') and future ('There will be') tenses.",
      "Distinguish existential 'There' from locative adverb 'there' and spatial demonstratives (this, that, these, those).",
      "Master the pronunciation of English Alveolar Lateral /l/ (clear [l] vs dark [ɫ]) and Approximant /r/ without retroflex flapping.",
      "Eliminate fossilized errors like 'In my room two beds are' or 'There is many people'."
    ],
    objectivesHi: [
      "अस्तित्व सूचक 'There is' (एकवचन) और 'There are' (बहुवचन) के व्याकरणिक नियमों में निपुण होना।",
      "भूतकाल ('There was/were') और भविष्यकाल ('There will be') में अस्तित्व सूचक वाक्यों का निर्माण करना।",
      "स्थान सूचक 'वहाँ' (Adverb of place) और 'There is' (अस्तित्व सूचक) के बीच अंतर को स्पष्ट समझना।",
      "अंग्रेजी Lateral /l/ (Clear [l] और Dark [ɫ]) तथा Approximant /r/ के शुद्ध उच्चारण का अभ्यास करना।",
      "भारतीय अंग्रेजी की आम गलतियों (जैसे 'In my house four rooms are') को हमेशा के लिए समाप्त करना।"
    ],
    teach: {
      hindiExplanation: `डे 08 में आपका स्वागत है! आज हम अंग्रेजी का एक अत्यंत महत्वपूर्ण और जादुई ढांचा सीखेंगे: **Existential 'There is / There are' (अस्तित्व सूचक वाक्य)**।

### 1. 'There' की दोहरी भूमिका (Two Distinct Uses):
1. **स्थान सूचक (Adverb of Place)**: जब 'There' का अर्थ होता है **"वहाँ"**।
   - *He is sitting there.* (वह वहाँ बैठा है।)
2. **अस्तित्व सूचक (Dummy Subject / Existential)**: जब हम किसी चीज़ या व्यक्ति के **होने (अस्तित्व)** की घोषणा करते हैं। यहाँ 'There' का अपना कोई शाब्दिक अर्थ नहीं होता, यह केवल वाक्य शुरू करने का माध्यम है:
   - *There is a book on the table.* (मेज पर एक किताब है।)
   - *There are five cars in the garage.* (गैराज में पाँच कारें हैं।)

### 2. काल के अनुसार चार मुख्य रूप (Tense Matrix):
- **वर्तमान (Present)**:
  - एकवचन / अगणनीय संज्ञा: **There is** (*There is a hospital nearby.*)
  - बहुवचन संज्ञा: **There are** (*There are two hospitals nearby.*)
- **भूतकाल (Past)**:
  - एकवचन: **There was** (*There was a meeting yesterday.*)
  - बहुवचन: **There were** (*There were many people.*)
- **भविष्यकाल (Future)**:
  - **There will be** (*There will be a test tomorrow.*)`,
      englishExplanation: `Welcome to Day 08! This lesson focuses on existential clauses using the expletive / dummy subject *there* combined with be-verbs across all three temporal zones.

Key Concepts:
1. **The Expletive 'There'**: Syntactically, 'there' occupies the subject position to introduce new information, while the true logical subject (the notional subject) appears in the post-verbal predicate.
2. **Agreement Principle**: The verb agrees in number with the post-copular notional subject:
   - *There is [Singular Noun / Uncountable]*
   - *There are [Plural Noun]*
3. **Phonetic Distinction**: Existential 'there' is typically pronounced with a reduced, unstressed schwa /ðər/, whereas locative 'there' receives full stress /ðeər/.`,
      grammarRules: [
        {
          ruleNumber: 1,
          title: "Notional Subject Agreement Rule",
          description: "The be-verb in existential clauses agrees with the noun phrase immediately following it: 'There is a book' vs 'There are books'.",
          register: "Universal Standard"
        },
        {
          ruleNumber: 2,
          title: "Negative Existential Constructions ('no' vs 'not any')",
          description: "Negatives are formed using either 'There is/are no + noun' or 'There isn't/aren't any + noun'. Avoid double negatives.",
          register: "Universal Standard"
        },
        {
          ruleNumber: 3,
          title: "Interrogative Inversion with Expletive 'There'",
          description: "Invert the copula before 'there': 'Is there...?', 'Are there...?', 'Was there...?', 'Were there...?'.",
          register: "Universal Standard"
        }
      ],
      formulaTable: [
        { structure: "Present Singular Existential", formula: "There is + a/an [Singular Noun] + [Prepositional Phrase]", example: "There is a clinic in the vicinity." },
        { structure: "Present Plural Existential", formula: "There are + [Plural Noun / Quantifier] + [Prepositional Phrase]", example: "There are three auditoriums in this venue." },
        { structure: "Past Existential", formula: "There was / There were + [Noun Phrase]", example: "There were five hundred delegates present." },
        { structure: "Future Existential", formula: "There will be + [Noun Phrase]", example: "There will be a grand inauguration tomorrow." }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Omitting 'There' or Translating Hindi Locative Structure Literally",
        hindiPattern: "हिंदी में हम कहते हैं: 'दफ्तर में पाँच कंप्यूटर हैं।' कई शिक्षार्थी इसका अनुवाद करते हैं: 'In office five computers are.' ❌",
        potentialInterference: "Saying 'In my college five libraries are' or 'There is many people.'",
        explanation: "English requires the dummy subject 'There' to introduce entities before the linking verb, and 'people' is plural, requiring 'There are'.",
        naturalSolution: "Say: 'There are five computers in the office.' and 'There are many people.'"
      }
    },
    phonetics: {
      targetSound: "Alveolar Lateral /l/ (Clear [l] vs Dark [ɫ]) and Post-alveolar Approximant /r/ (English /r/ vs Hindi tap /ɾ/)",
      articulatoryMechanics: {
        place: "Alveolar ridge for /l/; Post-alveolar without contact for English /r/",
        manner: "Lateral approximant /l/ with air flowing along tongue sides; Central approximant /r/ with curled tongue tip",
        voicing: "Voiced liquids without retroflex flapping or tongue tapping against teeth",
        stepByStep: [
          "For Clear [l] (before vowels): touch the tip of your tongue to the alveolar ridge behind your upper front teeth (e.g. 'light', 'location').",
          "For Dark [ɫ] (at word ends): raise the back of your tongue toward the soft palate while the tip touches the alveolar ridge (e.g. 'all', 'terminal').",
          "For English /r/: curl the tip of your tongue back slightly toward the hard palate WITHOUT touching the roof of your mouth; let air glide smoothly (e.g. 'room', 'right')."
        ]
      },
      hindiSpeakerPhoneticTrap: "Indian speakers frequently substitute a single or trilled alveolar tap (र) or retroflex flap (ड़) for English approximant /r/, and pronounce dark 'l' as a flat retroflex consonant.",
      minimalPairs: [
        { word1: "light", word2: "right", ipa1: "/laɪt/", ipa2: "/raɪt/", meaningHi1: "रोशनी / हल्का", meaningHi2: "सही / दायाँ" },
        { word1: "lake", word2: "rake", ipa1: "/leɪk/", ipa2: "/reɪk/", meaningHi1: "झील", meaningHi2: "घास समेटने का औजार" },
        { word1: "collect", word2: "correct", ipa1: "/kəˈlekt/", ipa2: "/kəˈrekt/", meaningHi1: "एकत्रित करना", meaningHi2: "सही" }
      ],
      prosodyFocus: "Natural unstressed weak form of 'there' (/ðər/) in existential sentences: 'There's a DOC-tor in the building. ↘'"
    },
    learn: {
      vocabulary,
      spokenPhrases: [
        { id: "d08_p01", phrase: "Is there anything else I can help you with?", ipa: "/ɪz ðeər ˈen.i.θɪŋ els aɪ kæn help juː wɪð/", hindiMeaning: "क्या कोई और बात है जिसमें मैं आपकी मदद कर सकता हूँ?", register: "Professional / Customer Service", context: "Politely offering further assistance." },
        { id: "d08_p02", phrase: "There is no doubt about it.", ipa: "/ðeər ɪz nəʊ daʊt əˈbaʊt ɪt/", hindiMeaning: "इसमें कोई संदेह नहीं है।", register: "Universal / Emphatic", context: "Expressing total certainty." },
        { id: "d08_p03", phrase: "There was a slight misunderstanding.", ipa: "/ðeər wɒz ə slaɪt ˌmɪs.ʌn.dəˈstæn.dɪŋ/", hindiMeaning: "एक छोटी सी गलतफहमी हो गई थी।", register: "Diplomatic / Polite", context: "Smoothing over a past conflict." },
        { id: "d08_p04", phrase: "There are plenty of opportunities ahead.", ipa: "/ðeər ɑːr ˈplen.ti ɒv ˌɒp.əˈtʃuː.nə.tiz əˈhed/", hindiMeaning: "आगे बहुत सारे अवसर हैं।", register: "Encouraging / Leadership", context: "Motivating a team about the future." }
      ]
    },
    examples: {
      bilingualExemplars
    },
    practice: {
      exercises,
      translationSet
    },
    use: {
      dialogue: {
        situation: "A newly arrived international conference delegate inquires about campus facilities at the university reception desk.",
        turns: [
          { speaker: "Delegate", textEn: "Excuse me, good morning. Is there a business center on these premises?", textHi: "क्षमा करें, शुभ प्रभात। क्या इस परिसर में कोई बिजनेस सेंटर है?" },
          { speaker: "Receptionist", textEn: "Good morning! Yes, there is a fully equipped business center on the ground floor next to the auditorium.", textHi: "शुभ प्रभात! हाँ, भूतल पर सभागार के पास एक पूरी तरह से सुसज्जित बिजनेस सेंटर है।" },
          { speaker: "Delegate", textEn: "Thank you. Are there printing and scanning facilities available there?", textHi: "धन्यवाद। क्या वहाँ प्रिंटिंग और स्कैनिंग की सुविधा उपलब्ध है?" },
          { speaker: "Receptionist", textEn: "Yes, there are high-speed color printers and high-resolution scanners.", textHi: "हाँ, वहाँ हाई-स्पीड रंगीन प्रिंटर और उच्च-रिज़ॉल्यूशन स्कैनर हैं।" },
          { speaker: "Delegate", textEn: "Excellent. Was there any change in the afternoon presentation schedule?", textHi: "शानदार। क्या दोपहर के प्रेजेंटेशन शेड्यूल में कोई बदलाव हुआ था?" },
          { speaker: "Receptionist", textEn: "No, there were no changes. Everything is proceeding according to the official timetable.", textHi: "नहीं, कोई बदलाव नहीं हुआ था। सब कुछ आधिकारिक समय-सारणी के अनुसार चल रहा है।" }
        ],
        culturalNotes: "When inquiring about amenities in public or professional buildings, using 'Is there...' or 'Are there...' is standard and polite."
      },
      speakingTask: {
        promptEn: "Describe your neighborhood or office campus using 'There is', 'There are', 'There was', and 'There will be'. Mention at least 4 distinct amenities.",
        promptHi: "'There is', 'There are', 'There was', और 'There will be' का प्रयोग करके अपने पड़ोस या कार्यालय परिसर की कम से कम 4 सुविधाओं का 1 मिनट में अंग्रेजी में वर्णन करें।",
        modelResponse: "In our workplace campus, there is a state-of-the-art research facility on the fourth floor. In the central plaza, there are several open cafes and clean water fountains. Five years ago, there was only vacant land here, but next year, there will be an expansive green botanical garden."
      }
    },
    assess: {
      writtenChecklist: [
        "Can distinguish between singular 'There is' and plural 'There are' with 100% precision.",
        "Can apply past ('There was/were') and future ('There will be') existential structures correctly.",
        "Can form inverted questions ('Is there...?', 'Are there...?') effortlessly."
      ],
      oralProductionTask: "Give a 1-minute guided tour of a historic building or facility using existential constructions.",
      benchmarks: {
        accuracyThreshold: "90%",
        reviewIntervals: [1, 3, 7, 14]
      }
    },
    review: {
      spacedRepetitionTag: "A1_STAGE1_DAY08_EXISTENTIAL_THERE",
      recommendedIntervalDays: [1, 3, 7, 14]
    }
  };
}

// ----------------------------------------------------------------------
// DAY 09 GENERATOR
// ----------------------------------------------------------------------
function buildDay09() {
  const { rawTerms } = getDay09Data();
  const vocabulary = rawTerms.map((term, i) => makeVocab(`d09_v${String(i + 1).padStart(2, '0')}`, term));

  const subjects = [
    ["I", "have", "मेरे पास ... है", "do not have (don't have)", "had", "मेरे पास ... था", "will have"],
    ["You", "have", "आपके पास ... है", "do not have (don't have)", "had", "आपके पास ... था", "will have"],
    ["He", "has", "उसके (पुरुष) पास ... है", "does not have (doesn't have)", "had", "उसके पास ... था", "will have"],
    ["She", "has", "उसके (स्त्री) पास ... है", "does not have (doesn't have)", "had", "उसके पास ... था", "will have"],
    ["The doctor", "has", "डॉक्टर के पास ... है", "does not have (doesn't have)", "had", "डॉक्टर के पास ... था", "will have"],
    ["We", "have", "हमारे पास ... है", "do not have (don't have)", "had", "हमारे पास ... था", "will have"],
    ["They", "have", "उनके पास ... है", "do not have (don't have)", "had", "उनके पास ... था", "will have"],
    ["Dr. Verma", "has", "डॉ. वर्मा के पास ... है", "does not have (doesn't have)", "had", "डॉ. वर्मा के पास ... था", "will have"],
    ["The enterprise", "has", "संस्थान के पास ... है", "does not have (doesn't have)", "had", "संस्थान के पास ... था", "will have"],
    ["Our team", "has", "हमारी टीम के पास ... है", "does not have (doesn't have)", "had", "हमारी टीम के पास ... था", "will have"]
  ];

  const attributes = [
    ["deep domain expertise in cardiology", "हृदय रोग विज्ञान में गहरी विशेषज्ञता", "Expertise"],
    ["a valid international operating license", "एक वैध अंतर्राष्ट्रीय संचालन लाइसेंस", "Credentials"],
    ["immense patience and fortitude during crises", "संकट के समय अपार धैर्य और मानसिक दृढ़ता", "Trait"],
    ["a slight headache after working continuously", "लगातार काम करने के बाद हल्का सिरदर्द", "Health"],
    ["two younger siblings studying engineering", "इंजीनियरिंग की पढ़ाई कर रहे दो छोटे सहोदर भाई-बहन", "Family"],
    ["abundant financial resources for the project", "परियोजना के लिए प्रचुर वित्तीय संसाधन", "Assets"],
    ["a natural flair for persuasive public speaking", "प्रभावशाली सार्वजनिक वक्तृत्व की स्वाभाविक प्रतिभा", "Talent"],
    ["a moral obligation to uphold research integrity", "शोध की सत्यनिष्ठा बनाए रखने का नैतिक कर्तव्य", "Ethics"],
    ["equal equity in the technology enterprise", "प्रौद्योगिकी उद्यम में समान हिस्सेदारी", "Finance"],
    ["a mild seasonal fever and cold symptoms", "हल्का मौसमी बुखार और सर्दी के लक्षण", "Health"]
  ];

  const bilingualExemplars = [];
  let idx = 1;
  subjects.forEach(([subj, verb, subjHi, negVerb, pastVerb, pastHi, futVerb]) => {
    attributes.forEach(([attr, attrHi, cat]) => {
      const isNegative = idx % 3 === 0;
      const isPast = idx % 4 === 0;
      const isQuestion = idx % 5 === 0;

      let en = `${subj} ${verb} ${attr}.`;
      let hi = `${subjHi} ${attrHi}।`;
      let focus = "Present Possession / Attribute (has/have)";

      if (isNegative) {
        en = `${subj} ${negVerb} ${attr}.`;
        hi = `${subjHi} ${attrHi} नहीं है।`;
        focus = "Negative Possession (do/does not have)";
      } else if (isPast) {
        en = `${subj} ${pastVerb} ${attr}.`;
        hi = `${pastHi} ${attrHi}।`;
        focus = "Past Possession (had)";
      } else if (isQuestion) {
        const aux = (subj === "He" || subj === "She" || subj === "The doctor" || subj === "Dr. Verma" || subj === "The enterprise" || subj === "Our team") ? "Does" : "Do";
        en = `${aux} ${subj.toLowerCase()} have ${attr}?`;
        hi = `क्या ${subjHi} ${attrHi}?`;
        focus = "Interrogative Possession Question (Do/Does... have?)";
      }

      bilingualExemplars.push({
        id: `d09_eg${String(idx).padStart(3, '0')}`,
        en,
        hi,
        breakdown: `${subj} [Subject] + ${isNegative ? negVerb : (isPast ? pastVerb : verb)} [Stative Verb] + ${attr} [Direct Object]`,
        category: cat,
        focusStructure: focus
      });
      idx++;
    });
  });

  const exercises = [];
  for (let i = 1; i <= 65; i++) {
    const exId = `d09_ex_${String(i).padStart(3, '0')}`;
    if (i <= 20) {
      const isSing = i % 2 !== 0;
      const subj = isSing ? (i % 4 === 1 ? "She" : "The director") : (i % 4 === 0 ? "They" : "We");
      const correct = isSing ? "has" : "have";
      const wrong = isSing ? "have" : "has";
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `Select the correct form: "${subj} _____ extensive experience in software development."`,
        options: [correct, wrong, "is having", "having"],
        correctAnswer: correct,
        difficulty: "standard",
        skillTag: "Stative Verb Agreement",
        explanationEn: `3rd person singular takes 'has'; others take 'have'. Stative possession cannot use '-ing'.`,
        explanationHi: `एकवचन कर्ता के साथ 'has' और बहुवचन/मध्यम पुरुष के साथ 'have' आता है। अधिकार के लिए '-ing' नहीं लगता।`
      });
    } else if (i <= 40) {
      const isSing = i % 2 !== 0;
      const subj = isSing ? "He" : "They";
      const correct = isSing ? "does not have" : "do not have";
      exercises.push({
        id: exId,
        type: "fill_blank",
        prompt: `Fill in the blank: "${subj} _____ (negative present possession) any prior experience."`,
        correctAnswer: correct,
        acceptableAlternatives: [correct, correct.replace(" not have", "n't have")],
        difficulty: "standard",
        skillTag: "Negative Possession Construction",
        explanationEn: `Negative possession uses 'do/does not have'.`,
        explanationHi: `नकारात्मक अधिकार के लिए 'do/does not have' का प्रयोग होता है।`
      });
    } else if (i <= 55) {
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: `Correct the fossilized error: "I am having two cars."`,
        correctAnswer: "I have two cars.",
        acceptableAlternatives: ["I have two cars."],
        difficulty: "standard",
        skillTag: "Stative Non-Continuous Rule",
        explanationEn: `Stative verbs of possession (have) cannot be used in continuous tenses. Say 'I have two cars.'`,
        explanationHi: `अधिकार व्यक्त करने वाली क्रिया 'have' का प्रयोग Continuous (-ing) में नहीं किया जाता। सही वाक्य है: 'I have two cars.'`
      });
    } else {
      exercises.push({
        id: exId,
        type: "transformation",
        prompt: `Form a question: "She has a valid driving license."`,
        correctAnswer: "Does she have a valid driving license?",
        acceptableAlternatives: ["Does she have a valid driving license?"],
        difficulty: "standard",
        skillTag: "Possession Question Formulation",
        explanationEn: `Use 'Does she have...?' with base verb 'have'.`,
        explanationHi: `'Does she have...?' का प्रयोग करें।`
      });
    }
  }

  const translationSet = [
    ["मेरे पास इस प्रोजेक्ट के लिए पर्याप्त समय और संसाधन हैं।", "I have sufficient time and resources for this project."],
    ["क्या उनके पास वैध अंतर्राष्ट्रीय पासपोर्ट है?", "Do they have a valid international passport?"],
    ["डॉ. शर्मा के पास कार्डियोलॉजी में बीस वर्षों का अनुभव है।", "Dr. Sharma has twenty years of experience in cardiology."],
    ["कल रात मुझे बहुत तेज सिरदर्द था।", "I had a severe headache last night."],
    ["क्या आपके पास इस समस्या का कोई व्यावहारिक समाधान है?", "Do you have any practical solution to this problem?"],
    ["हमारे संस्थान के पास सभी आवश्यक सरकारी अनुमतियां हैं।", "Our institution has all necessary governmental permissions."],
    ["उनके पास कोई अतिरिक्त वित्तीय देनदारी नहीं है।", "They do not have any additional financial liability."],
    ["क्या उस वैज्ञानिक के पास इस शोध का पेटेंट अधिकार था?", "Did that scientist have the patent rights for this research?"],
    ["अगले वर्ष हमारे पास एक अत्याधुनिक प्रयोगशाला होगी।", "Next year, we will have a state-of-the-art laboratory."],
    ["वह बहुत धैर्यवान है और उसके पास उत्कृष्ट संवाद कौशल है।", "She is very patient and has excellent communication skills."],
    ["Do you have any questions regarding our terms of service?", "क्या सेवा की शर्तों के संबंध में आपका कोई प्रश्न है?"],
    ["He has a natural aptitude for computer programming.", "उसके पास कंप्यूटर प्रोग्रामिंग के लिए एक स्वाभाविक प्रतिभा है।"],
    ["We had a very productive strategy meeting yesterday.", "कल हमारी बहुत ही उपयोगी और सफल रणनीति बैठक हुई थी।"],
    ["Does she have a master's degree in clinical psychology?", "क्या उसके पास क्लिनिकल साइकोलॉजी में मास्टर डिग्री है?"],
    ["They have strong ties of kinship and mutual support.", "उनके पास नातेदारी और पारस्परिक सहयोग के मजबूत संबंध हैं।"],
    ["I don't have any cash with me right now.", "इस समय मेरे पास कोई नकदी नहीं है।"],
    ["The patient has mild fever and cold symptoms.", "मरीज को हल्का बुखार और सर्दी के लक्षण हैं।"],
    ["Did they have the necessary blueprints before construction?", "क्या निर्माण से पहले उनके पास आवश्यक ब्लूप्रिंट थे?"],
    ["Our company has equal equity in the joint venture.", "संयुक्त उद्यम में हमारी कंपनी की समान हिस्सेदारी है।"],
    ["She had immense moral fortitude during difficult times.", "कठिन समय में उसके पास अपार नैतिक दृढ़ता और धैर्य था।"],
    ["क्या आपके दो भाई-बहन हैं?", "Do you have two siblings?"],
    ["मेरे पास कल सुबह की बैठक के लिए प्रेजेंटेशन फाइल है।", "I have the presentation file for tomorrow morning's meeting."],
    ["उनके पास इस ऐतिहासिक इमारत के मूल दस्तावेज हैं।", "They have the original documents of this historic building."],
    ["Does the candidate have verified professional credentials?", "क्या उम्मीदवार के पास सत्यापित पेशेवर योग्यता-प्रमाण हैं?"],
    ["We have complete confidence in our team's capability.", "हमें अपनी टीम की क्षमता पर पूरा भरोसा है।"]
  ].map(([source, target], idx) => ({
    id: `d09_tr_${String(idx + 1).padStart(2, '0')}`,
    source,
    target,
    direction: idx < 10 || idx >= 20 ? "hi_to_en" : "en_to_hi",
    focusGrammar: "Stative Possession (Has / Have / Had) & Attribute Dynamics"
  }));

  return {
    dayNumber: 9,
    id: "day_09",
    titleEn: "Possession, Relationships & Attributes: Has / Have / Had",
    titleHi: "अधिकार, संबंध और विशेषताएं: Has / Have / Had",
    cefr: "A1.1",
    estMinutes: 45,
    prerequisites: "Mastery of Verb 'To Be' across Present, Past, and Future",
    objectivesEn: [
      "Master the distribution of 'have' (I, you, we, they, plurals) and 'has' (he, she, it, singulars) for stative possession, kinship, health, and attributes.",
      "Apply past possession 'had' and future possession 'will have' accurately.",
      "Form standard questions using auxiliary 'do/does/did' ('Do you have...?', 'Does she have...?').",
      "Master the phonetics of the Schwa /ə/ (unstressed neutral vowel) and vowel reduction in multisyllabic words.",
      "Strictly eliminate the fossilized Indian English error of using progressive '-ing' for stative possession ('I am having two brothers' ❌)."
    ],
    objectivesHi: [
      "अधिकार, रिश्ते, स्वास्थ्य और गुणों को दर्शाने के लिए 'have' और 'has' के सटीक प्रयोग में निपुण होना।",
      "भूतकाल के अधिकार ('had') और भविष्यकाल ('will have') का सही प्रयोग करना।",
      "सहायक क्रिया 'do/does/did' के माध्यम से सही प्रश्न बनाना ('Do you have...?', 'Does she have...?')।",
      "अंग्रेजी की सबसे महत्वपूर्ण ध्वनि Schwa /ə/ और कमजोर शब्दांशों में स्वरों के ह्रास (Vowel Reduction) का अभ्यास करना।",
      "भारतीय अंग्रेजी की सबसे बड़ी गलती 'I am having a car' या 'I am having two brothers' को हमेशा के लिए समाप्त करना।"
    ],
    teach: {
      hindiExplanation: `डे 09 में आपका स्वागत है! आज हम सीखेंगे कि **अधिकार (Possession), रिश्ते (Relationships), स्वास्थ्य (Health Symptoms), और विशेषताएं (Attributes)** कैसे व्यक्त की जाती हैं।

### 1. 'Have' और 'Has' का नियम (Present Rule):
- **HAVE** का प्रयोग: **I, You, We, They** तथा सभी **बहुवचन संज्ञाओं** के साथ।
  - *I have a laptop.* (मेरे पास एक लैपटॉप है।)
  - *They have two cars.* (उनके पास दो कारें हैं।)
- **HAS** का प्रयोग: **He, She, It** तथा सभी **एकवचन संज्ञाओं** के साथ।
  - *She has a degree in physics.* (उसके पास भौतिकी में डिग्री है।)
  - *Dr. Sharma has immense experience.* (डॉ. शर्मा के पास अपार अनुभव है।)

### 2. काल विभाजन (Tense Matrix):
- **वर्तमान (Present)**: Have / Has (*I have a pen.*)
- **भूतकाल (Past)**: Had (सभी कर्ताओं के साथ: *I had a fever yesterday.*)
- **भविष्यकाल (Future)**: Will have (सभी कर्ताओं के साथ: *We will have a meeting tomorrow.*)

### 3. प्रश्न और नकारात्मक वाक्य (Do / Does Rule):
आधुनिक मानक अंग्रेजी में प्रश्न और नकारात्मक वाक्य बनाने के लिए **Do / Does** का प्रयोग होता है:
- नकारात्मक: *I do not (don't) have...* / *She does not (doesn't) have...* (ध्यान दें: does के बाद हमेशा मूल रूप **have** आता है!)
- प्रश्न: *Do you have a pen?* / *Does she have a car?* (❌ *Does she has* कभी न कहें!)`,
      englishExplanation: `Welcome to Day 09! This lesson covers primary possession, physical attributes, kinship relations, and health conditions using the stative verb *have / has / had*.

Core Principles:
1. **Stative Non-Continuous Constraint**: Verbs expressing possession (*have, own, possess*) describe a state, not a dynamic action. Consequently, they CANNOT take the progressive *-ing* aspect (*I am having a car* is strictly ungrammatical in standard English).
2. **Auxiliary-Do Support**: In modern English, interrogative and negative forms require *do/does/did* auxiliary support: *Do you have...?*, *She doesn't have...*.
3. **Dynamic Exception**: When 'have' denotes an activity (eating, drinking, experiencing), continuous aspect is permitted (*I am having lunch*, *We are having a meeting*).`,
      grammarRules: [
        {
          ruleNumber: 1,
          title: "Person-Number Agreement for Primary Possession",
          description: "Use 'has' with 3rd-person singular subjects (he, she, it, singular nouns). Use 'have' with 1st person (I), 2nd person (you), and all plurals (we, they, plural nouns).",
          register: "Universal Standard"
        },
        {
          ruleNumber: 2,
          title: "The Stative Non-Continuous Rule",
          description: "When expressing ownership, relationships, or attributes, 'have' is stative and cannot take '-ing'. Say 'I have a fever', NEVER 'I am having a fever'.",
          register: "Universal Standard"
        },
        {
          ruleNumber: 3,
          title: "Auxiliary Do-Support in Questions and Negatives",
          description: "Form questions with 'Do/Does + Subject + have...?' and negatives with 'Subject + do/does not have...'. Always use the base form 'have' after do/does/did.",
          register: "Universal Standard"
        }
      ],
      formulaTable: [
        { structure: "Affirmative Present Possession", formula: "Subject (I/You/We/They) + have + Object / Subject (He/She/It) + has + Object", example: "Dr. Sen has twenty years of experience." },
        { structure: "Negative Present Possession", formula: "Subject + do not / does not have + Object", example: "She does not have any prior liabilities." },
        { structure: "Yes/No Question", formula: "Do/Does + Subject + have + Object?", example: "Do you have a valid driving license?" },
        { structure: "Past Possession", formula: "Subject + had + Object", example: "I had a severe headache yesterday." }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Saying 'I am having two brothers' or 'I am having a car'",
        hindiPattern: "भारतीय शिक्षार्थी 'मेरे पास एक कार है' को वर्तमान काल समझकर अक्सर 'I am having a car' या 'I am having two sisters' बोल देते हैं।",
        potentialInterference: "Saying 'I am having a laptop' or 'She is having a headache.'",
        explanation: "Stative verbs of possession cannot be used in continuous aspect. 'Having' in continuous aspect only means consuming (eating/drinking) or experiencing an event.",
        naturalSolution: "Say: 'I have a laptop.' and 'She has a headache.'"
      }
    },
    phonetics: {
      targetSound: "The Schwa /ə/ (The unstressed neutral central vowel) and Vowel Reduction in English",
      articulatoryMechanics: {
        place: "Mid-central vowel (Tongue rests completely relaxed in the center of the mouth)",
        manner: "Short, relaxed, unrounded vowel sound",
        voicing: "Voiced, but pronounced with minimal vocal effort and very short duration",
        stepByStep: [
          "Completely relax your jaw, lips, and tongue as if you are sighing softly.",
          "Produce a very short, effortless sound: 'uh' (/ə/).",
          "Notice how unstressed syllables reduce to schwa: 'a-BOUT' (/əˈbaʊt/), 'DOC-tor' (/ˈdɒk.tər/), 'so-fa' (/ˈsəʊ.fə/).",
          "Never pronounce unstressed vowels with their full alphabetic letter values."
        ]
      },
      hindiSpeakerPhoneticTrap: "Indian speakers often pronounce every vowel in a word with full, equal phonetic weight (syllable-timed rhythm), failing to reduce unstressed vowels to the natural schwa /ə/.",
      minimalPairs: [
        { word1: "about", word2: "a boat", ipa1: "/əˈbaʊt/", ipa2: "/ə ˈbəʊt/", meaningHi1: "के बारे में (Schwa /ə/)", meaningHi2: "एक नाव" },
        { word1: "banana", word2: "ban", ipa1: "/bəˈnɑː.nə/", ipa2: "/bæn/", meaningHi1: "केला (दो schwa ध्वनियाँ)", meaningHi2: "प्रतिबंध" }
      ],
      prosodyFocus: "Sentence rhythm: Stress content words (nouns, main verbs) while reducing function words (to, a, have) to weak schwa forms."
    },
    learn: {
      vocabulary,
      spokenPhrases: [
        { id: "d09_p01", phrase: "Do you have a moment to speak?", ipa: "/duː juː hæv ə ˈməʊ.mənt tuː spiːk/", hindiMeaning: "क्या आपके पास बात करने के लिए थोड़ा समय है?", register: "Polite / Workplace", context: "Requesting a colleague's immediate time." },
        { id: "d09_p02", phrase: "I have no idea about that.", ipa: "/aɪ hæv nəʊ aɪˈdɪə əˈbaʊt ðæt/", hindiMeaning: "मुझे इस बारे में कोई जानकारी नहीं है।", register: "Casual / Honest", context: "Admitting lack of information." },
        { id: "d09_p03", phrase: "She has an excellent eye for detail.", ipa: "/ʃiː hæz ən ˈek.səl.ənt aɪ fɔːr ˈdiː.teɪl/", hindiMeaning: "उसकी बारीकियों को परखने की नजर बहुत अच्छी है।", register: "Professional / Commendation", context: "Praising a colleague's precision." },
        { id: "d09_p04", phrase: "We had a wonderful time together.", ipa: "/wiː hæd ə ˈwʌn.də.fəl taɪm təˈɡeð.ər/", hindiMeaning: "हमारा साथ में बहुत अच्छा समय बीता।", register: "Social / Warm", context: "Recalling a pleasant past gathering." }
      ]
    },
    examples: {
      bilingualExemplars
    },
    practice: {
      exercises,
      translationSet
    },
    use: {
      dialogue: {
        situation: "An HR manager conducts a preliminary interview assessing a senior software engineer's qualifications and professional attributes.",
        turns: [
          { speaker: "HR Director", textEn: "Good morning, Arun. Do you have your original academic credentials with you today?", textHi: "शुभ प्रभात, अरुण। क्या आज आपके पास अपने मूल शैक्षणिक योग्यता-प्रमाण हैं?" },
          { speaker: "Arun", textEn: "Good morning, ma'am. Yes, I have my master's degree certificate and professional portfolio right here.", textHi: "शुभ प्रभात, मैम। हाँ, मेरे पास मेरी मास्टर डिग्री का प्रमाणपत्र और व्यावसायिक पोर्टफोलियो यहीं हैं।" },
          { speaker: "HR Director", textEn: "Excellent. Does your previous organization have branches in Singapore or London?", textHi: "बहुत अच्छा। क्या आपके पिछले संस्थान की शाखाएं सिंगापुर या लंदन में हैं?" },
          { speaker: "Arun", textEn: "Yes, they have regional development centers in both cities.", textHi: "हाँ, दोनों शहरों में उनके क्षेत्रीय विकास केंद्र हैं।" },
          { speaker: "HR Director", textEn: "Wonderful. Did you have experience leading agile cross-functional teams in your past role?", textHi: "शानदार। क्या आपकी पिछली भूमिका में आपके पास विभिन्न टीमों का नेतृत्व करने का अनुभव था?" },
          { speaker: "Arun", textEn: "Yes, I had a dedicated team of eight software engineers under my direct supervision.", textHi: "हाँ, मेरे प्रत्यक्ष पर्यवेक्षण में आठ सॉफ्टवेयर इंजीनियरों की एक समर्पित टीम थी।" }
        ],
        culturalNotes: "In professional interviews, answering with 'Yes, I have...' or 'Yes, I had...' shows crisp grammatical precision and executive confidence."
      },
      speakingTask: {
        promptEn: "Describe your professional skills, credentials, and two personality attributes using 'I have', and mention what experience you had in the past.",
        promptHi: "'I have' और 'I had' का प्रयोग करके अपने कौशल, डिग्रियों, और दो व्यक्तित्व गुणों का 1 मिनट में अंग्रेजी में वर्णन करें।",
        modelResponse: "I have a bachelor's degree in computer science and five years of hands-on industry expertise. In addition, I have great patience and analytical problem-solving skills. In my previous organization, I had the privilege of leading critical cloud migration projects."
      }
    },
    assess: {
      writtenChecklist: [
        "Can correctly choose between 'have' and 'has' with 100% precision.",
        "Can use auxiliary 'do/does' to form questions and negatives correctly.",
        "Strictly avoids saying 'I am having a car' or 'I am having a headache'."
      ],
      oralProductionTask: "Speak 5 sentences describing your family relationships, assets, and health state using 'have/has/had'.",
      benchmarks: {
        accuracyThreshold: "90%",
        reviewIntervals: [1, 3, 7, 14]
      }
    },
    review: {
      spacedRepetitionTag: "A1_STAGE1_DAY09_POSSESSION_HAVE",
      recommendedIntervalDays: [1, 3, 7, 14]
    }
  };
}

// ----------------------------------------------------------------------
// DAY 10 GENERATOR
// ----------------------------------------------------------------------
function buildDay10() {
  const { rawTerms } = getDay10Data();
  const vocabulary = rawTerms.map((term, i) => makeVocab(`d10_v${String(i + 1).padStart(2, '0')}`, term));

  // 10 Integrated Structural Families for Cumulative Synthesis
  const synthesisCategories = [
    { cat: "Greetings & Register Selection", template: (subj, pred) => `Good morning, ${subj}. It is a great honor to ${pred}.`, hiTemplate: (subj, pred) => `शुभ प्रभात, ${subj}। यह ${pred} हमारे लिए बड़े सम्मान की बात है।` },
    { cat: "Present State Copula (Is/Am/Are)", template: (subj, pred) => `${subj} is extremely competent in ${pred}.`, hiTemplate: (subj, pred) => `${subj} ${pred} में अत्यंत सक्षम हैं।` },
    { cat: "Past State Copula (Was/Were)", template: (subj, pred) => `${subj} was present at the headquarters yesterday during the ${pred}.`, hiTemplate: (subj, pred) => `${subj} कल मुख्यालय में ${pred} के दौरान उपस्थित थे।` },
    { cat: "Future State Copula (Will Be)", template: (subj, pred) => `${subj} will be in Bangalore tomorrow for the ${pred}.`, hiTemplate: (subj, pred) => `${subj} कल बैंगलोर में ${pred} के लिए उपस्थित होंगे।` },
    { cat: "Spatial Demonstratives (This/That/These/Those)", template: (subj, pred) => `These research documents are vital for the ${pred}.`, hiTemplate: (subj, pred) => `ये शोध दस्तावेज़ ${pred} के लिए अत्यंत महत्वपूर्ण हैं।` },
    { cat: "Existential Clauses (There is / There are)", template: (subj, pred) => `There are several state-of-the-art facilities available for ${pred}.`, hiTemplate: (subj, pred) => `${pred} के लिए कई अत्याधुनिक सुविधाएं उपलब्ध हैं।` },
    { cat: "Possessive Adjectives & 's Genitive", template: (subj, pred) => `Dr. Sharma's dedicated team has complete responsibility for ${pred}.`, hiTemplate: (subj, pred) => `डॉ. शर्मा की समर्पित टीम के पास ${pred} की पूरी ज़िम्मेदारी है।` },
    { cat: "Primary Possession (Has/Have/Had)", template: (subj, pred) => `${subj} has verified academic credentials and deep expertise in ${pred}.`, hiTemplate: (subj, pred) => `${subj} के पास ${pred} में सत्यापित शैक्षणिक योग्यता और गहरी विशेषज्ञता है।` },
    { cat: "Interrogative Inversion & Wh- Questions", template: (subj, pred) => `Where will the senior delegates be during the ${pred}?`, hiTemplate: (subj, pred) => `${pred} के दौरान वरिष्ठ प्रतिनिधि कहाँ उपस्थित होंगे?` },
    { cat: "Negative Stative Formulations", template: (subj, pred) => `${subj} was not aware of any unexpected delays in ${pred}.`, hiTemplate: (subj, pred) => `${subj} ${pred} में किसी भी अप्रत्याशित देरी से अवगत नहीं थे।` }
  ];

  const subjects = ["Dr. Sen", "The chief architect", "Our executive team", "Ms. Kapoor", "The lead researcher", "Our director", "The senior auditor", "Professor Verma", "The project manager", "The principal consultant"];
  const domains = ["the annual scientific review", "the aerospace safety audit", "the international symposium", "the clean energy initiative", "the digital transformation strategy", "the clinical trials evaluation", "the regional economic summit", "the cybersecurity protocol", "the urban infrastructure project", "the institutional accreditation"];

  const bilingualExemplars = [];
  let idx = 1;
  synthesisCategories.forEach((fam, fIdx) => {
    domains.forEach((dom, dIdx) => {
      const subj = subjects[dIdx % subjects.length];
      const en = fam.template(subj, dom);
      const hi = fam.hiTemplate(subj, dom);
      bilingualExemplars.push({
        id: `d10_eg${String(idx).padStart(3, '0')}`,
        en,
        hi,
        breakdown: `[Category: ${fam.cat}] -> Syntactic Integration of Stage 1 Foundations`,
        category: fam.cat,
        focusStructure: `Stage 1 Mastery Synthesis: ${fam.cat}`
      });
      idx++;
    });
  });

  const exercises = [];
  for (let i = 1; i <= 65; i++) {
    const exId = `d10_ex_${String(i).padStart(3, '0')}`;
    if (i <= 20) {
      // Diagnostic Multiple Choice across All 10 Days
      exercises.push({
        id: exId,
        type: "multiple_choice",
        prompt: `Diagnostic Synthesis: Choose the grammatically flawless sentence:`,
        options: [
          "There are three auditoriums in the new campus.",
          "There is three auditoriums in the new campus.",
          "In the new campus three auditoriums are.",
          "There have three auditoriums in the new campus."
        ],
        correctAnswer: "There are three auditoriums in the new campus.",
        difficulty: "advanced",
        skillTag: "Stage 1 Comprehensive Syntax Mastery",
        explanationEn: `'Three auditoriums' is plural, which strictly requires 'There are'.`,
        explanationHi: `'Three auditoriums' बहुवचन संज्ञा है, जिसके साथ 'There are' का प्रयोग अनिवार्य है।`
      });
    } else if (i <= 40) {
      // Comprehensive Fill-in-the-Blanks
      exercises.push({
        id: exId,
        type: "fill_blank",
        prompt: `Fill in the blank with the correct form of 'be' or 'have': "Last night, they _____ (past copula) at the conference, and tomorrow they _____ (future copula) in Mumbai."`,
        correctAnswer: "were, will be",
        acceptableAlternatives: ["were, will be", "were / will be"],
        difficulty: "advanced",
        skillTag: "Temporal Copula Synthesis",
        explanationEn: `Past plural takes 'were'; future invariant takes 'will be'.`,
        explanationHi: `भूतकाल बहुवचन में 'were' और भविष्यकाल में 'will be' आता है।`
      });
    } else if (i <= 55) {
      // Indian English Top 10 Fossilized Error Audit
      const wrong = i % 2 === 0 ? "I am having two sisters and one brother." : "Yesterday night he was go to market.";
      const right = i % 2 === 0 ? "I have two sisters and one brother." : "Last night he went to the market.";
      exercises.push({
        id: exId,
        type: "error_correction",
        prompt: `Audit and rectify the fossilized error: "${wrong}"`,
        correctAnswer: right,
        difficulty: "advanced",
        skillTag: "L1 Interference Rectification",
        explanationEn: `Stative possession cannot use '-ing'; past action requires past verb and 'last night'.`,
        explanationHi: `अधिकार में '-ing' नहीं लगता और 'yesterday night' की जगह 'last night' आता है।`
      });
    } else {
      exercises.push({
        id: exId,
        type: "transformation",
        prompt: `Transform into an inverted Wh- question inquiring about location tomorrow: "The director will be in Delhi tomorrow."`,
        correctAnswer: "Where will the director be tomorrow?",
        acceptableAlternatives: ["Where will the director be tomorrow?"],
        difficulty: "advanced",
        skillTag: "Comprehensive Question Inversion",
        explanationEn: `Formula: Wh-word + will + subject + be + time adverb?`,
        explanationHi: `नियम: Wh-word + will + subject + be + time adverb?`
      });
    }
  }

  const translationSet = [
    ["शुभ प्रभात। क्या डॉ. शर्मा आज सुबह अपने कार्यालय में उपस्थित हैं?", "Good morning. Is Dr. Sharma present in his office this morning?"],
    ["कल रात सभागार में पाँच सौ से अधिक प्रतिनिधि उपस्थित थे।", "There were over five hundred delegates present in the auditorium last night."],
    ["हमारे पास इस वैज्ञानिक शोध के लिए सभी आवश्यक उपकरण और संसाधन हैं।", "We have all necessary equipment and resources for this scientific research."],
    ["कल दोपहर हम सब नए परिसर के उद्घाटन समारोह में होंगे।", "Tomorrow afternoon, we will all be at the inauguration ceremony of the new campus."],
    ["क्या आपके पास इस जटिल समस्या का कोई व्यावहारिक समाधान है?", "Do you have any practical solution to this complex problem?"],
    ["यह इमारत प्राचीन काल में हमारे पूर्वजों का पैतृक निवास स्थान थी।", "This building was the ancestral residence of our forefathers in antiquity."],
    ["इस क्षेत्र के आस-पास कई विश्वस्तरीय अस्पताल और अनुसंधान केंद्र हैं।", "There are several world-class hospitals and research centers in the vicinity of this region."],
    ["वह अपने विभाग की सबसे होनहार और समर्पित शोधकर्ता है।", "She is the most promising and dedicated researcher in her department."],
    ["क्या आप पिछले सोमवार को गुड़गांव के क्लाइंट सम्मेलन में थे?", "Were you at the client conference in Gurgaon last Monday?"],
    ["यह ऐतिहासिक निर्णय हमारे संस्थान के भविष्य के लिए एक महत्वपूर्ण मील का पत्थर होगा।", "This historic decision will be a crucial milestone for the future of our institution."],
    ["Good afternoon. It is an absolute pleasure to welcome you all.", "शुभ दोपहर। आप सभी का स्वागत करते हुए हमें अत्यंत प्रसन्नता हो रही है।"],
    ["There is no substitute for hard work and daily consistency.", "कठिन परिश्रम और दैनिक निरंतरता का कोई विकल्प नहीं है।"],
    ["She has deep domain expertise in cardiovascular surgery.", "उनके पास हृदय रोग सर्जरी में गहरी विषय-विशेषज्ञता है।"],
    ["Were they aware of the recent amendments to the bylaws?", "क्या वे उपनियमों में हुए हालिया संशोधनों से अवगत थे?"],
    ["Our team will be in constant readiness for any operational challenge.", "हमारी टीम किसी भी परिचालन चुनौती के लिए निरंतर तत्परता में रहेगी।"],
    ["This software has state-of-the-art cybersecurity encryption.", "इस सॉफ्टवेयर में अत्याधुनिक साइबर सुरक्षा एन्क्रिप्शन है।"],
    ["There were no unexpected delays during the product rollout.", "उत्पाद लॉन्च के दौरान कोई अप्रत्याशित देरी नहीं हुई थी।"],
    ["Do you have your original degree certificate with you today?", "क्या आज आपके पास आपका मूल डिग्री प्रमाणपत्र है?"],
    ["He was once the chief administrative officer of this university.", "वह कभी इस विश्वविद्यालय के मुख्य प्रशासनिक अधिकारी थे।"],
    ["The upcoming fiscal quarter will be transformative for our startup.", "आगामी वित्तीय तिमाही हमारे स्टार्टअप के लिए परिवर्तनकारी होगी।"],
    ["सत्य और ईमानदारी ही एक महान नेतृत्वकर्ता की सबसे बड़ी पहचान हैं।", "Truth and integrity are the greatest hallmarks of a great leader."],
    ["क्या इस स्मार्ट सिटी में चौबीसों घंटे सार्वजनिक परिवहन की सुविधा है?", "Is there 24-hour public transport facility in this smart city?"],
    ["मेरे पास इस अंतरराष्ट्रीय परियोजना के लिए पूरी तैयारी है।", "I have complete preparation for this international project."],
    ["The preliminary audit findings were overwhelmingly positive.", "प्रारंभिक ऑडिट के निष्कर्ष अत्यधिक सकारात्मक थे।"],
    ["Stage 1 synthesis mastery is the rock-solid foundation for future fluency.", "चरण 1 की समग्र महारत भविष्य के धाराप्रवाह अंग्रेजी संचार की मजबूत आधारशिला है।"]
  ].map(([source, target], idx) => ({
    id: `d10_tr_${String(idx + 1).padStart(2, '0')}`,
    source,
    target,
    direction: idx < 10 || idx >= 20 ? "hi_to_en" : "en_to_hi",
    focusGrammar: "Stage 1 Cumulative Synthesis & Diagnostic Fluency Benchmark"
  }));

  return {
    dayNumber: 10,
    id: "day_10",
    titleEn: "Stage 1 Cumulative Review, Error Audit & Synthesis Mastery",
    titleHi: "चरण 1: संपूर्ण पुनरावलोकन, त्रुटि निवारण और समग्र मूल्यांकन",
    cefr: "A1.1 -> A1.2 Benchmark",
    estMinutes: 50,
    prerequisites: "Completion of Days 1 through 9",
    objectivesEn: [
      "Synthesize all Stage 1 core syntactic structures: Greetings, Pronouns, Be-Verbs (Present, Past, Future), Demonstratives, Possessives, Existentials ('There is/are/was/were'), and Possession ('Has/Have/Had').",
      "Audit and completely eradicate the Top 10 fossilized L1 Indian English transfer errors with linguistic precision.",
      "Master word stress shifts between noun/verb homographs and apply content vs function word sentence rhythm.",
      "Execute fluent multi-turn spoken dialogue across professional and social registers without translation hesitation.",
      "Attain official CEFR A1.1 to A1.2 transitional certification benchmark."
    ],
    objectivesHi: [
      "चरण 1 के सभी 9 दिनों के मूल व्याकरणिक ढाँचों (Greetings, Pronouns, Is/Am/Are, Was/Were, Will Be, This/That, There is/are, Has/Have) का समग्र समन्वय करना।",
      "भारतीय अंग्रेजी (L1 Interference) की 10 सबसे बड़ी पुरानी गलतियों का तार्किक और पूर्ण निवारण करना।",
      "संज्ञा और क्रिया के बीच स्वराघात परिवर्तन (Word Stress Shifts) और अंग्रेजी वाक्य की प्राकृतिक लय (Sentence Rhythm) में निपुण होना।",
      "बिना किसी हिचकिचाहट या शब्दशः अनुवाद के पेशेवर और सामाजिक वातावरण में धाराप्रवाह संवाद करना।",
      "CEFR A1.1 से A1.2 स्तर के आधिकारिक मूल्यांकन मानक को सफलतापूर्वक उत्तीर्ण करना।"
    ],
    teach: {
      hindiExplanation: `बधाई हो! आप **स्टेज 1 (दिन 1 से 10)** के अंतिम और सबसे महत्वपूर्ण पड़ाव पर पहुंच चुके हैं! 

### 1. स्टेज 1 का समग्र संरचना सूत्र (Master Decision Tree):
1. **अवस्था / स्थिति (State / Identity / Location)**:
   - वर्तमान: **Is / Am / Are** (*She is a doctor. They are ready.*)
   - भूतकाल: **Was / Were** (*He was in Delhi yesterday. We were busy.*)
   - भविष्यकाल: **Will Be** (*I will be there tomorrow.*)
2. **अस्तित्व की घोषणा (Existence of Entities)**:
   - **There is / There are** (*There is a hospital nearby. There are two parks.*)
   - **There was / There were** (*There was a meeting. There were many delegates.*)
   - **There will be** (*There will be an exam.*)
3. **अधिकार / रिश्ते / गुण (Possession & Attributes)**:
   - **Has / Have / Had** (*I have a car. She has expertise. We had a problem.*)
   - *चेतावनी*: कभी भी 'I am having a car' ❌ न कहें!

### 2. भारतीय अंग्रेजी की शीर्ष 10 गलतियों का निवारण (Top 10 L1 Error Audit):
1. ❌ *Yesterday night* ➔ ✔️ **Last night**
2. ❌ *I am having two brothers* ➔ ✔️ **I have two brothers**
3. ❌ *She is having headache* ➔ ✔️ **She has a headache**
4. ❌ *In my house four rooms are* ➔ ✔️ **There are four rooms in my house**
5. ❌ *He was go there* ➔ ✔️ **He went there / He was there**
6. ❌ *Does she has a car?* ➔ ✔️ **Does she have a car?**
7. ❌ *Tomorrow I am in Mumbai* ➔ ✔️ **Tomorrow I will be in Mumbai**
8. ❌ *He don't know* ➔ ✔️ **He doesn't know**
9. ❌ *Myself Dr. Sharma* ➔ ✔️ **I am Dr. Sharma / My name is Dr. Sharma**
10. ❌ *Those sceneries are beautiful* ➔ ✔️ **That scenery is beautiful**`,
      englishExplanation: `Congratulations on reaching Day 10! This milestone unifies all Stage 1 syntactic, lexical, and phonological foundations into an integrated communicative engine.

Key Pedagogical Focus:
1. **Syntactic Synthesis**: Seamlessly navigating between identity copulas (*to be*), existential locatives (*there is/are*), and stative possession (*have/has*).
2. **L1 Fossilization Dismantling**: Systematic eradication of structural calques from Hindi into English.
3. **Phonological Cadence**: Transitioning from word-by-word staccato delivery to continuous, rhythmic connected speech utilizing stress-timing and vowel reduction.`,
      grammarRules: [
        {
          ruleNumber: 1,
          title: "Master Stative Triad (Be vs Existential vs Have)",
          description: "Distinguish between Subject Identity (Subject + be), Existence (There + be + Subject), and Possession (Subject + have + Object).",
          register: "Universal Standard"
        },
        {
          ruleNumber: 2,
          title: "Auxiliary Harmony in Inversions",
          description: "Use be-inversion for copulas ('Are you ready?'), modal inversion for future ('Will you be there?'), and do-support for lexical verbs ('Do you have a license?').",
          register: "Universal Standard"
        },
        {
          ruleNumber: 3,
          title: "The Zero Double-Marking Rule",
          description: "Never double-mark tense or number: after 'does/did', the verb returns to bare infinitive 'have' (e.g. 'Does she have...?', 'Did you have...?').",
          register: "Universal Standard"
        }
      ],
      formulaTable: [
        { structure: "Identity / State", formula: "Subject + be-verb + [Adjective / Noun]", example: "She is a senior consultant." },
        { structure: "Spatial Existence", formula: "There + be-verb + [Noun Phrase] + Location", example: "There are three auditoriums in the complex." },
        { structure: "Stative Possession", formula: "Subject + has/have/had + [Object Phrase]", example: "Our team has profound domain expertise." },
        { structure: "Future Commitment", formula: "Subject + will be / will have + Complement", example: "We will be fully prepared tomorrow." }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Reverting to Word-for-Word Hindi Calquing under Spontaneous Pressure",
        hindiPattern: "दबाव में या तेजी से बोलते समय शिक्षार्थी फिर से हिंदी के शब्दों का सीधा अनुवाद करने लगते हैं (जैसे 'Myself Dr. Sharma' या 'Today morning I was go').",
        potentialInterference: "Calquing Hindi word order directly into English under spontaneous speaking pressure.",
        explanation: "English requires strict Subject-Verb-Object word order and explicit dummy subjects where Hindi uses null subjects.",
        naturalSolution: "Pause for one second, visualize the English formula: [Subject] + [Verb] + [Complement], and speak calmly with falling intonation."
      }
    },
    phonetics: {
      targetSound: "Word Stress Shifts in Homographs & Content vs Function Word Sentence Rhythm",
      articulatoryMechanics: {
        place: "Suprasegmental prosody across syllables and words",
        manner: "Pitch rise, increased vowel duration, and vowel clarity on stressed syllables; reduction to schwa on unstressed syllables",
        voicing: "Voiced vowel nucleus prolonged on primary stress",
        stepByStep: [
          "Noun vs Verb Stress Shifts: In 2-syllable homographs, nouns are stressed on the 1st syllable, while verbs are stressed on the 2nd syllable.",
          "Examples: 'a PRE-sent' (Noun: उपहार) vs 'to pre-SENT' (Verb: प्रस्तुत करना); 'a RE-cord' (Noun: अभिलेख) vs 'to re-CORD' (Verb: रिकॉर्ड करना).",
          "Sentence Rhythm: Stress CONTENT words (nouns, main verbs, adjectives) and pronounce FUNCTION words (prepositions, auxiliary verbs, articles) softly and quickly."
        ]
      },
      hindiSpeakerPhoneticTrap: "Indian speakers often pronounce every word in a sentence with equal loudness and duration (syllable-timed delivery), which sounds robotic and unnatural to international listeners.",
      minimalPairs: [
        { word1: "PRE-sent (Noun)", word2: "pre-SENT (Verb)", ipa1: "/ˈprez.ənt/", ipa2: "/prɪˈzent/", meaningHi1: "उपहार / वर्तमान", meaningHi2: "प्रस्तुत करना" },
        { word1: "RE-cord (Noun)", word2: "re-CORD (Verb)", ipa1: "/ˈrek.ɔːd/", ipa2: "/rɪˈkɔːd/", meaningHi1: "अभिलेख / रिकॉर्ड", meaningHi2: "दर्ज करना" },
        { word1: "OB-ject (Noun)", word2: "ob-JECT (Verb)", ipa1: "/ˈɒb.dʒɪkt/", ipa2: "/əbˈdʒekt/", meaningHi1: "वस्तु / उद्देश्य", meaningHi2: "आपत्ति करना" }
      ],
      prosodyFocus: "Natural falling intonation on definitive declarative conclusions: 'I have com-PLET-ed Stage 1 with complete MAS-ter-y. ↘'"
    },
    learn: {
      vocabulary,
      spokenPhrases: [
        { id: "d10_p01", phrase: "I am delighted to present our findings today.", ipa: "/aɪ æm dɪˈlaɪ.tɪd tuː prɪˈzent ˈaʊər ˈfaɪn.dɪŋz təˈdeɪ/", hindiMeaning: "आज अपने निष्कर्ष प्रस्तुत करते हुए मुझे बेहद खुशी हो रही है।", register: "Formal / Executive", context: "Opening a high-level presentation." },
        { id: "d10_p02", phrase: "Let us summarize the key takeaways.", ipa: "/let ʌs ˈsʌm.ər.aɪz ðə kiː ˈteɪk.ə.weɪz/", hindiMeaning: "आइए प्रमुख मुख्य बिंदुओं का संक्षेप में पुनरावलोकन करें।", register: "Workplace / Academic", context: "Leading a meeting conclusion." },
        { id: "d10_p03", phrase: "There is immense scope for future growth.", ipa: "/ðeər ɪz ɪˈmens skəʊp fɔːr ˈfjuː.tʃər ɡrəʊθ/", hindiMeaning: "भविष्य के विकास के लिए अपार संभावनाएं हैं।", register: "Strategic / Encouraging", context: "Visionary closing remark." },
        { id: "d10_p04", phrase: "Thank you for your continuous dedication.", ipa: "/θæŋk juː fɔːr jɔːr kənˈtɪn.ju.əs ˌded.ɪˈkeɪ.ʃən/", hindiMeaning: "आपके निरंतर समर्पण के लिए धन्यवाद।", register: "Leadership / Gracious", context: "Acknowledging team effort." }
      ]
    },
    examples: {
      bilingualExemplars
    },
    practice: {
      exercises,
      translationSet
    },
    use: {
      dialogue: {
        situation: "A learner completes a comprehensive Stage 1 exit interview with an international academic evaluator, demonstrating effortless mastery.",
        turns: [
          { speaker: "Evaluator", textEn: "Good morning, Priya. Welcome to your Stage 1 comprehensive evaluation.", textHi: "शुभ प्रभात, प्रिया। आपके चरण 1 के समग्र मूल्यांकन में आपका स्वागत है।" },
          { speaker: "Priya", textEn: "Good morning, Professor. Thank you. I am fully prepared and delighted to be here.", textHi: "शुभ प्रभात, प्रोफेसर। धन्यवाद। मैं पूरी तरह तैयार हूँ और यहाँ आकर बेहद प्रसन्न हूँ।" },
          { speaker: "Evaluator", textEn: "Excellent. Can you describe where you were yesterday and what facilities exist in your institution?", textHi: "शानदार। क्या आप बता सकती हैं कि आप कल कहाँ थीं और आपके संस्थान में क्या सुविधाएं हैं?" },
          { speaker: "Priya", textEn: "Certainly. Yesterday afternoon, I was in our regional science center. There are three advanced computer laboratories and a spacious auditorium on our campus.", textHi: "अवश्य। कल दोपहर मैं हमारे क्षेत्रीय विज्ञान केंद्र में थी। हमारे परिसर में तीन उन्नत कंप्यूटर प्रयोगशालाएं और एक विशाल सभागार है।" },
          { speaker: "Evaluator", textEn: "Impressive fluency. And what credentials and future plans do you have?", textHi: "प्रभावशाली प्रवाह। और आपके पास क्या योग्यताएं और भविष्य की योजनाएं हैं?" },
          { speaker: "Priya", textEn: "I have a master's degree in environmental science, and tomorrow our research group will be presenting our clean energy proposal to the board.", textHi: "मेरे पास पर्यावरण विज्ञान में मास्टर डिग्री है, और कल हमारा शोध समूह बोर्ड के समक्ष स्वच्छ ऊर्जा प्रस्ताव प्रस्तुत कर रहा होगा।" },
          { speaker: "Evaluator", textEn: "Outstanding! Your grammatical precision, stress placement, and clarity are exemplary. You have officially passed Stage 1 with honors.", textHi: "उत्कृष्ट! आपकी व्याकरणिक सटीकता, स्वराघात और स्पष्टता अनुकरणीय हैं। आपने आधिकारिक रूप से सम्मान के साथ चरण 1 उत्तीर्ण कर लिया है।" }
        ],
        culturalNotes: "Demonstrating synthesis across multiple temporal and structural frames in a single conversation is the hallmark of an articulate communicator."
      },
      speakingTask: {
        promptEn: "Deliver a 2-minute comprehensive self-presentation synthesizing all Stage 1 foundations: personal identity, past background, current facilities, professional possessions/qualifications, and upcoming future goals.",
        promptHi: "व्यक्तिगत पहचान, अतीत की पृष्ठभूमि, वर्तमान सुविधाएं, योग्यताएं, और भविष्य के लक्ष्यों को जोड़ते हुए 2 मिनट का संपूर्ण अंग्रेजी आत्म-परिचय दें।",
        modelResponse: "Good morning, esteemed colleagues. My name is Vikram Sharma, and I am a senior research scientist in aerospace engineering. Yesterday, our team was at the national space center reviewing propulsion data. In our university campus, there are cutting-edge computational clusters and dedicated research facilities. I have extensive expertise in aerodynamics and two international patent filings. Tomorrow morning, we will be in Bangalore for the national aerospace symposium. Thank you for this wonderful opportunity."
      }
    },
    assess: {
      writtenChecklist: [
        "Can seamlessly switch between be-verbs, existentials ('There is/are'), and possession ('have/has') without pause.",
        "Has eliminated all 10 fossilized Indian English interference patterns.",
        "Demonstrates precise word stress shifts on noun/verb homographs."
      ],
      oralProductionTask: "Deliver a 2-minute spontaneous capstone monologue synthesizing all Stage 1 grammatical domains.",
      benchmarks: {
        accuracyThreshold: "95%",
        reviewIntervals: [1, 7, 30, 90]
      }
    },
    review: {
      spacedRepetitionTag: "A1_STAGE1_DAY10_SYNTHESIS_CAPSTONE",
      recommendedIntervalDays: [1, 7, 30, 90]
    }
  };
}

// ----------------------------------------------------------------------
// MAIN EXECUTION ROUTINE
// ----------------------------------------------------------------------
export async function generateDays06To10() {
  console.log("[STAGE 1 BUILDER] Generating Days 06 through 10...");

  const dayBuilders = [
    { num: "06", fn: buildDay06 },
    { num: "07", fn: buildDay07 },
    { num: "08", fn: buildDay08 },
    { num: "09", fn: buildDay09 },
    { num: "10", fn: buildDay10 }
  ];

  for (const { num, fn } of dayBuilders) {
    const dayData = fn();
    const filePath = path.join(process.cwd(), 'content_builder', `day${num}.js`);
    const fileContent = `// Auto-generated Master Enriched Lesson for Day ${num}
export const day${num} = ${JSON.stringify(dayData, null, 2)};
`;
    fs.writeFileSync(filePath, fileContent, 'utf-8');
    console.log(`[SUCCESS] Day ${num} generated: vocab=${dayData.learn.vocabulary.length}, exemplars=${dayData.examples.bilingualExemplars.length}, exercises=${dayData.practice.exercises.length}, translations=${dayData.practice.translationSet.length}`);
  }

  console.log("[STAGE 1 BUILDER] All 5 days successfully generated and written to disk.");
}

generateDays06To10();
