import fs from 'fs';
import path from 'path';

// Day 45: Medical Symptoms & Doctor Consultations
const day45 = {
  dayNumber: 45,
  id: "day_45",
  titleEn: "Medical Symptoms & Doctor Consultations",
  titleHi: "चिकित्सीय लक्षण एवं चिकित्सक परामर्श",
  cefr: "A2.2",
  estMinutes: 60,
  prerequisites: "Day 44 Mastery (Scholarly Discourse & Complex Syntax)",
  objectivesEn: [
    "Communicate acute and chronic physiological symptoms to medical professionals with anatomical and descriptive accuracy.",
    "Describe types and intensities of pain: throbbing, sharp, dull ache, stabbing, radiating, stinging, burning, and persistent.",
    "Discuss systemic symptoms: dizziness, nausea, fatigue, chills, palpitations, shortness of breath, and congestion.",
    "Understand physician inquiries regarding medical history, drug allergies, symptom onset, duration, and severity scales (1–10).",
    "Eliminate persistent Indian English medical expressions such as '*head is paining*', '*vomiting is coming*', '*loose motions*', and '*take rest*'."
  ],
  objectivesHi: [
    "तीव्र और पुराने शारीरिक लक्षणों का डॉक्टरों के सामने सटीक और व्यवस्थित अंग्रेजी में वर्णन करना।",
    "दर्द के प्रकारों और तीव्रता (Throbbing, Sharp, Dull ache, Stabbing, Radiating) को स्पष्ट रूप से व्यक्त करना।",
    "प्रणालीगत लक्षणों (चक्कर आना, मतली/उल्टी का अहसास, थकान, कंपकंपी, घबराहट, सांस फूलना) को समझाना।",
    "चिकित्सक द्वारा मेडिकल इतिहास, दवा की एलर्जी, बीमारी की शुरुआत और दर्द के पैमाने (1-10) पर पूछे गए प्रश्नों को समझना।",
    "भारतीय अंग्रेज़ी की चिकित्सीय गलतियों ('head is paining', 'vomiting is coming', 'loose motions') को पूरी तरह समाप्त करना।"
  ],
  teach: {
    hindiExplanation: `डे 45 में हम स्वास्थ्य, शारीरिक लक्षणों और डॉक्टर परामर्श (Medical Symptoms & Doctor Consultations) पर पूर्ण कमांड हासिल करेंगे।

1. **दर्द के प्रकार (Types of Pain)**:
   - **Throbbing Pain**: धड़कता हुआ / टीस मारने वाला दर्द (जैसे माइग्रेन में सिरदर्द).
   - **Sharp / Stabbing Pain**: तेज, चुभने वाला या कांटे जैसा दर्द.
   - **Dull Ache**: धीमा, लगातार बना रहने वाला हल्का दर्द (उदा. पीठ या बदन दर्द).
   - **Burning Sensation**: जलन का अहसास (जैसे एसिडिटी या यूरिनरी इन्फेक्शन में).
   - **Radiating Pain**: एक स्थान से दूसरे अंग तक फैलने वाला दर्द (जैसे कंधे से हाथ की ओर).

2. **सामान्य लक्षण (Systemic Symptoms)**:
   - **Nausea**: मतली / जी मिचलाना / उल्टी जैसा महसूस होना।
   - **Dizziness / Lightheadedness**: चक्कर आना / सिर घूमना।
   - **Fatigue / Exhaustion**: अत्यधिक कमजोरी या थकान।
   - **Shortness of Breath**: सांस फूलना या सांस लेने में तकलीफ होना।
   - **Chills**: ठंड लगकर कंपकंपी छूटना (जैसे मलेरिया या वायरल बुखार में)।

3. **L1 हिंदी भाषियों की आम मेडिकल गलतियां**:
   - कभी न कहें: '*My head is paining.*' ❌। सही मानक अंग्रेज़ी: "**I have a throbbing headache.**" या "**My head aches.**" ✔️
   - उल्टी के अहसास के लिए: '*Vomiting is coming to me.*' ❌ की जगह "**I feel nauseous.**" या "**I feel like vomiting.**" बोलें।
   - दस्त के लिए: '*I am having loose motions.*' ❌ (भारतीय अंग्रेज़ी) के स्थान पर अंतर्राष्ट्रीय मानक शब्द "**I have diarrhea**" /ˌdaɪ.əˈriː.ə/ या "**I have an upset stomach.**" का प्रयोग करें।
   - '*Dr. told me to take rest*' ❌ की जगह "**The doctor advised me to get some rest.**" बोलें।`,
    englishExplanation: `Day 45 equips learners with precise clinical, communicative, and descriptive language necessary for doctor-patient interactions, symptom reporting, and emergency triage.

Key Focus Dimensions:
1. **Qualitative Pain Taxonomy**: Distinguishing throbbing, acute, chronic, intermittent, radiating, and stabbing pain characteristics.
2. **Symptom Onset & Progression**: Chronologically describing onset ('it flared up suddenly two days ago'), triggers ('aggravated by exertion'), and associated symptoms ('accompanied by chills').
3. **Clinical Consultation Discourse**: Answering physician history inquiries, clarifying allergies, following prescription advice, and discussing lifestyle contraindications.`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "The 'Have + [Symptom Noun]' vs '[Body Part] Aches/Hurts' Construction",
        description: "Express physical conditions using 'I have a headache / sore throat / stomachache' or '[Body Part] hurts / aches': 'My lower back hurts whenever I bend down.' (NOT '*My back is paining*').",
        register: "Symptom Syntax"
      },
      {
        ruleNumber: 2,
        title: "Sensory Linking Verbs: 'Feel + [Adjective]'",
        description: "Link states using sensory verbs: 'I feel dizzy / nauseous / lightheaded / congested / feverish.'",
        register: "Sensory Copular Syntax"
      },
      {
        ruleNumber: 3,
        title: "Temporal Duration Prepositions ('For', 'Since', 'Over')",
        description: "Describe symptom timelines: 'I have been experiencing shortness of breath for the past forty-eight hours' / 'since Tuesday'.",
        register: "Clinical Chronology"
      },
      {
        ruleNumber: 4,
        title: "Passive Medical Recommendations & Advice",
        description: "Doctors use passive or modal advice structures: 'You are advised to stay hydrated' / 'This medication should be taken on a full stomach.'",
        register: "Medical Advice Syntax"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Reporting Symptoms",
        formula: "I have been experiencing + [Adjective] + [Symptom] + for the past + [Duration].",
        exampleEn: "I have been experiencing a sharp chest pain for the past two days.",
        meaningHi: "मैं पिछले दो दिनों से सीने में तेज चुभने वाले दर्द का अनुभव कर रहा हूँ।"
      },
      {
        subjectGroup: "Sensory State",
        formula: "I feel + [Adjective: dizzy / nauseous / feverish] + whenever I + [Action].",
        exampleEn: "I feel dizzy whenever I stand up abruptly.",
        meaningHi: "जब भी मैं अचानक खड़ा होता हूँ तो मुझे चक्कर आते हैं।"
      },
      {
        subjectGroup: "Aggravating Factors",
        formula: "The pain worsens / intensifies when I + [Action / Ingestion].",
        exampleEn: "The pain intensifies when I swallow hot food or liquids.",
        meaningHi: "जब मैं गर्म खाना या तरल पदार्थ निगलता हूँ तो दर्द बढ़ जाता है।"
      },
      {
        subjectGroup: "Allergy Disclosure",
        formula: "I am allergic to + [Medication / Substance] + (e.g. penicillin / sulfa drugs).",
        exampleEn: "I am severely allergic to penicillin and aspirin.",
        meaningHi: "मुझे पेनिसिलिन और एस्पिरिन से गंभीर एलर्जी है।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Loose Motions', 'Head Paining', and 'Vomiting Coming' Medical Traps",
      hindiPattern: "1. '*Doctor, my head is paining since yesterday.*'\n2. '*I am having loose motions.*'\n3. '*Vomiting is coming.*'\n4. '*My body is paining all over.*'",
      potentialInterference: "Direct literal word-for-word translation of Hindi idioms (सिर दर्द कर रहा है, लूज मोशन, उल्टी आ रही है, बदन दर्द).",
      explanation: "Native speakers use 'I have a headache' or 'My head throbs', never '*head is paining*'. 'Loose motions' is Indian English; international healthcare uses 'diarrhea' or 'an upset stomach'. 'Vomiting is coming' is ungrammatical; say 'I feel nauseous' or 'I feel like throwing up'. Generalized pain is 'I have body aches' or 'My entire body aches'.",
      naturalSolution: "1. 'I have had a severe headache since yesterday.' | 2. 'I have diarrhea / an upset stomach.' | 3. 'I feel nauseous / I feel like vomiting.' | 4. 'I have generalized body aches.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day45_vocab_001", word: "Throbbing", pos: "Adjective", ipa: "/ˈθrɒb.ɪŋ/", meaningHi: "धड़कता हुआ / टीस मारने वाला (दर्द)", exampleEn: "I woke up with a throbbing migraine behind my left eye.", exampleHi: "मेरी बाईं आंख के पीछे एक टीस मारते हुए माइग्रेन के दर्द के साथ नींद खुली।" },
      { id: "day45_vocab_002", word: "Nausea", pos: "Noun", ipa: "/ˈnɔː.zi.ə/", meaningHi: "मतली / जी मिचलाना (उल्टी जैसा लगना)", exampleEn: "The motion sickness caused severe dizziness and nausea.", exampleHi: "सफर की बीमारी (मोशन सिकनेस) के कारण गंभीर चक्कर और मतली हुई।" },
      { id: "day45_vocab_003", word: "Chronic", pos: "Adjective", ipa: "/ˈkrɒn.ɪk/", meaningHi: "दीर्घकालिक / पुराना (रोग जो लंबे समय तक चले)", exampleEn: "He suffers from chronic lower back pain caused by poor posture.", exampleHi: "वह खराब पोस्चर के कारण पुराने पीठ दर्द से पीड़ित हैं।" },
      { id: "day45_vocab_004", word: "Acute", pos: "Adjective", ipa: "/əˈkjuːt/", meaningHi: "तीव्र / अचानक उठा गंभीर दर्द या रोग", exampleEn: "She was rushed to the hospital with acute abdominal pain.", exampleHi: "उसे पेट के तीव्र दर्द के कारण तुरंत अस्पताल ले जाया गया।" },
      { id: "day45_vocab_005", word: "Fatigue", pos: "Noun", ipa: "/fəˈtiːɡ/", meaningHi: "अत्यधिक शारीरिक या मानसिक थकान / कमजोरी", exampleEn: "Chronic fatigue is a common symptom of iron deficiency anemia.", exampleHi: "आयरन की कमी वाले एनीमिया का एक सामान्य लक्षण अत्यधिक थकान है।" },
      { id: "day45_vocab_006", word: "Diagnosis", pos: "Noun", ipa: "/ˌdaɪ.əɡˈnəʊ.sɪs/", meaningHi: "रोग निदान / बीमारी की पहचान", exampleEn: "The physician confirmed the diagnosis after reviewing the blood test results.", exampleHi: "ब्लड टेस्ट के नतीजे देखने के बाद डॉक्टर ने बीमारी के निदान की पुष्टि की।" },
      { id: "day45_vocab_007", word: "Symptom", pos: "Noun", ipa: "/ˈsɪmp.təm/", meaningHi: "लक्षण / रोग का संकेत", exampleEn: "A persistent dry cough is a primary symptom of respiratory infection.", exampleHi: "लगातार सूखी खांसी श्वसन संक्रमण का एक प्राथमिक लक्षण है।" },
      { id: "day45_vocab_008", word: "Dizziness", pos: "Noun", ipa: "/ˈdɪz.i.nəs/", meaningHi: "चक्कर आना / सिर घूमना", exampleEn: "Dehydration can cause sudden dizziness and low blood pressure.", exampleHi: "निर्जलीकरण (पानी की कमी) से अचानक चक्कर आ सकते हैं और रक्तचाप कम हो सकता है।" },
      { id: "day45_vocab_009", word: "Congestion", pos: "Noun", ipa: "/kənˈdʒes.tʃən/", meaningHi: "कफ जमना / नाक या छाती का बंद होना", exampleEn: "Nasal congestion makes it difficult to breathe while sleeping.", exampleHi: "नाक बंद होने से सोते समय सांस लेना मुश्किल हो जाता है।" },
      { id: "day45_vocab_010", word: "Diarrhea", pos: "Noun", ipa: "/ˌdaɪ.əˈriː.ə/", meaningHi: "दस्त / पेचिश (भारतीय: Loose motions)", exampleEn: "Drink electrolyte solutions to prevent dehydration from diarrhea.", exampleHi: "दस्त से होने वाले निर्जलीकरण को रोकने के लिए इलेक्ट्रोलाइट घोल पिएं।" },
      { id: "day45_vocab_011", word: "Palpitation", pos: "Noun", ipa: "/ˌpæl.pɪˈteɪ.ʃən/", meaningHi: "दिल की तेज या अनियमित धड़कन", exampleEn: "She experienced heart palpitations after drinking too much espresso.", exampleHi: "बहुत ज्यादा एस्प्रेसो कॉफी पीने के बाद उसने दिल की तेज धड़कन महसूस की।" },
      { id: "day45_vocab_012", word: "Inflammation", pos: "Noun", ipa: "/ˌɪn.fləˈmeɪ.ʃən/", meaningHi: "सूजन / जलन / प्रदाह", exampleEn: "The doctor prescribed an anti-inflammatory ointment for the sprained ankle.", exampleHi: "डॉक्टर ने मोच आए टखने के लिए सूजन-रोधी मरहम लिखा।" },
      { id: "day45_vocab_013", word: "Feverish", pos: "Adjective", ipa: "/ˈfiː.vər.ɪʃ/", meaningHi: "हल्के बुखार जैसा / हरारत महसूस होना", exampleEn: "He felt feverish and shivered throughout the cold night.", exampleHi: "उसे हरारत महसूस हुई और वह पूरी ठंडी रात कांपता रहा।" },
      { id: "day45_vocab_014", word: "Shortness of breath", pos: "Noun phrase", ipa: "/ˈʃɔːt.nəs əv breθ/", meaningHi: "सांस फूलना / सांस लेने में कठिनाई", exampleEn: "Climbing stairs caused unexpected shortness of breath.", exampleHi: "सीढ़ियाँ चढ़ने से अप्रत्याशित रूप से सांस फूलने लगी।" },
      { id: "day45_vocab_015", word: "Chills", pos: "Noun (plural)", ipa: "/tʃɪlz/", meaningHi: "कंपकंपी / ठंड लगना (बुखार के साथ)", exampleEn: "The patient developed high fever accompanied by severe chills.", exampleHi: "मरीज को तेज बुखार के साथ तेज कंपकंपी होने लगी।" },
      { id: "day45_vocab_016", word: "Numbness", pos: "Noun", ipa: "/ˈnʌm.nəs/", meaningHi: "सुन्नपन / संवेदनाहीनता", exampleEn: "He felt numbness and tingling in his left fingertips.", exampleHi: "उसने अपनी बाईं उंगलियों में सुन्नपन और झुनझुनी महसूस की।" },
      { id: "day45_vocab_017", word: "Spasm", pos: "Noun", ipa: "/ˈspæz.əm/", meaningHi: "मांसपेशियों की ऐंठन / मरोड़", exampleEn: "A sudden muscle spasm in his calf prevented him from walking.", exampleHi: "उसकी पिंडली में अचानक मांसपेशियों की ऐंठन ने उसे चलने से रोक दिया।" },
      { id: "day45_vocab_018", word: "Allergy", pos: "Noun", ipa: "/ˈæl.ə.dʒi/", meaningHi: "एलर्जी / अतिसंवेदनशीलता", exampleEn: "Inform the medical staff if you have any drug allergy.", exampleHi: "यदि आपको किसी दवा से एलर्जी है तो मेडिकल स्टाफ को सूचित करें।" },
      { id: "day45_vocab_019", word: "Stabbing", pos: "Adjective", ipa: "/ˈstæb.ɪŋ/", meaningHi: "तेज चुभने वाला (दर्द)", exampleEn: "She felt a stabbing pain in her side whenever she inhaled deeply.", exampleHi: "जब भी वह गहरी सांस लेती तो उसे अपनी पसली में तेज चुभने वाला दर्द महसूस होता था।" },
      { id: "day45_vocab_020", word: "Prognosis", pos: "Noun", ipa: "/prɒɡˈnəʊ.sɪs/", meaningHi: "रोग का पूर्वानुमान / ठीक होने की संभावना", exampleEn: "With early treatment, the overall prognosis is very favorable.", exampleHi: "शुरुआती इलाज से ठीक होने का कुल पूर्वानुमान बहुत अनुकूल है।" }
    ],
    spokenPhrases: [
      { id: "day45_phrase_001", phrase: "I have a throbbing headache on one side of my head.", register: "Clinical Consultation", meaningHi: "मेरे सिर के एक तरफ धड़कता हुआ/टीस मारता दर्द है।" },
      { id: "day45_phrase_002", phrase: "I feel nauseous and lightheaded whenever I stand up.", register: "Symptom Reporting", meaningHi: "जब भी मैं खड़ा होता हूँ तो मुझे मतली और चक्कर महसूस होते हैं।" },
      { id: "day45_phrase_003", phrase: "How long have you been experiencing these symptoms?", register: "Doctor Inquiry", meaningHi: "आप इन लक्षणों का अनुभव कितने समय से कर रहे हैं?" },
      { id: "day45_phrase_004", phrase: "On a scale of one to ten, how would you rate your pain?", register: "Clinical Scale", meaningHi: "एक से दस के पैमाने पर, आप अपने दर्द को कितना अंक देंगे?" },
      { id: "day45_phrase_005", phrase: "I have an upset stomach and mild diarrhea.", register: "Gastrointestinal", meaningHi: "मेरा पेट खराब है और हल्के दस्त हैं।" },
      { id: "day45_phrase_006", phrase: "Does the pain radiate down your left arm or shoulder?", register: "Cardiology Check", meaningHi: "क्या दर्द आपके बाएं हाथ या कंधे की ओर फैलता है?" },
      { id: "day45_phrase_007", phrase: "I am severely allergic to penicillin and sulfur antibiotics.", register: "Allergy Disclosure", meaningHi: "मुझे पेनिसिलिन और सल्फर एंटीबायोटिक्स से गंभीर एलर्जी है।" },
      { id: "day45_phrase_008", phrase: "Take two tablets twice daily after meals.", register: "Dosage Instruction", meaningHi: "भोजन के बाद दिन में दो बार दो गोलियां लें।" },
      { id: "day45_phrase_009", phrase: "I've had a persistent dry cough for over a week.", register: "Respiratory", meaningHi: "मुझे एक हफ्ते से अधिक समय से लगातार सूखी खांसी आ रही है।" },
      { id: "day45_phrase_010", phrase: "You should get plenty of bed rest and drink fluids.", register: "Doctor Advice", meaningHi: "आपको भरपूर आराम करना चाहिए और तरल पदार्थ पीने चाहिए।" },
      { id: "day45_phrase_011", phrase: "The swelling should subside within forty-eight hours.", register: "Recovery Prognosis", meaningHi: "सूजन अड़तालीस घंटे के भीतर कम हो जानी चाहिए।" },
      { id: "day45_phrase_012", phrase: "I feel short of breath even after minimal exertion.", register: "Cardiac / Pulmonary", meaningHi: "हल्की सी मेहनत के बाद भी मेरी सांस फूलने लगती है।" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day45_ex_001", english: "I have had a dull ache in my lower back since yesterday afternoon.", hindi: "मुझे कल दोपहर से अपनी पीठ के निचले हिस्से में धीमा दर्द हो रहा है।" },
      { id: "day45_ex_002", english: "The doctor inquired whether the patient had any history of cardiovascular disease.", hindi: "डॉक्टर ने पूछा कि क्या मरीज का हृदय रोग का कोई इतिहास है।" },
      { id: "day45_ex_003", english: "She felt dizzy and nauseous after standing under the scorching sun.", hindi: "तपती धूप में खड़े रहने के बाद उसे चक्कर और मतली महसूस हुई।" },
      { id: "day45_ex_004", english: "He developed high fever, severe body chills, and joint inflammation.", hindi: "उसे तेज बुखार, गंभीर ठंड की कंपकंपी और जोड़ों में सूजन हो गई।" },
      { id: "day45_ex_005", english: "Please inform the triage nurse if you experience any chest tightness.", hindi: "यदि आप छाती में कोई जकड़न महसूस करते हैं तो कृपया ट्राइएज नर्स को सूचित करें।" },
      { id: "day45_ex_006", english: "The patient reported acute abdominal pain that flared up after eating spicy food.", hindi: "मरीज ने पेट के तीव्र दर्द की सूचना दी जो मसालेदार खाना खाने के बाद भड़क उठा था।" },
      { id: "day45_ex_007", english: "Her dry cough is accompanied by nasal congestion and a sore throat.", hindi: "उसकी सूखी खांसी के साथ नाक बंद होना और गले में खराश है।" },
      { id: "day45_ex_008", english: "You must complete the full five-day course of antibiotics even if symptoms subside.", hindi: "लक्षण कम होने पर भी आपको एंटीबायोटिक्स का पूरा पांच दिवसीय कोर्स पूरा करना होगा।" },
      { id: "day45_ex_009", english: "I experience sudden muscle spasms in my lower leg during the night.", hindi: "मुझे रात के दौरान अपने निचले पैर में अचानक मांसपेशियों में ऐंठन का अनुभव होता है।" },
      { id: "day45_ex_010", english: "The physician recommended getting an ultrasound scan to confirm the diagnosis.", hindi: "चिकित्सक ने निदान की पुष्टि के लिए अल्ट्रासाउंड स्कैन कराने की सिफारिश की।" },
      { id: "day45_ex_011", english: "He feels chronic fatigue and weakness despite sleeping eight hours every night.", hindi: "हर रात आठ घंटे सोने के बावजूद वह पुरानी थकान और कमजोरी महसूस करता है।" },
      { id: "day45_ex_012", english: "Are you currently taking any prescription medications or herbal supplements?", hindi: "क्या आप वर्तमान में कोई प्रिस्क्रिप्शन दवाएं या हर्बल सप्लीमेंट ले रहे हैं?" },
      { id: "day45_ex_013", english: "The sharp pain in my right knee intensifies whenever I climb downstairs.", hindi: "जब भी मैं सीढ़ियाँ नीचे उतरता हूँ तो मेरे दाहिने घुटने का तेज़ दर्द बढ़ जाता है।" },
      { id: "day45_ex_014", english: "She was diagnosed with a mild viral gastroenteritis and prescribed oral rehydration salts.", hindi: "उसे हल्के वायरल गैस्ट्रोएंटेराइटिस का निदान किया गया और ओरल रिहाइड्रेशन सॉल्ट (ORS) लिखा गया।" },
      { id: "day45_ex_015", english: "The rash on his forearms is itchy and exhibits red blotches.", hindi: "उसकी बाहों पर दाने में खुजली है और लाल चकत्ते दिखाई दे रहे हैं।" },
      { id: "day45_ex_016", english: "He noticed temporary numbness in his fingers after typing for hours.", hindi: "घंटों टाइप करने के बाद उसने अपनी उंगलियों में अस्थायी सुन्नपन देखा।" },
      { id: "day45_ex_017", english: "The pain radiates from my neck down into my left shoulder blade.", hindi: "दर्द मेरी गर्दन से नीचे मेरे बाएं कंधे के ब्लेड में फैलता है।" },
      { id: "day45_ex_018", english: "Do you have any known allergies to latex, iodine, or specific food items?", hindi: "क्या आपको लेटेक्स, आयोडीन या विशिष्ट खाद्य पदार्थों से कोई ज्ञात एलर्जी है?" },
      { id: "day45_ex_019", english: "The doctor checked my blood pressure, pulse rate, and oxygen saturation levels.", hindi: "डॉक्टर ने मेरे रक्तचाप, नाड़ी की दर और ऑक्सीजन संतृप्ति (सैचुरेशन) स्तर की जाँच की।" },
      { id: "day45_ex_020", english: "Resting in a dark, quiet room helps relieve acute migraine symptoms.", hindi: "अंधेरे, शांत कमरे में आराम करने से तीव्र माइग्रेन के लक्षणों को दूर करने में मदद मिलती है।" },
      { id: "day45_ex_021", english: "She felt short of breath and lightheaded after climbing just one flight of stairs.", hindi: "केवल एक मंजिल सीढ़ी चढ़ने के बाद ही उसकी सांस फूलने लगी और चक्कर आने लगे।" },
      { id: "day45_ex_022", english: "The sprain caused substantial swelling and bruising around the right ankle.", hindi: "मोच के कारण दाहिने टखने के चारों ओर काफी सूजन और नील पड़ गया था।" },
      { id: "day45_ex_023", english: "He had a high-grade fever that did not respond to standard paracetamol.", hindi: "उसे तेज बुखार था जो सामान्य पैरासिटामोल से कम नहीं हो रहा था।" },
      { id: "day45_ex_024", english: "The clinical prognosis indicates full functional recovery within three weeks.", hindi: "नैदानिक पूर्वानुमान तीन सप्ताह के भीतर पूर्ण कार्यात्मक सुधार का संकेत देता है।" },
      { id: "day45_ex_025", english: "Please fast for eight hours prior to tomorrow morning's blood test.", hindi: "कृपया कल सुबह के रक्त परीक्षण से पहले आठ घंटे का उपवास रखें।" }
    ]
  },
  pronunciation: {
    focusSound: "Pronunciation of /ˌdaɪ.əˈriː.ə/ in 'Diarrhea', /kənˈdʒes.tʃən/ in 'Congestion', and silent 'p' in 'Pneumonia' /njuːˈməʊ.ni.ə/",
    phoneticNotes: "1. 'Pneumonia' starts with silent 'p': pronounce /njuːˈməʊ.ni.ə/.\n2. 'Diarrhea' has four syllables with stress on the third: /ˌdaɪ.əˈriː.ə/.\n3. 'Throbbing' starts with voiceless /θ/: /ˈθrɒb.ɪŋ/.",
    minimalPairs: [
      { wordA: "Ache", ipaA: "/eɪk/", wordB: "Age", ipaB: "/eɪdʒ/" },
      { wordA: "Cough", ipaA: "/kɒf/", wordB: "Coffin", ipaB: "/ˈkɒf.ɪn/" },
      { wordA: "Pills", ipaA: "/pɪlz/", wordB: "Peels", ipaB: "/piːlz/" },
      { wordA: "Breath", ipaA: "/breθ/", wordB: "Breathe", ipaB: "/briːð/" },
      { wordA: "Wound", ipaA: "/wuːnd/", wordB: "Wound (wound up)", ipaB: "/waʊnd/" }
    ],
    drills: [
      { sentence: "I have a throbbing headache behind my left eye.", focus: "Voiceless /θ/ in 'throbbing' /ˈθrɒb.ɪŋ/ & /eɪk/ in 'headache'" },
      { sentence: "Nasal congestion causes severe shortness of breath.", focus: "Affricate /tʃ/ in 'congestion' & /breθ/ noun" },
      { sentence: "The doctor diagnosed acute pneumonia.", focus: "Silent 'p' in 'pneumonia' /njuːˈməʊ.ni.ə/" },
      { sentence: "He experienced dizziness, nausea, and fatigue.", focus: "Stress in /ˈdɪz.i.nəs/, /ˈnɔː.zi.ə/, /fəˈtiːɡ/" },
      { sentence: "Drink fluids to treat dehydration from diarrhea.", focus: "Syllable rhythm in /ˌdaɪ.əˈriː.ə/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day45_ex_001",
        type: "error_correction",
        prompt: "Correct the sentence: 'Doctor, my head is paining since morning.'",
        correctAnswer: "Doctor, I have had a headache since morning.",
        acceptableAnswers: [
          "Doctor, I have a throbbing headache since morning.",
          "Doctor, my head has been aching since morning."
        ],
        explanationEn: "In standard English, use 'I have a headache' or 'My head has been aching', not '*head is paining*'.",
        explanationHi: "'Head is paining' के स्थान पर 'I have a headache' या 'My head has been aching' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day45_ex_002",
        type: "multiple_choice",
        prompt: "Which adjective best describes a rhythmic, pulsing pain (like in a migraine)?",
        options: ["Throbbing", "Numb", "Spacious", "Unfurnished"],
        correctAnswer: "Throbbing",
        explanationEn: "'Throbbing' describes rhythmic pulsating pain.",
        explanationHi: "धड़कते हुए/टीस मारते दर्द को 'throbbing pain' कहते हैं।",
        difficulty: "easy",
        skillTag: "CLINICAL_DESCRIPTORS"
      },
      {
        id: "day45_ex_003",
        type: "error_correction",
        prompt: "Correct the sentence: 'Vomiting is coming to me whenever I eat.'",
        correctAnswer: "I feel nauseous whenever I eat.",
        acceptableAnswers: [
          "I feel like vomiting whenever I eat.",
          "I feel like throwing up whenever I eat."
        ],
        explanationEn: "Say 'I feel nauseous' or 'I feel like throwing up', never '*vomiting is coming*'.",
        explanationHi: "उल्टी के अहसास के लिए 'I feel nauseous' या 'I feel like vomiting' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day45_ex_004",
        type: "fill_blank",
        prompt: "The standard medical term for loose, watery bowel movements (Indian English: 'loose motions') is _______.",
        correctAnswer: "diarrhea",
        acceptableAnswers: ["diarrhoea"],
        explanationEn: "'Diarrhea' (or UK 'diarrhoea') is the standard medical term.",
        explanationHi: "दस्त के लिए अंतर्राष्ट्रीय शब्द 'diarrhea' है।",
        difficulty: "medium",
        skillTag: "MEDICAL_TERMINOLOGY"
      },
      {
        id: "day45_ex_005",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'जब भी मैं गहरी सांस लेता हूँ तो मुझे सीने में तेज चुभन महसूस होती है।'",
        correctAnswer: "I feel a sharp stabbing pain in my chest whenever I inhale deeply.",
        acceptableAnswers: [
          "I feel a sharp pain in my chest whenever I take a deep breath.",
          "I experience a sharp pain in my chest when breathing deeply."
        ],
        explanationEn: "'I feel a sharp stabbing pain in my chest whenever I inhale deeply.'",
        explanationHi: "'Sharp stabbing pain' और 'inhale deeply' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day45_ex_006",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The doctor advised getting an ultrasound scan to confirm the diagnosis.'",
        correctAnswer: "डॉक्टर ने रोग निदान की पुष्टि के लिए अल्ट्रासाउंड स्कैन कराने की सलाह दी।",
        acceptableAnswers: [
          "डॉक्टर ने बीमारी की पुष्टि के लिए अल्ट्रासाउंड कराने का सुझाव दिया।"
        ],
        explanationEn: "'Confirm the diagnosis' translates as रोग निदान की पुष्टि करना.",
        explanationHi: "'Diagnosis' का अर्थ रोग निदान/बीमारी की पहचान है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day45_ex_007",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [pain / how / rate / would / you / scale / on / a / your / ?]",
        correctAnswer: "How would you rate your pain on a scale?",
        acceptableAnswers: [
          "How would you rate your pain on a scale of one to ten?"
        ],
        correctAnswer: "How would you rate your pain on a scale?",
        explanationEn: "Question structure for clinical pain assessment.",
        explanationHi: "सही क्रम: How would you rate your pain on a scale?",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day45_ex_008",
        type: "multiple_choice",
        prompt: "What does 'chronic condition' mean?",
        options: [
          "A medical condition that lasts for a long time or recurs constantly",
          "A disease that lasts only five minutes",
          "A condition caused by cold water",
          "A fracture in a tooth"
        ],
        correctAnswer: "A medical condition that lasts for a long time or recurs constantly",
        explanationEn: "'Chronic' refers to long-lasting or persistent medical conditions.",
        explanationHi: "लंबे समय तक बनी रहने वाली पुरानी बीमारी को 'chronic' कहते हैं।",
        difficulty: "easy",
        skillTag: "VOCAB_CLASSIFICATION"
      },
      {
        id: "day45_ex_009",
        type: "error_correction",
        prompt: "Correct the sentence: 'My doctor told me to take rest for three days.'",
        correctAnswer: "My doctor advised me to rest for three days.",
        acceptableAnswers: [
          "My doctor advised me to get some rest for three days.",
          "My doctor told me to rest for three days."
        ],
        explanationEn: "Use 'advised me to rest' or 'told me to get some rest', not '*take rest*'.",
        explanationHi: "आराम करने के लिए 'to rest' या 'get some rest' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day45_ex_010",
        type: "fill_blank",
        prompt: "A sensation of spinning or losing one's balance is clinically termed _______.",
        correctAnswer: "dizziness",
        acceptableAnswers: ["vertigo", "lightheadedness"],
        explanationEn: "'Dizziness' or 'vertigo' describes the spinning sensation.",
        explanationHi: "चक्कर आने को 'dizziness' या 'vertigo' कहते हैं।",
        difficulty: "easy",
        skillTag: "SYMPTOM_DESCRIPTORS"
      },
      {
        id: "day45_ex_011",
        type: "dialogue_completion",
        prompt: "Complete the consultation exchange:\nDoctor: 'Do you have any drug allergies?'\nPatient: 'Yes, I am severely allergic to _______ and aspirin.'",
        options: ["penicillin", "curriculum", "aisle", "plumbing"],
        correctAnswer: "penicillin",
        explanationEn: "'Penicillin' is an antibiotic medication subject to allergic reactions.",
        explanationHi: "'Penicillin' एक सामान्य एंटीबायोटिक दवा है।",
        difficulty: "easy",
        skillTag: "CLINICAL_DISCOURSE"
      },
      {
        id: "day45_ex_012",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'मुझे पिछले दो दिनों से कंपकंपी के साथ तेज बुखार है।'",
        correctAnswer: "I have had a high fever accompanied by chills for the past two days.",
        acceptableAnswers: [
          "I have a high fever with chills for the last two days.",
          "I have been running a high fever with severe chills for two days."
        ],
        explanationEn: "'I have had a high fever accompanied by chills for the past two days.'",
        explanationHi: "'High fever accompanied by chills' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day45_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The patient experienced acute shortness of breath.'",
        correctAnswer: "The patient experienced acute shortness of breath.",
        explanationEn: "Focus on spelling 'acute' and 'breath'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day45_ex_014",
        type: "sentence_transformation",
        prompt: "Rewrite without using 'paining': 'My whole body is paining after the gym.'",
        correctAnswer: "My entire body aches after the gym.",
        acceptableAnswers: [
          "I have generalized body aches after the gym.",
          "My whole body feels sore after the gym."
        ],
        explanationEn: "Say 'My entire body aches' or 'I feel sore all over'.",
        explanationHi: "'My entire body aches' या 'I feel sore' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day45_ex_015",
        type: "matching",
        prompt: "Match the medical symptom to its description:\n1. Nausea\n2. Palpitation\n3. Fatigue\n4. Inflammation",
        options: [
          "1-Feeling sick/urge to vomit, 2-Rapid or irregular heartbeat, 3-Extreme tiredness/weakness, 4-Redness and swelling in tissues",
          "1-Rapid heartbeat, 2-Feeling sick, 3-Swelling, 4-Extreme tiredness",
          "1-Swelling, 2-Tiredness, 3-Feeling sick, 4-Heartbeat",
          "1-Tiredness, 2-Heartbeat, 3-Swelling, 4-Feeling sick"
        ],
        correctAnswer: "1-Feeling sick/urge to vomit, 2-Rapid or irregular heartbeat, 3-Extreme tiredness/weakness, 4-Redness and swelling in tissues",
        explanationEn: "Accurate matching of medical symptoms.",
        explanationHi: "चिकित्सीय लक्षणों का सही मिलान।",
        difficulty: "medium",
        skillTag: "VOCAB_MATCHING"
      },
      {
        id: "day45_ex_016",
        type: "error_correction",
        prompt: "Correct the sentence: 'Are you feeling fever?'",
        correctAnswer: "Do you have a fever?",
        acceptableAnswers: [
          "Are you feeling feverish?"
        ],
        explanationEn: "Say 'Do you have a fever?' (noun) or 'Are you feeling feverish?' (adjective).",
        explanationHi: "'Do you have a fever?' या 'Are you feeling feverish?' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "SYMPTOM_SYNTAX"
      },
      {
        id: "day45_ex_017",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The pain radiates from the neck into the left shoulder blade.'",
        correctAnswer: "दर्द गर्दन से निकलकर बाएं कंधे के ब्लेड तक फैलता है।",
        acceptableAnswers: [
          "दर्द गर्दन से बाएं कंधे की तरफ जाता है।"
        ],
        explanationEn: "'Radiates' translates as फैलता है / प्रसारित होता है.",
        explanationHi: "'Radiates' का अर्थ एक स्थान से दूसरे अंग तक फैलना है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day45_ex_018",
        type: "active_recall",
        prompt: "What is the word for a sudden, involuntary muscular contraction?",
        correctAnswer: "Spasm",
        acceptableAnswers: ["muscle spasm", "spasm", "cramp"],
        explanationEn: "'Spasm' or 'cramp' is an involuntary muscular contraction.",
        explanationHi: "मांसपेशियों की अचानक ऐंठन को 'spasm' या 'cramp' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day45_ex_019",
        type: "multiple_choice",
        prompt: "What does 'prognosis' mean in a medical report?",
        options: [
          "The likely course or forecast of a medical condition and recovery",
          "The price of the consultation",
          "The hospital room number",
          "The name of the ambulance driver"
        ],
        correctAnswer: "The likely course or forecast of a medical condition and recovery",
        explanationEn: "Prognosis is the clinical forecast of the course and outcome of a disease.",
        explanationHi: "रोग के ठीक होने के पूर्वानुमान को 'prognosis' कहते हैं।",
        difficulty: "medium",
        skillTag: "MEDICAL_TERMINOLOGY"
      },
      {
        id: "day45_ex_020",
        type: "speaking_pronunciation",
        prompt: "Articulate silent 'p' in 'pneumonia' /njuːˈməʊ.ni.ə/: 'The doctor treated the patient for acute pneumonia.'",
        correctAnswer: "The doctor treated the patient for acute pneumonia.",
        explanationEn: "Silent 'p' in 'pneumonia' (/njuːˈməʊ.ni.ə/).",
        explanationHi: "'Pneumonia' में 'p' का उच्चारण न करें।",
        difficulty: "hard",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day45_ex_021",
        type: "question_formation",
        prompt: "Form a doctor's polite inquiry asking when the symptoms first started:",
        correctAnswer: "When did your symptoms first start?",
        acceptableAnswers: [
          "When did the symptoms first begin?",
          "How long have you had these symptoms?"
        ],
        explanationEn: "'When did your symptoms first start?' or 'How long have you had these symptoms?'",
        explanationHi: "लक्षणों की शुरुआत पूछने का सही प्रश्न।",
        difficulty: "easy",
        skillTag: "QUESTION_FORMATION"
      },
      {
        id: "day45_ex_022",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'क्या आपको दवा लेने के बाद कोई साइड इफ़ेक्ट महसूस हुआ?'",
        correctAnswer: "Did you experience any side effects after taking the medication?",
        acceptableAnswers: [
          "Did you have any side effects from the medication?",
          "Have you experienced any side effects after taking the medicine?"
        ],
        explanationEn: "'Did you experience any side effects after taking the medication?'",
        explanationHi: "'Side effects' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day45_ex_023",
        type: "sentence_building",
        prompt: "Build a sentence describing chronic back pain using [pain / lower / suffers / from / he / back / chronic].",
        correctAnswer: "He suffers from chronic lower back pain.",
        explanationEn: "'He suffers from chronic lower back pain.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day45_ex_024",
        type: "multiple_choice",
        prompt: "Which term describes a lack of sensation or 'pins and needles' feeling in a body part?",
        options: ["Numbness / Tingling", "Throbbing", "Congestion", "Feverish"],
        correctAnswer: "Numbness / Tingling",
        explanationEn: "Numbness (loss of feeling) and tingling (pins and needles).",
        explanationHi: "सुन्नपन और झुनझुनी को 'numbness / tingling' कहते हैं।",
        difficulty: "easy",
        skillTag: "SYMPTOM_DESCRIPTORS"
      },
      {
        id: "day45_ex_025",
        type: "error_correction",
        prompt: "Correct the sentence: 'She is taking medicine for her loose motions.'",
        correctAnswer: "She is taking medication for diarrhea.",
        acceptableAnswers: [
          "She is taking medicine for an upset stomach."
        ],
        explanationEn: "Use 'diarrhea' or 'an upset stomach', not 'loose motions'.",
        explanationHi: "'Loose motions' के स्थान पर 'diarrhea' या 'an upset stomach' बोलें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day45_ex_026",
        type: "fill_blank",
        prompt: "A sudden rise in body temperature accompanied by shivering is called high fever with _______.",
        correctAnswer: "chills",
        explanationEn: "'Chills' accompany high fever during infections.",
        explanationHi: "कंपकंपी को 'chills' कहते हैं।",
        difficulty: "easy",
        skillTag: "SYMPTOM_DESCRIPTORS"
      },
      {
        id: "day45_ex_027",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Please take this medication on a full stomach twice daily.'",
        correctAnswer: "कृपया यह दवा भोजन के बाद (भरे पेट) दिन में दो बार लें।",
        acceptableAnswers: [
          "कृपया यह दवाई खाना खाने के बाद दिन में दो बार लीजिए।"
        ],
        explanationEn: "'On a full stomach' translates as भोजन के बाद / भरे पेट.",
        explanationHi: "'On a full stomach' का अर्थ खाना खाने के बाद है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day45_ex_028",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [fluids / drink / plenty / dehydration / of / prevent / to]",
        correctAnswer: "Drink plenty of fluids to prevent dehydration.",
        explanationEn: "Imperative verb + Object + Infinitive purpose clause.",
        explanationHi: "सही क्रम: Drink plenty of fluids to prevent dehydration.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day45_ex_029",
        type: "multiple_choice",
        prompt: "Which symptom describes difficulty in breathing or feeling winded after minimal effort?",
        options: ["Shortness of breath", "Numbness", "Palpitation", "Throbbing"],
        correctAnswer: "Shortness of breath",
        explanationEn: "'Shortness of breath' (dyspnea) is breathing difficulty.",
        explanationHi: "सांस फूलने को 'shortness of breath' कहते हैं।",
        difficulty: "easy",
        skillTag: "SYMPTOM_DESCRIPTORS"
      },
      {
        id: "day45_ex_030",
        type: "active_recall",
        prompt: "What is the medical term for nasal blockage or accumulation of mucus in the respiratory tract?",
        correctAnswer: "Congestion",
        acceptableAnswers: ["nasal congestion", "congestion"],
        explanationEn: "'Congestion' refers to fluid/mucus accumulation in nasal or chest passages.",
        explanationHi: "नाक या कफ जमने को 'congestion' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day45_ex_031",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'मेरी दाईं कलाई में मोच आ गई है और काफी सूजन है।'",
        correctAnswer: "I have sprained my right wrist and there is substantial swelling.",
        acceptableAnswers: [
          "My right wrist is sprained and quite swollen.",
          "I have a sprained right wrist with noticeable swelling."
        ],
        explanationEn: "'I have sprained my right wrist and there is substantial swelling.'",
        explanationHi: "'Sprained wrist' और 'swelling' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day45_ex_032",
        type: "error_correction",
        prompt: "Correct the sentence: 'The doctor has checked my pulse rates.'",
        correctAnswer: "The doctor checked my pulse rate.",
        explanationEn: "Pulse rate is singular ('pulse rate'), and past event uses past simple 'checked'.",
        explanationHi: "'Pulse rate' एकवचन होता है।",
        difficulty: "easy",
        skillTag: "MEDICAL_SYNTAX"
      },
      {
        id: "day45_ex_033",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nDoctor: 'Where does it hurt most?'\nPatient: 'There is a sharp _______ pain in my lower right abdomen.'",
        options: ["stabbing", "spacious", "sublet", "counterfeit"],
        correctAnswer: "stabbing",
        explanationEn: "'Stabbing pain' describes sharp, acute, piercing pain.",
        explanationHi: "तेज चुभते दर्द को 'stabbing pain' कहते हैं।",
        difficulty: "easy",
        skillTag: "CLINICAL_DESCRIPTORS"
      },
      {
        id: "day45_ex_034",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'You must complete the full course of antibiotics.'",
        correctAnswer: "You must complete the full course of antibiotics.",
        explanationEn: "Focus on spelling 'antibiotics' and 'complete'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day45_ex_035",
        type: "multiple_choice",
        prompt: "What is an 'anti-inflammatory' drug prescribed for?",
        options: [
          "To reduce swelling, redness, and pain",
          "To cause dehydration",
          "To increase body weight",
          "To make bones softer"
        ],
        correctAnswer: "To reduce swelling, redness, and pain",
        explanationEn: "Anti-inflammatory medications mitigate swelling and tissue pain.",
        explanationHi: "सूजन और दर्द कम करने वाली दवा को 'anti-inflammatory' कहते हैं।",
        difficulty: "easy",
        skillTag: "MEDICAL_TERMINOLOGY"
      },
      {
        id: "day45_ex_036",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'मुझे पिछले तीन दिनों से लगातार सूखी खांसी आ रही है।'",
        correctAnswer: "I have had a persistent dry cough for the past three days.",
        acceptableAnswers: [
          "I have been experiencing a persistent dry cough for three days.",
          "I've had a continuous dry cough for the last three days."
        ],
        explanationEn: "'I have had a persistent dry cough for the past three days.'",
        explanationHi: "'Persistent dry cough' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day45_ex_037",
        type: "error_correction",
        prompt: "Correct the sentence: 'He is suffering with chronic migraine.'",
        correctAnswer: "He is suffering from chronic migraines.",
        acceptableAnswers: [
          "He suffers from chronic migraines.",
          "He suffers from a chronic migraine."
        ],
        explanationEn: "The collocation is 'suffer FROM [condition]', not 'suffer with'.",
        explanationHi: "रोग से पीड़ित होने के लिए 'suffers from' का प्रयोग होता है।",
        difficulty: "medium",
        skillTag: "PREPOSITION_COLLOCATION"
      },
      {
        id: "day45_ex_038",
        type: "sentence_building",
        prompt: "Build a sentence about fasting for tests using [blood / fast / please / test / hours / eight / for / before / the].",
        correctAnswer: "Please fast for eight hours before the blood test.",
        explanationEn: "'Please fast for eight hours before the blood test.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day45_ex_039",
        type: "fill_blank",
        prompt: "The doctor used a stethoscope to listen to the patient's _______ and lungs.",
        correctAnswer: "heart",
        explanationEn: "A stethoscope listens to heart sounds and respiratory lung sounds.",
        explanationHi: "दिल और फेफड़ों की धड़कन सुनने के लिए स्टेथोस्कोप का उपयोग किया जाता है।",
        difficulty: "easy",
        skillTag: "MEDICAL_INSTRUMENTS"
      },
      {
        id: "day45_ex_040",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Resting in a quiet, dark room relieves severe migraine symptoms.'",
        correctAnswer: "शांत, अंधेरे कमरे में आराम करने से गंभीर माइग्रेन के लक्षणों में राहत मिलती है।",
        acceptableAnswers: [
          "एक शांत और अंधेरे कमरे में आराम माइग्रेन के दर्द को कम करता है।"
        ],
        explanationEn: "'Relieves migraine symptoms' translates as माइग्रेन के लक्षणों में राहत मिलती है.",
        explanationHi: "माइग्रेन से राहत का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day45_ex_041",
        type: "multiple_choice",
        prompt: "Which phrase indicates that a patient is unable to eat or drink for medical testing?",
        options: ["Fasting", "Throbbing", "Subletting", "Clearance"],
        correctAnswer: "Fasting",
        explanationEn: "'Fasting' means abstaining from food or drink before medical tests.",
        explanationHi: "जांच से पहले भूखे-प्यासे रहने को 'fasting' कहते हैं।",
        difficulty: "easy",
        skillTag: "MEDICAL_TERMINOLOGY"
      },
      {
        id: "day45_ex_042",
        type: "active_recall",
        prompt: "What is the medical term for a rash characterized by raised, red, itchy welts on the skin?",
        correctAnswer: "Hives",
        acceptableAnswers: ["hives", "urticaria", "rash"],
        explanationEn: "'Hives' or 'urticaria' refers to allergic itchy skin welts.",
        explanationHi: "त्वचा पर लाल खुजलीदार चकत्तों (पित्ती) को 'hives' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day45_ex_043",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [subside / forty-eight / swelling / should / the / within / hours]",
        correctAnswer: "The swelling should subside within forty-eight hours.",
        explanationEn: "Subject + Modal + Base verb + Prepositional time phrase.",
        explanationHi: "सही क्रम: The swelling should subside within forty-eight hours.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day45_ex_044",
        type: "error_correction",
        prompt: "Correct the sentence: 'Are you taking any supplementations?'",
        correctAnswer: "Are you taking any supplements?",
        explanationEn: "The noun is 'supplements' (NOT '*supplementations*').",
        explanationHi: "पोषक तत्वों के लिए 'supplements' शब्द का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "LEXICAL_ACCURACY"
      },
      {
        id: "day45_ex_045",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'क्या आपको पहले कभी अस्थमा या सांस की कोई बीमारी रही है?'",
        correctAnswer: "Do you have any prior history of asthma or respiratory illness?",
        acceptableAnswers: [
          "Have you ever had asthma or any respiratory disease in the past?",
          "Do you have a history of asthma or respiratory conditions?"
        ],
        explanationEn: "'Do you have any prior history of asthma or respiratory illness?'",
        explanationHi: "चिकित्सीय इतिहास की पूछताछ।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day45_ex_046",
        type: "multiple_choice",
        prompt: "Which preposition correctly fills: 'The rash flared up _______ eating shellfish.'?",
        options: ["after", "between", "under", "along"],
        correctAnswer: "after",
        explanationEn: "Temporal preposition: 'after eating shellfish'.",
        explanationHi: "समय दर्शाने के लिए 'after' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "PREPOSITIONS"
      },
      {
        id: "day45_ex_047",
        type: "speaking_pronunciation",
        prompt: "Read aloud with accurate four-syllable rhythm: 'Drink water to prevent severe dehydration from diarrhea.'",
        correctAnswer: "Drink water to prevent severe dehydration from diarrhea.",
        explanationEn: "Syllable stress: /ˌdiː.haɪˈdreɪ.ʃən/ and /ˌdaɪ.əˈriː.ə/.",
        explanationHi: "'Dehydration' और 'diarrhea' का सही उच्चारण करें।",
        difficulty: "hard",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day45_ex_048",
        type: "fill_blank",
        prompt: "The patient complained of a dull _______ in her lower back whenever she sat for long hours.",
        correctAnswer: "ache",
        explanationEn: "'Dull ache' is the natural collocation for low-intensity continuous pain.",
        explanationHi: "धीमे लगातार दर्द के लिए 'dull ache' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "COLLOCATIONS"
      },
      {
        id: "day45_ex_049",
        type: "sentence_transformation",
        prompt: "Rewrite using 'nauseous': 'I feel like throwing up right now.'",
        correctAnswer: "I feel very nauseous right now.",
        explanationEn: "'Nauseous' means affected with nausea or inclination to vomit.",
        explanationHi: "'I feel nauseous' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day45_ex_050",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nNurse: 'Please roll up your sleeve.'\nPatient: 'Certainly. Are you going to measure my blood _______?'",
        options: ["pressure", "turnstile", "receipt", "prerequisite"],
        correctAnswer: "pressure",
        explanationEn: "'Blood pressure' is measured using an arm cuff.",
        explanationHi: "रक्तचाप (Blood pressure) नापने की बात।",
        difficulty: "easy",
        skillTag: "CLINICAL_DISCOURSE"
      },
      {
        id: "day45_ex_051",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The physician scheduled a follow-up consultation in ten days.'",
        correctAnswer: "चिकित्सक ने दस दिनों में एक फॉलो-अप (पुनः परामर्श) बैठक तय की।",
        acceptableAnswers: [
          "डॉक्टर ने 10 दिन बाद दोबारा दिखाने का समय दिया।"
        ],
        explanationEn: "'Follow-up consultation' translates as फॉलो-अप / पुनः परामर्श.",
        explanationHi: "फॉलो-अप परामर्श का अनुवाद।",
        difficulty: "easy",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day45_ex_052",
        type: "multiple_choice",
        prompt: "What is an 'electrocardiogram' (ECG / EKG)?",
        options: [
          "A medical test that records the electrical signals of the heart",
          "A test for measuring eye vision",
          "A blood sugar test",
          "An X-ray of the teeth"
        ],
        correctAnswer: "A medical test that records the electrical signals of the heart",
        explanationEn: "An ECG records heart electrical activity.",
        explanationHi: "दिल की विद्युत गतिविधि की जांच को ईसीजी (ECG) कहते हैं।",
        difficulty: "easy",
        skillTag: "DIAGNOSTIC_TESTS"
      },
      {
        id: "day45_ex_053",
        type: "error_correction",
        prompt: "Correct the sentence: 'She had vomiting and loose motion whole night.'",
        correctAnswer: "She had vomiting and diarrhea all night.",
        acceptableAnswers: [
          "She experienced vomiting and diarrhea throughout the night."
        ],
        explanationEn: "Use 'diarrhea' and 'all night' or 'throughout the night'.",
        explanationHi: "'Diarrhea' और 'all night' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day45_ex_054",
        type: "active_recall",
        prompt: "What is the clinical term for high body temperature caused by infection?",
        correctAnswer: "Fever",
        acceptableAnswers: ["fever", "pyrexia"],
        explanationEn: "'Fever' or 'pyrexia' is elevated body temperature.",
        explanationHi: "बुखार को 'fever' या 'pyrexia' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day45_ex_055",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'यदि दर्द बना रहे तो तुरंत आपातकालीन कक्ष (ER) जाएं।'",
        correctAnswer: "If the pain persists, go to the emergency room immediately.",
        acceptableAnswers: [
          "If pain continues, visit the ER immediately.",
          "Should the pain persist, proceed to the emergency room immediately."
        ],
        explanationEn: "'If the pain persists, go to the emergency room immediately.'",
        explanationHi: "'If the pain persists, go to the emergency room immediately.' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day45_dial_001",
        title: "Controlled General Physician Consultation & Symptom History",
        context: "A patient (Kavita) describing persistent fever and headache to her physician (Dr. Mehta).",
        characters: ["Dr. Mehta", "Kavita"],
        lines: [
          { speaker: "Dr. Mehta", text: "Good morning, Kavita. What brings you into the clinic today?", hindi: "शुभ प्रभात, कविता। आज क्लिनिक में किस समस्या के लिए आना हुआ?" },
          { speaker: "Kavita", text: "Good morning, Doctor. I have had a high fever and a throbbing headache behind my eyes for the past three days.", hindi: "शुभ प्रभात, डॉक्टर। मुझे पिछले तीन दिनों से तेज बुखार और अपनी आँखों के पीछे धड़कता हुआ सिरदर्द हो रहा है।" },
          { speaker: "Dr. Mehta", text: "I see. Have you experienced any chills, body aches, or nausea?", hindi: "समझ गया। क्या आपको कोई कंपकंपी, बदन दर्द या मतली का अनुभव हुआ है?" },
          { speaker: "Kavita", text: "Yes, I had severe chills last night and my entire body aches. I also feel quite nauseous whenever I try to eat.", hindi: "हाँ, कल रात मुझे तेज कंपकंपी हुई और पूरे बदन में दर्द है। जब भी मैं खाने की कोशिश करती हूँ तो मुझे काफी मतली भी महसूस होती है।" },
          { speaker: "Dr. Mehta", text: "Let's check your temperature and blood pressure. I am also ordering a complete blood count test to rule out viral infections like dengue.", hindi: "आइए आपका तापमान और रक्तचाप जांचें। मैं डेंगू जैसे वायरल संक्रमणों की संभावना को खारिज करने के लिए सीबीसी (कंप्लीट ब्लड काउंट) टेस्ट भी लिख रहा हूँ।" },
          { speaker: "Kavita", text: "Thank you, Doctor. Should I continue taking paracetamol in the meantime?", hindi: "धन्यवाद, डॉक्टर। क्या मुझे इस बीच पैरासिटामोल लेना जारी रखना चाहिए?" }
        ]
      },
      {
        id: "day45_dial_002",
        title: "Guided Emergency Triage: Acute Chest Tightness & Radiating Pain",
        context: "An emergency triage nurse assessing a patient experiencing acute chest discomfort.",
        characters: ["Triage Nurse", "Patient"],
        lines: [
          { speaker: "Triage Nurse", text: "Please sit down right here. Describe the exact sensation in your chest.", hindi: "कृपया ठीक यहीं बैठ जाइए। अपनी छाती में होने वाली सटीक अनुभूति का वर्णन कीजिए।" },
          { speaker: "Patient", text: "I feel an intense pressure and tightness in the center of my chest, like a heavy weight pressing down.", hindi: "मैं अपनी छाती के केंद्र में अत्यधिक दबाव और जकड़न महसूस कर रहा हूँ, जैसे कोई भारी वजन नीचे दबा रहा हो।" },
          { speaker: "Triage Nurse", text: "Does the pain radiate anywhere, such as into your jaw, neck, or down your left arm?", hindi: "क्या दर्द कहीं और फैलता है, जैसे आपके जबड़े, गर्दन या आपके बाएं हाथ में?" },
          { speaker: "Patient", text: "Yes, I have numbness and a dull ache extending into my left shoulder and arm. I am also short of breath.", hindi: "हाँ, मेरे बाएं कंधे और हाथ में सुन्नपन और धीमा दर्द फैल रहा है। मेरी सांस भी फूल रही है।" },
          { speaker: "Triage Nurse", text: "We are initiating an immediate ECG and administering oxygen right away. Please remain as calm as possible.", hindi: "हम तुरंत एक ईसीजी शुरू कर रहे हैं और तत्काल ऑक्सीजन दे रहे हैं। कृपया यथासंभव शांत रहें।" }
        ]
      },
      {
        id: "day45_dial_003",
        title: "Free Problem-Resolution: Drug Allergy Disclosure & Medication Adjustment",
        context: "A patient notifying the doctor about an adverse allergic reaction to a prescribed antibiotic.",
        characters: ["Patient", "Doctor"],
        lines: [
          { speaker: "Patient", text: "Hello Doctor, I started taking the antibiotic you prescribed yesterday, but I developed an itchy skin rash and hives on my arms.", hindi: "नमस्ते डॉक्टर, मैंने आपके द्वारा कल लिखी गई एंटीबायोटिक लेना शुरू किया था, लेकिन मेरी बाहों पर खुजली वाले दाने और लाल चकत्ते (हाइव्स) हो गए हैं।" },
          { speaker: "Doctor", text: "Stop taking that medication immediately. Are you experiencing any swelling around your lips, tongue, or difficulty breathing?", hindi: "उस दवा को तुरंत लेना बंद कर दें। क्या आप अपने होठों, जीभ के आसपास कोई सूजन या सांस लेने में कठिनाई महसूस कर रहे हैं?" },
          { speaker: "Patient", text: "No, there is no facial swelling or breathing trouble, just intense itching and red blotches.", hindi: "नहीं, चेहरे पर कोई सूजन या सांस लेने में परेशानी नहीं है, केवल तेज खुजली और लाल चकत्ते हैं।" },
          { speaker: "Doctor", text: "This indicates an allergic reaction to that specific penicillin derivative. I am prescribing an antihistamine for the rash and switching you to a safer, non-penicillin antibiotic.", hindi: "यह उस विशिष्ट पेनिसिलिन व्युत्पन्न से एलर्जी की प्रतिक्रिया को दर्शाता है। मैं दाने के लिए एक एंटीहिस्टामाइन लिख रहा हूँ और आपको एक सुरक्षित गैर-पेनिसिलिन एंटीबायोटिक पर स्थानांतरित कर रहा हूँ।" },
          { speaker: "Patient", text: "Thank you Doctor. I will note down penicillin as a severe allergy for all future medical visits.", hindi: "धन्यवाद डॉक्टर। मैं भविष्य की सभी चिकित्सीय मुलाकातों के लिए पेनिसिलिन को एक गंभीर एलर्जी के रूप में नोट कर लूँगा।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are visiting a doctor's clinic to report a cluster of physiological symptoms you have experienced over the past three days.",
      prompts: [
        "State your primary symptom (e.g., throbbing headache, acute abdominal pain, persistent dry cough) and its onset.",
        "Describe the intensity, frequency, and triggers of the pain using precise medical adjectives.",
        "Mention any associated systemic symptoms (e.g., nausea, dizziness, chills, fatigue).",
        "Disclose any known drug allergies or current prescription medications."
      ],
      targetExpressions: [
        "I have been experiencing a...",
        "The pain intensifies whenever I...",
        "It is accompanied by dizziness and...",
        "I am severely allergic to..."
      ]
    },
    roleplay: {
      scenario: "Doctor-patient consultation regarding an acute gastrointestinal infection.",
      roleA: "Patient: Describing stomach cramps, nausea, diarrhea, dehydration, and duration of illness.",
      roleB: "Doctor: Asking about fever, dietary triggers, prescribing ORS and antibiotics, and giving advice.",
      sampleDialogue: "Doctor: 'How many episodes of diarrhea have you had today?' | Patient: 'At least four times since morning, accompanied by stomach cramps.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day45_bm_001",
        title: "Medical Symptom Reporting Benchmark",
        prompt: "Describe your symptoms to a physician in 4–5 coherent sentences using accurate descriptive adjectives (e.g., throbbing, sharp, radiating, persistent) and zero Indian English literalisms.",
        sampleAnswerEn: "Good morning, Doctor. For the past three days, I have been experiencing a persistent throbbing headache localized behind my left eye. The pain intensifies when exposed to bright lights and is accompanied by mild nausea and dizziness whenever I stand up. I have also felt feverish with occasional chills throughout the night. I am not taking any prescription medication currently and have no known drug allergies.",
        sampleAnswerHi: "शुभ प्रभात, डॉक्टर। पिछले तीन दिनों से मैं अपनी बाईं आंख के पीछे एक लगातार धड़कते हुए सिरदर्द का अनुभव कर रहा हूँ। तेज रोशनी के संपर्क में आने पर दर्द बढ़ जाता है और जब भी मैं खड़ा होता हूँ तो हल्की मतली और चक्कर आते हैं। मुझे रात भर रुक-रुक कर कंपकंपी के साथ हरारत भी महसूस हुई है। मैं वर्तमान में कोई प्रिस्क्रिप्शन दवा नहीं ले रहा हूँ और मुझे कोई ज्ञात दवा एलर्जी नहीं है।",
        evaluationCriteria: "Clinical precision, accurate pain terminology ('throbbing', 'feverish with chills', 'localized behind left eye'), and complete elimination of '*head is paining*'."
      },
      {
        id: "day45_bm_002",
        title: "Emergency Triage & Cardiac Symptom Benchmark",
        prompt: "Communicate acute chest pain and associated symptoms to an emergency triage nurse calmly and precisely.",
        sampleAnswerEn: "Nurse, I need immediate assistance. I am feeling an acute crushing tightness in the center of my chest that began approximately twenty minutes ago. The pain radiates down my left arm and into my neck. I am experiencing significant shortness of breath and cold sweats. I have a family history of heart disease and am currently taking blood pressure medication.",
        sampleAnswerHi: "नर्स, मुझे तत्काल सहायता की आवश्यकता है। मैं अपनी छाती के केंद्र में एक तीव्र जकड़न महसूस कर रहा हूँ जो लगभग बीस मिनट पहले शुरू हुई थी। दर्द मेरे बाएं हाथ और मेरी गर्दन तक फैलता है। मुझे सांस लेने में काफी तकलीफ और ठंडा पसीना आ रहा है। मेरे परिवार में हृदय रोग का इतिहास है और मैं वर्तमान में रक्तचाप की दवा ले रहा हूँ।",
        evaluationCriteria: "Accurate cardiac terminology ('crushing tightness', 'radiates down left arm', 'shortness of breath', 'cold sweats'), urgency of tone, and grammatical accuracy."
      },
      {
        id: "day45_bm_003",
        title: "Adverse Drug Reaction & Allergy Consultation Benchmark",
        prompt: "Report an adverse reaction to a prescribed medication to your doctor, detailing the reaction type and requesting an alternative prescription.",
        sampleAnswerEn: "Hello Doctor, I am calling to report an adverse reaction to the antibiotic capsules prescribed yesterday. Within two hours of taking the first dose, I developed itchy red hives across my torso and felt mildly lightheaded. Fortunately, I have no facial swelling or breathing distress. I have paused the medication and would appreciate an alternative non-penicillin prescription to treat the underlying bacterial infection.",
        sampleAnswerHi: "नमस्ते डॉक्टर, मैं कल लिखी गई एंटीबायोटिक कैप्सूल के प्रतिकूल प्रभाव की रिपोर्ट करने के लिए कॉल कर रहा हूँ। पहली खुराक लेने के दो घंटे के भीतर, मेरे पूरे धड़ पर खुजली वाले लाल दाने हो गए और मुझे हल्का चक्कर महसूस हुआ। सौभाग्य से, चेहरे पर कोई सूजन या सांस लेने में तकलीफ नहीं है। मैंने दवा रोक दी है और अंतर्निहित जीवाणु संक्रमण के इलाज के लिए एक वैकल्पिक गैर-पेनिसिलिन नुस्खे की सराहना करूँगा।",
        evaluationCriteria: "Precise clinical discourse ('adverse reaction', 'itchy red hives across torso', 'paused the medication', 'non-penicillin prescription'), professional assertiveness."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "Why is '*My head is paining*' incorrect in standard English?", a: "Say 'I have a headache' or 'My head aches / throbs'." },
      { q: "What should you say instead of '*I am having loose motions*'?", a: "Say 'I have diarrhea' or 'I have an upset stomach'." },
      { q: "What is the difference between 'acute' and 'chronic' pain?", a: "'Acute' pain is sudden and sharp; 'chronic' pain is long-lasting and persistent over months." },
      { q: "How do you pronounce 'Pneumonia'?", a: "Pronounce it /njuːˈməʊ.ni.ə/ with a completely silent 'p'." },
      { q: "What does 'radiating pain' mean?", a: "Pain that starts in one area and spreads outward to another body part (e.g., from chest into the left arm)." }
    ],
    spacedTips: [
      "Practice articulating common health complaints in English using 'I have a sore throat', 'I feel feverish', 'My back aches'.",
      "Memorize your medical history in English: blood group, allergies (e.g., penicillin, pollen), and past surgeries.",
      "Always remember the standard terms: 'diarrhea', 'nausea', 'fatigue', 'shortness of breath'."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day45.js'), `export const day45 = ${JSON.stringify(day45, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Upgraded Day 45 (55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks)");
