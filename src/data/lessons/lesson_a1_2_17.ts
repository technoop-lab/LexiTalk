import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_17_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_17',
  unitId: 'unit_a1_2',
  title: 'Furniture, Household Objects & Prepositions of Location',
  cefr: 'A1',
  icon: '🛋️',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Furniture, Household Objects and Exact Prepositions of Location',
    description: 'Master advanced prepositions of location (next to, behind, in front of, opposite, above, near, on top of) and comprehensive household vocabulary. Learn how to locate everyday items, furnish rooms, ask where items are placed, and distinguish between "the" (specific) and "a/an" (indefinite).',
    descriptionsByLang: {
      hi: 'फर्नीचर, घरेलू वस्तुओं और स्थिति के प्रीपोजिशन्स (next to, behind, in front of, opposite, above, near) का उपयोग करके वस्तुओं और कमरों की सटीक स्थिति बताना सीखें। "Where is...?" और "Where are...?" के साथ प्रश्न-उत्तर का अभ्यास करें।',
      es: 'Domina las preposiciones de lugar (next to, behind, in front of, opposite, above, near) y el vocabulario de muebles y objetos del hogar para localizar artículos con precisión y describir habitaciones.',
      fr: 'Maîtrisez les prépositions de lieu et le vocabulaire des meubles et objets ménagers.',
      de: 'Beherrschen Sie Ortspräpositionen und Vokabular für Möbel und Haushaltsgegenstände.',
      pt: 'Domine preposições de lugar e vocabulário de móveis e objetos domésticos.',
      zh: '掌握方位介词（next to, behind, in front of, opposite, above, near）以及家具与日常家居物品词汇，学会准确描述物品位置。',
      ar: 'أتقن حروف الجر المكانية ومفردات الأثاث والأدوات المنزلية لتحديد مواقع الأشياء بدقة.',
      ja: '家具や家電製品の名前と、位置を表す前置詞（next to, behind, in front of, opposite, above, near）を用いて物の場所を正確に説明する方法を学びます。',
      ru: 'Освойте предлоги места и лексику мебели и предметов домашнего обихода для точного указания местоположения вещей.'
    },
    canDoStatements: [
      'Locate objects precisely using "next to", "behind", "in front of", "opposite", "above", and "near"',
      'Ask and answer where items are kept: "Where are my keys?" — "They are on top of the desk"',
      'Describe furniture layout in an apartment or office room',
      'Name 25 common household furnishings and personal objects',
      'Use singular "It is..." and plural "They are..." with prepositions of place'
    ],
    canDoByLang: {
      hi: [
        'वस्तुओं की सटीक स्थिति बताना: "next to the sofa", "behind the door"',
        'चीजों के स्थान के बारे में पूछना और बताना: "Where is the remote control?"',
        'कमरे के फर्नीचर की बनावट समझाना',
        '25 घरेलू और व्यक्तिगत वस्तुओं के नाम पहचानना'
      ],
      es: [
        'Localizar objetos con precisión usando preposiciones de lugar',
        'Preguntar dónde están las cosas y responder: "Where are my keys?"',
        'Describir la disposición de los muebles en una habitación'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l17_armchair',
      word: 'armchair',
      phonetic: '/ˈɑːrm.tʃer/',
      meaning: 'A comfortable chair with sides that support your arms',
      translationsByLang: { hi: 'आरामकुर्सी / आर्मचेयर', es: 'sillón / butaca', fr: 'fauteuil', de: 'Sessel', pt: 'poltrona', zh: '单人扶手椅', ar: 'كرسي بذراعين', ja: '肘掛け椅子 / アームチェア', ru: 'кресло' },
      exampleSentence: 'There is a leather armchair next to the bookshelf.',
      exampleTranslationByLang: { hi: 'किताबों की अलमारी के बगल में एक लेदर आर्मचेयर है।', es: 'Hay un sillón de cuero al lado de la estantería.' },
      audioText: 'armchair',
      audioId: 'en_a1_u02_l17_v_armchair',
      slowAudioId: 'en_a1_u02_l17_v_armchair_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🪑',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_desk',
      word: 'desk',
      phonetic: '/desk/',
      meaning: 'A piece of furniture like a table, often with drawers, used for working or studying',
      translationsByLang: { hi: 'मेज़ / डेस्क', es: 'escritorio', fr: 'bureau', de: 'Schreibtisch', pt: 'escrivaninha / mesa de trabalho', zh: '书桌 / 办公桌', ar: 'مكتب', ja: '机 / デスク', ru: 'письменный стол' },
      exampleSentence: 'My computer and lamp are on the desk.',
      exampleTranslationByLang: { hi: 'मेरा कंप्यूटर और लैंप डेस्क पर हैं।', es: 'Mi ordenador y la lámpara están sobre el escritorio.' },
      audioText: 'desk',
      audioId: 'en_a1_u02_l17_v_desk',
      slowAudioId: 'en_a1_u02_l17_v_desk_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🖥️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_wardrobe',
      word: 'wardrobe / closet',
      phonetic: '/ˈwɔːr.droʊb/',
      meaning: 'A large tall cupboard in which clothes may be hung or stored',
      translationsByLang: { hi: 'अलमारी / वार्डरोब', es: 'armario / ropero', fr: 'armoire / penderie', de: 'Kleiderschrank', pt: 'guarda-roupa / armário', zh: '衣柜 / 大衣橱', ar: 'خزانة ملابس', ja: '洋服ダンス / クローゼット', ru: 'платяной шкаф / гардероб' },
      exampleSentence: 'Hang your coats in the wardrobe, please.',
      exampleTranslationByLang: { hi: 'कृपया अपने कोट अलमारी में लटकाएं।', es: 'Cuelga tus abrigos en el armario, por favor.' },
      audioText: 'wardrobe and closet',
      audioId: 'en_a1_u02_l17_v_wardrobe',
      slowAudioId: 'en_a1_u02_l17_v_wardrobe_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_bookshelf',
      word: 'bookshelf / bookcase',
      phonetic: '/ˈbʊk.ʃelf/',
      meaning: 'A structure of shelves to hold books',
      translationsByLang: { hi: 'किताबों की अलमारी', es: 'estantería / librero', fr: 'bibliothèque / étagère à livres', de: 'Bücherregal', pt: 'estante de livros', zh: '书架', ar: 'رف كتب / مكتبة', ja: '本棚', ru: 'книжная полка / книжный шкаф' },
      exampleSentence: 'There are many English dictionaries on the bookshelf.',
      exampleTranslationByLang: { hi: 'किताबों की अलमारी पर कई अंग्रेजी शब्दकोश हैं।', es: 'Hay muchos diccionarios de inglés en la estantería.' },
      audioText: 'bookshelf',
      audioId: 'en_a1_u02_l17_v_bookshelf',
      slowAudioId: 'en_a1_u02_l17_v_bookshelf_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📚',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_mirror',
      word: 'mirror',
      phonetic: '/ˈmɪr.ɚ/',
      meaning: 'A reflective surface that shows a clear image of an object or person',
      translationsByLang: { hi: 'आईना / शीशा / दर्पण', es: 'espejo', fr: 'miroir', de: 'Spiegel', pt: 'espelho', zh: '镜子', ar: 'مرآة', ja: '鏡 / ミラー', ru: 'зеркало' },
      exampleSentence: 'There is a big mirror in the bathroom.',
      exampleTranslationByLang: { hi: 'बाथरूम में एक बड़ा शीशा है।', es: 'Hay un espejo grande en el baño.' },
      audioText: 'mirror',
      audioId: 'en_a1_u02_l17_v_mirror',
      slowAudioId: 'en_a1_u02_l17_v_mirror_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🪞',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_rug',
      word: 'rug / carpet',
      phonetic: '/rʌɡ/',
      meaning: 'A floor covering of thick woven material',
      translationsByLang: { hi: 'कालीन / पायदान / गलीचा', es: 'alfombra', fr: 'tapis / moquette', de: 'Teppich', pt: 'tapete', zh: '地毯 / 小地毯', ar: 'سجادة', ja: 'ラグ / じゅうたん', ru: 'ковер / коврик' },
      exampleSentence: 'There is a soft grey rug under the coffee table.',
      exampleTranslationByLang: { hi: 'कॉफ़ी टेबल के नीचे एक मुलायम धूसर कालीन है।', es: 'Hay una alfombra gris suave debajo de la mesa de centro.' },
      audioText: 'rug and carpet',
      audioId: 'en_a1_u02_l17_v_rug',
      slowAudioId: 'en_a1_u02_l17_v_rug_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧶',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_lamp',
      word: 'lamp',
      phonetic: '/læmp/',
      meaning: 'A device for giving light, consisting of an electric bulb and a shade',
      translationsByLang: { hi: 'दीपक / लैंप', es: 'lámpara', fr: 'lampe', de: 'Lampe', pt: 'lâmpada / abajur', zh: '灯 / 台灯', ar: 'مصباح', ja: 'ランプ / 灯り', ru: 'лампа / светильник' },
      exampleSentence: 'Turn on the reading lamp, please.',
      exampleTranslationByLang: { hi: 'कृपया पढ़ने वाला लैंप चालू करें।', es: 'Enciende la lámpara de lectura, por favor.' },
      audioText: 'lamp',
      audioId: 'en_a1_u02_l17_v_lamp',
      slowAudioId: 'en_a1_u02_l17_v_lamp_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💡',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_curtains',
      word: 'curtains / blinds',
      phonetic: '/ˈkɝː.tənz/',
      meaning: 'Pieces of fabric hung to cover a window',
      translationsByLang: { hi: 'पर्दे', es: 'cortinas / persianas', fr: 'rideaux / stores', de: 'Vorhänge / Gardinen', pt: 'cortinas / persianas', zh: '窗帘 / 百叶窗', ar: 'ستائر', ja: 'カーテン / ブラインド', ru: 'шторы / занавески' },
      exampleSentence: 'Close the curtains when the sun is too bright.',
      exampleTranslationByLang: { hi: 'जब धूप बहुत तेज़ हो तो पर्दे बंद कर दें।', es: 'Cierra las cortinas cuando el sol sea demasiado fuerte.' },
      audioText: 'curtains and blinds',
      audioId: 'en_a1_u02_l17_v_curtains',
      slowAudioId: 'en_a1_u02_l17_v_curtains_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🪟',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_sink',
      word: 'sink / basin',
      phonetic: '/sɪŋk/',
      meaning: 'A fixed basin with a water supply and drain',
      translationsByLang: { hi: 'वॉश बेसिन / सिंक', es: 'fregadero / lavabo', fr: 'évier / lavabo', de: 'Spülbecken / Waschbecken', pt: 'pia / lavatório', zh: '水槽 / 水池', ar: 'حوض غسيل / بالوعة', ja: '流し台 / 洗面台 / シンク', ru: 'раковина / мойка' },
      exampleSentence: 'Wash your hands in the bathroom sink.',
      exampleTranslationByLang: { hi: 'बाथरूम के सिंक में अपने हाथ धोएं।', es: 'Lávate las manos en el lavabo del baño.' },
      audioText: 'sink and basin',
      audioId: 'en_a1_u02_l17_v_sink',
      slowAudioId: 'en_a1_u02_l17_v_sink_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_oven',
      word: 'oven',
      phonetic: '/ˈʌv.ən/',
      meaning: 'An enclosed compartment for cooking and baking food',
      translationsByLang: { hi: 'ओवन / तंदूर', es: 'horno', fr: 'four', de: 'Backofen', pt: 'forno', zh: '烤箱 / 烤炉', ar: 'فرن', ja: 'オーブン', ru: 'духовка / печь' },
      exampleSentence: 'The pizza is baking in the oven.',
      exampleTranslationByLang: { hi: 'पिज़्ज़ा ओवन में पक रहा है।', es: 'La pizza se está horneando en el horno.' },
      audioText: 'oven',
      audioId: 'en_a1_u02_l17_v_oven',
      slowAudioId: 'en_a1_u02_l17_v_oven_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔥',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_microwave',
      word: 'microwave',
      phonetic: '/ˈmaɪ.kroʊ.weɪv/',
      meaning: 'An electric oven that cooks or reheats food using high-frequency electromagnetic waves',
      translationsByLang: { hi: 'माइक्रोवेव', es: 'microondas', fr: 'micro-ondes', de: 'Mikrowelle', pt: 'micro-ondas', zh: '微波炉', ar: 'مايكرويف', ja: '電子レンジ', ru: 'микроволновка' },
      exampleSentence: 'Warm the soup in the microwave for two minutes.',
      exampleTranslationByLang: { hi: 'सूप को माइक्रोवेव में दो मिनट के लिए गर्म करें।', es: 'Calienta la sopa en el microondas durante dos minutos.' },
      audioText: 'microwave',
      audioId: 'en_a1_u02_l17_v_microwave',
      slowAudioId: 'en_a1_u02_l17_v_microwave_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍲',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_pillow',
      word: 'pillow',
      phonetic: '/ˈpɪl.oʊ/',
      meaning: 'A soft cushion for the head when sleeping in bed',
      translationsByLang: { hi: 'तकिया', es: 'almohada', fr: 'oreiller / coussin', de: 'Kissen / Kopfkissen', pt: 'travesseiro / almofada', zh: '枕头', ar: 'وسادة / مخدة', ja: '枕 / ピロー', ru: 'подушка' },
      exampleSentence: 'There are two feather pillows on the bed.',
      exampleTranslationByLang: { hi: 'बिस्तर पर दो तकिए हैं।', es: 'Hay dos almohadas de plumas en la cama.' },
      audioText: 'pillow',
      audioId: 'en_a1_u02_l17_v_pillow',
      slowAudioId: 'en_a1_u02_l17_v_pillow_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛌',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_blanket',
      word: 'blanket / duvet',
      phonetic: '/ˈblæŋ.kɪt/',
      meaning: 'A large piece of warm woolen or fabric material used as a bed covering',
      translationsByLang: { hi: 'कंबल / रजाई', es: 'manta / cobija / edredón', fr: 'couverture / couette', de: 'Decke / Bettdecke', pt: 'cobertor / manta', zh: '毯子 / 被子', ar: 'بطانية / لحاف', ja: '毛布 / ブランケット / 掛け布団', ru: 'одеяло / плед' },
      exampleSentence: 'Take an extra blanket if you feel cold.',
      exampleTranslationByLang: { hi: 'यदि आपको ठंड लगे तो एक अतिरिक्त कंबल ले लें।', es: 'Coge una manta extra si tienes frío.' },
      audioText: 'blanket and duvet',
      audioId: 'en_a1_u02_l17_v_blanket',
      slowAudioId: 'en_a1_u02_l17_v_blanket_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🛏️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_clock',
      word: 'clock',
      phonetic: '/klɑːk/',
      meaning: 'An instrument used for measuring and indicating time on a wall or shelf',
      translationsByLang: { hi: 'घड़ी / दीवार घड़ी', es: 'reloj de pared', fr: 'horloge / réveil', de: 'Uhr / Wanduhr', pt: 'relógio de parede', zh: '时钟 / 钟表', ar: 'ساعة حائط', ja: '時計 / 掛け時計', ru: 'часы (настенные)' },
      exampleSentence: 'There is a vintage clock on the wall above the fireplace.',
      exampleTranslationByLang: { hi: 'दीवार पर चिमनी के ऊपर एक विंटेज घड़ी है।', es: 'Hay un reloj antiguo en la pared encima de la chimenea.' },
      audioText: 'clock',
      audioId: 'en_a1_u02_l17_v_clock',
      slowAudioId: 'en_a1_u02_l17_v_clock_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏰',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_drawer',
      word: 'drawer',
      phonetic: '/drɔːr/',
      meaning: 'A boxlike storage compartment without a lid that slides horizontally in and out of a desk or dresser',
      translationsByLang: { hi: 'दराज / ड्रॉअर', es: 'cajón', fr: 'tiroir', de: 'Schublade', pt: 'gaveta', zh: '抽屉', ar: 'درج', ja: '引き出し', ru: 'выдвижной ящик' },
      exampleSentence: 'Your passport is inside the top desk drawer.',
      exampleTranslationByLang: { hi: 'आपका पासपोर्ट डेस्क की ऊपरी दराज में है।', es: 'Tu pasaporte está dentro del cajón superior del escritorio.' },
      audioText: 'drawer',
      audioId: 'en_a1_u02_l17_v_drawer',
      slowAudioId: 'en_a1_u02_l17_v_drawer_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗄️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_shelf',
      word: 'shelf (plural: shelves)',
      phonetic: '/ʃelf/',
      meaning: 'A flat length of wood or rigid material attached to a wall or forming part of furniture',
      translationsByLang: { hi: 'ताक / शेल्फ', es: 'estante / repisa', fr: 'étagère / tablette', de: 'Regal / Regalbrett', pt: 'prateleira', zh: '搁板 / 架子', ar: 'رف (رفوف)', ja: '棚 / シェルフ', ru: 'полка (полки)' },
      exampleSentence: 'Put the clean glasses on the kitchen shelf.',
      exampleTranslationByLang: { hi: 'साफ गिलासों को रसोई की शेल्फ पर रखें।', es: 'Pon los vasos limpios en la repisa de la cocina.' },
      audioText: 'shelf and shelves',
      audioId: 'en_a1_u02_l17_v_shelf',
      slowAudioId: 'en_a1_u02_l17_v_shelf_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🪵',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_keys',
      word: 'keys',
      phonetic: '/kiːz/',
      meaning: 'Small shaped metal pieces used to lock or unlock doors or padlocks',
      translationsByLang: { hi: 'चाबियां', es: 'llaves', fr: 'clés', de: 'Schlüssel', pt: 'chaves', zh: '钥匙', ar: 'مفاتيح', ja: '鍵 / キー', ru: 'ключи' },
      exampleSentence: 'My house keys are on the hall table.',
      exampleTranslationByLang: { hi: 'मेरी घर की चाबियां हॉल की मेज पर हैं।', es: 'Las llaves de mi casa están en la mesa del recibidor.' },
      audioText: 'keys',
      audioId: 'en_a1_u02_l17_v_keys',
      slowAudioId: 'en_a1_u02_l17_v_keys_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔑',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_remote_control',
      word: 'remote control',
      phonetic: '/rɪˈmoʊt kənˌtroʊl/',
      meaning: 'A handheld electronic device for controlling television and sound equipment from a distance',
      translationsByLang: { hi: 'रिमोट कंट्रोल', es: 'mando a distancia / control remoto', fr: 'télécommande', de: 'Fernbedienung', pt: 'controle remoto', zh: '遥控器', ar: 'جهاز التحكم عن بعد / ريموت', ja: 'リモコン', ru: 'пульт дистанционного управления' },
      exampleSentence: 'Where is the TV remote control?',
      exampleTranslationByLang: { hi: 'टीवी का रिमोट कंट्रोल कहाँ है?', es: '¿Dónde está el mando de la televisión?' },
      audioText: 'remote control',
      audioId: 'en_a1_u02_l17_v_remote_control',
      slowAudioId: 'en_a1_u02_l17_v_remote_control_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📱',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_plant',
      word: 'houseplant / plant',
      phonetic: '/plænt/',
      meaning: 'A living organism grown indoors for decoration',
      translationsByLang: { hi: 'घर का पौधा', es: 'planta de interior', fr: 'plante d\'intérieur', de: 'Zimmerpflanze', pt: 'planta de interior', zh: '室内植物 / 盆栽', ar: 'نبتة منزلية', ja: '観葉植物 / 植木', ru: 'комнатное растение' },
      exampleSentence: 'There is a green plant next to the window.',
      exampleTranslationByLang: { hi: 'खिड़की के बगल में एक हरा पौधा है।', es: 'Hay una planta verde junto a la ventana.' },
      audioText: 'houseplant and plant',
      audioId: 'en_a1_u02_l17_v_plant',
      slowAudioId: 'en_a1_u02_l17_v_plant_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🪴',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_trash_can',
      word: 'trash can / bin',
      phonetic: '/ˈtræʃ ˌkæn/',
      meaning: 'A container for domestic waste',
      translationsByLang: { hi: 'कचरे का डिब्बा / डस्टबिन', es: 'papelera / cubo de basura', fr: 'poubelle', de: 'Mülleimer / Abfalleimer', pt: 'lixeira / cesto de lixo', zh: '垃圾桶', ar: 'سلة مهملات / سلة قمامة', ja: 'ゴミ箱', ru: 'мусорное ведро / урна' },
      exampleSentence: 'The trash can is under the kitchen sink.',
      exampleTranslationByLang: { hi: 'कचरे का डिब्बा किचन के सिंक के नीचे है।', es: 'El cubo de la basura está debajo del fregadero de la cocina.' },
      audioText: 'trash can and bin',
      audioId: 'en_a1_u02_l17_v_trash_can',
      slowAudioId: 'en_a1_u02_l17_v_trash_can_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗑️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_next_to',
      word: 'next to / beside',
      phonetic: '/ˈnekst ˌtuː/',
      meaning: 'At the side of; immediately adjacent to',
      translationsByLang: { hi: 'के बगल में / पास में', es: 'al lado de / junto a', fr: 'à côté de', de: 'neben', pt: 'ao lado de / junto a', zh: '在……旁边 / 挨着', ar: 'بجانب / إلى جوار', ja: '〜の隣に / 〜の横に', ru: 'рядом с / возле' },
      exampleSentence: 'The lamp is next to the bed.',
      exampleTranslationByLang: { hi: 'लैंप बिस्तर के बगल में है।', es: 'La lámpara está al lado de la cama.' },
      audioText: 'next to and beside',
      audioId: 'en_a1_u02_l17_v_next_to',
      slowAudioId: 'en_a1_u02_l17_v_next_to_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '➡️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_behind',
      word: 'behind',
      phonetic: '/bɪˈhaɪnd/',
      meaning: 'At the back of or further back than someone or something',
      translationsByLang: { hi: 'के पीछे', es: 'detrás de', fr: 'derrière', de: 'hinter', pt: 'atrás de', zh: '在……后面', ar: 'خلف / وراء', ja: '〜の後ろに / 〜の背後に', ru: 'за / сзади / позади' },
      exampleSentence: 'The umbrella is behind the door.',
      exampleTranslationByLang: { hi: 'छाता दरवाजे के पीछे है।', es: 'El paraguas está detrás de la puerta.' },
      audioText: 'behind',
      audioId: 'en_a1_u02_l17_v_behind',
      slowAudioId: 'en_a1_u02_l17_v_behind_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔙',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_in_front_of',
      word: 'in front of',
      phonetic: '/ɪn ˈfrʌnt ʌv/',
      meaning: 'In a position facing someone or something and directly before them',
      translationsByLang: { hi: 'के सामने / के आगे', es: 'delante de / enfrente de', fr: 'devant', de: 'vor', pt: 'na frente de / em frente de', zh: '在……前面', ar: 'أمام / قبالة', ja: '〜の前に / 〜の正面に', ru: 'перед / впереди' },
      exampleSentence: 'There is a rug in front of the fireplace.',
      exampleTranslationByLang: { hi: 'चिमनी के सामने एक कालीन है।', es: 'Hay una alfombra delante de la chimenea.' },
      audioText: 'in front of',
      audioId: 'en_a1_u02_l17_v_in_front_of',
      slowAudioId: 'en_a1_u02_l17_v_in_front_of_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⏩',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_above',
      word: 'above / over',
      phonetic: '/əˈbʌv/',
      meaning: 'At a higher level or position than something else',
      translationsByLang: { hi: 'के ऊपर (बिना छुए)', es: 'encima de / sobre (sin tocar)', fr: 'au-dessus de', de: 'über / oberhalb', pt: 'acima de / sobre', zh: '在……上方', ar: 'فوق / أعلى من', ja: '〜の上に / 〜の上方に', ru: 'над / выше' },
      exampleSentence: 'The clock is on the wall above the television.',
      exampleTranslationByLang: { hi: 'घड़ी टेलीविजन के ऊपर दीवार पर है।', es: 'El reloj está en la pared encima del televisor.' },
      audioText: 'above and over',
      audioId: 'en_a1_u02_l17_v_above',
      slowAudioId: 'en_a1_u02_l17_v_above_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⬆️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l17_opposite',
      word: 'opposite / across from',
      phonetic: '/ˈɑː.pə.zɪt/',
      meaning: 'In a position on the other side of a space, hallway, or room',
      translationsByLang: { hi: 'के ठीक सामने / विपरीत दिशा में', es: 'enfrente de / al otro lado de', fr: 'en face de', de: 'gegenüber von', pt: 'em frente a / do outro lado', zh: '在……对面', ar: 'مقابل / في الجهة المقابلة', ja: '〜の向かいに / 反対側に', ru: 'напротив / напротив друг друга' },
      exampleSentence: 'The sofa is opposite the television.',
      exampleTranslationByLang: { hi: 'सोफा टेलीविजन के ठीक सामने है।', es: 'El sofá está enfrente de la televisión.' },
      audioText: 'opposite and across from',
      audioId: 'en_a1_u02_l17_v_opposite',
      slowAudioId: 'en_a1_u02_l17_v_opposite_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '↔️',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_u02_l17_where_did_i_put',
      text: 'Where did I put my keys?',
      meaning: 'Common expression when searching for misplaced everyday objects',
      translationsByLang: {
        hi: 'मैंने अपनी चाबियां कहाँ रख दीं?',
        es: '¿Dónde habré puesto mis llaves?',
        fr: 'Où ai-je mis mes clés ?',
        de: 'Wo habe ich meine Schlüssel hingelegt?'
      },
      audioText: 'Where did I put my keys?',
      audioId: 'en_a1_u02_l17_c_where_keys',
      context: 'Daily search for personal possessions',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l17_right_over_there',
      text: 'They are right over there on the table.',
      meaning: 'Pointing out exact location clearly to someone',
      translationsByLang: {
        hi: 'वे ठीक वहीं मेज पर हैं।',
        es: 'Están justo allí sobre la mesa.',
        fr: 'Elles sont juste là-bas sur la table.',
        de: 'Sie sind genau dort drüben auf dem Tisch.'
      },
      audioText: 'They are right over there on the table.',
      audioId: 'en_a1_u02_l17_c_right_over_there',
      context: 'Helping family or friends locate objects',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_u02_l17_on_top_of',
      text: 'On top of the desk',
      meaning: 'Specifying the upper surface of a piece of furniture',
      translationsByLang: {
        hi: 'डेस्क के ठीक ऊपर',
        es: 'Encima del escritorio',
        fr: 'Sur le dessus du bureau',
        de: 'Oben auf dem Schreibtisch'
      },
      audioText: 'On top of the desk',
      audioId: 'en_a1_u02_l17_c_top_of_desk',
      context: 'Giving precise coordinates inside a room',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar Rules
  grammar: {
    patterns: [
      {
        id: 'g_prepositions_of_location_detailed',
        title: 'Prepositions of Location (next to, behind, in front of, opposite, above, under)',
        rule: 'Use prepositions of place to describe relative positions of objects. Note the three-word preposition "in front of" (never drop "of") and "next to" (never drop "to").',
        formula: '[Item] + is/are + [Preposition of Place] + the + [Reference Object]',
        examples: [
          { sentence: 'The remote control is on the coffee table in front of the sofa.', translation: 'रिमोट कंट्रोल सोफे के सामने कॉफ़ी टेबल पर है। / El mando está en la mesa de centro delante del sofá.', audioText: 'The remote control is on the coffee table in front of the sofa.', audioId: 'en_a1_u02_l17_g_ex1' },
          { sentence: 'The trash can is under the sink behind the door.', translation: 'कचरे का डिब्बा दरवाजे के पीछे सिंक के नीचे है। / La papelera está debajo del fregadero detrás de la puerta.', audioText: 'The trash can is under the sink behind the door.', audioId: 'en_a1_u02_l17_g_ex2' }
        ],
        explanationByLang: {
          hi: 'स्थान बताने के लिए "next to" (बगल में), "behind" (पीछे), "in front of" (सामने), "above" (ऊपर), "under" (नीचे) का प्रयोग करें। "in front of" में "of" और "next to" में "to" कभी न छोड़ें।',
          es: 'Preposiciones compuestas obligatorias: "in front of" (delante de, con "of") y "next to" (al lado de, con "to"). Nunca digas *in front the door* ni *next the bed*.'
        }
      },
      {
        id: 'g_where_questions_pronoun_responses',
        title: 'Locating Items: Where is...? / Where are...?',
        rule: 'Ask "Where is the...?" for singular items, and answer "It is + [Preposition]...". Ask "Where are the...?" for plural items, and answer "They are + [Preposition]...".',
        formula: 'Where is the + [Singular Noun]? -> It is + [Preposition Phrase]\nWhere are the + [Plural Noun]? -> They are + [Preposition Phrase]',
        examples: [
          { sentence: 'Where is the lamp? — It is on the bedside table.', translation: 'लैंप कहाँ है? — वह बेडसाइड टेबल पर है। / ¿Dónde está la lámpara? — Está en la mesita de noche.', audioText: 'Where is the lamp? It is on the bedside table.', audioId: 'en_a1_u02_l17_g_ex3' },
          { sentence: 'Where are my glasses? — They are next to the computer.', translation: 'मेरा चश्मा कहाँ है? — वह कंप्यूटर के बगल में है। / ¿Dónde están mis gafas? — Están al lado del ordenador.', audioText: 'Where are my glasses? They are next to the computer.', audioId: 'en_a1_u02_l17_g_ex4' }
        ],
        explanationByLang: {
          hi: 'एकवचन वस्तु के लिए "Where is..." पूछें और उत्तर "It is..." से दें। बहुवचन के लिए "Where are..." पूछें और उत्तर "They are..." से दें।',
          es: 'Preguntas con "Where": singular "Where is the...?" -> "It is..."; plural "Where are the...?" -> "They are...".'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_u02_l17_in_front_the',
      incorrect: 'The armchair is in front the window.',
      correct: 'The armchair is in front of the window.',
      whyExplanation: 'The preposition is "in front of". Do not omit "of".',
      explanationsByLang: {
        hi: '"in front" के बाद हमेशा "of" आता है: "in front of the window"।',
        es: 'La preposición completa es "in front of". No olvides el "of".',
        fr: 'La préposition exacte est "in front of". N\'oubliez pas "of".',
        de: 'Die vollständige Präposition heißt "in front of".'
      }
    },
    {
      id: 'cm_u02_l17_next_of',
      incorrect: 'The desk is next of the wardrobe.',
      correct: 'The desk is next to the wardrobe.',
      whyExplanation: 'Use "next to", NOT "next of".',
      explanationsByLang: {
        hi: '"next" के साथ हमेशा "to" आता है, "of" नहीं।',
        es: 'Se dice "next to", nunca "*next of*".',
        fr: 'On dit "next to", jamais "*next of*".',
        de: 'Es heißt "next to", niemals "*next of*".'
      }
    }
  ],

  // SECTION 11: Realistic Mini Dialogues
  dialogues: [
    {
      id: 'd_u02_l17_finding_items',
      title: 'Searching for Everyday Items',
      context: 'David is searching for his keys and glasses before leaving for work with his roommate Sara.',
      characters: [
        { id: 'char_david', name: 'David', role: 'Roommate' },
        { id: 'char_sara', name: 'Sara', role: 'Roommate' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_david',
          speakerName: 'David',
          text: 'Sara, have you seen my keys? Where did I put them?',
          translationsByLang: { hi: 'सारा, क्या तुमने मेरी चाबियां देखी हैं? मैंने उन्हें कहाँ रख दिया?', es: 'Sara, ¿has visto mis llaves? ¿Dónde las habré puesto?' },
          audioText: 'Sara, have you seen my keys? Where did I put them?',
          audioId: 'en_a1_u02_l17_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_sara',
          speakerName: 'Sara',
          text: 'They are right over there on the desk, next to your laptop.',
          translationsByLang: { hi: 'वे ठीक वहीं डेस्क पर हैं, तुम्हारे लैपटॉप के बगल में।', es: 'Están justo allí en el escritorio, al lado de tu portátil.' },
          audioText: 'They are right over there on the desk, next to your laptop.',
          audioId: 'en_a1_u02_l17_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_david',
          speakerName: 'David',
          text: 'Great, thank you! And where are my reading glasses?',
          translationsByLang: { hi: 'बहुत बढ़िया, धन्यवाद! और मेरा पढ़ने वाला चश्मा कहाँ है?', es: '¡Genial, gracias! ¿Y dónde están mis gafas de lectura?' },
          audioText: 'Great, thank you! And where are my reading glasses?',
          audioId: 'en_a1_u02_l17_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_sara',
          speakerName: 'Sara',
          text: 'They are on the bookshelf, behind the small lamp.',
          translationsByLang: { hi: 'वे किताबों की अलमारी पर हैं, छोटे लैंप के पीछे।', es: 'Están en la estantería, detrás de la lámpara pequeña.' },
          audioText: 'They are on the bookshelf, behind the small lamp.',
          audioId: 'en_a1_u02_l17_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_david',
          speakerName: 'David',
          text: 'Found them! Thanks a lot, Sara. Have a wonderful day at work!',
          translationsByLang: { hi: 'मिल गए! बहुत-बहुत धन्यवाद, सारा। काम पर तुम्हारा दिन शानदार रहे!', es: '¡Encontradas! Muchas gracias, Sara. ¡Que tengas un día estupendo en el trabajo!' },
          audioText: 'Found them! Thanks a lot, Sara. Have a wonderful day at work!',
          audioId: 'en_a1_u02_l17_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15: Practice Exercises (15 items)
  practiceExercises: [
    {
      id: 'ex_u02_l17_p1',
      lessonId: 'lesson_a1_2_17',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct preposition meaning "directly beside":',
      sourceSentence: 'The lamp is ___ the bed.',
      options: [
        { id: 'o1', text: 'next to', isCorrect: true },
        { id: 'o2', text: 'next of', isCorrect: false },
        { id: 'o3', text: 'in to', isCorrect: false }
      ],
      explanation: '"next to" is the correct standard preposition.'
    },
    {
      id: 'ex_u02_l17_p2',
      lessonId: 'lesson_a1_2_17',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Complete the preposition phrase:',
      sourceSentence: 'There is a comfortable armchair in front ___ the television.',
      options: [
        { id: 'o1', text: 'of', isCorrect: true },
        { id: 'o2', text: 'to', isCorrect: false },
        { id: 'o3', text: 'at', isCorrect: false }
      ],
      explanation: 'The full phrase is "in front of".'
    },
    {
      id: 'ex_u02_l17_p3',
      lessonId: 'lesson_a1_2_17',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Arrange the sentence describing object position:',
      targetSentence: 'My keys are on the desk behind the lamp',
      wordBank: ['My', 'keys', 'are', 'on', 'the', 'desk', 'behind', 'the', 'lamp', 'is', 'under']
    },
    {
      id: 'ex_u02_l17_p4',
      lessonId: 'lesson_a1_2_17',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the instruction:',
      audioText: 'The remote control is inside the drawer under the television',
      options: [
        { id: 'o1', text: 'The remote control is inside the drawer under the television', isCorrect: true },
        { id: 'o2', text: 'The keys are on top of the desk under the lamp', isCorrect: false },
        { id: 'o3', text: 'The clock is on the bookshelf next to the television', isCorrect: false }
      ],
      explanation: 'The audio specifies "inside the drawer under the television".'
    },
    {
      id: 'ex_u02_l17_p5',
      lessonId: 'lesson_a1_2_17',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and write the sentence:',
      audioText: 'Where are my glasses please',
      targetSentence: 'Where are my glasses please'
    },
    {
      id: 'ex_u02_l17_p6',
      lessonId: 'lesson_a1_2_17',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Build the question asking for location:',
      targetSentence: 'Where is the microwave in the kitchen',
      wordBank: ['Where', 'is', 'the', 'microwave', 'in', 'the', 'kitchen', 'Are', 'does']
    },
    {
      id: 'ex_u02_l17_p7',
      lessonId: 'lesson_a1_2_17',
      stage: 12,
      type: 'speaking',
      prompt: 'Read this sentence clearly into your microphone:',
      targetSentence: 'There is a big mirror above the bathroom sink.',
      audioText: 'There is a big mirror above the bathroom sink.'
    },
    {
      id: 'ex_u02_l17_p8',
      lessonId: 'lesson_a1_2_17',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'मेरी चाबियां लैपटॉप के बगल में मेज पर हैं।',
      sourceTranslations: {
        hi: 'मेरी चाबियां लैपटॉप के बगल में मेज पर हैं।',
        es: 'Mis llaves están en la mesa al lado del portátil.'
      },
      targetSentence: 'My keys are on the table next to the laptop',
      wordBank: ['My', 'keys', 'are', 'on', 'the', 'table', 'next', 'to', 'the', 'laptop', 'is', 'under']
    },
    {
      id: 'ex_u02_l17_p9',
      lessonId: 'lesson_a1_2_17',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Unit 1 Demonstratives & Furniture):',
      sourceSentence: '___ armchairs in the living room are very comfortable.',
      options: [
        { id: 'o1', text: 'These', isCorrect: true },
        { id: 'o2', text: 'This', isCorrect: false },
        { id: 'o3', text: 'That', isCorrect: false }
      ],
      explanation: '"These" is the plural demonstrative agreeing with "armchairs".'
    },
    {
      id: 'ex_u02_l17_p10',
      lessonId: 'lesson_a1_2_17',
      stage: 15,
      type: 'error_correction',
      prompt: 'Correct the preposition error:',
      sourceSentence: 'The sofa is opposite to the television.',
      options: [
        { id: 'o1', text: 'The sofa is opposite the television.', isCorrect: true },
        { id: 'o2', text: 'The sofa is opposite of the television.', isCorrect: false },
        { id: 'o3', text: 'The sofa is opposite at the television.', isCorrect: false }
      ],
      explanation: '"opposite" does not take "to" when used as a preposition of place.'
    },
    {
      id: 'ex_u02_l17_p11',
      lessonId: 'lesson_a1_2_17',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Select the correct plural response:',
      sourceSentence: 'Person A: "Where are my coats?" -> Person B: "___"',
      options: [
        { id: 'o1', text: 'They are inside the wardrobe in the hallway.', isCorrect: true },
        { id: 'o2', text: 'It is inside the microwave.', isCorrect: false },
        { id: 'o3', text: 'She is in the bathroom.', isCorrect: false }
      ],
      explanation: '"They are..." correctly refers back to plural "coats".'
    },
    {
      id: 'ex_u02_l17_p12',
      lessonId: 'lesson_a1_2_17',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which word means a soft head cushion used on a bed?',
      sourceSentence: 'Vocabulary check:',
      options: [
        { id: 'o1', text: 'pillow', isCorrect: true },
        { id: 'o2', text: 'shelf', isCorrect: false },
        { id: 'o3', text: 'mirror', isCorrect: false }
      ],
      explanation: '"pillow" is a head cushion for sleeping.'
    },
    {
      id: 'ex_u02_l17_p13',
      lessonId: 'lesson_a1_2_17',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the correct preposition: "The vintage clock is on the wall ___ the fireplace."',
      sourceSentence: 'Preposition of vertical position:',
      options: [
        { id: 'o1', text: 'above', isCorrect: true },
        { id: 'o2', text: 'under', isCorrect: false },
        { id: 'o3', text: 'between', isCorrect: false }
      ],
      explanation: '"above" means in a higher position on the wall.'
    },
    {
      id: 'ex_u02_l17_p14',
      lessonId: 'lesson_a1_2_17',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the sentence:',
      targetSentence: 'There is a soft grey rug under the table',
      wordBank: ['There', 'is', 'a', 'soft', 'grey', 'rug', 'under', 'the', 'table', 'are', 'on']
    },
    {
      id: 'ex_u02_l17_p15',
      lessonId: 'lesson_a1_2_17',
      stage: 12,
      type: 'speaking',
      prompt: 'Speak this sentence clearly into your microphone:',
      targetSentence: 'The trash can is under the kitchen sink.',
      audioText: 'The trash can is under the kitchen sink.'
    }
  ],

  // SECTION 16: Review Exercises (4 items)
  reviewExercises: [
    {
      id: 'ex_u02_l17_rev1',
      lessonId: 'lesson_a1_2_17',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      sourceSentence: 'Grammar review:',
      options: [
        { id: 'o1', text: 'The armchair is in front of the window.', isCorrect: true },
        { id: 'o2', text: 'The armchair is in front the window.', isCorrect: false },
        { id: 'o3', text: 'The armchair is in front to the window.', isCorrect: false }
      ],
      explanation: 'Use "in front of".'
    },
    {
      id: 'ex_u02_l17_rev2',
      lessonId: 'lesson_a1_2_17',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Fill in the correct pronoun and verb:',
      sourceSentence: '"Where are my shoes?" — "___ under the bed."',
      options: [
        { id: 'o1', text: 'They are', isCorrect: true },
        { id: 'o2', text: 'It is', isCorrect: false },
        { id: 'o3', text: 'There is', isCorrect: false }
      ],
      explanation: 'Use "They are" for plural "shoes".'
    },
    {
      id: 'ex_u02_l17_rev3',
      lessonId: 'lesson_a1_2_17',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Build the sentence:',
      targetSentence: 'The bookshelf is next to the wardrobe',
      wordBank: ['The', 'bookshelf', 'is', 'next', 'to', 'the', 'wardrobe', 'of', 'are']
    },
    {
      id: 'ex_u02_l17_rev4',
      lessonId: 'lesson_a1_2_17',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'रिमोट कंट्रोल सोफे पर तकिए के पीछे है।',
      sourceTranslations: { hi: 'रिमोट कंट्रोल सोफे पर तकिए के पीछे है।', es: 'El mando está en el sofá detrás del cojín.' },
      targetSentence: 'The remote control is on the sofa behind the pillow',
      wordBank: ['The', 'remote', 'control', 'is', 'on', 'the', 'sofa', 'behind', 'the', 'pillow', 'under', 'are']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l17_a1',
      lessonId: 'lesson_a1_2_17',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct preposition: "The bedside lamp is ___ the bed."',
      sourceSentence: 'Location test:',
      options: [
        { id: 'o1', text: 'next to', isCorrect: true },
        { id: 'o2', text: 'next of', isCorrect: false },
        { id: 'o3', text: 'between', isCorrect: false },
        { id: 'o4', text: 'under of', isCorrect: false }
      ],
      explanation: '"next to" expresses adjacency.'
    },
    {
      id: 'ex_u02_l17_a2',
      lessonId: 'lesson_a1_2_17',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Select the missing word in the three-word preposition:',
      sourceSentence: 'There is a coffee table in front ___ the sofa.',
      options: [
        { id: 'o1', text: 'of', isCorrect: true },
        { id: 'o2', text: 'to', isCorrect: false },
        { id: 'o3', text: 'at', isCorrect: false },
        { id: 'o4', text: 'for', isCorrect: false }
      ],
      explanation: 'Use "in front of".'
    },
    {
      id: 'ex_u02_l17_a3',
      lessonId: 'lesson_a1_2_17',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Build the question:',
      targetSentence: 'Where did you put my house keys',
      wordBank: ['Where', 'did', 'you', 'put', 'my', 'house', 'keys', 'are', 'is']
    },
    {
      id: 'ex_u02_l17_a4',
      lessonId: 'lesson_a1_2_17',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the error:',
      sourceSentence: 'The painting is in the wall above the desk.',
      options: [
        { id: 'o1', text: 'The painting is on the wall above the desk.', isCorrect: true },
        { id: 'o2', text: 'The painting is at the wall above the desk.', isCorrect: false },
        { id: 'o3', text: 'The painting is under the wall above the desk.', isCorrect: false }
      ],
      explanation: 'Things hang "on the wall", not "in the wall".'
    },
    {
      id: 'ex_u02_l17_a5',
      lessonId: 'lesson_a1_2_17',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the speaker says:',
      audioText: 'The clean towels are inside the wardrobe on the top shelf',
      options: [
        { id: 'o1', text: 'The clean towels are inside the wardrobe on the top shelf', isCorrect: true },
        { id: 'o2', text: 'The clean towels are under the sink in the bathroom', isCorrect: false },
        { id: 'o3', text: 'The clean blankets are on top of the desk in the bedroom', isCorrect: false }
      ],
      explanation: 'The audio specifies "inside the wardrobe on the top shelf".'
    },
    {
      id: 'ex_u02_l17_a6',
      lessonId: 'lesson_a1_2_17',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe the sentence accurately:',
      audioText: 'They are right over there on the kitchen table',
      targetSentence: 'They are right over there on the kitchen table'
    },
    {
      id: 'ex_u02_l17_a7',
      lessonId: 'lesson_a1_2_17',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best response:',
      sourceSentence: 'Person A: "Where is the microwave?" -> Person B: "___"',
      options: [
        { id: 'o1', text: 'It is on the kitchen counter next to the fridge.', isCorrect: true },
        { id: 'o2', text: 'I am an architect.', isCorrect: false },
        { id: 'o3', text: 'They are three brothers.', isCorrect: false }
      ],
      explanation: 'Provides clear location for the microwave.'
    },
    {
      id: 'ex_u02_l17_a8',
      lessonId: 'lesson_a1_2_17',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'घड़ी टेलीविजन के ऊपर दीवार पर है।',
      sourceTranslations: { hi: 'घड़ी टेलीविजन के ऊपर दीवार पर है।', es: 'El reloj está en la pared encima del televisor.' },
      targetSentence: 'The clock is on the wall above the television',
      wordBank: ['The', 'clock', 'is', 'on', 'the', 'wall', 'above', 'the', 'television', 'under', 'are']
    },
    {
      id: 'ex_u02_l17_a9',
      lessonId: 'lesson_a1_2_17',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which noun refers to a large tall cupboard for hanging coats and clothes?',
      sourceSentence: 'Noun definition:',
      options: [
        { id: 'o1', text: 'wardrobe / closet', isCorrect: true },
        { id: 'o2', text: 'pillow', isCorrect: false },
        { id: 'o3', text: 'mirror', isCorrect: false },
        { id: 'o4', text: 'blanket', isCorrect: false }
      ],
      explanation: 'A wardrobe or closet stores clothes.'
    },
    {
      id: 'ex_u02_l17_a10',
      lessonId: 'lesson_a1_2_17',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final sentence:',
      targetSentence: 'There is a green houseplant next to the desk',
      wordBank: ['There', 'is', 'a', 'green', 'houseplant', 'next', 'to', 'the', 'desk', 'are', 'of']
    }
  ]
};
