import fs from 'fs';
import path from 'path';

// Day 50: STAGE 5 CUMULATIVE MASTERY REVIEW
const day50 = {
  dayNumber: 50,
  id: "day_50",
  titleEn: "STAGE 5 CUMULATIVE MASTERY REVIEW",
  titleHi: "स्टेज 5 संचयी संपूर्ण महारत समीक्षा (Days 41–49)",
  cefr: "A2.2",
  estMinutes: 75,
  prerequisites: "Days 41–49 Complete Mastery across all Stage 5 domains",
  objectivesEn: [
    "Synthesize all Stage 5 functional domains: Residential Architecture (Day 41), Urban Transit & Navigation (Day 42), Consumer Commerce & Returns (Day 43), Higher Education & Academia (Day 44), Medical Triage & Consultations (Day 45), Pharmacology & Diagnostics (Day 46), Meteorological & Environmental Systems (Day 47), Zoological Fauna & Ecosystems (Day 48), and Anthropometry & Personality Profiling (Day 49).",
    "Consolidate error remediation across all Stage 5 L1 interference traps ('white hairs', 'wearing a pant', 'rain is falling', 'too much cold is there', 'lion is king of forest', 'open the fan', 'give exam', 'medicine dose', 'take the left').",
    "Integrate complex multi-clause syntax: conditional advisories, modal obligations, passives in diagnostics/conservation, and canonical descriptive adjective order.",
    "Demonstrate spontaneous fluency in multi-turn dialogues across real-world professional, clinical, academic, and transit scenarios.",
    "Pass Stage 5 Comprehensive Assessment with 100% syntactic, lexical, and phonological precision."
  ],
  objectivesHi: [
    "स्टेज 5 के सभी 9 व्यावहारिक क्षेत्रों का संपूर्ण एकीकरण: आवास व वास्तुकला (Day 41), शहरी परिवहन व दिशाएं (Day 42), उपभोक्ता अधिकार व खरीद (Day 43), उच्च शिक्षा व विश्वविद्यालय (Day 44), चिकित्सा लक्षण व परामर्श (Day 45), फार्मेसी व विशेषज्ञ (Day 46), मौसम व पर्यावरण (Day 47), प्राणी जगत व आवास (Day 48), और मानव रूप-रंग व व्यक्तित्व (Day 49)।",
    "स्टेज 5 के सभी L1 हिंदी व्याकरणिक दोषों ('white hairs', 'wearing a pant', 'rain is falling', 'give exam', 'medicine dose', 'lion is king') का पूर्ण समाधान।",
    "जटिल बहु-उपवाक्य संरचनाओं, सशर्त सलाह, नैदानिक कर्मवाच्य (passives) और विशेषण क्रम का सहज प्रयोग।",
    "व्यावसायिक, चिकित्सीय, शैक्षणिक और शहरी परिदृश्यों में धाराप्रवाह और प्राकृतिक संवाद क्षमता का प्रदर्शन।",
    "स्टेज 5 की अंतिम संचयी परीक्षा में पूर्ण सटीकता के साथ उत्तीर्ण होना।"
  ],
  teach: {
    hindiExplanation: `बधाई! आप स्टेज 5 (Days 41–50) के शिखर पर पहुंच चुके हैं। डे 50 एक संचयी महा-समीक्षा (Cumulative Grand Mastery Review) है, जो आधुनिक जीवन के सभी 9 प्रमुख व्यावहारिक आयामों को एक साथ जोड़ती है:

1. **आवास और वास्तुकला (Day 41)**: Spacious layouts, lease agreements, security deposit, utilities, fixtures, modular kitchens.
2. **शहरी नेविगेशन और परिवहन (Day 42)**: Commuting, metro turnstiles, roundabouts, interchanges, pedestrian crossings, hailing a cab.
3. **उपभोक्ता मामले और खुदरा खरीदारी (Day 43)**: Defective merchandise, warranties, refund policies, authentic vs counterfeit, invoices.
4. **विश्वविद्यालय और उच्च शिक्षा (Day 44)**: Syllabi, dissertations, academic registrar, auditing courses, tuition fees, faculty office hours.
5. **चिकित्सा परामर्श और लक्षण (Day 45)**: Vertigo, migraine, acute vs chronic symptoms, triage, palpitations, physical examination.
6. **फार्मेसी और विशेषज्ञ (Day 46)**: Generic vs brand-name medications, over-the-counter, MRI scans, biopsies, cardiologists, dermatologists, pediatricians.
7. **मौसम और पर्यावरण (Day 47)**: Drizzle vs downpour, heatwave, smog, Air Quality Index (AQI), flash floods, droughts, sustainability, emissions.
8. **प्राणी जगत और पारिस्थितिकी (Day 48)**: Mammals, reptiles, amphibians, apex predators, scavengers, camouflage, echolocation, hibernation, collective nouns (pride, pack, pod, school, herd).
9. **मानव रूप-रंग और व्यक्तित्व (Day 49)**: Complexion, slender, stocky, petite, towering, bespoke attire, articulate, meticulous, conscientious, resilient, pragmatic, well-groomed.

**L1 हिंदी भाषियों के लिए स्टेज 5 के गोल्डन रूल्स (Master Rules)**:
1. कभी न कहें: '*I am giving an exam.*' ❌ -> "**I am taking / sitting for an exam.**" ✔️
2. कभी न कहें: '*He has white hairs.*' ❌ -> "**He has gray hair.**" ✔️
3. कभी न कहें: '*She is wearing a pant.*' ❌ -> "**She is wearing a pair of pants / trousers.**" ✔️
4. कभी न कहें: '*Today rain is falling.*' ❌ -> "**It is raining heavily / pouring down.**" ✔️
5. कभी न कहें: '*I saw a group of wolves / fish.*' ❌ -> "**A pack of wolves / A school of fish.**" ✔️`,
    englishExplanation: `Day 50 represents the pinnacle cumulative synthesis of Stage 5, integrating advanced descriptive, professional, clinical, environmental, and interpersonal linguistic capabilities.

Core Competency Pillars:
1. **Multi-Domain Lexical Fluidity**: Seamlessly navigating technical terminology across architecture, urban logistics, consumer law, academia, pathology, meteorology, zoology, and anthropometry.
2. **Grammatical Rigor**: Mastery of uncountable nouns (hair, advice, medication, precipitation), garment plurality ('a pair of...'), collective noun agreement ('a pride of lions is...'), and impersonal dummy subjects ('it is bitterly cold').
3. **High-Stakes Pragmatic Precision**: Executing dispute negotiations, doctor-patient triage consultations, thesis defense inquiries, and environmental sustainability proposals.`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Stage 5 Uncountable Noun Universal Rule",
        description: "Treat 'hair', 'precipitation', 'furniture', 'luggage', 'advice', and 'medication' as strictly uncountable singular nouns in standard English.",
        register: "Universal Grammar"
      },
      {
        ruleNumber: 2,
        title: "Collective Fauna and Garment Plurality Synthesis",
        description: "Use fixed animal collective units ('a pack of wolves', 'a school of fish', 'a pod of dolphins') and plural paired lower garments ('a pair of jeans/trousers').",
        register: "Morphosyntactic Agreement"
      },
      {
        ruleNumber: 3,
        title: "Dummy Subject 'It' for Meteorology and Ambient States",
        description: "Always employ impersonal dummy 'It': 'It is sweltering', 'It is pouring down', 'It is five kilometers away' (NEVER '*rain is falling*' or '*cold is there*').",
        register: "Ambient Syntax"
      },
      {
        ruleNumber: 4,
        title: "Collocational Precision Across Professional Registers",
        description: "Take an exam (not give), take a lease (not make), fill a prescription (not take medicine), hail a cab (not catch taxi), and reach a verdict.",
        register: "Collocational Integrity"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Cross-Domain Diagnostic Consultation",
        formula: "The + [Specialist: cardiologist / dermatologist] + confirmed that + [Patient] + requires + [Diagnostic: an MRI / a biopsy] + to evaluate + [Symptom].",
        exampleEn: "The cardiologist confirmed that the patient requires an echocardiogram to evaluate recurrent palpitations.",
        meaningHi: "हृदयरोग विशेषज्ञ ने पुष्टि की कि बार-बार होने वाली घबराहट का मूल्यांकन करने के लिए मरीज को इकोकार्डियोग्राम की आवश्यकता है।"
      },
      {
        subjectGroup: "Ecological / Meteorological Synthesis",
        formula: "Due to + [Condition: severe heatwaves / heavy precipitation], the + [Fauna: herd of elephants] + migrated across + [Habitat / Corridor].",
        exampleEn: "Due to the prolonged drought, the herd of elephants migrated across the national wildlife corridor.",
        meaningHi: "लंबे सूखे के कारण, हाथियों का झुंड राष्ट्रीय वन्यजीव गलियारे के पार चला गया।"
      },
      {
        subjectGroup: "Academic & Professional Profile",
        formula: "[Subject] + is a/an + [Adjective 1: articulate / conscientious] + scholar who defended their + [Academic Work: doctoral dissertation] + on + [Topic].",
        exampleEn: "She is an articulate and conscientious scholar who defended her doctoral dissertation on urban transit sustainability.",
        meaningHi: "वह एक सुवक्ता और कर्तव्यनिष्ठ विद्वान हैं जिन्होंने शहरी परिवहन स्थिरता पर अपने डॉक्टरेट शोध प्रबंध का बचाव किया।"
      },
      {
        subjectGroup: "Urban Transit & Consumer Transaction",
        formula: "After tapping through the + [Turnstiles], the commuter requested a + [Refund / Exchange] + for the + [Defective Merchandise].",
        exampleEn: "After tapping through the metro turnstiles, the commuter requested a full refund for the defective smart card.",
        meaningHi: "मेट्रो टर्नस्टाइल से टैप करने के बाद, यात्री ने खराब स्मार्ट कार्ड के लिए पूर्ण रिफंड का अनुरोध किया।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Stage 5 Master Remediation Matrix (Top 5 Hindi-English Interference Patterns)",
      hindiPattern: "1. '*He has white hairs and is wearing a pant.*'\n2. '*I am giving my exam today.*'\n3. '*Today too much rain is falling outside.*'\n4. '*A big group of fish and lion king of jungle.*'\n5. '*Doctor gave me high medicine dose.*'",
      potentialInterference: "Literal transfer of Hindi syntax into English across clothing, exams, weather, animal groups, and medicine.",
      explanation: "Standard English mandates: 1. 'He has gray hair and is wearing a pair of pants.' 2. 'I am taking/sitting for my exam.' 3. 'It is pouring down with rain outside.' 4. 'A school of fish and the lion is an apex predator.' 5. 'The physician prescribed a high dosage of medication.'",
      naturalSolution: "Memorize and internalize these 5 native standard collocations to achieve complete CEFR A2.2 mastery."
    }
  },
  learn: {
    vocabulary: [
      { id: "day50_vocab_001", word: "Tenancy", pos: "Noun", ipa: "/ˈten.ən.si/", meaningHi: "किरायेदारी / पट्टे की अवधि", exampleEn: "The tenancy agreement stipulates a two-year lease with monthly rental payments.", exampleHi: "किरायेदारी समझौते में मासिक किराए के भुगतान के साथ दो साल के पट्टे का अनुबंध है।" },
      { id: "day50_vocab_002", word: "Turnstile", pos: "Noun", ipa: "/ˈtɜːn.staɪl/", meaningHi: "घूमने वाला प्रवेश द्वार (मेट्रो/स्टेशन पर)", exampleEn: "Commuters must tap their contactless smart cards to pass through the metro turnstiles.", exampleHi: "यात्रियों को मेट्रो टर्नस्टाइल से गुजरने के लिए अपने कॉन्टैक्टलेस स्मार्ट कार्ड टैप करने होंगे।" },
      { id: "day50_vocab_003", word: "Counterfeit", pos: "Adjective/Noun", ipa: "/ˈkaʊn.tə.fɪt/", meaningHi: "नकली / जाली सामान", exampleEn: "Customs authorities confiscated thousands of counterfeit designer handbags.", exampleHi: "सीमा शुल्क अधिकारियों ने हजारों जाली (नकली) डिजाइनर हैंडबैग जब्त किए।" },
      { id: "day50_vocab_004", word: "Dissertation", pos: "Noun", ipa: "/ˌdɪs.əˈteɪ.ʃən/", meaningHi: "शोध प्रबंध / थीसिस", exampleEn: "He successfully defended his doctoral dissertation before the academic committee.", exampleHi: "उन्होंने अकादमिक समिति के समक्ष अपने डॉक्टरेट शोध प्रबंध (थीसिस) का सफलतापूर्वक बचाव किया।" },
      { id: "day50_vocab_005", word: "Palpitation", pos: "Noun", ipa: "/ˌpæl.pɪˈteɪ.ʃən/", meaningHi: "दिल की असामान्य तेज धड़कन / घबराहट", exampleEn: "The physician ran an ECG to investigate the patient's sudden heart palpitations.", exampleHi: "चिकित्सक ने मरीज के दिल की अचानक तेज धड़कन की जांच के लिए ईसीजी किया।" },
      { id: "day50_vocab_006", word: "Cardiologist", pos: "Noun", ipa: "/ˌkɑː.diˈɒl.ə.dʒɪst/", meaningHi: "हृदयरोग विशेषज्ञ डॉक्टर", exampleEn: "The cardiologist recommended immediate lifestyle modifications to lower arterial pressure.", exampleHi: "हृदयरोग विशेषज्ञ ने धमनी दबाव (रक्तचाप) को कम करने के लिए तत्काल जीवनशैली में बदलाव की सिफारिश की।" },
      { id: "day50_vocab_007", word: "Smog", pos: "Noun", ipa: "/smɒɡ/", meaningHi: "धुआंसा / विषैला धुआं और कोहरा (Smoke + Fog)", exampleEn: "Dense winter smog pushed the metropolitan Air Quality Index into hazardous territory.", exampleHi: "सर्दियों के घने स्मॉग ने महानगर के वायु गुणवत्ता सूचकांक को खतरनाक क्षेत्र में पहुंचा दिया।" },
      { id: "day50_vocab_008", word: "Apex predator", pos: "Noun phrase", ipa: "/ˈeɪ.peks ˈpred.ə.tər/", meaningHi: "शीर्ष शिकारी (खाद्य श्रृंखला में सबसे ऊपर)", exampleEn: "Lions, tigers, and orcas are apex predators that regulate prey populations.", exampleHi: "शेर, बाघ और ओर्का शीर्ष शिकारी हैं जो शिकार की आबादी को नियंत्रित करते हैं।" },
      { id: "day50_vocab_009", word: "Articulate", pos: "Adjective", ipa: "/ɑːˈtɪk.jə.lət/", meaningHi: "सुवक्ता / विचारों को स्पष्टता से व्यक्त करने वाला", exampleEn: "She delivered an articulate keynote address on global sustainable urban planning.", exampleHi: "उन्होंने वैश्विक सतत शहरी नियोजन पर एक स्पष्ट और प्रभावी मुख्य भाषण दिया।" },
      { id: "day50_vocab_010", word: "Meticulous", pos: "Adjective", ipa: "/məˈtɪk.jə.ləs/", meaningHi: "बेहद बारीक, सावधान और काम में कोई कसर न छोड़ने वाला", exampleEn: "The forensic auditor conducted a meticulous review of all financial receipts.", exampleHi: "फोरेंसिक ऑडिटर ने सभी वित्तीय रसीदों की बारीक समीक्षा की।" },
      { id: "day50_vocab_011", word: "Bespoke", pos: "Adjective", ipa: "/bɪˈspəʊk/", meaningHi: "कस्टम-निर्मित / विशेष नाप से सिला हुआ", exampleEn: "He wore a bespoke tailored suit crafted from fine Italian merino wool.", exampleHi: "उसने बढ़िया इटैलियन मेरिनो ऊन से बना एक विशेष नाप का सिला हुआ सूट पहना था।" },
      { id: "day50_vocab_012", word: "Resilient", pos: "Adjective", ipa: "/rɪˈzɪl.i.ənt/", meaningHi: "कठिनाइयों से तुरंत उबरने वाला / जुझारू", exampleEn: "Resilient coral ecosystems gradually recover when sea water temperatures stabilize.", exampleHi: "समुद्र के पानी का तापमान स्थिर होने पर जुझारू मूंगा पारिस्थितिकी तंत्र धीरे-धीरे ठीक हो जाता है।" },
      { id: "day50_vocab_013", word: "Drought", pos: "Noun", ipa: "/draʊt/", meaningHi: "सूखा / अकाल", exampleEn: "The multi-year drought depleted agricultural reservoirs and damaged harvest yields.", exampleHi: "कई वर्षों के सूखे ने कृषि जलाशयों को खाली कर दिया और फसल की पैदावार को नुकसान पहुँचाया।" },
      { id: "day50_vocab_014", word: "Echolocation", pos: "Noun", ipa: "/ˌek.əʊ.ləʊˈkeɪ.ʃən/", meaningHi: "प्रतिध्वनि निर्धारण (दिशा व शिकार पहचानना)", exampleEn: "Bats emit high-frequency pulses to navigate through pitch-black caves via echolocation.", exampleHi: "चमगादड़ इकोलोकेशन के माध्यम से घने अंधेरे गुफाओं में रास्ता खोजने के लिए उच्च-आवृत्ति ध्वनि छोड़ते हैं।" },
      { id: "day50_vocab_015", word: "Conscientious", pos: "Adjective", ipa: "/ˌkɒn.ʃiˈen.ʃəs/", meaningHi: "कर्तव्यनिष्ठ, ईमानदार और ज़िम्मेदार", exampleEn: "She is a conscientious scholar who meticulously verifies every historical citation.", exampleHi: "वह एक कर्तव्यनिष्ठ विद्वान हैं जो हर ऐतिहासिक उद्धरण को बारीकी से सत्यापित करती हैं।" },
      { id: "day50_vocab_016", word: "Pragmatic", pos: "Adjective", ipa: "/præɡˈmæt.ɪk/", meaningHi: "व्यावहारिक (सैद्धांतिक के बजाय वास्तविक परिणामों पर केंद्रित)", exampleEn: "We require a pragmatic transit policy that addresses daily traffic congestion.", exampleHi: "हमें एक व्यावहारिक परिवहन नीति की आवश्यकता है जो दैनिक यातायात की भीड़ को हल करे।" },
      { id: "day50_vocab_017", word: "Downpour", pos: "Noun", ipa: "/ˈdaʊn.pɔːr/", meaningHi: "मूसलाधार बारिश / झमाझम वर्षा", exampleEn: "A sudden monsoon downpour flooded low-lying streets within thirty minutes.", exampleHi: "अचानक आए मानसूनी मूसलाधार बारिश ने तीस मिनट के भीतर निचले इलाकों की सड़कों को जलमग्न कर दिया।" },
      { id: "day50_vocab_018", word: "Sanctuary", pos: "Noun", ipa: "/ˈsæŋk.tʃʊə.ri/", meaningHi: "वन्यजीव अभयारण्य / सुरक्षित शरणस्थल", exampleEn: "The national sanctuary protects endangered Bengal tigers from illegal poaching.", exampleHi: "राष्ट्रीय अभयारण्य लुप्तप्राय बंगाल टाइगर्स को अवैध शिकार से बचाता है।" },
      { id: "day50_vocab_019", word: "Pediatrician", pos: "Noun", ipa: "/ˌpiː.di.əˈtrɪʃ.ən/", meaningHi: "बाल रोग विशेषज्ञ", exampleEn: "The pediatrician administered mandatory childhood immunizations gently.", exampleHi: "बाल रोग विशेषज्ञ ने बच्चों के अनिवार्य टीकाकरण को बहुत प्यार से लगाया।" },
      { id: "day50_vocab_020", word: "Ensemble", pos: "Noun", ipa: "/ɒnˈsɒm.bəl/", meaningHi: "पहनावा / कपड़ों और एक्सेसरीज़ का संयोजन", exampleEn: "Her formal evening ensemble received unanimous acclaim at the diplomatic reception.", exampleHi: "उनके औपचारिक शाम के पहनावे को राजनयिक स्वागत समारोह में सर्वसम्मत प्रशंसा मिली।" }
    ],
    spokenPhrases: [
      { id: "day50_phrase_001", phrase: "I am taking my comprehensive university exam tomorrow morning.", register: "Academic Collocation", meaningHi: "मैं कल सुबह अपनी विश्वविद्यालय की व्यापक परीक्षा दे रहा हूँ।" },
      { id: "day50_phrase_002", phrase: "It is pouring down with rain, so take an umbrella.", register: "Meteorological Syntax", meaningHi: "बाहर मूसलाधार बारिश हो रही है, इसलिए छाता ले लें।" },
      { id: "day50_phrase_003", phrase: "He has distinguished gray hair and was wearing a pair of tailored trousers.", register: "Physical & Sartorial", meaningHi: "उनके प्रतिष्ठित काले-सफेद बाल हैं और उन्होंने एक सिली हुई पतलून पहनी थी।" },
      { id: "day50_phrase_004", phrase: "A pride of lions was spotted resting near the watering hole.", register: "Faunal Collective Noun", meaningHi: "पानी के गड्ढे के पास शेरों का एक झुंड आराम करते देखा गया।" },
      { id: "day50_phrase_005", phrase: "Could you please fill this prescription with generic bio-equivalents?", register: "Pharmacology Request", meaningHi: "क्या आप कृपया इस पर्चे को जेनेरिक दवाओं के साथ दे सकते हैं?" },
      { id: "day50_phrase_006", phrase: "I would like to request a full refund for this defective merchandise.", register: "Consumer Rights", meaningHi: "मैं इस खराब सामान के लिए पूर्ण रिफंड का अनुरोध करना चाहता हूँ।" },
      { id: "day50_phrase_007", phrase: "The Air Quality Index has surged into the hazardous threshold.", register: "Environmental Alert", meaningHi: "वायु गुणवत्ता सूचकांक खतरनाक सीमा तक पहुंच गया है।" },
      { id: "day50_phrase_008", phrase: "Tap your contactless card at the turnstile to enter the metro platform.", register: "Transit Instruction", meaningHi: "मेट्रो प्लेटफॉर्म में प्रवेश करने के लिए टर्नस्टाइल पर अपना कार्ड टैप करें।" },
      { id: "day50_phrase_009", phrase: "The tenancy agreement requires a two-month refundable security deposit.", register: "Lease Negotiation", meaningHi: "किरायेदारी समझौते के लिए दो महीने की वापसी योग्य सुरक्षा जमा की आवश्यकता होती है।" },
      { id: "day50_phrase_010", phrase: "The cardiologist scheduled an echocardiogram to investigate the palpitations.", register: "Clinical Consultation", meaningHi: "हृदयरोग विशेषज्ञ ने घबराहट की जांच के लिए इकोकार्डियोग्राम तय किया।" },
      { id: "day50_phrase_011", phrase: "She is an articulate, conscientious, and resilient team leader.", register: "Personality Assessment", meaningHi: "वह एक सुवक्ता, कर्तव्यनिष्ठ और जुझारू टीम लीडर हैं।" },
      { id: "day50_phrase_012", phrase: "Never judge a book by its cover; look at character and competence.", register: "Idiomatic Mastery", meaningHi: "कभी भी केवल बाहरी आवरण से मूल्यांकन न करें; चरित्र और क्षमता को देखें।" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day50_ex_001", english: "The tenant signed a two-year lease agreement and paid a two-month refundable security deposit for the spacious downtown duplex.", hindi: "किरायेदार ने दो साल के पट्टे समझौते पर हस्ताक्षर किए और शहर के विशाल डुप्लेक्स के लिए दो महीने की वापसी योग्य सुरक्षा जमा राशि का भुगतान किया।" },
      { id: "day50_ex_002", english: "Commuters can transfer seamlessly between the rapid transit lines at the central underground interchange.", hindi: "यात्री केंद्रीय भूमिगत इंटरचेंज पर रैपिड ट्रांजिट लाइनों के बीच निर्बाध रूप से स्थानांतरण कर सकते हैं।" },
      { id: "day50_ex_003", english: "Under consumer protection regulations, customers are entitled to an immediate replacement or full refund for defective merchandise.", hindi: "उपभोक्ता संरक्षण नियमों के तहत, ग्राहक दोषपूर्ण सामान के लिए तत्काल प्रतिस्थापन या पूर्ण रिफंड के हकदार हैं।" },
      { id: "day50_ex_004", english: "The postgraduate scholar will defend her doctoral dissertation on renewable energy policy before the university academic board.", hindi: "स्नातकोत्तर विद्वान विश्वविद्यालय अकादमिक बोर्ड के समक्ष नवीकरणीय ऊर्जा नीति पर अपने डॉक्टरेट शोध प्रबंध का बचाव करेंगी।" },
      { id: "day50_ex_005", english: "The triage nurse measured the patient's vital signs and referred him immediately to the on-call cardiologist for acute palpitations.", hindi: "ट्राइएज नर्स ने मरीज के महत्वपूर्ण संकेतों को मापा और तीव्र घबराहट के लिए उसे तुरंत ऑन-कॉल हृदय रोग विशेषज्ञ के पास भेजा।" },
      { id: "day50_ex_006", english: "The clinical pharmacist dispensed a generic bio-equivalent medication with identical therapeutic efficacy to lower pharmaceutical expenses.", hindi: "क्लिनिकल फार्मासिस्ट ने दवा के खर्च को कम करने के लिए समान चिकित्सीय प्रभावकारिता वाली जेनेरिक दवा वितरित की।" },
      { id: "day50_ex_007", english: "A severe winter smog blanketed the metropolitan region, driving the Air Quality Index well into the hazardous zone.", hindi: "सर्दियों के एक गंभीर स्मॉग ने महानगर को ढक लिया, जिससे वायु गुणवत्ता सूचकांक खतरनाक क्षेत्र में पहुंच गया।" },
      { id: "day50_ex_008", english: "The Bengal tiger is a solitary apex predator that plays an indispensable role in maintaining forest biodiversity equilibrium.", hindi: "बंगाल टाइगर एक एकांतप्रिय शीर्ष शिकारी है जो वन जैव विविधता संतुलन बनाए रखने में एक अनिवार्य भूमिका निभाता है।" },
      { id: "day50_ex_009", english: "Dr. Sharma is an articulate, charismatic professor with distinguished silver-gray hair and an impeccably tailored bespoke suit.", hindi: "डॉ. शर्मा प्रतिष्ठित चांदी जैसे भूरे बालों और त्रुटिहीन रूप से सिले हुए कस्टम सूट वाले एक सुवक्ता, प्रभावशाली प्रोफेसर हैं।" },
      { id: "day50_ex_010", english: "A vast school of silver fish darted synchronously across the vibrant coral reef to evade approaching predatory barracudas.", hindi: "शिकारी बाराकुडा से बचने के लिए चांदी की मछलियों का एक विशाल झुंड जीवंत मूंगा चट्टान के पार एक साथ तेजी से निकला।" },
      { id: "day50_ex_011", english: "I am sitting for my final medical biochemistry examination on Thursday afternoon.", hindi: "मैं गुरुवार दोपहर को अपनी अंतिम मेडिकल बायोकेमिस्ट्री परीक्षा दे रहा हूँ।" },
      { id: "day50_ex_012", english: "It was sweltering hot and humid throughout the afternoon, but it poured down torrential rain by sunset.", hindi: "पूरी दोपहर भीषण गर्मी और उमस थी, लेकिन सूर्यास्त तक मूसलाधार बारिश होने लगी।" },
      { id: "day50_ex_013", english: "Anti-poaching forest patrols protect endangered rhinos from illegal trafficking networks in the national wildlife sanctuary.", hindi: "शिकार-रोधी वन गश्ती दल राष्ट्रीय वन्यजीव अभयारण्य में अवैध तस्करी नेटवर्क से लुप्तप्राय गैंडों की रक्षा करते हैं।" },
      { id: "day50_ex_014", english: "She wore a stylish pair of linen trousers and a tailored blazer to her corporate project presentation.", hindi: "उसने अपनी कॉर्पोरेट प्रोजेक्ट प्रस्तुति के लिए एक स्टाइलिश लिनन पतलून और एक सिली हुई ब्लेज़र पहनी थी।" },
      { id: "day50_ex_015", english: "The dermatologist performed a diagnostic skin biopsy to evaluate the irregular pigmentation on the patient's forearm.", hindi: "त्वचा रोग विशेषज्ञ ने मरीज के अग्रभाग पर अनियमित रंजकता का मूल्यांकन करने के लिए एक नैदानिक त्वचा बायोप्सी की।" },
      { id: "day50_ex_016", english: "A pod of humpback whales was spotted migrating along the cold coastal continental shelf.", hindi: "हंपबैक व्हेल का एक समूह ठंडे तटीय महाद्वीपीय शेल्फ के साथ प्रवास करते हुए देखा गया था।" },
      { id: "day50_ex_017", english: "The academic registrar approved his formal request to audit advanced quantum physics lectures next semester.", hindi: "अकादमिक रजिस्ट्रार ने अगले सेमेस्टर में उन्नत क्वांटम भौतिकी व्याख्यानों का ऑडिट करने के उनके औपचारिक अनुरोध को मंजूरी दे दी।" },
      { id: "day50_ex_018", english: "He is a conscientious and meticulous editor who scrutinizes every bibliographic reference before final publication.", hindi: "वह एक कर्तव्यनिष्ठ और सूक्ष्म संपादक हैं जो अंतिम प्रकाशन से पहले हर ग्रंथ सूची संदर्भ की जांच करते हैं।" },
      { id: "day50_ex_019", english: "The residential lease agreement explicitly forbids unauthorized subletting of the property to third parties.", hindi: "आवासीय पट्टा समझौता तीसरे पक्ष को संपत्ति के अनधिकृत उप-किराए (सबलेटिंग) पर स्पष्ट रूप से रोक लगाता है।" },
      { id: "day50_ex_020", english: "Bats rely on ultrasonic echolocation pulses to navigate and capture flying insects in absolute darkness.", hindi: "चमगादड़ पूर्ण अंधेरे में उड़ने वाले कीड़ों को पकड़ने और रास्ता खोजने के लिए पराश्रव्य इकोलोकेशन ध्वनि पर निर्भर करते हैं।" },
      { id: "day50_ex_021", english: "The consumer retained the original purchase invoice and warranty card to claim a free manufacturer repair.", hindi: "निःशुल्क निर्माता मरम्मत का दावा करने के लिए उपभोक्ता ने मूल खरीद चालान और वारंटी कार्ड अपने पास रखा।" },
      { id: "day50_ex_022", english: "Resilient leadership requires pragmatic decision-making and an even-tempered response to unexpected market volatility.", hindi: "जुझारू नेतृत्व के लिए व्यावहारिक निर्णय लेने और अप्रत्याशित बाजार अस्थिरता के लिए एक शांत प्रतिक्रिया की आवश्यकता होती है।" },
      { id: "day50_ex_023", english: "The pediatrician reassured the anxious parents that the toddler's fever was a standard post-vaccination reaction.", hindi: "बाल रोग विशेषज्ञ ने चिंतित माता-पिता को आश्वस्त किया कि बच्चे का बुखार टीकाकरण के बाद की एक सामान्य प्रतिक्रिया थी।" },
      { id: "day50_ex_024", english: "Gale-force winds and torrential precipitation triggered severe flash floods along the mountain highway.", hindi: "प्रचंड आंधी और मूसलाधार बारिश ने पहाड़ी राजमार्ग पर भीषण अचानक बाढ़ ला दी।" },
      { id: "day50_ex_025", english: "A pack of gray wolves established a territorial boundary spanning over two hundred square kilometers of wilderness.", hindi: "ग्रे भेड़ियों के एक झुंड ने दो सौ वर्ग किलोमीटर से अधिक जंगल में एक क्षेत्रीय सीमा स्थापित की।" }
    ]
  },
  pronunciation: {
    focusSound: "Cumulative Stage 5 Phonetic Synthesis: Stress, Vowel Length, and Syllable Rhythm",
    phoneticNotes: "1. Stress penultimate syllables in /-ʃən/: /ˌdɪs.əˈteɪ.ʃən/, /ˌpæl.pɪˈteɪ.ʃən/, /prɪˌsɪp.ɪˈteɪ.ʃən/.\n2. French loanword final sounds: /ˈkæm.ə.flɑːʒ/ (/ʒ/), /ɒnˈsɒm.bəl/ (/ɒn-/, /-bəl/).\n3. Diphthong /aʊ/: /draʊt/ 'Drought' (rhymes with 'out' - never /drɔːt/).\n4. Polysyllabic adjectives: /ˌkɒn.ʃiˈen.ʃəs/ (3rd syllable stress), /məˈtɪk.jə.ləs/ (2nd syllable stress).",
    minimalPairs: [
      { wordA: "Drought", ipaA: "/draʊt/", wordB: "Draft", ipaB: "/drɑːft/" },
      { wordA: "Hair", ipaA: "/heər/", wordB: "Hare", ipaB: "/heər/" },
      { wordA: "Prey", ipaA: "/preɪ/", wordB: "Pray", ipaB: "/preɪ/" },
      { wordA: "Suit", ipaA: "/suːt/", wordB: "Sweet", ipaB: "/swiːt/" },
      { wordA: "Breeze", ipaA: "/briːz/", wordB: "Freeze", ipaB: "/friːz/" }
    ],
    drills: [
      { sentence: "The conscientious doctor prescribed generic medication.", focus: "Rhythm in /ˌkɒn.ʃiˈen.ʃəs/ & /dʒəˈner.ɪk/" },
      { sentence: "A pride of lions stalked a herd across the sanctuary.", focus: "Faunal collective rhythm" },
      { sentence: "The candidate wore a bespoke suit with a chiseled look.", focus: "Stress in /bɪˈspəʊk/ & /ˈtʃɪz.əld/" },
      { sentence: "The severe drought caused unprecedented crop failures.", focus: "Vowel /aʊ/ in 'drought' /draʊt/" },
      { sentence: "The scholar defended her dissertation with articulate clarity.", focus: "Stress in /ˌdɪs.əˈteɪ.ʃən/ & /ɑːˈtɪk.jə.lət/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day50_ex_001",
        type: "error_correction",
        prompt: "Correct the sentence: 'I am giving my university examination today.'",
        correctAnswer: "I am taking my university examination today.",
        acceptableAnswers: [
          "I am sitting for my university examination today."
        ],
        explanationEn: "In English, students 'take' or 'sit for' exams (teachers 'give' them).",
        explanationHi: "छात्र परीक्षा 'take / sit for' करते हैं, 'give' नहीं।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day50_ex_002",
        type: "error_correction",
        prompt: "Correct the sentence: 'He has white hairs and is wearing a new pant.'",
        correctAnswer: "He has gray hair and is wearing a new pair of pants.",
        acceptableAnswers: [
          "He has grey hair and is wearing new pants.",
          "He has gray hair and is wearing a new pair of trousers."
        ],
        explanationEn: "'Hair' is uncountable ('gray hair') and lower garments are plural ('a pair of pants').",
        explanationHi: "'Gray hair' (अनकाउंटेबल) और 'a pair of pants' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day50_ex_003",
        type: "error_correction",
        prompt: "Correct the sentence: 'Today rain is falling very fast outside.'",
        correctAnswer: "It is pouring down with rain outside today.",
        acceptableAnswers: [
          "It is raining very heavily outside today.",
          "It is pouring down outside today."
        ],
        explanationEn: "Use impersonal dummy 'It': 'It is raining heavily / pouring down'.",
        explanationHi: "मौसम के लिए 'It is raining heavily' या 'It is pouring down' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day50_ex_004",
        type: "error_correction",
        prompt: "Correct the sentence: 'A big group of wolves attacked the sheep.'",
        correctAnswer: "A pack of wolves attacked the sheep.",
        explanationEn: "The collective noun for wolves is a 'pack of wolves'.",
        explanationHi: "भेड़ियों के समूह को 'a pack of wolves' कहते हैं।",
        difficulty: "easy",
        skillTag: "COLLECTIVE_NOUNS"
      },
      {
        id: "day50_ex_005",
        type: "multiple_choice",
        prompt: "What is a 'generic medication'?",
        options: [
          "A drug with the exact same active chemical ingredient, dosage, and efficacy as the brand-name version, sold at a lower cost",
          "An illegal fake medicine",
          "An herbal tea with no medical proof",
          "A medicine only used for animals"
        ],
        correctAnswer: "A drug with the exact same active chemical ingredient, dosage, and efficacy as the brand-name version, sold at a lower cost",
        explanationEn: "Generic drugs have identical active ingredients to brand-name counterparts.",
        explanationHi: "ब्रांड-नेम दवा के समान सक्रिय रासायनिक घटक और प्रभाव वाली सस्ती दवा को 'generic medication' कहते हैं।",
        difficulty: "easy",
        skillTag: "PHARMACOLOGY"
      },
      {
        id: "day50_ex_006",
        type: "fill_blank",
        prompt: "A written document by which a landlord grants the use of real estate property to a tenant for a specified period is a _______ agreement.",
        correctAnswer: "lease",
        acceptableAnswers: ["tenancy"],
        explanationEn: "A 'lease' or 'tenancy' agreement.",
        explanationHi: "पट्टे के अनुबंध को 'lease agreement' या 'tenancy agreement' कहते हैं।",
        difficulty: "easy",
        skillTag: "REAL_ESTATE"
      },
      {
        id: "day50_ex_007",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'मेट्रो प्लेटफॉर्म में प्रवेश करने के लिए टर्नस्टाइल पर अपना कार्ड टैप करें।'",
        correctAnswer: "Tap your card at the turnstile to enter the metro platform.",
        acceptableAnswers: [
          "Tap your smart card at the turnstiles to enter the metro platform.",
          "Please tap your transit card at the turnstile to access the platform."
        ],
        explanationEn: "'Tap your card at the turnstile to enter the metro platform.'",
        explanationHi: "'Tap your card at the turnstile' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day50_ex_008",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Under statutory consumer protection, you are entitled to a full refund for defective merchandise.'",
        correctAnswer: "वैधानिक उपभोक्ता संरक्षण के तहत, आप खराब सामान के लिए पूर्ण रिफंड के हकदार हैं।",
        acceptableAnswers: [
          "उपभोक्ता कानून के तहत आप दोषपूर्ण वस्तु के पूरे पैसे वापस पाने के हकदार हैं।"
        ],
        explanationEn: "'Statutory consumer protection' translates as वैधानिक उपभोक्ता संरक्षण.",
        explanationHi: "उपभोक्ता अधिकारों का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day50_ex_009",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [defended / doctoral / her / scholar / the / dissertation / successfully]",
        correctAnswer: "The scholar successfully defended her doctoral dissertation.",
        explanationEn: "Subject + Adverb + Verb + Object.",
        explanationHi: "सही क्रम: The scholar successfully defended her doctoral dissertation.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day50_ex_010",
        type: "multiple_choice",
        prompt: "Which specialist physician diagnoses and treats disorders of the skin and hair?",
        options: ["Dermatologist", "Cardiologist", "Pediatrician", "Oncologist"],
        correctAnswer: "Dermatologist",
        explanationEn: "A dermatologist treats skin and hair conditions.",
        explanationHi: "त्वचा और बालों के विशेषज्ञ डॉक्टर को 'dermatologist' कहते हैं।",
        difficulty: "easy",
        skillTag: "MEDICAL_SPECIALISTS"
      },
      {
        id: "day50_ex_011",
        type: "fill_blank",
        prompt: "A dangerous, toxic mixture of smoke, vehicular emissions, and atmospheric fog is called _______.",
        correctAnswer: "smog",
        explanationEn: "Smog = Smoke + Fog.",
        explanationHi: "धुआं और कोहरे के विषैले मिश्रण को 'smog' कहते हैं।",
        difficulty: "easy",
        skillTag: "ENVIRONMENTAL_TERMS"
      },
      {
        id: "day50_ex_012",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nPatient: 'Doctor, my heart occasionally flutters and races uncontrollably.'\nPhysician: 'We will perform an ECG to evaluate these sudden _______.'",
        options: ["palpitations", "syllabi", "turnstiles", "deluges"],
        correctAnswer: "palpitations",
        explanationEn: "'Palpitations' refers to rapid, irregular heartbeats.",
        explanationHi: "दिल की असामान्य तेज धड़कन को 'palpitations' कहते हैं।",
        difficulty: "easy",
        skillTag: "CLINICAL_DISCOURSE"
      },
      {
        id: "day50_ex_013",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'बंगाल टाइगर एक शीर्ष शिकारी है जो पूरे जंगल के पारिस्थितिक संतुलन की रक्षा करता है।'",
        correctAnswer: "The Bengal tiger is an apex predator that protects the forest's ecological balance.",
        acceptableAnswers: [
          "The Bengal tiger is an apex predator that maintains the ecological equilibrium of the forest.",
          "Bengal tigers are apex predators protecting forest ecological balance."
        ],
        explanationEn: "'The Bengal tiger is an apex predator that protects the forest's ecological balance.'",
        explanationHi: "'Apex predator' और 'ecological balance / equilibrium' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day50_ex_014",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The architect paid meticulous attention to the structural blueprints.'",
        correctAnswer: "The architect paid meticulous attention to the structural blueprints.",
        explanationEn: "Focus on spelling 'meticulous' and 'blueprints'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day50_ex_015",
        type: "sentence_transformation",
        prompt: "Rewrite using 'bespoke': 'He wore a custom-made three-piece suit crafted to his exact body measurements.'",
        correctAnswer: "He wore a bespoke three-piece suit.",
        explanationEn: "'Bespoke' precisely captures custom-tailored to individual measure.",
        explanationHi: "'Bespoke' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day50_ex_016",
        type: "matching",
        prompt: "Match the collective noun to its animal species:\n1. Lions\n2. Wolves\n3. Dolphins\n4. Fish",
        options: [
          "1-Pride, 2-Pack, 3-Pod, 4-School",
          "1-Pack, 2-Pride, 3-School, 4-Pod",
          "1-Pod, 2-School, 3-Pride, 4-Pack",
          "1-School, 2-Pod, 3-Pack, 4-Pride"
        ],
        correctAnswer: "1-Pride, 2-Pack, 3-Pod, 4-School",
        explanationEn: "Accurate animal collective noun pairings.",
        explanationHi: "समूहवाचक संज्ञाओं का सही मिलान: Lions->Pride, Wolves->Pack, Dolphins->Pod, Fish->School.",
        difficulty: "easy",
        skillTag: "COLLECTIVE_NOUN_MATCHING"
      },
      {
        id: "day50_ex_017",
        type: "error_correction",
        prompt: "Correct the sentence: 'The climate today is very much hot and sweating.'",
        correctAnswer: "The weather today is sweltering and humid.",
        acceptableAnswers: [
          "The weather is very hot and humid today.",
          "It is sweltering hot today."
        ],
        explanationEn: "Use 'weather' (not climate) and 'sweltering' for oppressive heat.",
        explanationHi: "दैनिक स्थिति के लिए 'weather' और भीषण पसीने वाली गर्मी के लिए 'sweltering' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "METEOROLOGICAL_ACCURACY"
      },
      {
        id: "day50_ex_018",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'A pod of humpback whales leaped synchronously through the ocean waves.'",
        correctAnswer: "हंपबैक व्हेल का एक समूह समुद्र की लहरों में समकालिक रूप से उछल पड़ा।",
        acceptableAnswers: [
          "व्हेल का एक झुंड समुद्र की लहरों से एक साथ ऊपर कूदा।"
        ],
        explanationEn: "'A pod of humpback whales' translates as हंपबैक व्हेल का एक समूह.",
        explanationHi: "व्हेल के समूह का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day50_ex_019",
        type: "active_recall",
        prompt: "What is the medical procedure involving the surgical extraction of a tiny tissue sample to test for malignancy or disease?",
        correctAnswer: "Biopsy",
        acceptableAnswers: ["biopsy", "a biopsy"],
        explanationEn: "'Biopsy' (/ˈbaɪ.ɒp.si/).",
        explanationHi: "ऊतक परीक्षण को 'biopsy' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day50_ex_020",
        type: "multiple_choice",
        prompt: "What does 'auditing a course' mean in higher education?",
        options: [
          "Attending lectures and participating in class discussions without receiving formal academic credit or grades",
          "Failing an exam three times",
          "Paying double tuition fees for extra credits",
          "Teaching a course as a student"
        ],
        correctAnswer: "Attending lectures and participating in class discussions without receiving formal academic credit or grades",
        explanationEn: "Auditing means taking a class for personal knowledge without earning credit.",
        explanationHi: "बिना क्रेडिट या ग्रेड के केवल ज्ञान के लिए कक्षा में शामिल होने को 'auditing a course' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACADEMIC_TERMS"
      },
      {
        id: "day50_ex_021",
        type: "speaking_pronunciation",
        prompt: "Articulate four-syllable /ˌpæl.pɪˈteɪ.ʃən/ with stress on the third syllable: 'The patient experienced acute heart palpitations.'",
        correctAnswer: "The patient experienced acute heart palpitations.",
        explanationEn: "Stress on /-teɪ-/: /ˌpæl.pɪˈteɪ.ʃən/.",
        explanationHi: "'Palpitations' के तीसरे सिलेबल पर बल दें।",
        difficulty: "medium",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day50_ex_022",
        type: "question_formation",
        prompt: "Form a question asking a landlord about utility inclusions in the monthly rent:",
        correctAnswer: "Are utilities such as water and electricity included in the monthly rent?",
        acceptableAnswers: [
          "Does the monthly rent include utilities like electricity and water?",
          "Are utilities included in the rent?"
        ],
        explanationEn: "'Are utilities such as water and electricity included in the monthly rent?'",
        explanationHi: "किराए में यूटिलिटीज शामिल होने का प्रश्न।",
        difficulty: "easy",
        skillTag: "QUESTION_FORMATION"
      },
      {
        id: "day50_ex_023",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'उसने अपनी डॉक्टरेट थीसिस का सफलतापूर्वक बचाव किया और उसे उच्च प्रशंसा मिली।'",
        correctAnswer: "She successfully defended her doctoral dissertation and received high praise.",
        acceptableAnswers: [
          "She defended her doctoral dissertation successfully with high accolades.",
          "She successfully defended her PhD thesis and earned high praise."
        ],
        explanationEn: "'She successfully defended her doctoral dissertation and received high praise.'",
        explanationHi: "'Defended her doctoral dissertation' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day50_ex_024",
        type: "sentence_building",
        prompt: "Build a sentence using [endangered / sanctuary / rhinos / anti-poaching / protects / squads / the / in].",
        correctAnswer: "Anti-poaching squads protect endangered rhinos in the sanctuary.",
        acceptableAnswers: [
          "The sanctuary protects endangered rhinos with anti-poaching squads."
        ],
        explanationEn: "'Anti-poaching squads protect endangered rhinos in the sanctuary.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day50_ex_025",
        type: "multiple_choice",
        prompt: "What is an 'amphibian' distinguished by biologically?",
        options: [
          "Cold-blooded vertebrate that undergoes metamorphosis from aquatic larva with gills to lung-breathing terrestrial adult",
          "Warm-blooded animal with feathers and wings",
          "Fish that cannot swim",
          "Mammal with a pouch"
        ],
        correctAnswer: "Cold-blooded vertebrate that undergoes metamorphosis from aquatic larva with gills to lung-breathing terrestrial adult",
        explanationEn: "Amphibians undergo larval-to-adult metamorphosis across aquatic and terrestrial habitats.",
        explanationHi: "जल और थल दोनों में रहने वाले और कायांतरण करने वाले जीवों को 'amphibians' कहते हैं।",
        difficulty: "hard",
        skillTag: "ZOOLOGICAL_SCIENCE"
      },
      {
        id: "day50_ex_026",
        type: "error_correction",
        prompt: "Correct the sentence: 'Whale is the biggest fish in the ocean.'",
        correctAnswer: "The whale is the largest marine mammal in the ocean.",
        acceptableAnswers: [
          "Whales are the largest marine mammals in the ocean."
        ],
        explanationEn: "Whales are mammals (breathe air, nurse young), NOT fish.",
        explanationHi: "व्हेल स्तनपायी (mammal) है, मछली नहीं।",
        difficulty: "easy",
        skillTag: "BIOLOGICAL_ACCURACY"
      },
      {
        id: "day50_ex_027",
        type: "fill_blank",
        prompt: "The non-refundable fee charged by educational institutions for instructional teaching is _______ fee.",
        correctAnswer: "tuition",
        explanationEn: "'Tuition' fee.",
        explanationHi: "शिक्षण शुल्क को 'tuition fee' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACADEMIC_TERMS"
      },
      {
        id: "day50_ex_028",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Dense industrial smog pushed the Air Quality Index into hazardous territory.'",
        correctAnswer: "घने औद्योगिक स्मॉग ने वायु गुणवत्ता सूचकांक को खतरनाक क्षेत्र में पहुंचा दिया।",
        acceptableAnswers: [
          "घने धुएं और कोहरे के कारण AQI खतरनाक स्तर पर पहुंच गया।"
        ],
        explanationEn: "'Air Quality Index into hazardous territory' translates as वायु गुणवत्ता सूचकांक को खतरनाक क्षेत्र में.",
        explanationHi: "AQI और स्मॉग का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day50_ex_029",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [echolocation / bats / pulses / use / ultrasonic / to / navigate]",
        correctAnswer: "Bats use ultrasonic echolocation pulses to navigate.",
        explanationEn: "Subject + Verb + Compound noun phrase + Infinitive.",
        explanationHi: "सही क्रम: Bats use ultrasonic echolocation pulses to navigate.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day50_ex_030",
        type: "multiple_choice",
        prompt: "What does the adjective 'articulate' mean?",
        options: [
          "Expressing oneself readily, clearly, and effectively in speech",
          "Wearing very tight clothes",
          "Suffering from joint pain",
          "Working in a hospital"
        ],
        correctAnswer: "Expressing oneself readily, clearly, and effectively in speech",
        explanationEn: "'Articulate' means expressing ideas clearly and fluently.",
        explanationHi: "विचारों को स्पष्ट और प्रभावी रूप से व्यक्त करने वाले सुवक्ता को 'articulate' कहते हैं।",
        difficulty: "easy",
        skillTag: "PERSONALITY_VOCAB"
      },
      {
        id: "day50_ex_031",
        type: "active_recall",
        prompt: "What is the term for a prolonged period of abnormally low rainfall that causes acute water shortages?",
        correctAnswer: "Drought",
        acceptableAnswers: ["drought", "a drought"],
        explanationEn: "'Drought' (/draʊt/).",
        explanationHi: "सूखे को 'drought' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day50_ex_032",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'किरायेदारी समझौता तीसरे पक्ष को संपत्ति के उप-किराए (सबलेटिंग) पर रोक लगाता है।'",
        correctAnswer: "The tenancy agreement prohibits subletting the property to third parties.",
        acceptableAnswers: [
          "The lease agreement forbids subletting the property to third parties.",
          "Subletting the property is prohibited by the tenancy agreement."
        ],
        explanationEn: "'The tenancy agreement prohibits subletting the property to third parties.'",
        explanationHi: "'Tenancy agreement prohibits subletting' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day50_ex_033",
        type: "error_correction",
        prompt: "Correct the sentence: 'She is having an angry nature.'",
        correctAnswer: "She is short-tempered.",
        acceptableAnswers: [
          "She has a quick temper.",
          "She is quick-tempered."
        ],
        explanationEn: "Avoid '*having an angry nature*'; use 'short-tempered' or 'quick-tempered'.",
        explanationHi: "'Short-tempered' या 'quick-tempered' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day50_ex_034",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nShopper: 'This hairdryer stopped heating after one week.'\nStore Clerk: 'Since you retained the original receipt, we will process an immediate _______.'",
        options: ["replacement", "syllabi", "turnstile", "deluge"],
        correctAnswer: "replacement",
        explanationEn: "'Replacement' or 'refund' for defective merchandise.",
        explanationHi: "खराब सामान के बदले नया सामान मिलने को 'replacement' कहते हैं।",
        difficulty: "easy",
        skillTag: "CONSUMER_DISCOURSE"
      },
      {
        id: "day50_ex_035",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The cardiologist scheduled an echocardiogram for next Tuesday.'",
        correctAnswer: "The cardiologist scheduled an echocardiogram for next Tuesday.",
        explanationEn: "Focus on spelling 'cardiologist' and 'echocardiogram'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "hard",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day50_ex_036",
        type: "multiple_choice",
        prompt: "Which compound adjective describes a person who stays calm, composed, and not easily irritated?",
        options: ["Even-tempered", "Short-tempered", "Broad-shouldered", "Sharp-witted"],
        correctAnswer: "Even-tempered",
        explanationEn: "'Even-tempered' means calm and placid.",
        explanationHi: "शांत, संतुलित और स्थिर स्वभाव वाले को 'even-tempered' कहते हैं।",
        difficulty: "easy",
        skillTag: "COMPOUND_ADJECTIVES"
      },
      {
        id: "day50_ex_037",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'फार्मासिस्ट ने मुझे ब्रांड-नेम दवा के स्थान पर जेनेरिक दवा लेने की सलाह दी।'",
        correctAnswer: "The pharmacist advised me to take the generic medication instead of the brand-name drug.",
        acceptableAnswers: [
          "The pharmacist recommended generic medicine instead of the brand-name one.",
          "The pharmacist suggested generic equivalents over the brand name."
        ],
        explanationEn: "'The pharmacist advised me to take the generic medication instead of the brand-name drug.'",
        explanationHi: "'Generic medication instead of brand-name' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day50_ex_038",
        type: "error_correction",
        prompt: "Correct the sentence: 'I saw a big herd of wolves in the forest.'",
        correctAnswer: "I saw a large pack of wolves in the forest.",
        explanationEn: "Wolves form a 'pack' (NOT a 'herd').",
        explanationHi: "भेड़ियों के झुंड के लिए 'pack of wolves' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "COLLECTIVE_NOUNS"
      },
      {
        id: "day50_ex_039",
        type: "sentence_building",
        prompt: "Build a sentence about sustainability using [emissions / energy / solar / reduces / adopting / carbon].",
        correctAnswer: "Adopting solar energy reduces carbon emissions.",
        explanationEn: "'Adopting solar energy reduces carbon emissions.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "easy",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day50_ex_040",
        type: "fill_blank",
        prompt: "A mammal (such as a kangaroo or koala) whose females nourish their undeveloped young inside a specialized pouch is a _______.",
        correctAnswer: "marsupial",
        explanationEn: "A 'marsupial' (/mɑːˈsuː.pi.əl/).",
        explanationHi: "थैलीधारी स्तनपायी को 'marsupial' कहते हैं।",
        difficulty: "medium",
        skillTag: "ZOOLOGICAL_TERMS"
      },
      {
        id: "day50_ex_041",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The pedestrian crossing is equipped with audible signals for visually impaired individuals.'",
        correctAnswer: "पैदल पार पथ (जेब्रा क्रॉसिंग) दृष्टिबाधित लोगों के लिए श्रव्य संकेतों से सुसज्जित है।",
        acceptableAnswers: [
          "पैदल क्रॉसिंग पर नेत्रहीनों के लिए बीप की आवाज वाले सिग्नल लगे हैं।"
        ],
        explanationEn: "'Pedestrian crossing with audible signals' translates as पैदल पार पथ पर श्रव्य संकेत.",
        explanationHi: "पैदल पार पथ और श्रव्य संकेतों का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day50_ex_042",
        type: "multiple_choice",
        prompt: "What is an 'over-the-counter (OTC)' drug?",
        options: [
          "A medication that can be purchased legally without a doctor's prescription",
          "An illegal drug sold behind the counter",
          "A medicine only available in emergency rooms",
          "A pill that has expired"
        ],
        correctAnswer: "A medication that can be purchased legally without a doctor's prescription",
        explanationEn: "OTC medications do not require a medical prescription.",
        explanationHi: "बिना डॉक्टर के पर्चे के सीधे खरीदी जा सकने वाली सुरक्षित दवा को 'over-the-counter (OTC)' कहते हैं।",
        difficulty: "easy",
        skillTag: "PHARMACOLOGY"
      },
      {
        id: "day50_ex_043",
        type: "active_recall",
        prompt: "What is the term for presenting someone else's academic research, writing, or ideas as one's own without attribution?",
        correctAnswer: "Plagiarism",
        acceptableAnswers: ["plagiarism"],
        explanationEn: "'Plagiarism' (/ˈpleɪ.dʒər.ɪ.zəm/).",
        explanationHi: "साहित्यिक चोरी को 'plagiarism' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day50_ex_044",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [athletic / maintained / the / runner / physique / a / lean]",
        correctAnswer: "The runner maintained a lean athletic physique.",
        explanationEn: "Subject + Verb + Adjectives + Noun.",
        explanationHi: "सही क्रम: The runner maintained a lean athletic physique.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day50_ex_045",
        type: "error_correction",
        prompt: "Correct the sentence: 'Are there any chances of rain today?'",
        correctAnswer: "Is there any chance of rain today?",
        acceptableAnswers: [
          "Is there a chance of rain today?"
        ],
        explanationEn: "Say 'Is there any chance of rain', singular and uncountable.",
        explanationHi: "'Is there any chance of rain' सही एकवचन रूप है।",
        difficulty: "easy",
        skillTag: "UNCOUNTABLE_NOUNS"
      },
      {
        id: "day50_ex_046",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'वह एक कर्तव्यनिष्ठ शोधकर्ता है जो हर डेटा बिंदु की बारीकी से जांच करती है।'",
        correctAnswer: "She is a conscientious researcher who meticulously examines every data point.",
        acceptableAnswers: [
          "She is a conscientious scholar who verifies every data point meticulously.",
          "As a conscientious researcher, she scrutinizes every data point."
        ],
        explanationEn: "'She is a conscientious researcher who meticulously examines every data point.'",
        explanationHi: "'Conscientious researcher who meticulously examines' सही है।",
        difficulty: "hard",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day50_ex_047",
        type: "multiple_choice",
        prompt: "Which preposition correctly completes: 'The suspect was shrouded _______ a heavy trench coat.'?",
        options: ["in", "on", "at", "during"],
        correctAnswer: "in",
        explanationEn: "Collocation: 'shrouded IN a coat / mist'.",
        explanationHi: "कपड़ों या धुंध में लिपटे होने के लिए 'in' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "PREPOSITIONS"
      },
      {
        id: "day50_ex_048",
        type: "speaking_pronunciation",
        prompt: "Articulate French loanword /ɒnˈsɒm.bəl/: 'She arrived at the gala in an elegant silk ensemble.'",
        correctAnswer: "She arrived at the gala in an elegant silk ensemble.",
        explanationEn: "Pronounce /ɒnˈsɒm.bəl/ without sounding a hard English /en-/.",
        explanationHi: "'Ensemble' का सही उच्चारण /ɒnˈsɒm.bəl/ करें।",
        difficulty: "medium",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day50_ex_049",
        type: "fill_blank",
        prompt: "The biological mechanism by which animals blend into their surrounding foliage or environment to avoid detection is _______.",
        correctAnswer: "camouflage",
        explanationEn: "'Camouflage' (/ˈkæm.ə.flɑːʒ/).",
        explanationHi: "परिवेश में घुलने-मिलने की क्षमता को 'camouflage' (छलावरण) कहते हैं।",
        difficulty: "easy",
        skillTag: "BIOLOGICAL_TERMS"
      },
      {
        id: "day50_ex_050",
        type: "sentence_transformation",
        prompt: "Rewrite using 'downpour': 'It started raining very heavily and flooded the street.'",
        correctAnswer: "A sudden downpour flooded the street.",
        explanationEn: "'A sudden downpour' accurately denotes heavy rainfall.",
        explanationHi: "'A sudden downpour' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day50_ex_051",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nProfessor: 'Why is this paragraph flagged in your essay?'\nStudent: 'I apologize, professor; I forgot to include the proper citation, but it was not intentional _______.'",
        options: ["plagiarism", "tenancy", "turnstile", "pediatrician"],
        correctAnswer: "plagiarism",
        explanationEn: "'Plagiarism' is using another's text without citation.",
        explanationHi: "बिना संदर्भ दिए किसी अन्य का पाठ इस्तेमाल करने को 'plagiarism' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACADEMIC_DISCOURSE"
      },
      {
        id: "day50_ex_052",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The tenant must restore all interior fixtures before the expiration of the lease.'",
        correctAnswer: "किरायेदार को पट्टे की समाप्ति से पहले सभी आंतरिक फिटिंग्स को बहाल करना होगा।",
        acceptableAnswers: [
          "पट्टा खत्म होने से पहले किरायेदार को सभी फिक्स्चर ठीक करने होंगे।"
        ],
        explanationEn: "'Interior fixtures before expiration of lease' translates as आंतरिक फिटिंग्स को बहाल करना होगा.",
        explanationHi: "किरायेदारी दायित्वों का अनुवाद।",
        difficulty: "hard",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day50_ex_053",
        type: "multiple_choice",
        prompt: "What is an 'apex predator'?",
        options: [
          "A top-level predator residing at the apex of an ecological trophic web with no natural predators",
          "An animal that eats only fruit",
          "A fish that lives in muddy ponds",
          "A bird that cannot lay eggs"
        ],
        correctAnswer: "A top-level predator residing at the apex of an ecological trophic web with no natural predators",
        explanationEn: "Apex predators have no natural ecological predators.",
        explanationHi: "खाद्य श्रृंखला के शीर्ष पर रहने वाले शिकारी जिसका कोई प्राकृतिक शिकारी नहीं होता, उसे 'apex predator' कहते हैं।",
        difficulty: "medium",
        skillTag: "ECOLOGICAL_TERMS"
      },
      {
        id: "day50_ex_054",
        type: "error_correction",
        prompt: "Correct the sentence: 'He is having two white hairs in his head.'",
        correctAnswer: "He has two gray hairs on his head.",
        acceptableAnswers: [
          "He has two grey hairs on his head."
        ],
        explanationEn: "For individual counted strands, say 'two gray/grey hairs on his head'.",
        explanationHi: "व्यक्तिगत गिने हुए बालों के लिए 'two gray hairs' कहें।",
        difficulty: "easy",
        skillTag: "COUNTABILITY"
      },
      {
        id: "day50_ex_055",
        type: "active_recall",
        prompt: "What is the collective noun for a group of lions resting together?",
        correctAnswer: "Pride",
        acceptableAnswers: ["pride", "a pride"],
        explanationEn: "A 'pride' of lions.",
        explanationHi: "शेरों के समूह को 'pride' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day50_ex_056",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'सर्दियों के दौरान घने स्मॉग के कारण अंतरराष्ट्रीय हवाई अड्डे पर कई उड़ानें रद्द कर दी गईं।'",
        correctAnswer: "Due to dense smog during winter, several flights were canceled at the international airport.",
        acceptableAnswers: [
          "Dense winter smog caused several flights to be canceled at the international airport.",
          "Owing to heavy winter smog, many flights were canceled at the airport."
        ],
        explanationEn: "'Due to dense smog during winter, several flights were canceled at the international airport.'",
        explanationHi: "'Dense smog caused flights to be canceled' सही है।",
        difficulty: "hard",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day50_ex_057",
        type: "multiple_choice",
        prompt: "Which word describes a person who easily recovers from adversity, trauma, or setbacks?",
        options: ["Resilient", "Meticulous", "Stocky", "Petite"],
        correctAnswer: "Resilient",
        explanationEn: "'Resilient' (/rɪˈzɪl.i.ənt/) means bouncing back quickly from hardship.",
        explanationHi: "कठिनाइयों से तुरंत उबरने वाले को 'resilient' कहते हैं।",
        difficulty: "easy",
        skillTag: "PSYCHOLOGICAL_TERMS"
      },
      {
        id: "day50_ex_058",
        type: "error_correction",
        prompt: "Correct the sentence: 'She bought a pant and a shoe yesterday.'",
        correctAnswer: "She bought a pair of pants and a pair of shoes yesterday.",
        acceptableAnswers: [
          "She bought pants and shoes yesterday."
        ],
        explanationEn: "Both garments are dual items requiring 'a pair of...': 'a pair of pants and a pair of shoes'.",
        explanationHi: "'A pair of pants' और 'a pair of shoes' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day50_ex_059",
        type: "fill_blank",
        prompt: "A written summary or outline of the subjects in a course of study is a _______.",
        correctAnswer: "syllabus",
        explanationEn: "A 'syllabus' (plural: syllabi).",
        explanationHi: "पाठ्यक्रम रूपरेखा को 'syllabus' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACADEMIC_TERMS"
      },
      {
        id: "day50_ex_060",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'डॉक्टर ने बताया कि मरीज को तीव्र घबराहट की जांच के लिए ईसीजी की आवश्यकता है।'",
        correctAnswer: "The doctor explained that the patient requires an ECG to investigate acute palpitations.",
        acceptableAnswers: [
          "The physician stated that the patient needs an ECG to evaluate acute heart palpitations.",
          "The doctor explained that an ECG is required to investigate the patient's palpitations."
        ],
        explanationEn: "'The doctor explained that the patient requires an ECG to investigate acute palpitations.'",
        explanationHi: "'Requires an ECG to investigate acute palpitations' सही है।",
        difficulty: "hard",
        skillTag: "TRANSLATION_HI_EN"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day50_dial_001",
        title: "Controlled Stage 5 Synthesis: Relocation, Transit & Apartment Lease",
        context: "A newly hired university lecturer (Dr. Meenakshi) finalizing an urban apartment lease with a property agent (Mr. Gupta).",
        characters: ["Dr. Meenakshi", "Mr. Gupta"],
        lines: [
          { speaker: "Dr. Meenakshi", text: "Good morning, Mr. Gupta. I reviewed the tenancy agreement for the duplex near the university campus.", hindi: "शुभ प्रभात, मिस्टर गुप्ता। मैंने विश्वविद्यालय परिसर के पास डुप्लेक्स के किरायेदारी समझौते की समीक्षा की।" },
          { speaker: "Mr. Gupta", text: "Good morning, Dr. Meenakshi! Are all the clauses regarding the two-month refundable security deposit clear to you?", hindi: "शुभ प्रभात, डॉ. मीनाक्षी! क्या दो महीने की वापसी योग्य सुरक्षा जमा से संबंधित सभी खंड आपको स्पष्ट हैं?" },
          { speaker: "Dr. Meenakshi", text: "Yes. I also verified that the rapid transit metro station is just a five-minute walk, so my daily commute will be seamless.", hindi: "हाँ। मैंने यह भी पुष्टि की कि रैपिड ट्रांजिट मेट्रो स्टेशन सिर्फ पांच मिनट की पैदल दूरी पर है, इसलिए मेरा दैनिक आवागमन निर्बाध रहेगा।" },
          { speaker: "Mr. Gupta", text: "Excellent. The apartment features modular kitchen fixtures, double-glazed soundproof windows, and dedicated parking.", hindi: "उत्कृष्ट। अपार्टमेंट में मॉड्यूलर किचन फिक्स्चर, डबल-ग्लेज़्ड साउंडप्रूफ खिड़कियां और समर्पित पार्किंग की सुविधा है।" },
          { speaker: "Dr. Meenakshi", text: "Perfect. I will sign the lease agreement and transfer the initial deposit this afternoon.", hindi: "बढ़िया। मैं पट्टे के समझौते पर हस्ताक्षर करूँगी और आज दोपहर प्रारंभिक जमा राशि स्थानांतरित कर दूँगी।" }
        ]
      },
      {
        id: "day50_dial_002",
        title: "Guided Multi-Specialist Clinical Triage & Pharmacological Consultation",
        context: "A hospital triage physician (Dr. Verma) coordinating specialist diagnostics for a patient (Mr. Kapoor).",
        characters: ["Dr. Verma", "Mr. Kapoor"],
        lines: [
          { speaker: "Dr. Verma", text: "Mr. Kapoor, your vital signs show elevated arterial blood pressure and recurring heart palpitations.", hindi: "मिस्टर कपूर, आपके महत्वपूर्ण संकेत उच्च रक्तचाप और बार-बार होने वाली दिल की घबराहट दिखाते हैं।" },
          { speaker: "Mr. Kapoor", text: "I have also been experiencing sudden bouts of vertigo and lethargy during intense work hours.", hindi: "मैं काम के व्यस्त घंटों के दौरान अचानक चक्कर आने और सुस्ती का भी अनुभव कर रहा हूँ।" },
          { speaker: "Dr. Verma", text: "I am referring you directly to our chief cardiologist for an echocardiogram and a 24-hour Holter monitor test.", hindi: "मैं आपको इकोकार्डियोग्राम और 24 घंटे के होल्टर मॉनिटर परीक्षण के लिए सीधे हमारे मुख्य हृदय रोग विशेषज्ञ के पास भेज रहा हूँ।" },
          { speaker: "Mr. Kapoor", text: "Will I need brand-name pharmaceuticals, or can I use bio-equivalent generic medications?", hindi: "क्या मुझे ब्रांड-नेम दवाओं की आवश्यकता होगी, या मैं समान जेनेरिक दवाओं का उपयोग कर सकता हूँ?" },
          { speaker: "Dr. Verma", text: "Generic bio-equivalents have identical therapeutic efficacy and will be far more economical for your long-term management.", hindi: "समान जेनेरिक दवाओं में समान चिकित्सीय प्रभावकारिता होती है और यह आपके दीर्घकालिक प्रबंधन के लिए कहीं अधिक किफायती होंगी।" }
        ]
      },
      {
        id: "day50_dial_003",
        title: "Free Problem-Resolution: Global Environmental Symposium & Wildlife Protection Policy",
        context: "An environmental policy director (Dr. Alok) and a wildlife zoologist (Dr. Sara) debating conservation strategy.",
        characters: ["Dr. Alok", "Dr. Sara"],
        lines: [
          { speaker: "Dr. Alok", text: "Rising global temperatures have triggered severe agricultural droughts and unpredictable monsoon downpours across the river basin.", hindi: "बढ़ते वैश्विक तापमान ने नदी बेसिन में गंभीर कृषि सूखे और अप्रत्याशित मानसूनी मूसलाधार बारिश को जन्म दिया है।" },
          { speaker: "Dr. Sara", text: "These atmospheric disruptions directly threaten endangered megafauna like the Asian elephant and Bengal tiger in our national sanctuary.", hindi: "ये वायुमंडलीय व्यवधान सीधे तौर पर हमारे राष्ट्रीय अभयारण्य में एशियाई हाथी और बंगाल टाइगर जैसे लुप्तप्राय विशाल जीवों के लिए खतरा हैं।" },
          { speaker: "Dr. Alok", text: "We must mandate strict municipal carbon emissions caps and expand renewable solar infrastructure to mitigate climate degradation.", hindi: "जलवायु क्षरण को कम करने के लिए हमें सख्त नगरपालिका कार्बन उत्सर्जन सीमा अनिवार्य करनी चाहिए और नवीकरणीय सौर बुनियादी ढांचे का विस्तार करना चाहिए।" },
          { speaker: "Dr. Sara", text: "Simultaneously, we must establish secured wildlife corridors and deploy drone-assisted anti-poaching patrol squads to prevent habitat fragmentation.", hindi: "साथ ही, आवास विखंडन को रोकने के लिए हमें सुरक्षित वन्यजीव गलियारे स्थापित करने और ड्रोन-सहायता प्राप्त शिकार-रोधी गश्ती दस्तों को तैनात करना चाहिए।" },
          { speaker: "Dr. Alok", text: "Our joint policy paper will provide an articulate, pragmatic roadmap for the international climate summit next month.", hindi: "हमारा संयुक्त नीति पत्र अगले महीने अंतरराष्ट्रीय जलवायु शिखर सम्मेलन के लिए एक स्पष्ट, व्यावहारिक रोडमैप प्रदान करेगा।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are giving the Stage 5 Grand Capstone Presentation. You will summarize how mastering these nine functional domains (housing, transit, commerce, university, medicine, pharmacy, weather, wildlife, and personal profiling) has transformed your spoken and professional English.",
      prompts: [
        "Synthesize two distinct domains (e.g., describing a university campus search while managing transit, or handling a medical consultation during severe weather).",
        "Demonstrate error elimination: explicitly highlight how you now use 'take an exam', 'gray hair', 'a pair of pants', 'it is pouring down', and 'pack of wolves'.",
        "Use high-level vocabulary: 'meticulous', 'articulate', 'resilient', 'bespoke', 'generic', 'apex predator', 'sanctuary'.",
        "Deliver your remarks with confident intonation and natural stress patterns."
      ],
      targetExpressions: [
        "Throughout Stage 5, I have mastered...",
        "Rather than literal translations, I now naturally say...",
        "Whether navigating urban transit or consulting a cardiologist...",
        "This synthesis enables articulate, pragmatic communication across all professional spheres."
      ]
    },
    roleplay: {
      scenario: "Stage 5 Comprehensive Oral Examination with a Senior CEFR Examiner.",
      roleA: "Examiner: Presenting cross-domain situational challenges (e.g., resolving a defective merchandise dispute, explaining an MRI scan, or describing an endangered species).",
      roleB: "Learner: Responding spontaneously with advanced lexicon, accurate grammatical agreement, and zero L1 interference.",
      sampleDialogue: "Examiner: 'Explain how you would handle receiving a defective appliance.' | Learner: 'I would retain the original invoice, quote the statutory warranty, and request an immediate replacement or full refund.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day50_bm_001",
        title: "Stage 5 Cross-Domain Synthesis Benchmark (Urban Living & Healthcare)",
        prompt: "Construct a coherent 5–6 sentence narrative integrating housing leases, urban transit, medical consultations, and pharmacological prescriptions with 100% grammatical precision.",
        sampleAnswerEn: "After signing a two-year lease agreement for a spacious duplex downtown, I commuted via the rapid transit metro to my hospital appointment. Navigating through the turnstiles was effortless with a contactless transit pass. During my consultation, the cardiologist conducted an electrocardiogram to evaluate my occasional palpitations and vertigo. She reassured me that my symptoms were benign and prescribed a cost-effective generic medication to regulate blood pressure. I filled the prescription at the outpatient pharmacy and returned home via the underground transit interchange.",
        sampleAnswerHi: "शहर के एक विशाल डुप्लेक्स के लिए दो साल के पट्टे के समझौते पर हस्ताक्षर करने के बाद, मैंने अपने अस्पताल के अपॉइंटमेंट के लिए रैपिड ट्रांजिट मेट्रो से यात्रा की। कॉन्टैक्टलेस ट्रांजिट पास के साथ टर्नस्टाइल से गुजरना सहज था। मेरे परामर्श के दौरान, हृदय रोग विशेषज्ञ ने मेरी कभी-कभार होने वाली घबराहट और चक्कर का मूल्यांकन करने के लिए एक इलेक्ट्रोकार्डियोग्राम किया। उन्होंने मुझे आश्वस्त किया कि मेरे लक्षण सामान्य थे और रक्तचाप को नियंत्रित करने के लिए एक लागत प्रभावी जेनेरिक दवा निर्धारित की। मैंने आउटपेशेंट फार्मेसी से दवा ली और भूमिगत ट्रांजिट इंटरचेंज के माध्यम से घर लौट आया।",
        evaluationCriteria: "Flawless integration of 4 domains ('lease agreement', 'turnstiles', 'cardiologist / palpitations', 'generic medication'), zero Indian English literalisms, advanced syntactic flow."
      },
      {
        id: "day50_bm_002",
        title: "Stage 5 Environmental & Zoological Discourse Benchmark",
        prompt: "Write a 5–6 sentence policy analysis linking severe climate conditions (e.g., droughts, heatwaves, flash floods) with wildlife conservation and endangered apex predators.",
        sampleAnswerEn: "Anthropogenic global warming has exacerbated seasonal droughts and sudden torrential downpours across the Himalayan river basin. These severe climate fluctuations force wild herds of elephants and solitary apex predators like the Bengal tiger to migrate outside protected sanctuary boundaries. When wildlife corridors are fragmented by deforestation and human settlements, vulnerable fauna face heightened risks of human conflict and commercial poaching. To preserve vital biodiversity, governments must enforce strict anti-poaching measures, restore contiguous bio-corridors, and accelerate the transition toward renewable solar energy to curtail greenhouse emissions.",
        sampleAnswerHi: "मानवजनित ग्लोबल वार्मिंग ने हिमालयी नदी बेसिन में मौसमी सूखे और अचानक मूसलाधार बारिश को बढ़ा दिया है। ये गंभीर जलवायु उतार-चढ़ाव हाथियों के जंगली झुंडों और बंगाल टाइगर जैसे एकांतप्रिय शीर्ष शिकारियों को संरक्षित अभयारण्य सीमाओं के बाहर प्रवास करने के लिए मजबूर करते हैं। जब वनों की कटाई और मानव बस्तियों द्वारा वन्यजीव गलियारों को खंडित किया जाता है, तो संवेदनशील जीवों को मानव संघर्ष और व्यावसायिक अवैध शिकार के बढ़ते जोखिमों का सामना करना पड़ता है। महत्वपूर्ण जैव विविधता को संरक्षित करने के लिए, सरकारों को सख्त शिकार-रोधी उपायों को लागू करना चाहिए, निरंतर जैव-गलियारों को बहाल करना चाहिए, और ग्रीनहाउस उत्सर्जन को कम करने के लिए नवीकरणीय सौर ऊर्जा की दिशा में संक्रमण में तेजी लानी चाहिए।",
        evaluationCriteria: "High-level ecological and meteorological lexicon ('anthropogenic global warming', 'apex predators', 'wildlife corridors', 'commercial poaching', 'curtail emissions'), sophisticated clause subordination."
      },
      {
        id: "day50_bm_003",
        title: "Stage 5 Academic & Anthropometric Mastery Benchmark",
        prompt: "Construct a vivid character sketch of an articulate academic leader defending their doctoral research in 5–6 sentences, using compound adjectives and precise psychological traits.",
        sampleAnswerEn: "Dr. Alistair is a towering, broad-shouldered gentleman with distinguished salt-and-pepper hair and a radiant olive complexion. Renowned as an exceptionally articulate and conscientious scholar, he defended his doctoral dissertation on urban transit engineering before the university academic council. Throughout the grueling examination, his even-tempered composure and sharp-witted replies disarmed skeptical interrogators. Always impeccably well-groomed in a bespoke charcoal three-piece suit, he balances relentless intellectual rigor with an unassuming, compassionate approach toward junior researchers.",
        sampleAnswerHi: "डॉ. एलिस्टेयर एक बहुत लंबे, चौड़े कंधों वाले सज्जन हैं जिनके बाल विशिष्ट काले-सफेद हैं और रंग चमकदार जैतून जैसा है। एक असाधारण रूप से सुवक्ता और कर्तव्यनिष्ठ विद्वान के रूप में प्रसिद्ध, उन्होंने विश्वविद्यालय अकादमिक परिषद के समक्ष शहरी परिवहन इंजीनियरिंग पर अपने डॉक्टरेट शोध प्रबंध का बचाव किया। कठिन परीक्षा के दौरान, उनके शांत स्वभाव और हाजिरजवाब उत्तरों ने संशयवादी परीक्षार्थियों को प्रभावित किया। एक कस्टम चारकोल तीन-पीस सूट में हमेशा त्रुटिहीन रूप से सुसज्जित, वह कनिष्ठ शोधकर्ताओं के प्रति एक विनम्र, दयालु दृष्टिकोण के साथ बौद्धिक कठोरता को संतुलित करते हैं।",
        evaluationCriteria: "Mastery of anthropometry and psychological profiling ('towering, broad-shouldered', 'salt-and-pepper hair', 'articulate and conscientious', 'doctoral dissertation', 'even-tempered composure', 'bespoke suit', 'unassuming'), flawless stylistic cohesion."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "What are the 5 essential Stage 5 L1 error corrections?", a: "1. Take/sit for an exam (not give). 2. Gray hair (not white hairs). 3. A pair of pants (not a pant). 4. It is raining heavily (not rain is falling). 5. Pack of wolves / School of fish (not group of...)." },
      { q: "What is the difference between brand-name and generic drugs?", a: "Generic drugs have the exact same active chemical ingredients, dosage, safety, and therapeutic effectiveness as brand-name drugs, but are sold at lower prices." },
      { q: "Why is dummy 'It' mandatory for weather?", a: "English requires a dummy pronoun subject for ambient conditions: 'It is freezing', 'It is sweltering', 'It rained'." },
      { q: "What are the collective nouns for lions, wolves, dolphins, and fish?", a: "A pride of lions, a pack of wolves, a pod of dolphins, and a school/shoal of fish." },
      { q: "What does 'bespoke' mean?", a: "Custom-made to an individual customer's precise body measurements and specifications." }
    ],
    spacedTips: [
      "Review the Stage 5 Grand Synthesis whenever you need to write professional emails, consult doctors, travel, or discuss environmental issues.",
      "Always use 'take an exam', 'a pair of pants', and 'gray hair' in daily speech.",
      "Stage 5 marks the complete transition from basic conversational English to professional, descriptive, and academic CEFR A2.2 mastery!"
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day50.js'), `export const day50 = ${JSON.stringify(day50, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Upgraded Day 50 (60 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks)");
