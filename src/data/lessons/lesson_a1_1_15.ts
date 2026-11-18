import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_15_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_15',
  unitId: 'unit_a1_1',
  title: 'Abilities, Skills & Polite Requests (Can / Can\'t)',
  cefr: 'A1',
  icon: '⚡',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Modal Verb Can/Can\'t for Ability, Skill & Polite Requests',
    description: 'Master the modal verb "can" and "can\'t" for expressing physical and mental abilities, asking for permission/help, stating proficiency levels (fluently, very well, a little), and understanding modal grammar rules (no 3rd-person "-s", no "do/does" auxiliaries).',
    descriptionsByLang: {
      hi: 'शारीरिक और मानसिक क्षमताओं (Abilities), कौशल (Skills), और विनम्र निवेदनों (Requests) के लिए Modal Verb "Can" और "Can\'t" का प्रयोग सीखें। समझें कि "Can" के साथ 3rd person में "-s" नहीं लगता और प्रश्न में "Do/Does" की आवश्यकता नहीं होती।',
      es: 'Domina el verbo modal "can" y "can\'t" para expresar habilidades físicas y mentales, pedir ayuda o permiso, y describir niveles de destreza (fluently, very well, a little) sin usar auxiliares do/does ni "-s" de 3ª persona.',
      fr: 'Maîtrisez le verbe modal "can" et "can\'t" pour exprimer les capacités, compétences et demandes polies.',
      de: 'Beherrschen Sie das Modalverb "can" und "can\'t" für Fähigkeiten, Fertigkeiten und höfliche Bitten.',
      pt: 'Domine o verbo modal "can" e "can\'t" para expressar habilidades, competências e pedidos educados.',
      zh: '掌握情态动词 can / can\'t 表达能力、技能和礼貌请求的用法，牢记情态动词第三人称单数不加 -s 且不借用助动词 do/does 的核心语法规则。',
      ar: 'أتقن استخدام الفعل المساعد can و can\'t للتعبير عن القدرات والمهارات والطلبات المهذبة.',
      ja: '能力・技能・丁寧な依頼を表す助動詞 can / can\'t の用法と、3人称単数の-sやdo/doesが不要である文法規則を学びます。',
      ru: 'Освойте модальный глагол can / can\'t для выражения способностей, навыков и вежливых просьб.'
    },
    canDoStatements: [
      'Express personal physical and intellectual abilities using "I can..." and "I can\'t..."',
      'Ask others about their abilities: "Can you speak Spanish?", "Can you drive a car?"',
      'Make polite requests: "Can you help me, please?" and ask for permission: "Can I sit here?"',
      'Use adverbs of manner/degree: fluently, very well, well, a little bit, fast, slowly',
      'Apply modal verb syntax: NEVER add "-s" to can (no "he cans") and NEVER use "do" (no "Do you can...?")'
    ],
    canDoByLang: {
      hi: [
        'अपनी क्षमताओं और कौशल को "I can..." और "I can\'t..." से व्यक्त करना',
        'दूसरों से उनकी क्षमताओं के बारे में पूछना: "Can you swim?", "Can you drive?"',
        'विनम्र निवेदन करना: "Can you help me, please?"',
        'कौशल की डिग्री बताना: very well, a little, fluently'
      ],
      es: [
        'Expresar habilidades con "I can" y "I can\'t"',
        'Hacer preguntas de habilidad y peticiones educadas con "Can you...?"',
        'Usar adverbios de grado: very well, a little, fluently'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_can_can',
      word: 'can',
      phonetic: '/kæn/',
      meaning: 'Modal verb expressing ability, opportunity, or permission',
      translationsByLang: { hi: 'सकना / समर्थ होना', es: 'poder / saber (hacer)', fr: 'pouvoir / savoir faire', de: 'können', pt: 'poder / saber fazer', zh: '能 / 可以 / 会', ar: 'يستطيع / يمكنه', ja: '〜できる', ru: 'мочь / уметь' },
      exampleSentence: 'I can speak two languages.',
      exampleTranslationByLang: { hi: 'मैं दो भाषाएं बोल सकता हूँ।', es: 'Puedo hablar dos idiomas.' },
      audioText: 'can',
      audioId: 'en_a1_u01_l15_v_can',
      slowAudioId: 'en_a1_u01_l15_v_can_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_cant',
      word: 'cannot / can\'t',
      phonetic: '/kænt/',
      meaning: 'Modal verb expressing inability or lack of permission',
      translationsByLang: { hi: 'नहीं सकना / असमर्थ होना', es: 'no poder / no saber', fr: 'ne pas pouvoir', de: 'nicht können', pt: 'não poder / não saber', zh: '不能 / 不会', ar: 'لا يستطيع', ja: '〜できない', ru: 'не мочь / не уметь' },
      exampleSentence: 'He can\'t swim in deep water.',
      exampleTranslationByLang: { hi: 'वह गहरे पानी में तैर नहीं सकता।', es: 'Él no sabe nadar en aguas profundas.' },
      audioText: 'cannot and can\'t',
      audioId: 'en_a1_u01_l15_v_cant',
      slowAudioId: 'en_a1_u01_l15_v_cant_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚫',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_drive_car',
      word: 'drive a car',
      phonetic: '/draɪv ə kɑːr/',
      meaning: 'To operate and control the direction and speed of a motor vehicle',
      translationsByLang: { hi: 'कार चलाना / गाड़ी चलाना', es: 'conducir un coche / manejar un auto', fr: 'conduire une voiture', de: 'Auto fahren', pt: 'dirigir um carro', zh: '开车 / 驾驶汽车', ar: 'يقود سيارة', ja: '車を運転する', ru: 'водить машину' },
      exampleSentence: 'Can you drive a car?',
      exampleTranslationByLang: { hi: 'क्या आप कार चला सकते हैं?', es: '¿Sabes conducir un coche?' },
      audioText: 'drive a car',
      audioId: 'en_a1_u01_l15_v_drive_car',
      slowAudioId: 'en_a1_u01_l15_v_drive_car_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_ride_bike',
      word: 'ride a bicycle',
      phonetic: '/raɪd ə ˈbaɪ.sə.kəl/',
      meaning: 'To sit on and control a bicycle',
      translationsByLang: { hi: 'साइकिल चलाना', es: 'montar en bicicleta / andar en bici', fr: 'faire du vélo', de: 'Fahrrad fahren', pt: 'andar de bicicleta', zh: '骑自行车', ar: 'يركب دراجة', ja: '自転車に乗る', ru: 'кататься на велосипеде' },
      exampleSentence: 'She can ride a bicycle very well.',
      exampleTranslationByLang: { hi: 'वह बहुत अच्छी तरह से साइकिल चला सकती है।', es: 'Ella sabe montar en bicicleta muy bien.' },
      audioText: 'ride a bicycle',
      audioId: 'en_a1_u01_l15_v_ride_bike',
      slowAudioId: 'en_a1_u01_l15_v_ride_bike_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚲',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_play_piano',
      word: 'play the piano',
      phonetic: '/pleɪ ðə piˈæn.oʊ/',
      meaning: 'To perform music on a acoustic or digital keyboard',
      translationsByLang: { hi: 'पियानो बजाना', es: 'tocar el piano', fr: 'jouer du piano', de: 'Klavier spielen', pt: 'tocar piano', zh: '弹钢琴', ar: 'يعزف على البيانو', ja: 'ピアノを弾く', ru: 'играть на пианино' },
      exampleSentence: 'He can play the piano beautifully.',
      exampleTranslationByLang: { hi: 'वह बहुत खूबसूरती से पियानो बजा सकता है।', es: 'Él sabe tocar el piano de maravilla.' },
      audioText: 'play the piano',
      audioId: 'en_a1_u01_l15_v_play_piano',
      slowAudioId: 'en_a1_u01_l15_v_play_piano_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎹',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_use_computer',
      word: 'use a computer',
      phonetic: '/juːz ə kəmˈpjuː.t̬ɚ/',
      meaning: 'To operate software and digital devices',
      translationsByLang: { hi: 'कंप्यूटर का उपयोग करना', es: 'usar un ordenador / usar una computadora', fr: 'utiliser un ordinateur', de: 'einen Computer bedienen', pt: 'usar um computador', zh: '使用电脑', ar: 'يستخدم الحاسوب', ja: 'パソコンを使う', ru: 'пользоваться компьютером' },
      exampleSentence: 'All our students can use a computer.',
      exampleTranslationByLang: { hi: 'हमारे सभी छात्र कंप्यूटर का उपयोग कर सकते हैं।', es: 'Todos nuestros alumnos saben usar un ordenador.' },
      audioText: 'use a computer',
      audioId: 'en_a1_u01_l15_v_use_computer',
      slowAudioId: 'en_a1_u01_l15_v_use_computer_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💻',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_sing',
      word: 'sing',
      phonetic: '/sɪŋ/',
      meaning: 'To produce musical sounds with the voice',
      translationsByLang: { hi: 'गाना गाना / गायन करना', es: 'cantar', fr: 'chanter', de: 'singen', pt: 'cantar', zh: '唱歌', ar: 'يغني', ja: '歌う', ru: 'петь' },
      exampleSentence: 'Can you sing English songs?',
      exampleTranslationByLang: { hi: 'क्या आप अंग्रेजी गाने गा सकते हैं?', es: '¿Sabes cantar canciones en inglés?' },
      audioText: 'sing',
      audioId: 'en_a1_u01_l15_v_sing',
      slowAudioId: 'en_a1_u01_l15_v_sing_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎤',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_paint',
      word: 'paint',
      phonetic: '/peɪnt/',
      meaning: 'To create artistic pictures with brushes and pigment colors',
      translationsByLang: { hi: 'चित्रकारी करना / पेंट करना', es: 'pintar', fr: 'peindre', de: 'malen', pt: 'pintar', zh: '画画 / 绘画', ar: 'يرسم بالألوان', ja: '絵の具で描く / ペイントする', ru: 'рисовать красками' },
      exampleSentence: 'My sister can paint realistic portraits.',
      exampleTranslationByLang: { hi: 'मेरी बहन यथार्थवादी चित्र बना सकती है।', es: 'Mi hermana sabe pintar retratos realistas.' },
      audioText: 'paint',
      audioId: 'en_a1_u01_l15_v_paint',
      slowAudioId: 'en_a1_u01_l15_v_paint_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎨',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_help',
      word: 'help',
      phonetic: '/help/',
      meaning: 'To assist or make it easier for someone to do something',
      translationsByLang: { hi: 'मदद करना / सहायता करना', es: 'ayudar', fr: 'aider', de: 'helfen', pt: 'ajudar', zh: '帮助 / 帮忙', ar: 'يساعد', ja: '手伝う / 助ける', ru: 'помогать' },
      exampleSentence: 'Can you help me with this heavy box, please?',
      exampleTranslationByLang: { hi: 'क्या आप इस भारी बक्से में मेरी मदद कर सकते हैं, कृपया?', es: '¿Puedes ayudarme con esta caja pesada, por favor?' },
      audioText: 'help',
      audioId: 'en_a1_u01_l15_v_help',
      slowAudioId: 'en_a1_u01_l15_v_help_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤝',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_skill',
      word: 'skill',
      phonetic: '/skɪl/',
      meaning: 'The ability to do something well, usually gained through training',
      translationsByLang: { hi: 'कौशल / हुनर', es: 'habilidad / destreza', fr: 'compétence / habileté', de: 'Fähigkeit / Fertigkeit', pt: 'habilidade / competência', zh: '技能 / 技艺', ar: 'مهارة', ja: 'スキル / 技術', ru: 'навык / умение' },
      exampleSentence: 'Speaking languages is a useful job skill.',
      exampleTranslationByLang: { hi: 'भाषाएँ बोलना नौकरी के लिए एक उपयोगी कौशल है।', es: 'Hablar idiomas es una habilidad laboral muy útil.' },
      audioText: 'skill',
      audioId: 'en_a1_u01_l15_v_skill',
      slowAudioId: 'en_a1_u01_l15_v_skill_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⭐',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adv_fluently',
      word: 'fluently',
      phonetic: '/ˈfluː.ənt.li/',
      meaning: 'Speaking a language easily, smoothly, and accurately',
      translationsByLang: { hi: 'धाराप्रवाह रूप से / फर्राटेदार', es: 'con fluidez / fluidamente', fr: 'couramment', de: 'fließend', pt: 'fluentemente', zh: '流利地', ar: 'بطلاقة', ja: '流暢に / スラスラと', ru: 'бегло / свободно' },
      exampleSentence: 'She can speak Spanish fluently.',
      exampleTranslationByLang: { hi: 'वह धाराप्रवाह स्पेनिश बोल सकती है।', es: 'Ella puede hablar español con fluidez.' },
      audioText: 'fluently',
      audioId: 'en_a1_u01_l15_v_fluently',
      slowAudioId: 'en_a1_u01_l15_v_fluently_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗣️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adv_very_well',
      word: 'very well',
      phonetic: '/ˈver.i wel/',
      meaning: 'With a high degree of quality or skill',
      translationsByLang: { hi: 'बहुत अच्छी तरह से', es: 'muy bien', fr: 'très bien', de: 'sehr gut', pt: 'muito bem', zh: '非常好地', ar: 'جيداً جداً', ja: 'とても上手に', ru: 'очень хорошо' },
      exampleSentence: 'He can cook Italian pasta very well.',
      exampleTranslationByLang: { hi: 'वह इतालवी पास्ता बहुत अच्छी तरह बना सकता है।', es: 'Él sabe cocinar pasta italiana muy bien.' },
      audioText: 'very well',
      audioId: 'en_a1_u01_l15_v_very_well',
      slowAudioId: 'en_a1_u01_l15_v_very_well_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌟',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adv_well',
      word: 'well',
      phonetic: '/wel/',
      meaning: 'In a good, competent, or satisfactory manner',
      translationsByLang: { hi: 'अच्छी तरह से', es: 'bien', fr: 'bien', de: 'gut', pt: 'bem', zh: '好地', ar: 'جيداً', ja: '上手に / よく', ru: 'хорошо' },
      exampleSentence: 'I can swim well.',
      exampleTranslationByLang: { hi: 'मैं अच्छी तरह तैर सकता हूँ।', es: 'Sé nadar bien.' },
      audioText: 'well',
      audioId: 'en_a1_u01_l15_v_well',
      slowAudioId: 'en_a1_u01_l15_v_well_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👍',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adv_a_little',
      word: 'a little',
      phonetic: '/ə ˈlɪt̬.əl/',
      meaning: 'To a small degree or limited amount',
      translationsByLang: { hi: 'थोड़ा सा / थोड़ी मात्रा में', es: 'un poco', fr: 'un peu', de: 'ein bisschen', pt: 'um pouco', zh: '一点点 / 少许', ar: 'قليلاً', ja: '少し / ちょっと', ru: 'немного / чуть-чуть' },
      exampleSentence: 'I can speak a little German.',
      exampleTranslationByLang: { hi: 'मैं थोड़ी जर्मन बोल सकता हूँ।', es: 'Sé hablar un poco de alemán.' },
      audioText: 'a little',
      audioId: 'en_a1_u01_l15_v_a_little',
      slowAudioId: 'en_a1_u01_l15_v_a_little_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤏',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adv_fast',
      word: 'fast',
      phonetic: '/fæst/',
      meaning: 'Moving or operating at high speed',
      translationsByLang: { hi: 'तेज़ / तेज़ी से', es: 'rápido', fr: 'vite / rapidement', de: 'schnell', pt: 'rápido', zh: '快 / 快速地', ar: 'بسرعة', ja: '速く', ru: 'быстро' },
      exampleSentence: 'He can run very fast.',
      exampleTranslationByLang: { hi: 'वह बहुत तेज़ दौड़ सकता है।', es: 'Él puede correr muy rápido.' },
      audioText: 'fast',
      audioId: 'en_a1_u01_l15_v_fast',
      slowAudioId: 'en_a1_u01_l15_v_fast_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚡',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adv_slowly',
      word: 'slowly',
      phonetic: '/ˈsloʊ.li/',
      meaning: 'At a low pace; not quickly',
      translationsByLang: { hi: 'धीरे-धीरे / मंद गति से', es: 'despacio / lentamente', fr: 'lentement', de: 'langsam', pt: 'devagar / lentamente', zh: '慢地 / 缓慢地', ar: 'ببطء', ja: 'ゆっくりと', ru: 'медленно' },
      exampleSentence: 'Can you speak more slowly, please?',
      exampleTranslationByLang: { hi: 'क्या आप कृपया थोड़ा और धीरे बोल सकते हैं?', es: '¿Puede hablar más despacio, por favor?' },
      audioText: 'slowly',
      audioId: 'en_a1_u01_l15_v_slowly',
      slowAudioId: 'en_a1_u01_l15_v_slowly_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🐢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_remember',
      word: 'remember',
      phonetic: '/rɪˈmem.bɚ/',
      meaning: 'To retain and bring information back to mind',
      translationsByLang: { hi: 'याद रखना / स्मरण करना', es: 'recordar', fr: 'se souvenir / retenir', de: 'sich erinnern / merken', pt: 'lembrar', zh: '记住 / 记得', ar: 'يتذكر', ja: '覚えている / 思い出す', ru: 'помнить / вспоминать' },
      exampleSentence: 'I can remember all the new English words.',
      exampleTranslationByLang: { hi: 'मैं सभी नए अंग्रेजी शब्द याद रख सकता हूँ।', es: 'Puedo recordar todas las palabras nuevas en inglés.' },
      audioText: 'remember',
      audioId: 'en_a1_u01_l15_v_remember',
      slowAudioId: 'en_a1_u01_l15_v_remember_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧠',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_forget',
      word: 'forget',
      phonetic: '/fɚˈɡet/',
      meaning: 'To fail to remember or recall',
      translationsByLang: { hi: 'भूल जाना / विस्मृत होना', es: 'olvidar', fr: 'oublier', de: 'vergessen', pt: 'esquecer', zh: '忘记', ar: 'ينسى', ja: '忘れる', ru: 'забывать' },
      exampleSentence: 'Don\'t forget your passport and ticket!',
      exampleTranslationByLang: { hi: 'अपना पासपोर्ट और टिकट मत भूलना!', es: '¡No olvides tu pasaporte y billete!' },
      audioText: 'forget',
      audioId: 'en_a1_u01_l15_v_forget',
      slowAudioId: 'en_a1_u01_l15_v_forget_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💭',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_possible',
      word: 'possible',
      phonetic: '/ˈpɑː.sə.bəl/',
      meaning: 'Able to be done or achieved',
      translationsByLang: { hi: 'संभव / मुमकिन', es: 'posible', fr: 'possible', de: 'möglich', pt: 'possível', zh: '可能的', ar: 'ممكن', ja: '可能な', ru: 'возможный' },
      exampleSentence: 'Is it possible to visit the museum today?',
      exampleTranslationByLang: { hi: 'क्या आज संग्रहालय जाना संभव है?', es: '¿Es posible visitar el museo hoy?' },
      audioText: 'possible',
      audioId: 'en_a1_u01_l15_v_possible',
      slowAudioId: 'en_a1_u01_l15_v_possible_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔓',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_can_swim_well',
      word: 'swim',
      phonetic: '/swɪm/',
      meaning: 'To propel oneself through water (ability verb)',
      translationsByLang: { hi: 'तैरना', es: 'nadar', fr: 'nager', de: 'schwimmen', pt: 'nadar', zh: '游泳', ar: 'يسبح', ja: '泳ぐ', ru: 'плавать' },
      exampleSentence: 'Can you swim across the river?',
      exampleTranslationByLang: { hi: 'क्या आप नदी के पार तैर सकते हैं?', es: '¿Puedes cruzar el río nadando?' },
      audioText: 'swim',
      audioId: 'en_a1_u01_l15_v_swim_ability',
      slowAudioId: 'en_a1_u01_l15_v_swim_ability_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏊',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_can_you_help_me',
      text: 'Can you help me, please?',
      meaning: 'Polite request asking for assistance',
      translationsByLang: {
        hi: 'क्या आप मेरी मदद कर सकते हैं, कृपया?',
        es: '¿Puedes ayudarme, por favor?',
        fr: 'Pouvez-vous m\'aider, s\'il vous plaît ?',
        de: 'Können Sie mir bitte helfen?'
      },
      audioText: 'Can you help me, please?',
      audioId: 'en_a1_u01_l15_c_help_me',
      context: 'Universal emergency and everyday assistance request',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_speak_little_eng',
      text: 'I can speak a little English.',
      meaning: 'Modest self-statement of language proficiency',
      translationsByLang: {
        hi: 'मैं थोड़ी अंग्रेजी बोल सकता हूँ।',
        es: 'Puedo hablar un poco de inglés.',
        fr: 'Je parle un peu anglais.',
        de: 'Ich kann ein bisschen Englisch sprechen.'
      },
      audioText: 'I can speak a little English.',
      audioId: 'en_a1_u01_l15_c_little_english',
      context: 'Meeting native speakers and practical travel',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_can_you_drive',
      text: 'Can you drive a car?',
      meaning: 'Asking if someone holds a driving license / practical skill',
      translationsByLang: {
        hi: 'क्या आप कार चला सकते हैं?',
        es: '¿Sabes conducir un coche?',
        fr: 'Savez-vous conduire une voiture ?',
        de: 'Können Sie Auto fahren?'
      },
      audioText: 'Can you drive a car?',
      audioId: 'en_a1_u01_l15_c_can_drive',
      context: 'Job applications and travel trip planning',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar
  grammar: {
    patterns: [
      {
        id: 'g_modal_can_affirmative_negative',
        title: 'Modal Verb Can & Can\'t (Affirmative & Negative)',
        rule: 'The modal verb "can" is identical for all persons (I, you, he, she, it, we, they). NEVER add "-s" to "can" for 3rd person singular (he can, NOT *he cans*). It is always followed by the base form of the main verb.',
        formula: 'Subject + can / can\'t (cannot) + [Base Verb]',
        examples: [
          { sentence: 'She can speak three languages fluently.', translation: 'वह धाराप्रवाह तीन भाषाएँ बोल सकती है। / Ella puede hablar tres idiomas con fluidez.', audioText: 'She can speak three languages fluently.', audioId: 'en_a1_u01_l15_g_ex1' },
          { sentence: 'I can\'t drive a car, but I can ride a bicycle.', translation: 'मैं कार नहीं चला सकता, पर साइकिल चला सकता हूँ। / No sé conducir un coche, pero sé andar en bici.', audioText: 'I can\'t drive a car, but I can ride a bicycle.', audioId: 'en_a1_u01_l15_g_ex2' }
        ],
        explanationByLang: {
          hi: 'Modal verb "can" सभी कर्ताओं (I, you, he, she, we, they) के साथ एक समान रहता है। He/she के साथ भी "can" ही रहेगा, "cans" नहीं। इसके बाद हमेशा क्रिया का मूल रूप आता है।',
          es: 'El verbo modal "can" es invariable para todas las personas: nunca lleva "-s" (he can, no *he cans*). Va seguido de la forma base del verbo.'
        }
      },
      {
        id: 'g_modal_can_questions_short_answers',
        title: 'Can Questions & Short Answers',
        rule: 'Invert the subject and "Can" to form questions: Can + Subject + Base Verb? NEVER use "Do/Does" with "Can". Short answers: Yes, I can / No, I can\'t.',
        formula: 'Can + [Subject] + [Base Verb]...? -> Yes, [Subject] can. | No, [Subject] can\'t.',
        examples: [
          { sentence: 'Can you swim? — Yes, I can.', translation: 'क्या आप तैर सकते हैं? — हाँ, तैर सकता हूँ। / ¿Sabes nadar? — Sí.', audioText: 'Can you swim? Yes, I can.', audioId: 'en_a1_u01_l15_g_ex3' },
          { sentence: 'Can she play the piano? — No, she can\'t.', translation: 'क्या वह पियानो बजा सकती है? — नहीं, नहीं बजा सकती। / ¿Sabe tocar el piano? — No.', audioText: 'Can she play the piano? No, she can\'t.', audioId: 'en_a1_u01_l15_g_ex4' }
        ],
        explanationByLang: {
          hi: 'प्रश्न बनाते समय "Can" को वाक्य की शुरुआत में लाएँ (Can you swim?)। इसमें "Do" या "Does" का प्रयोग कभी न करें।',
          es: 'Para preguntar invierte el orden: Can + sujeto + verbo base (Can you swim?). Nunca uses "do" (*Do you can...?*).'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_l15_he_cans',
      incorrect: 'He cans speak German.',
      correct: 'He can speak German.',
      whyExplanation: 'Modal verbs like "can" NEVER take 3rd-person singular "-s".',
      explanationsByLang: {
        hi: '"Can" में कभी भी "-s" नहीं जुड़ता: "He can speak", "He cans" गलत है।',
        es: 'Los verbos modales nunca llevan "-s": "He can speak", no "*He cans*".',
        fr: 'Les modaux ne prennent jamais de "-s" : "He can speak".',
        de: 'Modalverben bekommen kein "-s": "He can speak".'
      }
    },
    {
      id: 'cm_l15_do_you_can',
      incorrect: 'Do you can drive?',
      correct: 'Can you drive?',
      whyExplanation: '"Can" forms questions through direct inversion without the auxiliary "do".',
      explanationsByLang: {
        hi: '"Can" के साथ "Do" का प्रयोग न करें: "Can you drive?" सही है, "Do you can drive" गलत।',
        es: '"Can" no necesita "do" para preguntas: di "Can you drive?", nunca "*Do you can drive?*".',
        fr: 'N\'utilisez pas "do" avec "can" : "Can you drive?".',
        de: 'Kein "do" mit "can": "Can you drive?".'
      }
    }
  ],

  // SECTION 11: Dialogue
  dialogues: [
    {
      id: 'd_a1_1_15_skills_interview',
      title: 'Community Volunteer Skill Assessment',
      context: 'Lucas is interviewing Nadia for a volunteer position at a community center.',
      characters: [
        { id: 'char_lucas', name: 'Lucas', role: 'Coordinator' },
        { id: 'char_nadia', name: 'Nadia', role: 'Volunteer' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_lucas',
          speakerName: 'Lucas',
          text: 'Welcome Nadia! Can you tell me what skills you have?',
          translationsByLang: { hi: 'स्वागत है नादिया! क्या आप मुझे बता सकती हैं कि आपके पास क्या कौशल हैं?', es: '¡Bienvenida Nadia! ¿Puedes decirme qué habilidades tienes?' },
          audioText: 'Welcome Nadia! Can you tell me what skills you have?',
          audioId: 'en_a1_u01_l15_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_nadia',
          speakerName: 'Nadia',
          text: 'Sure! I can use computers, and I can speak English and Arabic fluently.',
          translationsByLang: { hi: 'ज़रूर! मैं कंप्यूटर का उपयोग कर सकती हूँ, और धाराप्रवाह अंग्रेजी और अरबी बोल सकती हूँ।', es: '¡Claro! Sé usar ordenadores y puedo hablar inglés y árabe con fluidez.' },
          audioText: 'Sure! I can use computers, and I can speak English and Arabic fluently.',
          audioId: 'en_a1_u01_l15_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_lucas',
          speakerName: 'Lucas',
          text: 'That is wonderful! Can you drive a car?',
          translationsByLang: { hi: 'यह तो बहुत बढ़िया है! क्या आप कार चला सकती हैं?', es: '¡Eso es maravilloso! ¿Sabes conducir un coche?' },
          audioText: 'That is wonderful! Can you drive a car?',
          audioId: 'en_a1_u01_l15_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_nadia',
          speakerName: 'Nadia',
          text: 'Yes, I can drive, and I also love cooking meals for big groups.',
          translationsByLang: { hi: 'हाँ, मैं गाड़ी चला सकती हूँ, और मुझे बड़े समूहों के लिए खाना बनाना भी बहुत पसंद है।', es: 'Sí, sé conducir y también me encanta cocinar para grupos grandes.' },
          audioText: 'Yes, I can drive, and I also love cooking meals for big groups.',
          audioId: 'en_a1_u01_l15_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_lucas',
          speakerName: 'Lucas',
          text: 'Perfect! Can you start next Monday morning?',
          translationsByLang: { hi: 'उत्कृष्ट! क्या आप अगले सोमवार सुबह से शुरू कर सकती हैं?', es: '¡Perfecto! ¿Puedes empezar el próximo lunes por la mañana?' },
          audioText: 'Perfect! Can you start next Monday morning?',
          audioId: 'en_a1_u01_l15_d01_t5'
        },
        {
          id: 'turn_6',
          speakerId: 'char_nadia',
          speakerName: 'Nadia',
          text: 'Yes, I can! Thank you so much.',
          translationsByLang: { hi: 'हाँ, मैं कर सकती हूँ! आपका बहुत-बहुत धन्यवाद।', es: '¡Sí, puedo! Muchísimas gracias.' },
          audioText: 'Yes, I can! Thank you so much.',
          audioId: 'en_a1_u01_l15_d01_t6'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15, 16: Practice Exercises
  practiceExercises: [
    {
      id: 'ex_l15_p1',
      lessonId: 'lesson_a1_1_15',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct form for 3rd person singular with "can":',
      sourceSentence: 'He ___ swim very well.',
      options: [
        { id: 'o1', text: 'can', isCorrect: true },
        { id: 'o2', text: 'cans', isCorrect: false },
        { id: 'o3', text: 'is can', isCorrect: false }
      ],
      explanation: 'Modal verbs never take "-s". "He can swim" is correct.'
    },
    {
      id: 'ex_l15_p2',
      lessonId: 'lesson_a1_1_15',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Choose the correct question format:',
      sourceSentence: '___ you help me with this problem, please?',
      options: [
        { id: 'o1', text: 'Can', isCorrect: true },
        { id: 'o2', text: 'Do can', isCorrect: false },
        { id: 'o3', text: 'Are', isCorrect: false }
      ],
      explanation: 'Use "Can you..." for polite requests and ability questions.'
    },
    {
      id: 'ex_l15_p3',
      lessonId: 'lesson_a1_1_15',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the ability sentence:',
      targetSentence: 'She can speak English and French fluently',
      wordBank: ['She', 'can', 'speak', 'English', 'and', 'French', 'fluently', 'cans', 'speaks']
    },
    {
      id: 'ex_l15_p4',
      lessonId: 'lesson_a1_1_15',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the skill statement:',
      audioText: 'I can play the guitar but I cannot sing',
      options: [
        { id: 'o1', text: 'I can play the guitar but I cannot sing', isCorrect: true },
        { id: 'o2', text: 'I can play the piano but I cannot cook', isCorrect: false },
        { id: 'o3', text: 'I cannot play the guitar and I cannot sing', isCorrect: false }
      ],
      explanation: 'The speaker states "I can play the guitar but I cannot sing".'
    },
    {
      id: 'ex_l15_p5',
      lessonId: 'lesson_a1_1_15',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and write the polite request:',
      audioText: 'Can you speak more slowly please',
      targetSentence: 'Can you speak more slowly please'
    },
    {
      id: 'ex_l15_p6',
      lessonId: 'lesson_a1_1_15',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Build the negative ability sentence:',
      targetSentence: 'He can\'t drive a car in the city',
      wordBank: ['He', 'can\'t', 'drive', 'a', 'car', 'in', 'the', 'city', 'don\'t', 'drives']
    },
    {
      id: 'ex_l15_p7',
      lessonId: 'lesson_a1_1_15',
      stage: 12,
      type: 'speaking',
      prompt: 'Say this proficiency statement into your microphone:',
      targetSentence: 'I can speak a little English and Spanish.',
      audioText: 'I can speak a little English and Spanish.'
    },
    {
      id: 'ex_l15_p8',
      lessonId: 'lesson_a1_1_15',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या आप मेरी मदद कर सकते हैं, कृपया? — हाँ, मैं कर सकता हूँ।',
      sourceTranslations: {
        hi: 'क्या आप मेरी मदद कर सकते हैं, कृपया? — हाँ, मैं कर सकता हूँ।',
        es: '¿Puedes ayudarme, por favor? — Sí, puedo.'
      },
      targetSentence: 'Can you help me please Yes I can',
      wordBank: ['Can', 'you', 'help', 'me', 'please', 'Yes', 'I', 'can', 'do', 'cans']
    },
    {
      id: 'ex_l15_p9',
      lessonId: 'lesson_a1_1_15',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Lesson 13 Food & Lesson 15 Ability):',
      sourceSentence: 'Marco can ___ delicious Italian pizzas in our kitchen.',
      options: [
        { id: 'o1', text: 'cook', isCorrect: true },
        { id: 'o2', text: 'swimming', isCorrect: false },
        { id: 'o3', text: 'waiter', isCorrect: false }
      ],
      explanation: '"cook" is the base verb indicating food preparation ability.'
    },
    {
      id: 'ex_l15_p10',
      lessonId: 'lesson_a1_1_15',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the auxiliary error in the question:',
      sourceSentence: 'Do you can ride a bicycle?',
      options: [
        { id: 'o1', text: 'Can you ride a bicycle?', isCorrect: true },
        { id: 'o2', text: 'Are you can ride a bicycle?', isCorrect: false },
        { id: 'o3', text: 'Do you ride can a bicycle?', isCorrect: false }
      ],
      explanation: 'Do not use auxiliary "do" with "can".'
    },
    {
      id: 'ex_l15_p11',
      lessonId: 'lesson_a1_1_15',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Choose the correct short answer:',
      sourceSentence: 'Interviewer: "Can you use a computer?" -> You: "___"',
      options: [
        { id: 'o1', text: 'Yes, I can.', isCorrect: true },
        { id: 'o2', text: 'Yes, I do.', isCorrect: false },
        { id: 'o3', text: 'Yes, I am.', isCorrect: false }
      ],
      explanation: 'Match modal "can" in short answer: "Yes, I can."'
    },
    {
      id: 'ex_l15_p12',
      lessonId: 'lesson_a1_1_15',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which adverb means speaking smoothly and without hesitation?',
      sourceSentence: 'Adverb definition:',
      options: [
        { id: 'o1', text: 'fluently', isCorrect: true },
        { id: 'o2', text: 'slowly', isCorrect: false },
        { id: 'o3', text: 'a little', isCorrect: false }
      ],
      explanation: '"fluently" denotes speaking smoothly.'
    },
    {
      id: 'ex_l15_p13',
      lessonId: 'lesson_a1_1_15',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Choose the correct negative form of "can":',
      sourceSentence: 'Negative modal:',
      options: [
        { id: 'o1', text: 'can\'t / cannot', isCorrect: true },
        { id: 'o2', text: 'don\'t can', isCorrect: false },
        { id: 'o3', text: 'not can', isCorrect: false }
      ],
      explanation: 'The negative is "can\'t" or "cannot".'
    },
    {
      id: 'ex_l15_p14',
      lessonId: 'lesson_a1_1_15',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Construct the sentence:',
      targetSentence: 'I can remember all your names very well',
      wordBank: ['I', 'can', 'remember', 'all', 'your', 'names', 'very', 'well', 'remembers']
    },
    {
      id: 'ex_l15_p15',
      lessonId: 'lesson_a1_1_15',
      stage: 12,
      type: 'speaking',
      prompt: 'Read this polite request clearly into your microphone:',
      targetSentence: 'Can you help me with this computer program, please?',
      audioText: 'Can you help me with this computer program, please?'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 'ex_l15_rev1',
      lessonId: 'lesson_a1_1_15',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct?',
      sourceSentence: 'Grammar review:',
      options: [
        { id: 'o1', text: 'She can play the piano very well.', isCorrect: true },
        { id: 'o2', text: 'She cans play the piano very well.', isCorrect: false },
        { id: 'o3', text: 'She can plays the piano very well.', isCorrect: false }
      ],
      explanation: 'Use "can" + base verb "play".'
    },
    {
      id: 'ex_l15_rev2',
      lessonId: 'lesson_a1_1_15',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Fill in the short answer:',
      sourceSentence: '"Can they swim in the lake?" — "No, they ___."',
      options: [
        { id: 'o1', text: 'can\'t', isCorrect: true },
        { id: 'o2', text: 'don\'t', isCorrect: false },
        { id: 'o3', text: 'aren\'t', isCorrect: false }
      ],
      explanation: 'Use "can\'t" in short answer to a "Can they...?" question.'
    },
    {
      id: 'ex_l15_rev3',
      lessonId: 'lesson_a1_1_15',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      targetSentence: 'We can speak three foreign languages fluently',
      wordBank: ['We', 'can', 'speak', 'three', 'foreign', 'languages', 'fluently', 'cans', 'speaks']
    },
    {
      id: 'ex_l15_rev4',
      lessonId: 'lesson_a1_1_15',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'क्या आप कार चला सकते हैं? — नहीं, मैं नहीं चला सकता।',
      sourceTranslations: { hi: 'क्या आप कार चला सकते हैं? — नहीं, मैं नहीं चला सकता।', es: '¿Sabes conducir un coche? — No, no sé.' },
      targetSentence: 'Can you drive a car No I can\'t',
      wordBank: ['Can', 'you', 'drive', 'a', 'car', 'No', 'I', 'can\'t', 'do', 'don\'t']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_l15_a1',
      lessonId: 'lesson_a1_1_15',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct sentence: "David ___ five languages."',
      sourceSentence: 'Ability with modal:',
      options: [
        { id: 'o1', text: 'can speak', isCorrect: true },
        { id: 'o2', text: 'cans speak', isCorrect: false },
        { id: 'o3', text: 'can speaks', isCorrect: false },
        { id: 'o4', text: 'is can speak', isCorrect: false }
      ],
      explanation: 'Use "can" + base verb "speak".'
    },
    {
      id: 'ex_l15_a2',
      lessonId: 'lesson_a1_1_15',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Complete the polite request:',
      sourceSentence: '___ I have a glass of water, please?',
      options: [
        { id: 'o1', text: 'Can', isCorrect: true },
        { id: 'o2', text: 'Do', isCorrect: false },
        { id: 'o3', text: 'Am', isCorrect: false },
        { id: 'o4', text: 'Are', isCorrect: false }
      ],
      explanation: '"Can I have..." is the standard polite request formula.'
    },
    {
      id: 'ex_l15_a3',
      lessonId: 'lesson_a1_1_15',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Build the question:',
      targetSentence: 'Can your brother ride a bicycle well',
      wordBank: ['Can', 'your', 'brother', 'ride', 'a', 'bicycle', 'well', 'does', 'rides']
    },
    {
      id: 'ex_l15_a4',
      lessonId: 'lesson_a1_1_15',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the modal verb error:',
      sourceSentence: 'My mother cans cook very well.',
      options: [
        { id: 'o1', text: 'My mother can cook very well.', isCorrect: true },
        { id: 'o2', text: 'My mother can cooks very well.', isCorrect: false },
        { id: 'o3', text: 'My mother does can cook very well.', isCorrect: false }
      ],
      explanation: '"Can" never takes "-s".'
    },
    {
      id: 'ex_l15_a5',
      lessonId: 'lesson_a1_1_15',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the speaker says:',
      audioText: 'Can you help me carry this heavy bag please',
      options: [
        { id: 'o1', text: 'Can you help me carry this heavy bag please', isCorrect: true },
        { id: 'o2', text: 'Can you help me buy this heavy bag please', isCorrect: false },
        { id: 'o3', text: 'Do you want to carry this heavy bag please', isCorrect: false }
      ],
      explanation: 'The speaker asks "Can you help me carry this heavy bag please".'
    },
    {
      id: 'ex_l15_a6',
      lessonId: 'lesson_a1_1_15',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and transcribe the sentence accurately:',
      audioText: 'I can speak two languages fluently',
      targetSentence: 'I can speak two languages fluently'
    },
    {
      id: 'ex_l15_a7',
      lessonId: 'lesson_a1_1_15',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best answer:',
      sourceSentence: 'Tour guide: "Can everyone hear my voice clearly?" -> Tourist: "___"',
      options: [
        { id: 'o1', text: 'Yes, we can hear you very well.', isCorrect: true },
        { id: 'o2', text: 'I prefer tea to coffee.', isCorrect: false },
        { id: 'o3', text: 'It is five o\'clock.', isCorrect: false }
      ],
      explanation: 'Directly responds to the hearing ability question.'
    },
    {
      id: 'ex_l15_a8',
      lessonId: 'lesson_a1_1_15',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'वह बहुत तेज़ दौड़ सकता है।',
      sourceTranslations: { hi: 'वह बहुत तेज़ दौड़ सकता है।', es: 'Él puede correr muy rápido.' },
      targetSentence: 'He can run very fast',
      wordBank: ['He', 'can', 'run', 'very', 'fast', 'cans', 'runs', 'slowly']
    },
    {
      id: 'ex_l15_a9',
      lessonId: 'lesson_a1_1_15',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which short answer is correct for: "Can you swim?"',
      sourceSentence: 'Short answer check:',
      options: [
        { id: 'o1', text: 'No, I can\'t.', isCorrect: true },
        { id: 'o2', text: 'No, I don\'t.', isCorrect: false },
        { id: 'o3', text: 'No, I am not.', isCorrect: false },
        { id: 'o4', text: 'No, I not can.', isCorrect: false }
      ],
      explanation: '"No, I can\'t." is the correct short answer.'
    },
    {
      id: 'ex_l15_a10',
      lessonId: 'lesson_a1_1_15',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final sentence:',
      targetSentence: 'She can use a computer and write emails in English',
      wordBank: ['She', 'can', 'use', 'a', 'computer', 'and', 'write', 'emails', 'in', 'English', 'cans']
    }
  ]
};
