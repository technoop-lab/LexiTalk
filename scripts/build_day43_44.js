import fs from 'fs';
import path from 'path';

// DAY 43: Shopping, Product Inquiries & Consumer Communication
const day43 = {
  dayNumber: 43,
  id: "day_43",
  titleEn: "Shopping, Product Inquiries & Consumer Communication",
  titleHi: "खरीदारी, उत्पाद पूछताछ एवं उपभोक्ता संवाद",
  cefr: "A2.2",
  estMinutes: 40,
  prerequisites: "Day 42 (City Transit & Directions)",
  objectivesEn: [
    "Navigate retail environments, department stores, and e-commerce platforms with confidence.",
    "Inquire about garment sizing, fitting rooms, fabric materials, and product availability.",
    "Discuss consumer rights, return policies, manufacturer warranties, receipts, and refund requests.",
    "Negotiate prices diplomatically in appropriate markets using standard international commercial formulas.",
    "Eliminate subcontinental shopping traps such as overuse of '*costly*', '*reduce the rate*', and '*give discount*'."
  ],
  objectivesHi: [
    "खुदरा दुकानों, डिपार्टमेंटल स्टोर्स और ई-कॉमर्स प्लेटफॉर्म्स पर आत्मविश्वास से बातचीत करना।",
    "कपड़ों के साइज, फिटिंग रूम (ट्रायल रूम), कपड़े के प्रकार और स्टॉक की उपलब्धता के बारे में पूछना।",
    "उपभोक्ता अधिकारों, रिटर्न पॉलिसी, वारंटी, रसीद और रिफंड अनुरोधों पर प्रभावी संवाद करना।",
    "उचित बाजारों में शिष्टता के साथ मोलभाव करना और छूट (Discounts) के बारे में पूछना।",
    "भारतीय खरीदारी की आदतों ('costly', 'reduce the rate') को स्वाभाविक अंग्रेजी अभिव्यक्तियों में बदलना।"
  ],
  teach: {
    hindiExplanation: "दिन 43 में हम खरीदारी, उत्पाद पूछताछ और उपभोक्ता संवाद (Consumer Communication) पर ध्यान देंगे।\n\n1. कपड़ों और उत्पाद की पूछताछ (Product Inquiries): 'Do you have this in a medium / size 10?' (क्या यह मीडियम साइज में है?), 'Where is the fitting room / changing room?' (ट्रायल रूम कहाँ है?), 'Is this 100% cotton / genuine leather?' (क्या यह शुद्ध सूती/चमड़े का है?)।\n2. कीमतें और छूट (Prices & Discounts): 'How much does this cost?' या 'How much is this?' कहें। भारत में इस्तेमाल होने वाले शब्द '*costly*' की जगह 'expensive' या 'pricey' का प्रयोग करें। छूट मांगने के लिए '*Reduce the rate*' की जगह 'Is there any discount on this item?' या 'Are these items on sale?' कहें।\n3. रिटर्न और वारंटी (Returns & Warranties): 'What is your return policy?' (आपकी रिटर्न पॉलिसी क्या है?), 'I'd like to exchange this for a larger size' (मैं इसे बड़े साइज से बदलना चाहता हूँ), 'Does this come with a warranty?' (क्या इसके साथ वारंटी मिलती है?)।\n4. बिलिंग और चेकआउट (Checkout): 'Could I get a receipt, please?' (क्या मुझे रसीद मिल सकती है?), 'Do you accept card or contactless payment?'।",
    englishExplanation: "Welcome to Day 43! In this lesson, we master consumer communications across retail, high-street shopping, customer service, and commercial transactions.\n\nKey linguistic components:\n1. Sizing, Fit & Availability: Formulating precise requests regarding apparel dimensions ('a size up/down', 'fitting room', 'in stock', 'out of stock').\n2. Price Inquiry & Commercial Register: Distinguishing between 'on sale' (discounted) and 'for sale' (available for purchase). Using 'expensive' instead of the Indianism 'costly'.\n3. Consumer Rights & Warranty Discourse: Navigating return windows ('within 14 days'), exchange terms, proof of purchase ('receipt'), and product defects ('faulty item', 'store credit').\n4. Polite Commercial Diplomacy: Phrasing inquiries constructively rather than demanding reductions abruptly.",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Idiomatic Prepositions with Sales",
        description: "'On sale' means offered at a discounted price ('These shoes are on sale for $40'). 'For sale' means available for purchase ('Is this vehicle for sale?').",
        register: "Commercial Prepositions"
      },
      {
        ruleNumber: 2,
        title: "Collocation: 'Expensive' vs 'Costly'",
        description: "In modern standard English, 'expensive' is the standard adjective for high-priced goods. 'Costly' typically describes actions causing heavy financial or strategic loss ('a costly mistake').",
        register: "Lexical Collocation"
      },
      {
        ruleNumber: 3,
        title: "Sizing Adverbials ('A size larger / smaller')",
        description: "Use comparative structures with 'size': 'Could I try this in a size larger?' or 'Do you have this a size down?'",
        register: "Comparative Modifiers"
      },
      {
        ruleNumber: 4,
        title: "Conditional Return Phrases",
        description: "Express customer return rights with conditional clauses: 'You can exchange the item provided you retain the original receipt.'",
        register: "Conditional Syntax"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Size / Stock Request",
        formula: "Do you happen to have this in + [Size / Color / Model]?",
        exampleEn: "Do you happen to have this sweater in a large size?",
        meaningHi: "क्या आपके पास यह स्वेटर लार्ज (बड़े) साइज में है?"
      },
      {
        subjectGroup: "Fitting Room Inquiry",
        formula: "May I try this on? Where are the + [fitting / changing] + rooms?",
        exampleEn: "May I try this jacket on? Where are the fitting rooms?",
        meaningHi: "क्या मैं इस जैकेट को पहनकर देख सकता हूँ? फिटिंग रूम कहाँ हैं?"
      },
      {
        subjectGroup: "Discount / Promotion Inquiry",
        formula: "Is there any promotional discount available on + [Item Category]?",
        exampleEn: "Is there any promotional discount available on these winter coats?",
        meaningHi: "क्या इन विंटर कोट्स पर कोई प्रमोशनल छूट उपलब्ध है?"
      },
      {
        subjectGroup: "Exchange / Refund Request",
        formula: "I would like to exchange / return this because + [Reason: it doesn't fit / it's defective].",
        exampleEn: "I would like to exchange this shirt because the seam is torn.",
        meaningHi: "मैं इस शर्ट को बदलना चाहता हूँ क्योंकि इसकी सिलाई उधड़ी हुई है।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Costly', 'Reduce the Rate', and 'Trial Room' Traps",
      hindiPattern: "1. '*This shirt is very costly.*' (direct translation of 'यह शर्ट बहुत महँगी है')\n2. '*Please reduce the rate!*' (literal translation of 'रेट कम करो')\n3. '*Where is the trial room?*'",
      potentialInterference: "Using outdated or literal phrasing that marks the speaker as non-standard in global retail environments.",
      explanation: "Standard English uses 'expensive' or 'pricey'. Rather than 'reduce the rate', ask 'Is the price negotiable?' or 'Is there any discount?'. Internationally, 'fitting room' or 'changing room' is preferred over 'trial room'.",
      naturalSolution: "1. 'This shirt is quite expensive.' | 2. 'Could you offer a discount on this?' | 3. 'Where are the fitting rooms?'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day43_vocab_001", word: "Receipt", pos: "Noun", ipa: "/rɪˈsiːt/", meaningHi: "खरीदारी की रसीद (p silent)", exampleEn: "Always keep your receipt in case you need a refund.", exampleHi: "यदि आपको रिफंड की आवश्यकता हो तो हमेशा अपनी रसीद संभाल कर रखें।" },
      { id: "day43_vocab_002", word: "Fitting room", pos: "Noun", ipa: "/ˈfɪt.ɪŋ ˌruːm/", meaningHi: "वस्त्र परीक्षण कक्ष (ट्रायल रूम)", exampleEn: "The fitting rooms are located near the back of the store.", exampleHi: "फिटिंग रूम स्टोर के पीछे की तरफ स्थित हैं।" },
      { id: "day43_vocab_003", word: "Refund", pos: "Noun / Verb", ipa: "/ˈriː.fʌnd/", meaningHi: "पैसे वापस मिलना / धनवापसी", exampleEn: "The cashier processed a full refund to my card.", exampleHi: "कैशियर ने मेरे कार्ड में पूरा रिफंड प्रोसेस कर दिया।" },
      { id: "day43_vocab_004", word: "Warranty", pos: "Noun", ipa: "/ˈwɒr.ən.ti/", meaningHi: "गारंटी / उत्पाद वारंटी", exampleEn: "This laptop comes with a two-year manufacturer warranty.", exampleHi: "यह लैपटॉप दो साल की निर्माता वारंटी के साथ आता है।" },
      { id: "day43_vocab_005", word: "Discount", pos: "Noun", ipa: "/ˈdɪs.kaʊnt/", meaningHi: "छूट / बट्टा", exampleEn: "Students receive a 10% discount upon showing valid ID.", exampleHi: "छात्रों को वैध पहचान पत्र दिखाने पर 10% की छूट मिलती है।" },
      { id: "day43_vocab_006", word: "Defective", pos: "Adjective", ipa: "/dɪˈfek.tɪv/", meaningHi: "दोषपूर्ण / खराब", exampleEn: "I returned the headphones because the microphone was defective.", exampleHi: "मैंने हेडफोन वापस कर दिए क्योंकि माइक्रोफोन दोषपूर्ण था।" },
      { id: "day43_vocab_007", word: "Expensive", pos: "Adjective", ipa: "/ɪkˈspen.sɪv/", meaningHi: "महँगा / कीमती", exampleEn: "Designer footwear is often quite expensive.", exampleHi: "डिजाइनर जूते अक्सर काफी महंगे होते हैं।" },
      { id: "day43_vocab_008", word: "Cashier", pos: "Noun", ipa: "/kæʃˈɪər/", meaningHi: "रोकड़िया / बिलिंग काउंटर कर्मचारी", exampleEn: "The cashier handed me the change and bagged the groceries.", exampleHi: "कैशियर ने मुझे छुट्टे पैसे दिए और किराने का सामान बैग में रख दिया।" },
      { id: "day43_vocab_009", word: "Bargain", pos: "Noun / Verb", ipa: "/ˈbɑː.ɡɪn/", meaningHi: "सौदा / मोलभाव करना", exampleEn: "At only $15, that leather belt is an absolute bargain.", exampleHi: "केवल $15 में, वह चमड़े का बेल्ट एक बेहतरीन सौदा है।" },
      { id: "day43_vocab_010", word: "Aisle", pos: "Noun", ipa: "/aɪl/", meaningHi: "दुकान या सुपरमार्केट की गलियारी (s silent)", exampleEn: "Organic cereals are located in aisle four.", exampleHi: "ऑर्गेनिक अनाज गलियारे (आइल) नंबर चार में स्थित हैं।" }
    ],
    spokenPhrases: [
      { id: "day43_phrase_001", phrase: "I'm just browsing, thank you", meaningHi: "मैं बस देख रहा हूँ, धन्यवाद", context: "Polite response to sales assistant" },
      { id: "day43_phrase_002", phrase: "Out of stock / In stock", meaningHi: "स्टॉक खत्म हो गया / स्टॉक में उपलब्ध", context: "Product availability" },
      { id: "day43_phrase_003", phrase: "Does this come in another color?", meaningHi: "क्या यह किसी अन्य रंग में उपलब्ध है?", context: "Product variation inquiry" },
      { id: "day43_phrase_004", phrase: "Keep the change", meaningHi: "बाकी के पैसे आप रख लीजिए", context: "Tipping or cash transaction" },
      { id: "day43_phrase_005", phrase: "Store credit", meaningHi: "स्टोर क्रेडिट (दुकान से खरीदारी हेतु राशि)", context: "Return policies" },
      { id: "day43_phrase_006", phrase: "That's a steal!", meaningHi: "यह तो बहुत ही सस्ता और बढ़िया सौदा है!", context: "Expressing great value" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day43_exmp_001", english: "Could you tell me where the fitting rooms are located?", hindi: "क्या आप मुझे बता सकते हैं कि फिटिंग रूम कहाँ स्थित हैं?" },
      { id: "day43_exmp_002", english: "This pair of jeans is slightly tight; do you have a size up?", hindi: "यह जींस थोड़ी तंग है; क्या आपके पास इससे बड़ा साइज है?" },
      { id: "day43_exmp_003", english: "Is this electronic tablet covered under a worldwide warranty?", hindi: "क्या यह इलेक्ट्रॉनिक टैबलेट विश्वव्यापी वारंटी के अंतर्गत कवर है?" },
      { id: "day43_exmp_004", english: "I would like to return this blender because the motor is defective.", hindi: "मैं इस ब्लेंडर को वापस करना चाहता हूँ क्योंकि इसकी मोटर खराब है।" },
      { id: "day43_exmp_005", english: "Are these formal shoes currently on sale, or are they regular price?", hindi: "क्या ये फॉर्मल जूते अभी सेल पर हैं, या ये नियमित कीमत पर हैं?" },
      { id: "day43_exmp_006", english: "Please hold on to your receipt in case you want to exchange the product.", hindi: "यदि आप उत्पाद बदलना चाहते हैं तो कृपया अपनी रसीद संभाल कर रखें।" },
      { id: "day43_exmp_007", english: "The store assistant was extremely helpful and checked the inventory for me.", hindi: "स्टोर सहायक बेहद मददगार था और उसने मेरे लिए इन्वेंटरी की जांच की।" },
      { id: "day43_exmp_008", english: "Do you accept digital wallet payments like Apple Pay or Google Pay?", hindi: "क्या आप Apple Pay या Google Pay जैसे डिजिटल वॉलेट भुगतान स्वीकार करते हैं?" },
      { id: "day43_exmp_009", english: "Unfortunately, that particular shade of blue is currently out of stock.", hindi: "दुर्भाग्य से, नीले रंग का वह विशेष शेड वर्तमान में स्टॉक से बाहर है।" },
      { id: "day43_exmp_010", english: "If you buy two shirts today, you get a thirty percent discount on the second.", hindi: "यदि आप आज दो शर्ट खरीदते हैं, तो आपको दूसरी पर तीस प्रतिशत की छूट मिलती है।" },
      { id: "day43_exmp_011", english: "Could you please gift-wrap this watch for me?", hindi: "क्या आप कृपया इस घड़ी को मेरे लिए गिफ्ट-रैप कर सकते हैं?" },
      { id: "day43_exmp_012", english: "We offer full refunds within fourteen days of purchase with the original tags attached.", hindi: "हम मूल टैग लगे होने पर खरीद के चौदह दिनों के भीतर पूर्ण रिफंड प्रदान करते हैं।" }
    ]
  },
  pronunciation: {
    focusSound: "Silent Letters in Commercial Vocabulary: 'Receipt' (/rɪˈsiːt/ - silent 'p') and 'Aisle' (/aɪl/ - silent 's')",
    phoneticNotes: "In 'receipt', the 'p' is completely silent. In 'aisle', the 's' is silent and it sounds identical to 'I'll' or 'isle'.",
    minimalPairs: [
      { wordA: "Aisle", ipaA: "/aɪl/", wordB: "Oil", ipaB: "/ɔɪl/" },
      { wordA: "Cost", ipaA: "/kɒst/", wordB: "Coast", ipaB: "/kəʊst/" },
      { wordA: "Receipt", ipaA: "/rɪˈsiːt/", wordB: "Reseat", ipaB: "/ˌriːˈsiːt/" },
      { wordA: "Price", ipaA: "/praɪs/", wordB: "Prize", ipaB: "/praɪz/" }
    ],
    drills: [
      { sentence: "Keep the receipt for the items in aisle nine.", focus: "Silent letters in receipt and aisle" },
      { sentence: "The price of the prize watch was discounted.", focus: "S vs Z contrast" },
      { sentence: "She walked down the central aisle to inspect the apparel.", focus: "Aisle articulation" },
      { sentence: "The cashier processed the refund receipt politely.", focus: "Rhythm and silent p" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day43_ex_001",
        type: "multiple_choice",
        question: "How is the word 'receipt' correctly pronounced?",
        options: ["/rɪˈsiːpt/", "/rɪˈsiːt/", "/ˈre.sept/", "/rɪˈseɪpt/"],
        correctAnswer: "/rɪˈsiːt/",
        explanation: "In 'receipt', the letter 'p' is completely silent."
      },
      {
        id: "day43_ex_002",
        type: "fill_in_the_blank",
        question: "Excuse me, where are the ______ rooms? I would like to try on this suit.",
        correctAnswer: "fitting",
        explanation: "'Fitting rooms' (or 'changing rooms') is standard international English."
      },
      {
        id: "day43_ex_003",
        type: "error_correction",
        sentence: "This luxury jacket is very costly for me.",
        correctAnswer: "This luxury jacket is very expensive for me.",
        explanation: "Use 'expensive' or 'pricey' for consumer goods rather than 'costly'."
      },
      {
        id: "day43_ex_004",
        type: "translation_hi_en",
        hindiSentence: "क्या इस उत्पाद पर एक साल की वारंटी है?",
        englishSentence: "Does this product have a one-year warranty?",
        targetVocabulary: ["product", "one-year warranty"]
      },
      {
        id: "day43_ex_005",
        type: "matching",
        prompt: "Match the retail terms with their meanings:",
        pairs: [
          { left: "On sale", right: "Available at a reduced promotional price" },
          { left: "For sale", right: "Available to be purchased" },
          { left: "Out of stock", right: "Temporarily unavailable in inventory" },
          { left: "Store credit", right: "Voucher balance to spend in the shop" }
        ]
      },
      {
        id: "day43_ex_006",
        type: "sentence_ordering",
        scrambledWords: ["in", "have", "Do", "medium", "a", "this", "you", "?"],
        correctSentence: "Do you have this in a medium?",
        explanation: "Auxiliary ('Do') + Subject ('you') + Verb ('have') + Object ('this') + Sizing phrase ('in a medium?')."
      },
      {
        id: "day43_ex_007",
        type: "multiple_choice",
        question: "When a shop assistant asks 'May I help you?', what is a polite answer if you are only looking around?",
        options: ["Go away!", "I am just browsing, thank you.", "No need!", "Don't disturb me."],
        correctAnswer: "I am just browsing, thank you.",
        explanation: "'I am just browsing, thank you' is the universal polite standard."
      },
      {
        id: "day43_ex_008",
        type: "sentence_building",
        prompt: "Ask the cashier if they accept contactless credit cards.",
        targetWords: ["Do", "you", "accept", "contactless", "credit", "cards", "?"],
        correctSentence: "Do you accept contactless credit cards?"
      },
      {
        id: "day43_ex_009",
        type: "translation_en_hi",
        englishSentence: "Customers can exchange defective items within thirty days of purchase.",
        hindiSentence: "ग्राहक खरीद के तीस दिनों के भीतर खराब वस्तुओं को बदल सकते हैं।"
      },
      {
        id: "day43_ex_010",
        type: "listening_comprehension",
        audioText: "Our policy allows full refunds within fourteen days with the original receipt and packaging.",
        question: "What two things are required for a full refund?",
        options: ["Original receipt and packaging", "Credit card and passport", "ID card and coupon", "Store voucher only"],
        correctAnswer: "Original receipt and packaging",
        explanation: "The audio specifies 'original receipt and packaging'."
      },
      {
        id: "day43_ex_011",
        type: "dictation",
        spokenText: "Please keep your receipt in case of an exchange.",
        correctText: "Please keep your receipt in case of an exchange."
      },
      {
        id: "day43_ex_012",
        type: "dialogue_completion",
        dialogueContext: "Customer: 'This belt is too tight.' | Assistant: 'Let me fetch you a size ______.'",
        options: ["up", "out", "away", "over"],
        correctAnswer: "up",
        explanation: "'A size up' means one size larger."
      },
      {
        id: "day43_ex_013",
        type: "speaking_pronunciation",
        targetText: "The receipt for the organic apples is in aisle five.",
        phoneticFocus: "Silent 'p' in receipt and silent 's' in aisle"
      },
      {
        id: "day43_ex_014",
        type: "active_recall",
        prompt: "What is the phrase used to tell a cashier or driver to keep the remaining change?",
        correctAnswer: "Keep the change",
        explanation: "'Keep the change' is the universal phrase."
      },
      {
        id: "day43_ex_015",
        type: "applied_scenario",
        scenario: "You bought a toaster that stopped working after two days. What do you politely tell the customer service desk?",
        correctAnswer: "I would like to return this toaster because it is defective. Here is my receipt.",
        explanation: "States the reason clearly and offers proof of purchase."
      },
      {
        id: "day43_ex_016",
        type: "multiple_choice",
        question: "Choose the correct term: 'Dairy products are located in ______ three.'",
        options: ["isle", "aisle", "ill", "alley"],
        correctAnswer: "aisle",
        explanation: "'Aisle' refers to a supermarket corridor between shelving units."
      },
      {
        id: "day43_ex_017",
        type: "fill_in_the_blank",
        question: "This designer coat was fifty percent off; it was an absolute ______!",
        correctAnswer: "bargain",
        explanation: "A 'bargain' means an item bought for much less than its true value."
      },
      {
        id: "day43_ex_018",
        type: "error_correction",
        sentence: "Please reduce the rate of this handbag.",
        correctAnswer: "Could you give me a discount on this handbag?",
        explanation: "Say 'Could you give me a discount?' or 'Is the price negotiable?' instead of '*reduce the rate*'."
      },
      {
        id: "day43_ex_019",
        type: "translation_hi_en",
        hindiSentence: "क्या यह शर्ट शुद्ध सूती कपड़े की बनी है?",
        englishSentence: "Is this shirt made of pure cotton?",
        targetVocabulary: ["shirt", "made of", "pure cotton"]
      },
      {
        id: "day43_ex_020",
        type: "matching",
        prompt: "Match the consumer idioms with their meanings:",
        pairs: [
          { left: "That's a steal", right: "Extremely cheap and exceptional value" },
          { left: "Rip-off", right: "Overpriced and not worth the money" },
          { left: "Cost an arm and a leg", right: "Extremely expensive" },
          { left: "Shop around", right: "Compare prices in multiple stores before buying" }
        ]
      },
      {
        id: "day43_ex_021",
        type: "multiple_choice",
        question: "What does 'out of stock' mean?",
        options: ["Available in large quantity", "Temporarily not available", "On heavy discount", "Free of charge"],
        correctAnswer: "Temporarily not available",
        explanation: "'Out of stock' means the item is currently sold out."
      },
      {
        id: "day43_ex_022",
        type: "sentence_ordering",
        scrambledWords: ["exchange", "shirt", "to", "I", "like", "would", "this"],
        correctSentence: "I would like to exchange this shirt.",
        explanation: "Polite customer request structure."
      },
      {
        id: "day43_ex_023",
        type: "fill_in_the_blank",
        question: "The television is covered by a two-year manufacturer ______.",
        correctAnswer: "warranty",
        explanation: "Appliances come with a manufacturer's 'warranty'."
      },
      {
        id: "day43_ex_024",
        type: "sentence_building",
        prompt: "Ask if they have this dress in blue color.",
        targetWords: ["Do", "you", "have", "this", "dress", "in", "blue", "?"],
        correctSentence: "Do you have this dress in blue?"
      },
      {
        id: "day43_ex_025",
        type: "translation_en_hi",
        englishSentence: "I am looking for a comfortable pair of running shoes.",
        hindiSentence: "मैं दौड़ने वाले आरामदायक जूतों की एक जोड़ी ढूंढ रहा हूँ।"
      },
      {
        id: "day43_ex_026",
        type: "multiple_choice",
        question: "Which person operates the cash register in a retail store?",
        options: ["Auditor", "Cashier", "Porter", "Curator"],
        correctAnswer: "Cashier",
        explanation: "The cashier processes financial transactions at checkout."
      },
      {
        id: "day43_ex_027",
        type: "error_correction",
        sentence: "Are these branded shoes for sale or on sale with discount?",
        correctAnswer: "Are these branded shoes on sale with a discount?",
        explanation: "'On sale' means at a discount. 'For sale' simply means available to buy."
      },
      {
        id: "day43_ex_028",
        type: "listening_comprehension",
        audioText: "If you sign up for our loyalty program today, you will receive an extra fifteen percent off your total purchase.",
        question: "What discount does the loyalty program offer?",
        options: ["Five percent", "Ten percent", "Fifteen percent", "Twenty percent"],
        correctAnswer: "Fifteen percent",
        explanation: "The audio specifies 'an extra fifteen percent off'."
      },
      {
        id: "day43_ex_029",
        type: "dictation",
        spokenText: "The cashier provided a receipt and a refund.",
        correctText: "The cashier provided a receipt and a refund."
      },
      {
        id: "day43_ex_030",
        type: "applied_scenario",
        scenario: "You want to know if an item you see online is available in the physical store. What do you ask the sales associate?",
        correctAnswer: "Do you have this item in stock at this store?",
        explanation: "Accurate retail availability inquiry."
      },
      {
        id: "day43_ex_031",
        type: "multiple_choice",
        question: "Which of the following describes a voucher given instead of cash when returning an item?",
        options: ["Store credit", "Cash deposit", "Bank penalty", "Tax rebate"],
        correctAnswer: "Store credit",
        explanation: "Store credit is merchant balance provided for future purchases."
      },
      {
        id: "day43_ex_032",
        type: "fill_in_the_blank",
        question: "These designer sunglasses cost an arm and a ______.",
        correctAnswer: "leg",
        explanation: "The idiom 'cost an arm and a leg' means extremely costly."
      },
      {
        id: "day43_ex_033",
        type: "translation_hi_en",
        hindiSentence: "क्या मैं इसे नकद के बजाय क्रेडिट कार्ड से भुगतान कर सकता हूँ?",
        englishSentence: "Can I pay for this by credit card instead of cash?",
        targetVocabulary: ["pay by credit card", "instead of cash"]
      },
      {
        id: "day43_ex_034",
        type: "sentence_building",
        prompt: "State that the fitting rooms are at the rear of the shop.",
        targetWords: ["The", "fitting", "rooms", "are", "at", "the", "rear", "of", "the", "shop", "."],
        correctSentence: "The fitting rooms are at the rear of the shop."
      },
      {
        id: "day43_ex_035",
        type: "mixed_retrieval",
        question: "Identify the sentence that contains no errors:",
        options: [
          "I want to return this costly shirt because it has a hole, give my receipt.",
          "I would like to return this expensive shirt because it is defective; here is my receipt.",
          "Please reduce the rate for this item in the trial room.",
          "The cashier did not give me any receit for my shop."
        ],
        correctAnswer: "I would like to return this expensive shirt because it is defective; here is my receipt.",
        explanation: "Uses 'expensive', 'defective', correct spelling of 'receipt', and polite phrasing."
      }
    ]
  },
  use: {
    dialogue: {
      title: "Exchanging a Garment at a Department Store",
      context: "A shopper (Neha) visits customer service to exchange a sweater.",
      characters: ["Neha", "Store Clerk"],
      lines: [
        { speaker: "Neha", text: "Hello! I purchased this wool sweater yesterday, but it's a bit too snug around the shoulders. Could I exchange it for a size up?", hindi: "नमस्ते! मैंने कल यह ऊनी स्वेटर खरीदा था, लेकिन यह कंधों के पास थोड़ा तंग है। क्या मैं इसे एक साइज बड़े से बदल सकती हूँ?" },
        { speaker: "Store Clerk", text: "Certainly! Do you have the original receipt and are the price tags still attached?", hindi: "बिल्कुल! क्या आपके पास मूल रसीद है और क्या मूल्य टैग अभी भी लगे हुए हैं?" },
        { speaker: "Neha", text: "Yes, here is the receipt, and all the tags are intact.", hindi: "हाँ, यह रही रसीद, और सभी टैग सुरक्षित हैं।" },
        { speaker: "Store Clerk", text: "Let me check our inventory... Yes, we have this exact style in a large in aisle three. Would you like to try it on in the fitting room first?", hindi: "मुझे अपनी इन्वेंटरी देखने दीजिए... हाँ, हमारे पास आइल 3 में लार्ज साइज में यही स्टाइल उपलब्ध है। क्या आप पहले फिटिंग रूम में इसे पहनकर देखना चाहेंगी?" },
        { speaker: "Neha", text: "That would be wonderful. And if it doesn't fit, can I get a store credit?", hindi: "यह बहुत बढ़िया रहेगा। और अगर यह फिट नहीं बैठता है, तो क्या मुझे स्टोर क्रेडिट मिल सकता है?" },
        { speaker: "Store Clerk", text: "Yes, our policy offers full store credit or a card refund within thirty days.", hindi: "हाँ, हमारी नीति तीस दिनों के भीतर पूर्ण स्टोर क्रेडिट या कार्ड रिफंड प्रदान करती है।" }
      ]
    },
    speakingPrompt: {
      situation: "Describe a recent shopping experience where you bought or returned an item.",
      prompts: [
        "What product did you buy or look for?",
        "Did you ask any questions about price, discounts, or sizing?",
        "Were you satisfied with the purchase and the customer service?"
      ],
      targetExpressions: ["on sale", "fitting room", "receipt", "bargain", "exchange / refund"]
    },
    roleplay: {
      scenario: "Returning a malfunctioning electronic item at a consumer tech store.",
      roleA: "Customer presenting a defective pair of wireless earbuds with the purchase receipt.",
      roleB: "Customer service rep inspecting the product, offering a replacement or full refund.",
      sampleDialogue: "Customer: 'Good morning. I bought these wireless earbuds two days ago, but the left earbud won't hold a charge. Here is the receipt.' | Clerk: 'I apologize for the inconvenience. Let me test the unit and process an immediate replacement for you.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day43_bm_001",
        title: "Garment Sizing & Fitting Request",
        prompt: "Formulate a polite dialogue exchange where you ask a store assistant to try on a jacket in a larger size.",
        sampleAnswerEn: "Customer: 'Excuse me, could I try this leather jacket on? Where are the fitting rooms?' Assistant: 'They are right down that corridor on your left.' Customer: 'Thank you. If this medium feels tight, do you have it in a large?'",
        sampleAnswerHi: "ग्राहक: 'माफ कीजिए, क्या मैं इस लेदर जैकेट को पहनकर देख सकता हूँ? फिटिंग रूम कहाँ हैं?' सहायक: 'वे आपके बाईं ओर उस गलियारे के अंत में हैं।' ग्राहक: 'धन्यवाद। यदि यह मीडियम तंग लगता है, तो क्या आपके पास यह लार्ज में है?'",
        evaluationCriteria: "Correct use of 'try on', 'fitting rooms', 'a size up / in a large', and natural conversational polite markers."
      },
      {
        id: "day43_bm_002",
        title: "Product Return & Refund Dialogue",
        prompt: "Draft a 4-line script requesting a refund for a defective kitchen appliance with proof of purchase.",
        sampleAnswerEn: "Customer: 'Hello, I would like to return this electric kettle because it stopped heating.' Representative: 'I am sorry to hear that. Do you have the purchase receipt?' Customer: 'Yes, here is the receipt and the original box.' Representative: 'Thank you. I have processed a full refund to your credit card.'",
        sampleAnswerHi: "ग्राहक: 'नमस्ते, मैं इस इलेक्ट्रिक केतली को वापस करना चाहता हूँ क्योंकि इसने गर्म करना बंद कर दिया है।' प्रतिनिधि: 'यह सुनकर दुख हुआ। क्या आपके पास खरीद की रसीद है?' ग्राहक: 'हाँ, यह रही रसीद और मूल बॉक्स।' प्रतिनिधि: 'धन्यवाद। मैंने आपके क्रेडिट कार्ड में पूरा रिफंड प्रोसेस कर दिया है।'",
        evaluationCriteria: "Appropriate commercial terms ('return', 'defective', 'receipt', 'processed a full refund')."
      },
      {
        id: "day43_bm_003",
        title: "L1 Shopping Transfer Remediation",
        prompt: "Correct and explain the errors in: '*This shirt is too costly, please reduce the rate or give discount in the trial room.*'",
        sampleAnswerEn: "Correction: 'This shirt is quite expensive. Could you offer a discount on this item? Also, where are the fitting rooms?' Explanation: 'Costly' is replaced by 'expensive'. The Indian English phrase 'reduce the rate' is unidiomatic; standard English uses 'offer a discount' or asks 'is the price negotiable?'. 'Trial room' is standardized to 'fitting room'.",
        sampleAnswerHi: "सुधार: 'This shirt is quite expensive. Could you offer a discount on this item? Also, where are the fitting rooms?' व्याख्या: 'Costly' की जगह 'expensive' का उपयोग होता है। 'Reduce the rate' अमानक है; इसके स्थान पर 'offer a discount' का प्रयोग किया जाता है। 'Trial room' को मानक अंग्रेजी में 'fitting room' कहा जाता है।",
        evaluationCriteria: "Accurate remediation and linguistic justification for all three subcontinental retail interference terms."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "How is 'receipt' pronounced phonetically?", a: "/rɪˈsiːt/ (with a silent 'p')" },
      { q: "What is the difference between 'on sale' and 'for sale'?", a: "'On sale' means sold at a discount; 'for sale' means available to be bought." },
      { q: "What should you say instead of '*Please reduce the rate* '?", a: "'Could you offer a discount on this?' or 'Is the price negotiable?'" },
      { q: "What is the international term for 'trial room'?", a: "Fitting room / Changing room" }
    ],
    spacedTips: [
      "Tip 1: Remember that 'aisle' is pronounced /aɪl/ (the 's' is silent), just like 'isle'.",
      "Tip 2: When requesting larger or smaller clothing sizes, use the phrases 'a size up' or 'a size down'."
    ]
  }
};

