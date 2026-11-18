import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const day02Dialogues = [
  {
    id: "d02_sc01",
    title: "Artisanal Coffee Bar: Polite Ordering & Courtesy Requests",
    titleHi: "आर्टिसनल कॉफी बार: विनम्र ऑर्डर और शिष्टाचार अनुरोध",
    context: "Customer Ananya visits a bustling café at 10:00 AM and places an order with barista Kabir.",
    situation: "Deploying courtesy keywords ('Please', 'Thank you', 'Excuse me'), modal request softening, and polite adjustments.",
    characters: ["Kabir", "Ananya"],
    turns: [
      {
        speaker: "Kabir",
        avatar: "👨‍🍳",
        textEn: "Good morning! Welcome to Roasters & Beans. How may I assist you today?",
        textHi: "शुभ प्रभात! रोस्टर्स एंड बीन्स में आपका स्वागत है। आज मैं आपकी किस प्रकार सहायता कर सकता हूँ?"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Good morning! Could I please have a medium oat-milk cappuccino?",
        textHi: "शुभ प्रभात! क्या मुझे कृपया एक मध्यम ओट-मिल्क कैपुचीनो मिल सकती है?"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🍳",
        textEn: "Certainly! Would you prefer regular espresso beans or our single-origin roast?",
        textHi: "निश्चय ही! क्या आप नियमित एस्प्रेसो बीन्स पसंद करेंगी या हमारा सिंगल-ओरिजिन रोस्ट?"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "The single-origin roast, please. Would you mind making it extra hot?",
        textHi: "सिंगल-ओरिजिन रोस्ट, कृपया। क्या आप इसे थोड़ा अधिक गर्म बनाने का कष्ट करेंगे?"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🍳",
        textEn: "It would be my pleasure. Would you like any sweetener or cinnamon on top?",
        textHi: "यह मेरे लिए खुशी की बात होगी। क्या आप ऊपर से कोई मीठा या दालचीनी पाउडर पसंद करेंगी?"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Just a light sprinkle of cinnamon, please. No added sugar.",
        textHi: "बस थोड़ा सा दालचीनी पाउडर छिड़क दीजिए, कृपया। अतिरिक्त चीनी बिल्कुल नहीं।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🍳",
        textEn: "Understood. That comes to two hundred and forty rupees, please.",
        textHi: "समझ गया। कृपया दो सौ चालीस रुपये का भुगतान करें।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Here is my payment card. Thank you very much.",
        textHi: "यह रहा मेरा पेमेंट कार्ड। बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🍳",
        textEn: "You are most welcome. Please allow me about three minutes to prepare your coffee.",
        textHi: "आपका बहुत-बहुत स्वागत है। कृपया आपकी कॉफी तैयार करने के लिए मुझे लगभग तीन मिनट का समय दें।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Excuse me, Kabir! Could I also trouble you for a glass of plain water while I wait?",
        textHi: "क्षमा करें, कबीर! क्या प्रतीक्षा करते समय मैं आपसे एक गिलास सादे पानी के लिए कष्ट दे सकती हूँ?"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🍳",
        textEn: "No trouble at all, Ma'am! Here is a fresh glass of chilled water for you.",
        textHi: "बिल्कुल कोई कष्ट नहीं, मैम! यह रहा आपके लिए एक गिलास ताज़ा ठंडा पानी।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "That is very thoughtful of you. Thank you so much.",
        textHi: "यह आपकी बहुत भलमनसाहत है। बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🍳",
        textEn: "The pleasure is all mine! Here is your extra-hot oat-milk cappuccino.",
        textHi: "यह तो मेरा कर्तव्य है! यह रही आपकी गर्म ओट-मिल्क कैपुचीनो।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Oh dear, I accidentally nudged the napkin holder with my sleeve! I am so sorry.",
        textHi: "अरे, मेरी आस्तीन से गलती से नैपकिन होल्डर टकरा गया! मुझे अत्यंत खेद है।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🍳",
        textEn: "Please do not worry at all! No harm was done. I will set it back in place immediately.",
        textHi: "कृपया बिल्कुल चिंता न करें! कोई नुकसान नहीं हुआ है। मैं इसे तुरंत अपनी जगह पर रख देता हूँ।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Thank you for your gracious understanding. Your customer service is truly remarkable.",
        textHi: "आपकी इस सौम्य समझदारी के लिए धन्यवाद। आपकी ग्राहक सेवा सचमुच सराहनीय है।"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🍳",
        textEn: "Thank you for your kind words! We genuinely appreciate having you here.",
        textHi: "आपके इन मधुर शब्दों के लिए धन्यवाद! यहाँ आपकी उपस्थिति की हम वास्तव में सराहना करते हैं।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Could you please point me toward the Wi-Fi password board?",
        textHi: "क्या आप कृपया मुझे वाई-फाई पासवर्ड बोर्ड की ओर इशारा कर सकते हैं?"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🍳",
        textEn: "Certainly! The network credentials are listed right beside the quiet study corner on your left.",
        textHi: "अवश्य! नेटवर्क का विवरण आपकी बाईं ओर शांत अध्ययन कोने के ठीक बगल में लिखा है।"
      },
      {
        speaker: "Ananya",
        avatar: "👩‍💼",
        textEn: "Splendid. Thank you once again for your assistance. Have a wonderful day ahead!",
        textHi: "शानदार। आपकी सहायता के लिए एक बार फिर धन्यवाद। आपका आगे का दिन बहुत शुभ हो!"
      },
      {
        speaker: "Kabir",
        avatar: "👨‍🍳",
        textEn: "You are very welcome! Enjoy your coffee and have a fantastic morning!",
        textHi: "आपका बहुत-बहुत स्वागत है! अपनी कॉफी का आनंद लें और आपकी सुबह शानदार रहे!"
      }
    ]
  },
  {
    id: "d02_sc02",
    title: "Executive Office: Modal Softening & Polite Requests",
    titleHi: "कार्यकारी कार्यालय: मोडल द्वारा विनम्रता और औपचारिक अनुरोध",
    context: "Senior Project Manager Mr. Chawla discusses quarterly deliverables with Business Analyst Neha in the boardroom.",
    situation: "Practicing polite request formulas ('Could you please', 'Would you mind'), avoiding direct commands, and responding to thanks.",
    characters: ["Mr. Chawla", "Neha"],
    turns: [
      {
        speaker: "Mr. Chawla",
        avatar: "👨‍💼",
        textEn: "Good morning, Neha! Do you have a few moments to discuss the quarterly financial forecast?",
        textHi: "शुभ प्रभात, नेहा! क्या आपके पास त्रैमासिक वित्तीय पूर्वानुमान पर चर्चा करने के लिए कुछ क्षण हैं?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Good morning, Mr. Chawla! Yes, certainly. I have the updated audit sheet ready right here.",
        textHi: "शुभ प्रभात, मिस्टर चावला! जी हाँ, बिल्कुल। मेरे पास यहाँ अपडेट की गई ऑडिट शीट तैयार है।"
      },
      {
        speaker: "Mr. Chawla",
        avatar: "👨‍💼",
        textEn: "Would you mind walking me through the variance numbers for the marketing expenditure?",
        textHi: "क्या आप कृपया मुझे विपणन व्यय के अंतर के आंकड़ों को विस्तार से समझाने का कष्ट करेंगी?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Not at all, Sir. As you can see, our digital outreach expenses were eight percent below budget.",
        textHi: "बिल्कुल नहीं, सर। जैसा कि आप देख सकते हैं, हमारे डिजिटल प्रचार खर्च बजट से आठ प्रतिशत कम रहे।"
      },
      {
        speaker: "Mr. Chawla",
        avatar: "👨‍💼",
        textEn: "That is excellent cost discipline. Could you please send this consolidated deck to the leadership committee?",
        textHi: "यह उत्कृष्ट लागत अनुशासन है। क्या आप कृपया इस समेकित फाइल को नेतृत्व समिति को भेजने का कष्ट करेंगी?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "I will do so immediately after adding the executive summary paragraph.",
        textHi: "कार्यकारी सारांश पैराग्राफ जोड़ने के तुरंत बाद मैं इसे भेज दूंगी।"
      },
      {
        speaker: "Mr. Chawla",
        avatar: "👨‍💼",
        textEn: "Thank you very much for your thorough diligence on this project, Neha.",
        textHi: "इस प्रोजेक्ट पर आपकी संपूर्ण लगन और परिश्रम के लिए बहुत-बहुत धन्यवाद, नेहा।"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "You are most welcome, Mr. Chawla. It is a genuine pleasure to contribute to our team's milestones.",
        textHi: "आपका बहुत-बहुत स्वागत है, मिस्टर चावला। हमारी टीम की उपलब्धियों में योगदान देना मेरे लिए वास्तव में खुशी की बात है।"
      },
      {
        speaker: "Mr. Chawla",
        avatar: "👨‍💼",
        textEn: "Pardon me, Neha, could you please clarify one detail regarding the vendor onboarding invoice?",
        textHi: "क्षमा करें, नेहा, क्या आप विक्रेता ऑनबोर्डिंग चालान के संबंध में एक विवरण स्पष्ट कर सकती हैं?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Of course! The vendor invoice was approved yesterday afternoon by the procurement division.",
        textHi: "अवश्य! खरीद प्रभाग द्वारा कल दोपहर विक्रेता चालान को मंजूरी दे दी गई थी।"
      },
      {
        speaker: "Mr. Chawla",
        avatar: "👨‍💼",
        textEn: "I appreciate the quick clarification. Would you be so kind as to print two hard copies for the afternoon board meeting?",
        textHi: "त्वरित स्पष्टीकरण के लिए धन्यवाद। क्या आप आज दोपहर की बोर्ड बैठक के लिए दो हार्ड कॉपी प्रिंट करने की कृपा करेंगी?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "I will have them printed and bound on your desk by two o'clock.",
        textHi: "दो बजे तक मैं उन्हें प्रिंट करके और बाइंड करके आपकी मेज पर रख दूंगी।"
      },
      {
        speaker: "Mr. Chawla",
        avatar: "👨‍💼",
        textEn: "Would you also mind checking if the projection screen in Boardroom A is operational?",
        textHi: "क्या आप यह भी जांचने का कष्ट करेंगी कि बोर्डरूम ए में प्रोजेक्टर स्क्रीन चालू है या नहीं?"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "I checked it earlier this morning, Sir, and our IT department confirmed everything is working perfectly.",
        textHi: "मैंने आज सुबह ही इसकी जांच कर ली थी, सर, और हमारे आईटी विभाग ने पुष्टि की है कि सब कुछ बिल्कुल ठीक से काम कर रहा है।"
      },
      {
        speaker: "Mr. Chawla",
        avatar: "👨‍💼",
        textEn: "That is marvelous foresight. Thank you once again for your seamless coordination.",
        textHi: "यह आपकी अद्भुत दूरदर्शिता है। आपके इस सहज समन्वय के लिए एक बार फिर बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "It is entirely my pleasure, Sir. Please let me know if you need anything further.",
        textHi: "यह पूरी तरह से मेरे लिए हर्ष की बात है, महोदय। यदि आपको किसी और चीज़ की आवश्यकता हो तो कृपया मुझे बताएं।"
      },
      {
        speaker: "Mr. Chawla",
        avatar: "👨‍💼",
        textEn: "That will be all for now. Have a productive afternoon ahead!",
        textHi: "अभी के लिए बस इतना ही। आपकी आगे की दोपहर फलदायी रहे!"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Thank you, Mr. Chawla. Have a great day!",
        textHi: "धन्यवाद, मिस्टर चावला। आपका दिन बहुत अच्छा रहे!"
      },
      {
        speaker: "Mr. Chawla",
        avatar: "👨‍💼",
        textEn: "See you at the meeting. Goodbye!",
        textHi: "बैठक में मिलते हैं। अलविदा!"
      },
      {
        speaker: "Neha",
        avatar: "👩‍💼",
        textEn: "Goodbye, Sir!",
        textHi: "अलविदा, सर!"
      }
    ]
  },
  {
    id: "d02_sc03",
    title: "University Research Library: Quiet Etiquette & Courtesies",
    titleHi: "विश्वविद्यालय शोध पुस्तकालय: शांत वातावरण और शिष्टाचार",
    context: "Postgraduate student Rohan approaches Librarian Mrs. Menon in the central reference section.",
    situation: "Practicing quiet etiquette, whispered polite requests ('Excuse me', 'Pardon me', 'May I please').",
    characters: ["Mrs. Menon", "Rohan"],
    turns: [
      {
        speaker: "Rohan",
        avatar: "👨‍🎓",
        textEn: "Excuse me, Mrs. Menon. May I trouble you for a brief moment?",
        textHi: "क्षमा करें, श्रीमती मेनन। क्या मैं एक छोटे से पल के लिए आपको कष्ट दे सकता हूँ?"
      },
      {
        speaker: "Mrs. Menon",
        avatar: "👩‍🏫",
        textEn: "Yes, of course, Rohan. How can I assist you with your research today?",
        textHi: "हाँ, अवश्य रोहन। आज मैं आपके शोध में आपकी किस प्रकार मदद कर सकती हूँ?"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍🎓",
        textEn: "Could you please guide me to the peer-reviewed linguistics journals for phonetics?",
        textHi: "क्या आप कृपया मुझे ध्वनिविज्ञान (Phonetics) के सहकर्मी-समीक्षित भाषाविज्ञान शोध पत्रिकाओं की ओर निर्देशित कर सकती हैं?"
      },
      {
        speaker: "Mrs. Menon",
        avatar: "👩‍🏫",
        textEn: "Certainly! They are cataloged in Section 4B on the third floor.",
        textHi: "निश्चय ही! वे तीसरी मंजिल पर अनुभाग 4B में सूचीबद्ध हैं।"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍🎓",
        textEn: "Pardon me, Mrs. Menon, did you say Section 4B or 4D?",
        textHi: "क्षमा करें, श्रीमती मेनन, क्या आपने अनुभाग 4B कहा या 4D?"
      },
      {
        speaker: "Mrs. Menon",
        avatar: "👩‍🏫",
        textEn: "Section 4B, right next to the cognitive science archive.",
        textHi: "अनुभाग 4B, संज्ञानात्मक विज्ञान संग्रह के ठीक बगल में।"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍🎓",
        textEn: "Thank you for the clarification. Would it be possible to check out the current reference volume?",
        textHi: "स्पष्टीकरण के लिए धन्यवाद। क्या वर्तमान संदर्भ ग्रंथ को इशू कराकर बाहर ले जाना संभव होगा?"
      },
      {
        speaker: "Mrs. Menon",
        avatar: "👩‍🏫",
        textEn: "I am afraid reference volumes must remain in the reading hall, but you may scan the necessary chapters.",
        textHi: "मुझे खेद है कि संदर्भ ग्रंथ वाचनालय में ही रहने चाहिए, लेकिन आप आवश्यक अध्यायों को स्कैन कर सकते हैं।"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍🎓",
        textEn: "I understand completely. Would you mind showing me where the scanning terminal is situated?",
        textHi: "मैं पूरी तरह समझता हूँ। क्या आप यह दिखाने का कष्ट करेंगी कि स्कैनिंग टर्मिनल कहाँ स्थित है?"
      },
      {
        speaker: "Mrs. Menon",
        avatar: "👩‍🏫",
        textEn: "It is located by the east window, just past the digital catalog kiosks.",
        textHi: "यह पूर्वी खिड़की के पास, डिजिटल कैटलॉग कियोस्क के ठीक आगे स्थित है।"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍🎓",
        textEn: "Thank you very much for your kind guidance, Mrs. Menon.",
        textHi: "श्रीमती मेनन, आपके इस विनम्र मार्गदर्शन के लिए बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Mrs. Menon",
        avatar: "👩‍🏫",
        textEn: "You are most welcome, Rohan. Please feel free to ask if you need help operating the scanner.",
        textHi: "आपका बहुत-बहुत स्वागत है, रोहन। यदि आपको स्कैनर चलाने में सहायता की आवश्यकता हो तो बेझिझक पूछें।"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍🎓",
        textEn: "That is very kind of you. Also, could you please tell me the closing time for the reference wing today?",
        textHi: "यह आपकी बहुत कृपा है। साथ ही, क्या आप कृपया मुझे आज संदर्भ विंग के बंद होने का समय बता सकती हैं?"
      },
      {
        speaker: "Mrs. Menon",
        avatar: "👩‍🏫",
        textEn: "The reference wing remains open until eight o'clock in the evening.",
        textHi: "संदर्भ विंग शाम आठ बजे तक खुला रहता है।"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍🎓",
        textEn: "That gives me ample time. I am very grateful for your patient assistance.",
        textHi: "इससे मुझे पर्याप्त समय मिल जाएगा। आपकी धैर्यपूर्ण सहायता के लिए मैं अत्यंत आभारी हूँ।"
      },
      {
        speaker: "Mrs. Menon",
        avatar: "👩‍🏫",
        textEn: "It is our absolute pleasure to support our researchers. Have a fruitful study session.",
        textHi: "अपने शोधकर्ताओं का सहयोग करना हमारे लिए परम हर्ष की बात है। आपका अध्ययन सत्र उपयोगी रहे।"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍🎓",
        textEn: "Thank you, Ma'am. Have a wonderful day!",
        textHi: "धन्यवाद, मैम। आपका दिन शुभ हो!"
      },
      {
        speaker: "Mrs. Menon",
        avatar: "👩‍🏫",
        textEn: "You too, Rohan. Happy researching!",
        textHi: "आपको भी, रोहन। आपका शोध कार्य सफल हो!"
      },
      {
        speaker: "Rohan",
        avatar: "👨‍🎓",
        textEn: "Goodbye!",
        textHi: "अलविदा!"
      },
      {
        speaker: "Mrs. Menon",
        avatar: "👩‍🏫",
        textEn: "Goodbye!",
        textHi: "अलविदा!"
      }
    ]
  },
  {
    id: "d02_sc04",
    title: "Express Train Compartment: Luggage Assistance & Neighborly Courtesy",
    titleHi: "एक्सप्रेस ट्रेन का डिब्बा: सामान में सहायता और सहयात्री शिष्टाचार",
    context: "Passenger Amit helps an elderly traveler, Mr. Saxena, organize luggage in an AC compartment.",
    situation: "Deploying polite offers of help, expressing gratitude, and handling mutual passenger courtesies.",
    characters: ["Amit", "Mr. Saxena"],
    turns: [
      {
        speaker: "Amit",
        avatar: "👨‍💼",
        textEn: "Excuse me, Sir! Would you like some assistance placing that heavy suitcase on the overhead rack?",
        textHi: "क्षमा करें, महोदय! क्या आप उस भारी सूटकेस को ऊपर के रैक पर रखने में कुछ सहायता चाहेंगे?"
      },
      {
        speaker: "Mr. Saxena",
        avatar: "👨‍🦳",
        textEn: "Oh, that would be exceptionally kind of you, young man! Thank you very much.",
        textHi: "अरे, यह आपकी बहुत बड़ी कृपा होगी, नौजवान! आपका बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Amit",
        avatar: "👨‍💼",
        textEn: "Please allow me to lift it. There we go—it is securely positioned now.",
        textHi: "कृपया मुझे इसे उठाने दें। यह लीजिए—अब यह पूरी तरह सुरक्षित रूप से रखा गया है।"
      },
      {
        speaker: "Mr. Saxena",
        avatar: "👨‍🦳",
        textEn: "I am deeply grateful for your help. My back has been bothering me lately.",
        textHi: "आपकी सहायता के लिए मैं अत्यंत आभारी हूँ। हाल ही में मेरी पीठ में कुछ तकलीफ रही है।"
      },
      {
        speaker: "Amit",
        avatar: "👨‍💼",
        textEn: "It is an absolute pleasure, Sir. Please do not hesitate to let me know if you need it brought down later.",
        textHi: "यह मेरे लिए परम सौभाग्य की बात है, महोदय। यदि बाद में इसे नीचे उतारने की आवश्यकता हो तो कृपया मुझे बताने में संकोच न करें।"
      },
      {
        speaker: "Mr. Saxena",
        avatar: "👨‍🦳",
        textEn: "Pardon me, would you prefer the window seat? I am quite comfortable on the aisle.",
        textHi: "माफ कीजिएगा, क्या आप खिड़की वाली सीट पसंद करेंगे? मैं गलियारे वाली सीट पर बिल्कुल सहज हूँ।"
      },
      {
        speaker: "Amit",
        avatar: "👨‍💼",
        textEn: "That is very thoughtful of you, Sir, but please keep your assigned window seat and enjoy the scenery.",
        textHi: "यह आपकी बहुत उदारता है, महोदय, लेकिन कृपया अपनी आवंटित खिड़की वाली सीट पर ही रहें और दृश्यों का आनंद लें।"
      },
      {
        speaker: "Mr. Saxena",
        avatar: "👨‍🦳",
        textEn: "Thank you for your courteous consideration.",
        textHi: "आपके इस विनम्र विचार के लिए धन्यवाद।"
      },
      {
        speaker: "Amit",
        avatar: "👨‍💼",
        textEn: "You are most welcome, Sir. Would you mind if I adjusted the air-conditioning vent slightly?",
        textHi: "आपका बहुत-बहुत स्वागत है, महोदय। यदि मैं एयर-कंडीशनर के वेंट को थोड़ा सा समायोजित करूँ तो क्या आपको कोई असुविधा होगी?"
      },
      {
        speaker: "Mr. Saxena",
        avatar: "👨‍🦳",
        textEn: "Please go ahead! The airflow was directly on my shoulder, so that is actually much better.",
        textHi: "कृपया अवश्य करें! हवा का बहाव सीधे मेरे कंधे पर आ रहा था, इसलिए यह तो वास्तव में बहुत बेहतर है।"
      },
      {
        speaker: "Amit",
        avatar: "👨‍💼",
        textEn: "May I offer you a bottle of mineral water from the pantry car?",
        textHi: "क्या मैं पैंट्री कार से आपके लिए एक बोतल मिनरल वाटर प्रस्तुत कर सकता हूँ?"
      },
      {
        speaker: "Mr. Saxena",
        avatar: "👨‍🦳",
        textEn: "No, thank you, my daughter packed a thermos of warm tea for me. But I appreciate your kindness!",
        textHi: "नहीं धन्यवाद, मेरी बेटी ने मेरे लिए गर्म चाय का एक थर्मस पैक किया है। लेकिन मैं आपकी दयालुता की सराहना करता हूँ!"
      },
      {
        speaker: "Amit",
        avatar: "👨‍💼",
        textEn: "That is wonderful. Please let me know if you would like me to turn on the reading lamp.",
        textHi: "यह बहुत अच्छी बात है। यदि आप चाहें कि मैं रीडिंग लैंप चालू कर दूँ तो कृपया मुझे बताएं।"
      },
      {
        speaker: "Mr. Saxena",
        avatar: "👨‍🦳",
        textEn: "Yes, could you please switch it on? The daylight is beginning to dim outside.",
        textHi: "जी हाँ, क्या आप कृपया इसे चालू कर सकते हैं? बाहर की रोशनी अब थोड़ी कम होने लगी है।"
      },
      {
        speaker: "Amit",
        avatar: "👨‍💼",
        textEn: "Right away, Sir. There you go.",
        textHi: "अभी करता हूँ, महोदय। यह लीजिए।"
      },
      {
        speaker: "Mr. Saxena",
        avatar: "👨‍🦳",
        textEn: "Thank you very much. You are exceptionally courteous.",
        textHi: "बहुत-बहुत धन्यवाद। आप असाधारण रूप से शिष्ट और विनम्र हैं।"
      },
      {
        speaker: "Amit",
        avatar: "👨‍💼",
        textEn: "I am glad to help. I wish you a very comfortable and pleasant journey to New Delhi.",
        textHi: "मदद करके मुझे खुशी हुई। मैं नई दिल्ली तक आपकी यात्रा के अत्यंत आरामदायक और सुखद होने की कामना करता हूँ।"
      },
      {
        speaker: "Mr. Saxena",
        avatar: "👨‍🦳",
        textEn: "Thank you so much, my friend. Have a safe and delightful journey as well.",
        textHi: "बहुत-बहुत धन्यवाद, मेरे मित्र। आपकी यात्रा भी सुरक्षित और आनंदमय रहे।"
      },
      {
        speaker: "Amit",
        avatar: "👨‍💼",
        textEn: "Thank you, Sir. Take care.",
        textHi: "धन्यवाद, महोदय। अपना ध्यान रखें।"
      },
      {
        speaker: "Mr. Saxena",
        avatar: "👨‍🦳",
        textEn: "Take care, young man.",
        textHi: "अपना ध्यान रखें, नौजवान।"
      }
    ]
  },
  {
    id: "d02_sc05",
    title: "Customer Experience Center: Sincere Apologies & Empathy",
    titleHi: "ग्राहक सेवा केंद्र: सच्ची क्षमा-याचना और सहानुभूतिपूर्ण संवाद",
    context: "Customer Mrs. Bose visits the telecom service center regarding a service interruption and speaks with officer Tarun.",
    situation: "Handling service grievances with professional apologies ('I sincerely apologize', 'Pardon the delay') and courteous resolution.",
    characters: ["Tarun", "Mrs. Bose"],
    turns: [
      {
        speaker: "Tarun",
        avatar: "👨‍💼",
        textEn: "Good afternoon, Ma'am! Welcome to Horizon Telecom. How may I be of service to you?",
        textHi: "शुभ दोपहर, मैम! होराइजन टेलीकॉम में आपका स्वागत है। मैं आपकी किस प्रकार सेवा कर सकता हूँ?"
      },
      {
        speaker: "Mrs. Bose",
        avatar: "👩‍💼",
        textEn: "Good afternoon. I experienced an unexpected internet outage at my office this morning.",
        textHi: "शुभ दोपहर। आज सुबह मेरे कार्यालय में अचानक इंटरनेट सेवा बाधित हो गई।"
      },
      {
        speaker: "Tarun",
        avatar: "👨‍💼",
        textEn: "I sincerely apologize for the inconvenience this caused to your workday, Mrs. Bose. May I please verify your registered account number?",
        textHi: "श्रीमती बोस, आपके कार्यदिवस में हुई इस असुविधा के लिए मैं ईमानदारी से क्षमा चाहता हूँ। क्या मैं कृपया आपका पंजीकृत खाता नंबर सत्यापित कर सकता हूँ?"
      },
      {
        speaker: "Mrs. Bose",
        avatar: "👩‍💼",
        textEn: "Yes, it is AC-98421. Could you please check what caused the disruption?",
        textHi: "जी हाँ, यह AC-98421 है। क्या आप कृपया जाँच कर सकते हैं कि इस रुकावट का क्या कारण था?"
      },
      {
        speaker: "Tarun",
        avatar: "👨‍💼",
        textEn: "Allow me a moment to inspect the line diagnostics, please.",
        textHi: "कृपया मुझे लाइन डायग्नोस्टिक्स की जाँच करने के लिए एक क्षण का समय दें।"
      },
      {
        speaker: "Mrs. Bose",
        avatar: "👩‍💼",
        textEn: "Certainly. Take your time.",
        textHi: "निश्चय ही। आप अपना समय लें।"
      },
      {
        speaker: "Tarun",
        avatar: "👨‍💼",
        textEn: "Thank you for your patience. It appears there was emergency fiber maintenance in your sector, which was completed at eleven thirty.",
        textHi: "आपके धैर्य के लिए धन्यवाद। ऐसा प्रतीत होता है कि आपके क्षेत्र में आपातकालीन फाइबर मरम्मत का काम चल रहा था, जो साढ़े ग्यारह बजे पूरा हो गया।"
      },
      {
        speaker: "Mrs. Bose",
        avatar: "👩‍💼",
        textEn: "I see. Is the optical broadband service fully restored and stable now?",
        textHi: "अच्छा। क्या ऑप्टिकल ब्रॉडबैंड सेवा अब पूरी तरह से बहाल और स्थिर हो गई है?"
      },
      {
        speaker: "Tarun",
        avatar: "👨‍💼",
        textEn: "Yes, Ma'am. All signals are operating at peak bandwidth. I have also credited a service waiver to your billing account for the inconvenience.",
        textHi: "जी हाँ, मैम। सभी सिग्नल अधिकतम बैंडविड्थ पर काम कर रहे हैं। हुई असुविधा के लिए मैंने आपके बिलिंग खाते में एक सर्विस छूट भी जोड़ दी है।"
      },
      {
        speaker: "Mrs. Bose",
        avatar: "👩‍💼",
        textEn: "That is extraordinarily courteous and professional of you, Tarun. Thank you very much.",
        textHi: "यह आपकी ओर से असाधारण रूप से विनम्र और पेशेवर व्यवहार है, तरुण। बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Tarun",
        avatar: "👨‍💼",
        textEn: "You are most welcome, Mrs. Bose. It is our utmost duty to ensure you have a seamless experience.",
        textHi: "आपका बहुत-बहुत स्वागत है, श्रीमती बोस। आपको निर्बाध अनुभव प्रदान करना हमारा सर्वोच्च कर्तव्य है।"
      },
      {
        speaker: "Mrs. Bose",
        avatar: "👩‍💼",
        textEn: "Could you please tell me how I can receive advance SMS notifications for future maintenance?",
        textHi: "क्या आप कृपया मुझे बता सकते हैं कि मैं भविष्य के रखरखाव के लिए अग्रिम एसएमएस सूचनाएं कैसे प्राप्त कर सकती हूँ?"
      },
      {
        speaker: "Tarun",
        avatar: "👨‍💼",
        textEn: "I have just enabled priority SMS alerts directly on your profile.",
        textHi: "मैंने आपकी प्रोफाइल पर सीधे प्राथमिकता एसएमएस अलर्ट अभी सक्षम कर दिए हैं।"
      },
      {
        speaker: "Mrs. Bose",
        avatar: "👩‍💼",
        textEn: "I truly appreciate your prompt and respectful handling of this issue.",
        textHi: "इस मुद्दे को इतनी तत्परता और सम्मानपूर्वक हल करने की मैं वास्तव में सराहना करती हूँ।"
      },
      {
        speaker: "Tarun",
        avatar: "👨‍💼",
        textEn: "Thank you for your kind feedback! Is there anything else I may assist you with today?",
        textHi: "आपकी मधुर प्रतिक्रिया के लिए धन्यवाद! क्या आज मैं आपकी किसी अन्य काम में सहायता कर सकता हूँ?"
      },
      {
        speaker: "Mrs. Bose",
        avatar: "👩‍💼",
        textEn: "No, that resolves everything completely. Have a pleasant afternoon, Tarun.",
        textHi: "नहीं, इससे सब कुछ पूरी तरह हल हो गया। आपकी दोपहर सुखद रहे, तरुण।"
      },
      {
        speaker: "Tarun",
        avatar: "👨‍💼",
        textEn: "Thank you, Mrs. Bose. Goodbye and take care!",
        textHi: "धन्यवाद, श्रीमती बोस। अलविदा और अपना ध्यान रखें!"
      },
      {
        speaker: "Mrs. Bose",
        avatar: "👩‍💼",
        textEn: "Goodbye!",
        textHi: "अलविदा!"
      },
      {
        speaker: "Tarun",
        avatar: "👨‍💼",
        textEn: "Have a wonderful day!",
        textHi: "आपका दिन शुभ हो!"
      },
      {
        speaker: "Mrs. Bose",
        avatar: "👩‍💼",
        textEn: "You too!",
        textHi: "आपको भी!"
      }
    ]
  },
  {
    id: "d02_sc06",
    title: "Fine Dining Restaurant: Dietary Request & Table Etiquette",
    titleHi: "उत्कृष्ट भोजनालय: आहार संबंधी अनुरोध और मेज शिष्टाचार",
    context: "Diner Manish and Maître d' Mr. Laurent discuss table placement and dietary preferences at an upscale bistro.",
    situation: "Formulating refined requests ('Would it be possible to...', 'Could you kindly recommend...'), polite gratitude.",
    characters: ["Mr. Laurent", "Manish"],
    turns: [
      {
        speaker: "Mr. Laurent",
        avatar: "👨‍🍳",
        textEn: "Good evening, Sir. Welcome to Le Jardin. May I verify your reservation name?",
        textHi: "शुभ संध्या, महोदय। ले जार्डिन में आपका स्वागत है। क्या मैं आपकी बुकिंग के नाम की पुष्टि कर सकता हूँ?"
      },
      {
        speaker: "Manish",
        avatar: "👨‍💼",
        textEn: "Good evening. Yes, I have a reservation under Manish Khanna for two guests at eight o'clock.",
        textHi: "शुभ संध्या। जी हाँ, रात आठ बजे दो अतिथियों के लिए मनीष खन्ना के नाम पर मेरी बुकिंग है।"
      },
      {
        speaker: "Mr. Laurent",
        avatar: "👨‍🍳",
        textEn: "Yes, Mr. Khanna. We have reserved a cozy alcove for you. Please follow me.",
        textHi: "जी हाँ, मिस्टर खन्ना। हमने आपके लिए एक शांत और आरामदायक कोना आरक्षित किया है। कृपया मेरे पीछे आएं।"
      },
      {
        speaker: "Manish",
        avatar: "👨‍💼",
        textEn: "Thank you. Would it be possible to be seated at the garden-view terrace table instead?",
        textHi: "धन्यवाद। क्या बगीचे के दृश्य वाली छत की मेज पर बैठना संभव होगा?"
      },
      {
        speaker: "Mr. Laurent",
        avatar: "👨‍🍳",
        textEn: "Certainly! A delightful corner table on the terrace has just become available. It would be our absolute pleasure to seat you there.",
        textHi: "निश्चय ही! छत पर एक बहुत ही सुंदर कोने की मेज अभी उपलब्ध हुई है। आपको वहाँ बैठाना हमारे लिए परम हर्ष की बात होगी।"
      },
      {
        speaker: "Manish",
        avatar: "👨‍💼",
        textEn: "That is wonderful. Thank you very much for accommodating our preference so quickly.",
        textHi: "यह बहुत बढ़िया है। हमारी प्राथमिकता को इतनी जल्दी स्वीकार करने के लिए आपका बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Mr. Laurent",
        avatar: "👨‍🍳",
        textEn: "You are most welcome, Sir. Here are your menus. Could I offer you still or sparkling water to begin?",
        textHi: "आपका बहुत-बहुत स्वागत है, महोदय। ये रहे आपके मेनू। क्या मैं शुरुआत के लिए सादा या स्पार्कलिंग पानी प्रस्तुत करूँ?"
      },
      {
        speaker: "Manish",
        avatar: "👨‍💼",
        textEn: "Sparkling water with a slice of lemon, please. Also, would you mind ensuring that our dishes are prepared with minimal chili?",
        textHi: "नींबू के टुकड़े के साथ स्पार्कलिंग पानी, कृपया। साथ ही, क्या आप यह सुनिश्चित करने का कष्ट करेंगे कि हमारे व्यंजन बहुत कम मिर्च के साथ बनाए जाएं?"
      },
      {
        speaker: "Mr. Laurent",
        avatar: "👨‍🍳",
        textEn: "Of course! I will personally inform Chef Antoine about your dietary specifications.",
        textHi: "बिल्कुल! मैं व्यक्तिगत रूप से शेफ एंटोनी को आपकी आहार संबंधी प्राथमिकताओं के बारे में सूचित करूँगा।"
      },
      {
        speaker: "Manish",
        avatar: "👨‍💼",
        textEn: "Could you also kindly recommend an appetizer that pairs well with truffle risotto?",
        textHi: "क्या आप कृपया किसी ऐसे ऐपेटाइज़र की भी सिफारिश करेंगे जो ट्रफल रिसोट्टो के साथ अच्छा लगे?"
      },
      {
        speaker: "Mr. Laurent",
        avatar: "👨‍🍳",
        textEn: "Our wild mushroom bruschetta with aged parmesan is an exquisite pairing, Sir.",
        textHi: "एज्ड परमेसन के साथ हमारी जंगली मशरूम ब्रुशेट्टा इसके साथ एक उत्कृष्ट मेल है, महोदय।"
      },
      {
        speaker: "Manish",
        avatar: "👨‍💼",
        textEn: "That sounds delightful. We will take that, please.",
        textHi: "यह बहुत ही स्वादिष्ट लग रहा है। कृपया हमारे लिए वही ले आइए।"
      },
      {
        speaker: "Mr. Laurent",
        avatar: "👨‍🍳",
        textEn: "Excellent choice, Mr. Khanna. I will place your order with the kitchen immediately.",
        textHi: "उत्कृष्ट चयन, मिस्टर खन्ना। मैं तुरंत रसोई में आपका ऑर्डर भेजता हूँ।"
      },
      {
        speaker: "Manish",
        avatar: "👨‍💼",
        textEn: "I truly appreciate your meticulous attention to detail and gracious hospitality.",
        textHi: "हर छोटी बात पर आपके इस सूक्ष्म ध्यान और आत्मीय आतिथ्य की मैं वास्तव में सराहना करता हूँ।"
      },
      {
        speaker: "Mr. Laurent",
        avatar: "👨‍🍳",
        textEn: "It is our genuine joy to serve you, Mr. Khanna. Please enjoy your evening at Le Jardin.",
        textHi: "आपकी सेवा करना हमारे लिए वास्तविक आनंद का विषय है, मिस्टर खन्ना। कृपया ले जार्डिन में अपनी शाम का आनंद लें।"
      },
      {
        speaker: "Manish",
        avatar: "👨‍💼",
        textEn: "Thank you, Mr. Laurent.",
        textHi: "धन्यवाद, मिस्टर लॉरेंट।"
      },
      {
        speaker: "Mr. Laurent",
        avatar: "👨‍🍳",
        textEn: "Bon appétit, Sir!",
        textHi: "भोजन का आनंद लें, महोदय!"
      },
      {
        speaker: "Manish",
        avatar: "👨‍💼",
        textEn: "Thank you!",
        textHi: "धन्यवाद!"
      },
      {
        speaker: "Mr. Laurent",
        avatar: "👨‍🍳",
        textEn: "You are very welcome.",
        textHi: "आपका बहुत स्वागत है।"
      },
      {
        speaker: "Manish",
        avatar: "👨‍💼",
        textEn: "Have a good evening.",
        textHi: "आपकी शाम शुभ हो।"
      }
    ]
  },
  {
    id: "d02_sc07",
    title: "Design Studio: Collaborative Blueprint Review & Soft Feedback",
    titleHi: "डिजाइन स्टूडियो: सहयोगी ब्लूप्रिंट समीक्षा और विनम्र प्रतिक्रिया",
    context: "Junior Architect Sunita seeks feedback from Senior Partner Mr. Kulkarni regarding urban housing elevations.",
    situation: "Requesting professional advice courteously ('Could you spare a moment', 'Would you mind reviewing'), offering polite gratitude.",
    characters: ["Mr. Kulkarni", "Sunita"],
    turns: [
      {
        speaker: "Sunita",
        avatar: "👩‍💻",
        textEn: "Good afternoon, Mr. Kulkarni! Excuse me, could you spare five minutes to examine these revised elevation drawings?",
        textHi: "शुभ दोपहर, मिस्टर कुलकर्णी! क्षमा करें, क्या आप इन संशोधित एलिवेशन नक्शों की जांच के लिए पांच मिनट का समय निकाल सकते हैं?"
      },
      {
        speaker: "Mr. Kulkarni",
        avatar: "👨‍💼",
        textEn: "Good afternoon, Sunita! Yes, certainly. Please spread them out on the drafting table.",
        textHi: "शुभ दोपहर, सुनीता! जी हाँ, अवश्य। कृपया इन्हें ड्राफ्टिंग टेबल पर फैलाएं।"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💻",
        textEn: "Thank you, Sir. Would you mind checking the ventilation ducts in the northern wing?",
        textHi: "धन्यवाद, सर। क्या आप उत्तरी विंग में वेंटिलेशन नलिकाओं की जाँच करने का कष्ट करेंगे?"
      },
      {
        speaker: "Mr. Kulkarni",
        avatar: "👨‍💼",
        textEn: "The spatial orientation is well thought out. However, could you please widen the primary airflow corridor by thirty centimeters?",
        textHi: "स्थान का विन्यास बहुत सोच-समझकर बनाया गया है। हालाँकि, क्या आप कृपया मुख्य वायु प्रवाह गलियारे को तीस सेंटीमीटर चौड़ा कर सकती हैं?"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💻",
        textEn: "I will make that modification immediately. Thank you for pointing that out.",
        textHi: "मैं तुरंत यह संशोधन कर दूँगी। इस ओर ध्यान दिलाने के लिए धन्यवाद।"
      },
      {
        speaker: "Mr. Kulkarni",
        avatar: "👨‍💼",
        textEn: "You are very welcome, Sunita. Your structural precision on this project has been exemplary.",
        textHi: "आपका बहुत स्वागत है, सुनीता। इस परियोजना पर आपकी संरचनात्मक सटीकता अनुकरणीय रही है।"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💻",
        textEn: "Thank you so much for your kind mentorship and encouragement.",
        textHi: "आपके स्नेहपूर्ण मार्गदर्शन और प्रोत्साहन के लिए बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Mr. Kulkarni",
        avatar: "👨‍💼",
        textEn: "Would you mind if we also reviewed the solar panel angle calculations for the rooftop?",
        textHi: "यदि हम छत के लिए सौर पैनल कोण गणना की भी समीक्षा करें तो क्या आपको कोई आपत्ति होगी?"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💻",
        textEn: "Not at all, Sir! I calculated an optimal tilt of twenty-three degrees facing south.",
        textHi: "बिल्कुल नहीं, सर! मैंने दक्षिण की ओर तेईस डिग्री का इष्टतम झुकाव आंका है।"
      },
      {
        speaker: "Mr. Kulkarni",
        avatar: "👨‍💼",
        textEn: "That is spot on. Could you please incorporate these specifications into the final client deck?",
        textHi: "यह बिल्कुल सटीक है। क्या आप कृपया अंतिम क्लाइंट प्रस्तुति में इन विशिष्टताओं को शामिल करने का कष्ट करेंगी?"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💻",
        textEn: "I will do so before five o'clock. May I send you the updated PDF for final sign-off?",
        textHi: "मैं पांच बजे से पहले ऐसा कर दूंगी। क्या मैं अंतिम अनुमोदन के लिए आपको अपडेटेड पीडीएफ भेज सकती हूँ?"
      },
      {
        speaker: "Mr. Kulkarni",
        avatar: "👨‍💼",
        textEn: "Yes, please email it directly to my inbox.",
        textHi: "जी हाँ, कृपया इसे सीधे मेरे इनबॉक्स में ईमेल कर दें।"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💻",
        textEn: "Thank you very much for your time and guidance, Mr. Kulkarni.",
        textHi: "मिस्टर कुलकर्णी, आपके समय और मार्गदर्शन के लिए बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Mr. Kulkarni",
        avatar: "👨‍💼",
        textEn: "It is my pleasure. Keep up the remarkable work, Sunita!",
        textHi: "यह मेरे लिए खुशी की बात है। इस शानदार काम को जारी रखें, सुनीता!"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💻",
        textEn: "Thank you, Sir. Have a pleasant afternoon.",
        textHi: "धन्यवाद, सर। आपकी दोपहर सुखद रहे।"
      },
      {
        speaker: "Mr. Kulkarni",
        avatar: "👨‍💼",
        textEn: "You too, Sunita. Goodbye!",
        textHi: "आपको भी, सुनीता। अलविदा!"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💻",
        textEn: "Goodbye, Mr. Kulkarni.",
        textHi: "अलविदा, मिस्टर कुलकर्णी।"
      },
      {
        speaker: "Mr. Kulkarni",
        avatar: "👨‍💼",
        textEn: "Take care.",
        textHi: "अपना ध्यान रखें।"
      },
      {
        speaker: "Sunita",
        avatar: "👩‍💻",
        textEn: "Thank you!",
        textHi: "धन्यवाद!"
      },
      {
        speaker: "Mr. Kulkarni",
        avatar: "👨‍💼",
        textEn: "See you tomorrow.",
        textHi: "कल मिलते हैं।"
      }
    ]
  },
  {
    id: "d02_sc08",
    title: "International Airport: Gate Inquiries & Ground Courtesy",
    titleHi: "अंतरराष्ट्रीय हवाई अड्डा: गेट पूछताछ और जमीनी शिष्टाचार",
    context: "Passenger Devendra seeks assistance from Airline Ground Officer Ms. Fernandez regarding gate changes and baggage tags.",
    situation: "Deploying polite travel inquiries ('Pardon me', 'Could you please direct me', 'Thank you for your assistance').",
    characters: ["Ms. Fernandez", "Devendra"],
    turns: [
      {
        speaker: "Devendra",
        avatar: "👨‍💼",
        textEn: "Pardon me, Ma'am! Could you please help me locate the departure gate for Flight 602 to Frankfurt?",
        textHi: "क्षमा करें, मैम! क्या आप कृपया फ्रैंकफर्ट जाने वाली उड़ान 602 के प्रस्थान गेट का पता लगाने में मेरी मदद कर सकती हैं?"
      },
      {
        speaker: "Ms. Fernandez",
        avatar: "👩‍✈️",
        textEn: "Good afternoon, Sir! Certainly, may I please glance at your boarding pass?",
        textHi: "शुभ दोपहर, महोदय! निश्चय ही, क्या मैं कृपया आपका बोर्डिंग पास देख सकती हूँ?"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍💼",
        textEn: "Here it is. Thank you.",
        textHi: "यह लीजिए। धन्यवाद।"
      },
      {
        speaker: "Ms. Fernandez",
        avatar: "👩‍✈️",
        textEn: "Thank you. Flight 602 has moved to Gate 18B due to an aircraft change. Please proceed through the central duty-free corridor.",
        textHi: "धन्यवाद। विमान परिवर्तन के कारण उड़ान 602 को गेट 18B पर स्थानांतरित कर दिया गया है। कृपया केंद्रीय ड्यूटी-फ्री गलियारे से आगे बढ़ें।"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍💼",
        textEn: "Excuse me, did you say Gate 18B or 18D?",
        textHi: "माफ कीजिएगा, क्या आपने गेट 18B कहा या 18D?"
      },
      {
        speaker: "Ms. Fernandez",
        avatar: "👩‍✈️",
        textEn: "Gate 18B, Sir, right next to the business class lounge.",
        textHi: "गेट 18B, महोदय, बिजनेस क्लास लाउंज के ठीक बगल में।"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍💼",
        textEn: "Thank you very much for clarifying that. How much time will it take to walk there?",
        textHi: "यह स्पष्ट करने के लिए बहुत-बहुत धन्यवाद। वहाँ तक चलकर जाने में कितना समय लगेगा?"
      },
      {
        speaker: "Ms. Fernandez",
        avatar: "👩‍✈️",
        textEn: "It is about a seven-minute walk. Boarding commences in twenty minutes, so you have plenty of time.",
        textHi: "यह लगभग सात मिनट की पैदल दूरी है। बोर्डिंग बीस मिनट में शुरू होगी, इसलिए आपके पास पर्याप्त समय है।"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍💼",
        textEn: "Would you mind checking if my cabin trolley requires an additional security tag?",
        textHi: "क्या आप यह जांचने का कष्ट करेंगी कि क्या मेरी केबिन ट्रॉली पर अतिरिक्त सुरक्षा टैग की आवश्यकता है?"
      },
      {
        speaker: "Ms. Fernandez",
        avatar: "👩‍✈️",
        textEn: "Let me affix our verified cabin luggage tag for you right now, Sir.",
        textHi: "मैं अभी आपके लिए हमारा सत्यापित केबिन लगेज टैग लगा देती हूँ, महोदय।"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍💼",
        textEn: "That is exceptionally kind of you. Thank you for your proactive help.",
        textHi: "यह आपकी बहुत बड़ी कृपा है। आपकी इस सक्रिय सहायता के लिए धन्यवाद।"
      },
      {
        speaker: "Ms. Fernandez",
        avatar: "👩‍✈️",
        textEn: "You are most welcome, Sir. Is there anything else I can clarify regarding your transit in Frankfurt?",
        textHi: "आपका बहुत-बहुत स्वागत है, महोदय। क्या फ्रैंकफर्ट में आपके ट्रांजिट के संबंध में मुझे कुछ और स्पष्ट करने की आवश्यकता है?"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍💼",
        textEn: "Will our checked luggage be transferred automatically to our connecting flight?",
        textHi: "क्या हमारा चेक-इन बैगेज हमारी कनेक्टिंग फ्लाइट में अपने आप ट्रांसफर हो जाएगा?"
      },
      {
        speaker: "Ms. Fernandez",
        avatar: "👩‍✈️",
        textEn: "Yes, your bags are checked through all the way to your final destination in Berlin.",
        textHi: "जी हाँ, आपका सामान बर्लिन में आपके अंतिम गंतव्य तक सीधे चेक-इन कर दिया गया है।"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍💼",
        textEn: "That is very reassuring. I am truly grateful for your prompt and courteous guidance.",
        textHi: "यह बहुत आश्वस्त करने वाला है। आपके त्वरित और विनम्र मार्गदर्शन के लिए मैं वास्तव में आभारी हूँ।"
      },
      {
        speaker: "Ms. Fernandez",
        avatar: "👩‍✈️",
        textEn: "It is our genuine pleasure to assist you, Sir! We wish you a comfortable and pleasant flight.",
        textHi: "आपकी सहायता करना हमारे लिए वास्तविक आनंद का विषय है, महोदय! हम आपकी आरामदायक और सुखद उड़ान की कामना करते हैं।"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍💼",
        textEn: "Thank you so much. Have a wonderful day, Ms. Fernandez.",
        textHi: "बहुत-बहुत धन्यवाद। आपका दिन शुभ हो, सुश्री फर्नांडीज।"
      },
      {
        speaker: "Ms. Fernandez",
        avatar: "👩‍✈️",
        textEn: "Thank you, Sir. Goodbye!",
        textHi: "धन्यवाद, महोदय। अलविदा!"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍💼",
        textEn: "Goodbye!",
        textHi: "अलविदा!"
      },
      {
        speaker: "Ms. Fernandez",
        avatar: "👩‍✈️",
        textEn: "Safe travels!",
        textHi: "आपकी यात्रा सुखद रहे!"
      }
    ]
  },
  {
    id: "d02_sc09",
    title: "Specialist Clinic: Rescheduling with Polite Discretion",
    titleHi: "विशेषज्ञ क्लिनिक: विनम्रतापूर्वक समय पुनर्निर्धारण",
    context: "Patient Mrs. Nair calls clinic receptionist Ritu to politely reschedule her dental consultation.",
    situation: "Deploying courteous apologies for schedule changes, polite alternatives, and mutual gratitude.",
    characters: ["Ritu", "Mrs. Nair"],
    turns: [
      {
        speaker: "Ritu",
        avatar: "👩‍💼",
        textEn: "Good morning! City Dental Care, Ritu speaking. How may I help you today?",
        textHi: "शुभ प्रभात! सिटी डेंटल केयर, रितु बोल रही हूँ। आज मैं आपकी किस प्रकार मदद कर सकती हूँ?"
      },
      {
        speaker: "Mrs. Nair",
        avatar: "👩‍💼",
        textEn: "Good morning, Ritu! My name is Radhika Nair. I have an appointment with Dr. Kapoor this afternoon at three o'clock.",
        textHi: "शुभ प्रभात, रितु! मेरा नाम राधिका नायर है। आज दोपहर तीन बजे डॉ. कपूर के साथ मेरा अपॉइंटमेंट है।"
      },
      {
        speaker: "Ritu",
        avatar: "👩‍💼",
        textEn: "Yes, Mrs. Nair, I see your booking on our schedule.",
        textHi: "जी हाँ, श्रीमती नायर, मैं अपनी समय-सारणी पर आपकी बुकिंग देख सकती हूँ।"
      },
      {
        speaker: "Mrs. Nair",
        avatar: "👩‍💼",
        textEn: "I sincerely apologize, but an unexpected family emergency has arisen. Would it be possible to reschedule for Thursday morning?",
        textHi: "मैं ईमानदारी से क्षमा चाहती हूँ, लेकिन अचानक एक अप्रत्याशित पारिवारिक काम आ गया है। क्या इसे गुरुवार सुबह के लिए पुनर्निर्धारित करना संभव होगा?"
      },
      {
        speaker: "Ritu",
        avatar: "👩‍💼",
        textEn: "Please do not worry, Mrs. Nair. We completely understand. Let me check Dr. Kapoor's availability for Thursday.",
        textHi: "कृपया बिल्कुल चिंता न करें, श्रीमती नायर। हम पूरी तरह समझते हैं। मुझे गुरुवार के लिए डॉ. कपूर की उपलब्धता की जांच करने दें।"
      },
      {
        speaker: "Mrs. Nair",
        avatar: "👩‍💼",
        textEn: "Thank you for your gracious understanding.",
        textHi: "आपकी इस सौम्य समझदारी के लिए धन्यवाद।"
      },
      {
        speaker: "Ritu",
        avatar: "👩‍💼",
        textEn: "Dr. Kapoor has an open slot at ten thirty on Thursday morning. Would that time be convenient for you?",
        textHi: "डॉ. कपूर के पास गुरुवार सुबह साढ़े दस बजे का एक स्लॉट खाली है। क्या वह समय आपके लिए सुविधाजनक रहेगा?"
      },
      {
        speaker: "Mrs. Nair",
        avatar: "👩‍💼",
        textEn: "Ten thirty on Thursday would be absolutely perfect. Thank you so much for accommodating me.",
        textHi: "गुरुवार सुबह साढ़े दस बजे बिल्कुल उत्तम रहेगा। मुझे यह समय देने के लिए बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Ritu",
        avatar: "👩‍💼",
        textEn: "You are most welcome, Mrs. Nair. I have updated your appointment and sent a confirmation SMS to your mobile phone.",
        textHi: "आपका बहुत-बहुत स्वागत है, श्रीमती नायर। मैंने आपके अपॉइंटमेंट को अपडेट कर दिया है और आपके मोबाइल फोन पर एक पुष्टिकरण एसएमएस भेज दिया है।"
      },
      {
        speaker: "Mrs. Nair",
        avatar: "👩‍💼",
        textEn: "Could you please remind Dr. Kapoor that I have the dental X-rays ready on my email?",
        textHi: "क्या आप कृपया डॉ. कपूर को याद दिला देंगी कि मेरे पास मेरे ईमेल पर डेंटल एक्स-रे तैयार हैं?"
      },
      {
        speaker: "Ritu",
        avatar: "👩‍💼",
        textEn: "I will add that specific note to your medical file right away.",
        textHi: "मैं तुरंत आपकी मेडिकल फाइल में यह विशेष नोट जोड़ देती हूँ।"
      },
      {
        speaker: "Mrs. Nair",
        avatar: "👩‍💼",
        textEn: "I appreciate your kindness and efficient help, Ritu. Have a wonderful day ahead!",
        textHi: "रितु, मैं आपकी दयालुता और कुशल सहायता की सराहना करती हूँ। आपका आगे का दिन बहुत शुभ हो!"
      },
      {
        speaker: "Ritu",
        avatar: "👩‍💼",
        textEn: "Thank you, Mrs. Nair. We hope everything goes smoothly with your family today.",
        textHi: "धन्यवाद, श्रीमती नायर। हम आशा करते हैं कि आज आपके परिवार में सब कुछ ठीक रहे।"
      },
      {
        speaker: "Mrs. Nair",
        avatar: "👩‍💼",
        textEn: "Thank you so much for your warmth.",
        textHi: "आपकी इस आत्मीयता के लिए बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Ritu",
        avatar: "👩‍💼",
        textEn: "It is our pleasure. See you on Thursday!",
        textHi: "यह हमारा कर्तव्य है। गुरुवार को मिलते हैं!"
      },
      {
        speaker: "Mrs. Nair",
        avatar: "👩‍💼",
        textEn: "See you on Thursday. Goodbye!",
        textHi: "गुरुवार को मिलते हैं। अलविदा!"
      },
      {
        speaker: "Ritu",
        avatar: "👩‍💼",
        textEn: "Goodbye, Mrs. Nair!",
        textHi: "अलविदा, श्रीमती नायर!"
      },
      {
        speaker: "Mrs. Nair",
        avatar: "👩‍💼",
        textEn: "Take care.",
        textHi: "अपना ख्याल रखें।"
      },
      {
        speaker: "Ritu",
        avatar: "👩‍💼",
        textEn: "You too!",
        textHi: "आप भी!"
      },
      {
        speaker: "Mrs. Nair",
        avatar: "👩‍💼",
        textEn: "Thank you, bye.",
        textHi: "धन्यवाद, बाय।"
      }
    ]
  },
  {
    id: "d02_sc10",
    title: "Academic Symposium: Polite Q&A Intervention & Intellectual Courtesy",
    titleHi: "अकादमिक संगोष्ठी: विनम्र प्रश्नोत्तर और बौद्धिक शिष्टाचार",
    context: "During a conference Q&A, Research Fellow Karthik politely asks Keynote Speaker Professor David a clarifying question.",
    situation: "Mastering formal academic politeness ('Pardon my interruption', 'Could you kindly elaborate', 'Thank you for your insightful response').",
    characters: ["Professor David", "Karthik"],
    turns: [
      {
        speaker: "Karthik",
        avatar: "👨‍🎓",
        textEn: "Pardon my interruption, Professor David. May I please ask a brief question regarding your methodology?",
        textHi: "मेरी रुकावट के लिए क्षमा करें, प्रोफेसर डेविड। क्या मैं कृपया आपकी कार्यप्रणाली के संबंध में एक संक्षिप्त प्रश्न पूछ सकता हूँ?"
      },
      {
        speaker: "Professor David",
        avatar: "👨‍🏫",
        textEn: "Certainly! Please go right ahead. I welcome all inquiries from our research fellows.",
        textHi: "अवश्य! कृपया निसंकोच पूछें। मैं अपने सभी शोधार्थियों के प्रश्नों का स्वागत करता हूँ।"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍🎓",
        textEn: "Could you kindly elaborate on how your team normalized the acoustic data across diverse dialects?",
        textHi: "क्या आप कृपया विस्तार से बता सकते हैं कि आपकी टीम ने विभिन्न बोलियों में ध्वनिक डेटा को कैसे सामान्यीकृत (normalize) किया?"
      },
      {
        speaker: "Professor David",
        avatar: "👨‍🏫",
        textEn: "That is a thoughtful and pertinent question. We utilized an algorithmic formant filter to balance pitch variation.",
        textHi: "यह एक बहुत ही विचारशील और प्रासंगिक प्रश्न है। हमने पिच की भिन्नता को संतुलित करने के लिए एक एल्गोरिथम फॉर्मेंट फिल्टर का उपयोग किया।"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍🎓",
        textEn: "That clarifies the process completely. Thank you very much for your insightful explanation, Professor.",
        textHi: "यह प्रक्रिया को पूरी तरह स्पष्ट करता है। प्रोफेसर, आपके इस ज्ञानवर्धक स्पष्टीकरण के लिए बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Professor David",
        avatar: "👨‍🏫",
        textEn: "You are most welcome. Would you be interested in reviewing our published open-source dataset?",
        textHi: "आपका बहुत-बहुत स्वागत है। क्या आप हमारे प्रकाशित ओपन-सोर्स डेटासेट की समीक्षा करने में रुचि रखेंगे?"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍🎓",
        textEn: "I would be deeply honored and grateful to do so, Sir.",
        textHi: "सर, ऐसा करना मेरे लिए अत्यंत सम्मान और कृतज्ञता की बात होगी।"
      },
      {
        speaker: "Professor David",
        avatar: "👨‍🏫",
        textEn: "Would you mind sharing your primary area of research in computational phonetics?",
        textHi: "क्या आप कम्प्यूटेशनल ध्वनिविज्ञान में अपने शोध के मुख्य क्षेत्र को साझा करने का कष्ट करेंगे?"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍🎓",
        textEn: "My current doctoral thesis investigates retroflex consonants and vowel nasalization across Indo-Aryan languages.",
        textHi: "मेरा वर्तमान डॉक्टरेट शोध प्रबंध इंडो-आर्यन भाषाओं में मूर्धन्य व्यंजनों और स्वर अनुनासिकीकरण की जांच करता है।"
      },
      {
        speaker: "Professor David",
        avatar: "👨‍🏫",
        textEn: "That is a fascinating domain! Could you please leave your academic email with my associate after the session?",
        textHi: "यह एक अत्यंत आकर्षक क्षेत्र है! क्या आप कृपया सत्र के बाद मेरे सहयोगी के पास अपना अकादमिक ईमेल छोड़ने का कष्ट करेंगे?"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍🎓",
        textEn: "I will certainly do that without fail, Professor David.",
        textHi: "मैं बिना चूके निश्चित रूप से ऐसा करूँगा, प्रोफेसर डेविड।"
      },
      {
        speaker: "Professor David",
        avatar: "👨‍🏫",
        textEn: "We would be delighted to exchange research papers and potentially collaborate on speech synthesis models.",
        textHi: "शोध पत्रों का आदान-प्रदान करने और संभवतः स्पीच सिंथेसिस मॉडल पर सहयोग करने में हमें बहुत खुशी होगी।"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍🎓",
        textEn: "Thank you once again for your immense generosity, encouragement, and time.",
        textHi: "आपकी असीम उदारता, प्रोत्साहन और समय के लिए एक बार फिर बहुत-बहुत धन्यवाद।"
      },
      {
        speaker: "Professor David",
        avatar: "👨‍🏫",
        textEn: "It is my genuine pleasure, Karthik. Keep pursuing your academic curiosities with diligence!",
        textHi: "यह मेरे लिए वास्तविक खुशी की बात है, कार्तिक। पूरी लगन के साथ अपनी अकादमिक जिज्ञासाओं को आगे बढ़ाते रहें!"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍🎓",
        textEn: "I certainly will, Sir. Have a pleasant afternoon!",
        textHi: "मैं अवश्य करूँगा, सर। आपकी दोपहर सुखद रहे!"
      },
      {
        speaker: "Professor David",
        avatar: "👨‍🏫",
        textEn: "Thank you. Have a great day ahead!",
        textHi: "धन्यवाद। आपका आगे का दिन बहुत अच्छा रहे!"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍🎓",
        textEn: "Goodbye, Professor.",
        textHi: "अलविदा, प्रोफेसर।"
      },
      {
        speaker: "Professor David",
        avatar: "👨‍🏫",
        textEn: "Goodbye, Karthik.",
        textHi: "अलविदा, कार्तिक।"
      },
      {
        speaker: "Karthik",
        avatar: "👨‍🎓",
        textEn: "Take care!",
        textHi: "अपना ध्यान रखें!"
      },
      {
        speaker: "Professor David",
        avatar: "👨‍🏫",
        textEn: "You too!",
        textHi: "आप भी!"
      }
    ]
  }
];
