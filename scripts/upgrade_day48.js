import fs from 'fs';
import path from 'path';

// Day 48: Animal Kingdom, Habitats & Zoological Vocabulary
const day48 = {
  dayNumber: 48,
  id: "day_48",
  titleEn: "Animal Kingdom, Habitats & Zoological Vocabulary",
  titleHi: "प्राणी जगत, प्राकृतिक आवास एवं प्राणीशास्त्रीय शब्दावली",
  cefr: "A2.2",
  estMinutes: 60,
  prerequisites: "Day 47 Mastery (Atmospheric Descriptors & Ecological Sustainability)",
  objectivesEn: [
    "Master zoological classifications: mammals, reptiles, amphibians, avian species, marine fauna, invertebrates, and marsupials.",
    "Categorize dietary adaptations: carnivores, herbivores, omnivores, apex predators, scavengers, and prey.",
    "Describe biological and behavioral adaptations: camouflage, hibernation, seasonal migration, echolocation, territorial marking, and nocturnal vs diurnal habits.",
    "Use accurate collective nouns for fauna: a pride of lions, a pack of wolves, a flock of birds, a school/shoal of fish, a herd of elephants, and a pod of dolphins.",
    "Discuss wildlife conservation: endangered species, poaching, wildlife corridors, national sanctuaries, biodiversity hotspots, and habitat fragmentation."
  ],
  objectivesHi: [
    "प्राणीशास्त्रीय वर्गीकरण (Mammals, Reptiles, Amphibians, Avian, Marine fauna, Invertebrates) में पूर्ण निपुणता प्राप्त करना।",
    "आहार अनुकूलन (Carnivores/मांसाहारी, Herbivores/शाकाहारी, Omnivores/सर्वाहारी, Apex predators/शीर्ष शिकारी, Scavengers/मुर्दाखोर) को समझना।",
    "जैविक व व्यवहारिक अनुकूलन (Camouflage/छलावरण, Hibernation/शीतनिद्रा, Migration/प्रवास, Nocturnal/निशाचर, Diurnal/दिवाचर) का वर्णन करना।",
    "जीव-जंतुओं के सटीक समूहवाचक संज्ञा (Collective Nouns - Pride of lions, Pack of wolves, School of fish, Herd of elephants) का सही प्रयोग।",
    "वन्यजीव संरक्षण (Endangered species, Poaching/अवैध शिकार, Sanctuaries, Habitat fragmentation) पर धाराप्रवाह चर्चा करना।"
  ],
  teach: {
    hindiExplanation: `डे 48 में हम प्राणी जगत (Animal Kingdom), उनके प्राकृतिक आवास (Habitats), अनुकूलन (Adaptations) और वन्यजीव संरक्षण (Wildlife Conservation) की समृद्ध भाषा सीखेंगे।

1. **जैविक वर्गीकरण (Zoological Classes)**:
   - **Mammals**: स्तनपायी जीव (जो बच्चों को जन्म देते हैं और दूध पिलाते हैं).
   - **Reptiles**: सरीसृप / रेंगने वाले जीव (जैसे सांप, मगरमच्छ, छिपकली).
   - **Amphibians**: उभयचर जीव (जो जल और थल दोनों में रहते हैं, जैसे मेंढक, सैलामैंडर).
   - **Avian Species**: पक्षी वर्ग।
   - **Marine Fauna / Aquatic Life**: समुद्री व जलीय जीव-जंतु।

2. **आहार एवं व्यवहारिक अनुकूलन (Diet & Behavior)**:
   - **Carnivore / Herbivore / Omnivore**: मांसाहारी / शाकाहारी / सर्वाहारी।
   - **Apex Predator**: खाद्य श्रृंखला के शीर्ष पर रहने वाला शिकारी (जैसे शेर, बाघ, व्हेल).
   - **Scavenger**: मृत जानवरों का मांस खाकर प्रकृति की सफाई करने वाले जीव (जैसे गिद्ध, लकड़बग्घा).
   - **Camouflage**: छलावरण / परिवेश में घुल-मिल जाने की शारीरिक क्षमता।
   - **Nocturnal vs Diurnal**: रात में सक्रिय रहने वाले जीव (निशाचर, जैसे उल्लू, चमगादड़) vs दिन में सक्रिय रहने वाले जीव (दिवाचर)।
   - **Hibernation**: शीतनिद्रा (सर्दियों में गहरी नींद में जाना, जैसे भालू).
   - **Migration**: मौसमी प्रवास (भोजन या अनुकूल मौसम के लिए दूर देशों की यात्रा).

3. **समूहवाचक संज्ञाएं (Fauna Collective Nouns)**:
   - शेरों का समूह: **A pride of lions**.
   - भेड़ियों/कुत्तों का झुंड: **A pack of wolves**.
   - मछलियों का झुंड: **A school / shoal of fish**.
   - हाथियों/हिरणों का झुंड: **A herd of elephants**.
   - डॉल्फ़िन/व्हेल का समूह: **A pod of dolphins**.
   - पक्षियों का झुंड: **A flock of birds**.

4. **L1 हिंदी भाषियों की आम भूलें**:
   - कभी न कहें: '*Lion is the king of forest.*' ❌। मानक अंग्रेज़ी में जेनेरिक संदर्भ हेतु डेफिनिट आर्टिकल या प्लुरल का प्रयोग करें: "**The lion is an apex predator.**" या "**Lions are apex predators.**" ✔️
   - जानवरों के बच्चों के लिए सही शब्दों का प्रयोग करें: Dog -> Puppy, Cat -> Kitten, Lion/Tiger/Bear -> **Cub**, Deer -> **Fawn**, Kangaroo -> **Joey**।`,
    englishExplanation: `Day 48 expands learner proficiency across taxonomic classifications, ethological behaviors, ecological niches, collective animal nouns, and conservation biology discourse.

Key Learning Dimensions:
1. **Taxonomic Stratification**: Differentiating mammals, reptiles, amphibians, avian raptors, and cetaceans.
2. **Ecological Niches & Adaptations**: Echolocation in chiroptera, mimicry, thermal hibernation, and trophic apex predation.
3. **Faunal Collective Nouns**: Mastery of culturally and syntactically fixed collective units (pride, pack, pod, swarm, herd, flock, shoal).
4. **Conservation Policy**: Addressing endangered species IUCN red lists, anti-poaching enforcement, bio-corridors, and captive breeding programs.`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Generic Reference with Singular Definite Article or Plural Nouns",
        description: "Express species-wide biological facts using either 'The + singular noun' or 'Plural noun without article': 'The Bengal tiger is an apex predator' OR 'Bengal tigers are apex predators.'",
        register: "Scientific Syntax"
      },
      {
        ruleNumber: 2,
        title: "Subject-Verb Agreement with Animal Collective Nouns",
        description: "Treat collective animal nouns as singular units when acting together: 'A pride of lions is resting in the shade' / 'A pack of wolves coordinates its hunt.'",
        register: "Collective Agreement"
      },
      {
        ruleNumber: 3,
        title: "Compound Behavioral Adjectives",
        description: "Form compound descriptors: 'cold-blooded reptiles', 'warm-blooded mammals', 'meat-eating carnivores', 'deep-sea creatures'.",
        register: "Descriptive Morphology"
      },
      {
        ruleNumber: 4,
        title: "Passive Syntax in Conservation Biology",
        description: "Describe conservation status using formal passives: 'The snow leopard is critically endangered and protected by international wildlife treaties.'",
        register: "Conservation Registers"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Species Classification",
        formula: "[Species] + is a / are + [Class: mammal / reptile / amphibian / bird] + native to + [Geographical Habitat].",
        exampleEn: "The platypus is a semi-aquatic mammal native to eastern Australia.",
        meaningHi: "प्लैटिपस एक अर्ध-जलीय स्तनपायी जीव है जो पूर्वी ऑस्ट्रेलिया का मूल निवासी है।"
      },
      {
        subjectGroup: "Behavioral Adaptation",
        formula: "[Species] + rely on + [Mechanism: camouflage / echolocation / hibernation] + to + [Survive / Hunt / Navigate].",
        exampleEn: "Chameleons rely on dynamic camouflage to blend into their surrounding foliage and ambush prey.",
        meaningHi: "गिरगिट अपने आस-पास के पत्तों में घुलने-मिलने और शिकार को घात लगाकर पकड़ने के लिए गतिशील छलावरण पर निर्भर करते हैं।"
      },
      {
        subjectGroup: "Faunal Collective Structure",
        formula: "A + [Collective Noun: pride / pack / pod / flock] + of + [Fauna] + [Singular Verb] + [Action].",
        exampleEn: "A pod of orcas coordinates sophisticated hunting strategies in icy waters.",
        meaningHi: "ओर्का व्हेल का एक समूह बर्फीले पानी में परिष्कृत शिकार रणनीतियों का समन्वय करता है।"
      },
      {
        subjectGroup: "Conservation Status",
        formula: "[Species] + is classified as + [Endangered / Vulnerable] + due to + [Threat: poaching / habitat loss].",
        exampleEn: "The Asian elephant is classified as endangered due to illegal poaching and habitat fragmentation.",
        meaningHi: "अवैध शिकार और आवास विखंडन के कारण एशियाई हाथी को लुप्तप्राय के रूप में वर्गीकृत किया गया है।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'All Animals are Animal', 'Group of Fish', and 'King of Jungle' Traps",
      hindiPattern: "1. '*Lion is king of forest.*'\n2. '*I saw a group of fish swimming.*' (मछलियों का ग्रुप)\n3. '*Whale is a big fish.*' (व्हेल मछली)\n4. '*Tiger baby is playing.*'",
      potentialInterference: "Colloquial Hindi generalizations (मछली, शेर जंगल का राजा, जानवर का बच्चा, ग्रुप).",
      explanation: "Lions are not biologically 'kings'—they are 'apex predators'. Fish swim in a 'school' or 'shoal'. A whale is a 'marine mammal' (gives live birth, breathes air), NOT a fish. A tiger's baby is a 'cub'.",
      naturalSolution: "1. 'The lion is an apex predator.' | 2. 'I saw a school of fish swimming past the coral reef.' | 3. 'The blue whale is the largest marine mammal.' | 4. 'The tiger cub is playing with its mother.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day48_vocab_001", word: "Carnivore", pos: "Noun", ipa: "/ˈkɑː.nɪ.vɔːr/", meaningHi: "मांसाहारी जीव", exampleEn: "Lions, wolves, and polar bears are obligate carnivores.", exampleHi: "शेर, भेड़िए और ध्रुवीय भालू अनिवार्य मांसाहारी जीव हैं।" },
      { id: "day48_vocab_002", word: "Herbivore", pos: "Noun", ipa: "/ˈhɜː.bɪ.vɔːr/", meaningHi: "शाकाहारी जीव", exampleEn: "Elephants, zebras, and deer are large herbivores that graze on savannah grasses.", exampleHi: "हाथी, ज़ेबरा और हिरण बड़े शाकाहारी जीव हैं जो सवाना घास के मैदानों में चरते हैं।" },
      { id: "day48_vocab_003", word: "Omnivore", pos: "Noun", ipa: "/ˈɒm.nɪ.vɔːr/", meaningHi: "सर्वाहारी जीव (पौधे और मांस दोनों खाने वाले)", exampleEn: "Bears and chimpanzees are omnivores with diverse seasonal diets.", exampleHi: "भालू और चिंपैंजी विविध मौसमी आहार वाले सर्वाहारी जीव हैं।" },
      { id: "day48_vocab_004", word: "Mammal", pos: "Noun", ipa: "/ˈmæm.əl/", meaningHi: "स्तनपायी प्राणी (बच्चों को जन्म देकर दूध पिलाने वाले)", exampleEn: "Dolphins and whales are warm-blooded marine mammals, not fish.", exampleHi: "डॉल्फ़िन और व्हेल गर्म खून वाले समुद्री स्तनपायी हैं, मछली नहीं।" },
      { id: "day48_vocab_005", word: "Amphibian", pos: "Noun", ipa: "/æmˈfɪb.i.ən/", meaningHi: "उभयचर प्राणी (जल और थल दोनों में रहने वाले)", exampleEn: "Frogs and toads are amphibians that lay eggs in freshwater ponds.", exampleHi: "मेंढक उभयचर जीव हैं जो मीठे पानी के तालाबों में अंडे देते हैं।" },
      { id: "day48_vocab_006", word: "Reptile", pos: "Noun", ipa: "/ˈrep.taɪl/", meaningHi: "सरीसृप / रेंगने वाले ठंडे खून के प्राणी", exampleEn: "Crocodiles and snakes are cold-blooded reptiles covered in scales.", exampleHi: "मगरमच्छ और सांप शल्कों से ढके ठंडे खून वाले सरीसृप हैं।" },
      { id: "day48_vocab_007", word: "Camouflage", pos: "Noun/Verb", ipa: "/ˈkæm.ə.flɑːʒ/", meaningHi: "छलावरण / परिवेश में घुल-मिल जाने का रंग-रूप", exampleEn: "The leopard's rosette coat provides exceptional camouflage in the grasslands.", exampleHi: "तेंदुए का धब्बेदार कोट घास के मैदानों में असाधारण छलावरण प्रदान करता है।" },
      { id: "day48_vocab_008", word: "Nocturnal", pos: "Adjective", ipa: "/nɒkˈtɜː.nəl/", meaningHi: "निशाचर (रात में सक्रिय रहने वाले जीव)", exampleEn: "Owls and bats are nocturnal predators with acute night vision and hearing.", exampleHi: "उल्लू और चमगादड़ रात की तेज दृष्टि और सुनने की क्षमता वाले निशाचर शिकारी हैं।" },
      { id: "day48_vocab_009", word: "Diurnal", pos: "Adjective", ipa: "/daɪˈɜː.nəl/", meaningHi: "दिवाचर (दिन के समय सक्रिय रहने वाले जीव)", exampleEn: "Most diurnal raptors, like eagles and hawks, hunt during daylight hours.", exampleHi: "चील और बाज जैसे अधिकांश दिवाचर शिकारी पक्षी दिन के उजाले में शिकार करते हैं।" },
      { id: "day48_vocab_010", word: "Hibernation", pos: "Noun", ipa: "/ˌhaɪ.bəˈneɪ.ʃən/", meaningHi: "शीतनिद्रा (सर्दियों में गहरी निष्क्रियता)", exampleEn: "Grizzly bears enter deep hibernation during harsh sub-zero winter months.", exampleHi: "ग्रिजली भालू भीषण ठंड के महीनों में गहरी शीतनिद्रा में चले जाते हैं।" },
      { id: "day48_vocab_011", word: "Migration", pos: "Noun", ipa: "/maɪˈɡreɪ.ʃən/", meaningHi: "मौसमी प्रवास (पक्षियों या जीवों की दूर यात्रा)", exampleEn: "Arctic terns undertake the longest annual migration of any avian species.", exampleHi: "आर्कटिक टर्न किसी भी पक्षी प्रजाति का सबसे लंबा वार्षिक प्रवास करते हैं।" },
      { id: "day48_vocab_012", word: "Apex predator", pos: "Noun phrase", ipa: "/ˈeɪ.peks ˈpred.ə.tər/", meaningHi: "शीर्ष शिकारी (खाद्य श्रृंखला में सबसे ऊपर, जिसका कोई प्राकृतिक शिकारी नहीं)", exampleEn: "The Bengal tiger is an apex predator that maintains ecological equilibrium.", exampleHi: "बंगाल टाइगर एक शीर्ष शिकारी है जो पारिस्थितिक संतुलन बनाए रखता है।" },
      { id: "day48_vocab_013", word: "Scavenger", pos: "Noun", ipa: "/ˈskæv.ɪn.dʒər/", meaningHi: "मुर्दाखोर जीव (मृत जीवों को खाकर सफाई करने वाले)", exampleEn: "Vultures and hyenas are scavengers that consume carcasses and prevent disease spread.", exampleHi: "गिद्ध और लकड़बग्घे मुर्दाखोर जीव हैं जो शवों को खाकर बीमारियों के प्रसार को रोकते हैं।" },
      { id: "day48_vocab_014", word: "Endangered", pos: "Adjective", ipa: "/ɪnˈdeɪn.dʒəd/", meaningHi: "लुप्तप्राय / विलुप्ति के कगार पर", exampleEn: "The one-horned rhinoceros is a strictly protected endangered species in Kaziranga.", exampleHi: "एक सींग वाला गैंडा काजीरंगा में एक सख्त संरक्षित लुप्तप्राय प्रजाति है।" },
      { id: "day48_vocab_015", word: "Poaching", pos: "Noun", ipa: "/ˈpəʊ.tʃɪŋ/", meaningHi: "अवैध शिकार", exampleEn: "Forest rangers risk their lives to combat illegal wildlife poaching.", exampleHi: "वन रेंजर अवैध वन्यजीव शिकार से निपटने के लिए अपनी जान जोखिम में डालते हैं।" },
      { id: "day48_vocab_016", word: "Sanctuary", pos: "Noun", ipa: "/ˈsæŋk.tʃʊə.ri/", meaningHi: "वन्यजीव अभयारण्य / सुरक्षित प्राकृतिक शरणस्थल", exampleEn: "The bird sanctuary provides a peaceful haven for thousands of migratory waterfowl.", exampleHi: "पक्षी अभयारण्य हजारों प्रवासी जलपक्षियों के लिए एक शांतिपूर्ण आश्रय प्रदान करता है।" },
      { id: "day48_vocab_017", word: "Echolocation", pos: "Noun", ipa: "/ˌek.əʊ.ləʊˈkeɪ.ʃən/", meaningHi: "प्रतिध्वनि निर्धारण (ध्वनि तरंगों से दिशा व शिकार पहचानना)", exampleEn: "Bats and toothed whales use high-frequency echolocation to navigate pitch-black environments.", exampleHi: "चमगादड़ और दांतों वाली व्हेल घने अंधेरे में रास्ता खोजने के लिए उच्च-आवृत्ति इकोलोकेशन का उपयोग करती हैं।" },
      { id: "day48_vocab_018", word: "Marsupial", pos: "Noun", ipa: "/mɑːˈsuː.pi.əl/", meaningHi: "धानीधारी स्तनपायी (पेट की थैली में बच्चे पालने वाले, जैसे कंगारू)", exampleEn: "Kangaroos, koalas, and wombats are iconic Australian marsupials.", exampleHi: "कंगारू, कोआला और वोम्बैट प्रतिष्ठित ऑस्ट्रेलियाई धानीधारी (मार्सुपियल) जीव हैं।" },
      { id: "day48_vocab_019", word: "Invertebrate", pos: "Noun", ipa: "/ɪnˈvɜː.tɪ.brət/", meaningHi: "अकशेरुकी जीव (रीढ़ की हड्डी विहीन, जैसे कीट, ऑक्टोपस)", exampleEn: "Invertebrates make up over ninety-five percent of all documented animal species on Earth.", exampleHi: "अकशेरुकी जीव पृथ्वी पर सभी दर्ज पशु प्रजातियों के पचानवे प्रतिशत से अधिक हैं।" },
      { id: "day48_vocab_020", word: "Cub", pos: "Noun", ipa: "/kʌb/", meaningHi: "शेर, बाघ, चीता या भालू का बच्चा", exampleEn: "The tigress guarded her two newborn cubs inside the rocky den.", exampleHi: "बाघिन ने चट्टानी गुफा के अंदर अपने दो नवजात शावकों (बच्चों) की रक्षा की।" }
    ],
    spokenPhrases: [
      { id: "day48_phrase_001", phrase: "A pride of lions was spotted resting near the waterhole.", register: "Wildlife Observation", meaningHi: "पानी के गड्ढे के पास शेरों का एक झुंड आराम करते देखा गया।" },
      { id: "day48_phrase_002", phrase: "Lions, tigers, and wolves are classified as apex predators.", register: "Ecological Taxonomy", meaningHi: "शेर, बाघ और भेड़िए शीर्ष शिकारियों के रूप में वर्गीकृत हैं।" },
      { id: "day48_phrase_003", phrase: "The chameleon changes its pigmentation for dynamic camouflage.", register: "Biological Adaptation", meaningHi: "गिरगिट गतिशील छलावरण के लिए अपनी त्वचा का रंग बदलता है।" },
      { id: "day48_phrase_004", phrase: "Whales and dolphins are warm-blooded marine mammals.", register: "Zoological Fact", meaningHi: "व्हेल और डॉल्फ़िन गर्म खून वाले समुद्री स्तनपायी जीव हैं।" },
      { id: "day48_phrase_005", phrase: "A pod of dolphins leaped gracefully through the ocean waves.", register: "Marine Life", meaningHi: "डॉल्फ़िन का एक समूह समुद्र की लहरों में शालीनता से उछल पड़ा।" },
      { id: "day48_phrase_006", phrase: "The species is critically endangered due to rampant poaching.", register: "Conservation Alert", meaningHi: "अनियंत्रित अवैध शिकार के कारण यह प्रजाति गंभीर रूप से लुप्तप्राय है।" },
      { id: "day48_phrase_007", phrase: "Migratory birds fly thousands of miles along established flyways.", register: "Avian Migration", meaningHi: "प्रवासी पक्षी तय मार्गों पर हजारों मील की उड़ान भरते हैं।" },
      { id: "day48_phrase_008", phrase: "Nocturnal animals possess heightened auditory and olfactory senses.", register: "Behavioral Biology", meaningHi: "निशाचर जीवों में सुनने और सूंघने की तीव्र क्षमता होती है।" },
      { id: "day48_phrase_009", phrase: "A vast school of silver fish darted across the vibrant coral reef.", register: "Marine Fauna", meaningHi: "चमकदार मछलियों का एक विशाल झुंड जीवंत मूंगा चट्टान के पार तेजी से निकला।" },
      { id: "day48_phrase_010", phrase: "The wildlife sanctuary acts as a protected biodiversity corridor.", register: "Conservation Policy", meaningHi: "वन्यजीव अभयारण्य एक संरक्षित जैव विविधता गलियारे के रूप में कार्य करता है।" },
      { id: "day48_phrase_011", phrase: "Bears store substantial body fat prior to winter hibernation.", register: "Seasonal Adaptation", meaningHi: "भालू शीतकालीन शीतनिद्रा से पहले शरीर में काफी वसा जमा करते हैं।" },
      { id: "day48_phrase_012", phrase: "Vultures are essential scavengers that maintain environmental hygiene.", register: "Ecosystem Balance", meaningHi: "गिद्ध आवश्यक मुर्दाखोर हैं जो पर्यावरणीय स्वच्छता बनाए रखते हैं।" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day48_ex_001", english: "The Bengal tiger is a solitary apex predator that hunts primarily at twilight.", hindi: "बंगाल टाइगर एक एकांतप्रिय शीर्ष शिकारी है जो मुख्य रूप से गोधूलि (शाम) के समय शिकार करता है।" },
      { id: "day48_ex_002", english: "A majestic pride of lions coordinates cooperative hunting tactics to bring down large buffaloes.", hindi: "शेरों का एक राजसी झुंड बड़ी भैंसों को गिराने के लिए सहकारी शिकार रणनीतियों का समन्वय करता है।" },
      { id: "day48_ex_003", english: "Although dolphins live underwater, they are air-breathing mammals that nurse their calves.", hindi: "यद्यपि डॉल्फ़िन पानी के नीचे रहती हैं, वे हवा में सांस लेने वाले स्तनपायी हैं जो अपने बच्चों को दूध पिलाते हैं।" },
      { id: "day48_ex_004", english: "The snow leopard relies on its thick, smoky-gray rosette coat for camouflage among rocky crags.", hindi: "हिम तेंदुआ चट्टानी चोटियों के बीच छलावरण के लिए अपने घने, धूसर धब्बेदार कोट पर निर्भर करता है।" },
      { id: "day48_ex_005", english: "During the severe Himalayan winter, Himalayan brown bears retreat into caves for prolonged hibernation.", hindi: "कड़ाके की हिमालयी सर्दियों के दौरान, हिमालयी भूरे भालू लंबी शीतनिद्रा के लिए गुफाओं में चले जाते हैं।" },
      { id: "day48_ex_006", english: "A large herd of wild elephants migrated across the agricultural corridor in search of seasonal water.", hindi: "जंगली हाथियों का एक बड़ा झुंड मौसमी पानी की तलाश में कृषि गलियारे के पार चला गया।" },
      { id: "day48_ex_007", english: "Anti-poaching squads utilize trained tracking dogs and drone surveillance to safeguard endangered rhinos.", hindi: "अवैध शिकार विरोधी दस्ते लुप्तप्राय गैंडों की सुरक्षा के लिए प्रशिक्षित खोजी कुत्तों और ड्रोन निगरानी का उपयोग करते हैं।" },
      { id: "day48_ex_008", english: "Bats emit ultrasonic echolocation clicks to construct detailed mental acoustic maps of their surroundings.", hindi: "चमगादड़ अपने परिवेश के विस्तृत मानसिक ध्वनि मानचित्र बनाने के लिए पराश्रव्य (अल्ट्रासोनिक) इकोलोकेशन ध्वनि छोड़ते हैं।" },
      { id: "day48_ex_009", english: "Amphibians like tree frogs absorb moisture and oxygen directly through their permeable skin.", hindi: "पेड़ के मेंढक जैसे उभयचर अपनी पारगम्य त्वचा के माध्यम से सीधे नमी और ऑक्सीजन अवशोषित करते हैं।" },
      { id: "day48_ex_010", english: "A massive school of sardines swirled in unison to confuse approaching predatory sharks.", hindi: "शिकारी शार्क को भ्रमित करने के लिए सार्डिन मछलियों का एक विशाल झुंड एक साथ चक्कर लगाता रहा।" },
      { id: "day48_ex_011", english: "Owls are specialized nocturnal raptors with fringed feathers that enable silent flight.", hindi: "उल्लू विशेष निशाचर शिकारी पक्षी हैं जिनके पंखों के किनारे मूक उड़ान को सक्षम बनाते हैं।" },
      { id: "day48_ex_012", english: "Female kangaroos carry and nourish their undeveloped joeys inside a specialized abdominal pouch.", hindi: "मादा कंगारू अपने अविकसित बच्चों (जोई) को एक विशेष पेट की थैली के अंदर ले जाती हैं और उनका पोषण करती हैं।" },
      { id: "day48_ex_013", english: "Scavengers like spotted hyenas possess powerful jaws capable of crushing heavy mammalian bones.", hindi: "चित्तीदार लकड़बग्घे जैसे मुर्दाखोरों के पास स्तनपायी की भारी हड्डियों को कुचलने में सक्षम शक्तिशाली जबड़े होते हैं।" },
      { id: "day48_ex_014", english: "Marine biologists observed a pod of humpback whales performing cooperative bubble-net feeding.", hindi: "समुद्री जीवविज्ञानियों ने हंपबैक व्हेल के एक समूह को सहकारी बबल-नेट फीडिंग करते देखा।" },
      { id: "day48_ex_015", english: "The national wildlife sanctuary encompasses three distinct biodiversity biomes.", hindi: "राष्ट्रीय वन्यजीव अभयारण्य में तीन अलग-अलग जैव विविधता बायोम शामिल हैं।" },
      { id: "day48_ex_016", english: "Herbivorous primates spend several hours daily foraging for fibrous leaves, wild fruits, and shoots.", hindi: "शाकाहारी प्राइमेट रेशेदार पत्तियों, जंगली फलों और टहनियों की तलाश में रोजाना कई घंटे बिताते हैं।" },
      { id: "day48_ex_017", english: "Crocodiles are formidable ambush predators that submerge completely beneath the murky river surface.", hindi: "मगरमच्छ दुर्जेय घात लगाकर हमला करने वाले शिकारी हैं जो मैली नदी की सतह के नीचे पूरी तरह डूब जाते हैं।" },
      { id: "day48_ex_018", english: "Migratory geese fly in a streamlined V-formation to reduce aerodynamic drag across long journeys.", hindi: "प्रवासी कलहंस लंबी यात्राओं में हवा के खिंचाव को कम करने के लिए एक सुव्यवस्थित वी-आकार में उड़ते हैं।" },
      { id: "day48_ex_019", english: "The pangolin is the world's most trafficked wild mammal despite strict international bans.", hindi: "सख्त अंतरराष्ट्रीय प्रतिबंधों के बावजूद पैंगोलिन दुनिया का सबसे अधिक तस्करी वाला जंगली स्तनपायी है।" },
      { id: "day48_ex_020", english: "Octopuses are intelligent marine invertebrates with the ability to alter both skin color and texture.", hindi: "ऑक्टोपस बुद्धिमान समुद्री अकशेरुकी जीव हैं जिनमें त्वचा के रंग और बनावट दोनों को बदलने की क्षमता होती है।" },
      { id: "day48_ex_021", english: "A pack of wolves establishes strict social hierarchies led by a dominant alpha pair.", hindi: "भेड़ियों का एक झुंड एक प्रमुख अल्फा जोड़े के नेतृत्व में सख्त सामाजिक पदानुक्रम स्थापित करता है।" },
      { id: "day48_ex_022", english: "The Great Indian Bustard faces imminent extinction primarily due to high-voltage power line collisions.", hindi: "ग्रेट इंडियन बस्टर्ड मुख्य रूप से हाई-वोल्टेज बिजली लाइनों की टक्कर के कारण आसन्न विलुप्ति का सामना कर रहा है।" },
      { id: "day48_ex_023", english: "Diurnal songbirds rely on vibrant morning choruses to establish breeding territories.", hindi: "दिवाचर गाने वाले पक्षी प्रजनन क्षेत्रों की स्थापना के लिए सुबह के जीवंत समूह गान पर निर्भर करते हैं।" },
      { id: "day48_ex_024", english: "Coral polyps form extensive calcium carbonate reefs that support twenty-five percent of marine biodiversity.", hindi: "मूंगा पॉलीप्स व्यापक कैल्शियम कार्बोनेट चट्टानें बनाते हैं जो समुद्री जैव विविधता के पच्चीस प्रतिशत का समर्थन करते हैं।" },
      { id: "day48_ex_025", english: "Wildlife corridors allow isolated animal populations to interbreed and avoid genetic inbreeding.", hindi: "वन्यजीव गलियारे अलग-थलग पड़े जानवरों की आबादी को अंतःप्रजनन करने और आनुवंशिक विकृतियों से बचने की अनुमति देते हैं।" }
    ]
  },
  pronunciation: {
    focusSound: "Pronouncing taxonomic terms: /ˈkæm.ə.flɑːʒ/ 'Camouflage', /æmˈfɪb.i.ən/ 'Amphibian', /mɑːˈsuː.pi.əl/ 'Marsupial'",
    phoneticNotes: "1. 'Camouflage' ends with French voiced postalveolar fricative /ʒ/: /ˈkæm.ə.flɑːʒ/.\n2. 'Amphibian' stresses the second syllable: /æmˈfɪb.i.ən/.\n3. 'Carnivore' stresses the first syllable: /ˈkɑː.nɪ.vɔːr/.",
    minimalPairs: [
      { wordA: "Prey", ipaA: "/preɪ/", wordB: "Pray", ipaB: "/preɪ/" },
      { wordA: "Herd", ipaA: "/hɜːd/", wordB: "Heard", ipaB: "/hɜːd/" },
      { wordA: "Pack", ipaA: "/pæk/", wordB: "Park", ipaB: "/pɑːk/" },
      { wordA: "Pod", ipaA: "/pɒd/", wordB: "Pot", ipaB: "/pɒt/" },
      { wordA: "Whale", ipaA: "/weɪl/", wordB: "Veil", ipaB: "/veɪl/" }
    ],
    drills: [
      { sentence: "The chameleon used camouflage to conceal itself.", focus: "Ending /ʒ/ in 'camouflage' /ˈkæm.ə.flɑːʒ/" },
      { sentence: "Frogs and toads are freshwater amphibians.", focus: "Stress in /æmˈfɪb.i.ən/" },
      { sentence: "A pride of lions stalked a herd of buffaloes.", focus: "Collective nouns: 'pride' and 'herd'" },
      { sentence: "The blue whale is the largest marine mammal.", focus: "Vowel in 'mammal' /ˈmæm.əl/ & /weɪl/" },
      { sentence: "Kangaroos and koalas are native marsupials.", focus: "Stress in /mɑːˈsuː.pi.əl/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day48_ex_001",
        type: "error_correction",
        prompt: "Correct the sentence: 'Whale is a very large fish.'",
        correctAnswer: "A whale is a very large marine mammal.",
        acceptableAnswers: [
          "The whale is a large mammal.",
          "Whales are large marine mammals."
        ],
        explanationEn: "Whales are air-breathing, warm-blooded mammals that nurse their young, not fish.",
        explanationHi: "व्हेल स्तनपायी जीव (mammal) है, मछली नहीं।",
        difficulty: "easy",
        skillTag: "ZOOLOGICAL_CLASSIFICATION"
      },
      {
        id: "day48_ex_002",
        type: "multiple_choice",
        prompt: "What is the correct collective noun for a group of lions?",
        options: ["Pride", "Pack", "School", "Flock"],
        correctAnswer: "Pride",
        explanationEn: "A group of lions is called a 'pride of lions'.",
        explanationHi: "शेरों के समूह को 'a pride of lions' कहते हैं।",
        difficulty: "easy",
        skillTag: "COLLECTIVE_NOUNS"
      },
      {
        id: "day48_ex_003",
        type: "fill_blank",
        prompt: "Animals that are active primarily during the night are called _______ animals.",
        correctAnswer: "nocturnal",
        explanationEn: "'Nocturnal' animals (e.g. owls, bats) are active at night.",
        explanationHi: "रात में सक्रिय रहने वाले जीवों को 'nocturnal' (निशाचर) कहते हैं।",
        difficulty: "easy",
        skillTag: "BEHAVIORAL_VOCAB"
      },
      {
        id: "day48_ex_004",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'बंगाल टाइगर एक शीर्ष शिकारी है जो पारिस्थितिक संतुलन बनाए रखता है।'",
        correctAnswer: "The Bengal tiger is an apex predator that maintains ecological equilibrium.",
        acceptableAnswers: [
          "The Bengal tiger is an apex predator that maintains ecological balance.",
          "Bengal tigers are apex predators maintaining ecological balance."
        ],
        explanationEn: "'The Bengal tiger is an apex predator that maintains ecological equilibrium.'",
        explanationHi: "'Apex predator' और 'ecological equilibrium / balance' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day48_ex_005",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'A pod of dolphins leaped gracefully through the ocean waves.'",
        correctAnswer: "डॉल्फ़िन का एक समूह समुद्र की लहरों में शालीनता से उछल पड़ा।",
        acceptableAnswers: [
          "डॉल्फिनों का एक झुंड समुद्र की लहरों के बीच से खूबसूरती से कूदा।"
        ],
        explanationEn: "'A pod of dolphins' translates as डॉल्फ़िन का एक समूह.",
        explanationHi: "डॉल्फिन के समूह (pod) का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day48_ex_006",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [camouflage / uses / the / chameleon / to / blend / in]",
        correctAnswer: "The chameleon uses camouflage to blend in.",
        explanationEn: "Subject + Verb + Object + Infinitive clause.",
        explanationHi: "सही क्रम: The chameleon uses camouflage to blend in.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day48_ex_007",
        type: "multiple_choice",
        prompt: "Which term describes an animal that feeds strictly on plant matter?",
        options: ["Herbivore", "Carnivore", "Scavenger", "Apex predator"],
        correctAnswer: "Herbivore",
        explanationEn: "A herbivore feeds exclusively on plants.",
        explanationHi: "केवल पौधे खाने वाले शाकाहारी जीव को 'herbivore' कहते हैं।",
        difficulty: "easy",
        skillTag: "DIETARY_CLASSIFICATION"
      },
      {
        id: "day48_ex_008",
        type: "error_correction",
        prompt: "Correct the sentence: 'I saw a big group of wolves hunting in the forest.'",
        correctAnswer: "I saw a pack of wolves hunting in the forest.",
        explanationEn: "The collective noun for wolves is a 'pack of wolves' (NOT '*group of wolves*').",
        explanationHi: "भेड़ियों के झुंड के लिए 'a pack of wolves' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "COLLECTIVE_NOUNS"
      },
      {
        id: "day48_ex_009",
        type: "fill_blank",
        prompt: "The state of minimal metabolic activity and deep sleep entered by animals during winter is _______.",
        correctAnswer: "hibernation",
        explanationEn: "'Hibernation' (/ˌhaɪ.bəˈneɪ.ʃən/).",
        explanationHi: "शीतनिद्रा को 'hibernation' कहते हैं।",
        difficulty: "easy",
        skillTag: "BIOLOGICAL_TERMS"
      },
      {
        id: "day48_ex_010",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nGuide: 'Look closely at that tree bark.'\nTourist: 'Incredible! The gecko's _______ makes it almost completely invisible.'",
        options: ["camouflage", "turnstile", "pediatrician", "syllabi"],
        correctAnswer: "camouflage",
        explanationEn: "'Camouflage' allows animals to blend invisibly into their background.",
        explanationHi: "परिवेश में छिपने को 'camouflage' कहते हैं।",
        difficulty: "easy",
        skillTag: "WILDLIFE_DISCOURSE"
      },
      {
        id: "day48_ex_011",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'अवैध शिकार और वनों की कटाई के कारण एक सींग वाला गैंडा लुप्तप्राय है।'",
        correctAnswer: "The one-horned rhinoceros is endangered due to poaching and deforestation.",
        acceptableAnswers: [
          "The one-horned rhino is an endangered species due to illegal poaching and deforestation.",
          "Owing to poaching and habitat loss, the one-horned rhinoceros is endangered."
        ],
        explanationEn: "'The one-horned rhinoceros is endangered due to poaching and deforestation.'",
        explanationHi: "'Endangered due to poaching and deforestation' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day48_ex_012",
        type: "multiple_choice",
        prompt: "What is a 'marsupial'?",
        options: [
          "A mammal whose females have a pouch in which young are carried and nourished",
          "A bird that cannot fly",
          "A poisonous snake",
          "A deep-sea fish with teeth"
        ],
        correctAnswer: "A mammal whose females have a pouch in which young are carried and nourished",
        explanationEn: "Marsupials (e.g. kangaroos, koalas) carry their young in an abdominal pouch.",
        explanationHi: "पेट की थैली में बच्चे पालने वाले स्तनपायी (जैसे कंगारू) को 'marsupial' कहते हैं।",
        difficulty: "medium",
        skillTag: "TAXONOMIC_TERMS"
      },
      {
        id: "day48_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'A massive school of fish darted across the coral reef.'",
        correctAnswer: "A massive school of fish darted across the coral reef.",
        explanationEn: "Focus on spelling 'school' of fish and 'coral'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day48_ex_014",
        type: "sentence_transformation",
        prompt: "Rewrite using 'apex predator': 'Lions are at the very top of the food chain.'",
        correctAnswer: "Lions are apex predators.",
        explanationEn: "'Apex predator' is the precise ecological term.",
        explanationHi: "'Apex predators' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "LEXICAL_PRECISION"
      },
      {
        id: "day48_ex_015",
        type: "matching",
        prompt: "Match the animal class to its definition:\n1. Mammal\n2. Amphibian\n3. Reptile\n4. Invertebrate",
        options: [
          "1-Warm-blooded, gives live birth and nurses young, 2-Cold-blooded, lives in water/land with permeable skin, 3-Cold-blooded with scales, lays shelled eggs, 4-Animal without a backbone",
          "1-Cold-blooded, 2-Warm-blooded, 3-Without backbone, 4-With scales",
          "1-Without backbone, 2-With scales, 3-Warm-blooded, 4-Cold-blooded",
          "1-With scales, 2-Without backbone, 3-Cold-blooded, 4-Warm-blooded"
        ],
        correctAnswer: "1-Warm-blooded, gives live birth and nurses young, 2-Cold-blooded, lives in water/land with permeable skin, 3-Cold-blooded with scales, lays shelled eggs, 4-Animal without a backbone",
        explanationEn: "Accurate matching of zoological classes.",
        explanationHi: "प्राणीशास्त्रीय वर्गों का सही मिलान।",
        difficulty: "medium",
        skillTag: "TAXONOMIC_MATCHING"
      },
      {
        id: "day48_ex_016",
        type: "error_correction",
        prompt: "Correct the sentence: 'The tiger mother is feeding her baby.'",
        correctAnswer: "The tigress is nursing her cubs.",
        acceptableAnswers: [
          "The tigress is feeding her cub.",
          "The tigress is feeding her cubs."
        ],
        explanationEn: "A female tiger is a 'tigress' and tiger babies are 'cubs'.",
        explanationHi: "मादा बाघ को 'tigress' और बच्चे को 'cub' कहते हैं।",
        difficulty: "medium",
        skillTag: "FAUNA_TERMINOLOGY"
      },
      {
        id: "day48_ex_017",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Vultures are essential scavengers that prevent the spread of infectious diseases.'",
        correctAnswer: "गिद्ध आवश्यक मुर्दाखोर (अपमार्जक) हैं जो संक्रामक रोगों के प्रसार को रोकते हैं।",
        acceptableAnswers: [
          "गिद्ध जरूरी सफाईकर्मी पक्षी हैं जो बीमारियां फैलने से रोकते हैं।"
        ],
        explanationEn: "'Essential scavengers' translates as आवश्यक मुर्दाखोर / अपमार्जक.",
        explanationHi: "गिद्धों की पारिस्थितिक भूमिका का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day48_ex_018",
        type: "active_recall",
        prompt: "What is the biological term for the navigation system used by bats and dolphins that relies on reflected sound waves?",
        correctAnswer: "Echolocation",
        acceptableAnswers: ["echolocation"],
        explanationEn: "'Echolocation' (/ˌek.əʊ.ləʊˈkeɪ.ʃən/).",
        explanationHi: "प्रतिध्वनि निर्धारण को 'echolocation' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day48_ex_019",
        type: "multiple_choice",
        prompt: "What is a 'scavenger' in an ecosystem?",
        options: [
          "An organism that feeds on dead animal and plant material",
          "An animal that hunts live fish",
          "A bird that flies only during the day",
          "A snake that lives underground"
        ],
        correctAnswer: "An organism that feeds on dead animal and plant material",
        explanationEn: "Scavengers (e.g. vultures, hyenas) feed on dead organic matter.",
        explanationHi: "मृत जीवों को खाकर प्रकृति की सफाई करने वाले जीव को 'scavenger' कहते हैं।",
        difficulty: "easy",
        skillTag: "ECOLOGICAL_TERMS"
      },
      {
        id: "day48_ex_020",
        type: "speaking_pronunciation",
        prompt: "Articulate the final /ʒ/ in 'camouflage' /ˈkæm.ə.flɑːʒ/: 'The leopard relies on camouflage to stalk prey.'",
        correctAnswer: "The leopard relies on camouflage to stalk prey.",
        explanationEn: "Ensure the French-derived voiced fricative /ʒ/ at the end of /ˈkæm.ə.flɑːʒ/.",
        explanationHi: "'Camouflage' के अंत में /ʒ/ का सही उच्चारण करें।",
        difficulty: "hard",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day48_ex_021",
        type: "question_formation",
        prompt: "Form a question asking about an animal's natural habitat:",
        correctAnswer: "What is the natural habitat of the snow leopard?",
        acceptableAnswers: [
          "Where is the natural habitat of the snow leopard located?",
          "What kind of habitat does the snow leopard live in?"
        ],
        explanationEn: "'What is the natural habitat of the snow leopard?'",
        explanationHi: "प्राकृतिक आवास पूछने का प्रश्न।",
        difficulty: "easy",
        skillTag: "QUESTION_FORMATION"
      },
      {
        id: "day48_ex_022",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'हाथियों का एक बड़ा झुंड नदी की ओर बढ़ रहा था।'",
        correctAnswer: "A large herd of elephants was moving towards the river.",
        acceptableAnswers: [
          "A large herd of elephants was heading towards the river.",
          "A herd of elephants moved toward the river."
        ],
        explanationEn: "'A large herd of elephants was moving towards the river.'",
        explanationHi: "'A large herd of elephants' सही कलेक्टिव नाउन है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day48_ex_023",
        type: "sentence_building",
        prompt: "Build a sentence about migration using [annual / thousands / birds / migratory / travel / of / miles / during / their].",
        correctAnswer: "Migratory birds travel thousands of miles during their annual migration.",
        explanationEn: "'Migratory birds travel thousands of miles during their annual migration.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day48_ex_024",
        type: "multiple_choice",
        prompt: "Which collective noun is used for a group of fish?",
        options: ["School (or Shoal)", "Pride", "Pack", "Flock"],
        correctAnswer: "School (or Shoal)",
        explanationEn: "A group of fish is a 'school' or 'shoal' of fish.",
        explanationHi: "मछलियों के झुंड को 'a school of fish' या 'a shoal of fish' कहते हैं।",
        difficulty: "easy",
        skillTag: "COLLECTIVE_NOUNS"
      },
      {
        id: "day48_ex_025",
        type: "error_correction",
        prompt: "Correct the sentence: 'A pride of lions are sleeping.'",
        correctAnswer: "A pride of lions is sleeping.",
        explanationEn: "The collective subject 'A pride of lions' takes a singular verb 'is'.",
        explanationHi: "कलेक्टिव नाउन 'a pride of lions' एकवचन क्रिया 'is' लेता है।",
        difficulty: "medium",
        skillTag: "SUBJECT_VERB_AGREEMENT"
      },
      {
        id: "day48_ex_026",
        type: "fill_blank",
        prompt: "Animals with a backbone or spinal column are biologically classified as _______.",
        correctAnswer: "vertebrates",
        explanationEn: "'Vertebrates' possess backbones.",
        explanationHi: "रीढ़ की हड्डी वाले प्राणियों को 'vertebrates' (कशेरुकी) कहते हैं।",
        difficulty: "medium",
        skillTag: "ZOOLOGICAL_TERMS"
      },
      {
        id: "day48_ex_027",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Wildlife corridors prevent genetic inbreeding by connecting fragmented forests.'",
        correctAnswer: "वन्यजीव गलियारे विखंडित जंगलों को जोड़कर आनुवंशिक अंतःप्रजनन को रोकते हैं।",
        acceptableAnswers: [
          "वाइल्डलाइफ कॉरिडोर जंगलों को जोड़कर जानवरों में इनब्रीडिंग रोकते हैं।"
        ],
        explanationEn: "'Wildlife corridors' translates as वन्यजीव गलियारे.",
        explanationHi: "वन्यजीव गलियारों के महत्व का अनुवाद।",
        difficulty: "hard",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day48_ex_028",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [nocturnal / night / owls / are / that / raptors / hunt / at]",
        correctAnswer: "Owls are nocturnal raptors that hunt at night.",
        explanationEn: "Subject + Verb + Noun phrase + Relative clause.",
        explanationHi: "सही क्रम: Owls are nocturnal raptors that hunt at night.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day48_ex_029",
        type: "multiple_choice",
        prompt: "What is an 'omnivore'?",
        options: [
          "An animal that naturally eats both plant and animal matter",
          "An animal that eats only rocks",
          "A mammal that lives only in deep oceans",
          "A bird that cannot lay eggs"
        ],
        correctAnswer: "An animal that naturally eats both plant and animal matter",
        explanationEn: "Omnivores consume both plants and meat.",
        explanationHi: "पौधे और मांस दोनों खाने वाले जीव को 'omnivore' कहते हैं।",
        difficulty: "easy",
        skillTag: "DIETARY_CLASSIFICATION"
      },
      {
        id: "day48_ex_030",
        type: "active_recall",
        prompt: "What is the collective noun for a group of dolphins or whales?",
        correctAnswer: "Pod",
        acceptableAnswers: ["pod", "a pod"],
        explanationEn: "A 'pod' of dolphins/whales.",
        explanationHi: "डॉल्फिन या व्हेल के समूह को 'pod' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day48_ex_031",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'चमगादड़ घने अंधेरे में नेविगेट करने के लिए इकोलोकेशन का उपयोग करते हैं।'",
        correctAnswer: "Bats use echolocation to navigate in pitch-black darkness.",
        acceptableAnswers: [
          "Bats utilize echolocation to navigate in complete darkness.",
          "Bats use echolocation for navigating pitch darkness."
        ],
        explanationEn: "'Bats use echolocation to navigate in pitch-black darkness.'",
        explanationHi: "'Echolocation to navigate in pitch-black darkness' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day48_ex_032",
        type: "error_correction",
        prompt: "Correct the sentence: 'A flock of wolves was howling.'",
        correctAnswer: "A pack of wolves was howling.",
        explanationEn: "Use 'pack' for wolves; 'flock' is for birds or sheep.",
        explanationHi: "भेड़ियों के लिए 'pack' का प्रयोग करें, 'flock' का नहीं।",
        difficulty: "easy",
        skillTag: "COLLECTIVE_NOUNS"
      },
      {
        id: "day48_ex_033",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nBiologist: 'How do frogs survive winter?'\nStudent: 'They bury themselves in pond mud and enter _______.'",
        options: ["hibernation", "curriculum", "prescription", "drizzle"],
        correctAnswer: "hibernation",
        explanationEn: "Amphibians enter hibernation in winter.",
        explanationHi: "मेंढक सर्दियों में शीतनिद्रा (hibernation) में जाते हैं।",
        difficulty: "easy",
        skillTag: "BIOLOGICAL_DISCOURSE"
      },
      {
        id: "day48_ex_034",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The snow leopard is an elusive endangered mammal.'",
        correctAnswer: "The snow leopard is an elusive endangered mammal.",
        explanationEn: "Focus on spelling 'elusive' and 'mammal'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day48_ex_035",
        type: "multiple_choice",
        prompt: "What is an 'amphibian' distinguished by?",
        options: [
          "Living both in water and on land, with moist permeable skin and aquatic larvae",
          "Having feathers and laying eggs in trees",
          "Living exclusively in deep oceans with gills",
          "Having fur and giving live birth"
        ],
        correctAnswer: "Living both in water and on land, with moist permeable skin and aquatic larvae",
        explanationEn: "Amphibians undergo metamorphosis from aquatic larvae to terrestrial/semi-aquatic adults.",
        explanationHi: "जल और थल दोनों में रहने वाले नम त्वचा के जीवों को 'amphibians' कहते हैं।",
        difficulty: "medium",
        skillTag: "ZOOLOGICAL_SCIENCE"
      },
      {
        id: "day48_ex_036",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'मादा कंगारू अपने बच्चे को अपने पेट की थैली में रखती है।'",
        correctAnswer: "The female kangaroo carries her joey inside her abdominal pouch.",
        acceptableAnswers: [
          "A female kangaroo carries her baby joey in her pouch.",
          "Female kangaroos nourish their joeys in their pouches."
        ],
        explanationEn: "'The female kangaroo carries her joey inside her abdominal pouch.'",
        explanationHi: "'Joey' और 'abdominal pouch' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day48_ex_037",
        type: "error_correction",
        prompt: "Correct the sentence: 'Crocodiles are warm-blooded amphibians.'",
        correctAnswer: "Crocodiles are cold-blooded reptiles.",
        explanationEn: "Crocodiles are cold-blooded reptiles (NOT warm-blooded amphibians).",
        explanationHi: "मगरमच्छ ठंडे खून वाले सरीसृप (reptiles) होते हैं।",
        difficulty: "easy",
        skillTag: "TAXONOMIC_ACCURACY"
      },
      {
        id: "day48_ex_038",
        type: "sentence_building",
        prompt: "Build a sentence about raptors using [eagles / daylight / raptors / diurnal / hunt / are / that / during].",
        correctAnswer: "Eagles are diurnal raptors that hunt during daylight.",
        explanationEn: "'Eagles are diurnal raptors that hunt during daylight.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day48_ex_039",
        type: "fill_blank",
        prompt: "The illegal hunting, capturing, or killing of wild animals is known as _______.",
        correctAnswer: "poaching",
        explanationEn: "'Poaching' (/ˈpəʊ.tʃɪŋ/).",
        explanationHi: "अवैध शिकार को 'poaching' कहते हैं।",
        difficulty: "easy",
        skillTag: "CONSERVATION_TERMS"
      },
      {
        id: "day48_ex_040",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Anti-poaching patrols use GPS tracking to protect endangered wildlife.'",
        correctAnswer: "शिकार-रोधी गश्ती दल लुप्तप्राय वन्यजीवों की सुरक्षा के लिए जीपीएस ट्रैकिंग का उपयोग करते हैं।",
        acceptableAnswers: [
          "अवैध शिकार रोकने वाले दस्ते जंगली जानवरों की सुरक्षा हेतु जीपीएस का प्रयोग करते हैं।"
        ],
        explanationEn: "'Anti-poaching patrols' translates as शिकार-रोधी गश्ती दल.",
        explanationHi: "शिकार-रोधी निगरानी का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day48_ex_041",
        type: "multiple_choice",
        prompt: "Which animal baby is called a 'fawn'?",
        options: ["Deer", "Lion", "Bear", "Kangaroo"],
        correctAnswer: "Deer",
        explanationEn: "A baby deer is called a 'fawn'.",
        explanationHi: "हिरण के बच्चे को 'fawn' कहते हैं।",
        difficulty: "easy",
        skillTag: "ANIMAL_OFFSPRING"
      },
      {
        id: "day48_ex_042",
        type: "active_recall",
        prompt: "What is the collective noun for a group of birds flying together?",
        correctAnswer: "Flock",
        acceptableAnswers: ["flock", "a flock"],
        explanationEn: "A 'flock' of birds.",
        explanationHi: "पक्षियों के झुंड को 'a flock of birds' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day48_ex_043",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [ecosystems / preserve / must / biodiversity / to / we / sanctuaries]",
        correctAnswer: "We must preserve sanctuaries to protect biodiversity ecosystems.",
        acceptableAnswers: [
          "We must preserve sanctuaries to protect ecosystems.",
          "To preserve ecosystems we must protect sanctuaries."
        ],
        correctAnswer: "We must preserve sanctuaries to protect ecosystems.",
        explanationEn: "Subject + Modal + Verb + Purpose phrase.",
        explanationHi: "सही क्रम: We must preserve sanctuaries to protect ecosystems.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day48_ex_044",
        type: "error_correction",
        prompt: "Correct the sentence: 'Whale breathes with gills.'",
        correctAnswer: "Whales breathe with lungs.",
        acceptableAnswers: [
          "A whale breathes through lungs.",
          "The whale breathes with lungs."
        ],
        explanationEn: "Mammals (whales) breathe with lungs through blowholes, not gills.",
        explanationHi: "व्हेल स्तनपायी हैं और फेफड़ों (lungs) से सांस लेती हैं, गलफड़ों (gills) से नहीं।",
        difficulty: "easy",
        skillTag: "BIOLOGICAL_ACCURACY"
      },
      {
        id: "day48_ex_045",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'ऑक्टोपस एक बुद्धिमान समुद्री अकशेरुकी जीव है।'",
        correctAnswer: "The octopus is an intelligent marine invertebrate.",
        acceptableAnswers: [
          "An octopus is an intelligent marine invertebrate.",
          "Octopuses are intelligent marine invertebrates."
        ],
        explanationEn: "'The octopus is an intelligent marine invertebrate.'",
        explanationHi: "'Marine invertebrate' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day48_ex_046",
        type: "multiple_choice",
        prompt: "Which preposition correctly fills: 'The tigress hid her cubs _______ a rocky crevice.'?",
        options: ["in", "on", "during", "between"],
        correctAnswer: "in",
        explanationEn: "Spatial preposition: 'in a crevice / cave'.",
        explanationHi: "गुफा या दरार में छिपने के लिए 'in' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "PREPOSITIONS"
      },
      {
        id: "day48_ex_047",
        type: "speaking_pronunciation",
        prompt: "Read aloud with accurate four-syllable rhythm: 'Kangaroos and koalas are unique marsupials.' /mɑːˈsuː.pi.əl/",
        correctAnswer: "Kangaroos and koalas are unique marsupials.",
        explanationEn: "Stress in /mɑːˈsuː.pi.əl/ on the second syllable.",
        explanationHi: "'Marsupial' के दूसरे सिलेबल पर बल दें।",
        difficulty: "medium",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day48_ex_048",
        type: "fill_blank",
        prompt: "An animal that hunts and kills other animals for food is a _______.",
        correctAnswer: "predator",
        explanationEn: "A 'predator' hunts prey.",
        explanationHi: "शिकारी जीव को 'predator' कहते हैं।",
        difficulty: "easy",
        skillTag: "ECOLOGICAL_TERMS"
      },
      {
        id: "day48_ex_049",
        type: "sentence_transformation",
        prompt: "Rewrite using 'scavengers': 'Hyenas feed on dead animal carcasses left behind by lions.'",
        correctAnswer: "Hyenas are scavengers that feed on animal carcasses.",
        explanationEn: "'Scavengers' accurately denotes animals eating dead carrion.",
        explanationHi: "'Scavengers' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day48_ex_050",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nPark Ranger: 'Did you spot any wildlife this morning?'\nVisitor: 'Yes, we observed a magnificent _______ of wild elephants crossing the glade.'",
        options: ["herd", "school", "pack", "pride"],
        correctAnswer: "herd",
        explanationEn: "A group of elephants is a 'herd of elephants'.",
        explanationHi: "हाथियों के झुंड को 'a herd of elephants' कहते हैं।",
        difficulty: "easy",
        skillTag: "COLLECTIVE_NOUNS"
      },
      {
        id: "day48_ex_051",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Strict wildlife laws prohibit the trafficking of ivory and endangered animal pelts.'",
        correctAnswer: "सख्त वन्यजीव कानून हाथी दांत और लुप्तप्राय जानवरों की खाल की तस्करी पर रोक लगाते हैं।",
        acceptableAnswers: [
          "कड़े वन्यजीव नियम हाथी दांत और जानवरों की खाल के अवैध व्यापार को प्रतिबंधित करते हैं।"
        ],
        explanationEn: "'Trafficking of ivory and pelts' translates as हाथी दांत और खाल की तस्करी.",
        explanationHi: "अवैध तस्करी निषेध का अनुवाद।",
        difficulty: "hard",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day48_ex_052",
        type: "multiple_choice",
        prompt: "What is an 'endemic species'?",
        options: [
          "A species that is native and restricted to a specific unique geographical region",
          "A species that lives in every country",
          "An animal kept in a zoo",
          "A domesticated pet"
        ],
        correctAnswer: "A species that is native and restricted to a specific unique geographical region",
        explanationEn: "Endemic species are found exclusively in one defined geographic location.",
        explanationHi: "किसी विशिष्ट भौगोलिक क्षेत्र में ही पाए जाने वाले विशेष जीव को 'endemic species' कहते हैं।",
        difficulty: "medium",
        skillTag: "BIOGEOGRAPHY"
      },
      {
        id: "day48_ex_053",
        type: "error_correction",
        prompt: "Correct the sentence: 'Bat is an avian bird.'",
        correctAnswer: "A bat is a flying mammal.",
        acceptableAnswers: [
          "Bats are flying mammals.",
          "The bat is a mammal, not a bird."
        ],
        explanationEn: "Bats are flying mammals (nurse young, have fur), NOT birds.",
        explanationHi: "चमगादड़ उड़ने वाला स्तनपायी (mammal) है, पक्षी नहीं।",
        difficulty: "easy",
        skillTag: "TAXONOMIC_ACCURACY"
      },
      {
        id: "day48_ex_054",
        type: "active_recall",
        prompt: "What is the word for an animal that is hunted and killed by another for food?",
        correctAnswer: "Prey",
        acceptableAnswers: ["prey"],
        explanationEn: "'Prey' is the animal hunted by predators.",
        explanationHi: "शिकार बनने वाले जीव को 'prey' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day48_ex_055",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'वन्यजीव अभयारण्य प्रवासी पक्षियों के लिए एक सुरक्षित आश्रय प्रदान करता है।'",
        correctAnswer: "The wildlife sanctuary provides a safe haven for migratory birds.",
        acceptableAnswers: [
          "The bird sanctuary offers a safe refuge for migratory birds.",
          "The wildlife sanctuary provides a secure haven for migratory waterfowl."
        ],
        explanationEn: "'The wildlife sanctuary provides a safe haven for migratory birds.'",
        explanationHi: "'Provides a safe haven for migratory birds' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day48_dial_001",
        title: "Controlled Wildlife Safari Sighting & Collective Noun Usage",
        context: "A safari naturalist (Arjun) guiding tourists (Elena and Mark) through a national tiger reserve.",
        characters: ["Arjun", "Elena", "Mark"],
        lines: [
          { speaker: "Arjun", text: "Welcome to our morning game drive! Look towards the clearing by the waterhole.", hindi: "हमारी सुबह की गेम ड्राइव में आपका स्वागत है! पानी के गड्ढे के पास के खुले मैदान की ओर देखिए।" },
          { speaker: "Elena", text: "Oh, look! Is that a pride of lions resting beneath the acacia tree?", hindi: "ओह, देखिए! क्या वह बबूल के पेड़ के नीचे शेरों का एक झुंड (प्राइड) आराम कर रहा है?" },
          { speaker: "Arjun", text: "Indeed! That pride consists of two adult lionesses and four growing cubs. They are nocturnal hunters digesting last night's meal.", hindi: "वास्तव में! उस झुंड में दो वयस्क शेरनियां और चार बढ़ते शावक शामिल हैं। वे निशाचर शिकारी हैं जो कल रात के भोजन को पचा रहे हैं।" },
          { speaker: "Mark", text: "And look across the marshland—there is a massive herd of wild buffaloes grazing peacefully.", hindi: "और दलदली भूमि के उस पार देखिए—वहाँ जंगली भैंसों का एक विशाल झुंड शांति से चर रहा है।" },
          { speaker: "Arjun", text: "Notice how the buffaloes maintain a tight circular perimeter to protect their young calves from apex predators.", hindi: "ध्यान दें कि भैंसें अपने छोटे बछड़ों को शीर्ष शिकारियों से बचाने के लिए एक सख्त गोलाकार घेरा कैसे बनाए रखती हैं।" }
        ]
      },
      {
        id: "day48_dial_002",
        title: "Guided Marine Biology Expedition: Echolocation & Cetacean Behavior",
        context: "A marine researcher (Dr. Tara) explaining cetacean adaptations on a coastal research vessel.",
        characters: ["Dr. Tara", "Student"],
        lines: [
          { speaker: "Dr. Tara", text: "We have just intercepted hydrophone audio signals from a resident pod of orcas.", hindi: "हमने अभी ओर्का व्हेल के एक स्थानीय समूह से हाइड्रोफोन ऑडियो सिग्नल पकड़े हैं।" },
          { speaker: "Student", text: "Are those rhythmic clicking noises their echolocation pulses?", hindi: "क्या वे लयबद्ध क्लिकिंग ध्वनियाँ उनके इकोलोकेशन पल्स हैं?" },
          { speaker: "Dr. Tara", text: "Precisely. Toothed cetaceans utilize ultrasonic clicks to determine the exact distance, speed, and density of schooling fish.", hindi: "बिल्कुल। दांतों वाले सिटासियन झुंड में रहने वाली मछलियों की सटीक दूरी, गति और घनत्व निर्धारित करने के लिए अल्ट्रासोनिक क्लिक का उपयोग करते हैं।" },
          { speaker: "Student", text: "It is astonishing how warm-blooded marine mammals have evolved such complex sensory adaptations underwater.", hindi: "यह आश्चर्यजनक है कि कैसे गर्म खून वाले समुद्री स्तनपायी जीवों ने पानी के भीतर ऐसे जटिल संवेदी अनुकूलन विकसित किए हैं।" }
        ]
      },
      {
        id: "day48_dial_003",
        title: "Free Problem-Resolution: Anti-Poaching Conservation & Bio-Corridor Defense",
        context: "A senior wildlife conservationist (Ramesh) and a forestry officer (Sunita) planning anti-poaching strategy.",
        characters: ["Ramesh", "Sunita"],
        lines: [
          { speaker: "Ramesh", text: "We have detected unauthorized human incursions near the northern wildlife corridor where endangered rhinos migrate.", hindi: "हमने उत्तरी वन्यजीव गलियारे के पास अनधिकृत मानव घुसपैठ का पता लगाया है जहां लुप्तप्राय गैंडे प्रवास करते हैं।" },
          { speaker: "Sunita", text: "That corridor is crucial for preventing genetic isolation among the fragmented elephant herds and tiger populations.", hindi: "वह गलियारा खंडित हाथी झुंडों और बाघों की आबादी के बीच आनुवंशिक अलगाव को रोकने के लिए अत्यंत महत्वपूर्ण है।" },
          { speaker: "Ramesh", text: "We need to deploy 24-hour thermal drone patrols and increase foot ranger checkpoints at all boundary crossings.", hindi: "हमें 24 घंटे थर्मल ड्रोन गश्त तैनात करने और सभी सीमा चौकियों पर पैदल रेंजर चौकियों को बढ़ाने की आवश्यकता है।" },
          { speaker: "Sunita", text: "I will also coordinate with local village councils to reinforce community anti-poaching intelligence networks immediately.", hindi: "मैं सामुदायिक अवैध शिकार-रोधी खुफिया नेटवर्क को तुरंत मजबूत करने के लिए स्थानीय ग्राम परिषदों के साथ भी समन्वय करूँगी।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are giving a presentation on a critically endangered apex predator (e.g., Bengal Tiger, Snow Leopard, or Blue Whale), its habitat adaptations, ecological importance, and conservation challenges.",
      prompts: [
        "Classify the animal (e.g., apex mammalian carnivore, marine cetacean).",
        "Describe its key biological adaptations (e.g., camouflage, echolocation, nocturnal vision).",
        "Explain its ecological role in maintaining biodiversity and food web equilibrium.",
        "Highlight conservation threats (e.g., poaching, habitat fragmentation) and proposed solutions."
      ],
      targetExpressions: [
        "The species is classified as an apex...",
        "It relies on intricate camouflage to...",
        "As an apex predator, it maintains...",
        "To mitigate poaching, we must establish wildlife corridors..."
      ]
    },
    roleplay: {
      scenario: "Wildlife documentary narration describing an interaction between predators and prey in a savannah habitat.",
      roleA: "Narrator: Describing lion pride tactics, camouflage, stalking, and herd defensive behavior.",
      roleB: "Field Biologist: Providing scientific context on predator-prey dynamics and energy conservation.",
      sampleDialogue: "Narrator: 'The lionesses use the golden savannah grass for camouflage as they stalk the herd.' | Biologist: 'Notice how the herd forms a protective ring around the vulnerable fawns.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day48_bm_001",
        title: "Zoological Classification & Behavioral Adaptation Benchmark",
        prompt: "Describe an animal species (e.g., dolphin, snow leopard, or owl) detailing its taxonomic class, sensory adaptations (e.g., echolocation, camouflage), and dietary niche in 4–5 sentences.",
        sampleAnswerEn: "The snow leopard is an elusive mammalian carnivore adapted to high-altitude alpine crags across Central Asia. Its thick, smoky-gray rosette coat provides flawless camouflage against rugged cliffs, allowing it to ambush prey unnoticed. Possessing broad paws that function like natural snowshoes and an exceptionally long tail for balance, it hunts wild sheep and mountain goats at dusk. As a solitary apex predator, it plays a fundamental role in maintaining alpine ecosystem health.",
        sampleAnswerHi: "हिम तेंदुआ मध्य एशिया में उच्च ऊंचाई वाली अल्पाइन चोटियों के लिए अनुकूलित एक मायावी स्तनपायी मांसाहारी जीव है। इसका घना, धूसर धब्बेदार कोट बीहड़ चट्टानों के बीच निर्दोष छलावरण प्रदान करता है, जिससे यह बिना देखे शिकार पर घात लगा सकता है। प्राकृतिक स्नोशू की तरह काम करने वाले चौड़े पंजे और संतुलन के लिए एक असाधारण रूप से लंबी पूंछ के साथ, यह गोधूलि के समय जंगली भेड़ों और पहाड़ी बकरियों का शिकार करता है। एक एकांतप्रिय शीर्ष शिकारी के रूप में, यह अल्पाइन पारिस्थितिकी तंत्र के स्वास्थ्य को बनाए रखने में एक मौलिक भूमिका निभाता है।",
        evaluationCriteria: "Taxonomic accuracy ('mammalian carnivore', 'flawless camouflage', 'solitary apex predator'), biological descriptors, and grammatical cohesion."
      },
      {
        id: "day48_bm_002",
        title: "Faunal Collective Noun & Group Dynamics Benchmark",
        prompt: "Construct a descriptive paragraph incorporating at least three distinct faunal collective nouns (e.g., pride of lions, pod of dolphins, herd of elephants, pack of wolves) with correct singular verb agreement.",
        sampleAnswerEn: "During our coastal safari, we observed incredible faunal dynamics across land and sea. In the offshore bay, a pod of dolphins was leaping synchronously through the cresting waves as it herded a school of silver fish. Meanwhile, along the savanna fringe, a majestic pride of lions was resting beneath the shade, calmly monitoring a distant herd of elephants as it marched toward the watering hole.",
        sampleAnswerHi: "हमारी तटीय सफारी के दौरान, हमने जमीन और समुद्र में अविश्वसनीय जीवों की गतिशीलता देखी। अपतटीय खाड़ी में, डॉल्फ़िन का एक समूह (पॉड) चांदी की मछलियों के झुंड को घेरते हुए लहरों के बीच से समकालिक रूप से उछल रहा था। इस बीच, सवाना के किनारे पर, शेरों का एक राजसी झुंड (प्राइड) छाया के नीचे आराम कर रहा था, और हाथियों के एक दूर के झुंड पर शांति से नजर रख रहा था जो पानी के गड्ढे की ओर बढ़ रहा था।",
        evaluationCriteria: "Accurate collective nouns ('pod of dolphins', 'school of fish', 'pride of lions', 'herd of elephants'), correct singular verb agreement ('was leaping', 'was resting'), and descriptive fluency."
      },
      {
        id: "day48_bm_003",
        title: "Wildlife Conservation & Anti-Poaching Policy Benchmark",
        prompt: "Present a policy argument on combating wildlife trafficking and protecting endangered species corridors in 4–5 sentences.",
        sampleAnswerEn: "Anthropogenic habitat fragmentation and commercial poaching have pushed iconic megafauna like the Asian elephant and one-horned rhinoceros toward the brink of extinction. Establishing legally protected wildlife corridors is essential to reconnect isolated forest sanctuaries and preserve genetic diversity. Furthermore, deploying anti-poaching patrol squads equipped with drone surveillance and enforcing strict penalties on illegal wildlife trafficking will safeguard these vulnerable populations for future generations.",
        sampleAnswerHi: "मानवजनित आवास विखंडन और व्यावसायिक अवैध शिकार ने एशियाई हाथी और एक सींग वाले गैंडे जैसे प्रतिष्ठित विशाल जीवों को विलुप्ति के कगार पर धकेल दिया है। अलग-थलग पड़े वन अभयारण्यों को फिर से जोड़ने और आनुवंशिक विविधता को बनाए रखने के लिए कानूनी रूप से संरक्षित वन्यजीव गलियारों की स्थापना आवश्यक है। इसके अलावा, ड्रोन निगरानी से लैस शिकार-रोधी गश्ती दस्तों को तैनात करने और अवैध वन्यजीव तस्करी पर सख्त दंड लागू करने से भावी पीढ़ियों के लिए इन संवेदनशील आबादियों की रक्षा होगी।",
        evaluationCriteria: "Conservation discourse ('anthropogenic habitat fragmentation', 'wildlife corridors', 'anti-poaching patrol squads', 'illegal wildlife trafficking'), high structural cohesion."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "Why is a whale classified as a mammal rather than a fish?", a: "Because whales are warm-blooded, breathe air into lungs, give live birth, and nurse their calves with milk." },
      { q: "What are the collective nouns for lions, wolves, dolphins, and fish?", a: "A pride of lions, a pack of wolves, a pod of dolphins, and a school (or shoal) of fish." },
      { q: "What is an 'apex predator'?", a: "A predator at the top of the food chain that has no natural predators of its own (e.g., tiger, orca)." },
      { q: "What is the difference between 'nocturnal' and 'diurnal' animals?", a: "Nocturnal animals are active during the night; diurnal animals are active during daylight hours." },
      { q: "What is a 'marsupial'?", a: "A mammal (like a kangaroo) whose females carry and nourish their undeveloped young in an abdominal pouch." }
    ],
    spacedTips: [
      "Practice matching animals to their young: Lion -> Cub, Deer -> Fawn, Dog -> Puppy, Cat -> Kitten, Kangaroo -> Joey.",
      "Review the collective nouns: pride, pack, pod, flock, herd, school, swarm.",
      "Watch a wildlife documentary in English and identify terms like 'camouflage', 'apex predator', 'scavenger', and 'habitat'."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day48.js'), `export const day48 = ${JSON.stringify(day48, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Upgraded Day 48 (55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks)");
