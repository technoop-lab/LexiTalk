import fs from 'fs';
import path from 'path';

// DAY 45: Medical Symptoms & Doctor Consultations
const day45 = {
  dayNumber: 45,
  id: "day_45",
  titleEn: "Medical Symptoms & Doctor Consultations",
  titleHi: "चिकित्सीय लक्षण एवं चिकित्सक परामर्श",
  cefr: "A2.2",
  estMinutes: 40,
  prerequisites: "Day 44 (Campus Life & Academic Communication)",
  objectivesEn: [
    "Describe somatic symptoms, pain characteristics (throbbing, sharp, dull, radiating), and physical discomfort accurately.",
    "Formulate timeline statements regarding onset, duration, and severity of illnesses using present perfect continuous structures.",
    "Participate in medical consultations with doctors, nurses, and triage practitioners effectively.",
    "Understand and follow clinical instructions, dosage regimens, and lifestyle recommendations.",
    "Eliminate common subcontinental medical traps such as '*loose motions*', '*vomiting is coming*', and '*head reeling*'."
  ],
  objectivesHi: [
    "शारीरिक लक्षणों, दर्द के प्रकारों (Throbbing, Sharp, Dull ache) और तकलीफ का सटीक विवरण देना।",
    "बीमारी की शुरुआत, अवधि और तीव्रता को Present Perfect Continuous टेंस के माध्यम से सही ढंग से व्यक्त करना।",
    "डॉक्टरों, नर्सों और स्वास्थ्य कर्मचारियों के साथ क्लिनिकल परामर्श में प्रभावी ढंग से भाग लेना।",
    "दवाइयों की खुराक (Dosage), सावधानियों और डॉक्टर के निर्देशों को समझना व उनका पालन करना।",
    "भारतीय चिकित्सीय गलतियों ('loose motions', 'vomiting is coming', 'head reeling') को मानक अंग्रेजी में बदलना।"
  ],
  teach: {
    hindiExplanation: "दिन 45 में हम शारीरिक लक्षणों, दर्द के प्रकारों और डॉक्टर के साथ बातचीत (Doctor Consultations) पर महारत हासिल करेंगे।\n\n1. दर्द के प्रकार (Types of Pain): 'Throbbing headache' (टीस मारने वाला तेज सिरदर्द), 'Dull ache' (हल्का-हल्का लगातार होने वाला दर्द), 'Sharp / Stabbing pain' (तीव्र/अचानक चुभने वाला दर्द), 'Cramps' (पेट में मरोड़ या ऐंठन)।\n2. अन्य सामान्य लक्षण (Common Symptoms): 'Nausea / Feeling nauseous' (जी मिचलाना - '*vomiting coming*' न कहें), 'Dizziness / Lightheaded' (चक्कर आना), 'Congestion / Stuffy nose' (नाक बंद होना), 'Fatigue / Exhaustion' (अत्यधिक थकान), 'Diarrhea / Upset stomach' (दस्त - भारत में इस्तेमाल होने वाले '*loose motions*' की जगह 'diarrhea' या 'an upset stomach' कहें)।\n3. लक्षण की अवधि बताना: 'I have been experiencing this cough for four days' (मुझे चार दिनों से यह खांसी आ रही है - Present Perfect Continuous)।\n4. डॉक्टर की सलाह समझना: 'Take one tablet twice daily after meals' (भोजन के बाद दिन में दो बार एक गोली लें), 'Stay hydrated and get plenty of rest' (पर्याप्त पानी पिएं और आराम करें)।",
    englishExplanation: "Welcome to Day 45! Today's lesson equips learners with the clinical, somatic, and consultative language required to articulate health symptoms and engage in doctor-patient interactions.\n\nCore clinical competencies:\n1. Nuanced Pain Descriptors: Moving beyond generic 'pain' to qualitative descriptors ('throbbing', 'sharp', 'dull', 'chronic', 'acute', 'intermittent').\n2. Temporal Duration & Onset: Deploying Present Perfect Continuous structures ('I have been feeling dizzy since yesterday morning') to state clinical history accurately.\n3. Doctor Consultation Protocols: Responding to triage questions ('Where does it hurt?', 'Rate the pain from 1 to 10', 'Any known drug allergies?').\n4. Eliminating Subcontinental Medical False Friends: Replacing colloquialisms ('loose motions', 'vomiting coming', 'head reeling') with standard international clinical terminology ('diarrhea / upset stomach', 'feeling nauseous', 'feeling dizzy').",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Present Perfect Continuous for Symptom Duration",
        description: "Express ongoing symptoms using 'have/has been + verb-ing' with 'for' or 'since': 'I have been suffering from a sore throat for three days.' (NOT '*I am having sore throat since three days.*').",
        register: "Clinical History Syntax"
      },
      {
        ruleNumber: 2,
        title: "Qualitative Adjective Placement for Pain",
        description: "Place sensory adjectives before the pain noun: 'a sharp shooting pain in my shoulder', 'a dull persistent ache in my lower back'.",
        register: "Somatic Collocations"
      },
      {
        ruleNumber: 3,
        title: "Copular Verbs with Somatic States",
        description: "Verbs like 'feel', 'seem', and 'look' take adjectives directly: 'I feel dizzy / nauseous / feverish' (NOT '*I feel nausea / fever*').",
        register: "Copular Syntax"
      },
      {
        ruleNumber: 4,
        title: "Dosage Frequency Adverbials",
        description: "Specify medication schedules using standard multiplicative formulas: 'once a day', 'twice daily', 'every eight hours', 'after meals'.",
        register: "Prescription Regimens"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Symptom Onset & Duration",
        formula: "I have been experiencing + [Symptom / Pain Descriptor] + since / for + [Timeframe].",
        exampleEn: "I have been experiencing a throbbing headache for the past two days.",
        meaningHi: "मुझे पिछले दो दिनों से टीस मारने वाला तेज सिरदर्द हो रहा है।"
      },
      {
        subjectGroup: "Physical Sensation / Malaise",
        formula: "I feel + [Adjective: nauseous / feverish / lightheaded] + whenever I + [Action].",
        exampleEn: "I feel lightheaded whenever I stand up abruptly.",
        meaningHi: "जब भी मैं अचानक खड़ा होता हूँ तो मुझे चक्कर आने जैसा महसूस होता है।"
      },
      {
        subjectGroup: "Pain Location Inquiry",
        formula: "Where does it hurt, and how would you describe the pain?",
        exampleEn: "Where does it hurt, and is the pain sharp or dull?",
        meaningHi: "दर्द कहाँ हो रहा है, और क्या दर्द तीखा है या हल्का?"
      },
      {
        subjectGroup: "Clinical Prescription Instruction",
        formula: "Take + [Dosage] + [Frequency] + [Condition: before / after meals].",
        exampleEn: "Take one capsule twice daily after meals for five days.",
        meaningHi: "पांच दिनों तक भोजन के बाद दिन में दो बार एक कैप्सूल लें।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Loose Motions', 'Vomiting Coming', and Stative 'Having Pain' Traps",
      hindiPattern: "1. '*Doctor, I am having loose motions since yesterday.*' (literal translation of 'मुझे दस्त/लूज़ मोशन हो रहे हैं')\n2. '*I feel vomiting is coming.*' (direct translation of 'उल्टी आ रही है')\n3. '*My head is reeling.*' / '*I am having fever from two days.*'",
      potentialInterference: "Literal translations from Indian languages sound unidiomatic or confusing in healthcare systems worldwide.",
      explanation: "Standard English uses 'diarrhea' or 'an upset stomach' (never '*loose motions*'). For nausea, say 'I feel nauseous' or 'I feel like vomiting/throwing up'. For continuous ailments, use 'I have had a fever for two days' and 'I feel dizzy'.",
      naturalSolution: "1. 'Doctor, I have had diarrhea / an upset stomach since yesterday.' | 2. 'I feel nauseous.' | 3. 'I feel dizzy' / 'I have had a fever for two days.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day45_vocab_001", word: "Symptom", pos: "Noun", ipa: "/ˈsɪmp.təm/", meaningHi: "लक्षण (बीमारी का संकेत)", exampleEn: "A high fever is a primary symptom of viral infection.", exampleHi: "तेज बुखार वायरल संक्रमण का एक प्राथमिक लक्षण है।" },
      { id: "day45_vocab_002", word: "Nauseous", pos: "Adjective", ipa: "/ˈnɔː.zi.əs/", meaningHi: "जी मिचलाने वाला / उल्टी जैसा महसूस होना", exampleEn: "Travelling by boat always makes her feel nauseous.", exampleHi: "नाव से यात्रा करने पर हमेशा उसका जी मिचलाने लगता है।" },
      { id: "day45_vocab_003", word: "Throbbing", pos: "Adjective", ipa: "/ˈθrɒb.ɪŋ/", meaningHi: "धड़कने या टीस मारने वाला (तेज दर्द)", exampleEn: "I woke up with a throbbing pain in my left temple.", exampleHi: "मेरी बाईं कनपटी में तेज टीस मारने वाले दर्द के साथ नींद खुली।" },
      { id: "day45_vocab_004", word: "Dizziness", pos: "Noun", ipa: "/ˈdɪz.i.nəs/", meaningHi: "चक्कर आना", exampleEn: "Dehydration can cause extreme dizziness and fatigue.", exampleHi: "निर्जलीकरण (पानी की कमी) से अत्यधिक चक्कर और थकान हो सकती है।" },
      { id: "day45_vocab_005", word: "Congested", pos: "Adjective", ipa: "/kənˈdʒes.tɪd/", meaningHi: "कफ से भरा / नाक या छाती में जमाव", exampleEn: "My nasal passages are completely congested due to a cold.", exampleHi: "सर्दी के कारण मेरी नाक के रास्ते पूरी तरह बंद (कंजेस्टेड) हैं।" },
      { id: "day45_vocab_006", word: "Fatigue", pos: "Noun", ipa: "/fəˈtiːɡ/", meaningHi: "अत्यधिक शारीरिक या मानसिक थकान", exampleEn: "Chronic fatigue is a common aftermath of viral fever.", exampleHi: "वायरल बुखार के बाद अत्यधिक थकान रहना एक सामान्य बात है।" },
      { id: "day45_vocab_007", word: "Prescription", pos: "Noun", ipa: "/prɪˈskrɪp.ʃən/", meaningHi: "दवा का पर्चा / चिकित्सक का नुस्खा", exampleEn: "The doctor wrote a prescription for antibiotics.", exampleHi: "डॉक्टर ने एंटीबायोटिक दवाओं का एक पर्चा लिखा।" },
      { id: "day45_vocab_008", word: "Diarrhea", pos: "Noun", ipa: "/ˌdaɪ.əˈriː.ə/", meaningHi: "दस्त / पेट खराब होना", exampleEn: "Contaminated water is the main cause of acute diarrhea.", exampleHi: "दूषित पानी तीव्र दस्त का मुख्य कारण है।" },
      { id: "day45_vocab_009", word: "Consultation", pos: "Noun", ipa: "/ˌkɒn.səlˈteɪ.ʃən/", meaningHi: "चिकित्सीय परामर्श", exampleEn: "The initial medical consultation lasted twenty minutes.", exampleHi: "प्रारंभिक चिकित्सीय परामर्श बीस मिनट तक चला।" },
      { id: "day45_vocab_010", word: "Dosage", pos: "Noun", ipa: "/ˈdəʊ.sɪdʒ/", meaningHi: "दवा की मात्रा / खुराक", exampleEn: "Do not exceed the recommended daily dosage.", exampleHi: "निर्धारित दैनिक खुराक से अधिक मात्रा न लें।" }
    ],
    spokenPhrases: [
      { id: "day45_phrase_001", phrase: "Under the weather", meaningHi: "तबीयत थोड़ी नासाज़ या खराब होना", context: "Informal health description" },
      { id: "day45_phrase_002", phrase: "Comes and goes (intermittent)", meaningHi: "दर्द का रुक-रुक कर आना", context: "Describing pain frequency" },
      { id: "day45_phrase_003", phrase: "Take your temperature", meaningHi: "बुखार (तापमान) नापना", context: "Clinical checkup" },
      { id: "day45_phrase_004", phrase: "Are you allergic to any medication?", meaningHi: "क्या आपको किसी दवा से एलर्जी है?", context: "Doctor's safety check" },
      { id: "day45_phrase_005", phrase: "Over-the-counter", meaningHi: "बिना डॉक्टर के पर्चे मिलने वाली दवा", context: "Pharmacy purchase" },
      { id: "day45_phrase_006", phrase: "Get plenty of fluids", meaningHi: "खूब पानी और तरल पदार्थ पिएं", context: "Medical advice" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day45_exmp_001", english: "I have been feeling feverish and exhausted since yesterday evening.", hindi: "मुझे कल शाम से बुखार और अत्यधिक थकान महसूस हो रही है।" },
      { id: "day45_exmp_002", english: "The doctor asked if I had any pre-existing medical conditions.", hindi: "डॉक्टर ने पूछा कि क्या मुझे पहले से कोई स्वास्थ्य समस्या है।" },
      { id: "day45_exmp_003", english: "I have a dull ache in my lower back whenever I sit for long hours.", hindi: "जब भी मैं लंबे समय तक बैठता हूँ तो मेरी पीठ के निचले हिस्से में हल्का दर्द होता है।" },
      { id: "day45_exmp_004", english: "Please take one tablet twice daily after meals for five consecutive days.", hindi: "कृपया लगातार पांच दिनों तक भोजन के बाद दिन में दो बार एक गोली लें।" },
      { id: "day45_exmp_005", english: "She felt extremely nauseous after eating the spoiled seafood.", hindi: "खराब समुद्री भोजन खाने के बाद उसका जी बहुत मिचलाने लगा।" },
      { id: "day45_exmp_006", english: "My chest feels congested, and I have a persistent dry cough.", hindi: "मेरी छाती में जकड़न महसूस हो रही है, और मुझे लगातार सूखी खांसी आ रही है।" },
      { id: "day45_exmp_007", english: "Are you allergic to penicillin or any other antibiotic medications?", hindi: "क्या आपको पेनिसिलिन या किसी अन्य एंटीबायोटिक दवा से एलर्जी है?" },
      { id: "day45_exmp_008", english: "The physician examined my throat and prescribed anti-inflammatory lozenges.", hindi: "चिकित्सक ने मेरे गले की जांच की और सूजन-रोधी गोलियां (लोजेंज) लिखीं।" },
      { id: "day45_exmp_009", english: "I have been experiencing acute stomach cramps and diarrhea.", hindi: "मुझे पेट में तीव्र मरोड़ और दस्त की समस्या हो रही है।" },
      { id: "day45_exmp_010", english: "Make sure you finish the entire course of antibiotics even if you feel better.", hindi: "सुनिश्चित करें कि आप बेहतर महसूस करने पर भी एंटीबायोटिक दवाओं का पूरा कोर्स पूरा करें।" },
      { id: "day45_exmp_011", english: "I feel a bit under the weather today, so I took sick leave from work.", hindi: "आज मेरी तबीयत थोड़ी नासाज़ लग रही है, इसलिए मैंने काम से बीमारी की छुट्टी ले ली।" },
      { id: "day45_exmp_012", english: "The nurse checked my blood pressure and recorded my pulse rate.", hindi: "नर्स ने मेरे रक्तचाप की जांच की और मेरी नाड़ी की गति दर्ज की।" }
    ]
  },
  pronunciation: {
    focusSound: "Medical Vocabulary Phonetics: 'Prescription' (/prɪˈskrɪp.ʃən/), 'Nauseous' (/ˈnɔː.zi.əs/ or /ˈnɔː.ʃəs/), 'Diarrhea' (/ˌdaɪ.əˈriː.ə/)",
    phoneticNotes: "In 'nauseous', the 's' can be voiced /z/ or an unvoiced sh-sound /ʃ/. In 'diarrhea', the primary stress falls on the third syllable 'rhee' (/riː/).",
    minimalPairs: [
      { wordA: "Cough", ipaA: "/kɒf/", wordB: "Coffin", ipaB: "/ˈkɒf.ɪn/" },
      { wordA: "Ache", ipaA: "/eɪk/", wordB: "Bake", ipaB: "/beɪk/" },
      { wordA: "Pill", ipaA: "/pɪl/", wordB: "Peel", ipaB: "/piːl/" },
      { wordA: "Fever", ipaA: "/ˈfiː.vər/", wordB: "Favor", ipaB: "/ˈfeɪ.vər/" }
    ],
    drills: [
      { sentence: "The physician wrote a prescription for the painful infection.", focus: "Sh-sound in prescription and physician" },
      { sentence: "She felt nauseous and experienced dizziness after dinner.", focus: "Voiced fricatives in nauseous and dizziness" },
      { sentence: "Take two pills for the throbbing headache.", focus: "Short /ɪ/ in pill vs long /iː/" },
      { sentence: "The doctor diagnosed the acute respiratory symptom.", focus: "Stress and consonant clusters" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day45_ex_001",
        type: "multiple_choice",
        question: "What is the standard English term for having an upset stomach with loose watery bowel movements?",
        options: ["Loose motions", "Diarrhea", "Stomach rolling", "Water motion"],
        correctAnswer: "Diarrhea",
        explanation: "'Diarrhea' (or 'upset stomach') is the standard clinical term. '*Loose motions*' is an Indianism."
      },
      {
        id: "day45_ex_002",
        type: "fill_in_the_blank",
        question: "I have been ______ a throbbing headache since this morning.",
        correctAnswer: "experiencing",
        explanation: "Collocation: 'experiencing / suffering from a headache'."
      },
      {
        id: "day45_ex_003",
        type: "error_correction",
        sentence: "I am having fever since three days.",
        correctAnswer: "I have had a fever for three days.",
        explanation: "Use Present Perfect ('have had') with duration preposition 'for'."
      },
      {
        id: "day45_ex_004",
        type: "translation_hi_en",
        hindiSentence: "मुझे चक्कर आ रहे हैं और बहुत कमजोरी महसूस हो रही है।",
        englishSentence: "I am feeling dizzy and extremely weak.",
        targetVocabulary: ["dizzy", "feeling", "weak"]
      },
      {
        id: "day45_ex_005",
        type: "matching",
        prompt: "Match the types of pain with their descriptions:",
        pairs: [
          { left: "Throbbing pain", right: "Pounding or pulsating rhythmic pain" },
          { left: "Dull ache", right: "Continuous mild to moderate discomfort" },
          { left: "Sharp pain", right: "Sudden, intense, cutting sensation" },
          { left: "Cramps", right: "Painful involuntary muscle contractions" }
        ]
      },
      {
        id: "day45_ex_006",
        type: "sentence_ordering",
        scrambledWords: ["tablet", "Take", "daily", "one", "twice", "meals", "after"],
        correctSentence: "Take one tablet twice daily after meals.",
        explanation: "Imperative verb ('Take') + Object ('one tablet') + Frequency ('twice daily') + Time ('after meals')."
      },
      {
        id: "day45_ex_007",
        type: "multiple_choice",
        question: "How do you correctly say you feel like throwing up?",
        options: ["Vomiting is coming to me", "I feel nauseous", "My vomit is ready", "I am in vomiting state"],
        correctAnswer: "I feel nauseous",
        explanation: "'I feel nauseous' (or 'I feel like throwing up') is standard English."
      },
      {
        id: "day45_ex_008",
        type: "sentence_building",
        prompt: "Ask the patient if they have any known drug allergies.",
        targetWords: ["Are", "you", "allergic", "to", "any", "medications", "?"],
        correctSentence: "Are you allergic to any medications?"
      },
      {
        id: "day45_ex_009",
        type: "translation_en_hi",
        englishSentence: "Drink plenty of warm water and get adequate bed rest.",
        hindiSentence: "खूब गर्म पानी पिएं और पर्याप्त रूप से बिस्तर पर आराम करें।"
      },
      {
        id: "day45_ex_010",
        type: "listening_comprehension",
        audioText: "The doctor prescribed a five-day course of antibiotics to be taken every eight hours.",
        question: "How often should the antibiotic be taken?",
        options: ["Once a day", "Every eight hours", "Before sleeping only", "Every twelve hours"],
        correctAnswer: "Every eight hours",
        explanation: "The audio explicitly states 'every eight hours'."
      },
      {
        id: "day45_ex_011",
        type: "dictation",
        spokenText: "The physician checked my pulse and blood pressure.",
        correctText: "The physician checked my pulse and blood pressure."
      },
      {
        id: "day45_ex_012",
        type: "dialogue_completion",
        dialogueContext: "Doctor: 'How long have you had this cough?' | Patient: 'It started on Monday, so for about ______ days.'",
        options: ["three", "twenty", "hundred", "zero"],
        correctAnswer: "three",
        explanation: "Logical context completion based on days."
      },
      {
        id: "day45_ex_013",
        type: "speaking_pronunciation",
        targetText: "The doctor wrote a prescription for the acute infection.",
        phoneticFocus: "Pronunciation of 'prescription' /prɪˈskrɪp.ʃən/ and 'acute' /əˈkjuːt/"
      },
      {
        id: "day45_ex_014",
        type: "active_recall",
        prompt: "What does the idiom 'under the weather' mean?",
        correctAnswer: "Feeling slightly unwell, sick, or tired.",
        explanation: "'Under the weather' is an informal English idiom for minor sickness."
      },
      {
        id: "day45_ex_015",
        type: "applied_scenario",
        scenario: "You are at a clinic. You have had a fever and a blocked nose for two days. Explain this clearly to the doctor.",
        correctAnswer: "Doctor, I have had a fever and a congested nose for the past two days.",
        explanation: "Clear, concise, and clinically accurate description."
      },
      {
        id: "day45_ex_016",
        type: "multiple_choice",
        question: "Which of the following describes extreme physical exhaustion?",
        options: ["Fatigue", "Fitness", "Agility", "Appetite"],
        correctAnswer: "Fatigue",
        explanation: "'Fatigue' refers to overwhelming physical or mental tiredness."
      },
      {
        id: "day45_ex_017",
        type: "fill_in_the_blank",
        question: "My nasal passages feel completely ______ because of a severe head cold.",
        correctAnswer: "congested",
        explanation: "'Congested' means blocked with mucus."
      },
      {
        id: "day45_ex_018",
        type: "error_correction",
        sentence: "Doctor, vomiting is coming since two hours.",
        correctAnswer: "Doctor, I have been feeling nauseous for two hours.",
        explanation: "Replace '*vomiting is coming*' with 'I feel nauseous' and use 'for' with duration."
      },
      {
        id: "day45_ex_019",
        type: "translation_hi_en",
        hindiSentence: "क्या आपको इस दवा के कोई दुष्प्रभाव (Side effects) महसूस हुए?",
        englishSentence: "Did you experience any side effects from this medication?",
        targetVocabulary: ["experience", "side effects", "medication"]
      },
      {
        id: "day45_ex_020",
        type: "matching",
        prompt: "Match the medical instructions with their practical actions:",
        pairs: [
          { left: "Stay hydrated", right: "Drink plenty of water and fluids" },
          { left: "Complete the course", right: "Finish all prescribed pills" },
          { left: "Fast before the test", right: "Do not eat food for 8-12 hours" },
          { left: "Apply topically", right: "Rub cream onto the skin surface" }
        ]
      },
      {
        id: "day45_ex_021",
        type: "multiple_choice",
        question: "What should you say if pain occurs intermittently (stops and restarts)?",
        options: ["The pain is permanent", "The pain comes and goes", "The pain is died", "The pain is constant forever"],
        correctAnswer: "The pain comes and goes",
        explanation: "'Comes and goes' means intermittent."
      },
      {
        id: "day45_ex_022",
        type: "sentence_ordering",
        scrambledWords: ["been", "I", "feverish", "have", "morning", "feeling", "since"],
        correctSentence: "I have been feeling feverish since morning.",
        explanation: "Present perfect continuous structure for duration."
      },
      {
        id: "day45_ex_023",
        type: "fill_in_the_blank",
        question: "Do not exceed the maximum daily ______ indicated on the medicine label.",
        correctAnswer: "dosage",
        explanation: "'Dosage' specifies the proper quantity of medicine."
      },
      {
        id: "day45_ex_024",
        type: "sentence_building",
        prompt: "State that the patient has a sore throat and a high temperature.",
        targetWords: ["The", "patient", "has", "a", "sore", "throat", "and", "a", "high", "temperature", "."],
        correctSentence: "The patient has a sore throat and a high temperature."
      },
      {
        id: "day45_ex_025",
        type: "translation_en_hi",
        englishSentence: "The physician advised her to rest and avoid strenuous physical exercise.",
        hindiSentence: "चिकित्सक ने उन्हें आराम करने और भारी शारीरिक व्यायाम से बचने की सलाह दी।"
      },
      {
        id: "day45_ex_026",
        type: "multiple_choice",
        question: "Which of the following refers to a medical document authorizing medicine?",
        options: ["Prescription", "Invoice", "Warranty", "Affidavit"],
        correctAnswer: "Prescription",
        explanation: "A 'prescription' is an official medical order for pharmaceuticals."
      },
      {
        id: "day45_ex_027",
        type: "error_correction",
        sentence: "My head is reeling because of weakness.",
        correctAnswer: "I feel dizzy because of weakness.",
        explanation: "Use standard 'I feel dizzy' rather than the archaic Indianism '*head is reeling*'."
      },
      {
        id: "day45_ex_028",
        type: "listening_comprehension",
        audioText: "Please take this anti-allergy syrup once before bedtime as it may cause drowsiness.",
        question: "When should the syrup be taken and why?",
        options: ["In the morning with breakfast", "Before bedtime because it causes drowsiness", "After lunch to stay awake", "Every two hours with juice"],
        correctAnswer: "Before bedtime because it causes drowsiness",
        explanation: "The audio specifies 'before bedtime as it may cause drowsiness'."
      },
      {
        id: "day45_ex_029",
        type: "dictation",
        spokenText: "I have been experiencing acute fatigue and joint pain.",
        correctText: "I have been experiencing acute fatigue and joint pain."
      },
      {
        id: "day45_ex_030",
        type: "applied_scenario",
        scenario: "The doctor asks you: 'Are you taking any other medications currently?' How do you answer if you take daily blood pressure pills?",
        correctAnswer: "Yes Doctor, I take a daily medication for high blood pressure.",
        explanation: "Accurate, factual, and medically helpful response."
      },
      {
        id: "day45_ex_031",
        type: "multiple_choice",
        question: "Which word means a sudden and severe condition?",
        options: ["Chronic", "Acute", "Mild", "Permanent"],
        correctAnswer: "Acute",
        explanation: "'Acute' describes conditions that are sudden and intense. 'Chronic' means long-lasting."
      },
      {
        id: "day45_ex_032",
        type: "fill_in_the_blank",
        question: "She had a severe case of food poisoning and suffered from acute ______.",
        correctAnswer: "diarrhea",
        explanation: "Correct spelling and clinical term: 'diarrhea'."
      },
      {
        id: "day45_ex_033",
        type: "translation_hi_en",
        hindiSentence: "दर्द निवारक गोली लेने के बाद मेरा सिरदर्द ठीक हो गया।",
        englishSentence: "My headache subsided after taking the painkiller.",
        targetVocabulary: ["headache", "subsided", "painkiller"]
      },
      {
        id: "day45_ex_034",
        type: "sentence_building",
        prompt: "Express that you should consult a doctor if symptoms persist.",
        targetWords: ["Consult", "a", "doctor", "if", "symptoms", "persist", "."],
        correctSentence: "Consult a doctor if symptoms persist."
      },
      {
        id: "day45_ex_035",
        type: "mixed_retrieval",
        question: "Identify the sentence that uses standard medical English without L1 interference:",
        options: [
          "Doctor, I have loose motions and vomiting is coming from morning.",
          "Doctor, I have had diarrhea and have been feeling nauseous since this morning.",
          "Doctor, my head is reeling and fever is on me since three days.",
          "I am taking medicine from medical store for my loose motion."
        ],
        correctAnswer: "Doctor, I have had diarrhea and have been feeling nauseous since this morning.",
        explanation: "Correctly uses 'diarrhea', 'feeling nauseous', and present perfect tense."
      }
    ]
  },
  use: {
    dialogue: {
      title: "General Practitioner Consultation",
      context: "A patient (Vikas) visits Dr. Watson at an outpatient clinic for persistent flu-like symptoms.",
      characters: ["Dr. Watson", "Vikas"],
      lines: [
        { speaker: "Dr. Watson", text: "Good morning, Vikas. What seems to be the trouble today?", hindi: "शुभ प्रभात, विकास। आज क्या परेशानी है?" },
        { speaker: "Vikas", text: "Good morning, Doctor. I have been feeling feverish and exhausted for the last three days.", hindi: "शुभ प्रभात, डॉक्टर। मुझे पिछले तीन दिनों से बुखार और अत्यधिक थकान महसूस हो रही है।" },
        { speaker: "Dr. Watson", text: "I see. Have you had any other symptoms, such as a sore throat or breathing difficulty?", hindi: "मैं समझ गया। क्या आपको कोई अन्य लक्षण हैं, जैसे गले में खराश या सांस लेने में तकलीफ?" },
        { speaker: "Vikas", text: "Yes, my chest feels congested, and I have a throbbing headache that gets worse in the evening.", hindi: "हाँ, मेरी छाती में जकड़न महसूस हो रही है, और मुझे तेज सिरदर्द है जो शाम को और बढ़ जाता है।" },
        { speaker: "Dr. Watson", text: "Let me check your temperature and listen to your lungs... Your temperature is 101 degrees. It appears to be a viral respiratory infection.", hindi: "मुझे आपका तापमान जांचने दीजिए और फेफड़ों की आवाज सुनने दीजिए... आपका तापमान 101 डिग्री है। यह एक वायरल श्वसन संक्रमण प्रतीत होता है।" },
        { speaker: "Vikas", text: "Do I need antibiotics, Doctor?", hindi: "क्या मुझे एंटीबायोटिक दवाओं की आवश्यकता है, डॉक्टर?" },
        { speaker: "Dr. Watson", text: "No, antibiotics are ineffective against viruses. I am prescribing an antipyretic for the fever and a decongestant syrup. Ensure you drink plenty of fluids and rest.", hindi: "नहीं, वायरस के खिलाफ एंटीबायोटिक्स अप्रभावी हैं। मैं बुखार के लिए एक एंटीपायरेटिक और एक डिकंजेस्टेंट सिरप लिख रहा हूँ। खूब पानी पिएं और आराम करें।" }
      ]
    },
    speakingPrompt: {
      situation: "Explain a time you were sick and visited a clinic or hospital.",
      prompts: [
        "What symptoms did you experience (e.g., headache, fever, fatigue)?",
        "How long had the symptoms lasted before you saw the doctor?",
        "What diagnosis or medical advice did the doctor provide?"
      ],
      targetExpressions: ["I had been experiencing", "throbbing / dull pain", "feeling nauseous", "prescribed", "stay hydrated"]
    },
    roleplay: {
      scenario: "Consulting a physician about an acute stomach ache.",
      roleA: "Patient describing acute abdominal cramps and nausea that began after dinner.",
      roleB: "Doctor asking diagnostic questions regarding food intake, allergies, and pain location, then offering medical instructions.",
      sampleDialogue: "Patient: 'Doctor, I started experiencing sharp stomach cramps and nausea late last night.' | Doctor: 'Did you eat anything unusual? Let me examine your abdomen to see where the tenderness is located.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day45_bm_001",
        title: "Clinical Symptom & Duration Description",
        prompt: "Describe your symptoms to a doctor using qualitative pain adjectives and a correct Present Perfect Continuous duration statement.",
        sampleAnswerEn: "Doctor, I have been experiencing a throbbing headache and acute nausea for the past forty-eight hours. The pain becomes sharper whenever I bend down, and I also have a mild fever.",
        sampleAnswerHi: "डॉक्टर, मुझे पिछले 48 घंटों से टीस मारने वाला तेज सिरदर्द और तीव्र जी मिचलाने की समस्या हो रही है। जब भी मैं नीचे झुकता हूँ तो दर्द और तीखा हो जाता है, और मुझे हल्का बुखार भी है।",
        evaluationCriteria: "Correct use of 'have been experiencing', sensory adjectives ('throbbing', 'acute', 'mild'), and accurate duration phrasing ('for the past forty-eight hours')."
      },
      {
        id: "day45_bm_002",
        title: "Clinical Prescription Understanding & Explanation",
        prompt: "Explain in standard English how a patient should take a course of medication based on a doctor's instructions.",
        sampleAnswerEn: "You should take one antibiotic tablet twice daily after meals for seven consecutive days. It is vital to complete the full course even if your symptoms subside earlier.",
        sampleAnswerHi: "आपको लगातार सात दिनों तक भोजन के बाद दिन में दो बार एक एंटीबायोटिक गोली लेनी चाहिए। यदि आपके लक्षण पहले ठीक हो जाते हैं, तब भी पूरा कोर्स पूरा करना अत्यंत आवश्यक है।",
        evaluationCriteria: "Accurate dosage terminology ('twice daily after meals', 'complete the full course', 'symptoms subside')."
      },
      {
        id: "day45_bm_003",
        title: "L1 Medical Interference Remediation",
        prompt: "Correct and explain the errors in: '*Doctor, I have loose motions and vomiting is coming from two days, my head is reeling.*'",
        sampleAnswerEn: "Correction: 'Doctor, I have had diarrhea and have been feeling nauseous for two days, and I feel very dizzy.' Explanation: 1. 'Loose motions' is an unstandardized Indianism; standard English uses 'diarrhea' or 'an upset stomach'. 2. 'Vomiting is coming' should be 'feeling nauseous' or 'feel like throwing up'. 3. 'Head is reeling' is replaced by 'feeling dizzy'. 4. Use Present Perfect tense with 'for two days' rather than 'from two days'.",
        sampleAnswerHi: "सुधार: 'Doctor, I have had diarrhea and have been feeling nauseous for two days, and I feel very dizzy.' व्याख्या: 'Loose motions' की जगह 'diarrhea' का प्रयोग करें। 'Vomiting is coming' की जगह 'feeling nauseous' कहें। 'Head is reeling' को 'feeling dizzy' में बदलें, और समय की अवधि के लिए 'for two days' का प्रयोग करें।",
        evaluationCriteria: "Comprehensive remediation and grammatical/lexical justification for all four subcontinental medical errors."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "What should you say instead of '*loose motions* ' in standard English?", a: "Diarrhea / an upset stomach" },
      { q: "What is the proper expression for '*vomiting is coming* '?", a: "I feel nauseous / I feel like throwing up" },
      { q: "What is the difference between 'acute' and 'chronic' pain?", a: "'Acute' means sudden and severe; 'chronic' means persistent and long-lasting." },
      { q: "Why is '*I am having fever since two days*' incorrect?", a: "Use Present Perfect: 'I have had a fever for two days.'" }
    ],
    spacedTips: [
      "Tip 1: Remember that 'nauseous' is pronounced /ˈnɔː.zi.əs/ or /ˈnɔː.ʃəs/.",
      "Tip 2: When explaining medical duration, always use preposition 'for' with time spans (e.g., 'for three days', not '*since three days*')."
    ]
  }
};

