import fs from 'fs';
import path from 'path';

// DAY 41: House, Architecture & Living Space Descriptors
const day41 = {
  dayNumber: 41,
  id: "day_41",
  titleEn: "House, Architecture & Living Space Descriptors",
  titleHi: "गृह, वास्तुकला एवं आवास विवरण",
  cefr: "A2.2",
  estMinutes: 40,
  prerequisites: "Stage 4 Mastery (Days 1–40: Interpersonal & Pragmatic Fluency)",
  objectivesEn: [
    "Describe structural features, layouts, rooms, and architectural styles of residential properties.",
    "Master residential leasing terminology including rent, lease, utilities, deposit, furnished/unfurnished, and landlord-tenant discourse.",
    "Use accurate spatial prepositions and dimensional adjectives (spacious, cramped, well-ventilated, compact, cozy) to describe homes.",
    "Discuss home maintenance, household fixtures, plumbing, and electrical amenities fluently.",
    "Eliminate common Hindi-English spatial traps such as '*living on rent*', '*attached bathroom*', and confusion between '*flat*' and '*apartment*'."
  ],
  objectivesHi: [
    "आवासीय भवनों की संरचना, कमरे, लेआउट और वास्तुकला की शैलियों का विस्तार से वर्णन करना।",
    "किराएदारी, लीज, उपयोगिता बिल (Utilities), सिक्योरिटी डिपॉजिट और फर्निशिंग से संबंधित शब्दावली में निपुण होना।",
    "स्थानिक पूर्वसर्गों (Prepositions) और आवास विशेषणों (Spacious, Cramped, Well-ventilated) का सही प्रयोग करना।",
    "घर के रखरखाव, प्लंबिंग, विद्युत फिटिंग और घरेलू सुविधाओं पर आत्मविश्वास से बातचीत करना।",
    "हिंदी से अनुवाद की त्रुटियों ('living on rent', 'attached bathroom') को दूर करना।"
  ],
  teach: {
    hindiExplanation: "स्टेज 5 में आपका स्वागत है! आज डे 41 में हम आवासीय परिसरों, वास्तुकला और घर के विवरण पर महारत हासिल करेंगे।\n\n1. आवास के प्रकार (Housing Types): 'Apartment' या 'Flat' (बहुमंजिला इमारत में फ्लैट), 'Independent House / Detached House' (अलग मकान), 'Duplex' (दो मंजिला मकान जिसमें अंदर सीढ़ियां हों), 'Studio Apartment / Studio Flat' (एक कमरे का फ्लैट जिसमें किचन और बेडरूम एक साथ हों)।\n2. आवासीय विशेषताएं (Living Space Descriptors): 'Spacious' (विशाल), 'Cramped / Congested' (तंग), 'Well-ventilated' (हवादार), 'Sunlit / Airy' (धूपदार/खुला), 'En-suite bathroom' (कमरे से सीधे जुड़ा बाथरूम, जिसे भारत में अक्सर 'attached bathroom' कहा जाता है)।\n3. किराए और अनुबंध के शब्द (Tenancy Terms): 'Lease agreement' (किराया अनुबंध), 'Security deposit' (जमानत राशि), 'Utilities' (बिजली, पानी, गैस के बिल), 'Furnished / Semi-furnished / Unfurnished'।\n4. रहने की स्थिति बताना: 'I rent an apartment' या 'I am currently renting' कहें, न कि '*I am living on rent*'।",
    englishExplanation: "Welcome to Stage 5! In Day 41, we master the functional and descriptive language required to depict houses, architectural structures, interior living spaces, and leasing transactions.\n\nKey architectural principles:\n1. Housing Classification: Distinguish between detached houses, semi-detached villas, condominiums/apartments, duplexes, and studio units.\n2. Spatial & Dimensional Adjectives: Utilizing nuanced sensory and dimensional vocabulary ('spacious', 'airy', 'cramped', 'well-insulated', 'sun-drenched') rather than generic words like 'big' or 'small'.\n3. Tenancy & Real Estate Discourse: Mastering professional terminology such as 'security deposit', 'lease term', 'utilities included', 'landlord/tenant', and 'furnished'.\n4. Spatial Prepositions & Layout Mapping: Expressing exact topological relationships ('adjacent to the corridor', 'overlooking the courtyard', 'tucked away in the corner').",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Spatial Prepositional Collocations for Real Estate",
        description: "Use 'overlooking' for views ('a balcony overlooking the garden'), 'adjacent to' for side-by-side positioning, and 'situated on / in' for location ('situated on the top floor').",
        register: "Spatial Syntax"
      },
      {
        ruleNumber: 2,
        title: "Stative Participles for Structural States",
        description: "Describe property features using past participles as adjectives: 'newly renovated', 'fully furnished', 'well-lit', 'centrally air-conditioned'.",
        register: "Descriptive Syntax"
      },
      {
        ruleNumber: 3,
        title: "Transitive Verb 'Rent' vs 'Let' vs 'Lease'",
        description: "A tenant 'rents' a property ('I rent a two-bedroom apartment'). A landlord 'rents out' or 'lets' a property ('The owner is letting out the ground floor'). 'Lease' applies to formal contractual agreements.",
        register: "Lexical Register"
      },
      {
        ruleNumber: 4,
        title: "Compound Living Space Modifiers",
        description: "Hyphenate compound measure adjectives before nouns: 'a two-bedroom apartment' (NOT '*a two-bedrooms apartment*'), 'a 1,200-square-foot house'.",
        register: "Compound Modifiers"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Property Description",
        formula: "The property comprises / features + [Number] + [Room Type] + with + [Feature]",
        exampleEn: "The apartment features two spacious bedrooms with an open-plan kitchen.",
        meaningHi: "अपार्टमेंट में ओपन-प्लान किचन के साथ दो विशाल बेडरूम हैं।"
      },
      {
        subjectGroup: "Rental Inquiry",
        formula: "Is / Are + [Utility / Amenity] + included in the monthly rent?",
        exampleEn: "Are maintenance fees and water charges included in the monthly rent?",
        meaningHi: "क्या मासिक किराए में मेंटेनेंस शुल्क और पानी का बिल शामिल है?"
      },
      {
        subjectGroup: "Scenic View Description",
        formula: "[Living Space / Balcony] + overlooks / offers a scenic view of + [Landmark / Garden]",
        exampleEn: "The master bedroom balcony overlooks a serene public park.",
        meaningHi: "मास्टर बेडरूम की बालकनी से एक शांत सार्वजनिक पार्क का दृश्य दिखाई देता है।"
      },
      {
        subjectGroup: "Condition & Renovation",
        formula: "The house was + [Adverb: recently / thoroughly] + [Participle: renovated / refurbished].",
        exampleEn: "The property was recently renovated with modern fittings.",
        meaningHi: "इस मकान का हाल ही में आधुनिक फिटिंग के साथ नवीनीकरण किया गया था।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Living on Rent' and 'Attached Bathroom' Literalisms",
      hindiPattern: "1. '*I am living on rent in Delhi.*' (direct translation of 'मैं दिल्ली में किराए पर रह रहा हूँ')\n2. '*Does this bedroom have an attached bathroom?*'\n3. '*We bought a 3-bedrooms flat.*'",
      potentialInterference: "Literal translations from Hindi create awkward phrasing in international real estate and social contexts.",
      explanation: "In standard English, native speakers say 'I am renting a flat/house' or 'I live in a rented apartment'. While 'attached bathroom' is widely understood in Indian English, standard international real estate uses 'en-suite bathroom' or 'private bath'. Compound adjectives must remain singular ('a three-bedroom flat').",
      naturalSolution: "1. 'I am renting an apartment in Delhi.' | 2. 'Does this bedroom have an en-suite bathroom?' | 3. 'We bought a three-bedroom flat.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day41_vocab_001", word: "Spacious", pos: "Adjective", ipa: "/ˈspeɪ.ʃəs/", meaningHi: "विशाल / खुली जगह वाला", exampleEn: "The living room is exceptionally spacious and airy.", exampleHi: "लिविंग रूम असाधारण रूप से विशाल और हवादार है।" },
      { id: "day41_vocab_002", word: "Cramped", pos: "Adjective", ipa: "/kræmpt/", meaningHi: "तंग / संकरा / जगह की कमी वाला", exampleEn: "The old studio apartment felt too cramped for three people.", exampleHi: "पुराना स्टूडियो अपार्टमेंट तीन लोगों के लिए बहुत तंग महसूस होता था।" },
      { id: "day41_vocab_003", word: "Balcony", pos: "Noun", ipa: "/ˈbæl.kə.ni/", meaningHi: "बालकनी / छज्जा", exampleEn: "We enjoy our morning tea on the balcony.", exampleHi: "हम बालकनी में अपनी सुबह की चाय का आनंद लेते हैं।" },
      { id: "day41_vocab_004", word: "Corridor", pos: "Noun", ipa: "/ˈkɒr.ɪ.dɔːr/", meaningHi: "गलियारा / दालान", exampleEn: "The bedrooms are situated down a long corridor.", exampleHi: "बेडरूम एक लंबे गलियारे के अंत में स्थित हैं।" },
      { id: "day41_vocab_005", word: "Basement", pos: "Noun", ipa: "/ˈbeɪs.mənt/", meaningHi: "तहखाना / बेसमेंट", exampleEn: "They converted the basement into a home gymnasium.", exampleHi: "उन्होंने तहखाने को एक घरेलू व्यायामशाला में बदल दिया।" },
      { id: "day41_vocab_006", word: "Tenant", pos: "Noun", ipa: "/ˈten.ənt/", meaningHi: "किरायेदार", exampleEn: "The new tenants signed a twelve-month lease.", exampleHi: "नए किरायेदारों ने बारह महीने के लीज अनुबंध पर हस्ताक्षर किए।" },
      { id: "day41_vocab_007", word: "Landlord", pos: "Noun", ipa: "/ˈlænd.lɔːd/", meaningHi: "मकान मालिक", exampleEn: "The landlord agreed to replace the leaking kitchen tap.", exampleHi: "मकान मालिक रसोई के टपकते नल को बदलने के लिए सहमत हो गया।" },
      { id: "day41_vocab_008", word: "Ventilated", pos: "Adjective", ipa: "/ˈven.tɪ.leɪ.tɪd/", meaningHi: "हवादार / जिसमें वायु का अच्छा संचार हो", exampleEn: "Ensure the kitchen is well-ventilated while cooking.", exampleHi: "सुनिश्चित करें कि खाना बनाते समय रसोई अच्छी तरह हवादार हो।" },
      { id: "day41_vocab_009", word: "Renovate", pos: "Verb", ipa: "/ˈren.ə.veɪt/", meaningHi: "नवीनीकरण करना / मरम्मत कर नया बनाना", exampleEn: "They decided to renovate the property before moving in.", exampleHi: "उन्होंने रहने जाने से पहले संपत्ति का नवीनीकरण करने का फैसला किया।" },
      { id: "day41_vocab_010", word: "Utilities", pos: "Noun", ipa: "/juːˈtɪl.ə.tiz/", meaningHi: "बुनियादी सुविधाएं (बिजली, पानी, गैस आदि)", exampleEn: "Monthly rent is $1,200, excluding basic utilities.", exampleHi: "बुनियादी सुविधाओं को छोड़कर मासिक किराया $1,200 है।" }
    ],
    spokenPhrases: [
      { id: "day41_phrase_001", phrase: "Move in / Move out", meaningHi: "गृह प्रवेश करना / मकान खाली करना", context: "Relocation lifecycle" },
      { id: "day41_phrase_002", phrase: "Within walking distance", meaningHi: "पैदल चलने की दूरी पर", context: "Neighborhood accessibility" },
      { id: "day41_phrase_003", phrase: "Fully furnished", meaningHi: "सभी फर्नीचर और उपकरणों से सुसज्जित", context: "Rental listings" },
      { id: "day41_phrase_004", phrase: "Security deposit", meaningHi: "सुरक्षा राशि / जमानत", context: "Leasing terms" },
      { id: "day41_phrase_005", phrase: "En-suite bathroom", meaningHi: "बेडरूम से जुड़ा निजी स्नानघर", context: "Architectural floorplan" },
      { id: "day41_phrase_006", phrase: "Wear and tear", meaningHi: "सामान्य घिसावट / टूट-फूट", context: "Property condition agreements" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day41_exmp_001", english: "We are renting a two-bedroom apartment near the business district.", hindi: "हम बिजनेस डिस्ट्रिक्ट के पास दो बेडरूम का फ्लैट किराए पर ले रहे हैं।" },
      { id: "day41_exmp_002", english: "The living area is well-lit and gets plenty of natural sunlight.", hindi: "लिविंग एरिया अच्छी तरह रोशन है और वहां भरपूर प्राकृतिक धूप आती है।" },
      { id: "day41_exmp_003", english: "How much security deposit does the landlord require upfront?", hindi: "मकान मालिक को पहले से कितनी सुरक्षा राशि की आवश्यकता है?" },
      { id: "day41_exmp_004", english: "The kitchen is equipped with modular cabinets and a granite countertop.", hindi: "रसोई मॉड्यूलर अलमारियों और ग्रेनाइट काउंटरटॉप से सुसज्जित है।" },
      { id: "day41_exmp_005", english: "Our previous flat was cramped, but this house is remarkably spacious.", hindi: "हमारा पिछला फ्लैट तंग था, लेकिन यह घर उल्लेखनीय रूप से विशाल है।" },
      { id: "day41_exmp_006", english: "Are water charges and municipal taxes included in the maintenance bill?", hindi: "क्या मेंटेनेंस बिल में पानी का खर्च और नगरपालिका कर शामिल हैं?" },
      { id: "day41_exmp_007", english: "The master bedroom features an en-suite bathroom and a walk-in closet.", hindi: "मास्टर बेडरूम में एक एन-स्वीट बाथरूम और एक वॉक-इन कोठरी है।" },
      { id: "day41_exmp_008", english: "They plan to move out at the end of next month.", hindi: "वे अगले महीने के अंत में घर खाली करने की योजना बना रहे हैं।" },
      { id: "day41_exmp_009", english: "The building has round-the-clock security and designated basement parking.", hindi: "इमारत में 24 घंटे सुरक्षा और बेसमेंट में निर्धारित पार्किंग है।" },
      { id: "day41_exmp_010", english: "We need an electrician to fix the faulty wiring in the corridor.", hindi: "हमें गलियारे में खराब वायरिंग को ठीक करने के लिए एक इलेक्ट्रीशियन की आवश्यकता है।" },
      { id: "day41_exmp_011", english: "The balcony offers a breathtaking panoramic view of the skyline.", hindi: "बालकनी से शहर के क्षितिज का मनमोहक मनोरम दृश्य दिखाई देता है।" },
      { id: "day41_exmp_012", english: "The lease agreement clearly outlines the tenant's maintenance obligations.", hindi: "लीज अनुबंध में किरायेदार के रखरखाव दायित्वों को स्पष्ट रूप से रेखांकित किया गया है।" }
    ]
  },
  pronunciation: {
    focusSound: "The Distinction between /b/ (Balcony, Basement) and /v/ (Ventilated, Renovate)",
    phoneticNotes: "For /v/, press the upper front teeth lightly against the lower lip while vibrating the vocal cords. For /b/, bring both lips firmly together and release with air burst.",
    minimalPairs: [
      { wordA: "Vest", ipaA: "/vest/", wordB: "Best", ipaB: "/best/" },
      { wordA: "Vault", ipaA: "/vɔːlt/", wordB: "Bolt", ipaB: "/bəʊlt/" },
      { wordA: "Vary", ipaA: "/ˈveə.ri/", wordB: "Bury", ipaB: "/ˈber.i/" },
      { wordA: "Vane", ipaA: "/veɪn/", wordB: "Bane", ipaB: "/beɪn/" }
    ],
    drills: [
      { sentence: "The ventilated basement has valuable wooden beam structures.", focus: "V vs B articulation" },
      { sentence: "The spacious balcony provides a vibrant view of the boulevard.", focus: "B and V contrast" },
      { sentence: "We negotiated the lease before moving into the villa.", focus: "V fricative precision" },
      { sentence: "Both bedrooms were beautifully refurbished by the builder.", focus: "Bilabial /b/ release" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day41_ex_001",
        type: "multiple_choice",
        question: "Which term accurately describes a large, open, and roomy living area?",
        options: ["Cramped", "Spacious", "Congested", "Stuffy"],
        correctAnswer: "Spacious",
        explanation: "'Spacious' means having ample room and space. 'Cramped' is its antonym."
      },
      {
        id: "day41_ex_002",
        type: "fill_in_the_blank",
        question: "We are currently ______ a three-bedroom apartment in the city center.",
        correctAnswer: "renting",
        explanation: "Tenants 'rent' living space. Say 'renting an apartment' rather than '*living on rent*'."
      },
      {
        id: "day41_ex_003",
        type: "error_correction",
        sentence: "He lives in a three-bedrooms detached house.",
        correctAnswer: "He lives in a three-bedroom detached house.",
        explanation: "Compound measure modifiers preceding nouns must remain singular: 'three-bedroom', not 'three-bedrooms'."
      },
      {
        id: "day41_ex_004",
        type: "translation_hi_en",
        hindiSentence: "क्या इस फ्लैट में पानी और बिजली का बिल किराए में शामिल है?",
        englishSentence: "Are water and electricity utilities included in the rent?",
        targetVocabulary: ["utilities", "included", "rent"]
      },
      {
        id: "day41_ex_005",
        type: "matching",
        prompt: "Match the architectural terms with their correct definitions:",
        pairs: [
          { left: "En-suite", right: "Bathroom directly connected to a bedroom" },
          { left: "Basement", right: "Floor situated below ground level" },
          { left: "Corridor", right: "Narrow passageway connecting rooms" },
          { left: "Studio apartment", right: "Single-room unit combining living and sleeping space" }
        ]
      },
      {
        id: "day41_ex_006",
        type: "sentence_ordering",
        scrambledWords: ["balcony", "The", "the", "garden", "overlooks", "master", "bedroom"],
        correctSentence: "The master bedroom balcony overlooks the garden.",
        explanation: "Subject ('The master bedroom balcony') + Verb ('overlooks') + Object ('the garden')."
      },
      {
        id: "day41_ex_007",
        type: "multiple_choice",
        question: "What do we call the initial deposit paid to secure a rental property?",
        options: ["Monthly salary", "Security deposit", "Utility fine", "Brokerage interest"],
        correctAnswer: "Security deposit",
        explanation: "A 'security deposit' protects the landlord against damage or default during the tenancy."
      },
      {
        id: "day41_ex_008",
        type: "sentence_building",
        prompt: "Construct a polite inquiry asking if the apartment is furnished.",
        targetWords: ["Is", "the", "apartment", "fully", "furnished", "?"],
        correctSentence: "Is the apartment fully furnished?"
      },
      {
        id: "day41_ex_009",
        type: "translation_en_hi",
        englishSentence: "The old cottage was thoroughly renovated last spring.",
        hindiSentence: "पुराने कॉटेज का पिछली वसंत ऋतु में पूरी तरह से नवीनीकरण किया गया था।"
      },
      {
        id: "day41_ex_010",
        type: "listening_comprehension",
        audioText: "The landlord confirmed that maintenance charges are included, but electricity is metered separately.",
        question: "What is metered separately according to the landlord?",
        options: ["Maintenance charges", "Electricity", "Water bill", "Parking fee"],
        correctAnswer: "Electricity",
        explanation: "The audio explicitly states electricity is metered separately."
      },
      {
        id: "day41_ex_011",
        type: "dictation",
        spokenText: "The penthouse offers a stunning view of the harbor.",
        correctText: "The penthouse offers a stunning view of the harbor."
      },
      {
        id: "day41_ex_012",
        type: "dialogue_completion",
        dialogueContext: "Tenant: 'When can we move in?' | Landlord: 'As soon as the ______ is signed.'",
        options: ["lease agreement", "utility bill", "grocery list", "warranty tag"],
        correctAnswer: "lease agreement",
        explanation: "Tenancy commences formally upon signing the lease agreement."
      },
      {
        id: "day41_ex_013",
        type: "speaking_pronunciation",
        targetText: "The ventilated basement was converted into a vibrant workspace.",
        phoneticFocus: "/v/ and /b/ distinction in ventilated and vibrant"
      },
      {
        id: "day41_ex_014",
        type: "active_recall",
        prompt: "What is the professional term for a bathroom directly attached to a bedroom?",
        correctAnswer: "En-suite bathroom",
        explanation: "'En-suite bathroom' is the international architectural standard."
      },
      {
        id: "day41_ex_015",
        type: "applied_scenario",
        scenario: "You are looking at a cramped room with tiny windows and poor air circulation. How do you describe it constructively?",
        correctAnswer: "The room feels somewhat cramped and could use better ventilation.",
        explanation: "Uses accurate descriptive adjectives ('cramped', 'ventilation') diplomatically."
      },
      {
        id: "day41_ex_016",
        type: "multiple_choice",
        question: "Choose the correct phrase: 'The house is located ______ walking distance of the metro.'",
        options: ["under", "within", "between", "inside of"],
        correctAnswer: "within",
        explanation: "'Within walking distance' is the standard English prepositional idiom."
      },
      {
        id: "day41_ex_017",
        type: "fill_in_the_blank",
        question: "After five years in the flat, normal ______ and tear is expected on the carpets.",
        correctAnswer: "wear",
        explanation: "'Wear and tear' is a fixed legal and real estate collocation."
      },
      {
        id: "day41_ex_018",
        type: "error_correction",
        sentence: "I am living on rent in an apartment near Gurgaon.",
        correctAnswer: "I am renting an apartment near Gurgaon.",
        explanation: "Eliminate '*living on rent*' in favor of the standard transitive verb 'renting'."
      },
      {
        id: "day41_ex_019",
        type: "translation_hi_en",
        hindiSentence: "मकान मालिक ने सभी टूटी हुई खिड़कियों को बदलने का वादा किया है।",
        englishSentence: "The landlord has promised to replace all broken windows.",
        targetVocabulary: ["landlord", "promised", "replace"]
      },
      {
        id: "day41_ex_020",
        type: "matching",
        prompt: "Match the housing types with their characteristics:",
        pairs: [
          { left: "Duplex", right: "Two-story home with interior staircase" },
          { left: "Penthouse", right: "Luxury apartment on top floor" },
          { left: "Villa", right: "Detached suburban or country residence" },
          { left: "Studio", right: "Compact apartment without separate bedroom" }
        ]
      },
      {
        id: "day41_ex_021",
        type: "multiple_choice",
        question: "Which word is an antonym for 'spacious'?",
        options: ["Roomy", "Airy", "Cramped", "Grand"],
        correctAnswer: "Cramped",
        explanation: "'Cramped' means lacking sufficient space."
      },
      {
        id: "day41_ex_022",
        type: "sentence_ordering",
        scrambledWords: ["utilities", "included", "Are", "the", "in", "rent", "?"],
        correctSentence: "Are utilities included in the rent?",
        explanation: "Auxiliary ('Are') + Subject ('utilities') + Participle ('included') + Prepositional phrase ('in the rent?')."
      },
      {
        id: "day41_ex_023",
        type: "fill_in_the_blank",
        question: "The property has been thoroughly ______ with state-of-the-art kitchen equipment.",
        correctAnswer: "renovated",
        explanation: "'Renovated' or 'refurbished' refers to structural modernization."
      },
      {
        id: "day41_ex_024",
        type: "sentence_building",
        prompt: "State that the bedroom is well-ventilated and sunlit.",
        targetWords: ["The", "bedroom", "is", "well-ventilated", "and", "sunlit", "."],
        correctSentence: "The bedroom is well-ventilated and sunlit."
      },
      {
        id: "day41_ex_025",
        type: "translation_en_hi",
        englishSentence: "Tenants must give thirty days' notice before moving out.",
        hindiSentence: "किरायेदारों को मकान खाली करने से पहले तीस दिन का नोटिस देना होगा।"
      },
      {
        id: "day41_ex_026",
        type: "multiple_choice",
        question: "The passage connecting different rooms in a house is called a ______.",
        options: ["basement", "balcony", "corridor", "terrace"],
        correctAnswer: "corridor",
        explanation: "A corridor (or hallway) connects adjacent rooms."
      },
      {
        id: "day41_ex_027",
        type: "error_correction",
        sentence: "This flat is situated at the third floor.",
        correctAnswer: "This flat is situated on the third floor.",
        explanation: "Use preposition 'on' for floors of a building ('on the third floor')."
      },
      {
        id: "day41_ex_028",
        type: "listening_comprehension",
        audioText: "The contract stipulates a two-month security deposit refundable upon lease expiration.",
        question: "When is the security deposit refundable?",
        options: ["Upon lease expiration", "After one week", "Never", "Every month"],
        correctAnswer: "Upon lease expiration",
        explanation: "The deposit is refundable upon termination of the lease contract."
      },
      {
        id: "day41_ex_029",
        type: "dictation",
        spokenText: "The corridor leads directly to the master bedroom.",
        correctText: "The corridor leads directly to the master bedroom."
      },
      {
        id: "day41_ex_030",
        type: "applied_scenario",
        scenario: "You are speaking to a real estate agent. You want a flat with plenty of natural light and cross-ventilation. What do you ask?",
        correctAnswer: "I am looking for a well-ventilated flat with plenty of natural light.",
        explanation: "Combines appropriate professional descriptors concisely."
      },
      {
        id: "day41_ex_031",
        type: "multiple_choice",
        question: "Which of the following describes an apartment with furniture and kitchen appliances provided?",
        options: ["Unfurnished", "Bare shell", "Fully furnished", "Demolished"],
        correctAnswer: "Fully furnished",
        explanation: "'Fully furnished' means ready to occupy with all necessary furnishings."
      },
      {
        id: "day41_ex_032",
        type: "fill_in_the_blank",
        question: "The apartment is on the top floor and ______ the city botanical gardens.",
        correctAnswer: "overlooks",
        explanation: "'Overlooks' means to have a direct view from above."
      },
      {
        id: "day41_ex_033",
        type: "translation_hi_en",
        hindiSentence: "क्या बेसमेंट में अतिरिक्त सामान रखने के लिए कोई जगह है?",
        englishSentence: "Is there any storage space in the basement?",
        targetVocabulary: ["storage space", "basement"]
      },
      {
        id: "day41_ex_034",
        type: "sentence_building",
        prompt: "Express that tenants signed a one-year lease agreement yesterday.",
        targetWords: ["The", "tenants", "signed", "a", "one-year", "lease", "agreement", "yesterday", "."],
        correctSentence: "The tenants signed a one-year lease agreement yesterday."
      },
      {
        id: "day41_ex_035",
        type: "mixed_retrieval",
        question: "Identify the correct sentence:",
        options: [
          "We live on rent in a 2-bedrooms flat.",
          "We are renting a two-bedroom flat.",
          "We are letting a two-bedrooms apartment on rent.",
          "We rent out a two-bedroom for living."
        ],
        correctAnswer: "We are renting a two-bedroom flat.",
        explanation: "Combines correct verb 'renting' with singular compound modifier 'two-bedroom'."
      }
    ]
  },
  use: {
    dialogue: {
      title: "Inspecting a Rental Property",
      context: "A prospective tenant (Karan) is viewing a 2-bedroom apartment with a property manager (Ms. Kapoor).",
      characters: ["Karan", "Ms. Kapoor"],
      lines: [
        { speaker: "Karan", text: "Good afternoon, Ms. Kapoor. Thank you for showing me the apartment on short notice.", hindi: "शुभ दोपहर, सुश्री कपूर। मुझे इतने कम समय में अपार्टमेंट दिखाने के लिए धन्यवाद।" },
        { speaker: "Ms. Kapoor", text: "You're very welcome, Karan. As you can see, this unit is south-facing, so the living area remains sunlit throughout the day.", hindi: "आपका स्वागत है, करण। जैसा कि आप देख सकते हैं, यह फ्लैट दक्षिणमुखी है, इसलिए लिविंग एरिया में दिन भर धूप रहती है।" },
        { speaker: "Karan", text: "The layout is remarkably spacious. Does the master bedroom include an en-suite bathroom?", hindi: "लेआउट उल्लेखनीय रूप से विशाल है। क्या मास्टर बेडरूम में एन-स्वीट बाथरूम शामिल है?" },
        { speaker: "Ms. Kapoor", text: "Yes, both bedrooms have attached en-suite bathrooms, and the kitchen was recently renovated with granite fittings.", hindi: "हाँ, दोनों बेडरूम में एन-स्वीट बाथरूम हैं, और रसोई का हाल ही में ग्रेनाइट फिटिंग के साथ नवीनीकरण किया गया था।" },
        { speaker: "Karan", text: "That sounds ideal. Could you clarify whether water and maintenance fees are included in the monthly rent?", hindi: "यह बहुत बढ़िया लगता है। क्या आप स्पष्ट कर सकती हैं कि मासिक किराए में पानी और मेंटेनेंस शुल्क शामिल हैं?" },
        { speaker: "Ms. Kapoor", text: "Maintenance is covered by the landlord, but electricity and Wi-Fi are billed separately. The lease requires a two-month security deposit.", hindi: "रखरखाव का खर्च मकान मालिक वहन करता है, लेकिन बिजली और वाई-फाई का बिल अलग से आता है। लीज के लिए दो महीने की सुरक्षा राशि की आवश्यकता होती है।" }
      ]
    },
    speakingPrompt: {
      situation: "Describe your current home or an ideal house you would like to live in.",
      prompts: [
        "What type of property is it (apartment, detached house, studio)?",
        "Describe the layout, rooms, and natural lighting.",
        "Mention one architectural feature you appreciate (e.g., a spacious balcony or an open-plan kitchen)."
      ],
      targetExpressions: ["spacious layout", "well-ventilated", "overlooking", "fully furnished", "en-suite bathroom"]
    },
    roleplay: {
      scenario: "Negotiating lease terms and move-in dates with a landlord.",
      roleA: "Tenant requesting minor plumbing repairs and asking about utility inclusions before signing.",
      roleB: "Landlord confirming repairs will be done prior to the move-in date and clarifying deposit terms.",
      sampleDialogue: "Tenant: 'We would love to sign the lease, provided the leaking faucet in the bathroom is repaired before we move in.' | Landlord: 'Certainly, I will have a plumber inspect and fix it this weekend before you receive the keys.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day41_bm_001",
        title: "Architectural & Layout Description",
        prompt: "In 3-4 sentences, describe the key features and layout of a two-bedroom apartment using at least three descriptive adjectives.",
        sampleAnswerEn: "The property is a spacious two-bedroom apartment located on the fifth floor. It features a bright, well-ventilated living room with a balcony overlooking the city skyline. Both bedrooms include en-suite bathrooms, and the kitchen is fully furnished.",
        sampleAnswerHi: "यह संपत्ति पांचवीं मंजिल पर स्थित दो बेडरूम का एक विशाल अपार्टमेंट है। इसमें शहर के क्षितिज को देखने वाली बालकनी के साथ एक उज्ज्वल, हवादार बैठक है। दोनों बेडरूम में संलग्न स्नानघर हैं, और रसोई पूरी तरह सुसज्जित है।",
        evaluationCriteria: "Correct use of compound modifiers ('two-bedroom'), spatial prepositions ('overlooking'), and architectural adjectives ('spacious', 'well-ventilated')."
      },
      {
        id: "day41_bm_002",
        title: "Tenancy & Utility Inquiry Formulation",
        prompt: "Draft an inquiry to a landlord asking about monthly rent, utility inclusions, and security deposit terms.",
        sampleAnswerEn: "Could you please clarify whether water and maintenance charges are included in the monthly rent? Furthermore, what is the required security deposit, and when would the apartment be ready for move-in?",
        sampleAnswerHi: "क्या आप कृपया स्पष्ट कर सकते हैं कि मासिक किराए में पानी और रखरखाव शुल्क शामिल हैं या नहीं? इसके अलावा, आवश्यक सुरक्षा जमा राशि क्या है, और अपार्टमेंट गृह प्रवेश के लिए कब तैयार होगा?",
        evaluationCriteria: "Polite modal structures ('Could you please clarify...'), accurate real estate terminology ('utilities', 'security deposit', 'move-in')."
      },
      {
        id: "day41_bm_003",
        title: "L1 Real Estate Trap Remediation",
        prompt: "Correct this sentence and explain the error: 'I am living on rent in a 3-bedrooms flat with attached bathroom.'",
        sampleAnswerEn: "Correction: 'I am renting a three-bedroom flat with an en-suite bathroom.' Explanation: In English, we use the verb 'rent' rather than the literal translation 'living on rent'. Compound modifiers before nouns remain singular ('three-bedroom'), and international English prefers 'en-suite bathroom'.",
        sampleAnswerHi: "सुधार: 'I am renting a three-bedroom flat with an en-suite bathroom.' व्याख्या: अंग्रेजी में हम 'living on rent' की जगह 'rent' क्रिया का उपयोग करते हैं। संज्ञा से पहले आने वाले विशेषण एकवचन रहते हैं ('three-bedroom'), और अंतरराष्ट्रीय अंग्रेजी में 'en-suite bathroom' प्राथमिकता दी जाती है।",
        evaluationCriteria: "Accurate identification of all three grammatical/stylistic errors with sound linguistic justification."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "What is the proper term for a bathroom accessible directly from inside a bedroom?", a: "En-suite bathroom" },
      { q: "Why is 'a three-bedrooms house' incorrect?", a: "Compound measure modifiers preceding nouns must be singular ('a three-bedroom house')." },
      { q: "What does 'utilities included' mean in a rental lease?", a: "Basic services such as water, gas, electricity, or heating are covered within the rent." },
      { q: "What is the standard antonym of 'cramped'?", a: "Spacious / roomy / expansive" }
    ],
    spacedTips: [
      "Tip 1: When inquiring about properties abroad, always use 'renting an apartment' instead of 'living on rent'.",
      "Tip 2: Remember that prepositions of view take 'overlooking' without an extra preposition (e.g., 'a window overlooking the park', not '*overlooking to*')."
    ]
  }
};

