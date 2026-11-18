// Stage 1 Day 8: 10 Distinct Long-Form Dialogues (Demonstratives & Existential 'There is / There are')
// Focus: This / That / These / Those, There is / There are, Is there / Are there, There was / There were

export const day8Dialogues = [
  {
    id: "d08_sc01",
    title: "Touring a Rental Apartment and Inspecting Rooms and Amenities",
    titleHi: "किराए के फ्लैट का मुआयना और सुविधाओं की जाँच",
    context: "A prospective tenant, Vikram, tours a 3BHK flat with the property broker, Mr. Sharma.",
    situation: "Apartment tour using 'this', 'that', 'there is', 'there are'",
    characters: ["Mr. Sharma", "Vikram"],
    turns: [
      { speaker: "Mr. Sharma", avatar: "🔑", textEn: "Welcome inside, Vikram! This is the main living room of the apartment.", textHi: "अंदर स्वागत है, विक्रम! यह फ्लैट का मुख्य बैठक कक्ष (लिविंग रूम) है।" },
      { speaker: "Vikram", avatar: "🏠", textEn: "This living area is very spacious. Is there a balcony attached to that side?", textHi: "यह लिविंग एरिया काफ़ी विशाल है। क्या उस तरफ़ कोई बालकनी जुड़ी हुई है?" },
      { speaker: "Mr. Sharma", avatar: "🔑", textEn: "Yes, there is a large French balcony right behind those sliding glass doors.", textHi: "जी हाँ, उन कांच के स्लाइडिंग दरवाज़ों के ठीक पीछे एक बड़ी बालकनी है।" },
      { speaker: "Vikram", avatar: "🏠", textEn: "Are there good views of the green community park from this balcony?", textHi: "क्या इस बालकनी से हरे-भरे पार्क का अच्छा नज़ारा दिखता है?" },
      { speaker: "Mr. Sharma", avatar: "🔑", textEn: "There are beautiful mature trees and a walking track directly below.", textHi: "नीचे सीधे सुंदर छायादार पेड़ और एक वॉकिंग ट्रैक है।" },
      { speaker: "Vikram", avatar: "🏠", textEn: "What about the kitchen? Is there a modular chimney installed?", textHi: "रसोई के बारे में क्या? क्या वहाँ कोई मॉड्यूलर चिमनी लगी हुई है?" },
      { speaker: "Mr. Sharma", avatar: "🔑", textEn: "Look into this kitchen: there is a high-suction chimney and there are piped gas connections.", textHi: "इस रसोई को देखिए: यहाँ एक तेज़ चिमनी है और पाइप वाली गैस का कनेक्शन है।" },
      { speaker: "Vikram", avatar: "🏠", textEn: "Are these granite countertops scratch-resistant?", textHi: "क्या ये ग्रेनाइट काउंटरटॉप्स खरोंच-प्रतिरोधी हैं?" },
      { speaker: "Mr. Sharma", avatar: "🔑", textEn: "Yes, these are premium imported granite slabs. There is ample storage in those overhead cabinets.", textHi: "हाँ, ये प्रीमियम आयातित ग्रेनाइट स्लैब हैं। उन ऊपरी अलमारियों में काफ़ी जगह है।" },
      { speaker: "Vikram", avatar: "🏠", textEn: "How many bedrooms are there in total on this floor?", textHi: "इस मंज़िल पर कुल कितने बेडरूम हैं?" },
      { speaker: "Mr. Sharma", avatar: "🔑", textEn: "There are three bedrooms. This master bedroom has an en-suite bathroom and wooden flooring.", textHi: "यहाँ तीन बेडरूम हैं। इस मास्टर बेडरूम में अटैच्ड बाथरूम और लकड़ी का फ़र्श है।" },
      { speaker: "Vikram", avatar: "🏠", textEn: "Are there built-in wardrobes inside that guest room as well?", textHi: "क्या उस अतिथि कक्ष के अंदर भी पहले से बनी अलमारियाँ हैं?" },
      { speaker: "Mr. Sharma", avatar: "🔑", textEn: "Yes, there are floor-to-ceiling wardrobes in all three bedrooms.", textHi: "जी हाँ, तीनों बेडरूम में छत तक ऊँची अलमारियाँ हैं।" },
      { speaker: "Vikram", avatar: "🏠", textEn: "Is there a dedicated covered parking slot in the basement?", textHi: "क्या बेसमेंट में एक समर्पित कवर्ड पार्किंग स्लॉट है?" },
      { speaker: "Mr. Sharma", avatar: "🔑", textEn: "There are two reserved parking spots right next to the elevator lobby.", textHi: "लिफ़्ट लॉबी के ठीक पास दो आरक्षित पार्किंग स्थान हैं।" },
      { speaker: "Vikram", avatar: "🏠", textEn: "This apartment has everything I need. I am ready to finalize this deal!", textHi: "इस फ्लैट में मेरी ज़रूरत की हर चीज़ है। मैं यह सौदा पक्का करने के लिए तैयार हूँ!" }
    ]
  },
  {
    id: "d08_sc02",
    title: "Browsing Fabric and Styles in a Fashion Boutique",
    titleHi: "कपड़ों की दुकान में परिधानों और डिज़ाइनों का चयन",
    context: "A shopper, Priya, asks the boutique manager, Suman, about different kurtas and fabrics.",
    situation: "Shopping inquiries using 'this', 'that', 'these', 'those'",
    characters: ["Suman", "Priya"],
    turns: [
      { speaker: "Suman", avatar: "👗", textEn: "Good afternoon! How can I assist you with our festive collection today?", textHi: "शुभ दोपहर! आज मैं अपने त्यौहारी संग्रह में आपकी क्या मदद कर सकती हूँ?" },
      { speaker: "Priya", avatar: "🛍️", textEn: "Hello! Is this handcrafted silk kurta available in a medium size?", textHi: "नमस्ते! क्या यह हाथ से बना रेशमी कुर्ता मीडियम साइज़ में उपलब्ध है?" },
      { speaker: "Suman", avatar: "👗", textEn: "Yes, this piece right here is a medium, and that blue one on the mannequin is a large.", textHi: "जी हाँ, यह वाला पीस मीडियम है, और उस पुतले पर लगा नीला वाला लार्ज है।" },
      { speaker: "Priya", avatar: "🛍️", textEn: "Are these embroidered dupattas made of pure Chanderi silk?", textHi: "क्या ये कढ़ाई वाले दुपट्टे शुद्ध चंदेरी रेशम के बने हैं?" },
      { speaker: "Suman", avatar: "👗", textEn: "Yes, these are authentic handwoven Chanderi fabrics. Those shawls on that rack are Kashmiri pashmina.", textHi: "जी हाँ, ये प्रामाणिक हाथ से बुने चंदेरी कपड़े हैं। उस रैक पर वे शॉल कश्मीरी पश्मीना हैं।" },
      { speaker: "Priya", avatar: "🛍️", textEn: "There is delicate golden zari work on this neckline. It looks magnificent.", textHi: "इस गले पर बारीक सुनहरी ज़री का काम है। यह बेहद खूबसूरत लग रहा है।" },
      { speaker: "Suman", avatar: "👗", textEn: "There are matching palazzo pants in that display cabinet over there.", textHi: "वहाँ उस डिस्प्ले कैबिनेट में इसके मैचिंग पलाज़ो पैंट हैं।" },
      { speaker: "Priya", avatar: "🛍️", textEn: "Are those matching pants available in beige or off-white?", textHi: "क्या वे मैचिंग पैंट बेज या ऑफ़-व्हाइट रंग में उपलब्ध हैं?" },
      { speaker: "Suman", avatar: "👗", textEn: "There are both colors available in your exact size.", textHi: "आपकी सटीक नाप में दोनों रंग उपलब्ध हैं।" },
      { speaker: "Priya", avatar: "🛍️", textEn: "Can I try these three outfits in the trial room?", textHi: "क्या मैं ट्रायल रूम में इन तीनों परिधानों को पहनकर देख सकती हूँ?" },
      { speaker: "Suman", avatar: "👗", textEn: "Certainly! The trial rooms are right past that mirror on your left.", textHi: "ज़रूर! ट्रायल रूम आपकी बाईं ओर उस आईने के ठीक आगे हैं।" },
      { speaker: "Priya", avatar: "🛍️", textEn: "Thank you for showing me all these beautiful garments.", textHi: "मुझे ये सभी सुंदर परिधान दिखाने के लिए धन्यवाद।" }
    ]
  },
  {
    id: "d08_sc03",
    title: "Pointing Out Historical Monuments from a Hilltop Viewpoint",
    titleHi: "पहाड़ी की चोटी से ऐतिहासिक स्मारकों की पहचान",
    context: "A tour guide, Mr. Khan, points out city landmarks to a tourist, David.",
    situation: "Landscape orientation using 'that', 'those', 'there is', 'there are'",
    characters: ["Mr. Khan", "David"],
    turns: [
      { speaker: "Mr. Khan", avatar: "🏰", textEn: "David, stand here on this observation deck. Look across the river valley.", textHi: "डेविड, इस अवलोकन मंच पर खड़े होइए। नदी घाटी के उस पार देखिए।" },
      { speaker: "David", avatar: "📷", textEn: "What a panoramic view! What is that massive red stone fortress on the horizon?", textHi: "कितना विहंगम दृश्य है! क्षितिज पर वह विशाल लाल पत्थर का किला कौन सा है?" },
      { speaker: "Mr. Khan", avatar: "🏰", textEn: "That is the 16th-century royal citadel. There are four grand gateways along its ramparts.", textHi: "वह 16वीं शताब्दी का शाही किला है। उसकी प्राचीर के साथ चार भव्य प्रवेश द्वार हैं।" },
      { speaker: "David", avatar: "📷", textEn: "And what are those marble domes shimmering in the morning sun?", textHi: "और सुबह की धूप में चमकते हुए वे संगमरमर के गुंबद क्या हैं?" },
      { speaker: "Mr. Khan", avatar: "🏰", textEn: "Those are the royal cenotaphs built for the ancient dynasty kings.", textHi: "वे प्राचीन राजवंश के राजाओं के लिए बनाई गई शाही छतरियां हैं।" },
      { speaker: "David", avatar: "📷", textEn: "Is there an underground reservoir inside that courtyard?", textHi: "क्या उस प्रांगण के अंदर कोई भूमिगत जलाशय है?" },
      { speaker: "Mr. Khan", avatar: "🏰", textEn: "Yes, there is an ancient stepwell with eight hundred carved steps.", textHi: "जी हाँ, वहाँ आठ सौ नक्काशीदार सीढ़ियों वाली एक प्राचीन बावड़ी है।" },
      { speaker: "David", avatar: "📷", textEn: "There are so many architectural marvels clustered in this historic quarter!", textHi: "इस ऐतिहासिक इलाके में वास्तुकला के बहुत सारे चमत्कार मौजूद हैं!" },
      { speaker: "Mr. Khan", avatar: "🏰", textEn: "Indeed! In that forested valley below, there are migratory birds nesting by the lake.", textHi: "सच में! नीचे उस जंगली घाटी में, झील के पास प्रवासी पक्षी घोंसले बना रहे हैं।" },
      { speaker: "David", avatar: "📷", textEn: "This vantage point offers the best perspective of the entire city.", textHi: "यह नज़रिया पूरे शहर को देखने का सबसे बेहतरीन दृष्टिकोण प्रदान करता है।" }
    ]
  },
  {
    id: "d08_sc04",
    title: "Checking Kitchen Pantry Ingredients Before Baking a Cake",
    titleHi: "केक बनाने से पहले रसोई में सामग्री की उपलब्धता की जाँच",
    context: "Two friends, Ananya and Tina, inspect their kitchen cabinet before baking a chocolate cake.",
    situation: "Inventory and presence using 'is there', 'are there', 'there is'",
    characters: ["Ananya", "Tina"],
    turns: [
      { speaker: "Ananya", avatar: "🥣", textEn: "Tina, let's check what ingredients there are in the pantry before we start baking.", textHi: "टीना, बेकिंग शुरू करने से पहले देखते हैं कि पेंट्री में कौन-कौन सी सामग्री मौजूद है।" },
      { speaker: "Tina", avatar: "🍰", textEn: "Sure! Is there enough all-purpose flour in this glass jar?", textHi: "ज़रूर! क्या इस कांच के जार में पर्याप्त मैदा है?" },
      { speaker: "Ananya", avatar: "🥣", textEn: "Yes, there is nearly one kilogram of flour in this jar.", textHi: "हाँ, इस जार में लगभग एक किलो मैदा है।" },
      { speaker: "Tina", avatar: "🍰", textEn: "Are there fresh eggs inside the refrigerator?", textHi: "क्या फ़्रिज के अंदर ताज़े अंडे हैं?" },
      { speaker: "Ananya", avatar: "🥣", textEn: "There are six eggs in the egg tray, and there is unsalted butter on the top shelf.", textHi: "अंडे की ट्रे में छह अंडे हैं, और सबसे ऊपर वाली शेल्फ़ पर मक्खन रखा है।" },
      { speaker: "Tina", avatar: "🍰", textEn: "Is there any dark cocoa powder in that upper cupboard?", textHi: "क्या उस ऊपरी अलमारी में डार्क कोको पाउडर है?" },
      { speaker: "Ananya", avatar: "🥣", textEn: "Let me check... yes, there is an unopened tin of Dutch cocoa powder.", textHi: "मुझे देखने दो... हाँ, डच कोको पाउडर का एक सीलबंद डिब्बा रखा है।" },
      { speaker: "Tina", avatar: "🍰", textEn: "Are those chocolate chips in that small plastic container?", textHi: "क्या उस छोटे प्लास्टिक के डिब्बे में चॉकलेट चिप्स हैं?" },
      { speaker: "Ananya", avatar: "🥣", textEn: "Yes, these are semi-sweet dark chocolate chips. There is also pure vanilla extract here.", textHi: "हाँ, ये डार्क चॉकलेट चिप्स हैं। यहाँ शुद्ध वैनिला एसेंस भी मौजूद है।" },
      { speaker: "Tina", avatar: "🍰", textEn: "There is everything we need! Let's preheat the oven to 180 degrees.", textHi: "हमारी ज़रूरत की हर चीज़ यहाँ है! चलो ओवन को 180 डिग्री पर पहले से गर्म करते हैं।" }
    ]
  },
  {
    id: "d08_sc05",
    title: "Organizing Hardware Tools in a Workshop",
    titleHi: "कार्यशाला में औज़ारों और उपकरणों की व्यवस्था",
    context: "Workshop owner Ramesh and apprentice Rohit organize screwdrivers and power tools on a toolboard.",
    situation: "Tool organization with 'this', 'that', 'these', 'those', 'there are'",
    characters: ["Ramesh", "Rohit"],
    turns: [
      { speaker: "Ramesh", avatar: "🛠️", textEn: "Rohit, hang these adjustable wrenches on that pegboard rack.", textHi: "रोहित, इन एडजस्टेबल रिंचों को उस पेगबोर्ड रैक पर टांग दो।" },
      { speaker: "Rohit", avatar: "🔧", textEn: "Done, sir. Where do these electric drill bits belong?", textHi: "हो गया सर। ये इलेक्ट्रिक ड्रिल बिट्स कहाँ रखी जाएँगी?" },
      { speaker: "Ramesh", avatar: "🛠️", textEn: "There is a blue metal case inside that bottom drawer for those drill bits.", textHi: "उन ड्रिल बिट्स के लिए उस नीचे वाले दराज़ में एक नीला लोहे का डिब्बा है।" },
      { speaker: "Rohit", avatar: "🔧", textEn: "Are there extra cutting discs for this angle grinder?", textHi: "क्या इस एंगल ग्राइंडर के लिए अतिरिक्त कटिंग डिस्क मौजूद हैं?" },
      { speaker: "Ramesh", avatar: "🛠️", textEn: "Yes, there are ten replacement blades on that high wooden shelf.", textHi: "हाँ, उस ऊँची लकड़ी की शेल्फ़ पर दस नई ब्लेड रखी हैं।" },
      { speaker: "Rohit", avatar: "🔧", textEn: "What is that heavy green machine near the corner bench?", textHi: "कोने वाली मेज़ के पास वह भारी हरी मशीन कौन सी है?" },
      { speaker: "Ramesh", avatar: "🛠️", textEn: "That is a precision bench drill press. There is safety glass attached to its motor.", textHi: "वह एक सटीक बेंच ड्रिल प्रेस है। इसकी मोटर से सुरक्षा कांच जुड़ा हुआ है।" },
      { speaker: "Rohit", avatar: "🔧", textEn: "Are these safety goggles clean and ready for use?", textHi: "क्या ये सुरक्षा चश्मे साफ़ और उपयोग के लिए तैयार हैं?" },
      { speaker: "Ramesh", avatar: "🛠️", textEn: "Yes, keep those on this workbench so anyone operating the lathe can wear them.", textHi: "हाँ, इन्हें इस वर्कबेंच पर रखो ताकि खराद चलाने वाला कोई भी व्यक्ति इन्हें पहन सके।" },
      { speaker: "Rohit", avatar: "🔧", textEn: "The workshop looks immaculate and well-organized now!", textHi: "कार्यशाला अब बिल्कुल साफ़-सुथरी और सुव्यवस्थित दिख रही है!" }
    ]
  },
  {
    id: "d08_sc06",
    title: "Searching for Reference Volumes in a University Library",
    titleHi: "विश्वविद्यालय पुस्तकालय में संदर्भ पुस्तकों की खोज",
    context: "A student, Rahul, asks the chief librarian, Mrs. Bhatt, for economics journals.",
    situation: "Library shelving using 'there is', 'there are', 'these', 'those'",
    characters: ["Rahul", "Mrs. Bhatt"],
    turns: [
      { speaker: "Rahul", avatar: "📖", textEn: "Excuse me, ma'am. Is there a dedicated section for macroeconomic journals here?", textHi: "माफ़ कीजिएगा मैम। क्या यहाँ मैक्रोइकॉनॉमिक्स पत्रिकाओं के लिए कोई समर्पित सेक्शन है?" },
      { speaker: "Mrs. Bhatt", avatar: "📚", textEn: "Yes, Rahul. Walk down this aisle; there is a periodical section right in aisle 4.", textHi: "हाँ राहुल। इस रास्ते से सीधे जाइए; गली नंबर 4 में पत्रिकाओं का एक पूरा सेक्शन है।" },
      { speaker: "Rahul", avatar: "📖", textEn: "Are these bound hardcovers on this shelf from the 1990s?", textHi: "क्या इस शेल्फ़ पर रखी ये जिल्द वाली पुस्तकें 1990 के दशक की हैं?" },
      { speaker: "Mrs. Bhatt", avatar: "📚", textEn: "Yes, these are archival volumes. Those newer issues on that display rack are from this year.", textHi: "जी हाँ, ये पुरानी ऐतिहासिक प्रतियां हैं। उस डिस्प्ले रैक पर वे नए अंक इसी वर्ष के हैं।" },
      { speaker: "Rahul", avatar: "📖", textEn: "Is there a photocopy machine on this floor?", textHi: "क्या इस मंज़िल पर कोई फ़ोटोकॉपी मशीन है?" },
      { speaker: "Mrs. Bhatt", avatar: "📚", textEn: "There are two digital scanners near the digital catalog terminal.", textHi: "डिजिटल कैटलॉग टर्मिनल के पास दो डिजिटल स्कैनर मौजूद हैं।" },
      { speaker: "Rahul", avatar: "📖", textEn: "Can I borrow this reference encyclopedia overnight?", textHi: "क्या मैं इस संदर्भ विश्वकोश को रात भर के लिए घर ले जा सकता हूँ?" },
      { speaker: "Mrs. Bhatt", avatar: "📚", textEn: "No, that book is for in-library reading only. But you can check out those three paperbacks.", textHi: "नहीं, वह पुस्तक केवल पुस्तकालय में पढ़ने के लिए है। लेकिन आप उन तीन पेपरबैक किताबों को इशू करा सकते हैं।" },
      { speaker: "Rahul", avatar: "📖", textEn: "Thank you for explaining the library layout so clearly.", textHi: "पुस्तकालय की व्यवस्था इतनी स्पष्ट रूप से समझाने के लिए धन्यवाद।" },
      { speaker: "Mrs. Bhatt", avatar: "📚", textEn: "You are welcome. There is a quiet reading zone on the mezzanine floor above.", textHi: "आपका स्वागत है। ऊपर वाली मंज़िल पर एक शांत वाचनालय क्षेत्र है।" }
    ]
  },
  {
    id: "d08_sc07",
    title: "Looking at Nostalgic Photos in a Family Album",
    titleHi: "पारिवारिक एल्बम में पुरानी तस्वीरों को देखकर चर्चा",
    context: "Grandmother Shanti shows old family photos to her granddaughter Ria.",
    situation: "Album photos with 'this is', 'that was', 'these were', 'those are'",
    characters: ["Grandmother Shanti", "Ria"],
    turns: [
      { speaker: "Ria", avatar: "👧", textEn: "Dadi, who is this handsome young man in the cricket uniform?", textHi: "दादी, क्रिकेट की वर्दी में यह सुंदर नौजवान कौन है?" },
      { speaker: "Grandmother Shanti", avatar: "👵", textEn: "That is your grandfather in 1968! There were sixty players in his university league.", textHi: "वह 1968 में तुम्हारे दादाजी हैं! उनकी विश्वविद्यालय लीग में साठ खिलाड़ी थे।" },
      { speaker: "Ria", avatar: "👧", textEn: "He looked so dashing! And who are these children on that swing?", textHi: "वे कितने शानदार लग रहे थे! और उस झूले पर ये बच्चे कौन हैं?" },
      { speaker: "Grandmother Shanti", avatar: "👵", textEn: "These were your father and your two uncles when they were toddlers.", textHi: "ये तुम्हारे पिताजी और तुम्हारे दो चाचा हैं जब वे छोटे बच्चे थे।" },
      { speaker: "Ria", avatar: "👧", textEn: "Look at that vintage car in the background! Was that an Ambassador?", textHi: "पीछे उस विंटेज कार को देखो! क्या वह एम्बेसडर कार थी?" },
      { speaker: "Grandmother Shanti", avatar: "👵", textEn: "Yes, that was our first white Ambassador car. There was so much excitement when we brought it home.", textHi: "हाँ, वह हमारी पहली सफ़ेद एम्बेसडर कार थी। जब हम उसे घर लाए थे तब बहुत उत्साह था।" },
      { speaker: "Ria", avatar: "👧", textEn: "Are those mountains in this photo Kashmir or Shimla?", textHi: "इस तस्वीर में दिखने वाले वे पहाड़ कश्मीर के हैं या शिमला के?" },
      { speaker: "Grandmother Shanti", avatar: "👵", textEn: "Those are the snow valleys of Pahalgam during our silver jubilee trip.", textHi: "वे हमारी सिल्वर जुबली यात्रा के दौरान पहलगाम की बर्फीली वादियाँ हैं।" },
      { speaker: "Ria", avatar: "👧", textEn: "There is so much warmth and history in this old photo album.", textHi: "इस पुराने फ़ोटो एल्बम में कितना प्यार और पारिवारिक इतिहास समाया हुआ है।" },
      { speaker: "Grandmother Shanti", avatar: "👵", textEn: "These photographs are our most precious family treasures, Ria.", textHi: "ये तस्वीरें हमारे परिवार की सबसे अनमोल धरोहर हैं, रिया।" }
    ]
  },
  {
    id: "d08_sc08",
    title: "Inquiring About Amenities at a Modern Sports Complex",
    titleHi: "खेल परिसर में सुविधाओं और मैदानों की जानकारी",
    context: "A sports enthusiast, Gaurav, inquires with the sports club manager, Mr. D'Souza.",
    situation: "Sports facilities using 'is there', 'are there', 'there is'",
    characters: ["Mr. D'Souza", "Gaurav"],
    turns: [
      { speaker: "Mr. D'Souza", avatar: "🏸", textEn: "Welcome to the Royal Sports Arena! How can I guide you through our club facilities?", textHi: "रॉयल स्पोर्ट्स एरिना में आपका स्वागत है! मैं आपको हमारे क्लब की सुविधाओं के बारे में कैसे बता सकता हूँ?" },
      { speaker: "Gaurav", avatar: "⚽", textEn: "Good morning! Is there an Olympic-sized heated swimming pool on the premises?", textHi: "शुभ प्रभात! क्या परिसर में 50 मीटर का गर्म पानी का स्विमिंग पूल उपलब्ध है?" },
      { speaker: "Mr. D'Souza", avatar: "🏸", textEn: "Yes, there is an eight-lane heated pool with certified life guards on duty.", textHi: "जी हाँ, यहाँ आठ लेन वाला पूल है और प्रशिक्षित लाइफगार्ड हमेशा ड्यूटी पर रहते हैं।" },
      { speaker: "Gaurav", avatar: "⚽", textEn: "Are there indoor wooden badminton courts available in the evening?", textHi: "क्या शाम के समय इंडोर लकड़ी के फ़र्श वाले बैडमिंटन कोर्ट उपलब्ध रहते हैं?" },
      { speaker: "Mr. D'Souza", avatar: "🏸", textEn: "There are six tournament-grade courts. You can book a court via our mobile app.", textHi: "यहाँ छह राष्ट्रीय स्तर के कोर्ट हैं। आप हमारे ऐप के ज़रिए कोर्ट बुक कर सकते हैं।" },
      { speaker: "Gaurav", avatar: "⚽", textEn: "Are those tennis courts behind the glass wall floodlit for night matches?", textHi: "क्या कांच की दीवार के पीछे वे टेनिस कोर्ट रात के मैचों के लिए फ्लडलाइट से लैस हैं?" },
      { speaker: "Mr. D'Souza", avatar: "🏸", textEn: "Yes, those four synthetic courts have professional LED floodlights.", textHi: "जी हाँ, उन चार सिंथेटिक कोर्टों में पेशेवर एलईडी फ्लडलाइट्स लगी हैं।" },
      { speaker: "Gaurav", avatar: "⚽", textEn: "Is there a steam sauna and physiotherapy clinic inside the locker area?", textHi: "क्या लॉकर क्षेत्र के अंदर स्टीम सौना और फिजियोथेरेपी क्लिनिक है?" },
      { speaker: "Mr. D'Souza", avatar: "🏸", textEn: "There is a full wellness spa with steam rooms and sports massage therapists.", textHi: "वहाँ स्टीम रूम और खेल मालिश चिकित्सकों के साथ एक पूरा स्पा केंद्र है।" },
      { speaker: "Gaurav", avatar: "⚽", textEn: "These facilities are truly world-class. I want to register for annual membership!", textHi: "ये सुविधाएँ सचमुच विश्वस्तरीय हैं। मैं वार्षिक सदस्यता के लिए पंजीकरण कराना चाहता हूँ!" }
    ]
  },
  {
    id: "d08_sc09",
    title: "Checking Food Items in a Takeout Restaurant Delivery",
    titleHi: "रेस्तरां से आए पार्सल में खाने के डिब्बों की जाँच",
    context: "Rohan and Ankit open a delivery parcel from a Mughlai restaurant.",
    situation: "Verifying items with 'is there', 'are there', 'this is', 'these are'",
    characters: ["Rohan", "Ankit"],
    turns: [
      { speaker: "Rohan", avatar: "🥡", textEn: "Ankit, the food delivery is here! Let's check the contents against the receipt.", textHi: "अंकित, खाने की डिलीवरी आ गई! चलो रसीद से डिब्बों का मिलान कर लेते हैं।" },
      { speaker: "Ankit", avatar: "🍽️", textEn: "Sure! This top container is the chicken biryani with fried onions.", textHi: "ज़रूर! यह ऊपर वाला डिब्बा तली हुई प्याज वाली चिकन बिरयानी का है।" },
      { speaker: "Rohan", avatar: "🥡", textEn: "Is there a portion of mint raita and salan sauce included?", textHi: "क्या इसमें पुदीना रायता और सालन की ग्रेवी शामिल है?" },
      { speaker: "Ankit", avatar: "🍽️", textEn: "Yes, there is raita in this small container, and here are two packets of spiced chutney.", textHi: "हाँ, इस छोटे डिब्बे में रायता है, और यहाँ मसालेदार चटनी के दो पैकेट हैं।" },
      { speaker: "Rohan", avatar: "🥡", textEn: "Are there butter naans in that foil pouch?", textHi: "क्या उस फ़ॉइल पाउच में बटर नान हैं?" },
      { speaker: "Ankit", avatar: "🍽️", textEn: "These are four garlic naans, piping hot and wrapped in silver foil.", textHi: "ये चार गार्लिक नान हैं, जो गरमा-गरम हैं और सिल्वर फ़ॉइल में लिपटे हुए हैं।" },
      { speaker: "Rohan", avatar: "🥡", textEn: "What about the paneer butter masala? Is that in the deep plastic tub?", textHi: "पनीर बटर मसाला कहाँ है? क्या वह गहरे प्लास्टिक के डिब्बे में है?" },
      { speaker: "Ankit", avatar: "🍽️", textEn: "Yes, that is the paneer gravy. Look at those fresh cilantro leaves sprinkled on top.", textHi: "हाँ, वही पनीर की ग्रेवी है। ऊपर छिड़के हुए ताज़े धनिये को देखो।" },
      { speaker: "Rohan", avatar: "🥡", textEn: "Are there dessert containers at the bottom of the bag?", textHi: "क्या बैग के नीचे मीठे के डिब्बे भी हैं?" },
      { speaker: "Ankit", avatar: "🍽️", textEn: "There are two cups of creamy phirni. The entire order is completely accurate!", textHi: "यहाँ क्रीमी फिरनी के दो कप हैं। पूरा ऑर्डर बिल्कुल सही और पूरा है!" }
    ]
  },
  {
    id: "d08_sc10",
    title: "Explaining Ancient Artifacts at the National Museum",
    titleHi: "राष्ट्रीय संग्रहालय में प्राचीन कलाकृतियों का विवरण",
    context: "A museum curator, Dr. Sen, explains Harappan civilization artifacts to college history students.",
    situation: "Museum exhibits with 'this', 'that', 'these', 'those', 'there was/were'",
    characters: ["Dr. Sen", "Student Meera"],
    turns: [
      { speaker: "Dr. Sen", avatar: "🏛️", textEn: "Welcome to Gallery One. This bronze figurine is the famous 'Dancing Girl' from Mohenjo-daro.", textHi: "गैलरी एक में स्वागत है। यह कांस्य मूर्ति मोहनजोदड़ो की प्रसिद्ध 'नर्तकी की मूर्ति' है।" },
      { speaker: "Student Meera", avatar: "🔍", textEn: "It is remarkably well-preserved! How old is this sculpture?", textHi: "यह आश्चर्यजनक रूप से सुरक्षित है! यह मूर्ति कितनी पुरानी है?" },
      { speaker: "Dr. Sen", avatar: "🏛️", textEn: "This artifact is nearly 4,500 years old. There were highly advanced metallurgy skills in that era.", textHi: "यह कलाकृति लगभग 4,500 वर्ष पुरानी है। उस युग में धातु विज्ञान का अत्यधिक उन्नत ज्ञान था।" },
      { speaker: "Student Meera", avatar: "🔍", textEn: "And what are those terracotta seals inside that glass showcase?", textHi: "और उस कांच के शोकेस के अंदर वे पकी मिट्टी की मुहरें क्या हैं?" },
      { speaker: "Dr. Sen", avatar: "🏛️", textEn: "Those are trade seals with animal carvings. There is a unicorn and a humped bull on these two.", textHi: "वे व्यापारिक मुहरें हैं जिन पर जानवरों की नक्काशी है। इन दोनों पर एक सींग वाला पशु और कूबड़ वाला बैल है।" },
      { speaker: "Student Meera", avatar: "🔍", textEn: "Is there an undeciphered script engraved along the top edge?", textHi: "क्या ऊपरी किनारे पर कोई ऐसी लिपि खुदी है जिसे अभी तक पढ़ा नहीं जा सका है?" },
      { speaker: "Dr. Sen", avatar: "🏛️", textEn: "Yes, there are ancient Indus pictographs that remain an intriguing mystery today.", textHi: "हाँ, प्राचीन सिंधु चित्रलिपि के प्रतीक हैं जो आज भी एक रहस्य बने हुए हैं।" },
      { speaker: "Student Meera", avatar: "🔍", textEn: "Are these carnelian beads in this display case from ancient jewelry?", textHi: "क्या इस डिस्प्ले केस में रखे ये लाल मनके प्राचीन आभूषणों के हैं?" },
      { speaker: "Dr. Sen", avatar: "🏛️", textEn: "These were necklaces worn by noble merchants. There was widespread international trade with Mesopotamia.", textHi: "ये धनी व्यापारियों द्वारा पहने जाने वाले हार थे। उस समय मेसोपोटामिया के साथ व्यापक अंतरराष्ट्रीय व्यापार होता था।" },
      { speaker: "Student Meera", avatar: "🔍", textEn: "This historical gallery brings our textbook chapters to vibrant life!", textHi: "यह ऐतिहासिक दीर्घा हमारी पाठ्यपुस्तक के अध्यायों को जीवंत कर देती है!" }
    ]
  }
];
