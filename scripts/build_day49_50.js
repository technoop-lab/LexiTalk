import fs from 'fs';
import path from 'path';

// DAY 49: Human Appearance, Attire & Personality Descriptions
const day49 = {
  dayNumber: 49,
  id: "day_49",
  titleEn: "Human Appearance, Attire & Personality Descriptions",
  titleHi: "मानव स्वरूप, वेशभूषा एवं व्यक्तित्व विवरण",
  cefr: "A2.2",
  estMinutes: 40,
  prerequisites: "Day 48 (Zoology, Habitats & Wildlife)",
  objectivesEn: [
    "Describe physical traits, bodily stature (athletic, stocky, slender, petite), and facial features (stubble, freckles, high cheekbones) accurately.",
    "Categorize hair textures, styles, and shades (wavy, coiled, receding hairline, brunette, auburn) using standard collocations.",
    "Formulate sophisticated descriptions of sartorial attire, fabric textures (linen, denim, cashmere), and dress codes (business formal, smart casual).",
    "Analyze and express human character, psychological disposition, and interpersonal qualities (conscientious, charismatic, pragmatic, empathetic).",
    "Eliminate subcontinental appearance traps including '*pant*', '*specs*', stative '*is having black hair*', and inappropriate adjectives."
  ],
  objectivesHi: [
    "शारीरिक कद-काठी (Athletic, Stocky, Slender, Petite) और चेहरे की विशेषताओं (Stubble, Freckles, Cheekbones) का सटीक वर्णन करना।",
    "बालों की बनावट, शैली और रंगों (Wavy, Curly, Receding hairline, Brunette) को मानक कोलोकेशन के साथ व्यक्त करना।",
    "पहनावे (Attire), कपड़ों के कपड़े (Linen, Cashmere, Denim) और ड्रेस कोड (Smart casual, Business formal) का परिष्कृत विवरण देना।",
    "मानव स्वभाव, व्यक्तित्व और चारित्रिक गुणों (Charismatic, Conscientious, Pragmatic, Empathetic) का विश्लेषण करना।",
    "भारतीय बोली की गलतियों ('pant', 'specs', 'he is having black hair') को शुद्ध वैश्विक अंग्रेजी में बदलना।"
  ],
  teach: {
    hindiExplanation: "दिन 49 में हम किसी व्यक्ति के रूप-रंग (Appearance), पहनावे (Attire) और व्यक्तित्व (Personality) का प्रभावी ढंग से वर्णन करना सीखेंगे।\n\n1. शारीरिक बनावट (Physical Build):\n   - 'Slender / Slim' (पतला-दुबला, आकर्षक)\n   - 'Stocky / Well-built' (मजबूत कद-काठी वाला, गठीला शरीर)\n   - 'Athletic' (कसरती बदन)\n   - 'Petite' (छोटे कद की और नाजुक महिला)\n2. चेहरे और बालों की विशेषताएं (Facial & Hair Features):\n   - 'Complexion' (त्वचा का रंग): 'Fair', 'Tanned', 'Olive / Wheatish' (गेहुंआ रंग)\n   - 'Facial hair': 'Stubble' (हल्की दाढ़ी), 'Clean-shaven', 'Goatee' (फ्रेंच कट दाढ़ी)\n   - 'Hair types': 'Wavy' (लहराते बाल), 'Curly' (घुंघराले), 'Receding hairline' (आगे से झड़ते हुए बाल), 'Bald' (गंजा)\n3. वेशभूषा और कपड़े (Attire & Fabrics):\n   - 'Trousers / Pants' (पतलून - ध्यान दें: अंग्रेजी में कभी '*pant*' एकवचन नहीं होता, हमेशा 'pants' या 'a pair of trousers' कहें)।\n   - 'Smart casual' (शालीन लेकिन अनौपचारिक पहनावा)\n   - 'Fabrics': 'Linen' (लिनन), 'Denim' (डेनिम), 'Silk' (रेशम), 'Cashmere / Wool' (ऊनी)।\n4. व्यक्तित्व और स्वभाव (Personality Descriptors):\n   - 'Charismatic' (आकर्षक और प्रभावशाली व्यक्तित्व)\n   - 'Conscientious' (ईमानदार और कर्तव्यनिष्ठ)\n   - 'Pragmatic' (व्यावहारिक और यथार्थवादी)\n   - 'Empathetic' (दूसरों की भावनाओं को समझने वाला, सहानुभूतिशील)\n   - 'Articulate' (अपनी बात स्पष्ट और सुंदर ढंग से रखने वाला)\n5. व्याकरण नियम: शरीर की स्थायी विशेषताओं के लिए Simple Present टेंस का प्रयोग करें: 'He has brown eyes' (NOT '*He is having brown eyes*')।",
    englishExplanation: "Welcome to Day 49! Today's lesson is devoted to the art of rich human characterization: somatic anatomy, facial features, hair typology, sartorial register, and psychological disposition.\n\nCore descriptive competencies:\n1. Anatomical Stature & Morphology: Deploying precise descriptors ('slender', 'stocky', 'athletic', 'petite', 'tall and broad-shouldered').\n2. Craniofacial & Follicular Typology: Articulating facial nuances ('high cheekbones', 'freckles', 'stubble', 'cleft chin') and hair dynamics ('wavy', 'coily', 'receding hairline', 'salt-and-pepper hair').\n3. Sartorial Vocabulary & Dress Codes: Distinguishing attire levels ('black tie', 'business formal', 'smart casual') and garment textures ('linen', 'tweed', 'cashmere').\n4. Psychological Character & Demeanor: Navigating personality adjectives ('conscientious', 'charismatic', 'pragmatic', 'introverted', 'gregarious').\n5. Eliminating Subcontinental Phrasing: Correcting singular '*pant*', '*specs*', and progressive stative errors (*'she is having brown eyes'*).",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Stative 'Have' for Permanent Physical Attributes",
        description: "Permanent somatic features require simple present 'have/has', never present continuous: 'She has green eyes' (NOT '*She is having green eyes*').",
        register: "Stative Aspect"
      },
      {
        ruleNumber: 2,
        title: "Pluralia Tantum Nouns for Bifurcated Garments",
        description: "Garments consisting of two legs/parts are always plural and take plural verbs: 'trousers', 'pants', 'jeans', 'spectacles/glasses', 'scissors'. Use 'a pair of' for singular quantification.",
        register: "Pluralia Tantum"
      },
      {
        ruleNumber: 3,
        title: "Adjective Order for Physical Characterization",
        description: "Follow royal adjective order before nouns: Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material. E.g., 'a handsome, tall, young, broad-shouldered Italian man'.",
        register: "Adjective Hierarchy"
      },
      {
        ruleNumber: 4,
        title: "Present Continuous for Dynamic Attire",
        description: "Wearing clothes at the moment of speech requires the present continuous: 'He is wearing a tailored navy suit' (Action of putting on is 'dressing/putting on').",
        register: "Sartorial Aspect"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Physical Stature & Complexion",
        formula: "[Subject] + is + [Height / Build Adjective] + with + [Complexion Descriptor] + skin.",
        exampleEn: "He is tall and athletic with a warm olive complexion.",
        meaningHi: "वह लंबा और कसरती शरीर वाला है और उसकी त्वचा का रंग गेहुंआ है।"
      },
      {
        subjectGroup: "Facial & Hair Features",
        formula: "[Subject] + has + [Hair Texture / Color] + hair and + [Facial Feature: stubble / dimples].",
        exampleEn: "She has wavy auburn hair and delicate dimples when she smiles.",
        meaningHi: "उसके लहराते गहरे भूरे बाल हैं और मुस्कुराने पर उसके गालों पर प्यारे गड्ढे (डिंपल) पड़ते हैं।"
      },
      {
        subjectGroup: "Sartorial Description",
        formula: "[Subject] + is dressed in + [Formality Level: smart casual / business attire], wearing + [Garment].",
        exampleEn: "He is dressed in smart casual, wearing a crisp linen shirt and tailored chinos.",
        meaningHi: "वह स्मार्ट कैजुअल पहनावे में है, उसने एक साफ लिनन की शर्ट और फिटेड चीनोस पहनी है।"
      },
      {
        subjectGroup: "Personality & Character Trait",
        formula: "[Subject] + is known for being exceptionally + [Trait Adjective] + and + [Trait Adjective].",
        exampleEn: "Our team lead is exceptionally articulate, pragmatic, and conscientious.",
        meaningHi: "हमारी टीम लीडर असाधारण रूप से स्पष्ट वक्ता, व्यावहारिक और कर्तव्यनिष्ठ होने के लिए जानी जाती हैं।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Pant', 'Specs', and Stative 'Having Hair' Traps",
      hindiPattern: "1. '*He bought a new blue pant for the interview.*' (singularizing pluralia tantum)\n2. '*I forgot my specs in the car.*' (excessive reliance on slang 'specs' in formal contexts)\n3. '*She is having long black hair and fair complexion.*'",
      potentialInterference: "Applying Hindi singular garment grammar ('एक पैंट') and misuse of continuous stative verbs.",
      explanation: "In standard English, bifurcated legwear is always plural ('a pair of pants / trousers', never '*a pant*'). Use 'glasses' or 'spectacles' instead of colloquial '*specs*' in professional contexts. For features, use Simple Present: 'She has long black hair and a fair complexion.'",
      naturalSolution: "1. 'He bought a new pair of trousers / pants for the interview.' | 2. 'I forgot my glasses / spectacles in the car.' | 3. 'She has long black hair and a fair complexion.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day49_vocab_001", word: "Complexion", pos: "Noun", ipa: "/kəmˈplek.ʃən/", meaningHi: "त्वचा का रंग व रूप / चेहरे की रंगत", exampleEn: "She has a radiant, clear complexion.", exampleHi: "उसकी त्वचा की रंगत चमकदार और साफ है।" },
      { id: "day49_vocab_002", word: "Athletic", pos: "Adjective", ipa: "/æθˈlet.ɪk/", meaningHi: "कसरती / चुस्त और मजबूत बदन वाला", exampleEn: "He maintained an athletic physique through daily swimming.", exampleHi: "उसने दैनिक तैराकी के माध्यम से एक कसरती बदन बनाए रखा।" },
      { id: "day49_vocab_003", word: "Stubble", pos: "Noun", ipa: "/ˈstʌb.əl/", meaningHi: "हल्की दाढ़ी / दाढ़ी के छोटे-छोटे बाल", exampleEn: "He sported a light five o'clock stubble across his jawline.", exampleHi: "उसकी ठुड्डी पर हल्की दाढ़ी के छोटे बाल थे।" },
      { id: "day49_vocab_004", word: "Trousers", pos: "Noun (Plural)", ipa: "/ˈtraʊ.zəz/", meaningHi: "पतलून (हमेशा बहुवचन में प्रयुक्त)", exampleEn: "He wore dark grey woollen trousers with a pressed white shirt.", exampleHi: "उसने इस्त्री की हुई सफेद शर्ट के साथ गहरे भूरे रंग की ऊनी पतलून पहनी थी।" },
      { id: "day49_vocab_005", word: "Charismatic", pos: "Adjective", ipa: "/ˌkær.ɪzˈmæt.ɪk/", meaningHi: "आकर्षक एवं प्रभावशाली व्यक्तित्व वाला", exampleEn: "The charismatic leader captivated the entire audience.", exampleHi: "उस आकर्षक और प्रभावशाली नेता ने पूरे दर्शकों को मंत्रमुग्ध कर दिया।" },
      { id: "day49_vocab_006", word: "Conscientious", pos: "Adjective", ipa: "/ˌkɒn.ʃiˈen.ʃəs/", meaningHi: "कर्तव्यनिष्ठ / अत्यंत ईमानदार और मेहनती", exampleEn: "She is a conscientious researcher who double-checks every data point.", exampleHi: "वह एक कर्तव्यनिष्ठ शोधकर्ता हैं जो हर डेटा बिंदु की दोबारा जांच करती हैं।" },
      { id: "day49_vocab_007", word: "Pragmatic", pos: "Adjective", ipa: "/præɡˈmæt.ɪk/", meaningHi: "व्यावहारिक / यथार्थवादी", exampleEn: "We need a pragmatic approach rather than theoretical idealism.", exampleHi: "हमें सैद्धांतिक आदर्शवाद के बजाय एक व्यावहारिक दृष्टिकोण की आवश्यकता है।" },
      { id: "day49_vocab_008", word: "Petite", pos: "Adjective", ipa: "/pəˈtiːt/", meaningHi: "छोटे कद की और नाजुक/सुंदर महिला", exampleEn: "The petite dancer moved across the stage with effortless grace.", exampleHi: "छोटे और नाजुक कद की नृत्यांगना सहज शालीनता के साथ मंच पर घूमी।" },
      { id: "day49_vocab_009", word: "Articulate", pos: "Adjective / Verb", ipa: "/ɑːˈtɪk.jə.lət/", meaningHi: "स्पष्ट वक्ता / विचारों को सुंदर ढंग से व्यक्त करने वाला", exampleEn: "He is an articulate speaker who explains complex concepts simply.", exampleHi: "वह एक स्पष्ट वक्ता हैं जो जटिल अवधारणाओं को सरलता से समझाते हैं।" },
      { id: "day49_vocab_010", word: "Attire", pos: "Noun", ipa: "/əˈtaɪər/", meaningHi: "वेशभूषा / पहनावा", exampleEn: "The wedding invitation specified formal evening attire.", exampleHi: "शादी के निमंत्रण पत्र में औपचारिक शाम के पहनावे का उल्लेख था।" }
    ],
    spokenPhrases: [
      { id: "day49_phrase_001", phrase: "A pair of trousers", meaningHi: "एक पतलून", context: "Clothing purchase/description" },
      { id: "day49_phrase_002", phrase: "Smart casual", meaningHi: "शालीन लेकिन अनौपचारिक वस्त्र", context: "Dress code register" },
      { id: "day49_phrase_003", phrase: "Dressed to the nines", meaningHi: "बहुत सुंदर और सजे-धजे कपड़े पहने हुए", context: "Idiomatic compliment" },
      { id: "day49_phrase_004", phrase: "Receding hairline", meaningHi: "आगे से पीछे की ओर झड़ते बाल", context: "Hair description" },
      { id: "day49_phrase_005", phrase: "Down-to-earth", meaningHi: "बहुत विनम्र और जमीन से जुड़ा हुआ", context: "Personality description" },
      { id: "day49_phrase_006", phrase: "Salt-and-pepper hair", meaningHi: "काले और सफेद बालों का मिश्रण (खिचड़ी बाल)", context: "Mature hair color" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day49_exmp_001", english: "He is tall and athletic, with wavy dark hair and a warm, approachable smile.", hindi: "वह लंबा और कसरती बदन वाला है, उसके बाल लहराते काले हैं और उसकी मुस्कान गर्मजोशी भरी है।" },
      { id: "day49_exmp_002", english: "She wore a tailored navy blazer over a crisp pair of beige trousers.", hindi: "उसने बेज रंग की पतलून के ऊपर एक फिटेड नेवी ब्लेज़र पहना हुआ था।" },
      { id: "day49_exmp_003", english: "Our new manager is extremely charismatic, articulate, and pragmatic.", hindi: "हमारे नए प्रबंधक बेहद प्रभावशाली व्यक्तित्व वाले, स्पष्ट वक्ता और व्यावहारिक हैं।" },
      { id: "day49_exmp_004", english: "He has salt-and-pepper hair, a clean-shaven jaw, and sharp blue eyes.", hindi: "उसके खिचड़ी (काले-सफेद) बाल, साफ शेव की हुई ठुड्डी और तीखी नीली आँखें हैं।" },
      { id: "day49_exmp_005", english: "The dress code for the corporate conference is strictly business formal.", hindi: "कॉर्पोरेट सम्मेलन के लिए ड्रेस कोड पूरी तरह से औपचारिक व्यावसायिक (बिजनेस फॉर्मल) है।" },
      { id: "day49_exmp_006", english: "Despite his massive wealth, he remains exceptionally humble and down-to-earth.", hindi: "अपनी अपार दौलत के बावजूद, वह असाधारण रूप से विनम्र और जमीन से जुड़े हुए हैं।" },
      { id: "day49_exmp_007", english: "She has an olive complexion and delicate dimples on both cheeks.", hindi: "उसकी त्वचा का रंग गेहुंआ है और उसके दोनों गालों पर प्यारे डिंपल पड़ते हैं।" },
      { id: "day49_exmp_008", english: "He bought two new pairs of trousers and a silk tie for the gala dinner.", hindi: "उसने गाला डिनर के लिए दो जोड़ी नई पतलून और एक रेशमी टाई खरीदी।" },
      { id: "day49_exmp_009", english: "She is a conscientious employee who never misses a project deadline.", hindi: "वह एक कर्तव्यनिष्ठ कर्मचारी हैं जो कभी भी प्रोजेक्ट की समय सीमा नहीं चूकती हैं।" },
      { id: "day49_exmp_010", english: "He wore a casual denim jacket over a comfortable grey cashmere sweater.", hindi: "उसने एक आरामदायक धूसर कश्मीरी स्वेटर के ऊपर एक कैजुअल डेनिम जैकेट पहनी थी।" },
      { id: "day49_exmp_011", english: "The witness described the suspect as stocky, middle-aged, with a receding hairline.", hindi: "गवाह ने संदिग्ध का वर्णन गठीले शरीर वाले, मध्यम आयु वर्ग और झड़ते बालों वाले व्यक्ति के रूप में किया।" },
      { id: "day49_exmp_012", english: "I need to clean my glasses because the lenses are smudged with fingerprints.", hindi: "मुझे अपने चश्मे को साफ करना है क्योंकि लेंस पर उंगलियों के निशान पड़ गए हैं।" }
    ]
  },
  pronunciation: {
    focusSound: "French & Latin Loanwords in Appearance: 'Conscientious' (/ˌkɒn.ʃiˈen.ʃəs/), 'Petite' (/pəˈtiːt/), 'Trousers' (/ˈtraʊ.zəz/)",
    phoneticNotes: "In 'conscientious', note the two sh-sounds (/ʃ/). In 'petite', stress is on the second syllable with a long /iː/ sound (/pəˈtiːt/).",
    minimalPairs: [
      { wordA: "Pants", ipaA: "/pænts/", wordB: "Pence", ipaB: "/pens/" },
      { wordA: "Stubble", ipaA: "/ˈstʌb.əl/", wordB: "Stumble", ipaB: "/ˈstʌm.bəl/" },
      { wordA: "Blonde", ipaA: "/blɒnd/", wordB: "Blend", ipaB: "/blend/" },
      { wordA: "Chic", ipaA: "/ʃiːk/", wordB: "Chick", ipaB: "/tʃɪk/" }
    ],
    drills: [
      { sentence: "The conscientious researcher wore a tailored tweed suit.", focus: "Sh-sound in conscientious" },
      { sentence: "She has petite facial features and a radiant complexion.", focus: "Stress in petite (/pəˈtiːt/) and complexion" },
      { sentence: "He bought a new pair of trousers for the conference.", focus: "Diphthong /aʊ/ in trousers" },
      { sentence: "The articulate diplomat was exceptionally charismatic.", focus: "Polysyllabic cadence in charismatic and articulate" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day49_ex_001",
        type: "multiple_choice",
        question: "How should you correctly describe buying one unit of bifurcated legwear?",
        options: ["I bought a pant.", "I bought a pair of pants / trousers.", "I bought one pants.", "I bought a trouser."],
        correctAnswer: "I bought a pair of pants / trousers.",
        explanation: "'Pants' and 'trousers' are pluralia tantum nouns and take 'a pair of'."
      },
      {
        id: "day49_ex_002",
        type: "fill_in_the_blank",
        question: "He is very hard-working and careful; he is a truly ______ employee.",
        correctAnswer: "conscientious",
        explanation: "'Conscientious' means dedicated, honest, and meticulous."
      },
      {
        id: "day49_ex_003",
        type: "error_correction",
        sentence: "She is having long wavy hair and brown eyes.",
        correctAnswer: "She has long wavy hair and brown eyes.",
        explanation: "Use Simple Present ('has') for permanent physical traits."
      },
      {
        id: "day49_ex_004",
        type: "translation_hi_en",
        hindiSentence: "वह एक आकर्षक और स्पष्ट वक्ता हैं जो अपनी बात बहुत अच्छे से रखते हैं।",
        englishSentence: "He is a charismatic and articulate speaker who expresses himself very well.",
        targetVocabulary: ["charismatic", "articulate", "expresses"]
      },
      {
        id: "day49_ex_005",
        type: "matching",
        prompt: "Match the personality adjectives with their definitions:",
        pairs: [
          { left: "Pragmatic", right: "Dealing with problems practically rather than theoretically" },
          { left: "Articulate", right: "Able to express thoughts clearly and effectively" },
          { left: "Empathetic", right: "Showing understanding of other people's feelings" },
          { left: "Charismatic", right: "Possessing an inspiring and magnetic personal charm" }
        ]
      },
      {
        id: "day49_ex_006",
        type: "sentence_ordering",
        scrambledWords: ["wore", "linen", "He", "trousers", "crisp", "shirt", "and", "a", "beige"],
        correctSentence: "He wore a crisp linen shirt and beige trousers.",
        explanation: "Subject ('He') + Verb ('wore') + Compound Object ('a crisp linen shirt and beige trousers')."
      },
      {
        id: "day49_ex_007",
        type: "multiple_choice",
        question: "What does 'salt-and-pepper hair' mean?",
        options: ["Dyed bright white", "A mix of black/dark and grey/white hair", "Spicy food in hair", "Extremely curly afro hair"],
        correctAnswer: "A mix of black/dark and grey/white hair",
        explanation: "'Salt-and-pepper' describes hair that is an attractive mixture of dark and white/grey."
      },
      {
        id: "day49_ex_008",
        type: "sentence_building",
        prompt: "State that the manager has an athletic build and short curly hair.",
        targetWords: ["The", "manager", "has", "an", "athletic", "build", "and", "short", "curly", "hair", "."],
        correctSentence: "The manager has an athletic build and short curly hair."
      },
      {
        id: "day49_ex_009",
        type: "translation_en_hi",
        englishSentence: "She wore a petite cashmere cardigan over her silk blouse.",
        hindiSentence: "उसने अपने रेशमी ब्लाउज के ऊपर एक छोटा नाजुक कश्मीरी कार्डिगन पहना था।"
      },
      {
        id: "day49_ex_010",
        type: "listening_comprehension",
        audioText: "The candidate was described as highly articulate, pragmatic in problem-solving, and impeccably dressed.",
        question: "How was the candidate described?",
        options: ["Arrogant and untidy", "Highly articulate, pragmatic, and impeccably dressed", "Shy and quiet", "Aggressive"],
        correctAnswer: "Highly articulate, pragmatic, and impeccably dressed",
        explanation: "The audio specifies 'articulate, pragmatic, and impeccably dressed'."
      },
      {
        id: "day49_ex_011",
        type: "dictation",
        spokenText: "He bought a new pair of trousers for the conference.",
        correctText: "He bought a new pair of trousers for the conference."
      },
      {
        id: "day49_ex_012",
        type: "dialogue_completion",
        dialogueContext: "Interviewer: 'What is your greatest interpersonal strength?' | Candidate: 'I am an ______ listener and deeply empathetic to team needs.'",
        options: ["attentive", "allergic", "endangered", "overcast"],
        correctAnswer: "attentive",
        explanation: "'Attentive' fits interpersonal listening skills."
      },
      {
        id: "day49_ex_013",
        type: "speaking_pronunciation",
        targetText: "The charismatic leader had an articulate and conscientious manner.",
        phoneticFocus: "Pronunciation of 'charismatic' /ˌkær.ɪzˈmæt.ɪk/ and 'conscientious' /ˌkɒn.ʃiˈen.ʃəs/"
      },
      {
        id: "day49_ex_014",
        type: "active_recall",
        prompt: "Why is '*I bought a new pant*' incorrect in English?",
        correctAnswer: "Because legwear is a plural noun (pluralia tantum). You must say 'a pair of pants' or 'a pair of trousers'.",
        explanation: "Explains grammatical pluralia tantum category."
      },
      {
        id: "day49_ex_015",
        type: "applied_scenario",
        scenario: "You are describing a prospective business partner. Mention that they are practical, articulate, and well-dressed.",
        correctAnswer: "She is an articulate, pragmatic professional who is always impeccably dressed in business attire.",
        explanation: "Professional, elegant, and accurate description."
      },
      {
        id: "day49_ex_016",
        type: "multiple_choice",
        question: "Which word describes a person who has a small, delicate, and slender frame?",
        options: ["Stocky", "Petite", "Obese", "Towering"],
        correctAnswer: "Petite",
        explanation: "'Petite' refers to a small, slender, delicate female build."
      },
      {
        id: "day49_ex_017",
        type: "fill_in_the_blank",
        question: "He sported light five o'clock ______ along his jawline.",
        correctAnswer: "stubble",
        explanation: "'Stubble' refers to short, bristly facial hair."
      },
      {
        id: "day49_ex_018",
        type: "error_correction",
        sentence: "He is having fair complexion and green eyes.",
        correctAnswer: "He has a fair complexion and green eyes.",
        explanation: "Use simple present 'has' for permanent features."
      },
      {
        id: "day49_ex_019",
        type: "translation_hi_en",
        hindiSentence: "समारोह के लिए ड्रेस कोड 'स्मार्ट कैजुअल' निर्धारित किया गया है।",
        englishSentence: "The dress code for the function is designated as smart casual.",
        targetVocabulary: ["dress code", "designated", "smart casual"]
      },
      {
        id: "day49_ex_020",
        type: "matching",
        prompt: "Match the clothing items with their material/style descriptions:",
        pairs: [
          { left: "Cashmere", right: "Luxuriously soft wool from goats" },
          { left: "Linen", right: "Lightweight, breathable flax fabric ideal for summer" },
          { left: "Denim", right: "Sturdy cotton twill used for jeans and jackets" },
          { left: "Silk", right: "Smooth, lustrous natural protein fiber" }
        ]
      },
      {
        id: "day49_ex_021",
        type: "multiple_choice",
        question: "What does it mean if someone is 'down-to-earth'?",
        options: ["Lying on the floor", "Humble, practical, and unpretentious", "Extremely clumsy", "Interested in geology"],
        correctAnswer: "Humble, practical, and unpretentious",
        explanation: "'Down-to-earth' is an idiom for humble, realistic, and unpretentious."
      },
      {
        id: "day49_ex_022",
        type: "sentence_ordering",
        scrambledWords: ["dimples", "smiles", "She", "has", "when", "she", "charming"],
        correctSentence: "She has charming dimples when she smiles.",
        explanation: "Subject ('She') + Verb ('has') + Object ('charming dimples') + Subordinate clause ('when she smiles')."
      },
      {
        id: "day49_ex_023",
        type: "fill_in_the_blank",
        question: "He has a receding ______ that gives him a distinguished mature look.",
        correctAnswer: "hairline",
        explanation: "A 'receding hairline' refers to hair thinning back from the forehead."
      },
      {
        id: "day49_ex_024",
        type: "sentence_building",
        prompt: "State that the diplomat was remarkably articulate and composed under pressure.",
        targetWords: ["The", "diplomat", "was", "remarkably", "articulate", "and", "composed", "under", "pressure", "."],
        correctSentence: "The diplomat was remarkably articulate and composed under pressure."
      },
      {
        id: "day49_ex_025",
        type: "translation_en_hi",
        englishSentence: "He wore dark sunglasses to protect his eyes from the glare.",
        hindiSentence: "उसने अपनी आंखों को चकाचौंध से बचाने के लिए गहरे रंग का धूप का चश्मा पहना था।"
      },
      {
        id: "day49_ex_026",
        type: "multiple_choice",
        question: "Which of the following refers to a person who is practical and realistic?",
        options: ["Pragmatic", "Dogmatic", "Erratic", "Dramatic"],
        correctAnswer: "Pragmatic",
        explanation: "'Pragmatic' means practical and realistic."
      },
      {
        id: "day49_ex_027",
        type: "error_correction",
        sentence: "I forgot my specs in the meeting room.",
        correctAnswer: "I forgot my glasses in the meeting room.",
        explanation: "Use standard 'glasses' or 'spectacles' in professional English."
      },
      {
        id: "day49_ex_028",
        type: "listening_comprehension",
        audioText: "She walked into the room wearing an elegant emerald evening gown with matching pearl accessories.",
        question: "What was she wearing?",
        options: ["A denim jacket and shorts", "An elegant emerald evening gown with pearl accessories", "A grey business suit", "A linen apron"],
        correctAnswer: "An elegant emerald evening gown with pearl accessories",
        explanation: "The audio explicitly mentions the emerald evening gown and pearl accessories."
      },
      {
        id: "day49_ex_029",
        type: "dictation",
        spokenText: "She has an olive complexion and dark wavy hair.",
        correctText: "She has an olive complexion and dark wavy hair."
      },
      {
        id: "day49_ex_030",
        type: "applied_scenario",
        scenario: "You are writing a professional reference letter. Describe a colleague as honest, hardworking, and articulate.",
        correctAnswer: "He is a conscientious, hardworking professional who communicates in a highly articulate manner.",
        explanation: "Formal, glowing, and grammatically precise recommendation."
      },
      {
        id: "day49_ex_031",
        type: "multiple_choice",
        question: "What is the correct adjective order in English?",
        options: [
          "Opinion, Size, Age, Shape, Color, Origin, Material",
          "Color, Material, Shape, Size, Age, Opinion",
          "Material, Origin, Color, Shape, Size, Opinion",
          "Age, Size, Color, Material, Origin, Shape"
        ],
        correctAnswer: "Opinion, Size, Age, Shape, Color, Origin, Material",
        explanation: "OSASCOM is the established grammatical order for multiple adjectives."
      },
      {
        id: "day49_ex_032",
        type: "fill_in_the_blank",
        question: "The actor wore a tailored three-piece ______ for the awards ceremony.",
        correctAnswer: "suit",
        explanation: "A 'three-piece suit' consists of jacket, trousers, and waistcoat."
      },
      {
        id: "day49_ex_033",
        type: "translation_hi_en",
        hindiSentence: "वह बहुत मिलनसार और दयालु स्वभाव की महिला हैं।",
        englishSentence: "She is a very gregarious and warm-hearted woman.",
        targetVocabulary: ["gregarious", "warm-hearted", "woman"]
      },
      {
        id: "day49_ex_034",
        type: "sentence_building",
        prompt: "Express that he is tall, broad-shouldered, and well-groomed.",
        targetWords: ["He", "is", "tall", ",", "broad-shouldered", ",", "and", "well-groomed", "."],
        correctSentence: "He is tall, broad-shouldered, and well-groomed."
      },
      {
        id: "day49_ex_035",
        type: "mixed_retrieval",
        question: "Identify the sentence that has zero grammatical or stylistic errors:",
        options: [
          "He bought a new pant and he is having black eyes.",
          "He wore a new pair of trousers and has sharp, observant black eyes.",
          "She forgot her specs and she is having blonde hairs.",
          "He is very down-to-earth person who wears a pant."
        ],
        correctAnswer: "He wore a new pair of trousers and has sharp, observant black eyes.",
        explanation: "Accurately uses 'pair of trousers', stative 'has', and proper adjective modification."
      }
    ]
  },
  use: {
    dialogue: {
      title: "Describing a Keynote Speaker",
      context: "Two event organizers (Meera and Aaron) discuss an incoming guest speaker at an international conference.",
      characters: ["Meera", "Aaron"],
      lines: [
        { speaker: "Meera", text: "Have you met Dr. Thornton, our keynote speaker for this afternoon?", hindi: "क्या आप आज दोपहर के हमारे मुख्य वक्ता डॉ. थॉर्नटन से मिले हैं?" },
        { speaker: "Aaron", text: "Not yet. How will I recognize her in the crowded executive lounge?", hindi: "अभी तक नहीं। मैं उन्हें भीड़-भाड़ वाले लाउंज में कैसे पहचानूँगा?" },
        { speaker: "Meera", text: "She is tall and has an athletic build, with short salt-and-pepper hair and an olive complexion.", hindi: "वह लंबी हैं और उनका शरीर कसरती है, उनके छोटे खिचड़ी बाल हैं और त्वचा का रंग गेहुंआ है।" },
        { speaker: "Aaron", text: "What is she wearing today?", hindi: "उन्होंने आज क्या पहना हुआ है?" },
        { speaker: "Meera", text: "She is dressed in sharp business formal—a tailored charcoal blazer with matching trousers and tortoiseshell glasses.", hindi: "उन्होंने आकर्षक फॉर्मल सूट पहना है—चारकोल ब्लेज़र, मैचिंग पतलून और कछुए की खाल के डिजाइन वाला चश्मा।" },
        { speaker: "Aaron", text: "Wonderful. And how is her presentation style?", hindi: "बहुत बढ़िया। और उनकी प्रस्तुति शैली कैसी है?" },
        { speaker: "Meera", text: "She is exceptionally charismatic and articulate, with a very pragmatic, down-to-earth demeanor.", hindi: "वह असाधारण रूप से प्रभावशाली और स्पष्ट वक्ता हैं, और उनका स्वभाव बहुत व्यावहारिक व विनम्र है।" }
      ]
    },
    speakingPrompt: {
      situation: "Describe a person you deeply admire, covering their appearance, typical attire, and core personality traits.",
      prompts: [
        "What does this person look like (height, build, facial features, hair)?",
        "What style of clothing do they typically wear (smart casual, formal, traditional)?",
        "What 3 key personality traits define their character (e.g., conscientious, articulate, empathetic)?"
      ],
      targetExpressions: ["has an athletic / slender build", "wears tailored trousers", "articulate and pragmatic", "warm complexion", "down-to-earth"]
    },
    roleplay: {
      scenario: "Introducing a distinguished colleague at an award ceremony.",
      roleA: "Master of Ceremonies introducing an honoree by highlighting their charismatic leadership, conscientious work ethic, and presence.",
      roleB: "Honoree delivering a gracious, articulate acceptance response reflecting their humble and down-to-earth demeanor.",
      sampleDialogue: "MC: 'It is our privilege to honor a leader renowned for her articulate vision, pragmatic problem-solving, and conscientious mentorship.' | Honoree: 'I am deeply humbled by this generous recognition from my esteemed colleagues.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day49_bm_001",
        title: "Holistic Physical & Personality Characterization",
        prompt: "Write a 4-sentence character portrait describing a professional including their build, facial traits, clothing, and two key personality traits.",
        sampleAnswerEn: "Julian is a tall, athletic individual with an olive complexion, high cheekbones, and short wavy dark hair. He typically dresses in smart casual attire, favoring crisp linen shirts paired with tailored beige trousers. Professionally, he is recognized for being exceptionally articulate and conscientious in his research. Despite his numerous achievements, he maintains a remarkably humble and down-to-earth demeanor.",
        sampleAnswerHi: "जूलियन एक लंबा, कसरती व्यक्ति है जिसकी त्वचा गेहुंआ, गालों की हड्डियाँ उभरी हुई और छोटे लहराते काले बाल हैं। वह आमतौर पर स्मार्ट कैजुअल कपड़े पहनता है, जिसमें साफ लिनन शर्ट और बेज रंग की पतलून शामिल है। वह अपने शोध में असाधारण रूप से स्पष्ट वक्ता और कर्तव्यनिष्ठ होने के लिए जाने जाते हैं। अपनी अनेक उपलब्धियों के बावजूद, वह अत्यंत विनम्र और जमीन से जुड़े हुए हैं।",
        evaluationCriteria: "Comprehensive integration of anatomical descriptors, sartorial terms ('smart casual', 'tailored trousers'), and personality adjectives ('articulate', 'conscientious', 'down-to-earth')."
      },
      {
        id: "day49_bm_002",
        title: "Sartorial Dress Code & Material Formulation",
        prompt: "Draft 2-3 sentences explaining the attire requirements for a corporate gala, referencing specific garments, fabric textures, and accessories.",
        sampleAnswerEn: "The annual corporate gala requires business formal attire. Gentlemen are expected to wear dark woollen suits or tailored dinner jackets with silk bow ties. Ladies may wear elegant cocktail dresses or sharp trouser suits complemented by subtle accessories and formal footwear.",
        sampleAnswerHi: "वार्षिक कॉर्पोरेट गाला के लिए बिजनेस फॉर्मल पोशाक अनिवार्य है। पुरुषों से अपेक्षा की जाती है कि वे डार्क वूलन सूट या सिल्क बो टाई के साथ डिनर जैकेट पहनें। महिलाएं सुरुचिपूर्ण कॉकटेल ड्रेस या ट्राउजर सूट पहन सकती हैं।",
        evaluationCriteria: "Correct sartorial register ('business formal', 'tailored dinner jackets', 'trouser suits', 'silk')."
      },
      {
        id: "day49_bm_003",
        title: "L1 Appearance & Attire Remediation",
        prompt: "Correct and explain all errors in: '*He bought one pant and he is having black hair and specs.*'",
        sampleAnswerEn: "Correction: 'He bought a pair of pants (or trousers), and he has black hair and wears glasses.' Explanation: 1. 'Pant' is a plural noun (pluralia tantum); say 'a pair of pants' or 'a pair of trousers'. 2. Permanent bodily features require Simple Present ('he has black hair'), not present continuous ('is having'). 3. 'Hair' when referring to the entire scalp is uncountable; do not pluralize. 4. In standard English, replace slang 'specs' with 'glasses' or 'spectacles'.",
        sampleAnswerHi: "सुधार: 'He bought a pair of pants (or trousers), and he has black hair and wears glasses.' व्याख्या: 1. 'Pant' हमेशा बहुवचन होता है; 'a pair of pants' या 'trousers' कहें। 2. स्थायी शारीरिक विशेषताओं के लिए Simple Present ('has') का प्रयोग करें। 3. 'Specs' बोलचाल की भाषा है; मानक अंग्रेजी में 'glasses' या 'spectacles' का उपयोग करें।",
        evaluationCriteria: "Full identification and grammatical correction of pluralia tantum, stative aspect, uncountable noun, and lexical register."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "Why can't you say '*I bought a new pant*'?", a: "Because pants/trousers are bifurcated garments (pluralia tantum) and must be quantified as 'a pair of pants/trousers'." },
      { q: "What is the correct way to say '*She is having brown eyes*'?", a: "'She has brown eyes' (use simple present for permanent features)." },
      { q: "What does 'conscientious' mean?", a: "Dedicated, diligent, and careful to do one's work thoroughly and honestly." },
      { q: "What does 'articulate' mean when describing a speaker?", a: "Able to express thoughts and ideas clearly, fluently, and effectively." }
    ],
    spacedTips: [
      "Tip 1: Remember the adjective order: Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material (OSASCOM).",
      "Tip 2: Never use '*she is having*' for eye color, skin tone, or hair type; always use simple 'she has'."
    ]
  }
};