// DAY 42: Street Directions, City Transit & Commuting
const day42 = {
  dayNumber: 42,
  id: "day_42",
  titleEn: "Street Directions, City Transit & Commuting",
  titleHi: "सड़क दिशा-निर्देश, नगरीय पारगमन एवं दैनिक आवागमन",
  cefr: "A2.2",
  estMinutes: 40,
  prerequisites: "Day 41 (Living Space & Spatial Descriptors)",
  objectivesEn: [
    "Ask for, give, and follow complex multi-step street directions with spatial accuracy.",
    "Navigate urban transit systems (subway, light rail, buses, platforms, transfers, ticketing).",
    "Master daily commuting vocabulary (rush hour, peak fare, shuttle, delay, route change).",
    "Use imperative motion verbs (head straight, take the second exit, merge onto, cross over) with precision.",
    "Correct Hindi-English transit transfer errors such as '*give side*', '*take left*', and '*where this bus is going?*'"
  ],
  objectivesHi: [
    "सड़क पर दिशा-निर्देश पूछना, समझाना और कई चरणों वाले रास्तों का सही अनुसरण करना।",
    "शहरी परिवहन (मेट्रो, बस, प्लेटफार्म, ट्रेन बदलना/ट्रांसफर, टिकट काउंटर) पर आत्मविश्वास से संवाद करना।",
    "दैनिक आवागमन शब्दावली (Rush hour, Peak fare, Commute, Shuttle service) में पारंगत होना।",
    "दिशात्मक आज्ञार्थक क्रियाओं (Head straight, Turn left, Take the second exit) का सटीक प्रयोग करना।",
    "भारतीय पारगमन गलतियों ('give side', 'take left', 'where this bus going') को मानक अंग्रेजी में बदलना।"
  ],
  teach: {
    hindiExplanation: "दिन 42 में हम दिशा-निर्देश पूछने, रास्ता बताने और सार्वजनिक परिवहन (Public Transit & Commuting) में संवाद करना सीखेंगे।\n\n1. दिशा पूछना (Asking for Directions): विनम्रता से 'Excuse me, could you tell me how to get to...?' या 'Is there a metro station nearby?' से शुरुआत करें।\n2. दिशा बताना (Giving Directions): 'Go straight / Head straight' (सीधे जाएं), 'Turn left / Turn right' (बाएं/दाएं मुड़ें - '*Take left*' की जगह 'Turn left' या 'Take the first left turn' कहें), 'At the roundabout, take the second exit' (गोलचक्कर पर दूसरा निकास लें)।\n3. पारगमन शब्दावली (Transit Terms): 'Commute' (घर से काम की दैनिक यात्रा), 'Rush hour / Peak hours' (भीड़-भाड़ का समय), 'Transfer / Change lines' (मेट्रो या ट्रेन बदलना), 'Fare card / Transit pass' (यात्रा कार्ड), 'Platform' (ट्रेन का प्लेटफार्म)।\n4. सामान्य भारतीय गलतियाँ: किसी से आगे निकलने के लिए '*Give side*' न कहें, बल्कि 'Excuse me, may I get past?' कहें। बस की मंजिल पूछने के लिए '*Where this bus going?*' की जगह 'Does this bus go to Connaught Place?' कहें।",
    englishExplanation: "Welcome to Day 42! Today's lesson develops complete navigational competence in urban navigation, public transportation networks, and daily commuting discourse.\n\nKey pedagogical pillars:\n1. Multi-Step Direction Architecture: Sequencing spatial imperatives with ordinal markers ('First, go straight past the library, then turn right at the intersection, and the building is on your left').\n2. Navigating Urban Transit: Managing transfers, identifying correct platforms, dealing with transit delays, validating tickets, and boarding interchanges.\n3. Landmark-Anchored Navigation: Using static reference landmarks ('opposite the cathedral', 'adjacent to the subway entrance', 'at the roundabout').\n4. Eliminating Subcontinental Transit Colloquialisms: Replacing literal translations ('give side', 'take right') with globally recognized idiomatic expressions.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Imperative Mode for Spatial Navigation",
        description: "Directions use base-form imperatives: 'Turn right', 'Continue straight for 200 meters', 'Cross the pedestrian bridge'. Avoid adding modal auxiliaries in step-by-step instructions.",
        register: "Instructional Syntax"
      },
      {
        ruleNumber: 2,
        title: "Prepositions of Motion vs Position",
        description: "Distinguish movement toward ('walk towards the fountain', 'turn onto Main Street') from static position ('located at the corner', 'opposite the pharmacy').",
        register: "Spatial Prepositions"
      },
      {
        ruleNumber: 3,
        title: "Indirect Questions for Polite Inquiries",
        description: "When asking strangers for directions, invert subject-auxiliary order: 'Could you tell me where the station is?' (NOT '*Could you tell me where is the station?*').",
        register: "Polite Inquiry"
      },
      {
        ruleNumber: 4,
        title: "Transit Prepositions: 'On' vs 'In'",
        description: "Use 'on' for public mass transit ('on the bus', 'on the train', 'on the subway', 'on the plane'). Use 'in' for private passenger vehicles ('in a car', 'in a taxi').",
        register: "Transit Collocations"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Polite Direction Request",
        formula: "Excuse me, could you direct me to + [Destination / Landmark]?",
        exampleEn: "Excuse me, could you direct me to the central railway station?",
        meaningHi: "माफ कीजिए, क्या आप मुझे सेंट्रल रेलवे स्टेशन का रास्ता बता सकते हैं?"
      },
      {
        subjectGroup: "Sequential Route Step",
        formula: "Head / Go + [Direction] + until you reach + [Landmark] + then + [Action]",
        exampleEn: "Head straight until you reach the traffic signal, then turn left.",
        meaningHi: "ट्रैफिक सिग्नल तक सीधे जाएं, फिर बाएं मुड़ें।"
      },
      {
        subjectGroup: "Transit Transfer Inquiries",
        formula: "Do I need to change / transfer trains at + [Interchange Station]?",
        exampleEn: "Do I need to change lines at Rajiv Chowk to reach the airport?",
        meaningHi: "क्या हवाई अड्डे तक पहुँचने के लिए मुझे राजीव चौक पर लाइन बदलनी होगी?"
      },
      {
        subjectGroup: "Commute Duration",
        formula: "How long does the commute take by + [Mode of Transit]?",
        exampleEn: "How long does the commute take by express metro?",
        meaningHi: "एक्सप्रेस मेट्रो से दैनिक यात्रा में कितना समय लगता है?"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Give Side', 'Take Left', and Inverted Indirect Question Traps",
      hindiPattern: "1. '*Please give side!*' (direct translation of 'साइड दीजिए')\n2. '*Take left from the signal.*' (literal translation of 'लेफ्ट ले लो')\n3. '*Can you tell me where is the bus stop?*'",
      potentialInterference: "Literal translations sound brusque or non-standard in international urban environments.",
      explanation: "'Give side' is not English; use 'Excuse me, may I squeeze past?' or 'Pardon me'. Rather than 'take left', use 'turn left' or 'take the first left'. In indirect questions, maintain statement order: 'where the bus stop is'.",
      naturalSolution: "1. 'Excuse me, could I get past please?' | 2. 'Turn left at the traffic light.' | 3. 'Can you tell me where the bus stop is?'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day42_vocab_001", word: "Intersection", pos: "Noun", ipa: "/ˌɪn.təˈsek.ʃən/", meaningHi: "चौराहा / सड़कों का मिलन स्थल", exampleEn: "Turn right at the next major intersection.", exampleHi: "अगले मुख्य चौराहे पर दाएं मुड़ें।" },
      { id: "day42_vocab_002", word: "Roundabout", pos: "Noun", ipa: "/ˈraʊnd.ə.baʊt/", meaningHi: "गोलचक्कर", exampleEn: "Take the second exit at the roundabout.", exampleHi: "गोलचक्कर पर दूसरा निकास लें।" },
      { id: "day42_vocab_003", word: "Commute", pos: "Verb / Noun", ipa: "/kəˈmjuːt/", meaningHi: "दैनिक आवागमन (काम के लिए यात्रा करना)", exampleEn: "She commutes thirty miles by train every morning.", exampleHi: "वह हर सुबह ट्रेन से तीस मील का आवागमन करती है।" },
      { id: "day42_vocab_004", word: "Pedestrian", pos: "Noun", ipa: "/pəˈdes.tri.ən/", meaningHi: "पैदल यात्री", exampleEn: "Always use the pedestrian crossing when crossing busy avenues.", exampleHi: "व्यस्त सड़कों को पार करते समय हमेशा पैदल पार-पथ का उपयोग करें।" },
      { id: "day42_vocab_005", word: "Transfer", pos: "Verb / Noun", ipa: "/trænsˈfɜːr/", meaningHi: "ट्रेन या बस बदलना / इंटरचेंज", exampleEn: "Passengers for the airport line must transfer at Central Station.", exampleHi: "हवाई अड्डा लाइन के यात्रियों को सेंट्रल स्टेशन पर ट्रेन बदलनी होगी।" },
      { id: "day42_vocab_006", word: "Platform", pos: "Noun", ipa: "/ˈplæt.fɔːm/", meaningHi: "रेलवे प्लेटफार्म", exampleEn: "The express train to Oxford departs from Platform 4.", exampleHi: "ऑक्सफोर्ड के लिए एक्सप्रेस ट्रेन प्लेटफार्म 4 से रवाना होती है।" },
      { id: "day42_vocab_007", word: "Landmark", pos: "Noun", ipa: "/ˈlænd.mɑːk/", meaningHi: "पहचान स्थल / सीमा-चिह्न", exampleEn: "The clock tower serves as a prominent landmark for navigation.", exampleHi: "घंटाघर दिशा खोजने के लिए एक प्रमुख पहचान स्थल के रूप में कार्य करता है।" },
      { id: "day42_vocab_008", word: "Rush hour", pos: "Noun", ipa: "/ˈrʌʃ ˌaʊər/", meaningHi: "व्यस्ततम समय (सड़क या परिवहन पर भीड़ का समय)", exampleEn: "Traffic is notoriously congested during the evening rush hour.", exampleHi: "शाम के व्यस्त समय के दौरान यातायात कुख्यात रूप से तंग रहता है।" },
      { id: "day42_vocab_009", word: "Pavement", pos: "Noun", ipa: "/ˈpeɪv.mənt/", meaningHi: "फुटपाथ (Sidewalk)", exampleEn: "Please walk on the pavement for safety.", exampleHi: "सुरक्षा के लिए कृपया फुटपाथ पर चलें।" },
      { id: "day42_vocab_010", word: "Fare", pos: "Noun", ipa: "/feər/", meaningHi: "यात्रा किराया", exampleEn: "How much is the bus fare to the city center?", exampleHi: "शहर के केंद्र तक बस का किराया कितना है?" }
    ],
    spokenPhrases: [
      { id: "day42_phrase_001", phrase: "Head straight ahead", meaningHi: "बिल्कुल सीधे आगे बढ़ें", context: "Giving direction instructions" },
      { id: "day42_phrase_002", phrase: "You can't miss it", meaningHi: "आप इसे आसानी से पहचान लेंगे (चूक नहीं सकते)", context: "Reassuring destination visibility" },
      { id: "day42_phrase_003", phrase: "Change lines / trains", meaningHi: "मेट्रो या ट्रेन बदलना", context: "Transit instructions" },
      { id: "day42_phrase_004", phrase: "Bound for [City]", meaningHi: "[शहर] की ओर जाने वाली (ट्रेन/बस)", context: "Transit announcements" },
      { id: "day42_phrase_005", phrase: "Excuse me, may I get through?", meaningHi: "माफ कीजिए, क्या मैं आगे निकल सकता हूँ?", context: "Polite crowd navigation" },
      { id: "day42_phrase_006", phrase: "Within a stone's throw", meaningHi: "बहुत ही पास / थोड़ी दूरी पर", context: "Proximity descriptor" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day42_exmp_001", english: "Could you tell me how to get to the National Museum from here?", hindi: "क्या आप मुझे बता सकते हैं कि यहाँ से राष्ट्रीय संग्रहालय कैसे पहुँचा जाए?" },
      { id: "day42_exmp_002", english: "Walk straight for two blocks, then turn right at the post office.", hindi: "दो ब्लॉक सीधे चलें, फिर डाकघर से दाएं मुड़ें।" },
      { id: "day42_exmp_003", english: "Take the Blue Line train towards Downtown and transfer at 5th Avenue.", hindi: "डाउनटाउन की ओर जाने वाली ब्लू लाइन ट्रेन लें और 5वें एवेन्यू पर ट्रेन बदलें।" },
      { id: "day42_exmp_004", english: "My daily commute takes approximately forty-five minutes by metro.", hindi: "मेट्रो द्वारा मेरे दैनिक आवागमन में लगभग 45 मिनट लगते हैं।" },
      { id: "day42_exmp_005", english: "Excuse me, is this the platform for the northbound express train?", hindi: "माफ कीजिए, क्या उत्तर दिशा की ओर जाने वाली एक्सप्रेस ट्रेन के लिए यही प्लेटफार्म है?" },
      { id: "day42_exmp_006", english: "The museum is directly opposite the historical cathedral; you can't miss it.", hindi: "संग्रहालय ऐतिहासिक कैथेड्रल के ठीक सामने है; आप इसे आसानी से पहचान लेंगे।" },
      { id: "day42_exmp_007", english: "During rush hour, the subway trains run every three minutes.", hindi: "व्यस्त समय के दौरान, सबवे ट्रेनें हर तीन मिनट में चलती हैं।" },
      { id: "day42_exmp_008", english: "At the roundabout, take the third exit onto Nelson Mandela Marg.", hindi: "गोलचक्कर पर, नेल्सन मंडेला मार्ग पर तीसरा निकास लें।" },
      { id: "day42_exmp_009", english: "Always wait behind the yellow safety line on the platform.", hindi: "प्लेटफार्म पर हमेशा पीली सुरक्षा रेखा के पीछे खड़े रहें।" },
      { id: "day42_exmp_010", english: "Is the bus fare payable with a contactless credit card?", hindi: "क्या बस का किराया कॉन्टैक्टलेस क्रेडिट कार्ड द्वारा देय है?" },
      { id: "day42_exmp_011", english: "Pardon me, does this shuttle service stop at Terminal 3?", hindi: "क्षमा करें, क्या यह शटल सेवा टर्मिनल 3 पर रुकती है?" },
      { id: "day42_exmp_012", english: "The pedestrian crossing is equipped with an audible signal for the visually impaired.", hindi: "पैदल पार-पथ दृष्टिबाधितों के लिए एक श्रव्य सिग्नल से सुसज्जित है।" }
    ]
  },
  pronunciation: {
    focusSound: "Linking and Rhythm in Directions: Consonant-to-Vowel Linking (Turn_on, Head_ahead, Cross_over)",
    phoneticNotes: "When giving directions rapidly, final consonants seamlessly link into initial vowels: 'Turn on' sounds like /tɜː.nɒn/, 'Head ahead' sounds like /he.dəˈhed/.",
    minimalPairs: [
      { wordA: "Lane", ipaA: "/leɪn/", wordB: "Line", ipaB: "/laɪn/" },
      { wordA: "Train", ipaA: "/treɪn/", wordB: "Drain", ipaB: "/dreɪn/" },
      { wordA: "Track", ipaA: "/træk/", wordB: "Truck", ipaB: "/trʌk/" },
      { wordA: "Fare", ipaA: "/feər/", wordB: "Fear", ipaB: "/fɪər/" }
    ],
    drills: [
      { sentence: "Turn off at the first intersection and head into the avenue.", focus: "Consonant-to-vowel smooth liaison" },
      { sentence: "Cross over the street and get on the electric bus.", focus: "Fluid motion verbs" },
      { sentence: "The pedestrian walkway leads straight into the terminal.", focus: "Plosive-fricative transitions" },
      { sentence: "Check the platform number before boarding the train.", focus: "Rhythm and stress on key transit nouns" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day42_ex_001",
        type: "multiple_choice",
        question: "What is the natural English phrase when asking someone to let you walk past in a crowded train?",
        options: ["Please give side!", "Excuse me, may I get through?", "Leave way for me!", "Move out of my front!"],
        correctAnswer: "Excuse me, may I get through?",
        explanation: "'Excuse me, may I get through?' or 'Pardon me' is standard polite English."
      },
      {
        id: "day42_ex_002",
        type: "fill_in_the_blank",
        question: "At the roundabout, take the second ______ onto Park Street.",
        correctAnswer: "exit",
        explanation: "Road junctions with circular roundabouts have numbered 'exits'."
      },
      {
        id: "day42_ex_003",
        type: "error_correction",
        sentence: "Could you tell me where is the ticket counter?",
        correctAnswer: "Could you tell me where the ticket counter is?",
        explanation: "Indirect questions follow standard declarative order: 'where the ticket counter is'."
      },
      {
        id: "day42_ex_004",
        type: "translation_hi_en",
        hindiSentence: "अगले चौराहे से बाएं मुड़ें और डाकघर के सामने रुकें।",
        englishSentence: "Turn left at the next intersection and stop opposite the post office.",
        targetVocabulary: ["intersection", "turn left", "opposite"]
      },
      {
        id: "day42_ex_005",
        type: "matching",
        prompt: "Match the transit terms with their definitions:",
        pairs: [
          { left: "Commute", right: "Regular daily travel between home and workplace" },
          { left: "Rush hour", right: "Peak period of congested city traffic" },
          { left: "Pedestrian", right: "Person travelling on foot along roadways" },
          { left: "Transfer", right: "Changing from one train line or bus to another" }
        ]
      },
      {
        id: "day42_ex_006",
        type: "sentence_ordering",
        scrambledWords: ["straight", "for", "blocks", "Head", "two", "ahead"],
        correctSentence: "Head straight ahead for two blocks.",
        explanation: "Verb ('Head') + Direction ('straight ahead') + Duration/Distance ('for two blocks')."
      },
      {
        id: "day42_ex_007",
        type: "multiple_choice",
        question: "Choose the correct preposition: 'She is traveling ______ the 8:15 express train.'",
        options: ["in", "on", "into", "inside of"],
        correctAnswer: "on",
        explanation: "Public transport vehicles (trains, buses, planes) take the preposition 'on'."
      },
      {
        id: "day42_ex_008",
        type: "sentence_building",
        prompt: "Ask politely which platform the train to Delhi departs from.",
        targetWords: ["Which", "platform", "does", "the", "train", "to", "Delhi", "depart", "from", "?"],
        correctSentence: "Which platform does the train to Delhi depart from?"
      },
      {
        id: "day42_ex_009",
        type: "translation_en_hi",
        englishSentence: "Passengers must validate their transit cards before entering the gate.",
        hindiSentence: "यात्रियों को गेट में प्रवेश करने से पहले अपने पारगमन कार्ड को मान्य (स्कैन) करना होगा।"
      },
      {
        id: "day42_ex_010",
        type: "listening_comprehension",
        audioText: "Attention passengers on Platform 3: the train bound for Victoria has been delayed by ten minutes.",
        question: "How long has the Victoria-bound train been delayed?",
        options: ["Five minutes", "Ten minutes", "Fifteen minutes", "Canceled"],
        correctAnswer: "Ten minutes",
        explanation: "The announcement explicitly states a ten-minute delay."
      },
      {
        id: "day42_ex_011",
        type: "dictation",
        spokenText: "Turn left after passing the old library.",
        correctText: "Turn left after passing the old library."
      },
      {
        id: "day42_ex_012",
        type: "dialogue_completion",
        dialogueContext: "Commuter: 'Excuse me, does this bus go to the airport?' | Driver: 'No, you need to ______ to Route 42 at the next stop.'",
        options: ["transfer", "resign", "demolish", "renovate"],
        correctAnswer: "transfer",
        explanation: "'Transfer' means to switch to a connecting route."
      },
      {
        id: "day42_ex_013",
        type: "speaking_pronunciation",
        targetText: "Head straight ahead across the intersection and take the train.",
        phoneticFocus: "Consonant linking in 'head straight ahead'"
      },
      {
        id: "day42_ex_014",
        type: "active_recall",
        prompt: "What is the circular traffic junction with multiple exits called in British English?",
        correctAnswer: "Roundabout",
        explanation: "A 'roundabout' is a circular intersection where drivers travel in one direction."
      },
      {
        id: "day42_ex_015",
        type: "applied_scenario",
        scenario: "A tourist asks you how to reach the city library which is just 50 meters straight ahead on their right. Give clear directions.",
        correctAnswer: "Walk straight ahead for about fifty meters, and the library will be on your right.",
        explanation: "Provides clear, direct, and sequential navigational steps."
      },
      {
        id: "day42_ex_016",
        type: "multiple_choice",
        question: "Complete the idiomatic phrase: 'The supermarket is located just ______ from our office.'",
        options: ["a stone's throw", "a rock's push", "an arm's distance", "a mile's walk"],
        correctAnswer: "a stone's throw",
        explanation: "'Within a stone's throw' is an idiom meaning very close by."
      },
      {
        id: "day42_ex_017",
        type: "fill_in_the_blank",
        question: "Please stay behind the yellow line on the ______ while waiting for the express train.",
        correctAnswer: "platform",
        explanation: "Passengers wait on the railway 'platform'."
      },
      {
        id: "day42_ex_018",
        type: "error_correction",
        sentence: "Take left from the red traffic signal.",
        correctAnswer: "Turn left at the red traffic signal.",
        explanation: "Say 'Turn left' (or 'Take the first left') rather than '*Take left from*'."
      },
      {
        id: "day42_ex_019",
        type: "translation_hi_en",
        hindiSentence: "कार्यालय समय के दौरान मेट्रो बहुत भीड़-भाड़ वाली होती है।",
        englishSentence: "The metro is extremely crowded during rush hour.",
        targetVocabulary: ["metro", "crowded", "rush hour"]
      },
      {
        id: "day42_ex_020",
        type: "matching",
        prompt: "Match the directional verbs with their appropriate complements:",
        pairs: [
          { left: "Cross over", right: "the pedestrian footbridge" },
          { left: "Merge onto", right: "the expressway" },
          { left: "Head toward", right: "the city center" },
          { left: "Transfer to", right: "the northbound line" }
        ]
      },
      {
        id: "day42_ex_021",
        type: "multiple_choice",
        question: "Which of the following refers to a person walking on a sidewalk?",
        options: ["Commuter", "Motorist", "Pedestrian", "Conductor"],
        correctAnswer: "Pedestrian",
        explanation: "A pedestrian is someone traveling on foot."
      },
      {
        id: "day42_ex_022",
        type: "sentence_ordering",
        scrambledWords: ["you", "how", "get", "Could", "tell", "station", "to", "the", "me", "?"],
        correctSentence: "Could you tell me how to get to the station?",
        explanation: "Polite indirect inquiry structure."
      },
      {
        id: "day42_ex_023",
        type: "fill_in_the_blank",
        question: "I have a daily sixty-minute ______ from the suburbs into central London.",
        correctAnswer: "commute",
        explanation: "'Commute' denotes regular travel between home and work."
      },
      {
        id: "day42_ex_024",
        type: "sentence_building",
        prompt: "Tell someone that the bank is opposite the grand hotel.",
        targetWords: ["The", "bank", "is", "situated", "opposite", "the", "grand", "hotel", "."],
        correctSentence: "The bank is situated opposite the grand hotel."
      },
      {
        id: "day42_ex_025",
        type: "translation_en_hi",
        englishSentence: "Take the second exit at the roundabout and continue along the river.",
        hindiSentence: "गोलचक्कर पर दूसरा निकास लें और नदी के किनारे आगे बढ़ते रहें।"
      },
      {
        id: "day42_ex_026",
        type: "multiple_choice",
        question: "What is the British English term for 'sidewalk'?",
        options: ["Pavement", "Highway", "Underpass", "Flyover"],
        correctAnswer: "Pavement",
        explanation: "'Pavement' is the standard British English word for the pedestrian pathway."
      },
      {
        id: "day42_ex_027",
        type: "error_correction",
        sentence: "He was sitting in the public bus when his phone rang.",
        correctAnswer: "He was sitting on the public bus when his phone rang.",
        explanation: "Use preposition 'on' for public buses."
      },
      {
        id: "day42_ex_028",
        type: "listening_comprehension",
        audioText: "To reach the international terminal, please board the monorail shuttle located on Level 2.",
        question: "Where is the monorail shuttle located?",
        options: ["On Level 1", "On Level 2", "In the basement", "Outside Gate 4"],
        correctAnswer: "On Level 2",
        explanation: "The announcement states the shuttle is located on Level 2."
      },
      {
        id: "day42_ex_029",
        type: "dictation",
        spokenText: "Pedestrians should always use the designated zebra crossing.",
        correctText: "Pedestrians should always use the designated zebra crossing."
      },
      {
        id: "day42_ex_030",
        type: "applied_scenario",
        scenario: "You are on a crowded metro and need to exit at the next station. What do you politely say to the people standing in front of the door?",
        correctAnswer: "Excuse me, I need to get off at this stop.",
        explanation: "Direct, courteous, and idiomatic expression for exiting public transit."
      },
      {
        id: "day42_ex_031",
        type: "multiple_choice",
        question: "Which expression means you will easily recognize a building?",
        options: ["You will miss it", "You can't miss it", "You must ignore it", "You can't see it"],
        correctAnswer: "You can't miss it",
        explanation: "'You can't miss it' indicates the landmark is prominent and easy to find."
      },
      {
        id: "day42_ex_032",
        type: "fill_in_the_blank",
        question: "The bus ______ has increased by fifty cents this month.",
        correctAnswer: "fare",
        explanation: "'Fare' is the price charged for travel on public conveyance."
      },
      {
        id: "day42_ex_033",
        type: "translation_hi_en",
        hindiSentence: "क्या इस बस में चढ़ने के लिए मुझे अलग से टिकट खरीदना होगा?",
        englishSentence: "Do I need to purchase a separate ticket to board this bus?",
        targetVocabulary: ["purchase", "separate ticket", "board"]
      },
      {
        id: "day42_ex_034",
        type: "sentence_building",
        prompt: "Express that the train departs from Platform 2 at nine o'clock.",
        targetWords: ["The", "train", "departs", "from", "Platform", "2", "at", "nine", "o'clock", "."],
        correctSentence: "The train departs from Platform 2 at nine o'clock."
      },
      {
        id: "day42_ex_035",
        type: "mixed_retrieval",
        question: "Identify the grammatically and pragmatically correct sentence:",
        options: [
          "Please give side so I can go out from the bus.",
          "Excuse me, could you tell me where the nearest subway entrance is?",
          "Can you direct me that where is the railway platform?",
          "Take right from the signal and go on walking."
        ],
        correctAnswer: "Excuse me, could you tell me where the nearest subway entrance is?",
        explanation: "Accurate indirect question format with polite opener and correct word order."
      }
    ]
  },
  use: {
    dialogue: {
      title: "Asking for Directions to the Metro Station",
      context: "A commuter (Aman) asks a local resident (Sarah) for directions to the nearest metro station.",
      characters: ["Aman", "Sarah"],
      lines: [
        { speaker: "Aman", text: "Excuse me! Could you tell me where the nearest metro station is?", hindi: "माफ कीजिए! क्या आप मुझे बता सकते हैं कि निकटतम मेट्रो स्टेशन कहाँ है?" },
        { speaker: "Sarah", text: "Certainly. Go straight down this avenue for about three hundred meters until you reach the clock tower.", hindi: "ज़रूर। इस एवेन्यू पर लगभग 300 मीटर सीधे जाएं जब तक कि आप घंटाघर तक न पहुँच जाएँ।" },
        { speaker: "Aman", text: "Okay, straight past the clock tower. What do I do at the intersection?", hindi: "ठीक है, घंटाघर के आगे सीधे। चौराहे पर मुझे क्या करना है?" },
        { speaker: "Sarah", text: "Turn right at the intersection onto Gandhi Road. You'll see the metro station entrance on your left, right opposite the central library.", hindi: "चौराहे से गांधी रोड पर दाएं मुड़ें। आपको बाईं ओर, सेंट्रल लाइब्रेरी के ठीक सामने मेट्रो स्टेशन का प्रवेश द्वार दिखाई देगा।" },
        { speaker: "Aman", text: "That sounds very straightforward. Do I need to buy a physical token, or do they accept smart cards?", hindi: "यह बहुत आसान लगता है। क्या मुझे टोकन खरीदना होगा, या वे स्मार्ट कार्ड स्वीकार करते हैं?" },
        { speaker: "Sarah", text: "Smart cards and contactless payments are both accepted at the automated turnstiles.", hindi: "स्वचालित टर्नस्टाइल्स पर स्मार्ट कार्ड और कॉन्टैक्टलेस भुगतान दोनों स्वीकार किए जाते हैं।" }
      ]
    },
    speakingPrompt: {
      situation: "Give directions from your home to the nearest grocery store or transit hub.",
      prompts: [
        "What is the first step when leaving your front door (e.g., turn left, head down the street)?",
        "Mention at least one landmark you pass along the way.",
        "Describe where the destination is situated (e.g., on the corner, opposite the park)."
      ],
      targetExpressions: ["head straight", "turn left/right at", "opposite the", "intersection", "you can't miss it"]
    },
    roleplay: {
      scenario: "Inquiring about bus transfers at a central transit kiosk.",
      roleA: "Commuter trying to reach the domestic airport terminal with heavy luggage.",
      roleB: "Transit clerk explaining which bus to take, where to transfer, and how much the fare costs.",
      sampleDialogue: "Commuter: 'Excuse me, which bus should I take to reach the domestic terminal?' | Clerk: 'Board Bus 702 from Bay 4, ride it for five stops, and transfer to the express airport shuttle at City Square.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day42_bm_001",
        title: "Multi-Step Direction Formulation",
        prompt: "Provide clear 3-step directions from a railway station to a museum located two blocks away across a roundabout.",
        sampleAnswerEn: "Exit the station and head straight along Station Road for 200 meters. At the roundabout, take the first exit onto Heritage Avenue. Walk past the post office, and the museum will be situated directly on your left.",
        sampleAnswerHi: "स्टेशन से बाहर निकलें और स्टेशन रोड पर 200 मीटर सीधे चलें। गोलचक्कर पर हेरिटेज एवेन्यू के लिए पहला निकास लें। डाकघर से आगे बढ़ें, और संग्रहालय आपके बाईं ओर स्थित होगा।",
        evaluationCriteria: "Correct sequence of imperative motion verbs ('head straight', 'take the first exit'), prepositions ('at the roundabout', 'on your left'), and clear landmark references."
      },
      {
        id: "day42_bm_002",
        title: "Transit Transfer Inquiry Formulation",
        prompt: "Draft an inquiry asking a transit employee about transferring lines to reach the convention center.",
        sampleAnswerEn: "Excuse me, could you tell me if I need to transfer lines to reach the convention center? Which station should I change trains at, and from which platform does the connecting train depart?",
        sampleAnswerHi: "माफ कीजिए, क्या आप मुझे बता सकते हैं कि कन्वेंशन सेंटर पहुँचने के लिए क्या मुझे लाइन बदलनी होगी? मुझे किस स्टेशन पर ट्रेन बदलनी चाहिए, और कनेक्टिंग ट्रेन किस प्लेटफार्म से रवाना होती है?",
        evaluationCriteria: "Indirect question syntax, accurate transit terminology ('transfer lines', 'connecting train', 'platform')."
      },
      {
        id: "day42_bm_003",
        title: "L1 Transit Interference Remediation",
        prompt: "Correct and explain the following common errors: 1. '*Please give side!*' 2. '*Take left from signal.*' 3. '*Where this bus going?*'",
        sampleAnswerEn: "Corrections: 1. 'Excuse me, may I get past?' 2. 'Turn left at the traffic light.' 3. 'Where does this bus go?' or 'Is this bus going to [Destination]?' Explanation: 'Give side' is an unidiomatic literal transfer from Hindi. Directions use 'turn left' rather than 'take left from'. Inquiring about transit requires standard auxiliary inversion ('does this bus go...').",
        sampleAnswerHi: "सुधार: 1. 'Excuse me, may I get past?' 2. 'Turn left at the traffic light.' 3. 'Where does this bus go?' व्याख्या: 'Give side' हिंदी का सीधा अनुवाद है जो अंग्रेजी में गलत है। दिशाओं के लिए 'take left' के स्थान पर 'turn left' का उपयोग होता है। बसों के गंतव्य के लिए सहायक क्रिया का सही प्रयोग आवश्यक है।",
        evaluationCriteria: "Full linguistic correction and explanation of all three Indian English transit interference patterns."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "What preposition is used for buses, trains, and planes?", a: "'On' (e.g., 'on the bus', 'on the train')" },
      { q: "How do you correctly convert '*Take left from the signal*' into standard English?", a: "'Turn left at the traffic light / signal.'" },
      { q: "What does 'You can't miss it' signify?", a: "The destination or landmark is very prominent and effortless to locate." },
      { q: "What is an indirect question format for '*Where is the station?*'?", a: "'Could you tell me where the station is?'" }
    ],
    spacedTips: [
      "Tip 1: Remember to use 'at the intersection' and 'at the roundabout' with preposition 'at' for specific junction points.",
      "Tip 2: Never say '*Please give side*' in international airports or transit hubs; say 'Excuse me, may I get past please?'"
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day41.js'), `export const day41 = ${JSON.stringify(day41, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day41.js");

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day42.js'), `export const day42 = ${JSON.stringify(day42, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day42.js");
