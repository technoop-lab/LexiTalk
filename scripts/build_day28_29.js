import fs from 'fs';
import path from 'path';

// Day 28: Past Continuous Basics (Was/Were + Verb-ing & Ongoing Past Actions)
const day28 = {
  dayNumber: 28,
  id: "day_28",
  titleEn: "Past Continuous Basics (Was/Were + Verb-ing & Ongoing Past Actions)",
  titleHi: "भूतकाल निरंतर काल की बुनियादी बातें (Was/Were + Verb-ing और जारी भूतकालीन कार्य)",
  cefr: "A1.2",
  estMinutes: 30,
  prerequisites: "Day 21–27 (Past Simple Full Paradigm)",
  objectivesEn: [
    "Form accurate Past Continuous sentences using: 'Subject + was/were + Verb-ing'.",
    "Select appropriate auxiliary based on subject number (I/He/She/It + was; You/We/They + were).",
    "Describe activities that were ongoing/in-progress at a specific past point in time (e.g., 'At 8 PM yesterday, I was having dinner').",
    "Construct negative and interrogative forms ('wasn't / weren't + V-ing' & 'Was / Were you + V-ing?')."
  ],
  objectivesHi: [
    "Past Continuous (अपूर्ण भूतकाल) के सटीक वाक्य बनाना: 'Subject + was/were + Verb-ing'।",
    "कर्ता के अनुसार सही सहायक क्रिया चुनना (I/He/She/It के साथ 'was'; You/We/They के साथ 'were')।",
    "भूतकाल के किसी निश्चित समय पर जारी चल रहे कार्यों का वर्णन करना (जैसे: 'कल रात 8 बजे मैं खाना खा रहा था')।",
    "नकारात्मक और प्रश्नवाचक वाक्य बनाना ('wasn't/weren't + V-ing' और 'Was/Were you + V-ing?')।"
  ],
  teach: {
    hindiExplanation: "जब हमें बताना हो कि भूतकाल के किसी निश्चित समय पर कोई काम 'चल रहा था' या 'जारी था' (जैसे: 'रहा था', 'रही थी', 'रहे थे' — 'मैं कल शाम टीवी देख रहा था', 'वे क्रिकेट खेल रहे थे'), तो हम Past Continuous Tense का प्रयोग करते हैं। इसका सूत्र है: 'Subject + was / were + Verb-ing'। ध्यान रखें: I, He, She, It और एकवचन संज्ञा के साथ 'was' आता है; You, We, They और बहुवचन संज्ञा के साथ 'were' आता है। नकारात्मक बनाने के लिए 'was not (wasn't)' या 'were not (weren't)' का प्रयोग करते हैं।",
    englishExplanation: "The Past Continuous (Past Progressive) tense describes actions that were actively in progress at a specific temporal reference point in the past. Formula: 'Subject + was/were + Base Verb-ing'. Subject Concord: Use 'was' with singular subjects (I, he, she, it, singular nouns); use 'were' with plural subjects and second person (you, we, they, plural nouns). Negation: 'wasn't / weren't + Verb-ing'. Questions invert the auxiliary: 'Was/Were + Subject + Verb-ing?'.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Subject-Auxiliary Concord (Was vs. Were)",
        description: "I / He / She / It / Singular Noun ➔ WAS | You / We / They / Plural Nouns ➔ WERE. Never say '*You was*' or '*They was*'.",
        register: "Core Syntax Standard"
      },
      {
        ruleNumber: 2,
        title: "Present Participle (-ing) Suffixation Rules",
        description: "Base verb + ing (read ➔ reading; write ➔ writing; run ➔ running; die ➔ dying).",
        register: "Morphological Precision"
      },
      {
        ruleNumber: 3,
        title: "Ongoing Temporal Reference Point Function",
        description: "Expresses duration/progress at an exact past moment: 'At 7 PM yesterday, I was studying.' Action started before 7 PM and was still happening.",
        register: "Aspectual Semantics"
      },
      {
        ruleNumber: 4,
        title: "Stative Verb Exception",
        description: "Non-action/stative verbs (know, want, like, belong, need) are NOT used in continuous forms. Say 'I wanted help' (NOT '*I was wanting help*').",
        register: "Aspectual Constraint"
      }
    ],
    formulaTable: [
      { subjectGroup: "Singular Affirmative (I, He, She, It)", formula: "Subject + was + Verb-ing + [Object]", exampleEn: "He was sleeping at midnight.", meaningHi: "वह आधी रात को सो रहा था।" },
      { subjectGroup: "Plural Affirmative (You, We, They)", formula: "Subject + were + Verb-ing + [Object]", exampleEn: "They were playing football.", meaningHi: "वे फ़ुटबॉल खेल रहे थे।" },
      { subjectGroup: "Negative Statement", formula: "Subject + wasn't / weren't + Verb-ing", exampleEn: "I wasn't watching television.", meaningHi: "मैं टेलीविज़न नहीं देख रहा था।" },
      { subjectGroup: "Interrogative (Yes/No Question)", formula: "Was / Were + Subject + Verb-ing?", exampleEn: "Were you studying at 10 PM?", meaningHi: "क्या तुम रात 10 बजे पढ़ाई कर रहे थे?" }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Using '*You was*' or using continuous with stative verbs ('*I was knowing the answer*')",
      hindiPattern: "हिन्दी में 'तुम सो रहे थे' में 'तुम' के साथ कभी-कभी एकवचन मानकर शिक्षार्थी 'You was' बोल देते हैं, या 'मुझे पता था' का अनुवाद '*I was knowing*' कर देते हैं।",
      potentialInterference: "Saying '*You was going*' or '*I was wanting water*'.",
      explanation: "'You' ALWAYS takes 'were' in standard English. Stative verbs like 'know' and 'want' do not take progressive aspect.",
      naturalSolution: "Always say 'You were going' and 'I knew the answer / I wanted water'."
    }
  },
  learn: {
    vocabulary: [
      { id: "day28_vocab_001", word: "Cook", pos: "Verb", ipa: "/kʊk/", meaningHi: "पकाना / खाना बनाना", exampleEn: "She was cooking dinner when I called.", exampleHi: "जब मैंने फ़ोन किया, वह रात का खाना बना रही थी।" },
      { id: "day28_vocab_002", word: "Rain", pos: "Verb/Noun", ipa: "/reɪn/", meaningHi: "बारिश होना", exampleEn: "It was raining heavily at 6 AM.", exampleHi: "सुबह 6 बजे भारी बारिश हो रही थी।" },
      { id: "day28_vocab_003", word: "Drive", pos: "Verb", ipa: "/draɪv/", meaningHi: "गाड़ी चलाना", exampleEn: "He was driving to Delhi yesterday afternoon.", exampleHi: "वह कल दोपहर दिल्ली के लिए गाड़ी चला रहा था।" },
      { id: "day28_vocab_004", word: "Wait", pos: "Verb", ipa: "/weɪt/", meaningHi: "इंतज़ार करना", exampleEn: "We were waiting at the bus stop for an hour.", exampleHi: "हम एक घंटे से बस स्टॉप पर इंतज़ार कर रहे थे।" },
      { id: "day28_vocab_005", word: "Shine", pos: "Verb", ipa: "/ʃaɪn/", meaningHi: "चमकना", exampleEn: "The sun was shining brightly this morning.", exampleHi: "आज सुबह सूरज तेज़ी से चमक रहा था।" },
      { id: "day28_vocab_006", word: "Sleep", pos: "Verb", ipa: "/sliːp/", meaningHi: "सोना", exampleEn: "The baby was sleeping peacefully.", exampleHi: "बच्चा शांति से सो रहा था।" },
      { id: "day28_vocab_007", word: "Prepare", pos: "Verb", ipa: "/prɪˈpeər/", meaningHi: "तैयारी करना", exampleEn: "They were preparing for the final exams.", exampleHi: "वे अंतिम परीक्षाओं की तैयारी कर रहे थे।" },
      { id: "day28_vocab_008", word: "Listen", pos: "Verb", ipa: "/ˈlɪs.ən/", meaningHi: "सुनना (ध्यान से)", exampleEn: "I was listening to music with headphones.", exampleHi: "मैं हेडफ़ोन लगाकर संगीत सुन रहा था।" },
      { id: "day28_vocab_009", word: "Discuss", pos: "Verb", ipa: "/dɪˈskʌs/", meaningHi: "चर्चा करना", exampleEn: "The managers were discussing the new budget.", exampleHi: "प्रबंधक नए बजट पर चर्चा कर रहे थे।" },
      { id: "day28_vocab_010", word: "Travel", pos: "Verb", ipa: "/ˈtræv.əl/", meaningHi: "यात्रा करना", exampleEn: "We were traveling through the mountains.", exampleHi: "हम पहाड़ों से होकर यात्रा कर रहे थे।" }
    ],
    phrases: [
      { id: "day28_phrase_001", phrase: "What were you doing?", register: "Conversational Inquiry", meaningHi: "आप क्या कर रहे थे?" },
      { id: "day28_phrase_002", phrase: "I was just thinking about you.", register: "Friendly / Warm", meaningHi: "मैं बस तुम्हारे बारे में ही सोच रहा था।" },
      { id: "day28_phrase_003", phrase: "It was raining outside.", register: "Descriptive", meaningHi: "बाहर बारिश हो रही थी।" },
      { id: "day28_phrase_004", phrase: "They were having lunch.", register: "Descriptive", meaningHi: "वे दोपहर का भोजन कर रहे थे।" },
      { id: "day28_phrase_005", phrase: "Were you sleeping?", register: "Inquiry", meaningHi: "क्या तुम सो रहे थे?" },
      { id: "day28_phrase_006", phrase: "At this exact time yesterday", register: "Time Expression", meaningHi: "कल ठीक इसी समय" }
    ]
  },
  examples: [
    { id: "day28_example_001", en: "I was reading a book at 9 PM yesterday.", hi: "मैं कल रात 9 बजे एक किताब पढ़ रहा था।" },
    { id: "day28_example_002", en: "She was cooking dinner for the family.", hi: "वह परिवार के लिए रात का खाना बना रही थी।" },
    { id: "day28_example_003", en: "They were playing cricket in the park.", hi: "वे पार्क में क्रिकेट खेल रहे थे।" },
    { id: "day28_example_004", en: "We were driving to Jaipur yesterday afternoon.", hi: "हम कल दोपहर जयपुर जा रहे थे (गाड़ी चला रहे थे)।" },
    { id: "day28_example_005", en: "He wasn't paying attention to the teacher.", hi: "वह शिक्षक की बातों पर ध्यान नहीं दे रहा था।" },
    { id: "day28_example_006", en: "Were you sleeping when the doorbell rang?", hi: "क्या तुम सो रहे थे जब दरवाज़े की घंटी बजी?" },
    { id: "day28_example_007", en: "It was raining heavily throughout the night.", hi: "रात भर भारी बारिश हो रही थी।" },
    { id: "day28_example_008", en: "What were you doing at 5 o'clock yesterday?", hi: "कल पाँच बजे आप क्या कर रहे थे?" },
    { id: "day28_example_009", en: "The students were preparing for their annual test.", hi: "विद्यार्थी अपनी वार्षिक परीक्षा की तैयारी कर रहे थे।" },
    { id: "day28_example_010", en: "I wasn't feeling well yesterday evening.", hi: "कल शाम मेरी तबीयत ठीक नहीं लग रही थी।" },
    { id: "day28_example_011", en: "Why were they shouting outside the gate?", hi: "वे दरवाज़े के बाहर क्यों चिल्ला रहे थे?" },
    { id: "day28_example_012", en: "She was listening to classical music in her room.", hi: "वह अपने कमरे में शास्त्रीय संगीत सुन रही थी।" }
  ],
  pronunciation: {
    targetSounds: ["Weak forms of 'was' /wəz/ and 'were' /wə/ in unstressed positions", "Stress on lexical verb-ing ('was RUN-ning', 'were TALK-ing')"],
    traps: "In affirmative sentences, 'was' is pronounced /wəz/ (not a strong /wɒz/). 'Were' is pronounced /wə/ or /wər/. Keep them light and unstressed.",
    drills: [
      { id: "day28_audio_001", voiceRole: "TEACHER", audioType: "drill", text: "I was reading a novel. /aɪ wəz ˈriːdɪŋ/" },
      { id: "day28_audio_002", voiceRole: "TEACHER", audioType: "drill", text: "They were playing football. /ðeɪ wə ˈpleɪɪŋ/" },
      { id: "day28_audio_003", voiceRole: "TEACHER", audioType: "drill", text: "What were you doing yesterday at eight?" },
      { id: "day28_audio_004", voiceRole: "TEACHER", audioType: "drill", text: "She wasn't sleeping; she was working." }
    ]
  },
  practice: [
    {
      id: "day28_ex_001",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'कल रात 8 बजे मैं टीवी देख रहा था':",
      options: ["I was watching TV at 8 PM yesterday.", "I were watching TV at 8 PM yesterday.", "I was watched TV at 8 PM yesterday.", "I watched TV at 8 PM yesterday continuous."],
      correctAnswer: "I was watching TV at 8 PM yesterday.",
      explanationEn: "Subject 'I' takes 'was' + Verb-ing ('watching').",
      explanationHi: "'I' के साथ 'was watching' आएगा।",
      difficulty: "easy",
      skillTag: "PAST_CONTINUOUS"
    },
    {
      id: "day28_ex_002",
      type: "multiple_choice",
      prompt: "Which auxiliary verb agrees with 'They' in past continuous?",
      options: ["were", "was", "is", "are"],
      correctAnswer: "were",
      explanationEn: "Plural subject 'They' takes 'were'.",
      explanationHi: "बहुवचन कर्ता 'They' के साथ 'were' आता है।",
      difficulty: "easy",
      skillTag: "SUBJECT_VERB_AGREEMENT"
    },
    {
      id: "day28_ex_003",
      type: "fill_in_blank",
      prompt: "Fill in the blank with (was / were): 'Rahul and Aman ______ studying in the library.'",
      correctAnswer: "were",
      explanationEn: "Compound plural subject ('Rahul and Aman') takes 'were'.",
      explanationHi: "दो व्यक्तियों के नाम (बहुवचन) के साथ 'were' आएगा।",
      difficulty: "easy",
      skillTag: "SUBJECT_VERB_AGREEMENT"
    },
    {
      id: "day28_ex_004",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the correct form of (sleep): 'She was ______ when I knocked on the door.'",
      correctAnswer: "sleeping",
      explanationEn: "Use the -ing form 'sleeping' after 'was'.",
      explanationHi: "'Was' के बाद -ing रूप 'sleeping' आएगा।",
      difficulty: "easy",
      skillTag: "PAST_CONTINUOUS"
    },
    {
      id: "day28_ex_005",
      type: "word_reorder",
      prompt: "Arrange into a correct question: [you / doing / what / at 7 PM / were]",
      options: ["What were you doing at 7 PM?", "What you were doing at 7 PM?", "Were what you doing at 7 PM?", "What doing were you at 7 PM?"],
      correctAnswer: "What were you doing at 7 PM?",
      explanationEn: "What + were + you + doing + at 7 PM?",
      explanationHi: "सही क्रम: What were you doing at 7 PM?",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day28_ex_006",
      type: "error_correction",
      prompt: "Identify and correct the error: 'You was driving too fast yesterday.'",
      correctAnswer: "You were driving too fast yesterday.",
      explanationEn: "'You' takes 'were', never 'was'.",
      explanationHi: "'You' के साथ 'were' आता है, 'was' नहीं।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day28_ex_007",
      type: "hindi_to_english",
      prompt: "Translate into English: 'कल शाम बाहर बारिश हो रही थी।'",
      options: ["It was raining outside yesterday evening.", "It were raining outside yesterday evening.", "It was rain outside yesterday evening.", "It rained outside yesterday evening continuous."],
      correctAnswer: "It was raining outside yesterday evening.",
      explanationEn: "It was raining outside yesterday evening.",
      explanationHi: "सही अनुवाद: 'It was raining outside yesterday evening.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day28_ex_008",
      type: "english_to_hindi",
      prompt: "What is the Hindi meaning of: 'They were having dinner at a restaurant'?",
      options: ["वे एक रेस्तरां में रात का खाना खा रहे थे।", "उन्होंने रेस्तरां में खाना खाया।", "वे रेस्तरां जा रहे थे।", "क्या वे रेस्तरां में खाना खा रहे थे?"],
      correctAnswer: "वे एक रेस्तरां में रात का खाना खा रहे थे।",
      explanationEn: "'They were having dinner' means 'वे रात का खाना खा रहे थे'.",
      explanationHi: "सही अर्थ: 'वे एक रेस्तरां में रात का खाना खा रहे थे।'",
      difficulty: "easy",
      skillTag: "TRANSLATION_EN_HI"
    },
    {
      id: "day28_ex_009",
      type: "multiple_choice",
      prompt: "Which sentence is in the negative past continuous form?",
      options: ["I wasn't listening to the radio.", "I didn't listened to the radio.", "I was not listen to the radio.", "I wasn't listen to the radio."],
      correctAnswer: "I wasn't listening to the radio.",
      explanationEn: "Negative: wasn't + Verb-ing ('listening').",
      explanationHi: "नकारात्मक रूप: 'wasn't listening'।",
      difficulty: "easy",
      skillTag: "PAST_CONTINUOUS_NEGATIVE"
    },
    {
      id: "day28_ex_010",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'We ______ (was / were) waiting for the train for over an hour.'",
      correctAnswer: "were",
      explanationEn: "Subject 'We' takes 'were'.",
      explanationHi: "'We' के साथ 'were' आएगा।",
      difficulty: "easy",
      skillTag: "SUBJECT_VERB_AGREEMENT"
    },
    {
      id: "day28_ex_011",
      type: "error_correction",
      prompt: "Correct the sentence: 'At 10 AM, I was knowing the truth.'",
      correctAnswer: "At 10 AM, I knew the truth.",
      explanationEn: "'Know' is a stative verb and cannot be used in continuous aspect. Use past simple 'knew'.",
      explanationHi: "'Know' एक Stative Verb है, इसका Continuous नहीं बनता। 'knew' सही है।",
      difficulty: "medium",
      skillTag: "STATIVE_VERBS"
    },
    {
      id: "day28_ex_012",
      type: "multiple_choice",
      prompt: "Select the correct past question: 'क्या तुम कल रात पढ़ाई कर रहे थे?'",
      options: ["Were you studying last night?", "Was you studying last night?", "Did you studying last night?", "Are you studying last night?"],
      correctAnswer: "Were you studying last night?",
      explanationEn: "Were + you + studying + last night?",
      explanationHi: "सही वाक्य: 'Were you studying last night?'",
      difficulty: "easy",
      skillTag: "PAST_CONTINUOUS_QUESTIONS"
    },
    {
      id: "day28_ex_013",
      type: "word_reorder",
      prompt: "Put in order: [a new recipe / Priya / cooking / was / in the kitchen]",
      options: ["Priya was cooking a new recipe in the kitchen.", "Priya cooking was in the kitchen a new recipe.", "Was Priya cooking in the kitchen a new recipe.", "A new recipe Priya was in the kitchen cooking."],
      correctAnswer: "Priya was cooking a new recipe in the kitchen.",
      explanationEn: "Subject + was + Verb-ing + Object + Place.",
      explanationHi: "सही क्रम: Priya was cooking a new recipe in the kitchen.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day28_ex_014",
      type: "error_correction",
      prompt: "Fix the error: 'The birds was singing in the garden.'",
      correctAnswer: "The birds were singing in the garden.",
      explanationEn: "Plural noun 'birds' requires 'were'.",
      explanationHi: "बहुवचन 'birds' के साथ 'were' आएगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day28_ex_015",
      type: "multiple_choice",
      prompt: "Choose the correct sentence: 'वह सो नहीं रहा था, वह काम कर रहा था':",
      options: ["He wasn't sleeping; he was working.", "He weren't sleeping; he were working.", "He not was sleeping; he was working.", "He didn't sleeping; he did working."],
      correctAnswer: "He wasn't sleeping; he was working.",
      explanationEn: "He wasn't sleeping; he was working.",
      explanationHi: "सही वाक्य: 'He wasn't sleeping; he was working.'",
      difficulty: "easy",
      skillTag: "PAST_CONTINUOUS"
    },
    {
      id: "day28_ex_016",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'Why ______ (was / were) they laughing during the presentation?'",
      correctAnswer: "were",
      explanationEn: "Subject 'they' takes 'were'.",
      explanationHi: "'They' के साथ 'were' आएगा।",
      difficulty: "easy",
      skillTag: "SUBJECT_VERB_AGREEMENT"
    },
    {
      id: "day28_ex_017",
      type: "hindi_to_english",
      prompt: "Translate: 'हम कल रात एक फ़िल्म देख रहे थे।'",
      options: ["We were watching a movie last night.", "We was watching a movie last night.", "We were watched a movie last night.", "We are watching a movie last night."],
      correctAnswer: "We were watching a movie last night.",
      explanationEn: "We were watching a movie last night.",
      explanationHi: "सही अनुवाद: 'We were watching a movie last night.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day28_ex_018",
      type: "multiple_choice",
      prompt: "How is 'was' pronounced in fluent unstressed sentences like 'I was running'?",
      options: ["Weak schwa /wəz/", "Strong /wɒz/", "Rhyming with 'gas'", "Silent"],
      correctAnswer: "Weak schwa /wəz/",
      explanationEn: "In unstressed affirmative positions, 'was' reduces to /wəz/.",
      explanationHi: "स्वाभाविक प्रवाह में 'was' को हल्का /wəz/ बोला जाता है।",
      difficulty: "medium",
      skillTag: "PHONETICS"
    },
    {
      id: "day28_ex_019",
      type: "error_correction",
      prompt: "Fix the error: 'I was not understanding the lesson.'",
      correctAnswer: "I didn't understand the lesson.",
      explanationEn: "'Understand' is a stative verb. Use past simple 'didn't understand'.",
      explanationHi: "'Understand' का Continuous नहीं बनता। 'didn't understand' सही है।",
      difficulty: "medium",
      skillTag: "STATIVE_VERBS"
    },
    {
      id: "day28_ex_020",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the correct form of (drive): 'He was ______ to the airport at 5 AM.'",
      correctAnswer: "driving",
      explanationEn: "Continuous form: 'driving'.",
      explanationHi: "'Drive' का -ing रूप 'driving' होगा।",
      difficulty: "easy",
      skillTag: "PAST_CONTINUOUS"
    },
    {
      id: "day28_ex_021",
      type: "multiple_choice",
      prompt: "Select the sentence that is grammatically ACCURATE:",
      options: ["The sun was shining brightly all morning.", "The sun were shining brightly all morning.", "The sun was shined brightly all morning.", "The sun did shining brightly all morning."],
      correctAnswer: "The sun was shining brightly all morning.",
      explanationEn: "Singular subject 'The sun' + was + shining.",
      explanationHi: "पहला वाक्य पूर्णतः शुद्ध है।",
      difficulty: "easy",
      skillTag: "PAST_CONTINUOUS"
    },
    {
      id: "day28_ex_022",
      type: "word_reorder",
      prompt: "Order: [was / the baby / peacefully / sleeping / in the crib]",
      options: ["The baby was sleeping peacefully in the crib.", "The baby peacefully was sleeping in the crib.", "Was the baby sleeping peacefully in the crib.", "In the crib the baby sleeping was peacefully."],
      correctAnswer: "The baby was sleeping peacefully in the crib.",
      explanationEn: "Subject + was + sleeping + adverb + place.",
      explanationHi: "सही क्रम: The baby was sleeping peacefully in the crib.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day28_ex_023",
      type: "error_correction",
      prompt: "Correct the sentence: 'We was walking in the park yesterday.'",
      correctAnswer: "We were walking in the park yesterday.",
      explanationEn: "'We' takes 'were'.",
      explanationHi: "'We' के साथ 'were' आएगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day28_ex_024",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'I ______ (was / were) writing an email when the internet disconnected.'",
      correctAnswer: "was",
      explanationEn: "Subject 'I' takes 'was'.",
      explanationHi: "'I' के साथ 'was' आएगा।",
      difficulty: "easy",
      skillTag: "SUBJECT_VERB_AGREEMENT"
    },
    {
      id: "day28_ex_025",
      type: "multiple_choice",
      prompt: "Choose the correct question to ask 'कल दोपहर 2 बजे आप कहाँ जा रहे थे?':",
      options: ["Where were you going at 2 PM yesterday?", "Where was you going at 2 PM yesterday?", "Where did you going at 2 PM yesterday?", "Where you were going at 2 PM yesterday?"],
      correctAnswer: "Where were you going at 2 PM yesterday?",
      explanationEn: "Where + were + you + going...?",
      explanationHi: "सही वाक्य: 'Where were you going at 2 PM yesterday?'",
      difficulty: "easy",
      skillTag: "PAST_CONTINUOUS_QUESTIONS"
    },
    {
      id: "day28_ex_026",
      type: "hindi_to_english",
      prompt: "Translate: 'वे चाय पी रहे थे और बातें कर रहे थे।'",
      options: ["They were drinking tea and talking.", "They was drinking tea and talking.", "They were drunk tea and talked.", "They drank tea and was talking."],
      correctAnswer: "They were drinking tea and talking.",
      explanationEn: "They were drinking tea and talking.",
      explanationHi: "सही अनुवाद: 'They were drinking tea and talking.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day28_ex_027",
      type: "error_correction",
      prompt: "Fix the error: 'What was you doing yesterday at four o'clock?'",
      correctAnswer: "What were you doing yesterday at four o'clock?",
      explanationEn: "Change 'was' to 'were' with 'you'.",
      explanationHi: "'You' के साथ 'was' बदलकर 'were' होगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day28_ex_028",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'The students ______ (was / were) listening carefully to the teacher.'",
      correctAnswer: "were",
      explanationEn: "Plural subject 'The students' takes 'were'.",
      explanationHi: "बहुवचन 'The students' के साथ 'were' आएगा।",
      difficulty: "easy",
      skillTag: "SUBJECT_VERB_AGREEMENT"
    },
    {
      id: "day28_ex_029",
      type: "multiple_choice",
      prompt: "Which action describes an ongoing state at a specific past point in time?",
      options: ["At 8 PM, I was having dinner.", "At 8 PM, I finished dinner.", "At 8 PM, I called my brother.", "At 8 PM, I locked the door."],
      correctAnswer: "At 8 PM, I was having dinner.",
      explanationEn: "'Was having dinner' indicates the meal was in progress at 8 PM.",
      explanationHi: "'Was having dinner' दर्शाता है कि 8 बजे खाना खाने की प्रक्रिया जारी थी।",
      difficulty: "medium",
      skillTag: "ASPECTUAL_SEMANTICS"
    },
    {
      id: "day28_ex_030",
      type: "word_reorder",
      prompt: "Reorder: [not / paying / was / attention / he / to the lecture]",
      options: ["He was not paying attention to the lecture.", "He not was paying attention to the lecture.", "Was he not paying to the lecture attention.", "Paying attention was not he to the lecture."],
      correctAnswer: "He was not paying attention to the lecture.",
      explanationEn: "He + was + not + paying + attention + to the lecture.",
      explanationHi: "सही क्रम: He was not paying attention to the lecture.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day28_ex_031",
      type: "dialogue_completion",
      prompt: "Complete the dialogue: A: 'I called you at 3 PM, but you didn't answer.' B: 'Sorry, I ______ (was / were) attending an important meeting.'",
      correctAnswer: "was",
      acceptableAlternatives: ["was"],
      explanationEn: "'I was attending'.",
      explanationHi: "'I was attending' आएगा।",
      difficulty: "easy",
      skillTag: "CONVERSATIONAL_USE"
    },
    {
      id: "day28_ex_032",
      type: "spoken_response",
      prompt: "Speak aloud: State what you and your family were doing at 8 PM yesterday using 'I was...' and 'They were...'.",
      modelResponse: "At 8 PM yesterday, I was studying English, and my parents were watching the news.",
      correctAnswer: "I was [verb-ing] and my family were [verb-ing].",
      explanationEn: "Use both singular 'was' and plural 'were' in past continuous.",
      explanationHi: "कल रात 8 बजे के बारे में 'I was...' और 'They were...' बोलें।",
      difficulty: "easy",
      skillTag: "SPEAKING"
    },
    {
      id: "day28_ex_033",
      type: "recall",
      prompt: "What auxiliary verb pairs with 'I', 'He', 'She', 'It' in Past Continuous?",
      correctAnswer: "was",
      acceptableAlternatives: ["Was"],
      explanationEn: "'Was'.",
      explanationHi: "'Was' सही उत्तर है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day28_ex_034",
      type: "recall",
      prompt: "What auxiliary verb pairs with 'You', 'We', 'They' in Past Continuous?",
      correctAnswer: "were",
      acceptableAlternatives: ["Were"],
      explanationEn: "'Were'.",
      explanationHi: "'Were' सही उत्तर है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day28_ex_035",
      type: "recall",
      prompt: "Can stative verbs like 'know' and 'want' be used in continuous form ('*I was wanting*')?",
      correctAnswer: "No",
      acceptableAlternatives: ["no", "never", "No, never"],
      explanationEn: "No, stative verbs are not used in continuous forms.",
      explanationHi: "नहीं, Stative Verbs का continuous रूप नहीं बनता।",
      difficulty: "easy",
      skillTag: "RECALL"
    }
  ],
  use: {
    situation: "Explaining to a friend why you couldn't pick up their phone calls yesterday afternoon.",
    dialogue: {
      id: "day28_dialogue_001",
      turns: [
        { speaker: "Alok", textEn: "Hey Rohit, I called you three times yesterday around 3 PM. Where were you?", textHi: "अरे रोहित, मैंने कल दोपहर लगभग 3 बजे तुम्हें तीन बार फ़ोन किया। तुम कहाँ थे?" },
        { speaker: "Rohit", textEn: "I'm so sorry, Alok! At 3 PM, I was driving on the highway and it was raining heavily.", textHi: "मुझे बहुत अफ़सोस है, आलोक! दोपहर 3 बजे मैं हाईवे पर गाड़ी चला रहा था और बहुत तेज़ बारिश हो रही थी।" },
        { speaker: "Alok", textEn: "Ah, I understand. Driving in heavy rain requires full concentration.", textHi: "हाँ, मैं समझता हूँ। तेज़ बारिश में गाड़ी चलाने के लिए पूरा ध्यान चाहिए।" },
        { speaker: "Rohit", textEn: "Exactly. My phone was ringing in my bag, but I was focusing on the road.", textHi: "बिल्कुल। मेरा फ़ोन बैग में बज रहा था, लेकिन मेरा ध्यान सड़क पर था।" },
        { speaker: "Alok", textEn: "No worries at all. What were you planning for this weekend?", textHi: "कोई बात नहीं। इस सप्ताहांत के लिए तुम्हारी क्या योजना थी?" }
      ]
    },
    speakingTask: {
      promptEn: "Describe what 3 different people in your home or office were doing yesterday at 6 PM using 'was/were + Verb-ing'.",
      promptHi: "कल शाम 6 बजे आपके घर या दफ़्तर में 3 लोग क्या कर रहे थे, इसका वर्णन 'was/were + V-ing' से करें।"
    }
  },
  assess: [
    { id: "day28_assess_001", question: "What is the difference in meaning between 'I cooked dinner at 8 PM' and 'I was cooking dinner at 8 PM'?", answer: "'I cooked dinner at 8 PM' means the cooking action started or completed as a whole event at 8 PM. 'I was cooking dinner at 8 PM' means the cooking was already in progress before 8 PM and continuing at that moment.", skill: "Aspectual Discrimination" },
    { id: "day28_assess_002", question: "Which subjects take 'was' and which subjects take 'were'?", answer: "'Was' is used with I, he, she, it, and singular nouns. 'Were' is used with you, we, they, and plural nouns.", skill: "Subject Concord" },
    { id: "day28_assess_003", question: "Why cannot we say '*I was knowing the address*'?", answer: "'Know' is a stative verb representing a cognitive state rather than a dynamic action; stative verbs do not take continuous aspect.", skill: "Stative Verb Constraint" }
  ],
  review: {
    spacedRepetitionTag: "PAST_CONTINUOUS_BASICS",
    recommendedIntervalDays: [1, 3, 7, 14]
  }
};

