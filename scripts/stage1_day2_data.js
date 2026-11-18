// Stage 1 Day 2: 10 Distinct Long-Form Dialogues (Social Etiquette & Courtesy)
// Focus: Please, Thank you, You're welcome, Excuse me, Pardon, I'm sorry, My pleasure, After you

export const day2Dialogues = [
  {
    id: "d02_sc01",
    title: "Ordering and Making Polite Custom Requests at a Cafe",
    titleHi: "कैफ़े में विनम्रतापूर्वक ऑर्डर देना और बदलाव का अनुरोध",
    context: "Siddharth orders beverages and a snack at a coffee shop, making polite dietary customizations.",
    situation: "Cafe order with polite courtesy phrases",
    characters: ["Barista", "Siddharth"],
    turns: [
      { speaker: "Barista", avatar: "☕", textEn: "Hello! Welcome to Bean & Leaf. What can I get started for you today?", textHi: "नमस्ते! बीन एंड लीफ़ में आपका स्वागत है। आज मैं आपके लिए क्या शुरू करूँ?" },
      { speaker: "Siddharth", avatar: "🧑", textEn: "Hello! Could I please have a large oat milk latte?", textHi: "नमस्ते! क्या मुझे कृपया एक बड़ा ओट मिल्क लाते मिल सकता है?" },
      { speaker: "Barista", avatar: "☕", textEn: "Certainly! Would you like that hot or iced?", textHi: "निश्चित रूप से! क्या आप इसे गर्म लेना पसंद करेंगे या बर्फ़ वाला ठंडा?" },
      { speaker: "Siddharth", avatar: "🧑", textEn: "I would prefer it hot, please, with less sugar if possible.", textHi: "मैं इसे गर्म लेना पसंद करूँगा, कृपया, यदि संभव हो तो कम चीनी के साथ।" },
      { speaker: "Barista", avatar: "☕", textEn: "No problem at all. We can prepare it with just half a spoon of brown sugar.", textHi: "कोई समस्या नहीं। हम इसे सिर्फ़ आधी चम्मच ब्राउन शुगर के साथ तैयार कर सकते हैं।" },
      { speaker: "Siddharth", avatar: "🧑", textEn: "That would be perfect, thank you so much.", textHi: "यह बिल्कुल सही रहेगा, आपका बहुत-बहुत धन्यवाद।" },
      { speaker: "Barista", avatar: "☕", textEn: "You're very welcome. Would you like any bakery item or sandwich to go with your coffee?", textHi: "आपका बहुत स्वागत है। क्या आप अपनी कॉफ़ी के साथ कोई बेकरी आइटम या सैंडविच लेना चाहेंगे?" },
      { speaker: "Siddharth", avatar: "🧑", textEn: "Could you please tell me if the blueberry muffin is eggless?", textHi: "क्या आप कृपया मुझे बता सकते हैं कि क्या ब्लूबेरी मफ़िन बिना अंडे वाला (एगलेस) है?" },
      { speaker: "Barista", avatar: "☕", textEn: "Let me check the ingredients sheet for you... Yes, it is 100% vegetarian and eggless!", textHi: "मैं आपके लिए सामग्री सूची देख लेता हूँ... जी हाँ, यह 100% शाकाहारी और बिना अंडे का है!" },
      { speaker: "Siddharth", avatar: "🧑", textEn: "Wonderful! Please warm up one blueberry muffin for me as well.", textHi: "बहुत बढ़िया! कृपया मेरे लिए एक ब्लूबेरी मफ़िन भी थोड़ा गर्म कर दीजिए।" },
      { speaker: "Barista", avatar: "☕", textEn: "My pleasure. Will you be enjoying this here in the cafe, or is it for takeaway?", textHi: "बिल्कुल खुशी से। क्या आप इसका यहीं कैफ़े में आनंद लेंगे, या पैक करवा कर ले जाएँगे?" },
      { speaker: "Siddharth", avatar: "🧑", textEn: "For dine-in, please. I would like to sit by the window table.", textHi: "यहीं बैठ कर खाऊँगा, कृपया। मैं खिड़की वाली मेज़ पर बैठना चाहूँगा।" },
      { speaker: "Barista", avatar: "☕", textEn: "Sure thing. Your total bill comes to three hundred and twenty rupees.", textHi: "ज़रूर। आपका कुल बिल तीन सौ बीस रुपये हुआ।" },
      { speaker: "Siddharth", avatar: "🧑", textEn: "Excuse me, do you accept contactless UPI payment?", textHi: "माफ़ कीजिएगा, क्या आप संपर्क रहित यूपीआई भुगतान स्वीकार करते हैं?" },
      { speaker: "Barista", avatar: "☕", textEn: "Yes, we do. Please scan this QR code on the payment stand.", textHi: "जी हाँ, हम करते हैं। कृपया पेमेंट स्टैंड पर लगे इस क्यूआर कोड को स्कैन करें।" },
      { speaker: "Siddharth", avatar: "🧑", textEn: "Here you go, the payment is completed on my screen.", textHi: "यह लीजिए, मेरी स्क्रीन पर भुगतान पूरा हो गया है।" },
      { speaker: "Barista", avatar: "☕", textEn: "Thank you very much. Here is your order receipt and token number fourteen.", textHi: "आपका बहुत-बहुत धन्यवाद। यह रही आपकी ऑर्डर रसीद और टोकन नंबर चौदह।" },
      { speaker: "Siddharth", avatar: "🧑", textEn: "Pardon me, how long will it take to prepare?", textHi: "क्षमा करें, इसे तैयार होने में कितना समय लगेगा?" },
      { speaker: "Barista", avatar: "☕", textEn: "It will be ready in about five to seven minutes. We will bring it to your table.", textHi: "यह लगभग पाँच से सात मिनट में तैयार हो जाएगा। हम इसे आपकी मेज़ पर पहुँचा देंगे।" },
      { speaker: "Siddharth", avatar: "🧑", textEn: "I truly appreciate your kind hospitality. Thank you!", textHi: "मैं आपके विनम्र व्यवहार की सचमुच सराहना करता हूँ। धन्यवाद!" },
      { speaker: "Barista", avatar: "☕", textEn: "It's my absolute pleasure, sir. Enjoy your coffee and have a great time!", textHi: "यह तो मेरा सौभाग्य है, सर। अपनी कॉफ़ी का आनंद लें और आपका समय अच्छा बीते!" }
    ]
  },
  {
    id: "d02_sc02",
    title: "Asking for Street Directions Politely",
    titleHi: "सड़क पर विनम्रतापूर्वक रास्ता पूछना",
    context: "A commuter, Gaurav, is lost in an unfamiliar neighborhood and politely asks a shopkeeper for directions.",
    situation: "Seeking and giving polite directions on a city street",
    characters: ["Gaurav", "Shopkeeper"],
    turns: [
      { speaker: "Gaurav", avatar: "🧭", textEn: "Excuse me, sir! Could you please spare a moment to help me?", textHi: "माफ़ कीजिएगा, सर! क्या आप मेरी मदद के लिए एक मिनट का समय निकाल सकते हैं?" },
      { speaker: "Shopkeeper", avatar: "🏪", textEn: "Yes, certainly! How can I help you, young man?", textHi: "हाँ, बिल्कुल! मैं आपकी क्या मदद कर सकता हूँ, भाई?" },
      { speaker: "Gaurav", avatar: "🧭", textEn: "I am looking for the City Central Post Office. Am I heading in the right direction?", textHi: "मैं सिटी सेंट्रल पोस्ट ऑफिस ढूँढ रहा हूँ। क्या मैं सही दिशा में जा रहा हूँ?" },
      { speaker: "Shopkeeper", avatar: "🏪", textEn: "I am afraid you have walked a bit too far down this lane.", textHi: "मुझे लगता है कि आप इस गली में थोड़ा आगे निकल आए हैं।" },
      { speaker: "Gaurav", avatar: "🧭", textEn: "Oh, I am sorry! I thought this road led straight to the main square.", textHi: "ओह, मुझे खेद है! मुझे लगा कि यह सड़क सीधे मुख्य चौराहे पर जाती है।" },
      { speaker: "Shopkeeper", avatar: "🏪", textEn: "No need to be sorry. It is very easy to get confused here because of the one-way streets.", textHi: "माफ़ी मांगने की कोई बात नहीं है। वन-वे सड़कों की वजह से यहाँ भ्रमित होना बहुत आसान है।" },
      { speaker: "Gaurav", avatar: "🧭", textEn: "Pardon me, could you please tell me the shortest route from here?", textHi: "क्षमा करें, क्या आप कृपया मुझे यहाँ से सबसे छोटा रास्ता बता सकते हैं?" },
      { speaker: "Shopkeeper", avatar: "🏪", textEn: "Gladly. Turn around and walk straight back for about two hundred meters.", textHi: "खुशी से। पीछे मुड़िए और लगभग दो सौ मीटर सीधे वापस जाइए।" },
      { speaker: "Gaurav", avatar: "🧭", textEn: "Okay, two hundred meters back toward the traffic signal?", textHi: "ठीक है, ट्रैफ़िक सिग्नल की ओर दो सौ मीटर वापस?" },
      { speaker: "Shopkeeper", avatar: "🏪", textEn: "Yes, exactly. When you reach the red brick building, take a left turn.", textHi: "हाँ, बिल्कुल। जब आप लाल ईंटों वाली इमारत के पास पहुँचें, तो बाईं ओर मुड़ जाएँ।" },
      { speaker: "Gaurav", avatar: "🧭", textEn: "Take a left at the red brick building, got it.", textHi: "लाल ईंटों वाली इमारत पर बायाँ मोड़, समझ गया।" },
      { speaker: "Shopkeeper", avatar: "🏪", textEn: "After that, walk past the stationery shop. The post office is right opposite the bank.", textHi: "उसके बाद, स्टेशनरी की दुकान से आगे बढ़ें। पोस्ट ऑफिस ठीक बैंक के सामने है।" },
      { speaker: "Gaurav", avatar: "🧭", textEn: "Is it a large white building with an Indian flag in front?", textHi: "क्या यह एक बड़ी सफ़ेद इमारत है जिसके सामने भारतीय झंडा लगा है?" },
      { speaker: "Shopkeeper", avatar: "🏪", textEn: "Yes, that is the one. You cannot miss it.", textHi: "हाँ, वही है। आप उसे आसानी से पहचान लेंगे।" },
      { speaker: "Gaurav", avatar: "🧭", textEn: "Thank you very much for your time and clear directions, sir.", textHi: "सर, आपके समय और स्पष्ट दिशा-निर्देशों के लिए बहुत-बहुत धन्यवाद।" },
      { speaker: "Shopkeeper", avatar: "🏪", textEn: "You are most welcome! Glad I could help.", textHi: "आपका बहुत स्वागत है! खुशी हुई कि मैं काम आ सका।" },
      { speaker: "Gaurav", avatar: "🧭", textEn: "I really appreciate your kindness. Have a wonderful day!", textHi: "मैं आपकी दयालुता की सचमुच कद्र करता हूँ। आपका दिन शुभ हो!" },
      { speaker: "Shopkeeper", avatar: "🏪", textEn: "Thank you! Take care and have a safe walk.", textHi: "धन्यवाद! अपना ध्यान रखें और सुरक्षित जाएँ।" }
    ]
  },
  {
    id: "d02_sc03",
    title: "Returning a Dropped Wallet on the Metro",
    titleHi: "मेट्रो में गिरा हुआ बटुआ लौटाने पर शिष्ट संवाद",
    context: "A passenger drops their wallet while rushing to board the metro train; a fellow commuter notices and returns it.",
    situation: "Returning lost property with courtesy and gratitude",
    characters: ["Ritu", "Deepak"],
    turns: [
      { speaker: "Ritu", avatar: "👩", textEn: "Excuse me! Sir, excuse me!", textHi: "माफ़ कीजिएगा! सर, ज़रा सुनिए!" },
      { speaker: "Deepak", avatar: "👨", textEn: "Yes? Are you calling me?", textHi: "जी? क्या आप मुझे बुला रही हैं?" },
      { speaker: "Ritu", avatar: "👩", textEn: "Pardon the interruption, but I think you just dropped your brown leather wallet.", textHi: "रोकने के लिए क्षमा करें, लेकिन मुझे लगता है कि आपका भूरे चमड़े का बटुआ अभी गिर गया था।" },
      { speaker: "Deepak", avatar: "👨", textEn: "Oh my goodness! Yes, that is my wallet. I didn't even realize it slipped from my pocket.", textHi: "हे भगवान! जी हाँ, यह मेरा ही बटुआ है। मुझे तो पता भी नहीं चला कि यह मेरी जेब से फिसल गया।" },
      { speaker: "Ritu", avatar: "👩", textEn: "Please take it. It fell right near the platform bench when you pulled out your phone.", textHi: "कृपया इसे ले लीजिए। जब आपने अपना फ़ोन निकाला तब यह प्लेटफ़ॉर्म की बेंच के पास गिरा था।" },
      { speaker: "Deepak", avatar: "👨", textEn: "I cannot thank you enough! All my credit cards, identification, and driving license are inside.", textHi: "मैं आपका जितना धन्यवाद करूँ कम है! मेरे सभी क्रेडिट कार्ड, पहचान पत्र और ड्राइविंग लाइसेंस इसके अंदर हैं।" },
      { speaker: "Ritu", avatar: "👩", textEn: "Please don't mention it. I am just glad I spotted it before the train departed.", textHi: "कृपया धन्यवाद की कोई बात नहीं। मुझे बस खुशी है कि ट्रेन छूटने से पहले मेरी नज़र इस पर पड़ गई।" },
      { speaker: "Deepak", avatar: "👨", textEn: "You have saved me from so much trouble and paperwork. That was incredibly kind of you.", textHi: "आपने मुझे बहुत बड़ी परेशानी और काग़ज़ी कार्रवाई से बचा लिया। यह आपकी बहुत बड़ी दरियादिली है।" },
      { speaker: "Ritu", avatar: "👩", textEn: "It is my pleasure. Anyone in my place would have done the exact same thing.", textHi: "यह तो मेरा फ़र्ज़ था। मेरी जगह कोई भी होता तो बिल्कुल यही करता।" },
      { speaker: "Deepak", avatar: "👨", textEn: "May I at least offer to buy you a cup of tea at the station kiosk?", textHi: "क्या मैं कम से कम स्टेशन के कियोस्क पर आपके लिए एक कप चाय पेश कर सकता हूँ?" },
      { speaker: "Ritu", avatar: "👩", textEn: "Oh, that is very generous of you, but there is really no need. Please keep your wallet safe!", textHi: "अरे, यह आपका बड़प्पन है, लेकिन सच में इसकी कोई ज़रूरत नहीं। कृपया अपना बटुआ सुरक्षित रखें!" },
      { speaker: "Deepak", avatar: "👨", textEn: "I will make sure to zip my pocket securely. Thank you once again for your honesty.", textHi: "मैं ध्यान रखूँगा कि अपनी जेब की ज़िप ठीक से बंद रखूँ। आपकी ईमानदारी के लिए एक बार फिर धन्यवाद।" },
      { speaker: "Ritu", avatar: "👩", textEn: "You are very welcome. Have a safe journey!", textHi: "आपका बहुत स्वागत है। आपकी यात्रा सुरक्षित रहे!" },
      { speaker: "Deepak", avatar: "👨", textEn: "Thank you! Have a wonderful day ahead.", textHi: "धन्यवाद! आपका आगे का दिन बहुत अच्छा बीते।" }
    ]
  },
  {
    id: "d02_sc04",
    title: "Asking to Share a Study Table in a Quiet Library",
    titleHi: "पुस्तकालय में अध्ययन की मेज़ साझा करने का विनम्र अनुरोध",
    context: "A student, Tanya, politely asks a reader, Varun, if an empty chair at the study desk is available.",
    situation: "Polite inquiries and respect in a quiet public space",
    characters: ["Tanya", "Varun"],
    turns: [
      { speaker: "Tanya", avatar: "👧", textEn: "Excuse me... sorry to disturb you while you are reading.", textHi: "माफ़ कीजिएगा... जब आप पढ़ रहे हैं तो आपको परेशान करने के लिए खेद है।" },
      { speaker: "Varun", avatar: "🧑", textEn: "No problem at all. How can I help you?", textHi: "कोई बात नहीं। मैं आपकी क्या मदद कर सकता हूँ?" },
      { speaker: "Tanya", avatar: "👧", textEn: "Pardon me, is this chair beside you taken, or is it free?", textHi: "क्षमा करें, क्या आपके बगल वाली यह कुर्सी किसी के लिए आरक्षित है, या यह खाली है?" },
      { speaker: "Varun", avatar: "🧑", textEn: "It is completely unoccupied. Please, feel free to sit here.", textHi: "यह बिल्कुल खाली है। कृपया, यहाँ बेझिझक बैठिए।" },
      { speaker: "Tanya", avatar: "👧", textEn: "Thank you very much. The entire ground floor reading room is full today.", textHi: "आपका बहुत-बहुत धन्यवाद। आज भूतल का पूरा रीडिंग रूम भरा हुआ है।" },
      { speaker: "Varun", avatar: "🧑", textEn: "Yes, semester examinations start next week, so everyone is studying here.", textHi: "हाँ, अगले हफ़्ते से सेमेस्टर की परीक्षाएँ शुरू हो रही हैं, इसलिए सभी यहाँ पढ़ाई कर रहे हैं।" },
      { speaker: "Tanya", avatar: "👧", textEn: "Would you mind if I plug in my laptop charger into the shared wall socket?", textHi: "यदि मैं शेयर्ड वॉल सॉकेट में अपना लैपटॉप चार्जर लगा लूँ, तो क्या आपको कोई असुविधा तो नहीं होगी?" },
      { speaker: "Varun", avatar: "🧑", textEn: "Not in the slightest! Go right ahead. Let me move my notebook out of your way.", textHi: "बिल्कुल भी नहीं! आप लगा लीजिए। मैं अपनी नोटबुक थोड़ी हटा देता हूँ।" },
      { speaker: "Tanya", avatar: "👧", textEn: "Thank you for being so accommodating. I appreciate it.", textHi: "इतना सहयोगी होने के लिए धन्यवाद। मैं इसकी सराहना करती हूँ।" },
      { speaker: "Varun", avatar: "🧑", textEn: "You are welcome. Do you need the table reading lamp adjusted as well?", textHi: "आपका स्वागत है। क्या टेबल लैंप की रोशनी को भी थोड़ा आपकी तरफ़ घुमाने की ज़रूरत है?" },
      { speaker: "Tanya", avatar: "👧", textEn: "No, the current lighting is perfect, thank you.", textHi: "नहीं, अभी की रोशनी बिल्कुल सही है, धन्यवाद।" },
      { speaker: "Varun", avatar: "🧑", textEn: "Great. Happy studying!", textHi: "बहुत अच्छा। अच्छी तरह पढ़ाई कीजिए!" },
      { speaker: "Tanya", avatar: "👧", textEn: "Thank you! Good luck with your study session too.", textHi: "धन्यवाद! आपको भी अपनी पढ़ाई के लिए शुभकामनाएँ।" }
    ]
  },
  {
    id: "d02_sc05",
    title: "Apologizing for an Accidental Collision in an Elevator",
    titleHi: "लिफ़्ट में अनजाने में टकराने पर माफ़ी और शिष्टाचार",
    context: "A passenger accidentally bumps into someone holding documents when the elevator stops abruptly.",
    situation: "Immediate apology, polite reassurance, and courtesy",
    characters: ["Manish", "Priyanka"],
    turns: [
      { speaker: "Manish", avatar: "💼", textEn: "Oh! I am terribly sorry! Are you alright?", textHi: "ओह! मुझे बेहद खेद है! क्या आप ठीक हैं?" },
      { speaker: "Priyanka", avatar: "📑", textEn: "Yes, I am fine. The elevator just gave a sudden jerk when stopping.", textHi: "हाँ, मैं ठीक हूँ। लिफ़्ट ने रुकते समय अचानक एक तेज़ झटका दिया था।" },
      { speaker: "Manish", avatar: "💼", textEn: "Please let me pick up those fallen folders for you. I am really sorry about that.", textHi: "कृपया मुझे आपके गिरे हुए फ़ोल्डर उठाने दीजिए। मुझे इसके लिए सचमुच बहुत खेद है।" },
      { speaker: "Priyanka", avatar: "📑", textEn: "Please don't worry about it at all. It wasn't your fault.", textHi: "कृपया बिल्कुल भी चिंता मत कीजिए। इसमें आपकी कोई ग़लती नहीं थी।" },
      { speaker: "Manish", avatar: "💼", textEn: "Here are your presentation sheets and blue binder. Are they in order?", textHi: "यह रही आपकी प्रेजेंटेशन की शीटें और नीला बाइंडर। क्या वे क्रम में हैं?" },
      { speaker: "Priyanka", avatar: "📑", textEn: "Yes, everything is intact and undamaged. Thank you for your prompt help.", textHi: "हाँ, सब कुछ सही सलामत और बिना किसी नुकसान के है। आपकी त्वरित मदद के लिए धन्यवाद।" },
      { speaker: "Manish", avatar: "💼", textEn: "You are welcome. After you, please!", textHi: "आपका स्वागत है। पहले आप निकलिए, कृपया!" },
      { speaker: "Priyanka", avatar: "📑", textEn: "Thank you very much. That is very courteous of you.", textHi: "बहुत-बहुत धन्यवाद। यह आपका बहुत ही विनम्र व्यवहार है।" },
      { speaker: "Manish", avatar: "💼", textEn: "My pleasure. Have a great day ahead!", textHi: "यह तो मेरा सौभाग्य है। आपका आगे का दिन बहुत अच्छा रहे!" },
      { speaker: "Priyanka", avatar: "📑", textEn: "Thank you! You too, have a pleasant day!", textHi: "धन्यवाद! आपका भी दिन सुखद हो!" }
    ]
  },
  {
    id: "d02_sc06",
    title: "Borrowing Office Supplies with Courtesy",
    titleHi: "कार्यालय में विनम्रता से स्टेशनरी माँगना और धन्यवाद देना",
    context: "Neha needs a stapler and highlighter for an urgent report and asks her colleague Mayank politely.",
    situation: "Workplace courtesy and sharing resources",
    characters: ["Neha", "Mayank"],
    turns: [
      { speaker: "Neha", avatar: "👩‍💼", textEn: "Excuse me, Mayank. Do you have a quick minute?", textHi: "माफ़ करना मयंक। क्या तुम्हारे पास एक मिनट का समय है?" },
      { speaker: "Mayank", avatar: "👨‍💼", textEn: "Sure, Neha! How can I help you?", textHi: "हाँ बिल्कुल नेहा! मैं तुम्हारी क्या मदद कर सकता हूँ?" },
      { speaker: "Neha", avatar: "👩‍💼", textEn: "Could I please borrow your stapler and yellow highlighter for a few minutes?", textHi: "क्या मैं कुछ मिनटों के लिए तुम्हारा स्टेपलर और पीला हाइलाइटर ले सकती हूँ?" },
      { speaker: "Mayank", avatar: "👨‍💼", textEn: "Certainly! Here they are on my desk tray.", textHi: "निश्चित रूप से! ये रहे मेरी डेस्क ट्रे में।" },
      { speaker: "Neha", avatar: "👩‍💼", textEn: "Thank you so much! I will return them right after organizing these client files.", textHi: "बहुत-बहुत धन्यवाद! मैं इन क्लाइंट फ़ाइलों को व्यवस्थित करने के तुरंत बाद इन्हें लौटा दूँगी।" },
      { speaker: "Mayank", avatar: "👨‍💼", textEn: "Take your time, there is no rush at all. Do you need extra staple pins as well?", textHi: "आराम से इस्तेमाल करो, कोई जल्दी नहीं है। क्या तुम्हें अतिरिक्त स्टेपल पिन की भी ज़रूरत है?" },
      { speaker: "Neha", avatar: "👩‍💼", textEn: "No, this looks plenty full. That is very thoughtful of you, Mayank.", textHi: "नहीं, इसमें काफ़ी पिन भरी हुई हैं। तुम्हारा यह सोचना बहुत अच्छा लगा, मयंक।" },
      { speaker: "Mayank", avatar: "👨‍💼", textEn: "You are most welcome. Let me know if you need anything else for the report.", textHi: "तुम्हारा बहुत स्वागत है। अगर रिपोर्ट के लिए कुछ और चाहिए हो तो मुझे बताना।" },
      { speaker: "Neha", avatar: "👩‍💼", textEn: "Here you go, Mayank. I am returning your stapler and highlighter. Thanks again!", textHi: "यह लो मयंक। मैं तुम्हारा स्टेपलर और हाइलाइटर लौटा रही हूँ। फिर से धन्यवाद!" },
      { speaker: "Mayank", avatar: "👨‍💼", textEn: "My pleasure, Neha! Happy to help anytime.", textHi: "खुशी की बात है, नेहा! कभी भी मदद करके खुशी होगी।" }
    ]
  },
  {
    id: "d02_sc07",
    title: "Polite Noise Complaint Between Roommates",
    titleHi: "कमरे के साथियों के बीच आवाज़ कम करने का विनम्र अनुरोध",
    context: "Shreya is studying for an online exam and politely requests her roommate Divya to lower the music volume.",
    situation: "Diplomatic interpersonal request and apology",
    characters: ["Shreya", "Divya"],
    turns: [
      { speaker: "Shreya", avatar: "👩‍🎓", textEn: "Divya, could I speak with you for a second, please?", textHi: "दिव्या, क्या मैं तुमसे एक सेकंड बात कर सकती हूँ, प्लीज?" },
      { speaker: "Divya", avatar: "🎧", textEn: "Of course, Shreya! Is everything okay?", textHi: "हाँ ज़रूर श्रेया! क्या सब ठीक है?" },
      { speaker: "Shreya", avatar: "👩‍🎓", textEn: "Would you mind very much lowering the speaker volume or using your headphones?", textHi: "क्या तुम स्पीकर की आवाज़ थोड़ी कम करने या हेडफ़ोन लगाने का कष्ट करोगी?" },
      { speaker: "Divya", avatar: "🎧", textEn: "Oh, I am so sorry! Was the music too loud?", textHi: "ओह, मुझे बहुत अफ़सोस है! क्या संगीत बहुत तेज़ बज रहा था?" },
      { speaker: "Shreya", avatar: "👩‍🎓", textEn: "I have an online certification test starting in twenty minutes, so I need quiet focus.", textHi: "मेरी बीस मिनट में एक ऑनलाइन सर्टिफ़िकेशन परीक्षा शुरू होने वाली है, इसलिए मुझे शांति की ज़रूरत है।" },
      { speaker: "Divya", avatar: "🎧", textEn: "I sincerely apologize! I had no idea your exam was scheduled for this evening.", textHi: "मैं दिल से माफ़ी मांगती हूँ! मुझे बिल्कुल अंदाज़ा नहीं था कि तुम्हारी परीक्षा आज शाम को है।" },
      { speaker: "Shreya", avatar: "👩‍🎓", textEn: "Please don't feel bad. Thank you so much for understanding.", textHi: "कृपया बुरा मत मानो। इतनी अच्छी तरह समझने के लिए तुम्हारा बहुत धन्यवाद।" },
      { speaker: "Divya", avatar: "🎧", textEn: "I will plug in my noise-canceling headphones right away. Best of luck on your test!", textHi: "मैं तुरंत अपने नॉइज़-कैंसलिंग हेडफ़ोन लगा लेती हूँ। तुम्हारी परीक्षा के लिए ढेर सारी शुभकामनाएँ!" },
      { speaker: "Shreya", avatar: "👩‍🎓", textEn: "Thank you so much, Divya! That means a lot to me.", textHi: "बहुत-बहुत धन्यवाद दिव्या! यह मेरे लिए बहुत मायने रखता है।" },
      { speaker: "Divya", avatar: "🎧", textEn: "You're welcome! Go ace it!", textHi: "स्वागत है! जाओ और शानदार प्रदर्शन करो!" }
    ]
  },
  {
    id: "d02_sc08",
    title: "Asking a Store Assistant to Reach a High Shelf",
    titleHi: "दुकान में ऊँची शेल्फ़ से सामान उतारने का विनम्र आग्रह",
    context: "A customer in a supermarket needs an item placed on the top shelf and asks an employee for assistance.",
    situation: "Polite retail request and courteous service",
    characters: ["Customer", "Store Assistant"],
    turns: [
      { speaker: "Customer", avatar: "🛒", textEn: "Pardon me, sir! Could you please help me reach that olive oil bottle on the top rack?", textHi: "क्षमा करें, सर! क्या आप कृपया सबसे ऊपर वाली रैक से जैतून के तेल की वह बोतल उतारने में मेरी मदद करेंगे?" },
      { speaker: "Store Assistant", avatar: "👨‍🍳", textEn: "Certainly, ma'am! I would be glad to help. Which specific brand do you prefer?", textHi: "निश्चित रूप से, मैम! मुझे मदद करके खुशी होगी। आप कौन सा विशिष्ट ब्रांड पसंद करती हैं?" },
      { speaker: "Customer", avatar: "🛒", textEn: "The extra virgin cold-pressed one in the dark green glass bottle, please.", textHi: "गहरे हरे रंग की कांच की बोतल में एक्स्ट्रा वर्जिन कोल्ड-प्रेस्ड वाला, कृपया।" },
      { speaker: "Store Assistant", avatar: "👨‍🍳", textEn: "Here you go, ma'am. Let me gently place it into your shopping cart.", textHi: "यह लीजिए, मैम। मैं इसे धीरे से आपकी शॉपिंग कार्ट में रख देता हूँ।" },
      { speaker: "Customer", avatar: "🛒", textEn: "Thank you very much. It was just a little too high for me to reach safely.", textHi: "आपका बहुत-बहुत धन्यवाद। यह मेरे सुरक्षित पहुँचने के लिए थोड़ी ज़्यादा ऊँचाई पर था।" },
      { speaker: "Store Assistant", avatar: "👨‍🍳", textEn: "It is our pleasure to assist. Please let any of our floor staff know if you need anything else.", textHi: "आपकी सहायता करना हमारा सौभाग्य है। यदि आपको किसी और चीज़ की आवश्यकता हो तो हमारे स्टाफ़ को बताएं।" },
      { speaker: "Customer", avatar: "🛒", textEn: "I appreciate your prompt courtesy. Thank you!", textHi: "मैं आपकी त्वरित विनम्रता की सराहना करती हूँ। धन्यवाद!" },
      { speaker: "Store Assistant", avatar: "👨‍🍳", textEn: "You're very welcome, ma'am. Have a wonderful shopping experience!", textHi: "आपका बहुत स्वागत है, मैम। आपकी खरीदारी का अनुभव शानदार रहे!" }
    ]
  },
  {
    id: "d02_sc09",
    title: "Politely Declining an Offer at a Friend's Dinner Table",
    titleHi: "दोस्त के यहाँ रात्रिभोज में विनम्रता से अतिरिक्त भोजन के लिए मना करना",
    context: "Ajay is having dinner at his friend's house; his host offers another generous serving of dessert.",
    situation: "Polite refusal, gratitude, and social elegance",
    characters: ["Host", "Ajay"],
    turns: [
      { speaker: "Host", avatar: "🍲", textEn: "Ajay, please have another serving of hot gulab jamun and vanilla ice cream!", textHi: "अजय, कृपया गरमा-गरम गुलाब जामुन और वैनिला आइसक्रीम का एक और हिस्सा लीजिए!" },
      { speaker: "Ajay", avatar: "😋", textEn: "Oh, they look absolutely delicious, but no thank you, I am truly full!", textHi: "अरे, ये देखने में सचमुच बेहद स्वादिष्ट लग रहे हैं, लेकिन नहीं धन्यवाद, मेरा पेट सच में पूरी तरह भर चुका है!" },
      { speaker: "Host", avatar: "🍲", textEn: "Are you sure? Just one small piece won't hurt at all!", textHi: "क्या आपको पक्का यकीन है? सिर्फ़ एक छोटा टुकड़ा खाने से कोई फ़र्क नहीं पड़ेगा!" },
      { speaker: "Ajay", avatar: "😋", textEn: "Thank you so much for your warm hospitality, but I really cannot eat another bite.", textHi: "आपकी गर्मजोशी भरी मेहमाननवाज़ी के लिए बहुत धन्यवाद, लेकिन मैं सच में एक निवाला भी और नहीं खा सकता।" },
      { speaker: "Host", avatar: "🍲", textEn: "Alright then, I won't insist. Would you like a warm cup of herbal green tea instead?", textHi: "ठीक है फिर, मैं ज़्यादा ज़िद नहीं करूँगा। क्या आप इसके बजाय एक कप हर्बल ग्रीन टी लेना पसंद करेंगे?" },
      { speaker: "Ajay", avatar: "😋", textEn: "Yes, please! That would be lovely after such a rich and delicious dinner.", textHi: "हाँ, ज़रूर! इतने लज़ीज़ और भरपेट डिनर के बाद यह बहुत अच्छा रहेगा।" },
      { speaker: "Host", avatar: "🍲", textEn: "Here is your green tea with a hint of lemon and honey.", textHi: "यह लीजिए नींबू और शहद की हल्की महक वाली आपकी ग्रीन टी।" },
      { speaker: "Ajay", avatar: "😋", textEn: "Thank you for being such a wonderful and generous host this evening.", textHi: "आज शाम इतने शानदार और उदार मेज़बान बनने के लिए आपका धन्यवाद।" },
      { speaker: "Host", avatar: "🍲", textEn: "It is our absolute pleasure having you over. You are welcome anytime!", textHi: "आपको अपने यहाँ पाकर हमें बेहद खुशी हुई। आपका जब मन चाहे पधारिए!" }
    ]
  },
  {
    id: "d02_sc10",
    title: "Resolving a Billing Query with Customer Support",
    titleHi: "ग्राहक सेवा के साथ बिल संबंधी समस्या का विनम्र समाधान",
    context: "Kavita contacts customer care regarding an unrecognized charge on her monthly broadband invoice.",
    situation: "Polite customer grievance and courteous resolution",
    characters: ["Support Agent", "Kavita"],
    turns: [
      { speaker: "Support Agent", avatar: "🎧", textEn: "Thank you for calling ConnectFast Customer Care. My name is Rajesh. How may I help you today?", textHi: "कनेक्टफास्ट कस्टमर केयर में कॉल करने के लिए धन्यवाद। मेरा नाम राजेश है। आज मैं आपकी क्या मदद कर सकता हूँ?" },
      { speaker: "Kavita", avatar: "👩‍💼", textEn: "Good morning, Rajesh. I am calling regarding my broadband bill for this month.", textHi: "शुभ प्रभात, राजेश। मैं इस महीने के अपने ब्रॉडबैंड बिल के संबंध में कॉल कर रही हूँ।" },
      { speaker: "Support Agent", avatar: "🎧", textEn: "Certainly, ma'am. Could you please provide your registered account number?", textHi: "निश्चित रूप से, मैम। क्या आप कृपया अपना पंजीकृत खाता नंबर बता सकती हैं?" },
      { speaker: "Kavita", avatar: "👩‍💼", textEn: "Yes, please note it down: CF-884920.", textHi: "हाँ, कृपया नोट कर लीजिए: CF-884920।" },
      { speaker: "Support Agent", avatar: "🎧", textEn: "Thank you, Ms. Kavita. May I know what specific concern you noticed on the bill?", textHi: "धन्यवाद, सुश्री कविता। क्या मैं जान सकता हूँ कि आपको बिल में क्या विशेष समस्या नज़र आई?" },
      { speaker: "Kavita", avatar: "👩‍💼", textEn: "There is an extra charge of two hundred rupees labeled as 'VAS entertainment subscription'.", textHi: "इसमें 'वीएएस मनोरंजन सदस्यता' के नाम से दो सौ रुपये का अतिरिक्त शुल्क जुड़ा हुआ है।" },
      { speaker: "Support Agent", avatar: "🎧", textEn: "I apologize for any inconvenience caused. Let me inspect the transaction log right now.", textHi: "हुई किसी भी असुविधा के लिए मैं क्षमा चाहता हूँ। मुझे अभी ट्रांज़ैक्शन लॉग की जाँच करने दीजिए।" },
      { speaker: "Kavita", avatar: "👩‍💼", textEn: "Thank you. I never opted for this entertainment pack.", textHi: "धन्यवाद। मैंने इस मनोरंजन पैक का विकल्प कभी नहीं चुना था।" },
      { speaker: "Support Agent", avatar: "🎧", textEn: "I see what happened. It was an automated trial activation. I have canceled it and refunded the amount.", textHi: "मैं समझ गया कि क्या हुआ था। यह एक ऑटोमेटेड ट्रायल एक्टिवेशन था। मैंने इसे रद्द कर दिया है और राशि वापस कर दी है।" },
      { speaker: "Kavita", avatar: "👩‍💼", textEn: "That is wonderful news! Thank you so much for resolving it so quickly and politely.", textHi: "यह तो बहुत अच्छी खबर है! इतनी जल्दी और विनम्रता से समाधान करने के लिए आपका बहुत-बहुत धन्यवाद।" },
      { speaker: "Support Agent", avatar: "🎧", textEn: "You are most welcome, Ms. Kavita. It was my pleasure assisting you today. Have a pleasant day!", textHi: "आपका बहुत स्वागत है, सुश्री कविता। आज आपकी सहायता करके मुझे खुशी हुई। आपका दिन सुखद रहे!" }
    ]
  }
];