// DAY 50: STAGE 5 CUMULATIVE MASTERY REVIEW (Comprehensive Synthesis of Days 41–49)
const day50 = {
  dayNumber: 50,
  id: "day_50",
  titleEn: "Stage 5 Cumulative Mastery Review",
  titleHi: "चरण 5 संचयी प्रवीणता समीक्षा (दिन 41-49 समग्र पुनरावलोकन)",
  cefr: "A2.2",
  estMinutes: 45,
  prerequisites: "Days 41–49 (Complete Stage 5 Curriculum)",
  objectivesEn: [
    "Synthesize comprehensive mastery across all Stage 5 thematic domains: Living Spaces, Urban Transit, Consumer Shopping, Higher Education, Clinical Consultations, Pharmacy & Diagnostics, Meteorology & Environment, Zoology, and Human Characterization.",
    "Execute flawless grammatical structures: Spatial prepositions, Impersonal weather 'it', Pluralia tantum garments, Faunal collective nouns, Duration 'for/since', and Stative vs Dynamic aspects.",
    "Eradicate all major L1 Hindi-to-English linguistic interference traps across the 9 specialized Stage 5 real-world domains.",
    "Demonstrate conversational fluency, situational roleplay, and professional written competence across complex social, academic, commercial, and medical scenarios."
  ],
  objectivesHi: [
    "चरण 5 के सभी 9 विषयों (गृह व वास्तुकला, शहरी परिवहन, खरीदारी, उच्च शिक्षा, चिकित्सीय परामर्श, फार्मेसी, मौसम व पर्यावरण, प्राणी जगत, व्यक्तित्व व पहनावा) पर समग्र महारत साबित करना।",
    "व्याकरण के जटिल नियमों (स्थानवाचक Prepositions, Impersonal 'it', Pluralia tantum, Faunal collective nouns, Duration Tenses) का त्रुटिहीन प्रयोग करना।",
    "चरण 5 के सभी नौ डोमेन में हिंदी भाषी शिक्षार्थियों द्वारा की जाने वाली सभी प्रमुख भाषाई गलतियों (Traps) को पूरी तरह समाप्त करना।",
    "सामाजिक, अकादमिक, व्यावसायिक और चिकित्सीय परिस्थितियों में उच्च स्तरीय मौखिक और लिखित प्रवाह प्रदर्शित करना।"
  ],
  teach: {
    hindiExplanation: "बधाई हो! आज दिन 50 पर आप चरण 5 (Stage 5) की समग्र प्रवीणता समीक्षा (Cumulative Mastery Review) में पहुँच चुके हैं। यह दिन 41 से 49 तक सीखी गई सभी अवधारणाओं का अंतिम और संपूर्ण परीक्षण है।\n\nआइए सभी 9 विषयों के मुख्य बिंदुओं का त्वरित पुनरावलोकन करें:\n1. Day 41 (Living Spaces): 'Spacious layout', 'Penthouse terrace', 'Balcony overlooking', 'Furnished vs Unfurnished'। (Trap: '*hall*' vs 'living room')।\n2. Day 42 (City Transit): 'Take the subway', 'Transfer at junction', 'Board the express bus', 'Alight from train'। (Trap: '*give side*' vs 'excuse me / let me pass')।\n3. Day 43 (Shopping): 'Browse aisles', 'Return policy', 'Fitting room', 'Original receipt', 'Defective refund'। (Trap: '*costly*' vs 'expensive', '*exchange policy*')।\n4. Day 44 (Higher Education): 'Undergraduate major', 'Tuition fees', 'Syllabus prerequisite', 'Submit thesis'। (Trap: '*passed out*' vs 'graduated', '*taking exam*' vs 'sitting for / taking an exam')।\n5. Day 45 (Medical Symptoms): 'Throbbing headache', 'Dull ache', 'Nauseous', 'Congested', 'Take twice daily'। (Trap: '*loose motions*' vs 'diarrhea', '*vomiting is coming*' vs 'feel nauseous')।\n6. Day 46 (Pharmacy & Diagnostics): 'Fill a prescription', 'Over-the-counter', 'Cardiologist', 'Pediatrician', 'Fast for blood test'। (Trap: '*medical store*' vs 'pharmacy', '*child specialist*')।\n7. Day 47 (Weather & Climate): 'Overcast sky', 'Sweltering heat', 'Torrential downpour', 'Drought', 'Weather vs Climate'। (Trap: '*climate is good today*' vs 'weather is nice', misuse of '*too*')।\n8. Day 48 (Animal Kingdom): 'Apex predator', 'Prey upon', 'Pride of lions', 'School of fish', 'Endangered habitat'। (Trap: '*sheeps/deers*', homophone 'pray/prey')।\n9. Day 49 (Appearance & Attire): 'Athletic build', 'Olive complexion', 'Pair of trousers', 'Conscientious', 'Articulate'। (Trap: '*a pant*', '*specs*', '*having black hair*')।",
    englishExplanation: "Welcome to Day 50! This Stage 5 Cumulative Mastery Review serves as the capstone evaluation for the entire A2.2 Stage 5 production cycle.\n\nThis comprehensive synthesis verifies:\n1. Domain Fluency across 9 specialized sectors: Domestic Architecture, Urban Mobility, Retail Commerce, Tertiary Academia, Clinical Consultations, Pharmaceuticals & Diagnostics, Meteorology & Environmental Science, Zoology & Biodiversity, and Human Morphological & Psychological Characterization.\n2. Master Syntax Integration: Impersonal constructions, Pluralia tantum quantifiers, Prepositional collocation matrices, Faunal collective nouns, Stative present aspect, and Present Perfect Continuous durations.\n3. Complete Remediation of Subcontinental L1 Interference Traps: Replacing non-standard Indian English idioms across all nine modules with internationally recognized standard English expressions.\n4. Dual-Track Competency: Immediate active recall under pressure and contextual production across authentic real-world dialogues.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Stage 5 Grammatical Synthesis: Prepositions of Transit & Space",
        description: "Master precise transit prepositions: 'get on/off a bus/train/plane' vs 'get in/out of a car/taxi'; 'reside in an apartment on the third floor'.",
        register: "Spatial-Transit Syntax"
      },
      {
        ruleNumber: 2,
        title: "Stage 5 Stative vs Dynamic Verbal Constraints",
        description: "Permanent somatic features and ongoing states take simple present: 'She has green eyes' (NOT '*is having*'), while active clothing takes present continuous: 'She is wearing a blue dress'.",
        register: "Aspectual Hierarchy"
      },
      {
        ruleNumber: 3,
        title: "Stage 5 Pluralia Tantum and Irregular Faunal Plurals",
        description: "Bifurcated items are plural: 'trousers', 'glasses', 'scissors' ('a pair of...'). Faunal zero-plurals stay unchanged: 'sheep', 'deer', 'fish'.",
        register: "Morphological Precision"
      },
      {
        ruleNumber: 4,
        title: "Stage 5 Impersonal Weather and Clinical Duration",
        description: "Atmospheric states use dummy 'it' ('It is pouring'). Clinical duration uses Present Perfect Continuous with 'for/since' ('I have been coughing for three days').",
        register: "Impersonal & Aspectual Register"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Master Synthesis: Transit & Retail",
        formula: "Take [Transit Line] to [Transfer Station], then visit [Store] to return [Item] with the [Receipt].",
        exampleEn: "Take the Red Line to Central Station, then visit the electronics store to return the defective headset with the original receipt.",
        meaningHi: "रेड लाइन से सेंट्रल स्टेशन जाएं, फिर असली रसीद के साथ खराब हेडसेट वापस करने के लिए इलेक्ट्रॉनिक्स स्टोर पर जाएं।"
      },
      {
        subjectGroup: "Master Synthesis: Academic & Medical",
        formula: "After graduating in [Major], I consulted a [Specialist] because I had been experiencing [Symptom] for [Duration].",
        exampleEn: "After graduating in computer science, I consulted a dermatologist because I had been experiencing acute skin irritation for two weeks.",
        meaningHi: "कंप्यूटर साइंस में स्नातक करने के बाद, मैंने एक त्वचा विशेषज्ञ से परामर्श किया क्योंकि मुझे दो सप्ताह से त्वचा में तेज जलन हो रही थी।"
      },
      {
        subjectGroup: "Master Synthesis: Environment & Zoology",
        formula: "Due to [Climate Phenomenon: drought / heatwave], a [Faunal Collective] of [Animals] migrated across the [Habitat].",
        exampleEn: "Due to prolonged severe drought, a large herd of elephants migrated across the arid savannah.",
        meaningHi: "लंबे गंभीर सूखे के कारण, हाथियों का एक बड़ा झुंड शुष्क सवाना घास के मैदान के पार चला गया।"
      },
      {
        subjectGroup: "Master Synthesis: Human Characterization",
        formula: "[Subject] is a [Height / Build] professional with [Complexion] who is remarkably [Trait 1] and [Trait 2].",
        exampleEn: "Dr. Watson is an athletic physician with an olive complexion who is remarkably articulate and empathetic.",
        meaningHi: "डॉ. वॉटसन एक कसरती बदन वाले गेहुंआ रंग के चिकित्सक हैं जो असाधारण रूप से स्पष्ट वक्ता और सहानुभूतिशील हैं।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Stage 5 Master Remediation: The Complete 9-Domain Matrix",
      hindiPattern: "1. '*I passed out from university*' (Day 44)\n2. '*I am having loose motions and vomiting is coming*' (Day 45)\n3. '*I bought tablets from medical store*' (Day 46)\n4. '*Today climate is too good*' (Day 47)\n5. '*Sheeps and deers were praying in jungle*' (Day 48)\n6. '*He bought a new pant and wearing specs*' (Day 49)",
      potentialInterference: "Accumulated lexical false friends, incorrect prepositions, and grammatical interference patterns from Indian languages.",
      explanation: "Stage 5 equips learners to eliminate every single one of these non-standard constructions with absolute confidence.",
      naturalSolution: "1. 'I graduated from university' | 2. 'I have diarrhea and feel nauseous' | 3. 'I bought medicine at the pharmacy' | 4. 'The weather is very pleasant today' | 5. 'Sheep and deer were preying/grazing' | 6. 'He bought a pair of trousers and wears glasses.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day50_vocab_001", word: "Comprehensive", pos: "Adjective", ipa: "/ˌkɒm.prɪˈhen.sɪv/", meaningHi: "समग्र / विस्तृत एवं पूर्ण", exampleEn: "This final exam is a comprehensive assessment of Stage 5.", exampleHi: "यह अंतिम परीक्षा चरण 5 का एक समग्र मूल्यांकन है।" },
      { id: "day50_vocab_002", word: "Subway", pos: "Noun", ipa: "/ˈsʌb.weɪ/", meaningHi: "भूमिगत रेल / मेट्रो", exampleEn: "Commuters rely on the rapid subway network during peak rush hours.", exampleHi: "दैनिक यात्री व्यस्त समय के दौरान त्वरित मेट्रो नेटवर्क पर निर्भर रहते हैं।" },
      { id: "day50_vocab_003", word: "Refund", pos: "Noun / Verb", ipa: "/ˈriː.fʌnd/", meaningHi: "धनवापसी / पैसे वापस मिलना", exampleEn: "The store issued a full refund for the defective merchandise.", exampleHi: "स्टोर ने खराब माल के लिए पूरा पैसा वापस (रिफंड) कर दिया।" },
      { id: "day50_vocab_004", word: "Graduate", pos: "Verb / Noun", ipa: "/ˈɡrædʒ.u.eɪt/", meaningHi: "स्नातक की उपाधि प्राप्त करना", exampleEn: "She will graduate with honors in economics this spring.", exampleHi: "वह इस वसंत में अर्थशास्त्र में विशिष्ट योग्यता के साथ स्नातक की उपाधि प्राप्त करेंगी।" },
      { id: "day50_vocab_005", word: "Diarrhea", pos: "Noun", ipa: "/ˌdaɪ.əˈriː.ə/", meaningHi: "दस्त / पेट खराब होना", exampleEn: "Oral rehydration salts are recommended during acute diarrhea.", exampleHi: "तीव्र दस्त के दौरान ओआरएस के घोल की सिफारिश की जाती है।" },
      { id: "day50_vocab_006", word: "Pediatrician", pos: "Noun", ipa: "/ˌpiː.di.əˈtrɪʃ.ən/", meaningHi: "बाल रोग विशेषज्ञ (बच्चों के डॉक्टर)", exampleEn: "The pediatrician monitored the child's growth percentiles.", exampleHi: "बाल रोग विशेषज्ञ ने बच्चे के विकास के प्रतिशत की निगरानी की।" },
      { id: "day50_vocab_007", word: "Precipitation", pos: "Noun", ipa: "/prɪˌsɪp.ɪˈteɪ.ʃən/", meaningHi: "वर्षण (बारिश, बर्फबारी)", exampleEn: "Heavy precipitation flooded the low-lying farmlands.", exampleHi: "भारी वर्षण (बारिश) से निचले इलाकों के खेत जलमग्न हो गए।" },
      { id: "day50_vocab_008", word: "Sanctuary", pos: "Noun", ipa: "/ˈsæŋk.tʃʊə.ri/", meaningHi: "वन्यजीव अभयारण्य", exampleEn: "The wildlife sanctuary provides a safe haven for endangered species.", exampleHi: "वन्यजीव अभयारण्य लुप्तप्राय प्रजातियों के लिए एक सुरक्षित आश्रय प्रदान करता है।" },
      { id: "day50_vocab_009", word: "Conscientious", pos: "Adjective", ipa: "/ˌkɒn.ʃiˈen.ʃəs/", meaningHi: "कर्तव्यनिष्ठ / अत्यंत परिश्रमी व ईमानदार", exampleEn: "A conscientious attitude ensures professional excellence.", exampleHi: "एक कर्तव्यनिष्ठ दृष्टिकोण पेशेवर उत्कृष्टता सुनिश्चित करता है।" },
      { id: "day50_vocab_010", word: "Trousers", pos: "Noun (Plural)", ipa: "/ˈtraʊ.zəz/", meaningHi: "पतलून (हमेशा बहुवचन)", exampleEn: "He wore tailored woollen trousers with a silk necktie.", exampleHi: "उसने रेशमी टाई के साथ फिटेड ऊनी पतलून पहनी थी।" }
    ],
    spokenPhrases: [
      { id: "day50_phrase_001", phrase: "Stage 5 Mastery", meaningHi: "चरण 5 की पूर्ण प्रवीणता", context: "Curricular milestone" },
      { id: "day50_phrase_002", phrase: "Fill a prescription", meaningHi: "पर्चे की दवा प्राप्त करना", context: "Pharmacy communication" },
      { id: "day50_phrase_003", phrase: "A pride of lions", meaningHi: "शेरों का झुंड", context: "Zoological group term" },
      { id: "day50_phrase_004", phrase: "Smart casual attire", meaningHi: "शालीन अनौपचारिक पहनावा", context: "Sartorial standard" },
      { id: "day50_phrase_005", phrase: "Under the weather", meaningHi: "तबीयत थोड़ी खराब महसूस होना", context: "Health idiom" },
      { id: "day50_phrase_006", phrase: "Down-to-earth demeanor", meaningHi: "विनम्र और यथार्थवादी स्वभाव", context: "Character evaluation" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day50_exmp_001", english: "He transferred from the subway to the crosstown bus to reach the medical campus.", hindi: "मेडिकल कैंपस पहुँचने के लिए वह मेट्रो से बदलकर क्रॉस-टाउन बस में सवार हुआ।" },
      { id: "day50_exmp_002", english: "The store processed a refund for the defective laptop upon presenting the original receipt.", hindi: "असली रसीद प्रस्तुत करने पर स्टोर ने खराब लैपटॉप के लिए पैसे वापस (रिफंड) कर दिए।" },
      { id: "day50_exmp_003", english: "After she graduated from the university, she enrolled in an advanced postgraduate seminar.", hindi: "विश्वविद्यालय से स्नातक करने के बाद, उसने एक उन्नत स्नातकोत्तर संगोष्ठी में दाखिला लिया।" },
      { id: "day50_exmp_004", english: "I visited the pharmacy to fill the prescription written by our family pediatrician.", hindi: "मैं हमारे पारिवारिक बाल रोग विशेषज्ञ द्वारा लिखे गए पर्चे की दवा लेने फार्मेसी गया।" },
      { id: "day50_exmp_005", english: "The weather forecast warned of heavy precipitation and gale-force winds along the coastline.", hindi: "मौसम के पूर्वानुमान ने समुद्र तट के किनारे भारी बारिश और तेज आंधी की चेतावनी दी।" },
      { id: "day50_exmp_006", english: "A pride of lions stalked a herd of deer in the wildlife sanctuary.", hindi: "वन्यजीव अभयारण्य में शेरों के एक झुंड ने हिरणों के एक झुंड का पीछा किया।" },
      { id: "day50_exmp_007", english: "He is a charismatic and conscientious leader who always wears sharp business attire.", hindi: "वह एक प्रभावशाली और कर्तव्यनिष्ठ नेता हैं जो हमेशा शानदार फॉर्मल कपड़े पहनते हैं।" },
      { id: "day50_exmp_008", english: "She has an olive complexion and wore a tailored pair of trousers to the interview.", hindi: "उसकी त्वचा का रंग गेहुंआ है और उसने साक्षात्कार के लिए एक फिटेड पतलून पहनी थी।" },
      { id: "day50_exmp_009", english: "The physician advised the patient to stay hydrated and complete the full antibiotic course.", hindi: "चिकित्सक ने रोगी को पर्याप्त पानी पीने और एंटीबायोटिक दवाओं का पूरा कोर्स पूरा करने की सलाह दी।" },
      { id: "day50_exmp_010", english: "Deforestation destroys the natural habitats of countless endangered mammals and amphibians.", hindi: "वनों की कटाई अनगिनत लुप्तप्राय स्तनधारियों और उभयचरों के प्राकृतिक आवासों को नष्ट कर देती है।" },
      { id: "day50_exmp_011", english: "The apartment boasts a spacious open-concept living room and a balcony with panoramic city views.", hindi: "अपार्टमेंट में एक विशाल खुला लिविंग रूम और शहर के मनोरम दृश्यों वाली बालकनी है।" },
      { id: "day50_exmp_012", english: "Our team achieved complete mastery across all Stage 5 educational benchmarks.", hindi: "हमारी टीम ने चरण 5 के सभी शैक्षिक मानकों पर पूर्ण प्रवीणता हासिल की।" }
    ]
  },
  pronunciation: {
    focusSound: "Master Stage 5 Polysyllabic Rhythm & Intonation Synthesis",
    phoneticNotes: "Review stress across polysyllabic vocabulary: 'Pe-di-a-TRI-cian' (/ˌpiː.di.əˈtrɪʃ.ən/), 'Con-sci-EN-tious' (/ˌkɒn.ʃiˈen.ʃəs/), 'Pre-ci-pi-TA-tion' (/prɪˌsɪp.ɪˈteɪ.ʃən/), 'Cha-ris-MA-tic' (/ˌkær.ɪzˈmæt.ɪk/).",
    minimalPairs: [
      { wordA: "Prey", ipaA: "/preɪ/", wordB: "Pray", ipaB: "/preɪ/" },
      { wordA: "Drought", ipaA: "/draʊt/", wordB: "Draft", ipaB: "/drɑːft/" },
      { wordA: "Pants", ipaA: "/pænts/", wordB: "Pence", ipaB: "/pens/" },
      { wordA: "Breeze", ipaA: "/briːz/", wordB: "Freeze", ipaB: "/friːz/" }
    ],
    drills: [
      { sentence: "The conscientious pediatrician reviewed the diagnostic scan.", focus: "Polysyllabic cadence in conscientious and pediatrician" },
      { sentence: "The pride of lions preys on deer in the savannah.", focus: "Faunal collective noun and predation verb" },
      { sentence: "He bought a pair of trousers and a linen shirt for the gala.", focus: "Pluralia tantum 'pair of trousers'" },
      { sentence: "The weather forecast predicts heavy precipitation after the drought.", focus: "Stress rhythm in precipitation and drought" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day50_ex_001",
        type: "multiple_choice",
        question: "Which of the following sentences correctly expresses graduating from a university?",
        options: ["I passed out from Delhi University in 2022.", "I graduated from Delhi University in 2022.", "I passed away from Delhi University.", "I completed out of Delhi University."],
        correctAnswer: "I graduated from Delhi University in 2022.",
        explanation: "'Graduated from' is standard English. '*Passed out*' means lost consciousness (fainted)."
      },
      {
        id: "day50_ex_002",
        type: "fill_in_the_blank",
        question: "I need to visit the ______ to fill my antibiotic prescription.",
        correctAnswer: "pharmacy",
        explanation: "Medications are dispensed at a 'pharmacy' (or 'chemist')."
      },
      {
        id: "day50_ex_003",
        type: "error_correction",
        sentence: "Doctor, I am having loose motions and vomiting is coming from morning.",
        correctAnswer: "Doctor, I have had diarrhea and have been feeling nauseous since morning.",
        explanation: "Replaces '*loose motions*' with 'diarrhea', '*vomiting is coming*' with 'feeling nauseous', and uses present perfect."
      },
      {
        id: "day50_ex_004",
        type: "translation_hi_en",
        hindiSentence: "शेरों का एक झुंड राष्ट्रीय उद्यान में हिरणों का शिकार कर रहा था।",
        englishSentence: "A pride of lions was preying on deer in the national park.",
        targetVocabulary: ["pride of lions", "preying on", "deer"]
      },
      {
        id: "day50_ex_005",
        type: "matching",
        prompt: "Match the Stage 5 terms across all modules with their definitions:",
        pairs: [
          { left: "Pediatrician", right: "Medical doctor specializing in infant and child health" },
          { left: "Precipitation", right: "Any form of atmospheric moisture falling to earth (rain, snow, hail)" },
          { left: "Conscientious", right: "Diligent, thorough, and dedicated to duty" },
          { left: "Refund", right: "Repayment of funds to a customer for returned goods" }
        ]
      },
      {
        id: "day50_ex_006",
        type: "sentence_ordering",
        scrambledWords: ["trousers", "pair", "new", "He", "a", "of", "bought", "interview", "the", "for"],
        correctSentence: "He bought a new pair of trousers for the interview.",
        explanation: "Subject ('He') + Verb ('bought') + Object ('a new pair of trousers') + Prepositional phrase ('for the interview')."
      },
      {
        id: "day50_ex_007",
        type: "multiple_choice",
        question: "What is the collective noun for wolves and wild dogs?",
        options: ["Pride", "Pack", "School", "Herd"],
        correctAnswer: "Pack",
        explanation: "Wolves and wild canines form a 'pack'."
      },
      {
        id: "day50_ex_008",
        type: "sentence_building",
        prompt: "State that the weather forecast predicts heavy downpours for the weekend.",
        targetWords: ["The", "weather", "forecast", "predicts", "heavy", "downpours", "for", "the", "weekend", "."],
        correctSentence: "The weather forecast predicts heavy downpours for the weekend."
      },
      {
        id: "day50_ex_009",
        type: "translation_en_hi",
        englishSentence: "The dermatologist recommended a soothing ointment for the skin irritation.",
        hindiSentence: "त्वचा रोग विशेषज्ञ ने त्वचा की जलन के लिए एक आरामदायक मरहम की सिफारिश की।"
      },
      {
        id: "day50_ex_010",
        type: "listening_comprehension",
        audioText: "Passengers must transfer to Line 2 at Central Station to reach the university campus.",
        question: "Where must passengers transfer to Line 2?",
        options: ["Airport Terminal", "Central Station", "Market Square", "Harbor Port"],
        correctAnswer: "Central Station",
        explanation: "The audio specifies transferring at Central Station."
      },
      {
        id: "day50_ex_011",
        type: "dictation",
        spokenText: "The charismatic professor gave an articulate lecture on biodiversity.",
        correctText: "The charismatic professor gave an articulate lecture on biodiversity."
      },
      {
        id: "day50_ex_012",
        type: "dialogue_completion",
        dialogueContext: "Customer: 'Can I return this shirt without the receipt?' | Cashier: 'I'm afraid our return policy requires the ______ receipt for a full refund.'",
        options: ["original", "fake", "torn", "overcast"],
        correctAnswer: "original",
        explanation: "'Original receipt' is standard retail terminology."
      },
      {
        id: "day50_ex_013",
        type: "speaking_pronunciation",
        targetText: "The conscientious pediatrician reviewed the diagnostic MRI scan.",
        phoneticFocus: "Mastery of stress in 'conscientious', 'pediatrician', and 'diagnostic'"
      },
      {
        id: "day50_ex_014",
        type: "active_recall",
        prompt: "Why must you say 'The weather is pleasant today' instead of '*The climate is pleasant today*'?",
        correctAnswer: "'Weather' refers to the day-to-day atmospheric condition, while 'climate' refers to long-term regional patterns over decades.",
        explanation: "Strict scientific and lexical distinction between weather and climate."
      },
      {
        id: "day50_ex_015",
        type: "applied_scenario",
        scenario: "You need to return a defective pair of headphones at an electronics store. Present your case clearly and politely to customer service.",
        correctAnswer: "Hello, I purchased these headphones yesterday, but they are defective. Here is my original receipt; I would like a refund or replacement, please.",
        explanation: "Flawless consumer discourse incorporating 'defective', 'original receipt', and 'refund/replacement'."
      },
      {
        id: "day50_ex_016",
        type: "multiple_choice",
        question: "Which of the following refers to an animal that feeds exclusively on plants?",
        options: ["Carnivore", "Herbivore", "Omnivore", "Insectivore"],
        correctAnswer: "Herbivore",
        explanation: "Herbivores eat only vegetation."
      },
      {
        id: "day50_ex_017",
        type: "fill_in_the_blank",
        question: "The student submitted a formal request to waive the course ______.",
        correctAnswer: "prerequisite",
        explanation: "A 'prerequisite' is a mandatory required prior course."
      },
      {
        id: "day50_ex_018",
        type: "error_correction",
        sentence: "He went to medical store to buy a new pant and specs.",
        correctAnswer: "He went to the pharmacy to buy medication, and bought a new pair of trousers and glasses.",
        explanation: "Replaces '*medical store*' with 'pharmacy', '*a pant*' with 'a pair of trousers', and '*specs*' with 'glasses'."
      },
      {
        id: "day50_ex_019",
        type: "translation_hi_en",
        hindiSentence: "प्रवासी पक्षी सर्दियों के मौसम में इस आर्द्रभूमि अभयारण्य में आते हैं।",
        englishSentence: "Migratory birds visit this wetland sanctuary during the winter season.",
        targetVocabulary: ["migratory birds", "wetland sanctuary", "winter season"]
      },
      {
        id: "day50_ex_020",
        type: "matching",
        prompt: "Match the subcontinental errors with their standard English equivalents:",
        pairs: [
          { left: "Give side", right: "Excuse me / May I get past?" },
          { left: "Passed out in 2020", right: "Graduated in 2020" },
          { left: "Loose motions", right: "Diarrhea / Upset stomach" },
          { left: "One pant", right: "A pair of pants / trousers" }
        ]
      },
      {
        id: "day50_ex_021",
        type: "multiple_choice",
        question: "Which word means a sudden and severe lack of rainfall?",
        options: ["Drought", "Drizzle", "Downpour", "Blizzard"],
        correctAnswer: "Drought",
        explanation: "A 'drought' (/draʊt/) is a prolonged period of abnormally low rainfall."
      },
      {
        id: "day50_ex_022",
        type: "sentence_ordering",
        scrambledWords: ["graduated", "honors", "in", "She", "with", "engineering"],
        correctSentence: "She graduated with honors in engineering.",
        explanation: "Subject ('She') + Verb ('graduated') + Prepositional phrases ('with honors', 'in engineering')."
      },
      {
        id: "day50_ex_023",
        type: "fill_in_the_blank",
        question: "Patients must ______ for at least ten hours prior to the fasting glucose blood test.",
        correctAnswer: "fast",
        explanation: "'Fast' means refraining from consuming food."
      },
      {
        id: "day50_ex_024",
        type: "sentence_building",
        prompt: "State that the apartment features a spacious balcony overlooking the park.",
        targetWords: ["The", "apartment", "features", "a", "spacious", "balcony", "overlooking", "the", "park", "."],
        correctSentence: "The apartment features a spacious balcony overlooking the park."
      },
      {
        id: "day50_ex_025",
        type: "translation_en_hi",
        englishSentence: "She is an articulate, pragmatic manager who values teamwork and diligence.",
        hindiSentence: "वह एक स्पष्ट वक्ता, व्यावहारिक प्रबंधक हैं जो टीम वर्क और परिश्रम को महत्व देती हैं।"
      },
      {
        id: "day50_ex_026",
        type: "multiple_choice",
        question: "What is the standard phrase when asking someone to let you move past them on a crowded train?",
        options: ["Give side please!", "Side please mister!", "Excuse me, may I get past?", "Leave the side!"],
        correctAnswer: "Excuse me, may I get past?",
        explanation: "'Excuse me, may I get past?' is the polite global standard."
      },
      {
        id: "day50_ex_027",
        type: "error_correction",
        sentence: "Yesterday night it did heavy raining and the climate was sweltering.",
        correctAnswer: "Last night it rained heavily and the weather was sweltering.",
        explanation: "Replaces '*yesterday night*' with 'last night' and '*climate*' with 'weather'."
      },
      {
        id: "day50_ex_028",
        type: "listening_comprehension",
        audioText: "The orthopedist examined the X-ray and confirmed a hairline fracture in the right wrist.",
        question: "What did the orthopedist confirm on the X-ray?",
        options: ["No injury", "A hairline fracture in the right wrist", "A dislocated shoulder", "A torn muscle"],
        correctAnswer: "A hairline fracture in the right wrist",
        explanation: "The audio specifies a hairline fracture in the right wrist."
      },
      {
        id: "day50_ex_029",
        type: "dictation",
        spokenText: "A large herd of elephants was spotted near the river.",
        correctText: "A large herd of elephants was spotted near the river."
      },
      {
        id: "day50_ex_030",
        type: "applied_scenario",
        scenario: "You are describing your academic and career background during an interview. Mention when you graduated and your core professional traits.",
        correctAnswer: "I graduated from university with a degree in computer engineering in 2021. Since then, I have developed a reputation for being a conscientious, articulate, and pragmatic team player.",
        explanation: "Polished, professional, and grammatically flawless interview response."
      },
      {
        id: "day50_ex_031",
        type: "multiple_choice",
        question: "Which of the following is the correct plural form of 'deer'?",
        options: ["Deers", "Deer", "Deeres", "Doers"],
        correctAnswer: "Deer",
        explanation: "'Deer' is an irregular zero-plural noun."
      },
      {
        id: "day50_ex_032",
        type: "fill_in_the_blank",
        question: "The dress code for the evening awards ceremony is strictly business ______.",
        correctAnswer: "formal",
        explanation: "'Business formal' is the standard dress code designation."
      },
      {
        id: "day50_ex_033",
        type: "translation_hi_en",
        hindiSentence: "सख्त अवैध शिकार विरोधी कानूनों ने एक सींग वाले गैंडों को विलुप्त होने से बचाया है।",
        englishSentence: "Strict anti-poaching laws have saved the one-horned rhino from extinction.",
        targetVocabulary: ["strict anti-poaching laws", "saved", "extinction"]
      },
      {
        id: "day50_ex_034",
        type: "sentence_building",
        prompt: "Express that he is tall and athletic with a warm olive complexion.",
        targetWords: ["He", "is", "tall", "and", "athletic", "with", "a", "warm", "olive", "complexion", "."],
        correctSentence: "He is tall and athletic with a warm olive complexion."
      },
      {
        id: "day50_ex_035",
        type: "mixed_retrieval",
        question: "Identify the sentence that has ZERO grammatical, lexical, or cultural errors across all Stage 5 standards:",
        options: [
          "I passed out from college, bought a pant from medical store, and saw deers praying in the jungle.",
          "I graduated from college, bought a pair of trousers for the conference, and consulted a pediatrician about my child's symptoms.",
          "Today climate is too good so I took side from people on the train and having loose motions.",
          "The pride of lions were praying on sheeps during the cloudy climate."
        ],
        correctAnswer: "I graduated from college, bought a pair of trousers for the conference, and consulted a pediatrician about my child's symptoms.",
        explanation: "Master synthesis demonstrating complete mastery of Stage 5 vocabulary, grammar, and error remediation."
      }
    ]
  },
  use: {
    dialogue: {
      title: "Stage 5 Comprehensive Dialogue: A Busy Day in the Metropolis",
      context: "Arjun and Clara catch up at a city café after navigating several real-world tasks (transit, shopping, medical, academic).",
      characters: ["Arjun", "Clara"],
      lines: [
        { speaker: "Arjun", text: "Clara! It feels like ages. How has your week been?", hindi: "क्लारा! ऐसा लगता है जैसे एक अरसा हो गया। आपका सप्ताह कैसा रहा?" },
        { speaker: "Clara", text: "Extremely busy! I had to take the subway across town to return a defective tablet with my original receipt, and then I stopped by the pharmacy to pick up my mother's prescription.", hindi: "अत्यधिक व्यस्त! मुझे अपनी मूल रसीद के साथ एक खराब टैबलेट वापस करने के लिए मेट्रो से शहर के दूसरे छोर जाना पड़ा, और फिर मैं अपनी माँ के पर्चे की दवा लेने फार्मेसी रुकी।" },
        { speaker: "Arjun", text: "Did you consult a specialist for her recurring health issues?", hindi: "क्या आपने उनकी बार-बार होने वाली स्वास्थ्य समस्याओं के लिए किसी विशेषज्ञ से परामर्श किया?" },
        { speaker: "Clara", text: "Yes, our GP referred her to a renowned cardiologist, and fortunately her diagnostic test results were completely normal.", hindi: "हाँ, हमारे जीपी ने उन्हें एक प्रसिद्ध हृदय रोग विशेषज्ञ के पास भेजा, और सौभाग्य से उनकी नैदानिक परीक्षण रिपोर्ट पूरी तरह सामान्य थी।" },
        { speaker: "Arjun", text: "What a relief! And how are your academic plans progressing after graduating last summer?", hindi: "कितनी राहत की बात है! और पिछली गर्मियों में स्नातक करने के बाद आपकी शैक्षणिक योजनाएँ कैसी चल रही हैं?" },
        { speaker: "Clara", text: "I've been accepted into a postgraduate environmental science program focusing on wildlife conservation and wetland ecosystems. The weather forecast looks clear, so I'm heading to the sanctuary this weekend!", hindi: "मुझे वन्यजीव संरक्षण और आर्द्रभूमि पारिस्थितिकी तंत्र पर केंद्रित स्नातकोत्तर पर्यावरण विज्ञान कार्यक्रम में प्रवेश मिल गया है। मौसम का पूर्वानुमान साफ दिख रहा है, इसलिए मैं इस सप्ताहांत अभयारण्य जा रही हूँ!" }
      ]
    },
    speakingPrompt: {
      situation: "Deliver a comprehensive summary of your personal, academic, and daily life navigating a modern city.",
      prompts: [
        "How do you commute (transit, transfers) and what kind of living space do you reside in?",
        "Describe a recent consumer experience or academic milestone (shopping return, graduation).",
        "Describe someone you admire (appearance, attire, personality) and your perspective on nature and environmental protection."
      ],
      targetExpressions: ["take the subway / express bus", "graduated with honors", "original receipt & refund", "pragmatic & articulate", "wildlife sanctuary / biodiversity"]
    },
    roleplay: {
      scenario: "Stage 5 Capstone Oral Assessment: A Multi-Domain Panel Interview.",
      roleA: "Examiner evaluating candidate on city navigation, consumer rights, academic background, medical communication, and character descriptions.",
      roleB: "Candidate responding fluently across all 9 Stage 5 domains with zero L1 interference.",
      sampleDialogue: "Examiner: 'Could you explain how you would handle returning a defective electronic item, and what qualifications you completed at university?' | Candidate: 'Certainly. I would present the defective merchandise alongside the original invoice to request a full refund under the statutory warranty. Academically, I graduated with a degree in computer science...'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day50_bm_001",
        title: "Stage 5 Capstone Synthesis: Real-World Communication",
        prompt: "Compose a multi-domain narrative paragraph (5-6 sentences) incorporating: 1) Urban transit, 2) Academic background, 3) Medical consultation, 4) Environmental observation, and 5) Human characterization.",
        sampleAnswerEn: "After commuting via the rapid subway network to the central university campus, I met with my academic advisor to discuss my thesis on endangered wetland habitats. Having graduated with honors in environmental biology, I have always been passionate about biodiversity conservation. Later in the afternoon, I accompanied my mother to her appointment with a cardiologist, where the physician conducted a thorough diagnostic examination. The doctor was an articulate, conscientious professional with a warm, empathetic bedside manner. Outside, the sweltering afternoon gave way to a refreshing cool breeze, making the evening commute pleasant.",
        sampleAnswerHi: "केंद्रीय विश्वविद्यालय परिसर में त्वरित मेट्रो नेटवर्क के माध्यम से आने-जाने के बाद, मैं लुप्तप्राय आर्द्रभूमि आवासों पर अपनी थीसिस पर चर्चा करने के लिए अपने शैक्षणिक सलाहकार से मिला। पर्यावरण जीव विज्ञान में विशिष्ट योग्यता के साथ स्नातक होने के बाद, मैं हमेशा जैव विविधता संरक्षण के प्रति जुनूनी रहा हूँ। दोपहर में, मैं अपनी माँ के साथ एक हृदय रोग विशेषज्ञ के पास गया, जहाँ चिकित्सक ने पूरी जांच की। डॉक्टर एक स्पष्ट वक्ता, कर्तव्यनिष्ठ पेशेवर थे जिनका व्यवहार बहुत सहानुभूतिपूर्ण था। बाहर, भीषण गर्मी की जगह एक ताज़ा ठंडी हवा ने ले ली, जिससे शाम का सफर सुखद हो गया।",
        evaluationCriteria: "Flawless integration of 5 distinct Stage 5 domains with advanced vocabulary ('rapid subway', 'graduated with honors', 'cardiologist', 'articulate and conscientious', 'sweltering afternoon')."
      },
      {
        id: "day50_bm_002",
        title: "Stage 5 Master L1 Remediation Evaluation",
        prompt: "Identify, correct, and justify all errors in this multi-trap sentence: '*I passed out from college, bought one pant and specs from medical store, and the climate today is too good so I went to jungle to see deers praying.*'",
        sampleAnswerEn: "Correction: 'I graduated from college, bought a pair of trousers and glasses from the retail store (and picked up medication from the pharmacy), and the weather today is wonderfully pleasant, so I went to the forest to see deer grazing.' Explanation: 1. 'Passed out' means fainted; use 'graduated from'. 2. 'Pant' is pluralia tantum; use 'a pair of trousers/pants'. 3. Slang 'specs' should be 'glasses/spectacles'. 4. 'Medical store' should be 'pharmacy'. 5. 'Climate' represents multi-decade patterns; use 'weather' for today. 6. 'Too good' carries negative excess; use 'wonderfully pleasant'. 7. 'Deers' is an invalid plural; use zero-plural 'deer'. 8. 'Praying' is religious worship; use 'grazing' or 'preying upon'.",
        sampleAnswerHi: "सुधार: 'I graduated from college, bought a pair of trousers and glasses from the retail store (and picked up medication from the pharmacy), and the weather today is wonderfully pleasant, so I went to the forest to see deer grazing.' व्याख्या: 1. 'Passed out' का अर्थ बेहोश होना है; 'graduated from' कहें। 2. 'Pant' की जगह 'a pair of trousers' कहें। 3. 'Specs' की जगह 'glasses' लिखें। 4. 'Medical store' को 'pharmacy' में बदलें। 5. 'Climate' की जगह 'weather' का प्रयोग करें। 6. 'Too good' की जगह 'wonderfully pleasant' कहें। 7. 'Deers' की जगह 'deer' लिखें। 8. 'Praying' की जगह 'grazing' या 'preying' का प्रयोग करें।",
        evaluationCriteria: "Total eradication and clear grammatical/lexical justification for all eight subcontinental interference errors."
      },
      {
        id: "day50_bm_003",
        title: "Stage 5 Capstone Verification & Readiness",
        prompt: "Explain how Stage 5 elevates a learner's English from basic A2 survival to advanced A2.2 contextual fluency across society, science, commerce, and medicine.",
        sampleAnswerEn: "Stage 5 transforms learners from basic transactional speakers into confident, culturally and grammatically competent communicators. Across Days 41 to 50, learners acquire domain-specific terminology for domestic architecture, city transit, consumer rights, higher education, medical triage, pharmaceuticals, meteorology, zoology, and human characterization. Crucially, Stage 5 systematically deconstructs persistent subcontinental interference patterns, replacing colloquial Indianisms with standard international English collocations, thereby preparing learners for global academic, professional, and social interactions.",
        sampleAnswerHi: "चरण 5 शिक्षार्थियों को बुनियादी कामचलाऊ अंग्रेजी से आगे बढ़ाकर सामाजिक, वैज्ञानिक, वाणिज्यिक और चिकित्सीय क्षेत्रों में आत्मविश्वास से पूर्ण वैश्विक वक्ता बनाता है। दिन 41 से 50 के दौरान, शिक्षार्थी घर, परिवहन, खरीदारी, उच्च शिक्षा, डॉक्टर परामर्श, फार्मेसी, मौसम, प्राणी जगत और व्यक्तित्व से जुड़ी विशिष्ट शब्दावली सीखते हैं। सबसे महत्वपूर्ण बात यह है कि चरण 5 भारतीय बोलचाल की सभी पुरानी गलतियों (Traps) को पूरी तरह समाप्त करके मानक अंतरराष्ट्रीय अंग्रेजी स्थापित करता है।",
        evaluationCriteria: "In-depth pedagogical understanding of the linguistic transition from foundational A2 to refined A2.2 domain fluency."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "What are the 9 thematic domains mastered in Stage 5?", a: "1. Living Spaces, 2. City Transit, 3. Shopping & Returns, 4. Higher Education, 5. Medical Symptoms, 6. Pharmacy & Diagnostics, 7. Weather & Climate, 8. Zoology & Habitats, 9. Human Appearance & Character." },
      { q: "What is the key correction for '*passed out*', '*loose motions*', and '*medical store*'?", a: "'Graduated from', 'diarrhea / upset stomach', and 'pharmacy / chemist'." },
      { q: "What is the key correction for '*climate is good*' and '*a pant*'?", a: "'The weather is pleasant' and 'a pair of pants / trousers'." },
      { q: "What are the zero-plural animal forms?", a: "'Sheep', 'deer', 'fish' (they do not take '-s' in standard plural usage)." }
    ],
    spacedTips: [
      "Tip 1: Review your Stage 5 Mastery benchmarks regularly to reinforce standard international collocations.",
      "Tip 2: You have now officially conquered Stage 5 (Days 41–50)! You are fully prepared to advance into Stage 6 (Days 51–60: Professional, Career, Workplace, and B1 Bridge Mastery)."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day49.js'), `export const day49 = ${JSON.stringify(day49, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day49.js");

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day50.js'), `export const day50 = ${JSON.stringify(day50, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day50.js");
