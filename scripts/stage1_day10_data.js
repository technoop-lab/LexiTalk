// Stage 1 Day 10: 10 Distinct Long-Form Dialogues (Stage 1 Cumulative Synthesis & Review)
// Focus: Comprehensive integration of Greetings, Courtesy, Exclamations, Imperatives, Be Verbs, There is/are, and Has/Have

export const day10Dialogues = [
  {
    id: "d10_sc01",
    title: "Comprehensive Hotel Check-In, Room Tour, and Orientation",
    titleHi: "होटल में संपूर्ण चेक-इन, कमरे का मुआयना और शहर की जानकारी",
    context: "A tourist, Anand, checks into a luxury heritage hotel, receives keycard instructions, and gets city orientation.",
    situation: "Full real-world hospitality encounter synthesizing Days 1-9 concepts",
    characters: ["Front Desk Manager", "Anand"],
    turns: [
      { speaker: "Front Desk Manager", avatar: "🛎️", textEn: "Good evening, sir! Welcome to Grand Heritage Hotel. How may I assist you today?", textHi: "शुभ संध्या, सर! ग्रैंड हेरिटेज होटल में आपका स्वागत है। आज मैं आपकी क्या सहायता कर सकता हूँ?" },
      { speaker: "Anand", avatar: "🧳", textEn: "Good evening! I have a confirmed reservation for three nights under the name Anand Roy.", textHi: "शुभ संध्या! मेरे नाम आनंद रॉय से तीन रातों के लिए एक पक्की बुकिंग है।" },
      { speaker: "Front Desk Manager", avatar: "🛎️", textEn: "A warm welcome to you, Mr. Roy! May I please see your photo identification?", textHi: "श्रीमान रॉय, आपका हार्दिक स्वागत है! क्या मैं कृपया आपका फ़ोटो पहचान पत्र देख सकता हूँ?" },
      { speaker: "Anand", avatar: "🧳", textEn: "Certainly! Here is my passport and booking confirmation voucher.", textHi: "निश्चित रूप से! यह रहा मेरा पासपोर्ट और बुकिंग कन्फर्मेशन वाउचर।" },
      { speaker: "Front Desk Manager", avatar: "🛎️", textEn: "Thank you very much. Your executive sea-facing suite is ready on the fifth floor, room 512.", textHi: "बहुत-बहुत धन्यवाद। पांचवीं मंज़िल पर कमरा नंबर 512 में आपका सी-फ़ेसिंग एक्ज़ीक्यूटिव सुइट तैयार है।" },
      { speaker: "Anand", avatar: "🧳", textEn: "Wow, that is wonderful! Is there high-speed Wi-Fi in the suite?", textHi: "वाह, यह तो बहुत अच्छी बात है! क्या सुइट में हाई-स्पीड वाई-फ़ाई उपलब्ध है?" },
      { speaker: "Front Desk Manager", avatar: "🛎️", textEn: "Yes, there is complimentary high-speed fiber internet in all rooms.", textHi: "जी हाँ, सभी कमरों में मुफ़्त हाई-स्पीड फ़ाइबर इंटरनेट उपलब्ध है।" },
      { speaker: "Anand", avatar: "🧳", textEn: "Pardon me, does the suite have a mini-refrigerator and an electric kettle?", textHi: "क्षमा करें, क्या सुइट में एक मिनी-फ़्रिज और इलेक्ट्रिक केतली है?" },
      { speaker: "Front Desk Manager", avatar: "🛎️", textEn: "Yes, it has a stocked mini-bar, a digital safe, and an espresso machine.", textHi: "जी हाँ, इसमें सामान से भरा मिनी-बार, डिजिटल तिजोरी और एक एस्प्रेसो मशीन है।" },
      { speaker: "Anand", avatar: "🧳", textEn: "Listen, I was on a flight for six hours, so I am quite exhausted and hungry right now.", textHi: "सुनिए, मैं छह घंटे की उड़ान पर था, इसलिए अभी काफ़ी थका हुआ और भूखा हूँ।" },
      { speaker: "Front Desk Manager", avatar: "🛎️", textEn: "Don't worry, sir! Our rooftop restaurant is open until 11:30 PM, and there is 24-hour room service.", textHi: "चिंता मत कीजिए, सर! हमारा रूफ़टॉप रेस्तरां रात 11:30 बजे तक खुला है, और 24 घंटे रूम सर्विस उपलब्ध है।" },
      { speaker: "Anand", avatar: "🧳", textEn: "What a relief! Please send the dinner menu to room 512.", textHi: "कितनी बड़ी राहत मिली! कृपया डिनर का मेन्यू कमरा 512 में भिजवा दीजिए।" },
      { speaker: "Front Desk Manager", avatar: "🛎️", textEn: "Our bellhop, Mohan, will carry your luggage. Please follow him to the elevator.", textHi: "हमारे सहायक मोहन आपका सामान ले चलेंगे। कृपया लिफ़्ट तक उनके पीछे आइए।" },
      { speaker: "Anand", avatar: "🧳", textEn: "Thank you for your courteous and swift assistance.", textHi: "आपकी विनम्र और त्वरित सहायता के लिए धन्यवाद।" },
      { speaker: "Front Desk Manager", avatar: "🛎️", textEn: "It is our absolute pleasure, Mr. Roy. Have a restful night and enjoy your stay!", textHi: "यह तो हमारा सौभाग्य है, श्रीमान रॉय। आपकी रात आरामदायक रहे और आपका प्रवास आनंदमय हो!" }
    ]
  },
  {
    id: "d10_sc02",
    title: "Welcoming a Corporate Client and Conducting an Office Tour",
    titleHi: "कॉर्पोरेट क्लाइंट का स्वागत और कार्यालय का विस्तृत भ्रमण",
    context: "Client relationship manager Meera welcomes an executive client, Mr. Henderson, for a strategic partnership visit.",
    situation: "Full corporate hospitality and orientation synthesis",
    characters: ["Meera", "Mr. Henderson"],
    turns: [
      { speaker: "Meera", avatar: "👩‍💼", textEn: "Good morning, Mr. Henderson! Welcome to our global development center.", textHi: "शुभ प्रभात, मिस्टर हेंडरसन! हमारे वैश्विक विकास केंद्र में आपका स्वागत है।" },
      { speaker: "Mr. Henderson", avatar: "💼", textEn: "Good morning, Meera! Pleased to meet you in person. The campus architecture is stunning!", textHi: "शुभ प्रभात, मीरा! आपसे व्यक्तिगत रूप से मिलकर खुशी हुई। कैंपस का निर्माण सचमुच शानदार है!" },
      { speaker: "Meera", avatar: "👩‍💼", textEn: "Thank you very much, sir! Please come this way into our briefing pavilion.", textHi: "बहुत-बहुत धन्यवाद, सर! कृपया हमारे ब्रीफिंग पैवेलियन की ओर इस तरफ़ आइए।" },
      { speaker: "Mr. Henderson", avatar: "💼", textEn: "How many research and development engineers are there in this facility?", textHi: "इस केंद्र में कुल कितने अनुसंधान एवं विकास इंजीनियर कार्यरत हैं?" },
      { speaker: "Meera", avatar: "👩‍💼", textEn: "There are over four hundred software engineers and data scientists here.", textHi: "यहाँ चार सौ से अधिक सॉफ़्टवेयर इंजीनियर और डेटा वैज्ञानिक मौजूद हैं।" },
      { speaker: "Mr. Henderson", avatar: "💼", textEn: "Do you have dedicated teams for cloud security and machine learning infrastructure?", textHi: "क्या आपके पास क्लाउड सुरक्षा और मशीन लर्निंग के लिए समर्पित टीमें हैं?" },
      { speaker: "Meera", avatar: "👩‍💼", textEn: "Yes, we have specialized units for both domains. Look at this state-of-the-art innovation lab.", textHi: "हाँ, हमारे पास दोनों क्षेत्रों के लिए विशेषज्ञ इकाइयाँ हैं। इस अत्याधुनिक इनोवेशन लैब को देखिए।" },
      { speaker: "Mr. Henderson", avatar: "💼", textEn: "Wow, this collaborative workspace is remarkably well-designed!", textHi: "वाह, यह सहयोगी कार्यक्षेत्र वास्तव में बेहद शानदार ढंग से तैयार किया गया है!" },
      { speaker: "Meera", avatar: "👩‍💼", textEn: "Please take a seat in Conference Room Alpha. Our chief architect will be joining us shortly.", textHi: "कृपया कॉन्फ्रेंस रूम अल्फा में बैठिए। हमारे मुख्य आर्किटेक्ट थोड़ी देर में हमारे साथ जुड़ेंगे।" },
      { speaker: "Mr. Henderson", avatar: "💼", textEn: "Would it be possible to get a hot cup of black coffee, please?", textHi: "क्या मुझे एक कप गर्म ब्लैक कॉफ़ी मिल सकती है, कृपया?" },
      { speaker: "Meera", avatar: "👩‍💼", textEn: "Certainly! It will be served in just two minutes. Please make yourself comfortable.", textHi: "निश्चित रूप से! यह केवल दो मिनट में परोस दी जाएगी। कृपया आराम से बैठिए।" },
      { speaker: "Mr. Henderson", avatar: "💼", textEn: "Thank you for the warm hospitality, Meera.", textHi: "इस गर्मजोशी भरे आतिथ्य के लिए धन्यवाद, मीरा।" }
    ]
  },
  {
    id: "d10_sc03",
    title: "Hosting a Housewarming Dinner and Introducing Guests",
    titleHi: "गृह प्रवेश के रात्रिभोज की मेज़बानी और मेहमानों का परिचय",
    context: "Host Deepak introduces his university friend Vikram to his childhood friend Gaurav at a dinner party.",
    situation: "Social gathering, introductions, courtesy, and synthesis",
    characters: ["Deepak", "Vikram", "Gaurav"],
    turns: [
      { speaker: "Deepak", avatar: "🏡", textEn: "Good evening, Vikram! Welcome to our new home! Please come in.", textHi: "शुभ संध्या, विक्रम! हमारे नए घर में स्वागत है! कृपया अंदर आइए।" },
      { speaker: "Vikram", avatar: "💐", textEn: "Good evening, Deepak! Congratulations on this magnificent new house! These flowers are for you.", textHi: "शुभ संध्या, दीपक! इस शानदार नए घर के लिए बहुत-बहुत बधाई! ये फूल आपके लिए हैं।" },
      { speaker: "Deepak", avatar: "🏡", textEn: "Thank you so much! They are gorgeous. Let me introduce you to Gaurav.", textHi: "बहुत-बहुत धन्यवाद! ये बहुत खूबसूरत हैं। मैं तुम्हारा गौरव से परिचय कराता हूँ।" },
      { speaker: "Vikram", avatar: "💐", textEn: "Hello Gaurav, nice to meet you!", textHi: "नमस्ते गौरव, आपसे मिलकर अच्छा लगा!" },
      { speaker: "Gaurav", avatar: "🤝", textEn: "Pleased to meet you too, Vikram! Deepak was telling me about your architectural startup.", textHi: "आपसे मिलकर भी बहुत खुशी हुई, विक्रम! दीपक मुझे आपके आर्किटेक्चर स्टार्टअप के बारे में बता रहा था।" },
      { speaker: "Vikram", avatar: "💐", textEn: "Yes, we have an urban design studio in Gurgaon. We were working on eco-friendly homes last year.", textHi: "हाँ, गुड़गांव में हमारा अर्बन डिज़ाइन स्टूडियो है। पिछले साल हम पर्यावरण-अनुकूल घरों पर काम कर रहे थे।" },
      { speaker: "Deepak", avatar: "🏡", textEn: "Please have some appetizers. There are hot paneer tikkas and vegetable kebabs on that platter.", textHi: "कृपया कुछ स्टार्टर्स लीजिए। उस थाल में गरमा-गरम पनीर टिक्का और वेज कबाब रखे हैं।" },
      { speaker: "Vikram", avatar: "💐", textEn: "Wow, they look mouthwatering! Thank you, Deepak.", textHi: "वाह, ये देखने में बहुत स्वादिष्ट लग रहे हैं! धन्यवाद, दीपक।" },
      { speaker: "Gaurav", avatar: "🤝", textEn: "Is there a rooftop terrace attached to this flat?", textHi: "क्या इस फ्लैट के साथ कोई रूफ़टॉप छत भी जुड़ी हुई है?" },
      { speaker: "Deepak", avatar: "🏡", textEn: "Yes, there is a lovely garden terrace upstairs. We will go up for dessert later!", textHi: "हाँ, ऊपर एक सुंदर टेरेस गार्डन है। हम बाद में मीठा खाने ऊपर चलेंगे!" },
      { speaker: "Vikram", avatar: "💐", textEn: "That sounds wonderful! You have created a truly cozy haven here.", textHi: "यह तो बहुत शानदार रहेगा! आपने यहाँ सचमुच एक बहुत ही सुकून भरा घर बनाया है।" }
    ]
  },
  {
    id: "d10_sc04",
    title: "Inquiring About Missing Luggage at Airport Customer Service",
    titleHi: "हवाई अड्डे पर खोए हुए सामान की रिपोर्ट और पूछताछ",
    context: "A distressed traveler, Swati, reports a missing suitcase to airline luggage officer Mr. Khan.",
    situation: "Problem resolution, polite inquiries, past and present synthesis",
    characters: ["Swati", "Mr. Khan"],
    turns: [
      { speaker: "Swati", avatar: "😰", textEn: "Excuse me, sir! I was on flight AI-402 from London, but my main luggage hasn't arrived on belt 4.", textHi: "माफ़ कीजिएगा सर! मैं लंदन से उड़ान AI-402 में थी, लेकिन बेल्ट 4 पर मेरा मुख्य सामान नहीं आया है।" },
      { speaker: "Mr. Khan", avatar: "👮", textEn: "Good evening, ma'am. Don't worry, please take a seat while I assist you.", textHi: "शुभ संध्या, मैम। चिंता मत कीजिए, जब तक मैं आपकी सहायता करता हूँ तब तक कृपया बैठिए।" },
      { speaker: "Swati", avatar: "😰", textEn: "Thank you. I have my baggage claim tags pasted on the back of my boarding pass.", textHi: "धन्यवाद। मेरे बोर्डिंग पास के पीछे सामान के क्लेम टैग चिपके हुए हैं।" },
      { speaker: "Mr. Khan", avatar: "👮", textEn: "May I please see your tag numbers? Let me scan them into the global baggage tracking network.", textHi: "क्या मैं कृपया आपके टैग नंबर देख सकता हूँ? मुझे उन्हें ग्लोबल बैगेज ट्रैकिंग सिस्टम में स्कैन करने दीजिए।" },
      { speaker: "Swati", avatar: "😰", textEn: "Here you go. The suitcase is a large navy blue Samsonite trolley with four wheels.", textHi: "यह लीजिए। सूटकेस चार पहियों वाला एक बड़ा नेवी ब्लू रंग का सैमसोनाइट ट्रॉली बैग है।" },
      { speaker: "Mr. Khan", avatar: "👮", textEn: "Does it have any personalized identification tag or strap attached to the handle?", textHi: "क्या इसके हैंडल पर कोई पहचान का टैग या स्ट्रैप बंधा हुआ है?" },
      { speaker: "Swati", avatar: "😰", textEn: "Yes, it has a bright yellow leather tag with my name, Swati Sen, clearly engraved.", textHi: "हाँ, उस पर एक चमकीला पीला चमड़े का टैग लगा है जिस पर मेरा नाम स्वाति सेन साफ़ लिखा है।" },
      { speaker: "Mr. Khan", avatar: "👮", textEn: "I found the record! Your bag was mistakenly left on the transfer trolley in Dubai.", textHi: "मुझे रिकॉर्ड मिल गया! आपका बैग दुबई में ट्रांसफर ट्रॉली पर अनजाने में छूट गया था।" },
      { speaker: "Swati", avatar: "😰", textEn: "Oh no! When will it be delivered to my residence?", textHi: "अरे नहीं! यह मेरे घर पर कब तक पहुँचाया जाएगा?" },
      { speaker: "Mr. Khan", avatar: "👮", textEn: "It will be placed on the next direct flight tonight and will be delivered to your doorstep by 10 AM tomorrow.", textHi: "इसे आज रात अगली सीधी उड़ान में भेजा जाएगा और कल सुबह 10 बजे तक आपके घर पहुँचा दिया जाएगा।" },
      { speaker: "Swati", avatar: "😌", textEn: "What a relief! Thank you for tracking it down so efficiently.", textHi: "कितनी बड़ी राहत मिली! इसे इतनी कुशलता से ढूँढने के लिए आपका धन्यवाद।" },
      { speaker: "Mr. Khan", avatar: "👮", textEn: "It is our duty, ma'am. Here is your reference tracking slip. Have a restful evening!", textHi: "यह हमारा कर्तव्य है, मैम। यह रही आपकी ट्रैकिंग पर्ची। आपकी शाम सुकून भरी रहे!" }
    ]
  },
  {
    id: "d10_sc05",
    title: "Registering for a Premium Fitness Club and Tour of Facilities",
    titleHi: "प्रीमियम फ़िटनेस क्लब में पंजीकरण और सुविधाओं का अवलोकन",
    context: "A new member, Rahul, enrolls at an athletic club and receives a tour from fitness director Sunita.",
    situation: "Enrollment, facility overview, and polite imperatives",
    characters: ["Sunita", "Rahul"],
    turns: [
      { speaker: "Sunita", avatar: "🏋️‍♀️", textEn: "Good morning! Welcome to Velocity Fitness Club. Are you looking to enroll today?", textHi: "शुभ प्रभात! वेलोसिटी फ़िटनेस क्लब में आपका स्वागत है। क्या आप आज सदस्यता लेने के इच्छुक हैं?" },
      { speaker: "Rahul", avatar: "🏃‍♂️", textEn: "Good morning! Yes, I am interested in an annual gym and swimming membership.", textHi: "शुभ प्रभात! जी हाँ, मैं वार्षिक जिम और स्विमिंग सदस्यता में रुचि रखता हूँ।" },
      { speaker: "Sunita", avatar: "🏋️‍♀️", textEn: "Wonderful! Please fill out this brief health registration form right here.", textHi: "बहुत बढ़िया! कृपया यहाँ यह संक्षिप्त स्वास्थ्य पंजीकरण फ़ॉर्म भर दीजिए।" },
      { speaker: "Rahul", avatar: "🏃‍♂️", textEn: "Do you have certified personal trainers on the floor in the morning hours?", textHi: "क्या सुबह के समय फ़्लोर पर प्रमाणित पर्सनल ट्रेनर उपस्थित रहते हैं?" },
      { speaker: "Sunita", avatar: "🏋️‍♀️", textEn: "Yes, there are four certified strength coaches available from 6 AM to 10 PM daily.", textHi: "जी हाँ, रोज़ाना सुबह 6 से रात 10 बजे तक चार सर्टिफ़ाइड स्ट्रेंथ कोच उपलब्ध रहते हैं।" },
      { speaker: "Rahul", avatar: "🏃‍♂️", textEn: "Follow me to our cardiovascular training deck on the second floor.", textHi: "मेरे साथ दूसरी मंज़िल पर कार्डियोवस्कुलर ट्रेनिंग डेक की ओर आइए।" },
      { speaker: "Rahul", avatar: "🏃‍♂️", textEn: "Look at all these modern running treadmills and rowing machines! They are brand new.", textHi: "इन सभी आधुनिक रनिंग ट्रेडमिल और रोइंग मशीनों को देखिए! ये बिल्कुल नई हैं।" },
      { speaker: "Sunita", avatar: "🏋️‍♀️", textEn: "Yes, they were installed just two weeks ago. Each unit has an interactive digital display.", textHi: "हाँ, इन्हें दो हफ़्ते पहले ही लगाया गया था। प्रत्येक मशीन में इंटरैक्टिव डिजिटल स्क्रीन है।" },
      { speaker: "Rahul", avatar: "🏃‍♂️", textEn: "Is there a steam sauna and hot Jacuzzi inside the locker room?", textHi: "क्या लॉकर रूम के अंदर स्टीम सौना और गर्म जकूज़ी है?" },
      { speaker: "Sunita", avatar: "🏋️‍♀️", textEn: "Yes, there is a full hydrotherapy suite and there are individual digital lockers.", textHi: "जी हाँ, वहाँ हाइड्रोथेरेपी सुइट और व्यक्तिगत डिजिटल लॉकर की पूरी सुविधा है।" },
      { speaker: "Rahul", avatar: "🏃‍♂️", textEn: "This facility has everything I need for my fitness transformation. I am signing up now!", textHi: "इस केंद्र में मेरी फ़िटनेस के लिए ज़रूरी हर सुविधा है। मैं अभी पंजीकरण करवाता हूँ!" }
    ]
  },
  {
    id: "d10_sc06",
    title: "Resolving an Incorrect Restaurant Bill with Courtesy and Efficiency",
    titleHi: "रेस्तरां के बिल में विसंगति का विनम्रता से समाधान",
    context: "A diner, Manish, politely points out an extra item on the restaurant invoice to the floor manager.",
    situation: "Polite dispute resolution, courtesy phrases, and numbers",
    characters: ["Manish", "Floor Manager"],
    turns: [
      { speaker: "Manish", avatar: "🍽️", textEn: "Excuse me, sir. Could you please review this invoice with me for a moment?", textHi: "माफ़ कीजिएगा, सर। क्या आप कृपया मेरे साथ इस बिल की एक मिनट जाँच कर सकते हैं?" },
      { speaker: "Floor Manager", avatar: "🤵", textEn: "Good evening, sir. Certainly! Is there an issue with your bill?", textHi: "शुभ संध्या, सर। निश्चित रूप से! क्या आपके बिल में कोई समस्या है?" },
      { speaker: "Manish", avatar: "🍽️", textEn: "Pardon me, but there is an extra charge for two fruit mocktails that we didn't order.", textHi: "क्षमा करें, लेकिन इसमें दो फ्रूट मॉकटेल का अतिरिक्त शुल्क जुड़ा है जो हमने ऑर्डर नहीं किया था।" },
      { speaker: "Floor Manager", avatar: "🤵", textEn: "Oh, I apologize sincerely for the oversight! Let me verify table 14's order ticket on our system.", textHi: "ओह, इस भूल के लिए मैं दिल से माफ़ी चाहता हूँ! मुझे कंप्यूटर में टेबल 14 का ऑर्डर टिकट देखने दीजिए।" },
      { speaker: "Manish", avatar: "🍽️", textEn: "We had one jug of fresh lime soda and four main course dishes.", textHi: "हमने एक जग ताज़ा लाइम सोडा और चार मुख्य व्यंजन लिए थे।" },
      { speaker: "Floor Manager", avatar: "🤵", textEn: "You are absolutely right. The beverage waiter mistakenly merged an order from table 15.", textHi: "आप बिल्कुल सही कह रहे हैं। वेटर ने ग़लती से टेबल 15 का ऑर्डर इसमें जोड़ दिया था।" },
      { speaker: "Manish", avatar: "🍽️", textEn: "I understand; these mix-ups can happen during peak dinner hours.", textHi: "मैं समझ सकता हूँ; डिनर के व्यस्त समय में ऐसी ग़लतियाँ हो सकती हैं।" },
      { speaker: "Floor Manager", avatar: "🤵", textEn: "Thank you for your gracious understanding. Here is your revised bill with the corrected total.", textHi: "आपकी समझदारी के लिए धन्यवाद। यह रहा सही राशि के साथ आपका संशोधित बिल।" },
      { speaker: "Manish", avatar: "🍽️", textEn: "The food this evening was outstanding, especially the smoked dal makhani.", textHi: "आज शाम का खाना लाजवाब था, ख़ासकर स्मोक्ड दाल मखनी बहुत स्वादिष्ट थी।" },
      { speaker: "Floor Manager", avatar: "🤵", textEn: "We are thrilled you enjoyed your dinner! Please accept these complimentary dessert pastries with our compliments.", textHi: "हमें खुशी है कि आपको खाना पसंद आया! कृपया हमारी ओर से यह मुफ़्त पेस्ट्री स्वीकार करें।" },
      { speaker: "Manish", avatar: "🍽️", textEn: "That is very generous of you. Thank you for your exceptional customer service!", textHi: "यह आपका बहुत बड़प्पन है। आपकी बेहतरीन ग्राहक सेवा के लिए धन्यवाद!" }
    ]
  },
  {
    id: "d10_sc07",
    title: "Planning a Weekend Road Trip with Friends (Gear, Vehicle, Route)",
    titleHi: "दोस्तों के साथ वीकेंड रोड ट्रिप की पूरी योजना",
    context: "Three friends, Kunal, Sameer, and Divya, coordinate vehicle maintenance, luggage, and route for a trip to the hills.",
    situation: "Logistics planning, vehicle readiness, and synthesis",
    characters: ["Kunal", "Sameer", "Divya"],
    turns: [
      { speaker: "Kunal", avatar: "🗺️", textEn: "Listen carefully, team! We will be departing at five o'clock tomorrow morning.", textHi: "ध्यान से सुनो सब लोग! हम कल सुबह ठीक पाँच बजे रवाना होंगे।" },
      { speaker: "Sameer", avatar: "🚗", textEn: "The car was serviced yesterday. It has new brake pads and full tire pressure.", textHi: "गाड़ी की कल सर्विस हो गई थी। इसमें नए ब्रेक पैड हैं और टायरों में पूरी हवा है।" },
      { speaker: "Divya", avatar: "🎒", textEn: "Do we have a reliable physical road map, or will GPS navigation be sufficient?", textHi: "क्या हमारे पास कोई पेपर मैप है, या जीपीएस नेविगेशन काफ़ी रहेगा?" },
      { speaker: "Kunal", avatar: "🗺️", textEn: "I downloaded offline satellite maps on my phone in case there is no cell reception in the mountains.", textHi: "मैंने फ़ोन में ऑफ़लाइन मैप्स डाउनलोड कर लिए हैं यदि पहाड़ों में मोबाइल नेटवर्क न हो।" },
      { speaker: "Sameer", avatar: "🚗", textEn: "How many bags do we have in total for the trunk?", textHi: "डिग्गी के लिए हमारे पास कुल कितने बैग हैं?" },
      { speaker: "Divya", avatar: "🎒", textEn: "There are three medium duffel bags and one picnic cooler for cold drinks.", textHi: "तीन मीडियम डफ़ल बैग हैं और ठंडे पेय पदार्थों के लिए एक पिकनिक कूलर है।" },
      { speaker: "Kunal", avatar: "🗺️", textEn: "Is there a first-aid kit inside the glove compartment?", textHi: "क्या ग्लव कंपार्टमेंट के अंदर फ़र्स्ट-एड किट मौजूद है?" },
      { speaker: "Sameer", avatar: "🚗", textEn: "Yes, there are bandages, antiseptic ointment, and motion sickness tablets inside.", textHi: "हाँ, अंदर पट्टियाँ, एंटीसेप्टिक क्रीम और सफ़र में उल्टी रोकने वाली दवाइयाँ हैं।" },
      { speaker: "Divya", avatar: "🎒", textEn: "Wow, we are completely prepared for an epic weekend adventure!", textHi: "वाह, हम एक शानदार वीकेंड रोमांच के लिए पूरी तरह से तैयार हैं!" },
      { speaker: "Kunal", avatar: "🗺️", textEn: "Get plenty of sleep tonight, everyone. Tomorrow will be a thrilling journey!", textHi: "आज रात सब लोग अच्छी नींद लो। कल का सफ़र बेहद रोमांचक होगा!" }
    ]
  },
  {
    id: "d10_sc08",
    title: "Complete Medical Clinic Consultation and Prescription Advice",
    titleHi: "क्लिनिक में डॉक्टर से परामर्श, स्वास्थ्य जाँच और दवा की सलाह",
    context: "Patient Ritu visits Dr. Joshi for persistent fatigue and receives a thorough diagnostic review.",
    situation: "Complete medical dialogue synthesizing symptoms, history, and advice",
    characters: ["Dr. Joshi", "Ritu"],
    turns: [
      { speaker: "Dr. Joshi", avatar: "🩺", textEn: "Good afternoon, Ritu. Please come in and take a seat. How are you feeling?", textHi: "शुभ दोपहर, रितु। कृपया अंदर आइए और बैठिए। आप कैसा महसूस कर रही हैं?" },
      { speaker: "Ritu", avatar: "👩", textEn: "Good afternoon, doctor. I am experiencing persistent low energy and dizziness when I stand up quickly.", textHi: "शुभ दोपहर, डॉक्टर साहब। मुझे लगातार कमज़ोरी महसूस हो रही है और जल्दी उठने पर चक्कर आते हैं।" },
      { speaker: "Dr. Joshi", avatar: "🩺", textEn: "How long have you had these symptoms?", textHi: "आपको ये लक्षण कब से महसूस हो रहे हैं?" },
      { speaker: "Ritu", avatar: "👩", textEn: "I had mild fatigue last month, but this week it is much more severe.", textHi: "पिछले महीने हल्की थकान थी, लेकिन इस हफ़्ते यह बहुत अधिक बढ़ गई है।" },
      { speaker: "Dr. Joshi", avatar: "🩺", textEn: "Let me check your blood pressure and eye conjunctiva.", textHi: "मुझे आपका ब्लड प्रेशर और आँखें देखने दीजिए।" },
      { speaker: "Ritu", avatar: "👩", textEn: "Is my blood pressure reading low, doctor?", textHi: "क्या मेरा ब्लड प्रेशर कम आ रहा है, डॉक्टर साहब?" },
      { speaker: "Dr. Joshi", avatar: "🩺", textEn: "Your blood pressure is 100 over 65, which is slightly low. Your nail beds also look pale.", textHi: "आपका ब्लड प्रेशर 100/65 है, जो थोड़ा कम है। आपके नाखून भी हल्के पीले दिख रहे हैं।" },
      { speaker: "Ritu", avatar: "👩", textEn: "Could this be iron-deficiency anemia?", textHi: "क्या यह आयरन की कमी से होने वाला एनीमिया हो सकता है?" },
      { speaker: "Dr. Joshi", avatar: "🩺", textEn: "Yes, that is very likely. Here is a prescription for a complete blood count and serum ferritin test.", textHi: "हाँ, इसकी पूरी संभावना है। यह सीबीसी और सीरम फ़ेरिटिन टेस्ट का पर्चा है।" },
      { speaker: "Ritu", avatar: "👩", textEn: "Listen carefully to my dietary advice: eat plenty of green leafy vegetables, dates, and pomegranate.", textHi: "मेरी खान-पान की सलाह ध्यान से सुनिए: हरी पत्तेदार सब्जियाँ, खजूर और अनार भरपूर मात्रा में खाइए।" },
      { speaker: "Dr. Joshi", avatar: "🩺", textEn: "Take one iron supplement capsule every night after dinner with a glass of orange juice.", textHi: "रोज़ रात को खाने के बाद संतरे के जूस के साथ एक आयरन सप्लीमेंट कैप्सूल लें।" },
      { speaker: "Ritu", avatar: "👩", textEn: "Thank you so much for your thorough examination and caring advice, doctor.", textHi: "आपकी गहन जाँच और स्नेही सलाह के लिए बहुत-बहुत धन्यवाद, डॉक्टर साहब।" },
      { speaker: "Dr. Joshi", avatar: "🩺", textEn: "You are welcome. You will be feeling energetic and healthy very soon!", textHi: "आपका स्वागत है। आप बहुत जल्द ऊर्जावान और स्वस्थ महसूस करेंगी!" }
    ]
  },
  {
    id: "d10_sc09",
    title: "Job Interview: Greeting, Self-Introduction, Background, and Questions",
    titleHi: "नौकरी का साक्षात्कार: अभिवादन, परिचय, अनुभव और प्रश्न-उत्तर",
    context: "A candidate, Priya, interviews with the hiring manager, Mr. Alok, for a senior product designer role.",
    situation: "Formal job interview synthesizing greetings, background, and questions",
    characters: ["Mr. Alok", "Priya"],
    turns: [
      { speaker: "Mr. Alok", avatar: "👔", textEn: "Good morning, Priya! Please come in, take a seat, and make yourself comfortable.", textHi: "शुभ प्रभात, प्रिया! कृपया अंदर आइए, बैठिए और सहज महसूस कीजिए।" },
      { speaker: "Priya", avatar: "👩‍💼", textEn: "Good morning, Mr. Alok. Thank you very much for this opportunity.", textHi: "शुभ प्रभात, मिस्टर आलोक। इस अवसर के लिए आपका बहुत-बहुत धन्यवाद।" },
      { speaker: "Mr. Alok", avatar: "👔", textEn: "Tell us about yourself and your professional journey in digital design.", textHi: "हमें अपने बारे में और डिजिटल डिज़ाइन में अपनी पेशेवर यात्रा के बारे में बताइए।" },
      { speaker: "Priya", avatar: "👩‍💼", textEn: "I am a product designer with five years of experience designing mobile fintech applications.", textHi: "मैं एक प्रोडक्ट डिज़ाइनर हूँ जिसके पास मोबाइल फ़िनटेक ऐप डिज़ाइन करने का पाँच साल का अनुभव है।" },
      { speaker: "Mr. Alok", avatar: "👔", textEn: "What was your most challenging project at your previous company?", textHi: "आपकी पिछली कंपनी में आपका सबसे चुनौतीपूर्ण प्रोजेक्ट कौन सा था?" },
      { speaker: "Priya", avatar: "👩‍💼", textEn: "Last year, our team was redesigning the core checkout flow to increase conversion rates.", textHi: "पिछले साल, हमारी टीम कन्वर्ज़न रेट बढ़ाने के लिए मुख्य चेकआउट प्रक्रिया को नया रूप दे रही थी।" },
      { speaker: "Mr. Alok", avatar: "👔", textEn: "Were there measurable business improvements after the redesign?", textHi: "क्या रीडिज़ाइन के बाद व्यापार में मापने योग्य सुधार हुए?" },
      { speaker: "Priya", avatar: "👩‍💼", textEn: "Yes, there was a forty percent reduction in cart drop-offs, and user satisfaction scores were high.", textHi: "हाँ, कार्ट छोड़ने की दर में चालीस प्रतिशत की कमी आई और उपयोगकर्ता संतुष्टि स्कोर बहुत ऊँचा रहा।" },
      { speaker: "Mr. Alok", avatar: "👔", textEn: "That is impressive! Do you have experience managing cross-functional design sprints?", textHi: "यह तो बहुत प्रभावशाली है! क्या आपके पास विभिन्न टीमों के साथ डिज़ाइन स्प्रिंट चलाने का अनुभव है?" },
      { speaker: "Priya", avatar: "👩‍💼", textEn: "Yes, I have led multiple user research workshops with engineering and marketing stakeholders.", textHi: "हाँ, मैंने इंजीनियरिंग और मार्केटिंग सहयोगियों के साथ कई यूज़र रिसर्च वर्कशॉप का नेतृत्व किया है।" },
      { speaker: "Mr. Alok", avatar: "👔", textEn: "Do you have any questions for us regarding the role or our engineering culture?", textHi: "क्या पद या हमारी कार्य संस्कृति के बारे में आपका हमारे लिए कोई प्रश्न है?" },
      { speaker: "Priya", avatar: "👩‍💼", textEn: "What will be the primary design priorities for this division over the next twelve months?", textHi: "अगले बारह महीनों में इस प्रभाग के लिए मुख्य डिज़ाइन प्राथमिकताएं क्या होंगी?" },
      { speaker: "Mr. Alok", avatar: "👔", textEn: "We will be expanding our enterprise platform into global Asian markets.", textHi: "हम अपने एंटरप्राइज़ प्लेटफ़ॉर्म का विस्तार एशियाई बाज़ारों में करेंगे।" },
      { speaker: "Priya", avatar: "👩‍💼", textEn: "That sounds like an inspiring challenge! Thank you for your time, Mr. Alok.", textHi: "यह एक बहुत ही प्रेरक चुनौती लगती है! आपके समय के लिए धन्यवाद, मिस्टर आलोक।" },
      { speaker: "Mr. Alok", avatar: "👔", textEn: "Thank you, Priya. Our HR team will be in touch with you by Friday. Have a great day!", textHi: "धन्यवाद, प्रिया। हमारी एचआर टीम शुक्रवार तक आपसे संपर्क करेगी। आपका दिन शुभ रहे!" }
    ]
  },
  {
    id: "d10_sc09_2",
    title: "Housewarming Celebration and Comprehensive Home Walkthrough",
    titleHi: "नए घर का संपूर्ण अवलोकन और पारिवारिक उत्सव संवाद",
    context: "Sanjay and Neha show their newly purchased bungalow to their relatives, Uncle and Aunty.",
    situation: "Home walkthrough synthesizing demonstratives, descriptions, and courtesy",
    characters: ["Sanjay", "Neha", "Uncle", "Aunty"],
    turns: [
      { speaker: "Uncle", avatar: "👴", textEn: "Namaste Sanjay and Neha! Congratulations on this magnificent new home!", textHi: "नमस्ते संजय और नेहा! इस भव्य नए घर के लिए आप दोनों को बहुत-बहुत बधाई!" },
      { speaker: "Neha", avatar: "👩", textEn: "Namaste Uncle and Aunty! Welcome! Please come inside and take your shoes off here.", textHi: "नमस्ते अंकल और आंटी! स्वागत है! कृपया अंदर आइए और यहाँ जूते उतार दीजिए।" },
      { speaker: "Aunty", avatar: "👵", textEn: "This entryway is so grand! Look at that brass idol of Lord Ganesha on that marble pedestal.", textHi: "यह प्रवेश द्वार कितना भव्य है! उस संगमरमर के चबूतरे पर भगवान गणेश की उस पीतल की मूर्ति को देखो।" },
      { speaker: "Sanjay", avatar: "👨", textEn: "Thank you, Aunty. That was a housewarming gift from my parents last week.", textHi: "धन्यवाद, आंटी। वह पिछले हफ़्ते मेरे माता-पिता की तरफ़ से गृह प्रवेश का उपहार था।" },
      { speaker: "Uncle", avatar: "👴", textEn: "Is there a guest bedroom on this ground floor for elders?", textHi: "क्या बुजुर्गों के लिए इस भूतल पर कोई अतिथि कक्ष है?" },
      { speaker: "Neha", avatar: "👩", textEn: "Yes, this room on the right is the ground-floor suite. It has an attached accessible bathroom.", textHi: "हाँ, दाईं ओर यह कमरा भूतल का सुइट है। इसमें एक सुलभ अटैच्ड बाथरूम है।" },
      { speaker: "Aunty", avatar: "👵", textEn: "That is so thoughtful! There are wide windows allowing abundant morning sunlight.", textHi: "यह तो बहुत ही सोच-समझकर बनाया गया है! यहाँ बड़ी खिड़कियाँ हैं जिनसे सुबह की भरपूर धूप आती है।" },
      { speaker: "Sanjay", avatar: "👨", textEn: "Follow us to the backyard garden terrace. There is a small fountain and organic herb garden.", textHi: "हमारे साथ पीछे के गार्डन टेरेस की तरफ़ आइए। वहाँ एक छोटा फव्वारा और हर्बल बगीचा है।" },
      { speaker: "Uncle", avatar: "👴", textEn: "Wow, what a tranquil sanctuary you have created in the middle of the city!", textHi: "वाह, शहर के बीचों-बीच आपने कितना शांत और सुंदर स्वर्ग बना लिया है!" },
      { speaker: "Neha", avatar: "👩", textEn: "Please sit down on these wicker chairs. We have hot cardamom tea and homemade sweets for you.", textHi: "कृपया इन आरामदायक कुर्सियों पर बैठिए। हमारे पास आपके लिए गरमा-गरम इलायची चाय और घर की बनी मिठाइयाँ हैं।" },
      { speaker: "Aunty", avatar: "👵", textEn: "May God bless this house with health, prosperity, and endless joy!", textHi: "ईश्वर इस घर को हमेशा स्वास्थ्य, समृद्धि और अपार खुशियों से परिपूर्ण रखे!" },
      { speaker: "Sanjay", avatar: "👨", textEn: "Thank you for your heartfelt blessings, Uncle and Aunty. Having you here means the world to us.", textHi: "आपके इन दिल से निकले आशीर्वाद के लिए धन्यवाद, अंकल और आंटी। आपका यहाँ होना हमारे लिए बहुत मायने रखता है।" }
    ]
  }
];
