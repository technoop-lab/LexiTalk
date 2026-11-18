import fs from 'fs';
import path from 'path';

// Day 26: Past Time Markers & Sequencing Connectors (Yesterday, Last night, Ago, Then, After that)
const day26 = {
  dayNumber: 26,
  id: "day_26",
  titleEn: "Past Time Markers & Sequencing Connectors (Yesterday, Last night, Ago, Then, After that)",
  titleHi: "भूतकाल के समय सूचक और क्रमबद्ध संयोजक (Yesterday, Last night, Ago, Then, After that)",
  cefr: "A1.2",
  estMinutes: 30,
  prerequisites: "Day 21–25 (Past Simple Full Paradigm)",
  objectivesEn: [
    "Differentiate and accurately position past time markers: 'ago' (postposition), 'last' (prepositive with periods), 'yesterday' (parts of day), and 'in + past year'.",
    "Master narrative discourse sequencing connectors: 'First', 'Then', 'Next', 'After that', 'Finally'.",
    "Recount a multi-stage completed event or daily timeline in coherent chronological order.",
    "Eliminate direct Hindi word-order interference like saying '*before two days*' instead of 'two days ago'."
  ],
  objectivesHi: [
    "भूतकाल के समय संकेतकों का सही प्रयोग: 'ago' (बाद में), 'last' (पहले), 'yesterday' और 'in + वर्ष'।",
    "घटनाओं को क्रमबद्ध ढंग से सुनाने वाले संयोजक (Connectors) सीखना: 'First', 'Then', 'Next', 'After that', 'Finally'।",
    "किसी भी घटना या पूरे दिन के घटनाक्रम को सिलसिलेवार अंग्रेज़ी में प्रस्तुत करना।",
    "हिन्दी के 'दो दिन पहले' का गलत अनुवाद '*before two days*' करने की जगह 'two days ago' बोलने की आदत डालना।"
  ],
  teach: {
    hindiExplanation: "जब हम भूतकाल की कोई घटना या कहानी सुनाते हैं, तो दो चीज़ें बहुत महत्वपूर्ण होती हैं: 1. समय बताना (जैसे: 'तीन दिन पहले', 'पिछले साल', 'कल सुबह') और 2. घटनाओं का सही क्रम बताना (जैसे: 'पहले', 'फिर', 'उसके बाद', 'अंत में')। अंग्रेज़ी में 'समय से पहले' के लिए 'Ago' हमेशा समय के बाद आता है (जैसे: 'two days ago', '*before two days*' गलत है)। इसी तरह 'Last' सीधे समय की अवधि से पहले आता है (जैसे: 'last night', 'last week', 'last year')। कहानी को जोड़ने के लिए हम 'First', 'Then', 'After that' और 'Finally' जैसे कनेक्टर्स का प्रयोग करते हैं।",
    englishExplanation: "Narrating past events requires temporal precision and cohesive discourse markers. Past time markers pinpoint completed moments: 'ago' (placed AFTER a duration: 'three days ago'), 'last' (placed BEFORE time periods: 'last week/month/year', 'last night'), 'yesterday' (used with morning/afternoon/evening), and 'in' (with past years: 'in 2021'). To connect actions logically in chronological sequence, English uses discourse sequencing connectors: 'First (of all)', 'Then', 'Next', 'After that', and 'Finally'.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "The Postpositional Placement of 'Ago'",
        description: "'Ago' is placed STRICTLY AFTER the time period: [Number + Time Unit] + ago (e.g., 'two hours ago', 'five years ago'). Never say '*ago two years*' or '*before two years*'.",
        register: "Core Syntax Standard"
      },
      {
        ruleNumber: 2,
        title: "'Last' vs. 'Yesterday' Prepositionless Collocations",
        description: "Say 'last night', 'last Sunday', 'last month', 'last year'. Say 'yesterday morning', 'yesterday afternoon', 'yesterday evening'. Never say '*yesterday night*' (standard is 'last night'). No preposition ('in/on/at') precedes 'last' or 'yesterday'.",
        register: "Idiomatic Collocation"
      },
      {
        ruleNumber: 3,
        title: "Chronological Discourse Sequencing Chain",
        description: "Connect chronological events using: First ➔ Then / Next ➔ After that ➔ Finally. Each connector is usually followed by a comma when placed at the head of a clause.",
        register: "Discourse Cohesion"
      },
      {
        ruleNumber: 4,
        title: "Past Year and Specific Date Anchors",
        description: "Use 'in' for years/months (in 2019, in August) and 'on' for specific calendar dates and days (on May 15th, on Monday).",
        register: "Prepositional Precision"
      }
    ],
    formulaTable: [
      { subjectGroup: "Time Duration + Ago", formula: "[Number] + days/weeks/months/years + ago", exampleEn: "I graduated two years ago.", meaningHi: "मैंने दो साल पहले ग्रेजुएशन किया था।" },
      { subjectGroup: "Last + Time Period", formula: "last + night / week / month / year / [Day of week]", exampleEn: "She bought a car last month.", meaningHi: "उसने पिछले महीने एक कार खरीदी।" },
      { subjectGroup: "Parts of Yesterday", formula: "yesterday + morning / afternoon / evening", exampleEn: "We met yesterday morning.", meaningHi: "हम कल सुबह मिले थे।" },
      { subjectGroup: "Chronological Sequence", formula: "First, [Clause 1]. Then, [Clause 2]. After that, [Clause 3]. Finally, [Clause 4].", exampleEn: "First, I woke up. Then, I had tea. Finally, I left.", meaningHi: "पहले मैं उठा। फिर मैंने चाय पी। अंत में मैं निकल गया।" }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Using '*before two days*' instead of 'two days ago' and '*yesterday night*' instead of 'last night'",
      hindiPattern: "हिन्दी में 'दो दिन पहले' बोलने के कारण भारतीय शिक्षार्थी 'before two days' बोल देते हैं, और 'कल रात' का सीधा अनुवाद 'yesterday night' कर देते हैं।",
      potentialInterference: "Saying '*I came here before two days*' or '*Yesterday night I watched TV*'.",
      explanation: "'Ago' is measured backward from the present moment. 'Before' requires a relative reference point ('before the meeting'). 'Last night' is the fixed idiomatic expression in English.",
      naturalSolution: "Always say 'two days ago' and 'last night'."
    }
  },
  learn: {
    vocabulary: [
      { id: "day26_vocab_001", word: "Ago", pos: "Adverb", ipa: "/əˈɡəʊ/", meaningHi: "पहले (समय की अवधि के बाद)", exampleEn: "The train departed ten minutes ago.", exampleHi: "ट्रेन दस मिनट पहले रवाना हुई थी।" },
      { id: "day26_vocab_002", word: "Yesterday", pos: "Adverb/Noun", ipa: "/ˈjes.tə.deɪ/", meaningHi: "बीता हुआ कल", exampleEn: "We visited the museum yesterday afternoon.", exampleHi: "हमने कल दोपहर संग्रहालय का दौरा किया।" },
      { id: "day26_vocab_003", word: "Previous", pos: "Adjective", ipa: "/ˈpriː.vi.əs/", meaningHi: "पिछला / पूर्व", exampleEn: "He discussed the previous meeting's decisions.", exampleHi: "उसने पिछली बैठक के निर्णयों पर चर्चा की।" },
      { id: "day26_vocab_004", word: "Last", pos: "Determiner/Adverb", ipa: "/lɑːst/", meaningHi: "पिछला / अंतिम", exampleEn: "They moved to Bangalore last year.", exampleHi: "वे पिछले साल बैंगलोर चले गए।" },
      { id: "day26_vocab_005", word: "Finally", pos: "Adverb", ipa: "/ˈfaɪ.nəl.i/", meaningHi: "आखिरकार / अंत में", exampleEn: "Finally, the rain stopped and we went out.", exampleHi: "आखिरकार बारिश रुक गई और हम बाहर गए।" },
      { id: "day26_vocab_006", word: "Afterwards", pos: "Adverb", ipa: "/ˈɑːf.tə.wədz/", meaningHi: "इसके बाद / बाद में", exampleEn: "We had dinner and watched a movie afterwards.", exampleHi: "हमने रात का खाना खाया और उसके बाद एक फ़िल्म देखी।" },
      { id: "day26_vocab_007", word: "Suddenly", pos: "Adverb", ipa: "/ˈsʌd.ən.li/", meaningHi: "अचानक", exampleEn: "Suddenly, the electricity went off.", exampleHi: "अचानक बिजली चली गई।" },
      { id: "day26_vocab_008", word: "Eventually", pos: "Adverb", ipa: "/ɪˈven.tʃu.ə.li/", meaningHi: "अंततः / समय बीतने पर", exampleEn: "Eventually, they reached their hotel safely.", exampleHi: "अंततः वे सुरक्षित अपने होटल पहुँच गए।" },
      { id: "day26_vocab_009", word: "Earlier", pos: "Adverb", ipa: "/ˈɜː.li.ər/", meaningHi: "पहले / कुछ देर पहले", exampleEn: "I saw him earlier this morning.", exampleHi: "मैंने उसे आज सुबह कुछ देर पहले देखा था।" },
      { id: "day26_vocab_010", word: "Recently", pos: "Adverb", ipa: "/ˈriː.sənt.li/", meaningHi: "हाल ही में", exampleEn: "She recently joined a new software firm.", exampleHi: "वह हाल ही में एक नई सॉफ्टवेयर कंपनी में शामिल हुई।" }
    ],
    phrases: [
      { id: "day26_phrase_001", phrase: "Two days ago", register: "Time Expression", meaningHi: "दो दिन पहले" },
      { id: "day26_phrase_002", phrase: "First of all", register: "Discourse Marker", meaningHi: "सबसे पहले" },
      { id: "day26_phrase_003", phrase: "After that", register: "Connector", meaningHi: "उसके बाद" },
      { id: "day26_phrase_004", phrase: "Then suddenly", register: "Narrative Transition", meaningHi: "फिर अचानक" },
      { id: "day26_phrase_005", phrase: "Finally, we reached home.", register: "Narrative Conclusion", meaningHi: "आखिरकार हम घर पहुँच गए।" },
      { id: "day26_phrase_006", phrase: "Earlier this morning", register: "Time Expression", meaningHi: "आज सुबह कुछ देर पहले" }
    ]
  },
  examples: [
    { id: "day26_example_001", en: "I finished my degree three years ago.", hi: "मैंने तीन साल पहले अपनी डिग्री पूरी की थी।" },
    { id: "day26_example_002", en: "We had a family dinner last night.", hi: "हमने कल रात पारिवारिक डिनर किया।" },
    { id: "day26_example_003", en: "First, I woke up at six. Then, I went for a run.", hi: "पहले मैं छह बजे उठा। फिर मैं दौड़ने गया।" },
    { id: "day26_example_004", en: "After that, we had breakfast and left for the office.", hi: "उसके बाद हमने नाश्ता किया और दफ़्तर के लिए निकल गए।" },
    { id: "day26_example_005", en: "Suddenly, the phone rang and woke me up.", hi: "अचानक फ़ोन बजा और मेरी नींद खुल गई।" },
    { id: "day26_example_006", en: "She arrived in Mumbai two weeks ago.", hi: "वह दो हफ़्ते पहले मुंबई पहुँची।" },
    { id: "day26_example_007", en: "They bought this house in 2020.", hi: "उन्होंने यह घर 2020 में खरीदा था।" },
    { id: "day26_example_008", en: "Finally, after three hours of waiting, the train arrived.", hi: "आखिरकार तीन घंटे के इंतज़ार के बाद ट्रेन आ गई।" },
    { id: "day26_example_009", en: "We met him yesterday afternoon at the bookstore.", hi: "हम कल दोपहर उससे किताबों की दुकान पर मिले।" },
    { id: "day26_example_010", en: "First, check the document. Next, sign on the last page.", hi: "पहले दस्तावेज़ की जाँच करें। इसके बाद अंतिम पृष्ठ पर हस्ताक्षर करें।" },
    { id: "day26_example_011", en: "I saw an old friend earlier today.", hi: "मैंने आज कुछ देर पहले एक पुराने दोस्त को देखा था।" },
    { id: "day26_example_012", en: "He called his parents last Sunday.", hi: "उसने पिछले रविवार अपने माता-पिता को फ़ोन किया।" }
  ],
  pronunciation: {
    targetSounds: ["Rhythm and pause phrasing after sentence-initial connectors (First, / Then, / After that, / Finally,)", "Unstressed schwa in 'ago' /əˈɡəʊ/"],
    traps: "Do not stress 'a-' in 'ago'. It is a weak schwa /ə/. Make sure to insert a slight natural pause after introductory sequencing connectors.",
    drills: [
      { id: "day26_audio_001", voiceRole: "TEACHER", audioType: "drill", text: "Two days ago, I called my manager." },
      { id: "day26_audio_002", voiceRole: "TEACHER", audioType: "drill", text: "First, we had tea. Then, we left the hotel." },
      { id: "day26_audio_003", voiceRole: "TEACHER", audioType: "drill", text: "After that, we visited the Taj Mahal." },
      { id: "day26_audio_004", voiceRole: "TEACHER", audioType: "drill", text: "Finally, we reached Delhi last night." }
    ]
  },
  practice: [
    {
      id: "day26_ex_001",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'मैं दो दिन पहले आया था':",
      options: ["I arrived before two days.", "I arrived two days ago.", "I arrived two days before.", "I arrived ago two days."],
      correctAnswer: "I arrived two days ago.",
      explanationEn: "'Ago' is placed directly after the time duration: 'two days ago'.",
      explanationHi: "समय अवधि के बाद 'ago' आता है: 'two days ago' सही है।",
      difficulty: "easy",
      skillTag: "TIME_MARKERS"
    },
    {
      id: "day26_ex_002",
      type: "multiple_choice",
      prompt: "Which expression is the standard idiomatic English for 'कल रात'?",
      options: ["Yesterday night", "Last night", "In last night", "Yesterday evening night"],
      correctAnswer: "Last night",
      explanationEn: "'Last night' is the fixed standard English expression.",
      explanationHi: "'कल रात' के लिए मानक अंग्रेज़ी 'Last night' है।",
      difficulty: "easy",
      skillTag: "TIME_MARKERS"
    },
    {
      id: "day26_ex_003",
      type: "fill_in_blank",
      prompt: "Complete the sentence with the correct sequencing word: 'First, I washed the car. ______, I cleaned the garage.'",
      correctAnswer: "Then",
      acceptableAlternatives: ["then", "Next", "next", "After that", "after that"],
      explanationEn: "'Then' or 'Next' or 'After that' follows 'First' in chronological sequence.",
      explanationHi: "'First' के बाद 'Then' या 'After that' आता है।",
      difficulty: "easy",
      skillTag: "SEQUENCING_CONNECTORS"
    },
    {
      id: "day26_ex_004",
      type: "multiple_choice",
      prompt: "Which preposition is used with a specific past year (e.g. 2021)?",
      options: ["On 2021", "At 2021", "In 2021", "Ago 2021"],
      correctAnswer: "In 2021",
      explanationEn: "Years take the preposition 'in': 'in 2021'.",
      explanationHi: "वर्षों के साथ 'in' का प्रयोग होता है: 'in 2021'।",
      difficulty: "easy",
      skillTag: "PREPOSITIONS_OF_TIME"
    },
    {
      id: "day26_ex_005",
      type: "word_reorder",
      prompt: "Arrange the chronological sequence: [reached home / we / after that / finally / then / had dinner / we]",
      options: ["First we had dinner, and finally we reached home.", "Finally had dinner we then reached home.", "Reached home we after that finally had dinner.", "Then finally we had dinner reached home."],
      correctAnswer: "First we had dinner, and finally we reached home.",
      explanationEn: "Logical narrative flow: First [Action 1], and finally [Action 2].",
      explanationHi: "सही क्रम: First we had dinner, and finally we reached home.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day26_ex_006",
      type: "error_correction",
      prompt: "Identify and correct the mistake: 'I met him before three months in Mumbai.'",
      correctAnswer: "I met him three months ago in Mumbai.",
      explanationEn: "'Before three months' must be corrected to 'three months ago'.",
      explanationHi: "'Before three months' की जगह 'three months ago' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day26_ex_007",
      type: "hindi_to_english",
      prompt: "Translate into English: 'हमने पिछले रविवार को एक नई कार खरीदी।'",
      options: ["We bought a new car last Sunday.", "We bought a new car on last Sunday.", "We buyed a new car last Sunday.", "We bought a new car previous Sunday."],
      correctAnswer: "We bought a new car last Sunday.",
      explanationEn: "No preposition before 'last Sunday': 'We bought a new car last Sunday.'",
      explanationHi: "सही अनुवाद: 'We bought a new car last Sunday.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day26_ex_008",
      type: "english_to_hindi",
      prompt: "What is the Hindi meaning of: 'Suddenly, the lights went out'?",
      options: ["अचानक बिजली चली गई (बत्तियाँ बुझ गईं)।", "धीरे-धीरे बिजली चली गई।", "बिजली नहीं गई थी।", "लाइट जल रही थी।"],
      correctAnswer: "अचानक बिजली चली गई (बत्तियाँ बुझ गईं)।",
      explanationEn: "'Suddenly, the lights went out' means 'अचानक बिजली चली गई'.",
      explanationHi: "सही अर्थ: 'अचानक बिजली चली गई (बत्तियाँ बुझ गईं)।'",
      difficulty: "easy",
      skillTag: "TRANSLATION_EN_HI"
    },
    {
      id: "day26_ex_009",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'She called me five minutes ______.'",
      correctAnswer: "ago",
      explanationEn: "Time period (five minutes) + 'ago'.",
      explanationHi: "समय अवधि के बाद 'ago' आता है।",
      difficulty: "easy",
      skillTag: "TIME_MARKERS"
    },
    {
      id: "day26_ex_010",
      type: "multiple_choice",
      prompt: "Which connector best concludes a story or a multi-step sequence?",
      options: ["First", "Next", "Finally", "Then"],
      correctAnswer: "Finally",
      explanationEn: "'Finally' signals the last stage of a chronological narrative.",
      explanationHi: "'Finally' किसी कहानी या प्रक्रिया के अंतिम चरण को दर्शाता है।",
      difficulty: "easy",
      skillTag: "SEQUENCING_CONNECTORS"
    },
    {
      id: "day26_ex_011",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'We reached the airport yesterday ______ (morning/night).' (For morning time)",
      correctAnswer: "morning",
      explanationEn: "'Yesterday morning' is correct collocation.",
      explanationHi: "'Yesterday morning' सही है।",
      difficulty: "easy",
      skillTag: "TIME_MARKERS"
    },
    {
      id: "day26_ex_012",
      type: "multiple_choice",
      prompt: "Select the sentence with CORRECT preposition usage:",
      options: ["I moved to Delhi in 2018.", "I moved to Delhi on 2018.", "I moved to Delhi at 2018.", "I moved to Delhi before 2018 years."],
      correctAnswer: "I moved to Delhi in 2018.",
      explanationEn: "'In' is used with years.",
      explanationHi: "वर्ष के साथ 'in' आता है: 'in 2018'।",
      difficulty: "easy",
      skillTag: "PREPOSITIONS_OF_TIME"
    },
    {
      id: "day26_ex_013",
      type: "word_reorder",
      prompt: "Put in order: [two weeks ago / bought / a laptop / Rohan]",
      options: ["Rohan bought a laptop two weeks ago.", "Rohan two weeks ago bought a laptop.", "Two weeks ago bought Rohan a laptop.", "A laptop Rohan two weeks ago bought."],
      correctAnswer: "Rohan bought a laptop two weeks ago.",
      explanationEn: "Subject + Verb + Object + Time marker (two weeks ago).",
      explanationHi: "सही क्रम: Rohan bought a laptop two weeks ago.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day26_ex_014",
      type: "error_correction",
      prompt: "Correct the sentence: 'We watched a movie yesterday night.'",
      correctAnswer: "We watched a movie last night.",
      explanationEn: "Replace 'yesterday night' with 'last night'.",
      explanationHi: "'Yesterday night' की जगह 'last night' का प्रयोग करें।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day26_ex_015",
      type: "multiple_choice",
      prompt: "Choose the correct sentence: 'आखिरकार ट्रेन 11 बजे पहुँची':",
      options: ["Finally, the train arrived at 11 o'clock.", "First, the train arrived at 11 o'clock.", "Ago, the train arrived at 11 o'clock.", "Next, the train arrived on 11 o'clock."],
      correctAnswer: "Finally, the train arrived at 11 o'clock.",
      explanationEn: "'Finally' means 'आखिरकार / अंत में'.",
      explanationHi: "सही वाक्य: 'Finally, the train arrived at 11 o'clock.'",
      difficulty: "easy",
      skillTag: "SEQUENCING_CONNECTORS"
    },
    {
      id: "day26_ex_016",
      type: "fill_in_blank",
      prompt: "Fill in the blank: '______ of all, let me introduce our team.' (First / Finally)",
      correctAnswer: "First",
      acceptableAlternatives: ["first"],
      explanationEn: "'First of all' is the fixed opening discourse idiom.",
      explanationHi: "शुरुआत के लिए 'First of all' आता है।",
      difficulty: "easy",
      skillTag: "SEQUENCING_CONNECTORS"
    },
    {
      id: "day26_ex_017",
      type: "hindi_to_english",
      prompt: "Translate: 'वह दस मिनट पहले निकल गया।'",
      options: ["He left ten minutes ago.", "He left before ten minutes.", "He leave ten minutes ago.", "He was leave ten minutes ago."],
      correctAnswer: "He left ten minutes ago.",
      explanationEn: "He left ten minutes ago.",
      explanationHi: "सही अनुवाद: 'He left ten minutes ago.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day26_ex_018",
      type: "multiple_choice",
      prompt: "Which sequence correctly reflects a morning timeline?",
      options: ["First, I woke up. Then, I brushed my teeth. After that, I had breakfast.", "Finally, I woke up. First, I had breakfast. Then, I brushed my teeth.", "Then, I woke up. First, I brushed my teeth. After that, I woke up.", "First, I had dinner. Then, I slept. Finally, I woke up."],
      correctAnswer: "First, I woke up. Then, I brushed my teeth. After that, I had breakfast.",
      explanationEn: "Logical morning chronology: First -> Then -> After that.",
      explanationHi: "सही सुबह का क्रम: First -> Then -> After that.",
      difficulty: "medium",
      skillTag: "NARRATIVE_COHESION"
    },
    {
      id: "day26_ex_019",
      type: "error_correction",
      prompt: "Fix the error: 'She came to India on last year.'",
      correctAnswer: "She came to India last year.",
      explanationEn: "Remove 'on' before 'last year'.",
      explanationHi: "'Last year' से पहले 'on' हटाएँ।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day26_ex_020",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'We had coffee and left the cafe ______ (after that / after).'",
      correctAnswer: "after that",
      acceptableAlternatives: ["afterwards", "afterward"],
      explanationEn: "'After that' or 'afterwards' can stand at clause boundaries.",
      explanationHi: "'After that' सही संयोजक है।",
      difficulty: "medium",
      skillTag: "SEQUENCING_CONNECTORS"
    },
    {
      id: "day26_ex_021",
      type: "multiple_choice",
      prompt: "Select the sentence with accurate time marker syntax:",
      options: ["I saw him earlier this morning.", "I saw him earlier this night.", "I saw him ago morning.", "I saw him yesterday ago."],
      correctAnswer: "I saw him earlier this morning.",
      explanationEn: "'Earlier this morning' is natural idiomatic English.",
      explanationHi: "'Earlier this morning' बिल्कुल सही है।",
      difficulty: "easy",
      skillTag: "TIME_MARKERS"
    },
    {
      id: "day26_ex_022",
      type: "word_reorder",
      prompt: "Order: [suddenly / the car / stopped / in the middle of the road]",
      options: ["Suddenly, the car stopped in the middle of the road.", "The car suddenly in the middle of the road stopped.", "In the middle of the road the car suddenly stopped.", "Stopped suddenly the car in the middle of the road."],
      correctAnswer: "Suddenly, the car stopped in the middle of the road.",
      explanationEn: "Suddenly, + Subject + Verb + Prepositional phrase.",
      explanationHi: "सही क्रम: Suddenly, the car stopped in the middle of the road.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day26_ex_023",
      type: "error_correction",
      prompt: "Correct the sentence: 'The meeting ended ten minutes before.'",
      correctAnswer: "The meeting ended ten minutes ago.",
      explanationEn: "Use 'ago' when measuring back from now without a reference event.",
      explanationHi: "'Before' की जगह 'ago' आएगा: 'ten minutes ago'.",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day26_ex_024",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'They moved to this city five years ______.'",
      correctAnswer: "ago",
      explanationEn: "Duration (five years) + 'ago'.",
      explanationHi: "समय अवधि के बाद 'ago' आता है।",
      difficulty: "easy",
      skillTag: "TIME_MARKERS"
    },
    {
      id: "day26_ex_025",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'पिछले महीने हमने एक नई नीति शुरू की':",
      options: ["Last month, we launched a new policy.", "In last month, we launched a new policy.", "Previous month, we launched a new policy.", "Last month ago, we launched a new policy."],
      correctAnswer: "Last month, we launched a new policy.",
      explanationEn: "'Last month' at the head of the sentence.",
      explanationHi: "सही वाक्य: 'Last month, we launched a new policy.'",
      difficulty: "easy",
      skillTag: "TIME_MARKERS"
    },
    {
      id: "day26_ex_026",
      type: "hindi_to_english",
      prompt: "Translate: 'पहले हमने चाय पी, फिर हमने बात की।'",
      options: ["First we had tea, then we talked.", "First we have tea, then we talk.", "Finally we had tea, next we talked.", "Before we had tea, after we talked."],
      correctAnswer: "First we had tea, then we talked.",
      explanationEn: "First we had tea, then we talked.",
      explanationHi: "सही अनुवाद: 'First we had tea, then we talked.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day26_ex_027",
      type: "error_correction",
      prompt: "Fix the error: 'I graduated in four years ago.'",
      correctAnswer: "I graduated four years ago.",
      explanationEn: "Remove 'in' before 'four years ago'.",
      explanationHi: "'Four years ago' से पहले 'in' हटाएँ।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day26_ex_028",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'We arrived at the resort yesterday ______ (afternoon/night).' (For 3 PM)",
      correctAnswer: "afternoon",
      explanationEn: "'Yesterday afternoon' for 3 PM.",
      explanationHi: "दोपहर के लिए 'yesterday afternoon' आएगा।",
      difficulty: "easy",
      skillTag: "TIME_MARKERS"
    },
    {
      id: "day26_ex_029",
      type: "multiple_choice",
      prompt: "Which pair shows correct usage of 'ago' and 'last'?",
      options: ["Three days ago / Last week", "Before three days / Last week", "Three days ago / In last week", "Three days last / Ago week"],
      correctAnswer: "Three days ago / Last week",
      explanationEn: "'Three days ago' and 'Last week' are both grammatically accurate.",
      explanationHi: "'Three days ago' और 'Last week' दोनों शुद्ध हैं।",
      difficulty: "easy",
      skillTag: "TIME_MARKERS"
    },
    {
      id: "day26_ex_030",
      type: "word_reorder",
      prompt: "Reorder: [left the station / the train / an hour ago]",
      options: ["The train left the station an hour ago.", "The train an hour ago left the station.", "An hour ago the train left the station.", "Left the station the train an hour ago."],
      correctAnswer: "The train left the station an hour ago.",
      explanationEn: "Subject + Verb + Object + Time (an hour ago).",
      explanationHi: "सही क्रम: The train left the station an hour ago.",
      difficulty: "easy",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day26_ex_031",
      type: "dialogue_completion",
      prompt: "Complete the dialogue: A: 'When did you last visit your hometown?' B: 'I visited my hometown about six months ______.'",
      correctAnswer: "ago",
      acceptableAlternatives: ["ago"],
      explanationEn: "Duration (six months) + 'ago'.",
      explanationHi: "'Six months ago' आएगा।",
      difficulty: "easy",
      skillTag: "CONVERSATIONAL_USE"
    },
    {
      id: "day26_ex_032",
      type: "spoken_response",
      prompt: "Speak aloud: Recount what you did this morning in 3 steps using 'First...', 'Then...', 'Finally...'.",
      modelResponse: "First, I woke up early. Then, I had a cup of coffee. Finally, I started my English lesson.",
      correctAnswer: "First, I [action 1]. Then, I [action 2]. Finally, I [action 3].",
      explanationEn: "Use discourse sequencing connectors to tell a 3-step morning story.",
      explanationHi: "'First...', 'Then...', 'Finally...' का प्रयोग करके अपनी सुबह के 3 कदम बताएं।",
      difficulty: "easy",
      skillTag: "SPEAKING"
    },
    {
      id: "day26_ex_033",
      type: "recall",
      prompt: "What is the English expression for 'तीन साल पहले'?",
      correctAnswer: "three years ago",
      acceptableAlternatives: ["Three years ago", "3 years ago"],
      explanationEn: "'Three years ago'.",
      explanationHi: "'Three years ago' सही उत्तर है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day26_ex_034",
      type: "recall",
      prompt: "What is the English expression for 'कल रात'?",
      correctAnswer: "last night",
      acceptableAlternatives: ["Last night"],
      explanationEn: "'Last night' (never '*yesterday night*').",
      explanationHi: "'Last night' सही उत्तर है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day26_ex_035",
      type: "recall",
      prompt: "Which connector introduces the final step of a sequence?",
      correctAnswer: "Finally",
      acceptableAlternatives: ["finally", "Lastly", "lastly"],
      explanationEn: "'Finally' or 'Lastly'.",
      explanationHi: "'Finally' सही उत्तर है।",
      difficulty: "easy",
      skillTag: "RECALL"
    }
  ],
  use: {
    situation: "Narrating an eventful yesterday to a friend, explaining how an unexpected power outage disrupted dinner.",
    dialogue: {
      id: "day26_dialogue_001",
      turns: [
        { speaker: "Deepak", textEn: "How was your evening yesterday, Manisha?", textHi: "मनीषा, कल तुम्हारी शाम कैसी रही?" },
        { speaker: "Manisha", textEn: "It was quite eventful! First, I reached home at seven and started cooking dinner.", textHi: "काफी हलचल भरी रही! पहले, मैं सात बजे घर पहुँची और रात का खाना पकाना शुरू किया।" },
        { speaker: "Deepak", textEn: "And then what happened?", textHi: "और फिर क्या हुआ?" },
        { speaker: "Manisha", textEn: "Then suddenly, around eight o'clock, the entire neighborhood lost power! It was completely dark.", textHi: "फिर अचानक, लगभग आठ बजे, पूरे इलाके की बिजली चली गई! पूरी तरह अंधेरा छा गया।" },
        { speaker: "Deepak", textEn: "Oh no! How did you manage?", textHi: "अरे नहीं! फिर तुमने कैसे संभाला?" },
        { speaker: "Manisha", textEn: "After that, we lit some candles and ordered pizza. Finally, the electricity returned at midnight!", textHi: "उसके बाद, हमने मोमबत्तियाँ जलाईं और पिज़्ज़ा मंगाया। आखिरकार, आधी रात को बिजली वापस आ गई!" }
      ]
    },
    speakingTask: {
      promptEn: "Tell a 4-sentence chronological story about yesterday using: 'First, ... Then, ... After that, ... Finally, ...'.",
      promptHi: "'First...', 'Then...', 'After that...', 'Finally...' का उपयोग करके कल के बारे में 4 वाक्यों की एक सिलसिलेवार कहानी बोलें।"
    }
  },
  assess: [
    { id: "day26_assess_001", question: "Why is 'I met him before two days' incorrect in English?", answer: "'Ago' is the mandatory postposition used to measure time back from the present moment: 'two days ago'. 'Before' requires a specific relative event (e.g. 'before the lunch').", skill: "Temporal Syntax" },
    { id: "day26_assess_002", question: "Why do we say 'last night' instead of 'yesterday night'?", answer: "'Last night' is the fixed lexical collocation in English. 'Yesterday' is paired with morning, afternoon, and evening, but never with night.", skill: "Collocational Accuracy" },
    { id: "day26_assess_003", question: "List 4 sequencing connectors in their natural chronological order.", answer: "First (of all) ➔ Then / Next ➔ After that / Afterwards ➔ Finally.", skill: "Discourse Structuring" }
  ],
  review: {
    spacedRepetitionTag: "PAST_TIME_MARKERS_AND_SEQUENCING",
    recommendedIntervalDays: [1, 3, 7, 14]
  }
};

