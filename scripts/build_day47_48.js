import fs from 'fs';
import path from 'path';

// DAY 47: Weather, Seasons, Climate & Environmental Conditions
const day47 = {
  dayNumber: 47,
  id: "day_47",
  titleEn: "Weather, Seasons, Climate & Environmental Conditions",
  titleHi: "मौसम, ऋतुएँ, जलवायु एवं पर्यावरणीय परिस्थितियाँ",
  cefr: "A2.2",
  estMinutes: 40,
  prerequisites: "Day 46 (Pharmacy & Medical Specialists)",
  objectivesEn: [
    "Distinguish clearly between transient meteorological 'weather' and long-term regional 'climate'.",
    "Describe varied weather conditions with precise meteorological adjectives (overcast, sweltering, muggy, freezing, drizzling, torrential).",
    "Engage naturally in weather-based social discourse, small talk, and forecast interpretations.",
    "Discuss ecological and environmental issues (renewable energy, carbon footprint, deforestation, climate change).",
    "Eliminate subcontinental weather errors such as confusing '*climate*' with '*weather*' and misuse of '*too hot*'."
  ],
  objectivesHi: [
    "अल्पकालिक मौसम ('Weather') और दीर्घकालिक जलवायु ('Climate') के बीच स्पष्ट अंतर समझना।",
    "मौसम की विभिन्न परिस्थितियों का सटीक विशेषणों (Overcast, Sweltering, Muggy, Torrential downpour) से वर्णन करना।",
    "मौसम पर आधारित सामाजिक बातचीत (Small Talk) और मौसम के पूर्वानुमान (Forecast) पर आत्मविश्वास से चर्चा करना।",
    "पर्यावरणीय मुद्दों (Climate change, Carbon footprint, Renewable energy, Deforestation) पर विचार व्यक्त करना।",
    "हिंदी-अंग्रेजी की सामान्य गलतियों ('Climate is good today', 'too hot') को मानक अंग्रेजी में बदलना।"
  ],
  teach: {
    hindiExplanation: "दिन 47 में हम मौसम (Weather), ऋतुओं (Seasons), जलवायु (Climate) और पर्यावरण से संबंधित अंग्रेजी पर महारत हासिल करेंगे।\n\n1. Weather बनाम Climate का अंतर:\n   - 'Weather' (मौसम): किसी खास दिन या समय का अल्पकालिक वातावरण (उदा. 'The weather is pleasant today')।\n   - 'Climate' (जलवायु): किसी क्षेत्र का कई वर्षों का दीर्घकालिक औसत मौसम (उदा. 'The desert has an arid climate')। कभी यह न कहें '*Today the climate is very nice*'।\n2. मौसम के सटीक विशेषण (Weather Adjectives):\n   - 'Sweltering / Scorching' (भीषण गर्मी / तपती धूप)\n   - 'Freezing / Chilly' (कड़ाके की ठंड / ठिठुरन)\n   - 'Humid / Muggy' (उमस भरा)\n   - 'Overcast' (बादलों से घिरा हुआ / घटाटोप)\n   - 'Drizzle' (हल्की बूंदाबांदी) बनाम 'Torrential downpour' (मूसलाधार बारिश)\n3. 'Too' बनाम 'Very': 'Too hot' का अर्थ है 'असहनीय रूप से गर्म' (नकारात्मक)। यदि आप केवल बहुत गर्मी बताना चाहते हैं, तो 'Very hot' या 'Extremely hot' कहें।\n4. मौसम पर बातचीत (Small Talk): 'Looks like it's going to rain', 'Bit nippy today, isn't it?', 'What's the forecast for tomorrow?'।\n5. पर्यावरण और जलवायु परिवर्तन (Environmental Terms): 'Global warming', 'Carbon footprint' (कार्बन उत्सर्जन प्रभाव), 'Renewable energy' (नवीकरणीय ऊर्जा), 'Drought' (सूखा)।",
    englishExplanation: "Welcome to Day 47! Today's lesson explores meteorology, seasonal shifts, atmospheric phenomena, environmental discourse, and small-talk pragmatics.\n\nKey meteorological competencies:\n1. The Weather vs Climate Dichotomy: Strict conceptual and lexical separation between localized, daily atmospheric conditions ('weather') and multi-decade regional patterns ('climate').\n2. Granular Atmospheric Vocabulary: Expanding beyond basic 'hot/cold' to nuanced sensory descriptors ('scorching', 'sweltering', 'muggy', 'brisk', 'freezing', 'gale-force winds').\n3. Precipitation Scales: Classifying rainfall from light mist and 'drizzle' to 'scattered showers', 'downpours', and 'torrential deluges'.\n4. Conversational Social Function: Weather commentary as the universal phatic icebreaker across English-speaking cultures.\n5. Eliminating Subcontinental False Analogies: Correcting '*today's climate*', excessive misuse of '*too*', and unidiomatic rain expressions.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Weather Dummy Pronoun 'It'",
        description: "Atmospheric statements require the impersonal dummy pronoun 'it': 'It is drizzling', 'It rained heavily last night', 'It looks overcast'. Avoid omitting the dummy subject.",
        register: "Impersonal Syntax"
      },
      {
        ruleNumber: 2,
        title: "The Intensive 'Very' vs Excessive 'Too'",
        description: "'Very hot' expresses high temperature neutrally. 'Too hot' signifies an undesirable excess that prevents an action ('It is too hot to play outside'). Avoid using 'too' as a mere positive booster.",
        register: "Degree Adverbs"
      },
      {
        ruleNumber: 3,
        title: "Inchoative State Verbs with Weather",
        description: "Use 'getting' or 'turning' to denote gradual atmospheric changes: 'It is getting chilly', 'The sky is turning overcast', 'The winds are picking up'.",
        register: "Inchoative Aspect"
      },
      {
        ruleNumber: 4,
        title: "Tag Questions in Weather Small Talk",
        description: "Engage conversationally using inverted tag questions with rising-falling intonation: 'Lovely afternoon, isn't it?', 'Bit brisk outside today, isn't it?'",
        register: "Phatic Discourse"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Forecast Inquiry",
        formula: "What does the weather forecast say for + [Timeframe / Day]?",
        exampleEn: "What does the weather forecast say for the upcoming weekend?",
        meaningHi: "आने वाले सप्ताहांत के लिए मौसम का पूर्वानुमान क्या कहता है?"
      },
      {
        subjectGroup: "Impersonal Atmospheric State",
        formula: "It is + [Adverb: unusually / extremely] + [Adjective: muggy / overcast / sweltering] + today.",
        exampleEn: "It is unusually humid and overcast today.",
        meaningHi: "आज मौसम असामान्य रूप से उमस भरा और बादलों से घिरा हुआ है।"
      },
      {
        subjectGroup: "Environmental Impact",
        formula: "Rising global temperatures contribute to + [Environmental Consequence: droughts / floods].",
        exampleEn: "Rising global temperatures contribute to severe prolonged droughts.",
        meaningHi: "बढ़ता वैश्विक तापमान गंभीर लंबे सूखे का कारण बनता है।"
      },
      {
        subjectGroup: "Phatic Conversational Opener",
        formula: "Looks like we're in for + [Weather Phenomenon: a downpour / a heatwave], isn't it?",
        exampleEn: "Looks like we're in for quite a downpour this evening.",
        meaningHi: "लगता है कि आज शाम काफी तेज बारिश होने वाली है।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Climate is Nice' and 'Too Hot' Intensifier Traps",
      hindiPattern: "1. '*Today the climate in Delhi is very pleasant.*' (literal translation of 'आज दिल्ली का मौसम अच्छा है')\n2. '*It is too good weather today!*' (using 'too' as 'बहुत अच्छा')\n3. '*Rain is coming outside.*'",
      potentialInterference: "Confusing 'climate' with 'weather' and using 'too' incorrectly as a superlative positive intensifier.",
      explanation: "'Climate' refers to long-term patterns over decades; use 'weather' for today. 'Too' carries a negative connotation of excess (e.g., 'too cold to swim'); use 'very' or 'wonderfully' for praise. Instead of 'rain is coming', say 'it is starting to rain' or 'it is pouring'.",
      naturalSolution: "1. 'The weather in Delhi is very pleasant today.' | 2. 'The weather is wonderfully pleasant today.' | 3. 'It is starting to rain outside.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day47_vocab_001", word: "Forecast", pos: "Noun / Verb", ipa: "/ˈfɔː.kɑːst/", meaningHi: "पूर्वानुमान (मौसम की भविष्यवाणी)", exampleEn: "The meteorological department issued a rain forecast for tomorrow.", exampleHi: "मौसम विभाग ने कल के लिए बारिश का पूर्वानुमान जारी किया।" },
      { id: "day47_vocab_002", word: "Overcast", pos: "Adjective", ipa: "/ˌəʊ.vəˈkɑːst/", meaningHi: "बादलों से घिरा हुआ / घटाटोप", exampleEn: "The sky remained overcast throughout the afternoon.", exampleHi: "दोपहर भर आसमान बादलों से घिरा रहा।" },
      { id: "day47_vocab_003", word: "Drizzle", pos: "Noun / Verb", ipa: "/ˈdrɪz.əl/", meaningHi: "हल्की बूंदाबांदी", exampleEn: "A gentle drizzle began just as we stepped out of the office.", exampleHi: "जैसे ही हम कार्यालय से बाहर निकले, हल्की बूंदाबांदी शुरू हो गई।" },
      { id: "day47_vocab_004", word: "Sweltering", pos: "Adjective", ipa: "/ˈswel.tər.ɪŋ/", meaningHi: "भीषण गर्म / पसीने से तरबतर कर देने वाला", exampleEn: "We stayed indoors during the sweltering midday heat.", exampleHi: "हम दोपहर की भीषण गर्मी के दौरान घर के अंदर ही रहे।" },
      { id: "day47_vocab_005", word: "Humid", pos: "Adjective", ipa: "/ˈhjuː.mɪd/", meaningHi: "उमस भरा / नमी युक्त", exampleEn: "Coastal cities are typically hot and humid in July.", exampleHi: "तटीय शहर जुलाई में आमतौर पर गर्म और उमस भरे होते हैं।" },
      { id: "day47_vocab_006", word: "Downpour", pos: "Noun", ipa: "/ˈdaʊn.pɔːr/", meaningHi: "मूसलाधार बारिश", exampleEn: "The sudden torrential downpour flooded the city avenues.", exampleHi: "अचानक हुई मूसलाधार बारिश से शहर की सड़कें जलमग्न हो गईं।" },
      { id: "day47_vocab_007", word: "Drought", pos: "Noun", ipa: "/draʊt/", meaningHi: "सूखा / अकाल (gh silent)", exampleEn: "The agricultural region suffered a severe two-year drought.", exampleHi: "कृषि क्षेत्र को दो साल के भीषण सूखे का सामना करना पड़ा।" },
      { id: "day47_vocab_008", word: "Breeze", pos: "Noun", ipa: "/briːz/", meaningHi: "मंद सुगंधित हवा / समीर", exampleEn: "A cool ocean breeze made the evening walk delightful.", exampleHi: "समुद्र की ठंडी हवा ने शाम की सैर को आनंददायक बना दिया।" },
      { id: "day47_vocab_009", word: "Precipitation", pos: "Noun", ipa: "/prɪˌsɪp.ɪˈteɪ.ʃən/", meaningHi: "वर्षण (बारिश, बर्फ, ओले आदि)", exampleEn: "Annual precipitation in the mountain valley exceeds fifty inches.", exampleHi: "पहाड़ी घाटी में वार्षिक वर्षण पचास इंच से अधिक होता है।" },
      { id: "day47_vocab_010", word: "Renewable", pos: "Adjective", ipa: "/rɪˈnjuː.ə.bəl/", meaningHi: "नवीकरणीय (ऊर्जा स्रोत)", exampleEn: "Solar and wind power are leading sources of renewable energy.", exampleHi: "सौर और पवन ऊर्जा नवीकरणीय ऊर्जा के प्रमुख स्रोत हैं।" }
    ],
    spokenPhrases: [
      { id: "day47_phrase_001", phrase: "It's pouring outside!", meaningHi: "बाहर मूसलाधार बारिश हो रही है!", context: "Exclaiming about heavy rain" },
      { id: "day47_phrase_002", phrase: "Bit nippy today, isn't it?", meaningHi: "आज थोड़ी ठंडी हवा चल रही है, है ना?", context: "British weather small talk" },
      { id: "day47_phrase_003", phrase: "Catch you in a shower", meaningHi: "बारिश में फंस जाना या भीग जाना", context: "Weather disruption" },
      { id: "day47_phrase_004", phrase: "Scorching heatwave", meaningHi: "भीषण लू / अत्यधिक गर्म हवा", context: "Summer temperatures" },
      { id: "day47_phrase_005", phrase: "Clear blue skies", meaningHi: "बिल्कुल साफ नीला आसमान", context: "Pleasant weather description" },
      { id: "day47_phrase_006", phrase: "Reduce our carbon footprint", meaningHi: "अपने कार्बन उत्सर्जन प्रभाव को कम करना", context: "Environmental responsibility" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day47_exmp_001", english: "The weather forecast predicts scattered thunderstorms later this evening.", hindi: "मौसम के पूर्वानुमान में आज शाम गरज के साथ छिटपुट बारिश की भविष्यवाणी की गई है।" },
      { id: "day47_exmp_002", english: "The climate of the Mediterranean region is characterized by hot, dry summers.", hindi: "भूमध्यसागरीय क्षेत्र की जलवायु की विशेषता गर्म और शुष्क ग्रीष्मकाल है।" },
      { id: "day47_exmp_003", english: "It was so sweltering outside that the asphalt on the roads began to soften.", hindi: "बाहर इतनी भीषण गर्मी थी कि सड़कों का डामर पिघलने लगा।" },
      { id: "day47_exmp_004", english: "Don't forget your umbrella; it's starting to drizzle.", hindi: "अपना छाता ले जाना मत भूलना; हल्की बूंदाबांदी शुरू हो रही है।" },
      { id: "day47_exmp_005", english: "The coastal area is extremely humid during the monsoon months.", hindi: "मानसून के महीनों में तटीय क्षेत्र अत्यधिक उमस भरा होता है।" },
      { id: "day47_exmp_006", english: "A sudden cloudburst caused a massive downpour in the valley.", hindi: "अचानक बादल फटने से घाटी में भारी मूसलाधार बारिश हुई।" },
      { id: "day47_exmp_007", english: "The prolonged drought severely affected grain harvests across the state.", hindi: "लंबे सूखे ने राज्य भर में अनाज की फसल को बुरी तरह प्रभावित किया।" },
      { id: "day47_exmp_008", english: "Switching to public transport helps individuals reduce their personal carbon footprint.", hindi: "सार्वजनिक परिवहन का उपयोग करने से लोगों को अपना व्यक्तिगत कार्बन पदचिह्न कम करने में मदद मिलती है।" },
      { id: "day47_exmp_009", english: "The sky turned completely overcast before the blizzard struck.", hindi: "बर्फानी तूफान आने से पहले आसमान पूरी तरह बादलों से घिर गया।" },
      { id: "day47_exmp_010", english: "We enjoyed a gentle, refreshing breeze sitting by the riverside.", hindi: "हमने नदी के किनारे बैठकर हल्की, ताज़ा हवा का आनंद लिया।" },
      { id: "day47_exmp_011", english: "Renewable energy investments have surged significantly worldwide.", hindi: "दुनिया भर में नवीकरणीय ऊर्जा निवेश में उल्लेखनीय वृद्धि हुई है।" },
      { id: "day47_exmp_012", english: "It is freezing outside, so make sure you wear a warm woolen coat.", hindi: "बाहर कड़ाके की ठंड है, इसलिए सुनिश्चित करें कि आप एक गर्म ऊनी कोट पहनें।" }
    ]
  },
  pronunciation: {
    focusSound: "Silent Letters & Vowel Nuance in Meteorological Terms: 'Drought' (/draʊt/ - silent 'gh'), 'Precipitation' (/prɪˌsɪp.ɪˈteɪ.ʃən/), 'Forecast' (/ˈfɔː.kɑːst/)",
    phoneticNotes: "'Drought' rhymes with 'doubt' and 'out' (the 'gh' is completely silent). In 'precipitation', secondary stress falls on the second syllable /sɪp/ and primary on /teɪ/.",
    minimalPairs: [
      { wordA: "Drought", ipaA: "/draʊt/", wordB: "Draft", ipaB: "/drɑːft/" },
      { wordA: "Breeze", ipaA: "/briːz/", wordB: "Freeze", ipaB: "/friːz/" },
      { wordA: "Pour", ipaA: "/pɔːr/", wordB: "Poor", ipaB: "/pʊər/" },
      { wordA: "Weather", ipaA: "/ˈweð.ər/", wordB: "Whether", ipaB: "/ˈweð.ər/" }
    ],
    drills: [
      { sentence: "The severe drought dried up the mountain reservoir.", focus: "Silent gh in drought (/draʊt/)" },
      { sentence: "Heavy precipitation caused a torrential downpour.", focus: "Syllable rhythm in precipitation" },
      { sentence: "The chilly breeze caused the lake to freeze.", focus: "B vs F contrast in breeze and freeze" },
      { sentence: "The overcast sky foretells a stormy night.", focus: "Vowel quality in forecast and overcast" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day47_ex_001",
        type: "multiple_choice",
        question: "What is the key difference between 'weather' and 'climate'?",
        options: [
          "Weather is daily atmospheric condition; climate is long-term average pattern.",
          "Weather is only about rain; climate is only about heat.",
          "Climate changes every hour; weather changes every century.",
          "There is no difference between the two terms."
        ],
        correctAnswer: "Weather is daily atmospheric condition; climate is long-term average pattern.",
        explanation: "'Weather' describes daily/hourly atmospheric states; 'climate' denotes multi-decade regional patterns."
      },
      {
        id: "day47_ex_002",
        type: "fill_in_the_blank",
        question: "It is starting to ______; you should take an umbrella before it pours.",
        correctAnswer: "drizzle",
        explanation: "'Drizzle' means light, fine rainfall."
      },
      {
        id: "day47_ex_003",
        type: "error_correction",
        sentence: "Today the climate is very pleasant in Mumbai.",
        correctAnswer: "Today the weather is very pleasant in Mumbai.",
        explanation: "Use 'weather' for daily atmospheric conditions."
      },
      {
        id: "day47_ex_004",
        type: "translation_hi_en",
        hindiSentence: "आसमान में काले बादल छाए हुए हैं और बारिश होने वाली है।",
        englishSentence: "The sky is overcast and it is about to rain.",
        targetVocabulary: ["overcast", "sky", "about to rain"]
      },
      {
        id: "day47_ex_005",
        type: "matching",
        prompt: "Match the meteorological terms with their definitions:",
        pairs: [
          { left: "Sweltering", right: "Oppressively and uncomfortably hot" },
          { left: "Overcast", right: "Completely covered with dense clouds" },
          { left: "Drought", right: "Prolonged period of abnormally low rainfall" },
          { left: "Downpour", right: "Heavy, torrential rain shower" }
        ]
      },
      {
        id: "day47_ex_006",
        type: "sentence_ordering",
        scrambledWords: ["forecast", "thunderstorms", "The", "predicts", "afternoon", "this", "weather"],
        correctSentence: "The weather forecast predicts thunderstorms this afternoon.",
        explanation: "Subject ('The weather forecast') + Verb ('predicts') + Object ('thunderstorms') + Time ('this afternoon')."
      },
      {
        id: "day47_ex_007",
        type: "multiple_choice",
        question: "How is the word 'drought' (meaning severe dry spell) pronounced?",
        options: ["/drɔːt/", "/draʊt/", "/drʌft/", "/druːt/"],
        correctAnswer: "/draʊt/",
        explanation: "'Drought' rhymes with 'doubt' and 'out' (/draʊt/)."
      },
      {
        id: "day47_ex_008",
        type: "sentence_building",
        prompt: "Say that solar and wind are renewable energy sources.",
        targetWords: ["Solar", "and", "wind", "are", "renewable", "energy", "sources", "."],
        correctSentence: "Solar and wind are renewable energy sources."
      },
      {
        id: "day47_ex_009",
        type: "translation_en_hi",
        englishSentence: "The high humidity made the summer afternoon feel scorching.",
        hindiSentence: "अत्यधिक उमस ने गर्मियों की दोपहर को झुलसाने वाला बना दिया।"
      },
      {
        id: "day47_ex_010",
        type: "listening_comprehension",
        audioText: "Meteorologists report that the coastal region will experience gale-force winds exceeding sixty miles per hour.",
        question: "What weather hazard will the coastal region experience?",
        options: ["Mild drizzle", "Gale-force winds exceeding sixty mph", "A sudden heatwave", "Heavy snow flurry"],
        correctAnswer: "Gale-force winds exceeding sixty mph",
        explanation: "The audio explicitly states gale-force winds exceeding 60 mph."
      },
      {
        id: "day47_ex_011",
        type: "dictation",
        spokenText: "The sky became overcast before the downpour began.",
        correctText: "The sky became overcast before the downpour began."
      },
      {
        id: "day47_ex_012",
        type: "dialogue_completion",
        dialogueContext: "Neighbor: 'Lovely sunny afternoon, isn't it?' | Resident: 'Yes, it's a pleasant break from yesterday's ______.'",
        options: ["downpour", "receipt", "prerequisite", "pediatrician"],
        correctAnswer: "downpour",
        explanation: "'Downpour' fits the weather context."
      },
      {
        id: "day47_ex_013",
        type: "speaking_pronunciation",
        targetText: "The severe drought caused a deficit in annual precipitation.",
        phoneticFocus: "Pronunciation of 'drought' /draʊt/ and 'precipitation' /prɪˌsɪp.ɪˈteɪ.ʃən/"
      },
      {
        id: "day47_ex_014",
        type: "active_recall",
        prompt: "Why should you avoid saying '*The climate today is too good* '?",
        correctAnswer: "'Climate' is long-term, not daily; and 'too' implies an undesirable negative excess. Say 'The weather is wonderfully pleasant today.'",
        explanation: "Distinguishes weather from climate and clarifies proper adverb use."
      },
      {
        id: "day47_ex_015",
        type: "applied_scenario",
        scenario: "You want to start a friendly conversation with a colleague in the elevator about the rainy morning. What small-talk phrase do you use?",
        correctAnswer: "Looks like it's really pouring outside today, isn't it?",
        explanation: "Natural, idiomatic weather small-talk opener."
      },
      {
        id: "day47_ex_016",
        type: "multiple_choice",
        question: "Which of the following refers to total moisture falling from the sky (rain, snow, sleet, hail)?",
        options: ["Precipitation", "Evaporation", "Condensation", "Radiation"],
        correctAnswer: "Precipitation",
        explanation: "'Precipitation' is the scientific term for atmospheric moisture falling to earth."
      },
      {
        id: "day47_ex_017",
        type: "fill_in_the_blank",
        question: "It is freezing outside; you should wear a heavy coat because the temperature is ______ zero.",
        correctAnswer: "below",
        explanation: "Temperatures in winter drop 'below zero'."
      },
      {
        id: "day47_ex_018",
        type: "error_correction",
        sentence: "It is too good weather to go for a picnic.",
        correctAnswer: "It is very good weather to go for a picnic.",
        explanation: "Replace 'too' with 'very' or 'wonderful' when expressing positive appreciation."
      },
      {
        id: "day47_ex_019",
        type: "translation_hi_en",
        hindiSentence: "तटीय शहरों में गर्मियों के दौरान बहुत उमस होती है।",
        englishSentence: "Coastal cities are very humid during the summer.",
        targetVocabulary: ["coastal cities", "humid", "summer"]
      },
      {
        id: "day47_ex_020",
        type: "matching",
        prompt: "Match the environmental concepts with their descriptions:",
        pairs: [
          { left: "Carbon footprint", right: "Total greenhouse gas emissions caused by an individual or entity" },
          { left: "Global warming", right: "Long-term heating of Earth's climate system" },
          { left: "Deforestation", right: "Large-scale clearing and removal of forested land" },
          { left: "Biodiversity", right: "Variety of plant and animal life in a habitat" }
        ]
      },
      {
        id: "day47_ex_021",
        type: "multiple_choice",
        question: "What does 'sweltering' mean?",
        options: ["Pleasantly cool", "Extremely and uncomfortably hot", "Lightly raining", "Covered in thick fog"],
        correctAnswer: "Extremely and uncomfortably hot",
        explanation: "'Sweltering' denotes oppressive, intense heat."
      },
      {
        id: "day47_ex_022",
        type: "sentence_ordering",
        scrambledWords: ["energy", "reduce", "Renewable", "sources", "emissions", "carbon"],
        correctSentence: "Renewable energy sources reduce carbon emissions.",
        explanation: "Subject ('Renewable energy sources') + Verb ('reduce') + Object ('carbon emissions')."
      },
      {
        id: "day47_ex_023",
        type: "fill_in_the_blank",
        question: "A cool sea ______ brought much-needed relief from the afternoon heat.",
        correctAnswer: "breeze",
        explanation: "A 'breeze' is a gentle, refreshing wind."
      },
      {
        id: "day47_ex_024",
        type: "sentence_building",
        prompt: "Express that heavy rain caused severe waterlogging in the streets.",
        targetWords: ["Heavy", "rain", "caused", "severe", "waterlogging", "in", "the", "streets", "."],
        correctSentence: "Heavy rain caused severe waterlogging in the streets."
      },
      {
        id: "day47_ex_025",
        type: "translation_en_hi",
        englishSentence: "Prolonged droughts can lead to severe food and water shortages.",
        hindiSentence: "लंबे सूखे के कारण भोजन और पानी की गंभीर कमी हो सकती है।"
      },
      {
        id: "day47_ex_026",
        type: "multiple_choice",
        question: "Which of the following sentences uses the dummy pronoun 'it' correctly?",
        options: ["Rain is happening now.", "It is raining now.", "Weather is raining now.", "Sky is doing rain now."],
        correctAnswer: "It is raining now.",
        explanation: "Meteorological statements use the impersonal dummy pronoun 'it'."
      },
      {
        id: "day47_ex_027",
        type: "error_correction",
        sentence: "Yesterday night rain was falling heavily.",
        correctAnswer: "Last night it rained heavily.",
        explanation: "Say 'Last night it rained heavily' (avoid '*yesterday night*')."
      },
      {
        id: "day47_ex_028",
        type: "listening_comprehension",
        audioText: "The heat index is projected to reach forty-two degrees Celsius with eighty percent relative humidity.",
        question: "What temperature is the heat index projected to reach?",
        options: ["32 degrees", "38 degrees", "42 degrees", "45 degrees"],
        correctAnswer: "42 degrees",
        explanation: "The audio explicitly states 42 degrees Celsius."
      },
      {
        id: "day47_ex_029",
        type: "dictation",
        spokenText: "Global warming has intensified extreme weather events.",
        correctText: "Global warming has intensified extreme weather events."
      },
      {
        id: "day47_ex_030",
        type: "applied_scenario",
        scenario: "You are planning an outdoor trek for tomorrow. How do you ask a friend what the weather report looks like?",
        correctAnswer: "Have you checked the weather forecast for tomorrow's trek?",
        explanation: "Natural and contextually accurate inquiry."
      },
      {
        id: "day47_ex_031",
        type: "multiple_choice",
        question: "What is an unexpected sudden heavy rainstorm called?",
        options: ["Cloudburst", "Drought", "Eclipse", "Oasis"],
        correctAnswer: "Cloudburst",
        explanation: "A 'cloudburst' is an abrupt, extremely heavy torrential downpour."
      },
      {
        id: "day47_ex_032",
        type: "fill_in_the_blank",
        question: "Dense morning ______ reduced visibility on the expressway to under fifty meters.",
        correctAnswer: "fog",
        explanation: "'Fog' or 'smog' causes low atmospheric visibility."
      },
      {
        id: "day47_ex_033",
        type: "translation_hi_en",
        hindiSentence: "पर्यावरण संरक्षण के लिए हमें पेड़ों की कटाई रोकनी होगी।",
        englishSentence: "We must halt deforestation to protect the environment.",
        targetVocabulary: ["halt deforestation", "protect", "environment"]
      },
      {
        id: "day47_ex_034",
        type: "sentence_building",
        prompt: "State that the heatwave lasted for two consecutive weeks.",
        targetWords: ["The", "heatwave", "lasted", "for", "two", "consecutive", "weeks", "."],
        correctSentence: "The heatwave lasted for two consecutive weeks."
      },
      {
        id: "day47_ex_035",
        type: "mixed_retrieval",
        question: "Identify the sentence that has zero grammatical or pragmatic errors:",
        options: [
          "Today the climate is too hot and rain is coming.",
          "The weather today is remarkably pleasant and the sky is clear.",
          "Yesterday night it did heavy raining in our colony.",
          "The climate forecast says it will make a big drizzle."
        ],
        correctAnswer: "The weather today is remarkably pleasant and the sky is clear.",
        explanation: "Flawless sentence with accurate terminology ('weather', 'pleasant', 'clear sky')."
      }
    ]
  },
  use: {
    dialogue: {
      title: "Small Talk on Weather and Weekend Plans",
      context: "Two coworkers (Raj and Lisa) chat by the office water cooler on a Friday afternoon.",
      characters: ["Raj", "Lisa"],
      lines: [
        { speaker: "Raj", text: "Quite a sweltering afternoon, isn't it?", hindi: "काफी भीषण गर्मी वाली दोपहर है, है ना?" },
        { speaker: "Lisa", text: "It really is! The humidity must be over eighty percent today. I can hardly breathe outside.", hindi: "सच में! आज उमस अस्सी प्रतिशत से अधिक होगी। बाहर सांस लेना भी मुश्किल है।" },
        { speaker: "Raj", text: "Have you seen the weekend forecast? Are we in for any relief?", hindi: "क्या आपने सप्ताहांत का मौसम पूर्वानुमान देखा है? क्या हमें कोई राहत मिलने वाली है?" },
        { speaker: "Lisa", text: "Yes, the meteorological service predicts an overcast sky with scattered thunderstorms by Saturday evening.", hindi: "हाँ, मौसम विभाग ने शनिवार शाम तक बादलों से घिरे आसमान और गरज के साथ छिटपुट बारिश की भविष्यवाणी की है।" },
        { speaker: "Raj", text: "That should bring the temperature down significantly. I was hoping to go on a hike.", hindi: "इससे तापमान में काफी गिरावट आनी चाहिए। मैं एक हाइक (पहाड़ी सैर) पर जाने की उम्मीद कर रहा था।" },
        { speaker: "Lisa", text: "Just pack a waterproof jacket in case you get caught in a downpour!", hindi: "बस अपने साथ एक वाटरप्रूफ जैकेट रख लेना, कहीं आप मूसलाधार बारिश में न फंस जाएँ!" }
      ]
    },
    speakingPrompt: {
      situation: "Describe your favorite season of the year and how the weather affects your daily routine.",
      prompts: [
        "What is your favorite season (e.g., autumn, winter, monsoon) and why?",
        "Describe the typical weather conditions (temperature, precipitation, winds).",
        "What outdoor activities or food do you enjoy during this season?"
      ],
      targetExpressions: ["overcast / sunny", "crisp breeze", "sweltering / freezing", "weather forecast", "enjoy the climate/weather"]
    },
    roleplay: {
      scenario: "Broadcasting a local evening meteorological report.",
      roleA: "Meteorologist presenting the 3-day regional weather forecast, temperature fluctuations, and storm alerts.",
      roleB: "News anchor asking follow-up questions regarding road safety during the anticipated torrential downpour.",
      sampleDialogue: "Meteorologist: 'A strong low-pressure front will bring heavy precipitation and gale-force winds tomorrow morning.' | Anchor: 'Should commuters anticipate significant morning transit delays due to localized flooding?'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day47_bm_001",
        title: "Meteorological Description & Forecast Summary",
        prompt: "Summarize a weekend weather report using at least 4 meteorological descriptors (e.g., overcast, drizzle, humidity, temperature).",
        sampleAnswerEn: "Saturday morning will begin overcast with high humidity and mild temperatures around twenty-four degrees. By mid-afternoon, a gentle drizzle will transition into a heavy downpour accompanied by gusty winds. Sunday will bring clear blue skies and a refreshing cool breeze.",
        sampleAnswerHi: "शनिवार की सुबह 24 डिग्री के हल्के तापमान और उच्च आर्द्रता के साथ बादलों से घिरी होगी। दोपहर तक, हल्की बूंदाबांदी तेज हवाओं के साथ भारी बारिश में बदल जाएगी। रविवार को साफ नीला आसमान और ताज़ा ठंडी हवा देखने को मिलेगी।",
        evaluationCriteria: "Rich and accurate meteorological vocabulary ('overcast', 'humidity', 'drizzle', 'downpour', 'gusty winds')."
      },
      {
        id: "day47_bm_002",
        title: "Environmental Issues & Climate Discussion",
        prompt: "Write 3-4 sentences discussing how renewable energy helps combat global warming and environmental degradation.",
        sampleAnswerEn: "Transitioning to renewable energy sources such as solar and wind power is essential to mitigate global warming. By decreasing our reliance on fossil fuels, we reduce harmful carbon emissions and shrink our environmental footprint. This in turn helps prevent severe droughts and catastrophic weather disruptions.",
        sampleAnswerHi: "ग्लोबल वार्मिंग को कम करने के लिए सौर और पवन ऊर्जा जैसे नवीकरणीय ऊर्जा स्रोतों पर जाना आवश्यक है। जीवाश्म ईंधन पर अपनी निर्भरता कम करके, हम हानिकारक कार्बन उत्सर्जन को कम करते हैं। यह बदले में गंभीर सूखे और विनाशकारी मौसम व्यवधानों को रोकने में मदद करता है।",
        evaluationCriteria: "Sophisticated environmental discourse ('mitigate global warming', 'carbon emissions', 'environmental footprint', 'renewable energy')."
      },
      {
        id: "day47_bm_003",
        title: "L1 Weather & Climate Interference Remediation",
        prompt: "Correct and explain all errors in: '*Today the climate in our city is too good, rain is coming and yesterday night was very hot.*'",
        sampleAnswerEn: "Correction: 'The weather in our city today is wonderfully pleasant, it is starting to rain, and last night was very hot.' Explanation: 1. 'Climate' represents multi-decade regional patterns; use 'weather' for today's condition. 2. 'Too good' incorrectly uses 'too' (which carries negative excess); use 'wonderfully pleasant'. 3. Replace 'rain is coming' with 'it is starting to rain'. 4. Replace 'yesterday night' with 'last night'.",
        sampleAnswerHi: "सुधार: 'The weather in our city today is wonderfully pleasant, it is starting to rain, and last night was very hot.' व्याख्या: 1. 'Climate' दीर्घकालिक होता है; आज की स्थिति के लिए 'weather' का प्रयोग करें। 2. 'Too good' में 'too' का गलत प्रयोग है; 'wonderfully pleasant' कहें। 3. 'Rain is coming' की जगह 'it is starting to rain' कहें। 4. 'Yesterday night' की जगह 'last night' का प्रयोग करें।",
        evaluationCriteria: "Complete grammatical and semantic remediation of all four subcontinental transfer errors."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "What is the key difference between 'weather' and 'climate'?", a: "'Weather' is the day-to-day atmospheric state; 'climate' is the long-term historical pattern over decades." },
      { q: "How is 'drought' pronounced?", a: "/draʊt/ (the 'gh' is silent, rhyming with 'shout')" },
      { q: "Why is '*The weather is too nice today*' incorrect?", a: "'Too' indicates a negative, excessive amount that causes a problem. Use 'very' or 'wonderfully'." },
      { q: "What is the proper dummy pronoun for weather statements?", a: "'It' (e.g., 'It is raining', 'It is getting chilly')" }
    ],
    spacedTips: [
      "Tip 1: Remember to use 'last night' instead of '*yesterday night*' when describing past weather.",
      "Tip 2: In British and global English, weather comments paired with question tags ('Chilly today, isn't it?') are standard social icebreakers."
    ]
  }
};

