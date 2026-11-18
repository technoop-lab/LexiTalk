import fs from 'fs';
import path from 'path';

// Day 49: Human Appearance, Attire & Personality Descriptions
const day49 = {
  dayNumber: 49,
  id: "day_49",
  titleEn: "Human Appearance, Attire & Personality Descriptions",
  titleHi: "मानव रूप-रंग, पहनावा एवं व्यक्तित्व का विशद वर्णन",
  cefr: "A2.2",
  estMinutes: 60,
  prerequisites: "Day 48 Mastery (Zoological Classifications & Ethological Descriptions)",
  objectivesEn: [
    "Describe physical stature, build, and facial features: athletic, stocky, slender, towering, petite, complexion, sharp jawline, high cheekbones, and dimples.",
    "Master sartorial descriptions and garment terminology: bespoke tailored suit, casual ensemble, formal attire, fabric textures, and elegant accessories.",
    "Articulate psychological and character traits: charismatic, meticulous, articulate, conscientious, resilient, gregarious, pragmatic, empathetic, and unassuming.",
    "Construct compound descriptive adjectives: broad-shouldered, sharp-witted, open-minded, well-groomed, and even-tempered.",
    "Eliminate persistent Indian English grammatical errors such as '*He has white hairs*', '*She is wearing a pant*', '*Her hairs are long*', and '*He is angry nature*'."
  ],
  objectivesHi: [
    "शारीरिक कद-काठी और चेहरे की बनावट (Athletic, Stocky, Slender, Towering, Petite, Complexion, Sharp jawline, High cheekbones, Dimples) का सटीक वर्णन।",
    "पहनावे और वस्त्र शब्दावली (Bespoke tailored suit, Casual ensemble, Formal attire, Textures, Accessories) में निपुणता।",
    "व्यक्तित्व और आंतरिक स्वभाव (Charismatic, Meticulous, Articulate, Conscientious, Resilient, Gregarious, Pragmatic, Empathetic) को गहराई से समझाना।",
    "मिश्रित विशेषणों (Compound Adjectives - Broad-shouldered, Sharp-witted, Open-minded, Well-groomed, Even-tempered) की रचना करना।",
    "भारतीय अंग्रेज़ी की सामान्य गलतियों ('white hairs', 'wearing a pant', 'her hairs are long', 'he is angry nature') को हमेशा के लिए समाप्त करना।"
  ],
  teach: {
    hindiExplanation: `डे 49 में हम किसी व्यक्ति के बाहरी रूप-रंग (Physical Appearance), पहनावे (Attire/Style) और आंतरिक व्यक्तित्व (Personality Traits) का अत्यंत समृद्ध और स्वाभाविक अंग्रेज़ी में वर्णन करना सीखेंगे।

1. **शारीरिक बनावट और चेहरे के लक्षण (Physical Descriptors)**:
   - **Stature & Build**: Towering (बहुत लंबा), Petite (छोटे व छरहरे कद की महिला), Athletic / Muscular (गठीला/कसरती शरीर), Stocky (मजबूत व भारी कद), Slender (सुडौल व पतला).
   - **Facial Features**: Complexion (चेहरे की त्वचा का रंग/आभा), Sharp jawline (नुकीला/स्पष्ट जबड़ा), High cheekbones (उभरे हुए गाल की हड्डियां), Dimples (गाल पर पड़ने वाले गड्ढे), Freckles (चेहरे पर भूरे तिल/झाइयां).
   - **Hair Descriptors**: Receding hairline (माथे से पीछे हटते बाल), Curly / Wavy / Straight hair, Cropped hair (छोटे कटे बाल), Salt-and-pepper hair (काले और सफेद बालों का आकर्षक मिश्रण).

2. **पहनावा और स्टाइल (Attire & Sartorial Style)**:
   - **Bespoke / Tailored**: विशेष नाप देकर सिलवाया गया (कस्टम-मेड).
   - **Formal attire**: औपचारिक पोशाक।
   - **Casual ensemble**: अनौपचारिक/दैनिक कपड़ों का संयोजन।
   - **Well-groomed**: साफ-सुथरा, सुसज्जित और सलीके से रहने वाला।

3. **व्यक्तित्व और स्वभाव (Personality & Character Traits)**:
   - **Articulate**: सुवक्ता / विचारों को स्पष्ट और प्रभावी रूप से व्यक्त करने वाला।
   - **Meticulous**: बेहद बारीक और सावधान (काम में कोई कमी न छोड़ने वाला).
   - **Charismatic**: आकर्षक / प्रभावशाली व्यक्तित्व वाला।
   - **Conscientious**: कर्तव्यनिष्ठ, ईमानदार और जिम्मेदार।
   - **Resilient**: मुश्किलों से तेजी से उबरने वाला / जुझारू।
   - **Gregarious / Extroverted**: मिलनसार और सामाजिक।
   - **Pragmatic**: व्यावहारिक (हवाई बातों के बजाय व्यावहारिक हल निकालने वाला).

4. **L1 हिंदी भाषियों की आम गलतियां (MANDATORY FIXES)**:
   - कभी न कहें: '*He has white hairs.*' ❌। अंग्रेज़ी में बाल सामूहिक रूप से अनकाउंटेबल 'hair' होते हैं, और सफेद बालों को 'grey / gray hair' या 'white hair' (बिना 's' के) कहा जाता है: "**He has gray hair.**" ✔️
   - कभी न कहें: '*She is wearing a pant.*' ❌। 'Pants' या 'trousers' हमेशा बहुवचन होते हैं: "**She is wearing a pair of pants / trousers.**" ✔️
   - कभी न कहें: '*He is having angry nature.*' ❌: "**He has a short temper**" या "**He is quick-tempered.**" ✔️
   - 'Skinny' (कमजोरी से दुबला) vs 'Slender / Slim' (सुडौल व आकर्षक पतला): हमेशा सही सकारात्मक या तटस्थ शब्द चुनें।`,
    englishExplanation: `Day 49 equips learners with nuanced lexicon for high-fidelity character sketches, physical anthropometry, sartorial aesthetics, and multifaceted psychological trait analysis.

Key Learning Dimensions:
1. **Physical Anthropometry & Facial Aesthetics**: Distinguishing towering vs petite, stocky vs athletic, chiselled jawlines, and salt-and-pepper hair.
2. **Sartorial Register**: Navigating bespoke tailoring, minimalist ensembles, fabric drapery, and styling collocations.
3. **Psychological & Temperamental Profiling**: Utilizing precise personality adjectives (conscientious, gregarious, meticulous, pragmatic, charismatic, introverted).
4. **Compound Adjective Synthesis**: Formulating hyphenated descriptors ('sharp-witted', 'broad-shouldered', 'even-tempered', 'open-minded').`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Uncountable Noun 'Hair' vs Countable Individual Strands",
        description: "'Hair' (head of hair) is uncountable: 'She has lustrous dark hair' (NEVER '*hairs*'). Use 'strands of hair' or 'grey hair' (NEVER '*white hairs*').",
        register: "Countability Syntax"
      },
      {
        ruleNumber: 2,
        title: "Obligatory Plurality of Lower-Body Garments ('A pair of...')",
        description: "Pants, trousers, jeans, and shorts are plural nouns: 'He wore a stylish pair of linen trousers' (NEVER '*a pant*').",
        register: "Garment Grammar"
      },
      {
        ruleNumber: 3,
        title: "Compound Adjective Formation with Noun + '-ed'",
        description: "Form physical/temperamental compound modifiers: [Adjective + Noun + -ed] -> 'broad-shouldered', 'blue-eyed', 'sharp-witted', 'short-tempered', 'open-minded'.",
        register: "Morphological Synthesis"
      },
      {
        ruleNumber: 4,
        title: "Order of Descriptive Adjectives for Appearance",
        description: "Follow the canonical adjective hierarchy: Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material: 'A charming, tall, young, broad-shouldered Italian gentleman.'",
        register: "Adjective Sequence"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Physical Stature & Features",
        formula: "[Subject] + is of + [Adjective: towering / medium / petite] + height with + a/an + [Adjective: athletic / stocky / slender] + build.",
        exampleEn: "She is of medium height with an athletic, graceful build.",
        meaningHi: "वह मध्यम कद और एक कसरती, शालीन बनावट की मालकिन है।"
      },
      {
        subjectGroup: "Facial & Hair Descriptors",
        formula: "[Subject] + has + [Complexion: radiant / fair / olive] + skin, + [Feature: a chiseled jawline / dimples], + and + [Hair Descriptor: wavy salt-and-pepper hair].",
        exampleEn: "He has a radiant olive complexion, a chiseled jawline, and wavy salt-and-pepper hair.",
        meaningHi: "उसका रंग चमकदार जैतून जैसा, स्पष्ट जबड़ा और लहरदार काले-सफेद बाल हैं।"
      },
      {
        subjectGroup: "Sartorial Attire Description",
        formula: "[Subject] + is dressed in + a/an + [Adjective: bespoke / tailored / elegant] + [Garment Ensemble: three-piece suit / silk saree / casual linen shirt].",
        exampleEn: "She was dressed in an elegant bespoke silk ensemble tailored to perfection.",
        meaningHi: "उसने पूरी तरह से नाप के अनुरूप सिला हुआ एक खूबसूरत रेशमी परिधान पहना हुआ था।"
      },
      {
        subjectGroup: "Psychological Character Profile",
        formula: "[Subject] + is + exceptionally + [Adjective 1: articulate / meticulous] + and + [Adjective 2: compassionate], with a + [Adjective: pragmatic / charismatic] + approach.",
        exampleEn: "She is exceptionally articulate and compassionate, with a deeply pragmatic approach to leadership.",
        meaningHi: "वह असाधारण रूप से सुवक्ता और दयालु है, जिसका नेतृत्व के प्रति गहरा व्यावहारिक दृष्टिकोण है।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'White Hairs', 'Wearing a Pant', and 'Angry Nature' Traps",
      hindiPattern: "1. '*He has many white hairs on his head.*' (सफेद बाल)\n2. '*I bought a new pant yesterday.*' (एक पैंट)\n3. '*Her hairs are very long.*' (उसके बाल)\n4. '*He is of very angry nature.*' (गुस्सैल स्वभाव)",
      potentialInterference: "Direct calque from Hindi plural 'बाल' / 'पैंट' / 'स्वभाव'.",
      explanation: "In English, hair on head is uncountable ('grey hair' or 'dark hair'). Garments with two legs are plural ('a pair of trousers/pants'). Express nature using adjectives ('quick-tempered', 'even-tempered').",
      naturalSolution: "1. 'He has gray hair at his temples.' | 2. 'I bought a new pair of trousers/pants yesterday.' | 3. 'Her hair is very long and silky.' | 4. 'He is quick-tempered / short-tempered.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day49_vocab_001", word: "Complexion", pos: "Noun", ipa: "/kəmˈplek.ʃən/", meaningHi: "चेहरे का रंग / त्वचा की चमक या आभा", exampleEn: "She maintains a glowing, radiant complexion through proper hydration and skincare.", exampleHi: "वह उचित जलयोजन और त्वचा की देखभाल के माध्यम से एक चमकदार, उज्ज्वल रंग बनाए रखती है।" },
      { id: "day49_vocab_002", word: "Slender", pos: "Adjective", ipa: "/ˈslen.dər/", meaningHi: "सुडौल और पतला / छरहरा (आकर्षक रूप से पतला)", exampleEn: "The ballerina had a graceful, slender figure.", exampleHi: "बैले नर्तकी का शरीर शालीन और सुडौल पतला था।" },
      { id: "day49_vocab_003", word: "Stocky", pos: "Adjective", ipa: "/ˈstɒk.i/", meaningHi: "मजबूत, गठीला और भारी कद-काठी वाला", exampleEn: "The rugby player possessed a stocky build with broad shoulders.", exampleHi: "रग्बी खिलाड़ी के पास चौड़े कंधों वाला एक मजबूत और गठीला शरीर था।" },
      { id: "day49_vocab_004", word: "Petite", pos: "Adjective", ipa: "/pəˈtiːt/", meaningHi: "छोटे कद की छरहरी और आकर्षक (विशेषकर महिला के लिए)", exampleEn: "She is petite, standing just over five feet tall, but commands great presence.", exampleHi: "वह सिर्फ पांच फीट से थोड़ी लंबी और छोटे कद की छरहरी है, लेकिन उसका व्यक्तित्व बहुत प्रभावशाली है।" },
      { id: "day49_vocab_005", word: "Towering", pos: "Adjective", ipa: "/ˈtaʊə.rɪŋ/", meaningHi: "बहुत लंबा / विशाल कद वाला", exampleEn: "The towering basketball center stood six feet eight inches tall.", exampleHi: "बहुत लंबे कद वाला बास्केटबॉल सेंटर छह फीट आठ इंच लंबा था।" },
      { id: "day49_vocab_006", word: "Articulate", pos: "Adjective", ipa: "/ɑːˈtɪk.jə.lət/", meaningHi: "सुवक्ता / विचारों को स्पष्ट और धाराप्रवाह व्यक्त करने वाला", exampleEn: "She is an articulate speaker who explains complex concepts with effortless clarity.", exampleHi: "वह एक सुवक्ता हैं जो जटिल अवधारणाओं को सहज स्पष्टता के साथ समझाती हैं।" },
      { id: "day49_vocab_007", word: "Meticulous", pos: "Adjective", ipa: "/məˈtɪk.jə.ləs/", meaningHi: "बेहद बारीक, सावधान और काम में कोई कसर न छोड़ने वाला", exampleEn: "The architect paid meticulous attention to every engineering blueprint detail.", exampleHi: "वास्तुकार ने हर इंजीनियरिंग ब्लूप्रिंट विवरण पर बारीक ध्यान दिया।" },
      { id: "day49_vocab_008", word: "Charismatic", pos: "Adjective", ipa: "/ˌkær.ɪzˈmæt.ɪk/", meaningHi: "आकर्षक, प्रभावशाली और चुंबकीय व्यक्तित्व वाला", exampleEn: "His charismatic leadership inspired the entire research team.", exampleHi: "उनके चुंबकीय और प्रभावशाली नेतृत्व ने पूरी शोध टीम को प्रेरित किया।" },
      { id: "day49_vocab_009", word: "Conscientious", pos: "Adjective", ipa: "/ˌkɒn.ʃiˈen.ʃəs/", meaningHi: "कर्तव्यनिष्ठ, ईमानदार और ज़िम्मेदार", exampleEn: "She is a conscientious employee who never misses a project deadline.", exampleHi: "वह एक कर्तव्यनिष्ठ कर्मचारी हैं जो कभी भी प्रोजेक्ट की समय सीमा नहीं चूकती हैं।" },
      { id: "day49_vocab_010", word: "Resilient", pos: "Adjective", ipa: "/rɪˈzɪl.i.ənt/", meaningHi: "कठिनाइयों से तुरंत उबरने वाला / जुझारू", exampleEn: "Resilient communities rebuild quickly after overcoming natural disasters.", exampleHi: "जुझारू समुदाय प्राकृतिक आपदाओं से उबरने के बाद तेजी से पुनर्निर्माण करते हैं।" },
      { id: "day49_vocab_011", word: "Gregarious", pos: "Adjective", ipa: "/ɡrɪˈɡeə.ri.əs/", meaningHi: "मिलनसार, सामाजिक और लोगों के साथ रहने का शौकीन", exampleEn: "He is a gregarious host who loves throwing lively dinner parties for friends.", exampleHi: "वह एक मिलनसार मेज़बान हैं जो दोस्तों के लिए जीवंत डिनर पार्टियाँ आयोजित करना पसंद करते हैं।" },
      { id: "day49_vocab_012", word: "Pragmatic", pos: "Adjective", ipa: "/præɡˈmæt.ɪk/", meaningHi: "व्यावहारिक (सिद्धांतों के बजाय व्यावहारिक परिणामों पर केंद्रित)", exampleEn: "We need a pragmatic solution rather than theoretical idealism.", exampleHi: "हमें सैद्धांतिक आदर्शवाद के बजाय एक व्यावहारिक समाधान की आवश्यकता है।" },
      { id: "day49_vocab_013", word: "Bespoke", pos: "Adjective", ipa: "/bɪˈspəʊk/", meaningHi: "कस्टम-निर्मित / विशेष नाप से सिलवाया गया", exampleEn: "He wore a bespoke Italian woolen suit tailored specifically for his measurements.", exampleHi: "उसने एक कस्टम-निर्मित इटैलियन ऊनी सूट पहना था जो विशेष रूप से उसके नाप के लिए सिला गया था।" },
      { id: "day49_vocab_014", word: "Ensemble", pos: "Noun", ipa: "/ɒnˈsɒm.bəl/", meaningHi: "पहनावा / कपड़ों और जूतों का पूरा संयोजन", exampleEn: "Her elegant evening ensemble featured a midnight-blue gown and pearl necklace.", exampleHi: "उनकी सुरुचिपूर्ण शाम की पोशाक (पहनावे) में आधी रात का नीला गाउन और मोती का हार शामिल था।" },
      { id: "day49_vocab_015", word: "Chiseled", pos: "Adjective", ipa: "/ˈtʃɪz.əld/", meaningHi: "तराशा हुआ / तीखे और स्पष्ट नैन-नक्श वाला (विशेषकर जबड़ा)", exampleEn: "The actor had striking blue eyes and a chiseled jawline.", exampleHi: "अभिनेता की आंखें आकर्षक नीली और जबड़ा तराशा हुआ था।" },
      { id: "day49_vocab_016", word: "Dimple", pos: "Noun", ipa: "/ˈdɪm.pəl/", meaningHi: "गाल पर पड़ने वाला गड्ढा", exampleEn: "A charming dimple appeared on her left cheek whenever she laughed.", exampleHi: "जब भी वह हंसती थी, उसके बाएं गाल पर एक आकर्षक गड्ढा (डिंपल) दिखाई देता था।" },
      { id: "day49_vocab_017", word: "Freckles", pos: "Noun (plural)", ipa: "/ˈfrek.əlz/", meaningHi: "चेहरे पर धूप से पड़ने वाले हल्के भूरे तिल/झाइयां", exampleEn: "Sun exposure brought out tiny golden freckles across the bridge of her nose.", exampleHi: "धूप के संपर्क में आने से उसकी नाक के ऊपर छोटे सुनहरे तिल/झाइयां उभर आईं।" },
      { id: "day49_vocab_018", word: "Well-groomed", pos: "Adjective", ipa: "/ˌwel ˈɡruːmd/", meaningHi: "साफ-सुथरा, सलीकेदार और सुसज्जित", exampleEn: "The corporate executive always appeared impeccably well-groomed and polished.", exampleHi: "कॉर्पोरेट कार्यकारी हमेशा त्रुटिहीन रूप से सुसज्जित और सलीकेदार दिखाई देते थे।" },
      { id: "day49_vocab_019", word: "Sharp-witted", pos: "Adjective", ipa: "/ˌʃɑːp ˈwɪt.ɪd/", meaningHi: "हाजिरजवाब, तीव्र बुद्धि वाला और चतुर", exampleEn: "Her sharp-witted replies disarmed the aggressive debate opponents.", exampleHi: "उनके हाजिरजवाब जवाबों ने आक्रामक बहस करने वाले विरोधियों को शांत कर दिया।" },
      { id: "day49_vocab_020", word: "Unassuming", pos: "Adjective", ipa: "/ˌʌn.əˈsjuː.mɪŋ/", meaningHi: "विनम्र, सीधा-साधा और दिखावे से दूर रहने वाला", exampleEn: "Despite his tremendous wealth, he remained a humble, unassuming gentleman.", exampleHi: "अपनी अपार संपत्ति के बावजूद, वह एक विनम्र और दिखावे से दूर रहने वाले सज्जन बने रहे।" }
    ],
    spokenPhrases: [
      { id: "day49_phrase_001", phrase: "He has a distinguished look with wavy salt-and-pepper hair.", register: "Physical Description", meaningHi: "लहरदार काले-सफेद बालों के साथ उनका एक प्रतिष्ठित रूप है।" },
      { id: "day49_phrase_002", phrase: "She was dressed to the nines in a bespoke designer ensemble.", register: "Fashion & Style", meaningHi: "वह एक कस्टम डिज़ाइनर परिधान में बेहद शानदार सजी हुई थी।" },
      { id: "day49_phrase_003", phrase: "He is exceptionally articulate and commands the room effortlessly.", register: "Personality Assessment", meaningHi: "वह असाधारण रूप से सुवक्ता हैं और सहजता से पूरे कमरे का ध्यान आकर्षित करते हैं।" },
      { id: "day49_phrase_004", phrase: "She is a petite woman with high cheekbones and a radiant smile.", register: "Facial Features", meaningHi: "वह उभरे हुए गालों और चमकदार मुस्कान वाली एक छोटे कद की छरहरी महिला हैं।" },
      { id: "day49_phrase_005", phrase: "His pragmatic, even-tempered demeanor keeps the team calm during crises.", register: "Workplace Temperament", meaningHi: "उनका व्यावहारिक और शांत व्यवहार संकट के समय टीम को शांत रखता है।" },
      { id: "day49_phrase_006", phrase: "She has an eye for detail and approaches every task meticulously.", register: "Work Ethic", meaningHi: "वह हर बारीक विवरण पर ध्यान देती हैं और हर काम को बारीकी से करती हैं।" },
      { id: "day49_phrase_007", phrase: "He wore a stylish pair of tailored trousers and a linen shirt.", register: "Casual Attire", meaningHi: "उसने एक स्टाइलिश सिली हुई पतलून और एक लिनन शर्ट पहनी थी।" },
      { id: "day49_phrase_008", phrase: "She is gregarious and strikes up engaging conversations with everyone.", register: "Social Traits", meaningHi: "वह मिलनसार हैं और हर किसी के साथ दिलचस्प बातचीत शुरू करती हैं।" },
      { id: "day49_phrase_009", phrase: "Despite being a towering athlete, he is gentle and unassuming.", register: "Contrasting Traits", meaningHi: "एक बहुत लंबे एथलीट होने के बावजूद, वह कोमल और विनम्र हैं।" },
      { id: "day49_phrase_010", phrase: "He possesses a sharp-witted sense of humor that enlivens every meeting.", register: "Wit & Humor", meaningHi: "उनके पास हाजिरजवाबी वाला हास्यबोध है जो हर बैठक को जीवंत बना देता है।" },
      { id: "day49_phrase_011", phrase: "Her resilient mindset enabled her to overcome severe career setbacks.", register: "Character Strength", meaningHi: "उनकी जुझारू मानसिकता ने उन्हें करियर के गंभीर झटकों से उबरने में सक्षम बनाया।" },
      { id: "day49_phrase_012", phrase: "Never judge a book by its cover; character runs far deeper than attire.", register: "Idiomatic Wisdom", meaningHi: "कभी भी केवल बाहरी रूप से किसी का मूल्यांकन न करें; चरित्र पहनावे से कहीं अधिक गहरा होता है।" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day49_ex_001", english: "The professor is a towering, broad-shouldered gentleman with distinguished silver-gray hair.", hindi: "प्रोफेसर एक बहुत लंबे, चौड़े कंधों वाले सज्जन हैं जिनके बाल प्रतिष्ठित चांदी जैसे भूरे-सफेद हैं।" },
      { id: "day49_ex_002", english: "She arrived at the gala wearing an impeccably tailored bespoke gown that accentuated her slender silhouette.", hindi: "वह गाला में त्रुटिहीन रूप से सिले हुए कस्टम गाउन पहनकर पहुंची, जिसने उसके सुडौल शरीर को उभारा।" },
      { id: "day49_ex_003", english: "His charismatic presence and articulate rhetoric captivated the audience throughout the plenary session.", hindi: "उनकी चुंबकीय उपस्थिति और सुवक्ता वक्तृत्व ने पूरे पूर्ण सत्र के दौरान दर्शकों को मंत्रमुग्ध कर दिया।" },
      { id: "day49_ex_004", english: "The detective noted that the suspect was of stocky build with a receding hairline and deep-set hazel eyes.", hindi: "जासूस ने नोट किया कि संदिग्ध मजबूत गठीले शरीर का था, जिसके माथे से बाल पीछे हट रहे थे और आंखें गहरी भूरी थीं।" },
      { id: "day49_ex_005", english: "Despite her petite stature, she commanded total authority in the corporate boardroom.", hindi: "अपने छोटे कद के बावजूद, उन्होंने कॉर्पोरेट बोर्डरूम में पूर्ण अधिकार का संचालन किया।" },
      { id: "day49_ex_006", english: "He is a meticulous researcher who verifies every statistical data point before publishing.", hindi: "वह एक बारीक शोधकर्ता हैं जो प्रकाशित करने से पहले हर सांख्यिकीय डेटा बिंदु की पुष्टि करते हैं।" },
      { id: "day49_ex_007", english: "A warm, radiant complexion and two deep dimples make her infectious smile unforgettable.", hindi: "एक गर्म, चमकदार रंगत और दो गहरे डिंपल उनकी संक्रामक मुस्कान को अविस्मरणीय बनाते हैं।" },
      { id: "day49_ex_008", english: "She chose a casual yet sophisticated ensemble consisting of a crisp white blouse and pleated navy trousers.", hindi: "उसने एक कैज़ुअल लेकिन परिष्कृत पहनावा चुना जिसमें एक कुरकुरी सफेद ब्लाउज और प्लीटेड नेवी पतलून शामिल थी।" },
      { id: "day49_ex_009", english: "His pragmatic approach to negotiation prioritized tangible financial outcomes over rigid ideologies.", hindi: "बातचीत के प्रति उनके व्यावहारिक दृष्टिकोण ने कठोर विचारधाराओं पर ठोस वित्तीय परिणामों को प्राथमिकता दी।" },
      { id: "day49_ex_010", english: "The young artist has delicate freckles scattered across her cheeks and a vibrant, gregarious personality.", hindi: "युवा कलाकार के गालों पर नाजुक झाइयां बिखरी हुई हैं और उसका व्यक्तित्व जीवंत और मिलनसार है।" },
      { id: "day49_ex_011", english: "He is an even-tempered manager who remains completely unruffled under intense project deadlines.", hindi: "वह एक शांत स्वभाव के प्रबंधक हैं जो तीव्र परियोजना समय सीमा के तहत पूरी तरह से अविचलित रहते हैं।" },
      { id: "day49_ex_012", english: "She is a conscientious doctor who follows up with every post-operative patient personally.", hindi: "वह एक कर्तव्यनिष्ठ डॉक्टर हैं जो सर्जरी के बाद हर मरीज से व्यक्तिगत रूप से संपर्क करती हैं।" },
      { id: "day49_ex_013", english: "The model sported a chiseled jawline, high cheekbones, and closely cropped dark hair.", hindi: "मॉडल का जबड़ा तराशा हुआ, गाल की हड्डियां उभरी हुई और बाल छोटे कटे हुए काले थे।" },
      { id: "day49_ex_014", english: "His sharp-witted remarks added delightful humor to an otherwise dry academic symposium.", hindi: "उनकी हाजिरजवाबी भरी टिप्पणियों ने एक नीरस अकादमिक संगोष्ठी में रमणीय हास्य भर दिया।" },
      { id: "day49_ex_015", english: "The marathon runner maintained an athletic, lean physique built through rigorous daily endurance training.", hindi: "मैराथन धावक ने कठोर दैनिक सहनशक्ति प्रशिक्षण के माध्यम से निर्मित एक कसरती, सुडौल शरीर बनाए रखा।" },
      { id: "day49_ex_016", english: "She wore a tasteful pair of diamond earrings that complemented her minimalist evening dress.", hindi: "उसने हीरे की बालियों की एक सुरुचिपूर्ण जोड़ी पहनी थी जो उसकी न्यूनतम शाम की पोशाक की शोभा बढ़ाती थी।" },
      { id: "day49_ex_017", english: "Resilient leaders view unforeseen failures as essential stepping stones toward long-term mastery.", hindi: "जुझारू नेता अप्रत्याशित असफलताओं को दीर्घकालिक महारत की दिशा में आवश्यक सीढ़ियों के रूप में देखते हैं।" },
      { id: "day49_ex_018", english: "He is an open-minded mentor who actively encourages innovative viewpoints from junior colleagues.", hindi: "वह एक खुले विचारों वाले मार्गदर्शक हैं जो कनिष्ठ सहयोगियों के नवीन दृष्टिकोणों को सक्रिय रूप से प्रोत्साहित करते हैं।" },
      { id: "day49_ex_019", english: "The diplomat was dressed in a formal charcoal three-piece suit paired with polished leather oxfords.", hindi: "राजनयिक ने पॉलिश किए हुए चमड़े के जूतों के साथ एक औपचारिक चारकोल तीन-पीस सूट पहना हुआ था।" },
      { id: "day49_ex_020", english: "Despite receiving international acclaim, she remains remarkably unassuming and approachable.", hindi: "अंतरराष्ट्रीय प्रशंसा प्राप्त करने के बावजूद, वह उल्लेखनीय रूप से विनम्र और सुलभ बनी हुई हैं।" },
      { id: "day49_ex_021", english: "His short-tempered outbursts during meetings alienated several collaborative team members.", hindi: "बैठकों के दौरान उनके गुस्सैल रवैये ने कई सहयोगी टीम के सदस्यों को दूर कर दिया।" },
      { id: "day49_ex_022", english: "She has thick, lustrous chestnut hair that cascades past her shoulders in loose waves.", hindi: "उसके घने, चमकदार शाहबलूती बाल हैं जो ढीली लहरों में उसके कंधों से नीचे गिरते हैं।" },
      { id: "day49_ex_023", english: "A well-groomed appearance creates a powerful positive first impression in professional interviews.", hindi: "एक साफ-सुथरा और सुसज्जित रूप पेशेवर साक्षात्कारों में एक शक्तिशाली सकारात्मक पहला प्रभाव बनाता है।" },
      { id: "day49_ex_024", english: "He is a compassionate advocate who dedicates his weekends to mentoring underprivileged students.", hindi: "वह एक दयालु समर्थक हैं जो अपने सप्ताहांत वंचित छात्रों को मार्गदर्शन देने के लिए समर्पित करते हैं।" },
      { id: "day49_ex_025", english: "Her sartorial elegance reflects a deep appreciation for classical European textile craftsmanship.", hindi: "उनकी पहनावे की सुंदरता शास्त्रीय यूरोपीय कपड़ा शिल्प कौशल के लिए गहरी सराहना को दर्शाती है।" }
    ]
  },
  pronunciation: {
    focusSound: "Pronunciation of /məˈtɪk.jə.ləs/ 'Meticulous', /ˌkɒn.ʃiˈen.ʃəs/ 'Conscientious', and /ɑːˈtɪk.jə.lət/ 'Articulate'",
    phoneticNotes: "1. 'Meticulous' stresses the second syllable: /məˈtɪk.jə.ləs/.\n2. 'Conscientious' has stress on the third syllable: /ˌkɒn.ʃiˈen.ʃəs/.\n3. 'Articulate' (as an adjective) ends in /-lət/: /ɑːˈtɪk.jə.lət/ (as a verb it ends in /-leɪt/).\n4. 'Ensemble' is borrowed from French: /ɒnˈsɒm.bəl/.",
    minimalPairs: [
      { wordA: "Hair", ipaA: "/heər/", wordB: "Hare", ipaB: "/heər/" },
      { wordA: "Chic", ipaA: "/ʃiːk/", wordB: "Cheek", ipaB: "/tʃiːk/" },
      { wordA: "Praise", ipaA: "/preɪz/", wordB: "Prays", ipaB: "/preɪz/" },
      { wordA: "Waist", ipaA: "/weɪst/", wordB: "Waste", ipaB: "/weɪst/" },
      { wordA: "Suit", ipaA: "/suːt/", wordB: "Sweet", ipaB: "/swiːt/" }
    ],
    drills: [
      { sentence: "She is a conscientious and articulate leader.", focus: "Stress in /ˌkɒn.ʃiˈen.ʃəs/ & /ɑːˈtɪk.jə.lət/" },
      { sentence: "The architect paid meticulous attention to the blueprint.", focus: "Four-syllable rhythm in /məˈtɪk.jə.ləs/" },
      { sentence: "He wore a bespoke three-piece wool suit.", focus: "Diphthong /əʊ/ in 'bespoke' /bɪˈspəʊk/" },
      { sentence: "She has a radiant complexion and deep dimples.", focus: "Stress in /kəmˈplek.ʃən/ & /ˈdɪm.pəlz/" },
      { sentence: "The actor had a chiseled jawline and piercing eyes.", focus: "Vowel in /ˈtʃɪz.əld/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day49_ex_001",
        type: "error_correction",
        prompt: "Correct the sentence: 'He has many white hairs on his head.'",
        correctAnswer: "He has gray hair on his head.",
        acceptableAnswers: [
          "He has grey hair on his head.",
          "He has some white hair on his head.",
          "He has gray hair."
        ],
        explanationEn: "Hair on head is uncountable. We say 'gray/grey hair' or 'white hair' without plural 's'.",
        explanationHi: "सिर के बालों के लिए अनकाउंटेबल 'hair' और 'gray hair' का प्रयोग होता है, 'white hairs' का नहीं।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day49_ex_002",
        type: "error_correction",
        prompt: "Correct the sentence: 'She is wearing a new pant.'",
        correctAnswer: "She is wearing a new pair of pants.",
        acceptableAnswers: [
          "She is wearing new pants.",
          "She is wearing a new pair of trousers."
        ],
        explanationEn: "'Pants' / 'trousers' is always plural: 'a pair of pants' or 'pants'.",
        explanationHi: "पैंट के लिए 'a pair of pants' या 'pants' का प्रयोग करें, 'a pant' का नहीं।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day49_ex_003",
        type: "multiple_choice",
        prompt: "Which adjective describes someone who speaks clearly, distinctly, and persuasively?",
        options: ["Articulate", "Stocky", "Petite", "Bespoke"],
        correctAnswer: "Articulate",
        explanationEn: "'Articulate' (/ɑːˈtɪk.jə.lət/) means fluent, coherent, and clear in speech.",
        explanationHi: "स्पष्ट और प्रभावी बोलने वाले सुवक्ता को 'articulate' कहते हैं।",
        difficulty: "easy",
        skillTag: "PERSONALITY_VOCAB"
      },
      {
        id: "day49_ex_004",
        type: "fill_blank",
        prompt: "A person who is extremely careful, precise, and attentive to every tiny detail is _______.",
        correctAnswer: "meticulous",
        explanationEn: "'Meticulous' (/məˈtɪk.jə.ləs/).",
        explanationHi: "हर बारीक विवरण पर ध्यान देने वाले को 'meticulous' कहते हैं।",
        difficulty: "easy",
        skillTag: "TRAIT_DESCRIPTORS"
      },
      {
        id: "day49_ex_005",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'वह एक कर्तव्यनिष्ठ और मेहनती कर्मचारी है जो कभी समय सीमा नहीं चूकता।'",
        correctAnswer: "He is a conscientious and hardworking employee who never misses deadlines.",
        acceptableAnswers: [
          "He is a conscientious and diligent employee who never misses a deadline.",
          "He is a conscientious worker who never misses a deadline."
        ],
        explanationEn: "'He is a conscientious and hardworking employee who never misses deadlines.'",
        explanationHi: "'Conscientious and hardworking employee' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day49_ex_006",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'His charismatic presence inspired confidence across the entire team.'",
        correctAnswer: "उनकी प्रभावशाली (चुंबकीय) उपस्थिति ने पूरी टीम में आत्मविश्वास भर दिया।",
        acceptableAnswers: [
          "उनके करिश्माई व्यक्तित्व ने पूरी टीम में विश्वास जगाया।"
        ],
        explanationEn: "'Charismatic presence' translates as प्रभावशाली / चुंबकीय उपस्थिति.",
        explanationHi: "करिश्माई व्यक्तित्व का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day49_ex_007",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [chiseled / had / jawline / the / actor / a / sharp]",
        correctAnswer: "The actor had a sharp chiseled jawline.",
        acceptableAnswers: [
          "The actor had a chiseled sharp jawline."
        ],
        explanationEn: "Subject + Verb + Noun phrase with compound adjectives.",
        explanationHi: "सही क्रम: The actor had a sharp chiseled jawline.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day49_ex_008",
        type: "multiple_choice",
        prompt: "Which adjective describes a woman of attractively small, slender build and short height?",
        options: ["Petite", "Towering", "Stocky", "Bespoke"],
        correctAnswer: "Petite",
        explanationEn: "'Petite' (/pəˈtiːt/) refers to an attractively small and slender woman.",
        explanationHi: "छोटे कद की छरहरी और आकर्षक महिला के लिए 'petite' शब्द आता है।",
        difficulty: "easy",
        skillTag: "STATURE_VOCAB"
      },
      {
        id: "day49_ex_009",
        type: "error_correction",
        prompt: "Correct the sentence: 'Her hairs are very silky and black.'",
        correctAnswer: "Her hair is very silky and black.",
        explanationEn: "Hair is uncountable: 'Her hair is...', not '*Her hairs are...*'.",
        explanationHi: "'Her hair is silky' का प्रयोग करें, 'hairs are' का नहीं।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day49_ex_010",
        type: "fill_blank",
        prompt: "Clothing that is made to individual measure and custom order is termed _______ clothing.",
        correctAnswer: "bespoke",
        acceptableAnswers: ["tailored", "custom-made"],
        explanationEn: "'Bespoke' (/bɪˈspəʊk/) means custom-made.",
        explanationHi: "विशेष नाप से सिले कपड़ों को 'bespoke' कहते हैं।",
        difficulty: "easy",
        skillTag: "FASHION_VOCAB"
      },
      {
        id: "day49_ex_011",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nRecruiter: 'Why do you recommend Sunita for project lead?'\nManager: 'Because she is exceptionally _______ and articulates strategic goals clearly.'",
        options: ["pragmatic", "drizzle", "stocky", "deluge"],
        correctAnswer: "pragmatic",
        explanationEn: "'Pragmatic' describes a practical and realistic mindset.",
        explanationHi: "व्यावहारिक सोच के लिए 'pragmatic' सही शब्द है।",
        difficulty: "easy",
        skillTag: "CHARACTER_DISCOURSE"
      },
      {
        id: "day49_ex_012",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'जब भी वह मुस्कुराती है तो उसके गालों पर डिंपल पड़ते हैं।'",
        correctAnswer: "Dimples appear on her cheeks whenever she smiles.",
        acceptableAnswers: [
          "She gets dimples on her cheeks whenever she smiles.",
          "Whenever she smiles, charming dimples appear on her cheeks."
        ],
        explanationEn: "'Dimples appear on her cheeks whenever she smiles.'",
        explanationHi: "'Dimples appear on her cheeks' सही है।",
        difficulty: "easy",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day49_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The professor possessed a sharp-witted mind and a compassionate heart.'",
        correctAnswer: "The professor possessed a sharp-witted mind and a compassionate heart.",
        explanationEn: "Focus on spelling hyphenated 'sharp-witted' and 'compassionate'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day49_ex_014",
        type: "sentence_transformation",
        prompt: "Rewrite using 'quick-tempered': 'He gets angry very easily and loses his cool.'",
        correctAnswer: "He is quick-tempered.",
        acceptableAnswers: [
          "He is a quick-tempered person."
        ],
        explanationEn: "'Quick-tempered' captures easily angered personality.",
        explanationHi: "'Quick-tempered' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day49_ex_015",
        type: "matching",
        prompt: "Match the personality trait to its meaning:\n1. Gregarious\n2. Conscientious\n3. Resilient\n4. Unassuming",
        options: [
          "1-Sociable and fond of company, 2-Dutiful and meticulous, 3-Able to recover quickly from hardship, 4-Modest and unpretentious",
          "1-Dutiful, 2-Sociable, 3-Modest, 4-Able to recover",
          "1-Modest, 2-Able to recover, 3-Sociable, 4-Dutiful",
          "1-Able to recover, 2-Modest, 3-Dutiful, 4-Sociable"
        ],
        correctAnswer: "1-Sociable and fond of company, 2-Dutiful and meticulous, 3-Able to recover quickly from hardship, 4-Modest and unpretentious",
        explanationEn: "Accurate matching of high-level psychological trait adjectives.",
        explanationHi: "व्यक्तित्व लक्षणों का सही मिलान।",
        difficulty: "medium",
        skillTag: "TRAIT_MATCHING"
      },
      {
        id: "day49_ex_016",
        type: "error_correction",
        prompt: "Correct the sentence: 'He is of very angry nature.'",
        correctAnswer: "He is very short-tempered.",
        acceptableAnswers: [
          "He has a quick temper.",
          "He is short-tempered."
        ],
        explanationEn: "Do not say '*angry nature*'; use 'short-tempered' or 'quick-tempered'.",
        explanationHi: "'Angry nature' के स्थान पर 'short-tempered' या 'quick-tempered' बोलें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day49_ex_017",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Despite his immense achievements, he remains wonderfully humble and unassuming.'",
        correctAnswer: "अपनी अपार उपलब्धियों के बावजूद, वह अद्भुत रूप से विनम्र और आडंबरहीन बने हुए हैं।",
        acceptableAnswers: [
          "बड़ी सफलताओं के बाद भी वह बहुत सीधे-सादे और विनम्र हैं।"
        ],
        explanationEn: "'Humble and unassuming' translates as विनम्र और आडंबरहीन / दिखावे से दूर.",
        explanationHi: "विनम्रता और सादगी का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day49_ex_018",
        type: "active_recall",
        prompt: "What is the term for hair that is a mixture of black/dark and grey/white strands?",
        correctAnswer: "Salt-and-pepper hair",
        acceptableAnswers: ["salt and pepper hair", "salt-and-pepper"],
        explanationEn: "'Salt-and-pepper hair'.",
        explanationHi: "काले और सफेद बालों के मिश्रण को 'salt-and-pepper hair' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day49_ex_019",
        type: "multiple_choice",
        prompt: "What does the idiom 'dressed to the nines' mean?",
        options: [
          "Dressed in very smart, glamorous, or elaborate clothes",
          "Wearing nine different shirts at once",
          "Wearing worn-out clothes",
          "Dressing in athletic sportswear"
        ],
        correctAnswer: "Dressed in very smart, glamorous, or elaborate clothes",
        explanationEn: "'Dressed to the nines' means impeccably and elegantly dressed.",
        explanationHi: "'Dressed to the nines' का अर्थ बेहद शानदार और सुरुचिपूर्ण कपड़े पहनना है।",
        difficulty: "easy",
        skillTag: "IDIOMATIC_EXPRESSIONS"
      },
      {
        id: "day49_ex_020",
        type: "speaking_pronunciation",
        prompt: "Pronounce four-syllable /məˈtɪk.jə.ləs/ with correct stress: 'The architect was meticulous in his drawings.'",
        correctAnswer: "The architect was meticulous in his drawings.",
        explanationEn: "Second syllable stress: /məˈtɪk.jə.ləs/.",
        explanationHi: "'Meticulous' के दूसरे सिलेबल पर बल दें।",
        difficulty: "medium",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day49_ex_021",
        type: "question_formation",
        prompt: "Form a question asking about someone's physical appearance:",
        correctAnswer: "What does your new manager look like?",
        acceptableAnswers: [
          "Could you describe what your new manager looks like?",
          "How would you describe your new manager's appearance?"
        ],
        explanationEn: "'What does your new manager look like?'",
        explanationHi: "शारीरिक रूप-रंग पूछने का सही प्रश्न।",
        difficulty: "easy",
        skillTag: "QUESTION_FORMATION"
      },
      {
        id: "day49_ex_022",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'उसका रंग साफ और चमकदार है और बाल घुंघराले हैं।'",
        correctAnswer: "She has a fair, radiant complexion and curly hair.",
        acceptableAnswers: [
          "She has a radiant complexion and curly hair.",
          "She has fair skin and curly hair."
        ],
        explanationEn: "'She has a fair, radiant complexion and curly hair.'",
        explanationHi: "'Radiant complexion and curly hair' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day49_ex_023",
        type: "sentence_building",
        prompt: "Build a sentence about a suit using [wore / bespoke / tailored / charcoal / he / suit / a / woolen].",
        correctAnswer: "He wore a bespoke tailored charcoal woolen suit.",
        explanationEn: "'He wore a bespoke tailored charcoal woolen suit.'",
        explanationHi: "सही विशेषण क्रम और वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day49_ex_024",
        type: "multiple_choice",
        prompt: "Which compound adjective means 'having a tolerant and receptive attitude toward new ideas'?",
        options: ["Open-minded", "Short-tempered", "Broad-shouldered", "Well-groomed"],
        correctAnswer: "Open-minded",
        explanationEn: "'Open-minded' means willing to consider new ideas.",
        explanationHi: "खुले विचारों वाले और नए विचारों को अपनाने वाले को 'open-minded' कहते हैं।",
        difficulty: "easy",
        skillTag: "COMPOUND_ADJECTIVES"
      },
      {
        id: "day49_ex_025",
        type: "error_correction",
        prompt: "Correct the sentence: 'He is wearing a blue jean.'",
        correctAnswer: "He is wearing a pair of blue jeans.",
        acceptableAnswers: [
          "He is wearing blue jeans."
        ],
        explanationEn: "Jeans is always plural: 'blue jeans' or 'a pair of blue jeans'.",
        explanationHi: "'A pair of blue jeans' या 'blue jeans' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day49_ex_026",
        type: "fill_blank",
        prompt: "A line on the forehead from which hair is receding is called a receding _______.",
        correctAnswer: "hairline",
        explanationEn: "A 'receding hairline'.",
        explanationHi: "माथे से पीछे हटते बालों की रेखा को 'receding hairline' कहते हैं।",
        difficulty: "easy",
        skillTag: "HAIR_DESCRIPTORS"
      },
      {
        id: "day49_ex_027",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Her even-tempered leadership kept the entire office focused during the crisis.'",
        correctAnswer: "उनके शांत और संतुलित नेतृत्व ने संकट के दौरान पूरे कार्यालय को केंद्रित रखा।",
        acceptableAnswers: [
          "उनके शांत स्वभाव वाले नेतृत्व ने ऑफिस को स्थिर रखा।"
        ],
        explanationEn: "'Even-tempered leadership' translates as शांत और संतुलित नेतृत्व.",
        explanationHi: "शांत नेतृत्व का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day49_ex_028",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [athletic / maintained / the / an / physique / runner]",
        correctAnswer: "The runner maintained an athletic physique.",
        explanationEn: "Subject + Transitive verb + Object noun phrase.",
        explanationHi: "सही क्रम: The runner maintained an athletic physique.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day49_ex_029",
        type: "multiple_choice",
        prompt: "What is the difference between 'slender' and 'skinny'?",
        options: [
          "'Slender' is positive/attractive (gracefully thin), while 'skinny' often implies unattractively or unhealthily underweight",
          "'Slender' means very fat, 'skinny' means tall",
          "There is no difference",
          "'Skinny' is used only for clothes"
        ],
        correctAnswer: "'Slender' is positive/attractive (gracefully thin), while 'skinny' often implies unattractively or unhealthily underweight",
        explanationEn: "Slender has positive connotations; skinny often suggests being too thin.",
        explanationHi: "'Slender' सुडौल और आकर्षक पतला होता है, जबकि 'skinny' जरूरत से ज्यादा दुबला होने का नकारात्मक भाव देता है।",
        difficulty: "medium",
        skillTag: "CONNOTATION_NUANCE"
      },
      {
        id: "day49_ex_030",
        type: "active_recall",
        prompt: "What is the term for a complete outfit of clothes chosen to be worn together?",
        correctAnswer: "Ensemble",
        acceptableAnswers: ["ensemble", "an ensemble", "outfit"],
        explanationEn: "'Ensemble' (/ɒnˈsɒm.bəl/).",
        explanationHi: "कपड़ों के पूरे संयोजन को 'ensemble' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day49_ex_031",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'वह बहुत मिलनसार है और आसानी से नए दोस्त बना लेती है।'",
        correctAnswer: "She is very gregarious and makes new friends effortlessly.",
        acceptableAnswers: [
          "She is extremely gregarious and makes friends easily.",
          "She is very sociable and makes friends effortlessly."
        ],
        explanationEn: "'She is very gregarious and makes new friends effortlessly.'",
        explanationHi: "'Gregarious' और 'makes new friends effortlessly' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day49_ex_032",
        type: "error_correction",
        prompt: "Correct the sentence: 'She bought two pants for office.'",
        correctAnswer: "She bought two pairs of pants for the office.",
        acceptableAnswers: [
          "She bought two pairs of trousers for the office."
        ],
        explanationEn: "Use 'two pairs of pants/trousers', never '*two pants*'.",
        explanationHi: "'Two pairs of pants' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day49_ex_033",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nInterviewer: 'How would colleagues describe your working style?'\nCandidate: 'They describe me as _______ because I double-check all calculations.'",
        options: ["meticulous", "towering", "drizzle", "stocky"],
        correctAnswer: "meticulous",
        explanationEn: "'Meticulous' denotes thoroughness and precision.",
        explanationHi: "सावधानीपूर्वक बारीक काम करने वाले को 'meticulous' कहते हैं।",
        difficulty: "easy",
        skillTag: "JOB_INTERVIEW_DISCOURSE"
      },
      {
        id: "day49_ex_034",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'Her resilient spirit empowered her to overcome adversity.'",
        correctAnswer: "Her resilient spirit empowered her to overcome adversity.",
        explanationEn: "Focus on spelling 'resilient' and 'adversity'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day49_ex_035",
        type: "multiple_choice",
        prompt: "Which adjective describes someone who does not brag or draw attention to their success?",
        options: ["Unassuming", "Charismatic", "Stocky", "Bespoke"],
        correctAnswer: "Unassuming",
        explanationEn: "'Unassuming' means modest and not pretentious.",
        explanationHi: "अपनी सफलता का दिखावा न करने वाले सीधे-सादे व्यक्ति को 'unassuming' कहते हैं।",
        difficulty: "easy",
        skillTag: "PERSONALITY_TRAITS"
      },
      {
        id: "day49_ex_036",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'उसने औपचारिक समारोह के लिए एक कस्टम-निर्मित रेशमी साड़ी पहनी थी।'",
        correctAnswer: "She wore a bespoke silk saree for the formal ceremony.",
        acceptableAnswers: [
          "She was dressed in a tailored silk saree for the formal occasion.",
          "She wore an elegant silk saree for the formal ceremony."
        ],
        explanationEn: "'She wore a bespoke silk saree for the formal ceremony.'",
        explanationHi: "'Bespoke silk saree' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day49_ex_037",
        type: "error_correction",
        prompt: "Correct the sentence: 'He is having white hair on his beard.'",
        correctAnswer: "He has gray hair in his beard.",
        acceptableAnswers: [
          "He has grey hair in his beard."
        ],
        explanationEn: "Use static 'He has...', and 'gray hair', not progressive '*is having*'.",
        explanationHi: "स्थायी लक्षण के लिए 'He has gray hair' का प्रयोग करें, 'is having' का नहीं।",
        difficulty: "easy",
        skillTag: "STATIVE_VERBS"
      },
      {
        id: "day49_ex_038",
        type: "sentence_building",
        prompt: "Build a sentence using [resilient / setback / overcome / every / she / to / was / determined].",
        correctAnswer: "She was resilient and determined to overcome every setback.",
        explanationEn: "'She was resilient and determined to overcome every setback.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day49_ex_039",
        type: "fill_blank",
        prompt: "Someone who always looks neat, clean, and neatly dressed is well-_______.",
        correctAnswer: "groomed",
        explanationEn: "'Well-groomed'.",
        explanationHi: "सलीकेदार और साफ-सुथरे रहने वाले को 'well-groomed' कहते हैं।",
        difficulty: "easy",
        skillTag: "APPEARANCE_TERMS"
      },
      {
        id: "day49_ex_040",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'A towering gentleman with broad shoulders entered the conference hall.'",
        correctAnswer: "चौड़े कंधों वाला एक बहुत लंबा सज्जन सम्मेलन कक्ष में प्रविष्ट हुआ।",
        acceptableAnswers: [
          "एक बहुत लंबे, चौड़े कंधों वाले व्यक्ति ने हॉल में प्रवेश किया।"
        ],
        explanationEn: "'Towering gentleman with broad shoulders' translates as चौड़े कंधों वाला एक बहुत लंबा सज्जन.",
        explanationHi: "कद-काठी के वर्णन का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day49_ex_041",
        type: "multiple_choice",
        prompt: "What does 'chiseled features' refer to?",
        options: [
          "Strong, sharp, and clearly defined facial contours",
          "A person who carves wood",
          "Scars from surgery",
          "Wrinkles on the forehead"
        ],
        correctAnswer: "Strong, sharp, and clearly defined facial contours",
        explanationEn: "'Chiseled features' describes sharp facial definition.",
        explanationHi: "तीखे, स्पष्ट और तराशे हुए चेहरे के नैन-नक्श को 'chiseled features' कहते हैं।",
        difficulty: "easy",
        skillTag: "FACIAL_DESCRIPTORS"
      },
      {
        id: "day49_ex_042",
        type: "active_recall",
        prompt: "What compound adjective means 'having quick wit and mental sharpness'?",
        correctAnswer: "Sharp-witted",
        acceptableAnswers: ["sharp-witted", "quick-witted"],
        explanationEn: "'Sharp-witted' or 'quick-witted'.",
        explanationHi: "हाजिरजवाब और तेज बुद्धि वाले को 'sharp-witted' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day49_ex_043",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [complexion / a / radiant / she / possesses / fair]",
        correctAnswer: "She possesses a fair radiant complexion.",
        acceptableAnswers: [
          "She possesses a radiant fair complexion."
        ],
        explanationEn: "Subject + Verb + Adjectives + Noun.",
        explanationHi: "सही क्रम: She possesses a fair radiant complexion.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day49_ex_044",
        type: "error_correction",
        prompt: "Correct the sentence: 'He washed his hairs with shampoo.'",
        correctAnswer: "He washed his hair with shampoo.",
        explanationEn: "'Hair' is uncountable: 'washed his hair'.",
        explanationHi: "'He washed his hair' कहें, 'hairs' नहीं।",
        difficulty: "easy",
        skillTag: "UNCOUNTABLE_NOUNS"
      },
      {
        id: "day49_ex_045",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'अपनी भारी सफलता के बावजूद वह हमेशा विनम्र और सरल रहते हैं।'",
        correctAnswer: "Despite his immense success, he always remains humble and unassuming.",
        acceptableAnswers: [
          "In spite of his tremendous success, he is always humble and unassuming.",
          "Despite huge success, he remains humble and down to earth."
        ],
        explanationEn: "'Despite his immense success, he always remains humble and unassuming.'",
        explanationHi: "'Humble and unassuming' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day49_ex_046",
        type: "multiple_choice",
        prompt: "Which preposition correctly fills: 'He was dressed _______ a dark charcoal suit.'?",
        options: ["in", "on", "with", "at"],
        correctAnswer: "in",
        explanationEn: "Collocation: 'dressed IN a suit / gown'.",
        explanationHi: "पोशाक पहने होने के लिए 'dressed in' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "PREPOSITIONS"
      },
      {
        id: "day49_ex_047",
        type: "speaking_pronunciation",
        prompt: "Articulate five-syllable rhythm: 'She is a conscientious and diligent researcher.' /ˌkɒn.ʃiˈen.ʃəs/",
        correctAnswer: "She is a conscientious and diligent researcher.",
        explanationEn: "Stress on the third syllable in /ˌkɒn.ʃiˈen.ʃəs/.",
        explanationHi: "'Conscientious' के तीसरे सिलेबल पर बल दें।",
        difficulty: "hard",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day49_ex_048",
        type: "fill_blank",
        prompt: "An athletic build characterized by broad shoulders and narrow hips is termed a V-shaped _______.",
        correctAnswer: "torso",
        acceptableAnswers: ["physique", "build"],
        explanationEn: "A V-shaped 'torso' or 'physique'.",
        explanationHi: "चौड़े कंधों और पतली कमर वाली बनावट को V-shaped torso/physique कहते हैं।",
        difficulty: "medium",
        skillTag: "PHYSIQUE_TERMS"
      },
      {
        id: "day49_ex_049",
        type: "sentence_transformation",
        prompt: "Rewrite using 'articulate': 'He expresses his thoughts with great clarity and fluency.'",
        correctAnswer: "He is an articulate speaker.",
        acceptableAnswers: [
          "He is very articulate.",
          "He articulates his thoughts with great clarity."
        ],
        explanationEn: "'Articulate' precisely means expressing thoughts clearly.",
        explanationHi: "'Articulate' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day49_ex_050",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nStylist: 'Which ensemble would you prefer for the wedding reception?'\nClient: 'I would prefer a _______ tuxedo tailored to my exact measurements.'",
        options: ["bespoke", "drizzle", "stocky", "syllabi"],
        correctAnswer: "bespoke",
        explanationEn: "'Bespoke' indicates customized tailoring.",
        explanationHi: "कस्टम नाप वाले टक्सीडो के लिए 'bespoke' सही शब्द है।",
        difficulty: "easy",
        skillTag: "SARTORIAL_DISCOURSE"
      },
      {
        id: "day49_ex_051",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Her sharp-witted retorts left the audience in stitches of laughter.'",
        correctAnswer: "उनके हाजिरजवाब उत्तरों ने दर्शकों को ठहाके लगाने पर मजबूर कर दिया।",
        acceptableAnswers: [
          "उनकी हाजिरजवाबी ने सबको हंसा-हंसा कर लोटपोट कर दिया।"
        ],
        explanationEn: "'Sharp-witted retorts' translates as हाजिरजवाब उत्तर.",
        explanationHi: "हाजिरजवाबी का अनुवाद।",
        difficulty: "hard",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day49_ex_052",
        type: "multiple_choice",
        prompt: "What is the meaning of the adjective 'resilient'?",
        options: [
          "Able to withstand or recover quickly from difficult conditions",
          "Easily broken or fragile",
          "Extremely angry",
          "Wearing very expensive clothes"
        ],
        correctAnswer: "Able to withstand or recover quickly from difficult conditions",
        explanationEn: "'Resilient' means strong and quick to bounce back from adversity.",
        explanationHi: "कठिनाइयों का डटकर मुकाबला करने और जल्दी उबरने वाले को 'resilient' कहते हैं।",
        difficulty: "easy",
        skillTag: "PSYCHOLOGICAL_TERMS"
      },
      {
        id: "day49_ex_053",
        type: "error_correction",
        prompt: "Correct the sentence: 'He bought a new pant and two shirts.'",
        correctAnswer: "He bought a new pair of pants and two shirts.",
        acceptableAnswers: [
          "He bought new pants and two shirts.",
          "He bought a pair of trousers and two shirts."
        ],
        explanationEn: "Use 'a pair of pants', not '*a new pant*'.",
        explanationHi: "'A pair of pants' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day49_ex_054",
        type: "active_recall",
        prompt: "What is the word for small brownish spots on the skin, especially on the face, caused by sun exposure?",
        correctAnswer: "Freckles",
        acceptableAnswers: ["freckles"],
        explanationEn: "'Freckles' (/ˈfrek.əlz/).",
        explanationHi: "चेहरे पर धूप से पड़ने वाले हल्के भूरे तिलों/झाइयों को 'freckles' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day49_ex_055",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'एक सुसज्जित रूप और सकारात्मक दृष्टिकोण पेशेवर सफलता में महत्वपूर्ण भूमिका निभाते हैं।'",
        correctAnswer: "A well-groomed appearance and positive mindset play a crucial role in professional success.",
        acceptableAnswers: [
          "A well-groomed appearance and a positive attitude play a pivotal role in professional success.",
          "Looking well-groomed with a positive mindset is essential for professional success."
        ],
        explanationEn: "'A well-groomed appearance and positive mindset play a crucial role in professional success.'",
        explanationHi: "'Well-groomed appearance and positive mindset' सही है।",
        difficulty: "hard",
        skillTag: "TRANSLATION_HI_EN"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day49_dial_001",
        title: "Controlled Character Sketch & Professional Appearance",
        context: "Two senior executives (Vikram and Ananya) discussing the profile and impression of an incoming vice-president.",
        characters: ["Vikram", "Ananya"],
        lines: [
          { speaker: "Vikram", text: "Have you met our incoming Vice President of Operations, Dr. Rajesh Mehta?", hindi: "क्या आप हमारे आने वाले उपाध्यक्ष डॉ. राजेश मेहता से मिले हैं?" },
          { speaker: "Ananya", text: "Yes, I attended his orientation briefing yesterday. He is a towering gentleman with distinguished salt-and-pepper hair and a very articulate speaking style.", hindi: "हाँ, मैं कल उनके ओरिएंटेशन ब्रीफिंग में शामिल हुई थी। वह प्रतिष्ठित काले-सफेद बालों और बहुत स्पष्ट सुवक्ता शैली वाले एक बहुत लंबे सज्जन हैं।" },
          { speaker: "Vikram", text: "How was his demeanor during the interactive question session?", hindi: "सवालों के सत्र के दौरान उनका व्यवहार कैसा था?" },
          { speaker: "Ananya", text: "Immensely pragmatic and patient. He addressed tough budget constraints with meticulous data analysis and a calm, even-tempered approach.", hindi: "अत्यंत व्यावहारिक और धैर्यवान। उन्होंने सूक्ष्म डेटा विश्लेषण और एक शांत, संतुलित दृष्टिकोण के साथ कठिन बजट बाधाओं को संबोधित किया।" },
          { speaker: "Vikram", text: "That is reassuring. We definitely need a resilient and charismatic leader at the helm.", hindi: "यह आश्वस्त करने वाला है। हमें निश्चित रूप से शीर्ष पर एक जुझारू और प्रभावशाली नेता की आवश्यकता है।" }
        ]
      },
      {
        id: "day49_dial_002",
        title: "Guided Sartorial Styling: Bespoke Formalwear Consultation",
        context: "A bespoke tailor (Master Tailor Giancarlo) consulting a client (Sanjay) for a custom gala suit.",
        characters: ["Giancarlo", "Sanjay"],
        lines: [
          { speaker: "Giancarlo", text: "Good afternoon, Mr. Sanjay. We are crafting a bespoke three-piece charcoal ensemble for your international awards gala.", hindi: "शुभ दोपहर, मिस्टर संजय। हम आपके अंतरराष्ट्रीय पुरस्कार समारोह के लिए तीन-पीस चारकोल परिधान तैयार कर रहे हैं।" },
          { speaker: "Sanjay", text: "I would prefer a modern slim-fit cut that complements my athletic build without restricting movement.", hindi: "मैं एक आधुनिक स्लिम-फिट कट पसंद करूँगा जो बिना गति को रोके मेरी कसरती बनावट की शोभा बढ़ाए।" },
          { speaker: "Giancarlo", text: "Certainly. We will taper the trousers neatly at the ankle and structure the jacket with peak lapels to accentuate your broad shoulders.", hindi: "निश्चित रूप से। हम पतलून को टखने पर सुव्यवस्थित रूप से टेपर करेंगे और आपके चौड़े कंधों को उभारने के लिए जैकेट को पीक लैपल्स के साथ तैयार करेंगे।" },
          { speaker: "Sanjay", text: "Excellent. Let us also ensure the fabric is lightweight, breathable wool suitable for travel.", hindi: "उत्कृष्ट। आइए यह भी सुनिश्चित करें कि कपड़ा हल्का, हवादार ऊन हो जो यात्रा के लिए उपयुक्त हो।" }
        ]
      },
      {
        id: "day49_dial_003",
        title: "Free Problem-Resolution: Comprehensive Candidate Evaluation & Team Dynamics",
        context: "Two HR directors (Rohit and Meera) evaluating two finalist candidates for a global diplomatic role.",
        characters: ["Rohit", "Meera"],
        lines: [
          { speaker: "Rohit", text: "Both finalists possess impressive resumes, but their personality profiles offer contrasting leadership strengths.", hindi: "दोनों अंतिम उम्मीदवारों के पास प्रभावशाली बायोडाटा हैं, लेकिन उनके व्यक्तित्व प्रोफाइल विपरीत नेतृत्व शक्तियां प्रदान करते हैं।" },
          { speaker: "Meera", text: "Candidate A is exceptionally gregarious, sharp-witted, and charismatic, excelling in high-stakes public diplomacy and media interviews.", hindi: "उम्मीदवार A असाधारण रूप से मिलनसार, हाजिरजवाब और करिश्माई हैं, जो उच्च-स्तरीय सार्वजनिक कूटनीति और मीडिया साक्षात्कारों में उत्कृष्ट हैं।" },
          { speaker: "Rohit", text: "Whereas Candidate B is conscientious, meticulous, and unassuming, with proven resilience in complex policy drafting and dispute mediation.", hindi: "जबकि उम्मीदवार B कर्तव्यनिष्ठ, सूक्ष्म और विनम्र हैं, जिनमें जटिल नीति निर्माण और विवाद मध्यस्थता में सिद्ध जुझारूपन है।" },
          { speaker: "Meera", text: "Given that our immediate mission involves sensitive multilateral treaty negotiations, Candidate B's pragmatic and even-tempered approach aligns perfectly with our organizational needs.", hindi: "चूंकि हमारे तत्काल मिशन में संवेदनशील बहुपक्षीय संधि वार्ता शामिल है, उम्मीदवार B का व्यावहारिक और संतुलित दृष्टिकोण हमारी संगठनात्मक आवश्यकताओं के साथ पूरी तरह से मेल खाता है।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are giving an in-depth character sketch of a person you admire (a mentor, colleague, historical figure, or family member), detailing their physical presence, sartorial style, and internal personality traits.",
      prompts: [
        "Describe their physical stature, facial features, and hair with precision (e.g., towering, athletic, radiant complexion, salt-and-pepper hair).",
        "Describe their sartorial style and attire (e.g., bespoke tailoring, well-groomed, casual ensemble).",
        "Analyze their core character traits using high-level adjectives (e.g., conscientious, articulate, pragmatic, resilient, unassuming).",
        "Give a concrete anecdote illustrating how their personality influenced others positively."
      ],
      targetExpressions: [
        "He/She possesses a distinguished appearance with...",
        "Always impeccably well-groomed, he/she prefers...",
        "What stands out most is their conscientious and...",
        "His/Her resilient mindset in the face of adversity..."
      ]
    },
    roleplay: {
      scenario: "Police witness interview describing a missing person or suspect in rich detail.",
      roleA: "Detective: Asking targeted questions about height, build, facial contours, hair, clothing, and demeanor.",
      roleB: "Witness: Providing precise descriptors (e.g., stocky build, chiseled jawline, receding hairline, bespoke navy blazer).",
      sampleDialogue: "Detective: 'Can you describe the individual's build and clothing?' | Witness: 'He was about six feet tall with an athletic build, wearing a tailored navy blazer and dark trousers.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day49_bm_001",
        title: "Physical Stature & Anthropometric Description Benchmark",
        prompt: "Construct a vivid physical description of an individual in 4–5 sentences, detailing height, build, facial features, and hair without any Indian English literalisms.",
        sampleAnswerEn: "Dr. Alistair is a towering gentleman standing well over six feet tall, with a lean, athletic build cultivated through years of rowing. He has a radiant, sun-kissed complexion, high cheekbones, and piercing hazel eyes framed by classic horn-rimmed glasses. His distinguished silver-gray hair is neatly cropped and parted with effortless precision. A subtle cleft in his chiseled chin adds character to his authoritative yet inviting presence.",
        sampleAnswerHi: "डॉ. एलिस्टेयर छह फीट से अधिक लंबे, शानदार कद वाले सज्जन हैं, जिनका शरीर नौकायन के वर्षों के माध्यम से निर्मित एक सुडौल, कसरती शरीर है। उनका रंग चमकदार, धूप से निखरा हुआ, गाल की हड्डियां उभरी हुई और क्लासिक चश्मे के पीछे तीखी भूरी आंखें हैं। उनके विशिष्ट चांदी जैसे भूरे बाल करीने से छोटे कटे हुए हैं और सहज सटीकता के साथ संवारे गए हैं। उनकी तराशी हुई ठोड़ी पर एक सूक्ष्म गड्ढा उनकी आधिकारिक लेकिन आकर्षक उपस्थिति में गरिमा जोड़ता है।",
        evaluationCriteria: "Flawless anthropometric descriptors ('towering gentleman', 'athletic build', 'radiant complexion', 'silver-gray hair', 'chiseled chin'), no '*hairs*' error, strong syntactic flow."
      },
      {
        id: "day49_bm_002",
        title: "Sartorial Styling & Garment Terminology Benchmark",
        prompt: "Describe an individual's formal gala outfit in 4–5 sentences, employing accurate terminology such as 'bespoke', 'ensemble', 'tailored trousers', and accessories.",
        sampleAnswerEn: "For the annual philanthropic gala, Evelyn selected an exquisite bespoke evening ensemble tailored specifically to her measurements. She wore an emerald-green silk velvet gown featuring delicate hand-embroidered lace along the neckline. The flowing silhouette was tastefully accented by a pair of vintage diamond earrings and a minimalist satin clutch. Her entire attire was impeccably well-groomed, striking a perfect balance between timeless elegance and modern haute couture.",
        sampleAnswerHi: "वार्षिक परोपकारी समारोह के लिए, एवलिन ने विशेष रूप से अपने नाप के अनुरूप तैयार किया गया एक उत्कृष्ट कस्टम शाम का परिधान चुना। उसने पन्ना-हरे रंग का रेशमी मखमली गाउन पहना था जिसमें नेकलाइन के साथ नाजुक हाथ से कशीदाकारी का लेस था। बहते हुए सिल्हूट को विंटेज हीरे की बालियों की एक जोड़ी और एक साधारण साटन क्लच द्वारा सुरुचिपूर्ण ढंग से सजाया गया था। उनका पूरा पहनावा त्रुटिहीन रूप से सुसज्जित था, जिसने शाश्वत लालित्य और आधुनिक हाउते वस्त्र शैली के बीच एक आदर्श संतुलन बनाया।",
        evaluationCriteria: "Precise sartorial terminology ('bespoke evening ensemble', 'silk velvet gown', 'flowing silhouette', 'pair of vintage diamond earrings', 'impeccably well-groomed')."
      },
      {
        id: "day49_bm_003",
        title: "Psychological Character Sketch & Leadership Trait Benchmark",
        prompt: "Write a comprehensive psychological profile of an exceptional leader in 4–5 sentences, incorporating compound adjectives and traits such as 'conscientious', 'articulate', 'resilient', and 'pragmatic'.",
        sampleAnswerEn: "Anita is widely admired as a sharp-witted and conscientious director who leads with unwavering integrity. Renowned for her articulate communication, she distills complex geopolitical challenges into actionable corporate strategies with effortless clarity. Furthermore, her pragmatic decision-making and even-tempered demeanor keep the executive committee grounded during intense market volatility. Above all, her resilient spirit ensures that unexpected organizational setbacks are swiftly transformed into strategic learning opportunities.",
        sampleAnswerHi: "अनीता को एक हाजिरजवाब और कर्तव्यनिष्ठ निदेशक के रूप में व्यापक रूप से सराहा जाता है जो अटूट निष्ठा के साथ नेतृत्व करती हैं। अपने स्पष्ट और सुवक्ता संचार के लिए प्रसिद्ध, वह सहज स्पष्टता के साथ जटिल भू-राजनीतिक चुनौतियों को व्यावहारिक कॉर्पोरेट रणनीतियों में बदल देती हैं। इसके अलावा, उनका व्यावहारिक निर्णय लेने का तरीका और शांत व्यवहार तीव्र बाजार अस्थिरता के दौरान कार्यकारी समिति को स्थिर रखता है। सबसे बढ़कर, उनकी जुझारू भावना यह सुनिश्चित करती है कि अप्रत्याशित संगठनात्मक झटके तेजी से रणनीतिक सीखने के अवसरों में बदल जाएं।",
        evaluationCriteria: "Rich psychological and leadership lexicon ('sharp-witted', 'conscientious', 'articulate communication', 'pragmatic decision-making', 'even-tempered demeanor', 'resilient spirit')."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "Why is '*He has white hairs*' incorrect in English?", a: "Because 'hair' on the head is uncountable. The natural expression is 'He has gray/grey hair' or 'white hair' without 's'." },
      { q: "Why must we say 'a pair of pants' or 'pants' rather than '*a pant*'?", a: "Because bifurcated lower-body garments (pants, trousers, jeans, shorts) are grammatically plural nouns." },
      { q: "What does 'articulate' mean when used as an adjective?", a: "It describes a person who expresses ideas fluently, clearly, and persuasively in speech." },
      { q: "What is the difference between 'bespoke' and off-the-rack clothing?", a: "'Bespoke' garments are custom-made to an individual's exact body measurements, whereas off-the-rack clothes are mass-produced in standard sizes." },
      { q: "What does 'unassuming' mean?", a: "Modest, humble, and not arrogant or pretentious despite great success or wealth." }
    ],
    spacedTips: [
      "Practice describing friends and colleagues using compound adjectives: 'sharp-witted', 'broad-shouldered', 'even-tempered', 'open-minded'.",
      "Eliminate 'pant' and 'hairs' completely from your vocabulary: use 'pants / pair of trousers' and 'hair'.",
      "Read character sketches in literature to absorb descriptive pairings: 'radiant complexion', 'chiseled jawline', 'bespoke suit'."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day49.js'), `export const day49 = ${JSON.stringify(day49, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Upgraded Day 49 (55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks)");
