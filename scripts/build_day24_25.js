import fs from 'fs';
import path from 'path';

// Day 24: Past Simple Questions & Short Answers (Did you...? & Yes, I did / No, I didn't)
const day24 = {
  dayNumber: 24,
  id: "day_24",
  titleEn: "Past Simple Questions & Short Answers (Did you...? & Yes, I did / No, I didn't)",
  titleHi: "भूतकाल के प्रश्न और संक्षिप्त उत्तर (Did you...? और Yes, I did / No, I didn't)",
  cefr: "A1.2",
  estMinutes: 30,
  prerequisites: "Day 21–23 (Past Simple Affirmative & Negative)",
  objectivesEn: [
    "Form accurate Yes/No questions in the past simple using auxiliary inversion: 'Did + Subject + Base Verb (V1)...?'.",
    "Produce natural short answers ('Yes, I did.' / 'No, I didn't.') without echoing the full verb.",
    "Master the base verb rule in questions: ensure the main verb stays in V1 (avoiding '*Did you went?*').",
    "Inquire politely about past completed activities, travel, and meals in daily social conversations."
  ],
  objectivesHi: [
    "सहायक क्रिया 'Did' को कर्ता के आगे रखकर Yes/No प्रश्न बनाना: 'Did + Subject + Base Verb (V1)...?'।",
    "प्राकृतिक संक्षिप्त उत्तर देना ('Yes, I did.' / 'No, I didn't.')।",
    "प्रश्नों में भी क्रिया के मूल रूप (V1) का नियम लागू करना ('*Did you went?*' जैसी गलती से बचना)।",
    "दैनिक सामाजिक बातचीत में भोजन, यात्रा और काम के बारे में विनम्रता से भूतकाल के प्रश्न पूछना।"
  ],
  teach: {
    hindiExplanation: "जब हमें किसी से पूछना हो कि क्या उसने भूतकाल में कोई काम किया (जैसे: 'क्या तुम कल आए थे?', 'क्या तुमने खाना खाया?', 'क्या उसने तुम्हें फ़ोन किया?'), तो अंग्रेज़ी में वाक्य की शुरुआत सहायक क्रिया 'Did' से करते हैं। इसका सूत्र है: 'Did + कर्ता + क्रिया का मूल रूप (V1) + अन्य शब्द?'। ध्यान रहे, यहाँ भी 'Did' भूतकाल दर्शा चुका है, इसलिए मुख्य क्रिया में V2 नहीं लगेगा (जैसे 'Did you see?', '*Did you saw?*' कभी नहीं)। इसके जवाब में पूरा वाक्य दोहराने के बजाय हम संक्षिप्त उत्तर देते हैं: 'Yes, I did.' या 'No, I didn't.'",
    englishExplanation: "To form Yes/No questions in the Past Simple, we invert the auxiliary operator DID before the subject: 'Did + Subject + Base Verb (V1) + [Object/Time]?'. Because 'Did' is already in the past tense, the main lexical verb MUST remain in its base form (V1). For short answers, standard English uses the auxiliary without repeating the main verb: 'Yes, I/he/they did.' or 'No, I/he/they didn't.' Rising intonation is used at the end of Yes/No past questions.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Auxiliary-Subject Inversion with 'Did'",
        description: "All Yes/No past simple questions begin with 'Did' regardless of subject: Did I, Did you, Did he, Did she, Did they.",
        register: "Universal Question Syntax"
      },
      {
        ruleNumber: 2,
        title: "Base Verb (V1) Integrity in Inquiries",
        description: "The main verb following 'Did + Subject' MUST be in base infinitive form (V1). Correct: 'Did you lock the door?' Incorrect: '*Did you locked the door?*'",
        register: "Core Syntax Invariant"
      },
      {
        ruleNumber: 3,
        title: "Formulaic Short Answer Structure",
        description: "Affirmative: 'Yes, [subject pronoun] did.' Negative: 'No, [subject pronoun] didn't.' Never say '*Yes, I went*' or '*No, I didn't went*' as a standalone short reply.",
        register: "Conversational Pragmatics"
      },
      {
        ruleNumber: 4,
        title: "BE Verb Inversion Contrast (Was/Were)",
        description: "Questions about past states or locations use 'Was/Were + Subject', NOT 'Did'. Say 'Were you happy?' (state), NOT '*Did you be happy?*'.",
        register: "Structural Contrast"
      }
    ],
    formulaTable: [
      { subjectGroup: "General Action Questions", formula: "Did + [Subject] + Base Verb (V1) + [Object]?", exampleEn: "Did you call the doctor yesterday?", meaningHi: "क्या तुमने कल डॉक्टर को फ़ोन किया था?" },
      { subjectGroup: "Movement / Travel Questions", formula: "Did + [Subject] + go / arrive / reach + [Place]?", exampleEn: "Did they arrive on time?", meaningHi: "क्या वे समय पर पहुँचे?" },
      { subjectGroup: "Affirmative Short Answer", formula: "Yes, + [Subject Pronoun] + did.", exampleEn: "Yes, I did. / Yes, she did.", meaningHi: "हाँ, मैंने किया। / हाँ, उसने किया।" },
      { subjectGroup: "Negative Short Answer", formula: "No, + [Subject Pronoun] + didn't.", exampleEn: "No, we didn't. / No, he didn't.", meaningHi: "नहीं, हमने नहीं किया। / नहीं, उसने नहीं किया।" }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Double Past in Questions ('*Did you went?*') and answering with '*Yes, I did went*'",
      hindiPattern: "हिन्दी में 'क्या तुम गए?' में 'गए' (भूतकाल) होता है, इसलिए शिक्षार्थी 'Did' के साथ भी 'went', 'saw' या 'cooked' जोड़ देते हैं।",
      potentialInterference: "Asking '*Did you ate lunch?*' or '*Did you saw the news?*'.",
      explanation: "'Did' is the sole grammatical past marker in the question clause. The lexical verb must be uninflected V1.",
      naturalSolution: "Always ask 'Did you eat lunch?' and 'Did you see the news?'."
    }
  },
  learn: {
    vocabulary: [
      { id: "day24_vocab_001", word: "Enjoy", pos: "Verb", ipa: "/ɪnˈdʒɔɪ/", meaningHi: "आनंद लेना / मज़ा आना", exampleEn: "Did you enjoy the movie last night?", exampleHi: "क्या आपको कल रात फ़िल्म में मज़ा आया?" },
      { id: "day24_vocab_002", word: "Lock", pos: "Verb", ipa: "/lɒk/", meaningHi: "ताला लगाना", exampleEn: "Did you lock the main gate?", exampleHi: "क्या तुमने मुख्य दरवाज़े पर ताला लगाया?" },
      { id: "day24_vocab_003", word: "Notice", pos: "Verb", ipa: "/ˈnəʊ.tɪs/", meaningHi: "ध्यान देना / गौर करना", exampleEn: "Did you notice any strange noise?", exampleHi: "क्या तुमने कोई अजीब आवाज़ पर गौर किया?" },
      { id: "day24_vocab_004", word: "Invite", pos: "Verb", ipa: "/ɪnˈvaɪt/", meaningHi: "आमंत्रित करना / न्योता देना", exampleEn: "Did they invite you to the party?", exampleHi: "क्या उन्होंने तुम्हें पार्टी में आमंत्रित किया था?" },
      { id: "day24_vocab_005", word: "Complete", pos: "Verb", ipa: "/kəmˈpliːt/", meaningHi: "पूरा करना", exampleEn: "Did Priya complete the assignment?", exampleHi: "क्या प्रिया ने असाइनमेंट पूरा किया?" },
      { id: "day24_vocab_006", word: "Reach", pos: "Verb", ipa: "/riːtʃ/", meaningHi: "पहुँचना", exampleEn: "Did you reach home safely yesterday?", exampleHi: "क्या आप कल सुरक्षित घर पहुँच गए थे?" },
      { id: "day24_vocab_007", word: "Inform", pos: "Verb", ipa: "/ɪnˈfɔːm/", meaningHi: "सूचित करना / जानकारी देना", exampleEn: "Did he inform the manager about the delay?", exampleHi: "क्या उसने देरी के बारे में मैनेजर को सूचित किया था?" },
      { id: "day24_vocab_008", word: "Check", pos: "Verb", ipa: "/tʃek/", meaningHi: "जाँचना / चेक करना", exampleEn: "Did you check your email this morning?", exampleHi: "क्या आपने आज सुबह अपना ईमेल चेक किया?" },
      { id: "day24_vocab_009", word: "Forget", pos: "Verb", ipa: "/fəˈɡet/", meaningHi: "भूलना", exampleEn: "Did you forget your laptop charger?", exampleHi: "क्या आप अपना लैपटॉप चार्जर भूल गए?" },
      { id: "day24_vocab_010", word: "Sleep", pos: "Verb", ipa: "/sliːp/", meaningHi: "सोना", exampleEn: "Did you sleep well last night?", exampleHi: "क्या आप कल रात अच्छी तरह सोए?" }
    ],
    phrases: [
      { id: "day24_phrase_001", phrase: "Did you sleep well?", register: "Social / Polite", meaningHi: "क्या आपकी नींद अच्छी रही?" },
      { id: "day24_phrase_002", phrase: "Did you get my message?", register: "Conversational", meaningHi: "क्या आपको मेरा संदेश मिला?" },
      { id: "day24_phrase_003", phrase: "Did you have lunch?", register: "Social Greeting", meaningHi: "क्या आपने दोपहर का खाना खा लिया?" },
      { id: "day24_phrase_004", phrase: "Yes, I did.", register: "Formulaic Response", meaningHi: "हाँ, मैंने किया।" },
      { id: "day24_phrase_005", phrase: "No, I didn't.", register: "Formulaic Response", meaningHi: "नहीं, मैंने नहीं किया।" },
      { id: "day24_phrase_006", phrase: "Did anyone call?", register: "Inquiry", meaningHi: "क्या किसी का फ़ोन आया था?" }
    ]
  },
  examples: [
    { id: "day24_example_001", en: "Did you go to the market yesterday?", hi: "क्या तुम कल बाज़ार गए थे?" },
    { id: "day24_example_002", en: "Did she call you this morning?", hi: "क्या उसने आज सुबह तुम्हें फ़ोन किया था?" },
    { id: "day24_example_003", en: "Did they enjoy the concert last night?", hi: "क्या उन्हें कल रात कॉन्सर्ट में मज़ा आया?" },
    { id: "day24_example_004", en: "Did Rahul finish his homework?", hi: "क्या राहुल ने अपना होमवर्क पूरा किया?" },
    { id: "day24_example_005", en: "Did you buy the fresh milk?", hi: "क्या तुमने ताज़ा दूध खरीदा?" },
    { id: "day24_example_006", en: "Did the train arrive on time?", hi: "क्या ट्रेन समय पर पहुँची?" },
    { id: "day24_example_007", en: "Did you find your keys?", hi: "क्या तुम्हें तुम्हारी चाबियाँ मिलीं?" },
    { id: "day24_example_008", en: "Did we lock the back door?", hi: "क्या हमने पीछे का दरवाज़ा बंद किया था?" },
    { id: "day24_example_009", en: "Did your parents watch the match?", hi: "क्या आपके माता-पिता ने मैच देखा?" },
    { id: "day24_example_010", en: "Did you take your medicine on time?", hi: "क्या आपने अपनी दवा समय पर ली?" },
    { id: "day24_example_011", en: "Did she tell you the good news?", hi: "क्या उसने तुम्हें अच्छी ख़बर सुनाई?" },
    { id: "day24_example_012", en: "Did you have a good weekend?", hi: "क्या आपका सप्ताहांत अच्छा बीता?" }
  ],
  pronunciation: {
    targetSounds: ["Rising intonation curve at the end of Yes/No questions (↗)", "Connected linking /dɪdʒuː/ in 'Did you'"],
    traps: "In fluent connected speech, 'Did you' naturally blends into /ˈdɪdʒ.uː/ or /dɪdʒə/. Avoid pausing stiffly between 'did' and 'you'.",
    drills: [
      { id: "day24_audio_001", voiceRole: "TEACHER", audioType: "drill", text: "Did you see the movie last night? (↗)" },
      { id: "day24_audio_002", voiceRole: "TEACHER", audioType: "drill", text: "Did she call you this morning? (↗)" },
      { id: "day24_audio_003", voiceRole: "TEACHER", audioType: "drill", text: "Yes, I did. / No, I didn't." },
      { id: "day24_audio_004", voiceRole: "TEACHER", audioType: "drill", text: "Did they arrive safely at the hotel? (↗)" }
    ]
  },
  practice: [
    {
      id: "day24_ex_001",
      type: "multiple_choice",
      prompt: "Choose the correct question to ask 'क्या तुम कल बाज़ार गए थे?':",
      options: ["Did you went to the market yesterday?", "Did you go to the market yesterday?", "Do you went to the market yesterday?", "Were you go to the market yesterday?"],
      correctAnswer: "Did you go to the market yesterday?",
      explanationEn: "'Did' + Subject + Base verb 'go' (V1).",
      explanationHi: "'Did' के साथ मुख्य क्रिया का मूल रूप 'go' (V1) आता है।",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS_YES_NO"
    },
    {
      id: "day24_ex_002",
      type: "multiple_choice",
      prompt: "What is the natural affirmative short answer to: 'Did you lock the door?'",
      options: ["Yes, I locked.", "Yes, I did.", "Yes, I did lock.", "Yes, I do."],
      correctAnswer: "Yes, I did.",
      explanationEn: "Standard short answer is 'Yes, I did.'",
      explanationHi: "प्राकृतिक संक्षिप्त उत्तर 'Yes, I did.' होता है।",
      difficulty: "easy",
      skillTag: "SHORT_ANSWERS"
    },
    {
      id: "day24_ex_003",
      type: "fill_in_blank",
      prompt: "Complete the question with the base form of (call): 'Did she ______ you yesterday evening?'",
      correctAnswer: "call",
      explanationEn: "Use base verb 'call' after 'Did she'.",
      explanationHi: "'Did she' के बाद मूल क्रिया 'call' आएगी।",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS_YES_NO"
    },
    {
      id: "day24_ex_004",
      type: "multiple_choice",
      prompt: "Which question correctly avoids the Double Past Error?",
      options: ["Did he saw the doctor?", "Did he see the doctor?", "Did he seed the doctor?", "Did he seen the doctor?"],
      correctAnswer: "Did he see the doctor?",
      explanationEn: "'Did' already carries the past tense, so use base verb 'see'.",
      explanationHi: "'Did' के साथ क्रिया का पहला रूप 'see' सही है।",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS_YES_NO"
    },
    {
      id: "day24_ex_005",
      type: "word_reorder",
      prompt: "Arrange into a correct question: [you / breakfast / have / this morning / did]",
      options: ["Did you have breakfast this morning?", "Did you breakfast have this morning?", "This morning did have you breakfast?", "Have you did breakfast this morning?"],
      correctAnswer: "Did you have breakfast this morning?",
      explanationEn: "Did + Subject (you) + V1 (have) + Object (breakfast) + Time (this morning)?",
      explanationHi: "सही क्रम: Did you have breakfast this morning?",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day24_ex_006",
      type: "error_correction",
      prompt: "Identify and correct the mistake: 'Did you bought the train tickets yesterday?'",
      correctAnswer: "Did you buy the train tickets yesterday?",
      explanationEn: "'Bought' must revert to 'buy' in a past question with 'Did'.",
      explanationHi: "'Did' के कारण 'bought' बदलकर 'buy' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day24_ex_007",
      type: "hindi_to_english",
      prompt: "Translate into English: 'क्या तुमने कल रात मैच देखा था?'",
      options: ["Did you watch the match last night?", "Did you watched the match last night?", "Do you watch the match last night?", "Were you watch the match last night?"],
      correctAnswer: "Did you watch the match last night?",
      explanationEn: "Did + you + watch + the match + last night?",
      explanationHi: "सही अनुवाद: 'Did you watch the match last night?'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day24_ex_008",
      type: "english_to_hindi",
      prompt: "What is the Hindi meaning of: 'Did they arrive on time?'",
      options: ["क्या वे समय पर पहुँचे?", "क्या वे समय पर निकल रहे हैं?", "वे समय पर नहीं पहुँचे।", "क्या वे देर से आए?"],
      correctAnswer: "क्या वे समय पर पहुँचे?",
      explanationEn: "'Did they arrive on time?' means 'क्या वे समय पर पहुँचे?'.",
      explanationHi: "सही अर्थ: 'क्या वे समय पर पहुँचे?'",
      difficulty: "easy",
      skillTag: "TRANSLATION_EN_HI"
    },
    {
      id: "day24_ex_009",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'Did Rohan ______ (sleep) well last night?'",
      correctAnswer: "sleep",
      explanationEn: "Base verb 'sleep'.",
      explanationHi: "'Did' के बाद 'sleep' आएगा।",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS_YES_NO"
    },
    {
      id: "day24_ex_010",
      type: "multiple_choice",
      prompt: "Select the natural negative short answer to: 'Did they invite him?'",
      options: ["No, they didn't.", "No, they not did.", "No, they didn't invite.", "No, they don't."],
      correctAnswer: "No, they didn't.",
      explanationEn: "'No, they didn't.' is the standard negative short reply.",
      explanationHi: "संक्षिप्त नकारात्मक उत्तर 'No, they didn't.' है।",
      difficulty: "easy",
      skillTag: "SHORT_ANSWERS"
    },
    {
      id: "day24_ex_011",
      type: "fill_in_blank",
      prompt: "Complete the sentence: '______ you receive my email yesterday?' (Auxiliary verb)",
      correctAnswer: "Did",
      acceptableAlternatives: ["did"],
      explanationEn: "Past simple question begins with auxiliary 'Did'.",
      explanationHi: "भूतकाल के प्रश्न की शुरुआत 'Did' से होती है।",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS_YES_NO"
    },
    {
      id: "day24_ex_012",
      type: "multiple_choice",
      prompt: "Which question is asking about a past state (BE verb)?",
      options: ["Were you tired yesterday?", "Did you tired yesterday?", "Did you be tired yesterday?", "Was you tired yesterday?"],
      correctAnswer: "Were you tired yesterday?",
      explanationEn: "States of being use 'Were you + adjective', not 'Did'.",
      explanationHi: "अवस्था पूछने के लिए 'Were you tired?' का प्रयोग होता है।",
      difficulty: "medium",
      skillTag: "CONTRASTIVE_GRAMMAR"
    },
    {
      id: "day24_ex_013",
      type: "word_reorder",
      prompt: "Put in order: [the report / complete / did / Amit / yesterday]",
      options: ["Did Amit complete the report yesterday?", "Did Amit the report complete yesterday?", "Yesterday did complete Amit the report?", "Amit did complete the report yesterday?"],
      correctAnswer: "Did Amit complete the report yesterday?",
      explanationEn: "Did + Amit + complete + the report + yesterday?",
      explanationHi: "सही क्रम: Did Amit complete the report yesterday?",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day24_ex_014",
      type: "error_correction",
      prompt: "Correct the sentence: 'Did she spoke to the principal yesterday?'",
      correctAnswer: "Did she speak to the principal yesterday?",
      explanationEn: "'Spoke' must revert to base form 'speak'.",
      explanationHi: "'Did' के बाद 'spoke' बदलकर 'speak' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day24_ex_015",
      type: "multiple_choice",
      prompt: "Choose the correct question: 'क्या आपने अपनी दवा ली?'",
      options: ["Did you take your medicine?", "Did you took your medicine?", "Do you took your medicine?", "Were you take your medicine?"],
      correctAnswer: "Did you take your medicine?",
      explanationEn: "Did you take your medicine?",
      explanationHi: "सही वाक्य: 'Did you take your medicine?'",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS_YES_NO"
    },
    {
      id: "day24_ex_016",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'Did you ______ (find) your lost wallet?'",
      correctAnswer: "find",
      explanationEn: "Base verb 'find'.",
      explanationHi: "'Did' के बाद 'find' आएगा।",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS_YES_NO"
    },
    {
      id: "day24_ex_017",
      type: "hindi_to_english",
      prompt: "Translate: 'क्या उसने तुम्हें सच बताया था?'",
      options: ["Did he tell you the truth?", "Did he told you the truth?", "Did he tells you the truth?", "Was he tell you the truth?"],
      correctAnswer: "Did he tell you the truth?",
      explanationEn: "Did he tell you the truth?",
      explanationHi: "सही अनुवाद: 'Did he tell you the truth?'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day24_ex_018",
      type: "multiple_choice",
      prompt: "What intonation pattern is used for 'Did you sleep well?'",
      options: ["Rising intonation at the end (↗)", "Falling intonation at the end (↘)", "Flat robotic pitch", "Whispering"],
      correctAnswer: "Rising intonation at the end (↗)",
      explanationEn: "Yes/No questions end with a rising intonation contour.",
      explanationHi: "Yes/No प्रश्नों के अंत में आवाज़ ऊपर उठती है (Rising Intonation)।",
      difficulty: "medium",
      skillTag: "PHONETICS"
    },
    {
      id: "day24_ex_019",
      type: "error_correction",
      prompt: "Fix the mistake: 'Did you ate dinner at 8 PM?'",
      correctAnswer: "Did you eat dinner at 8 PM?",
      explanationEn: "'Ate' must change to 'eat' after 'Did'.",
      explanationHi: "'Did' के बाद 'ate' बदलकर 'eat' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day24_ex_020",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'Did your sister ______ (enjoy) the trip to Jaipur?'",
      correctAnswer: "enjoy",
      explanationEn: "Base verb 'enjoy'.",
      explanationHi: "'Did' के बाद 'enjoy' आएगा।",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS_YES_NO"
    },
    {
      id: "day24_ex_021",
      type: "multiple_choice",
      prompt: "Select the sentence with accurate past question syntax:",
      options: ["Did you meet the new manager yesterday?", "Did you met the new manager yesterday?", "Do you met the new manager yesterday?", "Were you meet the new manager yesterday?"],
      correctAnswer: "Did you meet the new manager yesterday?",
      explanationEn: "'Did you meet' uses the base form 'meet'.",
      explanationHi: "'Did you meet' पूर्णतः शुद्ध वाक्य है।",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS_YES_NO"
    },
    {
      id: "day24_ex_022",
      type: "word_reorder",
      prompt: "Order the words: [notice / did / anything strange / you / in the room]",
      options: ["Did you notice anything strange in the room?", "Did you anything strange notice in the room?", "In the room did notice you anything strange?", "You did notice anything strange in the room?"],
      correctAnswer: "Did you notice anything strange in the room?",
      explanationEn: "Did + you + notice + anything strange + in the room?",
      explanationHi: "सही क्रम: Did you notice anything strange in the room?",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day24_ex_023",
      type: "error_correction",
      prompt: "Correct the sentence: 'Did they left early yesterday?'",
      correctAnswer: "Did they leave early yesterday?",
      explanationEn: "'Left' must revert to 'leave' in a question with 'Did'.",
      explanationHi: "'Did' के बाद 'left' बदलकर 'leave' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day24_ex_024",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'Did he ______ (pay) the bill at the restaurant?'",
      correctAnswer: "pay",
      explanationEn: "Base verb 'pay'.",
      explanationHi: "'Did' के बाद 'pay' आएगा।",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS_YES_NO"
    },
    {
      id: "day24_ex_025",
      type: "multiple_choice",
      prompt: "Choose the correct question to ask 'क्या तुम्हें मेरा संदेश मिला?':",
      options: ["Did you get my message?", "Did you got my message?", "Do you got my message?", "Were you get my message?"],
      correctAnswer: "Did you get my message?",
      explanationEn: "Did you get my message?",
      explanationHi: "सही वाक्य: 'Did you get my message?'",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS_YES_NO"
    },
    {
      id: "day24_ex_026",
      type: "hindi_to_english",
      prompt: "Translate: 'क्या आपने कल रात अच्छी नींद ली?'",
      options: ["Did you sleep well last night?", "Did you slept well last night?", "Do you sleep well last night?", "Were you sleep well last night?"],
      correctAnswer: "Did you sleep well last night?",
      explanationEn: "Did you sleep well last night?",
      explanationHi: "सही अनुवाद: 'Did you sleep well last night?'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day24_ex_027",
      type: "error_correction",
      prompt: "Fix the error: 'Did you drank enough water today?'",
      correctAnswer: "Did you drink enough water today?",
      explanationEn: "'Drank' changes to 'drink' after 'Did'.",
      explanationHi: "'Did' के बाद 'drank' बदलकर 'drink' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day24_ex_028",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'Did you ______ (clean) your desk before leaving?'",
      correctAnswer: "clean",
      explanationEn: "Base verb 'clean'.",
      explanationHi: "'Did' के बाद 'clean' आएगा।",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS_YES_NO"
    },
    {
      id: "day24_ex_029",
      type: "multiple_choice",
      prompt: "Which question and answer pair is fully CORRECT?",
      options: ["A: Did you see Karan? B: Yes, I did.", "A: Did you saw Karan? B: Yes, I saw.", "A: Did you see Karan? B: Yes, I do.", "A: Did you seen Karan? B: Yes, I did."],
      correctAnswer: "A: Did you see Karan? B: Yes, I did.",
      explanationEn: "'Did you see' pairs with short answer 'Yes, I did.'",
      explanationHi: "'Did you see' और 'Yes, I did.' बिल्कुल सही हैं।",
      difficulty: "easy",
      skillTag: "CONVERSATIONAL_USE"
    },
    {
      id: "day24_ex_030",
      type: "word_reorder",
      prompt: "Reorder: [did / the keys / forget / you / on the table]",
      options: ["Did you forget the keys on the table?", "Did you the keys forget on the table?", "On the table did you forget the keys?", "Forget did you the keys on the table?"],
      correctAnswer: "Did you forget the keys on the table?",
      explanationEn: "Did + you + forget + the keys + on the table?",
      explanationHi: "सही क्रम: Did you forget the keys on the table?",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day24_ex_031",
      type: "dialogue_completion",
      prompt: "Complete the dialogue: Host: '______ you enjoy the dinner party?' Guest: 'Yes, I did! The food was amazing.'",
      correctAnswer: "Did",
      acceptableAlternatives: ["did"],
      explanationEn: "Question starts with auxiliary 'Did'.",
      explanationHi: "प्रश्न की शुरुआत 'Did' से होगी।",
      difficulty: "easy",
      skillTag: "CONVERSATIONAL_USE"
    },
    {
      id: "day24_ex_032",
      type: "spoken_response",
      prompt: "Speak aloud: Ask someone two questions about their weekend using 'Did you go...' and 'Did you watch...'.",
      modelResponse: "Did you go out this weekend? Did you watch the cricket match?",
      correctAnswer: "Did you go [place]? Did you watch [event/show]?",
      explanationEn: "Formulate two past questions using 'Did you + V1...?' with rising intonation.",
      explanationHi: "'Did you go...?' और 'Did you watch...?' बोलकर दो प्रश्न पूछें।",
      difficulty: "easy",
      skillTag: "SPEAKING"
    },
    {
      id: "day24_ex_033",
      type: "recall",
      prompt: "Turn 'She called him' into a Yes/No past question.",
      correctAnswer: "Did she call him?",
      acceptableAlternatives: ["Did she call him"],
      explanationEn: "'Did she call him?' with base verb 'call'.",
      explanationHi: "'She called him' का प्रश्न 'Did she call him?' होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day24_ex_034",
      type: "recall",
      prompt: "Turn 'They bought the car' into a Yes/No past question.",
      correctAnswer: "Did they buy the car?",
      acceptableAlternatives: ["Did they buy the car"],
      explanationEn: "'Did they buy the car?' with base verb 'buy'.",
      explanationHi: "'They bought the car' का प्रश्न 'Did they buy the car?' होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day24_ex_035",
      type: "recall",
      prompt: "Turn 'You went home' into a Yes/No past question.",
      correctAnswer: "Did you go home?",
      acceptableAlternatives: ["Did you go home"],
      explanationEn: "'Did you go home?' with base verb 'go'.",
      explanationHi: "'You went home' का प्रश्न 'Did you go home?' होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    }
  ],
  use: {
    situation: "Two roommates checking with each other before going to bed about evening chores and locks.",
    dialogue: {
      id: "day24_dialogue_001",
      turns: [
        { speaker: "Siddharth", textEn: "Hey Varun, did you lock the main balcony door?", textHi: "अरे वरुण, क्या तुमने बालकनी का मुख्य दरवाज़ा बंद कर दिया?" },
        { speaker: "Varun", textEn: "Yes, I did. I locked it right after dinner.", textHi: "हाँ, मैंने कर दिया। मैंने डिनर के तुरंत बाद ही ताला लगा दिया था।" },
        { speaker: "Siddharth", textEn: "Great. Did you turn off the kitchen gas stove as well?", textHi: "बहुत बढ़िया। क्या तुमने किचन का गैस स्टोव भी बंद कर दिया था?" },
        { speaker: "Varun", textEn: "Yes, I checked it twice. Did you feed the dog?", textHi: "हाँ, मैंने दो बार चेक किया। क्या तुमने कुत्ते को खाना खिला दिया?" },
        { speaker: "Siddharth", textEn: "No, I didn't! Thanks for reminding me. I'll do it right now.", textHi: "नहीं, मैंने नहीं खिलाया! याद दिलाने के लिए शुक्रिया। मैं अभी करता हूँ।" }
      ]
    },
    speakingTask: {
      promptEn: "Ask a partner or friend 3 polite questions about their yesterday using 'Did you sleep well?', 'Did you finish your work?', and 'Did you watch the match?'.",
      promptHi: "अपने साथी से कल के बारे में 'Did you + V1...?' का उपयोग करके 3 विनम्र प्रश्न पूछें।"
    }
  },
  assess: [
    { id: "day24_assess_001", question: "Why is 'Did you watched the movie?' ungrammatical?", answer: "Because the auxiliary 'did' already carries the past tense marker; the lexical verb must remain in its base form 'watch'.", skill: "Question Syntax" },
    { id: "day24_assess_002", question: "What is the difference between answering 'Yes, I did.' versus '*Yes, I watched*.'?", answer: "'Yes, I did.' is the standard English formulaic short response using the auxiliary. Lexical verbs are not used alone in standard short replies.", skill: "Pragmatic Competence" },
    { id: "day24_assess_003", question: "How do you ask about someone's location yesterday versus their actions yesterday?", answer: "Use 'Were you at home?' for past location/state (BE verb) and 'Did you go home?' for past dynamic action.", skill: "Grammar Discrimination" }
  ],
  review: {
    spacedRepetitionTag: "PAST_SIMPLE_QUESTIONS_YES_NO",
    recommendedIntervalDays: [1, 3, 7, 14]
  }
};

