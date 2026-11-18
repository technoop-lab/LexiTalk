// Stage 1 Day 3: 10 Distinct Long-Form Dialogues (Expressive Reactions & Exclamations)
// Focus: Wow, Oh really?, That's wonderful, How terrible!, Congratulations, What a relief!, Oh no, Exactly, Absolutely, That's unbelievable

export const day3Dialogues = [
  {
    id: "d03_sc01",
    title: "Reacting to an Unexpected Job Promotion",
    titleHi: "अचानक पदोन्नति की खबर पर विस्मय और बधाई संवाद",
    context: "Nikhil rushes to tell his colleague Tanvi that he has been promoted to Senior Project Lead.",
    situation: "Exciting workplace news and celebration reactions",
    characters: ["Nikhil", "Tanvi"],
    turns: [
      { speaker: "Nikhil", avatar: "😃", textEn: "Tanvi! You won't believe what just happened in the director's cabin!", textHi: "तन्वी! तुम यकीन नहीं करोगी कि डायरेक्टर के केबिन में अभी क्या हुआ!" },
      { speaker: "Tanvi", avatar: "😲", textEn: "Oh really? Tell me quickly! What happened?", textHi: "अरे सच में? मुझे जल्दी बताओ! क्या हुआ?" },
      { speaker: "Nikhil", avatar: "😃", textEn: "Management officially promoted me to Senior Project Lead starting next month!", textHi: "मैनेजमेंट ने अगले महीने से मुझे आधिकारिक तौर पर सीनियर प्रोजेक्ट लीड के पद पर प्रमोट कर दिया है!" },
      { speaker: "Tanvi", avatar: "🎉", textEn: "Wow! That is incredible news! Congratulations, Nikhil!", textHi: "वाह! यह तो अद्भुत खबर है! बहुत-बहुत बधाई, निखिल!" },
      { speaker: "Nikhil", avatar: "😃", textEn: "Thank you so much! I was completely shocked when Mr. Mehta handed me the letter.", textHi: "बहुत-बहुत धन्यवाद! जब मिस्टर मेहता ने मुझे पत्र सौंपा तो मैं पूरी तरह से हैरान रह गया था।" },
      { speaker: "Tanvi", avatar: "🎉", textEn: "Oh, you totally deserved this promotion after delivering the overseas banking project on time.", textHi: "अरे, विदेशी बैंकिंग प्रोजेक्ट को समय पर पूरा करने के बाद तुम पूरी तरह इसके हकदार थे।" },
      { speaker: "Nikhil", avatar: "😃", textEn: "That project was tough, but our entire team worked relentlessly.", textHi: "वह प्रोजेक्ट कठिन था, लेकिन हमारी पूरी टीम ने बिना थके मेहनत की थी।" },
      { speaker: "Tanvi", avatar: "🎉", textEn: "Exactly! Your leadership and calm attitude during critical deadlines made all the difference.", textHi: "बिल्कुल सही! कठिन डेडलाइन्स के दौरान तुम्हारे नेतृत्व और शांत रवैये ने बड़ा अंतर पैदा किया।" },
      { speaker: "Nikhil", avatar: "😃", textEn: "What a relief that the hard work was recognized by executive leadership!", textHi: "कितनी राहत की बात है कि उच्च नेतृत्व द्वारा इस कड़ी मेहनत को पहचाना गया!" },
      { speaker: "Tanvi", avatar: "🎉", textEn: "Absolutely! We definitely have to celebrate this milestone this evening.", textHi: "बिल्कुल! हमें आज शाम इस उपलब्धि का जश्न निश्चित रूप से मनाना होगा।" },
      { speaker: "Nikhil", avatar: "😃", textEn: "Of course! Hot samosas and filter coffee for everyone in the department at four o'clock!", textHi: "ज़रूर! शाम चार बजे विभाग के सभी लोगों के लिए गरमा-गरम समोसे और फ़िल्टर कॉफ़ी मेरी तरफ़ से!" },
      { speaker: "Tanvi", avatar: "🎉", textEn: "That sounds awesome! I will inform the team right away.", textHi: "यह तो बहुत शानदार रहेगा! मैं अभी टीम को सूचित कर देती हूँ।" }
    ]
  },
  {
    id: "d03_sc02",
    title: "Discussing Heavy Sudden Downpour and Urban Waterlogging",
    titleHi: "अचानक मूसलाधार बारिश और जलभराव पर प्रतिक्रिया",
    context: "Two office workers look out of the lobby window as a massive cloudburst hits the city streets.",
    situation: "Weather exclamation, concern, and safety discussions",
    characters: ["Alok", "Sunil"],
    turns: [
      { speaker: "Alok", avatar: "⛈️", textEn: "Look at the sky outside! It has turned pitch black at three in the afternoon!", textHi: "बाहर आसमान को देखो! दोपहर के तीन बजे ही बिल्कुल घना अंधेरा छा गया है!" },
      { speaker: "Sunil", avatar: "⚡", textEn: "Oh my goodness! That thunder was deafening!", textHi: "हे भगवान! वह बिजली की गड़गड़ाहट कान फाड़ देने वाली थी!" },
      { speaker: "Alok", avatar: "⛈️", textEn: "Wow, it is pouring cats and dogs! You can barely see the cars on the main road.", textHi: "वाह, मूसलाधार बारिश हो रही है! मुख्य सड़क पर गाड़ियों को देख पाना भी मुश्किल है।" },
      { speaker: "Sunil", avatar: "⚡", textEn: "Oh no! Look at the underpass near the junction; it is already filling with water.", textHi: "अरे नहीं! चौराहे के पास वाले अंडरपास को देखो; वहाँ अभी से पानी भरना शुरू हो गया है।" },
      { speaker: "Alok", avatar: "⛈️", textEn: "How terrible! Traffic will be completely paralyzed during the evening commute.", textHi: "कितनी बुरी बात है! शाम के समय ट्रैफ़िक पूरी तरह से ठप हो जाएगा।" },
      { speaker: "Sunil", avatar: "⚡", textEn: "That's terrible indeed. Did you bring an umbrella or a raincoat with you today?", textHi: "सच में यह बहुत बुरा है। क्या तुम आज अपने साथ छाता या रेनकोट लाए थे?" },
      { speaker: "Alok", avatar: "⛈️", textEn: "No, unfortunately not. The morning was completely sunny and dry!", textHi: "नहीं, दुर्भाग्य से नहीं। सुबह तो बिल्कुल धूप खिली थी और मौसम सूखा था!" },
      { speaker: "Sunil", avatar: "⚡", textEn: "What a relief that our company allows remote work during extreme weather alerts.", textHi: "कितनी राहत की बात है कि हमारी कंपनी ख़राब मौसम के अलर्ट के दौरान घर से काम करने की अनुमति देती है।" },
      { speaker: "Alok", avatar: "⛈️", textEn: "Absolutely. I think we should pack our laptops and head to the metro station before it worsens.", textHi: "बिल्कुल सही। मुझे लगता है कि स्थिति और बिगड़ने से पहले हमें अपने लैपटॉप पैक करके मेट्रो स्टेशन चलना चाहिए।" },
      { speaker: "Sunil", avatar: "⚡", textEn: "Good idea! Let's take the covered walkway to the underground gate.", textHi: "अच्छा विचार है! चलो भूमिगत गेट तक ढके हुए रास्ते से चलते हैं।" }
    ]
  },
  {
    id: "d03_sc03",
    title: "Congratulating a Friend on Buying Their First Electric Vehicle",
    titleHi: "मित्र द्वारा पहली इलेक्ट्रिक गाड़ी खरीदने पर बधाई और उत्साह",
    context: "Harish shows his brand-new electric SUV to his friend Tarun in the parking lot.",
    situation: "Excitement and admiration over a major new purchase",
    characters: ["Tarun", "Harish"],
    turns: [
      { speaker: "Tarun", avatar: "🚘", textEn: "Harish! Is this sleek matte blue vehicle yours?", textHi: "हरीश! क्या यह शानदार मैट ब्लू गाड़ी तुम्हारी है?" },
      { speaker: "Harish", avatar: "🔑", textEn: "Yes, it is! I took delivery of it yesterday evening.", textHi: "हाँ, यह मेरी है! मुझे कल शाम ही इसकी डिलीवरी मिली है।" },
      { speaker: "Tarun", avatar: "🚘", textEn: "Wow! What a stunning car! Congratulations, my friend!", textHi: "वाह! कितनी शानदार गाड़ी है! बधाई हो मेरे दोस्त!" },
      { speaker: "Harish", avatar: "🔑", textEn: "Thank you so much, Tarun! I've been saving up for this electric SUV for two years.", textHi: "बहुत धन्यवाद तरुण! मैं दो साल से इस इलेक्ट्रिक एसयूवी के लिए बचत कर रहा था।" },
      { speaker: "Tarun", avatar: "🚘", textEn: "That's unbelievable! The panoramic sunroof and digital dashboard look futuristic.", textHi: "यह तो अविश्वसनीय है! पैनोरमिक सनरूफ़ और डिजिटल डैशबोर्ड बिल्कुल भविष्य जैसा दिखता है।" },
      { speaker: "Harish", avatar: "🔑", textEn: "Step inside and check out the touchscreen infotainment system.", textHi: "अंदर बैठो और टचस्क्रीन इंफ़ोटेनमेंट सिस्टम को देखो।" },
      { speaker: "Tarun", avatar: "🚘", textEn: "How fantastic! The cabin is whisper-quiet. What is the driving range on a single charge?", textHi: "कितना शानदार! केबिन में बिल्कुल सन्नाटा है। एक बार चार्ज करने पर इसकी ड्राइविंग रेंज कितनी है?" },
      { speaker: "Harish", avatar: "🔑", textEn: "It gives nearly 450 kilometers on full charge in city conditions.", textHi: "यह शहर की परिस्थितियों में फ़ुल चार्ज पर लगभग 450 किलोमीटर का माइलेज देती है।" },
      { speaker: "Tarun", avatar: "🚘", textEn: "That's wonderful! You will save a massive amount on monthly fuel expenses.", textHi: "यह तो बहुत ही बढ़िया है! तुम हर महीने पेट्रोल के भारी खर्चे से बच जाओगे।" },
      { speaker: "Harish", avatar: "🔑", textEn: "Exactly! Come on, let's go for a quick test drive around the lake boulevard.", textHi: "बिल्कुल सही! चलो, झील के किनारे वाली सड़क पर एक त्वरित टेस्ट ड्राइव के लिए चलते हैं।" },
      { speaker: "Tarun", avatar: "🚘", textEn: "Awesome! I would love that. Let's go!", textHi: "शानदार! मुझे यह बहुत पसंद आएगा। चलो चलते हैं!" }
    ]
  },
  {
    id: "d03_sc04",
    title: "Relief After Recovering Misplaced Keys and Passport",
    titleHi: "खोई हुई चाबी और पासपोर्ट मिलने पर राहत की सांस",
    context: "Sanjay frantically searches his travel bag before his international flight and finally finds his documents.",
    situation: "Panic turning into overwhelming relief and joy",
    characters: ["Sanjay", "Kavya"],
    turns: [
      { speaker: "Sanjay", avatar: "😰", textEn: "Oh no! Oh no! I can't find my passport pouch anywhere!", textHi: "अरे नहीं! अरे नहीं! मुझे मेरा पासपोर्ट पाउच कहीं नहीं मिल रहा है!" },
      { speaker: "Kavya", avatar: "😟", textEn: "What? Are you serious? Did you check the front zippered compartment?", textHi: "क्या? क्या तुम सच कह रहे हो? क्या तुमने सामने वाले ज़िपर वाले हिस्से में देखा?" },
      { speaker: "Sanjay", avatar: "😰", textEn: "I checked it twice! How terrible! My flight departs in three hours!", textHi: "मैंने दो बार देखा! कितनी बुरी मुसीबत है! मेरी उड़ान तीन घंटे में रवाना होने वाली है!" },
      { speaker: "Kavya", avatar: "😟", textEn: "Don't panic. Take a deep breath. Where did you keep it after printing the visa yesterday?", textHi: "घबराओ मत। गहरी सांस लो। कल वीज़ा प्रिंट करने के बाद तुमने इसे कहाँ रखा था?" },
      { speaker: "Sanjay", avatar: "😰", textEn: "I thought I placed it inside my laptop backpack beside the desk.", textHi: "मुझे लगा था कि मैंने इसे डेस्क के पास अपने लैपटॉप बैग में रखा था।" },
      { speaker: "Kavya", avatar: "🔍", textEn: "Wait a second... look inside this side pocket behind the water bottle holder!", textHi: "एक सेकंड रुको... पानी की बोतल होल्डर के पीछे वाली इस साइड पॉकेट के अंदर देखो!" },
      { speaker: "Sanjay", avatar: "😃", textEn: "Oh my goodness! Here it is! The blue pouch with the passport and boarding tickets!", textHi: "हे भगवान! यह रहा! पासपोर्ट और बोर्डिंग टिकट वाला नीला पाउच!" },
      { speaker: "Kavya", avatar: "😌", textEn: "What a relief! You gave me a mini heart attack!", textHi: "कितनी बड़ी राहत की बात है! तुमने तो मुझे लगभग डरा ही दिया था!" },
      { speaker: "Sanjay", avatar: "😃", textEn: "Thank goodness! I was sweating bullets! Thank you for staying calm and finding it.", textHi: "ईश्वर का लाख-लाख शुक्र है! मेरे तो पसीने छूट गए थे! शांत रहने और इसे ढूँढने के लिए शुक्रिया।" },
      { speaker: "Kavya", avatar: "😌", textEn: "Now place it inside the main secure pouch and let's book the airport cab immediately.", textHi: "अब इसे मुख्य सुरक्षित पाउच में रखो और चलो तुरंत एयरपोर्ट के लिए कैब बुक करते हैं।" },
      { speaker: "Sanjay", avatar: "😃", textEn: "Absolutely! Doing it right away. What a massive relief!", textHi: "बिल्कुल सही! मैं अभी कर रहा हूँ। कितनी बड़ी राहत मिली!" }
    ]
  },
  {
    id: "d03_sc05",
    title: "Thrilling Reactions to a Last-Over Cricket Victory",
    titleHi: "क्रिकेट मैच में अंतिम ओवर की रोमांचक जीत पर उत्साह",
    context: "Two friends watch the final ball of a nail-biting cricket match on television in their living room.",
    situation: "Intense sports excitement and spontaneous exclamations",
    characters: ["Rohit", "Sameer"],
    turns: [
      { speaker: "Rohit", avatar: "🏏", textEn: "Two runs needed off the last delivery! My heart is pounding!", textHi: "अंतिम गेंद पर दो रन चाहिए! मेरा दिल ज़ोर-ज़ोर से धड़क रहा है!" },
      { speaker: "Sameer", avatar: "📺", textEn: "Here comes the bowler running in... he bowls a yorker...", textHi: "यहाँ गेंदबाज़ दौड़ता हुआ आ रहा है... उसने यॉर्कर गेंद फेंकी..." },
      { speaker: "Rohit", avatar: "🏏", textEn: "He lofted it over extra cover! It is racing toward the boundary line!", textHi: "उसने एक्स्ट्रा कवर के ऊपर से गेंद उठा दी! यह बाउंड्री लाइन की तरफ़ तेज़ी से जा रही है!" },
      { speaker: "Sameer", avatar: "🎉", textEn: "It is a four! We won the match! Unbelievable!", textHi: "यह चौका है! हम मैच जीत गए! अविश्वसनीय!" },
      { speaker: "Rohit", avatar: "🎉", textEn: "Wow! What a sensational finish! That was pure magic!", textHi: "वाह! कितना सनसनीखेज़ अंत था! यह तो विशुद्ध जादू था!" },
      { speaker: "Sameer", avatar: "🎉", textEn: "Oh my goodness, to chase eighteen runs in the final over is simply extraordinary!", textHi: "हे भगवान, अंतिम ओवर में अठारह रन का पीछा करना सचमुच असाधारण है!" },
      { speaker: "Rohit", avatar: "🏏", textEn: "That batter has ice in his veins! He didn't lose his composure for a single second.", textHi: "उस बल्लेबाज़ का हौसला चट्टान जैसा है! उसने एक पल के लिए भी अपना संयम नहीं खोया।" },
      { speaker: "Sameer", avatar: "🎉", textEn: "Exactly! That was one of the most nail-biting matches in tournament history.", textHi: "बिल्कुल सही! यह टूर्नामेंट के इतिहास के सबसे रोमांचक मैचों में से एक था।" },
      { speaker: "Rohit", avatar: "🏏", textEn: "I have goosebumps all over my arms! What an unforgettable evening!", textHi: "मेरे तो रोंगटे खड़े हो गए हैं! कितनी अविस्मरणीय शाम है यह!" },
      { speaker: "Sameer", avatar: "🎉", textEn: "Let's watch the post-match presentation and player interviews!", textHi: "चलो मैच के बाद का पुरस्कार समारोह और खिलाड़ियों के इंटरव्यू देखते हैं!" }
    ]
  },
  {
    id: "d03_sc06",
    title: "Reacting to Flight Cancellation and Booking Alternative",
    titleHi: "उड़ान रद्द होने की सूचना और विकल्प खोजने पर बातचीत",
    context: "Two business travelers receive an SMS alert announcing their flight cancellation at the airport terminal.",
    situation: "Frustration, problem-solving, and relief",
    characters: ["Pooja", "Manoj"],
    turns: [
      { speaker: "Pooja", avatar: "📱", textEn: "Oh no! Did you just receive the text message from the airline?", textHi: "अरे नहीं! क्या तुम्हें अभी-अभी एयरलाइन से मैसेज मिला?" },
      { speaker: "Manoj", avatar: "✈️", textEn: "No, what happened? Is our flight delayed?", textHi: "नहीं, क्या हुआ? क्या हमारी उड़ान में देरी है?" },
      { speaker: "Pooja", avatar: "📱", textEn: "How terrible! Flight 6E-204 to Bengaluru has been completely cancelled due to bad weather!", textHi: "कितनी बुरी बात है! ख़राब मौसम के कारण बेंगलुरु जाने वाली फ़्लाइट 6E-204 पूरी तरह रद्द कर दी गई है!" },
      { speaker: "Manoj", avatar: "✈️", textEn: "What a disaster! We have an investor presentation at ten o'clock tomorrow morning!", textHi: "यह तो बहुत बड़ी मुसीबत है! कल सुबह दस बजे निवेशकों के सामने हमारा प्रेजेंटेशन है!" },
      { speaker: "Pooja", avatar: "📱", textEn: "Let's run to the airline customer desk right away before the queue gets too long.", textHi: "चलो कतार लंबी होने से पहले तुरंत एयरलाइन के कस्टमर डेस्क पर चलते हैं।" },
      { speaker: "Manoj", avatar: "✈️", textEn: "Good thinking! Excuse me, officer, can you rebook us on the next available flight?", textHi: "सही सोचा! माफ़ कीजिएगा अधिकारी महोदय, क्या आप हमें अगली उपलब्ध फ़्लाइट में रीबुक कर सकते हैं?" },
      { speaker: "Pooja", avatar: "📱", textEn: "Look, the agent is typing on her terminal... she found two seats on the 9 PM express flight!", textHi: "देखो, एजेंट अपने कंप्यूटर पर देख रही है... उसे रात 9 बजे वाली एक्सप्रेस फ़्लाइट में दो सीटें मिल गईं!" },
      { speaker: "Manoj", avatar: "✈️", textEn: "What a relief! Are the tickets confirmed?", textHi: "कितनी राहत मिली! क्या टिकट कन्फर्म हैं?" },
      { speaker: "Pooja", avatar: "📱", textEn: "Yes! She just printed our new boarding passes without any additional charges.", textHi: "हाँ! उन्होंने बिना किसी अतिरिक्त शुल्क के हमारे नए बोर्डिंग पास प्रिंट कर दिए हैं।" },
      { speaker: "Manoj", avatar: "✈️", textEn: "Thank goodness! We will still arrive in time for our morning meeting.", textHi: "भगवान का शुक्र है! हम सुबह की मीटिंग के लिए समय पर पहुँच जाएँगे।" }
    ]
  },
  {
    id: "d03_sc07",
    title: "Looking at Stunning Vacation Photographs",
    titleHi: "छुट्टियों की खूबसूरत तस्वीरों को देखकर प्रशंसा और आश्चर्य",
    context: "Shalini shares photos of her trek through the snow-capped Himalayan peaks with her friend Ananya.",
    situation: "Admiration, scenic beauty, and travel excitement",
    characters: ["Ananya", "Shalini"],
    turns: [
      { speaker: "Ananya", avatar: "📸", textEn: "Wow! Is this view from the summit of your trek in Himachal?", textHi: "वाह! क्या यह दृश्य हिमाचल में आपके ट्रेक के शिखर से है?" },
      { speaker: "Shalini", avatar: "🏔️", textEn: "Yes! That was taken at sunrise at an altitude of 14,000 feet.", textHi: "हाँ! यह 14,000 फीट की ऊँचाई पर सूर्योदय के समय खींची गई थी।" },
      { speaker: "Ananya", avatar: "📸", textEn: "That's breathtaking! The golden sunlight on the snow looks like pure gold!", textHi: "यह तो मनमोहक है! बर्फ़ पर सुनहरी धूप बिल्कुल सोने जैसी चमक रही है!" },
      { speaker: "Shalini", avatar: "🏔️", textEn: "It was freezing cold, minus four degrees, but the beauty made us forget everything.", textHi: "वहाँ कड़ाके की ठंड थी, माइनस चार डिग्री, लेकिन सुंदरता ने हमें सब कुछ भुला दिया।" },
      { speaker: "Ananya", avatar: "📸", textEn: "Unbelievable! Was the climb very steep and physically demanding?", textHi: "अविश्वसनीय! क्या चढ़ाई बहुत खड़ी और शारीरिक रूप से थका देने वाली थी?" },
      { speaker: "Shalini", avatar: "🏔️", textEn: "The last two kilometers through the boulder zone tested our endurance to the limit.", textHi: "पत्थरों वाले रास्ते से अंतिम दो किलोमीटर की दूरी ने हमारी सहनशक्ति की कड़ी परीक्षा ली।" },
      { speaker: "Ananya", avatar: "📸", textEn: "How brave of you! I would have probably surrendered halfway up.", textHi: "आप कितनी साहसी हैं! मैं तो शायद आधे रास्ते में ही हिम्मत हार जाती।" },
      { speaker: "Shalini", avatar: "🏔️", textEn: "Our mountain guide was wonderful. He kept encouraging us with hot ginger tea and positive stories.", textHi: "हमारे माउंटेन गाइड बहुत अच्छे थे। वह गरमा-गरम अदरक की चाय और प्रेरणादायक कहानियों से हमारा हौसला बढ़ाते रहे।" },
      { speaker: "Ananya", avatar: "📸", textEn: "That's wonderful! You must definitely take me along on your next expedition!", textHi: "यह तो बहुत अच्छी बात है! आपको अपने अगले अभियान पर मुझे भी ज़रूर साथ ले जाना चाहिए!" },
      { speaker: "Shalini", avatar: "🏔️", textEn: "Absolutely! We will train together for the autumn trek in Uttarakhand.", textHi: "बिल्कुल! हम उत्तराखंड में शरद ऋतु के ट्रेक के लिए साथ मिलकर अभ्यास करेंगे।" }
    ]
  },
  {
    id: "d03_sc08",
    title: "Comforting a Friend After Their Pet's Recovery",
    titleHi: "पालतू जानवर के स्वस्थ होने पर सहानुभूति और राहत",
    context: "Rohan inquires about his friend Deepak's dog who was admitted to the veterinary clinic.",
    situation: "Empathy, emotional relief, and pet care",
    characters: ["Rohan", "Deepak"],
    turns: [
      { speaker: "Rohan", avatar: "🐕", textEn: "Deepak! How is Bruno doing today? Did the vet discharge him from the clinic?", textHi: "दीपक! आज ब्रूनो कैसा है? क्या डॉक्टर ने उसे क्लिनिक से छुट्टी दे दी?" },
      { speaker: "Deepak", avatar: "🐾", textEn: "Yes! The blood tests came back completely normal this morning, and he is back home!", textHi: "हाँ! आज सुबह ब्लड टेस्ट की रिपोर्ट बिल्कुल सामान्य आई है, और वह घर वापस आ गया है!" },
      { speaker: "Rohan", avatar: "🐕", textEn: "What a relief! I was so worried when you mentioned he wasn't eating anything.", textHi: "कितनी बड़ी राहत की बात है! जब तुमने बताया था कि वह कुछ नहीं खा रहा था, तो मुझे बहुत चिंता हुई थी।" },
      { speaker: "Deepak", avatar: "🐾", textEn: "Oh, it was terrifying! He had a severe stomach infection from eating spoiled food in the garden.", textHi: "ओह, वह बहुत डरावना समय था! बगीचे में कुछ ख़राब खाना खा लेने से उसके पेट में गंभीर संक्रमण हो गया था।" },
      { speaker: "Rohan", avatar: "🐕", textEn: "How awful! Seeing our beloved pets in pain is truly heartbreaking.", textHi: "कितना दुखद था! अपने प्यारे पालतू जानवरों को दर्द में देखना सचमुच दिल दहला देने वाला होता है।" },
      { speaker: "Deepak", avatar: "🐾", textEn: "Exactly. But the medication worked wonders within forty-eight hours.", textHi: "बिल्कुल सही। लेकिन दवाइयों ने अड़तालीस घंटों के अंदर चमत्कारिक असर दिखाया।" },
      { speaker: "Rohan", avatar: "🐕", textEn: "That's fantastic news! Is he wagging his tail and playing again?", textHi: "यह तो बहुत शानदार खबर है! क्या वह फिर से पूंछ हिला रहा है और खेल रहा है?" },
      { speaker: "Deepak", avatar: "🐾", textEn: "Yes! He greeted me at the door with his favorite rubber ball in his mouth.", textHi: "हाँ! उसने दरवाज़े पर मुंह में अपनी पसंदीदा रबर की गेंद दबाकर मेरा स्वागत किया।" },
      { speaker: "Rohan", avatar: "🐕", textEn: "Wonderful! Give him a gentle pat from my side when you get home.", textHi: "बहुत बढ़िया! जब तुम घर पहुँचो तो मेरी तरफ़ से उसे प्यार से थपथपाना।" },
      { speaker: "Deepak", avatar: "🐾", textEn: "I certainly will. Thank you so much for checking in on him, Rohan!", textHi: "मैं ज़रूर करूँगा। ब्रूनो का हालचाल पूछने के लिए बहुत-बहुत धन्यवाद, रोहन!" }
    ]
  },
  {
    id: "d03_sc09",
    title: "Discussing Surprising News of a Friend's Wedding",
    titleHi: "मित्र के विवाह की अचानक मिली खबर पर विस्मय और खुशी",
    context: "Megha and Sneha receive an ornate wedding invitation card from their quiet college friend.",
    situation: "Surprise, joy, and wedding plans",
    characters: ["Megha", "Sneha"],
    turns: [
      { speaker: "Megha", avatar: "💌", textEn: "Sneha, open the courier packet on the dining table! You will be stunned!", textHi: "स्नेहा, डाइनिंग टेबल पर रखे कूरियर पैकेट को खोलो! तुम दंग रह जाओगी!" },
      { speaker: "Sneha", avatar: "😲", textEn: "What is it? An invitation card? Whose wedding is it?", textHi: "यह क्या है? एक निमंत्रण पत्र? किसकी शादी है?" },
      { speaker: "Megha", avatar: "💌", textEn: "It is Gaurav and Prerna's wedding card! They are getting married next month in Udaipur!", textHi: "यह गौरव और प्रेरणा की शादी का कार्ड है! वे अगले महीने उदयपुर में शादी कर रहे हैं!" },
      { speaker: "Sneha", avatar: "😲", textEn: "What? Are you serious? That is unbelievable! They never gave a single hint!", textHi: "क्या? क्या तुम सच कह रही हो? यह तो अविश्वसनीय है! उन्होंने कभी कोई छोटा सा इशारा भी नहीं दिया था!" },
      { speaker: "Megha", avatar: "💌", textEn: "I know! Gaurav has always been so quiet and private about his personal life.", textHi: "मुझे पता है! गौरव अपने निजी जीवन को लेकर हमेशा बहुत शांत और गोपनीय रहा है।" },
      { speaker: "Sneha", avatar: "😲", textEn: "Wow, but they make such a beautiful and harmonious couple together!", textHi: "वाह, लेकिन वे दोनों एक साथ कितने सुंदर और प्यारे लगते हैं!" },
      { speaker: "Megha", avatar: "💌", textEn: "Absolutely! The wedding venue is a heritage palace by Lake Pichola.", textHi: "बिल्कुल सही! शादी का स्थल पिछोला झील के किनारे एक हेरिटेज पैलेस है।" },
      { speaker: "Sneha", avatar: "😲", textEn: "How romantic! That will be an absolute dream wedding!", textHi: "कितना रोमांटिक! यह सचमुच एक सपनों जैसी शादी होगी!" },
      { speaker: "Megha", avatar: "💌", textEn: "We need to start shopping for traditional ethnic attire right this weekend.", textHi: "हमें इसी वीकेंड से पारंपरिक एथनिक कपड़ों की खरीदारी शुरू करनी होगी।" },
      { speaker: "Sneha", avatar: "😲", textEn: "Definitely! I am so excited for both of them. Congratulations to Gaurav and Prerna!", textHi: "निश्चित रूप से! मैं उन दोनों के लिए बहुत खुश और उत्साहित हूँ। गौरव और प्रेरणा को बहुत-बहुत बधाई!" }
    ]
  },
  {
    id: "d03_sc10",
    title: "Celebrating Academic Exam Results with High Distinction",
    titleHi: "परीक्षा में उत्कृष्ट अंकों के साथ सफलता का जश्न",
    context: "A proud mother, Vandana, celebrates her son's top rank in the national entrance examination.",
    situation: "Parental pride, overwhelming joy, and heartfelt congratulations",
    characters: ["Vandana", "Akash"],
    turns: [
      { speaker: "Akash", avatar: "📜", textEn: "Mom! The national entrance exam results were just published online!", textHi: "माँ! राष्ट्रीय प्रवेश परीक्षा के परिणाम अभी ऑनलाइन घोषित किए गए हैं!" },
      { speaker: "Vandana", avatar: "👩‍👦", textEn: "Oh, Akash! My heart is racing! What is your score, beta?", textHi: "अरे आकाश! मेरी धड़कनें तेज़ हो रही हैं! तुम्हारा स्कोर क्या आया, बेटा?" },
      { speaker: "Akash", avatar: "📜", textEn: "I secured All India Rank 42 with ninety-nine percentile!", textHi: "मैंने 99 पर्सेंटाइल के साथ ऑल इंडिया रैंक 42 हासिल की है!" },
      { speaker: "Vandana", avatar: "🎉", textEn: "Oh my goodness! Tears of joy are in my eyes! Congratulations, my child!", textHi: "हे भगवान! मेरी आँखों में खुशी के आँसू आ गए हैं! बहुत-बहुत बधाई, मेरे बच्चे!" },
      { speaker: "Akash", avatar: "📜", textEn: "Thank you so much, Mom! Your constant support made this possible.", textHi: "बहुत धन्यवाद माँ! आपके निरंतर सहयोग ने ही इसे संभव बनाया।" },
      { speaker: "Vandana", avatar: "👩‍👦", textEn: "You worked for eighteen months with such immense discipline and dedication.", textHi: "तुमने अठारह महीने इतने कड़े अनुशासन और लगन के साथ मेहनत की।" },
      { speaker: "Akash", avatar: "📜", textEn: "What a relief that all those late-night study sessions paid off!", textHi: "कितनी राहत की बात है कि देर रात तक की गई वो सारी पढ़ाई रंग लाई!" },
      { speaker: "Vandana", avatar: "🎉", textEn: "This is a life-changing moment! You will get admission into the top medical college in the country!", textHi: "यह ज़िंदगी बदल देने वाला पल है! तुम्हें देश के शीर्ष मेडिकल कॉलेज में दाखिला मिलेगा!" },
      { speaker: "Akash", avatar: "📜", textEn: "Yes! Becoming a doctor has been my lifelong dream.", textHi: "हाँ! डॉक्टर बनना मेरे जीवन का सबसे बड़ा सपना रहा है।" },
      { speaker: "Vandana", avatar: "🎉", textEn: "Let us call your father and grandparents immediately to share this glorious news!", textHi: "चलो इस गौरवपूर्ण खबर को साझा करने के लिए तुरंत तुम्हारे पिताजी और दादा-दादी को फ़ोन लगाते हैं!" }
    ]
  }
];
