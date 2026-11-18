import fs from 'fs';
import path from 'path';

// Day 42: Street Directions, City Transit & Commuting
const day42 = {
  dayNumber: 42,
  id: "day_42",
  titleEn: "Street Directions, City Transit & Commuting",
  titleHi: "रास्ता पूछना, नगर पारगमन एवं दैनिक आवागमन",
  cefr: "A2.2",
  estMinutes: 60,
  prerequisites: "Day 41 Mastery (Spatial Syntax & Living Descriptors)",
  objectivesEn: [
    "Navigate complex urban environments, requesting and giving precise pedestrian and driving directions.",
    "Master transit terminology for subways, commuter trains, bus rapid transit (BRT), interchanges, platforms, and turnstiles.",
    "Collocate spatial prepositions, landmarks, cardinal directions, and distance metrics fluently.",
    "Handle commuter disruptions, delays, route diversions, transfers, and fare inquiries.",
    "Remediate Indian English transit habits such as '*give side*', '*drop me here*', and '*what is your good route*'."
  ],
  objectivesHi: [
    "शहरी वातावरण में सटीक रास्ते पूछना, पैदल और ड्राइविंग दिशा-निर्देश देना और समझना।",
    "मेट्रो, लोकल ट्रेन, बस रैपिड ट्रांजिट, इंटरचेंज, प्लेटफॉर्म और टिकट प्रणाली की शब्दावली में निपुण होना।",
    "दिशात्मक पूर्वसर्गों (Prepositions), मुख्य स्थलों (Landmarks) और दूरी का सही उपयोग करना।",
    "यातायात व्यवधान, देरी, रूट परिवर्तन, ट्रेन बदलने और किराए से संबंधित बातचीत करना।",
    "हिंदी अनुवाद से उपजी आवागमन की अशुद्धियों ('give side', 'drop me here') को दूर करना।"
  ],
  teach: {
    hindiExplanation: `डे 42 में हम दिशाओं, रास्तों और सार्वजनिक परिवहन (Public Transit & Commuting) की भाषा सीखेंगे।

1. **दिशा-निर्देश देने के मुख्य सूत्र**:
   - 'Go straight ahead along this road.' (इस सड़क पर सीधे चलते रहें।)
   - 'Take the second left / right after the traffic signal.' (ट्रैफिक सिग्नल के बाद दूसरा बायाँ / दायाँ मोड़ लें।)
   - 'It will be on your left, just opposite / across from the library.' (यह आपके बायीं ओर, ठीक लाइब्रेरी के सामने होगा।)
   - 'Continue past the petrol station until you reach the roundabout.' (पेट्रोल पंप को पार करते हुए गोलचक्कर तक बढ़ते रहें।)

2. **मेट्रो और सार्वजनिक पारगमन (Subway & Transit Terms)**:
   - **Interchange / Transfer Station**: जहाँ से दूसरी लाइन (जैसे यलो लाइन से ब्लू लाइन) की ट्रेन बदलनी होती है।
   - **Turnstile / Fare Gates**: टिकट या स्मार्ट कार्ड स्कैन करके अंदर जाने वाले स्वचालित गेट।
   - **Platform**: जिस चबूतरे पर ट्रेन आती है ('Platform 3 for trains heading northbound')।
   - **Commute / Commuter**: रोज़ाना घर से काम पर आने-जाने की यात्रा / दैनिक यात्री।

3. **L1 हिंदी भाषियों की आम गलतियां**:
   - भीड़ में रास्ता मांगते समय कभी '*Give side*' न कहें ❌। सही मानक अंग्रेज़ी: "**Excuse me, may I get past?**" या "**Pardon me, could I squeeze through?**" ✔️
   - कैब या ऑटो वाले से उतरने के लिए '*Drop me here*' की जगह "**Could you please pull over here?**" या "**You can let me off here, please.**" बोलें।`,
    englishExplanation: `In Day 42, we develop pragmatic competence for urban navigation, commuting discourse, transit navigation, and direction-giving protocols.

Key Areas of Focus:
1. **Directional Collocations & Sequencing**: Guiding someone sequentially using imperative transitions ('first head north', 'then turn right at the junction', 'continue past the roundabout').
2. **Transit Topology**: Navigating multi-modal transit hubs, interchanges, ticketing gates, platform allocations, and rail networks.
3. **Disruption & Query Handling**: Asking for alternative routes during delays, understanding service announcements, and verifying route frequency.`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Imperatives for Step-by-Step Directions",
        description: "Directions are primarily delivered using zero-subject imperative verbs: 'Walk two blocks', 'Turn right', 'Cross the pedestrian bridge', 'Follow the overhead signs'.",
        register: "Directional Syntax"
      },
      {
        ruleNumber: 2,
        title: "Prepositions of Orientation and Proximity",
        description: "Distinguish between 'opposite / across from' (facing across a street/space), 'adjacent to / next to' (beside), 'at the intersection of' (crossing point), and 'past' (beyond).",
        register: "Spatial Prepositions"
      },
      {
        ruleNumber: 3,
        title: "Transit Transfer Prepositions ('Transfer to / Change at')",
        description: "Use 'change at [Station]' for the location, and 'transfer to [Line / Mode]' for the destination: 'Change at Central Station and transfer to the Blue Line heading downtown.'",
        register: "Transit Syntax"
      },
      {
        ruleNumber: 4,
        title: "Duration & Frequency Expressions",
        description: "Express schedules using 'runs every [Number] minutes': 'The express train runs every ten minutes during peak rush hour.'",
        register: "Temporal Discourse"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Requesting Directions",
        formula: "Excuse me, could you tell me the best way to get to + [Destination]?",
        exampleEn: "Excuse me, could you tell me the best way to get to the National Museum?",
        meaningHi: "माफ कीजिए, क्या आप मुझे राष्ट्रीय संग्रहालय पहुँचने का सबसे अच्छा रास्ता बता सकते हैं?"
      },
      {
        subjectGroup: "Directional Milestone",
        formula: "Walk / Drive past + [Landmark] + until you see + [Next Landmark] + on your [Left/Right].",
        exampleEn: "Walk past the supermarket until you see the metro station on your right.",
        meaningHi: "सुपरमार्केट के आगे तक चलें जब तक कि आपको अपनी दायीं ओर मेट्रो स्टेशन न दिख जाए।"
      },
      {
        subjectGroup: "Transit Transfer",
        formula: "Take + [Line A] + and transfer to + [Line B] + at + [Interchange Station].",
        exampleEn: "Take the Red Line and transfer to the Airport Express at City Center.",
        meaningHi: "रेड लाइन पकड़ें और सिटी सेंटर पर एयरपोर्ट एक्सप्रेस में ट्रांसफर करें।"
      },
      {
        subjectGroup: "Getting Off Transport",
        formula: "Could you please pull over / let me off + at + [Specific Landmark / Corner]?",
        exampleEn: "Could you please let me off at the next intersection?",
        meaningHi: "क्या आप मुझे अगले चौराहे पर उतार सकते हैं?"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Give Side' and 'Drop Me Here' Literalisms",
      hindiPattern: "1. '*Give side! Give side!*' (when trying to move past someone in a crowded bus/metro)\n2. '*Driver, drop me here.*'\n3. '*What is your good route to airport?*'\n4. '*Come in back side of station.*'",
      potentialInterference: "Literal translations of 'साइड दो', 'यहाँ छोड़ दो', and 'पीछे की तरफ'.",
      explanation: "Native speakers use polite requests: 'Excuse me, may I get through?' or 'Pardon me, coming through'. For exiting vehicles, use 'Could you let me off here?' or 'Please pull over near the corner'. Behind a building is 'at the rear / behind the station', never 'in back side'.",
      naturalSolution: "1. 'Excuse me, could I get past please?' | 2. 'You can let me off right here, please.' | 3. 'What is the quickest route to the airport?' | 4. 'Meet me at the rear exit of the station.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day42_vocab_001", word: "Intersection", pos: "Noun", ipa: "/ˌɪn.təˈsek.ʃən/", meaningHi: "चौराहा / मार्गों का मिलन बिंदु", exampleEn: "Turn left at the busy four-way intersection.", exampleHi: "व्यस्त चार-तरफा चौराहे पर बाएँ मुड़ें।" },
      { id: "day42_vocab_002", word: "Roundabout", pos: "Noun", ipa: "/ˈraʊnd.ə.baʊt/", meaningHi: "गोलचक्कर", exampleEn: "Take the second exit at the roundabout.", exampleHi: "गोलचक्कर पर दूसरे निकास से बाहर निकलें।" },
      { id: "day42_vocab_003", word: "Pedestrian", pos: "Noun", ipa: "/pəˈdes.tri.ən/", meaningHi: "पैदल यात्री", exampleEn: "Always yield to pedestrians at the zebra crossing.", exampleHi: "ज़ेबरा क्रॉसिंग पर हमेशा पैदल यात्रियों को रास्ता दें।" },
      { id: "day42_vocab_004", word: "Interchange", pos: "Noun", ipa: "/ˈɪn.tə.tʃeɪndʒ/", meaningHi: "परिवहन संगम / लाइन बदलने का मुख्य स्टेशन", exampleEn: "Rajiv Chowk is a bustling metro interchange station.", exampleHi: "राजीव चौक एक व्यस्त मेट्रो इंटरचेंज स्टेशन है।" },
      { id: "day42_vocab_005", word: "Turnstile", pos: "Noun", ipa: "/ˈtɜːn.staɪl/", meaningHi: "घूमने वाला प्रवेश द्वार (मेट्रो गेट)", exampleEn: "Tap your smart card on the reader to unlock the turnstile.", exampleHi: "टर्नस्टाइल गेट खोलने के लिए रीडर पर अपना स्मार्ट कार्ड टैप करें।" },
      { id: "day42_vocab_006", word: "Commute", pos: "Verb/Noun", ipa: "/kəˈmjuːt/", meaningHi: "दैनिक आवागमन / रोज़ाना दफ्तर की यात्रा", exampleEn: "He commutes forty-five minutes by subway every morning.", exampleHi: "वह हर सुबह मेट्रो से 45 मिनट का दैनिक आवागमन करता है।" },
      { id: "day42_vocab_007", word: "Landmark", pos: "Noun", ipa: "/ˈlænd.mɑːk/", meaningHi: "पहचान का प्रमुख स्थल / प्रसिद्ध चिन्ह", exampleEn: "The clock tower is a prominent landmark in the city center.", exampleHi: "घंटाघर शहर के केंद्र में एक प्रमुख पहचान चिन्ह है।" },
      { id: "day42_vocab_008", word: "Diversion", pos: "Noun", ipa: "/daɪˈvɜː.ʃən/", meaningHi: "मार्ग परिवर्तन / डायवर्जन", exampleEn: "Traffic was delayed due to a road construction diversion.", exampleHi: "सड़क निर्माण के डायवर्जन के कारण यातायात में देरी हुई।" },
      { id: "day42_vocab_009", word: "Platform", pos: "Noun", ipa: "/ˈplæt.fɔːm/", meaningHi: "प्लेटफ़ॉर्म / गाड़ी रुकने का स्थान", exampleEn: "The northbound train arrives at platform number two.", exampleHi: "उत्तर दिशा में जाने वाली ट्रेन प्लेटफॉर्म नंबर दो पर आती है।" },
      { id: "day42_vocab_010", word: "Fare", pos: "Noun", ipa: "/feər/", meaningHi: "किराया / भाड़ा", exampleEn: "How much is the one-way bus fare to the airport?", exampleHi: "हवाई अड्डे के लिए एक तरफ का बस किराया कितना है?" },
      { id: "day42_vocab_011", word: "Concourse", pos: "Noun", ipa: "/ˈkɒŋ.kɔːs/", meaningHi: "स्टेशन का मुख्य बड़ा हॉल या खुला गलियारा", exampleEn: "Passengers gathered in the central concourse waiting for boarding calls.", exampleHi: "यात्री बोर्डिंग कॉल की प्रतीक्षा करते हुए मुख्य हॉल में एकत्र हुए।" },
      { id: "day42_vocab_012", word: "Shuttle", pos: "Noun/Verb", ipa: "/ˈʃʌt.əl/", meaningHi: "नियमित फेरे लगाने वाली गाड़ी / शटल बस", exampleEn: "A free shuttle bus connects the terminal to the airport hotel.", exampleHi: "एक मुफ्त शटल बस टर्मिनल को हवाईअड्डे के होटल से जोड़ती है।" },
      { id: "day42_vocab_013", word: "Congestion", pos: "Noun", ipa: "/kənˈdʒes.tʃən/", meaningHi: "यातायात जाम / अत्यधिक भीड़", exampleEn: "Heavy traffic congestion causes major bottlenecks during rush hour.", exampleHi: "भारी ट्रैफिक जाम के कारण पीक ऑवर्स के दौरान भारी रुकावट पैदा होती है।" },
      { id: "day42_vocab_014", word: "Zebra Crossing", pos: "Noun", ipa: "/ˌzeb.rə ˈkrɒs.ɪŋ/", meaningHi: "पैदल पार पथ", exampleEn: "Vehicles must come to a complete halt before the zebra crossing.", exampleHi: "वाहनों को ज़ेबरा क्रॉसिंग से पहले पूरी तरह रुकना होगा।" },
      { id: "day42_vocab_015", word: "Transit", pos: "Noun", ipa: "/ˈtræn.zɪt/", meaningHi: "सार्वजनिक परिवहन प्रणाली / पारगमन", exampleEn: "The city has invested billions into its mass rapid transit network.", exampleHi: "शहर ने अपने मास रैपिड ट्रांजिट नेटवर्क में अरबों का निवेश किया है।" },
      { id: "day42_vocab_016", word: "Express", pos: "Adjective/Noun", ipa: "/ɪkˈspres/", meaningHi: "द्रुतगामी / सीमित स्टॉप वाली तेज सेवा", exampleEn: "The express train bypasses all local suburban stops.", exampleHi: "एक्सप्रेस ट्रेन सभी स्थानीय उपनगरीय स्टॉप्स को छोड़ते हुए सीधे निकलती है।" },
      { id: "day42_vocab_017", word: "Terminal", pos: "Noun", ipa: "/ˈtɜː.mɪ.nəl/", meaningHi: "अंतिम स्टेशन / टर्मिनल", exampleEn: "This bus terminates at the central inter-state bus terminal.", exampleHi: "यह बस केंद्रीय अंतर्राज्यीय बस टर्मिनल पर समाप्त होती है।" },
      { id: "day42_vocab_018", word: "Detour", pos: "Noun/Verb", ipa: "/ˈdiː.tʊər/", meaningHi: "चक्करदार लंबा रास्ता / बाईपास मार्ग", exampleEn: "We took a scenic detour through the countryside to avoid the highway jam.", exampleHi: "हाईवे जाम से बचने के लिए हमने ग्रामीण इलाके से एक चक्करदार रास्ता लिया।" },
      { id: "day42_vocab_019", word: "Overtake", pos: "Verb", ipa: "/ˌəʊ.vəˈteɪk/", meaningHi: "आगे निकलना / ओवरटेक करना", exampleEn: "It is dangerous to overtake another vehicle on a blind curve.", exampleHi: "अंधे मोड़ पर किसी अन्य वाहन को ओवरटेक करना खतरनाक है।" },
      { id: "day42_vocab_020", word: "Sidewalk", pos: "Noun", ipa: "/ˈsaɪd.wɔːk/", meaningHi: "फुटपाथ / पैदल चलने का रास्ता (UK: Pavement)", exampleEn: "Pedestrians should always walk on the sidewalk for safety.", exampleHi: "पैदल यात्रियों को सुरक्षा के लिए हमेशा फुटपाथ पर चलना चाहिए।" }
    ],
    spokenPhrases: [
      { id: "day42_phrase_001", phrase: "Excuse me, could I get past please?", register: "Polite Commuter", meaningHi: "माफ कीजिए, क्या मैं आगे निकल सकता हूँ?" },
      { id: "day42_phrase_002", phrase: "Which platform does the train to City Center depart from?", register: "Station Query", meaningHi: "सिटी सेंटर जाने वाली ट्रेन किस प्लेटफॉर्म से छूटती है?" },
      { id: "day42_phrase_003", phrase: "You can let me off right after the traffic light.", register: "Cab / Taxi Direction", meaningHi: "आप मुझे ट्रैफिक लाइट के तुरंत बाद उतार सकते हैं।" },
      { id: "day42_phrase_004", phrase: "Go straight for two blocks and turn right at the bank.", register: "Direction Giving", meaningHi: "दो ब्लॉक सीधे जाएं और बैंक के पास से दाएं मुड़ें।" },
      { id: "day42_phrase_005", phrase: "You will need to transfer to the Yellow Line at Central Station.", register: "Transit Transfer", meaningHi: "आपको सेंट्रल स्टेशन पर येलो लाइन में बदलना होगा।" },
      { id: "day42_phrase_006", phrase: "Is this seat taken, or may I sit here?", register: "Polite Public Etiquette", meaningHi: "क्या यह सीट खाली है, या मैं यहाँ बैठ सकता हूँ?" },
      { id: "day42_phrase_007", phrase: "How many stops is it from here to the financial district?", register: "Route Inquiry", meaningHi: "यहाँ से वित्तीय जिले तक कितने स्टॉप हैं?" },
      { id: "day42_phrase_008", phrase: "The entrance is situated around the corner on your left.", register: "Spatial Orientation", meaningHi: "प्रवेश द्वार आपकी बाईं ओर मोड़ के पास स्थित है।" },
      { id: "day42_phrase_009", phrase: "Please stand clear of the closing doors.", register: "Public Transit Warning", meaningHi: "कृपया बंद होते दरवाजों से दूर रहें।" },
      { id: "day42_phrase_010", phrase: "Is there a direct bus, or do I have to switch lines?", register: "Transit Planning", meaningHi: "क्या कोई सीधी बस है, या मुझे गाड़ी बदलनी होगी?" },
      { id: "day42_phrase_011", phrase: "Follow the overhead signage towards the exit gates.", register: "Navigation Instruction", meaningHi: "निकास द्वारों की ओर जाने वाले ओवरहेड संकेतों का पालन करें।" },
      { id: "day42_phrase_012", phrase: "The traffic is crawling due to heavy road construction.", register: "Commuter Commentary", meaningHi: "सड़क निर्माण के भारी काम के कारण ट्रैफिक रेंग रहा है।" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day42_ex_001", english: "To reach the art gallery, walk straight for three blocks and turn left at the fountain.", hindi: "आर्ट गैलरी पहुँचने के लिए तीन ब्लॉक सीधे चलें और फव्वारे के पास से बाएँ मुड़ें।" },
      { id: "day42_ex_002", english: "Does this commuter train make all local stops or is it an express service?", hindi: "क्या यह लोकल ट्रेन सभी स्टेशनों पर रुकती है या यह एक्सप्रेस सेवा है?" },
      { id: "day42_ex_003", english: "Excuse me, I need to get off at the next station; could I squeeze through?", hindi: "माफ कीजिए, मुझे अगले स्टेशन पर उतरना है; क्या मैं आगे निकल सकता हूँ?" },
      { id: "day42_ex_004", english: "The bus stop is located directly across from the municipal library.", hindi: "बस स्टॉप नगरपालिका पुस्तकालय के ठीक सामने स्थित है।" },
      { id: "day42_ex_005", english: "You must change trains at the central interchange to reach the airport.", hindi: "हवाई अड्डे तक पहुँचने के लिए आपको सेंट्रल इंटरचेंज पर ट्रेन बदलनी होगी।" },
      { id: "day42_ex_006", english: "Please pull over near the corner pharmacy so I can step out.", hindi: "कृपया कोने वाली फार्मेसी के पास गाड़ी रोक दीजिए ताकि मैं उतर सकूँ।" },
      { id: "day42_ex_007", english: "Morning rush hour congestion adds thirty minutes to my daily commute.", hindi: "सुबह के व्यस्त समय का ट्रैफिक जाम मेरे दैनिक आवागमन में तीस मिनट बढ़ा देता है।" },
      { id: "day42_ex_008", english: "Swipe your transit card against the turnstile scanner to gain entry.", hindi: "प्रवेश पाने के लिए टर्नस्टाइल स्कैनर पर अपना ट्रांजिट कार्ड स्वाइप करें।" },
      { id: "day42_ex_009", english: "Is there an elevator available for passengers with heavy luggage?", hindi: "क्या भारी सामान वाले यात्रियों के लिए कोई लिफ्ट उपलब्ध है?" },
      { id: "day42_ex_010", english: "Take the third exit at the roundabout onto Nelson Mandela Marg.", hindi: "गोलचक्कर पर नेल्सन मंडेला मार्ग के लिए तीसरे निकास से बाहर निकलें।" },
      { id: "day42_ex_011", english: "Pedestrians are advised to use the overhead footbridge to cross the highway.", hindi: "पैदल यात्रियों को हाईवे पार करने के लिए ऊपरी पैदल पुल का उपयोग करने की सलाह दी जाती है।" },
      { id: "day42_ex_012", english: "The next station has connecting services to the regional railway terminal.", hindi: "अगले स्टेशन पर क्षेत्रीय रेलवे टर्मिनल के लिए कनेक्टिंग ट्रेन सेवाएं हैं।" },
      { id: "day42_ex_013", english: "How frequently do the feeder buses operate between the metro and the tech park?", hindi: "मेट्रो और टेक पार्क के बीच फीडर बसें कितनी बार चलती हैं?" },
      { id: "day42_ex_014", english: "The GPS navigation instructed us to take a slight right onto the service lane.", hindi: "जीपीएस नेविगेशन ने हमें सर्विस लेन पर थोड़ा दाईं ओर मुड़ने का निर्देश दिया।" },
      { id: "day42_ex_015", english: "I missed my transfer because the connecting train was running five minutes early.", hindi: "मेरी कनेक्टिंग ट्रेन छूट गई क्योंकि वह पाँच मिनट पहले चल रही थी।" },
      { id: "day42_ex_016", english: "There is a taxi stand situated right outside the station's western exit.", hindi: "स्टेशन के पश्चिमी निकास द्वार के ठीक बाहर एक टैक्सी स्टैंड स्थित है।" },
      { id: "day42_ex_017", english: "You can purchase a daily unlimited travel pass from the automated vending machine.", hindi: "आप स्वचालित वेंडिंग मशीन से एक दिवसीय असीमित यात्रा पास खरीद सकते हैं।" },
      { id: "day42_ex_018", english: "Look out for the giant green billboard; the entrance is just behind it.", hindi: "उस बड़े हरे बिलबोर्ड पर ध्यान दें; प्रवेश द्वार ठीक उसके पीछे है।" },
      { id: "day42_ex_019", english: "The train operator announced a ten-minute signal delay due to track maintenance.", hindi: "ट्रेन चालक ने ट्रैक रखरखाव के कारण सिग्नल में दस मिनट की देरी की घोषणा की।" },
      { id: "day42_ex_020", english: "Cross at the pedestrian zebra crossing when the pedestrian light turns green.", hindi: "जब पैदल चलने वालों की बत्ती हरी हो जाए, तब ज़ेबरा क्रॉसिंग से सड़क पार करें।" },
      { id: "day42_ex_021", english: "We were stuck in bumper-to-bumper traffic for nearly an hour on the ring road.", hindi: "हम रिंग रोड पर लगभग एक घंटे तक बम्पर-टू-बम्पर ट्रैफिक जाम में फंसे रहे।" },
      { id: "day42_ex_022", english: "Is this the correct coach for reserved seating passengers?", hindi: "क्या यह आरक्षित सीट वाले यात्रियों के लिए सही डिब्बा है?" },
      { id: "day42_ex_023", english: "The expressway toll plaza accepts contactless electronic payments.", hindi: "एक्सप्रेसवे टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक भुगतान स्वीकार करता है।" },
      { id: "day42_ex_024", english: "He walks briskly along the sidewalk to catch the seven o'clock ferry.", hindi: "वह सात बजे की फेरी पकड़ने के लिए फुटपाथ पर तेजी से चलता है।" },
      { id: "day42_ex_025", english: "Keep left if you intend to take the upcoming flyover towards Gurgaon.", hindi: "यदि आप गुड़गांव की ओर जाने वाले आगामी फ्लाईओवर पर जाना चाहते हैं तो बाईं ओर रहें।" }
    ]
  },
  pronunciation: {
    focusSound: "Distinguishing /θ/ in 'Through' vs /t/ in 'True', and smooth linking in 'straight ahead' /streɪt əˈhed/",
    phoneticNotes: "1. 'Through' uses the voiceless dental fricative /θruː/, not a hard /t/ or /d/.\n2. In connected speech, 'straight ahead' links smoothly: /streɪt əˈhed/.\n3. 'Pedestrian' stresses the second syllable: /pəˈdes.tri.ən/.",
    minimalPairs: [
      { wordA: "Through", ipaA: "/θruː/", wordB: "True", ipaB: "/truː/" },
      { wordA: "Route", ipaA: "/ruːt/", wordB: "Rude", ipaB: "/ruːd/" },
      { wordA: "Turn", ipaA: "/tɜːn/", wordB: "Tone", ipaB: "/təʊn/" },
      { wordA: "Cross", ipaA: "/krɒs/", wordB: "Clause", ipaB: "/klɔːz/" },
      { wordA: "Fare", ipaA: "/feər/", wordB: "Fear", ipaB: "/fɪər/" }
    ],
    drills: [
      { sentence: "Go straight ahead through the underpass.", focus: "Smooth consonant-vowel linking /streɪt əˈhed/ & /θruː/" },
      { sentence: "Transfer to the Blue Line at the central interchange.", focus: "Consonant cluster /trænsˈfɜː/ & syllable stress on 'interchange'" },
      { sentence: "Pedestrians must cross at the zebra crossing.", focus: "Second-syllable stress in 'pedestrian' (/pəˈdes.tri.ən/)" },
      { sentence: "Please stand clear of the closing turnstiles.", focus: "Clear articulation of /klɪər/ and /ˈtɜːn.staɪlz/" },
      { sentence: "Take the second exit at the roundabout.", focus: "Diphthong /aʊ/ in 'roundabout' (/ˈraʊnd.ə.baʊt/)" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day42_ex_001",
        type: "multiple_choice",
        prompt: "You are on a crowded metro and need to pass people to get off. What is the most natural and polite phrase?",
        options: ["Give side! Give side!", "Excuse me, could I get past please?", "Move away from my path!", "Leave the door immediately!"],
        correctAnswer: "Excuse me, could I get past please?",
        explanationEn: "'Excuse me, could I get past please?' is polite and standard global English.",
        explanationHi: "भीड़ में रास्ता मांगने के लिए 'Excuse me, could I get past please?' सबसे शिष्ट अभिव्यक्ति है।",
        difficulty: "easy",
        skillTag: "PRAGMATIC_COMMUTING"
      },
      {
        id: "day42_ex_002",
        type: "error_correction",
        prompt: "Correct the sentence: 'Driver, drop me here on the road.'",
        correctAnswer: "Could you please pull over here?",
        acceptableAnswers: [
          "Please let me off here.",
          "You can let me off right here, please."
        ],
        explanationEn: "In standard English, use 'pull over here' or 'let me off here', not 'drop me here'.",
        explanationHi: "गाड़ी रुकवाने के लिए 'pull over here' या 'let me off here' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day42_ex_003",
        type: "fill_blank",
        prompt: "A circular intersection where traffic moves around a central island is called a _______.",
        correctAnswer: "roundabout",
        explanationEn: "'Roundabout' is the standard traffic term for a circular junction.",
        explanationHi: "गोलचक्कर को अंग्रेज़ी में 'roundabout' कहते हैं।",
        difficulty: "easy",
        skillTag: "TRANSIT_TERMS"
      },
      {
        id: "day42_ex_004",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'मेट्रो स्टेशन ठीक बैंक के सामने स्थित है।'",
        correctAnswer: "The metro station is located directly opposite the bank.",
        acceptableAnswers: [
          "The metro station is situated right across from the bank.",
          "The subway station is located right opposite the bank."
        ],
        explanationEn: "'Opposite the bank' or 'across from the bank' denotes facing across the street.",
        explanationHi: "सामने के लिए 'opposite' या 'across from' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day42_ex_005",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Take the second exit at the roundabout.'",
        correctAnswer: "गोलचक्कर पर दूसरे निकास से बाहर निकलें।",
        acceptableAnswers: [
          "गोलचक्कर पर दूसरा मोड़ लें।"
        ],
        explanationEn: "'Take the second exit' translates as दूसरे निकास से बाहर निकलें.",
        explanationHi: "'Second exit' का अर्थ दूसरा निकास है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day42_ex_006",
        type: "sentence_ordering",
        prompt: "Arrange into clear directions: [turn / traffic / right / the / at / light / then / two / blocks / walk]",
        correctAnswer: "Turn right at the traffic light, then walk two blocks.",
        acceptableAnswers: [
          "Walk two blocks, then turn right at the traffic light."
        ],
        correctAnswer: "Turn right at the traffic light, then walk two blocks.",
        explanationEn: "Imperative verb + Prepositional landmark + Sequencer + Action.",
        explanationHi: "सही क्रम: Turn right at the traffic light, then walk two blocks.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day42_ex_007",
        type: "multiple_choice",
        prompt: "What is a transit station where passengers switch from one train line to another called?",
        options: ["Turnstile", "Interchange", "Zebra crossing", "Cul-de-sac"],
        correctAnswer: "Interchange",
        explanationEn: "An interchange is a junction station connecting multiple rail lines.",
        explanationHi: "लाइन बदलने वाले स्टेशन को 'interchange' कहते हैं।",
        difficulty: "easy",
        skillTag: "VOCAB_CLASSIFICATION"
      },
      {
        id: "day42_ex_008",
        type: "error_correction",
        prompt: "Correct the sentence: 'Meet me in back side of the bus station.'",
        correctAnswer: "Meet me behind the bus station.",
        acceptableAnswers: [
          "Meet me at the rear of the bus station."
        ],
        explanationEn: "Say 'behind the station' or 'at the rear of the station', never '*in back side*'.",
        explanationHi: "पीछे की ओर के लिए 'behind' या 'at the rear of' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day42_ex_009",
        type: "fill_blank",
        prompt: "You must tap your smart card on the electronic reader to unlock the _______ gates.",
        correctAnswer: "turnstile",
        acceptableAnswers: ["fare", "ticket"],
        explanationEn: "'Turnstile' or 'fare' gates are standard for subway entry.",
        explanationHi: "मेट्रो प्रवेश गेट को 'turnstile' कहते हैं।",
        difficulty: "medium",
        skillTag: "TRANSIT_TERMS"
      },
      {
        id: "day42_ex_010",
        type: "dialogue_completion",
        prompt: "Complete the exchange naturally:\nCommuter: 'Excuse me, does this bus go to the airport?'\nConductor: 'No, this is a local route. You need to _______ to bus 402 at the main terminal.'",
        options: ["transfer", "disembark", "overtake", "divert"],
        correctAnswer: "transfer",
        explanationEn: "'Transfer' means to change from one public transit vehicle to another.",
        explanationHi: "गाड़ी बदलने के लिए 'transfer' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "SITUATIONAL_DISCOURSE"
      },
      {
        id: "day42_ex_011",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'यहाँ से कनॉट प्लेस तक कितने मेट्रो स्टेशन हैं?'",
        correctAnswer: "How many metro stops is it from here to Connaught Place?",
        acceptableAnswers: [
          "How many stops are there from here to Connaught Place?",
          "How many stations is it from here to Connaught Place?"
        ],
        explanationEn: "'How many metro stops is it from here to Connaught Place?'",
        explanationHi: "'How many metro stops is it from here to...?' सटीक है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day42_ex_012",
        type: "multiple_choice",
        prompt: "What does 'pedestrian' mean?",
        options: ["A person driving a heavy truck", "A person walking on foot along a road or street", "A traffic police officer", "A subway train driver"],
        correctAnswer: "A person walking on foot along a road or street",
        explanationEn: "A pedestrian is a person traveling on foot.",
        explanationHi: "पैदल चलने वाले व्यक्ति को 'pedestrian' कहते हैं।",
        difficulty: "easy",
        skillTag: "VOCAB_CLASSIFICATION"
      },
      {
        id: "day42_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'Please stand clear of the closing doors.'",
        correctAnswer: "Please stand clear of the closing doors.",
        explanationEn: "Standard subway announcement worldwide.",
        explanationHi: "मानक मेट्रो उद्घोषणा।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day42_ex_014",
        type: "sentence_transformation",
        prompt: "Rewrite politely: 'Tell me the way to the post office.'",
        correctAnswer: "Could you please tell me the way to the post office?",
        acceptableAnswers: [
          "Excuse me, could you tell me how to get to the post office?"
        ],
        explanationEn: "Use polite modal inquiry: 'Could you please tell me...?'",
        explanationHi: "विनम्र पूछताछ के लिए 'Could you please...' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "POLITE_PRAGMATICS"
      },
      {
        id: "day42_ex_015",
        type: "matching",
        prompt: "Match the transit sign to its meaning:\n1. Yield\n2. Detour\n3. Cul-de-sac\n4. Pedestrian Crossing",
        options: [
          "1-Give way to other traffic, 2-Temporary alternate route, 3-Dead-end street with turnaround, 4-Designated road crossing for walkers",
          "1-Temporary route, 2-Give way, 3-Designated crossing, 4-Dead-end",
          "1-Dead-end, 2-Give way, 3-Temporary route, 4-Crossing",
          "1-Designated crossing, 2-Dead-end, 3-Give way, 4-Temporary route"
        ],
        correctAnswer: "1-Give way to other traffic, 2-Temporary alternate route, 3-Dead-end street with turnaround, 4-Designated road crossing for walkers",
        explanationEn: "Accurate matching of road transit signage.",
        explanationHi: "सड़क संकेतों का सही मिलान।",
        difficulty: "medium",
        skillTag: "VOCAB_MATCHING"
      },
      {
        id: "day42_ex_016",
        type: "error_correction",
        prompt: "Correct the sentence: 'The train is arriving on platform number four.'",
        correctAnswer: "The train is arriving at platform number four.",
        explanationEn: "Trains arrive 'at' a platform ('at platform 4'), not 'on'.",
        explanationHi: "प्लेटफॉर्म पर ट्रेन आने के लिए 'at platform' का प्रयोग होता है।",
        difficulty: "medium",
        skillTag: "PREPOSITIONS"
      },
      {
        id: "day42_ex_017",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Traffic was diverted due to ongoing metro construction.'",
        correctAnswer: "चल रहे मेट्रो निर्माण के कारण यातायात को दूसरे रास्ते पर मोड़ दिया गया था।",
        acceptableAnswers: [
          "मेट्रो निर्माण के कारण ट्रैफिक डायवर्ट कर दिया गया था।"
        ],
        explanationEn: "'Diverted' translates as दूसरे रास्ते पर मोड़ दिया गया.",
        explanationHi: "'Diverted' का अर्थ मार्ग बदलना है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day42_ex_018",
        type: "active_recall",
        prompt: "What is the daily journey of traveling from home to workplace and back called?",
        correctAnswer: "Commute",
        acceptableAnswers: ["commute", "daily commute"],
        explanationEn: "'Commute' is the regular journey between home and work.",
        explanationHi: "रोज़ाना घर से दफ्तर आने-जाने को 'commute' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day42_ex_019",
        type: "multiple_choice",
        prompt: "Which preposition correctly fills: 'Continue walking _______ the post office until you see the bridge.'?",
        options: ["past", "overtake", "between", "underneath"],
        correctAnswer: "past",
        explanationEn: "'Walk past [landmark]' means to walk beyond or continue further after it.",
        explanationHi: "'Past' का अर्थ किसी स्थल के आगे से होकर निकलना है।",
        difficulty: "easy",
        skillTag: "PREPOSITIONS"
      },
      {
        id: "day42_ex_020",
        type: "speaking_pronunciation",
        prompt: "Read aloud with accurate linking: 'Go straight ahead and turn left at the roundabout.'",
        correctAnswer: "Go straight ahead and turn left at the roundabout.",
        explanationEn: "Focus on /streɪt əˈhed/ and smooth rhythm.",
        explanationHi: "लगातार प्रवाह और सही उच्चारण पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day42_ex_021",
        type: "question_formation",
        prompt: "Form a polite question asking a stranger how often the airport express bus runs:",
        correctAnswer: "How often does the airport express bus run?",
        acceptableAnswers: [
          "How frequently does the airport bus operate?",
          "Could you tell me how often the airport express runs?"
        ],
        explanationEn: "'How often does the airport express bus run?' is standard.",
        explanationHi: "बस की आवृत्ति पूछने का सही वाक्य।",
        difficulty: "medium",
        skillTag: "QUESTION_FORMATION"
      },
      {
        id: "day42_ex_022",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'आपको राजीव चौक पर ट्रेन बदलनी होगी।'",
        correctAnswer: "You will have to change trains at Rajiv Chowk.",
        acceptableAnswers: [
          "You need to transfer trains at Rajiv Chowk.",
          "You must change trains at Rajiv Chowk."
        ],
        explanationEn: "'Change trains at Rajiv Chowk' or 'transfer trains at...'",
        explanationHi: "'Change trains at' या 'transfer at' सही है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day42_ex_023",
        type: "sentence_building",
        prompt: "Build a sentence explaining a route detour using [construction / detour / road / caused / a / major / heavy].",
        correctAnswer: "Heavy road construction caused a major detour.",
        acceptableAnswers: [
          "Heavy construction caused a major road detour."
        ],
        explanationEn: "'Heavy road construction caused a major detour.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day42_ex_024",
        type: "multiple_choice",
        prompt: "What is the American English equivalent for the British English 'pavement' (pedestrian walkway)?",
        options: ["Sidewalk", "Subway", "Flyover", "Carriageway"],
        correctAnswer: "Sidewalk",
        explanationEn: "In US English, the pedestrian path along a street is called a 'sidewalk'.",
        explanationHi: "अमेरिकी अंग्रेज़ी में फुटपाथ को 'sidewalk' कहते हैं।",
        difficulty: "easy",
        skillTag: "REGIONAL_VARIATION"
      },
      {
        id: "day42_ex_025",
        type: "error_correction",
        prompt: "Correct the sentence: 'How much fare is there for going to railway station?'",
        correctAnswer: "How much is the fare to the railway station?",
        explanationEn: "Natural syntax: 'How much is the fare to [Destination]?'",
        explanationHi: "किराया पूछने का सही वाक्य: 'How much is the fare to...?'",
        difficulty: "medium",
        skillTag: "SYNTAX_REMEDIATION"
      },
      {
        id: "day42_ex_026",
        type: "fill_blank",
        prompt: "The train was delayed by twenty minutes because of a technical _______ on the tracks.",
        correctAnswer: "glitch",
        acceptableAnswers: ["fault", "snag", "issue"],
        explanationEn: "'Technical snag', 'fault', or 'glitch' denotes an unexpected mechanical/electronic problem.",
        explanationHi: "तकनीकी खराबी के लिए 'glitch', 'fault' या 'snag' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "TRANSIT_TERMS"
      },
      {
        id: "day42_ex_027",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Follow the overhead signage towards Platform 3.'",
        correctAnswer: "प्लेटफॉर्म 3 की ओर जाने वाले ऊपरी संकेतों का पालन करें।",
        acceptableAnswers: [
          "प्लेटफॉर्म 3 के लिए ऊपर लगे साइनबोर्ड का पालन करें।"
        ],
        explanationEn: "'Overhead signage' translates as ऊपरी संकेत / साइनबोर्ड.",
        explanationHi: "'Overhead signage' का अर्थ ऊपर लगे दिशा सूचक बोर्ड हैं।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day42_ex_028",
        type: "sentence_ordering",
        prompt: "Arrange in proper order: [card / your / on / the / tap / turnstile / smart / reader]",
        correctAnswer: "Tap your smart card on the turnstile reader.",
        explanationEn: "Imperative verb + Object + Prepositional modifier.",
        explanationHi: "सही क्रम: Tap your smart card on the turnstile reader.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day42_ex_029",
        type: "multiple_choice",
        prompt: "Which expression indicates bumper-to-bumper standstill vehicular traffic?",
        options: ["Traffic gridlock", "Smooth transit", "Pedestrian crossing", "Open expressway"],
        correctAnswer: "Traffic gridlock",
        explanationEn: "'Traffic gridlock' refers to total standstill traffic congestion.",
        explanationHi: "पूर्ण ट्रैफिक जाम को 'gridlock' कहते हैं।",
        difficulty: "medium",
        skillTag: "VOCAB_COLLOCATION"
      },
      {
        id: "day42_ex_030",
        type: "active_recall",
        prompt: "What is the phrase used to ask a driver to pull over and let you exit?",
        correctAnswer: "Please let me off here",
        acceptableAnswers: ["Could you let me off here?", "Please pull over here", "Let me off right here"],
        explanationEn: "'Please let me off here' or 'Could you pull over here?'",
        explanationHi: "गाड़ी से उतरने के लिए मानक अभिव्यक्ति।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day42_ex_031",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'अगले चौराहे से बाईं तरफ मुड़ें और फिर सीधे चलें।'",
        correctAnswer: "Turn left at the next intersection and then go straight.",
        acceptableAnswers: [
          "Turn left at the next junction and then continue straight ahead."
        ],
        explanationEn: "'Turn left at the next intersection and then go straight.'",
        explanationHi: "सटीक दिशा-निर्देश।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day42_ex_032",
        type: "error_correction",
        prompt: "Correct the sentence: 'Take the first lefting after the fuel pump.'",
        correctAnswer: "Take the first left after the petrol station.",
        acceptableAnswers: [
          "Take the first left after the gas station."
        ],
        explanationEn: "Say 'the first left' (noun/direction), not '*lefting*'.",
        explanationHi: "मोड़ के लिए 'the first left' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day42_ex_033",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nTourist: 'Is the historical monument within walking distance?'\nLocal: 'Yes, it is only a _______ ten-minute walk from here.'",
        options: ["brisk", "heavy", "delayed", "cramped"],
        correctAnswer: "brisk",
        explanationEn: "'A brisk ten-minute walk' is a standard natural collocation.",
        explanationHi: "'A brisk walk' (तेज कदमों की सैर) सही कोलोकेशन है।",
        difficulty: "medium",
        skillTag: "COLLOCATIONS"
      },
      {
        id: "day42_ex_034",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The express train bypasses all suburban stops.'",
        correctAnswer: "The express train bypasses all suburban stops.",
        explanationEn: "Focus on spelling 'express' and 'suburban'.",
        explanationHi: "वर्तनी पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day42_ex_035",
        type: "multiple_choice",
        prompt: "What does 'crosswalk' or 'zebra crossing' signify on a road?",
        options: [
          "A designated area marked for pedestrians to cross safely",
          "A lane reserved only for fast racing cars",
          "A spot where animals are exhibited",
          "A parking space for buses"
        ],
        correctAnswer: "A designated area marked for pedestrians to cross safely",
        explanationEn: "A crosswalk is a marked pedestrian crossing zone.",
        explanationHi: "पैदल यात्रियों के सुरक्षित सड़क पार करने का स्थान।",
        difficulty: "easy",
        skillTag: "TRANSIT_TERMS"
      },
      {
        id: "day42_ex_036",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'क्या इस बस में चढ़ने के लिए खुले पैसे होना जरूरी है?'",
        correctAnswer: "Do I need exact change to board this bus?",
        acceptableAnswers: [
          "Is exact change required to board this bus?",
          "Do I need exact change for this bus?"
        ],
        explanationEn: "'Do I need exact change...?' is the natural idiom for 'खुले पैसे'.",
        explanationHi: "खुले पैसों के लिए 'exact change' का प्रयोग करें।",
        difficulty: "hard",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day42_ex_037",
        type: "error_correction",
        prompt: "Correct the sentence: 'Where I should change the bus?'",
        correctAnswer: "Where should I change buses?",
        explanationEn: "Questions require subject-auxiliary inversion: 'Where should I...?' and plural 'buses'.",
        explanationHi: "प्रश्न में सहायक क्रिया 'should' कर्ता 'I' से पहले आती है।",
        difficulty: "medium",
        skillTag: "INVERSION_SYNTAX"
      },
      {
        id: "day42_ex_038",
        type: "sentence_building",
        prompt: "Build a sentence about shuttle frequency using [shuttle / hotel / operates / every / minutes / fifteen / the].",
        correctAnswer: "The hotel shuttle operates every fifteen minutes.",
        explanationEn: "'The hotel shuttle operates every fifteen minutes.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day42_ex_039",
        type: "fill_blank",
        prompt: "During peak rush hour, the subway train runs _______ three minutes.",
        correctAnswer: "every",
        explanationEn: "Frequency intervals take 'every [Number] minutes'.",
        explanationHi: "निश्चित समयांतराल के लिए 'every' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "FREQUENCY_PREPOSITIONS"
      },
      {
        id: "day42_ex_040",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Mind the gap between the train and the platform edge.'",
        correctAnswer: "ट्रेन और प्लेटफॉर्म के किनारे के बीच की जगह का ध्यान रखें।",
        acceptableAnswers: [
          "ट्रेन और प्लेटफॉर्म के बीच के फासले का ध्यान रखें।"
        ],
        explanationEn: "'Mind the gap' translates as खाली जगह का ध्यान रखें.",
        explanationHi: "'Mind the gap' का अर्थ बीच की दूरी पर सावधानी बरतना है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day42_ex_041",
        type: "multiple_choice",
        prompt: "Which word means 'a road that has only one outlet; a dead-end'?",
        options: ["Cul-de-sac", "Expressway", "Interstate", "Boulevard"],
        correctAnswer: "Cul-de-sac",
        explanationEn: "A cul-de-sac is a blind alley or dead-end street.",
        explanationHi: "बंद गली को 'cul-de-sac' या 'dead end' कहते हैं।",
        difficulty: "hard",
        skillTag: "VOCAB_DESCRIPTORS"
      },
      {
        id: "day42_ex_042",
        type: "active_recall",
        prompt: "What is the term for a wide, tree-lined major city street or avenue?",
        correctAnswer: "Boulevard",
        acceptableAnswers: ["boulevard", "avenue"],
        explanationEn: "'Boulevard' or 'avenue' is a wide, landscaped street.",
        explanationHi: "चौड़े मुख्य मार्ग को 'boulevard' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day42_ex_043",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [overtake / curve / do / blind / not / on / a]",
        correctAnswer: "Do not overtake on a blind curve.",
        explanationEn: "Negative imperative + Prepositional location.",
        explanationHi: "सही क्रम: Do not overtake on a blind curve.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day42_ex_044",
        type: "error_correction",
        prompt: "Correct the sentence: 'We got down from the train at New Delhi.'",
        correctAnswer: "We got off the train at New Delhi.",
        explanationEn: "To exit a bus, train, or plane, use 'get off', not '*get down from*'.",
        explanationHi: "ट्रेन या बस से उतरने के लिए 'got off' का प्रयोग करें, '*got down*' का नहीं।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day42_ex_045",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'कृपया बंद होते दरवाजों से दूरी बनाए रखें।'",
        correctAnswer: "Please stand clear of the closing doors.",
        acceptableAnswers: [
          "Please stay away from the closing doors.",
          "Please keep clear of the closing doors."
        ],
        explanationEn: "'Please stand clear of the closing doors.' is the global standard.",
        explanationHi: "'Stand clear of the closing doors' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day42_ex_046",
        type: "multiple_choice",
        prompt: "Choose the correct term for the place where you pay money to use a highway:",
        options: ["Toll booth / Toll plaza", "Ticket turnstile", "Zebra crossing", "Concourse"],
        correctAnswer: "Toll booth / Toll plaza",
        explanationEn: "A toll plaza is where highway tolls are collected.",
        explanationHi: "हाईवे टैक्स बूथ को 'toll booth / toll plaza' कहते हैं।",
        difficulty: "easy",
        skillTag: "TRANSIT_TERMS"
      },
      {
        id: "day42_ex_047",
        type: "speaking_pronunciation",
        prompt: "Articulate the contrast in 'through' /θruː/ and 'true' /truː/: 'It is true that the train goes through the tunnel.'",
        correctAnswer: "It is true that the train goes through the tunnel.",
        explanationEn: "Clearly distinguish /t/ in 'true' and /θ/ in 'through'.",
        explanationHi: "'True' में /t/ और 'through' में /θ/ का अंतर स्पष्ट रखें।",
        difficulty: "hard",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day42_ex_048",
        type: "fill_blank",
        prompt: "Pedestrians should always cross the multi-lane road using the designated _______ crossing.",
        correctAnswer: "zebra",
        acceptableAnswers: ["pedestrian"],
        explanationEn: "'Zebra crossing' or 'pedestrian crossing'.",
        explanationHi: "सड़क पार करने के स्थान को 'zebra crossing' कहते हैं।",
        difficulty: "easy",
        skillTag: "TRANSIT_TERMS"
      },
      {
        id: "day42_ex_049",
        type: "sentence_transformation",
        prompt: "Rewrite using 'interchange': 'Rajiv Chowk is a station where two metro lines connect.'",
        correctAnswer: "Rajiv Chowk is a major metro interchange station.",
        explanationEn: "'Interchange' captures the connecting junction meaning concisely.",
        explanationHi: "'Interchange station' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day42_ex_050",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nDriver: 'Where should I drop your luggage?'\nPassenger: 'Please _______ in front of the departure gate.'",
        options: ["pull over", "overtake", "divert", "commute"],
        correctAnswer: "pull over",
        explanationEn: "'Pull over' means to steer a car to the side of the road and stop.",
        explanationHi: "गाड़ी किनारे रोकने के लिए 'pull over' सही क्रिया है।",
        difficulty: "medium",
        skillTag: "COLLOCATIONS"
      },
      {
        id: "day42_ex_051",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The city provides a rapid transit network for daily commuters.'",
        correctAnswer: "शहर दैनिक यात्रियों के लिए एक त्वरित पारगमन (रैपिड ट्रांजिट) नेटवर्क प्रदान करता है।",
        acceptableAnswers: [
          "शहर रोज़ाना आने-जाने वालों के लिए तेज़ परिवहन प्रणाली उपलब्ध कराता है।"
        ],
        explanationEn: "'Rapid transit network' translates as त्वरित परिवहन नेटवर्क.",
        explanationHi: "'Daily commuters' का अर्थ रोज़ाना यात्रा करने वाले लोग हैं।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day42_ex_052",
        type: "multiple_choice",
        prompt: "What does 'bottleneck' mean in traffic discourse?",
        options: [
          "A point of congestion from narrowing of the road",
          "A water bottle holder in a car",
          "A glass recycling factory",
          "A newly constructed highway bridge"
        ],
        correctAnswer: "A point of congestion from narrowing of the road",
        explanationEn: "A bottleneck is a narrow section that causes traffic slowdowns.",
        explanationHi: "सड़क संकरी होने से पैदा होने वाले जाम बिंदु को 'bottleneck' कहते हैं।",
        difficulty: "medium",
        skillTag: "VOCAB_DESCRIPTORS"
      },
      {
        id: "day42_ex_053",
        type: "error_correction",
        prompt: "Correct the sentence: 'Are you taking by bus or by foot?'",
        correctAnswer: "Are you going by bus or on foot?",
        explanationEn: "Walking is 'on foot', not '*by foot*'. Travel mode is 'go by bus'.",
        explanationHi: "पैदल चलने के लिए हमेशा 'on foot' का प्रयोग होता है, '*by foot*' का नहीं।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day42_ex_054",
        type: "active_recall",
        prompt: "What is the phrase for passing a slower vehicle by moving ahead of it on the road?",
        correctAnswer: "Overtake",
        acceptableAnswers: ["overtake", "passing"],
        explanationEn: "'Overtake' means to catch up with and pass while traveling.",
        explanationHi: "आगे निकलने को 'overtake' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day42_ex_055",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'पुल पार करने के बाद पहला दायाँ मोड़ लें।'",
        correctAnswer: "Take the first right after crossing the bridge.",
        acceptableAnswers: [
          "Take the first right turn after crossing the bridge."
        ],
        explanationEn: "'Take the first right after crossing the bridge.'",
        explanationHi: "सटीक दिशा-निर्देश अनुवाद।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day42_dial_001",
        title: "Controlled Pedestrian Direction Inquiry on the Street",
        context: "A visitor asking a pedestrian for directions to the central train station.",
        characters: ["Visitor", "Local Pedestrian"],
        lines: [
          { speaker: "Visitor", text: "Excuse me, could you tell me the best way to get to the central train station?", hindi: "माफ कीजिए, क्या आप मुझे सेंट्रल रेलवे स्टेशन जाने का सबसे अच्छा रास्ता बता सकते हैं?" },
          { speaker: "Local Pedestrian", text: "Certainly! Walk straight ahead along this avenue for two blocks until you reach the clock tower.", hindi: "बिल्कुल! इस रास्ते पर दो ब्लॉक सीधे चलें जब तक कि आप घंटाघर तक न पहुँच जाएँ।" },
          { speaker: "Visitor", text: "Got it. Do I turn left or right at the clock tower?", hindi: "समझ गया। घंटाघर के पास से मुझे बाएँ मुड़ना है या दाएँ?" },
          { speaker: "Local Pedestrian", text: "Take a left onto Station Road. The station entrance will be directly on your right, across from the post office.", hindi: "स्टेशन रोड की ओर बाएँ मुड़ें। स्टेशन का मुख्य प्रवेश द्वार आपकी दायीं ओर, पोस्ट ऑफिस के ठीक सामने होगा।" },
          { speaker: "Visitor", text: "Is it within walking distance, or should I take a cab?", hindi: "क्या यह पैदल दूरी पर है, या मुझे कैब लेनी चाहिए?" },
          { speaker: "Local Pedestrian", text: "It's only a brisk five-minute walk. You don't need a cab at all.", hindi: "यह केवल पाँच मिनट की पैदल दूरी पर है। आपको कैब की बिल्कुल आवश्यकता नहीं है।" }
        ]
      },
      {
        id: "day42_dial_002",
        title: "Guided Subway Navigation & Line Transfer at an Interchange",
        context: "A commuter verifying transit transfer with an information desk officer.",
        characters: ["Commuter", "Station Officer"],
        lines: [
          { speaker: "Commuter", text: "Good morning. I need to get to the International Airport Terminal 3. Which line should I take?", hindi: "शुभ प्रभात। मुझे अंतर्राष्ट्रीय हवाईअड्डा टर्मिनल 3 जाना है। मुझे कौन सी लाइन लेनी चाहिए?" },
          { speaker: "Station Officer", text: "Good morning! Board the Yellow Line on Platform 2 and travel four stops to Central Interchange.", hindi: "शुभ प्रभात! प्लेटफॉर्म 2 पर येलो लाइन में सवार हों और सेंट्रल इंटरचेंज तक चार स्टॉप की यात्रा करें।" },
          { speaker: "Commuter", text: "Where do I go once I arrive at Central Interchange?", hindi: "सेंट्रल इंटरचेंज पहुँचने के बाद मुझे कहाँ जाना होगा?" },
          { speaker: "Station Officer", text: "Follow the orange floor markings towards the Airport Express corridor and tap your card at the connecting turnstiles.", hindi: "एयरपोर्ट एक्सप्रेस गलियारे की ओर जाने वाले नारंगी निशानों का पालन करें और कनेक्टिंग गेट्स पर अपना कार्ड टैप करें।" },
          { speaker: "Commuter", text: "How frequently does the Airport Express train depart?", hindi: "एयरपोर्ट एक्सप्रेस ट्रेन कितनी बार छूटती है?" },
          { speaker: "Station Officer", text: "It operates every ten minutes, and the journey takes only fifteen minutes.", hindi: "यह हर दस मिनट में चलती है, और यात्रा में केवल पंद्रह मिनट लगते हैं।" }
        ]
      },
      {
        id: "day42_dial_003",
        title: "Free Problem-Resolution: Managing a Road Closure & Transit Delay",
        context: "A taxi driver communicating a route diversion to an urgent business passenger.",
        characters: ["Driver", "Passenger"],
        lines: [
          { speaker: "Passenger", text: "We seem to be slowing down significantly. Is there an accident up ahead?", hindi: "हमारी गति काफी धीमी होती दिख रही है। क्या आगे कोई दुर्घटना हुई है?" },
          { speaker: "Driver", text: "The main expressway is blocked due to emergency water pipeline repairs. Traffic is being diverted through the outer ring road.", hindi: "आपातकालीन पाइपलाइन मरम्मत के कारण मुख्य एक्सप्रेसवे बंद है। यातायात को आउटर रिंग रोड से मोड़ा जा रहा है।" },
          { speaker: "Passenger", text: "I have an important client presentation in forty minutes. Is there a quicker detour?", hindi: "चालीस मिनट में मेरी एक महत्वपूर्ण प्रस्तुति है। क्या कोई तेज़ चक्करदार रास्ता है?" },
          { speaker: "Driver", text: "I can take the elevated flyover and bypass the surface bottleneck. It might add a small toll, but it will save twenty minutes.", hindi: "मैं एलिवेटेड फ्लाईओवर लेकर नीचे के जाम से बच सकता हूँ। इसमें थोड़ा टोल लग सकता है, लेकिन इससे बीस मिनट बचेंगे।" },
          { speaker: "Passenger", text: "Please do that! The toll is not a problem. Thank you for the quick thinking.", hindi: "कृपया वैसा ही करें! टोल की कोई बात नहीं। तुरंत समाधान निकालने के लिए धन्यवाद।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are guiding an international tourist on how to travel from your city's airport to the central hotel district using public transportation.",
      prompts: [
        "Explain which train or express bus to board at the airport terminal.",
        "Describe any transfer/interchange station they must navigate.",
        "Provide landmark-based walking directions from the final station to the hotel.",
        "Warn them about peak rush hour crowds and ticketing instructions."
      ],
      targetExpressions: [
        "Board the train at Platform...",
        "Transfer to the... line at...",
        "Walk straight past the...",
        "It is located directly across from..."
      ]
    },
    roleplay: {
      scenario: "A tourist asking a metro station helpdesk officer for the fastest route during peak rush hour.",
      roleA: "Tourist: Inquiring about fares, transfers, delays, and finding the correct exit gate.",
      roleB: "Station Officer: Providing clear, concise step-by-step navigation instructions.",
      sampleDialogue: "Tourist: 'Which exit should I take for Gate 4?' | Officer: 'Take Exit 2 on your left and head up the escalator.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day42_bm_001",
        title: "Pedestrian Navigation Benchmark",
        prompt: "Provide clear, step-by-step directions for someone traveling on foot from a metro station to a nearby library, including at least two landmarks and directional imperatives.",
        sampleAnswerEn: "When you exit the metro station through Gate 3, turn right and walk straight along MG Road for about two hundred meters. Continue past the central post office until you reach the traffic signal. Cross at the pedestrian zebra crossing, and you will see the municipal library situated directly across from the public park on your left.",
        sampleAnswerHi: "जब आप गेट 3 से मेट्रो स्टेशन से बाहर निकलें, तो दाईं ओर मुड़ें और एमजी रोड पर लगभग दो सौ मीटर सीधे चलें। मुख्य डाकघर को पार करते हुए आगे बढ़ें जब तक कि आप ट्रैफिक सिग्नल तक न पहुँच जाएँ। ज़ेबरा क्रॉसिंग से सड़क पार करें, और आपको अपने बाईं ओर सार्वजनिक पार्क के ठीक सामने नगरपालिका पुस्तकालय दिखाई देगा।",
        evaluationCriteria: "Smooth sequential transitions, accurate spatial prepositions ('along', 'past', 'across from'), and zero L1 interference."
      },
      {
        id: "day42_bm_002",
        title: "Public Transit Commuting Benchmark",
        prompt: "Explain how to navigate a multi-line subway network to reach the international airport, detailing lines, interchange stations, and ticketing procedures.",
        sampleAnswerEn: "To reach the airport, board the Blue Line train heading westbound from Platform 1. Travel six stops and alight at City Center Interchange. From there, follow the overhead signage down to Level 2 to transfer to the dedicated Airport Express. Tap your smart card at the automated turnstiles; the express shuttle runs every eight minutes and reaches the terminal in under twenty minutes.",
        sampleAnswerHi: "हवाई अड्डे तक पहुँचने के लिए, प्लेटफॉर्म 1 से पश्चिम की ओर जाने वाली ब्लू लाइन ट्रेन में सवार हों। छह स्टॉप की यात्रा करें और सिटी सेंटर इंटरचेंज पर उतरें। वहां से, समर्पित एयरपोर्ट एक्सप्रेस में स्थानांतरित होने के लिए लेवल 2 पर जाने वाले ऊपरी संकेतों का पालन करें। स्वचालित टर्नस्टाइल पर अपना स्मार्ट कार्ड टैप करें; एक्सप्रेस शटल हर आठ मिनट में चलती है और बीस मिनट से कम समय में टर्मिनल तक पहुँचती है।",
        evaluationCriteria: "Mastery of transit vocabulary ('alight', 'interchange', 'turnstiles', 'overhead signage', 'shuttle'), clear chronological sequence, and natural phrasing."
      },
      {
        id: "day42_bm_003",
        title: "Commuter Problem Resolution Benchmark",
        prompt: "Politely negotiate with a taxi driver or bus conductor regarding an unexpected traffic delay, requesting an alternate route or safe drop-off location.",
        sampleAnswerEn: "Excuse me driver, since the main highway appears to be completely gridlocked due to construction, could you please take the bypass road instead? If that is also congested, you can let me off near the upcoming metro station so I can take the train and avoid missing my appointment.",
        sampleAnswerHi: "माफ कीजिए ड्राइवर, क्योंकि निर्माण कार्य के कारण मुख्य राजमार्ग पूरी तरह से जाम लग रहा है, क्या आप इसके बजाय बाईपास सड़क ले सकते हैं? यदि वह भी संकुलित है, तो आप मुझे आगामी मेट्रो स्टेशन के पास उतार सकते हैं ताकि मैं ट्रेन ले सकूँ और अपनी मुलाकात छूटने से बच सकूँ।",
        evaluationCriteria: "Natural pragmatic phrasing ('let me off', 'completely gridlocked'), polite conditional structure, and communicative efficiency."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "What should you say instead of '*Give side*' when moving past people?", a: "Say 'Excuse me, could I get past please?' or 'Pardon me, may I get through?'" },
      { q: "What is the natural English phrase for 'यहाँ गाड़ी रोककर मुझे उतार दो'?", a: "Say 'Could you please pull over here?' or 'You can let me off right here.'" },
      { q: "What does 'traffic gridlock' mean?", a: "A situation where traffic is at a total standstill." },
      { q: "What is the difference between 'opposite' and 'adjacent to'?", a: "'Opposite / across from' means facing across a space/street, while 'adjacent to / next to' means right beside." },
      { q: "Why is '*by foot*' incorrect in standard English?", a: "Because the fixed standard idiom for walking is 'on foot'." }
    ],
    spacedTips: [
      "Practice narrating your daily commute in English using sequencers: 'First I walk to the corner, then I cross at the zebra crossing...'",
      "Observe public announcements on transit systems; practice shadowing the rhythm and reduction in 'Please stand clear of the closing doors.'",
      "Reinforce prepositions: 'at the intersection', 'on the corner', 'across from the building', 'past the station'."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day42.js'), `export const day42 = ${JSON.stringify(day42, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Upgraded Day 42 (55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks)");
