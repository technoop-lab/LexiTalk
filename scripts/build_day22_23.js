import fs from 'fs';
import path from 'path';

// Day 22: High-Frequency Irregular Past Simple (Went, Came, Ate, Drank, Saw, Bought, etc.)
const day22 = {
  dayNumber: 22,
  id: "day_22",
  titleEn: "High-Frequency Irregular Past Simple (Went, Came, Saw, Bought & Core Irregulars)",
  titleHi: "प्रमुख अनियमित भूतकाल क्रियाएँ (Went, Came, Saw, Bought और मुख्य Irregular Verbs)",
  cefr: "A1.2",
  estMinutes: 30,
  prerequisites: "Day 21 (Regular Past Simple -ed)",
  objectivesEn: [
    "Identify and master the top 15 most frequent irregular past simple verbs (go->went, see->saw, buy->bought, eat->ate, come->came, etc.).",
    "Understand internal vowel shift patterns in irregular verbs (take->took, give->gave, drink->drank, write->wrote).",
    "Construct accurate affirmative past narratives describing outings, shopping, meals, and social encounters.",
    "Avoid the common error of adding '-ed' to irregular verbs (e.g. saying '*goed*' or '*buyed*')."
  ],
  objectivesHi: [
    "दैनिक जीवन में सबसे ज़्यादा इस्तेमाल होने वाली 15 Irregular Verbs (Went, Came, Saw, Bought, Ate आदि) पर महारत हासिल करना।",
    "अनियमित क्रियाओं में स्वर परिवर्तन (Vowel Shift) के पैटर्न्स को समझना।",
    "खरीदारी, भोजन, यात्रा और मुलाक़ात से जुड़ी घटनाओं के सटीक भूतकाल वाक्य बनाना।",
    "Irregular क्रियाओं में गलती से '-ed' जोड़ने (जैसे '*goed*' या '*buyed*') से बचना।"
  ],
  teach: {
    hindiExplanation: "अंग्रेज़ी में कई महत्वपूर्ण और आम क्रियाएँ ऐसी होती हैं जिनमें भूतकाल बनाने के लिए '-ed' नहीं जुड़ता, बल्कि उनका पूरा शब्द या बीच का स्वर बदल जाता है। इन्हें 'Irregular Verbs' (अनियमित क्रियाएँ) कहते हैं। जैसे: Go का Past रूप 'Went' होता है ('goed' कभी नहीं), Buy का 'Bought', See का 'Saw', और Eat का 'Ate'। नियमित क्रियाओं की तरह ही, Irregular Verbs का यह दूसरा रूप (V2) भी सभी कर्ताओं (I, You, He, She, We, They) के साथ बिल्कुल एक जैसा रहता है।",
    englishExplanation: "Unlike regular verbs that add '-ed', irregular verbs undergo internal vowel mutations or completely transform their base form in the past simple (V2). For example: go -> went, see -> saw, buy -> bought, have -> had, take -> took, give -> gave, eat -> ate, write -> wrote. While irregular verbs must be memorized, they follow recognizable sound clusters (e.g. buy/bring/think -> bought/brought/thought; sing/drink/swim -> sang/drank/swam). In affirmative sentences, the V2 form is identical across all subjects.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Unique Past Forms (No '-ed' Suffix)",
        description: "Irregular verbs never take '-ed'. Saying '*goed*', '*buyed*', '*eated*', or '*seed*' is ungrammatical.",
        register: "Morphological Standard"
      },
      {
        ruleNumber: 2,
        title: "Uniform Subject Invariance",
        description: "The irregular past form is unchanged regardless of the subject: I went, she went, we went, they went.",
        register: "Syntax Standard"
      },
      {
        ruleNumber: 3,
        title: "Ought/Aught Vowel Pattern (/ɔːt/)",
        description: "A major cluster of high-frequency verbs changes to '-ought' or '-aught': buy -> bought, bring -> brought, catch -> caught, teach -> taught, think -> thought.",
        register: "Phonological Cluster"
      },
      {
        ruleNumber: 4,
        title: "Vowel Shift Patterns (A -> E -> O)",
        description: "Common shifts include: /iː/ to /e/ (meet -> met, read -> read /red/), /ɪ/ to /æ/ (drink -> drank, sit -> sat), /aɪ/ to /oʊ/ (write -> wrote, drive -> drove).",
        register: "Phonological Pattern"
      }
    ],
    formulaTable: [
      { subjectGroup: "Go / Come / Leave (Movement)", formula: "Subject + went / came / left + [Destination/Time]", exampleEn: "We went to the market yesterday.", meaningHi: "हम कल बाज़ार गए।" },
      { subjectGroup: "Buy / Bring / Take (Possession/Exchange)", formula: "Subject + bought / brought / took + [Object]", exampleEn: "She bought a new dress.", meaningHi: "उसने एक नई ड्रेस खरीदी।" },
      { subjectGroup: "Eat / Drink / Have (Consumption)", formula: "Subject + ate / drank / had + [Food/Drink]", exampleEn: "I ate a sandwich for lunch.", meaningHi: "मैंने दोपहर के खाने में सैंडविच खाया।" },
      { subjectGroup: "See / Meet / Hear (Perception/Social)", formula: "Subject + saw / met / heard + [Person/Event]", exampleEn: "Rohan met his old teacher.", meaningHi: "रोहन अपने पुराने शिक्षक से मिला।" }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Over-generalizing '-ed' (*buyed, *goed) and double past (*did went)",
      hindiPattern: "हिन्दी में 'जाना' का 'गया' होता है। अंग्रेज़ी में नए शिक्षार्थी नियम लागू करके 'go' को 'goed' या 'buy' को 'buyed' बना देते हैं।",
      potentialInterference: "Saying '*I goed to market and buyed apples*' instead of '*I went to the market and bought apples*'.",
      explanation: "Irregular verbs are historical strong verbs in English and do not conform to the weak '-ed' pattern.",
      naturalSolution: "Memorize high-frequency pairs: go -> went, buy -> bought, see -> saw, give -> gave, eat -> ate."
    }
  },
  learn: {
    vocabulary: [
      { id: "day22_vocab_001", word: "Went", pos: "Verb (V2)", ipa: "/went/", meaningHi: "गया / गए / गई", exampleEn: "I went to the supermarket yesterday.", exampleHi: "मैं कल सुपरमार्केट गया।" },
      { id: "day22_vocab_002", word: "Came", pos: "Verb (V2)", ipa: "/keɪm/", meaningHi: "आया / आए / आई", exampleEn: "My uncle came to our house last night.", exampleHi: "मेरे चाचा कल रात हमारे घर आए।" },
      { id: "day22_vocab_003", word: "Saw", pos: "Verb (V2)", ipa: "/sɔː/", meaningHi: "देखा", exampleEn: "We saw an eagle in the park.", exampleHi: "हमने पार्क में एक चील देखी।" },
      { id: "day22_vocab_004", word: "Bought", pos: "Verb (V2)", ipa: "/bɔːt/", meaningHi: "खरीदा", exampleEn: "She bought fresh vegetables from the vendor.", exampleHi: "उसने विक्रेता से ताज़ी सब्ज़ियाँ खरीदीं।" },
      { id: "day22_vocab_005", word: "Took", pos: "Verb (V2)", ipa: "/tʊk/", meaningHi: "लिया / ले गया / लगा (समय)", exampleEn: "It took thirty minutes to reach the station.", exampleHi: "स्टेशन पहुँचने में तीस मिनट लगे।" },
      { id: "day22_vocab_006", word: "Gave", pos: "Verb (V2)", ipa: "/ɡeɪv/", meaningHi: "दिया", exampleEn: "He gave me a valuable book as a gift.", exampleHi: "उसने मुझे उपहार के रूप में एक मूल्यवान पुस्तक दी।" },
      { id: "day22_vocab_007", word: "Ate", pos: "Verb (V2)", ipa: "/eɪt/", meaningHi: "खाया", exampleEn: "We ate South Indian food for breakfast.", exampleHi: "हमने नाश्ते में दक्षिण भारतीय खाना खाया।" },
      { id: "day22_vocab_008", word: "Drank", pos: "Verb (V2)", ipa: "/dræŋk/", meaningHi: "पिया", exampleEn: "She drank two cups of green tea.", exampleHi: "उसने दो कप ग्रीन टी पी।" },
      { id: "day22_vocab_009", word: "Met", pos: "Verb (V2)", ipa: "/met/", meaningHi: "मिला / मुलाक़ात की", exampleEn: "I met an old school friend yesterday.", exampleHi: "मैं कल एक पुराने स्कूल के दोस्त से मिला।" },
      { id: "day22_vocab_010", word: "Wrote", pos: "Verb (V2)", ipa: "/roʊt/", meaningHi: "लिखा", exampleEn: "Ravi wrote an important email to his manager.", exampleHi: "रवि ने अपने मैनेजर को एक ज़रूरी ईमेल लिखा।" }
    ],
    phrases: [
      { id: "day22_phrase_001", phrase: "I went shopping.", register: "Conversational", meaningHi: "मैं खरीदारी करने गया था।" },
      { id: "day22_phrase_002", phrase: "We saw a great movie.", register: "Conversational", meaningHi: "हमने एक शानदार फ़िल्म देखी।" },
      { id: "day22_phrase_003", phrase: "He gave me his keys.", register: "Conversational", meaningHi: "उसने मुझे अपनी चाबियाँ दीं।" },
      { id: "day22_phrase_004", phrase: "I ate lunch early.", register: "Conversational", meaningHi: "मैंने दोपहर का खाना जल्दी खा लिया।" },
      { id: "day22_phrase_005", phrase: "We met at the metro station.", register: "Conversational", meaningHi: "हम मेट्रो स्टेशन पर मिले।" },
      { id: "day22_phrase_006", phrase: "It took a long time.", register: "Conversational", meaningHi: "इसमें काफ़ी समय लगा।" }
    ]
  },
  examples: [
    { id: "day22_example_001", en: "I went to Delhi last month.", hi: "मैं पिछले महीने दिल्ली गया था।" },
    { id: "day22_example_002", en: "She saw a doctor yesterday afternoon.", hi: "उसने कल दोपहर डॉक्टर से मुलाक़ात की (दिखाया)।" },
    { id: "day22_example_003", en: "We bought a new refrigerator last week.", hi: "हमने पिछले हफ़्ते एक नया फ्रिज खरीदा।" },
    { id: "day22_example_004", en: "He gave his friend some good advice.", hi: "उसने अपने दोस्त को कुछ अच्छी सलाह दी।" },
    { id: "day22_example_005", en: "I ate dinner at eight o'clock yesterday.", hi: "मैंने कल आठ बजे रात का खाना खाया।" },
    { id: "day22_example_006", en: "They came to our wedding ceremony.", hi: "वे हमारे विवाह समारोह में आए थे।" },
    { id: "day22_example_007", en: "She took an umbrella because it was cloudy.", hi: "उसने छाता ले लिया क्योंकि बादल छाए हुए थे।" },
    { id: "day22_example_008", en: "I drank a glass of warm milk before bed.", hi: "मैंने सोने से पहले एक गिलास गर्म दूध पिया।" },
    { id: "day22_example_009", en: "Sunil met his business partner in Mumbai.", hi: "सुनील मुंबई में अपने बिजनेस पार्टनर से मिला।" },
    { id: "day22_example_010", en: "She wrote a letter to the principal.", hi: "उसने प्रधानाचार्य को एक पत्र लिखा।" },
    { id: "day22_example_011", en: "We had a wonderful dinner together.", hi: "हमने साथ में शानदार डिनर किया।" },
    { id: "day22_example_012", en: "He left his office at six sharp.", hi: "उसने ठीक छह बजे अपना दफ़्तर छोड़ा।" }
  ],
  pronunciation: {
    targetSounds: ["Vowel /ɔː/ in 'saw' and 'bought'", "Open front /æ/ in 'drank', 'ran', 'sang'", "Close mid /e/ in 'met', 'left', 'said'"],
    traps: "'Bought' has a silent 'gh' and rhymes with 'caught' /bɔːt/. Do not pronounce the 'g' or 'h'. 'Read' in past tense is pronounced /red/ (like the color red).",
    drills: [
      { id: "day22_audio_001", voiceRole: "TEACHER", audioType: "drill", text: "I bought a book and brought it home." },
      { id: "day22_audio_002", voiceRole: "TEACHER", audioType: "drill", text: "We went to the cafe and ate lunch." },
      { id: "day22_audio_003", voiceRole: "TEACHER", audioType: "drill", text: "She saw her friends and drank some tea." },
      { id: "day22_audio_004", voiceRole: "TEACHER", audioType: "drill", text: "He took the train and came on time." }
    ]
  },
  practice: [
    {
      id: "day22_ex_001",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'हम कल बाज़ार गए':",
      options: ["We goed to the market yesterday.", "We went to the market yesterday.", "We were go to the market yesterday.", "We wented to the market yesterday."],
      correctAnswer: "We went to the market yesterday.",
      explanationEn: "'Go' is irregular; its past simple form is 'went'.",
      explanationHi: "'Go' एक अनियमित क्रिया है, इसका भूतकाल 'went' होता है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_002",
      type: "multiple_choice",
      prompt: "What is the past simple of 'Buy'?",
      options: ["Buyed", "Bought", "Brought", "Buying"],
      correctAnswer: "Bought",
      explanationEn: "The past tense of 'buy' is 'bought' (pronounced /bɔːt/).",
      explanationHi: "'Buy' का Past Simple रूप 'bought' होता है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_003",
      type: "fill_in_blank",
      prompt: "Complete the sentence: 'She ______ (see) an accident on the highway yesterday.'",
      correctAnswer: "saw",
      explanationEn: "The past simple form of 'see' is 'saw'.",
      explanationHi: "'See' का Past Simple रूप 'saw' है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_004",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'Rohan ______ (give) me a pen during the exam.'",
      correctAnswer: "gave",
      explanationEn: "The past simple of 'give' is 'gave'.",
      explanationHi: "'Give' का भूतकाल रूप 'gave' होता है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_005",
      type: "multiple_choice",
      prompt: "Which past form is spelled and used CORRECTLY?",
      options: ["Ate (from eat)", "Eated (from eat)", "Seed (from see)", "Takened (from take)"],
      correctAnswer: "Ate (from eat)",
      explanationEn: "'Eat' changes to 'ate' in past simple.",
      explanationHi: "'Eat' का Past रूप 'ate' होता है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_006",
      type: "word_reorder",
      prompt: "Put the words in correct order: [yesterday / a new phone / bought / Manish]",
      options: ["Manish bought a new phone yesterday.", "Manish yesterday a new phone bought.", "Bought Manish a new phone yesterday.", "A new phone Manish bought yesterday."],
      correctAnswer: "Manish bought a new phone yesterday.",
      explanationEn: "Subject (Manish) + V2 (bought) + Object (a new phone) + Time (yesterday).",
      explanationHi: "सही क्रम: Manish bought a new phone yesterday.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day22_ex_007",
      type: "error_correction",
      prompt: "Identify and correct the error: 'I drink three glasses of water last night.'",
      correctAnswer: "I drank three glasses of water last night.",
      explanationEn: "Past tense of 'drink' is 'drank' to match 'last night'.",
      explanationHi: "'Last night' के कारण 'drink' का भूतकाल रूप 'drank' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day22_ex_008",
      type: "hindi_to_english",
      prompt: "Translate into English: 'वह कल रात हमारे घर आया।'",
      options: ["He came to our house last night.", "He comed to our house last night.", "He was come to our house last night.", "He comes to our house last night."],
      correctAnswer: "He came to our house last night.",
      explanationEn: "'वह आया' = 'He came', 'कल रात' = 'last night'.",
      explanationHi: "सही अनुवाद: 'He came to our house last night.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day22_ex_009",
      type: "english_to_hindi",
      prompt: "What is the Hindi meaning of: 'She took a taxi to the airport'?",
      options: ["वह हवाई अड्डे के लिए टैक्सी से गई (टैक्सी ली)।", "वह हवाई अड्डे पर टैक्सी चला रही थी।", "उसने टैक्सी नहीं ली।", "वह हवाई अड्डे से पैदल आई।"],
      correctAnswer: "वह हवाई अड्डे के लिए टैक्सी से गई (टैक्सी ली)।",
      explanationEn: "'Took a taxi' means 'टैक्सी ली / टैक्सी से गई'.",
      explanationHi: "सही अर्थ: 'वह हवाई अड्डे के लिए टैक्सी से गई (टैक्सी ली)।'",
      difficulty: "easy",
      skillTag: "TRANSLATION_EN_HI"
    },
    {
      id: "day22_ex_010",
      type: "multiple_choice",
      prompt: "Select the past simple of 'Write':",
      options: ["Writed", "Wrote", "Written", "Writing"],
      correctAnswer: "Wrote",
      explanationEn: "The past simple form of 'write' is 'wrote'. (Written is V3).",
      explanationHi: "'Write' का Past Simple रूप 'wrote' होता है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_011",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'We ______ (meet) our college friends in Connaught Place.'",
      correctAnswer: "met",
      explanationEn: "Past form of 'meet' is 'met'.",
      explanationHi: "'Meet' का Past Simple रूप 'met' है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_012",
      type: "multiple_choice",
      prompt: "How is the past tense of 'Read' pronounced?",
      options: ["/riːd/ (like reed)", "/red/ (like the color red)", "/reɪd/", "/raɪd/"],
      correctAnswer: "/red/ (like the color red)",
      explanationEn: "The past tense of 'read' is spelled 'read' but pronounced /red/.",
      explanationHi: "'Read' का भूतकाल रूप 'read' ही लिखा जाता है लेकिन इसका उच्चारण /red/ होता है।",
      difficulty: "medium",
      skillTag: "PHONETICS"
    },
    {
      id: "day22_ex_013",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'I ______ (leave) my keys in the office yesterday.'",
      correctAnswer: "left",
      explanationEn: "Past simple of 'leave' is 'left'.",
      explanationHi: "'Leave' का Past Simple रूप 'left' है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_014",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'उसने कल मुझे अपनी कार दी':",
      options: ["He gave me his car yesterday.", "He gived me his car yesterday.", "He was give me his car yesterday.", "He gives me his car yesterday."],
      correctAnswer: "He gave me his car yesterday.",
      explanationEn: "'Give' becomes 'gave' in past simple.",
      explanationHi: "सही वाक्य: 'He gave me his car yesterday.'",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_015",
      type: "word_reorder",
      prompt: "Arrange the words: [a delicious dinner / cooked / ate / and / we / last night]",
      options: ["We cooked and ate a delicious dinner last night.", "We ate and cooked last night a delicious dinner.", "Last night dinner delicious cooked and ate we.", "A delicious dinner we cooked and ate last night."],
      correctAnswer: "We cooked and ate a delicious dinner last night.",
      explanationEn: "Subject + verbs (cooked and ate) + object + time.",
      explanationHi: "सही क्रम: We cooked and ate a delicious dinner last night.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day22_ex_016",
      type: "error_correction",
      prompt: "Correct the mistake: 'She taked her children to the zoo on Sunday.'",
      correctAnswer: "She took her children to the zoo on Sunday.",
      explanationEn: "The past tense of 'take' is 'took', never 'taked'.",
      explanationHi: "'Take' का भूतकाल 'took' होता है, 'taked' नहीं।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day22_ex_017",
      type: "multiple_choice",
      prompt: "What is the past simple form of 'Bring'?",
      options: ["Brought", "Bought", "Bringed", "Brang"],
      correctAnswer: "Brought",
      explanationEn: "'Bring' becomes 'brought' (/brɔːt/).",
      explanationHi: "'Bring' (लाना) का Past Simple रूप 'brought' होता है।",
      difficulty: "medium",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_018",
      type: "fill_in_blank",
      prompt: "Complete the sentence: 'Aman ______ (spend) all his pocket money yesterday.'",
      correctAnswer: "spent",
      explanationEn: "Past tense of 'spend' is 'spent'.",
      explanationHi: "'Spend' का Past Simple रूप 'spent' है।",
      difficulty: "medium",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_019",
      type: "hindi_to_english",
      prompt: "Translate: 'मैंने कल एक नया लैपटॉप खरीदा।'",
      options: ["I bought a new laptop yesterday.", "I buyed a new laptop yesterday.", "I was buy a new laptop yesterday.", "I buy a new laptop yesterday."],
      correctAnswer: "I bought a new laptop yesterday.",
      explanationEn: "'मैंने खरीदा' = 'I bought'.",
      explanationHi: "सही अनुवाद: 'I bought a new laptop yesterday.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day22_ex_020",
      type: "multiple_choice",
      prompt: "Which verb changes from /iː/ to /e/ in past simple?",
      options: ["Meet -> Met", "Eat -> Ate", "Go -> Went", "See -> Saw"],
      correctAnswer: "Meet -> Met",
      explanationEn: "'Meet' (/miːt/) shifts to 'Met' (/met/).",
      explanationHi: "'Meet' का स्वर बदलकर 'Met' हो जाता है।",
      difficulty: "medium",
      skillTag: "PHONETICS"
    },
    {
      id: "day22_ex_021",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'We ______ (run) five kilometers yesterday morning.'",
      correctAnswer: "ran",
      explanationEn: "Past simple of 'run' is 'ran'.",
      explanationHi: "'Run' का Past Simple रूप 'ran' है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_022",
      type: "multiple_choice",
      prompt: "What is the past simple of 'Speak'?",
      options: ["Spoke", "Speaked", "Spoken", "Speaking"],
      correctAnswer: "Spoke",
      explanationEn: "The past simple of 'speak' is 'spoke'.",
      explanationHi: "'Speak' का Past Simple रूप 'spoke' होता है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_023",
      type: "word_reorder",
      prompt: "Order the words: [an email / to the manager / wrote / Rahul / yesterday]",
      options: ["Rahul wrote an email to the manager yesterday.", "Rahul yesterday wrote an email to the manager.", "Wrote Rahul an email to the manager yesterday.", "To the manager Rahul wrote an email yesterday."],
      correctAnswer: "Rahul wrote an email to the manager yesterday.",
      explanationEn: "Subject + V2 + Object + Prepositional phrase + Time.",
      explanationHi: "सही क्रम: Rahul wrote an email to the manager yesterday.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day22_ex_024",
      type: "error_correction",
      prompt: "Find and fix the error: 'Yesterday we seed an elephant on the road.'",
      correctAnswer: "Yesterday we saw an elephant on the road.",
      explanationEn: "'See' becomes 'saw' in the past simple, not 'seed'.",
      explanationHi: "'See' का Past Simple 'saw' होता है, 'seed' नहीं।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day22_ex_025",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'The teacher ______ (tell) us an interesting story.'",
      correctAnswer: "told",
      explanationEn: "Past tense of 'tell' is 'told'.",
      explanationHi: "'Tell' का Past Simple रूप 'told' है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_026",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'उसने दोपहर में दो केले खाए':",
      options: ["She ate two bananas in the afternoon.", "She eated two bananas in the afternoon.", "She eats two bananas in the afternoon yesterday.", "She was eat two bananas in the afternoon."],
      correctAnswer: "She ate two bananas in the afternoon.",
      explanationEn: "'Ate' is the correct past simple form.",
      explanationHi: "सही वाक्य: 'She ate two bananas in the afternoon.'",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_027",
      type: "hindi_to_english",
      prompt: "Translate: 'मैं कल अपने दोस्त से मिला।'",
      options: ["I met my friend yesterday.", "I meet my friend yesterday.", "I was meet my friend yesterday.", "I meeted my friend yesterday."],
      correctAnswer: "I met my friend yesterday.",
      explanationEn: "'मैं मिला' = 'I met'.",
      explanationHi: "सही अनुवाद: 'I met my friend yesterday.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day22_ex_028",
      type: "multiple_choice",
      prompt: "What is the past simple of 'Catch'?",
      options: ["Caught", "Catched", "Cot", "Catching"],
      correctAnswer: "Caught",
      explanationEn: "'Catch' becomes 'caught' (/kɔːt/).",
      explanationHi: "'Catch' (पकड़ना) का Past Simple रूप 'caught' होता है।",
      difficulty: "medium",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_029",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'He ______ (pay) the electricity bill online.'",
      correctAnswer: "paid",
      explanationEn: "Past tense of 'pay' is 'paid'.",
      explanationHi: "'Pay' का Past Simple रूप 'paid' होता है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_030",
      type: "multiple_choice",
      prompt: "Select the sentence with all verbs correctly in past simple:",
      options: ["I went to the store, bought milk, and came home.", "I goed to the store, buyed milk, and comed home.", "I went to the store, buyed milk, and came home.", "I was go to the store, bought milk, and came home."],
      correctAnswer: "I went to the store, bought milk, and came home.",
      explanationEn: "'Went', 'bought', and 'came' are all accurate V2 forms.",
      explanationHi: "तीनों क्रियाएँ (went, bought, came) सही V2 रूप में हैं।",
      difficulty: "medium",
      skillTag: "IRREGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day22_ex_031",
      type: "dialogue_completion",
      prompt: "Complete the sentence: Neha: 'Where were you yesterday?' Rohan: 'I ______ (go) to Gurgaon for an interview.'",
      correctAnswer: "went",
      acceptableAlternatives: ["went"],
      explanationEn: "Rohan is stating a completed past journey: 'went'.",
      explanationHi: "'Go' का भूतकाल रूप 'went' आएगा।",
      difficulty: "easy",
      skillTag: "CONVERSATIONAL_USE"
    },
    {
      id: "day22_ex_032",
      type: "spoken_response",
      prompt: "Speak aloud: State what you ate and drank for breakfast today using 'I ate...' and 'I drank...'.",
      modelResponse: "I ate toast and eggs, and I drank hot tea.",
      correctAnswer: "I ate [food] and I drank [beverage].",
      explanationEn: "Use irregular past forms 'ate' and 'drank' to describe your breakfast.",
      explanationHi: "नाश्ते के बारे में 'I ate...' और 'I drank...' बोलें।",
      difficulty: "easy",
      skillTag: "SPEAKING"
    },
    {
      id: "day22_ex_033",
      type: "recall",
      prompt: "What is the past simple of 'Go'?",
      correctAnswer: "went",
      acceptableAlternatives: ["went"],
      explanationEn: "The past simple of 'go' is 'went'.",
      explanationHi: "'Go' का Past Simple रूप 'went' होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day22_ex_034",
      type: "recall",
      prompt: "What is the past simple of 'Take'?",
      correctAnswer: "took",
      acceptableAlternatives: ["took"],
      explanationEn: "The past simple of 'take' is 'took'.",
      explanationHi: "'Take' का Past Simple रूप 'took' होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day22_ex_035",
      type: "recall",
      prompt: "What is the past simple of 'See'?",
      correctAnswer: "saw",
      acceptableAlternatives: ["saw"],
      explanationEn: "The past simple of 'see' is 'saw'.",
      explanationHi: "'See' का Past Simple रूप 'saw' होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    }
  ],
  use: {
    situation: "Catching up with a friend over coffee to discuss weekend shopping and dining experiences.",
    dialogue: {
      id: "day22_dialogue_001",
      turns: [
        { speaker: "Vikram", textEn: "Hey Ankit, what did you do on Saturday?", textHi: "अरे अंकित, तुमने शनिवार को क्या किया?" },
        { speaker: "Ankit", textEn: "I went to the mall with my brother. We bought some new shirts and shoes.", textHi: "मैं अपने भाई के साथ मॉल गया था। हमने कुछ नई शर्ट्स और जूते खरीदे।" },
        { speaker: "Vikram", textEn: "Nice! Did you eat lunch there?", textHi: "बहुत बढ़िया! क्या तुमने वहाँ दोपहर का खाना खाया?" },
        { speaker: "Ankit", textEn: "Yes, we ate pizza at an Italian restaurant and drank fresh mango juice. Then we saw a movie.", textHi: "हाँ, हमने एक इटैलियन रेस्टोरेंट में पिज़्ज़ा खाया और ताज़ा आम का जूस पिया। फिर हमने एक फ़िल्म देखी।" },
        { speaker: "Vikram", textEn: "Sounds like you had a great day! I stayed home and wrote my weekly report.", textHi: "लगता है तुम्हारा दिन बहुत अच्छा बीता! मैं घर पर रुका और अपनी साप्ताहिक रिपोर्ट लिखी।" }
      ]
    },
    speakingTask: {
      promptEn: "Tell a short 3-sentence story about your last shopping trip or outing using at least 3 irregular verbs (went, bought, ate, saw, met).",
      promptHi: "कम से कम 3 irregular क्रियाओं (went, bought, ate, saw, met) का उपयोग करके अपनी पिछली खरीदारी या यात्रा के बारे में 3 वाक्यों की कहानी बोलें।"
    }
  },
  assess: [
    { id: "day22_assess_001", question: "Why is 'I goed to the market and buyed fruit' incorrect in English?", answer: "Because 'go' and 'buy' are irregular verbs; their past simple forms are 'went' and 'bought', never with '-ed'.", skill: "Irregular Verb Accuracy" },
    { id: "day22_assess_002", question: "How does the pronunciation of 'READ' change between present tense and past tense?", answer: "Present tense 'read' is pronounced /riːd/ (rhymes with seed), while past tense 'read' is pronounced /red/ (rhymes with red).", skill: "Phonetic Differentiation" },
    { id: "day22_assess_003", question: "Give the past simple forms of: Catch, Bring, and Teach.", answer: "Caught (/kɔːt/), Brought (/brɔːt/), and Taught (/tɔːt/).", skill: "Ought/Aught Morphological Pattern" }
  ],
  review: {
    spacedRepetitionTag: "IRREGULAR_PAST_SIMPLE_V2",
    recommendedIntervalDays: [1, 3, 7, 14]
  }
};

