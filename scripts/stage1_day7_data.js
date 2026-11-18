// Stage 1 Day 7: 10 Distinct Long-Form Dialogues (Future State of Being: Will Be & Time Adverbs)
// Focus: Will be, Won't be, Tomorrow, Next week, Soon, Later, In the future, Questions: Will you be?

export const day7Dialogues = [
  {
    id: "d07_sc01",
    title: "Planning Team Availability for Next Week's Project Sprint",
    titleHi: "अगले सप्ताह के प्रोजेक्ट स्प्रिंट के लिए टीम की उपलब्धता की योजना",
    context: "Team Lead Rakesh checks the availability of his team members for an upcoming release sprint.",
    situation: "Future scheduling and planning using 'will be', 'won't be'",
    characters: ["Rakesh", "Megha"],
    turns: [
      { speaker: "Rakesh", avatar: "👨‍💼", textEn: "Megha, will you be available in the office next Monday for the sprint planning meeting?", textHi: "मेघा, क्या तुम स्प्रिंट प्लानिंग मीटिंग के लिए अगले सोमवार को ऑफ़िस में उपलब्ध रहोगी?" },
      { speaker: "Megha", avatar: "👩‍💼", textEn: "Yes, I will be in the office by nine sharp. I won't be on leave next week.", textHi: "हाँ, मैं ठीक नौ बजे ऑफ़िस में रहूँगी। अगले हफ़्ते मेरी कोई छुट्टी नहीं होगी।" },
      { speaker: "Rakesh", avatar: "👨‍💼", textEn: "Will Arjun be back from his client visit in Hyderabad by then?", textHi: "क्या अर्जुन तब तक हैदराबाद के क्लाइंट दौरे से वापस आ जाएगा?" },
      { speaker: "Megha", avatar: "👩‍💼", textEn: "He will be back on Friday evening, so he will be present for Monday's kickoff.", textHi: "वह शुक्रवार शाम को लौट आएगा, इसलिए सोमवार के किकऑफ़ में उपस्थित रहेगा।" },
      { speaker: "Rakesh", avatar: "👨‍💼", textEn: "That is excellent. Will the conference room on floor 3 be free at 10 AM?", textHi: "यह तो बहुत अच्छा है। क्या तीसरी मंज़िल का कॉन्फ्रेंस रूम सुबह 10 बजे खाली रहेगा?" },
      { speaker: "Megha", avatar: "👩‍💼", textEn: "I will book it right now on the calendar system, so it will be reserved for our team.", textHi: "मैं इसे अभी कैलेंडर सिस्टम पर बुक कर देती हूँ, ताकि यह हमारी टीम के लिए आरक्षित रहे।" },
      { speaker: "Rakesh", avatar: "👨‍💼", textEn: "Our new automated deployment pipeline will be operational by next Wednesday.", textHi: "हमारी नई ऑटोमेटेड डिप्लॉयमेंट पाइपलाइन अगले बुधवार तक चालू हो जाएगी।" },
      { speaker: "Megha", avatar: "👩‍💼", textEn: "That will be a massive boost for our continuous integration cycle.", textHi: "यह हमारे कंटीन्यूअस इंटीग्रेशन चक्र के लिए बहुत बड़ा बढ़ावा होगा।" },
      { speaker: "Rakesh", avatar: "👨‍💼", textEn: "We will be fully ready for the enterprise client demonstration on Friday.", textHi: "हम शुक्रवार को एंटरप्राइज़ क्लाइंट प्रदर्शन के लिए पूरी तरह तैयार रहेंगे।" },
      { speaker: "Megha", avatar: "👩‍💼", textEn: "Everyone will be motivated to deliver an exceptional product release.", textHi: "हर कोई एक असाधारण उत्पाद रिलीज़ देने के लिए प्रेरित रहेगा।" }
    ]
  },
  {
    id: "d07_sc02",
    title: "Discussing Tomorrow's Weather Forecast for an Outdoor Picnic",
    titleHi: "आउटडोर पिकनिक के लिए कल के मौसम के पूर्वानुमान पर चर्चा",
    context: "Two friends, Kunal and Divya, discuss the weather forecast before packing picnic baskets.",
    situation: "Future weather conditions using 'will be', 'won't be'",
    characters: ["Kunal", "Divya"],
    turns: [
      { speaker: "Kunal", avatar: "🧺", textEn: "Divya, will tomorrow be sunny enough for our botanical garden picnic?", textHi: "दिव्या, क्या कल बॉटनिकल गार्डन पिकनिक के लिए पर्याप्त धूप रहेगी?" },
      { speaker: "Divya", avatar: "☀️", textEn: "According to the meteorological bureau, tomorrow will be clear and mild.", textHi: "मौसम विभाग के अनुसार, कल का मौसम साफ़ और सुहावना रहेगा।" },
      { speaker: "Kunal", avatar: "🧺", textEn: "Will it be windy in the afternoon near the lake pavilion?", textHi: "क्या दोपहर में झील के मंडप के पास तेज़ हवा चलेगी?" },
      { speaker: "Divya", avatar: "☀️", textEn: "There will be a gentle breeze, but it won't be stormy or dusty.", textHi: "हल्की ठंडी हवा चलेगी, लेकिन आंधी या धूल भरा मौसम नहीं होगा।" },
      { speaker: "Kunal", avatar: "🧺", textEn: "That is perfect! Our friends will be delighted to spend the whole day outdoors.", textHi: "यह तो बिल्कुल सही है! हमारे दोस्त पूरा दिन बाहर बिताने को लेकर बहुत खुश होंगे।" },
      { speaker: "Divya", avatar: "☀️", textEn: "Will your brother Amit be joining us tomorrow?", textHi: "क्या तुम्हारा भाई अमित भी कल हमारे साथ चलेगा?" },
      { speaker: "Kunal", avatar: "🧺", textEn: "He won't be able to come in the morning, but he will be there by lunchtime.", textHi: "वह सुबह नहीं आ पाएगा, लेकिन दोपहर के भोजन तक वहाँ पहुँच जाएगा।" },
      { speaker: "Divya", avatar: "☀️", textEn: "I will prepare fresh cucumber sandwiches and chilled iced lemonade.", textHi: "मैं ताज़ा खीरे के सैंडविच और ठंडा आइस्ड नींबू पानी तैयार करूँगी।" },
      { speaker: "Kunal", avatar: "🧺", textEn: "The open park will be peaceful and refreshing for all of us.", textHi: "खुला पार्क हम सभी के लिए बहुत शांतिपूर्ण और ताज़गी भरा रहेगा।" },
      { speaker: "Divya", avatar: "☀️", textEn: "Tomorrow will definitely be a memorable and relaxing Sunday.", textHi: "कल का दिन निश्चित रूप से एक यादगार और सुकून भरा रविवार होगा।" }
    ]
  },
  {
    id: "d07_sc03",
    title: "Discussing Career Aspirations: Where We Will Be in Five Years",
    titleHi: "करियर की आकांक्षाएं: पाँच वर्षों में हम कहाँ होंगे",
    context: "Two ambitious young professionals, Tarun and Shreya, share their five-year professional roadmaps.",
    situation: "Future career visions using 'will be'",
    characters: ["Tarun", "Shreya"],
    turns: [
      { speaker: "Tarun", avatar: "🚀", textEn: "Shreya, where do you think you will be five years from today?", textHi: "श्रेया, तुम्हें क्या लगता है कि आज से पाँच साल बाद तुम कहाँ होगी?" },
      { speaker: "Shreya", avatar: "👩‍💼", textEn: "In five years, I will be leading an artificial intelligence product division.", textHi: "पाँच साल में, मैं एक आर्टिफिशियल इंटेलिजेंस उत्पाद प्रभाग का नेतृत्व कर रही हूँगी।" },
      { speaker: "Tarun", avatar: "🚀", textEn: "That is an ambitious goal! Will you be managing global international teams?", textHi: "यह एक बहुत बड़ा लक्ष्य है! क्या तुम अंतरराष्ट्रीय टीमों का प्रबंधन करोगी?" },
      { speaker: "Shreya", avatar: "👩‍💼", textEn: "Yes, I will be working closely with cross-functional engineering teams across continents.", textHi: "हाँ, मैं विभिन्न महाद्वीपों में फैली इंजीनियरिंग टीमों के साथ मिलकर काम करूँगी।" },
      { speaker: "Tarun", avatar: "🚀", textEn: "I believe I will be the founder of my own sustainable clean-tech enterprise.", textHi: "मुझे विश्वास है कि मैं अपने स्वयं के स्वच्छ ऊर्जा उद्यम का संस्थापक बनूँगा।" },
      { speaker: "Shreya", avatar: "👩‍💼", textEn: "Will your startup be focused on solar battery storage systems?", textHi: "क्या तुम्हारा स्टार्टअप सौर बैटरी भंडारण प्रणालियों पर केंद्रित होगा?" },
      { speaker: "Tarun", avatar: "🚀", textEn: "Yes, renewable decentralized power will be the cornerstone of future energy.", textHi: "हाँ, विकेंद्रीकृत नवीकरणीय ऊर्जा भविष्य की ऊर्जा का आधार स्तंभ होगी।" },
      { speaker: "Shreya", avatar: "👩‍💼", textEn: "Our skills will be much more refined and seasoned by then.", textHi: "तब तक हमारे कौशल कहीं अधिक परिपक्व और निखरे हुए होंगे।" },
      { speaker: "Tarun", avatar: "🚀", textEn: "The continuous learning we do today will be the foundation of tomorrow's success.", textHi: "आज हम जो निरंतर सीख रहे हैं, वही कल की सफलता की नींव बनेगा।" },
      { speaker: "Shreya", avatar: "👩‍💼", textEn: "We will be proud of how far we have traveled together!", textHi: "हमने साथ मिलकर कितनी लंबी यात्रा तय की, इस पर हमें गर्व होगा!" }
    ]
  },
  {
    id: "d07_sc04",
    title: "Preparing Readiness for Next Saturday's Housewarming",
    titleHi: "अगले शनिवार के गृह प्रवेश समारोह की तैयारियों पर चर्चा",
    context: "Husband and wife, Manish and Pooja, plan the logistics for their upcoming housewarming puja.",
    situation: "Future party preparations using 'will be', 'won't be'",
    characters: ["Manish", "Pooja"],
    turns: [
      { speaker: "Manish", avatar: "🏡", textEn: "Pooja, will the interior wood polishing be finished before Thursday?", textHi: "पूजा, क्या गुरुवार से पहले लकड़ी की पॉलिश का काम पूरा हो जाएगा?" },
      { speaker: "Pooja", avatar: "🛋️", textEn: "Yes, the carpenters promised that everything will be fully completed by Wednesday evening.", textHi: "हाँ, बढ़ई ने वादा किया है कि बुधवार शाम तक सब कुछ पूरी तरह समाप्त हो जाएगा।" },
      { speaker: "Manish", avatar: "🏡", textEn: "Will the priest be available at seven in the morning for the sacred ceremony?", textHi: "क्या पवित्र पूजा के लिए पंडित जी सुबह सात बजे उपलब्ध रहेंगे?" },
      { speaker: "Pooja", avatar: "🛋️", textEn: "Yes, Pandit ji confirmed that he will be here at 6:45 AM sharp.", textHi: "हाँ, पंडित जी ने पुष्टि की है कि वे ठीक सुबह 6:45 बजे यहाँ उपस्थित रहेंगे।" },
      { speaker: "Manish", avatar: "🏡", textEn: "How many guests will be attending the traditional lunch?", textHi: "पारंपरिक दोपहर के भोज में लगभग कितने मेहमान शामिल होंगे?" },
      { speaker: "Pooja", avatar: "🛋️", textEn: "Around fifty relatives and close friends will be present.", textHi: "लगभग पचास रिश्तेदार और करीबी दोस्त मौजूद रहेंगे।" },
      { speaker: "Manish", avatar: "🏡", textEn: "Will the catering staff be setting up buffet tables in the garden courtyard?", textHi: "क्या कैटरिंग स्टाफ़ बगीचे के आंगन में बुफ़े टेबल लगाएगा?" },
      { speaker: "Pooja", avatar: "🛋️", textEn: "Yes, the garden will be decorated with marigold garlands and brass lamps.", textHi: "हाँ, बगीचे को गेंदे के फूलों की मालाओं और पीतल के दीयों से सजाया जाएगा।" },
      { speaker: "Manish", avatar: "🏡", textEn: "It will be such a joyous blessing to welcome our loved ones into our new home.", textHi: "अपने प्रियजनों का अपने नए घर में स्वागत करना कितना आनंदमय और मंगलकारी होगा।" },
      { speaker: "Pooja", avatar: "🛋️", textEn: "Everything will be smooth, peaceful, and filled with happiness.", textHi: "सब कुछ बहुत सुचारू, शांतिपूर्ण और खुशियों से भरा होगा।" }
    ]
  },
  {
    id: "d07_sc05",
    title: "Scheduling Building Maintenance Work for Next Month",
    titleHi: "अगले महीने इमारत के रखरखाव कार्य की योजना",
    context: "Society president Mr. Joshi discusses lift modernization with maintenance contractor Mr. Rawat.",
    situation: "Future maintenance timelines with 'will be', 'won't be'",
    characters: ["Mr. Joshi", "Mr. Rawat"],
    turns: [
      { speaker: "Mr. Joshi", avatar: "🏢", textEn: "Mr. Rawat, when will the replacement elevator parts be delivered to our building?", textHi: "श्रीमान रावत, हमारी इमारत के लिए नई लिफ़्ट के पुर्ज़े कब तक पहुँचाए जाएँगे?" },
      { speaker: "Mr. Rawat", avatar: "🔧", textEn: "The heavy motor units will be on-site by the 10th of next month.", textHi: "भारी मोटर इकाइयाँ अगले महीने की 10 तारीख तक यहाँ पहुँच जाएँगी।" },
      { speaker: "Mr. Joshi", avatar: "🏢", textEn: "Will the passenger lift be completely out of service during the overhaul?", textHi: "क्या मरम्मत के दौरान पैसेंजर लिफ़्ट पूरी तरह से बंद रहेगी?" },
      { speaker: "Mr. Rawat", avatar: "🔧", textEn: "Yes, lift A will be non-operational for four days, but lift B will be running normally.", textHi: "जी हाँ, लिफ़्ट ए चार दिनों के लिए बंद रहेगी, लेकिन लिफ़्ट बी सामान्य रूप से चलती रहेगी।" },
      { speaker: "Mr. Joshi", avatar: "🏢", textEn: "Residents won't be inconvenienced if one elevator remains continuously operational.", textHi: "यदि एक लिफ़्ट लगातार चालू रहती है तो निवासियों को असुविधा नहीं होगी।" },
      { speaker: "Mr. Rawat", avatar: "🔧", textEn: "Our technical engineers will be working around the clock to speed up the process.", textHi: "हमारे इंजीनियर काम में तेज़ी लाने के लिए चौबीसों घंटे काम करेंगे।" },
      { speaker: "Mr. Joshi", avatar: "🏢", textEn: "Will the new control system be energy efficient?", textHi: "क्या नया नियंत्रण सिस्टम बिजली की बचत करने वाला होगा?" },
      { speaker: "Mr. Rawat", avatar: "🔧", textEn: "Yes, electricity consumption will be reduced by thirty-five percent.", textHi: "जी हाँ, बिजली की खपत में पैंतीस प्रतिशत की कमी आएगी।" },
      { speaker: "Mr. Joshi", avatar: "🏢", textEn: "The managing committee will be very pleased with these efficiency savings.", textHi: "प्रबंध समिति इन बचत परिणामों से बहुत प्रसन्न होगी।" },
      { speaker: "Mr. Rawat", avatar: "🔧", textEn: "The modernized system will be safer, smoother, and much faster.", textHi: "आधुनिक प्रणाली अधिक सुरक्षित, सुगम और काफ़ी तेज़ होगी।" }
    ]
  },
  {
    id: "d07_sc06",
    title: "Discussing Festival Celebrations and Holiday Office Closures",
    titleHi: "त्योहारी छुट्टियों और कार्यालय बंद रहने पर चर्चा",
    context: "Two colleagues, Vandana and Karthik, discuss holiday arrangements for Diwali.",
    situation: "Holiday schedules using 'will be', 'won't be'",
    characters: ["Vandana", "Karthik"],
    turns: [
      { speaker: "Vandana", avatar: "🪔", textEn: "Karthik, will our corporate office be closed for four full days during Diwali?", textHi: "कार्तिक, क्या दिवाली पर हमारा कॉर्पोरेट ऑफ़िस पूरे चार दिन बंद रहेगा?" },
      { speaker: "Karthik", avatar: "🎉", textEn: "Yes, the office will be closed from Thursday through Sunday.", textHi: "हाँ, ऑफ़िस गुरुवार से रविवार तक पूरी तरह बंद रहेगा।" },
      { speaker: "Vandana", avatar: "🪔", textEn: "Will you be traveling to your hometown in Kerala to celebrate with your parents?", textHi: "क्या तुम अपने माता-पिता के साथ त्योहार मनाने केरल अपने गृहनगर जाओगे?" },
      { speaker: "Karthik", avatar: "🎉", textEn: "Yes! I will be flying to Kochi on Wednesday night.", textHi: "हाँ! मैं बुधवार रात को कोच्चि के लिए उड़ान भरूँगा।" },
      { speaker: "Vandana", avatar: "🪔", textEn: "The flights will be quite packed during the festive rush.", textHi: "त्योहारी भीड़ के दौरान उड़ानों में काफ़ी भीड़ रहेगी।" },
      { speaker: "Karthik", avatar: "🎉", textEn: "I booked my flight tickets three months ago, so my seat reservation is secure.", textHi: "मैंने तीन महीने पहले ही टिकट बुक कर ली थी, इसलिए मेरी सीट पक्की है।" },
      { speaker: "Vandana", avatar: "🪔", textEn: "We will be hosting a festive sweet exchange and dinner at our home on Friday.", textHi: "हम शुक्रवार को अपने घर पर पारंपरिक मिठाई वितरण और रात्रिभोज का आयोजन करेंगे।" },
      { speaker: "Karthik", avatar: "🎉", textEn: "The festive atmosphere and glowing clay lamps will be magical throughout the city.", textHi: "पूरे शहर में उत्सव का माहौल और जगमगाते मिट्टी के दीये जादुई दिखेंगे।" },
      { speaker: "Vandana", avatar: "🪔", textEn: "Everyone will be cheerful and refreshed when we return to work on Monday.", textHi: "सोमवार को काम पर लौटने पर हर कोई खुशमिज़ाज और तरोताज़ा महसूस करेगा।" },
      { speaker: "Karthik", avatar: "🎉", textEn: "It will be a heartwarming family celebration for all of us.", textHi: "यह हम सभी के लिए एक सुखद पारिवारिक उत्सव होगा।" }
    ]
  },
  {
    id: "d07_sc07",
    title: "Planning an International Family Vacation Itinerary",
    titleHi: "अंतरराष्ट्रीय पारिवारिक अवकाश की समय-सारणी की योजना",
    context: "Sanjay and Ritu review travel dates for their planned trip to Singapore.",
    situation: "Future vacation plans using 'will be'",
    characters: ["Sanjay", "Ritu"],
    turns: [
      { speaker: "Sanjay", avatar: "✈️", textEn: "Ritu, our flight to Singapore will be departing at midnight on the 15th.", textHi: "रितु, सिंगापुर के लिए हमारी उड़ान 15 तारीख की मध्यरात्रि को रवाना होगी।" },
      { speaker: "Ritu", avatar: "🌴", textEn: "Will the children be able to sleep comfortably during the night flight?", textHi: "क्या रात की उड़ान के दौरान बच्चे आराम से सो सकेंगे?" },
      { speaker: "Sanjay", avatar: "✈️", textEn: "Yes, it is a direct five-hour flight, so they will be asleep for most of the journey.", textHi: "हाँ, यह पाँच घंटे की सीधी उड़ान है, इसलिए वे अधिकांश यात्रा में सोते रहेंगे।" },
      { speaker: "Ritu", avatar: "🌴", textEn: "Where will our hotel be located?", textHi: "हमारा होटल कहाँ स्थित होगा?" },
      { speaker: "Sanjay", avatar: "✈️", textEn: "Our hotel will be in Marina Bay, right near the botanical gardens and metro line.", textHi: "हमारा होटल मरीना बे में होगा, बॉटनिकल गार्डन और मेट्रो लाइन के बिल्कुल पास।" },
      { speaker: "Ritu", avatar: "🌴", textEn: "Will the tourist attractions be crowded on weekends?", textHi: "क्या सप्ताहांत में पर्यटन स्थलों पर बहुत भीड़ रहेगी?" },
      { speaker: "Sanjay", avatar: "✈️", textEn: "Universal Studios will be busy on Saturday, so we will visit Sentosa Island on Friday morning.", textHi: "शनिवार को यूनिवर्सल स्टूडियो में भीड़ रहेगी, इसलिए हम शुक्रवार सुबह सेंटोसा द्वीप जाएँगे।" },
      { speaker: "Ritu", avatar: "🌴", textEn: "The night safari experience will be thrilling for the kids.", textHi: "नाइट सफ़ारी का अनुभव बच्चों के लिए बहुत रोमांचक रहेगा।" },
      { speaker: "Sanjay", avatar: "✈️", textEn: "This international vacation will be an unforgettable adventure for the whole family.", textHi: "यह अंतरराष्ट्रीय अवकाश पूरे परिवार के लिए एक अविस्मरणीय रोमांच साबित होगा।" },
      { speaker: "Ritu", avatar: "🌴", textEn: "We will be counting down the days until departure!", textHi: "हम रवानगी के दिनों की उल्टी गिनती कर रहे होंगे!" }
    ]
  },
  {
    id: "d07_sc08",
    title: "Discussing University Graduation and Future Employment",
    titleHi: "विश्वविद्यालय दीक्षांत समारोह और भविष्य के रोज़गार पर चर्चा",
    context: "Two final-year students, Harsh and Neha, discuss their impending graduation and job market prospects.",
    situation: "Future milestones using 'will be', 'won't be'",
    characters: ["Harsh", "Neha"],
    turns: [
      { speaker: "Harsh", avatar: "🎓", textEn: "Neha, our convocation ceremony will be held in the main university auditorium next month!", textHi: "नेहा, हमारा दीक्षांत समारोह अगले महीने मुख्य विश्वविद्यालय सभागार में आयोजित किया जाएगा!" },
      { speaker: "Neha", avatar: "👩‍🎓", textEn: "I can't believe four years of engineering will be officially completed so soon!", textHi: "मुझे यकीन नहीं हो रहा कि चार साल की इंजीनियरिंग इतनी जल्दी पूरी हो जाएगी!" },
      { speaker: "Harsh", avatar: "🎓", textEn: "Will your parents be traveling from Jaipur to attend the convocation?", textHi: "क्या तुम्हारे माता-पिता दीक्षांत समारोह में शामिल होने के लिए जयपुर से आएँगे?" },
      { speaker: "Neha", avatar: "👩‍🎓", textEn: "Yes, both my parents and my grandmother will be seated in the family gallery.", textHi: "हाँ, मेरे माता-पिता और मेरी दादी दोनों फ़ैमिली गैलरी में उपस्थित रहेंगे।" },
      { speaker: "Harsh", avatar: "🎓", textEn: "When will your corporate joining date be at the tech firm in Bengaluru?", textHi: "बेंगलुरु की टेक फ़र्म में तुम्हारी नौकरी शुरू होने की तारीख कब होगी?" },
      { speaker: "Neha", avatar: "👩‍🎓", textEn: "My formal orientation will be on the first of July.", textHi: "मेरा औपचारिक ओरिएंटेशन एक जुलाई को होगा।" },
      { speaker: "Harsh", avatar: "🎓", textEn: "You will be working on cloud architecture systems, right?", textHi: "तुम क्लाउड आर्किटेक्चर सिस्टम पर काम करोगी, सही ना?" },
      { speaker: "Neha", avatar: "👩‍🎓", textEn: "Yes, exactly! And what about you? Where will you be based?", textHi: "हाँ, बिल्कुल! और तुम्हारा क्या? तुम कहाँ पोस्टेड रहोगे?" },
      { speaker: "Harsh", avatar: "🎓", textEn: "I will be in Pune working on embedded IoT robotics.", textHi: "मैं पुणे में एम्बेडेड आईओटी रोबोटिक्स पर काम करूँगा।" },
      { speaker: "Neha", avatar: "👩‍🎓", textEn: "We will all be stepping into exciting new chapters of life.", textHi: "हम सभी जीवन के रोमांचक नए अध्यायों में कदम रख रहे होंगे।" }
    ]
  },
  {
    id: "d07_sc09",
    title: "Tracking Online Delivery Timelines with Customer Support",
    titleHi: "ऑनलाइन पार्सल डिलीवरी की स्थिति और समय पर चर्चा",
    context: "A customer, Alok, chats with an e-commerce courier dispatcher, Sunita, regarding a critical package.",
    situation: "Future delivery estimates with 'will be', 'won't be'",
    characters: ["Customer Alok", "Courier Dispatcher Sunita"],
    turns: [
      { speaker: "Customer Alok", avatar: "📦", textEn: "Hello! When will my express delivery package be delivered to my address?", textHi: "नमस्ते! मेरा एक्सप्रेस पार्सल मेरे पते पर कब तक डिलीवर होगा?" },
      { speaker: "Courier Dispatcher Sunita", avatar: "🚚", textEn: "Good afternoon, sir. Your parcel will be out for delivery by 2 PM today.", textHi: "शुभ दोपहर, सर। आपका पार्सल आज दोपहर 2 बजे तक डिलीवरी के लिए निकल जाएगा।" },
      { speaker: "Customer Alok", avatar: "📦", textEn: "Will the delivery associate be calling before arriving at my apartment?", textHi: "क्या डिलीवरी वाला मेरे फ्लैट पर पहुँचने से पहले फ़ोन करेगा?" },
      { speaker: "Courier Dispatcher Sunita", avatar: "🚚", textEn: "Yes, the driver will be sending an automated SMS alert and will call you upon arrival.", textHi: "हाँ, ड्राइवर एक ऑटोमेटेड एसएमएस भेजेगा और पहुँचने पर आपको कॉल करेगा।" },
      { speaker: "Customer Alok", avatar: "📦", textEn: "I won't be at home between 3 PM and 4 PM. Will that be a problem?", textHi: "मैं दोपहर 3 से 4 बजे के बीच घर पर नहीं रहूँगा। क्या इससे कोई समस्या होगी?" },
      { speaker: "Courier Dispatcher Sunita", avatar: "🚚", textEn: "Not at all. You can authorize your building security guard to receive the box.", textHi: "बिल्कुल नहीं। आप अपनी इमारत के सुरक्षा गार्ड को पार्सल लेने के लिए अधिकृत कर सकते हैं।" },
      { speaker: "Customer Alok", avatar: "📦", textEn: "Will a digital OTP be required for security verification?", textHi: "क्या सुरक्षा सत्यापन के लिए डिजिटल ओटीपी की आवश्यकता होगी?" },
      { speaker: "Courier Dispatcher Sunita", avatar: "🚚", textEn: "Yes, a four-digit verification code will be sent to your phone.", textHi: "हाँ, आपके फ़ोन पर चार अंकों का सत्यापन कोड भेजा जाएगा।" },
      { speaker: "Customer Alok", avatar: "📦", textEn: "I will forward the OTP to the security desk. Thank you for your assistance.", textHi: "मैं ओटीपी सुरक्षा गार्ड को भेज दूँगा। आपकी सहायता के लिए धन्यवाद।" },
      { speaker: "Courier Dispatcher Sunita", avatar: "🚚", textEn: "Your package will be safely delivered today. Have a wonderful afternoon!", textHi: "आपका पैकेज आज सुरक्षित रूप से पहुँच जाएगा। आपकी दोपहर शुभ रहे!" }
    ]
  },
  {
    id: "d07_sc10",
    title: "Confirming Venue Setup for an Upcoming Wedding Reception",
    titleHi: "आगामी विवाह समारोह के लिए स्थल की तैयारी की पुष्टि",
    context: "Event organizer Deepak and the banquet manager Mr. Chopra review the final setup details.",
    situation: "Future banquet setup using 'will be'",
    characters: ["Deepak", "Mr. Chopra"],
    turns: [
      { speaker: "Deepak", avatar: "💐", textEn: "Mr. Chopra, will the banquet hall lighting be fully tested by Friday evening?", textHi: "श्रीमान चोपड़ा, क्या शुक्रवार शाम तक बैंक्वेट हॉल की लाइटिंग की पूरी जाँच हो जाएगी?" },
      { speaker: "Mr. Chopra", avatar: "🏨", textEn: "Yes, Deepak. All crystal chandeliers, stage spotlights, and sound amplifiers will be operational by 5 PM.", textHi: "हाँ दीपक। शाम 5 बजे तक सभी झाड़-फ़ानूस, स्टेज की लाइटें और साउंड सिस्टम चालू हो जाएँगे।" },
      { speaker: "Deepak", avatar: "💐", textEn: "Will the floral arch at the grand entrance be ready with fresh red roses?", textHi: "क्या मुख्य प्रवेश द्वार पर ताज़े लाल गुलाबों से बना फूलों का तोरणद्वार तैयार रहेगा?" },
      { speaker: "Mr. Chopra", avatar: "🏨", textEn: "Our florists will be decorating the entranceway starting at noon on Saturday.", textHi: "हमारे फूल विक्रेता शनिवार दोपहर से ही प्रवेश द्वार को सजाना शुरू कर देंगे।" },
      { speaker: "Deepak", avatar: "💐", textEn: "How many live food stations will be operating in the outdoor lawn?", textHi: "बाहर के लॉन में कितने लाइव फ़ूड काउंटर चालू रहेंगे?" },
      { speaker: "Mr. Chopra", avatar: "🏨", textEn: "There will be eight live counters, including wood-fired pizzas, chaat, and tandoori delicacies.", textHi: "आठ लाइव काउंटर होंगे, जिनमें पिज़्ज़ा, चाट और तंदूरी व्यंजन शामिल हैं।" },
      { speaker: "Deepak", avatar: "💐", textEn: "Will there be adequate valet parking attendants at the main gate?", textHi: "क्या मेन गेट पर पर्याप्त वैले पार्किंग कर्मचारी उपस्थित रहेंगे?" },
      { speaker: "Mr. Chopra", avatar: "🏨", textEn: "Twelve uniformed valet drivers will be managing vehicle parking smoothly.", textHi: "बारह वर्दीधारी ड्राइवर गाड़ियों की पार्किंग का सुचारू रूप से प्रबंधन करेंगे।" },
      { speaker: "Deepak", avatar: "💐", textEn: "The wedding reception will be a truly magnificent and joyous celebration.", textHi: "शादी का यह रिसेप्शन सचमुच एक भव्य और आनंदमय उत्सव होगा।" },
      { speaker: "Mr. Chopra", avatar: "🏨", textEn: "We will ensure that every single moment will be flawless for the newlyweds and their families.", textHi: "हम सुनिश्चित करेंगे कि नवविवाहित जोड़े और उनके परिवारों के लिए हर पल त्रुटिहीन और शानदार रहे।" }
    ]
  }
];
