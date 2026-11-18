import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const day10Dialogues = [
  {
    id: "d10_sc01",
    title: "Diplomatic Gala Banquet: Stage 1 Comprehensive Synthesis",
    titleHi: "राजनयिक भव्य भोज: चरण 1 समग्र संश्लेषण",
    context: "Chief Protocol Ambassador Mehra welcomes Foreign Envoy Madam Dupont at a state banquet.",
    situation: "Synthesizing greetings, etiquette, reactions, imperatives, state of being (is/was/will be), demonstratives, existentials, and possession.",
    characters: ["Ambassador Mehra", "Madam Dupont"],
    turns: [
      {
        speaker: "Ambassador Mehra",
        avatar: "👨‍💼",
        textEn: "Good evening, Excellency! Welcome to Hyderabad House. It is a genuine honor to receive you tonight.",
        textHi: "शुभ संध्या, महामहिम! हैदराबाद हाउस में आपका स्वागत है। आज रात आपका स्वागत करना हमारे लिए वास्तविक सम्मान की बात है।"
      },
      {
        speaker: "Madam Dupont",
        avatar: "👩‍💼",
        textEn: "Good evening, Ambassador Mehra! Thank you for this splendid hospitality. This banquet hall is truly breathtaking!",
        textHi: "शुभ संध्या, राजदूत मेहरा! इस शानदार आतिथ्य के लिए धन्यवाद। यह बैंक्वेट हॉल वास्तव में मनमोहक है!"
      },
      {
        speaker: "Ambassador Mehra",
        avatar: "👨‍💼",
        textEn: "Please step this way. These delegates over here are from the bilateral trade council.",
        textHi: "कृपया इस तरफ आएं। यहाँ ये प्रतिनिधि द्विपक्षीय व्यापार परिषद से हैं।"
      },
      {
        speaker: "Madam Dupont",
        avatar: "👩‍💼",
        textEn: "Yesterday's summit discussions were productive, but tomorrow's signing ceremony will be the true historic breakthrough.",
        textHi: "कल की शिखर वार्ताएं उत्पादक थीं, लेकिन कल का हस्ताक्षर समारोह वास्तविक ऐतिहासिक सफलता होगी।"
      },
      {
        speaker: "Ambassador Mehra",
        avatar: "👨‍💼",
        textEn: "Indeed! Our nations have deep historical bonds, and both governments have shared democratic values.",
        textHi: "वास्तव में! हमारे देशों के गहरे ऐतिहासिक संबंध हैं, और दोनों सरकारों के साझा लोकतांत्रिक मूल्य हैं।"
      },
      {
        speaker: "Madam Dupont",
        avatar: "👩‍💼",
        textEn: "Is there a cultural music performance scheduled during the formal dinner?",
        textHi: "क्या औपचारिक रात्रिभोज के दौरान कोई सांस्कृतिक संगीत प्रस्तुति निर्धारित है?"
      },
      {
        speaker: "Ambassador Mehra",
        avatar: "👨‍💼",
        textEn: "Yes, there is a classical sitar and santoor recital by world-renowned maestros on that raised pavilion.",
        textHi: "जी हाँ, उस ऊंचे मंच पर विश्व प्रसिद्ध उस्तादों द्वारा शास्त्रीय सितार और संतूर वादन है।"
      },
      {
        speaker: "Madam Dupont",
        avatar: "👩‍💼",
        textEn: "How delightful! The acoustics in this historical courtyard are magnificent.",
        textHi: "कितना सुखद! इस ऐतिहासिक प्रांगण की ध्वनि व्यवस्था शानदार है।"
      },
      {
        speaker: "Ambassador Mehra",
        avatar: "👨‍💼",
        textEn: "Please have some of this spiced Kashmiri saffron tea; it was a favorite of royal guests in ancient times.",
        textHi: "कृपया इस सुगंधित कश्मीरी केसरिया चाय का आनंद लें; प्राचीन काल में यह शाही मेहमानों की पसंदीदा थी।"
      },
      {
        speaker: "Madam Dupont",
        avatar: "👩‍💼",
        textEn: "Thank you kindly! The aroma is exquisite. Do you have a copy of the joint press communique?",
        textHi: "आपका बहुत-बहुत धन्यवाद! सुगंध बहुत उत्तम है। क्या आपके पास संयुक्त प्रेस विज्ञप्ति की प्रति है?"
      },
      {
        speaker: "Ambassador Mehra",
        avatar: "👨‍💼",
        textEn: "Yes, I have the diplomatic briefing dossier in this leather folder right here.",
        textHi: "जी हाँ, मेरे पास यहाँ इस चमड़े के फोल्डर में राजनयिक ब्रीफिंग फाइल मौजूद है।"
      },
      {
        speaker: "Madam Dupont",
        avatar: "👩‍💼",
        textEn: "Those technological collaboration clauses will be transformative for our green energy sectors.",
        textHi: "वे तकनीकी सहयोग उपबंध हमारे हरित ऊर्जा क्षेत्रों के लिए परिवर्तनकारी होंगे।"
      },
      {
        speaker: "Ambassador Mehra",
        avatar: "👨‍💼",
        textEn: "Take your seat at the head table, Excellency. The Prime Minister will be here in two minutes.",
        textHi: "महामहिम, मुख्य मेज पर अपना स्थान ग्रहण करें। प्रधानमंत्री दो मिनट में यहाँ उपस्थित होंगे।"
      },
      {
        speaker: "Madam Dupont",
        avatar: "👩‍💼",
        textEn: "I will be delighted to greet him.",
        textHi: "उनका अभिवादन करते हुए मुझे बहुत प्रसन्नता होगी।"
      },
      {
        speaker: "Ambassador Mehra",
        avatar: "👨‍💼",
        textEn: "There are distinguished ambassadors from forty countries present tonight.",
        textHi: "आज रात चालीस देशों के प्रतिष्ठित राजदूत उपस्थित हैं।"
      },
      {
        speaker: "Madam Dupont",
        avatar: "👩‍💼",
        textEn: "Tonight is a glorious celebration of global diplomacy and friendship.",
        textHi: "आज की रात वैश्विक कूटनीति और मित्रता का एक शानदार उत्सव है।"
      },
      {
        speaker: "Ambassador Mehra",
        avatar: "👨‍💼",
        textEn: "May our bilateral partnership flourish forever!",
        textHi: "हमारी द्विपक्षीय साझेदारी हमेशा फले-फूले!"
      },
      {
        speaker: "Madam Dupont",
        avatar: "👩‍💼",
        textEn: "Cheers to our enduring alliance!",
        textHi: "हमारे स्थायी गठबंधन की जय हो!"
      },
      {
        speaker: "Ambassador Mehra",
        avatar: "👨‍💼",
        textEn: "Enjoy this memorable evening, Excellency.",
        textHi: "महामहिम, इस यादगार शाम का आनंद लें।"
      },
      {
        speaker: "Madam Dupont",
        avatar: "👩‍💼",
        textEn: "Thank you, Ambassador!",
        textHi: "धन्यवाद, राजदूत महोदय!"
      }
    ]
  },
  {
    id: "d10_sc02",
    title: "Aviation Operations Command: Weather Disruption & Air Traffic Recovery",
    titleHi: "विमानन संचालन कमान: मौसम की बाधा और हवाई यातायात की बहाली",
    context: "Airport Duty Director Capt. Roy and Senior Air Traffic Controller Neha manage flight recovery after a severe thunderstorm.",
    situation: "Synthesizing greetings, imperatives, state of being past/present/future, existentials, demonstratives, and possession.",
    characters: ["Capt. Roy", "Neha"],
    turns: [
      {
        speaker: "Capt. Roy",
        avatar: "👨‍✈️",
        textEn: "Neha, give me the immediate situational briefing! The thunderstorm was severe over the northern airspace an hour ago.",
        textHi: "नेहा, मुझे तुरंत स्थिति की ब्रीफिंग दें! एक घंटे पहले उत्तरी हवाई क्षेत्र में तूफान बहुत गंभीर था।"
      },
      {
        speaker: "Neha",
        avatar: "👩‍✈️",
        textEn: "Good evening, Captain! Yes, there were forty inbound diversions during the squall, but both active runways are open and operational now.",
        textHi: "शुभ संध्या, कैप्टन! जी हाँ, तूफान के दौरान चालीस विमानों का मार्ग बदला गया था, लेकिन अब दोनों सक्रिय रनवे खुले और चालू हैं।"
      },
      {
        speaker: "Capt. Roy",
        avatar: "👨‍✈️",
        textEn: "Look at that radar display on that primary console! Is there any residual wind shear along the approach corridor?",
        textHi: "उस मुख्य कंसोल पर उस रडार डिस्प्ले को देखें! क्या एप्रोच कॉरिडोर के साथ कोई अवशिष्ट हवा का दबाव (विंड शीयर) है?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍✈️",
        textEn: "No, the Doppler weather radar shows clear skies; the wind velocity is a calm eight knots from the southwest.",
        textHi: "नहीं, डॉपलर मौसम रडार साफ आसमान दिखा रहा है; हवा की गति दक्षिण-पश्चिम से शांत आठ समुद्री मील है।"
      },
      {
        speaker: "Capt. Roy",
        avatar: "👨‍✈️",
        textEn: "Prioritize emergency medical flights and international long-haul departures immediately!",
        textHi: "आपातकालीन चिकित्सा उड़ानों और अंतरराष्ट्रीय लंबी दूरी की प्रस्थान उड़ानों को तुरंत प्राथमिकता दें!"
      },
      {
        speaker: "Neha",
        avatar: "👩‍✈️",
        textEn: "Understood! Flight AI-101 has critical cargo, and Flight BA-142 has three hundred transit passengers; both will be cleared for takeoff in five minutes.",
        textHi: "समझ गई! उड़ान AI-101 में महत्वपूर्ण माल है, और BA-142 में तीन सौ पारगमन यात्री हैं; दोनों को पांच मिनट में उड़ान भरने की अनुमति दी जाएगी।"
      },
      {
        speaker: "Capt. Roy",
        avatar: "👨‍✈️",
        textEn: "What about passenger congestion inside Terminal 3? Do we have sufficient ground handling personnel?",
        textHi: "टर्मिनल 3 के अंदर यात्रियों की भीड़ के बारे में क्या? क्या हमारे पास पर्याप्त ग्राउंड हैंडलिंग कर्मचारी हैं?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍✈️",
        textEn: "Yes, there are fifty additional airline customer service agents at the boarding gates, and there is free drinking water and snacks distributed.",
        textHi: "जी हाँ, बोर्डिंग गेटों पर पचास अतिरिक्त एयरलाइन सेवा एजेंट हैं, और मुफ्त पीने का पानी और नाश्ता वितरित किया जा रहा है।"
      },
      {
        speaker: "Capt. Roy",
        avatar: "👨‍✈️",
        textEn: "This integrated response protocol was remarkably effective tonight.",
        textHi: "यह एकीकृत प्रतिक्रिया प्रोटोकॉल आज रात उल्लेखनीय रूप से प्रभावी रहा।"
      },
      {
        speaker: "Neha",
        avatar: "👩‍✈️",
        textEn: "All our air traffic teams have shown exceptional professionalism and calm under immense pressure.",
        textHi: "हमारे सभी हवाई यातायात दलों ने भारी दबाव में असाधारण व्यावसायिकता और शांति दिखाई है।"
      },
      {
        speaker: "Capt. Roy",
        avatar: "👨‍✈️",
        textEn: "How many flights will be on the tarmac by midnight?",
        textHi: "आधी रात तक टरमैक पर कितनी उड़ानें होंगी?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍✈️",
        textEn: "There will be seventy-two scheduled arrivals landed safely by twelve o'clock; the entire backlog will be cleared before dawn.",
        textHi: "रात बारह बजे तक बहत्तर निर्धारित उड़ानें सुरक्षित रूप से उतर जाएंगी; भोर से पहले पूरा बैकलॉग साफ हो जाएगा।"
      },
      {
        speaker: "Capt. Roy",
        avatar: "👨‍✈️",
        textEn: "Transmit this recovery schedule to the Ministry of Civil Aviation right now.",
        textHi: "इस बहाली कार्यक्रम को अभी नागरिक उड्डयन मंत्रालय को प्रेषित करें।"
      },
      {
        speaker: "Neha",
        avatar: "👩‍✈️",
        textEn: "Transmitting the electronic bulletin immediately, Captain.",
        textHi: "कैप्टन, तुरंत इलेक्ट्रॉनिक बुलेटिन भेज रही हूँ।"
      },
      {
        speaker: "Capt. Roy",
        avatar: "👨‍✈️",
        textEn: "Outstanding teamwork, Neha! You have my highest commendation.",
        textHi: "नेहा, बेहतरीन टीम वर्क! आप मेरी सर्वोच्च सराहना की पात्र हैं।"
      },
      {
        speaker: "Neha",
        avatar: "👩‍✈️",
        textEn: "Thank you, Sir! Aviation safety is our top priority.",
        textHi: "धन्यवाद, सर! विमानन सुरक्षा हमारी सर्वोच्च प्राथमिकता है।"
      },
      {
        speaker: "Capt. Roy",
        avatar: "👨‍✈️",
        textEn: "Keep up the vigilant monitoring throughout your watch.",
        textHi: "अपनी ड्यूटी के दौरान इसी तरह सतर्क निगरानी बनाए रखें।"
      },
      {
        speaker: "Neha",
        avatar: "👩‍✈️",
        textEn: "Always, Captain.",
        textHi: "हमेशा, कैप्टन।"
      },
      {
        speaker: "Capt. Roy",
        avatar: "👨‍✈️",
        textEn: "Have a safe shift!",
        textHi: "आपकी शिफ्ट सुरक्षित रहे!"
      },
      {
        speaker: "Neha",
        avatar: "👩‍✈️",
        textEn: "Thank you!",
        textHi: "धन्यवाद!"
      }
    ]
  },
  {
    id: "d10_sc03",
    title: "Trauma Center Emergency Response: Clinical Coordination",
    titleHi: "ट्रॉमा सेंटर आपातकालीन प्रतिक्रिया: नैदानिक समन्वय",
    context: "Emergency Chief Dr. Farooq and Head Nurse Mary coordinate critical care after a highway collision.",
    situation: "Synthesizing urgent imperatives, past/present/future states of being, existentials, demonstratives, and symptoms.",
    characters: ["Dr. Farooq", "Mary"],
    turns: [
      {
        speaker: "Dr. Farooq",
        avatar: "👨‍⚕️",
        textEn: "Mary, prepare Trauma Bays 1 and 2 immediately! The ambulance dispatch radio reported three multi-trauma victims from the expressway.",
        textHi: "मैरी, तुरंत ट्रॉमा बे 1 और 2 तैयार करें! एम्बुलेंस रेडियो ने एक्सप्रेसवे से तीन गंभीर घायल मरीजों की सूचना दी है।"
      },
      {
        speaker: "Mary",
        avatar: "👩‍⚕️",
        textEn: "Both resuscitation suites are fully ready, Doctor! There are blood bags on rapid infusion warmers, and the ventilators are calibrated.",
        textHi: "दोनों पुनर्जीवन कक्ष पूरी तरह तैयार हैं, डॉक्टर! रैपिड इन्फ्यूजन वार्मर पर ब्लड बैग हैं, और वेंटिलेटर कैलिब्रेट किए गए हैं।"
      },
      {
        speaker: "Dr. Farooq",
        avatar: "👨‍⚕️",
        textEn: "Good work! Check this patient on Stretcher Alpha right away. What vital signs does he have?",
        textHi: "शाबाश! स्ट्रेचर अल्फा पर इस मरीज की तुरंत जांच करें। उसके महत्वपूर्ण लक्षण (वाइटल्स) क्या हैं?"
      },
      {
        speaker: "Mary",
        avatar: "👩‍⚕️",
        textEn: "His pulse is 120 beats per minute, blood pressure is 90 over 60, and he has shallow respiration; he was conscious at the accident site.",
        textHi: "उसकी नब्ज 120 बीट्स प्रति मिनट है, बीपी 90/60 है, और सांस उथली है; दुर्घटना स्थल पर वह होश में था।"
      },
      {
        speaker: "Dr. Farooq",
        avatar: "👨‍⚕️",
        textEn: "Administer two liters of warm Ringer's lactate immediately and secure an advanced airway!",
        textHi: "तुरंत दो लीटर वार्म रिंगर्स लैक्टेट दें और उन्नत वायुमार्ग सुरक्षित करें!"
      },
      {
        speaker: "Mary",
        avatar: "👩‍⚕️",
        textEn: "On it! What about that female patient on Stretcher Beta? Does she have any severe orthopedic fractures?",
        textHi: "अभी करती हूँ! स्ट्रेचर बीटा पर उस महिला मरीज के बारे में क्या? क्या उसे कोई गंभीर हड्डी का फ्रैक्चर है?"
      },
      {
        speaker: "Dr. Farooq",
        avatar: "👨‍⚕️",
        textEn: "She has a compound femur fracture, but her neurological status is alert and her pupils are equally reactive.",
        textHi: "उसकी जांघ की हड्डी में खुला फ्रैक्चर है, लेकिन उसकी न्यूरोलॉजिकल स्थिति सतर्क है और पुतलियां सामान्य रूप से प्रतिक्रिया दे रही हैं।"
      },
      {
        speaker: "Mary",
        avatar: "👩‍⚕️",
        textEn: "Are there orthopedic surgeons on standby in Operation Theater 4?",
        textHi: "क्या ऑपरेशन थियेटर 4 में आर्थोपेडिक सर्जन स्टैंडबाय पर हैं?"
      },
      {
        speaker: "Dr. Farooq",
        avatar: "👨‍⚕️",
        textEn: "Yes, Dr. Malhotra and his surgical team are scrubbed in; she will be in surgery within twenty minutes.",
        textHi: "जी हाँ, डॉ. मल्होत्रा और उनकी सर्जिकल टीम तैयार है; बीस मिनट के भीतर उसकी सर्जरी शुरू हो जाएगी।"
      },
      {
        speaker: "Mary",
        avatar: "👩‍⚕️",
        textEn: "Those bedside FAST ultrasound scans show no free fluid in the abdominal cavity.",
        textHi: "बेडसाइड अल्ट्रासाउंड स्कैन पेट के हिस्से में कोई आंतरिक रक्तस्राव नहीं दिखा रहे हैं।"
      },
      {
        speaker: "Dr. Farooq",
        avatar: "👨‍⚕️",
        textEn: "That is a huge relief! His internal organs are intact.",
        textHi: "यह बहुत बड़ी राहत की बात है! उसके आंतरिक अंग सुरक्षित हैं।"
      },
      {
        speaker: "Mary",
        avatar: "👩‍⚕️",
        textEn: "His blood pressure is rising to 115 over 75 now.",
        textHi: "उसका रक्तचाप अब बढ़कर 115/75 हो रहा है।"
      },
      {
        speaker: "Dr. Farooq",
        avatar: "👨‍⚕️",
        textEn: "He will be stable by morning thanks to this rapid resuscitation.",
        textHi: "इस त्वरित उपचार की बदौलत सुबह तक उसकी हालत स्थिर हो जाएगी।"
      },
      {
        speaker: "Mary",
        avatar: "👩‍⚕️",
        textEn: "The patients' families are in the waiting lounge; do we have their emergency contact files?",
        textHi: "मरीजों के परिवार वेटिंग लाउंज में हैं; क्या हमारे पास उनकी आपातकालीन संपर्क फाइलें हैं?"
      },
      {
        speaker: "Dr. Farooq",
        avatar: "👨‍⚕️",
        textEn: "Yes, I have their medical consent forms right here on this clipboard. Please speak with them gently.",
        textHi: "जी हाँ, इस क्लिपबोर्ड पर मेरे पास उनके मेडिकल सहमति पत्र हैं। कृपया उनसे विनम्रतापूर्वक बात करें।"
      },
      {
        speaker: "Mary",
        avatar: "👩‍⚕️",
        textEn: "I will update them with compassionate reassurance.",
        textHi: "मैं उन्हें सहानुभूतिपूर्ण आश्वासन के साथ स्थिति की जानकारी दूँगी।"
      },
      {
        speaker: "Dr. Farooq",
        avatar: "👨‍⚕️",
        textEn: "Your clinical swiftness saved lives tonight, Mary.",
        textHi: "मैरी, आपकी त्वरित चिकित्सकीय सतर्कता ने आज रात कई जानें बचाईं।"
      },
      {
        speaker: "Mary",
        avatar: "👩‍⚕️",
        textEn: "Thank you, Dr. Farooq! It is our sacred duty.",
        textHi: "धन्यवाद, डॉ. फारूक! यह हमारा पावन कर्तव्य है।"
      },
      {
        speaker: "Dr. Farooq",
        avatar: "👨‍⚕️",
        textEn: "Let us monitor their telemetry closely.",
        textHi: "आइए उनकी टेलीमेट्री की बारीकी से निगरानी करें।"
      },
      {
        speaker: "Mary",
        avatar: "👩‍⚕️",
        textEn: "Monitoring now, Doctor.",
        textHi: "अभी निगरानी कर रही हूँ, डॉक्टर।"
      }
    ]
  },
  {
    id: "d10_sc04",
    title: "Global Climate Summit Plenary: Stage 1 Comprehensive Synthesis",
    titleHi: "वैश्विक जलवायु शिखर सम्मेलन: चरण 1 समग्र संश्लेषण",
    context: "Conference President Dr. Al-Mansoor and Youth Climate Envoy Tara conclude the final treaty session.",
    situation: "Synthesizing greetings, exclamations, state of being past/present/future, demonstratives, existentials, and possession.",
    characters: ["Dr. Al-Mansoor", "Tara"],
    turns: [
      {
        speaker: "Dr. Al-Mansoor",
        avatar: "👨‍💼",
        textEn: "Good afternoon, delegates! Welcome to the final plenary of COP-30. Today is a momentous turning point for planetary climate action.",
        textHi: "शुभ दोपहर, प्रतिनिधियों! कॉप-30 के अंतिम पूर्ण सत्र में आपका स्वागत है। आज का दिन पृथ्वी की जलवायु कार्रवाई के लिए एक महत्वपूर्ण मोड़ है।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🎓",
        textEn: "Good afternoon, Mr. President! What an exhilarating breakthrough! All one hundred and ninety-five member nations have signed the net-zero accord!",
        textHi: "शुभ दोपहर, मिस्टर प्रेसिडेंट! कितनी रोमांचक सफलता है! सभी 195 सदस्य देशों ने नेट-जीरो समझौते पर हस्ताक्षर किए हैं!"
      },
      {
        speaker: "Dr. Al-Mansoor",
        avatar: "👨‍💼",
        textEn: "Look at this final treaty document on this rostrum. This agreement has legally binding emission reduction targets for 2035.",
        textHi: "इस मंच पर इस अंतिम संधि दस्तावेज को देखें। इस समझौते में 2035 के लिए कानूनी रूप से बाध्यकारी उत्सर्जन कटौती लक्ष्य हैं।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🎓",
        textEn: "Last year's negotiations were fractious and tense, but this summit was cooperative, ambitious, and unified.",
        textHi: "पिछले साल की बातचीत विभाजित और तनावपूर्ण थी, लेकिन यह शिखर सम्मेलन सहयोगी, महत्वाकांक्षी और एकजुट रहा।"
      },
      {
        speaker: "Dr. Al-Mansoor",
        avatar: "👨‍💼",
        textEn: "Is there a dedicated climate loss-and-damage fund established for vulnerable island nations?",
        textHi: "क्या कमजोर द्वीप देशों के लिए एक समर्पित जलवायु हानि और क्षति कोष स्थापित किया गया है?"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🎓",
        textEn: "Yes, there is a one-hundred-billion-dollar annual fund, and there are immediate disaster response mechanisms in place.",
        textHi: "जी हाँ, एक सौ अरब डॉलर का वार्षिक कोष है, और तत्काल आपदा प्रतिक्रिया तंत्र मौजूद हैं।"
      },
      {
        speaker: "Dr. Al-Mansoor",
        avatar: "👨‍💼",
        textEn: "Those renewable energy subsidies on that schedule will accelerate global solar and wind deployments exponentially.",
        textHi: "उस कार्यक्रम में वे नवीकरणीय ऊर्जा सब्सिडी वैश्विक सौर और पवन ऊर्जा के विस्तार को तेजी से गति देंगी।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🎓",
        textEn: "Our planet will be cleaner, healthier, and safer for future generations.",
        textHi: "हमारा ग्रह भावी पीढ़ियों के लिए अधिक स्वच्छ, स्वस्थ और सुरक्षित होगा।"
      },
      {
        speaker: "Dr. Al-Mansoor",
        avatar: "👨‍💼",
        textEn: "The youth delegates had an inspiring moral presence throughout these two grueling weeks.",
        textHi: "इन दो कठिन हफ्तों के दौरान युवा प्रतिनिधियों की एक प्रेरणादायक और प्रभावशाली उपस्थिति थी।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🎓",
        textEn: "We have an unwavering responsibility to safeguard our living biosphere.",
        textHi: "हमारे जीवंत जीवमंडल की रक्षा करना हमारी अटूट जिम्मेदारी है।"
      },
      {
        speaker: "Dr. Al-Mansoor",
        avatar: "👨‍💼",
        textEn: "Please deliver the closing youth valedictory address before I gavel the formal adjournment.",
        textHi: "मेरे औपचारिक समापन की घोषणा करने से पहले कृपया विदाई युवा भाषण प्रस्तुत करें।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🎓",
        textEn: "I will be deeply honored to speak for millions of young people worldwide.",
        textHi: "दुनिया भर के लाखों युवाओं की ओर से बोलना मेरे लिए बहुत सम्मान की बात होगी।"
      },
      {
        speaker: "Dr. Al-Mansoor",
        avatar: "👨‍💼",
        textEn: "Step to the central podium, Tara. The whole world is listening.",
        textHi: "तारा, मुख्य मंच पर आएं। पूरी दुनिया सुन रही है।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🎓",
        textEn: "Thank you for your visionary leadership, Mr. President.",
        textHi: "मिस्टर प्रेसिडेंट, आपके दूरदर्शी नेतृत्व के लिए धन्यवाद।"
      },
      {
        speaker: "Dr. Al-Mansoor",
        avatar: "👨‍💼",
        textEn: "There is hope because of young leaders like you.",
        textHi: "आप जैसे युवा नेताओं के कारण ही उम्मीद की किरण है।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🎓",
        textEn: "Together, we have transformed words into concrete global action.",
        textHi: "एक साथ मिलकर, हमने शब्दों को ठोस वैश्विक कार्रवाई में बदल दिया है।"
      },
      {
        speaker: "Dr. Al-Mansoor",
        avatar: "👨‍💼",
        textEn: "History will remember this glorious summit.",
        textHi: "इतिहास इस शानदार शिखर सम्मेलन को हमेशा याद रखेगा।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🎓",
        textEn: "Let us build our sustainable future together!",
        textHi: "आइए मिलकर अपने सतत भविष्य का निर्माण करें!"
      },
      {
        speaker: "Dr. Al-Mansoor",
        avatar: "👨‍💼",
        textEn: "The stage is yours!",
        textHi: "मंच आपका है!"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🎓",
        textEn: "Thank you, Sir!",
        textHi: "धन्यवाद, सर!"
      }
    ]
  },
  {
    id: "d10_sc05",
    title: "Heritage Palace Hotel Wedding: Grand Event Operations",
    titleHi: "हेरिटेज पैलेस होटल विवाह: भव्य समारोह संचालन",
    context: "Event Director Raghu and Palace General Manager Gayatri coordinate a royal palace wedding reception.",
    situation: "Synthesizing polite greetings, imperatives, past/present/future states, existentials, demonstratives, and possession.",
    characters: ["Raghu", "Gayatri"],
    turns: [
      {
        speaker: "Raghu",
        avatar: "👨‍💼",
        textEn: "Namaste, Gayatri-ji! Good evening! Welcome to the royal courtyard. Is everything in place for tonight's grand wedding reception?",
        textHi: "नमस्ते, गायत्री जी! शुभ संध्या! शाही प्रांगण में आपका स्वागत है। क्या आज रात के भव्य विवाह समारोह के लिए सब कुछ तैयार है?"
      },
      {
        speaker: "Gayatri",
        avatar: "👩‍💼",
        textEn: "Namaste, Raghu! Good evening! Yes, all twelve palace gardens are illuminated with twenty thousand traditional oil lamps and fairy lights.",
        textHi: "नमस्ते, रघु! शुभ संध्या! जी हाँ, सभी बारह महल के बगीचे बीस हजार पारंपरिक दीयों और परियों की रोशनी से जगमगा रहे हैं।"
      },
      {
        speaker: "Raghu",
        avatar: "👨‍💼",
        textEn: "This visual spectacle is marvelous! What catering arrangements do we have in that royal dining marquee over there?",
        textHi: "यह दृश्य अद्भुत है! वहाँ उस शाही भोजन मंडप में हमारे पास खान-पान की क्या व्यवस्था है?"
      },
      {
        speaker: "Gayatri",
        avatar: "👩‍💼",
        textEn: "There is an artisanal royal Rajasthani banquet with sixty heritage delicacies, and there are live wood-fired bread stations along that colonnade.",
        textHi: "साठ पारंपरिक व्यंजनों के साथ एक शाही राजस्थानी दावत है, और उस खंभों वाले बरामदे में लाइव तंदूर स्टेशन हैं।"
      },
      {
        speaker: "Raghu",
        avatar: "👨‍💼",
        textEn: "Please verify that the ceremonial vintage car for the bride and groom is parked near that fountain terrace!",
        textHi: "कृपया पुष्टि करें कि दूल्हा और दुल्हन के लिए विंटेज कार उस फव्वारे वाले चबूतरे के पास खड़ी है!"
      },
      {
        speaker: "Gayatri",
        avatar: "👩‍💼",
        textEn: "Yes, the 1938 open-top convertible is decorated with white jasmine garlands; it was polished by our heritage fleet team an hour ago.",
        textHi: "जी हाँ, 1938 की खुली विंटेज कार सफेद चमेली के गजरों से सजी है; एक घंटे पहले हमारी हेरिटेज टीम ने इसे पॉलिश किया था।"
      },
      {
        speaker: "Raghu",
        avatar: "👨‍💼",
        textEn: "Were there any logistical delays with the international floral shipment from the Netherlands?",
        textHi: "क्या नीदरलैंड से आए अंतरराष्ट्रीय फूलों के पार्सल में कोई लॉजिस्टिक देरी हुई थी?"
      },
      {
        speaker: "Gayatri",
        avatar: "👩‍💼",
        textEn: "No, we had temperature-controlled reefers deliver ten thousand white orchids this morning; every floral arch has fresh blossoms.",
        textHi: "नहीं, आज सुबह तापमान-नियंत्रित वाहनों ने दस हजार सफेद ऑर्किड पहुंचाए; हर फूलों की मेहराब पर ताजे फूल लगे हैं।"
      },
      {
        speaker: "Raghu",
        avatar: "👨‍💼",
        textEn: "The acoustic balance for the Shehnai ensemble on that marble pavilion is perfect.",
        textHi: "उस संगमरमर के मंडप पर शहनाई वादकों का ध्वनि संतुलन बिल्कुल सही है।"
      },
      {
        speaker: "Gayatri",
        avatar: "👩‍💼",
        textEn: "Our sound engineers had directional microphones installed behind the carved stone jali screens.",
        textHi: "हमारे साउंड इंजीनियरों ने नक्काशीदार पत्थर की जालीदार स्क्रीन के पीछे माइक्रोफोन लगाए थे।"
      },
      {
        speaker: "Raghu",
        avatar: "👨‍💼",
        textEn: "Eight hundred distinguished guests will be entering through the Elephant Gate in fifteen minutes.",
        textHi: "पंद्रह मिनट में आठ सौ विशिष्ट अतिथि हाथी पोल द्वार से प्रवेश करेंगे।"
      },
      {
        speaker: "Gayatri",
        avatar: "👩‍💼",
        textEn: "Our traditional welcome troupe has rosewater sprinklers, fragrant marigold garlands, and royal trumpeters ready at the portal.",
        textHi: "हमारे स्वागत दल के पास द्वार पर गुलाब जल छिड़कने वाले, गेंदे की मालाएं और शाही तुरही वादक तैयार हैं।"
      },
      {
        speaker: "Raghu",
        avatar: "👨‍💼",
        textEn: "Tonight will be an unforgettable chapter in this palace hotel's storied history.",
        textHi: "आज की रात इस पैलेस होटल के शानदार इतिहास में एक अविस्मरणीय अध्याय होगी।"
      },
      {
        speaker: "Gayatri",
        avatar: "👩‍💼",
        textEn: "The wedding couple and their families have expressed immense happiness with our arrangements.",
        textHi: "वर-वधू और उनके परिवारों ने हमारी व्यवस्थाओं पर अत्यधिक प्रसन्नता व्यक्त की है।"
      },
      {
        speaker: "Raghu",
        avatar: "👨‍💼",
        textEn: "Direct the hospitality staff to maintain impeccable courtesy throughout the banquet.",
        textHi: "पूरे भोज के दौरान आतिथ्य कर्मचारियों को त्रुटिहीन विनम्रता बनाए रखने का निर्देश दें।"
      },
      {
        speaker: "Gayatri",
        avatar: "👩‍💼",
        textEn: "Every palace staff member is thoroughly briefed and vigilant.",
        textHi: "महल का प्रत्येक कर्मचारी पूरी तरह से प्रशिक्षित और सतर्क है।"
      },
      {
        speaker: "Raghu",
        avatar: "👨‍💼",
        textEn: "You have managed this grand celebration with consummate professionalism, Gayatri-ji.",
        textHi: "गायत्री जी, आपने इस भव्य उत्सव का प्रबंधन अत्यंत कुशलता और व्यावसायिकता के साथ किया है।"
      },
      {
        speaker: "Gayatri",
        avatar: "👩‍💼",
        textEn: "Thank you, Raghu! Let us welcome the royal procession.",
        textHi: "धन्यवाद, रघु! आइए शाही बारात का स्वागत करें।"
      },
      {
        speaker: "Raghu",
        avatar: "👨‍💼",
        textEn: "Open the grand gates!",
        textHi: "भव्य द्वार खोलें!"
      },
      {
        speaker: "Gayatri",
        avatar: "👩‍💼",
        textEn: "Welcome to the royal gala!",
        textHi: "शाही समारोह में आपका स्वागत है!"
      }
    ]
  },
  {
    id: "d10_sc06",
    title: "Deep-Sea Submersible Exploration: Oceanographic Synthesis",
    titleHi: "गहरे समुद्र सबमर्सिबल अन्वेषण: समुद्र विज्ञान संश्लेषण",
    context: "Submersible Commander Dr. Victor and Marine Biologist Dr. Leela descend to eight thousand meters in the Mariana Trench.",
    situation: "Synthesizing exclamations, urgent imperatives, past/present/future states of being, existentials, and demonstratives.",
    characters: ["Dr. Victor", "Dr. Leela"],
    turns: [
      {
        speaker: "Dr. Victor",
        avatar: "👨‍🔬",
        textEn: "Dr. Leela, check the exterior pressure gauge! We are at seven thousand five hundred meters below the surface of the Pacific Ocean.",
        textHi: "डॉ. लीला, बाहरी दबाव गेज की जांच करें! हम प्रशांत महासागर की सतह से 7,500 मीटर नीचे हैं।"
      },
      {
        speaker: "Dr. Leela",
        avatar: "👩‍🔬",
        textEn: "The titanium hull is steady at seven hundred and fifty atmospheres! Look outside that quartz viewport; this abyssal plain is mesmerizing!",
        textHi: "टाइटेनियम हल 750 वायुमंडलीय दबाव पर स्थिर है! उस क्वार्ट्ज व्यू-पोर्ट से बाहर देखें; यह अथाह खाई मंत्रमुग्ध कर देने वाली है!"
      },
      {
        speaker: "Dr. Victor",
        avatar: "👨‍🔬",
        textEn: "Activate those external high-intensity LED floodlights right now!",
        textHi: "उन बाहरी हाई-इंटेंसिटी एलईडी फ्लडलाइट्स को तुरंत सक्रिय करें!"
      },
      {
        speaker: "Dr. Leela",
        avatar: "👩‍🔬",
        textEn: "Lights are on! Astonishing! There are bioluminescent siphonophores and ethereal snailfish swimming near that hydrothermal vent!",
        textHi: "रोशनी चालू है! आश्चर्यजनक! उस हाइड्रोथर्मल वेंट के पास बायो-ल्यूमिनसेंट साइफ़ोनोफोर और पारदर्शी स्नेलफ़िश तैर रहे हैं!"
      },
      {
        speaker: "Dr. Victor",
        avatar: "👨‍🔬",
        textEn: "What temperature readings do we have from that mineral chimney over there?",
        textHi: "वहाँ उस खनिज चिमनी से हमारे पास क्या तापमान रीडिंग है?"
      },
      {
        speaker: "Dr. Leela",
        avatar: "👩‍🔬",
        textEn: "The superheated mineral water is three hundred and eighty degrees Celsius, but the ambient seawater is a freezing two degrees.",
        textHi: "अत्यधिक गर्म खनिज पानी 380 डिग्री सेल्सियस है, लेकिन आसपास का समुद्री पानी जमा देने वाला 2 डिग्री है।"
      },
      {
        speaker: "Dr. Victor",
        avatar: "👨‍🔬",
        textEn: "Did our robotic claw sample those giant chemosynthetic tube worms during our previous dive?",
        textHi: "क्या हमारे रोबोटिक पंजे ने हमारे पिछले गोता लगाने के दौरान उन विशाल ट्यूब वर्म्स के नमूने लिए थे?"
      },
      {
        speaker: "Dr. Leela",
        avatar: "👩‍🔬",
        textEn: "Yes, we had twelve biological specimens collected yesterday; they have symbiotic sulfur-oxidizing bacteria inside their tissues.",
        textHi: "जी हाँ, कल हमने बारह जैविक नमूने एकत्र किए थे; उनके ऊतकों के अंदर सल्फर-ऑक्सीकरण करने वाले सहजीवी बैक्टीरिया हैं।"
      },
      {
        speaker: "Dr. Victor",
        avatar: "👨‍🔬",
        textEn: "Extend the robotic arm and collect those black basalt mineral nodules from this rocky ledge!",
        textHi: "रोबोटिक हाथ को आगे बढ़ाएं और इस चट्टानी मुंडेर से उन काले बेसाल्ट खनिज पत्थरों को इकट्ठा करें!"
      },
      {
        speaker: "Dr. Leela",
        avatar: "👩‍🔬",
        textEn: "Manipulator arm is engaged; there are rare-earth metals and manganese in these geological samples.",
        textHi: "रोबोटिक हाथ सक्रिय है; इन भूवैज्ञानिक नमूनों में दुर्लभ धातुएं और मैंगनीज हैं।"
      },
      {
        speaker: "Dr. Victor",
        avatar: "👨‍🔬",
        textEn: "Our life-support oxygen levels will be optimal for another six hours.",
        textHi: "हमारी जीवन-रक्षक ऑक्सीजन का स्तर अगले छह घंटों तक पूरी तरह अनुकूल रहेगा।"
      },
      {
        speaker: "Dr. Leela",
        avatar: "👩‍🔬",
        textEn: "This expedition has revealed an entirely alien ecosystem thriving in total darkness.",
        textHi: "इस अभियान ने पूर्ण अंधकार में पनप रहे एक पूरी तरह से अद्भुत पारिस्थितिकी तंत्र का खुलासा किया है।"
      },
      {
        speaker: "Dr. Victor",
        avatar: "👨‍🔬",
        textEn: "These scientific discoveries will reshape our understanding of how life originates on planetary bodies.",
        textHi: "ये वैज्ञानिक खोजें इस बात की हमारी समझ को नया रूप देंगी कि ग्रहों पर जीवन की उत्पत्ति कैसे होती है।"
      },
      {
        speaker: "Dr. Leela",
        avatar: "👩‍🔬",
        textEn: "The surface support ship has confirmed our acoustic telemetry ping; they have our ascent coordinates.",
        textHi: "सतह पर मौजूद सहायक जहाज ने हमारे ध्वनि टेलीमेट्री सिग्नल की पुष्टि की है; उनके पास हमारे ऊपर आने के निर्देशांक हैं।"
      },
      {
        speaker: "Dr. Victor",
        avatar: "👨‍🔬",
        textEn: "Initiate the ascent sequence: release the primary steel ballast weights!",
        textHi: "ऊपर उठने का क्रम शुरू करें: प्राथमिक स्टील वजन को अलग करें!"
      },
      {
        speaker: "Dr. Leela",
        avatar: "👩‍🔬",
        textEn: "Ballast is dropped; our rate of ascent is thirty meters per minute.",
        textHi: "बैलास्ट छोड़ दिया गया है; हमारे ऊपर उठने की गति तीस मीटर प्रति मिनट है।"
      },
      {
        speaker: "Dr. Victor",
        avatar: "👨‍🔬",
        textEn: "We will be on the surface by six o'clock this evening.",
        textHi: "हम आज शाम छह बजे तक समुद्र की सतह पर होंगे।"
      },
      {
        speaker: "Dr. Leela",
        avatar: "👩‍🔬",
        textEn: "What a thrilling, historic voyage into the abyss!",
        textHi: "गहरे समुद्र में कितनी रोमांचक और ऐतिहासिक यात्रा रही!"
      },
      {
        speaker: "Dr. Victor",
        avatar: "👨‍🔬",
        textEn: "Outstanding exploration work, Dr. Leela!",
        textHi: "डॉ. लीला, उत्कृष्ट खोज कार्य!"
      },
      {
        speaker: "Dr. Leela",
        avatar: "👩‍🔬",
        textEn: "Thank you, Commander!",
        textHi: "धन्यवाद, कमांडर!"
      }
    ]
  },
  {
    id: "d10_sc07",
    title: "Mega Solar Park Grid Synchronization: Engineering Milestones",
    titleHi: "मेगा सोलर पार्क ग्रिड सिंक्रोनाइज़ेशन: इंजीनियरिंग मील के पत्थर",
    context: "Chief Electrical Engineer Ravi and State Grid Controller Shweta synchronize a 500-megawatt solar facility to the national grid.",
    situation: "Synthesizing greetings, imperatives, past/present/future states, existentials, demonstratives, and equipment specs.",
    characters: ["Ravi", "Shweta"],
    turns: [
      {
        speaker: "Ravi",
        avatar: "👨‍💼",
        textEn: "Good morning, Shweta! Today is the milestone day! Our 500-megawatt solar park is ready for full grid synchronization.",
        textHi: "शुभ प्रभात, श्वेता! आज ऐतिहासिक दिन है! हमारा 500 मेगावाट का सोलर पार्क राष्ट्रीय ग्रिड से जुड़ने के लिए पूरी तरह तैयार है।"
      },
      {
        speaker: "Shweta",
        avatar: "👩‍💼",
        textEn: "Good morning, Ravi! Excellent news! Are all three 400-kilovolt step-up transformers energized at the main substation?",
        textHi: "शुभ प्रभात, रवि! बहुत अच्छी खबर! क्या मुख्य सबस्टेशन पर तीनों 400-किलोवोल्ट स्टेप-अप ट्रांसफार्मर सक्रिय हैं?"
      },
      {
        speaker: "Ravi",
        avatar: "👨‍💼",
        textEn: "Yes, they are energized; the voltage waveform is pure sinusoidal and phase angle alignment is exact.",
        textHi: "जी हाँ, वे सक्रिय हैं; वोल्टेज तरंग बिल्कुल सुचारू है और फेज़ एंगल का संरेखण सटीक है।"
      },
      {
        speaker: "Shweta",
        avatar: "👩‍💼",
        textEn: "What was the frequency deviation reading during the preliminary test yesterday afternoon?",
        textHi: "कल दोपहर प्रारंभिक परीक्षण के दौरान आवृत्ति (फ्रीक्वेंसी) में क्या अंतर दर्ज किया गया था?"
      },
      {
        speaker: "Ravi",
        avatar: "👨‍💼",
        textEn: "There was virtually zero drift; the grid frequency was steady at fifty point zero zero hertz throughout the two-hour simulation.",
        textHi: "वस्तुतः शून्य अंतर था; दो घंटे के सिमुलेशन के दौरान ग्रिड आवृत्ति पचास हर्ट्ज पर बिल्कुल स्थिर थी।"
      },
      {
        speaker: "Shweta",
        avatar: "👩‍💼",
        textEn: "Look at that real-time SCADA telemetry display on this terminal! How many solar tracking tables are tracking the morning sun?",
        textHi: "इस टर्मिनल पर उस रीयल-टाइम स्काडा टेलीमेट्री डिस्प्ले को देखें! सुबह के सूरज के साथ कितने सोलर ट्रैकिंग टेबल घूम रहे हैं?"
      },
      {
        speaker: "Ravi",
        avatar: "👨‍💼",
        textEn: "There are one point two million bifacial solar panels across twelve thousand automated single-axis tracking tables.",
        textHi: "बारह हजार स्वचालित सिंगल-एक्सिस ट्रैकिंग टेबलों पर 12 लाख बाइफेशियल सोलर पैनल लगे हैं।"
      },
      {
        speaker: "Shweta",
        avatar: "👩‍💼",
        textEn: "Close circuit breaker 401 on the feeder bus right now!",
        textHi: "फीडर बस पर सर्किट ब्रेकर 401 को अभी बंद (चालू) करें!"
      },
      {
        speaker: "Ravi",
        avatar: "👨‍💼",
        textEn: "Breaker 401 is closed! We are synchronized! Three hundred megawatts of clean solar power are flowing into the northern regional grid right now!",
        textHi: "ब्रेकर 401 बंद हो गया है! हम ग्रिड से जुड़ चुके हैं! इस समय तीन सौ मेगावाट स्वच्छ सौर ऊर्जा उत्तरी क्षेत्रीय ग्रिड में प्रवाहित हो रही है!"
      },
      {
        speaker: "Shweta",
        avatar: "👩‍💼",
        textEn: "What a magnificent engineering victory! This clean power will eliminate eight hundred thousand tons of carbon emissions annually.",
        textHi: "कितनी शानदार इंजीनियरिंग विजय! यह स्वच्छ ऊर्जा सालाना आठ लाख टन कार्बन उत्सर्जन को समाप्त करेगी।"
      },
      {
        speaker: "Ravi",
        avatar: "👨‍💼",
        textEn: "Does our battery energy storage system have its sixty-megawatt lithium iron phosphate cells charged?",
        textHi: "क्या हमारे बैटरी ऊर्जा भंडारण प्रणाली के साठ मेगावाट लिथियम आयरन फॉस्फेट सेल पूरी तरह चार्ज हैं?"
      },
      {
        speaker: "Shweta",
        avatar: "👩‍💼",
        textEn: "Yes, the battery storage has full state-of-charge; it will supply evening peak electricity smoothly from 6 PM to 10 PM.",
        textHi: "जी हाँ, बैटरी स्टोरेज पूरा चार्ज है; यह शाम 6 बजे से रात 10 बजे तक शाम के पीक समय में बिजली की सुचारू आपूर्ति करेगा।"
      },
      {
        speaker: "Ravi",
        avatar: "👨‍💼",
        textEn: "These robotic dry-cleaning cleaning robots on those panel arrays keep dust losses under one percent.",
        textHi: "उन पैनलों पर लगे ये रोबोटिक ड्राई-क्लीनर धूल के नुकसान को एक प्रतिशत से कम रखते हैं।"
      },
      {
        speaker: "Shweta",
        avatar: "👩‍💼",
        textEn: "The entire plant is autonomous, digital, and environmentally sustainable.",
        textHi: "पूरा संयंत्र स्वचालित, डिजिटल और पर्यावरण के अनुकूल है।"
      },
      {
        speaker: "Ravi",
        avatar: "👨‍💼",
        textEn: "Our team has worked relentlessly for eighteen months to achieve this moment.",
        textHi: "हमारी टीम ने इस पल को हासिल करने के लिए अठारह महीने तक अथक परिश्रम किया है।"
      },
      {
        speaker: "Shweta",
        avatar: "👩‍💼",
        textEn: "Your engineering leadership has been exemplary, Ravi.",
        textHi: "रवि, आपका इंजीनियरिंग नेतृत्व अनुकरणीय रहा है।"
      },
      {
        speaker: "Ravi",
        avatar: "👨‍💼",
        textEn: "Thank you, Shweta! Powering our nation with clean energy is our greatest privilege.",
        textHi: "धन्यवाद, श्वेता! अपने देश को स्वच्छ ऊर्जा से सशक्त बनाना हमारा सबसे बड़ा सौभाग्य है।"
      },
      {
        speaker: "Shweta",
        avatar: "👩‍💼",
        textEn: "Let us monitor the generation ramp-up toward the full 500-megawatt peak at noon.",
        textHi: "आइए दोपहर में पूरे 500 मेगावाट के पीक की ओर बढ़ते उत्पादन की निगरानी करें।"
      },
      {
        speaker: "Ravi",
        avatar: "👨‍💼",
        textEn: "Monitoring all telemetry now.",
        textHi: "अब सभी टेलीमेट्री की निगरानी कर रहा हूँ।"
      },
      {
        speaker: "Shweta",
        avatar: "👩‍💼",
        textEn: "Congratulations to the entire team!",
        textHi: "पूरी टीम को बहुत-बहुत बधाई!"
      }
    ]
  },
  {
    id: "d10_sc08",
    title: "Supreme Court Constitutional Hearing: Legal Jurisprudence",
    titleHi: "सर्वोच्च न्यायालय संवैधानिक सुनवाई: कानूनी न्यायशास्त्र",
    context: "Senior Advocate Mr. Harish and Junior Law Clerk Ananya prepare for a landmark Constitutional Bench hearing.",
    situation: "Synthesizing formal greetings, courtesy, past/present/future states, existentials, demonstratives, and case law precedents.",
    characters: ["Mr. Harish", "Ananya"],
    turns: [
      {
        speaker: "Mr. Harish",
        avatar: "👨‍💼",
        textEn: "Good morning, Ananya! Please sit down. Today's hearing before the five-judge Constitutional Bench will be of paramount constitutional importance.",
        textHi: "शुभ प्रभात, अनन्या! कृपया बैठें। पांच जजों की संविधान पीठ के समक्ष आज की सुनवाई अत्यधिक संवैधानिक महत्व की होगी।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Good morning, Sir! Yes, our fundamental rights petition has gathered nationwide attention. Are all legal case citations ready in our master brief?",
        textHi: "शुभ प्रभात, सर! जी हाँ, हमारी मौलिक अधिकारों की याचिका ने देशव्यापी ध्यान आकर्षित किया है। क्या हमारे मुख्य संक्षिप्त विवरण में सभी कानूनी उदाहरण तैयार हैं?"
      },
      {
        speaker: "Mr. Harish",
        avatar: "👨‍💼",
        textEn: "Look at this primary compilation on this desk. This file contains the landmark nine-judge bench precedent from 2017 on the right to privacy.",
        textHi: "इस मेज पर इस प्राथमिक संकलन को देखें। इस फाइल में निजता के अधिकार पर 2017 का ऐतिहासिक नौ जजों की पीठ का निर्णय शामिल है।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Did the respondent Attorney General have any preliminary procedural objections during yesterday's mention?",
        textHi: "क्या कल के उल्लेख के दौरान प्रतिवादी अटॉर्नी जनरल की कोई प्रारंभिक प्रक्रियात्मक आपत्तियां थीं?"
      },
      {
        speaker: "Mr. Harish",
        avatar: "👨‍💼",
        textEn: "He had a brief query regarding territorial jurisdiction, but the Chief Justice dismissed that objection in thirty seconds.",
        textHi: "क्षेत्राधिकार को लेकर उनका एक संक्षिप्त सवाल था, लेकिन मुख्य न्यायाधीश ने तीस सेकंड में उस आपत्ति को खारिज कर दिया।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Is there any international comparative jurisprudence from the European Court of Human Rights included in these volumes?",
        textHi: "क्या इन खंडों में यूरोपीय मानवाधिकार न्यायालय का कोई अंतरराष्ट्रीय तुलनात्मक कानून शामिल है?"
      },
      {
        speaker: "Mr. Harish",
        avatar: "👨‍💼",
        textEn: "Yes, there are three seminal judgments on data autonomy, and there is an insightful commentary by the Canadian Supreme Court on digital dignity.",
        textHi: "जी हाँ, डेटा स्वायत्तता पर तीन महत्वपूर्ण निर्णय हैं, और डिजिटल गरिमा पर कनाडाई सुप्रीम कोर्ट की एक व्यावहारिक टिप्पणी है।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Those constitutional principles will be persuasive before the honorable bench.",
        textHi: "वे संवैधानिक सिद्धांत माननीय पीठ के समक्ष अत्यधिक प्रभावशाली होंगे।"
      },
      {
        speaker: "Mr. Harish",
        avatar: "👨‍💼",
        textEn: "Highlight paragraphs forty to forty-five of that landmark Kesavananda Bharati judgment right now!",
        textHi: "उस ऐतिहासिक केशवानंद भारती फैसले के पैराग्राफ 40 से 45 को अभी रेखांकित करें!"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Highlighted, Sir! The basic structure doctrine is clearly articulated in these precise paragraphs.",
        textHi: "रेखांकित कर दिया, सर! इन विशिष्ट पैराग्राफों में मूल संरचना सिद्धांत स्पष्ट रूप से व्यक्त किया गया है।"
      },
      {
        speaker: "Mr. Harish",
        avatar: "👨‍💼",
        textEn: "Our oral arguments must be crisp, logically watertight, and anchored in fundamental constitutional morality.",
        textHi: "हमारी मौखिक दलीलें स्पष्ट, तार्किक रूप से अचूक और मौलिक संवैधानिक नैतिकता पर आधारित होनी चाहिए।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "You have thirty minutes allocated for opening oral submissions at ten thirty AM.",
        textHi: "सुबह 10:30 बजे प्रारंभिक दलीलों के लिए आपको तीस मिनट का समय आवंटित किया गया है।"
      },
      {
        speaker: "Mr. Harish",
        avatar: "👨‍💼",
        textEn: "Courtroom Number 1 will be packed with senior advocates, jurists, and legal correspondents.",
        textHi: "कोर्ट रूम नंबर 1 वरिष्ठ वकीलों, कानूनविदों और कानूनी संवाददाताओं से खचाखच भरा होगा।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "I have arranged all five physical brief volumes in chronological order on the counsel lectern.",
        textHi: "मैंने वकील के मंच पर सभी पांच फाइलों को कालानुक्रमिक क्रम में व्यवस्थित कर दिया है।"
      },
      {
        speaker: "Mr. Harish",
        avatar: "👨‍💼",
        textEn: "Your legal research and meticulous indexing have been exceptional throughout this preparation, Ananya.",
        textHi: "अनन्या, इस तैयारी के दौरान आपका कानूनी शोध और सावधानीपूर्वक इंडेक्सिंग असाधारण रही है।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Thank you, Mr. Harish! Working on this constitutional matter with you is the greatest learning experience of my legal career.",
        textHi: "धन्यवाद, मिस्टर हरीश! आपके साथ इस संवैधानिक मामले पर काम करना मेरे कानूनी करियर का सबसे बड़ा सीखने का अनुभव है।"
      },
      {
        speaker: "Mr. Harish",
        avatar: "👨‍💼",
        textEn: "Let us walk over to Courtroom 1. The clock is striking ten twenty.",
        textHi: "आइए कोर्ट रूम 1 की ओर चलें। घड़ी में 10:20 बज रहे हैं।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Gown and bands are in order, Sir. Ready to proceed.",
        textHi: "गाउन और बैंड व्यवस्थित हैं, सर। आगे बढ़ने के लिए तैयार हैं।"
      },
      {
        speaker: "Mr. Harish",
        avatar: "👨‍💼",
        textEn: "May justice prevail!",
        textHi: "न्याय की विजय हो!"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Indeed, Sir!",
        textHi: "अवश्य, सर!"
      }
    ]
  },
  {
    id: "d10_sc09",
    title: "Wildlife Sanctuary Rescue Center: Leopard Rehabilitation",
    titleHi: "वन्यजीव अभयारण्य बचाव केंद्र: तेंदुए का पुनर्वास",
    context: "Wildlife Sanctuary Director Dr. Sameer and Chief Veterinarian Dr. Nandita examine a rescued orphan leopard cub.",
    situation: "Synthesizing exclamations, gentle imperatives, state of being past/present/future, existentials, demonstratives, and health traits.",
    characters: ["Dr. Sameer", "Dr. Nandita"],
    turns: [
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🌾",
        textEn: "Dr. Nandita, look at this three-month-old rescued leopard cub in this quarantine nursery. He is alert and playful today!",
        textHi: "डॉ. नंदिता, इस क्वारंटाइन नर्सरी में इस तीन महीने के बचाए गए तेंदुए के शावक को देखें। वह आज सतर्क और चंचल है!"
      },
      {
        speaker: "Dr. Nandita",
        avatar: "👩‍⚕️",
        textEn: "What a relief! When forest rangers brought him in from the agricultural sugarcane field last week, he was dehydrated and terrified.",
        textHi: "कितनी राहत की बात है! पिछले हफ्ते जब वन रेंजर उसे गन्ने के खेत से लाए थे, तो वह पानी की कमी से जूझ रहा था और बहुत डरा हुआ था।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🌾",
        textEn: "What is his current weight and nutritional status after seven days of specialized formula feeding?",
        textHi: "विशेष फॉर्मूला दूध पिलाने के सात दिनों के बाद उसका वर्तमान वजन और पोषण की स्थिति क्या है?"
      },
      {
        speaker: "Dr. Nandita",
        avatar: "👩‍⚕️",
        textEn: "His weight is four point eight kilograms; he has clear amber eyes, a glossy rosette coat, and his body temperature is a normal thirty-eight point five degrees.",
        textHi: "उसका वजन 4.8 किलोग्राम है; उसकी आँखें साफ बादामी हैं, चमकदार धब्बेदार बाल हैं, और शरीर का तापमान सामान्य 38.5 डिग्री है।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🌾",
        textEn: "Is there any sign of respiratory distress or parasitic infection in his blood smear?",
        textHi: "क्या उसके रक्त परीक्षण में सांस की तकलीफ या परजीवी संक्रमण का कोई लक्षण है?"
      },
      {
        speaker: "Dr. Nandita",
        avatar: "👩‍⚕️",
        textEn: "No, there are zero blood parasites; his white blood cell count is healthy and his fecal tests are negative.",
        textHi: "नहीं, रक्त में शून्य परजीवी हैं; उसकी श्वेत रक्त कोशिकाएं स्वस्थ हैं और मल परीक्षण सामान्य हैं।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🌾",
        textEn: "Administer his second multivitamin and deworming dose gently in his milk bowl right now!",
        textHi: "दूध के कटोरे में उसकी दूसरी मल्टीविटामिन और कीड़े मारने की दवा की खुराक अभी धीरे से दें!"
      },
      {
        speaker: "Dr. Nandita",
        avatar: "👩‍⚕️",
        textEn: "Done! He drinks with immense appetite! He has strong natural predatory instincts already.",
        textHi: "हो गया! वह बहुत भूख के साथ पीता है! उसमें पहले से ही शिकार करने की मजबूत प्राकृतिक प्रवृत्ति है।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🌾",
        textEn: "What about those spacious open-air forested rehabilitation enclosures on that southern ridge?",
        textHi: "उस दक्षिणी रिज पर उन विशाल खुले जंगल वाले पुनर्वास बाड़ों के बारे में क्या?"
      },
      {
        speaker: "Dr. Nandita",
        avatar: "👩‍⚕️",
        textEn: "Those large semi-wild enclosures have natural trees, rock climbing ledges, and live prey tracking areas for re-wilding training.",
        textHi: "उन बड़े अर्ध-जंगली बाड़ों में प्राकृतिक पेड़, चट्टान पर चढ़ने की जगह और शिकार के प्रशिक्षण के लिए इलाके हैं।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🌾",
        textEn: "He will be transferred to Enclosure 3 next month when his canine teeth are fully developed.",
        textHi: "अगले महीने जब उसके नुकीले दांत पूरी तरह विकसित हो जाएंगे तो उसे बाड़े 3 में स्थानांतरित कर दिया जाएगा।"
      },
      {
        speaker: "Dr. Nandita",
        avatar: "👩‍⚕️",
        textEn: "In eighteen months, he will be a magnificent, self-sufficient wild leopard ready for release into the protected national park.",
        textHi: "अठारह महीनों में, वह राष्ट्रीय उद्यान में छोड़े जाने के लिए तैयार एक शानदार, आत्मनिर्भर जंगली तेंदुआ बन जाएगा।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🌾",
        textEn: "Human contact must be minimized strictly to prevent human habituation.",
        textHi: "इंसानों से घुलने-मिलने से रोकने के लिए मानवीय संपर्क को सख्ती से कम से कम रखा जाना चाहिए।"
      },
      {
        speaker: "Dr. Nandita",
        avatar: "👩‍⚕️",
        textEn: "Yes, our caregivers wear camouflage ghillie suits and use remote feeding chutes.",
        textHi: "जी हाँ, हमारे देखभाल करने वाले छलावरण वाले कपड़े पहनते हैं और रिमोट फीडिंग बॉक्स का उपयोग करते हैं।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🌾",
        textEn: "Our wildlife rehabilitation team has achieved an eighty-five percent wild release success rate over the past decade.",
        textHi: "हमारी वन्यजीव पुनर्वास टीम ने पिछले एक दशक में 85% सफल जंगली रिहाई दर हासिल की है।"
      },
      {
        speaker: "Dr. Nandita",
        avatar: "👩‍⚕️",
        textEn: "Saving every individual wild animal is a vital contribution to our biodiversity.",
        textHi: "प्रत्येक जंगली जानवर को बचाना हमारी जैव विविधता में एक महत्वपूर्ण योगदान है।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🌾",
        textEn: "You have nurtured this cub with extraordinary clinical tenderness, Dr. Nandita.",
        textHi: "डॉ. नंदिता, आपने इस शावक की असाधारण चिकित्सकीय संवेदनशीलता के साथ देखभाल की है।"
      },
      {
        speaker: "Dr. Nandita",
        avatar: "👩‍⚕️",
        textEn: "Thank you, Dr. Sameer. Seeing him thrive is the ultimate reward.",
        textHi: "धन्यवाद, डॉ. समीर। उसे फलता-फूलता देखना ही सबसे बड़ा पुरस्कार है।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🌾",
        textEn: "Let us let him rest in his quiet den.",
        textHi: "आइए उसे अपनी शांत मांद में आराम करने दें।"
      },
      {
        speaker: "Dr. Nandita",
        avatar: "👩‍⚕️",
        textEn: "Rest well, little warrior!",
        textHi: "अच्छी नींद लो, नन्हे योद्धा!"
      }
    ]
  },
  {
    id: "d10_sc10",
    title: "Stage 1 Graduation & Mastery Retrospective: The 10-Day Journey",
    titleHi: "चरण 1 दीक्षांत और प्रवीणता पुनरावलोकन: 10-दिवसीय यात्रा",
    context: "Senior English Mentor Prof. Vikram and Enthusiastic Learner Ananya celebrate completing Stage 1 (Days 01–10).",
    situation: "Holistic cumulative synthesis celebrating greetings, etiquette, reactions, imperatives, state of being (is/was/will be), existentials, demonstratives, and possession.",
    characters: ["Prof. Vikram", "Ananya"],
    turns: [
      {
        speaker: "Prof. Vikram",
        avatar: "👨‍🏫",
        textEn: "Good evening, Ananya! Heartiest congratulations! Today is Day 10, the grand culmination of Stage 1 in your English mastery journey.",
        textHi: "शुभ संध्या, अनन्या! हार्दिक बधाई! आज दिवस 10 है, आपकी अंग्रेजी दक्षता यात्रा में चरण 1 का भव्य समापन।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍🎓",
        textEn: "Good evening, Professor Vikram! Thank you so much! What an extraordinary, transformative journey this has been!",
        textHi: "शुभ संध्या, प्रोफेसर विक्रम! आपका बहुत-बहुत धन्यवाद! यह कितनी असाधारण और परिवर्तनकारी यात्रा रही है!"
      },
      {
        speaker: "Prof. Vikram",
        avatar: "👨‍🏫",
        textEn: "Look at your progress notebook on this table! On Day 1, you learned foundational daily greetings and polite partings.",
        textHi: "इस मेज पर अपनी प्रगति नोटबुक को देखें! पहले दिन, आपने दैनिक अभिवादन और विनम्र विदाई सीखी थी।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍🎓",
        textEn: "Yes! On Day 2, social etiquette and courtesy phrases were our focus, and on Day 3, we practiced natural emotional exclamations and expressive reactions.",
        textHi: "जी हाँ! दूसरे दिन सामाजिक शिष्टाचार और विनम्रता के वाक्यांश हमारा ध्यान थे, और तीसरे दिन हमने प्राकृतिक भावनात्मक उद्गारों का अभ्यास किया।"
      },
      {
        speaker: "Prof. Vikram",
        avatar: "👨‍🏫",
        textEn: "Then on Day 4, everyday action imperatives gave you the power to give direct, clear, and respectful instructions.",
        textHi: "फिर चौथे दिन, दैनिक एक्शन निर्देशों ने आपको सीधे, स्पष्ट और सम्मानजनक निर्देश देने की शक्ति दी।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍🎓",
        textEn: "And Days 5, 6, and 7 were the pillars of existence: present state of being with 'is, am, are', past state of being with 'was, were', and future state of being with 'will be, won't be'!",
        textHi: "और दिवस 5, 6, और 7 अस्तित्व के आधार स्तंभ थे: 'is, am, are' के साथ वर्तमान अवस्था, 'was, were' के साथ भूतकाल अवस्था, और 'will be, won't be' के साथ भविष्य की अवस्था!"
      },
      {
        speaker: "Prof. Vikram",
        avatar: "👨‍🏫",
        textEn: "Exactly! And on Day 8, you mastered proximity with demonstratives 'this, that, these, those' and spatial presence with 'there is, there are'.",
        textHi: "बिल्कुल! और 8वें दिन आपने संकेतवाचक 'this, that, these, those' और अस्तित्व सूचक 'there is, there are' में महारत हासिल की।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍🎓",
        textEn: "And yesterday on Day 9, we unlocked possession, relationships, attributes, and experiences with 'has, have, and had'!",
        textHi: "और कल 9वें दिन, हमने 'has, have, और had' के साथ अधिकार, संबंध, विशेषताएं और अनुभव व्यक्त करना सीखा!"
      },
      {
        speaker: "Prof. Vikram",
        avatar: "👨‍🏫",
        textEn: "You now have a complete, solid foundation of non-action state, identity, relationship, and descriptive communication in English.",
        textHi: "अब आपके पास अंग्रेजी में स्थिति, पहचान, संबंध और वर्णनात्मक संचार की एक पूर्ण और मजबूत नींव है।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍🎓",
        textEn: "My spoken confidence is infinitely higher than it was ten days ago! I have zero hesitation expressing complex thoughts.",
        textHi: "मेरा बोलने का आत्मविश्वास दस दिन पहले की तुलना में बहुत अधिक है! जटिल विचारों को व्यक्त करने में मुझे कोई झिझक नहीं होती।"
      },
      {
        speaker: "Prof. Vikram",
        avatar: "👨‍🏫",
        textEn: "You have demonstrated immense dedication, linguistic discipline, and daily consistency.",
        textHi: "आपने अत्यधिक समर्पण, भाषाई अनुशासन और दैनिक निरंतरता का प्रदर्शन किया है।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍🎓",
        textEn: "Will Stage 2 begin with action verbs, daily routines, and dynamic tenses tomorrow on Day 11?",
        textHi: "क्या कल 11वें दिन चरण 2 की शुरुआत एक्शन क्रियाओं, दैनिक दिनचर्या और गतिशील कालों के साथ होगी?"
      },
      {
        speaker: "Prof. Vikram",
        avatar: "👨‍🏫",
        textEn: "Yes! Stage 2 will be a glorious exploration of simple present action, habitual routines, universal truths, and conversational fluency.",
        textHi: "जी हाँ! चरण 2 सामान्य वर्तमान क्रिया, दैनिक आदतों, सार्वभौमिक सत्यों और संवादात्मक प्रवाह की एक शानदार खोज होगी।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍🎓",
        textEn: "I will be ready at eight sharp with my notebook and enthusiasm!",
        textHi: "मैं अपनी नोटबुक और पूरे उत्साह के साथ ठीक आठ बजे तैयार रहूँगी!"
      },
      {
        speaker: "Prof. Vikram",
        avatar: "👨‍🏫",
        textEn: "There is your Stage 1 Certificate of Excellence right here inside this embossed folder.",
        textHi: "इस फोल्डर के अंदर आपका स्टेज 1 का उत्कृष्टता प्रमाण पत्र मौजूद है।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍🎓",
        textEn: "Thank you from the bottom of my heart, Professor Vikram! You are the most inspiring mentor.",
        textHi: "प्रोफेसर विक्रम, मेरे दिल की गहराइयों से धन्यवाद! आप सबसे प्रेरणादायक गुरु हैं।"
      },
      {
        speaker: "Prof. Vikram",
        avatar: "👨‍🏫",
        textEn: "The honor is mine, Ananya. Always cherish your love for learning.",
        textHi: "यह मेरे लिए सम्मान की बात है, अनन्या। सीखने के प्रति अपने प्रेम को हमेशा संजोकर रखें।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍🎓",
        textEn: "I will see you tomorrow morning for Day 11!",
        textHi: "मैं आपसे कल सुबह 11वें दिन मिलूंगी!"
      },
      {
        speaker: "Prof. Vikram",
        avatar: "👨‍🏫",
        textEn: "Have a restful evening! Onward to Stage 2!",
        textHi: "शुभ संध्या! चरण 2 की ओर आगे बढ़ें!"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍🎓",
        textEn: "Onward to Stage 2! Goodnight, Professor!",
        textHi: "चरण 2 की ओर आगे बढ़ें! शुभ रात्रि, प्रोफेसर!"
      }
    ]
  }
];
