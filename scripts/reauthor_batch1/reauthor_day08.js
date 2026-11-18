import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const day08Dialogues = [
  {
    id: "d08_sc01",
    title: "Flagship Electronics Store: Product Demonstrations & Inventory",
    titleHi: "फ्लैगशिप इलेक्ट्रॉनिक्स स्टोर: उत्पाद प्रदर्शन और स्टॉक की स्थिति",
    context: "Senior Tech Specialist Kunal demonstrates premium laptops and accessories to customer Priya.",
    situation: "Mastering demonstratives ('this / that / these / those') and existential structures ('there is / there are / is there? / are there?').",
    characters: ["Kunal", "Priya"],
    turns: [
      {
        speaker: "Kunal",
        avatar: "👨‍💼",
        textEn: "Welcome to the TechZone flagship showroom, Priya! This is our flagship ultra-lightweight laptop on this counter.",
        textHi: "टेकज़ोन के फ्लैगशिप शोरूम में आपका स्वागत है, प्रिया! इस काउंटर पर यह हमारा प्रमुख अल्ट्रा-लाइटवेट लैपटॉप है।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "This laptop is remarkably slim! Is there a dedicated graphics processor inside this sleek chassis?",
        textHi: "यह लैपटॉप आश्चर्यजनक रूप से पतला है! क्या इस पतले चेसिस के अंदर एक समर्पित ग्राफिक्स प्रोसेसर है?"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💼",
        textEn: "Yes, there is an eight-gigabyte dedicated GPU, and there are sixteen processor cores in this machine.",
        textHi: "जी हाँ, इसमें आठ-गीगाबाइट का समर्पित जीपीयू है, और इस मशीन में सोलह प्रोसेसर कोर हैं।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "What about those curved OLED monitors on that far wall?",
        textHi: "उस दूर की दीवार पर लगे उन घुमावदार ओएलईडी मॉनिटरों के बारे में क्या?"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💼",
        textEn: "Those monitors are forty-nine-inch ultra-wide gaming displays with a 240-hertz refresh rate.",
        textHi: "वे मॉनिटर 240 हर्ट्ज रिफ्रेश रेट वाले उनचास इंच के अल्ट्रा-वाइड गेमिंग डिस्प्ले हैं।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "Are there wireless mechanical keyboards that pair with this setup?",
        textHi: "क्या ऐसे वायरलेस मैकेनिकल कीबोर्ड हैं जो इस सेटअप के साथ जुड़ते हैं?"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💼",
        textEn: "Yes, these keyboards on this lower shelf are hot-swappable mechanical models with custom switches.",
        textHi: "जी हाँ, इस निचली शेल्फ पर ये कीबोर्ड कस्टम स्विच वाले हॉट-स्वैपेबल मैकेनिकल मॉडल हैं।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "This tactile feedback is fantastic! Is there an ergonomic wrist rest included in this box?",
        textHi: "यह स्पर्श प्रतिक्रिया शानदार है! क्या इस डिब्बे में एक एर्गोनॉमिक कलाई का सहारा शामिल है?"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💼",
        textEn: "Yes, there is a memory foam wrist rest, and there are extra keycaps inside each package.",
        textHi: "जी हाँ, इसमें मेमोरी फोम रिस्ट रेस्ट है, और प्रत्येक पैकेज के अंदर अतिरिक्त की-कैप्स हैं।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "Are those noise-canceling headphones over there compatible with Bluetooth 5.4?",
        textHi: "क्या वहाँ रखे वे नॉइज़-कैंसलिंग हेडफ़ोन ब्लूटूथ 5.4 के अनुकूल हैं?"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💼",
        textEn: "Yes, that top model on that stand has lossless audio streaming and spatial audio head-tracking.",
        textHi: "जी हाँ, उस स्टैंड पर रखे उस शीर्ष मॉडल में दोषरहित ऑडियो स्ट्रीमिंग और स्थानिक हेड-ट्रैकिंग है।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "Is there any seasonal bundle discount if I purchase this laptop and these headphones together?",
        textHi: "यदि मैं यह लैपटॉप और ये हेडफ़ोन एक साथ खरीदूँ तो क्या कोई मौसमी बंडल छूट है?"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💼",
        textEn: "Yes, there is a fifteen percent instant cashback, and there are zero-interest EMI schemes for twelve months.",
        textHi: "जी हाँ, पंद्रह प्रतिशत तत्काल कैशबैक है, और बारह महीनों के लिए शून्य-ब्याज ईएमआई योजनाएं हैं।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "That offer is very attractive! Are there multiple color variants available in this specific laptop model?",
        textHi: "वह प्रस्ताव बहुत आकर्षक है! क्या इस विशेष लैपटॉप मॉडल में कई रंग विकल्प उपलब्ध हैं?"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💼",
        textEn: "There is Space Gray, there is Midnight Blue, and there are two silver finishes in stock right now.",
        textHi: "स्पेस ग्रे है, मिडनाइट ब्लू है, और इस समय स्टॉक में दो सिल्वर फिनिश उपलब्ध हैं।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "This Midnight Blue finish is gorgeous. I will take this laptop and that wireless mouse on the stand.",
        textHi: "यह मिडनाइट ब्लू फिनिश बहुत सुंदर है। मैं यह लैपटॉप और स्टैंड पर रखा वह वायरलेस माउस लूँगी।"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💼",
        textEn: "There is an extended three-year international warranty card right in this billing folder.",
        textHi: "इस बिलिंग फोल्डर में ही तीन साल का विस्तारित अंतरराष्ट्रीय वारंटी कार्ड उपलब्ध है।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "Thank you for explaining all these features so clearly, Kunal!",
        textHi: "कुणाल, इन सभी सुविधाओं को इतनी स्पष्टता से समझाने के लिए धन्यवाद!"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💼",
        textEn: "It is my pleasure. The billing counter is right over there by the exit.",
        textHi: "यह मेरा सौभाग्य है। बिलिंग काउंटर निकास के ठीक पास वहाँ है।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍💼",
        textEn: "Thank you!",
        textHi: "धन्यवाद!"
      }
    ]
  },
  {
    id: "d08_sc02",
    title: "National Museum Antiquities Vault: Relics & Manuscripts",
    titleHi: "राष्ट्रीय संग्रहालय पुरावशेष वॉल्ट: प्राचीन अवशेष और पांडुलिपियां",
    context: "Senior Curator Dr. Sen guides historian Ms. Alva through climate-controlled archaeological vaults.",
    situation: "Using demonstratives ('this / that / these / those') and existentials ('there is / there are / there was / there were') for historical relics.",
    characters: ["Dr. Sen", "Ms. Alva"],
    turns: [
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Welcome to the high-security antiquities vault, Ms. Alva. This glass case contains our rarest ninth-century bronze idols.",
        textHi: "उच्च सुरक्षा वाले पुरावशेष वॉल्ट में आपका स्वागत है, सुश्री अल्वा। इस कांच के बक्से में हमारी नौवीं सदी की सबसे दुर्लभ कांस्य मूर्तियां हैं।"
      },
      {
        speaker: "Ms. Alva",
        avatar: "👩‍🏫",
        textEn: "This Chola bronze Nataraja is breathtaking! Is there an inscription on the base of this sculpture?",
        textHi: "यह चोल कांस्य नटराज मनमोहक है! क्या इस मूर्ति के आधार पर कोई शिलालेख है?"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Yes, there is a Grantha script dedication, and there are donor names etched into the bronze pedestal.",
        textHi: "जी हाँ, इस पर ग्रंथ लिपि में एक समर्पण है, और कांस्य के चबूतरे पर दानदाताओं के नाम खुदे हुए हैं।"
      },
      {
        speaker: "Ms. Alva",
        avatar: "👩‍🏫",
        textEn: "What about those illuminated palm-leaf manuscripts on that upper shelf?",
        textHi: "उस ऊपरी शेल्फ पर रखी उन सचित्र ताड़पत्र पांडुलिपियों के बारे में क्या?"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Those manuscripts are eleventh-century Buddhist philosophical treatises written in Sanskrit.",
        textHi: "वे पांडुलिपियाँ संस्कृत में लिखे गए ग्यारहवीं सदी के बौद्ध दार्शनिक ग्रंथ हैं।"
      },
      {
        speaker: "Ms. Alva",
        avatar: "👩‍🏫",
        textEn: "Are there gold-leaf miniature illustrations between these delicate palm leaves?",
        textHi: "क्या इन नाजुक ताड़पत्रों के बीच सोने की पत्ती वाले लघु चित्र हैं?"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Yes, there are twenty-four vibrant miniature paintings, and there is natural mineral pigment preserved on each folio.",
        textHi: "जी हाँ, इसमें चौबीस जीवंत लघु चित्र हैं, और प्रत्येक पन्ने पर प्राकृतिक खनिज रंग सुरक्षित हैं।"
      },
      {
        speaker: "Ms. Alva",
        avatar: "👩‍🏫",
        textEn: "Look at that ancient Kushan gold coin in that rotary display case!",
        textHi: "उस घूमने वाले डिस्प्ले केस में उस प्राचीन कुषाण स्वर्ण सिक्के को देखिए!"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "That coin is from the reign of Emperor Kanishka; there is a Greek script inscription on the obverse.",
        textHi: "वह सिक्का सम्राट कनिष्क के शासनकाल का है; इसके मुख्य भाग पर ग्रीक लिपि का एक शिलालेख है।"
      },
      {
        speaker: "Ms. Alva",
        avatar: "👩‍🏫",
        textEn: "Are there other numismatic treasures from the Silk Road trade in this cabinet?",
        textHi: "क्या इस कैबिनेट में सिल्क रूट व्यापार के अन्य मुद्राशास्त्रीय खजाने हैं?"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Yes, there are Roman silver denarii, there are Sasanian coins, and there is a hoard of Gupta gold dinars.",
        textHi: "जी हाँ, रोमन चांदी के देनारी हैं, सासानी सिक्के हैं, और गुप्तकालीन सोने के दीनारों का एक खजाना है।"
      },
      {
        speaker: "Ms. Alva",
        avatar: "👩‍🏫",
        textEn: "These terracotta figurines from Ahichchhatra are so expressive!",
        textHi: "अहिच्छत्र की ये टेराकोटा मूर्तियां कितनी भावपूर्ण हैं!"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "Those artifacts date back to the fifth century CE; there was a flourishing urban pottery guild at that site.",
        textHi: "वे अवशेष पांचवीं शताब्दी ईस्वी के हैं; उस स्थल पर एक समृद्ध शहरी मिट्टी के बर्तनों का संघ था।"
      },
      {
        speaker: "Ms. Alva",
        avatar: "👩‍🏫",
        textEn: "Is there any textile relic preserved from that ancient era?",
        textHi: "क्या उस प्राचीन काल का कोई कपड़ा अवशेष सुरक्षित है?"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "There is only one carbonized fragment of wild silk cloth preserved in that argon gas container.",
        textHi: "उस आर्गन गैस कंटेनर में जंगली रेशम के कपड़े का केवल एक ही कार्बोनाइज्ड टुकड़ा सुरक्षित है।"
      },
      {
        speaker: "Ms. Alva",
        avatar: "👩‍🏫",
        textEn: "The preservation standards in this vault are world-class.",
        textHi: "इस वॉल्ट में संरक्षण के मानक विश्व स्तरीय हैं।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "There are six automated climate monitoring sensors in every room to maintain fifty percent relative humidity.",
        textHi: "पचास प्रतिशत सापेक्ष आर्द्रता बनाए रखने के लिए हर कमरे में छह स्वचालित जलवायु निगरानी सेंसर हैं।"
      },
      {
        speaker: "Ms. Alva",
        avatar: "👩‍🏫",
        textEn: "Thank you for sharing these historical treasures with me, Dr. Sen.",
        textHi: "डॉ. सेन, मेरे साथ इन ऐतिहासिक खजानों को साझा करने के लिए धन्यवाद।"
      },
      {
        speaker: "Dr. Sen",
        avatar: "👨‍🏫",
        textEn: "It is an honor to preserve these irreplaceable heritage relics.",
        textHi: "इन अपूरणीय विरासत अवशेषों को संरक्षित करना हमारे लिए सम्मान की बात है।"
      },
      {
        speaker: "Ms. Alva",
        avatar: "👩‍🏫",
        textEn: "Truly unforgettable!",
        textHi: "सचमुच अविस्मरणीय!"
      }
    ]
  },
  {
    id: "d08_sc03",
    title: "Eco-City Architectural Model: Spatial Design & Zoning",
    titleHi: "इको-सिटी आर्किटेक्चरल मॉडल: स्थानिक डिजाइन और ज़ोनिंग",
    context: "Urban Architect Vikram demonstrates a master 3D scale model of a planned coastal city to investor Tara.",
    situation: "Using 'this / that / these / those' and 'there is / there are' to explain scale model features and zones.",
    characters: ["Vikram", "Tara"],
    turns: [
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Tara, look at this central 3D scale model on this exhibition table. This is our blueprint for Coastal Green City.",
        textHi: "तारा, इस प्रदर्शनी मेज पर इस केंद्रीय 3D स्केल मॉडल को देखें। यह हमारे कोस्टल ग्रीन सिटी का ब्लूप्रिंट है।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍💼",
        textEn: "This layout is remarkably visionary! What is that tall cylindrical tower in that northern sector?",
        textHi: "यह लेआउट उल्लेखनीय रूप से दूरदर्शी है! उस उत्तरी क्षेत्र में वह ऊंचा बेलनाकार टावर क्या है?"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "That tower is the central environmental observatory; there is a vertical forest integrated into its outer facade.",
        textHi: "वह टावर केंद्रीय पर्यावरण वेधशाला है; इसके बाहरी अग्रभाग में एक लंबवत जंगल (वर्टिकल फॉरेस्ट) एकीकृत है।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍💼",
        textEn: "Are there residential apartment complexes surrounding that circular green park?",
        textHi: "क्या उस गोलाकार हरे पार्क के चारों ओर आवासीय अपार्टमेंट परिसर हैं?"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Yes, these buildings on this inner loop are eco-apartments, and there are community gardens on every rooftop.",
        textHi: "जी हाँ, इस आंतरिक लूप पर ये इमारतें इको-अपार्टमेंट हैं, और हर छत पर सामुदायिक बगीचे हैं।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍💼",
        textEn: "What about those low-rise structures near that marina basin?",
        textHi: "उस मरीना बेसिन के पास उन निचली मंजिलों वाली संरचनाओं के बारे में क्या?"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Those buildings are maritime research laboratories and solar-powered electric ferry terminals.",
        textHi: "वे इमारतें समुद्री अनुसंधान प्रयोगशालाएं और सौर ऊर्जा से चलने वाले इलेक्ट्रिक नौका टर्मिनल हैं।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍💼",
        textEn: "Is there a dedicated rapid transit light rail connecting all these districts?",
        textHi: "क्या इन सभी जिलों को जोड़ने वाली एक समर्पित रैपिड ट्रांजिट लाइट रेल है?"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Yes, there is an automated magnetic-levitation rail loop, and there are sixteen passenger stations across the grid.",
        textHi: "जी हाँ, एक स्वचालित चुंबकीय-उत्तोलन रेल लूप है, और पूरे ग्रिड में सोलह यात्री स्टेशन हैं।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍💼",
        textEn: "Are there commercial shopping malls in this waterfront zone?",
        textHi: "क्या इस वाटरफ्रंट ज़ोन में व्यावसायिक शॉपिंग मॉल हैं?"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "There are no conventional indoor malls; instead, there is an open-air artisanal promenade with shaded walkways.",
        textHi: "पारंपरिक इनडोर मॉल नहीं हैं; इसके बजाय, छायादार रास्तों वाला एक खुला कारीगर सैरगाह (प्रोमेनेड) है।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍💼",
        textEn: "This design balances urban density with expansive natural biodiversity.",
        textHi: "यह डिजाइन विशाल प्राकृतिक जैव विविधता के साथ शहरी घनत्व को संतुलित करता है।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "There are four artificial wetland lakes on this perimeter to treat and recycle all municipal graywater.",
        textHi: "नगरपालिका के सभी गंदे पानी को साफ और पुनर्चक्रित करने के लिए इस परिधि पर चार कृत्रिम आर्द्रभूमि झीलें हैं।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍💼",
        textEn: "Is there sufficient solar energy generation capacity planned for this development?",
        textHi: "क्या इस विकास के लिए पर्याप्त सौर ऊर्जा उत्पादन क्षमता की योजना बनाई गई है?"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Yes, there is a two-hundred-megawatt floating solar array on that reservoir over there.",
        textHi: "जी हाँ, वहाँ उस जलाशय पर दो सौ मेगावाट का तैरता हुआ सोलर प्लांट है।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍💼",
        textEn: "These miniature LED lights show traffic simulation so vividly!",
        textHi: "ये छोटी एलईडी लाइटें ट्रैफिक सिमुलेशन को कितनी जीवंतता से दिखाती हैं!"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Those green lights represent pedestrian flow, and those blue lines are electric autonomous shuttle paths.",
        textHi: "वे हरी लाइटें पैदल यात्रियों के प्रवाह का प्रतिनिधित्व करती हैं, और वे नीली रेखाएं इलेक्ट्रिक स्वचालित शटल के रास्ते हैं।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍💼",
        textEn: "Our investment board will be enthusiastic about this eco-city model.",
        textHi: "हमारा निवेश बोर्ड इस इको-सिटी मॉडल को लेकर बहुत उत्साहित होगा।"
      },
      {
        speaker: "Vikram",
        avatar: "👨‍💼",
        textEn: "Thank you, Tara! There is a complete prospectus file right on this table for your review.",
        textHi: "धन्यवाद, तारा! आपके अवलोकन के लिए इस मेज पर एक पूरी विवरणिका फाइल मौजूद है।"
      },
      {
        speaker: "Tara",
        avatar: "👩‍💼",
        textEn: "I will study it carefully today.",
        textHi: "मैं आज इसका ध्यानपूर्वक अध्ययन करूँगी।"
      }
    ]
  },
  {
    id: "d08_sc04",
    title: "Handloom Heritage Pavilion: Weaves & Artisanal Textiles",
    titleHi: "हथकरघा विरासत मंडप: बुनाई और कारीगरी वस्त्र",
    context: "Master Weaver Devendra shows handwoven silks and pashmina shawls to textile connoisseur Shalini.",
    situation: "Using 'this / that / these / those' and 'there is / there are' to demonstrate textiles, weaves, and natural dyes.",
    characters: ["Devendra", "Shalini"],
    turns: [
      {
        speaker: "Devendra",
        avatar: "👨‍🎨",
        textEn: "Namaste, Shalini-ji! Welcome to our master weavers' pavilion. This textile on this wooden easel is a pure mulberry silk Kanjeevaram.",
        textHi: "नमस्ते, शालिनी जी! हमारे बुनकर मंडप में आपका स्वागत है। इस लकड़ी के ईज़ल पर यह कपड़ा शुद्ध शहतूत रेशम का कांजीवरम है।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "This heavy silk drape is exquisite! Is there pure silver zari woven into the border of this saree?",
        textHi: "यह भारी रेशमी कपड़ा बहुत सुंदर है! क्या इस साड़ी के बॉर्डर में शुद्ध चांदी की ज़री बुनी गई है?"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍🎨",
        textEn: "Yes, there is genuine silver wire electroplated with pure twenty-four karat gold in this temple border design.",
        textHi: "जी हाँ, इस मंदिर बॉर्डर डिज़ाइन में शुद्ध 24 कैरेट सोने से मढ़े हुए असली चांदी के तार हैं।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "What about those delicate shawls folded on that walnut wood display rack?",
        textHi: "अखरोट की लकड़ी के उस डिस्प्ले रैक पर मुड़े हुए उन नाजुक शॉलों के बारे में क्या?"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍🎨",
        textEn: "Those shawls are authentic Kashmiri Pashmina woven from the fine underfleece of Changthangi mountain goats.",
        textHi: "वे शॉल चांगथांगी पहाड़ी बकरियों के महीन ऊन से बुने गए प्रामाणिक कश्मीरी पश्मीना हैं।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "Are there hand-embroidered Sozni needlework motifs across those borders?",
        textHi: "क्या उन बॉर्डर पर हाथ से की गई सुई की सोज़नी कढ़ाई के रूपांकन हैं?"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍🎨",
        textEn: "Yes, there are intricate floral arabesques on each corner; there were three master artisans working for eight months on that single shawl.",
        textHi: "जी हाँ, प्रत्येक कोने पर जटिल फूलों के काम हैं; उस एक शॉल पर आठ महीने तक तीन कारीगर काम कर रहे थे।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "These indigo-dyed block-printed fabrics on this lower table feel so soft!",
        textHi: "इस निचली मेज पर रखे ये नील से रंगे ब्लॉक-प्रिंट कपड़े कितने कोमल लगते हैं!"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍🎨",
        textEn: "These prints are traditional Ajrakh from Gujarat; there are fourteen distinct washing and mud-resist dyeing stages for each meter.",
        textHi: "ये प्रिंट गुजरात के पारंपरिक अजरक हैं; प्रत्येक मीटर के लिए चौदह अलग-अलग धुलाई और मिट्टी-प्रतिरोधी रंगाई के चरण होते हैं।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "Is there any synthetic chemical dye in these fabrics?",
        textHi: "क्या इन कपड़ों में कोई कृत्रिम रासायनिक रंग है?"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍🎨",
        textEn: "There is zero synthetic dye; there is natural pomegranate rind for yellow, madder root for red, and fermented indigo for blue.",
        textHi: "शून्य सिंथेटिक रंग है; पीले रंग के लिए अनार का छिलका, लाल के लिए मजीठ की जड़, और नीले के लिए प्राकृतिक नील है।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "Are there matching stoles available in that crimson shade over there?",
        textHi: "क्या वहाँ रखे उस गहरे लाल रंग में मैचिंग स्टोल उपलब्ध हैं?"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍🎨",
        textEn: "Yes, there are three matching stoles right behind that glass case.",
        textHi: "जी हाँ, उस कांच के केस के ठीक पीछे तीन मैचिंग स्टोल हैं।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "This craftsmanship is a national treasure.",
        textHi: "यह कारीगरी एक राष्ट्रीय धरोहर है।"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍🎨",
        textEn: "There are over fifty weaver families supported directly through this cooperative society.",
        textHi: "इस सहकारी समिति के माध्यम से पचास से अधिक बुनकर परिवारों को प्रत्यक्ष सहयोग मिलता है।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "I will purchase this Kanjeevaram silk saree and that embroidered Pashmina shawl.",
        textHi: "मैं यह कांजीवरम रेशमी साड़ी और वह कढ़ाईदार पश्मीना शॉल खरीदूँगी।"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍🎨",
        textEn: "There is a silk-mark certificate of authenticity included with each piece.",
        textHi: "प्रत्येक टुकड़े के साथ प्रामाणिकता का सिल्क-मार्क प्रमाण पत्र शामिल है।"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "Thank you for preserving these incredible traditions, Devendra-ji.",
        textHi: "देवेंद्र जी, इन अविश्वसनीय परंपराओं को संरक्षित रखने के लिए धन्यवाद।"
      },
      {
        speaker: "Devendra",
        avatar: "👨‍🎨",
        textEn: "Thank you for patronizing Indian handloom!",
        textHi: "भारतीय हथकरघा को संरक्षण देने के लिए धन्यवाद!"
      },
      {
        speaker: "Shalini",
        avatar: "👩‍💼",
        textEn: "Namaste!",
        textHi: "नमस्ते!"
      }
    ]
  },
  {
    id: "d08_sc05",
    title: "Botanical Research Conservatory: Rare Plants & Microclimates",
    titleHi: "वनस्पति अनुसंधान कंजर्वेटरी: दुर्लभ पौधे और सूक्ष्म जलवायु",
    context: "Senior Horticulturist Dr. Roy guides biology student Anuj through tropical greenhouse climate zones.",
    situation: "Using 'this / that / these / those' and 'there is / there are' to identify flora, species traits, and misting systems.",
    characters: ["Dr. Roy", "Anuj"],
    turns: [
      {
        speaker: "Dr. Roy",
        avatar: "👨‍🔬",
        textEn: "Anuj, welcome to the tropical conservatory dome! This specimen on this mounting log is an epiphytic Blue Vanda orchid.",
        textHi: "अनुज, उष्णकटिबंधीय कंजर्वेटरी डोम में आपका स्वागत है! इस लकड़ी के लट्ठे पर यह नमूना एक एपिफाइटिक ब्लू वांडा ऑर्किड है।"
      },
      {
        speaker: "Anuj",
        avatar: "👨‍🎓",
        textEn: "This flower has such an unusual indigo tessellation! Is there any soil inside this hanging basket?",
        textHi: "इस फूल पर कितना अनोखा नीला पैटर्न है! क्या इस लटकी हुई टोकरी के अंदर कोई मिट्टी है?"
      },
      {
        speaker: "Dr. Roy",
        avatar: "👨‍🔬",
        textEn: "No, there is no soil at all; these aerial roots absorb ambient moisture and airborne nutrients directly from the humid air.",
        textHi: "नहीं, इसमें बिल्कुल मिट्टी नहीं है; ये हवाई जड़ें नम हवा से सीधे नमी और पोषक तत्व अवशोषित करती हैं।"
      },
      {
        speaker: "Anuj",
        avatar: "👨‍🎓",
        textEn: "What about those towering carnivorous pitcher plants along that rock ledge?",
        textHi: "उस चट्टान की मुंडेर पर लगे उन ऊंचे मांसाहारी पिचर पौधों के बारे में क्या?"
      },
      {
        speaker: "Dr. Roy",
        avatar: "👨‍🔬",
        textEn: "Those plants are Nepenthes rajah from the rainforests of Borneo; their digestive fluid traps insects.",
        textHi: "वे पौधे बोर्नियो के वर्षावनों के नेपेंथेस राजा हैं; उनका पाचक तरल कीड़ों को फंसाता है।"
      },
      {
        speaker: "Anuj",
        avatar: "👨‍🎓",
        textEn: "Are there microscopic enzymes inside each pitcher cup?",
        textHi: "क्या प्रत्येक पिचर कप के अंदर सूक्ष्म पाचक एंजाइम होते हैं?"
      },
      {
        speaker: "Dr. Roy",
        avatar: "👨‍🔬",
        textEn: "Yes, there is a complex cocktail of digestive proteases and phosphatases inside that fluid pool.",
        textHi: "जी हाँ, उस तरल के अंदर पाचक प्रोटीएज और फॉस्फेटेज का एक जटिल मिश्रण होता है।"
      },
      {
        speaker: "Anuj",
        avatar: "👨‍🎓",
        textEn: "These giant Amazonian water lilies in this central pool are enormous!",
        textHi: "इस केंद्रीय तालाब में ये विशाल अमेज़ॅन वॉटर लिली कितने बड़े हैं!"
      },
      {
        speaker: "Dr. Roy",
        avatar: "👨‍🔬",
        textEn: "Each leaf is over two meters wide; there are structural air ribs beneath each lily pad that support forty kilograms of weight.",
        textHi: "प्रत्येक पत्ता दो मीटर से अधिक चौड़ा है; प्रत्येक लिली पैड के नीचे संरचनात्मक पसलियाँ हैं जो चालीस किलोग्राम वजन का समर्थन करती हैं।"
      },
      {
        speaker: "Anuj",
        avatar: "👨‍🎓",
        textEn: "Is there a nocturnal pollination mechanism for these white flowers?",
        textHi: "क्या इन सफेद फूलों के लिए रात में परागण की प्रक्रिया होती है?"
      },
      {
        speaker: "Dr. Roy",
        avatar: "👨‍🔬",
        textEn: "Yes, there are nocturnal scarab beetles that are trapped overnight inside the closing flower petals.",
        textHi: "जी हाँ, रात में बंद होने वाली फूलों की पंखुड़ियों के अंदर भृंग (बीटल्स) रात भर के लिए फंस जाते हैं।"
      },
      {
        speaker: "Anuj",
        avatar: "👨‍🎓",
        textEn: "Look at that bizarre succulent over there in the arid greenhouse section!",
        textHi: "शुष्क ग्रीनहाउस अनुभाग में वहाँ उस अजीब रसीले पौधे को देखिए!"
      },
      {
        speaker: "Dr. Roy",
        avatar: "👨‍🔬",
        textEn: "That plant is Welwitschia mirabilis from the Namib desert; there are only two permanent leaves that grow continuously for a thousand years.",
        textHi: "वह पौधा नामीब रेगिस्तान का वेलविट्सचिया मिराबिलिस है; इसमें केवल दो स्थायी पत्ते होते हैं जो एक हजार वर्षों तक लगातार बढ़ते रहते हैं।"
      },
      {
        speaker: "Anuj",
        avatar: "👨‍🎓",
        textEn: "Are there automated ultrasonic foggers maintaining humidity in this dome?",
        textHi: "क्या इस गुंबद में नमी बनाए रखने वाले स्वचालित अल्ट्रासोनिक फॉगर्स हैं?"
      },
      {
        speaker: "Dr. Roy",
        avatar: "👨‍🔬",
        textEn: "Yes, there is an automated micro-misting nozzle every three meters along that ceiling truss.",
        textHi: "जी हाँ, उस छत के ट्रस पर हर तीन मीटर पर एक स्वचालित माइक्रो-मिस्टिंग नोजल है।"
      },
      {
        speaker: "Anuj",
        avatar: "👨‍🎓",
        textEn: "This living botanical collection is an incredible educational resource.",
        textHi: "यह सजीव वनस्पति संग्रह एक अविश्वसनीय शैक्षणिक संसाधन है।"
      },
      {
        speaker: "Dr. Roy",
        avatar: "👨‍🔬",
        textEn: "There are over two thousand endangered botanical species cataloged in this research database.",
        textHi: "इस शोध डेटाबेस में दो हजार से अधिक लुप्तप्राय वनस्पति प्रजातियां सूचीबद्ध हैं।"
      },
      {
        speaker: "Anuj",
        avatar: "👨‍🎓",
        textEn: "Thank you for this detailed botanical tour, Dr. Roy.",
        textHi: "डॉ. रॉय, इस विस्तृत वनस्पति दौरे के लिए धन्यवाद।"
      },
      {
        speaker: "Dr. Roy",
        avatar: "👨‍🔬",
        textEn: "You are always welcome in the conservatory, Anuj!",
        textHi: "कंजर्वेटरी में आपका हमेशा स्वागत है, अनुज!"
      },
      {
        speaker: "Anuj",
        avatar: "👨‍🎓",
        textEn: "Thank you, Sir!",
        textHi: "धन्यवाद, सर!"
      }
    ]
  },
  {
    id: "d08_sc06",
    title: "Gourmet Fromagerie & Cellar: Vintage Pairings",
    titleHi: "गॉरमेट पनीर और वाइन सेलर: विंटेज उत्पाद और स्वाद संयोजन",
    context: "Sommelier Marc presents artisanal aged cheeses and vintage selections to dinner host Mr. Kapoor.",
    situation: "Using demonstratives ('this / that / these / those') and existentials ('there is / there are / is there? / are there?') for pairings.",
    characters: ["Marc", "Mr. Kapoor"],
    turns: [
      {
        speaker: "Marc",
        avatar: "👨‍🍳",
        textEn: "Good evening, Mr. Kapoor! Welcome to our private tasting cellar. This cheese on this slate board is a twenty-four-month aged Parmigiano-Reggiano.",
        textHi: "शुभ संध्या, मिस्टर कपूर! हमारे निजी चखने वाले सेलर में आपका स्वागत है। इस स्लेट बोर्ड पर यह पनीर चौबीस महीने पुराना पारमिगियानो-रेगियानो है।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍💼",
        textEn: "This cheese has wonderful crunchy tyrosine crystals! Is there a specific honey that pairs with this hard cheese?",
        textHi: "इस पनीर में अद्भुत कुरकुरे क्रिस्टल हैं! क्या कोई विशिष्ट शहद है जो इस कड़े पनीर के साथ मेल खाता है?"
      },
      {
        speaker: "Marc",
        avatar: "👨‍🍳",
        textEn: "Yes, there is wild white truffle honey in this crystal jar, and there are roasted Marcona almonds on that ramekin.",
        textHi: "जी हाँ, इस कांच के जार में जंगली सफेद ट्रफल शहद है, और उस छोटी कटोरी में भुने हुए बादाम हैं।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍💼",
        textEn: "What about those dark blue-veined wheels on that temperature-controlled marble shelf?",
        textHi: "उस तापमान-नियंत्रित संगमरमर की शेल्फ पर उन गहरे नीले रंग की नसों वाले पनीर के पहियों के बारे में क्या?"
      },
      {
        speaker: "Marc",
        avatar: "👨‍🍳",
        textEn: "Those wheels are artisanal Roquefort aged inside natural limestone caves in southern France.",
        textHi: "वे पहिए दक्षिणी फ्रांस में प्राकृतिक चूना पत्थर की गुफाओं के अंदर तैयार किए गए पारंपरिक रोकेफोर्ट हैं।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍💼",
        textEn: "Is there a dessert wine that balances the intense piquancy of that blue cheese?",
        textHi: "क्या कोई ऐसी मीठी वाइन है जो उस नीले पनीर के तीखेपन को संतुलित करती है?"
      },
      {
        speaker: "Marc",
        avatar: "👨‍🍳",
        textEn: "Yes, there is a 2016 vintage Sauternes on that top bottle rack; the honeyed apricot notes are a perfect match.",
        textHi: "जी हाँ, उस शीर्ष रैक पर 2016 की सॉटर्नस वाइन है; खुबानी और शहद का स्वाद इसका सही मेल है।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍💼",
        textEn: "These soft goat cheese rounds wrapped in chestnut leaves look very appealing!",
        textHi: "शाहबलूत (चेस्टनट) के पत्तों में लिपटे ये बकरी के दूध के कोमल पनीर के टुकड़े बहुत आकर्षक लग रहे हैं!"
      },
      {
        speaker: "Marc",
        avatar: "👨‍🍳",
        textEn: "These are Banon cheeses from Provence; there is a delicate herbal aroma infused into each round from the dried leaves.",
        textHi: "ये प्रोवेंस के बैनन पनीर हैं; सूखे पत्तों से प्रत्येक टुकड़े में एक नाजुक हर्बल सुगंध समाहित है।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍💼",
        textEn: "Are there artisanal seeded crackers to accompany these soft cheeses?",
        textHi: "क्या इन कोमल पनीरों के साथ खाने के लिए हस्तनिर्मित बीजों वाले क्रैकर्स हैं?"
      },
      {
        speaker: "Marc",
        avatar: "👨‍🍳",
        textEn: "Yes, there are flaxseed crackers, there are sourdough crisps, and there is freshly baked walnut bread on this basket.",
        textHi: "जी हाँ, अलसी के क्रैकर्स हैं, खट्टी रोटी के क्रिस्प्स हैं, और इस टोकरी में ताज़ा सिका हुआ अखरोट का ब्रेड है।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍💼",
        textEn: "Is that vintage Port bottle from the nineteenth century in that locked cabinet over there?",
        textHi: "क्या वहाँ उस बंद कैबिनेट में उन्नीसवीं सदी की वह विंटेज पोर्ट वाइन की बोतल है?"
      },
      {
        speaker: "Marc",
        avatar: "👨‍🍳",
        textEn: "Yes, that bottle is an 1896 Colheita Port; there are only six authenticated bottles remaining in the entire world.",
        textHi: "जी हाँ, वह बोतल 1896 की कोल्हेइटा पोर्ट है; पूरी दुनिया में केवल छह प्रमाणित बोतलें बची हैं।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍💼",
        textEn: "The provenance of this collection is extraordinary.",
        textHi: "इस संग्रह की प्रामाणिकता और इतिहास असाधारण है।"
      },
      {
        speaker: "Marc",
        avatar: "👨‍🍳",
        textEn: "There are twelve custom pairing courses on our executive banquet menu tonight.",
        textHi: "आज रात हमारे कार्यकारी बैंक्वेट मेनू पर बारह विशेष स्वाद संयोजन कोर्स हैं।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍💼",
        textEn: "My guests will be utterly delighted by these gourmet selections.",
        textHi: "इन विशिष्ट स्वादों को देखकर मेरे मेहमान पूरी तरह आनंदित हो जाएंगे।"
      },
      {
        speaker: "Marc",
        avatar: "👨‍🍳",
        textEn: "I will prepare this tasting platter and those dessert pairings for Table 1 at eight sharp.",
        textHi: "मैं ठीक आठ बजे टेबल 1 के लिए यह स्वाद की थाली और वे मीठे पेय तैयार करूँगा।"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍💼",
        textEn: "Thank you for your expert curation, Marc.",
        textHi: "मार्क, आपके विशेषज्ञ चयन के लिए धन्यवाद।"
      },
      {
        speaker: "Marc",
        avatar: "👨‍🍳",
        textEn: "Bon appétit, Mr. Kapoor!",
        textHi: "आपके भोजन का आनंद लें, मिस्टर कपूर!"
      },
      {
        speaker: "Mr. Kapoor",
        avatar: "👨‍💼",
        textEn: "Thank you!",
        textHi: "धन्यवाद!"
      }
    ]
  },
  {
    id: "d08_sc07",
    title: "Mountain Astronomical Observatory: Celestial Objects & Star Charts",
    titleHi: "पर्वतीय खगोलीय वेधशाला: खगोलीय पिंड और तारा चार्ट",
    context: "Astrophysicist Dr. Tara guides amateur astronomer Neil through the observatory dome telescope view.",
    situation: "Using 'this / that / these / those' and 'there is / there are' to point out constellations, nebulae, and planets.",
    characters: ["Dr. Tara", "Neil"],
    turns: [
      {
        speaker: "Dr. Tara",
        avatar: "👩‍🔬",
        textEn: "Neil, look through the eyepiece of this two-meter optical reflecting telescope. This is the planet Saturn.",
        textHi: "नील, इस दो-मीटर ऑप्टिकल परावर्तक दूरबीन के ऐपिस से देखें। यह शनि ग्रह है।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎓",
        textEn: "This planetary image is razor-sharp! Are those rings composed of water ice and rock particles?",
        textHi: "यह ग्रह की छवि बिल्कुल स्पष्ट है! क्या वे छल्ले पानी की बर्फ और चट्टान के कणों से बने हैं?"
      },
      {
        speaker: "Dr. Tara",
        avatar: "👩‍🔬",
        textEn: "Yes, those rings are trillions of icy fragments, and there is a major gap called the Cassini Division between Ring A and B.",
        textHi: "जी हाँ, वे छल्ले खरबों बर्फीले टुकड़े हैं, और रिंग ए और बी के बीच कैसिनी डिवीजन नामक एक बड़ा अंतर है।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎓",
        textEn: "Is there a visible moon orbiting just outside that outer ring?",
        textHi: "क्या उस बाहरी छल्ले के ठीक बाहर परिक्रमा करता हुआ कोई चंद्रमा दिखाई दे रहा है?"
      },
      {
        speaker: "Dr. Tara",
        avatar: "👩‍🔬",
        textEn: "Yes, that bright pinprick of light is Titan; there is a dense nitrogen atmosphere and liquid methane lakes on that moon.",
        textHi: "जी हाँ, वह चमकीला बिंदु टाइटन है; उस चंद्रमा पर एक घना नाइट्रोजन वातावरण और तरल मीथेन की झीलें हैं।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎓",
        textEn: "What are those glittering star clusters in that constellation toward the east?",
        textHi: "पूर्व की ओर उस नक्षत्र में वे चमकते हुए तारा समूह क्या हैं?"
      },
      {
        speaker: "Dr. Tara",
        avatar: "👩‍🔬",
        textEn: "Those stars are the Pleiades open cluster, also known as the Seven Sisters; there are over one thousand young blue stars in that group.",
        textHi: "वे तारे प्लीएड्स खुला तारा समूह हैं, जिन्हें सात बहनों के रूप में भी जाना जाता है; उस समूह में एक हजार से अधिक युवा नीले तारे हैं।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎓",
        textEn: "Are there emission nebulae visible near the belt of Orion?",
        textHi: "क्या ओरियन के बेल्ट के पास उत्सर्जन नेबुला (नीहारिका) दिखाई दे रहे हैं?"
      },
      {
        speaker: "Dr. Tara",
        avatar: "👩‍🔬",
        textEn: "Yes, look at that glowing pink cloud in that sector; that is the Great Orion Nebula, where new stars are forming.",
        textHi: "जी हाँ, उस क्षेत्र में उस चमकते गुलाबी बादल को देखें; वह ग्रेट ओरियन नेबुला है, जहाँ नए तारे बन रहे हैं।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎓",
        textEn: "These digital sky survey monitors on this control desk show real-time spectral data.",
        textHi: "इस नियंत्रण डेस्क पर ये डिजिटल स्काई सर्वे मॉनिटर रीयल-टाइम स्पेक्ट्रल डेटा दिखाते हैं।"
      },
      {
        speaker: "Dr. Tara",
        avatar: "👩‍🔬",
        textEn: "There is an automated spectrometer attached to this telescope that measures the chemical composition of distant galaxies.",
        textHi: "इस टेलीस्कोप से जुड़ा एक स्वचालित स्पेक्ट्रोमीटर है जो दूर की आकाशगंगाओं की रासायनिक संरचना को मापता है।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎓",
        textEn: "Is that Andromeda Galaxy displayed on that large wall screen over there?",
        textHi: "क्या वहाँ उस बड़े वॉल स्क्रीन पर एंड्रोमेडा आकाशगंगा प्रदर्शित है?"
      },
      {
        speaker: "Dr. Tara",
        avatar: "👩‍🔬",
        textEn: "Yes, that spiral galaxy is two point five million light-years away; there are roughly one trillion stars in that single galaxy.",
        textHi: "जी हाँ, वह सर्पिल आकाशगंगा पच्चीस लाख प्रकाश वर्ष दूर है; उस अकेली आकाशगंगा में लगभग दस खरब तारे हैं।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎓",
        textEn: "The scale of the cosmos is truly humbling.",
        textHi: "ब्रह्मांड का यह विस्तार सचमुच विस्मयकारी है।"
      },
      {
        speaker: "Dr. Tara",
        avatar: "👩‍🔬",
        textEn: "There are countless mysteries waiting in those distant deep-space fields.",
        textHi: "उन दूर के गहरे अंतरिक्ष क्षेत्रों में अनगिनत रहस्य प्रतीक्षा कर रहे हैं।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎓",
        textEn: "These high-altitude atmospheric conditions make every celestial object so crisp.",
        textHi: "ये उच्च ऊंचाई वाली वायुमंडलीय परिस्थितियाँ प्रत्येक खगोलीय पिंड को इतना स्पष्ट बनाती हैं।"
      },
      {
        speaker: "Dr. Tara",
        avatar: "👩‍🔬",
        textEn: "There is virtually zero light pollution at this 3,000-meter peak.",
        textHi: "इस 3,000 मीटर ऊंची चोटी पर वस्तुतः शून्य प्रकाश प्रदूषण है।"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎓",
        textEn: "Thank you for this mesmerizing astronomical tour, Dr. Tara.",
        textHi: "डॉ. तारा, इस मंत्रमुग्ध कर देने वाले खगोलीय दौरे के लिए धन्यवाद।"
      },
      {
        speaker: "Dr. Tara",
        avatar: "👩‍🔬",
        textEn: "Keep looking at the stars, Neil!",
        textHi: "सितारों को निहारते रहिए, नील!"
      },
      {
        speaker: "Neil",
        avatar: "👨‍🎓",
        textEn: "Always!",
        textHi: "हमेशा!"
      }
    ]
  },
  {
    id: "d08_sc08",
    title: "Historic Old Delhi Spice Market: Aromatic Varieties & Blends",
    titleHi: "ऐतिहासिक पुरानी दिल्ली मसाला बाजार: सुगंधित किस्में और मसाले",
    context: "Third-Generation Spice Merchant Lala Kishan guides culinary tourist Sarah through Khari Baoli spice alley.",
    situation: "Using 'this / that / these / those' and 'there is / there are' to describe exotic spices, origins, and aromas.",
    characters: ["Lala Kishan", "Sarah"],
    turns: [
      {
        speaker: "Lala Kishan",
        avatar: "👨‍🌾",
        textEn: "Namaste, Sarah-ji! Welcome to Khari Baoli, Asia's largest historic spice market. This spice in this brass bowl is pure Kashmiri Mongra saffron.",
        textHi: "नमस्ते, सारा जी! एशिया के सबसे बड़े ऐतिहासिक मसाला बाजार खारी बावली में आपका स्वागत है। इस पीतल के कटोरे में यह मसाला शुद्ध कश्मीरी मोंगरा केसर है।"
      },
      {
        speaker: "Sarah",
        avatar: "👩‍🌾",
        textEn: "This saffron has such an intense crimson hue and sweet hay aroma! Is there a purity test for this batch?",
        textHi: "इस केसर का रंग इतना गहरा लाल और खुशबू कितनी मीठी है! क्या इस बैच के लिए कोई शुद्धता परीक्षण है?"
      },
      {
        speaker: "Lala Kishan",
        avatar: "👨‍🌾",
        textEn: "Yes, there is zero artificial color; when you place one strand in warm milk, there is a gradual golden yellow release without red streaks.",
        textHi: "जी हाँ, इसमें शून्य कृत्रिम रंग है; जब आप एक रेशा गर्म दूध में डालते हैं, तो बिना लाल धारियों के धीरे-धीरे सुनहरा पीला रंग निकलता है।"
      },
      {
        speaker: "Sarah",
        avatar: "👩‍🌾",
        textEn: "What about those green pods overflowing in that large jute sack over there?",
        textHi: "वहाँ उस बड़े जूट के बोरे में भरे उन हरे दानों (इलायची) के बारे में क्या?"
      },
      {
        speaker: "Lala Kishan",
        avatar: "👨‍🌾",
        textEn: "Those pods are eight-millimeter jumbo green cardamoms from the Cardamom Hills of Idukki in Kerala.",
        textHi: "वे दाने केरल के इडुक्की की इलायची पहाड़ियों से लाई गई आठ मिलीमीटर की जंबो हरी इलायची हैं।"
      },
      {
        speaker: "Sarah",
        avatar: "👩‍🌾",
        textEn: "Are there black peppercorns from the Malabar Coast in these wooden jars on this shelf?",
        textHi: "क्या इस शेल्फ पर इन लकड़ी के जारों में मालाबार तट की काली मिर्च है?"
      },
      {
        speaker: "Lala Kishan",
        avatar: "👨‍🌾",
        textEn: "Yes, these peppercorns are Tellicherry Extra Bold; there is high piperine oil content inside each wrinkled berry.",
        textHi: "जी हाँ, ये काली मिर्च तेल्लीचेरी एक्स्ट्रा बोल्ड हैं; प्रत्येक दाने के अंदर उच्च पिपेरिन तेल की मात्रा होती है।"
      },
      {
        speaker: "Sarah",
        avatar: "👩‍🌾",
        textEn: "Look at that giant roll of cinnamon bark on that display stand!",
        textHi: "उस डिस्प्ले स्टैंड पर दालचीनी की छाल के उस विशाल रोल को देखिए!"
      },
      {
        speaker: "Lala Kishan",
        avatar: "👨‍🌾",
        textEn: "That is true Ceylon cinnamon with paper-thin layers; there is a delicate sweetness unlike harsh cassia bark.",
        textHi: "वह कागज जैसी पतली परतों वाली असली सीलोन दालचीनी है; सामान्य कैसिया छाल के विपरीत इसमें एक नाजुक मिठास होती है।"
      },
      {
        speaker: "Sarah",
        avatar: "👩‍🌾",
        textEn: "Is there a secret family garam masala blend ground in your shop?",
        textHi: "क्या आपकी दुकान में पिसा हुआ कोई गुप्त पारिवारिक गरम मसाला मिश्रण है?"
      },
      {
        speaker: "Lala Kishan",
        avatar: "👨‍🌾",
        textEn: "Yes, there are twenty-two roasted whole spices in our royal heritage blend, including stone flower, mace, and star anise.",
        textHi: "जी हाँ, हमारे शाही मिश्रण में पत्थर के फूल, जावित्री और चक्र फूल सहित बाईस भुने हुए साबुत मसाले हैं।"
      },
      {
        speaker: "Sarah",
        avatar: "👩‍🌾",
        textEn: "These dried Kashmiri red chilies have such a glossy ruby finish!",
        textHi: "इन सूखी कश्मीरी लाल मिर्चों में कितना चमकदार रूबी जैसा रंग है!"
      },
      {
        speaker: "Lala Kishan",
        avatar: "👨‍🌾",
        textEn: "Those chilies provide rich natural color with very mild heat; there is no pungent burning aftertaste.",
        textHi: "वे मिर्चें बहुत कम तीखेपन के साथ समृद्ध प्राकृतिक रंग प्रदान करती हैं; कोई जलन वाला स्वाद नहीं होता।"
      },
      {
        speaker: "Sarah",
        avatar: "👩‍🌾",
        textEn: "This entire lane is an explosion of intoxicating fragrances.",
        textHi: "यह पूरी गली मदहोश कर देने वाली खुशबुओं से भरी है।"
      },
      {
        speaker: "Lala Kishan",
        avatar: "👨‍🌾",
        textEn: "There was a famous spice caravan route that stopped right at this haveli four hundred years ago.",
        textHi: "चार सौ साल पहले एक प्रसिद्ध मसाला कारवां मार्ग था जो इसी हवेली पर रुकता था।"
      },
      {
        speaker: "Sarah",
        avatar: "👩‍🌾",
        textEn: "I will take two boxes of this saffron, half a kilo of those cardamoms, and five jars of that garam masala.",
        textHi: "मैं इस केसर के दो डिब्बे, उन इलायचियों का आधा किलो, और उस गरम मसाले के पांच जार लूँगी।"
      },
      {
        speaker: "Lala Kishan",
        avatar: "👨‍🌾",
        textEn: "There is vacuum-sealed airtight packaging for each spice to preserve freshness during your international flight.",
        textHi: "आपकी अंतरराष्ट्रीय उड़ान के दौरान ताजगी बनाए रखने के लिए प्रत्येक मसाले के लिए वैक्यूम-सील वायुरोधी पैकेजिंग है।"
      },
      {
        speaker: "Sarah",
        avatar: "👩‍🌾",
        textEn: "Thank you for this wonderful sensory journey, Lala Kishan!",
        textHi: "लाला किशन, इस अद्भुत सुगंधित यात्रा के लिए धन्यवाद!"
      },
      {
        speaker: "Lala Kishan",
        avatar: "👨‍🌾",
        textEn: "It is my pleasure, Sarah-ji! May your culinary dishes always be fragrant and delicious.",
        textHi: "यह मेरा सौभाग्य है, सारा जी! आपके व्यंजन हमेशा सुगंधित और स्वादिष्ट रहें।"
      },
      {
        speaker: "Sarah",
        avatar: "👩‍🌾",
        textEn: "Thank you! Namaste!",
        textHi: "धन्यवाद! नमस्ते!"
      }
    ]
  },
  {
    id: "d08_sc09",
    title: "Contemporary Sculpture Pavilion: Materials & Spatial Forms",
    titleHi: "समकालीन मूर्तिकला मंडप: सामग्री और स्थानिक रूप",
    context: "Art Curator Radhika guides collector Mr. Varma through an avant-garde outdoor sculpture terrace.",
    situation: "Using 'this / that / these / those' and 'there is / there are' to critique modern sculptures, materials, and installations.",
    characters: ["Radhika", "Mr. Varma"],
    turns: [
      {
        speaker: "Radhika",
        avatar: "👩‍🎨",
        textEn: "Welcome to the rooftop sculpture pavilion, Mr. Varma! This monumental steel sculpture in this courtyard is titled 'Equilibrium'.",
        textHi: "छत के मूर्तिकला मंडप में आपका स्वागत है, मिस्टर वर्मा! इस प्रांगण में यह विशालकाय स्टील की मूर्ति 'संतुलन' शीर्षक से है।"
      },
      {
        speaker: "Mr. Varma",
        avatar: "👨‍💼",
        textEn: "This sculpture is astonishing! How does this heavy cantilevered steel arch balance on a single pin-point base?",
        textHi: "यह मूर्ति आश्चर्यजनक है! यह भारी स्टील मेहराब एक एकल बिंदु आधार पर कैसे संतुलित है?"
      },
      {
        speaker: "Radhika",
        avatar: "👩‍🎨",
        textEn: "There is an internal counterweight of lead hidden inside the lower pedestal, and there are precision ball-bearings beneath the pivot.",
        textHi: "निचले चबूतरे के अंदर सीसे का एक आंतरिक संतुलन-भार छिपा है, और धुरी के नीचे सटीक बॉल-बेयरिंग हैं।"
      },
      {
        speaker: "Mr. Varma",
        avatar: "👨‍💼",
        textEn: "What about those geometric bronze forms arranged on that raised terrace over there?",
        textHi: "वहाँ उस ऊंचे चबूतरे पर व्यवस्थित उन ज्यामितीय कांस्य आकृतियों के बारे में क्या?"
      },
      {
        speaker: "Radhika",
        avatar: "👩‍🎨",
        textEn: "Those sculptures are by master sculptor Ramkinkar's modernist lineage; there is an interplay of light and negative space in each form.",
        textHi: "वे मूर्तियां मास्टर मूर्तिकार रामकिंकर की आधुनिक परंपरा से हैं; प्रत्येक रूप में प्रकाश और रिक्त स्थान का एक सुंदर खेल है।"
      },
      {
        speaker: "Mr. Varma",
        avatar: "👨‍💼",
        textEn: "Are there kinetic wind-driven elements in that towering mobile sculpture near the glass atrium?",
        textHi: "क्या कांच के एट्रियम के पास उस ऊंची चलायमान मूर्ति में हवा से चलने वाले तत्व हैं?"
      },
      {
        speaker: "Radhika",
        avatar: "👩‍🎨",
        textEn: "Yes, that sculpture rotates gently with every gust of wind; there is a mesmerizing fluid choreography to its motion.",
        textHi: "जी हाँ, वह मूर्ति हवा के हर झोंके के साथ धीरे-धीरे घूमती है; इसकी गति में एक मंत्रमुग्ध कर देने वाला प्रवाह है।"
      },
      {
        speaker: "Mr. Varma",
        avatar: "👨‍💼",
        textEn: "These basalt stone monoliths along this reflecting pool feel so ancient and contemplative.",
        textHi: "इस तालाब के किनारे ये बेसाल्ट पत्थर के खंभे कितने प्राचीन और चिंतनशील लगते हैं।"
      },
      {
        speaker: "Radhika",
        avatar: "👩‍🎨",
        textEn: "These monoliths are hand-chiseled volcanic basalt; there are hand-carved ripples that mimic the water's surface.",
        textHi: "ये खंभे हाथ से तराशे गए ज्वालामुखीय बेसाल्ट हैं; इन पर हाथ से बनाई गई तरंगें हैं जो पानी की सतह की नकल करती हैं।"
      },
      {
        speaker: "Mr. Varma",
        avatar: "👨‍💼",
        textEn: "Is there an illuminated night-time exhibition schedule for this gallery?",
        textHi: "क्या इस गैलरी के लिए रोशनी वाला रात्रि प्रदर्शनी कार्यक्रम है?"
      },
      {
        speaker: "Radhika",
        avatar: "👩‍🎨",
        textEn: "Yes, there is fiber-optic underwater lighting in this pool, and there are custom spotlighting beams on each installation.",
        textHi: "जी हाँ, इस पूल में फाइबर-ऑप्टिक अंडरवाटर लाइटिंग है, और प्रत्येक स्थापना पर कस्टम स्पॉटलाइट बीम हैं।"
      },
      {
        speaker: "Mr. Varma",
        avatar: "👨‍💼",
        textEn: "Is that marble figurative piece in that alcove available for private acquisition?",
        textHi: "क्या उस आले में वह संगमरमर की मूर्ति निजी खरीद के लिए उपलब्ध है?"
      },
      {
        speaker: "Radhika",
        avatar: "👩‍🎨",
        textEn: "Yes, that sculpture is from a limited edition of three; there are two pieces already acquired by national art trusts.",
        textHi: "जी हाँ, वह मूर्ति तीन के सीमित संस्करण से है; दो कृतियाँ पहले ही राष्ट्रीय कला न्यासों द्वारा अधिग्रहित की जा चुकी हैं।"
      },
      {
        speaker: "Mr. Varma",
        avatar: "👨‍💼",
        textEn: "The spatial harmony of this entire terrace is breathtaking.",
        textHi: "इस पूरे चबूतरे का स्थानिक सामंजस्य मनमोहक है।"
      },
      {
        speaker: "Radhika",
        avatar: "👩‍🎨",
        textEn: "There was a complete architectural redesign of this terrace last winter to maximize natural sunlight angles.",
        textHi: "प्राकृतिक धूप के कोणों को अधिकतम करने के लिए पिछली सर्दियों में इस चबूतरे का पूरा वास्तुशिल्प पुनर्गठन किया गया था।"
      },
      {
        speaker: "Mr. Varma",
        avatar: "👨‍💼",
        textEn: "I would like to place an acquisition reservation on that Carrara marble sculpture.",
        textHi: "मैं उस करारा संगमरमर की मूर्ति पर एक खरीद आरक्षण दर्ज कराना चाहूँगा।"
      },
      {
        speaker: "Radhika",
        avatar: "👩‍🎨",
        textEn: "There is an acquisition agreement form ready right inside this office.",
        textHi: "इस कार्यालय के अंदर ही एक खरीद अनुबंध प्रपत्र तैयार है।"
      },
      {
        speaker: "Mr. Varma",
        avatar: "👨‍💼",
        textEn: "Thank you for the enlightening gallery walkthrough, Radhika.",
        textHi: "राधिका, इस ज्ञानवर्धक गैलरी वॉकथ्रू के लिए धन्यवाद।"
      },
      {
        speaker: "Radhika",
        avatar: "👩‍🎨",
        textEn: "It is an absolute pleasure, Mr. Varma!",
        textHi: "यह मेरे लिए अत्यंत प्रसन्नता की बात है, मिस्टर वर्मा!"
      },
      {
        speaker: "Mr. Varma",
        avatar: "👨‍💼",
        textEn: "Let's proceed to the office.",
        textHi: "चलिए कार्यालय की ओर चलते हैं।"
      }
    ]
  },
  {
    id: "d08_sc10",
    title: "Automotive Design Studio: Prototype Aerodynamics & Features",
    titleHi: "ऑटोमोटिव डिजाइन स्टूडियो: प्रोटोटाइप वायुगतिकी और विशेषताएं",
    context: "Chief Automotive Designer Sameer reviews a 1:1 scale clay model with Head of Aerodynamics Elena.",
    situation: "Deploying 'this / that / these / those' and 'there is / there are' for vehicle design elements, carbon splitters, and air ducts.",
    characters: ["Sameer", "Elena"],
    turns: [
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "Elena, inspect this full-scale clay prototype of our electric hypercar on this turntable. This is the final front-fascia styling.",
        textHi: "ऐलेना, इस टर्नटेबल पर हमारी इलेक्ट्रिक हाइपरकार के इस पूर्ण-आकार के क्ले प्रोटोटाइप का निरीक्षण करें। यह अंतिम फ्रंट-फेसिया स्टाइलिंग है।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🔬",
        textEn: "This front bumper contour is aggressive! Is there an active aerodynamic flap inside this front air intake duct?",
        textHi: "यह फ्रंट बम्पर का रूप आक्रामक है! क्या इस फ्रंट एयर इनटेक डक्ट के अंदर एक सक्रिय वायुगतिकीय फ्लैप है?"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "Yes, there is an electronically actuated carbon shutter, and there are vortex generators embedded along this lower splitter.",
        textHi: "जी हाँ, इसमें एक इलेक्ट्रॉनिक रूप से संचालित कार्बन शटर है, और इस निचले स्प्लिटर के साथ भंवर जनरेटर लगे हैं।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🔬",
        textEn: "What about those muscular rear wheel arches on that side profile over there?",
        textHi: "वहाँ उस साइड प्रोफाइल पर उन उभरे हुए पिछले पहिया मेहराबों (व्हील आर्च) के बारे में क्या?"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "Those arches channel cooling airflow directly to the rear high-performance ceramic brake rotors.",
        textHi: "वे मेहराब ठंडी हवा के प्रवाह को सीधे पिछले उच्च-प्रदर्शन सिरेमिक ब्रेक रोटर्स तक पहुंचाते हैं।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🔬",
        textEn: "Are there drag-reduction air curtains around these forged alloy wheels?",
        textHi: "क्या इन जालीदार अलॉय पहियों के चारों ओर ड्रैग-कम करने वाले एयर कर्टन हैं?"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "Yes, these wheel spokes have aero-blades, and there is a laminar air channel inside each front fender.",
        textHi: "जी हाँ, इन पहियों के स्पोक्स में एयरो-ब्लेड हैं, और प्रत्येक फ्रंट फेंडर के अंदर एक सुचारू वायु चैनल है।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🔬",
        textEn: "Look at that active dual-element rear wing on that rear decklid!",
        textHi: "उस पिछले डेकलिड पर उस सक्रिय दोहरे तत्व वाले रियर विंग को देखिए!"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "That wing deploys automatically at speeds above one hundred kilometers per hour; there is five hundred kilograms of downforce generated at top speed.",
        textHi: "वह विंग सौ किलोमीटर प्रति घंटे से अधिक की गति पर स्वचालित रूप से खुलता है; शीर्ष गति पर पांच सौ किलोग्राम का डाउनफोर्स उत्पन्न होता है।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🔬",
        textEn: "Is there a full-length venturi tunnel underbody diffuser on this chassis?",
        textHi: "क्या इस चेसिस पर पूरी लंबाई का वेंचुरी टनल अंडरबॉडी डिफ्यूज़र है?"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "Yes, there is a flat carbon composite floor, and there are three longitudinal strakes on that rear diffuser.",
        textHi: "जी हाँ, एक सपाट कार्बन कंपोजिट फर्श है, और उस पिछले डिफ्यूज़र पर तीन अनुदैर्ध्य धारियां हैं।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🔬",
        textEn: "These digital wind-tunnel simulation graphs on this tablet show a drag coefficient of just zero point two one.",
        textHi: "इस टैबलेट पर ये डिजिटल विंड-टनल सिमुलेशन ग्राफ केवल 0.21 का ड्रैग गुणांक दिखाते हैं।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "That is an unprecedented aerodynamic achievement for a road-legal production hypercar.",
        textHi: "सड़क पर चलने के लिए कानूनी रूप से मान्य उत्पादन हाइपरकार के लिए यह एक अभूतपूर्व वायुगतिकीय उपलब्धि है।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🔬",
        textEn: "Were there high turbulence zones around the digital side mirrors during earlier tests?",
        textHi: "क्या पहले के परीक्षणों के दौरान डिजिटल साइड मिरर के आसपास उच्च अशांति वाले क्षेत्र थे?"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "There were minor vortices, but these slender camera stalks resolved the boundary layer separation completely.",
        textHi: "हल्के भंवर थे, लेकिन इन पतले कैमरा स्टॉक्स ने सीमा परत के अलगाव को पूरी तरह से हल कर दिया।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🔬",
        textEn: "This design is both visually striking and aerodynamically superlative.",
        textHi: "यह डिजाइन दिखने में आकर्षक और वायुगतिकीय रूप से सर्वोत्कृष्ट दोनों है।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "There are four structural carbon-fiber monocoque test chassis ready in the fabrication bay.",
        textHi: "निर्माण बे में चार संरचनात्मक कार्बन-फाइबर मोनोकॉक टेस्ट चेसिस तैयार हैं।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🔬",
        textEn: "Let us commence the physical wind-tunnel scale model testing tomorrow morning.",
        textHi: "आइए कल सुबह भौतिक विंड-टनल स्केल मॉडल परीक्षण शुरू करें।"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍🎨",
        textEn: "The full engineering team will be on the test track.",
        textHi: "पूरी इंजीनियरिंग टीम टेस्ट ट्रैक पर मौजूद होगी।"
      },
      {
        speaker: "Elena",
        avatar: "👩‍🔬",
        textEn: "Excellent work, Sameer!",
        textHi: "शानदार काम, समीर!"
      }
    ]
  }
];
