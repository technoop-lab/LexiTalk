import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_16_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_16',
  unitId: 'unit_a1_2',
  title: 'Home & Rooms in the House (There is / There are)',
  cefr: 'A1',
  icon: '🏠',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Describing Houses, Rooms and Layouts with "There is / There are"',
    description: 'Master the existential structures "There is" (singular) and "There are" (plural), along with affirmative, negative, and question forms. Learn core vocabulary for rooms, living spaces, household areas, and prepositions of place (in, on, under, between) in realistic adult residential contexts.',
    descriptionsByLang: {
      hi: 'घर, कमरों और लेआउट का वर्णन करने के लिए "There is" (एकवचन) और "There are" (बहुवचन) का प्रयोग सीखें। सकारात्मक, नकारात्मक और प्रश्नवाचक वाक्यों के साथ कमरों और बुनियादी प्रीपोजिशन्स (in, on, under, between) का अभ्यास करें।',
      es: 'Aprende a describir casas, habitaciones y distribuciones usando "There is" (singular) y "There are" (plural), con formas afirmativas, negativas e interrogativas, junto con vocabulario del hogar y preposiciones básicas de lugar.',
      fr: 'Apprenez à décrire les maisons, les pièces et les agencements avec "There is" et "There are".',
      de: 'Lernen Sie, Häuser, Räume und Grundrisse mit "There is" und "There are" zu beschreiben.',
      pt: 'Aprenda a descrever casas, cômodos e layouts usando "There is" e "There are".',
      zh: '掌握使用 There is（单数）和 There are（复数）描述房屋、房间布局及方位介词（in, on, under, between）的用法。',
      ar: 'تعلم وصف المنازل والغرف باستخدام There is للمفرد و There are للجمع.',
      ja: '家や部屋のレイアウトを There is（単数）/ There are（複数）と場所の前置詞を用いて表現する方法を学びます。',
      ru: 'Научитесь описывать дома, комнаты и планировку с помощью конструкций There is / There are.'
    },
    canDoStatements: [
      'Describe an apartment or house room by room using "There is a..." and "There are two/three..."',
      'Ask about room features and amenities: "Is there a balcony?", "Are there two bathrooms?"',
      'State what a home lacks: "There isn\'t a garden", "There aren\'t any elevators"',
      'Locate rooms within a building: "The bedroom is upstairs", "The kitchen is on the ground floor"',
      'Apply correct singular/plural agreement: "There is a table" vs "There are three chairs"'
    ],
    canDoByLang: {
      hi: [
        'घर और कमरों का वर्णन "There is..." और "There are..." से करना',
        'घर की सुविधाओं के बारे में प्रश्न पूछना: "Is there a balcony?"',
        'कमियों को बताना: "There isn\'t a garden"',
        'कमरों की स्थिति बताना: "The kitchen is downstairs"'
      ],
      es: [
        'Describir una casa o piso habitación por habitación',
        'Preguntar por comodidades: "Is there a balcony?"',
        'Expresar lo que falta: "There isn\'t a garage"'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l16_house',
      word: 'house',
      phonetic: '/haʊs/',
      meaning: 'A building for human habitation, especially one that is lived in by a family',
      translationsByLang: { hi: 'मकान / घर', es: 'casa', fr: 'maison', de: 'Haus', pt: 'casa', zh: '房子 / 房屋', ar: 'منزل / بيت', ja: '家 / 一軒家', ru: 'дом' },
      exampleSentence: 'They live in a large house with a garden.',
      exampleTranslationByLang: { hi: 'वे बगीचे वाले एक बड़े घर में रहते हैं।', es: 'Ellos viven en una casa grande con jardín.' },
      audioText: 'house',
      audioId: 'en_a1_u02_l16_v_house',
      slowAudioId: 'en_a1_u02_l16_v_house_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏡',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_apartment',
      word: 'apartment / flat',
      phonetic: '/əˈpɑːrt.mənt/',
      meaning: 'A set of rooms for living in, especially on one floor of a larger building',
      translationsByLang: { hi: 'अपार्टमेंट / फ्लैट', es: 'apartamento / piso', fr: 'appartement', de: 'Wohnung', pt: 'apartamento', zh: '公寓', ar: 'شقة', ja: 'アパート / マンション', ru: 'квартира' },
      exampleSentence: 'My apartment is on the third floor.',
      exampleTranslationByLang: { hi: 'मेरा अपार्टमेंट तीसरी मंजिल पर है।', es: 'Mi apartamento está en el tercer piso.' },
      audioText: 'apartment and flat',
      audioId: 'en_a1_u02_l16_v_apartment',
      slowAudioId: 'en_a1_u02_l16_v_apartment_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_living_room',
      word: 'living room',
      phonetic: '/ˈlɪv.ɪŋ ˌruːm/',
      meaning: 'A room in a home for general and informal everyday use',
      translationsByLang: { hi: 'बैठक / लिविंग रूम', es: 'sala de estar / salón', fr: 'salon / salle de séjour', de: 'Wohnzimmer', pt: 'sala de estar', zh: '客厅 / 起居室', ar: 'غرفة المعيشة', ja: 'リビング / 居間', ru: 'гостиная' },
      exampleSentence: 'There is a comfortable sofa in the living room.',
      exampleTranslationByLang: { hi: 'लिविंग रूम में एक आरामदायक सोफा है।', es: 'Hay un sofá cómodo en el salón.' },
      audioText: 'living room',
      audioId: 'en_a1_u02_l16_v_living_room',
      slowAudioId: 'en_a1_u02_l16_v_living_room_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛋️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_kitchen',
      word: 'kitchen',
      phonetic: '/ˈkɪtʃ.ən/',
      meaning: 'A room or area where food is prepared and cooked',
      translationsByLang: { hi: 'रसोईघर / किचन', es: 'cocina', fr: 'cuisine', de: 'Küche', pt: 'cozinha', zh: '厨房', ar: 'مطبخ', ja: '台所 / キッチン', ru: 'кухня' },
      exampleSentence: 'There is a modern fridge in our kitchen.',
      exampleTranslationByLang: { hi: 'हमारी रसोई में एक आधुनिक फ्रिज है।', es: 'Hay una nevera moderna en nuestra cocina.' },
      audioText: 'kitchen',
      audioId: 'en_a1_u02_l16_v_kitchen',
      slowAudioId: 'en_a1_u02_l16_v_kitchen_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_bedroom',
      word: 'bedroom',
      phonetic: '/ˈbed.ruːm/',
      meaning: 'A room used for sleeping in',
      translationsByLang: { hi: 'शयनकक्ष / बेडरूम', es: 'dormitorio / habitación', fr: 'chambre à coucher', de: 'Schlafzimmer', pt: 'quarto', zh: '卧室', ar: 'غرفة النوم', ja: '寝室 / ベッドルーム', ru: 'спальня' },
      exampleSentence: 'The apartment has two quiet bedrooms.',
      exampleTranslationByLang: { hi: 'अपार्टमेंट में दो शांत बेडरूम हैं।', es: 'El apartamento tiene dos dormitorios tranquilos.' },
      audioText: 'bedroom',
      audioId: 'en_a1_u02_l16_v_bedroom',
      slowAudioId: 'en_a1_u02_l16_v_bedroom_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛏️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_bathroom',
      word: 'bathroom',
      phonetic: '/ˈbæθ.ruːm/',
      meaning: 'A room containing a toilet, sink, and often a bathtub or shower',
      translationsByLang: { hi: 'स्नानघर / बाथरूम', es: 'baño / cuarto de baño', fr: 'salle de bain', de: 'Badezimmer', pt: 'banheiro', zh: '浴室 / 卫生间', ar: 'حمام', ja: '浴室 / トイレ', ru: 'ванная комната' },
      exampleSentence: 'Is there a shower in the bathroom?',
      exampleTranslationByLang: { hi: 'क्या बाथरूम में शावर है?', es: '¿Hay ducha en el baño?' },
      audioText: 'bathroom',
      audioId: 'en_a1_u02_l16_v_bathroom',
      slowAudioId: 'en_a1_u02_l16_v_bathroom_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚿',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_dining_room',
      word: 'dining room',
      phonetic: '/ˈdaɪ.nɪŋ ˌruːm/',
      meaning: 'A room in a home where meals are eaten',
      translationsByLang: { hi: 'भोजन कक्ष / डाइनिंग रूम', es: 'comedor', fr: 'salle à manger', de: 'Esszimmer', pt: 'sala de jantar', zh: '饭厅 / 餐厅', ar: 'غرفة الطعام', ja: 'ダイニングルーム / 食堂', ru: 'столовая' },
      exampleSentence: 'There is a wooden table in the dining room.',
      exampleTranslationByLang: { hi: 'डाइनिंग रूम में लकड़ी की एक मेज है।', es: 'Hay una mesa de madera en el comedor.' },
      audioText: 'dining room',
      audioId: 'en_a1_u02_l16_v_dining_room',
      slowAudioId: 'en_a1_u02_l16_v_dining_room_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍽️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_hallway',
      word: 'hallway / hall',
      phonetic: '/ˈhɑːl.weɪ/',
      meaning: 'An area or corridor inside the entrance of a building or connecting rooms',
      translationsByLang: { hi: 'गलियारा / हॉलवे', es: 'pasillo / vestíbulo', fr: 'couloir / hall', de: 'Flur / Gang', pt: 'corredor / hall', zh: '走廊 / 门厅', ar: 'ردهة / ممر', ja: '廊下 / 玄関ホール', ru: 'прихожая / коридор' },
      exampleSentence: 'Leave your shoes in the hallway, please.',
      exampleTranslationByLang: { hi: 'कृपया अपने जूते गलियारे में रखें।', es: 'Deja tus zapatos en el pasillo, por favor.' },
      audioText: 'hallway',
      audioId: 'en_a1_u02_l16_v_hallway',
      slowAudioId: 'en_a1_u02_l16_v_hallway_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_garden',
      word: 'garden / yard',
      phonetic: '/ˈɡɑːr.dən/',
      meaning: 'An outdoor piece of ground with grass, plants, and trees adjoining a house',
      translationsByLang: { hi: 'बगीचा / बाग', es: 'jardín / patio', fr: 'jardin', de: 'Garten', pt: 'jardim / quintal', zh: '花园 / 院子', ar: 'حديقة', ja: '庭 / ガーデン', ru: 'сад / двор' },
      exampleSentence: 'There are many green plants in their garden.',
      exampleTranslationByLang: { hi: 'उनके बगीचे में कई हरे पौधे हैं।', es: 'Hay muchas plantas verdes en su jardín.' },
      audioText: 'garden',
      audioId: 'en_a1_u02_l16_v_garden',
      slowAudioId: 'en_a1_u02_l16_v_garden_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_balcony',
      word: 'balcony',
      phonetic: '/ˈbæl.kə.ni/',
      meaning: 'A platform enclosed by a wall or bars on the outside of an upper-floor building',
      translationsByLang: { hi: 'बालकनी / छज्जा', es: 'balcón', fr: 'balcon', de: 'Balkon', pt: 'varanda / sacada', zh: '阳台', ar: 'شرفة', ja: 'バルコニー / ベランダ', ru: 'балкон' },
      exampleSentence: 'There is a lovely sunny balcony with a city view.',
      exampleTranslationByLang: { hi: 'शहर के दृश्य वाली एक सुंदर धूपदार बालकनी है।', es: 'Hay un balcón soleado y encantador con vistas a la ciudad.' },
      audioText: 'balcony',
      audioId: 'en_a1_u02_l16_v_balcony',
      slowAudioId: 'en_a1_u02_l16_v_balcony_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌇',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_garage',
      word: 'garage',
      phonetic: '/ɡəˈrɑːʒ/',
      meaning: 'A building or shed for keeping a motor vehicle',
      translationsByLang: { hi: 'गैराज / गाड़ीघर', es: 'garaje / cochera', fr: 'garage', de: 'Garage', pt: 'garagem', zh: '车库', ar: 'مرآب / كراج', ja: 'ガレージ / 車庫', ru: 'гараж' },
      exampleSentence: 'There is space for one car in the garage.',
      exampleTranslationByLang: { hi: 'गैराज में एक कार के लिए जगह है।', es: 'Hay espacio para un coche en el garaje.' },
      audioText: 'garage',
      audioId: 'en_a1_u02_l16_v_garage',
      slowAudioId: 'en_a1_u02_l16_v_garage_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_upstairs',
      word: 'upstairs',
      phonetic: '/ʌpˈsterz/',
      meaning: 'On or to a higher floor of a building',
      translationsByLang: { hi: 'ऊपर की मंजिल पर', es: 'arriba / en el piso de arriba', fr: 'à l\'étage / en haut', de: 'oben / im Obergeschoss', pt: 'no andar de cima', zh: '楼上', ar: 'في الطابق العلوي', ja: '上の階に / 2階に', ru: 'наверху / на верхнем этаже' },
      exampleSentence: 'The two bedrooms are upstairs.',
      exampleTranslationByLang: { hi: 'दोनों बेडरूम ऊपर की मंजिल पर हैं।', es: 'Los dos dormitorios están arriba.' },
      audioText: 'upstairs',
      audioId: 'en_a1_u02_l16_v_upstairs',
      slowAudioId: 'en_a1_u02_l16_v_upstairs_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🪜',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_downstairs',
      word: 'downstairs',
      phonetic: '/ˌdaʊnˈsterz/',
      meaning: 'On or to a lower floor of a building',
      translationsByLang: { hi: 'नीचे की मंजिल पर', es: 'abajo / en la planta baja', fr: 'en bas / au rez-de-chaussée', de: 'unten / im Erdgeschoss', pt: 'no andar de baixo', zh: '楼下', ar: 'في الطابق السفلي', ja: '下の階に / 1階に', ru: 'внизу / на нижнем этаже' },
      exampleSentence: 'The kitchen and living room are downstairs.',
      exampleTranslationByLang: { hi: 'रसोई और लिविंग रूम नीचे की मंजिल पर हैं।', es: 'La cocina y el salón están abajo.' },
      audioText: 'downstairs',
      audioId: 'en_a1_u02_l16_v_downstairs',
      slowAudioId: 'en_a1_u02_l16_v_downstairs_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⬇️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_floor',
      word: 'floor',
      phonetic: '/flɔːr/',
      meaning: 'The lower surface of a room or a particular level in a building',
      translationsByLang: { hi: 'फर्श / मंजिल', es: 'suelo / piso / planta', fr: 'sol / étage', de: 'Boden / Stockwerk', pt: 'chão / andar', zh: '地板 / 楼层', ar: 'أرضية / طابق', ja: '床 / 階', ru: 'пол / этаж' },
      exampleSentence: 'We live on the second floor.',
      exampleTranslationByLang: { hi: 'हम दूसरी मंजिल पर रहते हैं।', es: 'Vivimos en la segunda planta.' },
      audioText: 'floor',
      audioId: 'en_a1_u02_l16_v_floor',
      slowAudioId: 'en_a1_u02_l16_v_floor_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_door',
      word: 'door',
      phonetic: '/dɔːr/',
      meaning: 'A hinged, sliding, or revolving barrier for closing the entrance to a room or building',
      translationsByLang: { hi: 'दरवाज़ा', es: 'puerta', fr: 'porte', de: 'Tür', pt: 'porta', zh: '门', ar: 'باب', ja: 'ドア / 扉', ru: 'дверь' },
      exampleSentence: 'Please close the front door.',
      exampleTranslationByLang: { hi: 'कृपया मुख्य दरवाजा बंद करें।', es: 'Por favor, cierra la puerta principal.' },
      audioText: 'door',
      audioId: 'en_a1_u02_l16_v_door',
      slowAudioId: 'en_a1_u02_l16_v_door_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_window',
      word: 'window',
      phonetic: '/ˈwɪn.doʊ/',
      meaning: 'An opening in a wall fitted with glass in a frame to admit light or air',
      translationsByLang: { hi: 'खिड़की', es: 'ventana', fr: 'fenêtre', de: 'Fenster', pt: 'janela', zh: '窗户', ar: 'نافذة / شباك', ja: '窓', ru: 'окно' },
      exampleSentence: 'There are two large windows in the bedroom.',
      exampleTranslationByLang: { hi: 'बेडरूम में दो बड़ी खिड़कियां हैं।', es: 'Hay dos ventanas grandes en el dormitorio.' },
      audioText: 'window',
      audioId: 'en_a1_u02_l16_v_window',
      slowAudioId: 'en_a1_u02_l16_v_window_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🪟',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_sofa',
      word: 'sofa / couch',
      phonetic: '/ˈsoʊ.fə/',
      meaning: 'A long comfortable seat with a back and arms for two or more people',
      translationsByLang: { hi: 'सोफा', es: 'sofá', fr: 'canapé / sofa', de: 'Sofa / Couch', pt: 'sofá', zh: '沙发', ar: 'أريكة / كنب', ja: 'ソファ', ru: 'диван' },
      exampleSentence: 'There is a blue sofa in the living room.',
      exampleTranslationByLang: { hi: 'लिविंग रूम में एक नीला सोफा है।', es: 'Hay un sofá azul en el salón.' },
      audioText: 'sofa and couch',
      audioId: 'en_a1_u02_l16_v_sofa',
      slowAudioId: 'en_a1_u02_l16_v_sofa_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛋️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_bed',
      word: 'bed',
      phonetic: '/bed/',
      meaning: 'A piece of furniture for sleeping or resting on',
      translationsByLang: { hi: 'बिस्तर / पलंग', es: 'cama', fr: 'lit', de: 'Bett', pt: 'cama', zh: '床', ar: 'سرير', ja: 'ベッド', ru: 'кровать' },
      exampleSentence: 'There is a comfortable double bed in the room.',
      exampleTranslationByLang: { hi: 'कमरे में एक आरामदायक डबल बेड है।', es: 'Hay una cómoda cama doble en la habitación.' },
      audioText: 'bed',
      audioId: 'en_a1_u02_l16_v_bed',
      slowAudioId: 'en_a1_u02_l16_v_bed_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛏️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_table',
      word: 'table',
      phonetic: '/ˈteɪ.bəl/',
      meaning: 'A piece of furniture with a flat top and one or more legs',
      translationsByLang: { hi: 'मेज / टेबल', es: 'mesa', fr: 'table', de: 'Tisch', pt: 'mesa', zh: '桌子', ar: 'طاولة', ja: '机 / テーブル', ru: 'стол' },
      exampleSentence: 'There are four chairs around the dining table.',
      exampleTranslationByLang: { hi: 'डाइनिंग टेबल के चारों ओर चार कुर्सियाँ हैं।', es: 'Hay cuatro sillas alrededor de la mesa del comedor.' },
      audioText: 'table',
      audioId: 'en_a1_u02_l16_v_table',
      slowAudioId: 'en_a1_u02_l16_v_table_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🪑',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_fridge',
      word: 'fridge / refrigerator',
      phonetic: '/frɪdʒ/',
      meaning: 'An appliance for keeping food and drinks cold',
      translationsByLang: { hi: 'फ्रिज / रेफ्रिजरेटर', es: 'nevera / frigorífico / refrigerador', fr: 'frigo / réfrigérateur', de: 'Kühlschrank', pt: 'geladeira / frigorífico', zh: '冰箱', ar: 'ثلاجة', ja: '冷蔵庫', ru: 'холодильник' },
      exampleSentence: 'There is fresh milk in the fridge.',
      exampleTranslationByLang: { hi: 'फ्रिज में ताजा दूध है।', es: 'Hay leche fresca en la nevera.' },
      audioText: 'fridge',
      audioId: 'en_a1_u02_l16_v_fridge',
      slowAudioId: 'en_a1_u02_l16_v_fridge_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧊',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_comfortable',
      word: 'comfortable',
      phonetic: '/ˈkʌm.fɚ.t̬ə.bəl/',
      meaning: 'Providing physical ease and relaxation',
      translationsByLang: { hi: 'आरामदायक / सुखद', es: 'cómodo / confortable', fr: 'confortable', de: 'bequem / komfortabel', pt: 'confortável', zh: '舒服的 / 舒适的', ar: 'مريح', ja: '快適な / 心地よい', ru: 'удобный / комфортный' },
      exampleSentence: 'The new armchair is very comfortable.',
      exampleTranslationByLang: { hi: 'नया आर्मचेयर बहुत आरामदायक है।', es: 'El nuevo sillón es muy cómodo.' },
      audioText: 'comfortable',
      audioId: 'en_a1_u02_l16_v_comfortable',
      slowAudioId: 'en_a1_u02_l16_v_comfortable_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '✨',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_spacious',
      word: 'spacious',
      phonetic: '/ˈspeɪ.ʃəs/',
      meaning: 'Having a lot of space or room',
      translationsByLang: { hi: 'विशाल / खुला हुआ', es: 'espacioso / amplio', fr: 'spacieux', de: 'geräumig', pt: 'espaçoso / amplo', zh: '宽敞的', ar: 'واسع / فسيح', ja: '広々とした', ru: 'просторный' },
      exampleSentence: 'Our living room is very spacious and bright.',
      exampleTranslationByLang: { hi: 'हमारा लिविंग रूम बहुत विशाल और उज्ज्वल है।', es: 'Nuestro salón es muy espacioso y luminoso.' },
      audioText: 'spacious',
      audioId: 'en_a1_u02_l16_v_spacious',
      slowAudioId: 'en_a1_u02_l16_v_spacious_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📐',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_bright',
      word: 'bright',
      phonetic: '/braɪt/',
      meaning: 'Full of natural light',
      translationsByLang: { hi: 'उज्ज्वल / रोशनीदार', es: 'luminoso / claro', fr: 'lumineux / clair', de: 'hell', pt: 'iluminado / claro', zh: '明亮的', ar: 'مشرق / مضيء', ja: '明るい', ru: 'светлый' },
      exampleSentence: 'The kitchen has big windows and is very bright.',
      exampleTranslationByLang: { hi: 'रसोई में बड़ी खिड़कियां हैं और वह बहुत रोशनीदार है।', es: 'La cocina tiene ventanas grandes y es muy luminosa.' },
      audioText: 'bright',
      audioId: 'en_a1_u02_l16_v_bright',
      slowAudioId: 'en_a1_u02_l16_v_bright_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '☀️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_quiet',
      word: 'quiet',
      phonetic: '/ˈkwaɪ.ət/',
      meaning: 'Making little or no noise; peaceful',
      translationsByLang: { hi: 'शांत / खामोश', es: 'tranquilo / silencioso', fr: 'calme / silencieux', de: 'ruhig / leise', pt: 'tranquilo / silencioso', zh: '安静的', ar: 'هادئ', ja: '静かな', ru: 'тихий / спокойный' },
      exampleSentence: 'This neighborhood is very quiet at night.',
      exampleTranslationByLang: { hi: 'यह इलाका रात में बहुत शांत रहता है।', es: 'Este vecindario es muy tranquilo por la noche.' },
      audioText: 'quiet',
      audioId: 'en_a1_u02_l16_v_quiet',
      slowAudioId: 'en_a1_u02_l16_v_quiet_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤫',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l16_between',
      word: 'between',
      phonetic: '/bɪˈtwiːn/',
      meaning: 'In the space separating two points, objects, or rooms',
      translationsByLang: { hi: 'के बीच में', es: 'entre', fr: 'entre', de: 'zwischen', pt: 'entre', zh: '在……之间', ar: 'بين', ja: '〜の間に', ru: 'между' },
      exampleSentence: 'The bathroom is between the two bedrooms.',
      exampleTranslationByLang: { hi: 'बाथरूम दोनों बेडरूम के बीच में है।', es: 'El baño está entre los dos dormitorios.' },
      audioText: 'between',
      audioId: 'en_a1_u02_l16_v_between',
      slowAudioId: 'en_a1_u02_l16_v_between_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '↔️',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_u02_l16_welcome_home',
      text: 'Welcome to my home!',
      meaning: 'Warm greeting when inviting someone inside your residence',
      translationsByLang: {
        hi: 'मेरे घर में आपका स्वागत है!',
        es: '¡Bienvenido a mi casa!',
        fr: 'Bienvenue chez moi !',
        de: 'Willkommen in meinem Zuhause!'
      },
      audioText: 'Welcome to my home!',
      audioId: 'en_a1_u02_l16_c_welcome_home',
      context: 'Hosting guests and social visits',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l16_make_yourself_at_home',
      text: 'Make yourself at home.',
      meaning: 'Polite invitation telling a guest to relax and feel comfortable',
      translationsByLang: {
        hi: 'इसे अपना ही घर समझें।',
        es: 'Siéntete como en casa / Estás en tu casa.',
        fr: 'Faites comme chez vous.',
        de: 'Fühlen Sie sich wie zu Hause.'
      },
      audioText: 'Make yourself at home.',
      audioId: 'en_a1_u02_l16_c_make_at_home',
      context: 'Welcoming friends and colleagues inside',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l16_where_is_bathroom',
      text: 'Where is the bathroom, please?',
      meaning: 'Essential polite inquiry to locate the restroom',
      translationsByLang: {
        hi: 'बाथरूम कहाँ है, कृपया?',
        es: '¿Dónde está el baño, por favor?',
        fr: 'Où sont les toilettes, s\'il vous plaît ?',
        de: 'Wo ist bitte das Badezimmer?'
      },
      audioText: 'Where is the bathroom, please?',
      audioId: 'en_a1_u02_l16_c_where_bathroom',
      context: 'Visiting any house, office, or restaurant',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l16_its_downstairs',
      text: 'It is down the hallway on the left.',
      meaning: 'Providing clear indoor spatial directions',
      translationsByLang: {
        hi: 'यह गलियारे में बाईं ओर है।',
        es: 'Está al final del pasillo a la izquierda.',
        fr: 'C\'est au bout du couloir à gauche.',
        de: 'Es ist den Flur runter auf der linken Seite.'
      },
      audioText: 'It is down the hallway on the left.',
      audioId: 'en_a1_u02_l16_c_down_hallway',
      context: 'Directing visitors around your house',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar Rules
  grammar: {
    patterns: [
      {
        id: 'g_there_is_there_are_affirmative_negative',
        title: 'There is / There are (Existential Statements)',
        rule: 'Use "There is" (or contraction "There\'s") before a singular noun. Use "There are" before plural nouns (never contracted in writing). For negatives, use "There isn\'t a..." (singular) and "There aren\'t any..." (plural).',
        formula: 'Affirmative: There is + [a/an + Singular Noun] | There are + [Plural Noun]\nNegative: There isn\'t a + [Singular Noun] | There aren\'t any + [Plural Noun]',
        examples: [
          { sentence: 'There is a modern kitchen downstairs.', translation: 'नीचे एक आधुनिक रसोई है। / Hay una cocina moderna abajo.', audioText: 'There is a modern kitchen downstairs.', audioId: 'en_a1_u02_l16_g_ex1' },
          { sentence: 'There are three bedrooms in our apartment.', translation: 'हमारे अपार्टमेंट में तीन बेडरूम हैं। / Hay tres dormitorios en nuestro apartamento.', audioText: 'There are three bedrooms in our apartment.', audioId: 'en_a1_u02_l16_g_ex2' },
          { sentence: 'There isn\'t a garden, but there is a balcony.', translation: 'बगीचा नहीं है, पर एक बालकनी है। / No hay jardín, pero hay un balcón.', audioText: 'There isn\'t a garden, but there is a balcony.', audioId: 'en_a1_u02_l16_g_ex3' }
        ],
        explanationByLang: {
          hi: 'किसी स्थान पर किसी वस्तु या कमरे की उपस्थिति बताने के लिए "There is" (एकवचन) और "There are" (बहुवचन) का प्रयोग करते हैं। नकारात्मक में "There isn\'t a..." या "There aren\'t any..." आता है।',
          es: 'Usa "There is" para cosas en singular ("Hay una cocina") y "There are" para plural ("Hay tres dormitorios"). En negativo: "There isn\'t a..." y "There aren\'t any...".'
        }
      },
      {
        id: 'g_there_is_questions_short_answers',
        title: 'Questions with Is there...? / Are there...?',
        rule: 'To ask questions about existence, invert "Is/Are" and "There": "Is there a...?" (singular) and "Are there any...?" (plural). Short answers: "Yes, there is / No, there isn\'t" and "Yes, there are / No, there aren\'t".',
        formula: 'Is there a + [Singular Noun]...? -> Yes, there is. / No, there isn\'t.\nAre there any + [Plural Noun]...? -> Yes, there are. / No, there aren\'t.',
        examples: [
          { sentence: 'Is there a balcony in the apartment? — Yes, there is.', translation: 'क्या अपार्टमेंट में बालकनी है? — हाँ, है। / ¿Hay balcón en el piso? — Sí, lo hay.', audioText: 'Is there a balcony in the apartment? Yes, there is.', audioId: 'en_a1_u02_l16_g_ex4' },
          { sentence: 'Are there two bathrooms? — No, there aren\'t.', translation: 'क्या दो बाथरूम हैं? — नहीं, नहीं हैं। / ¿Hay dos baños? — No, no los hay.', audioText: 'Are there two bathrooms? No, there aren\'t.', audioId: 'en_a1_u02_l16_g_ex5' }
        ],
        explanationByLang: {
          hi: 'प्रश्न पूछते समय "Is there...?" या "Are there...?" का प्रयोग करें। उत्तर में "Yes, there is" या "No, there aren\'t" आता है।',
          es: 'Para preguntar invierte: "Is there a...?" o "Are there any...?". Respuestas cortas: "Yes, there is" / "No, there aren\'t".'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_u02_l16_there_is_plural',
      incorrect: 'There is three bedrooms in the house.',
      correct: 'There are three bedrooms in the house.',
      whyExplanation: 'Use "There are" with plural nouns like "three bedrooms".',
      explanationsByLang: {
        hi: 'बहुवचन संज्ञाओं (जैसे three bedrooms) के साथ "There are" का प्रयोग करें, "There is" नहीं।',
        es: 'Con sustantivos en plural usa "There are": "There are three bedrooms", nunca "*There is three...*".',
        fr: 'Utilisez "There are" pour le pluriel : "There are three bedrooms".',
        de: 'Verwenden Sie "There are" für den Plural: "There are three bedrooms".'
      }
    },
    {
      id: 'cm_u02_l16_have_a_sofa',
      incorrect: 'In the living room has a sofa.',
      correct: 'In the living room there is a sofa.',
      whyExplanation: 'In English, do not use "has" for existence. Use "there is / there are".',
      explanationsByLang: {
        hi: 'अंग्रेज़ी में उपस्थिति बताने के लिए "has" नहीं, "there is" का प्रयोग करते हैं।',
        es: 'No uses "has" para traducir el "hay" existencial en inglés; usa "there is / there are".',
        fr: 'N\'utilisez pas "has" mais "there is" pour l\'existence.',
        de: 'Nicht "has", sondern "there is" für Existenzsätze.'
      }
    }
  ],

  // SECTION 11: Realistic Mini Dialogues
  dialogues: [
    {
      id: 'd_u02_l16_apartment_tour',
      title: 'Visiting a New Apartment',
      context: 'Elena is showing her new rented apartment to her friend Marco.',
      characters: [
        { id: 'char_elena', name: 'Elena', role: 'Tenant' },
        { id: 'char_marco', name: 'Marco', role: 'Friend' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_elena',
          speakerName: 'Elena',
          text: 'Welcome to my new apartment, Marco! Please come in and make yourself at home.',
          translationsByLang: { hi: 'मेरे नए अपार्टमेंट में आपका स्वागत है, मार्को! कृपया अंदर आइए और इसे अपना ही घर समझिए।', es: '¡Bienvenido a mi nuevo apartamento, Marco! Pasa y siéntete como en casa.' },
          audioText: 'Welcome to my new apartment, Marco! Please come in and make yourself at home.',
          audioId: 'en_a1_u02_l16_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_marco',
          speakerName: 'Marco',
          text: 'Thank you, Elena! Wow, your living room is very spacious and bright.',
          translationsByLang: { hi: 'धन्यवाद, एलेना! वाह, आपका लिविंग रूम बहुत विशाल और रोशनीदार है।', es: '¡Gracias, Elena! Vaya, tu salón es muy amplio y luminoso.' },
          audioText: 'Thank you, Elena! Wow, your living room is very spacious and bright.',
          audioId: 'en_a1_u02_l16_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_elena',
          speakerName: 'Elena',
          text: 'Yes! There are two large windows, so there is plenty of natural sunlight.',
          translationsByLang: { hi: 'हाँ! दो बड़ी खिड़कियां हैं, इसलिए बहुत सारी प्राकृतिक धूप आती है।', es: '¡Sí! Hay dos ventanas grandes, así que hay mucha luz natural.' },
          audioText: 'Yes! There are two large windows, so there is plenty of natural sunlight.',
          audioId: 'en_a1_u02_l16_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_marco',
          speakerName: 'Marco',
          text: 'Is there a balcony as well?',
          translationsByLang: { hi: 'क्या बालकनी भी है?', es: '¿Hay balcón también?' },
          audioText: 'Is there a balcony as well?',
          audioId: 'en_a1_u02_l16_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_elena',
          speakerName: 'Elena',
          text: 'Yes, there is! It is right next to the kitchen with a nice view of the park.',
          translationsByLang: { hi: 'हाँ, है! यह रसोई के ठीक बगल में है और यहाँ से पार्क का अच्छा दृश्य दिखता है।', es: '¡Sí, lo hay! Está justo al lado de la cocina con una bonita vista al parque.' },
          audioText: 'Yes, there is! It is right next to the kitchen with a nice view of the park.',
          audioId: 'en_a1_u02_l16_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l16_p1',
      lessonId: 'lesson_a1_2_16',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the correct form for singular existence:',
      sourceSentence: '___ a modern kitchen in the apartment.',
      options: [
        { id: 'o1', text: 'There is', isCorrect: true },
        { id: 'o2', text: 'There are', isCorrect: false },
        { id: 'o3', text: 'Has', isCorrect: false }
      ],
      explanation: 'Use "There is" with singular nouns like "a modern kitchen".'
    },
    {
      id: 'ex_u02_l16_p2',
      lessonId: 'lesson_a1_2_16',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Select the correct plural form:',
      sourceSentence: 'There ___ two bathrooms upstairs.',
      options: [
        { id: 'o1', text: 'are', isCorrect: true },
        { id: 'o2', text: 'is', isCorrect: false },
        { id: 'o3', text: 'be', isCorrect: false }
      ],
      explanation: 'Use "are" for plural items ("two bathrooms").'
    },
    {
      id: 'ex_u02_l16_p3',
      explanation: '\'There is\' introduces one thing and \'are\' is used for plurals. Here the subject is \'a large comfortable sofa\' (singular), so \'There is\' is correct.',
      lessonId: 'lesson_a1_2_16',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the house description:',
      targetSentence: 'There is a large comfortable sofa in the living room',
      wordBank: ['There', 'is', 'a', 'large', 'comfortable', 'sofa', 'in', 'the', 'living', 'room', 'are', 'has']
    },
    {
      id: 'ex_u02_l16_p4',
      lessonId: 'lesson_a1_2_16',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the apartment description:',
      audioText: 'There are three quiet bedrooms upstairs and a kitchen downstairs',
      options: [
        { id: 'o1', text: 'There are three quiet bedrooms upstairs and a kitchen downstairs', isCorrect: true },
        { id: 'o2', text: 'There are two quiet bedrooms downstairs and a kitchen upstairs', isCorrect: false },
        { id: 'o3', text: 'There is one bedroom upstairs and two kitchens downstairs', isCorrect: false }
      ],
      explanation: 'The speaker describes three bedrooms upstairs and a kitchen downstairs.'
    },
    {
      id: 'ex_u02_l16_p5',
      explanation: '\'Is there...?\' is the question form of \'There is\' (singular). Use \'a balcony\' for one balcony.',
      lessonId: 'lesson_a1_2_16',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and write the house sentence:',
      audioText: 'Is there a balcony in your apartment',
      targetSentence: 'Is there a balcony in your apartment'
    },
    {
      id: 'ex_u02_l16_p6',
      explanation: 'For plural nouns like \'bathrooms\', the question is \'Are there...?\' Use \'two\' with plural nouns.',
      lessonId: 'lesson_a1_2_16',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Form the question about bathrooms:',
      targetSentence: 'Are there two bathrooms in the house',
      wordBank: ['Are', 'there', 'two', 'bathrooms', 'in', 'the', 'house', 'Is', 'have']
    },
    {
      id: 'ex_u02_l16_p7',
      explanation: '\'Welcome to my new home\' is a common greeting. \'Make yourself at home\' tells the guest to relax.',
      lessonId: 'lesson_a1_2_16',
      stage: 12,
      type: 'speaking',
      prompt: 'Say this welcoming expression into your microphone:',
      targetSentence: 'Welcome to my new home, make yourself at home.',
      audioText: 'Welcome to my new home, make yourself at home.'
    },
    {
      id: 'ex_u02_l16_p8',
      explanation: 'The sentence uses \'There is\' because the first noun, \'a comfortable sofa\', is singular. Note: with a list like \'a sofa and two windows\', many textbooks prefer \'There are\' (plural). Hindi: \'लिविंग रूम में एक आरामदायक सोफा और दो खिड़कियाँ हैं।\'',
      lessonId: 'lesson_a1_2_16',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'लिविंग रूम में एक आरामदायक सोफा और दो खिड़कियां हैं।',
      sourceTranslations: {
        hi: 'लिविंग रूम में एक आरामदायक सोफा और दो खिड़कियां हैं।',
        es: 'Hay un sofá cómodo y dos ventanas en el salón.'
      },
      targetSentence: 'There is a comfortable sofa and two windows in the living room',
      wordBank: ['There', 'is', 'a', 'comfortable', 'sofa', 'and', 'two', 'windows', 'in', 'the', 'living', 'room', 'has', 'are']
    },
    {
      id: 'ex_u02_l16_p9',
      lessonId: 'lesson_a1_2_16',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Unit 1 Colors & Unit 2 Rooms):',
      sourceSentence: 'In the bedroom, there is a ___ rug next to the bed.',
      options: [
        { id: 'o1', text: 'blue', isCorrect: true },
        { id: 'o2', text: 'doctor', isCorrect: false },
        { id: 'o3', text: 'speaks', isCorrect: false }
      ],
      explanation: '"blue" is a color adjective modifying the noun "rug".'
    },
    {
      id: 'ex_u02_l16_p10',
      lessonId: 'lesson_a1_2_16',
      stage: 15,
      type: 'error_correction',
      prompt: 'Correct the existential error:',
      sourceSentence: 'In our apartment has two balconies.',
      options: [
        { id: 'o1', text: 'In our apartment there are two balconies.', isCorrect: true },
        { id: 'o2', text: 'In our apartment there is two balconies.', isCorrect: false },
        { id: 'o3', text: 'In our apartment have two balconies.', isCorrect: false }
      ],
      explanation: 'Use "there are" for plural existence, never "has".'
    },
    {
      id: 'ex_u02_l16_p11',
      lessonId: 'lesson_a1_2_16',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Choose the correct short answer:',
      sourceSentence: 'Guest: "Is there a shower in the guest bathroom?" -> Host: "___"',
      options: [
        { id: 'o1', text: 'Yes, there is.', isCorrect: true },
        { id: 'o2', text: 'Yes, it does.', isCorrect: false },
        { id: 'o3', text: 'Yes, they are.', isCorrect: false }
      ],
      explanation: 'Respond with "Yes, there is" to a question starting with "Is there...?".'
    },
    {
      id: 'ex_u02_l16_p12',
      lessonId: 'lesson_a1_2_16',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Where is the bathroom located in relation to the two bedrooms?',
      sourceSentence: 'The bathroom is ___ the two bedrooms.',
      options: [
        { id: 'o1', text: 'between', isCorrect: true },
        { id: 'o2', text: 'under', isCorrect: false },
        { id: 'o3', text: 'on', isCorrect: false }
      ],
      explanation: '"between" indicates a position separating two objects or rooms.'
    },
    {
      id: 'ex_u02_l16_p13',
      lessonId: 'lesson_a1_2_16',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the correct negative sentence for plural items:',
      sourceSentence: 'Negative statement:',
      options: [
        { id: 'o1', text: 'There aren\'t any elevators in this building.', isCorrect: true },
        { id: 'o2', text: 'There isn\'t any elevators in this building.', isCorrect: false },
        { id: 'o3', text: 'There not are elevators in this building.', isCorrect: false }
      ],
      explanation: 'Use "There aren\'t any..." with plural nouns.'
    },
    {
      id: 'ex_u02_l16_p14',
      explanation: '\'Upstairs\' and \'downstairs\' are adverbs of place. \'Upstairs\' fits here because the master bedroom is on the upper floor.',
      lessonId: 'lesson_a1_2_16',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Construct the location sentence:',
      targetSentence: 'The master bedroom is upstairs on the right',
      wordBank: ['The', 'master', 'bedroom', 'is', 'upstairs', 'on', 'the', 'right', 'downstairs', 'are']
    },
    {
      id: 'ex_u02_l16_p15',
      explanation: '\'There is\' + singular noun: \'a sunny garden\'. \'Behind our house\' is a place phrase.',
      lessonId: 'lesson_a1_2_16',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this description out loud into your microphone:',
      targetSentence: 'There is a sunny garden behind our house.',
      audioText: 'There is a sunny garden behind our house.'
    }
  ],

  // SECTION 16: Review Exercises (4 items)
  reviewExercises: [
    {
      id: 'ex_u02_l16_rev1',
      lessonId: 'lesson_a1_2_16',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      sourceSentence: 'Grammar review:',
      options: [
        { id: 'o1', text: 'There are four chairs in the dining room.', isCorrect: true },
        { id: 'o2', text: 'There is four chairs in the dining room.', isCorrect: false },
        { id: 'o3', text: 'Has four chairs in the dining room.', isCorrect: false }
      ],
      explanation: 'Use "There are" with plural nouns ("four chairs").'
    },
    {
      id: 'ex_u02_l16_rev2',
      lessonId: 'lesson_a1_2_16',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Complete the short answer:',
      sourceSentence: '"Are there any plants on the balcony?" — "No, there ___."',
      options: [
        { id: 'o1', text: 'aren\'t', isCorrect: true },
        { id: 'o2', text: 'isn\'t', isCorrect: false },
        { id: 'o3', text: 'don\'t', isCorrect: false }
      ],
      explanation: 'Match plural question "Are there...?" with "No, there aren\'t".'
    },
    {
      id: 'ex_u02_l16_rev3',
      explanation: '\'There is\' is used here because the first noun, \'a quiet garden\', is singular. \'And a garage\' adds a second item to the list.',
      lessonId: 'lesson_a1_2_16',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Assemble the sentence:',
      targetSentence: 'There is a quiet garden and a garage',
      wordBank: ['There', 'is', 'a', 'quiet', 'garden', 'and', 'a', 'garage', 'are', 'has']
    },
    {
      id: 'ex_u02_l16_rev4',
      explanation: 'A question with \'Are there\' is answered with \'Yes, there are.\' Hindi: \'क्या घर में दो बाथरूम हैं? — हाँ, हैं।\'',
      lessonId: 'lesson_a1_2_16',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या घर में दो बाथरूम हैं? — हाँ, हैं।',
      sourceTranslations: { hi: 'क्या घर में दो बाथरूम हैं? — हाँ, हैं।', es: '¿Hay dos baños en la casa? — Sí, los hay.' },
      targetSentence: 'Are there two bathrooms in the house Yes there are',
      wordBank: ['Are', 'there', 'two', 'bathrooms', 'in', 'the', 'house', 'Yes', 'there', 'are', 'Is']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l16_a1',
      lessonId: 'lesson_a1_2_16',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct sentence: "___ a big fridge in the kitchen."',
      sourceSentence: 'Existential test:',
      options: [
        { id: 'o1', text: 'There is', isCorrect: true },
        { id: 'o2', text: 'There are', isCorrect: false },
        { id: 'o3', text: 'It has', isCorrect: false },
        { id: 'o4', text: 'They are', isCorrect: false }
      ],
      explanation: 'Singular "a big fridge" takes "There is".'
    },
    {
      id: 'ex_u02_l16_a2',
      lessonId: 'lesson_a1_2_16',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Complete the question format:',
      sourceSentence: '___ there any windows in the hallway?',
      options: [
        { id: 'o1', text: 'Are', isCorrect: true },
        { id: 'o2', text: 'Is', isCorrect: false },
        { id: 'o3', text: 'Do', isCorrect: false },
        { id: 'o4', text: 'Have', isCorrect: false }
      ],
      explanation: 'Use "Are there" for plural questions ("any windows").'
    },
    {
      id: 'ex_u02_l16_a3',
      explanation: 'Negative plural: \'There aren\'t any cars\' (aren\'t = are not). \'Any\' is used in negatives with plural or uncountable nouns.',
      lessonId: 'lesson_a1_2_16',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Build the sentence:',
      targetSentence: 'There aren\'t any cars in the garage',
      wordBank: ['There', 'aren\'t', 'any', 'cars', 'in', 'the', 'garage', 'isn\'t', 'a']
    },
    {
      id: 'ex_u02_l16_a4',
      lessonId: 'lesson_a1_2_16',
      stage: 17,
      type: 'error_correction',
      prompt: 'Fix the agreement error:',
      sourceSentence: 'There is three doors in the corridor.',
      options: [
        { id: 'o1', text: 'There are three doors in the corridor.', isCorrect: true },
        { id: 'o2', text: 'There have three doors in the corridor.', isCorrect: false },
        { id: 'o3', text: 'There be three doors in the corridor.', isCorrect: false }
      ],
      explanation: 'Plural "three doors" requires "There are".'
    },
    {
      id: 'ex_u02_l16_a5',
      lessonId: 'lesson_a1_2_16',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the speaker says:',
      audioText: 'There is a spacious balcony with two comfortable chairs',
      options: [
        { id: 'o1', text: 'There is a spacious balcony with two comfortable chairs', isCorrect: true },
        { id: 'o2', text: 'There are two spacious balconies with a comfortable chair', isCorrect: false },
        { id: 'o3', text: 'There is a quiet garden with two small tables', isCorrect: false }
      ],
      explanation: 'The speaker states "There is a spacious balcony with two comfortable chairs".'
    },
    {
      id: 'ex_u02_l16_a6',
      explanation: '\'Between\' is used for a position between two things: \'between the two bedrooms.\'',
      lessonId: 'lesson_a1_2_16',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe the sentence accurately:',
      audioText: 'The bathroom is between the two bedrooms',
      targetSentence: 'The bathroom is between the two bedrooms'
    },
    {
      id: 'ex_u02_l16_a7',
      lessonId: 'lesson_a1_2_16',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best response:',
      sourceSentence: 'Visitor: "Where is the kitchen?" -> Host: "___"',
      options: [
        { id: 'o1', text: 'It is downstairs next to the dining room.', isCorrect: true },
        { id: 'o2', text: 'I am thirty years old.', isCorrect: false },
        { id: 'o3', text: 'It costs twenty dollars.', isCorrect: false }
      ],
      explanation: 'Provides clear location for the kitchen.'
    },
    {
      id: 'ex_u02_l16_a8',
      explanation: '\'There are\' is used with the plural \'three bedrooms\'. \'A balcony\' is added to the list. Hindi: \'अपार्टमेंट में तीन बेडरूम और एक बालकनी है।\'',
      lessonId: 'lesson_a1_2_16',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'अपार्टमेंट में तीन बेडरूम और एक बालकनी है।',
      sourceTranslations: { hi: 'अपार्टमेंट में तीन बेडरूम और एक बालकनी है।', es: 'En el apartamento hay tres dormitorios y un balcón.' },
      targetSentence: 'There are three bedrooms and a balcony in the apartment',
      wordBank: ['There', 'are', 'three', 'bedrooms', 'and', 'a', 'balcony', 'in', 'the', 'apartment', 'is', 'has']
    },
    {
      id: 'ex_u02_l16_a9',
      lessonId: 'lesson_a1_2_16',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which adjective means "full of natural sunlight"?',
      sourceSentence: 'Adjective definition:',
      options: [
        { id: 'o1', text: 'bright', isCorrect: true },
        { id: 'o2', text: 'quiet', isCorrect: false },
        { id: 'o3', text: 'expensive', isCorrect: false },
        { id: 'o4', text: 'tight', isCorrect: false }
      ],
      explanation: '"bright" means filled with light.'
    },
    {
      id: 'ex_u02_l16_a10',
      explanation: 'In questions, \'Is there...?\' is used with a singular noun. Here, \'a quiet garden\' is singular, so the question form is \'Is there...?\'',
      lessonId: 'lesson_a1_2_16',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final sentence:',
      targetSentence: 'Is there a quiet garden behind your house',
      wordBank: ['Is', 'there', 'a', 'quiet', 'garden', 'behind', 'your', 'house', 'Are', 'have']
    }
  ]
};
