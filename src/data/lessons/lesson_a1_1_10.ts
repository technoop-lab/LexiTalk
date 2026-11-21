import { DetailedLessonData } from '../../types';

export const LESSON_A1_1_10_DATA: DetailedLessonData = {
  id: 'lesson_a1_1_10',
  unitId: 'unit_a1_1',
  title: 'Days of the Week & Adverbs of Frequency',
  cefr: 'A1',
  icon: '📅',
  estimatedMinutes: 25,
  learningObjective: {
    title: 'Adverbs of Frequency & Weekly Schedule Patterns',
    description: 'Learn the days of the week, frequency adverbs (always, usually, often, sometimes, rarely, never), their precise syntactic placement before main verbs vs. after the BE verb, and prepositions with time (on Monday, at the weekend).',
    descriptionsByLang: {
      hi: 'सप्ताह के दिनों के नाम और बारंबारता दर्शाने वाले क्रियाविशेषण (Adverbs of Frequency: always, usually, often, sometimes, rarely, never) सीखें। वाक्य में इनका सही स्थान और प्रीपोजिशन (on Monday, at the weekend) का प्रयोग करें।',
      es: 'Aprende los días de la semana y los adverbios de frecuencia (always, usually, often, sometimes, rarely, never), su posición exacta en la oración (antes del verbo principal / después de to be) y preposiciones temporales.',
      fr: 'Apprenez les jours de la semaine et les adverbes de fréquence (always, usually, often, sometimes, rarely, never) ainsi que leur place dans la phrase.',
      de: 'Lernen Sie die Wochentage und Häufigkeitsadverbien (always, usually, often, sometimes, rarely, never) sowie deren Satzstellung.',
      pt: 'Aprenda os dias da semana e os advérbios de frequência (always, usually, often, sometimes, rarely, never) e seu posicionamento na frase.',
      zh: '学习星期名称、频率副词（always/usually/often/sometimes/rarely/never）在句中的精准位置（实义动词前/be动词后）及时间介词搭配。',
      ar: 'تعلم أيام الأسبوع وظروف التكرار (always, usually, often, sometimes, rarely, never) وموقعها في الجملة وحروف الجر الزمنية.',
      ja: '曜日と頻度を表す副詞（always, usually, often, sometimes, rarely, never）の位置（一般動詞の前／be動詞の後）や前置詞の使い方を学びます。',
      ru: 'Изучите дни недели и наречия частотности (always, usually, often, sometimes, rarely, never), их позицию в предложении и временные предлоги.'
    },
    canDoStatements: [
      'Name all seven days of the week with accurate pronunciation and capitalization',
      'Use frequency adverbs: always (100%), usually (80%), often (60%), sometimes (50%), rarely (10%), never (0%)',
      'Place frequency adverbs correctly: BEFORE main verbs (e.g. "I always drink coffee")',
      'Place frequency adverbs correctly: AFTER verb to be (e.g. "He is always punctual")',
      'Use correct time prepositions: "on Monday", "on weekdays", "at the weekend"',
      'Ask and answer "How often do you go to the gym?"'
    ],
    canDoByLang: {
      hi: [
        'सप्ताह के सातों दिनों के नाम और उच्चारण का अभ्यास',
        'Always, usually, often, sometimes, never का सही वाक्य में उपयोग',
        'Main verb से पहले और "BE" verb के बाद frequency adverb का स्थान',
        '"on Monday", "at the weekend" का सही प्रयोग'
      ],
      es: [
        'Nombrar los siete días de la semana con mayúscula inicial',
        'Usar adverbios de frecuencia en la posición correcta',
        'Preguntar y responder con "How often...?"'
      ]
    }
  },

  // SECTION 3: Core Vocabulary (20 items)
  vocabulary: [
    {
      id: 'v_day_monday',
      word: 'Monday',
      phonetic: '/ˈmʌn.deɪ/',
      meaning: 'The first working day of the traditional week',
      translationsByLang: { hi: 'सोमवार', es: 'lunes', fr: 'lundi', de: 'Montag', pt: 'segunda-feira', zh: '星期一', ar: 'الاثنين', ja: '月曜日', ru: 'понедельник' },
      exampleSentence: 'I start my new job on Monday.',
      exampleTranslationByLang: { hi: 'मैं सोमवार को अपनी नई नौकरी शुरू कर रहा हूँ।', es: 'Empiezo mi nuevo trabajo el lunes.' },
      audioText: 'Monday',
      audioId: 'en_a1_u01_l10_v_monday',
      slowAudioId: 'en_a1_u01_l10_v_monday_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗓️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_day_tuesday',
      word: 'Tuesday',
      phonetic: '/ˈtuːz.deɪ/',
      meaning: 'The second day of the traditional working week',
      translationsByLang: { hi: 'मंगलवार', es: 'martes', fr: 'mardi', de: 'Dienstag', pt: 'terça-feira', zh: '星期二', ar: 'الثلاثاء', ja: '火曜日', ru: 'вторник' },
      exampleSentence: 'We have English class on Tuesday.',
      exampleTranslationByLang: { hi: 'मंगलवार को हमारी अंग्रेजी की कक्षा होती है।', es: 'Tenemos clase de inglés el martes.' },
      audioText: 'Tuesday',
      audioId: 'en_a1_u01_l10_v_tuesday',
      slowAudioId: 'en_a1_u01_l10_v_tuesday_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗓️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_day_wednesday',
      word: 'Wednesday',
      phonetic: '/ˈwenz.deɪ/',
      meaning: 'The middle weekday (silent \'d\')',
      translationsByLang: { hi: 'बुधवार', es: 'miércoles', fr: 'mercredi', de: 'Mittwoch', pt: 'quarta-feira', zh: '星期三', ar: 'الأربعاء', ja: '水曜日', ru: 'среда' },
      exampleSentence: 'Wednesday is a busy day for our team.',
      exampleTranslationByLang: { hi: 'बुधवार हमारी टीम के लिए एक व्यस्त दिन होता है।', es: 'El miércoles es un día ajetreado para nuestro equipo.' },
      audioText: 'Wednesday',
      audioId: 'en_a1_u01_l10_v_wednesday',
      slowAudioId: 'en_a1_u01_l10_v_wednesday_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗓️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_day_thursday',
      word: 'Thursday',
      phonetic: '/ˈθɝːz.deɪ/',
      meaning: 'The fourth weekday of the week',
      translationsByLang: { hi: 'गुरुवार / बृहस्पतिवार', es: 'jueves', fr: 'jeudi', de: 'Donnerstag', pt: 'quinta-feira', zh: '星期四', ar: 'الخميس', ja: '木曜日', ru: 'четверг' },
      exampleSentence: 'I meet my mentor every Thursday afternoon.',
      exampleTranslationByLang: { hi: 'मैं हर गुरुवार दोपहर अपने मेंटर से मिलता हूँ।', es: 'Me reúno con mi mentor todos los jueves por la tarde.' },
      audioText: 'Thursday',
      audioId: 'en_a1_u01_l10_v_thursday',
      slowAudioId: 'en_a1_u01_l10_v_thursday_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🗓️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_day_friday',
      word: 'Friday',
      phonetic: '/ˈfraɪ.deɪ/',
      meaning: 'The final day of the traditional working week',
      translationsByLang: { hi: 'शुक्रवार', es: 'viernes', fr: 'vendredi', de: 'Freitag', pt: 'sexta-feira', zh: '星期五', ar: 'الجمعة', ja: '金曜日', ru: 'пятница' },
      exampleSentence: 'We finish work early on Friday.',
      exampleTranslationByLang: { hi: 'शुक्रवार को हम काम जल्दी समाप्त करते हैं।', es: 'Terminamos de trabajar temprano el viernes.' },
      audioText: 'Friday',
      audioId: 'en_a1_u01_l10_v_friday',
      slowAudioId: 'en_a1_u01_l10_v_friday_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🎉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_day_saturday',
      word: 'Saturday',
      phonetic: '/ˈsæt̬.ɚ.deɪ/',
      meaning: 'The first day of the weekend',
      translationsByLang: { hi: 'शनिवार', es: 'sábado', fr: 'samedi', de: 'Samstag', pt: 'sábado', zh: '星期六', ar: 'السبت', ja: '土曜日', ru: 'суббота' },
      exampleSentence: 'On Saturday, I sleep until 9:00 AM.',
      exampleTranslationByLang: { hi: 'शनिवार को मैं सुबह 9:00 बजे तक सोता हूँ।', es: 'Los sábados duermo hasta las 9:00 AM.' },
      audioText: 'Saturday',
      audioId: 'en_a1_u01_l10_v_saturday',
      slowAudioId: 'en_a1_u01_l10_v_saturday_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '☀️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_day_sunday',
      word: 'Sunday',
      phonetic: '/ˈsʌn.deɪ/',
      meaning: 'The second day of the weekend',
      translationsByLang: { hi: 'रविवार', es: 'domingo', fr: 'dimanche', de: 'Sonntag', pt: 'domingo', zh: '星期日', ar: 'الأحد', ja: '日曜日', ru: 'воскресенье' },
      exampleSentence: 'We have family lunch on Sunday.',
      exampleTranslationByLang: { hi: 'रविवार को हम परिवार के साथ दोपहर का भोजन करते हैं।', es: 'Almorzamos en familia los domingos.' },
      audioText: 'Sunday',
      audioId: 'en_a1_u01_l10_v_sunday',
      slowAudioId: 'en_a1_u01_l10_v_sunday_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🍲',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_day_weekend',
      word: 'weekend',
      phonetic: '/ˈwiːk.end/',
      meaning: 'Saturday and Sunday together',
      translationsByLang: { hi: 'सप्ताहांत (शनिवार-रविवार)', es: 'fin de semana', fr: 'week-end', de: 'Wochenende', pt: 'fim de semana', zh: '周末', ar: 'عطلة نهاية الأسبوع', ja: '週末', ru: 'выходные' },
      exampleSentence: 'What do you do at the weekend?',
      exampleTranslationByLang: { hi: 'आप वीकेंड पर क्या करते हैं?', es: '¿Qué haces el fin de semana?' },
      audioText: 'weekend',
      audioId: 'en_a1_u01_l10_v_weekend',
      slowAudioId: 'en_a1_u01_l10_v_weekend_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏖️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_day_weekday',
      word: 'weekday',
      phonetic: '/ˈwiːk.deɪ/',
      meaning: 'Any working day from Monday through Friday',
      translationsByLang: { hi: 'सप्ताह का कार्यदिवस (सोमवार-शुक्रवार)', es: 'día laborable / entre semana', fr: 'jour de semaine', de: 'Wochentag / Werktag', pt: 'dia de semana', zh: '工作日', ar: 'يوم من أيام الأسبوع', ja: '平日', ru: 'будний день' },
      exampleSentence: 'I wake up at 6:30 on weekdays.',
      exampleTranslationByLang: { hi: 'मैं कार्यदिवसों (सोम-शुक्र) में 6:30 बजे उठता हूँ।', es: 'Me despierto a las 6:30 los días laborables.' },
      audioText: 'weekday',
      audioId: 'en_a1_u01_l10_v_weekday',
      slowAudioId: 'en_a1_u01_l10_v_weekday_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🏢',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adv_always',
      word: 'always',
      phonetic: '/ˈɑːl.weɪz/',
      meaning: '100% of the time, on all occasions',
      translationsByLang: { hi: 'हमेशा / सदैव (100%)', es: 'siempre (100%)', fr: 'toujours (100%)', de: 'immer (100%)', pt: 'sempre (100%)', zh: '总是 / 一直 (100%)', ar: 'دائماً (100%)', ja: 'いつも / 常に (100%)', ru: 'всегда (100%)' },
      exampleSentence: 'I always brush my teeth before bed.',
      exampleTranslationByLang: { hi: 'मैं हमेशा सोने से पहले ब्रश करता हूँ।', es: 'Siempre me lavo los dientes antes de acostarme.' },
      audioText: 'always',
      audioId: 'en_a1_u01_l10_v_always',
      slowAudioId: 'en_a1_u01_l10_v_always_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '💯',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adv_usually',
      word: 'usually',
      phonetic: '/ˈjuː.ʒu.ə.li/',
      meaning: 'About 80% of the time, generally or typically',
      translationsByLang: { hi: 'आमतौर पर / प्रायः (80%)', es: 'usualmente / normalmente (80%)', fr: 'd\'habitude / généralement (80%)', de: 'normalerweise / gewöhnlich (80%)', pt: 'geralmente / normalmente (80%)', zh: '通常 (80%)', ar: 'عادةً (80%)', ja: 'たいてい / 普段は (80%)', ru: 'обычно (80%)' },
      exampleSentence: 'I usually drink coffee in the morning.',
      exampleTranslationByLang: { hi: 'मैं आमतौर पर सुबह कॉफी पीता हूँ।', es: 'Normalmente tomo café por la mañana.' },
      audioText: 'usually',
      audioId: 'en_a1_u01_l10_v_usually',
      slowAudioId: 'en_a1_u01_l10_v_usually_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📈',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adv_often',
      word: 'often',
      phonetic: '/ˈɑːf.ən/',
      meaning: 'About 60% of the time, frequently (silent \'t\')',
      translationsByLang: { hi: 'अक्सर / कई बार (60%)', es: 'a menudo / frecuentemente (60%)', fr: 'souvent (60%)', de: 'oft / häufig (60%)', pt: 'frequentemente (60%)', zh: '经常 (60%)', ar: 'غالباً (60%)', ja: 'よく / しばしば (60%)', ru: 'часто (60%)' },
      exampleSentence: 'We often eat lunch in the city park.',
      exampleTranslationByLang: { hi: 'हम अक्सर शहर के पार्क में लंच करते हैं।', es: 'A menudo almorzamos en el parque de la ciudad.' },
      audioText: 'often',
      audioId: 'en_a1_u01_l10_v_often',
      slowAudioId: 'en_a1_u01_l10_v_often_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🔄',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adv_sometimes',
      word: 'sometimes',
      phonetic: '/ˈsʌm.taɪmz/',
      meaning: 'About 50% of the time, on some occasions',
      translationsByLang: { hi: 'कभी-कभी (50%)', es: 'a veces / algunas veces (50%)', fr: 'parfois / quelquefois (50%)', de: 'manchmal (50%)', pt: 'às vezes (50%)', zh: '有时 (50%)', ar: 'أحياناً (50%)', ja: '時々 (50%)', ru: 'иногда (50%)' },
      exampleSentence: 'I sometimes cook dinner with my roommate.',
      exampleTranslationByLang: { hi: 'मैं कभी-कभी अपने रूममेट के साथ खाना बनाता हूँ।', es: 'A veces cocino la cena con mi compañero de piso.' },
      audioText: 'sometimes',
      audioId: 'en_a1_u01_l10_v_sometimes',
      slowAudioId: 'en_a1_u01_l10_v_sometimes_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⚖️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adv_rarely',
      word: 'rarely',
      phonetic: '/ˈrer.li/',
      meaning: 'About 10% of the time, seldom or not often',
      translationsByLang: { hi: 'शायद ही कभी / दुर्लभ रूप से (10%)', es: 'raramente / casi nunca (10%)', fr: 'rarement (10%)', de: 'selten (10%)', pt: 'raramente (10%)', zh: '很少 / 难得 (10%)', ar: 'نادراً (10%)', ja: 'めったに〜ない (10%)', ru: 'редко (10%)' },
      exampleSentence: 'He rarely drinks soda or sweet drinks.',
      exampleTranslationByLang: { hi: 'वह शायद ही कभी सोडा या मीठे पेय पीता है।', es: 'Él casi nunca bebe refrescos o bebidas dulces.' },
      audioText: 'rarely',
      audioId: 'en_a1_u01_l10_v_rarely',
      slowAudioId: 'en_a1_u01_l10_v_rarely_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '📉',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_adv_never',
      word: 'never',
      phonetic: '/ˈnev.ɚ/',
      meaning: '0% of the time, at no time',
      translationsByLang: { hi: 'कभी नहीं (0%)', es: 'nunca / jamás (0%)', fr: 'jamais (0%)', de: 'nie / niemals (0%)', pt: 'nunca (0%)', zh: '从不 (0%)', ar: 'أبداً (0%)', ja: '決して〜ない (0%)', ru: 'никогда (0%)' },
      exampleSentence: 'They never arrive late for class.',
      exampleTranslationByLang: { hi: 'वे कभी भी कक्षा के लिए देर से नहीं आते।', es: 'Ellos nunca llegan tarde a clase.' },
      audioText: 'never',
      audioId: 'en_a1_u01_l10_v_never',
      slowAudioId: 'en_a1_u01_l10_v_never_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🚫',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_time_morning',
      word: 'in the morning',
      phonetic: '/ɪn ðə ˈmɔːr.nɪŋ/',
      meaning: 'During the early hours of the day before noon',
      translationsByLang: { hi: 'सुबह में', es: 'por la mañana', fr: 'le matin', de: 'am Morgen / morgens', pt: 'de manhã', zh: '在早晨 / 上午', ar: 'في الصباح', ja: '朝に / 午前中に', ru: 'утром' },
      exampleSentence: 'I take a shower in the morning.',
      exampleTranslationByLang: { hi: 'मैं सुबह स्नान करता हूँ।', es: 'Tomo una ducha por la mañana.' },
      audioText: 'in the morning',
      audioId: 'en_a1_u01_l10_v_in_morning',
      slowAudioId: 'en_a1_u01_l10_v_in_morning_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌅',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_time_afternoon',
      word: 'in the afternoon',
      phonetic: '/ɪn ðə ˌæf.tɚˈnuːn/',
      meaning: 'During the period between 12:00 PM and evening',
      translationsByLang: { hi: 'दोपहर में', es: 'por la tarde', fr: 'l\'après-midi', de: 'am Nachmittag / nachmittags', pt: 'à tarde', zh: '在下午', ar: 'بعد الظهر', ja: '午後に', ru: 'днем / после полудня' },
      exampleSentence: 'She drinks green tea in the afternoon.',
      exampleTranslationByLang: { hi: 'वह दोपहर में ग्रीन टी पीती है।', es: 'Ella bebe té verde por la tarde.' },
      audioText: 'in the afternoon',
      audioId: 'en_a1_u01_l10_v_in_afternoon',
      slowAudioId: 'en_a1_u01_l10_v_in_afternoon_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '☀️',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_time_evening',
      word: 'in the evening',
      phonetic: '/ɪn ðə ˈiːv.nɪŋ/',
      meaning: 'During the late part of day before night',
      translationsByLang: { hi: 'शाम को', es: 'por la tarde-noche', fr: 'le soir', de: 'am Abend / abends', pt: 'à noite / ao entardecer', zh: '在傍晚 / 晚上', ar: 'في المساء', ja: '夕方に / 夜に', ru: 'вечером' },
      exampleSentence: 'We relax and watch TV in the evening.',
      exampleTranslationByLang: { hi: 'हम शाम को आराम करते हैं और टीवी देखते हैं।', es: 'Nos relajamos y vemos la tele por la tarde-noche.' },
      audioText: 'in the evening',
      audioId: 'en_a1_u01_l10_v_in_evening',
      slowAudioId: 'en_a1_u01_l10_v_in_evening_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌆',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_time_night',
      word: 'at night',
      phonetic: '/æt naɪt/',
      meaning: 'During the dark hours before morning (uses preposition "at")',
      translationsByLang: { hi: 'रात में', es: 'por la noche', fr: 'la nuit', de: 'in der Nacht / nachts', pt: 'de noite', zh: '在夜间 / 夜里', ar: 'في الليل', ja: '夜に', ru: 'ночью' },
      exampleSentence: 'I read a book at night.',
      exampleTranslationByLang: { hi: 'मैं रात में किताब पढ़ता हूँ।', es: 'Leo un libro por la noche.' },
      audioText: 'at night',
      audioId: 'en_a1_u01_l10_v_at_night',
      slowAudioId: 'en_a1_u01_l10_v_at_night_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '🌙',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'v_time_on_weekend',
      word: 'on the weekend',
      phonetic: '/ɑːn ðə ˈwiːk.end/',
      meaning: 'During Saturday and Sunday period',
      translationsByLang: { hi: 'सप्ताहांत पर (वीकेंड पर)', es: 'el fin de semana', fr: 'le week-end', de: 'am Wochenende', pt: 'no fim de semana', zh: '在周末', ar: 'في عطلة نهاية الأسبوع', ja: '週末に', ru: 'на выходных' },
      exampleSentence: 'We travel to the mountains on the weekend.',
      exampleTranslationByLang: { hi: 'हम वीकेंड पर पहाड़ों की यात्रा करते हैं।', es: 'Viajamos a la montaña el fin de semana.' },
      audioText: 'on the weekend',
      audioId: 'en_a1_u01_l10_v_on_weekend',
      slowAudioId: 'en_a1_u01_l10_v_on_weekend_slow',
      voiceId: 'EN_TEACHER_01',
      icon: '⛰️',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 4: Lexical Chunks
  expressions: [
    {
      id: 'chunk_how_often_gym',
      text: 'How often do you go to the gym?',
      meaning: 'Asking about the frequency of an activity',
      translationsByLang: {
        hi: 'आप कितनी बार जिम जाते हैं?',
        es: '¿Con qué frecuencia vas al gimnasio?',
        fr: 'À quelle fréquence allez-vous à la salle de sport ?',
        de: 'Wie oft gehst du ins Fitnessstudio?'
      },
      audioText: 'How often do you go to the gym?',
      audioId: 'en_a1_u01_l10_c_how_often',
      context: 'Asking about health and fitness routines',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_always_coffee',
      text: 'I always have coffee in the morning.',
      meaning: 'Stating a 100% daily morning habit',
      translationsByLang: {
        hi: 'मैं हमेशा सुबह कॉफी पीता हूँ।',
        es: 'Siempre tomo café por la mañana.',
        fr: 'Je prends toujours du café le matin.',
        de: 'Ich trinke morgens immer Kaffee.'
      },
      audioText: 'I always have coffee in the morning.',
      audioId: 'en_a1_u01_l10_c_always_coffee',
      context: 'Morning routine description',
      difficulty: 'A1 Beginner'
    },
    {
      id: 'chunk_on_saturdays_usually',
      text: 'On Saturdays, I usually relax.',
      meaning: 'Describing a typical weekend activity',
      translationsByLang: {
        hi: 'शनिवार को मैं आमतौर पर आराम करता हूँ।',
        es: 'Los sábados normalmente me relajo.',
        fr: 'Le samedi, je me détends d\'habitude.',
        de: 'Samstags entspanne ich mich normalerweise.'
      },
      audioText: 'On Saturdays, I usually relax.',
      audioId: 'en_a1_u01_l10_c_saturdays_relax',
      context: 'Weekend plans and leisure discussion',
      difficulty: 'A1 Beginner'
    }
  ],

  // SECTION 5 & 6: Grammar
  grammar: {
    patterns: [
      {
        id: 'g_adverb_frequency_placement',
        title: 'Placement of Frequency Adverbs',
        rule: 'Frequency adverbs go BEFORE standard main verbs (I ALWAYS wake up at 7). However, they go AFTER the verb "to be" (He IS ALWAYS happy).',
        formula: 'Subject + [always/usually/often/sometimes/never] + Main Verb | Subject + [am/is/are] + [always/usually/often/sometimes/never]',
        examples: [
          { sentence: 'I usually drink tea, but I never drink soda.', translation: 'मैं आमतौर पर चाय पीता हूँ, पर सोडा कभी नहीं पीता। / Normalmente bebo té, pero nunca tomo refrescos.', audioText: 'I usually drink tea, but I never drink soda.', audioId: 'en_a1_u01_l10_g_ex1' },
          { sentence: 'She is always on time for work.', translation: 'वह हमेशा काम पर समय पर होती है। / Ella siempre llega a tiempo al trabajo.', audioText: 'She is always on time for work.', audioId: 'en_a1_u01_l10_g_ex2' },
          { sentence: 'They often eat dinner in restaurants.', translation: 'वे अक्सर रेस्तरां में खाना खाते हैं। / A menudo cenan en restaurantes.', audioText: 'They often eat dinner in restaurants.', audioId: 'en_a1_u01_l10_g_ex3' }
        ],
        explanationByLang: {
          hi: 'साधारण क्रियाओं (main verbs) से पहले Frequency Adverb आता है (उदा. "I always drink")। लेकिन "to be" (am, is, are) के बाद आता है (उदा. "He is always happy")।',
          es: 'Los adverbios de frecuencia van ANTES de los verbos normales (I always drink) pero DESPUÉS del verbo to be (He is always happy).'
        }
      },
      {
        id: 'g_prepositions_days_time',
        title: 'Prepositions: ON days, AT times/night, IN parts of day',
        rule: 'Use "ON" with days of the week (on Monday, on Friday). Use "IN" with parts of day (in the morning, in the evening). Use "AT" with clock times and night (at 7:00, at night, at the weekend).',
        formula: 'on [Day] | in [the morning/afternoon/evening] | at [Clock Time / night / the weekend]',
        examples: [
          { sentence: 'We have meetings on Monday morning.', translation: 'सोमवार की सुबह हमारी बैठकें होती हैं। / Tenemos reuniones el lunes por la mañana.', audioText: 'We have meetings on Monday morning.', audioId: 'en_a1_u01_l10_g_ex4' },
          { sentence: 'I go to bed at night at 11:00.', translation: 'मैं रात 11:00 बजे सोने जाता हूँ। / Me voy a la cama por la noche a las 11:00.', audioText: 'I go to bed at night at 11:00.', audioId: 'en_a1_u01_l10_g_ex5' }
        ],
        explanationByLang: {
          hi: 'दिनों के साथ "ON" (on Tuesday), समय के पहर के साथ "IN" (in the morning), और निश्चित समय/रात के साथ "AT" (at 8:00, at night) का प्रयोग करें।',
          es: 'Usa "on" para días (on Monday), "in" para momentos del día (in the morning), y "at" para horas y noche (at 8:00, at night).'
        }
      }
    ]
  },

  // SECTION 7: Common Mistakes
  commonMistakes: [
    {
      id: 'cm_l10_adverb_position',
      incorrect: 'I go always to the gym on Tuesday.',
      correct: 'I always go to the gym on Tuesday.',
      whyExplanation: 'Frequency adverbs must go BEFORE the main action verb: "I always go".',
      explanationsByLang: {
        hi: 'Frequency adverb क्रिया से पहले आता है: "I always go", "I go always" गलत है।',
        es: 'El adverbio va antes del verbo principal: "I always go", no "I go always".',
        fr: 'L\'adverbe se place avant le verbe : "I always go".',
        de: 'Das Adverb steht vor dem Hauptverb: "I always go".'
      }
    },
    {
      id: 'cm_l10_be_adverb_position',
      incorrect: 'She always is happy.',
      correct: 'She is always happy.',
      whyExplanation: 'With the verb "to be", frequency adverbs go AFTER the verb: "She is always".',
      explanationsByLang: {
        hi: 'Verb "to be" (am/is/are) के बाद adverb आता है: "She is always happy"।',
        es: 'Con el verbo to be, el adverbio va después: "She is always happy".',
        fr: 'Après le verbe to be : "She is always happy".',
        de: 'Nach dem Verb to be : "She is always happy".'
      }
    }
  ],

  // SECTION 11: Dialogue
  dialogues: [
    {
      id: 'd_a1_1_10_weekend_habits',
      title: 'Discussing Weekly Schedules & Habits',
      context: 'Alex and Chloe talk about their typical weekly schedule and weekend activities.',
      characters: [
        { id: 'char_alex', name: 'Alex', role: 'Student' },
        { id: 'char_chloe', name: 'Chloe', role: 'Student' }
      ],
      turns: [
        {
          id: 'turn_1',
          speakerId: 'char_alex',
          speakerName: 'Alex',
          text: 'How often do you practice sports, Chloe?',
          translationsByLang: { hi: 'क्लोई, आप कितनी बार खेल का अभ्यास करती हैं?', es: '¿Con qué frecuencia haces deporte, Chloe?' },
          audioText: 'How often do you practice sports, Chloe?',
          audioId: 'en_a1_u01_l10_d01_t1'
        },
        {
          id: 'turn_2',
          speakerId: 'char_chloe',
          speakerName: 'Chloe',
          text: 'I usually go swimming on Wednesday and Friday.',
          translationsByLang: { hi: 'मैं आमतौर पर बुधवार और शुक्रवार को तैराकी करने जाती हूँ।', es: 'Normalmente voy a nadar los miércoles y viernes.' },
          audioText: 'I usually go swimming on Wednesday and Friday.',
          audioId: 'en_a1_u01_l10_d01_t2'
        },
        {
          id: 'turn_3',
          speakerId: 'char_alex',
          speakerName: 'Alex',
          text: 'And what do you do on the weekend?',
          translationsByLang: { hi: 'और आप वीकेंड पर क्या करती हैं?', es: '¿Y qué haces el fin de semana?' },
          audioText: 'And what do you do on the weekend?',
          audioId: 'en_a1_u01_l10_d01_t3'
        },
        {
          id: 'turn_4',
          speakerId: 'char_chloe',
          speakerName: 'Chloe',
          text: 'On Saturdays, I always visit my grandparents. On Sunday, I relax and read books.',
          translationsByLang: { hi: 'शनिवार को मैं हमेशा अपने दादा-दादी से मिलने जाती हूँ। रविवार को मैं आराम करती हूँ और किताबें पढ़ती हूँ।', es: 'Los sábados siempre visito a mis abuelos. Los domingos descanso y leo libros.' },
          audioText: 'On Saturdays, I always visit my grandparents. On Sunday, I relax and read books.',
          audioId: 'en_a1_u01_l10_d01_t4'
        },
        {
          id: 'turn_5',
          speakerId: 'char_alex',
          speakerName: 'Alex',
          text: 'That sounds like a wonderful routine!',
          translationsByLang: { hi: 'यह बहुत ही बढ़िया दिनचर्या लगती है!', es: '¡Suena como una rutina maravillosa!' },
          audioText: 'That sounds like a wonderful routine!',
          audioId: 'en_a1_u01_l10_d01_t5'
        }
      ]
    }
  ],

  // SECTION 8, 9, 10, 12, 13, 14, 15, 16: Practice Exercises
  practiceExercises: [
    {
      id: 'ex_l10_p1',
      lessonId: 'lesson_a1_1_10',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Select the correct word order with the main verb "drink":',
      sourceSentence: 'Coffee habit:',
      options: [
        { id: 'o1', text: 'I always drink coffee in the morning.', isCorrect: true },
        { id: 'o2', text: 'I drink always coffee in the morning.', isCorrect: false },
        { id: 'o3', text: 'Always I drink coffee in the morning.', isCorrect: false }
      ],
      explanation: 'Adverbs of frequency go before main verbs: "I always drink".'
    },
    {
      id: 'ex_l10_p2',
      lessonId: 'lesson_a1_1_10',
      stage: 8,
      type: 'fill_blank',
      prompt: 'Fill in the correct preposition for days of the week:',
      sourceSentence: 'We have English lessons ___ Tuesday and Thursday.',
      options: [
        { id: 'o1', text: 'on', isCorrect: true },
        { id: 'o2', text: 'at', isCorrect: false },
        { id: 'o3', text: 'in', isCorrect: false }
      ],
      explanation: 'Use "on" with days of the week.'
    },
    {
      id: 'ex_l10_p3',
      explanation: 'Frequency adverbs like \'never\' come after \'is\' (am, is, are) but before other verbs: \'He is never late.\'',
      lessonId: 'lesson_a1_1_10',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      targetSentence: 'He is never late for work',
      wordBank: ['He', 'is', 'never', 'late', 'for', 'work', 'never is', 'she']
    },
    {
      id: 'ex_l10_p4',
      lessonId: 'lesson_a1_1_10',
      stage: 9,
      type: 'listening',
      prompt: 'Listen to the routine statement:',
      audioText: 'I usually eat lunch at one o\'clock on weekdays',
      options: [
        { id: 'o1', text: 'I usually eat lunch at one o\'clock on weekdays', isCorrect: true },
        { id: 'o2', text: 'I never eat lunch at one o\'clock on weekends', isCorrect: false },
        { id: 'o3', text: 'I always eat dinner at seven o\'clock on weekdays', isCorrect: false }
      ],
      explanation: 'The speaker states "I usually eat lunch at one o\'clock on weekdays".'
    },
    {
      id: 'ex_l10_p5',
      explanation: '\'Often\' comes before the main verb: \'We often go to the park on Sunday.\'',
      lessonId: 'lesson_a1_1_10',
      stage: 9,
      type: 'listen_and_type',
      prompt: 'Listen and write the phrase exactly:',
      audioText: 'We often go to the park on Sunday',
      targetSentence: 'We often go to the park on Sunday'
    },
    {
      id: 'ex_l10_p6',
      explanation: '\'How often\' asks about frequency. The question continues: \'do\' + subject + base verb.',
      lessonId: 'lesson_a1_1_10',
      stage: 10,
      type: 'word_ordering',
      prompt: 'Build the frequency question:',
      targetSentence: 'How often do you go to the cinema',
      wordBank: ['How', 'often', 'do', 'you', 'go', 'to', 'the', 'cinema', 'when', 'is']
    },
    {
      id: 'ex_l10_p7',
      explanation: '\'Usually\' comes before the main verb \'relax\': \'I usually relax and read a book.\'',
      lessonId: 'lesson_a1_1_10',
      stage: 12,
      type: 'speaking',
      prompt: 'Read this sentence aloud:',
      targetSentence: 'On Saturdays, I usually relax and read a book.',
      audioText: 'On Saturdays, I usually relax and read a book.'
    },
    {
      id: 'ex_l10_p8',
      explanation: '\'Rarely\' comes before the main verb: \'He rarely eats out at night.\' Hindi: \'वह शायद ही कभी रात में बाहर खाता है।\'',
      lessonId: 'lesson_a1_1_10',
      stage: 13,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'वह शायद ही कभी रात में बाहर खाता है।',
      sourceTranslations: {
        hi: 'वह शायद ही कभी रात में बाहर खाता है।',
        es: 'Él casi nunca come fuera por la noche.'
      },
      targetSentence: 'He rarely eats out at night',
      wordBank: ['He', 'rarely', 'eats', 'out', 'at', 'night', 'eat', 'in', 'she']
    },
    {
      id: 'ex_l10_p9',
      lessonId: 'lesson_a1_1_10',
      stage: 14,
      type: 'fill_blank',
      prompt: 'Interleaved Practice (Combining Lesson 6 Adjectives & Lesson 10 Frequency):',
      sourceSentence: 'The city library is ___ quiet and clean on Monday.',
      options: [
        { id: 'o1', text: 'always', isCorrect: true },
        { id: 'o2', text: 'every', isCorrect: false },
        { id: 'o3', text: 'at', isCorrect: false }
      ],
      explanation: 'Adverb "always" follows the verb "is".'
    },
    {
      id: 'ex_l10_p10',
      lessonId: 'lesson_a1_1_10',
      stage: 15,
      type: 'error_correction',
      prompt: 'Fix the adverb position:',
      sourceSentence: 'They watch sometimes movies on Friday.',
      options: [
        { id: 'o1', text: 'They sometimes watch movies on Friday.', isCorrect: true },
        { id: 'o2', text: 'They watch movies sometimes on Friday.', isCorrect: false },
        { id: 'o3', text: 'They are sometimes watch movies on Friday.', isCorrect: false }
      ],
      explanation: 'Place "sometimes" before the verb "watch".'
    },
    {
      id: 'ex_l10_p11',
      lessonId: 'lesson_a1_1_10',
      stage: 16,
      type: 'dialogue_completion',
      prompt: 'Choose the appropriate answer:',
      sourceSentence: 'Friend: "How often do you exercise?" -> You: "___"',
      options: [
        { id: 'o1', text: 'I exercise three times a week.', isCorrect: true },
        { id: 'o2', text: 'It is five dollars.', isCorrect: false },
        { id: 'o3', text: 'Across from the hospital.', isCorrect: false }
      ],
      explanation: 'States the frequency of exercising.'
    },
    {
      id: 'ex_l10_p12',
      lessonId: 'lesson_a1_1_10',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which day comes between Tuesday and Thursday?',
      sourceSentence: 'Days of the week sequence:',
      options: [
        { id: 'o1', text: 'Wednesday', isCorrect: true },
        { id: 'o2', text: 'Friday', isCorrect: false },
        { id: 'o3', text: 'Monday', isCorrect: false }
      ],
      explanation: 'Wednesday is between Tuesday and Thursday.'
    },
    {
      id: 'ex_l10_p13',
      lessonId: 'lesson_a1_1_10',
      stage: 8,
      type: 'multiple_choice',
      prompt: 'Which adverb represents 0% frequency?',
      sourceSentence: 'Frequency percentage check:',
      options: [
        { id: 'o1', text: 'never', isCorrect: true },
        { id: 'o2', text: 'often', isCorrect: false },
        { id: 'o3', text: 'usually', isCorrect: false }
      ],
      explanation: '"Never" represents 0% frequency.'
    },
    {
      id: 'ex_l10_p14',
      explanation: '\'Always\' comes before the main verb: \'We always finish work early on Friday.\'',
      lessonId: 'lesson_a1_1_10',
      stage: 8,
      type: 'word_ordering',
      prompt: 'Construct the sentence:',
      targetSentence: 'We always finish work early on Friday',
      wordBank: ['We', 'always', 'finish', 'work', 'early', 'on', 'Friday', 'at', 'never']
    },
    {
      id: 'ex_l10_p15',
      explanation: '\'Rarely\' comes before the main verb. With \'I\', the verb \'drink\' has no -s.',
      lessonId: 'lesson_a1_1_10',
      stage: 12,
      type: 'speaking',
      prompt: 'Say this habit into your microphone:',
      targetSentence: 'I rarely drink tea in the evening.',
      audioText: 'I rarely drink tea in the evening.'
    }
  ],

  // SECTION 16: Review Exercises
  reviewExercises: [
    {
      id: 'ex_l10_rev1',
      lessonId: 'lesson_a1_1_10',
      stage: 16,
      type: 'multiple_choice',
      prompt: 'Which sentence has correct word order?',
      sourceSentence: 'Adverb placement check:',
      options: [
        { id: 'o1', text: 'She usually wakes up at seven.', isCorrect: true },
        { id: 'o2', text: 'She wakes usually up at seven.', isCorrect: false },
        { id: 'o3', text: 'Usually she is wake up at seven.', isCorrect: false }
      ],
      explanation: '"Usually" precedes the verb "wakes up".'
    },
    {
      id: 'ex_l10_rev2',
      lessonId: 'lesson_a1_1_10',
      stage: 16,
      type: 'fill_blank',
      prompt: 'Fill in the correct preposition:',
      sourceSentence: 'I love to relax ___ the weekend.',
      options: [
        { id: 'o1', text: 'at', isCorrect: true },
        { id: 'o2', text: 'in', isCorrect: false },
        { id: 'o3', text: 'to', isCorrect: false }
      ],
      explanation: 'Use "at the weekend" (or "on the weekend").'
    },
    {
      id: 'ex_l10_rev3',
      explanation: 'With \'are\', the adverb \'always\' comes after the verb: \'They are always friendly to new students.\'',
      lessonId: 'lesson_a1_1_10',
      stage: 16,
      type: 'word_ordering',
      prompt: 'Assemble the sentence correctly:',
      targetSentence: 'They are always friendly to new students',
      wordBank: ['They', 'are', 'always', 'friendly', 'to', 'new', 'students', 'always are']
    },
    {
      id: 'ex_l10_rev4',
      explanation: '\'Often\' comes before the main verb \'have\': \'We often have lunch with family on Sunday.\' Hindi: \'हम अक्सर रविवार को परिवार के साथ लंच करते हैं।\'',
      lessonId: 'lesson_a1_1_10',
      stage: 16,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'हम अक्सर रविवार को परिवार के साथ लंच करते हैं।',
      sourceTranslations: { hi: 'हम अक्सर रविवार को परिवार के साथ लंच करते हैं।', es: 'A menudo almorzamos en familia los domingos.' },
      targetSentence: 'We often have lunch with family on Sunday',
      wordBank: ['We', 'often', 'have', 'lunch', 'with', 'family', 'on', 'Sunday', 'at', 'they']
    }
  ],

  // SECTION 17: Assessment Exercises (10 items)
  assessmentExercises: [
    {
      id: 'ex_l10_a1',
      lessonId: 'lesson_a1_1_10',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Choose the correct position for "sometimes":',
      sourceSentence: 'Position test:',
      options: [
        { id: 'o1', text: 'I sometimes cook dinner at home.', isCorrect: true },
        { id: 'o2', text: 'I cook sometimes dinner at home.', isCorrect: false },
        { id: 'o3', text: 'I am cook sometimes dinner at home.', isCorrect: false },
        { id: 'o4', text: 'I cook dinner sometimes at home always.', isCorrect: false }
      ],
      explanation: 'Place "sometimes" before "cook".'
    },
    {
      id: 'ex_l10_a2',
      lessonId: 'lesson_a1_1_10',
      stage: 17,
      type: 'fill_blank',
      prompt: 'Fill in the correct preposition of time:',
      sourceSentence: 'My class starts ___ 8:30 AM ___ Monday.',
      options: [
        { id: 'o1', text: 'at / on', isCorrect: true },
        { id: 'o2', text: 'in / at', isCorrect: false },
        { id: 'o3', text: 'on / in', isCorrect: false },
        { id: 'o4', text: 'at / in', isCorrect: false }
      ],
      explanation: '"at" with clock times, "on" with days.'
    },
    {
      id: 'ex_l10_a3',
      explanation: '\'Usually\' comes before the verb \'leaves\'. \'She\' takes -s on the verb.',
      lessonId: 'lesson_a1_1_10',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Build the frequency statement:',
      targetSentence: 'She usually leaves home at eight on weekdays',
      wordBank: ['She', 'usually', 'leaves', 'home', 'at', 'eight', 'on', 'weekdays', 'in']
    },
    {
      id: 'ex_l10_a4',
      lessonId: 'lesson_a1_1_10',
      stage: 17,
      type: 'error_correction',
      prompt: 'Correct the error in adverb order:',
      sourceSentence: 'He goes never to bed before midnight.',
      options: [
        { id: 'o1', text: 'He never goes to bed before midnight.', isCorrect: true },
        { id: 'o2', text: 'He is never go to bed before midnight.', isCorrect: false },
        { id: 'o3', text: 'He goes to bed never before midnight.', isCorrect: false }
      ],
      explanation: 'Place "never" before the verb "goes": "He never goes".'
    },
    {
      id: 'ex_l10_a5',
      lessonId: 'lesson_a1_1_10',
      stage: 17,
      type: 'listening',
      prompt: 'Listen and select what the speaker says:',
      audioText: 'We always drink tea in the afternoon',
      options: [
        { id: 'o1', text: 'We always drink tea in the afternoon', isCorrect: true },
        { id: 'o2', text: 'We never drink coffee in the morning', isCorrect: false },
        { id: 'o3', text: 'We usually drink tea in the evening', isCorrect: false }
      ],
      explanation: 'The speaker states "We always drink tea in the afternoon".'
    },
    {
      id: 'ex_l10_a6',
      explanation: 'With \'is\', the adverb \'often\' comes after the verb: \'He is often tired after work.\'',
      lessonId: 'lesson_a1_1_10',
      stage: 17,
      type: 'listen_and_type',
      prompt: 'Listen and type the exact sentence:',
      audioText: 'He is often tired after work',
      targetSentence: 'He is often tired after work'
    },
    {
      id: 'ex_l10_a7',
      lessonId: 'lesson_a1_1_10',
      stage: 17,
      type: 'dialogue_completion',
      prompt: 'Select the best reply:',
      sourceSentence: 'Colleague: "Do you work on Saturday?" -> You: "___"',
      options: [
        { id: 'o1', text: 'No, I never work on the weekend.', isCorrect: true },
        { id: 'o2', text: 'Yes, it is next to the pharmacy.', isCorrect: false },
        { id: 'o3', text: 'I have a black laptop.', isCorrect: false }
      ],
      explanation: 'Directly answers whether you work on Saturday.'
    },
    {
      id: 'ex_l10_a8',
      explanation: 'With \'is\', \'always\' comes after the verb: \'She is always on time.\' Hindi: \'वह हमेशा समय पर आती है।\'',
      lessonId: 'lesson_a1_1_10',
      stage: 17,
      type: 'translation',
      prompt: 'Translate into English:',
      sourceSentence: 'वह हमेशा समय पर आती है।',
      sourceTranslations: { hi: 'वह हमेशा समय पर आती है।', es: 'Ella siempre llega a tiempo.' },
      targetSentence: 'She is always on time',
      wordBank: ['She', 'is', 'always', 'on', 'time', 'always is', 'he', 'at']
    },
    {
      id: 'ex_l10_a9',
      lessonId: 'lesson_a1_1_10',
      stage: 17,
      type: 'multiple_choice',
      prompt: 'Which day is capitalized correctly?',
      sourceSentence: 'Spelling and capitalization check:',
      options: [
        { id: 'o1', text: 'Wednesday', isCorrect: true },
        { id: 'o2', text: 'wednesday', isCorrect: false },
        { id: 'o3', text: 'Wensday', isCorrect: false },
        { id: 'o4', text: 'Wendesday', isCorrect: false }
      ],
      explanation: 'Days of the week must always be capitalized in English: "Wednesday".'
    },
    {
      id: 'ex_l10_a10',
      explanation: 'In the question, \'usually\' goes between the subject and the main verb: \'What do you usually do on Sunday evening?\'',
      lessonId: 'lesson_a1_1_10',
      stage: 17,
      type: 'word_ordering',
      prompt: 'Assemble the final question:',
      targetSentence: 'What do you usually do on Sunday evening',
      wordBank: ['What', 'do', 'you', 'usually', 'do', 'on', 'Sunday', 'evening', 'when', 'is']
    }
  ]
};
