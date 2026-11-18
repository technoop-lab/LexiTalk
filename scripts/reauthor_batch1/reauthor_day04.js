import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const day04Dialogues = [
  {
    id: "d04_sc01",
    title: "Data Operations Command Center: Server Deployment Directives",
    titleHi: "डेटा ऑपरेशंस कमांड सेंटर: सर्वर डिप्लॉयमेंट और त्वरित निर्देश",
    context: "Lead Infrastructure Architect Dev and Systems Engineer Priya manage a major live cloud migration.",
    situation: "Mastering action imperatives ('Reboot...', 'Don't touch...', 'Monitor...', 'Speak clearly', 'Let's verify...').",
    characters: ["Dev", "Priya"],
    turns: [
      {
        speaker: "Dev",
        avatar: "👨‍💻",
        textEn: "Listen carefully, team! We are initiating the primary database migration in sixty seconds.",
        textHi: "टीम, ध्यान से सुनो! हम साठ सेकंड में प्राथमिक डेटाबेस माइग्रेशन शुरू कर रहे हैं।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💻",
        textEn: "Understood, Dev! The backup cluster is synchronized and ready on standby.",
        textHi: "समझ गई, देव! बैकअप क्लस्टर सिंक हो चुका है और स्टैंडबाय पर तैयार है।"
      },
      {
        speaker: "Dev",
        avatar: "👨‍💻",
        textEn: "Priya, switch over the DNS traffic routes to the European server farm now.",
        textHi: "प्रिया, डीएनएस ट्रैफिक रूट्स को अभी यूरोपीय सर्वर फार्म पर स्विच करो।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💻",
        textEn: "Switching DNS routing immediately... done. Traffic is flowing smoothly.",
        textHi: "डीएनएस रूटिंग अभी बदल रही हूँ... हो गया। ट्रैफिक सुचारू रूप से चल रहा है।"
      },
      {
        speaker: "Dev",
        avatar: "👨‍💻",
        textEn: "Don't alter the firewall configuration until the checksum verification completes.",
        textHi: "जब तक चेकसम सत्यापन पूरा न हो जाए, फ़ायरवॉल कॉन्फ़िगरेशन में कोई बदलाव मत करना।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💻",
        textEn: "Got it. I will keep the security rules locked in place.",
        textHi: "समझ गई। मैं सुरक्षा नियमों को यथावत लॉक रखूँगी।"
      },
      {
        speaker: "Dev",
        avatar: "👨‍💻",
        textEn: "Speak clearly into the conference headset so the London operations team hears every step.",
        textHi: "कॉन्फ्रेंस हेडसेट में स्पष्ट बोलें ताकि लंदन की ऑपरेशंस टीम हर कदम को साफ सुन सके।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💻",
        textEn: "Testing channel: London team, confirm receipt of the automated data sync logs.",
        textHi: "चैनल परीक्षण: लंदन टीम, स्वचालित डेटा सिंक लॉग प्राप्त होने की पुष्टि करें।"
      },
      {
        speaker: "Dev",
        avatar: "👨‍💻",
        textEn: "Hold on for five seconds! Check the latency spike on Node 4.",
        textHi: "पांच सेकंड के लिए रुको! नोड 4 पर लेटेंसी के अचानक बढ़ने की जाँच करो।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💻",
        textEn: "Inspecting Node 4... the memory buffer is overflowing due to heavy queries.",
        textHi: "नोड 4 की जाँच कर रही हूँ... भारी प्रश्नों के कारण मेमोरी बफर भर रहा है।"
      },
      {
        speaker: "Dev",
        avatar: "👨‍💻",
        textEn: "Flush the cache immediately! Do not restart the entire container cluster.",
        textHi: "कैश को तुरंत खाली करो! पूरे कंटेनर क्लस्टर को पुनः आरंभ मत करना।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💻",
        textEn: "Flushing memory cache now... latency has dropped back to nine milliseconds!",
        textHi: "मेमोरी कैश अभी खाली कर रही हूँ... लेटेंसी वापस घटकर नौ मिलीसेकंड पर आ गई है!"
      },
      {
        speaker: "Dev",
        avatar: "👨‍💻",
        textEn: "Great! Let us verify the master database integrity report.",
        textHi: "बहुत बढ़िया! आइए मास्टर डेटाबेस अखंडता रिपोर्ट की पुष्टि करें।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💻",
        textEn: "Generating cryptographic integrity report... zero errors detected across ten million records!",
        textHi: "क्रिप्टोग्राफिक अखंडता रिपोर्ट तैयार कर रही हूँ... एक करोड़ रिकॉर्ड में शून्य त्रुटि पाई गई!"
      },
      {
        speaker: "Dev",
        avatar: "👨‍💻",
        textEn: "Splendid! Save the final deployment snapshot and notify the global release director.",
        textHi: "अति उत्तम! अंतिम परिनियोजन स्नैपशॉट सहेजें और वैश्विक रिलीज़ निदेशक को सूचित करें।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💻",
        textEn: "Snapshot saved and confirmation email dispatched to leadership.",
        textHi: "स्नैपशॉट सहेज लिया गया है और नेतृत्व को पुष्टिकरण ईमेल भेज दिया गया है।"
      },
      {
        speaker: "Dev",
        avatar: "👨‍💻",
        textEn: "Take a well-deserved breather, Priya. Exceptional execution under pressure!",
        textHi: "प्रिया, अब थोड़ा विश्राम करो। दबाव में असाधारण कार्य निष्पादन रहा!"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💻",
        textEn: "Thank you, Dev! Clear directives made all the difference.",
        textHi: "धन्यवाद, देव! स्पष्ट निर्देशों ने सारा अंतर पैदा कर दिया।"
      },
      {
        speaker: "Dev",
        avatar: "👨‍💻",
        textEn: "Let's grab some coffee!",
        textHi: "चलो कुछ कॉफी पीते हैं!"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💻",
        textEn: "Lead the way!",
        textHi: "आगे चलो!"
      }
    ]
  },
  {
    id: "d04_sc02",
    title: "Commercial Aviation Cockpit: Pre-Flight Checklist Imperatives",
    titleHi: "हवाई जहाज का कॉकपिट: उड़ान-पूर्व चेकलिस्ट और अनिवार्य आदेश",
    context: "Captain Rajiv and First Officer Neha run through strict pre-flight cockpit safety checklists.",
    situation: "Formulating crisp, standard operational imperatives ('Switch on...', 'Check...', 'Don't overlook...', 'Verify...').",
    characters: ["Captain Rajiv", "First Officer Neha"],
    turns: [
      {
        speaker: "Captain Rajiv",
        avatar: "👨‍✈️",
        textEn: "Good morning, First Officer Neha. Let us commence the pre-flight cockpit checklist for Flight 308.",
        textHi: "शुभ प्रभात, फर्स्ट ऑफिसर नेहा। आइए फ्लाइट 308 के लिए उड़ान-पूर्व कॉकपिट चेकलिस्ट शुरू करें।"
      },
      {
        speaker: "First Officer Neha",
        avatar: "👩‍✈️",
        textEn: "Good morning, Captain. Ready for checklist verification.",
        textHi: "शुभ प्रभात, कैप्टन। चेकलिस्ट सत्यापन के लिए तैयार हूँ।"
      },
      {
        speaker: "Captain Rajiv",
        avatar: "👨‍✈️",
        textEn: "Turn on the auxiliary power unit and check the primary electrical bus.",
        textHi: "सहायक बिजली इकाई (APU) चालू करें और मुख्य विद्युत बस की जाँच करें।"
      },
      {
        speaker: "First Officer Neha",
        avatar: "👩‍✈️",
        textEn: "Auxiliary power active. Voltage and frequency are reading stable.",
        textHi: "सहायक बिजली सक्रिय है। वोल्टेज और आवृत्ति स्थिर दिखाई दे रहे हैं।"
      },
      {
        speaker: "Captain Rajiv",
        avatar: "👨‍✈️",
        textEn: "Verify fuel quantity and balance across both wing tanks.",
        textHi: "दोनों विंग टैंकों में ईंधन की मात्रा और संतुलन की पुष्टि करें।"
      },
      {
        speaker: "First Officer Neha",
        avatar: "👩‍✈️",
        textEn: "Fourteen thousand kilograms loaded; balance is perfectly centered.",
        textHi: "चौदह हजार किलोग्राम लोड है; संतुलन बिल्कुल केंद्र में है।"
      },
      {
        speaker: "Captain Rajiv",
        avatar: "👨‍✈️",
        textEn: "Set the altimeters to the local atmospheric pressure of 1013 hectopascals.",
        textHi: "अल्टीमीटर को 1013 हेक्टोपास्कल के स्थानीय वायुमंडलीय दबाव पर सेट करें।"
      },
      {
        speaker: "First Officer Neha",
        avatar: "👩‍✈️",
        textEn: "Altimeters cross-checked and locked at 1013.",
        textHi: "अल्टीमीटर की दोबारा जाँच कर ली गई है और 1013 पर लॉक कर दिया गया है।"
      },
      {
        speaker: "Captain Rajiv",
        avatar: "👨‍✈️",
        textEn: "Do not arm the emergency exit slide levers until the ground crew closes the main cabin doors.",
        textHi: "जब तक ग्राउंड क्रू मुख्य केबिन के दरवाजे बंद न कर दे, तब तक आपातकालीन स्लाइड लीवर को सक्रिय मत करना।"
      },
      {
        speaker: "First Officer Neha",
        avatar: "👩‍✈️",
        textEn: "Understood. Slide levers remain in disarmed position.",
        textHi: "समझ गई। स्लाइड लीवर निष्क्रिय स्थिति में ही रहेंगे।"
      },
      {
        speaker: "Captain Rajiv",
        avatar: "👨‍✈️",
        textEn: "Check the flight control surfaces—move the rudder fully left and right.",
        textHi: "उड़ान नियंत्रण सतहों की जाँच करें—रडर को पूरी तरह बाएं और दाएं घुमाएं।"
      },
      {
        speaker: "First Officer Neha",
        avatar: "👩‍✈️",
        textEn: "Rudder movement is free and responsive on all flight monitors.",
        textHi: "सभी उड़ान मॉनिटरों पर रडर की गति सहज और उत्तरदायी है।"
      },
      {
        speaker: "Captain Rajiv",
        avatar: "👨‍✈️",
        textEn: "Contact air traffic control and request pushback clearance.",
        textHi: "एयर ट्रैफिक कंट्रोल से संपर्क करें और पुशबैक क्लीयरेंस का अनुरोध करें।"
      },
      {
        speaker: "First Officer Neha",
        avatar: "👩‍✈️",
        textEn: "Tower, Flight 308 requests pushback and engine start from Gate 12.",
        textHi: "टावर, फ्लाइट 308 गेट 12 से पुशबैक और इंजन स्टार्ट की अनुमति मांगती है।"
      },
      {
        speaker: "Captain Rajiv",
        avatar: "👨‍✈️",
        textEn: "Listen for the ground tug response on channel two.",
        textHi: "चैनल दो पर ग्राउंड टग की प्रतिक्रिया सुनें।"
      },
      {
        speaker: "First Officer Neha",
        avatar: "👩‍✈️",
        textEn: "Ground confirms bypass pin inserted and area clear for pushback.",
        textHi: "ग्राउंड ने बाईपास पिन डाले जाने और पुशबैक के लिए क्षेत्र साफ होने की पुष्टि की है।"
      },
      {
        speaker: "Captain Rajiv",
        avatar: "👨‍✈️",
        textEn: "Release the parking brake and initiate engine number two start sequence.",
        textHi: "पार्किंग ब्रेक छोड़ें और इंजन नंबर दो स्टार्ट सीक्वेंस शुरू करें।"
      },
      {
        speaker: "First Officer Neha",
        avatar: "👩‍✈️",
        textEn: "Brakes released. Starting engine two now.",
        textHi: "ब्रेक छोड़ दिए गए। इंजन दो अभी शुरू किया जा रहा है।"
      },
      {
        speaker: "Captain Rajiv",
        avatar: "👨‍✈️",
        textEn: "Flawless procedure, Neha. Let us prepare for takeoff.",
        textHi: "उत्कृष्ट प्रक्रिया, नेहा। आइए उड़ान भरने की तैयारी करें।"
      },
      {
        speaker: "First Officer Neha",
        avatar: "👩‍✈️",
        textEn: "Ready for departure, Captain!",
        textHi: "उड़ान के लिए तैयार, कैप्टन!"
      }
    ]
  },
  {
    id: "d04_sc03",
    title: "Gourmet Restaurant Kitchen: Dinner Rush Directives",
    titleHi: "गॉरमेट रेस्टोरेंट की रसोई: डिनर के व्यस्त समय में शेफ के निर्देश",
    context: "Executive Chef Marco guides sous-chef Karan during an intense Saturday night dinner service.",
    situation: "Practicing urgent culinary imperatives ('Chop...', 'Don't overcook...', 'Plate...', 'Listen to me', 'Taste this...').",
    characters: ["Chef Marco", "Karan"],
    turns: [
      {
        speaker: "Chef Marco",
        avatar: "👨‍🍳",
        textEn: "Listen to me, brigade! We have twelve tickets on the rail simultaneously!",
        textHi: "ब्रिगेड, मेरी बात ध्यान से सुनो! हमारे पास एक साथ बारह ऑर्डर टिकट आ चुके हैं!"
      },
      {
        speaker: "Karan",
        avatar: "👨‍🍳",
        textEn: "Standing by on the sauté station, Chef!",
        textHi: "सौते स्टेशन पर तैयार हूँ, शेफ!"
      },
      {
        speaker: "Chef Marco",
        avatar: "👨‍🍳",
        textEn: "Karan, sear four Atlantic salmon fillets on high heat for three minutes.",
        textHi: "करन, तेज आंच पर चार अटलांटिक सैल्मन फिलेट्स को तीन मिनट के लिए भूनो।"
      },
      {
        speaker: "Karan",
        avatar: "👨‍🍳",
        textEn: "Salmon fillets are sizzling in the cast-iron pan right now, Chef.",
        textHi: "सैल्मन फिलेट्स अभी कच्ची लोहे की कड़ाही में भुन रहे हैं, शेफ।"
      },
      {
        speaker: "Chef Marco",
        avatar: "👨‍🍳",
        textEn: "Do not overcook the fish! Keep the center tender and moist.",
        textHi: "मछली को ज्यादा मत पकाना! उसके बीच के हिस्से को कोमल और नम ही रहने देना।"
      },
      {
        speaker: "Karan",
        avatar: "👨‍🍳",
        textEn: "Understood. Monitoring the internal temperature with the probe thermometer.",
        textHi: "समझ गया। प्रोब थर्मामीटर से अंदरूनी तापमान पर नजर रख रहा हूँ।"
      },
      {
        speaker: "Chef Marco",
        avatar: "👨‍🍳",
        textEn: "Chop the fresh dill and tarragon finely for the lemon emulsion.",
        textHi: "नींबू के इमल्शन के लिए ताज़ा सोआ (dill) और तारगोन को बारीक काटो।"
      },
      {
        speaker: "Karan",
        avatar: "👨‍🍳",
        textEn: "Herbs chopped and folded into the butter sauce.",
        textHi: "जड़ी-बूटियाँ बारीक कट चुकी हैं और मक्खन की चटनी में मिला दी गई हैं।"
      },
      {
        speaker: "Chef Marco",
        avatar: "👨‍🍳",
        textEn: "Taste this reduction sauce and tell me if it needs more sea salt.",
        textHi: "इस रिडक्शन सॉस का स्वाद चखो और बताओ कि क्या इसमें और समुद्री नमक चाहिए।"
      },
      {
        speaker: "Karan",
        avatar: "👨‍🍳",
        textEn: "The acidity is balanced, but add just a pinch of cracked white pepper.",
        textHi: "खटास संतुलित है, लेकिन बस एक चुटकी पिसी हुई सफेद मिर्च और डाल दीजिए।"
      },
      {
        speaker: "Chef Marco",
        avatar: "👨‍🍳",
        textEn: "Good palate! Plate the appetizers for Table 7 on warm stoneware.",
        textHi: "बहुत बढ़िया स्वाद पहचान! टेबल 7 के ऐपेटाइज़र को गर्म चीनी मिट्टी की प्लेटों में सजाओ।"
      },
      {
        speaker: "Karan",
        avatar: "👨‍🍳",
        textEn: "Plating the wild mushroom tarts with microgreens right away.",
        textHi: "जंगली मशरूम टार्ट्स को ताज़ी सूक्ष्म पत्तियों के साथ तुरंत प्लेट में सजा रहा हूँ।"
      },
      {
        speaker: "Chef Marco",
        avatar: "👨‍🍳",
        textEn: "Wipe the edges of every single plate with clean linen before it leaves the pass!",
        textHi: "काउंटर से निकलने से पहले हर प्लेट के किनारों को साफ कपड़े से पोंछो!"
      },
      {
        speaker: "Karan",
        avatar: "👨‍🍳",
        textEn: "All plate rims are wiped and spotless, Chef.",
        textHi: "सभी प्लेटों के किनारे पोंछ दिए गए हैं और बिल्कुल बेदाग हैं, शेफ।"
      },
      {
        speaker: "Chef Marco",
        avatar: "👨‍🍳",
        textEn: "Ring the service bell and call the waitstaff!",
        textHi: "सर्विस की घंटी बजाओ और वेटर्स को बुलाओ!"
      },
      {
        speaker: "Karan",
        avatar: "👨‍🍳",
        textEn: "Service, pick up hot entrees for Table 7 and 9!",
        textHi: "सर्विस, टेबल 7 और 9 के लिए गर्म व्यंजन ले जाइए!"
      },
      {
        speaker: "Chef Marco",
        avatar: "👨‍🍳",
        textEn: "Outstanding speed and discipline, Karan! Keep this standard through the entire rush.",
        textHi: "शानदार गति और अनुशासन, करन! पूरी व्यस्तता के दौरान इस स्तर को बनाए रखो।"
      },
      {
        speaker: "Karan",
        avatar: "👨‍🍳",
        textEn: "Thank you, Chef! On to the next order!",
        textHi: "धन्यवाद, शेफ! अगले ऑर्डर की ओर बढ़ते हैं!"
      },
      {
        speaker: "Chef Marco",
        avatar: "👨‍🍳",
        textEn: "Let's push through!",
        textHi: "चलो पूरी ताकत से काम करें!"
      },
      {
        speaker: "Karan",
        avatar: "👨‍🍳",
        textEn: "Yes, Chef!",
        textHi: "जी, शेफ!"
      }
    ]
  },
  {
    id: "d04_sc04",
    title: "Urban Driving School: Navigational Directives & Safety Imperatives",
    titleHi: "शहरी ड्राइविंग स्कूल: दिशा निर्देश और सुरक्षा संबंधी आदेश",
    context: "Driving instructor Mr. Kapoor guides student driver Pooja through a busy multi-lane roundabout.",
    situation: "Formulating vehicular motion imperatives ('Turn right...', 'Don't accelerate...', 'Check mirror...', 'Brake gently...').",
    characters: ["Mr. Kapoor", "Pooja"],
    turns: [
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍🏫",
        textEn: "Adjust your seat, fasten your seatbelt, and check your rearview mirror.",
        textHi: "अपनी सीट ठीक करें, सीटबेल्ट बांधें और अपने पीछे देखने वाले शीशे की जाँच करें।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍🎓",
        textEn: "Seat adjusted, belt fastened, and mirrors aligned.",
        textHi: "सीट ठीक हो गई, बेल्ट बंध गई और शीशे संरेखित हो गए हैं।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍🏫",
        textEn: "Press the clutch pedal fully, start the engine, and shift into first gear.",
        textHi: "क्लच पैडल को पूरा दबाएं, इंजन स्टार्ट करें और पहले गियर में डालें।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍🎓",
        textEn: "Engine is idling smoothly in first gear.",
        textHi: "इंजन पहले गियर में सुचारू रूप से चल रहा है।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍🏫",
        textEn: "Release the handbrake and indicate your intention to join traffic with the right turn signal.",
        textHi: "हैंडब्रेक छोड़ें और दायां इंडिकेटर देकर ट्रैफिक में शामिल होने का संकेत दें।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍🎓",
        textEn: "Handbrake down, right indicator blinking.",
        textHi: "हैंडब्रेक नीचे कर दिया, दायां इंडिकेटर चमक रहा है।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍🏫",
        textEn: "Look over your right shoulder for blind spots. Don't rely solely on the side mirror.",
        textHi: "ब्लाइंड स्पॉट देखने के लिए अपने दाहिने कंधे के ऊपर से पीछे देखें। केवल साइड मिरर पर निर्भर मत रहें।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍🎓",
        textEn: "Checked blind spot... the lane is clear. Merging gently into traffic.",
        textHi: "ब्लाइंड स्पॉट देख लिया... लेन साफ है। धीरे-धीरे ट्रैफिक में प्रवेश कर रही हूँ।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍🏫",
        textEn: "Maintain a steady speed of thirty kilometers per hour. Don't tailgate the vehicle ahead.",
        textHi: "तीस किलोमीटर प्रति घंटे की स्थिर गति बनाए रखें। आगे वाले वाहन के बिल्कुल करीब मत चलें।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍🎓",
        textEn: "Keeping a safe three-second following distance.",
        textHi: "तीन सेकंड की सुरक्षित दूरी बनाए रखी है।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍🏫",
        textEn: "We are approaching the roundabout. Slow down and yield to vehicles circulating from your right.",
        textHi: "हम गोल चक्कर के पास आ रहे हैं। गति धीमी करें और अपनी दाईं ओर से आ रहे वाहनों को रास्ता दें।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍🎓",
        textEn: "Braking gently... waiting for the blue sedan to pass.",
        textHi: "धीरे-धीरे ब्रेक लगा रही हूँ... नीली सेडान के निकलने की प्रतीक्षा कर रही हूँ।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍🏫",
        textEn: "Now enter the roundabout smoothly and stay in the middle lane.",
        textHi: "अब गोल चक्कर में सहजता से प्रवेश करें और बीच की लेन में रहें।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍🎓",
        textEn: "Steering smoothly around the circle.",
        textHi: "चक्कर के चारों ओर आसानी से स्टीयरिंग घुमा रही हूँ।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍🏫",
        textEn: "Indicate left now and take the second exit toward MG Road.",
        textHi: "अब बायां इंडिकेटर दें और एमजी रोड की ओर दूसरा निकास लें।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍🎓",
        textEn: "Exiting smoothly onto MG Road.",
        textHi: "एमजी रोड पर सुगमता से बाहर निकल आई हूँ।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍🏫",
        textEn: "Cancel your indicator, straighten the steering wheel, and shift up to third gear.",
        textHi: "इंडिकेटर बंद करें, स्टीयरिंग व्हील सीधा करें और तीसरे गियर में शिफ्ट करें।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍🎓",
        textEn: "Shifted to third gear. That was much less stressful than my first attempt!",
        textHi: "तीसरे गियर में शिफ्ट कर दिया। यह मेरे पहले प्रयास की तुलना में बहुत कम तनावपूर्ण था!"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍🏫",
        textEn: "Excellent composure and precision, Pooja! Pull over near the kerb and apply the parking brake.",
        textHi: "पूजा, बेहतरीन संयम और सटीकता! फुटपाथ के पास गाड़ी रोकें और पार्किंग ब्रेक लगाएं।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍🎓",
        textEn: "Thank you for the clear instructions, Mr. Kapoor!",
        textHi: "स्पष्ट निर्देशों के लिए धन्यवाद, मिस्टर कपूर!"
      }
    ]
  },
  {
    id: "d04_sc05",
    title: "Hospital Emergency Trauma Triage: Critical Imperatives",
    titleHi: "अस्पताल आपातकालीन ट्राइएज: गंभीर चिकित्सीय निर्देश",
    context: "Emergency Physician Dr. Nambiar coordinates clinical nurses during a multi-patient trauma admission.",
    situation: "Issuing clinical imperatives ('Administer...', 'Check...', 'Don't delay...', 'Record vitals...', 'Stay calm...').",
    characters: ["Dr. Nambiar", "Nurse Reena"],
    turns: [
      {
        speaker: "Dr. Nambiar",
        avatar: "👨‍⚕️",
        textEn: "Prepare Trauma Bay 1 immediately! An ambulance with a highway collision casualty is arriving in two minutes.",
        textHi: "ट्रॉमा बे 1 को तुरंत तैयार करें! हाईवे दुर्घटना के मरीज के साथ एक एम्बुलेंस दो मिनट में पहुंच रही है।"
      },
      {
        speaker: "Nurse Reena",
        avatar: "👩‍⚕️",
        textEn: "Trauma Bay 1 is prepped, suction is operational, and defibrillator is tested.",
        textHi: "ट्रॉमा बे 1 तैयार है, सक्शन चालू है और डिफाइब्रिलेटर का परीक्षण कर लिया गया है।"
      },
      {
        speaker: "Dr. Nambiar",
        avatar: "👨‍⚕️",
        textEn: "Attach the multi-parameter cardiac monitor and record baseline blood pressure instantly.",
        textHi: "मल्टी-पैरामीटर कार्डियक मॉनिटर लगाएं और तुरंत आधारभूत रक्तचाप दर्ज करें।"
      },
      {
        speaker: "Nurse Reena",
        avatar: "👩‍⚕️",
        textEn: "Electrodes placed. Blood pressure is ninety over sixty; pulse rate is one hundred and ten.",
        textHi: "इलेक्ट्रोड लगा दिए गए हैं। रक्तचाप 90/60 है; नाड़ी की गति एक सौ दस है।"
      },
      {
        speaker: "Dr. Nambiar",
        avatar: "👨‍⚕️",
        textEn: "Administer fifteen liters of high-flow oxygen via a non-rebreather mask right now.",
        textHi: "नॉन-रीब्रीदर मास्क के माध्यम से अभी पंद्रह लीटर हाई-फ्लो ऑक्सीजन दें।"
      },
      {
        speaker: "Nurse Reena",
        avatar: "👩‍⚕️",
        textEn: "Oxygen mask secured. Oxygen saturation is rising to ninety-six percent.",
        textHi: "ऑक्सीजन मास्क लगा दिया गया। ऑक्सीजन संतृप्ति बढ़कर छियानवे प्रतिशत हो रही है।"
      },
      {
        speaker: "Dr. Nambiar",
        avatar: "👨‍⚕️",
        textEn: "Insert two wide-bore intravenous cannulas and draw blood samples for cross-matching.",
        textHi: "दो चौड़े इंट्रावेनस कैनुला लगाएं और क्रॉस-मैचिंग के लिए रक्त के नमूने लें।"
      },
      {
        speaker: "Nurse Reena",
        avatar: "👩‍⚕️",
        textEn: "IV lines established. Sending blood tubes to the blood bank via pneumatic tube.",
        textHi: "आईवी लाइन चालू हो गई है। न्यूमेटिक ट्यूब के माध्यम से ब्लड बैंक को रक्त के नमूने भेजे जा रहे हैं।"
      },
      {
        speaker: "Dr. Nambiar",
        avatar: "👨‍⚕️",
        textEn: "Do not move the cervical spine! Keep the neck collar firmly immobilized.",
        textHi: "गर्दन की रीढ़ की हड्डी को बिल्कुल मत हिलाएं! नेक कॉलर को मजबूती से स्थिर रखें।"
      },
      {
        speaker: "Nurse Reena",
        avatar: "👩‍⚕️",
        textEn: "C-spine collar is locked securely in neutral alignment.",
        textHi: "गर्दन का कॉलर तटस्थ सीध में सुरक्षित रूप से लॉक है।"
      },
      {
        speaker: "Dr. Nambiar",
        avatar: "👨‍⚕️",
        textEn: "Infuse one liter of warm Ringer's lactate solution rapidly.",
        textHi: "एक लीटर गर्म रिंगर लैक्टेट घोल तेजी से चढ़ाएं।"
      },
      {
        speaker: "Nurse Reena",
        avatar: "👩‍⚕️",
        textEn: "Fluid bolus running under pressure cuff.",
        textHi: "दबाव कफ के तहत तरल पदार्थ तेजी से चढ़ाया जा रहा है।"
      },
      {
        speaker: "Dr. Nambiar",
        avatar: "👨‍⚕️",
        textEn: "Page the orthopedic surgeon and call the radiology suite for an emergency trauma CT scan.",
        textHi: "हड्डी रोग विशेषज्ञ को पेज करें और आपातकालीन ट्रॉमा सीटी स्कैन के लिए रेडियोलॉजी विभाग को फोन करें।"
      },
      {
        speaker: "Nurse Reena",
        avatar: "👩‍⚕️",
        textEn: "Radiology is standing by; CT scanner is open and ready for transfer.",
        textHi: "रेडियोलॉजी विभाग तैयार है; सीटी स्कैनर खाली है और मरीज को लेने के लिए तैयार है।"
      },
      {
        speaker: "Dr. Nambiar",
        avatar: "👨‍⚕️",
        textEn: "Verify patient responsiveness on the Glasgow Coma Scale.",
        textHi: "ग्लासगो कोमा स्केल पर रोगी की प्रतिक्रियाशीलता की पुष्टि करें।"
      },
      {
        speaker: "Nurse Reena",
        avatar: "👩‍⚕️",
        textEn: "GCS score is fourteen; patient is responding to vocal commands.",
        textHi: "जीसीएस स्कोर चौदह है; मरीज बोलकर दिए गए निर्देशों का जवाब दे रहा है।"
      },
      {
        speaker: "Dr. Nambiar",
        avatar: "👨‍⚕️",
        textEn: "Great work, Reena! Let us wheel the gurney to the CT suite carefully.",
        textHi: "बहुत बढ़िया काम, रीना! आइए स्ट्रेचर को सावधानीपूर्वक सीटी रूम की ओर ले चलें।"
      },
      {
        speaker: "Nurse Reena",
        avatar: "👩‍⚕️",
        textEn: "Moving smoothly on your count, Doctor.",
        textHi: "डॉक्टर, आपके गिनने पर धीरे-धीरे आगे बढ़ा रही हूँ।"
      },
      {
        speaker: "Dr. Nambiar",
        avatar: "👨‍⚕️",
        textEn: "One, two, three—move!",
        textHi: "एक, दो, तीन—चलिए!"
      },
      {
        speaker: "Nurse Reena",
        avatar: "👩‍⚕️",
        textEn: "Rolling smoothly.",
        textHi: "सुचारू रूप से आगे बढ़ रहे हैं।"
      }
    ]
  },
  {
    id: "d04_sc06",
    title: "University Chemistry Laboratory: Safety Protocol Imperatives",
    titleHi: "विश्वविद्यालय रसायन प्रयोगशाला: सुरक्षा प्रोटोकॉल और अनिवार्य नियम",
    context: "Lab Instructor Dr. Ganguly guides first-year research students through acid-base titration safety protocols.",
    situation: "Practicing rigorous laboratory safety imperatives ('Wear...', 'Never pour...', 'Handle...', 'Don't inhale...').",
    characters: ["Dr. Ganguly", "Aditya"],
    turns: [
      {
        speaker: "Dr. Ganguly",
        avatar: "👨‍🔬",
        textEn: "Put on your splash-proof safety goggles and laboratory aprons before approaching the fume hood.",
        textHi: "फ्यूम हुड के पास जाने से पहले अपने चश्मे और लैब एप्रन पहन लें।"
      },
      {
        speaker: "Aditya",
        avatar: "👨‍🎓",
        textEn: "Goggles on and apron fastened securely, Dr. Ganguly.",
        textHi: "चश्मा पहन लिया और एप्रन मजबूती से बांध लिया है, डॉ. गांगुली।"
      },
      {
        speaker: "Dr. Ganguly",
        avatar: "👨‍🔬",
        textEn: "Never pour water directly into concentrated sulfuric acid! Always add acid slowly to water.",
        textHi: "सांद्र सल्फ्यूरिक एसिड में कभी भी सीधे पानी न डालें! हमेशा पानी में धीरे-धीरे एसिड मिलाएं।"
      },
      {
        speaker: "Aditya",
        avatar: "👨‍🎓",
        textEn: "Yes, Sir! 'Acid to water, like rain into the sea' to prevent exothermic splattering.",
        textHi: "जी हाँ, सर! अत्यधिक गर्मी से होने वाले छीटों को रोकने के लिए हमेशा 'पानी में एसिड मिलाना' चाहिए।"
      },
      {
        speaker: "Dr. Ganguly",
        avatar: "👨‍🔬",
        textEn: "Switch on the ventilation exhaust fan inside the fume chamber.",
        textHi: "फ्यूम चैंबर के अंदर वेंटिलेशन एग्जॉस्ट फैन चालू करें।"
      },
      {
        speaker: "Aditya",
        avatar: "👨‍🎓",
        textEn: "Exhaust fan is running at maximum velocity.",
        textHi: "एग्जॉस्ट पंखा पूरी गति से चल रहा है।"
      },
      {
        speaker: "Dr. Ganguly",
        avatar: "👨‍🔬",
        textEn: "Handle the graduated burette with both hands and mount it vertically on the iron stand.",
        textHi: "अंशांकित ब्यूरेट को दोनों हाथों से पकड़ें और इसे लोहे के स्टैंड पर सीधा लगाएं।"
      },
      {
        speaker: "Aditya",
        avatar: "👨‍🎓",
        textEn: "Burette clamped securely and filled with sodium hydroxide solution.",
        textHi: "ब्यूरेट मजबूती से बंध गया है और सोडियम हाइड्रॉक्साइड के घोल से भर दिया गया है।"
      },
      {
        speaker: "Dr. Ganguly",
        avatar: "👨‍🔬",
        textEn: "Do not touch the stopcock with wet fingertips; keep your grip steady.",
        textHi: "गीली उंगलियों से स्टॉपकॉक को न छुएं; अपनी पकड़ स्थिर रखें।"
      },
      {
        speaker: "Aditya",
        avatar: "👨‍🎓",
        textEn: "Understood. Releasing the titrant drop by drop into the conical flask.",
        textHi: "समझ गया। शंक्वाकार फ्लास्क में बूंद-बूंद करके घोल टपका रहा हूँ।"
      },
      {
        speaker: "Dr. Ganguly",
        avatar: "👨‍🔬",
        textEn: "Swirl the flask continuously as the phenolphthalein indicator changes hue.",
        textHi: "जैसे ही फेनोल्फथेलिन सूचक का रंग बदले, फ्लास्क को लगातार धीरे-धीरे हिलाते रहें।"
      },
      {
        speaker: "Aditya",
        avatar: "👨‍🎓",
        textEn: "Swirling steadily... the solution has turned a persistent pale pink!",
        textHi: "लगातार हिला रहा हूँ... घोल का रंग हल्का गुलाबी हो गया है!"
      },
      {
        speaker: "Dr. Ganguly",
        avatar: "👨‍🔬",
        textEn: "Close the stopcock immediately! Record the exact volume reading at the bottom of the meniscus.",
        textHi: "स्टॉपकॉक को तुरंत बंद करें! मेनिस्कस के निचले सिरे पर सटीक रीडिंग दर्ज करें।"
      },
      {
        speaker: "Aditya",
        avatar: "👨‍🎓",
        textEn: "Reading is precisely twenty-two point four milliliters.",
        textHi: "रीडिंग ठीक बाईस दशमलव चार मिलीलीटर है।"
      },
      {
        speaker: "Dr. Ganguly",
        avatar: "👨‍🔬",
        textEn: "Neutralize the waste in the designated organic container. Never pour chemical residues down the general sink!",
        textHi: "निर्धारित कंटेनर में कचरे को निष्प्रभावी करें। कभी भी रासायनिक अवशेषों को सामान्य सिंक में न बहाएं!"
      },
      {
        speaker: "Aditya",
        avatar: "👨‍🎓",
        textEn: "Disposing of chemical residues into the hazardous waste bin now.",
        textHi: "खतरनाक अपशिष्ट डिब्बे में रासायनिक अवशेषों का निपटान कर रहा हूँ।"
      },
      {
        speaker: "Dr. Ganguly",
        avatar: "👨‍🔬",
        textEn: "Wash your hands thoroughly with antimicrobial soap at the decontamination station.",
        textHi: "धुलाई स्टेशन पर रोगाणुरोधी साबुन से अपने हाथों को अच्छी तरह धोएं।"
      },
      {
        speaker: "Aditya",
        avatar: "👨‍🎓",
        textEn: "Washing hands and wiping down the workstation bench.",
        textHi: "हाथ धो रहा हूँ और कार्यस्थल की मेज को पोंछकर साफ कर रहा हूँ।"
      },
      {
        speaker: "Dr. Ganguly",
        avatar: "👨‍🔬",
        textEn: "Exemplary adherence to laboratory safety protocols, Aditya.",
        textHi: "प्रयोगशाला सुरक्षा प्रोटोकॉल का अनुकरणीय पालन, आदित्य।"
      },
      {
        speaker: "Aditya",
        avatar: "👨‍🎓",
        textEn: "Thank you for the rigorous safety guidance, Doctor!",
        textHi: "कड़े सुरक्षा मार्गदर्शन के लिए धन्यवाद, डॉक्टर!"
      }
    ]
  },
  {
    id: "d04_sc07",
    title: "Cinematic Film Set: Director's Action Commands",
    titleHi: "सिनेमाई फिल्म का सेट: निर्देशक के निर्देश और शॉट आदेश",
    context: "Film Director Maya guides cinematographer Vikram and actor Kabir through a dramatic scene take.",
    situation: "Deploying set production imperatives ('Silence phones...', 'Stand on marker...', 'Roll camera...', 'Action!').",
    characters: ["Director Maya", "Vikram"],
    turns: [
      {
        speaker: "Director Maya",
        avatar: "👩‍🎨",
        textEn: "Quiet on set, everyone! Silence your mobile phones and clear the eyeline!",
        textHi: "सेट पर सब शांत हो जाएं! अपने मोबाइल फोन साइलेंट करें और कैमरे के सामने से हटें!"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍🎨",
        textEn: "Eyeline cleared, Maya. Camera A is mounted on the dolly track.",
        textHi: "सामने से सब हट गए हैं, माया। कैमरा ए डॉली ट्रैक पर लगा दिया गया है।"
      },
      {
        speaker: "Director Maya",
        avatar: "👩‍🎨",
        textEn: "Kabir, stand precisely on the red floor marker beside the street lamp.",
        textHi: "कबीर, स्ट्रीट लैंप के बगल में लाल निशान पर बिल्कुल सीधे खड़े हो जाओ।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍🎨",
        textEn: "Framing looks balanced. The rim light creates a sharp silhouette.",
        textHi: "फ्रेमिंग संतुलित दिख रही है। किनारे की रोशनी एक सुंदर रूपरेखा बना रही है।"
      },
      {
        speaker: "Director Maya",
        avatar: "👩‍🎨",
        textEn: "Dim the fill light by twenty percent to accentuate the shadows.",
        textHi: "परछाइयों को उभारने के लिए भराव रोशनी को बीस प्रतिशत कम करो।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍🎨",
        textEn: "Lighting dimmer adjusted. Contrast ratio is now three to one.",
        textHi: "रोशनी का डिमर सेट हो गया। कंट्रास्ट अनुपात अब तीन अनुपात एक है।"
      },
      {
        speaker: "Director Maya",
        avatar: "👩‍🎨",
        textEn: "Roll sound and lock the timecode!",
        textHi: "साउंड रोल करें और टाइमकोड लॉक करें!"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍🎨",
        textEn: "Sound speed! Timecode running.",
        textHi: "साउंड स्पीड! टाइमकोड चल रहा है।"
      },
      {
        speaker: "Director Maya",
        avatar: "👩‍🎨",
        textEn: "Roll camera!",
        textHi: "कैमरा रोल करें!"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍🎨",
        textEn: "Camera rolling! Mark the slate.",
        textHi: "कैमरा चालू है! क्लैपर बोर्ड लगाएं।"
      },
      {
        speaker: "Director Maya",
        avatar: "👩‍🎨",
        textEn: "Scene 42, Take 3... and Action!",
        textHi: "दृश्य 42, टेक 3... और एक्शन!"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍🎨",
        textEn: "Tracking smoothly along the rails... holding focus on the actor's eyes.",
        textHi: "रेल पर सुचारू रूप से आगे बढ़ रहा हूँ... अभिनेता की आँखों पर फोकस बनाए रखा है।"
      },
      {
        speaker: "Director Maya",
        avatar: "👩‍🎨",
        textEn: "Kabir, pause at the letterbox. Don't turn your head too quickly.",
        textHi: "कबीर, लेटरबॉक्स के पास रुको। अपना सिर बहुत तेजी से मत घुमाना।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍🎨",
        textEn: "Focus pull is razor-sharp. He is delivering the monologue with great intensity.",
        textHi: "फोकस बिल्कुल सटीक है। वह बहुत गहराई के साथ संवाद बोल रहे हैं।"
      },
      {
        speaker: "Director Maya",
        avatar: "👩‍🎨",
        textEn: "Hold the camera angle right there... hold... and Cut!",
        textHi: "कैमरे के एंगल को वहीं रोके रखें... रोके रखें... और कट!"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍🎨",
        textEn: "Cutting camera! How was that take on the director's monitor?",
        textHi: "कैमरा बंद! निर्देशक के मॉनिटर पर वह टेक कैसा लगा?"
      },
      {
        speaker: "Director Maya",
        avatar: "👩‍🎨",
        textEn: "That was absolute cinematic gold! Print that take and save the master audio file.",
        textHi: "वह सचमुच सिनेमाई जादू था! उस टेक को सुरक्षित करें और मुख्य ऑडियो फाइल सहेजें।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍🎨",
        textEn: "Take 3 logged as approved master. Moving to setup for Scene 43.",
        textHi: "टेक 3 को स्वीकृत मास्टर के रूप में दर्ज कर लिया गया है। दृश्य 43 की तैयारी के लिए बढ़ रहे हैं।"
      },
      {
        speaker: "Director Maya",
        avatar: "👩‍🎨",
        textEn: "Take a ten-minute lighting reset, everyone.",
        textHi: "सब लोग दस मिनट का लाइटिंग ब्रेक लें।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍🎨",
        textEn: "On it, Maya!",
        textHi: "अभी करता हूँ, माया!"
      }
    ]
  },
  {
    id: "d04_sc08",
    title: "High-Intensity Fitness Bootcamp: Conditioning Imperatives",
    titleHi: "हाई-इंटेंसिटी फिटनेस बूटकैंप: कंडीशनिंग और कसरत के निर्देश",
    context: "Fitness coach Samar conducts a morning functional fitness circuit with athlete Pooja.",
    situation: "Issuing physiological and posture imperatives ('Keep your back straight...', 'Breathe in...', 'Don't drop...', 'Push through...').",
    characters: ["Coach Samar", "Pooja"],
    turns: [
      {
        speaker: "Coach Samar",
        avatar: "🏋️‍♂️",
        textEn: "Listen up, Pooja! We are entering the final high-intensity functional circuit.",
        textHi: "ध्यान से सुनो, पूजा! हम अंतिम हाई-इंटेंसिटी फंक्शनल सर्किट में प्रवेश कर रहे हैं।"
      },
      {
        speaker: "Pooja",
        avatar: "🏃‍♀️",
        textEn: "Ready, Coach! Set the timer.",
        textHi: "तैयार हूँ, कोच! टाइमर सेट कीजिए।"
      },
      {
        speaker: "Coach Samar",
        avatar: "🏋️‍♂️",
        textEn: "Pick up the sixteen-kilogram kettlebell with both hands and set your feet shoulder-width apart.",
        textHi: "दोनों हाथों से सोलह किलो की केतली घंटी (केटलबेल) उठाएं और पैरों को कंधों की चौड़ाई पर रखें।"
      },
      {
        speaker: "Pooja",
        avatar: "🏃‍♀️",
        textEn: "Stance set and core engaged.",
        textHi: "मुद्रा तैयार है और पेट की मांसपेशियां कसी हुई हैं।"
      },
      {
        speaker: "Coach Samar",
        avatar: "🏋️‍♂️",
        textEn: "Hinge at your hips and drive explosively through your glutes! Don't round your lower spine.",
        textHi: "कूल्हों से झुकें और ग्लूट्स से पूरी ताकत लगाएं! अपनी निचली रीढ़ को गोल मत होने दें।"
      },
      {
        speaker: "Pooja",
        avatar: "🏃‍♀️",
        textEn: "Swinging through twenty smooth kettlebell reps.",
        textHi: "बीस सहज केटलबेल स्विंग कर रही हूँ।"
      },
      {
        speaker: "Coach Samar",
        avatar: "🏋️‍♂️",
        textEn: "Breathe out forcefully at the peak of every swing. Inhale on the downward descent.",
        textHi: "हर स्विंग की ऊंचाई पर पूरी ताकत से सांस बाहर छोड़ें। नीचे आते समय सांस अंदर लें।"
      },
      {
        speaker: "Pooja",
        avatar: "🏃‍♀️",
        textEn: "Maintaining rhythmic breathing... rep twenty complete!",
        textHi: "सांस की लय बनाए रखी है... बीसवां रेप पूरा हुआ!"
      },
      {
        speaker: "Coach Samar",
        avatar: "🏋️‍♂️",
        textEn: "Set the bell down gently! Drop immediately into a forearm plank position on the rubber mat.",
        textHi: "घंटी को धीरे से नीचे रखें! रबर की चटाई पर तुरंत फोरआर्म प्लैंक स्थिति में आएं।"
      },
      {
        speaker: "Pooja",
        avatar: "🏃‍♀️",
        textEn: "Holding plank... core is burning!",
        textHi: "प्लैंक में रुकी हुई हूँ... पेट में खिंचाव महसूस हो रहा है!"
      },
      {
        speaker: "Coach Samar",
        avatar: "🏋️‍♂️",
        textEn: "Keep your hips level with your shoulders! Don't let your lower back sag toward the floor.",
        textHi: "अपने कूल्हों को अपने कंधों के समानांतर रखें! अपनी निचली पीठ को फर्श की ओर झुकने मत दें।"
      },
      {
        speaker: "Pooja",
        avatar: "🏃‍♀️",
        textEn: "Correcting hip alignment... holding strong.",
        textHi: "कूल्हों की स्थिति ठीक कर रही हूँ... मजबूती से डटी हुई हूँ।"
      },
      {
        speaker: "Coach Samar",
        avatar: "🏋️‍♂️",
        textEn: "Push through the burn! Fifteen seconds remaining on the clock!",
        textHi: "दर्द से लड़ते हुए आगे बढ़ो! घड़ी में पंद्रह सेकंड बचे हैं!"
      },
      {
        speaker: "Pooja",
        avatar: "🏃‍♀️",
        textEn: "Breathing steadily through the final seconds...",
        textHi: "अंतिम पलों में लगातार सांस ले रही हूँ..."
      },
      {
        speaker: "Coach Samar",
        avatar: "🏋️‍♂️",
        textEn: "Five, four, three, two, one—relax and drop to your knees!",
        textHi: "पांच, चार, तीन, दो, एक—विश्राम करें और घुटनों पर आ जाएं!"
      },
      {
        speaker: "Pooja",
        avatar: "🏃‍♀️",
        textEn: "Phew! What an intense burn across the entire torso!",
        textHi: "उफ्फ! पूरे शरीर में कितना जबरदस्त खिंचाव था!"
      },
      {
        speaker: "Coach Samar",
        avatar: "🏋️‍♂️",
        textEn: "Stand up slowly, walk around the track, and sip some water. Do not sit down abruptly while your heart rate is elevated.",
        textHi: "धीरे से उठें, ट्रैक के चारों ओर घूमें और थोड़ा पानी पिएं। जब दिल की धड़कन तेज हो तो अचानक मत बैठें।"
      },
      {
        speaker: "Pooja",
        avatar: "🏃‍♀️",
        textEn: "Walking it off and cooling down. Fantastic workout today, Coach!",
        textHi: "टहल रही हूँ और शरीर को ठंडा कर रही हूँ। कोच, आज का कसरत सत्र शानदार रहा!"
      },
      {
        speaker: "Coach Samar",
        avatar: "🏋️‍♂️",
        textEn: "Unbelievable stamina and discipline, Pooja! See you on Wednesday morning.",
        textHi: "अविश्वसनीय सहनशक्ति और अनुशासन, पूजा! बुधवार सुबह मिलते हैं।"
      },
      {
        speaker: "Pooja",
        avatar: "🏃‍♀️",
        textEn: "See you on Wednesday, Coach! Thank you.",
        textHi: "बुधवार को मिलते हैं, कोच! धन्यवाद।"
      }
    ]
  },
  {
    id: "d04_sc09",
    title: "Corporate High-Rise: Fire Evacuation Safety Drill",
    titleHi: "कॉर्पोरेट इमारत: अग्नि निकासी अभ्यास और सुरक्षा निर्देश",
    context: "Floor Safety Warden Deepak guides corporate employees through an unannounced fire evacuation drill.",
    situation: "Deploying life-safety imperatives ('Evacuate...', 'Don't use elevators...', 'Follow me...', 'Assemble...').",
    characters: ["Deepak", "Sunita"],
    turns: [
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Attention everyone on Floor 8! Stop working immediately and leave your desks in an orderly fashion.",
        textHi: "आठवीं मंजिल पर सभी लोग ध्यान दें! काम तुरंत बंद करें और व्यवस्थित तरीके से अपनी डेस्क छोड़ें।"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💼",
        textEn: "Deepak, should we pack our laptop bags and jackets?",
        textHi: "दीपक, क्या हम अपने लैपटॉप बैग और जैकेट पैक कर लें?"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Leave all heavy belongings behind! Do not waste valuable seconds gathering personal items.",
        textHi: "सारा भारी सामान पीछे छोड़ दें! निजी सामान समेटने में कीमती सेकंड बर्बाद न करें।"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💼",
        textEn: "Understood. Leaving my laptop on the desk.",
        textHi: "समझ गई। लैपटॉप डेस्क पर ही छोड़ रही हूँ।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Do not use the elevators under any circumstances! Proceed directly to Emergency Stairwell B.",
        textHi: "किसी भी परिस्थिति में लिफ्ट का उपयोग न करें! सीधे आपातकालीन सीढ़ी बी की ओर बढ़ें।"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💼",
        textEn: "Following the illuminated green exit signs toward the stairwell.",
        textHi: "सीढ़ी की ओर जाने वाले हरे चमकदार निकास संकेतों का पालन कर रही हूँ।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Hold the handrail firmly on your right as you descend the stairs. Do not run or push.",
        textHi: "सीढ़ियों से नीचे उतरते समय अपनी दाईं ओर की रेलिंग को मजबूती से पकड़ें। दौड़ें या धक्का न दें।"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💼",
        textEn: "Maintaining a brisk, steady walking pace in single file.",
        textHi: "एक पंक्ति में तेज और स्थिर गति से चल रहे हैं।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Keep the stairwell quiet so everyone can hear emergency announcements over the public address system.",
        textHi: "सीढ़ियों में शांति बनाए रखें ताकि हर कोई लाउडस्पीकर पर आपातकालीन घोषणाओं को सुन सके।"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💼",
        textEn: "We have reached the ground floor exit door.",
        textHi: "हम भूतल के निकास द्वार पर पहुँच गए हैं।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Push the panic bar open and exit directly into the open courtyard.",
        textHi: "दरवाजे के पैनिक बार को धक्का देकर खोलें और सीधे खुले प्रांगण में बाहर निकलें।"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💼",
        textEn: "Exiting into the designated assembly courtyard now.",
        textHi: "अब निर्धारित असेंबली प्रांगण में बाहर निकल रहे हैं।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Assemble at Muster Point Charlie! Do not disperse into the street or parking lot.",
        textHi: "मस्टर पॉइंट चार्ली पर एकत्रित हों! सड़क या पार्किंग में तितर-बितर न हों।"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💼",
        textEn: "Floor 8 team is gathered at Muster Point Charlie.",
        textHi: "आठवीं मंजिल की टीम मस्टर पॉइंट चार्ली पर एकत्र हो गई है।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Stand by for the head count. Sunita, please verify attendance against our department roster.",
        textHi: "हाजिरी गिनती के लिए तैयार रहें। सुनीता, कृपया हमारे विभाग के रोस्टर से उपस्थिति की जाँच करें।"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💼",
        textEn: "All forty-two members of the finance division are accounted for and safe.",
        textHi: "वित्त विभाग के सभी बयालीस सदस्य मौजूद और सुरक्षित हैं।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Total evacuation time was three minutes and forty seconds—well below the national safety target!",
        textHi: "निकासी का कुल समय तीन मिनट चालीस सेकंड रहा—राष्ट्रीय सुरक्षा लक्ष्य से काफी बेहतर!"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💼",
        textEn: "Thank you for the calm and authoritative leadership, Deepak.",
        textHi: "दीपक, शांत और प्रभावशाली नेतृत्व के लिए धन्यवाद।"
      },
      {
        speaker: "Deepak",
        avatar: "👨‍💼",
        textEn: "Safety is everyone's responsibility. Excellent drill, team!",
        textHi: "सुरक्षा हर किसी की जिम्मेदारी है। टीम, बहुत बढ़िया अभ्यास!"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💼",
        textEn: "Well done, everyone!",
        textHi: "शाबाश, सभी को!"
      }
    ]
  },
  {
    id: "d04_sc10",
    title: "Heritage Home Renovation: Woodwork Finishing Directives",
    titleHi: "हेरिटेज होम नवीनीकरण: लकड़ी के काम और पॉलिश के निर्देश",
    context: "Master Carpenter Mr. Mistry instructs apprentice Rohit on restoring antique teakwood doors.",
    situation: "Practicing craftsmanship imperatives ('Sand thoroughly...', 'Apply primer...', 'Don't leave brush marks...', 'Clean immediately...').",
    characters: ["Mr. Mistry", "Rohit"],
    turns: [
      {
        speaker: "Mr. Mistry",
        avatar: "👨‍🔧",
        textEn: "Rohit, inspect the antique teakwood surface before starting the restoration process.",
        textHi: "रोहित, मरम्मत की प्रक्रिया शुरू करने से पहले सागौन की पुरानी लकड़ी की सतह की जांच करो।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍🎨",
        textEn: "Inspected, Ustad-ji. There are minor scratches near the bronze hinges.",
        textHi: "जांच कर ली, उस्ताद जी। कांस्य के कब्जों के पास हल्के खरोंच के निशान हैं।"
      },
      {
        speaker: "Mr. Mistry",
        avatar: "👨‍🔧",
        textEn: "Sand the wood along the grain using 220-grit sandpaper. Never sand across the grain!",
        textHi: "220-ग्रिट रेगमाल का उपयोग करके लकड़ी के रेशों की दिशा में घिसाई करो। कभी भी रेशों के आड़े रेगमाल मत चलाना!"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍🎨",
        textEn: "Sanding smoothly in the direction of the wood grain.",
        textHi: "लकड़ी के रेशों की दिशा में सहजता से घिसाई कर रहा हूँ।"
      },
      {
        speaker: "Mr. Mistry",
        avatar: "👨‍🔧",
        textEn: "Wipe away all fine sawdust with a clean microfiber tack cloth.",
        textHi: "साफ माइक्रोफाइबर कपड़े से सारी बारीक लकड़ी की धूल को पोंछकर साफ करो।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍🎨",
        textEn: "Dust completely wiped clean; the grain feels silky smooth.",
        textHi: "धूल पूरी तरह साफ हो गई है; लकड़ी के रेशे रेशम जैसे चिकने महसूस हो रहे हैं।"
      },
      {
        speaker: "Mr. Mistry",
        avatar: "👨‍🔧",
        textEn: "Stir the walnut wood stain gently with a wooden spatula. Do not shake the can vigorously.",
        textHi: "अखरोट के रंग वाली पॉलिश को लकड़ी की खपच्ची से धीरे-धीरे हिलाओ। डिब्बे को जोर से मत हिलाना।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍🎨",
        textEn: "Stirred until the pigments are evenly dissolved without air bubbles.",
        textHi: "बिना हवा के बुलबुले बने, रंगों के समान रूप से घुलने तक मिला दिया है।"
      },
      {
        speaker: "Mr. Mistry",
        avatar: "👨‍🔧",
        textEn: "Apply the first coat using long, fluid brush strokes. Don't leave thick drips along the carved edges.",
        textHi: "ब्रश के लंबे और सहज हाथ से पहला कोट लगाओ। नक्काशीदार किनारों पर पॉलिश की मोटी बूंदें मत जमने देना।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍🎨",
        textEn: "Applying the walnut stain with steady, even strokes.",
        textHi: "स्थिर और एकसमान हाथों से अखरोट की पॉलिश लगा रहा हूँ।"
      },
      {
        speaker: "Mr. Mistry",
        avatar: "👨‍🔧",
        textEn: "Wipe off the excess stain with a dry cotton rag after five minutes to let the natural teak pattern shine.",
        textHi: "प्राकृतिक सागौन के पैटर्न को निखारने के लिए पांच मिनट बाद सूखे सूती कपड़े से अतिरिक्त पॉलिश पोंछ दो।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍🎨",
        textEn: "Wiping off the excess... the rich golden-brown hue is emerging beautifully!",
        textHi: "अतिरिक्त पॉलिश पोंछ रहा हूँ... गहरा सुनहरा-भूरा रंग खूबसूरती से निखर कर आ रहा है!"
      },
      {
        speaker: "Mr. Mistry",
        avatar: "👨‍🔧",
        textEn: "Allow it to cure for four hours before applying the protective polyurethane sealant.",
        textHi: "सुरक्षात्मक पॉलीयुरेथेन सीलेंट लगाने से पहले इसे चार घंटे तक सूखने दो।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍🎨",
        textEn: "Understood. I will set the drying timer for two o'clock.",
        textHi: "समझ गया। मैं सूखने का टाइमर दो बजे के लिए सेट कर देता हूँ।"
      },
      {
        speaker: "Mr. Mistry",
        avatar: "👨‍🔧",
        textEn: "Clean your natural bristle brushes immediately in mineral spirits so the bristles do not stiffen.",
        textHi: "अपने ब्रशों को तुरंत मिनरल स्पिरिट से साफ करो ताकि बाल कड़े न हों।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍🎨",
        textEn: "Rinsing brushes in mineral spirits and hanging them to dry.",
        textHi: "ब्रशों को मिनरल स्पिरिट में धो रहा हूँ और सूखने के लिए लटका रहा हूँ।"
      },
      {
        speaker: "Mr. Mistry",
        avatar: "👨‍🔧",
        textEn: "Seal the chemical tins tightly and store them in the fireproof cabinet.",
        textHi: "केमिकल के डिब्बों को कसकर बंद करो और उन्हें अग्निरोधक अलमारी में रखो।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍🎨",
        textEn: "All chemical containers sealed and safely locked away.",
        textHi: "सभी कंटेनर सील कर दिए गए हैं और सुरक्षित रूप से बंद कर दिए गए हैं।"
      },
      {
        speaker: "Mr. Mistry",
        avatar: "👨‍🔧",
        textEn: "Remarkable diligence, Rohit! You have the true hands of a craftsman.",
        textHi: "रोहित, शानदार लगन! तुम्हारे पास एक सच्चे कारीगर के हाथ हैं।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍🎨",
        textEn: "Thank you for your master guidance, Ustad-ji!",
        textHi: "उस्ताद जी, आपके बहुमूल्य मार्गदर्शन के लिए बहुत-बहुत धन्यवाद!"
      }
    ]
  }
];
