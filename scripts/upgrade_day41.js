import fs from 'fs';
import path from 'path';

// Day 41: House, Architecture & Living Space Descriptors (UPGRADED EXPANDED VERSION)
const day41 = {
  dayNumber: 41,
  id: "day_41",
  titleEn: "House, Architecture & Living Space Descriptors",
  titleHi: "गृह, वास्तुकला एवं आवास विवरण",
  cefr: "A2.2",
  estMinutes: 60, // Removed artificial compact time limit
  prerequisites: "Stage 4 Mastery (Days 1–40: Interpersonal, Modal & Pragmatic Fluency)",
  objectivesEn: [
    "Describe structural features, layouts, rooms, and architectural styles of residential properties with deep precision.",
    "Master residential leasing terminology including rent, lease, utilities, deposit, furnished/unfurnished, and landlord-tenant negotiation discourse.",
    "Use accurate spatial prepositions and dimensional adjectives (spacious, cramped, well-ventilated, compact, cozy, duplex, studio, penthouse) to describe homes.",
    "Discuss home maintenance, household fixtures, plumbing, structural defects, and electrical amenities fluently.",
    "Eliminate persistent Hindi-English spatial traps such as '*living on rent*', '*attached bathroom*', and confusion between '*flat*' and '*apartment*'."
  ],
  objectivesHi: [
    "आवासीय भवनों की संरचना, कमरे, लेआउट और वास्तुकला की शैलियों का विस्तार और बारीकी से वर्णन करना।",
    "किराएदारी, लीज, उपयोगिता बिल (Utilities), सिक्योरिटी डिपॉजिट और फर्निशिंग से संबंधित शब्दावली में निपुण होना।",
    "स्थानिक पूर्वसर्गों (Prepositions) और आवास विशेषणों (Spacious, Cramped, Well-ventilated, Penthouse) का सही प्रयोग करना।",
    "घर के रखरखाव, प्लंबिंग, विद्युत फिटिंग, मरम्मत और घरेलू सुविधाओं पर आत्मविश्वास से बातचीत करना।",
    "हिंदी से अनुवाद की त्रुटियों ('living on rent', 'attached bathroom') को स्थायी रूप से दूर करना।"
  ],
  teach: {
    hindiExplanation: `स्टेज 5 में आपका स्वागत है! डे 41 में हम आवासीय परिसरों, वास्तुकला और घर के विवरण पर पूर्ण महारत हासिल करेंगे।

1. **आवास के प्रकार (Housing Types)**:
   - **Apartment / Flat**: बहुमंजिला इमारत में फ्लैट (UK में 'Flat', US में 'Apartment' अधिक प्रचलित है)।
   - **Detached House / Independent House**: अलग स्वतंत्र मकान जिसमें अपनी निजी सीमा हो।
   - **Semi-detached House**: ऐसा मकान जिसकी एक दीवार पड़ोसी के मकान से जुड़ी हो।
   - **Duplex**: दो मंजिला अपार्टमेंट या मकान जिसके अंदर निजी सीढ़ियां होती हैं।
   - **Studio Apartment**: एक बहुउद्देश्यीय बड़ा कमरा जिसमें लिविंग, बेडरूम और किचन एक साथ संयुक्त होते हैं।
   - **Penthouse**: इमारत की सबसे ऊपरी मंजिल पर स्थित विलासितापूर्ण अपार्टमेंट।

2. **आवासीय विशेषताएं (Living Space Descriptors)**:
   - **Spacious / Roomy**: विशाल, जिसमें पर्याप्त जगह हो।
   - **Cramped / Congested**: तंग, घुटन भरा या बहुत छोटा।
   - **Well-ventilated / Airy**: हवादार, जहाँ ताज़ी हवा का अच्छा प्रवाह हो।
   - **Sunlit / Sun-drenched**: भरपूर प्राकृतिक धूप वाला।
   - **En-suite Bathroom**: बेडरूम से सीधे जुड़ा निजी बाथरूम (जिसे भारतीय अंग्रेज़ी में अक्सर 'attached bathroom' कहा जाता है)।
   - **Open-plan Kitchen**: खुला किचन जो लिविंग या डाइनिंग एरिया से जुड़ा हो बिना किसी दीवार के।

3. **किराएदारी एवं विधिक शब्द (Tenancy & Leasing Discourse)**:
   - **Lease Agreement**: निश्चित अवधि का किराया अनुबंध (उदा. 11 महीने का एग्रीमेंट)।
   - **Security Deposit**: मकान मालिक के पास जमा कराई जाने वाली सुरक्षा राशि (जमानत राशि)।
   - **Utilities**: बुनियादी सुविधाएं जैसे बिजली, पानी, गैस, इंटरनेट और कचरा प्रबंधन।
   - **Maintenance Charges**: सोसाइटी या बिल्डिंग के रखरखाव का मासिक शुल्क।
   - **Furnished / Semi-furnished / Unfurnished**: पूरा सुसज्जित / आंशिक सुसज्जित / बिना फर्नीचर का।

4. **L1 हिंदी भाषियों की मुख्य भूल**:
   - कभी न कहें: "*I am living on rent in Delhi.*" ❌
   - सही मानक अंग्रेज़ी: "**I am renting an apartment in Delhi.**" या "**I live in a rented apartment in Delhi.**" ✔️`,
    englishExplanation: `Welcome to Stage 5! In Day 41, we master the complete descriptive, transactional, and architectural vocabulary required for residential communication, real estate negotiations, and structural living space descriptions.

Key Learning Dimensions:
1. **Architectural Classification**: Distinguishing between detached houses, semi-detached townhouses, multi-story apartments/condominiums, duplexes, penthouses, and compact studio units.
2. **Dimensional & Sensory Adjectives**: Utilizing precise spatial descriptors ('spacious', 'cramped', 'sun-drenched', 'airy', 'drafty', 'well-insulated') rather than generic terms.
3. **Tenancy Discourse**: Handling tenant-landlord interactions, lease clauses, security deposits, notice periods, utility bills, and subleasing protocols.
4. **Maintenance & Structural Repairs**: Reporting issues with fixtures, plumbing leaks, electrical wiring, damp walls, and ventilation systems.`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Spatial Prepositional Collocations for Real Estate",
        description: "Use 'overlooking' for scenic orientation ('a balcony overlooking the garden'), 'adjacent to' for side-by-side positioning, and 'situated on / in' for location ('situated on the fourth floor').",
        register: "Spatial Syntax"
      },
      {
        ruleNumber: 2,
        title: "Stative Participles for Structural States",
        description: "Describe property conditions using past participles as predicative/attributive adjectives: 'newly renovated', 'fully furnished', 'well-lit', 'centrally air-conditioned'.",
        register: "Descriptive Syntax"
      },
      {
        ruleNumber: 3,
        title: "Transitive Verb 'Rent' vs 'Let' vs 'Lease'",
        description: "A tenant 'rents' a property ('I rent a two-bedroom apartment'). A landlord 'rents out' or 'lets' a property ('The owner is letting out the second floor'). 'Lease' applies to formal contractual agreements.",
        register: "Lexical Register"
      },
      {
        ruleNumber: 4,
        title: "Compound Living Space Modifiers",
        description: "Hyphenate compound measure adjectives before nouns: 'a two-bedroom apartment' (NOT '*a two-bedrooms apartment*'), 'a 1,200-square-foot house', 'a 10-story building'.",
        register: "Compound Modifiers"
      },
      {
        ruleNumber: 5,
        title: "Reporting Maintenance Issues (Passive vs Active)",
        description: "Use passive structures or causative verbs when reporting structural faults: 'The tap is leaking' (Active) vs 'The pipe needs to be replaced' (Passive causative) vs 'The ceiling has water damage'.",
        register: "Maintenance Discourse"
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
      },
      {
        subjectGroup: "Lease Clause & Terms",
        formula: "The lease agreement requires + [Time period] + notice prior to vacating.",
        exampleEn: "The lease agreement requires a two-month notice prior to vacating the premises.",
        meaningHi: "मकान खाली करने से पहले लीज एग्रीमेंट के अनुसार दो महीने का नोटिस देना अनिवार्य है।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Living on Rent' and 'Attached Bathroom' Literalisms",
      hindiPattern: "1. '*I am living on rent in Delhi.*' (direct translation of 'मैं दिल्ली में किराए पर रह रहा हूँ')\n2. '*Does this bedroom have an attached bathroom?*'\n3. '*We bought a 3-bedrooms flat.*'\n4. '*The landlord will take back the house.*'",
      potentialInterference: "Literal translations from Hindi create awkward phrasing in international real estate and social contexts.",
      explanation: "In standard English, native speakers say 'I am renting a flat/house' or 'I live in a rented apartment'. While 'attached bathroom' is widely understood in Indian English, standard international real estate uses 'en-suite bathroom' or 'private bath'. Compound adjectives must remain singular ('a three-bedroom flat'). Landlords 'terminate a lease' or 'repossess the property'.",
      naturalSolution: "1. 'I am renting an apartment in Delhi.' | 2. 'Does this bedroom have an en-suite bathroom?' | 3. 'We bought a three-bedroom flat.' | 4. 'The landlord plans to reclaim the property.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day41_vocab_001", word: "Spacious", pos: "Adjective", ipa: "/ˈspeɪ.ʃəs/", meaningHi: "विशाल / खुली जगह वाला", exampleEn: "The living room is exceptionally spacious and airy.", exampleHi: "लिविंग रूम असाधारण रूप से विशाल और हवादार है।" },
      { id: "day41_vocab_002", word: "Cramped", pos: "Adjective", ipa: "/kræmpt/", meaningHi: "तंग / संकीर्ण / घुटन भरा", exampleEn: "The hallway felt cramped with too much bulky furniture.", exampleHi: "बहुत अधिक भारी फर्नीचर होने के कारण गलियारा तंग लग रहा था।" },
      { id: "day41_vocab_003", word: "Well-ventilated", pos: "Adjective", ipa: "/ˌwelˈven.tɪ.leɪ.tɪd/", meaningHi: "हवादार / जिसमें हवा का अच्छा संचार हो", exampleEn: "A well-ventilated kitchen prevents smoke accumulation.", exampleHi: "हवादार रसोई में धुआं जमा नहीं होता है।" },
      { id: "day41_vocab_004", word: "Tenant", pos: "Noun", ipa: "/ˈten.ənt/", meaningHi: "किराएदार", exampleEn: "The tenant paid the monthly rent directly via bank transfer.", exampleHi: "किराएदार ने सीधे बैंक ट्रांसफर के जरिए मासिक किराया दिया।" },
      { id: "day41_vocab_005", word: "Landlord", pos: "Noun", ipa: "/ˈlænd.lɔːd/", meaningHi: "मकान मालिक", exampleEn: "Our landlord promptly arranged a plumber to fix the leak.", exampleHi: "हमारे मकान मालिक ने रिसाव ठीक करने के लिए तुरंत एक प्लंबर का प्रबंध किया।" },
      { id: "day41_vocab_006", word: "Lease", pos: "Noun/Verb", ipa: "/liːs/", meaningHi: "पट्टा / अनुबंध / किराए पर देना या लेना", exampleEn: "We signed a one-year lease for this duplex.", exampleHi: "हमने इस डुप्लेक्स के लिए एक साल के लीज अनुबंध पर हस्ताक्षर किए।" },
      { id: "day41_vocab_007", word: "En-suite", pos: "Adjective/Noun", ipa: "/ɒnˈswiːt/", meaningHi: "कमरे से जुड़ा निजी स्नानघर (अटैच्ड बाथरूम)", exampleEn: "The master bedroom has a luxurious en-suite bathroom.", exampleHi: "मास्टर बेडरूम में एक शानदार अटैच्ड बाथरूम है।" },
      { id: "day41_vocab_008", word: "Utilities", pos: "Noun (plural)", ipa: "/juːˈtɪl.ə.tiz/", meaningHi: "उपयोगिताएं (बिजली, पानी, गैस आदि)", exampleEn: "Are utilities such as electricity and water included?", exampleHi: "क्या बिजली और पानी जैसी उपयोगिताएं किराए में शामिल हैं?" },
      { id: "day41_vocab_009", word: "Refurbished", pos: "Adjective", ipa: "/ˌriːˈfɜː.bɪʃt/", meaningHi: "नवीनीकृत / मरम्मत कर नया किया हुआ", exampleEn: "They moved into a beautifully refurbished penthouse.", exampleHi: "वे एक खूबसूरती से नवीनीकृत पेंटहाउस में चले गए।" },
      { id: "day41_vocab_010", word: "Balcony", pos: "Noun", ipa: "/ˈbæl.kə.ni/", meaningHi: "छज्जा / बालकनी", exampleEn: "We enjoy drinking morning tea on the front balcony.", exampleHi: "हम सामने वाली बालकनी में सुबह की चाय पीने का आनंद लेते हैं।" },
      { id: "day41_vocab_011", word: "Duplex", pos: "Noun", ipa: "/ˈdjuː.pleks/", meaningHi: "दो मंजिला अपार्टमेंट (आंतरिक सीढ़ियों वाला)", exampleEn: "A duplex apartment offers the privacy of two separate floors.", exampleHi: "डुप्लेक्स अपार्टमेंट दो अलग-अलग मंजिलों की निजता प्रदान करता है।" },
      { id: "day41_vocab_012", word: "Penthouse", pos: "Noun", ipa: "/ˈpent.haʊs/", meaningHi: "इमारत की सबसे ऊपरी मंजिल का विलासितापूर्ण फ्लैट", exampleEn: "The penthouse offers a panoramic 360-degree view of the skyline.", exampleHi: "पेंटहाउस शहर के क्षितिज का 360-डिग्री विहंगम दृश्य प्रस्तुत करता है।" },
      { id: "day41_vocab_013", word: "Fixture", pos: "Noun", ipa: "/ˈfɪks.tʃər/", meaningHi: "स्थायी फिटिंग / उपकरण (लाइट, नल आदि)", exampleEn: "All bathroom fixtures are made of brushed stainless steel.", exampleHi: "बाथरूम के सभी फिक्स्चर ब्रश किए हुए स्टेनलेस स्टील से बने हैं।" },
      { id: "day41_vocab_014", word: "Deposit", pos: "Noun", ipa: "/dɪˈpɒz.ɪt/", meaningHi: "जमानत राशि / सुरक्षा जमा", exampleEn: "The landlord asked for a refundable two-month security deposit.", exampleHi: "मकान मालिक ने दो महीने की वापसी योग्य सुरक्षा जमा राशि मांगी।" },
      { id: "day41_vocab_015", word: "Plumbing", pos: "Noun", ipa: "/ˈplʌm.ɪŋ/", meaningHi: "नलसाजी / पाइपलाइन प्रणाली", exampleEn: "Old plumbing in the building caused low water pressure.", exampleHi: "इमारत में पुरानी पाइपलाइन के कारण पानी का दबाव कम हो गया था।" },
      { id: "day41_vocab_016", word: "Insulation", pos: "Noun", ipa: "/ˌɪn.sjəˈleɪ.ʃən/", meaningHi: "ताप या ध्वनि रोधन (इंसुलेशन)", exampleEn: "Proper roof insulation keeps the house cool during summer.", exampleHi: "उचित छत इन्सुलेशन गर्मियों में घर को ठंडा रखता है।" },
      { id: "day41_vocab_017", word: "Sublet", pos: "Verb", ipa: "/ˌsʌbˈlet/", meaningHi: "किसी अन्य को आगे किराए पर देना", exampleEn: "The contract strictly prohibits tenants from subletting the room.", exampleHi: "अनुबंध किराएदारों को कमरा किसी अन्य को आगे किराए पर देने से सख्त मना करता है।" },
      { id: "day41_vocab_018", word: "Furnished", pos: "Adjective", ipa: "/ˈfɜː.nɪʃt/", meaningHi: "फर्नीचर व सामान से सुसज्जित", exampleEn: "They prefer a fully furnished apartment to avoid buying furniture.", exampleHi: "वे फर्नीचर खरीदने से बचने के लिए पूरी तरह सुसज्जित अपार्टमेंट पसंद करते हैं।" },
      { id: "day41_vocab_019", word: "Corridor", pos: "Noun", ipa: "/ˈkɒr.ɪ.dɔːr/", meaningHi: "गलियारा / बरामदा", exampleEn: "Leave the suitcases in the entrance corridor for now.", exampleHi: "सूटकेस अभी के लिए प्रवेश गलियारे में छोड़ दें।" },
      { id: "day41_vocab_020", word: "Premises", pos: "Noun (plural)", ipa: "/ˈprem.ɪ.sɪz/", meaningHi: "परिसर / भवन क्षेत्र", exampleEn: "Smoking is strictly prohibited on the entire premises.", exampleHi: "पूरे परिसर में धूम्रपान सख्त वर्जित है।" }
    ],
    spokenPhrases: [
      { id: "day41_phrase_001", phrase: "I'm currently renting an apartment downtown.", register: "Everyday Neutral", meaningHi: "मैं वर्तमान में शहर के केंद्र में एक अपार्टमेंट किराए पर लेकर रह रहा हूँ।" },
      { id: "day41_phrase_002", phrase: "Does the rent include all utility bills?", register: "Real Estate Inquiry", meaningHi: "क्या किराए में सभी बिजली, पानी के बिल शामिल हैं?" },
      { id: "day41_phrase_003", phrase: "The balcony overlooks a quiet green park.", register: "Descriptive", meaningHi: "बालकनी से एक शांत हरे-भरे पार्क का नज़ारा दिखता है।" },
      { id: "day41_phrase_004", phrase: "How much notice do I need to give before moving out?", register: "Tenancy Discourse", meaningHi: "मकान खाली करने से पहले मुझे कितने समय का नोटिस देना होगा?" },
      { id: "day41_phrase_005", phrase: "The property is within walking distance of the station.", register: "Spatial Convenience", meaningHi: "यह संपत्ति स्टेशन से पैदल दूरी पर स्थित है।" },
      { id: "day41_phrase_006", phrase: "Could you arrange for a plumber to inspect this leak?", register: "Maintenance Request", meaningHi: "क्या आप इस रिसाव की जांच के लिए प्लंबर की व्यवस्था कर सकते हैं?" },
      { id: "day41_phrase_007", phrase: "Is the security deposit fully refundable upon lease expiration?", register: "Formal Lease Terms", meaningHi: "क्या लीज समाप्त होने पर सुरक्षा जमा राशि पूरी तरह वापसी योग्य है?" },
      { id: "day41_phrase_008", phrase: "The apartment boasts ample natural sunlight throughout the day.", register: "Property Marketing", meaningHi: "अपार्टमेंट में दिन भर भरपूर प्राकृतिक धूप खिली रहती है।" },
      { id: "day41_phrase_009", phrase: "We are looking for a semi-furnished two-bedroom unit.", register: "Client Requirement", meaningHi: "हम आंशिक रूप से सुसज्जित दो बेडरूम वाले फ्लैट की तलाश कर रहे हैं।" },
      { id: "day41_phrase_010", phrase: "There is some dampness and seepage on the north wall.", register: "Defect Reporting", meaningHi: "उत्तरी दीवार पर कुछ नमी और सीलन है।" },
      { id: "day41_phrase_011", phrase: "When is the rent due each month?", register: "Payment Scheduling", meaningHi: "प्रत्येक माह किराया किस तारीख तक देय होता है?" },
      { id: "day41_phrase_012", phrase: "The kitchen is fitted with modern modular cabinets.", register: "Interior Feature", meaningHi: "किचन आधुनिक मॉड्यूलर कैबिनेट से सुसज्जित है।" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day41_ex_001", english: "We just moved into a spacious three-bedroom apartment near the business district.", hindi: "हम अभी व्यापारिक क्षेत्र के पास एक विशाल तीन-बेडरूम वाले अपार्टमेंट में स्थानांतरित हुए हैं।" },
      { id: "day41_ex_002", english: "The landlord requires two months of rent as a refundable security deposit.", hindi: "मकान मालिक को वापसी योग्य सुरक्षा जमा के रूप में दो महीने का किराया चाहिए।" },
      { id: "day41_ex_003", english: "Does this apartment have an open-plan layout or separate rooms?", hindi: "क्या इस अपार्टमेंट का लेआउट ओपन-प्लान है या अलग-अलग कमरे हैं?" },
      { id: "day41_ex_004", english: "The master bedroom features an en-suite bathroom and a walk-in wardrobe.", hindi: "मास्टर बेडरूम में एक अटैच्ड बाथरूम और एक वॉक-इन वॉर्डरोब है।" },
      { id: "day41_ex_005", english: "All maintenance charges and water bills are already factored into the rent.", hindi: "सभी रखरखाव शुल्क और पानी के बिल पहले से ही किराए में शामिल हैं।" },
      { id: "day41_ex_006", english: "The kitchen tap has been dripping constantly since yesterday evening.", hindi: "रसोई का नल कल शाम से लगातार टपक रहा है।" },
      { id: "day41_ex_007", english: "Our living room balcony overlooks the city golf course.", hindi: "हमारे लिविंग रूम की बालकनी से शहर के गोल्फ कोर्स का नजारा दिखता है।" },
      { id: "day41_ex_008", english: "They decided to rent an unfurnished studio apartment to save on monthly costs.", hindi: "उन्होंने मासिक खर्च बचाने के लिए बिना फर्नीचर वाला स्टूडियो अपार्टमेंट किराए पर लेने का फैसला किया।" },
      { id: "day41_ex_009", english: "A thirty-day written notice is mandatory before terminating the rental agreement.", hindi: "किराया अनुबंध समाप्त करने से पहले तीस दिनों का लिखित नोटिस देना अनिवार्य है।" },
      { id: "day41_ex_010", english: "The building has excellent sound insulation, so you never hear the street traffic.", hindi: "इमारत में उत्कृष्ट ध्वनि रोधन है, इसलिए आपको सड़क के ट्रैफिक की आवाज कभी नहीं सुनाई देती।" },
      { id: "day41_ex_011", english: "We are looking for a detached house with a private backyard for our pets.", hindi: "हम अपने पालतू जानवरों के लिए निजी पिछवाड़े वाले एक स्वतंत्र घर की तलाश कर रहे हैं।" },
      { id: "day41_ex_012", english: "The penthouse on the twenty-fourth floor comes with private elevator access.", hindi: "चौबीसवीं मंजिल के पेंटहाउस में निजी लिफ्ट की सुविधा उपलब्ध है।" },
      { id: "day41_ex_013", english: "Is there sufficient parking space allocated for both residents and visitors?", hindi: "क्या निवासियों और आगंतुकों दोनों के लिए पर्याप्त पार्किंग स्थान आवंटित है?" },
      { id: "day41_ex_014", english: "The wooden flooring in the hallway was newly polished last week.", hindi: "गलियारे की लकड़ी की फर्श पर पिछले हफ्ते ही नई पॉलिश की गई थी।" },
      { id: "day41_ex_015", english: "There is noticeable dampness and peeling paint near the bathroom ceiling.", hindi: "बाथरूम की छत के पास स्पष्ट नमी और उखड़ता हुआ पेंट दिखाई दे रहा है।" },
      { id: "day41_ex_016", english: "Tenants are not permitted to drill holes into the load-bearing concrete walls.", hindi: "किराएदारों को मुख्य कंक्रीट की दीवारों में छेद करने की अनुमति नहीं है।" },
      { id: "day41_ex_017", english: "The electricity bill fluctuates significantly during peak summer months.", hindi: "गर्मियों के चरम महीनों में बिजली का बिल काफी घटता-बढ़ता है।" },
      { id: "day41_ex_018", english: "Her apartment is compact but designed intelligently with built-in storage.", hindi: "उसका अपार्टमेंट छोटा है लेकिन अंतर्निहित स्टोरेज के साथ समझदारी से डिज़ाइन किया गया है।" },
      { id: "day41_ex_019", english: "The residential complex offers a clubhouse, swimming pool, and gym amenities.", hindi: "आवासीय परिसर में क्लब हाउस, स्विमिंग पूल और जिम की सुविधाएं उपलब्ध हैं।" },
      { id: "day41_ex_020", english: "He signed an eleven-month residential lease with an option for renewal.", hindi: "उन्होंने नवीनीकरण के विकल्प के साथ 11 महीने के आवासीय लीज पर हस्ताक्षर किए।" },
      { id: "day41_ex_021", english: "The corridor lighting operates on automated motion-sensor technology.", hindi: "गलियारे की लाइटें स्वचालित मोशन-सेंसर तकनीक पर काम करती हैं।" },
      { id: "day41_ex_022", english: "Please confirm whether pet owners are welcome in this gated community.", hindi: "कृपया पुष्टि करें कि क्या इस गेटेड कम्युनिटी में पालतू जानवरों को रखने की अनुमति है।" },
      { id: "day41_ex_023", english: "The property has been thoroughly sanitized and is ready for immediate occupancy.", hindi: "संपत्ति को पूरी तरह से सैनिटाइज कर दिया गया है और यह तुरंत रहने के लिए तैयार है।" },
      { id: "day41_ex_024", english: "We had to hire an electrician because the circuit breaker kept tripping.", hindi: "हमें एक इलेक्ट्रीशियन बुलाना पड़ा क्योंकि सर्किट ब्रेकर बार-बार ट्रिप हो रहा था।" },
      { id: "day41_ex_025", english: "The kitchen is equipped with a gas pipeline connection and chimney exhaust.", hindi: "किचन गैस पाइपलाइन कनेक्शन और चिमनी निकास से सुसज्जित है।" }
    ]
  },
  pronunciation: {
    focusSound: "Distinguishing /eɪ/ in 'Spacious', 'Lease' /liːs/ vs 'Leash' /liːʃ/, and silent 'b' in 'Plumber' /ˈplʌm.ər/",
    phoneticNotes: "1. The word 'plumber' and 'plumbing' have a silent 'b' (/ˈplʌm.ər/, /ˈplʌm.ɪŋ/). Never pronounce the 'b'.\n2. 'Spacious' has the long vowel diphthong /eɪ/ as in 'face' (/ˈspeɪ.ʃəs/), not a short /æ/.\n3. 'Balcony' stresses the first syllable: /ˈbæl.kə.ni/.",
    minimalPairs: [
      { wordA: "Lease", ipaA: "/liːs/", wordB: "Leash", ipaB: "/liːʃ/" },
      { wordA: "Floor", ipaA: "/flɔːr/", wordB: "Flaw", ipaB: "/flɔː/" },
      { wordA: "Rent", ipaA: "/rent/", wordB: "Rant", ipaB: "/rænt/" },
      { wordA: "Space", ipaA: "/speɪs/", wordB: "Spade", ipaB: "/speɪd/" },
      { wordA: "Suite", ipaA: "/swiːt/", wordB: "Suit", ipaB: "/suːt/" }
    ],
    drills: [
      { sentence: "The plumber fixed the leaking pipe under the sink.", focus: "Silent 'b' in 'plumber' (/ˈplʌm.ər/)" },
      { sentence: "This spacious duplex has a sun-drenched private terrace.", focus: "Diphthong /eɪ/ in 'spacious' & rhythm" },
      { sentence: "The lease requires three months' deposit upfront.", focus: "Voiceless /s/ ending in 'lease'" },
      { sentence: "Our en-suite bathroom is newly refurbished.", focus: "Pronunciation of 'en-suite' (/ɒnˈswiːt/)" },
      { sentence: "The balcony overlooks a quiet residential street.", focus: "First-syllable stress on 'balcony' (/ˈbæl.kə.ni/)" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day41_ex_001",
        type: "multiple_choice",
        prompt: "Which adjective best describes a room that has plenty of space and room to move freely?",
        options: ["Cramped", "Spacious", "Congested", "Dim"],
        correctAnswer: "Spacious",
        explanationEn: "'Spacious' means having ample room or large dimensions.",
        explanationHi: "'Spacious' का अर्थ विशाल और खुली जगह वाला होता है।",
        difficulty: "easy",
        skillTag: "VOCAB_DESCRIPTORS"
      },
      {
        id: "day41_ex_002",
        type: "multiple_choice",
        prompt: "Choose the correct pronunciation pattern for the person who repairs water pipes:",
        options: ["/ˈplʌm.bər/ (with hard 'b')", "/ˈplʌm.ər/ (silent 'b')", "/ˈpluː.mər/", "/ˈplʌm.baɪ/"],
        correctAnswer: "/ˈplʌm.ər/ (silent 'b')",
        explanationEn: "In English, the 'b' in 'plumber' and 'plumbing' is completely silent.",
        explanationHi: "'Plumber' में 'b' साइलेंट होता है, इसका उच्चारण 'प्लमर' होता है।",
        difficulty: "easy",
        skillTag: "PRONUNCIATION"
      },
      {
        id: "day41_ex_003",
        type: "error_correction",
        prompt: "Correct the sentence: 'I am living on rent in an apartment in Mumbai.'",
        correctAnswer: "I am renting an apartment in Mumbai.",
        explanationEn: "Native English speakers say 'I am renting an apartment' or 'I live in a rented apartment'.",
        explanationHi: "हिंदी के 'किराए पर रह रहा हूँ' का सही अंग्रेज़ी अनुवाद 'I am renting an apartment' होता है।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day41_ex_004",
        type: "fill_blank",
        prompt: "A bathroom directly connected to and accessible only from a bedroom is called an _______ bathroom.",
        correctAnswer: "en-suite",
        explanationEn: "'En-suite' denotes a bathroom directly attached to a bedroom.",
        explanationHi: "बेडरूम से सीधे जुड़े बाथरूम को 'en-suite' कहा जाता है।",
        difficulty: "medium",
        skillTag: "HOUSING_TERMS"
      },
      {
        id: "day41_ex_005",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'क्या मासिक किराए में बिजली और पानी का बिल शामिल है?'",
        correctAnswer: "Is the electricity and water bill included in the monthly rent?",
        acceptableAnswers: [
          "Are utilities included in the monthly rent?",
          "Are electricity and water included in the monthly rent?",
          "Does the monthly rent include electricity and water?"
        ],
        explanationEn: "'Are utilities included in the monthly rent?' or 'Is the electricity and water bill included...?' is natural.",
        explanationHi: "'Are utilities included in the monthly rent?' सबसे स्वाभाविक अभिव्यक्ति है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day41_ex_006",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The balcony overlooks a serene public park.'",
        correctAnswer: "बालकनी से एक शांत सार्वजनिक पार्क का नज़ारा दिखता है।",
        acceptableAnswers: [
          "बालकनी से एक शांत पार्क दिखाई देता है।",
          "बालकनी के सामने एक शांत सार्वजनिक पार्क है।"
        ],
        explanationEn: "'Overlooks' translates naturally as 'का नज़ारा दिखता है' or 'दिखाई देता है'.",
        explanationHi: "'Overlooks' का अर्थ दृश्य दिखाई देना है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day41_ex_007",
        type: "sentence_ordering",
        prompt: "Arrange the words into a grammatically correct real estate sentence: [three-bedroom / we / a / signed / for / lease / apartment / a]",
        correctAnswer: "We signed a lease for a three-bedroom apartment.",
        explanationEn: "Subject + Verb + Object + Prepositional Modifier.",
        explanationHi: "सही क्रम: We signed a lease for a three-bedroom apartment.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day41_ex_008",
        type: "multiple_choice",
        prompt: "What is a 'duplex'?",
        options: [
          "A single room shared by two people",
          "A two-story dwelling or apartment with internal stairs",
          "A house made entirely of wood",
          "A commercial warehouse"
        ],
        correctAnswer: "A two-story dwelling or apartment with internal stairs",
        explanationEn: "A duplex is a residential unit spread over two floors connected by an interior staircase.",
        explanationHi: "डुप्लेक्स आंतरिक सीढ़ियों से जुड़ी दो मंजिलों वाला घर या फ्लैट होता है।",
        difficulty: "easy",
        skillTag: "VOCAB_CLASSIFICATION"
      },
      {
        id: "day41_ex_009",
        type: "error_correction",
        prompt: "Correct the sentence: 'We just purchased a three-bedrooms luxury flat.'",
        correctAnswer: "We just purchased a three-bedroom luxury flat.",
        explanationEn: "Compound adjectives modifying a noun must be singular ('three-bedroom', NOT 'three-bedrooms').",
        explanationHi: "विशेषण के रूप में प्रयुक्त होने पर 'three-bedroom' एकवचन रहता है।",
        difficulty: "medium",
        skillTag: "GRAMMAR_COMPOUND_MODIFIER"
      },
      {
        id: "day41_ex_010",
        type: "fill_blank",
        prompt: "The refundable money given to a landlord before moving in is called a security _______.",
        correctAnswer: "deposit",
        explanationEn: "'Security deposit' is the standard legal and financial term.",
        explanationHi: "सुरक्षा राशि को 'security deposit' कहते हैं।",
        difficulty: "easy",
        skillTag: "LEASING_TERMS"
      },
      {
        id: "day41_ex_011",
        type: "dialogue_completion",
        prompt: "Complete the conversation naturally:\nTenant: 'I noticed some water dripping from the ceiling.'\nLandlord: 'I'll send a _______ right away to investigate the leak.'",
        options: ["carpenter", "plumber", "electrician", "gardener"],
        correctAnswer: "plumber",
        explanationEn: "A plumber handles pipe leaks and water drainage systems.",
        explanationHi: "पानी के रिसाव और पाइप की मरम्मत प्लंबर करता है।",
        difficulty: "easy",
        skillTag: "SITUATIONAL_DISCOURSE"
      },
      {
        id: "day41_ex_012",
        type: "sentence_transformation",
        prompt: "Transform using 'refurbished': 'They renovated and updated the old apartment thoroughly.'",
        correctAnswer: "They thoroughly refurbished the old apartment.",
        explanationEn: "'Refurbish' means to renovate, redecorate, and restore a living space.",
        explanationHi: "मरम्मत और नवीनीकरण के लिए 'refurbished' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day41_ex_013",
        type: "multiple_choice",
        prompt: "Select the phrase that denotes a kitchen sharing one continuous space with the living area:",
        options: ["Closed kitchen", "Open-plan kitchen", "Basement galley", "Outdoor pantry"],
        correctAnswer: "Open-plan kitchen",
        explanationEn: "An open-plan kitchen is integrated without partition walls into living or dining zones.",
        explanationHi: "दीवार रहित खुले किचन को 'open-plan kitchen' कहते हैं।",
        difficulty: "easy",
        skillTag: "HOUSING_TERMS"
      },
      {
        id: "day41_ex_014",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The master bedroom boasts ample natural sunlight.'",
        correctAnswer: "The master bedroom boasts ample natural sunlight.",
        explanationEn: "Focus on spelling 'boasts' and 'ample'.",
        explanationHi: "उच्चारण और वर्तनी पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day41_ex_015",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'मकान खाली करने से पहले एक महीने का नोटिस देना अनिवार्य है।'",
        correctAnswer: "A one-month notice is required before vacating the house.",
        acceptableAnswers: [
          "A one-month notice is mandatory before vacating the house.",
          "You must give one month's notice before moving out.",
          "Giving a one-month notice is compulsory before vacating the premises."
        ],
        explanationEn: "'A one-month notice is required/mandatory before vacating the house.'",
        explanationHi: "'A one-month notice is required before vacating...' सटीक है।",
        difficulty: "hard",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day41_ex_016",
        type: "error_correction",
        prompt: "Correct the sentence: 'The landlord is letting the flat on two boys.'",
        correctAnswer: "The landlord is letting the flat to two boys.",
        explanationEn: "The collocation is 'let / rent something TO someone', not 'on'.",
        explanationHi: "किराए पर देने के लिए 'let/rent to' का प्रयोग होता है, 'on' का नहीं।",
        difficulty: "medium",
        skillTag: "PREPOSITION_COLLOCATION"
      },
      {
        id: "day41_ex_017",
        type: "matching",
        prompt: "Match the property term to its correct definition:\n1. Studio Apartment\n2. Penthouse\n3. Detached House\n4. Premises",
        options: [
          "1-One open-plan living unit, 2-Top-floor luxury suite, 3-Standalone private building, 4-Entire property land and buildings",
          "1-Top-floor luxury suite, 2-One open-plan living unit, 3-Entire property, 4-Standalone house",
          "1-Standalone house, 2-Top floor, 3-One unit, 4-Land",
          "1-Entire land, 2-Standalone, 3-Top floor, 4-One unit"
        ],
        correctAnswer: "1-One open-plan living unit, 2-Top-floor luxury suite, 3-Standalone private building, 4-Entire property land and buildings",
        explanationEn: "Accurate matching of architectural terms.",
        explanationHi: "सभी वास्तुकला शब्दों की सही परिभाषाएं।",
        difficulty: "medium",
        skillTag: "VOCAB_MATCHING"
      },
      {
        id: "day41_ex_018",
        type: "fill_blank",
        prompt: "The contract strictly forbids the tenant from _______ the property to third parties without prior written consent.",
        correctAnswer: "subletting",
        explanationEn: "'Subletting' refers to leasing leased property to another party.",
        explanationHi: "आगे किसी और को किराए पर देने को 'subletting' कहते हैं।",
        difficulty: "hard",
        skillTag: "LEGAL_TERMS"
      },
      {
        id: "day41_ex_019",
        type: "multiple_choice",
        prompt: "Which word is an antonym (opposite) of 'spacious'?",
        options: ["Airy", "Cramped", "Expansive", "Roomy"],
        correctAnswer: "Cramped",
        explanationEn: "'Cramped' means uncomfortably small or tight, opposite of 'spacious'.",
        explanationHi: "'Cramped' (तंग) 'spacious' का विलोम है।",
        difficulty: "easy",
        skillTag: "VOCAB_ANTONYM"
      },
      {
        id: "day41_ex_020",
        type: "question_formation",
        prompt: "Form a polite inquiry to ask if pets are allowed in the rental building:",
        correctAnswer: "Are pets permitted in this building?",
        acceptableAnswers: [
          "Are pets allowed in this apartment complex?",
          "Is this building pet-friendly?",
          "Can I keep pets in this apartment?"
        ],
        explanationEn: "'Are pets permitted in this building?' or 'Is this building pet-friendly?' is standard.",
        explanationHi: "पालतू जानवरों की अनुमति पूछने के लिए यह प्रश्न उपयुक्त है।",
        difficulty: "medium",
        skillTag: "QUESTION_FORMATION"
      },
      {
        id: "day41_ex_021",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The living space has excellent thermal insulation.'",
        correctAnswer: "आवासीय स्थान में बेहतरीन ताप रोधन (इंसुलेशन) है।",
        acceptableAnswers: [
          "इस घर में बहुत अच्छा थर्मल इन्सुलेशन है।",
          "कमरे का तापमान रोधन बहुत बढ़िया है।"
        ],
        explanationEn: "'Thermal insulation' translates as ताप रोधन.",
        explanationHi: "'Thermal insulation' का अर्थ तापमान रोधन है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day41_ex_022",
        type: "active_recall",
        prompt: "What is the professional term for services like water, gas, electricity, and trash removal in rental contracts?",
        correctAnswer: "Utilities",
        explanationEn: "'Utilities' encompasses municipal services provided to residences.",
        explanationHi: "बिजली, पानी, गैस जैसी सुविधाओं को 'Utilities' कहा जाता है।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day41_ex_023",
        type: "error_correction",
        prompt: "Correct the sentence: 'The house is located in the fourth floor.'",
        correctAnswer: "The house is located on the fourth floor.",
        explanationEn: "Floors take the preposition 'on' ('on the fourth floor'), not 'in'.",
        explanationHi: "मंजिल के लिए 'on' का प्रयोग होता है ('on the fourth floor')।",
        difficulty: "easy",
        skillTag: "PREPOSITIONS"
      },
      {
        id: "day41_ex_024",
        type: "sentence_building",
        prompt: "Build a sentence stating that the property has 24-hour security using [gated community / round-the-clock / guards / features].",
        correctAnswer: "The gated community features round-the-clock security guards.",
        acceptableAnswers: [
          "This gated community features round-the-clock security guards."
        ],
        explanationEn: "'The gated community features round-the-clock security guards.'",
        explanationHi: "सही वाक्य संरचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day41_ex_025",
        type: "multiple_choice",
        prompt: "Which sentence uses the most natural register for a tenant reporting an electrical failure?",
        options: [
          "Hey, current is not coming in bedroom.",
          "I would like to report that the circuit breaker tripped and the master bedroom has lost power.",
          "Electricity gone in house please come.",
          "Light cut off happening right now."
        ],
        correctAnswer: "I would like to report that the circuit breaker tripped and the master bedroom has lost power.",
        explanationEn: "Professional and precise tenant-landlord communication.",
        explanationHi: "शिष्ट और स्पष्ट व्यावसायिक संप्रेषण।",
        difficulty: "medium",
        skillTag: "REGISTER_SELECTION"
      },
      {
        id: "day41_ex_026",
        type: "fill_blank",
        prompt: "The entrance _______ was cluttered with shoes and umbrella stands.",
        correctAnswer: "hallway",
        acceptableAnswers: ["corridor", "foyer"],
        explanationEn: "'Hallway', 'corridor', or 'foyer' fits the entrance area description.",
        explanationHi: "प्रवेश मार्ग को 'hallway' या 'corridor' कहते हैं।",
        difficulty: "medium",
        skillTag: "VOCAB_DESCRIPTORS"
      },
      {
        id: "day41_ex_027",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'दीवारों पर सीलन की वजह से पेंट उखड़ रहा है।'",
        correctAnswer: "The paint is peeling due to dampness on the walls.",
        acceptableAnswers: [
          "The paint is peeling off because of moisture on the walls.",
          "Due to dampness on the walls, the paint is peeling."
        ],
        explanationEn: "'Peeling paint' and 'dampness/moisture' are the standard terms.",
        explanationHi: "'The paint is peeling due to dampness on the walls.' सटीक अनुवाद है।",
        difficulty: "hard",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day41_ex_028",
        type: "multiple_choice",
        prompt: "What does 'unfurnished' mean when viewing a rental listing?",
        options: [
          "The apartment has beds, sofas, and television included",
          "The apartment has no furniture; the tenant must bring their own",
          "The apartment has damaged furniture",
          "The apartment is for sale only"
        ],
        correctAnswer: "The apartment has no furniture; the tenant must bring their own",
        explanationEn: "'Unfurnished' means empty of furniture fittings.",
        explanationHi: "'Unfurnished' का अर्थ बिना फर्नीचर वाला फ्लैट होता है।",
        difficulty: "easy",
        skillTag: "LEASING_TERMS"
      },
      {
        id: "day41_ex_029",
        type: "sentence_ordering",
        prompt: "Arrange into a proper maintenance request: [urgent / pipe / kitchen / under / the / requires / leaking / repair / the]",
        correctAnswer: "The leaking pipe under the kitchen requires urgent repair.",
        explanationEn: "Subject noun phrase + Verb + Object modifier.",
        explanationHi: "सही क्रम: The leaking pipe under the kitchen requires urgent repair.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day41_ex_030",
        type: "error_correction",
        prompt: "Correct the sentence: 'Does this flat has a balcony?'",
        correctAnswer: "Does this flat have a balcony?",
        explanationEn: "After the auxiliary 'does', the main verb must be in its base form 'have' (NOT 'has').",
        explanationHi: "सहायक क्रिया 'does' के बाद हमेशा बेस फॉर्म 'have' आता है।",
        difficulty: "easy",
        skillTag: "GRAMMAR_AUXILIARY"
      },
      {
        id: "day41_ex_031",
        type: "speaking_pronunciation",
        prompt: "Read aloud with clear articulation of silent 'b': 'The plumber inspected the plumbing under the sink.'",
        correctAnswer: "The plumber inspected the plumbing under the sink.",
        explanationEn: "Ensure 'plumber' is pronounced /ˈplʌm.ər/ without sounding the 'b'.",
        explanationHi: "'Plumber' और 'plumbing' में 'b' का उच्चारण न करें।",
        difficulty: "medium",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day41_ex_032",
        type: "multiple_choice",
        prompt: "Choose the natural term: 'A small apartment where living room, bedroom, and kitchen are all in one single open space.'",
        options: ["Bungalow", "Studio apartment", "Townhouse", "Villa"],
        correctAnswer: "Studio apartment",
        explanationEn: "A studio apartment combines living room, bedroom, and kitchenette into one space.",
        explanationHi: "एक कमरे में संयुक्त आवास को 'studio apartment' कहते हैं।",
        difficulty: "easy",
        skillTag: "VOCAB_CLASSIFICATION"
      },
      {
        id: "day41_ex_033",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The tenant is responsible for minor household repairs.'",
        correctAnswer: "किराएदार घर की छोटी-मोटी मरम्मत के लिए जिम्मेदार है।",
        acceptableAnswers: [
          "किराएदार मामूली घरेलू मरम्मत के लिए उत्तरदायी है।"
        ],
        explanationEn: "'Minor household repairs' translates as छोटी-मोटी घरेलू मरम्मत.",
        explanationHi: "'Minor household repairs' का अर्थ छोटी-मोटी मरम्मत है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day41_ex_034",
        type: "fill_blank",
        prompt: "The landlord promised to refund the full _______ upon receiving the keys back at lease end.",
        correctAnswer: "deposit",
        explanationEn: "'Security deposit' or 'deposit' is refunded when keys are handed over.",
        explanationHi: "जमानत राशि को 'deposit' कहते हैं।",
        difficulty: "medium",
        skillTag: "LEASING_TERMS"
      },
      {
        id: "day41_ex_035",
        type: "active_recall",
        prompt: "Provide the natural standard English equivalent for the Indian English phrase '*attached bathroom*':",
        correctAnswer: "en-suite bathroom",
        acceptableAnswers: ["en-suite", "private bathroom", "attached en-suite"],
        explanationEn: "'En-suite bathroom' is the global standard term.",
        explanationHi: "अंतर्राष्ट्रीय मानक अंग्रेज़ी में 'en-suite bathroom' कहा जाता है।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day41_ex_036",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'इस फ्लैट में दिन के समय प्राकृतिक रोशनी बहुत अच्छी आती है।'",
        correctAnswer: "This flat receives excellent natural light during the day.",
        acceptableAnswers: [
          "This apartment gets plenty of natural sunlight during the day.",
          "This flat has ample natural daylight throughout the day."
        ],
        explanationEn: "'This flat receives excellent natural light during the day.' is natural.",
        explanationHi: "'Natural light / daylight' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day41_ex_037",
        type: "multiple_choice",
        prompt: "Which preposition correctly completes: 'The laundry room is situated _______ the basement.'?",
        options: ["on", "in", "at", "over"],
        correctAnswer: "in",
        explanationEn: "Rooms inside an enclosed sub-level take 'in the basement'.",
        explanationHi: "तहखाने के अंदर के लिए 'in the basement' आता है।",
        difficulty: "easy",
        skillTag: "PREPOSITIONS"
      },
      {
        id: "day41_ex_038",
        type: "sentence_transformation",
        prompt: "Rewrite without using 'very small': 'The guest bedroom is very small and uncomfortable.'",
        correctAnswer: "The guest bedroom is cramped and uncomfortable.",
        explanationEn: "'Cramped' accurately replaces 'very small and uncomfortable'.",
        explanationHi: "'Cramped' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day41_ex_039",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nProspective Tenant: 'Are maintenance fees included in the advertised price?'\nReal Estate Agent: 'No, maintenance is billed _______ on a monthly basis.'",
        options: ["separately", "silently", "narrowly", "casually"],
        correctAnswer: "separately",
        explanationEn: "'Billed separately' means added as an extra cost on top of rent.",
        explanationHi: "'Billed separately' का अर्थ अलग से बिल भेजा जाना है।",
        difficulty: "medium",
        skillTag: "SITUATIONAL_DISCOURSE"
      },
      {
        id: "day41_ex_040",
        type: "error_correction",
        prompt: "Correct the sentence: 'We have shifted to our new house yesterday.'",
        correctAnswer: "We moved to our new house yesterday.",
        explanationEn: "In standard English, changing residence is 'move' (with past simple 'moved'), not 'have shifted'.",
        explanationHi: "घर बदलने के लिए 'moved to our new house' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day41_ex_041",
        type: "matching",
        prompt: "Match the repair specialist to their duty:\n1. Electrician\n2. Plumber\n3. Carpenter\n4. Painter",
        options: [
          "1-Wiring & breaker trips, 2-Leaking pipes & drainage, 3-Wooden doors & cabinets, 4-Wall finishes & coats",
          "1-Leaking pipes, 2-Wiring, 3-Wall coats, 4-Wooden doors",
          "1-Wall finishes, 2-Wooden doors, 3-Wiring, 4-Pipes",
          "1-Wiring, 2-Wall finishes, 3-Leaking pipes, 4-Wooden doors"
        ],
        correctAnswer: "1-Wiring & breaker trips, 2-Leaking pipes & drainage, 3-Wooden doors & cabinets, 4-Wall finishes & coats",
        explanationEn: "Correct matching of tradespeople.",
        explanationHi: "शिल्पकारों और उनके कार्यों का सही मिलान।",
        difficulty: "easy",
        skillTag: "VOCAB_MATCHING"
      },
      {
        id: "day41_ex_042",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The security guard logs all visitor entries at the front gate.'",
        correctAnswer: "सुरक्षा गार्ड मुख्य द्वार पर सभी आगंतुकों के प्रवेश का रिकॉर्ड दर्ज करता है।",
        acceptableAnswers: [
          "सुरक्षा गार्ड मेन गेट पर सभी आने वालों की एंट्री लिखता है।"
        ],
        explanationEn: "'Logs visitor entries' translates as आगंतुकों के प्रवेश का रिकॉर्ड दर्ज करना.",
        explanationHi: "'Logs' का अर्थ रिकॉर्ड दर्ज करना है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day41_ex_043",
        type: "sentence_building",
        prompt: "Construct a sentence describing a balcony view using [terrace / offers / sunset / magnificent / the / of / views / the].",
        correctAnswer: "The terrace offers magnificent views of the sunset.",
        explanationEn: "'The terrace offers magnificent views of the sunset.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day41_ex_044",
        type: "multiple_choice",
        prompt: "Which phrase means to formally end a tenancy and leave the residence?",
        options: ["Occupy the property", "Vacate the premises", "Furnish the apartment", "Sublet the hall"],
        correctAnswer: "Vacate the premises",
        explanationEn: "'Vacate the premises' is the standard legal and real estate expression for leaving.",
        explanationHi: "'Vacate the premises' का अर्थ मकान या परिसर खाली करना है।",
        difficulty: "medium",
        skillTag: "LEGAL_TERMS"
      },
      {
        id: "day41_ex_045",
        type: "fill_blank",
        prompt: "The apartment is _______ located near grocery stores, public parks, and metro lines.",
        correctAnswer: "conveniently",
        acceptableAnswers: ["centrally", "ideally"],
        explanationEn: "'Conveniently located' or 'centrally located' is a common collocation.",
        explanationHi: "'Conveniently located' (सुविधाजनक स्थान पर स्थित) सही है।",
        difficulty: "medium",
        skillTag: "COLLOCATIONS"
      },
      {
        id: "day41_ex_046",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'हम 11 महीने के एग्रीमेंट पर हस्ताक्षर करने जा रहे हैं।'",
        correctAnswer: "We are going to sign an eleven-month agreement.",
        acceptableAnswers: [
          "We are going to sign an 11-month lease agreement.",
          "We are signing an eleven-month lease agreement."
        ],
        explanationEn: "'We are going to sign an eleven-month lease agreement.'",
        explanationHi: "'Eleven-month lease agreement' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day41_ex_047",
        type: "error_correction",
        prompt: "Correct the sentence: 'The rent is due in every fifth of month.'",
        correctAnswer: "The rent is due on the fifth of every month.",
        explanationEn: "Dates take preposition 'on' ('on the fifth of every month').",
        explanationHi: "तारीख के लिए 'on the fifth of every month' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "PREPOSITIONS"
      },
      {
        id: "day41_ex_048",
        type: "multiple_choice",
        prompt: "What does 'semi-furnished' typically include?",
        options: [
          "Only bare concrete walls with no lights",
          "Basic fittings, light fixtures, fans, and built-in wardrobes, but no movable beds or sofas",
          "Full luxury furniture, appliances, and cutlery",
          "A car and garage space"
        ],
        correctAnswer: "Basic fittings, light fixtures, fans, and built-in wardrobes, but no movable beds or sofas",
        explanationEn: "'Semi-furnished' properties provide basic fixtures and wardrobes without full movable furnishings.",
        explanationHi: "'Semi-furnished' में पंखे, लाइटें और अलमारियां होती हैं, बिस्तर या सोफा नहीं।",
        difficulty: "easy",
        skillTag: "HOUSING_TERMS"
      },
      {
        id: "day41_ex_049",
        type: "sentence_ordering",
        prompt: "Arrange in logical sequence: [proper / ventilation / moisture / prevents / buildup / good / in / bathrooms]",
        correctAnswer: "Good ventilation prevents moisture buildup in proper bathrooms.",
        acceptableAnswers: [
          "Proper ventilation prevents good moisture buildup in bathrooms.",
          "Good ventilation prevents moisture buildup in bathrooms."
        ],
        correctAnswer: "Good ventilation prevents moisture buildup in bathrooms.",
        explanationEn: "Subject + Verb + Object + Prepositional phrase.",
        explanationHi: "सही क्रम।",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day41_ex_050",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The landlord agreed to replace the damaged kitchen tiles.'",
        correctAnswer: "The landlord agreed to replace the damaged kitchen tiles.",
        explanationEn: "Practice spelling 'landlord' and 'tiles'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day41_ex_051",
        type: "question_formation",
        prompt: "Form a polite question asking how much the monthly maintenance fee is:",
        correctAnswer: "How much is the monthly maintenance fee?",
        acceptableAnswers: [
          "What are the monthly maintenance charges?",
          "How much do you charge for monthly maintenance?"
        ],
        explanationEn: "'How much is the monthly maintenance fee?' is direct and polite.",
        explanationHi: "मासिक मेंटेनेंस शुल्क पूछने का सही प्रश्न।",
        difficulty: "easy",
        skillTag: "QUESTION_FORMATION"
      },
      {
        id: "day41_ex_052",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'क्या सोसाइटी में 24 घंटे पावर बैकअप की सुविधा है?'",
        correctAnswer: "Does the society have 24-hour power backup?",
        acceptableAnswers: [
          "Is 24-hour power backup available in the housing society?",
          "Does this residential complex provide 24-hour power backup?"
        ],
        explanationEn: "'Does the society have 24-hour power backup?' or 'Is 24-hour power backup available...?'",
        explanationHi: "'24-hour power backup' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day41_ex_053",
        type: "multiple_choice",
        prompt: "Select the word for 'a covered area attached to the entrance of a building':",
        options: ["Porch", "Pantry", "Attic", "Cellar"],
        correctAnswer: "Porch",
        explanationEn: "A porch is a covered entrance shelter outside a building.",
        explanationHi: "भवन के मुख्य द्वार के ढके हुए चबूतरे को 'porch' कहते हैं।",
        difficulty: "easy",
        skillTag: "VOCAB_DESCRIPTORS"
      },
      {
        id: "day41_ex_054",
        type: "error_correction",
        prompt: "Correct the sentence: 'The bathroom is having continuous water leak.'",
        correctAnswer: "The bathroom has a continuous water leak.",
        explanationEn: "Stative possession uses simple present 'has', never present continuous '*is having*'.",
        explanationHi: "अवस्था बताने के लिए 'has' का प्रयोग करें, '*is having*' का नहीं।",
        difficulty: "easy",
        skillTag: "STATIVE_VERBS"
      },
      {
        id: "day41_ex_055",
        type: "active_recall",
        prompt: "What do we call the space directly below the roof of a house, often used for storage?",
        correctAnswer: "Attic",
        acceptableAnswers: ["attic", "loft"],
        explanationEn: "'Attic' or 'loft' is the space directly under the roof.",
        explanationHi: "छत के नीचे के स्टोरेज वाले हिस्से को 'attic' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day41_dial_001",
        title: "Controlled Property Viewing & Amenities Inquiry",
        context: "Prospective tenant (Rahul) touring a two-bedroom apartment with a property agent (Vikram).",
        characters: ["Rahul", "Vikram"],
        lines: [
          { speaker: "Rahul", text: "Good afternoon, Vikram. Thank you for showing me this two-bedroom apartment.", hindi: "शुभ दोपहर, विक्रम। मुझे यह दो बेडरूम वाला अपार्टमेंट दिखाने के लिए धन्यवाद।" },
          { speaker: "Vikram", text: "Good afternoon, Rahul! As you can see, the living room is exceptionally spacious and well-lit.", hindi: "शुभ दोपहर, राहुल! जैसा कि आप देख सकते हैं, लिविंग रूम असाधारण रूप से विशाल और रोशनीदार है।" },
          { speaker: "Rahul", text: "It looks fantastic. Does the master bedroom have an en-suite bathroom?", hindi: "यह बहुत शानदार लग रहा है। क्या मास्टर बेडरूम में अटैच्ड बाथरूम है?" },
          { speaker: "Vikram", text: "Yes, it features a newly refurbished en-suite bathroom with modern fittings.", hindi: "हाँ, इसमें आधुनिक फिटिंग के साथ एक नया नवीनीकृत अटैच्ड बाथरूम है।" },
          { speaker: "Rahul", text: "Are electricity, water, and maintenance charges included in the monthly rent?", hindi: "क्या मासिक किराए में बिजली, पानी और मेंटेनेंस शुल्क शामिल हैं?" },
          { speaker: "Vikram", text: "Water and maintenance are covered, but electricity is metered separately.", hindi: "पानी और मेंटेनेंस शामिल हैं, लेकिन बिजली का बिल अलग से मीटर के अनुसार आता है।" }
        ]
      },
      {
        id: "day41_dial_002",
        title: "Guided Tenancy Negotiation & Lease Terms Discussion",
        context: "Tenant discussing security deposit and move-in timeline with the landlord.",
        characters: ["Ananya (Tenant)", "Mr. Kapoor (Landlord)"],
        lines: [
          { speaker: "Ananya", text: "Mr. Kapoor, I would love to move in on the first of next month. Could we finalize the lease terms?", hindi: "मिस्टर कपूर, मैं अगले महीने की पहली तारीख को शिफ्ट होना चाहूंगी। क्या हम लीज की शर्तें तय कर सकते हैं?" },
          { speaker: "Mr. Kapoor", text: "Certainly, Ananya. We require a two-month refundable security deposit upon signing.", hindi: "बिल्कुल, अनन्या। हस्ताक्षर करते समय हमें दो महीने की वापसी योग्य सुरक्षा जमा राशि की आवश्यकता होती है।" },
          { speaker: "Ananya", text: "That sounds standard. What is the required notice period if I need to vacate earlier?", hindi: "यह उचित लगता है। यदि मुझे पहले खाली करना पड़े तो कितने समय का नोटिस देना अनिवार्य होगा?" },
          { speaker: "Mr. Kapoor", text: "A thirty-day written notice is mandatory under our rental agreement.", hindi: "हमारे किराया अनुबंध के तहत तीस दिन का लिखित नोटिस देना अनिवार्य है।" },
          { speaker: "Ananya", text: "Understood. Will you arrange for repainting the hallway before my move-in date?", hindi: "समझ गई। क्या आप मेरे शिफ्ट होने की तारीख से पहले गलियारे में दोबारा पेंट कराने की व्यवस्था करेंगे?" },
          { speaker: "Mr. Kapoor", text: "Yes, our maintenance team will repaint it and polish the wooden flooring this weekend.", hindi: "हाँ, हमारी मेंटेनेंस टीम इस सप्ताहांत इसे फिर से पेंट करेगी और लकड़ी के फर्श को पॉलिश करेगी।" }
        ]
      },
      {
        id: "day41_dial_003",
        title: "Free Problem-Resolution: Reporting Emergency Plumbing Issue",
        context: "Tenant calling the property manager to report water leakage.",
        characters: ["Pooja (Tenant)", "Manager (Property Helpdesk)"],
        lines: [
          { speaker: "Pooja", text: "Hello, this is Pooja from Apartment 402. We have an urgent plumbing issue.", hindi: "नमस्ते, मैं अपार्टमेंट 402 से पूजा बोल रही हूँ। हमारे यहाँ एक गंभीर प्लंबिंग समस्या है।" },
          { speaker: "Manager", text: "Hello Pooja, please describe what happened so I can dispatch the right technician.", hindi: "नमस्ते पूजा, कृपया बताइए क्या हुआ ताकि मैं सही तकनीशियन भेज सकूँ।" },
          { speaker: "Pooja", text: "The pipe beneath the kitchen sink burst, and water is seeping across the wooden floor.", hindi: "किचन सिंक के नीचे का पाइप फट गया है, और पानी लकड़ी के फर्श पर फैल रहा है।" },
          { speaker: "Manager", text: "Please shut off the main water valve immediately under the sink. I am sending our emergency plumber right now.", hindi: "कृपया सिंक के नीचे का मुख्य पानी का वाल्व तुरंत बंद कर दें। मैं अभी हमारे आपातकालीन प्लंबर को भेज रहा हूँ।" },
          { speaker: "Pooja", text: "Thank you. I have turned off the valve. We will wait for him.", hindi: "धन्यवाद। मैंने वाल्व बंद कर दिया है। हम उनका इंतजार करेंगे।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are describing your ideal home to a real estate consultant or international friend.",
      prompts: [
        "Describe the architectural layout (e.g., apartment, duplex, detached house) and location.",
        "Specify the number of bedrooms, bathrooms, and desired features (e.g., en-suite bath, open-plan kitchen, balcony).",
        "Explain what environmental qualities you value most (e.g., ample natural sunlight, sound insulation, serene garden view).",
        "Discuss your leasing preferences (e.g., furnished vs. unfurnished, utilities included, deposit terms)."
      ],
      targetExpressions: [
        "I am looking for a spacious...",
        "It features an en-suite bathroom...",
        "The balcony overlooks...",
        "I prefer a fully furnished unit with utilities included..."
      ]
    },
    roleplay: {
      scenario: "Real estate negotiation between a prospective tenant and a landlord for an 11-month lease.",
      roleA: "Tenant: Inquiring about rent, maintenance fees, pet policies, parking allocation, and deposit terms.",
      roleB: "Landlord: Explaining rules, lease termination clauses, notice periods, and maintenance responsibilities.",
      sampleDialogue: "Tenant: 'Is the parking spot included in the rent?' | Landlord: 'Yes, one dedicated covered spot in the basement is allocated to this unit.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day41_bm_001",
        title: "Comprehensive Residential Property Description Benchmark",
        prompt: "Describe your current living space or ideal home in 4–5 fluent sentences using at least three architectural/spatial adjectives (e.g., spacious, sun-drenched, well-ventilated, en-suite) and correct prepositions.",
        sampleAnswerEn: "I currently rent a spacious two-bedroom apartment situated on the fifth floor of a modern complex. The living room is bright and well-ventilated, with French doors leading onto a balcony that overlooks a tranquil community park. The master bedroom includes an en-suite bathroom with contemporary fixtures, while the kitchen has an open-plan layout fitted with modular cabinets.",
        sampleAnswerHi: "मैं वर्तमान में एक आधुनिक परिसर की पांचवीं मंजिल पर स्थित एक विशाल दो-बेडरूम अपार्टमेंट किराए पर लेता हूँ। लिविंग रूम उज्ज्वल और हवादार है, जिसमें फ्रेंच दरवाजे एक बालकनी की ओर खुलते हैं जहाँ से एक शांत पार्क का दृश्य दिखाई देता है। मास्टर बेडरूम में समकालीन फिटिंग के साथ एक अटैच्ड बाथरूम है, जबकि रसोई में मॉड्यूलर कैबिनेट के साथ एक ओपन-प्लान लेआउट है।",
        evaluationCriteria: "Accurate use of spatial adjectives, correct prepositions ('on the fifth floor', 'overlooks'), avoidance of L1 traps ('living on rent', 'attached bathroom'), and natural syntax flow."
      },
      {
        id: "day41_bm_002",
        title: "Tenancy Negotiation & Lease Terms Discourse",
        prompt: "Formulate a formal email or spoken request to a landlord inquiring about lease terms, security deposit, utilities inclusion, and maintenance responsibilities for an advertised property.",
        sampleAnswerEn: "Dear Mr. Sharma, I am writing to express my interest in the three-bedroom apartment listed on Park Avenue. Could you please confirm the required security deposit and whether utility bills such as water and electricity are included in the monthly rent? Furthermore, I would appreciate clarification on the notice period required prior to vacating the premises. I look forward to scheduling a viewing at your earliest convenience.",
        sampleAnswerHi: "प्रिय श्री शर्मा, मैं पार्क एवेन्यू पर सूचीबद्ध तीन बेडरूम वाले अपार्टमेंट में अपनी रुचि व्यक्त करने के लिए लिख रहा हूँ। क्या आप कृपया आवश्यक सुरक्षा जमा की पुष्टि कर सकते हैं और क्या मासिक किराए में पानी और बिजली जैसे बिल शामिल हैं? इसके अलावा, परिसर खाली करने से पहले आवश्यक नोटिस अवधि पर स्पष्टीकरण की सराहना करूँगा। मैं अपनी सुविधानुसार जल्द से जल्द एक देखने का समय निर्धारित करने के लिए उत्सुक हूँ।",
        evaluationCriteria: "Professional register, precise real estate terminology ('security deposit', 'utilities', 'vacating the premises'), and clear clause structure."
      },
      {
        id: "day41_bm_003",
        title: "Maintenance & Structural Fault Reporting",
        prompt: "Explain a structural or plumbing defect in your rental property and request immediate remedial action from the property manager.",
        sampleAnswerEn: "Hello, I am reporting an urgent maintenance issue in Apartment 304. We have noticed severe water seepage and peeling paint around the ceiling in the guest bathroom, which appears to originate from a pipe leakage on the floor above. Could you please arrange for a certified plumber to inspect and repair the damage as soon as possible to prevent further structural deterioration?",
        sampleAnswerHi: "नमस्ते, मैं अपार्टमेंट 304 में एक तत्काल रखरखाव समस्या की रिपोर्ट कर रहा हूँ। हमने गेस्ट बाथरूम में छत के चारों ओर गंभीर पानी के रिसाव और पेंट के उखड़ने को देखा है, जो ऊपर की मंजिल पर पाइप रिसाव से उत्पन्न होता प्रतीत होता है। क्या आप आगे की संरचनात्मक क्षति को रोकने के लिए जल्द से जल्द एक प्रमाणित प्लंबर द्वारा निरीक्षण और मरम्मत की व्यवस्था कर सकते हैं?",
        evaluationCriteria: "Technical maintenance terminology ('seepage', 'pipe leakage', 'structural deterioration'), polite yet firm request phrasing, and flawless grammar."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "How do you naturally say 'मैं किराए पर रहता हूँ' without using '*living on rent*'?", a: "Say 'I am renting an apartment' or 'I live in a rented apartment'." },
      { q: "What is the silent letter in 'plumber' and 'plumbing'?", a: "The letter 'b' is silent (/ˈplʌm.ər/)." },
      { q: "What is the global standard term for 'attached bathroom'?", a: "En-suite bathroom." },
      { q: "Why is 'a three-bedrooms apartment' incorrect?", a: "Because compound measure adjectives before nouns must remain singular ('a three-bedroom apartment')." },
      { q: "What preposition is used for floor levels in a building?", a: "The preposition 'on' ('on the third floor')." }
    ],
    spacedTips: [
      "Review Day 41 spatial adjectives when walking through your home; name each room's condition in English (sunlit, well-ventilated, compact).",
      "Notice how international property listings describe amenities using 'features', 'boasts', and 'comprises' rather than simple 'has'.",
      "Always double-check that compound modifiers remain singular: 'a ten-story building', 'a two-car garage'."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day41.js'), `export const day41 = ${JSON.stringify(day41, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Upgraded Day 41 (55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks)");
