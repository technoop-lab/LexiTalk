// Stage 1 Day 9: 10 Distinct Long-Form Dialogues (Possession, Relationships & Attributes: Has / Have / Had)
// Focus: Have / Has / Had, Don't have, Doesn't have, Do you have...?, Have you got...?, Possession, Health & Belongings

export const day9Dialogues = [
  {
    id: "d09_sc01",
    title: "Double-Checking Travel Essentials Before Departing for the Airport",
    titleHi: "हवाई अड्डे के लिए निकलने से पहले यात्रा के सामान की जाँच",
    context: "Husband and wife, Rohit and Shalini, verify passports, tickets, and foreign currency before their international trip.",
    situation: "Checking belongings using 'have', 'has', 'don't have'",
    characters: ["Rohit", "Shalini"],
    turns: [
      { speaker: "Rohit", avatar: "🧳", textEn: "Shalini, do you have the original passports in your travel purse?", textHi: "शालिनी, क्या तुम्हारे पास पर्स में असली पासपोर्ट हैं?" },
      { speaker: "Shalini", avatar: "👜", textEn: "Yes, I have both passports and the printed boarding passes right here.", textHi: "हाँ, मेरे पास दोनों पासपोर्ट और प्रिंटेड बोर्डिंग पास यहीं रखे हैं।" },
      { speaker: "Rohit", avatar: "🧳", textEn: "Do we have foreign currency in cash, or do you have the international forex card?", textHi: "क्या हमारे पास विदेशी मुद्रा नकद में है, या तुम्हारे पास अंतरराष्ट्रीय फ़ॉरेक्स कार्ड है?" },
      { speaker: "Shalini", avatar: "👜", textEn: "I have five hundred dollars in cash and Rohit has the pre-loaded multi-currency card.", textHi: "मेरे पास पाँच सौ डॉलर नकद हैं और रोहित के पास पहले से रिचार्ज किया हुआ कार्ड है।" },
      { speaker: "Rohit", avatar: "🧳", textEn: "Does the laptop bag have the universal travel power adapter?", textHi: "क्या लैपटॉप बैग में यूनिवर्सल ट्रैवल पावर एडेप्टर रखा है?" },
      { speaker: "Shalini", avatar: "👜", textEn: "No, it doesn't have the adapter yet. I have it on the dressing table.", textHi: "नहीं, उसमें अभी एडेप्टर नहीं है। वह मेरे पास ड्रेसिंग टेबल पर रखा है।" },
      { speaker: "Rohit", avatar: "🧳", textEn: "Please pack it immediately. Our hotel rooms in Tokyo have different plug sockets.", textHi: "कृपया इसे तुरंत रख लो। टोक्यो में हमारे होटल के कमरों में अलग तरह के प्लग सॉकेट हैं।" },
      { speaker: "Shalini", avatar: "👜", textEn: "Done. Do you have your prescription allergy medicines?", textHi: "रख लिया। क्या आपके पास अपनी एलर्जी की दवाइयाँ हैं?" },
      { speaker: "Rohit", avatar: "🧳", textEn: "Yes, I have a small medical pouch with all our emergency tablets.", textHi: "हाँ, मेरे पास हमारी सभी आपातकालीन दवाइयों का एक छोटा पाउच है।" },
      { speaker: "Shalini", avatar: "👜", textEn: "We had a lot of packing to do yesterday, but now we have everything organized.", textHi: "कल हमारे पास बहुत पैकिंग करने को थी, लेकिन अब हमारे पास सब कुछ व्यवस्थित है।" },
      { speaker: "Rohit", avatar: "🧳", textEn: "The airport cab is waiting downstairs. We have plenty of time!", textHi: "एयरपोर्ट कैब नीचे इंतज़ार कर रही है। हमारे पास काफ़ी समय है!" }
    ]
  },
  {
    id: "d09_sc02",
    title: "Discussing Siblings, Extended Family, and Pets",
    titleHi: "भाई-बहनों, परिवार और पालतू जानवरों पर चर्चा",
    context: "Two new colleagues, Ananya and Varun, chat about their family backgrounds during lunch break.",
    situation: "Family relationships using 'have', 'has'",
    characters: ["Ananya", "Varun"],
    turns: [
      { speaker: "Ananya", avatar: "👩‍💼", textEn: "Varun, do you have any brothers or sisters?", textHi: "वरुण, क्या तुम्हारा कोई भाई या बहन है?" },
      { speaker: "Varun", avatar: "👨‍💼", textEn: "Yes, I have an elder sister. She has two lovely twin daughters.", textHi: "हाँ, मेरी एक बड़ी बहन है। उसकी दो प्यारी जुड़वां बेटियाँ हैं।" },
      { speaker: "Ananya", avatar: "👩‍💼", textEn: "That's wonderful! What does she do?", textHi: "यह तो बहुत अच्छी बात है! वह क्या करती हैं?" },
      { speaker: "Varun", avatar: "👨‍💼", textEn: "She is a pediatric doctor and her husband has a dental clinic in Chandigarh.", textHi: "वह एक बाल रोग विशेषज्ञ हैं और उनके पति का चंडीगढ़ में एक डेंटल क्लिनिक है।" },
      { speaker: "Ananya", avatar: "👩‍💼", textEn: "Do you have any pets at home?", textHi: "क्या तुम्हारे घर में कोई पालतू जानवर है?" },
      { speaker: "Varun", avatar: "👨‍💼", textEn: "Yes, we have a golden retriever named Max. He has so much playful energy!", textHi: "हाँ, हमारे पास मैक्स नाम का एक गोल्डन रिट्रीवर है। उसमें बहुत चंचल ऊर्जा है!" },
      { speaker: "Ananya", avatar: "👩‍💼", textEn: "I love dogs! We had a German shepherd when I was in school.", textHi: "मुझे कुत्ते बहुत पसंद हैं! जब मैं स्कूल में थी तब हमारे पास एक जर्मन शेफर्ड था।" },
      { speaker: "Varun", avatar: "👨‍💼", textEn: "How about your family, Ananya? Do you have siblings?", textHi: "तुम्हारे परिवार में कौन-कौन है, अनन्या? क्या तुम्हारे कोई भाई-बहन हैं?" },
      { speaker: "Ananya", avatar: "👩‍💼", textEn: "I have a younger brother. He is a mechanical engineering student in Pune.", textHi: "मेरा एक छोटा भाई है। वह पुणे में मैकेनिकल इंजीनियरिंग का छात्र है।" },
      { speaker: "Varun", avatar: "👨‍💼", textEn: "Having supportive siblings is one of life's greatest gifts.", textHi: "सहयोगी भाई-बहनों का होना जीवन के सबसे बड़े उपहारों में से एक है।" }
    ]
  },
  {
    id: "d09_sc03",
    title: "Borrowing Presentation Dongles and Meeting Accessories",
    titleHi: "बैठक के लिए केबल और तकनीकी सामान माँगना",
    context: "Deepak needs an HDMI converter and asks his coworker Natasha before a board meeting.",
    situation: "Workplace supplies using 'do you have', 'I have', 'doesn't have'",
    characters: ["Deepak", "Natasha"],
    turns: [
      { speaker: "Deepak", avatar: "💻", textEn: "Natasha, do you have a USB-C to HDMI display adapter?", textHi: "नताशा, क्या तुम्हारे पास यूएसबी-सी से एचडीएमआई वाला डिस्प्ले एडेप्टर है?" },
      { speaker: "Natasha", avatar: "👩‍💻", textEn: "Yes, I have one in my tech pouch. Let me grab it for you.", textHi: "हाँ, मेरे पाउच में एक है। मैं तुम्हारे लिए निकालती हूँ।" },
      { speaker: "Deepak", avatar: "💻", textEn: "Does this adapter have support for 4K video output?", textHi: "क्या यह एडेप्टर 4K वीडियो आउटपुट को सपोर्ट करता है?" },
      { speaker: "Natasha", avatar: "👩‍💻", textEn: "Yes, it has 4K 60Hz capability and it also has an extra USB port.", textHi: "हाँ, इसमें 4K 60Hz की क्षमता है और इसमें एक अतिरिक्त यूएसबी पोर्ट भी है।" },
      { speaker: "Deepak", avatar: "💻", textEn: "That's fantastic. Do you also have a wireless presentation clicker?", textHi: "यह तो बहुत बढ़िया है। क्या तुम्हारे पास वायरलेस प्रेजेंटेशन क्लिकर भी है?" },
      { speaker: "Natasha", avatar: "👩‍💻", textEn: "I don't have a laser clicker, but Rahul has one in the finance bay.", textHi: "मेरे पास लेज़र क्लिकर नहीं है, लेकिन फाइनेंस डिपार्टमेंट में राहुल के पास एक है।" },
      { speaker: "Deepak", avatar: "💻", textEn: "Great, I will borrow it from him. We had a technical glitch yesterday during rehearsal.", textHi: "बहुत अच्छा, मैं उससे ले लूँगा। कल रिहर्सल के दौरान हमें तकनीकी समस्या आई थी।" },
      { speaker: "Natasha", avatar: "👩‍💻", textEn: "Today our conference projector has a new bulb, so the display will be crisp.", textHi: "आज हमारे कॉन्फ्रेंस प्रोजेक्टर में नया बल्ब लगा है, इसलिए डिस्प्ले बिल्कुल साफ़ दिखेगा।" },
      { speaker: "Deepak", avatar: "💻", textEn: "Thank you so much for your timely help, Natasha.", textHi: "समय पर मदद करने के लिए तुम्हारा बहुत-बहुत धन्यवाद, नताशा।" },
      { speaker: "Natasha", avatar: "👩‍💻", textEn: "You have an outstanding deck of slides. All the best with the pitch!", textHi: "तुम्हारे पास स्लाइड्स का बहुत शानदार सेट है। प्रेजेंटेशन के लिए शुभकामनाएँ!" }
    ]
  },
  {
    id: "d09_sc04",
    title: "Consulting a Pharmacist About Headaches and Health Remedies",
    titleHi: "सिरदर्द और स्वास्थ्य संबंधी समस्याओं के लिए फार्मासिस्ट से परामर्श",
    context: "A customer, Tarun, visits a pharmacy complaining of a throbbing headache and throat pain.",
    situation: "Describing medical symptoms using 'have a headache', 'has a fever'",
    characters: ["Pharmacist", "Tarun"],
    turns: [
      { speaker: "Pharmacist", avatar: "💊", textEn: "Good evening, sir. How can I help you today?", textHi: "शुभ संध्या, सर। आज मैं आपकी क्या सहायता कर सकता हूँ?" },
      { speaker: "Tarun", avatar: "🤕", textEn: "Good evening. I have a severe throbbing headache and a dry cough since noon.", textHi: "शुभ संध्या। मुझे दोपहर से बहुत तेज़ सिरदर्द और सूखी खांसी हो रही है।" },
      { speaker: "Pharmacist", avatar: "💊", textEn: "Do you have a fever or body chills as well?", textHi: "क्या आपको बुखार या शरीर में कंपकंपी भी महसूस हो रही है?" },
      { speaker: "Tarun", avatar: "🤕", textEn: "No, I don't have a high temperature, but I have body fatigue and eye strain.", textHi: "नहीं, मुझे तेज़ बुखार नहीं है, लेकिन शरीर में थकान और आँखों में भारीपन है।" },
      { speaker: "Pharmacist", avatar: "💊", textEn: "Do you have any existing allergies to paracetamol or pain relievers?", textHi: "क्या आपको पैरासिटामोल या दर्द निवारक दवाओं से कोई पुरानी एलर्जी है?" },
      { speaker: "Tarun", avatar: "🤕", textEn: "No, I don't have any medical allergies.", textHi: "नहीं, मुझे किसी दवा से कोई एलर्जी नहीं है।" },
      { speaker: "Pharmacist", avatar: "💊", textEn: "Here is paracetamol for your headache. Take one tablet after food.", textHi: "सिरदर्द के लिए यह पैरासिटामोल है। भोजन के बाद एक गोली लें।" },
      { speaker: "Tarun", avatar: "🤕", textEn: "Do you have herbal lozenges for soothing throat irritation?", textHi: "क्या गले की खराश दूर करने के लिए आपके पास हर्बल लोज़ेंजेस (टॉफ़ी) हैं?" },
      { speaker: "Pharmacist", avatar: "💊", textEn: "Yes, we have honey-ginger and tulsi menthol lozenges right here.", textHi: "हाँ, हमारे पास शहद-अदरक और तुलसी-मेंथॉल वाली गोलियाँ मौजूद हैं।" },
      { speaker: "Tarun", avatar: "🤕", textEn: "I will take one pack of each. Thank you for your helpful guidance.", textHi: "मैं दोनों का एक-एक पैकेट लूँगा। आपके उपयोगी मार्गदर्शन के लिए धन्यवाद।" }
    ]
  },
  {
    id: "d09_sc05",
    title: "Comparing Automobile Specifications and Engine Attributes",
    titleHi: "कार की विशेषताओं, माइलेज और इंजन की तुलना",
    context: "A car buyer, Sunil, inquires with showroom consultant Gaurav about SUV specifications.",
    situation: "Vehicle attributes using 'has', 'have', 'doesn't have'",
    characters: ["Gaurav", "Sunil"],
    turns: [
      { speaker: "Gaurav", avatar: "🚘", textEn: "Good afternoon, sir! This compact SUV has a 1.5-liter turbocharged petrol engine.", textHi: "शुभ दोपहर, सर! इस कॉम्पैक्ट एसयूवी में 1.5-लीटर टर्बोचार्ज्ड पेट्रोल इंजन है।" },
      { speaker: "Sunil", avatar: "👨", textEn: "Does it have an automatic dual-clutch transmission option?", textHi: "क्या इसमें ऑटोमैटिक डुअल-क्लच ट्रांसमिशन का विकल्प है?" },
      { speaker: "Gaurav", avatar: "🚘", textEn: "Yes, it has a 7-speed automatic gearbox, and it also has paddle shifters behind the wheel.", textHi: "जी हाँ, इसमें 7-स्पीड ऑटोमैटिक गियरबॉक्स है, और स्टीयरिंग के पीछे पैडल शिफ्टर्स भी हैं।" },
      { speaker: "Sunil", avatar: "👨", textEn: "How many safety airbags does this top-end variant have?", textHi: "इस टॉप मॉडल में कितने सुरक्षा एयरबैग हैं?" },
      { speaker: "Gaurav", avatar: "🚘", textEn: "It has six airbags as standard, and it has electronic stability control and hill assist.", textHi: "इसमें मानक रूप से छह एयरबैग हैं, और इसमें इलेक्ट्रॉनिक स्थिरता नियंत्रण तथा हिल असिस्ट है।" },
      { speaker: "Sunil", avatar: "👨", textEn: "Does the base model have ventilated front seats?", textHi: "क्या बेस मॉडल में हवादार (वेंटिलेटेड) फ्रंट सीटें हैं?" },
      { speaker: "Gaurav", avatar: "🚘", textEn: "No, the base model doesn't have seat ventilation; only the luxury trim has that feature.", textHi: "नहीं, बेस मॉडल में वेंटिलेशन नहीं है; केवल लक्ज़री मॉडल में यह सुविधा है।" },
      { speaker: "Sunil", avatar: "👨", textEn: "What kind of fuel economy does it have in heavy city traffic?", textHi: "शहर के भारी ट्रैफ़िक में इसका माइलेज कितना रहता है?" },
      { speaker: "Gaurav", avatar: "🚘", textEn: "It has an ARAI-certified mileage of sixteen kilometers per liter.", textHi: "इसका एआरएआई-प्रमाणित माइलेज सोलह किलोमीटर प्रति लीटर है।" },
      { speaker: "Sunil", avatar: "👨", textEn: "This model has all the advanced comfort and safety features my family desires.", textHi: "इस मॉडल में वे सभी आधुनिक सुविधाएँ और सुरक्षा हैं जो मेरे परिवार को चाहिए।" }
    ]
  },
  {
    id: "d09_sc06",
    title: "Inquiring About Food Allergies and Dietary Preferences at a Restaurant",
    titleHi: "रेस्तरां में भोजन की एलर्जी और खान-पान की प्राथमिकताओं की पूछताछ",
    context: "A diner, Radhika, asks the head chef, Chef Arjun, about dairy and peanut content in dishes.",
    situation: "Dietary attributes using 'has', 'have', 'doesn't have'",
    characters: ["Chef Arjun", "Radhika"],
    turns: [
      { speaker: "Chef Arjun", avatar: "👨‍🍳", textEn: "Good evening, ma'am! Welcome to Gourmet Kitchen. Do you have any dietary restrictions tonight?", textHi: "शुभ संध्या, मैम! गॉरमेट किचन में आपका स्वागत है। क्या आज रात आपकी कोई विशेष परहेज़ आवश्यकता है?" },
      { speaker: "Radhika", avatar: "🥗", textEn: "Good evening, chef. I have a severe allergy to peanuts and tree nuts.", textHi: "शुभ संध्या, शेफ़। मुझे मूंगफली और मेवों से गंभीर एलर्जी है।" },
      { speaker: "Chef Arjun", avatar: "👨‍🍳", textEn: "Thank you for informing us. Does this Thai curry have crushed peanuts in its sauce base?", textHi: "हमें बताने के लिए धन्यवाद। क्या इस थाई करी की ग्रेवी में पिसी हुई मूंगफली होती है?" },
      { speaker: "Radhika", avatar: "🥗", textEn: "Yes, traditional massaman curry usually has peanut paste.", textHi: "हाँ, पारंपरिक मस्समन करी में आमतौर पर मूंगफली का पेस्ट होता है।" },
      { speaker: "Chef Arjun", avatar: "👨‍🍳", textEn: "Our coconut green curry doesn't have any peanuts or nuts. It has fresh lemongrass and basil.", textHi: "हमारी नारियल वाली ग्रीन करी में कोई मूंगफली या मेवे नहीं हैं। इसमें ताज़ा लेमनग्रास और तुलसी है।" },
      { speaker: "Radhika", avatar: "🥗", textEn: "Does that green curry have dairy cream or gluten?", textHi: "क्या उस ग्रीन करी में डेयरी क्रीम या ग्लूटेन है?" },
      { speaker: "Chef Arjun", avatar: "👨‍🍳", textEn: "No, it has 100% pure organic coconut milk and it is completely gluten-free.", textHi: "नहीं, इसमें 100% शुद्ध नारियल का दूध है और यह पूरी तरह से ग्लूटेन-मुक्त है।" },
      { speaker: "Radhika", avatar: "🥗", textEn: "That sounds delicious and completely safe for me. I will order the green curry with jasmine rice.", textHi: "यह बहुत स्वादिष्ट और मेरे लिए पूरी तरह सुरक्षित लगता है। मैं जैस्मीन राइस के साथ ग्रीन करी का ऑर्डर दूँगी।" },
      { speaker: "Chef Arjun", avatar: "👨‍🍳", textEn: "I will personally oversee your preparation in the allergy-safe kitchen zone.", textHi: "मैं एलर्जी-मुक्त रसोई क्षेत्र में आपके भोजन की तैयारी की व्यक्तिगत रूप से निगरानी करूँगा।" },
      { speaker: "Radhika", avatar: "🥗", textEn: "I have great peace of mind dining here. Thank you, chef!", textHi: "यहाँ भोजन करते हुए मुझे बहुत मानसिक शांति मिलती है। धन्यवाद, शेफ़!" }
    ]
  },
  {
    id: "d09_sc07",
    title: "Comparing Features of Two Modern Smartphones",
    titleHi: "दो आधुनिक स्मार्टफ़ोन की खूबियों की तुलना",
    context: "Two tech enthusiasts, Kunal and Ritesh, compare camera sensors and battery life of their phones.",
    situation: "Tech features using 'has', 'doesn't have', 'have'",
    characters: ["Kunal", "Ritesh"],
    turns: [
      { speaker: "Kunal", avatar: "📱", textEn: "Ritesh, what camera sensors does your new flagship smartphone have?", textHi: "रितेश, तुम्हारे नए फ्लैगशिप स्मार्टफोन में कौन-कौन से कैमरा सेंसर हैं?" },
      { speaker: "Ritesh", avatar: "🤳", textEn: "It has a 200-megapixel primary sensor and it has a 5x optical periscope zoom lens.", textHi: "इसमें 200 मेगापिक्सल का मुख्य सेंसर है और 5x ऑप्टिकल पेरिस्कोप ज़ूम लेंस है।" },
      { speaker: "Kunal", avatar: "📱", textEn: "That is unbelievable zoom clarity! Does it have optical image stabilization on video?", textHi: "यह तो अविश्वसनीय ज़ूम स्पष्टता है! क्या इसमें वीडियो पर ऑप्टिकल इमेज स्टेबिलाइज़ेशन है?" },
      { speaker: "Ritesh", avatar: "🤳", textEn: "Yes, it has advanced gimbal stabilization. Videos have cinematic smoothness.", textHi: "हाँ, इसमें उन्नत गिम्बल स्टेबिलाइज़ेशन है। वीडियो में सिनेमाई सहजता आती है।" },
      { speaker: "Kunal", avatar: "📱", textEn: "My phone only has a 50MP sensor, but it has a 6000mAh battery that lasts two days.", textHi: "मेरे फ़ोन में केवल 50MP का सेंसर है, लेकिन इसमें 6000mAh की बैटरी है जो दो दिन चलती है।" },
      { speaker: "Ritesh", avatar: "🤳", textEn: "Does your device have ultra-fast charging support?", textHi: "क्या तुम्हारे डिवाइस में सुपर-फ़ास्ट चार्जिंग का सपोर्ट है?" },
      { speaker: "Kunal", avatar: "📱", textEn: "Yes, it has 120W wired fast charging. It reaches full charge in twenty minutes.", textHi: "हाँ, इसमें 120 वॉट की वायर्ड फ़ास्ट चार्जिंग है। यह बीस मिनट में पूरा चार्ज हो जाता है।" },
      { speaker: "Ritesh", avatar: "🤳", textEn: "My phone doesn't have such fast wired charging, but it has wireless reverse charging.", textHi: "मेरे फ़ोन में इतनी तेज़ वायर्ड चार्जिंग नहीं है, लेकिन इसमें वायरलेस रिवर्स चार्जिंग है।" },
      { speaker: "Kunal", avatar: "📱", textEn: "Both smartphones have distinct flagship advantages tailored to different needs.", textHi: "दोनों स्मार्टफ़ोन में अलग-अलग ज़रूरतों के हिसाब से बेहतरीन खूबियाँ हैं।" },
      { speaker: "Ritesh", avatar: "🤳", textEn: "Modern consumer technology has reached mind-blowing levels of performance!", textHi: "आधुनिक तकनीक प्रदर्शन के आश्चर्यजनक स्तर तक पहुँच चुकी है!" }
    ]
  },
  {
    id: "d09_sc08",
    title: "Discussing Musical Hobbies, Instruments, and Vinyl Collections",
    titleHi: "संगीत के शौक, वाद्य यंत्रों और विनाइल रिकॉर्ड्स पर चर्चा",
    context: "Friends Akash and Meera talk about playing musical instruments and collecting classical records.",
    situation: "Possession of hobbies and collections with 'have', 'has', 'had'",
    characters: ["Akash", "Meera"],
    turns: [
      { speaker: "Akash", avatar: "🎸", textEn: "Meera, do you have any musical instruments at your home studio?", textHi: "मीरा, क्या तुम्हारे होम स्टूडियो में कोई संगीत वाद्ययंत्र हैं?" },
      { speaker: "Meera", avatar: "🎹", textEn: "Yes, I have an acoustic grand piano and I have a semi-acoustic Spanish guitar.", textHi: "हाँ, मेरे पास एक ग्रांड पियानो है और एक सेमी-एकुस्टिक स्पैनिश गिटार है।" },
      { speaker: "Akash", avatar: "🎸", textEn: "How long have you been playing the piano?", textHi: "तुम कितने समय से पियानो बजा रही हो?" },
      { speaker: "Meera", avatar: "🎹", textEn: "I had formal classical piano lessons for ten years during my childhood.", textHi: "बचपन में मैंने दस साल तक औपचारिक रूप से शास्त्रीय पियानो की शिक्षा ली थी।" },
      { speaker: "Akash", avatar: "🎸", textEn: "That's wonderful! My father has a vintage turntable and an enormous collection of vinyl records.", textHi: "यह तो बहुत शानदार है! मेरे पिताजी के पास एक विंटेज टर्नटेबल और विनाइल रिकॉर्ड्स का बड़ा संग्रह है।" },
      { speaker: "Meera", avatar: "🎹", textEn: "Does he have original records of Pandit Ravi Shankar and Ustad Bismillah Khan?", textHi: "क्या उनके पास पंडित रवि शंकर और उस्ताद बिस्मिल्लाह खान के मूल रिकॉर्ड्स हैं?" },
      { speaker: "Akash", avatar: "🎸", textEn: "Yes, he has rare first-edition LPs from the 1960s and 70s.", textHi: "हाँ, उनके पास 1960 और 70 के दशक के दुर्लभ पहले संस्करण के रिकॉर्ड्स हैं।" },
      { speaker: "Meera", avatar: "🎹", textEn: "Listening to acoustic vinyl has such a rich, authentic warmth.", textHi: "विनाइल रिकॉर्ड्स को सुनने में एक अनोखी, समृद्ध और स्वाभाविक मिठास होती है।" },
      { speaker: "Akash", avatar: "🎸", textEn: "You must visit this weekend; we have a quiet listening room dedicated to music.", textHi: "तुम्हें इस वीकेंड ज़रूर आना चाहिए; हमारे पास संगीत के लिए एक शांत कमरा है।" },
      { speaker: "Meera", avatar: "🎹", textEn: "I would be thrilled to experience that classic vintage audio system!", textHi: "उस क्लासिक विंटेज ऑडियो सिस्टम का अनुभव लेने के लिए मैं बहुत उत्सुक हूँ!" }
    ]
  },
  {
    id: "d09_sc09",
    title: "Recounting Childhood Toys and Nostalgic Possessions",
    titleHi: "बचपन के खिलौनों और पुरानी प्रिय वस्तुओं की यादें",
    context: "Two cousins, Rohan and Tanya, look through an old trunk of childhood toys and games.",
    situation: "Past possessions using 'had', 'used to have'",
    characters: ["Rohan", "Tanya"],
    turns: [
      { speaker: "Rohan", avatar: "🧸", textEn: "Tanya, look inside this wooden storage trunk! Remember what we had in here?", textHi: "तन्या, इस लकड़ी के संदूक के अंदर देखो! याद है इसमें हमारे पास क्या-क्या था?" },
      { speaker: "Tanya", avatar: "🎲", textEn: "Oh wow! We had that vintage metal building block set and wooden jigsaw puzzles!", textHi: "अरे वाह! हमारे पास वह विंटेज मेटल बिल्डिंग ब्लॉक सेट और लकड़ी की पहेलियाँ थीं!" },
      { speaker: "Rohan", avatar: "🧸", textEn: "And look at this wind-up tin robot! It had sparks shooting from its chest when you wound it up.", textHi: "और इस चाबी वाले टिन के रोबोट को देखो! चाबी भरने पर इसकी छाती से चिंगारियाँ निकलती थीं।" },
      { speaker: "Tanya", avatar: "🎲", textEn: "We had hours of non-stop fun before the era of smartphones and tablets.", textHi: "स्मार्टफ़ोन और टैबलेट के दौर से पहले हम घंटों बिना रुके मज़े करते थे।" },
      { speaker: "Rohan", avatar: "🧸", textEn: "Do you remember the wooden treehouse we had in grandfather's backyard?", textHi: "क्या तुम्हें याद है दादाजी के बगीचे में हमारे पास जो लकड़ी का ट्रीहाउस था?" },
      { speaker: "Tanya", avatar: "🎲", textEn: "Yes! It had a rope ladder and a secret lookout window facing the stream.", textHi: "हाँ! उसमें एक रस्सी की सीढ़ी और नदी की ओर देखने वाली एक गुप्त खिड़की थी।" },
      { speaker: "Rohan", avatar: "🧸", textEn: "We had such vivid imaginations back then.", textHi: "उस समय हमारी कल्पना शक्ति कितनी समृद्ध और रचनात्मक थी।" },
      { speaker: "Tanya", avatar: "🎲", textEn: "We didn't have expensive gadgets, but we had unlimited joy and creativity.", textHi: "हमारे पास महंगे उपकरण नहीं थे, लेकिन असीम आनंद और रचनात्मकता थी।" },
      { speaker: "Rohan", avatar: "🧸", textEn: "I am going to polish this tin robot and keep it on my study shelf.", textHi: "मैं इस टिन के रोबोट को साफ़ करके अपनी स्टडी शेल्फ़ पर रखूँगा।" },
      { speaker: "Tanya", avatar: "🎲", textEn: "These tangible keepsakes have immense nostalgic value.", textHi: "इन पुरानी यादगार चीज़ों का बहुत गहरा भावनात्मक महत्व है।" }
    ]
  },
  {
    id: "d09_sc10",
    title: "Reviewing Mandatory Credentials and Technical Qualifications for a Job",
    titleHi: "नौकरी के लिए आवश्यक योग्यता और प्रमाणपत्रों की समीक्षा",
    context: "HR recruiter Mrs. D'Souza reviews candidate Vivek's certifications during a pre-interview screen.",
    situation: "Professional qualifications with 'have you got', 'I have', 'has'",
    characters: ["Mrs. D'Souza", "Vivek"],
    turns: [
      { speaker: "Mrs. D'Souza", avatar: "👩‍💼", textEn: "Good morning, Vivek. Do you have your master's degree transcripts and certificates with you?", textHi: "शुभ प्रभात, विवेक। क्या आपके पास अपनी मास्टर डिग्री की मार्कशीट और प्रमाणपत्र हैं?" },
      { speaker: "Vivek", avatar: "👨‍💼", textEn: "Good morning, ma'am. Yes, I have all original degree certificates and notarized copies.", textHi: "शुभ प्रभात, मैम। जी हाँ, मेरे पास सभी मूल डिग्री प्रमाणपत्र और प्रमाणित प्रतियां हैं।" },
      { speaker: "Mrs. D'Souza", avatar: "👩‍💼", textEn: "Do you have formal certification in cloud security architecture?", textHi: "क्या आपके पास क्लाउड सुरक्षा संरचना में औपचारिक प्रमाणन है?" },
      { speaker: "Vivek", avatar: "👨‍💼", textEn: "Yes, I have the AWS Certified Solutions Architect and Google Cloud Professional credentials.", textHi: "जी हाँ, मेरे पास AWS प्रमाणित सॉल्यूशंस आर्किटेक्ट और Google क्लाउड पेशेवर क्रेडेंशियल्स हैं।" },
      { speaker: "Mrs. D'Souza", avatar: "👩‍💼", textEn: "How many years of enterprise project management experience do you have?", textHi: "आपके पास बड़े प्रोजेक्ट प्रबंधन का कितने वर्षों का अनुभव है?" },
      { speaker: "Vivek", avatar: "👨‍💼", textEn: "I have six years of hands-on experience leading agile development teams.", textHi: "मेरे पास फुर्तीली (एजाइल) विकास टीमों का नेतृत्व करने का छह साल का व्यावहारिक अनुभव है।" },
      { speaker: "Mrs. D'Souza", avatar: "👩‍💼", textEn: "Does your current employment contract have a mandatory notice period?", textHi: "क्या आपके वर्तमान अनुबंध में कोई अनिवार्य नोटिस अवधि है?" },
      { speaker: "Vivek", avatar: "👨‍💼", textEn: "Yes, it has a thirty-day notice period, but I have accrued leave days to expedite the transition.", textHi: "हाँ, इसमें तीस दिन की नोटिस अवधि है, लेकिन प्रक्रिया तेज़ करने के लिए मेरे पास बची हुई छुट्टियाँ हैं।" },
      { speaker: "Mrs. D'Souza", avatar: "👩‍💼", textEn: "Your profile has the exact combination of skills our leadership team requires.", textHi: "आपकी प्रोफ़ाइल में वे सभी सटीक कौशल हैं जिनकी हमारी लीडरशिप टीम को आवश्यकता है।" },
      { speaker: "Vivek", avatar: "👨‍💼", textEn: "Thank you, ma'am. I have strong enthusiasm for this leadership opportunity.", textHi: "धन्यवाद, मैम। इस नेतृत्व के अवसर के लिए मेरे भीतर गहरा उत्साह है।" }
    ]
  }
];
