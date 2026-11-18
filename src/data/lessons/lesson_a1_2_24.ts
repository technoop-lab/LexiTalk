import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_24_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_24',
  unitId: 'unit_a1_2',
  title: 'Weather, Seasons, Climate & Outdoor Plans',
  cefr: 'A1',
  icon: '⛅',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Describing Weather Conditions, Seasons, Temperature and What to Wear',
    description: 'Master weather vocabulary (sunny, rainy, cloudy, windy, snowing, foggy, stormy), four seasons (spring, summer, autumn/fall, winter), temperature terms (hot, warm, cool, cold, freezing), question patterns ("What is the weather like?", "How is the weather today?"), and weather-appropriate clothing advice.',
    descriptionsByLang: {
      hi: 'मौसम (sunny, rainy, cloudy, windy, snowing), चार ऋतुओं (spring, summer, autumn, winter), तापमान (hot, warm, cool, cold) और "What\'s the weather like today?" जैसे प्रश्न पूछना और मौसम के अनुसार कपड़े पहनने की सलाह देना सीखें।',
      es: 'Aprende a describir el clima (soleado, lluvioso, nublado, ventoso, nevando), las cuatro estaciones, la temperatura (caluroso, templado, fresco, frío) y la pregunta "¿Qué tiempo hace hoy?" (What is the weather like?).',
      fr: 'Apprenez à décrire la météo, les quatre saisons, la température et à poser la question "Quel temps fait-il ?".',
      de: 'Lernen Sie Wetterbedingungen, Jahreszeiten, Temperaturen und Wetterbeschreibungen auf Englisch.',
      pt: 'Aprenda a descrever o clima, as quatro estações, a temperatura e roupas apropriadas para o tempo.',
      zh: '掌握天气词汇（晴朗、下雨、多云、刮风、下雪）、四季、气温表达（炎热、温暖、凉爽、寒冷）及询问天气的句型（What is the weather like today?）。',
      ar: 'تعلم وصف الطقس والفصول الأربعة ودرجات الحرارة وكيفية السؤال عن حالة الطقس.',
      ja: '天気（晴れ、雨、曇り、風、雪）、四季、気温（暑い、暖かい、涼しい、寒い）、天気を尋ねる表現を学びます。',
      ru: 'Изучите описание погоды, четыре сезона, температуру и вопрос "Какая сегодня погода?".'
    },
    canDoStatements: [
      'Ask and answer about current weather: "What is the weather like today?" — "It is warm and sunny."',
      'Describe seasonal climate in your country or city: "In summer, it is very hot. In winter, it snows."',
      'State temperatures using degrees and descriptive adjectives: "It is 22 degrees Celsius today."',
      'Give weather-based advice: "Take an umbrella, it is raining outside." / "Wear a coat, it is freezing."',
      'Understand simple weather forecasts on TV, apps, or websites'
    ],
    canDoByLang: {
      hi: [
        'वर्तमान मौसम के बारे में पूछना और बताना: "It is sunny and hot today"',
        'ऋतुओं का वर्णन करना: "In winter, it is very cold"',
        'मौसम के अनुसार सलाह देना: "Take an umbrella, it is raining"'
      ],
      es: [
        'Preguntar y responder sobre el tiempo actual: "It is sunny"',
        'Describir las estaciones del año',
        'Dar recomendaciones según el tiempo: "Take an umbrella"'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l24_weather',
      word: 'weather',
      phonetic: '/ˈweð.ɚ/',
      meaning: 'The state of the atmosphere at a place and time as regards heat, dryness, sunshine, wind, rain, etc.',
      translationsByLang: { hi: 'मौसम', es: 'tiempo / clima', fr: 'temps / météo', de: 'Wetter', pt: 'clima / tempo', zh: '天气', ar: 'طقس / جو', ja: '天気', ru: 'погода' },
      exampleSentence: 'The weather is beautiful and warm today.',
      exampleTranslationByLang: { hi: 'आज मौसम बहुत सुंदर और गर्म है।', es: 'El tiempo está hermoso y cálido hoy.' },
      audioText: 'weather',
      audioId: 'en_a1_u02_l24_v_weather',
      slowAudioId: 'en_a1_u02_l24_v_weather_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌤️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_sunny',
      word: 'sunny',
      phonetic: '/ˈsʌn.i/',
      meaning: 'Bright with sunlight; characterized by sunshine',
      translationsByLang: { hi: 'धूप वाला / चमकदार', es: 'soleado', fr: 'ensoleillé', de: 'sonnig', pt: 'ensolarado', zh: '晴朗的 / 阳光明媚的', ar: 'مشمس', ja: '晴れの / 快晴の', ru: 'солнечный' },
      exampleSentence: 'It is a sunny morning, so we can walk in the park.',
      exampleTranslationByLang: { hi: 'यह धूप वाली सुबह है, इसलिए हम पार्क में टहल सकते हैं।', es: 'Es una mañana soleada, así que podemos caminar en el parque.' },
      audioText: 'sunny',
      audioId: 'en_a1_u02_l24_v_sunny',
      slowAudioId: 'en_a1_u02_l24_v_sunny_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '☀️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_rainy_raining',
      word: 'rainy / raining',
      phonetic: '/ˈreɪ.ni/ /ˈreɪ.nɪŋ/',
      meaning: 'Having a great deal of rainfall; water falling in drops from clouds',
      translationsByLang: { hi: 'बरसाती / बारिश होना', es: 'lluvioso / lloviendo', fr: 'pluvieux / il pleut', de: 'regnerisch / es regnet', pt: 'chuvoso / chovendo', zh: '下雨的 / 正在下雨', ar: 'ماطر / تمطر', ja: '雨の / 雨が降っている', ru: 'дождливый / идет дождь' },
      exampleSentence: 'It is raining outside, please take your umbrella.',
      exampleTranslationByLang: { hi: 'बाहर बारिश हो रही है, कृपया अपना छाता ले लें।', es: 'Está lloviendo afuera, por favor lleva tu paraguas.' },
      audioText: 'rainy and raining',
      audioId: 'en_a1_u02_l24_v_rainy',
      slowAudioId: 'en_a1_u02_l24_v_rainy_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌧️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_cloudy',
      word: 'cloudy',
      phonetic: '/ˈklaʊ.di/',
      meaning: 'Covered with or characterized by clouds; overcast',
      translationsByLang: { hi: 'बादल छाए हुए / घटाटोप', es: 'nublado', fr: 'nuageux', de: 'bewölkt / wolkig', pt: 'nublado', zh: '多云的 / 阴天的', ar: 'غائم', ja: '曇りの', ru: 'облачный / пасмурный' },
      exampleSentence: 'The sky is grey and cloudy this afternoon.',
      exampleTranslationByLang: { hi: 'आज दोपहर आसमान धूसर और बादलों से भरा है।', es: 'El cielo está gris y nublado esta tarde.' },
      audioText: 'cloudy',
      audioId: 'en_a1_u02_l24_v_cloudy',
      slowAudioId: 'en_a1_u02_l24_v_cloudy_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '☁️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_windy',
      word: 'windy',
      phonetic: '/ˈwɪn.di/',
      meaning: 'Marked by strong wind; gusty',
      translationsByLang: { hi: 'हवादार / तेज हवा वाला', es: 'ventoso / con mucho viento', fr: 'venteux', de: 'windig', pt: 'com vento / ventoso', zh: '刮风的 / 多风的', ar: 'عاصف / شديد الرياح', ja: '風が強い', ru: 'ветреный' },
      exampleSentence: 'Hold your hat! It is very windy by the beach.',
      exampleTranslationByLang: { hi: 'अपनी टोपी पकड़ो! समुद्र तट पर बहुत तेज़ हवा चल रही है।', es: '¡Sujeta tu sombrero! Hace mucho viento junto a la playa.' },
      audioText: 'windy',
      audioId: 'en_a1_u02_l24_v_windy',
      slowAudioId: 'en_a1_u02_l24_v_windy_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💨',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_snow_snowing',
      word: 'snow / snowing',
      phonetic: '/snoʊ/ /ˈsnoʊ.ɪŋ/',
      meaning: 'Frozen precipitation in the form of white flakes falling from the sky',
      translationsByLang: { hi: 'बर्फ / बर्फबारी होना', es: 'nieve / nevando', fr: 'neige / il neige', de: 'Schnee / es schneit', pt: 'neve / nevando', zh: '雪 / 正在下雪', ar: 'ثلج / يتساقط الثلج', ja: '雪 / 雪が降っている', ru: 'снег / идет снег' },
      exampleSentence: 'In January, it is snowing in the mountains.',
      exampleTranslationByLang: { hi: 'जनवरी में पहाड़ों में बर्फ गिर रही होती है।', es: 'En enero está nevando en las montañas.' },
      audioText: 'snow and snowing',
      audioId: 'en_a1_u02_l24_v_snow',
      slowAudioId: 'en_a1_u02_l24_v_snow_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❄️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_hot',
      word: 'hot',
      phonetic: '/hɑːt/',
      meaning: 'Having a high degree of heat or a high temperature',
      translationsByLang: { hi: 'गर्म / बहुत गर्म', es: 'caluroso / caliente', fr: 'chaud', de: 'heiß', pt: 'quente', zh: '热的 / 炎热的', ar: 'حار / ساخن', ja: '暑い / 熱い', ru: 'жаркий / горячий' },
      exampleSentence: 'Drink lots of water because it is 35 degrees and very hot.',
      exampleTranslationByLang: { hi: 'खूब पानी पिएं क्योंकि तापमान 35 डिग्री है और बहुत गर्मी है।', es: 'Bebe mucha agua porque hace 35 grados y mucho calor.' },
      audioText: 'hot',
      audioId: 'en_a1_u02_l24_v_hot',
      slowAudioId: 'en_a1_u02_l24_v_hot_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_warm',
      word: 'warm',
      phonetic: '/wɔːrm/',
      meaning: 'Of or at a fairly high temperature, in a pleasant and comfortable way',
      translationsByLang: { hi: 'हल्का गर्म / सुखद गर्म', es: 'cálido / templado', fr: 'tiède / doux / chaud', de: 'warm', pt: 'morno / agradável', zh: '温暖的', ar: 'دافئ', ja: '暖かい', ru: 'теплый' },
      exampleSentence: 'Spring days are warm and full of flowers.',
      exampleTranslationByLang: { hi: 'वसंत के दिन हल्के गर्म और फूलों से भरे होते हैं।', es: 'Los días de primavera son cálidos y llenos de flores.' },
      audioText: 'warm',
      audioId: 'en_a1_u02_l24_v_warm',
      slowAudioId: 'en_a1_u02_l24_v_warm_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌞',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_cool',
      word: 'cool',
      phonetic: '/kuːl/',
      meaning: 'Of or at a fairly low temperature, pleasantly mild and refreshing',
      translationsByLang: { hi: 'शीतल / हल्का ठंडा', es: 'fresco', fr: 'frais', de: 'kühl', pt: 'fresco', zh: '凉爽的', ar: 'معتدل البرودة / لطيف', ja: '涼しい', ru: 'прохладный' },
      exampleSentence: 'The evening breeze feels wonderfully cool.',
      exampleTranslationByLang: { hi: 'शाम की हवा अद्भुत रूप से ठंडी और ताज़ा लगती है।', es: 'La brisa de la tarde se siente maravillosamente fresca.' },
      audioText: 'cool',
      audioId: 'en_a1_u02_l24_v_cool',
      slowAudioId: 'en_a1_u02_l24_v_cool_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍃',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_cold',
      word: 'cold',
      phonetic: '/koʊld/',
      meaning: 'Of or at a low temperature, especially when compared to the human body',
      translationsByLang: { hi: 'ठंडा / सर्दी', es: 'frío', fr: 'froid', de: 'kalt', pt: 'frio', zh: '冷的 / 寒冷的', ar: 'بارد', ja: '寒い / 冷たい', ru: 'холодный' },
      exampleSentence: 'Wear your gloves; it is very cold this evening.',
      exampleTranslationByLang: { hi: 'दस्ताने पहन लो; आज शाम बहुत ठंड है।', es: 'Ponte los guantes; hace mucho frío esta noche.' },
      audioText: 'cold',
      audioId: 'en_a1_u02_l24_v_cold',
      slowAudioId: 'en_a1_u02_l24_v_cold_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥶',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_freezing',
      word: 'freezing',
      phonetic: '/ˈfriː.zɪŋ/',
      meaning: 'Extremely cold; below the freezing point of water (0°C / 32°F)',
      translationsByLang: { hi: 'जमा देने वाला ठंडा / अत्यधिक शीतल', es: 'helado / congelado / bajo cero', fr: 'glacial / gelé', de: 'eiskalt / frostig', pt: 'congelante / congelado', zh: '极冷的 / 冰冻的', ar: 'شديد البرودة / متجمد', ja: '凍えるほど寒い / 氷点下', ru: 'ледяной / морозный' },
      exampleSentence: 'The temperature is minus five, it is freezing!',
      exampleTranslationByLang: { hi: 'तापमान माइनस पांच है, यह जमा देने वाली ठंड है!', es: '¡La temperatura es de menos cinco grados, está helando!' },
      audioText: 'freezing',
      audioId: 'en_a1_u02_l24_v_freezing',
      slowAudioId: 'en_a1_u02_l24_v_freezing_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧊',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_spring',
      word: 'spring',
      phonetic: '/sprɪŋ/',
      meaning: 'The season between winter and summer when flowers bloom and temperatures rise',
      translationsByLang: { hi: 'वसंत ऋतु', es: 'primavera', fr: 'printemps', de: 'Frühling', pt: 'primavera', zh: '春天 / 春季', ar: 'فصل الربيع', ja: '春', ru: 'весна' },
      exampleSentence: 'Trees turn green and blossoms open in spring.',
      exampleTranslationByLang: { hi: 'वसंत में पेड़ हरे हो जाते हैं और फूल खिलते हैं।', es: 'Los árboles reverdecen y las flores se abren en primavera.' },
      audioText: 'spring',
      audioId: 'en_a1_u02_l24_v_spring',
      slowAudioId: 'en_a1_u02_l24_v_spring_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌸',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_summer',
      word: 'summer',
      phonetic: '/ˈsʌm.ɚ/',
      meaning: 'The warmest season of the year, between spring and autumn',
      translationsByLang: { hi: 'ग्रीष्म ऋतु / गर्मी का मौसम', es: 'verano', fr: 'été', de: 'Sommer', pt: 'verão', zh: '夏天 / 夏季', ar: 'فصل الصيف', ja: '夏', ru: 'лето' },
      exampleSentence: 'We go to the beach every weekend during summer.',
      exampleTranslationByLang: { hi: 'हम गर्मियों में हर सप्ताहांत समुद्र तट पर जाते हैं।', es: 'Vamos a la playa todos los fines de semana en verano.' },
      audioText: 'summer',
      audioId: 'en_a1_u02_l24_v_summer',
      slowAudioId: 'en_a1_u02_l24_v_summer_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏖️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_autumn_fall',
      word: 'autumn / fall',
      phonetic: '/ˈɔː.təm/ /fɑːl/',
      meaning: 'The season between summer and winter when leaves change color and drop',
      translationsByLang: { hi: 'शरद ऋतु / पतझड़', es: 'otoño', fr: 'automne', de: 'Herbst', pt: 'outono', zh: '秋天 / 秋季', ar: 'فصل الخريف', ja: '秋', ru: 'осень' },
      exampleSentence: 'In autumn, golden leaves fall from the trees.',
      exampleTranslationByLang: { hi: 'शरद ऋतु में पेड़ों से सुनहरे पत्ते गिरते हैं।', es: 'En otoño, las hojas doradas caen de los árboles.' },
      audioText: 'autumn and fall',
      audioId: 'en_a1_u02_l24_v_autumn',
      slowAudioId: 'en_a1_u02_l24_v_autumn_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍂',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_winter',
      word: 'winter',
      phonetic: '/ˈwɪn.tɚ/',
      meaning: 'The coldest season of the year, between autumn and spring',
      translationsByLang: { hi: 'शीत ऋतु / सर्दी का मौसम', es: 'invierno', fr: 'hiver', de: 'Winter', pt: 'inverno', zh: '冬天 / 冬季', ar: 'فصل الشتاء', ja: '冬', ru: 'зима' },
      exampleSentence: 'We light a fire in the fireplace during cold winter nights.',
      exampleTranslationByLang: { hi: 'हम सर्दियों की ठंडी रातों में अंगीठी में आग जलाते हैं।', es: 'Encendemos fuego en la chimenea durante las frías noches de invierno.' },
      audioText: 'winter',
      audioId: 'en_a1_u02_l24_v_winter',
      slowAudioId: 'en_a1_u02_l24_v_winter_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⛄',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_temperature',
      word: 'temperature',
      phonetic: '/ˈtem.prə.tʃɚ/',
      meaning: 'The degree or intensity of heat present in a substance or air',
      translationsByLang: { hi: 'तापमान', es: 'temperatura', fr: 'température', de: 'Temperatur', pt: 'temperatura', zh: '温度 / 气温', ar: 'درجة الحرارة', ja: '気温 / 温度', ru: 'температура' },
      exampleSentence: 'What is the temperature right now?',
      exampleTranslationByLang: { hi: 'इस समय तापमान कितना है?', es: '¿Cuál es la temperatura ahora mismo?' },
      audioText: 'temperature',
      audioId: 'en_a1_u02_l24_v_temperature',
      slowAudioId: 'en_a1_u02_l24_v_temperature_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌡️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_degrees',
      word: 'degrees (Celsius / Fahrenheit)',
      phonetic: '/dɪˈɡriːz/',
      meaning: 'A unit of measurement for temperature',
      translationsByLang: { hi: 'डिग्री (सेल्सियस)', es: 'grados (Celsius / Fahrenheit)', fr: 'degrés', de: 'Grad', pt: 'graus', zh: '度 / 摄氏度', ar: 'درجات مئوية', ja: '度（摂氏）', ru: 'градусы' },
      exampleSentence: 'It is 25 degrees Celsius and very comfortable.',
      exampleTranslationByLang: { hi: 'यह 25 डिग्री सेल्सियस है और बहुत आरामदायक है।', es: 'Hace 25 grados Celsius y está muy agradable.' },
      audioText: 'degrees Celsius',
      audioId: 'en_a1_u02_l24_v_degrees',
      slowAudioId: 'en_a1_u02_l24_v_degrees_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_umbrella',
      word: 'umbrella',
      phonetic: '/ʌmˈbrel.ə/',
      meaning: 'A folding canopy supported on a metal frame used for protection against rain or sun',
      translationsByLang: { hi: 'छाता', es: 'paraguas / sombrilla', fr: 'parapluie', de: 'Regenschirm', pt: 'guarda-chuva', zh: '雨伞 / 伞', ar: 'مظلة / شمسية', ja: '傘 / 雨傘', ru: 'зонт / зонтик' },
      exampleSentence: 'Never leave home on a rainy day without an umbrella.',
      exampleTranslationByLang: { hi: 'बरसात के दिन कभी भी बिना छाते के घर से न निकलें।', es: 'Nunca salgas de casa en un día lluvioso sin un paraguas.' },
      audioText: 'umbrella',
      audioId: 'en_a1_u02_l24_v_umbrella',
      slowAudioId: 'en_a1_u02_l24_v_umbrella_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '☂️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_sunglasses',
      word: 'sunglasses',
      phonetic: '/ˈsʌŋˌɡlæs.ɪz/',
      meaning: 'Glasses tinted to protect the eyes from sunlight or glare',
      translationsByLang: { hi: 'धूप का चश्मा', es: 'gafas de sol / lentes de sol', fr: 'lunettes de soleil', de: 'Sonnenbrille', pt: 'óculos de sol', zh: '太阳镜 / 墨镜', ar: 'نظارات شمسية', ja: 'サングラス', ru: 'солнцезащитные очки' },
      exampleSentence: 'I wear sunglasses because the sun is very bright.',
      exampleTranslationByLang: { hi: 'मैं धूप का चश्मा पहनता हूँ क्योंकि धूप बहुत तेज़ है।', es: 'Uso gafas de sol porque el sol brilla mucho.' },
      audioText: 'sunglasses',
      audioId: 'en_a1_u02_l24_v_sunglasses',
      slowAudioId: 'en_a1_u02_l24_v_sunglasses_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🕶️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_raincoat',
      word: 'raincoat',
      phonetic: '/ˈreɪn.koʊt/',
      meaning: 'A waterproof coat worn for protection from rain',
      translationsByLang: { hi: 'बरसाती कोट / रेनकोट', es: 'chubasquero / impermeable', fr: 'imperméable', de: 'Regenmantel', pt: 'capa de chuva', zh: '雨衣', ar: 'معطف واق من المطر', ja: 'レインコート / 雨がっぱ', ru: 'дождевик / непромокаемый плащ' },
      exampleSentence: 'Put on your yellow raincoat before riding the bicycle in the rain.',
      exampleTranslationByLang: { hi: 'बारिश में साइकिल चलाने से पहले अपना पीला रेनकोट पहन लें।', es: 'Ponte tu impermeable amarillo antes de andar en bicicleta bajo la lluvia.' },
      audioText: 'raincoat',
      audioId: 'en_a1_u02_l24_v_raincoat',
      slowAudioId: 'en_a1_u02_l24_v_raincoat_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_foggy',
      word: 'foggy',
      phonetic: '/ˈfɑː.ɡi/',
      meaning: 'Full of or characterized by thick fog; unclear visibility',
      translationsByLang: { hi: 'कोहरेदार / धुंधला', es: 'con niebla / brumoso', fr: 'brumeux / avec du brouillard', de: 'neblig', pt: 'com neblina / nevoeiro', zh: '有雾的 / 大雾弥漫的', ar: 'ضبابي', ja: '霧の深い / 濃霧の', ru: 'туманный' },
      exampleSentence: 'Drive carefully; it is very foggy this morning.',
      exampleTranslationByLang: { hi: 'सावधानी से चलाएं; आज सुबह बहुत कोहरा है।', es: 'Conduce con cuidado; hay mucha niebla esta mañana.' },
      audioText: 'foggy',
      audioId: 'en_a1_u02_l24_v_foggy',
      slowAudioId: 'en_a1_u02_l24_v_foggy_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌫️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_stormy_storm',
      word: 'stormy / thunderstorm',
      phonetic: '/ˈstɔːr.mi/ /ˈθʌn.dɚ.stɔːrm/',
      meaning: 'Characterized by strong winds, heavy rain, lightning, and thunder',
      translationsByLang: { hi: 'तूफानी / आंधी-तूफान', es: 'tormentoso / tormenta eléctrica', fr: 'orageux / tempête', de: 'stürmisch / Gewitter', pt: 'tempestuoso / tempestade', zh: '暴风雨的 / 雷暴', ar: 'عاصف / عاصفة رعدية', ja: '嵐の / 雷雨の', ru: 'штормовой / грозовой' },
      exampleSentence: 'Stay inside during a thunderstorm.',
      exampleTranslationByLang: { hi: 'आंधी-तूफान के समय अंदर ही रहें।', es: 'Quédate adentro durante una tormenta eléctrica.' },
      audioText: 'stormy and thunderstorm',
      audioId: 'en_a1_u02_l24_v_stormy',
      slowAudioId: 'en_a1_u02_l24_v_stormy_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⛈️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_forecast',
      word: 'weather forecast',
      phonetic: '/ˈweð.ɚ ˌfɔːr.kæst/',
      meaning: 'A prediction or statement about what the weather will be like',
      translationsByLang: { hi: 'मौसम का पूर्वानुमान', es: 'pronóstico del tiempo', fr: 'prévisions météo', de: 'Wettervorhersage', pt: 'previsão do tempo', zh: '天气预报', ar: 'النشرة الجوية / توقعات الطقس', ja: '天気予報', ru: 'прогноз погоды' },
      exampleSentence: 'I check the weather forecast every morning on my phone.',
      exampleTranslationByLang: { hi: 'मैं हर सुबह अपने फोन पर मौसम का पूर्वानुमान देखता हूँ।', es: 'Reviso el pronóstico del tiempo cada mañana en mi teléfono.' },
      audioText: 'weather forecast',
      audioId: 'en_a1_u02_l24_v_forecast',
      slowAudioId: 'en_a1_u02_l24_v_forecast_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📱',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_sky',
      word: 'sky',
      phonetic: '/skaɪ/',
      meaning: 'The region of the atmosphere and outer space seen from the earth',
      translationsByLang: { hi: 'आसमान / आकाश', es: 'cielo', fr: 'ciel', de: 'Himmel', pt: 'céu', zh: '天空', ar: 'سماء', ja: '空', ru: 'небо' },
      exampleSentence: 'The blue sky has no clouds today.',
      exampleTranslationByLang: { hi: 'आज नीले आसमान में कोई बादल नहीं हैं।', es: 'El cielo azul no tiene nubes hoy.' },
      audioText: 'sky',
      audioId: 'en_a1_u02_l24_v_sky',
      slowAudioId: 'en_a1_u02_l24_v_sky_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌌',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l24_breeze',
      word: 'breeze',
      phonetic: '/briːz/',
      meaning: 'A gentle, pleasant wind',
      translationsByLang: { hi: 'मंद समीर / हल्की सुखद हवा', es: 'brisa', fr: 'brise', de: 'Brise / sanfter Wind', pt: 'brisa', zh: '微风', ar: 'نسيم عليل', ja: 'そよ風', ru: 'легкий ветерок / бриз' },
      exampleSentence: 'There is a lovely cool breeze coming from the ocean.',
      exampleTranslationByLang: { hi: 'समुद्र की ओर से एक प्यारी ठंडी समीर आ रही है।', es: 'Hay una agradable brisa fresca que viene del océano.' },
      audioText: 'breeze',
      audioId: 'en_a1_u02_l24_v_breeze',
      slowAudioId: 'en_a1_u02_l24_v_breeze_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌬️',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks & Expressions (10 items)
  expressions: [
    {
      id: 'exp_u02_l24_01',
      phrase: 'What is the weather like?',
      meaning: 'Standard formula used to ask about current atmospheric conditions',
      translationsByLang: {
        hi: 'मौसम कैसा है?',
        es: '¿Qué tiempo hace? / ¿Cómo está el clima?',
        fr: 'Quel temps fait-il ?',
        de: 'Wie ist das Wetter?',
        pt: 'Como está o tempo?',
        zh: '天气怎么样？',
        ar: 'كيف هو الطقس؟',
        ja: '天気はどうですか？',
        ru: 'Какая погода?'
      },
      context: 'Asking a friend, colleague, or receptionist about the day\'s conditions.',
      audioId: 'en_a1_u02_l24_exp_01'
    },
    {
      id: 'exp_u02_l24_02',
      phrase: 'It is raining cats and dogs.',
      meaning: 'Idiomatic informal expression meaning it is raining very heavily',
      translationsByLang: {
        hi: 'मूसलाधार बारिश हो रही है।',
        es: 'Está lloviendo a cántaros.',
        fr: 'Il pleut des cordes.',
        de: 'Es regnet in Strömen.',
        pt: 'Está chovendo canivetes.',
        zh: '倾盆大雨。',
        ar: 'إنها تمطر بغزارة شديدة.',
        ja: '土砂降りの雨が降っています。',
        ru: 'Льет как из ведра.'
      },
      context: 'Describing torrential downpours informally.',
      audioId: 'en_a1_u02_l24_exp_02'
    },
    {
      id: 'exp_u02_l24_03',
      phrase: 'Take an umbrella with you.',
      meaning: 'Practical recommendation before leaving the house when rain is likely',
      translationsByLang: {
        hi: 'अपने साथ छाता ले लें।',
        es: 'Lleva un paraguas contigo.',
        fr: 'Prenez un parapluie avec vous.',
        de: 'Nimm einen Regenschirm mit.',
        pt: 'Leve um guarda-chuva com você.',
        zh: '随身带把雨伞。',
        ar: 'خذ مظلة معك.',
        ja: '傘を持っていきなさい。',
        ru: 'Возьми с собой зонт.'
      },
      context: 'Giving friendly advice before someone departs.',
      audioId: 'en_a1_u02_l24_exp_03'
    },
    {
      id: 'exp_u02_l24_04',
      phrase: 'It is freezing cold outside.',
      meaning: 'Emphasizing that the outside air is bitterly cold or below zero',
      translationsByLang: {
        hi: 'बाहर जमा देने वाली ठंड है।',
        es: 'Hace un frío que pela afuera / Hace un frío polar.',
        fr: 'Il fait un froid glacial dehors.',
        de: 'Draußen ist es eiskalt.',
        pt: 'Está um frio de congelar lá fora.',
        zh: '外面冷极了 / 冰冷刺骨。',
        ar: 'الجو متجمد البرودة في الخارج.',
        ja: '外は凍えるほど寒いです。',
        ru: 'На улице жуткий мороз.'
      },
      context: 'Warning others about sub-zero winter temperatures.',
      audioId: 'en_a1_u02_l24_exp_04'
    },
    {
      id: 'exp_u02_l24_05',
      phrase: 'The sun is shining.',
      meaning: 'Describing clear, bright sunny conditions',
      translationsByLang: {
        hi: 'धूप खिली हुई है / सूरज चमक रहा है।',
        es: 'El sol está brillando.',
        fr: 'Le soleil brille.',
        de: 'Die Sonne scheint.',
        pt: 'O sol está brilhando.',
        zh: '阳光明媚 / 太阳在照耀。',
        ar: 'الشمس مشرقة.',
        ja: '太陽が輝いています。',
        ru: 'Светит солнце.'
      },
      context: 'Greeting someone on a lovely day.',
      audioId: 'en_a1_u02_l24_exp_05'
    },
    {
      id: 'exp_u02_l24_06',
      phrase: 'It is getting colder.',
      meaning: 'Noting a gradual drop in temperature during the evening or change of seasons',
      translationsByLang: {
        hi: 'ठंड बढ़ रही है।',
        es: 'Se está poniendo más frío.',
        fr: 'Il commence à faire plus froid.',
        de: 'Es wird kälter.',
        pt: 'Está ficando mais frio.',
        zh: '天气变冷了。',
        ar: 'الطقس يزداد برودة.',
        ja: 'だんだん寒くなってきました。',
        ru: 'Становится холоднее.'
      },
      context: 'Noting evening temperature drops.',
      audioId: 'en_a1_u02_l24_exp_06'
    },
    {
      id: 'exp_u02_l24_07',
      phrase: 'What is the temperature today?',
      meaning: 'Asking for exact numeric temperature reading in degrees',
      translationsByLang: {
        hi: 'आज तापमान कितना है?',
        es: '¿Cuál es la temperatura de hoy?',
        fr: 'Quelle est la température aujourd\'hui ?',
        de: 'Wie hoch ist die Temperatur heute?',
        pt: 'Qual é a temperatura de hoje?',
        zh: '今天气温几度？',
        ar: 'كم درجة الحرارة اليوم؟',
        ja: '今日の気温は何ですか？',
        ru: 'Какая сегодня температура?'
      },
      context: 'Checking weather metrics before dressing.',
      audioId: 'en_a1_u02_l24_exp_07'
    },
    {
      id: 'exp_u02_l24_08',
      phrase: 'It feels like 30 degrees.',
      meaning: 'Describing the heat index / perceived temperature',
      translationsByLang: {
        hi: 'यह 30 डिग्री जैसा महसूस हो रहा है।',
        es: 'La sensación térmica es de 30 grados.',
        fr: 'On dirait qu\'il fait 30 degrés.',
        de: 'Es fühlt sich an wie 30 Grad.',
        pt: 'A sensação térmica é de 30 graus.',
        zh: '感觉像30度。',
        ar: 'تبدو الحرارة كأنها 30 درجة.',
        ja: '体感温度は30度くらいです。',
        ru: 'Ощущается как 30 градусов.'
      },
      context: 'Discussing perceived warmth or humidity.',
      audioId: 'en_a1_u02_l24_exp_08'
    },
    {
      id: 'exp_u02_l24_09',
      phrase: 'Enjoy the lovely weather!',
      meaning: 'Warm social blessing used when departing on a pleasant sunny day',
      translationsByLang: {
        hi: 'इस सुहावने मौसम का आनंद लें!',
        es: '¡Disfruta del buen tiempo!',
        fr: 'Profitez du beau temps !',
        de: 'Genieße das schöne Wetter!',
        pt: 'Aproveite o tempo bom!',
        zh: '享受好天气吧！',
        ar: 'استمتع بهذا الطقس الرائع!',
        ja: 'いい天気を楽しんでください！',
        ru: 'Наслаждайтесь прекрасной погодой!'
      },
      context: 'Friendly parting greeting.',
      audioId: 'en_a1_u02_l24_exp_09'
    },
    {
      id: 'exp_u02_l24_10',
      phrase: 'Don\'t forget your sunglasses and sunscreen.',
      meaning: 'Health advice for protection against UV radiation on bright summer days',
      translationsByLang: {
        hi: 'धूप का चश्मा और सनस्क्रीन लेना मत भूलना।',
        es: 'No olvides tus gafas de sol y protector solar.',
        fr: 'N\'oubliez pas vos lunettes de soleil et votre crème solaire.',
        de: 'Vergiss deine Sonnenbrille und Sonnencreme nicht.',
        pt: 'Não se esqueça dos óculos de sol e protetor solar.',
        zh: '别忘了戴墨镜和抹防晒霜。',
        ar: 'لا تنس نظارتك الشمسية وواقي الشمس.',
        ja: 'サングラスと日焼け止めを忘れないで。',
        ru: 'Не забудь солнцезащитные очки и крем.'
      },
      context: 'Advice before a summer beach or hiking trip.',
      audioId: 'en_a1_u02_l24_exp_10'
    }
  ],

  // SECTION 5: Grammar Rules (3 items)
  grammar: [
    {
      id: 'g_u02_l24_01',
      title: 'Describing Weather: "It is + Adjective" vs "It is + Verb-ing"',
      explanation: 'In English, we use the dummy subject "It" to describe the weather: "It is sunny" (adjective), "It is cold" (adjective), or "It is raining / snowing" (present continuous verb for active precipitation). Do not say "The weather is raining".',
      rulesByLang: {
        hi: 'मौसम का वर्णन करने के लिए "It is + Adjective" (जैसे It is sunny, It is cold) या वर्तमान में हो रही वर्षा के लिए "It is + Verb-ing" (जैसे It is raining, It is snowing) का प्रयोग करते हैं।',
        es: 'Para describir el clima usamos "It is + adjetivo" (It is sunny, It is windy) o "It is + verbo-ing" (It is raining, It is snowing). Nunca decimos "The weather is raining".',
        fr: 'On utilise "It is + adjectif" ou "It is + verbe en -ing".',
        de: 'Wir verwenden "It is + Adjektiv" oder "It is + Verb-ing".',
        pt: 'Usamos "It is + adjetivo" ou "It is + verbo-ing".',
        zh: '描述天气时使用 "It is + 形容词"（如 It is sunny/cold）或表示正在降水时用 "It is + 动词-ing"（如 It is raining/snowing）。',
        ar: 'نستخدم It is + صفة أو It is + فعل مضاف إليه ing لوصف حالة الطقس.',
        ja: '天気を表すときは「It is + 形容詞」（It is sunny）や現在進行形「It is + ing」（It is raining）を用います。',
        ru: 'Для описания погоды используется конструкция "It is + прилагательное" или "It is + глагол с -ing".'
      },
      examples: [
        { sentence: 'It is warm and sunny today.', translation: 'Hoy está cálido y soleado.' },
        { sentence: 'Look outside, it is raining heavily.', translation: 'Mira afuera, está lloviendo fuertemente.' },
        { sentence: 'It is very windy near the coast.', translation: 'Hace mucho viento cerca de la costa.' }
      ]
    },
    {
      id: 'g_u02_l24_02',
      title: 'Asking About the Weather: "What is the weather like?"',
      explanation: 'To ask about atmospheric conditions, use the set question formula: "What is the weather like (in [City] / today)?" or "How is the weather?". Note that "like" here is a preposition meaning "similar to", NOT the verb "to like".',
      rulesByLang: {
        hi: 'मौसम पूछने के लिए "What is the weather like in [City]?" या "How is the weather today?" का प्रयोग करें। यहाँ "like" का अर्थ पसंद करना नहीं बल्कि "कैसा" है।',
        es: 'Para preguntar por el clima usamos "¿What is the weather like?" o "¿How is the weather?". "Like" aquí no es el verbo gustar, sino una preposición que significa "¿cómo es?".',
        fr: 'Pour demander la météo, on utilise "What is the weather like?".',
        de: 'Um nach dem Wetter zu fragen, verwenden wir "What is the weather like?".',
        pt: 'Para perguntar sobre o clima, use "What is the weather like?".',
        zh: '询问天气使用句型 "What is the weather like in [地点]?" 或 "How is the weather?"。这里的 like 是介词，表示“如何、怎样”。',
        ar: 'للسؤال عن الطقس نستخدم الصيغة What is the weather like?',
        ja: '天気を尋ねる疑問文には "What is the weather like?" または "How is the weather?" を使います。',
        ru: 'Для вопроса о погоде используется формула "What is the weather like?".'
      },
      examples: [
        { sentence: 'What is the weather like in London today?', translation: '¿Qué tiempo hace en Londres hoy?' },
        { sentence: 'What is the weather like in winter?', translation: '¿Cómo es el clima en invierno?' },
        { sentence: 'How is the weather in Tokyo right now?', translation: '¿Cómo está el tiempo en Tokio ahora mismo?' }
      ]
    },
    {
      id: 'g_u02_l24_03',
      title: 'Prepositions with Seasons and Temperatures: "in" & "at"',
      explanation: 'Use "in" with seasons and months: "in spring", "in summer", "in winter", "in autumn". Use "at" or "be" with temperature degrees: "The temperature is at 20 degrees" or "It is 20 degrees".',
      rulesByLang: {
        hi: 'ऋतुओं और महीनों के साथ प्रीपोजिशन "in" का प्रयोग करते हैं (in summer, in winter, in July)। तापमान के लिए "It is 25 degrees" कहते हैं।',
        es: 'Usamos la preposición "in" con estaciones y meses: "in spring", "in summer". Para la temperatura decimos "It is 20 degrees".',
        fr: 'On utilise "in" avec les saisons : in summer, in winter.',
        de: 'Wir verwenden "in" mit Jahreszeiten: in spring, in winter.',
        pt: 'Usamos "in" com as estações do ano: in summer, in winter.',
        zh: '季节和月份前使用介词 "in"（如 in spring, in winter）。表达温度时直接用 "It is 20 degrees"。',
        ar: 'نستخدم حرف الجر in مع الفصول: in summer, in winter.',
        ja: '季節には前置詞 "in"（in spring, in summer）を用います。',
        ru: 'С временами года используется предлог "in" (in summer, in winter).'
      },
      examples: [
        { sentence: 'In summer, we go swimming every Saturday.', translation: 'En verano vamos a nadar todos los sábados.' },
        { sentence: 'It snows frequently in winter in Canada.', translation: 'Nieva con frecuencia en invierno en Canadá.' },
        { sentence: 'The flowers bloom beautifully in spring.', translation: 'Las flores florecen hermosamente en primavera.' }
      ]
    }
  ],

  // SECTION 6: Common Learner Mistakes (5 items)
  commonMistakes: [
    {
      id: 'cm_u02_l24_01',
      incorrect: 'It is making hot today.',
      correct: 'It is hot today.',
      explanation: 'In English, we do not translate literally from Spanish/French/Italian "makes hot" (hace calor / il fait chaud). We always say "It is hot" using the verb BE.',
      explanationByLang: {
        hi: 'अंग्रेज़ी में "It is hot today" कहते हैं, "makes hot" नहीं।',
        es: 'En inglés no se usa "make" para el tiempo. No digas "It makes hot", di siempre "It is hot".',
        fr: 'Ne dites pas "It makes hot", mais "It is hot".',
        de: 'Im Englischen heißt es "It is hot", nicht "It makes hot".',
        pt: 'Não use "makes hot", diga sempre "It is hot".',
        zh: '英语中表示天气热用 "It is hot"，不能用 "It makes hot"。',
        ar: 'في الإنجليزية نقول It is hot وليس It makes hot.',
        ja: '英語では "It makes hot" ではなく "It is hot" と言います。',
        ru: 'В английском языке говорят "It is hot", а не "It makes hot".'
      }
    },
    {
      id: 'cm_u02_l24_02',
      incorrect: 'The weather is raining.',
      correct: 'It is raining.',
      explanation: 'Use the pronoun "It" as the dummy subject for precipitation: "It is raining" or "It is snowing".',
      explanationByLang: {
        hi: 'बारिश के लिए "It is raining" कहें, "The weather is raining" गलत है।',
        es: 'Di "It is raining", no "The weather is raining".',
        fr: 'Dites "It is raining".',
        de: 'Man sagt "It is raining", nicht "The weather is raining".',
        pt: 'Diga "It is raining", não "The weather is raining".',
        zh: '表示正在下雨应用 "It is raining"，不可说 "The weather is raining"。',
        ar: 'قل It is raining ولا تقل The weather is raining.',
        ja: '「雨が降っている」は "It is raining" と表現します。',
        ru: 'Правильно говорить "It is raining", а не "The weather is raining".'
      }
    },
    {
      id: 'cm_u02_l24_03',
      incorrect: 'What is the weather like in summer? — It likes warm.',
      correct: 'What is the weather like in summer? — It is warm.',
      explanation: '"Like" in "What is the weather like?" is a preposition, not a verb. The answer must use BE: "It is warm".',
      explanationByLang: {
        hi: 'उत्तर में "It is warm" कहें, "It likes warm" नहीं।',
        es: '"Like" en la pregunta no es el verbo gustar. Responde siempre con "It is warm".',
        fr: 'Répondez avec "It is warm".',
        de: 'Antworten Sie mit "It is warm".',
        pt: 'Responda com "It is warm".',
        zh: '回答天气时应使用 "It is warm"，不能用 "It likes warm"。',
        ar: 'أجب بصيغة It is warm وليس It likes warm.',
        ja: '天気の返答には "It is warm" と答えます。',
        ru: 'Отвечать следует "It is warm", а не "It likes warm".'
      }
    },
    {
      id: 'cm_u02_l24_04',
      incorrect: 'In the summer I am going beach.',
      correct: 'In summer, I go to the beach.',
      explanation: 'Use the preposition "to" after "go" for destinations: "go to the beach". We also typically say "in summer" without "the".',
      explanationByLang: {
        hi: 'स्थान के साथ "go to the beach" कहें।',
        es: 'Usa "go to the beach" con la preposición "to".',
        fr: 'Dites "go to the beach".',
        de: 'Sagen Sie "go to the beach".',
        pt: 'Diga "go to the beach".',
        zh: '去海滩表达为 "go to the beach"，需要介词 "to"。',
        ar: 'قل go to the beach مستخدماً حرف الجر to.',
        ja: 'ビーチに行くときは "go to the beach" と "to" を補います。',
        ru: 'Правильно: "go to the beach".'
      }
    },
    {
      id: 'cm_u02_l24_05',
      incorrect: 'I wear a sunglasses.',
      correct: 'I wear sunglasses. / I wear a pair of sunglasses.',
      explanation: 'Nouns like "sunglasses", "glasses", and "trousers" are always plural and cannot take the singular article "a" directly.',
      explanationByLang: {
        hi: '"sunglasses" हमेशा बहुवचन होता है, इसलिए "a sunglasses" नहीं कह सकते। "a pair of sunglasses" कहें।',
        es: '"Sunglasses" es una palabra siempre en plural. No uses "a sunglasses", di "sunglasses" o "a pair of sunglasses".',
        fr: '"Sunglasses" est toujours au pluriel.',
        de: '"Sunglasses" steht immer im Plural.',
        pt: '"Sunglasses" é sempre plural.',
        zh: '"sunglasses"（太阳镜）是复数名词，不能直接加 "a"，应说 "a pair of sunglasses" 或直接用复数。',
        ar: 'كلمة sunglasses جمع دائماً ولا تأخذ أداة المفرد a.',
        ja: '"sunglasses" は常に複数形なので "a sunglasses" とは言えません。',
        ru: 'Слово "sunglasses" всегда во множественном числе, нельзя говорить "a sunglasses".'
      }
    }
  ],

  // SECTION 7: Realistic Dialogues (3 items)
  dialogues: [
    {
      id: 'd_u02_l24_01',
      title: 'Morning Weather Check & Dressing Advice',
      context: 'Two roommates, Liam and Sophie, are preparing to leave their apartment for work.',
      turns: [
        {
          speaker: 'Liam',
          text: 'Good morning Sophie! Have you checked the weather forecast today?',
          translationByLang: {
            hi: 'सुप्रभात सोफी! क्या तुमने आज का मौसम पूर्वानुमान देखा है?',
            es: '¡Buenos días, Sophie! ¿Has mirado el pronóstico del tiempo hoy?'
          },
          audioId: 'en_a1_u02_l24_d01_01'
        },
        {
          speaker: 'Sophie',
          text: 'Yes, I looked at my app. It says it is cloudy right now, but it will rain this afternoon.',
          translationByLang: {
            hi: 'हाँ, मैंने अपने ऐप पर देखा। यह अभी बादलों वाला बता रहा है, लेकिन आज दोपहर बारिश होगी।',
            es: 'Sí, miré en mi aplicación. Dice que está nublado ahora, pero lloverá esta tarde.'
          },
          audioId: 'en_a1_u02_l24_d01_02'
        },
        {
          speaker: 'Liam',
          text: 'What is the temperature outside?',
          translationByLang: {
            hi: 'बाहर तापमान कितना है?',
            es: '¿Cuál es la temperatura afuera?'
          },
          audioId: 'en_a1_u02_l24_d01_03'
        },
        {
          speaker: 'Sophie',
          text: 'It is around 14 degrees Celsius, so it is quite cool and windy. Don\'t forget your raincoat and umbrella!',
          translationByLang: {
            hi: 'यह लगभग 14 डिग्री सेल्सियस है, इसलिए काफी ठंडा और हवादार है। अपना रेनकोट और छाता मत भूलना!',
            es: 'Está alrededor de 14 grados Celsius, así que hace bastante fresco y viento. ¡No olvides tu impermeable y paraguas!'
          },
          audioId: 'en_a1_u02_l24_d01_04'
        }
      ]
    },
    {
      id: 'd_u02_l24_02',
      title: 'Comparing Seasons Around the World',
      context: 'Carlos from Colombia and Elena from Russia are chatting about their hometown climates.',
      turns: [
        {
          speaker: 'Carlos',
          text: 'In my hometown in Colombia, the weather is warm and sunny almost all year round. What is winter like in your city, Elena?',
          translationByLang: {
            hi: 'कोलंबिया में मेरे गृहनगर में लगभग पूरे साल मौसम गर्म और धूप वाला रहता है। आपके शहर में सर्दियाँ कैसी होती हैं, ऐलेना?',
            es: 'En mi ciudad en Colombia, el clima es cálido y soleado casi todo el año. ¿Cómo es el invierno en tu ciudad, Elena?'
          },
          audioId: 'en_a1_u02_l24_d02_01'
        },
        {
          speaker: 'Elena',
          text: 'Oh, winter in Moscow is freezing! It snows heavily from November to March, and the temperature can reach minus fifteen degrees.',
          translationByLang: {
            hi: 'ओह, मॉस्को में सर्दियाँ जमा देने वाली होती हैं! नवंबर से मार्च तक भारी बर्फबारी होती है, और तापमान माइनस पंद्रह डिग्री तक पहुंच सकता है।',
            es: '¡Oh, el invierno en Moscú es helado! Nieva intensamente de noviembre a marzo, y la temperatura puede llegar a menos quince grados.'
          },
          audioId: 'en_a1_u02_l24_d02_02'
        },
        {
          speaker: 'Carlos',
          text: 'Wow, that sounds so cold! Do you prefer summer then?',
          translationByLang: {
            hi: 'वाह, यह तो बहुत ठंडा लगता है! तो क्या आप गर्मियों को प्राथमिकता देती हैं?',
            es: '¡Vaya, eso suena muy frío! ¿Prefieres el verano entonces?'
          },
          audioId: 'en_a1_u02_l24_d02_03'
        },
        {
          speaker: 'Elena',
          text: 'Yes, summer is lovely. It is warm and bright, and we love having picnics in the city parks.',
          translationByLang: {
            hi: 'हाँ, गर्मियाँ बहुत प्यारी होती हैं। यह गर्म और उज्ज्वल होता है, और हम शहर के पार्कों में पिकनिक मनाना पसंद करते हैं।',
            es: 'Sí, el verano es encantador. Es cálido y luminoso, y nos encanta hacer picnics en los parques de la ciudad.'
          },
          audioId: 'en_a1_u02_l24_d02_04'
        }
      ]
    },
    {
      id: 'd_u02_l24_03',
      title: 'Planning a Weekend Beach Trip',
      context: 'Emma and Marco are deciding whether to go to the beach this Saturday.',
      turns: [
        {
          speaker: 'Emma',
          text: 'Marco, let\'s go to the beach this Saturday! The forecast says it will be 28 degrees and sunny.',
          translationByLang: {
            hi: 'मार्को, इस शनिवार को समुद्र तट पर चलते हैं! पूर्वानुमान कहता है कि 28 डिग्री और धूप रहेगी।',
            es: '¡Marco, vamos a la playa este sábado! El pronóstico dice que hará 28 grados y estará soleado.'
          },
          audioId: 'en_a1_u02_l24_d03_01'
        },
        {
          speaker: 'Marco',
          text: 'That sounds perfect! Is there any chance of wind or storm clouds?',
          translationByLang: {
            hi: 'यह बहुत बढ़िया लगता है! क्या हवा या तूफानी बादलों की कोई संभावना है?',
            es: '¡Eso suena perfecto! ¿Hay alguna probabilidad de viento o nubes de tormenta?'
          },
          audioId: 'en_a1_u02_l24_d03_02'
        },
        {
          speaker: 'Emma',
          text: 'No, zero percent rain. Just clear blue skies and a gentle ocean breeze.',
          translationByLang: {
            hi: 'नहीं, शून्य प्रतिशत बारिश। बस साफ नीला आसमान और एक सौम्य समुद्री समीर।',
            es: 'No, cero por ciento de lluvia. Solo cielo azul despejado y una suave brisa marina.'
          },
          audioId: 'en_a1_u02_l24_d03_03'
        },
        {
          speaker: 'Marco',
          text: 'Great! I will pack the towels, sunscreen, and our sunglasses.',
          translationByLang: {
            hi: 'बहुत बढ़िया! मैं तौलिए, सनस्क्रीन और हमारा धूप का चश्मा पैक करूँगा।',
            es: '¡Genial! Empacaré las toallas, el protector solar y nuestras gafas de sol.'
          },
          audioId: 'en_a1_u02_l24_d03_04'
        }
      ]
    }
  ],

  // SECTION 8: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l24_p01',
      lessonId: 'lesson_a1_2_24',
      type: 'multiple_choice',
      prompt: 'What is the correct sentence to describe a bright day with lots of sun?',
      options: [
        { id: 'a', text: 'It is sunny today.', isCorrect: true },
        { id: 'b', text: 'It is making sun today.', isCorrect: false },
        { id: 'c', text: 'The weather is sunning.', isCorrect: false },
        { id: 'd', text: 'It has sunny.', isCorrect: false }
      ],
      explanation: 'Use "It is sunny" (It + BE + adjective) to describe sunny weather.'
    },
    {
      id: 'ex_u02_l24_p02',
      lessonId: 'lesson_a1_2_24',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence with the correct season: "Flowers bloom and the weather gets warmer in _______."',
      correctAnswer: 'spring',
      options: [
        { id: 'opt_1', text: 'spring', isCorrect: true },
        { id: 'opt_2', text: 'winter', isCorrect: false },
        { id: 'opt_3', text: 'autumn', isCorrect: false },
        { id: 'opt_4', text: 'cloudy', isCorrect: false }
      ],
      explanation: 'Flowers bloom in spring.'
    },
    {
      id: 'ex_u02_l24_p03',
      lessonId: 'lesson_a1_2_24',
      type: 'multiple_choice',
      prompt: 'How do you ask about the atmospheric conditions in English?',
      options: [
        { id: 'a', text: 'What is the weather like?', isCorrect: true },
        { id: 'b', text: 'What does the weather like?', isCorrect: false },
        { id: 'c', text: 'How is making the weather?', isCorrect: false },
        { id: 'd', text: 'Which is the weather?', isCorrect: false }
      ],
      explanation: '"What is the weather like?" is the standard question formula.'
    },
    {
      id: 'ex_u02_l24_p04',
      lessonId: 'lesson_a1_2_24',
      type: 'match_pairs',
      prompt: 'Match the weather condition with the appropriate item:',
      pairs: [
        { id: 'p1', left: 'Rainy day', right: 'Umbrella' },
        { id: 'p2', left: 'Freezing winter', right: 'Warm winter coat' },
        { id: 'p3', left: 'Sunny beach', right: 'Sunglasses' },
        { id: 'p4', left: 'Thunderstorm', right: 'Stay indoors' }
      ]
    },
    {
      id: 'ex_u02_l24_p05',
      lessonId: 'lesson_a1_2_24',
      type: 'reorder',
      prompt: 'Arrange the words to make a correct sentence about current precipitation:',
      words: ['It', 'is', 'raining', 'heavily', 'outside'],
      correctOrder: ['It', 'is', 'raining', 'heavily', 'outside'],
      explanation: 'Structure: It + is + raining (verb-ing) + heavily + outside.'
    },
    {
      id: 'ex_u02_l24_p06',
      lessonId: 'lesson_a1_2_24',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence: "The temperature is minus ten degrees Celsius; it is absolutely _______."',
      correctAnswer: 'freezing',
      options: [
        { id: 'opt_1', text: 'freezing', isCorrect: true },
        { id: 'opt_2', text: 'warm', isCorrect: false },
        { id: 'opt_3', text: 'hot', isCorrect: false },
        { id: 'opt_4', text: 'sunny', isCorrect: false }
      ],
      explanation: 'Temperatures below zero are freezing.'
    },
    {
      id: 'ex_u02_l24_p07',
      lessonId: 'lesson_a1_2_24',
      type: 'multiple_choice',
      prompt: 'Which season is the hottest time of year between spring and autumn?',
      options: [
        { id: 'a', text: 'Summer', isCorrect: true },
        { id: 'b', text: 'Winter', isCorrect: false },
        { id: 'c', text: 'Spring', isCorrect: false },
        { id: 'd', text: 'Autumn', isCorrect: false }
      ],
      explanation: 'Summer is the hottest season.'
    },
    {
      id: 'ex_u02_l24_p08',
      lessonId: 'lesson_a1_2_24',
      type: 'multiple_choice',
      prompt: 'Which preposition is used with seasons: "We go skiing ___ winter."',
      options: [
        { id: 'a', text: 'in', isCorrect: true },
        { id: 'b', text: 'on', isCorrect: false },
        { id: 'c', text: 'at', isCorrect: false },
        { id: 'd', text: 'by', isCorrect: false }
      ],
      explanation: 'We use the preposition "in" with seasons (in winter, in summer).'
    },
    {
      id: 'ex_u02_l24_p09',
      lessonId: 'lesson_a1_2_24',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence: "Hold onto your hat because it is very _______ today."',
      correctAnswer: 'windy',
      options: [
        { id: 'opt_1', text: 'windy', isCorrect: true },
        { id: 'opt_2', text: 'freezing', isCorrect: false },
        { id: 'opt_3', text: 'sunny', isCorrect: false },
        { id: 'opt_4', text: 'snowing', isCorrect: false }
      ],
      explanation: 'Wind makes hats blow away, so it is windy.'
    },
    {
      id: 'ex_u02_l24_p10',
      lessonId: 'lesson_a1_2_24',
      type: 'reorder',
      prompt: 'Order the words to ask what the weather is like in London:',
      words: ['What', 'is', 'the', 'weather', 'like', 'in', 'London?'],
      correctOrder: ['What', 'is', 'the', 'weather', 'like', 'in', 'London?'],
      explanation: 'Question form: What is the weather like in [City]?'
    },
    {
      id: 'ex_u02_l24_p11',
      lessonId: 'lesson_a1_2_24',
      type: 'multiple_choice',
      prompt: 'What does "a weather forecast" mean?',
      options: [
        { id: 'a', text: 'A prediction of what the weather will be like', isCorrect: true },
        { id: 'b', text: 'A type of heavy rain umbrella', isCorrect: false },
        { id: 'c', text: 'The coldest month of the winter', isCorrect: false },
        { id: 'd', text: 'A seasonal outdoor sport', isCorrect: false }
      ],
      explanation: 'A weather forecast predicts upcoming atmospheric conditions.'
    },
    {
      id: 'ex_u02_l24_p12',
      lessonId: 'lesson_a1_2_24',
      type: 'match_pairs',
      prompt: 'Match each season with its characteristic feature:',
      pairs: [
        { id: 'p1', left: 'Summer', right: 'Hot temperatures & beach trips' },
        { id: 'p2', left: 'Winter', right: 'Snow & freezing temperatures' },
        { id: 'p3', left: 'Autumn', right: 'Golden leaves falling from trees' },
        { id: 'p4', left: 'Spring', right: 'Flowers blooming & warming air' }
      ]
    },
    {
      id: 'ex_u02_l24_p13',
      lessonId: 'lesson_a1_2_24',
      type: 'multiple_choice',
      prompt: 'Choose the correct correction for: "The weather is making hot."',
      options: [
        { id: 'a', text: 'It is hot.', isCorrect: true },
        { id: 'b', text: 'The weather makes warm.', isCorrect: false },
        { id: 'c', text: 'It is making warm.', isCorrect: false },
        { id: 'd', text: 'It has hot.', isCorrect: false }
      ],
      explanation: 'In English, we say "It is hot" using the verb BE.'
    },
    {
      id: 'ex_u02_l24_p14',
      lessonId: 'lesson_a1_2_24',
      type: 'fill_in_blank',
      prompt: 'Complete with the correct word: "The sky is dark and grey because it is very _______ today."',
      correctAnswer: 'cloudy',
      options: [
        { id: 'opt_1', text: 'cloudy', isCorrect: true },
        { id: 'opt_2', text: 'sunny', isCorrect: false },
        { id: 'opt_3', text: 'hot', isCorrect: false },
        { id: 'opt_4', text: 'warm', isCorrect: false }
      ],
      explanation: 'A grey sky covered in clouds is cloudy.'
    },
    {
      id: 'ex_u02_l24_p15',
      lessonId: 'lesson_a1_2_24',
      type: 'multiple_choice',
      prompt: 'Which word means a gentle, pleasant wind?',
      options: [
        { id: 'a', text: 'Breeze', isCorrect: true },
        { id: 'b', text: 'Storm', isCorrect: false },
        { id: 'c', text: 'Snow', isCorrect: false },
        { id: 'd', text: 'Fog', isCorrect: false }
      ],
      explanation: 'A breeze is a gentle, refreshing wind.'
    }
  ],

  // SECTION 9: Review Exercises (5 items)
  reviewExercises: [
    {
      id: 'ex_u02_l24_r01',
      lessonId: 'lesson_a1_2_24',
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      options: [
        { id: 'a', text: 'It is snowing in the mountains today.', isCorrect: true },
        { id: 'b', text: 'The weather is snow today.', isCorrect: false },
        { id: 'c', text: 'It makes snow outside.', isCorrect: false },
        { id: 'd', text: 'Is snow in mountain.', isCorrect: false }
      ],
      explanation: 'Use "It is snowing" for active snowfall.'
    },
    {
      id: 'ex_u02_l24_r02',
      lessonId: 'lesson_a1_2_24',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "Leaves turn orange and fall from trees in _______."',
      correctAnswer: 'autumn',
      options: [
        { id: 'opt_1', text: 'autumn', isCorrect: true },
        { id: 'opt_2', text: 'spring', isCorrect: false },
        { id: 'opt_3', text: 'summer', isCorrect: false },
        { id: 'opt_4', text: 'sunny', isCorrect: false }
      ],
      explanation: 'Leaves fall in autumn (fall).'
    },
    {
      id: 'ex_u02_l24_r03',
      lessonId: 'lesson_a1_2_24',
      type: 'reorder',
      prompt: 'Reorder the words to form a polite piece of advice:',
      words: ['Don\'t', 'forget', 'your', 'umbrella', 'today.'],
      correctOrder: ['Don\'t', 'forget', 'your', 'umbrella', 'today.'],
      explanation: 'Imperative advice: Don\'t forget your umbrella today.'
    },
    {
      id: 'ex_u02_l24_r04',
      lessonId: 'lesson_a1_2_24',
      type: 'match_pairs',
      prompt: 'Match temperature descriptions with degrees Celsius:',
      pairs: [
        { id: 'p1', left: '38°C', right: 'Extremely hot' },
        { id: 'p2', left: '22°C', right: 'Pleasantly warm' },
        { id: 'p3', left: '12°C', right: 'Cool' },
        { id: 'p4', left: '-5°C', right: 'Freezing cold' }
      ]
    },
    {
      id: 'ex_u02_l24_r05',
      lessonId: 'lesson_a1_2_24',
      type: 'multiple_choice',
      prompt: 'How do you answer: "What is the weather like in your city today?"',
      options: [
        { id: 'a', text: 'It is warm and sunny with a gentle breeze.', isCorrect: true },
        { id: 'b', text: 'It likes very sunny.', isCorrect: false },
        { id: 'c', text: 'The city makes sunny.', isCorrect: false },
        { id: 'd', text: 'Yes, I like the weather.', isCorrect: false }
      ],
      explanation: '"It is warm and sunny..." is the natural and grammatically correct answer.'
    }
  ],

  // SECTION 10: Assessment Exercises (5 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l24_a01',
      lessonId: 'lesson_a1_2_24',
      type: 'multiple_choice',
      prompt: 'Identify the sentence with correct English grammar:',
      options: [
        { id: 'a', text: 'In summer, it is usually very hot and sunny.', isCorrect: true },
        { id: 'b', text: 'On summer, it makes very hot.', isCorrect: false },
        { id: 'c', text: 'In the summer is weather very sunny.', isCorrect: false },
        { id: 'd', text: 'Summer likes to be hot.', isCorrect: false }
      ],
      explanation: '"In summer, it is usually very hot and sunny" uses the correct preposition "in" and dummy subject "it".'
    },
    {
      id: 'ex_u02_l24_a02',
      lessonId: 'lesson_a1_2_24',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence: "Wear a thick scarf and gloves because it is _______ outside."',
      correctAnswer: 'freezing',
      options: [
        { id: 'opt_1', text: 'freezing', isCorrect: true },
        { id: 'opt_2', text: 'hot', isCorrect: false },
        { id: 'opt_3', text: 'warm', isCorrect: false },
        { id: 'opt_4', text: 'sunny', isCorrect: false }
      ],
      explanation: 'Scarf and gloves are needed when it is freezing.'
    },
    {
      id: 'ex_u02_l24_a03',
      lessonId: 'lesson_a1_2_24',
      type: 'reorder',
      prompt: 'Arrange the sentence to express weather conditions:',
      words: ['It', 'is', 'cloudy', 'and', 'windy', 'this', 'afternoon.'],
      correctOrder: ['It', 'is', 'cloudy', 'and', 'windy', 'this', 'afternoon.'],
      explanation: 'Subject + BE + adjective + adjective + time expression.'
    },
    {
      id: 'ex_u02_l24_a04',
      lessonId: 'lesson_a1_2_24',
      type: 'multiple_choice',
      prompt: 'Which weather condition involves lightning, thunder, and heavy downpours?',
      options: [
        { id: 'a', text: 'Thunderstorm', isCorrect: true },
        { id: 'b', text: 'Gentle breeze', isCorrect: false },
        { id: 'c', text: 'Clear sky', isCorrect: false },
        { id: 'd', text: 'Sunny morning', isCorrect: false }
      ],
      explanation: 'A thunderstorm includes thunder, lightning, and heavy rain.'
    },
    {
      id: 'ex_u02_l24_a05',
      lessonId: 'lesson_a1_2_24',
      type: 'match_pairs',
      prompt: 'Match the weather question with its logical response:',
      pairs: [
        { id: 'p1', left: 'What is the weather like?', right: 'It is cloudy and cool.' },
        { id: 'p2', left: 'Is it raining?', right: 'Yes, take your umbrella.' },
        { id: 'p3', left: 'What is the temperature?', right: 'It is 24 degrees Celsius.' },
        { id: 'p4', left: 'What is your favorite season?', right: 'I love spring because of the flowers.' }
      ]
    }
  ]
};
