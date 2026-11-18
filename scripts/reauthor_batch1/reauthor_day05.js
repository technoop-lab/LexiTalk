import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const day05Dialogues = [
  {
    id: "d05_sc01",
    title: "Global Tech Summit: Delegate Registration & Identity Verification",
    titleHi: "ग्लोबल टेक समिट: प्रतिनिधि पंजीकरण और पहचान सत्यापन",
    context: "Conference registrar Ms. Roy verifies badge credentials with international delegate Dr. Klaus and his colleague Maya.",
    situation: "Mastering Present State of Being ('I am...', 'Is he...', 'They are...', 'We are...', 'Isn't she...').",
    characters: ["Ms. Roy", "Dr. Klaus", "Maya"],
    turns: [
      {
        speaker: "Ms. Roy",
        avatar: "👩‍💼",
        textEn: "Good morning! Welcome to the World Tech Congress. Are you a registered delegate?",
        textHi: "शुभ प्रभात! वर्ल्ड टेक कांग्रेस में आपका स्वागत है। क्या आप एक पंजीकृत प्रतिनिधि हैं?"
      },
      {
        speaker: "Dr. Klaus",
        avatar: "👨‍🔬",
        textEn: "Good morning! Yes, I am Dr. Klaus Becker, and I am from the Munich Institute of Robotics.",
        textHi: "शुभ प्रभात! जी हाँ, मैं डॉ. क्लाउस बेकर हूँ, और मैं म्यूनिख रोबोटिक्स संस्थान से हूँ।"
      },
      {
        speaker: "Ms. Roy",
        avatar: "👩‍💼",
        textEn: "Welcome, Dr. Klaus! Is this lady your co-researcher?",
        textHi: "डॉ. क्लाउस, आपका स्वागत है! क्या यह महिला आपकी सह-शोधकर्ता हैं?"
      },
      {
        speaker: "Dr. Klaus",
        avatar: "👨‍🔬",
        textEn: "Yes, she is Maya Sen. She is our lead algorithm designer.",
        textHi: "जी हाँ, वे माया सेन हैं। वे हमारी प्रमुख एल्गोरिथम डिजाइनर हैं।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💻",
        textEn: "Hello! I am delighted to be here. Are our conference delegate badges ready?",
        textHi: "नमस्ते! यहाँ उपस्थित होकर मुझे बहुत प्रसन्नता है। क्या हमारे प्रतिनिधि बैज तैयार हैं?"
      },
      {
        speaker: "Ms. Roy",
        avatar: "👩‍💼",
        textEn: "Yes, they are right here in the VIP registry. Your credentials are fully verified.",
        textHi: "जी हाँ, वे वीआईपी रजिस्ट्री में बिल्कुल यहीं हैं। आपके विवरण पूरी तरह सत्यापित हैं।"
      },
      {
        speaker: "Dr. Klaus",
        avatar: "👨‍🔬",
        textEn: "Is Professor Banerjee also in the executive lounge?",
        textHi: "क्या प्रोफेसर बनर्जी भी कार्यकारी लाउंज में हैं?"
      },
      {
        speaker: "Ms. Roy",
        avatar: "👩‍💼",
        textEn: "No, he is not in the lounge yet; he is at the press center with the media team.",
        textHi: "नहीं, वे अभी लाउंज में नहीं हैं; वे मीडिया टीम के साथ प्रेस सेंटर में हैं।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💻",
        textEn: "Are the morning keynote sessions on the first floor?",
        textHi: "क्या सुबह के मुख्य सत्र पहली मंजिल पर हैं?"
      },
      {
        speaker: "Ms. Roy",
        avatar: "👩‍💼",
        textEn: "Yes, they are in the Grand Ballroom. The acoustics are wonderful there.",
        textHi: "जी हाँ, वे ग्रैंड बॉलरूम में हैं। वहाँ की ध्वनि व्यवस्था अद्भुत है।"
      },
      {
        speaker: "Dr. Klaus",
        avatar: "👨‍🔬",
        textEn: "Is the Wi-Fi network open for all participants?",
        textHi: "क्या वाई-फाई नेटवर्क सभी प्रतिभागियों के लिए खुला है?"
      },
      {
        speaker: "Ms. Roy",
        avatar: "👩‍💼",
        textEn: "Yes, it is high-speed and secure. The passcode is on the back of your badge.",
        textHi: "जी हाँ, यह हाई-स्पीड और सुरक्षित है। पासवर्ड आपके बैज के पीछे लिखा है।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💻",
        textEn: "Isn't our presentation scheduled for eleven o'clock, Dr. Klaus?",
        textHi: "डॉ. क्लाउस, क्या हमारी प्रस्तुति ग्यारह बजे निर्धारित नहीं है?"
      },
      {
        speaker: "Dr. Klaus",
        avatar: "👨‍🔬",
        textEn: "Yes, it is. We are the second speakers on the artificial intelligence panel.",
        textHi: "जी हाँ, बिल्कुल। हम आर्टिफिशियल इंटेलिजेंस पैनल में दूसरे वक्ता हैं।"
      },
      {
        speaker: "Ms. Roy",
        avatar: "👩‍💼",
        textEn: "You are both in Hall 3. The technical coordinators are already inside.",
        textHi: "आप दोनों हॉल 3 में हैं। तकनीकी समन्वयक पहले से ही अंदर मौजूद हैं।"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💻",
        textEn: "We are very grateful for your assistance, Ms. Roy.",
        textHi: "सुश्री रॉय, आपकी सहायता के लिए हम अत्यंत आभारी हैं।"
      },
      {
        speaker: "Ms. Roy",
        avatar: "👩‍💼",
        textEn: "You are most welcome! The conference atmosphere is electric today.",
        textHi: "आपका बहुत-बहुत स्वागत है! आज सम्मेलन का माहौल बहुत उत्साहवर्धक है।"
      },
      {
        speaker: "Dr. Klaus",
        avatar: "👨‍🔬",
        textEn: "It is indeed an impressive gathering of global scientists.",
        textHi: "यह वास्तव में वैश्विक वैज्ञानिकों का एक प्रभावशाली सम्मेलन है।"
      },
      {
        speaker: "Ms. Roy",
        avatar: "👩‍💼",
        textEn: "Have a wonderful session!",
        textHi: "आपका सत्र शानदार रहे!"
      },
      {
        speaker: "Maya",
        avatar: "👩‍💻",
        textEn: "Thank you!",
        textHi: "धन्यवाद!"
      }
    ]
  },
  {
    id: "d05_sc02",
    title: "Heritage Fort Architecture Tour: Descriptive States of Being",
    titleHi: "हेरिटेज किला वास्तुकला यात्रा: अस्तित्व और विशेषताओं का वर्णन",
    context: "Historian Guide Mr. Rathore describes the architectural features of Amber Fort to tourist Elena.",
    situation: "Practicing 'is / am / are' for describing attributes, materials, conditions, and spatial qualities.",
    characters: ["Mr. Rathore", "Elena"],
    turns: [
      {
        speaker: "Mr. Rathore",
        avatar: "👨‍🏫",
        textEn: "Welcome to the palace courtyard, Elena! This structure is more than four centuries old.",
        textHi: "महल के प्रांगण में आपका स्वागत है, ऐलेना! यह ढांचा चार शताब्दियों से भी अधिक पुराना है।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🌾",
        textEn: "It is magnificent! Are these intricately carved pillars pure white marble?",
        textHi: "यह भव्य है! क्या ये जटिल नक्काशीदार खंभे शुद्ध सफेद संगमरमर के हैं?"
      },
      {
        speaker: "Mr. Rathore",
        avatar: "👨‍🏫",
        textEn: "Yes, they are Makrana marble, and the exterior walls are red sandstone.",
        textHi: "जी हाँ, वे मकराना संगमरमर के हैं, और बाहरी दीवारें लाल बलुआ पत्थर की हैं।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🌾",
        textEn: "Is the palace fortress naturally cool even during hot summer months?",
        textHi: "क्या भीषण गर्मी के महीनों में भी यह महल किला प्राकृतिक रूप से ठंडा रहता है?"
      },
      {
        speaker: "Mr. Rathore",
        avatar: "👨‍🏫",
        textEn: "Yes, it is remarkably cool because the air ducts and water channels are intelligent architectural features.",
        textHi: "जी हाँ, यह आश्चर्यजनक रूप से ठंडा रहता है क्योंकि हवा की नलिकाएं और जलमार्ग बुद्धिमत्तापूर्ण वास्तुशिल्प विशेषताएं हैं।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🌾",
        textEn: "These geometric garden courtyards are so symmetrical!",
        textHi: "ये ज्यामितीय बगीचे के प्रांगण कितने सममित हैं!"
      },
      {
        speaker: "Mr. Rathore",
        avatar: "👨‍🏫",
        textEn: "They are Persian-style Charbagh gardens. The symmetry is mathematically precise.",
        textHi: "वे फारसी शैली के चारबाग उद्यान हैं। यह समरूपता गणितीय रूप से सटीक है।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🌾",
        textEn: "Is the mirror palace, Sheesh Mahal, on this upper terrace?",
        textHi: "क्या शीश महल इसी ऊपरी चबूतरे पर है?"
      },
      {
        speaker: "Mr. Rathore",
        avatar: "👨‍🏫",
        textEn: "Yes, it is right through this ornate archway. It is the jewel of the entire complex.",
        textHi: "जी हाँ, यह इस अलंकृत मेहराब के ठीक पार है। यह पूरे परिसर का नगीना है।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🌾",
        textEn: "Wow! The ceiling mirrors are dazzling!",
        textHi: "वाह! छत के शीशे चकाचौंध करने वाले हैं!"
      },
      {
        speaker: "Mr. Rathore",
        avatar: "👨‍🏫",
        textEn: "They are convex Belgian glass mirrors imported in the seventeenth century.",
        textHi: "वे उत्तल बेल्जियम कांच के शीशे हैं जो सत्रहवीं शताब्दी में आयात किए गए थे।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🌾",
        textEn: "Are the colored floral frescoes original?",
        textHi: "क्या ये रंगीन फूलों के भित्तिचित्र मूल हैं?"
      },
      {
        speaker: "Mr. Rathore",
        avatar: "👨‍🏫",
        textEn: "Yes, they are completely authentic vegetable and mineral dyes.",
        textHi: "जी हाँ, वे पूरी तरह से प्रामाणिक वनस्पति और खनिज रंग हैं।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🌾",
        textEn: "I am totally awestruck by this heritage.",
        textHi: "मैं इस विरासत को देखकर पूरी तरह स्तब्ध और अभिभूत हूँ।"
      },
      {
        speaker: "Mr. Rathore",
        avatar: "👨‍🏫",
        textEn: "We are very proud of our architectural legacy.",
        textHi: "हमें अपनी वास्तुशिल्प विरासत पर बहुत गर्व है।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🌾",
        textEn: "Is the view from the ramparts open to visitors today?",
        textHi: "क्या आज प्राचीर से दिखने वाला नजारा पर्यटकों के लिए खुला है?"
      },
      {
        speaker: "Mr. Rathore",
        avatar: "👨‍🏫",
        textEn: "Yes, the panoramic view of Maota Lake is breathtaking from the top.",
        textHi: "जी हाँ, ऊपर से मावठा झील का विहंगम दृश्य अत्यंत मनमोहक है।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🌾",
        textEn: "Let us climb up to the ramparts.",
        textHi: "आइए प्राचीर की ओर ऊपर चलें।"
      },
      {
        speaker: "Mr. Rathore",
        avatar: "👨‍🏫",
        textEn: "The stairs are right here. Watch your step.",
        textHi: "सीढ़ियाँ यहीं हैं। संभलकर कदम रखें।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🌾",
        textEn: "Thank you, Mr. Rathore.",
        textHi: "धन्यवाद, मिस्टर राठौड़।"
      }
    ]
  },
  {
    id: "d05_sc03",
    title: "Post-Operative Ward: Health Status & Vital Signs",
    titleHi: "सर्जरी के बाद का वार्ड: स्वास्थ्य स्थिति और महत्वपूर्ण संकेत",
    context: "Staff Nurse Anita and Resident Doctor Dr. Mehta review the clinical condition of post-surgery patient Mr. Roy.",
    situation: "Formulating medical states of being ('He is stable', 'Are his vitals normal?', 'I am alert', 'She is comfortable').",
    characters: ["Dr. Mehta", "Nurse Anita", "Mr. Roy"],
    turns: [
      {
        speaker: "Dr. Mehta",
        avatar: "👨‍⚕️",
        textEn: "Good morning, Nurse Anita! How is Mr. Roy this morning?",
        textHi: "शुभ प्रभात, नर्स अनीता! आज सुबह मिस्टर रॉय कैसे हैं?"
      },
      {
        speaker: "Nurse Anita",
        avatar: "👩‍⚕️",
        textEn: "Good morning, Doctor! He is awake, conscious, and fully oriented.",
        textHi: "शुभ प्रभात, डॉक्टर! वे जागे हुए हैं, होश में हैं और पूरी तरह से सचेत हैं।"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👨‍⚕️",
        textEn: "Are his vital signs within normal parameters?",
        textHi: "क्या उनके सभी प्रमुख जीवन संकेत सामान्य मानकों के भीतर हैं?"
      },
      {
        speaker: "Nurse Anita",
        avatar: "👩‍⚕️",
        textEn: "Yes, his blood pressure is one hundred and twenty over eighty, and his heart rate is seventy-two beats per minute.",
        textHi: "जी हाँ, उनका रक्तचाप 120/80 है, और उनकी हृदय गति बहत्तर धड़कन प्रति मिनट है।"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👨‍⚕️",
        textEn: "That is excellent. Is his oxygen saturation stable without nasal cannula support?",
        textHi: "यह बहुत बढ़िया है। क्या बिना नेज़ल कैनुला के उनकी ऑक्सीजन संतृप्ति स्थिर है?"
      },
      {
        speaker: "Nurse Anita",
        avatar: "👩‍⚕️",
        textEn: "Yes, it is ninety-eight percent on room air.",
        textHi: "जी हाँ, सामान्य कमरे की हवा में यह अठानवे प्रतिशत है।"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "Good morning, Doctor! I am feeling much stronger today.",
        textHi: "शुभ प्रभात, डॉक्टर! आज मैं काफी बेहतर और मजबूत महसूस कर रहा हूँ।"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👨‍⚕️",
        textEn: "Good morning, Mr. Roy! Are you in any surgical pain right now?",
        textHi: "शुभ प्रभात, मिस्टर रॉय! क्या इस समय आपको सर्जरी का कोई दर्द हो रहा है?"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "No, the discomfort is very mild and manageable.",
        textHi: "नहीं, तकलीफ बहुत हल्की और सहन करने योग्य है।"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👨‍⚕️",
        textEn: "Are you hungry this morning?",
        textHi: "क्या आज सुबह आपको भूख लगी है?"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "Yes, I am ready for a light breakfast.",
        textHi: "जी हाँ, मैं हल्के नाश्ते के लिए तैयार हूँ।"
      },
      {
        speaker: "Nurse Anita",
        avatar: "👩‍⚕️",
        textEn: "A warm bowl of oats and fresh vegetable broth is ready in the dietary kitchen.",
        textHi: "आहार रसोई में गर्म ओट्स और ताज़ा सब्जियों का सूप तैयार है।"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👨‍⚕️",
        textEn: "Your surgical incisions are clean and free of inflammation.",
        textHi: "आपके सर्जरी के घाव साफ हैं और उनमें कोई सूजन नहीं है।"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "Is my discharge scheduled for tomorrow afternoon?",
        textHi: "क्या मेरी छुट्टी कल दोपहर के लिए निर्धारित है?"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👨‍⚕️",
        textEn: "Yes, if your evening blood tests are clear, you are free to go home tomorrow.",
        textHi: "जी हाँ, यदि शाम की रक्त जांच सही आती है, तो आप कल घर जाने के लिए स्वतंत्र हैं।"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "We are deeply grateful to your entire medical staff.",
        textHi: "हम आपके पूरे मेडिकल स्टाफ के प्रति दिल से आभारी हैं।"
      },
      {
        speaker: "Nurse Anita",
        avatar: "👩‍⚕️",
        textEn: "You are a wonderful patient, Mr. Roy.",
        textHi: "आप एक बहुत ही अच्छे मरीज हैं, मिस्टर रॉय।"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👨‍⚕️",
        textEn: "Rest well today. We are very happy with your recovery.",
        textHi: "आज अच्छे से आराम करें। आपके सुधार से हम बहुत खुश हैं।"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "Thank you, Doctor!",
        textHi: "धन्यवाद, डॉक्टर!"
      },
      {
        speaker: "Dr. Mehta",
        avatar: "👨‍⚕️",
        textEn: "You are welcome. Take care!",
        textHi: "आपका स्वागत है। अपना ध्यान रखें!"
      }
    ]
  },
  {
    id: "d05_sc04",
    title: "Fine Art Auction House: Artwork Condition & Provenance",
    titleHi: "ललित कला नीलामी घर: कलाकृति की स्थिति और प्रामाणिकता",
    context: "Art Appraiser Ms. Sethi examines oil paintings with art collector Mr. Singhal before the evening auction.",
    situation: "Using 'is / am / are' for evaluating authenticity, origin, dimensions, and auction estimates.",
    characters: ["Ms. Sethi", "Mr. Singhal"],
    turns: [
      {
        speaker: "Mr. Singhal",
        avatar: "👨‍💼",
        textEn: "Good afternoon, Ms. Sethi! Is this nineteenth-century landscape painting authentic?",
        textHi: "शुभ दोपहर, सुश्री सेठी! क्या यह उन्नीसवीं सदी की प्राकृतिक दृश्य पेंटिंग प्रामाणिक है?"
      },
      {
        speaker: "Ms. Sethi",
        avatar: "👩‍🎨",
        textEn: "Good afternoon! Yes, it is an original oil on linen by Thomas Daniell, dated 1812.",
        textHi: "शुभ दोपहर! जी हाँ, यह थॉमस डेनियल द्वारा 1812 में लिनन पर बनाई गई एक मूल ऑयल पेंटिंग है।"
      },
      {
        speaker: "Mr. Singhal",
        avatar: "👨‍💼",
        textEn: "The colors are remarkably vibrant. Is the varnish modern?",
        textHi: "रंग आश्चर्यजनक रूप से जीवंत हैं। क्या यह वार्निश आधुनिक है?"
      },
      {
        speaker: "Ms. Sethi",
        avatar: "👩‍🎨",
        textEn: "No, it is not modern. The protective resin coating is contemporary with the period.",
        textHi: "नहीं, यह आधुनिक नहीं है। सुरक्षात्मक राल कोटिंग उसी ऐतिहासिक काल की है।"
      },
      {
        speaker: "Mr. Singhal",
        avatar: "👨‍💼",
        textEn: "Are the gilded wooden frames also nineteenth century?",
        textHi: "क्या ये सुनहरे नक्काशीदार लकड़ी के फ्रेम भी उन्नीसवीं सदी के हैं?"
      },
      {
        speaker: "Ms. Sethi",
        avatar: "👩‍🎨",
        textEn: "Yes, they are carved English oak with genuine gold leafing.",
        textHi: "जी हाँ, वे असली सोने की पत्ती से मढ़े हुए अंग्रेजी ओक की लकड़ी के बने हैं।"
      },
      {
        speaker: "Mr. Singhal",
        avatar: "👨‍💼",
        textEn: "What is the estimated reserve price for this lot?",
        textHi: "इस लॉट के लिए अनुमानित न्यूनतम आरक्षित मूल्य क्या है?"
      },
      {
        speaker: "Ms. Sethi",
        avatar: "👩‍🎨",
        textEn: "The catalog estimate is between fifteen and twenty million rupees.",
        textHi: "कैटलॉग के अनुसार अनुमानित मूल्य डेढ़ से दो करोड़ रुपये के बीच है।"
      },
      {
        speaker: "Mr. Singhal",
        avatar: "👨‍💼",
        textEn: "Are there other bidders registered from international museums?",
        textHi: "क्या अंतरराष्ट्रीय संग्रहालयों से भी अन्य बोलीदाता पंजीकृत हैं?"
      },
      {
        speaker: "Ms. Sethi",
        avatar: "👩‍🎨",
        textEn: "Yes, three European institutions are on the telephone bidding lines.",
        textHi: "जी हाँ, तीन यूरोपीय संस्थान टेलीफोन बोली लाइनों पर उपस्थित हैं।"
      },
      {
        speaker: "Mr. Singhal",
        avatar: "👨‍💼",
        textEn: "Is lot number 14 also part of the same private collection?",
        textHi: "क्या लॉट नंबर 14 भी उसी निजी संग्रह का हिस्सा है?"
      },
      {
        speaker: "Ms. Sethi",
        avatar: "👩‍🎨",
        textEn: "No, it is from a royal estate in Rajasthan. The provenance documents are on the table.",
        textHi: "नहीं, वह राजस्थान की एक शाही रियासत से है। प्रामाणिकता के दस्तावेज मेज पर रखे हैं।"
      },
      {
        speaker: "Mr. Singhal",
        avatar: "👨‍💼",
        textEn: "The documentation is immaculate.",
        textHi: "दस्तावेजीकरण बिल्कुल त्रुटिहीन है।"
      },
      {
        speaker: "Ms. Sethi",
        avatar: "👩‍🎨",
        textEn: "We are extremely strict about provenance verification at this auction house.",
        textHi: "हम इस नीलामी घर में प्रामाणिकता सत्यापन को लेकर अत्यंत सख्त हैं।"
      },
      {
        speaker: "Mr. Singhal",
        avatar: "👨‍💼",
        textEn: "I am very confident about placing a bid tonight.",
        textHi: "आज रात बोली लगाने को लेकर मैं पूरी तरह आश्वस्त हूँ।"
      },
      {
        speaker: "Ms. Sethi",
        avatar: "👩‍🎨",
        textEn: "Your bidding paddle number is 44, Mr. Singhal.",
        textHi: "मिस्टर सिंघल, आपकी बोली लगाने वाली तख्ती का नंबर 44 है।"
      },
      {
        speaker: "Mr. Singhal",
        avatar: "👨‍💼",
        textEn: "Thank you, Ms. Sethi. The collection is truly world-class.",
        textHi: "धन्यवाद, सुश्री सेठी। यह संग्रह वास्तव में विश्व स्तरीय है।"
      },
      {
        speaker: "Ms. Sethi",
        avatar: "👩‍🎨",
        textEn: "Best of luck at the evening auction!",
        textHi: "शाम की नीलामी के लिए हार्दिक शुभकामनाएँ!"
      },
      {
        speaker: "Mr. Singhal",
        avatar: "👨‍💼",
        textEn: "Thank you!",
        textHi: "धन्यवाद!"
      },
      {
        speaker: "Ms. Sethi",
        avatar: "👩‍🎨",
        textEn: "You are welcome!",
        textHi: "आपका स्वागत है!"
      }
    ]
  },
  {
    id: "d05_sc05",
    title: "University Admissions Office: Eligibility & Enrollment Status",
    titleHi: "विश्वविद्यालय प्रवेश कार्यालय: पात्रता और नामांकन की स्थिति",
    context: "Admissions Officer Mr. Pillai evaluates academic credentials with candidate Kavita.",
    situation: "Practicing 'is / am / are' for verification of academic eligibility, program status, and fee requirements.",
    characters: ["Mr. Pillai", "Kavita"],
    turns: [
      {
        speaker: "Mr. Pillai",
        avatar: "👨‍🏫",
        textEn: "Good afternoon! Are you an applicant for the Master of Data Science program?",
        textHi: "शुभ दोपहर! क्या आप डेटा साइंस मास्टर प्रोग्राम के लिए आवेदक हैं?"
      },
      {
        speaker: "Kavita",
        avatar: "👩‍🎓",
        textEn: "Good afternoon, Sir! Yes, I am Kavita Sharma, and I am here for my document verification.",
        textHi: "शुभ दोपहर, महोदय! जी हाँ, मैं कविता शर्मा हूँ, और मैं अपने दस्तावेजों के सत्यापन के लिए यहाँ आई हूँ।"
      },
      {
        speaker: "Mr. Pillai",
        avatar: "👨‍🏫",
        textEn: "Welcome, Kavita. Are your original undergraduate transcripts in this folder?",
        textHi: "स्वागत है, कविता। क्या आपकी स्नातक की मूल अंकतालिकाएं इस फाइल में हैं?"
      },
      {
        speaker: "Kavita",
        avatar: "👩‍🎓",
        textEn: "Yes, they are all organized chronologically from semester one to eight.",
        textHi: "जी हाँ, वे सभी सेमेस्टर एक से आठ तक क्रमवार व्यवस्थित हैं।"
      },
      {
        speaker: "Mr. Pillai",
        avatar: "👨‍🏫",
        textEn: "Your cumulative grade point average is nine point two; that is exceptional.",
        textHi: "आपका कुल सीजीपीए 9.2 है; यह असाधारण है।"
      },
      {
        speaker: "Kavita",
        avatar: "👩‍🎓",
        textEn: "Thank you, Sir. Is the university scholarship open to merit rankers?",
        textHi: "धन्यवाद, महोदय। क्या मेरिट रैंक वाले छात्रों के लिए विश्वविद्यालय छात्रवृत्ति खुली है?"
      },
      {
        speaker: "Mr. Pillai",
        avatar: "👨‍🏫",
        textEn: "Yes, it is available for candidates with a CGPA above nine point zero.",
        textHi: "जी हाँ, यह नौ से अधिक सीजीपीए वाले उम्मीदवारों के लिए उपलब्ध है।"
      },
      {
        speaker: "Kavita",
        avatar: "👩‍🎓",
        textEn: "Are the campus hostel rooms air-conditioned?",
        textHi: "क्या परिसर के छात्रावास के कमरे वातानुकूलित (AC) हैं?"
      },
      {
        speaker: "Mr. Pillai",
        avatar: "👨‍🏫",
        textEn: "Yes, the post-graduate residential wings are modern and fully climate-controlled.",
        textHi: "जी हाँ, स्नातकोत्तर आवासीय विंग आधुनिक और पूरी तरह से वातानुकूलित हैं।"
      },
      {
        speaker: "Kavita",
        avatar: "👩‍🎓",
        textEn: "Is Dr. Raman the head of the machine learning department?",
        textHi: "क्या डॉ. रमन मशीन लर्निंग विभाग के प्रमुख हैं?"
      },
      {
        speaker: "Mr. Pillai",
        avatar: "👨‍🏫",
        textEn: "Yes, he is our distinguished department chair and research dean.",
        textHi: "जी हाँ, वे हमारे प्रतिष्ठित विभागाध्यक्ष और शोध डीन हैं।"
      },
      {
        speaker: "Kavita",
        avatar: "👩‍🎓",
        textEn: "Are the computer laboratories open on weekends for research projects?",
        textHi: "क्या शोध परियोजनाओं के लिए कंप्यूटर प्रयोगशालाएं सप्ताहांत पर खुली रहती हैं?"
      },
      {
        speaker: "Mr. Pillai",
        avatar: "👨‍🏫",
        textEn: "Yes, they are accessible twenty-four hours a day with biometric student cards.",
        textHi: "जी हाँ, बायोमेट्रिक छात्र कार्ड द्वारा वे चौबीसों घंटे खुली रहती हैं।"
      },
      {
        speaker: "Kavita",
        avatar: "👩‍🎓",
        textEn: "I am very excited about this academic journey.",
        textHi: "मैं इस अकादमिक यात्रा को लेकर बहुत उत्साहित हूँ।"
      },
      {
        speaker: "Mr. Pillai",
        avatar: "👨‍🏫",
        textEn: "We are equally pleased to welcome you to our university cohort.",
        textHi: "हमारे विश्वविद्यालय समूह में आपका स्वागत करते हुए हमें भी उतनी ही प्रसन्नता है।"
      },
      {
        speaker: "Kavita",
        avatar: "👩‍🎓",
        textEn: "Is my admission offer letter ready for download?",
        textHi: "क्या मेरा प्रवेश प्रस्ताव पत्र डाउनलोड के लिए तैयार है?"
      },
      {
        speaker: "Mr. Pillai",
        avatar: "👨‍🏫",
        textEn: "Yes, it is live on the student admission portal right now.",
        textHi: "जी हाँ, यह इस समय छात्र प्रवेश पोर्टल पर उपलब्ध है।"
      },
      {
        speaker: "Kavita",
        avatar: "👩‍🎓",
        textEn: "Thank you very much for your time, Mr. Pillai.",
        textHi: "मिस्टर पिल्लई, आपके समय के लिए बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Mr. Pillai",
        avatar: "👨‍🏫",
        textEn: "Congratulations and welcome aboard, Kavita!",
        textHi: "बधाई हो और आपका स्वागत है, कविता!"
      },
      {
        speaker: "Kavita",
        avatar: "👩‍🎓",
        textEn: "Thank you, Sir! Goodbye!",
        textHi: "धन्यवाद, महोदय! अलविदा!"
      }
    ]
  },
  {
    id: "d05_sc06",
    title: "Luxury Apartment Tour: Spatial Qualities & Amenities",
    titleHi: "लक्ज़री अपार्टमेंट का दौरा: कमरों की स्थिति और सुविधाएं",
    context: "Real Estate Consultant Tanvi shows prospective tenant Mr. Joshi a 3-BHK luxury apartment.",
    situation: "Practicing 'is / am / are' for describing property features, views, dimensions, and rental conditions.",
    characters: ["Tanvi", "Mr. Joshi"],
    turns: [
      {
        speaker: "Tanvi",
        avatar: "👩‍💼",
        textEn: "Welcome to Skyline Residences, Mr. Joshi! This is the eighteenth-floor corner apartment.",
        textHi: "स्काईलाइन रेजिडेंस में आपका स्वागत है, मिस्टर जोशी! यह अठारहवीं मंजिल का कोने वाला अपार्टमेंट है।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍💼",
        textEn: "The entrance foyer is very spacious! Is the flooring Italian marble?",
        textHi: "प्रवेश द्वार का गलियारा बहुत विशाल है! क्या यह फर्श इतालवी संगमरमर का है?"
      },
      {
        speaker: "Tanvi",
        avatar: "👩‍💼",
        textEn: "Yes, it is imported Botticino marble throughout the living and dining areas.",
        textHi: "जी हाँ, पूरे लिविंग और डाइनिंग एरिया में आयातित बोटिसिनो संगमरमर लगा है।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍💼",
        textEn: "These expansive glass windows are stunning. Is the balcony facing east?",
        textHi: "ये विशाल कांच की खिड़कियां शानदार हैं। क्या बालकनी पूर्व दिशा की ओर है?"
      },
      {
        speaker: "Tanvi",
        avatar: "👩‍💼",
        textEn: "Yes, it is east-facing, so the morning sunlight is abundant and pleasant.",
        textHi: "जी हाँ, यह पूर्वोन्मुखी है, इसलिए सुबह की धूप प्रचुर और सुखद रहती है।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍💼",
        textEn: "Are the kitchen modular cabinets fitted with soft-close hinges?",
        textHi: "क्या रसोई के मॉड्यूलर कैबिनेट सॉफ्ट-क्लोज कब्जों से युक्त हैं?"
      },
      {
        speaker: "Tanvi",
        avatar: "👩‍💼",
        textEn: "Yes, they are premium German fittings, and the countertops are quartz.",
        textHi: "जी हाँ, वे प्रीमियम जर्मन फिटिंग हैं, और काउंटरटॉप्स क्वार्ट्ज के हैं।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍💼",
        textEn: "Is the master bedroom soundproofed against city traffic noise?",
        textHi: "क्या मुख्य बेडरूम शहर के ट्रैफिक के शोर से ध्वनि-रोधक (soundproof) है?"
      },
      {
        speaker: "Tanvi",
        avatar: "👩‍💼",
        textEn: "Yes, all exterior windows are double-glazed acoustic glass.",
        textHi: "जी हाँ, सभी बाहरी खिड़कियों पर डबल-ग्लेज़्ड ध्वनिरोधी कांच लगा है।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍💼",
        textEn: "It is remarkably quiet inside. Are two covered parking bays included in the tenancy?",
        textHi: "अंदर आश्चर्यजनक रूप से शांति है। क्या किरायेदारी में दो कवर्ड पार्किंग स्लॉट शामिल हैं?"
      },
      {
        speaker: "Tanvi",
        avatar: "👩‍💼",
        textEn: "Yes, they are in basement level 1, right beside the private elevator lobby.",
        textHi: "जी हाँ, वे बेसमेंट लेवल 1 में निजी लिफ्ट लॉबी के ठीक बगल में हैं।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍💼",
        textEn: "Is the monthly maintenance fee part of the rental agreement?",
        textHi: "क्या मासिक रखरखाव शुल्क किराये के समझौते का हिस्सा है?"
      },
      {
        speaker: "Tanvi",
        avatar: "👩‍💼",
        textEn: "Yes, maintenance, swimming pool access, and gymnasium membership are all inclusive.",
        textHi: "जी हाँ, रखरखाव, स्विमिंग पूल का उपयोग और जिम की सदस्यता सभी इसमें शामिल हैं।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍💼",
        textEn: "The terms are very transparent and reasonable.",
        textHi: "शर्तें बहुत पारदर्शी और उचित हैं।"
      },
      {
        speaker: "Tanvi",
        avatar: "👩‍💼",
        textEn: "We are committed to providing the highest living standards.",
        textHi: "हम उच्चतम जीवन स्तर प्रदान करने के लिए प्रतिबद्ध हैं।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍💼",
        textEn: "I am ready to finalize the lease agreement today.",
        textHi: "मैं आज ही लीज समझौते को अंतिम रूप देने के लिए तैयार हूँ।"
      },
      {
        speaker: "Tanvi",
        avatar: "👩‍💼",
        textEn: "Splendid! The contract documents are ready for your signature at the management office.",
        textHi: "शानदार! अनुबंध दस्तावेज प्रबंधन कार्यालय में आपके हस्ताक्षर के लिए तैयार हैं।"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍💼",
        textEn: "Thank you, Tanvi. This apartment is truly exceptional.",
        textHi: "धन्यवाद, तान्वी। यह अपार्टमेंट वास्तव में असाधारण है।"
      },
      {
        speaker: "Tanvi",
        avatar: "👩‍💼",
        textEn: "You are most welcome, Mr. Joshi!",
        textHi: "आपका बहुत-बहुत स्वागत है, मिस्टर जोशी!"
      },
      {
        speaker: "Mr. Joshi",
        avatar: "👨‍💼",
        textEn: "Let's sign the agreement.",
        textHi: "चलिए अनुबंध पर हस्ताक्षर करते हैं।"
      }
    ]
  },
  {
    id: "d05_sc07",
    title: "Organic Farm Kitchen: Fresh Produce & Culinary States",
    titleHi: "ऑर्गेनिक फार्म किचन: ताज़ी उपज और खाद्य सामग्री की स्थिति",
    context: "Executive Chef Ananya and Organic Farmer Harish inspect morning harvests for a farm-to-table banquet.",
    situation: "Practicing 'is / am / are' for ingredient attributes, freshness, organic certification, and temperature states.",
    characters: ["Chef Ananya", "Harish"],
    turns: [
      {
        speaker: "Chef Ananya",
        avatar: "👩‍🍳",
        textEn: "Good morning, Harish! Are these heirloom tomatoes freshly harvested from the greenhouse?",
        textHi: "शुभ प्रभात, हरीश! क्या ये विशेष टमाटर आज सुबह ग्रीनहाउस से ताज़ा तोड़े गए हैं?"
      },
      {
        speaker: "Harish",
        avatar: "👨‍🌾",
        textEn: "Good morning, Chef! Yes, they are picked just two hours ago, and the dew is still on the stems.",
        textHi: "शुभ प्रभात, शेफ! जी हाँ, वे केवल दो घंटे पहले तोड़े गए हैं, और डंठलों पर अभी भी ओस की बूंदें हैं।"
      },
      {
        speaker: "Chef Ananya",
        avatar: "👩‍🍳",
        textEn: "Their aroma is incredible! Are all these bell peppers organic?",
        textHi: "इनकी खुशबू अविश्वसनीय है! क्या ये सभी शिमला मिर्च जैविक (ऑर्गेनिक) हैं?"
      },
      {
        speaker: "Harish",
        avatar: "👨‍🌾",
        textEn: "Yes, our entire farm is one hundred percent certified organic without synthetic fertilizers.",
        textHi: "जी हाँ, हमारा पूरा खेत कृत्रिम उर्वरकों के बिना सौ प्रतिशत प्रमाणित जैविक है।"
      },
      {
        speaker: "Chef Ananya",
        avatar: "👩‍🍳",
        textEn: "Is the fresh goat cheese ready in the dairy cold room?",
        textHi: "क्या डेयरी के कोल्ड रूम में बकरी का ताज़ा पनीर तैयार है?"
      },
      {
        speaker: "Harish",
        avatar: "👨‍🌾",
        textEn: "Yes, it is chilled at four degrees Celsius, and the texture is creamy and smooth.",
        textHi: "जी हाँ, यह चार डिग्री सेल्सियस पर ठंडा है, और इसकी बनावट मलाईदार और चिकनी है।"
      },
      {
        speaker: "Chef Ananya",
        avatar: "👩‍🍳",
        textEn: "These microgreens are so vibrant and crisp!",
        textHi: "ये सूक्ष्म पत्तियाँ (माइक्रोग्रीन्स) कितनी जीवंत और कुरकुरी हैं!"
      },
      {
        speaker: "Harish",
        avatar: "👨‍🌾",
        textEn: "They are purple radish and sunflower shoots; their flavor is peppery and fresh.",
        textHi: "वे बैंगनी मूली और सूरजमुखी की कोपलें हैं; उनका स्वाद तीखा और ताज़ा है।"
      },
      {
        speaker: "Chef Ananya",
        avatar: "👩‍🍳",
        textEn: "Is the extra virgin olive oil cold-pressed locally?",
        textHi: "क्या यह एक्स्ट्रा वर्जिन जैतून का तेल स्थानीय रूप से कोल्ड-प्रेस्ड है?"
      },
      {
        speaker: "Harish",
        avatar: "👨‍🌾",
        textEn: "Yes, it is from the Rajasthan olive groves, and the acidity is below zero point three percent.",
        textHi: "जी हाँ, यह राजस्थान के जैतून के बागों से है, और इसकी अम्लता 0.3% से कम है।"
      },
      {
        speaker: "Chef Ananya",
        avatar: "👩‍🍳",
        textEn: "That is top-grade quality. Are the guests already in the dining pavilion?",
        textHi: "यह शीर्ष स्तर की गुणवत्ता है। क्या अतिथि पहले से ही भोजन मंडप में हैं?"
      },
      {
        speaker: "Harish",
        avatar: "👨‍🌾",
        textEn: "Yes, sixty diners are seated, and the banquet atmosphere is delightful.",
        textHi: "जी हाँ, साठ भोजनकर्ता बैठे हुए हैं, और दावत का माहौल सुखद है।"
      },
      {
        speaker: "Chef Ananya",
        avatar: "👩‍🍳",
        textEn: "My culinary brigade is ready for the first salad course.",
        textHi: "मेरी रसोइयों की टीम पहले सलाद कोर्स के लिए पूरी तरह तैयार है।"
      },
      {
        speaker: "Harish",
        avatar: "👨‍🌾",
        textEn: "We are thrilled to supply your kitchen with our harvest.",
        textHi: "अपनी उपज से आपकी रसोई में आपूर्ति करके हमें बहुत खुशी हो रही है।"
      },
      {
        speaker: "Chef Ananya",
        avatar: "👩‍🍳",
        textEn: "Your produce is the real hero of our menu today.",
        textHi: "आज हमारे मेनू के असली नायक आपके द्वारा उगाए गए उत्पाद हैं।"
      },
      {
        speaker: "Harish",
        avatar: "👨‍🌾",
        textEn: "Thank you for that generous compliment, Chef!",
        textHi: "इस उदार प्रशंसा के लिए धन्यवाद, शेफ!"
      },
      {
        speaker: "Chef Ananya",
        avatar: "👩‍🍳",
        textEn: "It is well deserved. Let us begin plating!",
        textHi: "आप इसके पूरी तरह हकदार हैं। चलिए प्लेटिंग शुरू करते हैं!"
      },
      {
        speaker: "Harish",
        avatar: "👨‍🌾",
        textEn: "Best of luck for service!",
        textHi: "सर्विस के लिए हार्दिक शुभकामनाएँ!"
      },
      {
        speaker: "Chef Ananya",
        avatar: "👩‍🍳",
        textEn: "Thank you, Harish!",
        textHi: "धन्यवाद, हरीश!"
      },
      {
        speaker: "Harish",
        avatar: "👨‍🌾",
        textEn: "You're welcome!",
        textHi: "आपका स्वागत है!"
      }
    ]
  },
  {
    id: "d05_sc08",
    title: "Wildlife Sanctuary Base Camp: Roles & Ecological States",
    titleHi: "वन्यजीव अभयारण्य बेस कैंप: भूमिकाएं और पारिस्थितिकी स्थिति",
    context: "Senior Forest Officer Mr. Rawat orients newly arrived wildlife conservation volunteers Tara and Kabir.",
    situation: "Practicing 'is / am / are' for camp rules, biodiversity states, ranger responsibilities, and weather conditions.",
    characters: ["Mr. Rawat", "Tara", "Kabir"],
    turns: [
      {
        speaker: "Mr. Rawat",
        avatar: "👨‍🌾",
        textEn: "Welcome to the Corbett Wildlife Research Camp! Are you the new biology volunteers from Dehradun?",
        textHi: "कॉर्बेट वन्यजीव अनुसंधान शिविर में आपका स्वागत है! क्या आप देहरादून से आए नए जीवविज्ञान स्वयंसेवक हैं?"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🌾",
        textEn: "Yes, I am Tara, and he is Kabir. We are postgraduate researchers in wildlife ecology.",
        textHi: "जी हाँ, मैं तारा हूँ, और ये कबीर हैं। हम वन्यजीव पारिस्थितिकी में स्नातकोत्तर शोधकर्ता हैं।"
      },
      {
        speaker: "Mr. Rawat",
        avatar: "👨‍🌾",
        textEn: "We are very pleased to have you with us. Is your field tracking equipment in order?",
        textHi: "हमारे साथ आपकी उपस्थिति हमारे लिए बहुत खुशी की बात है। क्या आपके फील्ड ट्रैकिंग उपकरण दुरुस्त हैं?"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🌾",
        textEn: "Yes, our GPS collar receivers and infrared camera traps are fully charged and calibrated.",
        textHi: "जी हाँ, हमारे जीपीएस कॉलर रिसीवर और इन्फ्रारेड कैमरा ट्रैप पूरी तरह चार्ज और कैलिब्रेट हैं।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🌾",
        textEn: "Is the elephant migration corridor active near the river basin this season?",
        textHi: "क्या इस मौसम में नदी घाटी के पास हाथियों का प्रवास गलियारा सक्रिय है?"
      },
      {
        speaker: "Mr. Rawat",
        avatar: "👨‍🌾",
        textEn: "Yes, a herd of twenty-two elephants is currently near the Ramganga reservoir.",
        textHi: "जी हाँ, बाईस हाथियों का एक झुंड वर्तमान में रामगंगा जलाशय के पास है।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🌾",
        textEn: "Are tigers territorial along the northern ridge?",
        textHi: "क्या उत्तरी पहाड़ी क्षेत्र में बाघ अपने इलाके को लेकर आक्रामक हैं?"
      },
      {
        speaker: "Mr. Rawat",
        avatar: "👨‍🌾",
        textEn: "Yes, the northern ridge is the marked territory of two adult male tigers.",
        textHi: "जी हाँ, उत्तरी रिज दो वयस्क नर बाघों का चिह्नित क्षेत्र है।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🌾",
        textEn: "Is night patrolling permitted for research volunteers?",
        textHi: "क्या शोध स्वयंसेवकों के लिए रात में गश्त की अनुमति है?"
      },
      {
        speaker: "Mr. Rawat",
        avatar: "👨‍🌾",
        textEn: "No, night patrols are exclusively for armed forest guards. The jungle is unpredictable after dark.",
        textHi: "नहीं, रात की गश्त केवल सशस्त्र वन रक्षकों के लिए है। अंधेरा होने के बाद जंगल अप्रत्याशित होता है।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🌾",
        textEn: "We are fully compliant with all sanctuary safety rules.",
        textHi: "हम अभयारण्य के सभी सुरक्षा नियमों का पूरी तरह पालन करने के लिए तैयार हैं।"
      },
      {
        speaker: "Mr. Rawat",
        avatar: "👨‍🌾",
        textEn: "Your log cabins are Number 4 and 5 by the watchtower. The solar power supply is steady.",
        textHi: "वॉचटॉवर के पास केबिन नंबर 4 और 5 आपके हैं। सौर ऊर्जा की आपूर्ति स्थिर है।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🌾",
        textEn: "The forest camp is so serene and well-maintained!",
        textHi: "जंगल का यह शिविर कितना शांत और सुव्यवस्थित है!"
      },
      {
        speaker: "Mr. Rawat",
        avatar: "👨‍🌾",
        textEn: "Conservation is our life's mission here.",
        textHi: "यहाँ संरक्षण हमारे जीवन का मुख्य उद्देश्य है।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🌾",
        textEn: "We are eager to contribute our academic skills to the tiger census.",
        textHi: "हम बाघ गणना में अपने अकादमिक कौशल का योगदान देने के लिए उत्सुक हैं।"
      },
      {
        speaker: "Mr. Rawat",
        avatar: "👨‍🌾",
        textEn: "You are valuable assets to our research team.",
        textHi: "आप हमारी शोध टीम के लिए बहुत मूल्यवान सहयोगी हैं।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🌾",
        textEn: "Thank you for the warm briefing, Officer Rawat.",
        textHi: "अधिकारी रावत, इस विस्तृत और आत्मीय जानकारी के लिए धन्यवाद।"
      },
      {
        speaker: "Mr. Rawat",
        avatar: "👨‍🌾",
        textEn: "Have a safe and productive field expedition!",
        textHi: "आपका फील्ड अभियान सुरक्षित और फलदायी रहे!"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🌾",
        textEn: "Thank you, Sir!",
        textHi: "धन्यवाद, महोदय!"
      },
      {
        speaker: "Tara",
        avatar: "👩‍🌾",
        textEn: "Goodbye!",
        textHi: "अलविदा!"
      }
    ]
  },
  {
    id: "d05_sc09",
    title: "International Airport Departure Lounge: Flight & Weather States",
    titleHi: "अंतरराष्ट्रीय हवाई अड्डा प्रस्थान लाउंज: उड़ान और मौसम की स्थिति",
    context: "Passenger Rahul inquires about boarding status and destination weather with Swiss Air Agent Ms. Meier.",
    situation: "Practicing 'is / am / are' for flight status, gate readiness, weather conditions, and seat allocations.",
    characters: ["Ms. Meier", "Rahul"],
    turns: [
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Good evening! Is Flight LX-147 to Zurich on schedule tonight?",
        textHi: "शुभ संध्या! क्या ज्यूरिख जाने वाली उड़ान LX-147 आज रात समय पर है?"
      },
      {
        speaker: "Ms. Meier",
        avatar: "👩‍💼",
        textEn: "Good evening, Sir! Yes, it is perfectly on time. The aircraft is already at Gate 24.",
        textHi: "शुभ संध्या, महोदय! जी हाँ, यह बिल्कुल समय पर है। विमान पहले से ही गेट 24 पर मौजूद है।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "I am in Seat 12A. Is that a window seat in the forward cabin?",
        textHi: "मेरी सीट 12A है। क्या वह आगे के केबिन में खिड़की वाली सीट है?"
      },
      {
        speaker: "Ms. Meier",
        avatar: "👩‍💼",
        textEn: "Yes, it is a window seat with extra legroom directly over the forward wing section.",
        textHi: "जी हाँ, यह आगे के पंख वाले हिस्से के ठीक ऊपर अतिरिक्त लेगरूम वाली खिड़की की सीट है।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Is the current weather in Zurich cold and snowy?",
        textHi: "क्या ज्यूरिख में वर्तमान मौसम ठंडा और बर्फीला है?"
      },
      {
        speaker: "Ms. Meier",
        avatar: "👩‍💼",
        textEn: "The temperature in Zurich is minus two degrees Celsius, and the sky is clear.",
        textHi: "ज्यूरिख में तापमान शून्य से दो डिग्री नीचे है, और आसमान साफ है।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Are winter coats necessary upon landing?",
        textHi: "क्या उतरते ही विंटर कोट की आवश्यकता होगी?"
      },
      {
        speaker: "Ms. Meier",
        avatar: "👩‍💼",
        textEn: "Yes, heavy woolens are highly recommended when exiting the terminal.",
        textHi: "जी हाँ, टर्मिनल से बाहर निकलते समय भारी ऊनी कपड़ों की अत्यधिक अनुशंसा की जाती है।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Are the duty-free lounges accessible right opposite the boarding gate?",
        textHi: "क्या बोर्डिंग गेट के ठीक सामने ड्यूटी-फ्री लाउंज उपलब्ध हैं?"
      },
      {
        speaker: "Ms. Meier",
        avatar: "👩‍💼",
        textEn: "Yes, the Swiss Senator lounge is immediately across from Gate 24.",
        textHi: "जी हाँ, स्विस सीनेटर लाउंज गेट 24 के ठीक सामने है।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Is boarding by zone or row numbers?",
        textHi: "क्या बोर्डिंग ज़ोन के अनुसार है या पंक्ति संख्याओं के अनुसार?"
      },
      {
        speaker: "Ms. Meier",
        avatar: "👩‍💼",
        textEn: "Boarding is by designated group zones; your zone is Group 2.",
        textHi: "बोर्डिंग निर्धारित समूह ज़ोन द्वारा है; आपका ज़ोन ग्रुप 2 है।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "We are ready for boarding whenever the announcement begins.",
        textHi: "जैसे ही घोषणा शुरू होगी हम बोर्डिंग के लिए तैयार हैं।"
      },
      {
        speaker: "Ms. Meier",
        avatar: "👩‍💼",
        textEn: "The flight attendants are ready to welcome passengers aboard in ten minutes.",
        textHi: "विमान परिचारक दस मिनट में यात्रियों का स्वागत करने के लिए तैयार हैं।"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Thank you for the comprehensive information, Ms. Meier.",
        textHi: "सुश्री मायर, इस विस्तृत जानकारी के लिए बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Ms. Meier",
        avatar: "👩‍💼",
        textEn: "You are most welcome, Sir. Have a smooth and pleasant flight across the Alps!",
        textHi: "आपका बहुत-बहुत स्वागत है, महोदय। आल्प्स के ऊपर आपकी उड़ान सुगम और सुखद रहे!"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Thank you! Goodbye!",
        textHi: "धन्यवाद! अलविदा!"
      },
      {
        speaker: "Ms. Meier",
        avatar: "👩‍💼",
        textEn: "Goodbye, Mr. Rahul!",
        textHi: "अलविदा, मिस्टर राहुल!"
      },
      {
        speaker: "Rahul",
        avatar: "👨‍💼",
        textEn: "Take care!",
        textHi: "अपना ध्यान रखें!"
      },
      {
        speaker: "Ms. Meier",
        avatar: "👩‍💼",
        textEn: "Safe travels!",
        textHi: "आपकी यात्रा सुखद रहे!"
      }
    ]
  },
  {
    id: "d05_sc10",
    title: "Software Engineering Lab: Server & Infrastructure States",
    titleHi: "सॉफ्टवेयर इंजीनियरिंग लैब: सर्वर और सिस्टम की स्थिति",
    context: "DevOps Engineer Varun and QA Lead Sneha conduct a sanity health check on cloud microservices.",
    situation: "Deploying 'is / am / are' to describe microservice health, latency states, database availability, and build statuses.",
    characters: ["Varun", "Sneha"],
    turns: [
      {
        speaker: "Sneha",
        avatar: "👩‍💻",
        textEn: "Good afternoon, Varun! Is the payment gateway microservice healthy and responsive?",
        textHi: "शुभ दोपहर, वरुण! क्या भुगतान गेटवे माइक्रोसर्विस दुरुस्त और उत्तरदायी है?"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💻",
        textEn: "Good afternoon, Sneha! Yes, all health endpoints are green, and the response latency is below fifteen milliseconds.",
        textHi: "शुभ दोपहर, स्नेहा! जी हाँ, सभी स्वास्थ्य एंडपॉइंट्स हरे हैं, और प्रतिक्रिया समय पंद्रह मिलीसेकंड से कम है।"
      },
      {
        speaker: "Sneha",
        avatar: "👩‍💻",
        textEn: "Is the Redis memory caching cluster active in both availability zones?",
        textHi: "क्या रेडिस मेमोरी कैशिंग क्लस्टर दोनों उपलब्धता क्षेत्रों में सक्रिय है?"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💻",
        textEn: "Yes, it is fully operational across US-East and EU-Central data centers.",
        textHi: "जी हाँ, यह यूएस-ईस्ट और ईयू-सेंट्रल डेटा केंद्रों में पूरी तरह से चालू है।"
      },
      {
        speaker: "Sneha",
        avatar: "👩‍💻",
        textEn: "Are the authentication API tokens valid for twelve hours?",
        textHi: "क्या प्रमाणीकरण एपीआई टोकन बारह घंटे के लिए मान्य हैं?"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💻",
        textEn: "Yes, they are cryptographically signed JSON Web Tokens with a twelve-hour expiry window.",
        textHi: "जी हाँ, वे बारह घंटे की वैधता अवधि वाले क्रिप्टोग्राफिक रूप से हस्ताक्षरित JSON वेब टोकन हैं।"
      },
      {
        speaker: "Sneha",
        avatar: "👩‍💻",
        textEn: "Is our automated test suite pass rate above ninety-nine percent?",
        textHi: "क्या हमारे स्वचालित टेस्ट सूट की सफलता दर निन्यानवे प्रतिशत से ऊपर है?"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💻",
        textEn: "The pass rate is currently one hundred percent across four thousand unit and integration tests.",
        textHi: "चार हजार यूनिट और इंटीग्रेशन परीक्षणों में सफलता दर वर्तमान में सौ प्रतिशत है।"
      },
      {
        speaker: "Sneha",
        avatar: "👩‍💻",
        textEn: "Are the server CPU utilization metrics within safe thresholds?",
        textHi: "क्या सर्वर सीपीयू उपयोग मेट्रिक्स सुरक्षित सीमा के भीतर हैं?"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💻",
        textEn: "Yes, CPU load is at twenty-eight percent, and memory consumption is stable.",
        textHi: "जी हाँ, सीपीयू लोड अट्ठाईस प्रतिशत पर है, और मेमोरी की खपत स्थिर है।"
      },
      {
        speaker: "Sneha",
        avatar: "👩‍💻",
        textEn: "The release candidate build is ready for production deployment.",
        textHi: "रिलीज़ कैंडिडेट बिल्ड लाइव डिप्लॉयमेंट के लिए पूरी तरह तैयार है।"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💻",
        textEn: "We are in an optimal state for the scheduled midnight release.",
        textHi: "हम आधी रात के निर्धारित रिलीज़ के लिए सबसे उत्तम स्थिति में हैं।"
      },
      {
        speaker: "Sneha",
        avatar: "👩‍💻",
        textEn: "Is the roll-back script verified and ready in case of unexpected errors?",
        textHi: "क्या अप्रत्याशित त्रुटियों के मामले में रोल-बैक स्क्रिप्ट सत्यापित और तैयार है?"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💻",
        textEn: "Yes, the automated failover script is tested and standby ready.",
        textHi: "जी हाँ, स्वचालित फेलओवर स्क्रिप्ट का परीक्षण कर लिया गया है और वह स्टैंडबाय पर तैयार है।"
      },
      {
        speaker: "Sneha",
        avatar: "👩‍💻",
        textEn: "Our engineering pipeline is exceptionally robust.",
        textHi: "हमारा इंजीनियरिंग ढांचा असाधारण रूप से मजबूत है।"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💻",
        textEn: "Kudos to the entire infrastructure team for their diligence!",
        textHi: "पूरी इंफ्रास्ट्रक्चर टीम को उनकी लगन के लिए बहुत-बहुत बधाई!"
      },
      {
        speaker: "Sneha",
        avatar: "👩‍💻",
        textEn: "I am confident of a flawless deployment tonight.",
        textHi: "आज रात त्रुटिहीन डिप्लॉयमेंट को लेकर मैं पूरी तरह आश्वस्त हूँ।"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💻",
        textEn: "See you at the deployment bridge at eleven thirty!",
        textHi: "साढ़े ग्यारह बजे डिप्लॉयमेंट ब्रिज पर मिलते हैं!"
      },
      {
        speaker: "Sneha",
        avatar: "👩‍💻",
        textEn: "See you then, Varun!",
        textHi: "तब मिलते हैं, वरुण!"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💻",
        textEn: "Goodbye!",
        textHi: "अलविदा!"
      }
    ]
  }
];