// Day 25: Past Information Questions (WH- Questions with 'Did': Where, When, Why, What time...)
const day25 = {
  dayNumber: 25,
  id: "day_25",
  titleEn: "Past Information Questions (WH- Questions with 'Did': Where, When, Why, What time...)",
  titleHi: "भूतकाल के सूचनात्मक प्रश्न (WH- शब्द + Did: Where, When, Why, What time...)",
  cefr: "A1.2",
  estMinutes: 30,
  prerequisites: "Day 24 (Past Yes/No Questions & Auxiliary Inversion)",
  objectivesEn: [
    "Construct accurate open-ended information questions in the past simple using: 'WH- Word + did + Subject + Base Verb (V1)...?'.",
    "Master specific WH- interrogatives in past contexts: Where (place), When / What time (time), Why (reason), What (object/action), How (manner).",
    "Maintain strict base verb integrity (V1) after 'did' across all WH- question structures.",
    "Formulate full natural answers combining past simple affirmative forms with appropriate information."
  ],
  objectivesHi: [
    "WH- शब्दों के साथ भूतकाल के विस्तृत प्रश्न बनाना: 'WH- Word + did + Subject + Base Verb (V1)...?'।",
    "अलग-अलग WH- शब्दों का सही प्रयोग: Where (कहाँ), When / What time (कब/किस समय), Why (क्यों), What (क्या), How (कैसे)।",
    "WH- प्रश्नों में भी 'did' के बाद मुख्य क्रिया का मूल रूप (V1) बनाए रखना।",
    "भूतकाल के प्रश्नों के उत्तर में V2 क्रियाओं के साथ प्राकृतिक उत्तर देना।"
  ],
  teach: {
    hindiExplanation: "जब हमें भूतकाल की किसी घटना के बारे में विस्तृत जानकारी चाहिए होती है (जैसे: 'तुम कल कहाँ गए थे?', 'तुमने क्या खरीदा?', 'मीटिंग कब शुरू हुई?', 'उसने नौकरी क्यों छोड़ी?'), तो हम WH- शब्दों (Where, When, What, Why, How, What time) का प्रयोग करते हैं। इसका सटीक सूत्र है: 'WH- Word + did + कर्ता + क्रिया का मूल रूप (V1) + अन्य शब्द?'। यहाँ भी नियम वही रहता है—चूँकि 'did' आ गया है, इसलिए मुख्य क्रिया हमेशा अपने पहले रूप (V1) में रहेगी! उत्तर देते समय चूँकि 'did' हट जाता है, इसलिए क्रिया का दूसरा रूप (V2) आता है (जैसे: Q: 'Where did you go?' ➔ A: 'I went to Delhi.').",
    englishExplanation: "To request specific information about completed past events, we form WH- questions using the formula: 'WH- Word + did + Subject + Base Verb (V1) + [Complement]?'. The auxiliary 'did' must always precede the subject, and the lexical verb must strictly remain in its base form (V1). Common WH- words include: What (activity/object), Where (location), When / What time (temporal point), Why (cause/reason), and How (manner/transport). Unlike Yes/No questions, WH- questions use a falling intonation contour at the end.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Standard WH- Past Auxiliary Word Order",
        description: "Strict syntactic order: [WH- Question Word] + did + [Subject] + [Base Verb V1] + [Rest of sentence]?",
        register: "Universal Syntax Standard"
      },
      {
        ruleNumber: 2,
        title: "Interrogative Function Alignment",
        description: "Where (Place) | When / What time (Time) | Why (Reason) | What (Object/Action) | How (Manner/Method) | Who did you meet (Person object).",
        register: "Semantic Mapping"
      },
      {
        ruleNumber: 3,
        title: "Base Verb Requirement in Questions vs. V2 in Answers",
        description: "Question uses V1: 'Where did you stay?' Answer uses V2: 'I stayed at a hotel.' Never use V2 in the question clause (*Where did you stayed?*).",
        register: "Core Syntax Invariant"
      },
      {
        ruleNumber: 4,
        title: "Subject Question Exception ('Who called you?')",
        description: "When 'Who' or 'What' is the grammatical subject (acting as the doer), 'did' is omitted and V2 is used directly: 'Who called you?' (NOT '*Who did call you?*').",
        register: "Advanced Structural Distinction"
      }
    ],
    formulaTable: [
      { subjectGroup: "Location Questions (Where)", formula: "Where + did + [Subject] + [Base Verb V1]?", exampleEn: "Where did you go on vacation?", meaningHi: "तुम छुट्टियों में कहाँ गए थे?" },
      { subjectGroup: "Temporal Questions (When / What time)", formula: "When / What time + did + [Subject] + [Base Verb V1]?", exampleEn: "What time did the train arrive?", meaningHi: "ट्रेन किस समय पहुँची?" },
      { subjectGroup: "Reason Questions (Why)", formula: "Why + did + [Subject] + [Base Verb V1]?", exampleEn: "Why did she resign from her job?", meaningHi: "उसने अपनी नौकरी से इस्तीफ़ा क्यों दिया?" },
      { subjectGroup: "Manner Questions (How)", formula: "How + did + [Subject] + [Base Verb V1]?", exampleEn: "How did you travel to Jaipur?", meaningHi: "आप जयपुर कैसे गए (यात्रा की)?" }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Omitting auxiliary 'did' ('*Where you went?*') or using double past ('*Where did you went?*')",
      hindiPattern: "हिन्दी में 'तुम कहाँ गए?' का सीधा शाब्दिक अनुवाद करके शिक्षार्थी '*Where you went?*' बोल देते हैं, या फिर 'did' लगाने के बाद भी '*Where did you went?*' बोल देते हैं।",
      potentialInterference: "Saying '*Why you left early?*' or '*What did you bought?*'.",
      explanation: "English non-subject WH- questions mandatorily require the auxiliary 'did' before the subject, followed by the base verb V1.",
      naturalSolution: "Always say 'Where did you go?' and 'Why did you leave early?'."
    }
  },
  learn: {
    vocabulary: [
      { id: "day25_vocab_001", word: "Arrive", pos: "Verb", ipa: "/əˈraɪv/", meaningHi: "पहुँचना", exampleEn: "What time did the flight arrive?", exampleHi: "फ़्लाइट किस समय पहुँची?" },
      { id: "day25_vocab_002", word: "Spend", pos: "Verb", ipa: "/spend/", meaningHi: "खर्च करना / बिताना", exampleEn: "How much money did you spend on books?", exampleHi: "आपने किताबों पर कितने पैसे खर्च किए?" },
      { id: "day25_vocab_003", word: "Lose", pos: "Verb", ipa: "/luːz/", meaningHi: "खोना / गँवाना", exampleEn: "Where did you lose your identity card?", exampleHi: "आपका पहचान पत्र कहाँ खो गया?" },
      { id: "day25_vocab_004", word: "Choose", pos: "Verb", ipa: "/tʃuːz/", meaningHi: "चुनना / पसंद करना", exampleEn: "Why did you choose this hotel?", exampleHi: "आपने इस होटल को क्यों चुना?" },
      { id: "day25_vocab_005", word: "Learn", pos: "Verb", ipa: "/lɜːn/", meaningHi: "सीखना", exampleEn: "Where did you learn to drive so well?", exampleHi: "आपने इतनी अच्छी गाड़ी चलाना कहाँ सीखा?" },
      { id: "day25_vocab_006", word: "Return", pos: "Verb", ipa: "/rɪˈtɜːn/", meaningHi: "लौटना / वापस आना", exampleEn: "When did they return from their holiday?", exampleHi: "वे अपनी छुट्टियों से कब वापस लौटे?" },
      { id: "day25_vocab_007", word: "Discover", pos: "Verb", ipa: "/dɪˈskʌv.ər/", meaningHi: "खोजना / पता लगाना", exampleEn: "How did you discover this cafe?", exampleHi: "आपको इस कैफ़े का पता कैसे चला?" },
      { id: "day25_vocab_008", word: "Order", pos: "Verb", ipa: "/ˈɔː.dər/", meaningHi: "ऑर्डर करना / मंगाना", exampleEn: "What did you order for lunch?", exampleHi: "आपने दोपहर के भोजन के लिए क्या ऑर्डर किया?" },
      { id: "day25_vocab_009", word: "Fix", pos: "Verb", ipa: "/fɪks/", meaningHi: "ठीक करना / सुधारना", exampleEn: "How did the technician fix the computer?", exampleHi: "तकनीशियन ने कंप्यूटर कैसे ठीक किया?" },
      { id: "day25_vocab_010", word: "Explain", pos: "Verb", ipa: "/ɪkˈspleɪn/", meaningHi: "समझाना / व्याख्या करना", exampleEn: "What did the doctor explain to you?", exampleHi: "डॉक्टर ने आपको क्या समझाया?" }
    ],
    phrases: [
      { id: "day25_phrase_001", phrase: "What happened?", register: "Conversational Inquiry", meaningHi: "क्या हुआ?" },
      { id: "day25_phrase_002", phrase: "Where did you go?", register: "Conversational", meaningHi: "तुम कहाँ गए थे?" },
      { id: "day25_phrase_003", phrase: "When did you arrive?", register: "Travel Inquiry", meaningHi: "आप कब पहुँचे?" },
      { id: "day25_phrase_004", phrase: "Why did you choose that?", register: "Inquiry", meaningHi: "आपने वह क्यों चुना?" },
      { id: "day25_phrase_005", phrase: "How did you find it?", register: "Conversational", meaningHi: "आपको यह कैसा लगा / कैसे मिला?" },
      { id: "day25_phrase_006", phrase: "What time did you leave?", register: "Time Inquiry", meaningHi: "आप किस समय निकले?" }
    ]
  },
  examples: [
    { id: "day25_example_001", en: "Where did you go yesterday?", hi: "तुम कल कहाँ गए थे?" },
    { id: "day25_example_002", en: "What did you buy at the mall?", hi: "तुमने मॉल में क्या खरीदा?" },
    { id: "day25_example_003", en: "When did you finish your work?", hi: "तुमने अपना काम कब पूरा किया?" },
    { id: "day25_example_004", en: "Why did he leave the party early?", hi: "वह पार्टी से जल्दी क्यों चला गया?" },
    { id: "day25_example_005", en: "How did you travel to Mumbai?", hi: "तुम मुंबई कैसे गए (किस माध्यम से)?" },
    { id: "day25_example_006", en: "What time did the train arrive?", hi: "ट्रेन किस समय पहुँची?" },
    { id: "day25_example_007", en: "Who did you meet at the conference?", hi: "आप सम्मेलन में किससे मिले?" },
    { id: "day25_example_008", en: "How much did this shirt cost?", hi: "इस शर्ट की कीमत कितनी थी?" },
    { id: "day25_example_009", en: "Where did she stay in Goa?", hi: "वह गोवा में कहाँ रुकी थी?" },
    { id: "day25_example_010", en: "Why did they cancel the cricket match?", hi: "उन्होंने क्रिकेट मैच क्यों रद्द किया?" },
    { id: "day25_example_011", en: "What did the manager say in the meeting?", hi: "मैनेजर ने मीटिंग में क्या कहा?" },
    { id: "day25_example_012", en: "How did you solve this difficult math problem?", hi: "आपने यह कठिन गणित का सवाल कैसे हल किया?" }
  ],
  pronunciation: {
    targetSounds: ["Falling intonation contour at the end of WH- questions (↘)", "Rapid unstressed pronunciation of auxiliary 'did you' (/dɪdʒuː/)"],
    traps: "Do NOT use rising intonation on WH- questions. WH- questions naturally step down in pitch at the end: 'Where did you go? (↘)'.",
    drills: [
      { id: "day25_audio_001", voiceRole: "TEACHER", audioType: "drill", text: "Where did you go yesterday? (↘)" },
      { id: "day25_audio_002", voiceRole: "TEACHER", audioType: "drill", text: "What did you buy at the store? (↘)" },
      { id: "day25_audio_003", voiceRole: "TEACHER", audioType: "drill", text: "Why did she leave so early? (↘)" },
      { id: "day25_audio_004", voiceRole: "TEACHER", audioType: "drill", text: "What time did the train arrive? (↘)" }
    ]
  },
  practice: [
    {
      id: "day25_ex_001",
      type: "multiple_choice",
      prompt: "Choose the correct question to ask 'तुम कल कहाँ गए थे?':",
      options: ["Where you went yesterday?", "Where did you go yesterday?", "Where did you went yesterday?", "Where were you go yesterday?"],
      correctAnswer: "Where did you go yesterday?",
      explanationEn: "WH- word (Where) + did + Subject (you) + Base verb (go).",
      explanationHi: "'Where + did + you + go' सही सूत्र है।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_002",
      type: "multiple_choice",
      prompt: "Which question correctly asks for the reason of an action?",
      options: ["Why did you leave early?", "Why you left early?", "Why did you left early?", "Why were you leave early?"],
      correctAnswer: "Why did you leave early?",
      explanationEn: "'Why did you leave early?' maintains the base form 'leave' with auxiliary 'did'.",
      explanationHi: "'Why did you leave' में 'did' के साथ क्रिया का मूल रूप 'leave' है।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_003",
      type: "fill_in_blank",
      prompt: "Complete the question: 'What time ______ the meeting start yesterday?' (Auxiliary verb)",
      correctAnswer: "did",
      acceptableAlternatives: ["did"],
      explanationEn: "Past question requires auxiliary 'did'.",
      explanationHi: "भूतकाल के प्रश्न में सहायक क्रिया 'did' आएगी।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_004",
      type: "fill_in_blank",
      prompt: "Complete the question with the base form of (buy): 'What did you ______ at the market?'",
      correctAnswer: "buy",
      explanationEn: "Base verb 'buy' is used after 'What did you'.",
      explanationHi: "'What did you' के बाद मूल क्रिया 'buy' आएगी।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_005",
      type: "word_reorder",
      prompt: "Arrange into a correct question: [travel / how / to Goa / did / you]",
      options: ["How did you travel to Goa?", "How you did travel to Goa?", "How travel did you to Goa?", "Did how you travel to Goa?"],
      correctAnswer: "How did you travel to Goa?",
      explanationEn: "How + did + you + travel + to Goa?",
      explanationHi: "सही क्रम: How did you travel to Goa?",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day25_ex_006",
      type: "error_correction",
      prompt: "Identify and correct the error: 'When did you arrived in Delhi?'",
      correctAnswer: "When did you arrive in Delhi?",
      explanationEn: "'Arrived' must be 'arrive' (V1) after 'did'.",
      explanationHi: "'Did' के कारण 'arrived' बदलकर 'arrive' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day25_ex_007",
      type: "hindi_to_english",
      prompt: "Translate into English: 'तुमने कल रात क्या खाया?'",
      options: ["What did you eat last night?", "What did you ate last night?", "What you ate last night?", "What were you eat last night?"],
      correctAnswer: "What did you eat last night?",
      explanationEn: "What + did + you + eat + last night?",
      explanationHi: "सही अनुवाद: 'What did you eat last night?'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day25_ex_008",
      type: "english_to_hindi",
      prompt: "What is the Hindi meaning of: 'Why did they cancel the flight?'",
      options: ["उन्होंने फ़्लाइट क्यों रद्द की?", "फ़्लाइट कब रद्द हुई?", "क्या फ़्लाइट रद्द हो गई थी?", "वे फ़्लाइट से क्यों नहीं गए?"],
      correctAnswer: "उन्होंने फ़्लाइट क्यों रद्द की?",
      explanationEn: "'Why did they cancel the flight?' means 'उन्होंने फ़्लाइट क्यों रद्द की?'.",
      explanationHi: "सही अर्थ: 'उन्होंने फ़्लाइट क्यों रद्द की?'",
      difficulty: "easy",
      skillTag: "TRANSLATION_EN_HI"
    },
    {
      id: "day25_ex_009",
      type: "multiple_choice",
      prompt: "Which question word is used to ask about the price of an item in the past?",
      options: ["How much did it cost?", "How many did it cost?", "Where did it cost?", "Why did it cost?"],
      correctAnswer: "How much did it cost?",
      explanationEn: "'How much did it cost?' asks for the past price.",
      explanationHi: "कीमत पूछने के लिए 'How much did it cost?' का प्रयोग होता है।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_010",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'Where did Rohan ______ (stay) during his vacation?'",
      correctAnswer: "stay",
      explanationEn: "Base verb 'stay'.",
      explanationHi: "'Did' के बाद 'stay' आएगा।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_011",
      type: "multiple_choice",
      prompt: "What intonation contour is standard for WH- questions?",
      options: ["Falling intonation at the end (↘)", "Rising intonation at the end (↗)", "High monotone pitch", "Screaming"],
      correctAnswer: "Falling intonation at the end (↘)",
      explanationEn: "WH- questions naturally fall in pitch at the end.",
      explanationHi: "WH- प्रश्नों के अंत में आवाज़ नीचे गिरती है (Falling Intonation)।",
      difficulty: "medium",
      skillTag: "PHONETICS"
    },
    {
      id: "day25_ex_012",
      type: "word_reorder",
      prompt: "Put in order: [at the conference / meet / who / did / you]",
      options: ["Who did you meet at the conference?", "Who you did meet at the conference?", "Who meet did you at the conference?", "Did you who meet at the conference?"],
      correctAnswer: "Who did you meet at the conference?",
      explanationEn: "Who + did + you + meet + at the conference?",
      explanationHi: "सही क्रम: Who did you meet at the conference?",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day25_ex_013",
      type: "error_correction",
      prompt: "Correct the sentence: 'Where you bought this beautiful dress?'",
      correctAnswer: "Where did you buy this beautiful dress?",
      explanationEn: "Insert auxiliary 'did' and change 'bought' to 'buy'.",
      explanationHi: "सहायक क्रिया 'did' जोड़ें और 'bought' को 'buy' करें।",
      difficulty: "medium",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day25_ex_014",
      type: "multiple_choice",
      prompt: "Choose the correct question to ask 'फ़िल्म किस समय शुरू हुई?':",
      options: ["What time did the movie start?", "What time did the movie started?", "What time the movie started?", "What time was the movie start?"],
      correctAnswer: "What time did the movie start?",
      explanationEn: "What time + did + the movie + start?",
      explanationHi: "सही वाक्य: 'What time did the movie start?'",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_015",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'Why did she ______ (say) that during the meeting?'",
      correctAnswer: "say",
      explanationEn: "Base verb 'say'.",
      explanationHi: "'Did' के बाद 'say' आएगा।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_016",
      type: "hindi_to_english",
      prompt: "Translate: 'आपने यह नया फ़ोन कहाँ से खरीदा?'",
      options: ["Where did you buy this new phone?", "Where did you bought this new phone?", "Where you buy this new phone?", "From where you bought this new phone?"],
      correctAnswer: "Where did you buy this new phone?",
      explanationEn: "Where did you buy this new phone?",
      explanationHi: "सही अनुवाद: 'Where did you buy this new phone?'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day25_ex_017",
      type: "multiple_choice",
      prompt: "Which answer matches the question: 'Where did you go on Sunday?'",
      options: ["I went to the Red Fort.", "I go to the Red Fort.", "Yes, I did.", "No, I didn't."],
      correctAnswer: "I went to the Red Fort.",
      explanationEn: "Open WH- question requires full informational answer with past simple V2 'went'.",
      explanationHi: "WH- प्रश्न के उत्तर में पूरा वाक्य V2 'went' के साथ आएगा।",
      difficulty: "easy",
      skillTag: "CONVERSATIONAL_USE"
    },
    {
      id: "day25_ex_018",
      type: "error_correction",
      prompt: "Fix the error: 'How much money did you spent on shopping?'",
      correctAnswer: "How much money did you spend on shopping?",
      explanationEn: "'Spent' must revert to 'spend' after 'did'.",
      explanationHi: "'Did' के बाद 'spent' बदलकर 'spend' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day25_ex_019",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'When did they ______ (finish) building the bridge?'",
      correctAnswer: "finish",
      explanationEn: "Base verb 'finish'.",
      explanationHi: "'Did' के बाद 'finish' आएगा।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_020",
      type: "multiple_choice",
      prompt: "Select the sentence with accurate syntax for asking about manner:",
      options: ["How did you solve the puzzle?", "How did you solved the puzzle?", "How you solved the puzzle?", "How were you solve the puzzle?"],
      correctAnswer: "How did you solve the puzzle?",
      explanationEn: "How did you solve the puzzle?",
      explanationHi: "'How did you solve the puzzle?' पूर्णतः शुद्ध वाक्य है।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_021",
      type: "word_reorder",
      prompt: "Order: [did / why / your old job / you / leave]",
      options: ["Why did you leave your old job?", "Why you did leave your old job?", "Why leave did you your old job?", "Did why you leave your old job?"],
      correctAnswer: "Why did you leave your old job?",
      explanationEn: "Why + did + you + leave + your old job?",
      explanationHi: "सही क्रम: Why did you leave your old job?",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day25_ex_022",
      type: "error_correction",
      prompt: "Correct the sentence: 'What did the manager told you yesterday?'",
      correctAnswer: "What did the manager tell you yesterday?",
      explanationEn: "'Told' must revert to 'tell' after 'did'.",
      explanationHi: "'Did' के बाद 'told' बदलकर 'tell' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day25_ex_023",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'Where did you ______ (lose) your house keys?'",
      correctAnswer: "lose",
      explanationEn: "Base verb 'lose'.",
      explanationHi: "'Did' के बाद 'lose' आएगा।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_024",
      type: "multiple_choice",
      prompt: "Choose the correct question to ask 'कल क्या हुआ?':",
      options: ["What happened yesterday?", "What did happen yesterday?", "What was happen yesterday?", "What happening yesterday?"],
      correctAnswer: "What happened yesterday?",
      explanationEn: "When 'What' is the subject of the sentence, we use V2 'happened' directly without 'did'.",
      explanationHi: "जब 'What' स्वयं कर्ता का काम करता है, तो 'did' के बिना सीधे V2 'happened' आता है।",
      difficulty: "medium",
      skillTag: "SUBJECT_QUESTIONS"
    },
    {
      id: "day25_ex_025",
      type: "hindi_to_english",
      prompt: "Translate: 'ट्रेन किस समय रवाना हुई?'",
      options: ["What time did the train leave?", "What time did the train left?", "What time the train left?", "When the train was leave?"],
      correctAnswer: "What time did the train leave?",
      explanationEn: "What time did the train leave?",
      explanationHi: "सही अनुवाद: 'What time did the train leave?'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day25_ex_026",
      type: "error_correction",
      prompt: "Fix the error: 'Why did you chose this difficult course?'",
      correctAnswer: "Why did you choose this difficult course?",
      explanationEn: "'Chose' must revert to base form 'choose'.",
      explanationHi: "'Did' के बाद 'chose' बदलकर 'choose' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day25_ex_027",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'How did the fire ______ (start) in the kitchen?'",
      correctAnswer: "start",
      explanationEn: "Base verb 'start'.",
      explanationHi: "'Did' के बाद 'start' आएगा।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_028",
      type: "multiple_choice",
      prompt: "Which WH- word correctly completes: '______ did you travel to Kerala? By train or by flight?'",
      options: ["How", "Why", "Where", "What"],
      correctAnswer: "How",
      explanationEn: "'How' asks for the method/means of transport.",
      explanationHi: "साधन पूछने के लिए 'How' का प्रयोग होगा।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day25_ex_029",
      type: "word_reorder",
      prompt: "Put in order: [you / order / for dessert / what / did]",
      options: ["What did you order for dessert?", "What you did order for dessert?", "What did order you for dessert?", "Did what you order for dessert?"],
      correctAnswer: "What did you order for dessert?",
      explanationEn: "What + did + you + order + for dessert?",
      explanationHi: "सही क्रम: What did you order for dessert?",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day25_ex_030",
      type: "dialogue_completion",
      prompt: "Complete the conversation: Maya: 'I went to a bakery yesterday.' Kabir: 'What ______ you buy there?'",
      correctAnswer: "did",
      acceptableAlternatives: ["did"],
      explanationEn: "Use past auxiliary 'did'.",
      explanationHi: "भूतकाल के प्रश्न के लिए 'did' आएगा।",
      difficulty: "easy",
      skillTag: "CONVERSATIONAL_USE"
    },
    {
      id: "day25_ex_031",
      type: "spoken_response",
      prompt: "Speak aloud: Ask someone where they went and what they bought yesterday using 'Where did you go...?' and 'What did you buy...?'.",
      modelResponse: "Where did you go yesterday? What did you buy at the market?",
      correctAnswer: "Where did you go [time]? What did you buy [place]?",
      explanationEn: "Construct two open past WH- questions with falling intonation.",
      explanationHi: "'Where did you go...?' और 'What did you buy...?' बोलकर दो प्रश्न पूछें।",
      difficulty: "easy",
      skillTag: "SPEAKING"
    },
    {
      id: "day25_ex_032",
      type: "recall",
      prompt: "Form a past WH- question for: 'She lived in Mumbai.' (Ask about location using 'Where')",
      correctAnswer: "Where did she live?",
      acceptableAlternatives: ["Where did she live"],
      explanationEn: "'Where did she live?' with base verb 'live'.",
      explanationHi: "'Where did she live?' सही प्रश्न है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day25_ex_033",
      type: "recall",
      prompt: "Form a past WH- question for: 'They arrived at 6 PM.' (Ask about time using 'When')",
      correctAnswer: "When did they arrive?",
      acceptableAlternatives: ["When did they arrive", "What time did they arrive?", "What time did they arrive"],
      explanationEn: "'When did they arrive?' or 'What time did they arrive?'.",
      explanationHi: "'When did they arrive?' सही प्रश्न है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day25_ex_034",
      type: "recall",
      prompt: "Form a past WH- question for: 'He left because he was tired.' (Ask about reason using 'Why')",
      correctAnswer: "Why did he leave?",
      acceptableAlternatives: ["Why did he leave"],
      explanationEn: "'Why did he leave?' with base verb 'leave'.",
      explanationHi: "'Why did he leave?' सही प्रश्न है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day25_ex_035",
      type: "recall",
      prompt: "Form a past WH- question for: 'I bought a new watch.' (Ask about object using 'What')",
      correctAnswer: "What did you buy?",
      acceptableAlternatives: ["What did you buy"],
      explanationEn: "'What did you buy?' with base verb 'buy'.",
      explanationHi: "'What did you buy?' सही प्रश्न है।",
      difficulty: "easy",
      skillTag: "RECALL"
    }
  ],
  use: {
    situation: "Catching up with a coworker who just returned from an annual vacation in Himachal Pradesh.",
    dialogue: {
      id: "day25_dialogue_001",
      turns: [
        { speaker: "Aditi", textEn: "Welcome back, Tarun! Where did you go for your vacation?", textHi: "वापसी पर स्वागत है, तरुण! तुम छुट्टियों में कहाँ गए थे?" },
        { speaker: "Tarun", textEn: "Thanks, Aditi! I went to Manali with my family for five days.", textHi: "धन्यवाद, अदिति! मैं अपने परिवार के साथ पाँच दिनों के लिए मनाली गया था।" },
        { speaker: "Aditi", textEn: "That sounds exciting! How did you travel there?", textHi: "यह तो बहुत रोमांचक लगता है! तुम वहाँ कैसे गए?" },
        { speaker: "Tarun", textEn: "We took an overnight Volvo bus from Delhi. The mountain drive was scenic.", textHi: "हमने दिल्ली से रात की वोल्वो बस ली थी। पहाड़ों का रास्ता बहुत सुंदर था।" },
        { speaker: "Aditi", textEn: "What activities did you do there, and what did you buy?", textHi: "तुमने वहाँ क्या-क्या किया, और क्या खरीदा?" },
        { speaker: "Tarun", textEn: "We went trekking, tried local trout fish, and bought warm woolen shawls for our parents.", textHi: "हम ट्रैकिंग पर गए, स्थानीय ट्राउट मछली खाई, और अपने माता-पिता के लिए ऊनी शॉल खरीदीं।" }
      ]
    },
    speakingTask: {
      promptEn: "Interview a partner about their last trip using 4 WH- questions: Where did you go? When did you leave? How did you travel? What did you do there?",
      promptHi: "अपने साथी से उनकी पिछली यात्रा के बारे में 4 WH- प्रश्न पूछें (Where, When, How, What)।"
    }
  },
  assess: [
    { id: "day25_assess_001", question: "Why is '*Where you went yesterday?*' incorrect in English?", answer: "Because English non-subject WH- questions require the auxiliary operator 'did' placed before the subject, followed by the base verb V1 ('Where did you go?').", skill: "Interrogative Syntax" },
    { id: "day25_assess_002", question: "How does the verb form differ between the question 'What did you buy?' and the answer 'I bought a laptop'?", answer: "The question uses the auxiliary 'did' + base verb 'buy' (V1), whereas the affirmative answer drops 'did' and uses the past simple form 'bought' (V2).", skill: "Structural Transformation" },
    { id: "day25_assess_003", question: "Why is 'What happened?' correct without 'did'?", answer: "When the question word ('What' or 'Who') acts as the subject/agent of the clause, auxiliary 'did' is omitted and the past tense verb is used directly.", skill: "Subject Question Mastery" }
  ],
  review: {
    spacedRepetitionTag: "PAST_SIMPLE_WH_QUESTIONS",
    recommendedIntervalDays: [1, 3, 7, 14]
  }
};

// Write files
fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day24.js'), `export const day24 = ${JSON.stringify(day24, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Wrote day24.js");

fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day25.js'), `export const day25 = ${JSON.stringify(day25, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Wrote day25.js");
