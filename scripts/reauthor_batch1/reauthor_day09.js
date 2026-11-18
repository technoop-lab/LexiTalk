import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const day09Dialogues = [
  {
    id: "d09_sc01",
    title: "Executive Talent Evaluation: Credentials & Professional Experience",
    titleHi: "कार्यकारी प्रतिभा मूल्यांकन: योग्यता और व्यावसायिक अनुभव",
    context: "HR Director Suniti and Talent Partner Aman evaluate candidates for the Chief Technology Officer role.",
    situation: "Mastering 'has / have / had' for qualifications, technical skills, certifications, and leadership track records.",
    characters: ["Suniti", "Aman"],
    turns: [
      {
        speaker: "Suniti",
        avatar: "👩‍💼",
        textEn: "Aman, let us review the candidate portfolio for the Chief Technology Officer role. Does candidate Rajesh have enterprise cloud architecture experience?",
        textHi: "अमन, आइए चीफ टेक्नोलॉजी ऑफिसर पद के लिए उम्मीदवार पोर्टफोलियो की समीक्षा करें। क्या उम्मीदवार राजेश के पास एंटरप्राइज क्लाउड आर्किटेक्चर का अनुभव है?"
      },
      {
        speaker: "Aman",
        avatar: "👨‍💼",
        textEn: "Yes, Suniti. Rajesh has over fifteen years of deep engineering experience, and he has leading certifications from AWS and Google Cloud.",
        textHi: "जी हाँ, सुनीति। राजेश के पास पंद्रह वर्षों से अधिक का गहन इंजीनियरिंग अनुभव है, और उनके पास एडब्ल्यूएस और गूगल क्लाउड से प्रमुख प्रमाणपत्र हैं।"
      },
      {
        speaker: "Suniti",
        avatar: "👩‍💼",
        textEn: "Does he have previous experience managing large cross-functional teams across multiple continents?",
        textHi: "क्या उनके पास कई महाद्वीपों में फैली बड़ी बहु-कार्यात्मक टीमों का प्रबंधन करने का पूर्व अनुभव है?"
      },
      {
        speaker: "Aman",
        avatar: "👨‍💼",
        textEn: "In his previous role at FinTech Global, he had three hundred engineers under his direct leadership across London, Singapore, and Bangalore.",
        textHi: "फिनटेक ग्लोबल में अपनी पिछली भूमिका में, उनके प्रत्यक्ष नेतृत्व में लंदन, सिंगापुर और बैंगलोर में तीन सौ इंजीनियर थे।"
      },
      {
        speaker: "Suniti",
        avatar: "👩‍💼",
        textEn: "What about candidate Dr. Malini Rao? What academic and patent qualifications does she have?",
        textHi: "उम्मीदवार डॉ. मालिनी राव के बारे में क्या? उनके पास क्या शैक्षणिक और पेटेंट योग्यताएं हैं?"
      },
      {
        speaker: "Aman",
        avatar: "👨‍💼",
        textEn: "Dr. Malini has a doctorate in Artificial Intelligence from Stanford University, and she has twelve international patents in distributed systems.",
        textHi: "डॉ. मालिनी के पास स्टैनफोर्ड विश्वविद्यालय से आर्टिफिशियल इंटेलिजेंस में डॉक्टरेट की डिग्री है, और उनके पास वितरित प्रणालियों (डिस्ट्रिब्यूटेड सिस्टम्स) में बारह अंतरराष्ट्रीय पेटेंट हैं।"
      },
      {
        speaker: "Suniti",
        avatar: "👩‍💼",
        textEn: "Does she have a proven track record in cybersecurity compliance and regulatory governance?",
        textHi: "क्या उनके पास साइबर सुरक्षा अनुपालन और नियामक प्रशासन में एक सिद्ध ट्रैक रिकॉर्ड है?"
      },
      {
        speaker: "Aman",
        avatar: "👨‍💼",
        textEn: "Yes, she has extensive familiarity with global data privacy frameworks; she had zero security breaches during her six-year tenure at CyberCore.",
        textHi: "जी हाँ, उनके पास वैश्विक डेटा गोपनीयता रूपरेखाओं की व्यापक जानकारी है; साइबरकोर में अपने छह साल के कार्यकाल के दौरान उनके यहाँ शून्य सुरक्षा उल्लंघन हुए थे।"
      },
      {
        speaker: "Suniti",
        avatar: "👩‍💼",
        textEn: "Do both finalists have executive leadership references from Fortune 500 board directors?",
        textHi: "क्या दोनों अंतिम उम्मीदवारों के पास फॉर्च्यून 500 बोर्ड निदेशकों से कार्यकारी नेतृत्व के संदर्भ (रेफरेंस) हैं?"
      },
      {
        speaker: "Aman",
        avatar: "👨‍💼",
        textEn: "Yes, we have confidential written reference letters from former chief executive officers praising both candidates.",
        textHi: "जी हाँ, हमारे पास पूर्व मुख्य कार्यकारी अधिकारियों के गोपनीय लिखित संदर्भ पत्र हैं जो दोनों उम्मीदवारों की प्रशंसा करते हैं।"
      },
      {
        speaker: "Suniti",
        avatar: "👩‍💼",
        textEn: "Do we have compensation expectation benchmarks for both profiles?",
        textHi: "क्या हमारे पास दोनों प्रोफाइल के लिए वेतन अपेक्षा के मानक हैं?"
      },
      {
        speaker: "Aman",
        avatar: "👨‍💼",
        textEn: "Rajesh has an expectation of performance equity options, whereas Dr. Malini has a preference for a research endowment grant.",
        textHi: "राजेश को परफॉर्मेंस इक्विटी विकल्पों की अपेक्षा है, जबकि डॉ. मालिनी रिसर्च एंडोमेंट ग्रांट को प्राथमिकता देती हैं।"
      },
      {
        speaker: "Suniti",
        avatar: "👩‍💼",
        textEn: "Both candidates have extraordinary credentials and leadership depth.",
        textHi: "दोनों उम्मीदवारों के पास असाधारण योग्यता और नेतृत्व की गहराई है।"
      },
      {
        speaker: "Aman",
        avatar: "👨‍💼",
        textEn: "We have an executive interview panel scheduled with our Board Nomination Committee this Thursday at 3 PM.",
        textHi: "इस गुरुवार दोपहर 3 बजे हमारी बोर्ड नामांकन समिति के साथ एक कार्यकारी साक्षात्कार पैनल निर्धारित है।"
      },
      {
        speaker: "Suniti",
        avatar: "👩‍💼",
        textEn: "Do they have all interview briefing dossiers in their electronic binders?",
        textHi: "क्या उनके इलेक्ट्रॉनिक बाइंडर में सभी साक्षात्कार ब्रीफिंग फाइलें मौजूद हैं?"
      },
      {
        speaker: "Aman",
        avatar: "👨‍💼",
        textEn: "Yes, our board members have access to the complete candidate evaluation files on their secure portal.",
        textHi: "जी हाँ, हमारे बोर्ड के सदस्यों के पास अपने सुरक्षित पोर्टल पर संपूर्ण उम्मीदवार मूल्यांकन फाइलों तक पहुंच है।"
      },
      {
        speaker: "Suniti",
        avatar: "👩‍💼",
        textEn: "Excellent recruitment diligence, Aman. You have done a thorough job.",
        textHi: "अमन, उत्कृष्ट भर्ती प्रक्रिया। आपने बहुत गहन काम किया है।"
      },
      {
        speaker: "Aman",
        avatar: "👨‍💼",
        textEn: "Thank you, Suniti. I have confidence in our final selection process.",
        textHi: "धन्यवाद, सुनीति। मुझे हमारी अंतिम चयन प्रक्रिया पर पूरा भरोसा है।"
      },
      {
        speaker: "Suniti",
        avatar: "👩‍💼",
        textEn: "Let us prepare the formal interview schedule.",
        textHi: "आइए औपचारिक साक्षात्कार कार्यक्रम तैयार करें।"
      },
      {
        speaker: "Aman",
        avatar: "👨‍💼",
        textEn: "The calendar invitations are ready for dispatch.",
        textHi: "कैलेंडर आमंत्रण भेजने के लिए तैयार हैं।"
      }
    ]
  },
  {
    id: "d09_sc02",
    title: "Clinical Medical Assessment: Family Health History & Symptoms",
    titleHi: "चिकित्सीय मूल्यांकन: पारिवारिक स्वास्थ्य इतिहास और लक्षण",
    context: "Physician Dr. Anita takes a comprehensive clinical history and symptom profile from patient Deepak.",
    situation: "Using 'has / have / had' for family medical history, symptoms, allergies, and past surgeries.",
    characters: ["Dr. Anita", "Deepak"],
    turns: [
      {
        speaker: "Dr. Anita",
        avatar: "👩‍⚕️",
        textEn: "Good morning, Deepak! Let us record your comprehensive health profile today. Do you have any chronic medical conditions?",
        textHi: "शुभ प्रभात, दीपक! आइए आज आपका व्यापक स्वास्थ्य प्रोफाइल दर्ज करें। क्या आपको कोई पुरानी बीमारी है?"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Good morning, Doctor. I have mild seasonal asthma, and I have occasional tension headaches during high-stress work weeks.",
        textHi: "शुभ प्रभात, डॉक्टर। मुझे हल्का मौसमी अस्थमा है, और काम के अधिक तनाव वाले हफ्तों में मुझे कभी-कभी सिरदर्द होता है।"
      },
      {
        speaker: "Dr. Anita",
        avatar: "👩‍⚕️",
        textEn: "Do you have any known allergies to penicillin, sulfa drugs, or specific food items?",
        textHi: "क्या आपको पेनिसिलिन, सल्फा दवाओं या किसी विशिष्ट खाद्य पदार्थ से कोई ज्ञात एलर्जी है?"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "I have an allergy to shellfish and peanuts, but I have no adverse reactions to antibiotic medications.",
        textHi: "मुझे सीफूड और मूंगफली से एलर्जी है, लेकिन एंटीबायोटिक दवाओं से कोई प्रतिकूल प्रतिक्रिया नहीं होती है।"
      },
      {
        speaker: "Dr. Anita",
        avatar: "👩‍⚕️",
        textEn: "Does your family have a history of cardiovascular diseases or early-onset diabetes?",
        textHi: "क्या आपके परिवार में हृदय रोग या कम उम्र में मधुमेह का कोई इतिहास है?"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Yes, my father has hypertension, and my maternal grandfather had coronary bypass surgery at age fifty-five.",
        textHi: "जी हाँ, मेरे पिता को उच्च रक्तचाप है, और मेरे नाना की पचपन वर्ष की आयु में कोरोनरी बाईपास सर्जरी हुई थी।"
      },
      {
        speaker: "Dr. Anita",
        avatar: "👩‍⚕️",
        textEn: "Does your mother have thyroid dysfunction or rheumatoid arthritis?",
        textHi: "क्या आपकी माताजी को थायरॉयड की समस्या या रूमेटाइड गठिया है?"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "No, she has no autoimmune disorders; she has normal metabolic health.",
        textHi: "नहीं, उन्हें कोई ऑटोइम्यून विकार नहीं है; उनका चयापचय स्वास्थ्य बिल्कुल सामान्य है।"
      },
      {
        speaker: "Dr. Anita",
        avatar: "👩‍⚕️",
        textEn: "Have you had any major surgical operations or hospitalizations in the past five years?",
        textHi: "क्या पिछले पांच वर्षों में आपकी कोई बड़ी सर्जरी या अस्पताल में भर्ती होने की स्थिति रही है?"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "I had an arthroscopic knee surgery three years ago after a sports injury, but I have full mobility now.",
        textHi: "खेल में चोट लगने के बाद तीन साल पहले मेरी घुटने की आर्थोस्कोपिक सर्जरी हुई थी, लेकिन अब मैं पूरी तरह चल-फिर सकता हूँ।"
      },
      {
        speaker: "Dr. Anita",
        avatar: "👩‍⚕️",
        textEn: "Do you have any current gastrointestinal symptoms like acidity, bloating, or reflux?",
        textHi: "क्या इस समय आपको एसिडिटी, पेट फूलना या रिफ्लक्स जैसे कोई गैस्ट्रोइंटेस्टाइनल लक्षण हैं?"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "I had slight heartburn last week, but I have no persistent stomach discomfort.",
        textHi: "पिछले हफ्ते मुझे हल्की सीने में जलन हुई थी, लेकिन पेट में लगातार कोई तकलीफ नहीं है।"
      },
      {
        speaker: "Dr. Anita",
        avatar: "👩‍⚕️",
        textEn: "You have very healthy lifestyle habits: regular exercise, low sodium diet, and zero smoking.",
        textHi: "आपकी जीवनशैली की आदतें बहुत स्वस्थ हैं: नियमित व्यायाम, कम नमक वाला आहार और बिल्कुल धूम्रपान नहीं।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "I have a daily running routine of five kilometers every morning.",
        textHi: "मेरी हर सुबह पांच किलोमीटर की दैनिक दौड़ की दिनचर्या है।"
      },
      {
        speaker: "Dr. Anita",
        avatar: "👩‍⚕️",
        textEn: "That has a tremendous protective effect on your cardiovascular health.",
        textHi: "इसका आपके हृदय स्वास्थ्य पर जबरदस्त सुरक्षात्मक प्रभाव पड़ता है।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Do I have to take any regular vitamin D or calcium supplements?",
        textHi: "क्या मुझे नियमित रूप से कोई विटामिन डी या कैल्शियम की गोलियां लेने की आवश्यकता है?"
      },
      {
        speaker: "Dr. Anita",
        avatar: "👩‍⚕️",
        textEn: "Your blood panel shows that you have optimal levels of all essential micronutrients; you have no deficiencies.",
        textHi: "आपके रक्त परीक्षण से पता चलता है कि आपके पास सभी आवश्यक सूक्ष्म पोषक तत्वों का इष्टतम स्तर है; आपमें कोई कमी नहीं है।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "I am very relieved to have such a clean health report.",
        textHi: "ऐसी साफ और स्वस्थ रिपोर्ट पाकर मुझे बहुत राहत मिली है।"
      },
      {
        speaker: "Dr. Anita",
        avatar: "👩‍⚕️",
        textEn: "Continue your excellent health habits, Deepak!",
        textHi: "दीपक, अपनी इन उत्कृष्ट स्वास्थ्य आदतों को जारी रखें!"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Thank you, Dr. Anita!",
        textHi: "धन्यवाद, डॉ. अनीता!"
      }
    ]
  },
  {
    id: "d09_sc03",
    title: "Veterinary Hospital: Pet Health, Pedigree & Vaccination Record",
    titleHi: "पशु चिकित्सालय: पालतू जानवर का स्वास्थ्य, वंशावली और टीकाकरण",
    context: "Veterinarian Dr. Philip examines an Afghan Hound with owner Natasha.",
    situation: "Using 'has / have / had' for animal attributes, pedigree records, physical traits, and medical history.",
    characters: ["Dr. Philip", "Natasha"],
    turns: [
      {
        speaker: "Dr. Philip",
        avatar: "👨‍⚕️",
        textEn: "Good morning, Natasha! What a magnificent Afghan Hound! Does he have his complete microchip registration papers?",
        textHi: "शुभ प्रभात, नताशा! कितना भव्य अफगान हाउंड है! क्या उसके पास पूरे माइक्रोचिप पंजीकरण दस्तावेज हैं?"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "Good morning, Dr. Philip! Yes, his name is Leo, and he has a certified Kennel Club pedigree certificate in this folder.",
        textHi: "शुभ प्रभात, डॉ. फिलिप! जी हाँ, उसका नाम लियो है, और इस फोल्डर में उसका प्रमाणित केनेल क्लब वंशावली प्रमाण पत्र है।"
      },
      {
        speaker: "Dr. Philip",
        avatar: "👨‍⚕️",
        textEn: "He has a remarkably silky coat and excellent muscle tone. Does he have any dietary sensitivities?",
        textHi: "उसके बाल बहुत रेशमी हैं और मांसपेशियों का गठन उत्कृष्ट है। क्या उसे खान-पान से कोई संवेदनशीलता (एलर्जी) है?"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "He has a grain-free salmon diet because he had skin itching when he ate standard poultry kibble last year.",
        textHi: "वह अनाज-मुक्त सैल्मन आहार लेता है क्योंकि पिछले साल जब उसने सामान्य चिकन दाना खाया था तो उसकी त्वचा में खुजली हो गई थी।"
      },
      {
        speaker: "Dr. Philip",
        avatar: "👨‍⚕️",
        textEn: "Does he have all mandatory vaccinations up to date, including rabies and DHLPP?",
        textHi: "क्या उसके सभी अनिवार्य टीके जैसे रेबीज और डीएचएलपीपी समय पर लगे हुए हैं?"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "Yes, he had his annual booster shots in January; his vaccination card has all veterinary clinic stamps.",
        textHi: "जी हाँ, उसे जनवरी में वार्षिक बूस्टर शॉट लगे थे; उसके टीकाकरण कार्ड पर सभी क्लिनिक की मुहरें लगी हैं।"
      },
      {
        speaker: "Dr. Philip",
        avatar: "👨‍⚕️",
        textEn: "Let me check his dental health... he has clean white teeth with no tartar buildup.",
        textHi: "मुझे उसके दांतों की जांच करने दें... उसके दांत बिल्कुल साफ और सफेद हैं, उन पर कोई गंदगी नहीं जमी है।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "We have an enzymatic brushing routine three times every week.",
        textHi: "हम हर हफ्ते तीन बार एंजाइमेटिक टूथब्रश से उसके दांत साफ करते हैं।"
      },
      {
        speaker: "Dr. Philip",
        avatar: "👨‍⚕️",
        textEn: "Does he have any joint stiffness after long runs in the park?",
        textHi: "क्या पार्क में लंबी दौड़ के बाद उसके जोड़ों में कोई अकड़न होती है?"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "No, he has boundless energy, but he had a minor tick infestation during our monsoon trip to the hills.",
        textHi: "नहीं, उसमें असीम ऊर्जा है, लेकिन पहाड़ों की हमारी मानसून यात्रा के दौरान उसे कुछ कीड़े (टिक्स) लग गए थे।"
      },
      {
        speaker: "Dr. Philip",
        avatar: "👨‍⚕️",
        textEn: "His ears are clean and dry; he has no fungal infections in the ear canals.",
        textHi: "उसके कान साफ और सूखे हैं; कान की नलियों में कोई फंगल संक्रमण नहीं है।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "Does he have the ideal weight for a two-year-old male of this breed?",
        textHi: "क्या इस नस्ल के दो वर्षीय नर कुत्ते के लिए उसका वजन बिल्कुल सही है?"
      },
      {
        speaker: "Dr. Philip",
        avatar: "👨‍⚕️",
        textEn: "He has a weight of twenty-six kilograms; that is in the exact center of the breed standard.",
        textHi: "उसका वजन छब्बीस किलोग्राम है; यह नस्ल के मानक के बिल्कुल बीच में है।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "We have an upcoming national dog show in November.",
        textHi: "नवंबर में हमारा एक राष्ट्रीय डॉग शो होने वाला है।"
      },
      {
        speaker: "Dr. Philip",
        avatar: "👨‍⚕️",
        textEn: "He has champion potential! His posture, coat, and temperament are flawless.",
        textHi: "उसमें चैंपियन बनने की पूरी क्षमता है! उसकी मुद्रा, बाल और स्वभाव बिल्कुल त्रुटिहीन हैं।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "Thank you, Dr. Philip. We have a daily grooming schedule of forty-five minutes.",
        textHi: "धन्यवाद, डॉ. फिलिप। हमारे पास उसकी साज-सज्जा का रोजाना पैंतालीस मिनट का समय है।"
      },
      {
        speaker: "Dr. Philip",
        avatar: "👨‍⚕️",
        textEn: "Your dedication shows in his radiant health.",
        textHi: "आपकी लगन उसके चमकते स्वास्थ्य में साफ दिखाई देती है।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "We have so much love for this gentle giant.",
        textHi: "हमें इस प्यारे जीव से बहुत गहरा लगाव है।"
      },
      {
        speaker: "Dr. Philip",
        avatar: "👨‍⚕️",
        textEn: "Give him a healthy treat for being so cooperative today!",
        textHi: "आज इतना शांत और सहयोगी रहने के लिए उसे एक स्वादिष्ट ट्रीट दें!"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "I will! Thank you, Doctor!",
        textHi: "ज़रूर दूँगी! धन्यवाद, डॉक्टर!"
      }
    ]
  },
  {
    id: "d09_sc04",
    title: "Classic Vintage Automobile Garage: Heritage & Mechanical Specifications",
    titleHi: "क्लासिक विंटेज ऑटोमोबाइल गैरेज: विरासत और यांत्रिक विशेषताएं",
    context: "Vintage Car Restorer Mr. D'Souza presents a 1934 Rolls-Royce Phantom II to collector Vikram.",
    situation: "Using 'has / have / had' for automotive specifications, horsepower, restoration history, and royal ownership.",
    characters: ["Mr. D'Souza", "Vikram"],
    turns: [
      {
        speaker: "Mr. D'Souza",
        avatar: "👨‍🔧",
        textEn: "Vikram, look at this 1934 Rolls-Royce Phantom II Continental. This masterpiece has an extraordinary royal provenance.",
        textHi: "विक्रम, इस 1934 रोल्स-रॉयस फैंटम II कॉन्टिनेंटल को देखें। इस उत्कृष्ट कृति का एक असाधारण शाही इतिहास है।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "What engine specifications does this historic automobile have?",
        textHi: "इस ऐतिहासिक ऑटोमोबाइल में क्या इंजन विशेषताएं हैं?"
      },
      {
        speaker: "Mr. D'Souza",
        avatar: "👨‍🔧",
        textEn: "It has a seven-point-seven-liter inline six-cylinder engine, and it has dual ignition systems with twin spark plugs per cylinder.",
        textHi: "इसमें 7.7-लीटर का इनलाइन छह-सिलेंडर इंजन है, और इसमें प्रति सिलेंडर दोहरे स्पार्क प्लग के साथ ट्विन इग्निशन सिस्टम है।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Does it have the original custom coachwork by Thrupp & Maberly?",
        textHi: "क्या इस पर थ्रुप एंड मैबर्ली द्वारा बनाया गया मूल कस्टम कोचवर्क है?"
      },
      {
        speaker: "Mr. D'Souza",
        avatar: "👨‍🔧",
        textEn: "Yes, it has hand-beaten aluminum body panels over an ash wood frame; it had bespoke hunting lamps installed by the Maharaja of Jodhpur.",
        textHi: "जी हाँ, इसमें ऐश की लकड़ी के फ्रेम पर हाथ से गढ़े हुए एल्यूमीनियम बॉडी पैनल हैं; जोधपुर के महाराजा द्वारा इसमें विशेष शिकार लैंप लगवाए गए थे।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Do you have the original logbooks and factory chassis build sheets from Derby, England?",
        textHi: "क्या आपके पास डर्बी, इंग्लैंड से मूल लॉगबुक और फैक्ट्री चेसिस निर्माण दस्तावेज हैं?"
      },
      {
        speaker: "Mr. D'Souza",
        avatar: "👨‍🔧",
        textEn: "We have every single archival record; the car had only two noble owners before entering this private collection in 1968.",
        textHi: "हमारे पास हर एक ऐतिहासिक रिकॉर्ड है; 1968 में इस निजी संग्रह में आने से पहले इस कार के केवल दो कुलीन मालिक थे।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Does the four-speed manual transmission have synchromesh on third and fourth gears?",
        textHi: "क्या चार-स्पीड मैनुअल ट्रांसमिशन में तीसरे और चौथे गियर पर सिंक्रोमेश है?"
      },
      {
        speaker: "Mr. D'Souza",
        avatar: "👨‍🔧",
        textEn: "Yes, it has synchromesh on the top two ratios, and it has mechanical servo-assisted drum brakes on all four wheels.",
        textHi: "जी हाँ, इसमें शीर्ष दो गियर पर सिंक्रोमेश है, और चारों पहियों पर मैकेनिकल सर्वो-असिस्टेड ड्रम ब्रेक हैं।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "The Connolly leather upholstery inside the cabin has a wonderful vintage patina!",
        textHi: "केबिन के अंदर कोनोली चमड़े की सीटों पर एक अद्भुत विंटेज चमक है!"
      },
      {
        speaker: "Mr. D'Souza",
        avatar: "👨‍🔧",
        textEn: "The dashboard has burr walnut veneers, and all instruments have original Jaeger dials in perfect working order.",
        textHi: "डैशबोर्ड पर अखरोट की लकड़ी की पॉलिश है, और सभी उपकरणों में मूल जैगर डायल सही काम करने की स्थिति में हैं।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Has the engine had a full mechanical overhaul recently?",
        textHi: "क्या हाल ही में इंजन की पूरी यांत्रिक मरम्मत (ओवरहाल) हुई है?"
      },
      {
        speaker: "Mr. D'Souza",
        avatar: "👨‍🔧",
        textEn: "Yes, our master mechanics had the cylinder head polished and the radiator re-cored with original copper fins.",
        textHi: "जी हाँ, हमारे मुख्य मैकेनिकों ने सिलेंडर हेड को पॉलिश किया था और रेडिएटर को मूल तांबे के पंखों के साथ नया बनाया था।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "You have an incomparable collection of automotive history in this garage.",
        textHi: "इस गैरेज में आपके पास ऑटोमोबाइल इतिहास का एक अतुलनीय संग्रह है।"
      },
      {
        speaker: "Mr. D'Souza",
        avatar: "👨‍🔧",
        textEn: "We have five other pre-war classics undergoing meticulous restoration right now.",
        textHi: "हमारे पास युद्ध-पूर्व की पांच अन्य क्लासिक गाड़ियाँ हैं जिनका इस समय बारीकी से जीर्णोद्धार किया जा रहा है।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "I have deep admiration for your craftsmanship and historical passion.",
        textHi: "आपकी कारीगरी और ऐतिहासिक जुनून के लिए मेरे मन में गहरा सम्मान है।"
      },
      {
        speaker: "Mr. D'Souza",
        avatar: "👨‍🔧",
        textEn: "These machines have souls; preserving them is our life's mission.",
        textHi: "इन मशीनों में आत्माएं बसती हैं; इन्हें संरक्षित करना हमारे जीवन का मुख्य उद्देश्य है।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "I would be honored to acquire this Phantom II for our family trust.",
        textHi: "अपने पारिवारिक ट्रस्ट के लिए इस फैंटम II को प्राप्त करना मेरे लिए सम्मान की बात होगी।"
      },
      {
        speaker: "Mr. D'Souza",
        avatar: "👨‍🔧",
        textEn: "The car will have a magnificent home with you, Vikram.",
        textHi: "विक्रम, आपके पास इस कार को एक शानदार घर मिलेगा।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Thank you, Mr. D'Souza!",
        textHi: "धन्यवाद, मिस्टर डिसूजा!"
      }
    ]
  },
  {
    id: "d09_sc05",
    title: "University Nanotechnology Lab: Research Assets & Equipment",
    titleHi: "विश्वविद्यालय नैनो प्रौद्योगिकी लैब: अनुसंधान संसाधन और उपकरण",
    context: "Lab Director Dr. Sen and Research Fellow Tanya conduct an annual audit of electron microscopes and cleanroom assets.",
    situation: "Using 'has / have / had' for high-tech instruments, maintenance logs, research grants, and lab inventory.",
    characters: ["Dr. Sen", "Tanya"],
    turns: [
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🔬",
        textEn: "Tanya, let us complete our annual equipment audit for the Nanotechnology Center. Does our cleanroom have the new atomic force microscope installed?",
        textHi: "तान्या, आइए नैनोटेक्नोलॉजी केंद्र के लिए हमारे वार्षिक उपकरण ऑडिट को पूरा करें। क्या हमारे क्लीनरूम में नया एटॉमिक फोर्स माइक्रोस्कोप स्थापित है?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🔬",
        textEn: "Yes, Dr. Sen. The AFM has atomic-scale resolution down to zero point one nanometers, and it has full piezoelectric vibrational isolation.",
        textHi: "जी हाँ, डॉ. सेन। एएफएम में 0.1 नैनोमीटर तक का परमाणु-स्तरीय रेजोल्यूशन है, और इसमें पूर्ण पीज़ोइलेक्ट्रिक कंपन अलगाव है।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🔬",
        textEn: "Does our field-emission transmission electron microscope have its vacuum chamber serviced recently?",
        textHi: "क्या हमारे फील्ड-एमिशन ट्रांसमिशन इलेक्ट्रॉन माइक्रोस्कोप (TEM) के वैक्यूम चैंबर की हाल ही में सर्विसिंग हुई है?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🔬",
        textEn: "Yes, the service engineers had the ultra-high vacuum turbomolecular pumps replaced last month; it has a steady pressure of ten to the minus eight pascals.",
        textHi: "जी हाँ, सर्विस इंजीनियरों ने पिछले महीने टर्बोमॉलिक्यूलर पंप बदले थे; इसमें 10 की घात -8 पास्कल का स्थिर वैक्यूम दबाव है।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🔬",
        textEn: "Do our research scholars have unlimited access to the high-performance computing cluster for molecular dynamics simulations?",
        textHi: "क्या हमारे शोधार्थियों के पास आणविक गतिशीलता सिमुलेशन के लिए उच्च-प्रदर्शन कंप्यूटिंग क्लस्टर तक असीमित पहुंच है?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🔬",
        textEn: "All sixteen PhD fellows have dedicated GPU nodes, and they have ninety terabytes of high-speed NVMe storage.",
        textHi: "सभी सोलह पीएचडी छात्रों के पास समर्पित जीपीयू नोड्स हैं, और उनके पास नब्बे टेराबाइट का हाई-स्पीड स्टोरेज है।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🔬",
        textEn: "Did our photolithography masking station have any alignment calibration errors during yesterday's wafer run?",
        textHi: "क्या कल के वेफर रन के दौरान हमारे फोटोलिथोग्राफी स्टेशन में कोई अलाइनमेंट त्रुटि थी?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🔬",
        textEn: "No, it had zero alignment drift; the ultraviolet laser has sub-micron beam precision.",
        textHi: "नहीं, इसमें शून्य बहाव था; पराबैंगनी लेजर में सब-माइक्रोन बीम सटीकता है।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🔬",
        textEn: "Do we have sufficient liquid nitrogen reserves for our superconducting quantum cryostat?",
        textHi: "क्या हमारे सुपरकंडक्टिंग क्वांटम क्रायोस्टेट के लिए पर्याप्त तरल नाइट्रोजन का भंडार है?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🔬",
        textEn: "We have two five-hundred-liter cryogenic dewars refilled this morning, so we have no shortage for the next three weeks.",
        textHi: "आज सुबह हमारे दो 500-लीटर के क्रायोजेनिक सिलेंडर दोबारा भरे गए हैं, इसलिए अगले तीन हफ्तों तक कोई कमी नहीं है।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🔬",
        textEn: "Our department has a substantial international research grant from the National Science Foundation.",
        textHi: "हमारे विभाग के पास राष्ट्रीय विज्ञान फाउंडेशन से एक बड़ा अंतरराष्ट्रीय अनुसंधान अनुदान है।"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🔬",
        textEn: "We have five peer-reviewed papers accepted for publication in advanced materials journals this semester.",
        textHi: "इस सेमेस्टर में उन्नत पदार्थ पत्रिकाओं में प्रकाशन के लिए हमारे पांच शोध पत्र स्वीकृत हुए हैं।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🔬",
        textEn: "The research team has maintained an outstanding standard of academic productivity.",
        textHi: "शोध टीम ने अकादमिक उत्पादकता का एक उत्कृष्ट मानक बनाए रखा है।"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🔬",
        textEn: "Your laboratory mentorship has a profound impact on all of us.",
        textHi: "प्रयोगशाला में आपके मार्गदर्शन का हम सभी पर गहरा प्रभाव पड़ता है।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🔬",
        textEn: "Do we have the safety inspection certificate signed by the university environmental officer?",
        textHi: "क्या हमारे पास विश्वविद्यालय पर्यावरण अधिकारी द्वारा हस्ताक्षरित सुरक्षा निरीक्षण प्रमाण पत्र है?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🔬",
        textEn: "Yes, I have the certified compliance document in this folder.",
        textHi: "जी हाँ, मेरे पास इस फोल्डर में प्रमाणित अनुपालन दस्तावेज है।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🔬",
        textEn: "All our laboratory compliance records are complete and up to date.",
        textHi: "हमारे सभी प्रयोगशाला अनुपालन रिकॉर्ड पूरे और अद्यतित हैं।"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🔬",
        textEn: "Thank you for the thorough review, Dr. Sen.",
        textHi: "डॉ. सेन, इस विस्तृत समीक्षा के लिए धन्यवाद।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🔬",
        textEn: "Let us continue our afternoon research experiments.",
        textHi: "आइए दोपहर के शोध प्रयोगों को जारी रखें।"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🔬",
        textEn: "On it, Doctor!",
        textHi: "अभी करती हूँ, डॉक्टर!"
      }
    ]
  },
  {
    id: "d09_sc06",
    title: "Genealogical Family Archive: Ancestral Heritage & Lineage",
    titleHi: "वंशावली पारिवारिक अभिलेखागार: पैतृक विरासत और वंशावली",
    context: "Genealogist Mr. Bannerjee helps young researcher Rohini trace her family tree across five generations.",
    situation: "Using 'has / have / had' for ancestral branches, physical traits, occupations, and historical documents.",
    characters: ["Mr. Bannerjee", "Rohini"],
    turns: [
      {
        speaker: "Mr. Bannerjee",
        avatar: "👨‍🏫",
        textEn: "Rohini, look at these archival land registry records from 1885. Your great-great-grandfather had a prominent estate near Varanasi.",
        textHi: "रोहिणी, 1885 के इन ऐतिहासिक भूमि रजिस्ट्री रिकॉर्ड को देखें। आपके परदादा के पिता की वाराणसी के पास एक प्रमुख रियासत थी।"
      },
      {
        speaker: "Rohini",
        avatar: "👩‍🎓",
        textEn: "That is fascinating! What occupation did he have according to these handwritten revenue ledgers?",
        textHi: "यह बहुत दिलचस्प है! इन हस्तलिखित बहीखातों के अनुसार उनका क्या व्यवसाय था?"
      },
      {
        speaker: "Mr. Bannerjee",
        avatar: "👨‍🏫",
        textEn: "He was a Sanskrit scholar and astronomer; he had a private observatory and he had several classical manuscripts published in Calcutta.",
        textHi: "वे संस्कृत के विद्वान और खगोलशास्त्री थे; उनकी एक निजी वेधशाला थी और कलकत्ता में उनकी कई शास्त्रीय पांडुलिपियां प्रकाशित हुई थीं।"
      },
      {
        speaker: "Rohini",
        avatar: "👩‍🎓",
        textEn: "Did my great-grandmother have siblings who migrated overseas to East Africa in the early twentieth century?",
        textHi: "क्या मेरी परदादी के कोई ऐसे भाई-बहन थे जो बीसवीं सदी की शुरुआत में पूर्वी अफ्रीका चले गए थे?"
      },
      {
        speaker: "Mr. Bannerjee",
        avatar: "👨‍🏫",
        textEn: "Yes, she had two younger brothers; they had successful shipping and spice trading businesses in Zanzibar and Mombasa.",
        textHi: "जी हाँ, उनके दो छोटे भाई थे; ज़ांज़ीबार और मोम्बासा में उनका सफल शिपिंग और मसाला व्यापार था।"
      },
      {
        speaker: "Rohini",
        avatar: "👩‍🎓",
        textEn: "Do you have any photographs of my great-grandfather in this archival album?",
        textHi: "क्या इस ऐतिहासिक एल्बम में मेरे परदादा की कोई तस्वीर है?"
      },
      {
        speaker: "Mr. Bannerjee",
        avatar: "👨‍🏫",
        textEn: "Yes, look at this sepia portrait from 1920; you have his distinctive high cheekbones and hazel eyes.",
        textHi: "जी हाँ, 1920 के इस सेपिया चित्र को देखें; आपके चेहरे पर उनके जैसे उभरे गाल और बादामी आँखें हैं।"
      },
      {
        speaker: "Rohini",
        avatar: "👩‍🎓",
        textEn: "The resemblance is striking! Does our family tree have documentation of our matrilineal lineage as well?",
        textHi: "समानता बहुत स्पष्ट है! क्या हमारी वंशावली में हमारे ननिहाल पक्ष के पूर्वजों का भी दस्तावेजीकरण है?"
      },
      {
        speaker: "Mr. Bannerjee",
        avatar: "👨‍🏫",
        textEn: "Yes, your maternal grandmother had a distinguished lineage of physicians who had Ayurvedic clinics across Bengal.",
        textHi: "जी हाँ, आपकी नानी का संबंध चिकित्सकों के एक प्रतिष्ठित परिवार से था, जिनके पूरे बंगाल में आयुर्वेदिक क्लिनिक थे।"
      },
      {
        speaker: "Rohini",
        avatar: "👩‍🎓",
        textEn: "Do we have birth certificates and wedding invitations preserved from that period?",
        textHi: "क्या हमारे पास उस काल के जन्म प्रमाण पत्र और विवाह निमंत्रण पत्र सुरक्षित हैं?"
      },
      {
        speaker: "Mr. Bannerjee",
        avatar: "👨‍🏫",
        textEn: "We have over forty preserved handwritten documents; each has illuminated calligraphy and royal wax seals.",
        textHi: "हमारे पास चालीस से अधिक संरक्षित हस्तलिखित दस्तावेज हैं; प्रत्येक पर सुंदर सुलेख और शाही मोम की मुहरें हैं।"
      },
      {
        speaker: "Rohini",
        avatar: "👩‍🎓",
        textEn: "I have a profound sense of gratitude discovering this rich heritage.",
        textHi: "इस समृद्ध विरासत को जानकर मेरे मन में गहरी कृतज्ञता की भावना पैदा हो रही है।"
      },
      {
        speaker: "Mr. Bannerjee",
        avatar: "👨‍🏫",
        textEn: "You have a family history rich in scholarship, courage, and philanthropy.",
        textHi: "आपके परिवार का इतिहास विद्वत्ता, साहस और परोपकार से समृद्ध है।"
      },
      {
        speaker: "Rohini",
        avatar: "👩‍🎓",
        textEn: "I will digitize these family tree charts for all our relatives globally.",
        textHi: "मैं दुनिया भर में अपने सभी रिश्तेदारों के लिए इन पारिवारिक वृक्ष चार्टों का डिजिटलीकरण करूँगी।"
      },
      {
        speaker: "Mr. Bannerjee",
        avatar: "👨‍🏫",
        textEn: "We have high-resolution digital scans ready on this encrypted flash drive.",
        textHi: "हमारे पास इस एन्क्रिप्टेड पेन ड्राइव में उच्च-रिज़ॉल्यूशन डिजिटल स्कैन तैयार हैं।"
      },
      {
        speaker: "Rohini",
        avatar: "👩‍🎓",
        textEn: "Thank you for unearthing our family's story, Mr. Bannerjee.",
        textHi: "मिस्टर बनर्जी, हमारे परिवार के इतिहास को सामने लाने के लिए धन्यवाद।"
      },
      {
        speaker: "Mr. Bannerjee",
        avatar: "👨‍🏫",
        textEn: "It is an honor to connect you with your ancestors.",
        textHi: "आपको आपके पूर्वजों से जोड़ना मेरे लिए सम्मान की बात है।"
      },
      {
        speaker: "Rohini",
        avatar: "👩‍🎓",
        textEn: "I will cherish these records forever.",
        textHi: "मैं इन रिकॉर्ड्स को हमेशा संजोकर रखूँगी।"
      },
      {
        speaker: "Mr. Bannerjee",
        avatar: "👨‍🏫",
        textEn: "Safe travels with your heritage!",
        textHi: "अपनी विरासत के साथ आपकी यात्रा सुखद रहे!"
      },
      {
        speaker: "Rohini",
        avatar: "👩‍🎓",
        textEn: "Thank you, Sir!",
        textHi: "धन्यवाद, सर!"
      }
    ]
  },
  {
    id: "d09_sc07",
    title: "Venture Capital Due Diligence: Startup Assets & Intellectual Property",
    titleHi: "वेंचर कैपिटल जांच: स्टार्टअप संपत्ति और बौद्धिक संपदा",
    context: "Venture Capitalist Meera evaluates deep-tech startup founders Kabir and Tanya before a Series-A term sheet.",
    situation: "Using 'has / have / had' for patents, proprietary codebases, seed capital history, and customer contracts.",
    characters: ["Meera", "Kabir", "Tanya"],
    turns: [
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Kabir and Tanya, let us review your deep-tech startup's intellectual property assets. What proprietary patents does your company have?",
        textHi: "कबीर और तान्या, आइए आपके डीप-टेक स्टार्टअप की बौद्धिक संपदा संपत्तियों की समीक्षा करें। आपकी कंपनी के पास कौन से पेटेंट हैं?"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💻",
        textEn: "Meera, our startup has four granted US utility patents in neuromorphic computing algorithms, and we have three pending filings in Europe.",
        textHi: "मीरा, हमारे स्टार्टअप के पास न्यूरोमॉर्फिक कंप्यूटिंग एल्गोरिदम में चार स्वीकृत अमेरिकी पेटेंट हैं, और हमारे पास यूरोप में तीन लंबित फाइलिंग हैं।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Does your software platform have enterprise customer traction and recurring annual contracts?",
        textHi: "क्या आपके सॉफ्टवेयर प्लेटफॉर्म पर बड़े कॉर्पोरेट ग्राहक और वार्षिक अनुबंध हैं?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍💻",
        textEn: "Yes, we have eight enterprise pilot contracts with Fortune 500 aerospace companies, and we have an annual recurring revenue of two million dollars.",
        textHi: "जी हाँ, हमारे पास फॉर्च्यून 500 एयरोस्पेस कंपनियों के साथ आठ पायलट अनुबंध हैं, और हमारे पास बीस लाख डॉलर का वार्षिक आवर्ती राजस्व (ARR) है।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "How much capital did you have in your initial pre-seed funding round?",
        textHi: "आपके शुरुआती प्री-सीड फंडिंग राउंड में आपके पास कितनी पूंजी थी?"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💻",
        textEn: "We had seven hundred and fifty thousand dollars from prominent angel investors, and we had a government innovation research grant.",
        textHi: "हमारे पास प्रमुख एंजेल निवेशकों से 7.5 लाख डॉलर थे, और हमें एक सरकारी नवाचार अनुसंधान अनुदान मिला था।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Does your engineering core team have full-stack AI and silicon design capabilities?",
        textHi: "क्या आपकी मुख्य इंजीनियरिंग टीम के पास फुल-स्टैक एआई और सिलिकॉन डिजाइन की क्षमताएं हैं?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍💻",
        textEn: "Yes, our twelve-member technical team has alumni from MIT, IIT, and top semiconductor research laboratories.",
        textHi: "जी हाँ, हमारी बारह सदस्यीय तकनीकी टीम में एमआईटी, आईआईटी और शीर्ष सेमीकंडक्टर प्रयोगशालाओं के पूर्व छात्र हैं।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Did your platform have any critical infrastructure downtime during your high-load stress testing last quarter?",
        textHi: "क्या पिछली तिमाही में आपके उच्च-लोड तनाव परीक्षण के दौरान आपके प्लेटफॉर्म पर कोई तकनीकी रुकावट आई थी?"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💻",
        textEn: "No, we had ninety-nine point nine-nine percent uptime across sixty million simulated inference requests.",
        textHi: "नहीं, छह करोड़ सिमुलेटेड इन्फरेंस अनुरोधों में हमारा 99.99% अपटाइम था।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "You have a solid technological moat and a highly competent founding team.",
        textHi: "आपके पास एक मजबूत तकनीकी बढ़त और एक अत्यधिक सक्षम संस्थापक टीम है।"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍💻",
        textEn: "We have clear unit economics and our customer acquisition cost has decreased by forty percent.",
        textHi: "हमारा यूनिट इकोनॉमिक्स स्पष्ट है और हमारे ग्राहक अधिग्रहण लागत में चालीस प्रतिशत की कमी आई है।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Our venture partnership has agreed to lead your ten-million-dollar Series-A funding round.",
        textHi: "हमारी वेंचर पार्टनरशिप आपके एक करोड़ डॉलर के सीरीज-ए फंडिंग राउंड का नेतृत्व करने के लिए सहमत हो गई है।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💻",
        textEn: "We are thrilled to have your fund as our strategic institutional partner!",
        textHi: "आपके फंड को अपने रणनीतिक संस्थागत भागीदार के रूप में पाकर हम बेहद खुश हैं!"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Do you have your legal counsel ready to review the term sheet covenants?",
        textHi: "क्या आपके कानूनी सलाहकार टर्म शीट की शर्तों की समीक्षा के लिए तैयार हैं?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍💻",
        textEn: "Yes, our corporate attorneys have the due diligence data room fully accessible.",
        textHi: "जी हाँ, हमारे कॉर्पोरेट वकीलों के पास डेटा रूम की पूरी पहुंच है।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Congratulations to both of you! You have built something genuinely transformative.",
        textHi: "आप दोनों को बहुत-बहुत बधाई! आपने वास्तव में एक क्रांतिकारी उत्पाद बनाया है।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💻",
        textEn: "Thank you, Meera! We have ambitious milestones to conquer.",
        textHi: "धन्यवाद, मीरा! हमारे सामने हासिल करने के लिए कई बड़े मील के पत्थर हैं।"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍💻",
        textEn: "Let's build the future together!",
        textHi: "आइए मिलकर भविष्य का निर्माण करें!"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Welcome to our portfolio!",
        textHi: "हमारे पोर्टफोलियो में आपका स्वागत है!"
      }
    ]
  },
  {
    id: "d09_sc08",
    title: "Tiger Reserve Ecological Audit: Predator Density & Prey Baseline",
    titleHi: "टाइगर रिजर्व पारिस्थितिक ऑडिट: शिकारी घनत्व और शिकार आधार",
    context: "Field Director Mr. Negi and Wildlife Biologist Dr. Aruna review camera-trap census data in Ranthambore.",
    situation: "Using 'has / have / had' for animal population counts, territory sizes, telemetry data, and seasonal migrations.",
    characters: ["Mr. Negi", "Dr. Aruna"],
    turns: [
      {
        speaker: "Mr. Negi",
        avatar: "👨‍🌾",
        textEn: "Dr. Aruna, let us analyze the annual wildlife census figures. What tiger density does our sanctuary have this year?",
        textHi: "डॉ. अरुणा, आइए वार्षिक वन्यजीव गणना के आंकड़ों का विश्लेषण करें। इस वर्ष हमारे अभयारण्य में बाघों का घनत्व कितना है?"
      },
      {
        speaker: "Dr. Aruna",
        avatar: "👩‍🔬",
        textEn: "Mr. Negi, the reserve has eighty-six individual adult tigers identified by stripe-pattern biometrics, and we have twenty-four healthy cubs.",
        textHi: "मिस्टर नेगी, स्ट्राइप-पैटर्न बायोमेट्रिक्स द्वारा रिजर्व में 86 वयस्क बाघों की पहचान की गई है, और हमारे पास 24 स्वस्थ शावक हैं।"
      },
      {
        speaker: "Mr. Negi",
        avatar: "👨‍🌾",
        textEn: "Does the core critical tiger habitat have sufficient ungulate prey density per square kilometer?",
        textHi: "क्या मुख्य बाघ आवास में प्रति वर्ग किलोमीटर पर्याप्त शाकाहारी शिकार घनत्व है?"
      },
      {
        speaker: "Dr. Aruna",
        avatar: "👩‍🔬",
        textEn: "Yes, the core zone has sixty-eight spotted deer, sambar, and wild boars per square kilometer; that has created an abundant food base.",
        textHi: "जी हाँ, कोर ज़ोन में प्रति वर्ग किलोमीटर अड़सठ चीतल, सांभर और जंगली सूअर हैं; इसने एक प्रचुर खाद्य आधार तैयार किया है।"
      },
      {
        speaker: "Mr. Negi",
        avatar: "👨‍🌾",
        textEn: "How many camera-trap photographic captures did we have during the four-month survey window?",
        textHi: "चार महीने के सर्वेक्षण के दौरान हमारे पास कैमरा-ट्रैप की कितनी तस्वीरें थीं?"
      },
      {
        speaker: "Dr. Aruna",
        avatar: "👩‍🔬",
        textEn: "We had over forty thousand automated camera-trap photographs across three hundred monitoring grid locations.",
        textHi: "तीन सौ ग्रिड स्थानों पर हमारे पास चालीस हजार से अधिक स्वचालित कैमरा-ट्रैप तस्वीरें थीं।"
      },
      {
        speaker: "Mr. Negi",
        avatar: "👨‍🌾",
        textEn: "Does dominant male Tiger T-120 have his GPS satellite tracking collar functioning properly?",
        textHi: "क्या प्रमुख नर बाघ T-120 का जीपीएस सैटेलाइट ट्रैकिंग कॉलर ठीक से काम कर रहा है?"
      },
      {
        speaker: "Dr. Aruna",
        avatar: "👩‍🔬",
        textEn: "Yes, his collar has continuous satellite uplink; he has established a territory of eighty square kilometers across the river valley.",
        textHi: "जी हाँ, उसके कॉलर में निरंतर सैटेलाइट लिंक है; उसने नदी घाटी में अस्सी वर्ग किलोमीटर का इलाका स्थापित कर लिया है।"
      },
      {
        speaker: "Mr. Negi",
        avatar: "👨‍🌾",
        textEn: "Did our anti-poaching patrol units have any illegal snare detections along the buffer boundary last month?",
        textHi: "क्या पिछले महीने बफर सीमा पर हमारे शिकार-विरोधी गश्ती दलों को कोई अवैध फंदा मिला था?"
      },
      {
        speaker: "Dr. Aruna",
        avatar: "👩‍🔬",
        textEn: "No, our forest guards had zero poaching incidents; they have continuous drone surveillance covering all vulnerable fringes.",
        textHi: "नहीं, हमारे वन रक्षकों के यहाँ शून्य शिकार घटनाएं हुईं; उनके पास सभी संवेदनशील सीमाओं को कवर करने वाली निरंतर ड्रोन निगरानी है।"
      },
      {
        speaker: "Mr. Negi",
        avatar: "👨‍🌾",
        textEn: "The forest ecosystem has achieved a state of magnificent ecological balance.",
        textHi: "जंगल के पारिस्थितिकी तंत्र ने शानदार संतुलन की स्थिति हासिल कर ली है।"
      },
      {
        speaker: "Dr. Aruna",
        avatar: "👩‍🔬",
        textEn: "The local fringe village communities have played a heroic role through community conservation eco-development committees.",
        textHi: "स्थानीय सीमावर्ती ग्रामीण समुदायों ने सामुदायिक संरक्षण समितियों के माध्यम से एक सराहनीय भूमिका निभाई है।"
      },
      {
        speaker: "Mr. Negi",
        avatar: "👨‍🌾",
        textEn: "We have sixty young village guides who have regular employment through ethical eco-tourism safaris.",
        textHi: "हमारे पास साठ स्थानीय युवा गाइड हैं जिन्हें पर्यावरण-पर्यटन सफारी के माध्यम से नियमित रोजगार मिला हुआ है।"
      },
      {
        speaker: "Dr. Aruna",
        avatar: "👩‍🔬",
        textEn: "This model has demonstrated that human communities and apex predators can coexist in harmony.",
        textHi: "इस मॉडल ने साबित किया है कि मानव समुदाय और शिकारी जानवर सद्भाव से सह-अस्तित्व में रह सकते हैं।"
      },
      {
        speaker: "Mr. Negi",
        avatar: "👨‍🌾",
        textEn: "Do we have the final census report ready for submission to the National Tiger Conservation Authority?",
        textHi: "क्या हमारे पास राष्ट्रीय बाघ संरक्षण प्राधिकरण को सौंपने के लिए अंतिम गणना रिपोर्ट तैयार है?"
      },
      {
        speaker: "Dr. Aruna",
        avatar: "👩‍🔬",
        textEn: "Yes, I have the complete statistical report and GIS distribution maps finalized on my workstation.",
        textHi: "जी हाँ, मेरे पास मेरे वर्कस्टेशन पर पूरी सांख्यिकी रिपोर्ट और जीआईएस वितरण मानचित्र तैयार हैं।"
      },
      {
        speaker: "Mr. Negi",
        avatar: "👨‍🌾",
        textEn: "Outstanding ecological research, Dr. Aruna.",
        textHi: "डॉ. अरुणा, उत्कृष्ट पारिस्थितिक अनुसंधान।"
      },
      {
        speaker: "Dr. Aruna",
        avatar: "👩‍🔬",
        textEn: "Thank you, Mr. Negi. Protecting these wild creatures is a privilege.",
        textHi: "धन्यवाद, मिस्टर नेगी। इन वन्यजीवों की रक्षा करना हमारे लिए सौभाग्य की बात है।"
      },
      {
        speaker: "Mr. Negi",
        avatar: "👨‍🌾",
        textEn: "Let us dispatch the official report.",
        textHi: "आइए आधिकारिक रिपोर्ट प्रेषित करें।"
      },
      {
        speaker: "Dr. Aruna",
        avatar: "👩‍🔬",
        textEn: "Transmitting the files now.",
        textHi: "फाइलें अभी भेज रही हूँ।"
      }
    ]
  },
  {
    id: "d09_sc09",
    title: "Architecture Studio: Awards Portfolio & Blueprint Archives",
    titleHi: "आर्किटेक्चर स्टूडियो: पुरस्कार पोर्टफोलियो और ब्लूप्रिंट अभिलेखागार",
    context: "Principal Architect Sameer and Senior Associate Nidhi review the firm's historic project portfolio.",
    situation: "Using 'has / have / had' for design awards, institutional clients, blueprints, and engineering collaborations.",
    characters: ["Sameer", "Nidhi"],
    turns: [
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "Nidhi, let us assemble our architecture studio's milestone retrospective. How many international architectural awards does our firm have?",
        textHi: "निधि, आइए हमारे स्टूडियो के ऐतिहासिक कार्यों का संग्रह तैयार करें। हमारी फर्म के पास कितने अंतरराष्ट्रीय वास्तुशिल्प पुरस्कार हैं?"
      },
      {
        speaker: "Nidhi",
        avatar: "👩‍🎨",
        textEn: "Sameer, our firm has seven Aga Khan Architecture Award nominations and we have two World Architecture Festival gold medals in sustainable design.",
        textHi: "समीर, हमारी फर्म के पास सात आगा खान आर्किटेक्चर पुरस्कार नामांकन हैं और सतत डिजाइन में हमारे पास दो वर्ल्ड आर्किटेक्चर फेस्टिवल स्वर्ण पदक हैं।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "Does our archive have the original hand-drafted blueprints for the Bangalore International Convention Center project?",
        textHi: "क्या हमारे अभिलेखागार में बैंगलोर अंतर्राष्ट्रीय सम्मेलन केंद्र परियोजना के लिए हाथ से बनाए गए मूल ब्लूप्रिंट हैं?"
      },
      {
        speaker: "Nidhi",
        avatar: "👩‍🎨",
        textEn: "Yes, we have all structural elevation drawings, and we had the original master model preserved in the heritage display room.",
        textHi: "जी हाँ, हमारे पास सभी संरचनात्मक चित्र हैं, और हमारे पास हेरिटेज डिस्प्ले रूम में संरक्षित मूल मॉडल मौजूद था।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "What client relationships did we have during our initial decade in the early 2000s?",
        textHi: "2000 के दशक की शुरुआत में हमारे पहले दशक के दौरान हमारे किन ग्राहकों के साथ संबंध थे?"
      },
      {
        speaker: "Nidhi",
        avatar: "👩‍🎨",
        textEn: "We had long-term partnerships with leading universities, and we had public infrastructure commissions across seven Indian states.",
        textHi: "हमारे प्रमुख विश्वविद्यालयों के साथ दीर्घकालिक संबंध थे, और सात भारतीय राज्यों में हमारे पास सार्वजनिक बुनियादी ढांचा परियोजनाएं थीं।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "Does our current design team have proficiency in advanced parametric modeling software?",
        textHi: "क्या हमारी वर्तमान डिजाइन टीम के पास उन्नत पैरामीट्रिक मॉडलिंग सॉफ्टवेयर में दक्षता है?"
      },
      {
        speaker: "Nidhi",
        avatar: "👩‍🎨",
        textEn: "All twenty-five architects have mastery in Rhino, Grasshopper, and building information modeling platforms.",
        textHi: "सभी पच्चीस वास्तुकारों को राइनो, ग्रासहॉपर और बीआईएम प्लेटफॉर्म में महारत हासिल है।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "Did we have any structural load issues during the construction of the curved glass cantilever bridge in Hyderabad?",
        textHi: "क्या हैदराबाद में घुमावदार ग्लास कैंटिलीवर ब्रिज के निर्माण के दौरान हमारे सामने संरचनात्मक भार की कोई समस्या आई थी?"
      },
      {
        speaker: "Nidhi",
        avatar: "👩‍🎨",
        textEn: "No, our structural engineers had post-tensioned steel cables installed; the bridge has withstood seismic stress tests effortlessly.",
        textHi: "नहीं, हमारे इंजीनियरों ने पोस्ट-टेंशन वाले स्टील केबल लगाए थे; पुल ने भूकंपीय तनाव परीक्षणों का आसानी से सामना किया है।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "Our studio has a profound design philosophy: respecting local cultural context while embracing futuristic engineering.",
        textHi: "हमारे स्टूडियो का एक गहरा डिज़ाइन दर्शन है: भविष्य के इंजीनियरिंग को अपनाते हुए स्थानीय सांस्कृतिक संदर्भ का सम्मान करना।"
      },
      {
        speaker: "Nidhi",
        avatar: "👩‍🎨",
        textEn: "Every building we design has natural ventilation, low embodied carbon, and rainwater harvesting as non-negotiable baselines.",
        textHi: "हमारे द्वारा डिजाइन की गई प्रत्येक इमारत में प्राकृतिक वेंटिलेशन, कम कार्बन और वर्षा जल संचयन अनिवार्य मानक के रूप में होते हैं।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "We have an invitation to deliver the keynote address at the Venice Architecture Biennale next spring.",
        textHi: "अगली वसंत में वेनिस आर्किटेक्चर बिएननेल में मुख्य भाषण देने के लिए हमारे पास एक निमंत्रण है।"
      },
      {
        speaker: "Nidhi",
        avatar: "👩‍🎨",
        textEn: "That has put our studio on the premier global stage of contemporary architecture.",
        textHi: "इसने हमारे स्टूडियो को समकालीन वास्तुकला के प्रमुख वैश्विक मंच पर ला खड़ा किया है।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "Do we have the monograph book layout ready for the publisher in London?",
        textHi: "क्या हमारे पास लंदन के प्रकाशक के लिए मोनोग्राफ पुस्तक का लेआउट तैयार है?"
      },
      {
        speaker: "Nidhi",
        avatar: "👩‍🎨",
        textEn: "Yes, the monograph has three hundred pages of full-color architectural photography and architectural essays.",
        textHi: "जी हाँ, मोनोग्राफ में तीन सौ पृष्ठों की रंगीन फोटोग्राफी और वास्तुशिल्प निबंध हैं।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "You have curated this portfolio with remarkable aesthetic precision, Nidhi.",
        textHi: "निधि, आपने इस पोर्टफोलियो को उल्लेखनीय कलात्मक सटीकता के साथ संजोया है।"
      },
      {
        speaker: "Nidhi",
        avatar: "👩‍🎨",
        textEn: "Thank you, Sameer. It is a reflection of our collective creative journey.",
        textHi: "धन्यवाद, समीर। यह हमारी सामूहिक रचनात्मक यात्रा का प्रतिबिंब है।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "Let us send the proof to London.",
        textHi: "आइए लंदन को अंतिम प्रूफ भेजें।"
      },
      {
        speaker: "Nidhi",
        avatar: "👩‍🎨",
        textEn: "Sending it right now!",
        textHi: "अभी भेज रही हूँ!"
      }
    ]
  },
  {
    id: "d09_sc10",
    title: "Artisanal Sourdough Bakery: Heirloom Cultures & Grain Inventory",
    titleHi: "कारीगर खट्टी रोटी बेकरी: पैतृक खमीर और अनाज का स्टॉक",
    context: "Master Baker Pierre and Apprentice Dev inspect sourdough starter cultures and stone-ground organic grain stocks.",
    situation: "Using 'has / have / had' for sourdough culture ages, gluten content, hydration ratios, and flour shipments.",
    characters: ["Chef Pierre", "Dev"],
    turns: [
      {
        speaker: "Chef Pierre",
        avatar: "👨‍🍳",
        textEn: "Dev, let us examine our bakery's heirloom sourdough starter cultures. How old is this mother levain in this stoneware crock?",
        textHi: "देव, आइए हमारी बेकरी के पैतृक खमीर (सोअरडो स्टार्टर) की जांच करें। इस मिट्टी के बर्तन में यह मदर लेवेन कितना पुराना है?"
      },
      {
        speaker: "Dev",
        avatar: "👨‍🍳",
        textEn: "Chef Pierre, this sourdough mother culture has a continuous lineage of eighty-five years; it has wild lactobacillus strains from a monastery in Normandy.",
        textHi: "शेफ पियरे, इस खमीर की 85 साल की निरंतर परंपरा है; इसमें नॉर्मंडी के एक मठ से प्राप्त प्राकृतिक लैक्टोबैसिलस बैक्टीरिया हैं।"
      },
      {
        speaker: "Chef Pierre",
        avatar: "👨‍🍳",
        textEn: "Does it have the proper pH acidity level of three point eight after this morning's flour feeding?",
        textHi: "क्या आज सुबह आटा मिलाने के बाद इसका पीएच अम्लता स्तर 3.8 पर सही है?"
      },
      {
        speaker: "Dev",
        avatar: "👨‍🍳",
        textEn: "Yes, it has a wonderfully balanced fruity and lactic aroma, and it has tripled in volume over the past four hours.",
        textHi: "जी हाँ, इसमें बहुत संतुलित फल जैसी और हल्की खट्टी खुशबू है, और पिछले चार घंटों में इसका आयतन तीन गुना बढ़ गया है।"
      },
      {
        speaker: "Chef Pierre",
        avatar: "👨‍🍳",
        textEn: "Do we have sufficient stone-ground ancient grains in our climate-controlled dry pantry?",
        textHi: "क्या हमारी सूखी पेंट्री में पर्याप्त पत्थर से पिसे प्राचीन अनाजों का भंडार है?"
      },
      {
        speaker: "Dev",
        avatar: "👨‍🍳",
        textEn: "We have two hundred kilograms of organic Emmer wheat, we have Spelt grain, and we have dark Austrian rye flour in sealed sacks.",
        textHi: "हमारे पास दो सौ किलो जैविक एम्मर गेहूं है, स्पेल्ट अनाज है, और सीलबंद बोरियों में गहरे रंग का ऑस्ट्रियाई राई का आटा है।"
      },
      {
        speaker: "Chef Pierre",
        avatar: "👨‍🍳",
        textEn: "What hydration percentage did you have for the country sourdough boules baked yesterday morning?",
        textHi: "कल सुबह सेकी गई कंट्री सोअरडो ब्रेड के लिए आपके पास कितना हाइड्रेशन (पानी का) प्रतिशत था?"
      },
      {
        speaker: "Dev",
        avatar: "👨‍🍳",
        textEn: "We had seventy-eight percent hydration; the loaves had a blistered dark mahogany crust and an open, gelatinized crumb structure.",
        textHi: "हमारा 78% हाइड्रेशन था; रोटियों पर एक कुरकुरी भूरी परत और अंदर जालीदार, फूला हुआ सुंदर हिस्सा बना था।"
      },
      {
        speaker: "Chef Pierre",
        avatar: "👨‍🍳",
        textEn: "Did the artisan French stone deck oven have any temperature fluctuations during the morning bake?",
        textHi: "क्या सुबह बेकिंग के दौरान पारंपरिक फ्रेंच स्टोन डेक ओवन के तापमान में कोई उतार-चढ़ाव आया था?"
      },
      {
        speaker: "Dev",
        avatar: "👨‍🍳",
        textEn: "No, the refractory stone hearth had a steady heat of two hundred and forty degrees Celsius with high steam injection.",
        textHi: "नहीं, पत्थर की भट्ठी में तेज भाप के साथ 240 डिग्री सेल्सियस की स्थिर गर्मी बनी हुई थी।"
      },
      {
        speaker: "Chef Pierre",
        avatar: "👨‍🍳",
        textEn: "Our bakery has an unwavering commitment to long twenty-four-hour cold fermentation.",
        textHi: "हमारी बेकरी चौबीस घंटे के लंबे ठंडे किण्वन (फर्मेंटेशन) के प्रति पूरी तरह प्रतिबद्ध है।"
      },
      {
        speaker: "Dev",
        avatar: "👨‍🍳",
        textEn: "That slow process breaks down gluten peptides and gives the bread its exceptional digestibility and flavor.",
        textHi: "वह धीमी प्रक्रिया ग्लूटेन को पचाने में आसान बनाती है और ब्रेड को उसका असाधारण स्वाद देती है।"
      },
      {
        speaker: "Chef Pierre",
        avatar: "👨‍🍳",
        textEn: "Do we have custom standing orders for local Michelin-starred restaurants tomorrow morning?",
        textHi: "क्या कल सुबह के लिए स्थानीय मिशेलिन-स्टार रेस्टोरेंटों के विशेष ऑर्डर हैं?"
      },
      {
        speaker: "Dev",
        avatar: "👨‍🍳",
        textEn: "Yes, we have sixty baguettes, forty walnut-cranberry loaves, and thirty brioche buns scheduled for 6 AM delivery.",
        textHi: "जी हाँ, हमारे पास सुबह 6 बजे डिलीवरी के लिए साठ बैगूएट, चालीस अखरोट-क्रैनबेरी लोफ और तीस ब्रिओश बन्स निर्धारित हैं।"
      },
      {
        speaker: "Chef Pierre",
        avatar: "👨‍🍳",
        textEn: "You have developed an extraordinary intuition for fermentation and dough handling, Dev.",
        textHi: "देव, आपने किण्वन और आटे को संभालने की एक असाधारण समझ विकसित कर ली है।"
      },
      {
        speaker: "Dev",
        avatar: "👨‍🍳",
        textEn: "I had the best master teacher in the world, Chef Pierre.",
        textHi: "शेफ पियरे, मेरे पास दुनिया के सबसे बेहतरीन गुरु रहे हैं।"
      },
      {
        speaker: "Chef Pierre",
        avatar: "👨‍🍳",
        textEn: "The art of artisanal bread making has a bright future in your hands.",
        textHi: "कारीगर ब्रेड बनाने की कला का आपके हाथों में एक उज्ज्वल भविष्य है।"
      },
      {
        speaker: "Dev",
        avatar: "👨‍🍳",
        textEn: "Let us shape the evening batch of rustic loaves into proofing baskets.",
        textHi: "आइए देहाती ब्रेड के शाम के बैच को तैयार करने वाली टोकरियों में ढालें।"
      },
      {
        speaker: "Chef Pierre",
        avatar: "👨‍🍳",
        textEn: "On with the craft!",
        textHi: "कारीगरी में जुट जाएं!"
      },
      {
        speaker: "Dev",
        avatar: "👨‍🍳",
        textEn: "Yes, Chef!",
        textHi: "जी, शेफ!"
      }
    ]
  }
];
