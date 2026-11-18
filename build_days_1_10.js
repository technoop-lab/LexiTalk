import fs from 'fs';

const daysData = [
  // DAY 1
  {
    dayNumber: 1,
    id: "day_01",
    titleEn: "Daily Greetings, Time-Bound Salutations & Basic Parting",
    titleHi: "दैनिक अभिवादन, समय-आधारित नमस्कार और विदाई के शिष्टाचार",
    cefr: "A1.1",
    estMinutes: 25,
    prerequisites: "None (True Beginner)",
    objectivesEn: [
      "Distinguish and accurately apply time-specific greetings (Good morning, afternoon, evening).",
      "Differentiate between greeting formulas (meeting) and parting formulas (departing).",
      "Introduce oneself simply and respond politely to basic social inquiries."
    ],
    objectivesHi: [
      "समय के अनुसार सही अभिवादन (Good morning, afternoon, evening) चुनना।",
      "मिलते समय (Greeting) और विदा लेते समय (Parting) के शब्दों का अंतर समझना।",
      "सरल तरीके से अपना परिचय देना और सामान्य बातचीत शुरू करना।"
    ],
    teach: {
      hindiExplanation: "हिन्दी में हम दिन के किसी भी समय मिलने पर 'नमस्ते' या 'प्रणाम' कह सकते हैं। समय बदलने से हमारा मूल शब्द नहीं बदलता। परन्तु अंग्रेज़ी में समय के अनुसार अभिवादन के शब्द पूरी तरह बदल जाते हैं। सुबह से दोपहर 12 बजे तक 'Good morning', दोपहर 12 से शाम 5 बजे तक 'Good afternoon', और शाम 5 बजे के बाद मिलते समय 'Good evening' कहा जाता है।",
      englishExplanation: "In English, greetings are tied directly to the clock and social context. Unlike languages with a single all-day greeting, English uses specific formulas depending on the time of day and whether you are arriving or leaving.",
      grammarRules: [
        {
          ruleNumber: 1,
          title: "Meeting vs. Parting (मिलना बनाम विदाई)",
          description: "'Good evening' is a greeting used when arriving at any time after 5:00 PM (even late at night). 'Good night' is strictly a parting phrase used when leaving or going to bed.",
          register: "Context-Dependent"
        },
        {
          ruleNumber: 2,
          title: "Addressing People (संबोधन)",
          description: "In formal settings, titles such as 'Sir', 'Ma'am', 'Mr. [Last Name]', or 'Dr. [Last Name]' follow the greeting. In informal settings among peers, first names or casual greetings like 'Hi' / 'Hello' are natural.",
          register: "Formal vs. Informal"
        }
      ],
      formulaTable: [
        { timeWindow: "05:00 AM – 12:00 PM", context: "Formal/Neutral Meeting", formula: "Good morning, [Name/Title]!", meaningHi: "शुभ प्रभात / नमस्ते" },
        { timeWindow: "12:00 PM – 05:00 PM", context: "Formal/Neutral Meeting", formula: "Good afternoon, [Name/Title]!", meaningHi: "शुभ दोपहर / नमस्कार" },
        { timeWindow: "05:00 PM – Late Night", context: "Formal/Neutral Meeting", formula: "Good evening, [Name/Title]!", meaningHi: "शुभ संध्या / नमस्कार" },
        { timeWindow: "Night / Bedtime", context: "Parting / Leaving", formula: "Good night! / Sleep well.", meaningHi: "शुभ रात्रि (विदाई)" },
        { timeWindow: "Anytime", context: "Friendly Parting", formula: "Goodbye! / See you tomorrow.", meaningHi: "अलविदा / कल मिलते हैं।" }
      ],
      hindiSpeakerTrap: {
        trapTitle: "Using 'Good night' as a greeting upon arrival at night",
        hindiPattern: "रात 8 बजे किसी के घर पहुँचने पर हिन्दी में 'नमस्ते' कहते हैं, जिसे कई शिक्षार्थी अंग्रेज़ी में 'Good night' अनुवाद कर देते हैं।",
        potentialInterference: "Saying 'Good night, Uncle' immediately upon entering someone's home at 8 PM.",
        explanation: "'Good night' signals that the conversation is ending and you or the other person are parting to sleep. It is never used to start a conversation.",
        naturalSolution: "Say 'Good evening, Uncle! How are you?' when arriving, and save 'Good night' for when you leave."
      }
    },
    learn: {
      vocabulary: [
        { id: "day01_vocab_001", word: "Morning", pos: "Noun", ipa: "/ˈmɔː.nɪŋ/", meaningHi: "सुबह / प्रभात", exampleEn: "I wake up early in the morning.", exampleHi: "मैं सुबह जल्दी उठता हूँ।" },
        { id: "day01_vocab_002", word: "Afternoon", pos: "Noun", ipa: "/ˌɑːf.təˈnuːn/", meaningHi: "दोपहर", exampleEn: "Let us meet in the afternoon.", exampleHi: "चलो दोपहर में मिलते हैं।" },
        { id: "day01_vocab_003", word: "Evening", pos: "Noun", ipa: "/ˈiːv.nɪŋ/", meaningHi: "शाम / संध्या", exampleEn: "We go for a walk in the evening.", exampleHi: "हम शाम को टहलने जाते हैं।" },
        { id: "day01_vocab_004", word: "Night", pos: "Noun", ipa: "/naɪt/", meaningHi: "रात", exampleEn: "The stars shine at night.", exampleHi: "रात में तारे चमकते हैं।" },
        { id: "day01_vocab_005", word: "Greet", pos: "Verb", ipa: "/ɡriːt/", meaningHi: "अभिवादन करना / नमस्कार करना", exampleEn: "Always greet your guests politely.", exampleHi: "हमेशा अपने मेहमानों का विनम्रता से अभिवादन करें।" },
        { id: "day01_vocab_006", word: "Pleased", pos: "Adjective", ipa: "/pliːzd/", meaningHi: "प्रसन्न / खुश", exampleEn: "I am pleased to meet you.", exampleHi: "मुझे आपसे मिलकर बहुत खुशी हुई।" },
        { id: "day01_vocab_007", word: "Friend", pos: "Noun", ipa: "/frend/", meaningHi: "मित्र / दोस्त", exampleEn: "Rohan is my good friend.", exampleHi: "रोहन मेरा अच्छा मित्र है।" },
        { id: "day01_vocab_008", word: "Tomorrow", pos: "Noun/Adv", ipa: "/təˈmɒr.əʊ/", meaningHi: "कल (आने वाला दिन)", exampleEn: "See you tomorrow at nine.", exampleHi: "कल सुबह नौ बजे मिलते हैं।" },
        { id: "day01_vocab_009", word: "Colleague", pos: "Noun", ipa: "/ˈkɒl.iːɡ/", meaningHi: "सहकर्मी (साथ काम करने वाला)", exampleEn: "She is my office colleague.", exampleHi: "वह मेरी दफ़्तर की सहकर्मी है।" },
        { id: "day01_vocab_010", word: "Depart", pos: "Verb", ipa: "/dɪˈpɑːt/", meaningHi: "विदा होना / प्रस्थान करना", exampleEn: "The bus will depart soon.", exampleHi: "बस जल्द ही प्रस्थान करेगी।" }
      ],
      phrases: [
        { id: "day01_phrase_001", phrase: "Good morning, Sir / Ma'am.", register: "Formal", meaningHi: "शुभ प्रभात महोदय / महोदया।" },
        { id: "day01_phrase_002", phrase: "Pleased to meet you.", register: "Formal/Neutral", meaningHi: "आपसे मिलकर प्रसन्नता हुई।" },
        { id: "day01_phrase_003", phrase: "Nice meeting you.", register: "Neutral", meaningHi: "आपसे मिलकर अच्छा लगा।" },
        { id: "day01_phrase_004", phrase: "How are you doing today?", register: "Neutral", meaningHi: "आज आप कैसे हैं?" },
        { id: "day01_phrase_005", phrase: "See you tomorrow / See you later.", register: "Informal/Neutral", meaningHi: "कल मिलते हैं / बाद में मिलते हैं।" },
        { id: "day01_phrase_006", phrase: "Take care and good night!", register: "Neutral", meaningHi: "अपना ध्यान रखना और शुभ रात्रि!" }
      ]
    },
    examples: [
      { id: "day01_example_001", en: "Good morning, Dr. Sharma! How are you today?", hi: "शुभ प्रभात, डॉ. शर्मा! आज आप कैसे हैं?" },
      { id: "day01_example_002", en: "Good afternoon, everyone! Welcome to the meeting.", hi: "शुभ दोपहर, आप सभी को! बैठक में स्वागत है।" },
      { id: "day01_example_003", en: "Good evening, Uncle! It is nice to see you.", hi: "शुभ संध्या, अंकल जी! आपसे मिलकर अच्छा लगा।" },
      { id: "day01_example_004", en: "It was a wonderful dinner. Good night, Amit!", hi: "बहुत ही शानदार रात्रिभोज था। शुभ रात्रि, अमित!" },
      { id: "day01_example_005", en: "I am fine, thank you. How about you?", hi: "मैं ठीक हूँ, धन्यवाद। आप कैसे हैं?" }
    ],
    pronunciation: {
      targetSounds: ["Short /ʊ/ in 'Good'", "Nasal /ŋ/ in 'Morning' and 'Evening'"],
      traps: "Avoid over-pronouncing the hard 'g' sound at the end of 'morning' or 'evening'. Let it end in a smooth nasal sound.",
      drills: [
        { id: "day01_audio_001", voiceRole: "TEACHER", audioType: "drill", text: "Good morning, Sir." },
        { id: "day01_audio_002", voiceRole: "TEACHER", audioType: "drill", text: "Pleased to meet you." },
        { id: "day01_audio_003", voiceRole: "TEACHER", audioType: "drill", text: "Good evening, everyone." },
        { id: "day01_audio_004", voiceRole: "TEACHER", audioType: "drill", text: "Good night and sweet dreams." }
      ]
    },
    practice: [
      // 35 Practice Items
      {
        id: "day01_ex_001",
        type: "multiple_choice",
        prompt: "You meet your department head in the corridor at 9:30 AM. What is the most appropriate greeting?",
        options: ["Good night, Sir!", "Good morning, Sir!", "Good afternoon, Sir!", "Goodbye, Sir!"],
        correctAnswer: "Good morning, Sir!",
        explanationEn: "'Good morning' is used from sunrise until 12:00 noon.",
        explanationHi: "सुबह 12:00 बजे से पहले मिलने पर 'Good morning' कहा जाता है।",
        difficulty: "easy",
        skillTag: "GREETINGS_TIME"
      },
      {
        id: "day01_ex_002",
        type: "multiple_choice",
        prompt: "You arrive at a family dinner party at 8:00 PM and meet the host. What should you say upon arrival?",
        options: ["Good evening!", "Good night!", "Good morning!", "Farewell!"],
        correctAnswer: "Good evening!",
        explanationEn: "'Good evening' is the greeting upon arrival at night. 'Good night' is only for departing.",
        explanationHi: "रात के समय भी जब हम किसी से मिलते हैं तो 'Good evening' बोलते हैं।",
        difficulty: "easy",
        skillTag: "GREETINGS_TIME"
      },
      {
        id: "day01_ex_003",
        type: "multiple_choice",
        prompt: "You are leaving your office desk at 5:30 PM to go home. What is a natural parting phrase?",
        options: ["Good morning!", "Good afternoon!", "Goodbye, see you tomorrow!", "Please, thank you!"],
        correctAnswer: "Goodbye, see you tomorrow!",
        explanationEn: "'Goodbye, see you tomorrow' is a natural parting phrase when concluding work for the day.",
        explanationHi: "शाम को काम से निकलते समय विदाई के लिए 'Goodbye, see you tomorrow' उपयुक्त है।",
        difficulty: "easy",
        skillTag: "PARTINGS"
      },
      {
        id: "day01_ex_004",
        type: "multiple_choice",
        prompt: "Choose the natural English phrase for: 'आपसे मिलकर बहुत खुशी हुई।'",
        options: ["I am going home.", "Pleased to meet you.", "What is your name?", "Excuse me now."],
        correctAnswer: "Pleased to meet you.",
        explanationEn: "'Pleased to meet you' expresses politeness and warmth when meeting someone.",
        explanationHi: "किसी से मिलकर प्रसन्नता व्यक्त करने के लिए 'Pleased to meet you' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "INTRODUCTIONS"
      },
      {
        id: "day01_ex_005",
        type: "multiple_choice",
        prompt: "It is 2:30 PM and you enter a shop. What is the standard greeting?",
        options: ["Good afternoon!", "Good night!", "Good morning!", "Sweet dreams!"],
        correctAnswer: "Good afternoon!",
        explanationEn: "'Good afternoon' is used between 12:00 PM (noon) and approximately 5:00 PM.",
        explanationHi: "दोपहर 12:00 से शाम 5:00 बजे के बीच 'Good afternoon' कहा जाता है।",
        difficulty: "easy",
        skillTag: "GREETINGS_TIME"
      },
      {
        id: "day01_ex_006",
        type: "multiple_choice",
        prompt: "Which phrase is used ONLY during parting or right before going to sleep?",
        options: ["Hello", "Good morning", "Good evening", "Good night"],
        correctAnswer: "Good night",
        explanationEn: "'Good night' is never an arrival greeting; it is exclusively a parting phrase at night.",
        explanationHi: "'Good night' केवल विदा लेते समय या सोने जाते समय बोला जाता है।",
        difficulty: "easy",
        skillTag: "PARTINGS"
      },
      {
        id: "day01_ex_007",
        type: "multiple_choice",
        prompt: "A colleague introduces a new team member to you. What is a friendly, standard response?",
        options: ["Nice to meet you.", "Thank you for water.", "I go home now.", "Stop here please."],
        correctAnswer: "Nice to meet you.",
        explanationEn: "'Nice to meet you' is standard when being introduced to someone for the first time.",
        explanationHi: "नए व्यक्ति से परिचय के समय 'Nice to meet you' बोलते हैं।",
        difficulty: "easy",
        skillTag: "INTRODUCTIONS"
      },
      {
        id: "day01_ex_008",
        type: "multiple_choice",
        prompt: "What is a polite and common reply to: 'How are you today?'",
        options: ["I am fine, thank you!", "Good night!", "Yes, please come in.", "Tomorrow at six."],
        correctAnswer: "I am fine, thank you!",
        explanationEn: "'I am fine, thank you' directly answers the inquiry and thanks the person for asking.",
        explanationHi: "'आप कैसे हैं?' के उत्तर में 'I am fine, thank you' सबसे शिष्ट और स्वाभाविक उत्तर है।",
        difficulty: "easy",
        skillTag: "POLITE_REPLIES"
      },
      {
        id: "day01_ex_009",
        type: "multiple_choice",
        prompt: "It is 11:45 AM. You meet your college teacher. What greeting is correct?",
        options: ["Good morning, Professor.", "Good afternoon, Professor.", "Good night, Professor.", "Bye Professor."],
        correctAnswer: "Good morning, Professor.",
        explanationEn: "Until 12:00 PM, 'Good morning' remains the accurate time-bound greeting.",
        explanationHi: "दोपहर 12:00 बजे से पहले 'Good morning' ही सही है।",
        difficulty: "easy",
        skillTag: "GREETINGS_TIME"
      },
      {
        id: "day01_ex_010",
        type: "multiple_choice",
        prompt: "Which greeting is informal and commonly used among close friends?",
        options: ["Respected Sir", "Hey / Hi", "Good night", "Your obediently"],
        correctAnswer: "Hey / Hi",
        explanationEn: "'Hi' or 'Hey' is casual and friendly among friends and peers.",
        explanationHi: "दोस्तों के बीच अनौपचारिक रूप से 'Hi' या 'Hey' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "INFORMAL_GREETINGS"
      },
      {
        id: "day01_ex_011",
        type: "fill_blank",
        prompt: "Fill in the blank (7:30 AM greeting): 'Good _______, Dad!'",
        correctAnswer: "morning",
        explanationEn: "'morning' is appropriate for morning hours.",
        explanationHi: "सुबह के लिए 'morning' भरें।",
        difficulty: "easy",
        skillTag: "GREETINGS_TIME"
      },
      {
        id: "day01_ex_012",
        type: "fill_blank",
        prompt: "Fill in the blank: 'Pleased to _______ you, Mr. Kapoor.'",
        correctAnswer: "meet",
        explanationEn: "'Pleased to meet you' is the complete polite idiom.",
        explanationHi: "'मिलने' के लिए 'meet' शब्द आएगा।",
        difficulty: "easy",
        skillTag: "INTRODUCTIONS"
      },
      {
        id: "day01_ex_013",
        type: "fill_blank",
        prompt: "Fill in the blank (2:00 PM greeting): 'Good _______, everyone!'",
        correctAnswer: "afternoon",
        explanationEn: "'afternoon' is used from 12:00 PM to 5:00 PM.",
        explanationHi: "दोपहर 2:00 बजे 'afternoon' का प्रयोग होगा।",
        difficulty: "easy",
        skillTag: "GREETINGS_TIME"
      },
      {
        id: "day01_ex_014",
        type: "fill_blank",
        prompt: "Fill in the blank: 'See you _______ morning at nine o'clock.' (कल)",
        correctAnswer: "tomorrow",
        explanationEn: "'tomorrow' refers to the following day.",
        explanationHi: "आने वाले कल के लिए 'tomorrow' भरें।",
        difficulty: "easy",
        skillTag: "PARTINGS"
      },
      {
        id: "day01_ex_015",
        type: "fill_blank",
        prompt: "Fill in the blank (6:30 PM meeting): 'Good _______, Madam!'",
        correctAnswer: "evening",
        explanationEn: "'evening' is used when meeting after 5:00 PM.",
        explanationHi: "शाम को मिलते समय 'evening' आता है।",
        difficulty: "easy",
        skillTag: "GREETINGS_TIME"
      },
      {
        id: "day01_ex_016",
        type: "fill_blank",
        prompt: "Fill in the blank: 'I am _______, thank you very much.' (ठीक / स्वस्थ)",
        correctAnswer: "fine",
        explanationEn: "'fine' is the standard adjective for state of health/wellbeing in replies.",
        explanationHi: "'मैं ठीक हूँ' = 'I am fine'.",
        difficulty: "easy",
        skillTag: "POLITE_REPLIES"
      },
      {
        id: "day01_ex_017",
        type: "fill_blank",
        prompt: "Fill in the blank: 'Have a _______ day ahead!' (अच्छा / शुभ)",
        correctAnswer: "great",
        acceptableAlternatives: ["nice", "good", "wonderful"],
        explanationEn: "'great', 'nice', or 'good' are natural adjectives when wishing someone a pleasant day.",
        explanationHi: "दिन शुभ रहने की कामना के लिए 'great' या 'nice' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "PARTINGS"
      },
      {
        id: "day01_ex_018",
        type: "fill_blank",
        prompt: "Fill in the blank (Bedtime parting): 'Good _______! Sleep tight.'",
        correctAnswer: "night",
        explanationEn: "'night' completes the bedtime parting formula.",
        explanationHi: "सोने जाते समय 'night' बोला जाता है।",
        difficulty: "easy",
        skillTag: "PARTINGS"
      },
      {
        id: "day01_ex_019",
        type: "ordering",
        prompt: "Arrange the words in correct order to form a polite greeting: [meet] [to] [Pleased] [you]",
        correctAnswer: "Pleased to meet you",
        explanationEn: "Correct order: 'Pleased to meet you'.",
        explanationHi: "सही क्रम: 'Pleased to meet you.'",
        difficulty: "easy",
        skillTag: "INTRODUCTIONS"
      },
      {
        id: "day01_ex_020",
        type: "ordering",
        prompt: "Arrange the words in correct order: [morning] [Good] [Sir] [,] ",
        correctAnswer: "Good morning, Sir",
        explanationEn: "Greeting formula begins with 'Good morning' followed by the title 'Sir'.",
        explanationHi: "सही क्रम: 'Good morning, Sir.'",
        difficulty: "easy",
        skillTag: "GREETINGS_TIME"
      },
      {
        id: "day01_ex_021",
        type: "ordering",
        prompt: "Arrange the words in correct order: [tomorrow] [you] [See] [afternoon]",
        correctAnswer: "See you tomorrow afternoon",
        explanationEn: "Correct order: 'See you tomorrow afternoon'.",
        explanationHi: "सही क्रम: 'See you tomorrow afternoon.'",
        difficulty: "easy",
        skillTag: "PARTINGS"
      },
      {
        id: "day01_ex_022",
        type: "ordering",
        prompt: "Arrange the question in correct order: [are] [How] [you] [today] [?]",
        correctAnswer: "How are you today?",
        explanationEn: "Question structure: Wh-word (How) + Verb (are) + Subject (you) + Time adverb (today)?",
        explanationHi: "प्रश्नवाचक क्रम: 'How are you today?'",
        difficulty: "easy",
        skillTag: "QUESTIONS"
      },
      {
        id: "day01_ex_023",
        type: "ordering",
        prompt: "Arrange the words in correct order: [fine] [am] [thank] [I] [,] [you]",
        correctAnswer: "I am fine, thank you",
        explanationEn: "Correct statement and courtesy response: 'I am fine, thank you'.",
        explanationHi: "सही क्रम: 'I am fine, thank you.'",
        difficulty: "easy",
        skillTag: "POLITE_REPLIES"
      },
      {
        id: "day01_ex_024",
        type: "ordering",
        prompt: "Arrange the words in correct order: [meeting] [Nice] [you] [Rahul] [,] ",
        correctAnswer: "Nice meeting you, Rahul",
        explanationEn: "Formula: 'Nice meeting you, [Name]'.",
        explanationHi: "सही क्रम: 'Nice meeting you, Rahul.'",
        difficulty: "easy",
        skillTag: "INTRODUCTIONS"
      },
      {
        id: "day01_ex_025",
        type: "ordering",
        prompt: "Arrange the words in correct order: [evening] [Good] [everyone] [to]",
        correctAnswer: "Good evening to everyone",
        explanationEn: "Standard address: 'Good evening to everyone'.",
        explanationHi: "सही क्रम: 'Good evening to everyone.'",
        difficulty: "easy",
        skillTag: "GREETINGS_TIME"
      },
      {
        id: "day01_ex_026",
        type: "ordering",
        prompt: "Arrange the parting phrase: [night] [Good] [take] [and] [care]",
        correctAnswer: "Good night and take care",
        explanationEn: "Parting combination: 'Good night and take care'.",
        explanationHi: "सही क्रम: 'Good night and take care.'",
        difficulty: "easy",
        skillTag: "PARTINGS"
      },
      {
        id: "day01_ex_027",
        type: "translation_hi_en",
        prompt: "Translate into natural English: 'शुभ प्रभात, अंकल जी!'",
        correctAnswer: "Good morning, Uncle!",
        acceptableAlternatives: ["Good morning Uncle!", "Good morning, Uncle."],
        explanationEn: "English places 'Uncle' directly after 'Good morning'.",
        explanationHi: "अंग्रेज़ी में 'Good morning, Uncle!' कहते हैं।",
        difficulty: "easy",
        skillTag: "TRANSLATION"
      },
      {
        id: "day01_ex_028",
        type: "translation_hi_en",
        prompt: "Translate into natural English: 'आपसे मिलकर बहुत अच्छा लगा।'",
        correctAnswer: "Nice to meet you.",
        acceptableAlternatives: ["Pleased to meet you.", "Glad to meet you.", "It was nice meeting you."],
        explanationEn: "'Nice to meet you' or 'Pleased to meet you' are standard equivalents.",
        explanationHi: "'Nice to meet you' या 'Pleased to meet you' दोनों सही हैं।",
        difficulty: "easy",
        skillTag: "TRANSLATION"
      },
      {
        id: "day01_ex_029",
        type: "translation_hi_en",
        prompt: "Translate into natural English: 'अलविदा, कल मिलेंगे!'",
        correctAnswer: "Goodbye, see you tomorrow!",
        acceptableAlternatives: ["Bye, see you tomorrow!", "Goodbye, see you tomorrow."],
        explanationEn: "'Goodbye, see you tomorrow!' captures the warm parting intention.",
        explanationHi: "'Goodbye, see you tomorrow!' सही अनुवाद है।",
        difficulty: "easy",
        skillTag: "TRANSLATION"
      },
      {
        id: "day01_ex_030",
        type: "translation_hi_en",
        prompt: "Translate into natural English: 'शुभ रात्रि, माँ!'",
        correctAnswer: "Good night, Mother!",
        acceptableAlternatives: ["Good night, Mom!", "Good night, Mum!", "Good night Mom!"],
        explanationEn: "'Good night, Mother!' or 'Good night, Mom!' are standard.",
        explanationHi: "'Good night, Mother!' या 'Good night, Mom!' सही अनुवाद है।",
        difficulty: "easy",
        skillTag: "TRANSLATION"
      },
      {
        id: "day01_ex_031",
        type: "translation_hi_en",
        prompt: "Translate into natural English: 'शुभ संध्या, डॉक्टर साहब!'",
        correctAnswer: "Good evening, Doctor!",
        acceptableAlternatives: ["Good evening Doctor!", "Good evening, Dr. Sharma!"],
        explanationEn: "Doctor is addressed as 'Doctor' or 'Dr. [Lastname]'.",
        explanationHi: "डॉक्टर के लिए 'Good evening, Doctor!' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "TRANSLATION"
      },
      {
        id: "day01_ex_032",
        type: "error_correction",
        prompt: "Identify and correct the pragmatic error (Time: 8:00 PM at entrance of a party): 'Good night, Mr. Verma! It is nice to meet you here.'",
        correctAnswer: "Good evening, Mr. Verma! It is nice to meet you here.",
        explanationEn: "When arriving at a social event in the evening, use 'Good evening', not 'Good night'.",
        explanationHi: "शाम/रात को मिलने पर 'Good evening' कहा जाता है, 'Good night' विदाई के लिए सुरक्षित रखें।",
        difficulty: "medium",
        skillTag: "PRAGMATIC_CORRECTION"
      },
      {
        id: "day01_ex_033",
        type: "error_correction",
        prompt: "Correct the preposition error: 'I am pleased for meeting you.'",
        correctAnswer: "I am pleased to meet you.",
        explanationEn: "The adjective 'pleased' takes an infinitive with 'to': 'pleased to meet you'.",
        explanationHi: "'Pleased' के साथ 'to meet' का प्रयोग होता है।",
        difficulty: "medium",
        skillTag: "GRAMMAR_CORRECTION"
      },
      {
        id: "day01_ex_034",
        type: "error_correction",
        prompt: "Correct the time greeting (Spoken at 9:00 AM): 'Good afternoon, Sir.'",
        correctAnswer: "Good morning, Sir.",
        explanationEn: "At 9:00 AM, the correct greeting is 'Good morning'.",
        explanationHi: "सुबह 9:00 बजे 'Good morning' कहा जाता है।",
        difficulty: "easy",
        skillTag: "TIME_ACCURACY"
      },
      {
        id: "day01_ex_035",
        type: "error_correction",
        prompt: "Correct the word order in the question: 'How you are today?'",
        correctAnswer: "How are you today?",
        explanationEn: "In standard interrogative questions, the helping verb 'are' precedes the subject 'you'.",
        explanationHi: "प्रश्न में Helping verb 'are', Subject 'you' से पहले आती है: 'How are you today?'",
        difficulty: "medium",
        skillTag: "SYNTAX"
      }
    ],
    use: {
      situation: "Meeting a new neighbor in the apartment corridor at 6:30 PM.",
      dialogue: {
        id: "day01_dialogue_001",
        turns: [
          { speaker: "Rohit", textEn: "Good evening, Sir! Welcome to our building.", textHi: "शुभ संध्या, सर! हमारे भवन में आपका स्वागत है।" },
          { speaker: "Mr. Singhania", textEn: "Good evening! Thank you very much. I am Alok Singhania.", textHi: "शुभ संध्या! बहुत-बहुत धन्यवाद। मैं आलोक सिंघानिया हूँ।" },
          { speaker: "Rohit", textEn: "Pleased to meet you, Mr. Singhania. I live in flat 402.", textHi: "आपसे मिलकर खुशी हुई, श्री सिंघानिया। मैं फ्लैट 402 में रहता हूँ।" },
          { speaker: "Mr. Singhania", textEn: "Glad to meet you, Rohit. See you around!", textHi: "आपसे मिलकर अच्छा लगा, रोहित। फिर मिलते रहेंगे!" },
          { speaker: "Rohit", textEn: "Goodbye, Sir! Have a wonderful evening.", textHi: "अलविदा, सर! आपकी शाम शुभ हो।" }
        ]
      },
      speakingTask: {
        promptEn: "Imagine you meet your teacher at 2:30 PM outside the library. Record a 3-sentence greeting: greet them according to time, state that you are pleased to meet them, and ask how they are doing.",
        promptHi: "कल्पना कीजिए कि आप दोपहर 2:30 बजे पुस्तकालय के बाहर अपने शिक्षक से मिलते हैं। 3 वाक्यों का अभिवादन बोलें।"
      }
    },
    assess: [
      { id: "day01_assess_001", question: "At what exact time does 'Good morning' transition to 'Good afternoon'?", answer: "12:00 Noon (12:00 PM)", skill: "Time Accuracy" },
      { id: "day01_assess_002", question: "What greeting should you say when arriving for a job interview at 6:00 PM?", answer: "Good evening, Sir/Ma'am.", skill: "Pragmatic Competence" },
      { id: "day01_assess_003", question: "Is 'Good night' used when arriving or departing?", answer: "Exclusively when departing / leaving at night or going to bed.", skill: "Register Awareness" }
    ],
    review: {
      spacedRepetitionTag: "GREETINGS_TIME_FORMULAS_L1",
      recommendedIntervalDays: [1, 3, 9]
    }
  }
];

console.log("Day 1 data ready. Building full array structure...");
