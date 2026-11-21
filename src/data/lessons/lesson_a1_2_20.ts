import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_20_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_20',
  unitId: 'unit_a1_2',
  title: 'Asking for & Giving Street Directions (Imperatives & Navigation)',
  cefr: 'A1',
  icon: '🗺️',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Giving and Following Street Directions with Imperatives and Landmarks',
    description: 'Master giving and understanding street directions using imperatives (Turn left, Turn right, Go straight ahead, Cross the street, Walk past, Take the second right). Learn essential urban navigation vocabulary, landmarks, distance indicators, and polite requests when asking strangers for help.',
    descriptionsByLang: {
      hi: 'आदेशात्मक क्रियाओं (Imperatives: Turn left, Turn right, Go straight ahead, Cross the road, Take the second right) और लैंडमार्क शब्दावली का उपयोग करके रास्ते के दिशा-निर्देश मांगना और समझाना सीखें। अजनबियों से विनम्रतापूर्वक रास्ता पूछने का अभ्यास करें।',
      es: 'Aprende a pedir y dar indicaciones en la calle usando imperativos (Turn left, Go straight ahead, Cross the street, Take the second right) y vocabulario urbano de orientación y puntos de referencia.',
      fr: 'Apprenez à demander et donner des directions dans la rue avec des impératifs et des points de repère.',
      de: 'Lernen Sie, mit Imperativen und Orientierungspunkten nach dem Weg zu fragen und Richtungsanweisungen zu geben.',
      pt: 'Aprenda a pedir e dar direções na rua usando imperativos e pontos de referência.',
      zh: '掌握使用祈使句（Turn left, Go straight ahead, Cross the street, Take the second right）及地标词汇进行街头问路与指路。',
      ar: 'تعلم طلب وإعطاء الاتجاهات في الشارع باستخدام صيغ الأمر والمعالم الحضرية.',
      ja: '命令形（Turn left, Go straight ahead, Cross the street など）と街の目印を用いて、道順を尋ねたり教えたりする表現を学びます。',
      ru: 'Научитесь спрашивать и указывать дорогу на улице, используя повелительное наклонение (Turn left, Go straight ahead) и городские ориентиры.'
    },
    canDoStatements: [
      'Ask politely for street directions: "Excuse me, how do I get to the central library?"',
      'Give clear turn-by-turn walking or driving instructions using imperatives',
      'Describe landmarks and reference points: "Walk past the bank and turn right at the traffic lights"',
      'Indicate exact turns: "Take the second street on your left"',
      'Confirm destinations: "It\'s on your right, you can\'t miss it"'
    ],
    canDoByLang: {
      hi: [
        'विनम्रता से रास्ता पूछना: "Excuse me, how do I get to the museum?"',
        'कदम-दर-कदम दिशा-निर्देश देना: "Turn left, go straight ahead"',
        'लैंडमार्क और चौराहों का संदर्भ देना: "past the bank, at the traffic lights"',
        'सटीक मोड़ बताना: "Take the second left"'
      ],
      es: [
        'Pedir indicaciones con cortesía: "Excuse me, how do I get to...?"',
        'Dar instrucciones claras paso a paso usando imperativos',
        'Describir puntos de referencia y confirmar destinos'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l20_turn_left',
      word: 'turn left',
      phonetic: '/tɝːn left/',
      meaning: 'To change direction toward the left side',
      translationsByLang: { hi: 'बाईं ओर मुड़ें / बाएं मुड़ें', es: 'gira a la izquierda / doble a la izquierda', fr: 'tournez à gauche', de: 'biegen Sie links ab', pt: 'vire à esquerda', zh: '左转 / 向左转', ar: 'انعطف يساراً', ja: '左に曲がる', ru: 'поверните налево' },
      exampleSentence: 'Turn left at the intersection and walk one block.',
      exampleTranslationByLang: { hi: 'चौराहे पर बाईं ओर मुड़ें और एक ब्लॉक चलें।', es: 'Gira a la izquierda en el cruce y camina una manzana.' },
      audioText: 'turn left',
      audioId: 'en_a1_u02_l20_v_turn_left',
      slowAudioId: 'en_a1_u02_l20_v_turn_left_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⬅️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_turn_right',
      word: 'turn right',
      phonetic: '/tɝːn raɪt/',
      meaning: 'To change direction toward the right side',
      translationsByLang: { hi: 'दाईं ओर मुड़ें / दाएं मुड़ें', es: 'gira a la derecha / doble a la derecha', fr: 'tournez à droite', de: 'biegen Sie rechts ab', pt: 'vire à direita', zh: '右转 / 向右转', ar: 'انعطف يميناً', ja: '右に曲がる', ru: 'поверните направо' },
      exampleSentence: 'Turn right at the traffic lights.',
      exampleTranslationByLang: { hi: 'ट्रैफिक लाइट पर दाईं ओर मुड़ें।', es: 'Gira a la derecha en el semáforo.' },
      audioText: 'turn right',
      audioId: 'en_a1_u02_l20_v_turn_right',
      slowAudioId: 'en_a1_u02_l20_v_turn_right_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '➡️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_go_straight',
      word: 'go straight ahead / go straight on',
      phonetic: '/ɡoʊ streɪt əˈhed/',
      meaning: 'To continue moving forward without turning',
      translationsByLang: { hi: 'सीधे आगे बढ़ें / सीधे जाएं', es: 'sigue todo recto / continúe recto', fr: 'allez tout droit / continuez tout droit', de: 'gehen Sie geradeaus', pt: 'siga em frente / vá direto', zh: '直走 / 一直往前走', ar: 'امشِ مباشرة إلى الأمام', ja: 'まっすぐ進む / 直進する', ru: 'идите прямо' },
      exampleSentence: 'Go straight ahead for two hundred meters.',
      exampleTranslationByLang: { hi: 'दो सौ मीटर तक सीधे आगे बढ़ें।', es: 'Sigue todo recto durante doscientos metros.' },
      audioText: 'go straight ahead and go straight on',
      audioId: 'en_a1_u02_l20_v_go_straight',
      slowAudioId: 'en_a1_u02_l20_v_go_straight_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⬆️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_cross_street',
      word: 'cross the street / cross the road',
      phonetic: '/krɑːs ðə striːt/',
      meaning: 'To go from one side of a road to the opposite side',
      translationsByLang: { hi: 'सड़क पार करें', es: 'cruza la calle', fr: 'traversez la rue', de: 'überqueren Sie die Straße', pt: 'atravesse a rua', zh: '过马路 / 穿过街道', ar: 'اعبر الشارع', ja: '道を渡る / 通りを横断する', ru: 'перейдите улицу' },
      exampleSentence: 'Cross the street at the pedestrian crossing.',
      exampleTranslationByLang: { hi: 'पैदल यात्री क्रॉसिंग पर सड़क पार करें।', es: 'Cruza la calle por el paso de peatones.' },
      audioText: 'cross the street and cross the road',
      audioId: 'en_a1_u02_l20_v_cross_street',
      slowAudioId: 'en_a1_u02_l20_v_cross_street_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚶‍♂️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_intersection',
      word: 'intersection / crossroads',
      phonetic: '/ˈɪn.t̬ɚ.sek.ʃən/',
      meaning: 'A point where two or more roads intersect and cross',
      translationsByLang: { hi: 'चौराहा', es: 'cruce / intersección', fr: 'carrefour / intersection', de: 'Kreuzung', pt: 'cruzamento / interseção', zh: '十字路口 / 交叉路口', ar: 'تقاطع طرق', ja: '交差点 / 十字路', ru: 'перекресток' },
      exampleSentence: 'There is a post office at the busy intersection.',
      exampleTranslationByLang: { hi: 'व्यस्त चौराहे पर एक डाकघर है।', es: 'Hay una oficina de correos en el cruce concurrido.' },
      audioText: 'intersection and crossroads',
      audioId: 'en_a1_u02_l20_v_intersection',
      slowAudioId: 'en_a1_u02_l20_v_intersection_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚦',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_traffic_lights',
      word: 'traffic lights',
      phonetic: '/ˈtræf.ɪk ˌlaɪts/',
      meaning: 'A set of automatically operated red, amber, and green lights for controlling road traffic',
      translationsByLang: { hi: 'ट्रैफिक लाइट / बत्ती', es: 'semáforos / luces de tráfico', fr: 'feux de signalisation / feux tricolores', de: 'Ampel / Verkehrsampel', pt: 'semáforo / sinal de trânsito', zh: '红绿灯 / 交通信号灯', ar: 'إشارات المرور', ja: '信号機 / 信号', ru: 'светофор' },
      exampleSentence: 'Stop at the red traffic lights.',
      exampleTranslationByLang: { hi: 'लाल ट्रैफिक लाइट पर रुकें।', es: 'Para en el semáforo en rojo.' },
      audioText: 'traffic lights',
      audioId: 'en_a1_u02_l20_v_traffic_lights',
      slowAudioId: 'en_a1_u02_l20_v_traffic_lights_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_corner',
      word: 'corner',
      phonetic: '/ˈkɔːr.nɚ/',
      meaning: 'A place or angle where two streets meet',
      translationsByLang: { hi: 'कोना / नुक्कड़', es: 'esquina', fr: 'coin / angle de rue', de: 'Ecke / Straßenecke', pt: 'esquina', zh: '拐角 / 街角', ar: 'زاوية / ركن الشارع', ja: '角 / コーナー', ru: 'угол (улицы)' },
      exampleSentence: 'The bakery is on the corner of Main Street.',
      exampleTranslationByLang: { hi: 'बेकरी मेन स्ट्रीट के कोने पर है।', es: 'La panadería está en la esquina de la calle principal.' },
      audioText: 'corner',
      audioId: 'en_a1_u02_l20_v_corner',
      slowAudioId: 'en_a1_u02_l20_v_corner_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📐',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_roundabout',
      word: 'roundabout / traffic circle',
      phonetic: '/ˈraʊnd.ə.baʊt/',
      meaning: 'A road junction at which traffic moves in one direction around a central island',
      translationsByLang: { hi: 'गोल चक्कर / राउंडअबाउट', es: 'rotonda / glorieta', fr: 'rond-point / giratoire', de: 'Kreisverkehr', pt: 'rotatória / rotunda', zh: '环岛 / 环形交叉口', ar: 'دوار المرور', ja: 'ロータリー / 環状交差点', ru: 'круговое движение / кольцо' },
      exampleSentence: 'At the roundabout, take the second exit.',
      exampleTranslationByLang: { hi: 'गोल चक्कर पर, दूसरा निकास लें।', es: 'En la rotonda, toma la segunda salida.' },
      audioText: 'roundabout and traffic circle',
      audioId: 'en_a1_u02_l20_v_roundabout',
      slowAudioId: 'en_a1_u02_l20_v_roundabout_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔄',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_block',
      word: 'block',
      phonetic: '/blɑːk/',
      meaning: 'The section of a street between two consecutive intersecting streets',
      translationsByLang: { hi: 'ब्लॉक / मोहल्ला', es: 'manzana / cuadra', fr: 'pâté de maisons / bloc', de: 'Häuserblock / Block', pt: 'quarteirão / quadra', zh: '街区', ar: 'كتلة سكنية / مربع سكني', ja: 'ブロック / 区画', ru: 'квартал' },
      exampleSentence: 'Walk two blocks down this avenue.',
      exampleTranslationByLang: { hi: 'इस एवेन्यू पर दो ब्लॉक आगे चलें।', es: 'Camina dos manzanas por esta avenida.' },
      audioText: 'block',
      audioId: 'en_a1_u02_l20_v_block',
      slowAudioId: 'en_a1_u02_l20_v_block_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏙️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_pedestrian_crossing',
      word: 'pedestrian crossing / crosswalk',
      phonetic: '/pəˈdes.tri.ən ˌkrɑː.sɪŋ/',
      meaning: 'A marked part of a road where pedestrians have right of way to cross',
      translationsByLang: { hi: 'पैदल यात्री क्रॉसिंग / ज़ेबरा क्रॉसिंग', es: 'paso de peatones / paso de cebra', fr: 'passage piéton', de: 'Zebrastreifen / Fußgängerüberweg', pt: 'faixa de pedestres / passadeira', zh: '人行横道 / 斑马线', ar: 'ممر المشاة', ja: '横断歩道', ru: 'пешеходный переход' },
      exampleSentence: 'Always cross the road at the pedestrian crossing.',
      exampleTranslationByLang: { hi: 'हमेशा पैदल यात्री क्रॉसिंग पर ही सड़क पार करें।', es: 'Cruza siempre la calle por el paso de peatones.' },
      audioText: 'pedestrian crossing and crosswalk',
      audioId: 'en_a1_u02_l20_v_pedestrian_crossing',
      slowAudioId: 'en_a1_u02_l20_v_pedestrian_crossing_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚶',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_bridge',
      word: 'bridge',
      phonetic: '/brɪdʒ/',
      meaning: 'A structure carrying a road or path across a river or obstacle',
      translationsByLang: { hi: 'पुल / सेतु', es: 'puente', fr: 'pont', de: 'Brücke', pt: 'ponte', zh: '桥 / 桥梁', ar: 'جسر', ja: '橋 / ブリッジ', ru: 'мост' },
      exampleSentence: 'Go across the bridge and the museum is on your right.',
      exampleTranslationByLang: { hi: 'पुल पार करें और संग्रहालय आपके दाईं ओर होगा।', es: 'Cruza el puente y el museo estará a tu derecha.' },
      audioText: 'bridge',
      audioId: 'en_a1_u02_l20_v_bridge',
      slowAudioId: 'en_a1_u02_l20_v_bridge_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_past',
      word: 'walk past / go past',
      phonetic: '/wɑːk pæst/',
      meaning: 'To move by or beyond a building or landmark without entering',
      translationsByLang: { hi: 'के आगे से गुजरना / पार करना', es: 'pasar por delante de / pasar de largo', fr: 'passer devant', de: 'vorbeigehen an', pt: 'passar por / passar em frente a', zh: '走过 / 经过', ar: 'يمر بجانب / يمر من أمام', ja: '〜を通り過ぎる / 通過する', ru: 'проходить мимо' },
      exampleSentence: 'Walk past the bank and the pharmacy is next door.',
      exampleTranslationByLang: { hi: 'बैंक के आगे से गुजरें और फार्मेसी ठीक बगल में है।', es: 'Pasa por delante del banco y la farmacia está al lado.' },
      audioText: 'walk past and go past',
      audioId: 'en_a1_u02_l20_v_past',
      slowAudioId: 'en_a1_u02_l20_v_past_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚶‍♂️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_on_your_right',
      word: 'on your right / on your left',
      phonetic: '/ɑːn jʊr raɪt/',
      meaning: 'Located on the designated lateral side relative to the traveler',
      translationsByLang: { hi: 'आपके दाईं ओर / बाईं ओर', es: 'a tu derecha / a tu izquierda', fr: 'sur votre droite / sur votre gauche', de: 'auf der rechten Seite / auf der linken Seite', pt: 'à sua direita / à sua esquerda', zh: '在你的右边 / 在你的左边', ar: 'على يمينك / على يسارك', ja: '右手（左手）側に', ru: 'справа от вас / слева от вас' },
      exampleSentence: 'The bank is on your right, opposite the park.',
      exampleTranslationByLang: { hi: 'बैंक आपके दाईं ओर है, पार्क के ठीक सामने।', es: 'El banco está a tu derecha, enfrente del parque.' },
      audioText: 'on your right and on your left',
      audioId: 'en_a1_u02_l20_v_on_your_right',
      slowAudioId: 'en_a1_u02_l20_v_on_your_right_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_near_far',
      word: 'near / far from here',
      phonetic: '/nɪr/ /fɑːr/',
      meaning: 'Close to or at a great distance from the current location',
      translationsByLang: { hi: 'पास में / यहाँ से दूर', es: 'cerca / lejos de aquí', fr: 'près / loin d\'ici', de: 'nah / weit von hier', pt: 'perto / longe daqui', zh: '附近 / 离这很远', ar: 'قريب / بعيد من هنا', ja: '近い / ここから遠い', ru: 'близко / далеко отсюда' },
      exampleSentence: 'Is the city center far from here? — No, it is very near.',
      exampleTranslationByLang: { hi: 'क्या शहर का केंद्र यहाँ से दूर है? — नहीं, यह बहुत पास है।', es: '¿Está lejos de aquí el centro? — No, está muy cerca.' },
      audioText: 'near and far from here',
      audioId: 'en_a1_u02_l20_v_near_far',
      slowAudioId: 'en_a1_u02_l20_v_near_far_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📍',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_map_gps',
      word: 'map / navigation / GPS',
      phonetic: '/mæp/',
      meaning: 'A diagrammatic representation of an area of land or streets',
      translationsByLang: { hi: 'नक्शा / जीपीएस / नेविगेशन', es: 'mapa / GPS / navegación', fr: 'carte / plan / GPS', de: 'Karte / Stadtplan / GPS', pt: 'mapa / GPS / navegação', zh: '地图 / 导航 / GPS', ar: 'خريطة / نظام تحديد المواقع', ja: '地図 / マップ / ナビ', ru: 'карта / навигатор / GPS' },
      exampleSentence: 'Look at the map on your smartphone.',
      exampleTranslationByLang: { hi: 'अपने स्मार्टफोन पर नक्शा देखें।', es: 'Mira el mapa en tu teléfono inteligente.' },
      audioText: 'map and navigation and GPS',
      audioId: 'en_a1_u02_l20_v_map_gps',
      slowAudioId: 'en_a1_u02_l20_v_map_gps_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗺️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_lost',
      word: 'lost / I am lost',
      phonetic: '/lɑːst/',
      meaning: 'Unable to find one\'s way',
      translationsByLang: { hi: 'रास्ता भटकना / मैं खो गया हूँ', es: 'perdido / me he perdido', fr: 'perdu / je suis perdu', de: 'verirrt / ich habe mich verlaufen', pt: 'perdido / estou perdido', zh: '迷路 / 我迷路了', ar: 'تائه / أنا ضائع', ja: '道に迷った / 迷子', ru: 'потерявшийся / я заблудился' },
      exampleSentence: 'Excuse me, I am lost. Can you help me?',
      exampleTranslationByLang: { hi: 'माफ़ कीजिए, मैं रास्ता भटक गया हूँ। क्या आप मेरी मदद कर सकते हैं?', es: 'Disculpe, me he perdido. ¿Puede ayudarme?' },
      audioText: 'lost and I am lost',
      audioId: 'en_a1_u02_l20_v_lost',
      slowAudioId: 'en_a1_u02_l20_v_lost_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_landmark',
      word: 'landmark',
      phonetic: '/ˈlænd.mɑːrk/',
      meaning: 'A prominent or well-known building or feature easily recognized',
      translationsByLang: { hi: 'लैंडमार्क / प्रसिद्ध स्थान', es: 'punto de referencia / monumento', fr: 'point de repère / monument', de: 'Wahrzeichen / Orientierungspunkt', pt: 'ponto de referência / marco', zh: '地标 / 标志性建筑', ar: 'معلم بارز', ja: '目印 / ランドマーク', ru: 'ориентир / достопримечательность' },
      exampleSentence: 'The cathedral is a famous landmark in the city center.',
      exampleTranslationByLang: { hi: 'कैथेड्रल शहर के केंद्र में एक प्रसिद्ध लैंडमार्क है।', es: 'La catedral es un punto de referencia famoso en el centro.' },
      audioText: 'landmark',
      audioId: 'en_a1_u02_l20_v_landmark',
      slowAudioId: 'en_a1_u02_l20_v_landmark_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏛️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_street_avenue',
      word: 'street / avenue / road',
      phonetic: '/striːt/ /ˈæv.ə.nuː/',
      meaning: 'Public thoroughfares in a town or city',
      translationsByLang: { hi: 'सड़क / मार्ग / एवेन्यू', es: 'calle / avenida', fr: 'rue / avenue', de: 'Straße / Allee', pt: 'rua / avenida', zh: '街道 / 大道', ar: 'شارع / جادة', ja: '通り / 大通り / 道', ru: 'улица / проспект' },
      exampleSentence: 'Walk down Fifth Avenue for three blocks.',
      exampleTranslationByLang: { hi: 'फिफ्थ एवेन्यू पर तीन ब्लॉक नीचे चलें।', es: 'Camina por la Quinta Avenida durante tres manzanas.' },
      audioText: 'street and avenue and road',
      audioId: 'en_a1_u02_l20_v_street_avenue',
      slowAudioId: 'en_a1_u02_l20_v_street_avenue_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛣️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_sidewalk',
      word: 'sidewalk / pavement',
      phonetic: '/ˈsaɪd.wɑːk/',
      meaning: 'A paved path for pedestrians at the side of a road',
      translationsByLang: { hi: 'फुटपाथ / पटरी', es: 'acera / vereda', fr: 'trottoir', de: 'Gehweg / Bürgersteig', pt: 'calçada / passeio', zh: '人行道', ar: 'رصيف المشاة', ja: '歩道', ru: 'тротуар' },
      exampleSentence: 'Please stay on the sidewalk when walking.',
      exampleTranslationByLang: { hi: 'चलते समय कृपया फुटपाथ पर रहें।', es: 'Por favor, camina por la acera.' },
      audioText: 'sidewalk and pavement',
      audioId: 'en_a1_u02_l20_v_sidewalk',
      slowAudioId: 'en_a1_u02_l20_v_sidewalk_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚶',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_take_second_left',
      word: 'take the first / second / third turning',
      phonetic: '/teɪk ðə ˈsek.ənd ˈtɝː.nɪŋ/',
      meaning: 'To make a turn into the numbered consecutive side street',
      translationsByLang: { hi: 'पहला / दूसरा / तीसरा मोड़ लें', es: 'toma la primera / segunda / tercera calle', fr: 'prenez la première / deuxième / troisième rue', de: 'nehmen Sie die erste / zweite / dritte Abzweigung', pt: 'pegue a primeira / segunda / terceira curva', zh: '在第1/2/3个路口转弯', ar: 'خذ المنعطف الأول / الثاني / الثالث', ja: '1番目 / 2番目 / 3番目の角を曲がる', ru: 'поверните на первом / втором / третьем повороте' },
      exampleSentence: 'Take the second turning on your left.',
      exampleTranslationByLang: { hi: 'अपनी बाईं ओर दूसरा मोड़ लें।', es: 'Toma la segunda calle a tu izquierda.' },
      audioText: 'take the first and second and third turning',
      audioId: 'en_a1_u02_l20_v_take_second_left',
      slowAudioId: 'en_a1_u02_l20_v_take_second_left_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '↪️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_straight_on',
      word: 'straight on',
      phonetic: '/streɪt ɑːn/',
      meaning: 'Continuing in the same forward direction without deviation',
      translationsByLang: { hi: 'सीधे आगे', es: 'todo recto / derecho', fr: 'tout droit', de: 'geradeaus weiter', pt: 'sempre em frente', zh: '一直往前', ar: 'إلى الأمام مباشرة', ja: 'まっすぐ', ru: 'прямо' },
      exampleSentence: 'Continue straight on until you see the hospital.',
      exampleTranslationByLang: { hi: 'जब तक आपको अस्पताल न दिखे, सीधे आगे बढ़ते रहें।', es: 'Continúa todo recto hasta que veas el hospital.' },
      audioText: 'straight on',
      audioId: 'en_a1_u02_l20_v_straight_on',
      slowAudioId: 'en_a1_u02_l20_v_straight_on_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⬆️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_opposite_across',
      word: 'across from / opposite',
      phonetic: '/əˈkrɑːs frʌm/',
      meaning: 'Directly on the other side of the road from a place',
      translationsByLang: { hi: 'सड़क के उस पार / ठीक सामने', es: 'enfrente de / al otro lado de la calle', fr: 'en face de / de l\'autre côté de la rue', de: 'gegenüber / auf der anderen Straßenseite', pt: 'do outro lado da rua / em frente a', zh: '在马路对面', ar: 'على الجانب الآخر من الشارع', ja: '通りの向かい側に', ru: 'через дорогу от / напротив' },
      exampleSentence: 'The supermarket is across from the petrol station.',
      exampleTranslationByLang: { hi: 'सुपरमार्केट पेट्रोल स्टेशन के ठीक सामने सड़क के उस पार है।', es: 'El supermercado está al otro lado de la gasolinera.' },
      audioText: 'across from and opposite',
      audioId: 'en_a1_u02_l20_v_across',
      slowAudioId: 'en_a1_u02_l20_v_across_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '↔️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_cant_miss_it',
      word: 'you cannot miss it',
      phonetic: '/juː ˈkæn.ɑːt mɪs ɪt/',
      meaning: 'It is very prominent and extremely easy to find',
      translationsByLang: { hi: 'आप इसे आसानी से पहचान लेंगे / चूक नहीं सकते', es: 'no tiene pérdida / no puedes no verlo', fr: 'vous ne pouvez pas le manquer', de: 'Sie können es nicht verfehlen', pt: 'não tem como errar / é impossível não ver', zh: '你不会错过的 / 很容易找', ar: 'لا يمكنك تفويته / ستجده بسهولة', ja: 'すぐ見つかります / 見逃すことはありません', ru: 'вы не пройдете мимо / легко найдете' },
      exampleSentence: 'It has a large golden sign, you cannot miss it.',
      exampleTranslationByLang: { hi: 'उसका एक बड़ा सुनहरा बोर्ड है, आप इसे आसानी से पहचान लेंगे।', es: 'Tiene un letrero dorado grande, no tiene pérdida.' },
      audioText: 'you cannot miss it',
      audioId: 'en_a1_u02_l20_v_cant_miss',
      slowAudioId: 'en_a1_u02_l20_v_cant_miss_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎯',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_how_do_i_get_to',
      word: 'how do I get to...',
      phonetic: '/haʊ duː aɪ ɡet tuː/',
      meaning: 'Formula for asking the route to a specific destination',
      translationsByLang: { hi: 'मैं ... तक कैसे पहुँचूँ?', es: '¿cómo llego a...?', fr: 'comment aller à... ?', de: 'wie komme ich zu...?', pt: 'como chego a...?', zh: '请问去……怎么走？', ar: 'كيف أصل إلى...؟', ja: '〜へはどう行けばいいですか？', ru: 'как мне добраться до...?' },
      exampleSentence: 'Excuse me, how do I get to the central station?',
      exampleTranslationByLang: { hi: 'माफ़ कीजिए, मैं सेंट्रल स्टेशन तक कैसे पहुँचूँ?', es: 'Disculpe, ¿cómo llego a la estación central?' },
      audioText: 'how do I get to',
      audioId: 'en_a1_u02_l20_v_how_get_to',
      slowAudioId: 'en_a1_u02_l20_v_how_get_to_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '❓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l20_excuse_me',
      word: 'excuse me',
      phonetic: '/ɪkˈskjuːz miː/',
      meaning: 'Polite expression used to get a stranger\'s attention',
      translationsByLang: { hi: 'माफ़ कीजिए / सुनिए', es: 'disculpe / perdón / con permiso', fr: 'excusez-moi / pardon', de: 'Entschuldigung', pt: 'com licença / desculpe', zh: '打扰一下 / 请问', ar: 'عذراً / لو سمحت', ja: 'すみません / 失礼ですが', ru: 'извините / прошу прощения' },
      exampleSentence: 'Excuse me, is there a bank near here?',
      exampleTranslationByLang: { hi: 'माफ़ कीजिए, क्या यहाँ पास में कोई बैंक है?', es: 'Disculpe, ¿hay un banco cerca de aquí?' },
      audioText: 'excuse me',
      audioId: 'en_a1_u02_l20_v_excuse_me',
      slowAudioId: 'en_a1_u02_l20_v_excuse_me_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🙋',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_u02_l20_excuse_me_how_get',
      text: 'Excuse me, how do I get to the museum?',
      meaning: 'Standard polite question to ask a stranger for directions',
      translationsByLang: {
        hi: 'माफ़ कीजिए, मैं संग्रहालय कैसे पहुँचूँ?',
        es: 'Disculpe, ¿cómo llego al museo?',
        fr: 'Excusez-moi, comment aller au musée ?',
        de: 'Entschuldigung, wie komme ich zum Museum?'
      },
      audioText: 'Excuse me, how do I get to the museum?',
      audioId: 'en_a1_u02_l20_c_how_get_museum',
      context: 'Urban navigation and tourism',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l20_go_straight_for_two_blocks',
      text: 'Go straight ahead for two blocks, then turn left.',
      meaning: 'Standard 2-step navigation formula',
      translationsByLang: {
        hi: 'दो ब्लॉक सीधे आगे बढ़ें, फिर बाईं ओर मुड़ें।',
        es: 'Sigue todo recto dos manzanas y luego gira a la izquierda.',
        fr: 'Allez tout droit pendant deux rues, puis tournez à gauche.',
        de: 'Gehen Sie zwei Häuserblocks geradeaus und biegen Sie dann links ab.'
      },
      audioText: 'Go straight ahead for two blocks, then turn left.',
      audioId: 'en_a1_u02_l20_c_straight_two_blocks',
      context: 'Giving street directions',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l20_you_cant_miss_it',
      text: 'It\'s on your right. You can\'t miss it!',
      meaning: 'Reassuring the listener that the destination is easily spotted',
      translationsByLang: {
        hi: 'यह आपके दाईं ओर है। आप इसे आसानी से पा लेंगे!',
        es: 'Está a tu derecha. ¡No tiene pérdida!',
        fr: 'C\'est sur votre droite. Vous ne pouvez pas le manquer !',
        de: 'Es ist auf der rechten Seite. Sie können es nicht verfehlen!'
      },
      audioText: 'It\'s on your right. You can\'t miss it!',
      audioId: 'en_a1_u02_l20_c_cant_miss',
      context: 'Concluding directions clearly',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar Rules
  grammar: {
    patterns: [
      {
        id: 'g_imperatives_for_directions',
        title: 'Imperatives for Street Directions (Base Verb Form)',
        rule: 'To give directions, use the base form of the verb without a subject (no "you"): "Turn left", "Go straight ahead", "Cross the bridge", "Take the second street". For negative directions, use "Don\'t turn...".',
        formula: '[Base Verb] + [Direction / Landmark]\nTurn [left / right] | Go [straight ahead] | Cross [the street] | Walk past [the bank]',
        examples: [
          { sentence: 'Turn left at the traffic lights and walk past the bakery.', translation: 'ट्रैफिक लाइट पर बाईं ओर मुड़ें और बेकरी के आगे से निकलें। / Gira a la izquierda en el semáforo y pasa por delante de la panadería.', audioText: 'Turn left at the traffic lights and walk past the bakery.', audioId: 'en_a1_u02_l20_g_ex1' },
          { sentence: 'Don\'t cross the bridge; turn right before the river.', translation: 'पुल पार न करें; नदी से पहले दाईं ओर मुड़ें। / No cruces el puente; gira a la derecha antes del río.', audioText: 'Don\'t cross the bridge; turn right before the river.', audioId: 'en_a1_u02_l20_g_ex2' }
        ],
        explanationByLang: {
          hi: 'रास्ता बताते समय क्रिया का मूल रूप (Base Form) प्रयोग करें: "Turn left", "Go straight"। "You turn" या "To turn" नहीं।',
          es: 'Para dar indicaciones usa el imperativo afirmativo (forma base del verbo sin sujeto): "Turn left", "Go straight". En negativo: "Don\'t cross".'
        }
      },
      {
        id: 'g_asking_polite_directions',
        title: 'Polite Direction Questions (Excuse me + How do I get to...?)',
        rule: 'Begin by addressing the person with "Excuse me," followed by "How do I get to + [Destination]?" or "Is there a + [Place] + near here?".',
        formula: 'Excuse me, how do I get to the + [Destination]?\nExcuse me, where is the nearest + [Facility]?',
        examples: [
          { sentence: 'Excuse me, where is the nearest pharmacy? — It is on the corner of Maple Street.', translation: 'माफ़ कीजिए, सबसे पास की फार्मेसी कहाँ है? — वह मेपल स्ट्रीट के कोने पर है। / Disculpe, ¿dónde está la farmacia más cercana? — Está en la esquina de Maple Street.', audioText: 'Excuse me, where is the nearest pharmacy? It is on the corner of Maple Street.', audioId: 'en_a1_u02_l20_g_ex3' }
        ],
        explanationByLang: {
          hi: 'अजनबी से रास्ता पूछते समय शुरुआत "Excuse me, how do I get to..." से करें।',
          es: 'Fórmula de cortesía: "Excuse me, how do I get to...?" o "Excuse me, where is the nearest...?".'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_u02_l20_turn_to_left',
      incorrect: 'Turn to the left at the bank.',
      correct: 'Turn left at the bank.',
      whyExplanation: 'In standard English directions, say "Turn left", NOT "*Turn to left*".',
      explanationsByLang: {
        hi: '"Turn left" बोलें, "*Turn to left*" नहीं।',
        es: 'Se dice directamente "Turn left", no "*Turn to the left*".',
        fr: 'Dites "Turn left" et non "*Turn to left*".',
        de: 'Sagen Sie "Turn left", nicht "*Turn to left*".'
      }
    },
    {
      id: 'cm_u02_l20_go_to_straight',
      incorrect: 'Go to straight for two blocks.',
      correct: 'Go straight ahead for two blocks.',
      whyExplanation: 'Do not use "to" with straight. Say "Go straight ahead" or "Go straight on".',
      explanationsByLang: {
        hi: '"Go straight ahead" कहें, "*Go to straight*" नहीं।',
        es: 'La frase correcta es "Go straight ahead", nunca "*Go to straight*".',
        fr: 'Dites "Go straight ahead", jamais "*Go to straight*".',
        de: 'Sagen Sie "Go straight ahead".'
      }
    }
  ],

  // SECTION 11: Realistic Mini Dialogues
  dialogues: [
    {
      id: 'd_u02_l20_asking_directions_street',
      title: 'Asking for Directions to the Central Library',
      context: 'Maya is looking for the central public library and asks a friendly local pedestrian for directions.',
      characters: [
        { id: 'char_maya', name: 'Maya', role: 'Visitor' },
        { id: 'char_local', name: 'Local', role: 'Pedestrian' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_maya',
          speakerName: 'Maya',
          text: 'Excuse me! I am lost. How do I get to the central public library, please?',
          translationsByLang: { hi: 'माफ़ कीजिए! मैं रास्ता भटक गई हूँ। मैं केंद्रीय पुस्तकालय कैसे पहुँचूँ, कृपया?', es: '¡Disculpe! Me he perdido. ¿Cómo llego a la biblioteca pública central, por favor?' },
          audioText: 'Excuse me! I am lost. How do I get to the central public library, please?',
          audioId: 'en_a1_u02_l20_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_local',
          speakerName: 'Local',
          text: 'Don\'t worry, it\'s not far from here! Go straight ahead down this street for two blocks.',
          translationsByLang: { hi: 'चिंता न करें, यह यहाँ से ज्यादा दूर नहीं है! इस सड़क पर दो ब्लॉक सीधे आगे बढ़ें।', es: '¡No se preocupe, no está lejos de aquí! Siga todo recto por esta calle durante dos manzanas.' },
          audioText: 'Don\'t worry, it\'s not far from here! Go straight ahead down this street for two blocks.',
          audioId: 'en_a1_u02_l20_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_maya',
          speakerName: 'Maya',
          text: 'Okay, two blocks straight ahead. And after that?',
          translationsByLang: { hi: 'ठीक है, दो ब्लॉक सीधे आगे। और उसके बाद?', es: 'De acuerdo, dos manzanas recto. ¿Y después de eso?' },
          audioText: 'Okay, two blocks straight ahead. And after that?',
          audioId: 'en_a1_u02_l20_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_local',
          speakerName: 'Local',
          text: 'Turn right at the traffic lights, walk past the post office, and the library is on your left.',
          translationsByLang: { hi: 'ट्रैफिक लाइट पर दाईं ओर मुड़ें, डाकघर के आगे से निकलें, और पुस्तकालय आपके बाईं ओर होगा।', es: 'Gire a la derecha en el semáforo, pase por delante de correos y la biblioteca estará a su izquierda.' },
          audioText: 'Turn right at the traffic lights, walk past the post office, and the library is on your left.',
          audioId: 'en_a1_u02_l20_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_maya',
          speakerName: 'Maya',
          text: 'That is very clear! Thank you so much for your help.',
          translationsByLang: { hi: 'यह बहुत स्पष्ट है! आपकी मदद के लिए बहुत-बहुत धन्यवाद।', es: '¡Ha sido muy claro! Muchísimas gracias por su ayuda.' },
          audioText: 'That is very clear! Thank you so much for your help.',
          audioId: 'en_a1_u02_l20_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l20_p1',
      lessonId: 'lesson_a1_2_20',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct imperative form for giving directions:',
      sourceSentence: '___ left at the crossroads.',
      options: [
        { id: 'o1', text: 'Turn', isCorrect: true },
        { id: 'o2', text: 'Turning', isCorrect: false },
        { id: 'o3', text: 'You are turn', isCorrect: false }
      ],
      explanation: 'Use base verb "Turn" for imperative directions.'
    },
    {
      id: 'ex_u02_l20_p2',
      lessonId: 'lesson_a1_2_20',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Complete the direction formula:',
      sourceSentence: 'Go ___ ahead for three blocks.',
      options: [
        { id: 'o1', text: 'straight', isCorrect: true },
        { id: 'o2', text: 'to straight', isCorrect: false },
        { id: 'o3', text: 'straighting', isCorrect: false }
      ],
      explanation: 'Use "Go straight ahead".'
    },
    {
      id: 'ex_u02_l20_p3',
      explanation: 'Imperative sentences (giving commands or directions) use the base verb: \'Turn right\', \'cross\'. \'At the traffic lights\' is a place phrase.',
      lessonId: 'lesson_a1_2_20',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the street direction sentence:',
      targetSentence: 'Turn right at the traffic lights and cross the bridge',
      wordBank: ['Turn', 'right', 'at', 'the', 'traffic', 'lights', 'and', 'cross', 'the', 'bridge', 'is']
    },
    {
      id: 'ex_u02_l20_p4',
      lessonId: 'lesson_a1_2_20',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the directions:',
      audioText: 'Walk past the supermarket and turn left at the corner',
      options: [
        { id: 'o1', text: 'Walk past the supermarket and turn left at the corner', isCorrect: true },
        { id: 'o2', text: 'Walk inside the supermarket and buy two bottles', isCorrect: false },
        { id: 'o3', text: 'Turn right at the hospital and cross the street', isCorrect: false }
      ],
      explanation: 'The speaker says "Walk past the supermarket and turn left at the corner".'
    },
    {
      id: 'ex_u02_l20_p5',
      explanation: '\'How do I get to...?\' is a common direction question. \'Excuse me\' is a polite opening.',
      lessonId: 'lesson_a1_2_20',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe the direction:',
      audioText: 'Excuse me how do I get to the museum',
      targetSentence: 'Excuse me how do I get to the museum'
    },
    {
      id: 'ex_u02_l20_p6',
      explanation: '\'Where is...?\' asks for a location. \'The nearest pharmacy\' is singular, so \'is\' is used. \'Excuse me\' and \'please\' are polite phrases.',
      lessonId: 'lesson_a1_2_20',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Build the polite question asking for directions:',
      targetSentence: 'Excuse me where is the nearest pharmacy please',
      wordBank: ['Excuse', 'me', 'where', 'is', 'the', 'nearest', 'pharmacy', 'please', 'are', 'do']
    },
    {
      id: 'ex_u02_l20_p7',
      explanation: 'The imperative uses the base verb: \'Take the second turning\'. \'You can\'t miss it\' is an informal phrase meaning it is easy to find.',
      lessonId: 'lesson_a1_2_20',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this sentence into your microphone:',
      targetSentence: 'Take the second turning on your right, you can\'t miss it!',
      audioText: 'Take the second turning on your right, you can\'t miss it!'
    },
    {
      id: 'ex_u02_l20_p8',
      explanation: '\'Turn left\' and \'go straight ahead\' are both imperatives. \'Straight ahead\' means forward. Hindi: \'ट्रैफिक लाइट पर बाएं मुड़ें और सीधे आगे जाएं।\'',
      lessonId: 'lesson_a1_2_20',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'ट्रैफिक लाइट पर बाएं मुड़ें और सीधे आगे बढ़ें।',
      sourceTranslations: {
        hi: 'ट्रैफिक लाइट पर बाएं मुड़ें और सीधे आगे बढ़ें।',
        es: 'Gira a la izquierda en el semáforo y sigue todo recto.'
      },
      targetSentence: 'Turn left at the traffic lights and go straight ahead',
      wordBank: ['Turn', 'left', 'at', 'the', 'traffic', 'lights', 'and', 'go', 'straight', 'ahead', 'to']
    },
    {
      id: 'ex_u02_l20_p9',
      lessonId: 'lesson_a1_2_20',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Unit 1 City Places & Directions):',
      sourceSentence: 'The ___ is on your right, opposite the Italian restaurant.',
      options: [
        { id: 'o1', text: 'hospital', isCorrect: true },
        { id: 'o2', text: 'comfortable', isCorrect: false },
        { id: 'o3', text: 'dishes', isCorrect: false }
      ],
      explanation: '"hospital" is a city place noun.'
    },
    {
      id: 'ex_u02_l20_p10',
      lessonId: 'lesson_a1_2_20',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the direction error:',
      sourceSentence: 'You are turn left and go to straight.',
      options: [
        { id: 'o1', text: 'Turn left and go straight ahead.', isCorrect: true },
        { id: 'o2', text: 'Turning left and going straight.', isCorrect: false },
        { id: 'o3', text: 'You turn to left and go straight.', isCorrect: false }
      ],
      explanation: 'Use clean imperative base forms: "Turn left and go straight ahead".'
    },
    {
      id: 'ex_u02_l20_p11',
      lessonId: 'lesson_a1_2_20',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Select the best response:',
      sourceSentence: 'Tourist: "Is the cathedral far from here?" -> You: "___"',
      options: [
        { id: 'o1', text: 'No, it\'s only a five-minute walk on foot.', isCorrect: true },
        { id: 'o2', text: 'Yes, it costs forty dollars.', isCorrect: false },
        { id: 'o3', text: 'I have three bedrooms.', isCorrect: false }
      ],
      explanation: 'Directly answers proximity question.'
    },
    {
      id: 'ex_u02_l20_p12',
      lessonId: 'lesson_a1_2_20',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which word refers to a junction where traffic moves around a central island?',
      sourceSentence: 'Vocabulary check:',
      options: [
        { id: 'o1', text: 'roundabout', isCorrect: true },
        { id: 'o2', text: 'pillow', isCorrect: false },
        { id: 'o3', text: 'wardrobe', isCorrect: false }
      ],
      explanation: '"roundabout" is a circular road junction.'
    },
    {
      id: 'ex_u02_l20_p13',
      lessonId: 'lesson_a1_2_20',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the correct phrase: "The bank is on the ___ of Main Street and Oak Avenue."',
      sourceSentence: 'Urban location:',
      options: [
        { id: 'o1', text: 'corner', isCorrect: true },
        { id: 'o2', text: 'delay', isCorrect: false },
        { id: 'o3', text: 'ticket', isCorrect: false }
      ],
      explanation: '"on the corner of" specifies the intersection point of two streets.'
    },
    {
      id: 'ex_u02_l20_p14',
      explanation: '\'Take\' is the imperative (base verb). \'The second street on your left\' gives the direction.',
      lessonId: 'lesson_a1_2_20',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the sentence:',
      targetSentence: 'Take the second street on your left',
      wordBank: ['Take', 'the', 'second', 'street', 'on', 'your', 'left', 'turn', 'is']
    },
    {
      id: 'ex_u02_l20_p15',
      explanation: '\'Cross\' is the imperative. \'At the pedestrian crossing\' is a place phrase.',
      lessonId: 'lesson_a1_2_20',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this sentence clearly into your microphone:',
      targetSentence: 'Cross the road at the pedestrian crossing.',
      audioText: 'Cross the road at the pedestrian crossing.'
    }
  ],

  // SECTION 16: Review Exercises (4 items)
  reviewExercises: [
    {
      id: 'ex_u02_l20_rev1',
      lessonId: 'lesson_a1_2_20',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      sourceSentence: 'Grammar review:',
      options: [
        { id: 'o1', text: 'Go straight ahead and turn right at the bank.', isCorrect: true },
        { id: 'o2', text: 'Go to straight and turn to right at the bank.', isCorrect: false },
        { id: 'o3', text: 'Going straight and turning right at the bank.', isCorrect: false }
      ],
      explanation: 'Use standard base imperatives.'
    },
    {
      id: 'ex_u02_l20_rev2',
      lessonId: 'lesson_a1_2_20',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Complete the direction:',
      sourceSentence: 'Walk ___ the supermarket and the library is next door.',
      options: [
        { id: 'o1', text: 'past', isCorrect: true },
        { id: 'o2', text: 'passed', isCorrect: false },
        { id: 'o3', text: 'pass to', isCorrect: false }
      ],
      explanation: 'Use "Walk past [place]".'
    },
    {
      id: 'ex_u02_l20_rev3',
      explanation: '\'Across from\' means on the opposite side. \'The post office\' is singular, so \'is\' is used.',
      lessonId: 'lesson_a1_2_20',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Build the sentence:',
      targetSentence: 'The post office is across from the petrol station',
      wordBank: ['The', 'post', 'office', 'is', 'across', 'from', 'the', 'petrol', 'station', 'are']
    },
    {
      id: 'ex_u02_l20_rev4',
      explanation: '\'On your right\' is the position. \'You cannot miss it\' means it is easy to find. Hindi: \'यह आपके दाईं ओर है। आप इसे आसानी से पहचान लेंगे!\'',
      lessonId: 'lesson_a1_2_20',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'यह आपके दाईं ओर है। आप इसे आसानी से पहचान लेंगे!',
      sourceTranslations: { hi: 'यह आपके दाईं ओर है। आप इसे आसानी से पहचान लेंगे!', es: 'Está a tu derecha. ¡No tiene pérdida!' },
      targetSentence: 'It is on your right you cannot miss it',
      wordBank: ['It', 'is', 'on', 'your', 'right', 'you', 'cannot', 'miss', 'it', 'are']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l20_a1',
      lessonId: 'lesson_a1_2_20',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct imperative: "___ left at the crossroads."',
      sourceSentence: 'Navigation test:',
      options: [
        { id: 'o1', text: 'Turn', isCorrect: true },
        { id: 'o2', text: 'Turning', isCorrect: false },
        { id: 'o3', text: 'To turn', isCorrect: false },
        { id: 'o4', text: 'Turned', isCorrect: false }
      ],
      explanation: 'Imperative uses base verb "Turn".'
    },
    {
      id: 'ex_u02_l20_a2',
      lessonId: 'lesson_a1_2_20',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Select the missing word: "Go straight ___ for two blocks."',
      sourceSentence: 'Direction test:',
      options: [
        { id: 'o1', text: 'ahead', isCorrect: true },
        { id: 'o2', text: 'to', isCorrect: false },
        { id: 'o3', text: 'at', isCorrect: false },
        { id: 'o4', text: 'in', isCorrect: false }
      ],
      explanation: '"Go straight ahead".'
    },
    {
      id: 'ex_u02_l20_a3',
      explanation: '\'Walk past\' and \'cross\' are imperatives (base verbs). \'The museum\' is the landmark.',
      lessonId: 'lesson_a1_2_20',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the direction:',
      targetSentence: 'Walk past the museum and cross the street',
      wordBank: ['Walk', 'past', 'the', 'museum', 'and', 'cross', 'the', 'street', 'is', 'to']
    },
    {
      id: 'ex_u02_l20_a4',
      lessonId: 'lesson_a1_2_20',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the error:',
      sourceSentence: 'Turn to right at the traffic lights.',
      options: [
        { id: 'o1', text: 'Turn right at the traffic lights.', isCorrect: true },
        { id: 'o2', text: 'Turning right at the traffic lights.', isCorrect: false },
        { id: 'o3', text: 'Turn for right at the traffic lights.', isCorrect: false }
      ],
      explanation: 'Say "Turn right", not "Turn to right".'
    },
    {
      id: 'ex_u02_l20_a5',
      lessonId: 'lesson_a1_2_20',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the speaker instructs:',
      audioText: 'Go straight ahead for two blocks then take the second turning on your right',
      options: [
        { id: 'o1', text: 'Go straight ahead for two blocks then take the second turning on your right', isCorrect: true },
        { id: 'o2', text: 'Turn left at the station and walk two hundred meters', isCorrect: false },
        { id: 'o3', text: 'Cross the bridge and take the first turning on your left', isCorrect: false }
      ],
      explanation: 'The speaker gives two-block instructions followed by a right turn.'
    },
    {
      id: 'ex_u02_l20_a6',
      explanation: '\'The bank\' is singular, so \'is\' is used. \'On your left\' and \'opposite the park\' are place phrases.',
      lessonId: 'lesson_a1_2_20',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe accurately:',
      audioText: 'The bank is on your left opposite the park',
      targetSentence: 'The bank is on your left opposite the park'
    },
    {
      id: 'ex_u02_l20_a7',
      lessonId: 'lesson_a1_2_20',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best response:',
      sourceSentence: 'Tourist: "Excuse me, where is the subway station?" -> You: "___"',
      options: [
        { id: 'o1', text: 'Go straight ahead for one block. It is on the corner on your right.', isCorrect: true },
        { id: 'o2', text: 'I wake up at six thirty.', isCorrect: false },
        { id: 'o3', text: 'It has two pillows.', isCorrect: false }
      ],
      explanation: 'Gives direct location and directions to the subway station.'
    },
    {
      id: 'ex_u02_l20_a8',
      explanation: '\'Cross\' and \'take\' are imperatives. \'The second turning on your left\' gives the direction. Hindi: \'पुल पार करें और बाईं ओर दूसरा मोड़ लें।\'',
      lessonId: 'lesson_a1_2_20',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'पुल पार करें और दूसरा मोड़ बाएं लें।',
      sourceTranslations: { hi: 'पुल पार करें और दूसरा मोड़ बाएं लें।', es: 'Cruza el puente y toma la segunda calle a la izquierda.' },
      targetSentence: 'Cross the bridge and take the second turning on your left',
      wordBank: ['Cross', 'the', 'bridge', 'and', 'take', 'the', 'second', 'turning', 'on', 'your', 'left', 'is']
    },
    {
      id: 'ex_u02_l20_a9',
      lessonId: 'lesson_a1_2_20',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which noun refers to the painted stripes on the road where pedestrians cross safely?',
      sourceSentence: 'Road safety check:',
      options: [
        { id: 'o1', text: 'pedestrian crossing / crosswalk', isCorrect: true },
        { id: 'o2', text: 'roundabout', isCorrect: false },
        { id: 'o3', text: 'armchair', isCorrect: false },
        { id: 'o4', text: 'microwave', isCorrect: false }
      ],
      explanation: '"pedestrian crossing" is where pedestrians cross.'
    },
    {
      id: 'ex_u02_l20_a10',
      explanation: '\'How do I get to...?\' is a direction question. \'Excuse me\' is a polite opening.',
      lessonId: 'lesson_a1_2_20',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final sentence:',
      targetSentence: 'Excuse me how do I get to the central library',
      wordBank: ['Excuse', 'me', 'how', 'do', 'I', 'get', 'to', 'the', 'central', 'library', 'are']
    }
  ]
};
