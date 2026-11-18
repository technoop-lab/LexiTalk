// Stage 1 Day 6: 10 Distinct Long-Form Dialogues (Past State of Being: Was / Were & Time Markers)
// Focus: I was, You were, He was, She was, It was, We were, They were, Wasn't, Weren't, yesterday, last week, ago, then

export const day6Dialogues = [
  {
    id: "d06_sc01",
    title: "Explaining Absence from an Important Meeting Yesterday",
    titleHi: "कल की महत्वपूर्ण बैठक में अनुपस्थिति का कारण बताना",
    context: "Siddharth explains to his manager Mr. Kapoor why he was absent from the client briefing yesterday.",
    situation: "Workplace explanation using 'was', 'were', 'wasn't'",
    characters: ["Mr. Kapoor", "Siddharth"],
    turns: [
      { speaker: "Mr. Kapoor", avatar: "👔", textEn: "Good morning, Siddharth. You were absent from the client meeting yesterday afternoon.", textHi: "शुभ प्रभात, सिद्धार्थ। कल दोपहर आप क्लाइंट मीटिंग से अनुपस्थित थे।" },
      { speaker: "Siddharth", avatar: "👨‍💼", textEn: "Good morning, sir. I was terribly unwell yesterday morning with severe food poisoning.", textHi: "शुभ प्रभात, सर। कल सुबह पेट में गंभीर संक्रमण के कारण मेरी तबीयत बहुत ख़राब थी।" },
      { speaker: "Mr. Kapoor", avatar: "👔", textEn: "Oh, I am sorry to hear that. Were you hospitalized?", textHi: "ओह, यह सुनकर बुरा लगा। क्या आप अस्पताल में भर्ती थे?" },
      { speaker: "Siddharth", avatar: "👨‍💼", textEn: "No, I wasn't admitted, but I was at the neighborhood clinic for medical tests and intravenous fluids.", textHi: "नहीं, मैं भर्ती नहीं था, लेकिन मेडिकल टेस्ट और ड्रिप चढ़वाने के लिए मैं पास के क्लिनिक में था।" },
      { speaker: "Mr. Kapoor", avatar: "👔", textEn: "How was the doctor's diagnosis? Are you feeling better today?", textHi: "डॉक्टर की क्या रिपोर्ट रही? क्या आप आज बेहतर महसूस कर रहे हैं?" },
      { speaker: "Siddharth", avatar: "👨‍💼", textEn: "The doctor said it was a temporary bacterial infection. Today I am much better.", textHi: "डॉक्टर ने कहा कि यह एक अस्थायी जीवाणु संक्रमण था। आज मैं काफ़ी बेहतर हूँ।" },
      { speaker: "Mr. Kapoor", avatar: "👔", textEn: "The client representatives were very understanding when we explained your absence.", textHi: "जब हमने आपकी अनुपस्थिति समझाई तो क्लाइंट के प्रतिनिधि बहुत समझदार निकले।" },
      { speaker: "Siddharth", avatar: "👨‍💼", textEn: "Were there any major modifications requested in the project scope?", textHi: "क्या प्रोजेक्ट के दायरे में कोई बड़े बदलाव माँगे गए थे?" },
      { speaker: "Mr. Kapoor", avatar: "👔", textEn: "No, the presentation was highly successful. They were impressed with our initial prototype.", textHi: "नहीं, प्रेजेंटेशन बहुत सफल रहा। वे हमारे शुरुआती प्रोटोटाइप से बहुत प्रभावित थे।" },
      { speaker: "Siddharth", avatar: "👨‍💼", textEn: "What a relief! I was worried about their reaction all evening.", textHi: "कितनी राहत की बात है! मैं पूरी शाम उनकी प्रतिक्रिया को लेकर चिंतित था।" }
    ]
  },
  {
    id: "d06_sc02",
    title: "Reminiscing About Childhood and Old School Days",
    titleHi: "बचपन और पुराने स्कूल के दिनों की यादें",
    context: "Two childhood friends, Arvind and Rajesh, look at an old black-and-white school photograph.",
    situation: "Past memories using 'was', 'were', time expressions",
    characters: ["Arvind", "Rajesh"],
    turns: [
      { speaker: "Arvind", avatar: "📸", textEn: "Rajesh, look at this old photo! We were only ten years old back then.", textHi: "राजेश, इस पुरानी तस्वीर को देखो! उस समय हम सिर्फ़ दस साल के थे।" },
      { speaker: "Rajesh", avatar: "😃", textEn: "Oh my goodness! Was this taken during our fifth-grade annual picnic?", textHi: "अरे बाप रे! क्या यह हमारी पांचवीं कक्षा के वार्षिक पिकनिक के दौरान ली गई थी?" },
      { speaker: "Arvind", avatar: "📸", textEn: "Yes, it was! We were at the botanical gardens near the old lake.", textHi: "हाँ, बिल्कुल! हम पुरानी झील के पास बॉटनिकल गार्डन में थे।" },
      { speaker: "Rajesh", avatar: "😃", textEn: "Our class teacher, Mr. Sharma, was so cheerful and energetic that afternoon.", textHi: "हमारे क्लास टीचर, मिस्टर शर्मा, उस दोपहर कितने खुशमिज़ाज और ऊर्जावान थे।" },
      { speaker: "Arvind", avatar: "📸", textEn: "Indeed! And look at Deepak in the back row; he was always the tallest boy in school.", textHi: "सच में! और पीछे की पंक्ति में दीपक को देखो; वह हमेशा स्कूल का सबसे लंबा लड़का था।" },
      { speaker: "Rajesh", avatar: "😃", textEn: "Those school days were truly carefree and full of innocent laughter.", textHi: "वे स्कूल के दिन सचमुच कितने बेफ़िक्र और मासूम हंसी से भरे हुए थे।" },
      { speaker: "Arvind", avatar: "📸", textEn: "Our playground was massive, and football was our passion every single evening.", textHi: "हमारा खेल का मैदान बहुत बड़ा था, और हर शाम फ़ुटबॉल हमारा जुनून होता था।" },
      { speaker: "Rajesh", avatar: "😃", textEn: "We were never tired, no matter how hot or humid the weather was.", textHi: "मौसम चाहे कितना भी गर्म या उमस भरा क्यों न हो, हम कभी नहीं थकते थे।" },
      { speaker: "Arvind", avatar: "📸", textEn: "Those memories were some of the best moments of our youth.", textHi: "वे यादें हमारी युवावस्था के सबसे बेहतरीन पलों में से थीं।" },
      { speaker: "Rajesh", avatar: "😃", textEn: "I am so glad we preserved these memorable photographs.", textHi: "मुझे बहुत खुशी है कि हमने इन यादगार तस्वीरों को संभाल कर रखा।" }
    ]
  },
  {
    id: "d06_sc03",
    title: "Discussing Weather and Scenic Highlights of Last Weekend's Trip",
    titleHi: "पिछले वीकेंड की यात्रा के मौसम और दृश्यों पर बातचीत",
    context: "Pooja tells her colleague Sneha about her weekend mountain trip to Nainital.",
    situation: "Past travel experiences with 'was', 'were', 'wasn't'",
    characters: ["Pooja", "Sneha"],
    turns: [
      { speaker: "Sneha", avatar: "👩‍💼", textEn: "Pooja, how was your weekend road trip to Nainital?", textHi: "पूजा, नैनीताल का आपका वीकेंड रोड ट्रिप कैसा रहा?" },
      { speaker: "Pooja", avatar: "🏞️", textEn: "It was absolutely magical! The mountain air was crisp and revitalizing.", textHi: "यह सचमुच जादुई था! पहाड़ों की हवा एकदम ताज़ा और ऊर्जा देने वाली थी।" },
      { speaker: "Sneha", avatar: "👩‍💼", textEn: "Was the hill highway crowded on Saturday morning?", textHi: "क्या शनिवार सुबह पहाड़ी हाईवे पर बहुत भीड़ थी?" },
      { speaker: "Pooja", avatar: "🏞️", textEn: "No, surprisingly it wasn't crowded at all; the traffic was very light.", textHi: "नहीं, आश्चर्य की बात है कि बिल्कुल भीड़ नहीं थी; ट्रैफ़िक बहुत कम था।" },
      { speaker: "Sneha", avatar: "👩‍💼", textEn: "Were the hotels fully booked near the lakeside promenade?", textHi: "क्या झील के किनारे वाले सभी होटल पूरी तरह भरे हुए थे?" },
      { speaker: "Pooja", avatar: "🏞️", textEn: "Many resorts were packed with tourists, but our cottage reservation was already confirmed.", textHi: "कई रिसॉर्ट्स पर्यटकों से भरे हुए थे, लेकिन हमारा कॉटेज पहले से बुक था।" },
      { speaker: "Sneha", avatar: "👩‍💼", textEn: "How was the nighttime temperature in the valley?", textHi: "घाटी में रात का तापमान कैसा था?" },
      { speaker: "Pooja", avatar: "🏞️", textEn: "It was quite cold, around eight degrees, so woolen sweaters were essential.", textHi: "काफ़ी ठंड थी, लगभग आठ डिग्री, इसलिए ऊनी स्वेटर बहुत ज़रूरी थे।" },
      { speaker: "Sneha", avatar: "👩‍💼", textEn: "Was the traditional Kumaoni dinner delicious at the heritage restaurant?", textHi: "क्या हेरिटेज रेस्तरां में पारंपरिक कुमाऊँनी रात्रिभोज स्वादिष्ट था?" },
      { speaker: "Pooja", avatar: "🏞️", textEn: "It was heavenly! The spiced lentil curries and local breads were unforgettable.", textHi: "वह तो अद्भुत था! मसालेदार दालें और स्थानीय रोटियाँ अविस्मरणीय थीं।" }
    ]
  },
  {
    id: "d06_sc04",
    title: "Discussing a Previous Job and Past Career Responsibilities",
    titleHi: "पूर्व नौकरी और पिछली कार्य जिम्मेदारियों पर चर्चा",
    context: "During lunch, Ankit and Preeti discuss what their previous employment roles were like three years ago.",
    situation: "Past career experience using 'was', 'were'",
    characters: ["Ankit", "Preeti"],
    turns: [
      { speaker: "Ankit", avatar: "💼", textEn: "Preeti, where were you working before joining this media corporation?", textHi: "प्रीति, इस मीडिया कॉर्पोरेशन में आने से पहले तुम कहाँ काम कर रही थीं?" },
      { speaker: "Preeti", avatar: "👩‍💻", textEn: "I was a communications editor at a national publishing house for four years.", textHi: "मैं चार साल तक एक राष्ट्रीय प्रकाशन संस्थान में संचार संपादक थी।" },
      { speaker: "Ankit", avatar: "💼", textEn: "Was that role very demanding in terms of deadlines?", textHi: "क्या वह पद समय-सीमा के लिहाज़ से बहुत अधिक दबाव वाला था?" },
      { speaker: "Preeti", avatar: "👩‍💻", textEn: "Yes, it was quite stressful during print cycles, but the editorial team was fantastic.", textHi: "हाँ, छपाई के चक्र के दौरान काफ़ी तनाव होता था, लेकिन संपादकीय टीम बहुत शानदार थी।" },
      { speaker: "Ankit", avatar: "💼", textEn: "How many journalists and writers were under your direct editorial review?", textHi: "आपके सीधे संपादकीय निरीक्षण में कितने पत्रकार और लेखक थे?" },
      { speaker: "Preeti", avatar: "👩‍💻", textEn: "There were twelve senior columnists, and their articles were published weekly.", textHi: "बारह वरिष्ठ स्तंभकार थे, और उनके लेख साप्ताहिक रूप से प्रकाशित होते थे।" },
      { speaker: "Ankit", avatar: "💼", textEn: "Before my current software role, I was an assistant systems administrator in Pune.", textHi: "अपनी वर्तमान सॉफ़्टवेयर भूमिका से पहले, मैं पुणे में एक सहायक सिस्टम प्रशासक था।" },
      { speaker: "Preeti", avatar: "👩‍💻", textEn: "Were server outages frequent back then?", textHi: "क्या उस समय सर्वर बार-बार ठप होते थे?" },
      { speaker: "Ankit", avatar: "💼", textEn: "Fortunately not; our network backup protocols were very robust and reliable.", textHi: "सौभाग्य से नहीं; हमारे नेटवर्क बैकअप प्रोटोकॉल बहुत मज़बूत और विश्वसनीय थे।" },
      { speaker: "Preeti", avatar: "👩‍💻", textEn: "Those prior career experiences were invaluable in shaping our professional skills.", textHi: "वे पिछले करियर अनुभव हमारे पेशेवर कौशल को निखारने में बेहद अमूल्य रहे हैं।" }
    ]
  },
  {
    id: "d06_sc05",
    title: "Discussing an Electrifying Live Musical Concert Experience",
    titleHi: "बीती रात के लाइव म्यूज़िक कॉन्सर्ट के अनुभव पर बातचीत",
    context: "Karan and Gaurav talk about the classical fusion concert they attended over the weekend.",
    situation: "Event review using 'was', 'were', 'wasn't'",
    characters: ["Karan", "Gaurav"],
    turns: [
      { speaker: "Karan", avatar: "🎸", textEn: "Gaurav! That concert on Saturday night was out of this world!", textHi: "गौरव! शनिवार रात का वह कॉन्सर्ट सचमुच अद्भुत था!" },
      { speaker: "Gaurav", avatar: "🎵", textEn: "I agree 100%! The sitar and drum solos were breathtaking.", textHi: "मैं 100% सहमत हूँ! सितार और ड्रम की जुगलबंदी मनमोहक थी।" },
      { speaker: "Karan", avatar: "🎸", textEn: "The auditorium was completely sold out; there wasn't a single empty seat.", textHi: "सभागार पूरी तरह से खचाखच भरा था; एक भी सीट खाली नहीं थी।" },
      { speaker: "Gaurav", avatar: "🎵", textEn: "Were our seats in the second tier good for acoustics?", textHi: "क्या दूसरी मंज़िल पर हमारी सीटें आवाज़ की स्पष्टता के लिए अच्छी थीं?" },
      { speaker: "Karan", avatar: "🎸", textEn: "The sound clarity was phenomenal from every angle in the hall.", textHi: "हॉल के हर कोने से आवाज़ की स्पष्टता असाधारण थी।" },
      { speaker: "Gaurav", avatar: "🎵", textEn: "The final twenty-minute crescendo was pure musical genius.", textHi: "अंतिम बीस मिनट की संगीत प्रस्तुति विशुद्ध प्रतिभा का प्रदर्शन थी।" },
      { speaker: "Karan", avatar: "🎸", textEn: "Everyone in the audience was on their feet giving a standing ovation.", textHi: "दर्शकों में मौजूद हर कोई खड़े होकर तालियाँ बजा रहा था।" },
      { speaker: "Gaurav", avatar: "🎵", textEn: "The lighting effects were also perfectly synchronized with the rhythm.", textHi: "लाइटिंग इफ़ेक्ट्स भी ताल के साथ पूरी तरह से मेल खा रहे थे।" },
      { speaker: "Karan", avatar: "🎸", textEn: "It was definitely the most memorable musical night of the entire year.", textHi: "यह निश्चित रूप से पूरे साल की सबसे यादगार संगीत संध्या थी।" },
      { speaker: "Gaurav", avatar: "🎵", textEn: "I was humming those ragas all morning yesterday!", textHi: "मैं कल सुबह से ही उन रागों को गुनगुना रहा था!" }
    ]
  },
  {
    id: "d06_sc06",
    title: "Tracking Down Where Misplaced Keys Were Found This Morning",
    titleHi: "सुबह खोई चाबियाँ कहाँ थीं, इस पर चर्चा",
    context: "Manish and Priya talk about finding a bunch of lost house keys.",
    situation: "Locating items with 'was', 'were'",
    characters: ["Manish", "Priya"],
    turns: [
      { speaker: "Manish", avatar: "🔑", textEn: "Priya, where were my car keys this morning? I searched the entryway bowl.", textHi: "प्रिया, आज सुबह मेरी कार की चाबियाँ कहाँ थीं? मैंने प्रवेश द्वार वाले कटोरे में ढूँढा था।" },
      { speaker: "Priya", avatar: "🏠", textEn: "They weren't in the bowl. They were on the kitchen dining counter behind the fruit basket.", textHi: "वे कटोरे में नहीं थीं। वे रसोई के डाइनिंग काउंटर पर फलों की टोकरी के पीछे थीं।" },
      { speaker: "Manish", avatar: "🔑", textEn: "Oh, of course! I was carrying grocery bags last night when I set them down there.", textHi: "ओह, बिल्कुल! कल रात जब मैंने उन्हें वहाँ रखा था तब मेरे हाथ में किराने का सामान था।" },
      { speaker: "Priya", avatar: "🏠", textEn: "And where was your office identity badge?", textHi: "और आपका ऑफ़िस पहचान पत्र कहाँ था?" },
      { speaker: "Manish", avatar: "🔑", textEn: "It was inside the side pocket of my blue formal blazer.", textHi: "यह मेरे नीले फ़ॉर्मल ब्लेज़र की साइड पॉकेट में था।" },
      { speaker: "Priya", avatar: "🏠", textEn: "You were in such a hurry this morning because the alarm was ten minutes late.", textHi: "आज सुबह आप इतनी जल्दी में थे क्योंकि अलार्म दस मिनट देर से बजा था।" },
      { speaker: "Manish", avatar: "🔑", textEn: "Yes, I was afraid I would miss the morning express train.", textHi: "हाँ, मुझे डर था कि कहीं सुबह की एक्सप्रेस ट्रेन न छूट जाए।" },
      { speaker: "Priya", avatar: "🏠", textEn: "Was the train punctual at eight-fifteen?", textHi: "क्या सवा आठ बजे ट्रेन समय पर थी?" },
      { speaker: "Manish", avatar: "🔑", textEn: "Surprisingly, the train was delayed by five minutes, so I caught it smoothly.", textHi: "हैरानी की बात है कि ट्रेन पाँच मिनट लेट थी, इसलिए मैं आराम से चढ़ गया।" },
      { speaker: "Priya", avatar: "🏠", textEn: "That was a lucky coincidence for you!", textHi: "यह आपके लिए एक बहुत ही भाग्यशाली संयोग था!" }
    ]
  },
  {
    id: "d06_sc07",
    title: "Discussing How the City Was Twenty Years Ago",
    titleHi: "बीस वर्ष पूर्व शहर की स्थिति और परिवर्तनों पर चर्चा",
    context: "An elder grandfather, Mr. Mehra, describes what the city suburbs were like in the year 2000 to his grandson Sahil.",
    situation: "Historical changes using 'was', 'were', 'used to be'",
    characters: ["Mr. Mehra", "Sahil"],
    turns: [
      { speaker: "Sahil", avatar: "👦", textEn: "Grandpa, was this expressway always this wide and busy?", textHi: "दादाजी, क्या यह एक्सप्रेसवे हमेशा इतना चौड़ा और व्यस्त था?" },
      { speaker: "Mr. Mehra", avatar: "👴", textEn: "No, Sahil. Twenty years ago, this entire area was open green farmland.", textHi: "नहीं साहिल। बीस साल पहले यह पूरा इलाका खुला हरा-भरा खेत हुआ करता था।" },
      { speaker: "Sahil", avatar: "👦", textEn: "Really? Were there any residential towers back then?", textHi: "सच में? क्या उस समय कोई ऊंची रिहायशी इमारतें थीं?" },
      { speaker: "Mr. Mehra", avatar: "👴", textEn: "No, there weren't any skyscrapers. There were only small village settlements and mango orchards.", textHi: "नहीं, कोई गगनचुंबी इमारतें नहीं थीं। केवल छोटी ग्रामीण बस्तियाँ और आम के बगीचे थे।" },
      { speaker: "Sahil", avatar: "👦", textEn: "How was the commute into the main city market in those days?", textHi: "उन दिनों मुख्य शहर के बाज़ार तक जाना कैसा होता था?" },
      { speaker: "Mr. Mehra", avatar: "👴", textEn: "It was a two-hour journey by state transport bus on a narrow two-lane road.", textHi: "एक संकरी दो-लेन सड़क पर राज्य परिवहन की बस से दो घंटे की यात्रा होती थी।" },
      { speaker: "Sahil", avatar: "👦", textEn: "Now the metro train covers that exact distance in just twenty minutes!", textHi: "अब मेट्रो ट्रेन वही दूरी सिर्फ़ बीस मिनट में तय कर लेती है!" },
      { speaker: "Mr. Mehra", avatar: "👴", textEn: "Yes, the urban transformation was remarkably rapid over the last two decades.", textHi: "हाँ, पिछले दो दशकों में शहरी बदलाव बहुत तेज़ी से हुआ।" },
      { speaker: "Sahil", avatar: "👦", textEn: "The air was probably much cleaner and purer back then.", textHi: "उस समय हवा शायद बहुत अधिक साफ़ और शुद्ध रही होगी।" },
      { speaker: "Mr. Mehra", avatar: "👴", textEn: "Yes, the nights were cool and the stars were clearly visible across the sky.", textHi: "हाँ, रातें ठंडी होती थीं और आसमान में तारे बिल्कुल साफ़ दिखाई देते थे।" }
    ]
  },
  {
    id: "d06_sc08",
    title: "Explaining Heavy Road Congestion and Commute Delays",
    titleHi: "सड़क पर भारी जाम और देर से पहुँचने का कारण समझाना",
    context: "Divakar explains to his team why he was delayed reaching the client meeting.",
    situation: "Traffic explanations using 'was', 'were'",
    characters: ["Divakar", "Sunil"],
    turns: [
      { speaker: "Divakar", avatar: "🚗", textEn: "I apologize for being fifteen minutes late. The ring road was completely gridlocked.", textHi: "पंद्रह मिनट देर से आने के लिए मैं माफ़ी चाहता हूँ। रिंग रोड पूरी तरह से जाम थी।" },
      { speaker: "Sunil", avatar: "👨‍💼", textEn: "We understand, Divakar. Was there a vehicle breakdown on the flyover?", textHi: "हम समझ सकते हैं, दिवाकर। क्या फ़्लाईओवर पर कोई गाड़ी ख़राब हो गई थी?" },
      { speaker: "Divakar", avatar: "🚗", textEn: "Yes, a commercial transport truck was stranded across two central lanes.", textHi: "हाँ, एक कमर्शियल ट्रांसपोर्ट ट्रक दो मुख्य लेनों के बीच फंसा हुआ था।" },
      { speaker: "Sunil", avatar: "👨‍💼", textEn: "Were traffic police officers redirecting vehicles?", textHi: "क्या ट्रैफ़िक पुलिस वाले गाड़ियों का रास्ता बदल रहे थे?" },
      { speaker: "Divakar", avatar: "🚗", textEn: "Yes, they were actively clearing the bottleneck, but the tailback was over three kilometers long.", textHi: "हाँ, वे जाम हटाने में लगे हुए थे, लेकिन गाड़ियों की कतार तीन किलोमीटर से भी लंबी थी।" },
      { speaker: "Sunil", avatar: "👨‍💼", textEn: "That sounds terrible. We were worried you might be stuck for hours.", textHi: "यह तो बहुत बुरा था। हमें चिंता थी कि कहीं आप घंटों न फंसे रह जाएँ।" },
      { speaker: "Divakar", avatar: "🚗", textEn: "Luckily, a side service lane was open, so I diverted through the residential sector.", textHi: "सौभाग्य से एक साइड सर्विस लेन खुली थी, इसलिए मैं रिहायशी इलाके से मुड़ गया।" },
      { speaker: "Sunil", avatar: "👨‍💼", textEn: "Good strategic decision! The client presentation is just getting underway.", textHi: "बहुत बढ़िया निर्णय! क्लाइंट प्रेजेंटेशन अभी शुरू ही हो रहा है।" },
      { speaker: "Divakar", avatar: "🚗", textEn: "Thank you for holding the introductory slides for me.", textHi: "मेरे लिए शुरुआती स्लाइड रोक कर रखने के लिए धन्यवाद।" },
      { speaker: "Sunil", avatar: "👨‍💼", textEn: "Always glad to support a teammate!", textHi: "टीम के साथी का सहयोग करने में हमेशा खुशी होती है!" }
    ]
  },
  {
    id: "d06_sc09",
    title: "Discussing Previous Housing Conditions in the Old Quarter",
    titleHi: "पुराने मोहल्ले में पिछले मकान की स्थिति पर चर्चा",
    context: "Renu and Tarun compare their former rented apartment with their spacious new home.",
    situation: "Comparing past housing using 'was', 'weren't'",
    characters: ["Renu", "Tarun"],
    turns: [
      { speaker: "Renu", avatar: "🏡", textEn: "Tarun, remember how small our previous rented apartment was two years ago?", textHi: "तरुण, याद है दो साल पहले हमारा पुराना किराए का फ्लैट कितना छोटा था?" },
      { speaker: "Tarun", avatar: "🛋️", textEn: "Oh yes! The living room was barely ten feet wide, and the kitchen was tiny.", textHi: "अरे हाँ! बैठक बमुश्किल दस फीट चौड़ी थी, और रसोई बहुत छोटी थी।" },
      { speaker: "Renu", avatar: "🏡", textEn: "And there wasn't any reserved parking space inside the building gates.", textHi: "और इमारत के गेट के अंदर कोई आरक्षित पार्किंग की जगह भी नहीं थी।" },
      { speaker: "Tarun", avatar: "🛋️", textEn: "The stairs were steep, and there was no elevator for the third floor.", textHi: "सीढ़ियाँ बहुत खड़ी थीं, और तीसरी मंज़िल के लिए कोई लिफ़्ट नहीं थी।" },
      { speaker: "Renu", avatar: "🏡", textEn: "Yet the neighborhood was very vibrant and the grocery market was just across the road.", textHi: "फिर भी वह मोहल्ला बहुत जीवंत था और किराने का बाज़ार ठीक सड़क के पार था।" },
      { speaker: "Tarun", avatar: "🛋️", textEn: "True, our old neighbors were exceptionally kind and helpful people.", textHi: "सच है, हमारे पुराने पड़ोसी असाधारण रूप से दयालु और मददगार लोग थे।" },
      { speaker: "Renu", avatar: "🏡", textEn: "Our new house is so much brighter and more spacious.", textHi: "हमारा नया घर कहीं अधिक रोशन और विशाल है।" },
      { speaker: "Tarun", avatar: "🛋️", textEn: "Yes, moving here was definitely the right decision for our growing family.", textHi: "हाँ, यहाँ आना निश्चित रूप से हमारे बढ़ते परिवार के लिए सही निर्णय था।" },
      { speaker: "Renu", avatar: "🏡", textEn: "Those early rental years were a great learning experience in budgeting.", textHi: "किराए के वे शुरुआती साल बजट प्रबंधन का एक बहुत बड़ा सीख भरा अनुभव थे।" },
      { speaker: "Tarun", avatar: "🛋️", textEn: "Every phase of life was meaningful and had its own special charm.", textHi: "जीवन का हर पड़ाव सार्थक था और उसका अपना एक विशेष आकर्षण था।" }
    ]
  },
  {
    id: "d06_sc10",
    title: "Discussing Nervous Feelings Before a Keynote Speech",
    titleHi: "भाषण से पूर्व की घबराहट और बाद की सफलता पर चर्चा",
    context: "Kavya shares with her mentor how nervous she was before stepping on stage at the annual convention.",
    situation: "Reflecting on past emotions using 'was', 'were'",
    characters: ["Mentor Mr. Gupta", "Kavya"],
    turns: [
      { speaker: "Mr. Gupta", avatar: "👨‍🏫", textEn: "Kavya, your keynote address this morning was outstanding!", textHi: "काव्या, आज सुबह का आपका मुख्य भाषण उत्कृष्ट था!" },
      { speaker: "Kavya", avatar: "🎤", textEn: "Thank you, Mr. Gupta! To be honest, I was terrified before walking onto the stage.", textHi: "धन्यवाद, मिस्टर गुप्ता! सच कहूँ तो, मंच पर जाने से पहले मैं बहुत डरी हुई थी।" },
      { speaker: "Mr. Gupta", avatar: "👨‍🏫", textEn: "Were your hands shaking when you picked up the microphone?", textHi: "क्या माइक उठाते समय आपके हाथ कांप रहे थे?" },
      { speaker: "Kavya", avatar: "🎤", textEn: "Yes, my palms were sweating and my heart rate was through the roof!", textHi: "हाँ, मेरी हथेलियों में पसीना आ रहा था और दिल की धड़कन बहुत तेज़ थी!" },
      { speaker: "Mr. Gupta", avatar: "👨‍🏫", textEn: "You never showed it for a single moment. Your voice was steady and confident.", textHi: "आपने एक पल के लिए भी ऐसा ज़ाहिर नहीं होने दिया। आपकी आवाज़ स्थिर और आत्मविश्वास से भरी थी।" },
      { speaker: "Kavya", avatar: "🎤", textEn: "Once I looked at the audience and began the first story, the fear was gone.", textHi: "जैसे ही मैंने श्रोताओं की ओर देखा और पहली कहानी शुरू की, डर छू-मंतर हो गया।" },
      { speaker: "Mr. Gupta", avatar: "👨‍🏫", textEn: "The delegates were fully engaged throughout the forty-five minutes.", textHi: "पूरे पैंतालीस मिनट तक प्रतिनिधि पूरी तरह से एकाग्र और जुड़े रहे।" },
      { speaker: "Kavya", avatar: "🎤", textEn: "The question-and-answer session was so intellectually stimulating.", textHi: "सवाल-जवाब का सत्र बौद्धिक रूप से बहुत ही प्रेरक था।" },
      { speaker: "Mr. Gupta", avatar: "👨‍🏫", textEn: "That proves that preparation and courage overcome stage fright every time.", textHi: "यह साबित करता है कि तैयारी और साहस हर बार मंच के डर पर विजय पाते हैं।" },
      { speaker: "Kavya", avatar: "🎤", textEn: "I am grateful for all the practice sessions we had last week!", textHi: "पिछले हफ़्ते हमने जो भी अभ्यास सत्र किए, उनके लिए मैं आभारी हूँ!" }
    ]
  }
];
