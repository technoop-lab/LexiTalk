// Stage 1 Day 5: 10 Distinct Long-Form Dialogues (Present State of Being: Is / Am / Are)
// Focus: I am, You are, He is, She is, It is, We are, They are, Isn't, Aren't, Questions: Are you? Is he?

export const day5Dialogues = [
  {
    id: "d05_sc01",
    title: "Introducing Family Members and Their Professions to a Houseguest",
    titleHi: "घर आए मेहमान को परिवार के सदस्यों और उनके व्यवसायों का परिचय",
    context: "Rohan introduces his family members to his college friend Alok who is visiting for the weekend.",
    situation: "Family introductions using copular 'is', 'am', 'are'",
    characters: ["Rohan", "Alok"],
    turns: [
      { speaker: "Rohan", avatar: "👨", textEn: "Alok, I am so delighted that you are here at our home!", textHi: "आलोक, मुझे बहुत खुशी है कि तुम हमारे घर आए हो!" },
      { speaker: "Alok", avatar: "🧑", textEn: "Thank you, Rohan! Your house is lovely and very peaceful.", textHi: "धन्यवाद, रोहन! तुम्हारा घर बहुत प्यारा और काफ़ी शांत है।" },
      { speaker: "Rohan", avatar: "👨", textEn: "Let me introduce my family to you. This is my father, Mr. Harish Sharma.", textHi: "मैं तुम्हारा अपने परिवार से परिचय कराता हूँ। यह मेरे पिताजी हैं, श्री हरीश शर्मा।" },
      { speaker: "Alok", avatar: "🧑", textEn: "Namaste, Uncle! It is an honor to meet you.", textHi: "नमस्ते अंकल! आपसे मिलकर बहुत प्रसन्नता हुई।" },
      { speaker: "Rohan", avatar: "👨", textEn: "He is a civil engineer with the state public works department.", textHi: "वह राज्य लोक निर्माण विभाग में सिविल इंजीनियर हैं।" },
      { speaker: "Alok", avatar: "🧑", textEn: "That is fascinating! Is he involved in large bridge construction projects?", textHi: "यह तो बहुत दिलचस्प है! क्या वे बड़े पुल निर्माण परियोजनाओं में शामिल हैं?" },
      { speaker: "Rohan", avatar: "👨", textEn: "Yes, he is currently the chief supervising engineer for the new river bypass.", textHi: "हाँ, वह वर्तमान में नए नदी बाईपास के मुख्य पर्यवेक्षी इंजीनियर हैं।" },
      { speaker: "Alok", avatar: "🧑", textEn: "And who is that reading near the garden patio?", textHi: "और बगीचे के पास बैठकर कौन पढ़ रही हैं?" },
      { speaker: "Rohan", avatar: "👨", textEn: "She is my mother, Sunita. She is a senior high school mathematics teacher.", textHi: "वह मेरी माताजी, सुनीता हैं। वह एक सीनियर हाई स्कूल गणित की शिक्षिका हैं।" },
      { speaker: "Alok", avatar: "🧑", textEn: "Her students are very fortunate. Mathematics is a challenging subject!", textHi: "उनके विद्यार्थी बहुत भाग्यशाली हैं। गणित एक चुनौतीपूर्ण विषय है!" },
      { speaker: "Rohan", avatar: "👨", textEn: "These two energetic kids playing in the corner are my younger cousins, Vicky and Priya.", textHi: "कोने में खेल रहे ये दो चंचल बच्चे मेरे छोटे चचेरे भाई-बहन, विक्की और प्रिया हैं।" },
      { speaker: "Alok", avatar: "🧑", textEn: "They are very lively! Are they in primary school?", textHi: "वे बहुत ऊर्जावान हैं! क्या वे प्राथमिक विद्यालय में पढ़ते हैं?" },
      { speaker: "Rohan", avatar: "👨", textEn: "Yes, Vicky is in fourth grade and Priya is in second grade.", textHi: "हाँ, विक्की चौथी कक्षा में है और प्रिया दूसरी कक्षा में है।" },
      { speaker: "Alok", avatar: "🧑", textEn: "We are truly blessed with such a warm and welcoming family environment here.", textHi: "यहाँ इतने गर्मजोशी और प्यार भरे पारिवारिक माहौल में आकर हम सचमुच धन्य महसूस कर रहे हैं।" },
      { speaker: "Rohan", avatar: "👨", textEn: "We are all happy to have you stay with us this weekend!", textHi: "इस वीकेंड तुम्हारा हमारे साथ रुकना हम सभी के लिए बहुत खुशी की बात है!" }
    ]
  },
  {
    id: "d05_sc02",
    title: "Expressing Physical States and Needs at the Office",
    titleHi: "कार्यालय में शारीरिक स्थिति और ज़रूरतों को व्यक्त करना",
    context: "Two coworkers, Neha and Pankaj, discuss how they feel during a long workday afternoon.",
    situation: "Describing physical feelings with 'am', 'is', 'are'",
    characters: ["Neha", "Pankaj"],
    turns: [
      { speaker: "Neha", avatar: "👩‍💼", textEn: "Pankaj, are you ready for the financial presentation at three?", textHi: "पंकज, क्या तुम तीन बजे के वित्तीय प्रेजेंटेशन के लिए तैयार हो?" },
      { speaker: "Pankaj", avatar: "👨‍💼", textEn: "I am almost ready, but to be honest, I am extremely tired and sleepy.", textHi: "मैं लगभग तैयार हूँ, लेकिन सच कहूँ तो, मैं बहुत थका हुआ और नींद में हूँ।" },
      { speaker: "Neha", avatar: "👩‍💼", textEn: "You look exhausted! Is everything alright?", textHi: "तुम काफ़ी थके हुए दिख रहे हो! क्या सब ठीक है?" },
      { speaker: "Pankaj", avatar: "👨‍💼", textEn: "I am fine, but I was awake until 2 AM finishing the quarterly spreadsheet.", textHi: "मैं ठीक हूँ, लेकिन तिमाही स्प्रेडशीट पूरी करने के लिए मैं रात दो बजे तक जाग रहा था।" },
      { speaker: "Neha", avatar: "👩‍💼", textEn: "That is too late! Are you hungry as well?", textHi: "यह तो बहुत देर हो गई! क्या तुम्हें भूख भी लगी है?" },
      { speaker: "Pankaj", avatar: "👨‍💼", textEn: "Yes, I am starving. I skipped breakfast this morning.", textHi: "हाँ, मुझे बहुत ज़ोर की भूख लगी है। आज सुबह मैंने नाश्ता छोड़ दिया था।" },
      { speaker: "Neha", avatar: "👩‍💼", textEn: "I am hungry too. The cafeteria on the fourth floor is open right now.", textHi: "मुझे भी भूख लगी है। चौथी मंज़िल का कैफ़ेटेरिया अभी खुला है।" },
      { speaker: "Pankaj", avatar: "👨‍💼", textEn: "Is their south Indian filter coffee fresh at this hour?", textHi: "क्या इस समय उनकी दक्षिण भारतीय फ़िल्टर कॉफ़ी ताज़ा मिलती है?" },
      { speaker: "Neha", avatar: "👩‍💼", textEn: "Yes, it is very hot and fresh. Their steamed idlis are also delicious.", textHi: "हाँ, वह बहुत गर्म और ताज़ा है। उनकी इडली भी बहुत स्वादिष्ट हैं।" },
      { speaker: "Pankaj", avatar: "👨‍💼", textEn: "We are only ten minutes away from the meeting, so a quick snack is a great idea.", textHi: "मीटिंग शुरू होने में केवल दस मिनट बाकी हैं, इसलिए एक त्वरित नाश्ता बहुत बढ़िया विचार है।" },
      { speaker: "Neha", avatar: "👩‍💼", textEn: "Let's go! A hot cup of coffee is the best remedy when you are fatigued.", textHi: "चलो चलें! जब आप थके हों तो गर्म कॉफ़ी सबसे अच्छा इलाज है।" }
    ]
  },
  {
    id: "d05_sc03",
    title: "Inquiring About Room Availability at a Mountain Resort",
    titleHi: "पर्वतीय रिसॉर्ट में कमरों की स्थिति और सुविधाओं की पूछताछ",
    context: "A tourist, Divya, calls a resort manager, Mr. Rawat, to check room conditions.",
    situation: "Hotel inquiries using 'is', 'are', 'isn't'",
    characters: ["Divya", "Mr. Rawat"],
    turns: [
      { speaker: "Divya", avatar: "📞", textEn: "Hello! Is this the Pine View Mountain Resort in Manali?", textHi: "नमस्ते! क्या यह मनाली का पाइन व्यू माउंटेन रिसॉर्ट है?" },
      { speaker: "Mr. Rawat", avatar: "🏨", textEn: "Yes, it is! Good afternoon, ma'am. How may I assist you today?", textHi: "जी हाँ, बिल्कुल! शुभ दोपहर मैम। आज मैं आपकी क्या सहायता कर सकता हूँ?" },
      { speaker: "Divya", avatar: "📞", textEn: "Are there deluxe valley-view rooms available for next weekend?", textHi: "क्या अगले वीकेंड के लिए डीलक्स वैली-व्यू कमरे उपलब्ध हैं?" },
      { speaker: "Mr. Rawat", avatar: "🏨", textEn: "Yes, they are available. We currently have three deluxe cottages open.", textHi: "जी हाँ, वे उपलब्ध हैं। हमारे पास वर्तमान में तीन डीलक्स कॉटेज खाली हैं।" },
      { speaker: "Divya", avatar: "📞", textEn: "Is the heating system fully operational in each cottage?", textHi: "क्या प्रत्येक कॉटेज में हीटिंग सिस्टम पूरी तरह काम कर रहा है?" },
      { speaker: "Mr. Rawat", avatar: "🏨", textEn: "Yes, it is. The rooms are equipped with centralized oil heaters and hot water geysers.", textHi: "जी हाँ, बिल्कुल। कमरे सेंट्रलाइज़्ड ऑयल हीटर और गर्म पानी के गीज़र से सुसज्जित हैं।" },
      { speaker: "Divya", avatar: "📞", textEn: "That is wonderful. Is breakfast included in the package?", textHi: "यह तो बहुत अच्छी बात है। क्या पैकेज में नाश्ता शामिल है?" },
      { speaker: "Mr. Rawat", avatar: "🏨", textEn: "Yes, a complimentary organic buffet breakfast is part of the reservation.", textHi: "जी हाँ, मुफ़्त जैविक बुफ़े नाश्ता आरक्षण का हिस्सा है।" },
      { speaker: "Divya", avatar: "📞", textEn: "Are pets allowed on the property?", textHi: "क्या रिसॉर्ट में पालतू जानवरों को लाने की अनुमति है?" },
      { speaker: "Mr. Rawat", avatar: "🏨", textEn: "No, pets aren't permitted inside the resort cottages, unfortunately.", textHi: "नहीं, दुर्भाग्य से रिसॉर्ट के कॉटेज में पालतू जानवरों की अनुमति नहीं है।" },
      { speaker: "Divya", avatar: "📞", textEn: "That is completely fine. We are traveling as a group of four adults.", textHi: "यह बिल्कुल ठीक है। हम चार वयस्कों के समूह में यात्रा कर रहे हैं।" },
      { speaker: "Mr. Rawat", avatar: "🏨", textEn: "Our duplex villa is ideal for four adults. It is spacious and has two balconies.", textHi: "हमारा डुप्लेक्स विला चार वयस्कों के लिए आदर्श है। यह विशाल है और इसमें दो बालकनियाँ हैं।" },
      { speaker: "Divya", avatar: "📞", textEn: "That is perfect! Please reserve the duplex villa under the name Divya Sen.", textHi: "यह बिल्कुल सही है! कृपया दिव्या सेन के नाम से डुप्लेक्स विला आरक्षित कर दीजिए।" }
    ]
  },
  {
    id: "d05_sc04",
    title: "Discussing Team Roles in a Newly Formed Project Group",
    titleHi: "नए प्रोजेक्ट समूह में सदस्यों की भूमिकाओं पर चर्चा",
    context: "Four college students clarify each other's responsibilities for their final term project.",
    situation: "Describing identities and roles using 'is', 'am', 'are'",
    characters: ["Kavita", "Deepak"],
    turns: [
      { speaker: "Kavita", avatar: "👩‍🎓", textEn: "Deepak, let's confirm everyone's official role on this project team.", textHi: "दीपक, चलो इस प्रोजेक्ट टीम में सभी की आधिकारिक भूमिका की पुष्टि कर लेते हैं।" },
      { speaker: "Deepak", avatar: "👨‍🎓", textEn: "Sure, Kavita. You are the project coordinator and lead researcher, right?", textHi: "ज़रूर कविता। तुम प्रोजेक्ट समन्वयक और मुख्य शोधकर्ता हो, सही ना?" },
      { speaker: "Kavita", avatar: "👩‍🎓", textEn: "Yes, I am responsible for literature review and timeline tracking.", textHi: "हाँ, मैं साहित्य समीक्षा और समय-सीमा पर नज़र रखने के लिए ज़िम्मेदार हूँ।" },
      { speaker: "Deepak", avatar: "👨‍🎓", textEn: "And who is in charge of backend database architecture?", textHi: "और बैकएंड डेटाबेस संरचना का प्रभारी कौन है?" },
      { speaker: "Kavita", avatar: "👩‍🎓", textEn: "Arjun is the database architect. He is exceptionally skilled with SQL queries.", textHi: "अर्जुन डेटाबेस आर्किटेक्ट है। वह एसक्यूएल क्वेरीज़ में असाधारण रूप से कुशल है।" },
      { speaker: "Deepak", avatar: "👨‍🎓", textEn: "That is great. Are Sneha and Pooja on UI design duties?", textHi: "यह तो बहुत बढ़िया है। क्या स्नेहा और पूजा यूआई डिज़ाइन की ज़िम्मेदारी संभाल रही हैं?" },
      { speaker: "Kavita", avatar: "👩‍🎓", textEn: "Yes, they are the frontend designers. Their Figma wireframes are almost complete.", textHi: "हाँ, वे दोनों फ़्रंटएंड डिज़ाइनर हैं। उनके फ़िग्मा वायरफ़्रेम लगभग तैयार हैं।" },
      { speaker: "Deepak", avatar: "👨‍🎓", textEn: "And I am the quality assurance and performance tester.", textHi: "और मैं क्वालिटी एश्योरेंस और परफ़ॉर्मेंस टेस्टर हूँ।" },
      { speaker: "Kavita", avatar: "👩‍🎓", textEn: "Exactly. We are a well-balanced team with complementary skills.", textHi: "बिल्कुल सही। हम पूरक कौशलों वाली एक बहुत ही संतुलित टीम हैं।" },
      { speaker: "Deepak", avatar: "👨‍🎓", textEn: "Our project topic is innovative, and we are ahead of our schedule.", textHi: "हमारा प्रोजेक्ट विषय नवोन्मेषी है, और हम अपने समय-निर्धारण से आगे चल रहे हैं।" }
    ]
  },
  {
    id: "d05_sc05",
    title: "Meeting New Roommates and Talking About Hometowns",
    titleHi: "नए रूममेट्स से मुलाक़ात और अपने शहरों का परिचय",
    context: "Two new hostel roommates, Yash and Aman, introduce where they are from on moving-in day.",
    situation: "Hometowns and backgrounds using 'is', 'am', 'are'",
    characters: ["Yash", "Aman"],
    turns: [
      { speaker: "Yash", avatar: "🧳", textEn: "Hi! I am Yash. I think we are roommates in room 302.", textHi: "नमस्ते! मैं यश हूँ। मुझे लगता है कि हम कमरा 302 में रूममेट हैं।" },
      { speaker: "Aman", avatar: "📦", textEn: "Hello Yash! I am Aman. Welcome! It is nice to meet you.", textHi: "नमस्ते यश! मैं अमन हूँ। स्वागत है! तुमसे मिलकर अच्छा लगा।" },
      { speaker: "Yash", avatar: "🧳", textEn: "Where are you from, Aman?", textHi: "तुम कहाँ के रहने वाले हो, अमन?" },
      { speaker: "Aman", avatar: "📦", textEn: "I am from Bhopal, the city of lakes in Madhya Pradesh. How about you?", textHi: "मैं भोपाल से हूँ, जो मध्य प्रदेश में झीलों का शहर है। तुम कहाँ से हो?" },
      { speaker: "Yash", avatar: "🧳", textEn: "I am from Chandigarh. It is a planned city in northern India.", textHi: "मैं चंडीगढ़ से हूँ। यह उत्तर भारत का एक सुव्यवस्थित नियोजित शहर है।" },
      { speaker: "Aman", avatar: "📦", textEn: "Oh, Chandigarh is famous for its clean wide roads and Rock Garden!", textHi: "अरे, चंडीगढ़ अपनी साफ़ चौड़ी सड़कों और रॉक गार्डन के लिए प्रसिद्ध है!" },
      { speaker: "Yash", avatar: "🧳", textEn: "Yes, it is very green and organized. Is Bhopal very humid in monsoon?", textHi: "हाँ, यह बहुत हरा-भरा और व्यवस्थित है। क्या भोपाल में मानसून में बहुत उमस होती है?" },
      { speaker: "Aman", avatar: "📦", textEn: "It is pleasant during the rains, but summers are quite warm.", textHi: "बारिश के दिनों में मौसम सुहावना होता है, लेकिन गर्मियाँ काफ़ी गर्म होती हैं।" },
      { speaker: "Yash", avatar: "🧳", textEn: "Our hostel room is quite large, and the windows are south-facing.", textHi: "हमारा हॉस्टल का कमरा काफ़ी बड़ा है, और खिड़कियाँ दक्षिण दिशा की ओर हैं।" },
      { speaker: "Aman", avatar: "📦", textEn: "Yes, natural sunlight and cross-ventilation are excellent here.", textHi: "हाँ, यहाँ प्राकृतिक धूप और हवा का आवागमन बहुत बढ़िया है।" }
    ]
  },
  {
    id: "d05_sc06",
    title: "Comparing Weather Conditions Across Different Cities",
    titleHi: "विभिन्न शहरों के वर्तमान मौसम की तुलना",
    context: "Two colleagues on a conference call check the weather in Delhi and Chennai.",
    situation: "Describing conditions and states with 'is', 'isn't'",
    characters: ["Sunil", "Karthik"],
    turns: [
      { speaker: "Sunil", avatar: "🏙️", textEn: "Good morning Karthik! How is the weather in Chennai today?", textHi: "शुभ प्रभात कार्तिक! आज चेन्नई में मौसम कैसा है?" },
      { speaker: "Karthik", avatar: "☀️", textEn: "It is very sunny and humid here. The temperature is thirty-four degrees.", textHi: "यहाँ बहुत तेज़ धूप और उमस है। तापमान चौंतीस डिग्री है।" },
      { speaker: "Sunil", avatar: "🏙️", textEn: "Is it windy along the Marina Beach coast?", textHi: "क्या मरीना बीच के तट पर हवा चल रही है?" },
      { speaker: "Karthik", avatar: "☀️", textEn: "Yes, the coastal breeze is pleasant in the evenings, but afternoons are sweltering.", textHi: "हाँ, शाम के समय तटीय हवा सुहावनी होती है, लेकिन दोपहर बहुत तपिश भरी होती है।" },
      { speaker: "Sunil", avatar: "🏙️", textEn: "Here in Delhi, it is a crisp December morning. The air is chilly.", textHi: "यहाँ दिल्ली में दिसंबर की सुबह में काफ़ी ठंडक है। हवा ठंडी है।" },
      { speaker: "Karthik", avatar: "☀️", textEn: "Is it foggy around the airport area?", textHi: "क्या हवाई अड्डे के आसपास कोहरा छाया हुआ है?" },
      { speaker: "Sunil", avatar: "🏙️", textEn: "No, today it isn't very foggy; visibility is quite decent.", textHi: "नहीं, आज बहुत ज़्यादा कोहरा नहीं है; दृश्यता काफ़ी ठीक है।" },
      { speaker: "Karthik", avatar: "☀️", textEn: "Winter in Delhi is truly lovely when the sun comes out at noon.", textHi: "जब दोपहर में धूप निकलती है तो दिल्ली की सर्दी सचमुच बहुत प्यारी लगती है।" },
      { speaker: "Sunil", avatar: "🏙️", textEn: "Yes, we are all wearing woollen jackets and drinking hot masala chai.", textHi: "हाँ, हम सभी ऊनी जैकेट पहने हुए हैं और गरमा-गरम मसाला चाय पी रहे हैं।" },
      { speaker: "Karthik", avatar: "☀️", textEn: "That sounds cozy! We are drinking fresh tender coconut water here.", textHi: "यह तो बहुत सुकून भरा लगता है! हम यहाँ ताज़ा नारियल पानी पी रहे हैं।" }
    ]
  },
  {
    id: "d05_sc07",
    title: "Describing Animals and Their Traits at an Adoption Shelter",
    titleHi: "पशु आश्रय केंद्र में जानवरों के स्वभाव और उम्र का विवरण",
    context: "A shelter volunteer, Rekha, introduces rescue dogs to an interested adopter, Varun.",
    situation: "Describing traits, age, and nature using 'is', 'are'",
    characters: ["Rekha", "Varun"],
    turns: [
      { speaker: "Rekha", avatar: "🐕", textEn: "Welcome to the Animal Rescue Foundation, Varun! We are happy you are here.", textHi: "एनिमल रेस्क्यू फ़ाउंडेशन में आपका स्वागत है, वरुण! हमें खुशी है कि आप यहाँ आए हैं।" },
      { speaker: "Varun", avatar: "🙋", textEn: "Thank you! I am ready to adopt a friendly companion for my apartment.", textHi: "धन्यवाद! मैं अपने अपार्टमेंट के लिए एक मिलनसार साथी गोद लेने के लिए तैयार हूँ।" },
      { speaker: "Rekha", avatar: "🐕", textEn: "Look at this golden retriever mix. His name is Leo.", textHi: "इस गोल्डन रिट्रीवर मिक्स को देखिए। इसका नाम लियो है।" },
      { speaker: "Varun", avatar: "🙋", textEn: "He is adorable! How old is he?", textHi: "यह बहुत प्यारा है! इसकी उम्र कितनी है?" },
      { speaker: "Rekha", avatar: "🐕", textEn: "He is two years old. He is vaccinated, microchipped, and very gentle.", textHi: "वह दो साल का है। उसका टीकाकरण हो चुका है, माइक्रोचिप लगी है और वह बहुत शांत स्वभाव का है।" },
      { speaker: "Varun", avatar: "🙋", textEn: "Is he good with small children and other dogs?", textHi: "क्या वह छोटे बच्चों और अन्य कुत्तों के साथ अच्छा व्यवहार करता है?" },
      { speaker: "Rekha", avatar: "🐕", textEn: "Yes, he is extremely patient and social. He is never aggressive.", textHi: "हाँ, वह बेहद धैर्यवान और मिलनसार है। वह कभी आक्रामक नहीं होता।" },
      { speaker: "Varun", avatar: "🙋", textEn: "And who is that playful black puppy over there?", textHi: "और वहाँ वह चंचल काला पिल्ला कौन सा है?" },
      { speaker: "Rekha", avatar: "🐕", textEn: "That is Shadow. She is only four months old and she is full of energy!", textHi: "वह शैडो है। वह सिर्फ़ चार महीने की है और ऊर्जा से भरपूर है!" },
      { speaker: "Varun", avatar: "🙋", textEn: "Leo is the perfect match for my calm lifestyle. I am ready to sign the papers!", textHi: "लियो मेरी शांत जीवनशैली के लिए बिल्कुल सही विकल्प है। मैं काग़ज़ात पर हस्ताक्षर करने के लिए तैयार हूँ!" }
    ]
  },
  {
    id: "d05_sc08",
    title: "Stockroom Inventory Status Check in a Retail Store",
    titleHi: "रिटेल स्टोर के गोदाम में माल की उपलब्धता की जाँच",
    context: "Store supervisor Mahesh and inventory assistant Rahul check stock levels before the weekend rush.",
    situation: "Inventory status, counts, and conditions using 'is', 'are', 'aren't'",
    characters: ["Mahesh", "Rahul"],
    turns: [
      { speaker: "Mahesh", avatar: "📦", textEn: "Rahul, is the stockroom organized for the festival weekend?", textHi: "राहुल, क्या त्योहारी वीकेंड के लिए गोदाम व्यवस्थित है?" },
      { speaker: "Rahul", avatar: "📋", textEn: "Yes, sir, everything is neatly stacked on the steel shelves.", textHi: "जी हाँ सर, सब कुछ स्टील की अलमारियों पर करीने से रखा हुआ है।" },
      { speaker: "Mahesh", avatar: "📦", textEn: "Are the wireless headphones in stock on shelf A4?", textHi: "क्या शेल्फ़ A4 पर वायरलेस हेडफ़ोन का स्टॉक उपलब्ध है?" },
      { speaker: "Rahul", avatar: "📋", textEn: "Yes, there are fifty units in stock, and they are sealed in factory boxes.", textHi: "जी हाँ, पचास पीस स्टॉक में हैं, और वे फ़ैक्टरी बॉक्स में सीलबंद हैं।" },
      { speaker: "Mahesh", avatar: "📦", textEn: "How about the 65W fast phone chargers? Are they available?", textHi: "65 वाट के फ़ास्ट फ़ोन चार्जर का क्या हाल है? क्या वे उपलब्ध हैं?" },
      { speaker: "Rahul", avatar: "📋", textEn: "No, they aren't in stock right now. The shipment is delayed until Monday.", textHi: "नहीं, वे अभी स्टॉक में नहीं हैं। उनकी डिलीवरी सोमवार तक के लिए टल गई है।" },
      { speaker: "Mahesh", avatar: "📦", textEn: "That is unfortunate. Is the supplier reliable?", textHi: "यह तो ठीक नहीं हुआ। क्या सप्लायर भरोसेमंद है?" },
      { speaker: "Rahul", avatar: "📋", textEn: "Yes, he is our primary vendor. The transit delay is due to the state highway repair.", textHi: "हाँ, वह हमारे मुख्य वेंडर हैं। रास्ते में देरी स्टेट हाईवे की मरम्मत के कारण हुई है।" },
      { speaker: "Mahesh", avatar: "📦", textEn: "Understood. The smart watch section is fully replenished, right?", textHi: "समझ गया। स्मार्ट वॉच वाला सेक्शन पूरी तरह भरा हुआ है, सही ना?" },
      { speaker: "Rahul", avatar: "📋", textEn: "Yes, sir! All twenty display models are charged and ready for customer trials.", textHi: "जी हाँ सर! सभी बीस डिस्प्ले मॉडल चार्ज हैं और ग्राहकों के देखने के लिए तैयार हैं।" }
    ]
  },
  {
    id: "d05_sc09",
    title: "Describing Symptoms and Physical Sensations to a Doctor",
    titleHi: "डॉक्टर को अपनी शारीरिक स्थिति और लक्षणों का विवरण देना",
    context: "A patient, Ankit, explains his current health state to Dr. Mehta during a morning clinic consultation.",
    situation: "Health symptoms using 'am', 'is', 'are'",
    characters: ["Dr. Mehta", "Ankit"],
    turns: [
      { speaker: "Dr. Mehta", avatar: "🩺", textEn: "Good morning, Ankit. How are you feeling today?", textHi: "शुभ प्रभात, अंकित। आज आप कैसा महसूस कर रहे हैं?" },
      { speaker: "Ankit", avatar: "🤒", textEn: "Good morning, doctor. I am not feeling very well today.", textHi: "शुभ प्रभात, डॉक्टर साहब। आज मेरी तबीयत कुछ ठीक नहीं लग रही है।" },
      { speaker: "Dr. Mehta", avatar: "🩺", textEn: "What are your main symptoms?", textHi: "आपके मुख्य लक्षण क्या-क्या हैं?" },
      { speaker: "Ankit", avatar: "🤒", textEn: "I am feverish and my throat is quite painful when I swallow.", textHi: "मुझे बुखार जैसा लग रहा है और निगलते समय मेरे गले में काफ़ी दर्द हो रहा है।" },
      { speaker: "Dr. Mehta", avatar: "🩺", textEn: "Let me check your temperature... It is 101 degrees Fahrenheit.", textHi: "मुझे आपका तापमान देखने दीजिए... यह 101 डिग्री फ़ारेनहाइट है।" },
      { speaker: "Ankit", avatar: "🤒", textEn: "Is my pulse rate normal, doctor?", textHi: "क्या मेरी नब्ज़ की गति सामान्य है, डॉक्टर साहब?" },
      { speaker: "Dr. Mehta", avatar: "🩺", textEn: "Your pulse is eighty-two beats per minute; that is completely normal.", textHi: "आपकी नब्ज़ बयासी धड़कन प्रति मिनट है; यह बिल्कुल सामान्य है।" },
      { speaker: "Ankit", avatar: "🤒", textEn: "Are these symptoms related to the seasonal viral flu?", textHi: "क्या ये लक्षण मौसमी वायरल फ़्लू से संबंधित हैं?" },
      { speaker: "Dr. Mehta", avatar: "🩺", textEn: "Yes, it is a mild viral pharyngitis. It is very common during seasonal change.", textHi: "हाँ, यह एक हल्का वायरल संक्रमण है। मौसम बदलने के दौरान यह बहुत आम है।" },
      { speaker: "Ankit", avatar: "🤒", textEn: "Am I contagious to other members in my household?", textHi: "क्या मुझसे घर के अन्य सदस्यों में भी यह फैल सकता है?" },
      { speaker: "Dr. Mehta", avatar: "🩺", textEn: "It is mildly contagious, so rest in your room for two days and stay hydrated.", textHi: "यह थोड़ा संक्रामक है, इसलिए दो दिन अपने कमरे में आराम करें और पर्याप्त पानी पिएं।" }
    ]
  },
  {
    id: "d05_sc10",
    title: "Welcoming Members into a Study Group",
    titleHi: "अध्ययन समूह में नए सदस्यों का स्वागत और परिचय",
    context: "Study group lead Natasha welcomes new university peers and outlines group strengths.",
    situation: "Group identities and attributes with 'we are', 'they are'",
    characters: ["Natasha", "Sumit"],
    turns: [
      { speaker: "Natasha", avatar: "📚", textEn: "Hello everyone! I am Natasha, the organizer of this study circle.", textHi: "नमस्ते सभी को! मैं नताशा हूँ, इस स्टडी सर्कल की आयोजक।" },
      { speaker: "Sumit", avatar: "🙋‍♂️", textEn: "Hi Natasha! I am Sumit. We are very eager to prepare for the final economics exam together.", textHi: "नमस्ते नताशा! मैं सुमित हूँ। हम सब साथ मिलकर अर्थशास्त्र की अंतिम परीक्षा की तैयारी के लिए बहुत उत्सुक हैं।" },
      { speaker: "Natasha", avatar: "📚", textEn: "We are ten students in total, and everyone is committed to daily revision.", textHi: "हम कुल मिलाकर दस छात्र हैं, और हर कोई रोज़ाना रिवीजन के लिए प्रतिबद्ध है।" },
      { speaker: "Sumit", avatar: "🙋‍♂️", textEn: "Are all chapters in microeconomics part of the upcoming syllabus?", textHi: "क्या व्यष्टि अर्थशास्त्र के सभी अध्याय आगामी पाठ्यक्रम का हिस्सा हैं?" },
      { speaker: "Natasha", avatar: "📚", textEn: "Yes, chapters one through eight are mandatory for the written paper.", textHi: "हाँ, लिखित परीक्षा के लिए अध्याय एक से आठ अनिवार्य हैं।" },
      { speaker: "Sumit", avatar: "🙋‍♂️", textEn: "Rohan and Priya are great with econometric graphs and mathematical formulas.", textHi: "रोहन और प्रिया ग्राफ़ और गणितीय सूत्रों में बहुत अच्छे हैं।" },
      { speaker: "Natasha", avatar: "📚", textEn: "That is fantastic! Their expertise is valuable for our group discussions.", textHi: "यह तो बहुत बढ़िया बात है! उनकी विशेषज्ञता हमारी समूह चर्चा के लिए मूल्यवान है।" },
      { speaker: "Sumit", avatar: "🙋‍♂️", textEn: "Is the library seminar room booked for our three o'clock sessions?", textHi: "क्या हमारे तीन बजे के सत्र के लिए लाइब्रेरी का सेमिनार कक्ष बुक है?" },
      { speaker: "Natasha", avatar: "📚", textEn: "Yes, it is reserved from Monday to Friday. It is quiet and air-conditioned.", textHi: "हाँ, यह सोमवार से शुक्रवार तक आरक्षित है। यह शांत और वातानुकूलित है।" },
      { speaker: "Sumit", avatar: "🙋‍♂️", textEn: "We are on track to score top grades this semester!", textHi: "हम इस सेमेस्टर में शीर्ष ग्रेड प्राप्त करने की सही राह पर हैं!" }
    ]
  }
];