// Day 27: Giving Reasons & Explanations in Past (Because, So, That's why & Cause-Effect)
const day27 = {
  dayNumber: 27,
  id: "day_27",
  titleEn: "Giving Reasons & Explanations in Past (Because, So, That's why & Cause-Effect)",
  titleHi: "भूतकाल में कारण और परिणाम बताना (Because, So, That's why और Cause-Effect)",
  cefr: "A1.2",
  estMinutes: 30,
  prerequisites: "Day 26 (Past Time Markers & Connectors)",
  objectivesEn: [
    "Differentiate cause clauses ('because + Reason') from result/effect clauses ('so / that's why + Result').",
    "Maintain consistent past tense agreement across both clauses in compound sentences.",
    "Explain reasons for past absences, delays, cancellations, and decisions politely in personal and workplace contexts.",
    "Eliminate double-conjunction errors like using '*Because... so...*' in the same English sentence."
  ],
  objectivesHi: [
    "कारण बताने वाले उपवाक्य ('because + कारण') और परिणाम बताने वाले उपवाक्य ('so / that's why + परिणाम') में अंतर समझना।",
    "दोनों उपवाक्यों में भूतकाल की संगति (Tense Agreement) बनाए रखना।",
    "काम पर देर से आने, अनुपस्थित रहने या योजनाओं के बदलने के कारणों को विनम्रतापूर्वक स्पष्ट करना।",
    "हिन्दी के 'चूँकि... इसलिए...' का गलत अंग्रेज़ी अनुवाद '*Because... so...*' एक साथ बोलने की गलती से बचना।"
  ],
  teach: {
    hindiExplanation: "जब हम भूतकाल की किसी घटना का 'कारण' (Reason) या उसका 'परिणाम' (Result/Effect) बताते हैं, तो हम दो मुख्य शब्दों का प्रयोग करते हैं: 1. 'Because' (क्योंकि) – यह कारण बताता है (जैसे: 'मैं नहीं आया क्योंकि मैं बीमार था' ➔ 'I didn't come because I was sick')। 2. 'So' (इसलिए / तो) – यह परिणाम बताता है (जैसे: 'मैं बीमार था, इसलिए मैं नहीं आया' ➔ 'I was sick, so I didn't come')। सबसे बड़ा नियम: हिन्दी में हम 'चूँकि... इसलिए...' दोनों एक साथ बोलते हैं, लेकिन अंग्रेज़ी के एक वाक्य में 'Because' और 'So' दोनों एक साथ कभी नहीं आते! या तो सिर्फ 'Because' का प्रयोग करें, या सिर्फ 'So' का!",
    englishExplanation: "Explaining causes and consequences in past narratives requires two complementary conjunctions: 'Because' introduces the CAUSE / REASON (Result + because + Reason: 'She was late because the train broke down'). 'So' or 'That's why' introduces the EFFECT / RESULT (Reason + so + Result: 'The train broke down, so she was late'). Tense agreement is essential: both clauses must maintain past forms (was/were, didn't, V2). Crucially, English forbids combining 'Because' and 'So' in the same sentence (saying '*Because I was sick, so I stayed home*' is ungrammatical).",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Clause Structure with 'Because' (Reason Focus)",
        description: "[Main Clause / Result] + because + [Reason Clause]. Example: 'I went to bed early because I was exhausted.' 'Because' explains 'WHY'.",
        register: "Causal Conjunction"
      },
      {
        ruleNumber: 2,
        title: "Clause Structure with 'So' (Result Focus)",
        description: "[Reason Clause] + , so + [Result Clause]. Example: 'I was exhausted, so I went to bed early.' A comma precedes 'so' when joining two independent clauses.",
        register: "Consecutive Conjunction"
      },
      {
        ruleNumber: 3,
        title: "The Single Conjunction Mandate (No '*Because... so*')",
        description: "Never use 'Because' and 'So' together in one sentence. Correct: 'Because it was raining, we stayed indoors.' OR 'It was raining, so we stayed indoors.' Never say: '*Because it was raining, so we stayed indoors.*'",
        register: "Core Syntax Invariant"
      },
      {
        ruleNumber: 4,
        title: "Inter-Clause Tense Harmony",
        description: "Maintain past tense throughout both clauses: 'I didn't buy the phone (past) because it was (past) too expensive.' Do not mix present is/are unless stating a timeless universal fact.",
        register: "Tense Agreement"
      }
    ],
    formulaTable: [
      { subjectGroup: "Reason Pattern (because)", formula: "[Result: Subject + Past Verb] + because + [Reason: Subject + Past Verb]", exampleEn: "He missed the bus because he woke up late.", meaningHi: "उसकी बस छूट गई क्योंकि वह देर से उठा।" },
      { subjectGroup: "Result Pattern (so)", formula: "[Reason: Subject + Past Verb] + , so + [Result: Subject + Past Verb]", exampleEn: "He woke up late, so he missed the bus.", meaningHi: "वह देर से उठा, इसलिए उसकी बस छूट गई।" },
      { subjectGroup: "Explanatory Pattern (That's why)", formula: "[Reason: Subject + Past Verb]. That's why + [Result: Subject + Past Verb].", exampleEn: "I lost my keys. That's why I called you.", meaningHi: "मेरी चाबियाँ खो गई थीं। इसीलिए मैंने तुम्हें फ़ोन किया।" },
      { subjectGroup: "Initial Reason Pattern", formula: "Because + [Reason Clause], + [Result Clause]", exampleEn: "Because it rained heavily, the match was canceled.", meaningHi: "क्योंकि भारी बारिश हुई, मैच रद्द कर दिया गया।" }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The Double Conjunction Error ('*Because... so...*') and tense mismatch",
      hindiPattern: "हिन्दी में 'चूँकि बारिश हो रही थी, इसलिए हम नहीं गए' में दोनों शब्द आते हैं, जिससे शिक्षार्थी अंग्रेज़ी में '*Because it was raining, so we didn't go*' बोल देते हैं।",
      potentialInterference: "Saying '*Because I was tired, so I slept*' or '*I didn't go because I am sick*'.",
      explanation: "English grammar allows only ONE coordinating or subordinating conjunction to connect two clauses. Subordinating 'because' already establishes the relationship.",
      naturalSolution: "Say 'Because I was tired, I slept' OR 'I was tired, so I slept'."
    }
  },
  learn: {
    vocabulary: [
      { id: "day27_vocab_001", word: "Because", pos: "Conjunction", ipa: "/bɪˈkɒz/", meaningHi: "क्योंकि / चूँकि", exampleEn: "I stayed home because I felt sick.", exampleHi: "मैं घर पर ही रुका क्योंकि मेरी तबीयत खराब लग रही थी।" },
      { id: "day27_vocab_002", word: "Reason", pos: "Noun", ipa: "/ˈriː.zən/", meaningHi: "कारण / वजह", exampleEn: "He explained the reason for the delay.", exampleHi: "उसने देरी की वजह बताई।" },
      { id: "day27_vocab_003", word: "Result", pos: "Noun", ipa: "/rɪˈzʌlt/", meaningHi: "परिणाम / नतीजा", exampleEn: "As a result, they won the match.", exampleHi: "नतीजतन, वे मैच जीत गए।" },
      { id: "day27_vocab_004", word: "Therefore", pos: "Adverb", ipa: "/ˈðeə.fɔːr/", meaningHi: "अतः / इसलिए (Formal)", exampleEn: "He worked hard; therefore, he succeeded.", exampleHi: "उसने कड़ी मेहनत की; अतः वह सफल हुआ।" },
      { id: "day27_vocab_005", word: "Cancel", pos: "Verb", ipa: "/ˈkæn.səl/", meaningHi: "रद्द करना", exampleEn: "They canceled the meeting due to bad weather.", exampleHi: "उन्होंने खराब मौसम के कारण बैठक रद्द कर दी।" },
      { id: "day27_vocab_006", word: "Delay", pos: "Noun/Verb", ipa: "/dɪˈleɪ/", meaningHi: "देरी / देर होना", exampleEn: "The flight was delayed by two hours.", exampleHi: "फ़्लाइट में दो घंटे की देरी हुई थी।" },
      { id: "day27_vocab_007", word: "Miss", pos: "Verb", ipa: "/mɪs/", meaningHi: "छूट जाना (ट्रेन/बस)", exampleEn: "I missed the morning train because of traffic.", exampleHi: "ट्रैफ़िक के कारण मेरी सुबह की ट्रेन छूट गई।" },
      { id: "day27_vocab_008", word: "Forget", pos: "Verb", ipa: "/fəˈɡet/", meaningHi: "भूलना", exampleEn: "She forgot her password, so she couldn't log in.", exampleHi: "वह अपना पासवर्ड भूल गई थी, इसलिए वह लॉग इन नहीं कर सकी।" },
      { id: "day27_vocab_009", word: "Repair", pos: "Verb", ipa: "/rɪˈpeər/", meaningHi: "मरम्मत करना / सुधारना", exampleEn: "The mechanic repaired my bike yesterday.", exampleHi: "मैकेनिक ने कल मेरी बाइक की मरम्मत की।" },
      { id: "day27_vocab_010", word: "Cause", pos: "Noun/Verb", ipa: "/kɔːz/", meaningHi: "कारण बनना / वजह", exampleEn: "Heavy rain caused waterlogging in the city.", exampleHi: "भारी बारिश के कारण शहर में जलभराव हो गया।" }
    ],
    phrases: [
      { id: "day27_phrase_001", phrase: "That's why I called you.", register: "Conversational", meaningHi: "इसीलिए मैंने तुम्हें फ़ोन किया।" },
      { id: "day27_phrase_002", phrase: "Because the train was late", register: "Explanation", meaningHi: "क्योंकि ट्रेन लेट थी" },
      { id: "day27_phrase_003", phrase: "I was exhausted, so I rested.", register: "Conversational", meaningHi: "मैं बहुत थक गया था, इसलिए मैंने आराम किया।" },
      { id: "day27_phrase_004", phrase: "There was heavy traffic, so we walked.", register: "Conversational", meaningHi: "भारी ट्रैफ़िक था, इसलिए हम पैदल चले।" },
      { id: "day27_phrase_005", phrase: "Because of the rain", register: "Prepositional Phrase", meaningHi: "बारिश की वजह से" },
      { id: "day27_phrase_006", phrase: "That is the main reason.", register: "Formal / Neutral", meaningHi: "यही मुख्य कारण है।" }
    ]
  },
  examples: [
    { id: "day27_example_001", en: "I didn't come to office because I had a fever.", hi: "मैं दफ़्तर नहीं आया क्योंकि मुझे बुख़ार था।" },
    { id: "day27_example_002", en: "It was raining heavily, so we stayed indoors.", hi: "भारी बारिश हो रही थी, इसलिए हम घर के अंदर ही रहे।" },
    { id: "day27_example_003", en: "She didn't buy the dress because it was too expensive.", hi: "उसने वह ड्रेस नहीं खरीदी क्योंकि वह बहुत महंगी थी।" },
    { id: "day27_example_004", en: "The bus broke down, so we took a taxi.", hi: "बस खराब हो गई, इसलिए हमने टैक्सी ले ली।" },
    { id: "day27_example_005", en: "He forgot his wallet, so he couldn't pay the bill.", hi: "वह अपना बटुआ भूल गया, इसलिए वह बिल नहीं चुका सका।" },
    { id: "day27_example_006", en: "Because the internet was down, we couldn't send the report.", hi: "क्योंकि इंटरनेट बंद था, हम रिपोर्ट नहीं भेज सके।" },
    { id: "day27_example_007", en: "I lost my umbrella. That's why I got wet in the rain.", hi: "मेरा छाता खो गया था। इसीलिए मैं बारिश में भीग गया।" },
    { id: "day27_example_008", en: "They arrived late because of heavy traffic on the highway.", hi: "वे हाईवे पर भारी ट्रैफ़िक के कारण देर से पहुँचे।" },
    { id: "day27_example_009", en: "He studied very hard, so he passed the examination.", hi: "उसने बहुत मेहनत से पढ़ाई की, इसलिए उसने परीक्षा पास कर ली।" },
    { id: "day27_example_010", en: "She didn't eat lunch because she was not hungry.", hi: "उसने दोपहर का खाना नहीं खाया क्योंकि उसे भूख नहीं थी।" },
    { id: "day27_example_011", en: "The shop was closed, so I went to another supermarket.", hi: "दुकान बंद थी, इसलिए मैं दूसरे सुपरमार्केट गया।" },
    { id: "day27_example_012", en: "I was tired yesterday evening, so I slept at nine.", hi: "कल शाम मैं थका हुआ था, इसलिए मैं नौ बजे सो गया।" }
  ],
  pronunciation: {
    targetSounds: ["Unstressed /bɪˈkɒz/ or conversational /kəz/", "Pause before conjunction 'so' /soʊ/ with slight comma intonation"],
    traps: "Do not pronounce 'because' as 'bee-cause' with heavy stress on the first syllable. In natural speech, the first syllable is reduced to /bɪ/ or /bə/.",
    drills: [
      { id: "day27_audio_001", voiceRole: "TEACHER", audioType: "drill", text: "I was tired, so I went to sleep." },
      { id: "day27_audio_002", voiceRole: "TEACHER", audioType: "drill", text: "She stayed home because she had a fever." },
      { id: "day27_audio_003", voiceRole: "TEACHER", audioType: "drill", text: "The train was late. That's why I called you." },
      { id: "day27_audio_004", voiceRole: "TEACHER", audioType: "drill", text: "Because it rained, the match was delayed." }
    ]
  },
  practice: [
    {
      id: "day27_ex_001",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'मैं नहीं आया क्योंकि मैं बीमार था':",
      options: ["I didn't come because I was sick.", "Because I was sick so I didn't come.", "I didn't come so I was sick.", "I was sick because I didn't come."],
      correctAnswer: "I didn't come because I was sick.",
      explanationEn: "'Because' introduces the reason ('I was sick').",
      explanationHi: "कारण बताने के लिए 'because' का प्रयोग होता है।",
      difficulty: "easy",
      skillTag: "CAUSAL_CONNECTORS"
    },
    {
      id: "day27_ex_002",
      type: "multiple_choice",
      prompt: "Which sentence correctly uses 'so' to show result?",
      options: ["The bus broke down, so we took a taxi.", "The bus broke down because we took a taxi.", "Because the bus broke down, so we took a taxi.", "We took a taxi, so the bus broke down."],
      correctAnswer: "The bus broke down, so we took a taxi.",
      explanationEn: "'So' introduces the result ('we took a taxi').",
      explanationHi: "परिणाम बताने के लिए 'so' का प्रयोग होता है।",
      difficulty: "easy",
      skillTag: "RESULT_CONNECTORS"
    },
    {
      id: "day27_ex_003",
      type: "error_correction",
      prompt: "Identify and correct the mistake: 'Because I was tired, so I slept early.'",
      correctAnswer: "Because I was tired, I slept early.",
      explanationEn: "Never combine 'Because' and 'So' in the same sentence. Remove 'so'.",
      explanationHi: "'Because' और 'so' दोनों एक साथ नहीं आते। 'So' हटाएँ।",
      difficulty: "medium",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day27_ex_004",
      type: "fill_in_blank",
      prompt: "Fill in the blank with (because / so): 'She didn't answer my call ______ she was driving.'",
      correctAnswer: "because",
      explanationEn: "'She was driving' is the reason, so 'because' is required.",
      explanationHi: "ड्राइविंग करना कारण था, इसलिए 'because' आएगा।",
      difficulty: "easy",
      skillTag: "CAUSAL_CONNECTORS"
    },
    {
      id: "day27_ex_005",
      type: "fill_in_blank",
      prompt: "Fill in the blank with (because / so): 'It was very hot outside, ______ we turned on the air conditioner.'",
      correctAnswer: "so",
      explanationEn: "'We turned on the AC' is the result, so 'so' is required.",
      explanationHi: "एसी चालू करना परिणाम था, इसलिए 'so' आएगा।",
      difficulty: "easy",
      skillTag: "RESULT_CONNECTORS"
    },
    {
      id: "day27_ex_006",
      type: "word_reorder",
      prompt: "Arrange the words: [called you / that's why / my wallet / I lost / I]",
      options: ["I lost my wallet. That's why I called you.", "That's why I lost my wallet I called you.", "I called you that's why I lost my wallet.", "My wallet I lost that's why called I you."],
      correctAnswer: "I lost my wallet. That's why I called you.",
      explanationEn: "Reason + That's why + Result.",
      explanationHi: "सही क्रम: I lost my wallet. That's why I called you.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day27_ex_007",
      type: "hindi_to_english",
      prompt: "Translate into English: 'दुकान बंद थी, इसलिए मैं वापस आ गया।'",
      options: ["The shop was closed, so I came back.", "The shop was closed because I came back.", "Because the shop was closed so I came back.", "The shop closed so I was come back."],
      correctAnswer: "The shop was closed, so I came back.",
      explanationEn: "Reason (The shop was closed) + , so + Result (I came back).",
      explanationHi: "सही अनुवाद: 'The shop was closed, so I came back.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day27_ex_008",
      type: "english_to_hindi",
      prompt: "What is the Hindi meaning of: 'She was late because she missed the 8 AM train'?",
      options: ["वह देर से आई क्योंकि उसकी सुबह 8 बजे की ट्रेन छूट गई थी।", "उसकी ट्रेन छूट गई इसलिए वह जल्दी आ गई।", "वह समय पर आई क्योंकि ट्रेन लेट थी।", "वह ट्रेन से नहीं आई।"],
      correctAnswer: "वह देर से आई क्योंकि उसकी सुबह 8 बजे की ट्रेन छूट गई थी।",
      explanationEn: "'She was late because she missed the train' explains the reason for her lateness.",
      explanationHi: "सही अर्थ: 'वह देर से आई क्योंकि उसकी सुबह 8 बजे की ट्रेन छूट गई थी।'",
      difficulty: "easy",
      skillTag: "TRANSLATION_EN_HI"
    },
    {
      id: "day27_ex_009",
      type: "multiple_choice",
      prompt: "Select the sentence with PROPER past tense agreement in both clauses:",
      options: ["I didn't buy the shirt because it was too small.", "I didn't buy the shirt because it is too small yesterday.", "I don't bought the shirt because it was small.", "I wasn't buy the shirt because it was small."],
      correctAnswer: "I didn't buy the shirt because it was too small.",
      explanationEn: "Both clauses use accurate past forms: 'didn't buy' and 'was'.",
      explanationHi: "दोनों उपवाक्यों में भूतकाल (didn't buy / was) का सही तालमेल है।",
      difficulty: "medium",
      skillTag: "TENSE_AGREEMENT"
    },
    {
      id: "day27_ex_010",
      type: "fill_in_blank",
      prompt: "Complete the sentence: 'We canceled our picnic ______ it was raining heavily.' (because / so)",
      correctAnswer: "because",
      explanationEn: "'It was raining heavily' explains why the picnic was canceled.",
      explanationHi: "बारिश होना कारण था, इसलिए 'because' आएगा।",
      difficulty: "easy",
      skillTag: "CAUSAL_CONNECTORS"
    },
    {
      id: "day27_ex_011",
      type: "error_correction",
      prompt: "Correct the sentence: 'Because he woke up late, so he missed the flight.'",
      correctAnswer: "Because he woke up late, he missed the flight.",
      explanationEn: "Remove 'so' when 'Because' is already present.",
      explanationHi: "'Because' के साथ 'so' हटाएँ।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day27_ex_012",
      type: "multiple_choice",
      prompt: "Which connector means 'इसीलिए / इस वजह से' in conversational English?",
      options: ["That's why", "Because of", "Although", "However"],
      correctAnswer: "That's why",
      explanationEn: "'That's why' is common for giving explanations.",
      explanationHi: "'That's why' का अर्थ 'इसीलिए' होता है।",
      difficulty: "easy",
      skillTag: "EXPLANATION_CONNECTORS"
    },
    {
      id: "day27_ex_013",
      type: "word_reorder",
      prompt: "Order: [so / was closed / we / the supermarket / to another shop / went]",
      options: ["The supermarket was closed, so we went to another shop.", "So the supermarket was closed we went to another shop.", "We went to another shop so the supermarket was closed.", "The supermarket so was closed went we to another shop."],
      correctAnswer: "The supermarket was closed, so we went to another shop.",
      explanationEn: "Reason clause + , so + Result clause.",
      explanationHi: "सही क्रम: The supermarket was closed, so we went to another shop.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day27_ex_014",
      type: "error_correction",
      prompt: "Identify and fix the error: 'I didn't attended the party because I was tired.'",
      correctAnswer: "I didn't attend the party because I was tired.",
      explanationEn: "'Didn't attended' is a double past error. Revert to 'didn't attend'.",
      explanationHi: "'Didn't' के बाद 'attend' आएगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day27_ex_015",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'मेरी चाबी खो गई थी, इसीलिए मैं अंदर नहीं जा सका':",
      options: ["I lost my key, so I couldn't enter.", "I lost my key because I couldn't enter.", "Because I lost my key so I couldn't enter.", "I lost my key so I can't enter yesterday."],
      correctAnswer: "I lost my key, so I couldn't enter.",
      explanationEn: "Reason (lost key) + , so + Result (couldn't enter).",
      explanationHi: "सही वाक्य: 'I lost my key, so I couldn't enter.'",
      difficulty: "easy",
      skillTag: "RESULT_CONNECTORS"
    },
    {
      id: "day27_ex_016",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'He was hungry, ______ he ordered a large pizza.' (because / so)",
      correctAnswer: "so",
      explanationEn: "'He ordered pizza' is the outcome/result.",
      explanationHi: "पिज़्ज़ा मंगाना परिणाम था, इसलिए 'so' आएगा।",
      difficulty: "easy",
      skillTag: "RESULT_CONNECTORS"
    },
    {
      id: "day27_ex_017",
      type: "hindi_to_english",
      prompt: "Translate: 'वह नहीं आई क्योंकि वह व्यस्त थी।'",
      options: ["She didn't come because she was busy.", "She didn't come so she was busy.", "Because she was busy so she didn't come.", "She not came because she was busy."],
      correctAnswer: "She didn't come because she was busy.",
      explanationEn: "She didn't come because she was busy.",
      explanationHi: "सही अनुवाद: 'She didn't come because she was busy.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day27_ex_018",
      type: "multiple_choice",
      prompt: "Which pair correctly swaps 'because' and 'so'?",
      options: ["I was sick, so I stayed home. = I stayed home because I was sick.", "I was sick, so I stayed home. = I was sick because I stayed home.", "I stayed home, so I was sick. = I stayed home because I was sick.", "Because I stayed home, so I was sick."],
      correctAnswer: "I was sick, so I stayed home. = I stayed home because I was sick.",
      explanationEn: "Both sentences express the exact same logical cause-and-effect relationship.",
      explanationHi: "दोनों वाक्य एक ही कारण-परिणाम संबंध को सही ढंग से दर्शाते हैं।",
      difficulty: "medium",
      skillTag: "LOGICAL_RESTRUCTURING"
    },
    {
      id: "day27_ex_019",
      type: "error_correction",
      prompt: "Fix the error: 'Because there was traffic, so we took the metro.'",
      correctAnswer: "Because there was traffic, we took the metro.",
      explanationEn: "Remove 'so'.",
      explanationHi: "'Because' के साथ 'so' हटाएँ।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day27_ex_020",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'I didn't eat dinner ______ I had a heavy lunch.' (because / so)",
      correctAnswer: "because",
      explanationEn: "'I had a heavy lunch' is the explanation.",
      explanationHi: "भारी दोपहर का भोजन कारण था, इसलिए 'because' आएगा।",
      difficulty: "easy",
      skillTag: "CAUSAL_CONNECTORS"
    },
    {
      id: "day27_ex_021",
      type: "multiple_choice",
      prompt: "Select the sentence that is grammatically ACCURATE:",
      options: ["We didn't go to the beach because the weather was bad.", "We didn't went to the beach because the weather was bad.", "Because the weather was bad, so we didn't go to the beach.", "We didn't go to the beach so the weather was bad."],
      correctAnswer: "We didn't go to the beach because the weather was bad.",
      explanationEn: "Accurate syntax and conjunction usage.",
      explanationHi: "पहला वाक्य पूर्णतः शुद्ध है।",
      difficulty: "easy",
      skillTag: "CAUSAL_CONNECTORS"
    },
    {
      id: "day27_ex_022",
      type: "word_reorder",
      prompt: "Order: [so / woke up late / he / missed the train / Amit]",
      options: ["Amit woke up late, so he missed the train.", "Amit missed the train, so he woke up late.", "So Amit woke up late he missed the train.", "Amit so woke up late missed the train."],
      correctAnswer: "Amit woke up late, so he missed the train.",
      explanationEn: "Reason (Amit woke up late) + , so + Result (he missed the train).",
      explanationHi: "सही क्रम: Amit woke up late, so he missed the train.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day27_ex_023",
      type: "error_correction",
      prompt: "Correct the sentence: 'She didn't call me because she is busy yesterday.'",
      correctAnswer: "She didn't call me because she was busy yesterday.",
      explanationEn: "Change 'is' to past tense 'was' to match 'yesterday'.",
      explanationHi: "'Yesterday' के कारण 'is' बदलकर 'was' होगा।",
      difficulty: "easy",
      skillTag: "TENSE_AGREEMENT"
    },
    {
      id: "day27_ex_024",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'The road was blocked, ______ we took an alternative route.'",
      correctAnswer: "so",
      explanationEn: "'We took an alternative route' is the result.",
      explanationHi: "दूसरा रास्ता लेना परिणाम था, इसलिए 'so' आएगा।",
      difficulty: "easy",
      skillTag: "RESULT_CONNECTORS"
    },
    {
      id: "day27_ex_025",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'मेरी तबीयत ठीक नहीं थी, इसीलिए मैंने छुट्टी ली':",
      options: ["I was unwell. That's why I took a leave.", "I was unwell because I took a leave.", "Because I was unwell so I took a leave.", "I am unwell that's why I took a leave yesterday."],
      correctAnswer: "I was unwell. That's why I took a leave.",
      explanationEn: "Reason + That's why + Result.",
      explanationHi: "सही वाक्य: 'I was unwell. That's why I took a leave.'",
      difficulty: "easy",
      skillTag: "EXPLANATION_CONNECTORS"
    },
    {
      id: "day27_ex_026",
      type: "hindi_to_english",
      prompt: "Translate: 'भारी ट्रैफ़िक था, इसलिए हमें देर हो गई।'",
      options: ["There was heavy traffic, so we were late.", "There was heavy traffic because we were late.", "Because heavy traffic so we were late.", "There is heavy traffic so we were late yesterday."],
      correctAnswer: "There was heavy traffic, so we were late.",
      explanationEn: "There was heavy traffic, so we were late.",
      explanationHi: "सही अनुवाद: 'There was heavy traffic, so we were late.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day27_ex_027",
      type: "error_correction",
      prompt: "Fix the error: 'Because it was Sunday, so all the banks were closed.'",
      correctAnswer: "Because it was Sunday, all the banks were closed.",
      explanationEn: "Remove 'so'.",
      explanationHi: "'Because' के साथ 'so' हटाएँ।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day27_ex_028",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'We reached safely ______ the driver drove very carefully.' (because / so)",
      correctAnswer: "because",
      explanationEn: "'The driver drove carefully' is the reason.",
      explanationHi: "सावधानी से गाड़ी चलाना कारण था, इसलिए 'because' आएगा।",
      difficulty: "easy",
      skillTag: "CAUSAL_CONNECTORS"
    },
    {
      id: "day27_ex_029",
      type: "multiple_choice",
      prompt: "Which sentence explains the reason FIRST?",
      options: ["Because the laptop was slow, I restarted it.", "I restarted the laptop because it was slow.", "I restarted the laptop, so it was slow.", "The laptop was slow because I restarted it."],
      correctAnswer: "Because the laptop was slow, I restarted it.",
      explanationEn: "Starting with 'Because' places the reason clause at the beginning.",
      explanationHi: "'Because' से शुरू करने पर कारण पहले आ जाता है।",
      difficulty: "medium",
      skillTag: "CLAUSE_ORDER"
    },
    {
      id: "day27_ex_030",
      type: "word_reorder",
      prompt: "Reorder: [forgot my glasses / couldn't read / I / so / I / the newspaper]",
      options: ["I forgot my glasses, so I couldn't read the newspaper.", "So I forgot my glasses I couldn't read the newspaper.", "I couldn't read the newspaper so forgot I my glasses.", "Forgot I my glasses so couldn't read I the newspaper."],
      correctAnswer: "I forgot my glasses, so I couldn't read the newspaper.",
      explanationEn: "Reason + , so + Result.",
      explanationHi: "सही क्रम: I forgot my glasses, so I couldn't read the newspaper.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day27_ex_031",
      type: "dialogue_completion",
      prompt: "Complete the conversation: Boss: 'Why were you absent yesterday, Priya?' Priya: 'I had a severe migraine, ______ (because / so / that's why) I couldn't come to office.'",
      correctAnswer: "so",
      acceptableAlternatives: ["that's why", "so"],
      explanationEn: "'So' connects the migraine (reason) to absence (result).",
      explanationHi: "परिणाम जोड़ने के लिए 'so' या 'that's why' आएगा।",
      difficulty: "easy",
      skillTag: "CONVERSATIONAL_USE"
    },
    {
      id: "day27_ex_032",
      type: "spoken_response",
      prompt: "Speak aloud: Give a reason why you were late or stayed home using '...because...' or '..., so...'.",
      modelResponse: "I missed the morning bus, so I was late for work.",
      correctAnswer: "[Reason clause], so [Result clause]. / [Result clause] because [Reason clause].",
      explanationEn: "Construct a compound sentence explaining a cause-and-effect relationship in past tense.",
      explanationHi: "भूतकाल में कारण और परिणाम बताते हुए एक वाक्य बोलें।",
      difficulty: "easy",
      skillTag: "SPEAKING"
    },
    {
      id: "day27_ex_033",
      type: "recall",
      prompt: "Which conjunction introduces a REASON ('क्योंकि')?",
      correctAnswer: "because",
      acceptableAlternatives: ["Because"],
      explanationEn: "'Because' introduces reasons.",
      explanationHi: "'Because' कारण बताता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day27_ex_034",
      type: "recall",
      prompt: "Which conjunction introduces a RESULT ('इसलिए')?",
      correctAnswer: "so",
      acceptableAlternatives: ["So", "that's why", "That's why"],
      explanationEn: "'So' introduces results.",
      explanationHi: "'So' परिणाम बताता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day27_ex_035",
      type: "recall",
      prompt: "Can 'Because' and 'So' be used together in the same English sentence?",
      correctAnswer: "No",
      acceptableAlternatives: ["no", "never", "No, never"],
      explanationEn: "No, never combine 'Because' and 'So' in one sentence.",
      explanationHi: "नहीं, 'Because' और 'So' एक साथ कभी नहीं आते।",
      difficulty: "easy",
      skillTag: "RECALL"
    }
  ],
  use: {
    situation: "Explaining to a team lead why an urgent email was delayed during yesterday's office internet outage.",
    dialogue: {
      id: "day27_dialogue_001",
      turns: [
        { speaker: "Neeraj", textEn: "Good morning, Sanya. Did you send the client quotation yesterday?", textHi: "शुभ प्रभात, सान्या। क्या तुमने कल क्लाइंट को कोटेशन भेजा था?" },
        { speaker: "Sanya", textEn: "I prepared it on time, but our office Wi-Fi disconnected at 4 PM, so I couldn't email it.", textHi: "मैंने समय पर तैयार कर लिया था, लेकिन शाम 4 बजे हमारे ऑफिस का वाई-फ़ाई डिस्कनेक्ट हो गया, इसलिए मैं ईमेल नहीं भेज सकी।" },
        { speaker: "Neeraj", textEn: "I understand. Did you try using your phone hotspot?", textHi: "मैं समझता हूँ। क्या तुमने अपने फ़ोन के हॉटस्पॉट का इस्तेमाल करने की कोशिश की?" },
        { speaker: "Sanya", textEn: "I tried, but my phone battery died because I forgot my charger at home. That's why I couldn't connect.", textHi: "मैंने कोशिश की, लेकिन मेरे फ़ोन की बैटरी खत्म हो गई क्योंकि मैं अपना चार्जर घर पर भूल गई थी। इसीलिए मैं कनेक्ट नहीं कर सकी।" },
        { speaker: "Neeraj", textEn: "No problem. Please send it right away this morning.", textHi: "कोई बात नहीं। कृपया आज सुबह इसे तुरंत भेज दो।" }
      ]
    },
    speakingTask: {
      promptEn: "Explain a problem you faced recently and give the reason and result using '...because...' and '..., so...'.",
      promptHi: "हाल ही में आई किसी समस्या का कारण और परिणाम 'because' और 'so' का उपयोग करके बताएं।"
    }
  },
  assess: [
    { id: "day27_assess_001", question: "Why is 'Because I was sick, so I didn't come' considered a major grammatical error?", answer: "Because English does not allow two coordinating/subordinating conjunctions to connect the same two clauses. Use either 'Because I was sick, I didn't come' OR 'I was sick, so I didn't come'.", skill: "Conjunction Syntax" },
    { id: "day27_assess_002", question: "How does the focus differ between 'I stayed home because I was tired' and 'I was tired, so I stayed home'?", answer: "'Because' places focus on the underlying cause/reason, whereas 'so' places focus on the resulting consequence/outcome.", skill: "Discourse Semantics" },
    { id: "day27_assess_003", question: "Explain the rule of inter-clause tense harmony when giving reasons for past events.", answer: "Both the main result clause and the causal reason clause must agree in past tense forms (e.g. 'didn't buy' with 'was', NOT with present 'is').", skill: "Tense Harmony" }
  ],
  review: {
    spacedRepetitionTag: "PAST_CAUSAL_AND_RESULT_CLAUSES",
    recommendedIntervalDays: [1, 3, 7, 14]
  }
};

// Write files
fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day26.js'), `export const day26 = ${JSON.stringify(day26, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Wrote day26.js");

fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day27.js'), `export const day27 = ${JSON.stringify(day27, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Wrote day27.js");
