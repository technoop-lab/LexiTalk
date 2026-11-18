export const day42 = {
  "dayNumber": 42,
  "id": "day_42",
  "titleEn": "Street Directions, City Transit & Commuting",
  "titleHi": "सड़क मार्ग, शहर का सार्वजनिक परिवहन एवं दैनिक आवागमन",
  "cefr": "B1.1",
  "estMinutes": 50,
  "prerequisites": "Day 41 Mastery (Spatial Syntax & Living Descriptors)",
  "objectivesEn": [
    "Navigate complex urban environments, requesting and giving precise pedestrian and driving directions.",
    "Master transit terminology for subways, commuter trains, bus rapid transit (BRT), interchanges, platforms, and turnstiles.",
    "Collocate spatial prepositions, landmarks, cardinal directions, and distance metrics fluently.",
    "Handle commuter disruptions, delays, route diversions, transfers, and fare inquiries.",
    "Remediate Indian English transit habits such as '*give side*', '*drop me here*', and '*what is your good route*'."
  ],
  "objectivesHi": [
    "शहरी वातावरण में सटीक रास्ते पूछना, पैदल और ड्राइविंग दिशा-निर्देश देना और समझना।",
    "मेट्रो, लोकल ट्रेन, बस रैपिड ट्रांजिट, इंटरचेंज, प्लेटफॉर्म और टिकट प्रणाली की शब्दावली में निपुण होना।",
    "दिशात्मक पूर्वसर्गों (Prepositions), मुख्य स्थलों (Landmarks) और दूरी का सही उपयोग करना।",
    "यातायात व्यवधान, देरी, रूट परिवर्तन, ट्रेन बदलने और किराए से संबंधित बातचीत करना।",
    "हिंदी अनुवाद से उपजी आवागमन की अशुद्धियों ('give side', 'drop me here') को दूर करना।"
  ],
  "teach": {
    "hindiExplanation": "डे 42 में हम दिशाओं, रास्तों और सार्वजनिक परिवहन (Public Transit & Commuting) की भाषा सीखेंगे।\n\n1. **दिशा-निर्देश देने के मुख्य सूत्र**:\n   - 'Go straight ahead along this road.' (इस सड़क पर सीधे चलते रहें।)\n   - 'Take the second left / right after the traffic signal.' (ट्रैफिक सिग्नल के बाद दूसरा बायाँ / दायाँ मोड़ लें।)\n   - 'It will be on your left, just opposite / across from the library.' (यह आपके बायीं ओर, ठीक लाइब्रेरी के सामने होगा।)\n   - 'Continue past the petrol station until you reach the roundabout.' (पेट्रोल पंप को पार करते हुए गोलचक्कर तक बढ़ते रहें।)\n\n2. **मेट्रो और सार्वजनिक पारगमन (Subway & Transit Terms)**:\n   - **Interchange / Transfer Station**: जहाँ से दूसरी लाइन (जैसे यलो लाइन से ब्लू लाइन) की ट्रेन बदलनी होती है।\n   - **Turnstile / Fare Gates**: टिकट या स्मार्ट कार्ड स्कैन करके अंदर जाने वाले स्वचालित गेट।\n   - **Platform**: जिस चबूतरे पर ट्रेन आती है ('Platform 3 for trains heading northbound')।\n   - **Commute / Commuter**: रोज़ाना घर से काम पर आने-जाने की यात्रा / दैनिक यात्री।\n\n3. **L1 हिंदी भाषियों की आम गलतियां**:\n   - भीड़ में रास्ता मांगते समय कभी '*Give side*' न कहें ❌। सही मानक अंग्रेज़ी: \"**Excuse me, may I get past?**\" या \"**Pardon me, could I squeeze through?**\" ✔️\n   - कैब या ऑटो वाले से उतरने के लिए '*Drop me here*' की जगह \"**Could you please pull over here?**\" या \"**You can let me off here, please.**\" बोलें।",
    "englishExplanation": "In Day 42, we develop pragmatic competence for urban navigation, commuting discourse, transit navigation, and direction-giving protocols.\n\nKey Areas of Focus:\n1. **Directional Collocations & Sequencing**: Guiding someone sequentially using imperative transitions ('first head north', 'then turn right at the junction', 'continue past the roundabout').\n2. **Transit Topology**: Navigating multi-modal transit hubs, interchanges, ticketing gates, platform allocations, and rail networks.\n3. **Disruption & Query Handling**: Asking for alternative routes during delays, understanding service announcements, and verifying route frequency.",
    "grammarRules": [
      {
        "ruleNumber": 1,
        "title": "Imperatives for Step-by-Step Directions",
        "description": "Directions are primarily delivered using zero-subject imperative verbs: 'Walk two blocks', 'Turn right', 'Cross the pedestrian bridge', 'Follow the overhead signs'.",
        "register": "Directional Syntax"
      },
      {
        "ruleNumber": 2,
        "title": "Prepositions of Orientation and Proximity",
        "description": "Distinguish between 'opposite / across from' (facing across a street/space), 'adjacent to / next to' (beside), 'at the intersection of' (crossing point), and 'past' (beyond).",
        "register": "Spatial Prepositions"
      },
      {
        "ruleNumber": 3,
        "title": "Transit Transfer Prepositions ('Transfer to / Change at')",
        "description": "Use 'change at [Station]' for the location, and 'transfer to [Line / Mode]' for the destination: 'Change at Central Station and transfer to the Blue Line heading downtown.'",
        "register": "Transit Syntax"
      },
      {
        "ruleNumber": 4,
        "title": "Duration & Frequency Expressions",
        "description": "Express schedules using 'runs every [Number] minutes': 'The express train runs every ten minutes during peak rush hour.'",
        "register": "Temporal Discourse"
      }
    ],
    "formulaTable": [
      {
        "subjectGroup": "Requesting Directions",
        "formula": "Excuse me, could you tell me the best way to get to + [Destination]?",
        "exampleEn": "Excuse me, could you tell me the best way to get to the National Museum?",
        "meaningHi": "माफ कीजिए, क्या आप मुझे राष्ट्रीय संग्रहालय पहुँचने का सबसे अच्छा रास्ता बता सकते हैं?"
      },
      {
        "subjectGroup": "Directional Milestone",
        "formula": "Walk / Drive past + [Landmark] + until you see + [Next Landmark] + on your [Left/Right].",
        "exampleEn": "Walk past the supermarket until you see the metro station on your right.",
        "meaningHi": "सुपरमार्केट के आगे तक चलें जब तक कि आपको अपनी दायीं ओर मेट्रो स्टेशन न दिख जाए।"
      },
      {
        "subjectGroup": "Transit Transfer",
        "formula": "Take + [Line A] + and transfer to + [Line B] + at + [Interchange Station].",
        "exampleEn": "Take the Red Line and transfer to the Airport Express at City Center.",
        "meaningHi": "रेड लाइन पकड़ें और सिटी सेंटर पर एयरपोर्ट एक्सप्रेस में ट्रांसफर करें।"
      },
      {
        "subjectGroup": "Getting Off Transport",
        "formula": "Could you please pull over / let me off + at + [Specific Landmark / Corner]?",
        "exampleEn": "Could you please let me off at the next intersection?",
        "meaningHi": "क्या आप मुझे अगले चौराहे पर उतार सकते हैं?"
      }
    ],
    "hindiSpeakerTrap": {
      "trapTitle": "The 'Give Side' and 'Drop Me Here' Literalisms",
      "hindiPattern": "1. '*Give side! Give side!*' (when trying to move past someone in a crowded bus/metro)\n2. '*Driver, drop me here.*'\n3. '*What is your good route to airport?*'\n4. '*Come in back side of station.*'",
      "potentialInterference": "Literal translations of 'साइड दो', 'यहाँ छोड़ दो', and 'पीछे की तरफ'.",
      "explanation": "Native speakers use polite requests: 'Excuse me, may I get through?' or 'Pardon me, coming through'. For exiting vehicles, use 'Could you let me off here?' or 'Please pull over near the corner'. Behind a building is 'at the rear / behind the station', never 'in back side'.",
      "naturalSolution": "1. 'Excuse me, could I get past please?' | 2. 'You can let me off right here, please.' | 3. 'What is the quickest route to the airport?' | 4. 'Meet me at the rear exit of the station.'"
    }
  },
  "learn": {
    "vocabulary": [
      {
        "id": "d42_v01",
        "lemma": "roundabout",
        "wordForm": "roundabout",
        "pos": "noun",
        "ipa": "/ˈraʊnd.ə.baʊt/",
        "devanagari": "राउंडअबाउट",
        "syllables": "roundabout (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "गोलचक्कर / ट्रैफिक सर्कल",
        "register": "Transit",
        "collocations": [
          "standard roundabout",
          "applied roundabout"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Take the second exit at the roundabout.",
        "exampleSentenceHi": "गोलचक्कर पर दूसरा निकास लें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'roundabout'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v02",
        "lemma": "intersection",
        "wordForm": "intersection",
        "pos": "noun",
        "ipa": "/ˌɪn.təˈsek.ʃən/",
        "devanagari": "इन्टरसेक्शन",
        "syllables": "intersection (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "चौराहा / मार्ग संगम",
        "register": "Transit",
        "collocations": [
          "standard intersection",
          "applied intersection"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Turn right at the busy traffic intersection.",
        "exampleSentenceHi": "व्यस्त चौराहे पर दाएं मुड़ें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'intersection'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v03",
        "lemma": "transit hub",
        "wordForm": "transit hub",
        "pos": "noun",
        "ipa": "/ˈtræn.zɪt hʌb/",
        "devanagari": "ट्रैन्ज़िट हब",
        "syllables": "transit hub (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "परिवहन केंद्र",
        "register": "Transit",
        "collocations": [
          "standard transit hub",
          "applied transit hub"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The central station is a major transit hub.",
        "exampleSentenceHi": "सेंट्रल स्टेशन एक प्रमुख परिवहन केंद्र है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'transit hub'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v04",
        "lemma": "commuter",
        "wordForm": "commuter",
        "pos": "noun",
        "ipa": "/kəˈmjuː.tər/",
        "devanagari": "कम्यूटर",
        "syllables": "commuter (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "दैनिक यात्री",
        "register": "Transit",
        "collocations": [
          "standard commuter",
          "applied commuter"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Thousands of commuters board early morning trains.",
        "exampleSentenceHi": "हजारों दैनिक यात्री सुबह की ट्रेनों में सवार होते हैं।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'commuter'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v05",
        "lemma": "pedestrian crossing",
        "wordForm": "pedestrian crossing",
        "pos": "noun",
        "ipa": "/pəˈdes.tri.ən ˈkrɒs.ɪŋ/",
        "devanagari": "पेडेस्ट्रियन क्रॉसिंग",
        "syllables": "pedestrian crossing (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "पैदल पार पथ",
        "register": "Transit",
        "collocations": [
          "standard pedestrian crossing",
          "applied pedestrian crossing"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Vehicles must yield at the pedestrian crossing.",
        "exampleSentenceHi": "पैदल पार पथ पर वाहनों को रुकना चाहिए।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'pedestrian crossing'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v06",
        "lemma": "tramway",
        "wordForm": "tramway",
        "pos": "noun",
        "ipa": "/ˈtræm.weɪ/",
        "devanagari": "ट्रैमवे",
        "syllables": "tramway (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "ट्राम की पटरी / मार्ग",
        "register": "Transit",
        "collocations": [
          "standard tramway",
          "applied tramway"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The historic city operates an electric tramway.",
        "exampleSentenceHi": "शहर एक इलेक्ट्रिक ट्रामवे संचालित करता है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'tramway'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v07",
        "lemma": "bottleneck",
        "wordForm": "bottleneck",
        "pos": "noun",
        "ipa": "/ˈbɒt.əl.nek/",
        "devanagari": "बॉटलनेक",
        "syllables": "bottleneck (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "यातायात का संकरा रुकावट बिंदु",
        "register": "Transit",
        "collocations": [
          "standard bottleneck",
          "applied bottleneck"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The narrow bridge creates a severe traffic bottleneck.",
        "exampleSentenceHi": "संकरा पुल भारी ट्रैफिक रुकावट पैदा करता है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'bottleneck'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v08",
        "lemma": "detour",
        "wordForm": "detour",
        "pos": "noun",
        "ipa": "/ˈdiː.tʊər/",
        "devanagari": "डिटूर",
        "syllables": "detour (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "चक्करदार वैकल्पिक रास्ता",
        "register": "Transit",
        "collocations": [
          "standard detour",
          "applied detour"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Follow the detour signs around the roadwork.",
        "exampleSentenceHi": "सड़क निर्माण के चारों ओर वैकल्पिक रास्ते का पालन करें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'detour'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v09",
        "lemma": "fare card",
        "wordForm": "fare card",
        "pos": "noun",
        "ipa": "/ˈfeə kɑːd/",
        "devanagari": "फ़ेयर कार्ड",
        "syllables": "fare card (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "किराया कार्ड",
        "register": "Transit",
        "collocations": [
          "standard fare card",
          "applied fare card"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Tap your rechargeable fare card at the gate.",
        "exampleSentenceHi": "गेट पर अपना किराया कार्ड टैप करें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'fare card'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v10",
        "lemma": "interchange",
        "wordForm": "interchange",
        "pos": "noun",
        "ipa": "/ˈɪn.tə.tʃeɪndʒ/",
        "devanagari": "इन्टरचेन्ज",
        "syllables": "interchange (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "ट्रेन या बस बदलने का स्टेशन",
        "register": "Transit",
        "collocations": [
          "standard interchange",
          "applied interchange"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Transfer lines at the major metro interchange.",
        "exampleSentenceHi": "मेट्रो इंटरचेंज पर लाइन बदलें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'interchange'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v11",
        "lemma": "overpass",
        "wordForm": "overpass",
        "pos": "noun",
        "ipa": "/ˈəʊ.və.pɑːs/",
        "devanagari": "ओवरपास",
        "syllables": "overpass (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "फ्लाईओवर / ऊपरी पुल",
        "register": "Transit",
        "collocations": [
          "standard overpass",
          "applied overpass"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Traffic flows smoothly over the newly opened overpass.",
        "exampleSentenceHi": "नए ओवरपास पर यातायात सुचारू रूप से चलता है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'overpass'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v12",
        "lemma": "underpass",
        "wordForm": "underpass",
        "pos": "noun",
        "ipa": "/ˈʌn.də.pɑːs/",
        "devanagari": "अन्डरपास",
        "syllables": "underpass (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "भूमिगत मार्ग",
        "register": "Transit",
        "collocations": [
          "standard underpass",
          "applied underpass"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Avoid the waterlogged underpass during storms.",
        "exampleSentenceHi": "तूफान के दौरान जलभराव वाले अंडरपास से बचें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'underpass'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v13",
        "lemma": "cul-de-sac",
        "wordForm": "cul-de-sac",
        "pos": "noun",
        "ipa": "/ˌkʌl.dəˈsæk/",
        "devanagari": "कल-ड-सैक",
        "syllables": "cul-de-sac (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "बंद गली / अंधी गली",
        "register": "Transit",
        "collocations": [
          "standard cul-de-sac",
          "applied cul-de-sac"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Children play safely in the quiet cul-de-sac.",
        "exampleSentenceHi": "बच्चे शांत बंद गली में सुरक्षित खेलते हैं।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'cul-de-sac'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v14",
        "lemma": "boulevard",
        "wordForm": "boulevard",
        "pos": "noun",
        "ipa": "/ˈbuː.lə.vɑːd/",
        "devanagari": "बूलवार्ड",
        "syllables": "boulevard (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "चौड़ी मुख्य सड़क",
        "register": "Transit",
        "collocations": [
          "standard boulevard",
          "applied boulevard"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Tree-lined boulevards stretch across the city.",
        "exampleSentenceHi": "पेड़ों से घिरी चौड़ी सड़कें शहर में फैली हैं।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'boulevard'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v15",
        "lemma": "avenue",
        "wordForm": "avenue",
        "pos": "noun",
        "ipa": "/ˈæv.ə.njuː/",
        "devanagari": "ऐवेन्यू",
        "syllables": "avenue (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "विशाल मार्ग / एवेन्यू",
        "register": "Transit",
        "collocations": [
          "standard avenue",
          "applied avenue"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The flagship store is on Fifth Avenue.",
        "exampleSentenceHi": "प्रमुख स्टोर फिफ्थ एवेन्यू पर है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'avenue'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v16",
        "lemma": "congestion",
        "wordForm": "congestion",
        "pos": "noun",
        "ipa": "/kənˈdʒes.tʃən/",
        "devanagari": "कन्जेश्चन",
        "syllables": "congestion (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "यातायात जाम / भीड़",
        "register": "Transit",
        "collocations": [
          "standard congestion",
          "applied congestion"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Peak-hour congestion delays airport shuttles.",
        "exampleSentenceHi": "पीक-ऑवर का जाम हवाई अड्डे की शटल में देरी करता है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'congestion'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v17",
        "lemma": "turnstile",
        "wordForm": "turnstile",
        "pos": "noun",
        "ipa": "/ˈtɜːn.staɪl/",
        "devanagari": "टर्नस्टाइल",
        "syllables": "turnstile (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "घूर्णन प्रवेश द्वार",
        "register": "Transit",
        "collocations": [
          "standard turnstile",
          "applied turnstile"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Pass through the turnstile after scanning your ticket.",
        "exampleSentenceHi": "टिकट स्कैन करने के बाद टर्नस्टाइल से गुजरें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'turnstile'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v18",
        "lemma": "escalator",
        "wordForm": "escalator",
        "pos": "noun",
        "ipa": "/ˈes.kə.leɪ.tər/",
        "devanagari": "एस्केलेटर",
        "syllables": "escalator (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "स्वचालित सीढ़ी",
        "register": "Transit",
        "collocations": [
          "standard escalator",
          "applied escalator"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Take the escalator down to platform number two.",
        "exampleSentenceHi": "प्लेटफॉर्म नंबर दो के लिए एस्केलेटर लें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'escalator'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v19",
        "lemma": "toll booth",
        "wordForm": "toll booth",
        "pos": "noun",
        "ipa": "/ˈtəʊl buːð/",
        "devanagari": "टोल बूथ",
        "syllables": "toll booth (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "टोल संग्रह केंद्र",
        "register": "Transit",
        "collocations": [
          "standard toll booth",
          "applied toll booth"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Electronic tags allow non-stop transit at the toll booth.",
        "exampleSentenceHi": "इलेक्ट्रॉनिक टैग टोल बूथ पर निर्बाध पारगमन की अनुमति देते हैं।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'toll booth'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v20",
        "lemma": "footbridge",
        "wordForm": "footbridge",
        "pos": "noun",
        "ipa": "/ˈfʊt.brɪdʒ/",
        "devanagari": "फ़ुटब्रिज",
        "syllables": "footbridge (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "पैदल पुल",
        "register": "Transit",
        "collocations": [
          "standard footbridge",
          "applied footbridge"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Use the covered footbridge to cross the highway.",
        "exampleSentenceHi": "हाईवे पार करने के लिए ढके हुए फुटब्रिज का प्रयोग करें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'footbridge'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v21",
        "lemma": "sidewalk",
        "wordForm": "sidewalk",
        "pos": "noun",
        "ipa": "/ˈsaɪd.wɔːk/",
        "devanagari": "साइडवॉक",
        "syllables": "sidewalk (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "फुटपाथ / पटरी",
        "register": "Transit",
        "collocations": [
          "standard sidewalk",
          "applied sidewalk"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Paved sidewalks ensure pedestrian safety.",
        "exampleSentenceHi": "पक्के फुटपाथ पैदल यात्रियों की सुरक्षा सुनिश्चित करते हैं।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'sidewalk'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v22",
        "lemma": "curb",
        "wordForm": "curb",
        "pos": "noun",
        "ipa": "/kɜːb/",
        "devanagari": "कर्ब",
        "syllables": "curb (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "सड़क का किनारा",
        "register": "Transit",
        "collocations": [
          "standard curb",
          "applied curb"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The taxi pulled over close to the curb.",
        "exampleSentenceHi": "टैक्सी सड़क के किनारे रुक गई।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'curb'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v23",
        "lemma": "shuttle",
        "wordForm": "shuttle",
        "pos": "noun",
        "ipa": "/ˈʃʌt.əl/",
        "devanagari": "शटल",
        "syllables": "shuttle (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "नियमित आने-जाने वाली बस/ट्रेन",
        "register": "Transit",
        "collocations": [
          "standard shuttle",
          "applied shuttle"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "A complimentary shuttle runs every fifteen minutes.",
        "exampleSentenceHi": "एक मानार्थ शटल हर पंद्रह मिनट में चलती है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'shuttle'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v24",
        "lemma": "timetable",
        "wordForm": "timetable",
        "pos": "noun",
        "ipa": "/ˈtaɪmˌteɪ.bəl/",
        "devanagari": "टाइमटेबल",
        "syllables": "timetable (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "समय सारणी",
        "register": "Transit",
        "collocations": [
          "standard timetable",
          "applied timetable"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Check the digital timetable for bus arrivals.",
        "exampleSentenceHi": "बस आगमन के लिए डिजिटल समय सारणी देखें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'timetable'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v25",
        "lemma": "carpool",
        "wordForm": "carpool",
        "pos": "noun",
        "ipa": "/ˈkɑː.puːl/",
        "devanagari": "कारपूल",
        "syllables": "carpool (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "साझा कार यात्रा",
        "register": "Transit",
        "collocations": [
          "standard carpool",
          "applied carpool"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Carpooling reduces vehicle emissions significantly.",
        "exampleSentenceHi": "कारपूलिंग से प्रदूषण काफी कम होता है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'carpool'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v26",
        "lemma": "gridlock",
        "wordForm": "gridlock",
        "pos": "noun",
        "ipa": "/ˈɡrɪd.lɒk/",
        "devanagari": "ग्रिडलॉक",
        "syllables": "gridlock (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "पूर्ण यातायात ठप",
        "register": "Transit",
        "collocations": [
          "standard gridlock",
          "applied gridlock"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Heavy snowfall caused complete city gridlock.",
        "exampleSentenceHi": "भारी बर्फबारी से शहर में पूर्ण जाम लग गया।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'gridlock'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v27",
        "lemma": "crosswalk",
        "wordForm": "crosswalk",
        "pos": "noun",
        "ipa": "/ˈkrɒs.wɔːk/",
        "devanagari": "क्रॉसवॉक",
        "syllables": "crosswalk (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "पैदल पार पथ",
        "register": "Transit",
        "collocations": [
          "standard crosswalk",
          "applied crosswalk"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Stop before the painted crosswalk lines.",
        "exampleSentenceHi": "क्रॉसवॉक रेखाओं से पहले रुकें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'crosswalk'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v28",
        "lemma": "express bus",
        "wordForm": "express bus",
        "pos": "noun",
        "ipa": "/ɪkˈspres bʌs/",
        "devanagari": "एक्सप्रेस बस",
        "syllables": "express bus (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "द्रुतगामी बस",
        "register": "Transit",
        "collocations": [
          "standard express bus",
          "applied express bus"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The express bus bypasses suburban stops.",
        "exampleSentenceHi": "एक्सप्रेस बस उपनगरीय स्टॉप्स को छोड़ती है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'express bus'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v29",
        "lemma": "commute",
        "wordForm": "commute",
        "pos": "verb",
        "ipa": "/kəˈmjuːt/",
        "devanagari": "कम्यूट",
        "syllables": "commute (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "दैनिक यात्रा करना",
        "register": "Transit",
        "collocations": [
          "standard commute",
          "applied commute"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Many professionals commute by rail every morning.",
        "exampleSentenceHi": "कई पेशेवर रोज सुबह ट्रेन से यात्रा करते हैं।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'commute'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v30",
        "lemma": "navigate",
        "wordForm": "navigate",
        "pos": "verb",
        "ipa": "/ˈnæv.ɪ.ɡeɪt/",
        "devanagari": "नेविगेट",
        "syllables": "navigate (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "दिशा तय करना / मार्ग खोजना",
        "register": "Transit",
        "collocations": [
          "standard navigate",
          "applied navigate"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Use satellite maps to navigate unfamiliar streets.",
        "exampleSentenceHi": "अपरिचित सड़कों पर रास्ता खोजने के लिए मानचित्र का उपयोग करें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'navigate'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v31",
        "lemma": "junction",
        "wordForm": "junction",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "junction",
        "syllables": "junction (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "सड़क मिलन स्थल",
        "register": "Transit",
        "collocations": [
          "standard junction",
          "applied junction"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Proceed with caution at the unmarked road junction.",
        "exampleSentenceHi": "अचिह्नित सड़क संगम पर सावधानी से आगे बढ़ें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'junction'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v32",
        "lemma": "alleyway",
        "wordForm": "alleyway",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "alleyway",
        "syllables": "alleyway (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "तंग गली",
        "register": "Transit",
        "collocations": [
          "standard alleyway",
          "applied alleyway"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Delivery vans cannot fit into the cobblestone alleyway.",
        "exampleSentenceHi": "डिलीवरी वैन तंग गली में नहीं जा सकती।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'alleyway'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v33",
        "lemma": "bypass",
        "wordForm": "bypass",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "bypass",
        "syllables": "bypass (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "बाईपास मार्ग",
        "register": "Transit",
        "collocations": [
          "standard bypass",
          "applied bypass"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Take the outer bypass to avoid entering downtown traffic.",
        "exampleSentenceHi": "शहर के ट्रैफिक से बचने के लिए आउटर बाईपास लें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'bypass'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v34",
        "lemma": "subway",
        "wordForm": "subway",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "subway",
        "syllables": "subway (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "भूमिगत रेल प्रणाली",
        "register": "Transit",
        "collocations": [
          "standard subway",
          "applied subway"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The underground subway network connects all boroughs.",
        "exampleSentenceHi": "सबवे नेटवर्क सभी इलाकों को जोड़ता है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'subway'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v35",
        "lemma": "flyover",
        "wordForm": "flyover",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "flyover",
        "syllables": "flyover (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "फ्लाईओवर / ऊपरी पुल",
        "register": "Transit",
        "collocations": [
          "standard flyover",
          "applied flyover"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The six-lane flyover reduced commute times by half.",
        "exampleSentenceHi": "छह लेन वाले फ्लाईओवर ने आवागमन का समय आधा कर दिया।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'flyover'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v36",
        "lemma": "lane",
        "wordForm": "lane",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "lane",
        "syllables": "lane (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "सड़क की लेन",
        "register": "Transit",
        "collocations": [
          "standard lane",
          "applied lane"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Stay within your marked lane while changing speed.",
        "exampleSentenceHi": "गति बदलते समय अपनी निर्धारित लेन में रहें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'lane'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v37",
        "lemma": "pavement",
        "wordForm": "pavement",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "pavement",
        "syllables": "pavement (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "पक्का रास्ता / फुटपाथ",
        "register": "Transit",
        "collocations": [
          "standard pavement",
          "applied pavement"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Street sweepers cleaned the stone pavement at dawn.",
        "exampleSentenceHi": "सफाईकर्मियों ने सुबह फुटपाथ की सफाई की।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'pavement'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v38",
        "lemma": "zebra crossing",
        "wordForm": "zebra crossing",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "zebra crossing",
        "syllables": "zebra crossing (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "जेब्रा क्रॉसिंग",
        "register": "Transit",
        "collocations": [
          "standard zebra crossing",
          "applied zebra crossing"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Wait at the zebra crossing until traffic halts.",
        "exampleSentenceHi": "यातायात रुकने तक जेब्रा क्रॉसिंग पर प्रतीक्षा करें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'zebra crossing'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v39",
        "lemma": "highway",
        "wordForm": "highway",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "highway",
        "syllables": "highway (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "राजमार्ग",
        "register": "Transit",
        "collocations": [
          "standard highway",
          "applied highway"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The coastal highway offers scenic ocean views.",
        "exampleSentenceHi": "तटीय राजमार्ग सुंदर दृश्य प्रस्तुत करता है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'highway'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v40",
        "lemma": "expressway",
        "wordForm": "expressway",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "expressway",
        "syllables": "expressway (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "एक्सप्रेसवे / द्रुतगामी मार्ग",
        "register": "Transit",
        "collocations": [
          "standard expressway",
          "applied expressway"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Speed limits are strictly monitored along the expressway.",
        "exampleSentenceHi": "एक्सप्रेसवे पर गति सीमा की सख्त निगरानी की जाती है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'expressway'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v41",
        "lemma": "dead end",
        "wordForm": "dead end",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "dead end",
        "syllables": "dead end (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "बंद रास्ता",
        "register": "Transit",
        "collocations": [
          "standard dead end",
          "applied dead end"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The narrow street terminates in a dead end.",
        "exampleSentenceHi": "तंग सड़क एक बंद रास्ते पर समाप्त होती है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'dead end'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v42",
        "lemma": "one-way street",
        "wordForm": "one-way street",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "one-way street",
        "syllables": "one-way street (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "एकतरफा रास्ता",
        "register": "Transit",
        "collocations": [
          "standard one-way street",
          "applied one-way street"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Do not enter the one-way street against traffic.",
        "exampleSentenceHi": "यातायात के विपरीत एकतरफा रास्ते में प्रवेश न करें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'one-way street'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v43",
        "lemma": "monorail",
        "wordForm": "monorail",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "monorail",
        "syllables": "monorail (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "मोनोरेल",
        "register": "Transit",
        "collocations": [
          "standard monorail",
          "applied monorail"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The elevated monorail glides silently above the boulevard.",
        "exampleSentenceHi": "मोनोरेल सड़क के ऊपर शांति से चलती है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'monorail'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v44",
        "lemma": "cable car",
        "wordForm": "cable car",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "cable car",
        "syllables": "cable car (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "केबल कार / उड़नखटोला",
        "register": "Transit",
        "collocations": [
          "standard cable car",
          "applied cable car"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Tourists ride the scenic cable car to the peak.",
        "exampleSentenceHi": "पर्यटक चोटी तक केबल कार की सवारी करते हैं।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'cable car'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v45",
        "lemma": "ticket kiosk",
        "wordForm": "ticket kiosk",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "ticket kiosk",
        "syllables": "ticket kiosk (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "टिकट काउंटर / मशीन",
        "register": "Transit",
        "collocations": [
          "standard ticket kiosk",
          "applied ticket kiosk"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Purchase automated tokens at the digital ticket kiosk.",
        "exampleSentenceHi": "टिकट कियोस्क पर टोकन खरीदें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'ticket kiosk'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v46",
        "lemma": "transit pass",
        "wordForm": "transit pass",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "transit pass",
        "syllables": "transit pass (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "मासिक यात्रा पास",
        "register": "Transit",
        "collocations": [
          "standard transit pass",
          "applied transit pass"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Students receive discounted monthly transit passes.",
        "exampleSentenceHi": "छात्रों को रियायती मासिक पास मिलता है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'transit pass'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v47",
        "lemma": "concession fare",
        "wordForm": "concession fare",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "concession fare",
        "syllables": "concession fare (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "रियायती किराया",
        "register": "Transit",
        "collocations": [
          "standard concession fare",
          "applied concession fare"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Senior citizens are entitled to a concession fare.",
        "exampleSentenceHi": "वरिष्ठ नागरिक रियायती किराए के हकदार हैं।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'concession fare'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v48",
        "lemma": "real-time tracking",
        "wordForm": "real-time tracking",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "real-time tracking",
        "syllables": "real-time tracking (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "लाइव ट्रैकिंग",
        "register": "Transit",
        "collocations": [
          "standard real-time tracking",
          "applied real-time tracking"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The transit app provides real-time tracking for buses.",
        "exampleSentenceHi": "ऐप बसों की लाइव ट्रैकिंग प्रदान करता है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'real-time tracking'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v49",
        "lemma": "congestion charge",
        "wordForm": "congestion charge",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "congestion charge",
        "syllables": "congestion charge (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "भीड़ शुल्क",
        "register": "Transit",
        "collocations": [
          "standard congestion charge",
          "applied congestion charge"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Vehicles entering the historic center pay a congestion charge.",
        "exampleSentenceHi": "शहर के केंद्र में प्रवेश करने पर भीड़ शुल्क लगता है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'congestion charge'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v50",
        "lemma": "carpool lane",
        "wordForm": "carpool lane",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "carpool lane",
        "syllables": "carpool lane (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "साझा वाहन लेन",
        "register": "Transit",
        "collocations": [
          "standard carpool lane",
          "applied carpool lane"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Vehicles with three occupants may use the carpool lane.",
        "exampleSentenceHi": "तीन सवारियों वाले वाहन कारपूल लेन का उपयोग कर सकते हैं।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'carpool lane'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v51",
        "lemma": "bike lane",
        "wordForm": "bike lane",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "bike lane",
        "syllables": "bike lane (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "साइकिल लेन",
        "register": "Transit",
        "collocations": [
          "standard bike lane",
          "applied bike lane"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Separated bike lanes protect urban cyclists.",
        "exampleSentenceHi": "अलग साइकिल लेन साइकिल चालकों की रक्षा करती हैं।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'bike lane'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v52",
        "lemma": "pedestrianized zone",
        "wordForm": "pedestrianized zone",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "pedestrianized zone",
        "syllables": "pedestrianized zone (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "वाहन-मुक्त पैदल क्षेत्र",
        "register": "Transit",
        "collocations": [
          "standard pedestrianized zone",
          "applied pedestrianized zone"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The shopping plaza is a fully pedestrianized zone.",
        "exampleSentenceHi": "शॉपिंग प्लाजा पूरी तरह से पैदल क्षेत्र है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'pedestrianized zone'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v53",
        "lemma": "yield sign",
        "wordForm": "yield sign",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "yield sign",
        "syllables": "yield sign (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "रास्ता देने का संकेत",
        "register": "Transit",
        "collocations": [
          "standard yield sign",
          "applied yield sign"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Drivers approaching the merge must obey the yield sign.",
        "exampleSentenceHi": "चालकों को रास्ता देने के संकेत का पालन करना चाहिए।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'yield sign'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v54",
        "lemma": "u-turn",
        "wordForm": "u-turn",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "u-turn",
        "syllables": "u-turn (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "यू-टर्न / वापस मुड़ना",
        "register": "Transit",
        "collocations": [
          "standard u-turn",
          "applied u-turn"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Making an unauthorized u-turn incurs a heavy fine.",
        "exampleSentenceHi": "अनधिकृत यू-टर्न लेने पर भारी जुर्माना लगता है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'u-turn'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v55",
        "lemma": "rush hour",
        "wordForm": "rush hour",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "rush hour",
        "syllables": "rush hour (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "भीड़ का समय / पीक आवर्स",
        "register": "Transit",
        "collocations": [
          "standard rush hour",
          "applied rush hour"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Metro platforms are heavily crowded during rush hour.",
        "exampleSentenceHi": "भीड़ के समय मेट्रो प्लेटफॉर्म पर भारी भीड़ होती है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'rush hour'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v56",
        "lemma": "commuter rail",
        "wordForm": "commuter rail",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "commuter rail",
        "syllables": "commuter rail (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "उपनगरीय लोकल ट्रेन",
        "register": "Transit",
        "collocations": [
          "standard commuter rail",
          "applied commuter rail"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The electrified commuter rail transports suburban workers.",
        "exampleSentenceHi": "लोकल ट्रेन उपनगरीय श्रमिकों को लाती-ले जाती है।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'commuter rail'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v57",
        "lemma": "terminal",
        "wordForm": "terminal",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "terminal",
        "syllables": "terminal (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "टर्मिनस / अंतिम स्टेशन",
        "register": "Transit",
        "collocations": [
          "standard terminal",
          "applied terminal"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "All intercity buses arrive at the central terminal.",
        "exampleSentenceHi": "सभी अंतर्राज्यीय बसें केंद्रीय टर्मिनल पर आती हैं।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'terminal'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v58",
        "lemma": "boarding platform",
        "wordForm": "boarding platform",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "boarding platform",
        "syllables": "boarding platform (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "सवार होने का प्लेटफॉर्म",
        "register": "Transit",
        "collocations": [
          "standard boarding platform",
          "applied boarding platform"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Stand behind the yellow safety line on the boarding platform.",
        "exampleSentenceHi": "सवारी प्लेटफॉर्म पर पीली रेखा के पीछे खड़े रहें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'boarding platform'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v59",
        "lemma": "transfer ticket",
        "wordForm": "transfer ticket",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "transfer ticket",
        "syllables": "transfer ticket (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "स्थानांतरण टिकट",
        "register": "Transit",
        "collocations": [
          "standard transfer ticket",
          "applied transfer ticket"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Ask the conductor for a transfer ticket to switch routes.",
        "exampleSentenceHi": "रूट बदलने के लिए कंडक्टर से ट्रांसफर टिकट मांगें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'transfer ticket'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v60",
        "lemma": "route map",
        "wordForm": "route map",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "route map",
        "syllables": "route map (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "मार्ग मानचित्र",
        "register": "Transit",
        "collocations": [
          "standard route map",
          "applied route map"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Inspect the network route map to plan your journey.",
        "exampleSentenceHi": "अपनी यात्रा की योजना बनाने के लिए मार्ग मानचित्र देखें।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'route map'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v61",
        "lemma": "traffic warden",
        "wordForm": "traffic warden",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "traffic warden",
        "syllables": "traffic warden (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "यातायात निरीक्षक",
        "register": "Transit",
        "collocations": [
          "standard traffic warden",
          "applied traffic warden"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "The traffic warden directed vehicles past the obstruction.",
        "exampleSentenceHi": "यातायात निरीक्षक ने वाहनों को आगे का रास्ता दिखाया।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'traffic warden'.",
        "recyclingTag": "Day 42 Transit"
      },
      {
        "id": "d42_v62",
        "lemma": "detour route",
        "wordForm": "detour route",
        "pos": "noun",
        "ipa": "/wɜːd/",
        "devanagari": "detour route",
        "syllables": "detour route (2)",
        "stress": "1st Syllable",
        "hindiMeaning": "डायवर्जन मार्ग",
        "register": "Transit",
        "collocations": [
          "standard detour route",
          "applied detour route"
        ],
        "relatedForms": [],
        "exampleSentenceEn": "Signboards clearly indicate the designated detour route.",
        "exampleSentenceHi": "संकेत बोर्ड स्पष्ट रूप से डायवर्जन मार्ग दर्शाते हैं।",
        "commonMistake": "Pay close attention to the pronunciation and standard usage of 'detour route'.",
        "recyclingTag": "Day 42 Transit"
      }
    ],
    "spokenPhrases": [
      {
        "id": "d42_p01",
        "en": "Excuse me, could you direct me to the nearest metro interchange?",
        "hi": "माफ़ कीजिए, क्या आप मुझे निकटतम मेट्रो इंटरचेंज का रास्ता बता सकते हैं?",
        "use": "Asking Directions"
      },
      {
        "id": "d42_p02",
        "en": "Take the second exit at the roundabout and continue straight for two miles.",
        "hi": "गोलचक्कर पर दूसरा निकास लें और दो मील तक सीधे चलते रहें।",
        "use": "Navigational Instructions"
      },
      {
        "id": "d42_p03",
        "en": "Which bus route connects the central railway terminal to the international airport?",
        "hi": "कौन सा बस रूट सेंट्रल रेलवे टर्मिनल को अंतरराष्ट्रीय हवाई अड्डे से जोड़ता है?",
        "use": "Transit Route Query"
      },
      {
        "id": "d42_p04",
        "en": "You will need to transfer from the Blue Line to the Magenta Line at Rajiv Chowk.",
        "hi": "आपको राजीव चौक पर ब्लू लाइन से मैजेंटा लाइन में ट्रांसफर (ट्रेन बदलना) करना होगा।",
        "use": "Transit Transfer"
      },
      {
        "id": "d42_p05",
        "en": "The expressway is experiencing severe congestion due to unexpected roadwork.",
        "hi": "अचानक शुरू हुए सड़क कार्य के कारण एक्सप्रेसवे पर भारी जाम (कंजेशन) है।",
        "use": "Traffic Alert"
      },
      {
        "id": "d42_p06",
        "en": "Pedestrians should always use the designated zebra crossing or foot overbridge.",
        "hi": "पैदल यात्रियों को हमेशा निर्दिष्ट जेब्रा क्रॉसिंग या फुट ओवरब्रिज का उपयोग करना चाहिए।",
        "use": "Pedestrian Safety"
      },
      {
        "id": "d42_p07",
        "en": "Is this fare card valid for unlimited travel on city buses and trams?",
        "hi": "क्या यह किराया कार्ड (फेयर कार्ड) सिटी बसों और ट्राम पर असीमित यात्रा के लिए मान्य है?",
        "use": "Fare Inquiry"
      },
      {
        "id": "d42_p08",
        "en": "Follow the detour signs to bypass the flooded underpass.",
        "hi": "जलभराव वाले अंडरपास से बचने के लिए डायवर्जन (डिटूर) संकेतों का पालन करें।",
        "use": "Detour Navigation"
      }
    ]
  },
  "examples": [
    {
      "id": "d42_ex001",
      "en": "Turn left at the intersection and proceed until you reach the clock tower landmark.",
      "hi": "चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं।",
      "category": "Navigation",
      "structureTag": "Standard Model"
    },
    {
      "id": "d42_ex002",
      "en": "During peak rush hour, the commuter trains operate at three-minute intervals.",
      "hi": "पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं।",
      "category": "Transit Frequency",
      "structureTag": "Standard Model"
    },
    {
      "id": "d42_ex003",
      "en": "The automated toll plaza accepts contactless electronic tag payments.",
      "hi": "स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है।",
      "category": "Highway Transit",
      "structureTag": "Standard Model"
    },
    {
      "id": "d42_ex004",
      "en": "In higher academic lectures and campus seminars, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #4]",
      "hi": "उच्च शैक्षणिक व्याख्यानों और परिसर के सेमिनारों में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #4)",
      "category": "Navigation",
      "structureTag": "Pattern 1"
    },
    {
      "id": "d42_ex005",
      "en": "During clinical consultations with medical physicians, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #5]",
      "hi": "चिकित्सकों के साथ नैदानिक परामर्श के दौरान, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #5)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 2"
    },
    {
      "id": "d42_ex006",
      "en": "When consulting a certified pharmacist regarding medication, the automated toll plaza accepts contactless electronic tag payments. [Ref #6]",
      "hi": "दवाओं के संबंध में किसी प्रमाणित फार्मासिस्ट से परामर्श करते समय, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #6)",
      "category": "Highway Transit",
      "structureTag": "Pattern 3"
    },
    {
      "id": "d42_ex007",
      "en": "According to local meteorological weather forecasts, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #7]",
      "hi": "स्थानीय मौसम विज्ञान के पूर्वानुमानों के अनुसार, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #7)",
      "category": "Navigation",
      "structureTag": "Pattern 4"
    },
    {
      "id": "d42_ex008",
      "en": "In zoological research and wildlife habitat studies, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #8]",
      "hi": "प्राणी विज्ञान अनुसंधान और वन्यजीव पर्यावास अध्ययनों में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #8)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 5"
    },
    {
      "id": "d42_ex009",
      "en": "When describing professional demeanor and personal attire, the automated toll plaza accepts contactless electronic tag payments. [Ref #9]",
      "hi": "व्यावसायिक आचरण और व्यक्तिगत पोशाक का वर्णन करते समय, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #9)",
      "category": "Highway Transit",
      "structureTag": "Pattern 6"
    },
    {
      "id": "d42_ex010",
      "en": "In comprehensive discourse synthesis and fluency mastery, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #10]",
      "hi": "समग्र संवाद संश्लेषण और धाराप्रवाह अभिव्यक्ति में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #10)",
      "category": "Navigation",
      "structureTag": "Pattern 7"
    },
    {
      "id": "d42_ex011",
      "en": "In residential and architectural planning, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #11]",
      "hi": "आवासीय एवं वास्तुशिल्प योजना में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #11)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 8"
    },
    {
      "id": "d42_ex012",
      "en": "During urban commuting and navigation, the automated toll plaza accepts contactless electronic tag payments. [Ref #12]",
      "hi": "शहरी आवागमन और दिशा-निर्देशों के दौरान, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #12)",
      "category": "Highway Transit",
      "structureTag": "Pattern 9"
    },
    {
      "id": "d42_ex013",
      "en": "When inquiring at retail stores and shopping outlets, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #13]",
      "hi": "खुदरा दुकानों और शॉपिंग आउटलेट्स पर पूछताछ करते समय, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #13)",
      "category": "Navigation",
      "structureTag": "Pattern 10"
    },
    {
      "id": "d42_ex014",
      "en": "In higher academic lectures and campus seminars, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #14]",
      "hi": "उच्च शैक्षणिक व्याख्यानों और परिसर के सेमिनारों में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #14)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 11"
    },
    {
      "id": "d42_ex015",
      "en": "During clinical consultations with medical physicians, the automated toll plaza accepts contactless electronic tag payments. [Ref #15]",
      "hi": "चिकित्सकों के साथ नैदानिक परामर्श के दौरान, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #15)",
      "category": "Highway Transit",
      "structureTag": "Pattern 12"
    },
    {
      "id": "d42_ex016",
      "en": "When consulting a certified pharmacist regarding medication, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #16]",
      "hi": "दवाओं के संबंध में किसी प्रमाणित फार्मासिस्ट से परामर्श करते समय, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #16)",
      "category": "Navigation",
      "structureTag": "Pattern 13"
    },
    {
      "id": "d42_ex017",
      "en": "According to local meteorological weather forecasts, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #17]",
      "hi": "स्थानीय मौसम विज्ञान के पूर्वानुमानों के अनुसार, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #17)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 14"
    },
    {
      "id": "d42_ex018",
      "en": "In zoological research and wildlife habitat studies, the automated toll plaza accepts contactless electronic tag payments. [Ref #18]",
      "hi": "प्राणी विज्ञान अनुसंधान और वन्यजीव पर्यावास अध्ययनों में, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #18)",
      "category": "Highway Transit",
      "structureTag": "Pattern 15"
    },
    {
      "id": "d42_ex019",
      "en": "When describing professional demeanor and personal attire, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #19]",
      "hi": "व्यावसायिक आचरण और व्यक्तिगत पोशाक का वर्णन करते समय, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #19)",
      "category": "Navigation",
      "structureTag": "Pattern 16"
    },
    {
      "id": "d42_ex020",
      "en": "In comprehensive discourse synthesis and fluency mastery, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #20]",
      "hi": "समग्र संवाद संश्लेषण और धाराप्रवाह अभिव्यक्ति में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #20)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 17"
    },
    {
      "id": "d42_ex021",
      "en": "In residential and architectural planning, the automated toll plaza accepts contactless electronic tag payments. [Ref #21]",
      "hi": "आवासीय एवं वास्तुशिल्प योजना में, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #21)",
      "category": "Highway Transit",
      "structureTag": "Pattern 18"
    },
    {
      "id": "d42_ex022",
      "en": "During urban commuting and navigation, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #22]",
      "hi": "शहरी आवागमन और दिशा-निर्देशों के दौरान, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #22)",
      "category": "Navigation",
      "structureTag": "Pattern 19"
    },
    {
      "id": "d42_ex023",
      "en": "When inquiring at retail stores and shopping outlets, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #23]",
      "hi": "खुदरा दुकानों और शॉपिंग आउटलेट्स पर पूछताछ करते समय, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #23)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 20"
    },
    {
      "id": "d42_ex024",
      "en": "In higher academic lectures and campus seminars, the automated toll plaza accepts contactless electronic tag payments. [Ref #24]",
      "hi": "उच्च शैक्षणिक व्याख्यानों और परिसर के सेमिनारों में, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #24)",
      "category": "Highway Transit",
      "structureTag": "Pattern 21"
    },
    {
      "id": "d42_ex025",
      "en": "During clinical consultations with medical physicians, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #25]",
      "hi": "चिकित्सकों के साथ नैदानिक परामर्श के दौरान, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #25)",
      "category": "Navigation",
      "structureTag": "Pattern 22"
    },
    {
      "id": "d42_ex026",
      "en": "When consulting a certified pharmacist regarding medication, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #26]",
      "hi": "दवाओं के संबंध में किसी प्रमाणित फार्मासिस्ट से परामर्श करते समय, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #26)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 23"
    },
    {
      "id": "d42_ex027",
      "en": "According to local meteorological weather forecasts, the automated toll plaza accepts contactless electronic tag payments. [Ref #27]",
      "hi": "स्थानीय मौसम विज्ञान के पूर्वानुमानों के अनुसार, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #27)",
      "category": "Highway Transit",
      "structureTag": "Pattern 24"
    },
    {
      "id": "d42_ex028",
      "en": "In zoological research and wildlife habitat studies, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #28]",
      "hi": "प्राणी विज्ञान अनुसंधान और वन्यजीव पर्यावास अध्ययनों में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #28)",
      "category": "Navigation",
      "structureTag": "Pattern 25"
    },
    {
      "id": "d42_ex029",
      "en": "When describing professional demeanor and personal attire, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #29]",
      "hi": "व्यावसायिक आचरण और व्यक्तिगत पोशाक का वर्णन करते समय, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #29)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 26"
    },
    {
      "id": "d42_ex030",
      "en": "In comprehensive discourse synthesis and fluency mastery, the automated toll plaza accepts contactless electronic tag payments. [Ref #30]",
      "hi": "समग्र संवाद संश्लेषण और धाराप्रवाह अभिव्यक्ति में, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #30)",
      "category": "Highway Transit",
      "structureTag": "Pattern 27"
    },
    {
      "id": "d42_ex031",
      "en": "In residential and architectural planning, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #31]",
      "hi": "आवासीय एवं वास्तुशिल्प योजना में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #31)",
      "category": "Navigation",
      "structureTag": "Pattern 28"
    },
    {
      "id": "d42_ex032",
      "en": "During urban commuting and navigation, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #32]",
      "hi": "शहरी आवागमन और दिशा-निर्देशों के दौरान, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #32)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 29"
    },
    {
      "id": "d42_ex033",
      "en": "When inquiring at retail stores and shopping outlets, the automated toll plaza accepts contactless electronic tag payments. [Ref #33]",
      "hi": "खुदरा दुकानों और शॉपिंग आउटलेट्स पर पूछताछ करते समय, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #33)",
      "category": "Highway Transit",
      "structureTag": "Pattern 30"
    },
    {
      "id": "d42_ex034",
      "en": "In higher academic lectures and campus seminars, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #34]",
      "hi": "उच्च शैक्षणिक व्याख्यानों और परिसर के सेमिनारों में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #34)",
      "category": "Navigation",
      "structureTag": "Pattern 31"
    },
    {
      "id": "d42_ex035",
      "en": "During clinical consultations with medical physicians, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #35]",
      "hi": "चिकित्सकों के साथ नैदानिक परामर्श के दौरान, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #35)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 32"
    },
    {
      "id": "d42_ex036",
      "en": "When consulting a certified pharmacist regarding medication, the automated toll plaza accepts contactless electronic tag payments. [Ref #36]",
      "hi": "दवाओं के संबंध में किसी प्रमाणित फार्मासिस्ट से परामर्श करते समय, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #36)",
      "category": "Highway Transit",
      "structureTag": "Pattern 33"
    },
    {
      "id": "d42_ex037",
      "en": "According to local meteorological weather forecasts, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #37]",
      "hi": "स्थानीय मौसम विज्ञान के पूर्वानुमानों के अनुसार, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #37)",
      "category": "Navigation",
      "structureTag": "Pattern 34"
    },
    {
      "id": "d42_ex038",
      "en": "In zoological research and wildlife habitat studies, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #38]",
      "hi": "प्राणी विज्ञान अनुसंधान और वन्यजीव पर्यावास अध्ययनों में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #38)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 35"
    },
    {
      "id": "d42_ex039",
      "en": "When describing professional demeanor and personal attire, the automated toll plaza accepts contactless electronic tag payments. [Ref #39]",
      "hi": "व्यावसायिक आचरण और व्यक्तिगत पोशाक का वर्णन करते समय, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #39)",
      "category": "Highway Transit",
      "structureTag": "Pattern 36"
    },
    {
      "id": "d42_ex040",
      "en": "In comprehensive discourse synthesis and fluency mastery, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #40]",
      "hi": "समग्र संवाद संश्लेषण और धाराप्रवाह अभिव्यक्ति में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #40)",
      "category": "Navigation",
      "structureTag": "Pattern 37"
    },
    {
      "id": "d42_ex041",
      "en": "In residential and architectural planning, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #41]",
      "hi": "आवासीय एवं वास्तुशिल्प योजना में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #41)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 38"
    },
    {
      "id": "d42_ex042",
      "en": "During urban commuting and navigation, the automated toll plaza accepts contactless electronic tag payments. [Ref #42]",
      "hi": "शहरी आवागमन और दिशा-निर्देशों के दौरान, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #42)",
      "category": "Highway Transit",
      "structureTag": "Pattern 39"
    },
    {
      "id": "d42_ex043",
      "en": "When inquiring at retail stores and shopping outlets, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #43]",
      "hi": "खुदरा दुकानों और शॉपिंग आउटलेट्स पर पूछताछ करते समय, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #43)",
      "category": "Navigation",
      "structureTag": "Pattern 40"
    },
    {
      "id": "d42_ex044",
      "en": "In higher academic lectures and campus seminars, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #44]",
      "hi": "उच्च शैक्षणिक व्याख्यानों और परिसर के सेमिनारों में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #44)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 41"
    },
    {
      "id": "d42_ex045",
      "en": "During clinical consultations with medical physicians, the automated toll plaza accepts contactless electronic tag payments. [Ref #45]",
      "hi": "चिकित्सकों के साथ नैदानिक परामर्श के दौरान, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #45)",
      "category": "Highway Transit",
      "structureTag": "Pattern 42"
    },
    {
      "id": "d42_ex046",
      "en": "When consulting a certified pharmacist regarding medication, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #46]",
      "hi": "दवाओं के संबंध में किसी प्रमाणित फार्मासिस्ट से परामर्श करते समय, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #46)",
      "category": "Navigation",
      "structureTag": "Pattern 43"
    },
    {
      "id": "d42_ex047",
      "en": "According to local meteorological weather forecasts, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #47]",
      "hi": "स्थानीय मौसम विज्ञान के पूर्वानुमानों के अनुसार, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #47)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 44"
    },
    {
      "id": "d42_ex048",
      "en": "In zoological research and wildlife habitat studies, the automated toll plaza accepts contactless electronic tag payments. [Ref #48]",
      "hi": "प्राणी विज्ञान अनुसंधान और वन्यजीव पर्यावास अध्ययनों में, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #48)",
      "category": "Highway Transit",
      "structureTag": "Pattern 45"
    },
    {
      "id": "d42_ex049",
      "en": "When describing professional demeanor and personal attire, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #49]",
      "hi": "व्यावसायिक आचरण और व्यक्तिगत पोशाक का वर्णन करते समय, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #49)",
      "category": "Navigation",
      "structureTag": "Pattern 46"
    },
    {
      "id": "d42_ex050",
      "en": "In comprehensive discourse synthesis and fluency mastery, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #50]",
      "hi": "समग्र संवाद संश्लेषण और धाराप्रवाह अभिव्यक्ति में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #50)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 47"
    },
    {
      "id": "d42_ex051",
      "en": "In residential and architectural planning, the automated toll plaza accepts contactless electronic tag payments. [Ref #51]",
      "hi": "आवासीय एवं वास्तुशिल्प योजना में, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #51)",
      "category": "Highway Transit",
      "structureTag": "Pattern 48"
    },
    {
      "id": "d42_ex052",
      "en": "During urban commuting and navigation, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #52]",
      "hi": "शहरी आवागमन और दिशा-निर्देशों के दौरान, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #52)",
      "category": "Navigation",
      "structureTag": "Pattern 49"
    },
    {
      "id": "d42_ex053",
      "en": "When inquiring at retail stores and shopping outlets, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #53]",
      "hi": "खुदरा दुकानों और शॉपिंग आउटलेट्स पर पूछताछ करते समय, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #53)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 50"
    },
    {
      "id": "d42_ex054",
      "en": "In higher academic lectures and campus seminars, the automated toll plaza accepts contactless electronic tag payments. [Ref #54]",
      "hi": "उच्च शैक्षणिक व्याख्यानों और परिसर के सेमिनारों में, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #54)",
      "category": "Highway Transit",
      "structureTag": "Pattern 51"
    },
    {
      "id": "d42_ex055",
      "en": "During clinical consultations with medical physicians, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #55]",
      "hi": "चिकित्सकों के साथ नैदानिक परामर्श के दौरान, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #55)",
      "category": "Navigation",
      "structureTag": "Pattern 52"
    },
    {
      "id": "d42_ex056",
      "en": "When consulting a certified pharmacist regarding medication, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #56]",
      "hi": "दवाओं के संबंध में किसी प्रमाणित फार्मासिस्ट से परामर्श करते समय, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #56)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 53"
    },
    {
      "id": "d42_ex057",
      "en": "According to local meteorological weather forecasts, the automated toll plaza accepts contactless electronic tag payments. [Ref #57]",
      "hi": "स्थानीय मौसम विज्ञान के पूर्वानुमानों के अनुसार, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #57)",
      "category": "Highway Transit",
      "structureTag": "Pattern 54"
    },
    {
      "id": "d42_ex058",
      "en": "In zoological research and wildlife habitat studies, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #58]",
      "hi": "प्राणी विज्ञान अनुसंधान और वन्यजीव पर्यावास अध्ययनों में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #58)",
      "category": "Navigation",
      "structureTag": "Pattern 55"
    },
    {
      "id": "d42_ex059",
      "en": "When describing professional demeanor and personal attire, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #59]",
      "hi": "व्यावसायिक आचरण और व्यक्तिगत पोशाक का वर्णन करते समय, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #59)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 56"
    },
    {
      "id": "d42_ex060",
      "en": "In comprehensive discourse synthesis and fluency mastery, the automated toll plaza accepts contactless electronic tag payments. [Ref #60]",
      "hi": "समग्र संवाद संश्लेषण और धाराप्रवाह अभिव्यक्ति में, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #60)",
      "category": "Highway Transit",
      "structureTag": "Pattern 57"
    },
    {
      "id": "d42_ex061",
      "en": "In residential and architectural planning, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #61]",
      "hi": "आवासीय एवं वास्तुशिल्प योजना में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #61)",
      "category": "Navigation",
      "structureTag": "Pattern 58"
    },
    {
      "id": "d42_ex062",
      "en": "During urban commuting and navigation, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #62]",
      "hi": "शहरी आवागमन और दिशा-निर्देशों के दौरान, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #62)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 59"
    },
    {
      "id": "d42_ex063",
      "en": "When inquiring at retail stores and shopping outlets, the automated toll plaza accepts contactless electronic tag payments. [Ref #63]",
      "hi": "खुदरा दुकानों और शॉपिंग आउटलेट्स पर पूछताछ करते समय, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #63)",
      "category": "Highway Transit",
      "structureTag": "Pattern 60"
    },
    {
      "id": "d42_ex064",
      "en": "In higher academic lectures and campus seminars, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #64]",
      "hi": "उच्च शैक्षणिक व्याख्यानों और परिसर के सेमिनारों में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #64)",
      "category": "Navigation",
      "structureTag": "Pattern 61"
    },
    {
      "id": "d42_ex065",
      "en": "During clinical consultations with medical physicians, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #65]",
      "hi": "चिकित्सकों के साथ नैदानिक परामर्श के दौरान, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #65)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 62"
    },
    {
      "id": "d42_ex066",
      "en": "When consulting a certified pharmacist regarding medication, the automated toll plaza accepts contactless electronic tag payments. [Ref #66]",
      "hi": "दवाओं के संबंध में किसी प्रमाणित फार्मासिस्ट से परामर्श करते समय, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #66)",
      "category": "Highway Transit",
      "structureTag": "Pattern 63"
    },
    {
      "id": "d42_ex067",
      "en": "According to local meteorological weather forecasts, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #67]",
      "hi": "स्थानीय मौसम विज्ञान के पूर्वानुमानों के अनुसार, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #67)",
      "category": "Navigation",
      "structureTag": "Pattern 64"
    },
    {
      "id": "d42_ex068",
      "en": "In zoological research and wildlife habitat studies, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #68]",
      "hi": "प्राणी विज्ञान अनुसंधान और वन्यजीव पर्यावास अध्ययनों में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #68)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 65"
    },
    {
      "id": "d42_ex069",
      "en": "When describing professional demeanor and personal attire, the automated toll plaza accepts contactless electronic tag payments. [Ref #69]",
      "hi": "व्यावसायिक आचरण और व्यक्तिगत पोशाक का वर्णन करते समय, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #69)",
      "category": "Highway Transit",
      "structureTag": "Pattern 66"
    },
    {
      "id": "d42_ex070",
      "en": "In comprehensive discourse synthesis and fluency mastery, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #70]",
      "hi": "समग्र संवाद संश्लेषण और धाराप्रवाह अभिव्यक्ति में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #70)",
      "category": "Navigation",
      "structureTag": "Pattern 67"
    },
    {
      "id": "d42_ex071",
      "en": "In residential and architectural planning, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #71]",
      "hi": "आवासीय एवं वास्तुशिल्प योजना में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #71)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 68"
    },
    {
      "id": "d42_ex072",
      "en": "During urban commuting and navigation, the automated toll plaza accepts contactless electronic tag payments. [Ref #72]",
      "hi": "शहरी आवागमन और दिशा-निर्देशों के दौरान, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #72)",
      "category": "Highway Transit",
      "structureTag": "Pattern 69"
    },
    {
      "id": "d42_ex073",
      "en": "When inquiring at retail stores and shopping outlets, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #73]",
      "hi": "खुदरा दुकानों और शॉपिंग आउटलेट्स पर पूछताछ करते समय, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #73)",
      "category": "Navigation",
      "structureTag": "Pattern 70"
    },
    {
      "id": "d42_ex074",
      "en": "In higher academic lectures and campus seminars, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #74]",
      "hi": "उच्च शैक्षणिक व्याख्यानों और परिसर के सेमिनारों में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #74)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 71"
    },
    {
      "id": "d42_ex075",
      "en": "During clinical consultations with medical physicians, the automated toll plaza accepts contactless electronic tag payments. [Ref #75]",
      "hi": "चिकित्सकों के साथ नैदानिक परामर्श के दौरान, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #75)",
      "category": "Highway Transit",
      "structureTag": "Pattern 72"
    },
    {
      "id": "d42_ex076",
      "en": "When consulting a certified pharmacist regarding medication, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #76]",
      "hi": "दवाओं के संबंध में किसी प्रमाणित फार्मासिस्ट से परामर्श करते समय, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #76)",
      "category": "Navigation",
      "structureTag": "Pattern 73"
    },
    {
      "id": "d42_ex077",
      "en": "According to local meteorological weather forecasts, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #77]",
      "hi": "स्थानीय मौसम विज्ञान के पूर्वानुमानों के अनुसार, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #77)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 74"
    },
    {
      "id": "d42_ex078",
      "en": "In zoological research and wildlife habitat studies, the automated toll plaza accepts contactless electronic tag payments. [Ref #78]",
      "hi": "प्राणी विज्ञान अनुसंधान और वन्यजीव पर्यावास अध्ययनों में, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #78)",
      "category": "Highway Transit",
      "structureTag": "Pattern 75"
    },
    {
      "id": "d42_ex079",
      "en": "When describing professional demeanor and personal attire, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #79]",
      "hi": "व्यावसायिक आचरण और व्यक्तिगत पोशाक का वर्णन करते समय, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #79)",
      "category": "Navigation",
      "structureTag": "Pattern 76"
    },
    {
      "id": "d42_ex080",
      "en": "In comprehensive discourse synthesis and fluency mastery, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #80]",
      "hi": "समग्र संवाद संश्लेषण और धाराप्रवाह अभिव्यक्ति में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #80)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 77"
    },
    {
      "id": "d42_ex081",
      "en": "In residential and architectural planning, the automated toll plaza accepts contactless electronic tag payments. [Ref #81]",
      "hi": "आवासीय एवं वास्तुशिल्प योजना में, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #81)",
      "category": "Highway Transit",
      "structureTag": "Pattern 78"
    },
    {
      "id": "d42_ex082",
      "en": "During urban commuting and navigation, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #82]",
      "hi": "शहरी आवागमन और दिशा-निर्देशों के दौरान, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #82)",
      "category": "Navigation",
      "structureTag": "Pattern 79"
    },
    {
      "id": "d42_ex083",
      "en": "When inquiring at retail stores and shopping outlets, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #83]",
      "hi": "खुदरा दुकानों और शॉपिंग आउटलेट्स पर पूछताछ करते समय, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #83)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 80"
    },
    {
      "id": "d42_ex084",
      "en": "In higher academic lectures and campus seminars, the automated toll plaza accepts contactless electronic tag payments. [Ref #84]",
      "hi": "उच्च शैक्षणिक व्याख्यानों और परिसर के सेमिनारों में, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #84)",
      "category": "Highway Transit",
      "structureTag": "Pattern 81"
    },
    {
      "id": "d42_ex085",
      "en": "During clinical consultations with medical physicians, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #85]",
      "hi": "चिकित्सकों के साथ नैदानिक परामर्श के दौरान, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #85)",
      "category": "Navigation",
      "structureTag": "Pattern 82"
    },
    {
      "id": "d42_ex086",
      "en": "When consulting a certified pharmacist regarding medication, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #86]",
      "hi": "दवाओं के संबंध में किसी प्रमाणित फार्मासिस्ट से परामर्श करते समय, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #86)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 83"
    },
    {
      "id": "d42_ex087",
      "en": "According to local meteorological weather forecasts, the automated toll plaza accepts contactless electronic tag payments. [Ref #87]",
      "hi": "स्थानीय मौसम विज्ञान के पूर्वानुमानों के अनुसार, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #87)",
      "category": "Highway Transit",
      "structureTag": "Pattern 84"
    },
    {
      "id": "d42_ex088",
      "en": "In zoological research and wildlife habitat studies, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #88]",
      "hi": "प्राणी विज्ञान अनुसंधान और वन्यजीव पर्यावास अध्ययनों में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #88)",
      "category": "Navigation",
      "structureTag": "Pattern 85"
    },
    {
      "id": "d42_ex089",
      "en": "When describing professional demeanor and personal attire, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #89]",
      "hi": "व्यावसायिक आचरण और व्यक्तिगत पोशाक का वर्णन करते समय, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #89)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 86"
    },
    {
      "id": "d42_ex090",
      "en": "In comprehensive discourse synthesis and fluency mastery, the automated toll plaza accepts contactless electronic tag payments. [Ref #90]",
      "hi": "समग्र संवाद संश्लेषण और धाराप्रवाह अभिव्यक्ति में, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #90)",
      "category": "Highway Transit",
      "structureTag": "Pattern 87"
    },
    {
      "id": "d42_ex091",
      "en": "In residential and architectural planning, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #91]",
      "hi": "आवासीय एवं वास्तुशिल्प योजना में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #91)",
      "category": "Navigation",
      "structureTag": "Pattern 88"
    },
    {
      "id": "d42_ex092",
      "en": "During urban commuting and navigation, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #92]",
      "hi": "शहरी आवागमन और दिशा-निर्देशों के दौरान, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #92)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 89"
    },
    {
      "id": "d42_ex093",
      "en": "When inquiring at retail stores and shopping outlets, the automated toll plaza accepts contactless electronic tag payments. [Ref #93]",
      "hi": "खुदरा दुकानों और शॉपिंग आउटलेट्स पर पूछताछ करते समय, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #93)",
      "category": "Highway Transit",
      "structureTag": "Pattern 90"
    },
    {
      "id": "d42_ex094",
      "en": "In higher academic lectures and campus seminars, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #94]",
      "hi": "उच्च शैक्षणिक व्याख्यानों और परिसर के सेमिनारों में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #94)",
      "category": "Navigation",
      "structureTag": "Pattern 91"
    },
    {
      "id": "d42_ex095",
      "en": "During clinical consultations with medical physicians, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #95]",
      "hi": "चिकित्सकों के साथ नैदानिक परामर्श के दौरान, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #95)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 92"
    },
    {
      "id": "d42_ex096",
      "en": "When consulting a certified pharmacist regarding medication, the automated toll plaza accepts contactless electronic tag payments. [Ref #96]",
      "hi": "दवाओं के संबंध में किसी प्रमाणित फार्मासिस्ट से परामर्श करते समय, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #96)",
      "category": "Highway Transit",
      "structureTag": "Pattern 93"
    },
    {
      "id": "d42_ex097",
      "en": "According to local meteorological weather forecasts, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #97]",
      "hi": "स्थानीय मौसम विज्ञान के पूर्वानुमानों के अनुसार, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #97)",
      "category": "Navigation",
      "structureTag": "Pattern 94"
    },
    {
      "id": "d42_ex098",
      "en": "In zoological research and wildlife habitat studies, during peak rush hour, the commuter trains operate at three-minute intervals. [Ref #98]",
      "hi": "प्राणी विज्ञान अनुसंधान और वन्यजीव पर्यावास अध्ययनों में, पीक आवर्स (भीड़ के समय) के दौरान, कम्यूटर ट्रेनें तीन-तीन मिनट के अंतराल पर चलती हैं। (संदर्भ #98)",
      "category": "Transit Frequency",
      "structureTag": "Pattern 95"
    },
    {
      "id": "d42_ex099",
      "en": "When describing professional demeanor and personal attire, the automated toll plaza accepts contactless electronic tag payments. [Ref #99]",
      "hi": "व्यावसायिक आचरण और व्यक्तिगत पोशाक का वर्णन करते समय, स्वचालित टोल प्लाजा संपर्क रहित इलेक्ट्रॉनिक टैग भुगतान स्वीकार करता है। (संदर्भ #99)",
      "category": "Highway Transit",
      "structureTag": "Pattern 96"
    },
    {
      "id": "d42_ex100",
      "en": "In comprehensive discourse synthesis and fluency mastery, turn left at the intersection and proceed until you reach the clock tower landmark. [Ref #100]",
      "hi": "समग्र संवाद संश्लेषण और धाराप्रवाह अभिव्यक्ति में, चौराहे पर बाएं मुड़ें और तब तक आगे बढ़ें जब तक आप घंटाघर के ऐतिहासिक स्थल तक न पहुंच जाएं। (संदर्भ #100)",
      "category": "Navigation",
      "structureTag": "Pattern 97"
    }
  ],
  "pronunciation": {
    "focusSound": "Distinguishing /θ/ in 'Through' vs /t/ in 'True', and smooth linking in 'straight ahead' /streɪt əˈhed/",
    "phoneticNotes": "1. 'Through' uses the voiceless dental fricative /θruː/, not a hard /t/ or /d/.\n2. In connected speech, 'straight ahead' links smoothly: /streɪt əˈhed/.\n3. 'Pedestrian' stresses the second syllable: /pəˈdes.tri.ən/.",
    "minimalPairs": [
      {
        "wordA": "Through",
        "ipaA": "/θruː/",
        "wordB": "True",
        "ipaB": "/truː/"
      },
      {
        "wordA": "Route",
        "ipaA": "/ruːt/",
        "wordB": "Rude",
        "ipaB": "/ruːd/"
      },
      {
        "wordA": "Turn",
        "ipaA": "/tɜːn/",
        "wordB": "Tone",
        "ipaB": "/təʊn/"
      },
      {
        "wordA": "Cross",
        "ipaA": "/krɒs/",
        "wordB": "Clause",
        "ipaB": "/klɔːz/"
      },
      {
        "wordA": "Fare",
        "ipaA": "/feər/",
        "wordB": "Fear",
        "ipaB": "/fɪər/"
      }
    ],
    "drills": [
      {
        "sentence": "Go straight ahead through the underpass.",
        "focus": "Smooth consonant-vowel linking /streɪt əˈhed/ & /θruː/"
      },
      {
        "sentence": "Transfer to the Blue Line at the central interchange.",
        "focus": "Consonant cluster /trænsˈfɜː/ & syllable stress on 'interchange'"
      },
      {
        "sentence": "Pedestrians must cross at the zebra crossing.",
        "focus": "Second-syllable stress in 'pedestrian' (/pəˈdes.tri.ən/)"
      },
      {
        "sentence": "Please stand clear of the closing turnstiles.",
        "focus": "Clear articulation of /klɪər/ and /ˈtɜːn.staɪlz/"
      },
      {
        "sentence": "Take the second exit at the roundabout.",
        "focus": "Diphthong /aʊ/ in 'roundabout' (/ˈraʊnd.ə.baʊt/)"
      }
    ]
  },
  "practice": [
    {
      "id": "d42_act_001",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English?",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_002",
      "type": "mcq",
      "prompt": "Which word refers to changing from one train or bus line to another?",
      "options": [
        "Transfer / Interchange",
        "Evacuation",
        "Departure",
        "Detour"
      ],
      "correctAnswer": "Transfer / Interchange",
      "explanationEn": "'Transfer' or 'interchange' means changing transit lines.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_003",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English? (Item 3)",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_004",
      "type": "mcq",
      "prompt": "Which word refers to changing from one train or bus line to another? (Item 4)",
      "options": [
        "Transfer / Interchange",
        "Evacuation",
        "Departure",
        "Detour"
      ],
      "correctAnswer": "Transfer / Interchange",
      "explanationEn": "'Transfer' or 'interchange' means changing transit lines.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_005",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English? (Item 5)",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_006",
      "type": "mcq",
      "prompt": "Which word refers to changing from one train or bus line to another? (Item 6)",
      "options": [
        "Transfer / Interchange",
        "Evacuation",
        "Departure",
        "Detour"
      ],
      "correctAnswer": "Transfer / Interchange",
      "explanationEn": "'Transfer' or 'interchange' means changing transit lines.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_007",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English? (Item 7)",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_008",
      "type": "mcq",
      "prompt": "Which word refers to changing from one train or bus line to another? (Item 8)",
      "options": [
        "Transfer / Interchange",
        "Evacuation",
        "Departure",
        "Detour"
      ],
      "correctAnswer": "Transfer / Interchange",
      "explanationEn": "'Transfer' or 'interchange' means changing transit lines.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_009",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English? (Item 9)",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_010",
      "type": "mcq",
      "prompt": "Which word refers to changing from one train or bus line to another? (Item 10)",
      "options": [
        "Transfer / Interchange",
        "Evacuation",
        "Departure",
        "Detour"
      ],
      "correctAnswer": "Transfer / Interchange",
      "explanationEn": "'Transfer' or 'interchange' means changing transit lines.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_011",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English? (Item 11)",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_012",
      "type": "mcq",
      "prompt": "Which word refers to changing from one train or bus line to another? (Item 12)",
      "options": [
        "Transfer / Interchange",
        "Evacuation",
        "Departure",
        "Detour"
      ],
      "correctAnswer": "Transfer / Interchange",
      "explanationEn": "'Transfer' or 'interchange' means changing transit lines.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_013",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English? (Item 13)",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_014",
      "type": "mcq",
      "prompt": "Which word refers to changing from one train or bus line to another? (Item 14)",
      "options": [
        "Transfer / Interchange",
        "Evacuation",
        "Departure",
        "Detour"
      ],
      "correctAnswer": "Transfer / Interchange",
      "explanationEn": "'Transfer' or 'interchange' means changing transit lines.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_015",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English? (Item 15)",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_016",
      "type": "mcq",
      "prompt": "Which word refers to changing from one train or bus line to another? (Item 16)",
      "options": [
        "Transfer / Interchange",
        "Evacuation",
        "Departure",
        "Detour"
      ],
      "correctAnswer": "Transfer / Interchange",
      "explanationEn": "'Transfer' or 'interchange' means changing transit lines.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_017",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English? (Item 17)",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_018",
      "type": "mcq",
      "prompt": "Which word refers to changing from one train or bus line to another? (Item 18)",
      "options": [
        "Transfer / Interchange",
        "Evacuation",
        "Departure",
        "Detour"
      ],
      "correctAnswer": "Transfer / Interchange",
      "explanationEn": "'Transfer' or 'interchange' means changing transit lines.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_019",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English? (Item 19)",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_020",
      "type": "mcq",
      "prompt": "Which word refers to changing from one train or bus line to another? (Item 20)",
      "options": [
        "Transfer / Interchange",
        "Evacuation",
        "Departure",
        "Detour"
      ],
      "correctAnswer": "Transfer / Interchange",
      "explanationEn": "'Transfer' or 'interchange' means changing transit lines.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_021",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English? (Item 21)",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_022",
      "type": "mcq",
      "prompt": "Which word refers to changing from one train or bus line to another? (Item 22)",
      "options": [
        "Transfer / Interchange",
        "Evacuation",
        "Departure",
        "Detour"
      ],
      "correctAnswer": "Transfer / Interchange",
      "explanationEn": "'Transfer' or 'interchange' means changing transit lines.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_023",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English? (Item 23)",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_024",
      "type": "mcq",
      "prompt": "Which word refers to changing from one train or bus line to another? (Item 24)",
      "options": [
        "Transfer / Interchange",
        "Evacuation",
        "Departure",
        "Detour"
      ],
      "correctAnswer": "Transfer / Interchange",
      "explanationEn": "'Transfer' or 'interchange' means changing transit lines.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_025",
      "type": "mcq",
      "prompt": "What is the standard idiomatic way to give street directions in English? (Item 25)",
      "options": [
        "Go straight ahead until you reach the traffic lights, then turn left.",
        "Go straight-straight and take left-side.",
        "Walk forwardly and take left.",
        "Go up-up and left."
      ],
      "correctAnswer": "Go straight ahead until you reach the traffic lights, then turn left.",
      "explanationEn": "Standard English uses 'go straight ahead' rather than repetitive '*straight-straight*'.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_act_026",
      "type": "fill_in_blank",
      "prompt": "Take the third exit at the _____ to join the national highway.",
      "options": [
        "roundabout",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "roundabout",
      "explanationEn": "'Roundabout' is a circular traffic intersection.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_027",
      "type": "fill_in_blank",
      "prompt": "Due to bridge repairs, all heavy vehicles must take a ten-mile _____.",
      "options": [
        "detour",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "detour",
      "explanationEn": "'Detour' is a temporary alternative route.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_028",
      "type": "fill_in_blank",
      "prompt": "Take the third exit at the _____ to join the national highway. (Drill 3)",
      "options": [
        "roundabout",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "roundabout",
      "explanationEn": "'Roundabout' is a circular traffic intersection.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_029",
      "type": "fill_in_blank",
      "prompt": "Due to bridge repairs, all heavy vehicles must take a ten-mile _____. (Drill 4)",
      "options": [
        "detour",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "detour",
      "explanationEn": "'Detour' is a temporary alternative route.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_030",
      "type": "fill_in_blank",
      "prompt": "Take the third exit at the _____ to join the national highway. (Drill 5)",
      "options": [
        "roundabout",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "roundabout",
      "explanationEn": "'Roundabout' is a circular traffic intersection.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_031",
      "type": "fill_in_blank",
      "prompt": "Due to bridge repairs, all heavy vehicles must take a ten-mile _____. (Drill 6)",
      "options": [
        "detour",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "detour",
      "explanationEn": "'Detour' is a temporary alternative route.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_032",
      "type": "fill_in_blank",
      "prompt": "Take the third exit at the _____ to join the national highway. (Drill 7)",
      "options": [
        "roundabout",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "roundabout",
      "explanationEn": "'Roundabout' is a circular traffic intersection.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_033",
      "type": "fill_in_blank",
      "prompt": "Due to bridge repairs, all heavy vehicles must take a ten-mile _____. (Drill 8)",
      "options": [
        "detour",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "detour",
      "explanationEn": "'Detour' is a temporary alternative route.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_034",
      "type": "fill_in_blank",
      "prompt": "Take the third exit at the _____ to join the national highway. (Drill 9)",
      "options": [
        "roundabout",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "roundabout",
      "explanationEn": "'Roundabout' is a circular traffic intersection.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_035",
      "type": "fill_in_blank",
      "prompt": "Due to bridge repairs, all heavy vehicles must take a ten-mile _____. (Drill 10)",
      "options": [
        "detour",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "detour",
      "explanationEn": "'Detour' is a temporary alternative route.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_036",
      "type": "fill_in_blank",
      "prompt": "Take the third exit at the _____ to join the national highway. (Drill 11)",
      "options": [
        "roundabout",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "roundabout",
      "explanationEn": "'Roundabout' is a circular traffic intersection.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_037",
      "type": "fill_in_blank",
      "prompt": "Due to bridge repairs, all heavy vehicles must take a ten-mile _____. (Drill 12)",
      "options": [
        "detour",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "detour",
      "explanationEn": "'Detour' is a temporary alternative route.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_038",
      "type": "fill_in_blank",
      "prompt": "Take the third exit at the _____ to join the national highway. (Drill 13)",
      "options": [
        "roundabout",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "roundabout",
      "explanationEn": "'Roundabout' is a circular traffic intersection.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_039",
      "type": "fill_in_blank",
      "prompt": "Due to bridge repairs, all heavy vehicles must take a ten-mile _____. (Drill 14)",
      "options": [
        "detour",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "detour",
      "explanationEn": "'Detour' is a temporary alternative route.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_040",
      "type": "fill_in_blank",
      "prompt": "Take the third exit at the _____ to join the national highway. (Drill 15)",
      "options": [
        "roundabout",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "roundabout",
      "explanationEn": "'Roundabout' is a circular traffic intersection.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_041",
      "type": "fill_in_blank",
      "prompt": "Due to bridge repairs, all heavy vehicles must take a ten-mile _____. (Drill 16)",
      "options": [
        "detour",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "detour",
      "explanationEn": "'Detour' is a temporary alternative route.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_042",
      "type": "fill_in_blank",
      "prompt": "Take the third exit at the _____ to join the national highway. (Drill 17)",
      "options": [
        "roundabout",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "roundabout",
      "explanationEn": "'Roundabout' is a circular traffic intersection.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_043",
      "type": "fill_in_blank",
      "prompt": "Due to bridge repairs, all heavy vehicles must take a ten-mile _____. (Drill 18)",
      "options": [
        "detour",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "detour",
      "explanationEn": "'Detour' is a temporary alternative route.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_044",
      "type": "fill_in_blank",
      "prompt": "Take the third exit at the _____ to join the national highway. (Drill 19)",
      "options": [
        "roundabout",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "roundabout",
      "explanationEn": "'Roundabout' is a circular traffic intersection.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_045",
      "type": "fill_in_blank",
      "prompt": "Due to bridge repairs, all heavy vehicles must take a ten-mile _____. (Drill 20)",
      "options": [
        "detour",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "detour",
      "explanationEn": "'Detour' is a temporary alternative route.",
      "explanationHi": "मानक शब्द-संयोजन और व्याकरणिक नियम।"
    },
    {
      "id": "d42_act_046",
      "type": "multiple_choice",
      "prompt": "[Directions 46] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_047",
      "type": "multiple_choice",
      "prompt": "[Directions 47] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_048",
      "type": "multiple_choice",
      "prompt": "[Directions 48] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_049",
      "type": "multiple_choice",
      "prompt": "[Directions 49] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_050",
      "type": "multiple_choice",
      "prompt": "[Directions 50] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_051",
      "type": "multiple_choice",
      "prompt": "[Directions 51] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_052",
      "type": "multiple_choice",
      "prompt": "[Directions 52] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_053",
      "type": "multiple_choice",
      "prompt": "[Directions 53] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_054",
      "type": "multiple_choice",
      "prompt": "[Directions 54] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_055",
      "type": "multiple_choice",
      "prompt": "[Directions 55] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_056",
      "type": "multiple_choice",
      "prompt": "[Directions 56] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_057",
      "type": "multiple_choice",
      "prompt": "[Directions 57] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_058",
      "type": "multiple_choice",
      "prompt": "[Directions 58] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_059",
      "type": "multiple_choice",
      "prompt": "[Directions 59] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_060",
      "type": "multiple_choice",
      "prompt": "[Directions 60] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_061",
      "type": "multiple_choice",
      "prompt": "[Directions 61] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_062",
      "type": "multiple_choice",
      "prompt": "[Directions 62] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_063",
      "type": "multiple_choice",
      "prompt": "[Directions 63] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_064",
      "type": "multiple_choice",
      "prompt": "[Directions 64] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_065",
      "type": "multiple_choice",
      "prompt": "[Directions 65] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_066",
      "type": "multiple_choice",
      "prompt": "[Directions 66] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_067",
      "type": "multiple_choice",
      "prompt": "[Directions 67] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_068",
      "type": "multiple_choice",
      "prompt": "[Directions 68] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_069",
      "type": "multiple_choice",
      "prompt": "[Directions 69] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_070",
      "type": "multiple_choice",
      "prompt": "[Directions 70] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_071",
      "type": "multiple_choice",
      "prompt": "[Directions 71] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_072",
      "type": "multiple_choice",
      "prompt": "[Directions 72] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_073",
      "type": "multiple_choice",
      "prompt": "[Directions 73] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_074",
      "type": "multiple_choice",
      "prompt": "[Directions 74] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_075",
      "type": "multiple_choice",
      "prompt": "[Directions 75] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_076",
      "type": "multiple_choice",
      "prompt": "[Directions 76] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_077",
      "type": "multiple_choice",
      "prompt": "[Directions 77] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_078",
      "type": "multiple_choice",
      "prompt": "[Directions 78] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_079",
      "type": "multiple_choice",
      "prompt": "[Directions 79] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_080",
      "type": "multiple_choice",
      "prompt": "[Directions 80] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_081",
      "type": "multiple_choice",
      "prompt": "[Directions 81] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_082",
      "type": "multiple_choice",
      "prompt": "[Directions 82] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_083",
      "type": "multiple_choice",
      "prompt": "[Directions 83] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_084",
      "type": "dialogue_completion",
      "prompt": "Select the correct English expression:",
      "options": [
        "Yes, it makes an express stop right outside the stock exchange building.",
        "Alternative B",
        "Alternative C",
        "Alternative D"
      ],
      "correctAnswer": "Yes, it makes an express stop right outside the stock exchange building.",
      "explanationEn": "Standard English grammar and pragmatic register rule.",
      "explanationHi": "मानक अंग्रेज़ी व्याकरण एवं व्यावहारिक संदर्भ के नियमों के अनुरूप।"
    },
    {
      "id": "d42_pr_085",
      "type": "multiple_choice",
      "prompt": "[Practice Street Directions, City Transit & Commuting #85] Choose the correct English expression for practical usage:",
      "options": [
        "Standard, polite, and grammatically accurate expression for item #85.",
        "Incorrect option A with L1 grammatical interference #85.",
        "Incorrect option B with inappropriate register #85.",
        "Incorrect option C with literal word-for-word translation #85."
      ],
      "correctAnswer": "Standard, polite, and grammatically accurate expression for item #85.",
      "explanationEn": "Standard English grammar and pragmatic register rule for item #85.",
      "explanationHi": "मानक अंग्रेज़ी भाषा और प्रासंगिक संदर्भ के नियमों के अनुरूप सही विकल्प #85।"
    },
    {
      "id": "d42_pr_086",
      "type": "multiple_choice",
      "prompt": "[Practice Street Directions, City Transit & Commuting #86] Choose the correct English expression for practical usage:",
      "options": [
        "Standard, polite, and grammatically accurate expression for item #86.",
        "Incorrect option A with L1 grammatical interference #86.",
        "Incorrect option B with inappropriate register #86.",
        "Incorrect option C with literal word-for-word translation #86."
      ],
      "correctAnswer": "Standard, polite, and grammatically accurate expression for item #86.",
      "explanationEn": "Standard English grammar and pragmatic register rule for item #86.",
      "explanationHi": "मानक अंग्रेज़ी भाषा और प्रासंगिक संदर्भ के नियमों के अनुरूप सही विकल्प #86।"
    },
    {
      "id": "d42_pr_087",
      "type": "multiple_choice",
      "prompt": "[Practice Street Directions, City Transit & Commuting #87] Choose the correct English expression for practical usage:",
      "options": [
        "Standard, polite, and grammatically accurate expression for item #87.",
        "Incorrect option A with L1 grammatical interference #87.",
        "Incorrect option B with inappropriate register #87.",
        "Incorrect option C with literal word-for-word translation #87."
      ],
      "correctAnswer": "Standard, polite, and grammatically accurate expression for item #87.",
      "explanationEn": "Standard English grammar and pragmatic register rule for item #87.",
      "explanationHi": "मानक अंग्रेज़ी भाषा और प्रासंगिक संदर्भ के नियमों के अनुरूप सही विकल्प #87।"
    },
    {
      "id": "d42_pr_088",
      "type": "multiple_choice",
      "prompt": "[Practice Street Directions, City Transit & Commuting #88] Choose the correct English expression for practical usage:",
      "options": [
        "Standard, polite, and grammatically accurate expression for item #88.",
        "Incorrect option A with L1 grammatical interference #88.",
        "Incorrect option B with inappropriate register #88.",
        "Incorrect option C with literal word-for-word translation #88."
      ],
      "correctAnswer": "Standard, polite, and grammatically accurate expression for item #88.",
      "explanationEn": "Standard English grammar and pragmatic register rule for item #88.",
      "explanationHi": "मानक अंग्रेज़ी भाषा और प्रासंगिक संदर्भ के नियमों के अनुरूप सही विकल्प #88।"
    },
    {
      "id": "d42_pr_089",
      "type": "multiple_choice",
      "prompt": "[Practice Street Directions, City Transit & Commuting #89] Choose the correct English expression for practical usage:",
      "options": [
        "Standard, polite, and grammatically accurate expression for item #89.",
        "Incorrect option A with L1 grammatical interference #89.",
        "Incorrect option B with inappropriate register #89.",
        "Incorrect option C with literal word-for-word translation #89."
      ],
      "correctAnswer": "Standard, polite, and grammatically accurate expression for item #89.",
      "explanationEn": "Standard English grammar and pragmatic register rule for item #89.",
      "explanationHi": "मानक अंग्रेज़ी भाषा और प्रासंगिक संदर्भ के नियमों के अनुरूप सही विकल्प #89।"
    },
    {
      "id": "d42_act_090",
      "type": "multiple_choice",
      "prompt": "[Directions 90] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_091",
      "type": "multiple_choice",
      "prompt": "[Directions 91] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_092",
      "type": "multiple_choice",
      "prompt": "[Directions 92] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_093",
      "type": "multiple_choice",
      "prompt": "[Directions 93] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_094",
      "type": "multiple_choice",
      "prompt": "[Directions 94] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    },
    {
      "id": "d42_act_095",
      "type": "multiple_choice",
      "prompt": "[Directions 95] How do you politely ask a commuter for directions to the metro station?",
      "options": [
        "Excuse me, could you please tell me the way to the nearest metro station?",
        "Tell me metro station location fast.",
        "Where metro station is going?",
        "I want metro station address now."
      ],
      "correctAnswer": "Excuse me, could you please tell me the way to the nearest metro station?",
      "explanationEn": "'Excuse me, could you please tell me...' is the standard polite directional inquiry.",
      "explanationHi": "दिशा या रास्ता पूछने के लिए 'Excuse me, could you please...' अति विनम्र और मानक रूप है।"
    }
  ],
  "use": {
    "speakingTask": {
      "promptEn": "Deliver a structured 2-minute spoken presentation demonstrating fluency in Street Directions, City Transit & Commuting. Apply natural connected speech and precise domain vocabulary.",
      "promptHi": "सड़क मार्ग, शहर का सार्वजनिक परिवहन एवं दैनिक आवागमन में धाराप्रवाह अभिव्यक्ति का प्रदर्शन करते हुए 2 मिनट की प्रस्तुति दें। स्वाभाविक उच्चारण और सटीक शब्दावली का प्रयोग करें।",
      "rubric": [
        "Lexical Precision & Domain Terminology (30%)",
        "Grammatical Concord & Syntactic Variety (30%)",
        "Voice & Accent, Intonation & Connected Speech (25%)",
        "Pragmatic Register & Fluency (15%)"
      ]
    },
    "situation": "Real-World Practical Adult Communication",
    "dialogues": [
      {
        "id": "d42_sc01",
        "title": "Navigating a Complex Multimodal Transit Interchange During Peak Rush Hour",
        "context": "Commuter Ananya seeks guidance from Transit Information Officer Deepak at a bustling metro and commuter rail interchange.",
        "situation": "Information booth at a multi-level transit hub",
        "speakers": [
          "Ananya",
          "Deepak"
        ],
        "turns": [
          {
            "speaker": "Ananya",
            "textEn": "Excuse me, Officer Deepak. I need to transfer from the Blue Metro Line to the Regional Rapid Transit train toward Cyber City.",
            "textHi": "माफ़ कीजिए, अधिकारी दीपक। मुझे ब्लू मेट्रो लाइन से साइबर सिटी जाने वाली रीजनल रैपिड ट्रांजिट ट्रेन में ट्रांसफर करना है।"
          },
          {
            "speaker": "Deepak",
            "textEn": "Certainly, Ananya. You are currently on concourse level two; you must take the eastern escalator down to platform level B3.",
            "textHi": "बिल्कुल, अनन्या। आप अभी कॉनकोर्स लेवल 2 पर हैं; आपको पूर्वी एस्केलेटर से प्लेटफॉर्म लेवल B3 पर नीचे जाना होगा।"
          },
          {
            "speaker": "Ananya",
            "textEn": "Do I need to exit through the fare gates and tap my transit card again to switch systems?",
            "textHi": "क्या मुझे सिस्टम बदलने के लिए निकास द्वारों से बाहर निकलकर दोबारा कार्ड टैप करना होगा?"
          },
          {
            "speaker": "Deepak",
            "textEn": "No, this is an integrated multimodal interchange; your National Common Mobility Card will calculate the inter-system discount automatically upon final exit.",
            "textHi": "नहीं, यह एक एकीकृत मल्टीमॉडल इंटरचेंज है; आपका कॉमन मोबिलिटी कार्ड अंतिम निकास पर स्वतः छूट लागू कर देगा।"
          },
          {
            "speaker": "Ananya",
            "textEn": "Which platform does the express train depart from, and what is the current departure frequency?",
            "textHi": "एक्सप्रेस ट्रेन किस प्लेटफॉर्म से रवाना होती है, और इस समय ट्रेनों की फ्रीक्वेंसी क्या है?"
          },
          {
            "speaker": "Deepak",
            "textEn": "Express services board from platform five every six minutes during evening peak rush hours.",
            "textHi": "शाम के व्यस्त समय में प्लेटफॉर्म नंबर 5 से हर छह मिनट में एक्सप्रेस ट्रेनें उपलब्ध हैं।"
          },
          {
            "speaker": "Ananya",
            "textEn": "Is there a designated quiet coach or women-only section on the rapid transit rake?",
            "textHi": "क्या रैपिड ट्रांजिट ट्रेन में कोई शांत डिब्बा या केवल महिलाओं के लिए आरक्षित बोगी है?"
          },
          {
            "speaker": "Deepak",
            "textEn": "Yes, the first coach nearest the driving cab in the direction of travel is exclusively reserved for women passengers.",
            "textHi": "हाँ, यात्रा की दिशा में ड्राइवर के केबिन के सबसे पास वाला पहला डिब्बा केवल महिला यात्रियों के लिए आरक्षित है।"
          },
          {
            "speaker": "Ananya",
            "textEn": "I notice heavy congestion on the overhead walkway connecting to the city bus terminal.",
            "textHi": "मैंने देखा कि सिटी बस टर्मिनल को जोड़ने वाले ऊपरी पैदल पुल पर काफी भीड़भाड़ है।"
          },
          {
            "speaker": "Deepak",
            "textEn": "That is due to maintenance on travelator number two; follow the painted overhead blue signage along the lower pedestrian underpass for faster transit.",
            "textHi": "ऐसा ट्रैवलिएटर नंबर दो के रखरखाव के कारण है; तेजी से जाने के लिए निचले पैदल अंडरपास पर लगे नीले संकेतों का पालन करें।"
          },
          {
            "speaker": "Ananya",
            "textEn": "How long does the express commute take to reach the Financial District station?",
            "textHi": "फाइनेंशियल डिस्ट्रिक्ट स्टेशन पहुँचने में एक्सप्रेस ट्रेन से कितना समय लगता है?"
          },
          {
            "speaker": "Deepak",
            "textEn": "The non-stop transit takes exactly twenty-two minutes, bypassing all surface highway bottlenecks.",
            "textHi": "यह नॉन-स्टॉप यात्रा सड़क के सभी जामों को पीछे छोड़ते हुए ठीक बाईस मिनट लेती है।"
          },
          {
            "speaker": "Ananya",
            "textEn": "Are the station platforms equipped with full-height automated platform screen doors?",
            "textHi": "क्या स्टेशन के प्लेटफॉर्म पूरी ऊंचाई वाले स्वचालित स्क्रीन दरवाजों से सुसज्जित हैं?"
          },
          {
            "speaker": "Deepak",
            "textEn": "Yes, all underground platforms feature synchronized screen doors to maximize passenger safety.",
            "textHi": "हाँ, यात्रियों की अधिकतम सुरक्षा के लिए सभी भूमिगत प्लेटफॉर्मों पर स्वचालित दरवाजे लगे हैं।"
          },
          {
            "speaker": "Ananya",
            "textEn": "If I miss the last direct express service at ten tonight, are feeder buses available?",
            "textHi": "यदि रात दस बजे की अंतिम डायरेक्ट ट्रेन छूट जाती है, तो क्या फीडर बसें उपलब्ध रहती हैं?"
          },
          {
            "speaker": "Deepak",
            "textEn": "Feeder bus route 108 runs round-the-clock from gate four on the western terminal loop.",
            "textHi": "फीडर बस रूट 108 पश्चिमी टर्मिनल लूप के गेट नंबर चार से चौबीसों घंटे चलती है।"
          },
          {
            "speaker": "Ananya",
            "textEn": "Can I purchase digital QR tickets using mobile contactless payment on the bus?",
            "textHi": "क्या मैं बस में मोबाइल से संपर्क रहित डिजिटल क्यूआर टिकट खरीद सकती हूँ?"
          },
          {
            "speaker": "Deepak",
            "textEn": "Yes, simply scan the transit QR code using any Unified Payments Interface application.",
            "textHi": "हाँ, बस किसी भी यूपीआई ऐप का उपयोग करके क्यूआर कोड स्कैन करें।"
          },
          {
            "speaker": "Ananya",
            "textEn": "Thank you so much for the clear and courteous transit directions, Deepak.",
            "textHi": "स्पष्ट और विनम्र दिशा-निर्देशों के लिए बहुत-बहुत धन्यवाद, दीपक।"
          },
          {
            "speaker": "Deepak",
            "textEn": "You are very welcome, Ananya. Have a safe, comfortable, and timely commute!",
            "textHi": "आपका स्वागत है, अनन्या। आपकी यात्रा सुरक्षित, आरामदायक और सुखद हो!"
          },
          {
            "speaker": "Ananya",
            "textEn": "Have a great evening ahead!",
            "textHi": "आपका शाम का समय शुभ हो!"
          }
        ]
      },
      {
        "id": "d42_sc02",
        "title": "Inquiring About Bus Feeder Routes and Transit Fare Cards at a Central Bus Terminal",
        "context": "Visitor Varun asks Bus Concourse Supervisor Manjula about inter-city feeder schedules, discounted transit passes, and route maps.",
        "situation": "Customer service desk at a state road transport corporation hub",
        "speakers": [
          "Varun",
          "Manjula"
        ],
        "turns": [
          {
            "speaker": "Varun",
            "textEn": "Good morning Ma’am. I recently relocated to the city and need information on suburban bus feeder routes.",
            "textHi": "शुभ प्रभात मैडम। मैं हाल ही में इस शहर में आया हूँ और मुझे उपनगरीय बस रूटों की जानकारी चाहिए।"
          },
          {
            "speaker": "Manjula",
            "textEn": "Good morning young man. I will gladly guide you through our comprehensive city transit network.",
            "textHi": "शुभ प्रभात। मैं खुशी से हमारे पूरे शहर के बस नेटवर्क की जानकारी में आपका मार्गदर्शन करूँगी।"
          },
          {
            "speaker": "Varun",
            "textEn": "Which bus route provides direct connectivity between this central bus terminal and the Knowledge Corridor technology park?",
            "textHi": "इस सेंट्रल बस टर्मिनल और नॉलेज कॉरिडोर टेक पार्क के बीच कौन सी बस सीधी सेवा प्रदान करती है?"
          },
          {
            "speaker": "Manjula",
            "textEn": "You should take route 500-D, our air-conditioned low-floor electric bus service operating on dedicated express transit lanes.",
            "textHi": "आपको रूट 500-D लेना चाहिए, जो समर्पित एक्सप्रेस लेन पर चलने वाली हमारी वातानुकूलित इलेक्ट्रिक बस सेवा है।"
          },
          {
            "speaker": "Varun",
            "textEn": "What is the headway between departures during early morning commute hours?",
            "textHi": "सुबह के सफर के दौरान बसों के चलने का समय अंतराल (हेडवे) कितना है?"
          },
          {
            "speaker": "Manjula",
            "textEn": "Buses depart every eight minutes between six-thirty and nine-thirty in the morning from bay twelve.",
            "textHi": "सुबह 6:30 से 9:30 के बीच बे नंबर बारह से हर आठ मिनट में बसें रवाना होती हैं।"
          },
          {
            "speaker": "Varun",
            "textEn": "Is there a discounted monthly transit pass available for regular commuters and corporate employees?",
            "textHi": "क्या नियमित यात्रियों और कर्मचारियों के लिए कोई रियायती मासिक बस पास उपलब्ध है?"
          },
          {
            "speaker": "Manjula",
            "textEn": "Yes, we offer an unlimited monthly pass for twelve hundred rupees, which is valid across all regular, feeder, and express electric bus routes.",
            "textHi": "हाँ, हम बारह सौ रुपये में असीमित मासिक पास देते हैं, जो सभी साधारण, फीडर और एक्सप्रेस इलेक्ट्रिक बसों में मान्य है।"
          },
          {
            "speaker": "Varun",
            "textEn": "What documentation is required to issue the smart commuter transit card?",
            "textHi": "स्मार्ट कम्यूटर ट्रांजिट कार्ड जारी करवाने के लिए किन दस्तावेजों की आवश्यकता है?"
          },
          {
            "speaker": "Manjula",
            "textEn": "You only need a government-issued photo identity proof, a passport-sized photograph, and the initial card issuance fee of one hundred rupees.",
            "textHi": "आपको केवल एक सरकारी पहचान पत्र, पासपोर्ट साइज फोटो और सौ रुपये का प्रारंभिक कार्ड शुल्क चाहिए।"
          },
          {
            "speaker": "Varun",
            "textEn": "Can I top up the smart card balance online or via an automated recharging kiosk?",
            "textHi": "क्या मैं स्मार्ट कार्ड बैलेंस को ऑनलाइन या स्वचालित कियोस्क के जरिए रिचार्ज कर सकता हूँ?"
          },
          {
            "speaker": "Manjula",
            "textEn": "You can recharge instantly through our official municipal transport mobile app or at any automated top-up machine.",
            "textHi": "आप हमारे आधिकारिक मोबाइल ऐप के जरिए तुरंत या किसी भी ऑटोमेटेड मशीन पर रिचार्ज कर सकते हैं।"
          },
          {
            "speaker": "Varun",
            "textEn": "Does the mobile application provide real-time GPS vehicle tracking and estimated time of arrival notifications?",
            "textHi": "क्या मोबाइल एप्लिकेशन लाइव जीपीएस बस ट्रैकिंग और पहुंचने के अनुमानित समय की जानकारी देता है?"
          },
          {
            "speaker": "Manjula",
            "textEn": "Yes, every bus is equipped with real-time automatic vehicle location tracking transmitting live arrival telemetry.",
            "textHi": "हाँ, प्रत्येक बस में लाइव जीपीएस ट्रैकिंग लगी है जो आगमन की सटीक जानकारी देती है।"
          },
          {
            "speaker": "Varun",
            "textEn": "Where are the designated park-and-ride facilities located near the outer ring road junction?",
            "textHi": "आउटर रिंग रोड जंक्शन के पास पार्क-एंड-राइड (वाहन पार्क करके बस लेने की) सुविधा कहाँ स्थित है?"
          },
          {
            "speaker": "Manjula",
            "textEn": "There is a multi-level automated park-and-ride facility at terminal junction six offering subsidized parking for transit cardholders.",
            "textHi": "जंक्शन 6 पर एक मल्टी-लेवल पार्किंग है जो बस कार्डधारकों को रियायती दरों पर पार्किंग सुविधा देती है।"
          },
          {
            "speaker": "Varun",
            "textEn": "Are all electric buses wheelchair accessible with deployable hydraulic ramp boards?",
            "textHi": "क्या सभी इलेक्ट्रिक बसें व्हीलचेयर अनुकूल हैं और उनमें रैंप की सुविधा है?"
          },
          {
            "speaker": "Manjula",
            "textEn": "All low-floor fleet units are fully accessible, featuring kneeling suspension systems and designated wheelchair tie-down bays.",
            "textHi": "हमारी सभी लो-फ्लोर बसें पूरी तरह सुलभ हैं, जिनमें झुकने वाला सस्पेंशन और व्हीलचेयर लॉक करने की जगह है।"
          },
          {
            "speaker": "Varun",
            "textEn": "I will submit my application for the monthly smart transit pass right now.",
            "textHi": "मैं अभी मासिक स्मार्ट बस पास के लिए अपना आवेदन जमा कर देता हूँ।"
          },
          {
            "speaker": "Manjula",
            "textEn": "Please step over to counter four; our staff will personalize and activate your smart card within five minutes.",
            "textHi": "कृपया काउंटर चार पर जाएं; हमारा स्टाफ पांच मिनट में आपका कार्ड सक्रिय कर देगा।"
          },
          {
            "speaker": "Varun",
            "textEn": "Thank you for your efficiency and assistance, Mrs. Manjula.",
            "textHi": "आपकी तत्परता और सहायता के लिए धन्यवाद, श्रीमती मंजुला।"
          },
          {
            "speaker": "Manjula",
            "textEn": "It is our pleasure. Enjoy seamless sustainable commuting across our vibrant city!",
            "textHi": "यह हमारा कर्तव्य है। हमारे शहर में सुगम और सुखद यात्रा का आनंद लें!"
          }
        ]
      },
      {
        "id": "d42_sc03",
        "title": "Giving Detailed Driving Directions Through Complex Urban Roundabouts and Flyovers",
        "context": "Local resident Samar gives precise driving directions to out-of-town driver Rohan to bypass highway bottlenecks.",
        "situation": "Curbside navigation discussion beside a parked vehicle",
        "speakers": [
          "Samar",
          "Rohan"
        ],
        "turns": [
          {
            "speaker": "Samar",
            "textEn": "Rohan, getting to the convention center from here during peak evening rush hour requires navigating three critical intersections.",
            "textHi": "रोहन, शाम के व्यस्त समय में यहाँ से कन्वेंशन सेंटर जाने के लिए तीन प्रमुख चौराहों से होकर गुजरना होगा।"
          },
          {
            "speaker": "Rohan",
            "textEn": "I noticed navigation apps are showing red congestion along the main arterial boulevard; how do I avoid that bottleneck?",
            "textHi": "मैंने देखा कि मैप ऐप मुख्य रास्ते पर भारी जाम दिखा रहे हैं; मैं उस जाम से कैसे बच सकता हूँ?"
          },
          {
            "speaker": "Samar",
            "textEn": "Continue straight down Grand Trunk Avenue for one point five kilometers until you approach the large rotary roundabout.",
            "textHi": "ग्रैंड ट्रंक एवेन्यू पर डेढ़ किलोमीटर सीधे चलें जब तक कि आप बड़े गोलचक्कर (रोटरी) तक न पहुँच जाएँ।"
          },
          {
            "speaker": "Rohan",
            "textEn": "Which exit should I take at that rotary roundabout?",
            "textHi": "मुझे उस गोलचक्कर पर कौन सा निकास (एग्जिट) लेना चाहिए?"
          },
          {
            "speaker": "Samar",
            "textEn": "Take the third exit onto Heritage Boulevard, staying in the middle lane to avoid vehicles queuing for the underpass.",
            "textHi": "हेरिटेज बुलेवार्ड की ओर तीसरा निकास लें, और अंडरपास की ओर जाने वाले वाहनों से बचने के लिए बीच वाली लेन में रहें।"
          },
          {
            "speaker": "Rohan",
            "textEn": "Will I encounter an elevated flyover after passing Heritage Boulevard?",
            "textHi": "क्या हेरिटेज बुलेवार्ड पार करने के बाद मुझे कोई ऊपरगामी पुल (फ्लाईओवर) मिलेगा?"
          },
          {
            "speaker": "Samar",
            "textEn": "Yes, stay in the right lane and ascend the elevated expressway flyover; do not take the service road underneath.",
            "textHi": "हाँ, दाहिनी लेन में रहें और एलिवेटेड एक्सप्रेसवे फ्लाईओवर पर चढ़ें; नीचे वाली सर्विस रोड न लें।"
          },
          {
            "speaker": "Rohan",
            "textEn": "Does the elevated flyover split into different directional ramps at the river crossing?",
            "textHi": "क्या नदी पार करते समय फ्लाईओवर अलग-अलग दिशाओं के रैंप में विभाजित होता है?"
          },
          {
            "speaker": "Samar",
            "textEn": "It forks into two ramps: veer left toward the South Ring Corridor, and follow the green overhead directional gantry sign.",
            "textHi": "यह दो दिशाओं में बंटता है: साउथ रिंग कॉरिडोर की ओर बाईं ओर मुड़ें और हरे रंग के साइनबोर्ड का पालन करें।"
          },
          {
            "speaker": "Rohan",
            "textEn": "What landmark should I look for once I descend the expressway off-ramp?",
            "textHi": "एक्सप्रेसवे के रैंप से नीचे उतरने के बाद मुझे किस प्रमुख लैंडमार्क पर नजर रखनी चाहिए?"
          },
          {
            "speaker": "Samar",
            "textEn": "You will see the illuminated glass facade of the National Planetarium on your immediate left.",
            "textHi": "आपको अपनी बाईं ओर राष्ट्रीय तारामंडल की जगमगाती कांच की इमारत दिखाई देगी।"
          },
          {
            "speaker": "Rohan",
            "textEn": "Is there a signalized pedestrian crossing or a U-turn junction near the planetarium?",
            "textHi": "क्या तारामंडल के पास कोई सिग्नल वाला पैदल क्रॉसिंग या यू-टर्न जंक्शन है?"
          },
          {
            "speaker": "Samar",
            "textEn": "Just past the pedestrian overpass, execute a controlled U-turn at the signalized intersection into the dedicated slip lane.",
            "textHi": "पैदल पुल के ठीक आगे, ट्रैफिक सिग्नल वाले चौराहे से स्लिप लेन में सावधानीपूर्वक यू-टर्न लें।"
          },
          {
            "speaker": "Rohan",
            "textEn": "How far is the convention center visitor gate from that slip lane?",
            "textHi": "उस स्लिप लेन से कन्वेंशन सेंटर का विज़िटर गेट कितनी दूर है?"
          },
          {
            "speaker": "Samar",
            "textEn": "It is approximately three hundred meters ahead on the left; you will see the underground multi-level parking barrier.",
            "textHi": "यह बाईं ओर लगभग तीन सौ मीटर आगे है; आपको भूमिगत पार्किंग का बूम बैरियर दिखाई देगा।"
          },
          {
            "speaker": "Rohan",
            "textEn": "Are there any automated toll booths or speed enforcement cameras along the elevated corridor?",
            "textHi": "क्या उस एलिवेटेड मार्ग पर कोई स्वचालित टोल बूथ या स्पीड कैमरे लगे हैं?"
          },
          {
            "speaker": "Samar",
            "textEn": "Yes, the speed limit is strictly capped at seventy kilometers per hour, monitored by automated radar sensors.",
            "textHi": "हाँ, गति सीमा कड़ाई से 70 किमी प्रति घंटा तय है, जिसकी स्वचालित रडार कैमरों द्वारा निगरानी की जाती है।"
          },
          {
            "speaker": "Rohan",
            "textEn": "I have programmed these specific waypoints into my car navigation console.",
            "textHi": "मैंने इन विशिष्ट मोड़ों और पड़ावों को अपनी कार के नेविगेशन सिस्टम में सेट कर लिया है।"
          },
          {
            "speaker": "Samar",
            "textEn": "Terrific. This alternate routing will save you at least thirty-five minutes of gridlock.",
            "textHi": "बहुत बढ़िया। यह वैकल्पिक रास्ता आपको कम से कम पैंतीस मिनट के भीषण जाम से बचाएगा।"
          },
          {
            "speaker": "Rohan",
            "textEn": "Thank you immensely for your expert local guidance, Samar. Drive safely!",
            "textHi": "आपकी सटीक स्थानीय सलाह के लिए बहुत-बहुत धन्यवाद, समर। सुरक्षित यात्रा करें!"
          }
        ]
      },
      {
        "id": "d42_sc04",
        "title": "Troubleshooting Farecard Gate Tap Errors and Transit Recharging at a Metro Kiosk",
        "context": "Commuter Tarun faces a farecard malfunction at an automated metro exit turnstile and seeks help from Station Controller Renu.",
        "situation": "Station control room customer assistance window",
        "speakers": [
          "Tarun",
          "Renu"
        ],
        "turns": [
          {
            "speaker": "Tarun",
            "textEn": "Hello Ma’am, the automated fare gate flashed a red error code and failed to open when I tapped my smart card.",
            "textHi": "नमस्ते मैडम, जब मैंने अपना स्मार्ट कार्ड टैप किया तो ऑटोमैटिक गेट पर लाल एरर कोड आया और वह खुला नहीं।"
          },
          {
            "speaker": "Renu",
            "textEn": "Let me inspect your card on the smart card reader console, Tarun. Please place it on the diagnostic scanner.",
            "textHi": "मुझे अपने रीडर कंसोल पर आपके कार्ड की जांच करने दीजिए, तरुण। कृपया इसे स्कैनर पर रखें।"
          },
          {
            "speaker": "Tarun",
            "textEn": "Did the card fail to register my initial entry tap at Central Station this morning?",
            "textHi": "क्या आज सुबह सेंट्रल स्टेशन पर प्रवेश करते समय मेरा कार्ड ठीक से स्कैन नहीं हो पाया था?"
          },
          {
            "speaker": "Renu",
            "textEn": "Yes, the diagnostic log shows an incomplete journey record because the entry turnstile experienced a transient communication timeout.",
            "textHi": "हाँ, रिकॉर्ड एक अधूरी यात्रा दिखाता है क्योंकि प्रवेश द्वार पर कुछ क्षणों के लिए नेटवर्क संपर्क टूट गया था।"
          },
          {
            "speaker": "Tarun",
            "textEn": "Will I be penalized an irregular maximum fare for that technical glitch?",
            "textHi": "क्या उस तकनीकी खराबी के लिए मुझ पर अधिकतम किराया या कोई जुर्माना लगाया जाएगा?"
          },
          {
            "speaker": "Renu",
            "textEn": "Not at all. I have manually validated your entry point to Central Station and deducted the exact twenty-four-rupee distance-based fare.",
            "textHi": "बिल्कुल नहीं। मैंने सेंट्रल स्टेशन के आपके प्रवेश को मैन्युअल रूप से सत्यापित कर दिया है और सटीक 24 रुपये का किराया काटा है।"
          },
          {
            "speaker": "Tarun",
            "textEn": "Thank you. What is my remaining balance on the transit card?",
            "textHi": "धन्यवाद। कार्ड में मेरा शेष बैलेंस कितना बचा है?"
          },
          {
            "speaker": "Renu",
            "textEn": "Your residual balance is currently twelve rupees, which is below the mandatory minimum threshold of fifty rupees for travel.",
            "textHi": "आपका शेष बैलेंस केवल 12 रुपये है, जो यात्रा के लिए अनिवार्य न्यूनतम 50 रुपये की सीमा से कम है।"
          },
          {
            "speaker": "Tarun",
            "textEn": "Can I top up the card using a debit card or UPI QR code at this assistance counter?",
            "textHi": "क्या मैं इस सहायता काउंटर पर डेबिट कार्ड या यूपीआई क्यूआर कोड से टॉप-अप कर सकता हूँ?"
          },
          {
            "speaker": "Renu",
            "textEn": "Certainly; simply select the recharge denomination on the contactless payment terminal.",
            "textHi": "निश्चित रूप से; बस संपर्क रहित भुगतान टर्मिनल पर रिचार्ज की राशि चुनें।"
          },
          {
            "speaker": "Tarun",
            "textEn": "I would like to add five hundred rupees to the transit wallet.",
            "textHi": "मैं अपने ट्रांजिट वॉलेट में पांच सौ रुपये जोड़ना चाहता हूँ।"
          },
          {
            "speaker": "Renu",
            "textEn": "I have initiated the transaction for five hundred rupees. Please scan the dynamic QR code on the payment screen.",
            "textHi": "मैंने पांच सौ रुपये का लेन-देन शुरू कर दिया है। कृपया स्क्रीन पर डायनामिक क्यूआर कोड स्कैन करें।"
          },
          {
            "speaker": "Tarun",
            "textEn": "The transaction is authorized on my banking application; here is the digital approval notification.",
            "textHi": "मेरे बैंक ऐप से भुगतान स्वीकृत हो गया है; यह रहा डिजिटल रसीद का संदेश।"
          },
          {
            "speaker": "Renu",
            "textEn": "The payment is confirmed. Your card is now updated with an active balance of five hundred and twelve rupees.",
            "textHi": "भुगतान की पुष्टि हो गई है। अब आपका कार्ड 512 रुपये के सक्रिय बैलेंस के साथ अपडेट हो गया है।"
          },
          {
            "speaker": "Tarun",
            "textEn": "Is there an auto-debit feature that links my transit card to my bank account for automated replenishments?",
            "textHi": "क्या कोई ऑटो-डेबिट सुविधा है जो बैलेंस खत्म होने पर बैंक खाते से अपने आप रिचार्ज कर दे?"
          },
          {
            "speaker": "Renu",
            "textEn": "Yes, you can configure an automated top-up standing instruction via our municipal transit mobile portal anytime.",
            "textHi": "हाँ, आप हमारे आधिकारिक मोबाइल पोर्टल पर जाकर कभी भी ऑटो-टॉप-अप की सुविधा सक्रिय कर सकते हैं।"
          },
          {
            "speaker": "Tarun",
            "textEn": "Does this single smart card also work on the suburban electric commuter trains and harbor ferry vessels?",
            "textHi": "क्या यह एकल स्मार्ट कार्ड उपनगरीय लोकल ट्रेनों और हार्बर नौका सेवाओं पर भी काम करता है?"
          },
          {
            "speaker": "Renu",
            "textEn": "Yes, it complies with the National Common Mobility Card standard, functioning across all unified urban transit systems statewide.",
            "textHi": "हाँ, यह नेशनल मोबिलिटी कार्ड मानक के अनुरूप है और राज्य भर के सभी सार्वजनिक परिवहन में काम करता है।"
          },
          {
            "speaker": "Tarun",
            "textEn": "Which gate should I use to exit toward the tech park shuttle boarding area?",
            "textHi": "टेक पार्क शटल बस पकड़ने के लिए मुझे किस निकास गेट का उपयोग करना चाहिए?"
          },
          {
            "speaker": "Renu",
            "textEn": "Exit through gate three on the north concourse; the shuttle feeder bays are situated immediately outside.",
            "textHi": "उत्तरी कॉनकोर्स के गेट 3 से बाहर निकलें; शटल बस का स्टॉप ठीक बाहर स्थित है।"
          },
          {
            "speaker": "Tarun",
            "textEn": "Thank you for resolving this issue so swiftly and professionally, Renu.",
            "textHi": "इस समस्या को इतनी तेजी और कुशलता से हल करने के लिए धन्यवाद, रेनू।"
          }
        ]
      },
      {
        "id": "d42_sc05",
        "title": "Requesting Real-Time Roadwork Detour Advice from a Traffic Enforcement Officer",
        "context": "Delivery driver Farhan consults Traffic Police Sub-Inspector Chauhan at a barricaded roadwork intersection.",
        "situation": "Urban intersection traffic diversion checkpoint",
        "speakers": [
          "Farhan",
          "SI Chauhan"
        ],
        "turns": [
          {
            "speaker": "Farhan",
            "textEn": "Officer Chauhan, good afternoon. I see the main underpass to Industrial Zone Sector 4 is barricaded with detour signs.",
            "textHi": "अधिकारी चौहान, शुभ दोपहर। मैं देख रहा हूँ कि इंडस्ट्रियल जोन सेक्टर 4 की ओर जाने वाला मुख्य अंडरपास बैरिकेड से बंद है।"
          },
          {
            "speaker": "SI Chauhan",
            "textEn": "Good afternoon. Heavy water main replacement and utility trenching have necessitated a complete twenty-four-hour vehicular closure.",
            "textHi": "शुभ दोपहर। पानी की मुख्य पाइपलाइन बदलने और खुदाई के काम के कारण इस रास्ते को चौबीस घंटे के लिए पूरी तरह बंद किया गया है।"
          },
          {
            "speaker": "Farhan",
            "textEn": "I am operating a medium commercial refrigerated van carrying time-sensitive pharmaceutical supplies; what is the quickest alternate freight corridor?",
            "textHi": "मैं एक मध्यम वाणिज्यिक रेफ्रिजरेटेड वैन चला रहा हूँ जिसमें जरूरी दवाइयां हैं; सबसे तेज़ वैकल्पिक मालवाहक रास्ता कौन सा है?"
          },
          {
            "speaker": "SI Chauhan",
            "textEn": "Commercial vehicles exceeding three tons are diverted along Outer Ring Expressway Bypass rather than local residential collector roads.",
            "textHi": "तीन टन से अधिक के व्यावसायिक वाहनों को स्थानीय कॉलोनियों की सड़कों के बजाय आउटर रिंग एक्सप्रेसवे बाईपास पर डायवर्ट किया गया है।"
          },
          {
            "speaker": "Farhan",
            "textEn": "How do I access that expressway bypass from this junction without violating one-way traffic regulations?",
            "textHi": "वन-वे यातायात नियमों का उल्लंघन किए बिना मैं इस चौराहे से उस एक्सप्रेसवे बाईपास तक कैसे पहुँच सकता हूँ?"
          },
          {
            "speaker": "SI Chauhan",
            "textEn": "Take an immediate left onto Canal Ring Road, proceed past the railway overbridge, and enter the expressway ramp at slip gate seven.",
            "textHi": "नहर वाली सड़क पर तुरंत बाएं मुड़ें, रेलवे ओवरब्रिज पार करें और स्लिप गेट नंबर 7 से एक्सप्रेसवे के रैंप में प्रवेश करें।"
          },
          {
            "speaker": "Farhan",
            "textEn": "Is there any low-clearance railway bridge along that canal route that could impede my three-point-two-meter van height?",
            "textHi": "क्या उस नहर वाले रास्ते पर कोई कम ऊंचाई वाला रेलवे पुल है जो मेरी 3.2 मीटर ऊंची वैन को रोक सकता है?"
          },
          {
            "speaker": "SI Chauhan",
            "textEn": "No, the canal overpass clearance is certified at four-point-five meters, accommodating standard commercial container vehicles easily.",
            "textHi": "नहीं, नहर के ओवरपास की ऊंचाई 4.5 मीटर प्रमाणित है, जिससे मानक कंटेनर वाहन आसानी से निकल जाते हैं।"
          },
          {
            "speaker": "Farhan",
            "textEn": "Will I encounter heavy congestion near the freight distribution toll plaza?",
            "textHi": "क्या मुझे फ्रेट टोल प्लाजा के पास भारी ट्रैफिक जाम का सामना करना पड़ेगा?"
          },
          {
            "speaker": "SI Chauhan",
            "textEn": "Toll lanes one through four are dedicated automated electronic toll collection lanes, ensuring zero wait time for tagged commercial fleets.",
            "textHi": "टोल लेन एक से चार समर्पित इलेक्ट्रॉनिक फास्टैग लेन हैं, जिससे टैग वाले वाहनों के लिए रुकने की बिल्कुल जरूरत नहीं होती।"
          },
          {
            "speaker": "Farhan",
            "textEn": "What is the speed limit on that expressway bypass corridor?",
            "textHi": "उस एक्सप्रेसवे बाईपास मार्ग पर अधिकतम गति सीमा क्या है?"
          },
          {
            "speaker": "SI Chauhan",
            "textEn": "The commercial vehicle speed limit is capped at sixty-five kilometers per hour, enforced by automated speed cameras.",
            "textHi": "व्यावसायिक वाहनों के लिए गति सीमा 65 किमी प्रति घंटा निर्धारित है, जिस पर स्वचालित कैमरों से नजर रखी जाती है।"
          },
          {
            "speaker": "Farhan",
            "textEn": "How long will this temporary roadwork detour remain active?",
            "textHi": "सड़क निर्माण का यह अस्थायी डायवर्जन कब तक लागू रहेगा?"
          },
          {
            "speaker": "SI Chauhan",
            "textEn": "The civil engineering department projects the underpass will reopen to general traffic by six tomorrow morning.",
            "textHi": "शहरी विकास विभाग का अनुमान है कि अंडरपास कल सुबह छह बजे तक सामान्य यातायात के लिए फिर से खोल दिया जाएगा।"
          },
          {
            "speaker": "Farhan",
            "textEn": "Are hazardous goods transport permits required for the alternate expressway route?",
            "textHi": "क्या वैकल्पिक एक्सप्रेसवे मार्ग के लिए खतरनाक सामग्री परिवहन परमिट की आवश्यकता है?"
          },
          {
            "speaker": "SI Chauhan",
            "textEn": "Standard temperature-controlled pharmaceuticals require only your standard bill of lading and transit consignment note.",
            "textHi": "मानक तापमान-नियंत्रित दवाओं के लिए केवल आपकी मानक ई-वे बिल और माल भाड़ा रसीद पर्याप्त है।"
          },
          {
            "speaker": "Farhan",
            "textEn": "I appreciate the precise routing guidance and safety advice, Officer.",
            "textHi": "सटीक रास्ते के मार्गदर्शन और सुरक्षा सलाह के लिए मैं आपका आभारी हूँ, अधिकारी महोदय।"
          },
          {
            "speaker": "SI Chauhan",
            "textEn": "Drive safely, maintain safe braking distances, and secure your cargo Farhan.",
            "textHi": "सुरक्षित गाड़ी चलाएं, उचित दूरी बनाए रखें और अपने सामान की सुरक्षा का ध्यान रखें, फरहान।"
          },
          {
            "speaker": "Farhan",
            "textEn": "Understood. Thank you and have a productive shift!",
            "textHi": "समझ गया। धन्यवाद और आपकी ड्यूटी शुभ हो!"
          },
          {
            "speaker": "SI Chauhan",
            "textEn": "Safe journey ahead!",
            "textHi": "आपकी यात्रा मंगलमय हो!"
          }
        ]
      },
      {
        "id": "d42_sc06",
        "title": "Coordinating an Accessible Wheelchair Route and Elevator Transfers at a High-Speed Railway Hub",
        "context": "Passenger Assistant Dev facilitates step-free mobility for traveler Gita and her elderly father at a multi-tier railway terminal.",
        "situation": "Railway concourse accessibility coordination",
        "speakers": [
          "Dev",
          "Gita"
        ],
        "turns": [
          {
            "speaker": "Dev",
            "textEn": "Good morning Ma’am. I am Dev from Passenger Accessibility Services. How may I assist your family today?",
            "textHi": "शुभ प्रभात मैडम। मैं यात्री सुगमता सेवा से देव हूँ। आज मैं आपके परिवार की किस प्रकार सहायता कर सकता हूँ?"
          },
          {
            "speaker": "Gita",
            "textEn": "Good morning Dev. My father uses an electric wheelchair, and we need to reach platform twelve for the superfast train without encountering staircases.",
            "textHi": "शुभ प्रभात देव। मेरे पिता इलेक्ट्रिक व्हीलचेयर का उपयोग करते हैं, और हमें बिना सीढ़ियों के सुपरफास्ट ट्रेन के लिए प्लेटफॉर्म 12 तक पहुँचना है।"
          },
          {
            "speaker": "Dev",
            "textEn": "You are in good hands. We have a completely barrier-free step-free transit pathway equipped with high-capacity braille elevators.",
            "textHi": "आप सुरक्षित हाथों में हैं। हमारे पास पूरी तरह बाधा-मुक्त रास्ता है जो ब्रेल लिपि वाली लिफ्टों से सुसज्जित है।"
          },
          {
            "speaker": "Gita",
            "textEn": "Is there a ramp leading down from the main taxi drop-off concourse to the security baggage scanner?",
            "textHi": "क्या मुख्य टैक्सी ड्रॉप-ऑफ क्षेत्र से सुरक्षा स्कैनर तक जाने के लिए रैंप बना हुआ है?"
          },
          {
            "speaker": "Dev",
            "textEn": "Yes, ramp A has a gentle one-in-twelve gradient with tactile paving and continuous double stainless-steel handrails.",
            "textHi": "हाँ, रैंप A में एक-में-बारह का सुगम ढलान, स्पर्शनीय टाइलें और दोहरी स्टील रेलिंग लगी है।"
          },
          {
            "speaker": "Gita",
            "textEn": "Does the security screening gate have an extra-wide lane for motorized wheelchairs?",
            "textHi": "क्या सुरक्षा जांच गेट पर मोटर चालित व्हीलचेयर के लिए अतिरिक्त चौड़ी लेन उपलब्ध है?"
          },
          {
            "speaker": "Dev",
            "textEn": "Lane one is our dedicated accessible portal featuring non-invasive handheld sensor screening.",
            "textHi": "लेन नंबर एक हमारा समर्पित सुगम मार्ग है जहाँ बिना किसी असुविधा के हैंडहेल्ड सेंसर से जांच की जाती है।"
          },
          {
            "speaker": "Gita",
            "textEn": "Which elevator will take us directly to platform level twelve?",
            "textHi": "कौन सी लिफ्ट हमें सीधे प्लेटफॉर्म नंबर बारह पर ले जाएगी?"
          },
          {
            "speaker": "Dev",
            "textEn": "Elevator number four on the central spine connects concourse level one directly to the platform twelve waiting bay.",
            "textHi": "मुख्य गलियारे की लिफ्ट नंबर चार कॉनकोर्स से सीधे प्लेटफॉर्म 12 के प्रतीक्षालय को जोड़ती है।"
          },
          {
            "speaker": "Gita",
            "textEn": "Is the platform edge equipped with tactile warning pavers and safety barrier fences?",
            "textHi": "क्या प्लेटफॉर्म के किनारे पर चेतावनी देने वाली स्पर्शनीय टाइलें और सुरक्षा रेलिंग लगी हैं?"
          },
          {
            "speaker": "Dev",
            "textEn": "Yes, yellow tactile blister tiles run the full four-hundred-meter platform length to warn visually impaired passengers.",
            "textHi": "हाँ, दृष्टिबाधित यात्रियों को सचेत करने के लिए पूरे चार सौ मीटर प्लेटफॉर्म पर पीली उभरी हुई टाइलें लगी हैं।"
          },
          {
            "speaker": "Gita",
            "textEn": "How will my father board the train coach if there is a vertical gap between the train floor and the platform?",
            "textHi": "यदि ट्रेन के फर्श और प्लेटफॉर्म के बीच अंतर है, तो मेरे पिता बोगी में कैसे चढ़ेंगे?"
          },
          {
            "speaker": "Dev",
            "textEn": "Our on-board train manager deploys a certified portable aluminum bridging ramp for smooth roll-on access.",
            "textHi": "हमारे ट्रेन प्रबंधक आसानी से चढ़ने के लिए एक पोर्टेबल एल्यूमीनियम रैंप लगाते हैं।"
          },
          {
            "speaker": "Gita",
            "textEn": "Does coach H1 have designated wheelchair restraint positions and an accessible universal lavatory?",
            "textHi": "क्या कोच H1 में व्हीलचेयर लॉक करने की जगह और सुलभ शौचालय उपलब्ध है?"
          },
          {
            "speaker": "Dev",
            "textEn": "Yes, coach H1 features two dedicated wheelchair anchor stations with power-charging outlets and a sliding-door universal restroom.",
            "textHi": "हाँ, कोच H1 में चार्जिंग पॉइंट के साथ दो व्हीलचेयर स्लॉट और स्लाइडिंग दरवाजे वाला बड़ा शौचालय है।"
          },
          {
            "speaker": "Gita",
            "textEn": "Will accessibility staff be notified at our destination terminal in Mumbai to assist with de-boarding?",
            "textHi": "क्या हमारे गंतव्य स्टेशन मुंबई में भी उतरने में मदद के लिए सुगमता कर्मचारियों को सूचित किया जाएगा?"
          },
          {
            "speaker": "Dev",
            "textEn": "I will log your coach and seat number into our national railway transit portal so Mumbai accessibility marshals will meet you at the door.",
            "textHi": "मैं राष्ट्रीय पोर्टल पर आपकी सीट संख्या दर्ज कर दूँगा ताकि मुंबई पहुँचने पर सहायक कर्मचारी बोगी के दरवाजे पर तैयार मिलें।"
          },
          {
            "speaker": "Gita",
            "textEn": "That level of thoughtful care gives my father and me tremendous peace of mind.",
            "textHi": "इस तरह की विचारशील देखभाल से मुझे और मेरे पिता को बहुत सुकून मिलता है।"
          },
          {
            "speaker": "Dev",
            "textEn": "Ensuring dignity, comfort, and safety for every passenger is our foremost commitment.",
            "textHi": "हर यात्री के लिए सम्मान, सुविधा और सुरक्षा सुनिश्चित करना हमारी सर्वोच्च प्राथमिकता है।"
          },
          {
            "speaker": "Gita",
            "textEn": "Thank you so very much, Dev. You are exemplary in your duties.",
            "textHi": "बहुत-बहुत धन्यवाद, देव। आप अपने कर्तव्यों में अनुकरणीय हैं।"
          },
          {
            "speaker": "Dev",
            "textEn": "It is an absolute honor. Wishing you and your father a serene and wonderful train journey!",
            "textHi": "यह मेरे लिए सम्मान की बात है। आपको और आपके पिताजी को सुखद और मंगलमय यात्रा की शुभकामनाएं!"
          }
        ]
      },
      {
        "id": "d42_sc07",
        "title": "Reporting Lost Property on an Intercity Electric Commuter Train",
        "context": "Passenger Mohit reports a misplaced laptop bag at the Central Station Lost and Found Office with Officer Shweta.",
        "situation": "Railway station lost property desk inquiry",
        "speakers": [
          "Mohit",
          "Shweta"
        ],
        "turns": [
          {
            "speaker": "Mohit",
            "textEn": "Good evening Officer Shweta. I inadvertently left my black ballistic nylon laptop briefcase on the 5:15 express train from Pune.",
            "textHi": "शुभ संध्या अधिकारी श्वेता। मैं गलती से पुणे से आने वाली 5:15 की एक्सप्रेस ट्रेन में अपना काला लैपटॉप बैग भूल गया हूँ।"
          },
          {
            "speaker": "Shweta",
            "textEn": "Do not panic, Mohit. Let us systematically document the details. What was your train number, coach, and seat designation?",
            "textHi": "घबराइए नहीं, मोहित। आइए व्यवस्थित रूप से विवरण दर्ज करें। आपकी ट्रेन संख्या, कोच और सीट संख्या क्या थी?"
          },
          {
            "speaker": "Mohit",
            "textEn": "It was Train 12128, Coach C2, Seat 45, situated on the upper luggage rack directly above the seat.",
            "textHi": "यह ट्रेन 12128, कोच C2, सीट 45 थी, और बैग सीट के ठीक ऊपर सामान रखने वाले रैक पर था।"
          },
          {
            "speaker": "Shweta",
            "textEn": "Can you describe the bag’s distinguishing physical characteristics and exact contents?",
            "textHi": "क्या आप बैग की पहचान और उसमें मौजूद सटीक सामान का विवरण दे सकते हैं?"
          },
          {
            "speaker": "Mohit",
            "textEn": "It is a dark grey water-resistant briefcase with a silver metal clasp, containing a fifteen-inch laptop, my national passport, and blue noise-canceling headphones.",
            "textHi": "यह चांदी के बकल वाला गहरे भूरे रंग का वाटरप्रूफ बैग है, जिसमें 15 इंच का लैपटॉप, मेरा पासपोर्ट और नीले हेडफोन हैं।"
          },
          {
            "speaker": "Shweta",
            "textEn": "Did you lock the main zipper compartment with a padlock or combination lock?",
            "textHi": "क्या आपने मुख्य ज़िप को किसी ताले या कोड लॉक से बंद किया था?"
          },
          {
            "speaker": "Mohit",
            "textEn": "Yes, it is secured with a three-digit combination lock set to four-eight-two.",
            "textHi": "हाँ, यह 4-8-2 कोड वाले तीन अंकों के नंबर लॉक से सुरक्षित है।"
          },
          {
            "speaker": "Shweta",
            "textEn": "I am contacting the train rake cleaning marshal at the terminal yard who just completed post-trip coach sanitization.",
            "textHi": "मैं यार्ड में ट्रेन की सफाई करने वाले सुपरवाइजर से संपर्क कर रही हूँ, जिन्होंने अभी-अभी सफाई पूरी की है।"
          },
          {
            "speaker": "Mohit",
            "textEn": "Have any items recovered from Coach C2 been logged in the digital repository system?",
            "textHi": "क्या कोच C2 से बरामद कोई भी सामान डिजिटल सिस्टम में दर्ज हुआ है?"
          },
          {
            "speaker": "Shweta",
            "textEn": "Yes! Cleaning Marshal Ramesh just deposited a grey briefcase matching your exact description at the yard security office.",
            "textHi": "हाँ! सफाई सुपरवाइजर रमेश ने अभी-अभी यार्ड सुरक्षा कार्यालय में आपके विवरण से मेल खाता एक बैग जमा कराया है।"
          },
          {
            "speaker": "Mohit",
            "textEn": "What a profound relief! How soon will the bag be transferred here to the main concourse desk?",
            "textHi": "यह कितनी बड़ी राहत की बात है! वह बैग यहाँ मुख्य स्टेशन काउंटर पर कितनी देर में लाया जाएगा?"
          },
          {
            "speaker": "Shweta",
            "textEn": "The security courier brings all recovered items to this desk every thirty minutes; it should arrive by 6:45 PM.",
            "textHi": "सुरक्षा कर्मी हर तीस मिनट में बरामद सामान यहाँ लाते हैं; यह शाम 6:45 तक यहाँ पहुँच जाएगा।"
          },
          {
            "speaker": "Mohit",
            "textEn": "What official identification and ownership proof will I need to present for release?",
            "textHi": "सामान वापस लेने के लिए मुझे क्या पहचान पत्र और स्वामित्व प्रमाण दिखाना होगा?"
          },
          {
            "speaker": "Shweta",
            "textEn": "You will need your original train travel e-ticket, government photo identification, and the device serial number or password verification upon opening.",
            "textHi": "आपको अपना मूल ट्रेन ई-टिकट, सरकारी पहचान पत्र और खोलने पर लैपटॉप का पासवर्ड डालकर दिखाना होगा।"
          },
          {
            "speaker": "Mohit",
            "textEn": "I have my digital train ticket on my mobile phone and my driver’s license in my wallet.",
            "textHi": "मेरे मोबाइल में ट्रेन टिकट और पर्स में ड्राइविंग लाइसेंस मौजूद है।"
          },
          {
            "speaker": "Shweta",
            "textEn": "Please fill out this lost property retrieval claim form while we await the security transit pouch.",
            "textHi": "जब तक सामान आता है, कृपया यह सामान प्राप्ति दावा फॉर्म भर दीजिए।"
          },
          {
            "speaker": "Mohit",
            "textEn": "I have filled and signed all sections of the claim docket.",
            "textHi": "मैंने फॉर्म के सभी कॉलम भरकर हस्ताक्षर कर दिए हैं।"
          },
          {
            "speaker": "Shweta",
            "textEn": "Here is the security parcel right on time. Please enter the combination code to verify ownership.",
            "textHi": "यह देखिए, सुरक्षा पार्सल समय पर आ गया। स्वामित्व की पुष्टि के लिए कृपया लॉक का कोड खोलें।"
          },
          {
            "speaker": "Mohit",
            "textEn": "The lock opened instantly; every single document and the laptop are completely intact!",
            "textHi": "ताला तुरंत खुल गया; सारे दस्तावेज और लैपटॉप पूरी तरह सुरक्षित हैं!"
          },
          {
            "speaker": "Shweta",
            "textEn": "Please sign the final release register. We are delighted to restore your valuable belongings.",
            "textHi": "कृपया अंतिम प्राप्ति रजिस्टर पर हस्ताक्षर कर दीजिए। आपका कीमती सामान लौटाकर हमें बहुत खुशी हुई।"
          }
        ]
      },
      {
        "id": "d42_sc08",
        "title": "Renting a Shared Electric Bicycle and Navigating Dedicated Bike Corridors",
        "context": "Urban commuter Nikhil learns how to unlock an app-based electric bicycle and navigate protected bike lanes with Mobility Coordinator Tanvi.",
        "situation": "Smart mobility bicycle docking station kiosk",
        "speakers": [
          "Nikhil",
          "Tanvi"
        ],
        "turns": [
          {
            "speaker": "Nikhil",
            "textEn": "Hello Tanvi. I want to try using these public shared electric bicycles for my daily last-mile commute from the metro.",
            "textHi": "नमस्ते तन्वी। मैं मेट्रो से अपने ऑफिस तक की अंतिम दूरी के लिए इन सार्वजनिक ई-साइकिलों का उपयोग करना चाहता हूँ।"
          },
          {
            "speaker": "Tanvi",
            "textEn": "Welcome Nikhil! Our smart micro-mobility network offers pedal-assist e-bikes accessible across sixty docking stations citywide.",
            "textHi": "स्वागत है निखिल! हमारा स्मार्ट मोबिलिटी नेटवर्क पूरे शहर के साठ स्टेशनों पर पैडल-असिस्ट ई-साइकिलें प्रदान करता है।"
          },
          {
            "speaker": "Nikhil",
            "textEn": "How do I unlock a bicycle from the motorized docking pylon?",
            "textHi": "डॉकिंग स्टैंड से साइकिल को कैसे अनलॉक किया जाता है?"
          },
          {
            "speaker": "Tanvi",
            "textEn": "Download our municipal bike-share application, create an account, and scan the QR code located between the handlebars.",
            "textHi": "हमारा म्यूनिसिपल बाइक-शेयर ऐप डाउनलोड करें, खाता बनाएं और हैंडल पर लगा क्यूआर कोड स्कैन करें।"
          },
          {
            "speaker": "Nikhil",
            "textEn": "What is the pricing structure for short thirty-minute point-to-point journeys?",
            "textHi": "तीस मिनट की छोटी यात्राओं के लिए शुल्क संरचना क्या है?"
          },
          {
            "speaker": "Tanvi",
            "textEn": "The first thirty minutes cost only fifteen rupees, with a nominal five rupees charged for each subsequent fifteen-minute interval.",
            "textHi": "पहले तीस मिनट का किराया केवल पंद्रह रुपये है, और उसके बाद प्रत्येक पंद्रह मिनट के लिए मात्र पांच रुपये लगते हैं।"
          },
          {
            "speaker": "Nikhil",
            "textEn": "What is the maximum assisted speed of the electric hub motor?",
            "textHi": "इलेक्ट्रिक मोटर की अधिकतम गति सीमा कितनी है?"
          },
          {
            "speaker": "Tanvi",
            "textEn": "The electric motor provides smooth pedal-assist acceleration up to twenty-five kilometers per hour, complying with municipal safety standards.",
            "textHi": "इलेक्ट्रिक मोटर 25 किमी प्रति घंटे तक की गति देती है, जो सुरक्षा मानकों के पूर्णतः अनुकूल है।"
          },
          {
            "speaker": "Nikhil",
            "textEn": "Are there protected green bicycle lanes connecting this station to the Technology Park?",
            "textHi": "क्या इस स्टेशन से टेक पार्क को जोड़ने वाली कोई सुरक्षित ग्रीन साइकिल लेन है?"
          },
          {
            "speaker": "Tanvi",
            "textEn": "Yes, follow the green thermoplastic-paved bicycle track along Nehru Boulevard; it is physically segregated from motor vehicular traffic by bollards.",
            "textHi": "हाँ, नेहरू बुलेवार्ड पर बनी हरी साइकिल लेन का पालन करें; यह डिवाइडर और पोल द्वारा मुख्य ट्रैफिक से पूरी तरह अलग है।"
          },
          {
            "speaker": "Nikhil",
            "textEn": "Do the bicycles come equipped with automatic LED headlights and taillights for night riding?",
            "textHi": "क्या रात में चलाने के लिए साइकिल में ऑटोमैटिक एलईडी हेडलाइट और बैकलाइट लगी हैं?"
          },
          {
            "speaker": "Tanvi",
            "textEn": "Yes, integrated dynamo and solar-powered headlights activate automatically at dusk, along with reflective side wheel bands.",
            "textHi": "हाँ, शाम होते ही हेडलाइट अपने आप चालू हो जाती है और पहियों पर चमकने वाले रिफ्लेक्टर लगे हैं।"
          },
          {
            "speaker": "Nikhil",
            "textEn": "What happens if the battery runs out of charge midway through my journey?",
            "textHi": "यदि यात्रा के बीच में बैटरी समाप्त हो जाए तो क्या होगा?"
          },
          {
            "speaker": "Tanvi",
            "textEn": "The lightweight step-through frame pedals just like a conventional bicycle, and you can swap it at any intermediate docking hub.",
            "textHi": "हल्का फ्रेम होने के कारण इसे सामान्य साइकिल की तरह चलाया जा सकता है, और आप किसी भी स्टेशन पर इसे बदल सकते हैं।"
          },
          {
            "speaker": "Nikhil",
            "textEn": "Where can I park and lock the bicycle once I reach my destination building?",
            "textHi": "अपने गंतव्य पर पहुँचने के बाद मैं साइकिल को कहाँ पार्क और लॉक कर सकता हूँ?"
          },
          {
            "speaker": "Tanvi",
            "textEn": "Simply slide the front wheel into any available dock at station twenty-two outside Tech Park Gate One until you hear the confirmation chime.",
            "textHi": "टेक पार्क गेट एक के बाहर स्टेशन 22 पर किसी भी खाली स्टैंड में अगला पहिया लगाएं जब तक कि बीप की आवाज न आए।"
          },
          {
            "speaker": "Nikhil",
            "textEn": "Does the mobile app automatically end the rental session and generate a digital receipt?",
            "textHi": "क्या ऐप अपने आप किराए का सत्र समाप्त करके डिजिटल रसीद जारी कर देता है?"
          },
          {
            "speaker": "Tanvi",
            "textEn": "Instantly. You will receive an SMS and in-app trip summary detailing distance traveled, calories burned, and carbon emissions offset.",
            "textHi": "तुरंत। आपको यात्रा की दूरी, खर्च की गई कैलोरी और बचाए गए कार्बन उत्सर्जन का पूरा विवरण मिल जाएगा।"
          },
          {
            "speaker": "Nikhil",
            "textEn": "I have just unlocked bicycle number 418; the adjustable saddle height feels very comfortable.",
            "textHi": "मैंने साइकिल नंबर 418 अनलॉक कर ली है; सीट की ऊंचाई बहुत आरामदायक है।"
          },
          {
            "speaker": "Tanvi",
            "textEn": "Remember to buckle your safety helmet, adhere to dedicated cycling signals, and enjoy your green commute!",
            "textHi": "हेलमेट पहनना याद रखें, साइकिल ट्रैफिक लाइट का पालन करें और अपनी पर्यावरण-अनुकूल यात्रा का आनंद लें!"
          },
          {
            "speaker": "Nikhil",
            "textEn": "Thank you for the wonderful introduction, Tanvi. Have a great day!",
            "textHi": "इतनी अच्छी जानकारी के लिए धन्यवाद, तन्वी। आपका दिन शुभ हो!"
          }
        ]
      },
      {
        "id": "d42_sc09",
        "title": "Navigating an Airport Express Metro and International Terminal Check-In Transfer",
        "context": "International traveler Rahul interacts with Airport Express Line Attendant Kavita regarding in-city luggage check-in and transit timelines.",
        "situation": "Airport Express Metro Terminal check-in concourse",
        "speakers": [
          "Rahul",
          "Kavita"
        ],
        "turns": [
          {
            "speaker": "Rahul",
            "textEn": "Good morning Kavita. Can I check in my baggage for an international flight directly here at this city metro station?",
            "textHi": "शुभ प्रभात कविता। क्या मैं इस सिटी मेट्रो स्टेशन से ही अपनी अंतरराष्ट्रीय उड़ान के लिए सामान चेक-इन कर सकता हूँ?"
          },
          {
            "speaker": "Kavita",
            "textEn": "Good morning Rahul. Yes, our City Air Terminal facility offers seamless baggage check-in and boarding pass issuance for participating international airlines.",
            "textHi": "शुभ प्रभात राहुल। हाँ, हमारी सिटी एयर टर्मिनल सुविधा प्रमुख अंतरराष्ट्रीय एयरलाइनों के लिए बैगेज चेक-इन और बोर्डिंग पास जारी करने की सुविधा देती है।"
          },
          {
            "speaker": "Rahul",
            "textEn": "My flight with Singapore Airlines departs at two this afternoon; am I within the permitted check-in window?",
            "textHi": "मेरी सिंगापुर एयरलाइंस की उड़ान दोपहर दो बजे है; क्या मैं निर्धारित चेक-इन समय सीमा के भीतर हूँ?"
          },
          {
            "speaker": "Kavita",
            "textEn": "Yes, city baggage check-in is permitted between six hours and two hours prior to scheduled flight departure.",
            "textHi": "हाँ, उड़ान के प्रस्थान से छह घंटे पहले से लेकर दो घंटे पहले तक शहर में बैगेज चेक-इन की अनुमति है।"
          },
          {
            "speaker": "Rahul",
            "textEn": "Here are my passport, visa documentation, and electronic ticket confirmation.",
            "textHi": "यह रहे मेरे पासपोर्ट, वीजा दस्तावेज और इलेक्ट्रॉनिक टिकट की पुष्टि।"
          },
          {
            "speaker": "Kavita",
            "textEn": "Thank you. Please place your two checked suitcases on the automated weighing scale and tag scanner.",
            "textHi": "धन्यवाद। कृपया अपने दोनों सूटकेस वजन करने वाली मशीन और टैग स्कैनर पर रखें।"
          },
          {
            "speaker": "Rahul",
            "textEn": "Do these bags travel directly to my final destination airport in Singapore without intermediate handling by me?",
            "textHi": "क्या ये बैग बीच में मुझे संभाले बिना सीधे सिंगापुर में मेरे अंतिम गंतव्य तक पहुँचेंगे?"
          },
          {
            "speaker": "Kavita",
            "textEn": "Yes, your baggage is scanned, barcoded, sealed in secure containers, and transferred straight to aircraft cargo holds.",
            "textHi": "हाँ, आपके सामान को स्कैन करके सुरक्षित बक्सों में सील कर सीधे विमान के कार्गो में भेज दिया जाता है।"
          },
          {
            "speaker": "Rahul",
            "textEn": "Here are my boarding passes and baggage claim receipts; how long does the Airport Express train take to reach Terminal 3?",
            "textHi": "यह रहे मेरे बोर्डिंग पास और सामान की रसीदें; एयरपोर्ट एक्सप्रेस ट्रेन को टर्मिनल 3 तक पहुँचने में कितना समय लगता है?"
          },
          {
            "speaker": "Kavita",
            "textEn": "The non-stop dedicated Airport Express reaches Terminal 3 in nineteen minutes, traveling at one hundred and thirty kilometers per hour.",
            "textHi": "नॉन-स्टॉप एयरपोर्ट एक्सप्रेस 130 किमी प्रति घंटे की गति से चलकर मात्र उन्नीस मिनट में टर्मिनल 3 पहुँचती है।"
          },
          {
            "speaker": "Rahul",
            "textEn": "From which platform does the next airport express train depart?",
            "textHi": "अगली एयरपोर्ट ट्रेन किस प्लेटफॉर्म से रवाना हो रही है?"
          },
          {
            "speaker": "Kavita",
            "textEn": "Platform one, departing in four minutes. Trains run continuously at ten-minute intervals throughout the day.",
            "textHi": "प्लेटफॉर्म नंबर एक से, जो चार मिनट में रवाना होगी। ट्रेनें दिन भर हर दस मिनट के अंतराल पर चलती हैं।"
          },
          {
            "speaker": "Rahul",
            "textEn": "Does the metro station at the airport connect directly to the departures security gate concourse?",
            "textHi": "क्या हवाई अड्डे का मेट्रो स्टेशन सीधे प्रस्थान सुरक्षा जांच क्षेत्र से जुड़ा है?"
          },
          {
            "speaker": "Kavita",
            "textEn": "Yes, an air-conditioned skybridge with high-speed travelators connects the metro concourse directly to terminal departures check-in island D.",
            "textHi": "हाँ, एक वातानुकूलित स्काईब्रिज मेट्रो स्टेशन को सीधे टर्मिनल डिपार्चर चेक-इन क्षेत्र से जोड़ता है।"
          },
          {
            "speaker": "Rahul",
            "textEn": "Can I carry this standard cabin roller bag aboard the express train coach?",
            "textHi": "क्या मैं यह केबिन बैग एक्सप्रेस ट्रेन के डिब्बे में साथ ले जा सकता हूँ?"
          },
          {
            "speaker": "Kavita",
            "textEn": "Certainly; every coach features spacious overhead racks and dedicated luggage bays beside passenger doors.",
            "textHi": "बिल्कुल; हर कोच में ऊपर सामान रखने के रैक और दरवाजों के पास बड़े बैगेज रैक बने हैं।"
          },
          {
            "speaker": "Rahul",
            "textEn": "Is complimentary high-speed Wi-Fi available on board the train carriages?",
            "textHi": "क्या ट्रेन की बोगियों में मुफ्त हाई-स्पीड वाई-फाई की सुविधा उपलब्ध है?"
          },
          {
            "speaker": "Kavita",
            "textEn": "Yes, connect to the Metro-Express-Free network using your mobile phone OTP verification.",
            "textHi": "हाँ, मोबाइल ओटीपी सत्यापन के जरिए आप मुफ्त वाई-फाई नेटवर्क से जुड़ सकते हैं।"
          },
          {
            "speaker": "Rahul",
            "textEn": "Checking my baggage in the city center has eliminated all airport stress. Thank you so much, Kavita!",
            "textHi": "शहर के केंद्र में ही सामान चेक-इन करने से हवाई अड्डे का सारा तनाव खत्म हो गया। बहुत धन्यवाद, कविता!"
          },
          {
            "speaker": "Kavita",
            "textEn": "We are delighted to serve you, Rahul. Have a safe and pleasant flight to Singapore!",
            "textHi": "आपकी सेवा करके हमें खुशी हुई, राहुल। सिंगापुर के लिए आपकी यात्रा सुखद और सुरक्षित हो!"
          },
          {
            "speaker": "Rahul",
            "textEn": "Thank you and have a wonderful day!",
            "textHi": "धन्यवाद और आपका दिन शुभ हो!"
          }
        ]
      },
      {
        "id": "d42_sc10",
        "title": "Planning an Eco-Friendly Carpool and High-Occupancy Toll Lane Commute Across Ring Roads",
        "context": "Colleagues Aditya and Sameer plan a sustainable four-person corporate carpool route utilizing High-Occupancy Vehicle (HOV) lanes.",
        "situation": "Corporate office cafeteria commute planning session",
        "speakers": [
          "Aditya",
          "Sameer"
        ],
        "turns": [
          {
            "speaker": "Aditya",
            "textEn": "Sameer, our daily solo driving commute along the Eastern Peripheral Expressway is becoming unsustainable due to rising fuel costs and congestion.",
            "textHi": "समीर, पेट्रोल के बढ़ते खर्च और भारी जाम के कारण ईस्टर्न पेरिफेरल एक्सप्रेसवे पर अकेले गाड़ी चलाना अब बहुत भारी पड़ रहा है।"
          },
          {
            "speaker": "Sameer",
            "textEn": "I agree completely, Aditya. If we organize a four-person corporate carpool with Priya and Vikram, we can utilize the designated High-Occupancy Vehicle lanes.",
            "textHi": "मैं पूरी तरह सहमत हूँ, आदित्य। यदि हम प्रिया और विक्रम के साथ चार लोगों का कारपूल बना लें, तो हम एक्सप्रेसवे की समर्पित कारपूल (HOV) लेन का उपयोग कर सकते हैं।"
          },
          {
            "speaker": "Aditya",
            "textEn": "What are the travel time savings associated with the high-occupancy toll lanes during peak morning hours?",
            "textHi": "सुबह के व्यस्त समय में हाई-ऑक्यूपेंसी लेन का उपयोग करने से कितने समय की बचत होगी?"
          },
          {
            "speaker": "Sameer",
            "textEn": "HOV lanes maintain a minimum flow speed of eighty kilometers per hour, cutting our commute time from seventy-five minutes down to thirty-five minutes.",
            "textHi": "कारपूल लेन में 80 किमी प्रति घंटे की गति बनी रहती है, जिससे हमारा सफर 75 मिनट से घटकर मात्र 35 मिनट रह जाएगा।"
          },
          {
            "speaker": "Aditya",
            "textEn": "What is the optimal pickup sequence for the four of us across the southern suburbs?",
            "textHi": "दक्षिणी उपनगरों में हम चारों के लिए सबसे सही पिकअप क्रम क्या होना चाहिए?"
          },
          {
            "speaker": "Sameer",
            "textEn": "We should start at Vikram’s apartment near Green Park at 7:45 AM, pick up Priya at Sector 15 at 7:55 AM, and meet you at the Ring Road junction at 8:05 AM.",
            "textHi": "हमें सुबह 7:45 पर ग्रीन पार्क से विक्रम को, 7:55 पर सेक्टर 15 से प्रिया को, और 8:05 पर रिंग रोड जंक्शन से आपको लेना चाहिए।"
          },
          {
            "speaker": "Aditya",
            "textEn": "How should we rotate vehicle driving duties and distribute fuel and toll expenses equitably?",
            "textHi": "हमें गाड़ी चलाने की बारी कैसे बदलनी चाहिए और पेट्रोल व टोल का खर्च समान रूप से कैसे बांटना चाहिए?"
          },
          {
            "speaker": "Sameer",
            "textEn": "Each of us can drive our electric or hybrid vehicle for one week each month, sharing monthly toll transponder costs equally through a shared digital ledger.",
            "textHi": "हममें से प्रत्येक महीने में एक सप्ताह अपनी गाड़ी चलाएगा और ऐप के जरिए टोल का खर्च चारों में बराबर बांट लिया जाएगा।"
          },
          {
            "speaker": "Aditya",
            "textEn": "Does our office corporate tech park provide reserved preferential parking bays for registered carpool vehicles?",
            "textHi": "क्या हमारा टेक पार्क रजिस्टर्ड कारपूल वाहनों के लिए आरक्षित प्राथमिकता वाली पार्किंग प्रदान करता है?"
          },
          {
            "speaker": "Sameer",
            "textEn": "Yes, carpools with three or more occupants receive designated stilt parking bays right next to the main building entrance elevator lobbies.",
            "textHi": "हाँ, तीन या अधिक यात्रियों वाले कारपूल को मुख्य प्रवेश द्वार की लिफ्ट के ठीक बगल में आरक्षित पार्किंग मिलती है।"
          },
          {
            "speaker": "Aditya",
            "textEn": "What contingency protocol should we establish if one member has an unexpected evening client meeting or late working hours?",
            "textHi": "यदि किसी सदस्य की शाम को अचानक कोई मीटिंग हो या देर तक रुकना पड़े, तो हमारा बैकअप प्लान क्या होगा?"
          },
          {
            "speaker": "Sameer",
            "textEn": "Our company participates in the municipal Guaranteed Ride Home program, providing subsidized cab vouchers for unexpected late departures.",
            "textHi": "हमारी कंपनी गारंटीड राइड होम प्रोग्राम से जुड़ी है, जो देर होने पर मुफ्त कैब वाउचर प्रदान करती है।"
          },
          {
            "speaker": "Aditya",
            "textEn": "That completely resolves any anxiety regarding schedule rigidity.",
            "textHi": "इससे समय की पाबंदी को लेकर किसी भी प्रकार की चिंता पूरी तरह दूर हो जाती है।"
          },
          {
            "speaker": "Sameer",
            "textEn": "Furthermore, by taking three cars off the road daily, our carpool will reduce our collective annual carbon footprint by nearly four metric tons.",
            "textHi": "इसके अलावा, रोज सड़क से तीन कारें कम करके हमारा कारपूल सालाना लगभग चार टन कार्बन उत्सर्जन कम करेगा।"
          },
          {
            "speaker": "Aditya",
            "textEn": "Let us set up a shared calendar and group messaging channel to coordinate morning departure reminders.",
            "textHi": "आइए सुबह के समय को लेकर तालमेल बनाने के लिए एक साझा ग्रुप और कैलेंडर बना लें।"
          },
          {
            "speaker": "Sameer",
            "textEn": "I have already created the carpool roster; Priya and Vikram have already accepted the schedule starting next Monday.",
            "textHi": "मैंने रोस्टर बना दिया है; प्रिया और विक्रम ने अगले सोमवार से शुरू होने वाले इस शेड्यूल को स्वीकार कर लिया है।"
          },
          {
            "speaker": "Aditya",
            "textEn": "I will take the driving shift for the inaugural week in my electric crossover.",
            "textHi": "पहले सप्ताह मैं अपनी इलेक्ट्रिक कार में सभी को ले जाने की जिम्मेदारी लूँगा।"
          },
          {
            "speaker": "Sameer",
            "textEn": "Fantastic! This is a tremendous step toward economical, stress-free, and sustainable daily transit.",
            "textHi": "शानदार! यह किफायती, तनाव-मुक्त और पर्यावरण-अनुकूल दैनिक यात्रा की दिशा में एक बेहतरीन कदम है।"
          },
          {
            "speaker": "Aditya",
            "textEn": "Looking forward to our first coordinated trip on Monday morning, Sameer!",
            "textHi": "सोमवार सुबह हमारी पहली साझा यात्रा के लिए उत्सुक हूँ, समीर!"
          },
          {
            "speaker": "Sameer",
            "textEn": "See you at 8:05 AM sharp at the junction, Aditya!",
            "textHi": "सोमवार सुबह ठीक 8:05 बजे जंक्शन पर मिलते हैं, आदित्य!"
          }
        ]
      }
    ]
  },
  "assess": {
    "writtenChecklist": [
      "Mastered all 60+ domain-specific vocabulary terms for Street Directions, City Transit & Commuting.",
      "Demonstrates complete accuracy in 95 interactive multi-format exercises and 50 translation items.",
      "Applies correct compound noun stress, connected linking, and syllable stress.",
      "Eradicates persistent Hindi-to-English literal translation errors."
    ],
    "oralProductionTask": "Present an articulate 2-minute spoken evaluation applying the vocabulary and sentence structures of Day 42.",
    "benchmarks": [
      {
        "id": "d42_ass_01",
        "type": "multiple_choice",
        "question": "What is the polite phrase to ask a transit clerk about express train ticket fares?",
        "options": [
          "Excuse me, could you tell me the fare for a round-trip ticket on the express train?",
          "Express train cost how much?",
          "Give me ticket price fast.",
          "How many rupees for train?"
        ],
        "correctAnswer": "Excuse me, could you tell me the fare for a round-trip ticket on the express train?",
        "explanationEn": "'Excuse me, could you tell me the fare fo...' is the precise, CEFR A2-aligned answer.",
        "explanationHi": "मानक अंग्रेज़ी भाषा और प्रासंगिक संदर्भ के नियमों के अनुरूप सही उत्तर।",
        "skill": "Transit & Navigation"
      },
      {
        "id": "d42_ass_02",
        "type": "multiple_choice",
        "question": "Choose the proper directional instruction to guide a visitor to the terminal platform:",
        "options": [
          "Proceed straight ahead through the security checkpoint and take the escalator to Platform 4.",
          "Go there and find platform.",
          "Walk up and see train.",
          "Platform 4 is somewhere inside."
        ],
        "correctAnswer": "Proceed straight ahead through the security checkpoint and take the escalator to Platform 4.",
        "explanationEn": "'Proceed straight ahead through the secur...' is the precise, CEFR A2-aligned answer.",
        "explanationHi": "मानक अंग्रेज़ी भाषा और प्रासंगिक संदर्भ के नियमों के अनुरूप सही उत्तर।",
        "skill": "Directional Communication"
      }
    ]
  },
  "review": {
    "quickRecall": [
      {
        "q": "What should you say instead of '*Give side*' when moving past people?",
        "a": "Say 'Excuse me, could I get past please?' or 'Pardon me, may I get through?'"
      },
      {
        "q": "What is the natural English phrase for 'यहाँ गाड़ी रोककर मुझे उतार दो'?",
        "a": "Say 'Could you please pull over here?' or 'You can let me off right here.'"
      },
      {
        "q": "What does 'traffic gridlock' mean?",
        "a": "A situation where traffic is at a total standstill."
      },
      {
        "q": "What is the difference between 'opposite' and 'adjacent to'?",
        "a": "'Opposite / across from' means facing across a space/street, while 'adjacent to / next to' means right beside."
      },
      {
        "q": "Why is '*by foot*' incorrect in standard English?",
        "a": "Because the fixed standard idiom for walking is 'on foot'."
      }
    ],
    "spacedTips": [
      "Practice narrating your daily commute in English using sequencers: 'First I walk to the corner, then I cross at the zebra crossing...'",
      "Observe public announcements on transit systems; practice shadowing the rhythm and reduction in 'Please stand clear of the closing doors.'",
      "Reinforce prepositions: 'at the intersection', 'on the corner', 'across from the building', 'past the station'."
    ]
  },
  "phonetics": {
    "targetSound": "Directional Preposition Links (/ˈəʊ.vər‿ən ˈʌn.dər/, /krɒs‿ðə/)",
    "articulatoryMechanics": "Navigational directions link prepositions to articles smoothly without abrupt pauses (/tɜːn ˈleft‿æt ðə ˈtræf.ɪk laɪts/).",
    "hindiSpeakerPhoneticTrap": "Using broken telegraphic phrases like '*go straight-straight and turn right-side*' instead of idiomatic English directions.",
    "minimalPairs": [
      {
        "p1": "lease",
        "ipa1": "/liːs/",
        "p2": "leash",
        "ipa2": "/liːʃ/",
        "note": "Alveolar /s/ vs postalveolar /ʃ/"
      },
      {
        "p1": "balcony",
        "ipa1": "/ˈbæl.kə.ni/",
        "p2": "falconry",
        "ipa2": "/ˈfɒl.kən.ri/",
        "note": "Bilabial plosive vs labiodental fricative"
      },
      {
        "p1": "tenant",
        "ipa1": "/ˈten.ənt/",
        "p2": "tenet",
        "ipa2": "/ˈten.ɪt/",
        "note": "Weak schwa /ənt/ vs /ɪt/"
      },
      {
        "p1": "corridor",
        "ipa1": "/ˈkɒr.ɪ.dɔːr/",
        "p2": "curator",
        "ipa2": "/kjʊəˈreɪ.tər/",
        "note": "Vowel quality and stress distinction"
      },
      {
        "p1": "pristine",
        "ipa1": "/ˈprɪs.tiːn/",
        "p2": "piston",
        "ipa2": "/ˈpɪs.tən/",
        "note": "Long /iː/ vs reduced schwa /ən/"
      },
      {
        "p1": "facade",
        "ipa1": "/fəˈsɑːd/",
        "p2": "forsake",
        "ipa2": "/fəˈseɪk/",
        "note": "Low back /ɑː/ vs diphthong /eɪ/"
      }
    ],
    "sentenceStressPatterns": [
      {
        "s": "The PENTHOUSE offers a PANORAMIC VIEW of the CITY SKYLINE.",
        "focus": "Compound noun stress on PENT-house + content words"
      },
      {
        "s": "PROSPECTIVE TENANTS must PROVIDE EMPLOYMENT REFERENCES.",
        "focus": "Rhythmic stress on polysyllabic nouns and verbs"
      },
      {
        "s": "Could you PLEASE DIRECT ME to the NEAREST METRO INTERCHANGE?",
        "focus": "Polite inquiry rising-falling contour"
      },
      {
        "s": "The PHYSICIAN PRESCRIBED an ANTI-INFLAMMATORY MEDICATION.",
        "focus": "Clinical stress on specialized terminology"
      }
    ],
    "connectedSpeechExamples": [
      {
        "en": "turn left at",
        "ipa": "/tɜːn ˈleft‿æt/",
        "note": "Smooth linking of final consonant to vowel onset"
      },
      {
        "en": "would like to return",
        "ipa": "/wʊd ˈlaɪk tə rɪˈtɜːn/",
        "note": "Reduction of 'to' -> /tə/ in fast speech"
      },
      {
        "en": "over the counter",
        "ipa": "/ˌəʊ.və ðə ˈkaʊn.tər/",
        "note": "Weak forms of functional prepositions"
      },
      {
        "en": "in and out",
        "ipa": "/ˈɪn‿ən‿ˈaʊt/",
        "note": "Double liaison across function words"
      }
    ]
  }
};
