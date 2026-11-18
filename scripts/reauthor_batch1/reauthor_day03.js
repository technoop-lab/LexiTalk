import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const day03Dialogues = [
  {
    id: "d03_sc01",
    title: "Tech Innovation Summit: Startup Award Celebration",
    titleHi: "टेक इनोवेशन समिट: स्टार्टअप पुरस्कार का जश्न",
    context: "Tech co-founders Kunal and Riya react as their AI healthcare venture wins the prestigious Innovation Trophy.",
    situation: "Deploying high-energy positive exclamations ('Wow!', 'Bravo!', 'Marvelous!', 'What a fantastic achievement!').",
    characters: ["Kunal", "Riya"],
    turns: [
      {
        speaker: "Kunal",
        avatar: "👨‍💻",
        textEn: "Listen! They are announcing the winner of the National Innovation Award on the main stage!",
        textHi: "सुनो! वे मुख्य मंच पर राष्ट्रीय नवाचार पुरस्कार के विजेता की घोषणा कर रहे हैं!"
      },
      {
        speaker: "Riya",
        avatar: "👩‍💻",
        textEn: "Hush! The jury chairman has just opened the golden envelope.",
        textHi: "शांत रहो! जूरी अध्यक्ष ने अभी-अभी सुनहरा लिफाफा खोला है।"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💻",
        textEn: "Good heavens! He just called our company name, MedTech AI!",
        textHi: "अरे बाप रे! उन्होंने अभी-अभी हमारी कंपनी का नाम, मेडटेक एआई पुकारा है!"
      },
      {
        speaker: "Riya",
        avatar: "👩‍💻",
        textEn: "Wow! What a phenomenal surprise! We actually won first place!",
        textHi: "वाह! कितना अद्भुत आश्चर्य! हम सचमुच पहले स्थान पर रहे!"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💻",
        textEn: "Bravo, Riya! Our team's relentless effort over the last two years has truly paid off!",
        textHi: "शाबाश, रिया! पिछले दो वर्षों में हमारी टीम के अथक प्रयास का सचमुच फल मिला है!"
      },
      {
        speaker: "Riya",
        avatar: "👩‍💻",
        textEn: "How wonderful! Look at the entire auditorium standing up and applauding!",
        textHi: "कितना शानदार! देखो पूरा सभागार खड़ा होकर तालियां बजा रहा है!"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💻",
        textEn: "Terrific! What a momentous milestone for our entire engineering group!",
        textHi: "शानदार! हमारे पूरे इंजीनियरिंग समूह के लिए यह कितना बड़ा मील का पत्थर है!"
      },
      {
        speaker: "Riya",
        avatar: "👩‍💻",
        textEn: "Splendid! Let us walk up to the podium together to receive the trophy.",
        textHi: "अति उत्तम! आइए ट्रॉफी लेने के लिए एक साथ मंच की ओर चलें।"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💻",
        textEn: "Behold that trophy—it looks absolutely magnificent under the spotlights!",
        textHi: "उस ट्रॉफी को देखो—स्पॉटलाइट के नीचे वह कितनी भव्य दिख रही है!"
      },
      {
        speaker: "Riya",
        avatar: "👩‍💻",
        textEn: "What a dream come true! I am overwhelmed with joy!",
        textHi: "क्या सपना सच हुआ है! मैं खुशी से अभिभूत हूँ!"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💻",
        textEn: "Marvelous! Here is the jury presenting the crystal plaque to you.",
        textHi: "अद्भुत! यह रही जूरी जो आपको क्रिस्टल शील्ड भेंट कर रही है।"
      },
      {
        speaker: "Riya",
        avatar: "👩‍💻",
        textEn: "Thank you so much! What an extraordinary honor for our early-stage research team!",
        textHi: "बहुत-बहुत धन्यवाद! हमारे प्रारंभिक चरण की शोध टीम के लिए यह कितना असाधारण सम्मान है!"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💻",
        textEn: "Look at the cameras flashing! What a proud moment for all of us!",
        textHi: "कैमरों की चमक देखो! हम सभी के लिए यह कितना गर्व का क्षण है!"
      },
      {
        speaker: "Riya",
        avatar: "👩‍💻",
        textEn: "Indeed! We must call our mentors and families right after stepping off the stage.",
        textHi: "सचमुच! मंच से उतरते ही हमें अपने सलाहकारों और परिवारों को फोन करना चाहिए।"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💻",
        textEn: "They will be ecstatic! What thrilling news to share tonight!",
        textHi: "वे खुशी से झूम उठेंगे! आज रात साझा करने के लिए कितनी रोमांचक खबर है!"
      },
      {
        speaker: "Riya",
        avatar: "👩‍💻",
        textEn: "Hurrah for MedTech AI! Tonight calls for a grand team celebration!",
        textHi: "मेडटेक एआई की जय हो! आज रात टीम के साथ एक भव्य जश्न बनता है!"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💻",
        textEn: "Absolutely! What a memorable night!",
        textHi: "बिल्कुल! कितनी यादगार रात है यह!"
      },
      {
        speaker: "Riya",
        avatar: "👩‍💻",
        textEn: "Truly unforgettable! Let us join the press conference.",
        textHi: "सचमुच अविस्मरणीय! आइए प्रेस कॉन्फ्रेंस में शामिल हों।"
      },
      {
        speaker: "Kunal",
        avatar: "👨‍💻",
        textEn: "Lead the way, Champion!",
        textHi: "आगे बढ़ो, चैंपियन!"
      },
      {
        speaker: "Riya",
        avatar: "👩‍💻",
        textEn: "Bravo to all of us!",
        textHi: "हम सभी को शाबाशी!"
      }
    ]
  },
  {
    id: "d03_sc02",
    title: "Monsoon Highway Drive: Sudden Alarm & Immense Relief",
    titleHi: "मानसून हाईवे पर ड्राइव: अचानक चेतावनी और बड़ी राहत",
    context: "During heavy rain on an expressway, driver Siddharth and passenger Pooja encounter a fallen tree branch.",
    situation: "Deploying sharp caution exclamations ('Watch out!', 'Look out!') and deep relief ('Thank goodness!', 'What a relief!').",
    characters: ["Pooja", "Siddharth"],
    turns: [
      {
        speaker: "Pooja",
        avatar: "👩‍💼",
        textEn: "Watch out, Siddharth! There is a heavy fallen tree branch right in our lane!",
        textHi: "सावधान, सिद्धार्थ! हमारी लेन में ठीक सामने एक भारी पेड़ की डाल गिरी हुई है!"
      },
      {
        speaker: "Siddharth",
        avatar: "👨‍💼",
        textEn: "Good heavens! The road is extremely slick from the torrential downpour!",
        textHi: "हे भगवान! मूसलाधार बारिश से सड़क बहुत ज्यादा फिसलने वाली हो गई है!"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍💼",
        textEn: "Look out for the oncoming truck in the adjacent lane!",
        textHi: "बगल वाली लेन में सामने से आ रहे ट्रक से बचकर!"
      },
      {
        speaker: "Siddharth",
        avatar: "👨‍💼",
        textEn: "I am braking gently to prevent the car from skidding. Hold on tight!",
        textHi: "कार को फिसलने से बचाने के लिए मैं धीरे-धीरे ब्रेक लगा रहा हूँ। कसकर पकड़ो!"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍💼",
        textEn: "Oh no! We are coming very close to the guardrail!",
        textHi: "अरे नहीं! हम रेलिंग के बहुत करीब आ रहे हैं!"
      },
      {
        speaker: "Siddharth",
        avatar: "👨‍💼",
        textEn: "Steady now... the anti-lock brakes engaged smoothly! The car has stopped safely on the shoulder.",
        textHi: "संभल गए... एंटी-लॉक ब्रेक सुचारू रूप से लग गए! कार सड़क किनारे सुरक्षित रुक गई है।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍💼",
        textEn: "Thank goodness! What an enormous relief! That was terrifyingly close!",
        textHi: "भगवान का शुक्र है! कितनी भारी राहत मिली! वह बेहद खौफनाक हद तक करीब था!"
      },
      {
        speaker: "Siddharth",
        avatar: "👨‍💼",
        textEn: "Phew! My heart was racing at a hundred miles an hour.",
        textHi: "उफ्फ! मेरा दिल सौ मील प्रति घंटे की रफ्तार से धड़क रहा था।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍💼",
        textEn: "What a relief that nobody was hurt and the vehicle avoided any collision!",
        textHi: "कितनी राहत की बात है कि किसी को चोट नहीं आई और वाहन किसी भी टक्कर से बच गया!"
      },
      {
        speaker: "Siddharth",
        avatar: "👨‍💼",
        textEn: "Thank God for your quick eyes and timely warning, Pooja!",
        textHi: "पूजा, तुम्हारी तेज नजर और समय पर दी गई चेतावनी के लिए भगवान का लाख-लाख धन्यवाद!"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍💼",
        textEn: "Your calm steering saved us from a disastrous spin. Bravo for keeping your composure!",
        textHi: "तुम्हारे शांत स्टीयरिंग ने हमें एक भयानक चक्कर से बचा लिया। अपना संयम बनाए रखने के लिए शाबाश!"
      },
      {
        speaker: "Siddharth",
        avatar: "👨‍💼",
        textEn: "Look there! Highway patrol is already setting up orange warning cones around the fallen branch.",
        textHi: "उधर देखो! हाईवे पेट्रोल पहले से ही गिरी हुई शाखा के चारों ओर नारंगी चेतावनी शंकु लगा रही है।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍💼",
        textEn: "What a prompt response from the emergency roadside team!",
        textHi: "आपातकालीन सड़क सुरक्षा टीम की ओर से कितनी त्वरित प्रतिक्रिया है!"
      },
      {
        speaker: "Siddharth",
        avatar: "👨‍💼",
        textEn: "Indeed. Let us take a two-minute breather before we resume our drive at a slower speed.",
        textHi: "सचमुच। धीमी गति से अपनी यात्रा फिर से शुरू करने से पहले आइए दो मिनट सांस ले लें।"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍💼",
        textEn: "Good idea. Take a sip of water.",
        textHi: "अच्छा विचार है। पानी की एक घूंट पी लो।"
      },
      {
        speaker: "Siddharth",
        avatar: "👨‍💼",
        textEn: "Thank you. What a dramatic incident for a rainy afternoon!",
        textHi: "धन्यवाद। बारिश की दोपहर के लिए यह कितना नाटकीय वाकया था!"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍💼",
        textEn: "Truly! Thank goodness we are both safe and sound.",
        textHi: "सचमुच! भगवान का शुक्र है कि हम दोनों बिल्कुल सुरक्षित और सही-सलामत हैं।"
      },
      {
        speaker: "Siddharth",
        avatar: "👨‍💼",
        textEn: "Ready to proceed cautiously?",
        textHi: "सावधानी से आगे बढ़ने के लिए तैयार हो?"
      },
      {
        speaker: "Pooja",
        avatar: "👩‍💼",
        textEn: "Yes, drive slowly and safely.",
        textHi: "हाँ, धीरे और सुरक्षित चलाओ।"
      },
      {
        speaker: "Siddharth",
        avatar: "👨‍💼",
        textEn: "Will do. Here we go.",
        textHi: "अवश्य करूँगा। चलिए आगे बढ़ते हैं।"
      }
    ]
  },
  {
    id: "d03_sc03",
    title: "Contemporary Art Gallery: Awe & Aesthetic Admiration",
    titleHi: "समकालीन कला दीर्घा: विस्मय और सौंदर्यपरक प्रशंसा",
    context: "Art connoisseur Natasha and curator Mr. Sen admire a newly unveiled canvas at the modern art triennale.",
    situation: "Deploying expressions of aesthetic wonder ('How breathtaking!', 'Marvelous!', 'Splendid!', 'What exquisite craftsmanship!').",
    characters: ["Mr. Sen", "Natasha"],
    turns: [
      {
        speaker: "Natasha",
        avatar: "👩‍🎨",
        textEn: "Wow! Look at this massive oil canvas in the central rotunda!",
        textHi: "वाह! केंद्रीय गोल हॉल में इस विशाल ऑयल कैनवास को देखिए!"
      },
      {
        speaker: "Mr. Sen",
        avatar: "👨‍🎨",
        textEn: "Behold! It is the masterwork by artist Devyani Roy, titled 'Symphony of Dawn'.",
        textHi: "देखिए! यह कलाकार देवयानी रॉय की मास्टरपीस है, जिसका शीर्षक 'सिम्फनी ऑफ डॉन' है।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍🎨",
        textEn: "How breathtaking! The subtle gradient of crimson and gold across the horizon is mesmerizing!",
        textHi: "कितना विहंगम और अद्भुत है! क्षितिज पर गहरे लाल और सुनहरे रंग का यह सूक्ष्म ढलान मंत्रमुग्ध कर देने वाला है!"
      },
      {
        speaker: "Mr. Sen",
        avatar: "👨‍🎨",
        textEn: "Splendid! The brushwork reflects twelve months of painstaking geometric layering.",
        textHi: "अति उत्तम! ब्रश का काम बारह महीनों की कठिन ज्यामितीय परतों को दर्शाता है।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍🎨",
        textEn: "Marvelous! What incredible emotional depth it conveys with just natural pigments!",
        textHi: "अद्भुत! केवल प्राकृतिक रंगों से यह कितनी अविश्वसनीय भावनात्मक गहराई व्यक्त करता है!"
      },
      {
        speaker: "Mr. Sen",
        avatar: "👨‍🎨",
        textEn: "Look closely at the texture near the lower corner—what exquisite craftsmanship!",
        textHi: "नीचे के कोने के पास की बनावट को ध्यान से देखिए—क्या बेजोड़ कारीगरी है!"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍🎨",
        textEn: "Good heavens! The layered gold leaf catches the gallery illumination perfectly!",
        textHi: "अरे वाह! सोने की पत्ती की परतें गैलरी की रोशनी को कितनी खूबसूरती से पकड़ती हैं!"
      },
      {
        speaker: "Mr. Sen",
        avatar: "👨‍🎨",
        textEn: "How delightful that you noticed that nuance! Devyani applied the gold leaf by hand under candlelight.",
        textHi: "कितनी अच्छी बात है कि आपने उस सूक्ष्मता को देखा! देवयानी ने मोमबत्ती की रोशनी में हाथ से सोने की पत्ती लगाई थी।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍🎨",
        textEn: "What dedication! What an absolute triumph of contemporary Indian art!",
        textHi: "क्या समर्पण है! समकालीन भारतीय कला की यह कितनी बड़ी विजय है!"
      },
      {
        speaker: "Mr. Sen",
        avatar: "👨‍🎨",
        textEn: "Bravo to her vision! The national museum has already offered to acquire it for their permanent gallery.",
        textHi: "उनकी दृष्टि को शाबाशी! राष्ट्रीय संग्रहालय ने इसे अपनी स्थायी दीर्घा के लिए प्राप्त करने की पेशकश पहले ही कर दी है।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍🎨",
        textEn: "What wonderful news! It truly deserves a prominent public spotlight.",
        textHi: "कितनी शानदार खबर है! यह सचमुच एक प्रमुख सार्वजनिक मंच की हकदार है।"
      },
      {
        speaker: "Mr. Sen",
        avatar: "👨‍🎨",
        textEn: "Step over to this side—look at how the lighting shifts the shadows dynamically.",
        textHi: "इस तरफ आइए—देखिए कि रोशनी कैसे परछाइयों को जीवंत रूप से बदलती है।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍🎨",
        textEn: "Unbelievable! It almost feels like the canvas is breathing.",
        textHi: "अविश्वसनीय! ऐसा लगता है मानो कैनवास सचमुच सांस ले रहा हो।"
      },
      {
        speaker: "Mr. Sen",
        avatar: "👨‍🎨",
        textEn: "What a poetic observation, Natasha!",
        textHi: "नताशा, कितना काव्यात्मक अवलोकन है!"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍🎨",
        textEn: "I am thoroughly enchanted by this exhibition. What a marvelous curation, Mr. Sen!",
        textHi: "मैं इस प्रदर्शनी से पूरी तरह मंत्रमुग्ध हो गई हूँ। मिस्टर सेन, क्या शानदार क्यूरेशन है!"
      },
      {
        speaker: "Mr. Sen",
        avatar: "👨‍🎨",
        textEn: "Thank you kindly! It is a joy to share these artistic treasures with appreciative visitors.",
        textHi: "बहुत-बहुत धन्यवाद! कला-पारखी दर्शकों के साथ इन कलात्मक खजानों को साझा करना एक सच्चा आनंद है।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍🎨",
        textEn: "Shall we explore the sculpture court next?",
        textHi: "क्या हम आगे मूर्तिकला प्रांगण का अवलोकन करें?"
      },
      {
        speaker: "Mr. Sen",
        avatar: "👨‍🎨",
        textEn: "With pleasure! Prepare to be astonished once more.",
        textHi: "सहर्ष! एक बार फिर आश्चर्यचकित होने के लिए तैयार हो जाइए।"
      },
      {
        speaker: "Natasha",
        avatar: "👩‍🎨",
        textEn: "Splendid! Let us proceed.",
        textHi: "अति उत्तम! चलिए आगे बढ़ते हैं।"
      },
      {
        speaker: "Mr. Sen",
        avatar: "👨‍🎨",
        textEn: "Right this way, please.",
        textHi: "कृपया इस तरफ से आएं।"
      }
    ]
  },
  {
    id: "d03_sc04",
    title: "Baking Competition: Sudden Crisis & Ingenious Recovery",
    titleHi: "बेकिंग प्रतियोगिता: अचानक संकट और सूझबूझ से बचाव",
    context: "Pastry chefs Arvind and Mehak face a fallen tiered cake during a live culinary final and mount a rapid recovery.",
    situation: "Moving from dismay ('Oh no!', 'Alas!', 'What a disaster!') to relief and triumph ('Thank goodness!', 'Bravo!').",
    characters: ["Arvind", "Mehak"],
    turns: [
      {
        speaker: "Arvind",
        avatar: "👨‍🍳",
        textEn: "Oh no! Look out, Mehak! The top tier of the fondant cake is tilting toward the edge!",
        textHi: "अरे नहीं! बचो महक! कलाकंद केक की सबसे ऊपरी मंजिल किनारे की ओर झुक रही है!"
      },
      {
        speaker: "Mehak",
        avatar: "👩‍🍳",
        textEn: "Good heavens! Catch the support dowel quickly before it collapses!",
        textHi: "हे भगवान! इसके गिरने से पहले सपोर्ट की लकड़ी को जल्दी पकड़ो!"
      },
      {
        speaker: "Arvind",
        avatar: "👨‍🍳",
        textEn: "Alas! The chocolate ganache garnish slid onto the counter tray!",
        textHi: "हाय! चॉकलेट गनाश की सजावट फिसलकर काउंटर ट्रे पर गिर गई!"
      },
      {
        speaker: "Mehak",
        avatar: "👩‍🍳",
        textEn: "What a mess! But don't panic—the core sponge structure is completely intact!",
        textHi: "कितना बड़ा रायता फैल गया! लेकिन घबराओ मत—मुख्य स्पंज संरचना पूरी तरह सुरक्षित है!"
      },
      {
        speaker: "Arvind",
        avatar: "👨‍🍳",
        textEn: "Thank goodness! What a relief that the centerpiece did not hit the floor!",
        textHi: "भगवान का शुक्र है! कितनी बड़ी राहत मिली कि मुख्य केक फर्श पर नहीं गिरा!"
      },
      {
        speaker: "Mehak",
        avatar: "👩‍🍳",
        textEn: "Quick! Hand me the blowtorch and the chilled raspberry glaze.",
        textHi: "जल्दी करो! मुझे ब्लोटॉर्च और ठंडी रास्पबेरी ग्लेज़ पकड़ाओ।"
      },
      {
        speaker: "Arvind",
        avatar: "👨‍🍳",
        textEn: "Here they are! What are you planning to construct?",
        textHi: "ये रहे! तुम क्या बनाने की योजना बना रही हो?"
      },
      {
        speaker: "Mehak",
        avatar: "👩‍🍳",
        textEn: "We can transform the tilt into an avant-garde deconstructed cascade with spun sugar!",
        textHi: "हम इस झुकाव को बुनी हुई चीनी के साथ एक आधुनिक अवांट-गार्डे झरने वाले डिजाइन में बदल सकते हैं!"
      },
      {
        speaker: "Arvind",
        avatar: "👨‍🍳",
        textEn: "Wow! What a brilliant and inventive recovery!",
        textHi: "वाह! कितना शानदार और रचनात्मक बचाव है!"
      },
      {
        speaker: "Mehak",
        avatar: "👩‍🍳",
        textEn: "Look at the spun sugar threads forming—how marvelous they look under the studio lights!",
        textHi: "बनते हुए चीनी के तारों को देखो—स्टूडियो लाइटों के नीचे वे कितने अद्भुत दिख रहे हैं!"
      },
      {
        speaker: "Arvind",
        avatar: "👨‍🍳",
        textEn: "Splendid! The judges are looking directly at our station with intrigued smiles!",
        textHi: "अति उत्तम! निर्णायक मंडल उत्सुक मुस्कान के साथ सीधे हमारे काउंटर को देख रहा है!"
      },
      {
        speaker: "Mehak",
        avatar: "👩‍🍳",
        textEn: "Hurry, Arvind! Thirty seconds remaining on the countdown clock!",
        textHi: "जल्दी करो, अरविंद! उल्टी गिनती की घड़ी पर तीस सेकंड बचे हैं!"
      },
      {
        speaker: "Arvind",
        avatar: "👨‍🍳",
        textEn: "Placing the fresh edible gold flakes right on top... done with five seconds to spare!",
        textHi: "ताजा खाने योग्य सोने की पत्तियां ठीक ऊपर रख रहा हूँ... पांच सेकंड बाकी रहते पूरा हो गया!"
      },
      {
        speaker: "Mehak",
        avatar: "👩‍🍳",
        textEn: "Bravo! What a thrilling finish to a chaotic round!",
        textHi: "शाबाश! इतने अफरा-तफरी भरे दौर का क्या रोमांचक समापन हुआ है!"
      },
      {
        speaker: "Arvind",
        avatar: "👨‍🍳",
        textEn: "What an adrenaline rush! My hands are still trembling, but the presentation looks stunning!",
        textHi: "क्या जबर्दस्त रोमांच था! मेरे हाथ अभी भी कांप रहे हैं, लेकिन प्रस्तुति शानदार दिख रही है!"
      },
      {
        speaker: "Mehak",
        avatar: "👩‍🍳",
        textEn: "Terrific teamwork, Arvind! No matter what happens, we gave it our absolute best.",
        textHi: "शानदार टीम वर्क, अरविंद! चाहे जो भी परिणाम हो, हमने अपना सर्वश्रेष्ठ दिया।"
      },
      {
        speaker: "Arvind",
        avatar: "👨‍🍳",
        textEn: "Indeed! Here come the judges for the tasting.",
        textHi: "सचमुच! ये रहे निर्णायक स्वाद चखने के लिए आ रहे हैं।"
      },
      {
        speaker: "Mehak",
        avatar: "👩‍🍳",
        textEn: "Fingers crossed!",
        textHi: "शुभकामनाएँ!"
      },
      {
        speaker: "Arvind",
        avatar: "👨‍🍳",
        textEn: "Bravo to us!",
        textHi: "हमारी जीत हो!"
      },
      {
        speaker: "Mehak",
        avatar: "👩‍🍳",
        textEn: "Well done!",
        textHi: "बहुत बढ़िया!"
      }
    ]
  },
  {
    id: "d03_sc05",
    title: "Cricket Championship: Final Over Thriller",
    titleHi: "क्रिकेट चैम्पियनशिप: अंतिम ओवर का रोमांच",
    context: "Spectators Varun and Sameer watch the final ball of a nail-biting stadium cricket final.",
    situation: "Deploying dramatic sports exclamations ('Good heavens!', 'Unbelievable!', 'What a shot!', 'Bravo!').",
    characters: ["Varun", "Sameer"],
    turns: [
      {
        speaker: "Varun",
        avatar: "👨‍💼",
        textEn: "Good heavens! We need six runs off the very last ball to win the championship cup!",
        textHi: "हे भगवान! चैम्पियनशिप कप जीतने के लिए हमें आखिरी गेंद पर छह रन चाहिए!"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💼",
        textEn: "Hush! The bowler is starting his run-up from the far boundary!",
        textHi: "शांत रहो! गेंदबाज बाउंड्री के छोर से अपना रन-अप शुरू कर रहा है!"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💼",
        textEn: "Look at the batsman stepping out of his crease!",
        textHi: "बल्लेबाज को अपनी क्रीज से बाहर निकलते हुए देखो!"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💼",
        textEn: "Crack! What a thunderous sound off the bat!",
        textHi: "तड़ाक! बल्ले से कितनी गूंजती हुई आवाज आई!"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💼",
        textEn: "Wow! Look at that ball sailing high into the night sky!",
        textHi: "वाह! उस गेंद को रात के आसमान में ऊँचा उड़ते हुए देखो!"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💼",
        textEn: "Watch out for the fielder tracking back near the deep mid-wicket boundary!",
        textHi: "डीप मिड-विकेट बाउंड्री के पास पीछे की ओर दौड़ रहे फील्डर से बचकर!"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💼",
        textEn: "It cleared his outstretched fingers! It has gone all the way over the ropes for a maximum!",
        textHi: "वह उसकी उँगलियों के ऊपर से निकल गई! वह बाउंड्री रस्सियों के पार पूरे छह रन के लिए चली गई है!"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💼",
        textEn: "Unbelievable! What a sensational, mind-boggling six!",
        textHi: "अविश्वसनीय! क्या सनसनीखेज और होश उड़ा देने वाला छक्का है!"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💼",
        textEn: "Bravo! What a breathtaking victory from the jaws of defeat!",
        textHi: "शाबाश! हार के मुंह से निकलकर यह कितनी लुभावनी जीत है!"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💼",
        textEn: "How magnificent! Look at the entire stadium erupting in sheer ecstasy!",
        textHi: "कितना भव्य नजारा है! देखो पूरा स्टेडियम खुशी से कैसे झूम उठा है!"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💼",
        textEn: "What a match! I have never witnessed such nerve-wracking drama in my entire life!",
        textHi: "क्या मैच था! मैंने अपनी पूरी जिंदगी में इतना दिल थाम देने वाला नाटक कभी नहीं देखा!"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💼",
        textEn: "What an incredible triumph for our national squad!",
        textHi: "हमारे राष्ट्रीय दल के लिए यह कितनी अविश्वसनीय जीत है!"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💼",
        textEn: "Look at the fireworks illuminating the night sky above the stands!",
        textHi: "स्टैंड्स के ऊपर रात के आसमान को रोशन करती आतिशबाजी को देखो!"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💼",
        textEn: "Splendid! The captain is being hoisted on the shoulders of his teammates!",
        textHi: "अति उत्तम! कप्तान को उनके साथियों द्वारा कंधों पर उठाया जा रहा है!"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💼",
        textEn: "Terrific scenes! Truly an unforgettable evening of sports history!",
        textHi: "शानदार दृश्य! खेल इतिहास की सचमुच एक अविस्मरणीय शाम!"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💼",
        textEn: "My voice is completely hoarse from screaming, but what a joy!",
        textHi: "चिल्लाते-चिल्लाते मेरी आवाज बिल्कुल बैठ गई है, लेकिन क्या आनंद है!"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💼",
        textEn: "Hurrah for the champions!",
        textHi: "चैंपियनों की जय हो!"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💼",
        textEn: "Champions forever! What a game!",
        textHi: "सदा के लिए चैंपियन! क्या खेल था!"
      },
      {
        speaker: "Varun",
        avatar: "👨‍💼",
        textEn: "Let us celebrate!",
        textHi: "आइए जश्न मनाएं!"
      },
      {
        speaker: "Sameer",
        avatar: "👨‍💼",
        textEn: "Absolutely!",
        textHi: "बिल्कुल!"
      }
    ]
  },
  {
    id: "d03_sc06",
    title: "Hospital Waiting Lounge: Surgery Success & Profound Relief",
    titleHi: "अस्पताल का प्रतीक्षालय: सर्जरी की सफलता और गहरी राहत",
    context: "Family members Anjali and Vivek receive an update from Dr. Kulkarni following a critical cardiac operation.",
    situation: "Deploying solemn relief and profound gratitude ('Thank goodness!', 'What a relief!', 'How wonderful!', 'What a blessing!').",
    characters: ["Dr. Kulkarni", "Anjali", "Vivek"],
    turns: [
      {
        speaker: "Vivek",
        avatar: "👨‍💼",
        textEn: "Look, Anjali! Dr. Kulkarni is coming out of the operating theater corridor!",
        textHi: "देखो अंजलि! डॉ. कुलकर्णी ऑपरेशन थिएटर के गलियारे से बाहर आ रहे हैं!"
      },
      {
        speaker: "Anjali",
        avatar: "👩‍💼",
        textEn: "Good heavens, my hands are shaking with nervous anticipation!",
        textHi: "हे भगवान, घबराहट और चिंता से मेरे हाथ कांप रहे हैं!"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "Good news, Anjali and Vivek! The four-hour bypass surgery was a complete and flawless success.",
        textHi: "अच्छी खबर है, अंजलि और विवेक! चार घंटे की बाईपास सर्जरी पूरी तरह और त्रुटिहीन रूप से सफल रही।"
      },
      {
        speaker: "Anjali",
        avatar: "👩‍💼",
        textEn: "Thank goodness! Oh, what an immense, overwhelming relief!",
        textHi: "भगवान का लाख-लाख शुक्र है! ओह, कितनी विशाल और असीम राहत मिली है!"
      },
      {
        speaker: "Vivek",
        avatar: "👨‍💼",
        textEn: "What a blessing! Thank you so very much, Doctor, from the bottom of our hearts!",
        textHi: "ईश्वर की क्या असीम कृपा है! डॉक्टर साहब, हमारे दिल की गहराइयों से आपका बहुत-बहुत धन्यवाद!"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "Your father's vital signs are remarkably stable, and he is resting comfortably in the post-operative recovery unit.",
        textHi: "आपके पिताजी के स्वास्थ्य के सभी प्रमुख संकेत आश्चर्यजनक रूप से स्थिर हैं, और वे रिकवरी यूनिट में आराम कर रहे हैं।"
      },
      {
        speaker: "Anjali",
        avatar: "👩‍💼",
        textEn: "How wonderful! We were praying continuously throughout the morning.",
        textHi: "कितनी सुखद खबर है! हम पूरी सुबह लगातार प्रार्थना कर रहे थे।"
      },
      {
        speaker: "Vivek",
        avatar: "👨‍💼",
        textEn: "When will we be able to see him, Doctor?",
        textHi: "डॉक्टर, हम उनसे कब मिल सकेंगे?"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "You may visit him for a few minutes around five o'clock once the anesthesia wears off completely.",
        textHi: "एनेस्थीसिया का असर पूरी तरह खत्म होने के बाद शाम लगभग पांच बजे आप उनसे कुछ मिनटों के लिए मिल सकते हैं।"
      },
      {
        speaker: "Anjali",
        avatar: "👩‍💼",
        textEn: "What reassuring news! We are deeply indebted to your surgical team's expertise.",
        textHi: "कितनी आश्वस्त करने वाली खबर है! हम आपकी सर्जिकल टीम की विशेषज्ञता के सदैव ऋणी रहेंगे।"
      },
      {
        speaker: "Dr. Kulkarni",
        avatar: "👨‍⚕️",
        textEn: "It is our noble duty. Please take a moment to rest and have some tea.",
        textHi: "यह हमारा पावन कर्तव्य है। कृपया थोड़ा विश्राम करें और कुछ चाय लें।"
      },
      {
        speaker: "Vivek",
        avatar: "👨‍💼",
        textEn: "We will, Doctor. Thank you once again for your dedication.",
        textHi: "हम जरूर लेंगे, डॉक्टर। आपके समर्पण के लिए एक बार फिर धन्यवाद।"
      },
      {
        speaker: "Anjali",
        avatar: "👩‍💼",
        textEn: "Vivek, let us call Mother immediately to tell her the wonderful news!",
        textHi: "विवेक, माँ को यह सुखद समाचार देने के लिए आइए तुरंत फोन करें!"
      },
      {
        speaker: "Vivek",
        avatar: "👨‍💼",
        textEn: "She will weep tears of pure joy! What a heavy burden lifted off our shoulders!",
        textHi: "वे खुशी के आंसू रो पड़ेंगी! हमारे कंधों से कितना भारी बोझ उतर गया है!"
      },
      {
        speaker: "Anjali",
        avatar: "👩‍💼",
        textEn: "Truly a miracle! Thank God for answered prayers.",
        textHi: "सचमुच एक चमत्कार! सुनी गई प्रार्थनाओं के लिए ईश्वर का धन्यवाद।"
      },
      {
        speaker: "Vivek",
        avatar: "👨‍💼",
        textEn: "What a glorious day this turned out to be after such deep anxiety!",
        textHi: "इतनी गहरी चिंता के बाद यह कितना शानदार दिन साबित हुआ!"
      },
      {
        speaker: "Anjali",
        avatar: "👩‍💼",
        textEn: "Indeed. Let us go to the phone booth.",
        textHi: "सचमुच। चलिए फोन करने चलते हैं।"
      },
      {
        speaker: "Vivek",
        avatar: "👨‍💼",
        textEn: "Right behind you.",
        textHi: "मैं ठीक तुम्हारे पीछे हूँ।"
      },
      {
        speaker: "Anjali",
        avatar: "👩‍💼",
        textEn: "What a relief!",
        textHi: "कितनी राहत की बात है!"
      },
      {
        speaker: "Vivek",
        avatar: "👨‍💼",
        textEn: "Praise be!",
        textHi: "ईश्वर की महिमा!"
      }
    ]
  },
  {
    id: "d03_sc07",
    title: "Airport Transit Desk: Flight Cancellation & Shared Sympathy",
    titleHi: "हवाई अड्डा पारगमन डेस्क: उड़ान रद्दीकरण और साझा सहानुभूति",
    context: "Travelers Rohit and Meenakshi learn their international connection is cancelled due to volcanic ash.",
    situation: "Deploying sympathetic and regretful exclamations ('Oh no!', 'What a pity!', 'What a shame!', 'How unfortunate!').",
    characters: ["Rohit", "Meenakshi"],
    turns: [
      {
        speaker: "Rohit",
        avatar: "👨‍💼",
        textEn: "Look at the departure monitor flashing red—our flight to Reykjavik has been cancelled!",
        textHi: "प्रस्थान स्क्रीन को लाल चमकते हुए देखो—रेकजाविक जाने वाली हमारी उड़ान रद्द कर दी गई है!"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Oh no! What a colossal disappointment! We have been planning this photography expedition for six months!",
        textHi: "अरे नहीं! कितनी भारी निराशा की बात है! हम छह महीने से इस फोटोग्राफी अभियान की योजना बना रहे थे!"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍💼",
        textEn: "What a pity! The airline announcement states that volcanic ash has grounded all airspace across the North Atlantic.",
        textHi: "हाय कितना अफसोस! एयरलाइन घोषणा में कहा गया है कि ज्वालामुखी की राख ने उत्तरी अटलांटिक के सभी हवाई क्षेत्र में उड़ानों को रोक दिया है।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "What a shame! Will they provide accommodation while we wait for conditions to clear?",
        textHi: "कितना बुरा हुआ! जब तक स्थिति साफ नहीं हो जाती, क्या वे रुकने की व्यवस्था करेंगे?"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍💼",
        textEn: "Yes, the ground agent confirmed they are offering complimentary hotel vouchers at the airport transit resort.",
        textHi: "जी हाँ, ग्राउंड एजेंट ने पुष्टि की है कि वे एयरपोर्ट ट्रांजिट रिसॉर्ट में मुफ्त होटल वाउचर दे रहे हैं।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Well, thank goodness for that small comfort at least!",
        textHi: "खैर, कम से कम उस छोटी सी राहत के लिए भगवान का शुक्र है!"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍💼",
        textEn: "How unfortunate that Mother Nature disrupted our travel schedule so abruptly.",
        textHi: "कितना दुर्भाग्यपूर्ण है कि प्रकृति ने हमारे यात्रा कार्यक्रम को इतनी अचानक बाधित कर दिया।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Alas! Safety must always take precedence over itineraries in aviation.",
        textHi: "हाय! विमानन में सुरक्षा को हमेशा यात्रा कार्यक्रमों से अधिक प्राथमिकता दी जानी चाहिए।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍💼",
        textEn: "That is very true. Look on the bright side—we get an unexpected day to explore this transit city!",
        textHi: "यह बिल्कुल सच है। सकारात्मक पहलू देखिए—हमें इस पारगमन शहर को देखने के लिए एक अप्रत्याशित दिन मिल गया!"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "What a positive attitude, Rohit! You always find a silver lining.",
        textHi: "रोहित, कितना सकारात्मक दृष्टिकोण है! तुम हमेशा निराशा में भी उम्मीद की किरण ढूंढ लेते हो।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍💼",
        textEn: "Let us collect our luggage claim tags and head to the hotel counter.",
        textHi: "आइए अपने सामान के क्लेम टैग एकत्र करें और होटल काउंटर की ओर बढ़ें।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Look at that long queue at the rebooking desk—good heavens!",
        textHi: "रीबुकिंग डेस्क पर उस लंबी कतार को देखो—हे भगवान!"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍💼",
        textEn: "Do not worry, we can use the priority mobile app to reschedule our seats seamlessly.",
        textHi: "चिंता मत करो, हम अपनी सीटों को फिर से निर्धारित करने के लिए प्रायोरिटी मोबाइल ऐप का आसानी से उपयोग कर सकते हैं।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "What a relief! That saves us at least two hours of standing in line.",
        textHi: "कितनी बड़ी राहत है! इससे हमारे कतार में खड़े रहने के कम से कम दो घंटे बच जाएंगे।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍💼",
        textEn: "Splendid! Our room booking is already confirmed on my smartphone.",
        textHi: "अति उत्तम! मेरे स्मार्टफोन पर हमारे कमरे की बुकिंग की पुष्टि पहले ही हो चुकी है।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Terrific! Let us catch the airport shuttle bus.",
        textHi: "शानदार! आइए एयरपोर्ट शटल बस पकड़ें।"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍💼",
        textEn: "Right this way!",
        textHi: "कृपया इस तरफ!"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Here comes the shuttle!",
        textHi: "शटल बस आ गई!"
      },
      {
        speaker: "Rohit",
        avatar: "👨‍💼",
        textEn: "Wonderful timing!",
        textHi: "क्या सटीक समय है!"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍💼",
        textEn: "Let's board!",
        textHi: "चलिए चढ़ते हैं!"
      }
    ]
  },
  {
    id: "d03_sc08",
    title: "National Park Wildlife Safari: Rare Predator Sighting",
    titleHi: "राष्ट्रीय उद्यान वन्यजीव सफारी: दुर्लभ तेंदुए का दर्शन",
    context: "Safari guide Mahendra and tourist Priya spot a elusive black panther in the dense canopy of Kabini Forest.",
    situation: "Deploying whispered caution ('Hush!', 'Behold!', 'Look there!') and breathless awe ('How magnificent!', 'What a sight!').",
    characters: ["Mahendra", "Priya"],
    turns: [
      {
        speaker: "Mahendra",
        avatar: "👨‍🌾",
        textEn: "Hush! Stop all conversation and engine noise immediately!",
        textHi: "शांत! तुरंत सारी बातचीत और इंजन की आवाज बंद कर दीजिए!"
      },
      {
        speaker: "Priya",
        avatar: "👩‍🌾",
        textEn: "What is it, Mahendra? Did you hear an alarm call?",
        textHi: "क्या बात है, महेंद्र? क्या आपने किसी जानवर की चेतावनी भरी पुकार सुनी?"
      },
      {
        speaker: "Mahendra",
        avatar: "👨‍🌾",
        textEn: "Hark! The spotted deer are barking in distress near the bamboo thicket.",
        textHi: "सुनिए! बांस के झुरमुट के पास चीतल घबराहट में आवाज निकाल रहे हैं।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍🌾",
        textEn: "Look there, high up on the horizontal bough of that banyan tree!",
        textHi: "उधर देखिए, उस बरगद के पेड़ की क्षैतिज शाखा पर बहुत ऊँचाई पर!"
      },
      {
        speaker: "Mahendra",
        avatar: "👨‍🌾",
        textEn: "Behold! It is the legendary melanistic black panther of Kabini!",
        textHi: "देखिए! यह काबिनी का प्रसिद्ध दुर्लभ काला तेंदुआ है!"
      },
      {
        speaker: "Priya",
        avatar: "👩‍🌾",
        textEn: "Good heavens! How magnificent! Look at its sleek, glistening midnight coat!",
        textHi: "हे भगवान! कितना भव्य और अनुपम! इसके चिकने, चमकदार काले बदन को देखिए!"
      },
      {
        speaker: "Mahendra",
        avatar: "👨‍🌾",
        textEn: "What an extraordinary sighting! Only one in ten thousand visitors ever glimpses this ghost of the jungle.",
        textHi: "क्या असाधारण दर्शन है! दस हजार पर्यटकों में से केवल किसी एक को जंगल के इस रहस्यमयी साये की झलक मिलती है।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍🌾",
        textEn: "Look at those piercing emerald eyes staring directly through the foliage!",
        textHi: "उन तीखी पन्ना जैसी हरी आँखों को देखिए जो पत्तों के बीच से सीधे देख रही हैं!"
      },
      {
        speaker: "Mahendra",
        avatar: "👨‍🌾",
        textEn: "Hush... keep your camera movement completely silent so we do not disturb him.",
        textHi: "शांत... अपने कैमरे को बिल्कुल चुपचाप चलाएं ताकि हम उसे विचलित न करें।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍🌾",
        textEn: "Click! What a spectacular photograph! The lighting through the leaves is sublime!",
        textHi: "क्लिक! क्या शानदार तस्वीर आई है! पत्तों के बीच से आती रोशनी दिव्य है!"
      },
      {
        speaker: "Mahendra",
        avatar: "👨‍🌾",
        textEn: "Splendid! He is slowly turning around and descending into the undergrowth.",
        textHi: "अति उत्तम! वह धीरे-धीरे घूम रहा है और झाड़ियों में नीचे उतर रहा है।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍🌾",
        textEn: "What a breathtaking, once-in-a-lifetime experience!",
        textHi: "कितना लुभावना, जीवन में केवल एक बार मिलने वाला अनुभव है यह!"
      },
      {
        speaker: "Mahendra",
        avatar: "👨‍🌾",
        textEn: "Bravo, Priya! Your patience at the waterhole made this encounter possible.",
        textHi: "शाबाश, प्रिया! जलाशय पर आपके धैर्य ने इस मुलाकात को संभव बना दिया।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍🌾",
        textEn: "I am trembling with awe! My heart is pounding with excitement!",
        textHi: "मैं विस्मय से कांप रही हूँ! मेरा दिल उत्साह से धड़क रहा है!"
      },
      {
        speaker: "Mahendra",
        avatar: "👨‍🌾",
        textEn: "That is the magic of the wild forest. Nature never ceases to amaze.",
        textHi: "यही घने जंगल का जादू है। प्रकृति कभी भी चकित करने से नहीं चूकती।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍🌾",
        textEn: "What a marvelous safari this has turned out to be!",
        textHi: "यह सफारी कितनी अद्भुत और यादगार साबित हुई है!"
      },
      {
        speaker: "Mahendra",
        avatar: "👨‍🌾",
        textEn: "Let us slowly head back to the lodge as dusk approaches.",
        textHi: "शाम ढलने के साथ ही आइए धीरे-धीरे लॉज की ओर लौटें।"
      },
      {
        speaker: "Priya",
        avatar: "👩‍🌾",
        textEn: "Yes, let us share these images with the wildlife researchers.",
        textHi: "हाँ, चलिए इन तस्वीरों को वन्यजीव शोधकर्ताओं के साथ साझा करते हैं।"
      },
      {
        speaker: "Mahendra",
        avatar: "👨‍🌾",
        textEn: "They will be thrilled!",
        textHi: "वे रोमांचित हो उठेंगे!"
      },
      {
        speaker: "Priya",
        avatar: "👩‍🌾",
        textEn: "Unforgettable!",
        textHi: "अविस्मरणीय!"
      }
    ]
  },
  {
    id: "d03_sc09",
    title: "University Hall: International Scholarship Announcement",
    titleHi: "विश्वविद्यालय प्रांगण: अंतरराष्ट्रीय छात्रवृत्ति की घोषणा",
    context: "Undergraduate student Harshita opens an official email from Cambridge University alongside her father Mr. Roy.",
    situation: "Deploying overwhelming joy and celebration ('What a surprise!', 'How wonderful!', 'Terrific news!', 'Bravo!').",
    characters: ["Mr. Roy", "Harshita"],
    turns: [
      {
        speaker: "Harshita",
        avatar: "👩‍🎓",
        textEn: "Father, the decision email from the Cambridge Scholarship Board has just landed in my inbox!",
        textHi: "पिताजी, कैम्ब्रिज छात्रवृत्ति बोर्ड का निर्णय ईमेल अभी-अभी मेरे इनबॉक्स में आया है!"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "Good heavens! Open it quickly, my child! What does it say?",
        textHi: "हे भगवान! इसे जल्दी खोलो, मेरी बच्ची! इसमें क्या लिखा है?"
      },
      {
        speaker: "Harshita",
        avatar: "👩‍🎓",
        textEn: "Reading... 'We are delighted to offer you the Full Gates Cambridge Doctoral Fellowship!'",
        textHi: "पढ़ रही हूँ... 'हमें आपको पूर्ण गेट्स कैम्ब्रिज डॉक्टरेट फेलोशिप प्रदान करते हुए अत्यंत हर्ष हो रहा है!'"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "Wow! What glorious, unbelievable news! You achieved a full scholarship!",
        textHi: "वाह! क्या शानदार, अविश्वसनीय खबर है! तुमने पूरी छात्रवृत्ति हासिल कर ली!"
      },
      {
        speaker: "Harshita",
        avatar: "👩‍🎓",
        textEn: "What a dream! What an astounding surprise! I am shaking with pure happiness!",
        textHi: "क्या सपना है! कितना चौंकाने वाला सुखद आश्चर्य! मैं खुशी के मारे कांप रही हूँ!"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "Bravo, Harshita! Your endless nights of diligent research have earned you the highest honor!",
        textHi: "शाबाश, हर्षिता! तुम्हारी अनगिनत रातों के कठिन शोध ने तुम्हें यह सर्वोच्च सम्मान दिलाया है!"
      },
      {
        speaker: "Harshita",
        avatar: "👩‍🎓",
        textEn: "How wonderful! It covers full tuition, accommodation, and a monthly research stipend!",
        textHi: "कितना शानदार! इसमें पूरी ट्यूशन फीस, रहने की व्यवस्था और मासिक शोध वजीफा शामिल है!"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "Thank goodness! What an enormous relief for our family!",
        textHi: "ईश्वर का लाख-लाख शुक्र है! हमारे परिवार के लिए कितनी बड़ी राहत की बात है!"
      },
      {
        speaker: "Harshita",
        avatar: "👩‍🎓",
        textEn: "Father, look at your tears of joy!",
        textHi: "पिताजी, अपनी आँखों में खुशी के इन आंसुओं को देखिए!"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "These are the proudest tears a father could ever shed, my dear daughter.",
        textHi: "मेरी प्यारी बेटी, ये किसी पिता द्वारा बहाए जाने वाले सबसे गर्व से भरे आंसू हैं।"
      },
      {
        speaker: "Harshita",
        avatar: "👩‍🎓",
        textEn: "Terrific! Let us call Mother and Grandma right away to celebrate!",
        textHi: "शानदार! आइए जश्न मनाने के लिए माँ और दादी को तुरंत फोन करें!"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "Splendid! The entire neighborhood will rejoice in your stellar accomplishment!",
        textHi: "अति उत्तम! तुम्हारी इस शानदार उपलब्धि पर पूरा मोहल्ला खुशियां मनाएगा!"
      },
      {
        speaker: "Harshita",
        avatar: "👩‍🎓",
        textEn: "What a thrilling new chapter of life begins today!",
        textHi: "आज से जीवन का कितना रोमांचक नया अध्याय शुरू हो रहा है!"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "May you shine brightly across the globe, Harshita!",
        textHi: "हर्षिता, तुम पूरी दुनिया में इसी तरह अपना नाम रोशन करो!"
      },
      {
        speaker: "Harshita",
        avatar: "👩‍🎓",
        textEn: "Thank you for believing in me, Father!",
        textHi: "मुझ पर विश्वास बनाए रखने के लिए धन्यवाद, पिताजी!"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "Always, my child! What a glorious celebration!",
        textHi: "हमेशा, मेरी बच्ची! क्या शानदार जश्न का दिन है!"
      },
      {
        speaker: "Harshita",
        avatar: "👩‍🎓",
        textEn: "Let's call Mom!",
        textHi: "चलिए माँ को फोन करते हैं!"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "Dialing right now!",
        textHi: "अभी डायल कर रहा हूँ!"
      },
      {
        speaker: "Harshita",
        avatar: "👩‍🎓",
        textEn: "Hurrah!",
        textHi: "हुर्रे!"
      },
      {
        speaker: "Mr. Roy",
        avatar: "👨‍🦳",
        textEn: "Bravo!",
        textHi: "शाबाश!"
      }
    ]
  },
  {
    id: "d03_sc10",
    title: "National Archives: Ancient Manuscript Discovery",
    titleHi: "राष्ट्रीय अभिलेखागार: प्राचीन पाण्डुलिपि की खोज",
    context: "Epigraphist Dr. Bhatt and Archival Scholar Meenakshi unbox an intact 12th-century palm-leaf treatise.",
    situation: "Deploying scholarly awe ('Good heavens!', 'Behold!', 'What an extraordinary discovery!', 'Splendid!').",
    characters: ["Dr. Bhatt", "Meenakshi"],
    turns: [
      {
        speaker: "Dr. Bhatt",
        avatar: "👨‍🏫",
        textEn: "Careful, Meenakshi! Gently lift the velvet wrapping from the cedar crate.",
        textHi: "सावधानी से, मीनाक्षी! देवदार की पेटी से मखमली आवरण को धीरे से उठाइए।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍🏫",
        textEn: "Good heavens! Look at the golden copper bindings—they are completely unblemished!",
        textHi: "हे भगवान! तांबे की सुनहरी जिल्द को देखिए—यह पूरी तरह बेदाग है!"
      },
      {
        speaker: "Dr. Bhatt",
        avatar: "👨‍🏫",
        textEn: "Behold! An intact twelfth-century Sanskrit treatise on astronomical calculations!",
        textHi: "देखिए! खगोलीय गणनाओं पर बारहवीं शताब्दी का एक अक्षुण्ण संस्कृत ग्रंथ!"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍🏫",
        textEn: "What an incredible discovery! Look at the precision of the Sharada script etchings!",
        textHi: "क्या अविश्वसनीय खोज है! शारदा लिपि की नक्काशी की सटीकता को देखिए!"
      },
      {
        speaker: "Dr. Bhatt",
        avatar: "👨‍🏫",
        textEn: "Marvelous! The palm leaves have survived eight centuries without biological decay!",
        textHi: "अद्भुत! ताड़ के पत्ते बिना किसी जैविक क्षरण के आठ शताब्दियों तक सुरक्षित रहे हैं!"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍🏫",
        textEn: "How extraordinary! Look at this celestial diagram illustrating planetary orbits!",
        textHi: "कितना असाधारण है! ग्रहीय कक्षाओं को दर्शाने वाले इस खगोलीय चित्र को देखिए!"
      },
      {
        speaker: "Dr. Bhatt",
        avatar: "👨‍🏫",
        textEn: "Splendid! This directly predates European heliocentric models by three hundred years!",
        textHi: "अति उत्तम! यह यूरोपीय सूर्यकेंद्रित मॉडल से सीधे तीन सौ वर्ष पूर्व का है!"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍🏫",
        textEn: "What a monumental historical revelation for Indian science!",
        textHi: "भारतीय विज्ञान के लिए यह कितना बड़ा ऐतिहासिक रहस्योद्घाटन है!"
      },
      {
        speaker: "Dr. Bhatt",
        avatar: "👨‍🏫",
        textEn: "Hush... let us activate the humidity-controlled display chamber before oxygen causes oxidation.",
        textHi: "शांत... इससे पहले कि ऑक्सीजन से ऑक्सीकरण हो, आइए आर्द्रता-नियंत्रित डिस्प्ले चैंबर को सक्रिय करें।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍🏫",
        textEn: "Activated! The microclimate is stabilized at forty-five percent relative humidity.",
        textHi: "सक्रिय हो गया! सूक्ष्म-जलवायु को पैंतालीस प्रतिशत सापेक्ष आर्द्रता पर स्थिर कर दिया गया है।"
      },
      {
        speaker: "Dr. Bhatt",
        avatar: "👨‍🏫",
        textEn: "Thank goodness! What a relief to have this priceless treasure secured safely.",
        textHi: "भगवान का शुक्र है! इस अनमोल धरोहर को सुरक्षित पाकर कितनी बड़ी राहत मिली है।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍🏫",
        textEn: "Bravo to the archaeology field team in Kashmir who unearthed this cache!",
        textHi: "कश्मीर की पुरातत्व टीम को बहुत-बहुत बधाई, जिन्होंने इस खजाने को खोज निकाला!"
      },
      {
        speaker: "Dr. Bhatt",
        avatar: "👨‍🏫",
        textEn: "Terrific dedication on their part. We must draft an emergency paper for the international epigraphy journal.",
        textHi: "उनकी ओर से यह शानदार समर्पण है। हमें अंतरराष्ट्रीय पुरालेख पत्रिका के लिए एक तत्काल शोध पत्र तैयार करना चाहिए।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍🏫",
        textEn: "I will begin the digital high-resolution photography right away.",
        textHi: "मैं तुरंत डिजिटल हाई-रेज़ोल्यूशन फोटोग्राफी शुरू करती हूँ।"
      },
      {
        speaker: "Dr. Bhatt",
        avatar: "👨‍🏫",
        textEn: "What a thrilling day for our archival institute!",
        textHi: "हमारे अभिलेखागार संस्थान के लिए यह कितना रोमांचक दिन है!"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍🏫",
        textEn: "Truly unprecedented, Dr. Bhatt!",
        textHi: "डॉ. भट्ट, सचमुच अभूतपूर्व!"
      },
      {
        speaker: "Dr. Bhatt",
        avatar: "👨‍🏫",
        textEn: "Let us commence the preservation protocol.",
        textHi: "आइए संरक्षण प्रोटोकॉल शुरू करें।"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍🏫",
        textEn: "Ready, Doctor!",
        textHi: "तैयार हूँ, डॉक्टर!"
      },
      {
        speaker: "Dr. Bhatt",
        avatar: "👨‍🏫",
        textEn: "Splendid!",
        textHi: "शानदार!"
      },
      {
        speaker: "Meenakshi",
        avatar: "👩‍🏫",
        textEn: "Let's begin.",
        textHi: "चलिए शुरू करते हैं।"
      }
    ]
  }
];
