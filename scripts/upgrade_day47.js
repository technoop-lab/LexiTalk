import fs from 'fs';
import path from 'path';

// Day 47: Weather, Seasons, Climate & Environmental Conditions
const day47 = {
  dayNumber: 47,
  id: "day_47",
  titleEn: "Weather, Seasons, Climate & Environmental Conditions",
  titleHi: "मौसम, ऋतुएं, जलवायु एवं पर्यावरणीय परिस्थितियां",
  cefr: "A2.2",
  estMinutes: 60,
  prerequisites: "Day 46 Mastery (Medical Specialists & Pharmacology Syntax)",
  objectivesEn: [
    "Describe complex meteorological conditions: drizzle, downpour, blizzard, humidity, haze, smog, heatwave, gale-force winds, overcast skies, and precipitation.",
    "Master climate and seasonal transitions: monsoon deluge, temperate autumn, scorching tropical summer, sub-zero winters, and spring thaw.",
    "Discuss atmospheric metrics: barometric pressure, UV index, relative humidity, air quality index (AQI), wind chill, and precipitation probabilities.",
    "Engage in environmental conversations: sustainability, carbon emissions, deforestation, droughts, flash floods, and global warming.",
    "Eliminate persistent Indian English weather literalisms such as '*too much cold is there*', '*rain is falling*', '*season is changing*', and '*open the fan*'."
  ],
  objectivesHi: [
    "मौसम की जटिल और सटीक स्थितियों (Drizzle, Downpour, Blizzard, Humidity, Haze, Smog, Heatwave, Overcast, Gale-force winds) का धाराप्रवाह वर्णन करना।",
    "ऋतुओं और जलवायु परिवर्तनों (Monsoon, Autumn, Scorching Summer, Sub-zero Winter, Spring) पर विस्तार से बात करना।",
    "वायुमंडलीय मानकों (AQI, UV Index, Relative Humidity, Wind Chill, Precipitation) को समझना और चर्चा करना।",
    "पर्यावरणीय मुद्दों (Sustainability, Deforestation, Drought, Flash Floods, Carbon Emissions) पर व्यवस्थित विचार रखना।",
    "भारतीय अंग्रेज़ी की मौसम संबंधी भूलों ('too much cold is there', 'rain is falling', 'climate is bad') को मानक अंग्रेज़ी से बदलना।"
  ],
  teach: {
    hindiExplanation: `डे 47 में हम मौसम (Weather), ऋतुओं (Seasons), जलवायु (Climate) और पर्यावरणीय शब्दावली (Environmental Discourse) पर संपूर्ण महारत हासिल करेंगे।

1. **मौसम के विभिन्न रूप (Meteorological Expressions)**:
   - **Drizzle**: हल्की बूंदाबांदी / फुहार।
   - **Downpour / Torrential Rain**: मूसलाधार बारिश / झमाझम बारिश।
   - **Overcast**: बादलों से घिरा हुआ / घटाटोप आसमान।
   - **Scorching / Sweltering**: चिलचिलाती धूप या पसीना बहाने वाली भीषण गर्मी।
   - **Brisk / Chilly**: हल्की सुखद ठंड या ठंडी हवा।
   - **Haze / Smog**: धुंध / धुआं और कोहरे का विषैला मिश्रण (Smoke + Fog = Smog).
   - **Humidity**: हवा में नमी / उमस।

2. **वायुमंडलीय और पर्यावरणीय मानक (Metrics & Environment)**:
   - **AQI (Air Quality Index)**: वायु गुणवत्ता सूचकांक।
   - **Precipitation**: वर्षण / बारिश या बर्फबारी का होना।
   - **Heatwave**: लू / अत्यधिक गर्म हवाओं का दौर।
   - **Flash Flood**: अचानक आई विनाशकारी बाढ़।
   - **Drought**: सूखा / वर्षा का गंभीर अभाव।

3. **L1 हिंदी भाषियों की आम गलतियां**:
   - कभी न कहें: '*Today too much cold is there.*' ❌। अंग्रेज़ी में मौसम के लिए 'It' का प्रयोग होता है: "**It is bitterly cold today.**" या "**It is freezing outside.**" ✔️
   - बारिश के लिए: '*Rain is falling.*' ❌ के स्थान पर "**It is pouring down.**" या "**It is raining heavily.**" बोलें।
   - 'Climate is hot today' ❌ न कहें (Climate किसी क्षेत्र की दशकों की दीर्घकालिक जलवायु होती है; आज का दिन 'Weather' है): "**The weather is scorching today.**" ✔️`,
    englishExplanation: `Day 47 immerses learners in sophisticated meteorological vocabulary, atmospheric descriptors, climate crisis discussions, and environmental sustainability concepts.

Key Learning Dimensions:
1. **Micro & Macro Weather Systems**: Distinguishing drizzle vs downpour, breeze vs gale, haze vs smog, and sleet vs hail.
2. **Atmospheric Metrics**: Interacting with Air Quality Index (AQI), Relative Humidity percentages, UV Index ratings, and Weather Forecast reports.
3. **Environmental Discourse**: Formulating arguments regarding carbon footprints, renewable energy, droughts, flash floods, and biodiversity conservation.`,
    grammarRules: [
      {
        ruleNumber: 1,
        title: "Dummy Subject 'It' for Meteorological Conditions",
        description: "Weather phenomena always use dummy 'It': 'It is drizzling', 'It is sweltering', 'It snowed heavily' (NEVER '*Today rain is falling*' or '*Cold is there*').",
        register: "Meteorological Syntax"
      },
      {
        ruleNumber: 2,
        title: "The Distinction Between 'Weather' (Transient) and 'Climate' (Long-Term)",
        description: "'Weather' refers to day-to-day atmospheric conditions; 'Climate' refers to 30-year aggregate patterns: 'The weather today is humid, but the regional climate is semi-arid.'",
        register: "Geographical Precision"
      },
      {
        ruleNumber: 3,
        title: "Adverbial Degree Modifiers with Weather Adjectives",
        description: "Enhance descriptions using nuanced adverbs: 'bitterly cold', 'scorching hot', 'torrentially raining', 'pleasantly brisk', 'extremely humid'.",
        register: "Collocational Nuance"
      },
      {
        ruleNumber: 4,
        title: "Causal Connectors for Environmental Impacts",
        description: "Link environmental causes and outcomes: 'Due to severe deforestation, the river basin suffered catastrophic flash floods.'",
        register: "Environmental Discourse"
      }
    ],
    formulaTable: [
      {
        subjectGroup: "Present Weather State",
        formula: "It is + [Adverb: bitterly / scorching / pleasantly] + [Adjective: cold / hot / humid / overcast] + outside.",
        exampleEn: "It is bitterly cold and overcast outside this morning.",
        meaningHi: "आज सुबह बाहर कड़ाके की ठंड और घटाटोप बादल छाए हुए हैं।"
      },
      {
        subjectGroup: "Weather Forecast Probability",
        formula: "There is a + [Percentage] + chance of + [Precipitation: torrential downpour / scattered showers / snow] + this afternoon.",
        exampleEn: "There is an eighty percent chance of torrential downpours this afternoon.",
        meaningHi: "आज दोपहर मूसलाधार बारिश होने की अस्सी प्रतिशत संभावना है।"
      },
      {
        subjectGroup: "Air Quality / Environmental Metric",
        formula: "The + [Metric: AQI / Humidity] + has reached + [Level / Number], making it + [Hazardous / Uncomfortable] + for + [Group].",
        exampleEn: "The Air Quality Index has reached 350, making it hazardous for outdoor exercise.",
        meaningHi: "वायु गुणवत्ता सूचकांक 350 तक पहुंच गया है, जिससे बाहर व्यायाम करना खतरनाक हो गया है।"
      },
      {
        subjectGroup: "Climate Impact Statement",
        formula: "Rising global temperatures have triggered unprecedented + [Environmental Event: droughts / wildfires / flash floods].",
        exampleEn: "Rising global temperatures have triggered unprecedented flash floods and glacial retreat.",
        meaningHi: "बढ़ते वैश्विक तापमान ने अभूतपूर्व अचानक बाढ़ और ग्लेशियरों के पिघलने को जन्म दिया है।"
      }
    ],
    hindiSpeakerTrap: {
      trapTitle: "The 'Rain is Falling', 'Too Much Cold is There', and 'Weather vs Climate' Traps",
      hindiPattern: "1. '*Today rain is falling.*' (बारिश गिर रही है)\n2. '*In Delhi too much cold is there.*' (दिल्ली में बहुत ठंड है)\n3. '*Today's climate is very good.*' (आज का क्लाइमेट अच्छा है)\n4. '*Open the fan because season is hot.*'",
      potentialInterference: "Direct literal translation from Hindi syntax (ठंड है, बारिश गिर रही है, मौसम/क्लाइमेट का घालमेल).",
      explanation: "English requires the impersonal dummy subject 'It': 'It is raining', 'It is freezing in Delhi'. 'Climate' is long-term (years); daily state is 'weather'. You 'turn on' a fan, not 'open' it.",
      naturalSolution: "1. 'It is pouring / raining outside.' | 2. 'It is bitterly cold in Delhi.' | 3. 'The weather is wonderful today.' | 4. 'Turn on the fan because it is sweltering.'"
    }
  },
  learn: {
    vocabulary: [
      { id: "day47_vocab_001", word: "Drizzle", pos: "Noun/Verb", ipa: "/ˈdrɪz.əl/", meaningHi: "हल्की बूंदाबांदी / फुहार पड़ना", exampleEn: "A gentle drizzle fell throughout the misty autumn morning.", exampleHi: "धुंध भरी शरद ऋतु की सुबह हल्की बूंदाबांदी होती रही।" },
      { id: "day47_vocab_002", word: "Downpour", pos: "Noun", ipa: "/ˈdaʊn.pɔːr/", meaningHi: "मूसलाधार बारिश / झमाझम वर्षा", exampleEn: "We took shelter under an awning during the sudden monsoon downpour.", exampleHi: "हमने अचानक आए मानसूनी मूसलाधार बारिश के दौरान एक शेड के नीचे शरण ली।" },
      { id: "day47_vocab_003", word: "Overcast", pos: "Adjective", ipa: "/ˌəʊ.vəˈkɑːst/", meaningHi: "बादलों से घिरा हुआ / घटाटोप", exampleEn: "The sky remained overcast and gray for three consecutive days.", exampleHi: "आसमान लगातार तीन दिनों तक बादलों से घिरा और धूसर रहा।" },
      { id: "day47_vocab_004", word: "Humidity", pos: "Noun", ipa: "/hjuːˈmɪd.ə.ti/", meaningHi: "हवा में नमी / उमस", exampleEn: "High relative humidity makes the summer heat feel far more oppressive.", exampleHi: "उच्च सापेक्ष आर्द्रता (उमस) गर्मी की तपिश को और अधिक असहनीय बना देती है।" },
      { id: "day47_vocab_005", word: "Heatwave", pos: "Noun", ipa: "/ˈhiːt.weɪv/", meaningHi: "लू / भीषण गर्म हवाओं का दौर", exampleEn: "The meteorological department issued an emergency warning for the intense heatwave.", exampleHi: "मौसम विभाग ने भीषण लू के लिए आपातकालीन चेतावनी जारी की।" },
      { id: "day47_vocab_006", word: "Smog", pos: "Noun", ipa: "/smɒɡ/", meaningHi: "धुआंसा / विषैला धुआं और कोहरा (Smoke + Fog)", exampleEn: "Heavy industrial smog reduced visibility across the metropolitan city.", exampleHi: "घने औद्योगिक धुएं और कोहरे (स्मॉग) ने महानगर में दृश्यता को कम कर दिया।" },
      { id: "day47_vocab_007", word: "Precipitation", pos: "Noun", ipa: "/prɪˌsɪp.ɪˈteɪ.ʃən/", meaningHi: "वर्षण (बारिश, ओले या बर्फबारी)", exampleEn: "The regional forecast predicts heavy precipitation over the coastal regions.", exampleHi: "क्षेत्रीय पूर्वानुमान तटीय क्षेत्रों में भारी वर्षण (बारिश) की भविष्यवाणी करता है।" },
      { id: "day47_vocab_008", word: "Blizzard", pos: "Noun", ipa: "/ˈblɪz.əd/", meaningHi: "भीषण बर्फीला तूफान", exampleEn: "A severe blizzard paralyzed transportation across the mountain highways.", exampleHi: "एक भीषण बर्फीले तूफान ने पहाड़ी राजमार्गों पर यातायात को ठप कर दिया।" },
      { id: "day47_vocab_009", word: "Drought", pos: "Noun", ipa: "/draʊt/", meaningHi: "सूखा / अकाल (लंबे समय तक बारिश न होना)", exampleEn: "The prolonged drought depleted agricultural reservoirs and damaged crops.", exampleHi: "लंबे सूखे ने कृषि जलाशयों को खाली कर दिया और फसलों को नुकसान पहुँचाया।" },
      { id: "day47_vocab_010", word: "Sweltering", pos: "Adjective", ipa: "/ˈswel.tər.ɪŋ/", meaningHi: "पसीने से तर-बतर करने वाली भीषण गर्मी", exampleEn: "We turned on the air conditioning to escape the sweltering afternoon heat.", exampleHi: "दोपहर की भीषण गर्मी से बचने के लिए हमने एयर कंडीशनर चालू कर दिया।" },
      { id: "day47_vocab_011", word: "Forecast", pos: "Noun/Verb", ipa: "/ˈfɔː.kɑːst/", meaningHi: "मौसम का पूर्वानुमान", exampleEn: "The weekly weather forecast predicts sunny skies from Thursday onward.", exampleHi: "साप्ताहिक मौसम पूर्वानुमान गुरुवार से धूप वाले आसमान की भविष्यवाणी करता है।" },
      { id: "day47_vocab_012", word: "Deluge", pos: "Noun", ipa: "/ˈdel.juːdʒ/", meaningHi: "जलप्रलय / बाढ़ / अत्यधिक पानी का बहाव", exampleEn: "The monsoon deluge submerged low-lying residential streets.", exampleHi: "मानसूनी जलप्रलय ने निचले रिहायशी इलाकों की सड़कों को जलमग्न कर दिया।" },
      { id: "day47_vocab_013", word: "Haze", pos: "Noun", ipa: "/heɪz/", meaningHi: "धुंध / धूल या नमी की पतली परत", exampleEn: "A golden haze covered the horizon as the sun began to set.", exampleHi: "सूरज ढलने पर क्षितिज पर सुनहरी धुंध छा गई।" },
      { id: "day47_vocab_014", word: "Deforestation", pos: "Noun", ipa: "/diːˌfɒr.ɪˈsteɪ.ʃən/", meaningHi: "वनों की कटाई / निर्वनीकरण", exampleEn: "Widespread deforestation accelerates soil erosion and global warming.", exampleHi: "व्यापक वनों की कटाई मिट्टी के कटाव और ग्लोबल वार्मिंग को तेज करती है।" },
      { id: "day47_vocab_015", word: "Sustainability", pos: "Noun", ipa: "/səˌsteɪ.nəˈbɪl.ə.ti/", meaningHi: "सततता / पर्यावरणीय स्थिरता", exampleEn: "Urban planners emphasize renewable energy and ecological sustainability.", exampleHi: "शहरी योजनाकार नवीकरणीय ऊर्जा और पारिस्थितिक स्थिरता पर जोर देते हैं।" },
      { id: "day47_vocab_016", word: "Brisk", pos: "Adjective", ipa: "/brɪsk/", meaningHi: "सुखद ठंडी व ताज़ा (हवा)", exampleEn: "We enjoyed a brisk morning walk through the pine forest.", exampleHi: "हमने देवदार के जंगल में सुबह की ताज़ा और ठंडी सैर का आनंद लिया।" },
      { id: "day47_vocab_017", word: "Gale", pos: "Noun", ipa: "/ɡeɪl/", meaningHi: "तेज आंधी / प्रचंड हवाएं (Gale-force winds)", exampleEn: "Gale-force winds knocked down power lines and uprooted trees.", exampleHi: "प्रचंड आंधी ने बिजली की तारों को गिरा दिया और पेड़ों को उखाड़ दिया।" },
      { id: "day47_vocab_018", word: "Biodiversity", pos: "Noun", ipa: "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/", meaningHi: "जैव विविधता", exampleEn: "Tropical rainforests harbor unmatched biodiversity and unique wildlife species.", exampleHi: "उष्णकटिबंधीय वर्षावन बेजोड़ जैव विविधता और अनूठी वन्यजीव प्रजातियों को आश्रय देते हैं।" },
      { id: "day47_vocab_019", word: "Flash flood", pos: "Noun", ipa: "/ˈflæʃ ˌflʌd/", meaningHi: "अचानक आई विनाशकारी बाढ़", exampleEn: "A cloudburst triggered deadly flash floods in the Himalayan valley.", exampleHi: "बादल फटने से हिमालयी घाटी में जानलेवा अचानक बाढ़ आ गई।" },
      { id: "day47_vocab_020", word: "Emissions", pos: "Noun (plural)", ipa: "/iˈmɪʃ.ənz/", meaningHi: "उत्सर्जन (विशेषकर कार्बन गैसों का)", exampleEn: "Transitioning to electric vehicles drastically reduces greenhouse gas emissions.", exampleHi: "इलेक्ट्रिक वाहनों को अपनाने से ग्रीनहाउस गैस उत्सर्जन में भारी कमी आती है।" }
    ],
    spokenPhrases: [
      { id: "day47_phrase_001", phrase: "It is pouring down with rain outside.", register: "Everyday Weather", meaningHi: "बाहर मूसलाधार बारिश हो रही है।" },
      { id: "day47_phrase_002", phrase: "The Air Quality Index has surged into the hazardous zone.", register: "Environmental Alert", meaningHi: "वायु गुणवत्ता सूचकांक (AQI) खतरनाक स्तर पर पहुंच गया है।" },
      { id: "day47_phrase_003", phrase: "It is sweltering hot and the humidity is ninety percent.", register: "Summer Complaints", meaningHi: "भीषण पसीने वाली गर्मी है और उमस नब्बे प्रतिशत है।" },
      { id: "day47_phrase_004", phrase: "There is a high probability of isolated thunderstorms this evening.", register: "Meteorological Forecast", meaningHi: "आज शाम छिटपुट आंधी-तूफान आने की प्रबल संभावना है।" },
      { id: "day47_phrase_005", phrase: "It is bitterly cold with a biting wind chill.", register: "Winter Conditions", meaningHi: "चुभने वाली बर्फीली हवा के साथ कड़ाके की ठंड है।" },
      { id: "day47_phrase_006", phrase: "Don't forget to take an umbrella; it looks overcast and might drizzle.", register: "Practical Advice", meaningHi: "छाता ले जाना न भूलें; घटाटोप बादल हैं और बूंदाबांदी हो सकती है।" },
      { id: "day47_phrase_007", phrase: "Dense winter smog has severely impaired flight schedules.", register: "Transit Disruption", meaningHi: "घने सर्दियों के स्मॉग ने उड़ानों के समय को बुरी तरह बाधित कर दिया है।" },
      { id: "day47_phrase_008", phrase: "The regional climate is tropical with distinct wet and dry seasons.", register: "Geographical Description", meaningHi: "क्षेत्रीय जलवायु उष्णकटिबंधीय है जिसमें स्पष्ट वर्षा और शुष्क मौसम होते हैं।" },
      { id: "day47_phrase_009", phrase: "Prolonged droughts have drastically reduced agricultural yields.", register: "Environmental Impact", meaningHi: "लंबे समय से पड़े सूखे ने कृषि उपज को भारी नुकसान पहुँचाया है।" },
      { id: "day47_phrase_010", phrase: "The weather cleared up nicely just in time for the outdoor concert.", register: "Social Conversation", meaningHi: "आउटडोर संगीत कार्यक्रम के ठीक समय पर मौसम बहुत साफ हो गया।" },
      { id: "day47_phrase_011", phrase: "We experienced a pleasant spring breeze throughout the afternoon.", register: "Pleasant Weather", meaningHi: "हमने पूरी दोपहर एक सुखद बसंती हवा का अनुभव किया।" },
      { id: "day47_phrase_012", phrase: "Renewable energy adoption is critical to combat global climate change.", register: "Sustainability Discourse", meaningHi: "वैश्विक जलवायु परिवर्तन से निपटने के लिए नवीकरणीय ऊर्जा को अपनाना अत्यंत महत्वपूर्ण है।" }
    ]
  },
  examples: {
    bilingualExemplars: [
      { id: "day47_ex_001", english: "It has been drizzling continuously since early dawn, creating slick road conditions.", hindi: "सुबह तड़के से लगातार हल्की बूंदाबांदी हो रही है, जिससे सड़कों पर फिसलन हो गई है।" },
      { id: "day47_ex_002", english: "The meteorological bureau warned that gale-force winds may exceed eighty kilometers per hour.", hindi: "मौसम विज्ञान ब्यूरो ने चेतावनी दी कि तेज आंधी की गति अस्सी किलोमीटर प्रति घंटे से अधिक हो सकती है।" },
      { id: "day47_ex_003", english: "Delhi experiences intense winter smog caused by vehicular emissions, industrial fumes, and crop stubble burning.", hindi: "दिल्ली में वाहनों के उत्सर्जन, औद्योगिक धुएं और पराली जलाने के कारण सर्दियों में भारी स्मॉग होता है।" },
      { id: "day47_ex_004", english: "During the heatwave, daytime temperatures soared past forty-five degrees Celsius.", hindi: "लू के दौरान दिन का तापमान पैंतालीस डिग्री सेल्सियस से ऊपर चला गया।" },
      { id: "day47_ex_005", english: "The monsoon downpour overwhelmed urban drainage canals and flooded arterial roads.", hindi: "मानसूनी मूसलाधार बारिश ने शहरी नालों को भर दिया और प्रमुख सड़कों को जलमग्न कर दिया।" },
      { id: "day47_ex_006", english: "It is bitterly cold in the mountains with night temperatures plunging below freezing.", hindi: "पहाड़ों में कड़ाके की ठंड है और रात का तापमान शून्य से नीचे गिर जाता है।" },
      { id: "day47_ex_007", english: "Climate scientists emphasize that rising sea levels threaten low-lying coastal archipelagos.", hindi: "जलवायु वैज्ञानिक इस बात पर जोर देते हैं कि समुद्र का बढ़ता जलस्तर निचले तटीय द्वीप समूहों के लिए खतरा है।" },
      { id: "day47_ex_008", english: "High relative humidity prevents sweat from evaporating, making the afternoon sweltering and uncomfortable.", hindi: "उच्च सापेक्ष आर्द्रता पसीने को वाष्पित होने से रोकती है, जिससे दोपहर की गर्मी असहनीय और चिपचिपी हो जाती है।" },
      { id: "day47_ex_009", english: "A sudden blizzard blanketed the pine forest in three feet of fresh powdery snow.", hindi: "अचानक आए बर्फीले तूफान ने देवदार के जंगल को तीन फीट ताज़ी बर्फ से ढक दिया।" },
      { id: "day47_ex_010", english: "The Air Quality Index improved significantly following the cleansing monsoon rains.", hindi: "धोने वाली मानसूनी बारिश के बाद वायु गुणवत्ता सूचकांक में काफी सुधार हुआ।" },
      { id: "day47_ex_011", english: "Severe deforestation in the river catchment basin has triggered catastrophic flash floods.", hindi: "नदी के जलग्रहण क्षेत्र में भीषण वनों की कटाई ने विनाशकारी अचानक बाढ़ ला दी है।" },
      { id: "day47_ex_012", english: "We enjoyed a brisk walk along the beach as a cool maritime breeze blew onshore.", hindi: "समुद्र तट पर ठंडी समुद्री हवा चलने के कारण हमने समुद्र किनारे ताज़ा और तेज़ सैर का आनंद लिया।" },
      { id: "day47_ex_013", english: "The atmospheric pressure dropped sharply, signaling the approach of a tropical cyclone.", hindi: "वायुमंडलीय दबाव तेजी से गिरा, जो एक उष्णकटिबंधीय चक्रवात के आने का संकेत देता है।" },
      { id: "day47_ex_014", english: "Farmers in the semi-arid plateau depend entirely on timely monsoon precipitation for irrigation.", hindi: "अर्ध-शुष्क पठार के किसान सिंचाई के लिए पूरी तरह से समय पर मानसूनी बारिश पर निर्भर हैं।" },
      { id: "day47_ex_015", english: "The sky was completely overcast, casting a gloomy shadow over the mountain valley.", hindi: "आसमान पूरी तरह बादलों से घिरा हुआ था, जिससे पहाड़ी घाटी पर एक उदास छाया पड़ रही थी।" },
      { id: "day47_ex_016", english: "Transitioning to solar and wind energy drastically curtails national carbon emissions.", hindi: "सौर और पवन ऊर्जा को अपनाने से राष्ट्रीय कार्बन उत्सर्जन में भारी कमी आती है।" },
      { id: "day47_ex_017", english: "A dense morning haze veiled the distant Himalayan peaks until midday.", hindi: "दोपहर तक घनी सुबह की धुंध ने दूर की हिमालयी चोटियों को ढक रखा था।" },
      { id: "day47_ex_018", english: "Prolonged droughts forced pastoralist communities to migrate in search of fresh grazing pastures.", hindi: "लंबे समय के सूखे ने चरवाहा समुदायों को ताज़ी चरागाहों की तलाश में पलायन करने पर मजबूर कर दिया।" },
      { id: "day47_ex_019", english: "Is it going to rain this afternoon, or will the clouds dissipate?", hindi: "क्या आज दोपहर बारिश होगी, या बादल छंट जाएंगे?" },
      { id: "day47_ex_020", english: "The UV index is exceptionally high today, so wearing broad-spectrum sunscreen is essential.", hindi: "आज यूवी इंडेक्स असाधारण रूप से उच्च है, इसलिए सनस्क्रीन लगाना आवश्यक है।" },
      { id: "day47_ex_021", english: "Torrential rains caused severe mudslides that blocked the inter-state transit highway.", hindi: "मूसलाधार बारिश के कारण भीषण भूस्खलन हुआ जिससे अंतर्राज्यीय राजमार्ग अवरुद्ध हो गया।" },
      { id: "day47_ex_022", english: "The autumn foliage turned vibrant shades of crimson, gold, and amber.", hindi: "शरद ऋतु के पत्ते गहरे लाल, सुनहरे और अंबर के जीवंत रंगों में बदल गए।" },
      { id: "day47_ex_023", english: "Global biodiversity conservation requires protecting pristine natural rainforest habitats.", hindi: "वैश्विक जैव विविधता संरक्षण के लिए प्राचीन प्राकृतिक वर्षावन आवासों की रक्षा करना आवश्यक है।" },
      { id: "day47_ex_024", english: "The heat index reached forty-eight degrees Celsius due to unrelenting midday sunshine.", hindi: "दोपहर की लगातार धूप के कारण हीट इंडेक्स अड़तालीस डिग्री सेल्सियस तक पहुंच गया।" },
      { id: "day47_ex_025", english: "Environmental sustainability principles must be integrated into all urban infrastructure projects.", hindi: "पर्यावरणीय स्थिरता के सिद्धांतों को सभी शहरी बुनियादी ढांचा परियोजनाओं में एकीकृत किया जाना चाहिए।" }
    ]
  },
  pronunciation: {
    focusSound: "Pronunciation of /draʊt/ in 'Drought' (rhymes with 'out'), /prɪˌsɪp.ɪˈteɪ.ʃən/ in 'Precipitation', and /smɒɡ/ in 'Smog'",
    phoneticNotes: "1. 'Drought' is pronounced /draʊt/ (rhyming with 'shout' and 'out' - never /drɔːt/ or /drɒft/).\n2. 'Precipitation' has six syllables with main stress on the fifth: /prɪˌsɪp.ɪˈteɪ.ʃən/.\n3. 'Overcast' stresses the first syllable: /ˈəʊ.və.kɑːst/.",
    minimalPairs: [
      { wordA: "Drought", ipaA: "/draʊt/", wordB: "Draft", ipaB: "/drɑːft/" },
      { wordA: "Haze", ipaA: "/heɪz/", wordB: "Hayes", ipaB: "/heɪz/" },
      { wordA: "Gale", ipaA: "/ɡeɪl/", wordB: "Goal", ipaB: "/ɡəʊl/" },
      { wordA: "Breeze", ipaA: "/briːz/", wordB: "Freeze", ipaB: "/friːz/" },
      { wordA: "Pour", ipaA: "/pɔːr/", wordB: "Poor", ipaB: "/pʊər/" }
    ],
    drills: [
      { sentence: "The severe drought caused unprecedented crop failure.", focus: "Vowel /aʊ/ in 'drought' /draʊt/" },
      { sentence: "The meteorological forecast predicts heavy precipitation.", focus: "Rhythm in /prɪˌsɪp.ɪˈteɪ.ʃən/ & /ˈfɔː.kɑːst/" },
      { sentence: "Dense industrial smog blanketed the city.", focus: "Vowel /ɒ/ in 'smog' /smɒɡ/" },
      { sentence: "Gale-force winds whipped across the coastline.", focus: "Diphthong /eɪ/ in 'gale' /ɡeɪl/" },
      { sentence: "High humidity makes the heat sweltering.", focus: "Stress in /hjuːˈmɪd.ə.ti/ & /ˈswel.tər.ɪŋ/" }
    ]
  },
  practice: {
    exercises: [
      {
        id: "day47_ex_001",
        type: "error_correction",
        prompt: "Correct the sentence: 'Today rain is falling very heavily.'",
        correctAnswer: "It is raining very heavily today.",
        acceptableAnswers: [
          "It is pouring down today.",
          "It is raining heavily today."
        ],
        explanationEn: "Use dummy 'It': 'It is raining heavily today', not '*Rain is falling*'.",
        explanationHi: "मौसम के लिए 'It is raining heavily' का प्रयोग करें, '*Rain is falling*' का नहीं।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day47_ex_002",
        type: "error_correction",
        prompt: "Correct the sentence: 'In Delhi too much cold is there in December.'",
        correctAnswer: "It is extremely cold in Delhi in December.",
        acceptableAnswers: [
          "It gets bitterly cold in Delhi in December.",
          "It is very cold in Delhi in December."
        ],
        explanationEn: "Use 'It is extremely/bitterly cold in Delhi...', never '*too much cold is there*'.",
        explanationHi: "'It is bitterly cold in Delhi...' सही मानक अंग्रेज़ी है।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day47_ex_003",
        type: "multiple_choice",
        prompt: "What is the difference between 'weather' and 'climate'?",
        options: [
          "'Weather' is the day-to-day atmospheric state, while 'Climate' is the long-term weather pattern over decades",
          "'Weather' happens only in winter, 'Climate' only in summer",
          "'Climate' is measured in kilograms, 'Weather' in liters",
          "There is no difference"
        ],
        correctAnswer: "'Weather' is the day-to-day atmospheric state, while 'Climate' is the long-term weather pattern over decades",
        explanationEn: "Weather is short-term daily atmospheric condition; Climate is long-term 30-year aggregate.",
        explanationHi: "दैनिक स्थिति 'weather' है, जबकि दशकों का दीर्घकालिक प्रारूप 'climate' है।",
        difficulty: "easy",
        skillTag: "METEOROLOGICAL_CONCEPTS"
      },
      {
        id: "day47_ex_004",
        type: "fill_blank",
        prompt: "A prolonged period of abnormally low rainfall resulting in a shortage of water is called a _______.",
        correctAnswer: "drought",
        explanationEn: "A 'drought' (/draʊt/) is a severe lack of rain.",
        explanationHi: "सूखे को 'drought' कहते हैं।",
        difficulty: "easy",
        skillTag: "CLIMATE_VOCAB"
      },
      {
        id: "day47_ex_005",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'आज बाहर कड़ाके की ठंड है और बर्फीली हवा चल रही है।'",
        correctAnswer: "It is bitterly cold outside today with a biting wind.",
        acceptableAnswers: [
          "It is freezing cold outside today with an icy wind.",
          "It is bitterly cold outside with a freezing wind."
        ],
        explanationEn: "'It is bitterly cold outside today with a biting wind.'",
        explanationHi: "'It is bitterly cold outside' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day47_ex_006",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The meteorological department issued an emergency alert for torrential downpours.'",
        correctAnswer: "मौसम विभाग ने मूसलाधार बारिश के लिए आपातकालीन चेतावनी जारी की।",
        acceptableAnswers: [
          "मौसम विभाग ने भारी वर्षा का अलर्ट जारी किया।"
        ],
        explanationEn: "'Torrential downpours' translates as मूसलाधार बारिश.",
        explanationHi: "'Torrential downpours' का अर्थ मूसलाधार बारिश है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day47_ex_007",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [air / index / hazardous / surged / the / quality / into / zone / has / the]",
        correctAnswer: "The air quality index has surged into the hazardous zone.",
        explanationEn: "Subject + Perfect verb phrase + Prepositional phrase.",
        explanationHi: "सही क्रम: The air quality index has surged into the hazardous zone.",
        difficulty: "medium",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day47_ex_008",
        type: "multiple_choice",
        prompt: "Which word describes light, fine rain falling in very small drops?",
        options: ["Drizzle", "Deluge", "Blizzard", "Smog"],
        correctAnswer: "Drizzle",
        explanationEn: "'Drizzle' is fine light rain.",
        explanationHi: "हल्की बूंदाबांदी को 'drizzle' कहते हैं।",
        difficulty: "easy",
        skillTag: "PRECIPITATION_TYPES"
      },
      {
        id: "day47_ex_009",
        type: "error_correction",
        prompt: "Correct the sentence: 'Today's climate is very pleasant for a walk.'",
        correctAnswer: "Today's weather is very pleasant for a walk.",
        acceptableAnswers: [
          "The weather is very pleasant for a walk today."
        ],
        explanationEn: "Use 'weather' for daily atmospheric conditions, not 'climate'.",
        explanationHi: "दैनिक मौसम के लिए 'weather' का प्रयोग करें, 'climate' का नहीं।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day47_ex_010",
        type: "fill_blank",
        prompt: "A toxic mixture of smoke and atmospheric fog is known as _______.",
        correctAnswer: "smog",
        explanationEn: "Smog = Smoke + Fog.",
        explanationHi: "धुआं और कोहरे के मिश्रण को 'smog' कहते हैं।",
        difficulty: "easy",
        skillTag: "ENVIRONMENTAL_TERMS"
      },
      {
        id: "day47_ex_011",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nPerson A: 'Is it going to rain this afternoon?'\nPerson B: 'The sky is completely _______, so you should carry an umbrella.'",
        options: ["overcast", "sublet", "generic", "curriculum"],
        correctAnswer: "overcast",
        explanationEn: "'Overcast' describes a sky covered with dark rain clouds.",
        explanationHi: "घटाटोप बादलों के लिए 'overcast' शब्द आता है।",
        difficulty: "easy",
        skillTag: "METEOROLOGICAL_DISCOURSE"
      },
      {
        id: "day47_ex_012",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'उच्च आर्द्रता (उमस) के कारण दोपहर की गर्मी बहुत चिपचिपी लग रही है।'",
        correctAnswer: "Due to high humidity, the afternoon heat feels very sweltering and sticky.",
        acceptableAnswers: [
          "The high humidity makes the afternoon heat feel sweltering and sticky.",
          "High humidity makes the afternoon very humid and uncomfortable."
        ],
        explanationEn: "'Due to high humidity, the afternoon heat feels very sweltering and sticky.'",
        explanationHi: "'High humidity' और 'sweltering' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day47_ex_013",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'The severe drought depleted water reservoirs across the province.'",
        correctAnswer: "The severe drought depleted water reservoirs across the province.",
        explanationEn: "Focus on spelling 'drought' (/draʊt/) and 'reservoirs'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "hard",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day47_ex_014",
        type: "sentence_transformation",
        prompt: "Rewrite using 'sweltering': 'The weather was so extremely hot that we could not step outside.'",
        correctAnswer: "It was sweltering hot, so we could not step outside.",
        explanationEn: "'Sweltering hot' describes oppressive heat.",
        explanationHi: "'Sweltering hot' का प्रयोग करें।",
        difficulty: "medium",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day47_ex_015",
        type: "matching",
        prompt: "Match the weather term to its definition:\n1. Blizzard\n2. Gale\n3. Deluge\n4. Haze",
        options: [
          "1-Severe snowstorm with strong winds, 2-Extremely strong windstorm, 3-Massive flood/downpour, 4-Atmospheric dust/moisture suspension",
          "1-Strong windstorm, 2-Snowstorm, 3-Dust suspension, 4-Massive flood",
          "1-Massive flood, 2-Dust suspension, 3-Snowstorm, 4-Strong windstorm",
          "1-Dust suspension, 2-Massive flood, 3-Strong windstorm, 4-Snowstorm"
        ],
        correctAnswer: "1-Severe snowstorm with strong winds, 2-Extremely strong windstorm, 3-Massive flood/downpour, 4-Atmospheric dust/moisture suspension",
        explanationEn: "Accurate matching of extreme weather terminology.",
        explanationHi: "मौसम की चरम स्थितियों का सही मिलान।",
        difficulty: "medium",
        skillTag: "VOCAB_MATCHING"
      },
      {
        id: "day47_ex_016",
        type: "error_correction",
        prompt: "Correct the sentence: 'Open the fan, it is feeling hot.'",
        correctAnswer: "Turn on the fan, it is hot.",
        acceptableAnswers: [
          "Switch on the fan, it feels hot."
        ],
        explanationEn: "Electrical appliances are 'turned on' or 'switched on' (never '*opened*').",
        explanationHi: "पंखे या बिजली के उपकरण 'turn on' या 'switch on' किए जाते हैं, '*open*' नहीं।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day47_ex_017",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Dense industrial smog caused severe flight delays at the international airport.'",
        correctAnswer: "घने औद्योगिक स्मॉग के कारण अंतरराष्ट्रीय हवाई अड्डे पर उड़ानों में भारी देरी हुई।",
        acceptableAnswers: [
          "घने धुएं और कोहरे के कारण एयरपोर्ट पर फ्लाइट्स लेट हो गईं।"
        ],
        explanationEn: "'Dense industrial smog' translates as घने औद्योगिक स्मॉग.",
        explanationHi: "स्मॉग और उड़ान देरी का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day47_ex_018",
        type: "active_recall",
        prompt: "What is the meteorological term for any product of the condensation of atmospheric water vapor that falls under gravity (e.g., rain, snow, hail)?",
        correctAnswer: "Precipitation",
        acceptableAnswers: ["precipitation"],
        explanationEn: "'Precipitation' encompasses rain, snow, sleet, and hail.",
        explanationHi: "वर्षण (बारिश, बर्फबारी, ओले) को 'precipitation' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day47_ex_019",
        type: "multiple_choice",
        prompt: "What does 'AQI' stand for?",
        options: ["Air Quality Index", "Atmospheric Quantum Indicator", "Aviation Quality Inspection", "Annual Quota Index"],
        correctAnswer: "Air Quality Index",
        explanationEn: "AQI stands for Air Quality Index.",
        explanationHi: "AQI का पूरा नाम 'Air Quality Index' (वायु गुणवत्ता सूचकांक) है।",
        difficulty: "easy",
        skillTag: "ACRONYMS"
      },
      {
        id: "day47_ex_020",
        type: "speaking_pronunciation",
        prompt: "Pronounce 'drought' /draʊt/ (rhyming with 'out'): 'The prolonged drought destroyed the agricultural harvest.'",
        correctAnswer: "The prolonged drought destroyed the agricultural harvest.",
        explanationEn: "'Drought' has the diphthong /aʊ/ (rhyming with 'out', not 'caught').",
        explanationHi: "'Drought' को /draʊt/ बोलें (आउट की तरह)।",
        difficulty: "medium",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day47_ex_021",
        type: "question_formation",
        prompt: "Form a question asking someone about the weekend weather forecast:",
        correctAnswer: "What is the weather forecast for this weekend?",
        acceptableAnswers: [
          "What is the forecast for the upcoming weekend?",
          "How is the weather going to be this weekend?"
        ],
        explanationEn: "'What is the weather forecast for this weekend?'",
        explanationHi: "मौसम पूर्वानुमान पूछने का सही प्रश्न।",
        difficulty: "easy",
        skillTag: "QUESTION_FORMATION"
      },
      {
        id: "day47_ex_022",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'वनों की कटाई से मिट्टी का कटाव बढ़ता है और बाढ़ का खतरा पैदा होता है।'",
        correctAnswer: "Deforestation increases soil erosion and triggers flood risks.",
        acceptableAnswers: [
          "Deforestation accelerates soil erosion and creates flood risks.",
          "Cutting down forests leads to soil erosion and flood danger."
        ],
        explanationEn: "'Deforestation increases soil erosion and triggers flood risks.'",
        explanationHi: "'Deforestation' और 'soil erosion' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day47_ex_023",
        type: "sentence_building",
        prompt: "Build a sentence about flash floods using [cloudburst / valley / flash / triggered / the / in / floods / a].",
        correctAnswer: "A cloudburst triggered flash floods in the valley.",
        explanationEn: "'A cloudburst triggered flash floods in the valley.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day47_ex_024",
        type: "multiple_choice",
        prompt: "Which term describes a sudden, brief period of very heavy rainfall over a small localized area?",
        options: ["Cloudburst", "Drizzle", "Drought", "Haze"],
        correctAnswer: "Cloudburst",
        explanationEn: "A 'cloudburst' is an extreme sudden deluge in a localized area.",
        explanationHi: "बादल फटने को 'cloudburst' कहते हैं।",
        difficulty: "easy",
        skillTag: "METEOROLOGY"
      },
      {
        id: "day47_ex_025",
        type: "error_correction",
        prompt: "Correct the sentence: 'It is too much humid today.'",
        correctAnswer: "It is extremely humid today.",
        acceptableAnswers: [
          "It is very humid today."
        ],
        explanationEn: "Use 'very humid' or 'extremely humid', not '*too much humid*'.",
        explanationHi: "'Extremely humid' या 'very humid' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "INTENSIFIERS"
      },
      {
        id: "day47_ex_026",
        type: "fill_blank",
        prompt: "Winds that blow with exceptional violence and speed (over 60 km/h) are termed _______ winds.",
        correctAnswer: "gale-force",
        acceptableAnswers: ["gale force", "gale"],
        explanationEn: "'Gale-force' winds.",
        explanationHi: "प्रचंड आंधी वाली हवाओं को 'gale-force winds' कहते हैं।",
        difficulty: "medium",
        skillTag: "WIND_DESCRIPTORS"
      },
      {
        id: "day47_ex_027",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'The UV index is exceptionally high, so wearing sunscreen is essential.'",
        correctAnswer: "यूवी इंडेक्स बहुत अधिक है, इसलिए सनस्क्रीन लगाना आवश्यक है।",
        acceptableAnswers: [
          "पराबैंगनी किरण सूचकांक बहुत ज्यादा है, सनस्क्रीन लगाना जरूरी है।"
        ],
        explanationEn: "'UV index is exceptionally high' translates as यूवी इंडेक्स बहुत अधिक है.",
        explanationHi: "यूवी इंडेक्स का अनुवाद।",
        difficulty: "easy",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day47_ex_028",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [rising / melting / temperatures / are / global / glaciers]",
        correctAnswer: "Rising global temperatures are melting glaciers.",
        explanationEn: "Subject noun phrase + Present continuous verb + Object.",
        explanationHi: "सही क्रम: Rising global temperatures are melting glaciers.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day47_ex_029",
        type: "multiple_choice",
        prompt: "What does 'biodiversity' encompass?",
        options: [
          "The variety of plant and animal life in a particular habitat or in the world",
          "The amount of water stored in dams",
          "The speed of the wind during storms",
          "The price of solar panels"
        ],
        correctAnswer: "The variety of plant and animal life in a particular habitat or in the world",
        explanationEn: "Biodiversity is biological diversity among species and ecosystems.",
        explanationHi: "जैव विविधता (विभिन्न प्रकार के जीव-जंतु व पौधे) को 'biodiversity' कहते हैं।",
        difficulty: "easy",
        skillTag: "ENVIRONMENTAL_TERMS"
      },
      {
        id: "day47_ex_030",
        type: "active_recall",
        prompt: "What is the compound word for the gradual warming of the Earth's atmosphere caused by greenhouse gases?",
        correctAnswer: "Global warming",
        acceptableAnswers: ["global warming", "climate change"],
        explanationEn: "'Global warming' or 'climate change'.",
        explanationHi: "पृथ्वी के बढ़ते तापमान को 'global warming' कहते हैं।",
        difficulty: "easy",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day47_ex_031",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'अचानक आई बाढ़ ने मुख्य राजमार्ग को बहा दिया।'",
        correctAnswer: "The flash flood washed away the main highway.",
        acceptableAnswers: [
          "Flash floods washed away the main highway.",
          "The sudden flash flood swept away the main highway."
        ],
        explanationEn: "'The flash flood washed away the main highway.'",
        explanationHi: "'Flash flood washed away' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day47_ex_032",
        type: "error_correction",
        prompt: "Correct the sentence: 'It is too much hot in summer.'",
        correctAnswer: "It is extremely hot in the summer.",
        acceptableAnswers: [
          "It gets very hot during the summer."
        ],
        explanationEn: "Say 'It is extremely hot' (NOT '*too much hot*').",
        explanationHi: "'Extremely hot' या 'very hot' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "L1_REMEDIATION"
      },
      {
        id: "day47_ex_033",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nTraveler: 'Should I pack a heavy winter coat?'\nLocal: 'Definitely! Winter temperatures frequently drop below _______ in the highlands.'",
        options: ["freezing", "deluge", "drizzle", "sublet"],
        correctAnswer: "freezing",
        explanationEn: "'Below freezing' indicates temperatures below 0°C.",
        explanationHi: "शून्य से नीचे के तापमान के लिए 'below freezing' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "TEMPERATURE_DESCRIPTORS"
      },
      {
        id: "day47_ex_034",
        type: "listening_dictation",
        prompt: "Listen and write the sentence: 'Dense smog severely reduced visibility across the highway.'",
        correctAnswer: "Dense smog severely reduced visibility across the highway.",
        explanationEn: "Focus on spelling 'smog' and 'visibility'.",
        explanationHi: "वर्तनी और वाक्य पर ध्यान दें।",
        difficulty: "medium",
        skillTag: "LISTENING_DICTATION"
      },
      {
        id: "day47_ex_035",
        type: "multiple_choice",
        prompt: "Which adjective describes a refreshing, invigorating, pleasantly cool breeze?",
        options: ["Brisk", "Sweltering", "Malignant", "Hazardous"],
        correctAnswer: "Brisk",
        explanationEn: "'Brisk' denotes pleasantly cool, fresh, and energetic weather/breeze.",
        explanationHi: "सुखद और ताज़ा ठंडी हवा को 'brisk breeze' कहते हैं।",
        difficulty: "easy",
        skillTag: "DESCRIPTIVE_ADJECTIVES"
      },
      {
        id: "day47_ex_036",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'नवीकरणीय ऊर्जा अपनाने से कार्बन उत्सर्जन में भारी कमी आती है।'",
        correctAnswer: "Adopting renewable energy drastically reduces carbon emissions.",
        acceptableAnswers: [
          "Transitioning to renewable energy significantly reduces carbon emissions.",
          "Using renewable energy drastically curtails carbon emissions."
        ],
        explanationEn: "'Adopting renewable energy drastically reduces carbon emissions.'",
        explanationHi: "'Renewable energy' और 'carbon emissions' का सही प्रयोग।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day47_ex_037",
        type: "error_correction",
        prompt: "Correct the sentence: 'The drouth has destroyed the crops.'",
        correctAnswer: "The drought has destroyed the crops.",
        explanationEn: "The correct spelling is 'drought' (d-r-o-u-g-h-t).",
        explanationHi: "सही वर्तनी 'drought' है।",
        difficulty: "easy",
        skillTag: "SPELLING_PRECISION"
      },
      {
        id: "day47_ex_038",
        type: "sentence_building",
        prompt: "Build a sentence about autumn leaves using [turned / leaves / autumn / the / vibrant / crimson / of / shades].",
        correctAnswer: "The autumn leaves turned vibrant shades of crimson.",
        explanationEn: "'The autumn leaves turned vibrant shades of crimson.'",
        explanationHi: "सही वाक्य रचना।",
        difficulty: "medium",
        skillTag: "SENTENCE_BUILDING"
      },
      {
        id: "day47_ex_039",
        type: "fill_blank",
        prompt: "A massive, destructive storm with spinning winds originating over tropical oceans is a _______.",
        correctAnswer: "cyclone",
        acceptableAnswers: ["hurricane", "typhoon"],
        explanationEn: "'Cyclone', 'hurricane', or 'typhoon'.",
        explanationHi: "चक्रवात को 'cyclone / hurricane' कहते हैं।",
        difficulty: "easy",
        skillTag: "METEOROLOGICAL_TERMS"
      },
      {
        id: "day47_ex_040",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Agricultural reservoirs were completely depleted by the multi-year drought.'",
        correctAnswer: "कई वर्षों के सूखे के कारण कृषि जलाशय पूरी तरह से खाली हो गए थे।",
        acceptableAnswers: [
          "लंबे सूखे ने खेती के जलाशयों को पूरी तरह सुखा दिया।"
        ],
        explanationEn: "'Agricultural reservoirs were completely depleted' translates as कृषि जलाशय पूरी तरह से खाली हो गए थे.",
        explanationHi: "सूखे के प्रभाव का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day47_ex_041",
        type: "multiple_choice",
        prompt: "What is 'relative humidity'?",
        options: [
          "The percentage of water vapor present in air expressed as a percentage of the amount needed for saturation at that temperature",
          "The speed of an airplane in a storm",
          "The height of rain clouds",
          "The temperature inside a refrigerator"
        ],
        correctAnswer: "The percentage of water vapor present in air expressed as a percentage of the amount needed for saturation at that temperature",
        explanationEn: "Relative humidity is the atmospheric moisture saturation percentage.",
        explanationHi: "हवा में नमी की मात्रा (आर्द्रता) को 'relative humidity' कहते हैं।",
        difficulty: "hard",
        skillTag: "METEOROLOGICAL_SCIENCE"
      },
      {
        id: "day47_ex_042",
        type: "active_recall",
        prompt: "What is the environmental term for the total amount of greenhouse gases generated by our individual actions?",
        correctAnswer: "Carbon footprint",
        acceptableAnswers: ["carbon footprint"],
        explanationEn: "'Carbon footprint'.",
        explanationHi: "व्यक्तिगत या औद्योगिक कार्बन प्रभाव को 'carbon footprint' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day47_ex_043",
        type: "sentence_ordering",
        prompt: "Arrange in logical order: [coastal / rising / sea / threaten / levels / cities]",
        correctAnswer: "Rising sea levels threaten coastal cities.",
        explanationEn: "Subject noun phrase + Transitive verb + Object.",
        explanationHi: "सही क्रम: Rising sea levels threaten coastal cities.",
        difficulty: "easy",
        skillTag: "SYNTAX_ORDERING"
      },
      {
        id: "day47_ex_044",
        type: "error_correction",
        prompt: "Correct the sentence: 'Are there any chances of rains?'",
        correctAnswer: "Is there any chance of rain?",
        acceptableAnswers: [
          "Is there a chance of rain?"
        ],
        explanationEn: "'Chance of rain' is singular and uncountable.",
        explanationHi: "'Chance of rain' एकवचन और अगणनीय होता है।",
        difficulty: "easy",
        skillTag: "UNCOUNTABLE_NOUNS"
      },
      {
        id: "day47_ex_045",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'कल रात तेज आंधी ने कई पुराने पेड़ों को उखाड़ दिया।'",
        correctAnswer: "Gale-force winds uprooted several old trees last night.",
        acceptableAnswers: [
          "The severe storm uprooted many old trees last night.",
          "Strong winds uprooted several ancient trees last night."
        ],
        explanationEn: "'Gale-force winds uprooted several old trees last night.'",
        explanationHi: "'Gale-force winds uprooted trees' सही है।",
        difficulty: "medium",
        skillTag: "TRANSLATION_HI_EN"
      },
      {
        id: "day47_ex_046",
        type: "multiple_choice",
        prompt: "Which preposition correctly fills: 'The city was shrouded _______ a thick blanket of winter smog.'?",
        options: ["in", "on", "at", "during"],
        correctAnswer: "in",
        explanationEn: "Collocation: 'shrouded IN smog / mist'.",
        explanationHi: "धुंध या कोहरे से ढके होने के लिए 'shrouded in' का प्रयोग होता है।",
        difficulty: "easy",
        skillTag: "PREPOSITIONS"
      },
      {
        id: "day47_ex_047",
        type: "speaking_pronunciation",
        prompt: "Articulate six-syllable rhythm: 'The weather forecast predicts heavy precipitation.' /prɪˌsɪp.ɪˈteɪ.ʃən/",
        correctAnswer: "The weather forecast predicts heavy precipitation.",
        explanationEn: "Stress in /prɪˌsɪp.ɪˈteɪ.ʃən/ on the fifth syllable.",
        explanationHi: "'Precipitation' के पांचवें सिलेबल पर बल दें।",
        difficulty: "hard",
        skillTag: "SPEAKING_PRONUNCIATION"
      },
      {
        id: "day47_ex_048",
        type: "fill_blank",
        prompt: "The seasonal wind of the Indian Ocean and southern Asia, blowing from the southwest in summer and bringing heavy rain, is the _______.",
        correctAnswer: "monsoon",
        explanationEn: "The 'monsoon'.",
        explanationHi: "मानसूनी हवाओं और वर्षा को 'monsoon' कहते हैं।",
        difficulty: "easy",
        skillTag: "CLIMATE_TERMS"
      },
      {
        id: "day47_ex_049",
        type: "sentence_transformation",
        prompt: "Rewrite using 'downpour': 'It rained heavily and suddenly for an hour.'",
        correctAnswer: "There was a sudden downpour for an hour.",
        explanationEn: "'A sudden downpour' accurately describes heavy rain.",
        explanationHi: "'A sudden downpour' का प्रयोग करें।",
        difficulty: "easy",
        skillTag: "LEXICAL_TRANSFORMATION"
      },
      {
        id: "day47_ex_050",
        type: "dialogue_completion",
        prompt: "Complete the exchange:\nStudent: 'Why are summers in coastal cities so uncomfortable?'\nGeographer: 'Because high relative _______ traps heat and slows evaporation.'",
        options: ["humidity", "turnstile", "pediatrician", "syllabi"],
        correctAnswer: "humidity",
        explanationEn: "High humidity slows down sweat evaporation.",
        explanationHi: "उमस (humidity) पसीना सूखने से रोकती है।",
        difficulty: "easy",
        skillTag: "ENVIRONMENTAL_SCIENCE"
      },
      {
        id: "day47_ex_051",
        type: "translation_en_to_hi",
        prompt: "Translate into natural Hindi: 'Solar and wind energy drastically curtail greenhouse gas emissions.'",
        correctAnswer: "सौर और पवन ऊर्जा ग्रीनहाउस गैस उत्सर्जन में भारी कमी लाती हैं।",
        acceptableAnswers: [
          "सोलर और विंड एनर्जी से कार्बन उत्सर्जन बहुत कम होता है।"
        ],
        explanationEn: "'Curtail emissions' translates as उत्सर्जन में भारी कमी लाती हैं.",
        explanationHi: "उत्सर्जन कटौती का अनुवाद।",
        difficulty: "medium",
        skillTag: "TRANSLATION_EN_HI"
      },
      {
        id: "day47_ex_052",
        type: "multiple_choice",
        prompt: "What is an 'ecological footprint'?",
        options: [
          "The impact of human activities measured in terms of the area of biologically productive land and water required to produce the goods consumed",
          "The footprints left by animals in mud",
          "A shoe size for hiking in forests",
          "The distance walked by a park ranger"
        ],
        correctAnswer: "The impact of human activities measured in terms of the area of biologically productive land and water required to produce the goods consumed",
        explanationEn: "Ecological footprint measures human demand on Earth's ecosystems.",
        explanationHi: "पर्यावरणीय प्रभाव और उपभोग को 'ecological footprint' कहते हैं।",
        difficulty: "medium",
        skillTag: "ECOLOGICAL_TERMS"
      },
      {
        id: "day47_ex_053",
        type: "error_correction",
        prompt: "Correct the sentence: 'We are enjoying the cold weather climate.'",
        correctAnswer: "We are enjoying the cold weather.",
        explanationEn: "Do not combine 'weather' and 'climate'; say 'cold weather'.",
        explanationHi: "'Weather' और 'climate' को एक साथ न जोड़ें; केवल 'cold weather' कहें।",
        difficulty: "easy",
        skillTag: "REDUNDANCY"
      },
      {
        id: "day47_ex_054",
        type: "active_recall",
        prompt: "What is the term for a layer of ice crystals that forms on cold surfaces when water vapor freezes directly from the air?",
        correctAnswer: "Frost",
        acceptableAnswers: ["frost", "rime"],
        explanationEn: "'Frost' forms on cold surfaces in sub-zero weather.",
        explanationHi: "पाला या जमी हुई बर्फ की महीन परत को 'frost' कहते हैं।",
        difficulty: "medium",
        skillTag: "ACTIVE_RECALL"
      },
      {
        id: "day47_ex_055",
        type: "translation_hi_to_en",
        prompt: "Translate into natural English: 'ग्लोबल वार्मिंग के कारण ग्लेशियर रिकॉर्ड गति से पिघल रहे हैं।'",
        correctAnswer: "Due to global warming, glaciers are melting at a record pace.",
        acceptableAnswers: [
          "Glaciers are melting at record speed because of global warming.",
          "Owing to global warming, glaciers are retreating at an unprecedented rate."
        ],
        explanationEn: "'Due to global warming, glaciers are melting at a record pace.'",
        explanationHi: "'Glaciers are melting at a record pace' सही है।",
        difficulty: "hard",
        skillTag: "TRANSLATION_HI_EN"
      }
    ]
  },
  use: {
    dialogues: [
      {
        id: "day47_dial_001",
        title: "Controlled Daily Weather Forecast & Outdoor Planning",
        context: "Two colleagues (Rahul and Neha) planning a weekend cycling excursion while reviewing the meteorological forecast.",
        characters: ["Rahul", "Neha"],
        lines: [
          { speaker: "Rahul", text: "Good morning, Neha! Are we still on for our cycling trip to the river valley this Saturday?", hindi: "शुभ प्रभात, नेहा! क्या इस शनिवार को नदी घाटी की हमारी साइकिल यात्रा अभी भी तय है?" },
          { speaker: "Neha", text: "Good morning, Rahul! I just checked the meteorological forecast. There is an eighty percent probability of torrential downpours on Saturday afternoon.", hindi: "शुभ प्रभात, राहुल! मैंने अभी मौसम का पूर्वानुमान देखा। शनिवार दोपहर को मूसलाधार बारिश की अस्सी प्रतिशत संभावना है।" },
          { speaker: "Rahul", text: "Oh, that sounds risky. Will it be accompanied by thunderstorms or gale-force winds?", hindi: "ओह, यह जोखिम भरा लगता है। क्या इसके साथ आंधी-तूफान या तेज हवाएं भी होंगी?" },
          { speaker: "Neha", text: "Yes, the report warns of isolated thunderstorms and localized flash flooding along the riverbanks.", hindi: "हाँ, रिपोर्ट में नदी के किनारों पर छिटपुट आंधी-तूफान और स्थानीय अचानक बाढ़ की चेतावनी दी गई है।" },
          { speaker: "Rahul", text: "In that case, let's postpone the excursion to Sunday when clear, sunny skies and a brisk breeze are predicted.", hindi: "उस स्थिति में, आइए यात्रा को रविवार तक के लिए स्थगित कर दें जब साफ, धूप वाले आसमान और सुखद ताज़ी हवा की भविष्यवाणी की गई है।" },
          { speaker: "Neha", text: "Agreed! Sunday will be much safer and far more pleasant.", hindi: "सहमत! रविवार बहुत सुरक्षित और कहीं अधिक सुखद रहेगा।" }
        ]
      },
      {
        id: "day47_dial_002",
        title: "Guided Winter Smog & Air Quality Crisis Discussion",
        context: "A resident (Siddharth) discussing severe metropolitan smog and protective precautions with a colleague (Pooja).",
        characters: ["Siddharth", "Pooja"],
        lines: [
          { speaker: "Siddharth", text: "The morning haze seems unusually dense today. Have you seen the latest Air Quality Index readings?", hindi: "आज सुबह की धुंध असामान्य रूप से घनी लग रही है। क्या आपने नवीनतम वायु गुणवत्ता सूचकांक (AQI) रीडिंग देखी है?" },
          { speaker: "Pooja", text: "Yes, the AQI has surged past 420, which is classified as severe and hazardous for respiratory health.", hindi: "हाँ, AQI 420 के पार पहुंच गया है, जिसे श्वसन स्वास्थ्य के लिए गंभीर और खतरनाक के रूप में वर्गीकृत किया गया है।" },
          { speaker: "Siddharth", text: "It is a combination of vehicular emissions, industrial pollutants, and seasonal temperature inversion trapping the smog.", hindi: "यह वाहनों के उत्सर्जन, औद्योगिक प्रदूषकों और मौसमी तापमान के उलटने (तापमान व्युत्क्रमण) का एक संयोजन है जो स्मॉग को फंसाता है।" },
          { speaker: "Pooja", text: "We should definitely wear N95 filtration masks when commuting and keep indoor air purifiers running continuously.", hindi: "हमें यात्रा करते समय निश्चित रूप से N95 मास्क पहनना चाहिए और इनडोर एयर प्यूरीफायर को लगातार चालू रखना चाहिए।" },
          { speaker: "Siddharth", text: "Absolutely. I've also canceled my evening outdoor jogging routine until atmospheric conditions improve.", hindi: "बिल्कुल। मैंने वायुमंडलीय परिस्थितियों में सुधार होने तक अपनी शाम की आउटडोर जॉगिंग की दिनचर्या भी रद्द कर दी है।" }
        ]
      },
      {
        id: "day47_dial_003",
        title: "Free Problem-Resolution: Climate Change & Community Sustainability Initiative",
        context: "Two community organizers (Anil and Priya) proposing local renewable energy and afforestation projects.",
        characters: ["Anil", "Priya"],
        lines: [
          { speaker: "Anil", text: "Our town has experienced unprecedented summer heatwaves and consecutive years of drought.", hindi: "हमारे शहर ने अभूतपूर्व ग्रीष्मकालीन लू और सूखे के लगातार वर्षों का अनुभव किया है।" },
          { speaker: "Priya", text: "These recurring climate extremes are direct indicators of global environmental degradation and deforestation in our watershed.", hindi: "ये बार-बार होने वाले जलवायु के चरम रूप हमारे जलक्षेत्र में वैश्विक पर्यावरणीय गिरावट और वनों की कटाई के सीधे संकेतक हैं।" },
          { speaker: "Anil", text: "We must present a comprehensive sustainability proposal to the municipal council next Tuesday.", hindi: "हमें अगले मंगलवार को नगर परिषद के समक्ष एक व्यापक स्थिरता प्रस्ताव प्रस्तुत करना होगा।" },
          { speaker: "Priya", text: "Our primary initiatives should include urban rooftop solar mandates, rainwater harvesting reservoirs, and a mass tree-planting campaign to restore biodiversity.", hindi: "हमारी प्राथमिक पहलों में शहरी छतों पर सौर अनिवार्यता, वर्षा जल संचयन जलाशय और जैव विविधता को बहाल करने के लिए एक विशाल वृक्षारोपण अभियान शामिल होना चाहिए।" },
          { speaker: "Anil", text: "If we secure community backing, we can significantly reduce our municipality's carbon footprint and buffer against future floods.", hindi: "यदि हम सामुदायिक समर्थन हासिल करते हैं, तो हम अपनी नगरपालिका के कार्बन पदचिह्न को काफी कम कर सकते हैं और भविष्य की बाढ़ से बचाव कर सकते हैं।" }
        ]
      }
    ],
    speakingPrompt: {
      situation: "You are describing your city's seasonal weather patterns, current environmental challenges (e.g., smog, heatwave, monsoon), and proposed sustainability solutions to an international audience.",
      prompts: [
        "Describe the distinctive seasonal climate of your region (e.g., tropical, temperate, arid).",
        "Explain a major meteorological event you experienced (e.g., a severe monsoon downpour, a scorching heatwave, winter smog).",
        "Discuss air quality metrics or environmental issues affecting urban life.",
        "Propose practical steps for ecological conservation and reducing carbon emissions."
      ],
      targetExpressions: [
        "The regional climate is characterized by...",
        "During the monsoon deluge, it pours down...",
        "The Air Quality Index often reaches...",
        "To foster sustainability, we must curtail emissions..."
      ]
    },
    roleplay: {
      scenario: "Television weather forecast broadcast during an approaching tropical cyclone.",
      roleA: "Meteorologist: Delivering live radar updates, wind speeds, precipitation estimates, and evacuation advisories.",
      roleB: "News Anchor: Asking about landfall timing, storm surges, coastal flooding risks, and emergency shelters.",
      sampleDialogue: "Meteorologist: 'Gale-force winds exceeding 100 km/h and torrential precipitation are expected at landfall by 6 PM.'"
    }
  },
  assess: {
    benchmarks: [
      {
        id: "day47_bm_001",
        title: "Meteorological Conditions & Seasonal Transition Benchmark",
        prompt: "Describe your local weather conditions across two contrasting seasons (e.g., summer heatwave vs monsoon downpour) in 4–5 sentences using dummy 'It' and zero Indian English literalisms.",
        sampleAnswerEn: "During peak summer, it is sweltering hot with daytime temperatures soaring past forty-two degrees Celsius, accompanied by dry, blistering heatwaves. However, when the monsoon arrives in July, it pours down torrential rains that replenish parched reservoirs and cool the atmosphere. While the relentless precipitation frequently overwhelms urban storm drains, the lush green foliage revitalizes the entire landscape.",
        sampleAnswerHi: "गर्मी के चरम के दौरान, दिन का तापमान बयालीस डिग्री सेल्सियस से ऊपर जाने और शुष्क, भीषण लू के साथ अत्यधिक गर्मी होती है। हालाँकि, जब जुलाई में मानसून आता है, तो मूसलाधार बारिश होती है जो सूखे जलाशयों को भर देती है और वातावरण को ठंडा कर देती है। हालांकि लगातार होने वाली बारिश अक्सर शहरी तूफानी नालों को भर देती है, लेकिन हरी-भरी पत्तियां पूरे परिदृश्य को पुनर्जीवित कर देती हैं।",
        evaluationCriteria: "Flawless meteorological syntax ('it is sweltering hot', 'it pours down torrential rains'), precise descriptive vocabulary, and natural transitional flow."
      },
      {
        id: "day47_bm_002",
        title: "Air Quality & Atmospheric Pollution Benchmark",
        prompt: "Analyze the causes, metrics, and health hazards of winter metropolitan smog in 4–5 sentences, citing AQI measurements and safety advisories.",
        sampleAnswerEn: "Every winter, the metropolitan region is shrouded in a dense blanket of industrial and vehicular smog. Trapped by cold air temperature inversions, the Air Quality Index routinely surges past 400 into the hazardous threshold. Fine particulate matter causes acute respiratory inflammation, throat irritation, and impaired visibility across arterial expressways. Health authorities strongly advise wearing N95 filtration masks and limiting outdoor physical exertion until atmospheric dispersal occurs.",
        sampleAnswerHi: "हर सर्दियों में, महानगर औद्योगिक और वाहनों के स्मॉग की घनी चादर से ढक जाता है। ठंडी हवा के तापमान व्युत्क्रमण द्वारा फंसे होने के कारण, वायु गुणवत्ता सूचकांक नियमित रूप से 400 से अधिक खतरनाक सीमा तक पहुंच जाता है। महीन कण श्वसन संबंधी तीव्र सूजन, गले में जलन और प्रमुख एक्सप्रेसवे पर दृश्यता को कम करते हैं। स्वास्थ्य अधिकारी N95 मास्क पहनने और वायुमंडलीय फैलाव होने तक बाहरी शारीरिक श्रम को सीमित करने की दृढ़ता से सलाह देते हैं।",
        evaluationCriteria: "Scientific and environmental register ('dense blanket of smog', 'temperature inversions', 'fine particulate matter', 'hazardous threshold'), grammatical precision."
      },
      {
        id: "day47_bm_003",
        title: "Climate Change & Ecological Sustainability Benchmark",
        prompt: "Formulate a policy argument for adopting renewable energy and combatting climate change in 4–5 coherent sentences.",
        sampleAnswerEn: "Anthropogenic global warming has triggered unprecedented ecological crises, including prolonged agricultural droughts, retreating Himalayan glaciers, and catastrophic flash floods. To mitigate further climate destabilization, nations must aggressively accelerate the transition toward renewable solar and wind power. Curtailing greenhouse gas emissions while enforcing strict afforestation mandates will restore vital biodiversity and safeguard vulnerable ecosystems for future generations.",
        sampleAnswerHi: "मानवजनित ग्लोबल वार्मिंग ने अभूतपूर्व पारिस्थितिक संकटों को जन्म दिया है, जिसमें लंबे समय तक कृषि सूखा, पीछे हटते हिमालयी ग्लेशियर और विनाशकारी अचानक बाढ़ शामिल हैं। जलवायु को और अधिक अस्थिर होने से रोकने के लिए, देशों को नवीकरणीय सौर और पवन ऊर्जा की ओर संक्रमण को तेजी से आगे बढ़ाना चाहिए। ग्रीनहाउस गैस उत्सर्जन को कम करने के साथ-साथ सख्त वनीकरण नियमों को लागू करने से महत्वपूर्ण जैव विविधता बहाल होगी और भावी पीढ़ियों के लिए संवेदनशील पारिस्थितिक तंत्र की रक्षा होगी।",
        evaluationCriteria: "Scholarly environmental discourse ('anthropogenic global warming', 'mitigate climate destabilization', 'curtailing greenhouse gas emissions', 'afforestation mandates'), high-level syntactic cohesion."
      }
    ]
  },
  review: {
    quickRecall: [
      { q: "Why is '*Today rain is falling*' ungrammatical in standard English?", a: "Because meteorological events use dummy 'It': say 'It is raining / pouring down today'." },
      { q: "What is the difference between 'weather' and 'climate'?", a: "'Weather' refers to short-term daily atmospheric conditions; 'climate' refers to 30-year aggregate weather patterns." },
      { q: "What does 'smog' mean and how is it formed?", a: "Smog is a blend of smoke and fog (smoke + fog = smog), formed when air pollutants are trapped by cold air layers." },
      { q: "How is 'drought' pronounced?", a: "Pronounce it /draʊt/ (rhyming with 'out' and 'shout')." },
      { q: "What is a 'heatwave'?", a: "A prolonged period of abnormally hot and sweltering weather." }
    ],
    spacedTips: [
      "Check your smartphone weather app daily in English: notice terms like 'AQI', 'Humidity', 'UV Index', 'Overcast', 'Precipitation'.",
      "Describe the weather every morning using dummy 'It': 'It is brisk', 'It is sweltering', 'It is drizzling'.",
      "Read environmental news and practice using 'sustainability', 'carbon footprint', and 'emissions'."
    ]
  }
};

fs.writeFileSync(path.join(process.cwd(), 'content_builder/day47.js'), `export const day47 = ${JSON.stringify(day47, null, 2)};\n`, 'utf-8');
console.log("[SUCCESS] Upgraded Day 47 (55 exercises, 20 vocab, 12 phrases, 25 examples, 3 dialogues, 3 benchmarks)");
