import fs from 'fs';
import path from 'path';

// Day 21: Regular Past Simple Verbs (-ed, -d, -ied) & Yesterday's Actions
const day21 = {
  dayNumber: 21,
  id: "day_21",
  titleEn: "Regular Past Simple Verbs (-ed, -d, -ied) & Yesterday's Actions",
  titleHi: "नियमित भूतकाल क्रियाएँ (-ed, -d, -ied) और कल के कार्य",
  cefr: "A1.2",
  estMinutes: 30,
  prerequisites: "Day 06 (Was/Were Past State), Day 11–12 (Present Action Verbs)",
  objectivesEn: [
    "Form affirmative past simple sentences using regular verbs with '-ed', '-d', and '-ied' endings.",
    "Master the 3 phonetic pronunciation rules for '-ed' endings: /t/ (walked), /d/ (played), and /ɪd/ (waited).",
    "Describe completed actions using past time expressions like 'yesterday', 'last night', and 'yesterday morning'.",
    "Eliminate the common L1 error of using present tense or omitting past inflections when narrating yesterday's events."
  ],
  objectivesHi: [
    "नियमित क्रियाओं (Regular Verbs) में '-ed', '-d' और '-ied' जोड़कर भूतकाल के सकारात्मक वाक्य बनाना।",
    "'-ed' के 3 अलग-अलग उच्चारण नियमों को समझना: /t/ (walked), /d/ (played) और /ɪd/ (waited)।",
    "'Yesterday', 'last night' जैसे समय संकेतकों के साथ कल घटी घटनाओं का वर्णन करना।",
    "हिन्दी भाषियों द्वारा भूतकाल की बात करते समय क्रिया के वर्तमान रूप का प्रयोग करने की गलती से बचना।"
  ],
  teach: {
    hindiExplanation: "जब हम भूतकाल में किसी निश्चित समय पर पूरे हो चुके काम की बात करते हैं (जैसे 'मैंने कल काम किया', 'उसने मुझे फ़ोन किया'), तो हम अंग्रेज़ी में 'Past Simple' (भूतकाल) का प्रयोग करते हैं। नियमित क्रियाओं (Regular Verbs) के लिए हम क्रिया के मूल रूप (V1) में '-ed' या '-d' जोड़ते हैं, जिससे वह Past Form (V2) बन जाती है। सबसे अच्छी बात यह है कि Past Simple के सकारात्मक वाक्यों में सभी कर्ताओं (I, You, We, They, He, She, It) के साथ क्रिया का वही दूसरा रूप (V2) आता है, इसमें 's/es' का कोई झंझट नहीं होता!",
    englishExplanation: "The Past Simple tense is used to describe completed actions that took place at a specific time in the past. For regular verbs, we form the past simple (V2) by adding '-ed' (work -> worked), '-d' (live -> lived), or '-ied' (study -> studied). Unlike the present simple, the verb form remains identical across all subjects (I, you, he, she, we, they). A crucial aspect of mastery is the phonetics of '-ed': it is pronounced as /t/ after voiceless sounds, /d/ after voiced sounds, and /ɪd/ only after 't' or 'd' endings.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Uniform Past Simple Invariable Rule",
        description: "The regular past tense form (V2) is identical for all subjects (I worked, you worked, she worked, they worked). There is no third-person singular '-s' in the past simple.",
        register: "Core Syntax Standard"
      },
      {
        ruleNumber: 2,
        title: "Spelling Rules for Regular Past Verbs",
        description: "1. Most verbs add '-ed' (clean -> cleaned). 2. Verbs ending in '-e' add only '-d' (decide -> decided). 3. Consonant + 'y' changes to '-ied' (study -> studied). 4. Short vowel + consonant doubles the final consonant (stop -> stopped, plan -> planned).",
        register: "Orthographic Rule"
      },
      {
        ruleNumber: 3,
        title: "Three Phonetic Pronunciations of '-ed'",
        description: "/ɪd/ (extra syllable) ONLY after /t/ or /d/ (waited, needed). /t/ after voiceless sounds /p, k, f, s, ʃ, tʃ/ (helped, looked, washed). /d/ after all other voiced sounds and vowels (played, cleaned, called).",
        register: "Phonological Standard"
      },
      {
        ruleNumber: 4,
        title: "Specific Past Time Anchor Requirement",
        description: "Past simple clauses are typically anchored by specific completed time markers: yesterday, last night, last week, in 2022, two hours ago.",
        register: "Pragmatic Usage"
      }
    ],
    formulaTable: [
      { subjectGroup: "All Subjects (I / You / He / She / We / They)", formula: "Subject + Verb-ed (V2) + [Object] + [Past Time Marker]", exampleEn: "I cleaned my room yesterday.", meaningHi: "मैंने कल अपना कमरा साफ़ किया।" },
      { subjectGroup: "Verbs ending in -e", formula: "Subject + Verb-d (V2) + [Complement]", exampleEn: "She lived in Pune for two years.", meaningHi: "वह दो साल तक पुणे में रही।" },
      { subjectGroup: "Verbs ending in Consonant + y", formula: "Subject + Verb-ied (V2) + [Object]", exampleEn: "Rohan studied all night.", meaningHi: "रोहन ने पूरी रात पढ़ाई की।" },
      { subjectGroup: "CVC Doubling Verbs", formula: "Subject + Doubled Consonant + ed (V2)", exampleEn: "The bus stopped suddenly.", meaningHi: "बस अचानक रुक गई।" }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Over-pronouncing '-ed' as a separate syllable and failing to mark V2 in speech",
      hindiPattern: "भारतीय शिक्षार्थी अक्सर 'worked' को 'वर्क-एड' (/wɜːrk-ed/) बोलते हैं, जबकि इसे सिर्फ /wɜːrkt/ बोलना चाहिए। साथ ही बातचीत में 'कल' बोलने के बाद भी क्रिया में V2 लगाना भूल जाते हैं।",
      potentialInterference: "Saying '*Yesterday I work*' instead of '*Yesterday I worked*', or pronouncing *helped* as '*help-ed*'.",
      explanation: "'-ed' is only pronounced as an extra syllable /ɪd/ when the root verb ends in 't' or 'd' (e.g. want -> wanted). In all other verbs, it is a single syllable (/t/ or /d/).",
      naturalSolution: "Always use V2 for completed past actions and pronounce 'worked' as /wɜːrkt/ and 'played' as /pleɪd/."
    }
  },
  learn: {
    vocabulary: [
      { id: "day21_vocab_001", word: "Worked", pos: "Verb (V2)", ipa: "/wɜːkt/", meaningHi: "काम किया", exampleEn: "Priya worked late yesterday evening.", exampleHi: "प्रिया ने कल शाम देर तक काम किया।" },
      { id: "day21_vocab_002", word: "Visited", pos: "Verb (V2)", ipa: "/ˈvɪz.ɪ.tɪd/", meaningHi: "मुलाक़ात की / दौरा किया", exampleEn: "We visited our grandparents last Sunday.", exampleHi: "हमने पिछले रविवार अपने दादा-दादी से मुलाक़ात की।" },
      { id: "day21_vocab_003", word: "Cleaned", pos: "Verb (V2)", ipa: "/kliːnd/", meaningHi: "साफ़ किया", exampleEn: "He cleaned the entire kitchen this morning.", exampleHi: "उसने आज सुबह पूरा किचन साफ़ किया।" },
      { id: "day21_vocab_004", word: "Finished", pos: "Verb (V2)", ipa: "/ˈfɪn.ɪʃt/", meaningHi: "समाप्त किया / पूरा किया", exampleEn: "I finished my project on time.", exampleHi: "मैंने अपना प्रोजेक्ट समय पर पूरा किया।" },
      { id: "day21_vocab_005", word: "Watched", pos: "Verb (V2)", ipa: "/wɒtʃt/", meaningHi: "देखा (स्क्रीन / मैच)", exampleEn: "They watched a cricket match last night.", exampleHi: "उन्होंने कल रात एक क्रिकेट मैच देखा।" },
      { id: "day21_vocab_006", word: "Cooked", pos: "Verb (V2)", ipa: "/kʊkt/", meaningHi: "खाना पकाया", exampleEn: "My brother cooked delicious biryani.", exampleHi: "मेरे भाई ने स्वादिष्ट बिरयानी बनाई।" },
      { id: "day21_vocab_007", word: "Waited", pos: "Verb (V2)", ipa: "/ˈweɪ.tɪd/", meaningHi: "इंतज़ार किया", exampleEn: "We waited for the bus for forty minutes.", exampleHi: "हमने चालीस मिनट तक बस का इंतज़ार किया।" },
      { id: "day21_vocab_008", word: "Called", pos: "Verb (V2)", ipa: "/kɔːld/", meaningHi: "फ़ोन किया / बुलाया", exampleEn: "She called me yesterday afternoon.", exampleHi: "उसने कल दोपहर मुझे फ़ोन किया।" },
      { id: "day21_vocab_009", word: "Decided", pos: "Verb (V2)", ipa: "/dɪˈsaɪ.dɪd/", meaningHi: "निर्णय लिया / तय किया", exampleEn: "They decided to buy a new laptop.", exampleHi: "उन्होंने एक नया लैपटॉप खरीदने का फ़ैसला किया।" },
      { id: "day21_vocab_010", word: "Started", pos: "Verb (V2)", ipa: "/ˈstɑː.tɪd/", meaningHi: "शुरू किया", exampleEn: "The meeting started at nine sharp.", exampleHi: "मीटिंग ठीक नौ बजे शुरू हुई।" }
    ],
    phrases: [
      { id: "day21_phrase_001", phrase: "Yesterday morning", register: "Time Expression", meaningHi: "कल सुबह" },
      { id: "day21_phrase_002", phrase: "Last night", register: "Time Expression", meaningHi: "कल रात" },
      { id: "day21_phrase_003", phrase: "I worked all day.", register: "Conversational", meaningHi: "मैंने पूरे दिन काम किया।" },
      { id: "day21_phrase_004", phrase: "She called me back.", register: "Conversational", meaningHi: "उसने मुझे वापस फ़ोन किया।" },
      { id: "day21_phrase_005", phrase: "We stayed at home.", register: "Conversational", meaningHi: "हम घर पर ही रुके।" },
      { id: "day21_phrase_006", phrase: "It ended very late.", register: "Conversational", meaningHi: "यह बहुत देर से समाप्त हुआ।" }
    ]
  },
  examples: [
    { id: "day21_example_001", en: "I walked to the office yesterday.", hi: "मैं कल पैदल दफ़्तर गया।" },
    { id: "day21_example_002", en: "She waited for the train for two hours.", hi: "उसने दो घंटे तक ट्रेन का इंतज़ार किया।" },
    { id: "day21_example_003", en: "We enjoyed the movie last night.", hi: "हमने कल रात फ़िल्म का आनंद लिया।" },
    { id: "day21_example_004", en: "Ravi called his manager in the morning.", hi: "रवि ने सुबह अपने मैनेजर को फ़ोन किया।" },
    { id: "day21_example_005", en: "They lived in Mumbai five years ago.", hi: "वे पाँच साल पहले मुंबई में रहते थे।" },
    { id: "day21_example_006", en: "I cooked dinner for my family.", hi: "मैंने अपने परिवार के लिए रात का खाना बनाया।" },
    { id: "day21_example_007", en: "The rain stopped an hour ago.", hi: "बारिश एक घंटे पहले रुक गई।" },
    { id: "day21_example_008", en: "He studied hard for his exam.", hi: "उसने अपनी परीक्षा के लिए कड़ी मेहनत से पढ़ाई की।" },
    { id: "day21_example_009", en: "My sister helped me with my homework.", hi: "मेरी बहन ने मेरे होमवर्क में मेरी मदद की।" },
    { id: "day21_example_010", en: "We arrived at the airport on time.", hi: "हम समय पर हवाई अड्डे पहुँचे।" },
    { id: "day21_example_011", en: "The shop closed at eight o'clock.", hi: "दुकान आठ बजे बंद हो गई।" },
    { id: "day21_example_012", en: "I washed my car yesterday afternoon.", hi: "मैंने कल दोपहर अपनी कार धोई।" }
  ],
  pronunciation: {
    targetSounds: ["Voiceless ending /t/ in 'worked', 'watched', 'cooked'", "Voiced ending /d/ in 'played', 'cleaned', 'called'", "Syllabic /ɪd/ in 'waited', 'decided', 'started'"],
    traps: "Do NOT pronounce '-ed' as a separate syllable /ed/ unless the verb ends with a 'T' or 'D' sound. 'Cooked' is /kʊkt/ (1 syllable), NOT 'cook-ed' (2 syllables).",
    drills: [
      { id: "day21_audio_001", voiceRole: "TEACHER", audioType: "drill", text: "I worked, watched, and cooked yesterday." },
      { id: "day21_audio_002", voiceRole: "TEACHER", audioType: "drill", text: "They played, cleaned, and called their friends." },
      { id: "day21_audio_003", voiceRole: "TEACHER", audioType: "drill", text: "We waited, decided, and started the task." },
      { id: "day21_audio_004", voiceRole: "TEACHER", audioType: "drill", text: "She visited the doctor and rested at home." }
    ]
  },
  practice: [
    {
      id: "day21_ex_001",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'मैंने कल रात फ़िल्म देखी':",
      options: ["I watch movie last night.", "I watched a movie last night.", "I watching movie last night.", "I was watch a movie last night."],
      correctAnswer: "I watched a movie last night.",
      explanationEn: "Past completed action requires the V2 regular verb 'watched' with 'last night'.",
      explanationHi: "कल रात की पूर्ण क्रिया के लिए V2 'watched' का प्रयोग होगा।",
      difficulty: "easy",
      skillTag: "REGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day21_ex_002",
      type: "multiple_choice",
      prompt: "What is the correct past simple spelling of the verb 'Study'?",
      options: ["Studyed", "Studied", "Studyied", "Studying"],
      correctAnswer: "Studied",
      explanationEn: "Consonant + 'y' changes to '-ied' in regular past tense.",
      explanationHi: "व्यंजन + 'y' पर समाप्त होने वाली क्रियाओं में 'y' हटाकर '-ied' जुड़ता है।",
      difficulty: "easy",
      skillTag: "PAST_SPELLING"
    },
    {
      id: "day21_ex_003",
      type: "multiple_choice",
      prompt: "Which verb's '-ed' ending is pronounced with an extra syllable /ɪd/?",
      options: ["Worked", "Cleaned", "Waited", "Cooked"],
      correctAnswer: "Waited",
      explanationEn: "Verbs ending in /t/ or /d/ sounds take the /ɪd/ pronunciation (e.g. wait -> waited).",
      explanationHi: "'Wait' का अंत /t/ ध्वनि पर होता है, इसलिए इसका '-ed' /ɪd/ की तरह उच्चारित होता है।",
      difficulty: "medium",
      skillTag: "ED_PRONUNCIATION"
    },
    {
      id: "day21_ex_004",
      type: "fill_in_blank",
      prompt: "Complete the sentence: 'Priya ______ (call) her mother yesterday afternoon.'",
      correctAnswer: "called",
      explanationEn: "The past simple form of 'call' is 'called'.",
      explanationHi: "'Call' का Past Simple रूप 'called' है।",
      difficulty: "easy",
      skillTag: "REGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day21_ex_005",
      type: "fill_in_blank",
      prompt: "Complete the sentence: 'The bus ______ (stop) in front of the hospital.'",
      correctAnswer: "stopped",
      explanationEn: "'Stop' has a short vowel + consonant pattern, so the final 'p' is doubled: 'stopped'.",
      explanationHi: "'Stop' में अंतिम अक्षर डबल होकर 'stopped' बनता है।",
      difficulty: "medium",
      skillTag: "PAST_SPELLING"
    },
    {
      id: "day21_ex_006",
      type: "word_reorder",
      prompt: "Arrange the words into a correct sentence: [yesterday / the room / cleaned / Amit / evening]",
      options: ["Amit cleaned the room yesterday evening.", "Cleaned Amit the room yesterday evening.", "Yesterday evening Amit room the cleaned.", "Amit yesterday evening room cleaned the."],
      correctAnswer: "Amit cleaned the room yesterday evening.",
      explanationEn: "Standard word order: Subject (Amit) + V2 (cleaned) + Object (the room) + Time (yesterday evening).",
      explanationHi: "सही क्रम: कर्ता (Amit) + क्रिया V2 (cleaned) + कर्म (the room) + समय (yesterday evening)।",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day21_ex_007",
      type: "error_correction",
      prompt: "Identify and correct the mistake: 'Yesterday I walk to school because the bus was late.'",
      correctAnswer: "Yesterday I walked to school because the bus was late.",
      explanationEn: "'Walk' must be in past tense 'walked' to match 'yesterday'.",
      explanationHi: "'Yesterday' के कारण 'walk' का रूप बदलकर 'walked' होगा।",
      difficulty: "medium",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day21_ex_008",
      type: "hindi_to_english",
      prompt: "Translate into English: 'हमने कल रात स्वादिष्ट खाना पकाया।'",
      options: ["We cooked delicious food last night.", "We cook delicious food last night.", "We are cook delicious food last night.", "We were cooked delicious food last night."],
      correctAnswer: "We cooked delicious food last night.",
      explanationEn: "'हमने पकाया' = 'We cooked', 'कल रात' = 'last night'.",
      explanationHi: "सही अनुवाद: 'We cooked delicious food last night.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day21_ex_009",
      type: "english_to_hindi",
      prompt: "What is the Hindi meaning of: 'They decided to stay at home yesterday'?",
      options: ["वे कल घर पर रहने का निर्णय ले रहे थे।", "उन्होंने कल घर पर ही रुकने का फ़ैसला किया।", "वे कल घर पर नहीं रुके।", "उन्होंने घर साफ़ करने का फ़ैसला किया।"],
      correctAnswer: "उन्होंने कल घर पर ही रुकने का फ़ैसला किया।",
      explanationEn: "'Decided' means 'फ़ैसला किया', 'stay at home' means 'घर पर रुकना'.",
      explanationHi: "सही अर्थ: 'उन्होंने कल घर पर ही रुकने का फ़ैसला किया।'",
      difficulty: "easy",
      skillTag: "TRANSLATION_EN_HI"
    },
    {
      id: "day21_ex_010",
      type: "multiple_choice",
      prompt: "Which pair shows the correct past simple spelling?",
      options: ["Plan -> Planed", "Live -> Lived", "Try -> Tryed", "Decide -> Decidied"],
      correctAnswer: "Live -> Lived",
      explanationEn: "Verbs ending in '-e' just add '-d': Live -> Lived.",
      explanationHi: "'-e' पर समाप्त होने वाले शब्दों में सिर्फ '-d' जुड़ता है।",
      difficulty: "easy",
      skillTag: "PAST_SPELLING"
    },
    {
      id: "day21_ex_011",
      type: "multiple_choice",
      prompt: "How many syllables are pronounced in the word 'WORKED'?",
      options: ["1 syllable (/wɜːkt/)", "2 syllables (/wɜːk-ed/)", "3 syllables", "None"],
      correctAnswer: "1 syllable (/wɜːkt/)",
      explanationEn: "'Worked' is pronounced as a single syllable /wɜːkt/ because /k/ is voiceless.",
      explanationHi: "'Worked' सिर्फ एक सिलेबल में /wɜːkt/ बोला जाता है, 'वर्क-एड' नहीं।",
      difficulty: "medium",
      skillTag: "ED_PRONUNCIATION"
    },
    {
      id: "day21_ex_012",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the correct past form of 'Visit': 'Anand ______ his doctor on Monday.'",
      correctAnswer: "visited",
      explanationEn: "Past form of 'visit' is 'visited'.",
      explanationHi: "'Visit' का Past Simple रूप 'visited' है।",
      difficulty: "easy",
      skillTag: "REGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day21_ex_013",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'I ______ (finish) my breakfast at 8:30 AM.'",
      correctAnswer: "finished",
      explanationEn: "Past form of 'finish' is 'finished'.",
      explanationHi: "'Finish' का भूतकाल रूप 'finished' है।",
      difficulty: "easy",
      skillTag: "REGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day21_ex_014",
      type: "multiple_choice",
      prompt: "Choose the correct sentence: 'कल मीटिंग 10 बजे शुरू हुई।'",
      options: ["The meeting started at 10 AM yesterday.", "The meeting start at 10 AM yesterday.", "The meeting starting at 10 AM yesterday.", "The meeting was start at 10 AM yesterday."],
      correctAnswer: "The meeting started at 10 AM yesterday.",
      explanationEn: "Subject + V2 (started) + time + past anchor.",
      explanationHi: "सही वाक्य: 'The meeting started at 10 AM yesterday.'",
      difficulty: "easy",
      skillTag: "REGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day21_ex_015",
      type: "multiple_choice",
      prompt: "Identify the word where '-ed' is pronounced as /t/:",
      options: ["Cleaned", "Watched", "Played", "Loved"],
      correctAnswer: "Watched",
      explanationEn: "The /tʃ/ sound in 'watch' is voiceless, so '-ed' sounds like /t/ (/wɒtʃt/).",
      explanationHi: "'Watch' की अंतिम ध्वनि अघोष (/tʃ/) है, इसलिए '-ed' की आवाज़ /t/ होती है।",
      difficulty: "medium",
      skillTag: "ED_PRONUNCIATION"
    },
    {
      id: "day21_ex_016",
      type: "multiple_choice",
      prompt: "Select the sentence with CORRECT past simple agreement:",
      options: ["She worked hard all day.", "She work hard all day yesterday.", "She workeds hard all day.", "She was work hard all day."],
      correctAnswer: "She worked hard all day.",
      explanationEn: "All subjects use identical V2 'worked' in past simple.",
      explanationHi: "भूतकाल में सभी कर्ताओं के साथ क्रिया का दूसरा रूप (V2) 'worked' आता है।",
      difficulty: "easy",
      skillTag: "REGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day21_ex_017",
      type: "fill_in_blank",
      prompt: "Complete with the past form of 'Cry': 'The baby ______ (cry) for milk.'",
      correctAnswer: "cried",
      explanationEn: "Consonant + 'y' changes to '-ied': cry -> cried.",
      explanationHi: "'Cry' में 'y' हटाकर 'cried' लिखा जाता है।",
      difficulty: "medium",
      skillTag: "PAST_SPELLING"
    },
    {
      id: "day21_ex_018",
      type: "word_reorder",
      prompt: "Put the words in order: [at the station / waited / two hours / for / we]",
      options: ["We waited at the station for two hours.", "We for two hours waited at the station.", "At the station waited we two hours for.", "Waited we at the station for two hours."],
      correctAnswer: "We waited at the station for two hours.",
      explanationEn: "Subject (We) + Verb (waited) + Place (at the station) + Duration (for two hours).",
      explanationHi: "सही क्रम: We waited at the station for two hours.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day21_ex_019",
      type: "error_correction",
      prompt: "Find and fix the error: 'Rohan clean his car two days ago.'",
      correctAnswer: "Rohan cleaned his car two days ago.",
      explanationEn: "'Two days ago' requires the past simple form 'cleaned'.",
      explanationHi: "'Two days ago' के कारण 'clean' बदलकर 'cleaned' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day21_ex_020",
      type: "multiple_choice",
      prompt: "Which sentence accurately expresses 'उसने मेरी मदद की'?",
      options: ["He helped me.", "He help me.", "He was help me.", "He helping me."],
      correctAnswer: "He helped me.",
      explanationEn: "'उसने मदद की' = 'He helped me'.",
      explanationHi: "सही अनुवाद: 'He helped me.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day21_ex_021",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'We ______ (arrive) in Delhi at midnight.'",
      correctAnswer: "arrived",
      explanationEn: "'Arrive' ends in '-e', so we add '-d': 'arrived'.",
      explanationHi: "'Arrive' के अंत में '-e' है, इसलिए सिर्फ '-d' जुड़कर 'arrived' बनेगा।",
      difficulty: "easy",
      skillTag: "PAST_SPELLING"
    },
    {
      id: "day21_ex_022",
      type: "multiple_choice",
      prompt: "Which time expression CANNOT be used with Past Simple?",
      options: ["Yesterday", "Last Friday", "Tomorrow afternoon", "Three days ago"],
      correctAnswer: "Tomorrow afternoon",
      explanationEn: "'Tomorrow afternoon' refers to future time, not past completed actions.",
      explanationHi: "'Tomorrow afternoon' भविष्य का सूचक है, भूतकाल का नहीं।",
      difficulty: "easy",
      skillTag: "TIME_EXPRESSIONS"
    },
    {
      id: "day21_ex_023",
      type: "multiple_choice",
      prompt: "In which word is '-ed' pronounced as /d/?",
      options: ["Cleaned", "Walked", "Helped", "Started"],
      correctAnswer: "Cleaned",
      explanationEn: "/n/ is a voiced sound, so '-ed' is pronounced as /d/ (/kliːnd/).",
      explanationHi: "/n/ सघोष ध्वनि है, इसलिए 'cleaned' में '-ed' की आवाज़ /d/ होती है।",
      difficulty: "medium",
      skillTag: "ED_PRONUNCIATION"
    },
    {
      id: "day21_ex_024",
      type: "fill_in_blank",
      prompt: "Complete the sentence: 'Neha ______ (wash) all the clothes yesterday.'",
      correctAnswer: "washed",
      explanationEn: "Past form of 'wash' is 'washed'.",
      explanationHi: "'Wash' का Past Simple रूप 'washed' है।",
      difficulty: "easy",
      skillTag: "REGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day21_ex_025",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'दुकानदार ने 9 बजे दुकान बंद की':",
      options: ["The shopkeeper closed the shop at 9 PM.", "The shopkeeper close the shop at 9 PM.", "The shopkeeper closing the shop at 9 PM.", "The shopkeeper was close the shop at 9 PM."],
      correctAnswer: "The shopkeeper closed the shop at 9 PM.",
      explanationEn: "Past tense V2 'closed' is required.",
      explanationHi: "भूतकाल के लिए V2 'closed' सही है।",
      difficulty: "easy",
      skillTag: "REGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day21_ex_026",
      type: "word_reorder",
      prompt: "Reorder the words: [a new laptop / to buy / decided / Sanjay]",
      options: ["Sanjay decided to buy a new laptop.", "Decided Sanjay to buy a new laptop.", "A new laptop Sanjay to buy decided.", "To buy decided Sanjay a new laptop."],
      correctAnswer: "Sanjay decided to buy a new laptop.",
      explanationEn: "Subject (Sanjay) + Verb (decided) + infinitive clause (to buy a new laptop).",
      explanationHi: "सही क्रम: Sanjay decided to buy a new laptop.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day21_ex_027",
      type: "error_correction",
      prompt: "Correct the sentence: 'We plaied cricket in the park yesterday.'",
      correctAnswer: "We played cricket in the park yesterday.",
      explanationEn: "Vowel + 'y' just adds '-ed': play -> played (not 'plaied').",
      explanationHi: "स्वर + 'y' में सिर्फ '-ed' जुड़ता है: play -> played.",
      difficulty: "medium",
      skillTag: "PAST_SPELLING"
    },
    {
      id: "day21_ex_028",
      type: "multiple_choice",
      prompt: "What is the past simple of 'Drop'?",
      options: ["Droped", "Dropped", "Dropied", "Dropping"],
      correctAnswer: "Dropped",
      explanationEn: "Short vowel + consonant doubles 'p': dropped.",
      explanationHi: "अंतिम अक्षर डबल होकर 'dropped' बनता है।",
      difficulty: "medium",
      skillTag: "PAST_SPELLING"
    },
    {
      id: "day21_ex_029",
      type: "hindi_to_english",
      prompt: "Translate: 'मेरे पिताजी ने कल रात मुझे फ़ोन किया।'",
      options: ["My father called me last night.", "My father calls me last night.", "My father calling me last night.", "My father was call me last night."],
      correctAnswer: "My father called me last night.",
      explanationEn: "Subject + V2 (called) + Object + last night.",
      explanationHi: "सही अनुवाद: 'My father called me last night.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day21_ex_030",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'It ______ (rain) heavily all day yesterday.'",
      correctAnswer: "rained",
      explanationEn: "Past form of 'rain' is 'rained'.",
      explanationHi: "'Rain' का Past Simple रूप 'rained' है।",
      difficulty: "easy",
      skillTag: "REGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day21_ex_031",
      type: "multiple_choice",
      prompt: "Select the sentence with accurate phonetics and grammar:",
      options: ["I walked home after work.", "I was walked home after work.", "I walk home yesterday after work.", "I am walked home after work."],
      correctAnswer: "I walked home after work.",
      explanationEn: "'I walked home after work' is correct past simple.",
      explanationHi: "'I walked home after work' पूर्णतः शुद्ध वाक्य है।",
      difficulty: "easy",
      skillTag: "REGULAR_PAST_AFFIRMATIVE"
    },
    {
      id: "day21_ex_032",
      type: "dialogue_completion",
      prompt: "Complete the dialogue: Rahul: 'Why are you so tired?' Pooja: 'Because I ______ (work) for ten hours yesterday.'",
      correctAnswer: "worked",
      acceptableAlternatives: ["worked"],
      explanationEn: "Pooja is explaining a completed action from yesterday: 'worked'.",
      explanationHi: "कल के काम के लिए V2 'worked' आएगा।",
      difficulty: "easy",
      skillTag: "CONVERSATIONAL_USE"
    },
    {
      id: "day21_ex_033",
      type: "spoken_response",
      prompt: "Speak aloud: State two things you completed yesterday using 'Yesterday, I worked...' or 'Yesterday, I cleaned...'.",
      modelResponse: "Yesterday, I cleaned my room and I watched a movie.",
      correctAnswer: "Yesterday, I [V2 verb] and I [V2 verb].",
      explanationEn: "Use regular past verbs with '-ed' endings to describe yesterday's actions.",
      explanationHi: "कल किए गए कार्यों के लिए 'Yesterday, I [V2 verb]...' बोलें।",
      difficulty: "easy",
      skillTag: "SPEAKING"
    },
    {
      id: "day21_ex_034",
      type: "recall",
      prompt: "What is the past simple form of 'Need'?",
      correctAnswer: "needed",
      acceptableAlternatives: ["needed"],
      explanationEn: "'Need' becomes 'needed' and is pronounced with /ɪd/.",
      explanationHi: "'Need' का Past रूप 'needed' होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day21_ex_035",
      type: "recall",
      prompt: "What is the past simple form of 'Live'?",
      correctAnswer: "lived",
      acceptableAlternatives: ["lived"],
      explanationEn: "'Live' takes '-d' to become 'lived'.",
      explanationHi: "'Live' का Past रूप 'lived' होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    }
  ],
  use: {
    situation: "Two colleagues chatting in the office cafeteria on Monday morning about their productive Sunday tasks.",
    dialogue: {
      id: "day21_dialogue_001",
      turns: [
        { speaker: "Amit", textEn: "Good morning, Priya! Did you relax yesterday?", textHi: "शुभ प्रभात, प्रिया! क्या तुमने कल आराम किया?" },
        { speaker: "Priya", textEn: "Not really, Amit. I cleaned my entire apartment and washed all my clothes yesterday morning.", textHi: "ज़्यादा नहीं, अमित। मैंने कल सुबह अपना पूरा अपार्टमेंट साफ़ किया और सारे कपड़े धोए।" },
        { speaker: "Amit", textEn: "That sounds like hard work! Did you cook lunch at home?", textHi: "यह तो काफी मेहनत भरा काम लगता है! क्या तुमने घर पर दोपहर का खाना बनाया?" },
        { speaker: "Priya", textEn: "Yes, I cooked chicken biryani, and in the evening my cousin visited me. We watched a comedy movie together.", textHi: "हाँ, मैंने चिकन बिरयानी बनाई, और शाम को मेरा चचेरा भाई मुझसे मिलने आया। हमने साथ में एक कॉमेडी फ़िल्म देखी।" },
        { speaker: "Amit", textEn: "That sounds like a wonderful weekend! I stayed at home and rested all day.", textHi: "यह तो बहुत बढ़िया सप्ताहांत रहा! मैं पूरे दिन घर पर ही रुका और आराम किया।" }
      ]
    },
    speakingTask: {
      promptEn: "Describe 3 things you completed yesterday using regular past verbs (e.g., worked, cleaned, cooked, called, watched).",
      promptHi: "कल आपने जो 3 काम पूरे किए, उनके बारे में regular past क्रियाओं का उपयोग करके 3 वाक्य बोलें।"
    }
  },
  assess: [
    { id: "day21_assess_001", question: "Why is 'Yesterday I work for 8 hours' incorrect?", answer: "Because 'yesterday' refers to a completed past time and requires the past simple V2 form 'worked'.", skill: "Tense Accuracy" },
    { id: "day21_assess_002", question: "How do you pronounce '-ed' in 'COOKED' versus 'WAITED'?", answer: "'Cooked' is pronounced with /t/ as one syllable (/kʊkt/), while 'waited' takes the extra /ɪd/ syllable (/ˈweɪ.tɪd/).", skill: "Phonetic Differentiation" },
    { id: "day21_assess_003", question: "What is the spelling rule for regular verbs ending in consonant + y (like study)?", answer: "Change the 'y' to 'i' and add '-ed' (study -> studied).", skill: "Spelling Rules" }
  ],
  review: {
    spacedRepetitionTag: "REGULAR_PAST_SIMPLE_ED",
    recommendedIntervalDays: [1, 3, 7, 14]
  }
};

// Write day21.js
fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day21.js'), `export const day21 = ${JSON.stringify(day21, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Wrote day21.js");
