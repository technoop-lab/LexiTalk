import fs from 'fs';
import path from 'path';

export const day54 = {
  dayNumber: 54,
  id: "day_54",
  titleEn: "Travel Bookings, Railway, Airport & Hotel Hospitality",
  titleHi: "यात्रा बुकिंग, रेलवे, हवाई अड्डा एवं होटल आतिथ्य",
  cefr: "B1.1",
  estMinutes: 45,
  prerequisites: "Stage 6 Mastery (Days 51–53: Professional & Commercial Fluency)",
  objectivesEn: [
    "Navigate international airport procedures: check-in, boarding gates, baggage allowance, customs declaration, immigration, layovers, and transit transfers.",
    "Master railway travel and intercity transit discourse: berths, compartments, reservation confirmations, platform announcements, and schedule inquiries.",
    "Interact with luxury and business hotel hospitality: concierge inquiries, complimentary amenities, room upgrades, housekeeping, check-in/check-out, and billing surcharges.",
    "Apply past modals of speculation and regret ('must have been diverted', 'should have booked earlier') and polite indirect request formulas in travel situations.",
    "Eliminate persistent Hindi-English travel errors (e.g., '*two luggages*', '*flight got missed*', '*leave me at airport*', '*do one wake-up call*')."
  ],
  objectivesHi: [
    "अंतरराष्ट्रीय हवाई अड्डे की प्रक्रियाओं में निपुण होना: चेक-इन, बोर्डिंग गेट, बैगेज सीमा, सीमा शुल्क (Customs) घोषणा, आव्रजन (Immigration), लेओवर और ट्रांजिट।",
    "रेलवे यात्रा और इंटरसिटी ट्रांजिट शब्दावली: बर्थ, डिब्बा (Compartment), आरक्षण पुष्टि, प्लेटफॉर्म घोषणाएं और समय सारिणी पूछताछ।",
    "होटल आतिथ्य (Hotel Hospitality) में आत्मविश्वास से बातचीत: कंसीयर्ज सहायता, कमरे का अपग्रेड, हाउसकीपिंग, चेक-इन/आउट और बिलिंग अधिभार (Surcharges)।",
    "यात्रा स्थितियों में पास्ट मॉडल्स ('must have been diverted', 'should have booked') और विनम्र अप्रत्यक्ष अनुरोधों का उपयोग करना।",
    "भारतीय अंग्रेजी की आम यात्रा संबंधी गलतियों ('two luggages', 'flight got missed', 'leave me at airport', 'wake-up call do') को समाप्त करना।"
  ],
  teach: {
    hindiExplanation: `डे 54 में हम **यात्रा बुकिंग (Travel Bookings)**, **रेलवे (Railway)**, **हवाई अड्डा (Airport)** और **होटल आतिथ्य (Hotel Hospitality)** की भाषा और शिष्टाचार सीखेंगे।

1. **हवाई अड्डा एवं उड़ान शब्दावली (Airport & Flight Lexicon)**:
   - **Baggage Allowance vs Excess Baggage**: अनुमत सामान सीमा बनाम अतिरिक्त सामान (नोट: 'Luggage/Baggage' Uncountable है, कभी *luggages* न कहें; 'two pieces of luggage' कहें)।
   - **Boarding Pass & Boarding Gate**: विमान में चढ़ने का पास और गेट।
   - **Layover / Stopover**: दो उड़ानों के बीच का ठहराव या प्रतीक्षा समय।
   - **Customs & Immigration**: सीमा शुल्क जांच और पासपोर्ट/आव्रजन नियंत्रण।
   - **Carousel**: सामान लेने का घूमने वाला कन्वेयर बेल्ट (Baggage claim carousel)।

2. **रेलवे एवं ट्रेन शब्दावली (Railway Terms)**:
   - **Berth & Compartment**: सोने की सीट (Upper/Lower berth) और ट्रेन का डिब्बा।
   - **Conductor / Ticket Examiner**: टिकट निरीक्षक।
   - **Schedule Inquiries**: 'Is the train running on schedule?' (क्या ट्रेन समय पर चल रही है?)।

3. **होटल आतिथ्य शब्दावली (Hotel Hospitality Terms)**:
   - **Concierge**: होटल का विशेष कर्मचारी जो मेहमानों के लिए टूर, कैब या टिकट बुक करता है।
   - **Complimentary Breakfast / Amenities**: होटल द्वारा निःशुल्क दी जाने वाली सुविधाएं।
   - **Room Surcharge / Incidentals**: अतिरिक्त सेवाओं पर लगने वाला शुल्क या मिनीबार खर्च।
   - **Adjoining / Connecting Rooms**: एक-दूसरे से जुड़े हुए कमरे।

4. **L1 हिंदी भाषियों के लिए सुधार (Eliminating Indian English Travel Traps)**:
   - ❌ '*I have three luggages.*' ➔ ✔️ "**I have three pieces of luggage / three bags.**"
   - ❌ '*My flight got missed due to traffic.*' ➔ ✔️ "**I missed my flight due to heavy traffic.**"
   - ❌ '*Please leave me at the airport.*' ➔ ✔️ "**Could you please drop me off at the airport?**"
   - ❌ '*Do one wake-up call at 6 AM.*' ➔ ✔️ "**Could you please schedule a wake-up call for 6:00 AM?**"`,
    englishExplanation: `Day 54 equips learners with high-level pragmatic fluency for domestic and international travel, encompassing aviation checkpoints, railway transit systems, and premier hotel hospitality services.

Linguistic & Pragmatic Focus:
1. **Aviation Checkpoints & Procedures**: Articulating requests at ticket counters, navigating security checkpoints, managing itinerary changes, handling baggage delays, and completing customs declarations.
2. **Hospitality Negotiation & Etiquette**: Interacting with front-desk staff and concierges, requesting room modifications, inquiring about incidentals/surcharges, and resolving billing discrepancies.
3. **Past Modals of Travel Speculation & Indirect Politeness**: Using structures such as 'The flight must have been grounded due to inclement weather' and 'Would it be possible to arrange a late check-out?'.`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Uncountable Mass Nouns: 'Luggage' and 'Baggage'",
        description: "'Luggage' and 'baggage' are strictly uncountable. Never add '-s' (*luggages*). To quantify individual bags, use partitive count expressions: 'one piece of luggage', 'three pieces of baggage', or simply 'three bags / suitcases'.",
        register: "Partitive Noun Syntax"
      },
      {
        ruleNumber: 2,
        title: "Past Modals of Speculation & Deduction in Travel",
        description: "Use 'must have + past participle' for strong logical deductions ('The flight must have landed by now'), 'could/might have + past participle' for possibilities, and 'should have + past participle' for regrets ('We should have booked a direct flight').",
        register: "Epistemic Modals"
      },
      {
        ruleNumber: 3,
        title: "Indirect Polite Inquiry Formulas",
        description: "In luxury and professional travel contexts, preface requests with indirect frames: 'Could you kindly check if...', 'Would it be possible to...', 'I was wondering if we might receive a complimentary upgrade.'",
        register: "Pragmatic Politeness"
      },
      {
        ruleNumber: 4,
        title: "Phrasal Verbs of Transit",
        description: "Use 'drop off' (not '*leave me*') for driving someone to a station/airport, 'pick up' for collecting them, 'check in / check out' for lodging, and 'take off / touch down' for aircraft.",
        register: "Transit Phrasal Verbs"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Flight Seating & Baggage Request",
        formula: "Could you kindly check if a [Window / Aisle] seat is available, and check in these [Number] pieces of luggage?",
        exampleEn: "Could you kindly check if an aisle seat is available, and check in these two pieces of luggage?",
        meaningHi: "क्या आप कृपया देख सकते हैं कि क्या कोई आइल (गलियारे वाली) सीट उपलब्ध है, और सामान के इन दो टुकड़ों को चेक-इन कर सकते हैं?"
      },
      {
        subjectGroup: "Hotel Room Upgrade & Amenities",
        formula: "Would it be possible to upgrade our reservation to an executive suite with complimentary [Amenity]?",
        exampleEn: "Would it be possible to upgrade our reservation to an executive suite with complimentary breakfast?",
        meaningHi: "क्या हमारे आरक्षण को कॉम्प्लिमेंट्री (निःशुल्क) नाश्ते के साथ एक कार्यकारी सुइट में अपग्रेड करना संभव होगा?"
      },
      {
        subjectGroup: "Flight Delay Deduction",
        formula: "The incoming aircraft + must have been + [Delayed / Diverted] + due to + [Weather / Technical issue].",
        exampleEn: "The incoming aircraft must have been diverted due to severe thunderstorms over Chicago.",
        meaningHi: "शिकागो के ऊपर भयंकर तूफान के कारण आने वाले विमान का मार्ग अवश्य बदल (डायवर्ट कर) दिया गया होगा।"
      },
      {
        subjectGroup: "Concierge Transportation Arrangement",
        formula: "Could the concierge arrange a private chauffeur to drop us off at Terminal 3 by [Time]?",
        exampleEn: "Could the concierge arrange a private chauffeur to drop us off at Terminal 3 by 5:30 AM?",
        meaningHi: "क्या कंसीयर्ज सुबह 5:30 बजे तक हमें टर्मिनल 3 पर छोड़ने के लिए एक निजी ड्राइवर की व्यवस्था कर सकता है?"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "Eliminating 'Luggages', 'Flight Got Missed' & 'Leave Me at Station'",
      hindiPattern: "1. '*I have kept all my three luggages in the taxi.*'\n2. '*Because of delay, my connection flight got missed.*'\n3. '*Can you leave me at the railway station?*'\n4. '*Do one morning wake-up call for my room.*'",
      potentialInterference: "Literal translations of 'सामान (लगेजें)', 'फ्लाइट छूट गई (got missed)', 'स्टेशन छोड़ दो (leave me)', and 'वेक-अप कॉल कर दो'.",
      explanation: "1. 'Luggage' is uncountable; use 'three bags' or 'three pieces of luggage'. 2. Say 'I missed my connecting flight' (active subject). 3. 'Leave me' means abandon; say 'drop me off at the station'. 4. Say 'Could you schedule a wake-up call for 6:00 AM?'.",
      naturalSolution: "1. 'I have loaded all three pieces of luggage into the taxi.' 2. 'Because of the delay, I missed my connecting flight.' 3. 'Could you drop me off at the railway station?' 4. 'Could you please schedule a wake-up call for 6:00 AM?'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day54_vocab_001", word: "Concierge", pos: "Noun", ipa: "/kɒn.siˈeəʒ/", meaningHi: "कंसीयर्ज / होटल का विशेष सेवा सहायक (टूर, कैब व टिकट व्यवस्थापक)", exampleEn: "The hotel concierge booked premium theatre tickets and arranged airport limousine transport for us.", exampleHi: "होटल कंसीयर्ज ने हमारे लिए प्रीमियम थिएटर टिकट बुक किए और हवाई अड्डे के लिमोसिन परिवहन की व्यवस्था की।" },
      { id: "day54_vocab_002", word: "Complimentary", pos: "Adjective", ipa: "/ˌkɒm.plɪˈmen.tər.i/", meaningHi: "निःशुल्क / सौजन्य भेंट स्वरूप दिया गया", exampleEn: "Guests staying in executive club rooms enjoy complimentary high-speed Wi-Fi and buffet breakfast.", exampleHi: "कार्यकारी क्लब कमरों में ठहरने वाले मेहमान मानार्थ (निःशुल्क) हाई-स्पीड वाई-फाई और बुफे नाश्ते का आनंद लेते हैं।" },
      { id: "day54_vocab_003", word: "Layover", pos: "Noun", ipa: "/ˈleɪˌəʊ.vər/", meaningHi: "लेओवर / उड़ानों के बीच का मध्यवर्ती पड़ाव या ठहराव", exampleEn: "We had a three-hour layover at Frankfurt Airport before boarding our transatlantic flight.", exampleHi: "अपनी ट्रान्साटलांटिक उड़ान में चढ़ने से पहले फ्रैंकफर्ट हवाई अड्डे पर हमारा तीन घंटे का लेओवर (ठहराव) था।" },
      { id: "day54_vocab_004", word: "Customs", pos: "Noun", ipa: "/ˈkʌs.təmz/", meaningHi: "सीमा शुल्क विभाग / आयातित सामान की सरकारी जांच", exampleEn: "International travelers must declare high-value electronics and foreign currency at customs.", exampleHi: "अंतरराष्ट्रीय यात्रियों को सीमा शुल्क (कस्टम्स) पर उच्च-मूल्य वाले इलेक्ट्रॉनिक्स और विदेशी मुद्रा की घोषणा करनी होगी।" },
      { id: "day54_vocab_005", word: "Carousel", pos: "Noun", ipa: "/ˌkær.əˈsel/", meaningHi: "सामान लेने का कन्वेयर बेल्ट (बैगेज कैरोसेल)", exampleEn: "Passengers waited around baggage carousel number four to collect their checked suitcases.", exampleHi: "यात्रियों ने अपने चेक-इन किए गए सूटकेस लेने के लिए सामान हिंडोला (कैरोसेल) नंबर चार के पास प्रतीक्षा की।" },
      { id: "day54_vocab_006", word: "Immigration", pos: "Noun", ipa: "/ˌɪm.ɪˈɡreɪ.ʃən/", meaningHi: "आव्रजन / पासपोर्ट एवं वीज़ा नियंत्रण काउंटर", exampleEn: "The immigration officer examined our biometric passports and stamped our entry visas.", exampleHi: "आव्रजन (इमिग्रेशन) अधिकारी ने हमारे बायोमेट्रिक पासपोर्ट की जांच की और हमारे प्रवेश वीजा पर मुहर लगाई।" },
      { id: "day54_vocab_007", word: "Surcharge", pos: "Noun", ipa: "/ˈsɜː.tʃɑːdʒ/", meaningHi: "अधिभार / अतिरिक्त शुल्क", exampleEn: "A weekend surcharge of fifteen dollars was added to our standard hotel room rate.", exampleHi: "हमारे मानक होटल कमरे के किराए में पंद्रह डॉलर का सप्ताहांत अधिभार (सरचार्ज) जोड़ा गया था।" },
      { id: "day54_vocab_008", word: "Adjoining", pos: "Adjective", ipa: "/əˈdʒɔɪ.nɪŋ/", meaningHi: "सटा हुआ / एक-दूसरे से जुड़ा हुआ कमरा", exampleEn: "The family requested adjoining hotel rooms connected by an interior private door.", exampleHi: "परिवार ने एक आंतरिक निजी दरवाजे से जुड़े सटे हुए (Adjoining) होटल के कमरों का अनुरोध किया।" },
      { id: "day54_vocab_009", word: "Compartment", pos: "Noun", ipa: "/kəmˈpɑːt.mənt/", meaningHi: "रेलगाड़ी का डिब्बा / केबिन", exampleEn: "We reserved a first-class sleeping compartment for the overnight train journey to Edinburgh.", exampleHi: "हमने एडिनबर्ग की रात भर की ट्रेन यात्रा के लिए प्रथम श्रेणी का स्लीपिंग डिब्बा (कंपार्टमेंट) आरक्षित किया।" },
      { id: "day54_vocab_010", word: "Incidentals", pos: "Noun Plural", ipa: "/ˌɪn.sɪˈden.təlz/", meaningHi: "आकस्मिक छोटे खर्च (मिनीबार, रूम सर्विस, लांड्री आदि)", exampleEn: "The front desk placed a hundred-dollar security hold on my credit card to cover incidentals.", exampleHi: "फ्रंट डेस्क ने आकस्मिक खर्चों (Incidentals) को कवर करने के लिए मेरे क्रेडिट कार्ड पर सौ डॉलर का सुरक्षा ब्लॉक लगाया।" },
      { id: "day54_vocab_011", word: "Tarmac", pos: "Noun", ipa: "/ˈtɑː.mæk/", meaningHi: "विमानतल का रनवे / हवाई पट्टी का पक्का फर्श", exampleEn: "The airliner waited on the tarmac for forty minutes awaiting takeoff clearance from the control tower.", exampleHi: "कंट्रोल टॉवर से टेकऑफ़ की मंजूरी का इंतजार करते हुए विमान चालीस मिनट तक हवाई पट्टी (टारमैक) पर खड़ा रहा।" },
      { id: "day54_vocab_012", word: "Diverted", pos: "Adjective", ipa: "/daɪˈvɜː.tɪd/", meaningHi: "मार्ग परिवर्तित (दूसरी जगह भेजा गया विमान)", exampleEn: "Due to heavy fog over London, our incoming flight was diverted to Manchester Airport.", exampleHi: "लंदन में घने कोहरे के कारण, हमारी आने वाली उड़ान को मैनचेस्टर हवाई अड्डे की ओर मोड़ (डायवर्ट कर) दिया गया था।" },
      { id: "day54_vocab_013", word: "Berth", pos: "Noun", ipa: "/bɜːθ/", meaningHi: "बर्थ / ट्रेन या जहाज में सोने की निश्चित सीट", exampleEn: "I prefer reserving a lower berth on overnight train journeys for greater comfort and convenience.", exampleHi: "अधिक आराम और सुविधा के लिए मैं रात की ट्रेन यात्राओं में लोअर बर्थ आरक्षित करना पसंद करता हूँ।" },
      { id: "day54_vocab_014", word: "Valet", pos: "Noun", ipa: "/ˈvæl.eɪ/", meaningHi: "वैले / वाहन पार्किंग सहायक या निजी परिचारक", exampleEn: "The hotel offers complimentary valet parking for all registered conference delegates.", exampleHi: "होटल सभी पंजीकृत सम्मेलन प्रतिनिधियों के लिए मानार्थ वैले पार्किंग प्रदान करता है।" },
      { id: "day54_vocab_015", word: "Housekeeping", pos: "Noun", ipa: "/ˈhaʊsˌkiː.pɪŋ/", meaningHi: "कमरों की साफ-सफाई एवं रखरखाव विभाग", exampleEn: "Please contact housekeeping if you require additional hypoallergenic pillows or bath towels.", exampleHi: "यदि आपको अतिरिक्त हाइपोएलर्जेनिक तकिए या स्नान तौलिये की आवश्यकता हो तो कृपया हाउसकीपिंग से संपर्क करें।" },
      { id: "day54_vocab_016", word: "Itinerary", pos: "Noun", ipa: "/aɪˈtɪn.ər.ər.i/", meaningHi: "यात्रा कार्यक्रम / यात्रा की विस्तृत योजना व समय सारिणी", exampleEn: "The travel agency emailed a detailed seven-day European tour itinerary with hotel vouchers.", exampleHi: "ट्रैवल एजेंसी ने होटल वाउचर के साथ सात दिवसीय विस्तृत यूरोपीय यात्रा कार्यक्रम (इटिनरेरी) ईमेल किया।" },
      { id: "day54_vocab_017", word: "Overbooked", pos: "Adjective", ipa: "/ˌəʊ.vəˈbʊkt/", meaningHi: "क्षमता से अधिक बुक किया गया", exampleEn: "Because the flight was overbooked, the airline offered travel vouchers to voluntary standby passengers.", exampleHi: "चूंकि उड़ान ओवरबुक थी, इसलिए एयरलाइन ने स्वैच्छिक स्टैंडबाय यात्रियों को यात्रा वाउचर की पेशकश की।" },
      { id: "day54_vocab_018", word: "Allotment", pos: "Noun", ipa: "/əˈlɒt.mənt/", meaningHi: "आवंटन / निर्धारित हिस्सा या बैगेज सीमा", exampleEn: "Your international economy ticket includes a checked baggage allotment of twenty-three kilograms.", exampleHi: "आपके अंतरराष्ट्रीय इकोनॉमी टिकट में तेईस किलोग्राम का चेक किए गए सामान का आवंटन (Allotment) शामिल है।" },
      { id: "day54_vocab_019", word: "Locomotive", pos: "Noun", ipa: "/ˌləʊ.kəˈməʊ.tɪv/", meaningHi: "रेल का इंजन", exampleEn: "A high-speed electric locomotive hauled the intercity express train across the mountain pass.", exampleHi: "एक हाई-स्पीड इलेक्ट्रिक लोकोमोटिव (इंजन) ने इंटरसिटी एक्सप्रेस ट्रेन को पहाड़ी दर्रे के पार खींचा।" },
      { id: "day54_vocab_020", word: "Disembark", pos: "Verb", ipa: "/ˌdɪs.ɪmˈbɑːk/", meaningHi: "विमान, ट्रेन या जहाज से नीचे उतरना", exampleEn: "Passengers were instructed to remain seated until the aircraft had parked and the seatbelt sign was turned off before disembarking.", exampleHi: "यात्रियों को नीचे उतरने (Disembark) से पहले विमान के पार्क होने और सीटबेल्ट का संकेत बंद होने तक बैठे रहने का निर्देश दिया गया था।" }
    ],
    spokenPhrases: [
      { id: "day54_phrase_001", phrase: "Could you kindly check if an aisle seat is available on this flight?", register: "Airport Check-In", meaningHi: "क्या आप कृपया देख सकते हैं कि क्या इस उड़ान में कोई आइल (गलियारे वाली) सीट उपलब्ध है?" },
      { id: "day54_phrase_002", phrase: "I would like to check in two pieces of luggage and carry this laptop backpack.", register: "Baggage Counter", meaningHi: "मैं सामान के दो टुकड़े चेक-इन करना चाहता हूँ और यह लैपटॉप बैकपैक साथ ले जाना चाहता हूँ।" },
      { id: "day54_phrase_003", phrase: "Our incoming flight was delayed; will our checked baggage transfer automatically during the layover?", register: "Transit Inquiries", meaningHi: "हमारी आने वाली उड़ान में देरी हुई थी; क्या हमारा चेक किया गया सामान लेओवर के दौरान स्वचालित रूप से स्थानांतरित हो जाएगा?" },
      { id: "day54_phrase_004", phrase: "Could you please schedule a morning wake-up call for 6:30 AM?", register: "Hotel Front Desk", meaningHi: "क्या आप कृपया सुबह 6:30 बजे के लिए वेक-अप कॉल शेड्यूल कर सकते हैं?" },
      { id: "day54_phrase_005", phrase: "Is breakfast included complimentary with our room reservation?", register: "Hospitality Inquiries", meaningHi: "क्या हमारे कमरे के आरक्षण के साथ नाश्ता निःशुल्क शामिल है?" },
      { id: "day54_phrase_006", phrase: "Could the concierge arrange a reliable taxi to drop us off at the train station?", register: "Concierge Services", meaningHi: "क्या कंसीयर्ज हमें रेलवे स्टेशन पर छोड़ने के लिए एक विश्वसनीय टैक्सी की व्यवस्था कर सकता है?" },
      { id: "day54_phrase_007", phrase: "The flight must have been diverted due to severe convective thunderstorms.", register: "Travel Deductions", meaningHi: "भीषण तूफानी मौसम के कारण उड़ान का मार्ग अवश्य बदल (डायवर्ट) दिया गया होगा।" },
      { id: "day54_phrase_008", phrase: "What is the standard check-out time, and is late check-out permissible?", register: "Hotel Front Desk", meaningHi: "मानक चेक-आउट का समय क्या है, और क्या देर से चेक-आउट की अनुमति है?" },
      { id: "day54_phrase_009", phrase: "Please present your boarding pass and passport at gate B22 for boarding.", register: "Gate Announcement", meaningHi: "कृपया बोर्डिंग के लिए गेट B22 पर अपना बोर्डिंग पास और पासपोर्ट प्रस्तुत करें।" },
      { id: "day54_phrase_010", phrase: "I have nothing to declare at customs other than personal clothing and electronics.", register: "Customs Clearance", meaningHi: "व्यक्तिगत कपड़ों और इलेक्ट्रॉनिक्स के अलावा सीमा शुल्क पर मेरे पास घोषित करने के लिए कुछ नहीं है।" },
      { id: "day54_phrase_011", phrase: "Could you please bring two extra hypoallergenic pillows to room 408?", register: "Housekeeping Request", meaningHi: "क्या आप कृपया कमरा 408 में दो अतिरिक्त हाइपोएलर्जेनिक तकिए ला सकते हैं?" },
      { id: "day54_phrase_012", phrase: "Is this the correct platform for the express train bound for Edinburgh?", register: "Railway Platform", meaningHi: "क्या यह एडिनबर्ग जाने वाली एक्सप्रेस ट्रेन के लिए सही प्लेटफॉर्म है?" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day54_ex_001", english: "At the check-in counter, the airline representative tagged our two pieces of luggage directly to our final destination.", hindi: "चेक-इन काउंटर पर, एयरलाइन प्रतिनिधि ने सामान के हमारे दो टुकड़ों को सीधे हमारे अंतिम गंतव्य के लिए टैग किया।" },
      { id: "day54_ex_002", english: "The luxury hotel concierge arranged private chauffeur transport to drop us off at Terminal 2.", hindi: "लक्ज़री होटल कंसीयर्ज ने हमें टर्मिनल 2 पर छोड़ने के लिए निजी ड्राइवर परिवहन की व्यवस्था की।" },
      { id: "day54_ex_003", english: "Because our incoming transatlantic flight arrived late, we missed our connecting train to Manchester.", hindi: "चूंकि हमारी आने वाली ट्रान्साटलांटिक उड़ान देर से पहुंची, इसलिए मैनचेस्टर जाने वाली हमारी कनेक्टिंग ट्रेन छूट गई।" },
      { id: "day54_ex_004", english: "The front desk clerk confirmed that high-speed fiber Wi-Fi and buffet breakfast are entirely complimentary.", hindi: "फ्रंट डेस्क क्लर्क ने पुष्टि की कि हाई-स्पीड फाइबर वाई-फाई और बुफे नाश्ता पूरी तरह से मानार्थ (निःशुल्क) हैं।" },
      { id: "day54_ex_005", english: "Passengers congregated around carousel three to collect their heavy suitcases after clearing border immigration.", hindi: "सीमा आव्रजन (इमिग्रेशन) पास करने के बाद अपने भारी सूटकेस लेने के लिए यात्री कैरोसेल तीन के चारों ओर एकत्र हुए।" },
      { id: "day54_ex_006", english: "The flight must have been grounded in Chicago because of severe blizzards and icy runways.", hindi: "गंभीर बर्फीले तूफान और बर्फीले रनवे के कारण शिकागो में उड़ान को अवश्य रोक (ग्राउंड) दिया गया होगा।" },
      { id: "day54_ex_007", english: "We requested adjoining executive rooms so that our family could stay together comfortably.", hindi: "हमने सटे हुए (Adjoining) कार्यकारी कमरों का अनुरोध किया ताकि हमारा परिवार आराम से एक साथ रह सके।" },
      { id: "day54_ex_008", english: "The customs officer requested that the traveler open his duffel bag for a routine spot inspection.", hindi: "सीमा शुल्क अधिकारी ने अनुरोध किया कि यात्री नियमित मौके पर जांच के लिए अपना डफल बैग खोले।" },
      { id: "day54_ex_009", english: "Excess baggage exceeding the twenty-three kilogram allowance incurs a thirty-dollar surcharge per kilogram.", hindi: "तेईस किलोग्राम की सीमा से अधिक अतिरिक्त सामान पर प्रति किलोग्राम तीस डॉलर का अधिभार (सरचार्ज) लगता है।" },
      { id: "day54_ex_010", english: "Could you please schedule an automated wake-up call for 5:45 AM ahead of our morning flight?", hindi: "हमारी सुबह की उड़ान से पहले क्या आप कृपया सुबह 5:45 बजे के लिए एक स्वचालित वेक-अप कॉल शेड्यूल कर सकते हैं?" },
      { id: "day54_ex_011", english: "The conductor walked down the aisle to inspect passenger reservation tickets and validate berth assignments.", hindi: "यात्री आरक्षण टिकटों का निरीक्षण करने और बर्थ आवंटन को सत्यापित करने के लिए कंडक्टर डिब्बे के गलियारे में घूमा।" },
      { id: "day54_ex_012", english: "Our four-hour layover in Doha gave us ample time to browse the duty-free shops and relax in the lounge.", hindi: "दोहा में हमारे चार घंटे के लेओवर ने हमें शुल्क-मुक्त दुकानों को देखने और लाउंज में आराम करने का पर्याप्त समय दिया।" },
      { id: "day54_ex_013", english: "The airliner remained held on the tarmac for forty minutes while ground crews cleared de-icing fluid.", hindi: "विमान चालीस मिनट तक हवाई पट्टी (टारमैक) पर रुका रहा, जबकि ग्राउंड क्रू ने डी-आइसिंग तरल को साफ किया।" },
      { id: "day54_ex_014", english: "Please notify housekeeping that we will require fresh bathrobes and bottled spring water this evening.", hindi: "कृपया हाउसकीपिंग को सूचित करें कि हमें आज शाम ताज़ा बाथरोब और बोतलबंद स्प्रिंग पानी की आवश्यकता होगी।" },
      { id: "day54_ex_015", english: "We should have booked our railway sleeper compartment earlier to avoid paying peak surge fares.", hindi: "पीक किराया वृद्धि से बचने के लिए हमें अपना रेलवे स्लीपर डिब्बा पहले ही बुक कर लेना चाहिए था।" },
      { id: "day54_ex_016", english: "The hotel applies a nominal daily resort surcharge to cover pool maintenance and spa access.", hindi: "होटल पूल रखरखाव और स्पा पहुंच को कवर करने के लिए एक मामूली दैनिक रिसॉर्ट अधिभार लागू करता है।" },
      { id: "day54_ex_017", english: "An electric locomotive pulled twelve modern passenger carriages smoothly across the viaduct.", hindi: "एक इलेक्ट्रिक इंजन (लोकोमोटिव) ने बारह आधुनिक यात्री डिब्बों को पुल के ऊपर से सुगमता से खींचा।" },
      { id: "day54_ex_018", english: "Passengers must remain seated until the captain switches off the seatbelt sign before disembarking.", hindi: "यात्रियों को उतरने (Disembark) से पहले कप्तान द्वारा सीटबेल्ट संकेत बंद करने तक बैठे रहना चाहिए।" },
      { id: "day54_ex_019", english: "The travel agent provided an itemized flight itinerary detailing layover times and gate connections.", hindi: "ट्रैवल एजेंट ने लेओवर के समय और गेट कनेक्शन का विवरण देते हुए एक विस्तृत उड़ान कार्यक्रम (इटिनरेरी) प्रदान किया।" },
      { id: "day54_ex_020", english: "Upon checking out, the cashier provided a detailed invoice itemizing room charges and restaurant incidentals.", hindi: "चेक आउट करते समय, कैशियर ने कमरे के किराए और रेस्तरां के आकस्मिक खर्चों का एक विस्तृत चालान प्रदान किया।" },
      { id: "day54_ex_021", english: "Could you kindly check if there are any cancellations for the express train departing at 6:00 PM?", hindi: "क्या आप कृपया देख सकते हैं कि क्या शाम 6:00 बजे प्रस्थान करने वाली एक्सप्रेस ट्रेन के लिए कोई रद्दीकरण है?" },
      { id: "day54_ex_022", english: "The airline offered complimentary hotel accommodation to passengers stranded by the flight cancellation.", hindi: "एयरलाइन ने उड़ान रद्द होने से फंसे यात्रियों को मानार्थ (निःशुल्क) होटल आवास की पेशकश की।" },
      { id: "day54_ex_023", english: "Our valet parked the rental car in the secure underground facility and handed us the retrieval ticket.", hindi: "हमारे वैले ने किराए की कार को सुरक्षित भूमिगत सुविधा में पार्क किया और हमें कार वापसी का टिकट सौंप दिया।" },
      { id: "day54_ex_024", english: "Immigration authorities require all foreign visitors to hold at least six months of passport validity.", hindi: "आव्रजन अधिकारियों को सभी विदेशी आगंतुकों के पास कम से कम छह महीने की पासपोर्ट वैधता होना आवश्यक है।" },
      { id: "day54_ex_025", english: "Traveling with lightweight luggage makes navigating busy international railway interchanges far more manageable.", hindi: "हल्के सामान के साथ यात्रा करना व्यस्त अंतरराष्ट्रीय रेलवे इंटरचेंज पर आवागमन को कहीं अधिक आसान बना देता है।" }
    ]
  },
  pronunciation: {
    focusSound: "Hospitality French Loanwords Stress, Airport Acronyms & Indirect Cadence",
    phoneticNotes: "1. Stress and Phonetics in French Hospitality Loanwords:\n   - 'Concierge' /kɒn.siˈeəʒ/ (Stress on 3rd syllable with voiced /ʒ/)\n   - 'Valet' /ˈvæl.eɪ/ (Stress on 1st syllable; silent final 't')\n   - 'Carousel' /ˌkær.əˈsel/ (Stress on 3rd syllable)\n   - 'Itinerary' /aɪˈtɪn.ər.ər.i/ (Stress on 2nd syllable /tɪn/)\n2. Uncountable Noun Articulation: Say /tuː ˈpiː.sɪz əv ˈlʌɡ.ɪdʒ/, NOT /*tuː ˈlʌɡ.ɪdʒ.ɪz/.\n3. Indirect Request Cadence: Gentle rising pitch on the polite modal frame, followed by falling resolution: 'Could you kindly check if an aisle seat is available? ↗↘'.",
    minimalPairs: [
      { wordA: "Berth", ipaA: "/bɜːθ/", wordB: "Birth", ipaB: "/bɜːθ/" },
      { wordA: "Suite", ipaA: "/swiːt/", wordB: "Suit", ipaB: "/suːt/" },
      { wordA: "Aisle", ipaA: "/aɪl/", wordB: "Isle", ipaB: "/aɪl/" },
      { wordA: "Customs", ipaA: "/ˈkʌs.təmz/", wordB: "Costumes", ipaB: "/ˈkɒs.tjuːmz/" },
      { wordA: "Valet", ipaA: "/ˈvæl.eɪ/", wordB: "Valley", ipaB: "/ˈvæl.i/" }
    ],
    drills: [
      { sentence: "The concierge arranged valet parking and complimentary airport transport.", focus: "Pronunciation of /kɒn.siˈeəʒ/ & /ˈvæl.eɪ/" },
      { sentence: "Please collect your two pieces of luggage from carousel number four.", focus: "Stress in /ˌkær.əˈsel/ & correct uncountable phrasing" },
      { sentence: "The flight must have been diverted due to severe weather conditions.", focus: "Past modal deduction /mʌst həv biːn daɪˈvɜː.tɪd/" },
      { sentence: "Could you kindly check if an aisle seat is available in the executive suite?", focus: "Pronunciation of /aɪl/ vs /swiːt/" },
      { sentence: "We disembarked from the aircraft and proceeded to border immigration.", focus: "Stress in /ˌdɪs.ɪmˈbɑːkt/ & /ˌɪm.ɪˈɡreɪ.ʃən/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day54_ex_001",
        type: "error_correction",
        prompt: "Correct the sentence: 'I have three luggages in the taxi trunk.'",
        correctAnswer: "I have three pieces of luggage in the taxi trunk.",
        acceptableAnswers: [
          "I have three bags in the taxi trunk.",
          "I have three suitcases in the taxi trunk."
        ],
        explanationEn: "'Luggage' is an uncountable mass noun. Use 'three pieces of luggage', 'three bags', or 'three suitcases' (never '*three luggages*').",
        explanationHi: "'Luggage' अनकाउंटेबल है, कभी 'luggages' न कहें; 'three pieces of luggage' या 'three bags' कहें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day54_ex_002",
        type: "error_correction",
        prompt: "Correct the sentence: 'Because of heavy traffic, my flight got missed.'",
        correctAnswer: "Because of heavy traffic, I missed my flight.",
        acceptableAnswers: [
          "Due to heavy traffic, I missed my flight."
        ],
        explanationEn: "In English, a person misses a flight (active agent: 'I missed my flight'). Do not use passive '*my flight got missed*'.",
        explanationHi: "उड़ान छूटने के लिए 'I missed my flight' कहें ('flight got missed' गलत अनुवाद है)।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day54_ex_003",
        type: "error_correction",
        prompt: "Correct the sentence: 'Can you leave me at the airport terminal?'",
        correctAnswer: "Could you drop me off at the airport terminal?",
        acceptableAnswers: [
          "Could you please drive me to the airport terminal?",
          "Can you drop me off at the airport?"
        ],
        explanationEn: "Use the phrasal verb 'drop off' when driving someone somewhere. 'Leave me' implies abandoning someone.",
        explanationHi: "किसी को वाहन से छोड़ने के लिए 'drop off' का प्रयोग करें ('leave me' का अर्थ छोड़ देना/त्याग देना होता है)।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day54_ex_004",
        type: "multiple_choice",
        prompt: "What is the primary role of a hotel 'Concierge'?",
        options: [
          "To assist guests with booking tours, restaurant reservations, transportation, and entertainment",
          "To cook food in the kitchen",
          "To wash the hotel linen and bedsheets",
          "To repair the electrical wiring in elevators"
        ],
        correctAnswer: "To assist guests with booking tours, restaurant reservations, transportation, and entertainment",
        explanationEn: "A concierge specializes in guest services, bookings, and local recommendations.",
        explanationHi: "कंसीयर्ज मेहमानों के लिए टूर, कैब, रेस्तरां और टिकटों की विशेष व्यवस्था करता है।",
        difficulty: "easy",
        skillTag: "HOSPITALITY_ROLES"
      },
      {
        id: "day54_ex_005",
        type: "fill_blank",
        prompt: "The rotating conveyor belt where arriving passengers retrieve checked baggage is the baggage _______.",
        correctAnswer: "carousel",
        acceptableAnswers: ["claim", "belt"],
        explanationEn: "Baggage carousel / conveyor.",
        explanationHi: "हवाई अड्डे पर सामान आने वाले घूमने वाले बेल्ट को 'carousel' कहते हैं।",
        difficulty: "easy",
        skillTag: "AIRPORT_OPERATIONS"
      },
      {
        id: "day54_ex_006",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'क्या आप कृपया सुबह 6:00 बजे के लिए वेक-अप कॉल शेड्यूल कर सकते हैं?'",
        correctAnswer: "Could you please schedule a wake-up call for 6:00 AM?",
        acceptableAnswers: [
          "Could you arrange a wake-up call for 6:00 AM, please?",
          "I would like to request a wake-up call for 6:00 AM."
        ],
        explanationEn: "'Could you please schedule a wake-up call for 6:00 AM?'",
        explanationHi: "'Schedule a wake-up call for 6:00 AM' सही और स्वाभाविक वाक्य है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day54_ex_007",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The flight must have been diverted due to severe fog over the destination airport.'",
        correctAnswer: "गंतव्य हवाई अड्डे पर घने कोहरे के कारण उड़ान का मार्ग अवश्य बदल (डायवर्ट कर) दिया गया होगा।",
        acceptableAnswers: [
          "कोहरे की वजह से फ्लाइट को दूसरी जगह मोड़ दिया गया होगा।"
        ],
        explanationEn: "'The flight must have been diverted due to severe fog over the destination airport.'",
        explanationHi: "पास्ट मॉडल ऑफ डिडक्शन का सटीक हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day54_ex_008",
        type: "sentence_ordering",
        prompt: "Order into a polite hotel request: [complimentary / is / breakfast / with / reservation / our / included]",
        correctAnswer: "Is complimentary breakfast included with our reservation?",
        explanationEn: "Auxiliary Verb + Adjective + Subject + Passive Participle + Prepositional Phrase.",
        explanationHi: "सही क्रम: Is complimentary breakfast included with our reservation?",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day54_ex_009",
        type: "multiple_choice",
        prompt: "What does 'Complimentary' mean in hotel and airline hospitality?",
        options: [
          "Provided free of charge as a courtesy or service benefit",
          "Saying nice words to someone's clothes",
          "Requiring a mandatory cash tip",
          "Charged at double the normal price"
        ],
        correctAnswer: "Provided free of charge as a courtesy or service benefit",
        explanationEn: "'Complimentary' means provided free of charge by the establishment.",
        explanationHi: "होटल या एयरलाइन द्वारा मुफ्त दी जाने वाली सेवा को 'Complimentary' (मानार्थ/निःशुल्क) कहते हैं।",
        difficulty: "easy",
        skillTag: "HOSPITALITY_VOCABULARY"
      },
      {
        id: "day54_ex_010",
        type: "fill_blank",
        prompt: "A scheduled stop between two stages of a long-distance flight journey is called a _______.",
        correctAnswer: "layover",
        acceptableAnswers: ["stopover"],
        explanationEn: "A layover is a stop between connecting flights.",
        explanationHi: "उड़ानों के बीच के मध्यवर्ती पड़ाव को 'layover' कहते हैं।",
        difficulty: "easy",
        skillTag: "AVIATION_TERMS"
      },
      {
        id: "day54_ex_011",
        type: "error_correction",
        prompt: "Correct the sentence: 'Do one wake-up call for my room tomorrow.'",
        correctAnswer: "Could you please schedule a wake-up call for my room tomorrow?",
        acceptableAnswers: [
          "Please arrange a wake-up call for my room tomorrow morning.",
          "I would like to request a wake-up call for tomorrow morning."
        ],
        explanationEn: "Avoid blunt Indian English '*do one wake-up call*'. Use polite indirect framing: 'Could you please schedule a wake-up call...?'.",
        explanationHi: "'Do one wake-up call' के स्थान पर 'Could you please schedule a wake-up call...?' कहें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day54_ex_012",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nPassenger: 'Excuse me, my baggage did not appear on the carousel.'\nAgent: 'Please step over to the lost baggage desk so we can file a property _______ report.'",
        options: ["irregularity", "solvency", "debenture", "decorum"],
        correctAnswer: "irregularity",
        explanationEn: "A Property Irregularity Report (PIR) is the standard airline form for delayed or lost luggage.",
        explanationHi: "खोए हुए सामान के लिए एयरलाइन 'Property Irregularity Report (PIR)' दर्ज करती है।",
        difficulty: "medium",
        skillTag: "AIRLINE_OPERATIONS"
      },
      {
        id: "day54_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The concierge arranged private chauffeur transportation to Terminal 2.'",
        correctAnswer: "The concierge arranged private chauffeur transportation to Terminal 2.",
        explanationEn: "'The concierge arranged private chauffeur transportation to Terminal 2.'",
        explanationHi: "होटल आतिथ्य वाक्य का श्रुतलेख अभ्यास।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day54_ex_014",
        type: "matching",
        prompt: "Match the travel area with its primary activity:",
        pairs: [
          { left: "Customs", right: "Declaring imported goods and high-value taxable currency" },
          { left: "Immigration", right: "Verifying passports, entry visas, and border legality" },
          { left: "Tarmac", right: "Paved runway area where aircraft park and taxi" },
          { left: "Valet", right: "Attendant parking and retrieving vehicles for hotel guests" }
        ],
        explanationEn: "Matching travel zones and functions.",
        explanationHi: "यात्रा क्षेत्रों और उनके मुख्य कार्यों का सही मिलान।",
        difficulty: "easy",
        skillTag: "TRAVEL_ZONES"
      },
      {
        id: "day54_ex_015",
        type: "fill_blank",
        prompt: "Two hotel rooms situated side-by-side with an internal connecting door are called _______ rooms.",
        correctAnswer: "adjoining",
        acceptableAnswers: ["connecting"],
        explanationEn: "'Adjoining' or 'connecting' rooms.",
        explanationHi: "अंदर से जुड़े हुए कमरों को 'adjoining / connecting rooms' कहते हैं।",
        difficulty: "easy",
        skillTag: "HOTEL_ROOM_TYPES"
      },
      {
        id: "day54_ex_016",
        type: "multiple_choice",
        prompt: "What does 'Incidentals' mean on a hotel checkout bill?",
        options: [
          "Minor secondary expenses incurred during the stay such as minibar snacks, laundry, or telephone calls",
          "The fee for breathing air inside the hotel lobby",
          "The cost of building the hotel structure",
          "Tips given to the taxi driver outside"
        ],
        correctAnswer: "Minor secondary expenses incurred during the stay such as minibar snacks, laundry, or telephone calls",
        explanationEn: "Incidentals cover discretionary room charges like minibar or pay-per-view movies.",
        explanationHi: "होटल में ठहरने के दौरान किए गए छोटे आकस्मिक खर्चों (मिनीबार, लांड्री) को 'incidentals' कहते हैं।",
        difficulty: "easy",
        skillTag: "HOTEL_BILLING"
      },
      {
        id: "day54_ex_017",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'हमारा विमान शिकागो में खराब मौसम के कारण उतरने में असमर्थ रहा।'",
        correctAnswer: "Our aircraft was unable to land in Chicago due to severe weather.",
        acceptableAnswers: [
          "Our flight could not land in Chicago because of inclement weather.",
          "Due to bad weather, our plane was unable to touch down in Chicago."
        ],
        explanationEn: "'Our aircraft was unable to land in Chicago due to severe weather.'",
        explanationHi: "'Unable to land due to severe weather' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day54_ex_018",
        type: "error_correction",
        prompt: "Correct the sentence: 'We should booked the train tickets earlier.'",
        correctAnswer: "We should have booked the train tickets earlier.",
        acceptableAnswers: [
          "We ought to have booked the train tickets earlier."
        ],
        explanationEn: "Past modal of regret: 'should have + past participle' ('should have booked', NOT '*should booked*').",
        explanationHi: "अतीत के पछतावे के लिए 'should have booked' का प्रयोग होगा ('should booked' गलत है)।",
        difficulty: "easy",
        skillTag: "PAST_MODALS"
      },
      {
        id: "day54_ex_019",
        type: "sentence_building",
        prompt: "Build an airport directive: [boarding passes / gate / present / passengers / at / must / the]",
        correctAnswer: "Passengers must present boarding passes at the gate.",
        acceptableAnswers: [
          "At the gate, passengers must present boarding passes."
        ],
        explanationEn: "Subject + Modal + Verb + Object + Prepositional Location.",
        explanationHi: "सही वाक्य: Passengers must present boarding passes at the gate.",
        difficulty: "medium",
        skillTag: "SYNTAX_BUILDING"
      },
      {
        id: "day54_ex_020",
        type: "multiple_choice",
        prompt: "What is a 'Berth' in railway terminology?",
        options: [
          "A designated sleeping bed or shelf on an overnight passenger train",
          "The ticket window at the station",
          "The horn blown by the locomotive",
          "The station master's office"
        ],
        correctAnswer: "A designated sleeping bed or shelf on an overnight passenger train",
        explanationEn: "A berth is a built-in sleeping accommodation on trains or ships.",
        explanationHi: "ट्रेन या जहाज में सोने के लिए आरक्षित सीट/बिस्तर को 'Berth' कहते हैं।",
        difficulty: "easy",
        skillTag: "RAILWAY_TERMS"
      },
      {
        id: "day54_ex_021",
        type: "fill_blank",
        prompt: "A detailed schedule outlining destinations, transportation times, and hotel vouchers for a trip is an _______.",
        correctAnswer: "itinerary",
        explanationEn: "An itinerary documents travel plans.",
        explanationHi: "यात्रा की पूरी समय सारिणी और योजना को 'itinerary' (यात्रा कार्यक्रम) कहते हैं।",
        difficulty: "easy",
        skillTag: "TRAVEL_VOCABULARY"
      },
      {
        id: "day54_ex_022",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The airline provided complimentary overnight lodging due to the mechanical cancellation.'",
        correctAnswer: "यांत्रिक कारणों से उड़ान रद्द होने के कारण एयरलाइन ने मानार्थ (निःशुल्क) रात्रि विश्राम प्रदान किया।",
        acceptableAnswers: [
          "तकनीकी खराबी से फ्लाइट कैंसिल होने पर एयरलाइन ने फ्री होटल का कमरा दिया।"
        ],
        explanationEn: "'Complimentary overnight lodging' = मानार्थ (निःशुल्क) रात्रि विश्राम.",
        explanationHi: "सटीक आतिथ्य हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day54_ex_023",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nHotel Guest: 'We would like to explore the historic downtown district.'\nFront Desk: 'Our _______ can provide a curated city map and arrange a walking tour guide.'",
        options: ["concierge", "locomotive", "carousel", "tarmac"],
        correctAnswer: "concierge",
        explanationEn: "The concierge curates city recommendations and books tours.",
        explanationHi: "पर्यटन और टूर व्यवस्था के लिए 'concierge' सहायता करता है।",
        difficulty: "easy",
        skillTag: "HOSPITALITY_SERVICES"
      },
      {
        id: "day54_ex_024",
        type: "error_correction",
        prompt: "Correct the sentence: 'I am keeping my two luggages in the upper berth.'",
        correctAnswer: "I am placing my two bags on the upper berth.",
        acceptableAnswers: [
          "I am putting my two pieces of luggage on the upper berth.",
          "I am placing my two suitcases in the overhead rack."
        ],
        explanationEn: "Say 'two bags / two pieces of luggage' (not '*two luggages*') and use 'on the upper berth'.",
        explanationHi: "'Two luggages' के बजाय 'two bags' या 'two pieces of luggage' कहें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day54_ex_025",
        type: "speaking_pronunciation",
        prompt: "Read aloud with refined hospitality cadence: 'The concierge arranged complimentary valet parking and confirmed our adjoining suite reservation.'",
        targetText: "The concierge arranged complimentary valet parking and confirmed our adjoining suite reservation.",
        phoneticFocus: "Stress on /kɒn.siˈeəʒ/, /ˈvæl.eɪ/, and /swiːt/",
        explanationEn: "Master the French loanword phonetics in luxury hospitality registers.",
        explanationHi: "आतिथ्य शब्दावली का सटीक उच्चारण और लय।",
        difficulty: "medium",
        skillTag: "PRONUNCIATION_SPEAKING"
      },
      {
        id: "day54_ex_026",
        type: "fill_blank",
        prompt: "Passengers must not _______ from the aircraft until the ground steps are firmly secured.",
        correctAnswer: "disembark",
        acceptableAnswers: ["deplane", "exit"],
        explanationEn: "'Disembark' or 'deplane' is the formal term for getting off an aircraft or ship.",
        explanationHi: "विमान से उतरने के लिए औपचारिक शब्द 'disembark' है।",
        difficulty: "easy",
        skillTag: "AVIATION_VOCABULARY"
      },
      {
        id: "day54_ex_027",
        type: "multiple_choice",
        prompt: "What does an 'Overbooked' flight mean?",
        options: [
          "The airline sold more tickets than there are physical seats on the aircraft",
          "The airplane has too many books in its cargo hold",
          "Every passenger brought five pieces of luggage",
          "The pilots ordered too many meals"
        ],
        correctAnswer: "The airline sold more tickets than there are physical seats on the aircraft",
        explanationEn: "Overbooking is the commercial practice of selling seats beyond capacity anticipating no-shows.",
        explanationHi: "जब एयरलाइन विमान में उपलब्ध सीटों से अधिक टिकट बेच देती है, तो उसे 'overbooked' कहते हैं।",
        difficulty: "easy",
        skillTag: "AIRLINE_OPERATIONS"
      },
      {
        id: "day54_ex_028",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'कृपया मुझे बताएं कि क्या चेक-इन सामान का वजन 23 किलोग्राम से अधिक है।'",
        correctAnswer: "Please let me know if the checked baggage exceeds 23 kilograms.",
        acceptableAnswers: [
          "Please tell me if the weight of my checked luggage is over 23 kg.",
          "Could you check if the checked baggage exceeds the 23-kilogram limit?"
        ],
        explanationEn: "'Please let me know if the checked baggage exceeds 23 kilograms.'",
        explanationHi: "'Checked baggage exceeds 23 kilograms' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day54_ex_029",
        type: "sentence_ordering",
        prompt: "Order into a deduction: [blizzard / grounded / must have been / the flight / by / the]",
        correctAnswer: "The flight must have been grounded by the blizzard.",
        acceptableAnswers: [
          "By the blizzard, the flight must have been grounded."
        ],
        explanationEn: "Subject + Past Modal Passive + Agent.",
        explanationHi: "सही क्रम: The flight must have been grounded by the blizzard.",
        difficulty: "medium",
        skillTag: "PAST_MODALS"
      },
      {
        id: "day54_ex_030",
        type: "fill_blank",
        prompt: "A heavy electric or diesel engine used for pulling railway cars along tracks is a _______.",
        correctAnswer: "locomotive",
        explanationEn: "A locomotive is the rail vehicle providing motive power for a train.",
        explanationHi: "ट्रेन के इंजन को 'locomotive' कहा जाता है।",
        difficulty: "easy",
        skillTag: "RAILWAY_TERMS"
      },
      {
        id: "day54_ex_031",
        type: "multiple_choice",
        prompt: "What is an 'Aisle Seat' on a commercial airliner?",
        options: [
          "A seat situated immediately adjacent to the central walking corridor",
          "A seat with a view through the window",
          "A seat located in the middle between two passengers",
          "A seat inside the pilot's cockpit"
        ],
        correctAnswer: "A seat situated immediately adjacent to the central walking corridor",
        explanationEn: "An aisle seat sits next to the walkway/corridor.",
        explanationHi: "गलियारे के ठीक बगल वाली सीट को 'Aisle Seat' कहते हैं (उच्चारण: 'आइल')।",
        difficulty: "easy",
        skillTag: "AIRLINE_SEATING"
      },
      {
        id: "day54_ex_032",
        type: "error_correction",
        prompt: "Correct the sentence: 'The flight was so late, we might missed our connecting train.'",
        correctAnswer: "The flight was so late that we might have missed our connecting train.",
        acceptableAnswers: [
          "Because the flight was delayed, we could have missed our connecting train."
        ],
        explanationEn: "Use 'might have missed' for past possibility (not '*might missed*').",
        explanationHi: "अतीत की संभावना के लिए 'might have missed' का प्रयोग होगा ('might missed' गलत है)।",
        difficulty: "medium",
        skillTag: "PAST_MODALS"
      },
      {
        id: "day54_ex_033",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'All international passengers must complete a customs declaration form upon arrival.'",
        correctAnswer: "सभी अंतरराष्ट्रीय यात्रियों को आगमन पर एक सीमा शुल्क (कस्टम्स) घोषणा पत्र भरना होगा।",
        acceptableAnswers: [
          "पहुंचने पर सभी विदेशी यात्रियों को कस्टम घोषणा फॉर्म भरना अनिवार्य है।"
        ],
        explanationEn: "'Customs declaration form upon arrival' = आगमन पर सीमा शुल्क घोषणा पत्र.",
        explanationHi: "सटीक हवाई अड्डा आव्रजन अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day54_ex_034",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nHotel Guest: 'Is it possible to check out two hours late at 1:00 PM?'\nReceptionist: 'Certainly, sir. As an executive loyalty member, late check-out is _______.'",
        options: ["complimentary", "dishonored", "prohibited", "subordinate"],
        correctAnswer: "complimentary",
        explanationEn: "Late check-out is often provided free (complimentary) to elite loyalty members.",
        explanationHi: "लॉयल्टी सदस्यों को देर से चेक-आउट की सुविधा मुफ्त (complimentary) दी जाती है।",
        difficulty: "easy",
        skillTag: "HOTEL_HOSPITALITY"
      },
      {
        id: "day54_ex_035",
        type: "fill_blank",
        prompt: "The airline imposed a fifty-dollar _______ for baggage exceeding the maximum weight limit.",
        correctAnswer: "surcharge",
        acceptableAnswers: ["fee", "penalty"],
        explanationEn: "'Surcharge / fee' for overweight luggage.",
        explanationHi: "अतिरिक्त वजन पर लगने वाले शुल्क को 'surcharge' कहते हैं।",
        difficulty: "easy",
        skillTag: "AIRLINE_PRICING"
      },
      {
        id: "day54_ex_036",
        type: "matching",
        prompt: "Match the hotel role with its service responsibility:",
        pairs: [
          { left: "Concierge", right: "Arranging excursions, transport, and private reservations" },
          { left: "Housekeeping", right: "Restocking towels, bed linens, and room cleanliness" },
          { left: "Valet", right: "Managing guest vehicle parking and retrieval" },
          { left: "Front Desk Clerk", right: "Handling check-in, keycards, and final invoicing" }
        ],
        explanationEn: "Hospitality roles and duties.",
        explanationHi: "होटल कर्मचारियों और उनके दायित्वों का सही मिलान।",
        difficulty: "easy",
        skillTag: "HOSPITALITY_ROLES"
      },
      {
        id: "day54_ex_037",
        type: "error_correction",
        prompt: "Correct the sentence: 'Please leave me near the platform entrance.'",
        correctAnswer: "Please drop me off near the platform entrance.",
        acceptableAnswers: [
          "Could you drop me off by the platform entrance?",
          "Please let me out near the platform entrance."
        ],
        explanationEn: "Use 'drop me off' instead of '*leave me*'.",
        explanationHi: "वाहन से उतारने के लिए 'drop me off' का प्रयोग करें ('leave me' नहीं)।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day54_ex_038",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The conductor verified our compartment reservations before the express train departed.'",
        correctAnswer: "The conductor verified our compartment reservations before the express train departed.",
        explanationEn: "'The conductor verified our compartment reservations before the express train departed.'",
        explanationHi: "रेलवे शब्दावली का श्रुतलेख अभ्यास।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day54_ex_039",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'सीमा शुल्क अधिकारियों ने यात्री को अपना सूटकेस खोलने का निर्देश दिया।'",
        correctAnswer: "Customs officers instructed the passenger to open his suitcase.",
        acceptableAnswers: [
          "The customs officials directed the traveler to open his suitcase.",
          "Customs officers asked the passenger to unlock his bag."
        ],
        explanationEn: "'Customs officers instructed the passenger to open his suitcase.'",
        explanationHi: "'Customs officers instructed the passenger to open his suitcase' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day54_ex_040",
        type: "sentence_building",
        prompt: "Build a hospitality offer: [complimentary / guests / Wi-Fi / enjoy / all / high-speed]",
        correctAnswer: "All guests enjoy complimentary high-speed Wi-Fi.",
        acceptableAnswers: [
          "Complimentary high-speed Wi-Fi is enjoyed by all guests."
        ],
        explanationEn: "Subject + Verb + Adjective + Object.",
        explanationHi: "सही वाक्य: All guests enjoy complimentary high-speed Wi-Fi.",
        difficulty: "medium",
        skillTag: "SYNTAX_BUILDING"
      },
      {
        id: "day54_ex_041",
        type: "multiple_choice",
        prompt: "Which term refers to an aircraft moving slowly on the ground before takeoff or after landing?",
        options: ["Taxiing", "Soaring", "Cruising", "Hovering"],
        correctAnswer: "Taxiing",
        explanationEn: "Taxiing is the movement of an aircraft on the ground under its own power.",
        explanationHi: "हवाई पट्टी पर विमान के जमीन पर चलने को 'Taxiing' कहते हैं।",
        difficulty: "easy",
        skillTag: "AVIATION_TERMS"
      },
      {
        id: "day54_ex_042",
        type: "fill_blank",
        prompt: "The flight was _______ to an alternate airport because thick fog reduced visibility below minimum safety standards.",
        correctAnswer: "diverted",
        acceptableAnswers: ["rerouted"],
        explanationEn: "An aircraft is 'diverted' to an alternate airfield.",
        explanationHi: "विमान को दूसरी जगह मोड़े जाने को 'diverted' कहते हैं।",
        difficulty: "easy",
        skillTag: "AVIATION_OPERATIONS"
      },
      {
        id: "day54_ex_043",
        type: "error_correction",
        prompt: "Correct the sentence: 'I am wanting an adjoining room with sea view.'",
        correctAnswer: "I would like an adjoining room with an ocean view.",
        acceptableAnswers: [
          "Could we have an adjoining room overlooking the sea?",
          "I wish to request an adjoining room with a sea view."
        ],
        explanationEn: "Use polite conditional 'I would like...' rather than stative progressive '*I am wanting*'.",
        explanationHi: "'I am wanting' के स्थान पर 'I would like an adjoining room...' कहें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day54_ex_044",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'A luxury chauffeur was dispatched to collect the executive delegates from Terminal 1.'",
        correctAnswer: "टर्मिनल 1 से कार्यकारी प्रतिनिधियों को लाने के लिए एक लक्जरी ड्राइवर भेजा गया था।",
        acceptableAnswers: [
          "टर्मिनल 1 से मेहमानों को लेने के लिए प्राइवेट गाड़ी और ड्राइवर भेजा गया।"
        ],
        explanationEn: "'A luxury chauffeur was dispatched to collect the executive delegates from Terminal 1.'",
        explanationHi: "सटीक आतिथ्य परिवहन अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day54_ex_045",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nAirline Gate Agent: 'We are now inviting passengers in rows 20 through 35 to _______.'\nPassenger: 'That is our group; let us proceed with our boarding passes.'",
        options: ["board", "disembark", "reconcile", "foreclose"],
        correctAnswer: "board",
        explanationEn: "Passengers 'board' the aircraft when invited at the gate.",
        explanationHi: "विमान में चढ़ने की प्रक्रिया को 'board' करना कहते हैं।",
        difficulty: "easy",
        skillTag: "AIRLINE_PROCEDURES"
      },
      {
        id: "day54_ex_046",
        type: "fill_blank",
        prompt: "The ticket collector on an intercity express train is officially known as the train _______.",
        correctAnswer: "conductor",
        acceptableAnswers: ["ticket examiner", "guard"],
        explanationEn: "A train conductor or ticket examiner manages passenger tickets and safety.",
        explanationHi: "ट्रेन के टिकट निरीक्षक को 'conductor' कहते हैं।",
        difficulty: "easy",
        skillTag: "RAILWAY_TERMS"
      },
      {
        id: "day54_ex_047",
        type: "multiple_choice",
        prompt: "Why is 'I have two luggages' grammatically incorrect in English?",
        options: [
          "Because 'luggage' is an uncountable noun that cannot be pluralized with -s or counted directly with numbers",
          "Because luggage is a verb",
          "Because you can only have three pieces of luggage",
          "Because it is an adjective"
        ],
        correctAnswer: "Because 'luggage' is an uncountable noun that cannot be pluralized with -s or counted directly with numbers",
        explanationEn: "'Luggage' is uncountable. Use 'two pieces of luggage' or 'two bags'.",
        explanationHi: "'Luggage' एक अगणनीय (Uncountable) संज्ञा है, इसलिए इसमें -s नहीं लगता। 'Two pieces of luggage' सही है।",
        difficulty: "easy",
        skillTag: "GRAMMAR_THEORY"
      },
      {
        id: "day54_ex_048",
        type: "error_correction",
        prompt: "Correct the sentence: 'He must diverted the flight because storm was there.'",
        correctAnswer: "The pilot must have diverted the flight because of the storm.",
        acceptableAnswers: [
          "The flight must have been diverted due to the severe storm."
        ],
        explanationEn: "Past deduction: 'must have diverted' or passive 'must have been diverted'.",
        explanationHi: "अतीत के अनुमान के लिए 'must have diverted / must have been diverted' का प्रयोग होगा।",
        difficulty: "medium",
        skillTag: "PAST_MODALS"
      },
      {
        id: "day54_ex_049",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'कृपया जांचें कि क्या हमारे कमरे में मिनीबार का उपयोग निःशुल्क है या अतिरिक्त शुल्क लगेगा।'",
        correctAnswer: "Please check whether the in-room minibar is complimentary or incurs an additional surcharge.",
        acceptableAnswers: [
          "Could you clarify if the minibar items are complimentary or subject to a surcharge?",
          "Please let me know if minibar items are free or chargeable."
        ],
        explanationEn: "'Please check whether the in-room minibar is complimentary or incurs an additional surcharge.'",
        explanationHi: "'Complimentary or incurs an additional surcharge' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day54_ex_050",
        type: "sentence_ordering",
        prompt: "Order into a hotel procedure: [luggage / room / delivered / our / to / was / the]",
        correctAnswer: "Our luggage was delivered to the room.",
        acceptableAnswers: [
          "To the room, our luggage was delivered."
        ],
        explanationEn: "Subject + Passive Verb + Prepositional Destination.",
        explanationHi: "सही वाक्य: Our luggage was delivered to the room.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day54_ex_051",
        type: "fill_blank",
        prompt: "The airline offered a travel voucher because our transatlantic flight was _______.",
        correctAnswer: "overbooked",
        acceptableAnswers: ["delayed", "cancelled"],
        explanationEn: "'Overbooked / delayed / cancelled'.",
        explanationHi: "विमान ओवरबुक या लेट होने पर एयरलाइन वाउचर देती है।",
        difficulty: "easy",
        skillTag: "AIRLINE_OPERATIONS"
      },
      {
        id: "day54_ex_052",
        type: "multiple_choice",
        prompt: "Which phrase is the most natural way to ask a friend to give you a car ride to the airport?",
        options: [
          "Could you drop me off at the airport tomorrow morning?",
          "Can you leave me at the airport?",
          "Throw me to the airport tomorrow.",
          "Give me departure in airport."
        ],
        correctAnswer: "Could you drop me off at the airport tomorrow morning?",
        explanationEn: "'Drop me off at the airport' is the standard natural collocation.",
        explanationHi: "हवाई अड्डे तक गाड़ी से छोड़ने के लिए 'drop me off at the airport' सबसे स्वाभाविक अभिव्यक्ति है।",
        difficulty: "easy",
        skillTag: "TRANSIT_COLLOCATIONS"
      },
      {
        id: "day54_ex_053",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The station announcement confirmed that the intercity express is operating precisely on schedule.'",
        correctAnswer: "स्टेशन की घोषणा ने पुष्टि की कि इंटरसिटी एक्सप्रेस बिल्कुल निर्धारित समय पर चल रही है।",
        acceptableAnswers: [
          "स्टेशन अनाउंसमेंट के अनुसार एक्सप्रेस ट्रेन ठीक समय पर चल रही है।"
        ],
        explanationEn: "'Operating precisely on schedule' = बिल्कुल निर्धारित समय पर चल रही है.",
        explanationHi: "सटीक रेलवे घोषणा का हिंदी अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day54_ex_054",
        type: "active_recall",
        prompt: "State two common L1 Indian English travel errors regarding luggage and flights, and provide their correct international English equivalents.",
        correctAnswer: "1. Error: Saying '*I have two luggages*' ➔ Correct: 'I have two pieces of luggage' or 'two bags' (luggage is uncountable). 2. Error: Saying '*My flight got missed*' ➔ Correct: 'I missed my flight' (the traveler is the active agent who missed the departure).",
        acceptableAnswers: [
          "1. 'Luggages' is wrong; use 'pieces of luggage'. 2. 'Flight got missed' is wrong; use 'I missed my flight'."
        ],
        explanationEn: "Deep remediation of mass noun 'luggage' and active agent phrasing in transit.",
        explanationHi: "1. 'Luggages' गलत है, 'pieces of luggage' कहें। 2. 'Flight got missed' गलत है, 'I missed my flight' कहें।",
        difficulty: "hard",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day54_ex_055",
        type: "error_correction",
        prompt: "Correct the sentence: 'Please tell if I am having any extra baggage charges.'",
        correctAnswer: "Could you please check if my baggage incurs any excess baggage fees?",
        acceptableAnswers: [
          "Please let me know if there are any excess baggage charges.",
          "Could you check if I have to pay an excess baggage surcharge?"
        ],
        explanationEn: "Use professional phrasing: 'excess baggage fees / surcharges' (not '*having any extra baggage charges*').",
        explanationHi: "'Excess baggage fees / surcharges' एक मानक और औपचारिक विमानन अभिव्यक्ति है।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day54_diag_001",
        title: "Controlled Dialogue: Airport Check-In and Baggage Allocation",
        context: "A passenger checks in for an international transatlantic flight, managing seat selection and baggage allowances.",
        characters: ["Check-In Agent (Sarah)", "Passenger (Dev)"],
        lines: [
          { speaker: "Check-In Agent (Sarah)", text: "Good morning, sir. Welcome to British Airways. May I please see your passport and flight itinerary?", hindi: "शुभ प्रभात, श्रीमान। ब्रिटिश एयरवेज में आपका स्वागत है। क्या मैं कृपया आपका पासपोर्ट और उड़ान कार्यक्रम देख सकती हूँ?" },
          { speaker: "Passenger (Dev)", text: "Good morning. Here is my biometric passport and confirmation voucher. I would like to check in two pieces of luggage.", hindi: "शुभ प्रभात। यह मेरा बायोमेट्रिक पासपोर्ट और पुष्टिकरण वाउचर है। मैं सामान के दो टुकड़े चेक-इन करना चाहता हूँ।" },
          { speaker: "Check-In Agent (Sarah)", text: "Please place the first suitcase on the scale. Perfect, twenty-one kilograms. Your allowance is twenty-three kilograms per bag, so there is no excess surcharge.", hindi: "कृपया पहला सूटकेस तराजू पर रखें। बहुत बढ़िया, इक्कीस किलोग्राम। आपका आवंटन प्रति बैग तेईस किलोग्राम है, इसलिए कोई अतिरिक्त अधिभार नहीं है।" },
          { speaker: "Passenger (Dev)", text: "Excellent. Could you kindly check if an aisle seat is available toward the front of the aircraft?", hindi: "शानदार। क्या आप कृपया देख सकती हैं कि क्या विमान के आगे की तरफ कोई आइल (गलियारे वाली) सीट उपलब्ध है?" },
          { speaker: "Check-In Agent (Sarah)", text: "Certainly. I have assigned you seat 14C on the aisle. Your boarding pass is printed; boarding begins at gate B22 at 11:15 AM.", hindi: "निश्चित रूप से। मैंने आपको गलियारे पर सीट 14C आवंटित की है। आपका बोर्डिंग पास प्रिंट हो गया है; बोर्डिंग गेट B22 पर सुबह 11:15 बजे शुरू होगी।" }
        ]
      },
      {
        id: "day54_diag_002",
        title: "Guided Dialogue: Requesting Luxury Concierge Services at a Grand Hotel",
        context: "A corporate guest consults the hotel concierge for private chauffeur transport and theater bookings.",
        characters: ["Hotel Concierge (Jean-Luc)", "Guest (Pooja)"],
        lines: [
          { speaker: "Guest (Pooja)", text: "Good evening, Jean-Luc. My colleague and I have an executive dinner near Covent Garden tonight and need seamless transportation.", hindi: "शुभ संध्या, जीन-ल्यूक। मेरे सहकर्मी और मेरे पास आज रात कोवेंट गार्डन के पास एक कार्यकारी डिनर है और हमें सुगम परिवहन की आवश्यकता है।" },
          { speaker: "Hotel Concierge (Jean-Luc)", text: "Good evening, Ms. Pooja. I would be delighted to arrange a private Mercedes chauffeur to drop you off directly at the restaurant at 7:30 PM.", hindi: "शुभ संध्या, सुश्री पूजा। शाम 7:30 बजे आपको सीधे रेस्तरां में छोड़ने के लिए मुझे एक निजी मर्सिडीज ड्राइवर की व्यवस्था करने में प्रसन्नता होगी।" },
          { speaker: "Guest (Pooja)", text: "That would be wonderful. Also, could the concierge desk procure two premium orchestra stalls tickets for the Royal Opera tomorrow evening?", hindi: "यह बहुत अच्छा रहेगा। इसके अलावा, क्या कंसीयर्ज डेस्क कल शाम के लिए रॉयल ओपेरा के दो प्रीमियम ऑर्केस्ट्रा स्टॉल टिकट प्राप्त कर सकता है?" },
          { speaker: "Hotel Concierge (Jean-Luc)", text: "Certainly. I will secure the tickets through our private box office syndicate and deliver them to your suite before breakfast.", hindi: "बिल्कुल। मैं हमारे निजी बॉक्स ऑफिस सिंडिकेट के माध्यम से टिकट सुरक्षित करूँगा और नाश्ते से पहले उन्हें आपके सुइट में पहुंचा दूंगा।" },
          { speaker: "Guest (Pooja)", text: "Thank you for the impeccable service. Please charge all incidentals to our primary room folio.", hindi: "त्रुटिहीन सेवा के लिए धन्यवाद। कृपया सभी आकस्मिक खर्चों को हमारे प्राथमिक रूम बिल में जोड़ दें।" }
        ]
      },
      {
        id: "day54_diag_003",
        title: "Free Problem-Solving Dialogue: Managing a Flight Diversion and Layover Disruption",
        context: "A stranded traveler and an airline customer service manager negotiate emergency lodging and rerouted boarding passes.",
        characters: ["Service Manager (Garrison)", "Stranded Passenger (Manish)"],
        lines: [
          { speaker: "Stranded Passenger (Manish)", text: "Excuse me. Our inbound flight from Tokyo was diverted to Manchester due to severe blizzards, causing us to miss our transatlantic connection.", hindi: "सुनिए। टोक्यो से हमारी आने वाली उड़ान को भीषण बर्फीले तूफान के कारण मैनचेस्टर की ओर मोड़ दिया गया था, जिससे हमारा ट्रान्साटलांटिक कनेक्शन छूट गया।" },
          { speaker: "Service Manager (Garrison)", text: "I sincerely apologize for the weather disruption, sir. Because this weather cancellation resulted in an overnight layover, we have rebooked you on tomorrow's 9:00 AM direct flight.", hindi: "मौसम के व्यवधान के लिए मैं ईमानदारी से क्षमा चाहता हूँ, श्रीमान। चूंकि इस मौसम रद्दीकरण के परिणामस्वरूप रात भर का ठहराव हुआ है, इसलिए हमने आपको कल की सुबह 9:00 बजे की सीधी उड़ान में फिर से बुक किया है।" },
          { speaker: "Stranded Passenger (Manish)", text: "What arrangements are being made for overnight accommodation, meal vouchers, and our checked baggage?", hindi: "रात भर ठहरने, भोजन वाउचर और हमारे चेक किए गए सामान के लिए क्या व्यवस्था की जा रही है?" },
          { speaker: "Service Manager (Garrison)", text: "We have issued a complimentary lodging voucher for the Hilton Airport Hotel, including full buffet breakfast and round-trip shuttle transfers. Your checked baggage will transfer automatically to tomorrow's aircraft.", hindi: "हमने हिल्टन एयरपोर्ट होटल के लिए एक मानार्थ (निःशुल्क) आवास वाउचर जारी किया है, जिसमें पूरा बुफे नाश्ता और राउंड-ट्रिप शटल स्थानांतरण शामिल है। आपका चेक किया गया सामान कल के विमान में स्वतः स्थानांतरित हो जाएगा।" },
          { speaker: "Stranded Passenger (Manish)", text: "Thank you for resolving this efficiently. Here is my voucher; I will proceed to the hotel shuttle bay immediately.", hindi: "इसे कुशलतापूर्वक हल करने के लिए धन्यवाद। यह मेरा वाउचर है; मैं तुरंत होटल शटल बे की ओर बढ़ूँगा।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are arriving at a luxury international hotel reception desk following a delayed transatlantic flight. Inquire about your reservation, request an adjoining room upgrade with complimentary breakfast, and arrange a morning wake-up call.",
      prompts: [
        "Present your passport and confirmation voucher politely.",
        "Explain that your flight was delayed and request an adjoining suite overlooking the gardens.",
        "Ask whether high-speed fiber Wi-Fi and breakfast are included complimentary.",
        "Schedule a front-desk wake-up call for 6:30 AM and arrange concierge valet transport."
      ],
      targetExpressions: [
        "I have a reservation under the name of...",
        "Our flight was delayed, but we have arrived for check-in.",
        "Would it be possible to upgrade to an adjoining suite?",
        "Is complimentary buffet breakfast included?",
        "Could you please schedule an automated wake-up call for 6:30 AM?"
      ]
    },
    roleplay: {
      scenario: "Roleplay an airline baggage counter dispute where a passenger's checked suitcase exceeds the 23-kilogram allowance and the passenger redistributes weight to avoid excess surcharges.",
      roleA: "Check-In Agent: Politeness combined with strict enforcement of weight limits (23 kg max), quoting the $50 excess baggage surcharge.",
      roleB: "Passenger: Checking the weight, redistributing heavy books into a carry-on backpack, and re-weighing the suitcase to achieve exact compliance.",
      sampleDialogue: "Agent: 'Sir, your suitcase weighs 26.5 kilograms, which incurs a thirty-dollar overweight surcharge.' | Passenger: 'Allow me to remove these heavy catalogs into my carry-on bag so that the suitcase complies with the 23-kilogram allotment.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day54_bm_001",
        title: "Drafting a Formal Hotel Concierge Request and Itinerary Memo",
        prompt: "Draft a formal, structured 5–6 sentence written concierge service request from an executive guest arranging luxury transport, theater reservations, and adjoining room accommodations.",
        sampleAnswerEn: "To: Chief Concierge, The Grand Kensington Hotel\nFrom: Executive Suite 502 (Dr. Rajiv Sengupta)\nSubject: Concierge Transportation and Dining Arrangements — October 28th\n\nDear Concierge Team,\n\nI would like to request your assistance with several travel arrangements during our stay. Firstly, could you please schedule a private chauffeur to drop our delegation off at Terminal 4 tomorrow morning at precisely 6:15 AM? Secondly, we would appreciate it if you could secure four premium stalls tickets for tomorrow evening's symphony performance at the Royal Albert Hall. Additionally, please ensure that our breakfast vouchers and baggage retrieval tags are delivered to room 502 prior to our departure. All associated incidental expenses and transportation surcharges should be billed directly to our corporate room folio. Thank you for your exemplary hospitality and attentive service.\n\nWarm regards,\nDr. Rajiv Sengupta",
        sampleAnswerHi: "प्रति: मुख्य कंसीयर्ज, द ग्रैंड केंसिंग्टन होटल\nप्रेषक: कार्यकारी सुइट 502 (डॉ. राजीव सेनगुप्ता)\nविषय: कंसीयर्ज परिवहन और भोजन व्यवस्था — 28 अक्टूबर\n\nप्रिय कंसीयर्ज टीम,\n\nमैं हमारे ठहरने के दौरान कई यात्रा व्यवस्थाओं में आपकी सहायता का अनुरोध करना चाहूंगा। सबसे पहले, क्या आप कृपया कल सुबह ठीक 6:15 बजे हमारे प्रतिनिधिमंडल को टर्मिनल 4 पर छोड़ने के लिए एक निजी ड्राइवर की व्यवस्था कर सकते हैं? दूसरे, यदि आप रॉयल अल्बर्ट हॉल में कल शाम के सिम्फनी प्रदर्शन के लिए चार प्रीमियम स्टॉल टिकट सुरक्षित कर सकें तो हम आभारी होंगे। इसके अलावा, कृपया सुनिश्चित करें कि हमारे नाश्ते के वाउचर और बैगेज टैग हमारे प्रस्थान से पहले कमरा 502 में पहुंचा दिए जाएं। सभी संबंधित आकस्मिक खर्चों और परिवहन अधिभार को सीधे हमारे कॉर्पोरेट रूम बिल में जोड़ा जाना चाहिए। आपके अनुकरणीय आतिथ्य और चौकस सेवा के लिए धन्यवाद।\n\nहार्दिक शुभकामनाएं,\nडॉ. राजीव सेनगुप्ता",
        evaluationCriteria: "Exemplary luxury hospitality register, flawless indirect polite requests, accurate phrasing ('drop our delegation off', 'incidental expenses', 'folio'), zero grammatical flaws."
      },
      {
        id: "day54_bm_002",
        title: "Flight Disruption and Baggage Claim Formal Letter",
        prompt: "Write a 5–6 sentence formal claim letter to an international airline requesting compensation for an overbooked flight disruption, missed rail connections, and delayed carousel baggage.",
        sampleAnswerEn: "To: Customer Relations Directorate, Transatlantic Airways\nSubject: Formal Claim for Involuntary Denied Boarding and Delayed Baggage — Booking #TA-90412\n\nDear Customer Relations Team,\n\nI am writing to formally submit a statutory compensation claim regarding our travel disruption on Flight TA-402 from New York to London Heathrow on November 3rd. Due to the flight being overbooked, my colleague and I were involuntarily denied boarding and placed on a subsequent service with a five-hour layover. Consequently, we missed our pre-booked intercity rail connection to Edinburgh and incurred additional overnight hotel surcharges. Furthermore, upon landing, our two pieces of luggage failed to appear on baggage carousel four, necessitating a Property Irregularity Report. Under international aviation regulations, we request full reimbursement for our missed transit tickets and statutory compensation for delayed baggage delivery. I look forward to receiving your formal response and settlement proposal at your earliest convenience.\n\nSincerely,\nAnanya Roy, Managing Director",
        sampleAnswerHi: "प्रति: ग्राहक संबंध निदेशालय, ट्रान्साटलांटिक एयरवेज\nविषय: अनैच्छिक बोर्डिंग इनकार और सामान में देरी के लिए औपचारिक दावा — बुकिंग #TA-90412\n\nप्रिय ग्राहक संबंध टीम,\n\nमैं 3 नवंबर को न्यूयॉर्क से लंदन हीथ्रो के लिए उड़ान TA-402 पर हमारी यात्रा में हुए व्यवधान के संबंध में औपचारिक रूप से एक वैधानिक मुआवजा दावा प्रस्तुत करने के लिए लिख रही हूँ। उड़ान के ओवरबुक होने के कारण, मुझे और मेरे सहकर्मी को अनैच्छिक रूप से बोर्डिंग से मना कर दिया गया और पांच घंटे के लेओवर वाली बाद की सेवा में रखा गया। नतीजतन, हमारी एडिनबर्ग के लिए पूर्व-बुक की गई इंटरसिटी रेल छूट गई और अतिरिक्त रात भर के होटल अधिभार का भुगतान करना पड़ा। इसके अलावा, उतरने पर, सामान के हमारे दो टुकड़े सामान हिंडोला (कैरोसेल) चार पर नहीं पहुंचे, जिससे संपत्ति अनियमितता रिपोर्ट (PIR) दर्ज करानी पड़ी। अंतरराष्ट्रीय विमानन नियमों के तहत, हम अपने छूटे हुए ट्रांजिट टिकटों के पूर्ण पुनर्भुगतान और विलंबित सामान वितरण के लिए वैधानिक मुआवजे का अनुरोध करते हैं। मुझे आपकी सुविधानुसार आपकी औपचारिक प्रतिक्रिया और निपटान प्रस्ताव की प्रतीक्षा रहेगी।\n\nसादर,\nअनन्या रॉय, प्रबंध निदेशक",
        evaluationCriteria: "High-level aviation legal register, precise vocabulary ('involuntarily denied boarding', 'layover', 'Property Irregularity Report', 'statutory compensation'), complete elimination of Indian English clichés."
      },
      {
        id: "day54_bm_003",
        title: "Past Modal Speculation and Travel Synthesis",
        prompt: "Construct a 5–6 sentence analytical narrative evaluating an international flight diversion caused by severe convective storms, detailing past deductions and railway recovery.",
        sampleAnswerEn: "The transatlantic airliner must have been diverted to Manchester because torrential thunderstorms rendered the Heathrow runways unsafe for landing. Had the airline communicated the diversion earlier, passengers could have made alternate ground transit arrangements before midnight. As a result of the unexpected ground delay, several international travelers missed their connecting sleeper berths to the Scottish Highlands. The ground operations team should have organized dedicated coach shuttles immediately rather than keeping passengers stranded on the tarmac. By daybreak, railway authorities restored normal high-speed electric locomotive services, enabling all stranded delegates to reach Edinburgh safely.",
        sampleAnswerHi: "ट्रान्साटलांटिक विमान का मार्ग अवश्य ही मैनचेस्टर की ओर मोड़ा गया होगा क्योंकि मूसलाधार तूफानों ने हीथ्रो के रनवे को उतरने के लिए असुरक्षित बना दिया था। यदि एयरलाइन ने डायवर्जन की सूचना पहले दी होती, तो यात्री आधी रात से पहले वैकल्पिक जमीनी परिवहन व्यवस्था कर सकते थे। अप्रत्याशित जमीनी देरी के परिणामस्वरूप, कई अंतरराष्ट्रीय यात्रियों की स्कॉटिश हाइलैंड्स के लिए कनेक्टिंग स्लीपर बर्थ छूट गई। ग्राउंड ऑपरेशंस टीम को यात्रियों को हवाई पट्टी (टारमैक) पर फंसाए रखने के बजाय तुरंत समर्पित बस शटल की व्यवस्था करनी चाहिए थी। दिन निकलते ही, रेलवे अधिकारियों ने सामान्य हाई-स्पीड इलेक्ट्रिक लोकोमोटिव सेवाओं को बहाल कर दिया, जिससे सभी फंसे हुए प्रतिनिधि सुरक्षित रूप से एडिनबर्ग पहुंच सके।",
        evaluationCriteria: "Exemplary past modal mastery ('must have been diverted', 'could have made', 'should have organized'), flawless narrative cohesion, high-level transit lexicon."
      }
    ]
  },
  review: {
    quickRecall: [
      {
        q: "Why is 'three luggages' incorrect and what must you say instead?",
        a: "'Luggage' is an uncountable mass noun. You must say 'three pieces of luggage', 'three bags', or 'three suitcases'."
      },
      {
        q: "What does 'Drop off' mean compared to 'Leave me'?",
        a: "'Drop off' means to take someone to a destination by car and let them out. 'Leave me' literally means to abandon someone."
      },
      {
        q: "What is a 'Concierge' in a luxury hotel?",
        a: "A specialized hotel staff member who assists guests by arranging transportation, booking tours, procuring theater tickets, and making restaurant reservations."
      },
      {
        q: "What does 'Complimentary' mean in hospitality?",
        a: "Services or amenities provided free of charge to hotel guests or airline passengers."
      },
      {
        q: "What is the difference between a 'Layover' and a 'Tarmac'?",
        a: "A layover is a waiting period between connecting flights; the tarmac is the paved runway or apron area where airplanes park and taxi."
      }
    ],
    spacedTips: [
      "Always use 'I missed my flight' (active subject) rather than '*my flight got missed*'.",
      "When making polite requests at hotels or airports, use indirect frames: 'Could you kindly check if...' or 'Would it be possible to...'.",
      "Past modals ('must have been diverted', 'should have booked') allow precise logical deductions and reflections regarding travel delays."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day54.js'), `export const day54 = ${JSON.stringify(day54, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day54.js with 55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks");