// Day 23: Past Simple Negative (Didn't + Base Verb V1 & Eliminating Double Past Traps)
const day23 = {
  dayNumber: 23,
  id: "day_23",
  titleEn: "Past Simple Negative (Didn't + Base Verb V1 & Eliminating Double Past Traps)",
  titleHi: "भूतकाल के नकारात्मक वाक्य (Didn't + क्रिया का मूल रूप V1 और Double Past की गलतियों से बचाव)",
  cefr: "A1.2",
  estMinutes: 30,
  prerequisites: "Day 21–22 (Past Simple Regular & Irregular)",
  objectivesEn: [
    "Form accurate negative sentences in the past simple using 'did not / didn't + Base Verb (V1)' across all subjects.",
    "Master the non-negotiable rule: the main verb MUST revert to its base form (V1) after 'didn't'.",
    "Eliminate the pervasive double-past error (saying '*didn't went*', '*didn't called*', or '*didn't bought*').",
    "Express negative past possession correctly using 'didn't have' (eliminating '*didn't had*')."
  ],
  objectivesHi: [
    "सभी कर्ताओं के साथ 'didn't + क्रिया का मूल रूप (V1)' का प्रयोग करके भूतकाल के नकारात्मक वाक्य बनाना।",
    "यह नियम पक्का करना कि 'didn't' आने पर मुख्य क्रिया हमेशा अपने मूल रूप (V1) में लौट आती है।",
    "अक्सर होने वाली 'Double Past' की गलती (जैसे '*didn't went*', '*didn't saw*') को पूरी तरह समाप्त करना।",
    "भूतकाल में किसी चीज़ के न होने पर 'didn't have' का सही प्रयोग करना ('*didn't had*' से बचना)।"
  ],
  teach: {
    hindiExplanation: "जब हम भूतकाल में कोई काम 'नहीं किया' की बात करते हैं (जैसे: 'मैं कल नहीं गया', 'उसने मुझे फ़ोन नहीं किया', 'हमने खाना नहीं खाया'), तो अंग्रेज़ी में सहायक क्रिया 'Did' के साथ 'Not' जोड़कर 'Didn't' का प्रयोग करते हैं। सबसे महत्वपूर्ण नियम: चूँकि 'Did' पहले से ही भूतकाल (Do का V2) दर्शा रहा है, इसलिए इसके बाद आने वाली मुख्य क्रिया हमेशा अपने मूल रूप (Base Form V1) में आती है! कभी भी 'didn't' के बाद V2 न लगाएँ—'*I didn't went*' बोलना बिल्कुल गलत है, सही वाक्य होगा: 'I didn't go'!",
    englishExplanation: "To negate an action in the Past Simple, we use the auxiliary operator DID + NOT (contracted as 'didn't') followed by the BASE FORM of the verb (V1). Because 'did' already carries the past tense marker, the main verb must strictly revert to its bare infinitive form. This rule applies uniformly to all subjects (I, you, he, she, it, we, they) and to both regular and irregular verbs. Saying '*didn't went*' or '*didn't worked*' is known as the 'Double Past Error' and is ungrammatical.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Uniform Auxiliary 'Didn't' for All Subjects",
        description: "The negative auxiliary in the past simple is universally 'didn't' (did not) for all pronouns: I didn't, you didn't, he didn't, we didn't, they didn't.",
        register: "Universal Syntax Rule"
      },
      {
        ruleNumber: 2,
        title: "The Absolute Base Verb Principle (Didn't + V1)",
        description: "After 'didn't', the main lexical verb MUST return to V1 base form. Correct: 'She didn't call.' Incorrect: '*She didn't called.*' Correct: 'I didn't see.' Incorrect: '*I didn't saw.*'",
        register: "Core Grammatical Invariant"
      },
      {
        ruleNumber: 3,
        title: "Negative Past Possession (Didn't Have)",
        description: "To express absence of possession in the past, use 'didn't have'. Correct: 'We didn't have enough money.' Never say: '*We didn't had money.*'",
        register: "Standard Usage"
      },
      {
        ruleNumber: 4,
        title: "BE Verb Past Negation (Wasn't / Weren't) Contrast",
        description: "Do not use 'didn't' with states of being. Say 'I wasn't ready' (state), NOT '*I didn't ready*'. Use 'didn't' only with dynamic action verbs.",
        register: "Structural Discrimination"
      }
    ],
    formulaTable: [
      { subjectGroup: "Regular Action Verbs", formula: "Subject + didn't + Base Verb (V1) + [Object] + [Time]", exampleEn: "He didn't clean his room yesterday.", meaningHi: "उसने कल अपना कमरा साफ़ नहीं किया।" },
      { subjectGroup: "Irregular Action Verbs", formula: "Subject + didn't + Base Verb (V1) + [Object]", exampleEn: "I didn't go to the market.", meaningHi: "मैं बाज़ार नहीं गया।" },
      { subjectGroup: "Past Possession Negation", formula: "Subject + didn't have + [Noun Object]", exampleEn: "She didn't have her ID card.", meaningHi: "उसके पास उसका पहचान पत्र नहीं था।" },
      { subjectGroup: "Past State (BE Verb Contrast)", formula: "Subject + wasn't / weren't + [Adjective/Noun]", exampleEn: "They weren't at home last night.", meaningHi: "वे कल रात घर पर नहीं थे।" }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The Double Past Error ('didn't went', 'didn't told') and using 'not' directly",
      hindiPattern: "हिन्दी में 'मैं नहीं गया' में 'गया' (भूतकाल) रहता है, इसलिए भारतीय शिक्षार्थी अंग्रेज़ी में 'didn't' के बाद भी भूतकाल क्रिया 'went' या 'called' बोल देते हैं।",
      potentialInterference: "Saying '*I didn't went there*' or '*She didn't informed me*'.",
      explanation: "English grammar allows only ONE past tense marker per simple predicate. 'Did' already carries the past inflection, so the main verb must be stripped to base V1.",
      naturalSolution: "Always say 'I didn't go' and 'She didn't inform me'."
    }
  },
  learn: {
    vocabulary: [
      { id: "day23_vocab_001", word: "Hear", pos: "Verb", ipa: "/hɪər/", meaningHi: "सुनना", exampleEn: "I didn't hear the doorbell ring.", exampleHi: "मैंने दरवाज़े की घंटी बजते नहीं सुनी।" },
      { id: "day23_vocab_002", word: "Find", pos: "Verb", ipa: "/faɪnd/", meaningHi: "पाना / मिलना", exampleEn: "He didn't find his lost car keys.", exampleHi: "उसे अपनी खोई हुई कार की चाबियाँ नहीं मिलीं।" },
      { id: "day23_vocab_003", word: "Receive", pos: "Verb", ipa: "/rɪˈsiːv/", meaningHi: "प्राप्त करना / मिलना", exampleEn: "We didn't receive your email yesterday.", exampleHi: "हमें कल आपका ईमेल प्राप्त नहीं हुआ।" },
      { id: "day23_vocab_004", word: "Sleep", pos: "Verb", ipa: "/sliːp/", meaningHi: "सोना", exampleEn: "She didn't sleep well last night.", exampleHi: "वह कल रात ठीक से नहीं सोई।" },
      { id: "day23_vocab_005", word: "Attend", pos: "Verb", ipa: "/əˈtend/", meaningHi: "उपस्थित होना / भाग लेना", exampleEn: "Rohan didn't attend the meeting on Monday.", exampleHi: "रोहन सोमवार को मीटिंग में शामिल नहीं हुआ।" },
      { id: "day23_vocab_006", word: "Spend", pos: "Verb", ipa: "/spend/", meaningHi: "खर्च करना / बिताना", exampleEn: "They didn't spend much money on shopping.", exampleHi: "उन्होंने खरीदारी पर ज़्यादा पैसे खर्च नहीं किए।" },
      { id: "day23_vocab_007", word: "Leave", pos: "Verb", ipa: "/liːv/", meaningHi: "निकलना / छोड़ना", exampleEn: "The train didn't leave on schedule.", exampleHi: "ट्रेन तय समय पर नहीं निकली।" },
      { id: "day23_vocab_008", word: "Answer", pos: "Verb", ipa: "/ˈɑːn.sər/", meaningHi: "उत्तर देना / फ़ोन उठाना", exampleEn: "She didn't answer my phone call.", exampleHi: "उसने मेरा फ़ोन नहीं उठाया।" },
      { id: "day23_vocab_009", word: "Bring", pos: "Verb", ipa: "/brɪŋ/", meaningHi: "लाना", exampleEn: "I didn't bring my umbrella today.", exampleHi: "मैं आज अपना छाता नहीं लाया।" },
      { id: "day23_vocab_010", word: "Pay", pos: "Verb", ipa: "/peɪ/", meaningHi: "भुगतान करना / चुकाना", exampleEn: "He didn't pay the bill at the restaurant.", exampleHi: "उसने रेस्टोरेंट में बिल का भुगतान नहीं किया।" }
    ],
    phrases: [
      { id: "day23_phrase_001", phrase: "I didn't know that.", register: "Conversational", meaningHi: "मुझे वह नहीं पता था।" },
      { id: "day23_phrase_002", phrase: "She didn't answer my call.", register: "Conversational", meaningHi: "उसने मेरा फ़ोन नहीं उठाया।" },
      { id: "day23_phrase_003", phrase: "We didn't have enough time.", register: "Conversational", meaningHi: "हमारे पास पर्याप्त समय नहीं था।" },
      { id: "day23_phrase_004", phrase: "He didn't come to work.", register: "Conversational", meaningHi: "वह काम पर नहीं आया।" },
      { id: "day23_phrase_005", phrase: "I didn't receive your message.", register: "Conversational", meaningHi: "मुझे आपका संदेश नहीं मिला।" },
      { id: "day23_phrase_006", phrase: "They didn't buy anything.", register: "Conversational", meaningHi: "उन्होंने कुछ भी नहीं खरीदा।" }
    ]
  },
  examples: [
    { id: "day23_example_001", en: "I didn't go to the gym yesterday.", hi: "मैं कल जिम नहीं गया।" },
    { id: "day23_example_002", en: "She didn't call me back last night.", hi: "उसने कल रात मुझे वापस फ़ोन नहीं किया।" },
    { id: "day23_example_003", en: "We didn't see any wild animals in the forest.", hi: "हमने जंगल में कोई जंगली जानवर नहीं देखा।" },
    { id: "day23_example_004", en: "Rahul didn't eat breakfast this morning.", hi: "राहुल ने आज सुबह नाश्ता नहीं किया।" },
    { id: "day23_example_005", en: "They didn't buy the expensive tickets.", hi: "उन्होंने महंगे टिकट नहीं खरीदे।" },
    { id: "day23_example_006", en: "I didn't have my wallet with me.", hi: "मेरे पास मेरा बटुआ नहीं था।" },
    { id: "day23_example_007", en: "The bus didn't stop at our gate.", hi: "बस हमारे गेट पर नहीं रुकी।" },
    { id: "day23_example_008", en: "She didn't understand the teacher's instructions.", hi: "उसे शिक्षक के निर्देश समझ नहीं आए।" },
    { id: "day23_example_009", en: "My parents didn't watch TV last evening.", hi: "मेरे माता-पिता ने कल शाम टीवी नहीं देखा।" },
    { id: "day23_example_010", en: "He didn't write the final exam.", hi: "उसने अंतिम परीक्षा नहीं लिखी।" },
    { id: "day23_example_011", en: "We didn't take any photographs at the museum.", hi: "हमने संग्रहालय में कोई तस्वीरें नहीं लीं।" },
    { id: "day23_example_012", en: "I didn't feel well yesterday afternoon.", hi: "कल दोपहर मेरी तबीयत ठीक नहीं लग रही थी।" }
  ],
  pronunciation: {
    targetSounds: ["Contracted /ˈdɪd.ənt/ with reduced schwa or glottal stop", "Clean transition between 'didn't' and following base verb"],
    traps: "Do not separate 'did not' heavily in natural conversation. 'Didn't' is pronounced as two quick syllables /ˈdɪd.ənt/ or /dɪdnt/.",
    drills: [
      { id: "day23_audio_001", voiceRole: "TEACHER", audioType: "drill", text: "I didn't go, and she didn't call." },
      { id: "day23_audio_002", voiceRole: "TEACHER", audioType: "drill", text: "We didn't have enough time yesterday." },
      { id: "day23_audio_003", voiceRole: "TEACHER", audioType: "drill", text: "He didn't see the email this morning." },
      { id: "day23_audio_004", voiceRole: "TEACHER", audioType: "drill", text: "They didn't buy anything from that shop." }
    ]
  },
  practice: [
    {
      id: "day23_ex_001",
      type: "multiple_choice",
      prompt: "Choose the grammatically CORRECT sentence for 'मैं कल दफ़्तर नहीं गया':",
      options: ["I didn't went to the office yesterday.", "I didn't go to the office yesterday.", "I not went to the office yesterday.", "I didn't goes to the office yesterday."],
      correctAnswer: "I didn't go to the office yesterday.",
      explanationEn: "After 'didn't', the verb must be in its base form 'go' (V1).",
      explanationHi: "'Didn't' के बाद हमेशा क्रिया का मूल रूप 'go' आता है, 'went' कभी नहीं।",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_002",
      type: "multiple_choice",
      prompt: "Which sentence correctly eliminates the Double Past Error?",
      options: ["She didn't called me.", "She didn't call me.", "She didn't calls me.", "She not call me."],
      correctAnswer: "She didn't call me.",
      explanationEn: "'Didn't call' is correct because 'did' already signals past tense.",
      explanationHi: "'Didn't' के बाद V1 'call' सही है।",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_003",
      type: "fill_in_blank",
      prompt: "Complete the sentence with the base verb of (eat): 'Rohan didn't ______ anything all morning.'",
      correctAnswer: "eat",
      explanationEn: "The base form after 'didn't' is 'eat', not 'ate'.",
      explanationHi: "'Didn't' के बाद 'eat' आएगा, 'ate' नहीं।",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_004",
      type: "multiple_choice",
      prompt: "How do you express negative past possession: 'हमारे पास पैसे नहीं थे'?",
      options: ["We didn't had money.", "We didn't have money.", "We not had money.", "We hadn't no money."],
      correctAnswer: "We didn't have money.",
      explanationEn: "Negative past possession uses 'didn't have' (base form 'have').",
      explanationHi: "भूतकाल के नकारात्मक स्वामित्व में 'didn't have' का प्रयोग होता है।",
      difficulty: "medium",
      skillTag: "PAST_POSSESSION_NEGATION"
    },
    {
      id: "day23_ex_005",
      type: "word_reorder",
      prompt: "Put the words in correct order: [yesterday / receive / we / your message / didn't]",
      options: ["We didn't receive your message yesterday.", "We didn't your message receive yesterday.", "Yesterday didn't we receive your message.", "We received not your message yesterday."],
      correctAnswer: "We didn't receive your message yesterday.",
      explanationEn: "Subject (We) + didn't + V1 (receive) + object (your message) + time (yesterday).",
      explanationHi: "सही क्रम: We didn't receive your message yesterday.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day23_ex_006",
      type: "error_correction",
      prompt: "Identify and correct the mistake: 'I didn't saw the traffic signal.'",
      correctAnswer: "I didn't see the traffic signal.",
      explanationEn: "'Saw' must revert to the base form 'see' after 'didn't'.",
      explanationHi: "'Didn't' के बाद 'saw' बदलकर मूल रूप 'see' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day23_ex_007",
      type: "hindi_to_english",
      prompt: "Translate into English: 'उसने कल रात खाना नहीं पकाया।'",
      options: ["She didn't cook food last night.", "She didn't cooked food last night.", "She was not cook food last night.", "She not cook food last night."],
      correctAnswer: "She didn't cook food last night.",
      explanationEn: "'Didn't cook' with base verb V1.",
      explanationHi: "सही अनुवाद: 'She didn't cook food last night.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day23_ex_008",
      type: "english_to_hindi",
      prompt: "What is the Hindi meaning of: 'They didn't understand the question'?",
      options: ["उन्हें सवाल समझ नहीं आया।", "वे सवाल पूछना नहीं चाहते थे।", "उन्होंने सवाल का जवाब दिया।", "उन्हें सवाल आसान लगा।"],
      correctAnswer: "उन्हें सवाल समझ नहीं आया।",
      explanationEn: "'Didn't understand' means 'समझ नहीं आया'.",
      explanationHi: "सही अर्थ: 'उन्हें सवाल समझ नहीं आया।'",
      difficulty: "easy",
      skillTag: "TRANSLATION_EN_HI"
    },
    {
      id: "day23_ex_009",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'He didn't ______ (buy) the train ticket yesterday.'",
      correctAnswer: "buy",
      explanationEn: "Base verb 'buy' is used after 'didn't'.",
      explanationHi: "'Didn't' के बाद मूल क्रिया 'buy' आएगी।",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_010",
      type: "multiple_choice",
      prompt: "Select the sentence that is grammatically WRONG:",
      options: ["She didn't tell me the truth.", "He didn't brought his laptop.", "We didn't take any pictures.", "I didn't sleep well."],
      correctAnswer: "He didn't brought his laptop.",
      explanationEn: "'Didn't brought' is an error; it must be 'didn't bring'.",
      explanationHi: "'Didn't brought' गलत है, सही 'didn't bring' होना चाहिए।",
      difficulty: "medium",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day23_ex_011",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'I didn't ______ (know) the answer to that math question.'",
      correctAnswer: "know",
      explanationEn: "Base form 'know' after 'didn't'.",
      explanationHi: "'Didn't' के बाद 'know' आता है।",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_012",
      type: "multiple_choice",
      prompt: "Which negative form is used with stative BE verbs in the past?",
      options: ["Didn't be", "Wasn't / Weren't", "Didn't was", "Not was"],
      correctAnswer: "Wasn't / Weren't",
      explanationEn: "Stative BE verbs use 'wasn't' or 'weren't', not 'didn't'.",
      explanationHi: "BE क्रियाओं के लिए 'wasn't/weren't' का प्रयोग होता है।",
      difficulty: "medium",
      skillTag: "CONTRASTIVE_GRAMMAR"
    },
    {
      id: "day23_ex_013",
      type: "word_reorder",
      prompt: "Reorder the words: [my phone / answer / she / last night / didn't]",
      options: ["She didn't answer my phone last night.", "She didn't my phone answer last night.", "Last night answer she didn't my phone.", "She answer didn't my phone last night."],
      correctAnswer: "She didn't answer my phone last night.",
      explanationEn: "Subject + didn't + V1 + object + time.",
      explanationHi: "सही क्रम: She didn't answer my phone last night.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day23_ex_014",
      type: "error_correction",
      prompt: "Correct the sentence: 'We didn't went to Goa last year.'",
      correctAnswer: "We didn't go to Goa last year.",
      explanationEn: "Revert 'went' to 'go' after 'didn't'.",
      explanationHi: "'Didn't' के बाद 'went' की जगह 'go' आएगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day23_ex_015",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'रोहन ने कल परीक्षा नहीं दी':",
      options: ["Rohan didn't take the exam yesterday.", "Rohan didn't took the exam yesterday.", "Rohan not took the exam yesterday.", "Rohan wasn't take the exam yesterday."],
      correctAnswer: "Rohan didn't take the exam yesterday.",
      explanationEn: "'Didn't take' with V1 base verb.",
      explanationHi: "सही वाक्य: 'Rohan didn't take the exam yesterday.'",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_016",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'They didn't ______ (leave) the party early.'",
      correctAnswer: "leave",
      explanationEn: "Base verb 'leave' is required.",
      explanationHi: "'Didn't' के बाद 'leave' आएगा।",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_017",
      type: "hindi_to_english",
      prompt: "Translate: 'मुझे आपका संदेश नहीं मिला।'",
      options: ["I didn't receive your message.", "I didn't received your message.", "I was not receive your message.", "I not received your message."],
      correctAnswer: "I didn't receive your message.",
      explanationEn: "Correct translation: 'I didn't receive your message.'",
      explanationHi: "सही अनुवाद: 'I didn't receive your message.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day23_ex_018",
      type: "multiple_choice",
      prompt: "Which sentence correctly expresses absence of time yesterday?",
      options: ["I didn't have time yesterday.", "I didn't had time yesterday.", "I not have time yesterday.", "I had no not time yesterday."],
      correctAnswer: "I didn't have time yesterday.",
      explanationEn: "'Didn't have' uses the base form 'have'.",
      explanationHi: "'Didn't have' बिल्कुल सही है।",
      difficulty: "easy",
      skillTag: "PAST_POSSESSION_NEGATION"
    },
    {
      id: "day23_ex_019",
      type: "error_correction",
      prompt: "Fix the mistake: 'My brother didn't came home for dinner.'",
      correctAnswer: "My brother didn't come home for dinner.",
      explanationEn: "'Came' must be replaced by 'come' after 'didn't'.",
      explanationHi: "'Didn't' के बाद 'came' बदलकर 'come' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day23_ex_020",
      type: "fill_in_blank",
      prompt: "Complete the sentence: 'The doctor didn't ______ (come) to the clinic yesterday.'",
      correctAnswer: "come",
      explanationEn: "Base form 'come'.",
      explanationHi: "'Didn't' के बाद 'come' आएगा।",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_021",
      type: "multiple_choice",
      prompt: "Select the sentence with ACCURATE past negation:",
      options: ["We didn't spend any money at the fair.", "We didn't spent any money at the fair.", "We not spent any money at the fair.", "We wasn't spend any money at the fair."],
      correctAnswer: "We didn't spend any money at the fair.",
      explanationEn: "'Didn't spend' uses base verb 'spend'.",
      explanationHi: "'Didn't spend' पूर्णतः शुद्ध वाक्य है।",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_022",
      type: "word_reorder",
      prompt: "Arrange in order: [the loud noise / didn't / hear / I]",
      options: ["I didn't hear the loud noise.", "I hear didn't the loud noise.", "The loud noise didn't I hear.", "Didn't I hear the loud noise."],
      correctAnswer: "I didn't hear the loud noise.",
      explanationEn: "Subject (I) + didn't + V1 (hear) + object (the loud noise).",
      explanationHi: "सही क्रम: I didn't hear the loud noise.",
      difficulty: "easy",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day23_ex_023",
      type: "error_correction",
      prompt: "Identify and fix the error: 'She didn't paid the electricity bill.'",
      correctAnswer: "She didn't pay the electricity bill.",
      explanationEn: "'Paid' must revert to 'pay' after 'didn't'.",
      explanationHi: "'Didn't' के बाद 'paid' बदलकर 'pay' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day23_ex_024",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'I ______ (not / sleep) well because of the storm.'",
      correctAnswer: "didn't sleep",
      acceptableAlternatives: ["did not sleep"],
      explanationEn: "Past simple negative of 'sleep' is 'didn't sleep'.",
      explanationHi: "'Sleep' का Past Simple Negative 'didn't sleep' है।",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_025",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'वे बैठक में शामिल नहीं हुए':",
      options: ["They didn't attend the meeting.", "They didn't attended the meeting.", "They not attend the meeting.", "They wasn't attend the meeting."],
      correctAnswer: "They didn't attend the meeting.",
      explanationEn: "'Didn't attend' with base verb V1.",
      explanationHi: "सही वाक्य: 'They didn't attend the meeting.'",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_026",
      type: "hindi_to_english",
      prompt: "Translate: 'उसने मुझे सच नहीं बताया।'",
      options: ["He didn't tell me the truth.", "He didn't told me the truth.", "He not tell me the truth.", "He was not tell me the truth."],
      correctAnswer: "He didn't tell me the truth.",
      explanationEn: "'Didn't tell' with base verb V1.",
      explanationHi: "सही अनुवाद: 'He didn't tell me the truth.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day23_ex_027",
      type: "error_correction",
      prompt: "Fix the error: 'The bus driver didn't stopped at the red light.'",
      correctAnswer: "The bus driver didn't stop at the red light.",
      explanationEn: "'Stopped' must revert to 'stop' after 'didn't'.",
      explanationHi: "'Didn't' के बाद 'stopped' बदलकर 'stop' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day23_ex_028",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'We didn't ______ (find) any parking space near the mall.'",
      correctAnswer: "find",
      explanationEn: "Base verb 'find'.",
      explanationHi: "'Didn't' के बाद 'find' आएगा।",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_029",
      type: "multiple_choice",
      prompt: "Which pair correctly contrasts affirmative and negative past?",
      options: ["I went -> I didn't go", "I went -> I didn't went", "I ate -> I didn't ate", "I bought -> I didn't bought"],
      correctAnswer: "I went -> I didn't go",
      explanationEn: "Affirmative 'went' inverts to negative 'didn't go'.",
      explanationHi: "'I went' का नकारात्मक 'I didn't go' होता है।",
      difficulty: "easy",
      skillTag: "PAST_SIMPLE_NEGATION"
    },
    {
      id: "day23_ex_030",
      type: "word_reorder",
      prompt: "Reorder: [yesterday / didn't / he / his medicine / take]",
      options: ["He didn't take his medicine yesterday.", "He didn't his medicine take yesterday.", "Yesterday take didn't he his medicine.", "He took not his medicine yesterday."],
      correctAnswer: "He didn't take his medicine yesterday.",
      explanationEn: "Subject + didn't + V1 + Object + Time.",
      explanationHi: "सही क्रम: He didn't take his medicine yesterday.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day23_ex_031",
      type: "dialogue_completion",
      prompt: "Complete the dialogue: Manager: 'Why isn't the report submitted?' Employee: 'I am sorry, sir. My computer broke down, so I ______ (not / finish) it yesterday.'",
      correctAnswer: "didn't finish",
      acceptableAlternatives: ["did not finish"],
      explanationEn: "Use past negative 'didn't finish'.",
      explanationHi: "कल के काम के लिए 'didn't finish' आएगा।",
      difficulty: "easy",
      skillTag: "CONVERSATIONAL_USE"
    },
    {
      id: "day23_ex_032",
      type: "spoken_response",
      prompt: "Speak aloud: State two things you did NOT do yesterday using 'Yesterday, I didn't go...' or 'Yesterday, I didn't watch...'.",
      modelResponse: "Yesterday, I didn't watch TV, and I didn't go to the market.",
      correctAnswer: "Yesterday, I didn't [V1 verb] and I didn't [V1 verb].",
      explanationEn: "Use 'didn't + V1' to describe actions you did not perform yesterday.",
      explanationHi: "'Yesterday, I didn't [V1 verb]...' बोलकर दो वाक्य बताएं।",
      difficulty: "easy",
      skillTag: "SPEAKING"
    },
    {
      id: "day23_ex_033",
      type: "recall",
      prompt: "What is the negative form of 'She bought a car'?",
      correctAnswer: "She didn't buy a car.",
      acceptableAlternatives: ["She did not buy a car."],
      explanationEn: "'Bought' changes to 'didn't buy'.",
      explanationHi: "'She bought a car' का नकारात्मक 'She didn't buy a car' होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day23_ex_034",
      type: "recall",
      prompt: "What is the negative form of 'We had a meeting'?",
      correctAnswer: "We didn't have a meeting.",
      acceptableAlternatives: ["We did not have a meeting."],
      explanationEn: "'Had' becomes 'didn't have'.",
      explanationHi: "'We had a meeting' का नकारात्मक 'We didn't have a meeting' होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day23_ex_035",
      type: "recall",
      prompt: "What is the negative form of 'He saw the doctor'?",
      correctAnswer: "He didn't see the doctor.",
      acceptableAlternatives: ["He did not see the doctor."],
      explanationEn: "'Saw' becomes 'didn't see'.",
      explanationHi: "'He saw the doctor' का नकारात्मक 'He didn't see the doctor' होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    }
  ],
  use: {
    situation: "Two colleagues discussing why a project deliverable was delayed and clarifying misunderstandings.",
    dialogue: {
      id: "day23_dialogue_001",
      turns: [
        { speaker: "Meera", textEn: "Karan, why didn't you attend the client meeting yesterday afternoon?", textHi: "करण, तुम कल दोपहर क्लाइंट मीटिंग में क्यों नहीं आए?" },
        { speaker: "Karan", textEn: "I am really sorry, Meera. I didn't receive the calendar invite on my phone.", textHi: "मुझे सचमुच खेद है, मीरा। मुझे अपने फ़ोन पर कैलेंडर आमंत्रण नहीं मिला था।" },
        { speaker: "Meera", textEn: "Oh, I see. Did you call Rahul to ask for the notes?", textHi: "अरे, समझी। क्या तुमने राहुल को फ़ोन करके नोट्स माँगे?" },
        { speaker: "Karan", textEn: "I called him twice, but he didn't answer his phone. So I didn't know the new project deadlines.", textHi: "मैंने उसे दो बार फ़ोन किया, लेकिन उसने फ़ोन नहीं उठाया। इसलिए मुझे प्रोजेक्ट की नई समय-सीमा का पता नहीं चला।" },
        { speaker: "Meera", textEn: "Don't worry. I have the summary document right here. We didn't finalize everything yet.", textHi: "चिंता मत करो। मेरे पास सारांश दस्तावेज़ यहीं है। हमने अभी सब कुछ अंतिम रूप से तय नहीं किया है।" }
      ]
    },
    speakingTask: {
      promptEn: "Describe 3 things that you did NOT do yesterday using 'didn't + V1' (e.g. didn't go, didn't eat, didn't call, didn't watch).",
      promptHi: "कल आपने जो 3 काम नहीं किए, उनके बारे में 'didn't + V1' का उपयोग करके 3 वाक्य बोलें।"
    }
  },
  assess: [
    { id: "day23_assess_001", question: "What is the 'Double Past Error' and why is 'I didn't went' incorrect?", answer: "The Double Past Error occurs when both the auxiliary 'didn't' and the main verb are in past tense. 'Didn't' already marks the past, so the main verb must remain in its base form 'go'.", skill: "Syntax Integrity" },
    { id: "day23_assess_002", question: "How do you correctly negate past possession: 'He had a laptop'?", answer: "He didn't have a laptop (using base form 'have', never '*didn't had*').", skill: "Possession Accuracy" },
    { id: "day23_assess_003", question: "What is the difference between 'I wasn't hungry' and 'I didn't eat'?", answer: "'Wasn't hungry' negates a past state/adjective (BE verb), while 'didn't eat' negates a past dynamic action verb.", skill: "Grammar Discrimination" }
  ],
  review: {
    spacedRepetitionTag: "PAST_SIMPLE_NEGATION_DIDNT",
    recommendedIntervalDays: [1, 3, 7, 14]
  }
};

// Write files
fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day22.js'), `export const day22 = ${JSON.stringify(day22, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Wrote day22.js");

fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day23.js'), `export const day23 = ${JSON.stringify(day23, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Wrote day23.js");
