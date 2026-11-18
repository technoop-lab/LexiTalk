import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const day06Dialogues = [
  {
    id: "d06_sc01",
    title: "Post-Cyclone City Survey: Past Environmental Conditions",
    titleHi: "तूफान के बाद शहर का सर्वेक्षण: पिछली पर्यावरणीय परिस्थितियाँ",
    context: "Disaster Management Officer Vikram and Municipal Engineer Shalini review yesterday's severe cyclone impact.",
    situation: "Mastering Past State of Being ('was / were', 'wasn't / weren't', past conditions, damage states, safety states).",
    characters: ["Vikram", "Shalini"],
    turns: [
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Good morning, Shalini. How was the coastal sector during yesterday's severe cyclone?",
        textHi: "शुभ प्रभात, शालिनी। कल के भीषण चक्रवाती तूफान के दौरान तटीय क्षेत्र की क्या स्थिति थी?"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "Good morning, Vikram. The wind was extremely ferocious, and the coastal roads were completely inundated.",
        textHi: "शुभ प्रभात, विक्रम। हवा बेहद प्रचंड थी, और तटीय सड़कें पूरी तरह जलमग्न थीं।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Were the electrical substations in Sector 4 operational during the storm?",
        textHi: "क्या तूफान के दौरान सेक्टर 4 के बिजली सबस्टेशन चालू थे?"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "No, they were offline for twelve hours because fallen trees were across the high-voltage transmission lines.",
        textHi: "नहीं, वे बारह घंटे तक बंद थे क्योंकि गिरे हुए पेड़ हाई-वोल्टेज ट्रांसमिशन लाइनों पर थे।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Was the emergency drainage pump station functional at the sea wall?",
        textHi: "क्या समुद्र की दीवार के पास आपातकालीन जल निकासी पंप स्टेशन काम कर रहा था?"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "Yes, it was active throughout the night, so the inner residential wards were safe from severe flooding.",
        textHi: "जी हाँ, वह पूरी रात चालू था, इसलिए अंदरूनी आवासीय वार्ड भीषण बाढ़ से सुरक्षित थे।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Were the relief shelters adequately stocked with dry rations and drinking water?",
        textHi: "क्या राहत शिविरों में सूखे राशन और पीने के पानी का पर्याप्त भंडार था?"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "Yes, they were fully equipped, and medical volunteers were on duty at all twenty relief centers.",
        textHi: "जी हाँ, वे पूरी तरह सुसज्जित थे, और सभी बीस राहत केंद्रों पर चिकित्सा स्वयंसेवक ड्यूटी पर तैनात थे।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Was there any structural collapse reported from the heritage district?",
        textHi: "क्या ऐतिहासिक हेरिटेज जिले से किसी इमारत के ढहने की सूचना थी?"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "Fortunately, no. The old clock tower was sturdy, and the ancient stone walls were undamaged.",
        textHi: "सौभाग्य से, नहीं। पुराना घंटाघर मजबूत था, और प्राचीन पत्थर की दीवारें सुरक्षित थीं।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Were the fishing boats safely secured inside the harbor basin?",
        textHi: "क्या मछली पकड़ने वाली नावें बंदरगाह के अंदर सुरक्षित बंधी थीं?"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "Yes, all one hundred and forty trawlers were safely anchored before the high tide.",
        textHi: "जी हाँ, उच्च ज्वार से पहले सभी 140 नौकाएं सुरक्षित रूप से लंगर डाले खड़ी थीं।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "The citizens were very cooperative during the mandatory evacuation orders.",
        textHi: "अनिवार्य निकासी आदेशों के दौरान नागरिक बहुत सहयोगी थे।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "Yes, they were disciplined and calm despite the terrifying storm gusts.",
        textHi: "जी हाँ, तूफान के भयानक झोंकों के बावजूद वे अनुशासित और शांत थे।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Our disaster response readiness was at its highest peak yesterday.",
        textHi: "कल हमारी आपदा प्रतिक्रिया तत्परता अपने उच्चतम स्तर पर थी।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "The municipal coordination was truly remarkable under extreme duress.",
        textHi: "अत्यधिक दबाव में नगर निगम का समन्वय वास्तव में उल्लेखनीय था।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "I was very relieved when the weather radar showed the cyclone moving offshore at dawn.",
        textHi: "भोर में जब मौसम रडार ने चक्रवात को समुद्र की ओर बढ़ते दिखाया, तब मुझे बहुत राहत मिली।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "We were all overjoyed by that morning satellite update.",
        textHi: "उस सुबह के सैटेलाइट अपडेट से हम सभी बेहद खुश थे।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Let us complete the post-cyclone rehabilitation report.",
        textHi: "आइए चक्रवात के बाद की पुनर्वास रिपोर्ट को पूरा करें।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "The draft is ready on my desk.",
        textHi: "मसौदा मेरी मेज पर तैयार है।"
      }
    ]
  },
  {
    id: "d06_sc02",
    title: "Archaeological Excavation Site: Artifact Preservation Review",
    titleHi: "पुरातात्विक उत्खनन स्थल: प्राचीन अवशेषों की स्थिति की समीक्षा",
    context: "Lead Archaeologist Dr. Sharma and Field Conservator Alok examine the condition of artifacts excavated yesterday.",
    situation: "Using 'was / were' to discuss past excavation layers, historical states, artifact conditions, and soil moisture.",
    characters: ["Dr. Sharma", "Alok"],
    turns: [
      {
        speaker: "Dr. Sharma",
        avatar: "👨‍🔬",
        textEn: "Alok, how was the soil condition in Trench 4 yesterday afternoon?",
        textHi: "आलोक, कल दोपहर ट्रेंच 4 में मिट्टी की क्या स्थिति थी?"
      },
      {
        speaker: "Alok",
        avatar: "👨‍🎨",
        textEn: "The subterranean soil was damp and rich in organic clay, Dr. Sharma.",
        textHi: "डॉ. शर्मा, जमीन के नीचे की मिट्टी नम और जैविक चिकनी मिट्टी से भरपूर थी।"
      },
      {
        speaker: "Dr. Sharma",
        avatar: "👨‍🔬",
        textEn: "Were the Indus Valley terracotta seals well-preserved at that depth?",
        textHi: "क्या उस गहराई पर सिंधु घाटी सभ्यता की टेराकोटा मुहरें अच्छी तरह सुरक्षित थीं?"
      },
      {
        speaker: "Alok",
        avatar: "👨‍🎨",
        textEn: "Yes, they were remarkably intact. The unicorn motifs and script inscriptions were crisp and legible.",
        textHi: "जी हाँ, वे उल्लेखनीय रूप से सुरक्षित थीं। एक सींग वाले पशु के रूपांकन और लिपि के शिलालेख स्पष्ट और पठनीय थे।"
      },
      {
        speaker: "Dr. Sharma",
        avatar: "👨‍🔬",
        textEn: "Was the large painted storage jar intact when you uncovered it?",
        textHi: "जब आपने बड़े चित्रित मर्तबान को निकाला, तो क्या वह पूरी तरह साबुत था?"
      },
      {
        speaker: "Alok",
        avatar: "👨‍🎨",
        textEn: "No, it was not complete; it was in several fractured pieces, but the geometric black-on-red patterns were vivid.",
        textHi: "नहीं, वह पूरा साबुत नहीं था; वह कई टुकड़ों में था, लेकिन लाल पर काले रंग के ज्यामितीय पैटर्न बहुत चमकीले थे।"
      },
      {
        speaker: "Dr. Sharma",
        avatar: "👨‍🔬",
        textEn: "Were the bronze tools heavily corroded by groundwater minerals?",
        textHi: "क्या भूजल के खनिजों से कांस्य के औजारों पर बहुत अधिक जंग लगा था?"
      },
      {
        speaker: "Alok",
        avatar: "👨‍🎨",
        textEn: "No, they were covered only in a thin layer of green patina; their structural integrity was solid.",
        textHi: "नहीं, उन पर केवल हरी परत की एक पतली परत थी; उनका ढांचा मजबूत था।"
      },
      {
        speaker: "Dr. Sharma",
        avatar: "👨‍🔬",
        textEn: "Was the stratigraphic layer consistent with the Mature Harappan phase?",
        textHi: "क्या मिट्टी की परत परिपक्व हड़प्पा काल के अनुकूल थी?"
      },
      {
        speaker: "Alok",
        avatar: "👨‍🎨",
        textEn: "Yes, it was roughly from 2400 BCE based on the associated brick masonry dimensions.",
        textHi: "जी हाँ, ईंटों की चिनाई के आयामों के आधार पर यह लगभग 2400 ईसा पूर्व का था।"
      },
      {
        speaker: "Dr. Sharma",
        avatar: "👨‍🔬",
        textEn: "Were the carbon-dating samples sealed in airtight containers immediately?",
        textHi: "क्या कार्बन-डेटिंग के नमूनों को तुरंत वायुरोधी डिब्बों में सील कर दिया गया था?"
      },
      {
        speaker: "Alok",
        avatar: "👨‍🎨",
        textEn: "Yes, all charcoal fragments were sealed with desiccants in sterile glass vials.",
        textHi: "जी हाँ, लकड़ी के कोयले के सभी टुकड़ों को जीवाणुरहित कांच की शीशियों में सुखाने वाले पदार्थों के साथ सील कर दिया गया था।"
      },
      {
        speaker: "Dr. Sharma",
        avatar: "👨‍🔬",
        textEn: "Yesterday was truly a landmark milestone for our excavation mission.",
        textHi: "कल का दिन हमारे उत्खनन अभियान के लिए वास्तव में एक ऐतिहासिक मील का पत्थर था।"
      },
      {
        speaker: "Alok",
        avatar: "👨‍🎨",
        textEn: "We were all thrilled when the mother goddess figurine was unearthed at 4 PM.",
        textHi: "शाम 4 बजे जब मातृदेवी की मूर्ति मिली, तो हम सभी खुशी से झूम उठे थे।"
      },
      {
        speaker: "Dr. Sharma",
        avatar: "👨‍🔬",
        textEn: "The craftsmanship of ancient artisans was astonishing.",
        textHi: "प्राचीन कारीगरों की कारीगरी आश्चर्यजनक थी।"
      },
      {
        speaker: "Alok",
        avatar: "👨‍🎨",
        textEn: "The detailed jewelry on that clay figurine was breathtaking.",
        textHi: "उस मिट्टी की मूर्ति पर बने विस्तृत आभूषण मनमोहक थे।"
      },
      {
        speaker: "Dr. Sharma",
        avatar: "👨‍🔬",
        textEn: "I was extremely proud of the team's meticulous recording methods.",
        textHi: "टीम के सटीक रिकॉर्डिंग तरीकों पर मुझे बहुत गर्व था।"
      },
      {
        speaker: "Alok",
        avatar: "👨‍🎨",
        textEn: "Your guidance was invaluable throughout the trench excavation.",
        textHi: "ट्रेंच की खुदाई के दौरान आपका मार्गदर्शन अमूल्य था।"
      },
      {
        speaker: "Dr. Sharma",
        avatar: "👨‍🔬",
        textEn: "Let us prepare Trench 5 for today's documentation.",
        textHi: "आइए आज के दस्तावेजीकरण के लिए ट्रेंच 5 तैयार करें।"
      },
      {
        speaker: "Alok",
        avatar: "👨‍🎨",
        textEn: "The survey equipment is ready.",
        textHi: "सर्वेक्षण उपकरण तैयार हैं।"
      }
    ]
  },
  {
    id: "d06_sc03",
    title: "Symphony Concert Hall: Yesterday's Performance Debrief",
    titleHi: "सिम्फनी कॉन्सर्ट हॉल: कल के प्रदर्शन की समीक्षा",
    context: "Orchestra Conductor Maestro Zubin and Solo Pianist Meera reflect on yesterday's grand gala concert.",
    situation: "Using 'was / were' to discuss acoustic qualities, performance states, audience responses, and tempo.",
    characters: ["Maestro Zubin", "Meera"],
    turns: [
      {
        speaker: "Maestro Zubin",
        avatar: "👨‍🎤",
        textEn: "Good morning, Meera! How was your experience at yesterday's Brahms piano concerto?",
        textHi: "शुभ प्रभात, मीरा! कल के ब्राह्म्स पियानो कॉन्सर्ट में आपका अनुभव कैसा रहा?"
      },
      {
        speaker: "Meera",
        avatar: "👩‍🎤",
        textEn: "Good morning, Maestro! It was exhilarating! The acoustic resonance in the auditorium was sublime.",
        textHi: "शुभ प्रभात, उस्ताद जी! यह रोमांचकारी था! सभागार में ध्वनि का गूंज-अनुनाद उत्कृष्ट था।"
      },
      {
        speaker: "Maestro Zubin",
        avatar: "👨‍🎤",
        textEn: "Were the string section harmonies balanced with your piano cadenza in the second movement?",
        textHi: "क्या दूसरे भाग में वायलिन और स्ट्रिंग सेक्शन का सामंजस्य आपके पियानो की तान के साथ संतुलित था?"
      },
      {
        speaker: "Meera",
        avatar: "👩‍🎤",
        textEn: "Yes, they were delicate and lyrical; the violins were never overpowering.",
        textHi: "जी हाँ, वे कोमल और काव्यात्मक थे; वायलिन की आवाज कभी भी पियानो पर हावी नहीं हुई।"
      },
      {
        speaker: "Maestro Zubin",
        avatar: "👨‍🎤",
        textEn: "Was the Steinway grand piano in perfect tune throughout the evening?",
        textHi: "क्या स्टाइनवे ग्रैंड पियानो पूरी शाम बिल्कुल सही सुर में था?"
      },
      {
        speaker: "Meera",
        avatar: "👩‍🎤",
        textEn: "Yes, the concert tuner was meticulous; the treble notes were crystalline and bright.",
        textHi: "जी हाँ, ट्यूनर बहुत बारीकी से काम करने वाले थे; ऊंचे सुर बिल्कुल शीशे जैसे साफ और स्पष्ट थे।"
      },
      {
        speaker: "Maestro Zubin",
        avatar: "👨‍🎤",
        textEn: "Were the brass fanfares in the finale too loud from your position on stage?",
        textHi: "क्या समापन में मंच पर आपकी स्थिति से ब्रास वाद्ययंत्रों की ध्वनि बहुत तेज थी?"
      },
      {
        speaker: "Meera",
        avatar: "👩‍🎤",
        textEn: "No, they were powerful yet crisp. The tempo in the allegro section was electrifying.",
        textHi: "नहीं, वे शक्तिशाली होने के साथ-साथ सुस्पष्ट थे। द्रुत गति वाले हिस्से की लय रोमांचक थी।"
      },
      {
        speaker: "Maestro Zubin",
        avatar: "👨‍🎤",
        textEn: "The audience was completely captivated from the very first chord.",
        textHi: "शुरुआती सुर से ही दर्शक पूरी तरह मंत्रमुग्ध थे।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍🎤",
        textEn: "Yes, their standing ovation at the conclusion was overwhelming!",
        textHi: "जी हाँ, अंत में उनका खड़े होकर तालियां बजाना (स्टैंडिंग ओवेशन) अभिभूत करने वाला था!"
      },
      {
        speaker: "Maestro Zubin",
        avatar: "👨‍🎤",
        textEn: "Were music critics from international newspapers in the royal box?",
        textHi: "क्या रॉयल बॉक्स में अंतरराष्ट्रीय समाचार पत्रों के संगीत समीक्षक उपस्थित थे?"
      },
      {
        speaker: "Meera",
        avatar: "👩‍🎤",
        textEn: "Yes, critics from London and Vienna were in attendance.",
        textHi: "जी हाँ, लंदन और विएना के समीक्षक उपस्थित थे।"
      },
      {
        speaker: "Maestro Zubin",
        avatar: "👨‍🎤",
        textEn: "Their initial reviews in the morning press were glowing with praise.",
        textHi: "सुबह के अखबारों में उनकी प्रारंभिक समीक्षाएं प्रशंसा से भरी हुई थीं।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍🎤",
        textEn: "I was deeply touched by the warmth of this city's classical music lovers.",
        textHi: "इस शहर के शास्त्रीय संगीत प्रेमियों की आत्मीयता से मेरा दिल भर आया।"
      },
      {
        speaker: "Maestro Zubin",
        avatar: "👨‍🎤",
        textEn: "You were magnificent, Meera. Your interpretation was deeply emotional.",
        textHi: "मीरा, आप अद्भुत थीं। आपकी संगीत प्रस्तुति बहुत भावपूर्ण थी।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍🎤",
        textEn: "Thank you, Maestro. Your baton control was legendary.",
        textHi: "धन्यवाद, उस्ताद जी। आपकी छड़ी का नियंत्रण बेमिसाल था।"
      },
      {
        speaker: "Maestro Zubin",
        avatar: "👨‍🎤",
        textEn: "We were a united musical organism on that stage yesterday.",
        textHi: "कल उस मंच पर हम एक एकीकृत संगीतमय आत्मा की तरह थे।"
      },
      {
        speaker: "Meera",
        avatar: "👩‍🎤",
        textEn: "It was an unforgettable evening of high art.",
        textHi: "यह उच्च कोटि की कला की एक अविस्मरणीय शाम थी।"
      },
      {
        speaker: "Maestro Zubin",
        avatar: "👨‍🎤",
        textEn: "Let us celebrate over lunch!",
        textHi: "आइए दोपहर के भोजन पर जश्न मनाएं!"
      },
      {
        speaker: "Meera",
        avatar: "👩‍🎤",
        textEn: "With pleasure, Maestro!",
        textHi: "बड़ी खुशी के साथ, उस्ताद जी!"
      }
    ]
  },
  {
    id: "d06_sc04",
    title: "Clinical Medical Review: Previous Day's Symptom History",
    titleHi: "चिकित्सीय समीक्षा: पिछले दिन के लक्षणों का इतिहास",
    context: "Physician Dr. Joshi reviews yesterday's fever and allergic symptoms with patient Rohan.",
    situation: "Practicing 'was / were' for past bodily states, fever levels, past pain intensity, and symptoms.",
    characters: ["Dr. Joshi", "Rohan"],
    turns: [
      {
        speaker: "Dr. Joshi",
        avatar: "👨‍⚕️",
        textEn: "Good morning, Rohan. How was your fever yesterday evening?",
        textHi: "शुभ प्रभात, रोहन। कल शाम आपका बुखार कैसा था?"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍💼",
        textEn: "Good morning, Doctor. My body temperature was very high, around one hundred and two degrees Fahrenheit.",
        textHi: "शुभ प्रभात, डॉक्टर। मेरे शरीर का तापमान बहुत अधिक था, लगभग 102 डिग्री फारेनहाइट।"
      },
      {
        speaker: "Dr. Joshi",
        avatar: "👨‍⚕️",
        textEn: "Were you nauseous or dizzy during the afternoon hours?",
        textHi: "क्या दोपहर के समय आपको जी मिचलाना या चक्कर आने की समस्या थी?"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍💼",
        textEn: "Yes, I was quite dizzy, and my throat was extremely dry and sore.",
        textHi: "जी हाँ, मुझे काफी चक्कर आ रहे थे, और मेरा गला बहुत सूखा और दर्द कर रहा था।"
      },
      {
        speaker: "Dr. Joshi",
        avatar: "👨‍⚕️",
        textEn: "Was there any acute pain in your lower abdominal region?",
        textHi: "क्या आपके पेट के निचले हिस्से में कोई तेज दर्द था?"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍💼",
        textEn: "No, there was no abdominal pain at all. The discomfort was mostly across my temples and back muscles.",
        textHi: "नहीं, पेट में बिल्कुल दर्द नहीं था। तकलीफ मुख्य रूप से मेरी कनपटी और पीठ की मांसपेशियों में थी।"
      },
      {
        speaker: "Dr. Joshi",
        avatar: "👨‍⚕️",
        textEn: "Were your chills continuous or intermittent throughout the night?",
        textHi: "क्या पूरी रात आपको लगातार ठंड लग रही थी या रुक-रुक कर?"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍💼",
        textEn: "They were intermittent; after taking the paracetamol tablet, the chills were absent for four hours.",
        textHi: "रुक-रुक कर लग रही थी; पैरासिटामोल की गोली लेने के बाद चार घंटे तक ठंड नहीं लगी।"
      },
      {
        speaker: "Dr. Joshi",
        avatar: "👨‍⚕️",
        textEn: "Was your appetite completely lost yesterday?",
        textHi: "क्या कल आपकी भूख पूरी तरह खत्म हो गई थी?"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍💼",
        textEn: "Yes, solid foods were unpalatable; I was only on warm fluids and electrolyte water.",
        textHi: "जी हाँ, ठोस खाना बिल्कुल नहीं भा रहा था; मैं केवल गर्म तरल पदार्थों और इलेक्ट्रोलाइट पानी पर ही था।"
      },
      {
        speaker: "Dr. Joshi",
        avatar: "👨‍⚕️",
        textEn: "Were your eyes bloodshot or watery?",
        textHi: "क्या आपकी आँखें लाल या उनसे पानी बह रहा था?"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍💼",
        textEn: "Yes, they were watery and sensitive to bright light.",
        textHi: "जी हाँ, उनमें पानी आ रहा था और तेज रोशनी से चुभन हो रही थी।"
      },
      {
        speaker: "Dr. Joshi",
        avatar: "👨‍⚕️",
        textEn: "Your symptoms were indicative of a viral infection, but today your vitals are much improved.",
        textHi: "आपके लक्षण एक वायरल संक्रमण का संकेत थे, लेकिन आज आपके जीवन संकेत काफी बेहतर हैं।"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍💼",
        textEn: "I was worried yesterday, but I am feeling much more energetic this morning.",
        textHi: "कल मैं चिंतित था, लेकिन आज सुबह मैं बहुत अधिक ऊर्जावान महसूस कर रहा हूँ।"
      },
      {
        speaker: "Dr. Joshi",
        avatar: "👨‍⚕️",
        textEn: "Your blood platelet count was normal in the emergency test panel.",
        textHi: "आपातकालीन टेस्ट पैनल में आपका ब्लड प्लेटलेट काउंट सामान्य था।"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍💼",
        textEn: "That was great news for my family.",
        textHi: "यह मेरे परिवार के लिए बहुत अच्छी खबर थी।"
      },
      {
        speaker: "Dr. Joshi",
        avatar: "👨‍⚕️",
        textEn: "Continue the prescribed hydration and rest for another forty-eight hours.",
        textHi: "अगले अड़तालीस घंटों तक पर्याप्त पानी पीते रहें और आराम जारी रखें।"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍💼",
        textEn: "Thank you for the thorough assessment, Dr. Joshi.",
        textHi: "डॉ. जोशी, इस गहन मूल्यांकन के लिए धन्यवाद।"
      },
      {
        speaker: "Dr. Joshi",
        avatar: "👨‍⚕️",
        textEn: "Take care and get well soon!",
        textHi: "अपना ध्यान रखें और जल्दी स्वस्थ हों!"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍💼",
        textEn: "Thank you, Doctor!",
        textHi: "धन्यवाद, डॉक्टर!"
      }
    ]
  },
  {
    id: "d06_sc05",
    title: "International Diplomatic Summit: Treaty Session Retrospective",
    titleHi: "अंतरराष्ट्रीय कूटनीतिक शिखर सम्मेलन: संधि सत्र की समीक्षा",
    context: "Diplomat Ambassador Rao and Senior Attaché Farooq analyze yesterday's bilateral climate treaty negotiations.",
    situation: "Deploying 'was / were' for diplomatic states, committee consensus, delegate positions, and atmosphere.",
    characters: ["Ambassador Rao", "Attaché Farooq"],
    turns: [
      {
        speaker: "Ambassador Rao",
        avatar: "👨‍💼",
        textEn: "Farooq, how was the closed-door plenary session on carbon credit quotas yesterday?",
        textHi: "फारूक, कल कार्बन क्रेडिट कोटे पर बंद कमरे में हुआ पूर्ण सत्र कैसा रहा?"
      },
      {
        speaker: "Attaché Farooq",
        avatar: "👨‍💼",
        textEn: "The discussions were intense, Excellency. The initial disagreements between delegations were significant.",
        textHi: "महामहिम, चर्चाएँ बहुत गहन थीं। शुरुआत में प्रतिनिधिमंडलों के बीच मतभेद काफी बड़े थे।"
      },
      {
        speaker: "Ambassador Rao",
        avatar: "👨‍💼",
        textEn: "Were the Nordic delegates supportive of our green technology transfer clause?",
        textHi: "क्या नॉर्डिक देशों के प्रतिनिधि हमारे हरित प्रौद्योगिकी हस्तांतरण खंड के समर्थन में थे?"
      },
      {
        speaker: "Attaché Farooq",
        avatar: "👨‍💼",
        textEn: "Yes, they were very constructive, and their legal advisors were open to our wording.",
        textHi: "जी हाँ, उनका रुख बहुत सकारात्मक था, और उनके कानूनी सलाहकार हमारे मसौदे के शब्दों पर सहमत थे।"
      },
      {
        speaker: "Ambassador Rao",
        avatar: "👨‍💼",
        textEn: "Was the French chief negotiator present during the evening voting round?",
        textHi: "क्या शाम के मतदान दौर के दौरान फ्रांसीसी मुख्य वार्ताकार उपस्थित थे?"
      },
      {
        speaker: "Attaché Farooq",
        avatar: "👨‍💼",
        textEn: "Yes, she was in the hall, and her statement on climate financing was influential.",
        textHi: "जी हाँ, वे हॉल में थीं, और जलवायु वित्तपोषण पर उनका बयान काफी प्रभावशाली था।"
      },
      {
        speaker: "Ambassador Rao",
        avatar: "👨‍💼",
        textEn: "Were the developing island nations satisfied with the loss-and-damage fund allocation?",
        textHi: "क्या विकासशील द्वीपीय राष्ट्र नुकसान और क्षति निधि के आवंटन से संतुष्ट थे?"
      },
      {
        speaker: "Attaché Farooq",
        avatar: "👨‍💼",
        textEn: "Yes, they were unanimous in their approval after the financial guarantees were confirmed.",
        textHi: "जी हाँ, वित्तीय गारंटियों की पुष्टि के बाद वे अपनी मंजूरी में एकमत थे।"
      },
      {
        speaker: "Ambassador Rao",
        avatar: "👨‍💼",
        textEn: "Was the summit declaration draft ready before the midnight deadline?",
        textHi: "क्या आधी रात की समय सीमा से पहले शिखर सम्मेलन का घोषणापत्र तैयार था?"
      },
      {
        speaker: "Attaché Farooq",
        avatar: "👨‍💼",
        textEn: "Yes, the secretariat draft was finalized at eleven fifteen PM.",
        textHi: "जी हाँ, सचिवालय का मसौदा रात 11:15 बजे अंतिम रूप से तैयार हो गया था।"
      },
      {
        speaker: "Ambassador Rao",
        avatar: "👨‍💼",
        textEn: "The diplomatic atmosphere was remarkably collaborative despite geopolitical tensions.",
        textHi: "भू-राजनीतिक तनावों के बावजूद कूटनीतिक माहौल आश्चर्यजनक रूप से सहयोगात्मक था।"
      },
      {
        speaker: "Attaché Farooq",
        avatar: "👨‍💼",
        textEn: "Our team was well-prepared with empirical climate data at every intervention.",
        textHi: "हमारी टीम हर हस्तक्षेप में व्यावहारिक जलवायु डेटा के साथ पूरी तरह तैयार थी।"
      },
      {
        speaker: "Ambassador Rao",
        avatar: "👨‍💼",
        textEn: "I was extremely impressed by your briefing notes during the bilateral meetings.",
        textHi: "द्विपक्षीय बैठकों के दौरान आपके तैयार किए गए ब्रीफिंग नोट्स से मैं बहुत प्रभावित हुआ।"
      },
      {
        speaker: "Attaché Farooq",
        avatar: "👨‍💼",
        textEn: "Thank you, Ambassador. It was an honor to serve our delegation.",
        textHi: "धन्यवाद, राजदूत महोदय। हमारे प्रतिनिधिमंडल की सेवा करना मेरे लिए सम्मान की बात थी।"
      },
      {
        speaker: "Ambassador Rao",
        avatar: "👨‍💼",
        textEn: "Yesterday was a historic milestone for global environmental governance.",
        textHi: "कल का दिन वैश्विक पर्यावरण शासन के लिए एक ऐतिहासिक मील का पत्थर था।"
      },
      {
        speaker: "Attaché Farooq",
        avatar: "👨‍💼",
        textEn: "All participating nations were signatories to the accord by consensus.",
        textHi: "सभी भाग लेने वाले देश सर्वसम्मति से समझौते पर हस्ताक्षरकर्ता थे।"
      },
      {
        speaker: "Ambassador Rao",
        avatar: "👨‍💼",
        textEn: "Let us transmit the signed treaty document to the Ministry of External Affairs.",
        textHi: "आइए हस्ताक्षरित संधि दस्तावेज विदेश मंत्रालय को प्रेषित करें।"
      },
      {
        speaker: "Attaché Farooq",
        avatar: "👨‍💼",
        textEn: "The diplomatic courier bag is sealed and ready for dispatch.",
        textHi: "डिप्लोमैटिक कूरियर बैग सील कर दिया गया है और भेजने के लिए तैयार है।"
      },
      {
        speaker: "Ambassador Rao",
        avatar: "👨‍💼",
        textEn: "Excellent work, Farooq.",
        textHi: "फारूक, बहुत बढ़िया काम।"
      },
      {
        speaker: "Attaché Farooq",
        avatar: "👨‍💼",
        textEn: "Thank you, Excellency.",
        textHi: "धन्यवाद, महामहिम।"
      }
    ]
  },
  {
    id: "d06_sc06",
    title: "Grand Hotel Banquet: Post-Gala Operational Review",
    titleHi: "भव्य होटल बैंक्वेट: गाला कार्यक्रम के बाद संचालन की समीक्षा",
    context: "Banqueting Director Chef Cyrus and Event Coordinator Neha review yesterday's 500-guest charity gala.",
    situation: "Using 'was / were' to discuss banquet states, guest satisfaction, catering temperatures, and decor condition.",
    characters: ["Chef Cyrus", "Neha"],
    turns: [
      {
        speaker: "Chef Cyrus",
        avatar: "👨‍🍳",
        textEn: "Good morning, Neha! How was the charity gala in the Royal Ballroom yesterday night?",
        textHi: "शुभ प्रभात, नेहा! कल रात रॉयल बॉलरूम में चैरिटी गाला कैसा रहा?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Good morning, Chef! It was a spectacular success; all five hundred guests were thoroughly impressed.",
        textHi: "शुभ प्रभात, शेफ! यह एक शानदार सफलता थी; सभी पांच सौ मेहमान पूरी तरह प्रभावित थे।"
      },
      {
        speaker: "Chef Cyrus",
        avatar: "👨‍🍳",
        textEn: "Were the hot entrees at the correct serving temperature during the main course service?",
        textHi: "क्या मुख्य भोजन की सर्विस के दौरान गर्म व्यंजन परोसने के सही तापमान पर थे?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Yes, the warming cabinets were flawless; the roasted lamb and wild mushroom risottos were piping hot.",
        textHi: "जी हाँ, वार्मिंग कैबिनेट बिल्कुल सही काम कर रहे थे; भुना हुआ मटन और जंगली मशरूम रिसोट्टो गरमा-गरम थे।"
      },
      {
        speaker: "Chef Cyrus",
        avatar: "👨‍🍳",
        textEn: "Was the ice sculpture at the seafood bar intact throughout the evening?",
        textHi: "क्या सीफूड बार पर बर्फ की मूर्ति पूरी शाम सुरक्षित रही?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Yes, the ambient cooling near the buffet was optimal, so the swan sculpture was pristine until midnight.",
        textHi: "जी हाँ, बुफे के पास ठंडक एकदम सही थी, इसलिए हंस की मूर्ति आधी रात तक बिल्कुल बेदाग बनी रही।"
      },
      {
        speaker: "Chef Cyrus",
        avatar: "👨‍🍳",
        textEn: "Were the vegan and gluten-free dietary requests handled without confusion?",
        textHi: "क्या शाकाहारी और ग्लूटेन-मुक्त विशेष भोजन के अनुरोध बिना किसी भ्रम के संभाले गए?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Yes, the special meal markers on Table 12 and 18 were accurate, and the guests were deeply grateful.",
        textHi: "जी हाँ, टेबल 12 और 18 पर विशेष भोजन के निशान सही थे, और मेहमान दिल से आभारी थे।"
      },
      {
        speaker: "Chef Cyrus",
        avatar: "👨‍🍳",
        textEn: "Was the keynote audio clear during the opening fundraising speech?",
        textHi: "क्या शुरुआती धन संचय भाषण के दौरान मुख्य वक्ता की आवाज साफ थी?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Yes, the sound engineering was crisp; there was no audio feedback.",
        textHi: "जी हाँ, साउंड इंजीनियरिंग बहुत साफ थी; कोई अनचाही गूंज नहीं थी।"
      },
      {
        speaker: "Chef Cyrus",
        avatar: "👨‍🍳",
        textEn: "Were the floral centerpieces fresh upon arrival from the florists?",
        textHi: "क्या फूल वालों से आने पर मेज के बीच वाले फूलों के गुलदस्ते ताज़ा थे?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Yes, the white orchids and lilies were fresh and fragrant.",
        textHi: "जी हाँ, सफेद आर्किड और लिलि के फूल ताज़ा और सुगंधित थे।"
      },
      {
        speaker: "Chef Cyrus",
        avatar: "👨‍🍳",
        textEn: "The banquet service team was punctual and courteous across all fifty tables.",
        textHi: "बैंक्वेट सर्विस टीम सभी पचास मेजों पर समयनिष्ठ और विनम्र थी।"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Their synchronization during the synchronous silver cloche unveiling was breathtaking.",
        textHi: "चांदी के ढक्कनों को एक साथ उठाने के दौरान उनका तालमेल मनमोहक था।"
      },
      {
        speaker: "Chef Cyrus",
        avatar: "👨‍🍳",
        textEn: "I was very pleased with our kitchen brigade's calm precision under pressure.",
        textHi: "दबाव में हमारी रसोई टीम की शांत सटीकता से मैं बहुत प्रसन्न था।"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "The event organizers were lavish in their compliments to the hotel management.",
        textHi: "कार्यक्रम के आयोजकों ने होटल प्रबंधन की दिल खोलकर तारीफ की।"
      },
      {
        speaker: "Chef Cyrus",
        avatar: "👨‍🍳",
        textEn: "Yesterday's execution was a gold standard for our hospitality brand.",
        textHi: "कल का आयोजन हमारे आतिथ्य ब्रांड के लिए एक स्वर्णिम मानक था।"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Let us archive the client appreciation letter.",
        textHi: "आइए ग्राहक के प्रशंसा पत्र को सुरक्षित रख लें।"
      },
      {
        speaker: "Chef Cyrus",
        avatar: "👨‍🍳",
        textEn: "Splendid job, Neha!",
        textHi: "शानदार काम, नेहा!"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Thank you, Chef!",
        textHi: "धन्यवाद, शेफ!"
      }
    ]
  },
  {
    id: "d06_sc07",
    title: "National Science Olympiad: Post-Exam Academic Debrief",
    titleHi: "राष्ट्रीय विज्ञान ओलंपियाड: परीक्षा के बाद शैक्षणिक समीक्षा",
    context: "Physics Teacher Mr. Bose discusses yesterday's national competitive exam with student Pranav.",
    situation: "Practicing 'was / were' to discuss past test complexity, question difficulty, time constraints, and confidence states.",
    characters: ["Mr. Bose", "Pranav"],
    turns: [
      {
        speaker: "Mr. Bose",
        avatar: "👨‍🏫",
        textEn: "Good afternoon, Pranav! How was the National Physics Olympiad examination yesterday?",
        textHi: "शुभ दोपहर, प्रणव! कल की राष्ट्रीय भौतिकी ओलंपियाड परीक्षा कैसी रही?"
      },
      {
        speaker: "Pranav",
        avatar: "👨‍🎓",
        textEn: "Good afternoon, Sir! It was intellectually stimulating, though some numerical problems were quite demanding.",
        textHi: "शुभ दोपहर, सर! यह बौद्धिक रूप से बहुत रोमांचक थी, हालांकि कुछ संख्यात्मक प्रश्न काफी कठिन थे।"
      },
      {
        speaker: "Mr. Bose",
        avatar: "👨‍🏫",
        textEn: "Were the questions in classical mechanics straightforward or conceptual?",
        textHi: "क्या क्लासिकल मैकेनिक्स के प्रश्न सीधे थे या वैचारिक गहराई वाले थे?"
      },
      {
        speaker: "Pranav",
        avatar: "👨‍🎓",
        textEn: "They were highly conceptual; rotational dynamics and angular momentum problems were particularly tricky.",
        textHi: "वे अत्यधिक वैचारिक थे; घूर्णी गतिशीलता और कोणीय संवेग की समस्याएं विशेष रूप से पेचीदा थीं।"
      },
      {
        speaker: "Mr. Bose",
        avatar: "👨‍🏫",
        textEn: "Was the thermodynamics section within your expected preparation scope?",
        textHi: "क्या थर्मोडायनामिक्स का भाग आपकी अपेक्षित तैयारी के दायरे में था?"
      },
      {
        speaker: "Pranav",
        avatar: "👨‍🎓",
        textEn: "Yes, the Carnot cycle and entropy calculations were identical to the advanced mock papers we practiced.",
        textHi: "जी हाँ, कार्नो चक्र और एन्ट्रापी की गणनाएँ हमारे द्वारा अभ्यास किए गए उन्नत मॉक पेपर जैसी ही थीं।"
      },
      {
        speaker: "Mr. Bose",
        avatar: "👨‍🏫",
        textEn: "Were the laboratory experimental data analysis questions lengthy?",
        textHi: "क्या प्रयोगशाला प्रायोगिक डेटा विश्लेषण के प्रश्न लंबे थे?"
      },
      {
        speaker: "Pranav",
        avatar: "👨‍🎓",
        textEn: "Yes, they were very lengthy, but the error analysis formulas were fresh in my memory.",
        textHi: "जी हाँ, वे बहुत लंबे थे, लेकिन त्रुटि विश्लेषण के सूत्र मेरी याददाश्त में ताज़ा थे।"
      },
      {
        speaker: "Mr. Bose",
        avatar: "👨‍🏫",
        textEn: "Was the three-hour time allocation sufficient for the entire seventy-five questions?",
        textHi: "क्या पूरे पचहत्तर प्रश्नों के लिए तीन घंटे का समय पर्याप्त था?"
      },
      {
        speaker: "Pranav",
        avatar: "👨‍🎓",
        textEn: "Time management was tight, but I was done five minutes before the final bell.",
        textHi: "समय प्रबंधन बहुत कड़ा था, लेकिन अंतिम घंटी बजने से पांच मिनट पहले मेरा काम पूरा हो गया था।"
      },
      {
        speaker: "Mr. Bose",
        avatar: "👨‍🏫",
        textEn: "Were your fellow school candidates confident after the exam?",
        textHi: "क्या परीक्षा के बाद आपके अन्य सहपाठी छात्र आश्वस्त थे?"
      },
      {
        speaker: "Pranav",
        avatar: "👨‍🎓",
        textEn: "Most students were anxious about optics, but our study group members were calm and pleased.",
        textHi: "अधिकांश छात्र प्रकाशिकी (ऑप्टिक्स) को लेकर चिंतित थे, लेकिन हमारे अध्ययन समूह के सदस्य शांत और प्रसन्न थे।"
      },
      {
        speaker: "Mr. Bose",
        avatar: "👨‍🏫",
        textEn: "Your foundation in mathematical physics was exceptionally solid throughout our training.",
        textHi: "हमारे पूरे प्रशिक्षण के दौरान गणितीय भौतिकी में आपका आधार असाधारण रूप से मजबूत था।"
      },
      {
        speaker: "Pranav",
        avatar: "👨‍🎓",
        textEn: "Your specialized weekend problem-solving sessions were the key factor in my speed.",
        textHi: "सप्ताहांत में आपके द्वारा आयोजित विशेष समस्या-समाधान सत्र मेरी गति के मुख्य कारक थे।"
      },
      {
        speaker: "Mr. Bose",
        avatar: "👨‍🏫",
        textEn: "I was very optimistic about your qualification chances when looking over the question paper.",
        textHi: "प्रश्न पत्र देखने के बाद आपके चयनित होने की संभावनाओं को लेकर मैं बहुत आशावादी था।"
      },
      {
        speaker: "Pranav",
        avatar: "👨‍🎓",
        textEn: "I am hopeful of securing a place in the national merit top fifty.",
        textHi: "मुझे राष्ट्रीय मेरिट के शीर्ष पचास में स्थान सुरक्षित करने की पूरी उम्मीद है।"
      },
      {
        speaker: "Mr. Bose",
        avatar: "👨‍🏫",
        textEn: "You deserve every success for your hard work and dedication.",
        textHi: "आप अपनी कड़ी मेहनत और लगन के लिए हर सफलता के हकदार हैं।"
      },
      {
        speaker: "Pranav",
        avatar: "👨‍🎓",
        textEn: "Thank you for believing in me, Sir.",
        textHi: "मुझ पर विश्वास करने के लिए धन्यवाद, सर।"
      },
      {
        speaker: "Mr. Bose",
        avatar: "👨‍🏫",
        textEn: "Always a pleasure, Pranav!",
        textHi: "सदा प्रसन्नता की बात है, प्रणव!"
      },
      {
        speaker: "Pranav",
        avatar: "👨‍🎓",
        textEn: "Goodbye, Sir!",
        textHi: "अलविदा, सर!"
      }
    ]
  },
  {
    id: "d06_sc08",
    title: "Kanha Tiger Reserve: Safari Sighting Log Retrospective",
    titleHi: "कान्हा टाइगर रिजर्व: सफारी वन्यजीव अवलोकन की समीक्षा",
    context: "Wildlife Naturalist Ramesh and wildlife photographer Sophie review yesterday's dawn jungle safari.",
    situation: "Using 'was / were' to discuss past animal behaviors, jungle conditions, visibility, and weather.",
    characters: ["Ramesh", "Sophie"],
    turns: [
      {
        speaker: "Ramesh",
        avatar: "👨‍🌾",
        textEn: "Good morning, Sophie! How was yesterday's evening safari through the Mukki zone?",
        textHi: "शुभ प्रभात, सोफी! मुक्की ज़ोन से होकर कल शाम की सफारी कैसी रही?"
      },
      {
        speaker: "Sophie",
        avatar: "👩‍🌾",
        textEn: "Good morning, Ramesh! It was magical! The golden-hour lighting across the sal grasslands was stunning.",
        textHi: "शुभ प्रभात, रमेश! वह जादुई थी! साल के घास के मैदानों में गोधूलि की सुनहरी रोशनी अद्भुत थी।"
      },
      {
        speaker: "Ramesh",
        avatar: "👨‍🌾",
        textEn: "Were the barasingha swamp deer grazing near the marshy waterhole?",
        textHi: "क्या बारहसिंगा दलदली जलाशय के पास घास चर रहे थे?"
      },
      {
        speaker: "Sophie",
        avatar: "👩‍🌾",
        textEn: "Yes, they were in a large herd of thirty stags; their multi-tined antlers were majestic in the sunset.",
        textHi: "जी हाँ, वे तीस हिरणों के एक बड़े झुंड में थे; सूर्यास्त में उनके बारहसिंगे सींग अत्यंत भव्य दिख रहे थे।"
      },
      {
        speaker: "Ramesh",
        avatar: "👨‍🌾",
        textEn: "Was the resident tigress Neelam active near the stream crossing?",
        textHi: "क्या स्थानीय बाघिन नीलम नदी पार करने वाले रास्ते के पास सक्रिय थी?"
      },
      {
        speaker: "Sophie",
        avatar: "👩‍🌾",
        textEn: "Yes, she was resting under a Mahua tree; then she was on the forest path for ten thrilling minutes!",
        textHi: "जी हाँ, वह महुआ के पेड़ के नीचे आराम कर रही थी; फिर वह दस रोमांचक मिनटों तक जंगल के रास्ते पर चली!"
      },
      {
        speaker: "Ramesh",
        avatar: "👨‍🌾",
        textEn: "Were her two cubs visible behind the bamboo thicket?",
        textHi: "क्या बांस के झुरमुट के पीछे उसके दो शावक दिखाई दे रहे थे?"
      },
      {
        speaker: "Sophie",
        avatar: "👩‍🌾",
        textEn: "No, they were hidden in the dense undergrowth, but their playful growls were audible.",
        textHi: "नहीं, वे घनी झाड़ियों में छिपे हुए थे, लेकिन उनकी चंचल गुर्राहट साफ सुनाई दे रही थी।"
      },
      {
        speaker: "Ramesh",
        avatar: "👨‍🌾",
        textEn: "Was the jungle alarm call of the langurs loud and urgent before she emerged?",
        textHi: "क्या उसके निकलने से पहले लंगूरों की चेतावनी भरी पुकार तेज और गंभीर थी?"
      },
      {
        speaker: "Sophie",
        avatar: "👩‍🌾",
        textEn: "Yes, the langurs and spotted deer were in a frenzy of continuous warning barks.",
        textHi: "जी हाँ, लंगूर और चीतल लगातार चेतावनी भरी आवाजों से पूरे जंगल को सतर्क कर रहे थे।"
      },
      {
        speaker: "Ramesh",
        avatar: "👨‍🌾",
        textEn: "Were the forest safari tracks dry and smooth for the open gypsy vehicles?",
        textHi: "क्या खुली जिप्सी गाड़ियों के लिए जंगल के रास्ते सूखे और सुगम थे?"
      },
      {
        speaker: "Sophie",
        avatar: "👩‍🌾",
        textEn: "Yes, the tracks were dust-free and the driver was remarkably quiet and respectful.",
        textHi: "जी हाँ, रास्ते धूल मुक्त थे और चालक बहुत शांत और प्रकृति के प्रति संवेदनशील था।"
      },
      {
        speaker: "Ramesh",
        avatar: "👨‍🌾",
        textEn: "Yesterday was one of the finest wildlife viewing days of this entire season.",
        textHi: "कल का दिन इस पूरे मौसम में वन्यजीव देखने के सबसे बेहतरीन दिनों में से एक था।"
      },
      {
        speaker: "Sophie",
        avatar: "👩‍🌾",
        textEn: "I was fortunate to capture over eight hundred sharp photographs on my telephoto lens.",
        textHi: "मैं बहुत भाग्यशाली थी कि मुझे अपने टेलीफोटो लेंस से आठ सौ से अधिक स्पष्ट तस्वीरें खींचने का मौका मिला।"
      },
      {
        speaker: "Ramesh",
        avatar: "👨‍🌾",
        textEn: "Your portfolio from Kanha will be extraordinary.",
        textHi: "कान्हा से आपका फोटो संग्रह सचमुच असाधारण होगा।"
      },
      {
        speaker: "Sophie",
        avatar: "👩‍🌾",
        textEn: "Your tracking instincts were spot-on, Ramesh.",
        textHi: "रमेश, आपके पदचिह्न पहचानने के अनुभव का कोई मुकाबला नहीं था।"
      },
      {
        speaker: "Ramesh",
        avatar: "👨‍🌾",
        textEn: "The forest is always generous to patient nature lovers.",
        textHi: "धैर्यवान प्रकृति प्रेमियों के लिए जंगल हमेशा उदार रहता है।"
      },
      {
        speaker: "Sophie",
        avatar: "👩‍🌾",
        textEn: "I will never forget yesterday's sunset in the wild.",
        textHi: "मैं जंगल में कल के सूर्यास्त को कभी नहीं भूल पाऊंगी।"
      },
      {
        speaker: "Ramesh",
        avatar: "👨‍🌾",
        textEn: "Safe travels for your next safari!",
        textHi: "आपकी अगली सफारी के लिए शुभकामनाएँ!"
      },
      {
        speaker: "Sophie",
        avatar: "👩‍🌾",
        textEn: "Thank you, Ramesh!",
        textHi: "धन्यवाद, रमेश!"
      }
    ]
  },
  {
    id: "d06_sc09",
    title: "Airport Flight Operations: Dense Fog Ground Delay Investigation",
    titleHi: "हवाई अड्डा उड़ान संचालन: घने कोहरे के कारण देरी की जांच",
    context: "Air Traffic Supervisor Mr. Verma and Airline Station Manager Sunaina review yesterday's zero-visibility fog disruptions.",
    situation: "Using 'was / were' for runway visibility states, passenger conditions, diverted flights, and ground equipment states.",
    characters: ["Mr. Verma", "Sunaina"],
    turns: [
      {
        speaker: "Mr. Verma",
        avatar: "👨‍💼",
        textEn: "Good morning, Sunaina. How severe was the runway visual range drop during yesterday morning's fog?",
        textHi: "शुभ प्रभात, सुनैना। कल सुबह के कोहरे के दौरान रनवे दृश्यता में गिरावट कितनी गंभीर थी?"
      },
      {
        speaker: "Sunaina",
        avatar: "👩‍💼",
        textEn: "Good morning, Mr. Verma. Runway visibility was below fifty meters between 4 AM and 8 AM.",
        textHi: "शुभ प्रभात, मिस्टर वर्मा। सुबह 4 बजे से 8 बजे के बीच रनवे की दृश्यता पचास मीटर से भी कम थी।"
      },
      {
        speaker: "Mr. Verma",
        avatar: "👨‍💼",
        textEn: "Were Category III-B instrument landing systems active on Runway 28?",
        textHi: "क्या रनवे 28 पर श्रेणी III-B उपकरण लैंडिंग प्रणाली (CAT III-B) सक्रिय थी?"
      },
      {
        speaker: "Sunaina",
        avatar: "👩‍💼",
        textEn: "Yes, the automated ILS beacons were fully calibrated, but non-compliant aircraft were unable to land.",
        textHi: "जी हाँ, स्वचालित आईएलएस बीकन पूरी तरह कैलिब्रेटेड थे, लेकिन गैर-अनुरूप विमान उतरने में असमर्थ थे।"
      },
      {
        speaker: "Mr. Verma",
        avatar: "👨‍💼",
        textEn: "How many inbound international flights were diverted to alternative airports?",
        textHi: "कितनी आने वाली अंतरराष्ट्रीय उड़ानों को वैकल्पिक हवाई अड्डों पर भेजा गया?"
      },
      {
        speaker: "Sunaina",
        avatar: "👩‍💼",
        textEn: "Sixteen flights were diverted to Jaipur and Lucknow because fuel reserves were low.",
        textHi: "सोलह उड़ानों को जयपुर और लखनऊ डायवर्ट किया गया क्योंकि ईंधन का भंडार कम था।"
      },
      {
        speaker: "Mr. Verma",
        avatar: "👨‍💼",
        textEn: "Were the passengers in Terminal 3 restless during the four-hour ground hold?",
        textHi: "क्या चार घंटे की जमीनी रुकावट के दौरान टर्मिनल 3 में यात्री बेचैन थे?"
      },
      {
        speaker: "Sunaina",
        avatar: "👩‍💼",
        textEn: "They were understandably anxious, but free breakfast vouchers and regular public announcements were helpful.",
        textHi: "वे स्वाभाविक रूप से चिंतित थे, लेकिन मुफ्त नाश्ता वाउचर और नियमित सार्वजनिक घोषणाएं मददगार साबित हुईं।"
      },
      {
        speaker: "Mr. Verma",
        avatar: "👨‍💼",
        textEn: "Was there any tarmac incident involving towing tractors or refuel tankers?",
        textHi: "क्या टोइंग ट्रैक्टर या ईंधन टैंकरों से जुड़ी कोई टारमैक घटना हुई थी?"
      },
      {
        speaker: "Sunaina",
        avatar: "👩‍💼",
        textEn: "No, safety marshalling was immaculate; there were zero ground collisions in zero visibility.",
        textHi: "नहीं, सुरक्षा नियंत्रण त्रुटिहीन था; शून्य दृश्यता में भी जमीन पर शून्य दुर्घटनाएं हुईं।"
      },
      {
        speaker: "Mr. Verma",
        avatar: "👨‍💼",
        textEn: "Were airline crew duty time limits exceeded for outbound long-haul flights?",
        textHi: "क्या बाहर जाने वाली लंबी दूरी की उड़ानों के लिए चालक दल की ड्यूटी समय सीमा समाप्त हो गई थी?"
      },
      {
        speaker: "Sunaina",
        avatar: "👩‍💼",
        textEn: "Yes, replacement flight crews were mobilized from airport hotels for London and New York flights.",
        textHi: "जी हाँ, लंदन और न्यूयॉर्क की उड़ानों के लिए हवाई अड्डे के होटलों से वैकल्पिक चालक दल जुटाए गए थे।"
      },
      {
        speaker: "Mr. Verma",
        avatar: "👨‍💼",
        textEn: "The coordination between air traffic control and ground handling was top-notch yesterday.",
        textHi: "कल एयर ट्रैफिक कंट्रोल और ग्राउंड हैंडलिंग के बीच समन्वय शीर्ष स्तर का था।"
      },
      {
        speaker: "Sunaina",
        avatar: "👩‍💼",
        textEn: "All teams were focused purely on flight passenger safety.",
        textHi: "सभी टीमें पूरी तरह से उड़ान यात्रियों की सुरक्षा पर केंद्रित थीं।"
      },
      {
        speaker: "Mr. Verma",
        avatar: "👨‍💼",
        textEn: "I was very impressed by your terminal staff's patience and empathy.",
        textHi: "आपके टर्मिनल कर्मचारियों के धैर्य और सहानुभूति से मैं बहुत प्रभावित हुआ।"
      },
      {
        speaker: "Sunaina",
        avatar: "👩‍💼",
        textEn: "Our team was working non-stop through the entire fog disruption.",
        textHi: "हमारी टीम कोहरे की पूरी बाधा के दौरान लगातार काम कर रही थी।"
      },
      {
        speaker: "Mr. Verma",
        avatar: "👨‍💼",
        textEn: "Today the weather is crystal clear and all operations are back to normal.",
        textHi: "आज मौसम बिल्कुल साफ है और सभी संचालन वापस सामान्य हो गए हैं।"
      },
      {
        speaker: "Sunaina",
        avatar: "👩‍💼",
        textEn: "That is a huge relief for everyone.",
        textHi: "यह हर किसी के लिए एक बहुत बड़ी राहत है।"
      },
      {
        speaker: "Mr. Verma",
        avatar: "👨‍💼",
        textEn: "Thank you for the detailed log, Sunaina.",
        textHi: "विस्तृत लॉग के लिए धन्यवाद, सुनैना।"
      },
      {
        speaker: "Sunaina",
        avatar: "👩‍💼",
        textEn: "You are welcome, Mr. Verma.",
        textHi: "आपका स्वागत है, मिस्टर वर्मा।"
      }
    ]
  },
  {
    id: "d06_sc10",
    title: "Software Production Outage: Incident Post-Mortem",
    titleHi: "सॉफ्टवेयर प्रोडक्शन आउटेज: तकनीकी घटना की समीक्षा",
    context: "Site Reliability Engineer Karthik and Product Manager Deepa conduct a post-mortem of yesterday's cloud latency spike.",
    situation: "Deploying 'was / were' for database connection pool states, latency metrics, server loads, and error codes.",
    characters: ["Karthik", "Deepa"],
    turns: [
      {
        speaker: "Deepa",
        avatar: "👩‍💻",
        textEn: "Karthik, how severe was the system outage during yesterday's flash sale at 2 PM?",
        textHi: "कार्तिक, कल दोपहर 2 बजे फ्लैश सेल के दौरान सिस्टम आउटेज कितना गंभीर था?"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍💻",
        textEn: "The API gateway latency was over eight seconds, and error rates were at twelve percent for twenty minutes.",
        textHi: "एपीआई गेटवे लेटेंसी आठ सेकंड से अधिक थी, और बीस मिनट के लिए त्रुटि दर बारह प्रतिशत पर थी।"
      },
      {
        speaker: "Deepa",
        avatar: "👩‍💻",
        textEn: "Was the primary relational database unresponsive due to connection pool exhaustion?",
        textHi: "क्या कनेक्शन पूल खत्म होने के कारण प्राथमिक रिलेशनल डेटाबेस अनुत्तरदायी हो गया था?"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍💻",
        textEn: "Yes, active open connections were at the hard limit of five thousand, and query queues were completely blocked.",
        textHi: "जी हाँ, सक्रिय खुले कनेक्शन पांच हजार की अधिकतम सीमा पर थे, और क्वेरी कतारें पूरी तरह से अवरुद्ध थीं।"
      },
      {
        speaker: "Deepa",
        avatar: "👩‍💻",
        textEn: "Were the read-replica database nodes in Mumbai synchronized with the master?",
        textHi: "क्या मुंबई में रीड-रेप्लिकेट डेटाबेस नोड्स मास्टर के साथ सिंक में थे?"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍💻",
        textEn: "No, replication lag was high because traffic volume was four times greater than our initial stress-test forecast.",
        textHi: "नहीं, प्रतिकृति विलंब (रेप्लिकेशन लैग) अधिक था क्योंकि ट्रैफिक की मात्रा हमारे शुरुआती तनाव-परीक्षण के अनुमान से चार गुना अधिक थी।"
      },
      {
        speaker: "Deepa",
        avatar: "👩‍💻",
        textEn: "Was the automated container auto-scaling trigger active?",
        textHi: "क्या स्वचालित कंटेनर ऑटो-स्केलिंग ट्रिगर सक्रिय था?"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍💻",
        textEn: "It was active, but the cold-start delay for new microservice pods was ninety seconds too slow.",
        textHi: "वह सक्रिय था, लेकिन नए माइक्रोसर्विस पॉड्स के लिए कोल्ड-स्टार्ट में नब्बे सेकंड की बहुत ज्यादा देरी थी।"
      },
      {
        speaker: "Deepa",
        avatar: "👩‍💻",
        textEn: "Were customer financial transactions lost during the database bottleneck?",
        textHi: "क्या डेटाबेस की रुकावट के दौरान ग्राहकों के वित्तीय लेनदेन का कोई नुकसान हुआ था?"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍💻",
        textEn: "No, all payment requests were buffered in the persistent Kafka message queue; data loss was exactly zero.",
        textHi: "नहीं, सभी भुगतान अनुरोध सुरक्षित काफ्का मैसेज कतार में बफर किए गए थे; डेटा का नुकसान बिल्कुल शून्य था।"
      },
      {
        speaker: "Deepa",
        avatar: "👩‍💻",
        textEn: "That was a tremendous safeguard for our financial integrity.",
        textHi: "यह हमारी वित्तीय अखंडता के लिए एक जबरदस्त सुरक्षा कवच था।"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍💻",
        textEn: "Our transactional safeguards were fully resilient despite the traffic overload.",
        textHi: "ट्रैफिक अधिभार के बावजूद हमारी लेन-देन संबंधी सुरक्षा पूरी तरह लचीली और सुरक्षित थी।"
      },
      {
        speaker: "Deepa",
        avatar: "👩‍💻",
        textEn: "How was the team's incident resolution response time?",
        textHi: "टीम की घटना समाधान प्रतिक्रिया समय कैसा था?"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍💻",
        textEn: "The on-call DevOps engineers were on the incident bridge in less than two minutes.",
        textHi: "ऑन-कॉल डेवऑप्स इंजीनियर दो मिनट से भी कम समय में इंसिडेंट ब्रिज पर उपस्थित थे।"
      },
      {
        speaker: "Deepa",
        avatar: "👩‍💻",
        textEn: "I was very impressed by the rapid resolution without manual database restarts.",
        textHi: "बिना मैन्युअल डेटाबेस रीस्टार्ट के त्वरित समाधान से मैं बहुत प्रभावित हुई।"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍💻",
        textEn: "Dynamic query throttling was the solution that stabilized the database cluster.",
        textHi: "डायनामिक क्वेरी थ्रॉटलिंग वह समाधान था जिसने डेटाबेस क्लस्टर को स्थिर किया।"
      },
      {
        speaker: "Deepa",
        avatar: "👩‍💻",
        textEn: "Yesterday was a valuable learning curve for our architectural scaling.",
        textHi: "कल का दिन हमारे आर्किटेक्चरल स्केलिंग के लिए एक मूल्यवान सीख का दिन था।"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍💻",
        textEn: "Our new connection pooling configuration is now five times larger.",
        textHi: "हमारा नया कनेक्शन पूलिंग कॉन्फ़िगरेशन अब पांच गुना बड़ा है।"
      },
      {
        speaker: "Deepa",
        avatar: "👩‍💻",
        textEn: "Let us publish the incident post-mortem to senior leadership.",
        textHi: "आइए वरिष्ठ नेतृत्व को घटना के बाद की समीक्षा रिपोर्ट प्रस्तुत करें।"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍💻",
        textEn: "The post-mortem document is published.",
        textHi: "समीक्षा दस्तावेज प्रकाशित कर दिया गया है।"
      }
    ]
  }
];