// Day 29: Past Simple vs. Past Continuous with 'When' & 'While' (Interrupted Actions)
const day29 = {
  dayNumber: 29,
  id: "day_29",
  titleEn: "Past Simple vs. Past Continuous with 'When' & 'While' (Interrupted Actions)",
  titleHi: "Past Simple बनाम Past Continuous: 'When' और 'While' के साथ बाधित कार्य",
  cefr: "A1.2",
  estMinutes: 30,
  prerequisites: "Day 21–28 (Past Simple & Past Continuous Full Paradigm)",
  objectivesEn: [
    "Differentiate background ongoing actions (Past Continuous) from sudden interrupting actions (Past Simple).",
    "Master the precise placement of subordinating conjunctions: 'while + Past Continuous' vs. 'when + Past Simple'.",
    "Construct dual-action complex sentences (e.g., 'While I was cooking, the phone rang' / 'I was sleeping when the alarm went off').",
    "Describe parallel past activities occurring simultaneously using 'While + Continuous, Continuous'."
  ],
  objectivesHi: [
    "लंबे समय से चल रहे पृष्ठभूमि कार्य (Past Continuous) और बीच में अचानक घटित होने वाले बाधित कार्य (Past Simple) में अंतर करना।",
    "संयोजकों का सटीक प्रयोग: 'while + Past Continuous' (के दौरान) और 'when + Past Simple' (जब)।",
    "दोहरी क्रिया वाले जटिल वाक्य बनाना (जैसे: 'जब मैं खाना बना रहा था, तब फ़ोन बजा')।",
    "एक ही समय पर साथ-साथ चल रहे दो समानांतर कार्यों का वर्णन करना ('While he was studying, she was listening to music')।"
  ],
  teach: {
    hindiExplanation: "जब भूतकाल में कोई लंबा काम चल रहा था और उसी बीच अचानक कोई दूसरी छोटी घटना घट गई (बाधित कार्य / Interrupted Action), तो हम दोनों कालों को मिलाते हैं: 1. जो लंबा काम पहले से चल रहा था (Background Activity) ➔ Past Continuous (was/were + V-ing)। 2. जो घटना बीच में अचानक घटी (Short Interrupting Event) ➔ Past Simple (V2)। इनके साथ 'When' और 'While' का नियम बहुत आसान है: 'While' के तुरंत बाद आमतौर पर continuous आता है ('While I was cooking...'), और 'When' के तुरंत बाद sudden action (V2) आता है ('...when the phone rang')। अगर दोनों काम साथ-साथ चल रहे थे, तो दोनों में continuous आता है ('While I was reading, he was writing')।",
    englishExplanation: "When narrating complex past scenarios, English pairs the Past Continuous (for the longer, ongoing background activity) with the Past Simple (for the shorter, punctual event that interrupts it). Subordinating Rules: 'While' introduces the continuous background action ('While + Past Continuous, [Past Simple]'). 'When' typically introduces the sudden interrupting action ('[Past Continuous] + when + [Past Simple]'). For two ongoing actions occurring simultaneously in parallel, 'While' can govern two continuous clauses ('While I was cooking, my sister was setting the table').",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "The Interrupted Action Rule (Long vs. Short Action)",
        description: "Long Background Action ➔ Past Continuous (was/were + V-ing) | Short Interrupting Event ➔ Past Simple (V2). Example: 'I was taking a shower (long) when the doorbell rang (short).'",
        register: "Aspectual Hierarchy"
      },
      {
        ruleNumber: 2,
        title: "The 'While' Subordination Pattern",
        description: "While + [Past Continuous Clause], [Past Simple Clause]. Example: 'While they were driving home, it started to rain.' 'While' means 'during the time that'.",
        register: "Subordinate Conjunction Syntax"
      },
      {
        ruleNumber: 3,
        title: "The 'When' Subordination Pattern",
        description: "[Past Continuous Clause] + when + [Past Simple Clause]. Example: 'She was crossing the street when she dropped her phone.'",
        register: "Temporal Subordination"
      },
      {
        ruleNumber: 4,
        title: "Simultaneous Parallel Past Actions",
        description: "When two activities were in progress at the exact same time without interrupting each other: 'While mother was cooking, father was washing the dishes.'",
        register: "Parallel Aspect"
      }
    ],
    formulaTable: [
      { subjectGroup: "Interruption Pattern 1 (While)", formula: "While + [Subject + was/were + V-ing], + [Subject + V2]", exampleEn: "While I was studying, the electricity went off.", meaningHi: "जब मैं पढ़ाई कर रहा था, तब बिजली चली गई।" },
      { subjectGroup: "Interruption Pattern 2 (When)", formula: "[Subject + was/were + V-ing] + when + [Subject + V2]", exampleEn: "I was sleeping when the alarm went off.", meaningHi: "मैं सो रहा था जब अलार्म बजा।" },
      { subjectGroup: "Parallel Actions Pattern", formula: "While + [Subject 1 + was/were + V-ing], + [Subject 2 + was/were + V-ing]", exampleEn: "While Ravi was driving, Neha was navigating.", meaningHi: "जब रवि गाड़ी चला रहा था, नेहा रास्ता देख रही थी।" },
      { subjectGroup: "Consecutive Actions Contrast", formula: "[Subject + V2], then + [Subject + V2]", exampleEn: "When the phone rang, I answered it.", meaningHi: "जब फ़ोन बजा, मैंने उसे उठाया। (एक के बाद दूसरा)" }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Using Past Simple for both actions ('*When the phone rang, I cooked*') or misplacing 'while' and 'when'",
      hindiPattern: "हिन्दी में 'जब फ़ोन बजा मैं खाना बना रहा था' को शिक्षार्थी कभी-कभी दोनों जगह Past Simple लगा देते हैं, जिससे अर्थ बदल जाता है कि फ़ोन बजने के बाद खाना बनाना शुरू किया।",
      potentialInterference: "Saying '*While the phone rang, I was cooking*' or '*When I cooked, the phone rang*'.",
      explanation: "'While' marks the ongoing duration; 'when' marks the specific interrupting point in time.",
      naturalSolution: "Say 'While I was cooking, the phone rang' OR 'I was cooking when the phone rang'."
    }
  },
  learn: {
    vocabulary: [
      { id: "day29_vocab_001", word: "Interrupt", pos: "Verb", ipa: "/ˌɪn.təˈrʌpt/", meaningHi: "बाधा डालना / बीच में टोकना", exampleEn: "A loud knock interrupted our meeting.", exampleHi: "एक तेज़ दस्तक ने हमारी बैठक में बाधा डाली।" },
      { id: "day29_vocab_002", word: "Ring", pos: "Verb", ipa: "/rɪŋ/", meaningHi: "बजना (घंटी/फ़ोन)", exampleEn: "The telephone rang loudly three times.", exampleHi: "टेलीफ़ोन तीन बार तेज़ी से बजा।" },
      { id: "day29_vocab_003", word: "Drop", pos: "Verb", ipa: "/drɒp/", meaningHi: "गिराना / गिर जाना", exampleEn: "She dropped her purse while getting out of the taxi.", exampleHi: "टैक्सी से बाहर निकलते समय उसका पर्स गिर गया।" },
      { id: "day29_vocab_004", word: "Cross", pos: "Verb", ipa: "/krɒs/", meaningHi: "पार करना (सड़क/पुल)", exampleEn: "He saw an old friend while crossing the road.", exampleHi: "सड़क पार करते समय उसने एक पुराने दोस्त को देखा।" },
      { id: "day29_vocab_005", word: "Burn", pos: "Verb", ipa: "/bɜːn/", meaningHi: "जलना / जल जाना", exampleEn: "I burned the toast while I was answering the door.", exampleHi: "जब मैं दरवाज़ा खोलने गया, तब टोस्ट जल गया।" },
      { id: "day29_vocab_006", word: "Notice", pos: "Verb", ipa: "/ˈnəʊ.tɪs/", meaningHi: "गौर करना / ध्यान में आना", exampleEn: "I noticed a crack while I was cleaning the window.", exampleHi: "खिड़की साफ़ करते समय मुझे एक दरार दिखाई दी।" },
      { id: "day29_vocab_007", word: "Slip", pos: "Verb", ipa: "/slɪp/", meaningHi: "फिसलना", exampleEn: "He slipped on the wet floor while carrying the boxes.", exampleHi: "डिब्बे ले जाते समय वह गीले फ़र्श पर फिसल गया।" },
      { id: "day29_vocab_008", word: "Knock", pos: "Verb/Noun", ipa: "/nɒk/", meaningHi: "खटखटाना / दस्तक", exampleEn: "Someone knocked on the door while we were sleeping.", exampleHi: "जब हम सो रहे थे तब किसी ने दरवाज़ा खटखटाया।" },
      { id: "day29_vocab_009", word: "Break down", pos: "Phrasal Verb", ipa: "/breɪk daʊn/", meaningHi: "खराब होना (वाहन/मशीन)", exampleEn: "The car broke down while we were driving to Pune.", exampleHi: "जब हम पुणे जा रहे थे तब कार खराब हो गई।" },
      { id: "day29_vocab_010", word: "Arrive", pos: "Verb", ipa: "/əˈraɪv/", meaningHi: "पहुँचना", exampleEn: "The guests arrived while we were decorating the hall.", exampleHi: "मेहमान तब पहुँचे जब हम हॉल सजा रहे थे।" }
    ],
    phrases: [
      { id: "day29_phrase_001", phrase: "While I was walking home", register: "Narrative clause", meaningHi: "जब मैं घर पैदल जा रहा था" },
      { id: "day29_phrase_002", phrase: "When the power went off", register: "Temporal clause", meaningHi: "जब बिजली चली गई" },
      { id: "day29_phrase_003", phrase: "The phone rang suddenly.", register: "Narrative", meaningHi: "फ़ोन अचानक बज उठा।" },
      { id: "day29_phrase_004", phrase: "While you were away", register: "Conversational", meaningHi: "जब आप बाहर (अनुपस्थित) थे" },
      { id: "day29_phrase_005", phrase: "Just as I was leaving", register: "Idiomatic timing", meaningHi: "ठीक जब मैं निकल ही रहा था" },
      { id: "day29_phrase_006", phrase: "All of a sudden", register: "Narrative marker", meaningHi: "अचानक से" }
    ]
  },
  examples: [
    { id: "day29_example_001", en: "While I was cooking, the doorbell rang.", hi: "जब मैं खाना बना रहा था, तब दरवाज़े की घंटी बजी।" },
    { id: "day29_example_002", en: "She was walking to the metro when she lost her wallet.", hi: "वह मेट्रो की ओर जा रही थी जब उसका बटुआ खो गया।" },
    { id: "day29_example_003", en: "The electricity went off while we were watching the movie.", hi: "जब हम फ़िल्म देख रहे थे तब बिजली चली गई।" },
    { id: "day29_example_004", en: "He was driving home when the tyre punctured.", hi: "वह घर की ओर गाड़ी चला रहा था जब टायर पंक्चर हो गया।" },
    { id: "day29_example_005", en: "While Rohan was studying, his sister was listening to music.", hi: "जब रोहन पढ़ाई कर रहा था, उसकी बहन संगीत सुन रही थी।" },
    { id: "day29_example_006", en: "I burned my finger while I was ironing the shirt.", hi: "शर्ट प्रेस करते समय मेरी उंगली जल गई।" },
    { id: "day29_example_007", en: "We were having dinner when the guests arrived unexpectedly.", hi: "हम रात का खाना खा रहे थे जब मेहमान अचानक आ पहुँचे।" },
    { id: "day29_example_008", en: "While he was waiting for the train, he read the newspaper.", hi: "जब वह ट्रेन का इंतज़ार कर रहा था, उसने अख़बार पढ़ा।" },
    { id: "day29_example_009", en: "She slipped and fell while she was running for the bus.", hi: "बस पकड़ने के लिए दौड़ते समय वह फिसल कर गिर गई।" },
    { id: "day29_example_010", en: "The teacher entered the classroom when the students were shouting.", hi: "जब छात्र चिल्ला रहे थे तब शिक्षक ने कक्षा में प्रवेश किया।" },
    { id: "day29_example_011", en: "What were you doing when the earthquake happened?", hi: "जब भूकंप आया तब आप क्या कर रहे थे?" },
    { id: "day29_example_012", en: "While I was cleaning the cupboard, I found my old school photos.", hi: "जब मैं अलमारी साफ़ कर रहा था, मुझे अपने स्कूल की पुरानी तस्वीरें मिलीं।" }
  ],
  pronunciation: {
    targetSounds: ["Stress contrast: Ongoing background verb receives continuous rhythm, interrupting verb receives sharp peak stress", "Pause at the comma boundary between clauses"],
    traps: "Do not rush through the clause boundary. Insert a slight pitch-reset after the introductory clause: 'While I was COOK-ing, [pause] the phone RANG.'",
    drills: [
      { id: "day29_audio_001", voiceRole: "TEACHER", audioType: "drill", text: "While I was studying, the lights went out." },
      { id: "day29_audio_002", voiceRole: "TEACHER", audioType: "drill", text: "I was sleeping when the alarm rang." },
      { id: "day29_audio_003", voiceRole: "TEACHER", audioType: "drill", text: "While she was cooking, he was washing the dishes." },
      { id: "day29_audio_004", voiceRole: "TEACHER", audioType: "drill", text: "What were you doing when I called you?" }
    ]
  },
  practice: [
    {
      id: "day29_ex_001",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'जब मैं पढ़ाई कर रहा था, तब बिजली चली गई':",
      options: ["While I was studying, the electricity went off.", "While I studied, the electricity was going off.", "When I was study, the electricity went off.", "While I was studying, the electricity was going off."],
      correctAnswer: "While I was studying, the electricity went off.",
      explanationEn: "Ongoing action: 'was studying' + Interrupting action: 'went off'.",
      explanationHi: "लंबा कार्य 'was studying' और बीच की घटना 'went off' है।",
      difficulty: "easy",
      skillTag: "INTERRUPTED_ACTIONS"
    },
    {
      id: "day29_ex_002",
      type: "multiple_choice",
      prompt: "Which conjunction usually introduces the ongoing continuous action?",
      options: ["While", "When", "Until", "Before"],
      correctAnswer: "While",
      explanationEn: "'While' is standardly paired with continuous aspect ('While I was driving').",
      explanationHi: "'While' के साथ Continuous Tense आता है।",
      difficulty: "easy",
      skillTag: "TEMPORAL_CONNECTORS"
    },
    {
      id: "day29_ex_003",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the correct past form of (ring): 'I was having dinner when the phone ______.'",
      correctAnswer: "rang",
      explanationEn: "Use Past Simple 'rang' (V2) for the interrupting event.",
      explanationHi: "बीच में घटने वाली क्रिया के लिए V2 'rang' आएगा।",
      difficulty: "easy",
      skillTag: "INTERRUPTED_ACTIONS"
    },
    {
      id: "day29_ex_004",
      type: "fill_in_blank",
      prompt: "Fill in the blank with (When / While): '______ I was walking in the park, I met an old school friend.'",
      correctAnswer: "While",
      acceptableAlternatives: ["while", "When", "when"],
      explanationEn: "'While' introduces the continuous background action ('was walking').",
      explanationHi: "जारी कार्य के लिए 'While' सबसे उपयुक्त है।",
      difficulty: "easy",
      skillTag: "TEMPORAL_CONNECTORS"
    },
    {
      id: "day29_ex_005",
      type: "word_reorder",
      prompt: "Arrange into a correct sentence: [the doorbell / was cooking / while / she / rang]",
      options: ["While she was cooking, the doorbell rang.", "She was cooking while the doorbell rang.", "While the doorbell rang, she was cooking.", "Rang the doorbell while she was cooking."],
      correctAnswer: "While she was cooking, the doorbell rang.",
      explanationEn: "While + she was cooking (long), the doorbell rang (short).",
      explanationHi: "सही क्रम: While she was cooking, the doorbell rang.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day29_ex_006",
      type: "error_correction",
      prompt: "Identify and correct the error: 'I was sleeping when the alarm was ringing.'",
      correctAnswer: "I was sleeping when the alarm rang.",
      explanationEn: "'Was ringing' should be Past Simple 'rang' for the sudden event after 'when'.",
      explanationHi: "'When' के बाद अचानक घटी घटना के लिए 'rang' आएगा।",
      difficulty: "medium",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day29_ex_007",
      type: "hindi_to_english",
      prompt: "Translate into English: 'जब वह गाड़ी चला रहा था, तब उसका फ़ोन बजा।'",
      options: ["While he was driving, his phone rang.", "When he was driving, his phone was ringing.", "While he drove, his phone rang.", "He was driving when his phone was ringing."],
      correctAnswer: "While he was driving, his phone rang.",
      explanationEn: "While he was driving, his phone rang.",
      explanationHi: "सही अनुवाद: 'While he was driving, his phone rang.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day29_ex_008",
      type: "english_to_hindi",
      prompt: "What is the Hindi meaning of: 'The car broke down while we were driving to Agra'?",
      options: ["जब हम आगरा जा रहे थे तब कार खराब हो गई।", "कार खराब होने के बाद हम आगरा गए।", "हम आगरा पहुँचे और कार खराब हो गई।", "क्या आगरा जाते समय कार खराब हुई थी?"],
      correctAnswer: "जब हम आगरा जा रहे थे तब कार खराब हो गई।",
      explanationEn: "'The car broke down while we were driving' means 'जब हम आगरा जा रहे थे तब कार खराब हो गई'.",
      explanationHi: "सही अर्थ: 'जब हम आगरा जा रहे थे तब कार खराब हो गई।'",
      difficulty: "easy",
      skillTag: "TRANSLATION_EN_HI"
    },
    {
      id: "day29_ex_009",
      type: "multiple_choice",
      prompt: "Which sentence describes TWO simultaneous parallel actions?",
      options: ["While I was cooking, my brother was setting the table.", "While I was cooking, the doorbell rang.", "When I cooked, the doorbell rang.", "I cooked dinner and then set the table."],
      correctAnswer: "While I was cooking, my brother was setting the table.",
      explanationEn: "Both actions use Past Continuous ('was cooking' / 'was setting') to show parallel progress.",
      explanationHi: "दोनों तरफ Continuous Tense होने से दोनों कार्य एक साथ चलने का बोध होता है।",
      difficulty: "medium",
      skillTag: "PARALLEL_ACTIONS"
    },
    {
      id: "day29_ex_010",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the correct past form of (drop): 'She ______ her keys while she was opening her bag.'",
      correctAnswer: "dropped",
      explanationEn: "Past Simple 'dropped' (short interrupting action).",
      explanationHi: "अचानक घटी घटना के लिए 'dropped' आएगा।",
      difficulty: "easy",
      skillTag: "INTERRUPTED_ACTIONS"
    },
    {
      id: "day29_ex_011",
      type: "error_correction",
      prompt: "Correct the sentence: 'While the phone rang, I was taking a bath.'",
      correctAnswer: "While I was taking a bath, the phone rang.",
      explanationEn: "'While' must attach to the continuous background action ('taking a bath').",
      explanationHi: "'While' लंबे समय तक चलने वाले कार्य ('taking a bath') के साथ आता है।",
      difficulty: "medium",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day29_ex_012",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to ask 'जब भूकंप आया तब तुम क्या कर रहे थे?':",
      options: ["What were you doing when the earthquake happened?", "What did you do when the earthquake was happening?", "What was you doing when the earthquake happened?", "What were you do when the earthquake happened?"],
      correctAnswer: "What were you doing when the earthquake happened?",
      explanationEn: "What were you doing (ongoing) when the earthquake happened (event)?",
      explanationHi: "सही वाक्य: 'What were you doing when the earthquake happened?'",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS"
    },
    {
      id: "day29_ex_013",
      type: "word_reorder",
      prompt: "Order: [when / was crossing / the road / he slipped / he]",
      options: ["He was crossing the road when he slipped.", "He slipped when was crossing the road he.", "When he was crossing the road he slipped.", "He crossing the road was when he slipped."],
      correctAnswer: "He was crossing the road when he slipped.",
      explanationEn: "Ongoing (was crossing) + when + sudden event (slipped).",
      explanationHi: "सही क्रम: He was crossing the road when he slipped.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day29_ex_014",
      type: "error_correction",
      prompt: "Fix the error: 'We was watching TV when someone knocked on the door.'",
      correctAnswer: "We were watching TV when someone knocked on the door.",
      explanationEn: "Change 'was' to 'were' with 'We'.",
      explanationHi: "'We' के साथ 'were' आएगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day29_ex_015",
      type: "multiple_choice",
      prompt: "Choose the correct sentence: 'सड़क पार करते समय उसने एक पर्स पाया':",
      options: ["While he was crossing the street, he found a purse.", "When he was crossing the street, he was finding a purse.", "While he crossed the street, he found a purse.", "He found a purse when he crossed the street continuous."],
      correctAnswer: "While he was crossing the street, he found a purse.",
      explanationEn: "While + was crossing (long) + found (short).",
      explanationHi: "सही वाक्य: 'While he was crossing the street, he found a purse.'",
      difficulty: "easy",
      skillTag: "INTERRUPTED_ACTIONS"
    },
    {
      id: "day29_ex_016",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the correct form of (burn): 'I was ironing my shirt when I ______ my finger.'",
      correctAnswer: "burned",
      acceptableAlternatives: ["burnt"],
      explanationEn: "Past Simple 'burned' or 'burnt'.",
      explanationHi: "अचानक घटी घटना के लिए 'burned' या 'burnt' आएगा।",
      difficulty: "easy",
      skillTag: "INTERRUPTED_ACTIONS"
    },
    {
      id: "day29_ex_017",
      type: "hindi_to_english",
      prompt: "Translate: 'जब शिक्षक कक्षा में आए, छात्र बातें कर रहे थे।'",
      options: ["When the teacher entered the classroom, the students were talking.", "When the teacher was entering the classroom, the students talked.", "While the teacher entered, the students were talk.", "The teacher entered when the students talked."],
      correctAnswer: "When the teacher entered the classroom, the students were talking.",
      explanationEn: "When the teacher entered (punctual), the students were talking (ongoing).",
      explanationHi: "सही अनुवाद: 'When the teacher entered the classroom, the students were talking.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day29_ex_018",
      type: "multiple_choice",
      prompt: "Which pair shows the CORRECT contrast between ongoing and completed action?",
      options: ["I was reading (ongoing) / The light went out (interruption)", "I read (ongoing) / The light was going out (interruption)", "I was read (ongoing) / The light gone out (interruption)", "I were reading (ongoing) / The light went out (interruption)"],
      correctAnswer: "I was reading (ongoing) / The light went out (interruption)",
      explanationEn: "'Was reading' is ongoing; 'went out' is punctual interruption.",
      explanationHi: "'Was reading' जारी कार्य और 'went out' बीच की घटना है।",
      difficulty: "medium",
      skillTag: "CONTRASTIVE_ASPECT"
    },
    {
      id: "day29_ex_019",
      type: "error_correction",
      prompt: "Fix the error: 'While I cooked, the phone was ringing.'",
      correctAnswer: "While I was cooking, the phone rang.",
      explanationEn: "Continuous on background action ('was cooking'), Past Simple on sudden event ('rang').",
      explanationHi: "लंबे कार्य के लिए 'was cooking' और बजने के लिए 'rang' आएगा।",
      difficulty: "medium",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day29_ex_020",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the correct form of (watch): 'The power went off while we were ______ the cricket match.'",
      correctAnswer: "watching",
      explanationEn: "'Were watching' for ongoing activity.",
      explanationHi: "'Were' के बाद 'watching' आएगा।",
      difficulty: "easy",
      skillTag: "PAST_CONTINUOUS"
    },
    {
      id: "day29_ex_021",
      type: "multiple_choice",
      prompt: "Select the sentence with accurate grammatical subordination:",
      options: ["She fell asleep while she was reading the novel.", "She was falling asleep while she read the novel.", "She fell asleep while she reads the novel.", "She was fell asleep when she read the novel."],
      correctAnswer: "She fell asleep while she was reading the novel.",
      explanationEn: "Punctual event (fell asleep) during ongoing process (was reading).",
      explanationHi: "पहला वाक्य पूर्णतः शुद्ध है।",
      difficulty: "easy",
      skillTag: "INTERRUPTED_ACTIONS"
    },
    {
      id: "day29_ex_022",
      type: "word_reorder",
      prompt: "Order: [the guests / arrived / we were / having dinner / when]",
      options: ["We were having dinner when the guests arrived.", "When the guests arrived we having dinner were.", "We having dinner were when the guests arrived.", "The guests arrived when having dinner we were."],
      correctAnswer: "We were having dinner when the guests arrived.",
      explanationEn: "Ongoing (were having dinner) + when + sudden event (guests arrived).",
      explanationHi: "सही क्रम: We were having dinner when the guests arrived.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day29_ex_023",
      type: "error_correction",
      prompt: "Correct the sentence: 'I was finding an old coin while I cleaned the garden.'",
      correctAnswer: "I found an old coin while I was cleaning the garden.",
      explanationEn: "'Find' is punctual ('found'); 'clean' is ongoing ('was cleaning').",
      explanationHi: "सिक्का मिलना अचानक हुआ ('found') और सफाई जारी थी ('was cleaning')।",
      difficulty: "medium",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day29_ex_024",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'It started to rain while we ______ (was / were) walking home.'",
      correctAnswer: "were",
      explanationEn: "Subject 'we' takes 'were'.",
      explanationHi: "'We' के साथ 'were' आएगा।",
      difficulty: "easy",
      skillTag: "SUBJECT_VERB_AGREEMENT"
    },
    {
      id: "day29_ex_025",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'जब मैं नहा रहा था, तब किसी ने दरवाज़ा खटखटाया':",
      options: ["While I was taking a shower, someone knocked on the door.", "When I took a shower, someone was knocking on the door.", "While I took a shower, someone knocked on the door.", "I was taking a shower while someone knocked on the door."],
      correctAnswer: "While I was taking a shower, someone knocked on the door.",
      explanationEn: "While + was taking a shower, someone knocked.",
      explanationHi: "सही वाक्य: 'While I was taking a shower, someone knocked on the door.'",
      difficulty: "easy",
      skillTag: "INTERRUPTED_ACTIONS"
    },
    {
      id: "day29_ex_026",
      type: "hindi_to_english",
      prompt: "Translate: 'जब मैं अलमारी साफ़ कर रहा था, मुझे मेरी पुरानी घड़ी मिली।'",
      options: ["While I was cleaning the cupboard, I found my old watch.", "When I cleaned the cupboard, I was finding my old watch.", "While I cleaned the cupboard, I found my old watch.", "I was cleaning the cupboard when I was finding my old watch."],
      correctAnswer: "While I was cleaning the cupboard, I found my old watch.",
      explanationEn: "While I was cleaning the cupboard, I found my old watch.",
      explanationHi: "सही अनुवाद: 'While I was cleaning the cupboard, I found my old watch.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day29_ex_027",
      type: "error_correction",
      prompt: "Fix the error: 'When she was cooking, she was cutting her finger.'",
      correctAnswer: "While she was cooking, she cut her finger.",
      explanationEn: "Cutting a finger is an instant event ('cut', V2), not continuous.",
      explanationHi: "उंगली कटना एक क्षणिक घटना है ('cut'), इसका continuous नहीं होगा।",
      difficulty: "medium",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day29_ex_028",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the correct form of (see): 'While I was waiting at the bus stop, I ______ (see) an accident.'",
      correctAnswer: "saw",
      explanationEn: "Past Simple 'saw' for the punctual event.",
      explanationHi: "घटना देखने के लिए V2 'saw' आएगा।",
      difficulty: "easy",
      skillTag: "INTERRUPTED_ACTIONS"
    },
    {
      id: "day29_ex_029",
      type: "multiple_choice",
      prompt: "What is the difference between 'When the phone rang, I answered it' and 'When the phone rang, I was having dinner'?",
      options: ["The first is consecutive (one after another); the second is an interrupted ongoing activity.", "Both mean the exact same thing.", "The first is ongoing; the second is completed.", "The second is in the future tense."],
      correctAnswer: "The first is consecutive (one after another); the second is an interrupted ongoing activity.",
      explanationEn: "'Answered it' happened after the ring; 'was having dinner' was already happening when the ring occurred.",
      explanationHi: "पहला वाक्य एक के बाद दूसरी क्रिया और दूसरा वाक्य पहले से जारी कार्य को दर्शाता है।",
      difficulty: "medium",
      skillTag: "ASPECTUAL_DISCRIMINATION"
    },
    {
      id: "day29_ex_030",
      type: "word_reorder",
      prompt: "Reorder: [her bag / she was getting / dropped / while / she / off the train]",
      options: ["She dropped her bag while she was getting off the train.", "While dropped she her bag she was getting off the train.", "She was getting off the train she dropped her bag while.", "Her bag she dropped while getting was off the train she."],
      correctAnswer: "She dropped her bag while she was getting off the train.",
      explanationEn: "Punctual event (dropped her bag) + while + ongoing (was getting off).",
      explanationHi: "सही क्रम: She dropped her bag while she was getting off the train.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day29_ex_031",
      type: "dialogue_completion",
      prompt: "Complete the dialogue: A: 'How did you hurt your knee?' B: 'I slipped while I ______ (was / were) running down the stairs.'",
      correctAnswer: "was",
      acceptableAlternatives: ["was"],
      explanationEn: "'I was running'.",
      explanationHi: "'I was running' आएगा।",
      difficulty: "easy",
      skillTag: "CONVERSATIONAL_USE"
    },
    {
      id: "day29_ex_032",
      type: "spoken_response",
      prompt: "Speak aloud: Describe an interrupted situation that happened to you using 'While I was..., [event happened]'.",
      modelResponse: "While I was studying for my exam, the power suddenly went off.",
      correctAnswer: "While I was [ongoing action], [sudden past action].",
      explanationEn: "Combine Past Continuous and Past Simple with 'While'.",
      explanationHi: "'While I was..., [घटना घटी]' बोलकर एक वाक्य बनाएं।",
      difficulty: "easy",
      skillTag: "SPEAKING"
    },
    {
      id: "day29_ex_033",
      type: "recall",
      prompt: "Which tense is used for the long background action that was already in progress?",
      correctAnswer: "Past Continuous",
      acceptableAlternatives: ["past continuous", "Past Progressive", "past progressive"],
      explanationEn: "Past Continuous (was/were + V-ing).",
      explanationHi: "जारी रहने वाले कार्य के लिए Past Continuous का प्रयोग होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day29_ex_034",
      type: "recall",
      prompt: "Which tense is used for the short sudden event that interrupts the ongoing action?",
      correctAnswer: "Past Simple",
      acceptableAlternatives: ["past simple", "Simple Past", "simple past"],
      explanationEn: "Past Simple (V2).",
      explanationHi: "अचानक बाधा डालने वाली घटना के लिए Past Simple (V2) का प्रयोग होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day29_ex_035",
      type: "recall",
      prompt: "Which word is typically followed by the continuous clause: 'While' or 'When'?",
      correctAnswer: "While",
      acceptableAlternatives: ["while"],
      explanationEn: "'While' is typically followed by the continuous clause.",
      explanationHi: "'While' के बाद continuous clause आता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    }
  ],
  use: {
    situation: "Reporting a minor kitchen accident to a doctor or family member during an evening catch-up.",
    dialogue: {
      id: "day29_dialogue_001",
      turns: [
        { speaker: "Doctor", textEn: "Good evening, Mr. Sharma. How did you injure your left hand?", textHi: "शुभ संध्या, श्री शर्मा। आपके बाएँ हाथ में चोट कैसे लगी?" },
        { speaker: "Mr. Sharma", textEn: "Good evening, doctor. While I was chopping onions for dinner, the knife slipped.", textHi: "शुभ संध्या, डॉक्टर। जब मैं डिनर के लिए प्याज काट रहा था, तब चाकू फिसल गया।" },
        { speaker: "Doctor", textEn: "I see. Were you distracted by something?", textHi: "अच्छा। क्या आपका ध्यान कहीं और भटक गया था?" },
        { speaker: "Mr. Sharma", textEn: "Yes, I was listening to the evening news on TV when the anchor shouted breaking news. That startled me.", textHi: "हाँ, मैं टीवी पर शाम की ख़बरें सुन रहा था जब एंकर ने ब्रेकिंग न्यूज़ की घोषणा की। इससे मैं चौंक गया।" },
        { speaker: "Doctor", textEn: "Let me clean and dress the wound. It is a minor cut and will heal in two days.", textHi: "मैं घाव को साफ़ करके पट्टी बाँध देता हूँ। यह एक छोटा सा कट है और दो दिनों में ठीक हो जाएगा।" }
      ]
    },
    speakingTask: {
      promptEn: "Narrate an incident where an activity was interrupted using 'While I was [action], [interruption happened]'.",
      promptHi: "'While I was [जारी कार्य], [बाधा घटी]' का उपयोग करके किसी घटना का वर्णन करें।"
    }
  },
  assess: [
    { id: "day29_assess_001", question: "How do you decide whether to use Past Simple or Past Continuous when two actions occur in the past?", answer: "Use Past Continuous (was/were + V-ing) for the longer, background ongoing action, and Past Simple (V2) for the shorter, punctual event that interrupts it.", skill: "Aspectual Hierarchy" },
    { id: "day29_assess_002", question: "Explain the functional difference between 'While I was cooking, the phone rang' and 'While I was cooking, my sister was baking'.", answer: "The first represents an interrupted action (Continuous + Simple); the second represents two simultaneous parallel actions occurring at the same time (Continuous + Continuous).", skill: "Subordination Precision" },
    { id: "day29_assess_003", question: "Why is 'While the phone rang, I was cooking' unidiomatic?", answer: "'While' marks duration and should introduce the continuous action ('While I was cooking'), whereas 'when' marks the specific point in time when the short event occurred ('when the phone rang').", skill: "Conjunction Syntax" }
  ],
  review: {
    spacedRepetitionTag: "PAST_SIMPLE_VS_CONTINUOUS_WHEN_WHILE",
    recommendedIntervalDays: [1, 3, 7, 14]
  }
};

// Write files
fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day28.js'), `export const day28 = ${JSON.stringify(day28, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Wrote day28.js");

fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day29.js'), `export const day29 = ${JSON.stringify(day29, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Wrote day29.js");
