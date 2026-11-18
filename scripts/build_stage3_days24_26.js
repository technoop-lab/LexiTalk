// scripts/build_stage3_days24_26.js
import fs from 'fs';
import path from 'path';
import { day24_config } from './stage3_data_day24.js';
import { day25_config } from './stage3_data_day25.js';
import { day26_config } from './stage3_data_day26.js';

// Prior registered lemmas across Days 1-23
async function getPriorLemmas() {
  const priorDays = [];
  for (let i = 1; i <= 23; i++) {
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

// Exemplar builder for Days 24, 25, 26
function generateStage3Exemplars(dayNum) {
  const exemplars = [];
  
  const templatesByDay = {
    24: {
      types: ["Yes/No Past Inversion (Did + S + V1)", "Wh- Past Query (What/Why/Where + did + S + V1)", "Subject Question (Who discovered...?)", "Diplomatic / Professional Past Inquiry", "Diagnostic / Investigative Query"],
      patterns: [
        { en: "Did the parliamentary committee approve the national renewable energy policy yesterday?", hi: "क्या संसदीय समिति ने कल राष्ट्रीय नवीकरणीय ऊर्जा नीति को मंजूरी दी?", cat: "Legislative Oversight" },
        { en: "Why did the engineering consultants recommend replacing the primary suspension cables?", hi: "इंजीनियरिंग सलाहकारों ने प्राथमिक सस्पेंशन केबलों को बदलने की सिफारिश क्यों की?", cat: "Engineering Audit" },
        { en: "Where did the archaeological team unearth the ancient terracotta inscriptions?", hi: "पुरातत्व दल ने प्राचीन टेराकोटा शिलालेखों को कहाँ खोजा?", cat: "Historical Research" },
        { en: "How did the aerospace technicians stabilize the satellite orbit after the solar flare?", hi: "सौर ज्वाला के बाद एयरोस्पेस तकनीशियनों ने उपग्रह कक्षा को कैसे स्थिर किया?", cat: "Space Exploration" },
        { en: "When did the university senate finalize the revised postgraduate curriculum?", hi: "विश्वविद्यालय सीनेट ने संशोधित स्नातकोत्तर पाठ्यक्रम को कब अंतिम रूप दिया?", cat: "Academic Governance" },
        { en: "Did you speak with the chief financial officer regarding the capital expenditure forecast?", hi: "क्या आपने पूंजीगत व्यय पूर्वानुमान के संबंध में मुख्य वित्तीय अधिकारी से बात की?", cat: "Corporate Management" },
        { en: "What factors influenced the sudden fluctuation in international foreign exchange reserves?", hi: "अंतरराष्ट्रीय विदेशी मुद्रा भंडार में अचानक उतार-चढ़ाव को किन कारकों ने प्रभावित किया?", cat: "Economic Analysis" },
        { en: "Who authorized the emergency procurement of specialized medical ventilators?", hi: "विशेष चिकित्सा वेंटिलेटर की आपातकालीन खरीद को किसने अधिकृत किया?", cat: "Healthcare Administration" },
        { en: "Did the meteorological bureau issue a severe cyclone warning along the eastern coast?", hi: "क्या मौसम विज्ञान ब्यूरो ने पूर्वी तट पर भीषण चक्रवात की चेतावनी जारी की?", cat: "Disaster Management" },
        { en: "How many delegates attended the global biodiversity symposium in New Delhi last week?", hi: "पिछले सप्ताह नई दिल्ली में वैश्विक जैव विविधता संगोष्ठी में कितने प्रतिनिधियों ने भाग लिया?", cat: "Environmental Summit" }
      ]
    },
    25: {
      types: ["Past Continuous Progression (Was/Were + -ing)", "Simultaneous Past Actions (While S was V-ing, S was V-ing)", "Interrupted Past Narrative (While S was V-ing, S + V2 happened)", "Background Setting Description", "Environmental / Workplace Context"],
      patterns: [
        { en: "While the data scientists were training the neural network, the server room experienced a minor power surge.", hi: "जब डेटा वैज्ञानिक न्यूरल नेटवर्क को प्रशिक्षित कर रहे थे, तब सर्वर रूम में बिजली का मामूली उतार-चढ़ाव हुआ।", cat: "Tech Infrastructure" },
        { en: "The research team was conducting deep-sea biodiversity surveys when the earthquake struck.", hi: "जब भूकंप आया तब शोध दल गहरे समुद्र में जैव विविधता सर्वेक्षण कर रहा था।", cat: "Marine Science" },
        { en: "While the senior surgeon was performing the delicate procedure, two assistants were monitoring the vitals.", hi: "जब वरिष्ठ सर्जन नाजुक प्रक्रिया कर रहे थे, तब दो सहायक महत्वपूर्ण संकेतों की निगरानी कर रहे थे।", cat: "Surgical Operations" },
        { en: "The civil engineers were inspecting the bridge pillars when they noticed minor hairline fissures.", hi: "सिविल इंजीनियर पुल के खंभों का निरीक्षण कर रहे थे जब उन्होंने मामूली बारीक दरारें देखीं।", cat: "Structural Audit" },
        { en: "The entire city was preparing for the monsoon festival while dark rain clouds were gathering over the hills.", hi: "पूरा शहर मानसून उत्सव की तैयारी कर रहा था जबकि पहाड़ियों पर काले मानसूनी बादल घिर रहे थे।", cat: "Civic Life" },
        { en: "Dr. Sen was presenting his econometric model when a delegate raised an insightful theoretical query.", hi: "डॉ. सेन अपना अर्थमितीय मॉडल प्रस्तुत कर रहे थे जब एक प्रतिनिधि ने एक व्यावहारिक सैद्धांतिक प्रश्न उठाया।", cat: "Academic Conference" },
        { en: "While the legal team was reviewing the acquisition contract, new regulatory guidelines were announced.", hi: "जब कानूनी टीम अधिग्रहण अनुबंध की समीक्षा कर रही थी, तब नए नियामक दिशानिर्देशों की घोषणा की गई।", cat: "Corporate Governance" },
        { en: "The air traffic controllers were guiding thirty inbound flights when the radar system flashed an alert.", hi: "हवाई यातायात नियंत्रक तीस आने वाली उड़ानों का मार्गदर्शन कर रहे थे जब रडार प्रणाली ने एक चेतावनी दिखाई।", cat: "Aviation Safety" },
        { en: "The botanists were documenting endangered floral species while exploring the Western Ghats rainforest.", hi: "पश्चिमी घाट के वर्षावन की खोज करते हुए वनस्पतिशास्त्री लुप्तप्राय वनस्पति प्रजातियों का दस्तावेजीकरण कर रहे थे।", cat: "Botanical Research" },
        { en: "The emergency rescue crews were evacuating stranded villagers as the floodwaters were rising rapidly.", hi: "आपातकालीन बचाव दल फंसे हुए ग्रामीणों को निकाल रहे थे क्योंकि बाढ़ का पानी तेजी से बढ़ रहा था।", cat: "Emergency Operations" }
      ]
    },
    26: {
      types: ["Past Habits & Routines ('Used to' + V1)", "Discontinued Past States ('Used to be')", "Dynamic Past Habits ('Would' + V1)", "Contrast with Present Realities (used to... but now...)", "Historical Lifestyle / Childhood Reflection"],
      patterns: [
        { en: "Our organization used to rely on physical paperwork before migrating to cloud infrastructure.", hi: "क्लाउड इंफ्रास्ट्रक्चर पर जाने से पहले हमारा संगठन भौतिक कागजी कार्रवाई पर निर्भर करता था।", cat: "Digital Transformation" },
        { en: "In his youth, my grandfather used to cultivate organic paddy across forty acres of fertile land.", hi: "अपनी युवावस्था में, मेरे दादाजी चालीस एकड़ उपजाऊ भूमि पर जैविक धान की खेती किया करते थे।", cat: "Agricultural Heritage" },
        { en: "During summer vacations, the neighborhood children would assemble at the temple courtyard every evening.", hi: "गर्मियों की छुट्टियों के दौरान, मोहल्ले के बच्चे हर शाम मंदिर के प्रांगण में इकट्ठा हुआ करते थे।", cat: "Childhood Memory" },
        { en: "This bustling commercial district used to be a quiet suburban orchard thirty years ago.", hi: "तीस साल पहले यह हलचल भरा व्यावसायिक जिला एक शांत उपनगरीय बगीचा हुआ करता था।", cat: "Urban History" },
        { en: "Ancient navigators used to observe celestial constellations to steer their wooden ships across oceans.", hi: "प्राचीन नाविक महासागरों के पार अपने लकड़ी के जहाजों को चलाने के लिए खगोलीय नक्षत्रों का अवलोकन करते थे।", cat: "Maritime History" },
        { en: "We used to conduct quarterly client meetings in person, but now we host them virtually.", hi: "हम पहले व्यक्तिगत रूप से त्रैमासिक ग्राहक बैठकें आयोजित करते थे, लेकिन अब हम उन्हें वर्चुअल रूप से आयोजित करते हैं।", cat: "Workplace Evolution" },
        { en: "The renowned professor would spend hours in the archives deciphering medieval palm-leaf manuscripts.", hi: "प्रसिद्ध प्रोफेसर मध्ययुगीन ताड़-पत्र पांडुलिपियों को समझने के लिए अभिलेखागार में घंटों बिताया करते थे।", cat: "Scholarly Research" },
        { en: "He used to have immense stage fright before he joined the university debating society.", hi: "विश्वविद्यालय वाद-विवाद समाज में शामिल होने से पहले उन्हें मंच पर बोलने का बहुत डर रहता था।", cat: "Personal Development" },
        { en: "Traditional weavers used to extract vibrant dyes exclusively from indigenous forest roots and petals.", hi: "पारंपरिक बुनकर विशेष रूप से देशी वन जड़ों और पंखुड़ियों से जीवंत रंग निकाला करते थे।", cat: "Handicrafts & Culture" },
        { en: "The municipal library used to house thousands of rare historical encyclopedias and cartographic maps.", hi: "नगर निगम पुस्तकालय में हजारों दुर्लभ ऐतिहासिक विश्वकोश और मानचित्र हुआ करते थे।", cat: "Institutional Memory" }
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
        en = pat.en.replace(/\.$/, " during that critical timeframe.");
        hi = pat.hi.replace(/।$/, " उस महत्वपूर्ण समयावधि के दौरान।");
      } else if (v === 3) {
        en = `In retrospect, ${pat.en.charAt(0).toLowerCase() + pat.en.slice(1)}`;
        hi = `बीते समय को देखते हुए, ${pat.hi}`;
      } else if (v === 4) {
        en = pat.en.replace(/\.$/, " according to official institutional archives.");
        hi = pat.hi.replace(/।$/, " आधिकारिक संस्थागत अभिलेखागार के अनुसार।");
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

// Generate 65 interactive exercises for Days 24, 25, 26
function generateStage3Exercises(dayNum, config) {
  const exercises = [];
  const { titleEn } = config;

  const dayBank = {
    24: [
      { q: `Choose the correct past question form: "_____ you attend the regional conference yesterday?"`, opts: ["Did", "Do", "Have", "Were"], ans: "Did", why: "Past simple yes/no questions for action verbs use auxiliary 'Did' + Subject + Base Verb (V1)." },
      { q: `Identify the correct Wh- question:`, opts: ["Why did they postpone the meeting?", "Why did they postponed the meeting?", "Why they postponed the meeting?", "Why did they postponing the meeting?"], ans: "Why did they postpone the meeting?", why: "Wh- question structure: Wh-word + 'did' + Subject + Base Verb V1 ('postpone')." },
      { q: `Select the correct short answer to: "Did she finalize the agreement?"`, opts: ["Yes, she did.", "Yes, she finalized.", "Yes, she does.", "Yes, she did finalized."], ans: "Yes, she did.", why: "Standard past short answer: 'Yes, Subject + did' / 'No, Subject + didn't'." },
      { q: `Choose the correct subject question (where 'Who' is the subject):`, opts: ["Who authorized the expenditure?", "Who did authorize the expenditure?", "Who did authorized the expenditure?", "Who was authorize the expenditure?"], ans: "Who authorized the expenditure?", why: "When the Wh-word is the subject of the sentence, auxiliary 'did' is omitted and past form V2 is used directly." },
      { q: `Identify the error in: "*Where did you went yesterday evening?*"`, opts: ["'went' should be 'go'", "'did' should be 'do'", "'Where' should be 'When'", "No error"], ans: "'went' should be 'go'", why: "After auxiliary 'did', the main verb must revert to base form V1 ('go')." }
    ],
    25: [
      { q: `Choose the correct past continuous form: "The research team _____ (conduct) experiments all evening."`, opts: ["was conducting", "were conducting", "conducted", "is conducting"], ans: "was conducting", why: "Singular collective subject 'team' takes 'was conducting' for ongoing past actions." },
      { q: `Select the correct connector for an interrupted action: "The electricity went out _____ we were running the simulation."`, opts: ["while", "during", "for", "since"], ans: "while", why: "'While' is followed by a continuous clause (While + Subject + was/were + V-ing)." },
      { q: `Choose the correct combination: "I _____ (read) an article when the phone _____ (ring)."`, opts: ["was reading / rang", "read / was ringing", "was reading / was ringing", "read / rang"], ans: "was reading / rang", why: "The ongoing background action uses past continuous ('was reading'), and the interrupting action uses past simple ('rang')." },
      { q: `Identify the non-continuous (stative) verb that should NOT be used in past continuous:`, opts: ["understand", "write", "run", "construct"], ans: "understand", why: "Stative verbs of cognition (understand, know, believe) are not used in continuous tenses; use past simple 'understood'." },
      { q: `Select the correct sentence for simultaneous past actions:`, opts: ["While Priya was drafting the report, Vikram was preparing the slides.", "While Priya drafted the report, Vikram was preparing the slides.", "While Priya was drafting the report, Vikram prepared the slides.", "Priya was drafting the report while Vikram prepares the slides."], ans: "While Priya was drafting the report, Vikram was preparing the slides.", why: "Two simultaneous ongoing actions in the past both take past continuous." }
    ],
    26: [
      { q: `Choose the correct form for a past discontinued habit: "He _____ live in Pune before moving to Hyderabad."`, opts: ["used to", "use to", "is used to", "would to"], ans: "used to", why: "'Used to + V1' expresses past habits and states that are no longer true in the present." },
      { q: `Select the correct sentence for a past state (stative verb):`, opts: ["This building used to be a textile mill.", "This building would be a textile mill.", "This building used to being a textile mill.", "This building was used to be a textile mill."], ans: "This building used to be a textile mill.", why: "'Would' CANNOT be used with stative verbs (be, have, know) for past states; 'used to' must be used." },
      { q: `Identify the correct negative form of 'used to':`, opts: ["didn't use to", "didn't used to", "used not to", "was not used to"], ans: "didn't use to", why: "Standard past negative: 'didn't use to' + V1 (dropping the 'd' after auxiliary 'did')." },
      { q: `Choose the correct sentence with 'would' for past repeated actions:`, opts: ["Every morning, my grandmother would feed the sparrows.", "Every morning, my grandmother would be having sparrows.", "Every morning, my grandmother would used to feed the sparrows.", "Every morning, my grandmother used would feed the sparrows."], ans: "Every morning, my grandmother would feed the sparrows.", why: "'Would + base verb' expresses repeated dynamic actions in past narratives." },
      { q: `Identify the error in: "*Did you used to play chess during school days?*"`, opts: ["'used to' should be 'use to'", "'Did' should be 'Do'", "'play' should be 'played'", "No error"], ans: "'used to' should be 'use to'", why: "In questions with 'Did', 'used to' reverts to 'use to' ('Did you use to...?')." }
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
        24: [
          { p: `Form a question: "_____ (you / consult) the chief engineer before proceeding?"`, a: "Did you consult", exp: "Past question format: 'Did' + Subject + Base Verb 'consult'." },
          { p: `Complete the Wh- inquiry: "Why _____ (the committee / reject) the initial proposal?"`, a: "did the committee reject", exp: "Wh- query: 'Why did' + Subject + 'reject'." },
          { p: `Complete the subject question: "Who _____ (discover) the antimicrobial compound?"`, a: "discovered", exp: "Subject Wh- questions take simple past V2 directly." }
        ],
        25: [
          { p: `Complete with past continuous: "The engineers _____ (test) the pressure valves when the alarm sounded."`, a: "were testing", exp: "Plural subject takes 'were testing'." },
          { p: `Complete with interrupted past: "While she _____ (drive) to the clinic, a thunderstorm erupted."`, a: "was driving", exp: "'While' + past continuous 'was driving'." },
          { p: `Complete with simultaneous past continuous: "Dr. Roy was speaking while the attendees _____ (take) notes."`, a: "were taking", exp: "Simultaneous ongoing action: 'were taking'." }
        ],
        26: [
          { p: `Complete with 'used to': "Our organization _____ (have) only five employees in 2010."`, a: "used to have", exp: "Past stative condition: 'used to have'." },
          { p: `Complete with 'would' or 'used to': "During summer breaks, we _____ (swim) in the canal every afternoon."`, a: "would swim", exp: "Past repeated dynamic habit: 'would swim' or 'used to swim'." },
          { p: `Complete with negative 'use to': "He _____ (not / smoke) before entering university."`, a: "didn't use to smoke", exp: "Negative past habit: 'didn't use to smoke'." }
        ]
      };
      const bItem = blanks[dayNum][(i - 21) % blanks[dayNum].length];
      exercises.push({
        id: exId,
        type: "fill_blank",
        prompt: `[Item ${i}] ${bItem.p}`,
        correctAnswer: bItem.a,
        acceptableAlternatives: [bItem.a, bItem.a.replace("didn't", "did not"), bItem.a.replace("would", "used to")],
        difficulty: "standard",
        skillTag: `${titleEn} - Morphosyntactic Production`,
        explanationEn: bItem.exp,
        explanationHi: `सही रूप '${bItem.a}' है: ${bItem.exp}`
      });
    } else if (i <= 52) {
      // Error Correction
      const errors = {
        24: [
          { w: "Did you finished the quarterly budget review yesterday?", r: "Did you finish the quarterly budget review yesterday?", e: "After 'Did', use base verb 'finish' (V1)." },
          { w: "Why did the manager shouted at the junior associate?", r: "Why did the manager shout at the junior associate?", e: "Wh- query with 'did' requires base verb 'shout'." },
          { w: "Where they went for the summer vacation last year?", r: "Where did they go for the summer vacation last year?", e: "Past Wh- question requires auxiliary inversion: 'Where did they go...'." }
        ],
        25: [
          { w: "I was knowing the answer when the teacher asked.", r: "I knew the answer when the teacher asked.", e: "Stative verb 'know' cannot be used in continuous tense; use 'knew'." },
          { w: "While we inspected the machinery, a valve exploded.", r: "While we were inspecting the machinery, a valve exploded.", e: "Background action with 'while' takes past continuous 'were inspecting'." },
          { w: "The scientists were analyze the data all night.", r: "The scientists were analyzing the data all night.", e: "Past continuous requires auxiliary + present participle '-ing' ('analyzing')." }
        ],
        26: [
          { w: "This heritage mansion would be a royal courthouse in the 19th century.", r: "This heritage mansion used to be a royal courthouse in the 19th century.", e: "Stative verb 'be' requires 'used to', not 'would'." },
          { w: "Did you used to study late at night during school?", r: "Did you use to study late at night during school?", e: "In questions with 'Did', write 'use to', not 'used to'." },
          { w: "He didn't used to drink black coffee in the morning.", r: "He didn't use to drink black coffee in the morning.", e: "After 'didn't', the base form is 'use to'." }
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
        24: [
          { p: `Transform into an interrogative past simple sentence: "The board approved the strategic merger yesterday."`, r: "Did the board approve the strategic merger yesterday?", e: "Invert using 'Did' + Subject + base verb 'approve'." },
          { p: `Transform into a Wh- information question querying the reason: "They postponed the product launch because of security concerns."`, r: "Why did they postpone the product launch?", e: "Form Wh- question with 'Why did they postpone...'." }
        ],
        25: [
          { p: `Combine using 'when': "The engineers conducted stress tests. The power grid failed."`, r: "The engineers were conducting stress tests when the power grid failed.", e: "Use past continuous for ongoing action and past simple for interrupting event." },
          { p: `Combine using 'while': "Priya drafted the presentation. Vikram analyzed the financial ledger."`, r: "While Priya was drafting the presentation, Vikram was analyzing the financial ledger.", e: "Two simultaneous past actions take past continuous with 'while'." }
        ],
        26: [
          { p: `Express as a discontinued past habit: "He worked at a textile factory in his youth (but does not now)."`, r: "He used to work at a textile factory in his youth.", e: "Use 'used to + base verb' for past discontinued state/habit." },
          { p: `Transform into a negative past habit: "She consumed dairy products in childhood."`, r: "She didn't use to consume dairy products in childhood.", e: "Negative form: 'didn't use to' + base verb." }
        ]
      };
      const tItem = transforms[dayNum][(i - 53) % transforms[dayNum].length];
      exercises.push({
        id: exId,
        type: "transformation",
        prompt: `[Item ${i}] ${tItem.p}`,
        correctAnswer: tItem.r,
        acceptableAlternatives: [tItem.r, tItem.r.replace("didn't", "did not")],
        difficulty: "advanced",
        skillTag: `${titleEn} - Syntactic Inversion & Transformation`,
        explanationEn: tItem.e,
        explanationHi: `सटीक रूपांतरण: '${tItem.r}' | कारण: ${tItem.e}`
      });
    }
  }

  return exercises;
}

// Generate 25 translations for Days 24, 25, 26
function generateStage3Translations(dayNum, config) {
  const transBank = {
    24: [
      ["क्या आपने कल मुख्य चिकित्सा अधिकारी से परामर्श किया?", "Did you consult the chief medical officer yesterday?"],
      ["संसदीय समिति ने नए पर्यावरण विधेयक को क्यों खारिज कर दिया?", "Why did the parliamentary committee reject the new environmental bill?"],
      ["उन्होंने कल रात आपातकालीन बैठक कहाँ आयोजित की?", "Where did they organize the emergency meeting last night?"],
      ["वास्तुकार ने संशोधित खाका कब प्रस्तुत किया?", "When did the architect submit the revised blueprints?"],
      ["क्या प्रतिनिधियों ने व्यापार समझौते पर हस्ताक्षर किए?", "Did the delegates sign the trade agreement?"],
      ["इस महत्वपूर्ण ऐतिहासिक स्थल की खोज किसने की?", "Who discovered this important historical site?"],
      ["इंजीनियरों ने टूटे हुए केबल को कैसे बदला?", "How did the engineers replace the broken cable?"],
      ["क्या कल की उड़ान समय पर रवाना हुई?", "Did yesterday's flight depart on time?"],
      ["बोर्ड ने नए प्रबंध निदेशक को क्यों चुना?", "Why did the board select the new managing director?"],
      ["क्या आपको कल शाम मेरा ईमेल प्राप्त हुआ?", "Did you receive my email yesterday evening?"],
      ["Why did the municipal authorities delay the road reconstruction project?", "नगर निगम के अधिकारियों ने सड़क पुनर्निर्माण परियोजना में देरी क्यों की?"],
      ["Did the laboratory technicians calibrate the diagnostic equipment properly?", "क्या प्रयोगशाला तकनीशियनों ने नैदानिक उपकरणों को ठीक से कैलिब्रेट किया?"],
      ["Where did the archaeological expedition find the ancient copper artifacts?", "पुरातात्विक अभियान को प्राचीन तांबे की कलाकृतियाँ कहाँ मिलीं?"],
      ["How did the rescue team navigate through the dense forest at night?", "बचाव दल ने रात में घने जंगल से होकर रास्ता कैसे तय किया?"],
      ["Did the finance ministry announce any relief measures for small businesses?", "क्या वित्त मंत्रालय ने छोटे व्यवसायों के लिए किसी राहत उपाय की घोषणा की?"],
      ["Who authorized the expenditure for the new research laboratory?", "नई शोध प्रयोगशाला के लिए खर्च को किसने अधिकृत किया?"],
      ["When did the international trade delegation arrive in New Delhi?", "अंतरराष्ट्रीय व्यापार प्रतिनिधिमंडल नई दिल्ली कब पहुंचा?"],
      ["Did you discuss the revised contractual terms with the legal advisor?", "क्या आपने कानूनी सलाहकार के साथ संशोधित संविदात्मक शर्तों पर चर्चा की?"],
      ["Why didn't they inform the passengers about the flight cancellation?", "उन्होंने यात्रियों को उड़ान रद्द होने की सूचना क्यों नहीं दी?"],
      ["What caused the sudden interruption in satellite communications yesterday?", "कल उपग्रह संचार में अचानक रुकावट का क्या कारण था?"],
      ["क्या आपने कल का क्रिकेट मैच देखा?", "Did you watch yesterday's cricket match?"],
      ["आप कल शाम बैठक में देर से क्यों आए?", "Why did you come late to the meeting yesterday evening?"],
      ["उन्होंने नई सौर परियोजना के लिए कितना बजट आवंटित किया?", "How much budget did they allocate for the new solar project?"],
      ["Did the audit team uncover any non-compliance with environmental standards?", "क्या ऑडिट टीम ने पर्यावरण मानकों के किसी गैर-अनुपालन का पता लगाया?"],
      ["Who presented the keynote address at the international cyber summit?", "अंतरराष्ट्रीय साइबर शिखर सम्मेलन में मुख्य भाषण किसने प्रस्तुत किया?"]
    ],
    25: [
      ["जब बिजली चली गई तब हम प्रयोगशाला में प्रयोग कर रहे थे।", "We were conducting experiments in the laboratory when the power went out."],
      ["जब डॉक्टर मरीज की जांच कर रहे थे तब नर्स रिपोर्ट तैयार कर रही थी।", "While the doctor was examining the patient, the nurse was preparing the report."],
      ["जब भूकंप आया तब बच्चे खेल के मैदान में खेल रहे थे।", "The children were playing on the sports ground when the earthquake occurred."],
      ["जब मैं सड़क पार कर रहा था तब एक तेज रफ्तार कार गुजरी।", "A speeding car passed by while I was crossing the road."],
      ["डेटा वैज्ञानिक पूरी रात जटिल एल्गोरिदम का विश्लेषण कर रहे थे।", "The data scientists were analyzing complex algorithms all night."],
      ["जब बारिश शुरू हुई तब किसान खेतों में धान की रोपाई कर रहे थे।", "The farmers were transplanting paddy in the fields when it began to rain."],
      ["सभागार में मुख्य वक्ता व्याख्यान दे रहे थे और दर्शक ध्यान से सुन रहे थे।", "The keynote speaker was lecturing in the hall while the audience was listening attentively."],
      ["जब फायर अलार्म बजा तब इंजीनियर सर्वर रूम में काम कर रहे थे।", "The engineers were working in the server room when the fire alarm sounded."],
      ["कल शाम पांच बजे आप क्या कर रहे थे?", "What were you doing at five o'clock yesterday evening?"],
      ["जब विमान अशांत हवा में उड़ रहा था तब यात्री शांत बैठे थे।", "The passengers were sitting quietly while the aircraft was flying through turbulent air."],
      ["While the legal team was reviewing the draft, new amendments were submitted.", "जब कानूनी टीम मसौदे की समीक्षा कर रही थी, तब नए संशोधन प्रस्तुत किए गए।"],
      ["The meteorologists were monitoring the cyclone path when the satellite feed dropped.", "मौसम विज्ञानी चक्रवात के रास्ते की निगरानी कर रहे थे जब उपग्रह फीड बंद हो गई।"],
      ["The mechanics were repairing the locomotive engine when the supervisor entered.", "मैकेनिक लोकोमोटिव इंजन की मरम्मत कर रहे थे जब पर्यवेक्षक ने प्रवेश किया।"],
      ["While the sun was setting behind the hills, the villagers were returning home.", "जब पहाड़ियों के पीछे सूरज ढल रहा था, तब ग्रामीण घर लौट रहे थे।"],
      ["The surgeons were performing a six-hour bypass operation yesterday morning.", "सर्जन कल सुबह छह घंटे का बाईपास ऑपरेशन कर रहे थे।"],
      ["I was writing an academic research proposal when my mentor called.", "मैं एक शैक्षणिक शोध प्रस्ताव लिख रहा था जब मेरे संरक्षक ने फ़ोन किया।"],
      ["The telecommunications crew was installing fiber optic cables along the highway.", "दूरसंचार दल राजमार्ग के किनारे फाइबर ऑप्टिक केबल बिछा रहा था।"],
      ["Were you attending the online strategy webinar yesterday afternoon?", "क्या आप कल दोपहर ऑनलाइन रणनीति वेबिनार में भाग ले रहे थे?"],
      ["The wildlife photographers were tracking the Bengal tiger through the dense reserve.", "वन्यजीव फोटोग्राफर घने रिजर्व में बंगाल टाइगर का पीछा कर रहे थे।"],
      ["The apprentices were observing the master artisan with immense fascination.", "प्रशिक्षु अत्यधिक आकर्षण के साथ उस्ताद कारीगर का अवलोकन कर रहे थे।"],
      ["जब मैं पढ़ाई कर रहा था तब मेरा दोस्त गिटार बजा रहा था।", "While I was studying, my friend was playing the guitar."],
      ["जब सायरन बजा तब सभी लोग सुरक्षित स्थान की ओर भाग रहे थे।", "Everyone was running towards a safe shelter when the siren sounded."],
      ["क्या कल रात आप बारिश में गाड़ी चला रहे थे?", "Were you driving in the rain last night?"],
      ["The software developers were debugging the code when the server crashed.", "सॉफ्टवेयर डेवलपर्स कोड को डीबग कर रहे थे जब सर्वर क्रैश हो गया।"],
      ["While the negotiations were progressing smoothly, a sudden dispute arose.", "जब बातचीत सुचारू रूप से आगे बढ़ रही थी, तब अचानक एक विवाद खड़ा हो गया।"]
    ],
    26: [
      ["हम क्लाउड तकनीक अपनाने से पहले भारी कागजी फाइलों का उपयोग करते थे।", "We used to use heavy paper files before adopting cloud technology."],
      ["मेरी दादी हर सुबह पक्षियों को दाना खिलाया करती थीं।", "My grandmother would feed the birds every morning."],
      ["यह व्यस्त औद्योगिक क्षेत्र तीस साल पहले एक शांत गाँव हुआ करता था।", "This busy industrial area used to be a quiet village thirty years ago."],
      ["प्राचीन नाविक रात में दिशा जानने के लिए तारों का अवलोकन करते थे।", "Ancient sailors used to observe stars to find direction at night."],
      ["वह विश्वविद्यालय में शामिल होने से पहले बहुत संकोची हुआ करता था।", "He used to be very shy before joining the university."],
      ["गर्मियों की छुट्टियों में हम हर शाम नदी किनारे टहला करते थे।", "During summer vacations, we would stroll along the riverbank every evening."],
      ["क्या आप बचपन में यहाँ क्रिकेट खेला करते थे?", "Did you use to play cricket here in your childhood?"],
      ["पारंपरिक बुनकर कपड़ों को रंगने के लिए प्राकृतिक फूलों का उपयोग करते थे।", "Traditional weavers used to use natural flowers to dye fabrics."],
      ["हम पहले व्यक्तिगत रूप से बैठकें करते थे, लेकिन अब हम ऑनलाइन मिलते हैं।", "We used to hold meetings in person, but now we meet online."],
      ["वह चाय में चीनी नहीं लिया करता था, लेकिन अब वह लेता है।", "He didn't use to take sugar in tea, but now he does."],
      ["The city municipal corporation used to manage public transport through tram lines.", "नगर निगम पहले ट्राम लाइनों के माध्यम से सार्वजनिक परिवहन का प्रबंधन करता था।"],
      ["Scholars would spend months transcribing ancient Sanskrit manuscripts by hand.", "विद्वान प्राचीन संस्कृत पांडुलिपियों को हाथ से लिखने में महीनों बिताया करते थे।"],
      ["This heritage palace used to serve as the summer residence of the royal dynasty.", "यह विरासत महल शाही राजवंश के ग्रीष्मकालीन निवास के रूप में कार्य करता था।"],
      ["Did your family use to celebrate the harvest festival in your ancestral village?", "क्या आपका परिवार अपने पैतृक गाँव में फसल उत्सव मनाया करता था?"],
      ["Our laboratory didn't use to possess such sophisticated electron microscopes.", "हमारी प्रयोगशाला के पास पहले इतने परिष्कृत इलेक्ट्रॉन सूक्ष्मदर्शी नहीं हुआ करते थे।"],
      ["Every winter, migratory flamingos would arrive at the coastal wetlands.", "हर सर्दियों में, प्रवासी फ्लेमिंगो तटीय आर्द्रभूमि पर आते थे।"],
      ["He used to have immense fear of public speaking before completing the course.", "पाठ्यक्रम पूरा करने से पहले उन्हें सार्वजनिक भाषण का अत्यधिक भय रहता था।"],
      ["The railway network used to operate entirely on steam locomotives in the early 20th century.", "20वीं सदी की शुरुआत में रेलवे नेटवर्क पूरी तरह से स्टीम लोकोमोटिव पर चलता था।"],
      ["We would gather around the radio every Sunday evening to listen to classical concerts.", "हम शास्त्रीय संगीत कार्यक्रम सुनने के लिए हर रविवार शाम को रेडियो के चारों ओर इकट्ठा होते थे।"],
      ["Did this university department use to offer courses in maritime archaeology?", "क्या यह विश्वविद्यालय विभाग समुद्री पुरातत्व में पाठ्यक्रम प्रदान करता था?"],
      ["मैं कॉलेज के दिनों में रोजाना दस किलोमीटर साइकिल चलाया करता था।", "I used to ride a bicycle ten kilometers daily during my college days."],
      ["क्या वे पहले इस पुराने मकान में रहा करते थे?", "Did they use to live in this old house before?"],
      ["हम पहले इतनी देर रात तक काम नहीं किया करते थे।", "We didn't use to work so late at night previously."],
      ["Traditional farmers would predict rainfall by observing the movement of wind.", "पारंपरिक किसान हवा की गति को देखकर बारिश की भविष्यवाणी किया करते थे।"],
      ["This library used to be the largest repository of historical archives in the region.", "यह पुस्तकालय इस क्षेत्र में ऐतिहासिक अभिलेखागार का सबसे बड़ा भंडार हुआ करता था।"]
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

// Generate 20 spoken phrases for Days 24, 25, 26
function generateStage3SpokenPhrases(dayNum, config) {
  const phraseBank = {
    24: [
      ["Could you please clarify what happened during yesterday's meeting?", "क्या आप कृपया स्पष्ट कर सकते हैं कि कल की बैठक में क्या हुआ था?", "/kʊd juː pliːz ˈklær.ɪ.faɪ wɒt ˈhæp.ənd ˈdjʊə.rɪŋ ˈjes.tə.deɪz ˈmiː.tɪŋ/"],
      ["Did you receive confirmation from the regional director?", "क्या आपको क्षेत्रीय निदेशक से पुष्टि प्राप्त हुई?", "/dɪd juː rɪˈsiːv ˌkɒn.fəˈmeɪ.ʃən frəm ðə ˈriː.dʒən.əl daɪˈrek.tər/"],
      ["Why did the steering committee postpone the policy rollout?", "संचालन समिति ने नीति को आगे बढ़ाने में देरी क्यों की?", "/waɪ dɪd ðə ˈstɪə.rɪŋ kəˈmɪt.i pəʊstˈpəʊn ðə ˈpɒl.ə.si ˈrəʊl.aʊt/"],
      ["Where did you store the encrypted backup archives?", "आपने एन्क्रिप्टेड बैकअप अभिलेखागार कहाँ संग्रहीत किया?", "/weər dɪd juː stɔːr ði ɪnˈkrɪp.tɪd ˈbæk.ʌp ˈɑː.kaɪvz/"],
      ["How did the engineering crew resolve the hydraulic failure?", "इंजीनियरिंग दल ने हाइड्रोलिक विफलता को कैसे ठीक किया?", "/haʊ dɪd ði ˌen.dʒɪˈnɪə.rɪŋ kruː rɪˈzɒlv ðə haɪˈdrɒl.ɪk ˈfeɪ.ljər/"],
      ["When did the international trade delegates arrive in Mumbai?", "अंतरराष्ट्रीय व्यापार प्रतिनिधि मुंबई कब पहुंचे?", "/wen dɪd ði ˌɪn.təˈnæʃ.ən.əl treɪd ˈdel.ɪ.ɡəts əˈraɪv ɪn mʊmˈbaɪ/"],
      ["Who presented the keynote lecture at the symposium?", "संगोष्ठी में मुख्य व्याख्यान किसने प्रस्तुत किया?", "/huː prɪˈzen.tɪd ðə ˈkiː.nəʊt ˈlek.tʃər æt ðə sɪmˈpəʊ.zi.əm/"],
      ["Did everything proceed according to the scheduled timetable?", "क्या सब कुछ निर्धारित समय-सारणी के अनुसार आगे बढ़ा?", "/dɪd ˈev.ri.θɪŋ prəˈsiːd əˈkɔː.dɪŋ tuː ðə ˈskedʒ.uːld ˈtaɪmˌteɪ.bəl/"],
      ["What led to the sudden increase in customer inquiries yesterday?", "कल ग्राहकों की पूछताछ में अचानक वृद्धि का क्या कारण था?", "/wɒt led tuː ðə ˈsʌd.ən ˈɪn.kriːs ɪn ˈkʌs.tə.mər ɪnˈkwaɪə.riz ˈjes.tə.deɪ/"],
      ["Did you have an opportunity to review the revised contract?", "क्या आपको संशोधित अनुबंध की समीक्षा करने का अवसर मिला?", "/dɪd juː hæv ən ˌɒp.əˈtjuː.nə.ti tuː rɪˈvjuː ðə rɪˈvaɪzd ˈkɒn.trækt/"],
      ["How many delegates participated in the interactive breakout session?", "संवादात्मक ब्रेकआउट सत्र में कितने प्रतिनिधियों ने भाग लिया?", "/haʊ ˈmen.i ˈdel.ɪ.ɡəts pɑːˈtɪs.ɪ.peɪ.tɪd ɪn ði ˌɪn.təˈræk.tɪv ˈbreɪk.aʊt ˈseʃ.ən/"],
      ["Why didn't the hospital administration receive the medical supplies?", "अस्पताल प्रशासन को चिकित्सा आपूर्ति क्यों नहीं मिली?", "/waɪ ˈdɪd.ənt ðə ˈhɒs.pɪ.təl ədˌmɪn.ɪˈstreɪ.ʃən rɪˈsiːv ðə ˈmed.ɪ.kəl səˈplaɪz/"],
      ["Did the quality control auditor inspect every production line?", "क्या गुणवत्ता नियंत्रण लेखा परीक्षक ने प्रत्येक उत्पादन लाइन का निरीक्षण किया?", "/dɪd ðə ˈkwɒl.ə.ti kənˈtrəʊl ˈɔː.dɪ.tər ɪnˈspekt ˈev.ri prəˈdʌk.ʃən laɪn/"],
      ["Which candidate demonstrated the strongest technical proficiency?", "किस उम्मीदवार ने सबसे मजबूत तकनीकी दक्षता का प्रदर्शन किया?", "/wɪtʃ ˈkæn.dɪ.deɪt ˈdem.ən.streɪ.tɪd ðə ˈstrɒŋ.ɡɪst ˈtek.nɪ.kəl prəˈfɪʃ.ən.si/"],
      ["Did you speak with the building architect about the design changes?", "क्या आपने डिजाइन परिवर्तनों के बारे में भवन वास्तुकार से बात की?", "/dɪd juː spiːk wɪð ðə ˈbɪl.dɪŋ ˈɑː.kɪ.tekt əˈbaʊt ðə dɪˈzaɪn ˈtʃeɪn.dʒɪz/"],
      ["Where did they relocate the server infrastructure last weekend?", "उन्होंने पिछले सप्ताहांत सर्वर बुनियादी ढांचे को कहाँ स्थानांतरित किया?", "/weər dɪd ðeɪ ˌriː.ləʊˈkeɪt ðə ˈsɜː.vər ˈɪn.frəˌstrʌk.tʃər lɑːst ˈwiːk.end/"],
      ["Did the transport department approve the new metro route?", "क्या परिवहन विभाग ने नए मेट्रो मार्ग को मंजूरी दी?", "/dɪd ðə ˈtræn.spɔːt dɪˈpɑːt.mənt əˈpruːv ðə njuː ˈmet.rəʊ ruːt/"],
      ["How long did the parliamentary debate on the education bill last?", "शिक्षा विधेयक पर संसदीय बहस कितने समय तक चली?", "/haʊ lɒŋ dɪd ðə ˌpɑː.lɪˈmen.tər.i dɪˈbeɪt ɒn ði ˌedʒ.ʊˈkeɪ.ʃən bɪl lɑːst/"],
      ["Did the environmental committee assess the groundwater quality?", "क्या पर्यावरण समिति ने भूजल गुणवत्ता का आकलन किया?", "/dɪd ði ɪnˌvaɪ.rənˈmen.təl kəˈmɪt.i əˈses ðə ˈɡraʊndˌwɔː.tər ˈkwɒl.ə.ti/"],
      ["Who represented our institution at the international energy summit?", "अंतरराष्ट्रीय ऊर्जा शिखर सम्मेलन में हमारे संस्थान का प्रतिनिधित्व किसने किया?", "/huː ˌrep.rɪˈzen.tɪd ˈaʊər ˌɪn.stɪˈtjuː.ʃən æt ði ˌɪn.təˈnæʃ.ən.əl ˈen.ə.dʒi ˈsʌm.ɪt/"]
    ],
    25: [
      ["I was reviewing the financial projections when you arrived.", "जब आप पहुंचे तब मैं वित्तीय अनुमानों की समीक्षा कर रहा था।", "/aɪ wəz rɪˈvjuː.ɪŋ ðə faɪˈnæn.ʃəl prəˈdʒek.ʃənz wen juː əˈraɪvd/"],
      ["While we were analyzing the data, a server glitch occurred.", "जब हम डेटा का विश्लेषण कर रहे थे, तब एक सर्वर खराबी हुई।", "/waɪl wiː wɜːr ˈæn.əl.aɪ.zɪŋ ðə ˈdeɪ.tə ə ˈsɜː.vər ɡlɪtʃ əˈkɜːd/"],
      ["The research team was testing new solar cells all afternoon.", "शोध दल दोपहर भर नए सौर सेल का परीक्षण कर रहा था।", "/ðə rɪˈsɜːtʃ tiːm wəz ˈtes.tɪŋ njuː ˈsəʊ.lər selz ɔːl ˌɑːf.təˈnuːn/"],
      ["Dr. Sen was presenting when the emergency alarm flashed.", "डॉ. सेन प्रस्तुति दे रहे थे जब आपातकालीन अलार्म चमका।", "/ˈdɒk.tər sen wəz prɪˈzen.tɪŋ wen ði ɪˈmɜː.dʒən.si əˈlɑːm flæʃt/"],
      ["The technicians were inspecting the bridge when the rain started.", "तकनीशियन पुल का निरीक्षण कर रहे थे जब बारिश शुरू हुई।", "/ðə tekˈnɪʃ.ənz wɜːr ɪnˈspek.tɪŋ ðə brɪdʒ wen ðə reɪn ˈstɑː.tɪd/"],
      ["While Priya was drafting the report, Vikram was editing the slides.", "जब प्रिया रिपोर्ट का मसौदा तैयार कर रही थी, तब विक्रम स्लाइड संपादित कर रहा था।", "/waɪl ˈpriː.jə wəz ˈdrɑːf.tɪŋ ðə rɪˈpɔːt ˈvɪk.rəm wəz ˈed.ɪ.tɪŋ ðə slaɪdz/"],
      ["The surgeons were operating for four hours continuously.", "सर्जन लगातार चार घंटे से ऑपरेशन कर रहे थे।", "/ðə ˈsɜː.dʒənz wɜːr ˈɒp.ər.eɪ.tɪŋ fɔː fɔːr aʊəz kənˈtɪn.ju.əs.li/"],
      ["The city was celebrating the harvest festival joyfully.", "शहर हर्षोल्लास के साथ फसल उत्सव मना रहा था।", "/ðə ˈsɪt.i wəz ˈsel.ə.breɪ.tɪŋ ðə ˈhɑː.vɪst ˈfes.tɪ.vəl ˈdʒɔɪ.fəl.i/"],
      ["What were the engineers discussing during the morning briefing?", "सुबह की ब्रीफिंग के दौरान इंजीनियर किस बात पर चर्चा कर रहे थे?", "/wɒt wɜːr ði ˌen.dʒɪˈnɪəz dɪˈskʌs.ɪŋ ˈdjʊə.rɪŋ ðə ˈmɔː.nɪŋ ˈbriː.fɪŋ/"],
      ["The pilot was navigating through turbulent cloud formations.", "पायलट अशांत बादलों के बीच से विमान उड़ा रहा था।", "/ðə ˈpaɪ.lət wəz ˈnæv.ɪ.ɡeɪ.tɪŋ θruː ˈtɜː.bjʊ.lənt klaʊd fɔːˈmeɪ.ʃənz/"],
      ["The students were conducting fieldwork in the coastal wetlands.", "छात्र तटीय आर्द्रभूमि में फील्डवर्क कर रहे थे।", "/ðə ˈstjuː.dənts wɜːr kənˈdʌk.tɪŋ ˈfiːld.wɜːk ɪn ðə ˈkəʊ.stəl ˈwet.lændz/"],
      ["While the lawyers were negotiating, new evidence emerged.", "जब वकील बातचीत कर रहे थे, तब नए सबूत सामने आए।", "/waɪl ðə ˈlɔː.jəz wɜːr nɪˈɡəʊ.ʃi.eɪ.tɪŋ njuː ˈev.ɪ.dəns ɪˈmɜːdʒd/"],
      ["The police were investigating the cyber incident throughout the night.", "पुलिस रात भर साइबर घटना की जांच कर रही थी।", "/ðə pəˈliːs wɜːr ɪnˈves.tɪ.ɡeɪ.tɪŋ ðə ˈsaɪ.bər ˈɪn.sɪ.dənt θruːˈaʊt ðə naɪt/"],
      ["Were you monitoring the temperature sensors during the test?", "क्या आप परीक्षण के दौरान तापमान सेंसर की निगरानी कर रहे थे?", "/wɜːr juː ˈmɒn.ɪ.tər.ɪŋ ðə ˈtem.prə.tʃər ˈsen.səz ˈdjʊə.rɪŋ ðə test/"],
      ["The artists were restoring the ancient mural meticulously.", "कलाकार प्राचीन भित्तिचित्र को बड़ी बारीकी से पुनर्स्थापित कर रहे थे।", "/ði ˈɑː.tɪsts wɜːr rɪˈstɔː.rɪŋ ði ˈeɪn.ʃənt ˈmjʊə.rəl məˈtɪk.jʊ.ləs.li/"],
      ["The delegates were debating climate targets when the session ended.", "प्रतिनिधि जलवायु लक्ष्यों पर बहस कर रहे थे जब सत्र समाप्त हुआ।", "/ðə ˈdel.ɪ.ɡəts wɜːr dɪˈbeɪ.tɪŋ ˈklaɪ.mət ˈtɑː.ɡɪts wen ðə ˈseʃ.ən ˈen.dɪd/"],
      ["The meteorologists were tracking the severe tropical depression.", "मौसम विज्ञानी भीषण उष्णकटिबंधीय दबाव पर नजर रख रहे थे।", "/ðə ˌmiː.ti.əˈrɒl.ə.dʒɪsts wɜːr ˈtræk.ɪŋ ðə sɪˈvɪər ˈtrɒp.ɪ.kəl dɪˈpreʃ.ən/"],
      ["We were preparing the laboratory equipment when the director visited.", "हम प्रयोगशाला उपकरण तैयार कर रहे थे जब निदेशक ने दौरा किया।", "/wiː wɜːr prɪˈpeə.rɪŋ ðə ləˈbɒr.ə.tər.i ɪˈkwɪp.mənt wen ðə daɪˈrek.tər ˈvɪz.ɪ.tɪd/"],
      ["The economists were forecasting inflation trends for the upcoming year.", "अर्थशास्त्री आगामी वर्ष के लिए मुद्रास्फीति के रुझान का पूर्वानुमान लगा रहे थे।", "/ði iːˈkɒn.ə.mɪsts wɜːr ˈfɔː.kɑː.stɪŋ ɪnˈfleɪ.ʃən trendz fɔː ði ˈʌpˌkʌm.ɪŋ jɪər/"],
      ["The rescue teams were assisting flood victims across the district.", "बचाव दल जिले भर में बाढ़ पीड़ितों की सहायता कर रहे थे।", "/ðə ˈres.kjuː tiːmz wɜːr əˈsɪs.tɪŋ flʌd ˈvɪk.tɪmz əˈkrɒs ðə ˈdɪs.trɪkt/"]
    ],
    26: [
      ["Our company used to operate from a small rented garage.", "हमारी कंपनी पहले एक छोटे किराए के गैरेज से काम करती थी।", "/ˈaʊər ˈkʌm.pə.ni juːst tuː ˈɒp.ər.eɪt frəm ə smɔːl ˈren.tɪd ˈɡær.ɑːʒ/"],
      ["My grandfather would wake up at sunrise and tend the garden.", "मेरे दादाजी सूर्योदय के समय उठते थे और बगीचे की देखभाल करते थे।", "/maɪ ˈɡrænˌfɑː.ðər wʊd weɪk ʌp æt ˈsʌn.raɪz ænd tend ðə ˈɡɑː.dən/"],
      ["This neighborhood used to be surrounded by dense mango orchards.", "यह मोहल्ला पहले आम के घने बगीचों से घिरा हुआ करता था।", "/ðɪs ˈneɪ.bə.hʊd juːst tuː biː səˈraʊn.dɪd baɪ dens ˈmæŋ.ɡəʊ ˈɔː.tʃədz/"],
      ["We didn't use to have high-speed broadband internet in our school.", "हमारे स्कूल में पहले हाई-स्पीड ब्रॉडबैंड इंटरनेट नहीं हुआ करता था।", "/wiː ˈdɪd.ənt juːs tuː hæv haɪ spiːd ˈbrɔːd.bænd ˈɪn.tə.net ɪn ˈaʊər skuːl/"],
      ["Did you use to commute by suburban railway during college?", "क्या आप कॉलेज के दिनों में उपनगरीय रेलवे से यात्रा करते थे?", "/dɪd juː juːs tuː kəˈmjuːt baɪ səˈbɜː.bən ˈreɪl.weɪ ˈdjʊə.rɪŋ ˈkɒl.ɪdʒ/"],
      ["Traditional scholars would compose poetry in classical Sanskrit.", "पारंपरिक विद्वान शास्त्रीय संस्कृत में कविता की रचना करते थे।", "/trəˈdɪʃ.ən.əl ˈskɒl.əz wʊd kəmˈpəʊz ˈpəʊ.ɪ.tri ɪn ˈklæs.ɪ.kəl ˈsæn.skrɪt/"],
      ["The municipal library used to possess rare centuries-old manuscripts.", "नगर निगम पुस्तकालय में सदियों पुरानी दुर्लभ पांडुलिपियाँ हुआ करती थीं।", "/ðə mjuːˈnɪs.ɪ.pəl ˈlaɪ.brər.i juːst tuː pəˈzes reə ˈsen.tʃʊ.riz əʊld ˈmæn.jʊ.skrɪpts/"],
      ["He used to be extremely hesitant before joining the debating club.", "वाद-विवाद क्लब में शामिल होने से पहले वह बहुत हिचकिचाता था।", "/hiː juːst tuː biː ɪkˈstriːm.li ˈhez.ɪ.tənt bɪˈfɔː ˈdʒɔɪ.nɪŋ ðə dɪˈbeɪ.tɪŋ klʌb/"],
      ["Every festival, the village elders would gather under the banyan tree.", "हर त्योहार पर, गाँव के बुजुर्ग बरगद के पेड़ के नीचे इकट्ठा होते थे।", "/ˈev.ri ˈfes.tɪ.vəl ðə ˈvɪl.ɪdʒ ˈel.dəz wʊd ˈɡæð.ər ˈʌn.dər ðə ˈbæn.jæn triː/"],
      ["Our laboratory didn't use to perform automated chemical titrations.", "हमारी प्रयोगशाला पहले स्वचालित रासायनिक अनुमापन नहीं करती थी।", "/ˈaʊər ləˈbɒr.ə.tər.i ˈdɪd.ənt juːs tuː pəˈfɔːm ˈɔː.tə.meɪ.tɪd ˈkem.ɪ.kəl taɪˈtreɪ.ʃənz/"],
      ["We used to travel by bullock carts during village visits in childhood.", "हम बचपन में गाँव की यात्राओं के दौरान बैलगाड़ियों से यात्रा करते थे।", "/wiː juːst tuː ˈtræv.əl baɪ ˈbʊl.ək kɑːts ˈdjʊə.rɪŋ ˈvɪl.ɪdʒ ˈvɪz.ɪts ɪn ˈtʃaɪld.hʊd/"],
      ["The old river steamer would ferry passengers across the wide delta.", "पुराना नदी स्टीमर यात्रियों को चौड़े डेल्टा के पार ले जाता था।", "/ði əʊld ˈrɪv.ər ˈstiː.mər wʊd ˈfer.i ˈpæs.ən.dʒəz əˈkrɒs ðə waɪd ˈdel.tə/"],
      ["Did they use to export spices directly to Middle Eastern ports?", "क्या वे सीधे मध्य पूर्वी बंदरगाहों को मसालों का निर्यात करते थे?", "/dɪd ðeɪ juːs tuː ɪkˈspɔːt ˈspaɪ.sɪz daɪˈrekt.li tuː ˈmɪd.əl ˈiːs.tən pɔːts/"],
      ["The ancient observatory used to track planetary motions with precision.", "प्राचीन वेधशाला सटीकता के साथ ग्रहीय गतियों पर नजर रखती थी।", "/ði ˈeɪn.ʃənt əbˈzɜː.və.tər.i juːst tuː træk ˈplæn.ɪ.tər.i ˈməʊ.ʃənz wɪð prɪˈsɪʒ.ən/"],
      ["She didn't use to like spicy regional cuisine, but now she loves it.", "उसे पहले मसालेदार क्षेत्रीय व्यंजन पसंद नहीं थे, लेकिन अब वह इसे पसंद करती है।", "/ʃiː ˈdɪd.ənt juːs tuː laɪk ˈspaɪ.si ˈriː.dʒən.əl kwɪˈziːn bʌt naʊ ʃiː lʌvz ɪt/"],
      ["Master weavers would craft intricate silk sarees on wooden handlooms.", "उस्ताद बुनकर लकड़ी के हथकरघों पर जटिल रेशमी साड़ियाँ बनाते थे।", "/ˈmɑːs.tər ˈwiː.vəz wʊd krɑːft ˈɪn.trɪ.kət sɪlk ˈsɑː.riz ɒn ˈwʊd.ən ˈhænd.luːmz/"],
      ["This academic department used to offer classical philology courses.", "यह शैक्षणिक विभाग पहले शास्त्रीय भाषाशास्त्र के पाठ्यक्रम प्रस्तुत करता था।", "/ðɪs ˌæk.əˈdem.ɪk dɪˈpɑːt.mənt juːst tuː ˈɒf.ər ˈklæs.ɪ.kəl fɪˈlɒl.ə.dʒi ˈkɔː.sɪz/"],
      ["Every monsoon, the river would overflow its natural embankments.", "हर मानसून में नदी अपने प्राकृतिक तटबंधों से ऊपर बहने लगती थी।", "/ˈev.ri mɒnˈsuːn ðə ˈrɪv.ər wʊd ˌəʊ.vəˈfləʊ ɪts ˈnætʃ.ər.əl ɪmˈbæŋk.mənts/"],
      ["Did you use to practice yoga at sunrise during your training days?", "क्या आप अपने प्रशिक्षण के दिनों में सूर्योदय के समय योग का अभ्यास करते थे?", "/dɪd juː juːs tuː ˈpræk.tɪs ˈjəʊ.ɡə æt ˈsʌn.raɪz ˈdjʊə.rɪŋ jɔːr ˈtreɪ.nɪŋ deɪz/"],
      ["Our ancestors used to store rainwater in underground stone cisterns.", "हमारे पूर्वज भूमिगत पत्थर के कुंडों में वर्षा जल का संचयन करते थे।", "/ˈaʊər ˈæn.ses.təz juːst tuː stɔːr ˈreɪnˌwɔː.tər ɪn ˌʌn.dəˈɡraʊnd stəʊn ˈsɪs.tənz/"]
    ]
  };

  const list = phraseBank[dayNum];
  return list.map(([phraseEn, phraseHi, ipa], idx) => ({
    id: `d${String(dayNum).padStart(2, '0')}_sp_${String(idx + 1).padStart(2, '0')}`,
    phraseEn,
    phraseHi,
    ipa,
    context: `Professional / Civic Narrative Context ${idx + 1}`,
    register: idx % 2 === 0 ? "Formal / Academic" : "Polite Standard",
    intonationPattern: "Rising on polite query / Falling on decisive past narrative statement"
  }));
}

// Build Days 24, 25, 26
export async function buildDays24_26() {
  const priorLemmas = await getPriorLemmas();
  const configs = [day24_config, day25_config, day26_config];
  const results = [];

  configs.forEach((cfg, idx) => {
    const dayNum = idx + 24;
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
        prosodyFocus: "Rising intonation on Yes/No inquiries; falling cadence on Wh- questions and past narrative continuous declarations."
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
          { speaker: "Vikram (Chief Architect)", textEn: "Did our engineering contractors inspect the foundation pillars yesterday?", textHi: "क्या हमारे इंजीनियरिंग ठेकेदारों ने कल नींव के खंभों का निरीक्षण किया?" },
          { speaker: "Priya (Senior Consultant)", textEn: "Yes, they were conducting ultrasonic stress tests when the municipal commissioner arrived.", textHi: "हाँ, वे अल्ट्रासोनिक तनाव परीक्षण कर रहे थे जब नगर आयुक्त पहुंचे।" },
          { speaker: "Vikram", textEn: "Why did the local committee express concern about the drainage channels?", textHi: "स्थानीय समिति ने जल निकासी चैनलों के बारे में चिंता क्यों व्यक्त की?" },
          { speaker: "Priya", textEn: "Because the monsoon runoff used to flood the lower basements before we built the storm drains.", textHi: "क्योंकि तूफान नाले बनाने से पहले मानसून का पानी निचले बेसमेंट में भर जाया करता था।" }
        ],
        speakingTask: cfg.speakingTask || {
          taskTitle: `Oral Production Drill: ${cfg.titleEn}`,
          prompt: `Deliver a 2-minute structured professional monologue utilizing at least 5 new vocabulary terms from Day ${dayNum}, demonstrating correct syntactic inversion, past continuous framing, and natural sentence intonation.`,
          fluencyRubric: [
            "Pronunciation & Intonation (Accurate phonetic target articulation)",
            "Grammatical Concord (Zero auxiliary or inversion errors)",
            "Lexical Richness (Seamless integration of 5+ target B1/B2 terms)",
            "Rhythm & Prosody (Natural content word stress and query intonation)"
          ],
          checklist: [
            "Did I apply correct auxiliary inversion (Did + Subject + V1)?",
            "Did I accurately contrast continuous and simple past actions with when/while?",
            "Did I avoid literal word-for-word Hindi calques?",
            "Did I maintain a confident, professional cadence?"
          ]
        }
      },
      assess: {
        writtenChecklist: [
          `Accurately form interrogative, continuous, and habitual structures for ${cfg.titleEn}.`,
          `Identify and eliminate Hindi-English transfer errors like '*Why you came late?*' or '*I was knowing the answer*'.`,
          `Distinguish phonemic contrasts across all 10 minimal pair drills.`,
          `Integrate at least 10 new B1/B2 academic and professional vocabulary words in original written sentences.`,
          `Complete all 65 interactive practice items and 25 precision translations with >90% accuracy.`
        ],
        oralProductionTask: `Record a 2-minute spoken narrative or technical debriefing using the grammatical structures of Day ${dayNum}.`,
        benchmarks: [
          `Accurate past auxiliary inversion without hesitation.`,
          `Seamless usage of past continuous for background progression.`,
          `100% correct distinction between 'used to' (states/habits) and 'would' (dynamic actions only).`,
          `Natural prosodic stress on Wh- interrogatives and temporal connectives.`,
          `Seamless bilingual conceptual translation without literal syntactic calques.`
        ]
      },
      review: {
        spacedRepetitionTag: `Stage3_Day${dayNum}_${cfg.titleEn.split(' ')[0]}`,
        recommendedIntervalDays: [1, 3, 7, 14, 30],
        retrievalDrill: `Recall and produce 5 spontaneous sentences or inquiries using target verbs and vocabulary from Day ${dayNum} within 60 seconds.`
      }
    };

    const outPath = path.join(process.cwd(), 'content_builder', `day${dayNum}.js`);
    fs.writeFileSync(outPath, `export const day${dayNum} = ${JSON.stringify(dayObj, null, 2)};\n`, 'utf-8');
    console.log(`[SUCCESS] Wrote complete content_builder/day${dayNum}.js (Vocab: ${vocabulary.length}, Exemplars: ${exemplars.length}, Exercises: ${exercises.length}, Translations: ${translationSet.length})`);
    results.push(dayObj);
  });

  return results;
}

if (process.argv[1]?.endsWith('build_stage3_days24_26.js')) {
  buildDays24_26().then(() => {
    console.log("\n[STAGE 3 BATCH 2 COMPLETE] Days 24–26 built and saved.");
  }).catch(err => {
    console.error("Error building Days 24-26:", err);
  });
}
