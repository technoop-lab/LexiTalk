import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const day07Dialogues = [
  {
    id: "d07_sc01",
    title: "Smart City Vision 2030: Future Urban States & Infrastructure",
    titleHi: "स्मार्ट सिटी विज़न 2030: भविष्य के शहर और बुनियादी ढांचे की स्थिति",
    context: "Chief Urban Planner Ananya and Transport Commissioner Rajiv discuss future municipal infrastructure states.",
    situation: "Mastering Future State of Being ('will be', 'won't be', 'will it be?', future attributes, readiness, sustainability).",
    characters: ["Ananya", "Rajiv"],
    turns: [
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Rajiv, our capital city will be eighty percent powered by renewable solar grids by 2030.",
        textHi: "राजीव, 2030 तक हमारी राजधानी का अस्सी प्रतिशत हिस्सा नवीकरणीय सौर ग्रिड से संचालित होगा।"
      },
      {
        speaker: "Rajiv",
        avatar: "👨‍💼",
        textEn: "That is an ambitious milestone! Will the public bus fleet be one hundred percent electric?",
        textHi: "यह एक महत्वाकांक्षी लक्ष्य है! क्या सार्वजनिक बस बेड़ा सौ प्रतिशत इलेक्ट्रिक होगा?"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Yes, all five thousand municipal buses will be zero-emission electric vehicles within five years.",
        textHi: "जी हाँ, पाँच वर्षों के भीतर सभी पाँच हजार नगरपालिका बसें शून्य-उत्सर्जन वाली इलेक्ट्रिक गाड़ियाँ होंगी।"
      },
      {
        speaker: "Rajiv",
        avatar: "👨‍💼",
        textEn: "Will the urban air quality index be in the green category throughout the winter months?",
        textHi: "क्या सर्दियों के महीनों में शहरी वायु गुणवत्ता सूचकांक (AQI) हरे यानी सुरक्षित वर्ग में होगा?"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "With urban forest corridors and dust-suppression mist towers, particulate matter will be minimal.",
        textHi: "शहरी वन गलियारों और धूल-निवारक मिस्ट टावरों के साथ, सूक्ष्म कणों की मात्रा न्यूनतम होगी।"
      },
      {
        speaker: "Rajiv",
        avatar: "👨‍💼",
        textEn: "Won't the initial capital expenditure be extraordinarily heavy for the municipal corporation?",
        textHi: "क्या नगर निगम के लिए शुरुआती पूंजीगत खर्च असाधारण रूप से भारी नहीं होगा?"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "No, green climate bonds and international sustainability funds will be our primary financial anchors.",
        textHi: "नहीं, हरित जलवायु बांड और अंतरराष्ट्रीय स्थिरता कोष हमारे प्राथमिक वित्तीय आधार होंगे।"
      },
      {
        speaker: "Rajiv",
        avatar: "👨‍💼",
        textEn: "Will traffic congestion on the arterial ring roads be a thing of the past?",
        textHi: "क्या मुख्य रिंग रोड पर ट्रैफिक जाम अतीत की बात बन जाएगा?"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Yes, AI-synchronized traffic signals and automated light rail will be accessible to ninety percent of citizens.",
        textHi: "जी हाँ, एआई-सिंक्रोनाइज़्ड ट्रैफिक सिग्नल और स्वचालित लाइट रेल नब्बे प्रतिशत नागरिकों की पहुंच में होंगे।"
      },
      {
        speaker: "Rajiv",
        avatar: "👨‍💼",
        textEn: "The downtown pedestrian plazas will be vibrant and green.",
        textHi: "शहर के मुख्य पैदल यात्री प्लाजा जीवंत और हरे-भरे होंगे।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Yes, vehicular traffic won't be permitted inside the heritage core; only walking and cycling will be allowed.",
        textHi: "जी हाँ, ऐतिहासिक केंद्र के अंदर वाहनों की आवाजाही की अनुमति नहीं होगी; केवल पैदल चलने और साइकिल चलाने की अनुमति होगी।"
      },
      {
        speaker: "Rajiv",
        avatar: "👨‍💼",
        textEn: "Will clean tap water be drinkable straight from the faucet in every household?",
        textHi: "क्या हर घर में नल से सीधे पीने योग्य साफ पानी उपलब्ध होगा?"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Yes, the automated 24/7 pressurized water grid will be fully operational across all administrative zones.",
        textHi: "जी हाँ, स्वचालित 24/7 प्रेशराइज्ड वाटर ग्रिड सभी प्रशासनिक क्षेत्रों में पूरी तरह से चालू होगा।"
      },
      {
        speaker: "Rajiv",
        avatar: "👨‍💼",
        textEn: "Our city will be a global benchmark for sustainable urban living.",
        textHi: "हमारा शहर सतत शहरी जीवन के लिए एक वैश्विक मानक बनेगा।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "The citizens will be proud of this transformative urban revolution.",
        textHi: "नागरिक इस क्रांतिकारी शहरी बदलाव पर गर्व करेंगे।"
      },
      {
        speaker: "Rajiv",
        avatar: "👨‍💼",
        textEn: "I will be fully committed to overseeing the transit electrification roadmap.",
        textHi: "मैं पारगमन विद्युतीकरण योजना की निगरानी के लिए पूरी तरह समर्पित रहूँगा।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Together, our planning team will be unstoppable.",
        textHi: "एक साथ मिलकर, हमारी योजना टीम अजेय होगी।"
      },
      {
        speaker: "Rajiv",
        avatar: "👨‍💼",
        textEn: "The future will be bright and clean for the next generation.",
        textHi: "अगली पीढ़ी के लिए भविष्य उज्ज्वल और स्वच्छ होगा।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Let us present this master vision to the State Cabinet.",
        textHi: "आइए इस मास्टर विज़न को राज्य मंत्रिमंडल के समक्ष प्रस्तुत करें।"
      },
      {
        speaker: "Rajiv",
        avatar: "👨‍💼",
        textEn: "The presentation slides are ready.",
        textHi: "प्रस्तुति की स्लाइड्स तैयार हैं।"
      }
    ]
  },
  {
    id: "d07_sc02",
    title: "Manned Spaceflight Mission: Orbital Telemetry & Future States",
    titleHi: "मानवयुक्त अंतरिक्ष मिशन: कक्षीय टेलीमेट्री और भविष्य की स्थिति",
    context: "Mission Director Dr. Nair and Flight Surgeon Dr. Ritu discuss future crew and spacecraft states during orbit.",
    situation: "Using 'will be / won't be' for life support states, microgravity physiological conditions, and orbital parameters.",
    characters: ["Dr. Nair", "Dr. Ritu"],
    turns: [
      {
        speaker: "Dr. Nair",
        avatar: "👨‍🔬",
        textEn: "Dr. Ritu, in twenty-four hours, our crew module will be in low Earth orbit at four hundred kilometers altitude.",
        textHi: "डॉ. रितु, चौबीस घंटों में हमारा क्रू मॉड्यूल चार सौ किलोमीटर की ऊंचाई पर पृथ्वी की निचली कक्षा में होगा।"
      },
      {
        speaker: "Dr. Ritu",
        avatar: "👩‍⚕️",
        textEn: "That will be a historic moment for the nation! Will the cabin atmospheric pressure be identical to sea level?",
        textHi: "यह देश के लिए एक ऐतिहासिक क्षण होगा! क्या केबिन का वायुमंडलीय दबाव समुद्र तल के समान होगा?"
      },
      {
        speaker: "Dr. Nair",
        avatar: "👨‍🔬",
        textEn: "Yes, the environmental control system will be steady at 101.3 kilopascals with twenty-one percent oxygen.",
        textHi: "जी हाँ, पर्यावरण नियंत्रण प्रणाली 21% ऑक्सीजन के साथ 101.3 किलोपास्कल पर स्थिर रहेगी।"
      },
      {
        speaker: "Dr. Ritu",
        avatar: "👩‍⚕️",
        textEn: "Will the astronauts be in microgravity sickness during the initial twelve hours?",
        textHi: "क्या शुरुआती बारह घंटों के दौरान अंतरिक्ष यात्री शून्य गुरुत्वाकर्षण के कारण होने वाली शारीरिक परेशानी में होंगे?"
      },
      {
        speaker: "Dr. Nair",
        avatar: "👨‍🔬",
        textEn: "Mild spatial disorientation is natural, but their physical conditioning will be strong enough to adapt quickly.",
        textHi: "हल्का भटकाव स्वाभाविक है, लेकिन उनकी शारीरिक कंडीशनिंग इतनी मजबूत होगी कि वे तेजी से ढल जाएंगे।"
      },
      {
        speaker: "Dr. Ritu",
        avatar: "👩‍⚕️",
        textEn: "Will their biometric telemetry streams be real-time on our medical consoles?",
        textHi: "क्या उनके बायोमेट्रिक टेलीमेट्री डेटा हमारे मेडिकल कंसोल पर रीयल-टाइम दिखाई देंगे?"
      },
      {
        speaker: "Dr. Nair",
        avatar: "👨‍🔬",
        textEn: "Yes, continuous electrocardiograms, pulse oximetry, and body temperatures will be live without latency.",
        textHi: "जी हाँ, निरंतर ईसीजी, पल्स ऑक्सीमेट्री और शरीर का तापमान बिना किसी देरी के लाइव उपलब्ध होंगे।"
      },
      {
        speaker: "Dr. Ritu",
        avatar: "👩‍⚕️",
        textEn: "Won't cosmic radiation levels be dangerous during solar flare activity?",
        textHi: "क्या सौर ज्वाला गतिविधियों के दौरान कॉस्मिक विकिरण का स्तर खतरनाक नहीं होगा?"
      },
      {
        speaker: "Dr. Nair",
        avatar: "👨‍🔬",
        textEn: "No, the spacecraft radiation shielding will be sufficient against normal solar energetic particles.",
        textHi: "नहीं, अंतरिक्ष यान की विकिरण ढाल सामान्य सौर ऊर्जा कणों के खिलाफ पूरी तरह पर्याप्त होगी।"
      },
      {
        speaker: "Dr. Ritu",
        avatar: "👩‍⚕️",
        textEn: "Will the scheduled scientific microgravity experiments be active on Day 2?",
        textHi: "क्या निर्धारित वैज्ञानिक माइक्रोग्रैविटी प्रयोग दूसरे दिन से सक्रिय होंगे?"
      },
      {
        speaker: "Dr. Nair",
        avatar: "👨‍🔬",
        textEn: "Yes, protein crystal growth and metallurgy tests will be the primary focus on Tuesday.",
        textHi: "जी हाँ, प्रोटीन क्रिस्टल विकास और धातु विज्ञान परीक्षण मंगलवार को प्राथमिक ध्यान में होंगे।"
      },
      {
        speaker: "Dr. Ritu",
        avatar: "👩‍⚕️",
        textEn: "The crew will be in constant communication with the Bangalore ground tracking station.",
        textHi: "चालक दल बैंगलोर ग्राउंड ट्रैकिंग स्टेशन के साथ निरंतर संपर्क में रहेगा।"
      },
      {
        speaker: "Dr. Nair",
        avatar: "👨‍🔬",
        textEn: "Yes, our inter-satellite data relay system will be seamless across every orbital pass.",
        textHi: "जी हाँ, हमारी उपग्रह डेटा रिले प्रणाली हर कक्षीय चक्कर में निर्बाध होगी।"
      },
      {
        speaker: "Dr. Ritu",
        avatar: "👩‍⚕️",
        textEn: "The splashdown and recovery operations in the Arabian Sea will be ready by Friday morning.",
        textHi: "अरब सागर में लैंडिंग और बचाव अभियान शुक्रवार सुबह तक पूरी तरह तैयार रहेंगे।"
      },
      {
        speaker: "Dr. Nair",
        avatar: "👨‍🔬",
        textEn: "Yes, naval divers and specialized recovery helicopters will be on standby at designated coordinates.",
        textHi: "जी हाँ, नौसेना के गोताखोर और विशेष बचाव हेलीकॉप्टर निर्धारित निर्देशांकों पर स्टैंडबाय पर होंगे।"
      },
      {
        speaker: "Dr. Ritu",
        avatar: "👩‍⚕️",
        textEn: "I will be on the command bridge throughout the entire seventy-two-hour orbital flight.",
        textHi: "मैं पूरे 72 घंटे की कक्षीय उड़ान के दौरान कमांड ब्रिज पर मौजूद रहूँगी।"
      },
      {
        speaker: "Dr. Nair",
        avatar: "👨‍🔬",
        textEn: "Your medical vigilance will be vital for the crew's wellbeing.",
        textHi: "आपकी चिकित्सकीय सतर्कता अंतरिक्ष यात्रियों की कुशलता के लिए अत्यंत महत्वपूर्ण होगी।"
      },
      {
        speaker: "Dr. Ritu",
        avatar: "👩‍⚕️",
        textEn: "The mission will be an inspiring triumph for humanity.",
        textHi: "यह मिशन पूरी मानवता के लिए एक प्रेरणादायक विजय होगी।"
      },
      {
        speaker: "Dr. Nair",
        avatar: "👨‍🔬",
        textEn: "Let us review the pre-launch countdown protocols.",
        textHi: "आइए लॉन्च-पूर्व उल्टी गिनती प्रोटोकॉल की समीक्षा करें।"
      },
      {
        speaker: "Dr. Ritu",
        avatar: "👩‍⚕️",
        textEn: "Ready, Director.",
        textHi: "तैयार हूँ, निदेशक महोदय।"
      }
    ]
  },
  {
    id: "d07_sc03",
    title: "High-Altitude Himalayan Trek: Weather & Trail Readiness",
    titleHi: "उच्च हिमालयी ट्रेक: मौसम और रास्ते की भविष्य की स्थिति",
    context: "Expedition Leader Tenzing briefs trekker Rohan on tomorrow's summit ascent conditions.",
    situation: "Formulating future states ('The weather will be...', 'Will it be icy?', 'We will be ready', 'The winds won't be fierce').",
    characters: ["Tenzing", "Rohan"],
    turns: [
      {
        speaker: "Tenzing",
        avatar: "👨‍🌾",
        textEn: "Listen up, Rohan! Tomorrow morning's summit push will be our most challenging day on this expedition.",
        textHi: "ध्यान से सुनो, रोहन! कल सुबह चोटी की चढ़ाई इस अभियान का हमारा सबसे चुनौतीपूर्ण दिन होगा।"
      },
      {
        speaker: "Rohan",
        avatar: "🏃‍♂️",
        textEn: "I am ready, Tenzing! Will the temperature at the summit ridge be below zero?",
        textHi: "मैं तैयार हूँ, तेनजिंग! क्या चोटी की रिज पर तापमान शून्य से नीचे होगा?"
      },
      {
        speaker: "Tenzing",
        avatar: "👨‍🌾",
        textEn: "Yes, it will be around minus ten degrees Celsius before sunrise, so heavy down jackets will be essential.",
        textHi: "जी हाँ, सूर्योदय से पहले यह लगभग शून्य से दस डिग्री नीचे होगा, इसलिए भारी डाउन जैकेट अनिवार्य होंगे।"
      },
      {
        speaker: "Rohan",
        avatar: "🏃‍♂️",
        textEn: "Will the glacier crossing be slippery and icy in the early hours?",
        textHi: "क्या तड़के ग्लेशियर पार करते समय रास्ता बहुत फिसलन भरा और बर्फीला होगा?"
      },
      {
        speaker: "Tenzing",
        avatar: "👨‍🌾",
        textEn: "The hard ice will be crisp and firm, so crampons and ice axes will be mandatory on our boots.",
        textHi: "कड़ी बर्फ कुरकुरी और मजबूत होगी, इसलिए हमारे जूतों पर क्रैम्पन और हाथ में आइस एक्स अनिवार्य होंगे।"
      },
      {
        speaker: "Rohan",
        avatar: "🏃‍♂️",
        textEn: "Won't the high-altitude winds be turbulent along the knife-edge ridge?",
        textHi: "क्या संकरी रिज के साथ तेज ऊंचाई वाली हवाएं बहुत अशांत नहीं होंगी?"
      },
      {
        speaker: "Tenzing",
        avatar: "👨‍🌾",
        textEn: "No, according to the mountain meteorological satellite, the wind speed will be under fifteen knots.",
        textHi: "नहीं, पर्वतीय मौसम उपग्रह के अनुसार, हवा की गति पंद्रह समुद्री मील से कम होगी।"
      },
      {
        speaker: "Rohan",
        avatar: "🏃‍♂️",
        textEn: "Will the sunrise view from the 5,500-meter pass be clear?",
        textHi: "क्या 5,500 मीटर के दर्रे से सूर्योदय का नजारा बिल्कुल साफ होगा?"
      },
      {
        speaker: "Tenzing",
        avatar: "👨‍🌾",
        textEn: "The skies will be cloudless, and the panorama of Mount Kanchenjunga will be unforgettable.",
        textHi: "आसमान बादलों से मुक्त होगा, और कंचनजंगा पर्वत का विहंगम दृश्य अविस्मरणीय होगा।"
      },
      {
        speaker: "Rohan",
        avatar: "🏃‍♂️",
        textEn: "Will oxygen saturation levels be a concern above five thousand meters?",
        textHi: "क्या पांच हजार मीटर से ऊपर ऑक्सीजन का स्तर चिंता का विषय होगा?"
      },
      {
        speaker: "Tenzing",
        avatar: "👨‍🌾",
        textEn: "We will be well-acclimatized because our two rest days at base camp were sufficient.",
        textHi: "हम पूरी तरह से ढल चुके होंगे क्योंकि बेस कैंप में हमारे दो विश्राम के दिन पर्याप्त थे।"
      },
      {
        speaker: "Rohan",
        avatar: "🏃‍♂️",
        textEn: "What time will our departure from the high camp be?",
        textHi: "हाई कैंप से हमारे निकलने का समय क्या होगा?"
      },
      {
        speaker: "Tenzing",
        avatar: "👨‍🌾",
        textEn: "Wake-up will be at three o'clock, and we will be on the trail by three forty-five AM.",
        textHi: "जागने का समय तीन बजे होगा, और हम सुबह पौने चार बजे तक रास्ते पर होंगे।"
      },
      {
        speaker: "Rohan",
        avatar: "🏃‍♂️",
        textEn: "Our thermos flasks will be full of hot ginger tea.",
        textHi: "हमारे थर्मस फ्लास्क गर्म अदरक की चाय से भरे होंगे।"
      },
      {
        speaker: "Tenzing",
        avatar: "👨‍🌾",
        textEn: "Yes, adequate caloric intake and warm fluids will be crucial throughout the ascent.",
        textHi: "जी हाँ, चढ़ाई के दौरान पर्याप्त कैलोरी और गर्म तरल पदार्थ अत्यंत महत्वपूर्ण होंगे।"
      },
      {
        speaker: "Rohan",
        avatar: "🏃‍♂️",
        textEn: "I will be confident and focused on every single step tomorrow.",
        textHi: "कल मैं हर एक कदम पर पूरी तरह आश्वस्त और एकाग्र रहूँगा।"
      },
      {
        speaker: "Tenzing",
        avatar: "👨‍🌾",
        textEn: "Your physical stamina will be your greatest asset.",
        textHi: "आपकी शारीरिक सहनशक्ति आपकी सबसे बड़ी ताकत होगी।"
      },
      {
        speaker: "Rohan",
        avatar: "🏃‍♂️",
        textEn: "Tomorrow will be the proudest achievement of my trekking life.",
        textHi: "कल का दिन मेरे ट्रेकिंग जीवन की सबसे गौरवपूर्ण उपलब्धि होगी।"
      },
      {
        speaker: "Tenzing",
        avatar: "👨‍🌾",
        textEn: "Rest well tonight. Tomorrow will be glorious!",
        textHi: "आज रात अच्छी नींद लें। कल का दिन शानदार होगा!"
      },
      {
        speaker: "Rohan",
        avatar: "🏃‍♂️",
        textEn: "Goodnight, Tenzing!",
        textHi: "शुभ रात्रि, तेनजिंग!"
      }
    ]
  },
  {
    id: "d07_sc04",
    title: "Surgical Residency Orientation: Future Career & Clinical States",
    titleHi: "सर्जिकल रेजिडेंसी ओरिएंटेशन: भविष्य के करियर और नैदानिक स्थिति",
    context: "Dean of Surgery Dr. Kulkarni counsels newly admitted surgical resident Dr. Sameer.",
    situation: "Using 'will be / won't be' to discuss future residency demands, surgical competencies, and career milestones.",
    characters: ["Dr. Kulkarni", "Dr. Sameer"],
    turns: [
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "Welcome to the Department of Cardiothoracic Surgery, Dr. Sameer. Your residency will be three demanding years.",
        textHi: "कार्डियोथोरेसिक सर्जरी विभाग में आपका स्वागत है, डॉ. समीर। आपकी रेजिडेंसी तीन चुनौतीपूर्ण वर्षों की होगी।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🎓",
        textEn: "Thank you, Dean Kulkarni. I am eager to learn. Will our surgical rotations be in trauma and pediatric wards as well?",
        textHi: "धन्यवाद, डीन कुलकर्णी। मैं सीखने के लिए उत्सुक हूँ। क्या हमारे सर्जिकल रोटेशन ट्रॉमा और बाल चिकित्सा वार्डों में भी होंगे?"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "Yes, you will be in coronary bypass theaters, pediatric congenital units, and heart transplant suites.",
        textHi: "जी हाँ, आप कोरोनरी बाईपास थियेटरों, बाल जन्मजात इकाइयों और हृदय प्रत्यारोपण कक्षों में होंगे।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🎓",
        textEn: "Will the duty hours be extremely long during the first year of training?",
        textHi: "क्या प्रशिक्षण के पहले वर्ष के दौरान ड्यूटी के घंटे अत्यधिक लंबे होंगे?"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "The schedule will be intense, but compliance with national resident work-hour limits will be strictly monitored.",
        textHi: "शेड्यूल कड़ा होगा, लेकिन रेजिडेंट डॉक्टरों के काम के घंटों की राष्ट्रीय सीमा का सख्ती से पालन किया जाएगा।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🎓",
        textEn: "Won't the advanced robotic surgery modules be available to junior residents?",
        textHi: "क्या जूनियर रेजिडेंट्स के लिए उन्नत रोबोटिक सर्जरी मॉड्यूल उपलब्ध नहीं होंगे?"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "Simulation training on the Da Vinci surgical robot will be accessible from semester two onward.",
        textHi: "दा विंची सर्जिकल रोबोट पर सिमुलेशन प्रशिक्षण दूसरे सेमेस्टर से उपलब्ध होगा।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🎓",
        textEn: "Will our clinical research dissertations be eligible for publication in international journals?",
        textHi: "क्या हमारे नैदानिक शोध प्रबंध अंतरराष्ट्रीय पत्रिकाओं में प्रकाशन के योग्य होंगे?"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "Yes, our department research mentorship will be world-class; your papers will be globally recognized.",
        textHi: "जी हाँ, हमारे विभाग का शोध मार्गदर्शन विश्व स्तरीय होगा; आपके शोध पत्रों को वैश्विक मान्यता मिलेगी।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🎓",
        textEn: "The clinical learning curve will be steep, but I am ready.",
        textHi: "सीखने का दौर कठिन और चुनौतीपूर्ण होगा, लेकिन मैं तैयार हूँ।"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "Mistakes in the operating theater won't be tolerated; precision, discipline, and empathy will be non-negotiable.",
        textHi: "ऑपरेशन थियेटर में गलतियाँ बर्दाश्त नहीं की जाएंगी; सटीकता, अनुशासन और सहानुभूति अनिवार्य होगी।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🎓",
        textEn: "I will be completely dedicated to patient welfare and surgical excellence.",
        textHi: "मैं रोगी कल्याण और सर्जिकल उत्कृष्टता के लिए पूरी तरह समर्पित रहूँगा।"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "By the end of your third year, you will be a skilled and compassionate cardiothoracic surgeon.",
        textHi: "अपने तीसरे वर्ष के अंत तक, आप एक कुशल और संवेदनशील कार्डियोथोरेसिक सर्जन बनेंगे।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🎓",
        textEn: "That will be the proudest milestone of my life.",
        textHi: "यह मेरे जीवन का सबसे गौरवपूर्ण मील का पत्थर होगा।"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "Our senior faculty will be with you every step of the way.",
        textHi: "हमारे वरिष्ठ शिक्षक हर कदम पर आपके साथ होंगे।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🎓",
        textEn: "Thank you for your inspiring guidance, Dr. Kulkarni.",
        textHi: "डॉ. कुलकर्णी, आपके प्रेरणादायक मार्गदर्शन के लिए धन्यवाद।"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "Your surgical scrub-in schedule will be on the department notice board tomorrow morning.",
        textHi: "आपका सर्जिकल स्क्रब-इन शेड्यूल कल सुबह विभाग के नोटिस बोर्ड पर होगा।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🎓",
        textEn: "I will be there at six sharp.",
        textHi: "मैं ठीक छह बजे वहाँ उपस्थित रहूँगा।"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "Welcome to our surgical family, Sameer.",
        textHi: "हमारे सर्जिकल परिवार में आपका स्वागत है, समीर।"
      },
      {
        speaker: "Dr. Sameer",
        avatar: "👨‍🎓",
        textEn: "Thank you, Sir!",
        textHi: "धन्यवाद, सर!"
      }
    ]
  },
  {
    id: "d07_sc05",
    title: "International Film Festival Gala: Tomorrow's Premiere States",
    titleHi: "अंतरराष्ट्रीय फिल्म महोत्सव गाला: कल के प्रीमियर की स्थिति",
    context: "Film Producer Kabir and Lead Actress Rhea anticipate tomorrow night's red-carpet world premiere.",
    situation: "Using 'will be / won't be' for red carpet crowds, media presence, theater capacity, and emotional states.",
    characters: ["Kabir", "Rhea"],
    turns: [
      {
        speaker: "Kabir",
        avatar: "👨‍💼",
        textEn: "Rhea, tomorrow night will be the grand world premiere of our independent feature film at the festival!",
        textHi: "रिया, कल रात फिल्म समारोह में हमारी स्वतंत्र फीचर फिल्म का भव्य विश्व प्रीमियर होगा!"
      },
      {
        speaker: "Rhea",
        avatar: "👩‍🎨",
        textEn: "I can hardly contain my excitement! Will the red-carpet paparazzi and international media be present?",
        textHi: "मैं अपनी उत्सुकता रोक नहीं पा रही हूँ! क्या रेड-कार्पेट पर फोटोग्राफर और अंतरराष्ट्रीय मीडिया मौजूद होंगे?"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💼",
        textEn: "Yes, over one hundred broadcast journalists and film photographers from across Europe will be on the red carpet.",
        textHi: "जी हाँ, पूरे यूरोप से एक सौ से अधिक ब्रॉडकास्ट पत्रकार और फिल्म फोटोग्राफर रेड कार्पेट पर होंगे।"
      },
      {
        speaker: "Rhea",
        avatar: "👩‍🎨",
        textEn: "Will the main Grand Auditorium be fully packed to its fifteen-hundred-seat capacity?",
        textHi: "क्या मुख्य ग्रैंड ऑडिटोरियम अपनी पंद्रह सौ सीटों की पूरी क्षमता के साथ खचाखच भरा होगा?"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💼",
        textEn: "Every single ticket is sold out; cinema critics, jury members, and distributors will be in attendance.",
        textHi: "हर एक टिकट बिक चुका है; सिनेमा समीक्षक, जूरी सदस्य और वितरक सभी उपस्थित होंगे।"
      },
      {
        speaker: "Rhea",
        avatar: "👩‍🎨",
        textEn: "Won't the jury members be critical of our film's non-linear narrative structure?",
        textHi: "क्या जूरी सदस्य हमारी फिल्म की गैर-रेखीय कहानी संरचना को लेकर बहुत सख्त नहीं होंगे?"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💼",
        textEn: "No, the festival selection committee was unanimous in their praise; your dramatic performance will be a revelation.",
        textHi: "नहीं, महोत्सव चयन समिति अपनी प्रशंसा में एकमत थी; आपका अभिनय एक नया अनुभव साबित होगा।"
      },
      {
        speaker: "Rhea",
        avatar: "👩‍🎨",
        textEn: "Will the English subtitles and Dolby Atmos audio mix be completely seamless on the festival screen?",
        textHi: "क्या फेस्टिवल स्क्रीन पर अंग्रेजी सबटाइटल्स और डॉल्बी एटमॉस ऑडियो मिक्स पूरी तरह से सहज होंगे?"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💼",
        textEn: "Yes, the technical projection test was flawless this afternoon; visual sharpness and audio balance will be pristine.",
        textHi: "जी हाँ, आज दोपहर तकनीकी प्रोजेक्शन टेस्ट बिल्कुल सही रहा; दृश्य स्पष्टता और ध्वनि संतुलन बेदाग होगा।"
      },
      {
        speaker: "Rhea",
        avatar: "👩‍🎨",
        textEn: "The post-screening question-and-answer session will be twenty minutes long.",
        textHi: "स्क्रीनिंग के बाद प्रश्नोत्तर सत्र बीस मिनट लंबा होगा।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💼",
        textEn: "Yes, the festival director himself will be the moderator for our panel.",
        textHi: "जी हाँ, महोत्सव निदेशक स्वयं हमारे पैनल के सूत्रधार होंगे।"
      },
      {
        speaker: "Rhea",
        avatar: "👩‍🎨",
        textEn: "I will be wearing an elegant emerald green handwoven Banarasi gown.",
        textHi: "मैं एक सुंदर पन्ना-हरा हाथ से बुना हुआ बनारसी गाउन पहनूँगी।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💼",
        textEn: "You will be radiant, Rhea. It will be the defining evening of our artistic journey.",
        textHi: "रिया, आप बहुत आकर्षक लगेंगी। यह हमारी कलात्मक यात्रा की सबसे खास शाम होगी।"
      },
      {
        speaker: "Rhea",
        avatar: "👩‍🎨",
        textEn: "Our team's hard work over three difficult years will finally be rewarded.",
        textHi: "तीन कठिन वर्षों की हमारी टीम की कड़ी मेहनत आखिरकार सफल होगी।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💼",
        textEn: "The festival after-party will be at the seaside villa starting at eleven PM.",
        textHi: "महोत्सव की आफ्टर-पार्टी रात ग्यारह बजे समुद्र किनारे बने विला में होगी।"
      },
      {
        speaker: "Rhea",
        avatar: "👩‍🎨",
        textEn: "We will celebrate with our entire cast and crew.",
        textHi: "हम अपने पूरे कलाकारों और तकनीशियनों के साथ जश्न मनाएंगे।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💼",
        textEn: "Tomorrow will be etched in our memories forever.",
        textHi: "कल का दिन हमारी यादों में हमेशा के लिए दर्ज हो जाएगा।"
      },
      {
        speaker: "Rhea",
        avatar: "👩‍🎨",
        textEn: "See you on the red carpet tomorrow evening, Kabir!",
        textHi: "कल शाम रेड कार्पेट पर मिलते हैं, कबीर!"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍💼",
        textEn: "See you there, Rhea!",
        textHi: "वहाँ मिलते हैं, रिया!"
      },
      {
        speaker: "Rhea",
        avatar: "👩‍🎨",
        textEn: "Goodnight!",
        textHi: "शुभ रात्रि!"
      }
    ]
  },
  {
    id: "d07_sc06",
    title: "Agricultural Meteorology: Upcoming Monsoon & Soil Forecast",
    titleHi: "कृषि मौसम विज्ञान: आगामी मानसून और मिट्टी की स्थिति",
    context: "Agro-Meteorologist Dr. Rao briefs farmer representative Baldev on next month's monsoon forecast.",
    situation: "Deploying 'will be / won't be' for rainfall abundance, soil moisture levels, reservoir storage, and crop yields.",
    characters: ["Dr. Rao", "Baldev"],
    turns: [
      {
        speaker: "Dr. Rao",
        avatar: "👨‍🔬",
        textEn: "Baldev-ji, our supercomputer climate models indicate that this year's southwest monsoon will be one hundred and four percent of normal.",
        textHi: "बलदेव जी, हमारे सुपरकंप्यूटर जलवायु मॉडल बताते हैं कि इस साल का दक्षिण-पश्चिम मानसून सामान्य का 104% होगा।"
      },
      {
        speaker: "Baldev",
        avatar: "👨‍🌾",
        textEn: "That is wonderful news, Doctor! Will the onset of rains be timely in the northern plains by the third week of June?",
        textHi: "यह बहुत अच्छी खबर है, डॉक्टर! क्या जून के तीसरे सप्ताह तक उत्तरी मैदानों में बारिश का आगमन समय पर होगा?"
      },
      {
        speaker: "Dr. Rao",
        avatar: "👨‍🔬",
        textEn: "Yes, the monsoon arrival will be punctual, and precipitation across the agricultural heartland will be well-distributed.",
        textHi: "जी हाँ, मानसून का आगमन समय पर होगा, और कृषि क्षेत्रों में वर्षा का वितरण बहुत अच्छा होगा।"
      },
      {
        speaker: "Baldev",
        avatar: "👨‍🌾",
        textEn: "Will soil moisture levels in black cotton soil be ideal for early soybean and cotton sowing?",
        textHi: "क्या काली मिट्टी में नमी का स्तर सोयाबीन और कपास की अगेती बुवाई के लिए आदर्श होगा?"
      },
      {
        speaker: "Dr. Rao",
        avatar: "👨‍🔬",
        textEn: "Yes, topsoil moisture will be optimum after the pre-monsoon showers in the second week of June.",
        textHi: "जी हाँ, जून के दूसरे सप्ताह में प्री-मानसून फुहारों के बाद ऊपरी मिट्टी की नमी अनुकूल होगी।"
      },
      {
        speaker: "Baldev",
        avatar: "👨‍🌾",
        textEn: "Won't there be prolonged dry spells during the crucial flowering stage in August?",
        textHi: "क्या अगस्त में फूलों के आने के महत्वपूर्ण चरण के दौरान लंबे समय तक सूखा नहीं पड़ेगा?"
      },
      {
        speaker: "Dr. Rao",
        avatar: "👨‍🔬",
        textEn: "No, the Indian Ocean Dipole is positive, so rain shadow dry spells won't be a risk this season.",
        textHi: "नहीं, हिंद महासागर द्विध्रुव सकारात्मक है, इसलिए इस मौसम में लंबे सूखे का कोई खतरा नहीं होगा।"
      },
      {
        speaker: "Baldev",
        avatar: "👨‍🌾",
        textEn: "Will irrigation reservoir levels be full by the end of September?",
        textHi: "क्या सितंबर के अंत तक सिंचाई जलाशयों का जलस्तर पूरा भर जाएगा?"
      },
      {
        speaker: "Dr. Rao",
        avatar: "👨‍🔬",
        textEn: "Yes, major river dam reservoirs will be at ninety-five percent storage capacity, which will be a huge boon for winter wheat.",
        textHi: "जी हाँ, प्रमुख नदी बांधों के जलाशय 95% भराव क्षमता पर होंगे, जो सर्दियों के गेहूं के लिए बहुत बड़ा वरदान होगा।"
      },
      {
        speaker: "Baldev",
        avatar: "👨‍🌾",
        textEn: "The harvest yield will be record-breaking this Kharif season!",
        textHi: "इस खरीफ सीजन में फसल की पैदावार रिकॉर्ड तोड़ होगी!"
      },
      {
        speaker: "Dr. Rao",
        avatar: "👨‍🔬",
        textEn: "Yes, foodgrain production will be very high if fertilizer distribution is timely.",
        textHi: "जी हाँ, यदि खाद का वितरण समय पर हुआ तो खाद्यान्न उत्पादन बहुत अधिक होगा।"
      },
      {
        speaker: "Baldev",
        avatar: "👨‍🌾",
        textEn: "Our village farmers will be relieved after last year's erratic rainfall.",
        textHi: "पिछले साल की अनियमित बारिश के बाद हमारे गांव के किसानों को बड़ी राहत मिलेगी।"
      },
      {
        speaker: "Dr. Rao",
        avatar: "👨‍🔬",
        textEn: "Automated weather advisories on your smartphones will be active twice daily throughout the season.",
        textHi: "पूरे मौसम में आपके स्मार्टफोन पर दिन में दो बार स्वचालित मौसम सलाह सक्रिय रहेगी।"
      },
      {
        speaker: "Baldev",
        avatar: "👨‍🌾",
        textEn: "These scientific forecasts will be invaluable for our sowing decisions.",
        textHi: "ये वैज्ञानिक भविष्यवाणियां हमारे बुवाई के फैसलों के लिए अमूल्य होंगी।"
      },
      {
        speaker: "Dr. Rao",
        avatar: "👨‍🔬",
        textEn: "Our agricultural university helpline will be open 24/7 for all farming queries.",
        textHi: "हमारे कृषि विश्वविद्यालय की हेल्पलाइन खेती के सभी सवालों के लिए 24/7 खुली रहेगी।"
      },
      {
        speaker: "Baldev",
        avatar: "👨‍🌾",
        textEn: "We are deeply thankful for the Meteorological Department's support.",
        textHi: "हम मौसम विभाग के इस सहयोग के लिए दिल से आभारी हैं।"
      },
      {
        speaker: "Dr. Rao",
        avatar: "👨‍🔬",
        textEn: "Prosperity in the fields will be a victory for the entire nation.",
        textHi: "खेतों में खुशहाली पूरे देश के लिए एक बड़ी जीत होगी।"
      },
      {
        speaker: "Baldev",
        avatar: "👨‍🌾",
        textEn: "I will share this encouraging bulletin at the village panchayat tonight.",
        textHi: "मैं आज रात ग्राम पंचायत में यह उत्साहवर्धक बुलेटिन साझा करूँगा।"
      },
      {
        speaker: "Dr. Rao",
        avatar: "👨‍🔬",
        textEn: "Have a prosperous harvest, Baldev-ji!",
        textHi: "आपकी फसल समृद्ध और भरपूर रहे, बलदेव जी!"
      },
      {
        speaker: "Baldev",
        avatar: "👨‍🌾",
        textEn: "Thank you, Doctor!",
        textHi: "धन्यवाद, डॉक्टर!"
      }
    ]
  },
  {
    id: "d07_sc07",
    title: "Corporate Headquarters Inauguration: Next Week's Readiness",
    titleHi: "कॉर्पोरेट मुख्यालय उद्घाटन: अगले सप्ताह की तैयारी की स्थिति",
    context: "Facilities Director Meenakshi and Managing Director Mr. Singhania review building readiness for next Monday's launch.",
    situation: "Using 'will be / won't be' for readiness states, infrastructure completion, audio-visual testing, and guest reception.",
    characters: ["Meenakshi", "Mr. Singhania"],
    turns: [
      {
        speaker: "Mr. Singhania",
        avatar: "👨‍💼",
        textEn: "Meenakshi, will our new corporate headquarters be fully ready for the grand inauguration next Monday?",
        textHi: "मीनाक्षी, क्या अगले सोमवार को भव्य उद्घाटन के लिए हमारा नया कॉर्पोरेट मुख्यालय पूरी तरह तैयार होगा?"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Yes, Mr. Singhania! All twelve floors will be completely furnished and spotless by Friday evening.",
        textHi: "जी हाँ, मिस्टर सिंघानिया! शुक्रवार शाम तक सभी बारह मंजिलें पूरी तरह से सुसज्जित और बेदाग होंगी।"
      },
      {
        speaker: "Mr. Singhania",
        avatar: "👨‍💼",
        textEn: "Will the main reception atrium and interactive digital brand wall be functional?",
        textHi: "क्या मुख्य स्वागत कक्ष (एट्रियम) और डिजिटल ब्रांड वॉल चालू स्थिति में होंगे?"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Yes, the 8K micro-LED display wall and holographic product showcases will be operational on Sunday.",
        textHi: "जी हाँ, 8K माइक्रो-एलईडी डिस्प्ले वॉल और होलोग्राफिक उत्पाद शोकेस रविवार तक पूरी तरह चालू होंगे।"
      },
      {
        speaker: "Mr. Singhania",
        avatar: "👨‍💼",
        textEn: "Will the high-speed optical fiber internet bandwidth be active across all workstations?",
        textHi: "क्या सभी वर्कस्टेशनों पर हाई-स्पीड ऑप्टिकल फाइबर इंटरनेट पूरी तरह सक्रिय होगा?"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Yes, dual redundant 10-Gigabit fiber lines will be live with seamless Wi-Fi 7 roaming throughout the tower.",
        textHi: "जी हाँ, दोहरी 10-गीगाबिट फाइबर लाइनें पूरे टावर में वाई-फाई 7 रोमिंग के साथ चालू रहेंगी।"
      },
      {
        speaker: "Mr. Singhania",
        avatar: "👨‍💼",
        textEn: "Won't the basement automated parking system be congested when four hundred guests arrive at 10 AM?",
        textHi: "क्या सुबह 10 बजे जब 400 मेहमान आएंगे, तब बेसमेंट की स्वचालित पार्किंग में भीड़ नहीं होगी?"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "No, valet teams and automated license plate recognition scanners will be on duty at all three entrance ramps.",
        textHi: "नहीं, तीनों प्रवेश द्वारों पर वैले टीमें और स्वचालित नंबर प्लेट स्कैनर ड्यूटी पर तैनात होंगे।"
      },
      {
        speaker: "Mr. Singhania",
        avatar: "👨‍💼",
        textEn: "Will the executive boardroom telepresence system be calibrated for the global video link with New York?",
        textHi: "क्या न्यूयॉर्क के साथ वैश्विक वीडियो लिंक के लिए बोर्डरूम का टेलीप्रेजेंस सिस्टम कैलिब्रेटेड होगा?"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Yes, the multi-camera acoustic tracking system will be tested on Saturday morning with the US tech team.",
        textHi: "जी हाँ, अमेरिकी तकनीकी टीम के साथ शनिवार सुबह मल्टी-कैमरा ट्रैकिंग सिस्टम का परीक्षण किया जाएगा।"
      },
      {
        speaker: "Mr. Singhania",
        avatar: "👨‍💼",
        textEn: "The rooftop garden cafeteria will be a pleasant relaxation space for our employees.",
        textHi: "छत पर बना गार्डन कैफेटेरिया हमारे कर्मचारियों के लिए विश्राम की एक सुखद जगह होगी।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Yes, the organic salad bar and artisan espresso stations will be open on opening day.",
        textHi: "जी हाँ, ऑर्गेनिक सलाद बार और एस्प्रेसो स्टेशन उद्घाटन के दिन खुले रहेंगे।"
      },
      {
        speaker: "Mr. Singhania",
        avatar: "👨‍💼",
        textEn: "Our new workplace will be an inspiring hub of innovation and collaboration.",
        textHi: "हमारा नया कार्यस्थल नवाचार और सहयोग का एक प्रेरणादायक केंद्र होगा।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "The employees will be ecstatic when they enter this state-of-the-art building.",
        textHi: "जब कर्मचारी इस अत्याधुनिक इमारत में प्रवेश करेंगे तो वे बेहद खुश होंगे।"
      },
      {
        speaker: "Mr. Singhania",
        avatar: "👨‍💼",
        textEn: "Security access cards will be distributed at the welcome desk.",
        textHi: "सुरक्षा एक्सेस कार्ड स्वागत डेस्क पर वितरित किए जाएंगे।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Yes, smart RFID badges will be pre-printed for every single staff member.",
        textHi: "जी हाँ, हर एक कर्मचारी के लिए स्मार्ट आरएफआईडी बैज पहले से मुद्रित होंगे।"
      },
      {
        speaker: "Mr. Singhania",
        avatar: "👨‍💼",
        textEn: "Outstanding leadership on this construction project, Meenakshi!",
        textHi: "मीनाक्षी, इस निर्माण परियोजना पर आपका नेतृत्व उत्कृष्ट रहा है!"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Thank you, Mr. Singhania. It will be a triumphant launch day next Monday.",
        textHi: "धन्यवाद, मिस्टर सिंघानिया। अगले सोमवार को उद्घाटन का दिन अत्यंत सफल रहेगा।"
      },
      {
        speaker: "Mr. Singhania",
        avatar: "👨‍💼",
        textEn: "I look forward to cutting the ribbon.",
        textHi: "मैं फीता काटने के लिए उत्सुक हूँ।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Everything will be ready, Sir!",
        textHi: "सब कुछ तैयार रहेगा, सर!"
      }
    ]
  },
  {
    id: "d07_sc08",
    title: "University Convocation Day Tomorrow: Ceremony & Dignitary States",
    titleHi: "विश्वविद्यालय दीक्षांत समारोह: कल के आयोजन और अतिथियों की स्थिति",
    context: "Dean of Academic Affairs Dr. Sen and Valedictorian Student President Alisha review tomorrow's convocation ceremony.",
    situation: "Using 'will be / won't be' for convocation readiness, stage seating, medal award status, and auditorium capacity.",
    characters: ["Dr. Sen", "Alisha"],
    turns: [
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Good afternoon, Alisha! Tomorrow will be our university's golden jubilee annual convocation.",
        textHi: "शुभ दोपहर, अलीशा! कल हमारे विश्वविद्यालय का स्वर्ण जयंती वार्षिक दीक्षांत समारोह होगा।"
      },
      {
        speaker: "Alisha",
        avatar: "👩‍🎓",
        textEn: "Good afternoon, Dean Sen! It will be such an emotional and memorable day for all two thousand graduating students.",
        textHi: "शुभ दोपहर, डीन सेन! सभी दो हजार स्नातक छात्रों के लिए यह बहुत भावुक और यादगार दिन होगा।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Will the ceremonial robes and academic caps be distributed to all graduating batches by 5 PM today?",
        textHi: "क्या आज शाम 5 बजे तक सभी दीक्षांत गाउन और टोपियां सभी छात्रों को वितरित कर दी जाएंगी?"
      },
      {
        speaker: "Alisha",
        avatar: "👩‍🎓",
        textEn: "Yes, the student council volunteers are at the distribution counters; ninety percent of gowns are already collected.",
        textHi: "जी हाँ, छात्र परिषद के स्वयंसेवक काउंटरों पर हैं; नब्बे प्रतिशत गाउन पहले ही बांटे जा चुके हैं।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Will the Chief Guest, the President of the National Science Academy, be on campus by nine o'clock tomorrow?",
        textHi: "क्या मुख्य अतिथि, राष्ट्रीय विज्ञान अकादमी के अध्यक्ष, कल सुबह नौ बजे तक परिसर में उपस्थित होंगे?"
      },
      {
        speaker: "Alisha",
        avatar: "👩‍🎓",
        textEn: "Yes, the ceremonial escort will be at the VIP guest house at eight thirty AM sharp.",
        textHi: "जी हाँ, औपचारिक एस्कॉर्ट ठीक सुबह साढ़े आठ बजे वीआईपी गेस्ट हाउस में मौजूद होगा।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Will your valedictory address be under ten minutes?",
        textHi: "क्या आपका विदाई भाषण दस मिनट से कम का होगा?"
      },
      {
        speaker: "Alisha",
        avatar: "👩‍🎓",
        textEn: "Yes, it will be precisely eight minutes long, focusing on innovation, ethics, and social responsibility.",
        textHi: "जी हाँ, यह नवाचार, नैतिकता और सामाजिक जिम्मेदारी पर केंद्रित ठीक आठ मिनट का होगा।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Won't the main auditorium be overcrowded with parents and guardians?",
        textHi: "क्या माता-पिता और अभिभावकों की उपस्थिति से मुख्य सभागार में अत्यधिक भीड़ नहीं होगी?"
      },
      {
        speaker: "Alisha",
        avatar: "👩‍🎓",
        textEn: "No, live satellite video broadcasts will be in three overflow air-conditioned auditoriums across campus.",
        textHi: "नहीं, परिसर के तीन अन्य वातानुकूलित सभागारों में सीधा वीडियो प्रसारण उपलब्ध होगा।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Will the gold medals and degree certificates be organized alphabetically on the main stage table?",
        textHi: "क्या मुख्य मंच की मेज पर स्वर्ण पदक और डिग्री प्रमाण पत्र वर्णमाला के क्रम में व्यवस्थित होंगे?"
      },
      {
        speaker: "Alisha",
        avatar: "👩‍🎓",
        textEn: "Yes, the registrar's team has cataloged every single leather-bound diploma folder.",
        textHi: "जी हाँ, कुलसचिव की टीम ने हर एक डिग्री फोल्डर को क्रमबद्ध तरीके से व्यवस्थित कर लिया है।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Tomorrow's occasion will be a landmark celebration of your academic excellence.",
        textHi: "कल का अवसर आपकी शैक्षणिक उत्कृष्टता का एक ऐतिहासिक उत्सव होगा।"
      },
      {
        speaker: "Alisha",
        avatar: "👩‍🎓",
        textEn: "Our parents will be filled with immense pride and joy.",
        textHi: "हमारे माता-पिता अपार गर्व और खुशी से भर जाएंगे।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "The convocation musical fanfare will be performed live by the university brass quintet.",
        textHi: "विश्वविद्यालय के ब्रास बैंड द्वारा दीक्षांत समारोह का संगीत लाइव प्रस्तुत किया जाएगा।"
      },
      {
        speaker: "Alisha",
        avatar: "👩‍🎓",
        textEn: "The atmosphere will be majestic and dignified.",
        textHi: "माहौल भव्य और गरिमामय होगा।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "I will be immensely proud to hand over your University Gold Medal tomorrow, Alisha.",
        textHi: "अलीशा, कल आपको विश्वविद्यालय स्वर्ण पदक सौंपते हुए मुझे बहुत गर्व होगा।"
      },
      {
        speaker: "Alisha",
        avatar: "👩‍🎓",
        textEn: "Thank you for being my mentor and guide throughout these four years, Dr. Sen.",
        textHi: "डॉ. सेन, इन चार वर्षों में मेरे गुरु और मार्गदर्शक बनने के लिए धन्यवाद।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Get plenty of rest tonight. Tomorrow will be unforgettable!",
        textHi: "आज रात पूरी नींद लें। कल का दिन अविस्मरणीय होगा!"
      },
      {
        speaker: "Alisha",
        avatar: "👩‍🎓",
        textEn: "See you tomorrow morning, Sir!",
        textHi: "कल सुबह मिलते हैं, सर!"
      }
    ]
  },
  {
    id: "d07_sc09",
    title: "Eco-Resort Island Sanctuary: Sustainable Future States",
    titleHi: "इको-रिसॉर्ट द्वीप अभयारण्य: पर्यावरण-अनुकूल भविष्य की स्थिति",
    context: "Landscape Architect Neil and Environmental Investor Maya discuss the completion states of an offshore coral eco-resort.",
    situation: "Using 'will be / won't be' for zero-waste states, solar generation, coral protection, and guest experiences.",
    characters: ["Neil", "Maya"],
    turns: [
      {
        speaker: "Maya",
        avatar: "👩‍💼",
        textEn: "Neil, will our private island eco-resort be completely off-grid and self-sustaining by December?",
        textHi: "नील, क्या हमारा निजी द्वीप इको-रिसॉर्ट दिसंबर तक पूरी तरह से बिजली ग्रिड से मुक्त और आत्मनिर्भर होगा?"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎨",
        textEn: "Yes, Maya! Floating solar farms and small ocean current turbines will be our one hundred percent renewable energy source.",
        textHi: "जी हाँ, माया! तैरते हुए सोलर फार्म और समुद्री धारा टरबाइन हमारी सौ प्रतिशत नवीकरणीय ऊर्जा का स्रोत होंगे।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💼",
        textEn: "Will all thirty water villas be built from sustainable, locally harvested bamboo and reclaimed teak?",
        textHi: "क्या सभी तीस वाटर विला पर्यावरण-अनुकूल स्थानीय बांस और पुनः उपयोग की गई सागौन की लकड़ी से बने होंगे?"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎨",
        textEn: "Yes, every structural material will be non-toxic, biodegradable, and thermally insulated.",
        textHi: "जी हाँ, हर निर्माण सामग्री गैर-विषाक्त, बायोडिग्रेडेबल और प्राकृतिक रूप से तापमान नियंत्रित होगी।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💼",
        textEn: "Will the surrounding coral reef lagoon be fully protected from motorboat propeller damage?",
        textHi: "क्या आसपास के कोरल रीफ लैगून को मोटरबोट के प्रोपेलर से होने वाले नुकसान से पूरी तरह बचाया जाएगा?"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎨",
        textEn: "Yes, motorized craft won't be allowed within one kilometer; only silent electric catamarans and kayaks will be permitted.",
        textHi: "जी हाँ, एक किलोमीटर के दायरे में मोटर चालित नौकाओं की अनुमति नहीं होगी; केवल शांत इलेक्ट्रिक कैटामरन और कश्ती की अनुमति होगी।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💼",
        textEn: "Won't freshwater desalination be energy-intensive on an isolated coral atoll?",
        textHi: "क्या एक अलग-थलग कोरल द्वीप पर खारे पानी को मीठा बनाना बहुत अधिक ऊर्जा की खपत वाला नहीं होगा?"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎨",
        textEn: "No, solar-thermal reverse osmosis systems will be powered entirely by excess daytime solar energy.",
        textHi: "नहीं, सौर-थर्मल रिवर्स ऑस्मोसिस सिस्टम पूरी तरह से दिन के समय की अतिरिक्त सौर ऊर्जा से संचालित होंगे।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💼",
        textEn: "Will the resort's organic permaculture gardens be sufficient for the farm-to-table restaurant?",
        textHi: "क्या रिसॉर्ट के जैविक बगीचे रेस्टोरेंट की ताज़ी सब्जियों की जरूरतों के लिए पर्याप्त होंगे?"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎨",
        textEn: "Yes, hydroponic vertical greenhouse towers will be fully productive with heirloom vegetables and herbs.",
        textHi: "जी हाँ, हाइड्रोपोनिक वर्टिकल ग्रीनहाउस टावर विभिन्न प्रकार की ताज़ी सब्जियों और जड़ी-बूटियों से भरपूर होंगे।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💼",
        textEn: "Single-use plastics won't be present in any form across the entire island.",
        textHi: "पूरे द्वीप पर किसी भी रूप में सिंगल-यूज़ प्लास्टिक मौजूद नहीं होगा।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎨",
        textEn: "Yes, bamboo fiber, glass, and clay containers will be our universal packaging standards.",
        textHi: "जी हाँ, बांस के रेशे, कांच और मिट्टी के बर्तन हमारे सार्वभौमिक पैकेजिंग मानक होंगे।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💼",
        textEn: "The guest experience will be one of deep mindfulness, luxury, and ecological harmony.",
        textHi: "अतिथियों का अनुभव गहरी शांति, विलासिता और पारिस्थितिक सद्भाव से परिपूर्ण होगा।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎨",
        textEn: "Our marine biology learning center will be open for coral restoration dives daily.",
        textHi: "हमारा समुद्री जीवविज्ञान केंद्र कोरल बहाली डाइविंग के लिए प्रतिदिन खुला रहेगा।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💼",
        textEn: "This island sanctuary will be a prototype for the future of global eco-tourism.",
        textHi: "यह द्वीप अभयारण्य वैश्विक पर्यावरण-पर्यटन के भविष्य के लिए एक आदर्श मॉडल होगा।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎨",
        textEn: "The construction timeline will be finished ahead of schedule by late November.",
        textHi: "निर्माण कार्य नवंबर के अंत तक समय से पहले पूरा हो जाएगा।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💼",
        textEn: "I will be thrilled to welcome our first guests on New Year's Eve.",
        textHi: "नए साल की पूर्व संध्या पर हमारे पहले मेहमानों का स्वागत करते हुए मुझे बहुत खुशी होगी।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎨",
        textEn: "The island will be waiting in all its natural splendor.",
        textHi: "द्वीप अपने पूरे प्राकृतिक वैभव के साथ तैयार रहेगा।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💼",
        textEn: "Splendid work, Neil!",
        textHi: "नील, शानदार काम!"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎨",
        textEn: "Thank you, Maya!",
        textHi: "धन्यवाद, माया!"
      }
    ]
  },
  {
    id: "d07_sc10",
    title: "Next-Gen Quantum Computing Roadmap: Future Technological States",
    titleHi: "नेक्स्ट-जेन क्वांटम कंप्यूटिंग रोडमैप: भविष्य की तकनीकी स्थिति",
    context: "Quantum Physicist Dr. Arvind and Chief Technology Officer Divya discuss future quantum processor milestones.",
    situation: "Using 'will be / won't be' for quantum coherence states, qubit scaling, cryptographic security, and computational speed.",
    characters: ["Dr. Arvind", "Divya"],
    turns: [
      {
        speaker: "Divya",
        avatar: "👩‍💻",
        textEn: "Dr. Arvind, will our next-generation quantum chip be operational with one thousand logical qubits by next year?",
        textHi: "डॉ. अरविंद, क्या हमारा अगली पीढ़ी का क्वांटम चिप अगले साल तक एक हजार लॉजिकल क्यूबिट्स के साथ चालू होगा?"
      },
      {
        speaker: "Dr. Arvind",
        avatar: "👨‍🔬",
        textEn: "Yes, Divya! Our topological qubit error-correction architecture will be fully integrated by the third quarter.",
        textHi: "जी हाँ, दिव्या! हमारी टोपोलॉजिकल क्यूबिट त्रुटि-सुधार संरचना तीसरी तिमाही तक पूरी तरह एकीकृत हो जाएगी।"
      },
      {
        speaker: "Divya",
        avatar: "👩‍💻",
        textEn: "Will the cryogenic dilution refrigerator temperature be steady at fifteen millikelvin?",
        textHi: "क्या क्रायोजेनिक रेफ्रिजरेटर का तापमान पंद्रह मिलीकेल्विन पर स्थिर रहेगा?"
      },
      {
        speaker: "Dr. Arvind",
        avatar: "👨‍🔬",
        textEn: "Yes, the super-cooling chamber will be colder than deep interstellar space without thermal fluctuations.",
        textHi: "जी हाँ, सुपर-कूलिंग चैंबर बिना किसी तापमान परिवर्तन के गहरे अंतरिक्ष से भी अधिक ठंडा होगा।"
      },
      {
        speaker: "Divya",
        avatar: "👩‍💻",
        textEn: "Will quantum decoherence times be extended past ten milliseconds?",
        textHi: "क्या क्वांटम डिकॉहेरेंस का समय दस मिलीसेकंड से अधिक बढ़ जाएगा?"
      },
      {
        speaker: "Dr. Arvind",
        avatar: "👨‍🔬",
        textEn: "Yes, with superconducting niobium resonators, quantum state coherence will be fifty times more stable.",
        textHi: "जी हाँ, सुपरकंडक्टिंग नाइओबियम रेज़ोनेटर के साथ, क्वांटम स्थिति की स्थिरता पचास गुना अधिक होगी।"
      },
      {
        speaker: "Divya",
        avatar: "👩‍💻",
        textEn: "Won't classical supercomputers be rendered obsolete for complex molecular drug simulations?",
        textHi: "क्या जटिल आणविक दवा सिमुलेशन के लिए पारंपरिक सुपरकंप्यूटर पुराने नहीं पड़ जाएंगे?"
      },
      {
        speaker: "Dr. Arvind",
        avatar: "👨‍🔬",
        textEn: "Calculations that take ten thousand years on classical clusters will be solvable in three minutes on our quantum processor.",
        textHi: "जिन गणनाओं में पारंपरिक कंप्यूटरों पर दस हजार साल लगते हैं, वे हमारे क्वांटम प्रोसेसर पर तीन मिनट में हल हो जाएंगी।"
      },
      {
        speaker: "Divya",
        avatar: "👩‍💻",
        textEn: "Will our post-quantum cryptography algorithms be impervious to quantum decryption attacks?",
        textHi: "क्या हमारे क्वांटम-उपरांत क्रिप्टोग्राफी एल्गोरिदम क्वांटम डिक्रिप्शन हमलों से पूरी तरह सुरक्षित होंगे?"
      },
      {
        speaker: "Dr. Arvind",
        avatar: "👨‍🔬",
        textEn: "Yes, lattice-based mathematical encryption will be unbreakable even by quantum factoring algorithms.",
        textHi: "जी हाँ, लैटिस-आधारित गणितीय एन्क्रिप्शन को क्वांटम एल्गोरिदम द्वारा भी नहीं तोड़ा जा सकेगा।"
      },
      {
        speaker: "Divya",
        avatar: "👩‍💻",
        textEn: "Cloud access to the quantum processing unit will be live for university researchers globally.",
        textHi: "क्वांटम प्रोसेसिंग यूनिट का क्लाउड एक्सेस दुनिया भर के विश्वविद्यालय शोधकर्ताओं के लिए लाइव होगा।"
      },
      {
        speaker: "Dr. Arvind",
        avatar: "👨‍🔬",
        textEn: "Yes, an open-source Python SDK will be available for global developers to write quantum algorithms.",
        textHi: "जी हाँ, वैश्विक डेवलपर्स के लिए क्वांटम एल्गोरिदम लिखने हेतु एक ओपन-सोर्स पायथन एसडीके उपलब्ध होगा।"
      },
      {
        speaker: "Divya",
        avatar: "👩‍💻",
        textEn: "Our research company will be at the very forefront of the second quantum revolution.",
        textHi: "हमारी शोध कंपनी दूसरी क्वांटम क्रांति में सबसे आगे होगी।"
      },
      {
        speaker: "Dr. Arvind",
        avatar: "👨‍🔬",
        textEn: "The scientific breakthroughs in clean battery chemistry and materials science will be limitless.",
        textHi: "स्वच्छ बैटरी रसायन विज्ञान और पदार्थ विज्ञान में वैज्ञानिक सफलताएं असीमित होंगी।"
      },
      {
        speaker: "Divya",
        avatar: "👩‍💻",
        textEn: "I will be proud to announce our quantum supremacy benchmark at the World Science Forum.",
        textHi: "वर्ल्ड साइंस फोरम में हमारे क्वांटम वर्चस्व बेंचमार्क की घोषणा करते हुए मुझे बहुत गर्व होगा।"
      },
      {
        speaker: "Dr. Arvind",
        avatar: "👨‍🔬",
        textEn: "The data whitepaper will be published in Nature next month.",
        textHi: "डेटा श्वेतपत्र अगले महीने नेचर पत्रिका में प्रकाशित होगा।"
      },
      {
        speaker: "Divya",
        avatar: "👩‍💻",
        textEn: "The entire technology world will be watching with anticipation.",
        textHi: "पूरी तकनीकी दुनिया उत्सुकता के साथ देख रही होगी।"
      },
      {
        speaker: "Dr. Arvind",
        avatar: "👨‍🔬",
        textEn: "The future of computation will be quantum.",
        textHi: "कंप्यूटिंग का भविष्य क्वांटम होगा।"
      },
      {
        speaker: "Divya",
        avatar: "👩‍💻",
        textEn: "Let us review the latest qubit fidelity logs.",
        textHi: "आइए नवीनतम क्यूबिट निष्ठा लॉग की समीक्षा करें।"
      },
      {
        speaker: "Dr. Arvind",
        avatar: "👨‍🔬",
        textEn: "The logs are on your monitor.",
        textHi: "लॉग आपके मॉनिटर पर हैं।"
      }
    ]
  }
];
