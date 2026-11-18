import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const day01Dialogues = [
  {
    id: "d01_sc01",
    title: "Morning Reception at Corporate Headquarters",
    titleHi: "कॉरपोरेट मुख्यालय के स्वागत कक्ष में सुबह का शिष्टाचार",
    context: "Executive consultant Mr. Anand arrives at 8:45 AM for a strategy briefing and greets receptionist Ms. Kapoor.",
    situation: "Formal early morning arrival salutations, honorific addressing, and professional reception protocol.",
    characters: ["Ms. Kapoor", "Mr. Anand"],
    turns: [
      {
        speaker: "Ms. Kapoor",
        avatar: "👩‍💼",
        textEn: "Good morning, Sir! Welcome to Apex Global Solutions.",
        textHi: "शुभ प्रभात, महोदय! एपेक्स ग्लोबल सॉल्यूशंस में आपका हार्दिक स्वागत है।"
      },
      {
        speaker: "Mr. Anand",
        avatar: "👨‍💼",
        textEn: "Good morning, Ms. Kapoor. It is a pleasure to be here this morning.",
        textHi: "शुभ प्रभात, सुश्री कपूर। आज सुबह यहाँ उपस्थित होना अत्यंत सुखद है।"
      },
      {
        speaker: "Ms. Kapoor",
        avatar: "👩‍💼",
        textEn: "We are very pleased to have you with us today. May I confirm your appointment details?",
        textHi: "आज हमारे साथ आपकी उपस्थिति हमारे लिए अत्यंत हर्ष का विषय है। क्या मैं आपके अपॉइंटमेंट के विवरण की पुष्टि कर सकती हूँ?"
      },
      {
        speaker: "Mr. Anand",
        avatar: "👨‍💼",
        textEn: "Certainly. My name is Vikram Anand, and I have a scheduled briefing with Dr. Sen at nine o'clock.",
        textHi: "निश्चय ही। मेरा नाम विक्रम आनंद है, और नौ बजे डॉ. सेन के साथ मेरी एक पूर्व-निर्धारित बैठक है।"
      },
      {
        speaker: "Ms. Kapoor",
        avatar: "👩‍💼",
        textEn: "Yes, Mr. Anand. Dr. Sen mentioned your visit earlier this morning. He is expecting you.",
        textHi: "जी हाँ, मिस्टर आनंद। डॉ. सेन ने आज सुबह आपकी यात्रा का उल्लेख किया था। वे आपकी प्रतीक्षा कर रहे हैं।"
      },
      {
        speaker: "Mr. Anand",
        avatar: "👨‍💼",
        textEn: "Wonderful. Did he arrive at the office early today?",
        textHi: "बहुत उत्तम। क्या वे आज सुबह कार्यालय जल्दी आ गए थे?"
      },
      {
        speaker: "Ms. Kapoor",
        avatar: "👩‍💼",
        textEn: "Yes, he arrived around eight o'clock and is currently reviewing the morning briefing documents in Boardroom B.",
        textHi: "जी हाँ, वे लगभग आठ बजे आ गए थे और वर्तमान में बोर्डरूम बी में सुबह के ब्रीफिंग दस्तावेजों की समीक्षा कर रहे हैं।"
      },
      {
        speaker: "Mr. Anand",
        avatar: "👨‍💼",
        textEn: "Thank you for the update. How is the morning schedule looking across the department?",
        textHi: "इस जानकारी के लिए धन्यवाद। पूरे विभाग में आज सुबह की समय-सारणी कैसी चल रही है?"
      },
      {
        speaker: "Ms. Kapoor",
        avatar: "👩‍💼",
        textEn: "Everything is proceeding smoothly according to schedule. Would you like a warm beverage while you wait?",
        textHi: "सब कुछ निर्धारित कार्यक्रम के अनुसार सुचारू रूप से चल रहा है। क्या आप प्रतीक्षा करते समय कोई गर्म पेय लेना पसंद करेंगे?"
      },
      {
        speaker: "Mr. Anand",
        avatar: "👨‍💼",
        textEn: "A cup of black coffee would be very welcome, thank you.",
        textHi: "एक कप ब्लैक कॉफी बहुत अच्छी रहेगी, धन्यवाद।"
      },
      {
        speaker: "Ms. Kapoor",
        avatar: "👩‍💼",
        textEn: "Right away, Mr. Anand. Please have a seat in the executive visitor lounge.",
        textHi: "अभी लाती हूँ, मिस्टर आनंद। कृपया कार्यकारी अतिथि कक्ष में विराजें।"
      },
      {
        speaker: "Mr. Anand",
        avatar: "👨‍💼",
        textEn: "Thank you. By the way, the weather is remarkably pleasant outside this morning.",
        textHi: "धन्यवाद। वैसे, आज सुबह बाहर का मौसम अत्यंत सुहावना है।"
      },
      {
        speaker: "Ms. Kapoor",
        avatar: "👩‍💼",
        textEn: "It truly is! The morning breeze is quite refreshing after yesterday's heat.",
        textHi: "सचमुच! कल की गर्मी के बाद सुबह की यह ठंडी हवा काफी ताजगी देने वाली है।"
      },
      {
        speaker: "Mr. Anand",
        avatar: "👨‍💼",
        textEn: "Indeed. I hope the rest of the workweek remains equally pleasant.",
        textHi: "बिल्कुल। मुझे आशा है कि इस कार्य-सप्ताह के बाकी दिन भी ऐसे ही सुखद रहेंगे।"
      },
      {
        speaker: "Ms. Kapoor",
        avatar: "👩‍💼",
        textEn: "Here is your fresh coffee, Sir. Dr. Sen's executive assistant just informed me that Boardroom B is now ready.",
        textHi: "यह रही आपकी ताजा कॉफी, सर। डॉ. सेन के सहायक ने अभी सूचित किया है कि बोर्डरूम बी अब तैयार है।"
      },
      {
        speaker: "Mr. Anand",
        avatar: "👨‍💼",
        textEn: "Splendid. Thank you very much for your attentive assistance, Ms. Kapoor.",
        textHi: "शानदार। आपकी इस तत्परता और सहयोग के लिए बहुत-बहुत धन्यवाद, सुश्री कपूर।"
      },
      {
        speaker: "Ms. Kapoor",
        avatar: "👩‍💼",
        textEn: "You are most welcome, Mr. Anand. Please proceed down the corridor to your right.",
        textHi: "आपका बहुत-बहुत स्वागत है, मिस्टर आनंद। कृपया अपनी दाईं ओर वाले गलियारे से आगे बढ़ें।"
      },
      {
        speaker: "Mr. Anand",
        avatar: "👨‍💼",
        textEn: "Understood. Have a productive and pleasant morning ahead!",
        textHi: "समझ गया। आपकी आगे की सुबह फलदायी और सुखद रहे!"
      },
      {
        speaker: "Ms. Kapoor",
        avatar: "👩‍💼",
        textEn: "Thank you, Sir. Have a fruitful meeting with the leadership team.",
        textHi: "धन्यवाद, महोदय। नेतृत्व टीम के साथ आपकी बैठक सफल और सार्थक रहे।"
      },
      {
        speaker: "Mr. Anand",
        avatar: "👨‍💼",
        textEn: "I appreciate that. I shall see you again when the session concludes.",
        textHi: "मैं आपकी शुभकामना की सराहना करता हूँ। सत्र समाप्त होने पर आपसे पुनः भेंट होगी।"
      },
      {
        speaker: "Ms. Kapoor",
        avatar: "👩‍💼",
        textEn: "Certainly, Sir. Goodbye for now, and have a wonderful day.",
        textHi: "अवश्य, महोदय। अभी के लिए अलविदा, और आपका दिन अत्यंत शुभ हो।"
      },
      {
        speaker: "Mr. Anand",
        avatar: "👨‍💼",
        textEn: "Goodbye, Ms. Kapoor. Take care.",
        textHi: "अलविदा, सुश्री कपूर। अपना ध्यान रखें।"
      }
    ]
  },
  {
    id: "d01_sc02",
    title: "Faculty Lounge: The Midday Greeting Boundary",
    titleHi: "संकाय लाउंज: दोपहर के अभिवादन की समय सीमा",
    context: "Professor Sharma and Dr. Mehta meet in the department lounge at 11:58 AM as the clock approaches 12:00 noon.",
    situation: "Colleagues exchanging morning greetings and humorously observing the clock transition to 'Good afternoon'.",
    characters: ["Professor Sharma", "Dr. Mehta"],
    turns: [
      {
        speaker: "Professor Sharma",
        avatar: "👨‍🏫",
        textEn: "Good morning, Dr. Mehta! Are you preparing for the midday research seminar?",
        textHi: "शुभ प्रभात, डॉ. मेहता! क्या आप दोपहर के शोध सेमिनार की तैयारी कर रहे हैं?"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👩‍🏫",
        textEn: "Good morning, Professor Sharma! Yes, I am finalizing the slides for our twelve-thirty presentation.",
        textHi: "शुभ प्रभात, प्रोफेसर शर्मा! जी हाँ, मैं हमारे बारह-तीस बजे वाले प्रस्तुतीकरण की स्लाइडों को अंतिम रूप दे रही हूँ।"
      },
      {
        speaker: "Professor Sharma",
        avatar: "👨‍🏫",
        textEn: "Look at the wall clock—it is precisely eleven fifty-nine.",
        textHi: "दीवार घड़ी देखिए—अभी ठीक ग्यारह बजकर उनसठ मिनट हुए हैं।"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👩‍🏫",
        textEn: "Indeed! In exactly sixty seconds, our greeting must transition to 'Good afternoon'.",
        textHi: "सचमुच! ठीक साठ सेकंड में हमारा अभिवादन 'गुड आफ्टरनून' में बदल जाना चाहिए।"
      },
      {
        speaker: "Professor Sharma",
        avatar: "👨‍🏫",
        textEn: "That is true. Many students mistakenly say 'Good morning' at two o'clock simply because it is their first encounter of the day.",
        textHi: "यह बिल्कुल सच है। कई छात्र दोपहर दो बजे भी गलती से 'गुड मॉर्निंग' कह देते हैं, केवल इसलिए क्योंकि वह दिन की उनकी पहली मुलाकात होती है।"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👩‍🏫",
        textEn: "I notice that often. Time-bound salutations always depend strictly on the actual clock hour, not on when one wakes up.",
        textHi: "मैं भी यह अक्सर देखती हूँ। समय-आधारित अभिवादन सदैव घड़ी के वास्तविक समय पर निर्भर करते हैं, न कि इस बात पर कि कोई कब सोकर उठा है।"
      },
      {
        speaker: "Professor Sharma",
        avatar: "👨‍🏫",
        textEn: "Precisely. Ah, the clock just struck twelve! Good afternoon, Dr. Mehta!",
        textHi: "बिल्कुल सही। अरे, घड़ी में अभी ठीक बारह बज गए! शुभ दोपहर, डॉ. मेहता!"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👩‍🏫",
        textEn: "Good afternoon, Professor! That was immaculate timing.",
        textHi: "शुभ दोपहर, प्रोफेसर! यह बिल्कुल सटीक समय पर हुआ।"
      },
      {
        speaker: "Professor Sharma",
        avatar: "👨‍🏫",
        textEn: "How are the preparations for the visiting delegates progressing this afternoon?",
        textHi: "आज दोपहर आने वाले प्रतिनिधिमंडल की तैयारियाँ कैसी चल रही हैं?"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👩‍🏫",
        textEn: "The auditorium arrangements are complete, and our student volunteers are ready at the main entrance.",
        textHi: "सभागार की व्यवस्था पूरी हो चुकी है, और हमारे छात्र स्वयंसेवक मुख्य द्वार पर तैयार हैं।"
      },
      {
        speaker: "Professor Sharma",
        avatar: "👨‍🏫",
        textEn: "Excellent. Will Dean Verma join us for the opening address at one o'clock?",
        textHi: "अति उत्तम। क्या डीन वर्मा एक बजे उद्घाटन भाषण के लिए हमारे साथ जुड़ेंगे?"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👩‍🏫",
        textEn: "Yes, Dean Verma confirmed his presence earlier today. He sends his warm regards to our department.",
        textHi: "जी हाँ, डीन वर्मा ने आज सुबह अपनी उपस्थिति की पुष्टि की थी। उन्होंने हमारे विभाग को अपनी हार्दिक शुभकामनाएँ भेजी हैं।"
      },
      {
        speaker: "Professor Sharma",
        avatar: "👨‍🏫",
        textEn: "That is wonderful news. I shall meet the delegates in the conference wing shortly.",
        textHi: "यह बहुत अच्छी खबर है। मैं शीघ्र ही सम्मेलन कक्ष में प्रतिनिधियों से मिलूँगा।"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👩‍🏫",
        textEn: "Please convey my best wishes and greetings to them when they arrive.",
        textHi: "कृपया उनके आने पर उन्हें मेरी ओर से हार्दिक शुभकामनाएँ और अभिवादन दें।"
      },
      {
        speaker: "Professor Sharma",
        avatar: "👨‍🏫",
        textEn: "I certainly will. I hope your afternoon presentation is a resounding success.",
        textHi: "मैं अवश्य दूंगा। मुझे आशा है कि आज दोपहर आपका प्रस्तुतीकरण अत्यंत सफल रहेगा।"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👩‍🏫",
        textEn: "Thank you, Professor Sharma. I truly appreciate your encouragement.",
        textHi: "धन्यवाद, प्रोफेसर शर्मा। मैं आपके इस प्रोत्साहन की वास्तव में सराहना करती हूँ।"
      },
      {
        speaker: "Professor Sharma",
        avatar: "👨‍🏫",
        textEn: "You are most welcome. I will take my leave now to inspect the podium setup.",
        textHi: "आपका बहुत-बहुत स्वागत है। पोडियम व्यवस्था का निरीक्षण करने के लिए अब मैं प्रस्थान करता हूँ।"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👩‍🏫",
        textEn: "Of course. Have a pleasant afternoon ahead, Professor.",
        textHi: "बिल्कुल। आपकी आगे की दोपहर सुखद रहे, प्रोफेसर।"
      },
      {
        speaker: "Professor Sharma",
        avatar: "👨‍🏫",
        textEn: "Thank you. See you at the seminar!",
        textHi: "धन्यवाद। सेमिनार में मिलते हैं!"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👩‍🏫",
        textEn: "See you soon. Goodbye!",
        textHi: "जल्द मिलते हैं। अलविदा!"
      }
    ]
  },
  {
    id: "d01_sc03",
    title: "Afternoon Client Onboarding Video Call",
    titleHi: "दोपहर के समय क्लाइंट ऑनबोर्डिंग वीडियो कॉल",
    context: "Account Director Natasha meets with new client Mr. Harrison at 2:30 PM for their introductory onboarding call.",
    situation: "Practicing formal afternoon greetings, international time zone awareness, and professional self-introductions.",
    characters: ["Natasha", "Mr. Harrison"],
    turns: [
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "Good afternoon, Mr. Harrison! Can you hear and see me clearly?",
        textHi: "शुभ दोपहर, मिस्टर हैरिसन! क्या आप मुझे स्पष्ट रूप से सुन और देख पा रहे हैं?"
      },
      {
        speaker: "Mr. Harrison",
        avatar: "👨‍💻",
        textEn: "Good afternoon, Natasha! Yes, both audio and video are perfectly clear.",
        textHi: "शुभ दोपहर, नताशा! जी हाँ, ऑडियो और वीडियो दोनों बिल्कुल स्पष्ट हैं।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "Wonderful! Allow me to introduce myself formally. My name is Natasha Roy, and I am your dedicated client account director.",
        textHi: "शानदार! मुझे औपचारिक रूप से अपना परिचय देने की अनुमति दें। मेरा नाम नताशा रॉय है, और मैं आपकी समर्पित क्लाइंट अकाउंट डायरेक्टर हूँ।"
      },
      {
        speaker: "Mr. Harrison",
        avatar: "👨‍💻",
        textEn: "It is a pleasure to meet you, Natasha. Thank you for setting up this onboarding session.",
        textHi: "आपसे मिलकर अत्यंत प्रसन्नता हुई, नताशा। इस ऑनबोर्डिंग सत्र को आयोजित करने के लिए आपका धन्यवाद।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "The pleasure is entirely ours, Mr. Harrison. Welcome to our enterprise partner network.",
        textHi: "यह हमारे लिए भी अत्यंत हर्ष की बात है, मिस्टर हैरिसन। हमारे एंटरप्राइज पार्टनर नेटवर्क में आपका स्वागत है।"
      },
      {
        speaker: "Mr. Harrison",
        avatar: "👨‍💻",
        textEn: "Thank you. What is the local time in New Delhi right now?",
        textHi: "धन्यवाद। इस समय नई दिल्ली में स्थानीय समय क्या हो रहा है?"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "It is two thirty in the afternoon here. I believe it is early morning in London?",
        textHi: "यहाँ दोपहर के ढाई बज रहे हैं। मेरा मानना है कि लंदन में अभी सुबह का समय होगा?"
      },
      {
        speaker: "Mr. Harrison",
        avatar: "👨‍💻",
        textEn: "Yes, exactly nine o'clock in the morning here. So a very good morning from London, and a good afternoon to you!",
        textHi: "जी हाँ, यहाँ सुबह के ठीक नौ बजे हैं। तो लंदन से आपको शुभ प्रभात, और आपको शुभ दोपहर!"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "How lovely! International time differences always make greetings interesting.",
        textHi: "कितना सुंदर! अंतरराष्ट्रीय समय का अंतर अभिवादनों को हमेशा दिलचस्प बना देता है।"
      },
      {
        speaker: "Mr. Harrison",
        avatar: "👨‍💻",
        textEn: "Indeed they do. How is your day going so far, Natasha?",
        textHi: "बिल्कुल सही। नताशा, अब तक आपका दिन कैसा चल रहा है?"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "It has been very productive, thank you for asking. How was your morning commute?",
        textHi: "यह बहुत ही फलदायी रहा है, पूछने के लिए धन्यवाद। आज सुबह का आपका सफर कैसा रहा?"
      },
      {
        speaker: "Mr. Harrison",
        avatar: "👨‍💻",
        textEn: "Very smooth and pleasant. I am looking forward to our collaboration.",
        textHi: "बहुत ही सुगम और सुखद। मैं हमारे सहयोग की प्रतीक्षा कर रहा हूँ।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "We share that enthusiasm. Our team is fully committed to your project goals.",
        textHi: "हम भी उसी उत्साह का अनुभव कर रहे हैं। हमारी टीम आपके प्रोजेक्ट लक्ष्यों के प्रति पूरी तरह प्रतिबद्ध है।"
      },
      {
        speaker: "Mr. Harrison",
        avatar: "👨‍💻",
        textEn: "That gives me great confidence. Shall we review the introductory milestones?",
        textHi: "इससे मुझे बहुत आत्मविश्वास मिलता है। क्या हम शुरुआती मील के पत्थरों की समीक्षा करें?"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "Certainly. I have shared the project timeline on your screen.",
        textHi: "निश्चय ही। मैंने आपकी स्क्रीन पर प्रोजेक्ट की समय-सीमा साझा कर दी है।"
      },
      {
        speaker: "Mr. Harrison",
        avatar: "👨‍💻",
        textEn: "I can see it clearly. Everything looks structured and well organized.",
        textHi: "मैं इसे स्पष्ट रूप से देख सकता हूँ। सब कुछ व्यवस्थित और सुगठित दिख रहा है।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "I am delighted to hear that. I will send you the complete documentation right after this call.",
        textHi: "यह सुनकर मुझे बहुत खुशी हुई। मैं इस कॉल के तुरंत बाद आपको पूरे दस्तावेज भेज दूंगी।"
      },
      {
        speaker: "Mr. Harrison",
        avatar: "👨‍💻",
        textEn: "Thank you, Natasha. It was an absolute pleasure connecting with you today.",
        textHi: "धन्यवाद, नताशा। आज आपसे संपर्क करके अत्यंत सुखद अनुभव हुआ।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "Likewise, Mr. Harrison. Have a wonderful rest of your morning and a productive day in London.",
        textHi: "मुझे भी, मिस्टर हैरिसन। आपकी शेष सुबह बहुत अच्छी रहे और लंदन में आपका दिन फलदायी हो।"
      },
      {
        speaker: "Mr. Harrison",
        avatar: "👨‍💻",
        textEn: "Thank you so much. Have a great evening ahead in India. Goodbye!",
        textHi: "बहुत-बहुत धन्यवाद। भारत में आपकी आगे की शाम बहुत अच्छी रहे। अलविदा!"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍💼",
        textEn: "Thank you, Mr. Harrison. Goodbye and take care!",
        textHi: "धन्यवाद, मिस्टर हैरिसन। अलविदा और अपना ध्यान रखें!"
      }
    ]
  },
  {
    id: "d01_sc04",
    title: "Evening Symposium Arrival: Good Evening vs. Good Night",
    titleHi: "शाम के संगोष्ठी में आगमन: गुड इवनिंग बनाम गुड नाईट का अंतर",
    context: "At 6:45 PM, keynote speaker Dr. Alok Sen arrives at the City Convention Centre and greets the event host Mrs. Deshmukh.",
    situation: "Practicing the evening arrival greeting ('Good evening') and reinforcing that 'Good night' is only for departure.",
    characters: ["Mrs. Deshmukh", "Dr. Sen"],
    turns: [
      {
        speaker: "Mrs. Deshmukh",
        avatar: "👩‍💼",
        textEn: "Good evening, Dr. Sen! Welcome to the National Science Symposium.",
        textHi: "शुभ संध्या, डॉ. सेन! राष्ट्रीय विज्ञान संगोष्ठी में आपका हार्दिक स्वागत है।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Good evening, Mrs. Deshmukh. It is an honor to be here tonight.",
        textHi: "शुभ संध्या, श्रीमती देशमुख। आज रात यहाँ उपस्थित होना मेरे लिए सम्मान की बात है।"
      },
      {
        speaker: "Mrs. Deshmukh",
        avatar: "👩‍💼",
        textEn: "Earlier, a young student arrived and greeted me with 'Good night, Ma'am' because it was dark outside!",
        textHi: "पहले एक युवा छात्र आया और उसने मुझे 'गुड नाईट, मैम' कहकर अभिवादन किया क्योंकि बाहर अंधेरा हो चुका था!"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "That is a very common misconception. People forget that 'Good evening' is an arrival greeting, whereas 'Good night' is strictly a departure farewell.",
        textHi: "यह बहुत ही आम गलतफहमी है। लोग भूल जाते हैं कि 'गुड इवनिंग' मिलने पर किया जाने वाला अभिवादन है, जबकि 'गुड नाईट' केवल विदाई का शब्द है।"
      },
      {
        speaker: "Mrs. Deshmukh",
        avatar: "👩‍💼",
        textEn: "Precisely! Even if one arrives at nine in the evening, the proper greeting remains 'Good evening'.",
        textHi: "बिल्कुल सही! भले ही कोई रात नौ बजे पहुंचे, सही अभिवादन हमेशा 'गुड इवनिंग' ही रहता है।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Exactly. How is the evening attendance shaping up?",
        textHi: "बिल्कुल। आज शाम की उपस्थिति कैसी रह रही है?"
      },
      {
        speaker: "Mrs. Deshmukh",
        avatar: "👩‍💼",
        textEn: "The auditorium is nearly full. Over three hundred scholars and researchers have gathered.",
        textHi: "सभागार लगभग पूरा भर चुका है। तीन सौ से अधिक विद्वान और शोधकर्ता एकत्रित हो चुके हैं।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "What an encouraging turnout for an evening session!",
        textHi: "शाम के सत्र के लिए यह कितनी उत्साहजनक उपस्थिति है!"
      },
      {
        speaker: "Mrs. Deshmukh",
        avatar: "👩‍💼",
        textEn: "Everyone is eager to hear your keynote address on renewable energy.",
        textHi: "हर कोई नवीकरणीय ऊर्जा पर आपका मुख्य भाषण सुनने के लिए उत्सुक है।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "I am looking forward to delivering it. Where is the speaker lounge located?",
        textHi: "मैं इसे प्रस्तुत करने के लिए तत्पर हूँ। वक्ता लाउंज कहाँ स्थित है?"
      },
      {
        speaker: "Mrs. Deshmukh",
        avatar: "👩‍💼",
        textEn: "It is located just past the main foyer, on your left.",
        textHi: "यह मुख्य लॉबी के ठीक आगे, आपकी बाईं ओर स्थित है।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Thank you. Has Professor Banerjee arrived yet?",
        textHi: "धन्यवाद। क्या प्रोफेसर बनर्जी अब तक आ चुके हैं?"
      },
      {
        speaker: "Mrs. Deshmukh",
        avatar: "👩‍💼",
        textEn: "Yes, Professor Banerjee arrived around six fifteen and is waiting in the lounge.",
        textHi: "जी हाँ, प्रोफेसर बनर्जी लगभग सवा छह बजे आ गए थे और लाउंज में प्रतीक्षा कर रहे हैं।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Wonderful. I shall join him immediately to coordinate our panel topics.",
        textHi: "शानदार। मैं हमारे पैनल विषयों पर समन्वय करने के लिए तुरंत उनके साथ जुड़ता हूँ।"
      },
      {
        speaker: "Mrs. Deshmukh",
        avatar: "👩‍💼",
        textEn: "Please let me know if you require any refreshments before the session commences.",
        textHi: "सत्र शुरू होने से पहले यदि आपको किसी जलपान की आवश्यकता हो तो कृपया मुझे बताएं।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "A glass of warm water would be perfect, Mrs. Deshmukh.",
        textHi: "एक गिलास गुनगुना पानी बहुत रहेगा, श्रीमती देशमुख।"
      },
      {
        speaker: "Mrs. Deshmukh",
        avatar: "👩‍💼",
        textEn: "I will have it brought to your table right away.",
        textHi: "मैं इसे तुरंत आपकी मेज पर भिजवाती हूँ।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Thank you for your gracious hospitality this evening.",
        textHi: "आज शाम आपके इस आत्मीय आतिथ्य के लिए बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Mrs. Deshmukh",
        avatar: "👩‍💼",
        textEn: "It is our absolute pleasure, Dr. Sen. Have an inspiring evening on stage.",
        textHi: "यह हमारे लिए परम सौभाग्य की बात है, डॉ. सेन। मंच पर आपकी शाम अत्यंत प्रेरणादायी रहे।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Thank you very much. I shall see you on the podium.",
        textHi: "बहुत-बहुत धन्यवाद। मैं आपसे मंच पर मिलता हूँ।"
      },
      {
        speaker: "Mrs. Deshmukh",
        avatar: "👩‍💼",
        textEn: "We look forward to it, Doctor. Best of luck!",
        textHi: "हम इसकी प्रतीक्षा कर रहे हैं, डॉक्टर। हार्दिक शुभकामनाएँ!"
      }
    ]
  },
  {
    id: "d01_sc05",
    title: "Late Night Dinner Farewell & Parting Expressions",
    titleHi: "देर रात रात्रिभोज के बाद विदाई शिष्टाचार",
    context: "At 10:30 PM, colleagues Priya and Rahul exit a restaurant after a celebratory team dinner and bid each other farewell.",
    situation: "Practicing night departure formulas ('Good night', 'Safe journey', 'Take care', 'See you tomorrow').",
    characters: ["Rahul", "Priya"],
    turns: [
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "What a delightful dinner that was, Priya! The food was exceptional.",
        textHi: "प्रिया, वह कितना आनंददायक रात्रिभोज था! भोजन असाधारण रूप से स्वादिष्ट था।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "It truly was, Rahul. Celebrating our product launch together was a memorable experience.",
        textHi: "सचमुच राहुल। हमारे उत्पाद लॉन्च का एक साथ जश्न मनाना एक यादगार अनुभव था।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "It is already ten thirty at night. Time flew by so quickly!",
        textHi: "रात के साढ़े दस बज चुके हैं। समय कितनी जल्दी बीत गया!"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "Indeed it did. How are you travelling home tonight?",
        textHi: "बिल्कुल। आज रात आप घर कैसे जा रहे हैं?"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "My cab has just arrived near the entrance. Are you driving yourself?",
        textHi: "मेरी कैब अभी प्रवेश द्वार के पास आ गई है। क्या आप खुद गाड़ी चलाकर जा रही हैं?"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "No, my brother is picking me up. He should be here in two minutes.",
        textHi: "नहीं, मेरे भाई मुझे लेने आ रहे हैं। उन्हें दो मिनट में यहाँ होना चाहिए।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "That is great. In that case, I will wait with you until your car arrives.",
        textHi: "यह बहुत अच्छी बात है। ऐसी स्थिति में, जब तक आपकी कार नहीं आती, मैं आपके साथ रुकता हूँ।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "That is very considerate of you, Rahul, but please don't let your cab wait. The driver is already outside.",
        textHi: "यह आपकी बहुत भलमनसाहत है, राहुल, लेकिन कृपया अपनी कैब को इंतज़ार न करने दें। ड्राइवर पहले से बाहर खड़ा है।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Are you sure you will be fine waiting here under the porch?",
        textHi: "क्या आप आश्वस्त हैं कि आप यहाँ पोर्च के नीचे सुरक्षित प्रतीक्षा कर लेंगी?"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "Yes, completely! The security guards are right here, and I can already see my brother's car approaching.",
        textHi: "जी हाँ, बिल्कुल! सुरक्षा गार्ड यहीं मौजूद हैं, और मैं अपने भाई की कार को आते हुए देख सकती हूँ।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Wonderful! In that case, I shall head home now.",
        textHi: "शानदार! तो फिर मैं अब घर के लिए निकलता हूँ।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "Have a safe journey home, Rahul!",
        textHi: "घर के लिए आपकी यात्रा सुरक्षित और सुखद रहे, राहुल!"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Thank you, Priya. Please message the team group once you reach home safely.",
        textHi: "धन्यवाद, प्रिया। जब आप सुरक्षित घर पहुँच जाएँ तो कृपया टीम ग्रुप में संदेश भेज दीजिएगा।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "I will certainly do that. Will you be in the office tomorrow morning?",
        textHi: "मैं अवश्य ऐसा करूँगी। क्या आप कल सुबह कार्यालय में उपस्थित रहेंगे?"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Yes, I will be at my desk by nine thirty sharp.",
        textHi: "जी हाँ, मैं ठीक साढ़े नौ बजे तक अपनी डेस्क पर मौजूद रहूँगा।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "Splendid. We will continue our sprint planning then.",
        textHi: "बहुत बढ़िया। फिर हम अपनी स्प्रिंट योजना जारी रखेंगे।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Looking forward to it. Good night, Priya! Sleep well and get some rest.",
        textHi: "मैं इसकी प्रतीक्षा करूँगा। शुभ रात्रि, प्रिया! अच्छी नींद लें और विश्राम करें।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "Good night, Rahul! Take care and see you tomorrow morning.",
        textHi: "शुभ रात्रि, राहुल! अपना ध्यान रखें और कल सुबह मिलते हैं।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "See you tomorrow. Goodbye!",
        textHi: "कल मिलते हैं। अलविदा!"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "Goodbye!",
        textHi: "अलविदा!"
      }
    ]
  },
  {
    id: "d01_sc06",
    title: "Morning Encounter at an Innovation Co-Working Hub",
    titleHi: "इनोवेशन को-वर्किंग हब में सुबह की दोस्ताना मुलाकात",
    context: "At 9:15 AM, freelance designer Tanya and app developer Sameer meet at their shared desk in a tech hub.",
    situation: "Friendly informal morning greetings, inquiry into wellbeing, and positive daily salutations.",
    characters: ["Sameer", "Tanya"],
    turns: [
      {
        speaker: "Sameer",
        avatar: "👨‍💻",
        textEn: "Good morning, Tanya! How are you doing this morning?",
        textHi: "शुभ प्रभात, तान्या! आज सुबह आप कैसी हैं?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🎨",
        textEn: "Good morning, Sameer! I am doing wonderful, thanks. How is your morning going?",
        textHi: "शुभ प्रभात, समीर! मैं बहुत अच्छी हूँ, धन्यवाद। आपकी सुबह कैसी चल रही है?"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💻",
        textEn: "Very energetic so far! I managed to beat the morning traffic and arrived twenty minutes early.",
        textHi: "अब तक बहुत ऊर्जावान! मैं सुबह के ट्रैफिक से बच निकला और बीस मिनट पहले पहुँच गया।"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🎨",
        textEn: "That is always a victory in this city! Did you grab some coffee from the pantry?",
        textHi: "इस शहर में यह हमेशा एक बड़ी जीत है! क्या आपने पैंट्री से कॉफी ली?"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💻",
        textEn: "Yes, I just brewed a fresh espresso. Would you like me to pour you a cup?",
        textHi: "जी हाँ, मैंने अभी ताजा एस्प्रेसो बनाई है। क्या आप चाहेंगी कि मैं आपके लिए भी एक कप बना दूँ?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🎨",
        textEn: "That would be very kind of you, Sameer. Thank you!",
        textHi: "यह आपकी बहुत बड़ी कृपा होगी, समीर। धन्यवाद!"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💻",
        textEn: "Here you go, hot and fresh. How are your new brand designs progressing?",
        textHi: "यह लीजिए, गरमा-गरम और ताज़ा। आपके नए ब्रांड डिजाइन कैसे आगे बढ़ रहे हैं?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🎨",
        textEn: "They are coming along very nicely. I have a client presentation scheduled for eleven o'clock.",
        textHi: "वे बहुत अच्छे से तैयार हो रहे हैं। ग्यारह बजे मेरा एक क्लाइंट प्रेजेंटेशन निर्धारित है।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💻",
        textEn: "I wish you the very best for the pitch! I am confident they will love your color concepts.",
        textHi: "प्रस्तुतीकरण के लिए मेरी हार्दिक शुभकामनाएँ! मुझे पूरा विश्वास है कि उन्हें आपकी रंग योजनाएँ बहुत पसंद आएंगी।"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🎨",
        textEn: "Thank you for the warm encouragement! What is on your agenda for this morning?",
        textHi: "इस आत्मीय प्रोत्साहन के लिए धन्यवाद! आज सुबह आपकी कार्यसूची में क्या है?"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💻",
        textEn: "I have a sprint standup meeting in fifteen minutes with our mobile development team.",
        textHi: "पंद्रह मिनट में हमारी मोबाइल विकास टीम के साथ मेरी स्प्रिंट स्टैंडअप बैठक है।"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🎨",
        textEn: "Is the team connecting from multiple cities today?",
        textHi: "क्या आज टीम कई अलग-अलग शहरों से जुड़ रही है?"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💻",
        textEn: "Yes, our lead architect is joining from Hyderabad and our product manager is based in Pune.",
        textHi: "जी हाँ, हमारे मुख्य वास्तुकार हैदराबाद से जुड़ रहे हैं और हमारे उत्पाद प्रबंधक पुणे में स्थित हैं।"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🎨",
        textEn: "It is wonderful how seamless remote collaboration has become.",
        textHi: "यह कितना अद्भुत है कि दूरस्थ सहयोग कितना सहज हो गया है।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💻",
        textEn: "Indeed it is. Shall we have lunch together around one o'clock in the rooftop cafeteria?",
        textHi: "सचमुच। क्या हम दोपहर लगभग एक बजे रूफटॉप कैफेटेरिया में एक साथ लंच करें?"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🎨",
        textEn: "That sounds like a great plan. I will meet you near the elevator lobby at one.",
        textHi: "यह बहुत अच्छी योजना लग रही है। मैं एक बजे लिफ्ट लॉबी के पास आपसे मिलूँगी।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💻",
        textEn: "Perfect. Have a productive and successful morning presentation, Tanya!",
        textHi: "उत्तम। तान्या, आपका सुबह का प्रस्तुतीकरण सफल और फलदायी रहे!"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🎨",
        textEn: "Thank you, Sameer! Have a great sprint meeting yourself.",
        textHi: "धन्यवाद, समीर! आपकी भी स्प्रिंट बैठक बहुत अच्छी रहे।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💻",
        textEn: "Thank you! Catch you later!",
        textHi: "धन्यवाद! बाद में मिलते हैं!"
      },
      {
        speaker: "Tanya",
        avatar: "👩‍🎨",
        textEn: "See you soon! Take care.",
        textHi: "जल्द मिलते हैं! अपना ध्यान रखें।"
      }
    ]
  },
  {
    id: "d01_sc07",
    title: "Specialist Clinic: Professional Titles & Afternoon Salutations",
    titleHi: "विशेषज्ञ क्लिनिक: पेशेवर उपाधियाँ और दोपहर का अभिवादन",
    context: "At 3:45 PM, medical representative Ms. Iyer visits Senior Cardiologist Dr. Varma at City Care Hospital.",
    situation: "Observing strict title honorifics (Dr. Varma, Ms. Iyer), afternoon salutations, and professional courtesies.",
    characters: ["Dr. Varma", "Ms. Iyer"],
    turns: [
      {
        speaker: "Dr. Varma",
        avatar: "👨‍⚕️",
        textEn: "Good afternoon, Ms. Iyer. Please come in.",
        textHi: "शुभ दोपहर, सुश्री अय्यर। कृपया अंदर आएं।"
      },
      {
        speaker: "Ms. Iyer",
        avatar: "👩‍⚕️",
        textEn: "Good afternoon, Dr. Varma. Thank you for granting me a few minutes of your valuable time.",
        textHi: "शुभ दोपहर, डॉ. वर्मा। अपने बहुमूल्य समय में से मुझे कुछ मिनट देने के लिए आपका धन्यवाद।"
      },
      {
        speaker: "Dr. Varma",
        avatar: "👨‍⚕️",
        textEn: "You are welcome. How has your afternoon been so far?",
        textHi: "आपका स्वागत है। अब तक आपकी दोपहर कैसी रही है?"
      },
      {
        speaker: "Ms. Iyer",
        avatar: "👩‍⚕️",
        textEn: "It has been very busy yet fulfilling, Doctor. How is the outpatient department today?",
        textHi: "यह बहुत व्यस्त लेकिन संतोषजनक रही है, डॉक्टर। आज ओपीडी विभाग कैसा चल रहा है?"
      },
      {
        speaker: "Dr. Varma",
        avatar: "👨‍⚕️",
        textEn: "We had a heavy influx of patients this morning, but the afternoon schedule is relatively steady.",
        textHi: "आज सुबह मरीजों की भारी भीड़ थी, लेकिन दोपहर का कार्यक्रम अपेक्षाकृत स्थिर है।"
      },
      {
        speaker: "Ms. Iyer",
        avatar: "👩‍⚕️",
        textEn: "I am glad to hear that. I am here to share the clinical trial findings for our new cardiovascular therapeutic.",
        textHi: "यह सुनकर मुझे खुशी हुई। मैं हमारे नए हृदय रोग संबंधी उपचार के क्लिनिकल परीक्षण के परिणाम साझा करने आई हूँ।"
      },
      {
        speaker: "Dr. Varma",
        avatar: "👨‍⚕️",
        textEn: "Excellent. Please place the dossier on my desk.",
        textHi: "बहुत अच्छा। कृपया फाइल मेरी मेज पर रख दें।"
      },
      {
        speaker: "Ms. Iyer",
        avatar: "👩‍⚕️",
        textEn: "Here is the complete report, Dr. Varma, along with the peer-reviewed research papers.",
        textHi: "यह रही पूरी रिपोर्ट, डॉ. वर्मा, साथ में सहकर्मी-समीक्षित शोध पत्र भी हैं।"
      },
      {
        speaker: "Dr. Varma",
        avatar: "👨‍⚕️",
        textEn: "Thank you, Ms. Iyer. I will review these clinical parameters tonight after my rounds.",
        textHi: "धन्यवाद, सुश्री अय्यर। मैं आज रात अपने राउंड के बाद इन नैदानिक मापदंडों की समीक्षा करूँगा।"
      },
      {
        speaker: "Ms. Iyer",
        avatar: "👩‍⚕️",
        textEn: "We would be honored to receive your expert feedback next week.",
        textHi: "अगले सप्ताह आपकी विशेषज्ञ प्रतिक्रिया प्राप्त करना हमारे लिए सम्मान की बात होगी।"
      },
      {
        speaker: "Dr. Varma",
        avatar: "👨‍⚕️",
        textEn: "I will certainly provide my assessment by Tuesday afternoon.",
        textHi: "मैं निश्चित रूप से मंगलवार दोपहर तक अपना मूल्यांकन प्रदान कर दूंगा।"
      },
      {
        speaker: "Ms. Iyer",
        avatar: "👩‍⚕️",
        textEn: "Will you be attending the annual medical conference in Mumbai next month, Dr. Varma?",
        textHi: "डॉ. वर्मा, क्या आप अगले महीने मुंबई में होने वाले वार्षिक चिकित्सा सम्मेलन में भाग लेंगे?"
      },
      {
        speaker: "Dr. Varma",
        avatar: "👨‍⚕️",
        textEn: "Yes, I will be chairing a symposium on preventive cardiology there.",
        textHi: "जी हाँ, मैं वहाँ प्रिवेंटिव कार्डियोलॉजी पर एक संगोष्ठी की अध्यक्षता करूँगा।"
      },
      {
        speaker: "Ms. Iyer",
        avatar: "👩‍⚕️",
        textEn: "That is wonderful. Our research team will look forward to hearing your keynote.",
        textHi: "यह अत्यंत शानदार है। हमारी शोध टीम आपका मुख्य व्याख्यान सुनने के लिए उत्सुक रहेगी।"
      },
      {
        speaker: "Dr. Varma",
        avatar: "👨‍⚕️",
        textEn: "Thank you, Ms. Iyer. I appreciate your dedication to clinical research.",
        textHi: "धन्यवाद, सुश्री अय्यर। क्लिनिकल अनुसंधान के प्रति आपके समर्पण की मैं सराहना करता हूँ।"
      },
      {
        speaker: "Ms. Iyer",
        avatar: "👩‍⚕️",
        textEn: "Thank you for your kind encouragement, Doctor. I will not take any more of your busy afternoon.",
        textHi: "आपके इस स्नेहपूर्ण प्रोत्साहन के लिए धन्यवाद, डॉक्टर। मैं आपकी व्यस्त दोपहर का और अधिक समय नहीं लूँगी।"
      },
      {
        speaker: "Dr. Varma",
        avatar: "👨‍⚕️",
        textEn: "Have a pleasant evening ahead, Ms. Iyer.",
        textHi: "आपकी आगे की शाम सुखद रहे, सुश्री अय्यर।"
      },
      {
        speaker: "Ms. Iyer",
        avatar: "👩‍⚕️",
        textEn: "Thank you very much, Doctor. Have a restful evening, and take care.",
        textHi: "बहुत-बहुत धन्यवाद, डॉक्टर। आपकी शाम शांतिपूर्ण रहे, और अपना ध्यान रखें।"
      },
      {
        speaker: "Dr. Varma",
        avatar: "👨‍⚕️",
        textEn: "Goodbye, Ms. Iyer.",
        textHi: "अलविदा, सुश्री अय्यर।"
      },
      {
        speaker: "Ms. Iyer",
        avatar: "👩‍⚕️",
        textEn: "Goodbye, Dr. Varma.",
        textHi: "अलविदा, डॉ. वर्मा।"
      }
    ]
  },
  {
    id: "d01_sc08",
    title: "Friday Evening Office Departure & Weekend Wishes",
    titleHi: "शुक्रवार शाम को दफ्तर से विदाई और सप्ताहांत की शुभकामनाएँ",
    context: "At 5:30 PM on Friday, colleagues Deepak and Meera pack their laptops and exchange weekend parting salutations.",
    situation: "Mastering formal and informal parting phrases for the end of the workweek ('Have a great weekend', 'Take care').",
    characters: ["Deepak", "Meera"],
    turns: [
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Good evening, Meera! Are you wrapping up for the weekend?",
        textHi: "शुभ संध्या, मीरा! क्या आप सप्ताहांत के लिए काम समेट रही हैं?"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Good evening, Deepak! Yes, I just submitted the weekly analytics report to the director.",
        textHi: "शुभ संध्या, दीपक! जी हाँ, मैंने अभी-अभी निदेशक को साप्ताहिक विश्लेषण रिपोर्ट जमा की है।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "That must be a big relief. It was quite an intense sprint this week.",
        textHi: "यह बहुत बड़ी राहत की बात होगी। इस सप्ताह का कार्य काफी गहन और व्यस्त था।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "It truly was! Everyone worked exceptionally hard to meet the product launch deadline.",
        textHi: "सचमुच! उत्पाद लॉन्च की समय-सीमा को पूरा करने के लिए सभी ने असाधारण रूप से कड़ी मेहनत की।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Indeed. Do you have any special plans for the upcoming weekend?",
        textHi: "बिल्कुल। क्या आने वाले सप्ताहांत के लिए आपकी कोई विशेष योजना है?"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "I am taking a short road trip to the hills with my family to enjoy some fresh mountain air.",
        textHi: "मैं पहाड़ों की ताज़ा हवा का आनंद लेने के लिए अपने परिवार के साथ पहाड़ियों की एक छोटी यात्रा पर जा रही हूँ।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "How wonderful! That sounds like the perfect way to unwind after a demanding week.",
        textHi: "कितना शानदार! एक व्यस्त सप्ताह के बाद तनावमुक्त होने का यह सबसे उत्तम तरीका लगता है।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Thank you! What about you, Deepak? What are your plans?",
        textHi: "धन्यवाद! आपके बारे में क्या, दीपक? आपकी क्या योजनाएँ हैं?"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "I plan to relax at home, read a novel, and catch up on some rest.",
        textHi: "मेरी योजना घर पर आराम करने, एक उपन्यास पढ़ने और थोड़ी नींद पूरी करने की है।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "A restful weekend at home is always rejuvenating.",
        textHi: "घर पर शांति से बिताया गया सप्ताहांत हमेशा नई ऊर्जा भर देता है।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Most definitely. Well, the clock shows five forty-five—time to shut down the workstation.",
        textHi: "बिल्कुल सही। खैर, घड़ी में पौने छह बज रहे हैं—वर्कस्टेशन बंद करने का समय हो गया है।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Have a wonderful, peaceful weekend, Deepak!",
        textHi: "दीपक, आपका सप्ताहांत बहुत ही शानदार और शांतिपूर्ण रहे!"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Thank you, Meera! Have a fantastic journey to the hills and a safe return.",
        textHi: "धन्यवाद, मीरा! आपकी पहाड़ों की यात्रा शानदार रहे और आप सुरक्षित वापस लौटें।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "I appreciate your kind wishes. See you on Monday morning!",
        textHi: "मैं आपकी शुभकामनाओं की सराहना करती हूँ। सोमवार सुबह मिलते हैं!"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "See you on Monday! Goodbye and take care.",
        textHi: "सोमवार को मिलते हैं! अलविदा और अपना ध्यान रखें।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Goodbye, Deepak!",
        textHi: "अलविदा, दीपक!"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Safe travels!",
        textHi: "आपकी यात्रा सुरक्षित रहे!"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Thank you, bye!",
        textHi: "धन्यवाद, बाय!"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Bye!",
        textHi: "बाय!"
      },
      {
        speaker: "Meera",
        avatar: "👩‍💼",
        textEn: "Take care!",
        textHi: "अपना ख्याल रखें!"
      }
    ]
  },
  {
    id: "d01_sc09",
    title: "Luxury Hotel Front Desk: Evening Welcome & Departure Etiquette",
    titleHi: "लक्ज़री होटल का स्वागत कक्ष: शाम का स्वागत और विदाई शिष्टाचार",
    context: "At 7:30 PM, international business traveler Mr. Reynolds arrives at The Grand Orchid Hotel and is greeted by Front Desk Executive Mr. Nair.",
    situation: "Mastering formal evening greetings, welcoming language, and late evening courtesy formulas.",
    characters: ["Mr. Nair", "Mr. Reynolds"],
    turns: [
      {
        speaker: "Mr. Nair",
        avatar: "👨‍💼",
        textEn: "Good evening, Sir! Welcome to The Grand Orchid Hotel.",
        textHi: "शुभ संध्या, महोदय! द ग्रैंड ऑर्किड होटल में आपका हार्दिक स्वागत है।"
      },
      {
        speaker: "Mr. Reynolds",
        avatar: "👨‍💼",
        textEn: "Good evening. Thank you very much. I have a reservation under the name Arthur Reynolds.",
        textHi: "शुभ संध्या। बहुत-बहुत धन्यवाद। आर्थर रेनॉल्ड्स के नाम पर मेरी एक बुकिंग है।"
      },
      {
        speaker: "Mr. Nair",
        avatar: "👨‍💼",
        textEn: "A warm welcome to you, Mr. Reynolds. It is an absolute pleasure to have you staying with us.",
        textHi: "मिस्टर रेनॉल्ड्स, आपका हार्दिक स्वागत है। हमारे साथ आपका ठहरना हमारे लिए परम हर्ष का विषय है।"
      },
      {
        speaker: "Mr. Reynolds",
        avatar: "👨‍💼",
        textEn: "Thank you. It has been a long flight from Singapore, so I am eager to get some rest.",
        textHi: "धन्यवाद। सिंगापुर से एक लंबी उड़ान रही, इसलिए मैं थोड़ा आराम करने के लिए उत्सुक हूँ।"
      },
      {
        speaker: "Mr. Nair",
        avatar: "👨‍💼",
        textEn: "We understand completely, Sir. I will expedite your check-in right away.",
        textHi: "हम पूरी तरह समझते हैं, महोदय। मैं तुरंत आपके चेक-इन की प्रक्रिया पूरी करता हूँ।"
      },
      {
        speaker: "Mr. Reynolds",
        avatar: "👨‍💼",
        textEn: "I appreciate your efficiency, Mr. Nair.",
        textHi: "मिस्टर नायर, मैं आपकी कार्यकुशलता की सराहना करता हूँ।"
      },
      {
        speaker: "Mr. Nair",
        avatar: "👨‍💼",
        textEn: "Here is your key card for the Executive Suite on the fourteenth floor. Our bellhop will assist with your luggage.",
        textHi: "यह रही चौदहवीं मंजिल पर आपके एग्जीक्यूटिव सुइट की चाबी। हमारे सहायक आपके सामान में आपकी मदद करेंगे।"
      },
      {
        speaker: "Mr. Reynolds",
        avatar: "👨‍💼",
        textEn: "Excellent. Is the rooftop restaurant open for dinner this evening?",
        textHi: "बहुत बढ़िया। क्या आज शाम छत पर बना रेस्तरां रात्रिभोज के लिए खुला है?"
      },
      {
        speaker: "Mr. Nair",
        avatar: "👨‍💼",
        textEn: "Yes, Sir. Dinner is served until eleven o'clock tonight, or you may order round-the-clock room service.",
        textHi: "जी हाँ, महोदय। रात्रिभोज आज रात ग्यारह बजे तक परोसा जाता है, या आप 24 घंटे चलने वाली रूम सर्विस से भी ऑर्डर कर सकते हैं।"
      },
      {
        speaker: "Mr. Reynolds",
        avatar: "👨‍💼",
        textEn: "Room service sounds ideal for tonight. Could you please schedule a wake-up call for seven tomorrow morning?",
        textHi: "आज रात के लिए रूम सर्विस सबसे उत्तम रहेगी। क्या आप कल सुबह सात बजे के लिए वेक-अप कॉल निर्धारित कर सकते हैं?"
      },
      {
        speaker: "Mr. Nair",
        avatar: "👨‍💼",
        textEn: "Certainly, Mr. Reynolds. A wake-up call is logged for precisely 7:00 AM tomorrow.",
        textHi: "निश्चय ही, मिस्टर रेनॉल्ड्स। कल सुबह ठीक 7:00 बजे के लिए वेक-अप कॉल दर्ज कर दी गई है।"
      },
      {
        speaker: "Mr. Reynolds",
        avatar: "👨‍💼",
        textEn: "Is breakfast included in the morning package?",
        textHi: "क्या सुबह के पैकेज में नाश्ता शामिल है?"
      },
      {
        speaker: "Mr. Nair",
        avatar: "👨‍💼",
        textEn: "Yes, Sir. The international breakfast buffet is open from six thirty to ten thirty in the Lotus Dining Hall.",
        textHi: "जी हाँ, महोदय। लोटस डाइनिंग हॉल में सुबह साढ़े छह से साढ़े दस बजे तक अंतरराष्ट्रीय बुफे नाश्ता उपलब्ध है।"
      },
      {
        speaker: "Mr. Reynolds",
        avatar: "👨‍💼",
        textEn: "That is splendid. Thank you for the detailed information and seamless assistance.",
        textHi: "यह बहुत बढ़िया है। विस्तृत जानकारी और सहज सहायता के लिए धन्यवाद।"
      },
      {
        speaker: "Mr. Nair",
        avatar: "👨‍💼",
        textEn: "It is our genuine pleasure, Sir. If you need anything during the night, simply press zero on your suite telephone.",
        textHi: "यह हमारे लिए अत्यंत खुशी की बात है, महोदय। यदि आपको रात में किसी भी चीज़ की आवश्यकता हो, तो बस अपने कमरे के टेलीफोन पर शून्य दबाएं।"
      },
      {
        speaker: "Mr. Reynolds",
        avatar: "👨‍💼",
        textEn: "I will keep that in mind. Thank you, Mr. Nair. Good night.",
        textHi: "मैं इसे ध्यान में रखूँगा। धन्यवाद, मिस्टर नायर। शुभ रात्रि।"
      },
      {
        speaker: "Mr. Nair",
        avatar: "👨‍💼",
        textEn: "Good night, Mr. Reynolds. Sleep well and have a restful night.",
        textHi: "शुभ रात्रि, मिस्टर रेनॉल्ड्स। सुखद निद्रा लें और आपकी रात शांतिपूर्ण रहे।"
      },
      {
        speaker: "Mr. Reynolds",
        avatar: "👨‍💼",
        textEn: "Good night.",
        textHi: "शुभ रात्रि।"
      },
      {
        speaker: "Mr. Nair",
        avatar: "👨‍💼",
        textEn: "Have a wonderful stay, Sir.",
        textHi: "आपका प्रवास सुखद रहे, महोदय।"
      },
      {
        speaker: "Mr. Reynolds",
        avatar: "👨‍💼",
        textEn: "Thank you. Goodbye.",
        textHi: "धन्यवाद। अलविदा।"
      }
    ]
  },
  {
    id: "d01_sc10",
    title: "Morning Walk in the Community Park",
    titleHi: "सामुदायिक पार्क में सुबह की सैर और अभिवादन",
    context: "At 6:30 AM, neighbors Mr. Joshi and Mrs. Rao meet along the jogging track during their morning brisk walk.",
    situation: "Practicing friendly neighborhood morning salutations, weather remarks, and uplifting morning partings.",
    characters: ["Mr. Joshi", "Mrs. Rao"],
    turns: [
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍🦳",
        textEn: "Good morning, Mrs. Rao! You are up very early for your morning walk today.",
        textHi: "शुभ प्रभात, श्रीमती राव! आज आप अपनी सुबह की सैर के लिए बहुत जल्दी उठ गई हैं।"
      },
      {
        speaker: "Mrs. Rao",
        avatar: "👩‍🦳",
        textEn: "Good morning, Mr. Joshi! Yes, I love walking before the sun gets too bright.",
        textHi: "शुभ प्रभात, मिस्टर जोशी! जी हाँ, धूप तेज होने से पहले मुझे टहलना बहुत पसंद है।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍🦳",
        textEn: "How are you feeling this morning? How is your knee pain?",
        textHi: "आज सुबह आप कैसा महसूस कर रही हैं? आपके घुटने का दर्द कैसा है?"
      },
      {
        speaker: "Mrs. Rao",
        avatar: "👩‍🦳",
        textEn: "I am feeling much better, thank you for asking. The morning physiotherapy is helping greatly.",
        textHi: "मैं काफी बेहतर महसूस कर रही हूँ, पूछने के लिए धन्यवाद। सुबह की फिजियोथेरेपी से बहुत राहत मिल रही है।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍🦳",
        textEn: "That is heartening to hear. How is your family in Bengaluru?",
        textHi: "यह सुनकर दिल को बहुत तसल्ली मिली। बेंगलुरु में आपका परिवार कैसा है?"
      },
      {
        speaker: "Mrs. Rao",
        avatar: "👩‍🦳",
        textEn: "They are all doing very well. My granddaughter started her university classes this week.",
        textHi: "वे सभी बहुत अच्छे हैं। मेरी पोती ने इस सप्ताह अपनी विश्वविद्यालय की कक्षाएं शुरू की हैं।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍🦳",
        textEn: "Please convey my warmest congratulations and best wishes to her.",
        textHi: "कृपया मेरी ओर से उसे हार्दिक बधाई और शुभकामनाएँ दीजिएगा।"
      },
      {
        speaker: "Mrs. Rao",
        avatar: "👩‍🦳",
        textEn: "I will certainly pass along your kind words. How is Mrs. Joshi doing?",
        textHi: "मैं आपके ये सुंदर शब्द उस तक अवश्य पहुँचाऊँगी। श्रीमती जोशी कैसी हैं?"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍🦳",
        textEn: "She is doing very well. She is attending the morning yoga class near the pavilion.",
        textHi: "वह बहुत अच्छी हैं। वे मंडप के पास सुबह की योग कक्षा में भाग ले रही हैं।"
      },
      {
        speaker: "Mrs. Rao",
        avatar: "👩‍🦳",
        textEn: "Please give her my warm regards when you meet her.",
        textHi: "जब आप उनसे मिलें तो कृपया उन्हें मेरा सादर प्रणाम दीजिएगा।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍🦳",
        textEn: "I will gladly do so. The morning air today is remarkably fresh and cool.",
        textHi: "मैं सहर्ष ऐसा करूँगा। आज सुबह की हवा असाधारण रूप से ताज़ा और ठंडी है।"
      },
      {
        speaker: "Mrs. Rao",
        avatar: "👩‍🦳",
        textEn: "It truly is. It makes the morning walk so refreshing.",
        textHi: "सचमुच। यह सुबह की सैर को बहुत तरोताजा कर देता है।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍🦳",
        textEn: "I have completed my three kilometers, so I will head back home now to prepare for my morning schedule.",
        textHi: "मैंने अपने तीन किलोमीटर पूरे कर लिए हैं, इसलिए अब मैं सुबह के काम की तैयारी के लिए घर लौटता हूँ।"
      },
      {
        speaker: "Mrs. Rao",
        avatar: "👩‍🦳",
        textEn: "I will do one more lap around the flower garden. Have a wonderful and healthy day ahead, Mr. Joshi!",
        textHi: "मैं फूलों के बगीचे का एक और चक्कर लगाऊँगी। मिस्टर जोशी, आपका आगे का दिन बहुत ही शानदार और स्वास्थ्यवर्धक रहे!"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍🦳",
        textEn: "Thank you, Mrs. Rao! Have a pleasant day, and take care of your health.",
        textHi: "धन्यवाद, श्रीमती राव! आपका दिन सुखद रहे, और अपने स्वास्थ्य का ध्यान रखें।"
      },
      {
        speaker: "Mrs. Rao",
        avatar: "👩‍🦳",
        textEn: "Thank you. See you tomorrow morning at the track!",
        textHi: "धन्यवाद। कल सुबह ट्रैक पर मिलते हैं!"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍🦳",
        textEn: "See you tomorrow! Goodbye for now.",
        textHi: "कल मिलते हैं! अभी के लिए अलविदा।"
      },
      {
        speaker: "Mrs. Rao",
        avatar: "👩‍🦳",
        textEn: "Goodbye, Mr. Joshi!",
        textHi: "अलविदा, मिस्टर जोशी!"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍🦳",
        textEn: "Have a great day!",
        textHi: "आपका दिन शुभ हो!"
      },
      {
        speaker: "Mrs. Rao",
        avatar: "👩‍🦳",
        textEn: "You too!",
        textHi: "आपको भी!"
      }
    ]
  }
];