// DAY 48: Animal Kingdom, Habitats & Zoological Vocabulary
const day48 = {
  dayNumber: 48,
  id: "day_48",
  titleEn: "Animal Kingdom, Habitats & Zoological Vocabulary",
  titleHi: "प्राणी जगत, प्राकृतिक आवास एवं जीव-जंतु शब्दावली",
  cefr: "A2.2",
  estMinutes: 40,
  prerequisites: "Day 47 (Weather, Seasons & Environmental Science)",
  objectivesEn: [
    "Classify animals into biological categories (mammals, reptiles, amphibians, birds, aquatic fauna, invertebrates).",
    "Describe natural ecosystems and habitats (rainforest, wetlands, savannah, arctic tundra, coral reefs).",
    "Master predator-prey dynamics, trophic levels, dietary classifications (herbivore, carnivore, omnivore), and animal collective nouns.",
    "Discuss wildlife conservation, endangered species, poaching threats, and sanctuary management.",
    "Eliminate subcontinental zoological traps including animal gender confusion, erroneous animal sounds, and misapplied collective nouns."
  ],
  objectivesHi: [
    "जीव-जंतुओं को जैविक श्रेणियों (Mammals, Reptiles, Amphibians, Aquatic life) में वर्गीकृत करना।",
    "प्राकृतिक आवासों और पारिस्थितिकी तंत्रों (Rainforest, Wetlands, Savannah, Tundra, Coral reefs) का वर्णन करना।",
    "शिकारी-शिकार (Predator-Prey), आहार वर्गीकरण (Herbivore, Carnivore, Omnivore) और पशुओं के समूहवाचक संज्ञाओं (Collective Nouns) में निपुण होना।",
    "वन्यजीव संरक्षण, लुप्तप्राय प्रजातियों (Endangered species) और अभयारण्यों पर सार्थक चर्चा करना।",
    "भारतीय शिक्षार्थियों की प्राणी शब्दावली की गलतियों (लिंग भेद, पशुओं की आवाजें, गलत समूहवाचक संज्ञाएँ) को दूर करना।"
  ],
  teach: {
    hindiExplanation: "दिन 48 में हम प्राणी जगत (Animal Kingdom), प्राकृतिक आवासों (Habitats) और प्राणी विज्ञान (Zoology) से जुड़ी समृद्ध शब्दावली सीखेंगे।\n\n1. जैविक वर्गीकरण (Biological Classes):\n   - Mammals (स्तनधारी जीव - जो बच्चों को जन्म देते हैं और दूध पिलाते हैं, जैसे मनुष्य, शेर, व्हेल)\n   - Reptiles (सरीसृप / रेंगने वाले जीव, जैसे सांप, छिपकली, मगरमच्छ)\n   - Amphibians (उभयचर - जो जल और थल दोनों पर रहते हैं, जैसे मेंढक, सैलामैंडर)\n   - Invertebrates (अकशेरुकी - बिना रीढ़ की हड्डी वाले कीट आदि)\n2. आहार आधारित वर्गीकरण (Dietary Types):\n   - Herbivore (शाकाहारी पशु, जैसे गाय, हिरण, हाथी)\n   - Carnivore (मांसाहारी पशु, जैसे बाघ, चीता, भेड़िया)\n   - Omnivore (सर्वाहारी जीव, जैसे भालू, मनुष्य)\n3. पशुओं के समूहवाचक संज्ञाएँ (Collective Nouns):\n   - A pride of lions (शेरों का झुंड)\n   - A flock of birds / sheep (पक्षियों या भेड़ों का झुंड)\n   - A pack of wolves / dogs (भेड़ियों का झुंड)\n   - A school / shoal of fish (मछलियों का समूह)\n   - A herd of elephants / cattle (हाथियों या मवेशियों का झुंड)\n4. शिकारी और शिकार (Predator vs Prey): 'Predator' शिकारी जानवर है और 'Prey' उसका शिकार है।\n5. वन्यजीव संरक्षण (Conservation): 'Endangered species' (संकटग्रस्त प्रजातियाँ), 'Poaching' (अवैध शिकार), 'Sanctuary / National Park' (अभयारण्य)।",
    englishExplanation: "Welcome to Day 48! Today we explore zoological taxonomy, biome ecology, trophic food webs, and wildlife conservation biology.\n\nCore zoological competencies:\n1. Taxonomic Classification: Distinguishing physiological characteristics of mammals (endothermic, live birth, lactation), reptiles (ectothermic, scales), amphibians (metamorphic life cycle), and aquatic organisms.\n2. Trophic Dynamics & Dietary Categories: Articulating food webs with precise ecological vocabulary ('apex predator', 'prey', 'herbivore', 'scavenger', 'decomposer').\n3. Ecological Habitats & Biomes: Describing terrain characteristics ('wetland marshes', 'semi-arid savannah', 'dense tropical rainforest', 'tundra').\n4. Species-Specific Collective Nouns: Mastering established idiomatic group nouns ('pride of lions', 'pack of wolves', 'school of fish', 'flock of geese').\n5. Wildlife Conservation Discourse: Discussing habitat preservation, anti-poaching enforcement, and biodiversity protection.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Collective Noun Subject-Verb Agreement with Fauna",
        description: "Faunal collective nouns act as singular units when emphasizing the unified group: 'A pride of lions is resting under the acacia tree.' (Use plural when focusing on individual members: 'The pack of wolves are scattering').",
        register: "Collective Agreement"
      },
      {
        ruleNumber: 2,
        title: "Active vs Passive Voice in Predation",
        description: "Express predation accurately: 'Lions prey on antelopes' (Active) vs 'Antelopes are preyed upon by lions' (Passive with particle 'upon').",
        register: "Predation Syntax"
      },
      {
        ruleNumber: 3,
        title: "Plural Morphology of Faunal Nouns",
        description: "Many animal nouns have zero-plural forms: 'one sheep / five sheep', 'one deer / ten deer', 'one fish / many fish' (use 'fishes' only when referring to multiple biological species).",
        register: "Irregular Plurals"
      },
      {
        ruleNumber: 4,
        title: "Gender-Specific Zoological Designations",
        description: "Use precise male/female terminology where appropriate: Lion/Lioness, Tiger/Tigress, Stallion/Mare, Bull/Cow, Drake/Duck, Rooster/Hen, Buck/Doe.",
        register: "Lexical Precision"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Habitat Classification",
        formula: "[Animal Species] + inhabit / are indigenous to + [Ecosystem / Biome].",
        exampleEn: "Bengal tigers inhabit the mangrove wetlands of the Sundarbans.",
        meaningHi: "बंगाल टाइगर सुंदरबन के मैंग्रोव आर्द्रभूमि (वेटलैंड्स) में निवास करते हैं।"
      },
      {
        subjectGroup: "Trophic & Dietary Role",
        formula: "[Species] + is classified as an apex predator / a herbivore that feeds primarily on + [Diet].",
        exampleEn: "The elephant is a herbivore that feeds primarily on grasses, bark, and leaves.",
        meaningHi: "हाथी एक शाकाहारी जीव है जो मुख्य रूप से घास, पेड़ की छाल और पत्तियों पर निर्भर करता है।"
      },
      {
        subjectGroup: "Conservation Status",
        formula: "[Species] + has been declared + [Endangered / Critically Endangered] + due to + [Threat].",
        exampleEn: "The one-horned rhinoceros is an endangered species threatened by illegal poaching.",
        meaningHi: "एक सींग वाला गैंडा एक लुप्तप्राय प्रजाति है जिसे अवैध शिकार से खतरा है।"
      },
      {
        subjectGroup: "Faunal Collective Description",
        formula: "A + [Collective Noun: pride / pack / herd / flock / school] + of + [Plural Animals] + was spotted in + [Location].",
        exampleEn: "A large herd of wild elephants was spotted near the watering hole.",
        meaningHi: "पानी के जलाशय के पास जंगली हाथियों का एक बड़ा झुंड देखा गया था।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Sheeps/Deers', 'Dog's Wife', and Predation Confusion Traps",
      hindiPattern: "1. '*Many sheeps and deers were grazing in the sanctuary.*' (adding '-s' to irregular zero-plurals)\n2. '*The lion is praying the deer.*' (confusing 'pray' with 'prey')\n3. '*A group of wolves attacked the herd.*' (missing precise collective noun 'pack')",
      potentialInterference: "Applying standard '-s' plural rules to zero-plural animals and confusing homophones 'pray' (पूजा करना) and 'prey' (शिकार करना).",
      explanation: "'Sheep' and 'deer' never take an '-s' for plural ('ten sheep', 'five deer'). The verb for hunting is 'prey on' (with 'e'). Specific animal groups have traditional collective nouns ('a pack of wolves', 'a pride of lions').",
      naturalSolution: "1. 'Many sheep and deer were grazing in the sanctuary.' | 2. 'The lion preys on the deer.' | 3. 'A pack of wolves attacked the herd.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day48_vocab_001", word: "Mammal", pos: "Noun", ipa: "/ˈmæm.əl/", meaningHi: "स्तनधारी प्राणी (जो बच्चों को जन्म देते हैं)", exampleEn: "Whales and dolphins are marine mammals, not fish.", exampleHi: "व्हेल और डॉल्फ़िन समुद्री स्तनधारी हैं, मछली नहीं।" },
      { id: "day48_vocab_002", word: "Reptile", pos: "Noun", ipa: "/ˈrep.taɪl/", meaningHi: "सरीसृप / रेंगने वाला जीव", exampleEn: "Crocodiles, lizards, and snakes belong to the reptile family.", exampleHi: "मगरमच्छ, छिपकली और सांप सरीसृप परिवार से संबंधित हैं।" },
      { id: "day48_vocab_003", word: "Amphibian", pos: "Noun", ipa: "/æmˈfɪb.i.ən/", meaningHi: "उभयचर (जल और थल दोनों में रहने वाला प्राणी)", exampleEn: "Frogs and toads are classic examples of amphibians.", exampleHi: "मेंढक और टोड उभयचरों के उत्कृष्ट उदाहरण हैं।" },
      { id: "day48_vocab_004", word: "Predator", pos: "Noun", ipa: "/ˈpred.ə.tər/", meaningHi: "शिकारी जीव (अन्य जानवरों का शिकार करने वाला)", exampleEn: "The snow leopard is the apex predator in high Himalayan terrains.", exampleHi: "हिम तेंदुआ ऊंचे हिमालयी क्षेत्रों में शीर्ष शिकारी जीव है।" },
      { id: "day48_vocab_005", word: "Prey", pos: "Noun / Verb", ipa: "/preɪ/", meaningHi: "शिकार / शिकार बनाना", exampleEn: "Zebras and gazelles are common prey for African lions.", exampleHi: "ज़ेबरा और चिकारे अफ्रीकी शेरों के आम शिकार हैं।" },
      { id: "day48_vocab_006", word: "Herbivore", pos: "Noun", ipa: "/ˈhɜː.bɪ.vɔːr/", meaningHi: "शाकाहारी पशु", exampleEn: "Giraffes are strict herbivores that feed on tall tree canopies.", exampleHi: "जिराफ पूरी तरह से शाकाहारी होते हैं जो ऊंचे पेड़ों की टहनियों पर भोजन करते हैं।" },
      { id: "day48_vocab_007", word: "Habitat", pos: "Noun", ipa: "/ˈhæb.ɪ.tæt/", meaningHi: "प्राकृतिक आवास (जीव-जंतुओं के रहने का स्थान)", exampleEn: "Deforestation destroys the natural habitat of endangered primates.", exampleHi: "वनों की कटाई लुप्तप्राय प्राइमेट्स के प्राकृतिक आवास को नष्ट कर देती है।" },
      { id: "day48_vocab_008", word: "Endangered", pos: "Adjective", ipa: "/ɪnˈdeɪn.dʒəd/", meaningHi: "संकटग्रस्त / विलुप्ति के कगार पर", exampleEn: "The giant panda is one of the world's most protected endangered species.", exampleHi: "विशाल पांडा दुनिया की सबसे अधिक संरक्षित संकटग्रस्त प्रजातियों में से एक है।" },
      { id: "day48_vocab_009", word: "Poaching", pos: "Noun", ipa: "/ˈpəʊ.tʃɪŋ/", meaningHi: "अवैध शिकार", exampleEn: "Strict anti-poaching patrols protect rhinos from wildlife trafficking.", exampleHi: "सख्त अवैध शिकार विरोधी गश्त गैंडों को वन्यजीव तस्करी से बचाती है।" },
      { id: "day48_vocab_010", word: "Sanctuary", pos: "Noun", ipa: "/ˈsæŋk.tʃʊə.ri/", meaningHi: "अभयारण्य / संरक्षित वन्यजीव स्थल", exampleEn: "The bird sanctuary provides safe breeding grounds for migratory species.", exampleHi: "पक्षी अभयारण्य प्रवासी प्रजातियों के लिए सुरक्षित प्रजनन स्थल प्रदान करता है।" }
    ],
    spokenPhrases: [
      { id: "day48_phrase_001", phrase: "A pride of lions", meaningHi: "शेरों का झुंड", context: "Faunal collective noun" },
      { id: "day48_phrase_002", phrase: "A school of fish", meaningHi: "मछलियों का समूह", context: "Marine collective noun" },
      { id: "day48_phrase_003", phrase: "A pack of wolves", meaningHi: "भेड़ियों का झुंड", context: "Canine collective noun" },
      { id: "day48_phrase_004", phrase: "Prey upon", meaningHi: "का शिकार करना", context: "Biological predation" },
      { id: "day48_phrase_005", phrase: "On the brink of extinction", meaningHi: "विलुप्ति के कगार पर", context: "Conservation status" },
      { id: "day48_phrase_006", phrase: "In their natural habitat", meaningHi: "अपने प्राकृतिक परिवेश/आवास में", context: "Wildlife observation" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day48_exmp_001", english: "A pride of lions was resting beneath the shade of an acacia tree.", hindi: "शेरों का एक झुंड बबूल के पेड़ की छांव में आराम कर रहा था।" },
      { id: "day48_exmp_002", english: "Dolphins are intelligent marine mammals that navigate using echolocation.", hindi: "डॉल्फ़िन बुद्धिमान समुद्री स्तनधारी हैं जो इकोलोकेशन का उपयोग करके दिशा तय करती हैं।" },
      { id: "day48_exmp_003", english: "The marshland serves as an essential wetland habitat for migratory waterfowl.", hindi: "दलदली भूमि प्रवासी जलपक्षियों के लिए एक आवश्यक आर्द्रभूमि आवास के रूप में कार्य करती है।" },
      { id: "day48_exmp_004", english: "Tigers are solitary carnivores that hunt mainly at dawn and dusk.", hindi: "बाघ एकांतप्रिय मांसाहारी जीव हैं जो मुख्य रूप से सुबह और शाम को शिकार करते हैं।" },
      { id: "day48_exmp_005", english: "We observed a vast herd of deer grazing peacefully in the national park.", hindi: "हमने राष्ट्रीय उद्यान में शांति से चर रहे हिरणों के एक विशाल झुंड को देखा।" },
      { id: "day48_exmp_006", english: "Poachers threaten the survival of elephants for their ivory tusks.", hindi: "अवैध शिकारी हाथियों के हाथीदांत के लिए उनके अस्तित्व को खतरे में डालते हैं।" },
      { id: "day48_exmp_007", english: "Chameleons and geckos are reptiles capable of changing their skin pigmentation.", hindi: "गिरगिट और गेको ऐसे सरीसृप हैं जो अपनी त्वचा का रंग बदलने में सक्षम हैं।" },
      { id: "day48_exmp_008", english: "The wildlife sanctuary has successfully rehabilitated several injured raptors.", hindi: "वन्यजीव अभयारण्य ने कई घायल शिकारी पक्षियों का सफलतापूर्वक पुनर्वास किया है।" },
      { id: "day48_exmp_009", english: "Owls are nocturnal predators with exceptionally acute hearing.", hindi: "उल्लू रात्रिचर शिकारी होते हैं जिनकी सुनने की क्षमता असाधारण रूप से तेज होती है।" },
      { id: "day48_exmp_010", english: "Many species of coral are on the brink of extinction due to ocean acidification.", hindi: "महासागरीय अम्लीकरण के कारण मूंगे की कई प्रजातियाँ विलुप्ति के कगार पर हैं।" },
      { id: "day48_exmp_011", english: "A dense school of silver fish darted across the vibrant reef.", hindi: "चांदी जैसी मछलियों का एक घना समूह जीवंत चट्टान के पार तेजी से निकल गया।" },
      { id: "day48_exmp_012", english: "Herbivores play a vital role in maintaining the balance of grassland ecosystems.", hindi: "शाकाहारी जीव घास के मैदान के पारिस्थितिकी तंत्र का संतुलन बनाए रखने में महत्वपूर्ण भूमिका निभाते हैं।" }
    ]
  },
  pronunciation: {
    focusSound: "Biological Terminology Phonetics: 'Amphibian' (/æmˈfɪb.i.ən/), 'Herbivore' (/ˈhɜː.bɪ.vɔːr/), 'Sanctuary' (/ˈsæŋk.tʃʊə.ri/)",
    phoneticNotes: "In 'herbivore', British English pronounces the initial 'h' (/ˈhɜː.bɪ.vɔːr/), whereas American English often drops the 'h' (/ˈɜːr.bə.vɔːr/). 'Sanctuary' has an affricate /tʃ/ sound.",
    minimalPairs: [
      { wordA: "Prey", ipaA: "/preɪ/", wordB: "Pray", ipaB: "/preɪ/" },
      { wordA: "Herd", ipaA: "/hɜːd/", wordB: "Heard", ipaB: "/hɜːd/" },
      { wordA: "Whale", ipaA: "/weɪl/", wordB: "Veil", ipaB: "/veɪl/" },
      { wordA: "Bear", ipaA: "/beər/", wordB: "Beer", ipaB: "/bɪər/" }
    ],
    drills: [
      { sentence: "The amphibian and the reptile inhabit different ecological zones.", focus: "Stress in amphibian and reptile" },
      { sentence: "The lion hunts its prey in the open savannah.", focus: "Homophone distinction: prey (/preɪ/)" },
      { sentence: "A pride of lions guarded their territory fiercely.", focus: "Plosive /p/ and /d/ in pride" },
      { sentence: "We visited the wildlife sanctuary to observe migratory birds.", focus: "Affricate /tʃ/ in sanctuary" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day48_ex_001",
        type: "multiple_choice",
        question: "Which of the following animals is classified as a marine mammal?",
        options: ["Great white shark", "Blue whale", "Sea turtle", "Jellyfish"],
        correctAnswer: "Blue whale",
        explanation: "Whales are air-breathing mammals that give live birth and nurse their young."
      },
      {
        id: "day48_ex_002",
        type: "fill_in_the_blank",
        question: "A ______ of lions was spotted resting near the safari track.",
        correctAnswer: "pride",
        explanation: "The collective noun for a family group of lions is a 'pride'."
      },
      {
        id: "day48_ex_003",
        type: "error_correction",
        sentence: "We saw many deers and sheeps in the wildlife sanctuary.",
        correctAnswer: "We saw many deer and sheep in the wildlife sanctuary.",
        explanation: "'Deer' and 'sheep' are irregular zero-plural nouns and do not take '-s'."
      },
      {
        id: "day48_ex_004",
        type: "translation_hi_en",
        hindiSentence: "बाघ एक शीर्ष शिकारी है जो घने जंगलों में शिकार करता है।",
        englishSentence: "The tiger is an apex predator that hunts in dense forests.",
        targetVocabulary: ["apex predator", "hunts", "dense forests"]
      },
      {
        id: "day48_ex_005",
        type: "matching",
        prompt: "Match the animals with their correct collective nouns:",
        pairs: [
          { left: "Lions", right: "Pride" },
          { left: "Wolves", right: "Pack" },
          { left: "Fish", right: "School / Shoal" },
          { left: "Elephants", right: "Herd" }
        ]
      },
      {
        id: "day48_ex_006",
        type: "sentence_ordering",
        scrambledWords: ["inhabits", "leopard", "The", "snow", "mountains", "Himalayan", "the"],
        correctSentence: "The snow leopard inhabits the Himalayan mountains.",
        explanation: "Subject ('The snow leopard') + Verb ('inhabits') + Object ('the Himalayan mountains')."
      },
      {
        id: "day48_ex_007",
        type: "multiple_choice",
        question: "What do we call animals that eat only plants and vegetation?",
        options: ["Carnivores", "Herbivores", "Omnivores", "Parasites"],
        correctAnswer: "Herbivores",
        explanation: "Herbivores are primary consumers that feed exclusively on plant matter."
      },
      {
        id: "day48_ex_008",
        type: "sentence_building",
        prompt: "State that the national park protects endangered species from illegal poaching.",
        targetWords: ["The", "national", "park", "protects", "endangered", "species", "from", "illegal", "poaching", "."],
        correctSentence: "The national park protects endangered species from illegal poaching."
      },
      {
        id: "day48_ex_009",
        type: "translation_en_hi",
        englishSentence: "Frogs and toads are amphibians that can breathe through their skin.",
        hindiSentence: "मेंढक और टोड उभयचर हैं जो अपनी त्वचा से सांस ले सकते हैं।"
      },
      {
        id: "day48_ex_010",
        type: "listening_comprehension",
        audioText: "Rangers have increased anti-poaching patrols to safeguard the remaining population of black rhinos.",
        question: "Why did the rangers increase patrols?",
        options: ["To count birds", "To safeguard black rhinos from poaching", "To build a hotel", "To feed elephants"],
        correctAnswer: "To safeguard black rhinos from poaching",
        explanation: "The audio specifies safeguarding black rhinos from poaching."
      },
      {
        id: "day48_ex_011",
        type: "dictation",
        spokenText: "A pack of wolves hunted across the snowy tundra.",
        correctText: "A pack of wolves hunted across the snowy tundra."
      },
      {
        id: "day48_ex_012",
        type: "dialogue_completion",
        dialogueContext: "Guide: 'Look to your left near the river bank!' | Tourist: 'Is that a ______ of wild elephants drinking water?'",
        options: ["herd", "school", "pack", "pride"],
        correctAnswer: "herd",
        explanation: "A group of elephants is called a 'herd'."
      },
      {
        id: "day48_ex_013",
        type: "speaking_pronunciation",
        targetText: "The amphibian survived in the tropical wetland sanctuary.",
        phoneticFocus: "Pronunciation of 'amphibian' /æmˈfɪb.i.ən/ and 'sanctuary' /ˈsæŋk.tʃʊə.ri/"
      },
      {
        id: "day48_ex_014",
        type: "active_recall",
        prompt: "What is the homophone difference between 'pray' and 'prey'?",
        correctAnswer: "'Pray' means to offer worship to God; 'prey' refers to an animal hunted for food (or to hunt).",
        explanation: "'Pray' is spiritual worship; 'prey' is predation."
      },
      {
        id: "day48_ex_015",
        type: "applied_scenario",
        scenario: "You are describing a wildlife documentary about African wildlife. Mention that cheetahs hunt gazelles on the open plains.",
        correctAnswer: "Cheetahs prey on gazelles across the open African savannah.",
        explanation: "Accurate ecological phrasing ('prey on', 'savannah')."
      },
      {
        id: "day48_ex_016",
        type: "multiple_choice",
        question: "Which of the following creatures belongs to the reptile family?",
        options: ["Crocodile", "Penguin", "Dolphin", "Salamander"],
        correctAnswer: "Crocodile",
        explanation: "Crocodiles are scaly, cold-blooded reptiles."
      },
      {
        id: "day48_ex_017",
        type: "fill_in_the_blank",
        question: "Deforestation destroys the natural ______ of thousands of wildlife species.",
        correctAnswer: "habitat",
        explanation: "A 'habitat' is the natural home or environment of an organism."
      },
      {
        id: "day48_ex_018",
        type: "error_correction",
        sentence: "The tiger was praying on a small deer.",
        correctAnswer: "The tiger was preying on a small deer.",
        explanation: "Use 'preying' (hunting), not 'praying' (worship)."
      },
      {
        id: "day48_ex_019",
        type: "translation_hi_en",
        hindiSentence: "प्रवासी पक्षी सर्दियों में इस अभयारण्य में आते हैं।",
        englishSentence: "Migratory birds visit this sanctuary during winter.",
        targetVocabulary: ["migratory birds", "visit", "sanctuary"]
      },
      {
        id: "day48_ex_020",
        type: "matching",
        prompt: "Match the animal terms with their biological classifications:",
        pairs: [
          { left: "Kangaroo", right: "Marsupial mammal" },
          { left: "Cobra", right: "Venomous reptile" },
          { left: "Frog", right: "Amphibian" },
          { left: "Salmon", right: "Aquatic fish" }
        ]
      },
      {
        id: "day48_ex_021",
        type: "multiple_choice",
        question: "What is an animal that eats both plants and meat called?",
        options: ["Omnivore", "Herbivore", "Carnivore", "Herb"],
        correctAnswer: "Omnivore",
        explanation: "Omnivores consume both vegetation and other animals."
      },
      {
        id: "day48_ex_022",
        type: "sentence_ordering",
        scrambledWords: ["species", "endangered", "is", "The", "an", "panda", "giant"],
        correctSentence: "The giant panda is an endangered species.",
        explanation: "Subject ('The giant panda') + Verb ('is') + Complement ('an endangered species')."
      },
      {
        id: "day48_ex_023",
        type: "fill_in_the_blank",
        question: "Illegal wildlife ______ threatens the survival of rare parrots and reptiles.",
        correctAnswer: "trafficking",
        explanation: "Wildlife 'trafficking' or 'poaching' is the illegal trade of species."
      },
      {
        id: "day48_ex_024",
        type: "sentence_building",
        prompt: "State that a school of colorful fish swam around the coral reef.",
        targetWords: ["A", "school", "of", "colorful", "fish", "swam", "around", "the", "coral", "reef", "."],
        correctSentence: "A school of colorful fish swam around the coral reef."
      },
      {
        id: "day48_ex_025",
        type: "translation_en_hi",
        englishSentence: "The coral reef ecosystem supports immense marine biodiversity.",
        hindiSentence: "मूंगा चट्टान (कोरल रीफ) पारिस्थितिकी तंत्र विशाल समुद्री जैव विविधता का समर्थन करता है।"
      },
      {
        id: "day48_ex_026",
        type: "multiple_choice",
        question: "What is the female of a horse called in English?",
        options: ["Mare", "Doe", "Ewe", "Hen"],
        correctAnswer: "Mare",
        explanation: "A female horse is a 'mare' (a male is a 'stallion')."
      },
      {
        id: "day48_ex_027",
        type: "error_correction",
        sentence: "A pack of lions was roaring in the jungle.",
        correctAnswer: "A pride of lions was roaring in the jungle.",
        explanation: "Use 'pride' for lions; 'pack' is used for wolves or wild dogs."
      },
      {
        id: "day48_ex_028",
        type: "listening_comprehension",
        audioText: "The Siberian tiger is an endangered apex predator indigenous to the boreal forests of eastern Russia.",
        question: "Where is the Siberian tiger indigenous to?",
        options: ["The Sahara desert", "The boreal forests of eastern Russia", "The Amazon basin", "The Australian outback"],
        correctAnswer: "The boreal forests of eastern Russia",
        explanation: "The audio specifies the boreal forests of eastern Russia."
      },
      {
        id: "day48_ex_029",
        type: "dictation",
        spokenText: "The wetlands provide a safe sanctuary for migratory waterfowl.",
        correctText: "The wetlands provide a safe sanctuary for migratory waterfowl."
      },
      {
        id: "day48_ex_030",
        type: "applied_scenario",
        scenario: "You are explaining why preserving rainforests is crucial. Emphasize that it protects countless species from losing their homes.",
        correctAnswer: "Protecting the rainforest is vital to prevent thousands of species from losing their natural habitats.",
        explanation: "Accurate, ecological, and persuasive sentence structure."
      },
      {
        id: "day48_ex_031",
        type: "multiple_choice",
        question: "What does 'on the brink of extinction' mean?",
        options: ["Rapidly multiplying", "Very close to disappearing forever", "Completely domesticated", "Migrating to cities"],
        correctAnswer: "Very close to disappearing forever",
        explanation: "'On the brink of extinction' means dangerously close to dying out."
      },
      {
        id: "day48_ex_032",
        type: "fill_in_the_blank",
        question: "Eagles and hawks are birds of prey equipped with sharp talons and keen ______.",
        correctAnswer: "eyesight",
        explanation: "Raptors possess exceptionally sharp eyesight and talons."
      },
      {
        id: "day48_ex_033",
        type: "translation_hi_en",
        hindiSentence: "अवैध शिकार पर प्रतिबंध लगाने से गैंडों की संख्या में सुधार हुआ है।",
        englishSentence: "Banning illegal poaching has improved the rhino population.",
        targetVocabulary: ["banning", "illegal poaching", "rhino population"]
      },
      {
        id: "day48_ex_034",
        type: "sentence_building",
        prompt: "Express that whales migrate thousands of miles across oceanic biomes.",
        targetWords: ["Whales", "migrate", "thousands", "of", "miles", "across", "oceanic", "biomes", "."],
        correctSentence: "Whales migrate thousands of miles across oceanic biomes."
      },
      {
        id: "day48_ex_035",
        type: "mixed_retrieval",
        question: "Identify the sentence that has zero errors:",
        options: [
          "A pride of lions was hunting their preys in the safari park.",
          "A pride of lions was stalking its prey in the national park.",
          "We saw five sheeps and three deers praying in the forest.",
          "The amphibian reptile gave birth to ten fishes."
        ],
        correctAnswer: "A pride of lions was stalking its prey in the national park.",
        explanation: "Correct collective noun ('pride'), singular faunal agreement ('its prey'), and precise verb ('stalking')."
      }
    ]
  },
  use: {
    dialogue: {
      title: "Wildlife Safari Encounter",
      context: "A wildlife guide (Dev) points out fauna to a tourist (Emma) during a morning safari in Kaziranga National Park.",
      characters: ["Dev", "Emma"],
      lines: [
        { speaker: "Dev", text: "Look quietly towards that clearing by the marshland, Emma. Do you see the one-horned rhinoceros?", hindi: "दलदली भूमि के पास उस खाली जगह की ओर धीरे से देखिए, एम्मा। क्या आपको एक सींग वाला गैंडा दिखाई दे रहा है?" },
        { speaker: "Emma", text: "Oh, extraordinary! It's grazing peacefully. Is it a strict herbivore?", hindi: "ओह, असाधारण! यह शांति से चर रहा है। क्या यह पूरी तरह शाकाहारी है?" },
        { speaker: "Dev", text: "Yes, rhinos are large herbivores that consume grasses, water hyacinths, and shrub foliage.", hindi: "हाँ, गैंडे बड़े शाकाहारी होते हैं जो घास, जलकुंभी और झाड़ियों की पत्तियां खाते हैं।" },
        { speaker: "Emma", text: "And what is that flock of birds roosting on the buffalo's back?", hindi: "और भैंस की पीठ पर बैठे पक्षियों का वह झुंड क्या है?" },
        { speaker: "Dev", text: "Those are egrets. They share a symbiotic relationship with large mammals by feeding on skin parasites.", hindi: "वे बगुले हैं। वे त्वचा के परजीवियों को खाकर बड़े स्तनधारियों के साथ एक सहजीवी संबंध साझा करते हैं।" },
        { speaker: "Emma", text: "Fascinating! How effective have the anti-poaching measures been in safeguarding this habitat?", hindi: "अद्भुत! इस आवास की सुरक्षा में अवैध शिकार विरोधी उपाय कितने प्रभावी रहे हैं?" },
        { speaker: "Dev", text: "Very effective. Strict forest patrols and local community stewardship have caused the rhino population to rebound significantly.", hindi: "बहुत प्रभावी। सख्त वन गश्त और स्थानीय सामुदायिक भागीदारी के कारण गैंडों की आबादी में उल्लेखनीय सुधार हुआ है।" }
      ]
    },
    speakingPrompt: {
      situation: "Describe a wild animal that fascinates you and talk about its habitat and characteristics.",
      prompts: [
        "What animal is it and what biological class does it belong to (mammal, reptile, bird)?",
        "Describe its natural habitat (e.g., rainforest, ocean, savannah, mountains).",
        "What are its dietary habits (herbivore, carnivore, apex predator) and conservation status?"
      ],
      targetExpressions: ["inhabits the", "apex predator / herbivore", "preys on", "endangered species", "natural habitat"]
    },
    roleplay: {
      scenario: "Conservation briefing at a national park sanctuary.",
      roleA: "Park ranger explaining endangered species monitoring, satellite tracking of tiger prides, and anti-poaching efforts.",
      roleB: "Environmental journalist asking questions about human-wildlife conflict and wetland habitat degradation.",
      sampleDialogue: "Ranger: 'We utilize camera traps and radio collars to monitor our tiger population and intercept poachers.' | Journalist: 'How do you balance wildlife sanctuary boundaries with nearby agricultural settlements?'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day48_bm_001",
        title: "Zoological Classification & Habitat Formulation",
        prompt: "Describe an animal species including its biological class, habitat, diet, and predator/prey relationship in 3-4 sentences.",
        sampleAnswerEn: "The Bengal tiger is an apex carnivore that inhabits the dense mangrove wetlands of the Sundarbans. As an apex predator, it preys on deer, wild boars, and other herbivores. Due to habitat loss and historical poaching, it remains an endangered species protected within specialized tiger reserves.",
        sampleAnswerHi: "बंगाल टाइगर एक शीर्ष मांसाहारी जीव है जो सुंदरबन के घने मैंग्रोव आर्द्रभूमि में निवास करता है। एक शीर्ष शिकारी के रूप में, यह हिरण, जंगली सूअर और अन्य शाकाहारी जीवों का शिकार करता है। आवास के नुकसान और ऐतिहासिक अवैध शिकार के कारण, यह विशेष बाघ अभयारण्यों के भीतर संरक्षित एक लुप्तप्राय प्रजाति बनी हुई है।",
        evaluationCriteria: "Correct biological terms ('apex carnivore', 'inhabits', 'preys on', 'herbivores', 'endangered species')."
      },
      {
        id: "day48_bm_002",
        title: "Faunal Collective Noun & Conservation Discourse",
        prompt: "Draft 3 sentences describing a safari sighting that incorporates two correct collective nouns and a statement on wildlife conservation.",
        sampleAnswerEn: "During our morning safari, we spotted a pride of lions resting beside a watering hole while a large herd of elephants passed in the distance. The local sanctuary enforces stringent anti-poaching protocols to protect these vulnerable mammals. Preserving their contiguous natural habitat is crucial for long-term biodiversity.",
        sampleAnswerHi: "हमारी सुबह की सफारी के दौरान, हमने शेरों के एक झुंड को एक जलाशय के पास आराम करते हुए देखा, जबकि हाथियों का एक बड़ा झुंड दूर से गुजरा। स्थानीय अभयारण्य इन संवेदनशील स्तनधारियों की सुरक्षा के लिए कड़े अवैध शिकार विरोधी नियम लागू करता है। उनके प्राकृतिक आवास को संरक्षित करना दीर्घकालिक जैव विविधता के लिए महत्वपूर्ण है।",
        evaluationCriteria: "Accurate collective nouns ('pride of lions', 'herd of elephants') and conservation vocabulary ('anti-poaching', 'vulnerable mammals', 'biodiversity')."
      },
      {
        id: "day48_bm_003",
        title: "L1 Zoological Interference Remediation",
        prompt: "Correct and explain all errors in: '*Many sheeps and deers were being prayed upon by a pack of lions in the forest.*'",
        sampleAnswerEn: "Correction: 'Many sheep and deer were being preyed upon by a pride of lions in the forest.' Explanation: 1. 'Sheep' and 'deer' are zero-plural nouns and do not take '-s' (*sheeps, *deers). 2. 'Prayed' means religious worship; the correct homophone for hunting is 'preyed upon'. 3. The collective noun for lions is 'pride', not 'pack' (which is used for wolves or wild dogs).",
        sampleAnswerHi: "सुधार: 'Many sheep and deer were being preyed upon by a pride of lions in the forest.' व्याख्या: 1. 'Sheep' और 'deer' बहुवचन में '-s' नहीं लेते। 2. 'Prayed' (पूजा करना) की जगह 'preyed' (शिकार करना) का प्रयोग करें। 3. शेरों के झुंड के लिए 'pride' का उपयोग किया जाता है, 'pack' का नहीं।",
        evaluationCriteria: "Complete identification and correction of zero-plurals, homophone error, and faunal collective noun."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "What is the plural of 'sheep' and 'deer'?", a: "'Sheep' and 'deer' (they do not take '-s')" },
      { q: "What is the collective noun for lions vs wolves vs fish?", a: "A pride of lions, a pack of wolves, a school of fish" },
      { q: "What is the difference between 'pray' and 'prey'?", a: "'Pray' means spiritual worship; 'prey' means an animal hunted for food (or to hunt as a predator)." },
      { q: "What defines an 'amphibian'?", a: "A cold-blooded vertebrate capable of living both in water and on land (e.g., frogs, salamanders)." }
    ],
    spacedTips: [
      "Tip 1: Remember that 'whales' and 'dolphins' are mammals that breathe air through blowholes and nurse their calves.",
      "Tip 2: When discussing predation in the passive voice, use 'preyed upon by' (e.g., 'Antelopes are preyed upon by cheetahs')."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day47.js'), `export const day47 = ${JSON.stringify(day47, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day47.js");

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day48.js'), `export const day48 = ${JSON.stringify(day48, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day48.js");
