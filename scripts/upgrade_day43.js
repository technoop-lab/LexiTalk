import fs from 'fs';
import path from 'path';

// Day 43: Shopping, Product Inquiries & Consumer Communication
const day43 = {
  dayNumber: 43,
  id: "day_43",
  titleEn: "Shopping, Product Inquiries & Consumer Communication",
  titleHi: "खरीदारी, उत्पाद पूछताछ एवं उपभोक्ता संचार",
  cefr: "A2.2",
  estMinutes: 60,
  prerequisites: "Day 42 Mastery (Public Transit & Spatial Collocations)",
  objectivesEn: [
    "Conduct retail transactions, inquiring about specifications, sizes, fabrics, warranty coverage, and return policies.",
    "Master bargaining, discounts, price matching, tax invoices, refunds, and exchange protocols.",
    "Express customer dissatisfaction constructively, reporting defective merchandise, transit damage, and missing components.",
    "Distinguish clearly between retail terminology: receipt, invoice, voucher, coupon, warranty, guarantee, clearance, and markdown.",
    "Remediate Indian English shopping literalisms such as '*give discount*', '*what is the last price*', and '*can I replace it?*'"
  ],
  objectivesHi: [
    "दुकानों और ऑनलाइन शॉपिंग में उत्पाद पूछताछ, साइज, फैब्रिक, वारंटी और रिटर्न नियमों पर धाराप्रवाह संवाद करना।",
    "छूट (Discounts), मोलभाव, मूल्य मिलान, टैक्स इनवॉइस, रिफंड और एक्सचेंज की बातचीत में निपुण होना।",
    "दोषपूर्ण सामान (Defective items), टूटे-फूटे उत्पाद और गुम पुर्जों की शिकायत पेशेवर तरीके से दर्ज कराना।",
    "रसीद (Receipt), बिल (Invoice), वाउचर, कूपन, वारंटी और गारंटी के बीच का अंतर समझना।",
    "हिंदी से शाब्दिक अनुवाद वाली गलतियों ('give discount', 'what is the last price') को पूरी तरह समाप्त करना।"
  ],
  teach: {
    hindiExplanation: `डे 43 में हम रिटेल शॉपिंग, उत्पाद पूछताछ और उपभोक्ता अधिकारों (Consumer Rights & Communication) की भाषा सीखेंगे।

1. **खरीदारी और छूट के मानक वाक्यांश**:
   - 'Is there any discount or promotional offer available on this item?' (क्या इस वस्तु पर कोई छूट या प्रोमोशनल ऑफर उपलब्ध है?)
   - 'Could you check if you have this in a medium or in a different color?' (क्या आप देख सकते हैं कि क्या यह मीडियम साइज या किसी अन्य रंग में उपलब्ध है?)
   - 'Where is the fitting room / changing room located?' (ट्रायल रूम / फिटिंग रूम कहाँ है?)

2. **शिकायत और रिफंड (Defects, Exchanges & Refunds)**:
   - **Receipt**: खरीदारी की भुगतान रसीद (इसमें 'p' साइलेंट होता है: /rɪˈsiːt/ 'रिसीट')।
   - **Exchange**: एक वस्तु देकर उसी मूल्य की दूसरी वस्तु लेना।
   - **Refund**: सामान वापस करके अपने पैसे वापस लेना।
   - **Warranty / Guarantee**: निर्माता द्वारा दिया जाने वाला मरम्मत या प्रतिस्थापन का लिखित आश्वासन।

3. **L1 हिंदी भाषियों की आम भूलें**:
   - दुकानदार से कभी न पूछें: '*What is the last price?*' ❌। सही मानक अंग्रेज़ी: "**Is the price negotiable?**" या "**What is your best price on this?**" ✔️
   - छूट मांगते समय '*Give some discount*' ❌ कहने के बजाय "**Are there any ongoing promotions or discounts?**" कहें।
   - सामान बदलने के लिए '*I want to replace this shirt*' ❌ (क्योंकि Replace का अर्थ नया देना होता है) की जगह "**I would like to exchange this for a larger size.**" बोलें।`,
    englishExplanation: `Day 43 develops advanced functional fluency in commercial transactions, retail negotiations, product inquiries, and consumer advocacy.

Key Focus Areas:
1. **Inquiry Formats**: Asking about material composition, warranty clauses, stock availability, and compatibility.
2. **Pragmatic Bargaining & Price Negotiation**: Using respectful, natural phrasing to inquire about markdowns, seasonal sales, bundle deals, and loyalty programs.
3. **Consumer Grievance Protocol**: Constructively reporting damaged goods, requesting refunds, presenting proofs of purchase, and dealing with customer service desks.`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Polite Modal Inquiries with Embedded Wh-Clauses",
        description: "Formulate polite customer queries using embedded indirect questions: 'Could you check whether this is in stock?' (NOT '*Could you check is this in stock?*').",
        register: "Customer Inquiry Syntax"
      },
      {
        ruleNumber: 2,
        title: "Conditionals in Consumer Policy Discussion",
        description: "Express store policies using real conditionals: 'If you retain the original receipt, you can claim a full refund within thirty days.'",
        register: "Policy Discourse"
      },
      {
        ruleNumber: 3,
        title: "Distinguishing 'Exchange' vs 'Refund' vs 'Replace'",
        description: "Customers 'exchange' goods for another model/size, request a 'refund' (cash back), while manufacturers 'replace' defective parts under warranty.",
        register: "Lexical Precision"
      },
      {
        ruleNumber: 4,
        title: "Countable vs Uncountable Financial/Retail Nouns",
        description: "'Merchandise', 'clothing', and 'baggage' are uncountable. 'Items', 'receipts', 'garments', and 'invoices' are countable.",
        register: "Noun Classification"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Product Availability Inquiry",
        formula: "Do you happen to have this + [Item] + in + [Size / Color / Model]?",
        exampleEn: "Do you happen to have this jacket in a size medium?",
        meaningHi: "क्या आपके पास यह जैकेट मीडियम साइज में उपलब्ध है?"
      },
      {
        subjectGroup: "Price & Promotion Check",
        formula: "Is this item eligible for the + [Discount / Buy-One-Get-One] + promotion?",
        exampleEn: "Is this winter coat eligible for the seasonal clearance discount?",
        meaningHi: "क्या यह विंटर कोट मौसमी क्लीयरेंस छूट के लिए पात्र है?"
      },
      {
        subjectGroup: "Return / Exchange Request",
        formula: "I would like to + [exchange / return] + this + [Item] + because + [Reason].",
        exampleEn: "I would like to exchange this sweater because the stitching is unraveling.",
        meaningHi: "मैं इस स्वेटर को बदलना चाहता हूँ क्योंकि इसकी सिलाई उधड़ रही है।"
      },
      {
        subjectGroup: "Warranty & After-Sales Check",
        formula: "Does this electronic device come with a + [Time period] + manufacturer warranty?",
        exampleEn: "Does this laptop come with a two-year manufacturer warranty?",
        meaningHi: "क्या यह लैपटॉप दो साल की निर्माता वारंटी के साथ आता है?"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Last Price', 'Give Discount', and 'Receipt' Pronunciation Traps",
      hindiPattern: "1. '*Bhaiya, what is the last price?*' (direct translation of 'लास्ट रेट क्या है?')\n2. '*Give some discount on this.*'\n3. Pronouncing 'Receipt' as /rɪˈsiːpt/ with a hard 'p'.\n4. '*I want to replace this dress.*' (when meaning exchange at a shop).",
      potentialInterference: "Literal translations from Hindi retail practices and phonetic spelling traps.",
      explanation: "Native English speakers ask 'Is the price negotiable?' or 'What's the best price you can do?'. Always drop the 'p' in 'receipt' (/rɪˈsiːt/). Use 'exchange' when swapping clothing for another size.",
      naturalSolution: "1. 'What is your best price on this item?' | 2. 'Is there any ongoing promotional discount?' | 3. Pronounce /rɪˈsiːt/ ('re-seet') | 4. 'I would like to exchange this dress for a smaller size.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day43_vocab_001", word: "Receipt", pos: "Noun", ipa: "/rɪˈsiːt/", meaningHi: "खरीद की रसीद (नोट: 'p' साइलेंट है)", exampleEn: "Keep the original receipt for any warranty claims.", exampleHi: "वारंटी दावों के लिए मूल रसीद संभाल कर रखें।" },
      { id: "day43_vocab_002", word: "Refund", pos: "Noun/Verb", ipa: "/ˈriː.fʌnd/ (n) /rɪˈfʌnd/ (v)", meaningHi: "धनवापसी / पैसे वापस मिलना या देना", exampleEn: "The store issued a full refund to my credit card.", exampleHi: "दुकान ने मेरे क्रेडिट कार्ड पर पूरा पैसा वापस कर दिया।" },
      { id: "day43_vocab_003", word: "Defective", pos: "Adjective", ipa: "/dɪˈfek.tɪv/", meaningHi: "दोषपूर्ण / खराब / जिसमें कोई खामी हो", exampleEn: "I returned the headphones because they were defective.", exampleHi: "मैंने हेडफ़ोन वापस कर दिए क्योंकि वे खराब थे।" },
      { id: "day43_vocab_004", word: "Warranty", pos: "Noun", ipa: "/ˈwɒr.ən.ti/", meaningHi: "वारंटी / निर्माता द्वारा मरम्मत का आश्वासन", exampleEn: "This television comes with a comprehensive three-year warranty.", exampleHi: "यह टेलीविज़न तीन साल की व्यापक वारंटी के साथ आता है।" },
      { id: "day43_vocab_005", word: "Clearance", pos: "Noun", ipa: "/ˈklɪə.rəns/", meaningHi: "स्टॉक खाली करने की भारी छूट वाली सेल", exampleEn: "We purchased designer shoes at fifty percent off in the clearance sale.", exampleHi: "हमने क्लीयरेंस सेल में पचास प्रतिशत की छूट पर डिज़ाइनर जूते खरीदे।" },
      { id: "day43_vocab_006", word: "Fitting Room", pos: "Noun", ipa: "/ˈfɪt.ɪŋ ˌruːm/", meaningHi: "कपड़े पहनकर देखने का कमरा (ट्रायल रूम)", exampleEn: "Excuse me, where are the fitting rooms located?", exampleHi: "माफ कीजिए, फिटिंग रूम कहाँ स्थित हैं?" },
      { id: "day43_vocab_007", word: "Aisle", pos: "Noun", ipa: "/aɪl/", meaningHi: "दुकान या सुपरमार्केट में सामान के बीच का रास्ता", exampleEn: "Dairy products are located in aisle number four.", exampleHi: "डेयरी उत्पाद गलियारे (आइल) नंबर चार में स्थित हैं।" },
      { id: "day43_vocab_008", word: "Voucher", pos: "Noun", ipa: "/ˈvaʊ.tʃər/", meaningHi: "उपहार वाउचर / खरीद कूपन", exampleEn: "I received a thousand-rupee gift voucher for my birthday.", exampleHi: "मुझे अपने जन्मदिन पर एक हज़ार रुपये का उपहार वाउचर मिला।" },
      { id: "day43_vocab_009", word: "Merchandise", pos: "Noun (uncountable)", ipa: "/ˈmɜː.tʃən.daɪz/", meaningHi: "बिक्री का माल / व्यापारिक सामान", exampleEn: "All damaged merchandise was removed from the display shelves.", exampleHi: "सभी क्षतिग्रस्त सामान को डिस्प्ले शेल्फ से हटा दिया गया था।" },
      { id: "day43_vocab_010", word: "Exchange", pos: "Verb/Noun", ipa: "/ɪksˈtʃeɪndʒ/", meaningHi: "सामान बदलना (अन्य साइज या मॉडल से)", exampleEn: "Can I exchange this shirt for a larger size?", exampleHi: "क्या मैं इस शर्ट को बड़े साइज से बदल सकता हूँ?" },
      { id: "day43_vocab_011", word: "Cashier", pos: "Noun", ipa: "/kæʃˈɪər/", meaningHi: "खजांची / बिलिंग काउंटर का कर्मचारी", exampleEn: "Please pay the cashier at the front checkout counter.", exampleHi: "कृपया सामने वाले चेकआउट काउंटर पर कैशियर को भुगतान करें।" },
      { id: "day43_vocab_012", word: "Invoice", pos: "Noun", ipa: "/ˈɪn.vɔɪs/", meaningHi: "चालान / टैक्स बिल", exampleEn: "The seller provided a GST invoice with the electronic purchase.", exampleHi: "विक्रेता ने इलेक्ट्रॉनिक खरीद के साथ एक जीएसटी इनवॉइस प्रदान किया।" },
      { id: "day43_vocab_013", word: "Negotiable", pos: "Adjective", ipa: "/nəˈɡəʊ.ʃə.bəl/", meaningHi: "मोलभाव योग्य / जिस पर बातचीत हो सके", exampleEn: "Is the price of this antique mirror negotiable?", exampleHi: "क्या इस पुराने शीशे की कीमत पर मोलभाव हो सकता है?" },
      { id: "day43_vocab_014", word: "Checkout", pos: "Noun", ipa: "/ˈtʃek.aʊt/", meaningHi: "बिलिंग और भुगतान का स्थान", exampleEn: "There was a long queue at the supermarket checkout.", exampleHi: "सुपरमार्केट चेकआउट पर एक लंबी कतार थी।" },
      { id: "day43_vocab_015", word: "Cart", pos: "Noun", ipa: "/kɑːt/", meaningHi: "सामान ले जाने की ट्रॉली (UK: Trolley)", exampleEn: "She loaded several grocery boxes into her shopping cart.", exampleHi: "उसने अपने शॉपिंग कार्ट में किराने के कई डिब्बे लादे।" },
      { id: "day43_vocab_016", word: "Counterfeit", pos: "Adjective/Noun", ipa: "/ˈkaʊn.tə.fɪt/", meaningHi: "नकली / जाली सामान", exampleEn: "Authorities seized dozens of counterfeit designer handbags.", exampleHi: "अधिकारियों ने दर्जनों नकली डिज़ाइनर हैंडबैग ज़ब्त किए।" },
      { id: "day43_vocab_017", word: "BOGO (Buy-One-Get-One)", pos: "Noun/Adj", ipa: "/ˈbəʊ.ɡəʊ/", meaningHi: "एक के साथ एक मुफ्त ऑफर", exampleEn: "The store is running a BOGO offer on all polo shirts.", exampleHi: "दुकान सभी पोलो शर्ट्स पर एक के साथ एक मुफ्त (BOGO) ऑफर चला रही है।" },
      { id: "day43_vocab_018", word: "Damaged", pos: "Adjective", ipa: "/ˈdæm.ɪdʒd/", meaningHi: "क्षतिग्रस्त / टूटा-फूटा", exampleEn: "The courier delivered a visibly damaged parcel.", exampleHi: "कूरियर ने एक स्पष्ट रूप से क्षतिग्रस्त पार्सल डिलीवर किया।" },
      { id: "day43_vocab_019", word: "Customer Support", pos: "Noun", ipa: "/ˌkʌs.tə.mə səˈpɔːt/", meaningHi: "ग्राहक सहायता सेवा", exampleEn: "Contact customer support if your delivery is delayed.", exampleHi: "यदि आपकी डिलीवरी में देरी हो तो ग्राहक सहायता से संपर्क करें।" },
      { id: "day43_vocab_020", word: "Loyalty Points", pos: "Noun (plural)", ipa: "/ˈlɔɪ.əl.ti ˌpɔɪnts/", meaningHi: "रिवॉर्ड या लॉयल्टी अंक", exampleEn: "You can redeem your loyalty points for an instant discount.", exampleHi: "आप तत्काल छूट के लिए अपने लॉयल्टी पॉइंट्स को रिडीम कर सकते हैं।" }
    ],
    spokenPhrases: [
      { id: "day43_phrase_001", phrase: "Do you have this in a size medium?", register: "Retail Inquiry", meaningHi: "क्या आपके पास यह मीडियम साइज में है?" },
      { id: "day43_phrase_002", phrase: "I would like to exchange this for a different color.", register: "Customer Service", meaningHi: "मैं इसे किसी दूसरे रंग से बदलना चाहता हूँ।" },
      { id: "day43_phrase_003", phrase: "Could you tell me where the fitting rooms are?", register: "Store Navigation", meaningHi: "क्या आप मुझे बता सकते हैं कि फिटिंग रूम कहाँ हैं?" },
      { id: "day43_phrase_004", phrase: "What is your return and refund policy?", register: "Consumer Rights", meaningHi: "आपकी वापसी और रिफंड नीति क्या है?" },
      { id: "day43_phrase_005", phrase: "Is the price negotiable on this floor model?", register: "Polite Bargaining", meaningHi: "क्या इस डिस्प्ले मॉडल की कीमत पर कोई मोलभाव हो सकता है?" },
      { id: "day43_phrase_006", phrase: "Could I have a printed tax receipt, please?", register: "Checkout Transaction", meaningHi: "क्या मुझे एक प्रिंटेड टैक्स रसीद मिल सकती है?" },
      { id: "day43_phrase_007", phrase: "This item appears to have a small tear near the seam.", register: "Defect Notification", meaningHi: "इस कपड़े में सिलाई के पास एक छोटा सा छेद/कट दिखाई दे रहा है।" },
      { id: "day43_phrase_008", phrase: "Can I pay by credit card or UPI?", register: "Payment Query", meaningHi: "क्या मैं क्रेडिट कार्ड या यूपीआई से भुगतान कर सकता हूँ?" },
      { id: "day43_phrase_009", phrase: "Does this warranty cover accidental liquid damage?", register: "Warranty Inquiry", meaningHi: "क्या यह वारंटी गलती से पानी गिरने से हुए नुकसान को कवर करती है?" },
      { id: "day43_phrase_010", phrase: "I'm just browsing for now, thank you!", register: "Polite Store Interaction", meaningHi: "मैं अभी सिर्फ देख रहा हूँ, धन्यवाद!" },
      { id: "day43_phrase_011", phrase: "Would you like a shopping bag for this?", register: "Cashier Discourse", meaningHi: "क्या आपको इसके लिए एक शॉपिंग बैग चाहिए?" },
      { id: "day43_phrase_012", phrase: "Can I redeem my reward points on this purchase?", register: "Loyalty Redemption", meaningHi: "क्या मैं इस खरीद पर अपने रिवॉर्ड पॉइंट्स इस्तेमाल कर सकता हूँ?" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day43_ex_001", english: "Could you please check in the storage room whether you have this dress in small?", hindi: "क्या आप कृपया स्टोर रूम में देख सकते हैं कि क्या आपके पास यह ड्रेस स्मॉल साइज में है?" },
      { id: "day43_ex_002", english: "Customers are entitled to a full refund within fourteen days with a valid receipt.", hindi: "मान्य रसीद होने पर ग्राहक चौदह दिनों के भीतर पूर्ण रिफंड के हकदार हैं।" },
      { id: "day43_ex_003", english: "I noticed a faint scratch on the screen of this brand-new tablet.", hindi: "मैंने इस बिल्कुल नए टैबलेट की स्क्रीन पर एक हल्का खरोंच का निशान देखा।" },
      { id: "day43_ex_004", english: "All items purchased during the annual clearance sale are non-refundable.", hindi: "वार्षिक क्लीयरेंस सेल के दौरान खरीदी गई सभी वस्तुएं गैर-वापसी योग्य हैं।" },
      { id: "day43_ex_005", english: "Is there an additional charge for express doorstep delivery?", hindi: "क्या घर तक एक्सप्रेस डिलीवरी के लिए कोई अतिरिक्त शुल्क है?" },
      { id: "day43_ex_006", english: "The sales associate offered to match the competitor's online price.", hindi: "सेल्स एग्जीक्यूटिव ने प्रतिस्पर्धी की ऑनलाइन कीमत से मेल करने की पेशकश की।" },
      { id: "day43_ex_007", english: "Where can I find organic gluten-free groceries in this supermarket?", hindi: "इस सुपरमार्केट में मुझे जैविक ग्लूटेन-मुक्त किराना सामान कहाँ मिल सकता है?" },
      { id: "day43_ex_008", english: "Please retain your purchase invoice as proof for claiming the manufacturer warranty.", hindi: "निर्माता वारंटी का दावा करने के प्रमाण के रूप में कृपया अपना खरीद इनवॉइस संभाल कर रखें।" },
      { id: "day43_ex_009", english: "She tried on three different pairs of jeans in the fitting room.", hindi: "उसने फिटिंग रूम में जींस की तीन अलग-अलग जोड़ियों को पहनकर देखा।" },
      { id: "day43_ex_010", english: "Our return window is thirty days from the original date of purchase.", hindi: "हमारी रिटर्न अवधि मूल खरीद तिथि से तीस दिनों की है।" },
      { id: "day43_ex_011", english: "The cashier asked if I wanted to round up my bill for charity.", hindi: "कैशियर ने पूछा कि क्या मैं दान के लिए अपने बिल की राशि को राउंड ऑफ करना चाहता हूँ।" },
      { id: "day43_ex_012", english: "This electronic kettle stopped working after only two weeks of light usage.", hindi: "यह इलेक्ट्रॉनिक केतली केवल दो सप्ताह के हल्के उपयोग के बाद ही बंद हो गई।" },
      { id: "day43_ex_013", english: "You can apply this promotional coupon code at the online checkout stage.", hindi: "आप ऑनलाइन चेकआउट चरण में इस प्रोमोशनल कूपन कोड को लागू कर सकते हैं।" },
      { id: "day43_ex_014", english: "Do these sunglasses provide one hundred percent UV protection?", hindi: "क्या ये धूप के चश्मे शत-प्रतिशत यूवी सुरक्षा प्रदान करते हैं?" },
      { id: "day43_ex_015", english: "The store credit voucher is valid for twelve months at all branch locations.", hindi: "स्टोर क्रेडिट वाउचर सभी शाखा स्थानों पर बारह महीनों के लिए मान्य है।" },
      { id: "day43_ex_016", english: "We were charged twice on our credit card for the same grocery item.", hindi: "हमारे क्रेडिट कार्ड से एक ही किराना सामान के लिए दो बार पैसे काट लिए गए थे।" },
      { id: "day43_ex_017", english: "Is this winter jacket water-resistant or completely waterproof?", hindi: "क्या यह विंटर जैकेट पानी प्रतिरोधी है या पूरी तरह से वाटरप्रूफ है?" },
      { id: "day43_ex_018", english: "He asked for an exchange because the collar was improperly stitched.", hindi: "उसने बदलने की मांग की क्योंकि कॉलर की सिलाई ठीक से नहीं की गई थी।" },
      { id: "day43_ex_019", english: "The self-checkout kiosk enables faster payment without waiting in queues.", hindi: "सेल्फ-चेकआउट कियोस्क कतारों में इंतजार किए बिना तेज़ भुगतान की सुविधा देता है।" },
      { id: "day43_ex_020", english: "Please ensure the security tag is deactivated before bagging the merchandise.", hindi: "सामान को बैग में रखने से पहले कृपया सुनिश्चित करें कि सुरक्षा टैग निष्क्रिय कर दिया गया है।" },
      { id: "day43_ex_021", english: "Can you gift-wrap this watch set with a personalized message card?", hindi: "क्या आप इस घड़ी सेट को एक व्यक्तिगत संदेश कार्ड के साथ गिफ़्ट-रैप कर सकते हैं?" },
      { id: "day43_ex_022", english: "The customer care representative apologized sincerely for the shipping delay.", hindi: "ग्राहक सेवा प्रतिनिधि ने शिपिंग में देरी के लिए ईमानदारी से माफी मांगी।" },
      { id: "day43_ex_023", english: "Are these leather boots handcrafted from genuine leather?", hindi: "क्या ये लेदर बूट असली चमड़े से हस्तनिर्मित हैं?" },
      { id: "day43_ex_024", english: "The supermarket offers a ten percent rebate on all bulk purchases.", hindi: "सुपरमार्केट सभी थोक खरीद पर दस प्रतिशत की छूट (रिबेट) प्रदान करता है।" },
      { id: "day43_ex_025", english: "I brought this blender back because the motor produces a burning smell.", hindi: "मैं इस ब्लेंडर को वापस लाया क्योंकि मोटर से जलने की गंध आ रही है।" }
    ]
  },
  pronunciation: {
    focusSound: "Silent 'p' in 'Receipt' /rɪˈsiːt/, Silent 's' in 'Aisle' /aɪl/, and /ʃ/ in 'Negotiable' /nəˈɡəʊ.ʃə.bəl/",
    phoneticNotes: "1. 'Receipt' NEVER pronounces 'p': say /rɪˈsiːt/ ('re-seet').\n2. 'Aisle' (grocery row) has a silent 's': say /aɪl/ (rhymes with 'mile').\n3. 'Purchase' stresses the first syllable: /ˈpɜː.tʃəs/, not /pɜːˈtʃeɪs/.",
    minimalPairs: [
      { wordA: "Aisle", ipaA: "/aɪl/", wordB: "Isle", ipaB: "/aɪl/" },
      { wordA: "Cost", ipaA: "/kɒst/", wordB: "Coast", ipaB: "/kəʊst/" },
      { wordA: "Suit", ipaA: "/suːt/", wordB: "Soot", ipaB: "/sʊt/" },
      { wordA: "Cheap", ipaA: "/tʃiːp/", wordB: "Chip", ipaB: "/tʃɪp/" },
      { wordA: "Sale", ipaA: "/seɪl/", wordB: "Sell", ipaB: "/sel/" }
    ],
    drills: [
      { sentence: "Please retain your receipt for an exchange.", focus: "Silent 'p' in 'receipt' (/rɪˈsiːt/)" },
      { sentence: "Walk down aisle five to find canned groceries.", focus: "Silent 's' in 'aisle' (/aɪl/)" },
      { sentence: "Is the price on this purchase negotiable?", focus: "Stress in /ˈpɜː.tʃəs/ and /nəˈɡəʊ.ʃə.bəl/" },
      { sentence: "She tried the shoes in the fitting room.", focus: "Clear vowel in /ˈfɪt.ɪŋ ˌruːm/" },
      { sentence: "The cashier refunded the defective item.", focus: "Verb stress /rɪˈfʌnd.ɪd/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day43_ex_001",
        type: "multiple_choice",
        prompt: "Choose the correct pronunciation of the word 'Receipt':",
        options: ["/rɪˈsiːpt/ (with 'p')", "/rɪˈsiːt/ (silent 'p')", "/ˈres.ɪpt/", "/ˈriː.kɪpt/"],
        correctAnswer: "/rɪˈsiːt/ (silent 'p')",
        explanationEn: "The letter 'p' in 'receipt' is completely silent.",
        explanationHi: "'Receipt' में 'p' साइलेंट होता है, इसका उच्चारण 'रिसीट' (/rɪˈsiːt/) होता है।",
        difficulty: "easy",
        skillTag: "PRONUNCIATION"
      },
      {
        id: "day43_ex_002",
        type: "error_correction",
        prompt: "Correct the sentence: 'Bhaiya, what is the last price of this shirt?'",
        correctAnswer: "What is your best price on this shirt?",
        acceptableAnswers: [
          "Is the price negotiable on this shirt?",
          "What is the best price you can offer for this shirt?"
        ],
        explanationEn: "In standard English, ask 'What is your best price?' or 'Is the price negotiable?'.",
        explanationHi: "'Last price' के स्थान पर 'What is your best price?' या 'Is the price negotiable?' बोलें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day43_ex_003",
        type: "fill_blank",
        prompt: "A passage between rows of shelves in a supermarket is called an _______.",
        correctAnswer: "aisle",
        explanationEn: "'Aisle' (with silent 's') is the path between supermarket shelves.",
        explanationHi: "सुपरमार्केट के गलियारे को 'aisle' (/aɪl/) कहते हैं।",
        difficulty: "medium",
        skillTag: "RETAIL_VOCAB"
      },
      {
        id: "day43_ex_004",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'क्या इस वस्तु पर कोई छूट उपलब्ध है?'",
        correctAnswer: "Is there any discount available on this item?",
        acceptableAnswers: [
          "Is there a discount on this item?",
          "Are there any discounts available for this item?"
        ],
        explanationEn: "'Is there any discount available on this item?' is polite and standard.",
        explanationHi: "'Is there any discount available on this item?' सही अनुवाद है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day43_ex_005",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Customers can claim a full refund with the original invoice.'",
        correctAnswer: "ग्राहक मूल इनवॉइस (बिल) के साथ पूर्ण रिफंड का दावा कर सकते हैं।",
        acceptableAnswers: [
          "ग्राहक असली बिल दिखाकर पूरे पैसे वापस ले सकते हैं।"
        ],
        explanationEn: "'Full refund' translates as पूर्ण रिफंड / पूरे पैसे वापस.",
        explanationHi: "'Full refund' का अर्थ पूरा पैसा वापस मिलना है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day43_ex_006",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [jacket / in / this / do / size / have / large / you / a]",
        correctAnswer: "Do you have this jacket in a large size?",
        acceptableAnswers: [
          "Do you have this jacket in a size large?"
        ],
        correctAnswer: "Do you have this jacket in a size large?",
        explanationEn: "Auxiliary + Subject + Main Verb + Object + Prepositional modifier.",
        explanationHi: "सही क्रम: Do you have this jacket in a size large?",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day43_ex_007",
        type: "multiple_choice",
        prompt: "What does 'defective merchandise' mean?",
        options: [
          "Goods that are brand new and perfect",
          "Goods with faults, flaws, or operational defects",
          "Goods imported from abroad",
          "Goods given away for free"
        ],
        correctAnswer: "Goods with faults, flaws, or operational defects",
        explanationEn: "'Defective' means imperfect or faulty in structure or operation.",
        explanationHi: "'Defective merchandise' का अर्थ खराब या दोषपूर्ण सामान होता है।",
        difficulty: "easy",
        skillTag: "VOCAB_CLASSIFICATION"
      },
      {
        id: "day43_ex_008",
        type: "error_correction",
        prompt: "Correct the sentence: 'I want to replace this shirt because size is small.'",
        correctAnswer: "I would like to exchange this shirt for a larger size.",
        acceptableAnswers: [
          "I want to exchange this shirt because it is too small."
        ],
        explanationEn: "Customers 'exchange' garments at stores; use 'exchange for a larger size'.",
        explanationHi: "दुकान पर कपड़े बदलने के लिए 'exchange' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day43_ex_009",
        type: "fill_blank",
        prompt: "The room where customers try on clothing before purchasing is called the _______ room.",
        correctAnswer: "fitting",
        acceptableAnswers: ["changing"],
        explanationEn: "'Fitting room' or 'changing room'.",
        explanationHi: "ट्रायल रूम को 'fitting room' या 'changing room' कहते हैं।",
        difficulty: "easy",
        skillTag: "RETAIL_VOCAB"
      },
      {
        id: "day43_ex_010",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nCustomer: 'Can I pay using a credit card?'\nCashier: 'Yes, we accept all major cards, cash, and _______ payments.'",
        options: ["contactless", "cramped", "spacious", "sublet"],
        correctAnswer: "contactless",
        explanationEn: "'Contactless' describes modern tap-to-pay card or mobile payment methods.",
        explanationHi: "संपर्क रहित भुगतान को 'contactless' कहते हैं।",
        difficulty: "easy",
        skillTag: "SITUATIONAL_DISCOURSE"
      },
      {
        id: "day43_ex_011",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'क्या यह वारंटी पानी से हुए नुकसान को कवर करती है?'",
        correctAnswer: "Does this warranty cover water damage?",
        acceptableAnswers: [
          "Does the warranty cover liquid damage?",
          "Is water damage covered under this warranty?"
        ],
        explanationEn: "'Does this warranty cover water damage?' is natural and direct.",
        explanationHi: "'Does this warranty cover water damage?' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day43_ex_012",
        type: "multiple_choice",
        prompt: "What does the retail acronym 'BOGO' stand for?",
        options: ["Buy One Get One", "Bring Old Goods Online", "Best Option Guaranteed Only", "Bank Order Gross Offer"],
        correctAnswer: "Buy One Get One",
        explanationEn: "BOGO stands for 'Buy One, Get One (Free or at a discount)'.",
        explanationHi: "BOGO का अर्थ 'Buy One Get One' (एक के साथ एक) होता है।",
        difficulty: "easy",
        skillTag: "RETAIL_ACRONYMS"
      },
      {
        id: "day43_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'Please retain your receipt for any warranty claims.'",
        correctAnswer: "Please retain your receipt for any warranty claims.",
        explanationEn: "Focus on spelling 'retain' and 'receipt'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day43_ex_014",
        type: "sentence_transformation",
        prompt: "Rewrite politely: 'I want a refund right now.'",
        correctAnswer: "I would like to request a refund, please.",
        acceptableAnswers: [
          "Could I please get a refund?",
          "I would appreciate a refund, please."
        ],
        explanationEn: "Use polite phrasing: 'I would like to request a refund, please.'",
        explanationHi: "विनम्र ग्राहक अनुरोध।",
        difficulty: "easy",
        skillTag: "POLITE_PRAGMATICS"
      },
      {
        id: "day43_ex_015",
        type: "matching",
        prompt: "Match the retail term to its meaning:\n1. Clearance Sale\n2. Invoice\n3. Counterfeit\n4. Voucher",
        options: [
          "1-Sale to empty old stock, 2-Detailed tax bill, 3-Fake imitation product, 4-Prepaid redeemable gift certificate",
          "1-Detailed tax bill, 2-Sale to empty stock, 3-Prepaid certificate, 4-Fake imitation",
          "1-Fake product, 2-Certificate, 3-Tax bill, 4-Sale",
          "1-Sale, 2-Fake product, 3-Certificate, 4-Tax bill"
        ],
        correctAnswer: "1-Sale to empty old stock, 2-Detailed tax bill, 3-Fake imitation product, 4-Prepaid redeemable gift certificate",
        explanationEn: "Accurate definitions of retail concepts.",
        explanationHi: "खुदरा शब्दावली का सही मिलान।",
        difficulty: "medium",
        skillTag: "VOCAB_MATCHING"
      },
      {
        id: "day43_ex_016",
        type: "error_correction",
        prompt: "Correct the sentence: 'All the informations about the product are given here.'",
        correctAnswer: "All the information about the product is given here.",
        explanationEn: "'Information' is uncountable and takes singular verb 'is' (never '*informations*').",
        explanationHi: "'Information' हमेशा अगणनीय (uncountable) होता है, 'is' के साथ आता है।",
        difficulty: "medium",
        skillTag: "UNCOUNTABLE_NOUNS"
      },
      {
        id: "day43_ex_017",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The cashier apologized for the billing error and adjusted the amount.'",
        correctAnswer: "कैशियर ने बिलिंग त्रुटि के लिए माफी मांगी और राशि को समायोजित कर दिया।",
        acceptableAnswers: [
          "कैशियर ने बिल की गलती के लिए माफी मांगी और रकम ठीक कर दी।"
        ],
        explanationEn: "'Adjusted the amount' translates as राशि समायोजित की / रकम ठीक की.",
        explanationHi: "'Adjusted the amount' का अर्थ राशि ठीक करना है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day43_ex_018",
        type: "active_recall",
        prompt: "What is the term for a reduction in the usual price of something?",
        correctAnswer: "Discount",
        acceptableAnswers: ["discount", "markdown", "rebate"],
        explanationEn: "'Discount' or 'markdown' refers to a price reduction.",
        explanationHi: "मूल्य में छूट को 'discount' या 'markdown' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day43_ex_019",
        type: "multiple_choice",
        prompt: "Which question is most appropriate when a sales assistant asks if you need help, but you only want to look around?",
        options: [
          "Don't disturb me!",
          "I'm just browsing, thank you!",
          "Go away please.",
          "Why are you standing near me?"
        ],
        correctAnswer: "I'm just browsing, thank you!",
        explanationEn: "'I'm just browsing, thank you!' is polite and standard worldwide.",
        explanationHi: "सिर्फ देखने के लिए शिष्ट उत्तर: 'I'm just browsing, thank you!'.",
        difficulty: "easy",
        skillTag: "POLITE_PRAGMATICS"
      },
      {
        id: "day43_ex_020",
        type: "speaking_pronunciation",
        prompt: "Read aloud with accurate silent letters: 'The cashier handed me the receipt for my purchase in aisle three.'",
        correctAnswer: "The cashier handed me the receipt for my purchase in aisle three.",
        explanationEn: "Silent 'p' in 'receipt' (/rɪˈsiːt/) and silent 's' in 'aisle' (/aɪl/).",
        explanationHi: "'Receipt' और 'aisle' के साइलेंट अक्षरों का सही उच्चारण करें।",
        difficulty: "medium",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day43_ex_021",
        type: "question_formation",
        prompt: "Form a polite question asking if you can return an item if it does not fit:",
        correctAnswer: "Can I return this item if it doesn't fit?",
        acceptableAnswers: [
          "Could I return this if the size isn't right?",
          "What is your return policy if this doesn't fit?"
        ],
        explanationEn: "'Can I return this item if it doesn't fit?'",
        explanationHi: "रिटर्न नीति पूछने का सही प्रश्न।",
        difficulty: "medium",
        skillTag: "QUESTION_FORMATION"
      },
      {
        id: "day43_ex_022",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'इस कपड़े का रंग पहली धुलाई के बाद फीका पड़ गया।'",
        correctAnswer: "The color of this garment faded after the first wash.",
        acceptableAnswers: [
          "The color of this cloth faded after the first wash.",
          "This fabric faded after the first wash."
        ],
        explanationEn: "'The color of this garment faded after the first wash.'",
        explanationHi: "रंग फीका पड़ने के लिए 'faded' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day43_ex_023",
        type: "sentence_building",
        prompt: "Build a sentence about price matching using [store / price / online / the / offered / to / match / the].",
        correctAnswer: "The store offered to match the online price.",
        explanationEn: "'The store offered to match the online price.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day43_ex_024",
        type: "multiple_choice",
        prompt: "What does 'non-refundable' mean on a sales tag?",
        options: [
          "You can get cash back at any time",
          "You cannot get money returned after purchase",
          "The item is free of cost",
          "You can only pay with coins"
        ],
        correctAnswer: "You cannot get money returned after purchase",
        explanationEn: "'Non-refundable' indicates money cannot be returned after transaction.",
        explanationHi: "'Non-refundable' का अर्थ है कि पैसे वापस नहीं मिलेंगे।",
        difficulty: "easy",
        skillTag: "RETAIL_TERMS"
      },
      {
        id: "day43_ex_025",
        type: "error_correction",
        prompt: "Correct the sentence: 'Please give me bill with GST number.'",
        correctAnswer: "Could you please give me a GST invoice?",
        acceptableAnswers: [
          "Could I please get an invoice with the GST number?"
        ],
        explanationEn: "Formal commercial bill is an 'invoice'; use polite request syntax.",
        explanationHi: "टैक्स बिल के लिए 'GST invoice' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "COMMERCIAL_DISCOURSE"
      },
      {
        id: "day43_ex_026",
        type: "fill_blank",
        prompt: "Customers can redeem their accumulated reward _______ at checkout for an instant discount.",
        correctAnswer: "points",
        explanationEn: "'Reward points' or 'loyalty points'.",
        explanationHi: "रिवॉर्ड या लॉयल्टी पॉइंट्स।",
        difficulty: "easy",
        skillTag: "RETAIL_TERMS"
      },
      {
        id: "day43_ex_027",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The zipper on this leather backpack is stuck and defective.'",
        correctAnswer: "इस चमड़े के बैकपैक की ज़िप अटकी हुई और खराब है।",
        acceptableAnswers: [
          "इस लेदर बैग की चेन खराब और फंसी हुई है।"
        ],
        explanationEn: "'Stuck and defective' translates as अटकी हुई और खराब.",
        explanationHi: "'Zipper' का अर्थ चेन/ज़िप है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day43_ex_028",
        type: "sentence_ordering",
        prompt: "Arrange into a clear query: [points / can / on / my / purchase / redeem / this / I / loyalty]",
        correctAnswer: "Can I redeem my loyalty points on this purchase?",
        explanationEn: "Modal question + Subject + Verb + Object + Prepositional phrase.",
        explanationHi: "सही क्रम: Can I redeem my loyalty points on this purchase?",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day43_ex_029",
        type: "multiple_choice",
        prompt: "Which word means 'a fraudulent imitation of a branded luxury item'?",
        options: ["Counterfeit", "Clearance", "Voucher", "Merchandise"],
        correctAnswer: "Counterfeit",
        explanationEn: "A counterfeit is an unauthorized fake replica.",
        explanationHi: "नकली या जाली सामान को 'counterfeit' कहते हैं।",
        difficulty: "medium",
        skillTag: "VOCAB_DESCRIPTORS"
      },
      {
        id: "day43_ex_030",
        type: "active_recall",
        prompt: "What do we call the shopping container with wheels pushed around in a supermarket?",
        correctAnswer: "Shopping cart",
        acceptableAnswers: ["shopping cart", "cart", "trolley", "shopping trolley"],
        explanationEn: "'Shopping cart' (US) or 'shopping trolley' (UK).",
        explanationHi: "सामान ले जाने वाली पहियों वाली ट्रॉली को 'shopping cart / trolley' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day43_ex_031",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'मैं इस घड़ी को किसी अन्य मॉडल से बदलना चाहता हूँ।'",
        correctAnswer: "I would like to exchange this watch for a different model.",
        acceptableAnswers: [
          "I want to exchange this watch for another model."
        ],
        explanationEn: "'Exchange [item] for [item]' is the standard collocation.",
        explanationHi: "'Exchange for another model' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day43_ex_032",
        type: "error_correction",
        prompt: "Correct the sentence: 'The shopkeeper did not gave any receipt.'",
        correctAnswer: "The shopkeeper did not give any receipt.",
        explanationEn: "After auxiliary 'did not', use base form verb 'give' (NOT past 'gave').",
        explanationHi: "'Did not' के बाद हमेशा वर्ब की फर्स्ट फॉर्म 'give' आती है।",
        difficulty: "easy",
        skillTag: "GRAMMAR_AUXILIARY"
      },
      {
        id: "day43_ex_033",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nSalesperson: 'May I assist you with anything specific today?'\nShopper: 'Yes, could you show me where the _______ section is?'",
        options: ["footwear", "traffic", "plumbing", "tenant"],
        correctAnswer: "footwear",
        explanationEn: "'Footwear' is the retail department for shoes and boots.",
        explanationHi: "जूतों के अनुभाग को 'footwear section' कहते हैं।",
        difficulty: "easy",
        skillTag: "RETAIL_VOCAB"
      },
      {
        id: "day43_ex_034",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The store issued a full refund to my credit card.'",
        correctAnswer: "The store issued a full refund to my credit card.",
        explanationEn: "Focus on spelling 'issued' and 'refund'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day43_ex_035",
        type: "multiple_choice",
        prompt: "What is a 'store credit'?",
        options: [
          "A document or card allowing a customer to purchase goods up to a specific value instead of cash refund",
          "A loan taken from a national bank",
          "A fee charged for entering a store",
          "A plastic bag provided at checkout"
        ],
        correctAnswer: "A document or card allowing a customer to purchase goods up to a specific value instead of cash refund",
        explanationEn: "Store credit is voucher credit issued in place of a direct cash refund.",
        explanationHi: "दुकान से नकद वापसी के बदले मिलने वाले क्रेडिट वाउचर को 'store credit' कहते हैं।",
        difficulty: "medium",
        skillTag: "RETAIL_TERMS"
      },
      {
        id: "day43_ex_036",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'क्या इस पर कोई अतिरिक्त टैक्स लागू होगा?'",
        correctAnswer: "Will any additional taxes apply to this?",
        acceptableAnswers: [
          "Are there any additional taxes on this?",
          "Does this price include all applicable taxes?"
        ],
        explanationEn: "'Will any additional taxes apply to this?' or 'Does this price include taxes?'",
        explanationHi: "टैक्स पूछताछ का सटीक वाक्य।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day43_ex_037",
        type: "error_correction",
        prompt: "Correct the sentence: 'I have bought two baggages from the store.'",
        correctAnswer: "I bought two suitcases from the store.",
        acceptableAnswers: [
          "I bought two bags from the store.",
          "I bought two pieces of luggage from the store."
        ],
        explanationEn: "'Baggage/luggage' is uncountable. Use 'suitcases', 'bags', or 'pieces of luggage'.",
        explanationHi: "'Baggage' अगणनीय है; 'two suitcases' या 'two bags' बोलें।",
        difficulty: "medium",
        skillTag: "UNCOUNTABLE_NOUNS"
      },
      {
        id: "day43_ex_038",
        type: "sentence_building",
        prompt: "Build a sentence about a return window using [return / thirty / policy / days / allows / the / within].",
        correctAnswer: "The policy allows returns within thirty days.",
        acceptableAnswers: [
          "The return policy allows returns within thirty days."
        ],
        explanationEn: "'The policy allows returns within thirty days.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day43_ex_039",
        type: "fill_blank",
        prompt: "The courier parcel arrived with a torn outer seal and _______ contents.",
        correctAnswer: "damaged",
        acceptableAnswers: ["missing"],
        explanationEn: "'Damaged' or 'missing' contents.",
        explanationHi: "क्षतिग्रस्त सामान के लिए 'damaged' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "VOCAB_DESCRIPTORS"
      },
      {
        id: "day43_ex_040",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Please scan the barcode on the price tag at the kiosk.'",
        correctAnswer: "कृपया कियोस्क पर मूल्य टैग पर लगे बारकोड को स्कैन करें।",
        acceptableAnswers: [
          "कृपया प्राइस टैग पर लगे बारकोड को कियोस्क पर स्कैन करें।"
        ],
        explanationEn: "'Scan the barcode on the price tag' translates as मूल्य टैग पर लगे बारकोड को स्कैन करें.",
        explanationHi: "कियोस्क पर बारकोड स्कैन करने का निर्देश।",
        difficulty: "easy",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day43_ex_041",
        type: "multiple_choice",
        prompt: "Which term describes items marked down because they are slightly scuffed from store display?",
        options: ["Floor model / Display piece", "Counterfeit", "Custom order", "Wholesale package"],
        correctAnswer: "Floor model / Display piece",
        explanationEn: "A floor model is a display piece often sold at a discount.",
        explanationHi: "दुकान में प्रदर्शन के लिए रखे गए नमूने को 'floor model / display piece' कहते हैं।",
        difficulty: "medium",
        skillTag: "RETAIL_TERMS"
      },
      {
        id: "day43_ex_042",
        type: "active_recall",
        prompt: "What is the noun for the written guarantee given to the purchaser of a new appliance promising repair or replacement?",
        correctAnswer: "Warranty",
        acceptableAnswers: ["warranty", "guarantee"],
        explanationEn: "'Warranty' is the written promise of repair/replacement.",
        explanationHi: "निर्माता की लिखित गारंटी को 'warranty' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day43_ex_043",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [receipt / please / retain / warranty / proof / as / your]",
        correctAnswer: "Please retain your receipt as warranty proof.",
        acceptableAnswers: [
          "Please retain your receipt as proof of warranty."
        ],
        correctAnswer: "Please retain your receipt as warranty proof.",
        explanationEn: "Imperative verb + Object + Prepositional modifier.",
        explanationHi: "सही क्रम: Please retain your receipt as warranty proof.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day43_ex_044",
        type: "error_correction",
        prompt: "Correct the sentence: 'Are there any sales running in this weekend?'",
        correctAnswer: "Are there any sales running this weekend?",
        explanationEn: "Time expressions like 'this weekend' do not take preposition 'in'.",
        explanationHi: "'This weekend' से पहले 'in' नहीं आता है।",
        difficulty: "medium",
        skillTag: "PREPOSITIONS"
      },
      {
        id: "day43_ex_045",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'मैं इस उपहार को बदलवाने के लिए गिफ़्ट रसीद लाया हूँ।'",
        correctAnswer: "I brought the gift receipt to exchange this present.",
        acceptableAnswers: [
          "I have the gift receipt to exchange this gift.",
          "I brought the gift receipt to exchange this item."
        ],
        explanationEn: "'I brought the gift receipt to exchange this present/gift.'",
        explanationHi: "'Gift receipt' और 'exchange' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day43_ex_046",
        type: "multiple_choice",
        prompt: "Which preposition correctly fills: 'This electronic item is covered _______ a two-year warranty.'?",
        options: ["under", "inside", "over", "between"],
        correctAnswer: "under",
        explanationEn: "Collocation: 'covered under a warranty'.",
        explanationHi: "वारंटी के अंतर्गत आने के लिए 'under a warranty' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "PREPOSITION_COLLOCATION"
      },
      {
        id: "day43_ex_047",
        type: "speaking_pronunciation",
        prompt: "Read aloud articulating syllable stress: 'Is the price of this luxury merchandise negotiable?'",
        correctAnswer: "Is the price of this luxury merchandise negotiable?",
        explanationEn: "Stress patterns: /ˈlʌk.ʃər.i/ /ˈmɜː.tʃən.daɪz/ /nəˈɡəʊ.ʃə.bəl/.",
        explanationHi: "सटीक शब्दाघात और लय के साथ बोलें।",
        difficulty: "hard",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day43_ex_048",
        type: "fill_blank",
        prompt: "The cashier asked if I wanted the invoice sent via email or as a physical _______ slip.",
        correctAnswer: "paper",
        acceptableAnswers: ["printed"],
        explanationEn: "'Printed slip' or 'paper slip'.",
        explanationHi: "'Printed slip' या 'paper slip'.",
        difficulty: "easy",
        skillTag: "RETAIL_VOCAB"
      },
      {
        id: "day43_ex_049",
        type: "sentence_transformation",
        prompt: "Rewrite using 'clearance': 'The store is selling all remaining winter stock at a huge discount to make space.'",
        correctAnswer: "The store is having a winter clearance sale.",
        acceptableAnswers: [
          "The store is running a clearance sale on winter stock."
        ],
        explanationEn: "'Clearance sale' captures discounted stock liquidation.",
        explanationHi: "'Clearance sale' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day43_ex_050",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nCustomer: 'I found a small tear on this shirt.'\nSales Associate: 'I apologize for that. Let me fetch an undamaged _______ from the back room.'",
        options: ["piece", "tenant", "intersection", "plumbing"],
        correctAnswer: "piece",
        explanationEn: "'An undamaged piece' refers to a fresh, flawless item of clothing.",
        explanationHi: "कपड़े के नए टुकड़े के लिए 'piece' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "RETAIL_DISCOURSE"
      },
      {
        id: "day43_ex_051",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Our return policy requires items to be in original unused condition with tags attached.'",
        correctAnswer: "हमारी रिटर्न नीति के अनुसार वस्तुओं का अप्रयुक्त मूल स्थिति में होना और टैग लगा होना अनिवार्य है।",
        acceptableAnswers: [
          "हमारी वापसी नीति के तहत सामान बिना इस्तेमाल किया हुआ और टैग लगा होना चाहिए।"
        ],
        explanationEn: "'Original unused condition with tags attached' translates as अप्रयुक्त मूल स्थिति में टैग सहित.",
        explanationHi: "रिटर्न नीति का स्पष्ट अनुवाद।",
        difficulty: "hard",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day43_ex_052",
        type: "multiple_choice",
        prompt: "What is an 'extended warranty'?",
        options: [
          "Additional warranty coverage purchased beyond the standard manufacturer period",
          "A warranty that covers only the packaging box",
          "A free gift coupon",
          "A delayed delivery fee"
        ],
        correctAnswer: "Additional warranty coverage purchased beyond the standard manufacturer period",
        explanationEn: "An extended warranty offers continued protection after standard warranty expires.",
        explanationHi: "मूल वारंटी अवधि के बाद अतिरिक्त भुगतान करके ली जाने वाली वारंटी को 'extended warranty' कहते हैं।",
        difficulty: "medium",
        skillTag: "RETAIL_TERMS"
      },
      {
        id: "day43_ex_053",
        type: "error_correction",
        prompt: "Correct the sentence: 'She bought five clothings at the mall.'",
        correctAnswer: "She bought five items of clothing at the mall.",
        acceptableAnswers: [
          "She bought five pieces of clothing at the mall.",
          "She bought five garments at the mall."
        ],
        explanationEn: "'Clothing' is uncountable; say 'five items of clothing' or 'five garments'.",
        explanationHi: "'Clothing' अगणनीय है; 'five items of clothing' या 'five garments' बोलें।",
        difficulty: "medium",
        skillTag: "UNCOUNTABLE_NOUNS"
      },
      {
        id: "day43_ex_054",
        type: "active_recall",
        prompt: "What is the term for a card or coupon with monetary value given as a present?",
        correctAnswer: "Gift voucher",
        acceptableAnswers: ["gift card", "gift voucher", "voucher"],
        explanationEn: "'Gift voucher' or 'gift card'.",
        explanationHi: "उपहार में दिए जाने वाले कूपन या कार्ड को 'gift voucher / gift card' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day43_ex_055",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'क्या आप इस वस्तु को उपहार के रूप में पैक कर सकते हैं?'",
        correctAnswer: "Could you please gift-wrap this item?",
        acceptableAnswers: [
          "Can you gift-wrap this item, please?",
          "Would you be able to gift-wrap this for me?"
        ],
        explanationEn: "'Gift-wrap' is the natural verb for packing as a present.",
        explanationHi: "उपहार पैकिंग के लिए 'gift-wrap' क्रिया का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day43_dial_001",
        title: "Controlled In-Store Product Sizing & Availability Inquiry",
        context: "A customer asking a sales associate about clothing sizes and fitting rooms.",
        characters: ["Customer", "Sales Associate"],
        lines: [
          { speaker: "Customer", text: "Excuse me, I really like this jacket. Do you have it in a size medium?", hindi: "माफ कीजिए, मुझे यह जैकेट बहुत पसंद आई। क्या आपके पास यह मीडियम साइज में है?" },
          { speaker: "Sales Associate", text: "Let me check our inventory on the tablet for you... Yes, we have two pieces left in medium in the back stockroom.", hindi: "मैं आपके लिए टैबलेट पर हमारा स्टॉक देख लेता हूँ... हाँ, हमारे पास पीछे स्टोररूम में मीडियम साइज के दो पीस बचे हैं।" },
          { speaker: "Customer", text: "Could you fetch one for me? I'd like to try it on.", hindi: "क्या आप मेरे लिए एक ला सकते हैं? मैं इसे पहनकर देखना चाहूंगा।" },
          { speaker: "Sales Associate", text: "Certainly! The fitting rooms are located right down aisle four on your left.", hindi: "बिल्कुल! फिटिंग रूम आपकी बाईं ओर आइल नंबर चार के ठीक नीचे स्थित हैं।" },
          { speaker: "Customer", text: "Thank you so much. Is this jacket on sale today?", hindi: "बहुत-बहुत धन्यवाद। क्या आज इस जैकेट पर कोई सेल/छूट है?" },
          { speaker: "Sales Associate", text: "Yes, it is eligible for a twenty percent seasonal discount at checkout.", hindi: "हाँ, यह चेकआउट पर बीस प्रतिशत मौसमी छूट के लिए पात्र है।" }
        ]
      },
      {
        id: "day43_dial_002",
        title: "Guided Defective Item Return & Full Refund Processing",
        context: "A customer returning a faulty electronic kettle at the customer service desk.",
        characters: ["Customer", "Customer Service Desk Officer"],
        lines: [
          { speaker: "Customer", text: "Good morning. I would like to return this electric kettle. It stopped heating water after just three days.", hindi: "शुभ प्रभात। मैं यह इलेक्ट्रिक केतली वापस करना चाहता हूँ। इसने केवल तीन दिनों के बाद ही पानी गर्म करना बंद कर दिया।" },
          { speaker: "Customer Service Desk Officer", text: "Good morning! I am very sorry to hear that. Do you have the original purchase receipt with you?", hindi: "शुभ प्रभात! यह सुनकर मुझे बहुत खेद है। क्या आपके पास मूल खरीद रसीद है?" },
          { speaker: "Customer", text: "Yes, here is the printed receipt and the original box with all accessories.", hindi: "हाँ, यह रही प्रिंटेड रसीद और सभी सामानों सहित मूल बॉक्स।" },
          { speaker: "Customer Service Desk Officer", text: "Thank you. Since you purchased this within our fourteen-day return window, would you prefer a replacement unit or a full refund?", hindi: "धन्यवाद। चूंकि आपने इसे हमारी चौदह-दिवसीय वापसी अवधि के भीतर खरीदा है, क्या आप नया पीस लेना पसंद करेंगे या पूर्ण रिफंड?" },
          { speaker: "Customer", text: "I would prefer a full refund to my credit card, please.", hindi: "मैं अपने क्रेडिट कार्ड पर पूर्ण रिफंड लेना पसंद करूंगा।" },
          { speaker: "Customer Service Desk Officer", text: "Certainly. I have processed the refund. The funds will reflect in your account within three business days.", hindi: "बिल्कुल। मैंने रिफंड प्रोसेस कर दिया है। राशि तीन कार्य दिवसों के भीतर आपके खाते में दिखाई देगी।" }
        ]
      },
      {
        id: "day43_dial_003",
        title: "Free Problem-Resolution: Price Match & Warranty Clarification",
        context: "A shopper negotiating a price match on a high-end laptop with a store manager.",
        characters: ["Shopper", "Store Manager"],
        lines: [
          { speaker: "Shopper", text: "Hello! I am looking to purchase this ultrabook, but an authorized online competitor has it listed for ten thousand rupees less.", hindi: "नमस्ते! मैं इस अल्ट्राबुक को खरीदने की सोच रहा हूँ, लेकिन एक अधिकृत ऑनलाइन प्रतियोगी के पास यह दस हज़ार रुपये कम में उपलब्ध है।" },
          { speaker: "Store Manager", text: "Hello! We do have a price matching policy for authorized retailers. Could you show me the active online listing?", hindi: "नमस्ते! अधिकृत विक्रेताओं के लिए हमारी मूल्य मिलान (प्राइस मैच) नीति है। क्या आप मुझे वह सक्रिय ऑनलाइन लिस्टिंग दिखा सकते हैं?" },
          { speaker: "Shopper", text: "Here it is on my phone. Does your in-store purchase also include the three-year on-site warranty?", hindi: "यह रहा मेरे फोन पर। क्या आपकी इन-स्टोर खरीद में भी तीन साल की ऑन-साइट वारंटी शामिल है?" },
          { speaker: "Store Manager", text: "Yes, we will match the online price and provide our standard two-year manufacturer warranty plus a one-year complimentary store protection plan.", hindi: "हाँ, हम ऑनलाइन कीमत से मेल करेंगे और हमारी मानक दो साल की वारंटी के साथ एक साल का मानार्थ स्टोर सुरक्षा प्लान प्रदान करेंगे।" },
          { speaker: "Shopper", text: "That is an excellent deal. Let's proceed to the checkout counter.", hindi: "यह एक शानदार डील है। आइए चेकआउट काउंटर पर चलते हैं।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are returning a damaged or defective item to a department store customer service desk.",
      prompts: [
        "Explain what item you purchased and when you bought it.",
        "Describe the exact defect or damage (e.g., tear, faulty motor, missing cable).",
        "State whether you want an exchange, store credit, or a direct refund.",
        "Present your proof of purchase (receipt/invoice)."
      ],
      targetExpressions: [
        "I would like to return this...",
        "I noticed a defect where...",
        "Here is my original receipt...",
        "I would prefer a full refund to my card..."
      ]
    },
    roleplay: {
      scenario: "Retail negotiation between a customer wanting a discount on a floor display item and a store sales associate.",
      roleA: "Customer: Inquiring about minor scuffs, asking for a discount or extended warranty.",
      roleB: "Sales Associate: Explaining store policy, offering a 15% markdown or store voucher.",
      sampleDialogue: "Customer: 'Since this is a floor display piece with minor scratches, is the price negotiable?' | Associate: 'I can offer you a 15% markdown on this unit.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day43_bm_001",
        title: "Product Sizing & Availability Benchmark",
        prompt: "Inquire politely about product availability, asking for a different size/color, the location of fitting rooms, and applicable promotional discounts.",
        sampleAnswerEn: "Excuse me, I really like the cut of this linen shirt, but could you check if you have it in a size large or in navy blue? If you do, I would love to try it on in the fitting room. Additionally, could you tell me if this collection is eligible for the buy-one-get-one promotion advertised at the entrance?",
        sampleAnswerHi: "माफ कीजिए, मुझे इस लिनन शर्ट की कटिंग बहुत पसंद आई, लेकिन क्या आप देख सकते हैं कि क्या आपके पास यह लार्ज साइज में या नेवी ब्लू रंग में है? यदि है, तो मैं इसे फिटिंग रूम में पहनकर देखना चाहूँगा। इसके अलावा, क्या आप मुझे बता सकते हैं कि क्या यह कलेक्शन प्रवेश द्वार पर विज्ञापित एक-के-साथ-एक-मुफ्त ऑफर के लिए पात्र है?",
        evaluationCriteria: "Natural indirect questioning, retail collocations ('in a size large', 'eligible for promotion'), and polite conversational register."
      },
      {
        id: "day43_bm_002",
        title: "Defective Product Grievance & Refund Benchmark",
        prompt: "State a clear customer complaint regarding a defective electronic item, presenting receipt evidence and requesting a full refund.",
        sampleAnswerEn: "Good afternoon. I am here to return this wireless speaker which I purchased four days ago. Although it is brand new, the bluetooth connection drops continuously and the battery fails to hold a charge. I have brought the original tax invoice and packaging box. According to your return policy, I would like to request a full refund to my original payment method.",
        sampleAnswerHi: "शुभ दोपहर। मैं यह वायरलेस स्पीकर वापस करने आया हूँ जिसे मैंने चार दिन पहले खरीदा था। यद्यपि यह बिल्कुल नया है, ब्लूटूथ कनेक्शन लगातार कटता रहता है और बैटरी चार्ज नहीं रोक पाती है। मैं मूल टैक्स इनवॉइस और पैकेजिंग बॉक्स लाया हूँ। आपकी रिटर्न नीति के अनुसार, मैं अपनी मूल भुगतान विधि पर पूर्ण रिफंड का अनुरोध करना चाहूँगा।",
        evaluationCriteria: "Constructive assertiveness, precise technical defect descriptors, correct lexical terms ('tax invoice', 'original payment method'), and polite tone."
      },
      {
        id: "day43_bm_003",
        title: "Price Negotiation & Warranty Benchmark",
        prompt: "Politely negotiate a price match or discount on a floor model, while asking for clarification regarding warranty coverage and return conditions.",
        sampleAnswerEn: "Hello, I am interested in buying this display model refrigerator, but I noticed a minor cosmetic scratch on the side panel. Since it is a floor piece, is the price negotiable or can you offer a markdown? Furthermore, could you confirm whether the standard five-year compressor warranty remains fully intact despite the discount?",
        sampleAnswerHi: "नमस्ते, मैं इस डिस्प्ले मॉडल फ्रिज को खरीदने में रुचि रखता हूँ, लेकिन मैंने साइड पैनल पर एक मामूली खरोंच देखी है। चूंकि यह एक फ्लोर पीस है, क्या कीमत पर मोलभाव हो सकता है या क्या आप छूट दे सकते हैं? इसके अलावा, क्या आप पुष्टि कर सकते हैं कि छूट के बावजूद मानक पांच साल की कंप्रेसर वारंटी पूरी तरह से बरकरार रहेगी?",
        evaluationCriteria: "Professional negotiation vocabulary ('cosmetic scratch', 'floor piece', 'markdown', 'remains fully intact'), diplomatic tone, and grammatical accuracy."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "How do you pronounce 'Receipt'?", a: "Pronounce it /rɪˈsiːt/ with a completely silent 'p' ('re-seet')." },
      { q: "What should you say instead of '*Bhaiya, what is the last price?*'?", a: "Say 'Is the price negotiable?' or 'What is your best price on this item?'" },
      { q: "What is the difference between 'Exchange' and 'Refund'?", a: "'Exchange' means swapping for another item/size; 'Refund' means getting your money back." },
      { q: "What is an 'Aisle' in a supermarket?", a: "The corridor/walkway between rows of shelves (pronounced /aɪl/ with silent 's')." },
      { q: "Why is '*five clothings*' incorrect?", a: "Because 'clothing' is uncountable; say 'five items of clothing' or 'five garments'." }
    ],
    spacedTips: [
      "Whenever you go shopping, mentally practice asking for sizes and receipts in English: 'Do you have this in small? Could I have the receipt?'",
      "Pay attention to product packaging: notice terms like 'warranty', 'water-resistant', 'hypoallergenic', 'tamper-evident'.",
      "Remember the silent letters: silent 'p' in 'receipt', silent 's' in 'aisle'."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day43.js'), `export const day43 = ${JSON.stringify(day43, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Upgraded Day 43 (55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks)");