// DAY 44: Higher Education, Academic Disciplines & Campus Life
const day44 = {
  dayNumber: 44,
  id: "day_44",
  titleEn: "Higher Education, Academic Disciplines & Campus Life",
  titleHi: "उच्च शिक्षा, शैक्षणिक विषय एवं परिसर जीवन",
  cefr: "A2.2",
  estMinutes: 40,
  prerequisites: "Day 43 (Shopping & Consumer Discourse)",
  objectivesEn: [
    "Discuss university degrees, undergraduate and postgraduate majors, and academic faculties fluently.",
    "Master higher education terminology including syllabus, curriculum, credits, dissertation, GPA, and tuition fees.",
    "Navigate campus facilities, lecture halls, university libraries, research laboratories, and student unions.",
    "Express academic achievements, enrollment status, exams, and scholarship opportunities accurately.",
    "Eliminate subcontinental academic errors such as '*pass out from college*', '*taking class*' (by students), and '*batchmate*'."
  ],
  objectivesHi: [
    "विश्वविद्यालय की डिग्रियों, स्नातक/स्नातकोत्तर विषयों और अकादमिक संकायों (Faculties) पर धाराप्रवाह चर्चा करना।",
    "उच्च शिक्षा शब्दावली (Syllabus, Credits, Dissertation, GPA, Tuition fees, Scholarship) में निपुण होना।",
    "परिसर की सुविधाओं (Lecture halls, Library archives, Research labs, Student union) से संबंधित संवाद करना।",
    "शैक्षणिक उपलब्धियों, प्रवेश स्थिति, परीक्षाओं और शोध कार्यों को सही ढंग से व्यक्त करना।",
    "भारतीय शैक्षणिक गलतियों ('pass out from college', 'taking class', 'batchmate') को वैश्विक मानक अंग्रेजी में बदलना।"
  ],
  teach: {
    hindiExplanation: "दिन 44 में हम उच्च शिक्षा, विश्वविद्यालय जीवन, शैक्षणिक विषयों और शोध पर बातचीत करना सीखेंगे।\n\n1. डिग्रियां और विषय (Degrees & Majors): 'Undergraduate / Bachelor's degree' (स्नातक), 'Postgraduate / Master's degree' (स्नातकोत्तर), 'Major in Economics' (अर्थशास्त्र मुख्य विषय के रूप में पढ़ना), 'Faculty / Department' (संकाय या विभाग)।\n2. कॉलेज से पढ़ाई पूरी करना (Graduation): भारत में कॉलेज पूरा करने के लिए अक्सर '*I passed out in 2020*' कहा जाता है, जो अंतरराष्ट्रीय अंग्रेजी में गलत है ('pass out' का अर्थ बेहोश होना होता है)। सही वाक्य है: 'I graduated in 2020' या 'I completed my degree in 2020'।\n3. क्लास लेना बनाम अटेंड करना (Class Collocations): शिक्षक क्लास लेते हैं ('The professor is teaching / conducting a class') और छात्र क्लास में उपस्थित होते हैं ('Students are attending / taking a class')।\n4. सहपाठी (Peers): 'Batchmate' भारतीय अंग्रेजी का शब्द है; अंतरराष्ट्रीय स्तर पर 'Classmate', 'Peer', या 'Fellow student' कहा जाता है।\n5. शोध और मूल्यांकन (Academic Assessment): 'Dissertation / Thesis' (शोध प्रबंध), 'Syllabus' (पाठ्यक्रम), 'Tuition fees' (शिक्षण शुल्क), 'Scholarship / Grant' (छात्रवृत्ति)।",
    englishExplanation: "Welcome to Day 44! Today we explore the language of higher education, tertiary academic disciplines, campus infrastructure, and scholarly achievements.\n\nCore academic pillars:\n1. Degree Architecture & Academic Majors: Describing degree levels (Associate, Bachelor's, Master's, Doctorate/Ph.D.) and areas of concentration ('majoring in Computer Science with a minor in Statistics').\n2. Academic Roles & Institutional Collocations: Distinguishing between professor actions ('lecturing', 'conducting research', 'grading') and student actions ('attending lectures', 'submitting assignments', 'graduating').\n3. Eliminating Subcontinental Academic False Friends: Rectifying '*pass out*' (which means to lose consciousness in standard English) with 'graduate', and replacing '*batchmate*' with 'classmate' or 'fellow student'.\n4. Research & Evaluation Vocabulary: Mastering scholarly terms ('dissertation', 'peer-reviewed', 'semester GPA', 'curriculum', 'prerequisite').",
    grammarRules: [
      {
        ruleNumber: 1,
        title: "The Verb 'Graduate' & Its Prepositional Regimes",
        description: "One 'graduates from' an institution ('She graduated from Oxford') and 'graduates in' a subject ('He graduated in Civil Engineering'). Use past participle 'a graduate of' as a noun phrase.",
        register: "Academic Syntax"
      },
      {
        ruleNumber: 2,
        title: "Major & Minor as Verbs and Nouns",
        description: "Use 'major in' for primary specialization: 'She is majoring in Data Science.' As a noun: 'Economics is her major, and French is her minor.'",
        register: "Academic Collocations"
      },
      {
        ruleNumber: 3,
        title: "Class Participation Verbs ('Attend' vs 'Conduct')",
        description: "Students 'attend' lectures or 'take' courses. Professors and instructors 'conduct', 'deliver', or 'teach' lectures. Never say a student is '*giving an exam*' (students 'take/sit for an exam').",
        register: "Agent-Action Match"
      },
      {
        ruleNumber: 4,
        title: "Compound Academic Degree Noun Modifiers",
        description: "Use apostrophe for degree levels: 'a Bachelor's degree', 'a Master's degree'. Note: 'Doctor of Philosophy' or 'Ph.D.' does not use an apostrophe.",
        register: "Orthographic Precision"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Degree & Specialization",
        formula: "I am pursuing a [Degree Level] + in + [Academic Discipline] + at + [University].",
        exampleEn: "I am pursuing a Bachelor's degree in Biotechnology at Delhi University.",
        meaningHi: "मैं दिल्ली विश्वविद्यालय से बायोटेक्नोलॉजी में बैचलर डिग्री कर रहा हूँ।"
      },
      {
        subjectGroup: "Graduation Statement",
        formula: "She graduated from + [Institution] + with a degree in + [Field] + in + [Year].",
        exampleEn: "She graduated from IIT Bombay with a degree in Electrical Engineering in 2022.",
        meaningHi: "उसने 2022 में आईआईटी बॉम्बे से इलेक्ट्रिकल इंजीनियरिंग में स्नातक की उपाधि प्राप्त की।"
      },
      {
        subjectGroup: "Academic Research Submission",
        formula: "Students must submit their + [Dissertation / Thesis] + by + [Deadline].",
        exampleEn: "Students must submit their final dissertation by the end of the semester.",
        meaningHi: "छात्रों को सेमेस्टर के अंत तक अपना अंतिम शोध प्रबंध जमा करना होगा।"
      },
      {
        subjectGroup: "Scholarship & Funding",
        formula: "He was awarded a + [Full / Partial] + scholarship for + [Academic Merit].",
        exampleEn: "He was awarded a full scholarship for outstanding academic merit.",
        meaningHi: "उन्हें उत्कृष्ट शैक्षणिक योग्यता के लिए पूर्ण छात्रवृत्ति प्रदान की गई।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Pass Out', 'Batchmate', and 'Exam Giving' False Friends",
      hindiPattern: "1. '*I passed out from college in 2021.*' (literal translation of 'कॉलेज से पास आउट हुआ')\n2. '*He is my batchmate from engineering.*'\n3. '*I am giving my semester exam tomorrow.*'",
      potentialInterference: "In standard English, 'pass out' means to faint or lose consciousness. 'Giving an exam' confuses teacher and student roles.",
      explanation: "Native speakers say 'I graduated from college'. Replace 'batchmate' with 'classmate' or 'peer'. In English, students 'take' or 'sit for' an exam, while teachers 'give' or 'administer' exams.",
      naturalSolution: "1. 'I graduated from college in 2021.' | 2. 'He is my classmate from engineering.' | 3. 'I am taking / sitting for my semester exam tomorrow.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day44_vocab_001", word: "Graduate", pos: "Verb / Noun", ipa: "/ˈɡrædʒ.u.eɪt/", meaningHi: "स्नातक होना / उपाधि प्राप्त करना", exampleEn: "She will graduate with honors this summer.", exampleHi: "वह इस गर्मी में सम्मान (ऑनर्स) के साथ स्नातक करेगी।" },
      { id: "day44_vocab_002", word: "Curriculum", pos: "Noun", ipa: "/kəˈrɪk.jə.ləm/", meaningHi: "पाठ्यचर्या / संपूर्ण अध्ययन कार्यक्रम", exampleEn: "The university updated its computer science curriculum.", exampleHi: "विश्वविद्यालय ने अपने कंप्यूटर विज्ञान पाठ्यक्रम को अद्यतन किया।" },
      { id: "day44_vocab_003", word: "Dissertation", pos: "Noun", ipa: "/ˌdɪs.əˈteɪ.ʃən/", meaningHi: "शोध प्रबंध / थीसिस", exampleEn: "His doctoral dissertation examined renewable energy systems.", exampleHi: "उनके डॉक्टरेट शोध प्रबंध ने नवीकरणीय ऊर्जा प्रणालियों की जांच की।" },
      { id: "day44_vocab_004", word: "Scholarship", pos: "Noun", ipa: "/ˈskɒl.ə.ʃɪp/", meaningHi: "छात्रवृत्ति", exampleEn: "She secured a merit-based scholarship that covers full tuition.", exampleHi: "उसने योग्यता-आधारित छात्रवृत्ति प्राप्त की जो पूरी ट्यूशन फीस को कवर करती है।" },
      { id: "day44_vocab_005", word: "Tuition", pos: "Noun", ipa: "/tʃuːˈɪʃ.ən/", meaningHi: "शिक्षण शुल्क (कॉलेज फीस)", exampleEn: "Tuition fees have increased for international postgraduate students.", exampleHi: "अंतरराष्ट्रीय स्नातकोत्तर छात्रों के लिए शिक्षण शुल्क में वृद्धि हुई है।" },
      { id: "day44_vocab_006", word: "Faculty", pos: "Noun", ipa: "/ˈfæk.əl.ti/", meaningHi: "संकाय / प्राध्यापक वर्ग / विभाग", exampleEn: "The Faculty of Law has a distinguished international reputation.", exampleHi: "विधि संकाय की एक प्रतिष्ठित अंतरराष्ट्रीय प्रतिष्ठा है।" },
      { id: "day44_vocab_007", word: "Semester", pos: "Noun", ipa: "/səˈmes.tər/", meaningHi: "सत्र / छह महीने का शैक्षणिक सत्र", exampleEn: "Final examinations will commence at the end of the semester.", exampleHi: "सत्र के अंत में अंतिम परीक्षाएं शुरू होंगी।" },
      { id: "day44_vocab_008", word: "Prerequisite", pos: "Noun", ipa: "/ˌpriːˈrek.wɪ.zɪt/", meaningHi: "अनिवार्य पूर्व-शर्त (कोर्स से पहले जरूरी विषय)", exampleEn: "Basic calculus is a prerequisite for advanced physics.", exampleHi: "उन्नत भौतिकी के लिए बुनियादी कैलकुलस एक अनिवार्य पूर्व-शर्त है।" },
      { id: "day44_vocab_009", word: "Auditorium", pos: "Noun", ipa: "/ˌɔː.dɪˈtɔː.ri.əm/", meaningHi: "सभागार / बड़ा व्याख्यान कक्ष", exampleEn: "The orientation ceremony took place in the main auditorium.", exampleHi: "अभिमुखीकरण समारोह मुख्य सभागार में आयोजित किया गया।" },
      { id: "day44_vocab_010", word: "Classmate", pos: "Noun", ipa: "/ˈklɑːs.meɪt/", meaningHi: "सहपाठी", exampleEn: "I collaborated with two classmates on the research project.", exampleHi: "मैंने शोध परियोजना पर दो सहपाठियों के साथ सहयोग किया।" }
    ],
    spokenPhrases: [
      { id: "day44_phrase_001", phrase: "Major in / Minor in", meaningHi: "मुख्य विषय / गौण विषय के रूप में अध्ययन करना", context: "Academic specialization" },
      { id: "day44_phrase_002", phrase: "Sit for an exam / Take an exam", meaningHi: "परीक्षा देना", context: "Academic testing" },
      { id: "day44_phrase_003", phrase: "Cram for an exam", meaningHi: "परीक्षा के लिए रट्टा मारना / अंतिम समय में बहुत पढ़ाई करना", context: "Study habits" },
      { id: "day44_phrase_004", phrase: "On the dean's list", meaningHi: "उत्कृष्ट शैक्षणिक प्रदर्शन करने वाले छात्रों की सूची में", context: "Academic honors" },
      { id: "day44_phrase_005", phrase: "Hands-on laboratory research", meaningHi: "व्यावहारिक प्रयोगशाला शोध कार्य", context: "Scientific training" },
      { id: "day44_phrase_006", phrase: "Graduate with honors", meaningHi: "विशिष्ट योग्यता (ऑनर्स) के साथ उपाधि प्राप्त करना", context: "Academic distinction" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day44_exmp_001", english: "Rohan graduated from university with a Master's degree in Artificial Intelligence.", hindi: "रोहन ने आर्टिफिशियल इंटेलिजेंस में मास्टर डिग्री के साथ विश्वविद्यालय से स्नातक किया।" },
      { id: "day44_exmp_002", english: "I am majoring in Economics and taking a minor in Political Science.", hindi: "मैं अर्थशास्त्र को मुख्य विषय और राजनीति विज्ञान को गौण विषय के रूप में पढ़ रहा हूँ।" },
      { id: "day44_exmp_003", english: "All postgraduate students must defend their research thesis in front of a faculty panel.", hindi: "सभी स्नातकोत्तर छात्रों को एक संकाय पैनल के सामने अपने शोध प्रबंध का बचाव (डिफेंड) करना होगा।" },
      { id: "day44_exmp_004", english: "Students are preparing to take their final semester exams next week.", hindi: "छात्र अगले सप्ताह अपनी अंतिम सेमेस्टर परीक्षाएं देने की तैयारी कर रहे हैं।" },
      { id: "day44_exmp_005", english: "The campus library houses over half a million academic journals and manuscripts.", hindi: "परिसर के पुस्तकालय में पाँच लाख से अधिक अकादमिक पत्रिकाएँ और पांडुलिपियाँ हैं।" },
      { id: "day44_exmp_006", english: "She received a prestigious research grant to study marine ecosystems.", hindi: "उन्हें समुद्री पारिस्थितिक तंत्र का अध्ययन करने के लिए एक प्रतिष्ठित शोध अनुदान मिला।" },
      { id: "day44_exmp_007", english: "Linear Algebra is a mandatory prerequisite for this machine learning module.", hindi: "इस मशीन लर्निंग मॉड्यूल के लिए लीनियर अलजेब्रा एक अनिवार्य पूर्व-शर्त है।" },
      { id: "day44_exmp_008", english: "The professor delivered an engaging lecture on macroeconomic fiscal policy.", hindi: "प्रोफेसर ने मैक्रोइकॉनॉमिक राजकोषीय नीति पर एक आकर्षक व्याख्यान दिया।" },
      { id: "day44_exmp_009", english: "My classmates and I formed a study group to prepare for the midterms.", hindi: "मैंने और मेरे सहपाठियों ने मध्यावधि परीक्षा की तैयारी के लिए एक अध्ययन समूह बनाया।" },
      { id: "day44_exmp_010", english: "University tuition includes access to campus athletic and medical facilities.", hindi: "विश्वविद्यालय शिक्षण शुल्क में परिसर की खेल और चिकित्सा सुविधाओं तक पहुंच शामिल है।" },
      { id: "day44_exmp_011", english: "He spent the entire weekend in the laboratory analyzing chemical compounds.", hindi: "उन्होंने रासायनिक यौगिकों का विश्लेषण करते हुए प्रयोगशाला में पूरा सप्ताहांत बिताया।" },
      { id: "day44_exmp_012", english: "After completing her Bachelor's degree, she plans to apply for a Ph.D. program.", hindi: "अपनी स्नातक डिग्री पूरी करने के बाद, वह पीएचडी कार्यक्रम के लिए आवेदन करने की योजना बना रही है।" }
    ]
  },
  pronunciation: {
    focusSound: "Syllabic Stress in Academic Polysyllables: 'Curriculum' (/kəˈrɪk.jə.ləm/), 'Dissertation' (/ˌdɪs.əˈteɪ.ʃən/), 'Prerequisite' (/ˌpriːˈrek.wɪ.zɪt/)",
    phoneticNotes: "Notice how secondary stress precedes primary stress in 4-syllable academic nouns. 'Cur-RI-cu-lum' has stress on the second syllable.",
    minimalPairs: [
      { wordA: "Degree", ipaA: "/dɪˈɡriː/", wordB: "Decree", ipaB: "/dɪˈkriː/" },
      { wordA: "Major", ipaA: "/ˈmeɪ.dʒər/", wordB: "Mayor", ipaB: "/meər/" },
      { wordA: "Faculty", ipaA: "/ˈfæk.əl.ti/", wordB: "Fatality", ipaB: "/fəˈtæl.ə.ti/" },
      { wordA: "Course", ipaA: "/kɔːs/", wordB: "Cause", ipaB: "/kɔːz/" }
    ],
    drills: [
      { sentence: "The distinguished faculty revised the undergraduate curriculum.", focus: "Rhythm and polysyllabic stress" },
      { sentence: "She submitted her doctoral dissertation on schedule.", focus: "Primary stress on -a-tion" },
      { sentence: "Calculus is a prerequisite for theoretical mechanics.", focus: "Clear articulation of /pre-rek-wi-zit/" },
      { sentence: "The auditorium was filled with enthusiastic graduates.", focus: "Fluid vowel quality" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day44_ex_001",
        type: "multiple_choice",
        question: "What is the standard English term for finishing university and receiving your degree?",
        options: ["Passing out", "Graduating", "Exiting", "Expiring"],
        correctAnswer: "Graduating",
        explanation: "'Graduating' is the correct term. 'Passing out' means losing consciousness in standard English."
      },
      {
        id: "day44_ex_002",
        type: "fill_in_the_blank",
        question: "She is ______ in Computer Science with a minor in Mathematics.",
        correctAnswer: "majoring",
        explanation: "Students 'major in' their primary academic specialization."
      },
      {
        id: "day44_ex_003",
        type: "error_correction",
        sentence: "I am giving my university physics exam tomorrow morning.",
        correctAnswer: "I am taking my university physics exam tomorrow morning.",
        explanation: "Students 'take' or 'sit for' exams; instructors 'give' exams."
      },
      {
        id: "day44_ex_004",
        type: "translation_hi_en",
        hindiSentence: "उसने अपनी मास्टर डिग्री के लिए एक उत्कृष्ट शोध प्रबंध लिखा।",
        englishSentence: "She wrote an outstanding dissertation for her Master's degree.",
        targetVocabulary: ["dissertation", "Master's degree", "outstanding"]
      },
      {
        id: "day44_ex_005",
        type: "matching",
        prompt: "Match the academic terms with their meanings:",
        pairs: [
          { left: "Curriculum", right: "The total subjects making up a course of study" },
          { left: "Prerequisite", right: "Required prior subject before taking an advanced class" },
          { left: "Tuition", right: "Fee charged for instructional teaching at university" },
          { left: "Scholarship", right: "Financial grant awarded based on academic merit" }
        ]
      },
      {
        id: "day44_ex_006",
        type: "sentence_ordering",
        scrambledWords: ["graduated", "from", "She", "honors", "with", "university"],
        correctSentence: "She graduated from university with honors.",
        explanation: "Subject ('She') + Verb phrase ('graduated from university') + Prepositional modifier ('with honors')."
      },
      {
        id: "day44_ex_007",
        type: "multiple_choice",
        question: "Which of the following is the standard international term for someone in your university class?",
        options: ["Batchmate", "Classmate", "Batchfellow", "School brother"],
        correctAnswer: "Classmate",
        explanation: "'Classmate' or 'fellow student' is used globally. 'Batchmate' is an Indian English localized term."
      },
      {
        id: "day44_ex_008",
        type: "sentence_building",
        prompt: "State that the orientation ceremony is held in the main auditorium.",
        targetWords: ["The", "orientation", "ceremony", "is", "held", "in", "the", "main", "auditorium", "."],
        correctSentence: "The orientation ceremony is held in the main auditorium."
      },
      {
        id: "day44_ex_009",
        type: "translation_en_hi",
        englishSentence: "He was awarded a full scholarship based on academic excellence.",
        hindiSentence: "उन्हें शैक्षणिक उत्कृष्टता के आधार पर पूर्ण छात्रवृत्ति प्रदान की गई थी।"
      },
      {
        id: "day44_ex_010",
        type: "listening_comprehension",
        audioText: "Students must maintain a cumulative Grade Point Average of at least 3.5 to retain their departmental fellowship.",
        question: "What minimum GPA is required to retain the fellowship?",
        options: ["2.5", "3.0", "3.5", "4.0"],
        correctAnswer: "3.5",
        explanation: "The audio specifies a minimum cumulative GPA of 3.5."
      },
      {
        id: "day44_ex_011",
        type: "dictation",
        spokenText: "The professor delivered a lecture in the auditorium.",
        correctText: "The professor delivered a lecture in the auditorium."
      },
      {
        id: "day44_ex_012",
        type: "dialogue_completion",
        dialogueContext: "Advisor: 'Have you fulfilled all course requirements?' | Student: 'Yes, I completed my final ______ last term.'",
        options: ["prerequisite", "receipt", "aisle", "balcony"],
        correctAnswer: "prerequisite",
        explanation: "A 'prerequisite' is a required preliminary course."
      },
      {
        id: "day44_ex_013",
        type: "speaking_pronunciation",
        targetText: "The computer science curriculum requires extensive laboratory research.",
        phoneticFocus: "Stress pattern on 'curriculum' and 'laboratory'"
      },
      {
        id: "day44_ex_014",
        type: "active_recall",
        prompt: "Why should you avoid saying '*I passed out from IIT in 2022*' when speaking to international colleagues?",
        correctAnswer: "In standard English, 'pass out' means to faint or lose consciousness; use 'graduated from' instead.",
        explanation: "'Pass out' is a literal false friend; 'graduate from' is universally correct."
      },
      {
        id: "day44_ex_015",
        type: "applied_scenario",
        scenario: "You are introducing your academic background in an interview. You finished a Bachelor's in Mechanical Engineering at Delhi University. What do you say?",
        correctAnswer: "I graduated from Delhi University with a Bachelor's degree in Mechanical Engineering.",
        explanation: "Accurate, professional, and grammatically standard introduction."
      },
      {
        id: "day44_ex_016",
        type: "multiple_choice",
        question: "What is an extended academic research paper submitted for a higher degree called?",
        options: ["Dissertation", "Flyer", "Brochure", "Memo"],
        correctAnswer: "Dissertation",
        explanation: "A 'dissertation' or 'thesis' is a substantial academic research paper."
      },
      {
        id: "day44_ex_017",
        type: "fill_in_the_blank",
        question: "The academic year is divided into the autumn and spring ______.",
        correctAnswer: "semesters",
        explanation: "Universities typically divide academic years into 'semesters'."
      },
      {
        id: "day44_ex_018",
        type: "error_correction",
        sentence: "He is my engineering batchmate from Bangalore.",
        correctAnswer: "He is my engineering classmate from Bangalore.",
        explanation: "Replace '*batchmate*' with standard 'classmate' or 'peer'."
      },
      {
        id: "day44_ex_019",
        type: "translation_hi_en",
        hindiSentence: "प्रोफेसर कल सुबह दस बजे नया व्याख्यान देंगे।",
        englishSentence: "The professor will deliver a new lecture tomorrow morning at ten o'clock.",
        targetVocabulary: ["professor", "deliver a lecture"]
      },
      {
        id: "day44_ex_020",
        type: "matching",
        prompt: "Match the degree levels with their descriptions:",
        pairs: [
          { left: "Bachelor's degree", right: "Undergraduate four-year degree" },
          { left: "Master's degree", right: "Postgraduate specialization degree" },
          { left: "Doctorate (Ph.D.)", right: "Highest research degree" },
          { left: "Diploma", right: "Short-term specialized vocational certificate" }
        ]
      },
      {
        id: "day44_ex_021",
        type: "multiple_choice",
        question: "Which of the following phrases means studying intensely right before an exam?",
        options: ["Cramming for an exam", "Graduating with honors", "Defending a thesis", "Dropping a course"],
        correctAnswer: "Cramming for an exam",
        explanation: "'Cramming' means studying heavily in a short period before tests."
      },
      {
        id: "day44_ex_022",
        type: "sentence_ordering",
        scrambledWords: ["thesis", "submitted", "her", "doctoral", "She", "yesterday"],
        correctSentence: "She submitted her doctoral thesis yesterday.",
        explanation: "Subject ('She') + Verb ('submitted') + Object ('her doctoral thesis') + Time ('yesterday')."
      },
      {
        id: "day44_ex_023",
        type: "fill_in_the_blank",
        question: "Annual ______ fees cover instructional costs and laboratory access.",
        correctAnswer: "tuition",
        explanation: "'Tuition fees' represent academic instruction charges."
      },
      {
        id: "day44_ex_024",
        type: "sentence_building",
        prompt: "State that the Faculty of Science offers modern research facilities.",
        targetWords: ["The", "Faculty", "of", "Science", "offers", "modern", "research", "facilities", "."],
        correctSentence: "The Faculty of Science offers modern research facilities."
      },
      {
        id: "day44_ex_025",
        type: "translation_en_hi",
        englishSentence: "All candidates must register for the upcoming semester before Friday.",
        hindiSentence: "सभी उम्मीदवारों को शुक्रवार से पहले आगामी सत्र के लिए पंजीकरण कराना होगा।"
      },
      {
        id: "day44_ex_026",
        type: "multiple_choice",
        question: "The professors and academic staff of a university department are collectively known as the ______.",
        options: ["faculty", "alumni", "freshmen", "syndicate"],
        correctAnswer: "faculty",
        explanation: "'Faculty' refers to the academic and teaching staff."
      },
      {
        id: "day44_ex_027",
        type: "error_correction",
        sentence: "She holds a Bachelors degree in Biotechnology.",
        correctAnswer: "She holds a Bachelor's degree in Biotechnology.",
        explanation: "Punctuate degree levels with an apostrophe: 'Bachelor's degree'."
      },
      {
        id: "day44_ex_028",
        type: "listening_comprehension",
        audioText: "Campus housing applications for incoming postgraduate students will close on July thirty-first.",
        question: "When do campus housing applications close?",
        options: ["July 15", "July 31", "August 1", "August 15"],
        correctAnswer: "July 31",
        explanation: "The audio specifies 'July thirty-first'."
      },
      {
        id: "day44_ex_029",
        type: "dictation",
        spokenText: "The university curriculum emphasizes practical research skills.",
        correctText: "The university curriculum emphasizes practical research skills."
      },
      {
        id: "day44_ex_030",
        type: "applied_scenario",
        scenario: "You are speaking to an international university admissions officer. Explain that you took five subjects this semester and completed a research thesis.",
        correctAnswer: "This semester, I took five subjects and successfully submitted my research thesis.",
        explanation: "Uses accurate academic verbs ('took five subjects', 'submitted my thesis')."
      },
      {
        id: "day44_ex_031",
        type: "multiple_choice",
        question: "What is the list of top-performing academic students called at many universities?",
        options: ["Dean's list", "Class registry", "Faculty index", "Hostel ledger"],
        correctAnswer: "Dean's list",
        explanation: "The 'Dean's list' honors students with high academic performance."
      },
      {
        id: "day44_ex_032",
        type: "fill_in_the_blank",
        question: "Former students who have graduated from a university are called ______.",
        correctAnswer: "alumni",
        explanation: "'Alumni' refers collectively to graduates of an educational institution."
      },
      {
        id: "day44_ex_033",
        type: "translation_hi_en",
        hindiSentence: "क्या विश्वविद्यालय अंतरराष्ट्रीय छात्रों के लिए छात्रवृत्ति प्रदान करता है?",
        englishSentence: "Does the university offer scholarships for international students?",
        targetVocabulary: ["scholarships", "international students"]
      },
      {
        id: "day44_ex_034",
        type: "sentence_building",
        prompt: "Express that he is sitting for his final exams next Tuesday.",
        targetWords: ["He", "is", "sitting", "for", "his", "final", "exams", "next", "Tuesday", "."],
        correctSentence: "He is sitting for his final exams next Tuesday."
      },
      {
        id: "day44_ex_035",
        type: "mixed_retrieval",
        question: "Identify the sentence that uses standard international academic English:",
        options: [
          "I passed out from engineering college and gave my exam with my batchmates.",
          "I graduated from engineering college and took my exams alongside my classmates.",
          "I got passed out in 2020 and gave class to students.",
          "My batchfellow is taking lecture to us today."
        ],
        correctAnswer: "I graduated from engineering college and took my exams alongside my classmates.",
        explanation: "Correctly uses 'graduated', 'took my exams', and 'classmates'."
      }
    ]
  },
  use: {
    dialogue: {
      title: "Discussing Postgraduate Research and Specialization",
      context: "Two students (Arjun and Elena) discuss course selection and dissertation topics at the university cafeteria.",
      characters: ["Arjun", "Elena"],
      lines: [
        { speaker: "Arjun", text: "Hi Elena! Have you finalized your elective modules for the upcoming spring semester?", hindi: "नमस्ते ऐलेना! क्या तुमने आगामी वसंत सत्र के लिए अपने वैकल्पिक विषय तय कर लिए हैं?" },
        { speaker: "Elena", text: "Almost. I'm definitely taking Advanced Neural Networks, which is a prerequisite for my research thesis.", hindi: "लगभग। मैं निश्चित रूप से एडवांस्ड न्यूरल नेटवर्क्स ले रही हूँ, जो मेरे शोध प्रबंध के लिए एक पूर्व-शर्त है।" },
        { speaker: "Arjun", text: "That sounds challenging. Are you still planning to major in Data Science?", hindi: "यह काफी चुनौतीपूर्ण लगता है। क्या तुम अभी भी डेटा साइंस में मेजर करने की योजना बना रही हो?" },
        { speaker: "Elena", text: "Yes, and I'll be working under Professor Davis in the artificial intelligence laboratory.", hindi: "हाँ, और मैं आर्टिफिशियल इंटेलिजेंस प्रयोगशाला में प्रोफेसर डेविस के अधीन काम करूँगी।" },
        { speaker: "Arjun", text: "That's fantastic! I heard his research group secured a major government grant this year.", hindi: "यह तो शानदार है! मैंने सुना है कि उनके शोध समूह को इस वर्ष एक बड़ा सरकारी अनुदान मिला है।" },
        { speaker: "Elena", text: "Indeed! It covers our laboratory equipment and student fellowships.", hindi: "वास्तव में! यह हमारे प्रयोगशाला उपकरणों और छात्र फैलोशिप को कवर करता है।" }
      ]
    },
    speakingPrompt: {
      situation: "Discuss your educational background, favorite subjects, and future academic goals.",
      prompts: [
        "Where did you graduate from or where are you currently studying?",
        "What was or is your primary field of study (major)?",
        "Describe one interesting project, lecture, or research paper you worked on."
      ],
      targetExpressions: ["graduated from", "majored in", "dissertation / research", "prerequisite", "curriculum"]
    },
    roleplay: {
      scenario: "Academic advising meeting with a university faculty counselor.",
      roleA: "Student asking about credit transfers, degree requirements, and scholarship eligibility.",
      roleB: "Academic counselor reviewing the transcript, explaining prerequisites, and outlining dissertation timelines.",
      sampleDialogue: "Student: 'Good morning, Professor. I would like to review my credits to ensure I am on track to graduate next spring.' | Counselor: 'Let us examine your transcript. You have completed the core curriculum, but you still need one advanced seminar and your thesis defense.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day44_bm_001",
        title: "Academic Background Statement Formulation",
        prompt: "Draft a formal 3-sentence introduction of your academic qualifications, degree, major, and graduation institution.",
        sampleAnswerEn: "I graduated from the National Institute of Technology with a Bachelor's degree in Computer Science. During my studies, I majored in Software Systems and completed a dissertation on distributed computing. I am now preparing to pursue a Master's degree.",
        sampleAnswerHi: "मैंने राष्ट्रीय प्रौद्योगिकी संस्थान से कंप्यूटर साइंस में बैचलर डिग्री के साथ स्नातक की उपाधि प्राप्त की। अपनी पढ़ाई के दौरान, मैंने सॉफ्टवेयर सिस्टम में मेजर किया और डिस्ट्रीब्यूटेड कंप्यूटिंग पर एक शोध प्रबंध पूरा किया। अब मैं मास्टर डिग्री करने की तैयारी कर रहा हूँ।",
        evaluationCriteria: "Correct syntax for 'graduated from', 'Bachelor's degree in', 'majored in', and 'dissertation'."
      },
      {
        id: "day44_bm_002",
        title: "Course Requirement & Prerequisite Inquiry",
        prompt: "Formulate an email inquiry to a department head asking about course prerequisites and scholarship deadlines.",
        sampleAnswerEn: "Dear Professor Sharma, I am writing to inquire about the prerequisites for the Advanced Robotics seminar next semester. Could you also please confirm the deadline for the merit-based scholarship applications? Thank you for your guidance.",
        sampleAnswerHi: "आदरणीय प्रोफेसर शर्मा, मैं अगले सत्र के एडवांस्ड रोबोटिक्स सेमिनार की पूर्व-शर्तों के बारे में पूछताछ करने के लिए लिख रहा हूँ। क्या आप कृपया मेरिट-आधारित छात्रवृत्ति आवेदनों की अंतिम तिथि की पुष्टि भी कर सकते हैं? आपके मार्गदर्शन के लिए धन्यवाद।",
        evaluationCriteria: "Professional academic register, polite inquiry syntax, correct use of 'prerequisites' and 'merit-based scholarship'."
      },
      {
        id: "day44_bm_003",
        title: "L1 Academic Interference Remediation",
        prompt: "Identify and correct all errors in: '*I passed out from university in 2022 and gave my exams with my batchmates.*'",
        sampleAnswerEn: "Correction: 'I graduated from university in 2022 and took my exams alongside my classmates.' Explanation: 1. 'Passed out' means fainted in standard English; use 'graduated from'. 2. Students 'take' or 'sit for' exams; instructors 'give' exams. 3. 'Batchmate' is an Indianism; use 'classmate' or 'fellow student'.",
        sampleAnswerHi: "सुधार: 'I graduated from university in 2022 and took my exams alongside my classmates.' व्याख्या: 1. 'Passed out' का अर्थ मानक अंग्रेजी में बेहोश होना है; 'graduated from' का प्रयोग करें। 2. छात्र परीक्षा 'take' करते हैं (देते हैं); शिक्षक परीक्षा 'give' करते हैं। 3. 'Batchmate' के स्थान पर 'classmate' का प्रयोग करें।",
        evaluationCriteria: "Accurate identification and linguistic explanation of 'pass out', 'give exam', and 'batchmate'."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "Why is '*I passed out from college*' incorrect in standard English?", a: "'Pass out' means to faint or lose consciousness; the correct term is 'graduated from college'." },
      { q: "Do students 'give' an exam or 'take' an exam?", a: "Students 'take' or 'sit for' an exam; professors/examiners 'give' or 'administer' exams." },
      { q: "What is a 'prerequisite' course?", a: "A mandatory preliminary subject that must be completed before enrolling in an advanced course." },
      { q: "What is the global standard alternative to '*batchmate*'?", a: "Classmate / peer / fellow student" }
    ],
    spacedTips: [
      "Tip 1: Always punctuate 'Bachelor's degree' and 'Master's degree' with an apostrophe 's'.",
      "Tip 2: Note that 'faculty' can refer both to an academic department (Faculty of Arts) and the teaching staff."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day43.js'), `export const day43 = ${JSON.stringify(day43, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day43.js");

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day44.js'), `export const day44 = ${JSON.stringify(day44, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Generated content_builder/day44.js");
