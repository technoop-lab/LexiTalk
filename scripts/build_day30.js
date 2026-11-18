import fs from 'fs';
import path from 'path';

// Day 30: Stage 3 Cumulative Review & Mastery (Days 21–29 Past Narrative Mastery)
const day30 = {
  dayNumber: 30,
  id: "day_30",
  titleEn: "Stage 3 Cumulative Review & Past Narrative Mastery (Days 21–29)",
  titleHi: "स्टेज 3 समग्र पुनरावलोकन एवं भूतकाल निपुणता (दिन 21–29)",
  cefr: "A1.2",
  estMinutes: 45,
  prerequisites: "Days 21–29 (Complete Past Simple & Continuous Curriculum)",
  objectivesEn: [
    "Synthesize all regular (-ed/-d/-ied) and high-frequency irregular past verb forms with zero phonological or spelling confusion.",
    "Eliminate all instances of the 'Double Past Error' across negative clauses ('didn't + V1') and interrogative clauses ('Did you + V1...?').",
    "Construct rich, coherent multi-clause past narratives using temporal markers ('ago', 'last', 'yesterday') and logical connectors ('First', 'Then', 'Because', 'So', 'That's why').",
    "Master the interplay of ongoing background actions (Past Continuous: was/were + V-ing) and sudden interruptions (Past Simple: V2) with 'When' and 'While'.",
    "Demonstrate complete communicative fluency in narrating past experiences, explaining causes and effects, and asking conversational inquiries."
  ],
  objectivesHi: [
    "नियमित (-ed/-d/-ied) और अनियमित भूतकालीन क्रियाओं (V2) का बिना किसी वर्तनी या उच्चारण त्रुटि के सटीक उपयोग करना।",
    "नकारात्मक ('didn't + V1') और प्रश्नवाचक ('Did you + V1...?') वाक्यों में 'Double Past Error' को पूरी तरह समाप्त करना।",
    "समय संकेतकों ('ago', 'last', 'yesterday') और संयोजकों ('First', 'Then', 'Because', 'So', 'That's why') का उपयोग करके विस्तृत कहानियाँ और घटनाक्रम सुनाना।",
    "लंबे समय से चल रहे कार्यों (Past Continuous: was/were + V-ing) और बीच में घटी घटनाओं (Past Simple: V2) को 'When' और 'While' के साथ सटीकता से जोड़ना।",
    "भूतकाल की घटनाओं को सुनाने, कारण व परिणाम बताने और दूसरों से प्रश्न पूछने में पूर्ण आत्मविश्वास और प्रवाह हासिल करना।"
  ],
  teach: {
    hindiExplanation: "बधाई हो! आज दिन 30 है—यह स्टेज 3 (Days 21–29) का समग्र पुनरावलोकन (Mastery Review) है। इस स्टेज में आपने भूतकाल की पूरी दुनिया सीखी है: \n1. Regular Verbs (played, watched, studied) और Irregular Verbs (went, saw, bought, took)।\n2. Negative sentences का नियम: 'didn't + V1' (जैसे: 'I didn't go', '*didn't went*' कभी नहीं)।\n3. Yes/No व WH- प्रश्न: 'Did you see...?' और 'Where did you go...?' (यहाँ भी 'did' के बाद V1 आता है)।\n4. समय और क्रम: 'two days ago', 'last night', 'First', 'Then', 'After that', 'Finally'।\n5. कारण और परिणाम: 'Because' (कारण) और 'So / That's why' (परिणाम)—दोनों को एक साथ कभी नहीं मिलाना है।\n6. Past Continuous (रहा था / रही थी): 'was / were + V-ing'।\n7. Interrupted Actions: जब कोई काम चल रहा था (While I was cooking) और बीच में कोई घटना घटी (the phone rang)।\nआज का अभ्यास इन सभी नियमों को जोड़कर आपको एक धाराप्रवाह कथावाचक (Storyteller) बनाएगा!",
    englishExplanation: "Welcome to Day 30—the comprehensive consolidation and mastery review for Stage 3 (Days 21–29). In this stage, you transformed from basic present-tense descriptions into a complete English storyteller capable of narrating multifaceted past events. The master past architecture encompasses: 1) Affirmative V2 inflection (Regular -ed vs. High-frequency Irregular ablauts); 2) The auxiliary operator DID in Negatives ('didn't + V1') and Questions ('Did you / Where did you + V1...?'); 3) Temporal anchoring and narrative cohesion ('ago', 'last night', 'First', 'Then', 'Finally'); 4) Causal and consecutive reasoning ('because' vs. 'so / that's why'); and 5) Aspectual contrast between ongoing background durations (Past Continuous: was/were + V-ing) and punctual interruptions (Past Simple: V2) governed by 'While' and 'When'.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "The Universal Master Rule of Past Simple (V2 vs. V1)",
        description: "Affirmative statements require V2 (walked, went). Negatives and Questions REQUIRE auxiliary 'did/didn't' with Base Verb V1 (didn't go, did you see). The Double Past (*didn't went*, *did you saw*) is strictly forbidden.",
        register: "Core Syntax Pillar"
      },
      {
        ruleNumber: 2,
        title: "Temporal Anchor Prepositionless Collocations",
        description: "Duration + ago ('two days ago'). Last + period ('last night', 'last week'). Yesterday + morning/afternoon/evening. No prepositions precede 'last' or 'yesterday'.",
        register: "Idiomatic Precision"
      },
      {
        ruleNumber: 3,
        title: "Causal vs. Result Clause Independence",
        description: "Use 'because' for causes (Result because Reason) and 'so' for results (Reason, so Result). Never combine '*Because... so...*' in the same sentence.",
        register: "Discourse Logic"
      },
      {
        ruleNumber: 4,
        title: "Aspectual Hierarchy (Continuous Background vs. Punctual Event)",
        description: "Ongoing activity ➔ was/were + V-ing (While I was driving). Sudden event ➔ V2 (when the tyre burst). Parallel actions ➔ While A was doing X, B was doing Y.",
        register: "Aspectual Harmony"
      }
    ],
    formulaTable: [
      { subjectGroup: "Past Simple Affirmative", formula: "Subject + V2 (regular -ed / irregular) + [Object]", exampleEn: "She bought a new laptop yesterday.", meaningHi: "उसने कल एक नया लैपटॉप खरीदा।" },
      { subjectGroup: "Past Simple Negative", formula: "Subject + didn't + Base Verb (V1) + [Object]", exampleEn: "We didn't miss the morning flight.", meaningHi: "हमारी सुबह की फ़्लाइट नहीं छूटी।" },
      { subjectGroup: "Past Simple Inquiries", formula: "(WH-) + did + Subject + Base Verb (V1)...?", exampleEn: "Where did you stay in Mumbai?", meaningHi: "आप मुंबई में कहाँ रुके थे?" },
      { subjectGroup: "Interrupted Aspect (When/While)", formula: "While + [was/were + V-ing], + [Subject + V2]", exampleEn: "While I was studying, the lights went out.", meaningHi: "जब मैं पढ़ाई कर रहा था, तब बत्तियाँ बुझ गईं।" }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Cumulative Diagnostic: Top 4 Stage-3 Traps",
      hindiPattern: "1. '*didn't went*' (Double Past)\n2. '*before two days*' instead of 'two days ago'\n3. '*Because I was sick, so I stayed home*' (Double Conjunction)\n4. '*You was going*' instead of 'You were going'.",
      potentialInterference: "Carrying these four systemic errors into extended conversational storytelling.",
      explanation: "Each of these stems from direct mother-tongue translation without observing English syntactic constraints.",
      naturalSolution: "1. 'didn't go' | 2. 'two days ago' | 3. 'Because I was sick, I stayed home' | 4. 'You were going'."
    }
  },
  learn: {
    vocabulary: [
      { id: "day30_vocab_001", word: "Experience", pos: "Noun/Verb", ipa: "/ɪkˈspɪə.ri.əns/", meaningHi: "अनुभव / अनुभव करना", exampleEn: "We experienced heavy traffic on our way.", exampleHi: "रास्ते में हमें भारी ट्रैफ़िक का सामना करना पड़ा।" },
      { id: "day30_vocab_002", word: "Accidentally", pos: "Adverb", ipa: "/ˌæk.sɪˈden.təl.i/", meaningHi: "गलती से / अनजाने में", exampleEn: "I accidentally deleted the important email.", exampleHi: "मैंने गलती से वह ज़रूरी ईमेल डिलीट कर दिया।" },
      { id: "day30_vocab_003", word: "Immediately", pos: "Adverb", ipa: "/ɪˈmiː.di.ət.li/", meaningHi: "तुरंत / फौरन", exampleEn: "He immediately called the customer support.", exampleHi: "उसने तुरंत कस्टमर सपोर्ट को फ़ोन किया।" },
      { id: "day30_vocab_004", word: "Realize", pos: "Verb", ipa: "/ˈrɪə.laɪz/", meaningHi: "एहसास होना / समझ में आना", exampleEn: "I realized my mistake after reaching home.", exampleHi: "घर पहुँचने के बाद मुझे अपनी गलती का एहसास हुआ।" },
      { id: "day30_vocab_005", word: "Fortunately", pos: "Adverb", ipa: "/ˈfɔː.tʃən.ət.li/", meaningHi: "सौभाग्य से", exampleEn: "Fortunately, nobody was injured in the incident.", exampleHi: "सौभाग्य से, इस घटना में कोई घायल नहीं हुआ।" },
      { id: "day30_vocab_006", word: "Unfortunately", pos: "Adverb", ipa: "/ʌnˈfɔː.tʃən.ət.li/", meaningHi: "दुर्भाग्य से", exampleEn: "Unfortunately, the store was closed yesterday.", exampleHi: "दुर्भाग्य से, कल दुकान बंद थी।" },
      { id: "day30_vocab_007", word: "Suddenly", pos: "Adverb", ipa: "/ˈsʌd.ən.li/", meaningHi: "अचानक", exampleEn: "Suddenly, it started raining heavily.", exampleHi: "अचानक भारी बारिश होने लगी।" },
      { id: "day30_vocab_008", word: "Remember", pos: "Verb", ipa: "/rɪˈmem.bər/", meaningHi: "याद आना / याद रखना", exampleEn: "I remembered her birthday at the last moment.", exampleHi: "मुझे अंतिम समय पर उसका जन्मदिन याद आया।" },
      { id: "day30_vocab_009", word: "Decide", pos: "Verb", ipa: "/dɪˈsaɪd/", meaningHi: "निर्णय लेना / फ़ैसला करना", exampleEn: "They decided to travel by train.", exampleHi: "उन्होंने ट्रेन से यात्रा करने का फ़ैसला किया।" },
      { id: "day30_vocab_010", word: "Celebrate", pos: "Verb", ipa: "/ˈsel.ə.breɪt/", meaningHi: "उत्सव मनाना / जश्न मनाना", exampleEn: "We celebrated our success last weekend.", exampleHi: "हमने पिछले सप्ताहांत अपनी सफलता का जश्न मनाया।" }
    ],
    phrases: [
      { id: "day30_phrase_001", phrase: "To cut a long story short", register: "Narrative Idiom", meaningHi: "संक्षेप में कहें तो" },
      { id: "day30_phrase_002", phrase: "As soon as I reached", register: "Temporal Transition", meaningHi: "जैसे ही मैं पहुँचा" },
      { id: "day30_phrase_003", phrase: "All of a sudden", register: "Narrative Marker", meaningHi: "अचानक से" },
      { id: "day30_phrase_004", phrase: "That reminds me of yesterday.", register: "Conversational", meaningHi: "इससे मुझे कल की बात याद आ गई।" },
      { id: "day30_phrase_005", phrase: "Believe it or not", register: "Conversational Idiom", meaningHi: "मानो या न मानो" },
      { id: "day30_phrase_006", phrase: "In the end, everything was fine.", register: "Resolution", meaningHi: "अंत में, सब कुछ ठीक रहा।" }
    ]
  },
  examples: [
    { id: "day30_example_001", en: "I woke up early yesterday, had coffee, and went for a brisk walk.", hi: "मैं कल सुबह जल्दी उठा, कॉफ़ी पी और तेज़ सैर के लिए गया।" },
    { id: "day30_example_002", en: "She didn't receive the package because the delivery person lost the address.", hi: "उसे पार्सल नहीं मिला क्योंकि डिलीवरी वाले से पता खो गया था।" },
    { id: "day30_example_003", en: "Where did you buy this beautiful handmade carpet?", hi: "आपने यह सुंदर हस्तनिर्मित कालीन कहाँ से खरीदी?" },
    { id: "day30_example_004", en: "While we were having a meeting, the fire alarm went off.", hi: "जब हम बैठक कर रहे थे, तब फ़ायर अलार्म बज उठा।" },
    { id: "day30_example_005", en: "First, I completed my chores. Then, I watched my favorite documentary.", hi: "पहले मैंने अपने घरेलू काम निपटाए। फिर मैंने अपनी पसंदीदा डॉक्यूमेंट्री देखी।" },
    { id: "day30_example_006", en: "He was very tired, so he went to bed at nine o'clock.", hi: "वह बहुत थका हुआ था, इसलिए वह नौ बजे सोने चला गया।" },
    { id: "day30_example_007", en: "Did you talk to the manager about your leave application?", hi: "क्या आपने अपनी छुट्टी के आवेदन के बारे में मैनेजर से बात की?" },
    { id: "day30_example_008", en: "Three days ago, we visited our grandparents in Chandigarh.", hi: "तीन दिन पहले हम चंडीगढ़ में अपने दादा-दादी से मिलने गए थे।" },
    { id: "day30_example_009", en: "What were you doing yesterday at four in the afternoon?", hi: "कल दोपहर चार बजे आप क्या कर रहे थे?" },
    { id: "day30_example_010", en: "She dropped her glasses while she was cleaning the bookshelf.", hi: "किताबों की अलमारी साफ़ करते समय उसका चश्मा गिर गया।" },
    { id: "day30_example_011", en: "Because the road was blocked, we took the expressway.", hi: "क्योंकि रास्ता बंद था, हमने एक्सप्रेसवे का रास्ता लिया।" },
    { id: "day30_example_012", en: "Finally, after searching for two hours, I found my car keys.", hi: "आखिरकार दो घंटे ढूँढने के बाद मुझे अपनी कार की चाबियाँ मिल गईं।" }
  ],
  pronunciation: {
    targetSounds: ["Mastery of all 3 regular -ed endings: /t/, /d/, and /ɪd/", "Prosody and rhythm in long multi-clause narrative sentences"],
    traps: "Do not let connected speech break down during complex compound sentences. Maintain smooth breathing, linking, and intonational stepping.",
    drills: [
      { id: "day30_audio_001", voiceRole: "TEACHER", audioType: "drill", text: "Walked /t/, Cleaned /d/, Decided /ɪd/." },
      { id: "day30_audio_002", voiceRole: "TEACHER", audioType: "drill", text: "I didn't go to the market yesterday." },
      { id: "day30_audio_003", voiceRole: "TEACHER", audioType: "drill", text: "While I was studying, my phone rang." },
      { id: "day30_audio_004", voiceRole: "TEACHER", audioType: "drill", text: "First we had tea, then we left the house." }
    ]
  },
  practice: [
    {
      id: "day30_ex_001",
      type: "multiple_choice",
      prompt: "Choose the correct past simple sentence with regular verb:",
      options: ["She visited her grandmother last Sunday.", "She visit her grandmother last Sunday.", "She visiteded her grandmother last Sunday.", "She was visit her grandmother last Sunday."],
      correctAnswer: "She visited her grandmother last Sunday.",
      explanationEn: "Regular past: visit + ed = visited.",
      explanationHi: "नियमित क्रिया: 'visited' सही है।",
      difficulty: "easy",
      skillTag: "REGULAR_PAST"
    },
    {
      id: "day30_ex_002",
      type: "multiple_choice",
      prompt: "Choose the correct irregular past form of (buy):",
      options: ["bought", "buyed", "boughted", "buyen"],
      correctAnswer: "bought",
      explanationEn: "Irregular past of buy is 'bought'.",
      explanationHi: "'Buy' का V2 रूप 'bought' होता है।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST"
    },
    {
      id: "day30_ex_003",
      type: "error_correction",
      prompt: "Fix the Double Past mistake: 'I didn't went to the office yesterday.'",
      correctAnswer: "I didn't go to the office yesterday.",
      explanationEn: "'Didn't' must be followed by base verb 'go' (V1).",
      explanationHi: "'Didn't' के बाद 'go' (V1) आएगा।",
      difficulty: "easy",
      skillTag: "PAST_NEGATIVE"
    },
    {
      id: "day30_ex_004",
      type: "multiple_choice",
      prompt: "Choose the correct Yes/No past question:",
      options: ["Did you see the news yesterday?", "Did you saw the news yesterday?", "Do you saw the news yesterday?", "Were you see the news yesterday?"],
      correctAnswer: "Did you see the news yesterday?",
      explanationEn: "'Did' + Subject + Base verb 'see' (V1).",
      explanationHi: "'Did you see' सही प्रश्न है।",
      difficulty: "easy",
      skillTag: "PAST_QUESTIONS"
    },
    {
      id: "day30_ex_005",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the correct time marker (ago / before): 'I completed my college degree two years ______.'",
      correctAnswer: "ago",
      explanationEn: "Duration (two years) + 'ago'.",
      explanationHi: "समय अवधि के बाद 'ago' आता है।",
      difficulty: "easy",
      skillTag: "TIME_MARKERS"
    },
    {
      id: "day30_ex_006",
      type: "error_correction",
      prompt: "Correct the collocation: 'We watched a cricket match yesterday night.'",
      correctAnswer: "We watched a cricket match last night.",
      explanationEn: "'Last night' is the standard expression for 'कल रात'.",
      explanationHi: "'Yesterday night' की जगह 'last night' आएगा।",
      difficulty: "easy",
      skillTag: "TIME_MARKERS"
    },
    {
      id: "day30_ex_007",
      type: "multiple_choice",
      prompt: "Choose the sentence that correctly gives a reason with 'because':",
      options: ["I stayed home because I had a headache.", "Because I had a headache, so I stayed home.", "I stayed home so I had a headache.", "I had a headache because I stayed home."],
      correctAnswer: "I stayed home because I had a headache.",
      explanationEn: "Single causal conjunction 'because' without 'so'.",
      explanationHi: "'Because' के साथ 'so' का प्रयोग नहीं होता।",
      difficulty: "easy",
      skillTag: "CAUSAL_CONNECTORS"
    },
    {
      id: "day30_ex_008",
      type: "fill_in_blank",
      prompt: "Fill in the blank with (because / so): 'The weather was terrible, ______ we canceled our road trip.'",
      correctAnswer: "so",
      explanationEn: "'We canceled our road trip' is the result.",
      explanationHi: "रोड ट्रिप रद्द करना परिणाम था, इसलिए 'so' आएगा।",
      difficulty: "easy",
      skillTag: "RESULT_CONNECTORS"
    },
    {
      id: "day30_ex_009",
      type: "multiple_choice",
      prompt: "Choose the correct Past Continuous sentence:",
      options: ["They were playing chess at 8 PM.", "They was playing chess at 8 PM.", "They were played chess at 8 PM.", "They did playing chess at 8 PM."],
      correctAnswer: "They were playing chess at 8 PM.",
      explanationEn: "Plural subject 'They' + were + playing.",
      explanationHi: "'They' के साथ 'were playing' आएगा।",
      difficulty: "easy",
      skillTag: "PAST_CONTINUOUS"
    },
    {
      id: "day30_ex_010",
      type: "multiple_choice",
      prompt: "Which sentence accurately represents an interrupted action?",
      options: ["While I was cooking, the telephone rang.", "When I was cooking, the telephone was ringing.", "While I cooked, the telephone rang.", "I cooked when the telephone was ringing."],
      correctAnswer: "While I was cooking, the telephone rang.",
      explanationEn: "Continuous background ('was cooking') + punctual event ('rang').",
      explanationHi: "लंबा कार्य 'was cooking' और बीच की घटना 'rang' है।",
      difficulty: "medium",
      skillTag: "INTERRUPTED_ACTIONS"
    },
    {
      id: "day30_ex_011",
      type: "word_reorder",
      prompt: "Arrange into a correct past narrative: [tea / we / then / first / had / left / we]",
      options: ["First we had tea, then we left.", "Then we left, first we had tea.", "We had tea first, left then we.", "First left we, then had we tea."],
      correctAnswer: "First we had tea, then we left.",
      explanationEn: "First [Action 1], then [Action 2].",
      explanationHi: "सही क्रम: First we had tea, then we left.",
      difficulty: "easy",
      skillTag: "SEQUENCING_CONNECTORS"
    },
    {
      id: "day30_ex_012",
      type: "error_correction",
      prompt: "Fix the WH- question error: 'Where you went yesterday evening?'",
      correctAnswer: "Where did you go yesterday evening?",
      explanationEn: "Insert auxiliary 'did' and change 'went' to base verb 'go'.",
      explanationHi: "'Where did you go yesterday evening?' सही रूप है।",
      difficulty: "medium",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day30_ex_013",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the V2 form of (write): 'She ______ a long email to her manager.'",
      correctAnswer: "wrote",
      explanationEn: "Past tense of write is 'wrote'.",
      explanationHi: "'Write' का V2 'wrote' होगा।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST"
    },
    {
      id: "day30_ex_014",
      type: "multiple_choice",
      prompt: "What is the correct short answer to: 'Did they win the championship?'",
      options: ["Yes, they did.", "Yes, they won.", "Yes, they do.", "Yes, they did won."],
      correctAnswer: "Yes, they did.",
      explanationEn: "Formulaic short answer: 'Yes, they did.'",
      explanationHi: "संक्षिप्त उत्तर: 'Yes, they did.'",
      difficulty: "easy",
      skillTag: "SHORT_ANSWERS"
    },
    {
      id: "day30_ex_015",
      type: "hindi_to_english",
      prompt: "Translate into English: 'जब मैं सड़क पार कर रहा था, मैंने एक पुराना दोस्त देखा।'",
      options: ["While I was crossing the road, I saw an old friend.", "When I crossed the road, I was seeing an old friend.", "While I crossed the road, I saw an old friend.", "I was crossing the road when I was seeing an old friend."],
      correctAnswer: "While I was crossing the road, I saw an old friend.",
      explanationEn: "While I was crossing (ongoing) + saw (punctual).",
      explanationHi: "सही अनुवाद: 'While I was crossing the road, I saw an old friend.'",
      difficulty: "medium",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day30_ex_016",
      type: "english_to_hindi",
      prompt: "What is the Hindi meaning of: 'I didn't attend the meeting because I was unwell'?",
      options: ["मैं बैठक में शामिल नहीं हुआ क्योंकि मेरी तबीयत ठीक नहीं थी।", "मैं बैठक में था क्योंकि मैं ठीक था।", "मैं बीमार था इसलिए बैठक में गया।", "क्या आप बैठक में शामिल हुए थे?"],
      correctAnswer: "मैं बैठक में शामिल नहीं हुआ क्योंकि मेरी तबीयत ठीक नहीं थी।",
      explanationEn: "'I didn't attend the meeting because I was unwell' means 'मैं बैठक में शामिल नहीं हुआ क्योंकि मेरी तबीयत ठीक नहीं थी'.",
      explanationHi: "सही अर्थ: 'मैं बैठक में शामिल नहीं हुआ क्योंकि मेरी तबीयत ठीक नहीं थी।'",
      difficulty: "easy",
      skillTag: "TRANSLATION_EN_HI"
    },
    {
      id: "day30_ex_017",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the correct auxiliary (was / were): 'You ______ speaking very politely in the meeting.'",
      correctAnswer: "were",
      explanationEn: "Subject 'You' takes 'were'.",
      explanationHi: "'You' के साथ हमेशा 'were' आता है।",
      difficulty: "easy",
      skillTag: "SUBJECT_VERB_AGREEMENT"
    },
    {
      id: "day30_ex_018",
      type: "error_correction",
      prompt: "Correct the sentence: 'Because it was raining, so we stayed at home.'",
      correctAnswer: "Because it was raining, we stayed at home.",
      explanationEn: "Remove 'so'.",
      explanationHi: "'Because' के साथ 'so' हटाएँ।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day30_ex_019",
      type: "multiple_choice",
      prompt: "Which past verb ending has the /ɪd/ pronunciation?",
      options: ["Decided", "Walked", "Cleaned", "Played"],
      correctAnswer: "Decided",
      explanationEn: "Verbs ending in /d/ or /t/ add the full syllable /ɪd/: 'decided', 'wanted'.",
      explanationHi: "/d/ या /t/ पर समाप्त होने वाले शब्दों में /ɪd/ जुड़ता है: 'decided'।",
      difficulty: "medium",
      skillTag: "PHONETICS"
    },
    {
      id: "day30_ex_020",
      type: "word_reorder",
      prompt: "Order: [did / why / leave / you / the party / so early]",
      options: ["Why did you leave the party so early?", "Why you did leave the party so early?", "Why leave did you the party so early?", "Did why you leave the party so early?"],
      correctAnswer: "Why did you leave the party so early?",
      explanationEn: "Why + did + you + leave + the party + so early?",
      explanationHi: "सही क्रम: Why did you leave the party so early?",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day30_ex_021",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the past form of (give): 'He ______ me his personal phone number.'",
      correctAnswer: "gave",
      explanationEn: "Past tense of give is 'gave'.",
      explanationHi: "'Give' का V2 'gave' होगा।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST"
    },
    {
      id: "day30_ex_022",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'मेरी चाबी खो गई, इसीलिए मैंने तुम्हें फ़ोन किया':",
      options: ["I lost my key. That's why I called you.", "I lost my key that's why I did call you.", "Because I lost my key so I called you.", "I lost my key because I called you."],
      correctAnswer: "I lost my key. That's why I called you.",
      explanationEn: "Reason + That's why + Result.",
      explanationHi: "सही वाक्य: 'I lost my key. That's why I called you.'",
      difficulty: "easy",
      skillTag: "EXPLANATION_CONNECTORS"
    },
    {
      id: "day30_ex_023",
      type: "error_correction",
      prompt: "Fix the error: 'Did she bought the new car?'",
      correctAnswer: "Did she buy the new car?",
      explanationEn: "'Bought' must revert to 'buy' after 'Did'.",
      explanationHi: "'Did' के बाद 'buy' आएगा।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day30_ex_024",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'We reached our hotel at 11 PM ______ (yesterday / last) night.'",
      correctAnswer: "last",
      explanationEn: "'Last night' is correct.",
      explanationHi: "'Last night' सही है।",
      difficulty: "easy",
      skillTag: "TIME_MARKERS"
    },
    {
      id: "day30_ex_025",
      type: "multiple_choice",
      prompt: "Select the sentence with accurate syntax describing TWO simultaneous ongoing actions:",
      options: ["While Amit was studying, Priya was cooking.", "While Amit studied, Priya cooked.", "Amit was studying when Priya was cooking.", "While Amit was studying Priya cooked yesterday."],
      correctAnswer: "While Amit was studying, Priya was cooking.",
      explanationEn: "Both actions use Past Continuous to indicate simultaneous duration.",
      explanationHi: "समानांतर चल रहे कार्यों के लिए दोनों तरफ Past Continuous आता है।",
      difficulty: "medium",
      skillTag: "PARALLEL_ACTIONS"
    },
    {
      id: "day30_ex_026",
      type: "hindi_to_english",
      prompt: "Translate: 'वह तीन साल पहले लंदन चला गया।'",
      options: ["He moved to London three years ago.", "He moved to London before three years.", "He move to London three years ago.", "He was move to London three years ago."],
      correctAnswer: "He moved to London three years ago.",
      explanationEn: "He moved to London three years ago.",
      explanationHi: "सही अनुवाद: 'He moved to London three years ago.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day30_ex_027",
      type: "error_correction",
      prompt: "Fix the mistake: 'I was knowing the entire story.'",
      correctAnswer: "I knew the entire story.",
      explanationEn: "'Know' is a stative verb. Use past simple 'knew'.",
      explanationHi: "'Know' का Continuous नहीं बनता, 'knew' सही है।",
      difficulty: "medium",
      skillTag: "STATIVE_VERBS"
    },
    {
      id: "day30_ex_028",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the past form of (bring): 'She ______ delicious sweets from her hometown.'",
      correctAnswer: "brought",
      explanationEn: "Past tense of bring is 'brought'.",
      explanationHi: "'Bring' का V2 'brought' होगा।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST"
    },
    {
      id: "day30_ex_029",
      type: "multiple_choice",
      prompt: "Which question word is used to ask for the departure time of a bus?",
      options: ["What time did the bus leave?", "Where did the bus leave?", "Why did the bus leave?", "Who did the bus leave?"],
      correctAnswer: "What time did the bus leave?",
      explanationEn: "'What time did the bus leave?' asks for departure time.",
      explanationHi: "प्रस्थान का समय पूछने के लिए 'What time did the bus leave?' का प्रयोग होगा।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day30_ex_030",
      type: "word_reorder",
      prompt: "Order: [broke down / while / our car / we were driving / to Jaipur]",
      options: ["Our car broke down while we were driving to Jaipur.", "While our car broke down we were driving to Jaipur.", "We were driving to Jaipur our car while broke down.", "Broke down our car while to Jaipur we were driving."],
      correctAnswer: "Our car broke down while we were driving to Jaipur.",
      explanationEn: "Event (Our car broke down) + while + ongoing (we were driving to Jaipur).",
      explanationHi: "सही क्रम: Our car broke down while we were driving to Jaipur.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day30_ex_031",
      type: "error_correction",
      prompt: "Correct the sentence: 'We didn't had enough time to finish the test.'",
      correctAnswer: "We didn't have enough time to finish the test.",
      explanationEn: "Change 'had' to base verb 'have' after 'didn't'.",
      explanationHi: "'Didn't' के बाद 'have' (V1) आएगा।",
      difficulty: "easy",
      skillTag: "PAST_NEGATIVE"
    },
    {
      id: "day30_ex_032",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the past form of (feel): 'I ______ very refreshed after the holiday.'",
      correctAnswer: "felt",
      explanationEn: "Past tense of feel is 'felt'.",
      explanationHi: "'Feel' का V2 'felt' होगा।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST"
    },
    {
      id: "day30_ex_033",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'अंत में हम 10 बजे घर पहुँचे':",
      options: ["Finally, we reached home at 10 PM.", "First, we reached home at 10 PM.", "Ago, we reached home at 10 PM.", "Then, we reached home at 10 PM finally."],
      correctAnswer: "Finally, we reached home at 10 PM.",
      explanationEn: "'Finally' indicates the concluding event of a timeline.",
      explanationHi: "समापन दर्शाने के लिए 'Finally' आएगा।",
      difficulty: "easy",
      skillTag: "SEQUENCING_CONNECTORS"
    },
    {
      id: "day30_ex_034",
      type: "hindi_to_english",
      prompt: "Translate: 'क्या आपने कल रात अच्छी नींद ली?'",
      options: ["Did you sleep well last night?", "Did you slept well last night?", "Were you sleep well last night?", "Did you sleep well yesterday night?"],
      correctAnswer: "Did you sleep well last night?",
      explanationEn: "Did you sleep well last night?",
      explanationHi: "सही अनुवाद: 'Did you sleep well last night?'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day30_ex_035",
      type: "error_correction",
      prompt: "Fix the error: 'The train was late, because we missed the flight.'",
      correctAnswer: "The train was late, so we missed the flight.",
      explanationEn: "Missing the flight is the result of the late train; use 'so'.",
      explanationHi: "फ़्लाइट छूटना परिणाम था, इसलिए 'so' आएगा।",
      difficulty: "medium",
      skillTag: "RESULT_CONNECTORS"
    },
    {
      id: "day30_ex_036",
      type: "fill_in_blank",
      prompt: "Fill in the blank: 'I was sleeping ______ the earthquake shook the house.' (when / while)",
      correctAnswer: "when",
      explanationEn: "'When' introduces the sudden punctive event ('the earthquake shook').",
      explanationHi: "अचानक घटी घटना के लिए 'when' आएगा।",
      difficulty: "easy",
      skillTag: "TEMPORAL_CONNECTORS"
    },
    {
      id: "day30_ex_037",
      type: "multiple_choice",
      prompt: "Select the sentence with ACCURATE past question syntax:",
      options: ["How did you find your lost passport?", "How did you found your lost passport?", "How you found your lost passport?", "How were you find your lost passport?"],
      correctAnswer: "How did you find your lost passport?",
      explanationEn: "How + did + you + find (V1)...?",
      explanationHi: "पहला वाक्य पूर्णतः शुद्ध है।",
      difficulty: "easy",
      skillTag: "WH_PAST_QUESTIONS"
    },
    {
      id: "day30_ex_038",
      type: "word_reorder",
      prompt: "Order: [she was / dropped her phone / while / running / she]",
      options: ["While she was running, she dropped her phone.", "She dropped her phone while she was running.", "She was running while she dropped her phone.", "Running while she was she dropped her phone."],
      correctAnswer: "While she was running, she dropped her phone.",
      acceptableAlternatives: ["She dropped her phone while she was running."],
      explanationEn: "While she was running (ongoing), she dropped her phone (event).",
      explanationHi: "सही क्रम: While she was running, she dropped her phone.",
      difficulty: "medium",
      skillTag: "SENTENCE_BUILDING"
    },
    {
      id: "day30_ex_039",
      type: "error_correction",
      prompt: "Correct the sentence: 'What was they doing at five o'clock?'",
      correctAnswer: "What were they doing at five o'clock?",
      explanationEn: "Change 'was' to 'were' with subject 'they'.",
      explanationHi: "'They' के साथ 'were' आएगा।",
      difficulty: "easy",
      skillTag: "SUBJECT_VERB_AGREEMENT"
    },
    {
      id: "day30_ex_040",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the past form of (pay): 'I ______ the restaurant bill by credit card.'",
      correctAnswer: "paid",
      explanationEn: "Past tense of pay is 'paid'.",
      explanationHi: "'Pay' का V2 'paid' होगा।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST"
    },
    {
      id: "day30_ex_041",
      type: "multiple_choice",
      prompt: "Choose the correct sentence to say 'उसने सच नहीं बोला':",
      options: ["He didn't tell the truth.", "He didn't told the truth.", "He not told the truth.", "He wasn't tell the truth."],
      correctAnswer: "He didn't tell the truth.",
      explanationEn: "didn't + tell (V1).",
      explanationHi: "सही वाक्य: 'He didn't tell the truth.'",
      difficulty: "easy",
      skillTag: "PAST_NEGATIVE"
    },
    {
      id: "day30_ex_042",
      type: "dialogue_completion",
      prompt: "Complete the dialogue: Host: 'Did you enjoy the dinner?' Guest: 'Yes, I ______! The food was delicious.'",
      correctAnswer: "did",
      acceptableAlternatives: ["did"],
      explanationEn: "Short answer: 'Yes, I did.'",
      explanationHi: "'Yes, I did.' आएगा।",
      difficulty: "easy",
      skillTag: "SHORT_ANSWERS"
    },
    {
      id: "day30_ex_043",
      type: "hindi_to_english",
      prompt: "Translate: 'भारी ट्रैफ़िक था, इसलिए हमें देर हो गई।'",
      options: ["There was heavy traffic, so we were late.", "There was heavy traffic because we were late.", "Because heavy traffic so we were late.", "Heavy traffic was there so late we were."],
      correctAnswer: "There was heavy traffic, so we were late.",
      explanationEn: "There was heavy traffic, so we were late.",
      explanationHi: "सही अनुवाद: 'There was heavy traffic, so we were late.'",
      difficulty: "easy",
      skillTag: "TRANSLATION_HI_EN"
    },
    {
      id: "day30_ex_044",
      type: "error_correction",
      prompt: "Fix the error: 'I graduated in two years ago.'",
      correctAnswer: "I graduated two years ago.",
      explanationEn: "Remove 'in' before 'two years ago'.",
      explanationHi: "'Two years ago' से पहले 'in' हटाएँ।",
      difficulty: "easy",
      skillTag: "ERROR_DETECTION"
    },
    {
      id: "day30_ex_045",
      type: "fill_in_blank",
      prompt: "Fill in the blank with the past form of (meet): 'We ______ our new manager yesterday morning.'",
      correctAnswer: "met",
      explanationEn: "Past tense of meet is 'met'.",
      explanationHi: "'Meet' का V2 'met' होगा।",
      difficulty: "easy",
      skillTag: "IRREGULAR_PAST"
    },
    {
      id: "day30_ex_046",
      type: "multiple_choice",
      prompt: "Which sentence is grammatically FLAWLESS?",
      options: ["While I was working on my laptop, the battery died.", "While I was work on my laptop, the battery died.", "While I worked on my laptop, the battery was dying.", "When I was working on my laptop, the battery was died."],
      correctAnswer: "While I was working on my laptop, the battery died.",
      explanationEn: "Flawless interrupted past aspect.",
      explanationHi: "पहला वाक्य पूर्णतः शुद्ध है।",
      difficulty: "easy",
      skillTag: "INTERRUPTED_ACTIONS"
    },
    {
      id: "day30_ex_047",
      type: "spoken_response",
      prompt: "Speak aloud: Tell a 4-sentence story about an eventful yesterday using: 1. Past simple action, 2. Reason with because, 3. Continuous interrupted action with while, 4. Sequencing with finally.",
      modelResponse: "Yesterday, I woke up early because I had an important interview. While I was driving to the office, my car broke down. I called a taxi immediately and reached on time. Finally, the manager offered me the job!",
      correctAnswer: "A coherent 4-sentence past narrative combining all Stage 3 targets.",
      explanationEn: "Synthesize all Stage 3 past tenses and discourse connectors into a coherent spoken story.",
      explanationHi: "स्टेज 3 के सभी नियमों को मिलाकर 4 वाक्यों की एक संपूर्ण कहानी बोलें।",
      difficulty: "medium",
      skillTag: "SPEAKING"
    },
    {
      id: "day30_ex_048",
      type: "recall",
      prompt: "What is the base verb rule after 'didn't' and 'did'?",
      correctAnswer: "Base Verb V1",
      acceptableAlternatives: ["base verb", "V1", "base form", "infinitive"],
      explanationEn: "Always use Base Verb V1 after 'did' and 'didn't'.",
      explanationHi: "'Did' और 'didn't' के बाद हमेशा क्रिया का पहला रूप (V1) आता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day30_ex_049",
      type: "recall",
      prompt: "Is '*Because I was tired, so I slept*' correct in English?",
      correctAnswer: "No",
      acceptableAlternatives: ["no", "never", "No, it is incorrect"],
      explanationEn: "No, never combine 'Because' and 'So' in one sentence.",
      explanationHi: "नहीं, 'Because' और 'So' एक साथ कभी नहीं आते।",
      difficulty: "easy",
      skillTag: "RECALL"
    },
    {
      id: "day30_ex_050",
      type: "recall",
      prompt: "Which tense describes the longer ongoing background action: Past Simple or Past Continuous?",
      correctAnswer: "Past Continuous",
      acceptableAlternatives: ["past continuous", "Past Progressive", "past progressive"],
      explanationEn: "Past Continuous (was/were + V-ing).",
      explanationHi: "लंबे समय से चल रहे कार्य के लिए Past Continuous का प्रयोग होता है।",
      difficulty: "easy",
      skillTag: "RECALL"
    }
  ],
  use: {
    situation: "A job candidate answering the classic behavioral interview question: 'Tell me about a difficult problem you encountered at work and how you resolved it.'",
    dialogue: {
      id: "day30_dialogue_001",
      turns: [
        { speaker: "Interviewer", textEn: "Mr. Kapoor, can you tell me about an unexpected challenge you faced in your previous role?", textHi: "श्री कपूर, क्या आप पिछली नौकरी में आई किसी अप्रत्याशित चुनौती के बारे में बता सकते हैं?" },
        { speaker: "Rohan Kapoor", textEn: "Certainly. Last month, while we were preparing for a major client demo, our primary cloud server crashed unexpectedly.", textHi: "ज़रूर। पिछले महीने, जब हम एक बड़े क्लाइंट डेमो की तैयारी कर रहे थे, तब हमारा मुख्य क्लाउड सर्वर अचानक क्रैश हो गया।" },
        { speaker: "Interviewer", textEn: "That must have been stressful. What did you do immediately?", textHi: "वह काफी तनावपूर्ण रहा होगा। आपने तुरंत क्या किया?" },
        { speaker: "Rohan Kapoor", textEn: "First, I informed the client about a short 15-minute delay. Then, I worked with the DevOps engineer to restore the backup database.", textHi: "पहले, मैंने क्लाइंट को 15 मिनट की छोटी देरी के बारे में सूचित किया। फिर, मैंने बैकअप डेटाबेस को रीस्टोर करने के लिए डेवऑप्स इंजीनियर के साथ काम किया।" },
        { speaker: "Interviewer", textEn: "Did the demo succeed in the end?", textHi: "क्या अंत में डेमो सफल रहा?" },
        { speaker: "Rohan Kapoor", textEn: "Yes, it did! We delivered a smooth presentation, and the client signed the contract two days later because they appreciated our transparency and quick recovery.", textHi: "हाँ, बिल्कुल! हमने एक शानदार प्रेजेंटेशन दिया, और क्लाइंट ने दो दिन बाद अनुबंध पर हस्ताक्षर किए क्योंकि उन्होंने हमारी पारदर्शिता और त्वरित समाधान की सराहना की।" }
      ]
    },
    speakingTask: {
      promptEn: "Deliver a 1-minute past story about a challenge you solved in the past using: 'Last month/year...', 'While I was...', 'First... Then...', 'Because... so...', 'Finally...'.",
      promptHi: "भूतकाल की किसी चुनौती और उसके समाधान पर स्टेज 3 के सभी कनेक्टर्स का उपयोग करके 1 मिनट का भाषण दें।"
    }
  },
  assess: [
    { id: "day30_assess_001", question: "Summarize the 4 most critical structural rules mastered in Stage 3 (Days 21–29).", answer: "1. V2 in past affirmative vs. Base V1 with 'didn't' and 'did'.\n2. Postpositional 'ago' and prepositionless 'last night'.\n3. Single causal conjunction ('because' OR 'so', never both together).\n4. Aspectual contrast: Past Continuous for background duration with 'while' and Past Simple for sudden interruptions with 'when'.", skill: "Curricular Mastery" },
    { id: "day30_assess_002", question: "How has your ability to communicate in English evolved from Stage 1 (Present Simple) to Stage 3 (Past Narrative)?", answer: "Stage 1 established present routines and identities ('I work', 'She is a doctor'); Stage 3 unlocks complete narrative storytelling, historical explanation, chronological reporting, and multi-clause cause-and-effect reasoning in past time.", skill: "Metacognitive Fluency" },
    { id: "day30_assess_003", question: "What is your remediation strategy if you catch yourself saying '*I didn't went* '?", answer: "Immediately self-correct: pause, replace the V2 with base V1 ('I didn't go'), and reinforce the rule that the auxiliary 'didn't' already absorbed the past marker.", skill: "Self-Correction Competence" }
  ],
  review: {
    spacedRepetitionTag: "STAGE_3_CUMULATIVE_PAST_MASTERY",
    recommendedIntervalDays: [1, 3, 7, 14, 30]
  }
};

// Write file
fs.writeFileSync(path.join(process.cwd(), 'content_builder', 'day30.js'), `export const day30 = ${JSON.stringify(day30, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Wrote day30.js");