// DAY 46: Pharmacy, Diagnostics & Medical Specialists
const day46 = {
  dayNumber: 46,
  id: "day_46",
  titleEn: "Pharmacy, Diagnostics & Medical Specialists",
  titleHi: "औषधालय, नैदानिक परीक्षण एवं चिकित्सा विशेषज्ञ",
  cefr: "A2.2",
  estMinutes: 40,
  prerequisites: "Day 45 (Medical Symptoms & Consultations)",
  objectivesEn: [
    "Navigate pharmacies, fill prescriptions, request over-the-counter (OTC) remedies, and inquire about dosage refills.",
    "Master diagnostic terminology including blood panels, MRI scans, X-rays, ultrasounds, biopsy, and fasting requirements.",
    "Identify and consult specialized medical practitioners (cardiologist, dermatologist, pediatrician, orthopedist, ENT specialist).",
    "Understand pharmaceutical labeling, expiration dates, contraindications, and active ingredients.",
    "Correct subcontinental medical errors such as '*medical store*' (for pharmacy), '*getting checked*', and specialist misnomers."
  ],
  objectivesHi: [
    "औषधालय (Pharmacy) में दवाएं लेना, पर्चा दिखाना, बिना पर्चे वाली दवाएं (OTC) मांगना और रिफिल के बारे में पूछना।",
    "नैदानिक परीक्षण शब्दावली (Blood test, MRI scan, X-ray, Ultrasound, Fasting requirements) में निपुण होना।",
    "चिकित्सा विशेषज्ञों (Cardiologist, Dermatologist, Pediatrician, Orthopedist, ENT specialist) से संपर्क व संवाद करना।",
    "दवाइयों के लेबल, एक्सपायरी डेट, विपरीत प्रभाव (Contraindications) और घटकों को समझना।",
    "भारतीय चिकित्सीय गलतियों ('medical store', 'getting checked') को सही वैश्विक शब्दावली में बदलना।"
  ],
  teach: {
    hindiExplanation: "दिन 46 में हम फार्मेसी (औषधालय), मेडिकल टेस्ट (Diagnostics) और चिकित्सा विशेषज्ञों (Medical Specialists) के बारे में सीखेंगे।\n\n1. फार्मेसी शब्दावली (Pharmacy Terms): 'Pharmacy / Chemist' (दवा की दुकान - भारत में इसे अक्सर '*medical store*' कहा जाता है), 'Prescription medicine' (पर्चे पर मिलने वाली दवा), 'Over-the-counter (OTC) medication' (बिना पर्चे के मिलने वाली सामान्य दवा, जैसे पैरासिटामोल), 'Refill' (दवा दोबारा भरवाना), 'Expiration date' (दवा की समाप्ति तिथि)।\n2. नैदानिक परीक्षण (Diagnostic Tests): 'Blood panel / Blood test' (रक्त परीक्षण), 'X-ray' (एक्स-रे), 'MRI scan' (मैग्नेटिक रेजोनेंस इमेजिंग), 'Ultrasound / Sonography' (अल्ट्रासाउंड), 'Fasting blood test' (बिना कुछ खाए-पिए खाली पेट कराया जाने वाला टेस्ट)।\n3. चिकित्सा विशेषज्ञ (Specialists):\n   - Cardiologist (हृदय रोग विशेषज्ञ)\n   - Dermatologist (त्वचा रोग विशेषज्ञ)\n   - Pediatrician (बाल रोग विशेषज्ञ - बच्चों के डॉक्टर)\n   - Orthopedist / Orthopedic surgeon (हड्डी रोग विशेषज्ञ)\n   - ENT specialist / Otolaryngologist (कान, नाक, गला विशेषज्ञ)\n   - Ophthalmologist (नेत्र रोग विशेषज्ञ)\n   - Neurologist (तंत्रिका तंत्र / मस्तिष्क विशेषज्ञ)\n4. अपॉइंटमेंट लेना: 'I would like to schedule an appointment with a dermatologist' (मैं त्वचा रोग विशेषज्ञ के साथ अपॉइंटमेंट लेना चाहता हूँ)।",
    englishExplanation: "Welcome to Day 46! Today we broaden clinical competence into the domains of pharmaceutical distribution, clinical diagnostics, laboratory testing, and medical specialization.\n\nCore curriculum components:\n1. Pharmaceutical Discourse & Dispensation: Differentiating between prescription-only drugs (Rx) and Over-The-Counter (OTC) therapeutics. Understanding labels ('expiration date', 'contraindications', 'topical ointment', 'sedative').\n2. Clinical Diagnostics: Navigating imaging (MRI, CT Scan, X-ray, Ultrasound) and laboratory blood work ('fasting glucose', 'lipid profile', 'biopsy results').\n3. Specialized Medical Hierarchy: Correctly naming and addressing clinical specialists based on bodily systems (Cardiology, Dermatology, Orthopedics, Pediatrics, Neurology, Ophthalmology, ENT).\n4. Eliminating Subcontinental Phrasing: Standardizing '*medical store*' to 'pharmacy' or 'chemist', and '*child specialist*' to 'pediatrician'.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Prepositional Collocations with Medical Specialists",
        description: "One consults 'with a specialist' or is 'referred to a specialist by a General Practitioner (GP)'. E.g., 'My GP referred me to an orthopedist.'",
        register: "Referral Syntax"
      },
      {
        ruleNumber: 2,
        title: "Compound Diagnostic Noun Modifiers",
        description: "Diagnostic procedures function as compound noun adjuncts: 'a blood test', 'a chest X-ray', 'a brain MRI scan', 'a fasting glucose test'.",
        register: "Diagnostic Collocations"
      },
      {
        ruleNumber: 3,
        title: "Modal Obligations for Diagnostic Preparation",
        description: "Express medical test protocols with modals of obligation: 'Patients must fast for at least ten hours prior to the lipid profile blood test.'",
        register: "Instructional Modality"
      },
      {
        ruleNumber: 4,
        title: "Pharmaceutical Quantifiers & Classifiers",
        description: "Use specific container and form classifiers: 'a bottle of cough syrup', 'a strip of capsules', 'a tube of antiseptic ointment', 'a pack of lozenges'.",
        register: "Partitive Nouns"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Pharmacy Prescription Request",
        formula: "I would like to fill this prescription for + [Medication Name / Condition].",
        exampleEn: "I would like to fill this prescription for asthma inhalers.",
        meaningHi: "मैं दमा के इनहेलर के लिए यह नुस्खा (प्रिस्क्रिप्शन) भरवाना चाहता हूँ।"
      },
      {
        subjectGroup: "Specialist Referral Statement",
        formula: "The doctor referred me to a / an + [Specialist Title] + for further evaluation.",
        exampleEn: "The doctor referred me to a cardiologist for further evaluation.",
        meaningHi: "डॉक्टर ने आगे की जांच के लिए मुझे हृदय रोग विशेषज्ञ के पास भेजा।"
      },
      {
        subjectGroup: "Diagnostic Test Requirement",
        formula: "Do I need to fast or prepare in any specific way before the + [Test Name]?",
        exampleEn: "Do I need to fast before the morning blood panel?",
        meaningHi: "क्या मुझे सुबह के रक्त परीक्षण से पहले खाली पेट (फास्टिंग) रहने की आवश्यकता है?"
      },
      {
        subjectGroup: "Medication Refill Inquiry",
        formula: "Can I get a refill on this prescription, or do I need a new authorized slip?",
        exampleEn: "Can I get a refill on this blood pressure prescription?",
        meaningHi: "क्या मुझे इस ब्लड प्रेशर के नुस्खे पर दवा दोबारा (रिफिल) मिल सकती है?"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Medical Store', 'Child Specialist', and 'Testing from Doctor' Traps",
      hindiPattern: "1. '*I am going to the medical store to buy tablets.*' (literal translation of 'मेडिकल स्टोर')\n2. '*We took our baby to a child specialist.*'\n3. '*I got tested from doctor.*'",
      potentialInterference: "Literal translations sound non-standard or amateurish in international healthcare settings.",
      explanation: "Standard English uses 'pharmacy' or 'chemist' (in the UK). For children's doctors, use the specialized term 'pediatrician'. Say 'I had some tests done' or 'The doctor conducted diagnostic tests'.",
      naturalSolution: "1. 'I am going to the pharmacy / chemist to buy medication.' | 2. 'We took our baby to a pediatrician.' | 3. 'I had diagnostic tests performed.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day46_vocab_001", word: "Pharmacy", pos: "Noun", ipa: "/ˈfɑː.mə.si/", meaningHi: "औषधालय / दवा की दुकान", exampleEn: "The hospital pharmacy is open twenty-four hours a day.", exampleHi: "अस्पताल की फार्मेसी चौबीसों घंटे खुली रहती है।" },
      { id: "day46_vocab_002", word: "Cardiologist", pos: "Noun", ipa: "/ˌkɑː.diˈɒl.ə.dʒɪst/", meaningHi: "हृदय रोग विशेषज्ञ", exampleEn: "The cardiologist reviewed the electrocardiogram results.", exampleHi: "हृदय रोग विशेषज्ञ ने ईसीजी रिपोर्ट की समीक्षा की।" },
      { id: "day46_vocab_003", word: "Dermatologist", pos: "Noun", ipa: "/ˌdɜː.məˈtɒl.ə.dʒɪst/", meaningHi: "त्वचा रोग विशेषज्ञ", exampleEn: "She consulted a dermatologist for her severe skin allergy.", exampleHi: "उसने अपनी गंभीर त्वचा एलर्जी के लिए त्वचा विशेषज्ञ से परामर्श किया।" },
      { id: "day46_vocab_004", word: "Pediatrician", pos: "Noun", ipa: "/ˌpiː.di.əˈtrɪʃ.ən/", meaningHi: "बाल रोग विशेषज्ञ (बच्चों के डॉक्टर)", exampleEn: "The pediatrician administered the routine childhood vaccines.", exampleHi: "बाल रोग विशेषज्ञ ने नियमित बाल टीकाकरण किया।" },
      { id: "day46_vocab_005", word: "Orthopedist", pos: "Noun", ipa: "/ˌɔː.θəˈpiː.dɪst/", meaningHi: "हड्डी रोग विशेषज्ञ", exampleEn: "The orthopedist treated the athlete's fractured ankle.", exampleHi: "हड्डी रोग विशेषज्ञ ने एथलीट के टूटे हुए टखने का इलाज किया।" },
      { id: "day46_vocab_006", word: "Ultrasound", pos: "Noun", ipa: "/ˈʌl.trə.saʊnd/", meaningHi: "अल्ट्रासाउंड / सोनोग्राफी जांच", exampleEn: "The ultrasound scan showed no signs of internal swelling.", exampleHi: "अल्ट्रासाउंड स्कैन में आंतरिक सूजन के कोई संकेत नहीं दिखे।" },
      { id: "day46_vocab_007", word: "Biopsy", pos: "Noun", ipa: "/ˈbaɪ.ɒp.si/", meaningHi: "बायोप्सी (ऊतक की जांच)", exampleEn: "The tissue biopsy confirmed that the growth was benign.", exampleHi: "ऊतक बायोप्सी ने पुष्टि की कि गांठ हानिरहित (सौम्य) थी।" },
      { id: "day46_vocab_008", word: "Ointment", pos: "Noun", ipa: "/ˈɔɪnt.mənt/", meaningHi: "मरहम / लेप", exampleEn: "Apply this antiseptic ointment to the wound twice daily.", exampleHi: "इस रोगाणुरोधी मरहम को घाव पर दिन में दो बार लगाएं।" },
      { id: "day46_vocab_009", word: "Expiration", pos: "Noun", ipa: "/ˌek.spɪˈreɪ.ʃən/", meaningHi: "समाप्ति तिथि (दवा आदि की)", exampleEn: "Always check the expiration date before taking any syrup.", exampleHi: "कोई भी सिरप लेने से पहले हमेशा समाप्ति तिथि की जांच करें।" },
      { id: "day46_vocab_010", word: "Fasting", pos: "Noun / Adjective", ipa: "/ˈfɑː.stɪŋ/", meaningHi: "खाली पेट (उपवास की अवस्था में)", exampleEn: "A twelve-hour fasting period is mandatory before this blood test.", exampleHi: "इस रक्त परीक्षण से पहले बारह घंटे का उपवास (खाली पेट रहना) अनिवार्य है।" }
    ],
    spokenPhrases: [
      { id: "day46_phrase_001", phrase: "Fill a prescription", meaningHi: "पर्चे की दवा फार्मेसी से प्राप्त करना", context: "Pharmacy interaction" },
      { id: "day46_phrase_002", phrase: "Over-the-counter (OTC)", meaningHi: "बिना डॉक्टर के पर्चे मिलने वाली दवा", context: "Retail medication" },
      { id: "day46_phrase_003", phrase: "Get a second opinion", meaningHi: "किसी अन्य डॉक्टर से दूसरी सलाह लेना", context: "Medical decisions" },
      { id: "day46_phrase_004", phrase: "On an empty stomach", meaningHi: "खाली पेट", context: "Medication or test instructions" },
      { id: "day46_phrase_005", phrase: "Referred by a GP", meaningHi: "सामान्य चिकित्सक द्वारा विशेषज्ञ के पास भेजा गया", context: "Specialist consultation" },
      { id: "day46_phrase_006", phrase: "Test results came back negative", meaningHi: "जांच रिपोर्ट सामान्य (नेगेटिव) आई", context: "Diagnostic outcomes" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day46_exmp_001", english: "I need to stop by the pharmacy to pick up my prescription refill.", hindi: "मुझे अपनी दवा का पर्चा दोबारा भरवाने के लिए फार्मेसी जाना है।" },
      { id: "day46_exmp_002", english: "The general practitioner referred my father to a renowned cardiologist.", hindi: "सामान्य चिकित्सक ने मेरे पिता को एक प्रसिद्ध हृदय रोग विशेषज्ञ के पास भेजा।" },
      { id: "day46_exmp_003", english: "You must fast for at least eight hours before the lipid blood panel.", hindi: "लिपिड ब्लड टेस्ट से पहले आपको कम से कम आठ घंटे खाली पेट रहना चाहिए।" },
      { id: "day46_exmp_004", english: "The pediatrician weighed the infant and checked her developmental milestones.", hindi: "बाल रोग विशेषज्ञ ने बच्चे का वजन किया और उसके विकास के पड़ावों की जांच की।" },
      { id: "day46_exmp_005", english: "Is this pain relief medication available over the counter?", hindi: "क्या यह दर्द निवारक दवा बिना डॉक्टर के पर्चे (ओवर-द-काउंटर) उपलब्ध है?" },
      { id: "day46_exmp_006", english: "The orthopedist examined the X-ray and confirmed a hairline fracture in the wrist.", hindi: "हड्डी रोग विशेषज्ञ ने एक्स-रे की जांच की और कलाई में हेयरलाइन फ्रैक्चर की पुष्टि की।" },
      { id: "day46_exmp_007", english: "The MRI scan showed no evidence of structural brain trauma.", hindi: "एमआरआई स्कैन में मस्तिष्क की संरचनात्मक चोट का कोई प्रमाण नहीं मिला।" },
      { id: "day46_exmp_008", english: "Always discard any medicinal drops that have passed their expiration date.", hindi: "ऐसी किसी भी दवा की बूंदों को हमेशा फेंक दें जिनकी समाप्ति तिथि निकल चुकी हो।" },
      { id: "day46_exmp_009", english: "The dermatologist prescribed a topical ointment to treat the eczema rash.", hindi: "त्वचा रोग विशेषज्ञ ने एक्जिमा के दानों के इलाज के लिए एक सामयिक मरहम लिखा।" },
      { id: "day46_exmp_010", english: "Our family decided to get a second opinion before scheduling the surgery.", hindi: "हमारे परिवार ने सर्जरी तय करने से पहले किसी अन्य विशेषज्ञ से दूसरी राय लेने का फैसला किया।" },
      { id: "day46_exmp_011", english: "The pharmacist explained the potential side effects and interactions of the drug.", hindi: "फार्मासिस्ट ने दवा के संभावित दुष्प्रभावों और अन्य दवाओं के साथ प्रभाव के बारे में समझाया।" },
      { id: "day46_exmp_012", english: "All diagnostic laboratory reports will be accessible online within twenty-four hours.", hindi: "सभी नैदानिक प्रयोगशाला रिपोर्ट चौबीस घंटों के भीतर ऑनलाइन उपलब्ध होंगी।" }
    ]
  },
  pronunciation: {
    focusSound: "Greek & Latin Derived Medical Roots: 'Cardiologist' (/ˌkɑː.diˈɒl.ə.dʒɪst/), 'Pediatrician' (/ˌpiː.di.əˈtrɪʃ.ən/), 'Dermatologist' (/ˌdɜː.məˈtɒl.ə.dʒɪst/)",
    phoneticNotes: "Notice how the suffix '-ologist' places stress on the preceding syllable (/ˈɒl.ə.dʒɪst/). The suffix '-ician' takes stress on the /ɪʃ.ən/ syllable.",
    minimalPairs: [
      { wordA: "Pharmacy", ipaA: "/ˈfɑː.mə.si/", wordB: "Farmers", ipaB: "/ˈfɑː.məz/" },
      { wordA: "Dermal", ipaA: "/ˈdɜː.məl/", wordB: "Thermal", ipaB: "/ˈθɜː.məl/" },
      { wordA: "Biopsy", ipaA: "/ˈbaɪ.ɒp.si/", wordB: "Autopsy", ipaB: "/ˈɔː.tɒp.si/" },
      { wordA: "Scan", ipaA: "/skæn/", wordB: "Spam", ipaB: "/spæm/" }
    ],
    drills: [
      { sentence: "The pediatrician and the dermatologist attended the conference.", focus: "Suffix stress in -ician and -ologist" },
      { sentence: "Pick up the prescription from the hospital pharmacy.", focus: "Fricative /f/ in pharmacy" },
      { sentence: "The orthopedist scheduled an ultrasound scan.", focus: "Consonant clusters in orthopedist" },
      { sentence: "The biopsy results confirmed the cardiologist's initial diagnosis.", focus: "Rhythm and polysyllabic fluency" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day46_ex_001",
        type: "multiple_choice",
        question: "What is a doctor specializing in children's health called?",
        options: ["Pediatrician", "Cardiologist", "Orthopedist", "Dermatologist"],
        correctAnswer: "Pediatrician",
        explanation: "A pediatrician specializes in infant and child medicine."
      },
      {
        id: "day46_ex_002",
        type: "fill_in_the_blank",
        question: "I went to the ______ to pick up my prescribed eye drops.",
        correctAnswer: "pharmacy",
        explanation: "Medications are dispensed at a 'pharmacy' (or 'chemist')."
      },
      {
        id: "day46_ex_003",
        type: "error_correction",
        sentence: "I bought these cough lozenges from the medical store near my house.",
        correctAnswer: "I bought these cough lozenges from the pharmacy near my house.",
        explanation: "Use standard international term 'pharmacy' or 'chemist' instead of '*medical store*'."
      },
      {
        id: "day46_ex_004",
        type: "translation_hi_en",
        hindiSentence: "हृदय रोग विशेषज्ञ ने मेरे ईसीजी की रिपोर्ट देखी।",
        englishSentence: "The cardiologist reviewed my ECG report.",
        targetVocabulary: ["cardiologist", "reviewed", "ECG report"]
      },
      {
        id: "day46_ex_005",
        type: "matching",
        prompt: "Match the medical specialists with their fields of expertise:",
        pairs: [
          { left: "Dermatologist", right: "Skin, hair, and nail disorders" },
          { left: "Orthopedist", right: "Bones, joints, and muscular skeletal system" },
          { left: "Ophthalmologist", right: "Eye care, vision, and ocular surgery" },
          { left: "Neurologist", right: "Brain, spine, and nervous system disorders" }
        ]
      },
      {
        id: "day46_ex_006",
        type: "sentence_ordering",
        scrambledWords: ["must", "Patients", "fast", "hours", "ten", "for", "blood", "test", "the", "before"],
        correctSentence: "Patients must fast for ten hours before the blood test.",
        explanation: "Modal instruction format."
      },
      {
        id: "day46_ex_007",
        type: "multiple_choice",
        question: "What does 'OTC' stand for in pharmacology?",
        options: ["Over-the-counter", "Only-through-clinic", "Off-the-chart", "Over-the-clock"],
        correctAnswer: "Over-the-counter",
        explanation: "OTC stands for 'Over-the-counter' (medicines bought without a prescription)."
      },
      {
        id: "day46_ex_008",
        type: "sentence_building",
        prompt: "Ask the pharmacist if you can get a refill for this prescription.",
        targetWords: ["Can", "I", "get", "a", "refill", "for", "this", "prescription", "?"],
        correctSentence: "Can I get a refill for this prescription?"
      },
      {
        id: "day46_ex_009",
        type: "translation_en_hi",
        englishSentence: "The orthopedist recommended physical therapy for the injured ligament.",
        hindiSentence: "हड्डी रोग विशेषज्ञ ने घायल लिगामेंट के लिए फिजियोथेरेपी की सिफारिश की।"
      },
      {
        id: "day46_ex_010",
        type: "listening_comprehension",
        audioText: "The biopsy showed that the cell growth was completely benign and harmless.",
        question: "What did the biopsy reveal about the cell growth?",
        options: ["It was malignant", "It was completely benign and harmless", "It required immediate surgery", "It was inconclusive"],
        correctAnswer: "It was completely benign and harmless",
        explanation: "The audio specifies that the growth was completely benign."
      },
      {
        id: "day46_ex_011",
        type: "dictation",
        spokenText: "The dermatologist prescribed an antiseptic ointment.",
        correctText: "The dermatologist prescribed an antiseptic ointment."
      },
      {
        id: "day46_ex_012",
        type: "dialogue_completion",
        dialogueContext: "Patient: 'Do I need a prescription for these painkillers?' | Pharmacist: 'No, these are available ______.'",
        options: ["over the counter", "under the ground", "in the basement", "on the roof"],
        correctAnswer: "over the counter",
        explanation: "'Over the counter' means available without prescription."
      },
      {
        id: "day46_ex_013",
        type: "speaking_pronunciation",
        targetText: "The cardiologist and the neurologist reviewed the diagnostic scan.",
        phoneticFocus: "Stress patterns in 'cardiologist' and 'neurologist'"
      },
      {
        id: "day46_ex_014",
        type: "active_recall",
        prompt: "What is the medical term for a specialist who treats bone and joint disorders?",
        correctAnswer: "Orthopedist / Orthopedic surgeon",
        explanation: "An orthopedist specializes in the musculoskeletal system."
      },
      {
        id: "day46_ex_015",
        type: "applied_scenario",
        scenario: "You have a doctor's prescription for antibiotics. How do you ask the pharmacist to prepare the medicine?",
        correctAnswer: "Hello, I would like to fill this prescription, please.",
        explanation: "'Fill a prescription' is the standard pharmaceutical expression."
      },
      {
        id: "day46_ex_016",
        type: "multiple_choice",
        question: "Which imaging technique uses sound waves to create images of organs?",
        options: ["Ultrasound", "X-ray", "CT scan", "Biopsy"],
        correctAnswer: "Ultrasound",
        explanation: "An ultrasound uses high-frequency sound waves."
      },
      {
        id: "day46_ex_017",
        type: "fill_in_the_blank",
        question: "Do not use this cream because it passed its ______ date last month.",
        correctAnswer: "expiration",
        explanation: "'Expiration date' indicates when a medication ceases to be safe/effective."
      },
      {
        id: "day46_ex_018",
        type: "error_correction",
        sentence: "We took our six-month baby to a child specialist doctor.",
        correctAnswer: "We took our six-month-old baby to a pediatrician.",
        explanation: "Use 'pediatrician' for children's doctors."
      },
      {
        id: "day46_ex_019",
        type: "translation_hi_en",
        hindiSentence: "क्या इस रक्त परीक्षण से पहले खाली पेट रहना आवश्यक है?",
        englishSentence: "Is fasting required before this blood test?",
        targetVocabulary: ["fasting", "required", "blood test"]
      },
      {
        id: "day46_ex_020",
        type: "matching",
        prompt: "Match the pharmaceutical items with their containers/forms:",
        pairs: [
          { left: "Syrup", right: "Bottle" },
          { left: "Ointment", right: "Tube" },
          { left: "Capsules", right: "Strip / Blister pack" },
          { left: "Eye drops", right: "Vial / Dropper" }
        ]
      },
      {
        id: "day46_ex_021",
        type: "multiple_choice",
        question: "What does 'seeking a second opinion' mean?",
        options: ["Consulting another doctor to verify a diagnosis", "Buying medicine twice", "Asking a friend for advice", "Ignoring the doctor's advice"],
        correctAnswer: "Consulting another doctor to verify a diagnosis",
        explanation: "A 'second opinion' is an independent assessment by another specialist."
      },
      {
        id: "day46_ex_022",
        type: "sentence_ordering",
        scrambledWords: ["referred", "GP", "The", "a", "cardiologist", "to", "him"],
        correctSentence: "The GP referred him to a cardiologist.",
        explanation: "Subject ('The GP') + Verb ('referred') + Object ('him') + Prepositional phrase ('to a cardiologist')."
      },
      {
        id: "day46_ex_023",
        type: "fill_in_the_blank",
        question: "The ENT specialist examined her inner ear with an ______.",
        correctAnswer: "otoscope",
        explanation: "An otoscope is used by doctors to examine ears."
      },
      {
        id: "day46_ex_024",
        type: "sentence_building",
        prompt: "State that the MRI scan confirmed no internal bleeding.",
        targetWords: ["The", "MRI", "scan", "confirmed", "no", "internal", "bleeding", "."],
        correctSentence: "The MRI scan confirmed no internal bleeding."
      },
      {
        id: "day46_ex_025",
        type: "translation_en_hi",
        englishSentence: "Apply a thin layer of this ointment to the affected area before sleeping.",
        hindiSentence: "सोने से पहले प्रभावित क्षेत्र पर इस मरहम की एक पतली परत लगाएं।"
      },
      {
        id: "day46_ex_026",
        type: "multiple_choice",
        question: "An ENT specialist treats which parts of the body?",
        options: ["Ear, Nose, and Throat", "Eye, Neck, and Teeth", "Elbow, Nerve, and Tissue", "Endocrine, Nail, and Tongue"],
        correctAnswer: "Ear, Nose, and Throat",
        explanation: "ENT stands for Ear, Nose, and Throat."
      },
      {
        id: "day46_ex_027",
        type: "error_correction",
        sentence: "He went to the chemist for taking test from doctor.",
        correctAnswer: "He went to the laboratory to have diagnostic tests done.",
        explanation: "Tests are done at a laboratory or clinic, not 'taken from a doctor at a chemist'."
      },
      {
        id: "day46_ex_028",
        type: "listening_comprehension",
        audioText: "Your cholesterol test results came back within normal healthy limits.",
        question: "What were the results of the cholesterol test?",
        options: ["Extremely high", "Within normal healthy limits", "Inconclusive", "Dangerous"],
        correctAnswer: "Within normal healthy limits",
        explanation: "The audio specifies that results were within normal limits."
      },
      {
        id: "day46_ex_029",
        type: "dictation",
        spokenText: "The pharmacist verified the dosage on the prescription.",
        correctText: "The pharmacist verified the dosage on the prescription."
      },
      {
        id: "day46_ex_030",
        type: "applied_scenario",
        scenario: "You are at the pharmacy counter. You need a painkiller for a mild headache, but you don't have a prescription. What do you ask?",
        correctAnswer: "Do you have any over-the-counter pain relievers for a headache?",
        explanation: "Uses accurate pharmaceutical phrasing ('over-the-counter pain relievers')."
      },
      {
        id: "day46_ex_031",
        type: "multiple_choice",
        question: "Which term refers to surgical removal of tissue sample for microscopic examination?",
        options: ["Biopsy", "Autopsy", "Dialysis", "Transfusion"],
        correctAnswer: "Biopsy",
        explanation: "A 'biopsy' is a diagnostic examination of tissue removed from a living body."
      },
      {
        id: "day46_ex_032",
        type: "fill_in_the_blank",
        question: "She scheduled a consultation with a ______ to treat her chronic acne.",
        correctAnswer: "dermatologist",
        explanation: "A dermatologist treats skin conditions like acne."
      },
      {
        id: "day46_ex_033",
        type: "translation_hi_en",
        hindiSentence: "दवा की समाप्ति तिथि हमेशा पैक के पीछे मुद्रित होती है।",
        englishSentence: "The expiration date of the medicine is always printed on the back of the pack.",
        targetVocabulary: ["expiration date", "printed", "back of the pack"]
      },
      {
        id: "day46_ex_034",
        type: "sentence_building",
        prompt: "State that the lab results will be ready tomorrow afternoon.",
        targetWords: ["The", "laboratory", "results", "will", "be", "ready", "tomorrow", "afternoon", "."],
        correctSentence: "The laboratory results will be ready tomorrow afternoon."
      },
      {
        id: "day46_ex_035",
        type: "mixed_retrieval",
        question: "Identify the sentence that contains no errors:",
        options: [
          "I went to medical store to get medicine from child specialist.",
          "I went to the pharmacy to fill a prescription from our pediatrician.",
          "The cardiologist told me to fast from 10 hours for my scanning.",
          "I need an over-counter tablet for my tooth ache."
        ],
        correctAnswer: "I went to the pharmacy to fill a prescription from our pediatrician.",
        explanation: "Correctly uses 'pharmacy', 'fill a prescription', and 'pediatrician'."
      }
    ]
  },
  use: {
    dialogue: {
      title: "Filling a Prescription at the Pharmacy",
      context: "A customer (Sunil) hands a prescription slip to the community pharmacist (Rachel).",
      characters: ["Sunil", "Rachel"],
      lines: [
        { speaker: "Sunil", text: "Hello! I'd like to fill this prescription for my mother, please.", hindi: "नमस्ते! मैं अपनी माँ के लिए यह नुस्खा (प्रिस्क्रिप्शन) भरवाना चाहता हूँ।" },
        { speaker: "Rachel", text: "Certainly, let me review it. This is for an anti-hypertensive medication and cholesterol-lowering statins.", hindi: "ज़रूर, मुझे इसे देखने दीजिए। यह उच्च रक्तचाप की दवा और कोलेस्ट्रॉल कम करने वाले स्टैटिन के लिए है।" },
        { speaker: "Sunil", text: "Yes, her cardiologist adjusted her dosage yesterday.", hindi: "हाँ, उनके हृदय रोग विशेषज्ञ ने कल उनकी खुराक में बदलाव किया था।" },
        { speaker: "Rachel", text: "I have both medications in stock. Please note that the statin should be taken once daily at bedtime, whereas the blood pressure tablet is taken in the morning.", hindi: "मेरे पास दोनों दवाएं स्टॉक में हैं। कृपया ध्यान दें कि स्टैटिन को सोते समय दिन में एक बार लेना है, जबकि ब्लड प्रेशर की गोली सुबह ली जाती है।" },
        { speaker: "Sunil", text: "Thank you for clarifying. Are there any specific dietary contraindications?", hindi: "स्पष्ट करने के लिए धन्यवाद। क्या खान-पान में कोई विशेष परहेज है?" },
        { speaker: "Rachel", text: "Yes, she should avoid grapefruit juice, as it can interact with statins. Here is the medication with the dosage instructions printed on the label.", hindi: "हाँ, उन्हें चकोतरे (ग्रेपफ्रूट) के रस से बचना चाहिए, क्योंकि यह स्टैटिन के साथ प्रतिक्रिया कर सकता है। यह रही दवा, जिसके लेबल पर खुराक के निर्देश लिखे हैं।" }
      ]
    },
    speakingPrompt: {
      situation: "Explain an experience where you had to get medical tests or consult a specialist.",
      prompts: [
        "Which specialist did you visit (e.g., dermatologist, orthopedist, pediatrician)?",
        "What diagnostic tests were ordered (e.g., blood test, X-ray, ultrasound)?",
        "Did you have to prepare in any special way (such as fasting)?"
      ],
      targetExpressions: ["referred to a specialist", "underwent an ultrasound / MRI", "fasting required", "pharmacy prescription"]
    },
    roleplay: {
      scenario: "Booking a diagnostic laboratory appointment over the phone.",
      roleA: "Patient calling to schedule a fasting blood panel and inquiring about preparation guidelines.",
      roleB: "Laboratory receptionist confirming the appointment time, explaining the 10-hour fasting requirement, and stating when results will be ready.",
      sampleDialogue: "Patient: 'Good morning, I need to schedule a comprehensive lipid and glucose blood test.' | Receptionist: 'We can book you for tomorrow at 8:00 AM. Please ensure you fast for ten hours prior to the draw, drinking only plain water.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day46_bm_001",
        title: "Pharmaceutical Interaction & Refill Request",
        prompt: "Draft a dialogue where a customer asks a pharmacist to fill a prescription and checks for medication interactions.",
        sampleAnswerEn: "Customer: 'Good afternoon. I would like to fill this prescription for asthma inhalers. Could you also confirm if this medication interacts with regular allergy antihistamines?' Pharmacist: 'Certainly. Let me verify the active ingredients. These two medications are safe to use concurrently.'",
        sampleAnswerHi: "ग्राहक: 'शुभ दोपहर। मैं दमा के इनहेलर के लिए यह नुस्खा भरवाना चाहता हूँ। क्या आप यह भी पुष्टि कर सकते हैं कि क्या यह दवा नियमित एलर्जी एंटीहिस्टामाइन के साथ कोई प्रतिकूल प्रभाव डालती है?' फार्मासिस्ट: 'बिल्कुल। मुझे सक्रिय अवयवों की जांच करने दीजिए। ये दोनों दवाएं एक साथ उपयोग करने के लिए सुरक्षित हैं।'",
        evaluationCriteria: "Correct pharmaceutical register ('fill a prescription', 'active ingredients', 'concurrently', 'interacts with')."
      },
      {
        id: "day46_bm_002",
        title: "Medical Specialist Referral & Diagnostic Description",
        prompt: "Write 3 sentences explaining why a general practitioner referred a patient to an orthopedist and what tests were conducted.",
        sampleAnswerEn: "After examining my swollen knee, the general practitioner referred me to an orthopedic specialist. The orthopedist ordered an MRI scan and an X-ray to inspect the ligaments. Fortunately, the diagnostic imaging revealed only a mild sprain.",
        sampleAnswerHi: "मेरे सूजे हुए घुटने की जांच करने के बाद, सामान्य चिकित्सक ने मुझे एक हड्डी रोग विशेषज्ञ के पास भेजा। हड्डी रोग विशेषज्ञ ने लिगामेंट्स का निरीक्षण करने के लिए एमआरआई स्कैन और एक्स-रे का आदेश दिया। सौभाग्य से, नैदानिक इमेजिंग में केवल एक हल्का मोच ही सामने आया।",
        evaluationCriteria: "Proper specialist terminology ('orthopedic specialist', 'referred to'), diagnostic terms ('MRI scan', 'X-ray', 'imaging')."
      },
      {
        id: "day46_bm_003",
        title: "L1 Pharmacy & Specialist Transfer Remediation",
        prompt: "Correct and explain: '*I am going to medical store to buy tablets from child specialist, and getting checked by doctor.*'",
        sampleAnswerEn: "Correction: 'I am going to the pharmacy to pick up the medication prescribed by our pediatrician, and I had a medical checkup performed.' Explanation: 1. Replace 'medical store' with 'pharmacy' or 'chemist'. 2. Standardize 'child specialist' to 'pediatrician'. 3. Replace 'getting checked by doctor' with 'had a medical checkup' or 'consulted a physician'.",
        sampleAnswerHi: "सुधार: 'I am going to the pharmacy to pick up the medication prescribed by our pediatrician, and I had a medical checkup performed.' व्याख्या: 'Medical store' की जगह 'pharmacy' का प्रयोग करें। 'Child specialist' के स्थान पर 'pediatrician' लिखें। 'Getting checked' को 'had a medical checkup' में बदलें।",
        evaluationCriteria: "Clear remediation of all subcontinental medical false friends with accurate international terminology."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "What is a doctor who specializes in skin conditions called?", a: "Dermatologist" },
      { q: "What does 'filling a prescription' mean?", a: "Having a pharmacist prepare and dispense the medications prescribed by a doctor." },
      { q: "What is the global standard term for '*medical store*'?", a: "Pharmacy / Chemist" },
      { q: "What does 'fasting' mean before a blood test?", a: "Refraining from eating food (and sometimes liquids other than water) for a specified number of hours." }
    ],
    spacedTips: [
      "Tip 1: Remember that 'pediatrician' is pronounced /ˌpiː.di.əˈtrɪʃ.ən/ with the stress on the third syllable.",
      "Tip 2: Never say '*child specialist*' in formal international English; always use 'pediatrician'."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day45.js'), `export const day45 = ${JSON.stringify(day45, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day45.js");

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day46.js'), `export const day46 = ${JSON.stringify(day46, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day46.js");
