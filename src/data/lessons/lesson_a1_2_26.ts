import { DetailedLessonData } from '../../types';

export const LESSON_A1_2_26_DATA: DetailedLessonData = {
  id: 'lesson_a1_2_26',
  unitId: 'unit_a1_2',
  title: 'Abilities, Skills & Permission (Modal "Can / Can\'t")',
  cefr: 'A1',
  icon: '⚡',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Expressing Physical Abilities, Talents, Acquired Skills and Asking Permission with "Can / Can\'t"',
    description: 'Master the modal verb "can" (affirmative, negative "can\'t / cannot", and interrogative "Can you...?"), pronunciation distinction between weak /kən/ and strong negative /kænt/, vocabulary of practical abilities (speak languages, drive a car, swim, cook, play instruments, fix things, type quickly, sing), and asking polite permission ("Can I sit here?", "Can we use this computer?").',
    descriptionsByLang: {
      hi: 'शारीरिक क्षमताओं, प्रतिभाओं और अर्जित कौशलों को व्यक्त करने के लिए मॉडल क्रिया "Can" (सकारात्मक), "Can\'t" (नकारात्मक) और "Can you...?" (प्रश्न) का प्रयोग सीखें। उच्चारण के अंतर और अनुमति मांगने का अभ्यास करें।',
      es: 'Aprende a expresar habilidades físicas, talentos, destrezas adquiridas y a pedir permiso usando el verbo modal "Can" y "Can\'t", con formas afirmativas, negativas e interrogativas y vocabulario de habilidades prácticas.',
      fr: 'Apprenez à exprimer vos capacités et à demander la permission avec "Can" et "Can\'t".',
      de: 'Lernen Sie Fähigkeiten, Talente und Erlaubnis mit dem Modalverb "Can" und "Can\'t" auszudrücken.',
      pt: 'Aprenda a expressar habilidades, talentos e permissão usando o verbo modal "Can" e "Can\'t".',
      zh: '掌握情态动词 "Can"（能/会）、"Can\'t"（不能/不会）及疑问句型 "Can you...?" 表达身体能力、才华、技能，并学会用于礼貌请求与许可（"Can I...?"）。',
      ar: 'تعلم التعبير عن القدرات والمهارات وطلب الإذن باستخدام الفعل المساعد Can و Can\'t.',
      ja: '能力、才能、スキル、許可を表す助動詞 "Can" と "Can\'t" の使い方と発音の使い分けを学びます。',
      ru: 'Изучите выражение способностей, навыков и разрешений с помощью модального глагола "Can" и "Can\'t".'
    },
    canDoStatements: [
      'Express physical abilities and talents using "can": "I can speak two languages", "She can drive a car"',
      'State things you cannot do using "can\'t": "I can\'t swim very well", "He can\'t cook Italian food"',
      'Ask others about their skills: "Can you play the piano?", "Can you speak Spanish?"',
      'Ask for and grant polite permission: "Can I open the window?" — "Yes, of course you can"',
      'Give short answers with can/can\'t: "Yes, I can.", "No, I can\'t.", "Yes, you can."',
      'Pronounce weak /kən/ in statements and emphatic /kænt/ in negatives accurately'
    ],
    canDoByLang: {
      hi: [
        'अपनी क्षमताओं को "I can..." से व्यक्त करना',
        'ना कर पाने वाली चीजों को "I can\'t..." से बताना',
        'कौशल के बारे में पूछना: "Can you drive a car?"',
        'अनुमति मांगना और देना: "Can I sit here?" — "Yes, you can."'
      ],
      es: [
        'Expresar habilidades con "can": "I can drive"',
        'Expresar lo que no se puede hacer con "can\'t"',
        'Preguntar por habilidades: "Can you speak French?"',
        'Pedir y dar permiso: "Can I sit here?" — "Yes, you can."'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (25 items)
  vocabulary: [
    {
      id: 'v_u02_l26_can',
      word: 'can (modal verb)',
      phonetic: '/kæn/ /kən/',
      meaning: 'Be able to; have the opportunity, ability, or capacity to do something',
      translationsByLang: { hi: 'सकना / समर्थ होना', es: 'poder / ser capaz de', fr: 'pouvoir / savoir faire', de: 'können', pt: 'poder / conseguir', zh: '能够 / 可以 / 会', ar: 'يستطيع / يقدر على', ja: '〜できる / 〜してもよい', ru: 'мочь / уметь' },
      exampleSentence: 'I can speak three languages fluently.',
      exampleTranslationByLang: { hi: 'मैं धाराप्रवाह तीन भाषाएं बोल सकता हूँ।', es: 'Puedo hablar tres idiomas con fluidez.' },
      audioText: 'can',
      audioId: 'en_a1_u02_l26_v_can',
      slowAudioId: 'en_a1_u02_l26_v_can_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💪',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_cant',
      word: 'can\'t / cannot',
      phonetic: '/kænt/ /ˈkæn.ɑːt/',
      meaning: 'Unable to do something; lacking the capacity or permission',
      translationsByLang: { hi: 'नहीं कर सकना / असमर्थ होना', es: 'no poder / no saber', fr: 'ne pas pouvoir / ne pas savoir', de: 'nicht können', pt: 'não poder / não conseguir', zh: '不能 / 不会', ar: 'لا يستطيع / لا يقدر', ja: '〜できない', ru: 'не уметь / не мочь' },
      exampleSentence: 'He can\'t swim in deep water without a life jacket.',
      exampleTranslationByLang: { hi: 'वह लाइफ जैकेट के बिना गहरे पानी में नहीं तैर सकता।', es: 'Él no puede nadar en aguas profundas sin un chaleco salvavidas.' },
      audioText: 'cannot and can\'t',
      audioId: 'en_a1_u02_l26_v_cant',
      slowAudioId: 'en_a1_u02_l26_v_cant_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚫',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_speak_languages',
      word: 'speak a language',
      phonetic: '/spiːk ə ˈlæŋ.ɡwɪdʒ/',
      meaning: 'Have communication competence in a spoken human language',
      translationsByLang: { hi: 'भाषा बोलना', es: 'hablar un idioma', fr: 'parler une langue', de: 'eine Sprache sprechen', pt: 'falar um idioma', zh: '讲一种语言', ar: 'التحدث بلغة', ja: '言語を話す', ru: 'говорить на языке' },
      exampleSentence: 'Maria can speak Spanish, English, and Italian.',
      exampleTranslationByLang: { hi: 'मारिया स्पेनिश, अंग्रेजी और इतालवी बोल सकती है।', es: 'María puede hablar español, inglés e italiano.' },
      audioText: 'speak a language',
      audioId: 'en_a1_u02_l26_v_speak',
      slowAudioId: 'en_a1_u02_l26_v_speak_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗣️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_drive_car',
      word: 'drive a car',
      phonetic: '/draɪv ə kɑːr/',
      meaning: 'Operate and control the direction and speed of a motor vehicle',
      translationsByLang: { hi: 'कार चलाना', es: 'conducir / manejar un coche', fr: 'conduire une voiture', de: 'Auto fahren', pt: 'dirigir um carro', zh: '开车 / 驾驶汽车', ar: 'قيادة سيارة', ja: '車を運転する', ru: 'водить машину' },
      exampleSentence: 'I passed my driving test, so now I can drive a car.',
      exampleTranslationByLang: { hi: 'मैंने अपना ड्राइविंग टेस्ट पास कर लिया है, इसलिए अब मैं कार चला सकता हूँ।', es: 'Aprobé mi examen de conducir, así que ahora puedo conducir un coche.' },
      audioText: 'drive a car',
      audioId: 'en_a1_u02_l26_v_drive',
      slowAudioId: 'en_a1_u02_l26_v_drive_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚗',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_swim',
      word: 'swim',
      phonetic: '/swɪm/',
      meaning: 'Propel oneself through water by bodily movement',
      translationsByLang: { hi: 'तैरना', es: 'nadar', fr: 'nager', de: 'schwimmen', pt: 'nadar', zh: '游泳', ar: 'يسبح', ja: '泳ぐ', ru: 'плавать' },
      exampleSentence: 'She can swim two kilometers in the Olympic pool.',
      exampleTranslationByLang: { hi: 'वह ओलंपिक पूल में दो किलोमीटर तैर सकती है।', es: 'Ella puede nadar dos kilómetros en la piscina olímpica.' },
      audioText: 'swim',
      audioId: 'en_a1_u02_l26_v_swim',
      slowAudioId: 'en_a1_u02_l26_v_swim_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏊‍♂️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_cook_meals',
      word: 'cook / bake',
      phonetic: '/kʊk/ /beɪk/',
      meaning: 'Prepare food by heating and combining culinary ingredients',
      translationsByLang: { hi: 'खाना पकाना / बेक करना', es: 'cocinar / hornear', fr: 'cuisiner / faire cuire au four', de: 'kochen / backen', pt: 'cozinhar / assar', zh: '做饭 / 烘焙', ar: 'يطبخ / يخبز', ja: '料理する / 焼く', ru: 'готовить / печь' },
      exampleSentence: 'My brother can cook delicious Mexican tacos.',
      exampleTranslationByLang: { hi: 'मेरा भाई स्वादिष्ट मैक्सिकन टैकोस बना सकता है।', es: 'Mi hermano sabe cocinar deliciosos tacos mexicanos.' },
      audioText: 'cook and bake',
      audioId: 'en_a1_u02_l26_v_cook',
      slowAudioId: 'en_a1_u02_l26_v_cook_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_play_instrument',
      word: 'play the piano / guitar',
      phonetic: '/pleɪ ðə piˈæn.oʊ/ /ɡɪˈtɑːr/',
      meaning: 'Perform music upon a musical instrument (requires definite article "the")',
      translationsByLang: { hi: 'पियानो / गिटार बजाना', es: 'tocar el piano / la guitarra', fr: 'jouer du piano / de la guitare', de: 'Klavier / Gitarre spielen', pt: 'tocar piano / violão', zh: '弹钢琴 / 弹吉他', ar: 'العزف على البيانو / الجيتار', ja: 'ピアノ / ギターを弾く', ru: 'играть на пианино / гитаре' },
      exampleSentence: 'Elena can play the violin beautifully.',
      exampleTranslationByLang: { hi: 'ऐलेना बहुत सुंदर वायलिन बजा सकती है।', es: 'Elena sabe tocar el violín de maravilla.' },
      audioText: 'play the piano and guitar',
      audioId: 'en_a1_u02_l26_v_instrument',
      slowAudioId: 'en_a1_u02_l26_v_instrument_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎹',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_type_fast',
      word: 'type fast',
      phonetic: '/taɪp fæst/',
      meaning: 'Write rapidly on a keyboard; operate computer inputs with high speed',
      translationsByLang: { hi: 'तेज़ टाइप करना', es: 'escribir rápido a máquina', fr: 'taper vite au clavier', de: 'schnell tippen', pt: 'digitar rápido', zh: '快速打字', ar: 'الطباعة بسرعة', ja: '速くタイピングする', ru: 'быстро печатать' },
      exampleSentence: 'She can type over eighty words per minute on a computer keyboard.',
      exampleTranslationByLang: { hi: 'वह कंप्यूटर कीबोर्ड पर प्रति मिनट अस्सी से अधिक शब्द टाइप कर सकती है।', es: 'Ella puede escribir más de ochenta palabras por minuto en el teclado.' },
      audioText: 'type fast',
      audioId: 'en_a1_u02_l26_v_type',
      slowAudioId: 'en_a1_u02_l26_v_type_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⌨️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_sing_dance',
      word: 'sing / dance',
      phonetic: '/sɪŋ/ /dæns/',
      meaning: 'Make musical sounds with voice; move rhythmically to music',
      translationsByLang: { hi: 'गाना / नाचना', es: 'cantar / bailar', fr: 'chanter / danser', de: 'singen / tanzen', pt: 'cantar / dançar', zh: '唱歌 / 跳舞', ar: 'يغني / يرقص', ja: '歌う / 踊る', ru: 'петь / танцевать' },
      exampleSentence: 'They can dance the tango with great precision.',
      exampleTranslationByLang: { hi: 'वे बहुत सटीकता के साथ टैंगो नृत्य कर सकते हैं।', es: 'Ellos saben bailar el tango con gran precisión.' },
      audioText: 'sing and dance',
      audioId: 'en_a1_u02_l26_v_singdance',
      slowAudioId: 'en_a1_u02_l26_v_singdance_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💃',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_fix_repair',
      word: 'fix / repair',
      phonetic: '/fɪks/ /rɪˈper/',
      meaning: 'Restore something damaged or broken back to good functioning condition',
      translationsByLang: { hi: 'चीजें ठीक करना / मरम्मत करना', es: 'arreglar / reparar', fr: 'réparer', de: 'reparieren', pt: 'consertar / reparar', zh: '修理 / 修好', ar: 'إصلاح / صيانة', ja: '修理する / 直す', ru: 'чинить / ремонтировать' },
      exampleSentence: 'My grandfather can fix almost any mechanical watch.',
      exampleTranslationByLang: { hi: 'मेरे दादाजी लगभग किसी भी यांत्रिक घड़ी को ठीक कर सकते हैं।', es: 'Mi abuelo sabe reparar casi cualquier reloj mecánico.' },
      audioText: 'fix and repair',
      audioId: 'en_a1_u02_l26_v_fix',
      slowAudioId: 'en_a1_u02_l26_v_fix_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔧',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_ride_bike',
      word: 'ride a bicycle / bike',
      phonetic: '/raɪd ə ˈbaɪ.sɪ.kəl/',
      meaning: 'Sit on and control the motion of a bicycle',
      translationsByLang: { hi: 'साइकिल चलाना', es: 'montar en bicicleta', fr: 'faire du vélo', de: 'Fahrrad fahren', pt: 'andar de bicicleta', zh: '骑自行车', ar: 'ركوب الدراجة', ja: '自転車に乗る', ru: 'ездить на велосипеде' },
      exampleSentence: 'Can you ride a bicycle safely on city streets?',
      exampleTranslationByLang: { hi: 'क्या आप शहर की सड़कों पर सुरक्षित रूप से साइकिल चला सकते हैं?', es: '¿Puedes montar en bicicleta de forma segura por las calles de la ciudad?' },
      audioText: 'ride a bicycle',
      audioId: 'en_a1_u02_l26_v_ridebike',
      slowAudioId: 'en_a1_u02_l26_v_ridebike_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚲',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_use_computer',
      word: 'use a computer / software',
      phonetic: '/juːz ə kəmˈpjuː.tɚ/',
      meaning: 'Operate digital computer hardware, applications, and operating systems',
      translationsByLang: { hi: 'कंप्यूटर चलाना', es: 'usar una computadora / software', fr: 'utiliser un ordinateur', de: 'einen Computer bedienen', pt: 'usar um computador', zh: '使用电脑', ar: 'استخدام الحاسوب', ja: 'パソコンを使う', ru: 'пользоваться компьютером' },
      exampleSentence: 'All employees can use the office spreadsheet program.',
      exampleTranslationByLang: { hi: 'सभी कर्मचारी कार्यालय के स्प्रेडशीट प्रोग्राम का उपयोग कर सकते हैं।', es: 'Todos los empleados saben usar el programa de hojas de cálculo de la oficina.' },
      audioText: 'use a computer',
      audioId: 'en_a1_u02_l26_v_usecomp',
      slowAudioId: 'en_a1_u02_l26_v_usecomp_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💻',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_draw_paint',
      word: 'draw / paint pictures',
      phonetic: '/drɔː/ /peɪnt/',
      meaning: 'Produce visual art using pencils, pens, brushes, and color pigments',
      translationsByLang: { hi: 'चित्र बनाना / पेंटिंग करना', es: 'dibujar / pintar cuadros', fr: 'dessiner / peindre', de: 'zeichnen / malen', pt: 'desenhar / pintar', zh: '画画 / 绘画', ar: 'الرسم / التلوين', ja: '絵を描く / 塗る', ru: 'рисовать / писать картины' },
      exampleSentence: 'She can draw realistic portraits of people.',
      exampleTranslationByLang: { hi: 'वह लोगों के सजीव चित्र बना सकती है।', es: 'Ella puede dibujar retratos realistas de personas.' },
      audioText: 'draw and paint',
      audioId: 'en_a1_u02_l26_v_draw',
      slowAudioId: 'en_a1_u02_l26_v_draw_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎨',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_run_fast',
      word: 'run fast',
      phonetic: '/rʌn fæst/',
      meaning: 'Move rapidly on foot at high speed',
      translationsByLang: { hi: 'तेज़ दौड़ना', es: 'correr rápido', fr: 'courir vite', de: 'schnell laufen', pt: 'correr rápido', zh: '跑得快 / 快跑', ar: 'الجري بسرعة', ja: '速く走る', ru: 'быстро бегать' },
      exampleSentence: 'The athlete can run one hundred meters in ten seconds.',
      exampleTranslationByLang: { hi: 'एथलीट दस सेकंड में सौ मीटर दौड़ सकता है।', es: 'El atleta puede correr cien metros en diez segundos.' },
      audioText: 'run fast',
      audioId: 'en_a1_u02_l26_v_runfast',
      slowAudioId: 'en_a1_u02_l26_v_runfast_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏃‍♂️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_lift_heavy',
      word: 'lift heavy objects',
      phonetic: '/lɪft ˈhev.i ˈɑːb.dʒekts/',
      meaning: 'Raise weights or bulky items using physical bodily strength',
      translationsByLang: { hi: 'भारी सामान उठाना', es: 'levantar objetos pesados', fr: 'soulever des objets lourds', de: 'schwere Gegenstände heben', pt: 'levantar objetos pesados', zh: '搬重物 / 举起重物', ar: 'رفع الأشياء الثقيلة', ja: '重い物を持ち上げる', ru: 'поднимать тяжести' },
      exampleSentence: 'Can you lift this heavy box into the car trunk?',
      exampleTranslationByLang: { hi: 'क्या आप इस भारी बक्से को कार की डिक्की में उठा सकते हैं?', es: '¿Puedes levantar esta caja pesada en el maletero del coche?' },
      audioText: 'lift heavy objects',
      audioId: 'en_a1_u02_l26_v_liftheavy',
      slowAudioId: 'en_a1_u02_l26_v_liftheavy_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📦',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_permission',
      word: 'permission',
      phonetic: '/pɚˈmɪʃ.ən/',
      meaning: 'The consent or formal authorization given to do something',
      translationsByLang: { hi: 'अनुमति / इजाजत', es: 'permiso / autorización', fr: 'permission / autorisation', de: 'Erlaubnis / Genehmigung', pt: 'permissão / autorização', zh: '许可 / 准许', ar: 'إذن / تصريح', ja: '許可 / 承諾', ru: 'разрешение / допуск' },
      exampleSentence: 'You need permission to enter this private office.',
      exampleTranslationByLang: { hi: 'आपको इस निजी कार्यालय में प्रवेश करने के लिए अनुमति की आवश्यकता है।', es: 'Necesitas permiso para entrar a esta oficina privada.' },
      audioText: 'permission',
      audioId: 'en_a1_u02_l26_v_permission',
      slowAudioId: 'en_a1_u02_l26_v_permission_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📋',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_borrow',
      word: 'borrow',
      phonetic: '/ˈbɑːr.oʊ/',
      meaning: 'Take and use something with the intention of returning it',
      translationsByLang: { hi: 'उधार लेना / मांगना', es: 'pedir prestado / tomar prestado', fr: 'emprunter', de: 'ausleihen / borgen', pt: 'pegar emprestado', zh: '借用 / 借入', ar: 'يستعير / يقترض', ja: '借りる', ru: 'одалживать / брать взаймы' },
      exampleSentence: 'Can I borrow your phone charger for thirty minutes?',
      exampleTranslationByLang: { hi: 'क्या मैं तीस मिनट के लिए आपका फोन चार्जर उधार ले सकता हूँ?', es: '¿Puedo pedir prestado tu cargador de móvil por treinta minutos?' },
      audioText: 'borrow',
      audioId: 'en_a1_u02_l26_v_borrow',
      slowAudioId: 'en_a1_u02_l26_v_borrow_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔌',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_lend',
      word: 'lend',
      phonetic: '/lend/',
      meaning: 'Grant the temporary use of something to someone else',
      translationsByLang: { hi: 'उधार देना', es: 'prestar', fr: 'prêter', de: 'leihen / verleihen', pt: 'emprestar', zh: '借出 / 借给', ar: 'يُقرض / يُعير', ja: '貸す', ru: 'одалживать / давать взаймы' },
      exampleSentence: 'Can you lend me your umbrella until tomorrow?',
      exampleTranslationByLang: { hi: 'क्या आप कल तक मुझे अपना छाता उधार दे सकते हैं?', es: '¿Puedes prestarme tu paraguas hasta mañana?' },
      audioText: 'lend',
      audioId: 'en_a1_u02_l26_v_lend',
      slowAudioId: 'en_a1_u02_l26_v_lend_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🤝',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_park_here',
      word: 'park a vehicle',
      phonetic: '/pɑːrk ə ˈviː.ə.kəl/',
      meaning: 'Bring a vehicle that one is driving to a halt and leave it temporarily',
      translationsByLang: { hi: 'गाड़ी पार्क करना', es: 'estacionar / aparcar un vehículo', fr: 'garer un véhicule', de: 'ein Fahrzeug parken', pt: 'estacionar um veículo', zh: '停车', ar: 'ركن السيارة', ja: '駐車する', ru: 'парковать машину' },
      exampleSentence: 'You cannot park your car in front of this driveway.',
      exampleTranslationByLang: { hi: 'आप इस रास्ते के सामने अपनी कार पार्क नहीं कर सकते।', es: 'No puedes aparcar tu coche delante de esta entrada.' },
      audioText: 'park a vehicle',
      audioId: 'en_a1_u02_l26_v_park',
      slowAudioId: 'en_a1_u02_l26_v_park_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🅿️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_pay_card',
      word: 'pay by credit card / cash',
      phonetic: '/peɪ baɪ ˈkred.ɪt kɑːrd/',
      meaning: 'Settle monetary payment using plastic bank card or physical bills',
      translationsByLang: { hi: 'क्रेडिट कार्ड या नकद से भुगतान करना', es: 'pagar con tarjeta de crédito / en efectivo', fr: 'payer par carte de crédit / en espèces', de: 'mit Kreditkarte / bar bezahlen', pt: 'pagar com cartão de crédito / em dinheiro', zh: '用信用卡/现金支付', ar: 'الدفع ببطاقة الائتمان أو نقداً', ja: 'クレジットカード / 現金で支払う', ru: 'платить картой / наличными' },
      exampleSentence: 'Can we pay by contactless credit card here?',
      exampleTranslationByLang: { hi: 'क्या हम यहाँ संपर्क रहित क्रेडिट कार्ड से भुगतान कर सकते हैं?', es: '¿Podemos pagar aquí con tarjeta de crédito sin contacto?' },
      audioText: 'pay by credit card or cash',
      audioId: 'en_a1_u02_l26_v_paycard',
      slowAudioId: 'en_a1_u02_l26_v_paycard_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💳',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_solve_math',
      word: 'solve math problems',
      phonetic: '/sɑːlv mæθ ˈprɑː.bləmz/',
      meaning: 'Calculate numerical solutions to mathematical equations',
      translationsByLang: { hi: 'गणित के सवाल हल करना', es: 'resolver problemas de matemáticas', fr: 'résoudre des problèmes de maths', de: 'Matheaufgaben lösen', pt: 'resolver problemas de matemática', zh: '解数学题', ar: 'حل مسائل الرياضيات', ja: '数学の問題を解く', ru: 'решать математические задачи' },
      exampleSentence: 'He can solve complex equations in his head quickly.',
      exampleTranslationByLang: { hi: 'वह अपने दिमाग में जटिल समीकरणों को जल्दी हल कर सकता है।', es: 'Él puede resolver ecuaciones complejas en su mente rápidamente.' },
      audioText: 'solve math problems',
      audioId: 'en_a1_u02_l26_v_solvemath',
      slowAudioId: 'en_a1_u02_l26_v_solvemath_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧮',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_remember_names',
      word: 'remember names / faces',
      phonetic: '/rɪˈmem.bɚ neɪmz/',
      meaning: 'Retain memory of people\'s identities and facial features',
      translationsByLang: { hi: 'नाम और चेहरे याद रखना', es: 'recordar nombres y caras', fr: 'se souvenir des noms', de: 'sich Namen merken', pt: 'lembrar nomes', zh: '记住名字和面孔', ar: 'تذكر الأسماء والوجوه', ja: '名前や顔を覚える', ru: 'помнить имена и лица' },
      exampleSentence: 'Our receptionist can remember hundreds of client names.',
      exampleTranslationByLang: { hi: 'हमारे रिसेप्शनिस्ट सैकड़ों ग्राहकों के नाम याद रख सकते हैं।', es: 'Nuestra recepcionista puede recordar cientos de nombres de clientes.' },
      audioText: 'remember names',
      audioId: 'en_a1_u02_l26_v_remember',
      slowAudioId: 'en_a1_u02_l26_v_remember_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🧠',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_hear_clearly',
      word: 'hear clearly',
      phonetic: '/hɪr ˈklɪr.li/',
      meaning: 'Perceive auditory sounds with distinct clarity without distortion',
      translationsByLang: { hi: 'साफ सुनाई देना', es: 'oír con claridad', fr: 'entendre clairement', de: 'klar und deutlich hören', pt: 'ouvir com clareza', zh: '听得清楚', ar: 'يسمع بوضوح', ja: 'はっきりと聞こえる', ru: 'чётко слышать' },
      exampleSentence: 'I cannot hear you clearly because the connection is weak.',
      exampleTranslationByLang: { hi: 'मुझे आपकी आवाज साफ नहीं आ रही है क्योंकि कनेक्शन कमजोर है।', es: 'No puedo oírte con claridad porque la conexión es débil.' },
      audioText: 'hear clearly',
      audioId: 'en_a1_u02_l26_v_hear',
      slowAudioId: 'en_a1_u02_l26_v_hear_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '👂',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_repeat_slowly',
      word: 'repeat slowly',
      phonetic: '/rɪˈpiːt ˈsloʊ.li/',
      meaning: 'Say something again at a reduced, easily understandable tempo',
      translationsByLang: { hi: 'धीमे से दोहराना', es: 'repetir despacio', fr: 'répéter lentement', de: 'langsam wiederholen', pt: 'repetir devagar', zh: '慢慢重复', ar: 'يكرر ببطء', ja: 'ゆっくり繰り返す', ru: 'повторить медленно' },
      exampleSentence: 'Could you please speak and repeat that slowly?',
      exampleTranslationByLang: { hi: 'क्या आप कृपया धीरे बोल सकते हैं और दोहरा सकते हैं?', es: '¿Podría por favor hablar y repetir eso despacio?' },
      audioText: 'repeat slowly',
      audioId: 'en_a1_u02_l26_v_repeat',
      slowAudioId: 'en_a1_u02_l26_v_repeat_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔁',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_u02_l26_ability',
      word: 'talent / skill',
      phonetic: '/ˈtæl.ənt/ /skɪl/',
      meaning: 'Natural aptitude or acquired practical proficiency in a specific domain',
      translationsByLang: { hi: 'प्रतिभा / कौशल', es: 'talento / destreza', fr: 'talent / compétence', de: 'Talent / Fähigkeit', pt: 'talento / habilidade', zh: '才能 / 技能', ar: 'موهبة / مهارة', ja: '才能 / スキル', ru: 'талант / навык' },
      exampleSentence: 'She has a natural talent for public speaking.',
      exampleTranslationByLang: { hi: 'उसके पास सार्वजनिक भाषण देने की स्वाभाविक प्रतिभा है।', es: 'Ella tiene un talento natural para hablar en público.' },
      audioText: 'talent and skill',
      audioId: 'en_a1_u02_l26_v_talent',
      slowAudioId: 'en_a1_u02_l26_v_talent_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⭐',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: High-Frequency Expressions (10 items)
  expressions: [
    {
      id: 'exp_u02_l26_01',
      phrase: 'Can you speak English?',
      meaning: 'Standard polite question asking about someone\'s English language competence',
      translationsByLang: {
        hi: 'क्या आप अंग्रेजी बोल सकते हैं?',
        es: '¿Puedes hablar inglés? / ¿Habla usted inglés?',
        fr: 'Parlez-vous anglais ?',
        de: 'Können Sie Englisch sprechen?',
        pt: 'Você sabe falar inglês?',
        zh: '你会讲英语吗？',
        ar: 'هل تتحدث الإنجليزية؟',
        ja: '英語を話せますか？',
        ru: 'Вы говорите по-английски?'
      },
      context: 'Travel, tourism, and workplace.',
      audioId: 'en_a1_u02_l26_exp_01'
    },
    {
      id: 'exp_u02_l26_02',
      phrase: 'Yes, I can. / No, I can\'t.',
      meaning: 'Short affirmative and negative answers to questions beginning with modal CAN',
      translationsByLang: {
        hi: 'हाँ, मैं कर सकता हूँ। / नहीं, मैं नहीं कर सकता।',
        es: 'Sí, puedo. / No, no puedo.',
        fr: 'Oui, je peux. / Non, je ne peux pas.',
        de: 'Ja, kann ich. / Nein, kann ich nicht.',
        pt: 'Sim, posso / sei. / Não, não posso / sei.',
        zh: '是的，我会。 / 不，我不会。',
        ar: 'نعم أستطيع / لا لا أستطيع.',
        ja: 'はい、できます。/ いいえ、できません。',
        ru: 'Да, могу. / Нет, не могу.'
      },
      context: 'Concise conversational responses.',
      audioId: 'en_a1_u02_l26_exp_02'
    },
    {
      id: 'exp_u02_l26_03',
      phrase: 'Can I sit here, please?',
      meaning: 'Polite request for permission to take an available seat in a public space',
      translationsByLang: {
        hi: 'क्या मैं यहाँ बैठ सकता हूँ, कृपया?',
        es: '¿Puedo sentarme aquí, por favor?',
        fr: 'Puis-je m\'asseoir ici, s\'il vous plaît ?',
        de: 'Kann ich mich hier hinsetzen, bitte?',
        pt: 'Posso sentar aqui, por favor?',
        zh: '请问我可以坐在这里吗？',
        ar: 'هل يمكنني الجلوس هنا لو سمحت؟',
        ja: 'ここに座ってもいいですか？',
        ru: 'Можно я сяду здесь, пожалуйста?'
      },
      context: 'Public transport, cafes, and conference rooms.',
      audioId: 'en_a1_u02_l26_exp_03'
    },
    {
      id: 'exp_u02_l26_04',
      phrase: 'Of course you can. / Sure, go ahead.',
      meaning: 'Friendly and warm phrases to grant permission immediately',
      translationsByLang: {
        hi: 'बिल्कुल आप कर सकते हैं। / अवश्य, आगे बढ़ें।',
        es: 'Por supuesto que puedes. / Claro, adelante.',
        fr: 'Bien sûr que vous pouvez. / Allez-y.',
        de: 'Natürlich können Sie. / Bitte, nur zu.',
        pt: 'Claro que pode. / Vá em frente.',
        zh: '当然可以。/ 请便。',
        ar: 'بالتأكيد يمكنك ذلك / تفضل.',
        ja: 'もちろんどうぞ。',
        ru: 'Конечно, можно. / Да, пожалуйста.'
      },
      context: 'Granting permission politely.',
      audioId: 'en_a1_u02_l26_exp_04'
    },
    {
      id: 'exp_u02_l26_05',
      phrase: 'Sorry, you can\'t park here.',
      meaning: 'Polite phrase stating a rule or prohibition in a location',
      translationsByLang: {
        hi: 'माफ़ कीजिए, आप यहाँ गाड़ी पार्क नहीं कर सकते।',
        es: 'Lo siento, no puedes aparcar aquí.',
        fr: 'Désolé, vous ne pouvez pas vous garer ici.',
        de: 'Entschuldigung, hier dürfen Sie nicht parken.',
        pt: 'Desculpe, você não pode estacionar aqui.',
        zh: '对不起，这里不能停车。',
        ar: 'عفواً، لا يمكنك ركن سيارتك هنا.',
        ja: 'すみません、ここには駐車できません。',
        ru: 'Извините, здесь нельзя парковаться.'
      },
      context: 'Stating rules and prohibitions.',
      audioId: 'en_a1_u02_l26_exp_05'
    },
    {
      id: 'exp_u02_l26_06',
      phrase: 'Can you help me with this box?',
      meaning: 'Polite request asking someone for physical assistance',
      translationsByLang: {
        hi: 'क्या आप इस बक्से के साथ मेरी मदद कर सकते हैं?',
        es: '¿Puedes ayudarme con esta caja?',
        fr: 'Pouvez-vous m\'aider avec ce carton ?',
        de: 'Können Sie mir mit dieser Kiste helfen?',
        pt: 'Você pode me ajudar com esta caixa?',
        zh: '你能帮我搬一下这个箱子吗？',
        ar: 'هل يمكنك مساعدتي في هذا الصندوق؟',
        ja: 'この箱を運ぶのを手伝ってもらえますか？',
        ru: 'Вы можете помочь мне с этой коробкой?'
      },
      context: 'Asking for practical assistance.',
      audioId: 'en_a1_u02_l26_exp_06'
    },
    {
      id: 'exp_u02_l26_07',
      phrase: 'I can\'t hear you clearly.',
      meaning: 'Indicating that incoming audio or speech is muffled or quiet',
      translationsByLang: {
        hi: 'मुझे आपकी आवाज साफ नहीं आ रही है।',
        es: 'No te oigo con claridad.',
        fr: 'Je ne vous entends pas clairement.',
        de: 'Ich kann Sie nicht deutlich hören.',
        pt: 'Não estou te ouvindo direito.',
        zh: '我听不清你说话。',
        ar: 'لا أستطيع سماعك بوضوح.',
        ja: '声がはっきりと聞こえません。',
        ru: 'Я вас плохо слышу.'
      },
      context: 'Phone calls and video meetings.',
      audioId: 'en_a1_u02_l26_exp_07'
    },
    {
      id: 'exp_u02_l26_08',
      phrase: 'Can I ask a quick question?',
      meaning: 'Polite way to interrupt or request brief information',
      translationsByLang: {
        hi: 'क्या मैं एक छोटा सा सवाल पूछ सकता हूँ?',
        es: '¿Puedo hacer una pregunta rápida?',
        fr: 'Puis-je poser une question rapide ?',
        de: 'Darf ich kurz eine Frage stellen?',
        pt: 'Posso fazer uma pergunta rápida?',
        zh: '我可以问一个简单的问题吗？',
        ar: 'هل يمكنني طرح سؤال سريع؟',
        ja: 'ちょっと質問してもよろしいですか？',
        ru: 'Можно задать быстрый вопрос?'
      },
      context: 'Classrooms and meetings.',
      audioId: 'en_a1_u02_l26_exp_08'
    },
    {
      id: 'exp_u02_l26_09',
      phrase: 'Can you repeat that, please?',
      meaning: 'Asking someone to say their previous sentence once more',
      translationsByLang: {
        hi: 'क्या आप कृपया इसे दोहरा सकते हैं?',
        es: '¿Puedes repetir eso, por favor?',
        fr: 'Pouvez-vous répéter cela, s\'il vous plaît ?',
        de: 'Können Sie das bitte wiederholen?',
        pt: 'Pode repetir isso, por favor?',
        zh: '请您再说一遍好吗？',
        ar: 'هل يمكنك تكرار ذلك لو سمحت؟',
        ja: 'もう一度言っていただけますか？',
        ru: 'Повторите это, пожалуйста.'
      },
      context: 'Clarification during conversations.',
      audioId: 'en_a1_u02_l26_exp_09'
    },
    {
      id: 'exp_u02_l26_10',
      phrase: 'Can we pay by credit card?',
      meaning: 'Inquiring if cashless payment methods are accepted',
      translationsByLang: {
        hi: 'क्या हम क्रेडिट कार्ड से भुगतान कर सकते हैं?',
        es: '¿Podemos pagar con tarjeta de crédito?',
        fr: 'Pouvons-nous payer par carte de crédit ?',
        de: 'Können wir mit Kreditkarte bezahlen?',
        pt: 'Podemos pagar com cartão de crédito?',
        zh: '我们可以用信用卡付款吗？',
        ar: 'هل يمكننا الدفع ببطاقة الائتمان؟',
        ja: 'クレジットカードで支払えますか？',
        ru: 'Мы можем оплатить кредитной картой?'
      },
      context: 'Shops and restaurants.',
      audioId: 'en_a1_u02_l26_exp_10'
    }
  ],

  // SECTION 5: Grammar Rules (3 items)
  grammar: {
    patterns: [
      {
        id: 'g_u02_l26_modal_can_rules',
        title: 'The Modal Verb CAN: Invariant Form & Bare Infinitive',
        rule: 'The modal verb "CAN" is invariable (never adds -s, -ed, or -ing). Always follow CAN with the bare infinitive (base form) of the main verb without "to": Subject + CAN + Base Verb ("I can swim", "She can cook"). Negative: "cannot" or contraction "can\'t".',
        formula: 'Subject + can + [Base Verb]\nSubject + cannot / can\'t + [Base Verb]',
        examples: [
          { sentence: 'She can speak three languages.', translation: 'Ella sabe hablar tres idiomas.', audioText: 'She can speak three languages.' },
          { sentence: 'He can\'t swim in deep water.', translation: 'Él no sabe nadar en aguas profundas.', audioText: 'He can\'t swim in deep water.' },
          { sentence: 'They can use the office printer.', translation: 'Ellos pueden usar la impresora de la oficina.', audioText: 'They can use the office printer.' }
        ],
        explanationByLang: {
          hi: 'मॉडल क्रिया CAN का रूप कभी नहीं बदलता (तीसरे व्यक्ति के साथ भी -s नहीं लगता)। इसके बाद हमेशा मुख्य क्रिया का मूल रूप बिना "to" के आता है: "He can speak", "They can swim"।',
          es: 'El verbo modal "CAN" no cambia nunca con la 3ª persona (no lleva -s). Siempre va seguido del verbo base sin "to": "She can cook", "They can swim".'
        }
      },
      {
        id: 'g_u02_l26_modal_can_questions',
        title: 'Questions and Short Answers with CAN',
        rule: 'Invert CAN and the Subject to form questions: "Can you swim?", "Can I sit here?". Short answers use the modal only: "Yes, I can." / "No, I can\'t." (Never "*Yes, I do*").',
        formula: 'Can + Subject + [Base Verb] + ...?\nShort Answers: Yes, [Subject] can. / No, [Subject] can\'t.',
        examples: [
          { sentence: 'Can you drive a manual car? — Yes, I can.', translation: '¿Puedes conducir un coche manual? — Sí, puedo.', audioText: 'Can you drive a manual car? Yes, I can.' },
          { sentence: 'Can she play the guitar? — No, she can\'t.', translation: '¿Ella sabe tocar la guitarra? — No, no sabe.', audioText: 'Can she play the guitar? No, she can\'t.' },
          { sentence: 'Can I borrow your pen? — Of course you can.', translation: '¿Puedo pedir prestado tu bolígrafo? — Por supuesto.', audioText: 'Can I borrow your pen? Of course you can.' }
        ],
        explanationByLang: {
          hi: 'CAN से प्रश्न बनाने के लिए CAN को कर्ता के आगे रखें: "Can you play guitar?"। संक्षिप्त उत्तर में केवल CAN या CAN\'T का प्रयोग करें: "Yes, I can." या "No, I can\'t."।',
          es: 'Para formular preguntas, invierte el orden: "Can you...?". En respuestas cortas se usa solo el modal: "Yes, I can" / "No, I can\'t".'
        }
      },
      {
        id: 'g_u02_l26_modal_permission',
        title: 'Asking for & Giving Permission with CAN / CAN\'T',
        rule: 'Use "Can I...?" or "Can we...?" to politely ask for permission in everyday situations. Use "You can..." to grant permission and "You can\'t..." to indicate prohibition or rules.',
        formula: 'Can I / Can we + [Base Verb] + ...?\nYou can / You can\'t + [Base Verb]',
        examples: [
          { sentence: 'Can I open the window, please?', translation: '¿Puedo abrir la ventana, por favor?', audioText: 'Can I open the window, please?' },
          { sentence: 'You can park your bicycle over there.', translation: 'Puedes aparcar tu bicicleta allí.', audioText: 'You can park your bicycle over there.' },
          { sentence: 'You can\'t smoke inside the building.', translation: 'No se puede fumar dentro del edificio.', audioText: 'You can\'t smoke inside the building.' }
        ],
        explanationByLang: {
          hi: 'अनुमति मांगने के लिए "Can I...?" या "Can we...?" का प्रयोग करें। अनुमति देने के लिए "You can..." और मनाही के लिए "You can\'t..." कहें।',
          es: 'Para pedir permiso usa "Can I...?", para concederlo "You can..." y para prohibición "You can\'t...".'
        }
      }
    ]
  },

  // SECTION 6: Common Mistakes (6 items)
  commonMistakes: [
    {
      id: 'cm_u02_l26_01',
      incorrect: 'She cans speak French.',
      correct: 'She can speak French.',
      whyExplanation: 'Modal verb CAN never takes an -s in the third person singular.',
      explanationsByLang: {
        hi: 'CAN में कभी भी -s नहीं जोड़ा जाता। "She can speak" कहें।',
        es: 'Los verbos modales nunca añaden "-s": se dice "She can speak", nunca "*She cans*".'
      }
    },
    {
      id: 'cm_u02_l26_02',
      incorrect: 'I can to swim very well.',
      correct: 'I can swim very well.',
      whyExplanation: 'CAN is followed directly by the bare infinitive without "to".',
      explanationsByLang: {
        hi: 'CAN के बाद "to" का प्रयोग न करें। "I can swim" कहें।',
        es: 'Después de CAN nunca se pone "to". Se dice "I can swim", no "*I can to swim*".'
      }
    },
    {
      id: 'cm_u02_l26_03',
      incorrect: 'Do you can drive a car?',
      correct: 'Can you drive a car?',
      whyExplanation: 'Do not use auxiliary DO/DOES with modal verbs. Invert CAN and the subject directly.',
      explanationsByLang: {
        hi: 'CAN वाले प्रश्नों में Do या Does नहीं लगता। "Can you drive?" कहें।',
        es: 'No se usa el auxiliar DO con CAN. Se invierte directamente: "¿Can you drive?".'
      }
    },
    {
      id: 'cm_u02_l26_04',
      incorrect: 'Can you play piano? — Yes, I do.',
      correct: 'Can you play piano? — Yes, I can.',
      whyExplanation: 'Questions starting with CAN must be answered with CAN: "Yes, I can."',
      explanationsByLang: {
        hi: 'CAN से शुरू होने वाले सवालों का जवाब CAN से दें: "Yes, I can."।',
        es: 'Las preguntas con CAN se responden con CAN: "Yes, I can", no "*Yes, I do*".'
      }
    },
    {
      id: 'cm_u02_l26_05',
      incorrect: 'Can I sitting here?',
      correct: 'Can I sit here?',
      whyExplanation: 'Use the base form of the verb after CAN, never the -ing participle.',
      explanationsByLang: {
        hi: 'CAN के बाद क्रिया में -ing न लगाएं। मूल क्रिया "sit" का प्रयोग करें।',
        es: 'Tras CAN se usa la forma base del verbo, nunca el gerundio en -ing.'
      }
    },
    {
      id: 'cm_u02_l26_06',
      incorrect: 'He cannot to cook Italian food.',
      correct: 'He cannot cook Italian food. / He can\'t cook.',
      whyExplanation: 'Even in negative form, do not insert "to" before the main verb.',
      explanationsByLang: {
        hi: 'नकारात्मक रूप में भी "to" नहीं लगता। "He cannot cook" कहें।',
        es: 'Incluso en negativa, no se añade "to": "He cannot cook".'
      }
    }
  ],

  // SECTION 7: Realistic Adult Dialogues (3 dialogues)
  dialogues: [
    {
      id: 'd_u02_l26_01',
      title: 'Job Interview: Practical Skills & Abilities',
      context: 'Sarah is interviewing for an administrative coordinator position at an international company.',
      turns: [
        {
          speaker: 'Manager',
          text: 'Welcome Sarah! Can you tell me about your language skills?',
          translationByLang: {
            hi: 'स्वागत है सारा! क्या आप मुझे अपने भाषा कौशल के बारे में बता सकती हैं?',
            es: '¡Bienvenida Sarah! ¿Puedes hablarme de tus habilidades lingüísticas?'
          },
          audioId: 'en_a1_u02_l26_d01_01'
        },
        {
          speaker: 'Sarah',
          text: 'Yes! I can speak English fluently, and I can also speak conversational Spanish.',
          translationByLang: {
            hi: 'हाँ! मैं धाराप्रवाह अंग्रेजी बोल सकती हूँ, और मैं बातचीत के स्तर की स्पेनिश भी बोल सकती हूँ।',
            es: '¡Sí! Puedo hablar inglés con fluidez y también español a nivel conversacional.'
          },
          audioId: 'en_a1_u02_l26_d01_02'
        },
        {
          speaker: 'Manager',
          text: 'That is impressive! Can you use advanced office software and drive a car?',
          translationByLang: {
            hi: 'यह प्रभावशाली है! क्या आप उन्नत कार्यालय सॉफ्टवेयर का उपयोग कर सकती हैं और कार चला सकती हैं?',
            es: '¡Eso es impresionante! ¿Sabes usar software avanzado de oficina y conducir un coche?'
          },
          audioId: 'en_a1_u02_l26_d01_03'
        },
        {
          speaker: 'Sarah',
          text: 'Yes, I can type very fast, use spreadsheets, and I have a clean driver\'s license, so I can drive safely.',
          translationByLang: {
            hi: 'हाँ, मैं बहुत तेज़ टाइप कर सकती हूँ, स्प्रेडशीट का उपयोग कर सकती हूँ, और मेरे पास ड्राइविंग लाइसेंस है, इसलिए मैं सुरक्षित रूप से गाड़ी चला सकती हूँ।',
            es: 'Sí, puedo escribir muy rápido, usar hojas de cálculo y tengo carnet de conducir en regla, así que puedo conducir con seguridad.'
          },
          audioId: 'en_a1_u02_l26_d01_04'
        }
      ]
    },
    {
      id: 'd_u02_l26_02',
      title: 'In the Shared Office: Asking for Permission',
      context: 'David asks his colleague Lisa for permission to borrow equipment and use a meeting room.',
      turns: [
        {
          speaker: 'David',
          text: 'Excuse me Lisa, can I borrow your phone charger for thirty minutes?',
          translationByLang: {
            hi: 'माफ़ कीजिए लीसा, क्या मैं तीस मिनट के लिए आपका फोन चार्जर उधार ले सकता हूँ?',
            es: 'Disculpa Lisa, ¿puedo pedir prestado tu cargador de móvil por treinta minutos?'
          },
          audioId: 'en_a1_u02_l26_d02_01'
        },
        {
          speaker: 'Lisa',
          text: 'Of course you can! It is right here on my desk. Help yourself.',
          translationByLang: {
            hi: 'बिल्कुल आप ले सकते हैं! यह मेरी मेज पर यहीं है। ले लीजिए।',
            es: '¡Por supuesto que puedes! Está aquí mismo en mi escritorio. Tómalo.'
          },
          audioId: 'en_a1_u02_l26_d02_02'
        },
        {
          speaker: 'David',
          text: 'Thank you! Also, can we use Conference Room B for a quick client call?',
          translationByLang: {
            hi: 'धन्यवाद! इसके अलावा, क्या हम एक त्वरित क्लाइंट कॉल के लिए सम्मेलन कक्ष B का उपयोग कर सकते हैं?',
            es: '¡Gracias! Además, ¿podemos usar la Sala de Conferencias B para una llamada rápida con un cliente?'
          },
          audioId: 'en_a1_u02_l26_d02_03'
        },
        {
          speaker: 'Lisa',
          text: 'Yes, you can. Nobody is in that room right now.',
          translationByLang: {
            hi: 'हाँ, आप कर सकते हैं। उस कमरे में अभी कोई नहीं है।',
            es: 'Sí, podéis. No hay nadie en esa sala en este momento.'
          },
          audioId: 'en_a1_u02_l26_d02_04'
        }
      ]
    },
    {
      id: 'd_u02_l26_03',
      title: 'At the Community Center: Rules and Payment',
      context: 'Alex inquires about center facilities, parking rules, and payment methods.',
      turns: [
        {
          speaker: 'Alex',
          text: 'Hello! Can I park my car in the visitor parking lot outside?',
          translationByLang: {
            hi: 'नमस्ते! क्या मैं बाहर आगंतुक पार्किंग में अपनी कार पार्क कर सकता हूँ?',
            es: '¡Hola! ¿Puedo aparcar mi coche en el estacionamiento de visitas afuera?'
          },
          audioId: 'en_a1_u02_l26_d03_01'
        },
        {
          speaker: 'Clerk',
          text: 'Yes, you can park there for two hours for free. But you can\'t park in front of the emergency exit.',
          translationByLang: {
            hi: 'हाँ, आप वहाँ दो घंटे मुफ्त में पार्क कर सकते हैं। लेकिन आप आपातकालीन निकास के सामने पार्क नहीं कर सकते।',
            es: 'Sí, puedes aparcar allí durante dos horas gratis. Pero no puedes aparcar frente a la salida de emergencia.'
          },
          audioId: 'en_a1_u02_l26_d03_02'
        },
        {
          speaker: 'Alex',
          text: 'Understood. Can we pay for the fitness pass by credit card?',
          translationByLang: {
            hi: 'समझ गया। क्या हम क्रेडिट कार्ड से फिटनेस पास का भुगतान कर सकते हैं?',
            es: 'Entendido. ¿Podemos pagar el pase del gimnasio con tarjeta de crédito?'
          },
          audioId: 'en_a1_u02_l26_d03_03'
        },
        {
          speaker: 'Clerk',
          text: 'Yes, of course! You can pay by card, cash, or mobile pay.',
          translationByLang: {
            hi: 'हाँ, बिल्कुल! आप कार्ड, नकद या मोबाइल पे से भुगतान कर सकते हैं।',
            es: '¡Sí, por supuesto! Puedes pagar con tarjeta, en efectivo o con el móvil.'
          },
          audioId: 'en_a1_u02_l26_d03_04'
        }
      ]
    }
  ],

  // SECTION 8: Practice Exercises (15 canonical items)
  practiceExercises: [
    {
      id: 'ex_u02_l26_p01',
      lessonId: 'lesson_a1_2_26',
      type: 'multiple_choice',
      prompt: 'Select the grammatically correct sentence:',
      options: [
        { id: 'a', text: 'She can speak three languages fluently.', isCorrect: true },
        { id: 'b', text: 'She cans speak three languages fluently.', isCorrect: false },
        { id: 'c', text: 'She can to speak three languages fluently.', isCorrect: false },
        { id: 'd', text: 'She can speaking three languages fluently.', isCorrect: false }
      ],
      explanation: 'The modal "can" never takes an -s ending and is followed by the bare infinitive.'
    },
    {
      id: 'ex_u02_l26_p02',
      lessonId: 'lesson_a1_2_26',
      type: 'fill_in_blank',
      prompt: 'Complete the negative sentence: "I _______ swim in deep water without a life jacket."',
      correctAnswer: 'can\'t',
      options: [
        { id: 'opt_1', text: 'can\'t', isCorrect: true },
        { id: 'opt_2', text: 'cannot to', isCorrect: false },
        { id: 'opt_3', text: 'am not can', isCorrect: false },
        { id: 'opt_4', text: 'don\'t can', isCorrect: false }
      ],
      explanation: '"can\'t" is the standard contracted negative form for lack of ability.'
    },
    {
      id: 'ex_u02_l26_p03',
      lessonId: 'lesson_a1_2_26',
      type: 'reorder',
      prompt: 'Arrange the words to form a polite request for permission:',
      words: ['Can', 'I', 'sit', 'here,', 'please?'],
      correctOrder: ['Can', 'I', 'sit', 'here,', 'please?'],
      explanation: 'Polite permission question order: Can + I + sit + here + please?'
    },
    {
      id: 'ex_u02_l26_p04',
      lessonId: 'lesson_a1_2_26',
      type: 'multiple_choice',
      prompt: 'How do you answer: "Can you play the guitar?"',
      options: [
        { id: 'a', text: 'Yes, I can.', isCorrect: true },
        { id: 'b', text: 'Yes, I do.', isCorrect: false },
        { id: 'c', text: 'Yes, I am.', isCorrect: false },
        { id: 'd', text: 'Yes, I play.', isCorrect: false }
      ],
      explanation: 'Short answer to a question starting with CAN is "Yes, I can" or "No, I can\'t".'
    },
    {
      id: 'ex_u02_l26_p05',
      lessonId: 'lesson_a1_2_26',
      type: 'match_pairs',
      prompt: 'Match each verb phrase with its corresponding English meaning:',
      pairs: [
        { id: 'p1', left: 'drive a car', right: 'operate a motor vehicle' },
        { id: 'p2', left: 'type fast', right: 'write quickly on a keyboard' },
        { id: 'p3', left: 'fix things', right: 'repair broken objects' },
        { id: 'p4', left: 'speak English', right: 'communicate in English' }
      ]
    },
    {
      id: 'ex_u02_l26_p06',
      lessonId: 'lesson_a1_2_26',
      type: 'error_correction',
      prompt: 'Find and fix the error: "He can to drive a manual car."',
      errorSentence: 'He can to drive a manual car.',
      targetSentence: 'He can drive a manual car.',
      options: [
        { id: 'opt_1', text: 'He can drive a manual car.', isCorrect: true },
        { id: 'opt_2', text: 'He cans drive a manual car.', isCorrect: false },
        { id: 'opt_3', text: 'He can to drive a manual car.', isCorrect: false },
        { id: 'opt_4', text: 'He is can drive a manual car.', isCorrect: false }
      ],
      explanation: 'Do not use "to" after the modal verb CAN.'
    },
    {
      id: 'ex_u02_l26_p07',
      lessonId: 'lesson_a1_2_26',
      type: 'fill_in_blank',
      prompt: 'Complete the question: "_______ you help me carry this heavy box?"',
      correctAnswer: 'Can',
      options: [
        { id: 'opt_1', text: 'Can', isCorrect: true },
        { id: 'opt_2', text: 'Do', isCorrect: false },
        { id: 'opt_3', text: 'Are', isCorrect: false },
        { id: 'opt_4', text: 'Have', isCorrect: false }
      ],
      explanation: 'Use CAN to ask for assistance or ability.'
    },
    {
      id: 'ex_u02_l26_p08',
      lessonId: 'lesson_a1_2_26',
      type: 'multiple_choice',
      prompt: 'Which sentence states a prohibition (something not permitted)?',
      options: [
        { id: 'a', text: 'You can\'t park in front of the emergency exit.', isCorrect: true },
        { id: 'b', text: 'You can park in visitor bay 3.', isCorrect: false },
        { id: 'c', text: 'Can you park the car for me?', isCorrect: false },
        { id: 'd', text: 'I can park very easily.', isCorrect: false }
      ],
      explanation: '"You can\'t..." is used to indicate rules and prohibitions.'
    },
    {
      id: 'ex_u02_l26_p09',
      lessonId: 'lesson_a1_2_26',
      type: 'reorder',
      prompt: 'Arrange the words to form a correct question:',
      words: ['Can', 'we', 'pay', 'by', 'credit', 'card?'],
      correctOrder: ['Can', 'we', 'pay', 'by', 'credit', 'card?'],
      explanation: 'Question structure: Can + Subject (we) + Verb (pay) + by credit card?'
    },
    {
      id: 'ex_u02_l26_p10',
      lessonId: 'lesson_a1_2_26',
      type: 'multiple_choice',
      prompt: 'Select the correct phrase to grant permission warmly:',
      options: [
        { id: 'a', text: 'Of course you can! Help yourself.', isCorrect: true },
        { id: 'b', text: 'No you don\'t can.', isCorrect: false },
        { id: 'c', text: 'Yes, you do.', isCorrect: false },
        { id: 'd', text: 'You can to do it.', isCorrect: false }
      ],
      explanation: '"Of course you can!" is a natural, polite response granting permission.'
    },
    {
      id: 'ex_u02_l26_p11',
      lessonId: 'lesson_a1_2_26',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "My grandfather is very handy; he _______ fix almost anything."',
      correctAnswer: 'can',
      options: [
        { id: 'opt_1', text: 'can', isCorrect: true },
        { id: 'opt_2', text: 'cans', isCorrect: false },
        { id: 'opt_3', text: 'can to', isCorrect: false },
        { id: 'opt_4', text: 'is can', isCorrect: false }
      ],
      explanation: 'Use "can" (invariable) with third person singular subjects.'
    },
    {
      id: 'ex_u02_l26_p12',
      lessonId: 'lesson_a1_2_26',
      type: 'match_pairs',
      prompt: 'Match the question with the most appropriate response:',
      pairs: [
        { id: 'p1', left: 'Can I borrow your pen?', right: 'Sure, go ahead.' },
        { id: 'p2', left: 'Can you speak German?', right: 'No, I can\'t.' },
        { id: 'p3', left: 'Can we sit here?', right: 'Yes, these seats are free.' },
        { id: 'p4', left: 'Can you hear me?', right: 'Yes, loud and clear.' }
      ]
    },
    {
      id: 'ex_u02_l26_p13',
      lessonId: 'lesson_a1_2_26',
      type: 'multiple_choice',
      prompt: 'Which response correctly means "I am unable to hear you"?',
      options: [
        { id: 'a', text: 'I can\'t hear you clearly.', isCorrect: true },
        { id: 'b', text: 'I don\'t can hear you.', isCorrect: false },
        { id: 'c', text: 'I am not hearing can.', isCorrect: false },
        { id: 'd', text: 'I not can listen you.', isCorrect: false }
      ],
      explanation: '"I can\'t hear you clearly" expresses inability to hear.'
    },
    {
      id: 'ex_u02_l26_p14',
      lessonId: 'lesson_a1_2_26',
      type: 'reorder',
      prompt: 'Reorder the words to make a true statement:',
      words: ['Elena', 'can', 'play', 'the', 'violin', 'beautifully.'],
      correctOrder: ['Elena', 'can', 'play', 'the', 'violin', 'beautifully.'],
      explanation: 'Subject + can + play + the violin + adverb.'
    },
    {
      id: 'ex_u02_l26_p15',
      lessonId: 'lesson_a1_2_26',
      type: 'error_correction',
      prompt: 'Find and fix the error: "Do you can speak English?"',
      errorSentence: 'Do you can speak English?',
      targetSentence: 'Can you speak English?',
      options: [
        { id: 'opt_1', text: 'Can you speak English?', isCorrect: true },
        { id: 'opt_2', text: 'Do you can speak English?', isCorrect: false },
        { id: 'opt_3', text: 'Are you can speak English?', isCorrect: false },
        { id: 'opt_4', text: 'Can you to speak English?', isCorrect: false }
      ],
      explanation: 'Never use "Do" with modal CAN.'
    }
  ],

  // SECTION 9: Review Exercises (5 items)
  reviewExercises: [
    {
      id: 'ex_u02_l26_r01',
      lessonId: 'lesson_a1_2_26',
      type: 'multiple_choice',
      prompt: 'Choose the correct sentence to ask for permission:',
      options: [
        { id: 'a', text: 'Can I open the window, please?', isCorrect: true },
        { id: 'b', text: 'Do I can open the window, please?', isCorrect: false },
        { id: 'c', text: 'Can I to open the window, please?', isCorrect: false },
        { id: 'd', text: 'Can I opening the window, please?', isCorrect: false }
      ],
      explanation: '"Can I open..." is the correct formula for asking permission.'
    },
    {
      id: 'ex_u02_l26_r02',
      lessonId: 'lesson_a1_2_26',
      type: 'fill_in_blank',
      prompt: 'Complete the sentence: "He is a chef, so he _______ cook amazing dishes."',
      correctAnswer: 'can',
      options: [
        { id: 'opt_1', text: 'can', isCorrect: true },
        { id: 'opt_2', text: 'cans', isCorrect: false },
        { id: 'opt_3', text: 'can to', isCorrect: false },
        { id: 'opt_4', text: 'has can', isCorrect: false }
      ],
      explanation: '"can" expresses acquired ability.'
    },
    {
      id: 'ex_u02_l26_r03',
      lessonId: 'lesson_a1_2_26',
      type: 'reorder',
      prompt: 'Reorder the words to state a prohibition:',
      words: ['You', 'can\'t', 'park', 'your', 'car', 'here.'],
      correctOrder: ['You', 'can\'t', 'park', 'your', 'car', 'here.'],
      explanation: 'Subject + can\'t + verb + object + location adverb.'
    },
    {
      id: 'ex_u02_l26_r04',
      lessonId: 'lesson_a1_2_26',
      type: 'match_pairs',
      prompt: 'Match the modal statement with its communicative function:',
      pairs: [
        { id: 'p1', left: 'I can speak two languages.', right: 'Stating an ability' },
        { id: 'p2', left: 'Can I borrow your phone?', right: 'Asking for permission' },
        { id: 'p3', left: 'You can\'t enter without a badge.', right: 'Expressing prohibition' },
        { id: 'p4', left: 'Can you help me?', right: 'Requesting assistance' }
      ]
    },
    {
      id: 'ex_u02_l26_r05',
      lessonId: 'lesson_a1_2_26',
      type: 'multiple_choice',
      prompt: 'What is the negative short answer to: "Can your brother drive?"',
      options: [
        { id: 'a', text: 'No, he can\'t.', isCorrect: true },
        { id: 'b', text: 'No, he doesn\'t.', isCorrect: false },
        { id: 'c', text: 'No, he isn\'t.', isCorrect: false },
        { id: 'd', text: 'No, he not can.', isCorrect: false }
      ],
      explanation: 'Short answer uses the subject pronoun and negative modal: "No, he can\'t."'
    }
  ],

  // SECTION 10: Assessment Exercises (5 items)
  assessmentExercises: [
    {
      id: 'ex_u02_l26_a01',
      lessonId: 'lesson_a1_2_26',
      type: 'multiple_choice',
      prompt: 'Which of the following is completely grammatically correct?',
      options: [
        { id: 'a', text: 'David can type eighty words per minute on a computer.', isCorrect: true },
        { id: 'b', text: 'David cans type eighty words per minute on a computer.', isCorrect: false },
        { id: 'c', text: 'David can to type eighty words per minute on a computer.', isCorrect: false },
        { id: 'd', text: 'David is can type eighty words per minute on a computer.', isCorrect: false }
      ],
      explanation: 'Modal "can" + base verb "type".'
    },
    {
      id: 'ex_u02_l26_a02',
      lessonId: 'lesson_a1_2_26',
      type: 'fill_in_blank',
      prompt: 'Fill in the blank: "Excuse me, _______ we use this conference room for ten minutes?"',
      correctAnswer: 'can',
      options: [
        { id: 'opt_1', text: 'can', isCorrect: true },
        { id: 'opt_2', text: 'do', isCorrect: false },
        { id: 'opt_3', text: 'are', isCorrect: false },
        { id: 'opt_4', text: 'have', isCorrect: false }
      ],
      explanation: 'Use "can we use..." to politely ask for permission.'
    },
    {
      id: 'ex_u02_l26_a03',
      lessonId: 'lesson_a1_2_26',
      type: 'reorder',
      prompt: 'Arrange the words to form a correct negative statement:',
      words: ['He', 'can\'t', 'swim', 'in', 'deep', 'water.'],
      correctOrder: ['He', 'can\'t', 'swim', 'in', 'deep', 'water.'],
      explanation: 'Subject (He) + can\'t + verb (swim) + prepositional phrase (in deep water).'
    },
    {
      id: 'ex_u02_l26_a04',
      lessonId: 'lesson_a1_2_26',
      type: 'match_pairs',
      prompt: 'Match each question with its correct short answer:',
      pairs: [
        { id: 'p1', left: 'Can you speak Spanish?', right: 'Yes, I can.' },
        { id: 'p2', left: 'Can she drive a van?', right: 'No, she can\'t.' },
        { id: 'p3', left: 'Can they cook Italian food?', right: 'Yes, they can.' },
        { id: 'p4', left: 'Can I sit here?', right: 'Yes, you can.' }
      ]
    },
    {
      id: 'ex_u02_l26_a05',
      lessonId: 'lesson_a1_2_26',
      type: 'multiple_choice',
      prompt: 'Select the best phrase to ask someone to speak more slowly:',
      options: [
        { id: 'a', text: 'Could you please speak and repeat that slowly?', isCorrect: true },
        { id: 'b', text: 'Do you can speak slow repeat?', isCorrect: false },
        { id: 'c', text: 'Can you to speaking slow?', isCorrect: false },
        { id: 'd', text: 'Are you can repeat slow?', isCorrect: false }
      ],
      explanation: 'Polite request with modal verb and base verb.'
    }
  ]
};
