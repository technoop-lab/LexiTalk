import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_7_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_7',
  unitId: 'unit_a1_1',
  title: 'Places in the City & Prepositions of Location',
  cefr: 'A1',
  icon: '🏙️',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'City Places, Buildings & Spatial Prepositions',
    description: 'Learn names of common public buildings and urban locations, ask for and give basic directions using prepositions of place (next to, opposite, between, near, behind, in front of).',
    descriptionsByLang: {
      hi: 'शहर के प्रमुख स्थानों (बैंक, अस्पताल, पार्क आदि) के नाम और स्थान-सूचक Prepositions (next to, opposite, between, near) का उपयोग करके दिशा बताना व पूछना सीखें।',
      es: 'Aprende los nombres de lugares y edificios urbanos comunes y a dar indicaciones básicas usando preposiciones de lugar (next to, opposite, between, near).',
      fr: 'Apprenez les noms des lieux de la ville et à donner des indications avec les prépositions de lieu.',
      de: 'Lernen Sie Namen von Orten in der Stadt und wie man Ortsangaben mit Präpositionen macht.',
      pt: 'Aprenda nomes de lugares na cidade e a dar direções básicas usando preposições de lugar.',
      zh: '学习城市常见公共建筑名称，并运用方位介词问路与指路。',
      ar: 'تعلم أسماء الأماكن العامة في المدينة وحروف جر المكان لوصف المواقع وإعطاء الاتجاهات.',
      ja: '街の施設名と場所を表す前置詞（next to, opposite, between, nearなど）を用いて道案内や位置の説明を学びます。',
      ru: 'Научитесь называть городские объекты и указывать их местоположение с помощью предлогов места.'
    },
    canDoStatements: [
      'Name 12 common urban buildings and public amenities',
      'Use prepositions of place (next to, between, opposite, near, behind, in front of)',
      'Ask "Where is the nearest bank?" and "Is there a pharmacy near here?"',
      'Give simple 2-step location directions (e.g. "It is next to the post office")',
      'Understand simple map legends and public signage',
      'Recycle demonstratives and adjectives to describe buildings'
    ],
    canDoByLang: {
      hi: [
        'शहर की मुख्य इमारतों और सुविधाओं के नाम बताना',
        'Prepositions of place (next to, between, opposite, in front of) का सही प्रयोग',
        '"Where is the bank?" और "Is there a hotel near here?" पूछना',
        'सरल दिशा निर्देश देना'
      ],
      es: [
        'Nombrar lugares urbanos y edificios públicos',
        'Usar preposiciones de lugar para ubicar sitios',
        'Preguntar y responder dónde queda un lugar en la ciudad'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_place_bank',
      word: 'bank',
      phonetic: '/bæŋk/',
      meaning: 'A business where people keep or borrow money',
      translationsByLang: { hi: 'बैंक', es: 'banco', fr: 'banque', de: 'Bank', pt: 'banco', zh: '银行', ar: 'بنك / مصرف', ja: '銀行', ru: 'банк' },
      exampleSentence: 'The bank is open today.',
      exampleTranslationByLang: { hi: 'बैंक आज खुला है।', es: 'El banco está abierto hoy.' },
      audioText: 'bank',
      audioId: 'en_a1_u01_l07_v_bank',
      slowAudioId: 'en_a1_u01_l07_v_bank_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏦',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_hospital',
      word: 'hospital',
      phonetic: '/ˈhɑː.spɪ.t̬əl/',
      meaning: 'A place where sick or injured people are treated',
      translationsByLang: { hi: 'अस्पताल', es: 'hospital', fr: 'hôpital', de: 'Krankenhaus', pt: 'hospital', zh: '医院', ar: 'مستشفى', ja: '病院', ru: 'больница' },
      exampleSentence: 'She works as a nurse at the hospital.',
      exampleTranslationByLang: { hi: 'वह अस्पताल में एक नर्स के रूप में काम करती है।', es: 'Ella trabaja como enfermera en el hospital.' },
      audioText: 'hospital',
      audioId: 'en_a1_u01_l07_v_hospital',
      slowAudioId: 'en_a1_u01_l07_v_hospital_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_hotel',
      word: 'hotel',
      phonetic: '/hoʊˈtel/',
      meaning: 'A building where travelers pay for rooms and meals',
      translationsByLang: { hi: 'होटल', es: 'hotel', fr: 'hôtel', de: 'Hotel', pt: 'hotel', zh: '酒店 / 宾馆', ar: 'فندق', ja: 'ホテル', ru: 'отель / гостиница' },
      exampleSentence: 'The Grand Hotel is near the city center.',
      exampleTranslationByLang: { hi: 'ग्रैंड होटल शहर के केंद्र के पास है।', es: 'El Gran Hotel está cerca del centro.' },
      audioText: 'hotel',
      audioId: 'en_a1_u01_l07_v_hotel',
      slowAudioId: 'en_a1_u01_l07_v_hotel_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏨',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_supermarket',
      word: 'supermarket',
      phonetic: '/ˈsuː.pɚˌmɑːr.kɪt/',
      meaning: 'A large self-service shop selling foods and household goods',
      translationsByLang: { hi: 'सुपरमार्केट', es: 'supermercado', fr: 'supermarché', de: 'Supermarkt', pt: 'supermercado', zh: '超市', ar: 'سوبرماركت', ja: 'スーパーマーケット', ru: 'супермаркет' },
      exampleSentence: 'We buy fresh vegetables at the supermarket.',
      exampleTranslationByLang: { hi: 'हम सुपरमार्केट से ताज़ी सब्ज़ियाँ खरीदते हैं।', es: 'Compramos verduras frescas en el supermercado.' },
      audioText: 'supermarket',
      audioId: 'en_a1_u01_l07_v_supermarket',
      slowAudioId: 'en_a1_u01_l07_v_supermarket_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛒',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_restaurant',
      word: 'restaurant',
      phonetic: '/ˈres.tə.rɑːnt/',
      meaning: 'A place where meals are prepared and served to customers',
      translationsByLang: { hi: 'रेस्तरां / होटल', es: 'restaurante', fr: 'restaurant', de: 'Restaurant', pt: 'restaurante', zh: '餐厅', ar: 'مطعم', ja: 'レストラン', ru: 'ресторан' },
      exampleSentence: 'That Italian restaurant has delicious pizza.',
      exampleTranslationByLang: { hi: 'उस इटालियन रेस्तरां में स्वादिष्ट पिज़्ज़ा मिलता है।', es: 'Ese restaurante italiano tiene una pizza deliciosa.' },
      audioText: 'restaurant',
      audioId: 'en_a1_u01_l07_v_restaurant',
      slowAudioId: 'en_a1_u01_l07_v_restaurant_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍽️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_pharmacy',
      word: 'pharmacy',
      phonetic: '/ˈfɑːr.mə.si/',
      meaning: 'A shop where medicines are prepared and sold',
      translationsByLang: { hi: 'दवा की दुकान / फार्मेसी', es: 'farmacia', fr: 'pharmacie', de: 'Apotheke', pt: 'farmácia', zh: '药店', ar: 'صيدلية', ja: '薬局', ru: 'аптека' },
      exampleSentence: 'Is there a 24-hour pharmacy nearby?',
      exampleTranslationByLang: { hi: 'क्या आस-पास कोई 24 घंटे खुली रहने वाली फार्मेसी है?', es: '¿Hay una farmacia de 24 horas cerca?' },
      audioText: 'pharmacy',
      audioId: 'en_a1_u01_l07_v_pharmacy',
      slowAudioId: 'en_a1_u01_l07_v_pharmacy_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💊',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_park',
      word: 'park',
      phonetic: '/pɑːrk/',
      meaning: 'A public garden or green area used for recreation',
      translationsByLang: { hi: 'पार्क / उद्यान', es: 'parque', fr: 'parc', de: 'Park', pt: 'parque', zh: '公园', ar: 'حديقة / منتزه', ja: '公園', ru: 'парк' },
      exampleSentence: 'Children play in the green park.',
      exampleTranslationByLang: { hi: 'बच्चे हरे-भरे पार्क में खेलते हैं।', es: 'Los niños juegan en el parque verde.' },
      audioText: 'park',
      audioId: 'en_a1_u01_l07_v_park',
      slowAudioId: 'en_a1_u01_l07_v_park_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_station',
      word: 'station',
      phonetic: '/ˈsteɪ.ʃən/',
      meaning: 'A regular stopping place on a railway or bus line',
      translationsByLang: { hi: 'स्टेशन', es: 'estación', fr: 'gare / station', de: 'Bahnhof / Station', pt: 'estação', zh: '车站', ar: 'محطة', ja: '駅', ru: 'станция / вокзал' },
      exampleSentence: 'The train station is very busy in the morning.',
      exampleTranslationByLang: { hi: 'सुबह रेलवे स्टेशन पर बहुत भीड़ होती है।', es: 'La estación de tren está muy concurrida por la mañana.' },
      audioText: 'station',
      audioId: 'en_a1_u01_l07_v_station',
      slowAudioId: 'en_a1_u01_l07_v_station_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_airport',
      word: 'airport',
      phonetic: '/ˈer.pɔːrt/',
      meaning: 'A complex where airplanes take off and land',
      translationsByLang: { hi: 'हवाई अड्डा / एयरपोर्ट', es: 'aeropuerto', fr: 'aéroport', de: 'Flughafen', pt: 'aeroporto', zh: '机场', ar: 'مطار', ja: '空港', ru: 'аэропорт' },
      exampleSentence: 'The international airport is modern and clean.',
      exampleTranslationByLang: { hi: 'अंतरराष्ट्रीय हवाई अड्डा आधुनिक और साफ-सुथरा है।', es: 'El aeropuerto internacional es moderno y limpio.' },
      audioText: 'airport',
      audioId: 'en_a1_u01_l07_v_airport',
      slowAudioId: 'en_a1_u01_l07_v_airport_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✈️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_street',
      word: 'street',
      phonetic: '/striːt/',
      meaning: 'A public road in a city, town, or village',
      translationsByLang: { hi: 'सड़क / गली', es: 'calle', fr: 'rue', de: 'Straße', pt: 'rua', zh: '街道', ar: 'شارع', ja: '通り / 道路', ru: 'улица' },
      exampleSentence: 'There are many shops on Main Street.',
      exampleTranslationByLang: { hi: 'मेन स्ट्रीट पर कई दुकानें हैं।', es: 'Hay muchas tiendas en la calle principal.' },
      audioText: 'street',
      audioId: 'en_a1_u01_l07_v_street',
      slowAudioId: 'en_a1_u01_l07_v_street_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛣️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_prep_next_to',
      word: 'next to',
      phonetic: '/ˈnekst tuː/',
      meaning: 'Beside; at the side of someone or something',
      translationsByLang: { hi: 'के बगल में', es: 'al lado de / junto a', fr: 'à côté de', de: 'neben', pt: 'ao lado de', zh: '在……旁边', ar: 'بجانب', ja: '〜の隣に', ru: 'рядом с / около' },
      exampleSentence: 'The bank is next to the pharmacy.',
      exampleTranslationByLang: { hi: 'बैंक फार्मेसी के बगल में है।', es: 'El banco está al lado de la farmacia.' },
      audioText: 'next to',
      audioId: 'en_a1_u01_l07_v_next_to',
      slowAudioId: 'en_a1_u01_l07_v_next_to_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '➡️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_prep_opposite',
      word: 'opposite',
      phonetic: '/ˈɑː.pə.zɪt/',
      meaning: 'Facing or on the other side of a street or space',
      translationsByLang: { hi: 'के सामने (सड़क के उस पार)', es: 'enfrente de (cruzando)', fr: 'en face de', de: 'gegenüber', pt: 'em frente a', zh: '在……对面', ar: 'مقابل', ja: '〜の向かいに', ru: 'напротив' },
      exampleSentence: 'The cafe is opposite the train station.',
      exampleTranslationByLang: { hi: 'कैफे ट्रेन स्टेशन के ठीक सामने है।', es: 'El café está enfrente de la estación de tren.' },
      audioText: 'opposite',
      audioId: 'en_a1_u01_l07_v_opposite',
      slowAudioId: 'en_a1_u01_l07_v_opposite_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '↔️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_prep_between',
      word: 'between',
      phonetic: '/bɪˈtwiːn/',
      meaning: 'In the space separating two points, objects, or places',
      translationsByLang: { hi: 'के बीच में', es: 'entre', fr: 'entre', de: 'zwischen', pt: 'entre', zh: '在……之间', ar: 'بين', ja: '〜の間に', ru: 'между' },
      exampleSentence: 'The hotel is between the bank and the bookstore.',
      exampleTranslationByLang: { hi: 'होटल बैंक और किताबों की दुकान के बीच में है।', es: 'El hotel está entre el banco y la librería.' },
      audioText: 'between',
      audioId: 'en_a1_u01_l07_v_between',
      slowAudioId: 'en_a1_u01_l07_v_between_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🥪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_prep_near',
      word: 'near',
      phonetic: '/nɪr/',
      meaning: 'At a short distance from',
      translationsByLang: { hi: 'के पास / निकट', es: 'cerca de', fr: 'près de', de: 'in der Nähe von', pt: 'perto de', zh: '在……附近', ar: 'قريب من', ja: '〜の近くに', ru: 'вблизи / рядом' },
      exampleSentence: 'I live near the university.',
      exampleTranslationByLang: { hi: 'मैं विश्वविद्यालय के पास रहता हूँ।', es: 'Vivo cerca de la universidad.' },
      audioText: 'near',
      audioId: 'en_a1_u01_l07_v_near',
      slowAudioId: 'en_a1_u01_l07_v_near_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📍',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_prep_behind',
      word: 'behind',
      phonetic: '/bɪˈhaɪnd/',
      meaning: 'At the back of someone or something',
      translationsByLang: { hi: 'के पीछे', es: 'detrás de', fr: 'derrière', de: 'hinter', pt: 'atrás de', zh: '在……后面', ar: 'خلف / وراء', ja: '〜の後ろに', ru: 'позади / за' },
      exampleSentence: 'The parking lot is behind the building.',
      exampleTranslationByLang: { hi: 'पार्किंग लॉट इमारत के पीछे है।', es: 'El aparcamiento está detrás del edificio.' },
      audioText: 'behind',
      audioId: 'en_a1_u01_l07_v_behind',
      slowAudioId: 'en_a1_u01_l07_v_behind_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔙',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_prep_in_front_of',
      word: 'in front of',
      phonetic: '/ɪn frʌnt ʌv/',
      meaning: 'Directly ahead of or facing',
      translationsByLang: { hi: 'के सामने / आगे', es: 'delante de / frente a', fr: 'devant', de: 'vor', pt: 'em frente de', zh: '在……前面', ar: 'أمام', ja: '〜の正面に', ru: 'перед' },
      exampleSentence: 'There is a taxi in front of the hotel.',
      exampleTranslationByLang: { hi: 'होटल के सामने एक टैक्सी खड़ी है।', es: 'Hay un taxi delante del hotel.' },
      audioText: 'in front of',
      audioId: 'en_a1_u01_l07_v_in_front_of',
      slowAudioId: 'en_a1_u01_l07_v_in_front_of_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔜',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_library',
      word: 'library',
      phonetic: '/ˈlaɪ.brer.i/',
      meaning: 'A building containing books and study materials for public borrowing',
      translationsByLang: { hi: 'पुस्तकालय / लाइब्रेरी', es: 'biblioteca', fr: 'bibliothèque', de: 'Bibliothek', pt: 'biblioteca', zh: '图书馆', ar: 'مكتبة', ja: '図書館', ru: 'библиотека' },
      exampleSentence: 'The public library is very quiet.',
      exampleTranslationByLang: { hi: 'सार्वजनिक पुस्तकालय बहुत शांत है।', es: 'La biblioteca pública es muy tranquila.' },
      audioText: 'library',
      audioId: 'en_a1_u01_l07_v_library',
      slowAudioId: 'en_a1_u01_l07_v_library_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📚',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_museum',
      word: 'museum',
      phonetic: '/mjuːˈziː.əm/',
      meaning: 'A building displaying objects of historical or artistic interest',
      translationsByLang: { hi: 'संग्रहालय / म्यूजियम', es: 'museo', fr: 'musée', de: 'Museum', pt: 'museu', zh: '博物馆', ar: 'متحف', ja: '博物館 / 美術館', ru: 'музей' },
      exampleSentence: 'The city museum is open on weekends.',
      exampleTranslationByLang: { hi: 'शहर का संग्रहालय सप्ताहांत पर खुला रहता है।', es: 'El museo de la ciudad abre los fines de semana.' },
      audioText: 'museum',
      audioId: 'en_a1_u01_l07_v_museum',
      slowAudioId: 'en_a1_u01_l07_v_museum_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏛️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_center',
      word: 'city center',
      phonetic: '/ˈsɪt.i ˈsen.tər/',
      meaning: 'The central commercial and cultural area of a city (downtown)',
      translationsByLang: { hi: 'शहर का केंद्र / मेन सिटी', es: 'centro de la ciudad', fr: 'centre-ville', de: 'Stadtzentrum', pt: 'centro da cidade', zh: '市中心', ar: 'وسط المدينة', ja: '市内中心部', ru: 'центр города' },
      exampleSentence: 'The train goes straight to the city center.',
      exampleTranslationByLang: { hi: 'ट्रेन सीधे शहर के केंद्र तक जाती है।', es: 'El tren va directo al centro de la ciudad.' },
      audioText: 'city center',
      audioId: 'en_a1_u01_l07_v_center',
      slowAudioId: 'en_a1_u01_l07_v_center_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏙️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_place_corner',
      word: 'on the corner',
      phonetic: '/ɑːn ðə ˈkɔːr.nɚ/',
      meaning: 'At the point where two streets meet',
      translationsByLang: { hi: 'नुक्कड़ पर / कोने पर', es: 'en la esquina', fr: 'au coin de la rue', de: 'an der Ecke', pt: 'na esquina', zh: '在拐角处', ar: 'على الزاوية', ja: '角に', ru: 'на углу' },
      exampleSentence: 'The cafe is on the corner of Park Street.',
      exampleTranslationByLang: { hi: 'कैफे पार्क स्ट्रीट के कोने पर है।', es: 'El café está en la esquina de Park Street.' },
      audioText: 'on the corner',
      audioId: 'en_a1_u01_l07_v_corner',
      slowAudioId: 'en_a1_u01_l07_v_corner_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📐',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_excuse_where_is',
      text: 'Excuse me, where is the...?',
      meaning: 'Polite opening to ask a passerby for directions to a place',
      translationsByLang: {
        hi: 'माफ़ कीजिए, ... कहाँ है?',
        es: 'Disculpe, ¿dónde está el / la...?',
        fr: 'Excusez-moi, où se trouve le / la... ?',
        de: 'Entschuldigung, wo ist der/die/das...?'
      },
      audioText: 'Excuse me, where is the...?',
      audioId: 'en_a1_u01_l07_c_where_is',
      context: 'Asking strangers for directions on the street',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_is_there_near',
      text: 'Is there a pharmacy near here?',
      meaning: 'Asking if a type of facility exists in the immediate vicinity',
      translationsByLang: {
        hi: 'क्या यहाँ आस-पास कोई फार्मेसी है?',
        es: '¿Hay alguna farmacia cerca de aquí?',
        fr: 'Y a-t-il une pharmacie près d\'ici ?',
        de: 'Gibt es hier in der Nähe eine Apotheke?'
      },
      audioText: 'Is there a pharmacy near here?',
      audioId: 'en_a1_u01_l07_c_is_there_near',
      context: 'Finding essential services while traveling',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_just_down_street',
      text: 'It is just down the street on the left.',
      meaning: 'Giving simple relative direction',
      translationsByLang: {
        hi: 'यह बस सड़क पर थोड़ा आगे बाईं ओर है।',
        es: 'Está un poco más adelante en la calle, a la izquierda.',
        fr: 'C\'est juste plus bas dans la rue, sur la gauche.',
        de: 'Es ist die Straße runter auf der linken Seite.'
      },
      audioText: 'It is just down the street on the left.',
      audioId: 'en_a1_u01_l07_c_down_street',
      context: 'Guiding a tourist or colleague',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar
  grammar: {
    patterns: [
      {
        id: 'g_prepositions_place',
        title: 'Prepositions of Place (Spatial Location)',
        rule: 'Use prepositions of place to describe where a building or object is situated relative to another landmark.',
        formula: '[The + Subject Place] + [is] + [Preposition] + [the + Landmark Place]',
        examples: [
          { sentence: 'The supermarket is next to the bank.', translation: 'सुपरमार्केट बैंक के बगल में है। / El supermercado está al lado del banco.', audioText: 'The supermarket is next to the bank.', audioId: 'en_a1_u01_l07_g_ex1' },
          { sentence: 'The station is opposite the park.', translation: 'स्टेशन पार्क के ठीक सामने है। / La estación está enfrente del parque.', audioText: 'The station is opposite the park.', audioId: 'en_a1_u01_l07_g_ex2' },
          { sentence: 'The hotel is between the bank and the museum.', translation: 'होटल बैंक और संग्रहालय के बीच में है। / El hotel está entre el banco y el museo.', audioText: 'The hotel is between the bank and the museum.', audioId: 'en_a1_u01_l07_g_ex3' }
        ],
        explanationByLang: {
          hi: 'स्थान दर्शाने के लिए Prepositions का प्रयोग करें: "next to" (बगल में), "opposite" (सामने), "between A and B" (A और B के बीच), "behind" (पीछे)।',
          es: 'Las preposiciones de lugar indican la posición: "next to" (al lado de), "opposite" (enfrente de), "between" (entre dos cosas).'
        }
      },
      {
        id: 'g_is_there_a',
        title: 'Asking Existence: "Is there a...?" & "There is a..."',
        rule: 'Use "Is there a + singular noun + near here?" to inquire about amenities. Answer with "Yes, there is" or "No, there isn\'t".',
        formula: 'Question: Is there a + [Singular Noun] + [Location]? | Answer: Yes, there is. / No, there isn\'t.',
        examples: [
          { sentence: 'Is there a hospital near here?', translation: 'क्या यहाँ आस-पास कोई अस्पताल है? / ¿Hay un hospital cerca de aquí?', audioText: 'Is there a hospital near here?', audioId: 'en_a1_u01_l07_g_ex4' },
          { sentence: 'Yes, there is a hospital on Green Street.', translation: 'हाँ, ग्रीन स्ट्रीट पर एक अस्पताल है। / Sí, hay un hospital en Green Street.', audioText: 'Yes, there is a hospital on Green Street.', audioId: 'en_a1_u01_l07_g_ex5' }
        ],
        explanationByLang: {
          hi: 'किसी सुविधा की मौजूदगी पूछने के लिए "Is there a... near here?" का प्रयोग करें। उत्तर में "Yes, there is" या "No, there isn\'t" कहें।',
          es: 'Para preguntar si existe algún servicio cercano usa "Is there a [lugar] near here?". Responde con "Yes, there is" o "No, there isn\'t".'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_l7_next_of',
      incorrect: 'The bank is next of the hotel.',
      correct: 'The bank is next to the hotel.',
      whyExplanation: 'The preposition is "next TO", never "next of".',
      explanationsByLang: {
        hi: 'सही संयोजन "next to" है, कभी "next of" न कहें।',
        es: 'La preposición correcta es "next TO", nunca "next of".',
        fr: 'On dit "next TO" et non "next of".',
        de: 'Richtig ist "next TO", nicht "next of".'
      }
    },
    {
      id: 'cm_l7_between_with_and',
      incorrect: 'The hotel is between the bank or the cafe.',
      correct: 'The hotel is between the bank and the cafe.',
      whyExplanation: 'Use "between [A] AND [B]", not "or".',
      explanationsByLang: {
        hi: 'दो स्थानों के बीच दर्शाने के लिए हमेशा "between A AND B" का प्रयोग होता है।',
        es: 'Se dice "between A AND B", nunca con "or".',
        fr: 'Utilisez "between A AND B".',
        de: 'Verwenden Sie "between A AND B".'
      }
    }
  ],

  // SECTION 11: Dialogue
  dialogues: [
    {
      id: 'd_a1_1_7_city_directions',
      title: 'Finding the Nearest Bank',
      context: 'Maria is in a new city and asks a resident for directions to the nearest bank.',
      characters: [
        { id: 'char_maria', name: 'Maria', role: 'Tourist' },
        { id: 'char_resident', name: 'Resident', role: 'Local Citizen' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_maria',
          speakerName: 'Maria',
          text: 'Excuse me, is there a bank near here?',
          translationsByLang: { hi: 'माफ़ कीजिए, क्या यहाँ आस-पास कोई बैंक है?', es: 'Disculpe, ¿hay un banco cerca de aquí?' },
          audioText: 'Excuse me, is there a bank near here?',
          audioId: 'en_a1_u01_l07_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_resident',
          speakerName: 'Resident',
          text: 'Yes, there is City Bank on Market Street.',
          translationsByLang: { hi: 'हाँ, मार्केट स्ट्रीट पर सिटी बैंक है।', es: 'Sí, está el City Bank en Market Street.' },
          audioText: 'Yes, there is City Bank on Market Street.',
          audioId: 'en_a1_u01_l07_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_maria',
          speakerName: 'Maria',
          text: 'Where is it on Market Street?',
          translationsByLang: { hi: 'मार्केट स्ट्रीट पर यह कहाँ स्थित है?', es: '¿Dónde queda en Market Street?' },
          audioText: 'Where is it on Market Street?',
          audioId: 'en_a1_u01_l07_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_resident',
          speakerName: 'Resident',
          text: 'It is next to the pharmacy, opposite the big supermarket.',
          translationsByLang: { hi: 'यह फार्मेसी के बगल में है, बड़े सुपरमार्केट के ठीक सामने।', es: 'Está al lado de la farmacia, enfrente del gran supermercado.' },
          audioText: 'It is next to the pharmacy, opposite the big supermarket.',
          audioId: 'en_a1_u01_l07_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_maria',
          speakerName: 'Maria',
          text: 'Perfect! Thank you so much for your help.',
          translationsByLang: { hi: 'बहुत बढ़िया! आपकी मदद के लिए बहुत-बहुत धन्यवाद।', es: '¡Perfecto! Muchísimas gracias por su ayuda.' },
          audioText: 'Perfect! Thank you so much for your help.',
          audioId: 'en_a1_u01_l07_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15, 16: Practice Exercises
  practiceExercises: [
    {
      id: 'ex_l7_p1',
      lessonId: 'lesson_a1_1_7',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct preposition meaning "beside":',
      sourceSentence: 'The bank is ___ to the hotel.',
      options: [
        { id: 'o1', text: 'next', isCorrect: true },
        { id: 'o2', text: 'between', isCorrect: false },
        { id: 'o3', text: 'opposite', isCorrect: false }
      ],
      explanation: '"Next to" means beside.'
    },
    {
      id: 'ex_l7_p2',
      lessonId: 'lesson_a1_1_7',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct connector for "between":',
      sourceSentence: 'The library is between the school ___ the park.',
      options: [
        { id: 'o1', text: 'and', isCorrect: true },
        { id: 'o2', text: 'or', isCorrect: false },
        { id: 'o3', text: 'with', isCorrect: false }
      ],
      explanation: 'Use "between A and B".'
    },
    {
      id: 'ex_l7_p3',
      explanation: '\'Opposite\' means across from. \'The supermarket is opposite the train station\' places one place across from another.',
      lessonId: 'lesson_a1_1_7',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the location sentence:',
      targetSentence: 'The supermarket is opposite the train station',
      wordBank: ['The', 'supermarket', 'is', 'opposite', 'the', 'train', 'station', 'airport']
    },
    {
      id: 'ex_l7_p4',
      lessonId: 'lesson_a1_1_7',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the directions and choose what is stated:',
      audioText: 'There is a pharmacy near the hospital',
      options: [
        { id: 'o1', text: 'There is a pharmacy near the hospital', isCorrect: true },
        { id: 'o2', text: 'There is a bank near the school', isCorrect: false },
        { id: 'o3', text: 'There is a hotel near the station', isCorrect: false }
      ],
      explanation: 'The speaker states "There is a pharmacy near the hospital".'
    },
    {
      id: 'ex_l7_p5',
      explanation: 'Use \'in\' for the centre of a city or an area: \'in the city center\'.',
      lessonId: 'lesson_a1_1_7',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and write the phrase exactly:',
      audioText: 'The museum is in the city center',
      targetSentence: 'The museum is in the city center'
    },
    {
      id: 'ex_l7_p6',
      explanation: '\'Where is...?\' asks for a place. \'Nearest\' comes before the noun: \'the nearest bank\'.',
      lessonId: 'lesson_a1_1_7',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Form a question asking for location:',
      targetSentence: 'Where is the nearest bank in town',
      wordBank: ['Where', 'is', 'the', 'nearest', 'bank', 'in', 'town', 'what']
    },
    {
      id: 'ex_l7_p7',
      explanation: 'Use \'on\' for a street corner: \'on the corner of Park Street\'.',
      lessonId: 'lesson_a1_1_7',
      stage: 12,
      type: 'speaking',
      prompt: 'Read this direction clearly:',
      targetSentence: 'The hotel is on the corner of Park Street.',
      audioText: 'The hotel is on the corner of Park Street.'
    },
    {
      id: 'ex_l7_p8',
      explanation: '\'Opposite\' means across from: \'The hospital is opposite the park.\' Hindi: \'अस्पताल पार्क के सामने है।\'',
      lessonId: 'lesson_a1_1_7',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'अस्पताल पार्क के सामने है।',
      sourceTranslations: {
        hi: 'अस्पताल पार्क के सामने है।',
        es: 'El hospital está enfrente del parque.'
      },
      targetSentence: 'The hospital is opposite the park',
      wordBank: ['The', 'hospital', 'is', 'opposite', 'the', 'park', 'next', 'in']
    },
    {
      id: 'ex_l7_p9',
      lessonId: 'lesson_a1_1_7',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Lesson 6 Adjectives & Lesson 7 Places):',
      sourceSentence: 'The ___ museum is next to the modern library.',
      options: [
        { id: 'o1', text: 'old', isCorrect: true },
        { id: 'o2', text: 'cold', isCorrect: false },
        { id: 'o3', text: 'hot', isCorrect: false }
      ],
      explanation: '"Old museum" fits building description.'
    },
    {
      id: 'ex_l7_p10',
      lessonId: 'lesson_a1_1_7',
      stage: 15,
      type: 'error_correction',
      prompt: 'Correct the preposition error:',
      sourceSentence: 'The taxi is in front at the hotel.',
      options: [
        { id: 'o1', text: 'The taxi is in front of the hotel.', isCorrect: true },
        { id: 'o2', text: 'The taxi is in front to the hotel.', isCorrect: false },
        { id: 'o3', text: 'The taxi is in front on the hotel.', isCorrect: false }
      ],
      explanation: 'The compound preposition is "in front of".'
    },
    {
      id: 'ex_l7_p11',
      lessonId: 'lesson_a1_1_7',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Choose the natural response:',
      sourceSentence: 'Visitor: "Excuse me, is there a post office near here?" -> Local: "___"',
      options: [
        { id: 'o1', text: 'Yes, there is one next to the bank.', isCorrect: true },
        { id: 'o2', text: 'My name is Carlos.', isCorrect: false },
        { id: 'o3', text: 'It is ten o\'clock.', isCorrect: false }
      ],
      explanation: 'The reply points out the post office next to the bank.'
    },
    {
      id: 'ex_l7_p12',
      lessonId: 'lesson_a1_1_7',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Where do people board airplanes?',
      sourceSentence: 'Urban location vocabulary:',
      options: [
        { id: 'o1', text: 'airport', isCorrect: true },
        { id: 'o2', text: 'library', isCorrect: false },
        { id: 'o3', text: 'pharmacy', isCorrect: false }
      ],
      explanation: 'Airports are where airplanes take off and land.'
    },
    {
      id: 'ex_l7_p13',
      lessonId: 'lesson_a1_1_7',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Complete with the right article and noun:',
      sourceSentence: 'We need to buy medicine at ___ .',
      options: [
        { id: 'o1', text: 'the pharmacy', isCorrect: true },
        { id: 'o2', text: 'a airport', isCorrect: false },
        { id: 'o3', text: 'the parks', isCorrect: false }
      ],
      explanation: 'Medicines are bought at the pharmacy.'
    },
    {
      id: 'ex_l7_p14',
      explanation: '\'Behind\' means at the back of something: \'The parking lot is behind the school.\'',
      lessonId: 'lesson_a1_1_7',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Construct the sentence:',
      targetSentence: 'The parking lot is behind the school',
      wordBank: ['The', 'parking', 'lot', 'is', 'behind', 'the', 'school', 'in']
    },
    {
      id: 'ex_l7_p15',
      explanation: '\'In the city center\' is the usual phrase for the central part of a city.',
      lessonId: 'lesson_a1_1_7',
      stage: 12,
      type: 'speaking',
      prompt: 'Say this sentence into your microphone:',
      targetSentence: 'The Grand Hotel is in the city center.',
      audioText: 'The Grand Hotel is in the city center.'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 'ex_l7_rev1',
      lessonId: 'lesson_a1_1_7',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which preposition means "at the back of"?',
      sourceSentence: 'Spatial location check:',
      options: [
        { id: 'o1', text: 'behind', isCorrect: true },
        { id: 'o2', text: 'next to', isCorrect: false },
        { id: 'o3', text: 'opposite', isCorrect: false }
      ],
      explanation: '"Behind" means at the rear of something.'
    },
    {
      id: 'ex_l7_rev2',
      lessonId: 'lesson_a1_1_7',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Fill in the correct preposition of place:',
      sourceSentence: 'The cafe is ___ the corner of 5th Avenue.',
      options: [
        { id: 'o1', text: 'on', isCorrect: true },
        { id: 'o2', text: 'in', isCorrect: false },
        { id: 'o3', text: 'between', isCorrect: false }
      ],
      explanation: 'The standard expression is "on the corner".'
    },
    {
      id: 'ex_l7_rev3',
      explanation: '\'Is there\' introduces a place that may or may not exist: \'Is there a restaurant near the museum?\'',
      lessonId: 'lesson_a1_1_7',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      targetSentence: 'Is there a restaurant near the museum',
      wordBank: ['Is', 'there', 'a', 'restaurant', 'near', 'the', 'museum', 'are']
    },
    {
      id: 'ex_l7_rev4',
      explanation: '\'Between\' links two places: \'between the supermarket and the hotel.\' Hindi: \'बैंक सुपरमार्केट और होटल के बीच में है।\'',
      lessonId: 'lesson_a1_1_7',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'बैंक सुपरमार्केट और होटल के बीच में है।',
      sourceTranslations: { hi: 'बैंक सुपरमार्केट और होटल के बीच में है।', es: 'El banco está entre el supermercado y el hotel.' },
      targetSentence: 'The bank is between the supermarket and the hotel',
      wordBank: ['The', 'bank', 'is', 'between', 'the', 'supermarket', 'and', 'the', 'hotel', 'in']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_l7_a1',
      lessonId: 'lesson_a1_1_7',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct preposition to complete the sentence:',
      sourceSentence: 'The bookstore is next ___ the post office.',
      options: [
        { id: 'o1', text: 'to', isCorrect: true },
        { id: 'o2', text: 'of', isCorrect: false },
        { id: 'o3', text: 'at', isCorrect: false },
        { id: 'o4', text: 'in', isCorrect: false }
      ],
      explanation: 'The correct collocation is "next to".'
    },
    {
      id: 'ex_l7_a2',
      lessonId: 'lesson_a1_1_7',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Complete with the right question word:',
      sourceSentence: '___ is the train station?',
      options: [
        { id: 'o1', text: 'Where', isCorrect: true },
        { id: 'o2', text: 'Who', isCorrect: false },
        { id: 'o3', text: 'How many', isCorrect: false },
        { id: 'o4', text: 'What color', isCorrect: false }
      ],
      explanation: '"Where" asks for geographic or physical location.'
    },
    {
      id: 'ex_l7_a3',
      explanation: '\'In front of\' means before something on the same side. \'Behind\' is the opposite.',
      lessonId: 'lesson_a1_1_7',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Build the sentence:',
      targetSentence: 'The bus stop is in front of the hospital',
      wordBank: ['The', 'bus', 'stop', 'is', 'in', 'front', 'of', 'the', 'hospital', 'behind']
    },
    {
      id: 'ex_l7_a4',
      lessonId: 'lesson_a1_1_7',
      stage: 17,
      type: 'error_correction',
      prompt: 'Identify and fix the mistake:',
      sourceSentence: 'The cafe is between the bank or the park.',
      options: [
        { id: 'o1', text: 'The cafe is between the bank and the park.', isCorrect: true },
        { id: 'o2', text: 'The cafe is between the bank with the park.', isCorrect: false },
        { id: 'o3', text: 'The cafe is between the bank to the park.', isCorrect: false }
      ],
      explanation: 'Use "and" with "between".'
    },
    {
      id: 'ex_l7_a5',
      lessonId: 'lesson_a1_1_7',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and identify the location stated:',
      audioText: 'The museum is opposite the central park',
      options: [
        { id: 'o1', text: 'The museum is opposite the central park', isCorrect: true },
        { id: 'o2', text: 'The museum is next to the hospital', isCorrect: false },
        { id: 'o3', text: 'The hotel is in front of the station', isCorrect: false }
      ],
      explanation: 'The speaker states "The museum is opposite the central park".'
    },
    {
      id: 'ex_l7_a6',
      explanation: '\'There is\' + a + noun introduces something that exists: \'There is a small supermarket near here.\'',
      lessonId: 'lesson_a1_1_7',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe accurately:',
      audioText: 'There is a small supermarket near here',
      targetSentence: 'There is a small supermarket near here'
    },
    {
      id: 'ex_l7_a7',
      lessonId: 'lesson_a1_1_7',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the appropriate answer to the traveler:',
      sourceSentence: 'Traveler: "Excuse me, where can I catch a taxi?" -> Resident: "___"',
      options: [
        { id: 'o1', text: 'There is a taxi stand in front of the station.', isCorrect: true },
        { id: 'o2', text: 'I am a software engineer.', isCorrect: false },
        { id: 'o3', text: 'This is my black jacket.', isCorrect: false }
      ],
      explanation: 'Gives the location of the taxi stand.'
    },
    {
      id: 'ex_l7_a8',
      explanation: '\'Far from\' expresses distance: \'The airport is far from the city center.\' Hindi: \'हवाई अड्डा शहर के केंद्र से बहुत दूर है।\'',
      lessonId: 'lesson_a1_1_7',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'हवाई अड्डा शहर के केंद्र से बहुत दूर है।',
      sourceTranslations: { hi: 'हवाई अड्डा शहर के केंद्र से बहुत दूर है।', es: 'El aeropuerto está lejos del centro de la ciudad.' },
      targetSentence: 'The airport is far from the city center',
      wordBank: ['The', 'airport', 'is', 'far', 'from', 'the', 'city', 'center', 'near', 'in']
    },
    {
      id: 'ex_l7_a9',
      lessonId: 'lesson_a1_1_7',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Complete the affirmative existence sentence:',
      sourceSentence: '___ a modern library on Green Street.',
      options: [
        { id: 'o1', text: 'There is', isCorrect: true },
        { id: 'o2', text: 'Is there', isCorrect: false },
        { id: 'o3', text: 'There are', isCorrect: false },
        { id: 'o4', text: 'They are', isCorrect: false }
      ],
      explanation: 'Use "There is" for singular nouns ("a modern library").'
    },
    {
      id: 'ex_l7_a10',
      explanation: '\'Is there an Italian restaurant...?\' \'An\' comes before \'Italian\' because it starts with a vowel sound.',
      lessonId: 'lesson_a1_1_7',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final question:',
      targetSentence: 'Is there an Italian restaurant on this street',
      wordBank: ['Is', 'there', 'an', 'Italian', 'restaurant', 'on', 'this', 'street', 'are', 'that']
    }
  ]
};
